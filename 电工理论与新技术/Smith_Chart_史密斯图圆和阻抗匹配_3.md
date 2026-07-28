# Smith Chart：史密斯图圆和阻抗匹配-3


> 原文地址: [https://mp.weixin.qq.com/s/4rUvPByN3Eap\_NvdKC9K3g](https://mp.weixin.qq.com/s/4rUvPByN3Eap_NvdKC9K3g)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSrfKib8AibPT9IcfgAInIag1r03BVVGNnsz93npt47Qhlic2C5eU3pDxFZ4lvHXmIV7ZI2r3ofdtK1Q/640?wx_fmt=png&from=appmsg)

_★★★__SMC-3---Series____**★★★**___

引言：阻抗匹配是消除失配损耗，最小化反射系数，以减少负载（天线）的反射，并最大化传递到天线的功率的过程。为了实现天线或负载阻抗与传输线匹配，也就是ZL=Z0（或Zin=Z0）。在史密斯圆图术语中，即将阻抗ZL移向史密斯圆图的中心，此时反射系数Γ为0，本节将说明串联电感或串联电容对阻抗的影响来开始阻抗匹配。

___€1.串联电感___  

电感的归一化阻抗由下式给出：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQCOnLyPY3eWD0GicWTDmaZrZEcCxeEhpII0VGU1bGLl5E3N167L4XJpOwzAjrmiaCeTxJlSgaWH4ng/640?wx_fmt=png&from=appmsg)

其中f是频率，L是电感值，如图3-1所示，讨论串联电感对负载阻抗ZL的作用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfgpnjAn8YW8DNqlXUnFloCem86G9cwbuyzhFZDuKyybCDKdSnzRB1Wg/640?wx_fmt=png&from=appmsg)

图3-1：串联电感器和负载阻抗ZL

在数学上，级连阻抗将相加：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQCOnLyPY3eWD0GicWTDmaZr0ZDialTkLic2ggtbBUh0TOZhwxULuuEMt0AYtP89AMFuKqEzrBwbzJCw/640?wx_fmt=png&from=appmsg)

可以看到串联电感将沿着史密斯圆图的恒定电阻圈移动阻抗ZL，因此如果负载阻抗ZL的电抗（X）为负，那么我们可以使用串联电感来抵消该电抗，使输入阻抗纯为实数。

例如当f=1GHz时，设ZL=1-i2，然后可以用串联电感抵消电抗，如下计算式所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQCOnLyPY3eWD0GicWTDmaZr8bZ7cqoLLRbiapOPacJ0t8438tuwM2LrP1JJTZq3DIqgh2IezDe1ia3w/640?wx_fmt=png&from=appmsg)

表明我们可以用15.9nH串联电感抵消负载的电抗，图3-2中的史密斯圆图展示了这一过程：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKf1RMpTiaVllCSachG1jcTpX8kEqswicuhHF33DMV9Huiagwn8Q0TCNO5rA/640?wx_fmt=png&from=appmsg)

图3-2：串联电感器匹配负载阻抗ZL

需要注意的是，阻抗ZL沿恒定电阻圆（Re\[z\]=1）平移到史密斯圆图的中心，通过增加电感L，我们可以将阻抗ZL沿恒定电阻圈移动，在这种情况下，我们将阻抗ZL与史密斯圆图的中心完全匹配，因此图3-2中不会发生反射。但只有当负载阻抗从实部等于1开始时，我们才能这样做，后面将考虑更一般的案例。

___€2.串联电容___

电容的归一化阻抗由下式给出：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQCOnLyPY3eWD0GicWTDmaZreB4GUaWmuzFNrkJDU8hlXFz1YyicvNzOrn3wsvcfvCbLcxaicBzx9x5g/640?wx_fmt=png&from=appmsg)

其中f是频率，C是以F为单位的电容值，需要注意的是，电容会产生负电抗，讨论串联电容对负载阻抗ZL的作用如图3-3所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKf0F1VedbH7MnpFLdzzQWCfAkFQkvFmamF5uyoRYexspmH3rCSpSYrbw/640?wx_fmt=png&from=appmsg)

图3-3：串联电容和负载阻抗ZL

在数学上，级数阻抗将相加：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRLH62pJueiaZibawbbZ71g2PUF4OeialVic7gpgELR6wEVicjXQBVicISIosBBaX3285Loy34iaic1u22kaA/640?wx_fmt=png&from=appmsg)

可以看到串联电容将沿着史密斯圆图的恒定电阻圆移动阻抗ZL，但方向与电感移动的方向相反。如果负载阻抗ZL的电抗（X）为正，那么我们可以使用串联电容来抵消该电抗，使输入阻抗纯为实数。

例如当f=500MHz时，设ZL=0.3+i，然后我们可以用串联电容抵消电抗，由以下公式确定：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQCOnLyPY3eWD0GicWTDmaZrFp2bRCB0PXQM7RzXdJKianI5OK1RhksaiatyHdsPib0walAtef44ia5vRg/640?wx_fmt=png&from=appmsg)

表明我们可以用6.4pF串联电容抵消负载的电抗，图3-4中的史密斯圆图展示了这一过程：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRQ9tFNfQ2CBc8xzD962MKfyqib868wxQmicQY7XjUJRcBBYibeHF1pBh9an3uhZTo2xrchLWI59laMQ/640?wx_fmt=png&from=appmsg)

图3-4：串联电容器消除负载阻抗ZL的电抗

需要注意的是，阻抗ZL沿恒定电阻圆（Re\[z\]=0.3）平移到史密斯圆图的赤道，通过降低电容C，我们可以将阻抗ZL沿恒定电阻圈移动得更远（请注意，电容的电抗与电容成反比）。在这种情况下，我们没有将负载阻抗ZL与史密斯圆图的中心完全匹配，反射系数降低，但并不理想。

___€3.___总结

在本节中，串联电感以顺时针方式沿恒定电阻圆移动负载阻抗，如图3-2所示，串联电容以逆时针方式沿恒定电阻圈移动负载阻抗，如图3-4所示。