# SiC MOSFET和Si IGBT的对比研究

原创 秦海鸿 王丹 张英 SiC碳化硅MOS管及功率模块的应用 2024-12-24 12:15 广东

> 原文地址: [https://mp.weixin.qq.com/s/ieWAxhUolECzAvFaQ9wvgw](https://mp.weixin.qq.com/s/ieWAxhUolECzAvFaQ9wvgw)

文章来源：中国科技论文在线

作者：秦海鸿，王丹，张英，付大丰，徐华娟(南京航空航天大学自动化学院，南京，211106) 

摘 要 ：SiC器件具有电压定额高、导通损耗小、开关损耗小和漏电流低的特点，但其电流定额仍然有限，为了满足大功率场合的需求，可以将SiC MOSFET和Si IGBT进行混合并联。首先通过实验对比了SiC MOSFET和Si IGBT的输出特性和开关特性，并研究了不同因素对器件开关特性的影响，讨论了混合并联中需解决的问题，为SiC MOSFET和Si  IGBT的 混合并联研究提供了一定的基础。 

关键词：电力电子与电力传动；SiC MOSFET;IGBT;特性对比

0\. 引言 

近年来对于宽禁带器件的研究越来越深入，基于SiC ,GaN等材料的宽禁带器件具有电压定额高、导通损耗小、开关损耗小和漏电流低的特点。这些优点使得宽禁带器件适用于低损耗、高频率和高温的应用场合。SiC器件采用的垂直沟道结构使其具有相对较高的电流定额，更加适用于高功率应用场合。然而，SiC MOSFET在电力电子系统中的广泛应用仍面临着很多挑战，其中昂贵的价格就是一个很重要的因素。

 基于Si 器件的MOSFET和肖特基二极管由于自身材料的限制，其耐压达不到1200V,而SiC 器件甚至可以达到6.5kV 的电压定额。在1.2V~6.5kV的电压范围内，能够和SiC MOSFET、SiC SBD达到同等电压等级的就只有Si  IGBT,但Si  IGBT关断过程中存在着严重的电流拖尾现象，会带来较大的开关损耗。并且，目前SiC MOSFET无论是单管还是模块，其电流定额与Si IGBT均有较大差距，为了满足大功率场合的应用需求，需要并联使用以扩大电流处理能力，但由于受制造工艺水平限制，现阶段的SiC  MOSFET商用产品在导通电阻、开启阈值电压、寄生电容等参数上存在较大的参数分散性，会引起并联器件均流问题，尤其是动态过程的均流问题，器件的不均流将导致器件温升的差异，可能引起器件的失效。

 文献\[4-7\]研究了600V电压等级以下的应用场合中将Si IGBT和Si MOSFET进行组合，将IGBT的低导通损耗和Si MOSFET的低开关损耗优势相结合。如果进一步将SiC MOSFET 和SiIGBT相结合，则能够满足更高电压的应用场合。不同类型器件并联在Si MOSFET/Si IGBT并联中已有应用，但在SiC/Si 器件混合并联中的研究仍较少。若利用Si  IGBT大电流下的导通特性优势和SiC MOSFET开关特性优势，则能充分发挥器件优势形成互补，不仅可以扩容而且有利于提高变换器全负载范围的性能，并且与仅采用SiC MOSFET器件相比可以降低变换器的成本。

 为全面分析SiC MOSFET 和Si IGBT的器件特性，为SiC MOSFET和Si  IGBT的混合并联研究提供技术支撑，本文对Wolfspeed公可1200V/19A SiC MOSFET (C2M0160120D)和IXYS公司1200V/20A Si IGBT (IXA12IF1200HB) 进行对比研究，对比了开关特性、输 出特性，并在全桥变换器中进行了损耗的分析对比。

1\. 输出特性对比

用于对比的器件的主要参数如表1所示，图1为输出特性测试电路。SiC MOSFET的驱动电压设置为+20V/-2V，Si IGBT的驱动电压设置为+15V/-5V，驱动电阻RG均设置为10Ω。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bZNrl8YJ2zfrXSO0cj4H7bg59O3MvOa9SvNg1UAqgnlNpk3C3GVlDSQ/640?wx_fmt=png&from=appmsg)

