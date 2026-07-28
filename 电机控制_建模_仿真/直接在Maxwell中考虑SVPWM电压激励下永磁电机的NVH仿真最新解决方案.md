# 直接在Maxwell中考虑SVPWM电压激励下永磁电机的NVH仿真最新解决方案


> 原文地址: [https://mp.weixin.qq.com/s/nlxD4J7fuyGbQsYJ3Jbk2g](https://mp.weixin.qq.com/s/nlxD4J7fuyGbQsYJ3Jbk2g)

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIXNZfbdj53bicxxicss8D5WANHd3de5SdpQ8pwibiaIsMAlsTsWgx7vorTs6e0kq35k0XWDurue9XsQAA/640?wx_fmt=gif)

[![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/NViavHRy24TAGgXbnFvWs8aiaKWlMoJib0iam2hhkM3drl1K8H7XfgV1MQXIWFCHAqLnt18CbibcceCeF2pUDEAJiaUhyE7ic3TVUl4YzXKn8tVKWg/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650665396&idx=1&sn=373185223340f2b99e8b01f393c3a2be&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_gif/icrlIsZGPBvyokNic4JvGNA3jKsVNf1qetvQY78kokibWsFndypjOUicU3ERKwyy6kU62eeTEUUzqK8p07ib50pbZtg/640?wx_fmt=gif&wxfrom=13&tp=wxpic)

  

关注公众号，点击公众号主页右上角“ · · · ”，设置星标，实时关注最新资讯，以免错过最新推送

新能源汽车驱动电机的主要NVH源来自电机本体的电磁力，作用于定子的电磁力会引起定子组件、机座的振动，作用于转子的电磁力引起转子扭振及减速器等轴系振动，运行工况快速变化的非稳态驾驶场景，例如：加、减速，驱动到发电制动切换，带控制算法的逆变器产生的高频PWM电压作用于电机，进而产生高频电流谐波引起高频啸叫：

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWiavZ2IKnsjUxXZ5VdQG7aCM97G7dEXxNbZWiaKdaYM5pzZRDYLJ5fDgwWub23hmgC1hreViax7vmwA/640?wx_fmt=png&from=appmsg)

加速工况下SVPWM激励，f=10kHz

传统的基于Ansys平台对电机本体的NVH仿真计算的流程已经非常成熟：利用Maxwell2D/3D快速仿真电机在多转速下定、转子表面的频域电磁力并无缝链接到Workbench平台Harmonic Response模块进行多转速谐响应分析，得到电机的ERP Level Waterfall图，用于分析电机在各转速下的谐振情况；同时多转速谐响应分析结果也可传递到Harmonic Acoustics模块进行Sound Power Level Waterfall的分析，用于进一步对电机噪声水平进行评估：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/NViavHRy24TAibg8KSAiaXCXXGWOLGby93J7gs1cEuDYm1U13DIXTM1la82gtFjO6QicoF3pKSyfR6iccItPFcubYjXw58nle2XZxYISRee7tqfw/640?wx_fmt=png&from=appmsg)

常规电机本体NVH仿真分析流程

这个解决方案是基于有限元的结构载荷和空气载荷进行声学瀑布图计算，减少了结构和声学分析对CPU的需求。但它的局限性是仅在稳态下计算离散工作点，无法考虑瞬态NVH特性；需要周期性激励载荷；难以组合来自不同来源（电机、逆变器、齿轮箱等）的激励，而且完全基于有限元的电磁场仿真不适用于逆变器带控制算法的高频PWM激励引起的NVH评估。基于基于系统模型的电机瞬态NVH仿真可以解决考虑电机控制系统及电机控制器开关频率引起的NVH分析计算：

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWiavZ2IKnsjUxXZ5VdQG7aCsN6SNc9ibFUwYiaciasia6sX6nYbPIwPYrlJhNHVH4HtSR84TRibL5okzvw/640?wx_fmt=png&from=appmsg)

FOC控制系统的电机NVH仿真模型

可以在Ansys Twin Builder中建立包括电机控制电路和软件算法的系统模型，通过以下三个降阶模型计算任意工况下的结构振动：

电机ECE：使用Ansys Maxwell提取电机ECE模型，包含转矩、磁链与转子位置角度和电流的查找表。

电磁力ECE：在提取电机ECE模型的同时，获取定子齿部时域电磁力波与电流和转子位置角的数据 ，使用Maxwell生成高精度的定子时域电磁力ECE模型。

结构SPM： Ansys Mechanical生成预期的SPM状态空间模型。振动结构可以简化为一个状态空间，对于因果状态空间模型的输入和输出，描述输入力波和输出表面法向振动波的载荷矢量被附加到SPM文件中。

