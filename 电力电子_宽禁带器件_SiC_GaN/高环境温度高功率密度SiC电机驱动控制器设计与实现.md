# 高环境温度高功率密度SiC电机驱动控制器设计与实现


> 原文地址: [https://mp.weixin.qq.com/s/JIxdxAq6xpw--QEkF0IsFA](https://mp.weixin.qq.com/s/JIxdxAq6xpw--QEkF0IsFA)

文章来源：电工技术学报

作者：郑丹； 温旭辉；范涛； 宁圃奇 ；张 栋（高密度电磁动力与系统重点实验室（中国科学院） 中国科学院电工研究所 北京 100190）

摘要： 碳化硅（SiC）作为世界公认的替代硅（Si）的下一代半导体材料，具有耐压高、开关速度快、开关损耗小的优势，是实现车用电机控制器功率密度提升的关键要素。该文面向SiC电机驱动控制器更高工作温度、更高功率密度、更高可靠性运行的前瞻需求，首先通过高密度自动化布局对功率模块、支撑电容以及母排进行设计，在满足电气杂散参数、热耦合参数约束的前提下，以体积最小为设计原则进行主要功率组件的协同优化设计；应用无源与有源相结合的混合型滤波器进一步降低控制器整体尺寸；在完成功率电路小型化设计的基础上，突破SiC模块结温在线监测方法，通过主动热管理技术实现结温闭环控制下的最大功率输出。基于上述研究成果，开发出105℃环境温度下，峰值功率127 kW、功率密度47.8 kW/L、通过传导电磁干扰等级3的全SiC电机驱动控制器。

关键词：SiC， 电机控制器， 功率密度， 自动化布局， EMI滤波器， 结温控制

0.引言

高环境温度、高功率密度、高可靠性运行一直是新能源汽车电机驱动控制器（以下简称控制器）不断突破的发展目标。自1970年以来，电力电子变换器的功率密度平均每10年会随着功率半导体器件的发展而翻一番。目前Si基绝缘栅双极晶体管（Insulated Gate Bipolar Transistor, IGBT）器件的电机驱动控制器功率密度达到23.5 kW/L，环境温度达到65℃，已逼近极限值。

SiC作为第三代宽禁带半导体材料的典型代表，与Si材料相比，具有禁带宽度大、击穿场强高、饱和漂移速率高、热导率高等优点。SiC金属氧化物场效应晶体管（Metal-Oxide-Semiconductor Field- Effect Transistor, MOSFET）器件的高温、高效和高频特性可以进一步提升控制器功率密度和温度适应性，大幅降低整车循环工况的电能损耗，得到世界各国车企和科研机构的高度重视。美国能源部电动汽车项目中60%与SiC器件应用相关；欧洲制订了SiC电力电子技术应用计划（ESCAPEE）；我国在“十三五”期间部署了新能源汽车试点专项，明确提出研制冷却液温度高达105℃、峰值功率密度大于36 kW/L的SiC电机驱动控制器，汽车工业学会预测到2035年乘用车电机驱动控制器功率密度将达到70 kW/L。因此，高环境温度、高功率密度是车用SiC电机驱动控制器的发展方向。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDibuDSsfYZRzVLVVX8HYyKkbibGflNkJ3laPHEPiczV95dRNTokt1E88hg/640?wx_fmt=jpeg&from=appmsg)

图1 三款先进SiC控制器实物

Fig.1 Photos of 3 advanced SiC controllers

近年来，车用SiC器件及应用技术不断提升，图1和表1为几款先进SiC控制器的实物和技术参数对比。其中特斯拉（Tesla）公司的Model3率先实现了量产应用，主电路由24个SiC功率模块分组并联，功率密度达到32 kW/L。中国科学院电工研究所基于高容积比金属膜电容、高效散热系统、高性能驱动保护电路等技术，研制出电磁兼容通过CISPR25等级3标准，常温最高效率突破98.6%，85℃环境温度下功率密度达到37.1 kW/L的SiC控制器。

表1 三款先进SiC控制器技术参数对比

Tab.1 Comparison of 3 advanced SiC controllers

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDfUyThuCI2mxUwZ3vzBge0wicOMcQhNmD8jeaDTuK3IR6IgrVa8fzpsA/640?wx_fmt=jpeg&from=appmsg)

在此基础上，如果进一步提高环境温度，控制器的电、磁、热、机多物理场耦合严重，温度与损耗的正反馈效应使芯片结温大幅升高，加剧模块键合线脱落和焊层空洞等老化问题。如果再进一步压缩体积，提高功率密度，会带来严重的热失效问题。

尽管国内外研究机构在高温封装材料、绝缘体上硅技术、软开关设计等方面取得了众多成果，实现了面向航空航天、深井钻探等领域的高温电源系统方案，但是电动汽车行业对成本非常敏感，上述技术短期内无法转化。在不大幅增加成本的前提下，为了解决本项目中的105℃准高环境温度运行难题，突破功率密度提升的瓶颈，本文在已有SiC控制器设计经验的基础上，通过系统自动优化布局、小尺寸电磁兼容滤波器与基于结温监测的主动热管理系统三个方面的设计与优化，降低了SiC控制器整体尺寸，提高了其在高温下的功率输出能力，实现了在105℃环境温度下的可靠运行。

1\. 总体设计需求

表2 SiC控制器适配电机参数

Tab.2 Motor parameters

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDTUX3SNptp9rMh6kofTRmwwYzNWZnicoTIib7Nra1O1oc4f232Iz3cSXg/640?wx_fmt=jpeg&from=appmsg)

本文研制的SiC车用电机驱动控制器功率等级为120 kW，母线电压为600 V，采用经典的三相电压型逆变电路，直流输入由车载电池供电，交流输出接三相永磁同步电机，电机参数见表2，控制器主电路如图2所示。采用国产1200V/100A/175℃ SiC MOSFET芯片集成模块，单颗芯片尺寸为4.6 mm×6.2mm。控制器须在冷却液温度105℃长期可靠工作，峰值功率密度高于45 kW/L，电磁兼容达到GB/T 18655等级3。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDujKiaHvltCheDiap8vU3hrChTRhvS5GCXVAqK4UlPPqJX32715DwLwOA/640?wx_fmt=jpeg&from=appmsg)