SiC MOSFET和Si IGBT的输出特性测试曲线如图2所示。因SiC MOSFET的跨导较小，其饱和区和线性区的拐点没有Si IGBT清晰。SiC MOSFET的导通压降随着电流的增大逐渐上升，而Si IGBT的导通压降需要达到一定值时，Si IGBT才能够开始导通。在负载电流小于10A时，SiC MOSFET的导通压降比Si IGBT低；在负载电流大于10A时时，SiC MOSFET的导通压降比Si IGBT高，若将SiC MOSFET和Si IGBT并联使用，则可以根据负载电流大小动态调整导通的功率器件，以获得全负载范围内的最低导通损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bWdXHFrh3L22uaqtagwhPDgQbyO2B3Nnt8BXicCkNwuZU6Ye3PjuDseQ/640?wx_fmt=png&from=appmsg)

为研究驱动电压和结温对SiC MOSFET输出特性的影响，实验中在+20V、+18V、+15V 的驱动电压下，在结温为25℃、50℃、75℃、100℃和125℃下对SiC MOSFET的输出特性进行了测试，同时测试了不同结温下Si IGBT的输出特性。  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bvH0icVWDwNS3OciaaicN1t1lN4orR6LTsnN9U7kZiagnL19LHd0XVwU4pA/640?wx_fmt=png&from=appmsg)

图4给出了+18V驱动电压下，SiC MOSFET在不同温度下的输出特性曲线，可以看到，随着温度的升高，导通相同的负载电流时，器件的导通压降上升，即导通电阻增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bibsBNsCy6JBp0kYRT3RachaFgbyX3hvO8JVWXbnPsXjSq7wSor9gq6A/640?wx_fmt=png&from=appmsg)

图5给出了常温下SiC MOSFET在不同驱动电压下的输出特性曲线，可以看到，驱动电压升高，导通相同的负载电流时，器件的导通压降下降，即导通电阻比较小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bYcN4TcM8KHnJx9nGLicL6UkicFlQrpZF3IibfRpQme3A89B38numxzpeA/640?wx_fmt=png&from=appmsg)

图6给出了在导通10A负载电流时，SiC MOSFET的导通电阻随温度的变化，在+20V驱动电压下，从25℃上升到125℃,SiC  MOSFET的导通电阻增加为25℃时的160%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bE9oVDGNUgDAMpCynaXvDbkibDAeiaINJUhYB1t4U6EKLO69ASsTASKPg/640?wx_fmt=png&from=appmsg)

图7给出了+15V驱动电压下，Si IGBT在不同温度下的输出特性曲线，可以看到，随着温度的升高，导通相同的负载电流时，器件的导通压降上升，即导通电阻增大。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999b1xJAQKMauB7VKHPKukA56jW9e5n0AGJhttL5HwiatepauSPib3IzXYUA/640?wx_fmt=png&from=appmsg)

图8给出 了在导通10A负载电流时，Si  IGBT的导通电阻随温度的变化，从25℃上升到125℃,Si  IGBT 的导通电阻增加为25℃时的120%。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bCxewv6l8QV8t5qNzKDkpy3VSFUUW7cnckZCRyBsuGhLYgRQ1brnpRA/640?wx_fmt=png&from=appmsg)

通过上述对比可以看到，Si IGBT相比SiC MOSFET而言，导通电阻随温度的升高变化较小，具有较高的温度稳定性，这与器件本身导通原理有关。因此，在温度升高的情况下， SiC MOSFET和Si IGBT的输出特性曲线相交点的电流值更小。

2 . 开关特性对比

开关特性的测试采用双脉冲电路，其原理图如图9所示。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bTsmF7NxguJscnKZZRyStFqcor01wGHBIwuGiafENCCibwefLic0ibTu9oQ/640?wx_fmt=png&from=appmsg)

二极管D采用SiC肖特基二极管SCS210KG。为全面对比SiC MOSFET和Si   IGBT的动态特性，本文在多种工况下对开关特性进行了测试。其中，直流母线电压Vpc分别为100V 、200V 、300V 、400V 、500V 、 600V,  负载电流分别取为5A 、10A 、15A 、20A。测试中，利用示波器获得器件的开关过程波形，测量开通关断期间电压电流的上升下降时间，计算开通、关断损耗。

