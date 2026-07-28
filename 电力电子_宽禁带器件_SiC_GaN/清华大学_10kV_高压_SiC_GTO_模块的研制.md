# 清华大学：10kV 高压 SiC GTO 模块的研制


> 原文地址: [https://mp.weixin.qq.com/s/aBxlRJDRwBUDTvg-d9-jsw](https://mp.weixin.qq.com/s/aBxlRJDRwBUDTvg-d9-jsw)

**文章来源：**中国电机工程学报

**作者：**李现兵 1，杨同同 1，姚鹏 1，钟期雨 1，岳瑞峰 1，王燕 1，韩荣刚 2，王亮 2(1．清华大学集成电路学院；2．国网智能电网研究院有限公司)

**摘要：**文中提出一款基于自主设计的尺寸为 8mm  8mm 的10kV 碳化硅 (silicon carbide， SiC) 门极可关断晶闸管(gate-turn-off thyristor，GTO)单芯片封装的焊接式模块。详细介绍 10kV SiC GTO 模块的设计与制造工艺，通过对比裸芯片与封装后模块在 10.5kV 阻断电压下的漏电流，验证模块绝缘设计冗余和封装工艺，对模块的动态、静态、极限过流能力、关断增益等性能进行测试并给出初步测试结果。

**关键词：**SiC；10kV；SiC 门极可关断晶闸管模块；开关时间；极限通流

**0 引言**

一代电力电子器件主导一代电力电子技术，降低电力电子装置系统成本和装置损耗的主要手段是希望拥有更为理想特性的功率半导体器件：拥有更高的阻断电压、更低的导通压降以及更快的开通、关断转换时间和 dv/dt、di/dt 耐受能力\[1\]。目前硅基功率半导体器件的性能在高电压大功率等方面和高温、射线等极端环境条件下已经逼近了材料极限，如高压 IGBT 模块不得不采取大规模芯片并联技术，高压输电领域不得不串联和并联更多模块，使得系统更复杂、损耗加大、可靠性降低、成本提高\[2-3\]。

与传统硅材料相比较，近年来碳化硅(siliconcarbide，SiC)以其 3 倍硅的带宽、10 倍硅的临界击穿场强、2.2 倍的饱和载流子迁移率和 3 倍的热导率等优良的综合物理性能，已经成为第三代宽禁带功率半导体器件的首选材料\[4\]。SiC 半导体器件在650~1700V 低压范围内，主要面向新能源、电动汽车、充电电源等工业和消费类场景，这类器件单体功率小、数量大\[5\]；在高压方面，近年来的主要应用研究热点在电网固态变压器、高压断路器、机车牵引、工业变频及高压脉冲电源等领域，器件的电压等级向 10、20 甚至 30kV 发展，电流等级大部分需求为百安、千安甚至上万安的级别以用于特高压输电领域\[6-10\]。

随着高质量、大尺寸 SiC 衬底与多层厚外延片制备工艺技术的发展，国际上高压 SiC 器件取得了长足的进展，尤其是在阻断电压方面，美国的北卡罗莱那大学和 Cree 公司相继报道了阻断电压超过6.5、10 和 15kV 的 SiC MOSFET\[11-12\]；20kV 以上的双极器件相继实现了7~39kV的PIN二极管\[13-14\]；2015年SiC IGBT的电压电流已经提高到了27.5kV/20A\[15\]。2013 年，CREE 公司将 SiC p-GTO 提高到了 20kV\[16\]，2019 年报道了 15kV SiC n-GTO\[17\]；2017 年报道了 22kV SiC 门极可关断晶闸管(emitter turn-off thyristor，ETO) p-ETO\[18\]。

在国内，2018 年报道了阻断电压为 12kV 的 SiC N 沟道 IGBT\[19\]，2020 年报道了阻断电压达到6.5、10和15kV的SiC MOSFET\[20-21\]。2021 年他们又联合国网智能电网研究院研发了6500V/400A 全 SiC MOSFET 模块和 18kV/12.5ASiC IGBT 芯片，并封装了 18kV/125A SiC IGBT 压接模块\[22\]。

清华大学于 2018 年在国内首次实现了 10kV SiC p-GTO\[23\]，其展现出良好的动、静态性能，芯片尺寸只有 1.6mm  1.6mm，且没有进行封装；在2022 年 2 月又实现了芯片尺寸 5mm  5mm、阻断电压为 12.5kV SiC p-GTO\[24\]。虽然目前能看到国内其他单位也在开展高压碳化硅 GTO 的研究，多是集中在器件和高压终端仿真方面的研究\[25-27\]。

相较于 6.5kV 硅 IGBT，10kV 及以上电压等级SiC GTO 具有低的漏电流、高使用结温、高的开关频率与过电流能力；虽然同等电压等级 SiC IGBT也已经取得了长足的发展，由于栅氧层可靠性问题，目前其运行结温仍然限制在 150℃以内，而 SiC GTO 则不受栅氧可靠性限制，可运行在更高结温，从而可以简化散热系统；同时，相较 SiC MOSFET和 IGBT 还有更低通态电压，具有更低通态损耗，在智能电网用固态变压器、直流断路器、脉冲电源、宇航器等领域都有潜在的技术优势\[28-29\]。

我国在 SiC 衬底、器件制造工艺两个方面与美国、日本和欧洲均有较大的差距。尤其是在高质量栅氧工艺和多层、厚外延层生长技术方面差距更大，因此，需要栅氧工艺的栅控器件大规模生产尚需时日，对于 10kV 及以上必须采用具有多层、厚外延层 SiC 晶圆制造的特高压器件实现难度更大，这已成为制约我国高压大功率碳化硅器件发展的主要技术瓶颈。10kV SiC GTO 器件属于电流控制器件，避开了不成熟的栅氧工艺，避开了碳化硅器件栅氧可靠性在 150℃以内的限制\[30\]这种电流控制器件最有可能实现更高结温的运行温度，因此有可能成为最先实现规模化量产并投入使用的高压器件\[31\]。由于国内缺乏 10kV 以上高压芯片的自由供应，无论是科研机构还是高校，在 10kV 以上高压模块的封装技术研究方面，尤其是对高速开关、高结温、高电流密度、高发热密度的高压碳化硅器件的研究仍然处于起步探索阶段。

本文基于自主研制的碳化硅 GTO 器件\[24\]报道一款阻断电压大于 10kV、芯片大小为 8mm  8mm的单芯片高压 SiC GTO 焊接式封装模块，并对模块的基本性能给出初步测试结果。

**1 10kV SiC GTO 模块封装**

针对本课题组自主研发的 10kV SiC GTO 高压芯片的测试及单芯片封装模块的性能进行了详细的模块设计，主要开展了绝缘、散热、电气结构、寄生参数、机械结构以及模块可靠性等几个方面的工作。本文介绍了该模块的主要设计技术参数和电气性能测试结果，同时也重点验证模块的高压绝缘设计及绝缘工艺，电气模型与热模拟将专文予以介绍。

模块封装采用尺寸为 8mm  8mm 的 10kV SiC GTO 芯片，芯片及双面陶瓷覆铜板的电气布局及尺寸如图 1 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGdzC0swE6xKJdyAMDuIXogtEmIyapm4OBjUBC6iatjXwyfpseD5rialKg/640?wx_fmt=png&from=appmsg)

