# SiC 牵引逆变器技术在地铁中的应用研究

原创 万 金 施浚珲 SiC碳化硅MOS管及功率模块的应用 2025-05-18 07:34 广东

> 原文地址: [https://mp.weixin.qq.com/s/HWWv15psvetdTGvnWMeBUQ](https://mp.weixin.qq.com/s/HWWv15psvetdTGvnWMeBUQ)

文章来源：轨道交通装备与技术

作者：万 金1 施浚珲1 戴 琦2( 1． 西安中车永电捷通电气有限公司 陕西 西安 710016;2． 上海地铁维护保障有限公司车辆分公司 上海 200235)

摘 要: 以 SiC 牵引逆变器为研究对象，比较了混合 SiC 和 Si 的功率器件损耗，通过更换功率器件、配套新型牵引控制单元以及新 PWM 控制算法，减少功率器件的开关损耗和导通损耗，同时优化控制算法抑制电流谐波降低电机损耗。最后分析影响节能考核的因素，设计节能考核方案，在上海地铁 8 号线车辆进行装车节能测试，验证SiC 牵引逆变器的节能效果。结果表明 SiC 牵引逆变器能够实现节能 2% ～ 3% 。

关键词: 城轨车辆; SiC牵引逆变器; 新 PWM 控制算法; 节能测试

0. 引言

近年来，我国轨道交通行业蓬勃发展。轨道交通主要的能耗是电能，电费约占整个运营成本的30% 。如何进一步降低能耗，对于做好节能减排工作，落实节能减排目标具有重要意义。牵引系统是最主要的用电负载，节能空间最大。围绕节能降耗，以碳化硅( SiC) 为代表的新一代半导体器件应用对牵引电传动系统技术的发展有重要意义。

目前在地铁中广泛应用的牵引逆变器，主要为基于 Si 材料的 IGBT 功率器件，与传统 Si 材料器件相比，SiC 作为半导体材料具有优异的性能，尤其是用于功率转换和控制的功率元器件，在击穿场强、禁带宽度、电子饱和速度、熔点以及热导率方面都有优势，因此可以实现低导通电阻、开关频率高和耐高温高压条件下工作。

本文以 SiC 牵引逆变器为研究对象，比较了混合 SiC 和 Si 的功率器件损耗，通过更换功率器件、配套新型牵引控制单元以及新 PWM 控制算法，减少功率器件的开关损耗和导通损耗，同时优化控制算法抑制电流谐波降低电机损耗。最后，通过现车测试，验证 SiC 牵引逆变器实际的节能效果。

1. 牵引损耗说明

图 1 为牵引逆变器主电路损耗和电机损耗分类饼状图，可以看出在主要电气品中，电机损耗占大部分，所以降低电机损耗十分重要，而电机损耗中，因逆变器的转换控制而产生的谐波损失占 17% 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFNWDZIFWsBJj4wUKd7ZVllVhEw9ePsCocuLlxFibXWg012HXXPGVlGdug/640?wx_fmt=png)

图2 为传统 Si 模块与 SiC 模块的二极管恢复波形和 IGBT 开通波形的损耗对比，可以看出二极管恢复损耗减小至 1 /10，IGBT 开通损耗减小至 1 /2，功率单元损耗减小至 65%，效果显著。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFNHknwjDDHichm88E8OJHXWiboc8xfoPRdzXn0zjV8pFCQwNWQSbic0Gjsw/640?wx_fmt=png)

图 3 为传统 PWM 控制与 SiC 配套新型节能控制的电机电流波形对比，可以看出电流谐波减小，电 机损耗降低 5% 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFN8pvEV6qj1aMmIx2owhSo3qQYyAVvZrETgY6thno0nhWiakX7pcic8SgQ/640?wx_fmt=png)

图 4 为根据上海地铁 6 号线、8 号线实际线路进行仿真节能对比，计算单位为 kWh /car/km，每个车厢每公里的耗电量，仿真计算结果可以看出相较于 Si逆变器，SiC 逆变器可以节能 2.17% ～2.41%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFNvGxVEhDSzVE1hevb3d1Mib0s89qs867xJqHPHVbUELBYlxlT33mw1uw/640?wx_fmt=png)

综上，通过 SiC 功率器件的应用，以及配套新型控制算法优化，实现节能效果。

