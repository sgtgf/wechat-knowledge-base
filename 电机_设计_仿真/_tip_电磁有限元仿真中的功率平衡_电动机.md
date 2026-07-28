# 【tip】电磁有限元仿真中的功率平衡—电动机

原创 Mr 晋 玩转电机设计 2024-06-24 08:17 浙江

> 原文地址: [https://mp.weixin.qq.com/s/gk1kUOuEEvy2C-eJqoFsxA](https://mp.weixin.qq.com/s/gk1kUOuEEvy2C-eJqoFsxA)

**vision**：**知识无涯，而工程问题有涯****。****死磕问题，紧跟前沿，总结分享。****助力中国电机引领全球！**

  

* * *

**仿真转矩是电磁转矩，电磁转矩≠轴输出转矩，电磁功率≠轴输出功率。**

* * *

[【tip】玩转电机设计—提高电流仿真精度](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247485123&idx=1&sn=161c4d277d3aa2cc5c7848765b5ad786&chksm=ea6465d9dd13eccf87dfc0850f25b8d2994cf565c5df4004fae9a0475acd10e56639a7c55c10&scene=21#wechat_redirect)  

有限元仿真怎样获得精确的电流、效率、功率因数？

之前在<提高电流仿真精度>一文介绍了怎样精确的仿真得到电机的实际运行电流，其底层逻辑就是功率平衡的问题。感觉之前没讲透，在最近看了《EasiMotor帮助文档》之后，结合该帮助文档再整理一下“电磁有限元仿真中的功率平衡”，提升相关基础的理解，有助于获得精确的电流、效率、功率因数。

* * *

**功率流：**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzByOCWkKeOBVwncVZA0iaJBTjnRLzRqjHzu8g0lG4jBwos440NkeCG2m22HVeFGuqNiaJ3sKLdq5yg/640?wx_fmt=png&from=appmsg)

先认识一下各种功率：  

**P1：**输入功率

**P1'：**仿真输入功率，仿真电压、电流产生的功率。  

**Pem：**电磁功率  

**Pmech：**机械功率，机械功率=轴输出功率+风摩转矩(阻尼转矩)。  

**P2：**轴输出功率，电机铭牌功率

**Pfe：**定子铁耗，2下标代表转子铁耗  

**Pf：**通风损耗  

**Pw：**摩擦损耗

**Pcu：**定子铜耗，2下标代表转子铜耗。异步电机/自启动永磁电机/电励磁电机等转子侧有导体的电机，有转子侧铜耗。

**Pmag：**磁钢涡流损耗

**Pdamp：**阻尼损耗，阻尼损耗=通风损耗+摩擦损耗。你在有限元仿真的时候有输入阻尼比吗？ 这里需要特别注意，如果在仿真时考虑了阻尼，不要重复计算通风损耗+摩擦损耗。

**各功率的计算如下：**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzByOCWkKeOBVwncVZA0iaJBPtQBUmlQwnvic9F52YUFdn4qFgdKD5ic1af8Q8yiaz587OItY8Y357siaw/640?wx_fmt=png&from=appmsg)

有限元是时域仿真，所以有求解区间T，为准确求取有效值(rms)需要选择电周期的整数倍。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzByOCWkKeOBVwncVZA0iaJBXr42X1srUlW9BPKBNdBBT5YQI2U5x8x2qgWUGLibY2VPPSzia9y5pGiaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzByOCWkKeOBVwncVZA0iaJBTtQmrialOPAic8qqAEY1pF00DqAibMP3rw4Q6dKQBeDFu6UYvRWunDAGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzByOCWkKeOBVwncVZA0iaJBJHs0iadnvwRve5GDbzsCpXibg00UjUf8Ixem1FQcPZ4VtLJKoWvicHe9Q/640?wx_fmt=png&from=appmsg)  

**重点：**  

-   **获得了更精确的修正后合成电流；**
    
-   **获得了更精确的功率因数；**
    
-   **铁耗电流的修正很关键；**
    
-   **按这个方法计算，软件中得到的输出转矩即是轴输出转矩；**
    
-   **修正铁耗电流之后，再修正功率因数；**
    
-   **铜耗也可以再迭代一次，提升效率精度；**
    

**其他：**

杂散损耗需要折算计入风摩损耗；

也可以把风摩、杂散、铁损都折算计入阻尼转矩，可以不修正电流；  

也可以把风摩、杂散、铁损都折算计入负载转矩，这样也不用修正电流，但是计算的输出转矩≠铭牌转矩，输出功率≠铭牌功率。  

* * *

觉得这个过程复杂吗？

有一点繁琐。  

EasiMotor软件中有“**功效特性计算**”曲线后处理功能，从有限元曲线结果直接计算功效特性，轻松得到精确的电流、效率、功率因数。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzByOCWkKeOBVwncVZA0iaJBAllbXiboicTQVQI0A4yo6S38zrYicugZzMbjePibozwCXAn8xI4drjAWAg/640?wx_fmt=png&from=appmsg)

  

* * *

_参考文献：_

_<EasiMotor帮助文档>，陆天雄_

* * *

**欢迎留言讨论！**

欢迎推荐优秀文献、国内外电机最新资讯！

欢迎投稿分享！

  

长按图片，识别二维码，关注我哟

  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwnM0Q7kianI9ClktRZuNyJs53Q2Irp5aup8son3fVl5riaoG8hUfkTasQTtiblqczsqHpDOibG7Qx6Qg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)