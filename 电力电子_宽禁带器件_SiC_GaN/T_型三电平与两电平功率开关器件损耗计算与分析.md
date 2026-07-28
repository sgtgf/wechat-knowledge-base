# T 型三电平与两电平功率开关器件损耗计算与分析

原创 祝 琳 , 宋宣锋 SiC碳化硅MOS管及功率模块的应用 2025-11-23 10:50 广东

> 原文地址: [https://mp.weixin.qq.com/s/1wjiITJSIbsV8jb0CSz36A](https://mp.weixin.qq.com/s/1wjiITJSIbsV8jb0CSz36A)

文章来源：微特电机

作者：祝琳,宋宣锋,李永岗,耿乙文(中国矿业大学 电气与动力工程学院,徐州 221008)

摘 要:研究两种逆变器拓扑的功率开关器件损耗,通过器件特征参数,建立一种同时考虑工作电压、驱动电阻和结温的简单曲线拟合方法,推导出三次谐波注入调制算法下T型三电平和两电平拓扑的损耗计算模型,发现损耗与调制系数、开关频率、功率因数角、输出电流有关。 在相同逆变工作条件下,当开关频率大于 6\. 8 kHz 时,在全电流范围内可使得T型三电平拓扑比两电平拓扑损耗更小,发挥其三电平优势。 该损耗研究理论可推广至其他拓扑结构,为并网逆变器设计、效率提升奠定基础。

关键词:T 型;三电平逆变器;三次谐波注入 PWM;损耗模型;中点钳位

0. 引言

随着分布式发电系统的发展,对并网电能质量的要求越来越高。 分布式电源较多接入低压配电系统,低压工作场合下的并网逆变器效率提升成为人们关注的焦点。 多电平逆变器一般应用在中压大功率场合,其中以三电平中点钳位型(以下简称NPC)逆变器应用最为广泛。 三电平 T 型逆变器由NPC 型逆变器演变而来,由于器件耐压的限制,与两电平逆变器一样主要应用在低压场合。 相较于两电平,T 型拓扑具有三电平的所有优势,有利于减小并网电压、电流谐波和滤波器的体积,较小的电压电流变化率( dv/dt, di/dt) 减小电路的电磁干扰。 与NPC 拓扑相比,T 型拓扑损耗小,没有钳位二极管,有利于减少成本和体积,更适合应用在功率密度要求高的分布式光伏或风力发电系统、电动汽车、飞行器等场合。

目前,市场上逆变器的主要功率器件为 IGBT。随着新型宽禁带材料( SiC,GaN)的研发,将更有利于降低逆变器损耗,提高效率,而新型器件的大规模投入市场,仍有待进一步研究。 功率器件的损耗是制约逆变器效率提升的一个重要因素,因此,建立器件损耗计算模型对于分析各种影响因素以及优化逆变器性能具有重要意义。文献\[4-6\]根据 IGBT 暂态电压、电流关系,建立开关损耗模型,计算复杂。文献\[7-8\]简要分析了不同拓扑结构的损耗计算方法,对三电平逆变器损耗的分析具有一定指导意义。文献\[9-10\]进行线性拟合时考虑到结温的影响,但未考虑驱动电阻等的影响。文献\[11 -14\] 对 NPC型三电平逆变器导通损耗进行推导和比较,但曲线拟合时,未考虑结温的影响。文献\[15\]建立 IGBT 损耗模型时,考虑因素全面,并推导出结温解析表达式。

本文结合文献\[15-16\]的方法,通过 IGBT 数据手册上的主要参数和特性曲线,建立综合考虑实际工作电压、驱动电阻和结温的简单曲线拟合方法,推 导出三次谐波注入PWM 法下 T 型三电平和两电平逆变器损耗模型,给出其详细损耗计算表达式,对比分析不同影响因素下两种拓扑的损耗,得出 T 型三电平比两电平拓扑损耗小的条件。

1.IGBT 损耗模型

IGBT 的损耗包含导通损耗和开关损耗,其中开关损耗又包括开通和关断损耗。 生产厂家会给出器件在特定工作条件下的主要参数和特性曲线,根据需要的参数可建立 IGBT 的导通和关断平均损耗模型。

设计一台5 kW 逆变器,并网相电压110V,并网电流幅值 21\. 43 A,直流侧 300 V。 选用Infineon公司型号为IKW40N120T2的IGBT,建立其平均开关损耗模型。

1.1 IGBT 导通损耗

IGBT 工作于饱和区域时,存在导通饱和压降,因此产生导通损耗。 由于饱和压降与流过 IGBT 的集电极电流呈非线性关系,很难对导通损耗进行精确计算。 为简化和近似计算,对最大结温下的饱和压降与集电极电流的特性曲线作线性化近似,其典型特性定义:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzO4iaqKEkibEPOWFQSvCM1qMhpE1NdbZpJibgEpWbA0qF494hLM3MgC4RQ/640?wx_fmt=png&from=appmsg)

