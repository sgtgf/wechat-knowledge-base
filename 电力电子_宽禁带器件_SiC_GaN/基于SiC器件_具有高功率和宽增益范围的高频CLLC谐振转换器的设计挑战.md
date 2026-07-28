# 基于SiC器件-具有高功率和宽增益范围的高频CLLC谐振转换器的设计挑战


> 原文地址: [https://mp.weixin.qq.com/s/kT-q9pJnv9oR3NcRYqFsFw](https://mp.weixin.qq.com/s/kT-q9pJnv9oR3NcRYqFsFw)

作者：李泽元 （教授）

  

报告摘要：与用于高功率应用的IGBT器件相比，第三代功率半导体SiC器件可显着降低开关损耗，开关频率预计会增加 2-3 倍。在许多增益范围相对较窄的 DC/DC 转换器应用中，谐振转换器已经被认为是首选。通过ZVS导通和ZCS关断，谐振转换器的开关频率提高了一个数量级，效率也提高了。

然而，在电动汽车充电、可再生能源和储能等许多新兴大功率应用中，具有宽增益范围的特点，具有某种形式的软开关的 PWM 转换器仍然是主流。本演讲的主题是关于克服与宽增益范围相关的挑战的提出的方法，以及在100KHz以上运行的方法，并大大提高了效率。控制策略提出如下：“灵活的链路电压”以延长工作范围，同时效率高;“短路”模式，以提升罐体能量，实现高电压增益;和“PWM”模式，可在轻负载下工作时实现大大减小的频率范围。所提出的策略共同改变了基本特性，同时消除了CLLC转换器的局限性，使其最适合需要宽增益范围的高功率应用。

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LVxFusQ5xO4Oia3Ov5IB5AI3ibMhlmJ3tL7pht93HUmV9MH5MoSYXiao8A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LoN10KWplicl1Yvr9scCiaWd90nKznz8TyY8icdGYCib9EFkp34YQKNlGYg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LTeIXeHuyCnLvv4CoqxyoopCico7KlYKtzFSQucCcCl28XI9wTxr8yvA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LDaZVyibMJnbkI6l0pLO4IHs2jW7OsicKTRWXeUBXTOuP65lDicZ1e7Uiaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LUicss5bvPyFY2IqibY9qNlyHSBQsuicgux5NicQr7onKhvBwTHFtktSvhQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LhjgvHDo34TzIThJsTm62w04xpRDwIa0jvV4qfv4tulwlgzKnzQGpVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LqZLbmz3rtzS9t7H7ickOsIyjHiaIG1m9h5OUggQ5Lm8FEwbTUH45VqJA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LBNa4icmaBSZ6tIXe8LP3H7oCVm505q75D9NMgc3ANTKlEEP8aicibfz4g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LluOHCNDmnyMhtDlE7ugyibeXibHaSx6oGtR4fpMIS4UbiangCVwcv9V2g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LuJ2ia3aqJNDfIHjriaJiaib3eaAatIGpM5HMKYHxof0QdNpSQbxx8LDWuw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LTAPEM19gjGZ7KKUfAibW94icXw20PsCZiceBmq8jsIrr9ibYhsiblh4EuSQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LGYrHCs6KpVknwDtSakqfXoUPesBxusqySsW7WciayoBgIQR43EKxuibA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LibhDpoLCJvnkI2ZeK7QXdIhmKPVsLBibg6P4mXn0q5KmKBxDd4mmyK4g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LjXtG1ia5yk7y9XoJB8PgWskSNdiaYCMIJRQXSuWJvN8RknP4qsINSicXg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LH5hQtuCCEKwWOibAzUk837j4sQ4fAU8fw7xHUKYu2t8E9lcJLK4DdIQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LjWsqOgOl22AIxmjQmUVCJJRqAnYW7PvvwoZ3FG8vomAldy3r9JFXrg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LnUgqwSH2ENJefZTU4bkPodOq1Z5s8oJzZfia5ESBYRnufZ9OYoxbqCw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LwD9l99ST5anlYQDcpMp59qJBImc98BVXh2x4H5t0YqkicZBRlJiatrMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LmLeLoomYhIwgFNy7lLib2ZOUfBbhBVg5eHc1DCttsVGXt4vag9EpnCw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LrSDyGuNggtZYfpk3drv8ia9B2PBY8ibw7ZVBlyjnWkhO47NficOvDn6Eg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LQ30apib8I5xeul4zBhUHx60AFTO8BnsTrmficJkgLmkfYXiaqLHt2ISbQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LLtK2LxsicII1FCZzlJYibTYkPElfsEHnBRlic0NYvLExjicK5VDeYbpN1w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LjCv81TSlDmiapNbH5QT75ZdLjIiaI78vqr5r5Kic3y1ial7ViaPlAo2ym0w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0Ljwh9SsELxMo3bFyAg4unP99hkovLkS4m00mKqAibzZHYrJDTdJdZ4HQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LEyZ8y6QiajaVpibDiaJaFRaC7k08Mzr3KlWsnsfajAcQrgdCrb1Tvov0Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0L4icicWT3DjAHBzia7OlqIDjaHZNowIZe2h02Cehm9geSsen2WgvEI0IXw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LxEsCTSQwmx2a2bQuTgCtmTibcPb0xfJTx6tWatlAfIjZtWpTccLQu2w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LjyicVicvicu0cAQjBy8PGNZVTqMicGmic2eIV51edh7dcQ9BNDqRQmrUkDg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LxD9gemBtkGKgJLeb77TYOKWonuLcAbOsdYtQlhaJJibDpNMeic8jRLSA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LBOInXp4xrE1akC9PtNu3VadPrialDUDicdl9YPybSjfk83rcRzD2Mtag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LK2Lf0ptiaibwDevXxbvJeTdo5XegibHibYuQOFp4FyW2ib1DXxIFBOXq4iag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LQnBatMujiauAnHiauXRJphPmRibxqeDKhWPFdrpO1z0ibQWcN0f4sQJxNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0L4icf3a9Bx4MC0riaBtN3hQibh61v7xgEfrQPsu7ym3IEs0IUw8MOYm4vQ/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

  

基于碳化硅（SiC）器件的高功率、高频CLLC谐振转换器设计，在追求高效率、高功率密度的同时实现宽增益范围，确实面临一系列关键挑战。以下是对主要设计挑战的详细分析及应对思路：

### 一、核心设计挑战

**1\. 宽增益范围与软开关的平衡**

-   **挑战**：CLLC拓扑的增益曲线呈“钟形”，在偏离谐振点（尤其是轻载或输入电压大幅变化时）难以维持所有开关管的零电压开关（ZVS）和零电流开关（ZCS），导致开关损耗增加，SiC的高频优势被削弱。
    
-   **深层问题**：增益范围（如±20%以上）需要设计更宽的开关频率调节范围。然而，过高频率会增加磁芯和绕组损耗，而过低频率则可能丢失软开关。
    

**2\. 高频磁元件设计与优化**

-   **变压器设计**：
    

-   **寄生参数**：高频下（数百kHz至MHz），变压器的漏感和寄生电容成为谐振网络的一部分，直接影响增益特性和软开关条件。设计时必须精确建模并控制这些参数。
    
-   **磁芯损耗与绕组损耗**：高频下磁芯损耗（使用低损耗材料如铁氧体、金属粉芯）和趋肤效应、邻近效应导致的绕组交流损耗急剧增加。需要采用利兹线、PCB绕组或平面变压器技术。
    

-   **谐振电感集成**：为提升功率密度，常将谐振电感集成到变压器中（通过调整磁路或增加气隙），但这使得参数耦合更强，独立调节更困难，增加了设计和优化的复杂度。
    

**3\. SiC器件的高频应用挑战**

-   **驱动与布局**：
    

-   **栅极驱动**：需要低电感、强驱动的门极回路以快速控制SiC MOSFET（开关速度极快），抑制电压过冲和振荡。负压关断有助于防止误导通。
    
-   **寄生参数**：PCB布局的寄生电感（尤其是功率回路和驱动回路）会在高频开关下引起严重的电压振铃和电磁干扰（EMI），必须通过紧凑对称的布局、叠层母排等技术最小化。
    

-   **体二极管反向恢复**：虽然SiC MOSFET的体二极管反向恢复特性远优于硅，但在硬开关或ZVS条件不佳时，其反向恢复电荷仍可能引起额外损耗和噪声。
    

**4\. 复杂控制策略的实现**

-   **宽范围调节需求**：仅靠变频（PFM）控制，在宽增益范围内可能使频率范围过宽，导致磁元件和滤波器设计困难。通常需结合**脉冲宽度调制（PWM）**、**移相控制**或**混合调制（如PFM+PWM）** 来“压平”增益曲线，但控制算法（数字实现）的复杂度和实时性要求极高。
    
-   **同步整流（SR）控制**：副边SiC MOSFET用作同步整流管时，其精确的导通/关断时序对效率至关重要。在宽频率和负载范围内实现稳定、无环流的SR控制是难点。
    

**5\. 热管理与电磁兼容**

-   **热密度高**：高功率密度下，损耗集中，尤其高频磁元件和SiC器件（虽高效但功率密度大）的温升管理是关键。需要高效散热设计（如液冷、热管）。
    
-   **EMI挑战**：高频（尤其是MHz级）开关产生的高dv/dt和di/dt，使得传导和辐射EMI问题突出。需从源头（如软开关）、布局、滤波器和屏蔽等多方面协同设计。
    

### 二、关键设计考量与应对方向

**1.多目标参数优化**：采用基于模型的优化算法（如遗传算法、粒子群算法），对谐振腔参数（Lr, Cr, Lm, n）、开关频率范围、磁元件参数进行协同优化，在效率、增益范围和功率密度间取得最佳折衷。

**2.先进磁集成技术**：深入研究磁集成方案（如集成谐振电感的平面变压器），利用有限元分析（FEA）工具精确预测寄生参数和高频损耗，实现高功率密度和可重复性。

**3.数字控制与智能算法**：利用高性能数字信号处理器（DSP）或FPGA，实现自适应混合调制、在线参数辨识、预测控制等先进算法，以动态优化工作点，应对宽范围变化。

**4.原型验证与迭代**：由于高频下寄生参数影响巨大，理论模型与实测常有差距，必须通过**快速原型构建和精细测量**（如双脉冲测试、阻抗分析仪测量磁元件寄生参数）进行迭代优化。

### 总结

设计基于SiC的高功率高频CLLC谐振转换器并实现宽增益范围，是一项**多学科交叉的系统工程**。其核心挑战在于**高频软开关、磁元件、寄生参数、热管理和复杂控制**之间的**强耦合关系**。成功的关键在于：

-   **精确的器件与寄生参数建模**（特别是磁元件和PCB布局）。
    
-   **采用系统级优化方法**进行参数设计。
    
-   **利用数字控制的灵活性**实现智能调制。
    
-   **贯穿始终的电磁与热协同设计**。
    

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmCic7Hsu67HnwiabhXuq77Wzia7ddesV8NbWjg8zqhEaibSMBF7nvhBDdhSnY9FaAYhNNHSdzIlicjt1g/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCic7Hsu67HnwiabhXuq77WzBMricO9ym6D0azCx9g5N3kjbUcFGlibib2drGJ1LSet2uptRBVgvzy1tw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCic7Hsu67HnwiabhXuq77WzgfL6QqHAvFbZjZxBqEGOtuZDyChrdic1wibPbjkDYVHV61Z249Eichn3w/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCic7Hsu67HnwiabhXuq77WzFXSgoict9XJF1yCaOT2Ut1PsLc81nibIhRBcFzcVCxiafib3j4llSxtjyA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)