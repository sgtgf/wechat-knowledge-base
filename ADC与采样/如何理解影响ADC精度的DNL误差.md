# 如何理解影响ADC精度的DNL误差

原创 傅存敬 电磁散人 2025-08-27 22:30 广东

> 原文地址: [https://mp.weixin.qq.com/s/X5pOAqx-ye6WPy4HEnmXoA](https://mp.weixin.qq.com/s/X5pOAqx-ye6WPy4HEnmXoA)

今天我们来聊聊一个电子技术里挺重要，但可能有点抽象的概念——模数转换器（ADC）的**差分非线性误差（DNL）**。这名字听起来有点唬人，但其实理解了原理，就会发现它跟我们生活中的很多东西很像。

一、ADC是干什么的？为啥会有误差？

想象一下，你有一个温度计（模拟信号），但电脑（数字世界）只认识0和1。ADC就是个翻译官，把温度计测到的连续变化的温度值（比如30.1°C, 30.2°C...），转换成电脑能认识的二进制数字（比如010, 011...）。理想情况下，这个翻译应该非常均匀、精确。

但现实很骨感！就像工厂生产尺子总有点误差一样，ADC这个“翻译尺”也可能不准。常见的误差有：

-   **零点不准（****Offset Error）**：整个尺子平移了。

-   **刻度不准（****Gain Error）**：尺子拉长或缩短了。

-   **刻度不****均匀（Linearity Error）**：尺子上的刻度间隔有大有小。这就是我们今天的主角 **DNL（差分非线****性）** 和它的兄弟 **[INL（积分非线](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247483720&idx=1&sn=bf4cecf365148440fefe5df8ff545d3e&scene=21#wechat_redirect)****[性）](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247483720&idx=1&sn=bf4cecf365148440fefe5df8ff545d3e&scene=21#wechat_redirect)** 要描述的问题。

二、DNL到底是什么？—— 台阶宽窄不一

想象一个3位的ADC，它能输出8个不同的数字（000到111）。理想情况下，它像一个均匀的楼梯（图1蓝色线），每升高1°C，就正好上一个台阶（1 LSB）。温度变化1°C，输出编码就变一次。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFReBHKXkFNKMdjmvbLwVLkAKpuoh2D8D1KeTuZOO9faR9Ksy5cvwDtribanYmxdy3L5f6X7glWjFQ/640?wx_fmt=png&from=appmsg)

图1 3-bit单极性ADC理想传输函数下的示例

但实际的ADC可能像紫色线那样：

-   **台阶1（****001）**：宽度变成了1.125 LSB。这意味着温度要升高1.125°C，编码才会从000变到001。

-   **台阶3（01****1）**：宽度缩水到0.54 LSB。温度升高0.54°C，编码就从010变到011了。

-   **更糟的是台阶5（1****01）**：它**完全消失了（Mis****sing Code）**！无论温度怎么变，ADC永远不会输出101这个编码。

**DNL就是用来衡量****每个台阶宽度偏离理想值（1 LSB）的程度！**

 它的计算公式是：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFReBHKXkFNKMdjmvbLwVLk6jCdR5n3736fAsmQvu6yw8jndeiaE23BGjLFmBiaxHsiaucG5htp0zdjw/640?wx_fmt=png&from=appmsg)

k 是台阶（编码）的编号（比如001是k=1）。

 W    (k) 是第k个台阶的实际宽度（用LSB表示）。

 W\_ideal  是理想的台阶宽度，就是 **1 LSB**。

**我们算****算看：**

-   **台阶1** **(k=1)**：
    
    W(1) = 1.125 LSB   
    
     DNL  (1) = (1.125 - 1) / 1 = +0.125 LSB
    
     以上，意味着，台阶变宽了0.125 LSB。
    
-   **台阶3** **(k=3)**：
    
    W(3) = 0.54 LSB   
    
     DNL(3) =   (0.54 - 1) / 1 = -0.46 LSB
    
    以上，意味着，台阶变窄了0.46 LSB。
    
-   **台阶5 (k=5****)**：消失了！
    
    宽度W(5) = 0 LSB   
    
     DNL(5) = (  0 - 1) / 1 = -1 LSB  (这是导致编码消失的临界值)
    

**DNL告诉我们什么？**

-   **DNL > 0 (正数)**：台阶变宽了 -> **局部分辨率变差**。温度要变化更多，编码才会变。

-   **DNL < 0 (负数)**：台阶变窄了 -> 局部分辨率似乎变好？但别高兴太早！

-   **DNL <= -1**：台阶窄到消失 -\> **编码缺失(M****issing Code)**！这是大问题！

-   **DNL =** **0**：完美台阶！

工程师们会把所有台阶的DNL值画成一张图（图2），或者告诉你最大和最小的DNL值是多少（比如±1.0 LSB）。好的ADC会明确说“无缺失编码(No Missing Codes)”。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFReBHKXkFNKMdjmvbLwVLkUCVJOwslhsXNbsaUsnhTeDibIecYumq5QEJbE9xpH9xAia8M9UXBjMPA/640?wx_fmt=png&from=appmsg)

图2：DNL随编码变化的示意图

**三、DNL在实际系统中有****什么影响？—— 温度控制的例子**

假设我们用这个3位ADC来控制一个恒温箱（图3），温度范围是30°C到37°C（理想分辨率1°C）。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFReBHKXkFNKMdjmvbLwVLkiaF8YPQxxKq74xKDpGoxV5Vnm8VkVOhNREplpawPSJicWwGiaicvvm3a6g/640?wx_fmt=png&from=appmsg)

图3：温度控制系统示意图

