# 聊一聊近场（二）-源重构（SRM）及联合仿真


> 原文地址: [https://mp.weixin.qq.com/s/gfz2LFOhxC0T-O1zQbHk5A](https://mp.weixin.qq.com/s/gfz2LFOhxC0T-O1zQbHk5A)

说在前面

近场分布相较于远场，包含着更加丰富的信息，基于近场分布进行“源重构”（Source Restruction Method）可以在很多应用场景能实现简化计算，提高设计效率的目的。主要应用场景有天线布局设计、电磁兼容（EMC）分析、电大尺寸复杂系统互耦分析等.....

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_000_0ac3edb9636b.png)![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_001_0f5622d98a93.png)![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_002_ea974df11b72.png)

  

所谓“源重构”技术，即基于惠更斯等效原理，通过提取复杂天线等辐射器件的近场分布，生成近场等效源，用以替代天线的辐射作用，主要步骤为：

1.  获取近场数据：首先通过精确的全波仿真（如FEM、FDTD、MoM）或实际测量，得到天线在某个封闭表面（Huygens面）上的切向近场（电场E和磁场H）分布。这个表面将天线本身和外部待分析区域分隔开。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_003_478c73f9e4f1.png)

2.  建立等效源：根据惠更斯-等效原理或表面等效原理，将封闭表面上的切向场等效为表面电流（J\_s = n × H）和表面磁流（M\_s = -n × E）分布。这样，天线内部的复杂结构可以被移除，取而代之的是这个等效源面。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_004_ab8537d4bf3d.png)

3.  计算远场或近场：之后，任何需要计算天线外部场（无论是远场方向图，还是与附近物体的相互作用）的问题，都只需要对这些已知的、相对简单的等效源 J\_s 和 M\_s 进行积分即可（例如使用矢量位积分公式），而无需再次求解包含复杂天线结构的整个系统。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_005_6eba9e3f43c7.png)

源重构方法的主要优势在于：

· **降维：**将复杂的三维体积问题转化为二维表面问题。  
· **解耦：**将天线的设计/仿真和其应用场景的仿真分离开。只需计算一次天线的近场，就可以将其等效源用于多种不同的安装环境（如放在平台不同位置、附近有不同物体等）。  
· **加速计算：**对于大型系统（如天线阵列安装在飞机上），不需要对整个飞机和天线的精细结构一起进行巨量网格剖分，只需在等效源面上进行密集采样，而在其他区域使用更粗糙的网格或其他方法。

想要深入了解源重构（SRM）技术理论介绍的读者，可以阅读Tapan K. Sharkar的著作《Electromagnetic Systerms and Its Associated Metrology》第五章的内容。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_006_f96fc6806781.jpg)

本文将围绕“源重构”技术，详细介绍其底层基础理论，再基于最新研究成果介绍该方法的常见应用场景，最后基于三大通用仿真软件HFSS、CST以及FEKO，介绍基于“源重构”技术进行联合仿真，提高效率的实践过程。全篇行文逻辑如下：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_007_b004bb8f7195.png)

正文

# 

# 一、基础理论

### 1. 唯一性原理

电磁唯一性定理是电磁学中的核心理论之一，它从根本上回答了“在什么条件下，一个区域内的电磁场分布是唯一确定的”这一关键问题。该定理为电磁场的分析、计算（如有限元法、边界元法）和工程设计（如天线、微波器件、电磁兼容）提供了严格的理论依据。

-   **物理本质**

电磁场的行为由**麦克斯韦方程组**和**介质本构关系**（描述电磁场与介质的相互作用）共同决定。但仅依靠这两组方程，无法直接确定具体场景下的唯一解——因为方程组是“普适的”，而实际问题中“区域范围”“边界状态”“场的初始情况”等细节会影响最终解。

电磁唯一性定理的核心思想是：**通过补充“边界条件”和时变场“初始条件”，可以唯一确定给定区域内的电磁场分布**。其物理本质是“电磁场的演化和分布具有因果性”——过去的状态（初始条件）和外部的约束（边界条件）共同决定了当前的状态，不存在“无原因的多解”。

