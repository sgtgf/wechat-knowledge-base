# mark点怎么制作？9个mark点定位原则，图文+案例，带你搞定mark点

原创 百芯EMA 硬件笔记本 2024-01-24 07:59 四川

> 原文地址: [https://mp.weixin.qq.com/s/0lwbqArrbp8hzTnOei-1mQ](https://mp.weixin.qq.com/s/0lwbqArrbp8hzTnOei-1mQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

今天给大家分享的是PCB mark 点

# 一、基准点（mark点）是什么意思？

mark点也叫基准点，也叫光学定位点，是贴片机使用时的定位点。由于PCB在大批量生产中为装配过程中的所有步骤提供了共同的可测量点，因此装配中使用的每个设备都可以准确定位电路图案以实现精度，通过mark点程序员就可以在加载程序后自动设置机器。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4SlpIE4a9aKRvSeSkG4GO6nHVM6w3UOmLDN9yAficSgrWsGWhAEbSO8w/640?wx_fmt=png&from=appmsg)

mark 点

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4Uia9yvXM7Xd7NM7RPWAia0QUBl5jyTiaqhy5jujgicpMicf5aJL0Hda2pSA/640?wx_fmt=png&from=appmsg)

mark 点

  

# 二、mark点在PCB板上的作用

当我们要打板的时候，我们就会将 Gerber 文件发给制造商。如果要需要将组件与PCB组装在一起，我们还需要提供物料清单（BOM文件）以及坐标文件（PNP文件）。这些文件会用自动贴片机来获取这些信息，然后需要在PCB上找到一个或者多个电路板的实际物理点。

如果我们在电路板上使用mark 点就可以让机器更好的放置组件，准确度更高，而且不依赖机器公差或者人工的误差。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4Cz0X8Yia3KAGzuLiaNpx9Yd0h4zdibCnpLjyKKCwVEtemFv6E43BSn08w/640?wx_fmt=jpeg&from=appmsg)

mark 点

  

# 三、mark点识别原理

PCB 上的mark 点是表面贴装技术(SMT) 和自动光学检测(AOI) 等自动化机械使用的参考标准。该标记由一个远离任何其他可见地标的单独铜垫组成，没有基准标记，机器要么放置组件不正确，要么完全拒绝运行。然而，通过读取放置在 PCB 上的各种基准标记位置，自动化设备可以确定放置或扫描组件的确切位置。

不过大多数机器在技术上不会读取放置在 PCB 上的内容，相反，它识别mark 点焊盘的反射。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH47oxco8yDM1iaibyicjHhQfPTNQdM6wzI4tKESA4zZTXUCtQqKuXwENbnA/640?wx_fmt=jpeg&from=appmsg)

  

# 四、不同类型的mark点

1、单板mark点

全局mark 点作用是单板上定位所有电路特征的位置，用于区别电路图形和PCB基准，是基于三个网络系统的定位，其中参考点位于左下端 0.0，另外两个在在X和Y轴的正方向。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4Yibiac6G0rNrFpz8xaxsZS2Ds2a7icP9AXOMhbHvj4rzMNPicibjW0CgTWA/640?wx_fmt=jpeg&from=appmsg)

全局mark点

2、局部mark点

局部mark点主要用来定位引脚多、引脚间距小（引脚距中心不大于0.65mm）的各元器件，辅助定位。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4icpjbh1MSmf0NxfFAkUbAdtkBo1xiaKAGPiaxATnOzibibcbJoa8gG4VsqA/640?wx_fmt=jpeg&from=appmsg)

局部mark点

3、工艺边mark点

作用在拼接板上，辅助定位所有电路功能，辅助定位。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH481Mm2UUXum4e7C5Zmn1DenZh2Ex2tlibJJsn4yN0NtTyuoX8icjBVfKg/640?wx_fmt=jpeg&from=appmsg)

工艺边mark点

  

# 五、mark点定位的一般原则和步骤

1、mark点形状

选择基准标记的位置后，就可以决定它们的显示方式了。虽然一些制造设备被编程为可以识别各种形状，如菱形、正方形或沙漏形，但并不是所有的机器都可以处理。还是建议使用比较普遍的圆形mark点。

为什么通常都使用圆形mark点？

-   圆形物体更容易被机器定位。
    
-   对于 HAL 完成，圆形基准上的凸形仍将是圆形，而在方形基准上，例如，它可能不再是正方形。
    
-   机器更容易找到圆形的中心。
    
-   圆形的表面积最小。
    
-   均匀蚀刻圆形形状。
    
-   可以使用多个基准点，而不是效率较低的奇形怪状基准点，后者在理论上可能包含旋转信息，但难以处理。
    
-   这是一个与传统电路板可能具有的功能最不同的功能，传统电路板主要是矩形。
    
-   圆形安装孔可以兼作便宜的基准。
    

