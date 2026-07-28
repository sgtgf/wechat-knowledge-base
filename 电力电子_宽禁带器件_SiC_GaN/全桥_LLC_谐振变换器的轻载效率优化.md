# 全桥 LLC 谐振变换器的轻载效率优化

原创 岳改丽 , 毛江昊 SiC碳化硅MOS管及功率模块的应用 2026-06-07 09:39 广东

> 原文地址: [https://mp.weixin.qq.com/s/1ThWUHlKQ5VQQ2PpdCNy8w](https://mp.weixin.qq.com/s/1ThWUHlKQ5VQQ2PpdCNy8w)

文章来源：科学技术与工程

作者：岳改丽,毛江昊,王佳龙,杜光辉,孙薏涛(西安科技大学电气与控制工程学院,西安 710054)  

摘要：为了解决全桥 LLC谐振变换器轻载下效率低导致的整体效率下降问题,提出一种变频控制与多脉冲间歇控制相结合的混合控制策略。通过研究变换器拓扑工作原理,分析原边开关管实现零电压导通和副边二极管实现零电流关断的条件,在满足变换器实现全负载范围内软开关的基础上,提出一种改进间歇控制方法,并将其与变频控制相结合来提高变换器轻载效率,根据间歇控制最大功率确定混合控制切换点,实现控制方式的平滑切换。最后搭建了一台输出功率为 480W的变换器样机,实验结果表明变换器能够实现全负载范围内软开关,并且与传统间歇控制相比,混合控制的轻载效率平均提升了1.77%。实验结果充分验证了所提控制策略的正确性及其在提升变换器能效方面的优越性。  

关键词：LLC谐振变换器;轻载效率优化;改进间歇控制;软开关

随着高效电力电子技术的快速发展,LLC谐振变换器因其出色的性能在多种应用中得到了广泛关注,如通信电源、电动车充电桩和分布式发电系统。该变换器的核心优势在于能够通过谐振特性实现开关管的零电压导通(zero voltage switching,ZVS)和零电流关断(zero current switching,ZCS),从而显著降低开关损耗,提高效率和功率密度。  

然而,在轻载工况下,传统变频控制策略会因原边电流幅值不足,难以提供结电容放电所需能量,导致开关管硬开通并产生显著开关损耗;同时开关频率偏离谐振点将引发谐振腔阻抗升高与电流相位滞后现象,进一步破坏零电压导通条件,形成开关损耗累积效应,最终制约系统整体性能及能效水平。  

为应对轻载效率低下的问题,在拓扑结构优化方面,一些研究通过优化 LLC谐振变换器的拓扑结构来提升性能。文献\[10\]提出了多模态宽范围谐振拓扑,使变换器能够在更广的负载范围内保持高效运行;文献\[11\]通过引入宽增益范围设计,增强了谐振变换器在动态负载条件下的适应性。然而拓扑结构的改进通常需要显著增加硬件设计复杂度和成本,并对电路设计和系统集成提出更高要求。控制策略的改进是解决轻载效率问题的另一重要方向。文献\[12\-13\]提出了PWM(pluse width modulation)+PFM(pluse frequency modulation)混合控制策略,用于动态调整开关频率以改善负载适应性,但是 PWM控制容易导致开关噪声过大,并且不利于变换器软开关的实现;文献\[14\]利用移相控制策略在一定程度上优化了变换器的效率和动态响应,但存在一个桥臂无法实现软开关的问题。文献\[15\]提出了一种基于三脉冲的间歇控制方法,提高了系统的动态响应速度,但是该方法控制逻辑较难实现,并且复杂度高。文献\[16\]对负载的切换过程进行控制优化,通过改变脉冲宽度来控制输出电压,但其控制方式也较为复杂。在实现软开关与提 高轻载效率整体研究方面,文献\[17\]采用移相控制,有效解决了变换器轻载或空载下电压飘高问题,但是会导致软开关特性消失;文献\[18\]提出Burst\-PWM混合控制,利用 PWM控制来减小谐振腔电流峰值,并依靠 Burst控制来提供 ZVS条件,但是降低了变换器轻载下间歇导通时间内的工作效率。  

上述研究虽然在不同程度上改善了LLC谐振变换器的性能,但在轻载效率和软开关的综合优化方面仍有较大的提升空间。因此,在满足变换器全负载范围内软开关的基础上,提出一种基于谐振电容电压阈值的改进型多脉冲间歇控制方法,通过控制开关管的导通与关断,将谐振电容电压限制在两个阈值电压之间。并将变频控制与改进后的间歇控制相结合,通过精确设置控制模式切换点,确保控制方式能够进行平滑切换,在无需增加额外硬件复杂度的前提下,可有效解决轻载工况下软开关丢失与效率下降的共性问题。最后搭建试验样机进行测试,验证该混合控制策略的正确性和有效性。  

1.LLC谐振变换器电路拓扑

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMcibuLcQEO6lVYwMj4fslbVtnXVPlVTNeMn2HzLuUweQKjAKIBXzH772ib2S3yrZ8sPT6e4GXIDWAVSNfT8LkkmxAJWhU5lw1P8/640?wx_fmt=png&from=appmsg)

