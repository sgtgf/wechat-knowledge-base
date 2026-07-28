# 简单H桥电机驱动电路分析及其隔离设计


> 原文地址: [https://mp.weixin.qq.com/s/ToiBjoqhjUTmxe5qaLmxBg](https://mp.weixin.qq.com/s/ToiBjoqhjUTmxe5qaLmxBg)

# H桥驱动电路（H-Bridge Circuit）

H桥是一种相当简单的电路。它包含四个独立控制的MOSFET，用作引导电流流过负载（通常是电感负载，例如电机）的开关元件。

![H桥电路拓扑图](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6Luyw7bBtzDjwM7MKARbYDgV8E9MjQnk0DicEAkRHGFZia9MUZ0qTkP9UKyVFbKh7KmjiaOKrystRjuib8vZliaIFeknvqHZYIicmCibW8Mw/640?wx_fmt=png&from=appmsg)

H桥电路拓扑图

  

具体的工作方式不再赘述，本文主要分析一些比较细节的点。

## MOSFET中的寄生二极管与外部续流二极管

在N沟道MOSFET中，源极和漏极通常是N型区域，而基区是P型材料。这些区域之间形成了两个PN结，其中一个是在源极与基区之间，另一个是在漏极与基区之间。由于在MOSFET中，源极和基区通常是短接的，因此源极-基区的PN结不会起作用，而漏极-基区的PN结则形成了寄生二极管。该现象在大多数功率MOSFET中都会出现。这也就是为什么在一些仿真软件中，MOSFET的拓扑符号后会有一个反向并联的二极管标识。

作为典型的感性负载，电机在电流变化时会产生反电动势。当H桥中的MOSFET切换状态时，电流的变化会导致电感负载产生一个高电压尖峰。这种电压尖峰可能会反向施加在MOSFET上，可能导致MOSFET损坏或造成不稳定的电路操作。

为了保护MOSFET和其他电路元件，在每个MOSFET的漏极和源极之间通常会并联一个续流二极管。续流二极管的作用主要有以下几点：

-   **提供电流续流路径**：当MOSFET关闭时，感性负载的电流无法立即停止，续流二极管为该电流提供了一个通路。这样可以避免因电流中断导致的高电压尖峰，从而保护MOSFET和其他电路元件。
    
-   **保护MOSFET**：续流二极管可以限制感性负载产生的反电动势，避免这些电压尖峰直接加在MOSFET上，防止MOSFET因过压而损坏。
    
-   **稳定电路操作**：在高频开关操作中，续流二极管可以减少电路中的电磁干扰（EMI）和噪声，提高电路的稳定性和可靠性。
    

MOSFET自带的寄生二极管在电路中确实可以在某些情况下起到续流二极管的作用，特别是在开关断开的瞬间，它可以为电感性负载提供电流续流的路径。然而，由于寄生二极管的特性不如专门设计的续流二极管（例如肖特基二极管），它的导通电压较高，反向恢复时间较长，所以在实际电路设计中，寄生二极管往往不能完全替代续流二极管。因此，如果对续流二极管有严格的要求，通常会在电路中另外并联一个性能更好的二极管。

![一个H桥上臂MOSFET两端并联的续流二极管](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyyWa70oX2HrYjCuHDnIqXVUZOI6XCm17iaTD1ZvzRGxZM9LibctqLznHqOl2W1u2icD07iaqRCvRwKRhZjtgnwTge6gUkeApTJLEmE/640?wx_fmt=png&from=appmsg)

一个H桥上臂MOSFET两端并联的续流二极管

  

## 电流衰减模式

电机是感性负载，电流不能突变。若要使电机减速，在断开电机两端所加的电压时，电压由工作值瞬间衰减至零，根据电磁感应定律，电机会根据电压变化率（du/dtdu/dt））的大小而产生反向电动势。当电压变化率很大时，这个反电动势很有可能损坏MOSFET。因此想让电机停下，除了断开供电，还要形成一个续流的回路，释放掉电机上的能量。这就是刚刚提到过的续流二极管的作用。

在减速时的电流再生过程中，H桥通常可以工作在两个模式：

-   快速衰减（Fast Decay Mode）
    
-   慢速衰减（Slow Decay Mode）
    

_注意_：“衰减”指的是流过电机线圈（电感器）的电流，与电机的行为没有直接关系。不要认为快速衰减会使电机迅速停止。

![不同衰减模式下的电流回路示意图](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyzD6u59z3QQDTNJKnibZPknAxMibPvhuiaxoXssUAlIPW98tvfiaP3VrzEicK3AkxziabOCVksq8H06Oe4a3DApeXYKZibS6Dte8kUBeU/640?wx_fmt=png&from=appmsg)

不同衰减模式下的电流回路示意图

  

### 快速衰减模式（Fast Decay Mode）

![快速衰减模式](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyyoFPS9JjibGBSgaPsaHFK9CdCGoQV5pQicSWTzM3NCM4V9nwpIV53q5CXOAqLab3qcRlb0Z6SfBbIdWsWLy2icQq0ZrTKIz39n5Q/640?wx_fmt=png&from=appmsg)

快速衰减模式

  

该模式下，四个MOSFET全部关断，反电动势带来的反向感应电流通过Q2、Q3的寄生二极管（续流二极管）流动，此时反电动势带来的感应电流方向与电源电压方向相反，线圈电流迅速衰减。

为避免同一侧的上下臂MOSFET同时导通而造成击穿，应当采取机制。具体为，添加一个令所有FET开关均处于关闭状态的时间段（被称为**死区时间**）。在此期间，允许激励FET开关切换到关闭状态，存在电感负载的电流由寄生二极管或外部续流肖特基二极管承载。

快速衰减模式下电流虽然能够迅速降低到零，但电机速度会因惯性而逐渐减小，对外呈现“滑动”式的减速。

### 慢衰减模式（Slow Decay Mode）

![慢衰减模式](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6Luyzb8CcR29VibKuL0PEiaSTwHBrXmicsgC8pRXWFdhgnR17DmM1amjJLSaMicpYtsVSiay7JhTS4mAu9yNp0PSiadP8lVliaemrakoukes/640?wx_fmt=png&from=appmsg)

慢衰减模式

  

该模式下，Q1、Q3关断，Q2、Q4导通，感应电流以循环方式在流经Q2和Q4时降至零。在这种情况下，电流在流过电感阻抗和两个FET的导通阻抗时以热量的形式耗散。

_注意_：虽然慢速衰减通常描述为两个低侧FET开关打开、两个高侧FET开关关闭，但相同现象可通过启用两个高侧 FET 开关、同时禁用两个低侧FET开关来实现。也就是说，衰减回路可以为上臂，也可以为下臂。部分IC支持通过相应的输入信号来配置。

在直流电机上，慢速衰减模式会令电机绕组短路，进而形成反电动势短路，使得转子以极快速度停止旋转。

### 混合衰减（Mixed Decay Mode）

在混合衰减再循环模式中，电流衰减至零的速度快于慢速衰减方法，但慢于快速衰减方法。实现此技术的方法是，协调FET开关的开/关时间，在固定时间内处于快速衰减模式，然后在剩余时间内处于慢速衰减模式。系统保持在快速衰减模式与慢速衰减模式中的时间比例被称为混合衰减百分比。

混合衰减对于步进电机驱动很有意义，但最重要的是，它对微步进驱动极有意义。在微步进时，将保持一定波形以获得出色的运动质量。例如，通常会通过正弦波（电流曲线）来驱动步进电机绕组。也可以在相同范围内使用三角形和菱形。

有关混合衰减的内容将另作介绍。

## MOSFET高低端驱动与自举电路

在H桥电路中，MOSFET通常分为高端（High-Side）和低端（Low-Side）两个部分：

-   **高端MOSFET（High-Side MOSFET）**： 连接在电源和负载之间的MOSFET。
    
-   **低端MOSFET（Low-Side MOSFET）**： 连接在负载和地之间的MOSFET。
    

已知MOSFET导通需要满足

VGS\>VGS(th)  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6Luywqps46XsficLX7ubrm0KeicwHOGb4ciaKIqTLicia0VJATszuzYK6WCxCnk8MTOnClic0oOKic7CSTxdALnX4jzgpOHXjXa9ibp5vAdNA/640?wx_fmt=png&from=appmsg)

