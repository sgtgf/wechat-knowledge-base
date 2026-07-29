# 两级阻容耦合放大电路的频率特性的Multisim仿真及分析

原创 电路一点通 2024-08-15 11:40 广东

> 原文地址: [https://mp.weixin.qq.com/s/qZTG2u-IXFjfvv\_qrZVH5Q](https://mp.weixin.qq.com/s/qZTG2u-IXFjfvv_qrZVH5Q)

先看一下两级阻容耦合放大电路示意图，如下图所示。

******进大家庭⭕圈探讨回复:****** ******交流******

![](D:\电脑文件\公众号知识库\电工_教育_学习\两级阻容耦合放大电路的频率特性的Multisim仿真及分析_images\img_000_cb3f58c67d7b.png)

两级阻容耦合放大电路示意图

接下来我们进行仿真，看看两级阻容耦合放大电路的频率特性。

![](D:\电脑文件\公众号知识库\电工_教育_学习\两级阻容耦合放大电路的频率特性的Multisim仿真及分析_images\img_001_5eec004e1410.png)

仿真前

![](D:\电脑文件\公众号知识库\电工_教育_学习\两级阻容耦合放大电路的频率特性的Multisim仿真及分析_images\img_002_55ecb463595a.png)

仿真中

![](D:\电脑文件\公众号知识库\电工_教育_学习\两级阻容耦合放大电路的频率特性的Multisim仿真及分析_images\img_003_c9107a1de94c.png)

波特图1

![](D:\电脑文件\公众号知识库\电工_教育_学习\两级阻容耦合放大电路的频率特性的Multisim仿真及分析_images\img_004_b8482d27af64.png)

波特图2

![](D:\电脑文件\公众号知识库\电工_教育_学习\两级阻容耦合放大电路的频率特性的Multisim仿真及分析_images\img_005_30f132ed5e3e.png)

波特图3

![](D:\电脑文件\公众号知识库\电工_教育_学习\两级阻容耦合放大电路的频率特性的Multisim仿真及分析_images\img_006_2140a6ebb997.other)

## **一点通推荐**

[电路中MOS管栅极串联电阻，简直又爱又恨？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526188&idx=1&sn=9f744ca8989f70df1e01c4c76b97a0c6&chksm=fcef844ecb980d5847f46b77adcd0170dc0f9931995bb3aeff0e78e9282fb38815579d22a743&scene=21#wechat_redirect)   

[电源管理指南（85页）-PDF文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526188&idx=2&sn=ee200bc28f2bc43342f9ebae5c6391ce&chksm=fcef844ecb980d58f5ff41e1efe8e6ecb337b0183a0f17835c9391c89c62596471f6bd6e0126&scene=21#wechat_redirect)    

[开关电源入门到精通之—输入滤波电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526135&idx=3&sn=b7011ead58c5106de3183369690f2bf9&chksm=fcef8595cb980c83e7a90ef9d1b611579130d9ba512e78072b0047888928091b65056dfa237a&scene=21#wechat_redirect)    

[【华为】初级电子工程师必备手册（上117页 、下82页）PDF文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525856&idx=2&sn=9d302f4f4d508e08bba6a10567a638cf&chksm=fcef8682cb980f94cac6c9b7f51d1041c17e5896d4c0cb3049417a2a76b9e375324bb5715b56&scene=21#wechat_redirect)

两级阻容耦合放大电路，我们可以用三个波特图仪分别测量第1级、第2级和两级总的幅频特性。三个波特图仪均调整为：Mode区，选择Magnitude；Horizontal区，选择Log，F值为100MHz，I值为1Hz；Vertical区，选择Log，F值为80dB，I值为-20dB。可以明显看出，两极放大电路的高端截止频率低于每一级的高端截止频率；两极放大电路的低端截止频率高于每一级的高端截止频率。