全桥 LLC谐振变换器的拓扑如图 1所示,包含3个谐振原件:谐振电容 Cr、谐振电感 Lr、励磁电感 Lm。  

设变换器的开关频率为 fs,谐振频率为 fr,可表示为 fr\=1/(2π√LrCr),变压器变比为 n∶1。变换器的电压增益为

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMia4UrgoFBx1fxvicwYE3ZPEgeRWicmkS7Ys5ILwxAdxGtJRSzBKdkibQ0gxiapVMicrcYFYYzOEJPsGQuBfEsvKbBGLXaHZzRNd1qw/640?wx_fmt=jpeg)

式(1)中:k为电感比,k\=Lm/Lr;fn\=fs/fr为归一化频率;Q为品质因数,Q\=√Lr/Cr/Req,其中 Req为等效电阻。

2.变换器软开关条件分析  

2.1原边开关管 ZVS实现条件

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpON3QSpn1W0FuVjXUc9GL2ic0ybjc9mtr8nhrBMibiaVB9EhIvekqrHOumfZZ7sPIwu95yAsPibh73a3j1YJR6trJ7OIDkud7SNRds/640?wx_fmt=png&from=appmsg)

原边开关管零电压导通的必要条件在于谐振电流的相位相对于桥臂电压的相位呈现滞后状态。如图 2所示为变换器开关频率 fs<谐振频率 fr时,在临界情况下实现零电压导通的相平面轨迹。iLrN和 uCrN分别为谐振电感电流与谐振电容两端电压的归一化值,O1和 O2分别表示变换器从 T1到 T2时刻与 T3到 T4时刻所对应的圆心,E1和 E2分别表示 T4到 T1时刻与 T2到 T3时刻所对应椭圆的圆心。从在正半周内,开关管 Q1和 Q4处于导通状态,从 T1时刻起到 T4时刻开关管 Q1和 Q4关断,开关管 Q2和 Q3准备导通。为了简化分析,忽略死区时间以及结电容的充放电时间,在此情况下,保证原边开关管实现零电压导通的必要条件是 T4时刻的电流需维持大于零的状态,负半轴不再赘述。  

要实现开关管的零电压导通,除了满足谐振电流的相位条件外,还必须保证电感所释放的能量要大于开关管结电容所存储的能量。即

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPSBL13m9tJp4ic1doZnoJzsClPNco1Oq1Pq8nEtYZ4dgJKXjfSBowh4ocGbn2JCyz9ZIOtbaZOM8SP1xBibNhNNXKoFmtXR0Bc4/640?wx_fmt=png&from=appmsg)

