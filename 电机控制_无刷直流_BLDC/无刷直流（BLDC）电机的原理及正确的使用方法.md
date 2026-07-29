# 无刷直流（BLDC）电机的原理及正确的使用方法

原创 电机新视界 2024-06-04 17:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/UGf9oE9wzYdhHneuB2EZ2g](https://mp.weixin.qq.com/s/UGf9oE9wzYdhHneuB2EZ2g)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0tx2UUQMiaekzttE3Wyxwxqichzmk6TPhblJtseMFwghh73Pa6c70fwC3cjxBB0SSibjlQnuDXqr3cVA/640?wx_fmt=jpeg&from=appmsg)


来源：单片机与嵌入式

 当工程师想利用电气、电子的机器在现实世界中做些什么时，他们会思考怎样才能将电信号变为“力”？将电信号转换为力的就是传动器，即电机。可以将电机视作“将电气转换为机械的力的元件”。

    最基本的电机是 “DC电机（有刷电机）”。在磁场中放置线圈，通过流动的电流，线圈会被一侧的磁极排斥，同时被另一侧磁极所吸引，在这种作用下不断旋转。在旋转过程中令通向线圈中的电流反向流动，使其持续旋转。电机中有个叫"换向器"的部分是靠"电刷"供电的，"电刷"的位置在"转向器"上方，随着旋转不断移动。通过改变电刷的位置，可使电流方向发生变化。换向器和电刷是DC电机的旋转所不可或缺的结构，DC电机（有刷电机）的运转示意图如下图所示。

![](https://mmbiz.qpic.cn/mmbiz_gif/K9mVOHgVt7wmpCeFH21qWDUjFOC8DwYvwiaFhg22OWefTQtibMZb6QWtWL59jn860GxlQKdlO2StKnkKFVVrnspw/640?wx_fmt=gif&wxfrom=13&tp=wxpic)

    换向器切换线圈中电流的流向，反转磁极的方向，使其始终向右旋转。电刷向与轴一同旋转的换向器供电。

## 活跃于多个领域的电机

    我们按电源种类和转动原理对电机进行了分类如下图。让我们来简单看看各类电机的特点和用途吧。

![](https://mmbiz.qpic.cn/mmbiz_jpg/K9mVOHgVt7wmpCeFH21qWDUjFOC8DwYvkx9p78Vdvyo1Ok22EZQKpBXtfib4wKvmPWoD6wLYtCtyaY0uj2OJmmw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

    构造简单而又容易操控的DC电机（有刷电机）通常被用在家电产品的“光盘托盘的开闭”等用途上。或用在汽车的“电动后视镜的开闭、方向控制”等用途上。虽然它既廉价又能用在多个领域上，但它也有缺陷。由于换向器会和电刷接触，它的寿命很短，必须定期更换电刷或保修。

    步进电机会随着向其发出的电脉冲数旋转。它的运动量取决于向其发出的电脉冲数，因此适用于位置调整。在家庭中通常被用于“传真机和打印机的送纸”等。由于传真机的送纸步骤取决于规格（刻纹、细致度），因此随着电脉冲数旋转的步进电机非常便于使用。很容易解决信号一旦停止机器就会暂时停止的问题。

    旋转数随电源频率变化的同步电机被用于“微波炉的旋转桌”等用途上。电机组里有齿轮减速器，可以得到适合加热食品的旋转数。感应电机也受电源频率的影响，但频率和旋转数不一致。以前这类AC电机被用在风扇或洗衣机上。

    由此可见，各式各样的电机活跃于多个领域。其中，BLDC电机（无刷电机）具有怎样的特点才会用途如此之广呢？

## BLDC电机是如何旋转的？

    BLDC电机中的“BL”意为“无刷”，就是DC电机（有刷电机）中的“电刷”没有了。电刷在DC电机（有刷电机）里扮演的角色是通过换向器向转子里的线圈通电。那么没有电刷的BLDC电机是如何向转子里的线圈通电的呢？原来BLDC电动机电机采用永磁体来做转子，转子里是没有线圈的。由于转子里没有线圈，所以不需要用于通电的换向器和电刷。取而代之的是作为定子的线圈。BLDC电机的运转示意图，如下图。

    DC电机（有刷电机）中被固定的永磁体所制造出的磁场是不会动的，通过控制线圈（转子）在其内部产生的磁场来旋转。要通过改变电压来改变旋转数。BLDC电机的转子是永磁体，通过改变周围的线圈所产生的磁场的方向使转子旋转。通过控制通向线圈的电流方向和大小来控制转子的旋转。

![](https://mmbiz.qpic.cn/mmbiz_gif/K9mVOHgVt7wmpCeFH21qWDUjFOC8DwYv6CJWlJOicCRCDKQK3tv60gEp6T0XqxHFGiaEvr69pMWWgSMn7DSnCoRg/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

    BLDC电机将永磁体作为转子。由于无需向转子通电，因此不需要电刷和换向器。从外部对通向线圈的电进行控制。

## BLDC电机的优点

    BLDC电机的定子上有三个线圈，每个线圈有两根电线，电机中共有六根引出线。实际上，由于是内部接线，通常只需要三根线，但还是比先前所说的DC电机（有刷电机）要多出一根。纯靠连接电池的正负极是不会动的。至于如何运行BLDC电机将在本系列的第二回中进行说明。此次我们要关注的是BLDC电机的优点。

    BLDC电机的第一个特点是“高效率”。可以控制它的回旋力（扭矩）始终保持最大值。DC电机(有刷电机)的话，旋转过程中最大扭矩只能保持一个瞬间，无法始终保持最大值。若DC电机（有刷电机）想要得到和BLDC电机一样大的扭矩，只能加大它的磁铁。这就是为什么小型BLDC电机也能发出强大力量的原因。

    第二个特点是“良好的控制性”，与第一个有所关联。BLDC电机可以丝毫不差的得到你所想要的扭矩、旋转数等。BLDC电机可以精确地反馈目标旋转数、扭矩等。通过精确的控制可以抑制电机的发热和电力的消耗。若是电池驱动，则能通过周密的控制，延长驱动时间。

    除此之外还有耐用，电气噪音小等特点。上述两点是无电刷所带来的优势。而DC电机（有刷电机）由于电刷和换向器之间的接触，长时间使用会有损耗。接触的部分还会产生火花。尤其是换向器的缝隙碰到电刷时会出现巨大的火花和噪音。若不希望使用过程中产生噪音，会考虑采用BLDC电机。

## BLDC电机适用于这些方面

    高效率、多样操控、寿命长的BLDC电机一般会用在哪些地方呢？往往被用于能够发挥其高效率、寿命长的特点，被连续使用的产品中。例如：家电。人们很早就开始使用洗衣机和空调了。最近电风扇中也开始采用BLDC电机，并成功促使消耗电力大幅度下降。正是因为效率高才让消耗电力下降的。

    吸尘机中也采用了BLDC电机。在某个事例中，通过变更控制系统，实现了旋转数的大幅度上升。这个事例体现了BLDC电机的良好控制性。

    作为重要存储介质的硬盘，其旋转部分也采用了BLDC电机。由于它是需要长时间运转的电机，因此耐用性很重要。当然，它还有极力抑制电力消耗的用途。这里的高效率也和电力的低消耗有关。

## BLDC电机的用途还有很多

    BLDC电机有望被应用在更广泛的领域中。BLDC电机将会在小型机器人，尤其是在制造以外的领域提供服务的“服务机器人”中得到广泛应用。“定位对于机器人很重要，不是应该使用随电脉冲数运行的步进电机吗？”或许会有人这么想。但是在力量控制方面，BLDC电机更合适。另外，若采用步进电机，像机器人手腕这样的构造要固定在某个位置需要提供相当大的电流。若是BLDC电机，则能配合外力只提供所需的电力，从而抑制电力的消耗。

    还可用于运输方面。一直以来，老年人电动车或高尔夫球车中大多采用简单的DC电机，但最近都开始采用具有良好控制性的高效率BLDC电机了。可以通过细微的控制，延长电池的持续时间。BLDC电机还适用于无人机中。尤其是多轴机架的无人机，由于它是通过改变螺旋桨的旋转数来控制飞行姿态的，因此能够精密控制旋转的BLDC电机很有优势。

    怎么样？BLDC电机是效率高、控制性良好、寿命长的优质电机。但是，要想将BLDC电机的力量发挥到极致，则需要正确的控制。该如何操作呢？

## 仅靠连接无法转动

    内转子型BLDC电机是典型的BLDC电机的一种，其外观与内部构造如下图所示。带刷DC电机（以下称为DC电机）的转子上有线圈，外侧放有永磁体。BLDC电机的转子上有永磁体，外侧是线圈。BLCD电机的转子没有线圈，是永磁体，因此没有必要在转子上通电。实现了不带通电用的电刷的“无刷型”。

另一方面，与DC电机相比，控制也变得更难了。并不是只要将电机上的电缆接上电源就好了。本来就连电缆数目都不一样。和“将正极（+）和负极（-）连上电源”的方式不同。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxeo4HNTd8DStMHYZDW8t7QfW3cmiaaqRtgum76YshrPYTvdrLDLQY78Hm7JL6lemmbCGSIhiaEwg3PQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

    转子是永磁体，因此无法通电。无需电刷及换向器，可谋求延长使用寿命

## 改变磁通量的方向

    为了转动BLDC电机，必须控制线圈的电流方向及时机。下图2-A是将BLDC电机的定子（线圈）和转子（永磁体）模式化的结果。使用该图片，思考一下转子旋转的情况吧。思考使用3个线圈的情况。虽然实际上也有使用6个或以上的线圈的情况，但在考虑原理的基础上，每120度放一个线圈，使用3个线圈。电机将电气（电压、电流）转换为机械性旋转。xia'tBLDC电机又是如何转动呢？先来看一看电机中发生了什么吧。

![](https://mmbiz.qpic.cn/mmbiz_png/K9mVOHgVt7wmpCeFH21qWDUjFOC8DwYvLQkgKXcGib2TlCoXWsUajOXkic2Bq53djI8Paw19thoYlh2aDXclrvuw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图2-A：BLDC电机转动原理

    BLDC电机中每隔120度放置一个线圈，总共放置三个线圈，控制通电相或线圈的电流

    如图2-A所示，BLDC电机使用3个线圈。这三个线圈用以在通电后生成磁通量，将其命名为U、V、W。将该线圈通电试试看吧。线圈U（以下简称为“线圈”）上的电流路径记为U相，V的记录为V相，W的记录为W相。接下来看一看U相吧。向U相通电后，将产生如图2-B所示的箭头方向的磁通量。

    但实际上，U、V、W的电缆都是互相连接着的，因此无法仅向U相通电。在这里，从U相向W相通电，会如图2-C所示在U、W产生磁通量。合成U和W的两个磁通量，变为图2-D所示的较大的磁通量。永磁体将进行旋转，以使该合成磁通量与中央的永磁体（转子）的N极方向相同。

![](https://mmbiz.qpic.cn/mmbiz_png/K9mVOHgVt7wmpCeFH21qWDUjFOC8DwYvvOK0Ua3Akq5NmAviaJRvqnThibbTV899YrJX5ggc36fhtHrKhaPSMa8w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图2-B：BLDC电机的转动原理

    从U相向W向通电。首先，只关注线圈U部分，则发现会产生如箭头般的磁通量。

![](https://mmbiz.qpic.cn/mmbiz_png/K9mVOHgVt7wmpCeFH21qWDUjFOC8DwYvLQkgKXcGib2TlCoXWsUajOXkic2Bq53djI8Paw19thoYlh2aDXclrvuw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图2-C：BLDC电机的转动原理

    从U相向W相通电，则会产生方向不同的2个磁通量。

![](https://mmbiz.qpic.cn/mmbiz_png/K9mVOHgVt7wmpCeFH21qWDUjFOC8DwYvaMa2QByZozOfFcAlP4WlwH1HOeB1cqXVB5o341E6VPVJc76qqW5V5g/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图2-D：BLDC电机的转动原理

    从U相向W相通电，可以认为产生了两个磁通量合成的磁通量。

    若改变合成磁通量的方向，则永磁体也会随之改变。配合永磁体的位置，切换U相、V相、W相中通电的相，以变更合成磁通量的方向。连续执行此操作，则合成磁通量将发生旋转，从而产生磁场，转子旋转。

    下图3所示的是通电相与合成磁通量的关系。在该例中，按顺序从1-6变更通电模式，则合成磁通量将顺时针旋转。通过变更合成磁通量的方向，控制速度，可控制转子的旋转速度。将切换这6种通电模式，控制电机的控制方法称为“120度通电控制”。

![](https://mmbiz.qpic.cn/mmbiz_gif/K9mVOHgVt7wmpCeFH21qWDUjFOC8DwYvYM3w37AWeOgz7Jyzrj7DlRNzM65SsJEflZ82wiczPCbt8MEpic3chlxA/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

图3：转子的永久磁石会像被合成磁通量牵引一样旋转，电机的轴也会因此旋转

## 使用正弦波控制，进行流畅的转动

    接下来，尽管在120度通电控制下合成磁通量的方向会发生旋转，但其方向不过只有6种。比如将图3的“通电模式1”改为“通电模式2”，则合成磁通量的方向将变化60度。然后转子将像被吸引一样发生旋转。接下来，从“通电模式2”改为“通电模式3”，则合成磁通量的方向将再次变化60度。转子将再次被该变化所吸引。这一现象将反复出现。这一动作将变得生硬。有时这动作还会发出噪音。

    能消除120度通电控制的缺点，实现流畅的转动的正是“正弦波控制”。在120度通电控制中，合成磁通量被固定在了6个方向。进行控制，使其进行连续的变化。在图2-C的例子中，U和W生成的磁通量大小相同。但是，若能较好地控制U相、V相、W相，则可让线圈各自生成大小各异的磁通量，精密地控制合成磁通量的方向。调整U相、V相、W相各相的电流大小，与此同时生成了合成磁通量。通过控制这一磁通量连续生成，可使电机流畅地转动。

![](https://mmbiz.qpic.cn/mmbiz_gif/K9mVOHgVt7wmpCeFH21qWDUjFOC8DwYv51ghZZNKhs4MXhNF3LRUdMqibcuYab0qWibm7dYZuyxWx60dRbftJgIw/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)

图4：正弦波控制

    正弦波控制可控制3相上的电流，生成合成磁通量，实现流畅的转动。可生成120度通电控制无法生成的方向上生成合成磁通量

## 使用逆变器控制电机

    那么U、V、W各相上的电流又如何呢？为便于理解，回想120度通电控制的情况看看吧。请再次查看图3。在通电模式1时，电流从U流至W;在通电模式2时，电流从U流至V。可以看出，每当有电流流动的线圈的组合发生改变时，合成磁通量箭头的方向也会发生变化。

    接下来，请看通电模式4。在该模式下，电流从W流至U，与通电模式1的方向相反。在DC电机中，像这样的电流方向的转换是由换向器和刷子的组合来进行了。但是，BLDC电机不使用这样的接触型的方法。使用逆变器电路，更改电流的方向。在控制BLDC电机时，一般使用的是逆变器电路。

    另外逆变器电路可改变各相中的外加电压，调整电流值。电压的调整中，常用的是PWM（Pulse Width Modulation=脉冲宽度调制）。PWM是一种通过调整脉冲ON/OFF的时间长度改变电压的方法，重要的是ON时间和OFF时间的比率（占空比）变化。若ON的比率较高，可以得到和提高电压相同的效果。若ON的比率下降，则可以得到和电压降低相同的效果（图5）。

    为了实现PWM，现在还有配备了专用硬件的微电脑。进行正弦波控制时需控制3相的电压，因此比起只有2相通电的120度通电控制来说，软件要稍稍复杂一些。逆变器是对驱动BLDC电机必要的电路。交流电机中也使用了逆变器，但可以认为家电产品中所说的“逆变器式”几乎使用的是BLDC电机。

![](https://mmbiz.qpic.cn/mmbiz_png/K9mVOHgVt7wmpCeFH21qWDUjFOC8DwYvjTGKg0fCoJzn6X5zys3rWG7REAOsSsCGmEleOIUcqhU0fiaDTJWQWEA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

图5：PWM输出与输出电压的关系

    变更某时间内的ON时间，以变更电压的有效值。ON时间越长，有效值越接近施加100%电压时（ON时）的电压。

## 使用位置传感器的BLDC电机

    以上是BLDC电机的控制的概况。BLDC电机通过改变线圈生成的合成磁通量的方向，使转子的永磁体随之变化。

    实际上，在以上的说明中，还有一点没有提到。即BLDC电机中的传感器的存在。BLDC电机的控制是配合着转子（永磁体）的位置（角度）进行的。因此，获取转子位置的传感器是必需的。若没有传感器得知永磁体的方向时，转子可能会转至意料之外的方向。有传感器提供信息的话，就不会出现这样的情况了。

    下表1中显示的是BLDC电机主要的位置检测用传感器的种类。根据控制方式的不同，需要的传感器也是不同的。在120度通电控制中，为判断要对哪个相通电，配备了可每60度输入一次信号的霍尔效应传感器。另一方面，对于精密控制合成磁通量的“矢量控制”（在下一项中说明）来说，转角传感器或光电编码器等高精度传感器较为有效。

    通过使用这些传感器可以检测出位置，但也会带来一些缺点。传感器防尘能力较弱，而且维护也是不可或缺的。可使用的温度范围也会缩小。使用传感器或为此增加配线都会造成成本的上升，而且高精度传感器本身就价格高昂。于是，“无传感器”这一方式登场了。它不使用位置检测用传感器，以此控制成本，且不需要传感器相关的维护。但此次为了说明原理，因此假定已从位置传感器获得了信息来吧。

![](https://mmbiz.qpic.cn/mmbiz_png/K9mVOHgVt7wmpCeFH21qWDUjFOC8DwYvzxW16icjVuPs1XXDM7Ny0bVFI9HSmeGwjUbR631Um5rSKic9B78iadFug/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

表1：位置检测专用传感器的种类及特征

## 通过矢量控制时刻保持高效率

    正弦波控制为3相通电，流畅地改变合成磁通量的方向，因此转子将流畅地旋转。120度通电控制切换了U相、V相、W相中的2相，以此来使电机转动，而正弦波控制则需要精确地控制3相的电流。而且控制的值是时刻变化的交流值，因此，控制变得更为困难。

    在这里登场的便是矢量控制了。矢量控制可通过坐标变换，把3相的交流值作为2相的直流值进行计算，因此可简化控制。但是，矢量控制计算需要高分辨率下的转子的位置信息。位置检测有两种方法，即使用光电编码器或转角传感器等位置传感器的方法，以及根据各相的电流值进行推算的无传感器方法。通过该坐标变换可直接控制扭矩（旋转力）的相关电流值，从而实现没有多余电流的高效控制。

    但是，矢量控制中需要进行使用三角函数的坐标变换，或复杂的计算处理。因此，大多情况下都会使用计算能力较强的微电脑作为控制用微电脑，比如配备了FPU（浮点运算器）的微电脑等。

  

  

**知识回顾**

**电机政策：**

[电机市场的IE5时代，真的要来了吗？  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247550130&idx=1&sn=42a14a5382b68a0bbd4ba48093155097&chksm=cede4576f9a9cc600786ab2908e4c3ef2cf3dbbfdb71a9265508f92e2dbda25384b66424bfde&scene=21#wechat_redirect)

  

[强制执行电机能效！2023年工信部发布最新工业节能通知！  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247552223&idx=1&sn=9a79a63e6376dc92a45d3945ccfccbc4&chksm=cede4d1bf9a9c40d9fa969d4856721610e61d357988dde293f59cbc0994f971b7dc168c64b0c&scene=21#wechat_redirect)  

[又一“千亿级”来了！高效电机再上央视！](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247549961&idx=1&sn=3138aaff5c66723c28a9499b551d3399&chksm=cede45cdf9a9ccdbd20ddd6eb429e4a1cf67bb758cb509a84cf1b292a9887047cfa38edcc451&scene=21#wechat_redirect)  

  

**精选文章：**

[清华大学的电机系毕业生都去哪儿了？](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247548328&idx=1&sn=8bbb58f38491f58600b87c85f9a2a864&chksm=cede7c6cf9a9f57ac80d409cbc6b9ced57c5d4df799227673198488eb6ac427f40098e09d145&scene=21#wechat_redirect)

  

[一路走来，风雨兼程，江西这家企业有太多故事！  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247552832&idx=1&sn=0691f10025dc8233e2c704ede28ff691&chksm=cede4e84f9a9c79222cf4bb485f1f3e0eb9f33f37ceff89c3ef6bf2136aa0cc5176d46b97555&scene=21#wechat_redirect)

  

[三十年磨一剑！卧龙电气背后不为人知的秘密！](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247553465&idx=1&sn=ce7240d5584ea18953b6e135546f0b7e&chksm=cede507df9a9d96b56d7b338b3f7006b29e5756c9c90bc5606002a402f4c3ffe5d991ac8ba3b&scene=21#wechat_redirect)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0s3XKZR1KtlxFAuIoGYBDeHH3cUQjZhhwP3ibXQ70NSJO9zrLzszLTuWdV18EcNU3gKvQ0G5AfvRMA/640?wx_fmt=png)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vTicAlmdAM5kmIicsPkDYY96WxUU7Fgeicr3EF8TShjxlP65ccvCvqh45flVSeAdLP2t4dNfPxicjicww/640?wx_fmt=png)