自举电路是常用的一种解决方案，用于生成高端MOSFET所需的高电压驱动信号。它通常包括一个二极管和一个电容器（自举电容），配合驱动芯片工作。

以半桥为例，当Q2导通时，Q1的源极被拉到地电位（低电平）。此时，自举电容C1通过二极管充电（此处所加电压V一般由LDO架构电源输出）。此时，自举电容的电压接近于电源电压V。

![自举电容充电](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyxoY0wjCicXwy8c7tcubkuLXiaR3iczf2cD8cDbvyqBhx8ElBvoFcqbCxSN8ANn0XOvJQ0I25kvj6nrq2S9sLw2vbsYDk4gJSJcns/640?wx_fmt=png&from=appmsg)

自举电容充电

  

当Q2断开时，SW位置电位不再为地电位，而自举电容C1两端储存了大小为V的电压，A点电压变为VSW+VVSW+V，很容易就能够驱动高端MOSFET。此时由C1提供上管驱动阶段所需的所有电流。此时自举二极管（一般为肖特基二极管）处于反向截止状态，将自举压降限制在自举回路内，防止其回流至上一级从而损坏电路。

![自举电容放电](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyyHa0L7prwlRE0sq1nFzab0hF3OnibzhXcTg4eoqw3nEVLiavhlWuo9qNvqffLCVbI3gjv50mwkdXOeQn89iaAicl42dY9P61sP4gM/640?wx_fmt=png&from=appmsg)