时变电磁场中，电场与磁场通过“电磁感应”（）和“位移电流”（）紧密耦合，需同时考虑两者的唯一性，且需补充初始条件（时间维度的约束）。 

● 唯一性条件 

时变电磁场的普适方程为麦克斯韦方程组（微分形式）：

1.  （法拉第定律）
    
2.  （安培-麦克斯韦定律）
    
3.  （高斯定律）
    
4.  （磁通连续性）
    

结合介质本构关系（、、，为电导率），时变电磁场的唯一性定理可表述为： 对于给定的区域（边界为），若满足以下条件，则在的所有时刻，内的电磁场和是唯一确定的：

1.  初始条件：时刻，内所有点的电场和磁场已知（“初始场分布”）；
    
2.  边界条件：的所有时刻，边界上所有点的以下物理量之一已知： ○ 电场的切向分量（Dirichlet型边界）； ○ 磁场的切向分量（Neumann型边界）； ○ 一部分边界上已知，另一部分边界上已知（混合边界）；
    
3.  场源条件：的所有时刻，内所有点的电荷密度和电流密度已知（“激励源分布”）。
    

-   **数学底层**

唯一性定理的数学底层是“界 - 域” 的关系，本质是 “局部规律 + 全局约束 = 唯一解”。无论是电磁场的唯一性定理，还是微积分中的微分方程定解理论，其核心逻辑均是：

1.  “域” 内的微分方程描述 “局部变化规律”（如麦克斯韦方程组描述场的局部散度 / 旋度），但无法确定全局唯一解；
    
2.  “界” 的条件（空间边界条件 / 时间初始条件）提供 “全局约束”，消除通解中的任意性；
    
3.  两者结合，最终得到 “域” 内唯一确定的解（场分布或函数）。
    

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_008_6af5d81edf3c.png)

因此，“边界条件确定则区域内场分布确定”，正是微积分中 “界通过约束微分方程的解，决定域内函数行为” 这一普适数学关系，在电磁学这一具体物理领域的完美体现。

### 2.惠更斯等效原理  

往期文章[《CAE设计师的你有必要了解计算电磁学吗？》](https://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247484028&idx=1&sn=8708a1d9cbccfc2fdc2926e0c47ea60e&scene=21#wechat_redirect)详细介绍了矩量法MoM算法的三大理论支撑，即**“格林函数”，“源-场关系”，“等效原理”**三个子理论，它们是MoM算法如此特立独行的根本原因。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_009_3d68dfd3e5b8.png)

其中“格林函数”（表示场点位置r与源点位置之间的距离），表征了空间点源 所产生的电磁场再空间的分布。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_010_8d3d70f9fe49.png)  

  

如果将电磁波的传播类比为光的传播话（当然光也是电磁波的一种），那么这里的点源就可以类比为在处放置一个功率为1w的LED小灯泡，它的光会照亮整个空间，而空间中任意位置r处的光照强度就可以表示为，亮度在小灯泡处()趋于无穷大，距离小灯泡越远，亮度越低。

  

而“源-场关系”则在“格林函数”的基础上，描述了”源“不是一个点而是”弥漫“式分布时，空间电磁场的分布。类比之下，格林函数给出了一个功率为1W的LED小灯泡在空间各个地方产生的光照强度的计算公式，但是如果空间中不只一个LED灯泡，而是有N个LED小灯泡组成的阵列，而且这些每个小灯泡的功率还不都是1W（假设第i个小灯泡位置为的功率为），那么这个LED阵列在空间中任意位置r处产生的光照强度就可表示为每个小灯泡在r处产生的光照强度的叠加，而每一个小灯泡在r处产生光照强又应该是1w小灯泡的倍，即为：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_011_0f7ed43beec6.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_012_08839c4ed90c.png)

所不同的是，前面LED灯阵列为离散分布，而电磁场分布中的电流“J”和磁流“K”的分布为连续分布，因此求和“∑”就变成了求积分“∫”。至此，空间中的场分布“E”和“H”就和目标体上的源分布“J”和“K”建立了联系，这就是“源-场关系”。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_013_f9938514d3b3.png)

现在，我们正式介绍“等效原理”！

