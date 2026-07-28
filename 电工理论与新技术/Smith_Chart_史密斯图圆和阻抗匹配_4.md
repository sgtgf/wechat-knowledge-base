# Smith Chart：史密斯图圆和阻抗匹配-4


> 原文地址: [https://mp.weixin.qq.com/s/n65W5BpdkzjruOONk9sGbw](https://mp.weixin.qq.com/s/n65W5BpdkzjruOONk9sGbw)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSrfKib8AibPT9IcfgAInIag1pkGyvibjIPCmQkOYK7rUvOmesvibucZ8XBGFwyQbNPI8q6wnQ8n4WLiag/640?wx_fmt=png&from=appmsg)

_★★★__SMC-4---Series____**★★★**___

_

引言：在上一节中（传送门：[Smith Chart：史密斯图圆和阻抗匹配-3](https://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247497178&idx=1&sn=6bea29d72a6bc81974f4ff4861300c1f&scene=21#wechat_redirect)），展示了如何使用串联电感和电容来抵消负载的电抗，但是如上一节的示例2所示，除非负载阻抗的实际部分为1（即Re\[ZL\]=1），否则此方法将不起作用。在本节中，我们将展示如何使用传输线截面和串联组件来完全匹配任何负载阻抗。

_

___€1.与Tx线路、L和C串联的阻抗匹配___

在之前的示例2中，设ZL=0.3+i，假设我们不使用组件，而是使用传输线部分来移动阻抗，从阻抗变换章节中可知，传输线部分将使负载阻抗绕史密斯圆图中心绕圈移动，也就是说，给定负载阻抗ZL，传输线部分可以将阻抗重新定位到图4-1中绿色圆环中的任何位置：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfr014us4qycZjyMyCHgr0kSGKNdsfl0vnBOJTHI05NFV8EPrVX6O6cg/640?wx_fmt=png&from=appmsg)

图4-1：史密斯圆图上的阻抗zL及其恒定的VSWR圆

回想一下，如果阻抗的形式为Z1=1+iX，那么我们可以使用串联电感或电容与它完全匹配，现在，如果我们使用传输线截面旋转史密斯圆图上的阻抗，直到它与Re\[z\]=1圆相交，那么我们可以精确匹配任何反射系数大小不等于1的阻抗（也就是说，我们可以匹配史密斯圆图内部的任何点）。

要计算出所需的旋转，可以从史密斯圆图的中心到ZL画一条线，然后从史密斯圆图的中心画另一条线到恒定的SWR圆与Re\[Z\]=1圆相交的位置，最后找到两条线之间的夹角，如图4-2所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfsms41XFd0AedrNGXicQ0DT6dicV4w43l4hlkSar9xPfDBbzdzibDIFQibQ/640?wx_fmt=png&from=appmsg)

图4-2：确定到达Re\[Z\]=1圆的Tx线长度

在图4-2中，使用量角器确定角度，或使用史密斯圆图外缘上的度数刻度读取角度差，发现两条线之间的角度为45.5°。由于一个波长对应于围绕史密斯圆图的两次完整旋转，因此我们有：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRLH62pJueiaZibawbbZ71g2Phbj7JnQdibzrTwFYfQ3icRD5WhJJGuNgQ8PnAu8ic221teW4KzYEvCGRw/640?wx_fmt=png&from=appmsg)

可以计算出对应45.5°的传输线所需的长度：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRLH62pJueiaZibawbbZ71g2P4OTX6fc1wUWD5X3NUWm2P6MRQiauSib72cjsDhbbFtUK9eC7OOveKgZA/640?wx_fmt=png&from=appmsg)

因此，我们可以使用长度为0.0632λ的传输线将阻抗ZL旋转到Re\[zL\]=1圆，如图4-3中的棕色曲线所示，恒定电抗曲线Im\[Z\]=2.228，这正是恒定VSWR圆与Re\[z\]=1恒定电阻圆相交的地方。

图4-3所得阻抗为TP2，该值可以直接从史密斯圆图中读取，得出Z1=1+i\*2.228，因此我们可以使用串联电容将该阻抗精确匹配到史密斯圆图的中心，使得Z\_cap=-i\*2.228，阻抗TP3将为1.0。由此产生的阻抗匹配网络如图4-3中所示，结果是TP3=1，因此TP3处没有功率被反射，ZL到达史密斯圆图中心所采取的路径通过图4-3中的黑色曲线显示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfibwNZbxBb5xaDvncwg8eCCWt8Z5wz9lZhBYMgZp0ibVBcKpheibicKXazw/640?wx_fmt=png&from=appmsg)

图4-3：使用tx线和串联电容器将ZL移动到TP2，然后移动到TP3  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TR5xTo5NJXJt1icqgCG0fr9EBw0PLZJpMVE0qj7f5OtUJx39rLvQPhdfibxvfzmtdbGn5sABfibodWZA/640?wx_fmt=png&from=appmsg)

图4-4：区域特性

___€2.___阻抗

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQk7AfNamUPgqVdzf1nDZaNsZod7ic5NkK1ib5Kv9l3RBjQ9zcXqaicxqTFv5ohdGZhdpMCD0lb6DMrg/640?wx_fmt=png&from=appmsg)

其中R为电阻，ωL为感抗，1/（ωC）为容抗。

1#：如果(ωL–1/ωC)>0，称为“感性负载”；

2#：反之，如果(ωL–1/ωC)<0，称为“容性负载”；

仔细看阻抗公式，它不再是一个实数，因为电容、电感的存在，它变成了一个复数。史密斯原图，除了有红色的曲线，是从阻抗复平面掰弯过来的红色世界。同时在图中还有绿色的曲线，它们是从导纳复平面掰弯产生的。那么这个绿色的导纳，有什么用呢？并联电路，用导纳计算会很便利。同时在史密斯原图中， 我们用绿色的导纳曲线进行查询，也会更方便。

1#：圆图红色的代表阻抗圆，蓝色的代表导纳圆，圆中间水平线是纯阻抗线。

2#：如果有点落在该直线上，表示的是纯电阻。水平线上方是感抗线，下方是容抗线；落在线上方的点，用电路表示，就是一个电阻串联一个电感，落在线下方的点，是图上的圆表示等阻抗线，落在圆上的点阻抗都相等，向上的弧线表示等感抗线，向下的弧线表示等容抗线。

3#：用史斯密斯图进行阻抗匹配计算的基本原则是：是感要补容，是容要加感，是高阻要想办法往低走，是低阻要想办法抬高， 无论在任何位置，均要向50Ω（中点）靠拢。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQk7AfNamUPgqVdzf1nDZaNzhy9nclibgBeG1wP9icicg6JZXeziaIyE4Mng1dbIbMsHTOx6z6389qpsw/640?wx_fmt=png&from=appmsg)

图4-5：器件旋转

___€3.___回顾

上述方式可用于史密斯圆图内部的任何阻抗匹配，总结一下过程：

1#：使用tx线技术通过恒定VSWR圆旋转阻抗ZL，直到它与Re\[z\]=1恒定电阻圆相交。

2#：使用串联电感或串联电容，实现完全匹配阻抗，实部等于1。

上述方法的问题在于它仅适用于单频段（无法实现双频段匹配），并且它需要一条tx线，这会占用太多空间，接下来的章节中会介绍其他方法。