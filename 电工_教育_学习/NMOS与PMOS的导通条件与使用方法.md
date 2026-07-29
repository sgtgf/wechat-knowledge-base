# NMOS与PMOS的导通条件与使用方法

原创 电路一点通 2024-09-04 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/9xRyKhUlZ7Kq\_aHlp-OkFg](https://mp.weixin.qq.com/s/9xRyKhUlZ7Kq_aHlp-OkFg)

**  
一.电路符号  
  
**三个极判断

![](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS与PMOS的导通条件与使用方法_images\img_000_eca42278e31a.png)

G极，不用说比较好认。

S极，不论是P沟道还是N沟道，两根线相交的就是；

D极，不论是P沟道还是N沟道，是单独引线的那边。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS与PMOS的导通条件与使用方法_images\img_001_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

N/P型判断

![](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS与PMOS的导通条件与使用方法_images\img_002_c26dae6172da.png)  
 寄生二极管判断

![](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS与PMOS的导通条件与使用方法_images\img_003_ed0cd715d2fc.png)  

  
不论N沟道还是P沟道MOS管，中间衬底箭头方向和寄生二极管的箭头方向总是一致的：

要么都由S指向D，要么都由D指向S。  
  

**二.导通条件**

  
N沟道：UG>US时导通。（简单认为）UG=US时截止。

P沟道：UG<US时导通。（简单认为）UG=US时截止。

UG比US大（或小）多少伏时MOS管会饱和导通,这要看具体的MOS管，不同MOS管需要的压差不同。  
  

**三.MOS管常见用途（NMOS为例PMOS相反）**

1.信号切换用MOS管：UG比US大3V---5V即可，实际上只要导通即可，不必须饱和导通。  
比如常见的：2N7002，2N7002E，2N7002K，2N7002D，FDV301N。

![](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS与PMOS的导通条件与使用方法_images\img_004_c38ae27023d5.png) 

2.电压通断用MOS管：  
  
UG比US应大于10V以上，而且开通时必须工作在饱和导通状态。  
常见的有：AOL1448，AOL1428A，AON7406，AON7702，MDV1660，AON6428L，AON6718L，AO4496，AO4712，AO6402A，AO3404，SI3456DDV，MDS1660URH，MDS2662URH，RJK0392DPA，RJK03B9DP。  
  
常见的有：AOL1448，AOL1428A，AON7406，AON7702，MDV1660，AON6428L，AON6718L，AO4496，AO4712，AO6402A，AO3404，SI3456DDV，MDS1660URH，MDS2662URH，RJK0392DPA，RJK03B9DP。  
  

![](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS与PMOS的导通条件与使用方法_images\img_005_9835cfb44922.png)  
  

**四.MOS管的用法与注意事项**

1.NMOS用法  
因为N沟道要求UG>US时导通。所以接负载时S极直接接地（为固定值），此时G极为低电平时，为高电平时导通

![](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS与PMOS的导通条件与使用方法_images\img_006_113f4818ca96.png)  
  
2.PMOS用法  
因为P沟道要求UG<US时导通。所以接负载时S极直接VCC（为固定值），此时G极为低电平时导通，为高电平（VCC）时截至

![](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS与PMOS的导通条件与使用方法_images\img_007_bb6593957a5a.png)

3.注意事项  
如果MOS管用作开关时，（不论N沟道还是P沟道），一定是寄生二极管的负极接输入边，正极接输出端或接地。否则就无法实现开关功能了。所以，N沟道一定是D极接输入，S极接输出或地。P沟道则相反，一定是S极接输入，D极接输出。

![](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS与PMOS的导通条件与使用方法_images\img_008_b3e175f2f05c.png)    
图1   
![](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS与PMOS的导通条件与使用方法_images\img_009_26b3305d5279.png)

                    图2

如图2所示 由于寄生二极管直接导通，因此S极电压可以无条件到D极，MOS管就失去了开关的作用。

![](D:\电脑文件\公众号知识库\电工_教育_学习\NMOS与PMOS的导通条件与使用方法_images\img_010_19a761f8e00a.jpg)

  

## **一点通推荐**

[暴力拆解9V（实际8.4V）USB锂电池（附电路图](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527784&idx=1&sn=2265f8761a95ada40b0b3cd3237eb944&chksm=fcef8e0acb98071c088e01eb9c052039fd365448481e68c9dfb47de06c4fe0e037e3525aa8e9&scene=21#wechat_redirect)

[9V电池供电自动关机电路设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527863&idx=1&sn=7a4fb7ebdd36fd20775cea581203ffe0&chksm=fcef8ed5cb9807c39c49ca97bcefe651224e1e7375f902a8f87236821f201c570ccf72fe90f1&token=2140931339&lang=zh_CN&scene=21#wechat_redirect)

[很全面！常用电路图符号汇总](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527853&idx=1&sn=e36a4e7a2f4517abe18e81257851b0e9&chksm=fcef8ecfcb9807d947fa24dc6b3ab213f43fa9f0bab55861e5447f3c3300863dc8419c29656c&scene=21#wechat_redirect)    

[图腾柱电路构成与工作图示（总结:高低电平）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=1&sn=18a42f67c550ad19f22601054429152b&chksm=fcef8d7dcb98046b1265672cedcead103e03602efe987ff2a6d4a6004b4fee59d95226137da5&scene=21#wechat_redirect)

[防反接电路、防倒灌电路、过流保护和ESP相关知识](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528117&idx=1&sn=381055ecaac988392d791311abe6e09c&chksm=fcef8dd7cb9804c1a60f7242446b8417605ab18232a84fe391bfd3aec29f636a8c3c5565eab6&scene=21#wechat_redirect)    

[电子工程师自学速成-提高篇（512页 高清pdf文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523884&idx=2&sn=715054663619a1041c54f27fe0a20b4c&chksm=fcef7d4ecb98f4588a1cbdd416903beb946a126cf1d2d278c36da3b2ef364105e85958a68553&token=1494156528&lang=zh_CN&scene=21#wechat_redirect)    

[电子工程师必备-九大系统电路识图宝典.pdf(702页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)    

[开关电源环路设计与计算（45页）PDF-文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523296&idx=3&sn=3925f514288c3e99de2dcf1ac487edc8&chksm=fcef7882cb98f194be86616da328ea323e7516492ca890df66205a7bf73fbbfa532eb2664085&scene=21#wechat_redirect)    

[电源反馈设计速成篇.pdf（40页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523709&idx=2&sn=932246205d9b7972e390a64ae8fe7736&chksm=fcef7e1fcb98f709b9afc7ab90d8513e35b0f0f4f30ead525ec8c177c63c3e22400b6b920451&scene=21#wechat_redirect)