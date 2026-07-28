# LCD和OLED工作原理及优劣对比

原创 蜗牛 硬件笔记本 2022-03-21 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/KRbByQ1\_FI5a1GyZnzEqdg](https://mp.weixin.qq.com/s/KRbByQ1_FI5a1GyZnzEqdg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")  

  

  

了解屏幕的工作原理，首先要了解什么是像素点。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaib5jG35FJ8bS7ia22N9JgY4L8n6sxXacZxqSAK2xwA7cDLPKVASobib9G9TOiaQbv8RibmOTdErcENdA/640?wx_fmt=jpeg)

  

你看到一整块的画面实际上是由无数小点拼凑出来的，这些小点就是我们说的像素点。

 ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaib5jG35FJ8bS7ia22N9JgY4AoMKNNU63VSgdLliaumNSics7JKHCLqbyshHuwTTQqsvkc3IdaicCCWDQ/640?wx_fmt=png)

  

每个像素点由红绿蓝三个子像素构成。红绿蓝是三原色，可以通过红绿蓝三个子像素的颜色比例来得到一切你想要的颜色，这样每个像素点各司其职显示自己的颜色，最终拼凑出了你看到的完整的画面。分辨率指的是单位长度内包含像素点的数目。**01**  

**01  
**

**LCD和OLED的工作原理**

  

## 1.1、LCD工作原理 

LCD的剖面图如下，主要有7层，从下到上依次是背光层、垂直偏光片、正极电路、液晶层、负极电路、水平偏光片和彩色滤光片。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaib5jG35FJ8bS7ia22N9JgY4575jRA1ic2s5gib4xzjdsoABQFdk3rgicroejBEtaSKicR6drJl7hIzA0w/640?wx_fmt=png)

最底下背光层的作用是发射白光，白光穿透具有颜色的彩色滤光片后就可以变成对应颜色的光线。注意，背光层并不是像素点下面一个独立的LED灯珠，而是整个屏幕所有像素点共享一整块大的背光层。  

当我们给正极电路施加电压，它会穿透液晶层，连通负极电路构成回路，这个电压会驱使液晶层发生偏转，此时液晶层就和百叶窗一样会遮挡住一部分光线，这时我们只需要控制电压的大小，就可以控制液晶分子的偏转角度，进而控制红色、绿色和蓝色子像素的亮度。通过亮度比例的改变就可以混合出一切你想要的颜色。

  

## 1.2、OLED工作原理 

OLED全称是有机发光二极管（organic Light-Emitting Diode），它和LED屏幕一样也有三个子像素。不同的是，它没有液晶层和背光层，本身是一种特殊设计的自发光二极管。通过控制电压，从而控制流过二极管的电流来改变亮度，就可以控制每个子像素的颜色配比，最终混合出你想要的颜色。 

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaib5jG35FJ8bS7ia22N9JgY4MbMsvdKBgLVR4C2zg9BeIAkzjDD5dcPoL7EBOWRhqJorGnKQblTdxw/640?wx_fmt=png)

OLED没有背光层，每个像素点都可以独立控制开关，所以不需要向LCD屏那样一打开后，整个背光层都需要点亮。OLED屏幕每个像素点都可以理解为一颗独立控制的灯珠，可以做息屏提醒，在手机锁屏的时候可以单独点亮部分像素点，以低亮度和低刷新率来显示时间和通知等一些重要信息。

  

**02  
**

**LCD和OLED的优劣对比**

## 2.1、OLED功耗更低 

LCD屏只要一打开，整个屏全亮，就会一直耗电。OLED屏只有在打开显示纯白画面的时候，耗电会比LCD高，但是OLED屏每个像素点是独立控制亮度和开关的，这样就可以做到分别降低亮度，甚至是关闭。因此，除非你长时间停留在白色的画面下，否则OLED的续航时间更长一些。

  

## 2.2、OLED对比度更高

对比度指画面黑白明暗的亮度比值。对比度越高，画面越鲜艳，色彩越浓郁。

LCD如果要显示纯黑色的话，理想状态是液晶分子完全闭合，完全遮挡住发射出来的背光，但液晶分子的偏转不能做到完全闭合。因此在显示黑色的时候，会有少量的白光照射出去，所以在屏幕上看到的并不是纯黑色，而是亮度大幅度递减的灰色，这个特性决定了LCD不能显示真正意义上纯黑的黑色。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaib5jG35FJ8bS7ia22N9JgY4PhhMGlmesoZDTPkWecGYaCvqSWXERLJtQNFmvOIALbzhgp3qMQCSDQ/640?wx_fmt=png)

  

OLED本身并没有背光的存在，且每个像素点都独立控制，所以可以直接断掉显示黑色像素点的供电，做到完全不发光，达到真正意义上的纯黑。

因此OLED屏对比度更高。

  

  

## 2.3、OLED响应时间更快，动态显示更有优势。 

在显示动态画面的时候，意味着每个像素点需要快速切换颜色，颜色的切换需要一定的时间，这个时间就是我们所说的屏幕响应时间。

  

