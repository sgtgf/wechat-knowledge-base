# 奇异值分解SVD系列02---基变换


> 原文地址: [https://mp.weixin.qq.com/s/libCfcu4X\_7fqe6hhAi2gw](https://mp.weixin.qq.com/s/libCfcu4X_7fqe6hhAi2gw)

**一、不同基下的向量变换**  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2R82Ygia3diadfKuVClE8BDYjTia6vlES6AXpdq11RDr6zzntEg2LERGwg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2tgpPDFJ4NKBic6QgYM1qFqYKkr2jP1RKw4etEeNv2wtz5LuKe6NZCeA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb21Yx99ERGt6VNGNQfvP45Ffewsiaen1Bw6zhlKXNwZfrJW5QicVdechjw/640?wx_fmt=png&from=appmsg)

**即不同基下，同一向量的变换矩阵互为可逆矩阵**

**二、不同基下的空间变换**

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2pxR9RQSEQBpcCrz7oGMd4v2RrJ3b1UAbstMQUddiaaoT0cORyfl9ibhA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2Bca1bicEiclEJu0VOnadA5t6h0AdDKc1NXY2NE3TibicZAn6hv9uMBlk1w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2Lhia4OrrM36AUlBUy6trkTWduYhdichq7ysaLYXqn9j4vu3Lx9ceu76w/640?wx_fmt=png&from=appmsg)

**重点：**![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH23wumz0rzTtDicZwEp3fGIuqHjwic2YiatmcOJeMrFShV4wugV1VZGe5Tw/640?wx_fmt=png&from=appmsg)**表示的是不同基向量下同一变换的转化问题**

******三、思考  
******

上述，描述红色基下的旋转变换M时，首先将红色基下的向量x通过矩阵P变为标准正交基下的向量表示，然后将用标准正交基下的变换矩阵A进行旋转变换，最后将得到的标准正交基下的向量通过变换矩阵![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2AcvDZwSLicWZuxzp4cicgWGdXD1cZccKGtHAvlA3iaaK4RrvnfxUesYBw/640?wx_fmt=png&from=appmsg)变回在红色基下的表示，那这个矩阵P是怎么选择的呢？