图2 SiC电机驱动控制器主电路

Fig.2 Main circuit of SiC motor drive controller

对以上设计指标进行分解。在功率密度指标方面，控制器输出有功功率120 kW，功率密度大于45 kW/L，计算体积小于2.65 L。占控制器体积前几位的部件分别是功率模块、支撑电容、母排和滤波器。首先通过高密度自动化布局对功率模块、支撑电容以及母排进行设计，在满足控制器电气杂散参数、热耦合参数约束的前提下，以体积最小为设计原则进行主要功率组件的协同优化设计。

在电磁兼容指标方面，为适应高环境温度，尽量降低损耗，本文SiC MOSFET器件的开通关断时间控制在100ns以内，远远小于一般IGBT控制器，这提高了高频段的滤波要求；主动热管理控制策略需要大范围改变开关频率，增加了低频段的滤波要求。采用常规的无源滤波器，无法满足控制器体积约束。为了适应宽滤波范围、减小滤波器体积，本文尝试了有源与无源相结合混合滤波器结构。

在高环境温度方面，冷却液温度由目前大多数新能源汽车的85℃提高至105℃，同时又大幅提高了控制器的功率密度，必须考虑SiC模块在热管理和功率输出方面的近限应用。车载条件下电机转速变化范围大，往往要根据最高转速设计开关频率，根据最大转矩设计功率模块输出电流，因此电机峰值功率点并不是结温最高的工作点。如果能对结温进行闭环控制，可以进一步提高控制器的峰值功率。因此本文通过结温在线监测技术，提高系统可靠性、降低设计裕度；通过以结温闭环控制为基础的功率模块主动热管理技术，提高控制器峰值功率密度。

控制器体积、环境温度和输出功率是相互制约的三个性能指标，控制器优化目标和实现方法的内在关系如图3所示。在体积控制方面，本文的自动优化布局、混合滤波器设计以及结温监测电路设计三部分内容均涉及功能复用和体积优化。高环境温度适应性方面，功率模块是主要热源，热阻是自动优化布局的重要指标；主动热管理保证了高环境温度运行下的可靠性。高功率输出方面，自动化布局优化了功率模块和母排的杂散电感，为进一步降低开关损耗奠定了基础；大功率输出容易使共模电感饱和，混合滤波器的设计则降低了共模电感，支持全功率范围实现滤波；结温监测的突破以及结温闭环控制则直接作用于最大功率输出。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibD5G6lG3kibWEDKuKR0dW7cUYD3Nra3GWEoglrAKzJhUqqXraSGib5hPrQ/640?wx_fmt=jpeg&from=appmsg)

图3 控制器优化目标和实现方法

Fig.3 Controller optimization objectives and implementation methods

2\. 高密度自动化布局

控制器的功率模块、支撑电容、母排等主要元器件占据了控制器总体积的50%以上。各元器件在空间上相互独立，但是在电气、散热、机械方面相互联系，为进一步压缩体积，实现功率密度指标，需要协同优化布局以提高控制器整体的空间利用率。本节包括基于平面布局的功率模块自动优化和基于三维布局的主要功率元器件自动优化。

2.1 功率模块自动化布局

由控制器输出功率120 kW@105℃，得到功率模块容量为1200 V/600 A@25℃，进而得到SiC芯片数量为36颗。数量较多的芯片布局，需要综合考虑电气杂散参数、芯片间热耦合影响以及面积约束，模块自动化布局主要分为三部分：建立数学模型、确定评估方法和优化迭代。

首先对芯片位置进行建模。对于单个芯片，先通过键合线将栅极端子（G极）和源极端子（S极）引出；再将芯片、端子连接点和连接两者的键合线等效为一个基本单元。根据G极和S极相对位置的不同扩展出16种可能的方向，如图4a所示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDZ5wNKrnVRNjeNeACfxBgDdV0JFcUSv8Rl2TpesuoUsHp9iaoGAkbQ9Q/640?wx_fmt=jpeg&from=appmsg)

图4 芯片二维布局描述

Fig.4 Chip 2D layout direction

对于N个芯片，采用序列对（Sequence Pair, SP）来表征内部芯片的相对位置、间距和方向三个参数，如图4b所示。其中SP1(N)、SP2(N)表征每一个芯片在二维布局中的相对位置，x(N)、y(N)表征每个芯片内部间距，方向N表征每个芯片的相对方向。因此所有的二维布局都可以用SP来表示；且每一个SP对应唯一的二维布局。

功率模块布局设计的目的是减小互连线路的杂散参数、模块的布局面积和芯片的结温，其中减小各条并联回路的杂散电感并保证参数均匀，是电气性能评估的重点。

构成杂散电感的互连线路分为两种形式：键合线和直接覆铜基板（Direct Bonded Copper, DBC）上铜层线路。本文采用基于部分元等效电路（Partial Element Equivalent Circuit, PEEC）模型的经验公式计算各条互连线路的杂散电感。

键合线可以等效为圆形截面的导体；其可以以任意角度跨接在两个连接点上，所以键合线的长度为两个连接点的直线距离，其杂散电感为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDFQj1EnUjkM0hsGic42Mz4sWbejhicF1PvyuVSurJyWvY83UKWHwrNliaA/640?wx_fmt=png&from=appmsg)

式中，μ0为真空磁导率；l为键合线长度；r为键合线横截面半径；nbondwire为键合线并联数目。

DBC上铜层线路可以等效为矩形截面的导体，在二维空间，可以按照垂直组合拆分为两条矩形线路进行计算，其杂散电感为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDvNY4fmMuDLz0SWoZJduY8AicrwwwJpDOBclLtfPvYrUNWF1evBSId1A/640?wx_fmt=png&from=appmsg)

式中，l1和l2为两条线路的长度；w和t分别为线路横截面的长度和宽度。