图10给出了室温时600V 输入电压下，SiC MOSFET和Si IGBT的开关特性测试结果，驱动电阻均设置为10Ω,可以看到在相同的负载电流下，SiC MOSFET的开关速度比Si IGBT有着明显优势。图10(d) 中 Si IGBT的关断过程中电流下降时间较长主要是由于其关断过程中的电流拖尾现象。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bo2MOMKad2XQPiaD2icDJBKB2qabzoe2pDg4eq7jBaT5yvG6yk3ibABp4w/640?wx_fmt=png&from=appmsg)

图11给出了SiCMOSFET和Si IGBT的开通关断时间随着负载电流的变化，在读取开通时间时，采取从电流开始上升到电压下降到零的这段时间；读取关断时间时，采取从电压开始上升到电流下降到零的这段时间。对于SiC MOSFET而言，随着负载电流的增大，会造成整体开通时间的增大；而关断过程中，负载电流的增大带来了关断时间的上升。对于Si IGBT,其开通关断过程时间和SiC    MOSFET的变化规律基本相同。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999buE6YxywiaBgmKhOkeDw3M5dhnF3ic1g8OTNrIZNEMOM7yuMuHwQGpAicg/640?wx_fmt=png&from=appmsg)

图12给出了SiC MOSFET和Si IGBT在600V 输入电压下，不同负载电流时的开关损耗的对比，两者的开关损耗都随着负载电流的增大而增大，但Si IGBT的开关损耗始终大于SiC MOSFET,且随着负载电流的增大，损耗的增大更为明显。在混合并联中，可以通过控制SiC MOSFET的延迟关断时间，从而实现Si   IGBT的零电压关断，避免Si IGBT关断电流拖尾造成的损耗。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bK97wpF8sStveEAxkf9eDcmKOHhpHa1gKBkZWz8Fa3j8OnPU3hmibYUg/640?wx_fmt=png&from=appmsg)

图13给出了不同输入电压下开关特性测试结果，SiC MOSFET和Si IGBT的开通过程电压下降时间和电流上升时间都随着输入电压的增大而增大，关断过程中电压上升时间增大，而电流下降时间减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bmt58NJ5dsQb5weqibgV0FWus6zhPeaFuCs0bfj76MMwrx9ic2N8WkB6A/640?wx_fmt=png&from=appmsg)

3 .不同因素对器件开关特性的影响

3.1 驱动电阻对开关特性的影响

图14中给出了600V/10A时，驱动电阻分别取为10Ω、20Ω、30Ω时，SiC MOSFET和Si IGBT的开通关断波形的对比。SiC MOSFET和Si IGBT的开通关断时间随着驱动电阻的增加均有所增大，在Si  IGBT的关断波形中可以看到明显的观察到电流拖尾现象。SiC MOSFET的开关过程中门极电压、漏源极电压、漏极电流波形均有比较大的振荡，而Si IGBT的开关波形更为平稳。SiC MOSFET关断时没有拖尾电流则是因为MOSFET为多子导电的器件，没有电导调制效应；门极电压波形振荡是因为SiC MOSFET的开关速度很快，漏源极电压变化率很大，米勒电容快速地充放电并产生较大的充放电电流。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999btsbdeNFHfpliaBNQZ86iaTRxmeYqmvdJXYeH9nINUXtDwJ8NwUS9vXog/640?wx_fmt=png&from=appmsg)

图15给出了SiC MOSFET和 Si IGBT的开关能量随驱动电阻的变化，开通、关断以及总的开关能量均随着驱动电阻的增大而增加。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999b9xvhFm9ibSibHUIEhxRsJscmGSnjzWic471WDa41WYnQbDkISrzFrGicxw/640?wx_fmt=png&from=appmsg)

3.2 驱动电压对器件开关特性的影响

为了研究驱动电压对器件开关特性影响，在600V/10A 开关条件下，测试了驱动电压分别为+20V 、+18V 、+15V 时 SiC MOSFTE的开关过程，驱动电阻设置为30Ω。

图16给出了器件开关特性随驱动电压变化的测试波形，可以看到，随着驱动电压的降低，SiC MOSFET的开通过程均有所减缓，关断过程基本不变。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bRiciaPyqUocUNGIMge9HprDwdCYUtqCUZTsGeJ67byXMia9QeE4Nj4VEA/640?wx_fmt=png&from=appmsg)

