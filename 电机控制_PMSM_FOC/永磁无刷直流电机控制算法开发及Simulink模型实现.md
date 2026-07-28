# 永磁无刷直流电机控制算法开发及Simulink模型实现


> 原文地址: [https://mp.weixin.qq.com/s/nrbhxvZpAdUgToKwysqDcw](https://mp.weixin.qq.com/s/nrbhxvZpAdUgToKwysqDcw)

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIXNZfbdj53bicxxicss8D5WANHd3de5SdpQ8pwibiaIsMAlsTsWgx7vorTs6e0kq35k0XWDurue9XsQAA/640?wx_fmt=gif)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIXPiavn2jldxicGaJkQLkEmt21UG3Mic4HYBOHHJQvDtB1jgHdlI0BcHcJqRO5U4z2hxtwGhVibThO8QQ/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzIyNjI3NTgwOA==&mid=2247485317&idx=1&sn=cce0258bac10052139029b768bdf44b7&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_gif/icrlIsZGPBvyokNic4JvGNA3jKsVNf1qetvQY78kokibWsFndypjOUicU3ERKwyy6kU62eeTEUUzqK8p07ib50pbZtg/640?wx_fmt=gif&wxfrom=13&tp=wxpic)

  

关注公众号，点击公众号主页右上角“ · · · ”，设置星标，实时关注最新资讯，以免错过最新推送

从简单的钻机到复杂的工业机器人，许多机器设备都使用无刷直流电机将电能转换为旋转运动。与机械换相或有刷电机相比，电子换相或无刷电机以其更高的电效率和转矩重量比而一直倍受欢迎。无刷直流 (BLDC) 电机通常被定义为永磁同步电机 (PMSM)，由于采用集中式绕组，其反电动势呈现梯形。这样，便可将BLDC电机与PMSM电机区分开来，后者因采用分布式定子绕组而呈现正弦反电动势。无刷直流电机通常使用梯形控制，但也会使用磁场定向控制。而PMSM电机通常只使用磁场定向控制。梯形BLDC电机控制是一种比磁场定向控制更简单的方法。通过这种方法，一次仅为两相供电。转矩控制仅需一个PID控制器，而且与磁场定向控制相反，它无需使用帕克变换和克拉克变换进行坐标变换。

为了更好地理解施加外部电压时BLDC电机的行为，假设转子由单极对组成，而定子由夹角为120度的三个线圈组成。让电流通过线圈，给线圈（此处称为A相、B相和C相）通电。转子的N极用红色表示，S极用蓝色表示。一开始，线圈没有通电，转子处于静止状态。在 A相与C相之间施加电压，即会沿虚线产生复合磁场。这使转子开始旋转，从而与定子磁场对齐。 线圈对共有六种通电方法，如下所示。每次换相后，定子磁场相应旋转，从而带动转子，使之旋转至图示位置。转子角度是相对于水平轴而言的，转子共有六种对齐方式，两两相差60度。

![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIVMCYGBXxx3MCCusvSmu7ZKIQ92RibV2hicwYIY06bNY7G8GGfxh7xdv72g3jicFvh9tOPlDn4RK2CCg/640?wx_fmt=jpeg&from=appmsg)

也就是说，如果每60度以正确的相位执行一次换相，电机将连续旋转，此类控制被称为六步换相或梯形控制。此类电机可以包含更多极对，但这就要求更为频繁地换相。为了在合适的时机以正确的相位执行电机换相，控制器需要时刻掌握转子的确切位置，对此通常使用霍尔传感器进行测量。通过Simulink可以实现永磁无刷直流电机控制算法的开发，建立的整体模型如下：

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVMCYGBXxx3MCCusvSmu7ZKKEic1s7joJcTS3uYZo7b2hRupUCHoqZUP9VNyWmh5sPALgpjGMUaTdQ/640?wx_fmt=png&from=appmsg)

电流滞环控制的实现：

![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIVMCYGBXxx3MCCusvSmu7ZKM00bQsoM8NpIyqsgEOdluZtGmGqnN5D920YClxV7ZcVxXDibz18lyqg/640?wx_fmt=jpeg&from=appmsg)

电流信号的处理方式（三相电流采样）：

