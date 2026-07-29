# 反极性Buck-Boost输出负压是怎么回事

原创 电路一点通 2024-07-27 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/eehma\_rK8Gxlz--A4KqJ8w](https://mp.weixin.qq.com/s/eehma_rK8Gxlz--A4KqJ8w)

反极性Buck-Boost是一种可以生成负压的电路拓扑，通过电源控制器控制MOS管的开关，实现输入电压到输出电压的转换。当MOS管闭合时，电感进行充电；关断时，电感通过续流管给输出电容和负载供电，产生负压输出。![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\反极性Buck_Boost输出负压是怎么回事_images\img_000_dfcc6e910596.other)

**反极性Buck-Boost是什么？**

基础的拓扑电路有Buck、Boost、Buck-Boost。

一般我们将可以生成负压的基本拓扑叫做Buck-Boost，此外也会将实现升降压的其他电路称为Buck-Boost。比如说，Buck和Boost两个电路级联在一起可以实现升降压，也会叫做Buck-Boost。为避免造成理解上的困扰，有时会把前者叫做反极性Buck-Boost。

（基础拓扑）不论是升压还是降压，基本都是以正压为主，但是Buck-Boost中，产生的却是负压。

比如说，输入电压为12V，输出电压为-5V，这是为什么呢？

在反极性Buck-Boost电路中，电源控制器通过控制MOS管的G极电压来实现对开关管的通断。而开关管MOS处于一个反复开关的过程。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\反极性Buck_Boost输出负压是怎么回事_images\img_001_3069759db9d3.jpg)

降压-升压转换器将输入电压Vin的正直流电压，转换为输出端的负直流电压Vout。

  

当MOS管Q1闭合导通时，电感L接到电源两端，此时的输入电压Vin，对电感进行充电，电感的电流逐渐上升。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\反极性Buck_Boost输出负压是怎么回事_images\img_002_8b3c315f9893.jpg)

由于导通瞬态时di/dt比较大，这个过程主要有Cin供电，此时Q1相当于短路，电感L两端的电压为Vin（输入电压），输出端Cout依靠自身的放电为RL提供能量。

由于Q1是导通的，所以二极管D1的两端电压分别是Vin和Vout，此时Vout是负值，Vin是正值，D1是反向截止的，也就等同于断开。

  

当Q1关断时，Vin给输入电容充电。由于电感的电流不能突变，电感通过续流管D1给输出电容Cout以及负载RL供电。

  

由于电感的电流流向不变，电感给电容充电，同时也为负载RL进行供电。

  

电流的流向为：负载电阻→肖特基二极管→L1上端。

  

RL的下端是GND，也就是说电压为0V，RL的电流方向为从下往上，根据电流的流向RL的上端电压Vout比其下端更低，是一个负值。

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\反极性Buck_Boost输出负压是怎么回事_images\img_003_132fc437ff48.jpg)

  

注意：

当开关管导通时，电感上的电流持续增加达到最大值imax，此时的电感上电流的增加是因为电压作用在电感上进行储能，这个持续的时间就是导通时间。

**公式如下：**

增长量：Δi

电压：Vin

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\反极性Buck_Boost输出负压是怎么回事_images\img_004_501a49b73953.jpg)

  

## **一点通推荐**

  

\>①[电源电路：PMOS防浪涌抑制电路解析](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=1&sn=f11a61f6dbd968414119bbcf705e9533&chksm=fcef7819cb98f10f16cb042224135fabc6f98e576ae756e6e458366e63762e4ee348e6aa9e19&scene=21#wechat_redirect)

\>②[学习看懂汽车电路图（彩色学习书）.pdf（184页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522556&idx=2&sn=69299a69ffe13bf8482bcac80daebe1a&chksm=fcef7b9ecb98f288058e57729dbf842dfb214e1f43f470162c214b905ec12a9c7f72b5a080ee&scene=21#wechat_redirect)

\>③[这4种防反接电路-正反极接反了会烧毁电子元器件](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527038&idx=1&sn=981d151c23fcf91126261adf7d50230f&chksm=fcef891ccb98000a4f421374eb2d5e740090856f717e29212457d4ea2c8343836419d621e635&scene=21#wechat_redirect)