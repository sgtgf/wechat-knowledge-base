# FLASH、EEPROM的区别和扩展【硬件干货】

原创 硬件笔记本 2024-04-04 11:16 四川

> 原文地址: [https://mp.weixin.qq.com/s/vb6zRZwANhJWuWZNds-lUQ](https://mp.weixin.qq.com/s/vb6zRZwANhJWuWZNds-lUQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

#### EEPROM和FLASH总体差异

部分MCU片内不带程序存储器ROM，可执行代码只能放在外面的EEPROM、FLASH(外扩)中；

单片机对于数据的处理和系统的大量数据采集，需要考虑数据的长期保存和掉电保存等问题，因此外扩EEPROM就是这系统常见的模块。外扩的EEPROM也可以用来存储一些参数，保存一些掉电后需要保存的数据等。

一、EEPROM容量小、K字节级别 ，按bit操作，可读可写，一般保存当前工作状态，多用数据存储。

例**：**电视机中用户改了音量值之后，这个值就是保存在这里的，当再次开机时，系统就会先把这个值读到然后音量设置到关机前的状态，当用户再次更改音量时，这个值会被重新改写。如果没有EEPROM，就不能保存用户更改的值了，那每次开机都是最原始的数据。  

EEPROM是为更改固化程序，如打补丁，或升级新版本固化程序准备的，如电脑主板BIOS芯片

EEPROM如接口卡中用来存放硬件设置数据 

EEPROM如特殊数据的加密存储，增加安全性

接口: I2C 、SPI

EEPROM的接口一般分为两种：四线SPI和两线I2C

  

二、FLASH容量大、M字节级别，按块擦除，页，字节读取，可读可写（多用于读）程序都存在这里。

BOOT\[1-0\]来选择启动的 flash

容量大小，数据读写速率是主要的区别。

举几个例子：都可以做CPU/ASIC芯片的启动程序，比如PHY ,SW 常用EEPROM，因为代码小吗，256K之内就够了；但是CPU的起动代码通常EEPROM搞不定，而且CPU通常还有操作系统，可以存在EEPROM（BOOT）+FPASH（system）的模式，但是一眼看去，不如把FLASH分区，把2部分东西都装下。

EEPROM通常还有就是存单板信息，厂家信息，PCB信息，MAC地址这些，配置信息这些基本的东西，通常是在工厂烧入，然后焊接在单板上，就跟你在单板打丝印一样，就是个标识。

接口：FSMC接口、SPI接口、 QSPI接口

#### EEPROM扩展

Microchip收购Atmel

![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_002_7c23add31b19.png)

上电时，可将ATAES132A配置为使用SPI或I2C接口对接至大多数微控制器。

当采用I2C模式时，不使用片选引脚，并且必须将该引脚连接到电源或接地。

当配置用于SPI模式时，按照常规会使用片选引脚

 a、EEPROM  I2C通讯

![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_003_292ba32bb45d.png)

AT24C02 是串行CMOS类型的EEPROM存储芯片，AT24C0x这个系列包含了AT24C01、AT24C02、AT24C04、AT24C08、AT24C16、AT24C512这些具体的芯片型号。

他们容量分别是：1K (128 x 8)、2K (256 x 8)、4K (512 x 8)、8K (1024 x 8)、16K (2048 x 8)  ，其中的8表示8位(bit)

b、EEPROM  SPI通讯

![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_004_b1070aab73b9.png)

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_005_58147eba07eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_006_9b53a964efd5.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_007_75db8c1036fb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_008_0b6ae33611dc.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_009_365c6cd9f8bb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_010_2da1ccbac0ae.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_011_7446ffe5e3b8.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_012_d246b538f592.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_013_3352ab08e99b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_014_0f89804cd7eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_015_f506b795c6ac.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_016_97df29bd0f50.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_017_d7c6fe8cd645.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_018_19e2f7b6262a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_019_08d092bef8a0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\FLASH_EEPROM的区别和扩展_硬件干货__images\img_020_50889e54acde.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。