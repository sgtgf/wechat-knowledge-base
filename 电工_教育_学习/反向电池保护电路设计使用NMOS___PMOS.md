# 反向电池保护电路设计使用NMOS / PMOS

原创 电路一点通 2024-04-16 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/nmCQuIFt9KhCfIpRTeNeLw](https://mp.weixin.qq.com/s/nmCQuIFt9KhCfIpRTeNeLw)

相比二极管，使用MOS管作为电池反向保护的电路设计并不常见。然而常用的二极管反向保护也存在一些缺点：压降很高。这在低压电流中容易产生许多问题，相反，MOS管反而解决了这个问题。

![](D:\电脑文件\公众号知识库\电工_教育_学习\反向电池保护电路设计使用NMOS___PMOS_images\img_000_2715148bc4cd.other)

![](D:\电脑文件\公众号知识库\电工_教育_学习\反向电池保护电路设计使用NMOS___PMOS_images\img_001_d9675b4ef0bd.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\反向电池保护电路设计使用NMOS___PMOS_images\img_002_0b2a21d3f48e.other)

为什么需要反向保护?

在直流系统中，当电池接反时，使用电池作为电源的电路会遭到损坏。

今天我们主要分为NMOS和PMOS两部分进行讲解。

我们看下面这个电路：NMOS

![](D:\电脑文件\公众号知识库\电工_教育_学习\反向电池保护电路设计使用NMOS___PMOS_images\img_003_d35afa340445.png)

电路开启时，电流从电池的正极端子流向设备，随后流向体二极管，最后流向电池的负极端子。

此时，体二极管在正向偏置时导通。

当体二极管打开时，现有的电流在电路中循环。

这时栅极电压为

Vgs=Vg-Vs

Vg=V电池

Vs=二极管压降

VGS = VG – VS = Vbattery – 二极管压降

这会导致施加到MOSFET栅极到源极的正电平。因此，NMOS将开始导通，电流将流向沟道而并非二极管。

我们看下面的电路：PMOS

![](D:\电脑文件\公众号知识库\电工_教育_学习\反向电池保护电路设计使用NMOS___PMOS_images\img_004_fe432a026482.png)

当电池电压存在时，电流流经体二极管，体二极管导通；这是因为阳极侧施加了正电压，但电池电压必须高于二极管的正向偏置电压。

当二极管为正向偏置时，MOSFET源极中的电压电平，回味电池电压减去体二极管的压降。

MOSFET的栅极连接到电池负极端子或者接地，意味着施加到栅极和源极的电压为：

Vgs=Vg-VS

Vg=0V

VS = Vbattery – Vdrop（这是一个正值）

VGS = VG – VS = 0V – 正电压 = 负电压

当施加到栅极与源极的电压为负时，PMOS将会被激活。

不过，它需要满足每个MOSFET栅极到源极电压的要求，一般额定电压限制在+/-20V。

当MOSFET激活时，通道将会关闭，电流流经MOS，不会流向体二极管。

在反向电压电路中，NMOS和PMOS这两种电路，电池反向期间，电路电流基本为零。这相当于不允许MOS管电流流动，从而保护连接到电池的电路或者设备。

MOSFET作为反向电池保护，连接的方式相比二极管会复杂一些，但它能够实现较低的压降，性能较高，因此它非常适用于低压应用。

**\--->精选好看<---**

-   [**反激电源拓扑CCM与DCM的特点**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247520234&idx=1&sn=4526d35430b9fda3ef23aa659cf326d4&chksm=fcef6c88cb98e59ebffcaf974a9224a2e78d6219e25f88a94d16e871fc4c69eab1992af8cfd2&scene=21#wechat_redirect)
    
-   [**ADC采祥保持电路、比较器原理解析**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247520397&idx=2&sn=4578687a912ffc34153f518b5f046e19&chksm=fcef73efcb98faf9392ec2848eceebfa6cef6396612fdff42a758ed7b99b664e7763ea14527a&scene=21#wechat_redirect)
    
-   [**LLC开关频率与谐振频率**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247520228&idx=2&sn=765dced099484bb338cefbe04e2c0dc5&chksm=fcef6c86cb98e59099a13be21b43b98a9d57e14893913b9355589d52fce199a711a43aba4be4&scene=21#wechat_redirect)