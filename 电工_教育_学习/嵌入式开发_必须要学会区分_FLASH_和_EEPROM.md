# 嵌入式开发，必须要学会区分 FLASH 和 EEPROM

原创 硬件笔记本 2024-01-11 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/qn\_2MUgB9PpMunKu11ImlA](https://mp.weixin.qq.com/s/qn_2MUgB9PpMunKu11ImlA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  
存储器分为两大类：RAM和ROM，本文主要讨论ROM。ROM最初不能编程，出厂什么内容就永远什么内容，不灵活。

  

后来出现了PROM，可以自己写入一次，要是写错了，只能换一片，自认倒霉。

  

人类文明不断进步，终于出现了可多次擦除写入的EPROM，每次擦除要把芯片拿到紫外线上照一下，想一下你往单片机上下了一个程序之后发现有个地方需要加一句话，

  

为此你要把单片机放紫外灯下照半小时，然后才能再下一次，这么折腾一天也改不了几次。

  

历史的车轮不断前进，伟大的EEPROM出现了，拯救了一大批程序员，终于可以随意的修改ROM中的内容了。

  

EEPROM的全称是“电可擦除可编程只读存储器”，即Electrically Erasable Programmable Read-Only Memory。

  

是相对于紫外擦除的ROM来讲的。但是今天已经存在多种EEPROM的变种，变成了一类存储器的统称。

  

  

**狭义的EEPROM**

#####   

##### 这种ROM的特点是可以随机访问和修改任何一个字节，可以往每个bit中写入0或者1。这是最传统的一种EEPROM，掉电后数据不丢失，可以保存100年，可以擦写100w次。

#####   

##### 具有较高的可靠性，但是电路复杂/成本也高。因此目前的EEPROM都是几十千字节到几百千字节的，绝少有超过512K的。

#####   

##### 例如我们常见的24C02：

![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_002_256fa0ba26b2.jpg)

  

  

**广义的EEPROM**

#####   

##### FLASH属于广义的EEPROM，因为它也是电擦除的ROM。但是为了区别于一般的按字节为单位的擦写的EEPROM，我们都叫它FLASH。

#####   

##### FLASH做的改进就是擦除时不再以字节为单位，而是以块为单位，一次简化了电路，数据密度更高，降低了成本。上 MB容量的ROM一般都是FLASH。

#####   

##### 如 W25Q128JVSIQ：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_003_a4a2866add02.jpg)

  

FLASH 分为 NOR-FLASH 和 NAND-FLASH

  

**NOR-FLASH：**

  

NOR-FLASH数据线和地址线分开，可以实现RAM一样的随机寻址功能，可以读取任何一个字节。但是擦除仍要按块来擦。依然W25Q128JVSIQ

  

**NAND-FLASH：**

  

NAND-FLASH同样是按块擦除，但是数据线和地址线复用，不能利用地址线随机寻址。读取只能按页来读取。（NAND-FLASH按块来擦除，按页来读，NOR-FLASH没有页）

  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_004_65c73f7d8ad3.jpg)

  

由于NAND-FLASH引脚上复用，因此读取速度比NOR-FLASH慢一点，但是擦除和写入速度比NOR-FLASH快很多。

  

NAND-FLASH内部电路更简单，因此数据密度大，体积小，成本也低。因此大容量的FLASH都是NAND型的。小容量的2～12M的FLASH多是NOR型的。

  

使用寿命上，NOR-FLASH的擦除次数是nand的数倍。而且NAND-FLASH可以标记坏块，从而使软件跳过坏块。NOR-FLASH 一旦损坏便无法再用。

  

因为NOR-FLASH可以进行字节寻址，所以程序可以在NOR-FLASH中运行。嵌入式系统多用一个小容量的NOR-FLASH存储引导代码，用一个大容量的NAND-FLASH存放文件系统和内核。  

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_005_2e84b7ba26c6.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_006_51d069a6484e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_007_5fb296583be4.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_008_1f30148044c0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_009_c5bc86d0867d.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_010_b38438d4de46.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_011_1d54e9fe0aef.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_012_9bb0105b1e46.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_013_de88c48250d0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_014_3b83df2d253b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_015_db521919e8d9.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_016_aea384ea417e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_017_f4924e7a240a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_018_a58db91dbb3b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_019_f0edc68b0c53.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\嵌入式开发_必须要学会区分_FLASH_和_EEPROM_images\img_020_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。