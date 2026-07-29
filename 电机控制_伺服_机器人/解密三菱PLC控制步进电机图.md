# 解密三菱PLC控制步进电机图

原创 电机新视界 2024-05-08 17:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/R0iKLmNbCiI58jPNR-6oYQ](https://mp.weixin.qq.com/s/R0iKLmNbCiI58jPNR-6oYQ)

![](D:\电脑文件\公众号知识库\电机控制_伺服_机器人\解密三菱PLC控制步进电机图_images\img_000_ea977e48a43f.jpg)


来源：电子开发网

  

  

1、你要知道步进马达的工作原理。

控制方式是脉冲控制，而不是电平控制；

控制信号一般为低电平信号，而不是高电平；

度量单位，也就是如何衡量步进马达行走的距离---步进角，就是一个脉冲马达转动的角度。步进马达的步进角一般为1.8°。0.9°，0.72°，0.36°，0.0288°，等等。步进角越小，则步进马达的控制精度越高。我们根据步进角可以控制马达行走的精确距离。比如说，步进角0.72°，马达旋转一周需要的脉冲数为360/0.72=500脉冲，也就是对步进马达驱动器发出500个脉冲信号，马达才旋转一周。

![](D:\电脑文件\公众号知识库\电机控制_伺服_机器人\解密三菱PLC控制步进电机图_images\img_001_9e6c391b515b.other)

_步进驱动器TB6600说明_

所以，根据以上步进马达的工作原理，你需要选择合适的PLC。你用FX2N的PLC，需要制定为MT晶体管型，MR为继电器型，不可以发高速脉冲，所以必须用MT型。

2、至于接线图，你要知道FX2N的PLC最多发两路脉冲，脉冲口为Y0和Y1，频率为20KHZ。

附图如下：

![](D:\电脑文件\公众号知识库\电机控制_伺服_机器人\解密三菱PLC控制步进电机图_images\img_002_e72ed1d58321.jpg)

_三菱plc控制步进电机，三菱plc通过步进驱动器控制步进电机_

3、至于程序的话，看你的要求，是自动正反转还是手动控制正反转。应用PLSY指令控制步进速度和行走距离。

![](D:\电脑文件\公众号知识库\电机控制_伺服_机器人\解密三菱PLC控制步进电机图_images\img_003_5c120e2d719a.png)

  

  

**知识回顾**

**电机政策：**

[电机市场的IE5时代，真的要来了吗？  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247550130&idx=1&sn=42a14a5382b68a0bbd4ba48093155097&chksm=cede4576f9a9cc600786ab2908e4c3ef2cf3dbbfdb71a9265508f92e2dbda25384b66424bfde&scene=21#wechat_redirect)

  

[强制执行电机能效！2023年工信部发布最新工业节能通知！  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247552223&idx=1&sn=9a79a63e6376dc92a45d3945ccfccbc4&chksm=cede4d1bf9a9c40d9fa969d4856721610e61d357988dde293f59cbc0994f971b7dc168c64b0c&scene=21#wechat_redirect)  

[又一“千亿级”来了！高效电机再上央视！](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247549961&idx=1&sn=3138aaff5c66723c28a9499b551d3399&chksm=cede45cdf9a9ccdbd20ddd6eb429e4a1cf67bb758cb509a84cf1b292a9887047cfa38edcc451&scene=21#wechat_redirect)  

  

**精选文章：**

[清华大学的电机系毕业生都去哪儿了？](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247548328&idx=1&sn=8bbb58f38491f58600b87c85f9a2a864&chksm=cede7c6cf9a9f57ac80d409cbc6b9ced57c5d4df799227673198488eb6ac427f40098e09d145&scene=21#wechat_redirect)

  

[一路走来，风雨兼程，江西这家企业有太多故事！  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247552832&idx=1&sn=0691f10025dc8233e2c704ede28ff691&chksm=cede4e84f9a9c79222cf4bb485f1f3e0eb9f33f37ceff89c3ef6bf2136aa0cc5176d46b97555&scene=21#wechat_redirect)

  

[三十年磨一剑！卧龙电气背后不为人知的秘密！](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247553465&idx=1&sn=ce7240d5584ea18953b6e135546f0b7e&chksm=cede507df9a9d96b56d7b338b3f7006b29e5756c9c90bc5606002a402f4c3ffe5d991ac8ba3b&scene=21#wechat_redirect)


![](D:\电脑文件\公众号知识库\电机控制_伺服_机器人\解密三菱PLC控制步进电机图_images\img_004_a3efb375477c.gif)

![](D:\电脑文件\公众号知识库\电机控制_伺服_机器人\解密三菱PLC控制步进电机图_images\img_005_afbf5570e61d.png)


![](D:\电脑文件\公众号知识库\电机控制_伺服_机器人\解密三菱PLC控制步进电机图_images\img_006_e8e68bdfc1b3.png)