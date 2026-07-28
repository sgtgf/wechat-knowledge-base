# 都知道CFD计算是慢的，回顾从80年代到现在的应对方法


> 原文地址: [https://mp.weixin.qq.com/s/QI3dcUbY\_KcAG\_le6Esd-Q](https://mp.weixin.qq.com/s/QI3dcUbY_KcAG_le6Esd-Q)

各位平时仿真一次CFD工况，需要多长时间？一小时、半天、一天还是一周？

对于CFD计算速度这事儿，各位的**终极期待**是不是：**实时仿真**计算？

CFD模拟结果要是出得太慢，会有什么后果？（大家多少身有体会，不在这里废话了。）现在CFD在商业上越来越吃香，项目/工程周期却越来越短（卷天卷地卷CFD），所以这事儿的风险也就越来越大了。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/Ckta6WpYwOBTbnUsoax2TVUaSo4IFOSia818SmuxjyA2FNNbVrh7rPgKLB3RNfVeK210M9IEmAc4Pkl2DgweI6g/640?wx_fmt=jpeg&from=appmsg)

这里尝试回顾过去几十年CFD计算对速度的需求，并看看机器学习是如何在最近几年“及时”出现的。如有不对之处，请各位帮忙指出纠正。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oDTTu8mAaceytwJ96cytVWic1nwkvJ6icdQUVXEGqeicgWhxsTngiczhBPT52p6lsbTbmHTdjLicgzCMUPrXgibXKw5g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/DnlfkibawCntv6K6v63xgETZxW8jodELwpzN1Az1ic8sJDm2NkjuwvylsYhBv3fiaE8My6GcmnP7Ie6E31gKGjeXg/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/TL37nOJlJquykMFqCZgtOajUKzSUo1rNwHxhKBVKUjkKT14z0Na2Xl7svUFeTKFkMLTGP0icNoILjOnKuibgaVHQ/640?wx_fmt=png)

80年代和90年代

![](https://mmbiz.qpic.cn/mmbiz_png/cIiaa4krtfaaicuTbhN6AjQwQiaWRaFuUvMXeK07ia7xOfWiaUk1nPIpjoYmx7ZMiazHfNrq4DYFtAMgFECayGicdCguw/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/R7Ot3lRU1k8ViauEVVqR7WobEWUW29MtBibMschmOOVO94FOOUUfffR3C1LPo3sOSJFOLlhiayzdVhXIqmX3sTa3g/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/fnFiaUDx0YFNm0iaUkrcIZ5OOCiba2iadMX3HibjfN5UzzE0ubLTiapN3GQSYyCgbY3uD9MAiaca0BsZIdKwQGLOJ3WDw/640?wx_fmt=png)

在80年代初，CFD工程师需要**花费数周时间**调整他们的模型。在90年代初，CFD结果的**缓慢交付**，意味着CFD诊断和分析对于项目的推进讨论中来得太晚，无法提供帮助。为了应对这一挑战，CFD软件公司试图采用更直接的方法-将CAD与CFD耦合，试图克服由CFD网格构建所代表的显著瓶颈。另一个问题是求解器的计算缓慢，计算耗时。最后一个问题是计算结果的可视化展示。  

**这个二十年产生了至少三个主要的创新：**

**1）自动网格化软件（“网格器”）被独立生产和分发，或在现有的商业求解器包中提供。**

**2）求解器在多个CPU上的并行性能，随着多核CPU的逐渐出现。**

**3）更真实的可视化使最终用户能够理解流体模拟和实体对象的“阴影”几何形状。**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Ckta6WpYwOBTbnUsoax2TVUaSo4IFOSiaAMr9UNoxicQSSV70h9BkRJeMzUEWkibKDibX0ibD7aWBtR3PYUMxURVUAw/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oDTTu8mAaceytwJ96cytVWic1nwkvJ6icdQUVXEGqeicgWhxsTngiczhBPT52p6lsbTbmHTdjLicgzCMUPrXgibXKw5g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/DnlfkibawCntv6K6v63xgETZxW8jodELwpzN1Az1ic8sJDm2NkjuwvylsYhBv3fiaE8My6GcmnP7Ie6E31gKGjeXg/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/TL37nOJlJquykMFqCZgtOajUKzSUo1rNwHxhKBVKUjkKT14z0Na2Xl7svUFeTKFkMLTGP0icNoILjOnKuibgaVHQ/640?wx_fmt=png)