模块采用了成熟焊接模块的热设计，结温 175℃壳温 80℃。考虑到焊接式封装芯片为单面散热，不存在多芯片并联芯片热分布集中问题，模块采用了高导热的氮化铝陶瓷覆铜板实现电气连接、绝缘与散热结构，基板采用了 4mm 薄型镀镍紫铜板预弯反变形结构，以纠正焊接热应力导致的中间拱起，并减少散热距离，满足单芯片小电流模块封装要求，后续大功率的多芯片并联需采用压接式双面散热。

陶瓷覆铜板为氮化铝直接覆铜(direct bonging copper，DBC)，表面电镀镍并钝化提高可焊性，具体尺寸如图 1 所示，芯片焊盘部位尺寸为8.2mm  18mm，预留后续双芯片并联封装空间。DBC 电气连接端子间隙预留 2mm 宽度，灌注硅凝胶或者硅橡胶(绝缘耐压 24kV/mm)，按照 15kV 绝缘条件至少两倍的绝缘冗余。覆铜层距离氮化铝边缘2.5mm，氮化铝背部金属距离边缘2.5mm，设计绝缘宽度5mm，以给出足够的焊料溢出距离带来的绝缘风险，灌封硅凝胶后的有效绝缘距离不低于3mm。底板尺寸为 48mm  80mm  4mm，采用碳化硅铝板或紫铜板为基板，其中碳化硅铝板用以进行后续的高温性能测试，紫铜底板用于本次常规性能测试。