电磁散射问题求解看似是一个非常复杂的物理学问题，因为计算的场景千变万化，目标的形式也多种多样，有反射面天线的辐射问题，也有天线罩的透波问题以及飞行器的RCS问题……，然而本质就是计算目标如何干扰入射电磁波传播，进而影响全空间电磁场的分布，其基本模型很简单：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_014_189b9ec46578.png)

传统电磁计算过程，会高度关注辐射体复杂的结构特征，而等效原理则试图弱化这一过程，主要措施即**使用目标体上的等效源将目标完全代**替，其关注于“等效源”而非“目标”，在等效原理的世界里，没有“人”，只有“夜光火柴人”。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_015_4149d94ab191.png)  

等效源的计算：假设目标体1为电参数为和的均匀介质体，自由空间充斥着电参数为和的介质，一束已知分布的电磁波（电场分布为，磁场分布为）照射到目标体1上，目标体1产生的散射场为和，空间中总场应为入射场和散射场之和，即，。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_016_62be449bf0ed.png)

等效原理就说：以上两种物理模型，对于2区域的电磁场分布是等效的，目标体1对 空间中电磁场分布的影响可以用分布在目标体表面的等效源（面电流和面磁流）在空间中产生的散射场进行等效。同样地，等效源和产生的散射场和可以依据源-场关系进行求解:

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_017_8a73a49fde22.png)

而等效源和会通过边界上电场E和磁场H分布进行求解。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_018_6359b43ce137.png)

二、应用介绍

1.  天线布局设计

随着汽车智能化程度日益提高，V2X技术（车联网技术：即车与车，车与人，车与基础设施等之间的互联互通）逐渐被重视，而V2X仿真则是则是则评估车载天线性能设计以及布局的重要手段，直接决定了车联网通信性能之优劣。其中涉及的主要限制有二：1）天线与车辆的集成仿真需要处理复杂材料（天线设计往往包含多层介质材料）和多尺度（天线的尺寸显著小于汽车尺寸）几何结构，复杂的材料增加了仿真模型的复杂性，多尺度结构所带来的多尺度网格，会导致求解矩阵的病态化；2）天线制造商与V2X通信设计商往往分属不同公司，彼此之间往往不存在直接联系，从而导致V2X设计师无法直接获得天线模型，开展仿真。这两点制约了V2X仿真工作的开展。文献《A Hybrid-Equivalent Surface-Edge Current Modelfor Simulation of V2X Communication Antennas With Arbitrarily Shaped Contour》提出了一种混合等效表面-边缘电流的模型，通过提取车载天线近场口面处的等效面电流和边缘电流，用以等效天线自身的辐射性能，并于汽车模型进行一体化仿真，显著加速了天线和车辆的集成仿真。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_019_db6e4d0b519f.png)

2.  波导缝隙近场提取与应用

波导缝隙天线阵（SWA）广泛应用于航空器，但安装在大型平台（如飞机）时，其辐射方向图会受平台及周边系统显著影响。为保障电磁兼容性与系统互操作性，需通过仿真评估其安装性能，但存在两大核心问题：1）**信息缺失**：天线厂商通常不提供 SWA 的详细几何模型，难以直接建模；2）**计算复杂**：即使获取模型，SWA 的复杂内部结构与平台的大尺度特性形成 “多尺度几何”，导致仿真计算量极大，效率低下。

往期文章[《萌新笔记-天线》](https://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247489749&idx=1&sn=cebd9b0b1b63ea37049966466b297d47&scene=21#wechat_redirect)针对波导缝隙天线的辐射机理有过详细介绍：想要波导上的缝隙产生辐射，开缝的**“位置”**和**“方向”**十分讲究，如图所示分别为等尺寸波导内的磁场分布以及波导表面电流分布，可知：磁场在每个周期内呈**“涡旋状”**，由于表面电流与切向磁场的关系“![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_020_ba8e371e32f8.png)”，因此表面电流在每个周期内呈**“辐射状”**。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_021_dc0a6d64f8fb.gif)

波导腔内的磁场分布

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_022_b8cb5dfde2d4.gif)

波导金属壁上的电流分布

