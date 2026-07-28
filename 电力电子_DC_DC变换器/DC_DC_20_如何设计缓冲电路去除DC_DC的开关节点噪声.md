# DC-DC-20：如何设计缓冲电路去除DC-DC的开关节点噪声


> 原文地址: [https://mp.weixin.qq.com/s/PlsY8PvJukZ2E9HVjCmpjg](https://mp.weixin.qq.com/s/PlsY8PvJukZ2E9HVjCmpjg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTOJiaw6SNGD35iblQ03rjsBL0lksU0yQbHanKwzkpWWjblF9gXWbYEchxkStbXlyTuRRKIGARItaKA/640?wx_fmt=png)

____**★★★**______DC-DC-20---缓冲____电____路设计______**★★★**____

引言：降压转换器IC的开关节点容易产生很多高次谐波噪声，缓冲电路作为除去这些高次谐波噪声的手段之一，本节简述如何使用RC缓冲电路去除开关节点谐波噪声。

_____€1__________.RC缓冲电路_____

如**_图20-1_**是一个典型的降压DC-DC的结构简图：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5gHjibjCzs0vHdnq5mvLNsibGgiagJpSzsIzdJsphRzgfnRRz8ChibfoEeg/640?wx_fmt=png)

**_图20-1： 降压开关转换器电路_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5H0aYpAXPp10FqZSKibl3Az0X7oODGdT4bptd7FG84AUm6P5c38ond7w/640?wx_fmt=png)

**_图20-2：考虑寄生参数的电路_**

但实际上如**_图20-2_**所示会存在很多寄生电感LP和寄生电容CP，高边开关在导通和关断时，由于寄生电感蓄积的能量，在输入环路里会产生共振。因为寄生参数的值由于非常小，所以共振频率可以达到数百MHz以上，如**_图20-3_**的开关振铃，会导致EMI特性劣化。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic54yJJdjBXDCQN0tjrZLvibOFG4ynRicmcJrebqHAxyUOTGNOQia0k2BjXA/640?wx_fmt=png)

**_图20-3：SW开关节点振铃波形_**

RC缓冲电路是用来去除高次谐波噪声的一种有效方法，如**_图20-4_**所示在开关节点只需追加RC网络就可以实现降低高次谐波噪声。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic50g5wwibxtYzrS7NWHnCpB9rnHy4RakooXVH7ZqhibQw45LdfQ0Th65FQ/640?wx_fmt=png)

**_图20-4：RC缓冲电路_**

**_图20-5_**展示了缓冲电路的动作过程：当高边开关导通时，寄生电感蓄积的能量通过缓冲电容CSNB ，作为静电能量存储在电容里。开关节点电位会上升到输入电压VIN，当充电到VIN时，电容储存了1/ 2×CSNB×VIN×VIN能量。这时候缓冲电阻RSNB里会产生与充电能量相同的1/ 2×CSNB×VIN×VIN阻抗损耗。当低边开关导通时，开关节点会降低到GND电位，所以缓冲电容CSNB蓄积的能量会通过缓冲电阻(阻尼电阻)放电。这时候缓冲电阻RSNB会消耗1/ 2×CSNB×VIN×VIN能量。作为这个公式的补充说明，充电后电容电荷Q由CSNB×VIN求得，电源供电功率为VIN×Q=CSNB×VIN×VIN。电容蓄积能量和释放能量在充放电周期CR 常数设定足够长的话，只由电容容量和电压决定。充电时电源有一半能量由于电阻变成了焦耳热，剩下的一半作为静电容量储存在电容里。放电时蓄积的一半静电能量由于电阻变成了热能。即使电阻值变化，只会充放电所需时间发生变化，但是这个比例是一定的。

开关一个周期合计会由电阻产生CSNB×VIN×VIN损耗，仅开启关断的次数就会产生损耗，所以产生损耗由CSNB×VIN×VIN×fsw求得。即使无负载，但是只要有开关动作，缓冲电路就会产生损耗，所以这就成了效率降低的要因。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5DYvJKq0R4XbVILqE3gXcyYQKOu5fzWhRrVabZg1icmBoxerbg28Ne3g/640?wx_fmt=png)

