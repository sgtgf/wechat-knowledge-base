# 调试LCD，反被调戏了…

原创 硬件笔记本 2024-06-13 07:41 四川

> 原文地址: [https://mp.weixin.qq.com/s/lCjyoMBfctuI94lYFbm20g](https://mp.weixin.qq.com/s/lCjyoMBfctuI94lYFbm20g)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

#LCD显示的一些基本概念引自网络

数字视频的基本概念源自于模拟视频。对于模拟视频我们可以这样理解：视频可以分解为若干个基本视点（像素），每个像素都有独立的色彩信息，在屏幕上依次将 这些点用电子枪按照行和列打出来，就形成了一幅完整画面，连续的打出画面，利用人眼的延迟特点就可以“显示”动态的图像了。

水平消隐：电子枪从左到右画出象素，它每次只能画一条扫描线，画下一条之前要先回到左边并做好画下一条扫描线的准备，这之间有一段时间叫做水平消隐（HBlank）。

垂直消隐：在画完全部256条扫描线之后它又回到屏幕左上角准备下一次画屏幕（帧），这之间的一段时间就是垂直消隐（VBlank）。电子枪就是在不断的走‘之’字形。

![](https://mmbiz.qpic.cn/mmbiz_png/Qof5hj3zMPdPJGhIgALoGTvicu34ibibP3jzPnD9dZLjdYo1YrzAJibzd8iaFnAW8zrPKmXeWskcyG9yz0dzIzaxwQw/640?wx_fmt=png&wxfrom=13&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_png/Qof5hj3zMPdPJGhIgALoGTvicu34ibibP3jMdPZIP4ia0z26soKVKibcuNHleQf8SWoibj3m2Mo6VlAy00gpqKVZp3nw/640?wx_fmt=png&wxfrom=13&tp=wxpic)

-   **行同步（HSYNC）**：行同步就是让电子枪控制器知道下面要开始新的一行像素
    
-   **场同步（VSYNC**： 场同步就是告诉电子枪控制器下面要开始新的画面
    
-   **数据使能（DE）**：在数据使能区是有效的色彩数据，不在使能范围内的都显示黑色。
    
-   **前肩（Front Porch）/后肩 （Back Porch）** ：行同步或场同步信号发出后，视频数据不能立即使能，要留出电子枪回扫的时间。以行扫描为例，从HSYNC结束到DE开始的区间成为行扫描的后肩（绿色区域），从DE结束到HSYNC开始称为前肩（紫色区域）。同样对于场扫面也可以由类似的定义。
    
-   **Pixel clock**：像素时脉(Pixel clock)指的是用来划分进来的影像水平线里的个别画素， Pixel clock 会将每一条水平线分成取样的样本，越高频率的 Pixel clock，每条扫瞄线会有越多的样本画素。
    
-   HFP: Horizon front porch
    
-   HBP: Horizon back porch
    
-   VFP: Vertical front porch
    
-   VBP: Vertical back porch
    
-   HDP：Horizon display period
    
-   VDP:  Vertical display period
    

HTP = HSYNC + HDP + HFP + HBP

VTR = VSYNC + VDP + VFP + VBP

f dot \_ clk = pixel clock f dot \_ clk = f v \* VTR \* HTP f v = vertical frequency  (这个是频率，平时见到的很多时候是60HZ)

pixel clock = () 制式          总扫描线       图像区域扫描线       水平总象素       图像区域水平象素       采样频率 1080I/60Hz       1125       1080                      2200             1920            74.25MHz 1080I/50Hz       1125       1080                      2640             1920            74.25MHz 720P/60Hz       750         720                       1650             1280            74.25MHz 720P/50Hz       750         720                       1980             1280            74.25MHz

带宽：视频带宽代表显示器显示能力的一个综合指标，指每秒钟所扫描的图素个数，即单位时间内每条扫描线上显示的频点数总和，在模拟视频中以MHz为单位，图1的视频模拟带宽计算如下：

Analog BandWidth=1650_750_60=74.25MHz 含义为每个时钟要传输74.25M个模拟视频数据。所以720p60 的pclk为74.25Mhz,同理1080P60的P CLOCK为148.5MHz

但是在数字视频中由于每个像素都是由3种不同的颜色来表示，每种颜色右由一定数量的比特来传输，因此通常会用bps来表示数字带宽，如果图1中使用了RGB传输，每种颜色用1个字节来输出，那么该视频的数字带宽为：

Digital BandWidth= 模拟带宽_8bit_3=1.782Gbps 含义为每秒要传输1.782G个比特数据

# #DSI Clock计算

目前主流的lcd都是使用mipi总线，涉及到的一些clock在这里整理一下：

H-total = HorizontalActive + HorizontalFrontPorch + HorizontalBackPorch + HorizontalSyncPulse + HorizontalSyncSkew

V-total = VerticalActive + VerticalFrontPorch + VerticalBackPorch + VerticalSyncPulse + VerticalSyncSkew

Total pixel = H-total \* V-total \* 60(Hz通常都是这个，当然可以变).

Bitclk = Total pixel \* bpp(byte) \*8/lane number(有几路mipi data lane).

Byteclk = bitclk/8

Dsipclk(Dsi pixel clock) = (Byteclk \* lane number)/bpp(byte) = Total pixel \* 8

Byteclk = pclk \* pixel depth / lane number

# #调试过程描述

这个是一个新平台旧屏幕的调试，我们在rk平台上已经能点亮，这个是新的项目，我们满怀信心的时候，却发现怎么都不能让这个该死的屏幕正常亮起来。

这个过程是一个非常血腥的，我们从早上10点就开始搞，到晚上12点还没有搞通，我们领导这时候突然走到我们身边，我跟他说了一句，我们先回去休息明天再搞了。我确实觉得有点累，而且继续搞可能也没有机会搞好。所以我们就下班回去了，今天早上过来，就把问题给解决了。

# #解决思路

## ##烧录BIST模式测试屏幕

BIST模式是LCD的一个测试模式，如果MIPI通信正确，我们发送BIST模式后，LCD会循环显示测试的颜色界面。这一步我们测试了，确实可以进入BIST，说明我们的MIPI通信是正常的。应该从其他部分寻找问题。

![](https://mmbiz.qpic.cn/mmbiz_png/Qof5hj3zMPdPJGhIgALoGTvicu34ibibP3jyEfOr5o07v1h2ujEict18RiaXwGne0LE8Lt1oKlehokIU8o5GoX4ibPgA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

## ##找LCD模组厂确认参数

LCD的参数肯定是模组厂的技术最专业，所以在微信群里发了下LCD的参数配置给他们看了下，马上就发现了问题所在。如下图所示：

  
![](https://mmbiz.qpic.cn/mmbiz_png/Qof5hj3zMPdPJGhIgALoGTvicu34ibibP3jDAzoqhZn2Z1Xuzib5QV6zUHGicAOctia8Ljv6jBo5tohz3RoQC8icAk98g/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

## ##排查硬件

排查硬件这一步应该在拿到样机就开始搞了，我们这个屏幕用的是另外项目的，所以理论上硬件是没有问题的。点不亮的原因应该只有一个，那就是软件有问题，俗话说，人在路上走，锅从天山来，就是这个意思。

整个调试有点惊险也有点刺激，文章中还没有谈到LCD的休眠唤醒流程，调试中也遇到一些平台性的问题。因为对平台不熟悉也成了我们都阻碍，其中非常感谢一个MTK的大牛，虽然最终不是他的思路解决问题，但是在过程中给我们提了非常有效的建议。完…

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhGrewiaCwmg735nibibVzn1QsKpeYOicUkPfLytqsdldkb0SViahbsMJWXTK1tnrSLUr0GrXO8cFtv2IA/640?wx_fmt=png&from=appmsg)

****作者：写代码的篮球球痴****  

****来源：嵌入式Linux****

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。