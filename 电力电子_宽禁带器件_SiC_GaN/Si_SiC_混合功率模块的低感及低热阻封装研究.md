# Si－SiC 混合功率模块的低感及低热阻封装研究


> 原文地址: [https://mp.weixin.qq.com/s/fymmEtalDBLLH6LVbpxUYw](https://mp.weixin.qq.com/s/fymmEtalDBLLH6LVbpxUYw)

文章来源：湖北民族大学学报( 自然科学版)

作者：周云艳1，鲍 婕1\* ，胡 娟1，周 斌2( 1．黄山学院 机电工程学院，安徽 黄山 245041;2．黄山谷捷股份有限公司，安徽 黄山 245061)

摘要: 功率集成模块相比于传统的离散系统，具有体积小、功率大、集成度高、寄生参数小以及频率特性好等优点，广泛用于工业传动、家用及车用空调、辅助逆变器等场合。论文以包含有整流、制动、逆变多单元结构组成的功率集成模块为例，分析 Si－SiC 混合模块相比于全硅模块的性能优势，提出在低损耗的基础上进一步减小封装寄生电 感和封装结构热阻的优化方案，提升功率集成混合模块的封装性能。通过对母线连接端子的位置和功率芯片的衬 板图形进行优化，可将混合模块逆变电路各相之间的封装寄生电感差异降低 5．2%。进一步应用局部双层衬板结 构以及高导热石墨烯复合材料等，当热流密度达到 100 W/cm2 以上时，模块最高温度降幅可达 10 ℃。论文对 Si－ SiC 混合功率模块的低感及低热阻封装进行研究，为充分发挥 SiC 材料的优势提供了有益的参考。

关键词: 混合功率模块; SiC; 封装; 寄生电感; 热阻  

电能转换效率以及功率密度的提升一直是功率电子行业不断追求的目标，在我国“碳达峰、碳中和”的 双碳战略目标背景下，节能降耗成为各领域产业发展关注的焦点。而变频技术在节能低碳方面的应用 举足轻重，极大地推动了其核心部件即功率模块的快速发展。将多个电路单元集成封装在 1 个模块里，可以组成不同电路拓扑结构的功率集成模块( power integrated module，PIM) ，不仅具有体积优势，在一定程度上也能够改善离散系统中由连线带来的寄生问题。在 PIM 中最主要的功能模块是由绝缘栅双极型晶体管( insulated gate bipolar transistor，IGBT) 和快恢复二极管( fast recovery diode，FＲD) 并联组成的电路单元构成的逆变 模块，一直是以硅基器件作为主流。近年来随着第 3 代宽禁带半导体材料碳化硅( Silicon Carbide，SiC)产业链的快速发展，SiC 功率器件的设计制造成为国内外功率电子行业广泛关注的研究方向。其低导通内阻、高耐压、高开关频率、高耐温等优异性能，开启了使用 SiC 功率器件替代传统硅基器件来提升 PIM 整体性 能的产品研发之路。其中由硅基 IGBT 和 SiC 基二极管组成电路单元构成的混合功率集成模块，是性价比较高的产品方案。

Si－SiC 混合功率集成模块虽然可以突破传统硅基器件的性能极限，但由于材料特性差异，其封装结构、封装材料和工艺都面临新的挑战。SiC 器件开关速度仅为几十纳秒，对功率模块的封装寄生电感极为敏感，需要重点关注低感封装技术。同时由于相同电流等级的 SiC 芯片面积更小，热通量是 Si 芯片的 5～ 10 倍，其 封装热阻就极为关键，需要突破.低热阻封装技术。在低感封装研究中，人们发现，增大互连结构横截面积、减小换流回路的长度、缩短输出端子或增大其宽度都可以有效降低模块的自感。另外通过规划布局，将电流方向相反的导体路径邻近放置，可以实现回路互感对消。在低热阻封装研究中，缩短传热距离、增大传热面积以及提高材料热导率都是有效减小封装结构热阻的方法，如取消金属底板、加装横向高导 热结构、双面散热以增加散热路径等。论文具体研究 Si－SiC 混合 PIM 的封装结构，由于模块是由多电 路单元集成，低感和低热阻的优化方案互相制约，需要统筹设计，提出了封装电感和封装热阻综合性能最优的设计方案并进行验证。

1 混合功率模块的结构分析与测试

1．1 混合功率模块的电路拓扑

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslxp6oJPhG5yh0n4iaUbX7CzVU1mgFuyYILYLOhlal9nmvkBHx5icjNj17iatYoOfRAUs3el9tlic5aGw/640?wx_fmt=png&from=appmsg)

