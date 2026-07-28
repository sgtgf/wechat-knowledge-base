# PCB走线角度为90度到底行不行？

原创 硬件笔记本 2023-10-10 07:41 四川

> 原文地址: [https://mp.weixin.qq.com/s/TjTSVz2oqN7dQiV6d6nwDw](https://mp.weixin.qq.com/s/TjTSVz2oqN7dQiV6d6nwDw)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

现在但凡打开SoC原厂的pcb Layout Guide，都会提及到高速信号的走线的拐角角度问题，都会说高速信号不要以直角走线，要以45度角走线，并且会说走圆弧会比45度拐角更好。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhIX9dfwzOgBiacIiafpicjWGV8DuhNWKf6IjiagqXYHWYAB9BJzkRsV8JmkFJHgr5AOIMWyaLsQOlHdw/640?wx_fmt=png)

事实是不是这样？PCB走线角度该怎样设置，**是走45度好还是走圆弧好？90度直角走线到底行不行？**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh50IwoC4t0xX6mbR0DXIHzOoBPTcb8806XvRpfUkjksjBgyRtMAPeX2sF08bLrIxIXVloGkdP6Ug/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

大家开始纠结于pcb走线的拐角角度，也就是近十几二十年的事情。上世纪九十年代初，PC界的霸主Intel主导定制了PCI总线技术。  
  

（很感谢Intel发布了PCI接口，正是有了PCI总线接口的带宽提升，包括后来的AGP总线接口，才诞生了像 3DFX VOODOO 巫毒这样的显卡，在当时也次体验到了古墓丽影 劳拉 的风采，还有暴爽的飞车2、经典的雷神之锤等等，回想起来，正是有了3D游戏等多媒体应用的市场需求，才促进了PC的技术的发展，包括后来的互联网及智能手机的普及。）  
  

似乎从PCI接口开始，我们开始进入了一个“高速”系统设计的时代。  
  

20世纪90年代以后，正是有了一帮这样的玩家对3D性能的渴望，使得相应的电子设计和芯片制造技术能够按照摩尔定律往前发展，由于IC制程的工艺不断提高，IC的晶体管开关速度也越来越快，各种总线的时钟频率也越来越快，信号完整性问题也在不断的引起大家的研究和重视。比如现在人们对4K高清家庭影音视频的需求，HDMI2.0传输标准速率已经达到了 18Gbps ！！！  
  

在我诞生之前，pcb拉线菌应该还是比较单纯的同学，把线路拉通，撸顺，整洁美观即可，不用去关注各种信号完整性问题。（感谢关注公众号：硬件笔记本）比如下图所示的 HP 经典的 HP3456A 六位半万用表的电路板所示，大量的90°角走线。  
  

HP3456A 没有泪滴，几乎是故意走的直角（某些地方本来一个斜角走完，它偏要连续走几个直角），绝大多数地方没有铺铜。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhIX9dfwzOgBiacIiafpicjWGVDUyM9ia33We7iaLCWCx1TJkz9CkYcjHBJD3XNEEqJxowXuDJHJrhH6QA/640?wx_fmt=png)

  

右上角，拐直角不止，线宽还变小了？  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhIX9dfwzOgBiacIiafpicjWGVn5ic7HsjePs0viaHf6ZnRPOcyTK8s04duZaX0e6u77tza8y1zM5XlHow/640?wx_fmt=png)

  

直角、搭桥、铺铜，模拟就真的不能铺铜吗？

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhIX9dfwzOgBiacIiafpicjWGV1cFJgq0ov1XwKPIibGu3dR6m0sIyUicVRxwPwzRcw8FsOcoAN5zX30sQ/640?wx_fmt=png)

  

直角，45度斜线，任意角度斜线，方焊盘，圆焊盘，唯独不见泪滴。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhIX9dfwzOgBiacIiafpicjWGV2y1Dt9ibY26tQF5uStnISBwbDToQtbZZLFyQGDZuiaaNzaziaMZX22f0w/640?wx_fmt=png)

  

