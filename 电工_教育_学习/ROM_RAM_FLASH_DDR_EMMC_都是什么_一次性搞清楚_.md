# ROM、RAM、FLASH、DDR、EMMC 都是什么？一次性搞清楚！

原创 硬件笔记本 2023-06-24 19:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/Sht3\_iv5D9GgOiTvtmO7rA](https://mp.weixin.qq.com/s/Sht3_iv5D9GgOiTvtmO7rA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcm0XB5XglyLk8EDA56X8gUbGu91A7XoNBEKSuXU1mVJevflovFTG9fj8ySK7ib8AticUyFyib7hWNNSA/640?wx_fmt=png&wxfrom=13&tp=wxpic)

  

## 简单解释

**一、ROM**：**只读存储器**，内容写入后就不能更改了，制造成本比较低，常用于电脑中的开机启动如启动光盘bios，在系统装好的电脑上时，计算机将C盘目录下的操作系统文件读取至内存，然后通过cpu调用各种配件进行工作这时系统存放存储器为RAM。

PROM：可编程程序只读存储器，但是只可以编写一次。

EPROM：可抹除可编程只读存储器，可重复使用。

EEPROM：电子式可抹除可编程只读存储器，类似于EPROM但是摸除的方式是使用高电场完成。

  

**二、RAM**：**随机存取存储器，也叫主存**，是与CPU直接交换数据的内部存储器，可以随时读写，**而且速度快，通常作为操作系统或其他正在运行程序的临时数据存储介质**。RAM工作时可以随时从任何一个指定地址写入或读出信息。他与ROM的最大区别是数据的**易失性**，断电丢失。RAM在计算机和数字系统中用来暂时存储程序、数据和中间结果。手机和电脑的运行内存都是使用ram为存储空间，内存条的作用是增加运行ram空间。

SRAM：静态随机存储器，SRAM存放的信息在不停电的情况下能长时间保留，状态稳定，不需外加刷新电路，从而简化了外部电路设计。常作为Cache。

DRAM：动态随机存储器，DRAM与SRAM相比具有集成度高、功耗低、价格便宜等优点，所以在大容量存储器中普遍采用。DRAM的缺点是需要刷新逻辑电路，且刷新操作时不能进行正常读，写操作。常作为主存储器。

SDRAM：同步动态随机存取内存。就是DDR，被分为DDR1、DDR2、DDR3。

  

**三、FLASH**：**是一种非易失性内存，闪存的物理特性与常见的内存有根本性的差异：目前各类 DDR 、 SDRAM 或者 RDRAM 都属于挥发性内存，只要停止电流供应内存中的数据便无法保持，因此每次电脑开机都需要把数据重新载入内存；闪存在没有电流供应的条件下也能够长久地保持数据，其存储特性相当于硬盘，这项特性正是闪存得以成为各类便携型数字设备的存储介质的基础。**Flash分为nor flash和nand flash。

NOR FLASH：它的特点就是可以在芯片内执行，应用程序可以直接在闪存中运行，不必把代码读入系统RAM。在1~16M下的小容量有很高的的成本效益，但是很低的写入和擦除 速度大大影响了它的性能。他的读取和我们常见的SDRAM的读取是一样。

NAND FLASH：Nand-flash存储器具有容量较大，改写速度快等优点，适用于大量数据的存储，如嵌入式产品中包括数码相机、MP3随身听记忆卡、体积小巧的U盘等。读取是以一次读取一块的形式来进行的，通常是一次读取512个字节。用户不能直接运行NAND Flash上的代码，因此好多使用NAND Flash还作上了一块小的NOR Flash来运行启动代码。  
  

**四、eMMC:**  eMMC 存储器 eMMC (Embedded Multi Media Card) 为MMC协会所订立的，**eMMC 相当于 NandFlash+主控IC** ，对外的接口协议与SD、TF卡一样，主要是针对手机或平板电脑等产品的内嵌式存储器标准规格。**eMMC的一个明显优势是在封装中集成了一个控制器，它提供标准接口并管理闪存，使得手机厂商就能专注于产品开发的其它部分，并缩短向市场推出产品的时间。**这些特点对于希望通过缩小光刻尺寸和降低成本的NAND供应商来说，同样的重要。  
    eMMC由一个嵌入式存储解决方案组成，带有MMC（多媒体卡）接口、快闪存储器设备（Nand Flash）及主控制器，所有都在一个小型的BGA 封装。接口速度高达每秒52MBytes，eMMC具有快速、可升级的性能。同时其接口电压可以是 1.8v 或者是 3.3v。

  

    现在很多智能电视已经逐步抛弃Nor或Nand，使用更为先进的eMMC芯片，然而普通编程器无法读写eMMC芯片，新开发的可支持eMMC芯片烧写的编程器性价比高，还能支持Nor、Nand芯片，支持全面、功能强大。

原文链接：https://www.cnblogs.com/roger-yu/p/16655061.html

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群