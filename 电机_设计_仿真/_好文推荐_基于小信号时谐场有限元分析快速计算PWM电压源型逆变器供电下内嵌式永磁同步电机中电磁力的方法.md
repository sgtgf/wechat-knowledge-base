# 【好文推荐】基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法

原创 CES TEMS编辑部 CES电机与系统学报 2022-04-13 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/mcfwNevfE3FPu-Wdk3MyNg](https://mp.weixin.qq.com/s/mcfwNevfE3FPu-Wdk3MyNg)

  

中国电工技术学会活动专区

  

CES Conference

[![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_000_6d84699ae65f.jpg)](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247484320&idx=1&sn=317f97f4e638742ef39e665cfbc8acc6&chksm=cea83259f9dfbb4f3cae797b59494e351d9bf97293d8e202c46188472e83bc5bfbaf07d18f5e&scene=21#wechat_redirect)

[![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_001_65df43700fc8.png)](https://mp.weixin.qq.com/s?__biz=MzkyMTE3ODA1Mw==&mid=2247483955&idx=1&sn=25112f0609217c6d0d1e5cfba5d171e7&scene=21#wechat_redirect)

[![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_002_3d39cc15b67b.png)](https://mp.weixin.qq.com/s?__biz=MzA4MjY0NjcyOQ==&mid=2651238356&idx=1&sn=42f1d57b0b697a0cb157b424f7642869&scene=21#wechat_redirect)

  

  

  

  

  

**基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法**

**Fast Calculation of Electromagnetic Forces in IPMSMs Under PWM VSI Supply Based on Small-Signal Time-Harmonic Finite Element Method**

**作者：****朱洒，陆剑波，曾峰** 

**DOI: 10.30941/CESTEMS.2022.00010**

**https://ieeexplore.ieee.org/document/9745852**

  

  

  

01

**摘要**

  

  本文介绍了一种基于小信号时谐场有限元分析（Time-Harmonic Finite Element Analysis, THFEA）快速计算脉宽调制式（Pulse-Width Modulation, PWM）电压源型逆变器供电的内嵌式永磁同步电机(Interior Permanent Magnet Synchronous Machines,IPMSMs)中电磁力的新方法。在前期的研究中，小信号THFEA已被作者成功用于快速计算硅钢片和永磁体中的PWM谐波损耗\[1-5\]，而在本文中该方法被进一步拓展用于研究并建立高频谐波电压与对应气隙磁密之间的函数关系。基于该关系，实现以PWM电压频谱为输入，快速计算各次谐波电压引起的磁密频谱，进而应用叠加原理计算基波电流和所有高频谐波电压共同产生的磁密频谱，最后应用解析法将其转化为电磁力频谱。与传统以PWM电压源为输入的时步有限元法相比，本方法的计算相对误差小于3.1%，计算速度提升了24倍以上。

  

02

**背景**

  

    目前，IPMSM被广泛应用于电动汽车等各个工业领域。对IPMSM的电磁噪声和振动特性进行精准建模是实现其优化设计的前提，而这需要对IPMSM定子内表面的电磁力进行准确计算。由于IPMSM的非线性较强，有限元法是进行电磁力精确计算的常用方法，但其主要缺点是耗时过长。尤其是在进行PWM谐波效应计算时，如果使用传统瞬态时步有限元分析（Time-steppingFinite Element Analysis, TSFEA），则需用非常小的时间步长来分辨高频谐波，导致该方法耗时过长。为此，本文提出了基于冻结增量张量磁阻率法（Frozen Differential Reluctivity Tensor Method，FDRTM）构建的永磁电机小信号（局部线性化）模型，采用线性THFEA研究并建立谐波电压与气隙高频谐波磁密之间关系，进而实现直接以PWM谐波电压频谱为输入，快速计算高频谐波磁密与边带电磁力。本方法的流程如图1所示\[6\]。

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_003_3d43a6fb1459.png)

图1  PWM逆变器供电下IPMSM电磁力快速算法流程图\[6\]

  

03

**创新点与优势**

1.  基于PWM谐波电流较小不足以影响硅钢片饱和状态的事实，提出基于FDRTM构建的局部线性小信号模型研究谐波电压与气隙磁密关系，解决了IPMSM非线性较强，难以采用解析法和叠加原理计算的问题。
    
2.  本方法以线性场\-路耦合THFEA取代瞬态时步有限元法用于计算高频电压谐波与高频磁密关系，计算速度更快。
    
3.  本方法实现以PWM谐波电压频谱为输入直接计算气隙高频磁密和电磁力，无需计算PWM谐波电流（PWM谐波电流本身难以精确快速计算\[7\]），更适合用于PWM电压源型逆变器供电的实际工况。
    
4.  通过时谐场有限元计算可精确计算气隙高频磁密分布，可充分计及饱和和齿槽效应，相比于传统解析法精度更高。
    

  

04

**关键技术**

  

-   高频气隙磁密重构法。将IPMSM一个极下的气隙划分为分别属于+_A_相带、\-_C_相带和+_B_相带的三个区域。充分利用电机的电磁与结构对称性，借鉴CE-FEA中场重构的思想，只需进行转子转过1/6基波电周期时的THFEA，即可根据结果重构出转子转过一个完整电周期时的气隙高频磁密变化。
    

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_004_70db5753b00d.png)

图2.一个极下计算气隙磁密的采样点所属区域划分\[6\]

-   建立谐波电压与谐波气隙磁密之间的线性映射关系。可用高频谐波磁密正比与谐波电压幅值，而反比于谐波电压频率的规律建立谐波磁密与谐波电压之间的映射关系：
    

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_005_b15eb33e9f09.jpg)

其中各参数意义详见全文。在忽略端部漏感和高频涡流反应的情况下，映射矩阵 **_χsd0_** 和 **_χsq0_**中的元素为常数；在考虑涡流反应影响时，则需进一步研究其随频率的变化规律。

-   复数高频磁密的2D FFT与时间阶次修正。当在一个基波电周期内采样点数为_Ns_时，进行2D FFT得到的高频磁密频谱的时间阶次，无论真实值多高，总是落在0到_Ns_\-1之间。因此，直接从 2D FFT 获得的磁密频谱虚进行修正后再叠加到总的磁密频谱。图3中给出了频率为 3_fc\-_2_fo_的高频谐波电压分量引起的磁密频谱修正过程，其中的技术细节参见原文。
    
    ![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_006_cc239c25f531.png)
    

图3\. 由频率为3_fc_\-2_fo_的高频谐波电压分量产生的谐波磁密频谱时间阶次修正示意图

05

**结果对比**  

图4中给出了传统瞬态TSFEA计算的2倍开关频率附近气隙电磁力频谱与所提小信号THFEA计算值对比，可以看出两者分布完全一致。表1中选取了不同时空阶次的电磁力频谱进行了对比，可以看出两者最大相对误差小于3.1%。表2中给出了两种方法的计算时间对比，可以看出所提方法在单一工况的计算速度提升了24倍。更为重要的是，在经过小信号THFEA分析建立起谐波电压与谐波磁密之间映射关系之后，再研究不同母线电压、开关频率所产生的PWM谐波电磁力频谱时，无需重复THFEA，即可直接通过不同的PWM谐波电压频谱快速计算对应的PWM谐波电磁力频谱。

本方法已经申请中国发明专利的保护\[6\]。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_007_d42628e1571a.png)

