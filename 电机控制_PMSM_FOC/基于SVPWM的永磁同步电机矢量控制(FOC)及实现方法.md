# 基于SVPWM的永磁同步电机矢量控制(FOC)及实现方法


> 原文地址: [https://mp.weixin.qq.com/s/xh4x2bizYEDhoC1RcRNTaA](https://mp.weixin.qq.com/s/xh4x2bizYEDhoC1RcRNTaA)

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIXNZfbdj53bicxxicss8D5WANHd3de5SdpQ8pwibiaIsMAlsTsWgx7vorTs6e0kq35k0XWDurue9XsQAA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

[******![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWgcvWtdrsqKO9MY7y1u3YMpfknZk5yBRibb0FaeMVhEYaWVEdF9dMdpPRnhFDhOdXaZribTMTrdibXA/640?wx_fmt=png&from=appmsg)******](http://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650652737&idx=1&sn=0183b807c74f109f465c3fa8e6c8a591&chksm=88bc6b4ebfcbe2587c7651870ed8cc2397177bb4dd9e8bd616779bdc8220de7ad6536e2a7df2&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_gif/icrlIsZGPBvyokNic4JvGNA3jKsVNf1qetvQY78kokibWsFndypjOUicU3ERKwyy6kU62eeTEUUzqK8p07ib50pbZtg/640?wx_fmt=gif&wxfrom=13&tp=wxpic)

  

关注公众号，点击公众号主页右上角“ · · · ”，设置星标，实时关注最新资讯，以免错过最新推送

矢量控制又称为FOC（field-oriented control）磁场定向控制，是一种常用的利用变频器控制三相永磁同步电机的技术，利用调整变频器的输出频率、输出电压的大小及角度，来控制永磁同步电机的输出。其特性是可以控制电机的磁场及转矩，类似他励直流电动机的特性。由于处理时会将三相输出电流及电压以矢量来表示，因此称为矢量控制。

FOC的基本控制原理是在三相定子侧流动的电流可以合成一个等效的合成电流向量，它的旋转角速度就是输入电源的角频率ω。通过坐标变换，可以将此电流向量映射到dq旋转坐标中。如果dq旋转坐标也同样以角速度ω旋转，则在此坐标中电流向量可视为是静止的；换言之，电流向量在此坐标中是直流量，既然是直流量，这样就可让电机的转矩与电流成正比例关系，但还需要满足一些条件，包括电机的转子磁通必须与d轴重合，而且电流向量的d轴分量必须维持为定值。满足以上的条件后，电机的转矩将与定子电流成正比，所以控制定子电流的向量值就可以像控制直流电机一样的简易且精确。那么如何利用FOC的方法具体实现对永磁同步电机的控制呢？

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIXXg2RZ7FgMwrYUfslKfgzmnDWaM8LNEVMxUllNqibMLvjSI5cb25L13ej4Ay0YbBVe4XyYicq2k2ow/640?wx_fmt=png&from=appmsg)

我们可以采用TI公司的DSP F28335控制芯片和IR公司的IGBT、MOSFET驱动芯片IR2136来驱动控制MOSFET，将直流母线电压逆变成交流电来达到对永磁同步电机的控制，搭建以TI F28335 DSP芯片为控制器的核心板+驱动板+永磁同步电机的控制系统，实现基于SVPWM算法的永磁同步电机的开环、闭环和无速度传感器控制。

要实现基于FOC的永磁同步电机运行，首先要进行控制代码生成，可以采用PSIM软件建立电机控制系统的仿真模型来实现。PSIM软件可以很方便地建立基于SVPMW的永磁同步电机开环控制系统， 并直接生成可运行的DSP28335代码实现需要的控制方式：

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVAeIhQiaJQGVVkUDS0EpMhTJkxDpTmJAPs2zBvevrMfzIYfLZTtlDoz6Uw4PRd6neSecXhJae2cBw/640?wx_fmt=png&from=appmsg)

