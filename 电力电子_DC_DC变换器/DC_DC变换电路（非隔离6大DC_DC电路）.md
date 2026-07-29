# DC/DC变换电路（非隔离6大DC/DC电路）

原创 沈聪工作室 电路一点通 2025-06-10 12:19 广东

> 原文地址: [https://mp.weixin.qq.com/s/Coi4Y8iXzhZEW1nqMCSpZQ](https://mp.weixin.qq.com/s/Coi4Y8iXzhZEW1nqMCSpZQ)

1.  Buck电路电路图和基本原理
    

Buck电路主要是利用斩波的原理来控制直流源的输出电压。如图1所示一个负载R通过开关S连接电源。当S开始周期性的断开和闭合的时候，则负载R就会周期的接通和断开。如果负载R是一个灯泡，则灯泡会闪烁。当S的频率逐步的升高，则灯泡的闪烁会以灯泡的亮度来显示（人眼已经无法看清其闪烁）。因此，对于一定输入电压的斩波电路，其输出电压平均值是通过周期性断开和闭合电路中的开关进行控制的。

  

-   [![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_000_e62cfc4151c6.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_001_45a9a2555deb.jpg)

图1： 斩波原理

图中D为电路的占空比，即表示开关S闭合的时间与闭合和开断时间总和的比值。通过调节D可以调节电路的输出电压。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_002_9cac42b00c97.jpg)

图2：Buck电路原理

图2显示了Buck电路的工作过程，整个工作分成两个部分。第一个部分为S闭合状态，在此状态下，电感存储能量并且电源给负载进行供电。第二部分是当S断开后，由于电感电流不能突变，因此电感电流通过续流二极管继续给负载进行供电。因此负载R的输出电压为Vo=DVi。

1.  Boost电路的电路图和基本工作原理
    

Buck电路是通过对电压源进行周期性的开断S来实现输出电压的降压。对于一个电路来说，如果不考虑其自身的损耗，则其输入的功率等于其输出的功率。直流系统功率等于电流乘以电压，我们想得到高的电压，则需要降低其电流则可以满足其功率不变。因此，我们同样可以通过斩波来实现电流的降低的变化从而来实现Boost电路。电流的斩波电路和Buck电路是一个对偶的关系，如图3所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_003_15507c81ad4d.jpg)

图3 ： 斩流电路原理

图3中，当开关S断开时，则负载R处流过电流，当开关S闭合后，则负载R被开关短路，其电流为0。因此Io=（1-D）Ii,其对应的输出电压为Vo=1/（1-D）Vi。

我们对上面的电路进行变化，选择一个大的电感和电压源串联来表示电流源，开关S用半导体器件代替，再加上一个续流二极管就变成了Boost电路，如图4所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_004_5e60c2742f4c.jpg)

图4： Boost电路原理

当S闭合，电压源给电感充电，电感存储能量。当S断开，则电压源和电感同时给负载进行供电达到提升电压的目的。

1.  Buck-Boost电路的电路图的推导和简化过程
    

前面我们已经推导了Buck电路和Boost电路，如果我们将Buck电路输入接直流源，输出作为Boost电路的输入，即构成前端Buck后端Boost的两级变换器，则可以实现升降压功能，如图5所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_005_f5e800ae261b.jpg)

图5： Buck-Boost电路组合

通过把Buck电路和Boost电路公式进行合并，则可以得出V0=D2/（1-D1）Vi。下面，我们来简化Buck-Boost电路。首先我们对比LCL网络的动态特性和L网络的动态特性，通过波特图（图6）可以看出当在低频阶段，两者的动态特性是一致的，因此我们用L来代替LCL网络。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_006_8fe98f26fd2f.jpg)

图6： Buck-Boost电路的LCL电路化简

我们分别画出S1和S2同时导通和断开的图（图7），可以得到S1和S2同时导通时是串联在一起进行充电，因此可以减去一个开关。再S同时关断的时候，发现两个二极管也是串联的关系，因此也可以减去一个二极管。将两则进行合并后，就得到了Buck-Boost电路。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_007_0ccc2c24a3d6.jpg)

图7： Buck-Boost电路的化简

1.  Boost-Buck电路的电路图
    

若将Boost电路输入接直流源，输出作为Buck电路的输入，Buck电路的输出接负载，即构成前级Boost后级Buck的两级变换，如图8所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_008_94691498cf5b.jpg)

图8： Boost-Buck电路

下面进行化简，简化的方法和Buck-Boost电路一样，首先确定S1，S2同时导通的时候的电路，再次确定S1和S2同时断开时候的电路，如图9所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_009_e107cb0eb3ca.jpg)

图9： Boost-Buck电路的化简

以电容C1为分界点，把S1和S2进行合并，同时把D1和D2进行合并最终得到Cuk电路，如图10所示。可以看出Cuk电路需要两个电容和电感并且它的输出电压的极性和输入电压的极性相反。为了调整输出电压的极性，就演化了Speic和Zeta电路。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_010_a0576be3d296.jpg)

图10：Cuk电路

Speic电路（图11），对于Cuk电路来说，它的输出极性和输入极性是相反的，因此我们调整一下输出的回路使得输入和输出的电压极性相同。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_011_f844de7f8ae1.jpg)

图11： Speic电路

此外，我们也可以调整输入端的结构使得输出电压的极性和输入电压的极性相同，这就得到了Zeta电路，如图12所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_012_1537ac2f65d8.jpg)

图12： Zeta电路

1.  小结
    

本篇文章介绍了非隔离的DC/DC电路的总共六种电路，其转换关系如图13所示。首先通过斩波得到了Buck电路，其次通过斩流得到了Boost电路。通过把先Buck再Boost的思路把Buck电路和Boost电路进行连接得到了Buck-Boost电路。于此对应，把Boost电路放在Buck电路之前，得到了Boost-Buck（Cuk）电路。对于电路的化简，可以画出两个MOS管同时导通和关闭得到的等效电路进行化简。为了得到同样极性的输出电压，Cuk电路又演化为Speic和Zeta电路。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_013_41182c4488b8.jpg)

图13：6大非隔离DC/DC电路

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC变换电路（非隔离6大DC_DC电路）_images\img_014_ae6a2099762b.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️