高速信号线拐一下90°真的会怀孕？狮屎是不是这样的？在这里以自己肤浅的撸线姿势，跟大家探讨一下关于高频/高速信号的走线拐角角度问题。我们从锐角到直角、钝角、圆弧一直到任意角度走线，看看各种走线拐角角度的优缺点。

  

  

  

1

**PCB 能不能以锐角走线？**

  

PCB能不能以锐角走线，答案是否定的，先不管以锐角走线会不会对高速信号传输线造成负面影响，单从PCB DFM方面，就应该**避免出现锐角走线**的情形。  
  

因为在PCB导线相交形成锐角处，会造成一种叫酸角“acid traps”的问题，啥？酸豆角？好吧，挺喜欢酸豆角拌面，但是这里的pcb上的酸角却是个令人讨厌的东西。在pcb制板过程中，在pcb线路蚀刻环节，在“acid traps”处**会造成pcb线路腐蚀过度，带来pcb线路虚断的问题**。  
  

虽然，我们可以借助CAM 350 进行DFF Audit自动检测出“acid traps”潜在问题，避免在PCB在制造产生时产生加工瓶颈，如果pcb板厂工艺人员检测到有酸角(acid trap)存在，他们将简单地贴一块铜到这个缝隙中。  
  

很多板厂的工程人员他们其实并不懂layout的，他们只是从PCB工程加工的角度进行了修复酸角(acid trap)的问题，但这种修复会不会带来进一步的信号完整性问题便不得而知了，所以我们在layout是就应该从源头去尽量避免产生酸角(acid trap)。  
  

怎样避免拉线时出现锐角，造成acid trap DFM 问题？现代的EDA设计软件(如Cadence Allegro、Altium Designer等)都带有了完善的Layout走线选项，我们在layout走线是，灵活运用这些辅助选项，可以极大的避免我们在layout时产生产生“acid trap”现象  
  

焊盘的出线角度设置 避免导线与焊盘形成锐角角度的夹角。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhIX9dfwzOgBiacIiafpicjWGVZIUFhxBCZdzRia3AIR970Fb18Kajiaxj5OKyo5icHw1RJ1eibPANby3ekg/640?wx_fmt=png)

  

利用 Cadence Allegro 的 Enhanced Pad Entry 功能能够让我们在layout时尽可能的避免导线与焊盘在出线时形成夹角，避免造成“acid traps”DFM问题。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/iaLLibsB5S6FNYIcf4ibMQnxBpsxNmnAbb3QKMUf1zbYhrbdlREyxuUKbC6pHtZPALA1GCpjlKQhPD3emPxh1aQ5Q/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

避免两条导线交叉形成锐角夹角。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/iaLLibsB5S6FNYIcf4ibMQnxBpsxNmnAbb3ia1DtHa1903OScPVMEiciauy8YZrgKibGD2YwMcFvoEV7xG6EIJ9fiaNMGw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  
灵活应用 Cadence Allegro 布线时切换 ” toggle “ 选项，可以避免导线拉出T型分支时形成锐角夹角，避免造成“acid traps”DFM问题。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/iaLLibsB5S6FNYIcf4ibMQnxBpsxNmnAbb3ZQW44ia2gXIvgy9aOrAXT76RpgxCD2YttJzOenbKlDaMX3QwBzK5Byw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

  

  

2

**pcb layout能不能以90°走线**

  

高频高速信号传输线应避免以90°的拐角走线，是各种PCB Design Guide中极力要求的，因为高频高速信号传输线需要保持特性阻抗一致，而采用90°拐角走线，在传输线拐角处，会改变线宽，90°拐角处线宽约为正常线宽的1.414倍，由于线宽改变了，就会造成信号的反射，同时，拐角处的额外寄生电容也会对信号的传输造成时延影响。  
  

当然，当信号沿着均匀互连线传播时，不会产生反射和传输信号的失真，如果均匀互连线上有一个90°拐角会，则会在拐角处造成pcb传输线宽的变化，根据相关电磁理论计算得出，这肯定会带来信号的反射影响。  
  

