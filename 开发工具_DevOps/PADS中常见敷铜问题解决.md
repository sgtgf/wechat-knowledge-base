# PADS中常见敷铜问题解决

原创 蜗牛 硬件笔记本 2020-07-04 09:35 undefined

> 原文地址: [https://mp.weixin.qq.com/s/B4hMB6msYG1SeVl7R5wYug](https://mp.weixin.qq.com/s/B4hMB6msYG1SeVl7R5wYug)

用PADS画板子的时候，有时会莫名其妙的出现一些小问题，找了半天又找不到原因，可能不小心动了某个地方，自己没在意。关于敷铜的两个常见问题，你遇到过吗？

  

问题1.接地引脚不能敷铜，如下图:

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tL9OQqGdngXSFgUYEBhbruVh1CmiahmdYJMftjGK8y9ULFE7LnvFcYjLLc48a33lDF8DRWe5gddWfA/640?wx_fmt=jpeg)

出现这个问题，可能有两个原因:

A.热焊盘宽度设置不合理，需要修改焊盘宽度。例如:焊盘宽度为0.8，则设置的参数要≤0.8，具体操作如下

①选择tools下的options

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tL9OQqGdngXSFgUYEBhbruVpOKTnUC0G4PIz75YMLlDLGqiboibkiaoYaKZvXH76XKlq5jibHLArpm4iaw/640?wx_fmt=jpeg)

  

②选择thermals，更改宽度width

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tL9OQqGdngXSFgUYEBhbruV6NuqIicoMDLfCrqe8ibTye1maqwzwEL18ytCLVztJBtgUah9fchYibGMw/640?wx_fmt=jpeg)

  

B.如果这样更改后还是没有效果，可能是PCB封装焊盘设置不正确。如下图将焊盘改成椭圆形就可以了。

![](https://mmbiz.qpic.cn/mmbiz_png/bsiaOicpwT9tL9OQqGdngXSFgUYEBhbruV8ia0g1eFjcNR6ydt4iauZXDibmjianRD2VIQUFnfOW4VKiat1RlOiauXnM8Q/640?wx_fmt=png)

  

问题2.好像PCB没动过，为什么有些地方部分可以敷铜，有些地方空出来不能敷铜？如下图:

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tL9OQqGdngXSFgUYEBhbruVJqKVUAxBHPHXWNtEBkkMMDWFxQ5Pc8qJJ7qwtDrSzl4v7SHNicDqCVw/640?wx_fmt=jpeg)

出现这种现象只有一个原因，将敷铜的边框宽度改大了。

  

只需要将宽度改回原来的即可。操作如下:

双击敷铜边框，出现Drafting Properities，更改宽度值即可。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tL9OQqGdngXSFgUYEBhbruVygfDFjzD7QYRrupIsdhy0mVk8M1MBePMpueibetYccqblpGXabhCyPA/640?wx_fmt=jpeg)