式中:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzXBf55via1W4aTf2LnrztZDG7GFBpnyfLGF8r2JBRJiazYtfvrMhYfgFw/640?wx_fmt=png&from=appmsg)

式中:VCEN,ICN表示器件额定工作时的饱和压降及电流;VCE0表示初始饱和压降;VCEN(Tj)表示某结温下的饱和压降;VCEN(Tjmax)表示最大结温下的饱和压降。

同理,对二极管典型特性定义:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzpzxe8vLyXpgicucGBfdfTvOU4Bsr0u7XBh5CqJxcesXBmkibycLZ0XHg/640?wx_fmt=png&from=appmsg)

式中:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzm0ibN7vd2GvywP44B6IOZhfykmQeGuJC0l8v7RqAUemAKmc8g6J37KA/640?wx_fmt=png&from=appmsg)

式中:VFN表示额定电流时二极管压降;VF0表示二极 管门槛电压;VFN( Tj )表示某结温下的二极管压降;VFN(Tjmax)表示最大结温下的二极管压降。 IGBT 和二极管的平均导通功率损耗可表示:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHz1sq9WCTMxibpFdoBHCle1ec5ut04rOsQpEibchAmk6nYHYdamNce7zag/640?wx_fmt=png&from=appmsg)

式中:D 表示占空比函数。

1.2 IGBT 开关损耗

IGBT 开关损耗包括开通和关断损耗。 数据手册上给出一定实验条件下 IGBT 能量损耗(包含二极管反向恢复能量损耗) 曲线,根据这些曲线可近似计算出实际实验条件下的平均功率损耗。 由于驱动开通与关断电阻可能不同,根据 IKW40N120T2 数据手册,开通损耗表达式定义为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzRO1dUaDJicsqeGbxib8RJIap8bYqBGzfFm3uGnA7tWQbYEHe9nyicFYbg/640?wx_fmt=png&from=appmsg)

式(1)中包含二极管反向恢复损耗,关断损耗定义:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzqiaKAssJtR9lYnNkqib9t9YibUYBNmhVL52afL78UdtlTBLeRiaz7JQSLA/640?wx_fmt=png&from=appmsg)

式中:X,Y,Z,x,y 为曲线拟合系数。

由数据手册推导实际实验条件下的损耗,需对式(1)、式(2)进行修正。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzYLuQYraibEQmCPgHL8xulmvZicpib6QF20Q4oYuJPAmnYibZzllCGKtpdw/640?wx_fmt=png&from=appmsg)

式中:Eon(RG), Eoff(RG)表示实际驱动电阻下开通、关断损耗;Eon(RG,data), Eoff(RG,data)表示数据手册驱动电阻下开通、关断能耗;Vdc(on) , Vdc(off) 表示实际器件开通前和关断后的电压;Vdc(data) , Vdc(data) 表示数据手册中器件开通前和关断后的电压;Eon ( Tj ) ,Eoff(Tj)表示某结温下的开通、关断能耗;Eon(Tjmax),Eoff(Tjmax)表示最大允许结温下的开通、关断能耗。 

IGBT 开关一次的损耗:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHz9apOZRpTicITHb2DQIpz4IicCn4UAdIsWJ60TicOgFQTLwXBX7GbKNgVA/640?wx_fmt=png&from=appmsg)

一个调制周期内总开关功率损耗:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHztxnzB47IwOvwt7PxmxytJvD8iaT4ibywbalEhC5yJKBGiazrVyUIzrmLg/640?wx_fmt=png&from=appmsg)

