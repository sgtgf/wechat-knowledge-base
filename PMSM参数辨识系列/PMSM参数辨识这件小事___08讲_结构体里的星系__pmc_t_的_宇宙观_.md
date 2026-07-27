# 《PMSM参数辨识这件小事》| 08讲：结构体里的星系——pmc\_t 的“宇宙观”

原创 傅存敬 电磁散人 2025-12-31 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/sk1mpc9zjn4x7x1Kll0EJQ](https://mp.weixin.qq.com/s/sk1mpc9zjn4x7x1Kll0EJQ)

各位同仁，我们先聊一个在软件开发过程中曾经遇到过的“事故”。

## 一、曾经心痛的案例：“我的代码改了你的参数，你的代码又改了我的参数”

算法工程师小王为了优化电流环性能，修改了一个全局变量，比如叫`g_current_gain`。同一天，负责参数辨识的工程师小李，为了在辨识时稳定电流，也在他的辨识函数里临时修改了这个`g_current_gain`，并在辨识结束后把它改了回来。

结果，在GitHub上把代码一合并，灾难发生了：在某些巧合的时序下，电机在正常运行时，辨识任务突然被触发，`g_current_gain`被小李的代码改掉了。而此时小王的代码正好在执行关键的力矩控制，错误的增益导致电流失控，电机剧烈抖动，触发了过流保护。

**问题的根因在哪儿？**

问题出在“**数据隔离**”和“**状态管理**”上。他们都依赖于一个混乱的、谁都可以读写的“**全局变量宇宙**”。在这个宇宙里，每个函数都是一颗独立的行星，但它们共享同一片星空（全局变量），互相之间没有清晰的边界和通信规则，极易发生“行星相撞”。

**怎么解决？**

解决方案就在我们今天要深入剖析的**代码A**的“大脑”——`pmc_t`结构体中。

打开代码A中的`pm.h`文件，第一眼看到的就是这个巨大的`pmc_t`结构体。它不是一堆简单的变量集合，它是一种软件设计的哲学，一种**面向对象**的思想。它试图把和一台电机相关的所有“**属性、状态、配置、算法、接口**”都封装在一个“**对象**”里。

```
typedef struct {
```

今天，我们就来当一次“宇宙探索者”，飞入`pmc_t`这个“星系”，看看它是如何用一个结构体，来描述一台电机的“前世今生”，以及这种设计是如何从根源上避免“行星相撞”的。

## 二、`pmc_t`：一个结构体，一个“电机宇宙”

我们可以把`pmc_t`想象成一个专为某台电机定制的“**个人档案袋**”。所有关于这台电机的信息，都装在这个袋子里，并且通过一个叫`pmc_t *pm`的指针传来传去。

### 1\. 为什么是 `pmc_t *pm`，而不是一堆`g_xxx`全局变量？

-   **数据隔离**: 如果你要同时控制两台电机，你只需要创建两个`pmc_t`对象：`pmc_t motor1, motor2;`。然后调用函数时传入不同的指针：`pm_feedback(&motor1, ...)` 和 `pm_feedback(&motor2, ...)`。两台电机的参数、状态、PI积分值，都存在各自的“档案袋”里，互不干扰。这就从根本上解决了开头那个“全局变量打架”的问题。
    
-   **状态封装**: `pmc_t`里不仅有参数，还有状态。比如`fsm_state`, `lu_MODE`。所有函数都通过检查这些状态来决定自己该做什么，而不是用一堆全局`if-else`。这让代码逻辑更清晰。
    

### 2. `pmc_t` 里的“星系”划分

现在，我们打开`pm.h`，从上到下，把`pmc_t`里的主要成员变量，划分成几个“星系”。

#### 星系一：物理世界与配置参数

这部分是电机的“**身份证**”和控制器的“**出厂设置**”，它们在一次运行中通常是不变的。

-   **硬件与环境**:
    

-   `float m_freq`: 控制频率 (Hz)，所有时间相关的计算都依赖它。
    
-   `float m_dT`: 控制周期 (s)，等于 `1.0 / m_freq`（这个赋值语句出现在main.c里）。
    
-   `int dc_resolution`: PWM计数器的最大值，决定了占空比的分辨率。
    

-   **电机本体参数** :
    

-   `float const_lambda`: 永磁体磁链 (Wb)。
    
-   `float const_Rs`: 定子电阻 (Ohm)。
    
-   `float const_im_Rz`: 在电阻辨识阶段得到的原始测量值，代表电机在特定工作条件下的等效阻抗，包含电阻和电感的综合效应。
    
-   `int const_Zp`: 极对数。
    
-   `float const_Ja`: 转动惯量 (kg·m²)。
    
-   `float const_im_Ld`, `float const_im_Lq`: d/q轴电感 (H)。
    

-   **控制器配置**:
    

-   `int config_NOP`: 相数（两相/三相）。
    
-   `int config_IFB`: 电流采样拓扑（`PM_IFB_AB_INLINE`, `PM_IFB_ABC_GND`等）。这决定了电流重建和`pm_clearance`的行为。
    
-   `int config_TVM`: 是否有端电压采样。
    
-   `int config_LU_ESTIMATE`: 无感算法选择（`PM_FLUX_ORTEGA`, `PM_FLUX_KALMAN`）。
    
-   `int config_LU_SENSOR`: 位置传感器类型（`PM_SENSOR_HALL`, `PM_SENSOR_EABI`等）。
    

这部分变量是所有计算的“**基石**”。算法工程师要确保`m_freq`,`dc_resolution`这些与硬件相关的参数填写正确。在和硬件工程师对比数据时，必须先确认这部分的“**配置**”完全一致。

#### 星系二：测量与执行

这部分是控制器与物理世界交互的“**感官**”和“**肌肉**”。

-   **感官 - 反馈**:
    

-   `float fb_iA, fb_iB, fb_iC`: 经过标定和修正后的**相电流**。
    
-   `float fb_uA, fb_uB, fb_uC`: 经过标定的**端电压**。
    
-   `float const_fb_U`: 经过标定的**母线电压**。
    

-   **感官 - 标定参数**:
    

-   `float scale_iA[2], scale_uA[2]`: `[0]`是偏置(offset)，`[1]`是增益(gain)。原始ADC值经过 `value * gain + offset` 之后才变成物理量。这些值由标定流程`PM_STATE_ADJUST_ON_PCB_*`来确定。
    

-   **肌肉 - PWM输出**:
    

-   `float vsi_X, vsi_Y`: 这是给`pm_voltage`函数的alpha-beta的电压指令。
    
-   `int vsi_A0, vsi_B0, vsi_C0`: 上一周期PWM的实际比较值，用于`pm_clearance`。
    
-   `void (* proc_set_DC) (int, int, int)`: 一个**函数指针**， 返回三个`int`参数，指向真正设置PWM寄存器的底层函数，用来控制三相桥臂A相、B相、C相的开关状态。比如，使用语句`pm->proc_set_DC(0, 0, 0)`，来达到关闭所有桥臂开关的目的。这是非常漂亮的设计，实现了上层算法与底层硬件的**解耦**。
    

要注意，硬件工程师在更换运放、采样电阻、或者分压电阻时，必须通知算法工程师重新运行`ADJUST_ON_PCB_*`标定流程，更新`scale_*`参数。否则，整个“感官系统”就失准了。

#### 星系三：状态与模式

这部分是控制器的“**大脑**”，决定了“现在该干什么”。

-   **FSM状态机**:
    
    `int fsm_req,fsm_state,fsm_phase,fsm_subi`: 状态机的请求、当前状态、状态计数器、子阶段。这是驱动`pm_FSM`函数的核心。
    
-   **位置单元(LU)模式**:
    
    `int lu_MODE`: 这是位置/速度反馈源选择模式的状态变量，用于指示当前的系统通过哪种方式获得转角和速度信息（Sensorless转角估算、高频注入、霍尔传感器模式、编码器模式、旋变模式）。`pm_lu_FSM`的行为完全由它驱动。
    
-   **观测器状态**:
    
    `int flux_TYPE`, `int flux_ZONE`: 当前观测器类型（Ortega/Kalman）和运行区域（低速/高速）。
    
-   **错误状态**:
    
    `int fsm_errno`: 保存了最近一次的错误码。
    

调试时，如果电机行为不符合预期，**第一步应该是打印这些状态变量。**往往不是算法算错了，而是状态机“走岔了路”，或者模式切换的逻辑有Bug。

#### 星系四：算法与控制器

这部分是实现各种控制算法的**“工具箱”**，存放着大量的中间变量和PI参数。

-   **电流/速度/位置环**:
    

-   `float i_track_D,i_track_Q`: 电流环的目标值。
    
-   `float i_integral_D,i_integral_Q`: 电流环的积分项。
    
-   `float i_gain_P,i_gain_I`: 电流环的PI参数。
    
-   `s_*`, `x_*` 系列同理，对应速度环和位置环。
    

-   **观测器/估算器**:
    

-   `float lu_F[3],lu_wS,lu_location`: 位置单元输出的角度、速度、位置。
    
-   `float flux_F[2],flux_wS,flux_lambda`: 磁链观测器输出的角度、速度、磁链。
    
-   `float kalman_P[15],kalman_A[10],kalman_K[10]`: 卡尔曼滤波器的协方差矩阵、状态矩阵、增益矩阵。
    

-   **辨识专用**:
    

-   `float probe_DFT[8],probe_REM[8]`: 用于HF注入辨识的DFT累加器。
    
-   `lse_t lse[2]`: 两个最小二乘求解器实例，供各个辨识state复用。
    

这部分是算法工程师的主战场。调试时，把这些中间变量（如积分项、目标值、观测器内部状态）实时打印或用示波器观察，是定位问题的最快途径。

## 四、如何“阅读”`pmc_t`：从一个辨识流程看数据流动

我们以`PM_STATE_PROBE_CONST_RESISTANCE`（辨识Rs）为例，看看数据是如何在`pmc_t`这个“宇宙”里流动的。

整个的电阻辨识流程的框架是这样的：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRETTtlOBzJtPChFz1N1MctSiaXlibfHrJL3YUeJVm3KLIcFiavZ2TnBf9WLtXhrEuwiblIgxeIN3IThlw/640?wx_fmt=png&from=appmsg)

