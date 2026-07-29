# USB接口的EMC设计

原创 硬件笔记本 2023-06-16 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/Z\_ClH1ZSulgXuILgwOIBHQ](https://mp.weixin.qq.com/s/Z_ClH1ZSulgXuILgwOIBHQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

在提到干扰对USB的影响时，差分数据传输与简单的同轴电缆相比具有很大的优势。在感性干扰效应(磁场)情况下，导线的绞合可以弥补干扰效应。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\USB接口的EMC设计_images\img_002_c0565d4be5f8.png)

●USB控制器的输入/输出不是完全对称的，因此USB信号显示出共模干扰。

●Layout与HF/EMC不兼容，寄生电容和缺少波阻匹配会产生共模干扰。

●电路设计(USB滤波器)不充分，滤波器影响信号质量，和/或插损太低。

●接口设计(插座，外壳)不充分。不良的接地会减小电缆的屏蔽衰耗。滤波器具有不良的接地参考。

●USB电缆不对称、屏蔽不良以及没有足够好的接地。这种电缆会劣化信号质量，辐射信号谐波，对外部干扰源起不到足够的屏蔽衰减。

  

**保护元件的选择**

静电放电(ESD)保护的定义为：依照EN 61000-4-2标准防止ESD脉冲，依照EN 61000-4-5防止浪涌脉冲，以及依照EN 61000-4-4防止突发(EFT)脉冲。瞬态电压抑制器(TVS)二极管必须满足这些功能。

重要的是：为了保护诸如USB等快速数据线受到过压的破坏，应该使用具有低电容特性的TVS和陶瓷ESD抑制器，以免USB信号发生失真。TVS二极管的电容值不到1pF，电容值最高0.2pF的陶瓷ESD抑制器是保护USB端口的理想选择。

  

**不要忘了电源**

对于一个端到端的EMC兼容设计而言，对电源(VBUS)进行滤波也很重要。许多开发人员忽视了这一点，却不知道他们的产品为何通不过EMC实验室的测试。这里介绍了针对一个或两个USB端口的两种优化设计。两条USB线可以用TVS二极管加以保护。所有4条信号线以及公共电源都得到了很好的静电放电保护。进一步的优化可以通过用一个电流补偿式数据线扼流圈和电容，搭建一个LC滤波器滤除输入端的共模和差模干扰来实现。在电源端使用WE-CBF系列贴片磁珠可以实现卓越的抑制性能(图1)。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\USB接口的EMC设计_images\img_003_56483e037640.png)

图1  具有静电放电保护功能的双端口USB端口

  

单通道保护元件(如WE-VE系列静电放电抑制器)必须始终连接在信号线与地之间。不必使用小电容的静电放电抑制器来保护电源，普通的SMD变阻器就足够了。它可以吸收较高的能量和较高的电流，因此是设计的第一选择(图2)。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\USB接口的EMC设计_images\img_004_49990b15d16c.png)

　图2  与屏蔽数据线不同，电源端不必使用小电容的静电放电抑制

  

**针对USB端口的推荐**

从图3可以明显看出，有两条差分信号线(D+和D-)从插头连接器连接到TVS二极管，再通过电流补偿式数据线扼流圈连接到USB控制器。这样能够得到出色的静电放电保护功能，并能良好的抑制数据线对。VBUS通过TVS二极管路由到贴片磁珠。在贴片磁珠之后，可以插入额外的电容和另一个贴片磁珠来实现最大可能的PI滤波器衰减。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\USB接口的EMC设计_images\img_005_ad73858c89dc.png)

图3  USB端口保护

  

在非常敏感的IC和/或高可靠性开发案例中，通过两次连接TVS二极管引脚可以实现最优的静电放电保护效果(图4)。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\USB接口的EMC设计_images\img_006_ab2d6dac4759.png)

图4  USB端口的双重保护

  

希望采用单通道保护元件的开发人员可以使用WE-VE系列静电放电抑制器。这些抑制器总是必须从D+/D-连接到地。还要连接其它一些元件，如图5所示。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\USB接口的EMC设计_images\img_007_7914af8d8e90.png)

　图5  采用单通道元件的保护机制

**本文小结**

在EMC兼容设计中应避免风险。必须要指出的是，干扰会威胁到数据通信的完整性——特别是对于通过USB实现的数据传输而言。EMC不是“可有可无”，或用来满足什么法规和标准，而是一种质量指标。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。