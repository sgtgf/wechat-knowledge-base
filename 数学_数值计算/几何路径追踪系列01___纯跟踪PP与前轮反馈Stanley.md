# 几何路径追踪系列01---纯跟踪PP与前轮反馈Stanley


> 原文地址: [https://mp.weixin.qq.com/s/FOFdUEbs8r1cDDHKtCWyrg](https://mp.weixin.qq.com/s/FOFdUEbs8r1cDDHKtCWyrg)

在机器人领域，一种最受欢迎的路径追踪算法就是几何路径追踪。这些方法主要利用**车辆和路径之间的几何关系**去设计相应的控制律解决路径跟踪问题。

****一、纯跟踪******PP(Pure Pursuit)**

**![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPkIMqFgskShQEoAr6nzo6gAlMs6Rt0icCBex7tiamw0Boibib1mw83pVtGw/640?wx_fmt=png&from=appmsg)**

  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPFn8QNUVS3iceibkLMvpkZDZoyiaV2FoC5eicsficx98o36QFlyU13mxAwBQ/640?wx_fmt=png&from=appmsg): 预瞄准距离

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPF1exFDtdicUOiaQtCY7nV3ZRDsavCuoMhRbzf5VKiaiaCNMxoLNAlDicgdw/640?wx_fmt=png&from=appmsg)：目标跟踪点

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPpArLBOvaiafQsmKUqI5Y5EzGgZiaEEE1b9STKFEzR50aM69epQdbgoFA/640?wx_fmt=png&from=appmsg)：预瞄准方向与车辆航向之间的夹角，即车辆坐标系下预瞄准的朝向角

R：瞬时旋转半径，也是后轴位置与车辆前方目标点之间的圆弧半径  

由正弦定理可知：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPwQCU1ic8BQo37pTA8kM4BKPmsC1GesRyHnRyQS80jwmOhy8ibpibwFICA/640?wx_fmt=png&from=appmsg)

实际应用中，这个![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPpArLBOvaiafQsmKUqI5Y5EzGgZiaEEE1b9STKFEzR50aM69epQdbgoFA/640?wx_fmt=png&from=appmsg)不太好求，故可用另一张图进一步化简  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZP8JEDVl51zq19TjxvKpjib24nLhW56ibv110826iaMpwffDmzOKWQ996hg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPkdj15RvSicGmL7w7Bo2SGE8ZcMyXJxOYicA7j0kY8ianYr8YLhwALXVGg/640?wx_fmt=png&from=appmsg)

****二、前轮反馈Stanley********![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPyDBUkHFP3q4LMTicC7zeDKZnZ2gHwDltM8ETGOM0oEPmgDkEo6iaRnMg/640?wx_fmt=png&from=appmsg)****

Stanley是一种基位置误差![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPiaxRurBdIaCEJbYeref4ib6BJkS0n4SSEb4VBXZZNy2PuxIHRa3BFsfQ/640?wx_fmt=png&from=appmsg)的非线性反馈函数，它是车辆前轴中心点与目标路径最近点![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPSeGAiaaHRndzkvAKkRicfam7QVQw7nIUWq0ZcL7eOWRcQEvNWhoZUkww/640?wx_fmt=png&from=appmsg)的距离，由上图可得角度误差为

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPFwPCslJm7WShb6N1vEnLJPXh3ibBjss9tjfGl9g0UK08fWh3KPzFL6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPmBup1A0Ag4nibvYAtL9ibANCzvcHbCUl6rH1vKZCp7Ihd14zCYskTEDg/640?wx_fmt=png&from=appmsg)：车辆实际航向角

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPKpOTwa2F6J0rQoR7micz517Apml4hcyBgwEiasr06HiaB9OIOdxPq4jKA/640?wx_fmt=png&from=appmsg):  最近点的期望角度

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPmuw3dgjkvJDiaAmzH6Hpn4h8eQ6jAPGMcl3A9LMA8HPDmBfUjEjkicsg/640?wx_fmt=png&from=appmsg)

同时可知，![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZP7j7en5icLhd4M0kJ0gCTmkAVHYqlHEfS6ekEFLEFyRRo14GxZ0kLryw/640?wx_fmt=png&from=appmsg)**的物理意义是在当前车速下，车辆前进前视距离所需的时间的倒数。**

所需的前轮转角为

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG414PwsmElVIp34Bia5voRZZPOOxnmiaQrIGWCxGOu9N8sbJURCswNiagGTGDFaok5Wkh5ziane1MeLNLg/640?wx_fmt=png&from=appmsg)

****三、总结****

PP与ST比较简单，代码就不说了，需要注意的是位置及角度误差符号。至此，车辆的主流控制算法已经介绍完了。根据我的经验，算法理解及实践是一回事，工程化其实又是另一回事，这中间会有很多让你“抓狂”的环节。车辆控制暂时就先告一段落了，后续的主要更新内容是基于B样条曲线的轨迹拟合以及信息融合、SLAM相关。