1.  **启动**: 上层应用设置 `pm->fsm_req = PM_STATE_PROBE_CONST_RESISTANCE;`
    
2.  **初始化 (**`**case 0**`**)**:
    

-   FSM进入此state，设置 `pm->fsm_phase = 1;`
    
-   设置电流环PI参数 `pm->probe_gain_P`, `pm->probe_gain_I`。
    
-   设置辨识时长 `pm->tm_end`。
    
-   初始化LSE求解器 `lse_construct(...)`。
    

4.  **斜坡注入 (**`**case 1**`**)**:
    

-   计算当前周期的目标电流 `pm->i_track_D` 和 `pm->i_track_Q`。
    

6.  **电流闭环 (**`**case 2**`**/**`**pm_fsm_probe_loop_current**`**)**:
    

-   读回反馈电流 `pm->lu_iX`, `pm->lu_iY`。
    
-   计算误差 `eD = pm->i_track_D - pm->lu_iX`。
    
-   用 `pm->probe_gain_P/I` 计算PI输出，得到指令电压 `uD, uQ`。
    
-   更新积分项 `pm->i_integral_D`。
    

8.  **数据采集 (**`**case 3**`**/**`**case 5**`**)**:
    

-   当进入稳态平均阶段，把 `pm->lu_iX`, `pm->dcu_X` 等数据填入一个向量`v`。
    
