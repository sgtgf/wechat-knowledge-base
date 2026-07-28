# Logic series-1：基本逻辑门以及其控制用途


> 原文地址: [https://mp.weixin.qq.com/s/2A-kGCAr1uf-oUIxagoXDA](https://mp.weixin.qq.com/s/2A-kGCAr1uf-oUIxagoXDA)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTvpwwgPg5Vyteicicu3kia0Zhb8HSrDfXN4zgCkY0icic5frXZHXN9hibL6SZO02XibqkP0EPn8E0AjK6fQ/640?wx_fmt=png)

____**★★★**______Logic-1---基本逻辑门______**★★★**____

引言：在板极的逻辑控制中，基本逻辑门的使用特别广泛，包括与门，或门和外置信号驱动器，缓冲器等等，基本逻辑门相比于分立元件搭建的逻辑门，抗干扰能力和驱动能力更强，信号质量更好。运用最基本的逻辑门电路，使用逻辑代数可以构建出更复杂的控制逻辑以此满足设计需求。

___€1.非门___

非门也叫反相器，输入输出互为对立，反映到电平上即输入低电平，输出为高电平，输入高电平，输出则为低电平。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBaic3rD0jHfuYZCcNJjtcQgODTCrMSxiaJ5D38Hqmnucfo5Dpp6bZnvsg/640?wx_fmt=png)

**_图1-1：非门_**

___€2.与门___

**_图1-2_**描述的是二输入AND功能。只有当所有输入均为高电平时，与门的输出才会是高电平(1)，所有其他输入组合得到的输出均为低电平(0)。

1#：在使能高电平有效的电子系统中，与门输出可以用来防止系统激活，直到满足在与门输入端监控的某些条件（例如电源和温度状态）。

2#：如果将其中一个输入保持为高电平，则输出将与另一输入的状态相同。因此，可以将一个输入用作高有效使能，实现对另一输入上的数据流进行门控制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBMSWTZJct4Fmum5NV39xuTCpeRicdSsmR9jzMqHemWWhGPpm8yhB4RAQ/640?wx_fmt=png)

**_图1-2：与门_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhB56ia5TK6TlZCzcoSckITib3Syr3khQJDeY0m6NsyOOWKpRUj2fYBAFzQ/640?wx_fmt=png)

**_图1-3：与门真值表_**

___€3.或门___

**_图1-4_**描述的是二输入OR功能。只有当所有输入均为低电平时，或门的输出才会是低电平，所有其他输入组合得到的输出均为高电平。

1#：在使能高电平有效的电子系统中，如果在或门输入端监控到一个或多个条件（例如自动或手动启动）为真，则可以使用或门输出使能系统。

2#：如果将其中一个输入保持为低电平，则输出将与另一输入的状态相同。因此，可以将一个输入用作低电平有效使能，实现对另一输入上的数据流进行门控制。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBHq34HGJoa4v69wPPibSXGS6NC0gaJicEM1YsCCJb0TIGYe4p1KbHa4PA/640?wx_fmt=png)

**_图1-4：或门_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBA9IAESYhIgHqV3lB7gbnOnuUasI5gWlf43GlzBEYUCG7UlEA5rPYEw/640?wx_fmt=png)

**_图1-5：或门真值表_**

______€4.___与非门___

如果对与门的输出进行反相，则将实现另一个基本功能，即与非门。**_图1-6_**描述的是二输入NAND功能。只有当所有输入均为高电平时，与非门的输出才会是低电平，所有其他输入组合得到的输出均为高电平。

1#：在使能低电平有效的电子系统中，如果与非门输入端同时监控到两个不良条件（高电平），则可以使用与非门输出来禁用系统。

2#：如果将其中一个输入保持为高电平，则输出将与另一输入的状态反相。这提供了一个低电平有效的门控反相器功能。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTvpwwgPg5Vyteicicu3kia0ZhiaLKLLyZZ46xQBITVE2W7P5289L0dCRtqwutFjrgpge0tnzAPRE9z7A/640?wx_fmt=png)

**_图1-6：与非门_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTvpwwgPg5Vyteicicu3kia0Zhj0nibTlaYrqdpdp6ptmVBqqAPVBo1PrlFOmiaaia6pXWFoygxF5KKyDjQ/640?wx_fmt=png)

**_图1-7：与非门真值表_**

___€5.或非门___

如果对或门的输出进行反相，则将实现另一个基本功能，即或非门。**_图1-8_**描述的是二输入NOR功能。只有当所有输入均为低电平时，或非门的输出才会是高电平，所有其他输入组合得到的输出均为低电平。

1#：在使能高电平有效的电子系统中，如果在或非门输入端监控到满足任何不良条件，则可以使用或非门输出来禁用系统。

2#：如果将其中一个输入保持为低电平，则输出将与另一输入的状态反相。这提供了一个低电平有效的门控反相器功能。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBFp5IjDlN3JIPCQYlQfQxouXtqTest8t813o56wujfD7glV9xmwtp1A/640?wx_fmt=png)

**_图1-8：或非门_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBF9UVYVG9PPp6Tm8k4UpSr3pRgN2qtBqPBshwqJmfZicnLZKot2fvIPg/640?wx_fmt=png)

**_图1-9：或非门真值表_**

___€6.异或（XOR)）门___

**_图1-9_**描述的是2输入异或(XOR)功能。只有输入之一为高电平时，异或门的输出才会是高电平，所有其他输入组合得到的输出均为低电平。

1#：在使能高电平有效的电子系统中，如果在异或门输入端监控到仅满足一个条件，则可以使用异或门输出使能系统。

2#：如果将其中一个输入保持为低电平，则输出将与另一输入的状态相同。如果将其中一个输入保持为高电平，则输出将与另一输入的状态反相。这将提供一个动态控制器件，可使数据流过或对其进行反相。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhB9zkicwv7XDGCI6Oso9elBLgnkmlOfRMt3GD0PeyxAibH6mAED73giavuA/640?wx_fmt=png)

**_图1-10：异或门_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBOTwAYdlOFiaGxib5LJG7yA7G69eplcxZCEVY8D92cMqKdbdyNb13PAibg/640?wx_fmt=png)

**_图1-11：异或门真值表_**  

___€7.异或非(XNOR)门___

如果在异或后面添加一个反相器，则可实现异或非(XNOR)功能，**_图1-12_**描述了二输入异或非(XNOR)功能。只有当两个输入相同时，异或非门的输出才会是高电平，所有其他输入组合得到的输出均为低电平。

1#：在使能高电平有效的电子系统中，如果在异或非门输入端监控到的两个条件相同，则可以使用异或非门输出使能系统。

2#：如果将其中一个输入保持为高电平，则输出将与另一输入的状态相同。如果将其中一个输入保持为低电平，则输出将与另一输入的状态反相。这将提供一个动态控制器件，可使数据流过或对其进行反相。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBjYwTvaKqj01I51EFke2xlnEibNdBibpbPT5kbAuGDnqhPN78vfiaVhiaNA/640?wx_fmt=png)

**_图1-12：异或非门_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBibkLXpiagic6gZzZ3J7289GuF7faCSkOZfcap57LR4fhotdhC2rUKKgtA/640?wx_fmt=png)

**_图1-13：异或非门真值表_**

小结：基本逻辑门的控制逻辑配合板级上的低电平有效或者高电平有效，灵活使用灵活搭配可以实现对电路的监控，复位，触发（中断）。