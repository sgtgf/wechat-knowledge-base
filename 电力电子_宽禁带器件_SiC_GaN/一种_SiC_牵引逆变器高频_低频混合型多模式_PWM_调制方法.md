# 一种 SiC 牵引逆变器高频-低频混合型多模式 PWM 调制方法

原创 胡 亮，付翔宇 SiC碳化硅MOS管及功率模块的应用 2024-12-31 03:39 广东

> 原文地址: [https://mp.weixin.qq.com/s/Gy95Ig2zWOlCY27fHthG8A](https://mp.weixin.qq.com/s/Gy95Ig2zWOlCY27fHthG8A)

文章来源：控制与信息技术

作者：胡 亮，付翔宇，吕永灿，冯 凌，胡 冬（中车株洲电力机车研究所有限公司，湖南 株洲 412001）

摘 要：为提升牵引系统效率、改善电机温升和噪声性能，文章从逆变器开关频率优化、调制策略选择、电机控制算法适配等多个维度开展高频 SiC 牵引逆变系统控制方法的研究，提出了一种适用于 SiC 牵引逆变器的高频\-低频混合型多模式 PWM 调制方法。其在 30% 额定转速以下的中低速段，充分利用 SiC 的高频特性，并基于系统损耗优化原则对逆变器额定开关频率进行优化设计；在 30% 额定转速及以上的中高速段，采取优化调制，实现电机电流的谐波抑制，使电机电压利用率达到 97%；另外，为了适配新型 PWM 控制方法，提出了一种牵引电机多模态定子磁链轨迹闭环控制方法。最后，对所提出的 PWM 调制方法与传统低频 PWM 调制方法进行了对比研究，结果显示，采用所提算法，电机电流总谐波失真率（THD）最大降低了 9.31%，牵引系统整体损耗最大降低 10.2%，电机温升最高降低 31 K，最大电机运行噪声抑制可达 10 dB，证明了所提 PWM调制方法的有效性。

关键词：SiC；PWM 调制；优化调制；电机损耗；电机噪声；定子磁链轨迹控制

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUI8Cd2dW8icnosyjYv7TR25arKzt8WKqCJ1VKkickrB4PCicEyWLicbYibURg/640?wx_fmt=png&from=appmsg)

0\. 引言

碳化硅（SiC）器件作为新一代功率器件，具有比硅基器件更高的开关频率、更低的损耗、更高的工作温度和功率密度，能够有效提高牵引系统效率、减小变流器的体积并减轻重量，符合轨道交通列车的绿色化、轻量化和小型化的发展趋势，有助于推动轨道交通牵引系统向高效、低碳、可靠、智能方向发展。

当前，SiC 器件已经逐步开始在轨道交通领域推广应用，然而关于 SiC 牵引逆变器的 PWM 调制策略的文献很少。文献［3］介绍了SiC牵引逆变器在轻轨车辆中的应用。文献［4］详细介绍了一种用于新干线高速列车的新型SiC牵引系统。文献［5］简要描述了一种适用于SiC牵引系统的PWM调制方法，并且分析了所提方法与低频 IGBT 型牵引逆变器的 PWM 调制方法在电机损耗指标方面的实验数据，但缺乏针对牵引传动系统多工况全速域运行的研究。

本文在文献［5］的研究基础上，从PWM调制模式优化设计、电机控制算法适配等多个维度进行高频牵引系统PWM调制方法的研究，提出了一种适用于SiC牵引逆变器的高频\-低频混合型多模式 PWM 调制方法。通过进行电机电流谐波、电机损耗及电机运行温升和噪声等方面实验，对所提出的 PWM 调制方法与传统低频 PWM 调制方法进行比较研究。最后通过实验证明，本文所提 PWM 控制方法可显著改善电机全速域牵引运行性能。

1\. SiC逆变器PWM调制方法

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIOBTNpe0cHLzWR1jpWyMibCVEk1yVZyLPWFEm2mUaHX6LFZrtNvcFibgw/640?wx_fmt=png&from=appmsg)