-   调用 `lse_insert(ls, v)`，把这组数据“喂”给LSE求解器。
    

10.  **求解 (**`**case 7**`**)**:
     

-   调用 `lse_solve(ls);`。
    
-   从 `ls->sol.m[0]` 中读出求解结果。
    
-   更新到最终的参数存储位置：`pm->const_im_Rz = ls->sol.m[0];`
    

12.  **结束**: FSM状态切换回 `PM_STATE_HALT` 或 `PM_STATE_IDLE`。
     

**整个流程告诉我们:**

-   所有的数据都封装在`pm`指针指向的内存里，没有一个全局变量。
    
-   辨识流程由`fsm_state`和`fsm_phase`驱动，逻辑清晰。
    
-   辨识算法（如LSE）被抽象成工具，被不同的辨识state调用。
    

## 五、本文小结

各位同仁，今天我们一起探索了代码A的“宇宙观”——`pmc_t`结构体。我们知道了，它不仅仅是一堆变量，更是一种**面向对象、数据隔离、状态驱动**的软件设计哲学。它像一个精密的“个人档案袋”，把关于一台电机的所有信息都妥善保管和传递。

我们还以Rs辨识为例，看到了数据是如何在这个“档案袋”内部流转，最终完成一次参数辨识的。

但是，我们只是看到了“大脑”的结构。这个大脑是如何通过它的“神经系统”——也就是主循环函数`pm_feedback()`，来感知世界、做出决策、并指挥“肌肉”（PWM）去行动的呢？

这是我们在下一讲中要解决的问题：

`**pm_feedback()**`**这个函数，作为整个控制系统的“心跳”，它内部的每一个步骤——从读取ADC、到坐标变换、到观测器、到PI控制器、再到电压输出——它的执行顺序有什么讲究？为什么Kalman滤波要“postponed（延迟）”执行？为什么FSM总是在最后才调用？这些时序安排背后，隐藏着什么样的性能与算力权衡？**

下一篇文章，我们将进入代码A的“中枢神经系统”，对`pm_feedback()`主流程进行**逐行代码走读**，揭开它高效运行的秘密。

  

参考文献：

IEEE Std 1812-2023：IEEE Guide for Testing Permanent Magnet Machines。

文档链接：https://pan.baidu.com/s/1\_f65sRZBsxjO-6Gie4zSdA?pwd=gw9s 提取码: gw9s

代码链接：

代码A：https://pan.baidu.com/s/1agWQ5Lbzrs6b0o6JkWzvSQ?pwd=dh2t 提取码: dh2t

代码A开源地址：https://github.com/rombrew/phobia/tree/master/src/phobia

代码B：https://pan.baidu.com/s/13k1lnvCQcDwUiJtkqgpfxQ?pwd=85ug 提取码: 85ug