在已经实现的SVPWM功能模块开环控制的基础上，再增加电流闭环和转速闭环即可实现PSIM环境下的永磁同步电机矢量控制并完成DSP28335的控制代码生成：

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVAeIhQiaJQGVVkUDS0EpMhTicqgfl0A62BjvBQ5VZicLHBYKiaYw3SBqTAdRMicEdkW7pZicgbOdmHGehA/640?wx_fmt=png&from=appmsg)

本月在上海举办的永磁同步电机控制研修班将进一步详细介绍以上相关内容并现场给大家提供实践练习的机会，帮助大家深入理解永磁同步电机的矢量控制（FOC）技术，并通过PSIM软件展示如何实现基于TI 28335的永磁同步电机SVPWM代码生成与开环控制以及永磁同步电机矢量控制代码生成与闭环控制，希望有永磁同步电机控制学习需求的朋友不要错过，欢迎大家扫描下方海报二维码报名参加本次培训：

![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIWnOb0oG7PHicOIfWXYic9u2HXJFbzEPVjic4PjSgUvYpcdSVbl51LkPic3cvd24FDo39hMOgsKXNsiahw/640?wx_fmt=jpeg&from=appmsg)

关于本次培训的详细介绍如下：

  

1

**授课背景**

课程是专门针对专门从事电机设计、驱动与控制、技术支持、检验、试验、调试及服务等部门的工程技术人员量身打造的一款技术培训课程。对从事电机、变频器及各类电机驱动器的开发、生产、销售人员也有很大的帮助。

电机是工业和生活设施的最主要动力，随着电气自动化技术的发展，采用基于电力电子技术的交流变频调速技术已得到广泛应用。永磁同步电机以其功率密度高、转子惯量小、运行效率高等优点，在各方面的应用有加速上升的趋势，永磁同步电机的驱动与控制技术也日新月异，社会上对这方面的人才需求也更加迫切。但目前的现实情况是：永磁同步电机设计、电机驱动与控制方面的专业人才培养却不尽如人意，具体表现在：一是永磁同步电机涉及的专业知识面比较宽，对电机学、电力电子及运动控制等方面的理论知识都有较高的要求；二是技术人员在学校学到的一些知识不够全面，不适应当下的技术发展现状；三是永磁电机的控制需要软、硬件相互配合，而同时具有这两方面能力的技术人员少之又少。因此，相关人员如不及时学习，跟上技术发展潮流，就有在行业中落伍的危险。 

以上问题使得电机行业的技术从业人员对永磁同步电机原理、驱动与控制方面的技能及实战经验方面的培训需求旺盛，许多刚毕业即将入职的新手或者入职不久缺乏实践经验的年轻人、非电机专业希望拓展专业面以及从事多年电机技术工作但仍愿在专业能力上充实、提高的老技术人员，纷纷要求希望能有机会参加一个以永磁同步电机控制基础理论为主，兼顾实际开发-即软、硬件相结合的实战操作，以期快速提升专业理论和技能的短期培训。

本课程的一个最大亮点就是指导学员如何在MATLAB、PSIM软件已经建立仿真模型的基础上生成相应的嵌入式（TI F28335）代码，进而完成软、硬件调试。对高级CPU芯片进行编程，对大多数技术人员来说相当困难，因为需要长时间的学习和练习。而自动代码生成可以说是提供了一条捷径，并且此方法还可以进行扩展，完成其它嵌入式系统的控制开发，从而极大地加快开发进度。正是在此强大背景下，我们精心策划研发了这样一款培训课程。

2

**课程简介**

课程内容由四大部分组成:

永磁同步电机的结构、工作原理和等效电路模型。从永磁同步电机基本理论入手，讲述其等效电路的静态-动态模型、转矩、电压、磁链方程及电机参数辨识方法；

永磁同步电机控制部分，是本次课程的重点内容之一。从永磁同步电机控制方法入手，详细讲述永磁同步电机的SPWM、SVPWM、矢量控制及弱磁控制等。