理论上是这样，但理论终究是理论，实际情况90°拐角对高速信号传输线造成的影响是否是举足轻重的呢？  
  

打个比方，比如王失聪同学（这里的王同学纯属为了剧情需要虚构出来的，肯定没有哪位亲生父亲会为自己的儿子取这样的名字吧，如有雷同，纯属荣幸，O(∩\_∩)O~）带着他们家的二哈和女票去打火锅，看到路边掉了一百块钱，你说他捡还是不捡？  
  

捡起这一百块，理论上会使得王失聪的个人财富又增长了一百块，但是对于随便找个女票啪啪啪刷卡买豪车如买白菜的王同学来说，可以完全无视，而对于我来说，这可是巨款呐，我一般都会冲过去假装系鞋带的…  
  

所以**，90°拐角对高速信号传输线会有负面影响**，理论上是一定的，但是这种影响是不是致命的？90°拐角对于高速数字信号和高频微波信号传输线的影响是不是一样的？  
  

根据 这篇论文《right angle corners on printed circuit board traces,time and frequency domain analysis》和 Howard Johnson 的这篇文章《Who’s Afraid of the Big Bad Bend?》及 Eric Bogatin 的著作 《信号完整性与电源完整性分析(第二版) 》第八章的内容，我们可以得出以下结论：  
  

**对于高速数字信号来说，90°拐角对高速信号传输线会造成一定的影响**，对于我们现在高密高速pcb来说，一般走线宽度为4-5mil，一个90°拐角的电容量大约为10fF，经测算，此电容引起的时延累加大约为0.25ps，所以，**5mil线宽的导线上的90°拐角并不会对现在的高速数字信号（100-psec上升沿时间）造成很大影响**。  
  

而对于高频信号传输线来说，为了避免集肤效应（Skin effect）造成的信号损坏，通常会采用宽一点的信号传输线，例如50Ω阻抗，100mil线宽，这90°拐角处的线宽约为141mil，寄生电容造成的信号延时大约为25ps，此时，90°拐角将会造成非常严重的影响。  
  

同时，微波传输线总是希望能尽量降低信号的损耗，90°拐角处的阻抗不连续和而外的寄生电容会引起高频信号的相位和振幅误差、输入与输出的失配,以及可能存在的寄生耦合,进而导致电路性能的恶化,影响 PCB 电路信号的传输特性。  
  

关于90°信号走线，老wu自己的观点是，尽量避免以90°走线，纳尼？前面不是说90°拐角对高速数字信号的影响可以忽略吗？  
  

当然，前面写的那些是为了凑字数的，O(∩\_∩)O~，单个90°拐角对高速数字传输线所带来的信号质量影响，相对于导线与参考平面高度的偏差，导线自身蚀刻过程中线宽线距均匀性的变化偏差，板材介电常数对频率信号的变化，甚至过孔寄生参数所带来的影响都要比90°拐角所带来的问题大得多。  
  

但是如今的高速数字电路传输线总避免不了要绕等长的，十几二十个拐角叠加起来，这90°拐角所累计叠加起来的影响造成的信号上升延时将变得不可忽略。高速信号总是沿着阻抗的路径传输，以90°拐角绕等长，终的实际信号传输路径会比原来的要略短一些。  
  

而且现在的高速数字信号传输速率正在变得越来越高，目前的HDMI2.0标准，传输带宽速率已经达到了18Gbps，90°拐角走线将不再符合要求，而且现在都21世纪了，现在的EDA软件即便是那些使用的，对45°走线都已经支持的很好了。  
  

同时，以90°拐角走线，以工程美学来说，也不太符合人们的审美观。所以，对于现在的layout来说，**不论你是不是走的高频/高速信号线，我们都要尽量避免以90°拐角进行走线，除非有特殊的要求**。  
  

