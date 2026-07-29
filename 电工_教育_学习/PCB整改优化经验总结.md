# PCB整改优化经验总结

原创 电路一点通 2026-04-26 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/ektKOt9nhhAu1NcYmn4nDA](https://mp.weixin.qq.com/s/ektKOt9nhhAu1NcYmn4nDA)

> 分享了PCB设计中的整改经验，包括全局铺铜策略、EMC处理方法（如分地和连接方式）、电磁兼容度量单位的选择、EMI元器件使用、以及RS232和RS485的区别。作者强调了正确布局和高频信号电流路径对减少干扰的重要性。

一个UP的PCB整改经验：

1.  当正面全局铺铜之后出现很多小铜皮碎片的时候不如不铺铜或者单面铺铜
    
2.  RJ45网口的地和整体的地分开，两地之间通过电容相连（整板地一定要相连）
    
3.  TVS这种防浪涌高压的器件的地单独铺设，这样当高压来临的时候不会将其泄放到整体地上造成板子其他器件地不稳烧毁，但和RJ45一样需要将这个地和整体地通过电容或磁珠连接在一起。
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB整改优化经验总结_images\img_000_ad6d6bad94df.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB整改优化经验总结_images\img_001_b4a91b708a0c.png)

在电磁兼容领域，为什么总是用分贝（dB）的单位描述？

答：因为要描述的幅度和频率范围都很宽，在图形上用对数坐标更容易表示，而dB 就是用对数表示时的单位。

关于EMC需要首先了解一下EMC方面的标准，如EN55022(GB9254)，EN55024，以及简单测试原理，另外需要了解EMI元器件的使用，如电容，磁珠，差模电感，共模电感等，在PCB层面需要了解PCB的布局、层叠结构、高速布线对EMC的影响以及一些规则。还有一点就是对出现EMC问题需要掌握一些分析与解决思路。

铝电解电容器可能发生几微秒的暂时性介质击穿，因而在纹波很大或有瞬变电压的电路里，应该使用固体电容器

开关电源设计 或者布局不合理的话很容易引起EM等一系列问题。DCDC电路的输入和输出级都要加上最少两个成对出现的电容0.1uF和0.01uF.

有些 数据手册 会给出芯片的layout知道，可以学习借鉴！（以MP2307或者MP1484为例）

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB整改优化经验总结_images\img_002_d72b92566491.png)

开关电源LAYout注意事项：

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB整改优化经验总结_images\img_003_c5fb0289d08c.png)

EMI问题要从系统考虑主要是提供信号最短回流路径，减小耦合面积，抑制差模干扰。

注意高频信号电流之回流路径使其回路面积尽量小(也就是回路阻抗loop impedance尽量小)以减少辐射. 还可以用分割地层的方式以控制高频噪声的范围.

PCB设计中当一块PCB板中有多个数/模功能块时，常规做法是要将数/模地分开，原因何在？

答：将数/模地分开的原因是因为数字电路在高低电位 切换 时会在电源和地产生噪声，噪声的大小跟信号的速度及电流大小有关。如果地平面上不分割且由数字区域电路所产生的噪声较大而模拟区域的电路又非常接近，则即使数模信号不交叉， 模拟的信号依然会被地噪声干扰。也就是说数模地不分割的方式只能在模拟电路区域距产生大噪声的数字电路区域较远时使用。

电源层比地层内缩20H

USB2.0:

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB整改优化经验总结_images\img_004_8332503d3b4f.png)

电磁干扰测试（近场测试--频谱仪+近场探头）：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB整改优化经验总结_images\img_005_dab4115afe1f.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB整改优化经验总结_images\img_006_769ac0d93afb.png)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

这是电容常见的作用：

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB整改优化经验总结_images\img_007_5964b180b98a.png)

实际上的电容是以下三者的结合，ESR(R呈现电阻特性)，ESL(L呈现电感特性)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB整改优化经验总结_images\img_008_39ed59ab5a15.png)

C1是旁路电容，将电源的杂波滤除；C2是去耦电容，防止IC电压变化时候影响电源

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB整改优化经验总结_images\img_009_5102b7125354.png)

0.1uFh和0.01uF两个电容经常并联出现，相当于拓宽了电容的滤波频率特性。但有些时候需要去耦的频率特性较宽此时需要并联许多颗电容，例如 单片机 供电VDD经常用许多电容并联。

EMC扫描：利用有些频谱仪的EMC功能先根据国标设计频率范围，之后对电路各部分进行扫描找到不符合标准的地方进行改正。

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB整改优化经验总结_images\img_010_8dda09c22313.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB整改优化经验总结_images\img_011_cc72fae6b76c.png)

