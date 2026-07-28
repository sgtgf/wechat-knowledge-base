# 解锁电机NVH全领域仿真（本体、控制、动力总成、整车系统）的正确方式


> 原文地址: [https://mp.weixin.qq.com/s/6rX6pugBVIa0xFSSZJoQDQ](https://mp.weixin.qq.com/s/6rX6pugBVIa0xFSSZJoQDQ)

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIXNZfbdj53bicxxicss8D5WANHd3de5SdpQ8pwibiaIsMAlsTsWgx7vorTs6e0kq35k0XWDurue9XsQAA/640?wx_fmt=gif)

[![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVSxQKv9fv5DX0yndEv5nwjySjAo76biaScM1O4pKCh3TCYD9EchSsnvypBqKicUia1AGlVBxRMp2g3w/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650657579&idx=1&sn=f3dade0ea9eb20aa1b613329bb2c4eee&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_gif/icrlIsZGPBvyokNic4JvGNA3jKsVNf1qetvQY78kokibWsFndypjOUicU3ERKwyy6kU62eeTEUUzqK8p07ib50pbZtg/640?wx_fmt=gif&wxfrom=13&tp=wxpic)

  

关注公众号，点击公众号主页右上角“ · · · ”，设置星标，实时关注最新资讯，以免错过最新推送

由于电机NVH问题的相关理论复杂，同时涉及电磁/结构/声学多学科，是典型的多物理场耦合问题，其仿真分析具有一定难度。Ansys软件目前已经可以很好地实现电机NVH仿真计算：利用Maxwell2D/3D快速仿真电机在多转速下定、转子表面的频域电磁力并无缝链接到Workbench平台Harmonic Response模块进行多转速谐响应分析，得到电机的ERP Level Waterfall图，用于分析电机在各转速下的谐振情况；同时多转速谐响应分析结果也可传递到Harmonic Acoustics模块进行Sound Power Level Waterfall的分析，用于进一步对电机噪声水平进行评估。流程如下：

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIV0R3upRne1rTYIk6a1sls0DfezgQic7MCCFSicLpwfiaIicRkNuTicXZaneSWa166lshTiczMjKEaicGYibA/640?wx_fmt=png&from=appmsg)

Magnetic Field Solution

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWvbHaLY2bzZVZvuodKX0GukZXrcsRfTibwKCyWYAZJUVmBM5R5RPG9qwIOkmLIFLt0A3OFibU3v8OA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIXsPPA6LSzzvjqSafrIHI97PJaGgLFg0087R2zIayxBrFvl9jX4ib2iaBmjn7hhImG7126DdiaEOpruQ/640?wx_fmt=jpeg)

Modal and Vibration

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWvbHaLY2bzZVZvuodKX0GuaYRPMT9OHY0ZicP6vZJNx1ibbXTwuiblrnTWL4SicMqdkYoeKxr09J4IzQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIXsPPA6LSzzvjqSafrIHI971icej4gUuZzf7k7JCNESAIcpgUWYzibu9ujJw681WAD5BvUEIJASjSxQ/640?wx_fmt=jpeg)

Acoustic

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWvbHaLY2bzZVZvuodKX0Gu2hhzrljaQY5HhknibDL4gJalNe98ic6Fvib1ZCk4ncDEvYIgShDwuR9rQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWvbHaLY2bzZVZvuodKX0GuSj8fhhicVGOIOv1JQY7dWNicUtuLnf1kjWSW3hOK6bZahNjvldQRTuqQ/640?wx_fmt=png)

同时，通过Ansys Motion结合Maxwell、Acoustic等软件还可以完成整个电驱动系统的NVH分析：

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIV0R3upRne1rTYIk6a1sls0aelZP4SsicZnGKqNFTo0TbKy35MugjqAMzQxrSEJGrLqUWGZQRqbfLQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIV0R3upRne1rTYIk6a1sls00tDR3LlVOJegB1LR5AjJaVj8yrSVCZRYeCOOR1NDqfDniahOrs3KJ3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIV0R3upRne1rTYIk6a1sls02dBZ7ibiatvAscxyJQbicQ9TqrUibK3NtTp7OZmpc0bcjibLDOhnoWhHQ1w/640?wx_fmt=png&from=appmsg)

