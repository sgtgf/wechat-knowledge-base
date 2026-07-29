# Buck电路输入电容（input capacitor）选型与计算

原创 电路一点通 2024-10-05 12:34 广东

> 原文地址: [https://mp.weixin.qq.com/s/2I8qQgydZseainGt0NJW2A](https://mp.weixin.qq.com/s/2I8qQgydZseainGt0NJW2A)

#### **文章目录**  

-   前言
    
-   一、陶瓷电容在buck输入电路中的作用——降低输入纹波电压  
    
-   1.降低输入纹波电压的目的
    
-   2.纹波电压是怎么产生的
    
-   3.陶瓷电容是通过什么方式降低纹波电压的
    
-   二、陶瓷电容需要将buck电路输入纹波电压降低到什么程度？（陶瓷电容的选型）
    
-   1.容值
    
-   2.Irms和温度
    
-   3.ESL
    
-   总结
    
      
    

* * *

## 

**👇👇👇更多技术资料👇👇👇  
**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_000_de8f365fdafb.jpg)

  

##   

## **前言**

Buck电路的输入电容主要有两类，一类是Bulk电容（例如铝电解电容），用于应对transient，一类是陶瓷电容，用于应对纹波电压。当然，并非所有电路都一定需要这两种电容，一些transient不大、电流输出不高的电路只需要用到陶瓷电容一种即可。本文是buck电路输入电容选型系列第一篇——陶瓷电容选型相关。  
整体思维导图如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_001_2d3583353f27.png)

* * *

## **一、陶瓷电容在buck输入电路中的作用——降低输入纹波电压**

### 1.降低输入纹波电压的目的

-   减小高频纹波（开关造成的di/dt），稳定电压，减小EMI；
    
-   纹波电压降低后，用于抵御transient的bulk电容就可以handle了，因为太大的纹波电流在相对比较大ESR的bulk电容上产生大的纹波电压，纹波电压就有对应的RMS电压，Vrms/ESR，即就有这么大的电流流经ESR，根据I2R，也会产生大的disspation。  
    ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_002_541ebe0b5d21.png)  
    那么陶瓷电容能将输入纹波电压抑制到什么程度呢？用一组计算来举例：  
    ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_003_c8e3634c45f0.png)
    

### 2.纹波电压是怎么产生的

buck电路输入AC电流（IDD）长这样：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_004_617e13f67989.png)  
可以看到，其波形的上升沿下降沿非常陡峭，即有很大的di/dt，而电压从前一级电路过来到这一级buck电路的过程中，PCB上会有分布电感，前一级输出电容和这一级输入大电容（bulk电容）会有ESL和ESR。  
对于电感：根据V=Ldi/dt，较大的di/dt会产生大的voltage即高压纹波、电压尖峰；  
对于ESR：在switching frequency处有impedance，则纹波电压与ESR相乘也会产生电压。

### 3.陶瓷电容是通过什么方式降低纹波电压的

陶瓷电容的ESR非常小（尤其在高频的时候），根据欧姆定律：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_005_5f4e9e0b4d5c.png)  
也就是说，可能输入纹波电流Irms会很大，但架不住陶瓷电容的ESR小，尤其是和bulk电容并联时，纹波电流就几乎都从陶瓷电容这里走了。

NOTE：纹波电流(RMS ripple)是什么？  
buck converter由于开、关、开、关的动作会在input产生AC电流。RMS(root mean square)定义为在给定时间段内流过电路时产生的「与在同一时间段内流过同一电路的交流电流所产生的」热量相同的稳定电流（直流电流）。

* * *

## **二、陶瓷电容需要将buck电路输入纹波电压降低到什么程度？（陶瓷电容的选型）**

### 1.容值

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_006_0d962fd9ee6e.png)  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_007_7eab75766cf9.png)  
首先看buck电路达到稳态时电路中各器件的电流情况：

-   **Q1**：这个是指开关（上管）的控制，不是指电流；
    
-   **IDD**：流经开关Q1的电流，即Isw。平均开关电流为：  
    ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_008_f8dc80dfc43e.png)  
    其中Iin是上一级电路过来的电流（即传统意义上的输入电流），可以看作一个常数；  
    Icin为本级buck电路输入电容提供的电流；  
    Iout为本级buck电路的输入电流；  
    D为buck电路占空比；  
    经过移项，则Icin=Isw-Iin，  
    即：**「输入电容电流 = 开关电流 – 一个常数（真正的输入电流）」**
    
