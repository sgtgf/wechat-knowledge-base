# 数字孪生实战：如何用MATLAB重构MOSFET的“体温中枢”

原创 傅存敬 电磁散人 2025-12-06 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/Ac8WBpNEPTXygPs4MqT6tQ](https://mp.weixin.qq.com/s/Ac8WBpNEPTXygPs4MqT6tQ)

前期那篇讲解[用RC热阻网路给MOSFET的芯温做“心电图”](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484805&idx=1&sn=ca17f00091a92a374fc8f53d6048f215&scene=21#wechat_redirect)的文章中，说好要手把手代练一下如何根据MOSFET的数据手册中的热阻抗曲线来提取热阻Rth和热容Cth的，今天把这个承诺圆上。

全过程分为四步：取数据；搭模型；拟合数据；校验曲线。

在正式开始之前，我先分享一个感触，也许各位同仁跟我有过相似的经历，上（小）学时碰到过类似这样的应用题——一个泳池有两个进水管A、B和一个排水管C，单开A水管5个小时灌满泳池，单开B水管3个小时后灌满泳池，单开C水管4个小时后排空泳池，问：ABC三个水管同时打开，多长时间后泳池会灌满水——当时的我认为这就是个神经病的题目，现实中哪个二傻子会同时打开排水管和进水管？但现在的我不这样认为了，不但不会感觉这样的应用题傻，反而非常感恩人教社的老师们能让小时候的我第一时间**用微积分的思想来感受动态平衡。**因为这在工程界里，几乎是每天都会遇到的问题。

回到我们的MOSFET热模型，如果列位也曾解过类似的应用题，那么在面对MOSFET热模型时，相信会通透很多：

1.  **进水管 A & B**：这就是**功率损耗**。电流流过MOS管，产生的焦耳热量，就像哗啦啦的水往池子里灌。
    
2.  **排水管 C**：这就是**热阻**。就像池底的漏水口，热量必须通过这个漏水口排到空气里去。如果这漏水口太细（热阻太大），或者是堵住了（散热器没贴好），水怎么都排不掉，池子（芯片温升）不一会儿就满了。
    
3.  **泳池的大小**：这就是**热容**。池子越大，水深涨得越慢；同样的，芯片和散热器越大（铜基板越厚），温度上升得越慢。
    
4.  **水位的高度**：这就是**结温**。如果水位“溢出”了，那就是MOS管“炸机”了。
    

**为什么必须“一边进水一边排水”？**

因为只要MOS管在工作（进水），它就在发热，我们必须同时指望散热器散热（排水）。如果只进不排，几毫秒（甚至是微妙）芯片就烧了。我们要算的，就是在“进水”比“排水”快的那一瞬间，水位（温度）究竟会涨到多高？

好了，前言絮叨完毕，正式开始行动。

**第一步：按图索骥——提取“真”数据。**

我们就以型号为AOB240L的NMOS为例，重新打开数据手册，找到那个热阻抗测试曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5mV9hTKR78FFLXazodI8cGMquXJvtpkib0Zq9aLXW2t7Dlt1ZkaASmoeA/640?wx_fmt=png&from=appmsg)

这一步，要分享两个关键点：“**取哪条线**”和“**怎么取点**”。这直接决定了后面的参数提取能不能算准。

### 1\. 灵魂拷问：图上那么多线，我该取哪一条？

看图，从上到下好几条线，D = 0.5。。。0.1。。。0.01，最后还有个**Single pulse**。

我先直接给结论：**必选，且只能选：Single Pulse（单脉冲）这条线！也就是最下面那条。**

为什么？

还是回到开头的泳池比喻：

**Single pulse（单脉冲）是什么？** 这相当于：泳池里没水，管理员把所有的进水阀门和排水阀门**拧到底并保持住**（阶跃信号），然后拿着秒表和尺子，记录水位是怎么一点点涨起来的。

-   第1秒涨了10cm，第2秒涨了5cm...
    
-   这个水位上涨的曲线，**完全取决于泳池的形状**（是圆的还是方的，底面积多大）。
    
-   **结论**：这条线，直接反映了泳池（MOS管）的物理结构（热阻和热容）。
    

**占空比曲线是什么？** 这相当于：管理员虽然同时拧开了进水阀门和出水阀门且把阀门都拧到了最大，但他是个多动症。他对进水阀门**开1秒，关1秒；再开1秒，再关1秒……**

-   这时候水位怎么变？水刚涨起来一点， 进水阀门关了，水位开始降；还没降完， 进水阀门又开了。水位是在**震荡中缓慢上升**。
    
-   如果你用这条震荡的曲线去反推泳池的形状，你会非常痛苦，因为这条曲线里混入了管理员的“骚操作”（开关动作）。
    

**我们要搭建的Foster 模型是给泳池建模，不是给管理员建模。**

-   **Single pulse 曲线**：是最纯净的、没有杂质的、不包含任何开关动作的**纯物理响应**。它就是MOS管的“出厂设置”。
    
-   **D曲线**：是厂商好心帮你算出来的结果（他们其实大概率也是用 Single pulse 的数据，叠加上开关动作算出来的）。
    

所以，**盯住最下边那条Single pulse线，其他的看都不要看！**

### 2\. 动手操作：使用 WebPlotDigitizer描点

把datasheet中的热阻抗曲线截图保存。

打开WPD 工具，网址：

https://apps.automeris.io/wpd4/index.zh\_CN.html

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5mzygOkYPOt6zNtrhO1CrKGmlXgtLdH4vCTiaRtEXagaeFtohoiaibKZic0A/640?wx_fmt=png&from=appmsg)

