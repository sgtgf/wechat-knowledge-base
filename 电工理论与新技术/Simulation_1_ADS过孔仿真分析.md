# Simulation-1：ADS过孔仿真分析


> 原文地址: [https://mp.weixin.qq.com/s/AC-odKZsQydJMkvflDOi2Q](https://mp.weixin.qq.com/s/AC-odKZsQydJMkvflDOi2Q)

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_000_355fcb306e00.png)

★★★__Sim-1---ADS过孔仿真分析____**★★★**__

引言： 对PCB过孔进行参数仿真，可以使用的工具有很多，例如Sigrity、Anasys、CTS等，但是仿真的逻辑和本质都是一样的，同样的过孔，不同的工具仿真出来的参数差异很小，本节简述ADS过孔仿真。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_001_392d213b515d.png)

图1-1：ADS过孔仿真流程

€1.建立Cadence原理图

利用Cadence工具建立原理图和PCB的主要原因是ADS软件中Layout操作并不便捷，因此先在Cadence中建立原理图，然后把网表导入Allgro中进行Layout。如图1-2，因为这里只需要几条走线和过孔，因此通过元器件连接产生网络。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_002_97dc0325d113.png)

图1-2：Cadence建立基本网络

€2.建立Allgro Layout

将原理图网表导入Allgro中，设置PCB叠层结构和过孔参数，即可布局走线。这里建立了3条网络的微带线，从上往下依次是：

第一条：TOP层和BOT层之间的穿层微带线，通过过孔（0.5mm通孔）连接，网络总长度22mm；

第二条：分别是TOP层微带线和BOT层微带线，没有过孔连接，长度分别是10.5mm；

第三条：BOT层的微带线，长度为22mm；

TOP层微带线参考Layer3层的地，BOT层参考Layer7层的地，微带线宽度0.2235mm。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_003_4dddb8ca5a44.png)

图1-3：Cadence绘制Layout

€3.Allgro导入ADS Layout

Allgro与ADS通过专用的ADFI接口可以很方便进行导入，在Allgro中设置仿真网络、叠层、仿真区域、元件及仿真端口后导出。在ADS Layout中，通过ADFI接口导入对应的.adfi文件，导入完成后开始设置EM仿真参数。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_004_b606a16f392e.png)  

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_005_bc4ca8c60ca9.png)

图1-4：Cadence Layout导入到ADS

€4.设置ADS EM仿真参数

ADS中的EM仿真设置主要如图1-5，包括仿真器、PCB叠层结构（参考1816阻抗控制）、仿真频率（0.5-6GHz）、端口、Mesh等。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_006_f735f456b666.png)

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_007_910862cb5957.png)

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_008_b67614f25ab4.png)  
![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_009_3eef55e4ed97.png)

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_010_e59ba419679f.png)

图1-5：ADS EM参数设置

€5.ADS EM仿真  

ADS EM仿真完成后会显示仿真的S参数，如果不需要对版图进一步行仿真，这里可以直接观察仿真结果。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_011_fefdb74037f6.png)

图1-6：ADS EM仿真完成之后的S参数

€6.EM Model导入ADS原理图分析

将EM Model导入原理图中主要是方便端口的仿真结果观察，如果需要版图仿真也要导入原理图，因为没有添加新的元件，因此这里原理图仿真的结果和EM放在的结果是相同的。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_012_39afa37e7aaa.png)

图1-7：ADS EM Model导入

€7.仿真结果

下图是仿真的插损结果，其中：

1#：S12是无过孔BOT层长微带线损耗，S34是有过孔TOP-BOT穿层长微带线损耗；

2#：S56是TOP层短微带线损耗，S78是BOT层短微带线损耗；

从0.5-6GHz频率范围仿真的插损看，微带线在2.715/3.311/4.832GHz都出现震荡，导致插损变大，具体原因需要从仿真参数设置、微带线长度、板材等因素进一步分析。

从仿真数据S12和S34可以看到，在5GHz以内，微带线有无过孔穿层插损差异不大，但在5-6GHz范围内有过孔的微带线插损增大。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_013_db9683bf036e.png)

图1-8：仿真的插损结果

下图是各端口仿真的反射系数结果，其中：

1#：S11/S22是BOT层不穿孔长微带线两端的反射系数，在2.6-3.4GHz频率范围，阻抗偏离50Ω较大；

2#：S33/S44是TOP-BOT穿层长微带线两端的反射系数，在2.6-3.4GHz和5.7-6GHz频率范围，阻抗偏离50Ω较大，但整体比无过孔更靠近50Ω；

3#：S55/S66的阻抗靠近50Ω；S77/S88的阻抗靠近50Ω右上方。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_014_90d730575bf4.png)

图1-9：各端口仿真的反射系数

€8.调整走线长度（二次验证）

上面的仿真结果发现在不同频率点出现震荡现象，怀疑是微带线长度以及端口参考地放在过孔上导致，重新调整微带线长度，TOP层的短微带线长度为1.8mm，BOT层的短微带线长度为1.8mm，长微带线为3.6mm，同时把微带线端口的参考地放在参考平面。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_015_09707e3162da.png)

图1-10：调整后的Layout和端口

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_016_4cd21c609b9d.png)

图1-11：调整后Layout 3D图

S34是有过孔的穿层微带线，插损比BOT层无过孔等长微带线插损S12偏大一点，但是整体损耗都较小。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_017_7744dd700a87.png)

图1-12：调整后Layout 3D图

        下面是各端口的发射系数对比：

![](D:\电脑文件\公众号知识库\电工理论与新技术\Simulation_1_ADS过孔仿真分析_images\img_018_ffe2de603ff7.png)

图1-13：各端口的发射系数对比