绝缘管壳根据国标 GB/T 16935.1—2008《低压系统内设备的绝缘配合 第 1 部分 原理、要求和试验》中规定的 II 类污秽标准进行设计，电气间隙绝缘距离按照 2000 米海拔以内，交流非均匀电场条件下 12.7kV 时电气间隙 30mm 设计。一类污秽条件下最小爬电距离不低于 71mm，二类污秽条件下爬电距离不低于 63mm。由于模块的外绝缘与引出端子长度在设计上存在协调要求，为了尽可能的降低端子带来的寄生电感，在不影响模块外绝缘爬电距离的情况下，设计时尽可能的缩短端子长度，外绝缘伞裙的爬电设计距离为 76.5mm，端子间爬电距离为 71mm。内绝缘采用灌封硅凝胶或者耐 300℃高温硅橡胶，灌胶量可完全阻断模块内部端子之间的沿面放电。端子高度为 19.5mm，绝缘管壳高度为 23mm，模块总厚为 27mm，端子长度尽可能压缩到封装工艺所能允许的极限高度，模块总体尺寸为 80mm  52mm  27mm。模块封装设计原理如图 2(a)、(b)所示，图 2(c)为实物图。模块封装采用钎焊焊接工艺，芯片采用 295℃锡铅高温软钎料钎焊，端子及 DBC 与底板的焊接采用 220℃锡银低温软钎料二次钎焊。管壳采用耐 300℃高温的聚醚醚酮(PEEK)材料，采用可长期耐温 250℃胶粘接后进行灌胶，分两次灌胶与脱气。第一次灌胶量覆盖键合线，1~10Pa 的真空脱气 15min；第二次灌胶量淹没阴极与阳极端子隔离墙，并预留排气空间，确保脱气顺利，然后在 1~10Pa 真空度下脱气 15min；硅凝胶固化工艺根据所选型号要求的温度进行固化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaG7EjZS516J3GGBEbg0OPghx0qdNloibqJkDmUjYZuCWgTuvFEJibw6RhA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGFBXJaic9hp4RHmBfFAnAY7LUbFjAibh5SZtyaDxgtDU0zDLqt9yQicdFA/640?wx_fmt=png&from=appmsg)

本文对比测试了同一芯片在 10.5kV 下封装前后的漏电以检测模块封装的外绝缘与内绝缘情况。测试结果表明，10.5kV 漏电流 0.5A 的芯片在封装成模块后，漏电流前后并无明显变化。说明模块的内外绝缘没有漏电流，绝缘设计有足够的冗余。

**2 10kV SiC GTO 模块的静态特性**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGCASpzteFiaYOqx00quYZhYys8ZBta9nrlaibTfKjdicSvraZp2nSxia4Ag/640?wx_fmt=png&from=appmsg)