Si－SiC 混合 PIM 主要是面向工业变频驱动、商用暖通空调或电动汽车的辅助逆变器等应用领域，模块由整流、制动、逆变 3 个单元电路构成，如图 1 所示。整流单元由 6 个 Si 二极管构成三相整流桥结构，如图1( a) 所示。制动单元由1 个Si 基 IGBT 和1 个 SiC 基肖特基势垒二极管( Schottky barrier diode，SBD) 串联组成，如图 ，1( b) 所示。逆变单元中每个 Si 基 IGBT和 SiC 基 SBD 并联为 1 组，6 组构成三相桥式逆变电路，如 图 1( c) 所示。

1．2 混合功率集成模块的封装结构

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslxp6oJPhG5yh0n4iaUbX7Czr3ZbwQpvt0fUQD1icrekrF0R7yBae5ich4tXf7AHIzc8Krk6tnY6pIEg/640?wx_fmt=png&from=appmsg)

论文选取的混合功率模块样品电压电流规格为1200V/35A，以 Easy－2B 形式封装。外观和输出端子封装结构如图 2( a) 所示，这类封装的引脚可在网格式的系统里灵活分布，非常适合定制化的引脚排列需求。混合模块内部结构如图 2( b) 所示，由于逆变单元工作时 6 组功率器件发热量较大，模块衬板分配了一半面积用于 ，Si基IGBT ，和 SiC 基 SBD 的排布和散热。相比之下，制动单元区域面积较小，其中 SBD 与逆变单元 的上桥臂共用 1 块衬板，由 P1 端子连接直流母线。

1．3 功率集成模块的性能测试

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslxp6oJPhG5yh0n4iaUbX7CzhBBRKVsvCkV2XcdyFXfZtoALvbCjHVD8ZOArYbqKgDMogqBrueSicicg/640?wx_fmt=png&from=appmsg)

为了对比分析 Si－SiC 混合模块与全硅模块的性能差异，委托中国科学院电工研究所高频场控功率器件 及装置产品质量检验中心，分别在 25、125、175 ℃温度下对 Si－SiC 混合模块和全硅模块 2 种 PIM 的开通和 关断时间、能量以及反向恢复峰值电流和能量进行检测，相关测试结果如图 3 所示。由图 3( a) 可知，混合PIM 的开通损耗和关断损耗相比全硅PIM都大幅下降，SiC基SBD 的反向恢复损耗几乎可以忽略不计，而且Si－SiC 混合 PIM 的开关损耗高温稳定性较好，尤其是开通损耗，几乎不随温度升高而增加。在测试得到的实验数据中选取同相开通损耗及关断损耗进行对比，以 W 相为例，相比于全 Si PIM，Si－SiC 混合 PIM 在室温下开关损耗降低约 27%，125 ℃下开关损耗降低约 41%，175 ℃下开关损耗降低约 47%。图 3( b) 给出的是 Si －SiC 混合模块相比于全硅模块在开通时间、关断时间与反向恢复电流减小的百分比，可见随着温度的提高Si－SiC 混合模块的优势越来越显著。采用 SiC 基 SBD 替换 Si 基快恢复二极管，与 Si 基 IGBT 组成混合功率 集成模块，虽然开关性能不如全 SiC 模块，但已经可以大幅降低模块的开关损耗、开通时间、关断时间与反向 恢复电流，是性价比较高的方案。

2 混合功率模块的封装优化与验证

2．1 低寄生电感研究

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslxp6oJPhG5yh0n4iaUbX7CzRdUkbRkJICj6dGicNzvBPgQKEyBdkGmm84Cxaibp0o1fMlt3JQKByn6Q/640?wx_fmt=png&from=appmsg)

从模块内部布局结构可以得到考虑寄生参数的开关等效电路模型，如图 4 所示。该模型是由 1 个硅基IGBT 和 1 个 SiC 基 SBD 串联组成的单元电路，包括直流母线电压 UDC、驱动电压 UPULSE、直流母线电容 CDC、负载电感 L 以及封装的寄生参数。其中 Cge、Cgc和 Cce分别为 IGBT 电极间的寄生电容; Cd 为 SiC 基 SBD 的寄 生电容; Le、Lc 和 Lg 分别为 IGBT 发射极、集电极和栅极的寄生电感; Ld1和 Ld2是 SBD 两端的寄生电感，可以 看作 1 个电感 Ld( Ld \= Ld1+Ld2 ) ; Ｒg 是栅极驱动电阻。论文只分析模块内部( 不含引脚和直流母线) 的封装寄生电感。

