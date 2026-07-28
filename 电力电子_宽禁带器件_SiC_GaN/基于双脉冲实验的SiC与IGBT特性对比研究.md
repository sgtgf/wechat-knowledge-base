# 基于双脉冲实验的SiC与IGBT特性对比研究


> 原文地址: [https://mp.weixin.qq.com/s/-PUAGZC\_rrqCGqsxCgNcuA](https://mp.weixin.qq.com/s/-PUAGZC_rrqCGqsxCgNcuA)

文章来源：电力电子技术

作者：钟再敏，石不凡，黄熙（同济大学，汽车学院，上海201804）

摘要：SiC功率器件的应用要求对SiC半导体器件本身结构性能及工作特性等有系统认识和研究，其相关工作在国内才刚起步。通过搭建双脉冲实验平台，对SiC功率器件驱动工作特性进行实验研究，进行双脉冲测试，实现530Ａ大电流驱动关断实验。与IGBT模块的双脉冲测试结果对比，SiC功率器件比IGBT器件开关速度更快，开关损耗更小，续流管反向特性好，反向恢复电流更小。此外，针对SiC功率器件关断时的涌浪电压问题，采用纯Ｃ吸收电路可有效抑制涌浪电压，降低器件的关断损耗。

关键词：功率器件；双脉冲实验；涌浪电压

ｌ. 引言

整个半导体材料的发展经历了以Si和Ｇe为第１代半导体材料，以ＧaAS，ＡIAs等为第２代半导体材料,SiC作为第３代宽禁带半导体材料，具有禁带宽度大、热导率高、相对介电常数大、电子饱和漂移速度快、击穿场强大、熔点高、莫氏硬度大等特点，得到越来越多的应用。SiC功率器件具有反向漏电流小、开关频率高、阻断电压高、导通电阻小和工作温度高等特点，适用领域多。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gGabRRrfd7f4UL3qB0mMM33ibpjFov9KyicUs7H4u32gkxrqscDBpg2wQ/640?wx_fmt=png&from=appmsg)

在此针对SiC功率模块，利用双脉冲实验，对其开关特性、损耗与IGBT模块进行对比，同时提出针对SiC功率器件驱动涌浪电压的抑制方法。

２. 双脉冲实验

双脉冲实验是对功率器件及驱动电路性能评估的重要手段，通过双脉冲测试对SiC功率器件进行测试。同时，对一款车用IGBT模块进行测试，从而对这两款基于不同材料的功率器件的性能进行分析比较。在测试中检验下述要求和功能：①对比SC功率模块和IGBT模块的性能特点（开关特性及二极管反向恢复特性）；②对比并评估SiC功率模块和IGBT模块在开关过程中的损耗；③评价SiC模块工作时（换流）电压尖峰、二极管反向恢复行为等是否得当，以及整个系统杂散电感的情况。双脉冲测试电路如图１所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gmmHxkibRiaaH5OLbN79YPptDJCTfPlvfKAW0fn6ibvasjd2xTY9RLw0VA/640?wx_fmt=png&from=appmsg)

系统的工作过程如下：将上管进行负压关断，并对下管的栅源极施加两个脉冲信号。在第一次开通时间T1内，被测的SiC功率模块饱和导通，母线电压加在与上管并联的电感Lpluse上，电感上的电流线性增大，表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723geVdF9kBME9fHyQdsarB1w0BYnEPUvk63HQuEtW1WDJPypF6nKPJ3Dw/640?wx_fmt=png&from=appmsg)

式中：Udc为母线电压。

在T2内，下管关断，电感上的电流通过上管并联的续流二极管（图中的回路）进行续流，续流时间很短，二极管续流损耗小，电流值变化小。在T３内，下管再次开通，上管续流二极管发生反向恢复现象，在该时间内电感电流在原续流电流基础上继续线性增大，在脉冲T3结束时关断的du/dt及di/dt最大，此时加在下管漏源极之间的电压尖峰也最大。

图１上标记出示波器测量点的位置，在双脉冲实验中，测试者关注的是下管栅极驱动电压、下管漏源极电压以及下管漏极电流的波形图。同样，通过双脉冲实验可以对二极管的安全工作风险点进行判断，对二极管的反向恢复行为进行测试，将电流探头移到图２所示的位置即可测得。通过图２测试方法研究SiC器件并联的SiC-SBD与硅基快恢复二极管的特性差异，对二次开通时上管SiC-SBD反向恢复行为波形进行测试，并与IGBT的硅基快恢复二极管测试结果进行对比。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723g8JE4UrPfxHgkznCB0u8sFWHuhjQvETJ6e7MF0M8TLKrWUic5zdLwo4g/640?wx_fmt=png&from=appmsg)

  