**_图20-5：缓冲电路的动作过程_**

_____€2.计算RC的值_____

介绍了消除振铃的缓冲电路RC值由下面两个公式求得：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5oHSQG9aEGlt95Pb88ebbj3ibGicQboiciapJ9vicG9oWUP0fly5JVichiajLw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5tL9G0t13Vt86KNBvr4b783voZB7EOk3UIeb06a33PshpP7vh2b3LSA/640?wx_fmt=png)

LP和CP2是寄生参数，有手册不公开该信息，或值太小难以进行参数计算。下述实例按照一边在实机上测量实际的开关波形，一边计算相关参数的方法进行说明。

_____€3.RC值计算步骤_____

#1. 使用示波器测得振铃频率fr。

#2. 在开关节点和GND之间接入电容CP0，求得振铃频率变为1/2时的电容值。

#3. 电容容值CP0的1/3即是寄生容量CP2。

#4. 由寄生容量CP2求得寄生电感LP。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5oWroz4SyRib3MpQa0NP20Ra9t3CTTrW0aUTfoASRkfVVxCofxZf7b6g/640?wx_fmt=png)

#5. 求得共振的特性阻抗。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5xkjxWbOlT7LEKOQpy44HvT6keicQyZoIomtBlFCme3ENru9FiawOLKaw/640?wx_fmt=png)

#6. 缓冲电阻RSNB设为和特性阻抗Z同等程度的值:RSNB≥Z

#7. 缓冲容量CSNB设为寄生容量CP2的1～4倍。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5K6OrcXPSzPesXUyE54pOWkVI25mDCRpyGLdjgVjKoKgR9Qn3j9e5UA/640?wx_fmt=png)

#8. 求得缓冲电阻RSNB的消耗功率。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic54WvRE7kuTvVAqISK2OmM845ZQw6SFWiaiaIJRedIxn3QiaUHFVPAs7L7w/640?wx_fmt=png)

_____€4.RC值计算实例_____

这里一边进行实际测量一边按照RC值计算步骤进行说明。

1\. 因为需要使用示波器来测量振铃频率，所以在测试点的开关节点处一定要会使用探头。为了降低探头附加在开关节点处的寄生容量，将探针前端的挂钩尖端除去，使探头直接接触开关节点，因为接地引线会附加电感成分所以去掉。取而代之的是安装接地引线适配器，使接地长度最小化，放大振铃波形，**_图20-6_**测得频率为217.4MHz。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic54icVSU6OnMFo4fkdzjTiaJyGxywMRu7eibJ2hjXSaSXV5BVFOOmiaqbWlQ/640?wx_fmt=png)

**_图20-6：测定振铃频率_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTUqWClmCLP5XxawakW3EPWNA1Mvef0SLmIYosdfSD01Y8T57RqB4fPVbnY2ZrCgUmWibsxtTW4Qnw/640?wx_fmt=png)

**_图20-7：追加CP0_**

2\. 如**_图20-7_**所示，在开关节点和GND间接入电容CP0，求得振铃频率变为1/2时的电容值。该例将217.4MHz的一半108.7MHz作为目标，实验结果显示当追加680pF电容时，如**_图20-8_**所示，振铃频率约为108.7MHz)。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTUqWClmCLP5XxawakW3EPWp4RM7qWoRok8YyzkUDoKF22p2XCSg5iaNnFwrRVL9fMQ01ozKC5K4YQ/640?wx_fmt=png)

**_图20-8：将 CPO设为 680pF 时的振铃频率_**

3\. 振铃共振频率由

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTUqWClmCLP5XxawakW3EPWcPfib3760bLx86ogDbFTpVehczBmWH7HFX4TmKLbOlwYIqkicfH6j1WA/640?wx_fmt=png)

决定，因此容量值变为4倍的话，频率降为一半。也就是可以推测寄生容量CP2为附加电容CP0的1/3。CP0为680pF时，寄生容量CP2就如下式所示求得：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTUqWClmCLP5XxawakW3EPWIpfEibmACcbT0tRiaIZpcC2AXzfN11fzDwqxFzyXtD5tYTH423oQ2FTg/640?wx_fmt=png)