另外，借助于多目标优化模块可对包括电机NVH在内的各项性能指标进行参数化寻优，快速实现产品迭代创新；同时还可以借助Ansys Sound仿真平台完成电机噪声仿真数据后处理与声音设计以及在整车上预测研究电机声品质：

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIV0R3upRne1rTYIk6a1sls0GRRx6FzQqV8R7OibRzgIlSerDdtNchm9otzdpVWiaEHhzZPQ94SYibnqw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIV0R3upRne1rTYIk6a1sls065CeGZDh5uyFYcMXvWYFMNCgDwyrpicYooUVTOIfRMv1Kia4uhtCUt8Q/640?wx_fmt=png&from=appmsg)  

**随着大家对考虑电机控制系统的NVH仿真分析需求日益增多，采用Ansys Maxwell、Mechanical、 Twin Builder、 Sound等软件的基于系统模型电机时域NVH仿真方案还可以进行电机变转速过程中真实的SVPWM电压供电下的电机NVH仿真计算，在Twin Builder中建立包括电机控制电路和软件算法的系统模型，加入电机ECE，电磁力ECE，结构SPM模型用于计算任意工况下的时域表面振动，并将时域表面振动声压数据导入Sound生成频域瀑布图：**

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIV0R3upRne1rTYIk6a1sls0icSXYaJiaqxfSPxW5kl31pLRDNGAsMqYdO5QtOFdMKhsmuQjQ8uGrPrg/640?wx_fmt=png&from=appmsg)

在电机NVH计算时，一般既要考虑电机相关激励，也要考虑变频器相关激励。在Ansys最新版软件中，可以对变时间步长进行瞬态电磁力插值，在载波频率及其整数倍频率附近进行谐波电磁力插值，Ansys Mechanical不同转速点支持频率不均匀的谐波电磁力，可以考虑由变频器激励导致的电机高频噪声，变时间步长减少仿真时间，提供矩形的ERP图：

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIV0R3upRne1rTYIk6a1sls0m1tAemlfOCicBIF4fk29R0MoAicV2VYBgBbib5Pr7wqyq6EpWBjaic6y0g/640?wx_fmt=png&from=appmsg)

6月13-16日，西莫在青岛**举办的**“电机NVH问题的机理和测试仿真”研修班将力邀Ansys电机应用专家、Ansys机电产品专家、Ansys结构分析专家和Ansys声学专家共同为您详细讲解和全面展示电机及考虑控制系统的NVH仿真方法、电机动力总成NVH分析流程以及整车等复杂电机系统的声音设计应用和实现过程，欢迎大家扫描下方海报中二维码报名参加本次培训：

![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKuhwyLOAKx4uQANAbAsDTBmeQCZZcHVibQqW5XQhHeznXkSjywcD3l6sZ3jicLIYeQoSMxOBSvEIXAQ/640?wx_fmt=jpeg&from=appmsg)

作为电机设计进阶研修班，本课程将带来具体哪些方面的提高和帮助呢？下面将进一步给大家介绍培训的内容和安排：

  

01

课程概述

  