自举电容放电

  

自举电容持续放电将会导致高端MOSFET的栅极对地电压持续减小，直至其等于V。因此要让高端MOSFET持续导通，需要令自举电容不断充放电，或是增加自举电容容量、更换IC或在设计中避免持续导通需求。由于MOSFET的特性，自举电路在增加栅源电压的同时，还可令MOSFET的导通电阻减小，从而减少发热损耗。

## H桥驱动控制

对MOSFET栅极引入PWM控制，可实现对电机转动方向和速度的调节。PWM的占空比对应电机转速，占空比越大，平均等效输出电压越大，转速越快。通常的PWM频率在10Khz至20KHz之间。若频率太低，电机转速会过低，同时容易出现高噪声或高频机械振动；频率太高，则MOSFET开关损耗带来的影响会变大，降低系统效率。

根据不同桥臂的PWM控制方式，大致上可分为三种：

-   受限单极模式
    
-   单极模式
    
-   双极模式
    

### 受限单极模式

该模式下，电机电枢驱动电压极性是单一的，优点是控制电路较为简单，缺点是电机不能刹车，不能进行能耗制动，在负载超过设定速度时不能提供向力矩。调速静差大，调速性能很差，稳定性也不好。当PWM高电平时，电机两端分别为VM和GND，有电流流过，电机产生扭矩，进行转动。当PWM低电平时，电机两端未导通，不形成闭合回路，没有电流流过，此时电机的转动没有力来维持，难以控制。

### 单极模式

单极模式引入互补PWM波（PWMN），其一般由MCU高级定时器生成，如STM32F429的TIM1、TIM8。

![PWM单极模式](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuywHy1w8KXGzw4szMh2VAE4eiaDK1ePUs6Vlx4ibaPWNKDsDNACm0LVicjI5hT88AXAux85jzfO78Cx1sxDZcSylRz4Pk3G7kKOUH8/640?wx_fmt=png&from=appmsg)

PWM单极模式

  

相比受限单极模式，单极模式控制在Q1信号为低电平时，由互补PWM提供，对Q2施加高电平信号，令Q2打开。此时Q2、电机、Q4形成闭合回路。电机中仍然有电流流过，虽然电流会减小，但是仍会产生磁场，仍会产生力矩来继续控制电机转动。该模式优点是启动快，能加速、刹车、能耗制动、能量反馈，调速性能虽然不如双极模式好，但是相差不多，电机特性也较好。在负载超速时，也能提供反向力矩。