00年代（200x年）

![](https://mmbiz.qpic.cn/mmbiz_png/cIiaa4krtfaaicuTbhN6AjQwQiaWRaFuUvMXeK07ia7xOfWiaUk1nPIpjoYmx7ZMiazHfNrq4DYFtAMgFECayGicdCguw/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/R7Ot3lRU1k8ViauEVVqR7WobEWUW29MtBibMschmOOVO94FOOUUfffR3C1LPo3sOSJFOLlhiayzdVhXIqmX3sTa3g/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/fnFiaUDx0YFNm0iaUkrcIZ5OOCiba2iadMX3HibjfN5UzzE0ubLTiapN3GQSYyCgbY3uD9MAiaca0BsZIdKwQGLOJ3WDw/640?wx_fmt=png)

在00年代初，流体工程问题的**日益复杂和对更快周转时间的需求**导致了CFD行业的转变。这个年代里，期望CFD工程师在几天甚至几小时内交付结果，而不是几周，这意味着他们需要开发新策略来加速纳维-斯托克斯方程和其他相关偏微分方程的解决方案。  

这段时间最重大的挑战之一是涉及的几何形状的尺寸和复杂性的增加，这使得问题难以有效解决。为了应对这一挑战，CFD工程师比以往任何时候都更加依赖**并行处理**，这使他们能够将一个大问题分成更小、更易管理的部分，并同时解决它们。更强大的计算硬件的可用性和新算法及求解器的发展也有助于更快的模拟。

**这个时代见证了商业CFD软件的明确巩固，这些软件变得越来越复杂和用户友好，使工程师更容易使用。**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Ckta6WpYwOBTbnUsoax2TVUaSo4IFOSiamNibU4KTmibLpxlugGaXQAfCe0h1NtmtNbtMzzLTChiarvLwSGZlVOmlQ/640?wx_fmt=png&from=appmsg)

图：示意图，公司内部HPC资源或云计算

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oDTTu8mAaceytwJ96cytVWic1nwkvJ6icdQUVXEGqeicgWhxsTngiczhBPT52p6lsbTbmHTdjLicgzCMUPrXgibXKw5g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/DnlfkibawCntv6K6v63xgETZxW8jodELwpzN1Az1ic8sJDm2NkjuwvylsYhBv3fiaE8My6GcmnP7Ie6E31gKGjeXg/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/TL37nOJlJquykMFqCZgtOajUKzSUo1rNwHxhKBVKUjkKT14z0Na2Xl7svUFeTKFkMLTGP0icNoILjOnKuibgaVHQ/640?wx_fmt=png)

10年代 （201x年）

![](https://mmbiz.qpic.cn/mmbiz_png/cIiaa4krtfaaicuTbhN6AjQwQiaWRaFuUvMXeK07ia7xOfWiaUk1nPIpjoYmx7ZMiazHfNrq4DYFtAMgFECayGicdCguw/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/R7Ot3lRU1k8ViauEVVqR7WobEWUW29MtBibMschmOOVO94FOOUUfffR3C1LPo3sOSJFOLlhiayzdVhXIqmX3sTa3g/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/fnFiaUDx0YFNm0iaUkrcIZ5OOCiba2iadMX3HibjfN5UzzE0ubLTiapN3GQSYyCgbY3uD9MAiaca0BsZIdKwQGLOJ3WDw/640?wx_fmt=png)

在10年代初，CFD工程师面临与对模拟**准确性和可靠性需求**增加相关的新挑战。随着工程问题的日益复杂，对高保真度模拟的需求增加，这意味着模拟必须以更高的分辨率和更多的细节运行。这对CFD工程师来说是一个重大挑战，因为更高分辨率的模拟需要更多的计算能力和更长的模拟时间。

方法一，CFD工程师转向了新的模拟方法，如**自适应网格细化**（AMR），以克服这一挑战。AMR通过在解变化迅速的区域自动细化网格，同时在解相对平滑的区域保持网格粗糙，从而显著降低模拟的计算成本，使高保真度模拟能够更有效地运行。  

另一个重要且更广泛的改进是自动网格化，适用于非常任意的网格，远远超出了最初的四面体方法：

1）**多面体网格**：这个年代，出现了**多面体网格，CFD的终极有限体积形状！**多面体网格化是一种技术，涉及使用多面体元素填充计算域的大部分。例如，STAR-CCM+ / Fluent等成熟商用CFD软件中的多面体网格化算法，使用各种技术生成高质量的网格，这些网格被证明可以显著降低CFD模拟的计算成本，同时保持高水平的准确性并控制内存占用。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Ckta6WpYwOBTbnUsoax2TVUaSo4IFOSiaowujpcD6ZGWM1tlicyu1agLL9AO9J9zD4qX3lZFE5pO1J8SHvcr9tSQ/640?wx_fmt=png&from=appmsg)