想要获得有效辐射，**缝隙走向需要与“磁场”相平行，从而才能与“电流”相垂直**，使得其有效的**切割“电流”**，被切割的“电流”在缝隙的宽边两侧形成“电压差”，从而在缝隙中激发位移电流“![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_023_45093e74caa0.png)”，由上面的理论分析可知，**缝隙间电场“**![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_024_94d6000cb9cc.png)**”正是产生缝隙辐射的根本原因**。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_025_6e150d9cc0c8.png)

波导缝隙的辐射机理

文献《Evaluating Airborne Slotted Waveguide Antenna Arrays Using an Equivalent Model Based on Near-Field Samplings Over Slots》基于**等效原理**，避开 SWA 复杂内部结构，仅通过 “缝隙近场采样 + 简化载体” 构建等效模型，具体步骤如下：1）**近场采样**，采集 SWA 辐射缝隙上的切向电场，仅缝隙处电场贡献辐射；且基模主导，仅需采样电场的_Ey_分量）。每个缝隙取 5 个采样点，对于 2×4 阵列（8 个缝隙），共需 40 个_Ey_采样点；2）**等效源与载体构建**，将采样得到的电场转换为**等效磁流源（M）**，并将其加载到与原 SWA 轮廓尺寸完全一致的闭合 PEC 盒上，形成等效模型。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_026_5d05ed889831.png)

对比无载体和有载体状态下，波导缝隙天线与缝隙天线等效源的远场方向图仿真结果可知：

1.  **无载体状态（无平台）辐射方向图**  
    等效模型与原 SWA 在 E 面（xoy 平面）和 H 面（xoz 平面）的归一化辐射方向图高度吻合（如图 3 所示），证明等效模型可准确复现 SWA 的卸载辐射性能。
2.  **安装状态（飞机平台）辐射方向图**  
    两者在 E 面、H 面的安装辐射方向图一致性良好（如图 4 所示），验证等效模型能有效捕捉平台对 SWA 辐射的影响。
3.  **计算效率提升**  
    等效模型因避开了 SWA 复杂内部结构的建模，减少了未知量数量，显著降低了 CPU 时间与内存消耗。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_027_8a4ba8d91810.png)![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_028_68de08ce0072.png)

无载体的方向图对比

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_029_1791d6df86e2.png)![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_030_3c9150d8fae4.png)

有载体的方向图对比

3.  电大尺寸收发系统互耦分析

通信、传感及国防领域的现代电子系统常包含多个功能各异的辐射子系统，需严格控制电磁干扰以保障系统正常工作。天线间的有害耦合可能导致接收子系统性能下降，甚至因近距离强功率信号损坏精密电子元件，因此需高效、准确地评估不同天线布局与工作场景下的耦合风险。传统方法有：1）**弗里斯传输方程**，仅适用于两天线处于彼此远场的场景，若天线间距较近，计算精度会显著下降；2）**暴力建模法**，对包含两天线的整体几何结构直接建模，会形成电大尺寸计算域，对硬件算力要求极高，实际应用中难以实现。

文献《Coupling Analysis of Electricaly Carge Antennas Using the Equivalence Principle》基于**等效原理**，将原本复杂的天线耦合问题拆解为 “发射 - 传播 - 接收” 三个独立子问题，分别处理，从而简化计算、降低硬件需求，且问题规模与天线间距无关。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_031_26b5362a5c63.png)

构建10×10 平面相控阵天线，具有复杂几何细节、电大尺寸、多阵元（100 个）及 2:1 宽频带特性，同时作为 TX 和 RX 天线以保证收发问题复杂度一致，经过计算，等效原理方法与直接计算结果在全频段（5.5-10GHz）高度吻合，差值小于 0.53dB。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_032_0ae77dbed424.png)

对比直接计算法和基于等效源方法，取两个不同间距状态分别对比，结果显示，直接计算法的内存消耗分别为26.4GB和36.7GB，基于等效原理方法，内存消耗分别下降至11.4GB和11.5GB，改善明显。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_033_5cb372acc75e.png)

## 仿真实践

### 一、近场提取  

#### 1.FEKO

**1）设置：**congfiguration->configuration speciffic->Requests->nearfieds，添加近场求解项。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_034_bd79cd14aefb.png)