式中:k 表示一个调制周期内开关次数;T 表示调制周期;In 表示第 n 次开关时的集电极电流幅值。

当开关频率远大于调制频率时,一个周期内开关损耗离散表达式可表示为连续形式:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzMHMRrv7XTI4kuSvhhXSYF2QCAseqVThv9VGzEgk0cFrDXqv2a1UXDg/640?wx_fmt=png&from=appmsg)

式中:fs 为一个调制周期内的开关频率。

2\. T 型三电平逆变器损耗分析与计算

2.1 T 型三电平逆变器电流通路分析 

与两电平和 NPC 三电平相比,T 型三电平逆变器具有不同的导通方式,为计算损耗,首先对电流通路进行分析。 图 1( a)为 A 相拓扑,图 1( b)为开关器件与电压电流关系。

1) i\>0 时 

逆变器处于 P 状态,Sa1导通,产生导通损耗;处于 P→O 状态,Sa1 关断,产生关断损耗,Sa2 一直导通,Sa3零电压开通,无开通损耗;处于O 状态时,Sa2 , Da3产生导通损耗;处于 O→P 状态,Sa1开通,产生开通损耗,Da3关断,产生反向恢复损耗;处于 O→N 状 态,Sa3一直导通,Sa2关断,产生关断损耗,Sa4零电压开通,无开通损耗;处于 N 状态,电流流过 Da4 ,产生导通损耗。 处于 N→O 状态,Da4关断,产生反向恢复损耗,Sa2开通,产生开通损耗。 

2) i<0 时 

当逆变器处于 P 状态,Da1导通,产生导通损耗;处于 P→O 状态,Sa1零电压关断,无关断损耗,Sa2一直导通,Sa3开通产生开通损耗;Da1关断,产生反向恢 复损耗;处于O状态,Sa3 ,Da2 产生导通损耗;处于O→P 状态,Sa3关断,产生关断损耗,Sa1零电压开通,无开通损耗;处于O→N 状态,Da2关断,产生反向恢复损耗,Sa4开通,产生开通损耗;处于N 状态,Sa4产生导通损耗;处于 N→O 状态,Sa4关断,产生关断损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzxFIvPmncNj7rcV2IB40zddaIykJLWVhCZsaL0thceZSBNXSbDWvJiaQ/640?wx_fmt=png&from=appmsg)

2.2 损耗计算

逆变器的调制方法有 SPWM 和 SVPWM 算法。 SVPWM 相较于 SPWM,具有提高直流侧电压利用率、数字化实现简单的优点,应用更为广泛。 而损耗计算时,需要明确占空比表达式,SPWM 算法占空比表达式简单,SVPWM算法占空比表达式复杂。研究文献表明,SVPWM 从本质上等价于注入三次谐波的 SPWM 算法(以下简称 THIPWM),且通过THIPWM 算法计算开关器件占空比函数简单,因此采用 THIPWM 算法调制函数推导损耗计算表达式。

采用 SPWM 和 THIPWM 时的调制电压波形:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzTVaxdnKDyqbUfibpBmibP2oOZc6f9JjVFY2MnIRTfUbHSy2VM4NrSatQ/640?wx_fmt=png&from=appmsg)

式中:m 为调制系数,且 0<m≤1。 

T 型三电平逆变器通常采用同相双载波调制方式,其占空比如表 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzcpqgI8xOo8lqHP2Z5CjZGOMU4ArInPSpaicOTvNAhqzUQGluI7ZOdWg/640?wx_fmt=png&from=appmsg)

则器件导通损耗计算表达式如下:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzeQ3XJmH3QCvicicaibO2fNbQmMl0XJe2JPxRs133TOUHRcZu4rYasMN9w/640?wx_fmt=png&from=appmsg)

由上述分析可知,在 i\>0 时,只有 Sa1 ,Sa2产生开关损耗,在 i<0 时,Sa3 ,Sa4产生开关损耗,开关损耗表达式如下,具体展开式在此不赘述。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzlB9fkCXtvD0KXQXUaADNbgAhHD4IEWNKqL2s3rjAtcBgcAsInj0DEA/640?wx_fmt=png&from=appmsg)

