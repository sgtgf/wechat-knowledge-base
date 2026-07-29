# 硬件笔记速看-NMOS管秒会秘诀！

原创 电路一点通 2024-07-31 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/Jwj7CncVyJEm1UB36KkKTg](https://mp.weixin.qq.com/s/Jwj7CncVyJEm1UB36KkKTg)

今天给大家分享的是NMOS管的开关特性🔌。在工作初期，我也因为对MOS管的工作模式一知半解闹过不少笑话😅，直到后面评估了十几款原理图的MOS与三极管以后，才能了然于心。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\硬件笔记速看_NMOS管秒会秘诀__images\img_000_f76d26393f9a.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\硬件笔记速看_NMOS管秒会秘诀__images\img_001_24bbb6f10edc.png)  
  
为什么只讲NMOS呢，是因为在实际的设计中，NMOS出现的频率最高、通用性更强💪，且PMOS和NMOS在用作开关时，原理是相通的🔄，为了避免大家的混淆，所以我们对NMOS深入分析，大家可以在此基础上，自行扩展PMOS的知识📚。  
  
首先我们认识一下NMOS的三个极，箭头向内为N型管🔵，两根线在一块的为S极🔲。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\硬件笔记速看_NMOS管秒会秘诀__images\img_002_8791fbf05409.png)

G极(gate)—栅极，不用说比较好认  
S极(source)—源极，不论是P沟道还是N沟道，两根线相交的就是  
D极(drain)—漏极，不论是P沟道还是N沟道，是单独引线的那边

其次是NMOS的工作模式，截止区🚫、可变电阻区📉、饱和区📈。作为开关管使用，我们只关注截止区和可变电阻区。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\硬件笔记速看_NMOS管秒会秘诀__images\img_003_fcf5478b8208.png)当Vgs大于导通电压时，MOS管开启🔛，从截止区进入可变电阻区。为了便于分析，在看NMOS管的原理图时，我都会假设S极的电压为0，来推断NMOS的导通状态🔋。不同NMOS的导通压降不一样，具体需要参考Datasheets，一般的管子2V左右就会导通📊。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\硬件笔记速看_NMOS管秒会秘诀__images\img_004_1162aa524d8b.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\硬件笔记速看_NMOS管秒会秘诀__images\img_005_4cb3faf949af.png)

  
再让我们看上述的两个例子🌰  
  
当NMOS当作上管使用时，当开启NMOS时，可变电阻区的电阻会随着S极的电压波动而波动，导致Vgs的电压不稳🚰，因此此种接法不适用❌。  
  
当NMOS当作下管时，导通和截止电压都确定🔒，因此这种方法也是常用NMOS的常用接法🔧。  
  
以下是MOS管的一些特点📌：  
  
1⃣️只容许从信号源取少量电流的情况下，选用MOS管；在信号电压较低，有容许从信号源取较多电流的条件下，选用三极管🔌。  
  
2⃣️MOS管是单极性器件（靠一种多数载流子导电），三极管是双极性器件（既有多数载流子，也要少数载流子导电）🔋  
  
3⃣️部分MOS管的源极和漏极可以互换运用，栅极也可正可负，灵活性比三极管好💡  
  
4⃣️MOS管应用普遍，可以在很小电流和很低电压下工作🔋🔌。  
  
5⃣️MOS管输入阻抗大，低噪声，MOS管较贵，三极管的损耗大📉💰  
  
6⃣️MOS管常用来作为电源开关，以及大电流开关电路、高频高速电路中，三极管常用来数字电路开关🔌🔊

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\硬件笔记速看_NMOS管秒会秘诀__images\img_006_303228f18e4f.other)

## **一点通推荐**

[搞硬件的你，被 华为2024年校招薪资吓到吗？（投票看看）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526748&idx=1&sn=8e28a2e93acf072473092195ee7fb854&chksm=fcef8a3ecb9803287cb056ac85e4f73a9ba57cfcf6fb1246078ba62c434beecf7d5eca040852&scene=21#wechat_redirect)  
[【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路清晰有方向](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&scene=21#wechat_redirect)[常见  
](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523395&idx=1&sn=a6f1ffa4f12b146e7e7e43f64cfee4d0&token=796481278&lang=zh_CN&scene=21#wechat_redirect)

[LDO 线性稳压芯片的对比选型](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523395&idx=1&sn=a6f1ffa4f12b146e7e7e43f64cfee4d0&token=796481278&lang=zh_CN&scene=21#wechat_redirect)

[20个常用电源降压 5V转3.3V电路设计技巧](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527466&idx=1&sn=5495dcf043e000f38c857cad5f07ad0e&chksm=fcef8f48cb98065ef0000423d165d572d8bef12e3ce66966e2e083592beab5c6383d29f59965&scene=21#wechat_redirect)

[MOS管单 /双向电平转换电路](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527317&idx=1&sn=4dd09111cdff4bdc9f223ec32786f7c4&chksm=fcef88f7cb9801e1dfe15d113732a9b623f67bb483bccd4379fafa248c2fade1f1a6407a5fb7&scene=21#wechat_redirect)