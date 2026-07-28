# CST与Python联合仿真


> 原文地址: [https://mp.weixin.qq.com/s/avpLrIUwHNjMUK\_6YrDmZA](https://mp.weixin.qq.com/s/avpLrIUwHNjMUK_6YrDmZA)

_内容简介：1.Python环境配置；2.介绍短路加载高增益微带贴片天线；3.利用CST与Python对短路加载高增益微带贴片天线联合仿真。_

* * *

_1.Python环境配置_

1.1 IDE**推荐**

CST Studio Suite 安装时已集成 Python 3.6（64位）环境，使用其自带的 CST Python 库时无需额外配置。但需注意，该内置环境仅为基础 Python 解释器，仅包含标准库功能。为扩展开发能力，推荐使用功能更完善的 Python 发行版——如 Anaconda。建议选择与 CST 自带版本完全兼容的 Anaconda Python 3.6（64位），此版本在库兼容性、环境一致性方面表现更优，可有效避免因版本差异导致的依赖冲突问题，同时支持通过 conda 或 pip 安装第三方库，满足复杂仿真脚本开发需求。这种配置既能保障 CST 原有功能的稳定性，又能通过外部 Python 生态提升开发效率与扩展性。

**1.2** **添加环境变量**

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQLx735zX7T8g1lwns1lPvE70VKAGeXEVuiat2WeDXNuld8um2VPYibe2w/640?wx_fmt=png&from=appmsg)

要从外部Python发行版开始使用CST Python库，必须在Python的系统路径中包含该目录，如上图所示。最简单的解决方案是添加或修改PYTHONPATH系统环境变量，以包括：

![](https://mmbiz.qpic.cn/mmbiz_jpg/JDrw08nzpiaV966RXAHont1f1VlJjpbqQxgl3Js7DxYHZ8ibUgqKmshkHwP60ldKG6TKxkeKnsaf0fLG9Ba9rXmg/640?wx_fmt=jpeg&from=appmsg)

打开Anaconda中的Spyder，点击主菜单中的蟒蛇python按钮，弹出PYTHONPATH manager对话框。点击左下角的\+ Add path来添加新的路径，本人所用的路径如图所示，如果安装在其他位置，需要调整上述路径。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQ6MA7uk7lZJicGu7lljOnUDicUkwysKD2mj33ntr1pv0diauOMibnWDg25w/640?wx_fmt=png&from=appmsg)

**1.3** **验证环境配置**

至此，路径已经添加完毕，可以在页面右下角的命令行窗口输入以下代码来验证环境是否配置成功，代码如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQZwtQPOqGClJBNcO7IibLUU9AnE4hSInptiaIzBBDwU8cnUibQqdHcJhrA/640?wx_fmt=png&from=appmsg)

如果能够无误地执行以上代码，并得到与下图相似的输出，则已经成功地设置了Python环境。

**2.****短路加载高增益微带贴片天线的介绍**

传统的微带贴片天线增益很有限，通常其增益在8dBi以下，因此无法满足中远程通信的需求。为了提高贴片天线的增益，近年来国内外学者做了大量的研究，提出了多种高增益技术。贴片天线增益较低，是因为工作在主模时，贴片尺寸受限于半波谐振。本章参考文献\[1\]提出了基于短路加载的高增益技术，其原理是：通过短路加载提高贴片天线的谐振频率，使得谐振时的电尺寸增大，贴片长度大于半波长，从而获得了更高的增益。

**2.1** **等效模型**

首先考虑下图所示的短路加载贴片天线：矩形贴片天线的长和宽分别为L和W，天线工作在TM01模，则通过左右两条边辐射，贴片天线的辐射模型可以等效为一对长为W、距离为L的缝隙天线二元阵。E1和E2分别代表辐射槽之间的电场，根据惠更斯原理，它们可以等效为两个磁流Ms1以及Ms2。两列短路钉关于XOZ平面对称放置，两列短路钉之间的间距为D，每列包含N个短路钉，短路钉的半径为R。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQXm9cQIKoVrPPmiaLBctqriakzsjgQaz5iaia8nnsZN7nblw4FYA8wY2NGg/640?wx_fmt=png&from=appmsg)