功率模块杂散参数评估适应度为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDiat2qXs0qZ3XVynbeEKAnjZnVA8t9PqmnAwxzgqcibiaxbEYvibLV9BjOA/640?wx_fmt=png&from=appmsg)

式中，Lg,mean和Lp,mean分别为驱动回路和功率回路杂散电感平均值；Lp1,max和Lp1,min、Lp2,max和Lp2,min分别为上、下桥臂功率回路杂散电感最大值和最小值；lg、lp和lp1、 l p2为系数；d p1和dp2为附加因子，防止出现过大的评估值，影响评估结果。

功率模块布局面积的评估适应度为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDLTLrUtTwibIIF8shTFbWNsL1JaLow9ymoyMQSJRmGU5YFrbUH7DNW6Q/640?wx_fmt=png&from=appmsg)

式中，Xs和Ys分别为功率模块布局的长度和宽度；λs为评价系数。

在确定评估方法的前提下，应用人工神经元网络对布局进行迭代优化。功率模块自动化布局优化迭代过程分为两个阶段，如图5所示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDZcf635Wxcha0uJdFgUFhdjHUKu6rsC76G0lIyUGw8ZA4UKmwt0uMoQ/640?wx_fmt=jpeg&from=appmsg)

图5 模块自动化布局设计流程

Fig.5 Design process of module automation layout

第一阶段以减小互连线路杂散参数为目的，对桥臂芯片的布局形式进行优化，分为两个环路。外环采用枚举算法对所有可能的桥臂芯片布局形式依次进行评估。内环采用遗传算法对内部芯片的相对位置进行迭代优化，适应度为fL；对于每一种内部芯片的相对位置，采用枚举算法对内部芯片的方向依次进行评估并从中选取杂散参数最小的内部芯片方向。对于每一种桥臂芯片布局形式，内环将最佳适应度传递至外环作为该桥臂芯片布局形式的适应度。通过以上过程可以得到所有桥臂芯片布局形式的适应度，其中具有最高适应度的桥臂芯片布局形式被选为最终的桥臂芯片布局形式并参与下一阶段的评估。

第二阶段以减小互连线路杂散参数、模块布局面积和内部芯片结温为目的，对内部芯片的相对位置、间距和方向进行优化，其也分为两个环路。内环采用遗传算法对内部芯片的间距进行迭代优化，优化过程中全面评估互连线路的杂散参数、模块的布局面积和芯片的结温，适应度函数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDxMUtWG2Wa9oLlDBjXDm9rVdiaePAwkfxicFW4saoqyGwHge2xMJ1ujRg/640?wx_fmt=png&from=appmsg)

式中，λT为温度评价系数；TJ为结温。  

对于每一种内部芯片的间距，采用枚举算法对内部芯片的方向依次进行评估，并从中选取杂散参数最小的内部芯片方向。内环将最高适应度传递至外环作为相应内部芯片相对位置的适应度；以此为基础，外环采用遗传算法对内部芯片的相对位置进行迭代优化。通过以上过程，具有最高适应度的内部芯片相对位置、内部芯片间距和内部芯片方向被确定。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDX0woYC1641HicDNiaS8pcsrQB30APWXibMRS7stbdfZeUuNo3JoBickibZw/640?wx_fmt=jpeg&from=appmsg)

图6 模块自动化布局结果

Fig.6 Module automation layout results

图6为SiC模块的最终布局结果。表3为模块主要性能参数的计算值与测试值对比。

表3 SiC模块主要性能参数

Tab.3 Main parameters of SiC module

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDFiaZ6J2kiby2E0uZjD3nkzmqRMvfaT8mN9cJElMZibzSfuknOD3zs4ugw/640?wx_fmt=jpeg&from=appmsg)

2.2 主要功率元器件自动化布局

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDG5iczCiaeyN583VafFgC8EzibWyMBibkLmltXMaaSibpsuyFhYpwcwOPIVw/640?wx_fmt=jpeg&from=appmsg)

图7 全工作域电容容值需求

Fig.7 Capacitance requirements across entire operating range

除功率模块外，支撑电容、母排是控制器功率单元的主要组成部分，也是体积占比较大的元器件。首先计算支撑电容容值，支撑电容主要功能是抑制母线电压波动、提供脉动电流。设置母线电压波动范围为±10%，开关频率为5～20 kHz，载波比下限为24，计算得到全工作范围的容值需求如图7所示，选择容值集总参数为240 mF，纹波电流有效值为200 A左右。集总电容器由若干个电容芯子并联组合而成，芯子的三维空间排布影响控制器的总体排布、母排设计和自身的散热性能。因此，以电容为主体，通过电容的拆分和排布对控制器的模块、电容、母排进行自动化整体布局，在总体积最小的前提下，减小杂散参数，提高散热效率。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDNDb5Z5vNkdiatl156DwSdQ24OrhAibH9BzTt89waflzEaZbFk5freuag/640?wx_fmt=jpeg&from=appmsg)

图8 系统/元器件双层循环优化方法

Fig.8 System/component double layer optimization method

对功率元器件进行布局优化需要采用三维映射模型。与模块布局优化使用的二维模型相比，计算量成几何级数上升。为实现系统/元器件的互动与参数传递，达到多元器件协同设计，本文采用图8所示的系统/元器件双层循环优化方法。首先把芯片、芯子等基础元素作为输入，利用解析公式法建立模块、电容等元器件的尺寸约束关系，形成系统布局所用元器件降阶模型，并包含了关键互连部位的约束。将这些元器件降阶模型作为输入，通过遗传算法实现自动布局设计。在自动生成大量集成布局的基础上实现电气互连（母排、线束等），对每个布局进行高效的电气、散热和整体体积评估，再通过挑选、交叉、变异等操作循环产生后代布局，经过若干轮循环后得到最优布局。在最优布局中提取元器件的具体尺寸、排布关系、互连点位置、局部散热方式之后，进一步在元器件层面对基础元素进行优化设计，确定元器件的具体实现方式。根据以上双层优化方法，可实现系统级的集成匹配设计，充分发挥元器件材料的优越性能，降低系统体积。

