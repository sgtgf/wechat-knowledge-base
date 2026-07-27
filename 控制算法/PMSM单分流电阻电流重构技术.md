# PMSM单分流电阻电流重构技术

原创 傅存敬 电磁散人 2025-09-02 22:07 广东

> 原文地址: [https://mp.weixin.qq.com/s/qAm59-ZL-w-1I0YiudFbZA](https://mp.weixin.qq.com/s/qAm59-ZL-w-1I0YiudFbZA)

###   

* * *

###   

### 第一部分：问题的引出——为什么需要这种“[一个传感器办三件事](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247483801&idx=1&sn=54c633fa1c3b60f6a1fa4978b7423636&scene=21#wechat_redirect)”的方法？

今天咱们来聊一种电机控制的高招。想象一下，你家里用电风扇，风扇里有个永磁同步电机（PMSM），它需要精准控制电流才能高效、安静地运转。传统方法是给三条电线（A、B、C相）各装一个电流传感器，就像用三块表分别测流速。

**这****有什么缺点？**

-   **成本太高**：三个传感器贵啊！而且电路板变大、容易出故障。

-   **空间占用多**：风扇内部空间小，塞不下那么多零件。

行业内的解决方案之一是用**一个电流传感器装在直流母线上**（就好比在河的主流上装一块水位计），然后通过数学和聪明算法“算”出三条支流的流量。听起来很酷，但有一个大问题：在某些时候，河水流动太快或太慢，水位计会“拍糊”了数据！这叫**不可测区域**，如下图蓝色及红色斜线区域。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRF7YflEHYvK7r5bdC5EiaMrxg4jFWgSJWHu5fuBwTbiaa2enSZDQBibM3rCbic9hiaAb4SUhIWVDNEhdicA/640?wx_fmt=png&from=appmsg)

文末的参考文献中的图3形象地展示了这个“不可测区域”。就像一张地图：整个电机的电压空间被分成六边形区域（六边形代表不同扇区）。正常区域是三角形未阴影区（正常电流可测），但有两个阴影区会出问题： 

-   **条形蓝色阴影区**：扇区边界区域，相当于河水“拐弯”处，水流太快。

-   **星形红色阴影区**：低调制指数区域，相当于流速太慢，水位计反应不过来。 这些区域中，开关状态的持续时间太短（< Tmin），导致DC-link电流信号不稳定。文章说，如果时间少于 Tmin（一个超短时间阈值），传感器就没法准确采样。

  

* * *

### 第二部分：基本原理——直流母线水位计怎么“算”支流流量？

要理解解决方案，先弄懂基本原理。这个单传感器方法基于一个简单想法：直流母线电流（idc）在不同开关状态下对应三相电流（ia,ib,ic）。这就像水位计在不同时间点能看到不同支流的特征。

**DC-link电流与电机三相相电流对应表**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRF7YflEHYvK7r5bdC5EiaMrxjlPXHVR5NT6d18yOMia3jJpJrw3chkD3o5VRlFia3h0jwebmhkmFbibEw/640?wx_fmt=png&from=appmsg)

-   当开关状态是 V1(100)时，idc\=ia（测A支流）。

-   当状态是V2(110) 时，idc\=−ic（测C支流的反方向电流）。

-   其他状态类推（如 V3(010)测ib）。

-   零状态时（ V0或V7），idc\=0（没信息）。

**采样****时间公式**： 

-   最小时间 Tmin\=tdead +tset+tconv（死区时间、稳定时间、A/D转换时间）。

-   最佳采样点tsamp\=Tmin ⁡− tconvt，文章Section II B强调了这个点能确保信号准确。

**电流重构****逻辑**： 

-   采样两次：例如在扇区I，tsamp1 测−ic，tsamp2 测ia。

-   第三相电流（如ib）用基尔霍夫定律算出：ia+ib+ic\=0（简单说，三条支路电流的总和为零） 。

三相电流占空比确定逻辑：

以扇区I为例，按照如下公式确定三相电流的占空比：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHLYkib0vibPWAgbsgyc4NdCeNFsicNAicSibPwVZ8Wib6kcWzkV6fC9mMgBRFNHRtM8njwIciczuGaCEWTg/640?wx_fmt=png&from=appmsg)

