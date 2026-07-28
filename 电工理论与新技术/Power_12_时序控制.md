# Power-12：时序控制


> 原文地址: [https://mp.weixin.qq.com/s/87mYUmfEppIZH-7KSpFlag](https://mp.weixin.qq.com/s/87mYUmfEppIZH-7KSpFlag)

_![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTvnBIPibmduNQLhoTfaETtIqo5jNcFqdmtY4iapoVGsBlGaDVA0o9WdMMcmtZzWtcrjwA4n2ZjfQ6g/640?wx_fmt=png)_

_____**★★★**______Power-12---时序控制______**★★★**_____

引言：当采用FPGA进行设计时，电源时序是需要考虑的一个重要方面，通常情况下，FPGA厂商都规定了电源的时序要求，因为一个FPGA所需要的电源轨数量从3个到10个以上不等。通过遵循推荐的电源时序，可以避免在启动器件汲取过大的电流，这反过来又可以防止器件受到损坏。对一个系统中的电源时序可采用多种方法来完成，本节简述如何根据系统所要求的复杂程度来实现的电源时序解决方案。

__________________€1.方法一：将PGOOD引脚级联至使能引脚__________________

实现时序的一种基本的成本效益型方法是把一个电源的电源良好 (PG) 引脚级联至相继的下一个电源的使能 (EN) 引脚，如**_图12-1_**所示。第二个电源在PG门限得到满足(通常是在电源达到其终值的90%之时)时开始接通。这种方法的优势是成本低，但是无法精准地控制定时参数。在EN引脚上增设一个电容器会在电路级之间引入定时延迟，但是此方法在温度变化和反复电源循环期间是不可靠的，而且这种方法并不支持断电排序。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMqvFibmgUhg2JHrov6gJYAh6j3ib6Sqe3gJIwM5jV1aydmXJeLk6q2Ylicg/640?wx_fmt=png&from=appmsg)

**_图12-1：反向降压-升压转换器_**

__________________€2.方法二：采用一个复位IC来实现时序__________________  

另一种可以考虑的用于上电时序的简单方式是采用一个具有时间延迟的复位IC，复位IC以严格的门限限值来监视电源轨。一旦电源轨处于其终值的3%或更小以内，复位IC将进入由解决方案定义的等待周期，然后再执行下一个电源轨的上电操作。该等待周期/时间可以采用EEPROM编程到复位IC中，也可以利用外部电容来设定。**_图12-2_**展示了一款典型的多通道复位IC，采用复位IC来实现上电时序的优点是电源树处于受监视的状态。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMqnfrzvC2Ea0eRapN4GnDic7rDdpmlJUIl0Z9V5ITrQnZ2NmCb4GcnglA/640?wx_fmt=jpeg)

**_图12-2：采用一个多输出复位 IC 来实现上电排序_**

必须在确认每个电源轨都处在稳压范围内之后再释放下一个电源轨 , 而且无需在电源转换器上提供一个PGOOD引脚，采用复位IC的电源时序解决方案的缺点是其并不负责断电时序。

__________________€3.方法三：模拟上电/断电时序器__________________

实施上电时序会比实施断电时序更加容易，为了实现上电和断电时序，工程师推出了能够相对于上电序列进行断电序列的逆转（序列1）乃至混合（序列2）的简单模拟排序器，如**_图12-3_**所示，在上电时，所有的标记均保持在低电平，直到EN被拉至高电平为止。在EN被置为有效之后，每个标记于一个内部定时器计时结束之后顺序地变至漏极开路状态（需要上拉电阻器），断电序列与上电序列相同，但次序正好相反，即镜像断电。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMqBN078aDLJxStNRQ7wMlFzHKIV13TQyYZxCm8TCPuZKrRhH3iaWHGnYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMqdtd0qWvt6O5ZDIUpicFXwo1PhOTyNpQWVIDdWwgYlRb5TGzzSRZtYSA/640?wx_fmt=png&from=appmsg)

**_图12-3：模拟上电/断电时序器的实施方案_**

