# GaAs二极管在高性能电源转换中的作用

原创 电路一点通 2025-03-22 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/MorAlsKe3jusYoqinahjOg](https://mp.weixin.qq.com/s/MorAlsKe3jusYoqinahjOg)

目录

1.为什么是砷化镓? 

2.软切换还是硬切换? 

3.二极管造成的功率损耗 

4.二极管性能比较 

5.二极管造成的PSFB损耗 

6.基准测试结果 

小结 

  

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GaAs二极管在高性能电源转换中的作用_images\img_003_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GaAs二极管在高性能电源转换中的作用_images\img_000_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GaAs二极管在高性能电源转换中的作用_images\img_004_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GaAs二极管在高性能电源转换中的作用_images\img_001_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GaAs二极管在高性能电源转换中的作用_images\img_002_ead434f24ea4.png)****  

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GaAs二极管在高性能电源转换中的作用_images\img_005_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

　GaAs**二极管**是一种新型宽带隙功率半导体，它为设计人员提供了一种在高性能功率转换中权衡效率和成本的方法。高压硅二极管具有较低的正向传导压降，但由于其反向恢复行为，会在电源转换器中造成显着的动态损耗。碳化硅二极管的反向恢复行为可以忽略不计，但与硅相比，它确实表现出更高的体电容和更大的正向传导压降。由于 GaAs 技术能够提供硅和 SiC的有用特性，本文比较了10kW、100kHz 相移全桥 (PSFB) 的性能。在此应用中对GaAs、SiC 和超快硅二极管进行基准测试的结果表明，GaAs二极管以显着降低的成本点实现了与SiC相当的整体效率。

　　**1.为什么是砷化镓?**

　　(1)成本：用于GaAs二极管的晶圆的原材料成本及其固有的较低制造工艺成本，以及低价格实现了SiC性能的重要机会。封装GaAs二极管的成本约为可比SiC部件的50%至70%。

　　(2)可用性：GaAs 作为一种材料已经广泛用于射频应用，并且是世界上使用量第二大的半导体材料。由于其广泛使用，它可以从多个来源获得，其制造工艺类似于硅。这些因素都支持该技术的低成本基础。

　　**2.软切换还是硬切换?**

　　与主流硅相比，碳化硅的性能在二极管和晶体管开关特性方面提供了显着改善，但近年来的趋势是使用软开关拓扑在整个转换器中实现最高水平的性能。这些软开关拓扑非常适合GaAs二极管，使设计人员能够从比SiC更低的传导损耗中受益，而不会遭受普通硅会产生的额外动态损耗。

　　由于强制零电压转换所需的循环谐振能量，软开关拓扑通常在给定功率输出的功率半导体中运行更高的RMS电流。具有较低正向压降的GaAs等技术可以减少这种循环能量造成的损耗，并充分发挥开关零电压操作的优势。

　　**3.二极管造成的功率损耗**

　　“理想”二极管将在不产生任何损耗的情况下执行其功能，但任何实际二极管(包括宽带隙器件)都与这种理想情况不同，其实际行为的不同方面会导致功率损耗。在大多数转换器中，次级侧二极管造成的损耗可以归为以下三个主要方面之一：

　　当二极管传导电流时，非零正向压降会导致传导损耗。这种损耗机制与拓扑有关，但通常不是频率的函数。

　　由于二极管的体电容引起的损耗，较高的电容导致较高的损耗。这是拓扑/频率相关的，并且由此产生的损耗强加在转换器中的其他组件上。

　　由于拓扑/频率相关的反向恢复效应造成的损耗。这些损耗在转换器中的二极管和其他组件中出现。

　　上述损耗类型的相对水平取决于各个二极管的特性、拓扑选择和工作频率。正向传导损耗相对容易计算，而由于二极管电容和Trr 引起的损耗更复杂。

　　**4.二极管性能比较**

　　在基准测试期间比较了三个二极管，比较如图1所示。

![基准二极管比较](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lfpMuv6zjq4VmyXpUicTzYp5YPbbicraCAc8L3RVQkGAeibekujETx5QWyFGghEgtnficHPibEt8Yp4JRg/640?wx_fmt=jpeg&from=appmsg "基准二极管比较")