对于大电流走线，有时我们会以铺铜铜皮替换走线的方式布线，在铺铜的拐角处，也需要以两个45°拐角替换90°拐角，这样不仅美观，而且不会存在EMI隐患。

  

  

  

3

**以45°走线**

  

除了射频信号和其他有特殊要求的信号，我们**PCB上的走线应该优选以45°走线**。要注意一点的是，45°角走线绕等长时，拐角处的走线长度要至少为1.5倍线宽，绕等长的线与线之间的间距要至少4倍线宽的距离。  
  

由于高速信号线总是沿着阻抗的路径传输，如果绕等长的线间距太近，由于线间的寄生电容，高速信号走了捷径，就会出现等长不准的情况。现代的EDA软件的绕线规则都可以很方便的设置相关的绕线规则。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/iaLLibsB5S6FNYIcf4ibMQnxBpsxNmnAbb3aOPONWyqnF1Z5WQfutibUqOnG51pzxw0P3XZCoL5obf8OhaHNPKKNibQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

  

  

3

**以 arc 弧形走线**

  

如果不是技术规范明确要求要以弧形走线，或者是rf微波传输线，个人觉得，没有必要去走弧形线，因为高速高密度pcb的layout，大量的弧形线后期修线非常麻烦，而且大量的弧形走线也比较费空间。  
  

对于类似USB3.1或HDMI2.0这样的高速差分信号，个人认为还是可以走下圆弧线装下bi的，O(∩\_∩)O~

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhIX9dfwzOgBiacIiafpicjWGVYscBmWwFYa5m8B2sI9W492vp2O4WvibumodBNcmNFyYHQZNXkMDyibhA/640?wx_fmt=png)

  
当然，对于RF微波信号传输线，还是优先走圆弧线，甚至是要走“采用 45° 外斜切”线走线  

  

  

  

  

4

**以任意角度走线**

  

随着4G/5G无线通讯技术的发展和电子产品的不断升级换代，目前PCB数据接口传输速率已高达10Gbps或25Gbps以上，且信号传输速率还在不断的朝着高速化方向发展。（感谢关注公众号：硬件笔记本）随着信号传输的高速化、高频化发展，对PCB阻抗控制和信号完整性提出了更高的要求。  
  

对于PCB板上传输的数字信号来说，电子工业界应用的包括FR4在内的许多电介质材料，在低速低频传输时一直被认为是均匀的。  
  

但当系统总线上电子信号速率达到Gbps级别时，这种均匀性假设不再成立，此时交织在环氧树脂基材中的玻璃纤维束之间的间隙引起的介质层相对介电常数的局部变化将不可忽视，介电常数的局部扰动将使线路的时延和特征阻抗与空间相关，从而影响高速信号的传输。  
  

基于FR4测试基板的测试数据表明，由于微带线与玻纤束相对位置差异，导致测量所得的传输线有效介电常数波动较大，、值之差可以达到△εr=0.4。尽管这些空间扰动看上去较小，它会严重影响数据速度为5-10Gbps的差分传输线。  
  

在一些高速设计项目中，为了应对玻纤效应对高速信号的影响，我们可以采用zig-zag routing布线技术以减缓玻纤效应的影响。  
  

Cadence Allegro PCB Editor 16.6-2015 及后续版本带来了对zig-zag布线模式的支持。  

  

在Cadence Allegro PCB Editor 16.6-2015 菜单中选择”Route -> Unsupported Prototype -> Fiber Weave Effect” 打开zig-zag routing功能。  

  

岁月是把杀猪刀，正如二十年前我们pcb layout不用关注是否要走弧形线，不用担心pcb板材玻璃纤维对高速信号的影响一样。可能二十年后您再看这篇文字，会觉得咱说的观点相当的out…  

  

所以，不存在一成不变的pcb layout规则，随着pcb制造工艺的提升和数据传输速率的提高，有可能现在正确的规则在将来将变得不再适用。所以为一枚合格的拉线菌，一定要与时俱进，掌握产业技术方向的发展，才能不被大浪淘沙所淘汰。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群