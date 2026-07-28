# Capacitor-1：电容的模型和参数


> 原文地址: [https://mp.weixin.qq.com/s/8-8TQ5UgWWPWdqDwh1-6Kw](https://mp.weixin.qq.com/s/8-8TQ5UgWWPWdqDwh1-6Kw)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TTEIVMoucWHdVFmVuWfkUA0sLP4icib2Tb4Kblk2LjMEdKU6SnrTjT9A7GwnRvyuQKJKosNgfkq6eHQ/640?wx_fmt=png)

**_★★★_**_Cap-1---电容的模型参数_**_★★★_**

引言：电容器是与电阻、线圈并存的三大被动元器件之一。不仅在电气或电子电路中会使用电容器，而且如果没有电容器电路就不会正常工作。这在智能手机和IoT设备、服务器和网络、以及无线通信系统之类的尖端设备上也是一样的。此外，电容器的性能会对各种电子设备的性能产生影响，因而已成为非常重要的元器件。

_€1.电容的结构原理_

简而言之，电容器是能够储蓄电能，并可在必要的时候放电的元器件。可蓄积起来的电能（电荷）与电池相比较少，因而在放出电荷（放电）时只能在短时间内供给电流，但是可反复进行充电（电荷的蓄积）和放电。

这里列出电容器的结构示意**_图1-1_**。将绝缘体（电介质）平行地夹在金属板（电极）之间而构成的就是电容器。如果向该金属板（电极）间施加直流电压，就可将电荷蓄积起来。这就是电容器的蓄电原理。被蓄积起来的电荷量叫做静电电容，静电电容C是由绝缘体的介电常数ε、电极的表面积S、绝缘体的厚度d来决定的。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMSGjH0LKowPsLziajmly693wySTaR4OygoIvHQOqPriarjTqibH9lXQYIeQ/640?wx_fmt=png)

**_图1-1：电容结构图_**

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMSkJMgF33ib90MNbWicEKwYNWP9nCreIMmtic6aZLTxTAXsSbIq41vdDPQQ/640?wx_fmt=png)

其中：

C：静电电容

ε：绝缘体的介电常数

S：电极表面积

d：绝缘体的厚度

可通过增大绝缘体的介电常数ε，增大电极的表面积S，减薄绝缘体的厚度d 来增大静电电容C。

_€2.电容的等效模型_

理想的电容器只含有静电电容成分，但是实际的电容器则含有电阻成分和电感成分。这些寄生成分对电容器的性能产生较大的影响。电容器的简易等效电路如_**图1-2**_所示。实际的电容器的等效电路中包含有ESR（等效串联电阻）、ESL（等效串联电感）。此外，理想的电容器的电极间是绝缘的，但是实际上会存在若干的漏电流。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMSKy6Iuh9nAnquWpS5frJnFVOl5WSmq1OibiaPIgReJu6dCEKueKK42coA/640?wx_fmt=png)

**_图1-2：电容理想模型和寄生模型_**

_**表1-1**_对这些成分进行了归纳：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMSr4NvqEsuXSwmQhg0QxzWgbWiaPaSl18E4mhfjTMNsoApic5rUg8OjgcQ/640?wx_fmt=png)

**_表1-1：寄生参数说明_**

__€3.电容的参数__

本小节以最为常用的陶瓷电容为例，其余品类电容会有额外章节

__静电容量：__

静电容量是表示电容器的蓄电能力的物理单位，以F(法拉)为单位表示。在陶瓷电容器使用的范畴里内，F单位已经过大，因此常使用µF(微法、法拉的100万分之一)、pF(皮法、法拉的1兆分之1)单位。根据使用的地方、状况的不同，基准也不同，但陶瓷电容器在1µF以上时就称为大容量，低于1000pF时称为小容量。（静电容量C的测量举例：在测量温度25℃，测量频率1.0+/-0.1kHz，测量电压0.5+/-0.1Vrms时测得，注：不同封装不同耐压的电容测量方式有差异，具体查看其手册描述）

__温度特性（材质特性）：__

NPO：

NPO使用超稳定级的介质材料，具有温度补偿特性的单片陶瓷电容器，电容量和介质损耗最稳定的电容器之一，在温度从-55℃到+125℃时容量变化为0±30ppm/℃，电容量随频率的变化小于±0.3ΔC。NPO电容的漂移或滞后小于±0.05%，NPO电容器适合用于振荡器、谐振器的槽路电容，以及高频电路中的耦合电容。

C0G：

C0G使用超稳定级的介质材料，C0G电容器对温度不敏感，因此C0G电容是一种很常用的温度补偿电容器。其内部填充介质为多种稀有氧化物对温度不那么敏感，有一定的稳定性。这种贴片电容在-55摄氏度和+125摄氏度之间基本相当于没有变化。因此得到了广泛的应用。

X7R：

温度稳定型的陶瓷电容器。当温度在-55℃到+125℃时其容量变化为15%，需要注意的是此时电容器容量变化是非线性的。X7R电容器的容量在不同的电压和频率条件下是不同的，它也随时间的变化而变化，大约每10年变化1%ΔC，表现为10年变化了约5%。X7R电容器主要应用于要求不高的工业应用，而且当电压变化时其容量变化是可以接受的条件下。它的主要特点是在相同的体积下电容量可以做的比较大。

