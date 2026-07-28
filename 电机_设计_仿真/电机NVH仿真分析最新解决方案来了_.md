# 电机NVH仿真分析最新解决方案来了！


> 原文地址: [https://mp.weixin.qq.com/s/99JIZjB\_SfG4nLUfazfpuA](https://mp.weixin.qq.com/s/99JIZjB_SfG4nLUfazfpuA)

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIXNZfbdj53bicxxicss8D5WANHd3de5SdpQ8pwibiaIsMAlsTsWgx7vorTs6e0kq35k0XWDurue9XsQAA/640?wx_fmt=gif)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIUZRJ7vwDFxcJibDnGHkr883klJHIqiaDa2xYic0lB84Nia2XOk1j7764Ep7o9o6oXtAOl5h24pwU512A/640?wx_fmt=jpeg)](http://mp.weixin.qq.com/s?__biz=MzIyNjI3NTgwOA==&mid=2247484084&idx=1&sn=00ca1aafa29fd461041019fcbc010237&chksm=e873ba3bdf04332df905461f8b87444c9701e0a2b514a338bb25aef6c771384be4adb803970e&scene=21#wechat_redirect)

在本次培训的仿真教学环节中，我们将研究永磁电机定子上的瞬变电磁力所产生的振动和噪声，并建立完整的工作流程，以通过Maxwell与Workbench (WB) 中 Harmonic Response 和Harmonic Acoustics 模块的耦合来仿真振动噪声。您将学会如何：

设置Maxwell电机电磁力分析模型并对其进行仿真

利用Harmonic Response模块与Maxwell进行耦合分析

o应力应力，变形，速度曲线等与频率的关系

o电机的ERP等效辐射功率

o电机多转速ERP瀑布图

利用Harmonic Acoustics模块与Harmonic Response 进行耦合分析

o电机噪声场的分布

o电机多转速噪声瀑布图

利用Modal模块进行定子模态分析

利用VRXPERIENCE Sound 对噪声仿真结果进行后处理

最新版Maxwell时空电磁力波的二维傅里叶分析工具插件的使用方法

另外，永磁同步电机常采用转子分段斜极削弱转矩脉动和NVH，在以往的Ansys电机NVH仿真解决方案中，我们必须采用多个不同转子位置角的Maxwell 2D模型分别计算各段电磁力并导入谐响应模块，或者使用Maxwell 3D直接计算真实斜极模型的电磁力并导入谐响应模块，这都给NVH分析带来很大的不便。从Maxwell 2021R2开始，Maxwell 2D中的Skew功能有了较大改进，支持标准奇数分段的V字型斜极和用户自定义斜极，同时Skew功能支持将任意分段下的多段电磁力自动映射到谐响应模块，这大幅简化了NVH分析流程。本次培训也将为大家演示该流程的实现过程，并利用Ansys Sound对不同斜极方案的噪声进行对比分析。如果以上内容正是您需要进一步学习了解和掌握的，欢迎扫描下方海报二维码报名参加本次培训：

![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIUu7cXrMYuoMUPian5ahyXX0jCNibia59bI91nxibNzNt5QNIr6Oj1PQwbtWUegvqYiaGawm5fHCdgTSSw/640?wx_fmt=jpeg)

随着以上仿真分析部分教学环节的更新，小编再来带大家了解一下本次培训中部分章节的精彩内容吧！希望通过这次培训能真正帮大家解决以上问题的处理方法并更好地应用软件工具完成工作上相关问题的解决：

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVFTChvr76KNol5Cp590mFrPL5nX8xBbHXVb8DBJia5VCbOpLEx5qc97qIoORmUbLqqNia7uT9TKv9g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVFTChvr76KNol5Cp590mFrnK0Pfg1JJicrnMHRkiaIvs9rJK2EG3m1KNCcrjUVYRD7IeU8Rn9FH4mg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVFTChvr76KNol5Cp590mFrOjibSt63VezhPe6quJQPiaeVmYrQoHPlsbA2ukogib9MLyt8Tticsiac2iag/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVFTChvr76KNol5Cp590mFr5nW1ZuId6m5ceJLmXVWPOXe0FhxibObdjqmicVj9VYTyiaLDZKQjnMmDQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVFTChvr76KNol5Cp590mFr6hZaKPwArxZUf4Ec5BFO3jb5LD6jxNIicJVI3rh30L4EnH5JibTL1ibOw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVFTChvr76KNol5Cp590mFrtSqMasHnZ56J7OrFeQiaK0B5HSVWf8aMB657JodpvCqEMSBdEDCWXog/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIULYB5dtwc9QcrNJ4EMumkNayibPAQiauQyqKqrsQEDU1HKNPcldORItx1vRQP2v7wPrUjCTO7wXlWQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIULYB5dtwc9QcrNJ4EMumkNwgmeELcnsic7ZticJ5KPWOYbIKlYdGY9fEkkYibiaWbWvsuLMNmvG4NYjg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIULYB5dtwc9QcrNJ4EMumkNsyW1EadxTX26QW0KPicRZqZ07PibOyf3ZYxkwj3TDhqsrUViavWiaSUic0w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIULYB5dtwc9QcrNJ4EMumkN2E67BDwD3TlpfZjtmibrcXPRcr6BgWY45d49PXdNhctGJCxibCXewxAw/640?wx_fmt=png)

