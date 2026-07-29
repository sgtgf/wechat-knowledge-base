# 图腾柱驱动电路-MOS和三极管

原创 电路一点通 2025-02-07 14:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/tXoMskWOoL0VMEDuL-m\_2g](https://mp.weixin.qq.com/s/tXoMskWOoL0VMEDuL-m_2g)

最近对MOS管的驱动设计进行相关思考和仿真，这里将一些感悟写出来，仅供记录。

  
使用分立器件搭建MOS驱动的话，一般会使用互补的三极管搭建图腾柱电路，但是为什么会是图腾柱的结构不是半桥的结构呢？又为什么是要用三极管呢？用MOS管不可以吗？因为这些思考，便开始了一些仿真和实验。

  
首先，下图是经典的图腾柱结构，这个电路是可以正常驱动MOS的。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\图腾柱驱动电路_MOS和三极管_images\img_000_5d006553ad38.png)  
但是，这个电路存在一些不足之处，比如输出的电压总是不能到电源轨，会差一个VBE的结压降（个人认为是VBE，有些文章写的是CE结压降，但是我认为这里是电压跟随器形式，输出跟随B极电压），大约是0.7V左右，虽然存在这个问题，但是拿来驱动MOS是没问题的，因为MOS也是有一个开启电压的，但是用着总是不太舒服。同时注意这里的三极管一般选取大电流、高放大倍数的，最好是开关三极管。  
由于输出受限，所以就引发了我的思考，下面是使用MOS搭建的类似电路。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\图腾柱驱动电路_MOS和三极管_images\img_001_1b29b6d54804.png)  
首先要明确的是，上面电路基本不能正常工作。因为这样也基本是电压跟随的形式，但是输出会与输入有一个MOS开启电压的差距，显然比三极管大多了。由此导致后级的功率MOS更不能正常工作了。  
然后又搭建了下面两种半桥结构的电路。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\图腾柱驱动电路_MOS和三极管_images\img_002_bba1ead268e4.png)  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\图腾柱驱动电路_MOS和三极管_images\img_003_c8584a6da367.png)

上面两种电路都勉强可以工作，但是会存在驱动管上下直通的问题，导致驱动管有直通电流会引起较大的损耗，解决的办法最好是加入死区控制。但是死区电路较为复杂且难以使用分立元件很好匹配，所以经过试验之后，引出了上面使用MOS搭建的电路，上面将MOS驱动的充放电电路使用二极管区分开来，并且使用RC对MOS的开启信号进行简单延时。效果仿真还是基本可以的，但是在输入频率变化的时候可能会影响效果，比如在LLC电路中不一定能应用。这种MOS半桥电路在有些驱动芯片的数据手册上面见到过，可能使用集成电路工艺可以实现更好的死区匹配以实现这种方式。  
至于上面的三极管半桥方案，因为三极管是电流驱动器件，可以用基极电流限制最大电流，也可以利用电阻或电感减缓直通的损耗，但是不建议这样用，没太大必要，驱动MOS的话直接用三极管搭建图腾柱电路就可以实现很好的效果了。  
至于死区电路，有下面的仿真。本来我想把下面电路应用，但是发现MOS的电平匹配也比较麻烦，所以就以失败暂时告终了。后面再想办法处理吧。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\图腾柱驱动电路_MOS和三极管_images\img_004_1085c056bc1a.png)  
上面电路核心就是利用与门将原始信号和经过延时后的信号求与逻辑，可以延迟上升沿信号。同样，可以使用或门来对下降沿信号进行延迟。将设计一个小板子用来实现单独PWM信号的死区生成。

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\图腾柱驱动电路_MOS和三极管_images\img_005_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

****推荐**  ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\图腾柱驱动电路_MOS和三极管_images\img_007_ead434f24ea4.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\图腾柱驱动电路_MOS和三极管_images\img_006_ead434f24ea4.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\图腾柱驱动电路_MOS和三极管_images\img_008_ead434f24ea4.png)**![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\图腾柱驱动电路_MOS和三极管_images\img_009_ead434f24ea4.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\图腾柱驱动电路_MOS和三极管_images\img_010_ead434f24ea4.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)