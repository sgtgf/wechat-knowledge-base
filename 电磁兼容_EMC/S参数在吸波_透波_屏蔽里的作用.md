# S参数在吸波、透波、屏蔽里的作用


> 原文地址: [https://mp.weixin.qq.com/s/uNb38FlcpR9zrlubx23Osw](https://mp.weixin.qq.com/s/uNb38FlcpR9zrlubx23Osw)

在电磁吸波、透波以及屏蔽材料研究与设计中，对材料性能的评价本质上都是对入射电磁能量在反射、透射与内部耗散三种途径上的再分配进行定量表征。矢量网络分析仪、电磁仿真软件等工具通常以散射参数（ S-parameters）作为输出形式，因此要将这类散射参数的结果转换为反射率、吸收率、插入损耗、屏蔽效能等工程指标，必须先在统一的电磁与网络理论框架下将 S 参数的含义、其复数性质以及与能量守恒之间的关系表述清楚，然后再给出相应的计算式。

以最常见的平面一维问题为例，设被测材料位于两个测试端口之间，我们从端口 a 施加激励，另一侧端口 b 作为可能的透射侧。对两个端口分别定义入射波功率幅度 a1，a2 与散射波功率幅度 b1，b2，在给定的参考阻抗 Z0下采用功率波归一化，二端口的线性关系可写为：  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNc4QL4Cuw4xNreRAiaTAYOgjglRk35DnoWpJnCcfHvLmQEf1T7h2icLuuQ/640?wx_fmt=png)

这儿可能对不太熟悉微波理论的工作者有点困扰，明明是两个端口，不应该只有a1、b1吗，为什么还会有a2、b2。因为端口是开放的，允许进入也允许出去。所以对端口1，会有入射功率波幅度 a1、散射波幅度b1；对端口2，会有入射功率波幅度 a2、散射波幅度b2。以只从端口1入射为例，此时a1即为从端口1入射的波功率幅度， b1即为从端口1反射的波功率幅度，此时存在以下两种情况：

-   若2端口终端阻抗匹配，即无2端口的反射波（相对2端口是入射波a2），即a2=0，那么2端口只有来自1端口的入射波（相对2端口是散射波b2）；
    

-   若此时2端口终端阻抗失配是一个反射系数为 Γ的负载，那么便会存在a2=Γ\*b2  
    

回到主线上，最常见的仅由端口1激励，同时端口2阻抗匹配，此时 a2\=0

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcStdLswAysQgZAo9fXcQ7OvpKkERLZNemNC6zNJ35DGOtR00vRzDrsw/640?wx_fmt=png)

在此定义下，S11即为该结构在入射侧参考面上表现出的归一化反射系数，S21则为在相同归一化条件下的透射（或传输）系数。之所以需要这种功率波归一化，是因为在高频条件下直接使用端口电压、电流并不能保证所得比值与功率成正比，而一旦采用了上述定义，并且参考阻抗取实数，便可以将 |a|^2、|b|^2直接视为与时间平均功率成正比的量，从而使 |S\_{11}|^2、∣S\_{21}|^2具备明确的“功率系数”含义。需要注意的是，S 参数是随频率变化的复函数，可写为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcCw7S7tSsJCTKTkEa1MAagytFcic35l1q4Z7lHmmqNQQVq0W8GKFddBQ/640?wx_fmt=png)

复数形式之所以不可省略，是因为吸波、透波、屏蔽材料普遍具有有限厚度和多界面，入射波在结构内部会产生多次反射与传播，每一次传播都会获得额外相位因子，最终在端口参考面上的反射与透射是多条复振幅的矢量叠加结果；只有在复数层面描述，才能正确反映频率变化时的谐振、干涉与凹陷现象。工程中很多时候只取其模值，是因为在做功率分解时只需 |S|^2，但这并不意味着 S 本身是实数。

在此基础上，可以建立一条非常清晰的能量平衡关系。若两端口采用相同的实数参考阻抗，网络无源，且不存在向其他模态或自由空间的额外辐射损失，则对归一化后的入射功率（记为 1）有：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNckSnt0z56jAUDz9p1s8djwIicR2niaibhW9ue01FmVMjY1lQ2e34AMicSzQ/640?wx_fmt=png)

其中S\_{11}|^2 为反射功率系数，∣S\_{21}|^2为透射功率系数，A为材料内部因介质损耗、磁损耗、表面电阻或多次反射衰减所消耗的功率系数，即吸收率，由此可得吸收率的基本表达式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcjibMQo8tcup7rdKxQJUSsVG2lbNuHf6osDTobj0PQic1yooWKJpUuM4g/640?wx_fmt=png)

上式是吸波、透波与屏蔽三类问题共享的核心公式：它表明，只要反射和透射两部分都由 S 参数给出，吸收便是入射功率减去这两部分之后的剩余量。在具体结构中，上式可以进一步特化。对于背板位金属板的吸波结构，金属背板阻止了能量通过结构传入背面，可视为 ∣S\_{21}|^2≈0，则式(1) 退化为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcxMvibROLU19dcQH2F7SkpibAtn6sTjtDZpvJX6TYXCqK7IX62OGf6Y0w/640?wx_fmt=png)

