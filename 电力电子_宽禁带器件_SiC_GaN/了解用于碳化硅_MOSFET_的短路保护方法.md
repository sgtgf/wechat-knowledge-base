# 了解用于碳化硅 MOSFET 的短路保护方法


> 原文地址: [https://mp.weixin.qq.com/s/fxnSbaJyfFMlSS93kv-vWg](https://mp.weixin.qq.com/s/fxnSbaJyfFMlSS93kv-vWg)

文章来源：德州仪器（TI）

碳化硅 (SiC) MOSFET 已成为硅 (Si) IGBT 的潜在替代产品，适用于光伏逆变器、车载和非车载电池充电器、牵引逆变器等各种应用。与 Si IGBT 相比，SiC MOSFET 具有更严格的短路保护要求。为了充分利用 SiC MOSFET 并确保系统稳健运行，需要快速可靠的短路保护电路。本文档将讨论 SiC MOSFET 和 Si IGBT 的不同特性，说明并比较三种短路保护方法，以及总结 SiC MOSFET 的短路保护要求。TI 的 UCC217xx 系列是适用于 IGBT 和 SiC 且具有高级保护功能的单通道隔离式栅极驱动器，可用于各种系统设计，以保护开关免受各种类型的过流和短路故障的影响。出色的快速保护和高抗噪性可提高系统设计的多功能性和系统的稳健性。

要最有效地使用 SiC MOSFET，需要充分了解相关器件特性。SiC MOSFET 和 Si IGBT 具有不同的特性，这对其各自的短路保护方案有影响。

本文档将讨论 SiC MOSFET 和 Si IGBT 的不同特性，说明并比较三种短路保护方法，以 及总结 SiC MOSFET 的短路保护要求。TI 的 UCC217xx 系列是适用于 IGBT 和 SiC 且具有高级保 护功能的单通道隔离式栅极驱动器，可用于各种系统设 计，以保护开关免受各种类型的过流和短路故障的影响。出色的快速保护和高抗噪性可提高系统设计的多功 能性和系统的稳健性。

要最有效地使用 SiC MOSFET，需要充分了解相关器 件特性。SiC MOSFET 和 Si IGBT 具有不同的特性， 这对其各自的短路保护方案有影响。

通过 IGBT 与 SiC MOSFET 的比较结果可以看出， IGBT 具有相似的阻断电压和电流额定值，而 SiC MOSFET 具有更小的芯片面积，因此寄生电容小于 IGBT 并固有的开关速度有所增加。但是，较小的芯片 面积意味着 SiC MOSFET 芯片的散热能力较差。在短 路情况下，浪涌电流会产生大量的热量，如果散热能力 不足，芯片可能会在短时间内被损坏。由于芯片尺寸较 小，SiC MOSFET 的浪涌电流能力低于 IGBT。

SiC MOSFET 和 IGBT 的输出特性也不同。在正常导 通状态期间，IGBT 通常在饱和区域中工作。发生短路 时，集电极电流 IC 增加，并从饱和区域急剧转换到活 动区域。集电极电流会自我限制，并不再受 VCE 的影 响。因此，IGBT 电流和功耗的增加会自我限制。

而在正常导通运行期间，SiC MOSFET 在线性区域工 作。在短路事件期间，SiC MOSFET 会进入饱和区 域。与 IGBT 不同，SiC MOSFET 具有更大的线性区 域。从线性区域到饱和区域的转换发生在 VDS 明显升 高的情况下。漏极电流会随 Vds 的增加而不断增加。器件会在达到转换点之前被损坏。这些特性使得 SiC MOSFET 的短路保护与 IGBT 大不相同。

**短路保护方法比较**

短路保护对于确保系统稳健并充分利用器件非常重要。合格的短路保护电路应能够实现快速检测并关断器件， 而不会发生误触发。我们将分析和比较目前常用的三种 短路保护方案，包括去饱和检测、分流电阻检测方案和senseFET 电流检测方案。图 1 展示了去饱和检测电路。 

  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskHwkkVZpZ0NE6g7waKgukaUnVCkuVHicqF2Jy6AftYczGq1ZYsJhXjJhszMSD6WOHsRyby9GQU2mQ/640?wx_fmt=png&from=appmsg)

该电路由一个电阻器、一个消隐电容器和一个二极管组 成。当器件导通时，电流源为消隐电容器充电并且二极 管导通。在正常工作期间，电容器电压被钳位在器件的 正向电压。发生短路时，电容器电压会快速充电至阈值 电压，从而触发器件关断。电容器充电时间称为消隐时间，计算公式为：

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskHwkkVZpZ0NE6g7waKgukap8HFEuVhibpvSyZdmdfsqXXXoTDMicVPicn5oclOBsIIicPqUyA7YYpH9g/640?wx_fmt=png&from=appmsg)

对于 IGBT，去饱和阈值电压通常设置在转换电压附近，因为之后电流几乎可以受到限制，以便 IGBT 能够承受更长的时间。设计 SiC MOSFET 的去饱和电路时需要更多注意。为 IGBT 设计的消隐时间过长，无法保护 SiC MOSFET。一方面，SiC MOSFET 的转换电压通常非常高，因此无法限制电流。当推荐的短路关断时间小于2μs 时，去饱和阈值电压需要设置为较低的值。另一方面，SiC MOSFET 的快速开关速度会在导 通转换期间产生噪声。短路检测时间应设计得足够长， 以避免误触发，这使得 SiC MOSFET 的去饱和电路设计颇具挑战性。 

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskHwkkVZpZ0NE6g7waKgukafKh9lWDA2IibMA85D1ibEHTXEgfkbaSx7QLf6HVj6XYdzPdW5z1EKWWA/640?wx_fmt=png&from=appmsg)

图 2 展示了分流电阻检测方案。电源环路中串联了一 个小电阻器来检测电流。该方案简单明了，可在任何系 统中灵活采用。为了保证信号精度和检测时间，需要使用高精度电阻器和快速 ADC。该方法的缺点在于功率损耗。在大功率系统中，大电流会在分流电阻器上产生较大的功率损耗。在小功率系统中，需要更大的电阻来 确保检测信号的准确性，这也会在小功率应用中产生损耗并降低效率。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskHwkkVZpZ0NE6g7waKguka0FSf3siadMHuz4OupicxZfA8qicnQvdTFovLzfXHansjcagUvWc8ibggxQ/640?wx_fmt=png&from=appmsg)

  

图 3 展示了 senseFET 电流检测方案。senseFET 通常集成在电源模块中，与主器件并联，以减小器件电流。然后使用精确的分流电阻器测量减小后的电流。由于检测到的电流与器件电流同步，因此检测时间很短。由于 senseFET 集成在电源模块中，寄生电感较小， 因此产生的噪声较低。尽管此方案有许多优势，但仍需要带有 senseFET 的电源模块，这会增加系统成本。

**总结**

SiC MOSFET 有望取代 IGBT，从而实现更紧凑、更高效的系统。SiC MOSFET 的短路保护方案应从以下几个方面进行评估：快速响应时间、低功率损耗、高精 度、高抗噪性和低成本。应努力改善保护电路、栅极驱动器和 PCB 布局，以提高整体性能。

UCC217XX 系列具有出色的过流和短路保护功能。凭借较短的检测时间和故障报告时间，栅极驱动器可以在故障发生后立即关断 IGBT 和 SiC MOSFET 模块，并向隔离式输入侧报告故障。UCC217XX 系列支持上述所有三种检测方案，这使得该驱动器适用于各种系统设计。该驱动器可以针对过流和短路故障提供可靠的保护，并提高系统的稳健性。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)