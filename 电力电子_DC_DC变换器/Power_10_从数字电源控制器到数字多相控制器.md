# Power-10：从数字电源控制器到数字多相控制器


> 原文地址: [https://mp.weixin.qq.com/s/losJKmA6A6Nq61pi5\_K91A](https://mp.weixin.qq.com/s/losJKmA6A6Nq61pi5_K91A)

____**![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTvnBIPibmduNQLhoTfaETtI9ZoMFrGcclLma2m0h6Uzgv2MpsDGRSwgibr54E8SPc0tAl4vibj4WPxQ/640?wx_fmt=png)★★★**______Power-10---数字控制器______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：在大电流场景，DrMOS和低压栅极驱动器的出现，使得（Digital Power Controllers）数字电源控制器也应运而生。作为电源系统的最前端控制级，数字电源控制器需要有优良的响应，精细的控制，灵活的与后级控制（栅极驱动）或者功率级（DrMOS）相配合，输出稳健的电源轨。

____________€1.结构组成____________

如**_图10-1_**所示，无论2和3部分是独立还是合并一起的DrMOS，作为数字控制器的1部分其功能都没有发生变化。  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TR0qWkWQkTaj9YCnfyqAz26qX6u27trjmsFKUsSDK8zd7cZvcbmk00AZuxOfGibaiaY2DFVCCGuGySg/640?wx_fmt=png)

**_图10-1：DC-DC的结构层级_**

数字多相控制器产品组合高度灵活、功能丰富，为服务器、存储、数据通信、电信和消费类应用等广泛应用中使用的CPU、GPU、SoC和 ASIC提供了强大动力。这些数字控制器支持多种通信协议，例如英特尔SVID、AMD SVI2、AVS总线和PMBus，并通过直观的图形用户界面 (GUI) 提供了广泛的可编程功能。专有控制系统实施结合了线性和非线性控制算法，以实现一流的瞬态性能和更少的输出电容数量，从而降低物料成本。这些控制器可提供广泛的故障保护和遥测功能，有助于提高系统鲁棒性，让系统更智能，引脚固定编程允许对多个应用和/或平台使用，如**_图10-2_**，是一个12相PWM输出的典型系统框图。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQOSc1aQ5LR7SxgURva20wf340E3iaZerDtwDcZvcq7e2BWpYHSgLPRWEajHfZK60FvdWs57NIpp8Q/640?wx_fmt=png)

**_图10-2：12相PWM输出控制器_**

如**_图10-3_**所示，8相PWM输出控制器IR35201，搭配DrMOS--IR3555，配置为6相输出V\_CPU\_L1和2相输出V\_CPU\_L2。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TQIP6kEmZ1moRluK2L1EO5UGAxsd6uk0SrE4ib8qOI6pwu0krxUSibMibG3ltbQtW8WPRZRTZECLI0Sw/640?wx_fmt=jpeg)

**_图10-3：8相PWM两通道输出_**

____________€2.波形示例____________

数字控制器本质就是产生控制用的PWM驱动波（所以也叫PWM控制器），因此在一部分场景可以使用MCU来实现数字控制器的功能，**_图10-4_**到**_图10-6_**显示了处于稳态的八相TLVR电路的仿真。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSB9287JJvoTD2tHh7KDYKNZYPWwL82xRvGaT4icFxCx9YxU7ubzdhIM9HykbXfgHawmwvwj4oKA1A/640?wx_fmt=png)

**_图10-4：八相PWM波形_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSB9287JJvoTD2tHh7KDYKNnYmpxHvwQ5XZECJ2REL2Mv2sUk3PT8SWZ6hvZRr4nNB9KfqX2ejj1w/640?wx_fmt=png)

**_图10-5：耦合电路中的电流_**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSB9287JJvoTD2tHh7KDYKNicicqLyBKGJYs18LibxPudcjpodnnS1K8ibZgJ0e7KJB1AIiann4kfItI8Q/640?wx_fmt=png)

**_图10-6：各相电流_**

通过观察稳态中的相电流斜率，可以区分以下内容：

1#：一个上升斜率和一个下降斜率：电路未耦合，或者占空比乘以相位计数为整数。

2#：相位接通时间期间的一个上升斜率和断开时间期间的两个不同斜率：耦合和非重叠PWM信号。

3#：接通时间期间的两个不同斜率和断开时间期间的二个不同斜率：耦合和重叠的PWM信号。

在稳态中，耦合回路中的电流总是三角形或零，为了分析固定频率交错相位连续导通模式（CCM）下的电路特性，研究了不同的电流斜坡条件。对于给定的一组操作参数，相电流最多有四个不同的斜率：

1#：以最大相位数打开状态

2#：以最小相位数开启处于开启状态

3#：在关闭状态下以最大相数关闭

4#：在断开状态下以最小相数关闭

此外，如果相位没有重叠，则情况2不存在，因为没有其他相位可以处于导通状态。在稳态的一般情况下，最大相位计数比最小相位计数高一个，占空比乘以相位计数为整数时除外，在这种情况下，不存在输出纹波电流，并且导通状态下的相的最大计数和最小计数相等，即仅存在两个斜率。

________________________€3.______________瞬态比较__________

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQIP6kEmZ1moRluK2L1EO5UxiacS5Qia79ib2pha5dY3o6gsnBk8pdadgMNjFYEk5S1icguMM7JPXzAeQ/640?wx_fmt=png&from=appmsg)

**_图10-7：瞬态比较示例_**

作为布局的一般规则，耦合回路应被视为有噪声的（与开关节点相当），因此耦合回路的最佳做法是仅在没有任何过孔的顶层上路由连接，闭合环路的连接是第二层接地，通孔只需要在相位和LC布置的两端连接到地。

________________________€4.小结________________________

笔记本电脑、各类服务器的CPU以及显卡GPU的供电系统（VRM），输出电流大，要求具有快速瞬态响应特性，超低纹波，通常采用多相同步Buck降压控制器，搭配DrMOS通过高集成整合，最大程度减少寄生电感、电容影响，降低系统整体尺寸，大幅提高功率密度，满足高功率主板节能、低温、高效能超频等特色，提供优质供电。