T 型三电平逆变器一个调制周期内器件总损耗:

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzxTwYaOicaWBgSGPAMQ2w5CbnueicLcptxaCEDbl41Dzo28yFVKrVXQbQ/640?wx_fmt=jpeg)

3. 两电平逆变器损耗分析与计算

3.1 两电平逆变器电流通路分析

 图 2(a)为两电平 A 相拓扑结构图,图 2(b)为 一个周期内开关器件与电压电流关系。 为推导两电平损耗计算公式,对电流通路进行分析。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHz2vNXiabkoyMhhWaL7HqVsiaVd5apbroViaHCgDs028XSuLltcMO0R80Kw/640?wx_fmt=png&from=appmsg)

1) i\>0

当逆变器处于 P 状态,Sa1导通,产生导通损耗;处于 P→N 状态,Sa1关断,产生关断损耗,Da2导通, Sa2零电压开通,无开通损耗;处于 N 状态,Da2 产生导通损耗;处于 N→P 状态,Sa2零电压关断,无关断损耗,Da2关断,产生反向恢复损耗,Sa1开通产生开通损耗。

2) i<0

当逆变器处于 P 状态,Da1导通,产生导通损耗;处于 P→N 状态,Sa1零电压关断,无关断损耗,Da1产生反向恢复损耗,Sa2开通,产生开通损耗;处于 N 状态,Sa2产生导通损耗处于 N→P 状态,Sa2关断,产生关断损耗,Da1导通,Sa1零电压开通,无开通损耗。

3.2 两电平逆变器损耗计算 

两电平逆变器采用单载波调制方式,其开关器件占空比如表 2 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzoCAss8shWl34ADvSVvmINbA8niamRTRqq8JcSjiajyFWcbu0eLWGpOxg/640?wx_fmt=png&from=appmsg)

由于电路对称,开关器件导通损耗计算如下:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzab98LZFQMN6rVVtEkrGc1jGwibX5kbImn2Ul0I9fFbk8UZtF9U07yfg/640?wx_fmt=png&from=appmsg)

由上述分析知,Sa1 ,Sa2只在半个周期内产生开关损耗,器件损耗具体表达式在此不展开。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzxnF9HricB139gDIhr9Z58o1OCEPvIVuvQTezxlS9ibMGtwunWryAU2FQ/640?wx_fmt=png&from=appmsg)

两电平逆变器一个调制周期内器件总损耗:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzzoCyz5qTRN1vs1d3ajNXzicd83F1cuPDcI7wUp2hRLNepfb6GxyaliaA/640?wx_fmt=png&from=appmsg)

两电平逆变器的开关损耗仅与电流和开关频率有关,导通损耗与电流、调制系数和功率因数角有关;T 型三电平逆变器开关损耗与电流、开关频率和功率因数角有关,导通损耗与电流、调制系数和功率因数角有关。

4. 两种拓扑损耗对比

变量及参数的数值如表3所示,通过 MATLAB进行损耗分析计算。 实际驱动开通电阻 12 Ω,关断 电阻 6 Ω,直流侧电压 Vdc \= 300 V。   

对于两电平逆变 器,Sa1 ,Sa2的导通、关断电压 Vdc(on) \= Vdc(off) \= 300 V。

对于T型三电平逆变器Sa1 ,Sa4的导通、关断电压Vdc(on) \= Vdc(off) \= 150V; Sa2 , Sa3 的导通、 关断电压Vdc(on)\= Vdc(off)\= 75 V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzRX5iaEMY0k11Hav0BD6uqzFYStZTLLtCHwZLI5PRSoJqLYnn10G1NRQ/640?wx_fmt=png&from=appmsg)

当单位功率因数(φ\= 0)并网时,两电平并网逆变器器件损耗与开关频率、电流的关系如图 3 所示。

从图 3 中分析可知: 

(1)单位功率因数时,两电平并网逆变器 IGBT开关损耗和总损耗分别随着开关频率和并网电流的增大而增大。  

(2) 单位功率因数时,IGBT 和二极管导通损耗随着电流增大而增大,与开关频率无关。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzjAxTxyMOptwYB69Ih3T4BOgerXNrFQz8GzGOiatZg7gbbMN5IFpMx8Q/640?wx_fmt=png&from=appmsg)