双脉冲测试平台用到的设备及用途如下：高压可调线性电源为600V/2.6A，用于外部供电；罗氏电流探头为30A-300A，用于测量漏源极电流；高压差分隔离探头为700V PEAK MAX用于测量栅源极和漏源极电压；空心电感为24uH，可以使电流线性增大，续流；示波器为４通道输入200MS.Ｓ-1，用于满足100MHZ以上带宽，测出高频信号变化；复合母排用于将高压接入SiC模块；薄膜电容为450uH，用于释放瞬时电流。

基于双脉冲测试对SiC驱动板的极限驱动能力进行测试，波形如图３所示（探头比例原因实际电流为图中５倍）。此时二次开启电流为250A，二次关断时模块电流约530Ａ，关断电流为SiC功率器件额定最大工作电流的２倍左右，设计的驱动电路是安全可靠的。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gtuibPUgD1LyohzjAM6kux8qllOia1V8QLwHkNKbtI7a1I9RoPJmUzwog/640?wx_fmt=png&from=appmsg)

３. SiC功率器件与IGBT开关特性对比研究

3.1 二次开通过程对比研究

测试条件为300V的母线电压，且两个脉冲的开关间隔均为15us，通过改变不同栅极开关电阻对两类器件进行特性对比。对于IGBT模块及SiC功率器件，开通过程均是驱动芯片通过隔离DC/DC电源对器件栅极电容充电的过程。从电压及电流波形分析比较SiC器件及IGBT模块在二次开通时的性能区别。

首先分析二次开启时栅极驱动电压波形的影响因素，图４为SiC功率器件在1R和2.7R栅极开启电阻，170A二次开启电流的栅极电压波形图。可见，由于开启电阻越小开启速度越快，开启时栅极的du/dt及di/dt更大，1R栅极电阻开启时栅极驱动电压振荡比2.7R更大。在器件打开瞬间，栅极电压会产生一个凹坑（图中圈出来的位置），这主要是二次开通时上管并联的二极管换流产生的电流突变，由于栅极电容路径对栅极电压造成的影响，需要在驱动板上加入电阻释放能量以避免对系统工作的干扰。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gniauia9gAXBR7D7tnnhGPHicziajT1nryZmtCR9ksMibHGMYOEP30uQQvRQ/640?wx_fmt=png&from=appmsg)

 图５为2.7R栅极开启电阻，SiC功率器件和IGBT器件二次开启栅极电压波形图，可见，SiC功率器件开启速度比IGBT模块快很多，在2.7R漏极电流170Ａ情况下开启，SiC功率器件仅用1.2us，而同等情况下IGBT器件需要4-5us，这主要是由于SiC功率器件的等效开启电荷量比IGBT器件小很多，IGBT器件开启时在米勒平台对米勒电容充电需要较长时间。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gw1FWrBsQ5QWEh68fcRx7xNmOvTanTaVrkODyHIiciaUibVNN64AaiciawTQ/640?wx_fmt=png&from=appmsg)

  

对SiC功率器件及IGBT器件在二次开启时的漏极电流特性进行研究。图6a为两种器件在2.7R栅极开启电阻下，以第２次脉冲开启时刻为起始点，在Id＝170A电流下开启的电流波形图。可知，相同起始时刻下，SiC功率器件在相同电流下完全导通的时间会比JGBT器件缩短近300ns。同时，SiC功率器件开启时的电流尖峰更小，可间接得出SiC器件二极管的反向恢复特性比IGBT模块上硅基快恢复二极管特性更好。对二次开启时的SiC模块电压特性进行研究。在2.7R开启电阻，Id=170A开启电流下，SiC功率器件二次开启的电压波形如图6ｂ所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gFsKKxHYsuiaWpdJQEhR7V9kPyWrB3OIr1LN2wnkaULIKTawC2UCRZug/640?wx_fmt=png&from=appmsg)

可知，在二次开启时，下管的Uds可测得一个电压缺口（图中ΔUds），这是由于在下管电流开始增长时，主路杂散电感上感应的电压方向与母线电压方向相反，可抵消一部分母线电压。

通过这个缺口电压以及图6b电流变化率，可知，ΔUds表不为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gj21XTBQg2IJmrVsqeDbzVdoEn0cQoz9wwNibPRicfUjbXjibeMzSdAib4Q/640?wx_fmt=png&from=appmsg)

式中：ΔUds为漏源极下降的电压值；Ls为主路上的杂散电感值；id为漏源极电流瞬时值。

由式（２）可得主路上Ls＝40nH。

3.2  二次关断过程对比研究