永磁同步电机的仿真及自动代码生成与在线调试。这是本次课程中最重要的内容。随着CAD技术的快速发展，基于软件的仿真设计和控制代码生成正逐步成为现代制造业的一个重要工具。目前基于PSIM、MATLAB等软件，可进行电机的仿真设计，同时还可以针对特定的CPU（如：TI 28335，STM32F407等）进行自动代码生成。此次授课针对TI 28335，具体内容包括：

(1).基于PSIM、MATLAB软件的永磁同步电机SVPWM、矢量控制的模型调制、代码生成及开、闭环控制。

(2).基于滑模观测器的永磁同步电机无速度传感器控制-C语言。

通过这些内容的学习，学员可以掌握永磁同步电机控制的整体结构和开发能力，真正实现电机、驱动、控制的一体化设计。

功率器件的驱动与保护。各类电力电子器件是电机控制的核心，但这些器件的驱动与保护是电机驱动设备长期稳定运行的关键。有效的驱动、保护电路不仅可以降低器件损耗，还可以使设备长期可靠运行。这部分内容包括：MOFSFET，IGBT，SiC MOSFET三类器件的驱动、保护方法。

本课程集电机学、电力电子技术、电力拖动自动控制系统三门课程于一体，对永磁同步电机的开发能力提升具有极大的帮助。课程力求由浅入深，降低基础门槛；深入浅出，讲解通俗易懂；既注重基础理论又兼顾实战操作，既有理论推演又有实战案例，既顾及新手上路又关注能力提高。

3

**授课老师**

王松，工学博士，教授。在行业内从事电机驱动、控制和电源技术等工作二十余年，先后完成永磁同步电机驱动器研发、六相电机无速度传感器矢量控制、省科技攻关项目-大功率IGBT模块驱动技术、汽车水箱风扇的永磁无刷电机无速度传感器控制、大功率直流发电机启动控制等项目，在业界有较高的专业威望和学术造诣，理论基础扎实，实战经验丰富，拥有多项发明专利，发表多篇高水平论文。本课程凝聚了老师多年丰富的工作经验和科研成果，相信通过本课程短期的培训，必将使您收获满满，飞跃长进。

4

**授课对象**

◆ 电机行业或从事电机控制方面的研发工程师、工艺师、检验、试验调试工程师、质量师、技术支持工程师、服务工程师、销售工程师、项目经理等；

◆ 新入职或即将入职的大学生、研究生；

◆ 非电机专业有专业拓展意向或转行电机控制的专业技术人员。

5

**课程收获  
**

通过本课程的学习，可迅速使自己对永磁同步电机的控制方法和驱动技术得到跨越式提高；对行业新手，可快速入门进入工程技术人员角色，胜任基本的永磁同步电机控制工作，熟悉、掌握相关的工作技能和方法。

6

**课程大纲**

可能视报名学员所在领域和工作岗位不同授课内容有少许增减，以现场授课内容为准；也欢迎大家在预报名填表的时候提出您的需求和建议。每天课程安排一定的软件讲解与操作练习。结束之前安排互动交流环节，现场答疑和交流。

![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIX4IuNS9dWh7vz6hunQIZ5JfoKtyhNyGmFZibVFVOe6d4khliaB6ic6UYhwNhHica8ib1iaXj04aMwaUSzA/640?wx_fmt=jpeg&from=appmsg)

  

7

**增值服务**

◆ 西莫会员报名享8折优惠，全日制在校学生凭学生证享5折优惠，培训后皆可领500积分用于论坛学习资料的下载。

◆ 往期西莫任何研修班学员参加本次培训享72折的优惠。

       以上优惠均需提前付款方可参加，如要求开具增值税专用发票则不享受任何优惠。（优惠可面向开具增值税普通发票并提前付款的西莫会员）

◆ 参训学员可以针对课程相关问题在课程结束后也能得到老师的解答与指导（微信、邮件、电话）；并建立培训后学习的专用微信群作为培训讲授的补充，供学员间开展后续交流讨论；对课堂上讲授过的内容可长期答疑，以帮助大家巩固课后学习效果。