式(2)中:IZVS,th为开关管实现 ZVS的最小电流;Coss为开关管等效寄生电容。  

将 IZVS,th的限制条件绘制到相平面空间中如图 3所示。  

为了保证零电压导通的顺利实现,需要在开关管关断的瞬间,确保电感中存储的能量大于实现零电压导通所需要的最小电流 IZVS,th对应的能量阈值。为了避免变换器丢失 ZVS的实现条件,应该使开关动作点的谐振电流大于 IZVS,th。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO0xEKJ75nS3uIOGuxK1kicCl88w1iaRbSe83niauTkVWiaPjZQ2XiaHgY5MVhejl7ARvaVqCbJNcib6DexJBGgWQALTevMl2E1yKNNE/640?wx_fmt=png&from=appmsg)

2.2副边二极管 ZCS实现条件

当 LLC谐振变换器工作在 fs<fr状态时,能够实现副边整流管的零电流关断,但是负载的突变以及工作频率的变化都可能对零电流关断的实现条件产生显著影响。LLC谐振变换器直流电压增益曲线如图 4所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOEzspwl0jFoLuLeRg6mJUygz3F5tEExv37WzCbibOJm3rhOWgMcgDj1VPg6oFRMpMm9icchnVc8IiaInNOhfewbpEm3sjyPuJqwM/640?wx_fmt=png&from=appmsg)

纯阻性曲线和直线 fN\=1将整个直流电压增益曲线划分为区域Ⅰ、区域Ⅱ和区域Ⅲ。区域Ⅰ被定义为感性工作区,在此工作区内,归一化频率 fN\>1,直流电压增益小于 1并且呈现出单调递减的趋势,此时变换器处于降压工作状态;区域Ⅱ也属于感性工作区,但其归一化频率 fN<1,且直流电压增益大 于 1,变换器处于升压工作状态;区域Ⅲ为容性工作区,在此工作区内,归一化频率 fN<1,直流电压增益小于 1。在设计 LLC谐振变换器时,通常要求其工作在感性工作区,以确保原边开关管实现零电压导通,同时副边二极管实现零电流关断。  

当励磁电感 Lm没有被输出电压 Uo钳位时,可以 计算出励磁电感上的电压为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOtcw8eCiceuOQBrNTYQerpY5OdUoc2aVF5KSRb2U2T3xUGO7XiaPvicJJUicvQeIEXI0IYosR6Fp4aEk8ruZYFWDLjE8Bt9xO7g8U/640?wx_fmt=png&from=appmsg)

当开关管 Q1和 Q4导通时可以将式(3)化简为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMzd75Kw0Z9AVybAV7VHmHIIbvrEEd6UiaLCdYUiaknibpcdLkhfDNDrN6kRkbGub0RJaVQaBbR3IGc58V6FU67ygE4jVRkia3Osibc/640?wx_fmt=png&from=appmsg)

由于谐振电容电压 vCr是动态变化的,因此必须综合考虑副边二极管的导通条件,当 \-nUo<vLm<nUo时,副边二极管上的电压未能达到副边二极管导通的阈值时,二极管将不会导通。因此副边二极管关断的条件为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOshoaOlmWg6GA3NO0fLAMfPGxJsPccFA5YJVoNIqOmJG3eYDNIhpNQ5anREmxqhrTJrUjwgKibaqFEOCQJY76Zia3IhmazfvQds/640?wx_fmt=png&from=appmsg)

对式(5)进行归一处理并化简可得

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOzAsLDm1pVWO8ns0BbaAuibYjE7kPiaIBsPGksDUBGN1H9fMjsWQI9Le0ItictqrpGyib6zw2Y4zInT0uCVPBJnwVn4y2wHuKJZb4/640?wx_fmt=png&from=appmsg)

