# 全网最通俗易懂SPWM入门教程，快来白嫖

原创 菜刀和小麦 硬件笔记本 2021-12-09 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/u1ccQ7f\_OTT4DIQU8bgesw](https://mp.weixin.qq.com/s/u1ccQ7f_OTT4DIQU8bgesw)

## ▼关注公众号：硬件笔记本▼

  

## 目录

-   基本原理
    
-   自然采样法
    
-   规则采样法
    

-   单极性
    
-   双极性
    

-   如何编写程序
    
-   总结
    

  

## 基本原理

SPWM的全称是(`Sinusoidal PWM`)，正弦脉冲宽度调制是一种非常成熟，使用非常广泛的技术；

之前在PWM的文章中介绍过，基本原理就是面积等效原理，**即冲量相等而形状不同的窄脉冲加在具有惯性的环节上时，其效果基本相同 。**

**换句话说就是通过一系列形状不同的窄脉冲信号，相对应时间的积分相等(面积相等)，其最终效果相同**；

![](https://mmbiz.qpic.cn/mmbiz_png/aYs0iczibHlYib6VMM0NslqCD6icoP8ibFWfSEDJCCWibYLmSNUQP58sF2zwMtnGO6k22zgHugPV0gZrRuZ0YCyvia4Iw/640?wx_fmt=png)

所以SPWM就是输入一段幅值相等的脉冲序列去等效正弦波，因此输出为高的脉冲时间宽度基本上呈正弦规律变化；

这里通常使用的采样方法是：自然采样法和规则采样法；

## 自然采样法

自然采样法是用需要调制的正弦波与载波锯齿波的交点，

来确定最终PWM脉冲所需要输出的时间宽度，最终由此生成SPWM波；

具体如下图所示，这里会对局部①部分进行简单分析，下面进一步介绍；

![](https://mmbiz.qpic.cn/mmbiz_png/aYs0iczibHlYib6VMM0NslqCD6icoP8ibFWfSEo6FUbTEkFWAT3OXy3T0iaIbpYzVJ8ZhUvxib5GyhofHrjf6KearLvXg/640?wx_fmt=png)

SPWM波形

**局部①的情况**如下图所示；简单分析一下整个图形的情况；

-   锯齿波和调制正弦波的交点为**A**和**B**；
    
-   因此**A**点所需时间为**T1**，**B**点所需时间为**T2**；
    
-   所以在该周期内，PWM所需要的脉冲时间宽度**Ton**满足：
    
-   最终结论就是，只要求出**A点**和**B点**位置，就可以求出；
    

![](https://mmbiz.qpic.cn/mmbiz_png/aYs0iczibHlYib6VMM0NslqCD6icoP8ibFWfStkAic4IubAVrLnGEibnJ6YJCVrtDibpIaMmydg8axEAtib4QiaVudXMge4Q/640?wx_fmt=png)

自然采样法

> 这里对于求解A，B位置的推导不做介绍，但是计算量比较大，因此在微处理器中进行运算会占用大量资源，下面再介绍另一种优化的采样方法：**规则采样法**。

## 规则采样法

根据载波PWM的电压极性，一般可以分为单极性SPWM和双极性SPWM；下面进一步介绍；

### 单极性

单极性SPWM在正弦波的正版周期，PWM只有一种极性，在正弦波的负半周期，PWM同样只有一种极性，但是与正半周期恰恰相反，具体如下图所示；

下面取正弦波的正半周期的情况进行分析；

![](https://mmbiz.qpic.cn/mmbiz_png/aYs0iczibHlYib6VMM0NslqCD6icoP8ibFWfST44RECNbj4Fib5wiafeG9LRicUqbyZL7CJSf7sx6h6IHaHS6ObquF6JFw/640?wx_fmt=png)

单极性SPWM

正弦波的正半周期整体如下所示；由图中我们可以知道以下几点；

-   载波PWM的周期为**T**；
    
-   线段**BO**为当前这个等腰三角形的垂线；
    
-   线段**BO**与正弦曲线 相较于点**A**；
    
-   所以在该周期内，PWM所需要的脉冲时间宽度**Ton**满足：
    

![](https://mmbiz.qpic.cn/mmbiz_png/aYs0iczibHlYib6VMM0NslqCD6icoP8ibFWfSCQ9K34C9fWbUvib7vmMzKlNMG6FEabmIh1MSYBHxpPBepKKcqRDKiaww/640?wx_fmt=png)

单极性正半周期

具体的推导过程如下：

-   第一步：由于O点的位置比较好确认，因此，线段
    
-   第二步：这里载波锯齿波的最大幅值为1，因此线段
    
-   第三步：根据初中学过的相似三角形定理，满足：
    

最终简化得到：

> 这里对载波的幅值做了归一化处理，如果锯齿波的最大值为，正弦波的幅值最大为，则;

### 双极性

只要符合面积等效原理，PWM还可以是双极性的，具体如下图所示；这种调制方式叫双极性SPWM，在实际应用中更为广泛。

![](https://mmbiz.qpic.cn/mmbiz_png/aYs0iczibHlYib6VMM0NslqCD6icoP8ibFWfSfpH1qUnBZu5Qcd2fsWa6ibyeQrQSDjDT3ZbqCJjiamdhib9sTgCdFv8Ew/640?wx_fmt=png)

双极性SPWM

## 如何编写程序

上面讲到这里PWM的时间满足：

> 其中为正弦波幅值，为载波锯齿波幅值；

那么下面以STM32为例，介绍以下如何进行程序编写；

**首先得先STM32是如何产生PWM？**

通过数据手册可以知道，STM32通过**TIM**输出PWM，这里有几个寄存器；

-   计数寄存器：**CNT**
    
-   比较寄存器：**CCR** （决定了占空比，决定了脉冲宽度）
    
-   自动重装寄存器：**AAR**（决定了PWM的周期）
    

可能这么说，还是云里雾里的，先看下图；

![](https://mmbiz.qpic.cn/mmbiz_png/aYs0iczibHlYib6VMM0NslqCD6icoP8ibFWfSQticXPAkMqQyh5IUbF3ib1H9c0k8qcmF9j3icrzv9Pq6tmia20ciaic2txtA/640?wx_fmt=png)

STM32的PWM产生原理

STM32中PWM的模式有普通的PWM，和**中央对齐的PWM**，上图使用的就是中央对齐PWM；

产生PWM的过程可以分为以下几个过程；

-   第一步：配置好TIM，**通常时基和ARR都会配置好**，这时候PWM的周期就已经被设定好了，另外时基决定了CNT计数寄存器增加一次技术所需的时间；
    
-   第二步：刚开始，**CNT<CCR**，并且**CNT**开始增加，这时候PWM的输出都是低电平；当**CNT>CCR**之后，PWM输出为高电平；
    
-   第三步：当**CNT的值等于AAR**之后，**CNT开始减少**，同理**CNT<CCR**，PWM的输出低电平；当**CNT>CCR**，PWM输出为高电平；
    
-   第四步：循环上述三个步骤；
    

**程序中如何实现？**

从上述STM32产生PWM的过程中不难发现，满足；

①

上一节推导的公式如下：

②

结合①式和②式，可以得到：

> 上面公式中用CCR表示CCR寄存器中的值，ARR表示ARR寄存器中的值；

**最后需要做的三件事**

-   计算出ARR，一般配置TIM定时器的时候能在数据手册找到公式；
    
-   调制比，也就是的系数；
    
-   根据③式生成正弦表，然后查表（实时计算因为涉及到较多运算量，所以利用查表，空间换时间，提高效率），**利用PWM的事件去触发中断，更新下一次CCR的值**；
    

**正弦函数表**：

```
const uint16_t indexWave[] = { 0, 9, 18, 27, 36, 45, 54, 63, 72, 81, 89, 98, 107, 116, 125, 133, 142, 151, 159, 168, 176, 184, 193, 201, 209, 218, 226, 234, 242, 249, 257, 265, 273, 280, 288, 295, 302, 310, 317,  324, 331, 337, 344, 351, 357, 364, 370, 376,  382, 388, 394, 399, 405, 410, 416, 421, 426,  431, 436, 440, 445, 449, 454, 458, 462, 465,  469, 473, 476, 479, 482, 485, 488, 491, 493,  496, 498, 500, 502, 503, 505, 506, 508, 509,  510, 510, 511, 512, 512, 512, 512, 512, 512, 511, 510, 510, 509, 508, 506, 505, 503, 502, 500, 498, 496, 493, 491, 488, 485, 482, 479, 476, 473, 469, 465, 462, 458, 454, 449, 445,  440, 436, 431, 426, 421, 416, 410, 405, 399,  394, 388, 382, 376, 370, 364, 357, 351, 344,  337, 331, 324,  317, 310, 302, 295, 288, 280,  273, 265, 257, 249, 242, 234, 226, 218, 209,  201, 193, 184, 176, 168, 159, 151, 142, 133,     125, 116, 107, 98, 89, 81, 72, 63, 54, 45, 36,    27, 18, 9, 0};
```

**中断服务函数：**

```
extern uint16_t indexWave[];extern __IO uint32_t rgb_color;/* 呼吸灯中断服务函数 */void BRE_TIMx_IRQHandler(void){  static uint16_t pwm_index = 0;  //用于PWM查表 static uint16_t period_cnt = 0;  //用于计算周期数 static uint16_t amplitude_cnt = 0; //用于计算幅值等级 if (TIM_GetITStatus(BRE_TIMx, TIM_IT_Update) != RESET) //TIM_IT_Update  {    amplitude_cnt++;  //每个PWM表中的每个元素有AMPLITUDE_CLASS个等级，  //每增加一级多输出一次脉冲，即PWM表中的元素多使用一次  //使用256次，根据RGB颜色分量设置通道输出  if(amplitude_cnt > (AMPLITUDE_CLASS-1)){     period_cnt++;   //每个PWM表中的每个元素使用period_class次   if(period_cnt > period_class){            //标志PWM表指向下一个元素    pwm_index++;                //若PWM表已到达结尾，重新指向表头    if( pwm_index >=  POINT_NUM){     pwm_index=0;    }    //重置周期计数标志    period_cnt = 0;   }   //重置幅值计数标志   amplitude_cnt=0;               }else{    //每个PWM表中的每个元素有AMPLITUDE_CLASS个等级，   //每增加一级多输出一次脉冲，即PWM表中的元素多使用一次   //根据RGB颜色分量值，设置各个通道是否输出当前的PWM表元素表示的亮度   //红   if(((rgb_color&0xFF0000)>>16) >= amplitude_cnt) {    //根据PWM表修改定时器的比较寄存器值    BRE_TIMx->BRE_RED_CCRx = indexWave[pwm_index];    }else{    //比较寄存器值为0，通道输出高电平，该通道LED灯灭    BRE_TIMx->BRE_RED_CCRx = 0;     }   //绿   if(((rgb_color&0x00FF00)>>8) >= amplitude_cnt){    //根据PWM表修改定时器的比较寄存器值    BRE_TIMx->BRE_GREEN_CCRx = indexWave[pwm_index];    }else{    //比较寄存器值为0，通道输出高电平，该通道LED灯灭    BRE_TIMx->BRE_GREEN_CCRx = 0;    }      //蓝   if((rgb_color&0x0000FF) >= amplitude_cnt){    //根据PWM表修改定时器的比较寄存器值    BRE_TIMx->BRE_BLUE_CCRx = indexWave[pwm_index];    }else{    //比较寄存器值为0，通道输出高电平，该通道LED灯灭     BRE_TIMx->BRE_BLUE_CCRx = 0;     }   //必须要清除中断标志位   TIM_ClearITPendingBit (BRE_TIMx, TIM_IT_Update);   } }}
```

## 总结

本文简单介绍了SPWM的原理和调制方法，推导了SPWM的PWM脉冲宽度的计算时间，最后给出了基于STM32单片机产生SPWM驱动呼吸灯的部分代码，**完整代码关注公众号私信发送SPWM获取**。

> 由于作者能力和水平有限，文中难免存在错误和纰漏，请不吝赐教。

—— The End ——

  

  

  

推荐阅读

  

  

  

-   [一篇很棒的C语言入门笔记，值得收藏！](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247487150&idx=1&sn=1391e71fbb0e97f9a956d6e2b0f7673d&chksm=c309d07cf47e596aac5dc827f1e23f2ae7f3757d7937362d0b257c64aea20807fb2ea7583954&scene=21#wechat_redirect)
    
-   [单片机I/O口驱动，为什么一般都选用三极管而不是MOS管？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486954&idx=1&sn=fe70c11c8551a19fc1cdf7e401175a52&chksm=c309d338f47e5a2e95880b569f6b776b8b2aae541341abe45f4675570f4379879d0f2a16ae83&scene=21#wechat_redirect)  
    
-   [半桥电路的死区时间](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486014&idx=1&sn=1047627c02c71f4e2f42271a551a9207&chksm=c309d4ecf47e5dfaa518a626fe1b65abf4890a1e696264443735663d1a0cbebd2677cd6cb38e&scene=21#wechat_redirect)
    
-   [5分钟带你了解D类功放](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486066&idx=1&sn=9009fe731f35ca226f0f43d67d39e5dd&chksm=c309d4a0f47e5db673a386f181e761568fbb61dbf9e56267526a0d5431736fa02d548cc714e1&scene=21#wechat_redirect)  
    

  

后台回复**加群**，管理员拉你入技术交流群。