SiC牵引逆变器\-电机系统主要由中间支撑回路、三相逆变器模块及牵引电机3部分构成（图1）。其中，逆变器模块主要采用由 SiC-MOSFET 和 SiC-SBD 组成的SiC基器件，其较Si基IGBT器件具有开关速度更快、损耗更小的特点。文献［5］对比分析研究了在电流为750 A工况下，基于SiC 器件的逆变器额定开关频率可达2 kHz，而基于Si基IGBT的逆变器的开关频率为500 Hz，此时基于SiC器件的逆变器损耗仍显著小于Si基器件逆变器的。SiC器件的优异特性使得其在大功率应用领域，如电机驱动系统，获得了越来越多的关注，基于SiC牵引逆变器的调制方法也面临变革和挑战。

1.1 传统PWM调制方法

对于传统IGBT型牵引逆变器，受IGBT器件开关损耗及散热条件的限制，功率器件的最大开关频率通常不超过500 Hz，因此其PWM调制一般采用“低频异步调制+同步调制+方波调制”的多模式PWM组合方式，本文称之为传统低开关频率PWM调制方法（图2）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIRRJrF0ybI5oYIfxRoDF2HSET17FnibO0dKdZtlddzDmdRQx9ibHIicDxQ/640?wx_fmt=png&from=appmsg)

1.2 适用于SiC逆变器的PWM调制方法

要实现SiC牵引逆变器\-电机系统优化匹配，提升牵引系统的效率、改善温升性能和降低噪声，一般可从调制方式、逆变器额定开关频率和牵引电机闭环控制策略3个方面进行优化设计。

基于上述原则，针对SiC高频牵引逆变器应用，本文从 PWM 调制模式设计、电机控制算法适配等维度进行高频SiC牵引系统PWM控制方法研究，提出了一种适用于SiC牵引逆变器的高频\-低频混合型多模式PWM调制方法，如图3所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUISibp8SmAGoDPicAbrPTb3WEvY4C5ub7f7d8BEDib3DLyyHtD6gmjtTOjg/640?wx_fmt=png&from=appmsg)

该方法根据电机运行3个速度区域进行特定设计：

（1）低于30%额定转速的中低速区域。采用高频异步调制模式，充分利用SiC高频特性实现高载波比控制并降低电流谐波。

（2）30% 额定转速~50% 额定转速的中高速衔接区 域 。采 用 谐 波 电 流 最 小 PWM（current harmonic minimum pulse width modulation，CHMPWM）优化同步调制，以抑制电流谐波分量。

（3）50%额定转速以上的高速区域。采用优化3脉波调制模式代替传统方波调制模式，以抑制低次电流谐波，从而获得更好的电流品质。

1.2.1 调制策略的优化选择

基于前文所述，在牵引电机中低速运行区域，本文提出了采用高频空间矢量脉宽调制（SVPWM）方法，其较传统的正弦波调制（SPWM）具有更好的谐波抑制性能、更高的电压利用率，已被广泛运用到电传动控制领域。针对高速区域及中高速衔接区域，为充分抑制谐波和降低电机损耗，本文提出采用电流谐波优化CHMPWM同步调制方法，图4示出优化脉宽调制典型的相电压波形。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIOhG2Iqj4UMcNGNBpK0P5PicWK1IGHwMz0ABD7xcwiaTUCdPemsgoBCpw/640?wx_fmt=png&from=appmsg)

在Udc、ωe及电机参数确定时，电流谐波优化PWM的优化问题求解等效方程如式（1）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIdbm1wJiaH2MTTs9KooXw7TPmK7VPo73yPfxxf6SrNAsZibyknjd2oHRw/640?wx_fmt=png&from=appmsg)

越小，谐波性能越好；± ——调制波类型识别符，其中“+”对应图4中A类调制波形，输出波形正半周期以高电平开始，“\-”对应图4中B类调制波形。

图5示出CHMPWM-5脉波调制、CHMPWM-3脉波调制及典型同步BSS-5（SVPWM-5）脉波调制模式下的谐波优化系数对比情况。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIicxPhficOEMHKGloSmVOcQN218CRyYQDvLUDHJpcIFL99pBDN8PwQ2NA/640?wx_fmt=png&from=appmsg)

