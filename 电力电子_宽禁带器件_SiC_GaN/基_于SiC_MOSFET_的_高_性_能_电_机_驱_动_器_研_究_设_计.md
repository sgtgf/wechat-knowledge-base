# 基 于SiC MOSFET 的 高 性 能 电 机 驱 动 器 研 究 设 计

原创 鲁 鹏 王永国 SiC碳化硅MOS管及功率模块的应用 2025-06-08 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/CDDGjS9S3jFZ6KKJF6lBWA](https://mp.weixin.qq.com/s/CDDGjS9S3jFZ6KKJF6lBWA)

文章来源：山西电子技术

作者：鲁 鹏，王永国，王瑜嘉，闫 稳( 航空工业西安航空计算技术研究所,陕西 西安 710065)

摘 要:为了降低高空飞艇电推进系统的重量,提高其续航能力，高效率、高功率密度电机驱动器的研究具有重要意义。 从器件选型、电路设计、ＰＣＢ 设计、箱体结构设计等方面进行分析，研究设计了基于宽禁带功率器件的高效率、高功率密度的 １０ｋＷ 电机驱动器样机，并通过实验进行了验证。

关键词:高空飞艇，SiC MOSFET，高性能，电机驱动器

０ 引言

临近空间作为传统的航空和航天的中间领域，有着巨大的战略价值。 目前临近空间飞行器主要集中在高空飞艇，其依靠螺旋桨电推进系统实现悬停和移动， 电推进系统通过采用太阳能/储能电池经过 ＤＣ/ＡＣ 逆变器给电机供电。电机经传动机构或直接驱动螺旋桨运行， 电机驱动器在高空飞艇的应用背景下，使其需要具有高效、轻质运行等特性。 电机驱动器的效率、重量主要取决于功率开关管， 与传统 Ｓｉ 器件相比，以碳化硅( Ｓｉｌｉｃｏｎ Ｃａｒｂｉｄｅ，简称 ＳｉＣ) 和氮化镓( Ｇａｌｌｉｕｍ Ｎｉｔｒｉｄｅ， 简称 ＧａＮ) 为代表的新一代宽禁带半导体功率器件具有更高的开关速度、更低的导通电阻、更大的导热率以及更高的结温下运行能力等优势。 以SiC材料制成的 MOSFET在高效率、高温、高频等方面具有巨大的应用潜力。因此，基于SiC功率器件的电机驱动器将具有高效率、高功率密度等优势。

目前，SiC功率器件的应用多集中在较小功率的电源和功率因数校正适配器等领域， 近十年一些学者和公司才陆续研制了一批基于SiC功率器件的电机驱动器原理样机。 其中，美国北卡罗来纳州立大学电 力 电 子 中 心 研 制 了 基 于SiC MOSFET的６０ｋＷ 电机驱动器。并对 SiC MOSFET和Si IGBT两者进行了全面比较。SiC驱动效率达到 ９９. １％ ，比 ＳｉＩＧＢＴ 电机驱动器提高了 ２ 个百分点。 日本丰田公司研制的基于 SiC器件的驱动器与 Ｓｉ 驱动器相比，体积减小 ８０％ 。 可见，采用SiC功率器件取代电机驱动器中的 Ｓｉ 功率器件能有效提高驱动器效率和功率密度。

１ 基于SiC MOSFET 的电机驱动器选型

１. １ SiC MOSFET率器件选型

电推进系统电机采用的永磁同步电机，其工作转速范围为 ３００ ~ ４００ ｒｐｍ。 母线电压为 ４００ Ｖ，对于额定功率 １０ ｋＷ 的电机驱动器，每个单元的最大连续输出相电流有效值≥２５ Ａ。

考虑到电流波动引起的过电压以及功率管关断时 的 过 电 压， 取 高 于 ２ 倍 的 电 压 裕 量， 因 此SiC MOSFET的实际电压等级计算如下:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm2X37eu8NnVLxqgBXpwbXACY3B3MHkxju1skib0gk5Hn8uWrJPUcuoUURQp6koVWhkL13nSkT7KRQ/640?wx_fmt=png&from=appmsg)

