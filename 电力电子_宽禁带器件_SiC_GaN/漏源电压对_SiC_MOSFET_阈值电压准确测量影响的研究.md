# 漏源电压对 SiC MOSFET 阈值电压准确测量影响的研究

原创 姚博均、 郭春生 SiC碳化硅MOS管及功率模块的应用 2025-02-15 13:25 广东

> 原文地址: [https://mp.weixin.qq.com/s/OtVRpMIs0bBtimUDCld3ag](https://mp.weixin.qq.com/s/OtVRpMIs0bBtimUDCld3ag)

文章来源：电源学报

作者：姚博均、郭春生、崔绍雄、李嘉芃、张亚民（北京工业大学微电子学院、北京 100124）

摘要：相较于 Si 器件，SiC MOSFET 近界面氧化物陷阱区域更广，界面态陷阱密度高出 2 个数量级，大量陷阱不断俘获或释放电荷，导致阈值电压（Vth）随时间波动较大，因而 Vth 的准确重复测量成为难题。 标准中阈值电压测量采用预处理的方法，保证每次测量时陷阱电荷状态的一致性，但标准中未考虑漏源电压影响预处理填充后的陷阱状态，导致阈值电压测试误差。 针对该问题，首先通过测量不同漏源电压脉冲影响下的转移曲线,显示不同源漏电压对阈值电压的影响；然后,基于瞬态电流法分析了漏源电压对陷阱电荷状态的影响；进而，分析了漏源电压影响陷阱的机理；最后对比了不同漏源电压对阈值电压测量的影响。 实验表明，漏源电压影响栅漏间电场正负，进而影响陷阱填充或释放电荷，导致阈值电压漂移。测量阈值电压时使用较小漏源电压可提高测量准确性，减小可靠性实验由测试因素造成的误差。

关键词：阈值电压；重复性；碳化硅 MOSFET；栅极结构

0\. 引言

以 Si为代表的第一代半导体材料受到材料自身特性限制，在高温、高压、大功率等极端环境下Si器件无法满足实际需求。SiC 作为新一代宽禁带半导体材料， 展现出了优良的电学特性和热学特性，以其为材料制成的SiC MOSFET 器件具有尺寸小、耐高温、工作频率高及开关损耗低等特点，在航空航天、军用武器系统、电能转换、新能源汽车及工业驱动等需要大功率电能转换领域具有广泛的应用前景。目前，制约SiC MOSFET 器件广泛应用的最大挑战之一来自产品可靠性问题, 尤其是栅极氧化层的长期可靠性。 SiC MOSFET的关键电学参数阈值电压的漂移主要由界面陷阱及近界面氧化物陷阱诱导。SiC/SiO2界面中的界面态密度Dits主要在热氧化过程中引入， 可以达到 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllOqqUW6TyuQRZHP0GJWg4d7re55hqOuEmexwsklI2fWzKJsfmMauFpL2vjwf6oW8mAKibnZacMhQ/640?wx_fmt=png)

，较 Si 器件高出 2~3 个数量级。 SiC 的导带能级与SiC/SiO2 界面的陷阱能级更为接近， 易于界面陷阱不断释放或俘获电荷，并且界面陷阱还可以作为“中介”辅助载流子隧穿到氧化物中被陷阱俘获。除界面态外，近界面氧化物陷阱也是影响 SiC 器件阈值电压的主要因素，SiO2 层的热生长工艺中产生了 Si 缺陷，O 缺陷，C 缺陷等， 缺陷空间区域更广、密度更大。 随时间及栅极电场变化，SiC MOSFET的 SiC/SiO2 界面陷阱及近界面氧化物陷阱不断释放或俘获电荷，导致阈值电压不断变化，阈值电压波动可达 20%以上。因此，准确测量阈值电压是研究 SiC MOSFET 器件栅氧退化等可靠性问题的前提。

目前研究影响 Vth 漂移的测量因素有测量时间、扫描方向、延迟时间和测量温度等。现行电压扫描法标准中阈值电压测量原理简单，操作难度低，但方法本身测试速度较慢，是目前常用的测试方法。该方法使用预处理的方式，在测试前施加栅压持续一段时间，填充陷阱，之后迅速切换到测量阈值电压的条件测得转移曲线，从而在保持陷阱电荷稳定的状态下，测量阈值电压等电学参数，保证参数测量的稳定性和一致性。但是，由于该方法未考虑测量转移曲线时漏源电压将影响纵向电场，改变预处理填充后陷阱的电荷状态，引入阈值电压测试波动的问题。 为此，本文研究不同漏源电压短脉冲对器件 Vth 的影响，结合瞬态电流法辨别陷阱填充状态，从器件层面分析漏源电压影响 Vth的机理。

1. 漏源电压对阈值电压测量的影响

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllOqqUW6TyuQRZHP0GJWg4GJVEibagZSyNPCBIKxy85zNnvs9nNjiapBiaVEZOL0Dcnyg0AJ4VLuVvw/640?wx_fmt=png)