在近场设置的弹窗中，通过下拉按钮通过坐标系类型的选择，实现不同形状近场的设置，平面外形近场就选Cartesian，圆柱面外形近场选择cylindrical，球面外形近场选择spherrical，另外也可以设置长方体、圆柱体或球体形状的近场求解区域。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_035_35d03f333c8e.png)

**2）查看：**求解完成后，在solve/Run->POSTFEKO中查看近场的分布，双击对应的近场标签，即可显示近场分布，在右侧框选一栏中可以对近场近场参数进行设置，按需选择近场的位置、工作频率、矢量分量以及瞬态分布等，在下拉按钮中可以对近场类型进行选择，可选的有电场强度、磁场强度、坡印廷矢量等，在不同的应用场合，关注的近场类型也不尽相同。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_036_a88eaeed0121.png)

**3）导出：**在POSTFEKO->Home模块中，通过EXport功能，可以将近场的电场和磁场分布分别导出为.efe和.hfe格式的文件。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_037_db41d7685107.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_038_9e341b038e05.png)

#### 2.HFSS

HFSS查看近场的操作：

**1）设置/查看：**与FEKO不同，HFSS求解近场时，需要新建或者选中一个平面（或体）作为”载体“，来呈现近场特性。在左侧项目树中，field overlays->plot field，选择需要显示的近场类型。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_039_fad795bb9e3d.png)

**2）后处理/导出：**field overlays->calculator，打开近场后处理界面，通过input->quantity导入待处理的近场类型，通过general、scalar以及vector模块对进行后处理，并通过output模块将处理后近场导出。设置导出区域的口径大小及采样间隔，即可获得近场数据。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_040_5a51cb757bf5.png)

**3）格式变换：**导出的近场数据如图所示，基本格式为：采样点坐标+采样点三分量实部/虚部数据。其与FEKO所需要的近场数据形式基本一致。所不同的有两点：1）采样路径与feko的有所不同；2）FEKO近场数据包含了数据说明的头文件以及具体数据的格式，略有差异，稍加改动即可。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_041_d620c398a131.png)

PS：众所周知，近场的分布随着相位或者时间的变化而变化，那究竟该提取哪个相位或时间对应的近场分布呢？作者也有过同样的疑问，深思以下即知：对于时谐电磁场，场分布的形式可以表示为：

ω

复指数ω的辐角ω随时间线性增大，对应真实场的周期性波动，因此取任意时刻的场分布，其所对应的场的时-空分布，并无本质区别。

#### 3.CST

往期文章[《萌新笔记-CST》](https://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247506104&idx=1&sn=556df49ae8bd07af004ff1ae064150ca&scene=21#wechat_redirect)中关于阵列天线的近场查看和提取进行了简单说明，本文将对操作步骤稍作展开说明。

**1）设置：**CST是通过添加场监视器的方式来远、近场分布的，项目树->field monitors->new field monitor，进行近场监视器的设置，近场类型包括电场场强E、磁场场强H、功率流、电流密度等，与HFSS、FEKO也大致相同，通过坐标范围设置，来确定近场范围，可以观察面区域内的近场特征，也可以对体区域内的近场特征进行考察。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_042_c11809d6473d.png)

**2）查看/后处理/动图：**计算完成后，在项目树->2D/3D results中对应近场类型文件夹下，查看相应的近场分布，通过矢量/幅值、近场特征参数设置、截面设置等按钮，得到期望的近场分布，在animate fields中可以观察近场的动图。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_043_6000f95e01a4.png)

**3)导出：**近场仿真结果导出：Post-Processing—>Export—>Plot Data，按照采样点间隔的要求，导出口径上电场/磁场的仿真结果。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_044_e1cc71a24ddc.png)

**4）格式变换：**导出的近场数据如图所示，基本格式为：采样点坐标+采样点三分量实部/虚部数据。其与FEKO所需要的近场数据形式基本一致。所不同的就是FEKO近场数据包含了数据说明的头文件以及具体数据的格式略有差异，稍加改动即可。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_045_6edcfcad4e58.png)

### 二、联合仿真