其中，T0 = T7（称为零矢量时间），它们的作用时间按照如下公式进行分配：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRHLYkib0vibPWAgbsgyc4NdCeX0scdbgKKPZrIJ5Samdwwu6sOtQaGE5vXqEXnfH8cbkpt1xuSic3LkQ/640?wx_fmt=png&from=appmsg)

这样可以确保PWM发波对称，减少谐波。

问题出在哪？

如果T1 或T2 时间太小（< Tmin），采样就迷糊了！尤其当两条电流支路“同步”（即占空比相同）时，或流速太慢（低调制指数）时。这就是为啥不可测区域会让电流重构失败，电机控制变差。

* * *

第三部分：聪明解决方案——延长“拍照时间”而不改变“总光量”

行业内一种常见方案是一种PWM调整方案，在不改变平均电压的前提下延长过短时间，确保数据可测。类似于：用相机拍水流速度，如果水流太急，就延长曝光时间，同时加“反光板”补光避免画面暗。

这个方案分三种情况处理不可测区域，让我们用文末文献中出现的图 4–6描述的情况来讲解。

图片核心描述：

图 4: 当第一个采样时间短（Problem1，后文用P1代替），发生在扇区边界。“两条电压矢量线一条长一条短”，需要延长第二个矢量。

**图5**：当第二个采样时间短（Problem2，后文用P2代替），也发生在扇区边界。“两条电压矢量线一条短一条长”，需要延长第一个矢量。

**图6**：当调制指数低（Problem3，后文用P3代替），两个时间都短。“三条电压矢量线时间几乎一样”，需要同时延长。

**具****体解决步骤**：

-   解决P1的方案（延长第二个矢量时间）：
    

原问题：比如扇区I，T2 时间太短（< Tmin），没法测-ic。

妙招：延长T2 到两倍的Tmin（即2Tmin），然后在零时间插入一个互补电压矢量V'5来补偿（保证总电压不变）。具体过程可参考图4(c)。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRH93icnR6r3tofqswULZBN0Uey4XfVTPv7TwhDiaCGDkyVruLSOL5pria8vbPZia4oGkg8YiauKVOpcL2w/640?wx_fmt=png&from=appmsg)

**就好比：**拍水流时，拉长拍摄时间两倍，但在旁边放块反光镜补充“曝光”，确保照片亮度不变。增加了一次开关，但值。

-   解决P2的方案（延长第一个矢量时间）：
    

原问题：T1 时间太短（< Tmin），测不到 ia。

妙招：延长T1 到两倍的Tmin（即2Tmin），插入互补矢量V'4 来补偿，具体过程可参考图5(c)。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRH93icnR6r3tofqswULZBN0UCc5ovS0OXlrNibxMlbWlWofcgStds9E19YsM6eFJd9kwDr3npRibViaicw/640?wx_fmt=png&from=appmsg)

类似P1，但这次是延长另一块时间。一定要做到“波形对称”（也就是双边调制），避免谐波失真。

-   解决P3的方案（延长两个矢量时间）：
    

原问题：低速运行时，T1 和T2 都短。

妙招：两者都延长到2Tmin，然后插入两个互补矢量V'4 和V'5 。零矢量时段插入这些来补偿。具体过程可参考图6(c)和(d)。  

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRH93icnR6r3tofqswULZBN0UqSMwiax6lphWPNVtnr7GkSZKhE7mvDNlCQGJvKte95ZG5Pwr2RYuAkw/640?wx_fmt=png&from=appmsg)

**就好比****：**水流超慢？双倍延长俩拍摄时段，放两块反光镜！文章说开关次数增加1–2次，但只在需要时触发（对风扇应用可接受）。

核心流程图：

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRH93icnR6r3tofqswULZBN0UsicPknRYlIpxOWVOvtxcibRJKqTIem6PQjpbV59TiaJhNZRT5XArGLkzw/640?wx_fmt=png&from=appmsg)

