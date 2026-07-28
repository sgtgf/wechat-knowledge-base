# Matlab代码：科研绘图的颜色空间


> 原文地址: [https://mp.weixin.qq.com/s/LkY8RiZnFuDFRhGrWqCQAw](https://mp.weixin.qq.com/s/LkY8RiZnFuDFRhGrWqCQAw)

在科研绘图过程中，我们常常面临着**色彩层次不清晰、多组数据配色冲突、不同绘图工具颜色空间调用逻辑混乱**等问题。这些问题不仅影响了科研成果的准确表达，还可能导致审稿人对数据理解产生偏差。因此掌握RGB、HLV、HLS颜色空间的正确应用，对于提升科研绘图质量具有重要意义。

**三种颜色空间的科研绘图应用场景**

**RGB颜色空间：基础图表配色**

RGB（Red, Green, Blue）颜色空间是科研绘图中最基础、应用最广泛的色彩表示方式。在MATLAB等主流科研绘图工具中，RGB是**默认的色彩模式**，几乎所有的基础图表都支持RGB配色。优势主要体现在与设备的高度兼容，多种绘图工具原生支持，操作简单，效果直观等。

RGB 颜色空间利用三个颜色分量的线性组合来表示颜色，任何颜色都与这三个分量有关，而且这三个分量是高度相关的，所以连续变换颜色时并不直观，想对图像的颜色进行调整需要更改这三个分量才行。自然环境下获取的图像容易受自然光照、遮挡和阴影等情况的影响，即对亮度比较敏感。而 RGB 颜色空间的三个分量都与亮度密切相关，即只要亮度改变，三个分量都会随之相应地改变，而没有一种更直观的方式来表达，如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaVm2rfxxeKsaiac4oYjgFLR4WYq7buYGKOvqwfibmmuibISU8auLU7W1k5V1fiapibv4XjI2EAJRVXVd8A/640?wx_fmt=png&from=appmsg)

**典型应用场景**

论文折线图和柱状图的基础配色定义：在MATLAB中，通过FaceColor属性直接设置RGB三元组、颜色名称或十六进制颜色代码。

与MATLAB绘图工具默认色彩模式的天然适配：无需复杂的颜色空间转换即可直接使用，RGB模型基于笛卡尔坐标系，R、G、B分别代表红、绿、蓝三种颜色的强度，取值范围通常为0-255。当自由调配这三种颜色时便能得到各种色彩的图像，如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaVm2rfxxeKsaiac4oYjgFLR4SsKoQQ8IRwCjibOeNP3cLqAw7xWZsc1ShRRa8e2TfFeLezLwmjDuxVA/640?wx_fmt=png&from=appmsg)

**配色规范要求**

根据科研绘图的配色原则，要以**突出关键数据、展示逻辑关系**为首要目标。一篇论文的配图最好有一个主色调（占1/3到一半），然后使用近似色作为辅助色，同时要避免使用高亮色，尽可能选用柔和的颜色。

**从RGB到HSV/HLS**

HSV和HLS通过对RGB颜色模型进行变换，将原本的平面直角坐标系转换为一个圆柱坐标系。HSL颜色模型的顶端是白色，底端是黑色，可以用一个双六角锥体来表现。而HSV颜色模型可以用一个倒六角锥体来表示，锥体的顶点是黑色。下图来自英文维基百科，展现了RGB是怎么转换为HSL和HSV的：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaU5mP21XGKy2rhN9A5HWQ64CYhLWwJkQy5t2x3Ouvib4NszuFsNcOgpFvXH08x0FRbJUwjusoAJA3Q/640?wx_fmt=png&from=appmsg)

**HSV颜色空间：热图对比度优化**

HSV（Hue, Saturation, Value）颜色空间，也称为HSV（Hue, Saturation, Value），在科研热图和密度图的制作中发挥着**不可替代的作用**。HSV通过将颜色分解为色调（Hue）、饱和度（Saturation）和明度（Value）三个独立维度，使得科研人员能够**精准控制色彩的视觉对比度**，特别适合突出数据极值差异。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaVm2rfxxeKsaiac4oYjgFLR4MKtp1eibtRN4YIBAEYTbQqVGibmVDyAlfYjX7jF5tBsy105f1StzqCdg/640?wx_fmt=png&from=appmsg)

用如图所示圆柱体来表示 HSV 颜色空间，圆柱体的横截面可以看做是一个极坐标系 ，H 用极坐标的极角表示，不同角度的颜色基调不同，S 用极坐标的极轴长度表示，颜色从俯视图的半径来看，圆弧上的点表示该处颜色基调，半径上的颜色就是从纯白色到该色调颜色过渡过程中不同位置的饱和度，圆心颜色饱和度为0，接近纯白色，圆弧上颜色饱和度为100。值越大，颜色越饱和。V 用圆柱中轴的高度表示，不同高度代表着当前纯度的颜色的亮度。

