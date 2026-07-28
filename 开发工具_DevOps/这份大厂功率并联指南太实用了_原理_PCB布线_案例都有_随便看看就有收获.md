# 这份大厂功率并联指南太实用了！原理、PCB布线、案例都有，随便看看就有收获

原创 王工 硬件笔记本 2025-12-05 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/EoxiZfkjVAZJhP7eDsDKbQ](https://mp.weixin.qq.com/s/EoxiZfkjVAZJhP7eDsDKbQ)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

  

大家好，今天咱们聊聊功率器件的并联设计。项目中单管功率不够用时，可以选用并联方案。我在英诺赛科官网找到了两份很实用的设计指南——《HV InnoGaN小功率并联设计指导》和《HV InnoGaN大功率并联设计指导》，结合自己这些年的调试经验，分享一些相关知识。

这两份资料在官网都能下载，咱们公众号文末也准备了获取方式，有需要的朋友可以随时去拿。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQibo3BMQ0QrxubXPpElbFYWUmEkVfSUmHCX5eyA89Ie1Pia4XfGyQhrFBA/640?wx_fmt=png&from=appmsg)

  

01

为什么需要考虑并联？

现在做电源产品，功率密度越做越高，就像手机一样，体积没变大，功能却越来越强。有时候单个器件确实扛不住太大的电流，这时候并联就成了很自然的选择。多个器件一起分担电流，既能降低导通损耗，又能控制温升，整体效率自然就上去了。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQibtlVT4SNEbPKib2jJfjbgNvXz1QdKX2nOzcJTyZEPjx4BARlhepp25Dw/640?wx_fmt=png&from=appmsg)

不过这里要提醒一句，并联可不是简单地把几个管子接在一起就行。**最大的挑战就是均流问题**。大家可以想象一下，几个人一起抬东西，要是有人出力多有人出力少，那个最卖力的肯定先累垮。器件并联也是同样的道理，如果几个管子开关不同步，有的早开有的晚关，损耗就会集中到某一个器件上，时间一长就可能热失控。

02

小功率并联设计

**一、器件并联的关键参数分析**

根据文档内容，我们需要重点关注三个关键参数：VGS(th)、RDS(on)和Gm。

### 1、VGS(th) – 阈值电压

先说说VGS(th)，也就是阈值电压。要确保并联管子**VGS(th)的一致性。**

为什么呢？因为阈值电压小的管子会先开通、后关断，在开关过程中就会承担更多的电流，损耗自然也更大。而且问题会越来越严重 - 温度越高，VGS(th)还会进一步下降，形成恶性循环。这就要求我们在选型时要特别注意器件的阈值电压一致性。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQibPjySmOWAOv7a2MUQNUgjQun9WDSOpQg2SHag8L9Tf0dW7CL0b96y2g/640?wx_fmt=png&from=appmsg)

### 2、RDS(on) – 导通电阻

接下来是RDS(on)，也就是导通电阻。这个参数有个很好的特性 - 正温度系数。温度越高，电阻越大。这实际上是个自我调节机制：如果一个管子电流偏大，温度就会升高，RDS(on)随之增大，电流就会自然减小，最终系统会达到一个平衡状态。

王工点评：“**RDS(on)这个特性算是管子并联的安全带，不容易出现热跑脱。**”

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQibVa18XQIoSicVpoIf8MMHlAufNpWu0oYPEKvSc3r9Q9TBKtY6YcsF0qA/640?wx_fmt=png&from=appmsg)

### 3、Gm – 跨导

第三个参数是跨导Gm，它反映了器件对栅极电压变化的敏感程度。Gm越大，开关时电流变化越快，在并联时开关损耗也会更大。

不过好在Gm随温度升高会下降，这也是一种自我平衡的机制。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQibJ1dgtJ5E3T6693XnicP5Kgky4JrMhWygYLmNIWTXibZGYR4mia9GgaXFQ/640?wx_fmt=png&from=appmsg)

****二、Layout设计技巧****

王工提醒：“**GaN玩的是高频，Layout的一些细节要特别注意。**”

### 1、共源电感（CSI）

首先是共源电感的问题。CSI是驱动回路和功率回路共用的那段电感。它在开关过程中会产生反向电压，拖慢开关速度，增加损耗。我们的对策很明确：尽量缩短功率回路，驱动回路要独立走线，避免共用路径。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQibMIER1UowK51vzcicaFEhPwZLM7R93jcEafsmqz6YI9JdzjlTIZpXTfw/640?wx_fmt=png&from=appmsg)

### 2、功率回路

功率回路的设计也很关键。在高频应用下，寄生电感就是隐形杀手。建议大家：瓷片电容要尽量靠近GaN放置；功率回路要尽可能小，最好在第二层做回流，实现磁场自消除；并联器件的Layout必须对称，打孔数量要保持一致。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQibSI59hVG5SnMrOHxjRYmdaB6dTmp5Qndib9ky4ib63PuR5dQbAM3bJefg/640?wx_fmt=png&from=appmsg)

