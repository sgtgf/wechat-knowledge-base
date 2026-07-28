# APEC2025:并联SiC MOSFET 的振荡稳定性

原创 Lizhong Zhou SiC碳化硅MOS管及功率模块的应用 2025-07-11 06:09 广东

> 原文地址: [https://mp.weixin.qq.com/s/Ht5qB\_HBJyIT1lJuroh7rA](https://mp.weixin.qq.com/s/Ht5qB_HBJyIT1lJuroh7rA)

文章来源：APEC2025(TOSHIBA)

作者：Lizhong Zhou–Business Development Manager, Toshiba America Electronic Components ,Lingfei Zhang–Toshiba electronic devices & storage corporation

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDbINE5hIibhlxqv7XPUpXbBLqRdUR1PS2gFmkY7I74Row6MNVuRQJNjQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDKJ8icDJIRQnibVl4AzVLakLVvPABUOUeYpmUEDmjOorR6QuQ5g6ry8qQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMD6Gy6UgD1ZrXdTIvpibaE0T5sGoicnsn6Y4MiaZy10fgnttRACAAHqticXg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDcOjsXVHCYyL8UVn3CU5NB3ECicsFYWHAfOXYHffEq4gJWN33jzBVPbg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDib0SP5vQSYOotGTBRVvV3a0CiaLzTjR426vuWbmnYcFEXzyPglkBPhxA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDb5eYYktNkDbq1JBazAa8tSfJE8ibxicSEy3UmJSQUGL4qadyts0YlZ0g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDibjFk4b2Sh15oiaRG3ibUjFhUUThVZlIDnQ4PWq8KGgjZG15AZePdXgVg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDxAMia0OjIibjMSxkpJJqiasibpCJusy6YcHRTP4PomWdJZIVfXUs46HRIg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDG8SC4Zkbjd2Fsb6icVicHLfa7U8oVGXyg1bQBCzLP2PUjWNdY0hg1e3A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMD28paF3rlv5M9BhQka314g9TZ3Px7MPAibphraDgOyD3CvEyicT7PaC5A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDx5SAyEQ3gkc8ZSaStsJ5pSZJaOXkVNDnHs5iawlqvAc8M6WzZOc8QwQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDBRpvico8IQSTicQFwWlu2xiaT7wuwpiaXic4aWiaXFZflkov1vNGgTnmdhlg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMD3fTUbvVBiasEqbvibLYicysVYIdhDibwicWvib5UYYSric075XubsFMdyCP6w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDs5TAQ8e94p8OreZvskmdTZRYIcvATpF6a9NbLkEwer6c3EYyblyNDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDa4iaaD0YicZZo4QeEZIiaNX7QLibEPjjCXvKKh377lIFIeWL7qlfKg2ibZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDquiczBREibvpJHv3YiaJVNUm2vBrfgz3icyb58dqJibUYBgeN7CoODOMXFA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDh3hJ0IicDUNsnwibcibYaMsSJtplDJjIg9xHsb15nDZz0MOvoETDrACNg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDZ9geFgSiaupic6JRzzWLDOUz8toAyV012TyaiayxKDW4966ia3mGsXPyrQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDibgxRmYAIjNC8MA24xLiaavdnuxxDavGbtl9pNMTiadRpUibOrpNYMWiahA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDOyOyQia2FlyYevo0nm6rylB3nD5ib43JtjwCuTmyqEOBAbzBEn0SwdVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDpPbOS7GHDaokeaAS0YFUYklnPIN5ZfrMrTE39x9M3Ax7lKRVIAYMPw/640?wx_fmt=png&from=appmsg)

注：文字与报告无关

SiC MOSFET（碳化硅金属 - 氧化物 - 半导体场效应晶体管）凭借高频、高耐压、高效率、高温运行等优势，在中大功率电力电子领域应用广泛。

在大功率电力电子系统（如新能源逆变器、电动汽车电机控制器等）中，单只 SiC MOSFET往往难以满足高电流需求，因此需要通过多器件并联提高系统的电流容量、降低导通损耗并提升可靠性。然而，SiC MOSFET的高频开关特性（开关速度可达100ns 级别）和寄生参数敏感性，使得并联时极易出现振荡现象，严重影响系统稳定性。以下从振荡原因、影响因素、评估方法及改善措施四个方面详细分析并联 SiC MOSFET 的振荡稳定性。

一、并联 SiC MOSFET 的必要性与振荡风险

1\. 并联的核心目的

提升电流容量：单只SiC MOSFET的额定电流有限（如650V/1200V等级通常为几安培到上百安培），并联可将总电流扩展至数千安培，满足大功率场景需求。