为更好理解短路加载对天线谐振频率的影响，可以看作下图所示传输线模型，Grad表示两个辐射边的辐射电导，ΔL表示贴片由于边缘效应所增加的长度，Lp为加载短路钉的等效电感，并联接入传输线。由传输线理论可知，并联电感将使得其谐振频率升高，并且谐振频率的变化量与电感的大小及加载的位置有关。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQMMIKxiaJmP3ev9FMICdNnlb7tw3oNThFHaTwic0hQ5vRROGE2qpJGkHg/640?wx_fmt=png&from=appmsg)

对于一个长度为h、半径为R的直导线，其电感值等于：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQRbufy09I8Z6ZsNDgI4V9wcgL9qXe8RRb4TDtgk3W9w5Hemn5xp2S8w/640?wx_fmt=png&from=appmsg)

假设短路钉之间的耦合可以忽略不计，可以得到一列N个短路钉的总电感，即：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQeN0ZH1UmfGfT0ib9sLt9ib8SyZAic1LYKib013p08SeZlJVbUPAntN3O3Q/640?wx_fmt=png&from=appmsg)

可以发现，Lp与短路钉的高度h，短路钉的半径R以及短路钉的个数N有关。

由上述分析可知，通过控制短路钉的高度h，短路钉的半径R以及短路钉的个数N，可以控制总的等效的电感值，从而可以控制贴片天线的谐振频率。由于电感值越小，谐振频率越高，因此，增大短路钉的半径和个数，有利于提高贴片天线的谐振频率和增益。

**2.2** **方向性系数**

矩形贴片天线工作在TM01模时，其辐射场可以由等效的二元的缝隙阵列所计算。假设电场在缝隙内均匀分布，地板无限大，那么两个等效的磁流Ms1和Ms2与电场强度矢量的关系为：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQiaERdyZVPTZevwrf6PWDfLj9OHlXDMQQuxAI2zeG5CNZKrAQdLiaXpHw/640?wx_fmt=png&from=appmsg)

由方向图乘积定理，首先计算单磁流所产生的远场，再乘上阵列因子，就可以得到双磁流所产生的总场。进一步，通过远场可以得到方向性系数D2，即：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQHwOF1YQr0roJcziblj2XfJjHlUGVElzqDQnR0Tjcgo7JdAR1U33PL3A/640?wx_fmt=png&from=appmsg)

由上式可以看到，贴片天线的方向性系数由贴片的电尺寸W/λ0和L/λ0决定。短路加载实现高增益的原理是：加载短路钉后，短路加载的贴片天线的谐振频率会升高，波长λ0减小，相比于未加载情况，贴片的电尺寸（W/λ0和L/λ0决定）增大，辐射面积增加，因而方向性系数和增益被提高。

**2.3** **实例模型**

在矩形微带贴片天线设计的基础上，使用短路加载技术设计出一个中心谐振频率在5GHz附近的短路加载高增益微带贴片天线，如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQ9RQc6RfkLgEVDqAlLD59Pzb0LMaU6B5n7yBhUq66Qic97ZHDBsM2Q0g/640?wx_fmt=png&from=appmsg)

在原有基本天线单元设计的基础上，4个短路钉加载在贴片的对角线上，短路钉距x轴或者y轴的垂直距离都为offset\_pin。设相邻2个短路钉之间的距离为D，各个变量的定义以及意义见下表：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQoTv401jKboCy8ttPMCp1aiaBbpibVIWPY3IVGbjjJKacf08GBGaWcgDg/640?wx_fmt=png&from=appmsg)

3.CST**与****Python****联合仿真**