4\. 寄生容量CP2计算得出后，共振频率公式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTUqWClmCLP5XxawakW3EPWa2BkeVtHyHVadVSibEduAI1kjWyOG80cIF5chCk4Dy79lAqc5wibJkVA/640?wx_fmt=png)

变形可以求得寄生电感LP。振铃频率fr为217.4MHZ，寄生容量CP2为227pF，那么

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTUqWClmCLP5XxawakW3EPWNn4D3lvVew6HWDaebibFxVdueSK0JS6jp8rvwFHjaDibXeSJq759ib3bA/640?wx_fmt=png)

5\. 求共振特性阻抗。为了简化计算，不考虑传输线路损耗，由理想的实际数值计算：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic56g3pRleiaDLc5g55Imb0AMDxcMSLBd9je1rziab7oU2WrN7RiboAR6GLg/640?wx_fmt=png)

6.为了衰减振铃，有必要将缓冲电阻RSNB设为和共振特性阻抗Z同等大小：RSBB≥Z，这里实例选取3.3Ω。

7\. 缓冲容量CSNB设定为寄生容量CP2的1～4 倍。计算结果为227pF、454pF、681pF、908pF，实物容值为220pF、470pF、680pF、1000pF。依次改变这些容量，观测振铃波形。结果如**_图20-9_**至**_图20-13_**所示，可以判断出当容值为680pF时，可以获得无振铃的良好波形。当振铃不消失时，将容量值进一步增加到10倍程度观测波形。但是容量值越大功率损耗就越增加，效率就低下。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5sh3xDiajSoE5ibYllB5k2kSRbcmBBuoxaicXz7ia4neu4F6sxPDZlJAzPw/640?wx_fmt=png)

**_图20-9：无缓冲电路_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5AcZjK92mxZJQKWqmjQDicRibWDXmAqibdLUJypIcruGOljeIAM5POWAIw/640?wx_fmt=png)

**_图20-10：RSNB=3.3Ω、CSNB=220pF_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic59AbQBjYeN6dSAoBMVVQ32RAp7wyJichXslibpdnqEFFIULLvx7tU5ibSg/640?wx_fmt=png)

**_图20-11：RSNB=3.3Ω、CSNB=470pF_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic533xiajgjqNglvBGeeCEG6PLgpWJJGsTj0WocFvq51W1IeXlEFXDb5ibw/640?wx_fmt=png)

**_图20-12：RSNB=3.3Ω、CSNB=680pF_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic5YDxQDeQ2RDK0jzsY3qw9RmVTTzjyU42Y1Y1mibbmibjiaNI2sBpgYAhPg/640?wx_fmt=png)

**_图20-13：RSNB=3.3Ω、CSNB=1000pF_**

8\. 缓冲电阻RSNB的消耗功率由如下公式求得。举例输入电压VIN为5V、开关频fSW为1MHz，因此

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic50RQUeA1hCVicicYhKiapicaNmuPuCSDiaT80s1FGcfTqd8uKte5IhPTP2icQ/640?wx_fmt=png)

缓冲电阻产生了17mW损耗，这个例子损耗虽然小，但是输入电压高的时候损耗也变大，因此不注意电阻的额定功率的话，缓冲电阻就会烧毁。缓冲电阻推荐使用额定功率是消耗功率2倍以上的电阻。

例如输入电压VIN为24V、开关频率fSW为1MHz时：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSvhiatdzk4qKhS8ic23Vdaic50lUPTK6o4Ps61AdCt2d2ibE1oqPaibQcJZgh2SYXfCxCicV0gXrnWtITg/640?wx_fmt=png)

产生了0.39W消耗功率，因此需要使用额定功率1W，尺寸为6432 (2512 inch)的电阻。这个例子虽然选择了3.3Ω和680pF两个常数，但是这个只对一开始测定的振铃频率有效，还得必须考虑输入电压或负载电流变化时这些参数也会变化的可能性，不管哪种条件都需要将最大程度减弱振铃作为目标值。