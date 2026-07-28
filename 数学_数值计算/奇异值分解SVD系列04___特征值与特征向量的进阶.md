# 奇异值分解SVD系列04---特征值与特征向量的进阶


> 原文地址: [https://mp.weixin.qq.com/s/uaCSm8ltBEnocnM-0cLa2Q](https://mp.weixin.qq.com/s/uaCSm8ltBEnocnM-0cLa2Q)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2JYLqtgmJQsAUdiaUz2ogWlwLxLcpjKsJaj7Me4tE96HlWW0IuOOwraw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2tlZ0OEO9KCiaibR11xA9Aial7lZjOJhflYib7yBeBXjN7ykZsqBhCEoISg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2v9lA2qEBHkoLaBQibhgDOaajjBL6zfVmAH9slG45IL2NHqdm6tC6wgA/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2YK3yiay6xoOmJjuhtTcq3AzjaynicfcB4AbDpSLSNziaafcwiaj9z3fM1A/640?wx_fmt=png&from=appmsg)

**倒墙点1：特征向量坐标系下，线性变换的视角**

待变换向量![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2AnB9JxC78tPTNck8DiaPStEiaFZdR3y1c1MZ6DALlFgdnXEoCvrkgicxQ/640?wx_fmt=png&from=appmsg)，被表示成线性无关的特征向量组的线性组合的形式，实际上x就是在特征向量坐标系下的坐标值，被变换成标准正交坐标系下的坐标值；以特征向量坐标系的视角来看：

第1次变换为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb29ic6hGyEObLeKWOCk0usH1pgYNUlFfibeLhgBlgkPX0kzKGs5BAaT7icQ/640?wx_fmt=png&from=appmsg)

变换矩阵为I，之前在特征向量坐标系下的向量x，此次变换后，可以被看成标准正交坐标系下的向量。

 第2次变换为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2iaRltnrUiaBcFG68lJNosgBFfoXxOYQgMYnIIgliaLYjoCdJYpibBsPSSA/640?wx_fmt=png&from=appmsg)

 相当于在正交坐标系下，对第1次变换后的向量进行缩放。

 第3次变换为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2hm8BcybA2ME5tmAlSYibbzicNbGwZrJvtSLofViacZdiaMREDwrNr5ghWw/640?wx_fmt=png&from=appmsg)

 将正交坐标系下第2次缩放后的向量变换成特征向量坐标系下的坐标。

上述变换可描述成：  

![](https://mmbiz.qpic.cn/mmbiz_jpg/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2IMAlCUemxXT4Lia8bMKFQicgLP1ZvR3BqAh76QhicDxJpb0ctQiaS0hLgQ/640?wx_fmt=jpeg&from=appmsg)

一个实例为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2GhEWDN9mLhGMpvpKrK5GnfQ7ETicZKTXcynVbgLRUrB7OQvRtg8vTbg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2Ll50szy1ViaBgxg2FIzFSd7D4RcPYCe80ibPFiaTe5GQR0e1kS7ic2CCDw/640?wx_fmt=png&from=appmsg)

**倒墙点2：标准正交**坐标系下，其变换的视角****

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2dxnKMbicnWDeOs5LXquoqPF36sZ3JLmAj3XDE3AqW9icAyfxqbms998A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2KCiaIhxib08k2pOneC3XP2Pgib7kwSDsvRqxHZL6NjdmHxjEGsR2Uc5Xw/640?wx_fmt=png&from=appmsg)是标准正交坐标系下的向量，需要在标准正交坐标系下进行某种变换A,假设P为正交矩阵，则

第1步：![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2NgFyeWq7ibQAsicWzWuYWPucLqUcwYdoZlv4k0TQ3EIDzaaN7l04E5bw/640?wx_fmt=png&from=appmsg)，将标准正交坐标系下的向量转换为特征向量坐标系下的向量；

第2步：![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2HibUdcIHflVHiapuk5ibOsKQqibTw44q5tAod9uibzHqtyZr97KFweCymNA/640?wx_fmt=png&from=appmsg)，在特征向量坐标系下进行缩放变换，因为![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2dTDOSRMXIDHwBSBIe7MaQZHclic3ib8hc3akHSpYFicf7gBzia8mS1Rdtg/640?wx_fmt=png&from=appmsg)描述的变换为简单的缩放变换，而第1次变换后的向量正好是特征向量坐标系下的向量，故可以直接进行缩放变换。

第3步：![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2HEKpOAY4X00PAwYzvGHoMt7zJ1l2Q0GnB4x2CHONtWccomyLcvIjeQ/640?wx_fmt=png&from=appmsg)，变换回标准正交坐标系下的向量，因为此次是以标准正交坐标系的视角，输入向量![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2KCiaIhxib08k2pOneC3XP2Pgib7kwSDsvRqxHZL6NjdmHxjEGsR2Uc5Xw/640?wx_fmt=png&from=appmsg)也是标准正交坐标系下的向量，故还需要将向量转换回标准正交坐标系下，而同一向量在不同坐标系下互转的矩阵是互逆的，故第1步为![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2AcvDZwSLicWZuxzp4cicgWGdXD1cZccKGtHAvlA3iaaK4RrvnfxUesYBw/640?wx_fmt=png&from=appmsg)，则该步应为![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41uicsCDRDEDuHVWhibZzTLb2tknp9BAYSTuhYJfdXox09Ymbww8hRFibozIicmQeUpbUo85yBwvn1Azg/640?wx_fmt=png&from=appmsg)。

可以看出：**A描述的是1个变换，站在标准正交坐标系下，不太好看出到底是什么变换。但如果A可以特征变换，即相似对角化，则可以看出A描述的是个缩放变换，只不过不在标准正交坐标系下，而是在其特征向量坐标系下。故可首先将标准正交坐标系下的向量转成特征向量坐标系下，然后在特征向量坐标系下做简单的缩放变换，然后再转回来。**

**思考：**

上述的A是可对角化的方阵，比如实对称矩阵，通过特征变换是很理想的。但并不是每个方阵都可以相似对角化，且非方阵又该怎么办呢？