降低导通损耗：并联后总导通电阻降低（Rds(on)总\=Rds(on)/n,n为并联数量），导通损耗与电阻成正比，因此损耗显著降低。

冗余设计：部分场景下，并联可实现冗余功能，提高系统容错能力。

2\. 并联的核心挑战：振荡风险

SiC MOSFET的高频开关特性（dv/dt可达10kV/μs，di/dt可达1kA/μs）使得寄生参数（电感、电容）的影响被显著放大。并联时，即使微小的参数差异或布局不对称，都可能导致动态电流不均衡，进而引发振荡。振荡不仅会增加开关损耗、产生电磁干扰（EMI），严重时还会导致器件过压 / 过流损坏。

二、并联 SiC MOSFET 振荡的关键原因

振荡本质是 “能量在寄生元件间周期性交换”，并联场景下的振荡主要由以下因素触发：

1\. 器件参数不一致性

SiC MOSFET 的生产工艺存在离散性，并联器件的关键参数差异会导致动态特性失配，引发电流不均衡和振荡：

阈值电压(Vth)差异：Vth低的器件会先导通、后关断，导致其承担更多电流，形成 “抢流” 现象。开关过程中，电流集中会引发局部发热，进一步扩大Vth差异（负温度系数效应），形成恶性循环，最终触发振荡。

导通电阻(Rds(on))差异：Rds(on)小的器件在导通时电流更大，关断时因电流变化率(di/dt)更高，与寄生电感作用产生的过压更显著，加剧振荡。

输入电容(Ciss)和反向传输电容(Crss)差异：Ciss影响栅极充电速度，Crss(米勒电容)影响开关延迟。参数差异会导致开关时间不一致，引发电流尖峰和振荡。

2\. 寄生参数的影响

SiC MOSFET高频开关时，电路中的寄生电感(如栅极电感Lg、源极电感Ls、母线电感Lb)和寄生电容(如器件结电容Coss、线路杂散电容Cstray)会形成谐振回路，触发振荡：

共源电感(Ls)的反馈作用：源极电感Ls是最关键的寄生参数。开关过程中，Ls上的电压VLs=Ls⋅di/dt会反向叠加到栅极-源极电压(Vgs=Vdrive−VLs)，形成 “负反馈”。当di/dt过大时，Vgs可能被拉低至Vth以下，导致器件 “误导通-关断” 交替，引发高频振荡（通常为几百kHz到几MHz）。

栅极回路寄生电感(Lg)与输入电容(Ciss)的谐振：Lg与Ciss构成LC谐振回路，谐振频率

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnk8IHOchicJYnXBNlVia4dMDXHyk39hricYZTMzEq6lhanRPo0btOatpNz80QuNzjOzuiaOL6Ugia333g/640?wx_fmt=png&from=appmsg)

。若谐振频率接近开关频率或其谐波，会导致栅压振荡，进而引发漏极电流（Id）振荡。

并联支路间的寄生参数不对称：布局设计中，若各并联器件的引线长度、铜排路径不同，会导致支路电感/电容差异。例如，某支路Lb更大时，开关时产生的过压V=Lb⋅di/dt更高，导致该支路电流反向波动，引发整体振荡。

3\. 驱动电路的差异

驱动信号的不一致会直接导致并联器件开关不同步，是振荡的重要诱因：

驱动延迟差异：驱动电路的PCB布线长度、驱动芯片响应速度不同，会导致各器件的栅极信号存在时间差（如10-50ns）。在高频开关场景下，此延迟会使并联器件的开通/关断时刻错开，产生电流冲击和振荡。

栅极电阻(Rg)差异：Rg影响栅极电流(Ig=dQg/dt)，Rg小的器件开关速度更快，di/dt和dv/dt更高，与寄生电感作用产生的电磁耦合更强，引发相邻器件的干扰振荡。

4\. 动态均流不平衡

并联器件在开关暂态（开通/关断过程）的电流分配远比重稳态复杂，动态均流失衡是振荡的直接触发点：

开通暂态：器件开通时，di/dt由栅极驱动和米勒平台特性决定。若某器件先开通，其漏极电压(Vds)快速下降，通过Crss向其他器件的栅极注入电流（米勒电流），可能导致未开通器件的Vgs误升至Vth以上，引发 “交叉导通”，产生电流尖峰和振荡。

关断暂态：关断时，Vds快速上升，Crss会从栅极抽取电流，若某器件先关断，其Vds上升速率更高，通过Crss干扰其他器件的栅极信号，导致关断不同步，引发振荡。

