# Capacitor-9：铝固体电解电容-3


> 原文地址: [https://mp.weixin.qq.com/s/zIcChEDxYwEGCsMR\_I4DOg](https://mp.weixin.qq.com/s/zIcChEDxYwEGCsMR_I4DOg)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTXQRmxibPia3BQpyribbB0qGsclpQwvOFXynRic3W7tuuoyPKsrnlXABfx6q0PrMWpcGgcqWaDZR9jRQ/640?wx_fmt=png)

_★★★__Cap-9---铝固体电解电容-3__★★★_

引言：为了抑制输出纹波电压，要求开关电源输出端的平滑电容器为低ESR电容器。但是低ESR电容器可能引发输出电压异常振荡（传送门[DC-DC-10：滞回反馈控制模式](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247486235&idx=1&sn=7f2936642c9a771f625e2e593772ef0e&chksm=c3354184f442c89251e8b3b1a1ff2785168f0969bba1b632352ee1fae2e1352021e1af741cbc&scene=21#wechat_redirect)）。输出电压的异常振荡也会因控制方式，降压型，升压型等的拓扑发生变化。以下以电压控制模式的降压型开关稳压器为例，对输出电压振荡的原理及对应方法做以说明。

___€1.高速备份性能（负载变动用储能电容器）___

_输出电压的异常振荡_

为了实现输出电压的稳定化，通常在开关电源电路上设置负反馈电路。利用误差放大器对输出电压和标准电压Vref间的误差进行放大，通过PWM比较器将其变为开关信号控制Q1。输入电压Vin通过Q1变为矩形波（传送门[DC-DC-8：电压反馈控制模式](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247486037&idx=1&sn=242e743f369ed7f6986242f341865157&chksm=c33540caf442c9dc14413081355f6f6d37adfc09d2ce715d5081e3efc1a99fb0a408d0156aed&scene=21#wechat_redirect)），利用线圈L和电容器Cout进行平滑并获取直流输出电压Vout，L和Cout形成了二次低通滤波器。

输出LC滤波器的频率响应为**_图9-1_**所示波特图。因误差放大器在负反馈电路上，最初时相位已经滞后180度。如果输出LC滤波器的相位滞后和误差放大器的相位滞后重叠后为360度相位滞后时，输出电压就会发生振荡。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTXjaNXponSLbsu0VBVnEGRZdCyGWibLNgoxoL33RuScsA7G3YiaLlIibxtkFplW2ROibYGz2gwmv63LA/640?wx_fmt=png)

**_图9-1：开关电源的控制框架_**

LC滤波器的衰减率为－40dB/dec，截断频率为：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQKB2aVTicpaOtJ7Lq7OicB5OWQQIxJxwyTLeGbt3POtCbNZODFfCGEPmVguvmMEPXbTAnemvibiaYy2g/640?wx_fmt=png)

时的增益（Gain）和相位 (phase) 如**_图9-2_**虚线所示：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQKB2aVTicpaOtJ7Lq7OicB5OsXlibjEoMrVJia0S0wEnF7JSEv4466SIK6bJCQDrKCXrnZhJbLSJCB9A/640?wx_fmt=png)

**_图9-2：LC滤波器的频率特性_**

理想的LC滤波器为180度相位滞后，这时虽然发生振荡但实际的频率特性为**_图9-2_**所示实线，一定频率以上时的Gain从－40dB/dec变为－20dB/dec，Phase变为90度滞后为止。这是因为Cout的容量值和ESR形成了一次超前电路，其零点频率 ： 

   ![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQKB2aVTicpaOtJ7Lq7OicB5OME03LFTIOmgWSCiarDo7hzlocVw0fttSaiakoeIaRicibrbcBVjxRpdIWA/640?wx_fmt=png)

fo以后，为Gain衰减率+20dB，+90度相位超前。但是 , 如果使用低ESR电容器，可在更高频域成为理想的LC滤波器，phase则可更接近180度滞后，易于发生振荡。一般而言，为了防止负反馈电路的输出电压振荡，应考虑30至40度以上的相位裕度。

相位裕度是指，phase的下限值与-180度的差值。相位裕度越小构成元件的特性偏差或温度变化引起振荡的可能性就越高。

_____€2.___防止振荡的方法__

在误差放大器的反馈电路上进行相位补偿，可防止发生输出电压振荡。在众多相位补偿电路中，以下相位补偿电路最适用于电压控制模式的开关电源电路。

_**图9-3**_：通过②和④形成一次超前电路。①和③形成一次滞后电路。通过调整此类定数，利用输出LC滤波器的频率特性，在phase最下限频域进行超前补偿，以改善负反馈电路的整体相位滞后。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTXjaNXponSLbsu0VBVnEGRYfKIgMMYBKQ5XuouRVhuEwKdJMfQvWAtlD6lUYBfmuUGYX4VibruBLQ/640?wx_fmt=png)

**_图9-3：电压控制模式的相位补偿电路_**