为了测试 10kV SiC GTO 模块的正向阻断性能，本文搭建了阻断测试装置，其主要由可调节高压直流源、限流电阻、电流表、示波器及被测器件组成。其中可调节高压直流源为 220V 调压器连接一个升压变压器，然后再进行桥式整流和电容滤波，测试电路原理见图3，搭建的阻断测试电路见图4。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGdlSTKW1J6G5xyIlj9GuXwYZ3ibsdJibINaY3wfUNdswZM1KFibj0WNIJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGTAUpMcQzrBs1tIHEicEmykXNibGssibTEexiccoEibiaq11ncQb9ybPaAUFA/640?wx_fmt=png&from=appmsg)

将模块的门极接地，阴极加负 10.5kV 电压，测试模块的漏电流。表 1 为阻断电压 10.5kV 条件下一组模块的漏电流，测试结果表明，所研制的碳化硅GTO 模块漏电流均小于 40A。由于芯片外延片与工艺的不均匀问题，芯片漏电流还存在较大的分散性。通过人工间断采集数据，图 5 为序列号尾号为 50 号的模块每 2kV 一个记录点的正向阻断曲线。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGtOqvfqnr5KeC0OPMb7Qx7FF1p3HuVL6r8ibhKD91iccTuwhnHoicMPxEw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGLZicFrhYcrYKhE6Fdgnqrm8NTslpwcT4G7KMDDfCx4JpEzDwHeZeQhg/640?wx_fmt=png&from=appmsg)

采用北京博电(PONOVO)型号为 PST6747A 的功率半导体器件静态参数测试分析系统(见图 6)对10kV SiC GTO 模块的正向导通特性进行了测试，该系统具有优异的宽电压和电流测量能力。脉冲测试电流的宽度为 200s，脉冲间隔为 800s，在无散热、限流 40A 的条件下，测试得到如图 7 所示的典型正向导通特性曲线。由图可知，室温下正向导通电流为 40A 时，器件的正向导通压降为 5.7V。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGsBKxZjhic9wNOTxb0VwElqYcN79J52wV4ibGzQiamLemQoMPzd5y0xt6Q/640?wx_fmt=png&from=appmsg)

**3 10kV SiC GTO 模块的动态特性**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGJdfYVdicL9atbVNXD0eNibPSZwxnHEBM3uzkCdMhhRYepdWnOzWMzzVg/640?wx_fmt=png&from=appmsg)

为了测试 10kV SiC GTO 的动态特性，采用如图 8 所示的电路图，搭建的测试电路见图 9。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGfWG0fbicgYhL3taKgBHhic7cia51pMwroX60AuyUDZoaXqbeLgZNwWsBA/640?wx_fmt=png&from=appmsg)

本实验采用自主搭建的动态测试电路，通过控制门极电流 IG的方向来控制 10kV SiC GTO 模块的开通和关断，通过控制15~10V 电压源的正负控制Rg 的电流的方向，通过手工开通电压源脉冲触发信号，获得的一组典型的被测器件独立的开通和关断波形，分别如图 10、11 所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGOffsrALP8PLlXYKV8zquibP7OXdHVHQzwL3eRYT4ofXKkZ7RMWb8dVw/640?wx_fmt=png&from=appmsg)

图 10 为 10kV SiC GTO 模块的一组 1000V 母线电压 5A 电流的一个典型开通波形，由于电路存在寄生电感，IG 存在电流波动现象，IAK 同时也有一个波动；随着 IG逐渐稳定后，阴极电流 IAK逐渐上升到 5A，母线电压 VAK 迅速下降，短暂震荡后稳定到通态导通压降，GTO 模块从正向阻断状态转换为正向导通状态。由图 10 可知，上升时间约为1.45s(最大值的 10%~90%)。计算得到的 di/dt 约为3.44A/s，电压变化率 dV/dt 约为 14.3kV/s。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGB2UgQpKWlbGUR3ZgdZ0ArqAq0eiczYPuEZiaCS1NZZC7G7xlhIqXwIEQ/640?wx_fmt=png&from=appmsg)

图 11 为 10kV SiC GTO 模块在 1000V 母线电压下的一组典型关断波形，由图可知，GTO 模块在关断过程中存在典型的电流拖尾现象。IG由 0 上升到 5A 后，IAK同时开始缓慢下降，关断过程开始，同时母线电压 VAK逐渐上升；当 IAK 下降到 1.6A 左右时，VAK上升到接近母线电压 1000V，GTO 模块从正向开通状态转换为正向阻断状态，IAK 下降到0A，关断过程结束。

由图 11 还可知，模块电流的下降时间约为4.73s，计算得到的 di/dt 约为 1A/s，电压变化率dV/dt 约为 211V/s，模块的关断拖尾时间较开通过程长。

**4 10kV SiC GTO 模块的关断增益**

碳化硅 GTO 的关断增益测试电路和图 6 类似。测试时，将阳极和阴极电压设置为 70V，限流电阻为 100。碳化硅 GTO 的关断增益计算方法为关断时的阳极和阴极之间的电流 IAK除以门极电流 IGA。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGaZGDlW9u63ucZhFm1GE29sqjkSqpGagjNFLnhoibuT5NsUEs0Sb0Xtg/640?wx_fmt=png&from=appmsg)

图 12 为模块关断增益测试的波形图，由图中测得的阳极和阴极之间的电流 IAK 及门极电流 IGA进行计算，这款 10kV SiC GTO 模块在较低的电压条件下，计算得到的关断增益为 2.53。  

**5 10kV SiC GTO 模块极限通流能力**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmCricB5dPe8EibCZJWHW4eaGdSicA35RzMDL81Xw0Okv7eQz9n5NXria1b8ibFDWO7VhloC0UnTz4xwxg/640?wx_fmt=png&from=appmsg)

采用图 6 中所示北京博电(PONOVO)型号为PST6747A 的功率半导体器件静态参数测试分析系统对上述模块的脉冲过电流能力进行测试。受测试设备最大为1500A 测试能力的限制，采用200s 的脉冲宽度，在无散热条件下，模块的极限通流测试到 1450A，在此处的导通压降增加至15.8V，待后续设备升级且模块增加冷却后，还有望测得更大极限脉冲过电流，如图13 所示。

**6 结论**

本文报道了一款采用自主设计并流片制造出的阻断电压为10kV、芯片面积为8  8mm 的SiC GTO 单芯片封装功率模块及其初步检测结果。对模块进行10.5kV 的阻断耐压测试时，模块的漏电流与芯片的漏电流一致，说明模块的外绝缘和内绝缘无漏电，模块封装满足设计要求。对模块的动、静态性能测试表明，研制的10kV SiC GTO 模块具有较为优越的静态、动态及耐过流能力。该模块可望用于高压开关、脉冲电源、变频装置、断路器及配电网用固态变压器的前期应用研究。同时也为后续开展 10kV/1000A 及以上电流等级SiC GTO 模块的封装奠定一定基础。

参考文献  

\[1\] 盛况，郭清，张军明，等．碳化硅电力电子器件在电力系统的应用展望\[J\]．中国电机工程学报，2010，32(30)：1-7．

\[2\] SANG Ling，ZHANG Wenting，AN Yunlai，et al．Development of high-voltage SiC power electronic devices\[C\]//Proceedings of the 2021 18th China International Forum on Solid State Lighting & 2021 7th International Forum on Wide Bandgap Semiconductors(SSLChina：IFWS)．Shenzhen：IEEE，2021：17-24．

\[3\] VAN WYK J D．Power electronics technology at the dawn of a new century-past achievements and future expectations\[C\]//Proceedings of the Third International Power Electronics and Motion Control Conference．Beijing：IEEE，2000：9-20．

\[4\] BHATNAGAR M，BALIGA B J．Comparison of 6H-SiC，3C-SiC，and Si for power devices\[J\]．IEEE Transactions on Electron Devices，1993，40(3)：645-655．

\[5\] LEE H，SMET V，TUMMALA R．A review of SiC power module packaging technologies：challenges，advances，and emerging issues\[J\]．IEEE Journal of Emerging and Selected Topics in Power Electronics，2020，8(1)：239-255．

\[6\] 温家良，葛俊，潘艳，等．直流电网用电力电子器件发展与展望\[J\]．电网技术，2016，40(3)：663-669．

\[7\] LIU Zhehong，GAO Liying，YU jun，et al．R & D ideas of 1000kV UHVDC transmission technology \[J\] ．Proceedings of the CSEE，2009，29(22)：76-82．

\[8\] JACOBS K，JOHANNESSON D，NORRGA S，et al．MMC converter cells employing ultrahigh-voltage SiC bipolar power semiconductors\[C\]//Proceedings of the 19th European Conference on Power Electronics and Applications (EPE ECCE Europe)．Warsaw：IEEE，2017：P.1-10．

\[9\] WANG Jun，SHUAI Zhikang，SHEN J．Feasibility of high voltage SiC thyristor in HVDC transmission\[C\]//Proceedings of 2014 IEEE PES Asia-Pacific Power and Energy Engineering Conference (IEEE PES APPEEC)．Hong Kong，China：IEEE，2014：1-4．

\[10\] ZHANG Liqi，WOODLEY R，SONG Xiaoqing，et al．High current medium voltage solid state circuit breaker using paralleled 15kV SiC ETO\[C\]//Proceedings of 2018 IEEE Applied Power Electronics Conference and Exposition (APEC) ． San Antonio ： IEEE ， 2018 ：1706-1709．

\[11\] WANG Xiaokun，COOPER J A．High-voltage n-channel IGBTs on free-standing 4H-SiC epilayers\[J\] ． IEEE Transactions on Electron Devices，2010，57(2)：511-515．

\[12\] PALA V，BRUNT E V，CHENG Lin，et al．10kV and 15kV silicon carbide power MOSFETs for next-generationenergy conversion and transmission systems\[C\]//Proceedings of 2014 IEEE Energy Conversion Congress and Exposition (ECCE)．Pittsburgh：IEEE，2014：449-454．

\[13\] KAJI N，NIWA H，SUDA J，et al．Ultrahigh-voltage SiC p-i-n diodes with improved forward characteristics \[J\]．IEEE Transactions on Electron Devices，2015，62(2)：374-381．

\[14\] KENJI FUKUDA K，OKAMOTO D，OKAMOTO M，et al．Development of ultrahigh-voltage SiC devices \[J\]．IEEE Transactions on Electron Devices，2015，62(2)：396-404．

\[15\] VAN BRUNT E，CHENG Lin，O’LOUGHLIN M J，et al．27kV，20 a 4H-SiC n-IGBTs\[J\]．Materials Science Forum，2015，821-823：847-850．

\[16\] CHENG L，AGARWAL A K，CAPELL C，et al．20kV，2cm2，4H-SiC gate turn-off thyristors for advanced pulsed power applications\[C\]//Proceedings of the 2013 19th IEEE Pulsed Power Conference (PPC)．San Francisco：IEEE，2013：1-4．

\[17\] KIM M，TSOI T，FORBES J，et al．Analysis of a new 15kV SiC n-GTO under pulsed power applications\[C\]//Proceedings of 2019 IEEE Pulsed Power & Plasma Science (PPPS)．Orlando：IEEE，2019：1-4．

\[18\] SONG Ziaoqing，HUANG A Q，LEE M C，et al． Theoretical and experimental study of 22kV SiC emitter turn-off (ETO) thyristor\[J\]．IEEE Transactions on Power Electronics，2017，32(8)：6381-6393．

\[19\] 杨同同，陶永洪，杨晓磊，等．12kV 4H-SiC N 沟道 IGBT的设计与实现\[J\]．固体电子学研究与进展，2018，38(5)：311-315，323．