2. 主电路及结构设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFNtA20zFDn1mLkJOYZszdxzD7xXea4icNXCRTfibkQtuia90U450XaqfkNg/640?wx_fmt=png)

牵引逆变器主电路采用两电平电压型直\-交逆变电路( 见图 5) 。列车通过高压回路将 DC 1500 V直流电供给牵引逆变器，经牵引逆变器变换成频率、电压均可调的三相交流电，向异步牵引电动机供电。牵引逆变器由6 个混合 SiC 的 IGBT 组成三相逆变单元，采用 1 台牵引逆变器驱动 4 台牵引电动机的工作方式。牵引主电路主要由滤波电路、充放电电路、逆变单元、斩波单元、检测元件以及牵引电动机等设备组成，其中将 IGBT 斩波单元与三相逆变单元集成在一起组成功率单元。当电网电压在 1000 V ～ 1800 V 之间波动时，主电路都成正常工作，并可方便实现牵引 - 制动的无节点转换。

牵引逆变器功率单元选用的混合 SiC 功率器件型号为MBN1800F33F-C3，规格为3300 V/1800 A ，厂家为日立公司，采用软门极控制，具有低功耗、高性能、低噪音、高耐热疲劳性等特点。具体技术参数如表 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFNCSYwtwQphQ22zaMhZsVTC8GvIBPXjRcSTnh7OkfDWiadiayLsqCMoLUQ/640?wx_fmt=png)

SiC 牵引逆变器结构特点:

( 1) 由牵引逆变器箱体、高压电路和低压控制电路组成，安装在车辆下方，安装方式为托装。

( 2) 分为开放室和密闭室两部分，需要大量散热的设备经绝缘处理后安装在开放室进行自然冷却，对防尘要求较高的零部件，则安装在密闭室内。

( 3) 半导体功率元件混合 SiC 的 IGBT 的冷却采用热管散热器，功率元件安装在密闭室，通过散热基板、热管散热器( 内含冷媒) 将热量散发到车辆侧的通风部分。

牵引逆变器三维结构图如图 6 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFNphKhic9zun1jvqWSB6RH2gKLWRLJp6WmTDbjdicFNXicNtRPDfYQvxH7A/640?wx_fmt=png)

3. 控制算法优化

SiC 功率器件配套控制算法能够减少功率器件的开关损耗和导通损耗，同时优化控制算法，抑制电 流谐波，降低电机损耗。节能控制算法优化具体如 图 7 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFNIBYQ6Nwcqv8icILv9RdHwg6DhCLnX9LC7mWw5uN3iamGWN1D1yaao1PA/640?wx_fmt=png)

根据速度的不同阶段，采用三种不同的PWM控制算法，在低速阶段，用 HIP 调制代替异步 PWM调制，可以得到更高的直流母线电压利用率，电流正 弦度更高，减少电流谐波损耗。

在中速阶段，由于 SiC 牵引逆变器安装了搭载高 性能微处理器的新型无接点控制单元( VL6) ，可以实现比以往更加高速的PWM 运算处理，以应对优化的PWM 控制。相较于以往的同步 PWM 控制，新低畸变同步 PWM( HOP 调制) 在一个运算周期内可以得到 更多的调制分段，减少电流畸变如图 8 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFNibQRqibn23EibjDS1W4ibH4iaGgJtROzGSbVPYx2DbJugmIktvRIicTjA6Rg/640?wx_fmt=png)

在高速阶段，采用最优同步 3 脉冲调制替代传统的单脉冲方波调制，虽会增加逆变器损耗，但采用低损耗 SiC 模块，可抑制逆变器损耗的增加，实现在保持逆变器损耗不变的前提下，优化了 PWM控制算法，大大减小了电流谐波，减少了牵引电机的损耗。图 9 为损耗对比，以 Si 模块的同步单脉冲PWM 控制算法为基准，采用最优同步 3 脉冲调制后，传统 Si 模块损耗将增加 51% ，而 SiC 模块能够抑制损耗的增加，保持损耗基本不变。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFNrSMdMZy5TWEmALDErEIFfeW95JmX7lS0399gEWP7SpJ0b9KKrjbagA/640?wx_fmt=png)

4 .样机试验

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFN7Mf3aiblnNRiaQRaLcO1FJfaYAuPNAu8xTDqC0AiasbDmuwo7t71p37MQ/640?wx_fmt=png)