### 双极模式

双极模式下电枢电压极性是正负交替的。

![PWM双极模式](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyybQoPo2cgdibOvC2jQZ4MpYqg5J3H0ibfYsLmSszkomY4tpTP58dkBDCDbHatVdLwBPFKoicicmLvNYhN0XzTNgJ5yFfKg4G0aEus/640?wx_fmt=png&from=appmsg)

PWM双极模式

  

图中，PWM1、PWM2均由定时器输出，PW1N、PW2N为他们的互补PWM通道。PWM1和PWM2周期相同，占空比相同，极性相反，使得对角线上的两个MOSFET能够同时导通，同时关断。最终电机的转动方向由PWM和PWM1共同决定，若A的PWM占空比高于50%则电流从左至右，若低于50%则从右至左。该模式在继承单极模式优点的基础下，在速度快要接近于0时也可以提供一定的力矩，加减速性能更好，因此正反转的性能优于单极模式。控制效果好。缺点是控制更复杂，工作时4个MOS都在工作，功耗大。

### 死区时间

死区时间（Dead Time）是指在切换两个互补的MOSFET时，为了避免同时导通而导致短路或直通故障，在关断一个MOSFET和导通另一个MOSFET之间插入的延迟时间。死区时间提供了一个缓冲，确保一个MOSFET完全关闭后，另一个才开始导通，从而避免直通故障。

MOSFET的导通和关断不是瞬时的，而是需要一定的时间。这包括MOSFET栅极充电和放电的时间。不同类型的MOSFET具有不同的开关速度（开通时间和关断时间）。如果死区时间设置得太短，可能不足以覆盖MOSFET的开关时间，导致直通故障。如果死区时间设置得太长，则会降低电路的效率。因为在死区时间内，两对互补的MOSFET都处于关闭状态，没有电流通过负载，导致功率损失和电机或负载的性能下降。

MOSFET的开关速度与栅极电荷（Qgs、Qgd）和栅极驱动电流有关。死区时间应与这些参数相匹配。较低的栅极电荷通常意味着更快的开关速度，可以使用更短的死区时间。另一方面，高侧和低侧MOSFET的不同Rds(on)值也会影响开关速度，因此在设计死区时间时需要考虑。一些驱动IC会根据MOSFET的特性自动调整死区时间，以优化性能和保护MOSFET。

### 程序代码（以STM32 HAL库为例）

以IRS21867S方案为例：

![IRS21867S硬件方案](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyxcPNZiawzZae7icQNV60Iib8BxiaTcwIF0oTExUJJCy3JRgADpEHcKzicv8gd5tOtd1dIgNMZAjibGuxkXVhbgjwKcyGvzwxvgJpicsY/640?wx_fmt=png&from=appmsg)

IRS21867S硬件方案

  

MCU为STM32F1，PWM由TIM1通道3生成，PWM-N由TIM1通道3的互补通道生成；PWM1由TIM1通道2生成，PWM1-N由TIM1通道2的互补通道生成。PWM信号从对应的复用GPIO管脚连接至驱动IC。

模式

Q1（左上）栅极信号

Q2（右上）栅极信号

Q3（左下）栅极信号

Q4（右下）栅极信号

受限单极模式 (正转)

PWM

OFF

OFF

ON

受限单极模式 (反转)

OFF

PWM

ON

OFF

单极模式（正转）

PWM

OFF

PWM-N

ON

单极模式（反转）

OFF

PWM

ON

PWM-N

双极模式

PWM1

PWM2

PWM1-N

PWM2-N

根据该真值表，即可通过修改对应的TIM通道的PWM极性来配置电机工作模式。

为方便，可自定义工作模式函数。

_注意_：下面的Set\_Motor\_Mode()函数仅设置了定时器状态。在受限单极模式和单极模式下，修改Set\_Motor\_Mode()函数后，一定要记得根据上表修改对应桥臂MOSFET的栅极信号以保证其处于恒导通状态，对电枢电流提供回路。