当单位功率因数(φ \= 0)并网时,T 型三电平并网逆变器器件损耗与开关频率、电流的关系如图 4所示。

由图 4 可以看出: 

(1) 单位功率因数时,Sa1开关损耗和总损耗随着电流和开关频率的增大而增大,Sa2无开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzS4oLZHMWZnMcuLjmLxb1U1fGLpsKyHKznH9LQ8L3AFzVolbicZqf7fg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzmP4GcBlI1gWGwTCILCGX8wqm5922gflId6WTib0Pm8F2Rwt7ukviaZYA/640?wx_fmt=png&from=appmsg)

(2) 单位功率因数时,Sa1 ,Sa2和 Da2导通损耗随着电流增大而增大,Da1无导通损耗。

图 5 分别给出了不同电流下,两种拓扑损耗与开关频率关系曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHz2gOObNyDoicnicdiaeKibxP3iaRlC2SiahnvbrEMMDEOqmE8pOGStr7edUhw/640?wx_fmt=png&from=appmsg)

从图 5 中可以看出: 

(1) 并网电流幅值一定时,随着开关频率的增大,两种拓扑损耗随之增加; 

(2) 随着并网电流幅值的增大,两者损耗交叉点处的开关频率逐渐增大。 

(3) 小于损耗交叉点处开关频率的区段,T 型拓扑损耗比两电平拓扑大;反之,前者损耗比后者小。

图 6 分别给出了不同开关频率下,两种拓扑损 耗与电流关系曲线。 从图 6 中可以看出:

(1) 当开关频率一定时,两种拓扑损耗随着电流幅值增大而增大。 

(2) 当开关频率小于或等于 1 kHz 时,不同电流下,T 型三电平拓扑的总损耗比两电平损耗大,失去三电平的优势。 

(3) 随着开关频率的增大,两种拓扑损耗交叉点右移,相比于两电平,T型三电平的总损耗逐渐减小。 

(4) 在开关频率 8 kHz 时,在全电流范围内,T型三电平拓扑比两电平拓扑小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzwoH7h1MoDXX2Lge5qqAYc13Z80kPYRY9dibzzU54Lhl9bMXoG7tOCpg/640?wx_fmt=png&from=appmsg)

  

由图 5、图 6 可知,为了发挥 T 型三电平逆变器的优势,使其拓扑损耗在允许最大电流范围内比两电平拓扑损耗小,需设置一定大小的开关频率。 经计算,在最大电流幅值(I \= 21. 5 A)、单位功率因数(φ\= 0)和调制系数 m \= 0. 866 时,在 6\. 8 kHz 开关频率处,两种拓扑损耗相等;开关频率大于6\. 8 kHz时,T 型三电平拓扑具有更小的损耗。

5. 结语

本文对比研究了两电平和T型三电平逆变器拓扑损耗。 通过器件特征参数,建立一种同时考虑工作电压、驱动电阻和结温的简单曲线拟合方法,推导出三次谐波注入调制算法下两种拓扑的损耗计算模型,得出如下结论: 

(1)损耗模型与调制系数、电流、功率因数角和开关频率有关。 

(2)单位功率因数并网条件下,当开关频率大于 6\. 8 kHz 时,可使得 T 型三电平拓扑损耗在允许的全电流范围内比两电平拓扑损耗小。 又由于三电平拓扑具有更好的输出电能质量,可减少滤波器损耗,此时,T 型三电平并网逆变器具有更高的效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskWz6fHAw2uw5HVGOYIlqHzvATZVIZ04MKGpoufe57yfupQXWQmXPLicGp6FrMT9icBQCibf2hq7gq1Q/640?wx_fmt=png&from=appmsg)

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsktnmk8MN8XJa8NHeXjkz8ILnqiaiabsaGgdiaUxSazXzMI3qcrW6Wy7U4cZ7ibKDkiccZ1fvUicDz2N9RQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsktnmk8MN8XJa8NHeXjkz8ItLId8zqpJos4IMia2PBDvUSvia2o4X0HYlvKdoyUoLCvK4VO8bsbB3cw/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=17)![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsktnmk8MN8XJa8NHeXjkz8IbEgqKw0cRU4I17JSrkmjCMNDbeW4K5evEUknm4u1exbK2HqMs4KGnQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=18)