2）**修剪单元网格**：修剪单元网格化是一种技术，用于为复杂几何形状生成高质量网格，如汽车零部件或飞机部件。该技术涉及在几何的外部表面上生成高质量网格，然后修剪（切割）几何内部的单元以匹配边界条件。该技术已被证明可以减少网格化时间并提高模拟精度，特别是对于具有具有挑战性的内部特征的复杂几何形状。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/lcvJUXvTHKxwkpjPRqQ16yib4YlI5XplpBuub7qiaPd2jLATHEsCSyeENF6YCle23CXR1yicL45XFLiad0Wiamw8Y6A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/Pvp8YeMs0fdeexVSWRtlaNHm3ibxPgvASzEWMsHFwRntUrH4hYpB3lX52HIEzCPJCUInjYsiaI7jGGANvC2KI8fw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Ckta6WpYwOBTbnUsoax2TVUaSo4IFOSia8QfgDibmCv3EHzO9jWib8ktupzWJ62qG8vQK4Z93pHVqSCyFRsej3T9g/640?wx_fmt=png&from=appmsg)

**修剪单元网格：**示例，如上图，一个2X2X2的六面体组块（左）“遇到”CAD表面；在右边，六面体正在被交叉并生成一个新的由新的绿色边界定的多面体形状。请注意，在这种情况下，剩余的单元没有改变，即网格主要是六面体的，并且这个过程被优化以允许表示边界层的一层棱柱形单元。

![](https://mmbiz.qpic.cn/mmbiz_png/CPWDNgSVM97LAQRic9VW8ezvBKTOSVgTnZxzsg8ZcvE7MGV3adnc6CnFEpTbuTJUBrQnzaxyJ85feiaDfaISuOXw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/VDiaodfib8AH1Kob0VY37JTITUQAyVhL52ibak9CHxnmgib0uye8lW4P9IlEhKEd4YcgicRLXOBnL5x2ibT60YrmdbHA/640?wx_fmt=png)

多面体和修剪单元网格化都有助于CFD的演变和加速，使工程师能够模拟日益复杂的几何形状并降低模拟成本。然而，必须提到“网格化时间”和“网格化内存”（RAM）是显著的。像并行网格化这样的进步，即在多个计算节点上分发它，正在使其更快，但远非实时。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/oDTTu8mAaceytwJ96cytVWic1nwkvJ6icdQUVXEGqeicgWhxsTngiczhBPT52p6lsbTbmHTdjLicgzCMUPrXgibXKw5g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/DnlfkibawCntv6K6v63xgETZxW8jodELwpzN1Az1ic8sJDm2NkjuwvylsYhBv3fiaE8My6GcmnP7Ie6E31gKGjeXg/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/TL37nOJlJquykMFqCZgtOajUKzSUo1rNwHxhKBVKUjkKT14z0Na2Xl7svUFeTKFkMLTGP0icNoILjOnKuibgaVHQ/640?wx_fmt=png)

20年代 （202x年，现在）

