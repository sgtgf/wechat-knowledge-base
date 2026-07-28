# Smith Chart：史密斯图圆和阻抗匹配-6


> 原文地址: [https://mp.weixin.qq.com/s/stgpwTWUQ4JQ99qJ-HxeJg](https://mp.weixin.qq.com/s/stgpwTWUQ4JQ99qJ-HxeJg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSrfKib8AibPT9IcfgAInIag1k30UY7c18BfDxKwUFPr7Wh09O9Xx9ZzcKbKuur5ztib8f1J4B3GhWlA/640?wx_fmt=png&from=appmsg)

_★★★__SMC-6---Parallel____**★★★**___

引言：标准的史密斯阻抗圆图使串联电感和电容的使用变得容易，史密斯导纳圆图将使并联电感和电容的计算变得简单，本节将首先研究并联电感对负载ZL的影响。

___€1.并联电感___

并联电感

电感的归一化导纳y\_ind由下式给出：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ3Y6iaEQhP32QS1OIRfoxjJ2LFL5HowCQ2fsexOn3ic8kSSTtyuE7ak7D0acX4HvamoeWpjbfpAd3Q/640?wx_fmt=png&from=appmsg)

回想一下，如果将导纳y\_ind与负载导纳y\_L并联放置，则这两个导纳相加：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfLIvFImF8tB4XkZugbvwHiaxDz4baO7FhTZO6NpDePskibhRkMCIcVBSQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfjsoqGZ6bxvia7DFuGZOQI1yDMtgLvs4E2Z60mZvR1Crv846ewwTZCMA/640?wx_fmt=png&from=appmsg)

图6-1：并连电路中的导纳

由于电感的导纳是虚数（即Re\[y\_ind\]=0），因此并联电感的结果是改变天线（负载）的电纳，也就是说，我们只是改变了天线导纳的虚部，并联电感的作用是使天线的阻抗/导纳沿等电导圆移动。例如，假设y\_L=1+i\*1，那么Z\_L= 0.5-i\*0.5，如果我们想匹配负载（使其位于史密斯圆图的中心），那么负载（天线）和电感的并联组合等于1.0。假设Z0=50Ω，并在f=850MHz时进行阻抗匹配，我们可以用并联电感抵消负载的电纳：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ3Y6iaEQhP32QS1OIRfoxjJOnb5ibBzAjj2PUaaHOZwT5umTV2487n5GXkBibFib3dh7RA87iaAu33iaeg/640?wx_fmt=png&from=appmsg)

导纳y\_1、y\_L和y\_IND如图6-2所示，注意棕色路径，通过使用并联电感，天线y\_L可以沿恒定电导圆Re\[y\]=1.0逆时针移动（从DP1移动到TP2）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfx9icsNQMlJgL3ywtt2xm2xukCH72rY8tpJobYHibib69WDbveGg2G8rkA/640?wx_fmt=png&from=appmsg)

图6-2：使用并联电感实现负载导纳匹配

___€2.___并联电容

电容的归一化导纳y\_C由下式给出：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ3Y6iaEQhP32QS1OIRfoxjJibwBa4eXYxR7tEd59cJibnSkXrOyYzZhvDaWiaiaEZiapq22ac5O2xdj4AA/640?wx_fmt=png&from=appmsg)

图6-3显示了与负载并联的电容。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfk1EKEs3r59iczsES4cUmyIiaQwsw3AFffHg83uhduuhOQ14HPUia9LKzA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfic6aiceicHWicHfv400ibQE3vmDodLib6YlygLIOHsx7zbgwKOOdZ9zutFkg/640?wx_fmt=png&from=appmsg)

图6-3：电容和负载并联

通过一个例子来说明并联电容的影响，假设y\_L=0.3-i\*5，那么Z\_L=0.012+i\*0.1993。为了消除y\_L中的电纳，我们可以并联一个i\*5的电容，假设Z0=50Ω且f=2.4GHz，那么可以计算出C：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ3Y6iaEQhP32QS1OIRfoxjJZibgFVJHakjYde1ZUHatibsDDb1FAUlY6fsUAxG1vaY6knAZGeX1nItw/640?wx_fmt=png&from=appmsg)

图6-4所显示了导纳y\_1、y\_L和y\_C，注意棕色路径，通过使用并联电容，天线y\_L可以沿恒定电导圆Re\[y\]=0.3顺时针移动。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfx2SbSPbc3X6GBpm0LPtAM0iacCO4NufvnT1jevKXic3k8HZ3gkyu3kWA/640?wx_fmt=png&from=appmsg)

图6-4：使用并联电容进行负载导纳匹配

在上述例子中，我们无法用并联电容或电感完美地匹配y\_1，因为它们只能让我们沿着恒定的电纳曲线移动，本例的重点是理解并联电容如何改变史密斯圆图上的导纳（负载）。

___€3.___总结

1#：并联电感使导纳（天线）沿恒定电导圆逆时针方向移动

2#：并联电容使导纳（天线）沿恒定电导圆顺时针方向移动