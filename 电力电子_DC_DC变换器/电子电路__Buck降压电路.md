# 电子电路——Buck降压电路

原创 电路一点通 2024-04-29 08:00 广东

> 原文地址: [https://mp.weixin.qq.com/s/BfC\_bir619HqYZE\_sIkTTQ](https://mp.weixin.qq.com/s/BfC_bir619HqYZE_sIkTTQ)

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_000_7bf1773bce9d.other)

进入大家庭回复：交流

  

buck 英 \[bʌk\]

n. (一)美元;雄鹿;(一)澳元;(一)新西兰元;(一)南非兰特;(一)印度卢比;公兔;鹿(不论雌雄);小伙子;责任，过失

v. 尥起后蹄跳跃;弓背四蹄跳起;猛然震荡;猛烈颠簸;抵制;反抗

conduction 英 \[kənˈdʌkʃn\] n. (热或电等能量的)传导

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_001_24c55fbdb526.png)

  

boos电路 buck电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_002_4147afc1d3f6.png)

  

二极管--回流

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_003_3a6f14862b38.png)

  

1、刚开始电感 左正右负

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_004_a303f672ff0d.png)

  

电感临界导通

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_005_4adffdcc24c3.png)

  

电感非连续导通

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_006_f67a8cb76e7c.png)

buck降压原理 LM2576 LM2596芯片

锗管 压降低

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_007_5f125e897c4e.png)

thermal 英 \[ˈθɜːml\] adj. 热的;热量的;

regulator 英 \[ˈreɡjuleɪtə(r)\] n. (某行业等的)监管者，监管机构;(速度、温度、压力的)自动调节器

reference 英 \[ˈrefrəns\] n.参考，参照，查阅;

fixed 英 \[fɪkst\] adj. 固定的;不变的;

amp 英 \[æmp\] n.安，安培(电流单位)abbr.(= amplifier ) 放大器

oscillator 英 \[ˈɒsɪleɪtə(r)\] n. 振荡器

comparator 美 \[kəmˈpɜrətər\]n.比测（值）器；比长仪；比色计；比较器（块）；比较装置；比较电路；场强计

diagram 英 \[ˈdaɪəɡræm\] n.简图;图解;图表;示意图 vt.用图表示;图解

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_008_d2fe56d4fe47.png)

  

LM2576应用电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_009_5a723eb124da.png)

  

# RT8059

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_010_65f6c21326b4.png)

  

Vref =0.6v （芯片自带） FB反馈引脚

  

current 英 \[ˈkʌrənt\] adj. 现在的;当前的;现时发生的;通用的;流通的;流行的

n.电流;(海洋或江河的)水流;气流;思潮;潮流;趋向

detector 英 \[dɪˈtektə(r)\] n. 探测器;侦察器;检测器

comparator 美 \[kəmˈpɜrətər\]n.比测（值）器；比长仪；比色计；比较器（块）；比较装置；比较电路；场强计

原理图

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_011_f70ec10a27d9.png)

  

下面场效应管作为后端电感的泄放回路（二极管 增加功耗）。

实际电路图 8059

最大供电电流1A

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_012_bf0719c3a989.png)

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_013_a5bed2dfb2f1.png)

实际电路图 8024

最大供电电流 600mA

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电子电路__Buck降压电路_images\img_014_48f1bc2c4913.png)