这样，结合永磁同步电机矢量控制算法、高精度永磁同步电机模型、电机时域电磁力ECE模型和结构状态空间SPM模型可以实现考虑电机控制系统的电机NVH仿真计算分析。可以计算得到正弦激励与SVPWM激励下的机壳表面振动声压，并将时域表面振动声压数据导入Ansys Sound生成频域瀑布图进行结果对比：

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWiavZ2IKnsjUxXZ5VdQG7aCTfJ35bnkIVQgee0rQqMUbTxmic2fKicOkiakoolb9SDE7RBnXjpydfbGg/640?wx_fmt=png&from=appmsg)

正弦和SVPWM激励下的机壳振动瀑布图对比

以上流程很好地考虑了电机控制系统下的电机NVH分析，与电机实际运行过程高度对应，精度高；需要抽出多个模型，牵涉电机电磁场、电机控制算法和振动结构理论，对使用者要求高。另外还可以直接在Maxwell中考虑电机控制开关频率引起的NVH问题，同时考虑电机本体和逆变器引起的NVH相关激励：对变时间步长进行瞬态电磁力插值，在载波频率及器整数倍频率附近进行谐波电磁力插值，在Ansys Mechanical中加载不同转速点下频率不均匀的谐波电磁力，以考虑由逆变器激励引起的电机高频NVH噪声。Maxwell2025R2增加了可以考虑SVPWM电压激励的新功能，通过新功能可以输出考虑SVPWM的电流波形，并以此为输入进行电磁力的计算，将考虑SVPWM的电磁力映射到Mechanical中进行谐响应分析，变时间步长仿真可以减少仿真时间，加速考虑电机控制系统及电机控制器开关频率引起的NVH分析计算：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/NViavHRy24TABpCDGWzicBGO9RYty4BVUWpPafYUFaLUR6gRfo6FKn0BhRgHiaF1L3I7dm6s8YwlPzKeZz6aqXcibpmPnvw6l9WQbAHZJBhtp5w/640?wx_fmt=png&from=appmsg)

在本周末南京举办的“电机NVH问题的机理及测试仿真”加强研修班的学习中，我们将详细讲解基于Ansys软件平台考虑电机控制系统及电机控制器开关频率引起的NVH分析计算的方法进行详细讲解，欢迎大家扫码下方海报二维码报名参加本次学习：