![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIVMCYGBXxx3MCCusvSmu7ZKQvTh08Xo3b322FYZm6k9RiaJTCNvVllrhBcwpKeQXQdic6F6Zs0T95Ug/640?wx_fmt=jpeg&from=appmsg)

电流调节器的设计：

![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIVMCYGBXxx3MCCusvSmu7ZKeHPMHxTzwmXUWzJdaibjD3JQ7Stm13CEbR0DJaJtz4Jkl2tJaLTZdNg/640?wx_fmt=jpeg&from=appmsg)

此外，还可以搭建永磁无刷直流电机的闭环控制系统研究控制参数对性能的影响

![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVMCYGBXxx3MCCusvSmu7ZKFwiciaCdjG8YhxdVgtYzCjOWsIaoMA6wekw5ZuSxSlnETSjCOZO1TyAg/640?wx_fmt=png&from=appmsg)

为了帮助大家深入理解永磁无刷直流电机的数学建模的原理和掌握其实现方法并完成相应的控制算法开发以及闭环系统仿真，西莫特邀上海熠速信息技术有限公司高级工程师许为老师全新打造了永磁电机数学建模及控制算法开发研修班课程，培训共分12部分，力求完整覆盖到永磁同步电机及永磁无刷直流电机控制系统相关建模仿真及算法开发等方方面面内容，为学员在实际工作中电控领域的学习和提高需求以及各种相关应用问题的解决提供更好的帮助。相对于西莫之前的电机控制研修班课程，本次培训更加聚焦于以电机控制系统建模仿真为依托深入解读和实现电机控制算法开发的过程，从基本电机控制的基本原理入手，进一步详细全面系统地帮助大家深入理解和完成永磁电机控制系统数学模型的建立，并结合典型的控制算法实例讲授来提高大家对永磁电机控制的认知，了解更多关于永磁电机控制的应用和未来发展趋势：

![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKtuIdpS8l66iazOEAHFZuZEohg4Ucqg7pFaKlK082RvuibjTJSpNbJh6a0Dn6QTdK0fFFSD36icFR8mw/640?wx_fmt=jpeg&from=appmsg)

欢迎对永磁电机控制仿真及算法开发有迫切学习需求的朋友扫码报名，关于本次培训的详细情况介绍如下：

  

**授课背景**

  

  

电机模型是电机控制算法开发和测试的基础，通过建立电机的数学模型，加深对电机的理解，才能更好地开发和测试电机控制算法。然而，电机控制系统不仅仅只有电机，还有微控制器，功率变换器，各种电流/电压传感器，各种速度/位置传感器，电容器，对这些部件的认识和理解，对于电机控制算法开发，模型搭建，仿真测试也是至关重要的。

目前从事电机控制算法开发，模型搭建，仿真测试的专业人才，对于电机控制算法的认识和理解不系统，不深入，不擅长利用理论知识分析具体问题。究其原因，主要有以下几点：一是学到的关于电机，电力电子，控制理论，微机原理，传感器，模拟电路数字电路等知识都是零散的，当部件组成系统时，不清楚部件之间的关联关系，无法串联起来成为一个整体；二是缺乏对电机控制系统的系统性认识，往往见木不见林，无法从系统层面思考问题，无法考虑部件对于整体性能的影响；无法将理论知识应用到实际的电机控制系统中，去理解问题，分析问题。三是对于一些问题的理解停留在表面，思考角度单一，无法进一步加深理解和认识；四是缺少对于实际应用环境，现场工况，产品设计目标等的理解；

因此，本课程是专门针对电机控制算法开发和测试等相关人员量身打造的一款技术培训课程，不仅适合在校大学生，希望加深对实际产品和系统的理解；也适合有一定工作经验的电机控制行业的专业技术人员，希望提升理论深度，并学习如何理论联系实际，分析和解决实际问题。总之，这是一门既有上层整体思考高度，又有下层部件认识深度的课程，既可以让大家快速提升专业理论知识又能提升分析和解决实际问题能力。

**课程简介**

  

  

课程内容由三大板块组成，每个板块都有详细的理论知识、实物图片、公式推导、模型搭建、算法分析等。让大家学会通过仿真手段，理解现场实际电机的工况，模拟现场的现象，分析现场实际的问题，理解控制参数对于控制性能的影响，从而改进电机控制算法。让大家明白，哪些问题可以先通过仿真手段解决，再借助试验手段。

