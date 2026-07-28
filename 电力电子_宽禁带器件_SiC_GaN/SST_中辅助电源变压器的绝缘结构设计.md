# SST 中辅助电源变压器的绝缘结构设计


> 原文地址: [https://mp.weixin.qq.com/s/BsYc0bnDXHqbGc\_FhSAdRg](https://mp.weixin.qq.com/s/BsYc0bnDXHqbGc_FhSAdRg)

文章来源：科技创新与应用

作者：马 朋，谢毅聪，张伟强（台达电子企业管理（上海）有限公司台达电力电子研发中心，上海 201209）

摘 要：随着电压等级的提升，用于固态变压器（Solid State Transformer，SST）中进行独立供电的辅助电源变压器的绝缘问题日益突出，若绝缘设计不当，会引发严重局部放电，从而导致绝缘老化失效，影响电气设备正常运行。为此，作者提出一种采用带内金属屏蔽绝缘线与磁环组合的技术方案，它既能均匀化电场分布，增加局部放电水平，又能减小变压器占用体积，提高系统功率密度。通过对比分析所提辅助电源变压器与现有一级辅助电源变压器在电场分布和体积占用方面的特性，验证该文方案在优化电场分布（最大电场值降低 65%）和缩小变压器体积（占用空间体积节省约 1/3）等方面的显著优势。

关键词：固态变压器；绝缘结构；辅助电源；变压器；电场分布

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4ej33wfVW3McaB4qmRXxlqMwGayTKjmFooTUCqcJicAqIJgghy3hEvN3Q/640?wx_fmt=jpeg&from=appmsg)

固态变压器（Solid State Transformer，SST），亦称电力电子变压器 （Power Electronic Transformer，PET），是一种融合电力电子技术与高频变压器的新型电力电子设备，兼具电气隔离、电压变换及功率调节与控制等多重功能优势。SST 的典型应用场景包括交直流混合微电网、电动汽车充电站和数据中心电源等。与传统工频变压器相比，SST 显著提升了系统的性能、效率和可靠性，同时支持多种附加功能。目前，中压大容量级联型固态变压器多采用模块化的输入串联输出并联技术（Input Series Output Parallel，ISOP）。在此框架中，SST 系统的输入端连接中压交流，输出端为低压直流电。系统由多个功率模块级联组成，每个模块包含一个 AC/DC 变换电路和一个提供电气隔离的 DC/DC 变换电路。

辅助电源是确保 SST 成功启动和平稳运行的关键部件。传统设计通常从功率模块内部取电，无须考虑隔离问题，设计简单且经济。然而，这种方法难以满足未来的新增功能需求，例如热插拔操作期间实现系统侧旁路开关供电等。因此，SST 系统需要采用具有中压隔离能力的独立辅助电源，以满足安全性和功能的双重需求。独立辅助电源通常从市电取电，它不仅为功率模块供电，还需同时为显示触摸设备供电，是安全特低电压（Safety Extra-low Voltage，SELV）电路。

随着电压等级的不断提升，为在中压模块与外部辅助电源之间提供有效隔离并确保人身安全，变压器需满足更高的隔离要求。根据 IEC 61800-5-1 标准，SELV电路与高压电路之间需达到保护隔离等级（Pro－tective Separation）。这可通过以下方式实现：

①双重绝缘或加强绝缘；

②基本绝缘外加接地屏蔽；

③限制过电压或过电流的电路设计。

此外，为提高系统的功率密度，要求隔离变压器设计紧凑，尽可能减少体积占用。

为满足上述要求，辅助电源变压器通常采用双重绝缘或基本绝缘外加接地屏蔽的绝缘方式，这对应现有的 2 种主要设计方案。

方案一为普通绝缘线对两级磁环进行串联的设计，其中每一级磁环均为基本绝缘，以形成双重绝缘结构，其示意图如图 1 所示。电路的最左端为 SELV 电路，最右侧为处于不同电压水平的多个高压（HighVoltage，HV）功率模块。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4eaGic2k9YhGJULkicdM157QPCmOLevicTwW0nN5ria7C0bbrzjmT3Ugp7pw/640?wx_fmt=png&from=appmsg)

普通绝缘线的结构如图 1 中插图所示，中间为导电芯线，外部包裹绝缘层，其工作电压等级可达几十千伏。该方案的不足之处包括：①由于采用两级磁环隔离，如图 1 所示，每一级磁环之间（如 l4）及磁环与环境和 SELV 电路之间（比如 l1、l2 和l3）需保留足够的电气间隙和爬电距离，这显著增加了系统的空间占用。②受限于第一级磁环的设计（例如散热需求），第二级允许串联的负载数目较少，因此需要配置多个 SELV 电路以满足供电要求。③两级磁环串联对应两次能量传递，降低了供电效率。