SiC MOSFET的电流等级计算如下:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm2X37eu8NnVLxqgBXpwbXAD30ulgz75mdoaH6XApVt9qEfrSCQ3RGZt4M1pNWe4NiambPYHhnXBZw/640?wx_fmt=png&from=appmsg)

其中，Ｉ０ 为输出相电流有效值，Ｋｉ 为过载能力，选为１. ２。

根据以上条件，选择了 ＣＲＥＥ 公司碳化硅功率器件 Ｃ２Ｍ００２５１２０Ｄ，Ｃ２Ｍ００２５１２０Ｄ 的相关参数信息如表 １ 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm2X37eu8NnVLxqgBXpwbXAdEWyobvyyA7jWx99pSmDCK1jeDYW7dzbociar7PibzbrX02otibK24sRg/640?wx_fmt=png&from=appmsg)

１. ２ 母线电容选择

在直流母线侧需并联支撑电容ꎬ其作用为:

１) 作为能量缓冲，防止在突加负载时直流母线电压出现大幅跌落而导致系统崩溃。

２) 防止来自于母线电容的电压过冲和瞬时过电压对逆变器的影响，抑制直流侧谐波ꎬ提高供电电能质量。

母线电容一般选择电解电容或者薄膜电容。 相近电压和容值等级的电解电容和薄膜电容相比，薄膜电容的尺寸和重量都比电解电容大。 对于高空飞艇，可靠性和安全性是首先需要考虑的。因此选择薄膜电容， 下面从薄膜电容的电压和容值选择两方面来阐述。

１) 电压选择:电容的额定电压选择根据驱动电路直流侧母线电压值决定。 电解电容自身承受的正向电压不超过其额定电压的 １. ２ 倍，薄膜电容可以较长时间承受 １. ５ 倍的额定电压。 因此，在实际应用中，薄膜电容不需要和电解电容一样留有 ２ 倍的量，只需要略大于母线电压即可。

２) 容值计算:容值的确定根据下式所得:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm2X37eu8NnVLxqgBXpwbXAkGicic9ZgCXXmialkcDDKdzu50HtnGibziaC4q0kDUBxCRM6jksAAAOTGgA/640?wx_fmt=png&from=appmsg)

其中，Ｐｍａｘ为驱动器输出的最大功率；η 为逆变器的效率；为载波频率，ｆｓ 为母线电压；Ｕ 为母线电容的纹波电压。

３) 纹波电流: 纹波电流选择计算见文献 ，这里不再阐述。

综 上 所 述， 选 择 了 ＴＤＫ 公 司 的 母 线 电 容Ｂ３２７７８Ｈ５５０６Ｋ０００，其耐压为 ５００ Ｖ，容值为 ５０ μＦ，采用两个并联，实现 １００ μＦ，满足使用要求。

１. ３ 吸收电容的选择

吸收电容可以吸收由于杂散电感引起的尖峰电压，避免功率管的损坏。 选择 Ｃｏｒｎｅｌｌ Ｄｕｂｉｌｉｅｒ 公司的薄膜电容 ９３０Ｃ６Ｐ２２Ｋ － Ｆ， 规 格 ６３０Ｖ/０. ２２ μＦ，其放置在离功率器件管脚尽可能近的位置，提高吸收高频电压的作用。

１. ４ 驱动芯片

驱动电路负责 ＳｉＣ 功率管的驱动和保护。 驱动芯片选择 Ｉｎｆｉｎｅｏｎ 公司的 １ＥＤ０２０Ｉ１２ － Ｆ２， 芯片自带保护电路，满足设计要求， 芯片供电电压为 ５ Ｖ，功率管开通电压 ２０ Ｖ， 关断 － ５ Ｖ。

１. ５ ＤＣ － ＤＣ 隔离电源

ＤＣ － ＤＣ 隔离转换器将 １５ Ｖ 输入电压转换成２０ Ｖ 和 － ５ Ｖ，用于驱动芯片输出端供电使用。选择ｍｕＲａｔａ 公司的 ＭＧＪ２Ｄ１５２００５ＳＣ。

