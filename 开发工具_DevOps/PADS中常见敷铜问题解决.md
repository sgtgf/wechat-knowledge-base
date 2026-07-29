# PADS中常见敷铜问题解决

原创 蜗牛 硬件笔记本 2020-07-04 09:35 undefined

> 原文地址: [https://mp.weixin.qq.com/s/B4hMB6msYG1SeVl7R5wYug](https://mp.weixin.qq.com/s/B4hMB6msYG1SeVl7R5wYug)

用PADS画板子的时候，有时会莫名其妙的出现一些小问题，找了半天又找不到原因，可能不小心动了某个地方，自己没在意。关于敷铜的两个常见问题，你遇到过吗？

  

问题1.接地引脚不能敷铜，如下图:

![](PADS中常见敷铜问题解决_images/img_000_309de61e5cc5.jpg)

出现这个问题，可能有两个原因:

A.热焊盘宽度设置不合理，需要修改焊盘宽度。例如:焊盘宽度为0.8，则设置的参数要≤0.8，具体操作如下

①选择tools下的options

![](PADS中常见敷铜问题解决_images/img_001_a4c3f963e3ac.jpg)

  

②选择thermals，更改宽度width

![](PADS中常见敷铜问题解决_images/img_002_520e2d63dbe8.jpg)

  

B.如果这样更改后还是没有效果，可能是PCB封装焊盘设置不正确。如下图将焊盘改成椭圆形就可以了。

![](PADS中常见敷铜问题解决_images/img_003_1c437101a8be.png)

  

问题2.好像PCB没动过，为什么有些地方部分可以敷铜，有些地方空出来不能敷铜？如下图:

![](PADS中常见敷铜问题解决_images/img_004_022b72a8e3e1.jpg)

出现这种现象只有一个原因，将敷铜的边框宽度改大了。

  

只需要将宽度改回原来的即可。操作如下:

双击敷铜边框，出现Drafting Properities，更改宽度值即可。

![](PADS中常见敷铜问题解决_images/img_005_62ca18682df8.jpg)