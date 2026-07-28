# 永磁同步电机控制太难？深入理解FOC是第一步


> 原文地址: [https://mp.weixin.qq.com/s/-e0qk0f8H6ND39qWWPOhUQ](https://mp.weixin.qq.com/s/-e0qk0f8H6ND39qWWPOhUQ)

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIXNZfbdj53bicxxicss8D5WANHd3de5SdpQ8pwibiaIsMAlsTsWgx7vorTs6e0kq35k0XWDurue9XsQAA/640?wx_fmt=gif)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIWXtbaCZ4lWtj85RUYw1BAF4R0EffJiaaP2qB1gbSbtCmjffwGdnXzYrdzTgEwJlJwRvFt5HOaXwBA/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650660350&idx=1&sn=fe9aaf1bdaf3cc301fa376a394bbff60&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_gif/icrlIsZGPBvyokNic4JvGNA3jKsVNf1qetvQY78kokibWsFndypjOUicU3ERKwyy6kU62eeTEUUzqK8p07ib50pbZtg/640?wx_fmt=gif&wxfrom=13&tp=wxpic)

  

关注公众号，点击公众号主页右上角“ · · · ”，设置星标，实时关注最新资讯，以免错过最新推送

永磁同步电动机是由电励磁三相同步电动机发展而来。它用永磁体代替了电励磁系统，从而省去了励磁线圈、集电环和电刷，而定子与电励磁三相同步电动机基本相同，故称为永磁同步电动机(Permanent Magnet Synchronous Motor，PMSM)。用于矢量控制的PMSM，要求其永磁励磁磁场波形是正弦的，这也是PMSM的一个基本特征。

FOC——磁场定向控制（Field Oriented Control）通常称为“矢量控制”，是通过控制变频器输出电压的幅值和频率控制三相交流电机的一种变频驱动控制方法。通过测量和控制电机的定子电流矢量，根据磁场定向控制原理分别对电机的励磁电流（Id）和转矩电流（Iq）进行控制，从而将三相交流电机等效为直流电机控制。通过坐标变换，将三相静止坐标系转化为两相旋转的坐标系，从而使三相交流耦合的定子电流转换为相互正交、独立解耦的转矩和励磁分量，达到类似于他励电机直接控制转矩的目的。实现FOC的原理框图如下：

![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIVfibiaj0P3mJd5HelVxuA55bIfBJpWuZZbLNZ60Hhouib5AicrG0gX6Ic2MAhCMfJaS6wOBdgf5ZApvA/640?wx_fmt=jpeg)

FOC最主要就是通过控制电流和角度来实现，电流来自相电流采集之后的解耦，通常情况下，使用FOC控制方式的电流采样大致有以下几种：

1 三电阻采样；

2 双电阻采样；

3 单电阻采样；

4 电流传感器采样；

5 采集mos内阻Rdson电流采样。

实现带霍尔FOC方案的另一个要素就是角度估算器（无霍尔时为角度观测器），矢量控制需要连续的位置信号，需要对角度进行细分，如下图所示：

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVfibiaj0P3mJd5HelVxuA55b1JbOdpmvRqpSV2nevmEYrFdAKKC9QZQjqb1fR5UxcmlmkTmRDn0FaQ/640?wx_fmt=png&from=appmsg)

每个60°电角度hall扇区角速度可以通过公式求出，在下一个hall的扇区，可以通过角速度对时间积分求得角度的变化，进而实现对位置和速度的估算。

空间矢量调制（SVPWM）是现在比较常用的一种比较新颖的控制方法，是由三相功率逆变器的六个功率开关元件组成的特定开关模式产生的脉宽调制波，通过伏秒平衡的原理，控制定子磁链按照正弦变化，同时也能使输出电流波形接近于理想的正弦波形。通过对采样电流的处理和角度一起构成发波，可以基于SVPWM通过控制功率器件的开关，使输出的波形接近正弦最终实现FOC方案。整体控制系统方案如下图所示：

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVfibiaj0P3mJd5HelVxuA55b5PcEvWMicWtWGE9CFEuiaAz9MYibzFExm2OOWje0psHAMhBVn8Pib059Wg/640?wx_fmt=png&from=appmsg)

基于大家对永磁同步电机控制在实际工作生活中应用实现的迫切需求，下月6-7日，我们再次邀请西莫电机圈技术团队电控领域负责人丛凤龙总监倾力打造新一期永磁电机控制培训——“永磁电机控制原理及方案开发实践”研修班苏州站：培训从矢量控制基本原理讲起，一步一步教大家深入理解FOC和SVPWM，通过详细讲解电流采样和角度估算器等大家关心的内容，基于一个使用霍尔位置传感器的童车方案做FOC的实现精讲，并通过一些视频及波形图片给学员进行详细解析。欢迎大家扫描下方海报中二维码报名参加本次培训！

