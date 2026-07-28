# CAN总线防护电路

原创 硬件笔记本 2024-08-17 10:35 四川

> 原文地址: [https://mp.weixin.qq.com/s/3nc2YAIO-dUZFwLxazFKyQ](https://mp.weixin.qq.com/s/3nc2YAIO-dUZFwLxazFKyQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjOcH0QWoH3WWjUgwt7jPvyKwia5aDfUiaACQ06yKJVVSwsC1vckxHGlV83X01RjQjU64MenC3636FA/640?wx_fmt=png&from=appmsg)

正向工作通路

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjOcH0QWoH3WWjUgwt7jPvyNLTtLl4AX1WGnK9Qia7QGUEntXbQqjvvQW7pYxARHqdnljaZkwAh5aw/640?wx_fmt=png&from=appmsg)

负向工作通路

  

差模浪涌防护电路工作通路

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjOcH0QWoH3WWjUgwt7jPvyJZO1jfXVVI8UOFMH5tp74RZoqSB596FWX1HMncWKfzOsiblC5sGLN7Q/640?wx_fmt=png&from=appmsg)

正向共模工作通路（负向与此类似）

  

# 静电防护工作原理说明

静电骚扰信号的脉宽很窄（pS级），能量不大，但对芯片的危害是致命的。我们目前使用的CAN芯片都无法满足8KV接触静电要求，所以必须在靠近端口的前端串入反应速度很快的TVS管进行电压钳位。同时静电会随着时间在Y电容上逐步累积，因此必需提供放电通道。辅助电源的参考地VCOMGND的Y电容静电可通过电阻实现泄放，代价是电阻必须满足安规耐压和绝缘电阻的要求。

  

# CS**防护工作原理说明**

对于CAN总线电路而言，传导抗扰测试的是电路的平衡能力，判据是通信波形不能因骚扰而产生误码，导致通信中断。测试问题取决于两个方面，一方面是电路（集中参数和分布参数）的对称平衡能力，集中参数可从电路拓扑和参数选择上保证，但是分布参数的影响则很难控制，取决于走线和周围的噪声源。另一方面是测试时的骚扰源的共模能量大小（电压型或电流型，直接或间接耦合）。由于总线控制器芯片可识别的波形电平误差范围是固定的，因此总线电路的不平衡度与骚扰源电平的乘积必须小于通信芯片可识别的误差范围。所以在端口串入阻抗较大的共模电感以衰减骚扰能量是最直接和最有效的办法。由于目前对CS的对模块影响的工作机理还不是十分清楚，目前还不能给出很清晰的分析过程，后续待认识提高后，再做升级。

  

# 5.4 辐射防护工作原理说明

CAN总线的辐射问题实际上是数字电路问题（它的差分信号传输波特率目前是125K），从以往的许多经验来看，主要是辅助电源、主功率电路和保护地等的高频干扰信号耦合进CAN总线电路，再通过模块与监控联接的通讯线发射出去，故其往往成为一个重要辐射源。因此要处理CAN总线的辐射问题，要通过加入EMI滤波器的方式掐断源头的耦合途径，避免CAN成为噪声传播路径。CAN部分的辅助电源串入共模电感，并在其前端就近通过Y电容将其噪声泄放到机壳地上，共模电感使CAN被引入的噪声被大大衰减。

  

由于布局和走线的原因，CAN芯片至CAN端口的走线很难做到短且完全避开强干扰源，故我们在CAN输出端口上也加有共模电感和Y电容。但端口加入Y电容后，相当于在CAN端口上并联了1个差模电容会导致模块并机时人为加重总线负载，所以需要计算其对并机can线延迟时间的影响。该Y电容选取的值大小目前是基于EMC调试在满足延迟时间要求的范围内选取的。

  

当然靠近通信线端口的走线串入磁珠也是业界解决数据线辐射的一个成熟做法，这在后续的模块开发中也值得进行相关的尝试。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。