由图5可知，采用CHMPWM-5脉波调制替代传统SVPWM-5脉波调制，可以达到更佳的谐波抑制效果。对于传统IGBT型牵引逆变器\-电机系统，牵引电机设计时，高速区域电压一般选择方波调制，而传统方波调制方法存在 5 次和 7 次等低次谐波含量较大的问题。为进一步提升高速区域的谐波抑制性能、实现牵引逆变器\-电机间更好的性能优化匹配，本文提出采用电流谐波最小的优化 3 脉波调制方式替代传统的低频牵引逆变器的方波调制运行模式，以获得更佳的谐波抑制效果。由图 6（a）可知，采用优化后的 3 脉波调制方式的电机总谐波畸变率（THD）明显低于方波调制的。图6（b）对比分析了优化3脉波调制和方波调制后的低次谐波含量分布情况，可以看出，采用优化3脉波调制方式后，5次和7次谐波得到了明显的抑制。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIEHKJ8ypo2S5ficPqiasiaDLxL9c5BBE6J050YS2VibvheqjXynaWAc3rRw/640?wx_fmt=png&from=appmsg)

1.2.2 逆变器开关频率优化设计考虑

虽然SiC器件最大开关频率可达2 kHz以上，但SiC牵引逆变器的额定开关频率并非越高越好。文献［6］研究表明，电机损耗随着频率增加而减小，但逆变器损耗随频率提升而增加，更大程度地提高开关频率有可能会导致逆变器损耗大幅增加，抵消了提高开关频率所带来的优势，反而无助于系统的优化匹配。另外，更大程度的频率提高造成的额外附加损耗也会带来逆变器散热器和模块的尺寸及成本等多方面增加。因此，SiC的额定开关频率的选取涉及逆变器设计、控制模式及系统性能等多方面的综合优化匹配。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIxGdEqF3rxmfMUOw7oTmwmej5Sf5TtXbCvhba2ibaH3tRgx99PHp0ibww/640?wx_fmt=png&from=appmsg)

本文基于牵引系统损耗优化的频率设计分析方法（图7），以国内典型城轨牵引电机（其中间直流电压为1500 V）为例，通过理论计算，研究了在不同开关频率下电机损耗、逆变器损耗及系统总损耗的变化趋势，如图8所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIBBh3yPRxicpcI8p5JBGp8691ZviaNRBnGaVdyefn87DibK99DWH3KLP9w/640?wx_fmt=png&from=appmsg)

由图 8 所示数据可知，开关频率由500 Hz 提升至2kHz，电机损耗降低了 14.9%，逆变器损耗增大了 63.9%，系统损耗降低了 10.2%，开关频率的提高对系统损耗的降低效果显著；但随着开关频率进一步提高（2 kHz→3 kHz），其对电机损耗的抑制效果相对变缓，而逆变器损耗则仍增加 40% 以上，开关频率为 3 kHz 时，逆变器\-电机系统总损耗较 2 kHz时的还增加了 1.1%。因此，基于系统损耗最优准则，开关频率为 2 kHz左右时，城轨牵引电机损耗与逆变器损耗可处于较为平衡的状态。以 2 kHz 作为最优开关频率的搜索起点，再通过多次实验，确定最佳的系统开关频率。

本文基于上述系统损耗分析结果以及文献［5］实验研究成果，将拟开展实验研究的SiC牵引逆变器的额定开关频率定在1.5 kHz~2.5 kHz范围内。

1.2.3 电机控制算法优化设计

针对所提出的 PWM 调制方法，本文基于定子磁场定向理论，提出了一种适用于SiC牵引逆变器的牵引电机多模态定子磁链轨迹闭环控制策略，如图9所示。图中，ωs为电机基波频率，us\*为指令电压，Udc为采样中间直流回路电压。在高频异步调制模式下，电机采用圆形定子磁链控制；在同步PWM调制模式下，电机采用多边形定子磁链轨迹跟踪控制（stator flux trajectory tracking control，SFTTC）。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIjcDibaR1NicgJG11UgrAdwBnM9MjiccibhxQj91H3zkYE8xlaFYYtXALxw/640?wx_fmt=png&from=appmsg)

在不同模式切换时，通过对定子磁链进行特殊处理，实现了高频PWM与低频优化PWM模式切换过程中电机电流的平滑过渡处理。如图10所示，转速为1690 r/min 时，将高频异步调制模式切换为同步CHMPWM-5脉冲模式；随着速度的提升，当电机电压逼近恒压点时，将CHMPWM-5模式切换为CHMPWM-3最佳脉冲模式，整个过程中电机电流、转矩过渡平稳。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUII9AdibKRTGfHwLibUDBeWH4DT9v5BOook1jRicKpmO9lXvICyxy2ekR5Q/640?wx_fmt=png&from=appmsg)

