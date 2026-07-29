# EEPROM 和 flash 这样讲，早就懂了！

原创 硬件笔记本 2023-03-25 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/MvTJZrPTkNgetrnnMfvpWg](https://mp.weixin.qq.com/s/MvTJZrPTkNgetrnnMfvpWg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

前几天看到群里在讨论存储器，有些人一直搞不懂，今天给大家分享一篇文章总结一下。

存储器分为两大类：**RAM** 和 **ROM**。

![](D:\电脑文件\公众号知识库\电工_教育_学习\EEPROM_和_flash_这样讲_早就懂了__images\img_002_d94e894cc48b.png)

**RAM** 就不讲了，今天主要讨论 **ROM**。

rom最初不能编程，出厂什么内容就永远什么内容，不灵活。后来出现了prom，可以自己写入一次，要是写错了，只能换一片，自认倒霉。人类文明不断进步，终于出现了可多次擦除写入的EPROM，每次擦除要把芯片拿到紫外线上照一下，想一下你往单片机上下了一个程序之后发现有个地方需要加一句话，为此你要把单片机放紫外灯下照半小时，然后才能再下一次，这么折腾一天也改不了几次。历史的车轮不断前进，伟大的EEPROM出现了，拯救了一大批程序员，终于可以随意的修改rom中的内容了。

EEPROM的全称是“电可擦除可编程只读存储器”，即Electrically Erasable Programmable Read-Only Memory。是相对于紫外擦除的rom来讲的。但是今天已经存在多种EEPROM的变种，变成了一类存储器的统称。

  

**狭义的EEPROM：**

这种rom的特点是可以随机访问和修改任何一个字节，可以往每个bit中写入0或者1。这是最传统的一种EEPROM，掉电后数据不丢失，可以保存100年，可以擦写100w次。具有较高的可靠性，但是电路复杂/成本也高。因此目前的EEPROM都是几十千字节到几百千字节的，绝少有超过512K的。

  

**flash:**

flash属于广义的EEPROM，因为它也是电擦除的rom。但是为了区别于一般的按字节为单位的擦写的EEPROM，我们都叫它flash。

flash做的改进就是擦除时不再以字节为单位，而是以块为单位，一次简化了电路，数据密度更高，降低了成本。

  

**flash** **分为** **nor flash** **和** **nand flash****：**

**nor flash** 数据线和地址线分开，可以实现ram一样的随机寻址功能，可以读取任何一个字节。但是擦除仍要按块来擦。

**nand flash** 同样是按块擦除，但是数据线和地址线复用，不能利用地址线随机寻址。读取只能按页来读取。（nandflash按块来擦除，按页来读，norflash没有页）

由于nandflash引脚上复用，因此读取速度比nor flash慢一点，但是擦除和写入速度比nor flash快很多。nand flash内部电路更简单，因此数据密度大，体积小，成本也低。因此大容量的flash都是nand型的。小容量的2～12M的flash多是nor型的。

使用寿命上，nand flash的擦除次数是nor的数倍。而且nand flash可以标记坏块，从而使软件跳过坏块。nor flash 一旦损坏便无法再用。

因为nor flash可以进行字节寻址，所以程序可以在nor flash中运行。嵌入式系统多用一个小容量的nor flash存储引导代码，用一个大容量的nand flash存放文件系统和内核。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。