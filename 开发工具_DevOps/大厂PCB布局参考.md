# 大厂PCB布局参考

原创 硬件笔记本 2024-01-23 07:51 四川

> 原文地址: [https://mp.weixin.qq.com/s/CqcUARiA26MtIrqQqJR7lw](https://mp.weixin.qq.com/s/CqcUARiA26MtIrqQqJR7lw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

电机驱动 IC 传递大量电流的同时也耗散了大量电能。通常，能量耗散到印刷电路板（PCB）的铺铜区域。为保证PCB充分冷却，需要依靠特殊的PCB设计技术。在本文的上篇中，将为您提供一些电机驱动IC的PCB设计一般性建议。

  

**使用大面积铺铜**

### 铜是一种极好的导热体。由于 PCB 的基板材料（FR-4 玻璃环氧树脂）是一种不良导热体。因此，从热管理的角度来看，PCB的铺铜区域越多则导热越理想。

###   
如2盎司（68微米厚）的厚铜板相比较薄的铜板导热效果更好。  然而，厚铜不但价格昂贵，而且也很难实现精细的几何形状。所以通常会选用1盎司（34微米厚）的铜板。外层板则经常使用1/2盎司的镀铜，厚度可达1盎司。

###   

### 多层板中的内层板常采用实心铜板以便更好地散热。但是，由于其平面层通常位于电路板堆叠的中心位置，因此热量可能会被锁在电路板内部。那么，可以在 PCB 的外层板上添加铺铜区域，使用过孔连接到内层板，将热量传递出来。

###   

### 由于双层 PCB 中存在走线和元器件，散热也会更加困难。  所以电机驱动IC应该使用尽可能多的实心铜板和利于散热的过孔。将铜浇铸在外层板的两边，使用过孔将它们连接起来，这样做可以将热量分散到被走线和元器件隔开的不同区域。

  

###   

### **走线一定要宽—越宽越好**

###   

### 因为流经电机驱动 IC 的电流很大（有时超过 10A），所以应仔细考虑接入芯片的 PCB 走线宽度。走线越宽电阻越小。必须调整好走线的宽度，才能保证走线中的电阻不会产生过多的能量耗散而导致走线温度升高。可是太细的走线就像电熔丝一样很容易被烧断。

###   

### 设计师通常会采用 IPC-2221 标准来计算合适的走线粗细。该规范有个图表，显示了不同电流水平的铜横截面积和其允许的温升，可以根据给定的铜层厚度下换算出走线宽度。比如，1盎司厚度的铜层中负载10A电流需要刚好7mm宽的走线来实现10°C的温升，那么对于1A的电流来说，仅需0.3mm的走线即可。

###   

### 如果根据这种方法推算的话，似乎无法通过微型IC焊盘运行10A电流。

###   

### 所以，需要重点了解的是 IPC-2221标准中，用于恒定宽度的长PCB走线宽度建议。如果走线是连接到较大的走线或铺铜区，那么采用PCB走线的一小段传递更大的电流则没有不良影响。这是因为短而窄的PCB走线电阻很小，而且其产生的热量都被吸入到更宽的铺铜区域内。从图1的示例中可以看出：即使此器件中的散热焊盘只有0.4mm宽，也能承载高达3A的持续电流，因为走线被加宽到了尽可能接近器件的实际宽度。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTflJicxicyzs970QlChkDtvP9icdZRVhy4vI8Hich1yC00KwlibLDEGKdeN3wyopCTEJaS3DPuhdc8KIR0g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic "PCB Trace Widening")

图1：加宽PCB走线

  

由于较窄走线所产生的热量会传导至较宽的铺铜区域，所以窄走线的温升可以忽略不计。

嵌在PCB内层板中的走线散热效果不如外层走线，因为绝缘体的导热效果不佳。正因为如此，内层走线的宽度应为外层走线的两倍。

表1 大致给出了电机驱动应用中长走线（大于2cm)的推荐宽度。

电流

(RMS 或 DC)

走线宽度为1盎司铺铜

走线宽度为2盎司铺铜

外层板

内层板

外层板

