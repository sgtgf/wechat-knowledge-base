# PMOS开关仿真电路：断开时，输出电压Vout出现回沟现象

原创 电路一点通 2024-07-26 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/tUVH-eU285E48rp4OV9\_dQ](https://mp.weixin.qq.com/s/tUVH-eU285E48rp4OV9_dQ)

在PMOS断开的时候，输出电压Vout出现回沟现象

电路现象：**PMOS断开后，输出端Vout电压先降低，后上升，再下降，随即下电波形出现回沟。**（由以下电路展开）  
  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PMOS开关仿真电路_断开时_输出电压Vout出现回沟现象_images\img_000_98d216e9c914.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PMOS开关仿真电路_断开时_输出电压Vout出现回沟现象_images\img_001_0b533a231a25.jpg)

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PMOS开关仿真电路_断开时_输出电压Vout出现回沟现象_images\img_002_7e17bdc4aabd.other)

以上为PMOS开关仿真电路，其将负载换成了一个开关电路，在改变负载以后，Vout的下电波形就不正常了，**这是为什么呢？**

PMOS从导通到关断时，PMOS的阻抗会从接近0（导通），再到电阻无穷大（断开），这里会有一段过程，而PMOS会存在一定的阻值，负载也非恒定电阻。

在Vout下电过程中，负载获得的电压会下降到一定程度，随后可能会因为欠压突然停止工作，所需要的电流会急剧减小。

即其等效电阻突然变大，导致它获得的分压变大，这时就会出现以上的情况，Vout电压就涨上去了。也就是说，Vout的电压等于Vin在PMOS和负载上面的分压，如果负载RL突然变大，那么就有可能出现Vout突然上涨的情况。  
  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PMOS开关仿真电路_断开时_输出电压Vout出现回沟现象_images\img_003_d12665925438.jpg)

因此，当PMOS从导通到关断切换期间，PMOS的Vgs电压等于其Vgsth，就出现了回沟。  
  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PMOS开关仿真电路_断开时_输出电压Vout出现回沟现象_images\img_004_3248951e8ab3.png)

**  
那要如何解决这个问题呢？有两个选择。  
  
**

1、可以让PMOS更快的关闭，例如将PMOS的g和s跨接的电容从100nF调整到10nF，回沟就基本没有了。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PMOS开关仿真电路_断开时_输出电压Vout出现回沟现象_images\img_005_71e627a06014.jpg)

  
2.在输出端加一个滤波电容，避免负载等效RL突然变大。

这是因为增加一个滤波电容以后，等效负载会变成原本的RL和新增加电容阻抗的并联。尽管原本的RL突然变大，由于有电容阻抗的存在，负载阻抗就不会超过电容的阻抗。

PMOS关断的瞬间，过程是比较短暂的，信号可以当作交流，因此电容在这不可以看成是 开路，而是构成总的阻抗的一部分。

**只要电容值合理，基本是可以解决电容回沟问题的。**（如下图）

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\PMOS开关仿真电路_断开时_输出电压Vout出现回沟现象_images\img_006_c4cb74ba2469.png)  

  

  

## **一点通推荐**

  

\>①[12V 直流风扇速度控制器电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526347&idx=3&sn=0e7c5f84f14650fba35570b5f3a3a5b0&chksm=fcef84a9cb980dbfa1c0a827407a3505aa58d549a02325deb7222266bb340c2343a347599c25&scene=21#wechat_redirect)

\>②[MOS管导通，电源开关电路软启动功能有什么变化](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526278&idx=1&sn=f13f47a10292b7b4edea807ffe2300e2&chksm=fcef84e4cb980df21d5f063f8f0d20a90743d21f218a745c1a230425c6834f980b1422f4d21b&scene=21#wechat_redirect)

\>③[反激式开关电源设计12V 6A输出的设计方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526229&idx=1&sn=b2261d0d930a8214959c9e9d3a83540d&chksm=fcef8437cb980d215daa3d32439f49403116d7a08ac6976534f82cdb524e92655f13a4ef4de7&scene=21#wechat_redirect)

\>④[\[电子电路识图入门\]450页-PDF-图文版](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526229&idx=2&sn=e4ab8daaeb3ab306b1642a67ef9c49e8&chksm=fcef8437cb980d211aa7e23bda0fccfcdef5be40f5302ddbfb9bb097bce6907556d7e987e2ce&scene=21#wechat_redirect)    

\>⑤[电源管理指南（85页）-PDF文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526188&idx=2&sn=ee200bc28f2bc43342f9ebae5c6391ce&chksm=fcef844ecb980d58f5ff41e1efe8e6ecb337b0183a0f17835c9391c89c62596471f6bd6e0126&scene=21#wechat_redirect)