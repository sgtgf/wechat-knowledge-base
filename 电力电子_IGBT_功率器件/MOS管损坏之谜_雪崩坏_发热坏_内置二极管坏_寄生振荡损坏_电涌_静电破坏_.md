# MOS管损坏之谜：雪崩坏？发热坏？内置二极管坏？寄生振荡损坏？电涌、静电破坏？

原创 硬件笔记本 2022-06-17 07:26 四川

> 原文地址: [https://mp.weixin.qq.com/s/EYxHKdnQIFgkrGDqbHhdbA](https://mp.weixin.qq.com/s/EYxHKdnQIFgkrGDqbHhdbA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")

  

  

****第一种：雪崩破坏****

  

如果在漏极-源极间外加超出器件额定VDSS的电涌电压，而且达到击穿电压V(BR)DSS （根据击穿电流其值不同），并超出一定的能量后就发生破坏的现象。

在介质负载的开关运行断开时产生的回扫电压，或者由漏磁电感产生的尖峰电压超出功率MOSFET的漏极额定耐压并进入击穿区而导致破坏的模式会引起雪崩破坏。

典型电路：

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmcFMm7rnqA1QgXD95gkx9FSrHWXjyupnfR5dV8P5icAE4AaORLNrEAZRWfXHDcPVvDFEiakdE6iaXhqg/640?wx_fmt=jpeg)

  

**第二种：器件发热损坏**

  

由超出安全区域引起发热而导致的。发热的原因分为直流功率和瞬态功率两种。

  

直流功率原因：外加直流功率而导致的损耗引起的发热

●导通电阻RDS(on)损耗（高温时RDS(on)增大，导致一定电流下，功耗增加）

●由漏电流IDSS引起的损耗（和其他损耗相比极小）

瞬态功率原因：外加单触发脉冲

●负载短路

●开关损耗（接通、断开） \*（与温度和工作频率是相关的）

●内置二极管的trr损耗（上下桥臂短路损耗）（与温度和工作频率是相关的）

器件正常运行时不发生的负载短路等引起的过电流，造成瞬时局部发热而导致破坏。另外，由于热量不相配或开关频率太高使芯片不能正常散热时，持续的发热使温度超出沟道温度导致热击穿的破坏。

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmcFMm7rnqA1QgXD95gkx9FSQjS0TOibWOmz9pCiaQ7nHm0HefGcVnj2ZoByWqdP82OJEEibazlTfqCibQ/640?wx_fmt=jpeg)![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmcFMm7rnqA1QgXD95gkx9FSBFKichIOuLdnYEXoIXspictJXfic6ibbuQ9TIUmWicZqEQyCyw9B01bOFFA/640?wx_fmt=jpeg)

  

**第三种：内置二极管破坏**

  

在DS端间构成的寄生二极管运行时，由于在Flyback时功率MOSFET的寄生双极晶体管运行，

导致此二极管破坏的模式。

  
![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmcFMm7rnqA1QgXD95gkx9FSIhE2EMQ7C5eGrCJomF3NdLK4IUmvhciakPyr7e1fQ9mxh2jeBVFIluQ/640?wx_fmt=jpeg)

  

**第四种：由寄生振荡导致的破坏**

  

此破坏方式在并联时尤其容易发生

在并联功率MOS FET时未插入栅极电阻而直接连接时发生的栅极寄生振荡。高速反复接通、断开漏极-源极电压时，在由栅极-漏极电容Cgd(Crss)和栅极引脚电感Lg形成的谐振电路上发生此寄生振荡。当谐振条件(ωL=1/ωC)成立时，在栅极-源极间外加远远大于驱动电压Vgs(in)的振动电压，由于超出栅极-源极间额定电压导致栅极破坏，或者接通、断开漏极-源极间电压时的振动电压通过栅极-漏极电容Cgd和Vgs波形重叠导致正向反馈，因此可能会由于误动作引起振荡破坏。

![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmcFMm7rnqA1QgXD95gkx9FSEtFzKyYJqZgiaQyRicsI8T7GvldYPNpj7woL4ZuLqZ6YtkwiaqIP27ouQ/640?wx_fmt=jpeg)

  

**第五种：栅极电涌、静电破坏**

主要有因在栅极和源极之间如果存在电压浪涌和静电而引起的破坏，即栅极过电压破坏和由上电状态中静电在GS两端（包括安装和和测定设备的带电）而导致的栅极破坏![](https://mmbiz.qpic.cn/mmbiz_jpg/3nJjpKuusmcFMm7rnqA1QgXD95gkx9FSDichN0qfPRNUt4VTo2ia4SkyQEI8xbluKoyD3BOChjzzkSAoF4liaNxTw/640?wx_fmt=jpeg)

  

文章来源网络，如有侵权，请联系删除。  

  

**后台回复“**加群**”，管理员拉你入技术交流群。**