### 3、驱动回路

驱动回路的设计相信大家也会特别重视。驱动电阻要尽量共用，保证驱动一致性。栅极电阻要靠近Gate引脚，这样才能有效抑制振铃。建议使用**开尔文接法**，它能把驱动回路和功率回路分开，显著减小CSI的影响。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQib3CB6Vk00pKASUM2UkhZhSUVuomMqPxqPU4HNOGQF0zjZ6qeiclDDFMQ/640?wx_fmt=png&from=appmsg)

******三、实战经验分享******

文档里给出了一个很典型的小功率PFC并联案例，采用两管并联，工作在65~100kHz。这个方案通过对驱动参数的精心设计和layout布局的严格控制，实现了最优的并联效果。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQibZk0h21UnDjcOhfyXoYg8W4gZIX9QzNlmNL5yibfaf74KpCBC7OVXLSQ/640?wx_fmt=png&from=appmsg)

王工补充：“**在实际调试中，我们发现在驱动端加个小电阻（比如10~20Ω）靠近Gate，能有效抑制振铃，效果很明显。**”有经验的朋友可能已经用过了，还没试过的下次可以试试看。

关注公众号：硬件笔记本

03

大功率并联设计

虽然大小功率并联的基本原理相通，但大功率应用有一些需要特别关注的地方。

两份文档都从共源电感、功率回路、驱动回路这几个核心要点出发进行阐述，这里就不赘述了，但大功率应用对细节的要求更加苛刻。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQiboJcyZhf3sXdx0mbFEdDla1OSvbJKQ94BZTgiac80icx9TGMcjkT3xjZA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQib1rXou7Ribs5bsNERicY3pQmp7ajgbcibtefVBYaM7ZjkeaX90wpK7icmtg/640?wx_fmt=png&from=appmsg)

**文档里有个亮点：预留汇流条位置。**  

王工对此非常认同：“**在大电流应用里，可能铜皮过电流能力不够。预先在并联器件之间留出开窗，后期需要时可以加焊或者焊上铜条，这是提升均流能力、实现热均衡的神器，成本低效果还好，特别适合大功率场景。**”

### 3kW电源的并联方案

文档中分享了一个前级PFC用两颗INN650TA030AH并联的3kW电源案例。测试结果显示，两颗管子的壳温非常接近，这说明均流效果相当理想。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQibgDic85gFghrIQLsu1rFAtSRbpJ4XsDuzJclLiab6e2TmktxYI9qlAmTg/640?wx_fmt=png&from=appmsg)

文档从实战角度分析：“这个案例成功的关键，就在于它严格遵循了上面说的Layout原则。你看它的PCB图，功率回路对称紧凑，驱动路径清晰一致。大功率设计，有时候不是方案多新奇，而是**把这些基础的设计要点执行到位，系统自然就稳定了。**”

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQibzmDBxh7CwbsrwTpV66jEyfPGibOPRZWdys2ngDxvvBm72DXA7B6GYEw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQib8aRIYjAxRxZCx94aLuMohPfLjnqt1WbgvzHhWVNH5LsYHgwI3VHtuQ/640?wx_fmt=png&from=appmsg)

在实际项目中，我们经常面临无法实现完美对称的情况。这时候就需要有所取舍。王工认为优先级应该是这样的：

首先，**共源电感的对称性最重要**，因为直接影响开关同步性；

其次，**功率回路的优化**，关系到系统的效率和稳定性；

最后，**栅极回路的一致性**，虽然也重要，但影响相对较小。

  

04

文档获取

在调试阶段，建议大家使用热像仪来观察并联器件的温度分布。这是最直观、最有效的均流效果评估方法。先从小电流开始测试，慢慢加载，同时监测各个器件的温升情况。如果发现温度不均匀，就要回头检查Layout对称性或驱动参数配置。

如何下载《功率器件并联设计指导》，更好的学习硬件基础相关知识

关注公众号：硬件笔记本，并在公众号里发送对应的下载关键字获取下载链接

在公众号里给王工发消息:

## 

下载|功率器件并联设计指导

## 建议复制粘贴过去，就不容易码错字哟！

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQibvhXVFEyxribuWiakF90BuicoVFNhtR4XqBhWqvOqDdhlTYUA2CbSZdq4Q/640?wx_fmt=jpeg&from=appmsg)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjIiaWkkSC1G9UZ1UnWKZXQibcfo8gZUoLqTOxDHX9t1PPh3jFWsBQLDAAyYEgVBrZzm4OHYFBvYKFA/640?wx_fmt=jpeg&from=appmsg)

注：本资源仅用于学习交流，请勿用于商业用途。