(a) 传统TSFEA         

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_008_3a056e7d3ab9.png)

(b) 所提小信号THFEA

图4 两种方法计算的2倍开关频率附近边带气隙电磁力密度频谱对比

表1\. 两种不同方法计算电磁力频谱定量对比  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_009_778a3cc06cf5.png)

表2. 两种不同方法计算时间对比

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_010_e3f52860881f.png)

  

**作者的相关文献**：

\[1\]  S. Zhu, H. Wang,J. Zhang, Z. Lu, and M. Cheng, “Fast calculation of carrier harmonic loss inpermanent magnet of IPMSM under PWM VSI supply over entire working range,” _IEEE__Trans_. _Energy_ _Convers_., vol. 34, no. 3, pp. 1581-1592,Sept. 2019.

\[2\] S. Zhu, J. Dong, Y. Li,and W. Hua, “Fast calculation of carrier harmonic iron losses caused by pulsewidth modulation in interior permanent magnet synchronous motors, _IET_ _Electr_._Power_ _Appl_., vol. 14, no. 7, Mar. 2020.

\[3\] S. Zhu and B. Shi, “Modelingof PWM-induced iron losses with frequency-domain methods and low-frequency parameters,” _IEEETrans_. _Ind_. _Electron_., vol. 69, no. 3, pp.2402–2413.

\[4\]  朱洒，一种永磁电机PWM谐波损耗的快速计算方法．中国发明专利，CN201911064620.0，授权，2020.

\[5\]  朱洒，一种快速计算永磁同步电机中永磁体高频涡流损耗的方法．中国发明专利，CN201811571344.2，授权，2020.

\[6\]  朱洒, PWM逆变器供电下永磁同步电机定子电磁激振力的快速计算方法.中国发明专利，CN202111285882.7，公开，2021.

\[7\] S. Zhu, W. Hua, and B.Shi, “Comparison of methods using different sources forcomputing PWM effects on permanent magnet machines considering eddy currentreaction,” _IEEE Trans. Magn_.,vol. 57, no. 6, pp. 1-4, Jun. 2021.

  

  

  

  

  

  

  

**引用本文**

  

  

  

  

  

  

S. Zhu, J. Lu and F. Zeng, "Fast Calculation of Electromagnetic Forces in IPMSMs Under PWM VSI Supply Based on Small-Signal Time-Harmonic Finite Element Method," in _CES Transactions on Electrical Machines and Systems_, vol. 6, no. 1, pp. 67-76, March 2022, doi: 10.30941/CESTEMS.2022.00010.

  

  

  

  

  

  

  