**3.1** **仿真配置和输入参数**

在贴片天线建模之前，需要进行一系列的设置，在前面配置CST设计环境中也提到过，步骤如下。

**①** **实现****Python****与****CST****的连接与项目创建，代码如下：**

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQ6KgGcib8pzDmREqWbOXWsGmiaQ9zs8y8Stnz2wFp57xTY34E0Q8xlpNg/640?wx_fmt=png&from=appmsg)

**②** **输入用到的结构参数，代码如下：**

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQoWnzc3lUGFJRgrJsuZx3Zo3vjF8yhE1uJVSzzmo43toibia2BlElhLIA/640?wx_fmt=png&from=appmsg)

**③** **设置相应的全局单位，代码如下：**

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQ024kXVKakCicQOdJUia4mNUH4Va1sA9DRfpDzJfUhSPqFqwuQQekaUxQ/640?wx_fmt=png&from=appmsg)

**④** **设置扫频范围，设计的贴片天线的中心频率为**5 GHz，所以设置的扫频范围为3.2-5.2 GHz，代码如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQIvmQVIN3rjN2stzibKXbctkhRC7j7gt1P99PZ4GHc1aF1OKYib87qiarg/640?wx_fmt=png&from=appmsg)

**⑤** **设置背景材料，代码如下：**

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQbQEojvYhTY5tKsTujF4sfG9LiceXhdStOEGB0byboADof0cMPTib7D6w/640?wx_fmt=png&from=appmsg)

**⑥** **设置边界条件，常用的边界条件有：“**electric”，“magnetic”，“open”，“expanded open”，“periodic”等，而常用的对称边界条件有：“none”，“electric”，“magnetic”。设置边界条件的代码如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQZrBQg8UH6XyGxUNaYEGzc60YoSjVNEzMCalGXpq63lQSUVovxLamBA/640?wx_fmt=png&from=appmsg)

**⑦** **新建材料，贴片天线的介质基板的材料为**Rogers 5880，同轴线的介质为teflon，因此需要创建这两种材料，代码如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQOWBcMeYW8n9DUweEGeThZmonuoSAM0mEOMsokoSY2hDPtEopJib40VA/640?wx_fmt=png&from=appmsg)

**3.2** **设计建模**

在前面已经完成相关的配置以及输入参数了，接下来进入到建模部分。贴片天线的建模步骤参考上一节，下面就每个步骤解释对应的Python代码。

**①** **创建介质基板，代码如下：**

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQt6fcC4fkBVG9atFQW5lWJMCqUtFQrxU8Pe8SprakKCKFxTp1bgKHLg/640?wx_fmt=png&from=appmsg)

**②** **创建辐射贴片，代码如下：**

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQRaRttef7PtNdK5O1zgztDu8KugUumK1NL1cUnA6Kriae973nlyYiavMQ/640?wx_fmt=png&from=appmsg)

**③** **创建地板，代码如下：**

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQibxj8BQOrLkDshrrhXKDAUdJ8SK0aHRO4yfWGy80DZSYBo6yNFCxjUA/640?wx_fmt=png&from=appmsg)

**④** **创建短路钉。该贴片天线中含有**4根分别关于x轴和y轴对称的短路钉，首先需要创建第一根短路钉，代码如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQw9pZ2ud8TV54hquwaypsCHMWviaBibra8NcOfWLpOTt2ZXyVlKpRJOWw/640?wx_fmt=png&from=appmsg)

创建完第一根短路钉后，接下来可以将第一根短路钉绕着原点进行旋转复制，即可得到剩下的3根短路钉，代码如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQc1icUa6z8Gib5GHrTmBNHbB8NrlwakMT5mO1PMaicq44S8uXXVGH2ibicvA/640?wx_fmt=png&from=appmsg)