对式(6)进行分析可知,变换器工作在正半周期,当开关管 Q1和 Q4处于导通状态时,副边二极管的电流会出现断续现象,这一现象为副边二极管的零电流关断提供了条件。绘制式(6)的不等式区域如图 5(a)所示,当变换器处于 fs<fr状态时,副边整流管的零电流关断需满足开关动作点 T1~T4在图 5(a)中的位置。同理,变换器工作在负半周时,可以推断出当开关管 Q2和 Q3导通后,副边整流管的电流会出现断续现象,如图 5(b)所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOKpiap94lttNdqwAkFiaHWpjVb6vRQkYH7FQFv7A5Z69yT4QWKtq5j97CiavfPVSknIO7Jw0F6chp0sJr9fNQGjibGH6jibV4Uw3ck/640?wx_fmt=png&from=appmsg)

3.轻载控制策略  

在 LLC谐振变换器中,间歇控制作为提升变换器轻载下效率的主要方法,被广泛应用于各种变换器拓扑中。它通过减少开关次数和降低轻载时的导通损耗,显著提高轻载或空载条件下的整体效率。其工作波形如图 6所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPJ4wmzNVNtk2OTH1YZwNBktiaVK6orEBUs6licOaG1cfsrvdiccJlVBGRKgweIVKAMDyabDqHrNUVBHcGE0jKQMW3HDJCHWMDyW8/640?wx_fmt=png&from=appmsg)

在一个间歇周期 Tburst内,存在间歇导通时间 Ton与间歇关断时间 Toff。当负载需求较低时,控制器检测到输出电压 Uo高于设定阈值上限电压 uTH,H,关闭 所有开关管,变换器进入“休眠”状态从而停止工作。此时,能量传输暂停,输出电容开始放电。当 输出电压 Uo因放电而低于设定阈值下限电压 uTH,L时,控制器重新激活开关管,变换器进入“工作”状态,谐振回路开始工作并向输出电容补充能量,直到电压恢复至目标值,再次进入休眠。通过调节占空比进而间接控制输出功率,维持电压稳定。  

传统的间歇控制,其反馈电压会随着负载变化而发生变化,因此在驱动时容易产生噪声,且控制频率也无法得到保障。当变换器处于轻载状态时可能无法保证其软开关,从而导致轻载效率下降。针对上述问题,提出一种改进型间歇控制策略,其 工作波形如图 7所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMbW3OIqqzM1F7oBPNICQf0ejWztBRvOf2YKWbbPM7I7DsibQ5ufYYN0nJHbAkbp9BjmV2yMDtXZiaMzvHFW0J6WR2kL6EkArq4I/640?wx_fmt=png&from=appmsg)

在 t0时刻之前变换器处于多脉冲间歇控制关闭状态,输出电压 Uo减小;在 t0时刻输出电压减小至阈值,此时开关管 Q1和 Q4导通,谐振电容电压 vCr增大,输出电压 Uo减小;在 t1时刻谐振电容电压增大至阈值上限电压 uTH,H,开关管 Q1和 Q4关断,Q2和 Q3导通;到t2时刻,即谐振电容电压减小至阈值下限电压 uTH,L时,开关管 Q2和 Q3关断,Q1和 Q4导通,输出电压增大;t3时刻之后,所有开关管全部关断,变换器停止工 作,此时谐振腔内的能量通过变压器传递至副边,副边二极管关断,滤波电容 Cf为负载提供能量。  

分析之前,首先假设滤波电容 Cf足够大,且电路中开关管和谐振腔的损耗忽略不计,当 MOSFET的开关频率等于变换器的谐振频率时,流过谐振腔的谐振电流 iLr为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOib4KpHzFgG9LI2Pa2k3BlOe7qyY4rjoGhPK3pp5jF1r2LxnYjDEs8YPKvHMkQ9sNeVQJWDRPZicuHpCeBIudnBBbaibb4JWCZyo/640?wx_fmt=png&from=appmsg)

式(7)中:io为输出电流;ωo为谐振角频率。  

