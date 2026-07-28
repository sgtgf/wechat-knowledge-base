# Diode-4：二极管的应用-2


> 原文地址: [https://mp.weixin.qq.com/s/egJnXcoLqh6BmIFiKzrA2A](https://mp.weixin.qq.com/s/egJnXcoLqh6BmIFiKzrA2A)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTiah5rXLdlYGdViavjB4pXQicbEMnVhVMibxVPsXibw3thV3ia7jgurjogKNf8hXm3Fhuap0SicNvl9GztQ/640?wx_fmt=png)  

____**★★★**______Diode-4---Zener的应用______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：Zener常用于在可能发生电压波动的地方进行稳压（钳位），比如驱动IGBT，FET等等，因此Zener既可以视作功能器件，也可以视作保护器件，本节简述Zener（齐纳二极管）的一些使用方法和使用场景。

______€1.___稳压___

Zener通常用于产生稳定的电压，在**_图4-1_**中，ZD1通过串联电阻器连接到电压源，负载电阻器Rload并联连接到Zener，该负载也可以是需要稳定电源电压的复杂电子电路。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TShAuyBPS2iaoR0gicicMX9F2bsn41Eb4jfvjPNgDibDoove2ib6IibiagZaQF3SPVksXpdV6e8YdFTxWYdw/640?wx_fmt=png)

**_图4-1：Zener的简易稳压器_**

对于预期的可能最高负载电流，必须选择串联电阻器R1的值，剩余电流也流过Zener，通过Zener的最小电流应确保二极管在反向导通的陡峭区域中工作，数据表中测量的Vz电流是一个很好的参考数据，这意味着对于高达17V的Vz值约为5mA，对于具有高齐纳电压的Zener约为2mA。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhCIvFHtn9chibOpZgUneia9jJGU8C4r4beIhJsQdm0VFHqHoLVrdy5iaIHw/640?wx_fmt=png)

R1耗散的功率为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhCdjlwjKqNc6ZSOTFdmEfV2MqKfxTJYh1qVpvhQiczNt86XXeA7EhUulw/640?wx_fmt=png)

如果没有连接负载，Zener具有最大的功耗，在这种情况下，通过R1的所有电流都流过二极管：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhC2uOlO5fPZpPpKd4VENrt5jcxwG0ZIf1ubibr9lpk3vlD0uxv1Vw5wGQ/640?wx_fmt=png)

**_图4-1_**所示的基本稳压器电路用于低功率要求，对于具有更高功率要求的负载电路，当负载关断时，全部电流通过R1，Zener也会发热，导致无效功耗，或者如果在使用过程中负载电流消耗下降，则会产生较多的热量。**_图4-2_**中的电路显著改善了这一点，ZD1通过R1被击穿稳压，双极晶体管Q1的基极连接到ZD1两端的稳定电压，Rload处的输出电压根据以下等式确定：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhCHqB7kdVH4nd25iah4vFzkz4iaibSnmFjrKfT47dCic6icwGzEtP49fLwy1Q/640?wx_fmt=png)

如果假设基极电流只是通过R1的电流的一小部分，Zener中的功耗几乎与负载电流无关。对于大约5V的输出电压，电路具有相当好的热稳定性，因为大约−2.0mV/K的齐纳电压的热系数通过具有非常相似系数的VBE的降低来补偿。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TShAuyBPS2iaoR0gicicMX9F2b0826HenAmqMQyPtfaGkiaGzzIKEKjbl1pfhfqaxicws1Uy8ZpTiafGvicQ/640?wx_fmt=png)

**_图4-2：带双极晶体管和齐纳二极管参考电压的稳压器_**

_________€2.___箝位______

大家需要注意一点，箝位和稳压是两个不同的概念，稳压是需要Zener一直工作在击穿区，而箝位则是当遇到浪涌电压时能及时击穿箝住电压水平。Zener的另一个重要应用就是箝位不期望的过电压。在**_图4-3_**描述了一个简单的负载开关，MOSFET的栅极氧化物对过电压很敏感。FET的内部ESD二极管不应用于箝位，因为在这种情况下，栅极-源极电压VGS高于数据表限制数值，ESD二极管的击穿电压高于规定的VGS额定值。在示例中，P-FET切换负载电流，一旦栅极相对于源极具有负电压，FET就会导通。如果开关S1导通，并联ZD1的R2和R1的分压器将栅极电压固定，高于VGSth，栅极处的电压由ZD1限制为在具有一定安全裕度的FET的VGS额定值内的电平。栅极电压可以通过不带Zener的电阻分压器进行调节，但是在这种情况下，如果VIN涌入过电压，则电路是不安全的。一旦负载开关断开，电阻器R1就必须用于栅极放电，S1通常使用N-FET或BJT来实现。（传送门：[SCD-10：如何使用PMOS设计防反电路](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247490900&idx=1&sn=24cb18aef226f6f34c4c438372b05465&chksm=c33557cbf442dedd250c4d5b3566485010558b0808ecb405bfbef1185acb958d1ec8fdf8f409&scene=21#wechat_redirect)）

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSUaicMyXrp5OC8HI33k1kGSVrsuI0LtwXeZVRuD0OZriaKDJF52bFylkd7XaySibsXic6TnyyPia9f71A/640?wx_fmt=png)