这正是大量吸波材料文献和产品资料中仅给出 S11（或称反射损耗、回波损耗）而仍能判断吸收性能的原因：在不可透的边界条件下，反射减少量即为吸收增加量。反之，如果结构本身允许透射（如无金属背板的多层超构、同轴夹具中待测材料、透波窗、频选表面等），则必须使用式(1) 的完整形式，仅凭 S11的下降无法说明能量是被吸收了，还是被透射走了。  

对于强调透波性能的结构，设计目标常常是 |S\_{11}|^2很小、|S\_{21}|^2接近 1，以保证入射能量大部分通过，内部吸收项 A很小。此时工程上更常用的量是插入损耗（ IL），其定义基于 S21的幅度：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcyFCNWNxQInBibeVradw4GyC8k5cK09Uxm94FpfgYgtTqyDXnNnrmVTg/640?wx_fmt=png)

因为 S 参数是“波幅比”（行波幅度之比），所以采用 20log 表示。若∣S21∣\=1，则 IL\=0 dB表示无附加衰减；若 ∣S21∣\=0.89，则 IL≈1 dB，对应的功率透过率为|S\_{21}|^2≈0.79，说明透过了约 79% 的入射功率。此时若需要仍以吸收的形式描述损耗，只需将 |S\_{11}|^2、|S\_{21}|^2 代入上式即可。

对于以隔离为主的电磁屏蔽结构，关注的重点往往是“另一侧还剩多少能量”，因此通常直接对透射功率做对数刻度，得到屏蔽效能（SE）：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcHlxootCQSuL9eFZptFiayxNTvicKDTOFRRwURiagzTOxyn639GH10Ba5g/640?wx_fmt=png)

这里采用 10log 是因为要表示的是功率的对数。若∣S21∣\=0.01，则|S\_{21}|^2 = 10^{-4}，代入式(4) 得到 SE\=40 dB，表明透射功率被衰减了 40 dB。也可以直接写成:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcJDcXiccx90LP9zO1l4fDa2zf1eX9fsZanEtaice2jRweWiazUiaEJ5SNYg/640?wx_fmt=png)

两者一个是功率，一个是幅度，屏蔽结构中的 |S\_{11}|^2与上式 中的 A共同决定了能量是主要以反射的形式被挡回去，还是以材料吸收、损耗的形式消失在屏蔽体内部，这在比较“反射型屏蔽”与“吸收型屏蔽”时是有意义的，但无论哪一种，只要 |S\_{21}|^2足够小，都可以认为屏蔽目标达成。

由于实际测量或者仿真中 S 参数往往以 dB 形式给出，需要给出从 dB 到线性量的还原公式。以下举例，设：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcT52B5tS1SU1a3NzsHov5etIPLXjJibn10joaQSVTFUCPpwFKyapP9AA/640?wx_fmt=png)

 ![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcBGbDuu2n826Txx11ZGnRiarI7jVun1vAwzZtMgs38L4n6tbj8BhdE7w/640?wx_fmt=png)

则线性幅度为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcma6QR0GOM1WLtntavU3Qf9IHMxZ8mW5s1UUy99ic1GkLMwvXI1rwGIg/640?wx_fmt=png)

再由此得到反射功率系数：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcbXLmuMc4mQ1ZzBHKUCttbGfAibZ1vww1g8DA5PSeVndW5TWRMRpRYAA/640?wx_fmt=png)

同理，

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcsXBxzFzKC6NgF6mNpwwTIuV2icBrUa2ibu9Mn1GvnzMZzfiacfgbk2uicw/640?wx_fmt=png)

最后代入上面吸收率公式得到吸收率：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNc1c6AXjGo3BE5xAQEtFwa1Wibnic0BL93NLAJYA4EC5DCy9n2fibZn0jdg/640?wx_fmt=png)

以吸波结构为例，若某S11\=−15 dB，则 ∣S11∣\= 10^{-15/20} ≈0.177，反射功率为 R≈0.031R 。若该结构背后有金属板，可视为 透射率≈0，则吸收率为0.969：即该频点吸收约 96.9% 的入射功率。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcgjVZotOUvvCK5QI9CZicjoYCqFZrhnLibvc5scjmsx1PPAbFDs0A07sg/640?wx_fmt=png)

以透波结构为例，若 S11\=−20 dB、S21\=−1 dB，则：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/7BTibsDIITsQnZk7Bo82nd7DMHb38VmNcdqMr37CibgUD0iaVF7OcUlh0uwYxhgkomcNrjyLt76jBcKbpf0ahdOiag/640?wx_fmt=png)

即该结构在该频点透过约 79.4%，反射 1%，吸收（或说内部损耗）约 19.6%。这一组数字对刚入门的材料或结构设计人员是直观的，同时又完全符合散射参数的定义和能量平衡的要求。

需要指出的是，上述“吸收 = 1 − |S\_{11}|^2 − |S\_{21}|^2”这一形式依赖三个前提：(i) 两端端口采用一致的功率波归一化，参考阻抗的实部相同；(ii) 系统无源，不含放大或有源补偿；(iii) 不存在未计入 S 参数的能量泄漏（如高阶模、辐射等）。在这一前提下，用单纯的 S 参数就可以在吸波、透波、屏蔽三个方向之间平滑切换，而不需要为每一类结构另造一套符号体系。