在 t0~t1时刻,励磁电流 iLm保持线性上升趋势,当到达 t1时刻时,励磁电流上升至与谐振电流相等,即

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPGZOUJmicS9vJW25Ij8iamXZsldbzicDxJZLFKTuWwRFawjVRH7TGU2uyvOoVamZme9dEniaoxiciamUGOfSKJQyoZiaO7YE2Ube82VE/640?wx_fmt=png&from=appmsg)

此时谐振电容电压 uCr为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMZ0OZsiaBV0J29stcXB8NXk2qOqmiagqzpIzSeLSQ3e11N25Y8I58INLflESiah1icvw41QZu4EhtiaiaYnjp5cv6xKX8Q1ymLKuicXo/640?wx_fmt=png&from=appmsg)

式(9)中:Z0为特征阻抗,Z0\=√Lr/Cr。  

基于上述分析,所采用的间歇控制的核心在于对阈值电压 UTH,H的设置,通过控制开关管的导通与关断,将谐振电容电压限制在两个阈值电压之间。假设在每个间歇控制开启阶段内电路中的能量全部传递给了滤波电容 Cf,那么输出电压的变化量ΔUo为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOiakjicJbSDcqgY3WymxVbRgicyO07rnAdtjeHjxUtibZ3sTgrhyRsNOuWtyLDC2WqM95wdS1YYP59H9PRNykLdpuUz0LoPZF1LP4/640?wx_fmt=png&from=appmsg)

当变换器带载时,输出电压的变化量小于ΔUo,根据 ΔUo的设计要求即可计算出阈值电压为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPEucg140aib0n9thIm7qPpPq4lGicPImYs2pYdv9Nqw3iaQ2E1sHblJgtIIlWiaEetKJa3n8KhQ5W52XsVPob2pNJ3Mx6HoOr4Njs/640?wx_fmt=png&from=appmsg)

为了保证变换器在轻载情况下具有良好的效率,可以将半载情况作为临界点,此时变换器的谐振电容电压为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNIEyJAdO9S7BhAdHrjjKkkf1tPuzbxjUcFUFic8qicmLDvupDiajfWKB16k5SlSTYkcDq2NJWIzCKAIVlaFMLMQwHhibRSSUuWStM/640?wx_fmt=png&from=appmsg)

式(12)中:iob为半载情况下的输出电流。  

对其进行归一化之后可得

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOInmkic0DTiaB1lYX6lN7tgdglQ1K6m55QibU96VWYFIoKVdicZP6FWU1LkTquAKdzWHQEYIPA1Ecks7hl6NQhzLec6nKPIibHBRnI/640?wx_fmt=png&from=appmsg)

由此可知通过调节滤波电容 Cf,使 uCrb限制在UTH,H和 \-UTH,L之间,即可保证在阈值电压内提高变换器轻载效率。变换器工作频率 fb和占空比 Db的数学表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOAp1j28fSVRXfvicXAqRyr9co6AicMksHB87hcT09QWAnndRibYYKotWqiawgnfUc6Xg1dw7ADaQBG10INF55z5x1CZkpaHBzgpRg/640?wx_fmt=png&from=appmsg)

由于后两个脉冲的持续时间为第一个脉冲的 4倍,因此:

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNjGt3Xq8Brtv5xAfAxJ91yKURqhBBNOhY0kxO8QI2qkNmhuS5nnTbXqWMjhNLEtAjfYL7zOLKPBFXib1w39QC77wZMUibWFZkR8/640?wx_fmt=png&from=appmsg)

式(15)中:Pb为所采用的间歇控制功率;P为最佳效率点的输出功率;Tb为谐振腔输出时间。变换器工作在轻载情况时,以半载为临界点,取最小关断时间 Toff为谐振腔输出时间 Tb的一半,联立式(14)和式(15)即可求得间歇控制的最大输出功率为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN7AaNyJfUn8nH0KonNp7HGWNQTcqZpiaD3jIPDicgVR3lHH56U6gwena5NUZEmeHwTdEQvjFENGW6dxDwGCt0GGzsGX9XqSmS6k/640?wx_fmt=png&from=appmsg)