往期文章[《CAE设计师的你，有必要了解计算电磁学吗？》](https://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247484028&idx=1&sn=8708a1d9cbccfc2fdc2926e0c47ea60e&scene=21#wechat_redirect)以及[《](https://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247505489&idx=1&sn=9a8fefe24ff2bb0970e84a1fcc06a971&scene=21#wechat_redirect)[电磁计算方法的发展与展望](https://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247505489&idx=1&sn=9a8fefe24ff2bb0970e84a1fcc06a971&scene=21#wechat_redirect)[》](https://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247505489&idx=1&sn=9a8fefe24ff2bb0970e84a1fcc06a971&scene=21#wechat_redirect)对计算电磁学领域三大主流算法（有限元算法FEM、时域有限差分算法FDTD以及矩量法MOM）进行了详细展开。工程上，三种主流算法各自形成了电磁CAE领域成熟的商业软件，其中要以达索公司的CST（有限积分法），ANSYS公司的HFSS（有限元）以及Altair公司（已于2024年被西门子收购）的FEKO（矩量法）应用最为广泛。大体而言：基于有限积分法FIT（类似于FDTD的时域方法）的CST更加适合于宽带、含复杂介质的计算场景（如比吸收率SAR）；基于有限元FEM算法的HFSS更加适合含精细结构的电磁辐射计算场景（如天线仿真）；基于矩量法MOM（及对应快速算法多层快速多极子算法MLFMM）更加适合于电大尺寸、开放空间散射计算场景（如目标RCS）。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_046_63ed17be4f25.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_047_8a67c95e13fd.png)

正因为三大主流商用电磁仿真软件的特点，因此，所谓的联合仿真通常而言按如下流程开展：

1.  基于CST、HFSS或者FEKO软件，对含有精细结构的复杂天线进行仿真；
2.  提取近场分布数据，利用源重构技术，生成天线近场等效源；
3.  将等效源按照FEKO的源格式进行调整并导入；
4.  利用等效源与电大尺寸目标进行一体化仿真。

从而实现降低内存，提高计算效率的目的。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_048_ea420a9c466a.png)

其中步骤3，对于CST软件生成的近场文件，仅需在头部按照FEKO近场文件标准添加文件说明即可，文件说明注意电场/磁场说明、频率以及采样点数目按实际情况进行修改。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_049_0483065e2ab7.png)

HFSS软件生成的近场文件的采样路径与FEKO软件有所区别，需要对采样路径进行调整后，在类同与上述CST文件的修改过程，添加头部文件说明即可。采样路径的修改可以通过下面的简单代码实现。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_050_4504eb1c267c.png)

`% 读取原始数据   data = load('horn_efe.txt');      % 提取坐标和场分量数据   x = data(:, 1);   y = data(:, 2);   z = data(:, 3);   Ex_real = data(:, 4);   Ex_imag = data(:, 5);   Ey_real = data(:, 6);   Ey_imag = data(:, 7);   Ez_real = data(:, 8);   Ez_imag = data(:, 9);      % 确定x和y的唯一值   unique_x = unique(x);   unique_y = unique(y);      % 初始化新的数据矩阵   new_data = [];      % 先沿着x轴遍历   for i = 1:length(unique_y)       current_y = unique_y(i);       % 再沿着y轴遍历       for j = 1:length(unique_x)           current_x = unique_x(j);           % 找到对应x和y的行           rows = find(x == current_x & y == current_y);           if ~isempty(rows)               % 将对应行的数据添加到新数据矩阵               new_data = [new_data; data(rows, :)];           end       end   end      % 将新数据写入文件   dlmwrite('new_horn_efe.txt', new_data, 'delimiter', ' ');      disp('采样路径已更改，新数据已保存到 new_horn_efe.txt 文件中。');   `

以HFSS软件生成近场为例，计算波导喇叭的远场分布和近场分布如下图所示：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_051_082bf7316ebb.png)

按照上述近场提取步骤，提取波导喇叭的近场，并修改格式适应FEKO要求并分别另存为.efe（电场分布数据）和.hfe（磁场分布数据）格式的文件，如下图所示，在FEKO中建立近场源，其中E-field files一栏导入.efe文件，H-field files一栏导入.hfe文件，近场源的口径大小和采样点数目与文件保持一致。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_052_2c74ee2f0366.png)

在源设置中，选择前面建立的近场文件，建立进场源，即可开展仿真计算。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_053_dbd542a33f48.png)

