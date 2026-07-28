# DC-DC-4：反相型的工作原理


> 原文地址: [https://mp.weixin.qq.com/s/WIcX8iiKEXlKRFioXXzDLw](https://mp.weixin.qq.com/s/WIcX8iiKEXlKRFioXXzDLw)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRtj0AYfnjU5aPFD3pm5EkMcpOISb7FbP4XMibhalVbrOODm7tejwzsaK4yETOuYyDpy9TNTicVFhKg/640?wx_fmt=png)

_**_★★★_**__**_DC-DC-4---反相型的工作原理_**__**_★★★_**_

_€1.反相型DC-DC的工作路径_

**_图4-1_**红色箭头表示开关元件打开时的电流流向：正极--->开关元件--->电感（此时对电感进行充能）--->GND，此时电感两端为正向电动势。当开关接通时，电感器两端的输入电压被强制正向电动势，导致流过电感器的电流增加。在接通时间内，输出电容器的放电是负载电流的唯一来源。这需要在接通时间期间从输出电容器损失的电荷在断开时间期间被补充。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRtj0AYfnjU5aPFD3pm5EkMLm4AJH46zdtrQ0A7Tn2HW7V9PVoXsrJE8P5oXY6IA6ZlCSSOOVNzEg/640?wx_fmt=png)

**_图4-1：开关元件打开时的电流流向_**  

**_图4-2_**绿色箭头表示开关元件关闭时的电流流向：电感（此时对电感进行放能，生成反向电动势）--->RL--->续流元件--->电感”负极“，此时电感两端为反向电动势。当开关断开时，电感器中电流的减少会导致二极管端的电压为负。这一动作使二极管导通，使电感器中的电流为输出电容器和负载供电。当开关元件断开时，负载电流由电感器提供，当开关元件接通时，由输出电容器提供。所以RL的负载电流即是流过开关S2的电流和Cout补充的电流，因此负载的电流不是那么平滑，波动较大，在电容配比上需要更大容值，更低ESR，更低ESL的Cout（百uF级别，例如220uF）。如_**图4-1**_所示，因此输出电容Cout的选择至关重要。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRtj0AYfnjU5aPFD3pm5EkMXcXCP17tlicud5MLR74e1yfiaowGkibt9WibleZ2MTykLpIiaVsq3PbOkSQ/640?wx_fmt=png)

**_图4-2：开关元件关闭时的电流流向_**

输出电压与基准电压进行比较，检查输出电压是否为设定电压（负值），低于设定电压时，开关变为ON，此时，电感会蓄积磁能。如果输出电压高于设定电压，则开关OFF，电感所蓄积的磁能变为电流被供往输出负载，再返回电感。当电感的磁能耗空，输出电压开始下降时，开关再度变为ON。如下_**图4-3**_是连续过程中的电流波形：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRtj0AYfnjU5aPFD3pm5EkMJFQLJaic8LsXYNgdAZn3b26xRbXS0eNkpicQZkVEZFomXtr1jjKR2Jdg/640?wx_fmt=png)

**_图4-3：关键器件电流波形_**  

_€2.反相型DC-DC的工作原理_

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQ44Y1K3xia1r8JZhsd2oBpGqYK8qqU0ibH6yrtbSfIiawmmSkrmFgXKXwd0Ht7Lz1LS1D7jljYGOcdw/640?wx_fmt=png)

**_图4-4：反相型工作流程_**  

_€3.关键工作波形_

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQ44Y1K3xia1r8JZhsd2oBpGUymBTNUiase62YVARtmbc2SjMtFdj7PQRickFSaX3RKyTRibE10icuu3oA/640?wx_fmt=png)

**_图4-5：PWM产生原理_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TRtj0AYfnjU5aPFD3pm5EkM0uyZANicf3T6F91BDWWQ7142MHO97nObYaOwvXicHveZq2synaAsoV1g/640?wx_fmt=png)

**_图4-6：关键工作波形_**

_€4.占空比和升压的关系_

反相型FET的ON时间越长，电感蓄积的磁能越多，产生的反向电动势越高，越能升到更高的反向电压。_**图3-7**_和_**图3-8**_演示了占空比Duty的变化带来的反相升压量的变化，注意一个细节，反相升压越高，Vout的波形更加陡峭，纹波更大，EMI也更多，需要格外注意。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQ44Y1K3xia1r8JZhsd2oBpGeO0KZubK8zPdbTSTbjwACL3q4jIia2WwddfKYSjLJIq5am5J5hrur0Q/640?wx_fmt=png)

**_图4-7：80%占空比，SW开启时间占80%_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQ44Y1K3xia1r8JZhsd2oBpGnnvSAg6dH9b8ia9ThNVrJU4W2VoLPQ0vpibA10DrZCYEO6g6uevb7cEA/640?wx_fmt=png)

**_图4-8：20%占空比，SW开启时间占20%_**