内层板

≤1A

0.6mm

1.2mm

0.3mm

0.6mm

2.5A

1mm

2mm

0.5mm

1mm

5A

2.5mm

5mm

1.2mm

2.5mm

10A

7mm

14mm

3.5mm

7mm

表1: PCB走线宽度

如果空间允许，越宽的走线或灌铜可以最大限度地降低温升并能减小电压落差。

  

**热过孔-越多越好**

过孔是一种小的镀孔，通常用于将信号走线从一层传递到另一层。  顾名思义，热过孔是将热量从一层传递到另一层。适当地使用热过孔可以有效帮助PCB散热，但也需要考虑实际生产中的诸多问题。

过孔具有热阻，这就意味着每当热量流经时，过孔两端会有一定温差，其测量单位为摄氏度/每瓦特。所以，为最大限度地降低热阻，提高过孔的散热效率，过孔应设计大一点，且孔内的覆铜面积越大越好（见图2）。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflJicxicyzs970QlChkDtvP9icE2VaxA91WZt5AqrujFxOicyvoBV15ZaKA1WsRY5ICRj0ObaAiacibJzZQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic "Figure 2: Via Cross-Section")

图2：过孔横截面

虽然可以在PCB的开放区域使用大的过孔，但是，过孔常常被放在散热焊盘的内部，因为这样可以直接从IC封装散热。在这种情况下，不可能使用大过孔，因为电镀孔过大会导致“渗锡”，其中用于连接IC至PCB的焊料会往下流入通孔，导致焊点不良。

有几种方法可以减少“渗锡”。一种是使用非常小的过孔，以减少渗入孔内的焊料。然而，过孔越小热阻越高，因此想要达到相同的散热性能，需要更多的小过孔才行。

另一种技术是“覆盖”电路板背面的过孔。这需要去除背板上阻焊层的开口，使得阻焊材料覆盖过孔。阻焊层会盖住小的过孔使焊锡无法渗入PCB。 

但这又会带来另一问题：助焊剂滞留。如果使用阻焊层盖住过孔，那么助焊剂会滞留在过孔内部。有些助焊剂配方具有腐蚀性，长时间不去除的话会影响芯片的可靠性。所幸大多数现代免清洗助焊剂工艺都是无腐蚀性的，不会引起问题。

这里需注意，散热孔本身不具备散热功能，必须把它们直接连接至铺铜区域（见图3）。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflJicxicyzs970QlChkDtvP9icq4gSpWwDJ1mU2MzYLiaYQdIAKHiaibywFxaLKKxe8jG6SKibYHEtNDrugw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic "Figure 3: Thermal Vias")图3：热过孔

建议PCB设计师与PCB组装厂的SMT制程工程师协商出最佳的过孔尺寸和构造，尤其当过孔位于散热焊盘内部时。

  

**焊接散热焊盘**

TSSOP 和 QFN 封装中，芯片底部会焊有大片散热焊盘。这里的焊盘直接连到晶元的背面，为器件散热。必须将焊盘很好地焊接到PCB上才能耗散功率。

IC规格书不一定会指定焊盘焊膏的开口。通常，SMT制程工程师对放多少焊料，过孔模具使用什么样的形状都有自己的一套规则。

如果使用和焊盘大小一样的开口，则需要使用更多的焊料。当焊料熔化时，其张力会使器件表面鼓起。另外，还会引起焊料空洞（焊锡内部凹洞或间隙）。当焊料回流过程中助焊剂的挥发性物质蒸发或沸腾时，会发生焊料空洞。这会导致接合处的焊料析出。

为了解决这些问题，对于面积大于约2mm2的焊盘，焊膏通常沉积在几个小的正方形或圆形区域中（见图4）。将焊料分布在多个较小的区域里可以使助焊剂的挥发性物质更容易挥发出来，以免造成焊料析出。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTflJicxicyzs970QlChkDtvP9icaUFbaBqzJ1o2gSwvjkrt6sUONtZEDcs04x7AHsOg9Wt8se8oJicr7wg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic "Figure 4: QFN Solder Stencil")

