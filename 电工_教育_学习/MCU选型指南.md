# MCU选型指南

原创 硬件笔记本 2022-12-01 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/8LIntRT-M2oR2ruNaj33Tg](https://mp.weixin.qq.com/s/8LIntRT-M2oR2ruNaj33Tg)

#   ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")  点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符") 

MCU是电子产品的核心部件，对于这个器件的选型一定要慎之又慎，如中途变更MCU，整个电路板就要做个“大手术”。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\MCU选型指南_images\img_002_df48d372543a.png)

[**MCU选型**](https://mp.weixin.qq.com/s?__biz=MzI4MDI4MDE5Ng==&mid=2247500196&idx=5&sn=9a33d2b9d5d56e734004d8f468a9b880&scene=21#wechat_redirect)时就要综合考虑MCU需要完成的功能、成本、交期、各类端口的数量、存储空间、可移植性、器件等级、功耗、电压等多种因素，满足近期需求，以及今后的拓展的一些功能。

  

硬件笔记本

1

**MCU初步筛选**

**MCU初步筛选是时，最好是软件工程师和硬件工程师以及器件工程师一起讨论**，硬件工程师提供所需各类端口的大致数量，产品要实现的功能，应用环境等等。软件工程师根据这些信息选出三四款合适的芯片，然后元器件工程师根据芯片的成本，交期，品质等信息最终选定一款MCU。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\MCU选型指南_images\img_003_fdb2a268abc7.gif)

在这个过程当中，硬件工程师提供一份各类端口的数量清单，软件工程师需提供一份MCU引脚分配图表，以供硬件工程师使用。

  

硬件笔记本

2

**普通I/O口**

上拉、下拉电阻的选择，通常可以选择1K~1MΩ之间的电阻，封装可以根据产品的尺寸，以及端口的电流值选择0201，0402，0603，或0805的封装。如端口用的是内部上拉或下拉电阻，电阻值通常是几百欧，在低功耗的产品中尽量不要使用。

![](D:\电脑文件\公众号知识库\电工_教育_学习\MCU选型指南_images\img_004_2bc5f1e34808.png)

输入输出电压的高电平通常就是电源电压，低电压通常就是0V。对于输入口来说，如果高低，电压不分明，需做整形后再提供给输入口，输入到输入口的信号电流值不能超过输入口所能承受的电流范围；对于输出口来说，小功率的负载，尽量是选用低电平驱动。

一般情况下，负载电流值在10毫安以下的，可以用输出口直接驱动；负载电流值在10毫安到100毫安之间的，需加一级驱动电路；驱动更大功率的负载时，负载与MCU之间去加隔离电路。

  

硬件笔记本

3

**器件等级**

根据产品的类别及其应用环境，选择MCU的等级，工作温度范围。如产品用于汽车类产品，尽可能地使用汽车级芯片，工作温度范围-40度到125度。根据产品销售地，选择认证范围，如CCC认证，UL认证。

![](D:\电脑文件\公众号知识库\电工_教育_学习\MCU选型指南_images\img_005_55fa14fd3eae.png)

  

  

硬件笔记本

4

**ADC转换**

根据产品的实际需要，选择合适的精度，转换时间。进行模数转换时，去做适度的整形。

如输入信号非常微弱，可以对信号进行放大；如输入信号电平与输入端口的电平不匹配，需做电平转换。

  

硬件笔记本

5

**存储空间**

根据产品功能，电路板的尺寸，软件代码的长短，选择合适的存储容量。如需外置存储，软件组需提前说明，以便PCB板预留空间。

随着电子产品复杂度越来越高，扩大存储容量与采用flash存储是大的趋势。扩大存储容量，硬件工程师可以赋予产品更多的附加功能，同时给后续的升级维护带来便利。

掉电保护数据和对产品快速编程的需求，以推动产品采用flash存储。flash芯片长期来看，单价会持续下跌的。

  

硬件笔记本

6

**移植性**

如果考虑从旧的平台移植程序过来，就要考虑MCU之间的可移植性，包括软件、硬件移植性。

比如：[**从STM32F2移植到STM32F4**](http://mp.weixin.qq.com/s?__biz=MzUxNjgxMDE4OQ==&mid=2247487407&idx=1&sn=9076049d99d42199b2293845f308f62e&chksm=f9a0fb0dced7721b8b59b6ac6417b94e08e2efdddb3ade697b1d93d202bd23fec272544ba6c1&scene=21#wechat_redirect)，[**STM32移植到GD32**](http://mp.weixin.qq.com/s?__biz=MzUxNjgxMDE4OQ==&mid=2247488975&idx=1&sn=da99e19dbba38e0e4d7f5e1f339124de&chksm=f9a0e16dced7687b8069fa86c52f42082655de5c6c0a2a198cd75de629ed919bccbedd5d24ef&scene=21#wechat_redirect)等。

  

硬件笔记本

7

**低功耗**

越来越多的移动电子产品出现，推动MCU也快速地向低功耗方向发展。低功耗不仅仅是为了省电，更是是为了降低电源模块以及散热模组的成本。随着电流的降低，电磁干扰和热噪声也大幅度地降低了。

上拉下拉电阻也有功耗，如对单一的信号进行上拉或下拉，电流也就是几个微安到几十微安之间，但是对于一个被驱动了的信号进行上拉和下拉，电流能达到几十毫安。

闲置不用的端口，尽量不要悬空。如果悬空，外界的干扰可能在这些端口形成反复的震荡信号，MOS工艺芯片的功耗主要取决于门电路的翻转次数。

  

硬件笔记本

8

**成本和交期**

很多8位和16位及32位MCU，价差已降至将近几美分，需结合产品实际情况选取合适的MCU。

MCU选定后，后续很多新项目也会用这一系列MCU，因此在做MCU选项时一定要调查清楚供应商是否长期生产该系列的芯片，有几家生产工厂。在我们的客户所在地，该供应商是否有强大的售后服务团队。

对MCU进行试验验证，确保产品的低失效率，因为高失效率率意味着更高的成本。调查统计各MCU及其供应商的口碑。

目前，MCU的[**成本普遍上涨**](https://mp.weixin.qq.com/s?__biz=MzI4MDI4MDE5Ng==&mid=2247499261&idx=1&sn=ba89a08fa8d82967517f122e9ea5b01e&scene=21#wechat_redirect)，[**交期普遍增长**](https://mp.weixin.qq.com/s?__biz=MzI4MDI4MDE5Ng==&mid=2247499176&idx=1&sn=728d24debeeda535896e9193d9a7303f&scene=21#wechat_redirect)，但是需要考虑这个问题。

  

硬件笔记本

9

**其他功能**

产品研发初期，可能对一些需求不明确（待确定），所以在初期选型，应该尽量考虑预留一些可扩展的功能，比如硬件预留一些IO口、调试口、通信口等，软件架构设计时，模块化，预留扩展接口等。

最后，对于MCU，在已批量生产后轻易不要做替代动作，MCU的替代需做各种严格的测试验证，成本较高。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。