_级联多个排序器_  

可以把排序器级联在一起以支持多个电源轨，并在使能信号之间提高固定和可调的延迟时间，在**_图12-4_**中，两个排序器级联在一起以实现6个有序的电源轨。上电时，AND门确保第二个排序器在其接收到一个EN信号且C电源轨被触发之前不被触发。断电时，AND门确保第二个排序器承受EN下降沿，而不考虑Flag-3输出。OR门确保第一个排序器由EN上升沿来触发。断电时，OR门确保第一个排序器不能承受EN下降沿，直到Flag-4电源轨下降为止，这保证了上电和断电排序，但并不能监视这个时序。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMqOvmicj0kAaXpYPk6v2zGxCPibWhl8YicVzWQfaTibKCnSj39V7OAKaCqnQ/640?wx_fmt=png&from=appmsg)

**_图12-4：级联多个模拟排序器_**

_受监视的上电/断电排序_  

如**_图12-5_**所示，通过简单地在Flag X输出和PG引脚之间增设几个AND门，就能给**_图12-4_**中的电路添加受监视的排序功能。在该例中，PS2仅在PS1超过其终值的90%的情况下使能，这种方法可提供一种低成本、受监视的排序解决方案。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMqH8GvxibJBqyWkeicTlktSbk3JEaheHERjlZRJ4SD77YIbM0N1LtnfM7w/640?wx_fmt=png&from=appmsg)

**_图12-5：给基于时间的简单排序器增添受监视的排序功能_**

__________________€4.方法四：带有PMBus接口的数字系统运行状况监视器__________________  

如果系统需要最大的灵活性，那么可兼容PMBus/I2C标准的数字系统状况监视器是一种不错的解决方案。通过允许设计人员配置电源斜坡上升/下降时间、接通/关断延迟、序列相关性、甚至包括电压和电流监视，此类解决方案可为任何排序需求提供最大的控制。  

数字系统健康状况监视器配有一个图形用户界面GUI，如**_图12-6_**所示，其可用于设置上电和断电排序以及其它的系统参数。另外有些数字系统健康状况监视器还具有非易失性误差和峰值记录功能，可在发生欠压事件的场合中帮助完成系统故障分析。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTbWFstceaLHnrD7VyWLs0WIicUNAOnMCprTZlxg9qlVfeqpdmRcBqXFzLdibStAPBNJWVPlofGl8VA/640?wx_fmt=png)

**_图12-6：采用UCD90120A GUI的上电排序示例_**

__________________€5.FPGA时序要求实例__________________  

诸如Xilinx或Altera等FPGA在其产品手册中提供了推荐或要求的上电时序，这些产品手册可以很容易在线查询，另外在产品手册中还罗列了针对电源斜坡上升和关断的定时要求，推荐的断电序列通常是上电序列的倒序，**_图12-7_**演示了上电时序的一个实例。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSibib2afGFsrusA8O8vm7TMqKiaMYiafB4aVO5c9ZYS9J1tI6Tsmz6rXaUUbURwyltqpXjPfmecjmDZg/640?wx_fmt=png&from=appmsg)

**_图12-7：FPGA电源逻辑序列实例_**

__________________€6.结论__________________

可以运用多种电源排序解决方案来满足FPGA供应商所规定的要求，除了上电和断电排序之外，系统的要求可能还包括电源监视，但是针对FPGA的最优电源解决方案将取决于系统的复杂性和规格参数。最后汇总上述所讨论的电源排序解决方案为：

1#：将PGOOD引脚级联至使能引脚。

2#：采用一个复位IC来实现排序。

3#：模拟上电/断电排序器。

4#：具有PMBus接口的数字系统健康状况监视器。

（传送门：[Power Path-10：Power Good信号](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247493702&idx=1&sn=fb91b206a64c540fba7150f78fe78e86&chksm=c336a2d9f4412bcf36ed05133d8d00aa9b4215da8af7eb1c8b010c91b33941ecbfb82889d384&scene=21#wechat_redirect)）