　　所谓NVH，就是噪声、振动与声振粗糙度（Noise、Vibration、Harshness）的英文缩写。这是汽车行业的一个专有名词，是衡量汽车乘坐舒适性的综合性指标。随着新能源电动汽车的飞速普及，作为电动汽车“心脏”的驱动电机的NVH问题也日益受到重视。电机是各行各业的驱动动力，其实不仅仅是汽车行业，随着技术的飞速发展，家电、军事、船舶、铁路、城市轨道交通、工业驱动…等等各行各业对电机的振动噪声问题也越来越被重视，要求越来越严格。然而有关NVH问题，涉及数学、物理、电磁、机械、振动、声学、材料等等多个学科，被誉为“天书”、“玄学”，极难入门，许多同学想钻研这方面的专业书籍，但大多都是刚刚看完绪论就被堵在了门外，无法深入看下去，多次自我放弃。为了解决电机NVH入门难的问题，我们专门打造了这门培训课程。培训的内容主要由以下两大部分组成：第一部分基础理论与测试实战篇，从基本物理概念入手，以中学数学和物理知识为基础，对涉及的相关基础知识及时补充复习，逐步深入到电机振动噪声的基本原理、分析方法、振动噪声测试及设计、减振降噪措施等等，为了增加学员的感性认识，振动噪声的测试部分邀请专业的测试公司进行深入细致的讲解，并加入了现场试验演示和公司实验室参观；第二部分仿真设计篇，将详细介绍基于Ansys软件平台的电机电磁振动噪声分析流程和考虑电机控制系统的NVH仿真计算及它们具体的实现过程，并系统讲解电机动力总成NVH仿真流程和复杂电机系统中NVH分析与声音设计应用。课程讲解通俗易懂，深入浅出，帮助想深入学习电机NVH的同学在不知不觉中跨过入门壁垒，进入NVH的殿堂。如果说NVH是“天书” 那么本课程就是通往这个“天书”的“天梯”！如果说NVH是“玄学”，那么本课程就是“化玄为俗”的“字典”！

  

02

授课老师

  

**李保来，**在行业内从事电机设计、工艺、生产、教学、调试等工作四十多年，正高级工程师，浙江大学求是工程岗兼职教授，太原理工大学兼职教授，享受国务院特殊津贴技术专家，在业界有极高的专业威望和学术造诣，理论基础扎实，实战经验丰富，先后主持完成过多项重大科研项目，荣获多次省部级科技技术奖，拥有多项专利，发表多篇论文。同时主讲西莫培训“电机原理及设计通解”、“永磁电机的原理、设计及制造工艺”研修班课程，往期培训学员超1100人，好评如潮。西莫首席技术专家。

       **薛胜鑫，**青岛艾普智能仪器有限公司副总经理，拥有电机测试技术经验20余年，带领团队攻克多项世界级电机测试难题，填补多项国内技术空白，例如NVH异音检测技术、永磁同步电机高性能分析测试技术、PD局部放电技术、单点线伤测试技术、搭线垂线测试技术等，并参与多项电机测试国家标准修订。

      **王杨，**曾长期从事电机研发、设计等工作，对Ansys低频电磁产品有深入了解，在电机工程仿真领域经验丰富。2019年加入Ansys公司，负责低频电磁仿真软件Maxwell在电机行业的技术支持、工程咨询等工作，将在本次课程中全面系统地介绍Ansys电机振动噪声仿真分析流程及其实现过程。Ansys主任工程师。

      **杨利辉，**曾长期从事电力电子电源产品、电机本体和电机控制系统的设计和研发工作，对Ansys机电仿真产品用于电源、电机及其控制器等实际工程应用有深入的理解，对如何把仿真软件用于设计和优化实际工程产品有丰富的经验，精通Ansys电机仿真设计软件Maxwell和电力电子仿真设计软件Simplorer(Twin Builder)等。在本次课程中将系统地介绍Ansys产品用于考虑电机控制系统的电机NVH实现过程。Ansys机电产品专家。

      **周英杰，**负责Ansys Motion多体动力学仿真软件、Mechanical结构有限元软件及Acoustic声学仿真模块售前技术推广，对齿轮传动系统NVH仿真有较为深入的研究。将在本次课程中将系统介绍Ansys Maxwell+Ansys Motion+Ansys Mechanical Acoustic电机齿轮箱系统时域NVH仿真流程。Ansys中国高级结构工程师。

      **李彦昊，**2014年毕业于同济大学车辆工程专业，并获得硕士学位。2019年加入Ansys中国，负责Ansys Sound软件在亚太地区的应用推广及技术支持。长期工作于汽车行业并从事动力总成NVH性能的研发工作，在汽车噪音测试及仿真方面拥有丰富的工程经验，能够为客户NVH开发工作提供可靠的帮助及建议，将在本次课程中系统地介绍基于多物理场联合仿真的电机声品质解决方案及整车等复杂电机系统的NVH表现评估。Ansys声学专家。