三、振荡稳定性的评估方法

为量化并联SiC MOSFET的振荡风险，需通过仿真与实验结合的方式评估稳定性：

1\. 仿真分析

电路仿真：利用 PSpice、Saber或PLECS等工具，建立包含寄生参数(基于实际布局提取)和器件模型(厂商提供的SPICE模型)的并联电路模型，模拟开关过程中的电流波形、电压波形及频谱特性。通过观察波形是否出现持续振荡(振幅未衰减)或尖峰频率(如超过10MHz的高频分量)，判断稳定性。

小信号建模与极点分析：将并联系统简化为小信号模型，计算系统的传递函数极点。若极点位于s平面右半部分(负阻尼)，则系统存在振荡风险；极点越靠近虚轴，振荡衰减越慢。

2\. 实验测试

开关波形测试：使用高压探头和电流探头(带宽≥100MHz)测量并联器件的Vds、Id和Vgs波形，观察是否存在周期性波动(如开通/关断时的高频振荡)。若振荡周期稳定且振幅未随时间衰减，说明系统不稳定。

均流度测试：计算并联器件的电流不均衡度(ΔI=∣I1−I2∣/(I1+I2 )），若均流度超过10%，且随开关频率升高而恶化，通常伴随振荡风险。

阻抗扫频测试：通过网络分析仪测量系统输入阻抗，若阻抗出现负实部(负阻特性)，说明存在潜在振荡(负阻会放大扰动)。

四、改善振荡稳定性的关键措施

针对上述原因，可从器件筛选、布局优化、驱动设计等方面提升并联SiC MOSFET的振荡稳定性：

1\. 器件参数匹配

严格筛选：通过测试筛选Vth(偏差≤5%)、Rds(on)(偏差≤10%)、Ciss和Crss(偏差≤15%)的器件，降低静态与动态参数差异。

温度补偿：对于大功率场景，可在驱动电路中加入温度反馈(如负温度系数电阻)，补偿Vth的温度漂移，抑制参数差异的放大。

2\. 寄生参数优化

布局对称设计：采用对称的PCB或模块布局，确保各并联器件的引线长度、铜排宽度一致，降低支路寄生电感差异(目标:各支路Ls和Lb偏差≤10nH)。

减小寄生电感：源极采用 “Kelvin 连接”(分离功率源极与信号源极)，避免功率电流流过栅极回路，降低Ls对Vgs的干扰。

采用平面母线结构(如叠层母排)，缩短主电路路径，降低母线电感(Lb)，减少di/dt引发的过压。

抑制寄生电容谐振：在母线或栅极回路中增加低ESR电容（如陶瓷电容），吸收高频能量，破坏谐振条件。

3\. 驱动电路优化

同步驱动：使用同一驱动芯片（如隔离型栅极驱动器）输出驱动信号，通过对称布线确保各器件的驱动延迟差异≤5ns。

栅极电阻匹配：为各并联器件配置相同的栅极电阻(Rg)，并根据开关速度需求调整Rg值(增大Rg可降低di/dt和dv/dt，抑制振荡，但会增加开关损耗，需权衡）。

栅极电压钳位：在栅极与源极间并联稳压管(如15V钳位)，限制Vgs过冲，避免器件进入非饱和区(可能引发负阻振荡)。

4\. 阻尼与均流措施

加入阻尼电路：在栅极串联RC阻尼(如R=10Ω，C=100pF)或在主电路并联 RC snubber(缓冲电路)，消耗谐振能量，抑制振荡。

动态均流控制：对于多模块并联场景，可引入均流控制器(如基于电流反馈的有源均流电路)，实时调节各模块的驱动信号，强制电流均衡。

五、总结

并联SiC MOSFET的振荡稳定性是大功率电力电子系统设计的核心挑战，其本质是 “参数差异 + 寄生参数 + 高频开关” 共同作用的结果。通过器件严格筛选、寄生参数优化、驱动同步设计及阻尼措施，可有效抑制振荡，提升系统稳定性。实际应用中需结合具体场景（如开关频率、功率等级），通过仿真与实验迭代优化方案，在效率、稳定性与成本间找到平衡。

  

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kfcJrmcb2716g3x3ApLFKvEaFCadf8yxp2Qp7P8xwPviaQToWzMPNNhw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2kELUCcUWDecF1MWkd0iaPYZGicRawwkSdBpC9NICKWmnlFgIl0GlfjeAA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslnEZsLZCv0tUfNhia70UU2koYF23N8tPa3ICcc9mtWqYI49sXCwNnkm4icoJtQgUQ432ZJbw9kgBeg/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp)