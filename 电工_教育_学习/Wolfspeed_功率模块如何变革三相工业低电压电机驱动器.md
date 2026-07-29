# Wolfspeed 功率模块如何变革三相工业低电压电机驱动器

原创 电机新视界 2024-03-09 17:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/tv7OszQyjd6W4\_tYU6ef6Q](https://mp.weixin.qq.com/s/tv7OszQyjd6W4_tYU6ef6Q)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0vE2ZIG5VErUiaic5Uovdb28y7P5QYtqjXS963OUGN1gZticMCCPchusnOMBhEuCvwJ9JdO7pugDP1XA/640?wx_fmt=jpeg&from=appmsg)

  

**

来源：WOLFSPEED

  

**Wolfspeed 功率模块如何变革**

**三相工业低电压电机驱动器**

  

作者：Pranjal Srivastava

  

根据最保守的估计，电机占全球工业用电量的 50% 以上，占全球用电量的 45%。哪怕只是提高一点点工业电机驱动系统的效率，都将极大地影响全球能源消耗，并减少对环境的影响。为了解决全球范围内的能源消耗问题，越来越严格的能效标准不断涌现，这给电力电子设计人员带来了新的挑战。

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZn8iaLh7jWBdQib6xviaVuauTNj36gFhOO874aWUKHIdGfRIxnYcIWvRVzK4Wmdibm3nicslMkrHBqCnrA/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic)

  

Wolfspeed 碳化硅（SiC）为提高工业电机驱动器的效率，提供了出色的解决方案，只需用碳化硅替换传统 IGBT，即可实现 2.4% 甚至更高的效率增益。利用碳化硅进行进一步的重新设计，可以实现驱动器和电机的集成，从而创建更小、更轻的嵌入式工业驱动器。

  

在本文中，我们将探讨 Wolfspeed WolfPACK 功率模块如何将损耗降低高达 50%，同时实现更小、更轻、热稳定性更高的嵌入式 25 kW 三相工业低电压电机驱动器。

  

**采用碳化硅通过更小的散热器实现更高的效率**

  

典型的电机驱动系统由一个 AC-DC（有源前端）级和一个 DC-AC（逆变器）级所组成。在具有 45 kHz 开关频率的六开关有源前端（AFE）的 25 kW 电机驱动系统中，对比 20 kHz 硅开关作为基准测试时，设计人员可以将前端级的效率提高 1.3%。当 Wolfspeed 30 A 额定功率模块与 100 A 额定硅 IGBT 模块（两者均以 8 kHz 开关）进行保守的基准比较时，逆变器也可以实现类似的改进。这两项变化共同带来令人印象深刻的 2.6% 效率提升，整个系统损耗减少 50%，并帮助集成式电机达到 IE4 效率标准，原始系统则仅达到 IE3 标准。

  

采用碳化硅的逆变器最值得关注的改进之一，则是显着减少系统产生的热量，使设计人员能够使用更小的散热器，并设计整体更小、更轻的工业电机驱动系统。

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZn8iaLh7jWBdQib6xviaVuauTNFicJI8Qvdq5CAh2XDVeIibGwrGdoGDhgmde98rT2fb675hqZfB0CKJAg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 1：25 kW 逆变器，Fsw = 8 kHz，碳化硅 MOSFET 散热器减小 77%：0.31 L（1.6℃/W）与1.37 L（0.73℃/W）

  

如上图表明，在具有 0.8 L 散热器的 25 kW 逆变器中，使用 Wolfspeed 碳化硅六管集成 WolfPACK 模块与传统硅 IGBT 模块相比，效率有所提高。随着功率水平的增加，50 A 和 100 A 额定硅 IGBT 的结温升高，导致它们失效，而 Wolfspeed 32 A 碳化硅 MOSFET 则保持稳定，并远低于失效温度阈值。

  

值得注意的是，上述效率提升不仅出现在峰值负载下，也出现在部分负载下。在某些部分负载下，效率提升更高，非常适合这些机器的典型负载曲线。此外，正在测试的碳化硅器件是额定电流较低的部件，最大负载时的结温为 105℃，创造了重要的缓冲裕量以最大幅度地提高了允许的系统能力限制，而 50 A IGBT 模块则明显超出了限制，并且 100 A IGBT 则稍微超出最大的负载限制。这里的“限制”被定义为 150℃，这个最大结温是基于功率模块应用系统中允许的常规要求。

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZn8iaLh7jWBdQib6xviaVuauTNK8dE9R1jDeCeI8IzSTBfxQsT8dcvoRUURcSzibx7Hysao7B12Mt9iblw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 2：25 kW 逆变器，Fsw = 8 kHz，较大的硅 IGBT 散热器：1.37 L（0.7℃/W），较小的碳化硅散热器 0.8 L（0.99℃/W）

  

为了确保系统可行、正常运行和优化，我们使用不同的散热器，将 IGBT 散热器尺寸从 0.8 L 增大到 1.37 L，并将碳化硅散热器尺寸减小 61%，确保提高其结温以减少裕量。与 IGBT 相比，碳化硅解决方案的散热器尺寸减小了77%，尽管进行了这些修改，50 A IGBT 仍然明显高于 150℃ 的温度限制，但我们的 32 A 部件和 100 A IGBT 最终处于 129℃ 左右的相同结温。另外值得注意的是，碳化硅逆变器的效率提高了 1.1%。总之，在三相供电的 25 kW 系统中使用更精简且更优化的碳化硅散热器，整体效率提高了 2.4%，损耗减少了 600 W，同时最初是 IE3 标准的集成电机仍然可达到 IE4 效率标准。

  

**无需额外成本即可将全系统损耗减少高达 50%**

  

碳化硅在工业低电压电机驱动的系统级呈现出巨大的价值，虽然碳化硅器件的前期成本可能超过传统硅 IGBT，但更高的开关频率和更低的损耗，意味着对无源器件和散热器的投资更少。

  

对于 25 kW 系统来说，这种优化的系统可节省高达 605 W，考虑到每年运行 8,200 小时的不同负载曲线，根据截至 2023 年 11 月中国的电费计算，每年可节省 1,297.8 元人民币，并在未来 15 年积累节省约 19,000 元人民币。用碳化硅器件取代 IGBT 的前期成本可能会更高，但当我们考虑整个系统成本时，碳化硅的较高成本可以通过无源器件的减少来抵消，并同时将工业电机驱动端系统的效率提升到新的水平。

  

![](https://mmbiz.qpic.cn/mmbiz_png/pRaJ1XG0AZn8iaLh7jWBdQib6xviaVuauTNU9nOLS4UGiagL2yttkbmWU81Ah5W7YCeyMz1jLSRSr78K0T5FVqKrTw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图 3：25 kW 逆变器，Fsw = 16 kHz，碳化硅 MOSFET 散热器减小 41%：0.80 L（0.99℃/W）对比 1.37 L（0.73℃/W）

  

在图3中，我们进一步支持碳化硅如何在更高的开关频率下实现卓越的性能。在这里，我们将开关频率从 8 kHz 提高到 16 kHz，并使用比同类 IGBT 散热器小 41% 的散热器。借助 Wolfspeed 碳化硅 FM3 六管集成功率模块，我们的效率仍然高于或接近 99%，并且在峰值负载时接近 150℃ 的温度限制。对于 50 A 和 100 A IGBT，由于开关损耗增加，我们分别在 10 kW 和 15 kW 左右开始出现热失效。为了使这些更高额定电流的 IGBT 与 Wolfspeed FM3 碳化硅模块一样有效地运行，设计人员需要使用更大的散热器或更高额定电流的部件。有趣的是，碳化硅在 16 kHz 下的逆变器效率仍然高于 IGBT 在 8 kHz 下的逆变器效率。

  

**结语**

  

总之，用碳化硅替代传统的硅 IGBT，可以在 25 kW 工业低电压电机驱动系统中实现高达 2.6% 的整体效率提升。在整个负载曲线中，可以在更高功率水平下实现高效率改进，从而节省大量能源。由于无源组件和散热器更小，碳化硅还提供了更高的功率密度，并带来整体系统成本和尺寸的优化。此外，碳化硅器件的高结温可能性、改进的散热，以及较低的损耗，使设计人员能够构建更紧凑的系统，从而轻松集成驱动器和电机。

  

  


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0s3XKZR1KtlxFAuIoGYBDeHH3cUQjZhhwP3ibXQ70NSJO9zrLzszLTuWdV18EcNU3gKvQ0G5AfvRMA/640?wx_fmt=png&from=appmsg)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vTicAlmdAM5kmIicsPkDYY96WxUU7Fgeicr3EF8TShjxlP65ccvCvqh45flVSeAdLP2t4dNfPxicjicww/640?wx_fmt=png&from=appmsg)