**⑤** **创建同轴端口。创建完天线模型后，需要创建同轴馈电部分，首先创建同轴线的内导体，代码如下：**

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQ7FA2hoMvDcIf73KCx9ViaBRvRAJ2G5aIic72VK7f3urdzfWZZIf4RiarQ/640?wx_fmt=png&from=appmsg)

然后再创建同轴线介质，代码如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQBwZ4rGzHhgcAbLlx8BPeh7NgL6WI7fneZUtvuNbLwxcNMbhO4GzmbQ/640?wx_fmt=png&from=appmsg)

创建完同轴线介质之后，因为地板与介质之间有交叠，所以需要用地板减去与介质交叠的部分，代码如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQvNiaCCWReZXnwrVTVB7zBXUnrdibXkrsB9aRzTGg7zFHB0IicEUOib6qfA/640?wx_fmt=png&from=appmsg)

接下来创建外导体，代码如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQ7nSBedtD1Aj98A6AEOfSHbtb5ct27eVYELbh63sDptu6aAHg1iaJn3Q/640?wx_fmt=png&from=appmsg)

**⑥ 设置激励端口。至此，建模的部分就结束了，下面要设置波导激励端口。与**CST操作一样，首先需要先选中同轴线介质的底面，代码如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQIeuibGMO8qcicm1VAJIvUcQvOcIlO1ibKQjqLjQMprs6oCa5J4J0W2UkA/640?wx_fmt=png&from=appmsg)

然后设置波导端口，代码如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQvtGIZFgyUH8kVstch02HyYhx2TiaKG7xNUibYg9gVfWaBhnZupEBQMcw/640?wx_fmt=png&from=appmsg)

**⑦** **添加监视器。设置完激励端口后，可以添加监视器来查看仿真结果，这里只添加远场方向图的监视器，频率为**5 GHz。其他类型的监视器可以根据VBA代码，参照远场方向图监视器的代码来进行设置，代码如下：

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQLuwburKyxLjUJVSApmM9NnVwWD1X9Bp21ibBhv1ntuHPRHeCnwt8Uyw/640?wx_fmt=png&from=appmsg)

**⑧** **运行仿真计算，代码如下：**

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaV966RXAHont1f1VlJjpbqQ8HDZH4BmFvjSzPtrPDBnVtf4gu2OibibjV2oVWsI3r5Q21unjcATgTKg/640?wx_fmt=png&from=appmsg)

**3.3** **仿真结果**

得到的仿真结果，反射系数如下图所示：

![](https://mmbiz.qpic.cn/mmbiz_jpg/JDrw08nzpiaV966RXAHont1f1VlJjpbqQK7SDNiacEXXfhnKWVujuTvpnXYCKXymqjVBGicYNpduIXMrVicbAyCyhQ/640?wx_fmt=jpeg&from=appmsg)

二维辐射方向图如下图所示：

![](https://mmbiz.qpic.cn/mmbiz_jpg/JDrw08nzpiaV966RXAHont1f1VlJjpbqQ76TWLTbQM7xx3WHB9F9dzHkb05tg4IGibiaYeUSA2icwwJQDZqmJqZNFQ/640?wx_fmt=jpeg&from=appmsg)

* * *

参考文献

\[1\] Zhang X, Zhu L. Gain-enhanced patch antennas with loading of shorting pins\[J\]. IEEE Transactions on Antennas and Propagation, 2016, 64(8): 3310-3318.

\[2\] 张晓、李银、吴琼森、李瑞鹏. CST仿真设计理论与实践\[M\]. 北京:清华大学出版社, 2023.

* * *

【本文特别声明】本文所演示的软件操作技巧基于特定软件版本，不同版本界面和功能可能有所不同。文中展示的仿真结果、参数设置和模型均为教学演示目的而设计，不保证其适用于所有实际应用场景。使用者应根据自身项目需求进行调整和验证。本文分享的代码/模型仅供参考，作者及教研室不承担因其使用直接或间接导致的任何问题（如仿真不收敛、项目延误等）。