　　本课程凝聚了各位老师多年丰富的工作经验和科研成果，相信通过本课程短期的培训，必将使您收获满满，飞跃长进。课程前五期培训参加学员已近400人，课后赢得大家的一致好评和口碑赞誉。

  

03

培训目标

  

　　通过本课程的学习，使学员理解和掌握电机NVH问题的基本概念、基本知识和基本原理；在工程实践中具备基本的设计、测试和分析解决电机振动噪声问题的实际能力；具备深入研究和学习NVH专业知识和学术专著的能力。

  

04

授课对象

  

　　本课程适应于专门从事电机NVH相关技术工作的工程师、电机设计工程师、工艺师、质检工程师、服务工程师、动力总成系统设计工程师、项目经理、新入职从事电机NVH的大学生、研究生以及所有对电机NVH感兴趣和致力于在电机NVH方面有所作为的相关技术人员。

  

05

课程内容及课时安排

  

　　可能视报名学员所在领域和工作岗位不同授课内容有少许增减，以现场授课内容为准；也欢迎大家在预报名填表的时候提出您的需求和建议。每天课程结束之前安排互动交流环节，现场答疑和交流。

![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKtwVkQziadctVRiamc5TiczVblGIqDEdPjZTjiaSrkmqnaq83mR5yLVP23UyreibsC7vOJ1FYlHhvWt3QQ/640?wx_fmt=jpeg&from=appmsg)

  

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

　　◆ 培训时间：**2025年6月13日-16日**（授课四天，可提前一天报到）

　　◆ 培训地点：**山东青岛**（具体培训培训地点在开课前一个月内确定）

　　◆ 报名方式：扫描下方二维码进行预报名，提交报名信息后可通过提示添加微信索取培训的正式邀请函以及报名回执

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIXanAyERb7zyHibKcjicmGsQiaICBc3BhWejWhpBTvf6t35fBkicBSMFK2J8SAxuLRTYjM5gAMpUibQ7tw/640?wx_fmt=png&from=appmsg)

　　其他事宜咨询，请联系会务组负责人**张老师**，电话：**18516258619**欢迎大家踊跃报名！

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIUE2A9cx6RwEpHeicccUnLeRiaV6GExMABU7T4JW6xZ8fuBgS6xUW4tBvCbRQbdgib2ShLrW4Gia4jT7g/640?wx_fmt=gif)

[![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVNcIUT6GuypbB19OZCfibVWWHoXkAW5f6Q8agluTycI4TlDprAeHan5xqC8tV1ibVwYZuY7Z2ZiafibQ/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650657571&idx=1&sn=36bd3ec536248fff36a5277183599dcc&scene=21#wechat_redirect)![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIUfOAjXn1AUTs3kViax3rSDvTWPnp1LrAXb97Bvkuzm8WZTu1zqnG0SuNQmBbLt8aibThApiafVVt8NA/640?wx_fmt=png)

[![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVhiaShka2hzoZ3EwiaApgSc27MFwUVnGiaIe1wavPaQpAjeEJBqpZWthz1qY4bkVXDyJbfTPkicMx9FA/640?wx_fmt=png)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650657571&idx=2&sn=bf2275569ee7a1fb1e26d0baf4d01a71&scene=21#wechat_redirect)  

[![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWZmc8zsicsTcbCIbVFv7SoOodJAqUibPBTD0s7skbpFRlvg05pUo90abibFXBk5dljD4LMBxk8x0vqw/640?wx_fmt=png&from=appmsg)](http://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650653764&idx=1&sn=eb5317bf3d00f3cbee6d4528d63d4976&chksm=88bc6f4bbfcbe65d53c1e02169550dbdc8d8829eeea7518fee5bd7dc595c04c9a5b75d14f9a0&scene=21#wechat_redirect)![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWEDKUS6uyXBHiboINPcBLKibHWbwAfibdzBE1M50oLib9VPYiaQXtgd8o9aH4byicFy5BfmQb84jMHlxBQ/640?wx_fmt=png)点击**阅读原文**，直接报名参加本次培训！

****觉得好看，请点这里****↓********↓****↓********↓************