RS232是负逻辑，逻辑电平是±5~±15V，传输距离短，只有15米.

为改进RS232通信距离短、速率低的缺点，EIA在基于RS422的基础上制定了RS485接口标准。RS485是平衡发送和差分接收，因此具有抑制共模干扰的能力，一般在要求通信距离为几十米到上千米时，会广泛采用RS-485串行通信。

RS-485采用半双工工作方式，允许在简单的一对屏蔽双绞线上进行多点、 双向通信 ，不过任何时候只能有一点处于发送状态，因此，发送电路须由使能信号加以控制。与RS232不同的是，RS485的工作方式是差分工作方式，所谓差分工作方式，是指在一堆双绞线中，一条定义为A，一条定义为B。通常情况下，发送驱动器A、B之间的正电平在+2~+6V，是一个逻辑状态，负电平在-2~6V，是另一个逻辑状态，另有一个信号地C。

RS485引脚中式标识为 TXD(+)/A 、TXD(-)/B 、RXD(-) 、RXD(+)、GND

## **一点通推荐**

[硬件测试用例规范手册.docx](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567942&idx=2&sn=31e81f733e79a056552dc93935c47702&payreadticket=HLPyeGig6k080UzIjCq7Oxx9MOg8G1znyA5Q6H9Zjs_7B-_1pGJfj-Ov2xcuZ5kVVF0sWjc&scene=21#wechat_redirect)

[硬件经理产品生命周期管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568241&idx=2&sn=83b05e53077b753741a3ca16cd891382&payreadticket=HPiIZCIweiGkF9oozZoWJoEjI6UoTyVpk4fDmv-m-Z6E4Pp3owgqsoc8GPoYmruCvEX6zxM&scene=21#wechat_redirect)  

[硬件研发整机电子系统规划与架构设计手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567811&idx=2&sn=5950431b22dab9f80a9a9b300e80568c&payreadticket=HFjXAwUuFf6gXwOmmf611nUXFNA2IQ6ttH6ZBU90OAOvBC1f68ZuAOt7-eRh1Vw1wYXvrqE&scene=21#wechat_redirect)  

[硬件经理项目瓶颈识别与解决方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567730&idx=2&sn=2fd06f74f985191e80ed327ba9e6780a&payreadticket=HASnpri0QQzAvJ5xNF_8gwSFzCBv6dpVv-qzd4NrZQdUUFI_EL7kCy_-tlRO62MVhQBEZpA&scene=21#wechat_redirect)  

[硬件设计开发指导手册-docx文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567287&idx=2&sn=df35cb4391c24e71b35a23e3bccc67f6&scene=21#wechat_redirect)

[硬件技术评审与风险管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567767&idx=2&sn=f35b40b747beee7a5df2f9fdbc2a7d36&scene=21#wechat_redirect)

[研发经理主导电源ODM项目全流程手册（附:考核与追责机制）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567614&idx=1&sn=fe1657b3c7845fb3eef985772dce178b&scene=21#wechat_redirect)

[硬件产品开发与量产全流程管理手册（EVT/DVT/PVT/MP）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567720&idx=2&sn=638800807c6b5c7759578b4b9e1d565d&scene=21#wechat_redirect)

[电源硬件验证与测试用例编写手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567313&idx=2&sn=363dd274654c8f3590c1c860623c39da&scene=21#wechat_redirect)

[硬件开发全流程手册（.docx 文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567403&idx=2&sn=6b8511c131bf596492e9c8724be216d5&token=2048927905&lang=zh_CN&scene=21#wechat_redirect)

[开关电源技术平台与产品预研管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567264&idx=2&sn=374c4e23a2a674c254f29274615f1a30&scene=21#wechat_redirect)

[产品总监主导嵌入式智能硬件市场调研手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567165&idx=2&sn=59e9eb93222e43f47328f42ecacc624e&scene=21#wechat_redirect)

[电源产品经理项目启动里程碑资料评审管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566969&idx=2&sn=9a3beaa09656b7cac804aad7bddf0134&scene=21#wechat_redirect)

[电源开发经理设计开发流程和规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566966&idx=2&sn=4a9569ebd0a6c25adb6e3fdf1af37332&scene=21#wechat_redirect)

[硬件经理方案评审与成本控制手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566835&idx=2&sn=7f95c948eafd554bfdf921da53eb597d&token=549077461&lang=zh_CN&scene=21#wechat_redirect)

  

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️