1 电机控制系统的系统设计与部件组成：整体上理解电机控制系统的设计目标，再认识各个部件，电源，电容，逆变器，电机，电流传感器与采样处理，电压传感器与采样处理，速度/位置传感器与解析，从而在整体上和部分上对于电机控制系统有一个认识；

2 三相永磁同步电机控制部分：永磁同步电机三种数学模型（DQ模型，非线性模型，空间谐波模型），三种数值计算方法（前向欧拉，后向欧拉，Tustin法），逆变器模型，SVPWM算法及实现，软件功能模块，FOC算法，电流调节器的设计，MTPA/MTPV/FW方法，闭环仿真（不同的参数对于系统性能的影响），工程问题讨论（实际系统并不理想，这些因素对于系统性能的影响），从而提升理论联系实际，解决电机控制算法实际问题的能力；

3 三相永磁直流无刷电机控制部分：直流无刷电机的数学模型，六步换相控制算法，电流信号的处理，滞环控制，电流调节器的设计，BLDC的PWM调制方式，从而学会开发直流无刷电机控制算法。

课程既涉及电机控制系统又涉及各个部件，力求由浅入深，降低基础门槛；深入浅出，讲解通俗易懂；既注重基础理论又兼顾实际问题的分析，既顾及新手上路又关注能力提高。

**授课老师**

  

  

许为，高级工程师，中南大学，硕士研究生，电力电子与电机控制方向。长期从事电力电子系统建模与仿真，实时仿真系统的设计与应用，电网侧和电机侧变流器的核心控制算法的研究与开发。发表相关论文十几篇，申请相关专利十几项，软件著作权4项，获中国专利优秀奖1次。先后负责和参与铁路牵引系统，供电系统，直线推进系统，电动汽车，风力发电系统，光伏发电系统，船舶电力推进，工业变频，大功率轧机等的实时仿真系统的开发。并从事高速铁路感应电机，电动汽车永磁和感应电机，工业变频感应电机等项目核心控制算法的开发，弱电网条件下多重化网侧变流器的核心控制算法的研究与开发，以及诸多现场故障与疑难问题的分析和解决。

**授课对象**

  

  

-   电机控制行业软件工程师、测试工程师、模型开发工程师、服务工程师、销售工程师、项目经理等
    
-   新入职或即将入职的大学生、研究生
    
-   非电机专业有专业拓展意向或转行电机控制的专业技术人员
    

**课程收获**

  

  

通过本课程的学习，可迅速使自己电机控制专业理论，仿真建模，分析实际问题技能得到跨越式提高；对行业新手，可快速入门进入工程技术人员角色，胜任简单的电机控制技术工作，熟悉相关软硬件的设计流程。

**课程大纲**

  

  

可能视报名学员所在领域和工作岗位不同授课内容有少许增减，以现场授课内容为准；也欢迎大家在预报名填表的时候提出您的需求和建议。每天课程结束之前安排互动交流环节，现场答疑和交流。

![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKtuIdpS8l66iazOEAHFZuZEo5ZDficM7twjeYFZwTgnvLCaplfz9QsTTNOWNdHyjbwINftDWxmk3OPA/640?wx_fmt=jpeg&from=appmsg)

**增值服务**

  

  

-   西莫会员报名享8折优惠，全日制在校学生凭学生证享5折优惠，培训后皆可领500积分用于论坛学习资料的下载。
    
-   往期西莫任何研修班学员参加本次培训享72折的优惠。
    
    以上优惠均需提前付款方可参加，如要求开具增值税专用发票则不享受任何优惠。（优惠可面向开具增值税普通发票并提前付款的西莫会员）
    
-   参训学员可以针对课程相关问题在课程结束后也能得到老师的解答与指导（微信、邮件、电话）；并建立培训后学习的专用微信群作为培训讲授的补充，供学员间开展后续交流讨论；对课堂上讲授过的内容可长期答疑，以帮助大家巩固课后学习效果。
    
-   凡参加我单位组织电机电控培训的企业，均可免费帮助在西莫电机论坛及公众号上发布推送招聘信息，助力企业引进优秀技术人才。
    