在元器件自动排布方法方面，提出三维空间序列对描述方法。将元器件简化为立方体，通过矩形填充问题（rectangle package problem）中的序列对（SP）来描述各个元器件之间的位置，在二维平面序列对描述方法的基础上，建立了图9所示三维空间的序列组的元器件描述规则。由图9可知，n个元器件在空间的相互位置可以通过3n个字符串（SP1, SP2, SP3）来表示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDAoL7wELicfRxK5lX9GFbDvJ0LX0sKG9Ao0TyEkWGiciaQmibTYnAkg16Gg/640?wx_fmt=jpeg&from=appmsg)

图9 元器件三维布局描述

Fig.9 Component 3D layout description

对于电机控制器的电容和功率模块来说，接线端子的朝向影响母排的设计和散热器的设计，因此在进行元器件的自动布局时考虑元器件的朝向也十分关键。由图9可知，定义元器件六个面中的一个为正面，正面选择一个朝向为正方向，正面朝向一共有六种，每种正面朝向在平面内可以旋转4个方向，每一个元器件共有24种不同的朝向。因此对每一个元器件朝向进行编码时可以用数字1～24来表示不同朝向。对n个元器件的系统，可以用n个字符的字符串来表示元器件的具体朝向。通过上述元器件间的空间位置关系和元器件的朝向，用4n个字符串就可以描述元器件在空间的位置和朝向。

在元器件互连方面，本文采用基于三维逸出线的自动互连方法。由源点/目标点分别产生六方向直线逸出线，逸出线与障碍相交点作为新起点产生逸出线，直到逸出线相交回溯得到互连骨架。本文的SiC控制器包括12个并联电容和1个三相功率模块组成的母排互连布局，首先通过逸出点法得到母排骨架，以此为基础，识别出所有线段走向、不同方向拓展障碍等，形成尽可能交叠的正负母线平面，形成最终母排布局。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDE5ZWI8SPM68FCibaTDQ6X2Vwc7Yo6zloCNpgEjZohw614VsvxEn9NiaA/640?wx_fmt=jpeg&from=appmsg)

图10 电容和叠层母排布局优化

Fig.10 Layout optimization of capacitor and laminate busbar

图10展示了电容和叠层母排优化过程中的三款布局，其主要计算参数对比见表4。通过主要参数对比，选择布局C进行控制器设计。布局C首先在体积上占有优势；电气设计方面，三相杂散电感均小于10 nH，为提高开关速度、降低开关损耗提供了保障；热设计方面，叠层母排和电容通过导热绝缘垫直接安装在控制器水冷板上，有效地降低了电容芯子的温升。

表4 三款电容和叠层母排主要计算参数对比

Tab.4 Parameters comparison of 3 capacitors and laminate busbars

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDn2VgGezUVialTVvjGb8ARundu1qjV0SsAY4Q5qflK4NoOIWsVpMTYrg/640?wx_fmt=jpeg&from=appmsg)

3\. 小尺寸混合型滤波系统设计

滤波器设计变量较多，目前难以采用自动化布局优化，需要人工优化设计。由于本文SiC控制器高开关速度、变开关频率的特点，如果采用传统的无源滤波器，体积过大无法满足功率密度要求。有源电磁干扰（Electromagnetic Interference, EMI）滤波器通过半导体器件向直流母线注入抵消共模干扰电流的补偿电流，在低频段具有明显的体积优势；但在高频段，由于半导体器件增益带宽限制，抑制效果有限。无源EMI滤波器具备高频段的插入损耗优势，有效频段较宽，但想要在低频段获得足够的插入损耗，体积过大。如果将有源与无源EMI滤波器相结合，构建混合EMI滤波器，将有望减小EMI滤波器体积。近年来，国际国内针对有源或混合EMI滤波器开展了较多研究，涉及有源EMI滤波器拓扑选择、调节器环路设计和数字化控制等方面。当前混合EMI滤波器在DC-DC中取得了较好的效果，但应用于车用电机控制器中，还需要考虑混合EMI滤波器高压大功率的特点进行设计。

混合EMI滤波器中的有源滤波网络包括采样环节、受控输出环节和连接这两个环节的调节器。采样环节和受控输出环节可以通过互感元件或电容元件与被滤波的主电路耦合。本文中，采样环节采用电流互感器采集对外传导的共模干扰电流，受控输出环节采用电容器将受控输出的电流注入主电路。

有源滤波网络与无源滤波网络的级联方式会影响混合EMI滤波器的体积。本文优先考虑滤波元件的复用以及与控制器其他元器件的集成，以实现电机控制器高功率密度的目标。本文混合EMI滤波器的拓扑如图11所示。首先，将有源EMI滤波器中产生正负母线中点直流电压的电容器CDC1和CDC2集成在电机控制器直流支撑电容器中。其次，CDC1、CDC2与有源EMI滤波器的输出电容器Cafo形成串联关系，共同作为无源EMI滤波器的共模滤波电容器，实现了滤波元件的复用。在集成后的支撑电容器与控制器直流输入端口之间，布置无源和有源EMI滤波器的其他元器件。图中，musen表示受控源电压是采样电压usen的m倍，LCM为共模滤波电感。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDOkH9OKcklkCpXUkGs4XUrXCzgcC3ibs3Majmcyd06xqRbDvVpEOpBpQ/640?wx_fmt=jpeg&from=appmsg)

图11 混合EMI滤波器电气结构框图

Fig.11 Electrical configuration diagram of hybrid EMI filter

有源EMI滤波器的控制结构如图12所示。其中，UCMs为等效共模干扰电压源；Uref为有源EMI滤波器调节器的给定电压；Uro为有源EMI滤波器调节器的输出电压；Uao为有源EMI滤波器输出级输出电压；ICMo为滤波后系统对外发射的干扰电流；Usen为干扰反馈电压，是usen在复频域的映射；Gr为调节器电压增益；Ga为输出级电压增益，输出级采用互补放大电路，在有源EMI滤波器的有效频段内，Ga近似为1；G1为从UCMs到ICMo的转移导纳，受到无源EMI滤波器的影响；G2为从Uao到ICMo的转移导纳，同样受到无源EMI滤波器的影响；Zsen为从ICMo到Usen的转移阻抗。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibD1hS8CNrc2SIDCdQ6HKnvcEWfhgV0oU3qjaVxB1SAwVuKspKxLzeOLw/640?wx_fmt=jpeg&from=appmsg)