图4：QFN焊具

再次建议PCB设计师与SMT制程工程师共同协商出正确的散热焊盘模具开口。也可以参考网上的一些论文。  

  

**元件贴装**

电机驱动IC的元件贴装指南与其他电源IC相同。旁路电容应尽可能靠近器件电源引脚放置，且旁边需放置大容量电容。许多电机驱动IC会使用自举电容或充电泵电容，这些也应放在IC附近。

请参考图5中的元件贴装示例。图5显示了MP6600步进电机驱动的双层板PCB布局。大部分信号走线直接布置在顶层。电源走线从大容量电容绕到旁路，并在底层使用多个过孔，在更换层的位置使用多个过孔。

![](大厂PCB布局参考_images/img_006_c722bcee49c1.jpg)

图5: MP6600元件贴装

以上就使用电机驱动器 IC 设计PCB板提供了一些一般性建议，要求对PCB进行精心的布局以实现适当性能。接下来，将针对使用典型封装的电机驱动器，提供一些具体的 PCB 布局建议。

  

# **引线封装布局**

#   

# 标准的引线封装（如SOIC和SOT-23封装）通常用于低功率电机驱动器中（图 6）。

![](大厂PCB布局参考_images/img_007_4f0c2ea7e415.jpg)

图6: SOT23和SOIC封装

为了充分提高引线封装的功耗能力，MPS公司采用 “倒装芯片引线框架” 结构（图 7）。在不使用接合线的情况下，使用铜凸点和焊料将芯片粘接至金属引线，从而可通过引线将热量从芯片传导至 PCB。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTflJicxicyzs970QlChkDtvP9icV5NiavicCDViavdhIOPCkMn73GIwicuGZW3cEgq8NTGRmHDhFkVtxD5V3A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic "Figure 7: Flip Chip On Leadframe Structure")

图7: 倒装芯片引线框架

通过将较大的铜区域连接至承载较大电流的引线，可优化热性能。在电机驱动器IC上，通常电源、接地和输出引脚均连接至铜区域。

![](大厂PCB布局参考_images/img_009_ada431229835.jpg)

图8: 倒装芯片SOIC PCB 布局

图8所示为“倒装芯片引线框架”SOIC 封装的典型 PCB 布局。引脚2为器件电源引脚。请注意，铜区域置于顶层器件的附近，同时几个热通孔将该区域连接至 PCB 背面的铜层。引脚 4 为接地引脚，并连接至表层的接地覆铜区。引脚3（器件输出）也被路由至较大的铜区域。

  

## **QFN 和 TSSOP 封装**

##   

## TSSOP 封装为长方形，并使用两排引脚。电机驱动器 IC 的 TSSOP 封装通常在封装底部带有一个较大的外露板，用于排除器件中的热量（图9）。

  

![](大厂PCB布局参考_images/img_010_34530b7bdcde.jpg)

图9: TSSOP封装

QFN 封装为无引线封装，在器件外缘周围带有板，器件底部中央还带有一个更大的板（图 10）。这个更大的板用于吸收芯片中的热量。

![](大厂PCB布局参考_images/img_011_c4a3ed547c4f.jpg)

图10: QFN封装

为排除这些封装中的热量，外露板必须进行良好的焊接。外露板通常为接地电位，因此可以接入 PCB 接地层。在图 11 的 TSSOP 封装的示例中，采用了一个 18 通孔阵列，钻孔直径为 0.38 mm。该通孔阵列的计算热阻约为 7.7°C/W。

![](大厂PCB布局参考_images/img_012_b1b2415fc521.jpg)

图11: TSSOP PCB布局

通常，这些热通孔使用 0.4 mm 及更小的钻孔直径，以防止出现渗锡。如果 SMT 工艺要求使用更小的孔径，则应增加孔数，以尽可能保持较低的整体热阻。

除了位于板区域的通孔，IC 主体外部区域也设有热通孔。在 TSSOP 封装中，铜区域可延伸至封装末端之外，这为器件中的热量穿过顶部的铜层提供了另一种途径。