图７为SiC功率器件及IGBT器件在300V关断电压、335A关断电流下采用1R关断电阻的栅极、门极波形，可见，IGBT器件关断速度比SiC器件慢很多，主要原因是SiC器件关断时等效米勒电容比IGBT器件小很多，米勒平台时间更短，但更快的关断速度使寄生参数造成栅极驱动的振荡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gSTgzEdUl4DxiccYbStntLYbSxCnpOjVjjypVjSsm8pSgTIIbliaoQyaw/640?wx_fmt=png&from=appmsg)

图８为SiC功率器件及IGBT器件在300V关断电压335A关断电流2.7R关断电阻下漏源极、集射极电压波形。可知，相同关断电阻下SiC功率器件关断速度快会快很多，但电压的涌浪也会更高，SiC功率器件下在关断时漏源极电压会产生高频振荡（关断已经结束），这是漏源极电压在上升到最大值后，开关回路中寄生电感与寄生电容产生谐振引发的振荡。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723grJsBgCOdtzapDZvkMqkOFrzIUZzDx7YsMLZHjBuKDicVjURLGnDkE6w/640?wx_fmt=png&from=appmsg)

图9为SiC功率器件及IGBT器件在300V关断电压、335A关断电流、2.7R关断电阻下关断的漏极电流波形图。可以发现，SiC功率器件关断速度比IGBT器件快，335A电流在100ns左右就可完全关断，而IGBT器件需要500ns左右，这是由于IGBT模块关断的di/dt比SiC器件大，同时IGBT器件关断时具有拖尾电流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gwfS1b4fHGnibSJr68Dlia4QRjoGf4iaiaBQW7JUicAktBdMTPXJmphvUD9A/640?wx_fmt=png&from=appmsg)

3.3 功率器件损耗对比研究

半导体功率器件上的损耗主要分为通态损耗和开关损耗。在相同导通电流下，通态损耗主要与半导体器件的导通压降相关（与功率半导体Rdson密切相关），SiC功率器件由于材料特性（物理参数）,在相同规格下的导通电阻比IGBT的导通电阻要小，故SiC功率器件的导通压降比同等级别的IGBT模块导通压降小，通态损耗更低。

开关损耗主要与器件本身以及栅极驱动电阻相关，开关损耗分为开通时的导通损耗以及关断时的截止损耗，可以通过双脉冲测试从示波器中计算得出，表示为:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723g9qzjPtlVYL4Oj19MZ2UfuB4JNSnwzPXIYyk5IseZ5ictQF8GbFQFdow/640?wx_fmt=png&from=appmsg)

式中：Loss为开关损耗，单位为J;\[t1,t2\]为模块开通或者关断的区间。

根据式（3），可计算出SiC功率器件及IGBT器件在不同栅极开启电阻下的导通损耗（300V母线电压、170A电流下开启），参数如下：开启电阻为0.2R时，SiC功率器件为0.31ｍｊ；开启电阻为1R时，SiC功率器件为1.43ｍｊ；开启电阻为1.95Ｒ时，SiC功率器件为2.26ｍＪ，IGBT器件为7.98ｍｊ（接近门极开启电阻极限值）；开启电阻为2.7R时，SiC功率器件为3.4ｍｊ，IGBT器件为10.78ｍｊ。可知，在相同的开启电阻及开启条件下，SiC功率器件的开通损耗比IGBT模块小很多。同时，与SiC功率器件相比，IGBT器件不能选取过小的开启电阻，否则会造成过高的du/dt，从而引发IGBT器件的擎住效应，且过大的di/dt容易击穿IGBT器件。但SiC器件可以采取很小的开启电阻（甚至0.2Ｒ开启电阻）而不会发生雪崩破坏（短时可耐更大的du/dt和di/dt）。

SiC功率器件及IGBT器件在不同栅极关断电阻下的关断损耗（300V母线电压、335Ａ电流下关断）情况如下：关断电阻为0.2R，SiC功率器件损耗为6.22ｍｊ；关断电阻为1R，SiC功率器件损耗为7.39ｍｊ，IGBT器件损耗为19.78ｍｊ；关断电阻为1.95R，SiC功率器件损耗为7.95ｍｊ，IGBT器件损耗为21.69ｍｊ；关断电阻为2.55R，SiC功率器件损耗为8.41ｍｊ，IGBT器件为损耗23.09ｍｊ；关断电阻为2.7R，SiC功率器件损耗为8.63ｍｊ，IGBT器件损耗为23.77ｍｊ。可知，SiC功率器件的关断损耗比IGBT器件小很多，是因为SiC功率器件在关断时没有拖尾电流，且关断速度比IGBT快很多。

