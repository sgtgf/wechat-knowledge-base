1

项目背景

　　LCC-HVDC在远距离大容量输电场合具有突出优势，但在弱交流系统下存在换相失败问题。将VSC型的STATCOM并联接入LCC-HVDC系统逆变侧交流母线，可以改善系统的电压动态特性，降低换相失败概率。目前，针对含STATCOM的LCC-HVDC系统的研究主要集中在系统运行特性与协调控制等方面，关于STATCOM对LCC-HVDC小信号稳定性影响的研究鲜有涉及。已有研究发现，弱系统下锁相环或控制系统的动态性能对LCC-HVDC和VSC-HVDC系统的小信号稳定性均具有重要影响。而STATCOM与VSC-HVDC系统具有相似的运行原理与控制策略，其运行的稳定性同样受到PLL与控制系统动态特性的影响。对于含STATCOM的LCC-HVDC系统，LCC换流站与STATCOM在交流母线处并联所带来的强电气耦合，在弱交流系统工况下有可能会使其各自锁相环或控制系统动态特性发生恶化，进而影响整个系统的小信号稳定性。本文基于含STATCOM的LCC-HVDC系统的小信号模型，揭示了弱交流系统下STATCOM的引入对LCC-HVDC系统小信号稳定裕度的影响规律，并研究了STATCOM对LCC-HVDC运行极限的影响。　　

2

论文所解决的问题及意义

 基于所建立的小信号模型，论文通过对比LCC-HVDC系统(Case 1)与含STATCOM的LCC-HVDC系统(Case 2)控制器参数可行域的差异，研究了STATCOM对LCC-HVDC小干扰稳定裕度的影响。例如，当SCR=2时，逐渐增大LCC锁相环增益_K_pPLL1从10到100时两系统的根轨迹分别如图1与图2所示。可以看出，弱交流系统下过大的LCC锁相环增益均会引起两系统发生小信号失稳，且含STATCOM的LCC-HVDC系统(Case 2)中LCC锁相环增益的可行域更小，即弱系统下STATCOM的引入将使LCC-HVDC系统中LCC锁相环的稳定可行域减小。


图1　_K_pPLL1变化时的根轨迹(Case 1)

 


图2　_K_pPLL1变化时的根轨迹(Case 2)

 当SCR \= 2、_K_pPLL1 \= 70时，LCC-HVDC系统(Case 1)仍能保持稳定运行，而含STATCOM的LCC-HVDC系统(Case 2)将会失稳，采用参与因子方法对两系统的主导模态进行分析，分布结果如图3所示。


图3  _K_pPLL1\=70时主导模态下各状态变量的参与因子

 可以看出，含STATCOM的LCC-HVDC系统(Case 2)主导模态中与LCC锁相环相关状态变量的参与因子较LCC-HVDC系统(Case 1)明显增加，且STATCOM定交流电压控制器的相关状态变量参与程度也较高。因此，弱交流系统下，STATCOM的引入使得LCC锁相环的动态特性发生了恶化，最终使得含STATCOM的LCC-HVDC系统在高LCC锁相环增益下更易发生小信号失稳。而STATCOM定交流电压控制器与LCC锁相环之间的耦合作用，是引入STATCOM后LCC锁相环的动态特性恶化、LCC-HVDC系统稳定裕度降低的关键因素。

　　论文进一步研究了上述两个系统在额定运行状态时，LCC锁相环增益_K_pPLL1可行域随SCR的变化规律，如图4所示。图4中两条曲线在C1/C2(2.10, 85.9)点相交，当SCR < 2.1时，含STATCOM的LCC-HVDC系统的_K_pPLL1可行域比LCC-HVDC系统更小；当SCR \> 2.1时，含STATCOM的LCC-HVDC系统的_K_pPLL1具有更大的稳定可行域。也就是说，当LCC-HVDC受端交流系统较强时，STATCOM的馈入可以增加LCC锁相环的可行稳定范围，从而可以较为显著地提高LCC-HVDC系统的稳定裕度；然而，当受端交流系统较弱(例如，当SCR < 2.0)时，STATCOM的馈入反而会降低LCC锁相环的稳定可行域，在较大的LCC锁相环增益下，使含STATCOM的LCC-HVDC系统较LCC-HVDC系统更易发生振荡失稳。因此，当受端交流系统较弱时，STATCOM馈入LCC-HVDC系统可能使得LCC锁相环稳定运行范围变小、系统稳定裕度降低的问题值得关注。


图**4  _K_p****PLL1**的可行域随交流系统**SCR**的变化规律

 此外，论文基于特征值分析，考虑LCC锁相环参数对系统运行极限的影响，对比研究了上述两个系统的最大传输有功功率MAP与临界短路比CSCR。结果表明，STATCOM的引入能够增大LCC-HVDC系统的MAP值，但在弱交流系统下其MAP值更易受到控制参数的限制。

3

论文重点内容

 1) 建立了含STATCOM的LCC-HVDC系统的小信号模型；

 2) 揭示了弱交流系统下STATCOM的引入对LCC-HVDC系统小信号稳定裕度的影响规律；

 3) 研究了STATCOM对LCC-HVDC运行极限的影响。　

4

结论

 本文研究了弱交流系统下STATCOM对LCC-HVDC小干扰稳定裕度的影响，得到以下结论：

 1) STATCOM对LCC定关断角控制器参数的影响较小；

 2) STATCOM对LCC锁相环的稳定可行域有较大影响，当LCC-HVDC连接较弱系统时，STATCOM的控制系统(尤其是定交流电压控制器)与LCC锁相环之间的耦合作用，对LCC锁相环的稳定可行域产生负面影响，从而可能引发整个系统发生小干扰失稳现象。

　　3) STATCOM的接入可以提高LCC-HVDC系统的最大传输有功功率MAP，然而在弱交流系统下其MAP值更易受到控制参数的限制。　　

 

**引文信息**

郭春义，蒋雯，郑安然，等．弱交流系统下STATCOM对LCC-HVDC小干扰稳定裕度的影响研究\[J\]．中国电机工程学报，2018，38(19)：5679-5686．

Guo Chunyi，Jiang Wen，Zheng Anran，et al．Impact of STATCOM on the small-signal stability margin of LCC-HVDC under weak AC grid conditions\[J\]．Proceedings of the CSEE，2018，38(19)：5679-5686(in Chinese)．