引起 Vth 漂移的主要因素即界面陷阱及近界面氧化物陷阱如图 1（a）所示；施加预处理填充后状态如图 1（b）所示；切换至测试阈值电压的条件，由于栅极电压的改变及漏源电压的引入导致电场改变，陷阱中电荷填充变化如图 1（c）所示。

为观察漏源电压对阈值电压的影响，本文针对某款 n 沟道平面栅 SiC MOSFET 功率器件， 使用Keysight B1505A 功率器件分析仪和 N1265A 快速开关对不同测试条件下的转移曲线进行了测试和分析。测试时序如图 2（a）所示，在扫描转移曲线的每个数据点前施加预处理漏压脉冲（VDSQ）与预处理栅压脉冲（VGSQ），当测量转移曲线数据点时漏压固定为 500mV，栅压为 0~5 V。 通过改变不同预处理偏压数值，观察转移曲线的变化。 在图 2（b）中，VDSQ\=0 V，其随栅极脉冲电压 VGSQ 增大转移曲线右移，阈值电压正偏；在图 2（c）中，VGSQ\=3.5 V，其随漏极脉冲电压 VDSQ 增大转移曲线左移，阈值电压负偏；在图 2（d）中，VGSQ\=0 V，其随漏极脉冲电压 VDSQ增大转移曲线不变，阈值电压不变；栅压脉冲与漏压脉冲对阈值电压 Vth 漂移的影响相反， 且当仅存在漏压脉冲时，阈值电压 Vth 不漂移。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllOqqUW6TyuQRZHP0GJWg4X2txUaT6ZT1iacFkicafc00AuzQpm6yY8TBadHvehYzYmcfWwFsXuicng/640?wx_fmt=png)

2. 基于瞬态电流法分析

器件漏极电流瞬态变化与其内部的陷阱和缺陷特性关系密切，在恒定外加电学条件偏置下，SiC MOSFET 器件的漏极电流 Ids 与时间 t 呈现出 e 指数的变化关系，并且在器件的陷阱俘获电子时导致漏电流下降，在释放电子时导致漏电流上升，可表示为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllOqqUW6TyuQRZHP0GJWg4QqJZtgGqkFU1EPFrEGjfh2uSYteC5vfZexVyaGyjJ1Ir9Mrf8ib7kXg/640?wx_fmt=png)

式中：ΔIi为其影响电流变化的幅值；Ti为第 i个陷阱的时间常数；I∞为稳定漏源电流。

基于上述关系，可以对待测器件施加一定电压偏置填充陷阱，再转到测试条件采集漏源电流随时间的变化，将得到的数据采用贝叶斯反卷积算法处理，最终得到陷阱的时间常数谱。 实验时序如图3所示，可分为300s的填充阶段与289s 的测试阶段，利用 Keysight B1505A 功率器件分析仪的 I/V-t Sampling 程序，将采样时间间隔设置为2ms，以log 50 变化，设置总采样点260个，共计289.088s。需要说明的是，该时间点漏源电流随时间已不再大幅变化，故选取的测试阶段时长为289s。 填充阶段使用不同漏压偏置令陷阱的填充效果不同，测试阶段施加的栅压略大于阈值电压，其值为 3.5 V，漏压 500 mV 以产生漏源电流，防止电流过大器件自热导致对电流的影响。该 SiC MOSFET 器件热阻为 1.1 度/W，所用填充条件栅压为4V，其与测试条件栅压3.5V、各漏压条件下最大漏源电流不超过 70 mA，并以漏压最大（即 15 V）时计算耗散功率为1.05W，温升最大约为 1.1 度，对阈值电压造成的影响约为 6mV，故温升不是该实验中影响阈值电压的主要因素。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllOqqUW6TyuQRZHP0GJWg4L9A4D5MBqsYibHGkzPg43mXl0LlApnHiaVzfER2ya6l59Vm8obUvfXrw/640?wx_fmt=png)

待测器件初始阈值电压为3.2V，在填充阶段施加4V的恒定栅压，改变漏压分别为 0、10、15V；测试阶段施加 3.5V的恒定栅压及 500 mV 的漏压。通过上述条件测得的漏源电流变化趋势与陷阱时间常数谱如图 4 所示, 可见： 填充阶段漏压为0V时测得的漏源电流曲线呈上升趋势，栅氧陷阱在填充阶段300s内，由于栅氧上正向电场导致持续填充电子至饱和，因此切换到测试条件后栅氧电场下降，电子无法继续维持在陷阱内，测试过程中陷阱持续释放电子，阈值电压随之持续下降，漏源电流上升；填充阶段漏压分别为 10、15V 时测得的漏源电流曲线呈下降趋势，说明测试过程中陷阱不断填充电子，阈值电压上升，漏源电流下降；陷阱时间常数谱峰值表示其改变漏源电流的程度，其正负对应陷阱电子的释放与填充，可以看出漏源电压的引入改变了陷阱的电荷状态，从而诱导器件阈值电压Vth漂移遥。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllOqqUW6TyuQRZHP0GJWg4ib8HTOvTYDqxqeibkCA4CenqpbZuAuyibk22ibOrhEflAA1VfIkgdr48DQ/640?wx_fmt=png)