同时，SiC功率器件可以使用比IGBT器件更小的开启和关断电阻，从而可以进一步降低损耗。

４. SiC功率器件驱动涌浪电压抑制方法

虽然同级别的SiC模块相比IGBT模块内部杂散电感要小得多，但SiC功率模块开关速度快，开关时电流变化率更大，在漏源极产生很大的涌浪电压，甚至会超过额定电压从而击穿功率模块，因此，对SiC功率模块在工作中采取一定的电压涌浪的抑制措施是必须的。

SiC涌浪电压幅值表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gV185qHDDTU1bm3VRhXpl5oQIiaINYwotemZ1P4g2wDibqEezZUwaAhCg/640?wx_fmt=png&from=appmsg)

通过减小系统主路上的杂散电感值Ls可以降低涌浪电压，由于SiC器件及支撑电容一旦选定，其自身的杂散电感也会固定，降低主路上的杂散电感则只能通过降低直流母线上的杂散电感的方法实现。此外，增加外部缓冲电路（吸收电路）是另外一种可行的方法，如图１０所示。常见无源缓冲电路基本类型有纯Ｃ吸收电路、RC吸收电路、RCD吸收电路。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gYCT73nT0Ya8Mc7tSmIXStAUtvcNeZXF1lUqKGiaDW1m97dDotYC5Micg/640?wx_fmt=png&from=appmsg)

外部缓冲电路主要吸收母排上杂散电感能量叠加而成的涌浪电压，以RCD吸收电路为例，工作过程如图１１所示。当V1和V4关断时，主路上Ls的能量通过RCD吸收电路进行旁路，Ls通过二极管VDs给电容Cs充电，然后Cs上的能量通过Rs消耗掉，从而避免V1和V4关断时电流突变加在开关管上的电压尖峰。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723gZxSGlZMoEbw5kZZ49bs5adaLy7hk4hucS8e0v4H29L1LBcMmic8y00g/640?wx_fmt=png&from=appmsg)

纯C吸收电路一般采用高频特性较好的聚丙烯电容或其他寄生电感较小的电容器，以提高其对主路上寄生电感引起的电压涌浪的吸收效果。RCD吸收电路上采用高耐压的快恢复二极管（反向恢复快），通过二极管特性抑制电压涌浪。在双脉冲测试平台上分别采用纯Ｃ吸收电路和RCD吸收电路对缓冲电路抑制效果进行测试，测试条件参数如下：主路为300V母线电压，栅极关断电阻为１Ｒ，未加吸收电路；主路为300V母线电压，栅极关断电阻为１Ｒ，外部吸收电路为1.2uF，纯Ｃ吸收电路；主路为300V母线电压，栅极关断电阻为１Ｒ，外部吸收电路为10R，1.2uF的RCD吸收电路。测试结果如图１２所示，将加入缓冲电路前后的测试结果进行对比，可以发现，未加入吸收电路时以１Ｒ栅极电阻关断，涌浪电压为600V，纯Ｃ吸收电路可抑制59Ｖ涌浪电压，RCD吸收电路可抑制42V涌浪电压。综上所述，加入缓冲电路能有效地抑制电压涌浪，改善关断时的电压谐振，纯Ｃ吸收电路的效果更好（寄生参数最小）。通过计算，1R栅极电阻下，外加纯Ｃ吸收电路可降低SiC功率器件的关断损耗0.3ｍｊ，但增加器件的开启损耗0.1ｍｊ，总体上降低了系统的开关损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLske4tic9Q6T7gckPb8OK723g7GIibP9N9BSUc3kM0ynOhciajI6fd6qDAMnMRMBMKibaV4uBJYavMmgtg/640?wx_fmt=png&from=appmsg)

  

５. 结论

双脉冲测试是检测功能功率模块以及驱动电路性能的重要手段。所述方法实现了双脉冲测试平台的搭建，采用CPLD进行双脉冲信号触发，对设计的驱动电路以及SiC功率器件进行了双脉冲测试，并与某公司一款耐压值相同的IGBT模块的双脉冲测试结果进行对比分析。对比结果显示，SiC功率器件与IGBT器件相比，开关响应更快，损耗约是IGBT的1/3。同时，SiC功率器件可以选用更低的栅极开关电阻，大幅降低功率器件的开关损耗。针对SiC功率器件关断时涌浪电压过高的问题，通过分析涌浪电压的抑制措施，实验验证无源纯Ｃ及RCD吸收电路可有效抑制涌浪电压，降低开关损耗。总而言之，相比较于IGBT模块，SiC功率模块在高频幵关及大功率逆变应用领域中有更好的开关性能优势。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)