**_图9-4_**：调整示例图，**_图9-4_**的输出LC滤波器的相位在约10kHz附近变为最低点，在此频率的相位超前约为30度。因此，即使LC滤波器的相位滞后接近180度 , 也能确保30度的相位裕度，可防止发生输出电压振荡。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQKB2aVTicpaOtJ7Lq7OicB5O4vRpPjtEdbVIYPUd7T8ZiaaibWVia2G9TrAWc1XPJFrN7Sd7OXuaPcCrw/640?wx_fmt=png)

**_图9-4：相位补偿电路的频率特性_**

_______€3.___防止振荡的具体设计例____

以获取20mVp-p的输出纹波电压为目的 , 算出所需输出电容器的ESR。

ESR＜Vripple/（（Vin－Vout）／L＊Vout ／ Vin／fosc）＝35.7mΩ

● OS-CON　 6SVP100M 　

１并联 φ6.3 × L6mm　ESR＝32mΩ　注：ESR 为实测值

●铝电解电容器　 6 V.DC／680μF 　

３并联 φ10 × L8mm　ESR=128 mΩ / 个　　⇒　总 ESR＝43mΩ

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTXjaNXponSLbsu0VBVnEGRD5WPvy2BWlzfAAicHswEzN8wW11Zjxoic9afk1yLueR64FVoG3KSMmCA/640?wx_fmt=png)

**_图9-5：降压型DC-DC转换器的具体设计例_**

_铝电解电容器的设计例_

使用铝电解电容器时，输出LC滤波器的频率特性（**_图9-6_**）无需进行相位补偿即有足够充分的相位裕度。因此，**_图9-7_**电路足以作为相位补偿电路。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQKB2aVTicpaOtJ7Lq7OicB5OHROE8RCZh9wnANc9fT38A3MEWKSWw4M0r8JNGFm5ol00PvDW8waJqA/640?wx_fmt=png)

**_图9-6：AL-E时的LC滤波器的频率特性_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTXjaNXponSLbsu0VBVnEGRU6DNXbibK4zb9WhFsmhRiaF85iajHUbtvHauq2IcNORgmoicesbd9N0VNQ/640?wx_fmt=png)

**_图9-7：AL-E时的相位补偿电路_**

通过使用**_图9-7_**相位补偿电路（实际并没有进行相位补偿），可观察到**_图9-8_**所示综合频率特性及足够的相位裕度。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQKB2aVTicpaOtJ7Lq7OicB5OW5wk1axIH3LhyLRJ6xDxEJYTiac8NCHyVIUqRay9pCniahQ0iaya9vibAA/640?wx_fmt=png)

**_图9-8：AL-E时的综合频率特性_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQKB2aVTicpaOtJ7Lq7OicB5OC9ovbiaalXZ0NVgxEG2AKnPjiah7yqMbHictahBlibXALgCseHaJfqLMdg/640?wx_fmt=png)

**_图9-9：AL-E时的输出纹波电压波形_**

_聚合物铝固体电解电容设计例_

使用铝电解电容器的电源电路在不变更为相位补偿电路的情况下，将电源电路中的铝电解电容器置换为聚合物铝固体电解电容后，发生了输出电压振荡(**_图9-10_**)。这是因为置换为低ESR的聚合物铝固体电解电容后，虽然输出LC滤波器的频率特性发生了由使用铝电解电容器 ( **_图9-6_**) 到使用聚合物铝固体电解电容( **_图9-11_**) 的变化，但是因为没有使用相位补偿电路致使相位裕度消失。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQKB2aVTicpaOtJ7Lq7OicB5OQGXuPpicHKstuTKXnIwDMia1BKCKxCOZ1qhNyAGmHljhtk5mJomvBe7A/640?wx_fmt=png)

**_图9-10：发生振荡的输出电压波形_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQKB2aVTicpaOtJ7Lq7OicB5OcRjY5wPIX7XJIRicibww1SoQcJ3O7hmoFYtib95XLhc5iazouBzjznlaWw/640?wx_fmt=png)

**_图9-11：聚合物铝固体电解电容时的LC滤波器的频率特性_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTXjaNXponSLbsu0VBVnEGR1BdJIqtxJd5tia4dHxjiaia3Fy6wALnPM2Dvd5bk1vPKftiaR07zDNGpzQ/640?wx_fmt=png)

**_图9-12：聚合物铝固体电解电容时的相位补偿电路_**

如**_图9-11_**所示 , 在LC滤波器基本没有相位裕度时，可利用**_图9-12_**相位补偿电路进行适当的相位补偿。即通过**_图9-12_**中的Zi，Zc形成的相位超前来缓解过大的相位滞后。

改善后如上，综合频率特性如**_图9-13_**所示，相位裕度足够充分，输出纹波电压波形（**_图9-14_**）也与使用铝电解电容器时基本相同。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQKB2aVTicpaOtJ7Lq7OicB5O8Y0NIK9ArpZB8uPyKsltnGS6rsMon12VgX0SWFBfMEiahG7UPB5Wibibw/640?wx_fmt=png)

**_图9-13：聚合物铝固体电解电容时的综合频率特性_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TQKB2aVTicpaOtJ7Lq7OicB5OMxmeGiatF9uIMceFfhG1EgFGpqiag4Yqo3CFluRNGbmpTzjKKickC5BVQ/640?wx_fmt=png)

**_图9-14：聚合物铝固体电解电容时的输出纹波电压波形_**