\[20\] 柏松，李士颜，费晨曦，等．新一代 SiC 功率 MOSFET器件研究进展\[J\]．人工晶体学报，2020，49(11)：2122-2127．

\[21\] YANG Xiaolei，LI Shiyan，LIU Hao，et al．Low Ron，sp．diff and ultra-high voltage 4H-SiC n-channel IGBTs with carrier lifetime enhancement process\[C\]//Proceedings of the 2020 17th China International Forum on Solid State Lighting & 2020 International Forum on Wide Bandgap Semiconductors China (SSLChina：IFWS)．Shenzhen：IEEE，2020：42-44．

\[22\] DU Yujie，LI Cui，TANG Xinling，et al．Fabrication and dynamic switching characteristics of 6.5kV400A SiC MOSFET module\[C\]//Proceedings of the 2020 17th China International Forum on Solid State Lighting & 2020 International Forum on Wide Bandgap Semiconductors China (SSLChina：IFWS)．Shenzhen：IEEE，2020：67-70．

\[23\] ZHOU Caineng，YUE Ruifeng，WANG Yan，et al．10kV 4H-SiC gate turn-OFF thyristors with space-modulated buffer trench three-step JTE\[J\]．IEEE Electron Device Letters，2018，39(8)：1199-1202．

\[24\] YANG Tongtong，LI Xianbing，WANG Yan，et al．12.5kV SiC gate turn off thyristor with trench-modulated JTE structure\[J\]．IEEE Transactions on Electron Devices，2022，69(3)：1258-1264．

\[25\] DING Yang，YUE Ruifeng，ZHANG Li，et al．Two-mesa，guard rings assisted two-zone JTE for ultrahigh-voltage( 10kV) 4H-SiC P-I-N diodes\[C\]//Proceedings of the

2014 12th IEEE International Conference on Solid-State and Integrated Circuit Technology (ICSICT)．Guilin：IEEE，2014：1-3．

\[26\] ZOU Xiao，YUE Ruifeng，WANG Yan．Etched junction   termination extension with floating guard rings and middle rings for ultrahigh-voltage 4H-SiC PiN diodes\[C\]//Proceedings of 2016 IEEE International Conference onElectron Devices and Solid-State Circuits (EDSSC)．Hong Kong，China：IEEE，2016：418-421．

\[27\] LIANG Shiwei，GUO Jiaqi，LIU Hangzhi，et al．Evaluation of high-voltage 4H-SiC gate turn-off thyristor for pulsed power application\[C\]//Proceedings of the 2021IEEE 1st International Power Electronics and Application Symposium (PEAS)．Shanghai：IEEE，2021：1-4，DOI：10.1109/PEAS53589.2021.9628884．

\[28\] XU Xingliang，ZHOU Kun，ZHANG Lin，et al．High-voltage 4H-SiC GTO thyristor with multiple floating zone junction termination extension\[C\]// Proceedings of the 2018 1st Workshop on Wide Bandgap Power Devices and Applications in Asia (WiPDA Asia)．Xi'an：IEEE，2018：149-152．

\[29\] JOHANNESSON D，NAWAZ M，NORRGA S，et al．Evaluation of ultrahigh-voltage 4H-SiC gate turn-OFF thyristors and insulated-gate bipolar transistors for high-power applications\[J\]．IEEE Transactions on PowerElectronics，2022，37(4)：4133-4147．

\[30\] HU Boxue，LYU Xintong，XING Diang，et al．A survey on recent advances of medium voltage silicon carbide power devices\[C\]//Proceedings of 2018 IEEE Energy Conversion Congress and Exposition (ECCE)．Portland：IEEE，2018：2420-2427．

\[31\] CHENG Lin，AGARWAL A，O'LOUGHLIN M，et al．Advanced silicon carbide gate turn-off thyristor for energy conversion and power grid applications\[C\]/ /Proceedings of 2012 IEEE Energy Conversion Congress and Exposition (ECCE)．Raleigh：IEEE，2012：2249-2252．

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)