图12 有源EMI滤波器控制结构

Fig.12 Control diagram of active EMI filter

由图12得到安装混合EMI滤波器后，从干扰源电压到对外发射干扰电流的转移导纳近似为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDGT1cPBUTsFiakVo6J00FpzMgCDxGg4GowVo23fllibSJ9SdG2PAdJp7w/640?wx_fmt=png&from=appmsg)

从有源EMI滤波器反馈调节器给定电压到对外发射干扰电流的转移导纳为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDYibkr3mOMQicBrTqoAbCgib4iavTCicXZ0NfMib8XKu8PoG9VbCCy9IzlR8w/640?wx_fmt=png&from=appmsg)

根据式（6）和式（7），提升混合EMI滤波器干扰抑制幅度，需要设计无源EMI滤波网络，使G1的幅值尽可能地小；在保证滤波器稳定的前提下，设计有源EMI滤波网络的反馈环节和调节器，使GrG2Zsen的幅值尽可能地大，从而能够使混合EMI滤波器的转移导纳Gso的幅值小于无源EMI滤波网络的转移导纳G1。

3.1 无源滤波网络设计

包含干扰源与滤波器的共模干扰传导等效电路如图13所示。其中等效共模干扰源为UCMs，等效共模干扰源阻抗为ZCMs，有源EMI滤波网络输出级输出电压为Uao，有源EMI滤波器等效输出电容为CCM，无源EMI滤波器共模滤波电感为LCM，等效干扰负载阻抗为Zload。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDDGwokQCcKBNLYp78cqzGMxicVpEtyaib6V3AUa5zdEgP13icl8Hn3TXvQ/640?wx_fmt=jpeg&from=appmsg)

图13 包含干扰源与滤波器的共模干扰传导等效电路

Fig.13 Conducted common-mode interference equivalent circuit including interference source and filter

为便于分析，假设干扰负载阻抗Zload稳定，Rload=25 Ω；干扰源阻抗ZCMs呈容性，容值等于CCMs。由图13可得，当Uao无输出时，从UCMs到ICMo的转移导纳为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDM3szeTWX1UqyTickJsMHNibIY57frbDkK6Cw5vbbZnibbooCGhyVMA75A/640?wx_fmt=png&from=appmsg)

欲使无源EMI滤波网络具有更大的干扰抑制能力，根据G1的表达式，可选择大电容值的CCM或大电感值的LCM。同时应尽量降低二阶谐振点处的品质因数。由于品质因数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDlBnYBwibBYbqrJqewRibLeXaLzVlcwuBa72xGy65ZmnWjmRpmaSOwoVQ/640?wx_fmt=png&from=appmsg)

因此应在磁心不饱和的前提下，尽量选择高磁导率磁材，以增大LCM。

3.2 有源滤波网络反馈环节和调节器设计

根据图13可以推导出，从Uao到ICMo的转移导纳为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDYWSlkIwoIem0Wq7gGEmk7vXWL8VSZDWEka7BFAcia3UUBRw54SYNW4g/640?wx_fmt=png&from=appmsg)

式（10）表明，G2的幅值在低频段以20 dB/dec的速率增大，在高频段以-20 dB/dec的速率降低。

通过电流互感器采集控制器对外发射的共模干扰电流。互感器初级匝数为1，次级线圈匝数为n，电流互感器电路模型如图14所示。图14中，Lsen1和Lsen2分别为电流互感器初级和次级电感，Msen为初、次级间的互感，Csenp2为次级杂散电容，Rsenp2为次级等效并联电阻，Rsen为连接在电流互感器次级的采样电阻。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDibFhduIpibl5Us4Cln9oTtf8mtiaBDziaqtdc3exyMtVLnZWC5jU2cRneQ/640?wx_fmt=jpeg&from=appmsg)

图14 电流互感器电路模型

Fig.14 Circuit model of current transformer

由图14可得从ICMo到Usen的转移阻抗为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDd646O5lCmHaUerkkCicibict2BB4ibf3tvKUWATB5GAFVXVSTZQpl9PY0Q/640?wx_fmt=png&from=appmsg)

式中，R2为Rsenp2和Rsen并联后的电阻值。

与G2类似，Zsen的幅值在低频段以20 dB/dec的速率增大，在高频段以-20 dB/dec的速率降低。根据Zsen的表达式，Zsen的品质因数为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDHPdUlGY5SdsuMWfck1BL8DVIuo8Kzaw3qKv8o4Guym2uoAq63yqUgQ/640?wx_fmt=png&from=appmsg)

为提高EMI滤波器的干扰抑制能力，设计有源EMI滤波网络的调节器增益Gr在低频段以20dB/dec的速率增大；为保证有源EMI滤波网络的稳定性，在调节器中设计超前校正，确保GrG2Zsen以-20dB/dec的斜率穿越0dB线；此外，应避免选择过大的采样电阻Rsen，防止QZsen过高，降低系统的稳定性。

3.3 混合EMI滤波器参数

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibD4qKMfGczPpWicjO7OPGQIQbicZFHPdKSklcBNvtLtA3o71GAXbibNsWlA/640?wx_fmt=jpeg&from=appmsg)

图15 混合滤波器实物图

Fig.15 Photo of hybrid EMI filter

综合上述无源滤波网络和有源滤波网络反馈环节与调节器的设计要点，设计了用于本SiC控制器的混合EMI滤波器。调节器电路实物如图15所示。滤波器各元件参数见表5，与该混合EMI滤波器设计插入损耗相当的无源EMI滤波器的参数也列于表5中，对比传统的无源滤波器，混合滤波器体积减小了17%。图16对比了无滤波器、仅混合滤波器中的无源滤波部分和采用完整混合滤波器时的干扰电流频谱，可见在150 kHz～2 MHz频段，混合滤波器具有显著的干扰抑制效果，抑制幅度最大约10 dB。

