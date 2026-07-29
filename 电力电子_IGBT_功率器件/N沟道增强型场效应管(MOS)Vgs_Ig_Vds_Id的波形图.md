# N沟道增强型场效应管(MOS)Vgs Ig Vds Id的波形图

原创 电路一点通 2024-08-05 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/tKMfYep1TSH6JwZSPEXQfA](https://mp.weixin.qq.com/s/tKMfYep1TSH6JwZSPEXQfA)

MOS管由于寄生极间电容存在，使本来驱动芯片的方波信号发生形变。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\N沟道增强型场效应管(MOS)Vgs_Ig_Vds_Id的波形图_images\img_000_ba83f9354fda.other)

******进大家庭⭕圈探讨回复:****** ******交流******

  

## **一点通推荐**

[总结MOS管发热4种原因](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527466&idx=4&sn=fbcfca5786921e21c9c3365ab267359b&chksm=fcef8f48cb98065e92cb014715dfa53c868cfe44345aa0385ad2d266b4a0a1076d2b7d5f1930&scene=21#wechat_redirect)    

[超励志！44岁PCB工程师简历](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527317&idx=3&sn=f53dc662f6daa5353b734b0ac75a3fb4&chksm=fcef88f7cb9801e153ff210ea8e590b71066bce8707e7184ade59398c9d5e97e207082a9c0b0&scene=21#wechat_redirect)    

[常用电子元器件识别与检测（166页）.ppt资料](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)

[运放与MOS管组成的恒流源电路原理分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526424&idx=3&sn=33d8d3c80fa9b7dac6676c68f7ce6c30&chksm=fcef8b7acb98026c1118a0fed574b3888d51ee76d274d9896084ec753bde686c09e610d9641f&scene=21#wechat_redirect)  ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\N沟道增强型场效应管(MOS)Vgs_Ig_Vds_Id的波形图_images\img_001_c8bf45618048.other)

  

l1：当驱动芯片发出方波驱动脉冲高电平时，由于寄生Cgs的存在，电容两端电压不能突变，GS两端电压呈现电容充电式上升，当上升阈值电压Vgs(th)的时候，MOS管形成N沟道，并开始导通。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\N沟道增强型场效应管(MOS)Vgs_Ig_Vds_Id的波形图_images\img_002_ed7b39ea161d.other)

  

l2:MOS管导通后，沟道间开始有电流Id，随着Vgs继续上升，并线性增大至最大；期间，Vds略有降低，而造成原因为Cds放电。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\N沟道增强型场效应管(MOS)Vgs_Ig_Vds_Id的波形图_images\img_003_a158e55af3c7.other)

  

l3：Vgs增大到一定程度后，Id已经最大达到饱和，Vgs会持续一段时间不再增加，称米勒效应；Cgd和Cds的放电使Vds继续下降。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\N沟道增强型场效应管(MOS)Vgs_Ig_Vds_Id的波形图_images\img_004_0a7d53cd1501.other)

  

l4：Cgd反向充电，Vgs继续上升，随着寄生电容的充电完成，Ig降低至0。Vds降至导通电阻分压点。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\N沟道增强型场效应管(MOS)Vgs_Ig_Vds_Id的波形图_images\img_005_29a08d491ea8.other)