QFN 器件封装边缘四周的板避免在顶部使用铜层吸收热量。必须使用热通孔将热量驱散至内层或 PCB 的底层。

图 12 中的 PCB 布局所示为一个小型的 QFN (4 × 4 mm) 器件。在外露板区域中，只容纳了九个热通孔。(见图 12) 因此，该 PCB 的热性能不及图 11 中所示的 TSSOP 封装。

![](大厂PCB布局参考_images/img_013_3a9282db77ca.jpg)

图12: QFN (4mmx4mm) 布局

  

## **倒装芯片QFN封装**

  
倒装芯片 QFN (FCQFN) 封装与常规的QFN封装类似，但其芯片采取倒装的方式直接连接至器件底部的板上，而不是使用接合线连接至封装板上。这些板可以置于芯片上的发热功率器件的反面，因此它们通常以长条状而不是小板状布置（见图13）。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTflJicxicyzs970QlChkDtvP9icI6o6v5kQGUvTmxBXgOQFnw0XQ0QqXoiaB4L8uwSnNm8EI9MAxJQynibw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic "Figure 13: FCQFN Package")

图13: FCQFN封装

这些封装在芯片的表面采用了多排铜凸点粘接至引线框架（图14）。

![](大厂PCB布局参考_images/img_015_fcc7b7dde552.jpg)

图14: FCQFN结构

小通孔可置于板区域内，类似于常规 QFN 封装。在带有电源和接地层的多层板上，通孔可直接将这些板连接至各层。在其他情况下，铜区域必须直接连接至板，以便将IC中的热量吸入较大的铜区域中。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTflJicxicyzs970QlChkDtvP9ic6u55YZiaPqkA1WcwZDt1ZfaseUAKPP2cdseYklDVnw2NGUiacCqUzTdQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic "Figure 15: FCQFN PCB Layout")

图15: FCQFN PCB布局

图15显示了MPS 公司的功率级 IC MP6540 。该器件具有较长的电源和接地板，以及三个输出口。请注意，该封装只有 5mmx5mm。

器件左侧的铜区域为功率输入口。这个较大的铜区域直接连接至器件的两个电源板。

三个输出板连接至器件右侧的铜区域。注意铜区域在退出板之后尽可能地扩展。这样可以充分将热量从板传递到环境空气中。

同时，注意器件右侧两个板中的数排小通孔。这些板均进行了接地，且 PCB 背面放置了一个实心接地层。这些通孔的直径为 0.46 mm，钻孔直径为 0.25 mm。通孔足够小，适合置于板区域内。

综上所述，为了使用电机驱动器IC实施成功的 PCB 设计，必须对 PCB 进行精心的布局。因此，本文提供了一些实用性的建议，以期望可以帮助 PCB 设计人员实现PCB板良好的电气和热性能。

硬件工程师及从业者都在关注我们

![](大厂PCB布局参考_images/img_017_27e4e85ce630.gif) ![](大厂PCB布局参考_images/img_018_26e7c42e5929.gif) ![](大厂PCB布局参考_images/img_019_86e7b1720ef8.gif) ![](大厂PCB布局参考_images/img_020_607a9b5809f6.gif) ![](大厂PCB布局参考_images/img_021_c337f32f2ad2.gif) ![](大厂PCB布局参考_images/img_022_845d28096f90.gif) ![](大厂PCB布局参考_images/img_023_2e2b5ebc409a.gif) ![](大厂PCB布局参考_images/img_024_16e467ebcf07.gif)

![](大厂PCB布局参考_images/img_025_ebed19ebd456.gif) ![](大厂PCB布局参考_images/img_026_de9b387fc9a9.gif) ![](大厂PCB布局参考_images/img_027_fb5805018722.gif) ![](大厂PCB布局参考_images/img_028_25764f7ff52f.gif) ![](大厂PCB布局参考_images/img_029_f992681cd3b5.gif) ![](大厂PCB布局参考_images/img_030_d13d18656a84.gif) ![](大厂PCB布局参考_images/img_031_fbbfff43554c.gif) ![](大厂PCB布局参考_images/img_032_05704500a9db.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。