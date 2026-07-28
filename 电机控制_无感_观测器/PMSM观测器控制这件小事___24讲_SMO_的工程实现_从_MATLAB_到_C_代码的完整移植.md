# 《PMSM观测器控制这件小事》| 24讲：SMO 的工程实现：从 MATLAB 到 C 代码的完整移植

原创 傅存敬 电磁散人 2026-06-11 07:06

> 原文地址: [https://mp.weixin.qq.com/s/nvLLuAHNYmOPuZ9j4saLZQ](https://mp.weixin.qq.com/s/nvLLuAHNYmOPuZ9j4saLZQ)

各位同仁有没有遇到过这种情况？

花了整整两天在 Simulink 里搭了一套 SMO，波形漂亮得想截图发朋友圈。电流跟踪严丝合缝，反电动势估计光滑得像抹了油，角度提取的误差曲线在 ±2° 以内晃悠。

兴冲冲把模型翻译成 C 代码，烧进 STM32 MCU里，上电。

电机"嗡"地抖了一下，电流采样瞬间飙到保护阈值，驱动板红灯亮了。

你愣在原地，反复检查了三遍代码——公式明明跟 MATLAB 里一模一样，变量名都没改，怎么就不行了呢？

说白了，连续域的方程不能直接往中断里塞。采样、离散化、数值精度、时序对齐，随便哪一环没处理好，仿真里的"理想国"就会在单片机上塌成一片废墟。

这篇文章，咱们就把 SMO 从 MATLAB 搬到 MCU 的每一步拆碎嚼烂。不是泛泛而谈"要注意离散化"，而是给你一套可以直接复制粘贴的 C 代码骨架，再告诉你每个工程细节背后的坑。

## 离散化：把微分方程变成递推式

### 为什么连续方程不能直接抄进中断？

SMO 的连续域方程，各位同仁在 [第14讲](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486575&idx=1&sn=fe3185fabee5ccffc85fbb321318e41b&scene=21#wechat_redirect) 和 [第16讲](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486604&idx=1&sn=f221f7e9a9ba7e4a05ca6e2daf3f474c&scene=21#wechat_redirect) 里已经见过了。

先定义归一化饱和函数（与代码中的 `sat_norm` 对应）：

其中  是边界层厚度，单位 A。 返回无量纲值（±1 或归一化误差）。

α 轴电流估计：

β 轴同理。这里面有微分符号 ，MCU 可看不懂这个。单片机只认识"上一时刻的值"和"这一时刻的值"。

通俗来讲，咱们得把微分方程变成递推公式：告诉我  时刻的状态，我算出  时刻的状态。

### 前向欧拉：够用，而且简单

电机控制里最常用的离散化方法是**前向欧拉（Forward Euler）**。它的思想很朴素：

> 导数 ≈ 当前斜率 × 步长

写成公式就是：

 是采样周期，也就是你的 PWM 中断周期，通常是  到 （对应 8~20 kHz）。

把 SMO 的电流方程套进去：

β 轴一模一样，把下标换成 β 就行。

这就是 SMO 在 MCU 上跑的核心递推式。你可以把它理解成：上一时刻的电流估计值，加上"这一时刻应该变化多少"，就得到下一时刻的估计值。

### 为什么参考实现先不用 Tustin

有些同仁可能会问：我听说 Tustin（双线性变换）比 Euler 精度高，为什么不用 Tustin？

Tustin 确实在普通线性系统里表现更好。但 SMO 里面有 `sat()` 饱和函数，它是一个**强非线性**的开关逻辑。Tustin 的本质是把当前时刻和下一时刻的状态做加权平均，这会在饱和函数的边界上引入隐含的反馈耦合。

说白了，Tustin 假设系统在整个步长内是"温柔变化"的，但 SMO 的 `sat()` 在边界层处是**突变**的。Tustin 的平滑假设在这里会帮倒忙，甚至导致数值震荡。

\[D-003\] 的综述指出，在低载波比（CFR）工况下，前向 Euler 与后向 Euler 的近似离散化误差均较大，Tustin 虽更接近精确解但仍存在显著偏差。\[D-001\] 在 Luenberger 观测器上的实验也证明，精确离散化可将位置误差降低约 89%。SMO 的切换校正对一定模型误差有容忍度，因此常规载波比下工程上常用 Forward Euler；但低载波比/高速场景仍需评估精确离散化或相位补偿。

所以工程上的结论是：在**常规载波比**（如 CFR > 20）和**教学参考实现**的场景下，SMO 用 Forward Euler 简单、稳定、计算量小，通常就够了。但如果你的电机基波频率接近或超过 PWM 频率的 1/10（低载波比工况），前向 Euler 的模型误差会被放大，这时需要重新评估精确离散化或引入相位补偿。

### 反电动势怎么提取？两种工程方案

连续域里，等效控制  就是反电动势估计值。离散域有两种提取方式：

**方案 A：直接取开关项（无 LPF）**

优点是没有相位延迟，缺点是抖振大。适合 Super-Twisting 或边界层很薄的场合。

**方案 B：开关项过 LPF（传统做法）**

 是 LPF 截止频率。优点是平滑，缺点是有相位延迟。在 [第23讲](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486668&idx=1&sn=fd53a6a0538db8ea76e3f0975a38c003&scene=21#wechat_redirect) 里咱们专门聊过这层延迟在高速段的麻烦。

本文的参考实现采用**方案 B**，因为这是工业界最常见的做法。如果你追求极限带宽，可以改用方案 A 并配合 PLL 提取角度。

## 代码骨架：一个最小可运行的 SMO 模块

### 模块设计思路

一套能在工程里落地的 SMO 代码，至少得分三层：

-   • **配置层**：电机参数（R、L、λ）、观测器参数（K、ω\_c）
    
-   • **状态层**：电流估计值、反电动势估计值、历史数据
    
-   • **算法层**：Clarke 变换 → SMO 递推 → LPF → 角度提取
    

我把三层拆开写，不是为了炫技，而是为了让你在调试时能单独替换某一层而不影响其他层。

### 结构体定义

> 以下代码为示意用参考实现，基于前序文章的理论推导构造，可直接作为项目起点使用，非引用自特定开源项目。

`// SMO 配置参数（电机和观测器参数，初始化时写入）   // 本文假设 SPM 或 IPM 在 id≈0 工况下近似 Ld≈Lq=L   typedef struct {    float R;            // 定子电阻，Ω    float L;            // 定子电感，H    float lambda;       // 永磁磁链，Wb    float K;            // SMO 增益，单位 V（反电动势电压）    float boundary;     // 饱和边界层厚度，单位 A（建议按额定电流 5~10% 设置）    float omega_c;      // LPF 截止频率，rad/s    float Ts;           // 采样周期，s    float pll_kp;       // PLL 比例增益    float pll_ki;       // PLL 积分增益    int   pole_pairs;   // 极对数   } SMO_Config_t;      // SMO 状态变量（每个控制周期更新）   typedef struct {    float i_alpha_est;  // α 轴电流估计值    float i_beta_est;   // β 轴电流估计值    float e_alpha;      // α 轴反电动势估计值（LPF 后）    float e_beta;       // β 轴反电动势估计值（LPF 后）    float theta;        // 转子电角度，rad    float omega_e;      // 电气角速度（PLL 内部速度状态），rad/s   } SMO_State_t;`

你可以把 `SMO_Config_t` 理解成"图纸"，`SMO_State_t` 理解成"施工现场的实时状态"。图纸不会变，现场状态每过  就更新一次。

### 初始化函数

`void SMO_Init(SMO_State_t *state, const SMO_Config_t *cfg)   {       (void)cfg;  // 配置在别处校验，这里只清零状态          state->i_alpha_est = 0.0f;       state->i_beta_est  = 0.0f;       state->e_alpha     = 0.0f;       state->e_beta      = 0.0f;       state->theta       = 0.0f;       state->omega_e     = 0.0f;   }`

初始化很简单，就是把所有状态清零。这里我没有在 init 里做参数合法性检查，因为每个项目的参数校验风格不一样，有的放在上位机配置时检查，有的放在运行时检查。你可以根据项目习惯加。

### 核心 update 函数

`// Clarke 变换：三相电流 → αβ 电流   static inline void clarke_transform(float i_a, float i_b, float i_c,                                    float *i_alpha, float *i_beta)   {       *i_alpha = i_a;       *i_beta  = (i_a + 2.0f * i_b) * 0.577350269f;  // (i_a + 2*i_b)/sqrt(3)，幅值不变 Clarke       (void)i_c;  // 三相平衡时 i_a+i_b+i_c=0，理论上不用 i_c   }      // 归一化饱和函数：边界外返回 ±1，边界内返回 x/boundary（无量纲）   // 这样 K 的单位直接是 V（反电动势电压），更直观   static inline float sat_norm(float x, float boundary)   {    if (x > boundary)       return 1.0f;    else if (x < -boundary) return -1.0f;    else                    return x / boundary;   }      // 角度归一化到 [-pi, pi]   static inline float wrap_pi(float angle)   {    while (angle >  M_PI) angle -= 2.0f * M_PI;    while (angle < -M_PI) angle += 2.0f * M_PI;    return angle;   }      // SMO 主更新函数：每个 PWM 中断调用一次   void SMO_Update(SMO_State_t *state, const SMO_Config_t *cfg,                float v_alpha, float v_beta,                float i_alpha, float i_beta)   {    const float R  = cfg->R;    const float L  = cfg->L;    const float K  = cfg->K;    const float Ts = cfg->Ts;    const float wc = cfg->omega_c;    const float L_inv = 1.0f / L;    // ---- 1. SMO 电流估计递推 ----    float err_alpha = state->i_alpha_est - i_alpha;    float err_beta  = state->i_beta_est  - i_beta;    // K 的单位是 V；sat_norm 返回无量纲值（±1 或归一化误差）    float di_alpha = (v_alpha - R * state->i_alpha_est                         - K * sat_norm(err_alpha, cfg->boundary)) * L_inv;    float di_beta  = (v_beta  - R * state->i_beta_est                         - K * sat_norm(err_beta,  cfg->boundary)) * L_inv;          state->i_alpha_est += di_alpha * Ts;       state->i_beta_est  += di_beta  * Ts;    // ---- 2. 反电动势提取（开关项过 LPF）----    float raw_e_alpha = K * sat_norm(err_alpha, cfg->boundary);    float raw_e_beta  = K * sat_norm(err_beta,  cfg->boundary);    float alpha = wc * Ts;  // 前向欧拉离散系数    // 注：若 wc*Ts 较大，可用后向欧拉 alpha = wc*Ts/(1+wc*Ts) 或精确式 1-exp(-wc*Ts)    if (alpha > 1.0f) alpha = 1.0f;  // 安全钳位          state->e_alpha += alpha * (raw_e_alpha - state->e_alpha);       state->e_beta  += alpha * (raw_e_beta  - state->e_beta);    // ---- 3. 反正切提取角度（也可用 PLL）----    // 假设正转、标准相序；若实际角度反向，请检查 BEMF 符号或调换 atan2 参数    float theta_obs = atan2f(-state->e_alpha, state->e_beta);    // 注意符号：e_alpha = -lambda*omega*sin(theta), e_beta = lambda*omega*cos(theta)    // 所以 atan2(-e_alpha, e_beta) = theta    // ---- 4. 标准二阶 PLL（与 VESC foc_pll_run 等价）----    float delta_theta = wrap_pi(theta_obs - state->theta);    // 相位预测 + 比例校正       state->theta += Ts * (state->omega_e + cfg->pll_kp * delta_theta);       state->theta  = wrap_pi(state->theta);    // 速度只积 ki 项（比例项只校正相位，不混入速度状态）       state->omega_e += cfg->pll_ki * delta_theta * Ts;    // ---- 5. 数值安全检查（生产环境建议覆盖全部状态量）----    if (!isfinite(state->i_alpha_est) || !isfinite(state->i_beta_est)        || !isfinite(state->e_alpha)     || !isfinite(state->e_beta)        || !isfinite(state->theta)       || !isfinite(state->omega_e)) {           SMO_Init(state, cfg);  // 状态发散，强制复位       }   }`

这段代码大概是 80 行，是一个**最小可运行**的 SMO 核心。你把它复制到一个 `.c` 文件里，配上头文件，就能编译。

当然，工程上不会直接把这段代码丢进 FOC 中断。下面咱们聊聊怎么把它和主循环接起来，以及那些"仿真时根本想不到"的工程细节。

## 工程细节：纸上谈兵和实际跑起来的差距

MATLAB 和真实 MCU 之间，隔着四条深沟。仿真时你根本看不见它们，但每一条都能让你的电机表演"原地起飞"。

### 电流采样对齐：你采到的电流，不是"此刻"的电流

在 Simulink 里，电流 、电压  是在同一个时间戳  上计算的。它们像一对双胞胎，出生时间完全一致。

在 MCU 上可不是这样。

PWM 周期内，电流采样通常放在**周期中点**（dual-sampling 或中心对齐模式的谷底）。为什么要放这里？因为此时电流纹波最小，采样值最接近平均值。但电压指令呢？SVPWM 的占空比是在**上一个周期**算出来的，真正作用到电机绕组上还有一段死区时间和驱动延迟。

所以实际上，你采到的电流  和用来计算的电压 ，中间差了将近**一个 PWM 周期**。

这个延迟对 SMO 来说是致命的。SMO 的核心是"用电压驱动电流模型"，如果电压和电流差了整整一个周期，相当于你在用"上周的天气预报"来推导出今天的温度——方向错了，增益越大偏得越远。

ODrive 处理这个问题的方法很巧妙。它在 `sensorless_estimator.cpp` 里用了**电压记忆机制**：

`// ODrive/Firmware/MotorControl/sensorless_estimator.cpp   // V_alpha_beta_memory_ 存储的是"与本次电流测量对应的电压"   float y = -axis_->motor_.config_.phase_resistance * I_alpha_beta[i]           + V_alpha_beta_memory_[i];      // 更新记忆，为下一个周期做准备   V_alpha_beta_memory_[0] = axis_->motor_.current_control_.final_v_alpha_;   V_alpha_beta_memory_[1] = axis_->motor_.current_control_.final_v_beta_;`

说白了，ODrive 把电压延迟了一个控制周期存入记忆，等电流采样到来时，再从记忆里取出"对应的那一组电压"。考虑到电流采样本身通常也有一拍延迟，实际电压与电流的时间差可能接近两个周期。这不是什么高深算法，就是一个**时间戳对齐**的功夫。但仿真里你根本意识不到需要这么做。

### 电压重构：SVPWM 占空比怎么变成 αβ 电压？

SMO 的输入需要 αβ 坐标系下的电压 、。但 MCU 直接输出的是三相占空比（或三相 PWM 比较值），不是电压。

工程上最常见的做法是**从占空比反推电压**（假设 duty 为 0-1 的占空比，对应 0-100%）：

然后再做 Clarke 变换得到 、。

这个公式里隐藏着一个大坑：**死区时间**。

逆变器上下桥臂不能同时导通，中间必须插一段死区。死区期间电流走续流二极管，实际输出电压跟占空比算出来的理论值差了十万八千里。在 [第23讲](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486668&idx=1&sn=fd53a6a0538db8ea76e3f0975a38c003&scene=21#wechat_redirect) 里咱们聊过，死区误差的一阶近似为（忽略器件非线性压降和调制比影响）：

低速时这个误差可能比 BEMF 本身还大。VESC 在 `mcpwm_foc.c` 里做了死区补偿，把  从重构电压里扣掉。如果你的项目里没有死区补偿，至少要知道：低速段的 SMO 估计不准，死区占了很大一部分锅。

### 数值溢出保护：NaN 和 Inf 是 MCU 上的幽灵

MATLAB 用 double（64 位浮点），MCU 通常用 float（32 位）。32 位浮点的动态范围大概是 ，听起来很大对吧？但一旦某个中间结果 NaN（Not a Number）或者 Inf（Infinity），它就会像病毒一样传染——加减乘除碰到 NaN 还是 NaN，用不了几个周期，整个观测器的状态全部烂掉。

VESC 在 `foc_math.c` 里有个非常实用的小技巧：

`// 以下等价示意 VESC 的 UTILS_NAN_ZERO 宏（真实定义在 bldc/util/utils_math.h:70）   #define UTILS_NAN_ZERO(x)   if (isnan(x)) { (x) = 0.0; }      // ... 在观测器更新后 ...   UTILS_NAN_ZERO(state->x1);   UTILS_NAN_ZERO(state->x2);`

除了 NaN 检查，VESC 还做了**幅值下限保护**：

`// bldc/motor/foc_math.c   float mag = NORM2_f(state->x1, state->x2);   if (mag < (lambda * 0.5)) {       state->x1 *= 1.1;       state->x2 *= 1.1;   }`

这是干啥？防止磁链估计值太小导致角度计算爆炸。`atan2f(y, x)` 在 `x` 和 `y` 都接近零时，角度跳变比兔子还快。VESC 的做法是：如果幅值低于阈值，就主动放大一点，维持数值稳定性。

咱们前面给的参考实现里，用 `isfinite()` 做了更粗暴的兜底——一旦发现状态非有限，直接整个复位。这在调试阶段非常实用，至少不会让你盯着一堆 NaN 抓瞎。

### 定点化 vs 浮点化：什么时候可以省掉 FPU？

现在的电机控制 MCU（STM32F4/F7、TI C2000、NXP KV 系列）基本都带硬件 FPU，在加乘运算上 float 与 int 的差距通常可接受。但除法、`atan2f`、`sqrtf` 仍明显比定点运算更耗周期，资源极度受限时需精打细算。但如果你是成本敏感的项目，或者用了一颗不带 FPU 的老芯片（比如 STM32F103），就得考虑定点化了。

SMO 里哪些地方可以用定点？

-   • **Clarke 变换**：可以定点。 用 Q15 表示是 18919，乘完移位就行。
    
-   • **SMO 递推**：建议浮点。`sat_norm()` 的边界层判断、除法 、乘法 ，定点化后精度损失明显。
    
-   • **反正切/atan2**：通常需要 CORDIC、查表或近似算法，否则周期预算容易超。`atan2f` 在定点 MCU 上是计算灾难。
    

工程上的经验是：如果芯片有 FPU，**全程 float** 最省心。如果没有 FPU，可以把 Clarke 和 LPF 定点化，但 SMO 核心和 atan2 最好保留浮点或用定点 CORDIC 替代。

## VESC/ODrive 的启示：工业界为什么选了别的路

读到这里，有的同仁可能会发现一个尴尬的事实：

咱们费了这么大劲构造了一套标准 SMO，但 VESC、ODrive、phobia 这三个工业级开源项目，都没有把传统 sign-function SMO 作为主力方案。

ODrive 核心用 Ortega；VESC 以 Ortega 及其改进变体（MxLemming、MXV 等）为主；phobia 用 Ortega 配合 EKF。为什么？

### 启示一：Ortega 省掉了 LPF 这层麻烦

传统 SMO 最大的工程痛点，不是 sign 函数，而是 LPF。

LPF 带来相位延迟，高速时这个延迟会让 FOC 电流矢量指错方向。在 [第23讲](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486668&idx=1&sn=fd53a6a0538db8ea76e3f0975a38c003&scene=21#wechat_redirect) 里咱们算过，一个截止频率  的一阶 LPF，在  电气频率下相位延迟约 。

Ortega 观测器的聪明之处在于：它不估计电流，而是直接估计**磁链**。磁链是电流和电压的积分，天然比反电动势平滑一个数量级，不需要 LPF 来过滤抖振。

看看 ODrive 的核心递推，它没有 LPF，只有一个非线性校正项：

`// ODrive/Firmware/MotorControl/sensorless_estimator.cpp   float eta_factor = 0.5f * (config_.observer_gain * bandwidth_factor)                    * (pm_flux_sqr - est_pm_flux_sqr);      // 将校正项乘以采样周期后加到磁链状态上（离散化积分步）   flux_state_[i] += eta_factor * eta[i] * current_meas_period;`

没有 `sat()`，没有显式 LPF。相对传统 SMO 的显式低通滤波器而言，Ortega 避免了由 LPF 引入的固定相位延迟。这就是工业界偏爱 Ortega 的核心原因。

### 启示二：VESC MxLemming 的电流差分离散化

VESC 里的 `FOC_OBSERVER_MXLEMMING` 虽然不是传统 SMO，但它的离散化技巧值得咱们借鉴：

`// bldc/motor/foc_math.c   state->x1 += (v_alpha - R_ia) * dt - L * (i_alpha - state->i_alpha_last);   state->x2 += (v_beta  - R_ib) * dt - L * (i_beta  - state->i_beta_last);`

注意第二项：`-L * (i_alpha - state->i_alpha_last)`。这是用**电流差分**代替了电流微分的积分。

前向欧拉的写法是：

`state->x1 += (v_alpha - R * i_alpha) * dt / L;  // 传统 Euler`

MxLemming 的写法等价于把电感项移到左边做差分：

这么做的好处是**可抑制电流偏置或慢变共模误差**。因为  在相减时会消掉两拍之间不变的直流分量。但随机量化噪声通常不会自动抵消，甚至可能因差分而被放大，仍需配合滤波或足够高的 ADC 分辨率。

如果你的 SMO 实现里电流采样噪声很大，可以借鉴这个思路，把电感项从积分里拆出来做成差分。

### 启示三：温度补偿不是锦上添花，是刚需

VESC 的观测器开头有这么一段：

`// bldc/motor/foc_math.c   if (conf_now->foc_temp_comp) {       R = motor->m_res_temp_comp;   }`

定子电阻  随温度变化。铜的温度系数大概是 ，电机从室温  跑到 ，电阻涨了将近 。如果你的 SMO 里  还是固定值，高温工况下电流估计会系统性地偏掉，最终表现为角度 lag 或抖振增大。

VESC 的做法是实时测量驱动板温度（或绕组温度），按温度系数补偿 。这是一个零算法复杂度、高工程回报的改进。你的 SMO 参考实现里，建议在 `SMO_Config_t` 里预留温度补偿接口，哪怕暂时不接传感器，也为后续升级做好准备。

### 那么 传统 SMO 还值得写吗？

值得。原因有三：

第一，Ortega 虽然好，但它对参数精度要求高。磁链  的误差会直接变成角度误差，而 SMO 的开关特性对参数漂移有天然鲁棒性。

第二，SMO 是理解所有现代观测器的"第一块垫脚石"。搞懂了 SMO 的离散化、时序、数值问题，再看 Ortega、EKF、MRAS 的代码，逻辑是一脉相承的。

第三，SMO 的代码量小。Ortega 需要算磁链幅值平方、非线性校正项、反正切、PLL，一共几十行。标准 SMO 的核心递推只有六七行，在资源极度受限的芯片上（比如 8 位 MCU 控制小功率风机），SMO 可能是唯一跑得动的选项。

所以我的建议是：**先用标准 SMO 把全流程跑通，再考虑要不要迁移到 Ortega。** 先把地基打稳，再盖楼。

## 🔧 调试 Checklist

\[ \] **时序对齐**：确认输入 SMO 的 、 与 、 是同一时刻的。如果不确定，先用电压记忆机制（参考 ODrive）延迟补偿一个周期。  
\[ \] **离散化系数**：检查 `alpha = wc * Ts` 是否远小于 1。如果 `alpha > 0.5`，说明 LPF 截止频率设置过高或采样周期过大，需要调整。  
\[ \] **数值稳定性**：通过 DAC、RTT/SWO、上位机日志或 DMA buffer 导出 `i_alpha_est`、`e_alpha`，检查是否为有限值。**切忌在 PWM 中断里硬打断点**，会破坏控制实时性。首次调试建议把 `K` 设小（比如理论值的 30%），逐步加大。  
\[ \] **低速验证**：让电机以  额定转速匀速运行，导出 `raw_e_alpha`（即 `K * sat_norm(err)`）或其残差信号做 FFT。抖振频谱取决于 sign 翻转频率、边界层厚度和采样方式，通常出现在中频段；若频谱能量集中在基波低次谐波处，说明死区补偿或参数设置有问题。  
\[ \] **高速验证**：与编码器角度做互相关（先 unwrap 并对齐时间戳），检查全速域的角度 lag 是否在  以内。如果高速 lag 增大，优先检查 PLL 带宽是否足够（参考 [第22讲](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486666&idx=1&sn=8b4b4e60e1e7197c073dd9cac796b4ec&scene=21#wechat_redirect) 的整定方法）。

## 参考文献

\[D-001\] S. Guo, Y. Jin, and W. Yang, "Low carrier-frequency ratio Luenberger observer based on discrete mathematical model for SPMSMs," _Electronics_, vol. 14, no. 13, art. no. 2516, 2025.

\[D-003\] Q. An et al., "Development and new challenges of sensorless control for permanent magnet synchronous motors," _Energies_, vol. 19, no. 4, art. no. 1112, 2026.