![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIWpDMueHaqLCq7kpWXH8XmeaILZ1oKEvNTfmUuffLjTtkhZvNkGy1lH0CpbhJ2RFzJsMRYlpsr0GQ/640?wx_fmt=jpeg&from=appmsg)

欢迎对永磁电机控制有迫切学习需求的朋友扫码海报二维码报名，关于本次培训的详细情况介绍如下：

  

**01**

**授课背景**

![](https://mmbiz.qpic.cn/mmbiz_gif/bL2iaicTYdZn6nzJsTjulCOiaHqgHb8f13njr79J3xEQOAez9ZTAdp6PMETMQTaeDB8KLk7JfkicbqhTjLEfJLbYcw/640?wx_fmt=gif)

本课程是专门针对电机控制软件、硬件、测试、技术支持等相关人员量身打造的一款技术培训课程。对于从事电机控制专用MCU芯片服务相关的人员有很大的帮助。本课程尤其适用于从事电动工具、电动自行车、风机控制、水泵控制、智能家居等行业的电机控制技术人员。

电机是工业和生活设施的主要动力，随着电气化和现代社会自动化程度的发展，电机的作用越来越大，电机行业永远是一个朝阳的产业，社会自动化程度越高，人类会变得越懒惰，越是需要电机来解放人类的体力劳动，电机拖动系统应运而生。电机拖动在我们的生活中无处不在，小到我们常用的剃须刀、筋膜枪、智能门锁；大到冰箱压缩机、洗衣机电机、电动汽车等。电机拖动绝不仅仅是转起来而已，我们需要的是更高效率高能量转换率的电机控制方案。

随着社会智能化的加速，随着智能家居万物互联的逐渐兴起，电机拖动已经越来越多地覆盖在我们生活的周围。社会对电机控制的专业人才需求也越来越旺盛。目前社会上电机控制专业人才整体还是体现出理论知识薄弱、实操能力弱、不会分析具体问题等特点。究其原因，主要是以下几点：一是电机学课程比较枯燥乏味，需要比较深的数学理论功底，课程缺乏趣味性，导致高校学生不喜欢选择这门课程；二是在学校里虽然有理论课程支撑，但是实际的电机控制方案需要更多的是理论联系实际，需要很强的实操能力，仅凭学校里面学的仿真不足以真实的反映出实际的电机使用工况；三是电机控制需要比较强的综合知识能力，对于电力电子器件需要有一定的知识积累，电机控制，并不是软件会编程就可以，一个好的电机控制工程师是需要软硬件结合，整体考虑去解决实际问题，对于很多由于电力电子器件及电机本身的感性负载特性带来的一些问题，需要可以精准的定位到问题所在并且解决它。

因此，许多电气电子专业的毕业生和一些刚加入到电机控制行业的专业技术人员急需找到一个可以让他们入门并且看到未来的课程，一个既有理论知识，又有实际软件编程教学，又有实际硬件设计教学，还有软件修改项会带来哪些变化并且可以用示波器观察讲解这样的一门课程。这门课程既可以让他们快速提升专业理论知识又能短期掌握实操技能，本课程正是基于这些需求精心策划开发出的一款培训课程。

**02**

**课程简介**

![](https://mmbiz.qpic.cn/mmbiz_gif/bL2iaicTYdZn6nzJsTjulCOiaHqgHb8f13njr79J3xEQOAez9ZTAdp6PMETMQTaeDB8KLk7JfkicbqhTjLEfJLbYcw/640?wx_fmt=gif)

课程内容由四大板块组成，每个板块都有详细的实际案例解析，也会提前介绍相关的理论知识、硬件设计要点、软件实现详解等，在每个模块的最后部分都是实际应用案例的详细解析，多数是基于锂电池电压平台开发，课上学员们就可以互动调试，可以根据讲解的参数修改说明适当修改，通过示波器实际观察波形：

-   ****单相永磁直流无刷电机控制部分****，从直流电机基本理论出发，全面介绍直流电机的反电势、电磁转矩等内容，对直流电机的启动、运行、制动等特点全面分析，了解直流电机的工作特点。最后，从霍尔传感器、控制方案硬件设计、SPWM原理、MCU外设详解及底层搭建、软件实际实现等几个方面进行完整介绍单相无刷电机方案。
    
-   ****三相永磁直流无刷电机控制部分****，会详细介绍三相直流无刷电机的工作原理，其中可以体会同步电机和异步电机的异同，对于目前常用的无霍尔传感器的直流无刷电机控制，也会详细介绍常用的反电势过零点检查方式，以及实现中的ADC和比较器方法介绍，对于常用的无位置传感器的直流无刷电机控制的几种常用的启动方式也会详细介绍，经常遇到的问题及解决方法也会详细介绍。最后通过一个随身吸这个案例全面剖析无位置传感器方式的实现，从随身吸的需求分析，硬件设计选择、MOSFET基本原理及开关过程详解、软件底层实现等几个方面进行解析，课上学员们可以拿起小型示波器、小电机、控制板一起动起来，完成超火爆的随身吸方案开发。
    
-   ******三相永磁同步电机控制部分******，从PMSM的结构、基本原理、物理特性、数学模型等几个方面做理论上的详细介绍，对于PMSM的控制，矢量控制、直接转矩控制（DTC）都会介绍，常用的弱磁、MTPA等矢量控制方式也会详细介绍。本部分还会重点介绍SVPWM的原理及其软件具体实现方式，坐标变换及其常用的软件实现也会详细介绍。最后通过一个使用霍尔位置传感器的电动童车方案做FOC的实现精讲，本部分还会详细讲解电流采样中常用的单电阻、双电阻、三电阻采样的实现及注意事项，对于霍尔传感器的角度估算也会介绍，由于本例的方案无法现场演示，会通过一些视频及波形图片给学员进行详细解析。
    
-   ******无位置传感器的FOC控制部分******，会详细介绍滑模观测器的原理，让大家全面了解滑模的优缺点。对于常用的基于反正切函数的转子位置估计和基于锁相环的转子位置角度估计会详细介绍。在具体的案例中，对目前火爆的高速风筒方案全面剖析，从需求、硬件设计、软件实现详细解读，在最后的实例互动中，可以一起拿起示波器、电机、控制器一起完成SensorLessFOC的方案开发，学员们都可以搞起来高速风筒。
    

课程集电机学原理、电力电子技术、控制器开发等于一身，力求由浅入深，降低基础门槛；深入浅出，讲解通俗易懂；既注重基础理论又兼顾实战操作，既有理论推演又有实战案例，既顾及新手上路又关注能力提高。

**03**

**授课老师**

![](https://mmbiz.qpic.cn/mmbiz_gif/bL2iaicTYdZn6nzJsTjulCOiaHqgHb8f13njr79J3xEQOAez9ZTAdp6PMETMQTaeDB8KLk7JfkicbqhTjLEfJLbYcw/640?wx_fmt=gif)

**丛凤龙**，从事电机控制十余年，在行业内有较高的专业威望和学术造诣，理论基础扎实，参与主导完成过电动自行车控制器、电动工具控制器、风机类控制器，汽车散热风扇，汽车水泵，汽车油泵，座椅通风，天窗控制等方案的开发，量产经验丰富。拥有多项电机控制算法的发明专利及多项控制器的实用新型专利。西莫电机圈技术团队电控领域负责人。

本课程凝聚了老师多年丰富的工作经验和科研成果，相信通过本课程短期的培训，必将使您收获满满，飞跃长进。

**04**

**授课对象**

![](https://mmbiz.qpic.cn/mmbiz_gif/bL2iaicTYdZn6nzJsTjulCOiaHqgHb8f13njr79J3xEQOAez9ZTAdp6PMETMQTaeDB8KLk7JfkicbqhTjLEfJLbYcw/640?wx_fmt=gif)

◆ 电机控制行业软件工程师、硬件工程师、测试工程师、技术支持工程师、服务工程师、销售工程师、项目经理等；

◆ 新入职或即将入职的大学生、研究生；

◆ 非电机专业有专业拓展意向或转行电机控制的专业技术人员。

**05**

**课程收获**

![](https://mmbiz.qpic.cn/mmbiz_gif/bL2iaicTYdZn6nzJsTjulCOiaHqgHb8f13njr79J3xEQOAez9ZTAdp6PMETMQTaeDB8KLk7JfkicbqhTjLEfJLbYcw/640?wx_fmt=gif)

通过本课程的学习，可迅速使自己电机控制专业理论和实际操作技能得到跨越式提高；对行业新手，可快速入门进入工程技术人员角色，胜任简单的电机控制技术工作，熟悉相关软硬件的设计流程。

**06**

**课程大纲**

![](https://mmbiz.qpic.cn/mmbiz_gif/bL2iaicTYdZn6nzJsTjulCOiaHqgHb8f13njr79J3xEQOAez9ZTAdp6PMETMQTaeDB8KLk7JfkicbqhTjLEfJLbYcw/640?wx_fmt=gif)

可能视报名学员所在领域和工作岗位不同授课内容有少许增减，以现场授课内容为准；也欢迎大家在预报名填表的时候提出您的需求和建议。每天课程结束之前安排互动交流环节，现场答疑和交流。![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIVsamZ4dsTLNvL3MBkyicws18ABLuTjTJMxzMqs5NDa0A3YMzza8bwib4Kib2gf3DlrOK1uQUISFs3yg/640?wx_fmt=jpeg&from=appmsg)

**07**

**增值服务**

![](https://mmbiz.qpic.cn/mmbiz_gif/bL2iaicTYdZn6nzJsTjulCOiaHqgHb8f13njr79J3xEQOAez9ZTAdp6PMETMQTaeDB8KLk7JfkicbqhTjLEfJLbYcw/640?wx_fmt=gif)

◆ 西莫会员报名享8折优惠，全日制在校学生凭学生证享5折优惠，培训后皆可领500积分用于论坛学习资料的下载。

◆ 往期西莫任何研修班学员参加本次培训享72折的优惠。

以上优惠均需提前付款方可参加，如要求开具增值税专用发票则不享受任何优惠。（优惠可面向开具增值税普通发票并提前付款的西莫会员）

◆ 参训学员可以针对课程相关问题在课程结束后也能得到老师的解答与指导（微信、邮件、电话）；并建立培训后学习的专用微信群作为培训讲授的补充，供学员间开展后续交流讨论；对课堂上讲授过的内容可长期答疑，以帮助大家巩固课后学习效果。

◆ 凡参加我单位组织电机电控培训的企业，均可免费帮助在西莫电机论坛及公众号上发布推送招聘信息，助力企业引进优秀技术人才。

◆ 凡参加我单位组织电机电控培训的企业，均可免费帮助在西莫电机论坛及公众号上发布产品信息推广，助力企业宣传产品品牌建设。

**08**

**培训课程费用及报名**

![](https://mmbiz.qpic.cn/mmbiz_gif/bL2iaicTYdZn6nzJsTjulCOiaHqgHb8f13njr79J3xEQOAez9ZTAdp6PMETMQTaeDB8KLk7JfkicbqhTjLEfJLbYcw/640?wx_fmt=gif)

◆ 标准费用：**3980**元/人，含专业培训教材、证书费。食宿可统一安排，费用自理。

◆ 培训时间：2025年12月6日-7日

◆ 培训地点：江苏苏州  

◆ 报名方式：扫描下方二维码进行预报名，提交报名信息后可通过提示添加微信索取培训的正式邀请函以及报名回执

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWXtbaCZ4lWtj85RUYw1BAF109Fza1siccagmcDHu7Z6XFj1PccfjqUfAialvD33T12sViaybb5x9Gug/640?wx_fmt=png&from=appmsg)

其他事宜咨询，请联系会务组负责人**张老师**，电话：**18516258619**欢迎大家踊跃报名！

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIUE2A9cx6RwEpHeicccUnLeRiaV6GExMABU7T4JW6xZ8fuBgS6xUW4tBvCbRQbdgib2ShLrW4Gia4jT7g/640?wx_fmt=gif)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIXPiavn2jldxicGaJkQLkEmt2WAOyhvT07Uf5lrAZha8l3NFCme7RC4tJCcS90NfhOyb9Liaok96VSCA/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650660426&idx=1&sn=20e3d0db0596feba8248f55168646a5a&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIU7nicrB8bYfhk0AzZDoibIc5dYfkc1hM1tjSWBUxNErxicXRUDw7mibSQJmKd6P0kD2Fc33SQj0EnicbA/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650660438&idx=1&sn=37ec4dfeb7236093fc2038450dfed2e9&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIV7lEBfnoEz6D5uMDaAqCcUVvVYDG7JqgPyRhT5uMNpcbknLQb9XGUoSpnjN3hicq90HoicicX9PJyXQ/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650660414&idx=1&sn=80585e205cb64c2bf6632be600bb2550&scene=21#wechat_redirect)![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIUfOAjXn1AUTs3kViax3rSDvTWPnp1LrAXb97Bvkuzm8WZTu1zqnG0SuNQmBbLt8aibThApiafVVt8NA/640?wx_fmt=png)[![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVhiaShka2hzoZ3EwiaApgSc27MFwUVnGiaIe1wavPaQpAjeEJBqpZWthz1qY4bkVXDyJbfTPkicMx9FA/640?wx_fmt=png)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650660414&idx=2&sn=48a9a7280b8cd0a162359ce5204c6822&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIX5IZ5EfbxCHNTylYV1jX16sqL1FFONmPTQztF7TCMibx8VJoPwelDf4wPjMeBqAQNo6Lib4XNib2UWA/640?wx_fmt=jpeg)](http://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650653764&idx=1&sn=eb5317bf3d00f3cbee6d4528d63d4976&chksm=88bc6f4bbfcbe65d53c1e02169550dbdc8d8829eeea7518fee5bd7dc595c04c9a5b75d14f9a0&scene=21#wechat_redirect)![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWEDKUS6uyXBHiboINPcBLKibHWbwAfibdzBE1M50oLib9VPYiaQXtgd8o9aH4byicFy5BfmQb84jMHlxBQ/640?wx_fmt=png)点击**阅读原文**，直接报名参加本次培训！

****觉得好看，请点这里↓↓↓↓****