机器视觉需要准确地找到基准点，然后估计其确切的中心，圆形是最优的。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4N5pylrBNhvIKp5DHibhEFvspibzXOdibg7IP5IKL2pDRBLgbYibO5fvuDA/640?wx_fmt=png&from=appmsg)

mark点形状

2、mark点 尺寸

基准标记可以有多种尺寸，主要取决于装配的机器。

3.2mm 阻焊层开口直径和 1.6mm 裸铜直径或 2mm 阻焊层开口直径和 1mm 裸铜直径的尺寸基本上可以适用于所有的机器。

同一印刷电路板上的基准标记尺寸不应超过 25 µm，建议间隙区域的最小尺寸为中心标记半径的两倍。

参考点周围应该有一个空白区域，该区域没有任何其他电路元件或标记。空白区域的最小尺寸应为参考点半径的两倍。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4XxkOHOfqmoVyiaGer4GFveTsBKK1384AwkGOl9bEntsKVMuy0OfITJg/640?wx_fmt=jpeg&from=appmsg)

PCB 基准尺寸通常为 1 到 3 毫米，主要取决于制造商使用的组装机器。一些制造商建议在电路板的角处添加 3 个基准点，因为这会提供 2 个角度对齐测量值，并允许贴片机推断出正确的方向。一些制造商会说明具体尺寸，这也取决于制造商使用的装配设备。  

一般来说，阻焊层开口的直径应该是基准裸铜直径的两倍，此外，同一块电路板（全局和局部）上的 PCB 基准尺寸应该一致，变化不应超过 ~25 微米。

如果要组装 2 层板，则顶层和底层基准点应位于彼此之上。顶层和底层 PCB 基准尺寸应相同，包括阻焊层开口。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4j8wcEgiao3BZBsVeKhMFLF8QWpHWnfUxVdR0IxxibiaxqqZ5IUIpcK96g/640?wx_fmt=jpeg&from=appmsg)

两种常见的 PCB mark点尺寸和阻焊层开口建议

局部基准往往小至 1 毫米，阻焊层开口为 2 毫米，上图中显示的 D-3D 规则，是因为有些制造商比较喜欢这种较大的阻焊层开口。

局部 PCB 基准尺寸通常不超过 1 毫米，以便进行走线布线并为其他组件留出空间。对于 0201 电阻或芯片大小的 BGA 等小型元件，组装机将足够精确，因此不需要本地基准，并且机器将准确知道您元件需要放置的位置。

  

3、mark点 边缘距离

避免将基准点靠在 PCB 的边缘，贴装机械通常使用夹具在组装期间将 PCB 锁定到位。如果夹具覆盖了基准点，则问题很严重。可以将基准标记置于距边缘至少 3 毫米的中心位置（建议 5 毫米，可以消除这些风险）

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4kL2nOrudK2UR4FNEudWAZwD50Kal8ynMYIOhzodF2MLyCu1SSeiaqng/640?wx_fmt=jpeg&from=appmsg)

mark点 边缘距离

4、mark点 组成

mark点 组成由 3 部分组成：

-   顶部或底部铜层上的实心铜环
    
-   阻焊层中的圆圈是我们需要对准的目标
    
-   侧面的选项文本标签
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4LgKEx9qpYvLIrj7OLicAjOA9GEhicKK2MfrYu6oQ95WjVDSyE5Sr2UBg/640?wx_fmt=jpeg&from=appmsg)

mark点 组成

  

5、mark 点 位置布局

需要在PCBA的四个角或对角线上，形成多点面定位，定位准确，距离越远越好。

1）pcb mark点

mark点 的布局位置由贴片机的PCB传输方式决定。当使用导轨传送PCB时，Mark不能放置在靠近夹持面或定位孔的位置，具体尺寸因贴片机而异。一般要求如下图 所示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4lDNYmZImTYRCwsyn9NnSAfW1yWzU8IU5MrzYjhThhNmd4grv7wZtjw/640?wx_fmt=jpeg&from=appmsg)

区域标记无法定位

-   定位针过程中，mark点无法定位。
    
-   对边过程中，mark点 不能定位在夹边到边4mm 范围内。PCB mark点 位
    
-   置应沿对角线放置，并且它们之间的距离应尽可能大。
    
-   •对于长度小于200mm 的 PCB，至少应放置2 个标记，如下图。对于长度
    
-   超过200mm的PCB，需要如图b 在PCB上放置4个mark点，沿着PCB长边的
    
-   中心线或靠近中心线放置1或2个mark点 。
    

PCB mark点 标记应沿着每个小板的对角线放置，如下图 所示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4Xvjq2gt8XgGEIlyiaPiaDiclicIeBM9xIg9PXoBJ2jy4Do3a3Vf4dmQMVg/640?wx_fmt=jpeg&from=appmsg)

PCB mark点 位置布局

2）局部 mark点