研制的 SiC 牵引逆变器样机如图 10 所示，根据IEC61287 - 1: 2014 《轨道交通 机车车辆用电力变流器第 1 部分: 特性和试验方法》进行相关试验。完成 SiC 牵引逆变器电气性能试验的同时，重点关注了逆变器温升试验，电磁兼容试验和冲击振动试验等。样机试验结果验证了该 SiC 牵引逆变器可以满足设计要求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFNGs5VfDsY5pviaIvRx9BwJYJkpUm3AdNJaQV3kPEH2nZ6gjQYCf87mng/640?wx_fmt=png)

在额定负载、额定网压 DC1 500V 条件下，对SiC 牵引变流器的牵引、制动特性进行了试验，图 11为逆变器实测波形，包含了架线电压、架线电流、滤波电容电压、调制率、电机电流等。

5 .正线节能测试

5.1 测试方案

SiC 牵引逆变器需要装车进行节能测试，影响牵引逆变器节能测试的因素有以下几种:

( 1) 牵引时间、电制时间、惰行时间的比例( 依据牵引、制动指令) ; 

( 2) 挡位量( 依据牵引、制动时级位给定) ; 

( 3) 载重( 依据乘客数量) ; 

( 4) 空转、滑行时的牵引力、电制动力减小( 依 据天气、轨面情况) ; 

( 5) 同一供电区间的车辆数量( 依据客流量高低峰) ; 

( 6) 传感器精度( 制造偏差) 。

以上条件不一致时，会对车辆的牵引能耗和再生制动回馈能量造成很大波动，无法准确验证 SiC牵引逆变器的节能效果。

考虑到上述条件对SiC 牵引逆变器和 Si 牵引逆变器节能测试对比影响，最好的方案为两种逆变器混装在同一列车上，减少逆变器本身性能外的因素影响能耗数据记录，可以消除上述中第 1 条至第5 条的影响。

此外，第 6 条制造偏差造成的传感器测量精度对能耗数据的影响，本次牵引逆变器采用的传感器 精度在 0.5% 以内，在对传感器进行单体试验时，从 中挑选测量数据精度最高的单体用于测试车辆牵引 逆变器的生产组装，最大限度减小传感器对节能测试结果的影响。

基于以上分析，装车方案如下。

具体安装方式如图 12 所示，本次装车测试在上 海地铁 8 号线车辆进行，8 号线车辆为 5M2T 的 7 编组形式，因此安装 3 台 Si 牵引逆变器( 2 车/4 车/5车) ，2 台 SiC 牵引逆变器( 3 车/6 车) ，进行混装方式，通过对比测试，真实体现 SiC 牵引逆变器的节能效果。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFNnHxfj3rl2rdCbs3yNnITHFiar7rYROnHlvUtiaM8WBHwfLIibCPQTXib5g/640?wx_fmt=png)

5.2 测试结果

按照上述方案完成 SiC 牵引逆变器装车后，开始进行正线载客运营节能测试，牵引逆变器具有能 耗记录功能，可以记录牵引能耗、再生能耗以及制动电阻能耗。能耗数据每十天采集一次，目前已收集到 5 个月的能耗数据，累积运营 36000 km，能耗数据如表 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskc5dJGLgLNMunYtpFDFcFNUnVFDicDUpbu95mB98289ygdmsIHAzHElL6NjQZ3SpGcNqwNZGCQKUw/640?wx_fmt=png)

从表中可以看出，3 台 Si 牵引逆变器的平均能耗为 53 851 kWh，2 台 SiC 牵引逆变器的平均能耗 为 52 116 kWh，平均节能 3.22% ，满足了初期设计的节能 2% ～ 3% 的目标。

6. 结束语

研究新一代 SiC 功率器件在牵引系统的推广应用，为轨道交通牵引系统商业推广提供助力，带动相关产业链发展，提高国内自主设计开发能力及技术产品水平，进一步降低研发采购成本，同时实现关键技术突破，降低牵引系统能耗，也为轨道交通领域节能减排作出贡献，具有重要的社会效益.

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBqiaC6MLw7IKTiajQPPjmIdbibZmicWxiblBeIlaoGYUE1J9yOJ2iberzqnQravvU5qZuqJ2vqvlLYCeQ/640?wx_fmt=jpeg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png)