表5 混合滤波器与无源滤波器参数对比

Tab.5 Comparison between hybrid filter and passive filter

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDvibBic0oJicZgV0iaU7OGrSVxDQ3NPowUzuqcyPxaJDZb74FH2PuYlvMEg/640?wx_fmt=jpeg&from=appmsg)

4\. SiC功率模块主动热管理系统设计

SiC模块是实现功率变换的核心部件，其损耗占控制器总损耗的95%以上，是产生热量的主要来源。因此功率模块的热管理直接决定了SiC控制器的功率等级和可靠性，是SiC控制器实现高环境温度、高功率密度运行的关键。

4.1 结温估计方法

对功率模块进行主动热管理，首先需要获得模块的实时结温。现有的结温在线监测方法主要为热模型法和热敏感电参数（Thermal Sensitive Electrical Parameter, TSEP）法两类。热模型法根据水温和工况计算模块损耗，通过热阻抗模型来估计结温。这种方法实现成本低、对硬件和软件没有侵入性，现有的结温监测大多采用此方案。它的缺点是损耗模型与输出电流正弦度、负载特性均相关，很难计算准确，由试验获得的热阻抗模型也会随着冷却液流速、导热材料老化而发生变化，因此实际应用中的计算结温与实际结温往往会存在较大误差，需要在控制器中预留较大裕度，无法做到近限运行。

针对热模型结温计算方法的缺陷，科研机构对基于TSEP的在线结温监测做了较多尝试。尤其针对IGBT，基于导通压降法的结温监测技术得到了较好的实验结果。但是对于SiC MOSFET，一方面开关过程过快（通常为几十纳秒），米勒平台电压VGP、开通/关断延迟时间tdon/tdoff、电流变化率diD/dt等动态参数对测量带宽要求过高，很难应用于在线测试；另一方面SiC MOSFET栅极氧化层SiC/SiO2界面态存在缺陷，工作条件下栅极承受交变应力，会导致阈值电压VTH漂移，给导通压降VDS，导通电阻RDS等静态参数带来不确定性（称为正偏压温度不稳定性），大大增加了其用于结温测量的难度。文献\[30\]指出，对于SiC MOSFET，现有的TSEP法普遍灵敏度较低，监测精度受老化影响严重，还处于探索阶段。

面对上述问题，本文提出一种基于第三象限体二极管导通压降的MOSFET结温监测方法，该方法可以解决正常导通压降仅在大电流下具有温度敏感性和正偏压温度不稳定性问题，且静态参数对测量电路要求不高。

与IGBT单向导通不同，MOSFET芯片内部自然寄生了PIN二极管结构（称为体二极管，如图17所示），可以双向导通工作。以图2中A相下管VT2为例，当负载电流为负向且VT1关断时，VT2电流由漏极流向源极，工作于第一象限，此时的导通压降定义为VDS。当负载电流为正向且VT1关断时，VT2电流由源极流向漏极，工作于第三象限。此时VT2有两个工作状态，当电压VGS正偏置，电流主要流经沟道，此时为正常工作状态，导通压降VSD较小；当电压VGS负偏置，电流仅流经体二极管，此时导通压降定义为VSD\_F，导通损耗较大，一般仅在死区时间工作于此状态。在VSD\_F状态时，由于沟道完全关断，可以避免VTH漂移对导通压降的影响，且体二极管电压导通压降VSD\_F相比第一象限导通压降VDS和正栅极电压下第三象限导通压降VSD，具有更高的温度系数和更宽的测量范围，因此本文提出将第三象限大电流下体二极管导通压降VSD\_F作为结温在线监测的敏感参数，在电流负向导通的测试开关周期内，给栅极施加负压，关断沟道进行结温测试。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibD2MUOicHDfqTdrWe0kL9e3cOibC4GE3iaFJYdPCibYSw3jH5TdHUgURjKtA/640?wx_fmt=jpeg&from=appmsg)

图17 SiC芯片结构和等效电路

Fig.17 Structure and equivalent circuit of SiC chips

图18为不同电流条件下，体二极管导通压降VSD\_F与结温TJ的映射关系。可以看到，体二极管导通压降在不同电流值下均有比较好的温度分辨率，且具有较好的线性度。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDYibImJfcEkRHPCiaMMzQrud7yqDF1SjXJvCYsh21XV8DOOx14QAPVDiaA/640?wx_fmt=jpeg&from=appmsg)

图18 导通压降、电流、结温三维映射关系

Fig.18 Three dimensional relationship between conduction voltage, current, and junction temperature

利用VSD\_F进行结温在线估计，应首先确定VSD\_F与结温的映射关系。将功率器件置于温箱中，注入脉冲电流，记录不同温度TJ、不同漏极电流ID下的体二极管导通压降VSD\_F，形成图18所示的三维网络，拟合得到结温映射模型，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibD31TwfemraBaDQnqFlobtKhTEibnROQpdq8sfWbcRMtbKqkSpNK83Ticg/640?wx_fmt=png&from=appmsg)

在线工作条件下，实时采集功率模块的VSD\_F和ID，代入式（13）即可得到功率器件的实时结温。

4.2 功能复用采样电路设计

为保证一定的结温估计精度，要求采样电路具有较高的采样精度。同时为实现控制器整体高密度设计，对采样电路进行了小型化和功能复用设计。

首先结温采样单元与闭环电流控制单元共用一组电流传感器，电流传感器布置于负载侧，采样系统根据脉冲调制策略和电流方向将负载侧电流转换为功率模块的导通电流。但是应用于闭环电流控制的电流传感器一般精度较低（误差为3%左右），为了复用原有的电流传感器，本文通过校准和补偿策略提高测量精度以满足结温采样要求。将测量系统的误差分解为固定误差和随机误差两部分，本文通过2.1节的离线标定过程将固定误差纳入结温映射模型，由于标定与在线测量应用相同的采样电路，具有相同的固定误差，从而消除了固定误差的影响；同时应用重复采样加滤波的方法来减小随机 误差。