点击页面右下角的“导入图片”按钮，加载刚刚的热阻抗曲线截图

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5mmiaBlbhHVibWAZLibmiccEL5GNsSYklktsWAS6WhV3wte4KhPQpFoVNCuQ/640?wx_fmt=png&from=appmsg)

针对我们截图的热阻抗曲线类型，选择“二维（X-Y）图”

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5mGia4qDZq1whJnKBSy0ctFGb6wMzIMbLltRfLMLmHPibyskrEH5jRw9uQ/640?wx_fmt=png&from=appmsg)

点击弹出页面下方的“对齐轴”，按照页面提示选取4个点来确认坐标轴。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5mqpl7ibUfxlfG32GmBtQAX4M6jXzZzPKWRUffC71iaYVqzLlwcKE0ibzdg/640?wx_fmt=png&from=appmsg)

点击“继续”，按照先X轴，后Y轴，从小到大的顺序选取4个点，尽量涵盖住整个曲线显示范围，页面右方会显示鼠标放大图，方便锚点。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5mslPWrGUSebJQuXaKYLsDl0CibO4EcMQruxvDYjrPl1a7ccOr28p3BicQ/640?wx_fmt=png&from=appmsg)先描x轴的第一个点。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5md2vnOkVmqwX8ib2p1TLuGT4QLxJEcZja0k2sJS8o480feSPWIr9sibVg/640?wx_fmt=png&from=appmsg)再描x轴的第二个点。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5mMLDSzYN9JDaFoiaZPhJpjTANwMnoqwKhT19victeZKiaWmQJicxxD7HfRQ/640?wx_fmt=png&from=appmsg)然后描y轴的第一个点。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5mkZZrwdicMAia6XO3VmyzeqvbfZxwGRAapm0uXMqK6icVcjDB6W015JB9Q/640?wx_fmt=png&from=appmsg)最后描y轴的第二个点。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5mzPgz9EceKf035mwSaBBf91TTUrWVqfoXDxDoIa4fSIQR91kls6WnBA/640?wx_fmt=png&from=appmsg)四个点选完后，点击页面右侧的“完成”，在弹出的页面中，填入刚刚锚定的四个点的坐标值，切记，一定要将“对数刻度”打钩！

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5mUmXfx6OFo6l008mWUFicmJZUgm24m0AbuVWI3W9SsaDQia8QyqkP0qaQ/640?wx_fmt=png&from=appmsg)

点击“确认”按钮，在新的页面中开始描Single Pulse热阻曲线上的点，15~20个点足够了，但要包含曲线完整的形状，如头、尾（稳定值）和关键形变的点。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5meFFjgYS415INUNccmSuFDkAicWp0L2GAfYpRCy2P6TiaO3kQFcOD1icJg/640?wx_fmt=png&from=appmsg)描点完成后，点击页面左下方的“查看数据”按钮。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5mpxScU40QqGPHUczDdbtojcjh6mjoKx82XfVJjWOIGfrxcd4Ooibvt4A/640?wx_fmt=png&from=appmsg)

在弹出的页面中，刚刚描的点的坐标值就全部显示出来了，点击新弹出页面下方的“复制到剪切板”或“下载.CSV文件”，复制或保存的数据用于后续在MATLAB中处理。

**第二步：积木原理 —— 理解Foster模型。**