// 电机工作模式设置（定时器状态）  
void Set\_Motor\_Mode(uint8\_t mode)  
{  
switch (mode)  
    {  
    case 0: // 受限单极模式（正转）  
HAL\_TIM\_PWM\_Start(&htim1, TIM\_CHANNEL\_2);  
HAL\_TIMEx\_PWMN\_Stop(&htim1, TIM\_CHANNEL\_2);  
HAL\_TIM\_PWM\_Stop(&htim1, TIM\_CHANNEL\_3);  
HAL\_TIMEx\_PWMN\_Stop(&htim1, TIM\_CHANNEL\_3);  
        break;  
  
    case 1: // 受限单极模式（反转）  
HAL\_TIM\_PWM\_Stop(&htim1, TIM\_CHANNEL\_2);  
HAL\_TIMEx\_PWMN\_Stop(&htim1, TIM\_CHANNEL\_2);  
HAL\_TIM\_PWM\_Start(&htim1, TIM\_CHANNEL\_3);  
HAL\_TIMEx\_PWMN\_Stop(&htim1, TIM\_CHANNEL\_3);  
        break;  
  
    case 2: // 单极模式（正转）  
HAL\_TIM\_PWM\_Start(&htim1, TIM\_CHANNEL\_2);  
HAL\_TIMEx\_PWMN\_Start(&htim1, TIM\_CHANNEL\_2);  
HAL\_TIM\_PWM\_Stop(&htim1, TIM\_CHANNEL\_3);  
HAL\_TIMEx\_PWMN\_Stop(&htim1, TIM\_CHANNEL\_3);  
        break;  
  
    case 3: // 单极模式（反转）  
HAL\_TIM\_PWM\_Stop(&htim1, TIM\_CHANNEL\_2);  
HAL\_TIMEx\_PWMN\_Stop(&htim1, TIM\_CHANNEL\_2);  
HAL\_TIM\_PWM\_Start(&htim1, TIM\_CHANNEL\_3);  
HAL\_TIMEx\_PWMN\_Start(&htim1, TIM\_CHANNEL\_3);  
        break;  
  
    case 4: // 双极模式  
HAL\_TIM\_PWM\_Start(&htim1, TIM\_CHANNEL\_2);  
HAL\_TIMEx\_PWMN\_Start(&htim1, TIM\_CHANNEL\_2);  
HAL\_TIM\_PWM\_Start(&htim1, TIM\_CHANNEL\_3);  
HAL\_TIMEx\_PWMN\_Start(&htim1, TIM\_CHANNEL\_3);  
        break;  
  
    case 5: // 关闭输出  
HAL\_TIM\_PWM\_Stop(&htim1, TIM\_CHANNEL\_2);  
HAL\_TIMEx\_PWMN\_Stop(&htim1, TIM\_CHANNEL\_2);  
HAL\_TIM\_PWM\_Stop(&htim1, TIM\_CHANNEL\_3);  
HAL\_TIMEx\_PWMN\_Stop(&htim1, TIM\_CHANNEL\_3);  
        break;              
  
    default:  
        // 处理非法模式  
        break;  
    }  
}

  

配置TIM1：  