将FEKO近场等效源的计算结果与HFSS中的实际天线的计算结果进行了对比，可以看出方向图曲线基本吻合，但是还是存在一些差异，其中最大增益相差0.6dB左右，旁瓣和尾瓣等小量还是些许出入，主要原因为提取的矩形非封闭口面上的近场数据加之天线波束较宽，使得提取近场信息“泄漏”较多，最终导致两者方向图之间存在些许差异。可以预见，近场口径增大或天线的波束窄、能量集中的情况下，二者的吻合度会更高。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_054_b0eea222c1fa.png)

总结  

本文针对源重构（SRM）技术的应用背景、底层理论进行了详细介绍，并且基于三大商业电磁仿真软件CST、HFSS以及FEKO，介绍了使用该技术进行联合仿真的实现过程，合理使用可以大幅提高“复杂天线+电大载体”等仿真场景的计算效率。

PS：文中参考文献及相关案列材料点击文末“阅读原文”，可自行下载。

**参考资料  
**

 **\[1\] Zhao H, Zhang X, Hu J, et al. A Hybrid-Equivalent Surface-Edge Current Model for Simulation of V2X Communication Antennas With Arbitrarily Shaped Contour\[J\]. IEEE Internet of Things Journal, 2021;**

**\[2\] 谢处方，饶克谨，赵家升，等。电磁场与电磁波（第 4 版）\[M\]. 北京：高等教育出版社，2007.**

**\[3\] Zhao W J, Wang B F, Liu E X, et al. An Effective and Efficient Approach for Radiated Emission Prediction Based on Amplitude-Only Near-Field Measurements\[J\]. IEEE Transactions on Electromagnetic Compatibility, 2012;**

**\[4\] Cano F, Sierra-Castañer M, Burgos S, et al. Applications of sources reconstruction techniques: theory and practical results\[J\]. 2025;**

**\[5\] Koksoy S, Ozturk A K. Coupling Analysis of Electrically Large Antennas Using the Equivalence Principle\[C\]//The 8th European Conference on Antennas and Propagation (EuCAP 2014);**

 **\[6\] Gao S P, Lee H M, Zhao W J, et al. Evaluating Airborne Slotted Waveguide Antenna Arrays Using an Equivalent Model Based on Near-Field Samplings Over Slots\[C\]//2017 Asia-Pacific International** **Symposium on Electromagnetic Compatibility (APEMC);**

**\[7\] Sarkar T K, Salazar-Palma M, Zhu M D, et al. Modern Characterization of Electromagnetic Systems and Its Associated Metrology\[M\]. Hoboken, NJ: Wiley, 2021；**

**\[8\] Park J H, Kong K B, Park S O, et al. Sparse Equivalent Source Method for Radiated Emission Analysis of Shielded Circuits\[C\]//2016 URSI Asia-Pacific Radio Science Conference. Seoul, Korea: IEEE, 2016；  
**

**\[9\] Álvarez Y, Las-Heras F, García C. The Sources Reconstruction Method for Antenna Diagnostics and Imaging Applications\[M\]//Electromagnetic Waves. Rijeka: InTech, 2012；**

 **\[10\] 肖启晗. 基于近场扫描的屏蔽罩内辐射源重构方法\[D/OL\]. 2025.**

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_055_d543d6eca76a.gif)