在[前期的文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484805&idx=1&sn=ca17f00091a92a374fc8f53d6048f215&scene=21#wechat_redirect)中有介绍过，工程界更习惯用Foster模型来搭建MOSFET的热模型，通常选为4~6阶，但是，**为什么要搞个“4阶”模型？**

列位且看那条 Single Pulse 曲线，它不是一条直线，也不是一根简单的抛物线，它像个“**S型”的爬坡曲线。**

-   **刚开始**：热量只在极小的硅晶圆（Die）上传播，热容很小，温度升得极快。
    
-   **过一会儿**：热量传到了焊锡层、铜底座上，这些金属块，传热快但存热慢，温度上升变缓。
    

在物理世界中，这其实是无数层材料叠加的结果。但在工程上，我们发现只要用4组“热阻+热容” 并联的模组串联起来，就能把这个过程模仿得惟妙惟肖。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5m8dIiapgdll3cz5tHCkyMdbRqDntB736DDrYxxkJJDdKWZl8WichnWqibQ/640?wx_fmt=png&from=appmsg)

这就是 4阶 Foster 模型 的由来：

-   **第1阶（RC1）**：模拟极短时间的（微秒级）温升 —— 对应硅片。
    
-   **第2阶（RC2）**：模拟短时间的温升 —— 对应焊料。
    
-   **第3阶（RC3）**：模拟中等时间的温升 —— 对应铜基板。
    
-   **第4阶（RC4）**：模拟长时间的（秒级）温升 —— 对应外壳整体。
    

我们在 MATLAB 里要拟合的目标公式长这样\[1\]：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5mm5pPZyYWAg4RHRZySaaFicInFSRwqpNricfgJopsppmxI9s6G6GwoepA/640?wx_fmt=png&from=appmsg)

别晕！把它拆开看，其实就是**4个小括号加起来：**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGqicUA85tQMMH5h0jcG4n5mI6laY3mjQDncJjOrL4IX2ibXpkkiaZ5IAYTe65LibJdP8IbSZCnIMWuYQ/640?wx_fmt=png&from=appmsg)

这里有两个关键角色：

1.  热阻Ri：你可以把它理解为“**高度**”。这4个R加起来（R1+R2+R3+R4），必须等于图表纵轴的最大值（在标幺化后的曲线里就是接近1，或者是总热阻Rth\_jc）
    
2.  时间常数τi：你可以把它理解为“**惯性**”。τ越小，这一项这就“反应越快”，管的是0.00001s那时候的事儿；τ越大，这一项就“反应越慢”，管的是0.1s之后的事儿。
    

理解好了这个4阶Foster模型，我们下一步的工作，就是把第一步得到的28组（τ，R）数据喂给MATLAB，说，嘿，兄弟，我这有28个点，请你帮忙凑出4对（τ，R）参数，让这4个括号算出来的结果，可以完美地压在这28个点上。

**第三步：让电脑干活 —— MATLAB 拟合曲线。**

打开电脑里的MATLAB，确认一下是否安装了`Optimization Toolbox`（通常默认都有），在命令行输入`help lsqcurvefit`回车，如果跳出一大堆帮助文档，说明**有**，我们可以开始了。

按照以下步骤操作：

1.  打开 MATLAB，点击左上角的 **"New Script"（新建脚本）**。
    
2.  把下面框里的代码，**全部复制**，粘贴进去。
    
3.  点击 **"Run"**，或者按 `F5`。
    
4.  保存文件名可以是 `foster_fitting.m`（名字不重要，别用中文就行）
    

```
%% MOSFET 4阶 Foster 热阻模型拟合脚本 
```

**代码说明：**

我简单解释一下上面的代码里在干啥，防止各位同仁觉得它在变魔术：

1.  **数据填坑**：把第一步获取的那28组数据硬编码进去了，嫌麻烦的同仁可以按照自己的方式导入（比如在第一步中保存的.csv文件）。
    
2.  **定义目标**：定义了一个函数 `foster_fun`，这就是我们刚才讲的那个由4个括号组成的公式。
    
3.  **初值猜测 (x0)**：这是最关键的一步！
    

-   `lsqcurvefit` 是个瞎子，它需要我们将它扔到一个大概正确的位置，它才能摸索到终点。
    
-   如果瞎猜，它可能会报错。所以我给了它一组**经验初值**：R平分，τ按数量级分布（1e-4, 1e-3，1e-2，1e-1）。
    