看到这里，相信您对本次培训已经相当的期待，关于培训的更多详细介绍，请看下文：

  

01

课程概述

  

　　所谓NVH，就是噪声、振动与声振粗糙度（Noise、Vibration、Harshness）的英文缩写。这是汽车行业的一个专有名词，是衡量汽车乘坐舒适性的综合性指标。随着新能源电动汽车的飞速普及，作为电动汽车“心脏”的驱动电机的NVH问题也日益受到重视。电机是各行各业的驱动动力，其实不仅仅是汽车行业，随着技术的飞速发展，家电、军事、船舶、铁路、城市轨道交通、工业驱动…等等各行各业对电机的振动噪声问题也越来越被重视，要求越来越严格。然而有关NVH问题，涉及数学、物理、电磁、机械、振动、声学、材料等等多个学科，被誉为“天书”、“玄学”，极难入门，许多同学想钻研这方面的专业书籍，但大多都是刚刚看完绪论就被堵在了门外，无法深入看下去，多次自我放弃。为了解决电机NVH入门难的问题，我们专门打造了这门培训课程。课程力求从基本物理概念入手，以中学数学和物理知识为基础，对涉及的相关基础知识及时补充复习，逐步深入到电机振动噪声的基本原理、分析方法、振动噪声测试及设计、减振降噪措施等等，并结合工程实例和相关仿真软件，学习电机的有关NVH仿真建模和仿真计算。讲解通俗易懂，深入浅出，帮助想深入学习电机NVH的同学在不知不觉中跨过入门壁垒，进入NVH的殿堂。如果说NVH是“天书” 那么本课程就是通往这个“天书”的“天梯”！如果说NVH是“玄学”，那么本课程就是“化玄为俗”的“字典”！

  

02

授课老师

  

　　**专家一**：行业内从事电机设计、工艺、生产、教学、调试等工作三十余年的教授级高级工程师，享受国务院特殊津贴技术专家，在业界有极高的专业威望和学术造诣，理论基础扎实，实战经验丰富，先后主持完成过多项重大科研项目，荣获多次省部级科技技术奖，拥有多项专利，发表多篇论文。曾主讲“电机原理及设计通解”研修班课程，往期培训学员400余人，好评如潮。西莫首席技术专家。

　　**专家二**：曾长期从事电机研发、设计等工作，对Ansys低频电磁产品有深入了解，在电机工程仿真领域经验丰富。2019年加入Ansys公司，负责低频电磁仿真软件Maxwell在电机行业的技术支持、工程咨询等工作，将在本次课程中全面系统地介绍Ansys电机振动噪声仿真分析流程及其实现过程。Ansys中国高级应用工程师。

**专家三**：2014年毕业于同济大学车辆工程专业，并获得硕士学位。2019年加入Ansys中国，负责Ansys VRXPERIENCE Sound软件在亚太地区的应用推广及技术支持。长期工作于汽车行业并从事动力总成NVH性能的研发工作，在汽车噪音测试及仿真方面拥有丰富的工程经验，能够为客户NVH开发工作提供可靠的帮助及建议，将在本次课程中系统地介绍基于多物理场联合仿真的电机声品质解决方案及整车NVH表现评估。Ansys声学专家。

　　本课程凝聚了各位老师多年丰富的工作经验和科研成果，相信通过本课程短期的培训，必将使您收获满满，飞跃长进。

  

03

培训目标

  

　　通过本课程的学习，使学员理解和掌握电机NVH问题的基本概念、基本知识和基本原理；在工程实践中具备基本的设计、测试和分析解决电机振动噪声问题的实际能力；具备深入研究和学习NVH专业知识和学术专著的能力。

  

04

授课对象

  

　　本课程适应于专门从事电机NVH相关技术工作的工程师、电机设计工程师、工艺师、质检工程师、服务工程师、动力总成系统设计工程师、项目经理、新入职从事电机NVH的大学生、研究生以及所有对电机NVH感兴趣和致力于在电机NVH方面有所作为的相关技术人员。

  