2\. 实验验证

为充分对比分析所提出的高频\-低频混合多模式PWM调制和传统低频PWM调制方法的系统性能，使用城市轨道交通（简称“城轨”）车辆控制平台从电机电流谐波抑制、电机温升抑制、电机噪声抑制、电机效率提升及系统效率提升等方面开展相关实验研究。被试牵引电机为 190 kW 城轨车辆用牵引电机，其参数如表1所示；1000 kVA SiC牵引逆变器的相关参数如表2所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIGowSKhDHHNSm2jUbgSyymnA2q0tFNgaKgIyOBbSxMtxODfYUB3g91g/640?wx_fmt=png&from=appmsg)

2.1 电机电流谐波性能

图 11 示出不同速度点下实测电机电流总谐波畸变率THD。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUI4t4l69fur2QeezUo1Mia5vs0a8CXElbJqx1LSia5zoB6HNYiak8kZ5A1g/640?wx_fmt=png&from=appmsg)

从图11可知，与传统的PWM调制相比，本文所提多模式 PWM 调制方法在中低速范围内，频率的提高会带来电机电流THD显著降低，SiC逆变器高频抑制谐波优势得到充分发挥，更有利于降低电机损耗；而在高速范围内，使用 CHMPWM-3 脉波调制代替方波调制，可在一定程度上有效降低电流谐波含量。

2.2 电机温升性能

在中低速范围内，由 SiC 牵引逆变器驱动的电机定子绕组温升最终稳定值比硅基牵引逆变器（500 Hz）驱动的低 31 K，如图 12（a）所示。而在高速范围内，由于采用了所提出的优化 3 脉波调制方案代替方波调制，可以较好地降低电机损耗，电机定子绕组温升也降低了8 K，如图12（b）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUI0PHdEnVo50DmtdLrYjMNd59SFhFJzPLCSBOLRKs5dKlAVH2AZD8cbA/640?wx_fmt=png&from=appmsg)

2.3 电机噪声性能

电机加速噪声实验对比结果如图 13 所示，可以看出：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIiaUFO04KYSWDibsMeFxHFibJT21K4h2gnOS9p3cyc7DzkwscWG1aBBwBg/640?wx_fmt=png&from=appmsg)

（1）在中低速区，由于SiC逆变器的开关频率提升较 IGBT 逆变器的明显，电机运行噪声抑制效果显著（最大噪声抑制可达10 dB），中低速采取高频控制有利于提升电机噪声抑制效果，改善电机运行品质。

（2）在高速区，两种PWM控制模式下电机噪声幅值表现趋势基本一致。这是因为电机噪声主要取决于电机旋转机械和风扇带来的气动噪声，电磁噪声已非主导因素，气动噪声主导了不同 PWM 调制方法的差异性。

2.4 牵引电机及系统效率

如图14所示，本文提出的适用于SiC牵引逆变器的高频\-低频混合型多模式 PWM 控制方法可有效提升电机和牵引系统效率：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnamraqxOUELxYbtpIkpqUIknguYnEaygeNdibg4X2UUSvlY6egRbNea3tAppyG73TNiafbnWZhtxicA/640?wx_fmt=png&from=appmsg)

（1）在中低速区内，电机效率较传统低频IGBT型牵引逆变器（500 Hz）的最大提升可达3%~4%，系统效率提升达1%~2%；

（2）在高速区内，3 脉波调制较传统方波调制在电机效率优化方面稍显优势，这得益于优化3脉波调制方式更优异的低次谐波抑制能力，但系统效率方面，方波调制和3脉波调制方式的系统效率基本相当。

3\. 结语

为探索高效率 SiC 牵引逆变系统高频调制方法，本文从 PWM 控制模式设计、电机控制算法适配等方面进行高频 PWM 调制技术研究，提出了一种适用于SiC牵引逆变器的高频\-低频混合型PWM调制方法。通过实验对所提出的 PWM 调制方法与传统的 PWM调制方法进行研究，并从电机的电流谐波、温升、运行噪声抑制、效率和系统效率等方面进行了实验对比分析。结果表明，与传统的PWM 调制方式相比，采用新的PWM 调制方法能显著提高电机及系统的运行性能。考虑到牵引系统面临的工况复杂，后续将搭建考虑PWM特性的全速域逆变器和电机损耗模型并对所提算法进行线路全工况验证。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)