![](https://mmbiz.qpic.cn/mmbiz_jpg/NViavHRy24TAibqfO6hoKQTqBf9o39PpVbkosccHyph3TicibFNX3vMx4agLKQ2cnNoK3AQXibQdQ7McER8pJMicst9Da5tyIzDb84fDwvtiapOngI/640?wx_fmt=jpeg&from=appmsg)

关于本次培训的更多详细介绍，请看下文：

  

01

课程概述

  

　　所谓NVH，就是噪声、振动与声振粗糙度（Noise、Vibration、Harshness）的英文缩写。这是汽车行业的一个专有名词，是衡量汽车乘坐舒适性的综合性指标。随着新能源电动汽车的飞速普及，作为电动汽车“心脏”的驱动电机的NVH问题也日益受到重视。电机是各行各业的驱动动力，其实不仅仅是汽车行业，随着技术的飞速发展，家电、军事、船舶、铁路、城市轨道交通、工业驱动…等等各行各业对电机的振动噪声问题也越来越被重视，要求越来越严格。然而有关NVH问题，涉及数学、物理、电磁、机械、振动、声学、材料等等多个学科，被誉为“天书”、“玄学”，极难入门，许多同学想钻研这方面的专业书籍，但大多都是刚刚看完绪论就被堵在了门外，无法深入看下去，多次自我放弃。为了解决电机NVH入门难的问题，我们专门打造了这门培训课程。培训的内容主要由以下两大部分组成：第一部分基础理论与测试实战篇，从基本物理概念入手，以中学数学和物理知识为基础，对涉及的相关基础知识及时补充复习，逐步深入到电机振动噪声的基本原理、分析方法、振动噪声测试及设计、减振降噪措施等等，为了增加学员的感性认识，振动噪声的测试部分邀请专业的测试公司进行深入细致的讲解，并加入了现场试验演示和公司实验室参观；第二部分仿真设计篇，将详细介绍基于Ansys软件平台的电机电磁振动噪声分析流程和考虑电机控制系统的NVH仿真计算及它们具体的实现过程，并系统讲解电机动力总成NVH仿真流程和复杂电机系统中NVH分析与声音设计应用。课程讲解通俗易懂，深入浅出，帮助想深入学习电机NVH的同学在不知不觉中跨过入门壁垒，进入NVH的殿堂。如果说NVH是“天书” 那么本课程就是通往这个“天书”的“天梯”！如果说NVH是“玄学”，那么本课程就是“化玄为俗”的“字典”！

  

02

授课老师

  

**李保来，**在行业内从事电机设计、工艺、生产、教学、调试等工作四十多年，正高级工程师，浙江大学求是工程岗兼职教授，太原理工大学兼职教授，享受国务院特殊津贴技术专家，在业界有极高的专业威望和学术造诣，理论基础扎实，实战经验丰富，先后主持完成过多项重大科研项目，荣获多次省部级科技技术奖，拥有多项专利，发表多篇论文。同时主讲西莫培训“电机原理及设计通解”、“永磁电机的原理、设计及制造工艺”研修班课程，往期培训学员近1300人，好评如潮。西莫首席技术专家。

       **薛胜鑫，**青岛艾普智能仪器有限公司副总经理，拥有电机测试技术经验20余年，带领团队攻克多项世界级电机测试难题，填补多项国内技术空白，例如NVH异音检测技术、永磁同步电机高性能分析测试技术、PD局部放电技术、单点线伤测试技术、搭线垂线测试技术等，并参与多项电机测试国家标准修订。

      **王杨，**曾长期从事电机研发、设计等工作，对Ansys低频电磁产品有深入了解，在电机工程仿真领域经验丰富。2019年加入Ansys公司，负责低频电磁仿真软件Maxwell在电机行业的技术支持、工程咨询等工作，将在本次课程中全面系统地介绍Ansys电机振动噪声仿真分析流程及其实现过程。Ansys主任工程师。

      **杨利辉，**曾长期从事电力电子电源产品、电机本体和电机控制系统的设计和研发工作，对Ansys机电仿真产品用于电源、电机及其控制器等实际工程应用有深入的理解，对如何把仿真软件用于设计和优化实际工程产品有丰富的经验，精通Ansys电机仿真设计软件Maxwell和电力电子仿真设计软件Simplorer(Twin Builder)等。在本次课程中将系统地介绍Ansys产品用于考虑电机控制系统的电机NVH实现过程。Ansys机电产品专家。

      **周英杰，**负责Ansys Motion多体动力学仿真软件、Mechanical结构有限元软件及Acoustic声学仿真模块售前技术推广，对齿轮传动系统NVH仿真有较为深入的研究。将在本次课程中将系统介绍Ansys Maxwell+Ansys Motion+Ansys Mechanical Acoustic电机齿轮箱系统时域NVH仿真流程。Ansys高级结构工程师。

      **李彦昊，**2014年毕业于同济大学车辆工程专业，并获得硕士学位。2019年加入Ansys中国，负责Ansys Sound软件在亚太地区的应用推广及技术支持。长期工作于汽车行业并从事动力总成NVH性能的研发工作，在汽车噪音测试及仿真方面拥有丰富的工程经验，能够为客户NVH开发工作提供可靠的帮助及建议，将在本次课程中系统地介绍基于多物理场联合仿真的电机声品质解决方案及整车等复杂电机系统的NVH表现评估。Ansys声学专家。

　　本课程凝聚了各位老师多年丰富的工作经验和科研成果，相信通过本课程短期的培训，必将使您收获满满，飞跃长进。课程前六期培训参加学员近450人，课后赢得大家的一致好评和口碑赞誉。

  

03

培训目标

  

　　通过本课程的学习，使学员理解和掌握电机NVH问题的基本概念、基本知识和基本原理；在工程实践中具备基本的设计、测试和分析解决电机振动噪声问题的实际能力；具备深入研究和学习NVH专业知识和学术专著的能力。

  

04

授课对象

  

　　本课程适应于专门从事电机NVH相关技术工作的工程师、电机设计工程师、工艺师、质检工程师、服务工程师、动力总成系统设计工程师、项目经理、新入职从事电机NVH的大学生、研究生以及所有对电机NVH感兴趣和致力于在电机NVH方面有所作为的相关技术人员。

  

05

课程内容及课时安排

  

　　可能视报名学员所在领域和工作岗位不同授课内容有少许增减，以现场授课内容为准；也欢迎大家在预报名填表的时候提出您的需求和建议。每天课程结束之前安排互动交流环节，现场答疑和交流。

![](https://mmbiz.qpic.cn/mmbiz_jpg/NViavHRy24TA30xICApAiafOzzlRMaznaHRvV0jsGSErna9P45V4YNM9ZGw5SQLsp4NJMI8LSghT6ibKzyjYonRBhKicic5p5sdjS81QWJypu5oo/640?wx_fmt=jpeg&from=appmsg)

  

06

增值服务

  

　　◆ 西莫会员报名享8折优惠，全日制在校学生凭学生证享5折优惠，培训后皆可领500积分用于论坛学习资料的下载。

　　◆ 往期西莫任何研修班学员参加本次培训享72折的优惠。

以上优惠均需提前付款方可参加，如要求开具增值税专用发票则不享受任何优惠。（优惠可面向开具增值税普通发票并提前付款的西莫会员）

　　◆ 参训学员可以针对课程相关问题在课程结束后也能得到老师的解答与指导（微信、邮件、电话）；并建立培训后学习的专用微信群作为培训讲授的补充，供学员间开展后续交流讨论；对课堂上讲授过的内容可长期答疑，以帮助大家巩固课后学习效果。

　　◆ 凡参加我单位组织电机电控培训的企业，均可免费帮助在西莫电机论坛及公众号上发布推送招聘信息，助力企业引进优秀技术人才。

　　◆ 凡参加我单位组织电机电控培训的企业，均可免费帮助在西莫电机论坛及公众号上发布产品信息推广，助力企业宣传产品品牌建设。

  

07

培训课程费用及报名

　　◆ 标准费用：**4980**元/人，含专业培训教材、证书费。食宿可统一安排，费用自理。

　　◆ 培训时间：**2026年6月12日-15日**（授课四天，可提前一天报到）

　　◆ 培训地点：**江苏南京（具体地点会提前一周通知）**

　　◆ 报名方式：扫描下方二维码进行预报名，提交报名信息后可通过提示添加微信索取培训的正式邀请函以及报名回执

![](https://mmbiz.qpic.cn/sz_mmbiz_png/NViavHRy24TAkg7kKtfWOiaK3jVYCnGl9uvWRj7XTg1neoLX3ZpUiaToz9bYJNaoFcBFpuSVrFez0a9T7O7pd31VGYh4qBY7hbibRx7xBuByQBU/640?wx_fmt=png&from=appmsg)

　　其他事宜咨询，请联系会务组负责人**张老师**，电话：**18516258619**欢迎大家踊跃报名！

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIUE2A9cx6RwEpHeicccUnLeRiaV6GExMABU7T4JW6xZ8fuBgS6xUW4tBvCbRQbdgib2ShLrW4Gia4jT7g/640?wx_fmt=gif)

  

  

  

[![](https://mmbiz.qpic.cn/mmbiz_jpg/NViavHRy24TAY60bZITicG9g1oNMU0xyeS6mzYiciaJDwEYPeqq4BibkCldcAwiawkibTQvoXlFv8icJIeodjQbOFSQcKXVWWAg6wDJXXKVvEwsNrTE/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650665364&idx=1&sn=e3b48a694d7cfe7d7461263ec7ef41cb&scene=21#wechat_redirect)

[![](https://mmecoa.qpic.cn/sz_mmecoa_jpg/BQ6VJtWIxxBeMcTRLDMCuyMwoAP2PaLwhP5icLg37LlnDEHxtwPjbKm8LdKicaM3K4rj9oytbeuK8gqTFKAGneTk9d8L867l2wIT9SOBbj6hA/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650665333&idx=1&sn=07a3c7a2792fae915cba092e00656b95&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIVHpuIlP1V0YxafMPVegZyoMVlYicMsJHiawaq6ZBOiaicbSTXHkN9al4lLl0ibfPS8ubZmZCAwdSoyOVA/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650665386&idx=3&sn=cfb5dd239d11c83a174aa8fd61607e31&scene=21#wechat_redirect)![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIUfOAjXn1AUTs3kViax3rSDvTWPnp1LrAXb97Bvkuzm8WZTu1zqnG0SuNQmBbLt8aibThApiafVVt8NA/640?wx_fmt=png)

[![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVhiaShka2hzoZ3EwiaApgSc27MFwUVnGiaIe1wavPaQpAjeEJBqpZWthz1qY4bkVXDyJbfTPkicMx9FA/640?wx_fmt=png)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650665386&idx=4&sn=3ae81894056947a37c2d50fdadd01d2f&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIUciadY9CdGPVQ6cVu2Mc9Xibk41P66RUZDibRV0MjmYSLAribv7zMKCDojkLWfWXOGVD0MdYxB4xotgw/640?wx_fmt=jpeg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650665386&idx=5&sn=03d29a9162913e6b9f48514752b089fe&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWEDKUS6uyXBHiboINPcBLKibHWbwAfibdzBE1M50oLib9VPYiaQXtgd8o9aH4byicFy5BfmQb84jMHlxBQ/640?wx_fmt=png)

点击**阅读原文**，直接报名参加本次培训！

****觉得好看，请点这里****↓********↓****↓********↓************