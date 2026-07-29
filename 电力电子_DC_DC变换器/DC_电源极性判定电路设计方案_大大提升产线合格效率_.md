# DC 电源极性判定电路设计方案，大大提升产线合格效率？

原创 电路一点通 2024-07-23 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/np4Rs4LqKkJA\_V\_qljDuxQ](https://mp.weixin.qq.com/s/np4Rs4LqKkJA_V_qljDuxQ)

【任务】某直流电源（或电池）产线上需对产品的极性进行快速测试，以避免正负极色相或标志错误。试设计一个极性判定指示电路，以提高不合格品筛选效率。  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_电源极性判定电路设计方案_大大提升产线合格效率__images\img_000_72913d7d6539.other)

******进大家庭⭕圈探讨回复:****** ******交流******

【构思】批量测试直流电源极性最高效的方法并不是使用仪表类，而是利用LED的直观指示来显示极性。我们不妨使用两个LED：绿色LED亮表示产品接入的极性正确，红色LED亮表示产品接入的极性相反。据上理由，设计的起点如下图：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_电源极性判定电路设计方案_大大提升产线合格效率__images\img_001_72e2c910f4bd.jpg)

  

接下来的目标是使这两个LED各自根据电源的极性形成回路点亮，假定电源的额定电压为15V，额定电流为0.5A，LED的工作压降为2V，工作电流为10mA。显然我们必须增加电阻对LED限流。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_电源极性判定电路设计方案_大大提升产线合格效率__images\img_002_985b699b3937.jpg)

  

上面的电路没有形成回路，LED尚不能工作。我们最”暴力“的想法是将每只LED的强行连接到对面相反的极性端。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_电源极性判定电路设计方案_大大提升产线合格效率__images\img_003_0e0928b57471.jpg)

  

很快，我们发现上面的电路仍然不能正常工作，因为部分支路被短路了。于是，我们可仿照蒸馏电路的设计方法，在上面的两条短路支路上各增加一个正向连接的二极管。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_电源极性判定电路设计方案_大大提升产线合格效率__images\img_004_ccdac120d88b.jpg)

  

上面的电路非常难看，我们不妨进行一下等效拓扑变换：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_电源极性判定电路设计方案_大大提升产线合格效率__images\img_005_51f6d2de2e79.png)

  

既然两个LED的参数相同（只有发光颜色不同），干脆共用一个限流电阻，而该电阻的一端已连接LED的负极，那么另一端必然连接分支路的二极管正极（继承了极性连接关系）：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_电源极性判定电路设计方案_大大提升产线合格效率__images\img_006_0b7fc93d8531.png)

  

上面的电路工作分析：当产品接入极性一致时，电源正端经绿灯LED\_GREEN、限流电阻R、二极管D2回到电源负极形成工作回路，绿灯亮；当产品接入极性相反时，电源正端经绿灯LED\_RED、限流电阻R、二极管D1回到电源负极形成工作回路，红灯亮。这就达到了判定电源极性的目的。

【计算】由于电源额定电流为0.5A，D1、D2可选择正向电流为1A的1N4007（即使LED发生故障也留足了余量）。已知LED的工作压降为2V，工作电流为10mA，电源电压为15V，假定D1、D2正向压降为0.7V，限流电阻R=(15-2-0.7)/10=1.23k（取标注系列的1.3k）。最终的设计如下图：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_电源极性判定电路设计方案_大大提升产线合格效率__images\img_007_79fa515ed7fd.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_电源极性判定电路设计方案_大大提升产线合格效率__images\img_008_c6f7cf6a4be3.png)

 **好东西|****值得拥有**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_电源极性判定电路设计方案_大大提升产线合格效率__images\img_009_ced01cbe22ce.other)

  

  

## **一点通推荐**

‍  

‍‍[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)‍

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MjM5MTI2MTI0MA==&mid=2655363961&idx=1&sn=367d6b142f74c5550b3da73a170e02d8&chksm=bd09342e8a7ebd38124284919c29948e75bdac144db038f48d7360cd8531e04285e776a44ae5&scene=21#wechat_redirect)

\>①[几种交流电源的有效值计算方法](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525048&idx=2&sn=4edbf462fb3f6a216b6972bdbf94d1df&chksm=fcef81dacb9808ccea299ec887efb1c95b10685e6650815f794e6adea7d5e7907490a8ab3de6&scene=21#wechat_redirect)    

\>②[9天练会电子电路识图.pdf资料（302页），跟着学、跟着练增长经验](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)

\>③[电子工程师必备：元器件应用宝典（696页）.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525322&idx=2&sn=0d3ec420b8acae441986bacc9659bac4&chksm=fcef80a8cb9809be16de2fa7664fd9301edb08ab1535cd5c697750dfd6287de2e40b87d1689a&scene=21#wechat_redirect)

\>④[硬件工程师开发手册-163页.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525090&idx=2&sn=f4fa30af30f11407e753739c1ebc95fa&chksm=fcef8180cb980896e634da41b9b2de7485e8f2e8d6af1833c7b374580d4b3eaade4455c459a0&scene=21#wechat_redirect)    

\>⑤[这4种防反接电路-正反极接反了会烧毁电子元器件](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527038&idx=1&sn=981d151c23fcf91126261adf7d50230f&chksm=fcef891ccb98000a4f421374eb2d5e740090856f717e29212457d4ea2c8343836419d621e635&scene=21#wechat_redirect)    

  

‍