void MX\_TIM1\_Init(void)  
{  
    TIM\_ClockConfigTypeDef sClockSourceConfig\={0};  
    TIM\_OC\_InitTypeDef sConfigOC = {0};  
    TIM\_BreakDeadTimeConfigTypeDef sBreakDeadTimeConfig\={0};  
  
    htim1.Instance\= TIM1;  
    htim1.Init.Prescaler\= (uint32\_t)((SystemCoreClock / 2) / 20000) - 1;//预分频寄存器写入  
    htim1.Init.CounterMode\= TIM\_COUNTERMODE\_UP;  
    htim1.Init.Period\=1000 - 1;// 自动重载寄存器写入  
    htim1.Init.ClockDivision\= TIM\_CLOCKDIVISION\_DIV1;  
    htim1.Init.RepetitionCounter\=0;  
    htim1.Init.AutoReloadPreload\= TIM\_AUTORELOAD\_PRELOAD\_DISABLE;  
    HAL\_TIM\_Base\_Init(&htim1);  
  
    sClockSourceConfig.ClockSource\= TIM\_CLOCKSOURCE\_INTERNAL;  
    HAL\_TIM\_ConfigClockSource(&htim1, &sClockSourceConfig);  
  
    HAL\_TIM\_PWM\_Init(&htim1);  
  
    sConfigOC.OCMode\= TIM\_OCMODE\_PWM1;  
    sConfigOC.Pulse\=500;// 初始占空比50%  
    sConfigOC.OCPolarity\= TIM\_OCPOLARITY\_HIGH;  
    sConfigOC.OCNPolarity\= TIM\_OCNPOLARITY\_HIGH;  
    sConfigOC.OCFastMode\= TIM\_OCFAST\_DISABLE;  
    sConfigOC.OCIdleState\= TIM\_OCIDLESTATE\_RESET;  
    sConfigOC.OCNIdleState\= TIM\_OCNIDLESTATE\_RESET;  
  
    HAL\_TIM\_PWM\_ConfigChannel(&htim1, &sConfigOC, TIM\_CHANNEL\_2);  
    HAL\_TIM\_PWM\_ConfigChannel(&htim1, &sConfigOC, TIM\_CHANNEL\_3);  
  
//死区设置  
    sBreakDeadTimeConfig.OffStateRunMode\= TIM\_OSSR\_DISABLE;  
    sBreakDeadTimeConfig.OffStateIDLEMode\= TIM\_OSSI\_DISABLE;  
    sBreakDeadTimeConfig.LockLevel\= TIM\_LOCKLEVEL\_OFF;  
    sBreakDeadTimeConfig.DeadTime\=100;  
    sBreakDeadTimeConfig.BreakState\= TIM\_BREAK\_DISABLE;  
    sBreakDeadTimeConfig.BreakPolarity\= TIM\_BREAKPOLARITY\_HIGH;  
    sBreakDeadTimeConfig.AutomaticOutput\= TIM\_AUTOMATICOUTPUT\_DISABLE;  
    HAL\_TIMEx\_ConfigBreakDeadTime(&htim1, &sBreakDeadTimeConfig);  
}

![](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6Luyzcowvjfx3zzYtaZPLkgjK7tc4ax05aIqwx4UnbYOwS2dfbRFOeibkEdBiaLeE8wXS3Pokg9N1iaBsaicCgFf5lTYqSqCTlqWyOfxs/640?wx_fmt=png&from=appmsg)

void set\_pwm(int speed)  
{  
// 处理速度的正负，正值表示正转，负值表示反转  
if (speed > 0)  
    {  
        Set\_Motor\_Mode(2);  // 正转  
  
        \*\*\*\*\*\*\*此处要记得将Q4栅极信号拉高\*\*\*\*\*\*\*  
  
    }  
elseif (speed < 0)  
    {  
        Set\_Motor\_Mode(3);  // 反转  
  
        \*\*\*\*\*\*\*此处要记得将Q3栅极信号拉高\*\*\*\*\*\*\*  
  
speed = -speed; // 将速度值取绝对值  
    }  
else  
    {  
        Set\_Motor\_Mode(5);  // 停止  
return;  
    }  
  
// 限制最低速度，确保电机能够启动  
    int min\_speed = 10; // 定义最低速度  
if (speed < min\_speed)  
    {  
speed = min\_speed;  
    }  
  
// 将速度值映射到PWM占空比范围  
speed = 700 - speed; // 这里700是基准值，越接近700，PWM占空比越小  
  
    TIM1->CCR2 = speed; // 设置TIM1通道2的PWM占空比  
    TIM1->CCR3 = speed; // 设置TIM1通道3的PWM占空比  
}

主函数：

int main(void)  
{  
HAL\_Init();  
SystemClock\_Config();  
  
// 初始化TIM1  
MX\_TIM1\_Init();  
  
// 选择电机的工作模式  
Set\_Motor\_Mode(???);   
  
// 主循环  
    while (1)  
    {  
// 在这里可以通过修改占空比来控制电机速度  
set\_pwm(???);  
    }  
}

以上是一个最简单的能让电机在开环下转起来的代码。如果要实现动态控制、动态调速，需要加入控制环节