Ld、Lc、Le 以及它们之间的互感构成功率换流回路电感，记为Lloop。在关断过程中，功率换流回路的集电极电流 ic 迅速下降，在寄生电感 Ld、Lc 和 Le 上出现感应电压，从而导致电压 uce的过冲和振荡。该过冲量就是通过 Lloop电感产生的，估算公式如下:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslxp6oJPhG5yh0n4iaUbX7CzbDRjlY8T12UZ2jzwLeeibehoLrw5ibsF9TOycfN5KT6icSaKUDQEUIU9Q/640?wx_fmt=png&from=appmsg)

式( 1) 中 μ0 表示真空磁导率，s 为换流回路面积，d 为导体横截面 积，c 为换流回路周长。从式( 1) 可以看出，改变换流回路的布局，减小面积 s，增大周长 c，都可以减小 Lloop的值。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslxp6oJPhG5yh0n4iaUbX7Cz0IY8Lv0h1DfhEbpYYvgFUq7VZM0gyAhaAmajZlZtibhkgiaOGmUicOp8A/640?wx_fmt=png&from=appmsg)

利用有限元分析方法提取各功率换流回路的寄生电感，因连 接直流母线的端子 P1 位于逆变单元的右边，如图 5( a) 所示，使得逆变电路 U、V、W 三相换流回路路径的长短不同，电感 Lloop差异很大。如表 1 中原始结构的电感值所示，W 相距离 P1 端子最远，换流回路面积最大，电感 Lloop最大，接下来是 V 相，U 相的回路电感 Lloop最小。该差异会造成过冲电压之间的很大差距，从而使得三相电路工作不平衡。

为了平衡逆变电路各相的换流回路电感，改变P1 端子的位置，如图 5( b) 所示，分别移至 V 相附近的 P2 位置和 W 相附近的 P3 位置，寄生电感如 表 1 对应栏所示。综合考虑逆变电路各相电感的改变，将 P1 端子移至 P2 位置优化效果最好，其中各回路电感 Lloop都有一定程度的减小，各相之间的 差异由 24．4%减小到 19．2%，减小了三相电路工作的不平衡性。然而该方案使制动电路的寄生电感明显增加，这将使制动电路的开关性能恶化，因此有必要进一步优化制动单元的封装结构。在图 5( b) 中微调了制动单元中 SBD 的位置，将制动单元 IGBT 的衬板图 形、芯片位置及方向、输出端子排布做了改变。经计算，得到布局优化后的制动电路寄生电感从 22．5 nH 降 到了 16．7 nH，很好地解决了输出端子优化方案带来的问题。

除了上述改变母线输出端子的位置，以及优化制动单元功率芯片衬板图形以外，减小键合线电感也是一 种可行的优化方案。在图 5( b) 中，如果采用上层铜衬板替代电路中功率芯片上表面的键合线，就可以增加互连结构的横截面积，进一步降低各换流回路的寄生电感。

2．2 低热阻研究

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslxp6oJPhG5yh0n4iaUbX7Cz0d5839kaZBUe14wvVvXYqXWuiaZWgF3z4np7OCmxOYwGr5o1CkxKOuw/640?wx_fmt=png&from=appmsg)

热阻是衡量封装水平的一项重要指标，不仅量化了模块内的热传递过程，也表征了模块封装的优化方向。热阻的 大小直接关系到模块的电－热稳定性，因此 Si－SiC 混合功率 集成模块的低热阻设计是一项关键技术。在论文的 Si－SiC混合 PIM 中，功率芯片产生的热量通过芯片下焊料层、覆铜陶瓷衬板( direct bonding copper，DBC) 、衬板下焊料层、AlSiC基板、导热硅脂、散热器，耗散到周围环境中。其热耗散路径如图 6 所示，其中各薄层结构的热阻如式( 2) 所示:

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslxp6oJPhG5yh0n4iaUbX7CzTTice657JvK0HasrOBUEvgJdPGKQYiaodTznWcWlX50QzTF69co6cYgA/640?wx_fmt=png&from=appmsg)

式( 2) 中，h 为材料厚度，k 为材料导热系数，A 为传热面积。可以看出，通过减小结构的厚度或增加结构的导热系数和面积，都可以降低其热阻。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslxp6oJPhG5yh0n4iaUbX7CzLOaesouMo8885c7ticcYDJChwTicAib8a04MpvEdCvbTkF4DdUQPqLib3Q/640?wx_fmt=png&from=appmsg)