-   凡参加我单位组织电机电控培训的企业，均可免费帮助在西莫电机论坛及公众号上发布产品信息推广，助力企业宣传产品品牌建设。
    

**培训课程费用及报名**

  

  

-   标准费用：3980元/人，含专业培训教材、证书费。食宿可统一安排，费用自理。
    
-   培训时间：2025年7月19-20日
    
-   培训地点：上海（具体地点会提前一周通知）
    
-   报名方式：扫描下方二维码进行预报名，提交报名信息后可通过提示添加微信索取培训的正式邀请函以及报名回执
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVAgHHz8bTt6xsRmjb3cyQZbUIdK7iaBvZllT5DsmVKjpQlibVASfRmoBEnSAxmicWxap2SXFtt69icXQ/640?wx_fmt=png&from=appmsg)
    

其他事宜咨询，请联系会务组负责人张老师，电话：18516258619欢迎大家踊跃报名！

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIUE2A9cx6RwEpHeicccUnLeRiaV6GExMABU7T4JW6xZ8fuBgS6xUW4tBvCbRQbdgib2ShLrW4Gia4jT7g/640?wx_fmt=gif)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIXPiavn2jldxicGaJkQLkEmt2c6SS5x4GfkBwcpgMPdT1ibUTayHmgD3rHCVMCzrCN6ZM7kCtefDaFoQ/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658240&idx=1&sn=5b12beea71cf046c0e28591fe96050a4&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIXPiavn2jldxicGaJkQLkEmt2pft0CDpNaicyL81bHPmtyYKJf05TuFvpOpnNEwQrQDulae4kllK7B0g/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658235&idx=1&sn=ea513ab4961c967a53418e97fe47b9ed&scene=21#wechat_redirect)

[![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKtuIdpS8l66iazOEAHFZuZEooIf5iajRx6goMHfaWKSOuiaNia4aEicvPz6iaXsFH5G3QeLPsPkjibLX0t9A/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658261&idx=1&sn=e410f6a49effa47805b213b08832491e&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIWhDHXwtf5FeC5z7xKdWcvPR1J9ygJx7qjiciaMYnvY2Ksia0S7n2wx0fdpBVB8hsGqoV1kS5yZh5T7g/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658229&idx=1&sn=0bf1dfb4ffbc8bc866863076f49af9a8&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIXPiavn2jldxicGaJkQLkEmt2WAOyhvT07Uf5lrAZha8l3NFCme7RC4tJCcS90NfhOyb9Liaok96VSCA/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658121&idx=1&sn=7cf6e4b756408d14b94b862588414780&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/D3daD2ElhIXPiavn2jldxicGaJkQLkEmt2lCiaIwemsrGV4VC7offfTMRpIUiaIFF12hSvL9Pq2FuOzicHVIBKRsbFg/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658238&idx=1&sn=70d956a76cb3e1755d2ca816746e82a8&scene=21#wechat_redirect)![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIUfOAjXn1AUTs3kViax3rSDvTWPnp1LrAXb97Bvkuzm8WZTu1zqnG0SuNQmBbLt8aibThApiafVVt8NA/640?wx_fmt=png)

[![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVhiaShka2hzoZ3EwiaApgSc27MFwUVnGiaIe1wavPaQpAjeEJBqpZWthz1qY4bkVXDyJbfTPkicMx9FA/640?wx_fmt=png)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658238&idx=2&sn=78be8d396995d1e284388faf14335382&scene=21#wechat_redirect)  

[![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWZmc8zsicsTcbCIbVFv7SoOodJAqUibPBTD0s7skbpFRlvg05pUo90abibFXBk5dljD4LMBxk8x0vqw/640?wx_fmt=png&from=appmsg)](http://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650653764&idx=1&sn=eb5317bf3d00f3cbee6d4528d63d4976&chksm=88bc6f4bbfcbe65d53c1e02169550dbdc8d8829eeea7518fee5bd7dc595c04c9a5b75d14f9a0&scene=21#wechat_redirect)![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWEDKUS6uyXBHiboINPcBLKibHWbwAfibdzBE1M50oLib9VPYiaQXtgd8o9aH4byicFy5BfmQb84jMHlxBQ/640?wx_fmt=png)

点击**阅读原文**，直接报名参加本次培训！

**********觉得好看，请点这里****↓********↓****↓********↓******************