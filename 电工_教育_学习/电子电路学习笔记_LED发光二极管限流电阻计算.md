# 电子电路学习笔记—LED发光二极管限流电阻计算

原创 电路一点通 2025-02-21 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/56Cw-z5no3uWePUSRvv1BQ](https://mp.weixin.qq.com/s/56Cw-z5no3uWePUSRvv1BQ)

发光二极管LED是开源项目中使用的最基本的输出设备之一。它们为您提供了一种简单的方法，可以向用户提供有关电路中正在发生的状态的反馈。一种流行的用途是让用户知道设备是否打开的电源指示器。

![](D:\电脑文件\公众号知识库\电工_教育_学习\电子电路学习笔记_LED发光二极管限流电阻计算_images\img_000_f0e332a784d0.png)

但是将LED直接连接到电源会导致LED烧坏。您必须使用与LED串联的限流电阻进行保护。  
计算电阻值需要从数据表中收集有关LED的一些信息。具体来说，我们需要确定LED的正向电压（ V F V\_{F} VF）和正向电流（ I F I\_{F} IF）。 V F V\_{F} VF告诉我们偏置LED开启所需的电压。 I F I\_{F} IF告诉我们LED可以处理的最大电流。我们还需要知道将为LED供电的电源电压。

有了这些信息，我们可以应用以下公式计算出限流电阻值：  
R l i m i t = V s u p p l y − V F I F R\_{limit} = \\frac{V\_{supply} - V\_{F}}{I\_{F}} Rlimit\=IFVsupply−VF

> 注：VF代表正向电压，`一般小功率LED红、黄、橙、黄绿的VF是1.8-2.4V，纯绿、蓝、白的VF是3.0-3.6V。`IF是正向电流，`一般小功率LED的IF都是20mA`。IR是反向电流。

## 二、限流电阻计算

> 使用 LED发光二极管限流电阻值计算器 https://www.eechina.com/tools/led\_current\_limiting\_resistance.html

LED限流电阻计算公式：限流电阻Ω = (电源电压V - LED正向电压V) / 限流电流A

由LED灯规格书得知，LED正向电压为2V，限流电流为20mA。

![](D:\电脑文件\公众号知识库\电工_教育_学习\电子电路学习笔记_LED发光二极管限流电阻计算_images\img_001_9ca4d980de9a.png)

### 2.1 单只LED电路

当电源电压为5V时，计算出限流电阻值为150Ω。  
  
![](D:\电脑文件\公众号知识库\电工_教育_学习\电子电路学习笔记_LED发光二极管限流电阻计算_images\img_002_95572fa83fe6.png)

### 2.2 LED串联电路

当电源电压为5V，两个LED串联时，计算出限流电阻值为50Ω。  
  
![](D:\电脑文件\公众号知识库\电工_教育_学习\电子电路学习笔记_LED发光二极管限流电阻计算_images\img_003_bc2f54ca032f.png)

### 2.3 LED并联电路

当电源电压为5V，两个LED并联时，计算出限流电阻值为1200Ω。  
  
![](D:\电脑文件\公众号知识库\电工_教育_学习\电子电路学习笔记_LED发光二极管限流电阻计算_images\img_004_b110a0a98f68.png)

## 三、电阻的额定功率计算

要计算电阻的额定功率，我们必须使用焦耳幂律：  
P = I F 2 × R l i m i t P=I\_{F}{^2} × R\_{limit} P\=IF2×Rlimit

当IF=20mA，Rlimit=150Ω时，  
P = 20 m A 2 × 150 Ω = 0.06 W P=20mA{^2} × 150Ω = 0.06W P\=20mA2×150Ω\=0.06W

根据计算，1/10W(0603)电阻可以正常工作，但1/8W(0805)电阻可能更容易上手。`功率在0.125w之下的一般选0805封装(贴片电阻)。`

> 注：
> 
> 封装(英制)
> 
> 功率(W)
> 
>   
> 
>   
> 
> 0201
> 
> 1/20
> 
> 0402
> 
> 1/16
> 
> 0603
> 
> 1/10
> 
> 0805
> 
> 1/8
> 
> 1206
> 
> 1/4
> 
> 1210
> 
> 1/2

**觉得有用，可以点个赞哦~**

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电子电路学习笔记_LED发光二极管限流电阻计算_images\img_007_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电子电路学习笔记_LED发光二极管限流电阻计算_images\img_008_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电子电路学习笔记_LED发光二极管限流电阻计算_images\img_009_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电子电路学习笔记_LED发光二极管限流电阻计算_images\img_006_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电子电路学习笔记_LED发光二极管限流电阻计算_images\img_005_ead434f24ea4.png)****  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电子电路学习笔记_LED发光二极管限流电阻计算_images\img_010_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电子电路学习笔记_LED发光二极管限流电阻计算_images\img_011_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******