图17给出了不同驱动电压对器件开通、关断 即总开关能量的影响，开通能量随着驱动电压的增大而减小，关断能量基本不变，总开关能量也随着驱动电压的增大而减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999biaCBsy8CcqWIO4UPPEO0R6wJH1icxPlRTiaRhfzDiby89qHucrfWGNoBDg/640?wx_fmt=png&from=appmsg)

3.3 结温对器件开关特性的影响

器件开关特性的测试条件为600V/10A,   测量的温度点为25℃、50℃、75℃、100℃和 125℃,测试条件见表2。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bUJKCU2NXuCLYtzUzY9Twv7ic75gClCjHCoLyQMFOx4x0ArSL9dPLRcA/640?wx_fmt=png&from=appmsg)

图18中给出了SiC MOSFET在25℃、75℃和125℃的开关过程波形，并且对波形进行了叠加，标出了温度升高或者降低的方向，温度的上升，带来了开通过 程中电流上升时间和电压下降时间的减小；关断过程中，温度上升带来了电压上升时间的增长和电流下降时间的减小。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bcApqkUIa19GfDSKOOkskjiaKTFUmfBzzTtldyrlgb6z8ZV3qbh3kOjQ/640?wx_fmt=png&from=appmsg)

图19给出了器件开关能量随温度的变化，开通和关断能量都随 着温度的升高有所增加。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bFpbPQbQUWTP0E6ZpWy4Gwegmy9FuXqpgDyrwJ9neZuU9dyxHPiaAYZw/640?wx_fmt=png&from=appmsg)

Si IGBT的开关过程类似Si MOSFET,其跨导随着温度的升高而减小，因此开通关断过程都由于温度的升高而减慢，开关损耗增加。图20、21中给出了不同温度下的开关曲线， 以及开关损耗能量随温度的变化。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnnyicI0mALvRCfWwgzq999bAjmjmHYYMX7LGm1iarXVzE0cVc43mblOS90ydEbKb7CjvnOJ5RQKickg/640?wx_fmt=png&from=appmsg)

4 . 讨论

根据对SiC MOSFET和Si IGBT的特性对比研究，如果将SiC MOSFET和Si   IGBT进行混合并联，仍然存在一些需要解决的问题。

(1)开关时序控制策略：混合并联功率器件的开关时序直接影响着器件的导通顺序和开关损耗，需要通过优化的开关时序控制，实现两种器件优势的充分发挥。Si IGBT关断过程中存在电流拖尾造成的关断损耗可以通过SiC MOSFET的延迟关断解决，但SiC    MOSFET延迟关断的时间长短对于关断损耗的减小程度会有所影响，并且可能会限制变换器的最大开关频率，需要根据实际应用情况进行优化设计。 

(2)驱动电阻设计：功率器件的驱动电阻对于器件的开关时间有着明显的影响，同时影响 器件的开关损耗，因此，SiC MOSFET和Si IGBT的混合并联中各自的驱动电阻也会对并联开关整体的特性有所影响。

(3)由于SiC MOSFET和Si IGBT具有不同的导通电阻温度系数，因此，工作环境温度不同，并联器件的均流情况也会随之变化，在混合并联的研究中， 需要考虑环境温度对并联器件特性的影响。

(4)混合并联器件定额和个数的选择：在相同的电流定额下，由于SiC    MOSFET和Si  IGBT开关速度和导通电阻的不同，器件定额的选择及并联个数的选择都影响着混合并联开关工作过程中的各器件的工作状态，需要对混合并 联器件的定额及个数比例进行优化设计才能够实现混合并联开关整体性能的最优。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsnnyicI0mALvRCfWwgzq999beD4Cz4GnOHPpd6LhV4mfHR202xjCBicavLWBQMPLZNx6pC0QxauBnMw/640?wx_fmt=jpeg&from=appmsg)

5 . 结论

本文对1200V  SiC MOSFET和Si IGBT的动静态特性进行了的测试分析和对比。测试结果表明，SiC MOSFET的开关特性显著优于相同等级的Si IGBT,拥有更快的开关速度和更低的开关损耗，适用于高频率、大功率的场合，但Si    IGBT的通态特性在一定负载电流时优于SiC MOSFET,具有更低的导通电阻，并且导通电阻的温度系数更小。通过对SiC MOSFET和Si  IGBT的对比分析，可以采用并联的方式将两种器件的优势相结合，不仅能够降低总体损耗还能够降低成本，并对SiC/Si器件混合并联的下一 步研究内容进行了讨论。

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)