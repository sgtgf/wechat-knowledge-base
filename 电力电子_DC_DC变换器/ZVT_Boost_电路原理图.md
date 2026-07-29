# ZVT-Boost 电路原理图

原创 电路一点通 2024-04-16 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/x5Ibno7vpDhXa\_xlx1Lhzg](https://mp.weixin.qq.com/s/x5Ibno7vpDhXa_xlx1Lhzg)

Boost 电路用于在太阳能电池板(PV)电压较低的时候将其升压到逆变电路正常工作需要的电压值。当 PV 电压低于逆变电路正常工作所需要的电压时，Boost 处于工作状态；反之，系统进入 Bypass 状态，Boost 不工作。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ZVT_Boost_电路原理图_images\img_000_2715148bc4cd.other)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ZVT_Boost_电路原理图_images\img_001_d9675b4ef0bd.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ZVT_Boost_电路原理图_images\img_002_0b2a21d3f48e.other)

由于 Boost 电路损耗较大，影响系统整体运行效率，为提高其转换效率，设计中采用软开关技术。图 3.7 为本项目采用的 ZVT-Boost 电路原理图。该拓扑主要有以下优点：①零电压导通②开关管电流与电压 应力小③减小开关管的开关损耗和二极管的反向恢复损耗。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ZVT_Boost_电路原理图_images\img_003_aa73cf1e6642.png)

  

其中，Q1、D1、L1 和 Co分别为传统 Boost 电路所有的开关管、二极管、电感和输出电容。Q2、D2、 D3、L2 以及 Cr 为实现软开关所用到的 ZVT 电路，图中红色圈内器件。SCR1和 Relay 为系统进入单级模式 时的 Bypass 电路。

# Working Mode

ZVT-BOOST 的基本思想是：为实现主开关管的零电压开通，必须要将主开关管输出电容上的电荷释 放到零，这一条件由辅助电路来实现。当主开关管零电压开通以后，辅助电路将停止工作。主开关管的零 电压关断主要通过其自身输出电容和增加的 Cr 限制开关管电压的上升率来实现。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ZVT_Boost_电路原理图_images\img_004_e1cfad9af431.png)

图 3.8 为 ZVT-Boost 主要工作波形

ZVT-BOOST 在一个开关周期内该变换器有八种开关状态。分析前作如下假设：所有开关管、二极管、 电感和电容均为理想元器件；电感 L 和电容 C 足够大，能保证在一个开关周期中，流过 L 的电流保持为 Iin 和 Co两端的电压保持为 Vo。

(1) 模态 1\[t0-t1\] \[如图 3.9(a)\]：在 t0 时刻之前，主开关管 Q1 和辅助开关管 Q2 均处于关断状态，升压二极 管 D1 导通。在 t0 时刻，开通 Q2，此时辅助电感电流 IL2 从 0 开始线性上升，而 D1 中的电流开始线性 下降，在 t1 时刻，达到升压电感电流 Iin，D1的电流减小到 0，D1自然关断。

（2) 模态 2\[t1-t2\] \[如图 3.9(b)\]：在此模态中，L2 开始与电容 Cq1 谐振，IL2 继续上升，而 Cq1 的电压开始下 降。当 Cr 的电压下降到 0 时，Q1 体内的反向二极管 Dq1 导通，将 Q1的电压箝在零位。

(3) 模态 3\[t2-t3\] \[如图 3.9(c)\]：在此模态中，Dq1 导通，L2 电流通过 Dq1 续流，此时开通 Q1就是零电压开 通。可见，Q1开通时刻应该滞后于 Q2 的开通时刻。

(4) 模态 4\[t3-ta\] \[如图 3.9(d)\]：在 t3 时刻关断 Q2，IL2 给 Cr充电，由于有 Cr，Q1为零电压关断。在 ta时刻，Vcr=Vo，D3导通，将 Vcr 箝在 Vo。

(5) 模态 5\[ta-t4\] \[如图 3.9(e)\]：在此模态中，加在 La上的电压为-Vo，IL2 线性下降。在 t4 时刻，IL2 下降到 0。

(6) 模态 6\[t4-t5\] \[如图 3.9(f)\]：在此模态中，Q1导通，D1 关断。升压电感电流流过 Q1，滤波电容给负载 供电，其规律与不加辅助电路的 Boost 电路完全相同。

(7) 模态 7\[t5-t6\] \[如图 3.9(g)\]：在 t5 时刻，Q1关断，升压电感电流给 Cq1 充电，同时 Cr放电，由于有 Cq1 和 Cr，Q1 是零电压关断。在 t6 时刻，Vcq1 上升到 Vo，Vcr 下降到 0，D1 自然导通，D3自然关断。

(8) 模态 8\[t6-t7\] \[如图 3.9(h)\]：该模态与不加辅助电路的 Boost 电路一样，L1 和 Vin 给滤波电容和负载供 电。在 t7 时刻，Q1 开通，开始另一个开关周期。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ZVT_Boost_电路原理图_images\img_005_db3343b65b8d.png)

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ZVT_Boost_电路原理图_images\img_006_6c920dac8a59.png)

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ZVT_Boost_电路原理图_images\img_007_9b893e595986.png)

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ZVT_Boost_电路原理图_images\img_008_5a627d1866cf.png)

图 3.9 ZVT-Boost 模式示意图

图 3.9 ZVT-Boost 模式示意图

  

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\ZVT_Boost_电路原理图_images\img_009_281eb0fdecf4.png)

  

Bypass 电路用 Relay 与 SCR 并联使用，其主要原因为：(1)在进行切断/闭合时，由于 Relay 的动作 时间较长，其完全闭合需要 15ms 的时间，所以为了保证在工作模式切换时不断电，需要安装 SCR 来完成 快速切换。(2)在正常导通工作时，由于 Relay 的导通损耗小于 SCR 的导通损耗，所以用 Relay 和 SCR 并 联可以保证在稳态运行时减小系统损耗。

**\--->精选好看<---**

-   [**反激电源拓扑CCM与DCM的特点**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247520234&idx=1&sn=4526d35430b9fda3ef23aa659cf326d4&chksm=fcef6c88cb98e59ebffcaf974a9224a2e78d6219e25f88a94d16e871fc4c69eab1992af8cfd2&scene=21#wechat_redirect)
    
-   [**ADC采祥保持电路、比较器原理解析**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247520397&idx=2&sn=4578687a912ffc34153f518b5f046e19&chksm=fcef73efcb98faf9392ec2848eceebfa6cef6396612fdff42a758ed7b99b664e7763ea14527a&scene=21#wechat_redirect)
    
-   [**LLC开关频率与谐振频率**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247520228&idx=2&sn=765dced099484bb338cefbe04e2c0dc5&chksm=fcef6c86cb98e59099a13be21b43b98a9d57e14893913b9355589d52fce199a711a43aba4be4&scene=21#wechat_redirect)