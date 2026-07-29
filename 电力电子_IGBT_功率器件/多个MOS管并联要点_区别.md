# 多个MOS管并联要点、区别

原创 电路一点通 2024-07-04 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/8UFMdQYLmIP-uq5b8xLPYA](https://mp.weixin.qq.com/s/8UFMdQYLmIP-uq5b8xLPYA)

功率MOS管具有优异的热稳定性，不会发生热失控，因此 并联多个MOSFET是一种很常见的使用方法，它可以减少传导损耗和分散功耗，以便限制最大结温。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\多个MOS管并联要点_区别_images\img_000_f6ee1c05200a.png)

**1.功率MOS并联要点：**

在高速下空中高功率下，进行并行连接时，最主要的是需要避免电流集中，以及过电流，能够确保在所有可能的负载条件下，很好地平衡、均匀所有流过器件的电流。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\多个MOS管并联要点_区别_images\img_001_67408abcd5d1.png)

**2.功率MOS并联时的静态/动态动作**

静态：

Rds（on）较低的MOS管能够导通更多的电流。

当它升温时，Rds（on）增加，部分电流将转移到其它MOS管上，电流共享取决于每个MOS的相对的电阻值。

注意：a.每个MOS的电流与其接通电阻的Rds（on）的倒数成正比关系；

b.热耦合良好的平行放置MOS的结温度大致相同。

动态：

动态运行时，阈值电压Vgsth最低的MOS管首先打开，最后关闭。这种MOS管一般会占据更多的开关损耗，并且在开关转换过程中，承担了更高的电应力。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\多个MOS管并联要点_区别_images\img_002_b716553b7df6.png)

3.开启、关断阈值保持一致

由于功率MOS切换时间会有所差异，因此在通电和断电期间容易出现不平衡，而在开关时间上的变化很大程度是由门-源阈值电压Vth的值。即：Vth的值越小，通电时间越快。相反，断电期间，Vth的值越大，截止的速度就越快。

此外，当电流集中在一个具有较小Vth的功率MOS上时，通电与断电的过程中会出现电流不平衡，这会让设备功率损耗过大，导致故障。因此，最好使用相近Vth值以及开关时间的变化，在每个MOS之间插入一个电阻，可以确保稳定运行以及防止异常振荡。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\多个MOS管并联要点_区别_images\img_003_f5a49c9bd0e1.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\多个MOS管并联要点_区别_images\img_004_4349ba3c9d73.png)

**4\. 其他要点：**

A.每个MOS需要栅极电阻，且阻值在几Ω到几十Ω,防止电流共享和振荡；

B.MOS管具备良好的热耦合，确保电流和热平衡；

C.避免在GS之间添加外部器件，可以适当调整电阻值，优化开关速度。

**问题来了，那并联多个 双极晶体管和MOS管有什么主要区别吗？**

双极晶体管由于是基极电流驱动，因此电流平衡更容易被基极-发射极电压Vbe的波动所破坏，这样会导致并联连接均衡会变得困难。

而功率MOS管，由于是电压驱动，因此只需要向并联连接的每个MOS管提供驱动电压就可以保持相当不错的均衡性，使并联更加容易，因此MOS管相比双极晶体管，在多个并联的场景中会更有优势。  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\多个MOS管并联要点_区别_images\img_005_391eca0a9772.png)

**推荐资料：  
**

-   [**电源设计经验50谈（99页），少走弯路**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523933&idx=2&sn=0ad0a9973b1e85a283137e9008a18821&chksm=fcef7d3fcb98f4292cb94b0f035dee4ffe5de2bc9fbcd1253ff5d19e6a45164fb675714ee92c&scene=21#wechat_redirect)
    
-   [**电子工程师自学速成-提高篇（512页 高清pdf文档）**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523884&idx=2&sn=715054663619a1041c54f27fe0a20b4c&chksm=fcef7d4ecb98f4588a1cbdd416903beb946a126cf1d2d278c36da3b2ef364105e85958a68553&scene=21#wechat_redirect)[电气识图入门基础.ppt 教材-143页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456243099&idx=2&sn=c535fde6f97f62968d10788df7ddc0ed&chksm=87c1095db0b6804b0e9310fc44c431d2dbc79facfc0420f5743a3cc279952f9f225547908dd1&scene=21#wechat_redirect)
    
-   [电子元器件识别与检测：全彩图文档资料（246页）](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456242922&idx=2&sn=5243ed16ff1b50d76ebe5d3175bd7489&chksm=87c1082cb0b6813ae9df99656fe6fa8a55293720cc953d91c02bbf308930485832f87136c05c&scene=21#wechat_redirect)
    
-   [**汽车内外构造图、示意图详解，学车、修车、造车无难事**](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247485910&idx=1&sn=07c35a23a01645daa969c774ebc78c07&chksm=c33e716af449f87c2ff768c88a937f907dcddfe781ac3abfff48e01f75b00cee724c8c35a47f&scene=21#wechat_redirect)
    
-   [**汽车机械式变速器设计（61页）ppt-资料**](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247485996&idx=2&sn=521c6edf2600e8d3607c4352dd6ab019&chksm=c33e7290f449fb862e5806fc0aa1b61f514428a2a22a1ea6c48871af9b47ef123ca2c376689d&scene=21#wechat_redirect)