方案二为现有一级辅助电源变压器设计，其特点是低压线与接地金属管共同穿过多个磁环。相比方案一，该方案的隔离级数由两级减少为一级，从而提高了供电效率，减小了体积并减少了零部件数量，其结构如图 2 所示。电路的最左端为 SELV 电路，最右端为级联的 HV 功率模块，中间为磁环隔离部分。接地金属管（铝管）穿过磁环并位于磁环中心位置，初级线穿过接地铝管，构成基本绝缘外加接地金属屏蔽的绝缘结构。初级线的工作电压等级为几十伏。然而，该方案仍存在不足：①磁环灌封工艺限制了磁芯材料的选择，且灌封材料的应力通常会显著增加磁芯损耗，同时不利于磁环散热。②接地铝管暴露于空气中，为满足安规要求，其与高压侧之间（如图 2 中的 l1 所示）需保留较大的电气间隙和爬电距离，进一步增加了空间需求。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4eQC0b3v2IggUNFIKVZTZnQAJEwWr2ZyXicxSnX3o0yiaN7ib9QQdicSB3CQ/640?wx_fmt=png&from=appmsg)

为了同时实现减小辅助电源变压器体积和提高效率的目标，本文提出了一种全新的一级变压器隔离方案：基于带内金属屏蔽绝缘线与磁环组合的技术。本文首先设计了这种新型绝缘结构，随后通过与现有一级辅助电源变压器结构进行对比，系统分析了其电场分布特性和体积占用情况。

1\. 辅助电源变压器的绝缘结构设计

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4eSl7OKY9ROt45N5YKu3qOqCV92jstjJ4WiaOibibhbwIM489GzH3b6CoJw/640?wx_fmt=png&from=appmsg)

图 3 为带内金属屏蔽绝缘线穿过多个磁环窗口的结构设计。磁环通过磁环骨架固定，绝缘线、磁环窗口和磁环骨架成同心结构，并且绝缘线贯穿多个磁环（图中示例为 3 个）及磁环骨架。磁环骨架安装于具有不同电压水平的功率模块的同一侧。相比于现有一级辅助电源变压器，该设计摒弃了灌封处理，从而大幅提高了磁环的散热性能。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4eC5qtFgAXIiaQ9pGeloicCeyUzBKdmjcC0wHwjC50NTUcoLqa8MGxGGKw/640?wx_fmt=png&from=appmsg)

图 4 展示了单个磁环绝缘结构的截面示意图，结构从磁环中心沿径向依次包括：一次侧绕组芯线、固体绝缘层 1、接地屏蔽层、固体绝缘层 2、空气 2、磁环和二次绕组。绝缘线由芯线、固体绝缘层 1、接地屏蔽层及固体绝缘层 2 组成。固体绝缘层 1 用于耐受一次侧绕组芯线相对于接地屏蔽层的电压，该电压一般较低，约为几十伏的电压等级；固体绝缘层 2 可耐受二次侧绕组或磁环相对于接地屏蔽层的电压，该电压为SST 系统的工作电压，最高可达几十千伏。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4eQ9cib9uVPL1XuKJG3Ilz5iaraZ9G6DQHpMJI7y8mU6sa6XQyHskRk78Q/640?wx_fmt=png&from=appmsg)

图 5（a）和（b）分别为现有一级辅助电源变压器和本文设计的辅助电源变压器的结构简化示意图。现有设计的绝缘结构由内向外依次为：芯线、空气 1、接地屏蔽层（接地铝管）、空气 2、固体绝缘层 2 和磁环。而本文设计中，空气 1 被固体绝缘层 1 替代，同时空气 2与固体绝缘层 2 的位置互换。固体绝缘层的材料可选用聚乙烯、聚氨酯或硅橡胶等有机高分子材料，具有优良的绝缘性能。

2\. 变压器绝缘结构的电场分析

2.1 变压器绝缘结构的电场设计准则

辅助电源变压器为同轴结构，其电场分布可通过高斯定理和电场-电压关系描述，基本公式如下

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4eMp2cfMmdhbibyNbu60I1JpiboJnLsvLtAY2WJWdickP56Ox84Mt7IAuBQ/640?wx_fmt=png&from=appmsg)

由此推导出固体绝缘层 2 中的电场表达式为

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4e7wXBOb5iaYhNRyNVRu2t6H5BDAKIiadIRopzS8FCFskk52ibB4uZ4QQTQ/640?wx_fmt=png&from=appmsg)

