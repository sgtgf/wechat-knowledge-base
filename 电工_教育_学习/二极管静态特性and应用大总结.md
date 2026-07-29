# 二极管静态特性and应用大总结

原创 电路一点通 2025-03-31 11:36 广东

> 原文地址: [https://mp.weixin.qq.com/s/r68h5AI40AnxS60HGKmIyQ](https://mp.weixin.qq.com/s/r68h5AI40AnxS60HGKmIyQ)

二极管是最简单的双极性半导体元件，最初我们对它的认识仅停留在单向导电性这一层面，也就是它的通断特性，即分析它在电路中的作用，最重要的是搞清楚二极管有没有导通，当阳极和阴极之间加上0.7V以上电压时，就会导通，否则，就不导通。实际二极管的用途是非常丰富的，当然要用好它，所需要学习的知识也是不少的。

-   [![图片](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_001_e5d36ee7bbf0.jpg)

简化模型

假设门限电压为0.7V，电压反向偏置和不超过0.7时为短路，正向偏置且超过0.7V时等效为0.7V电压源。对于简化模型我们很好理解，也可以解决大多数问题，但是制动二极管的实际伏安特性曲线是什么样子的也是有必要的。

复杂模型

实际二极管的伏安特性曲线更接近表达式：Ix=Is\[exp(Vx/Vt)-1\]

Ix为流过二极管的电流Vx为二极管两端的电压Is为常数，量级约为1e-16A，表示反向饱和电流，也称为漏电流，因为当Vx为负时，Ix约为-Is。Vt为常数，约为26mV，表示热电压复杂模型的表达式是指数形式，而且有1e-16怎么小的常数，很难理解，为了能在脑海里对这个模型有个概念，我归纳了以下几点：

当Vx>4Vt=104mV时，表达式可以化简为Ix=Is\*exp(Vx/Vt)；当 Vx=778mV 时， Ix = 1mA；Vx每增加26mV，Ix扩大e倍约2.7X，Vx每增加60mV，Ix扩大10X；典型的正向偏置电压在700mv-800mV之间，超过这个值就烧了；当二极管从关到开的临近状态时，电压为门限电压，但电流约为零。我们有ADS建立一个仿真模型，加深一下理解，可以看出当二极管两端电压大于0.78V时，导通电流迅速增加，理论上没增大60mV，电流扩大10倍。

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_002_5a8358cecf55.jpg)ADS DCsimulation

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_003_81da8137c1e1.jpg)伏安特性仿真结果

二极管的应用1：稳压电源

假如我们手上有一个3V电压，有一个1.4V的蓝牙设备需要供电，那么我们就可以用两个二极管串联组成一个1.4V稳压源。

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_004_a9829a115fc6.jpg)

一般我们想到的是用电阻分压同样可以得到1.4V的电压呀，如下图，但是相比电阻分压电路，使用二极管会有有两点好处：①、压降比较稳定，当3V电源有波动时，供给用电设备的电压始终是1.4V；②、当用电设备输入阻抗变化时，供给用电设备的电压始终是1.4V。

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_005_4adcfb253231.jpg)

二极管的应用2：限幅

电脑发出蓝牙信号，命令打印机打印，当打印机离电脑远时，接收天线接收到的信号较弱，当打印机离电脑近时，接收天线接收到的信号较强，为了能让打印机不论距离电脑远近都能工作，我们需要在信号强的时候进行限幅，因为如果信号强度太大，会影响后面整个链路的性能。我们可以建立一个DC仿真电路：

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_006_6b63842b083d.jpg)

从仿真结果看，无论输入电压Vx怎么变化，二极管管和1V直流电源配合可以使输出电压在正负1.5V之间。

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_007_26c1e8735916.jpg)

同样，可以建立一个时域仿真也就是Transient仿真，来看一下时域波形：

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_008_36365947cb2a.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_009_e69b4f0f6ee6.jpg)

同样可以看到输入波形为峰值3V的正弦波，输出电压始终在正负1.5V之间。

二极管的应用3：半波整流

电源适配器、充电器等将220V交流电转换成5V直流电供手机充电。一般会从220V通过变压器降到20V交流电，再通过整流电路将20V交流电转换成5V直流。

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_010_53ac3e17ea5f.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_011_08c2925f7a6b.jpg)

当然，经过二极管后，反向的电流被截止，只保留了正向的电流流过，输出电压只有正方向，但是显然现在得到的输出电压不是直流，还需要通过电容进行滤波，完整的电路为下图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_012_86bcee44d20d.jpg)

原理图中电阻的作用是保护二极管不被烧掉，电容的作用是滤波，0.7V直流源的作用是抵消二极管的管压降，也就是正向导通压降。

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_013_2461d7e6f3a0.jpg)

从图中可以看出20V的交流电变成了20V直流电。

二极管的应用4：全波整流

全波整流也叫整流桥

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_014_6e66d56a61f4.jpg)

仿真电路图与仿真结果如下，同样完整的电路需要电容滤波，这里就不再重复了。

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_015_35f2e2a68ac4.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_016_dcb117fa6bc1.jpg)

二极管的应用5：电压倍增电路

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_017_11be592ed9fb.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_018_8613e05a162b.jpg)

这个原理稍微复杂了一点，需要对电容充放电和二极管更深刻的理解，这个后面再另外详细讲解。

二极管的应用6：信号的幅度平移

仿真原理图与仿真结果如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_019_0f9ee5ca1587.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_020_6690335ac119.jpg)

输出为幅度为1V的正弦波，通过一个二极管，可以使整个电压下降0.7V，相当于波形向下平移了0.7V。

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

-   **[TL431恒流源电路对于电流有什么要求吗？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542624&idx=2&sn=6fcc146173952eb1286e5b6f222d8c01&scene=21#wechat_redirect)**
    
-   **[反激电源设计与选型-（中小功率隔离型）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542600&idx=2&sn=92fee1e66f451ad0e172003cd4507dd0&scene=21#wechat_redirect)**
    
-   **[三合一“防反接、防过压、缓启动电路”](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542596&idx=1&sn=55b487630d07cc926faaffabc242b55d&scene=21#wechat_redirect)**
    

-   [汽车发动机10大热门技术，电车全面取代内燃机？](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247509821&idx=1&sn=edd81ea701bcb062a53f6b49390fc796&scene=21#wechat_redirect)  
    
-   [宝马和奔驰汽车维修故障率(通病)哪个更高?-原厂配件代工品牌汇总](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247510017&idx=1&sn=c0518cec0b69eaf8c3adb1a5651ab617&scene=21#wechat_redirect)
    
-   [500项汽车维修技能一学就会，轻松上手](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247509522&idx=1&sn=dadbedb7d140655d2fb25c52b5f03a7e&scene=21#wechat_redirect)
    

[**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\二极管静态特性and应用大总结_images\img_021_b46e8bcc08e0.jpg)**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**