局部mark点 位置应满足以下要求： 对于超过 100 个引脚的 QFP 元件，应沿对角线放置 2 个 mark点 ，如图 a 所示。对于引脚数超过 160 的 QFP 元件，应在四个角放置 4 个标记，如图 b 所示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4jUqQZR0GG3WYN2MA3wnIZ8PXH865ypkPO0U6IHv0jGEpsHiaxJibVHmg/640?wx_fmt=jpeg&from=appmsg)

局部mark 点

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4J7nhcE2sGzrOoia9hvneanv7uicic2fF29IJHku3KuKxM7jpoFPQ7rFDw/640?wx_fmt=jpeg&from=appmsg)

mark点

  

6、mark点 切口间隙

mark点周围的适当间隙至关重要。在焊盘周围放置一个开放区域（无铜、阻焊层、丝网印刷等）。有了这个空间，相机就可以在没有视觉干扰的情况下拾取标记。

开放空间的直径应至少是焊盘尺寸的两倍。因此，对于 2mm 的焊盘，你需要在其周围至少留出 4mm 的间隙区域。间隙区域的形状不太重要；圆形和方形区域是两种流行的设计。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH44mo14njiawcqTibJ8bJ0TJ8STp2OlW7MJfDB9F7e4bCAMZ5DDKtLdOGQ/640?wx_fmt=jpeg&from=appmsg)

mark点 切口间隙

7、mark点 材料

mark点 焊盘需要用电路板其余部分使用的金属完成。（记住，焊盘是用来反射光的。）因此，不要用阻焊层、丝网印刷或任何其他材料覆盖焊盘。

8、mark点 数量

三个基准点的数量是消除模板相对于 PCB 意外错位的最佳数字。

1）1 个mark点

只有一个基准标记可用，扫描软件无法确定 PCB 的正确旋转。一台机器实际上无法运行只有一个基准标记的 PCB。

2）2个 mark点

有两个可用的基准标记，机器可以正常运行。然而，这里有两个风险在起作用。

-   双标记设置提供了很好但通常不是很好的位置跟踪。如果使用的是细间距组件，可能就不会那么准确
    
-   相反的基准点可能会导致操作员错误。如果将 PCB 倒置插入，机器可能仍会看到基准点并继续其愉快的工作。这种失误最好的情况是浪费时间，最坏的情况是导致灾难性的组件堆积或永久性 PCB 和设备损坏。
    

3）3 个mark点

三个是正确运行 PCB 的最佳基准标记数，包括第三个基准标记可以为三角测量增加一个额外的点，从而提高整体精度。它还消除了错误旋转的板通过相机的任何可能性。

4）4 个mark点

虽然看起来添加四个点只能进一步提高准确性，但很少有更多的东西可以通过这一点获得。这里的主要缺点是第四个基准标记会重新引入处理倒置面板的危险。走这条路线时要格外小心。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4cgLDyVC9vxlMicueQodPDRRJF4n1atOia9bCpcl3ppUAkOCMsljU6r3Q/640?wx_fmt=png&from=appmsg)

mark 点

8、mark 点铜饰面

mark 点焊盘需要是平稳的以反映均匀的图像，铜标记镀有你选择的任何金属饰面。电镀和浸渍等工艺在均匀性方面是可靠的，而热风焊料的变化往往更大一些。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4gxvqKGGDzbg3oSiaXTVwUy6r4FB5VeIjLZKETJwgW8weEJGOhUOWeUQ/640?wx_fmt=jpeg&from=appmsg)

mark 点铜饰面

如果饰面的厚度有任何变化，则无法正确反映。虽然并非无法克服，但它确实迫使生产操作员花费额外的时间来恢复标记。根据问题的严重程度，就需要编辑软件程序以进行补偿，或完全重新焊接基准点。简而言之，修复需要花费大量时间。

9、mark 点 对比度

当 mark点标记与印制板基板材料之间存在高对比度时，可实现最佳性能。对于所有标记点，内部背景必须相同。

  

# 六、mark点怎么制作？

器件孔接口器件和连接器多为插件式元件。插件的通孔直径比管脚直径大8～20mil，焊接时渗锡性好。需要注意的是线路板出厂时的孔径存在误差。近似误差为±0.05mm。每0.05mm为一钻。直径超过3.20mm，每0.1mm为一钻。因此，在设计器件孔径时，应将单位换算为毫米，孔径应设计为0.05的整数倍。制造商根据用户提供的钻孔数据设定钻孔工具的尺寸。钻具尺寸通常比用户要求的成型孔大0.1-0.15mm。越少越好。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjh2rFXiawPFFOuuIic0icBiaoH4CfSZdRFK57fFRXTDwVX2fD5zSBqOpNz6U02F7zeKUpJk1TZ4W5sibcw/640?wx_fmt=jpeg&from=appmsg)

mark 点制作

以上就是关于 PCB mark 点的知识，希望对大家有帮助。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源头条百芯EMA。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。