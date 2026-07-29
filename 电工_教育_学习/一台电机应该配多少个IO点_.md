# 一台电机应该配多少个IO点？

原创 电机新视界 2024-02-25 22:55 上海

> 原文地址: [https://mp.weixin.qq.com/s/QS75UPL5-1e1qw0ELvp45w](https://mp.weixin.qq.com/s/QS75UPL5-1e1qw0ELvp45w)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0vE2ZIG5VErUiaic5Uovdb28y7P5QYtqjXS963OUGN1gZticMCCPchusnOMBhEuCvwJ9JdO7pugDP1XA/640?wx_fmt=jpeg&from=appmsg)

  


来源：西门子中国

  

**电友求助：**

  

  

  

  

  

以前都是一台电机3个IO点——运行信号、故障信号、控制输出，2入1出。

  
这两天做了一个稍微大的项目，350个IO点。一算PLC的价格，老板开始肉疼。我就开始考虑砍哪个IO点了。控制输出这个O点肯定不能动。运行信号和故障信号砍哪个开始纠结。

  
**砍故障信号，电机要是保护了不显示在触屏上肯定不行。****砍运行信号，接触器运行无反馈，我又觉得不好。**

  
砍故障信号，保护回路串接触器，有控制输出延时无运行信号就报故障，事情倒是解决了，但哪里找这么多的定时器用。  
  
我现在就是纠结选哪个！

  

![](https://mmbiz.qpic.cn/mmbiz_png/IbK8vRh9Eqk62sKS7zzS5OjIBqO0GsyXtYvA36K6M8Y4R59y7jcq8yoiaI9byJpDQKW9AuODJGicL57iaTMoW18Dg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

（仅为配图）

  

以下是热心电友给的帮助，看看你同意哪个呢？![](https://mmbiz.qpic.cn/mmbiz_png/IbK8vRh9Eqk62sKS7zzS5OjIBqO0GsyXCY7M67yH9icwmkdaZNwrkiaPxianuJ32bCwib1sY351ZOUO0gPX1uSlx0Q/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**电友A：**如果启动是触摸屏控制，运行信号与故障信号可以共一个，按下启动后如果1秒钟后没有收到来自接触器常开点的运行信号，就认为是有故障的了；热继电器的常闭串入接触器线圈，如有过载接触器肯定会断开的。

  

**电友B：**接触器控制：运行反馈信号；过热反馈信号；电机输出信号；实在要砍，也只能砍砍运行反馈了（做过很多接触器控制电机的项目，出现过很多次无“运行反馈信号”，导致电机启动失败的报警，有时候强制输入点才让电机起来）

  

**电友C：**一般就是备妥、运行、故障、驱动。

  

**电友D：**运行、停止、故障的指示灯可以共用一个输出，正常运行=常亮，停止运行=不发光，故障指示=闪光。

  

**电友E：**省这个两个IO点，能省出买车买房的钱来？我就不信了。。实在想省，运行信号可以不要，只要给输出信号了就默它已经运行。

  

**电友F：**运行信号、故障信号、控制输出，2入1出；1+1应该可以，运行(NO)和故障串联(NC)，逻辑也没毛病，如果控制输出启动以后，2S内没有反馈，表示 没有正常启动，输出报警即可。

  

你有更好的建议吗？

  

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


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0s3XKZR1KtlxFAuIoGYBDeHH3cUQjZhhwP3ibXQ70NSJO9zrLzszLTuWdV18EcNU3gKvQ0G5AfvRMA/640?wx_fmt=png)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vTicAlmdAM5kmIicsPkDYY96WxUU7Fgeicr3EF8TShjxlP65ccvCvqh45flVSeAdLP2t4dNfPxicjicww/640?wx_fmt=png)