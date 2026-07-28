# 基于非均匀环境建模与三阶Bezier曲线的平滑路径规划

原创 自动化学报 2017-06-19 17:59 北京

> 原文地址: [https://mp.weixin.qq.com/s/oCPmAx-W0h1HfK-q5X5czw](https://mp.weixin.qq.com/s/oCPmAx-W0h1HfK-q5X5czw)

点击蓝字，关注自动化学报！

![](http://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6ajib3a1w6icsYewKMp9StoML2C2plP1VZscz1n0eibI7GuFDKiaC5QKrAQ/0?wx_fmt=gif)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6ksgibOqSKhlJLw4WHSGrHz5OyMeyXsUUNhtLRC77GmBXHHichX9TuLGA/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6WAnVOIZ1JgGl0v6JJPe1icbJhST9eVibpBDz9utxOiaB2W8wX5jpgcTIA/0?wx_fmt=png)

  

装配效率低下

  

大型科学装置规模庞大，结构复杂，涉及元件类型与种类众多。在装置中使用的辅助工装体型庞大，装配任务繁重，仅仅依靠工作人员规划工装的运动，往往导致人员和工装的重复劳动，造成装配效率低下。图为美国NIF装置的实物图。

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6Qj99FGCPRU88mwTFbulM5LdUsV10M7GKzKqCBjV59HeFAcH2BeaRDA/0?wx_fmt=jpeg)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6Bf8SiaKcr11kTRyUaunMhKk2wHuFhTUUFw0ib4hxO8nIy0BVoibPlEhOw/0?wx_fmt=jpeg)

  

自动路径规划

  

结合靶场环境的布局特点和装配（维护）任务需求，利用移动机器人相关技术，实现大型辅助工装在复杂环境下的安全、可靠自动路径规划，能够在很大程度上提高装置的安装维护效率，对于装置从建设、到运行、再到维护的全生命周期均具有重要意义。图为辅助工装和我国在建的主机装置实物图。

利用Minkowski 和对障碍物进行膨胀，建立工装的C-空间。然后，采用线性四叉树结构以非均匀划分的方式建立环境模型。四叉树建立环境模型结果如下图所示。

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6BDoXmojbTP9jMqHVAX7Qsia9BXFEChMBWCauP6ibu2YTiaLq3FPLsiaAvw/0?wx_fmt=gif)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6W0HgyrLqib5h402Cq5dV8mLIoK0KicwQ5PKPNL134XurtfC84zzHYib8Q/0?wx_fmt=gif)

利用改进蚁群系统算法规划工装的运动路径，然后利用Bezier曲线建立转弯单元连接蚁群算法搜索路径点，获得一条曲率连续且满足曲率上界的可行路径。工装轨迹的规划结果如下图所示，能够满足工装的各种非完整性约束，提高工作效率。

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6iaiaghZoqZ7gGib3J8QD4YEIKPaDqasIl12gsnznh6QbEC6MK6eUAsQdg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6TMrg6u3icDgibNvN5BVB5ic01Eo6G2vjia2haxUJPqdUicMNtcLou56Cb7A/0?wx_fmt=png)

_**引用格式**_

卜新苹, 苏虎, 邹伟, 王鹏, 周海. 基于非均匀环境建模与三阶Bezier曲线的平滑路径规划. 自动化学报, 2017, 43(5): 710-724

**作者简介**

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6frp3qch9AZVPnv46ibaiaCLUaed1WEcYZ2fm7Z8q13Yxcy2ykVSlHHcQ/0?wx_fmt=jpeg)

**卜新苹**

中国科学院自动化研究所硕士研究生. 2013 年获得中国海洋大学学士学位. 主要研究方向为机器人运动优化与建模. 本文通信作者.

E-mail: xinping9102@126.com

  

**作者简介**

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6DIJiat5Ur3DLIoK2VibnEtHECdTiaEcFicAOAuu0wHbELeC8JFJuRtsXBw/0?wx_fmt=jpeg)

**苏虎**

中国科学院自动化研究所助理研究员. 2013 年获得中国科学院自动化研究所博士学位. 主要研究方向为机器人控制, 系统建模与仿真.

E-mail: hu.su@ia.ac.cn

  

**作者简介**

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia66HQWPKYOghPrqia7aMqfduibuTYDsa6xY9u88LaDP6JJicfybMOcUBC0A/0?wx_fmt=jpeg)

**邹伟**

中国科学院自动化研究所研究员. 2003 年获得中国科学院自动化研究所博士学位. 主要研究方向为智能机器人, 视觉伺服, 机器视觉以及模式识别.

E-mail: wei.zou@ia.ac.cn

  