　　图1 基准二极管比较

　　数据比较表明，从正向传导性能的角度来看，硅和砷化镓的性能都更好，尤其是在高结温下。从开关的角度来看，碳化硅具有明显更高的电容，但反向恢复时间基本上为零。问题是，对于10kW PSFB 应用，这些二极管特性将如何影响整体效率?

　　**5.二极管造成的PSFB损耗**

　　图2显示了典型的PSFB拓扑，其中二极管在D1到D4位置进行了基准测试。PSFB 通过以50%的占空比运行Q1/Q3和Q2/Q4晶体管对来运行，每个晶体管对通过控制它们的相对相位来控制功率流。这种操作允许初级侧器件Q1-Q4在很宽的负载条件范围内以零电压切换工作。

　　D1-D4的组合电容加到电源变压器和PCB的分布电容上，会在开关转换期间导致D1-D4两端的谐振电压。

![PSFB拓扑](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lfpMuv6zjq4VmyXpUicTzYp5Onk0HicCzib4V8dh0D4ic2HrXQ7hlFMGzODo3px6ic2NLwYXBOIUALxQnQ/640?wx_fmt=jpeg&from=appmsg "PSFB拓扑")

　　图2 PSFB拓扑

　　为防止损坏D1-D4，使用缓冲器将谐振电压钳位到可接受的水平。在PSFB中，对有源缓冲器吸收的能量进行量化是衡量动态特性(电容和Trr)影响的直接方法。总转换器效率与缓冲器耗散的综合知识允许在此应用中准确地对二极管行为进行基准测试。

　　**6.基准测试结果**

　　原型转换器设计用于最大500V/30A/10kW 的输出曲线，图3显示了转换器在600V 输入下以330V/20A 输出运行的示例图。示波器图中的蓝色轨迹(C3) 显示了在有源缓冲器两端测得的电压，并且由于钳位功率是钳位电压的直接函数，因此有源缓冲器设计为使用自己的控制回路运行，以允许用户将钳位电压设置为固定电平。在图3的示例图中，这是800V。

![PSFB转换器工作波形](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lfpMuv6zjq4VmyXpUicTzYp5Y0eBW4PCNic7zyTL1TU4LyewvyLnzoq7uT54NAicIEY2W7zPVGuQdn4Q/640?wx_fmt=jpeg&from=appmsg "PSFB转换器工作波形")

　　图3 PSFB转换器工作波形(C1/C2 是Q1/Q3和Q2/Q4对产生的电压，C4是输出整流器D1-D4两端的电压，C3是L2中的电流)

　　使用图2中详述的设计参数，图4中所示的输出曲线是可能的，其中彩色区域显示了初级MOSFET的ZVS出现的区域，轮廓显示了所需的相移。基准测试是在固定的600Vdc输入和恒定电流负载的情况下进行的，该负载用于具有相移的输出，然后更改设置输出电压。对于10A、15A和20A的输出电流，效率和缓冲器功率耗散作为输出电压的函数进行测量，如图5所示。

![PSFB输出VI映射](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lfpMuv6zjq4VmyXpUicTzYp5buI0dSfLGLmuZl7oCWMjiciaU4t9Toq0faEHS1N5dnDBacJkrG3RURTw/640?wx_fmt=jpeg&from=appmsg "PSFB输出VI映射")

　　图4 具有ZVS 区域和恒定相移轮廓的PSFB输出VI映射

![PSFB效率(左)和缓冲器耗散(右)](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lfpMuv6zjq4VmyXpUicTzYp5FIPlq0oQVNLwJFXU4nsbJsFB0cuVo6mcu7DuS6MjgT2M2mCp30gniaA/640?wx_fmt=jpeg&from=appmsg "PSFB效率(左)和缓冲器耗散(右)")

　　图5 PSFB效率(左)和缓冲器耗散(右)

　　从图5中的结果可以得出几个结论：

