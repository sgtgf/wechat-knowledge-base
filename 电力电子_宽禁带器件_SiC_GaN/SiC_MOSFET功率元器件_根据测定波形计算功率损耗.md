# SiC MOSFET功率元器件,根据测定波形计算功率损耗


> 原文地址: [https://mp.weixin.qq.com/s/jeo4U3jyKmYELGO6epdYvg](https://mp.weixin.qq.com/s/jeo4U3jyKmYELGO6epdYvg)

**文章来源:**罗姆半导体（ROHM）

**摘要：**本应用笔记记载了 SiC MOSFET 方案的开关电路根据测得的开关波形计算 SiC MOSFET 的功率损耗的方法。![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_000_14a1502d6f4d.jpg)

**开关波形的测定**

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_001_1c1be5d3bbb3.png)

Figure 1 所示的是开关电路和波形监视探头。MOSFET 的漏源级间电圧使用差动电圧探头来测定，漏极电流则使用电流探头来测定。

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_002_ed85256d6e74.png)

Figure 2 所示的是各部位波形和功率损耗(阴影部分)。ton 表示 Turn on 时间，toff 表示 Turn off 时间，这个区间中 VDS 和 ID 重合部分发生开关损耗。由于电路中的感性负载，Turn on 时 ID 会先开始变化，待电流变化结束后 VDS 才开始变化。Turn off 时与之相反，VDS 先开始变化，电圧变化结束后 ID 才开始变化。接下来 TON 是指 MOSFET 的 导通区间，ID 和 MOSFET 的导通电阻会引起导通损耗的产生。

最新的示波器有可以将阴影部分自动演算并显示功率损耗的功能，如果是没有该功能的型号，就需要根据测定波形来计算。

接下来说明测定时的注意点。首先是示波器的采样数。采样数较少的话，波形的详细部分会有所遗漏，于是导致测定结果有误差。需要将采样点表示出来来确认是否能正确追踪波形。第二个注意点，因为电圧探头和电流探头间的延迟时间特性不同， 测定波形中包含该延迟差所导致的误差。如不予以修正，电圧和电流间的时间轴方向会错位、Figure 2 的阴影部分面积就不正确了，会得出大于或小于实际的损耗值结果。为了去除这个 测定系统的延迟差，需要进行纠偏修正 (de-skew)。方法请参 考测量仪器操作手册或测定器厂商的技术资料。

**波形的近似计算** 

这里对测定波形用线性近似法来对各个时间范围进行分割从而计算功率损耗。首先是计算 Turn on 和 Turn off 时间所消耗的功率损耗 Pton,、Ptoff。功率损耗使用 Table 1 的近似算式来计算。根据波形的形状不同计算式也各自不同，因此需选择与测定波形相近的算式。

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_003_1c21f4ff23da.png)

Figure 3 所示的是波形的一个例子，Turn on 时波形分为 2 份，前半部份(ton1)使用 Table 1 的 Case2，其条件使用 ID1≔0 的式 子。后半部分(ton2)使用 Case3、VDS2≔0 的式子。Figure 3 中 VDS2(on)是 MOSFET 的导通电阻和 ID 引起的电圧差，若与 VDS 的 High 电圧相比很小的话可视为 0。作为结果，Turn on 时的 功率损耗可用下式来近似计算：

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_004_fa14cad05474.png)

同样，也将 Turn off 时的波形分为 2 份，前半部分(toff1)使用 Case1、VDS1≔0 的式子。后半部分(toff2)使用 Case8、ID2≔0 的 式子。Figure 3 的 VDS1(off)也是前述相同的理由产生的电圧，若 与 VDS 的 High 电圧相比很小的话可视为 0。作为结果，Turn off 时的功率损耗可用下式来近似计算：

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_005_f82d89308ae9.png)  

接下来计算的是导通时消耗的功率损耗。Figure 4 所示的是计算导通损耗的波形的一个例子。由于 TON 区间内 MOSFET 是导通状态，VDS 是 MOSFET 导通电阻与 ID 的乘积。导通电阻的 值请参考 datasheet。选择 Table 2 的波形的形状相近的算式， 用近似算式来计算功率损耗。

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_006_49f491076ecd.png)

这个例子使用的是 Table 2 的 Case1。导通损耗可根据下式来计算：![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_007_f8c87392de69.png)

接下来是 MOSFET 在 OFF 时的功率损耗。Figure 4 所示的是 TOFF 的区间，MOSFET 在 OFF 时 ID 十分小因此功率损耗视为 0。

MOSFET 的功率损耗以上计算出的功率损耗的总和。

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_008_43aafe927a8e.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_009_75e31cf895c6.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_010_7840efc6cbad.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_011_7398b391d681.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_012_b70e433a67b3.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_013_9eadd0406d4e.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_014_ca5bfa6510a3.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_015_afef0d01764b.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_016_4bb4843629d6.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_017_797199fb4a74.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_018_d44adbb7ccb8.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_019_3ebc5bd6ccc1.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_020_76df195689e8.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_021_cf8f61b27ea9.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_022_97d08d1805e2.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_023_31b44ea00e26.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_024_839ffd22b450.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_025_802fca783e5f.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_026_bc843e9da07c.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_027_d0d330365d6a.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_028_2e7d6211f462.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_029_40d75c8d8c86.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_030_5cca00f52d12.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_031_f8eb28d84ef7.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_032_5a73a9a233fc.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_033_0a867682d2ad.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_034_b7d85509d6f7.png)

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_035_22f722c49799.png)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_036_318ead5d55de.jpg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_037_3ade3c3d8599.jpg)![](SiC_MOSFET功率元器件_根据测定波形计算功率损耗_images/img_038_84aa944feb13.jpg)