Hue 用角度度量，取值范围为0～360°，表示色彩信息，即所处的光谱颜色的位置。表示如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaU5mP21XGKy2rhN9A5HWQ64UG2ZIrEZpBYXLyXrNz1X2V0qPJhZD9YPrH7M8eq06ULw72jice7OiaHA/640?wx_fmt=png&from=appmsg)

颜色圆环上所有的颜色都是光谱上的颜色,在RGB颜色空间中 颜色由三个值共同决定，比如黄色为即 (255,255,0)；在HSV中，黄色只由一个值决定，Hue=60即可。

在Hue一定的情况下，饱和度减小，就是往光谱色中添加白色，光谱色所占的比例也在减小，饱和度减为0，表示光谱色所占的比例为零，导致整个颜色呈现白色。

明度减小，就是往光谱色中添加黑色，光谱色所占的比例也在减小，明度减为0，表示光谱色所占的比例为零，导致整个颜色呈现黑色。

由于HSV颜色空间中的颜色基调天然与角度对应，因此十分适合刻画相位的改变，并且通过改变V和S来调整黑色和白色在光谱中的比例，进而表示承载相位的波的强弱。相较于RGB颜色空间，在科研绘图中能直观地传达更多的信息。

**HLS颜色空间：多组数据区分的理想方案**

HLS（Hue, Lightness, Saturation）颜色空间在多组数据散点图的色彩区分中展现出独特的优势。HLS通过将颜色分解为色调（Hue）、明度（Lightness）和饱和度（Saturation）三个维度，使得科研人员可以通过调整色相来实现不同组别数据的清晰识别，同时保持明度和饱和度的统一以避免视觉干扰。

HLS 和 HSV 的区别就是最后一个分量不同，HLS 的是 light(亮度)，HSV 的是 value(明度)。HLS 中的 L 分量为亮度，亮度为100，表示白色，亮度为0，表示黑色；HSV 中的 V 分量为明度，明度为100，表示光谱色，明度为0，表示黑色。即在HLS颜色空间中，需要调整一个颜色从白色转到该颜色再转到黑色，仅需调整L(Lightness)分量即可，而在HSV空间中需要同时调整S和V分量，如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaVm2rfxxeKsaiac4oYjgFLR4IVEPQtvuU2xxeKuFaAMmYQBhflMKcHLibqZBwBmkNL8NC4BKeDRUDLw/640?wx_fmt=png&from=appmsg)

在应用场景上HLS与HSV空间相同，可以根据科研绘图的需求调整颜色空间的使用，具体效果如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaVm2rfxxeKsaiac4oYjgFLR4BfMcILv1H6o8hYJK7gEBBSdpJLDN8Cxepb7crMnxf535UgPb9AoPHA/640?wx_fmt=png&from=appmsg)

**三种颜色空间的通用公式转换**

**RGB转HSV：**

在MATLAB中，可以直接使用内置函数rgb2hsv和hsv2rgb来实现RGB与HSV（HLV）之间的转换，无需手动编写复杂公式。

**RGB转HLS：**

1. 归一化RGB值：

R' = R/255  
G' = G/255  
B' = B/255

2. 计算最大值和最小值：

Max = max(R', G', B')  
Min = min(R', G', B')

3. 计算亮度（Lightness）L：

L = (Max + Min) / 2

4. 计算饱和度（Saturation）S：

if Max == Min:  
S = 0  
else:  
  if L < 0.5:  
    S = (Max - Min) / (Max + Min)  
  else:  
    S = (Max - Min) / (2 - Max - Min)

5. 计算色相（Hue）H：

if Max == Min:  
H = 0  
else:  
  if Max == R':  
    H = (60 \* ((G' - B') / (Max - Min)) + 360) % 360  
  elif Max == G':  
    H = (60 \* ((B' - R') / (Max - Min)) + 120) % 360  
  elif Max == B':  
    H = (60 \* ((R' - G') / (Max - Min)) + 240) % 360

MATLAB中没有转换的内置函数，HLS到RGB的转换相对复杂，需要根据H的不同范围进行分段计算。基本思路是先根据色调H确定RGB三个分量的相对大小，然后根据饱和度S和明度L计算具体值。

在Python中可以使用colorsys模块，colorsys模块提供了用于RGB和HLS/HSV颜色模式的双向转换的接口：

colorsys.rgb\_to\_hls(r, g, b)  
colorsys.rgb\_to\_hsv(r, g, b)

colorsys.hls\_to\_rgb(h, l, s)  
colorsys.hsv\_to\_rgb(h, s, v)

通过上述函数可以轻易完成RGB/HSV/HLS三种颜色空间的转换，更好服务于科研绘图。

* * *

【本文特别声明】本文所演示的软件操作技巧基于特定软件版本，不同版本界面和功能可能有所不同。文中展示的仿真结果、参数设置和模型均为教学演示目的而设计，不保证其适用于所有实际应用场景。使用者应根据自身项目需求进行调整和验证。本文分享的代码/模型仅供参考，作者及教研室不承担因其使用直接或间接导致的任何问题（如仿真不收敛、项目延误等）。