5.  **计算 C 值**：拟合出来的是时间常数 τ，由于 τ = R×C ，在代码基于这个把对应的 C 算出来。
    

**第四步：验明正身 —— 校验曲线**

先看下仿真运行结果：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHhVIVapbx2A5PJEmwKDicNia19lw5ov4O9krrFZE0Evtnz2VV1r6HEYIt5HxboT7m2uwdGtfTq4h4Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHhVIVapbx2A5PJEmwKDicNia5WPk2mXgckc4xeYmG2b0T8tsqOvJvf8nOCcj5r4gVxOWPCR3QzFRag/640?wx_fmt=png&from=appmsg)

看下残差Resnorm的计算结果，只有1.297966e-03, 此刻的我就知道——**这事儿成了！**

这个残差值意味着，刚刚拟合出来的曲线和原厂的数据误差极小，几乎就是那条线的“克隆体”。但如果你是一个**非常较真**儿的人，比如，处女座+A型血（当然是玩笑的），会看着图中的两个圆圈“不爽”：**为什么这两个红色圆圈没能死死地压在蓝线上？**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHhVIVapbx2A5PJEmwKDicNiaK6mTBQf778cYvQ3JS7zpqlmyh5zic2JlBTnjTXtDrGr2iaSGNPPVGb7g/640?wx_fmt=png&from=appmsg)

其实这是由于第一步获得数据的取点误差造成的，在代码的注释中也标注了，我们取出来的数据点，有些是不准确的，最明显的特征就是Y值（对应于热阻抗曲线上的纵坐标）大于1，因为这个曲线是标幺化后的数据，Y值最大只能是1，这也是为什么代码中要加入如下语句来“清洗”数据的原因。

```
%% 1.5 数据清洗 (小技巧)
```

修正后的描点数据，也就是图中的红色小圆圈，最大值应该，也只可能等于1。代码中把那些大于1的异常点数据“按”回来了，列位会看到红色的圆圈在最后那段平平的曲线中趴在1.0线上，蓝色的线也会很平稳。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHhVIVapbx2A5PJEmwKDicNiaTiaE8W23KmXgdEJ213ncP7lnJfAibFFGSicT5nqlMRq84GOiaxiaVLrtEQA/640?wx_fmt=png&from=appmsg)

再多说几句，我们取点有误差，原因并不完全是因为我们手抖、不细心等这些原因，还有很重要的一个原因是，不知道AOB240L这款NMOS的datasheet的作者是**有意**还是**无心**，把这条热阻抗曲线画得太 **粗** 了。

另一家更负责任的大厂ST，他家的型号为STL115N10F7AG的NMOS，给出的热阻抗曲线，就很 **细** 。特别适合用来描点进行RC参数提取。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHhVIVapbx2A5PJEmwKDicNiagfH6dI1lb1VRzMEa3ZIibXFiaBykrduQGrSeQk0eNSibUws8J4L4q4KoA/640?wx_fmt=png&from=appmsg)

我用以上同样的步骤，基于上图提取出来的数据进行曲线拟合，拟合残差`Resnorm`只有1.02e-4，精度整整提升了一个数量级！

出于**人性本善**的角度考虑，我们姑且认为AOB240L的工程师的行为是无意的，好不好？

**小结**

本篇文章尽可能细致地，手把手地实操了一遍如何基于MOS的datasheet中的热阻抗曲线，提取数据并拟合曲线，得到自己期望的热阻R和热容C。

但正如[进阶“读心术”那篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484822&idx=1&sn=aefdfc1cea0eb49a4e624750bbb266b2&scene=21#wechat_redirect)中说过的，直接使用Datasheet参数建立的模型，可以作为一个很好的**起点**，但绝不能当作**终点**。我们必须对**我们自己这套系统**进行校准。

后期的文章，会严格基于半导体器件（特别是功率器件）结-壳热阻测试界的“圣经”——《JEDEC JESD51-14》这个标准——详细解说如何在实验室实测热阻热容，以及如何基于实测数据校准我们今天通过datasheet手册拟合出来的热阻热容，最终应用到自己的代码中去。

我们下期再见。

  

参考文献：

\[1\] JEDEC JESD51-14: Transient Dual Interface Test Method for the Measurement of the Thermal Resistance Junction-to-Case of Semiconductor Devices with Heat Flow Through a Single Path

文档链接：

\[1\]https://pan.baidu.com/s/1wLekhAIJD64D0Z4WQMNfrQ?pwd=by6s 提取码: by6s