**本文作者**

  

  

  

  

  

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_011_75f4765314b0.jpg)

  **Sa Zhu** (Member, IEEE) received the B.Sc. and Ph.D. degrees in electrical engineeringfrom the School of ElectricalEngineering, Southeast University, Nanjing, China, in 2011 and 2017,respectively.

From 2013 to 2014, he went to Politecnicodi Torino for a one-year visiting study. Since2017, he has been a Lecturer with Hohai University, Nanjing. His current research interests include permanent magnet machines, losscalculation, and multiphysicsanalysis.

  Dr. Zhu holds theFirst Place in the 2011 IEEE Industry Applications Society Myron ZuckerUndergraduate Student Design Contest.

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_012_ba097f9abfe5.png)

 **JianboLu** received the B.E. degree in electricalengineering and automation from the School of Energy and ElectricalEngineering, Hohai University, Nanjing, China, in 2021. He is currently workingtoward the M.E. degree in electrical engineering with the College of Energy andElectrical Engineering, Hohai University.

His current research interests includepermanent magnet machines and finite element analysis.

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_013_6730156ba264.jpg)

  **Feng Zeng** received theB.E. degree in electrical engineering and automation from the School of Energyand Electrical Engineering, Hohai University, Nanjing, China, in 2020. He iscurrently working toward the M.E. degree in electrical engineering with theCollege of Energy and Electrical Engineering, Hohai University, Nanjing, China.

 His currentresearch interests include the optimization of permanent magnet machines andfinite element analysis.

  

****下载论文PDF版**，请点击左下角“阅读原文”，访问期刊网站。**

  

  

推荐阅读

[【专题征稿】High Performance Linear Machines and Drives](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247484305&idx=1&sn=0d265ab618a5e21f8a1cc0548e536bc2&chksm=cea83268f9dfbb7e67ba9de53bd849b0285d14699a8cfb7eca8a17cfdf7cfab6e2ff39f3f64f&scene=21#wechat_redirect)  

[【联合征稿】High Torque Performance Machine Systems](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247484336&idx=1&sn=4844f00ca18f8cf339d3125bc1f80c4c&chksm=cea83249f9dfbb5f48860e29ef207252ba12d2a5bd0ab6135599456446f595e7c96a2824d3ca&scene=21#wechat_redirect)  

[抢先看|CES TEMS 2022年第1期目次及摘要](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247484353&idx=1&sn=d92e4864c8bab66ffc18eaba8f381505&chksm=cea83238f9dfbb2ecab7c5c3fe1b4be30c2c6888ca725139f5c316f7e0337b5513d258d42cff&scene=21#wechat_redirect)  

[第十七届中国电工技术学会学术年会征文通知 (第一轮)](http://mp.weixin.qq.com/s?__biz=Mzg2ODYyNDUzNA==&mid=2247484320&idx=1&sn=317f97f4e638742ef39e665cfbc8acc6&chksm=cea83259f9dfbb4f3cae797b59494e351d9bf97293d8e202c46188472e83bc5bfbaf07d18f5e&scene=21#wechat_redirect)  

[关于开展2022年度中国电工技术学会优秀博士学位论文推荐与评选工作的通知](http://mp.weixin.qq.com/s?__biz=MzA4MjY0NjcyOQ==&mid=2651238971&idx=1&sn=6f99dda76d1bc9339bd97e3a5f5ffc2d&chksm=8470919db307188bb6344490071f415c2c05e8c5c67449457bebfbbc07830f5a771d0e408649&scene=21#wechat_redirect)  

[青年人才成长故事｜华北电力大学贾科教授：在团队内与学生们一起成长](http://mp.weixin.qq.com/s?__biz=MzA4MjY0NjcyOQ==&mid=2651238887&idx=1&sn=3a84a42c94696610dc014dc6918e662b&chksm=84709241b3071b578b405e2f0e10b6f2a189c6b51dc80d0ef6bc64eef67a118a75f98dc51d52&scene=21#wechat_redirect)  

  

  

**中国电工技术学会**

**新媒体平台**

  

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_014_c4e0f7babf19.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_015_1414d56e4960.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_016_661b94941027.jpg)

学会官方微信

电工技术学报

CES电气

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_017_8d727616b307.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_018_c6f9c894f5d0.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_019_1982ba2c461b.png)

学会官方B站

CES TEMS

今日头条号

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_020_1103327feb12.jpg)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_021_fbed6a07ac37.png)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_好文推荐_基于小信号时谐场有限元分析快速计算PWM电压源型逆变器供电下内嵌式永磁同步电机中电磁力的方法_images\img_022_0af89169cb72.jpg)

学会科普微信

新浪微博

抖音号

  

> 联系我们

> 《CES TEMS》: 010-63256823  
> 
> 邮箱：cestems@126.com
> 
> 《电工技术学报》：010-63256949/6981
> 
> 邮箱：dgjsxb@vip.126.com
> 
> 《电气技术》：010-63256943
> 
> 邮箱：dianqijishu@126.com