响应时间过长就会导致动态画面显示的时候，像素点来不及改变颜色，导致上一幅画面还未完全消失，下一幅画面就要显示出来，就会导致屏幕上出现残影。 

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaib5jG35FJ8bS7ia22N9JgY4UXGPQ0rbn4OdYCjeZibS4ApLyKCzehbsOFXEnPLb69EE0PiaVrKHgBgw/640?wx_fmt=png)

  

LCD屏幕颜色的切换是通过控制液晶分子的偏转来完成的。因此液晶层偏转的速度就直接决定了LCD的灰阶响应时间，而液晶层的偏转和温度有关，温度越低偏转的速度越慢，导致LCD屏幕在低温下会出现非常明显的拖影现象。

OLED屏没有液晶层也自然不受到液晶层的温度的限制。不过OLED屏并不是没有响应时间，OLED屏幕在彩色之间切换颜色，响应时间非常短，几乎没有拖影的现象，但是OLED屏从纯黑切换到纯白，或者从纯白切换到纯黑的时候，需要花费的时候会比其它颜色长得多，但OLED在黑白颜色之间切换的时候也比大部分LCD时间短。

  

所以OLED在屏幕显示动态画面上是具有天生优势的。

  

## 2.4、OLED可以做到更薄，易折叠

OLED屏没有背光层和液晶层，所以非常容易做薄，可以和纸张一样进行大幅度的弯折。可以弯曲就意味着可以很轻松的实现曲面屏，可以显著提高手机本身的质感。 

  

LCD屏除了有背光层和液晶层，中间还有一些偏正片，所以比OLED厚很多。背光层和液晶层是硬质基材，只能做非常小幅度的弯曲，还只是能台式机显示器这种大型面板上看到。

## 2.5、OLED寿命更短 

LCD用来发光的是背光层，液晶层只负责偏转控制出光量，滤光层只负责改变光的颜色，不参与发光，电压是施加在不参与发光的液晶层上。

  

OLED屏电压是直接施加在自发光二极管上，导致电子频繁的在OLED的发光层迁移。再加上发光层本身是有机物，有机物相对于无机物来讲非常容易老化，所以有机物+频繁的电子迁移+自发光，直接导致了OLED的屏幕寿命明显短于LCD屏。 

  

## 2.6、LCD有漏光的缺点 

由于LCD屏有背光层的存在，而屏幕面板最终是要装进手机或显示器上，屏边框的衔接处，背光层的背光就很容易漏出去，在显示纯黑画面的时候，边框处会出现大面积的光晕现象，这被称之为漏光。 

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaib5jG35FJ8bS7ia22N9JgY45QcHicNG4bmZrlYvrXnPW3W0JEWUeDna3FeeKyfH4ictGFKaU47cibTYA/640?wx_fmt=png)

  

## 2.7、OLED容易出现烧屏现象 

LCD屏背光是一整块 全体像素点会一起老化。OLED屏每个像素点都是独立发光，意味着屏幕不同区域根据使用程度不同，老化速度不一样。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaib5jG35FJ8bS7ia22N9JgY4djibRvT2Uxr13tcJdibdjic6vLlzxEicgCAvPBIIM69hsfaqNrYSpzvauA/640?wx_fmt=png)

  

比如A区域长期显示蓝色，那蓝色像素点衰减速度就比较快。下次显示纯色的时候，那个地方的蓝色就会稍微暗一点，导致出现残影，就好像画面被烧在了屏幕上，这个现象被称为烧屏。不是说屏幕物理层面的烧毁，而是像素点老化不均匀导致的屏幕色差。

## 2.8、LCD和OLED都会伤眼，但有所不同。 

手机屏幕亮度是需要可控的，不然没法和环境光强匹配，目前控制亮度主要是两种方式：PWM和DC调节。

DC调光很简单，直接控制电压来改变灯的亮度，电压越高，亮度越亮。DC调光由于光源全程是处于开启状态，所以并不会出现频闪伤眼的现象。

PWM调光是采取调整占空比来调整控制灯的亮度，占空比越大，亮度越亮。它的调光控制灯的开关时间，会产生频闪，所以它有一个弊端就是伤眼，频率越高，频闪现象越不明显。

OLED屏幕由于本身的特性，如果使用DC调光，在亮度过低的时候，电压过低，屏幕就会出现和抹布一样不均匀的效果，对显示画面的影响特别大，所以OLED屏幕不能采用DC调光，只能用PWM。

OLED由于有机材料又容易老化，所以OLED不能使用高频PWM调光，只能采用低频PWM调光。一般频率为最高为250Hz左右，一些视觉敏感的人就会察觉出来，就更容易产生视觉疲劳。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaib5jG35FJ8bS7ia22N9JgY4ZgGVia790LZNscTR0cV6xNOxXKpOtrXDSgwf283USjIvj5ricY0arGGQ/640?wx_fmt=png)

  

屏幕发射的光线对人眼伤害最大的部分是420-440波长的蓝光，这些高能光线会对人的视网膜产生不可逆的伤害，传统LCD屏幕的背光是用数个高亮的LED灯珠加匀光板完成的，这些LED灯珠发射出来的光线，其高能蓝光有相当大一部分处在这个区间中。

  

LCD的蓝光强伤眼，OLED采用PWM调光也伤眼。有的低端屏幕为了节约成本，在LCD上也采用PWM调光。哪个伤害更大不好说。 

  

图片来源网络。