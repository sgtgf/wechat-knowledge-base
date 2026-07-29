# PLC与这7种外围设备的连接方式，最后一种最方便！

原创 电机新视界 2023-01-13 11:13 上海

> 原文地址: [https://mp.weixin.qq.com/s/utwGJr0jEpAgsU-8OHrLRQ](https://mp.weixin.qq.com/s/utwGJr0jEpAgsU-8OHrLRQ)

**点击下方**

**关注我们**

**

**来源：网络**

![](https://mmbiz.qpic.cn/mmbiz_png/aSSfNZEW1Qx4qJRzsmtY2URqqjP7Ca4dIQToia1eNgibSwGib0SL8Y32AA7AKaD0D2ZicFWIP8mmraiane9dGsI1sUg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/IbK8vRh9Eqkw35yzmIlDhv9Lp7krGE0y1pIQCUzlgYsggCnEDIRteUs3VibNNh8zaPuibXJsqyr2rPacSrvzpDXw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

PLC常见的输入设备有按钮、行程开关、接近开关、转换开关、拨码器、各种传感器等，输出设备有继电器、接触器、电磁阀等。正确地连接输入和输出电路，是保证PLC安全可靠工作的前提。

  

**01**

**PLC与主令电器类设备的连接**

  

  

图1是与按钮、行程开关、转换开关等主令电器类输入设备的接线示意图。图中的PLC为直流汇点式输入，即所有输入点共用一个公共端COM，同时COM端内带有DC24V电源。若是分组式输入，也可参照图下图的方法进行分组连接。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aSSfNZEW1Qx4qJRzsmtY2URqqjP7Ca4dGJMPLdb7CXH5uYlgZ4eamUXBibzJQCXdvYuG4NMKw9NgtfOpZLYVScA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

▲图1 PLC与主令电器类输入设备的连接

  

**02**

**PLC与旋转编码器的连接**

  

  

旋转编码器是一种光电式旋转测量装置，它将被测的角位移直接转换成数字信号（高速脉冲信号）。因此可将旋转编码器的输出脉冲信号直接输入给PLC，利用PLC的高速计数器对其脉冲信号进行计数，以获得测量结果。不同型号的旋转编码器，其输出脉冲的相数也不同，有的旋转编码器输出A、B、Z三相脉冲，有的只有A、B相两相，最简单的只有A相。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aSSfNZEW1Qx4qJRzsmtY2URqqjP7Ca4dpwMKG53u5HC786OA2cISIMN0nibBHic2gIxLLLyGuh5g4rl7SGrj8bicQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

▲图2 旋转编码器与PLC的连接

  

如图2所示是输出两相脉冲的旋转编码器与FX系列PLC的连接示意图。编码器有4条引线，其中2条是脉冲输出线，1条是COM端线，1条是电源线。编码器的电源可以是外接电源，也可直接使用PLC的DC24V电源。电源“-”端要与编码器的COM端连接，“+ ”与编码器的电源端连接。编码器的COM端与PLC输入COM端连接，A、B两相脉冲输出线直接与PLC的输入端连接，连接时要注意PLC输入的响应时间。有的旋转编码器还有一条屏蔽线，使用时要将屏蔽线接地。

  

**03**

**PLC与传感器的连接**

  

  

传感器的种类很多，其输出方式也各不相同。当采用接近开关、光电开关等两线式传感器时，由于传感器的漏电流较大，可能出现错误的输入信号而导致PLC的误动作，此时可在PLC输入端并联旁路电阻Ｒ，如图3所示。当漏电流不足lmA时可以不考虑其影响。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aSSfNZEW1Qx4qJRzsmtY2URqqjP7Ca4d1DLNlmXk7nDejy1iaef5R0UROfA2I2Rplg3NI9bicgKIARicL5UDPfYsA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

式中：I为传感器的漏电流（mA），UOFF为PLC输入电压低电平的上限值（V），RC为PLC的输入阻抗（KΩ），RC的值根据输入点不同有差异。

**04**

**PLC与多位拨码开关的连接**

  

如果PLC控制系统中的某些数据需要经常修改，可使用多位拨码开关与PLC连接，在PLC外部进行数据设定。如图4所示，为一位拨码开关的示意图，一位拨码开关能输入一位十进制数的0～9，或一位十六进制数的0～F。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aSSfNZEW1Qx4qJRzsmtY2URqqjP7Ca4dNew4ppFWTKgzdW2qQH3bCePfic3p2WaePKFcyNVUstn3CNYzoAP1wBg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

▲图4 一位拨码开关的示意图

  

如图5所示，4位拨码开关组装在一起，把各位拨码开关的COM端连在一起，接在PLC输入侧的COM端子上。每位拨码开关的4条数据线按一定顺序接在PLC的4个输入点上。由图可见，使用拨码开关要占用许多PLC 输入点，所以不是十分必要的场合，一般不要采用这种方法。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aSSfNZEW1Qx4qJRzsmtY2URqqjP7Ca4d1mzBCVgibc5U4e1IZcjCBsybLE1EnabjxFRpJcgPzueTwkWe0aQSTibQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

▲图5 4位拨码开关与PLC的连接

  

**05**

**PLC与输出设备开关的连接**

  

  

PLC与输出设备连接时，不同组（不同公共端）的输出点，其对应输出设备（负载）的电压类型、等级可以不同，但同组（相同公共端）的输出点，其电压类型和等级应该相同。要根据输出设备电压的类型和等级来决定是否分组连接。如图6所示以FX2N为例说明PLC与输出设备的连接方法。图中接法是输出设备具有相同电源的情况，所以各组的公共端连在一起，否则要分组连接。图中只画出Y0-Y7输出点与输出设备的连接，其它输出点的连接方法相似。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aSSfNZEW1Qx4qJRzsmtY2URqqjP7Ca4dqFYwupGNRwgSBzeNzoNbMic1ZkS9uwIW9iaGWJcSLWiaJsqhbv0aledHg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

▲图6 PLC与输出设备的连接

  

**06**

**PLC与感性负载的连接**

  

  

PLC的输出端经常连接的是感性输出设备（感性负载），为了抑制感性电路断开时产生的电压使PLC内部输出元件造成损坏。因此当PLC与感性输出设备连接时，如果是直流感性负载，应在其两端并联续流二极管；如果是交流感性负载，应在其两端并联阻容吸收电路。如图6-10所示。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aSSfNZEW1Qx4qJRzsmtY2URqqjP7Ca4dUEE2HLpVnqxm69TpPGvic1ttVqzgHwFSox7CzK9Gx03drxxiaApic2Evg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

▲图7 PLC与感性输出设备的连接

  

图中，续流二极管可选用额定电流为1A、额定电压大于电源电压的3倍；电阻值可取50~120Ω，电容值可取0.1~0.47μF，电容的额定电压应大于电源的峰值电压。接线时要注意续流二极管的极性。

  

**07**

**PLC与七段LED显示器的连接**

  

PLC可直接用开关量输出与七段LED显示器的连接，但如果PLC控制的是多位LED七段显示器，所需的输出点是很多的。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aSSfNZEW1Qx4qJRzsmtY2URqqjP7Ca4dNB5DMar0XYEyQJdhgickeIr9BlvENaQUFz3GLbRKz1icS208ib6AYltzA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

▲图8 PLC与两位七段LED灯显示器的连接

  

如图8所示，电路中，采用具有锁存、译码、驱动功能的芯片CD4513驱动共阴极LED七段显示器，两只CD4513的数据输入端A～D共用PLC的4个输出端，其中A为最低位，D为最高位。LE是锁存使能输入端，在LE信号的上升沿将数据输入端输入的BCD数锁存在片内的寄存器中，并将该数译码后显示出来。如果输入的不是十进制数，显示器熄灭。LE为高电平时，显示的数不受数据输入信号的影响。显然，N个显示器占用的输出点数为P=4＋N。

  

如果PLC使用继电器输出模块，应在与CD4513相连的PLC各输出端接一下拉电阻，以避免在输出继电器的触点断开时CD4513的输入端悬空。PLC输出继电器的状态变化时，其触点可能抖动，因此应先送数据输出信号，待该信号稳定后，再用LE信号的上升沿将数据锁存进CD4513。

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0tEibvMRb5SGtflb73T1Lz2IJibuLLVvYddsbpxkKAGJL4EqjTb1nwdtp4dLCAmcdicXySick1872uA2w/640?wx_fmt=jpeg)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0sfqJ1JicA3UjnxeCgI2rnhVnib826LrxCBmrmSdvAZhshAibDgtDsDxnlJW0IMeoyFv0gfYCK3nPzDw/640?wx_fmt=png)