◆ 凡参加我单位组织电机电控培训的企业，均可免费帮助在西莫电机论坛及公众号上发布推送招聘信息，助力企业引进优秀技术人才。

◆ 凡参加我单位组织电机电控培训的企业，均可免费帮助在西莫电机论坛及公众号上发布产品信息推广，助力企业宣传产品品牌建设。

8

**培训课程费用及报名**

◆ 标准费用：3980元/人，含专业培训教材、证书费。食宿可统一安排，费用自理。

◆ 培训时间：2024年9月21-22日（授课两天，可提前一天报到）

◆ 培训地点：上海（具体地点会提前一周通知）

报名方式：扫描下方二维码进行预报名，稍后可通过微信索取培训的正式邀请函以及报名回执

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIX4IuNS9dWh7vz6hunQIZ5JlEIIpb6VkUicUJA28zVHoxnq496xPKL0Mo0boOxaMpTqZAhjog10P4Q/640?wx_fmt=png&from=appmsg)

其他事宜咨询，请联系会务组负责人张老师，电话：18516258619欢迎大家踊跃报名！

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIUE2A9cx6RwEpHeicccUnLeRiaV6GExMABU7T4JW6xZ8fuBgS6xUW4tBvCbRQbdgib2ShLrW4Gia4jT7g/640?wx_fmt=gif)

[‍](http://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650652494&idx=1&sn=043b116aeea03d52015b3d80c08d0d68&chksm=88bc1441bfcb9d57d84ea19bbffd5ac4d425c230ade6626b406c6dac34abb8931d81af5100ee&scene=21#wechat_redirect)[![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIUeTGyH5ZpicpdWy35lib2ZoLJyib1mF9nJM9rTJwudkUvwBmJV6GBzice0Y7omHxyMpjPTUS4d4avzcw/640?wx_fmt=png&from=appmsg)](http://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650652728&idx=1&sn=8b1a744e2a382d13634a7f9197d639a2&chksm=88bc6b37bfcbe22120b6b708969ef8230d332901f89b24bb4991aa7adb74954f6c7de6a340c5&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIXVD2xlqhYSBUX8xOOhPWluqoEp9w5ZiaC8k9NFDUnoTLDxwOosDq3yMx7cNw5532Piawt3gblGnVjw/640?wx_fmt=png&from=appmsg)](http://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650652722&idx=1&sn=d4b71562b6be44e67142f7a21fd39889&chksm=88bc6b3dbfcbe22b3f18d4f9f122ef30c327b7e2c2d170e86695708fce54b21712ab1e002a59&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/9RCbW5V9GKt5AB2jpdWE9pib1TWldJwundibKxjxPB8wytia9kQfnWTH2EVhJ8DKFh9vMAZCWxL42QzoDDjK3mKyQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)](http://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650652022&idx=1&sn=b0ff42db0cd6d80cd67ad2977a3e3ad1&chksm=88bc1679bfcb9f6f3f54c831b81ca8c76b5db1180972c47e8117d00935d7925ced1d531e5271&scene=21#wechat_redirect)

[](http://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650652019&idx=3&sn=55c9428c96dc33c53740a14520c46874&chksm=88bc167cbfcb9f6a38f4debdd1496bafd24228af5e2da05b904d0badf1372f8f1d413d9eeab7&scene=21#wechat_redirect)![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWEDKUS6uyXBHiboINPcBLKibHWbwAfibdzBE1M50oLib9VPYiaQXtgd8o9aH4byicFy5BfmQb84jMHlxBQ/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIUfOAjXn1AUTs3kViax3rSDvTWPnp1LrAXb97Bvkuzm8WZTu1zqnG0SuNQmBbLt8aibThApiafVVt8NA/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVhiaShka2hzoZ3EwiaApgSc27MFwUVnGiaIe1wavPaQpAjeEJBqpZWthz1qY4bkVXDyJbfTPkicMx9FA/640?wx_fmt=png)点击**阅读原文**，直接报名参加本次培训！

****觉得好看，请点这里****↓********↓****↓********↓************