１. ６ 电流传感器

电流传感器负责 Ｕ、Ｖ 相电流检测。 选用 ＬＥＭ的电流传感器 ＣＫＳＲ ２５ － ＮＰ( ＰＣＢ 板上安装)，最大电流测量范围是 ± ８５ Ａ， ＋ ５ Ｖ 供电，带宽 ３００ ｋＨｚ。

２ 基于 SiC MOSFET 的电机驱动器设计

为了满足驱动器的高效率运行，采用了功率器件并联方式，这样可以近一步降低功率器件的导通损耗， 三相逆变桥的连接方式如图 １ 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm2X37eu8NnVLxqgBXpwbXAkrSeXVe3tic9WbDZegHlKMJL7CuBhkFwTficIQ6iccjP74SeYWeAYeQIw/640?wx_fmt=png&from=appmsg)

基于SiC MOSFET的电机驱动器 ＰＣＢ 设计分为驱动板和功率板。 驱动板设计过程中，信号侧和功率侧走线和敷铜间不可避免地存在耦合电容。因此在进行 ＰＣＢ 设计时，应该避免两侧在 ＰＣＢ 不同层之间存在重叠， 驱动芯片下方不宜走线，进行开槽处理，保持两侧具有较大的隔离范围。进一步降低耦合电容， 驱动芯片输出侧的回路面积尽可能小，减小共源极寄生电感。 功率板设计过程中，吸收电容尽可能靠近功率器件引脚。达到吸收电压过冲尖峰的最佳效果。 由于此驱动器用于高压，因此在设计布线过程中，需要考虑爬电距离， 焊接功率器件时，将功率器件引脚尽可能剪短，减小封装寄生电感。

为了提 高 驱动器的功率密度， 驱动器的箱体( 除散热器) 采用碳纤维材料制成。

３ 实验验证

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm2X37eu8NnVLxqgBXpwbXA44hNHFHEscVP8GTqcazLxepFUpqm67OS1zDoFIstQe2U2F5RBa7cGQ/640?wx_fmt=png&from=appmsg)

驱动器测试实验平台如图 ２ 所示。 额定工况下的相电流波形如图 ３ 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm2X37eu8NnVLxqgBXpwbXAW4GLxCt6bib8ortpPcr3LyBRIfUDuU5xbrG1gnic8spQGDDmLeUAHKag/640?wx_fmt=png&from=appmsg)

额定工况下的功率分析仪实验参数如图 ４ 所示。驱动器的输出功率为 １０. ８２ ｋＷ，此时母线电压为 ３９９. ９ Ｖ，母线电流为 ２７. ３ Ａ。因此驱动器效率达９９. １％ 。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsm2X37eu8NnVLxqgBXpwbXA3tVv8WHqjIexib3IVpCoXdib0TWVianQcyhuQ0CnwPNyNjiaS49ibqU3sicA/640?wx_fmt=png&from=appmsg)

SiC MOSFET的电机驱动器重量为 １. ７６ ｋｇ，驱动器的功率密度达 ５. ６８ ｋＷ/ｋｇ。

４ 总结

为了降低高空飞艇电推进系统重量、满足其高效运行。本文从器件选型、原理设计、ＰＣＢ 设计、箱体设计等方面进行分析，阐述了基于SiC MOSFET的高效率、高功率密度的 １０ｋＷ 电机驱动器样机设计。最后通过实验进行了验证，为以后在高空飞艇电推进系统的应用奠定了基础。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskHjBDlpCGJ8vakgP5fQdqEkzM4nJZfIC5QgFfribRYKyjbkqtsIt2eIPXkibANybG66UoupfWrOwVw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&watermark=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskHjBDlpCGJ8vakgP5fQdqEsBrKtVqic7bg0L03u2LcaOD95aUegJVoYxOwib1bEuX4eESgvK7RMrMA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&watermark=1&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskHjBDlpCGJ8vakgP5fQdqECTcGj3ia0RmTNR8afGnIARTia9BmzdfiadGhabibhxVeBEaUFZX5aHdCew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&watermark=1&tp=webp)