式(16)中:Po为额定功率。  

为避免系统在切换点处频繁切换,故留有一定裕量,据此可以计算出负载切换点为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMOAAEs0AqQ9AchjYE5r7onpQUTG9hmyUuHY5qtZg5Vsq5C4l0UxnPQo3GfuHamQKgh5RdbZzWfSwXvcNtSaVOpIicvKugGVCMs/640?wx_fmt=png&from=appmsg)

谐振频率 fr是谐振变换器运行的核心参数,间歇控制频率 fb应低于谐振频率,以保持谐振腔的高效能量传递。两者之间的关系为

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPfoWtCOXd1O7zibQ73icFgiaEUERkQibh6dzI45vQRCWjJBtx6ia9XGqYgn8HKmcNaic1YxrhGeahycy6DavrkHVOe2A2HfqTOl7rQU/640?wx_fmt=png&from=appmsg)

输出电压纹波 Uripple与控制频率 fb成反比关系,控制纹波大小计算公式为

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM5Ash2IlKTD4qE2eN13cGq9WRv2E2XySauS7SicovFzZQVcJVSkFVfgtmcE2Zw0icge9W5Q7sItVhs630lVjQm99wKaaXxOKpos/640?wx_fmt=png&from=appmsg)

式(18)和式(19)共同决定轻载间歇控制频率。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO1F9r5a6zT9FtG6bpLBEWwbj2mIfKHTGGgjMaXxiaQghAxm5ygb15cR6mdvN6LibAtpVlTAqBricjpYGl02B7e09zCiamy6xd2AIM/640?wx_fmt=png&from=appmsg)

如图 8所示为变换器控制模式切换流程图。综上分析,图中控制方式的选择过程如下:当 Po\>Pbt+ΔP时,系统采用变频控制;当 Po<Pbt+ΔP,系统采用间歇控制;当 Po处于 Pbt+ΔP和 Pbt\-ΔP之间时,系统维持控制方式不变,LLC谐振变换器的控制策略框图如图 9所示。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOnqNciboKSmsRpvMS4JnToWT3cyGUnoDeGTpsou2zLxicqdLqUtpmyamUbY22whILdicYqR3E0oPVxibBADIdsnKmVo1y4pqbJMcw/640?wx_fmt=png&from=appmsg)

4.实验验证

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOR1YUiaQLEq3TacPVNKp7HKLe0k5EaclEl0ib58tTe5ZuGCxOhuGYuFn8yQsPI0A2Vll1GhWaRz9S3lOc8ytnHVs4zC67AFTBLo/640?wx_fmt=png&from=appmsg)

为了验证所提控制策略的有效性,搭建了一台输出功率为480W的实验样机进行测试,该样机的电路参数如表 1所示。设计的变换器样机如图10所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNkbnVMxraJE3kGPQ4PBUYj79ppgJju1MEHu8HibmVaSOdwRUFcPia9daN2oyJhglDvdLYqe1tRbe3qr2tvNujMmWB4ySvh6S5Ng/640?wx_fmt=png&from=appmsg)

如图 11所示为输入电压 380V,输出电压 48V时,变换器第一桥臂下管 Q2的驱动电压 Ugs2,漏源极电压 Uds2和谐振电流 ILr在负载 50、240、480W下的 波形图。从图 11中可以看出,当开关管导通时,漏源极电压 Uds2已经降为零,实现了全负载范围内原边开关管的零电压导通。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPyNZy2mPrwZ6tCqWicU8OAU84tgwh29YnV8xlRx5LUPUs7YNrFMeToaLIKO9mQFS56S7PMVXUGkL8fh85vx67Xbia47aOkeBaR0/640?wx_fmt=png&from=appmsg)

