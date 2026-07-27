# 《PMSM观测器控制这件小事》| 22讲：SMO+PLL：用"追光"的方式提取角度

原创 傅存敬 电磁散人 2026-06-09 07:06

> 原文地址: [https://mp.weixin.qq.com/s/-mqFRDZWeuGrD2V\_6jqRVQ](https://mp.weixin.qq.com/s/-mqFRDZWeuGrD2V_6jqRVQ)

那是去年秋天的事。

前一周你才按 [第21讲](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486643&idx=1&sn=2b401ca7f0cc4dfa58b2fc0e6345b9e2&scene=21#wechat_redirect) 的方法把 atan2 的跳变问题修好：角度归一化、差分 wrap 保护、低速幅值判断，一样没落。电机在高速区转得四平八稳，低速 300 rpm 以下虽然还有轻微抖动，但你心里默念："反正切就这样了，能跑就行。"

客户来了。你把转速从 2000 rpm 降到 200 rpm，通过 DAC 或实时日志导出的速度估计曲线在屏幕上像心电图一样起伏。

"这个速度反馈，能用到伺服定位吗？"客户问。

"低速段信噪比差，有点抖是正常的。"你硬着头皮解释。

客户没说话，从手机里翻出一段视频。画面是另一家厂商的电机，转速同样 200 rpm，速度曲线像拉直的棉线。

"他们用的不是反正切，"客户说，"是锁相环。"

那一刻你脑子里闪过一堆问号。

锁相环（PLL, Phase-Locked Loop）——这个词你在每篇无感控制的论文里都见过，但你一直以为它只是个"可选的后处理滤波器"，跟 LPF 差不多。客户的意思是：人家根本不用 atan2，PLL 直接承担角度提取的全部工作？

你回去翻了一晚上论文和源码。第二天中午，你终于搞懂了：

**PLL 不是"atan2 后面的一个滤波器"。它是另一条完全不同的角度提取路线。**

## 追光者：PLL 到底在追什么？

先别急着看公式，咱们先聊个场景。

想象你站在舞台上，手里握着一支追光灯。舞台对面有一个演员，手里拿着一面小镜子，不停地把一束光反射到你这边。你的任务很简单：让追光灯的光斑始终打在镜子上。

演员不动的时候，你把灯对准他就行。但他会走动，还会变速——有时候小步慢跑，有时候突然冲刺。

你怎么追？

最笨的办法：每隔一秒钟看一眼镜子的位置，然后直接把灯甩过去。这就是**atan2 的思路**——每次采样都重新计算一个绝对角度，不考虑演员刚才在哪、跑得多快。

问题很明显：如果镜子离你很远（相当于低速时向量幅值小），你目测的位置误差会被距离放大；如果演员刚好从舞台左边跑到右边经过你正前方（相当于跨过 ±π 分支边界），你手一抖就可能把灯甩到反方向去。

更聪明的办法：**你记住演员刚才的位置和速度，预测他下一秒会在哪，然后提前把灯移过去。** 如果预测偏了，你就根据光斑和镜子的偏差微调速度。偏差大的时候转得快一点，偏差小的时候转得慢一点。久而久之，你的追光动作会变得丝滑流畅，速度变化也是连续的。

这就是 PLL 的思路。

生活实例

技术元素

功能边界

镜子反射的光

观测器输出的磁链/BEMF 向量

提供"目标在哪"的参考信息

你预测的演员位置

PLL 内部相位估计 `θ̂`

基于上一时刻状态外推

你记忆的速度

PLL 内部速度估计 `ω̂`

决定预测步长

光斑与镜子的偏差

相位误差 `Δθ = θ − θ̂`

PI 控制器的输入

你调整追光灯的速度

PI 输出修正量

让 `ω̂` 跟踪真实转速

追光灯的实际指向

PLL 输出的 `θ̂`

理想情况下用于 Park 变换的角度（工程上 ODrive/VESC 仍多用 atan2 原始相位）

回到电机控制。观测器（SMO 或磁链观测器）输出的是一个在 α-β 平面旋转的向量。atan2 每次独立读这个向量的角度，就像你每次都重新目测镜子位置。PLL 则是一个**闭环跟踪器**：它内部维护一个"估计角度"和一个"估计速度"，每个控制周期都用速度去预测下一时刻的角度，再用观测器输出的实际相位去修正速度和角度。

说白了，atan2 是"看一次算一次"，PLL 是"边追边修正"。

## 一个二阶系统的三条腿

把追光灯的逻辑翻译成数学，就是 PLL 的经典三件套。

**第一条腿：相位检测器（Phase Detector, PD）**

它的工作是回答"目标在哪"和"我估计的位置差多少"。

在电机控制里，PD 的输入有两个：观测器输出的实际相位 `θ`（来自 atan2）和 PLL 内部维护的估计相位 `θ̂`。最简单的 PD 直接算角度差：

`Δθ = θ − θ̂`

但这有个坑：如果 `θ = 179°`、`θ̂ = −179°`，直接相减得到 358°，而实际上两者只差 2°。所以工程实现里必须用角度归一化 wrap，让 `Δθ` 落在 `[−π, π]` 区间。VESC 调用 `utils_norm_angle_rad()`，ODrive sensorless 路径调用 `wrap_pm_pi()`。

更精细的 PD 不直接算角度差，而是利用三角恒等式。把观测器输出的 α-β 向量记为 `(x, y)`，PLL 内部估计的 sin/cos 为 `(sin θ̂, cos θ̂)`，可以构造：

小角度近似下 `sin(Δθ) ≈ Δθ`，这就给 PI 控制器提供了一个线性的相位误差信号 \[P-001\]。有些归一化 PLL（QPLL）直接用 `x` 和 `y` 的叉投影作为误差，把幅值变化的影响消掉 \[P-003\]。

**第二条腿：环路滤波器（Loop Filter, LF）**

这就是 PI 控制器。它看相位误差 `Δθ`，决定该给速度加多少修正：

`Kp` 是比例项——偏差大的时候，猛地转快点追上去。`Ki` 是积分项——如果 PLL 对输入相位存在一个恒速跟踪误差，只靠 `Kp` 追到最后会差一截，`Ki` 会把这一截慢慢补上。注意：这里补的是 PLL **自身**对输入相位的跟踪误差，不是上游观测器或 LPF 造成的滞后。上游的固定 lag 必须靠相位补偿、标定或改前端链路来解决。

**第三条腿：压控振荡器（Voltage-Controlled Oscillator, VCO）**

在数字实现里，VCO 就是一句话：把速度积分成角度。

每个控制周期做一次离散积分：

`θ̂[k+1] = θ̂[k] + T_s · ω̂[k]`

三条腿连起来，PLL 的闭环结构就长这样：                                   

![](https://mmbiz.qpic.cn/sz_mmbiz_png/vvmIAIMZsAQJwUoP05QqEibBToNYQl0rl3yn3N33k1X2qyicnIjVWMJ6AYPFiaf9SfptOjdjXMgq1oeGgiaEe7WZleLq7H5aJ5b40KmGHCv9wGc/640?wx_fmt=png&from=appmsg)

注意一个关键细节：PLL 的**天然输出是速度**。角度只是速度的积分附带产物。这跟 atan2 正好反过来——atan2 天然输出角度，速度要靠差分求导，而差分会放大噪声。PLL 用积分换微分，从源头上躲开了"差分噪声"这个坑 \[P-001\]。

## 把它当成一个二阶系统来设计

三条腿连起来之后，PLL 的闭环行为可以用一个线性二阶系统来描述。前提是**相位误差足够小**，这样 `sin(Δθ) ≈ Δθ` 的近似才成立。

闭环传递函数（从真实角度 `θ` 到估计角度 `θ̂`）是：

把它跟标准二阶系统对比：

对照系数，一目了然：

`Kp = 2ζ·ωn   Ki = ωn²`

其中 `ωn` 是 PLL 的**自然频率**（决定响应快慢），`ζ` 是**阻尼比**（决定超调量）。

这给了咱们一个极其实用的设计思路：**别拍脑袋试 Kp/Ki，先把带宽和阻尼比定下来，再反推。**

### ODrive 的做法：带宽法

ODrive 的代码里，`pll_bandwidth` 是用户配置项，单位是 rad/s。内部自动换算：

`// ODrive: sensorless_estimator.cpp   float pll_kp = 2.0f * config_.pll_bandwidth;           // Kp = 2·ωn   float pll_ki = 0.25f * (pll_kp * pll_kp);              // Ki = ωn² = (Kp/2)²`

因为 `Kp = 2·ωn`，所以 `ωn = Kp/2`，代入 `Ki = ωn²` 得 `Ki = Kp²/4 = 0.25·Kp²`。

默认 `pll_bandwidth = 1000 rad/s`，算下来：

`Kp = 2000   Ki = 0.25 × 2000² = 1,000,000`

阻尼比 `ζ = Kp / (2·√Ki) = 2000 / (2 × 1000) = 1.0`，按误差动力学口径为**临界阻尼**。响应较快且不易出现明显振荡。

ODrive 还加了一道保险：

`if (!(current_meas_period * pll_kp < 1.0f)) {       error_ |= ERROR_UNSTABLE_GAIN;   }`

`current_meas_period` 约 125 μs（8 kHz 电流采样），`pll_kp = 2000`，乘积是 `0.25 < 1`，安全。但如果用户把带宽调到 10000 rad/s，`pll_kp = 20000`，乘积变成 `2.5 > 1`，离散近似就崩了，ODrive 会直接报不稳定错误。

这个条件的物理意义是：**前向 Euler 离散化要求 `Kp·T_s << 1`，否则积分步长太大，PLL 会振荡甚至发散。**

### VESC 的做法：经验值法

VESC 没有在 UI 里暴露"带宽"这个概念，直接让用户填 `foc_pll_kp` 和 `foc_pll_ki`。默认值：

`// VESC: mcconf_default.h   #define MCCONF_FOC_PLL_KP   2000.0   #define MCCONF_FOC_PLL_KI   30000.0`

这组值对应的自然频率和阻尼比：

`ωn = √Ki = √30000 ≈ 173 rad/s  (约 27.5 Hz)   ζ = Kp / (2·ωn) = 2000 / (2 × 173) ≈ 5.78`

阻尼比接近 6，严重过阻尼。响应慢，但抗噪能力强。VESC 作为通用滑板/电动车控制器，强调的是**鲁棒性优先**——不同电机、不同负载条件下不能失锁，牺牲一点动态响应是可以接受的。

项目

ODrive

VESC

参数形式

带宽 `ωn` (rad/s)

直接 `Kp`/`Ki`

默认值

`pll_bandwidth = 1000`

`Kp = 2000`

, `Ki = 30000`

`ωn`

1000 rad/s (159 Hz)

~173 rad/s (27.5 Hz)

阻尼比 `ζ`

1.0 (临界阻尼)

~5.8 (过阻尼)

设计哲学

动态响应优先

鲁棒性优先

说白了，ODrive 像一辆跑车，悬挂硬、响应快；VESC 像一辆越野车，悬挂软、过坑不颠。两者都没错，只是场景不同。

## 为什么工程上更爱 PLL？——跟 atan2 做个了断

[上一篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247486643&idx=1&sn=2b401ca7f0cc4dfa58b2fc0e6345b9e2&scene=21#wechat_redirect)我们把 atan2 的毛病列了个遍：低速 SNR 差、2π 跳变、噪声按 `1/r` 放大、速度靠差分。

PLL 把这些问题逐个收拾了。

**第一，角度连续性天然免疫 2π 跳变。**

PLL 内部维护的 `θ̂` 是一个持续积分的量，不像 atan2 每次都在 `[−π, π]` 里重新映射。即使真实角度从 179° 跳到 −179°，PLL 的相位误差 `Δθ` 经 wrap 处理后只有 2°，PI 控制器平滑地把 `ω̂` 调整一下，`θ̂` 继续优雅地跨过边界。

**第二，速度不需要差分。**

atan2 的速度估计必须对角度做差分：`ω = (θ[k] − θ[k−1]) / T_s`。这个差分是高通操作，噪声被放大。PLL 的速度是 PI 控制器的积分状态量，每个周期只受 `Ki·Δθ` 的微量调整，变化是连续的、平滑的。

**第三，PLL 自带低通滤波特性。**

看闭环传递函数：分母是 `s² + Kp·s + Ki`，这是一个低通特性。高频噪声（抖振、采样量化）会被抑制。抑制能力取决于带宽——带宽越低（`ωn` 越小），滤波越强，但跟踪越慢。这就是 VESC 把 `ωn` 压到 27 Hz 的原因。

**第四，稳态相位误差可以被 Ki 消除。**

如果观测器本身有一个固定的相位滞后（比如 LPF 导致的），atan2 会把这 lag 原封不动地传给 Park 变换。PLL 的积分项 `Ki` 可以消除 PLL 对输入相位的**恒速跟踪误差**，让 `Δθ` 收敛到零——但前提是输入速度恒定（即输入相位的斜率不变）。注意：PLL 追的是已经被 LPF 滞后过的输入信号，它不会自动知道真实转子角提前了多少。上游的固定 lag 必须靠相位补偿、标定或更改前端滤波链路来解决；如果 lag 本身随转速变化（比如 LPF 的相位滞后 `φ = −arctan(ω/ω_c)`），PLL 只能跟踪到"被 lag 污染过的输入" \[P-002\]。

特性

atan2

PLL

角度来源

独立计算

速度积分

速度来源

差分（噪声放大）

PI 积分状态（天然平滑）

2π 跳变

需外部 wrap 保护

内部自动处理

高频噪声

直接传递

被闭环低通抑制

稳态 lag 补偿

无

Ki 可消除恒速跟踪误差，上游 lag 仍需补偿

计算量

1 次 atan2（或 CORDIC）

PI + 积分；普通路径仍需前置 atan2

\[P-001\] 里有一句话说得直白：反正切函数估计角度后，速度信息需对角度微分获得，大幅放大高频噪声。PLL 通过 PI 调节频率再积分得角度，完全规避微分噪声。

但 PLL 也不是万能的。

**低速照样会掉链子。** PLL 的输入仍然是观测器输出的向量。低速时向量幅值小，atan2 算出的 `θ` 本身就抖，PLL 追的是一个"已经抖动的目标"，它只能平滑，不能无中生有。如果 `θ` 抖得比 PLL 带宽还快，PLL 就跟不上了。

**启动时可能失锁。** 电机从静止启动的最初几圈，观测器输出的向量可能根本没转起来，PLL 内部的 `θ̂` 和 `ω̂` 是任意初值（通常初始化为零）。这时候需要一个捕获过程——PLL 从"不知道目标在哪"到"锁定目标"，这个区间叫**捕获范围（Pull-in Range）**。如果启动加速度太大，目标跑出了捕获范围，PLL 就追丢了。

## 捕获、锁定、稳态：PLL 的三个阶段

理解了 PLL 的工作状态，调试时才不会瞎调参数。

**阶段一：捕获（Acquisition / Pull-in）**

PLL 刚启动时，`θ̂` 和 `ω̂` 都是零。观测器输出的相位 `θ` 可能已经转起来了（比如电机在开环 I-F 启动后切到观测器）。两者差距可能很大——`Δθ` 接近 π，甚至可能跨过 2π 边界。

这时候 PLL 像个刚睡醒的人，眼睛还没睁开就被人推了一把。`Kp` 越大，它睁眼越快。但如果 `Kp` 太大，离散化近似失效，反而会振荡。

捕获时间跟 `1/ωn` 同量级。ODrive 的 `ωn = 1000 rad/s`，捕获时间通常在几个毫秒到十几毫秒。VESC 的 `ωn ≈ 173 rad/s`，捕获可能需要几十到上百毫秒。具体取决于初始相位差和启动时的转速——如果电机已经转起来才切到 PLL，而 PLL 初值是零，捕获过程会拉长。

**阶段二：锁定（Lock / Tracking）**

PLL 追上目标后，`Δθ` 收敛到一个小值（理想情况下为零，实际有一个稳态误差）。进入锁定状态后，PLL 的行为就是一个线性二阶系统，可以按带宽和阻尼比来分析。

锁定状态下，PLL 对匀加速输入的稳态相位误差是 `α/Ki = α/ωn²`。如果转子加速度太大（比如突加负载、急加速），`Δθ` 会被拉开到超出小角度近似范围，严重时失锁。一个粗略的设计经验是：把 `ωn` 选得足够大，让 `α_max / ωn²` 落在可接受的相位误差范围内（比如 < 0.1 rad）。

**阶段三：稳态误差**

理想二阶系统对阶跃输入的稳态误差是零（因为有积分项）。对斜坡输入（恒速），稳态相位误差同样为零；但对抛物线输入（匀加速），误差不为零。

对恒速 `ω = const`，PLL 的稳态相位误差是：

`Δθ_ss = 0   (因为 Ki 积分项会补偿)`

对匀加速 `α = const`，稳态相位误差是：

`Δθ_ss = α / Ki = α / ωn²`

举个例子（假设输入为匀加速轨迹，电机 4 极对）：电机从 0 加速到 3000 rpm（电频率 200 Hz，对应 `ω_e = 1257 rad/s`），加速时间 100 ms，角加速度 `α = 1257 / 0.1 = 12570 rad/s²`。ODrive（`Ki = 10⁶`）的稳态跟踪误差约 `12570 / 10⁶ ≈ 0.013 rad ≈ 0.7°`。VESC（`Ki = 30000`）的误差约 `12570 / 30000 ≈ 0.42 rad ≈ 24°`。这就是过阻尼的代价——动态跟踪能力差。实际工况中，电机很少做理想匀加速，这个计算帮你理解 `Ki` 的量级意义，不是精确预测。

\[P-004\] 中的超高速 PMSM 方案正是为了解决这个矛盾：传统 PLL 在超高速、高加速度场景下 lag 太大，于是提出自适应归一化 QPLL，让带宽随工况自动调整。

## 看源码：ODrive 和 VESC 的 PLL 藏在哪？

### ODrive：sensorless\_estimator.cpp

ODrive 的 PLL 藏在非线性磁链观测器的更新函数里。注意它的接线方式：

`// ODrive/Firmware/MotorControl/sensorless_estimator.cpp:update()   // 节选自非线性磁链观测器更新函数，省略 fault 处理与前期状态更新      // 1. 用磁链状态 eta[0]/eta[1] 算当前相位（atan2）   float phase = fast_atan2(eta[1], eta[0]);      // 2. 用 PLL 内部速度预测下一时刻相位   float phase_vel = phase_vel_.previous().value_or(0.0f);   pll_pos_ = wrap_pm_pi(pll_pos_ + current_meas_period * phase_vel);      // 3. 相位检测：atan2 相位 vs PLL 预测相位   float delta_phase = wrap_pm_pi(phase - pll_pos_);      // 4. PI 控制器更新 PLL 相位   pll_pos_ = wrap_pm_pi(pll_pos_ + current_meas_period * pll_kp * delta_phase);      // 5. PI 控制器更新速度（积分项）   phase_vel += current_meas_period * pll_ki * delta_phase;      // 6. 输出   phase_ = phase;              // ← atan2 的原始相位，给 Park 变换用   phase_vel_ = phase_vel;      // ← PLL 输出的平滑速度`

这里有个极其重要的细节：`phase_ = phase`，不是 `phase_ = pll_pos_`。

ODrive 的 `phase_`（用于 Park 变换的角度）直接来自 `fast_atan2`，PLL 的 `pll_pos_` 主要用于内部速度估计。`phase_vel_` 才是 PLL 的核心产出——一个平滑的电角速度，再除以极对数和 2π 转换成机械转速 `vel_estimate_`。

所以 ODrive 的 PLL 更像是"一个从 atan2 相位中提取平滑速度的滤波器"，而不是"替代 atan2 的角度生成器"。

### VESC：foc\_math.c

VESC 的 PLL 实现更纯粹，是一个独立函数：

`// VESC: bldc/motor/foc_math.c:foc_pll_run()   // 节选自 foc_math.c，变量名保持原始风格      void foc_pll_run(float phase, float dt, float *phase_var,                 float *speed_var, mc_configuration *conf) {       UTILS_NAN_ZERO(*phase_var);    float delta_theta = phase - *phase_var;       utils_norm_angle_rad(&delta_theta);   // wrap 到 [-pi, pi]              UTILS_NAN_ZERO(*speed_var);       *phase_var += (*speed_var + conf->foc_pll_kp * delta_theta) * dt;       utils_norm_angle_rad((float*)phase_var);              *speed_var += conf->foc_pll_ki * delta_theta * dt;   }`

调用点在 `mcpwm_foc.c:3806`：

`// VESC: bldc/motor/mcpwm_foc.c   foc_pll_run(phase_for_speed_est, dt,                &motor_now->m_pll_phase,                &motor_now->m_pll_speed, conf_now);`

注意 `phase_for_speed_est` 的取值。在 sensorless 模式下且速度源为 observer 时，VESC 用 `m_phase_now_observer`（观测器相位，经 atan2 和补偿后得到）作为 `phase_for_speed_est`。实际控制用的相位同样是 `m_phase_now_observer`（可能叠加补偿），不是 `m_pll_phase`。如果 `foc_speed_source` 配置为 `CORRECTED`，`phase_for_speed_est` 的来源取决于当前传感器/校正链路（可能是编码器、Hall 或观测器校正后的结果）。

VESC 在调用 PLL 之后还加了一道 wind-up 保护：

`// VESC: mcpwm_foc.c   utils_truncate_number_abs((float*)&motor_now->m_pll_speed,                              fabsf(motor_now->m_speed_est_fast) * 3.0);`

PLL 速度被限制在"快速速度估计值"的 3 倍以内。这是一个安全措施——如果 PLL 失锁导致速度估计飞掉，至少不会无限增大。

### 参数表

参数

ODrive

VESC

用户可见参数

`pll_bandwidth`

 (rad/s)

`foc_pll_kp`

 / `foc_pll_ki`

Kp 默认值

2000 (由带宽换算)

2000

Ki 默认值

1,000,000 (由带宽换算)

30,000

离散化安全检查

`T_s · Kp < 1`

无显式检查

速度 wind-up 保护

无

限制在 3×fast\_speed 内

零点箝位

encoder 路径有

foc\_pll\_run 中无显式箝位

## 调试 PLL 的四个抓手

### 抓手一：验证带宽与阻尼比

如果你用的是 ODrive，先确认 `pll_bandwidth` 没有设得太离谱。

`ωn = pll_bandwidth   T_s = 1 / current_control_rate  (通常是 8 kHz → 125 μs)   安全检查：T_s · 2·ωn < 1`

比如 `pll_bandwidth = 2000 rad/s`，`T_s = 125 μs`，`T_s · Kp = 125e-6 × 4000 = 0.5 < 1`，安全。但如果调到 5000 rad/s，`T_s · Kp = 125e-6 × 10000 = 1.25 > 1`，离散近似崩了。

如果你用的是 VESC，先用公式反推当前参数的品质：

`ωn = sqrt(Ki) = sqrt(30000) ≈ 173 rad/s   ζ = Kp / (2·ωn) = 2000 / 346 ≈ 5.8`

`ζ > 2` 属于严重过阻尼，动态响应会很迟缓。如果你需要更好的加速度跟踪，可以考虑把 `Ki` 提高到 10 万左右（`ωn ≈ 316 rad/s`，`ζ ≈ 3.2`），同时监测是否引入振荡。

### 抓手二：观察相位误差 `Δθ`

`Δθ` 是 PLL 的"体检指标"。

-   • 稳态时 `|Δθ|` 应该很小（通常 < 0.1 rad ≈ 6°）。
    
-   • 如果 `|Δθ|` 持续偏大，说明 PLL 带宽太低，跟不上转速变化。
    
-   • 如果 `|Δθ|` 高频抖动，说明输入相位噪声太大，要么降低带宽，要么检查观测器前端。
    

ODrive 没有直接导出 `delta_phase`，但你可以在 `sensorless_estimator.cpp` 中 `delta_phase` 计算后加一个临时调试变量，通过日志或 telemetry 导出。VESC 的 `delta_theta` 是 `foc_pll_run()` 内的局部变量，默认不可见；需要自行在函数内添加导出逻辑。

### 抓手三：检查失锁（Loss of Lock）

失锁的典型症状：

-   • 速度估计突然跳到一个不现实的值（比如 10 万 rpm）。
    
-   • 电机实际在转，但 `vel_estimate_` 卡在零或乱跳。
    
-   • 电流突然增大，q 轴电流饱和。
    

ODrive 没有专门的失锁检测，但你可以加一个：如果 `|delta_phase|` 连续 N 个周期超过阈值（比如 π/2），判定为失锁，切换到开环模式。

VESC 的 wind-up 保护 (`truncate_number_abs`) 可以在一定程度上防止失锁后的速度飞跑，但不能检测失锁本身。

### 抓手四：速度零点抖动与低速盲区

低速时，观测器输出的向量幅值小，相位噪声大，PLL 的速度估计会在零附近来回摆动。这种摆动不是真正的运动，但会传递给速度环，导致电机在零速附近"嗡嗡"抖。

ODrive 的 `encoder.cpp` 里有一道零点箝位（用于编码器 PLL 路径，不是 sensorless 路径）：

`// ODrive: Firmware/MotorControl/encoder.cpp   if (std::abs(vel_estimate_counts_) < 0.5f * current_meas_period * pll_ki_) {       vel_estimate_counts_ = 0.0f;   }`

当速度估计值小于 `0.5·T_s·Ki` 时，直接箝到零。这是为了防止低速时速度在零附近来回抖动（deadzone 效应）。如果你的应用在低速定位场景对零速精度要求高，需要注意这个箝位会引入一个小的速度盲区。

VESC 的 `foc_pll_run` 里没有这道箝位。但 VESC 在 HFI 模式下有一道相关的低速阈值判断：

`// VESC: mcpwm_foc.c — HFI 低速重置逻辑（非 PLL 箝位）   if (fabsf(RADPS2RPM_f(motor_now->m_pll_speed)) < conf_now->foc_hfi_reset_erpm) {       motor_now->m_hfi.est_done_cnt = 0;       motor_now->m_hfi.flip_cnt = 0;   }`

这段代码的意思是：当 PLL 速度低于 HFI reset 阈值时，重置 HFI 的估计状态。它与 PLL 本身的零点抖动无关，但说明低速区速度估计的可靠性是工程上普遍关注的问题。

对于没有箝位的 PLL（如 VESC 的 `foc_pll_run`），低速零速抖动主要靠两条路来抑制：一是降低 PLL 带宽（牺牲响应换取平滑），二是改善观测器前端信号质量（减小输入相位噪声）。

🔧 **调试 Checklist**

\[ \] 确认 `pll_bandwidth`（或 Kp/Ki）的离散化安全检查通过：`T_s · Kp < 1`  
\[ \] 反推当前参数的 `ωn` 和 `ζ`，确认设计意图与场景匹配  
\[ \] 在稳态匀速下观察 `|Δθ|`，如果 > 0.1 rad，说明 PLL 带宽可能太低，跟不上输入相位的变化；若要判断上游观测器/lag 是否过大，需用编码器对比、dq 解耦效果或估计角误差来验证  
\[ \] 突加负载时观察速度跟踪延迟，如果 lag 太大，适当提高带宽（在稳定边界内）  
\[ \] 低速运行时检查零点箝位是否影响定位精度  
\[ \] 代码移植时注意 wrap 函数的方向和区间（`[-π, π]` 还是 `[0, 2π]`）

## 参考文献

\[P-001\] H. Liu, Y. Wang, Q. An, Y. Wu, and Y. Lu, "Sensorless control of CSI-fed PMSM drives based on improved extended state observer," _Energies_, vol. 19, no. 5, p. 1286, 2026.

\[P-002\] W. Xu, S. Qu, J. Zhao, H. Zhang, and X. Du, "An improved full-order sliding-mode observer for rotor position and speed estimation of SPMSM," _IEEE Access_, vol. 9, pp. 15099–15109, 2021.

\[P-003\] X. Li, Y. Cui, and X. Wu, "Sensorless control of surfaced-mounted permanent magnet synchronous motor in a wide-speed range," _Electronics_, vol. 13, no. 6, p. 1131, 2024.

\[P-004\] X. Bai, W. Huang, C. Gao, and Y. Wu, "Sensorless control of ultra-high-speed PMSM via improved PR and adaptive position observer," _Sensors_, vol. 25, no. 5, p. 1290, 2025.

\[S-001\] J. S. Kim and S. K. Sul, "Sensorless speed control of PMSM based on sliding mode observer," _IEEE Trans. Energy Conversion_, vol. 12, no. 3, pp. 263-269, Sept. 1997.