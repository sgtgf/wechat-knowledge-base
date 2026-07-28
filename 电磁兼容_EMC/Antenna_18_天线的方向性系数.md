# Antenna-18：天线的方向性系数


> 原文地址: [https://mp.weixin.qq.com/s/y9k-hkKtmT\_9YuMsl\_FVmQ](https://mp.weixin.qq.com/s/y9k-hkKtmT_9YuMsl_FVmQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FnSCBqnzmjIwTCGh5WIg8eNzMDGz0PJF5GdzUVe2R69AibruwUicQHGybnribvOUTiaJdkMibdbM63JvQw9gdBwOoamye1J1dGwBialhN5JfbgibX8/640?wx_fmt=png&from=appmsg)

____**★★★**______Antenna-18---D______**★★★**____

__**引言：天线方向性系数是衡量天线辐射能量集中程度的关键参数，定义为天线在最大辐射方向上的辐射功率密度与辐射功率相同的无方向性天线在同一点的功率密度之比。该参数定量描述了天线方向性的强弱，通常用符号D表示，是一个≥1的无量纲量。**__

___€1.天线的方向性函数___

___基于电磁辐射原理，方向性函数本质上由天线的电流/电荷分布决定，可通过麦克斯韦方程组结合边界条件求解。对于简单结构天线，首先建立天线的电流分布模型（如电偶极子、磁偶极子、对称振子等），然后根据电磁场理论，计算远场辐射电场E（θ，ф）或功率密度S（___θ，ф___），最后将辐射场强/功率密度对方向（___θ，ф___）的函数归一化，得到F（___θ，ф___）。___

___![](https://mmbiz.qpic.cn/mmbiz_png/FnSCBqnzmjJAWDib9wmQj3k3N3GOlkUgehJ8OI5KpBHfJ6B0hqaRtuUW3xZkZicibwbuUqDTQujrSlqSpGFXT9YoxdYt8ib3zf5fVSFghNj5Fia4/640?wx_fmt=png&from=appmsg)___

___E（θ，ф）、___H（θ，ф）为方向__（θ，ф）上的电场、磁场强度。为便于比较不同天线的方向特性，常将方向性函数归一化，即：________

__![](https://mmbiz.qpic.cn/sz_mmbiz_png/FnSCBqnzmjJsSZDPq37mFwOdXCV8HQDmm91W8BpeRbTiaQnkucYnr7ddrYic3pYuFPCCeZaHV2zHzxY8AeZpNJRLkibwka4lwvm2PxNu1lNxFk/640?wx_fmt=png&from=appmsg)__

__归一化后，__F（__θ，ф__）在最大辐射方向的值为1，其他方向为0到1之间的小数。以短电偶极子为例，__理想电偶极子其长度远小于波长，L＜＜λ。__

___1#：电流分布--->沿Z轴的时变电流：___

___![](https://mmbiz.qpic.cn/sz_mmbiz_png/FnSCBqnzmjI5koexcxvzbUCSib2PtClSh7m9N68yUj8dtr9JEp7Xia85buOOiaxcycibYQh1NGhJVHQeCib0QGVhA0qPUF0RHiaiaEPn8e1JBQ1Fck/640?wx_fmt=png&from=appmsg)___

___2#：远场电辐射场积分时，因L远小于___λ，相位项近似为常数，积分结果为：______

___![](https://mmbiz.qpic.cn/mmbiz_png/FnSCBqnzmjIPTBU7YicsZY3ibssiao9nCUQ6SO3bKpATPyP7T8zib0Y9DwjGKpE0OpUUryBxzCwkL4jqqoyRiaa3GsPicCQ2DOFaAPlDwa936r0JE/640?wx_fmt=png&from=appmsg)___

其中r为距离，k为波数。

3#：归一化方向性函数

![](https://mmbiz.qpic.cn/mmbiz_png/FnSCBqnzmjLuicGtLQbvnQUv5g3lfedP5rwQhlVlsW5ZoZ5OicoPV6eeyrH5BWuoQdLu6U9ePgRhP5oVtZZQsTkzl5ibRHb9jp3TT0KTCyoCYE/640?wx_fmt=png&from=appmsg)

归一化后：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FnSCBqnzmjIDUATRjwCYJwC7jTsudD1nKcAQKaliakNicck660RlmkavUkI6H5HMHZuErLbdlR6KyA6aP4NA4G0eMCV5x0kYB6Kmfdr1LHkPc/640?wx_fmt=png&from=appmsg)

可以看到__F（__θ，ф__）__与_ф无关，呈轴对称。_

以更接近实际常用天线的半波振子为例，半波振子长度l=λ/2，电流不是均匀分布，而是呈正弦分布（驻波电流）。

_1#：振子长度l=λ/2，电流呈正弦波驻波分布（因两端开路，电流驻波比为1，中间电流最大，两端为0）沿Z轴的时变电流：_

_![](https://mmbiz.qpic.cn/sz_mmbiz_png/FnSCBqnzmjLyQN5bKYROMdjiccpuZichn8iaicYopKQticvwa2ghC4K5kSf1bMMo21G1CXCQtHUd22aYVBt7ibEjiaUaliaia4eVdmSQAmicZFvLbwStw/640?wx_fmt=png&from=appmsg)_

_2#：辐射场积分时，需考虑电流的空间变化（正弦分布），积分结果为_

_![](https://mmbiz.qpic.cn/sz_mmbiz_png/FnSCBqnzmjKSZKERWjbPqiczQeibx9meGthzXdxEHvMuO9O7QPQPe7iaZaUqQn0hexUTka0dhjp0oExhSMBWo4PbCwuCUZxbZcZiaHCLkibBVkck/640?wx_fmt=png&from=appmsg)_

_3#：归一化方向性函数_

_![](https://mmbiz.qpic.cn/sz_mmbiz_png/FnSCBqnzmjIIx4VjufjQXYfnWe1nic0k9sOrImibrHlgSMoPwW1VR3600Q2HrUhcsUfwPMfPibCqOkuobdRMydKAtdjJqfr3CNUEVnPCXjMiam8/640?wx_fmt=png&from=appmsg)_

___当天线结构难以解析求解时，都会采用电磁学方法，比如矩量法MOM（将天线表面电流离散为基函数，通过积分方程求解辐射场），有限元法FEM（将空间划分为网格，求解微分形式的麦克斯韦方程），时域有限差分法FDTD（在时域中迭代计算电磁场的空间分布）。___

_对于由多个单元组成的阵列天线，方向性函数可以表示为：_

_![](https://mmbiz.qpic.cn/sz_mmbiz_png/FnSCBqnzmjKvs1hc9ao0A8yiaGPicZC7BLT5VdTslxUc4Ly66EqiadR62IicSOq9uBZH9U7zicvrX58e34r0VLTU5WvLr5hn9QSuCGh0OE2XCGQ4/640?wx_fmt=png&from=appmsg)_

其中f\_unit是单个天线单元的方向性函数，f\_array是阵列因子，由单元位置和馈电相位决定。

€2.天线的方向性系数D

方向性系数D：基于方向性函数计算，定义为最大辐射方向功率密度与全向平均功率密度的比值，公式为：  

![](https://mmbiz.qpic.cn/mmbiz_png/FnSCBqnzmjJzAVG4P3jdFOZ0aPuys0JQVyoibnKPgBjuyQiceswAm6GHMv1wpibTBmXllkZumxUyVibJxibQpfmgskgzHlcMYsO229a3vdWn9jyI/640?wx_fmt=png&from=appmsg)

指在远区场的某一球面上天线的辐射强度与平均辐射强度之比，其中___F（___θ，ф___）为归一化方向性函数，增益G与方向性系数的关系：___

![](https://mmbiz.qpic.cn/mmbiz_png/FnSCBqnzmjLBHHFDLCDpw671YzeGbkiaNoLM8Udo2DicA26icfZuN9a9yauKickFKTZ5lprTsJGUnUPicB1IfaNmM6iajxibpicekhwelpPaibl4HrNs/640?wx_fmt=png&from=appmsg)

其中ηA是天线效率（传送门：[Antenna-10：天线效率](https://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247497538&idx=1&sn=2bebfd6890ac7edd21daf6ad935a92f9&scene=21#wechat_redirect)），反映天线将输入功率转化为辐射功率的能力，理想无损耗天线的ηA=1，此时G=D。

€3.小结

方向性系数是以辐射功率为基点，没有考虑天线将输人功率转换为辐射功率的效率，为了更完整地描述天线特性，特以天线的输人功率为基点定义了一个增益。天线增益是表征将输入给它的功率按特定方向辐射的能力，定义为在相同输入功率、相同距离的条件下，天线在最大辐射方向上的功率密度与无方向性天线在该方向上的辐射功率密度的比值。