Z5U：

Z5U电容器称为”通用”陶瓷单片电容器。这里首先需要考虑的是使用温度范围，对于Z5U电容器主要的是它的小尺寸和低成本。对于上述三种陶瓷单片电容来说，在相同的体积下Z5U电容器有最大的电容量。但它的电容量受环境和工作条件影响较大，它的老化率最大可达每10年下降5%。 尽管它的容量不稳定，由于它具有小体积、等效串联电感（ESL）和等效串联电阻（ESR）低、良好的频率响应，使其具有广泛的应用范围，尤其是在退耦电路的应用中。

Y5V：

Y5V电容器是一种有一定温度限制的通用电容器，在-30℃到85℃范围内其容量变化可达+22%到-82%。Y5V的高介电常数允许在较小的物理尺寸下制造出高达4.7μF电容器。

小结：所以最常用的是X7R，X5R和C0G，Z5U和Y5V现已不多见，容值越小的都是采用C0G或者NPO，比如晶振的匹配电容，射频用电容等等。其他类型X7S，X8T等等，和X7系列都相近，这里不再赘述。温度优异性：NPO＞C0G＞X8＞X7＞X5＞Z5U＞Y5V。

__额定电压：__

电容器的额定电压是指工作在最低与最高环境温度时，可以承受连续加上的最高直流电压及最高交流电压的有效值，每个电容器标注的绝缘耐压都留有余地，一般比额定电压高1.5-2倍。因为电容值具有压降效应，比如额定电压值为10V的电容，使用在10V电压下，其容值会有衰减，可以将其使用在5V电压下，推荐工作电压为额定电压的二分之一。

____€4.电容的特性____

自谐振，电容具有自谐振频率（SRF）的现象非常常见，因为从上述模型（_**图1-2**_）可以看到电容模型近似于一个串联RLC（IR很大不起什么作用忽略），对于串联RLC，一个重要的特性是阻抗。简单地说，阻抗即为交流电路中的电压与电流之比，相当于直流电路中的电阻。符号使用Z，单位与电阻相同，使用Ω。电容器的阻抗(Z)由下面的计算过程导出：

ESL部分会产生感抗：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMSQrOJJ7qG9QtG7WecjdQPfjBibG7NPPJNy5IVDsOztmbQ4eOrejbdyCQ/640?wx_fmt=png)

静电电容会产生容抗：  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMSud48TYoNSI15zj9QlJwUK3aDUibQrc7r2XnXhHHosLf6Uibuu9Dhux1A/640?wx_fmt=png)

感抗和容抗相加：  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMSaI4TQwmCKLquGoXfDwUNFLmwCkDcgnWgKGQ3yByNM1r2D62110FibicQ/640?wx_fmt=png)

整理上式变为下式：  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMSGhbSxeiaGpsuckm2y5PcA2icjV4XQBe1bx3lEZnBXbQ23WGvJfDu4CCg/640?wx_fmt=png)

感容抗加上寄生电阻合并为阻抗Z：  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMSqA3u8KFFoaTLSFRchErFhDpYtwOIGvHibSTBzNJIxmuAp0iaKU8edq4g/640?wx_fmt=png)

代入频率参数为：  

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMS4oVdGHQDE3os6fNdhKXQBjqFxDTkM2L1KeC4yTklQesce1Sg0KWI0A/640?wx_fmt=png)

阻抗绝对值如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMS0iaNlnjtMEko5Fox161BtMg94cm3ic0L31fUV4yicZEGbIgzLl5YkvoyQ/640?wx_fmt=png)

其中：

Z：阻抗（Ω）  

R：电阻成分ESR（Ω）

j：虚数  

ω：ω=2πf

f：频率（HZ）  

L：电感成分ESL（H）  

C：静电电容（F）

根据此式，可推出以下信息：

1) 在频率低的区域，阻抗几乎是由静电电容(C)来决定的。

2) 谐振频率（2πfL = 1／(2πfC）)下，阻抗是由ESR来决定，在自谐振频率处，电路是纯阻性的，ESR成为阻抗的最小值_。_

3) 在频率高的区域，阻抗几乎是由ESL来决定，如果用图形来表示这种情况，则如_**图1-3**_所示。

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TS3epso6FUJic7c5gCVciaicMSLwuTJibEZQ5fMaTRDFUgkUpNRMzaWSsvLcicKmkJAdibjQotOzz2uI6iaQ/640?wx_fmt=png)

**_图1-3：电容器的阻抗特性图_**

如_**图1-3**_所示，静电电容C越大，越在低频区为低阻抗，ESL越小，越在高频区域为低阻抗。电容器的阻抗Z，在谐振频率之前呈容性下降，而在谐振频率SRF处，C和ESL的影响为零，只受ESR的影响，过了这一点则为电感性（ESL），并与频率一起增加。在将电容器用于其主要用途即噪声吸收(去耦)中时，噪声吸收效果是由阻抗来决定的，因而需要按照以下的要点来选定电容器：

1) 噪声的频率与电容器的谐振频率接近。

2) ESR小。

3) 高频噪声时，ESL小。