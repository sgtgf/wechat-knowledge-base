# 手把手教你用AD制作3D封装

原创 阿虎 硬件笔记本 2023-10-22 10:53 四川

> 原文地址: [https://mp.weixin.qq.com/s/9TPsx\_ZosUneEXRdPq3LKQ](https://mp.weixin.qq.com/s/9TPsx_ZosUneEXRdPq3LKQ)

#   

  

虽然很多封装都可以在网上找到，但是有些封装还是需要自己动手来画，可以直接看到成品图，跟结构校对也比较方便。

  

这篇文章手把手教你用AD画3D封装。

  

步骤1、将PCB文件打开，我们这里以0805贴片电容的3D封装制作为例。点击右下角的PCB中PCB Library。

  

![](https://mmbiz.qpic.cn/mmbiz_png/O3bgxOa59vRbegbZFBSewmhWtkyNDT4Nibibvgh68jJVTdXibhIUbTWyWvsEfnAutR7oajZpBSPMyohtANtuZ5AEg/640?wx_fmt=png)

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/O3bgxOa59vRbegbZFBSewmhWtkyNDT4Naz2Sc4wfqVE0TwrVJAbyAyN7oE9XWTuzIaoFLIiaibAdeN1d9LaXP47Q/640?wx_fmt=png)

上图为PCB库中的贴片电容的封装。

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/O3bgxOa59vRbegbZFBSewmhWtkyNDT4NNVflxFVNdbiaFkFLPwVwkdMWn14btIMdUtYfY5sQtNjzJCa35ZKCSlA/640?wx_fmt=png)

上图为贴片的3D效果图（看不出来，因为没有3D封装）  

  

  

步骤2、左边就会出现封装的器件，然后直接点进去。

  

![](https://mmbiz.qpic.cn/mmbiz_png/O3bgxOa59vRbegbZFBSewmhWtkyNDT4NDPBe8YQ1IPCyP2v3x5Gc6bul1AruzzKjLnUWO1Ql9SuHiaLsGtCia2Wg/640?wx_fmt=png)

  

  

  

步骤3、点击place中3D body。

  

![](https://mmbiz.qpic.cn/mmbiz_png/O3bgxOa59vRbegbZFBSewmhWtkyNDT4NsDBniayaMeUk7EEjkNylmGVkAJSicO3LibZpeKl96auuBCpbXnYzbqbGw/640?wx_fmt=png)

  

  

  

步骤4、弹出如下对话框，如图标号1234选择。  

  

1.选择1即可制作3D封装库，它下面的选项可以直接导入现成的3D库；  

  

2.Top Side意思是把3D封装放在顶层；

  

3.元件的上表面到PCB表面的最大高度，根据实际来调整，我这里改成0.5mm先看下效果；

  

4.元件的下表面距离PCB的最大高度，默认为0。

  

![](https://mmbiz.qpic.cn/mmbiz_png/O3bgxOa59vRbegbZFBSewmhWtkyNDT4NvXpYUDLj9o0t6E1cbOrZ9Yyosm4FTqvuSBQb2vdqlBgIvypw0icQ80Q/640?wx_fmt=png)

  

  

步骤4、在上一个步骤参数设置好后，点击OK，点击鼠标箭头，可画出如下图。

  

![](https://mmbiz.qpic.cn/mmbiz_png/O3bgxOa59vRbegbZFBSewmhWtkyNDT4N43G9esgLAUbGDyuf2mqoSwdmVN9VE870ApL2Ca9hkvuSC8LCQNNfibQ/640?wx_fmt=png)

  

  

步骤5、按快捷键3，显示完成后的3D效果图。

  

![](https://mmbiz.qpic.cn/mmbiz_png/O3bgxOa59vRbegbZFBSewmhWtkyNDT4NTibEvYqK1NvwPlYibEqESXeu78A29t5fozyvlsIiaKLY44C2rhsQ37vXQ/640?wx_fmt=png)

  

当然，我只是介绍一下操作方法，封装做的不是特别规范，很多常用的3D封装网上可以下载，这里给大家推荐一个网址：

**https://www.3dcontentcentral.cn/Default.aspx**