VSD\_F采样电路需要承受功率模块漏极和源极之间的高压、高频、交变电压。在模块不导通的情况下隔离直流侧母线的高压，在模块导通的情况下采样6 V左右的体二极管导通压降。功能复用的高精度导通压降采样电路功能框图如图19所示。采样电路集成于驱动电路单元，与驱动电路共用一组供电电源，通过隔离运算放大器将模拟信号传送到主控芯片。同时，结温估计与短路保护共用一组导通压降采样电路。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibD68DRl6icX3q8d46YBbrxpWuSLSxXCVJU4aWTjeHR7HzAIm44nibgqAVw/640?wx_fmt=jpeg&from=appmsg)

图19 功能复用的导通压降采样电路功能框图

Fig.19 Controller optimization objectives and constraints

前级的高压采样部分如图20a所示，其中VD1为高压快恢复二极管，在被测器件（Device Under Test, DUT）对管导通时，隔离高压，防止后级电路过电压损坏；当DUT导通时，无论正向还是负向导通，电流源均可以通过VD2、VD1注入DUT，当R1=R2时，N点电压如式（14）所示。将VD2设置为与VD1相同型号的高压快恢复二极管，两个二极管的压降互相抵消，此时导通压降提取电路将VSD\_F等比例转换到后级并实现阻抗隔离。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDstwBiaL2KRfH2xpRe7yIqH8y5iaftmcMRQy2jmiafQZywwWnVmtcaCHWw/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDw6wxoGiccuv2tI2GMf3s9vibeRJISIuAgSXeN68vtUiaQhbXzricllT5ibQ/640?wx_fmt=jpeg&from=appmsg)

图20 高精度导通压降采样电路

Fig.20 High precision conduction voltage sampling circuit

结温采样单元对VSD\_F采样电路精度要求较高。由图18数据计算，VSD\_F温度分辨率约为4mV/℃，如果实现5℃的结温误差，采样误差需小于0.5%。由图18可知，导通压降的温度变化范围只占其幅值的小部分，本文提出图20b所示的采样范围自适应电路进一步提高采样精度。在调理电路中增加减法器预先减掉没有温度分辨率的直流部分（VREF），然后将电压放大K倍至AD采样适合范围。通过在每个开关周期自动调整模拟开关S1～S7，可实现对VREF和K的动态调节，从而实现采样范围的动态自适应。应用采样范围自适应电路，可以将电压采样的温度分辨率提高5倍以上。

另外，控制器的高密度设计增加了器件贯通短路的风险，相比于Si IGBT，SiC MOSFET短路耐受能力差，需要更加快速准确的保护。在短路情况下，MOSFET进入退饱和状态，导通压降VDS大幅上升，通过实时检测VDS幅值即可进行短路保护。MOSFET正向导通压降VDS位于第一象限，结温监测使用的体二极管导通压降VSD\_F位于第三象限，因此本文设计绝对值电路同时进行一、三象限的导通压降采样，实现了短路保护和结温监测电路的复用。

通过功能复用和软件补偿，在几乎不增加硬件成本和体积的条件下实现了结温监测功能。

4.3 结温闭环控制

结温在线监测方法的突破，为基于结温闭环控制的主动热管理实现提供了可能。现有的功率模块主动热管理技术主要是基于功率器件的损耗调控，文献\[30\]列举了主要的损耗调控方法，表6按照导通损耗、开关损耗两类对调节变量进行归类。

表6 功率模块损耗的调节变量

Tab.6 Factors of power module losses

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDnMgiaHIo82YrOQtZboFgjJx6ILvxDe2qtm1h8hvRG9IgpycHIHL0AkA/640?wx_fmt=jpeg&from=appmsg)

结合新能源汽车低速大转矩、高速小转矩的运行工况特点，本文选择调节开关频率和负载电流来进行结温闭环控制。

根据表2计算电机最高转速得到控制器电频率最高为853 Hz，传统的控制策略会根据最高电频率设置固定的开关频率，因此不同的电机转速下控制器具有相同的最大输出电流。加入结温闭环控制后，启动过程中需要输出大转矩，但是电频率低，可以使用较低的开关频率，从而释放部分开关损耗，在低频部分获得更大的工作电流。在最大功率输出工作状态下，结温控制环的输出作为电流控制环的输入，通过给定最大结温来控制最大电流输出，从而实现SiC模块的近限应用。在高速状态下，由于开关频率接近上限，结温闭环控制的最大输出功率与无结温闭环的传统控制策略趋于一致。

图21为本文SiC控制器的系统控制框图。分别采集电机转速、电机电流和控制器结温作为闭环的反馈量，在原有的电流闭环和转速闭环基础上，增加结温闭环控制。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDf2N6E7kCXkYz8jjzpkCDh85mwgMhpy1bZemibUXiaiaSANQRHeaN7WW2Q/640?wx_fmt=jpeg&from=appmsg)

图21 SiC电机驱动系统控制框图

Fig.21 Control diagram of SiC motor drive system

在105℃冷却液温度下，对增加结温闭环控制的电机驱动系统进行了仿真分析，有无结温控制的最大输出功率对比结果如图22所示。结温闭环控制设置开关频率范围为5～20 kHz，载波比下限值为24，以结温限值155℃为目标进行最大功率输出，电机输出转矩-转速曲线如图22中虚（红）线所示；无结温闭环控制的驱动系统开关频率固定为20 kHz，以最大电流为目标进行最大功率输出，电机输出转矩-转速曲线如图22中实（蓝）线所示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDEPHfDTd3gJx8TPicjC8uFt0pGVMbicCAYXO8xFH88RtG4wFOJGHMN6Ng/640?wx_fmt=jpeg&from=appmsg)

图22 有无结温控制的最大输出功率对比

Fig.22 Maxium output power comparison with and without junction temperature control

可以看到，相比于无结温闭环的固定开关频率控制，结温闭环控制可以显著地提高低速区的输出功率。在1700 r/min转速附近，应用结温闭环控制将峰值输出功率提高了20%。

5\. SiC控制器样机及试验

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDWiagwKxqhlFqic1SHpYaK028zXclLskFVwzKhpkwYyH8Vupc7jLY4QuA/640?wx_fmt=jpeg&from=appmsg)