**理想ADC（图4蓝线）**：温度从31.5°C升到32.5°C（变化1°C），编码正好从010变到011。系统立刻知道温度变了1度。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFReBHKXkFNKMdjmvbLwVLkeKagEdgCMjezfAUwkErVabnwIOk1PYLFXR6Bh9bWgdxlo5wNWx4klQ/640?wx_fmt=png&from=appmsg)

图4：理想ADC输入输出关系

**有DNL误差的ADC（图1紫线/****图5）**： 

-   假设当前温度在31.625°C（编码010的中间点A）。温度开始上升。

-   因为台阶2（010）的DNL是+0.25 LSB（实际宽度1.25 LSB），温度**必须一****直升到约32.875°C（点B）**，编码才会变成011！在这1.25°C的升温过程中，ADC的输出编码**纹丝不****动**！电脑以为温度没变，其实已经升了1.25°C！这就是**“死区”**或 **局部分辨率恶化**（从1°C变成1.25°C）。

-   如果某个台阶缺失（比如图5中的点C与点D），问题更大！在那个温度区间，系统完全**“失明”**，不知道温度在变化。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFReBHKXkFNKMdjmvbLwVLkKTs1T6sOibsMYK5IGo29sMgAQpWHPexZsD8RY7BwjH1woiceTwqL9qLw/640?wx_fmt=png&from=appmsg)

图5：有DNL误差的系统响应

**[四、分辨率 vs 精度——别搞混了！](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247483775&idx=1&sn=5cec8393d46739ff37433f6bd2dacd00&scene=21#wechat_redirect)**

-   **分辨率（受DNL影响）**：指的是系统**能察觉到的最小变化量**。DNL > 0 会让局部分辨率变差（比如从1°C变成1.25°C甚至2°C）。

-   **精度（主要受****INL影响）**：指的是**测量值离真实值有多远**。这跟所有误差累积起来的总偏差有关。即使分辨率变差了（台阶宽），如果正负DNL误差互相抵消（图6），精度误差可能还比较小（±1 LSB）。但如果都是负DNL（台阶窄），误差会累积（图7），精度就变差很多（比如±1.75 LSB）。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFReBHKXkFNKMdjmvbLwVLkt1rySicvYYWsOzD4EMnvthh4WgAjyv7rY0CyMv3GZd4hVj73jdCD2Lg/640?wx_fmt=png&from=appmsg)

图6：DNL误差部分抵消，精度误差±1 LSB

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFReBHKXkFNKMdjmvbLwVLkjOAGBVTZCAhSicunWISLBejU4sfbzHrTkEgiazib712ib4GGey1JdWOLJQ/640?wx_fmt=png&from=appmsg)

图7：负DNL累积导致精度误差增大(±1.75 LSB)

**五、[INL](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247483720&idx=1&sn=bf4cecf365148440fefe5df8ff545d3e&scene=21#wechat_redirect)****[——误差的“总账本”](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247483720&idx=1&sn=bf4cecf365148440fefe5df8ff545d3e&scene=21#wechat_redirect)**

DNL是看每个台阶的“个体户”，**INL（积分非线性）** 则是看所有台阶误差累积起来的“总账”。它的计算公式是：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFReBHKXkFNKMdjmvbLwVLkiavRzyb2Guvv47ibMrNuHqnTHaD9VxOkeXhBU3Igq2iapFJNDI5dTXBEg/640?wx_fmt=png&from=appmsg)

INL衡量的是每个转换点（台阶边缘）偏离理想位置的程度。它更能反映ADC整体的线性度好坏。通常看最大值（比如±2.0 LSB）。高INL通常意味着DNL问题严重（误差累积多）。

**六、现实很骨感——噪声的影响**

前面讲的DNL/INL都是理想情况下的“静态”误差。现实中的ADC还面临**噪声**干扰（图8）。想象一下，你站在台阶边缘，一阵风吹来（噪声），你可能站不稳，一会儿觉得在上一级，一会儿觉得在下一级。ADC也一样，在转换点附近，一点点噪声就会让输出编码在相邻值之间跳动。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFReBHKXkFNKMdjmvbLwVLkxEF4wo7tyZhDX3DQODYqtXLJAbhjs8bKTVaJPf1TeHGg9FTKXboJjg/640?wx_fmt=png&from=appmsg)

图8：噪声对ADC转换点的影响

对于高分辨率ADC（比如16位），噪声大小可能和1 LSB差不多，这会让实测的DNL变得不那么可靠。工程师们常用**信号平均**的方法来减少噪声的影响。

**七、总结**

1.  **DNL** 是衡量ADC每个“台阶”宽窄是否均匀的指标。它直接影响系统**检测微小变化的能力（分辨率）**。 

-   DNL > 0：台阶变宽 -> 局部分辨率变差。

-   DNL <= -1：台阶消失 -\> 编码缺失，大问题！  
    

2.  **INL** 是DNL误差的累积总和，反映ADC整体的线性度，影响**测量精度**。

3.  **噪声**是现实因素，会让转换点模糊，影响DNL的实际表现，常用平均法抑制。  
    

4.  **选型****关键**： 

-   做**精密测量或控制**（比如恒温箱、电子秤）：**重****点看DNL/INL**，确保无缺失编码，DNL/INL值小。

-   做**通****信**（比如收音机、手机）：**重点看SFDR**（无杂散动态范围），它更能反映ADC对信号保真度的影响（DNL/INL会导致谐波失真，恶化SFDR）。

所以，下次看到ADC芯片手册里的DNL和INL参数，就知道它们是在告诉你，这把“数字尺子”刻得均匀不均匀、准不准了！这对于构建一个靠谱的电子系统可是非常重要的！

（原文出处： https://www.allaboutcircuits.com/technical-articles/understanding-analog-to-digital-converter-differential-nonlinearity-dnl-error/ ）