如图 12所示为输入电压380V,输出电压 48V时,变换器副边二极管电流 ID和副边二极管电压 UD在输出功率 50、240和 480W下的波形图。从图 12中可以看出在副边二极管关断之前,流过副边二极管的电流已经降为零,实现了全负载范围内副边二极管的零电流关断。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMJ72mEE51Lr8CuATribNUyVT3LMzibvZcwXqn1dG8WnECrLlWicJfzphTNVqmiaia1DNxZBaic9KxdKNvv0SVVQ17pSnH02RozdT6ibQ/640?wx_fmt=png&from=appmsg)

如图 13(a)所示为负载功率 50W切换 至150W时,从变频控制切换为多脉冲间歇控制的实验波形图。如图 13(b)所示为负载功率 150W切换至 50W时,从多脉冲间歇控制切换为变频控制的实验波形图。从图 13可以看出变换器在两种控制方式下平滑切换,与理论分析基本一致,验证了所提控制模式切换点的合理性。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOEEpuZZRHseNljRIyzx7rbNTJK5ljO6yjPcZTzMl1KjdQGYfAttYz98jtqyHkicpGwLXEgZUH52QA6u9kMXnf3oy92Tz979RI8/640?wx_fmt=png&from=appmsg)

如表 2所示为变换器恒压输出 48V时传统间歇控制与混合控制的电路效率参数对比。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP9jyS4WUJQnibXsbQzN1o9qa8qJyAB54n2JA5WyUgWaXqZr7grqucJt2Lhib4hfF02FvkPsFhLkc0FbGjz1XWJ10LCnT5ycSUh0/640?wx_fmt=png&from=appmsg)

根据表 2中数据绘制变换器效率曲线如图 14所示。通过观察图 14可以看出,所提出改进的间歇控制有效提高了变换器轻载效率,并且负载越轻提高的效率越明显。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpPWA3E3PEHKfl9XsXicOTMkPUHJ8Zrqsdd4XGfVU5Zm5JibV1NLlMf95y2fFlJVgGGTzfLdC4a6ryzcBpMoCL2q7m2N5ZFplTnXg/640?wx_fmt=jpeg)

5.结论  

针对全桥 LLC谐振变换器传统变频控制下轻载效率低的问题,提出了一种改进间歇控制方法,通过控制开关管的导通与关断,将谐振电容电压限制在两个阈值电压之间,并将其与变频控制相结合,构成混合控制策略,根据间歇控制的最大输出功率设定了明确的模式切换点来达到最佳控制效果,改善了全桥 LLC谐振变换器的性能,进而提高了变换器轻载下的效率。最后搭建了一台 480W的全桥 LLC谐振变换器样机进行试验测试。测试结果表明变换器能实现全负载范围内软开关,且在 轻载区间内,混合控制比单一间歇控制的效率平均提升了 1.77%,验证了混合控制策略的有效性。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPwIGkwX9MZvq4Ubuz6Mw91Fs4icWicdX75nJzH84p5IQVJ5NoSCTHnszrzbPE2eQ2rd5hzbMPfXsGBlGoUHzMZ30cf9S9pHnmuY/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNL7yOJJ0RZJApM9yf64xx1pQu9DhoQwKYUgvMGyZZzgmtyS3PEtcLiaVhgTRGOpmGiacWuKbDTby7PrQlAkAibjVDY2Wk28HGcSA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM8vNv8SgtYU0eZXs0Q10oO3nnhpeXDZCwXGJjiaNPVDpQN5BRkrOpgMTdKqMcO8e8yic29cs5XllX0cqvqBhLW9Q9WWcQQxLzuY/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM3TgxOf2D9zw5gpq1hmsdoQ01VYNNOpauicVfc5sctYmNHZ0bsxqSKD5qKibQRO056a0IJNd3gQ1GopMTXicia0MtfV462juic3xR4/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)