图23 SiC控制器实物

Fig.23 The SiC controller

应用上文所述的关键技术，设计开发了适应105℃高环境温度的高功率密度SiC控制器样机，直流侧输入电压600V，输出功率127 kW。控制器外观如图23a所示，长310 mm，宽178 mm，高47 mm（不含凸台），顶部凸台长168 mm，宽58 mm，高6.5 mm，体积2.65 L。控制器内部结构如图23b所示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDq98ibniaFYnfuibgDBs2YrsIrgpWtxOLDDxmFn1goI5KMcHmeSugO33Nw/640?wx_fmt=jpeg&from=appmsg)

图24 控制器输出峰值功率测试平台

Fig.24 Test setup of the peak power equipment

在高环境温度下，依据标准GB/T 18488对SiC控制器进行了峰值输出功率试验。母线电压为600 V，开关频率为5～20 kHz，冷却液为50%乙二醇溶液，入水口温度为105℃，流量为14 L/min，控制器测试最大输出功率为127 kW，测试平台如图24所示。

在105℃环境温度下，功率模块采用直接水冷散热，应用结温闭环控制策略，保证了结温在155℃的限值附近波动。叠层母排由导热绝缘垫通过水冷底板散热。电路板上的主要发热元器件由导热凝胶通过上盖板散热。对SiC控制器的主要部件进行温度测试，首先将控制器置于环境温度达到热平衡，然后在峰值功率测试条件下，测得温度见表7。

表7 SiC控制器主要元器件温度

Tab.7 Temperature of main components of SiC controller

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDe8o5bt2R8AbJLaZKJnDSVNf9BAf46J5NWbN9ic9m0UUfianb06rOmOzg/640?wx_fmt=jpeg&from=appmsg)

依据标准GB/T 18488在常温下对SiC控制器效率进行了测试，全工作区的效率等高线图如图25所示。最高效率为99.85%，高效工作区（效率＞95%）占总工作区的百分比大于85%，表现出显著的节能优势。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibD4jHAVOfRHXSic5eB5RSuL22lvZ7mkeMJFyyEDqEezMVMsXEcdTEiaFbw/640?wx_fmt=jpeg&from=appmsg)

图25 SiC控制器效率等高线图

Fig.25 Efficiency contour map of SiC controller

采用GB/T 18655规定的测试设备和EMI接收机测试参数，在第三方实验室测试了多个工况的传导电磁干扰，试验结果如图26所示。试验结果表明，所设计的混合EMI滤波器能够确保SiC电机控制器在空载、半载、满载及低速、额定转速和弱磁转速下，传导电磁干扰均低于GB/T 18655等级3推荐的极限值。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibD3sF2BQPLhNjje3ibCzF55qq73PBETY2tnxyqVibM2nbw8ezic3N3Hh5xA/640?wx_fmt=jpeg&from=appmsg)

图26 传导电磁干扰的测试结果

Fig.26 Test results of conducted EMI

通过试验验证，本文设计的高温高功率密度SiC电机驱动控制器实现了在105℃环境温度下的满负荷运行，功率密度达到47.8 kW/L，在环境温度大幅提高的情况下，功率密度超过了图1中的对比产品。本文研制SiC控制器的主要技术指标总结于表8。

表8 SiC控制器主要技术参数

Tab.8 Main technical parameters of SiC controller

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslN3eW8lWTJq6YXsgTFGjibDj1NQia1ZdLgaYw14Zs2kiaqgznX3WI1nxtklUpJw5y076lib4WZLG3eJA/640?wx_fmt=jpeg&from=appmsg)

  

6\. 结论

本文在原有85℃、37.1 kW/L的SiC控制器基础之上，研制了工作于105℃环境温度、功率密度更高的SiC电机驱动控制器。主要在高密度自动化布局、小尺寸滤波器设计和功率模块主动热管理几个方面展开工作。

在SiC模块自动化布局方面，建立了表征芯片位置和方向的序列对模型，确定了功率模块评估适应度函数，设计了基于人工神经元网络的优化迭代方法，开发了1200 V/600A SiC功率模块。在控制器自动化布局方面，在二维布局的基础上拓展了三维空间的元器件描述规则，采用三维逸出线方法解决了三维空间组件互连问题，最终实现了电气、散热平衡条件下的控制器布局最小化设计。

在EMI滤波器设计方面，考虑SiC高开关速度和变开关频率带来的双重挑战，采用了有源+无源的混合滤波器的设计方案，在减小体积的同时保证谐波抑制效果。有源部分将低频段干扰插入损耗提升约10 dB，对比传统的无源滤波方案，将滤波器总体积降低了17%。

在完成功率电路小型化设计后，通过功率模块主动热管理技术进一步提升了控制器在高环境温度下的输出容量。提出应用体二极管导通压降作为热敏感电参数进行结温监测，设计了与原有功能高度复用的高精度结温监测电路，实现了基于开关频率调节和最大电流输出的结温闭环控制，对比传统的固定开关频率方案，在保证可靠性的前提下将驱动系统峰值功率提高了20%。

基于以上三方面的关键技术，开发了适用于105℃环境温度的SiC控制器，经测试，峰值功率达到127 kW，功率密度达到47.8 kW/L，常温最高效率达到99.85%，在全工作区域范围通过了GB/T 18655等级3的电磁兼容标准。本文的设计和实现方法，发挥了SiC器件高温/高效的优势，对SiC控制器的近限设计具有参考意义。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskyIoBUkVX2GcXnExRaOs4kI1xUdGHI4mr7IjjPseYSBu8vQfEg5Mlvn04OJau7EABPcOTRCayKSw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=13)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskyIoBUkVX2GcXnExRaOs4ktH42XJDAhPQHAEplDKjbyTu0O1BCmuiauFPlnseeU0SQTwh0Ju1CFdw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=14)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskyIoBUkVX2GcXnExRaOs4kBmUGdey8EUaYInibDZGLTGR3fzrhv6txBkpp2WSjaFWVfEJxXic0lUkA/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=15)