式（1）—（5）中：λ 为单位长度芯线上的电荷；r0 为接地金属屏蔽的外半径；R 为磁环的内半径；d 为固体绝缘层 2 的厚度；εr1 和 εr2 分别为固体绝缘层 1 和空气的相对介电常数，εr2≈1∶U 为 SST 系统的额定电压。

为了避免局部放电，固体绝缘材料的电场强度不得超过 8 kV/mm，空气电场强度不得超过 2 kV/mm。在空气相对介电常数为 1 的条件下，芯线与固体绝缘层2 界面上的电场 E10 及固体绝缘层 2 与空气 2 界面上的电场 E20 需满足以下条件

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4exrf1OdPYsCicibkUg2oVgN1EWIG85YM7OhPDDY4Md3JwMCMibDMtsgCBg/640?wx_fmt=png&from=appmsg)

2.2 变压器绝缘结构的电场仿真分析

绝缘结构的改变会显著影响电场分布，该部分对现有一级辅助电源变压器和本文设计的辅助电源变压器进行了仿真对比分析。接地金属屏蔽层（或接地铝管）的外半径为 5 mm，固体绝缘层 2 的厚度为 5 mm，磁环内半径为 17 mm，固体绝缘材料的相对介电常数εr 为 3，在外加电压 15 kV 条件下，电场分布如图 6（a）和图 6（b）所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4eCqeyicNQ1Vym9SOWN9HZD8NC6icc879kBkibZLOTps2YdCL3c319Bmnvg/640?wx_fmt=png&from=appmsg)

为了直观比较 2 种绝缘结构中的电场幅值，图 7展示了从圆心沿径向（x 轴）的电场幅值变化曲线。现有一级辅助电源变压器在绝缘结构内侧（接地铝管外表面，横坐标 5 mm）电场强度最大，为 2.9 kV/mm，而在外侧电场强度较小（小于 0.5 kV/mm），电场分布极不均匀。相比之下，本文设计的辅助电源变压器最大电场位于固体绝缘层 2 与空气2 的界面（横坐标 12 mm），为 1.9 kV/mm，内侧电场强度仅为 1.2 kV/mm。本文设计使电场分布更加均匀，最大电场值降低 65%，由2.9 kV/mm 减小至 1.9 kV/mm，大幅提升了变压器的局部放电水平。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4eARwHHI8zMuGk5rVm794spsbQ2xQ4n8ibHkRupcIUibjdh0ERAFIJVAOw/640?wx_fmt=png&from=appmsg)

2.3 变压器占用体积分析

对于 13.8 kV 的中压绝缘系统，安规标准规定的电气间隙和爬电距离分别为 152 mm 和 203 mm。现有一级辅助电源变压器中，接地铝管与高压侧的距离（如图 2 中的 l2） 需至少为 152 mm，加上磁环自身体积，变压器总宽度约 200 mm。

本文设计采用固体绝缘层 2 包覆低压侧芯线，不受上述安规标准限制，磁环和支架总宽度约为130 mm。相比现有设计（包括一次侧绕组、接地铝管、磁环及其灌封材料、磁环骨架），本文设计变压器节省约 1/3 的占用空间，显著提高了辅助电源的功率密度。

3\. 结论

本文提出的带内金属屏蔽绝缘线穿过磁环的结构设计，使辅助电源变压器的电场分布更加均匀，显著提高了局部放电性能。在典型的结构尺寸设计中，变压器中的最大电场值降低了 65%，由 2.9 kV/mm 降至 1.9 kV/mm，优化了绝缘结构的电场分布。

相较于现有的一级辅助电源变压器，本文提出的带金属屏蔽线与磁环组合的方案无须满足高压侧与接地屏蔽层之间的安规距离，从而有效减小了变压器的体积。对于 13.8 kV 电压水平的设计，该方案能够节省约 1/3 的绝缘结构占用空间，提高了 SST 系统的功率密度。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4exiaWlvD9iaR3Xln77DEwQvEZyC6toebHky2QJJ3ndt5B2deGCYt9e7aQ/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4eJOHwdg93En3FgH1SynYeJKMj5hnYChvXbxNWad4zQ8dgsX5dPyI9GA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4e7ic1SwGRzLiaRuXicwOWj9Vtpjibj1FmA5mqibKlOoORorbIgW9pkAutW5g/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnLEanMPFaLdQgtot7ohX4e4Ts9G8IlfMSTbb4oBp1iaHSvmVD8kDUJ3t7z1DU9wIdw3auOQbeGU1g/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)