# 【电机前沿】HEV集中绕组IPM电机无位置定向设计


> 原文地址: [https://mp.weixin.qq.com/s/517bLlDP9RE60B0rXXRrRA](https://mp.weixin.qq.com/s/517bLlDP9RE60B0rXXRrRA)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_000_6e6d80aceda4.gif)**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

原文：：《Sensorless-Oriented Design of Concentrated-Winding IPM Motors for HEV Drive Application》——Y.Kano, T.Kosaka

* * *

本文介绍一种为追求无位置控制下能可靠运行的电机的设计方法，定义了一个无位置安全运行区（SSOR）：

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_001_4fc231d25e18.png)

其中：

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_002_2b831b3ed949.png)

其中![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_003_414dcf9e80e2.png)是位置误差信号，![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_004_661b504609c9.png)为位置估算误差。

Fig.7 显示了Fig.6(a)下的![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_005_a00e29ea89a7.png)，![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_006_526127dd79bb.png)和![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_007_e12ca4383cb1.png)。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_008_ccb13d26ac5f.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_009_8433376dc750.png)

* * *

**1.无位置传感器为导向的IPMSM设计**

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_010_2adccf034590.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_011_c3c4751e6485.png)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_012_3affd37360d4.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_013_993006760d82.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_014_77494634ca91.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_015_0a21c7652fe7.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_016_c9f2c1fbe0b9.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_017_ed0f964843c3.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_018_e96f1e7c5294.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_019_3d2faa68c716.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_020_b189572f3657.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_021_0d7dfe7830b9.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_022_c7a76ca3e6b4.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_023_a1c03488d12f.png)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_024_2d9d0ef669be.png)

* * *

**2.****设计方案性能总结**

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_025_43ec755ed393.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_026_bbcec46e718a.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_027_6ff5e7ab3faf.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_028_0ad5651fae6e.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_029_83e117f4c98f.png)

* * *

**5.结论**

本提出了用于混动汽车领域的基于凸极性的无位置传感器驱动的内置永磁电机的设计方法。论文用有限元仿真研究电机结构如何影响无位置传感器的安全运行区（SSOR），随后提出了无传感器集中绕组内置永磁电机的设计优化方法。论文最后优化了一个100Nm，10kW，18槽12极的IPM电机以满足目标混动汽车的性能需求，并用MATLAB/SIMULINK 动态仿真验证了电机的性能。

* * *

感谢黄海林的翻译分享！

索取原文，请在留言区留下邮箱。

欢迎推荐优秀文献、国外电机最新咨询！

  

推荐链接：

[【电机内参】宝马工程师--分段斜极结构对同步电机振动噪音的影响研究](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484239&idx=1&sn=c4ffa79bffbc57fca9509b756f2ea1af&chksm=ea646055dd13e943f6e54b5b21da51bb3ee7cb9aabdf48c8ace0c3623ea665fc0d37c0a5cc55&scene=21#wechat_redirect)  

[【控制内参】低频信号注入的永磁同步电机无位置传感器的控制算法](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484206&idx=1&sn=d1a43a51c2a0ab0155d33e307ede43cb&chksm=ea646034dd13e9223d0b697c60982cac686c784e0dc72f7ea9d3b9f9fb66d042134a2342aabe&scene=21#wechat_redirect)  

[【电机内参】一种高绕组系数&高槽满率的电机方案](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484134&idx=1&sn=51cd2bd08b953f7334eacd9fc5088095&chksm=ea6461fcdd13e8eaa5b4c809fcf727f979ef1cd647b29619e0becd0c829a1ce63e1bc1382706&scene=21#wechat_redirect)

[【电机前沿】一种新颖的应用于混合动力汽车的磁场调制型双机械端口电机](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484111&idx=1&sn=cd7bf61262c4f1c1c4c337d0b333ad07&chksm=ea6461d5dd13e8c362236f82426829a18610659c08623e0c1bd11bbf4d501a26dc127c2dd061&scene=21#wechat_redirect)  

[【电机内参】永磁体新工艺对电机设计的挑战——晶界扩散技术(Grain-Boundary-Diffused Magnets)](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484088&idx=1&sn=2d1e138f1c826d5db98bf9024fc622db&chksm=ea6461a2dd13e8b4b3c2f03853845c81aea251848b2fe6187e8aad3e80c00b20329c1cd88d2b&scene=21#wechat_redirect)  

[【电机内参】东芝(TOSHIBA)电动/混动汽车电机技术发展解密](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484076&idx=1&sn=8d1d033fd276b5e819fe99291e802745&chksm=ea6461b6dd13e8a09a3b7a93bfb2f1b42ef92b48c011fd4ab01fd357da4a849bd3a383a81df5&scene=21#wechat_redirect)  

[【电机内参】通用电动汽车和混合动力汽车的电机技术解密](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484056&idx=1&sn=118f1786cfe0d4f9ce8cf1228a6eabbd&chksm=ea646182dd13e89447167a680b8e00dd138f2497d8fc2466a442b5ef8861cc6f4ae0759bf5e2&scene=21#wechat_redirect)  

  [玩转"Hair-Pin winding"——揭开新能源汽车发卡电机的神秘面纱](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484022&idx=1&sn=00df943e7995299fe6aa3bee71327dba&chksm=ea64616cdd13e87ac3b356cd29b2ab4ec33577929e70d9ebc4662fafa92daed6fc8c904f5010&scene=21#wechat_redirect)

  

长按图片，识别二维码，关注我哟

> ![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机前沿_HEV集中绕组IPM电机无位置定向设计_images\img_030_d7f135e99ea3.png)