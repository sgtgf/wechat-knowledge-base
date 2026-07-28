# PADS中怎么把两个PCB合在一起，手把手教会你

原创 硬件笔记本 硬件笔记本 2020-03-07 06:10 undefined

> 原文地址: [https://mp.weixin.qq.com/s/\_oz9AtIMWqpH9HXn9x0ZgQ](https://mp.weixin.qq.com/s/_oz9AtIMWqpH9HXn9x0ZgQ)

你有没有遇到过这样的情况？有时候画好了一张PCB，但是由于各种各样的原因，你需要在原来的PCB上增加或者改动一部分电路，但是原来的PCB没有原理图。可能增加或者改动的内容比较多，为了方便检查，不得不再画原理图生成PCB，然后把两部分合在一起。我曾经也很苦恼，尝试了各种方法后，总结出我觉得最简单的一种，希望让更多的小伙伴们少走弯路。

假如有两块板子A，B

1.将A中所有元件选中，点击右键选择make reuse

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKFpicYtA0GWsJw0x2jmOtse7RJq4IPFRvH86Xh7LKCicHR2G081YibiasiaQdIFrXUdtTia18C1AtKZabQ/640?wx_fmt=jpeg)

2.弹出窗口，在reuse type中随意写入保存的文件名

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKFpicYtA0GWsJw0x2jmOtseGFib8qibf2Nj8fZJiboaRnFHcFTeBZib0Dx3ETHzDsEwE85dmkiaKRVAaUw/640?wx_fmt=jpeg)

  

3.将B打开，并在ECO toolbar模式下，左键点击add  reuse

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKFpicYtA0GWsJw0x2jmOtselxKRVGFcC9QicdV6MiaricdibrENpFudWncNdz4Mc0kpDEbsEZOl1xRdzQ/640?wx_fmt=jpeg)

  

4.选中刚才保存的文件并打开，这时候A中电路图已经粘贴在你的光标上了，选择合适的位置，左键单击即可。

！！！不要以为到这里就结束了哦，你试试看，元件是不能被拖动的。

5.选中刚粘贴过来的电路，右击并选中select reuse

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKFpicYtA0GWsJw0x2jmOtseRK4Pmq3hCOIia5Yufy0Bg74Gkboe8EWtFSpb5iaF3HicID7mehQcMqJMQ/640?wx_fmt=jpeg)

  

6.再右击，选中break reuse，这时你就会发现元件能被拖动啦。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKFpicYtA0GWsJw0x2jmOtseKJxBfWFgJibywemwTQnAOdMSWWhTjvCL7AjvmfJ7oUdatHWYNUhpN5A/640?wx_fmt=jpeg)