　　(1)基于GaAs和SiC的解决方案的整体转换器效率几乎相同，尤其是在更高的负载电流下。在更高的输出电流下，由于GaAs有限Trr导致的略高的缓冲器损耗被较低的传导损耗抵消，以提供相同的整体效率。

　　(2)由于高水平的缓冲器耗散(即与Trr相关的显着损耗)，该应用中的超快硅效率非常差。由于测得的缓冲器功率电平很高，因此使用Hyperfast Silicon的测试仅限于低功率。

　　(3)GaAs 和SiC缓冲器功率表现出类似的行为，表明由GaAs有限Trr引起的额外损耗在很大程度上被SiC器件的较高本机电容抵消。

　　根据这项实证工作，已经开发了一个分析模型来将缓冲器损耗建模为二极管电容和Trr的函数。分析表明，在Trr期间，额外的能量被加载到谐振电路中，然后导致额外的钳位耗散。因此，对于给定的工作点，缓冲器功率是二极管电容和Trr的函数。在所述的PSFB的情况下，对于500V/20A 输出的工作点，分析模型可用于预测缓冲器损耗与二极管电容和Trr 的关系。这样就可以比较三种二极管类型的行为，如图6所示。

　　图6显示，对于GaAs和SiC，缓冲器功率大致相同，而SiC中的零Trr的优势被其较高的本机电容抵消。在超快硅的情况下，低二极管电容的好处被高得多的功率水平所淹没，因为它的反向恢复时间长。GaAs的低本征电容和Trr提供了像SiC一样的动态性能，并具有减少正向传导损耗的额外好处。

![Trr和电容的函数的缓冲器功率](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87lfpMuv6zjq4VmyXpUicTzYp5FGXx98Aft10NyGAwxJ69vVXHTfgX7eHvMP0O4oS8Z8GH8jnpzrJVzg/640?wx_fmt=jpeg&from=appmsg "Trr和电容的函数的缓冲器功率")

　　图6 Trr和电容的函数的缓冲器功率

　　在原型PSFB中，变压器、输出电感器和PCB布局提供了300pF的总负载电容。图6中显示的数据包括所有情况下的基线电容，总二极管电容基于四个二极管的贡献。

　　**小结**

　　以上就是**GaAs二极管在高性能电源转换中的作用**介绍了。在查看整体转换器效率时，重要的是要了解所有主要的损耗机制，包括由二极管动态特性引起的损耗机制。已经表明，GaAs二极管中低正向压降、低电容和低/稳定Trr的组合提供了用于软开关应用(例如相移全桥)的出色特性组合。高增长应用中的高性能电力电子设备，例如电动汽车充电，可以从GaAs 二极管提供的系统级成本降低机会中受益匪浅。

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

近期资料（直接领取）👇

-   [PCB布局-地和电源-47页（资料可领取）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541650&idx=3&sn=9c2af22b312a8b613896c485fe9d59f5&scene=21#wechat_redirect)
    
-   [DSP 片上串行通信外设各模块的功能、 结构特点、 工作方式](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541116&idx=3&sn=839f51ef9d09338d2d452aed16713b88&scene=21#wechat_redirect)
    
-   [高效微逆变器设计（原理图+程序+上位机等）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540907&idx=2&sn=8fcb9c897e4cc82906451def4a597f1b&scene=21#wechat_redirect)
    
-   [集成运放--波形变换电路设计（附Multisim资料）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540754&idx=2&sn=8e65952fa25cdf9b648071cc07b62c6c&scene=21#wechat_redirect)
    
-   [AC-DC 非隔离电源方案在硬件设计开发](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540115&idx=2&sn=7f5b13e92717890284436fd0e21fd948&scene=21#wechat_redirect)
    
-   [ARM嵌入式系统培训精华(全套)PPT-【周立功】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539769&idx=3&sn=ca79cbbab4916e2ef142f475875b70b0&scene=21#wechat_redirect)
    
-   [图表细说元器件及实用电路362页](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539497&idx=2&sn=2b675f61f20c00929a3e00218819c13a&scene=21#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GaAs二极管在高性能电源转换中的作用_images\img_012_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**