[聊一聊近场（一）](https://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247513384&idx=1&sn=66777c2cbe31ba07f9c450e274f508a5&scene=21#wechat_redirect)

[缘起收敛性（三）——CAEer视角下的线性代数（part1）](https://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247512839&idx=1&sn=13f24a1b0e90be00d34c7f0b0a947312&scene=21#wechat_redirect)

[低散射载体设计与研究](https://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247512626&idx=1&sn=505a383f35587d20d2504e243c350722&scene=21#wechat_redirect)

[飞行器外形隐身设计及边缘绕射理论](https://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247512102&idx=1&sn=a88125af878aa26969355f497a2c0676&scene=21#wechat_redirect)

[基于特征提取+RLGO算法的FSS天线罩快速计算方法](https://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247507987&idx=1&sn=12e3955563d43d9f2eeae3e789afcc04&scene=21#wechat_redirect)

[《复分析：可视化方法》-先导篇](http://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247507826&idx=1&sn=fd551b6637db1820311f612c6eb76226&chksm=cf318800f8460116afe9b57fc33b16b5d422d4e928af591712d0faac4d0242f0810f8135e27d&scene=21#wechat_redirect)  

[萌新笔记——CST（一）](http://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247506104&idx=1&sn=556df49ae8bd07af004ff1ae064150ca&chksm=cf318fcaf84606dc6d2afcdcb2c4237c6f28df92957790f3d6c7703e52b590933041db315a2c&scene=21#wechat_redirect)  

[基于相位补偿方法的天线增益提高](http://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247506009&idx=1&sn=5fd912612acc99e5f5ad492d0cfc8cdf&chksm=cf318f2bf846063d95b1ac9540eb451d256cc4bfc1288c86937547e100639357543030e8ef17&scene=21#wechat_redirect)  

[电磁计算方法的发展与展望](http://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247505489&idx=1&sn=9a8fefe24ff2bb0970e84a1fcc06a971&chksm=cf318123f846083520df15cfdea0f8d2828a3de0d45804f59d7f7cbcd2c9208493fe9ae79121&scene=21#wechat_redirect)  

[相控阵天线建模工具升级（附源代码）](http://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247505239&idx=1&sn=e47e6a2742ec19cde1a2afe7b4eed93c&chksm=cf318225f8460b33d3ce63823a601fd23a1e1aa57fdd1c09f6a5ebc4d77841f2626a6c633ca9&scene=21#wechat_redirect)  

[阵列天线分析与综合基础（实践篇）](http://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247504991&idx=1&sn=cb0ee54141d5ec8b28887ecd3f9711fd&chksm=cf31832df8460a3b40619c80d77b7cbf12d165450ed5bfd79b006f34444a05d16610845793c6&scene=21#wechat_redirect)  

[天线方向性的几种表示（TIPS）](http://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247503000&idx=1&sn=86c788f39001399373e12e39a61a2917&chksm=cf319beaf84612fc21324f402d2a283e8ba482a5dc4684075643b7d1e1abe5cb7354fea86562&scene=21#wechat_redirect)  

[阵列天线分析与综合基础（理论篇）](http://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247502960&idx=1&sn=6ad311ff36bd51d12f8813abf9425b9e&chksm=cf319b02f8461214fb161d10cddb4191edcebfcd411df0b5b4dcfa58ba4b340ee7e04dcc4eb5&scene=21#wechat_redirect)

[萌新笔记——天线（原理篇）](http://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247489749&idx=1&sn=cebd9b0b1b63ea37049966466b297d47&chksm=cf324fa7f845c6b192d1c5ecc314ff6984f663c50f12c3aaf36456261f082b457ba7c185aef1&scene=21#wechat_redirect)  

[CAE设计师的你，有必要了解计算电磁学吗？](http://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247484028&idx=1&sn=8708a1d9cbccfc2fdc2926e0c47ea60e&chksm=cf32550ef845dc1811117e7a7f531c94847062a228c8c01003242f1b433227675f6fe67907a8&scene=21#wechat_redirect)

[Hypermesh萌新笔记（一）](http://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247483738&idx=1&sn=e8daaf2f90ba6d1351b711b704707d8f&chksm=cf325628f845df3ec5a127cfd1e2f6cbe477cbcaf81665fbe2afa7031cfe8523a1e91a9e1ce1&scene=21#wechat_redirect)  

[FEKO进阶道路上的一些常见技巧（一）](http://mp.weixin.qq.com/s?__biz=Mzg3NjM4MDcwMQ==&mid=2247483863&idx=1&sn=9663691e9826ab6937ca618337984be0&chksm=cf3256a5f845dfb31a74a52e523625a24857a2c0d907d2afed516753666d73d6f360e4c1ce14&scene=21#wechat_redirect)  

  

更多有关电磁CAE相关内容，请关注“电磁CAEer”，将为你提供从基础理论->软件使用->算法赋能->应用场景等有关“电磁仿真”全方位的认识。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\聊一聊近场（二）_源重构（SRM）及联合仿真_images\img_056_ec466146c956.jpg)