![](https://mmbiz.qpic.cn/mmbiz_png/cIiaa4krtfaaicuTbhN6AjQwQiaWRaFuUvMXeK07ia7xOfWiaUk1nPIpjoYmx7ZMiazHfNrq4DYFtAMgFECayGicdCguw/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/R7Ot3lRU1k8ViauEVVqR7WobEWUW29MtBibMschmOOVO94FOOUUfffR3C1LPo3sOSJFOLlhiayzdVhXIqmX3sTa3g/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/fnFiaUDx0YFNm0iaUkrcIZ5OOCiba2iadMX3HibjfN5UzzE0ubLTiapN3GQSYyCgbY3uD9MAiaca0BsZIdKwQGLOJ3WDw/640?wx_fmt=png)

时间来到了现在的202x年，在过去几年里面，对**实时CFD模拟的需求**显著增加。这对需要优化计算资源的工程师来说是一个挑战。  

**GPU**在CFD仿真中提供了显著的计算加速。与传统的CPU相比，GPU拥有更多的并行处理核心，这使得它们能够同时处理大量的数据和计算任务。GPU已成为CFD领域中不可或缺的加速工具，广泛应用于航空航天、汽车设计、环境科学等多个领域。如在2021年，Ansys Fluent进一步推出了原生的GPU求解器，在处理上亿网格的车辆外部空气动力学仿真时，使用GPU求解器可以提升求解效率达5倍，使用多个GPU时，这个效率可以提升至30倍。

研究人员正在探索新的模拟技术，如**降阶建模（ROM）或模型阶数降低**，这允许通过降低问题的计算复杂性来实现实时模拟。模型降低通过构建一个降阶模型来工作，该模型捕获整个模拟的基本特征，同时消除非基本细节。这种方法显著降低了模拟的计算成本，使得在不那么强大的硬件上进行实时模拟成为可能。这对CFD工程师来说是一个重大进步，使他们能够对以前无法实时模拟的工程问题进行实时模拟。

**机器学习的最新进展，特别是几何深度学习**，已经导致了超越模型减少并摆脱以前参数化约束的新模拟技术。

几何深度学习是一种机器学习技术，可以学习几何结构的表示，例如基于工业3D CAD几何形状的CFD模拟中发现的结构。CAD被“学习”为对象的3D空间表示，无需手动参数化。

这种新方法在模拟复杂的工程问题中显示出惊人的结果，为CFD中的实时模拟提供了更多机会。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Ckta6WpYwOBTbnUsoax2TVUaSo4IFOSiagrt1ZxJWibBXsEJmG3Y0uiaXmhobHRNGx3g9wXjG7S6EwuHIU7PdBMHw/640?wx_fmt=png&from=appmsg)

  

ss

![](https://mmbiz.qpic.cn/mmbiz_png/wjv6KiajteIMOoYnI1cBlp6fA1qb9er76qBd3mcB4OiaAaHfBkLAqDqEA3HnTLW2SwVeGDzRe5SiakjfORALgAlJg/640?wx_fmt=png)

 小结一下    

  

  

从上面各个年代的需求背景和技术成熟度来看，为了解决CFD计算效率这事儿，不同时代出现的相应技术：

**年代**

**提高计算效率方法  
**

**80-90年****代**

**1、网格生成器**

**2、多核CPU并行**

**3、可视化后处理**

**00年代**

**1、HPC大规模并行**

**10年代**

**1、自适应网格**

**2、多面体网格**

**3、修剪单元网格化**

**20年代（现在）**

**1、GPU加速计算**

**2、降阶模型**

**3、机器学习，特别是几何深度学习**

  

  

  

如果写的还可以，请点亮右下角点赞和在看![](https://mmbiz.qpic.cn/sz_mmbiz_png/Ckta6WpYwOBTbnUsoax2TVUaSo4IFOSia7XgVerTmxKJlRb7cnyl97ibG46hbQxPrYnBiaTiaZegj3ibfDY9cx9rrhQ/640?wx_fmt=png&from=appmsg)图标，对小编的小小鼓励噢

![](https://mmbiz.qpic.cn/mmbiz_gif/MGtJN4gibiaekOQzY66t4AjFibH3rnNfZ3RZN164W1ibUj2OpcMssEBu9wdqCPZgRs0sI2NI4sPdNfZXoVOr7BpcdQ/640?tp=webp&wxfrom=5&wx_lazy=1&wx_fmt=gif)

诚邀您 关注本公众号