-   **ID**：流经二极管（下管）的电流，与开关电流IDD正好是一个周期内的两个互补时隙，平均二极管电流为：  
    ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_009_bca7930cc799.png)
    
-   **IL**：流经输出电感L的电流，在buck中：  
    ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_010_09e7fb86266e.png)
    
-   **Ico**：流经输出电容的电流，实际上就是IL的AC变化；
    
-   **Icin**：流经输入电容的电流，根据上面IDD部分的分析，即「**输入电容电流 = 开关电流 – 一个常数（真正的输入电流）**」。因此Icin整体波形相当于IDD波形向下移动一个固定的值，这个固定的值就是输入电流Iin。那么Iin为多少呢？当buck电路达到稳态时，输入电容的平均电流为0（即充电和放电电流相同），则：![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_011_c4a4484884b5.png)  
    ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_012_3fdbe4a7e9fd.png) ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_013_bf3c5093f87a.png)
    

**所以陶瓷电容要handle的就是这Icin的部分。**

在Icin中（下图第一个波形），当buck电路处于稳态时，电容在不断充电和放电，且一个周期内充放电的电荷是相同的。那么陶瓷电容需要handle的电荷就是一次充电所能积累的电荷。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_014_44bc5c359f6e.png)  
根据电流与电荷，以及电容相关公式：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_015_eaa1deded4e8.png)  
则有：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_016_2dfcce8e55c9.png)  
其中C为所求（即电容的容值），ΔQ为电容需要handle的电荷（上图第一个波形的阴影部分），ΔV为在这样的时刻下导致的电压的变化（这里写作ΔVin\_pp）。

那么ΔQ的大小就是阴影部分的面积，直接用矩形面积（长\*宽）可以求得，即：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_017_1c8013296613.png)  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_018_d621a101fce1.png)  
所以，buck电路输入电容的陶瓷电容容值应为：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_019_63aceadd76ed.png)  
其中：

-   **D**为占空比；![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_020_591e4a515fe6.png)  
    （在buck电路中，占空比为50%时D\*(1-D)最大，所以占空比超过50%的时候按最小占空比来计算，占空比没超过50%时按最大占空比来计算。）
    
-   **Io**为输出电流；
    
-   **ΔVin\_pp**为输入纹波电压要求，一般是输入电压的1%（即输入纹波率为±0.5%）；
    
-   **fsw**为开关频率。
    

### 2.Irms和温度

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_021_44bc5c359f6e.png)  
还是这个图，流经陶瓷电容的电流和电压如上图所示，它实际是一个AC，尽管平均电荷为0，但是它毕竟有ESR（只是ESR比较小），也就是只要有电流流过，都会产生热量，所以陶瓷电容也是有温升的。

因此这里计算陶瓷电容产生的热量时不能用AC电流去计算，而是用RMS（DC）电流（RMS电流在文章开头有解释）。  
从参考文档中找到了一些RMS电流计算方法，有三个公式分别为：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_022_6c0e7f172a32.png)  
上述三个公式都比较复杂，但经过计算，三个公式实际上是同一个式子（这里不做推导了），最简单的表示方法如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_023_382a2804057c.png)  
其中，ΔΙripple为电感纹波率，一般取0.3或0.4倍的Io，而在buck电路中，严谨的计算公式（后面文章再议）为：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_024_1e64ca41ba8e.png)  
得到了陶瓷电容的Irms以后，一般电容datasheet中会有一个图表来对应于不同Irms时的温升，只要确认它的温升加上环境温度不会超过额定温度就可以，一般不太会详细计算。图表like this：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_025_3a87c60a037f.png)

### 3.ESL

ESL越小越好，而相同封装的陶瓷电容一般ESL也相同，所以两个陶瓷电容并联后ESL会更低。大部分电路没有这方面苛刻要求，这里就不展开讲了。

* * *

## **总结**

本文主要对于Buck电路输入电容中的陶瓷电容的选型做了总结。  
参考文章主要有：  
Capacitor Calculation for Buck converter IC  
Input and Output Capacitor Selection  
How to select input capacitors fora buck converter

作者：GETHANDSDIRTY

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容（input_capacitor）选型与计算_images\img_026_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******