**_图4-3：带有P-FET和Zener的负载开关，用于栅极电压箝位_**

_________€3.___保护______

**_图4-4_**Q1正在切换电感负载，电感没有续流二极管。一旦开关断开，电流还会继续流动，L1产生的电压高到足以击穿FET的漏极D-源极S路径。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTia4vHp1sHlK2kcROsOHxFomVrQPZlCuQFiaatFvU6ah3iacRKajcO5mIOEicynCKGwib8nCoj3XjTEXw/640?wx_fmt=png)

**_图4-4：反向电动势的击穿隐患_**

**_图4-5_**是保护MOSFET的另一种解决方案，在FET的漏极和栅极之间添加Zener的情况下，FET可以再次略微导通，从而不会超过VDS额定值。FET在线性模式下短时间运行，并且存储在电感器中的能量在相对短的时间内耗散在FET中。与L1并联的简单续流二极管相比，漏极-源极路径上的较高电压损耗会让电感器中存储的较高功率能量更快衰减。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TShAuyBPS2iaoR0gicicMX9F2b6QgDwBOVicy2516qeE7tqp7Ch4Qv7JFUyXVKmykpZFT4xZibXZDDoDiaA/640?wx_fmt=png)

**_图4-5：用Zener保护感性负载的开关_**

_________€4.___交流箝位______

Zener可以用于所有箝位类型的应用，其中电压电平必须被箝位或保持在极限以下。**_图4-6_**显示了交流电源的电平限制器，对于正弦波源，最大值和最小值被对称地削波到VZ+VF。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSUaicMyXrp5OC8HI33k1kGS6I0xh7wbsKZkD0a1Xpu7bjCfj2OwvxqiaYH5fA9g2QibdyBg0AcVkLHg/640?wx_fmt=png)

**_图4-6：Zener对交流电压的电平限幅示例_**

**_图4-7_**是1kHz正弦波电压源通过220Ω电阻提供给两个VZ为5.6V的Zener的SPICE模拟结果。两个Zener串联连接，阳极连接（如**_图4-6_**），可以看出，削波电平比VZ高大约0.6V。使用类似的方法，Zener通常用于信号线的ESD和浪涌脉冲保护，通过电压限幅功能，它们可以防止可能危及和损坏电子电路的过电压。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TSsO5XhhgCgS0r0klxyTrsRCxiaKicFA62Ghpy1snpRrDQJeGmCzVpvqEou00rOliae0uU8QcibmdAbIQ/640?wx_fmt=png)

**_图4-7：对1kHz正弦波的对称削波_**

_________€5.___电压基准______

Zener经常被用作电压基准，**_图4-8_**显示了一个示例，其中运算放大器用作非反相缓冲器，ZD1提供稳定的参考电压，作为连接的电子负载的低阻抗输出电压。与**_图4-1_**所示的电路相比，可以选择通过Zener的电流较小。为了在低齐纳电流下以窄的VZ扩展来支持这种应用，提供了专用的低电流Zener产品。这些元件的额定电流为50uA，而不是标准Zener使用的5mA额定电流。如果标准Zener用于低电流应用，则应提前对零件进行测试，以便按要求箝位。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TShAuyBPS2iaoR0gicicMX9F2bzrpk1BFIos2RKgMYic4dWQ98vWMJC4dXdqDdGenfhfwc3FSDLwYV8rg/640?wx_fmt=png)

**_图4-8：Zener作为运算放大缓冲器的参考电压_**

无论选择哪家产品，在某些特殊的齐纳电压下，都可能出现雪崩效应，但会有一些延迟，因此对于非常小的电流Iz，可能会出现如**_图4-9_**所示的噪声。如果Zener晶体掺杂有金或铂，这些杂质可以在低偏置电流下提供雪崩击穿所需的载流子，这确保了即使在低雪崩电流的情况下，雪崩击穿也能安全准确地发生。

作为检查Zener在低电流下可靠工作的实验，可以将高阻抗（如1MΩ）与Zener串联，当使用示波器测量VZ时，由电流源产生的低电流通过二极管，**_图4-9_**显示了这种不利的延迟。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRWNzka3vNokbgNcbkemFhCLbhhGZfzlViaicfOq20wrTUH7PzwOoUXJiavzulgicwgUzNupMUZjr1FfQ/640?wx_fmt=png)

**_图4-9：Iz=30uA的75V-Zener的VZ，通过1MW阻抗供电，显示了不稳定的雪崩效应_**