利用有限元方法仿真分析Si－SiC混合PIM 工况下的温度分布情况如图 7 所示。其中，将逆变单元中 IGBT 芯片的功耗设置 为 120 W/片，SiC 基 SBD 芯片的功耗设置为 20 W/片，制动单元中 IGBT 芯片的功耗设置为 20 W，SBD的功耗设置为 3 W，整流单元中二极管的功耗设置为 11 W/片，热通量条件设置为强制风冷。模块的最高温度出现在逆变单元的 IGBT 芯片上，由于模块设计时考虑到该单 元功耗较大且分布集中，所以预留了较大的衬板面积即散热空间给逆变单元，却导致制动单元空间狭窄，散热条件较差，因此从仿真计算结果可以看到，制动单元 IGBT 芯片上温度也较高。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslxp6oJPhG5yh0n4iaUbX7CzrXX99QCBmN75ECSefTtDMt6Ol1FfAibs8pBd6FJyBHZEylhicbus3VTA/640?wx_fmt=png&from=appmsg)

在 2．1 节低寄生电感研究中，为了保证制动电路的开关性能而对该单元衬板图形进行了调整。通过对 布局优化的 PIM 仿真计算发现，逆变单元和制动单元的 IGBT 芯片最高温度都略微增大，尤其是制动单元的芯片温度从 74．6 ℃上升至 76．1 ℃，主要是因为布局优化结构中虽然适度增大了制动单元 IGBT 芯片的衬板 面积，但增大程度有限，却使芯片距离发热较为集中的逆变单元更近了，如图 8( a) 所示。如果考虑局部双层衬板的优化方案，采用上层铜衬板替代制动单元中 IGBT 芯片上表面的键合线，一方面可以降低换流回路的 寄生电感，另一方面由于增加了热量的传导路径，也可以减小该部分的热阻，如图 8( b) 所示，制动单元的IGBT芯片温度从 76．1 ℃下降到 74．8 ℃。论文仅在制动单元局部使用了双层衬板方案，如果在逆变单元也同样采用上层铜衬板替代键合线的优化结构，即可以同时实现进一步降低模块寄生电感和模块整体热阻的优化目标。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslxp6oJPhG5yh0n4iaUbX7Cz68tkickBVL3jduJBKup0jffHukMgqPGBspGTaydE0R3pN44LnhibDcQQ/640?wx_fmt=png&from=appmsg)

除了上述的布局优化和双层衬板方案以外，从式( 2) 可以看出，如果想要进一步提升模块的散热效果，可以使用具有高导热特性的材料来降低模块的热阻。石墨烯具有很高的横向热导率，单层悬浮石墨烯的热 导率远高于铜、铝等传统金属散热材料，论文以文献［19－20］中提到的石墨烯复合材料为参考，采用导热系数为 1912 W/( m·K) 的 Cu /石墨烯纳米片( graphene nanoplatelets，GN) 异质结构薄膜代替图 8( b) 中的上层 衬板，并采用导热系数为 8 W/( m·K) 的石墨烯复合材料作为灌封材料。仿真结果表明，制动单元中 IGBT芯片的最高温度从 74．8 ℃进一步降低为 73．3 ℃，证实了高导热石墨烯在改善 PIM 模块热管理中的有效作 用。同时逆变单元和整流单元的最高温度都得到一定程度的下调，随着混合 PIM 热流密度的提高，该优化效果会更加显著，改进结构和原始结构的最高温度随热流密度的变化如图 9 所示。由图 9 可知，制动单元热 流密度逐渐增大时，优化后的封装结构相比 PIM 的原始结构，IGBT 芯片上的最高温度下降幅度越来越大，当热流密度达到 109 W/cm² 以上时，最高温度降幅可达 10 ℃之多。

3 结论

Si－SiC 混合功率集成模块相比全硅模块，常温下开关损耗降低约 27 %，温度升高时，其低损耗优势更加明显，具有广泛的应用前景。封装寄生电感和封装结构热阻都是影响 Si－SiC 混合功率集成模块性能发挥的重要因素，论文从母线连接端子的位置、功率芯片的衬板图形、局部双层衬板结构以及高导热石墨烯复合材料几个方面，对 Si－SiC 混合功率集成模块的封装结构进行逐步优化，将逆变电路各相之间的封装寄生电感差异降低 21．3%，减小了三相电路工作的不平衡性。同时模块封装的热管理结构得到优化，当热流密度达到 100W/cm² 以上时，最高温度降幅可达 10℃，有望进一步提升 Si－SiC 混合功率集成模块的功率等级，扩展其应用范围。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslxp6oJPhG5yh0n4iaUbX7CzcllID0VLRqcRJdAnpXWevfOphghcHxKFzThuFvzVsic6rdD66eupJVw/640?wx_fmt=jpeg&from=appmsg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)