**图7**用流程图统一处理P1、P2、P3。步骤：检测电压参考 → 分类问题类型 → 调整PWM信号 → 重构电流。这张图就像“操作手册”，确保只在必要时调整。

**整体优势**：

-   保持**对称双边调制**：波形对称降低谐波（不像老方法波形扭曲）。

-   **平均电压不变**：插入互补矢量补偿，确保总电压矢量不变。

-   只在不可测区调整，减少额外开关损耗——文章Section III结尾说，这对低成本应用（如电风扇）是划算的。
    
      
    

* * *

第四部分：验证结果——新方法为什么更牛？

文末的文章用仿真和实验证明了这个方法有效。仿真用Matlab，实验基于STM32芯片和PMSM驱动套件。关键指标是**电流THD****（总谐波失真）**——越低越好，电机运转更平滑、安静。

**核心数据表：Table II（THD比较）**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRH93icnR6r3tofqswULZBN0UCJSv7q44Ezy5HHNcubqB9YO46qo3soF0tDHIgGiaymXtHIhr4ZeJqiaA/640?wx_fmt=png&from=appmsg)

数据解读： 

-   **高速时（64****Hz, 960rpm）**：新方法电流THD (2.28%) vs 传统调整法 (2.09%)，差不多都很好。

-   **中速时（40****Hz, 600rpm）**：新方法更好 (4.75% vs 5.88%)！文章说传统方法有更多谐波。

-   **低速时（24Hz, 360r****pm）**：新方法完胜 (13.81% vs 28.00%)！因为传统方案在低调制区域失效，新方法通过延长时间搞定。

-   **代价：**新方法电压THD略高（因多开关），但电流波形质量优，值。

实验波形图片：

**图 8** **(高速波形)**：新方法重构电流（绿色） vs 三分流实测（橙色），基本一致。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRH93icnR6r3tofqswULZBN0UgL1pTjdoN7ctuibROfiaiavbRBQWjgJEZNQvCia6fOf9ibhoMAj2vmSiaUxA/640?wx_fmt=png&from=appmsg)

 **图9、10 (中低速波形)**：中低速时新方法绿色线紧贴橙色线，而传统法波形毛糙（失真大）。![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRH93icnR6r3tofqswULZBN0U21OAbppkfPjMmLmP9PiaTPiaSoEy3Kk18bax1ZKyxkBMw3Ucv2Kv42vw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRH93icnR6r3tofqswULZBN0UcZlyQOvL6W517tLTkasiaZ1qvCnQdUA1rQfPktEbVmKGiay3rjydx0AA/640?wx_fmt=png&from=appmsg)

**图11 (THD对比图)**：曲线图显示，新方法在低速时THD接近三分流传感器，比传统单分流法低得多。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRH93icnR6r3tofqswULZBN0UwibIQ9gsCMmhT2EduOgY4hA9V70DkBtH1nFxb7v0cibgMGvs2X6enuag/640?wx_fmt=png&from=appmsg)

* * *

第五部分：结论与启示

总结一下，基于文末的文献，介绍了一种省钱、高效的方法来解决永磁同步电机的电流测量问题。只用一个分流电阻，却实现了接近三分流传感的性能。它通过延长采样时间和智能补偿（P1、P2、P2方案），解决了水流太快或太慢的“拍摄难题”。

想象你用一个手机测风扇风速。风扇高速时，正常拍就行；但低速时风小，你就需要延时摄影外加打点闪光灯补光——这正如文章的PWM调整法！这种思维可以拓展到其他领域，如新能源车或家用小电机，帮你省成本还提高性能。

如果你对这个话题感兴趣，我建议试试用示波器或简单电机玩一玩单传感器实验！记住，关键是保持对称和补偿——就像拍照时追求清晰而不改变光线总量。

  

参考文献：Wang, Chao Min , and  S. K. Lin . "A simple single shunt current reconstruction approach for low-cost permanent magnet synchronous motor drives." Automatic Control Conference IEEE, 2015.

链接：https://pan.baidu.com/s/1gbPYfnHbztQLS9lAqLENQw?pwd=j6zh 提取码: j6zh