3. 漏压影响阈值电压的机理

对于NMOSFET，在测试阈值电压过程中，当所加栅压与漏压之差 Vgs\-Vds>0 时， 其能带图如图 5（a）所示，费米能级之下的界面态陷阱将填充电子，导带底能量Ec的电子有概率隧穿到近界面氧化物陷阱中，这种情况下SiC/SiO2 界面附近的电子俘获令阈值电压正偏；当所加栅压与漏压之差Vgs\-Vds<0 时，其能带图如图 5（b）所示，位于界面态陷阱中的电子被释放，近界面氧化物陷阱中的电子隧穿返回 SiC，电子的释放令阈值电压负偏。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllOqqUW6TyuQRZHP0GJWg42kRD2ib8bu8JJdgByL83Wusu6lafXRGvwBqSFAibloV33kxibg3WGkDGA/640?wx_fmt=png)

当被测器件栅极施加正电压、漏极不加电压时，其界面陷阱及近界面氧化物陷阱的填充状态如图 6（a）所示，反型层中的电子填充到陷阱中，令阈值电压正向偏移；当栅极施加正电压、漏极也施加电压时，将产生Vgd>0与Vgd<0 电场相反的不同区域，Vgd<0的区域陷阱释放被俘获的电子令阈值电压减小，当该区域电荷释放占主导时阈值电压负偏，如图 4（a）中施加漏源电压10V及15V的情况；当栅极不加电压、仅施加漏压时，如图 4（c）所示，漏压主要降在2个pn结上，对界面态及近界面氧化物影响较小，此时阈值电压不变。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllOqqUW6TyuQRZHP0GJWg4vJYNJoPt4H4ByGaXmU5bHm1ygb5zVLtlia6yRTS4tt6UZYYnb2mNNrw/640?wx_fmt=png)

4. 根据上述理论对比不同漏压测得的阈值电压重复性

针对某SiC NMOSFET器件，使用现行电压扫描法测试阈值电压，其时序如图7所示。 测试过程分别使用5V及500mV漏压，预处理条件及其他测试条件相同，包括测试环境温度等。使用Keysight B1505A功率器件分析仪的I/V Sweep程序，设置栅压扫描范围由4至0，阶梯为101，间隔为40mV，预处理栅压VGScon\=4V、脉宽tcon\=4s。在预处理结束后，立即下扫转移曲线得到阈值电压，每次测量应间隔一定时间等待测器件恢复，对比不同漏压下测得的阈值电压重复性，测试结果的重复性可用总体标准差进行表示，即

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllOqqUW6TyuQRZHP0GJWg4Fj97QA3twyZtgWZjXeUVEosxcA7qWYiaYBNk1v3SiciblQHIuWFXCia98w/640?wx_fmt=png)

式中院N为实验次数；xi为每次实验阈值电压的数值；μ为多次实验阈值电压的平均值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllOqqUW6TyuQRZHP0GJWg490RYQHJoOpOA3HkSVic6hBbHSiantsnWa3UMmUicR1oJ07iajPTejcBdWg/640?wx_fmt=png)

表1为阈值电压测量结果，可见院当漏压由5V减小至 500mV 后，4次阈值电压测量结果的标准差由0.0210下降至0.0092，阈值电压波动由60mV下降至25mV；在该阈值电压测量过程中，当栅压为4V、漏压为5V时漏源电流最大，未超过 60mA，以最大耗散功率0.3W 计算温升约为0.3 度，造成阈值电压波动约1.4mV， 故测量过程的温升几乎不影响阈值电压的测试结果。在以阈值电压漂移量超过初始值20%为失效判据的可靠性实验中误差可减小5%~8%， 对以阈值电压为温度敏感电参数的温度评估时可避免约10度的误差。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsllOqqUW6TyuQRZHP0GJWg4o4LbPA4B6fKJ4dyuXicJqa3FcaCESW9sW8KrVHUyyFsX3K0z39Uq5ibw/640?wx_fmt=png)

5. 结语

首先，本文研究了漏源电压对阈值电压测量的影响。实验结果显示，在扫描转移曲线时通过施加不同栅压与漏压，测得阈值电压变化趋势相反的 2 种曲线。其次，本文通过瞬态电流法进一步分析了漏压对器件陷阱填充状态的影响，结果表明，当仅施加正栅压时，电子填充陷阱，阈值电压正偏；引入漏压后，陷阱总体表现为电子的释放，阈值电压负偏。 最后，本文从器件层面分析了漏压影响阈值电压的机理，得出由于漏压影响纵向电场甚至令电场反向，导致陷阱由被电子填充至释放电子的转变，诱导了Vth的漂移；但仅施加漏压时，由于电压主要降在 2 个pn 结上，未影响到界面态及近界面氧化物陷阱附近的电场，故阈值电压不变；当电压扫描法测量阈值电压时，使用较小漏压可减小因测试因素引入的误差，从而提高可靠性实验及测温准确性。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)