05

课程内容及课时安排

  

　　可能视报名学员所在领域和工作岗位不同授课内容有少许增减，以现场授课内容为准；也欢迎大家在预报名填表的时候提出您的需求和建议。每天课程结束之前安排互动交流环节，现场答疑和交流。

![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIVAFkCkz9jdnCZicvia6Y1u1zniac2pV0ZrOOhEoFhDoDPalHTnImFicLt7sHzCf8QKtYtAjETCmc377w/640?wx_fmt=jpeg)

  

06

增值服务

  

　　◆ 西莫会员报名享8折优惠，全日制在校学生凭学生证享5折优惠，培训后皆可领500积分用于论坛学习资料的下载。

　　◆ 往期学员再次参加任一课程的培训享72折的优惠，以上优惠需提前付款方可参加，如要求开具增值税专用发票则不享受以上优惠（提供开具的增值税普通发票类别可为技术服务费、会议费）。

　　◆ 参训学员可以针对课程相关问题在课程结束后也能得到老师的解答与指导（微信、邮件、电话），并建立培训后学习的专用微信群作为培训讲授的补充，不必担心课堂学习效果。

　　◆ 凡参加我单位组织电机电控培训的企业，均可免费帮助在西莫电机论坛及公众号上发布推送招聘信息，助力企业引进优秀技术人才。

　　◆ 凡参加我单位组织电机电控培训的企业，均可免费帮助在西莫电机论坛及公众号上发布产品信息推广，助力企业宣传产品品牌建设。

  

07

培训课程费用及报名

  

　　◆ 标准费用：**3980**元/人，含专业培训教材、证书费。食宿可统一安排，费用自理。

　　◆ 培训时间：2021年10月23-24日（授课二天，可提前一天报到）

　　◆ 培训地点：**上海江苏饭店**

　　◆ 报名方式：扫描下方二维码进行预报名，提交报名信息后可通过提示添加微信索取培训的正式邀请函以及报名回执

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIUZRJ7vwDFxcJibDnGHkr883M3QFV2pyyib8CJg1QQsiauKrfxe9GP7tVtU4euRs3CrrgiaCpYEYMqLYA/640?wx_fmt=png)

　　其他事宜咨询，请联系会务组负责人**张老师**，电话：**18516258619**欢迎大家踊跃报名！

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIUE2A9cx6RwEpHeicccUnLeRiaV6GExMABU7T4JW6xZ8fuBgS6xUW4tBvCbRQbdgib2ShLrW4Gia4jT7g/640?wx_fmt=gif)[](http://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650633044&idx=1&sn=bc32a36793375e6187e140ad96d40d5e&chksm=88bcd85bbfcb514d763e9235d153e73120db5838eb1d69cf3dab561a61ac9b978694cbfb2830&scene=21#wechat_redirect)******[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIW2bPUClceD7AVO6UUicSVLGeMSpfpapoYxQhXMp27OdyGwmEzR9V5woAKCFwLnib7HbN1QahE2QCtg/640?wx_fmt=jpeg)](http://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650633093&idx=1&sn=fefea38fe19eb5a5fe651b1febf0d5f4&chksm=88bcd88abfcb519c5d53e88adbd98e8f3ee8bc2dec000b90162a5d3840071e6280785080741f&scene=21#wechat_redirect)******[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIUZfZ5uT2ibRZcByL2xLy5BlhOt5RDB1bx8XFXbuWveJMu1A2cV46RqXkYORGpsGpajqmHIVoKp9NQ/640?wx_fmt=jpeg)](http://mp.weixin.qq.com/s?__biz=MzIyNjI3NTgwOA==&mid=2247484057&idx=1&sn=037907fe75f8e9970aa690a538573dda&chksm=e873ba16df0433000bf04541061fecc2aa738d6722076fc86406c8842e49583223788ad0b0f4&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIUfOAjXn1AUTs3kViax3rSDvTWPnp1LrAXb97Bvkuzm8WZTu1zqnG0SuNQmBbLt8aibThApiafVVt8NA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVhiaShka2hzoZ3EwiaApgSc27MFwUVnGiaIe1wavPaQpAjeEJBqpZWthz1qY4bkVXDyJbfTPkicMx9FA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWEDKUS6uyXBHiboINPcBLKibHWbwAfibdzBE1M50oLib9VPYiaQXtgd8o9aH4byicFy5BfmQb84jMHlxBQ/640?wx_fmt=png)

点击**阅读原文**，直接报名参加本次培训！  

  

****觉得好看，请点这里↓****↓********↓********