**作者简介**

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6CCTbIvtr84cF1atMClooenGTf85hXgpKE0exzibQ0uDpWvUibz1NYa6Q/0?wx_fmt=jpeg)

**王鹏**

中国科学院自动化研究所副研究员. 2010 年获得中国科学院自动化研究所博士学位. 主要研究方向为机器视觉, 机器人系统及应用, 系统建模与仿真.

E-mail: peng\_wang@ia.ac.cn

  

**作者简介**

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6Nx8XBiawN9FMuMrXpZlJLud1RssDhEVRfXgfSdNwvPl2OWxqfCVFic5g/0?wx_fmt=jpeg)

**周海**

中国工程物理研究院激光聚变研究中心研究员. 2004 年获得四川大学机械工程硕士学位. 主要研究方向为高功率激光技术研究.

E-mail: a687097@163.com

  

热点文章推荐

[扑翼飞行器的建模与控制研究进展](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063320&idx=1&sn=725143f069b84dbbff126d63741457c1&chksm=8131ce55b646474380c37b5e01da1c4ea6679f51fa1852f14e560d37479dad0e085bd2b7fae6&scene=21#wechat_redirect)  

[刘德荣教授最新力作：基于迭代神经动态规划的数据驱动非线性近似最优调节](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063208&idx=1&sn=618cd7625c1adeacfca25703ba35719e&chksm=8131c9e5b64640f3b24a3429862e7fbca69e09f0f7196f8f41784fc253dede1725aa43d9569a&scene=21#wechat_redirect)  

[人脸微表情识别：一颦一笑皆线索](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063205&idx=1&sn=aa6d7e2ace55f17222c99ae66cf342fb&chksm=8131c9e8b64640fe4e3115e56a9e04dc51a6067decafbc6246b676af4cffcee6646890e2a6a0&scene=21#wechat_redirect)  

[生成式对抗网络GAN的研究进展与展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063183&idx=1&sn=64a05ba464c29d32ec5e09c960aa0b2e&chksm=8131c9c2b64640d4362611c24d5dc8cf0d614ad4cce783ba6c7ee0abfb1053e12abde1a8fa7a&scene=21#wechat_redirect)  

[平行机器人与平行无人系统——智能无人载具的研究新进展](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063159&idx=1&sn=85511333c6ef151772c12f1ce1865ea8&chksm=8131c93ab646402c2a88349b771786364392abd4b017986beb891cef5389fab360ca149551a9&scene=21#wechat_redirect)  

[自动化学报|高被引学者张化光带您走近能源互联网](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651063148&idx=1&sn=64a14f3d1c92fd29267cc1bf3bf1cd99&chksm=8131c921b646403797f9a68c5a8a96bd1a5aa14eaa0b138bc66f1f56836dcbd2614ef0e11eb0&scene=21#wechat_redirect)  

  

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6AWziawuKJbIYRowJkVKuCWICdhxV9LblliblWrflzE6hM6vL1HnKicWBA/0?wx_fmt=png)

欢迎扫描二维码、长按图片识别关注《自动化学报》中文版订阅号aas1963，服务号自动化学报和英文版服务号！

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia67f5eD1picb2icfWAK5lOqJghJGTKPXIa9an2icx67pcHMlJDDtYJibtEKQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6MTRhFR4sfAebt2ZEtnP3CRYjWaIVTyYju9aaGbAMqRnRoprzW88tnA/0?wx_fmt=jpeg)

JAS《自动化学报》（英文版）

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia67f5eD1picb2icfWAK5lOqJghJGTKPXIa9an2icx67pcHMlJDDtYJibtEKQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6bTbSJnOA9Z11KeAIyA73Fsfrx6J6Au4HkriarovYE9sXRsBE6jBs13g/0?wx_fmt=jpeg)

自动化学报服务号

![](http://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia67f5eD1picb2icfWAK5lOqJghJGTKPXIa9an2icx67pcHMlJDDtYJibtEKQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6Q5XvxPzKhVSwibh9IiaubCCrqdV2vAFGofTUxQCkkKiclGFChico5LlTIQ/0?wx_fmt=jpeg)

自动化学报订阅号

  

联系我们

Tel:  010-82544653（日常咨询和稿件处理） 

        010-82544677（录用后稿件处理）

Fax: 010-82544497

Email: aas@ia.ac.cn（日常咨询和稿件处理）

          aas\_editor@ia.ac.cn（录用后稿件处理）

http://www.aas.net.cn

![](http://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH45D7xeGVIDCyvicoZ8Ne5Xia6GYgr5noTRa53PTmGrondACPLWhJicPJPQmnydhtr7H94SbicA7Ln5tLQ/0?wx_fmt=gif)

**▼点击阅读原文**