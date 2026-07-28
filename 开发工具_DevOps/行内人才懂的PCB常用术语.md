# 行内人才懂的PCB常用术语

原创 硬件笔记本 2023-02-01 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/bElrehCKxZvswKJ3zOz4DA](https://mp.weixin.qq.com/s/bElrehCKxZvswKJ3zOz4DA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

******▍**** Test Coupon：俗称阻抗条**

Test Coupon，是用来以 TDR (Time Domain Reflectometer 时域反射计) 来测量所生产的 PCB 的特性阻抗是否满足设计的要求，一般要控制的阻抗有单端线和差分对两种情况，所以 test coupon 上的走线线宽和线距(有差分对时)要与所要控制的线一样，最重要的是测量时接地点的位置。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgWJGytT7CpTsSdiaibhUwnBSCIqyEpkase8UGW7To9vBdt2MXLE88yicpQmS7ibCiapPvEEo81w1SEwpQ/640?wx_fmt=png)

为了减少接地引线(ground lead) 的电感值，TDR 探棒(probe)接地的地方通常非常接近量信号的地方(probe tip),所以 test coupon 上量测信号的点跟接地点的距离和方式要符合所用的探棒的规格。

  

  

****▍** 金手指**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgWJGytT7CpTsSdiaibhUwnBS81ialajLHrzs48X0b8U5SurNKLibqzicd2olibNgAlOy7Om4PcHcVSF0RQ/640?wx_fmt=png)

这里的金手指当然不是指加藤鹰啦，金手指(Gold Finger,或称Edge Connector)设计的目的,是用来与连接器(Connector)弹片之间的连接进行压迫接触而导电互连.之所以选择金是因为它优越的导电性及抗氧化性.你电脑里头的内存条或者显卡版本那一排金灿灿的东西就是金手指了。

  

那问题来了，金手指上的金是黄金吗？老wu觉得应该是金的，但不是纯金。为啥？应为纯金的硬度不够，我们看古装剧里，那些为了验证金元宝是不是真金的，都会用大门牙去咬一下看看有没有牙印，老wu不知道这是不是神编剧在鬼扯，但金手指要应付经常性的插拔动作，所以相对于纯金这种“软金”，金手指一般是电镀“硬金”，这里的硬金是电镀合金（也就是Au及其他的金属的合金），所以硬度会比较硬。

  

  

****▍** 硬金，软金**

  

硬金:Hard Gold;软金 soft Gold

  

电镀软金是以电镀的方式析出镍金在电路板上,它的厚度控制较具弹性。一般则用于COB(Chip On Board)上面打铝线用，或是手机按键的接触面，而用金手指或其它适配卡、内存所用的电镀金多数为硬金，因为必须耐磨。

  

想了解硬金及软金的由来，最好先稍微了解一下电镀金的流程。姑且不谈前面的酸洗过程，电镀的目基本上就是要将「金」电镀于电路板的铜皮上，但是「金」与「铜」直接接触的话会有电子迁移扩散的物理反应（电位差的关系），所以必须先电镀一层「镍」当作阻隔层，然后再把金电镀到镍的上面，所以我们一般所谓的电镀金，其实际名称应该叫做「电镀镍金」。

  

而硬金及软金的区别，则是最后镀上去的这层金的成份，镀金的时候可以选择电镀纯金或是合金，因为纯金的硬度比较软，所以也就称之为「软金」。因为「金」可以和「铝」形成良好的合金，所以COB在打铝线的时候就会特别要求这层纯金的厚度。

  

另外，如果选择电镀金镍合金或是金钴合金，因为合金会比纯金来得硬，所以也就称之为「硬金」。

  

****▍** 通孔：Plating Through Hole（PTH）**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjialh39SkNDnnpn7iaDfd745Rb3P4szc8ljJPQ9vFMqp0fjTIqBWEpiaAxpJ6XrUUYrZbdjV2x1lIbag/640?wx_fmt=png)

电路板不同层中导电图形之间的铜箔线路就是用这种孔导通或连接起来的，但却不能插装组件引腿或者其他增强材料的镀铜孔。印制电路板(PCB)是由许多的铜箔层堆叠累积形成的。铜箔层彼此之间不能互通是因为每层铜箔之间都铺上了一层绝缘层，所以他们之间需要靠导通孔（via）来进行讯号链接，因此就有了中文导通孔的称号。

  

通孔也是最简单的一种孔，因为制作的时候只要使用钻头或激光直接把电路板做全钻孔就可以了，费用也就相对较便宜。可是相对的，有些电路层并不需要连接这些通孔，但过孔却是全板贯通，这样就会形成浪费，特别是对于高密度HDI板的设计，电路板寸土寸金。所以通孔虽然便宜，但有时候会多用掉一些PCB的空间。

  

  

****▍** 盲孔：Blind Via Hole（BVH）**

  

将PCB的最外层电路与邻近内层以电镀孔连接，因为看不到对面，所以称为「盲孔」。为了增加PCB电路层的空间利用，应运而生「盲孔」工艺。

  

盲孔位于电路板的顶层和底层表面，具有一定的深度，用于表层线路同下面内层线路的连接，孔的深度一般有规定的比率（孔径）。这种制作方式需要特别注意，钻孔深度一定要恰到好处，不注意的话会造成孔内电镀困难。因此也很少有工厂会采用这种制作方式。其实让事先需要连通的电路层在个别电路层的时候先钻好孔，最后再黏合起来也是可以的，但需要较为精密的定位和对位装置。

  

  

****▍** 埋孔：Buried Via Hole (BVH)**

  

埋孔，就是印制电路板(PCB)内部任意电路层间的连接，但没有与外层导通，即没有延伸到电路板表面的导通孔的意思。

  

这个制作过程不能通过电路板黏合后再进行钻孔的方式达成，必须要在个别电路层的时候就进行钻孔操作，先局部黏合内层之后进行电镀处理，最后全部黏合。由于操作过程比原来的导通孔和盲孔更费劲，所以价格也是最贵的。这个制作过程通常只用于高密度的电路板，增加其他电路层的空间利用率。

  

我们在画好PCB后，将其发送给PCB板厂打样或者是批量生产，我们在给板厂下单时，会附上一份PCB加工工艺说明文档，其中有一项就是要注明选用哪种PCB表面处理工艺，而且不同的PCB表面处理工艺，其会对最终的PCB加工报价产生比较大的影响，不同的PCB表面处理工艺会有不同的收费，下边咱们科普一些关于PCB表面处理工艺的术语。

  

  

****▍** 为什么要对PCB表面进行特殊处理？**

  

因为铜在空气中很容易氧化，铜的氧化层对焊接有很大的影响，很容易形成假焊、虚焊，严重时会造成焊盘与元器件无法焊接，正因如此，PCB在生产制造时，会有一道工序，在焊盘表面涂（镀）覆上一层物质，保护焊盘不被氧化。

目前国内板厂的PCB便面处理工艺有：喷锡（HASL，hot air solder leveling 热风整平）、沉锡、沉银、OSP(防氧化)、化学沉金（ENIG）、电镀金等等，当然，特殊应用场合还会有一些特殊的PCB表面处理工艺。

  

对比不同的PCB表面处理工艺，他们的成本不同，当然所用的场合也不同，只选对的不选贵的，目前还没有最完美的PCB表面处理工艺能够适合所有应用场景（这里讲的是性价比，即以最低的价格就能满足所有的PCB应用场景），所以才会有这么多的工艺来让我们选择，当然每一种工艺都各有千秋，存在的既是合理的，关键是我们要认识他们用好他们。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjialh39SkNDnnpn7iaDfd745RVkFKDVvTXOrrbzZqDRPXayfEQK4ZaO4P6pfWpVgcoGSozzLThegBQA/640?wx_fmt=png)

下边来对比一下不同的PCB表面处理工艺的优缺点和适用场景。

  

  

**裸铜板**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjialh39SkNDnnpn7iaDfd745RXKTD5x7tARF8dtpt82ASBZqwgeekic8P0OMoEfXQAibh31ztvO6AVMLg/640?wx_fmt=png)

  

-   优点：成本低、表面平整，焊接性良好（在没有被氧化的情況下）。
    
-   缺点：容易受到酸及湿度影响，不能久放，拆封后需在2小时内用完，因为铜暴露在空气中容易氧化；无法使用于双面板，因为经过第一次回流焊后第二面就已经氧化了。如果有测试点，必须加印锡膏以防止氧化，否则后续将无法与探针接触良好。
    

  

**喷锡板（HASL，Hot Air Solder Levelling，热风整平）**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjialh39SkNDnnpn7iaDfd745R9aTKvbxkIEqodnUdsNAAMPic8ibfSibx2GOxYwU53evOmGCrDzAciatxAA/640?wx_fmt=png)

-   优点：价格较低，焊接性能佳。
    
-   缺点：不适合用来焊接细间隙的引脚以及过小的元器件，因为喷锡板的表面平整度较差。在PCB加工中容易产生锡珠(solder bead)，对细间隙引脚(fine pitch)元器件较易造成短路。使用于双面SMT工艺时，因为第二面已经过了一次高温回流焊，极容易发生喷锡重新熔融而产生锡珠或类似水珠受重力影响成滴落的球状锡点，造成表面更不平整进而影响焊接问题。
    

  

喷锡工艺曾经在PCB表面处理工艺中处于主导地位。二十世纪八十年代，超过四分之三的PCB使用喷锡工艺，但过去十年以来业界一直都在减少喷锡工艺的使用。喷锡工艺制程比较脏、难闻、危险，因而从未是令人喜爱的工艺，但喷锡工艺对于尺寸较大的元件和间距较大的导线而言，却是极好的工艺。在密度较高的PCB中，喷锡工艺的平坦性将影响后续的组装；故HDI板一般不采用喷锡工艺。

  

随着技术的进步，业界现在已经出现了适于组装间距更小的QFP和BGA的喷锡工艺，但实际应用较少。目前一些工厂采用OSP工艺和浸金工艺来代替喷锡工艺；技术上的发展也使得一些工厂采用沉锡、沉银工艺。加上近年来无铅化的趋势，喷锡工艺使用受到进一步的限制。虽然目前已经出现所谓的无铅喷锡，但这可将涉及到设备的兼容性问题。

  

  

**OSP（Organic Soldering Preservative，防氧化）**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjialh39SkNDnnpn7iaDfd745RrEX6tPjZrAre2DicUwMT0HHlFHVIyEictBTE7KdLIyRvtvhjKhNLcTow/640?wx_fmt=png)

  

-   优点：具有裸铜板焊接的所有优点，过期（三个月）的板子也可以重新做表面处理，但通常以一次为限。
    
-   缺点：容易受到酸及湿度影响。使用于二次回流焊时，需在一定时间内完成，通常第二次回流焊的效果会比较差。存放时间如果超过三个月就必须重新表面处理。打开包装后需在24小时内用完。OSP为绝缘层，所以测试点必须加印锡膏以去除原来的OSP层才能接触针点作电性测试。
    

  

OSP工艺可以用在低技术含量的PCB，也可以用在高技术含量的PCB上，如单面电视机用PCB、高密度芯片封装用板。对于BGA方面，OSP应用也较多。PCB如果没有表面连接功能性要求或者储存期的限定，OSP工艺将是最理想的表面处理工艺。但OSP不适合用在少量多样的产品上面，也不适合用在需求预估不准的产品上，如果公司内电路板的库存经常超过六个月，真的不建议使用OSP表面处理的板子。

  

  

**沉金（ENIG，Electroless Nickel Immersion Gold）**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjialh39SkNDnnpn7iaDfd745RuYLWezecj6uSYUc9dggW56NxuvXiaxTS1HLNWSV6p5ggrGBvO1PsNYw/640?wx_fmt=png)

  

-   优点：不易氧化，可长时间存放，表面平整，适合用于焊接细间隙引脚以及焊点较小的元器件。有按键PCB板的首选。可以重复多次过回流焊也不太会降低其可焊性。可以用来作为COB(Chip On Board)打线的基材。
    
-   缺点：成本较高，焊接强度较差，因为使用无电镀镍制程，容易有黑盘的问题产生。镍层会随着时间氧化，长期的可靠性是个问题。
    

  

沉金工艺与OSP工艺不同，它主要用在表面有连接功能性要求和较长的储存期的板子上，如按键触点区、路由器壳体的边缘连接区和芯片处理器弹性连接的电性接触区。由于喷锡工艺的平坦性问题和OSP工艺助焊剂的清除问题，二十世纪九十年代沉金使用很广；后来由于黑盘、脆的镍磷合金的出现，沉金工艺的应用有所减少，不过目前几乎每个高技术的PCB厂都有沉金线。

  

考虑到除去铜锡金属间化合物时焊点会变脆，相对脆的镍锡金属间化合物处将出现很多的问题。因此，便携式电子产品（如手机）几乎都采用OSP、沉银或沉锡形成的铜锡金属间化合物焊点，而采用沉金形成按键区、接触区和EMI的屏蔽区，即所谓的选择性沉金工艺。

  

  

**沉银（ENIG，Electroless Nickel Immersion Gold）**

  

沉银比沉金便宜，如果PCB有连接功能性要求和需要降低成本，沉银是一个好的选择；加上沉银良好的平坦度和接触性，那就更应该选择沉银工艺。在通信产品、汽车、电脑外设方面沉银应用得很多，在高速信号设计方面沉银也有所应用。由于沉银具有其它表面处理所无法匹敌的良好电性能，它也可用在高频信号中。EMS推荐使用沉银工艺是因为它易于组装和具有较好的可检查性。但是由于沉银存在诸如失去光泽、焊点空洞等缺陷使得其增长缓慢（但没有下降）。

  

  

**沉锡（ENIG，Electroless Nickel Immersion Gold）**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjialh39SkNDnnpn7iaDfd745RiatCN3hZAXpfSibYoU1jXNnoWcALW9PLKtcmqGmVV91zFuks2BRKv6bg/640?wx_fmt=png)

  

沉锡被引入表面处理工艺是近十年的事情，该工艺的出现是生产自动化的要求的结果。沉锡在焊接处没有带入任何新元素，特别适用于通信用背板。在板子的储存期之外锡将失去可焊性，因而沉锡需要较好的储存条件。另外沉锡工艺中由于含有致癌物质而被限制使用。

  

老wu经常发现小伙伴们会对沉金和镀金工艺傻傻搞不清楚，下边来对比下沉金工艺和镀金工艺的区别和适用场景

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjialh39SkNDnnpn7iaDfd745RKJiaAPx9qTUX4K8HRTSCZILvQzXj7oTnXkncD3tEibZs5mx835sUkrVQ/640?wx_fmt=png)

-   沉金与镀金形成的晶体结构不一样，沉金板较镀金板更容易焊接，不会造成焊接不良；
    
-   沉金板只有焊盘上有镍金，趋肤效应中信号的传输是在铜层不会对信号有影响；
    
-   沉金较镀金晶体结构更致密，不易氧化；
    
-   沉金板只有焊盘上有镍金，不会产生金丝造成微短；
    
-   沉金板只有焊盘上有镍金，线路上阻焊与铜层结合更牢固；
    
-   沉金显金黄色，较镀金更黄也更好看；
    
-   沉金比镀金软，所以在耐磨性上不如镀金，对于金手指板则镀金效果会更好。
    

  

**附：PCB术语及英文对照**

  

  

**PCB专业英译术语**

_**一、综合词汇**_

  

__1、印制电路：printed circuit  
2、印制线路：printed wiring  
3、印制板：printed board  
4、印制板电路：printed circuit board (PCB)  
5、印制线路板：printed wiring board(PWB)  
6、印制组件：printed component  
7、印制接点：printed contact  
8、印制板装配：printed board assembly  
9、板：board  
10、单面印制板：single-sided printed board(SSB)  
11、双面印制板：double-sided printed board(DSB)  
12、多层印制板：mulitlayer printed board(MLB)  
13、多层印制电路板：mulitlayer printed circuit board  
14、多层印制线路板：mulitlayer prited wiring board  
15、刚性印制板：rigid printed board  
16、刚性单面印制板：rigid single-sided printed borad  
17、刚性双面印制板：rigid double-sided printed borad  
18、刚性多层印制板：rigid multilayer printed board  
19、挠性多层印制板：flexible multilayer printed board  
20、挠性印制板：flexible printed board  
21、挠性单面印制板：flexible single-sided printed board  
22、挠性双面印制板：flexible double-sided printed board  
23、挠性印制电路：flexible printed circuit (FPC)  
24、挠性印制线路：flexible printed wiring  
25、刚性印制板：flex-rigid printed board, rigid-flex printed board  
26、刚性双面印制板：flex-rigid double-sided printed board, rigid-flex double-sided printed  
27、刚性多层印制板：flex-rigid multilayer printed board, rigid-flex multilayer printed board  
28、齐平印制板：flush printed board  
29、金属芯印制板：metal core printed board  
30、金属基印制板：metal base printed board  
31、多重布线印制板：mulit-wiring printed board  
32、陶瓷印制板：ceramic substrate printed board  
33、导电胶印制板：electroconductive paste printed board  
34、模塑电路板：molded circuit board  
35、模压印制板：stamped printed wiring board  
36、顺序层压多层印制板：sequentially-laminated mulitlayer  
37、散线印制板：discrete wiring board  
38、微线印制板：micro wire board  
39、积层印制板：buile-up printed board  
40、积层多层印制板：build-up mulitlayer printed board (BUM)  
41、积层挠印制板：build-up flexible printed board  
42、表面层合电路板：surface laminar circuit (SLC)  
43、埋入凸块连印制板：B2it printed board  
44、多层膜基板：multi-layered film substrate(MFS)  
45、层间全内导通多层印制板：ALIVH multilayer printed board  
46、载芯片板：chip on board (COB)  
47、埋电阻板：buried resistance board  
48、母板：mother board  
49、子板：daughter board  
50、背板：backplane  
51、裸板：bare board  
52、键盘板夹心板：copper-invar-copper board  
53、动态挠性板：dynamic flex board  
54、静态挠性板：static flex board  
55、可断拼板：break-away planel  
56、电缆：cable  
57、挠性扁平电缆：flexible flat cable (FFC)  
58、薄膜开关：membrane switch  
59、混合电路：hybrid circuit  
60、厚膜：thick film  
61、厚膜电路：thick film circuit  
62、薄膜：thin film  
63、薄膜混合电路：thin film hybrid circuit  
64、互连：interconnection  
65、导线：conductor trace line  
66、齐平导线：flush conductor  
67、传输线：transmission line  
68、跨交：crossover  
69、板边插头：edge-board contact  
70、增强板：stiffener  
71、基底：substrate  
72、基板面：real estate  
73、导线面：conductor side  
74、组件面：component side  
75、焊接面：solder side  
76、印制：printing  
77、网格：grid  
78、图形：pattern  
79、导电图形：conductive pattern  
80、非导电图形：non-conductive pattern  
81、字符：legend  
82、标志：mark  
  
**二、基材**  
  
__

_1、基材：base material  
2、层压板：laminate  
3、覆金属箔基材：metal-clad bade material  
4、覆铜箔层压板：copper-clad laminate (CCL)  
5、单面覆铜箔层压板：single-sided copper-clad laminate  
6、双面覆铜箔层压板：double-sided copper-clad laminate  
7、复合层压板：composite laminate  
8、薄层压板：thin laminate  
9、金属芯覆铜箔层压板：metal core copper-clad laminate  
10、金属基覆铜层压板：metal base copper-clad laminate  
11、挠性覆铜箔绝缘薄膜：flexible copper-clad dielectric film  
12、基体材料：basis material  
13、预浸材料：prepreg  
14、粘结片：bonding sheet  
15、预浸粘结片：preimpregnated bonding sheer  
16、环氧玻璃基板：epoxy glass substrate  
17、加成法用层压板：laminate for additive process  
18、预制内层覆箔板：mass lamination panel  
19、内层芯板：core material  
20、催化板材：catalyzed board ,coated catalyzed laminate  
21、涂胶催化层压板：adhesive-coated catalyzed laminate  
22、涂胶无催层压板：adhesive-coated uncatalyzed laminate  
23、粘结层：bonding layer  
24、粘结膜：film adhesive  
25、涂胶粘剂绝缘薄膜：adhesive coated dielectric film  
26、无支撑胶粘剂膜：unsupported adhesive film  
27、覆盖层：cover layer (cover lay)  
28、增强板材：stiffener material  
29、铜箔面：copper-clad surface  
30、去铜箔面：foil removal surface  
31、层压板面：unclad laminate surface  
32、基膜面：base film surface  
33、胶粘剂面：adhesive faec  
34、原始光洁面：plate finish  
35、粗面：matt finish  
36、纵向：length wise direction  
37、模向：cross wise direction  
38、剪切板：cut to size panel  
39、酚醛纸质覆铜箔板：phenolic cellulose paper copper-clad laminates(phenolic/paper CCL)  
40、环氧纸质覆铜箔板：epoxide cellulose paper copper-clad laminates (epoxy/paper CCL)  
41、环氧玻璃布基覆铜箔板：epoxide woven glass fabric copper-clad laminates  
42、环氧玻璃布纸复合覆铜箔板：epoxide cellulose paper core, glass cloth surfaces copper-clad laminates  
43、环氧玻璃布玻璃纤维复合覆铜箔板：epoxide non woven/woven glass reinforced copper-clad laminates  
44、聚酯玻璃布覆铜箔板：ployester woven glass fabric copper-clad laminates  
45、聚酰亚胺玻璃布覆铜箔板：polyimide woven glass fabric copper-clad laminates  
46、双马来酰亚胺三嗪环氧玻璃布覆铜箔板：bismaleimide/triazine/epoxide woven glass fabric copper-clad lamimates  
47、环氧合成纤维布覆铜箔板：epoxide synthetic fiber fabric copper-clad laminates  
48、聚四乙烯玻璃纤维覆铜箔板：teflon/fiber glass copper-clad laminates  
49、超薄型层压板：ultra thin laminate  
50、陶瓷基覆铜箔板：ceramics base copper-clad laminates  
51、紫外线阻挡型覆铜箔板：UV blocking copper-clad laminates  
  
  
**三、基材的材料**  
  
_

_1、A阶树脂：A-stage resin  
2、B阶树脂：B-stage resin  
3、C阶树脂：C-stage resin  
4、环氧树脂：epoxy resin  
5、酚醛树脂：phenolic resin  
6、聚酯树脂：polyester resin  
7、聚酰亚胺树脂：polyimide resin  
8、双马来酰亚胺三嗪树脂：bismaleimide-triazine resin  
9、丙烯酸树脂：acrylic resin  
10、三聚氰胺甲醛树脂：melamine formaldehyde resin  
11、多官能环氧树脂：polyfunctional epoxy resin  
12、溴化环氧树脂：brominated epoxy resin  
13、环氧酚醛：epoxy novolac  
14、氟树脂：fluroresin  
15、硅树脂：silicone resin  
16、硅烷：silane  
17、聚合物：polymer  
18、无定形聚合物：amorphous polymer  
19、结晶现象：crystalline polamer  
20、双晶现象：dimorphism  
21、共聚物：copolymer  
22、合成树脂：synthetic  
23、热固性树脂：thermosetting resin  
24、热塑性树脂：thermoplastic resin  
25、感旋光性树脂：photosensitive resin  
26、环氧当量：weight per epoxy equivalent (WPE)  
27、环氧值：epoxy value  
28、双氰胺：dicyandiamide  
29、粘结剂：binder  
30、胶粘剂：adesive  
31、固化剂：curing agent  
32、阻燃剂：flame retardant  
33、遮光剂：opaquer  
34、增塑剂：plasticizers  
35、不饱和聚酯：unsatuiated polyester  
36、聚酯薄膜：polyester  
37、聚酰亚胺薄膜：polyimide film (PI)  
38、聚四氟乙烯：polytetrafluoetylene (PTFE)  
39、聚全氟乙烯丙烯薄膜：perfluorinated ethylene-propylene copolymer film (FEP)  
40、增强材料：reinforcing material  
41、玻璃纤维：glass fiber  
42、E玻璃纤维：E-glass fibre  
43、D玻璃纤维：D-glass fibre  
44、S玻璃纤维：S-glass fibre  
45、玻璃布：glass fabric  
46、非织布：non-woven fabric  
47、玻璃纤维垫：glass mats  
48、纱线：yarn  
49、单丝：filament  
50、绞股：strand  
51、纬纱：weft yarn  
52、经纱：warp yarn  
53、但尼尔：denier  
54、经向：warp-wise  
55、纬向：weft-wise, filling-wise  
56、织物经纬密度：thread count  
57、织物组织：weave structure  
58、平纹组织：plain structure  
59、坏布：grey fabric  
60、稀松织物：woven scrim  
61、弓纬：bow of weave  
62、断经：end missing  
63、缺纬：mis-picks  
64、纬斜：bias  
65、折痕：crease  
66、云织：waviness  
67、鱼眼：fish eye  
68、毛圈长：feather length  
69、厚薄段：mark  
70、裂缝：split  
71、捻度：twist of yarn  
72、浸润剂含量：size content  
73、浸润剂残留量：size residue  
74、处理剂含量：finish level  
75、浸润剂：size  
76、偶联剂：couplint agent  
77、处理织物：finished fabric  
78、聚酰胺纤维：polyarmide fiber  
79、聚酯纤维非织布：non-woven polyester fabric  
80、浸渍绝缘纵纸：impregnating insulation paper  
81、聚芳酰胺纤维纸：aromatic polyamide paper  
82、断裂长：breaking length  
83、吸水高度：height of capillary rise  
84、湿强度保留率：wet strength retention  
85、白度：whitenness  
86、陶瓷：ceramics  
87、导电箔：conductive foil  
88、铜箔：copper foil  
89、电解铜箔：electrodeposited copper foil (ED copper foil)  
90、压延铜箔：rolled copper foil  
91、退火铜箔：annealed copper foil  
92、压延退火铜箔：rolled annealed copper foil (RA copper foil)  
93、薄铜箔：thin copper foil  
94、涂胶铜箔：adhesive coated foil  
95、涂胶脂铜箔：resin coated copper foil (RCC)  
96、复合金属箔：composite metallic material  
97、载体箔：carrier foil  
98、殷瓦：invar  
99、箔（剖面）轮廓：foil profile  
100、光面：shiny side  
101、粗糙面：matte side  
102、处理面：treated side  
103、防锈处理：stain proofing  
104、双面处理铜箔：double treated foil  
  
**四、设计**  
  
_

_1、原理图：shematic diagram  
2、逻辑图：logic diagram  
3、印制线路布设：printed wire layout  
4、布设总图：master drawing  
5、可制造性设计：design-for-manufacturability  
6、计算机辅助设计：computer-aided design.(CAD)  
7、计算机辅助制造：computer-aided manufacturing.(CAM)  
8、计算机集成制造：computer integrat manufacturing.(CIM)  
9、计算机辅助工程：computer-aided engineering.(CAE)  
10、计算机辅助测试：computer-aided test.(CAT)  
11、电子设计自动化：electric design automation .(EDA)  
12、工程设计自动化：engineering design automaton .(EDA2)  
13、组装设计自动化：assembly aided architectural design. (AAAD)  
14、计算机辅助制图：computer aided drawing  
15、计算机控制显示：computer controlled display .(CCD)  
16、布局：placement  
17、布线：routing  
18、布图设计：layout  
19、重布：rerouting  
20、模拟：simulation  
21、逻辑模拟：logic simulation  
22、电路模拟：circit simulation  
23、时序模拟：timing simulation  
24、模块化：modularization  
25、布线完成率：layout effeciency  
26、机器描述格式：machine descriptionm format .(MDF)  
27、机器描述格式数据库：MDF databse  
28、设计数据库：design database  
29、设计原点：design origin  
30、优化（设计）：optimization (design)  
31、供设计优化坐标轴：predominant axis  
32、表格原点：table origin  
33、镜像：mirroring  
34、驱动文件：drive file  
35、中间文件：intermediate file  
36、制造文件：manufacturing documentation  
37、队列支撑数据库：queue support database  
38、组件安置：component positioning  
39、图形显示：graphics dispaly  
40、比例因子：scaling factor  
41、扫描填充：scan filling  
42、矩形填充：rectangle filling  
43、填充域：region filling  
44、实体设计：physical design  
45、逻辑设计：logic design  
46、逻辑电路：logic circuit  
47、层次设计：hierarchical design  
48、自顶向下设计：top-down design  
49、自底向上设计：bottom-up design  
50、线网：net  
51、数字化：digitzing  
52、设计规则检查：design rule checking  
53、走（布）线器：router (CAD)  
54、网络表：net list  
55、计算机辅助电路分析：computer-aided circuit analysis  
56、子线网：subnet  
57、目标函数：objective function  
58、设计后处理：post design processing (PDP)  
59、交互式制图设计：interactive drawing design  
60、费用矩阵：cost metrix  
61、工程图：engineering drawing  
62、方块框图：block diagram  
63、迷宫：moze  
64、组件密度：component density  
65、巡回售货员问题：traveling salesman problem  
66、自由度：degrees freedom  
67、入度：out going degree  
68、出度：incoming degree  
69、曼哈顿距离：manhatton distance  
70、欧几里德距离：euclidean distance  
71、网络：network  
72、阵列：array  
73、段：segment  
74、逻辑：logic  
75、逻辑设计自动化：logic design automation  
76、分线：separated time  
77、分层：separated layer  
78、定顺序：definite sequenc  
  
**五、形状与尺寸**  
_

_1、导线（信道）：conduction (track)  
2、导线（体）宽度：conductor width  
3、导线距离：conductor spacing  
4、导线层：conductor layer  
5、导线宽度/间距：conductor line/space  
6、第一导线层：conductor layer No.1  
7、圆形盘：round pad  
8、方形盘：square pad  
9、菱形盘：diamond pad  
10、长方形焊盘：oblong pad  
11、子弹形盘：bullet pad  
12、泪滴盘：teardrop pad  
13、雪人盘：snowman pad  
14、V形盘：V-shaped pad  
15、环形盘：annular pad  
16 、非圆形盘：non-circular pad  
17、隔离盘：isolation pad  
18、非功能连接盘：monfunctional pad  
19、偏置连接盘：offset land  
20、腹（背）裸盘：back-bard land  
21、盘址：anchoring spaur  
22、连接盘图形：land pattern  
23、连接盘网格阵列：land grid array  
24、孔环：annular ring  
25、组件孔：component hole  
26、安装孔：mounting hole  
27、支撑孔：supported hole  
28、非支撑孔：unsupported hole  
29、导通孔：via  
30、镀通孔：plated through hole (PTH)  
31、余隙孔：access hole  
32、盲孔：blind via (hole)  
33、埋孔：buried via hole  
34、埋/盲孔：buried /blind via  
35、任意层内部导通孔：any layer inner via hole (ALIVH)  
36、全部钻孔：all drilled hole  
37、定位孔：toaling hole  
38、无连接盘孔：landless hole  
39、中间孔：interstitial hole  
40、无连接盘导通孔：landless via hole  
41、引导孔：pilot hole  
42、端接全隙孔：terminal clearomee hole  
43、准表面间镀覆孔：quasi-interfacing plated-through hole  
44、准尺寸孔：dimensioned hole  
45、在连接盘中导通孔：via-in-pad  
46、孔位：hole location  
47、孔密度：hole density  
48、孔图：hole pattern  
49、钻孔图：drill drawing  
50、装配图：assembly drawing  
51、印制板组装图：printed board assembly drawing  
52、参考基准：datum referan_

  

**_六、流程_**

  

_1、开料：CutLamination/Material cutting_

_2、钻孔：Drilling_

_3、内钻：Inner LayerDrilling_

_4、一次孔:Outer Layer Drilling_

_5、二次孔:2nd Drilling_   

_6、雷射钻孔:Laser Drilling /Laser Ablation_

_7、盲(埋)孔钻孔:Blind & Buried Hole Drilling_

_8、干膜制程：PhotoProcess(D/F)/Dry Film_

_9、前处理 (Pretreatment)_

_10、压膜:Dry Film Lamination_

_11、曝光:Exposure_

_12、显影:Developing_

_13、去膜:Stripping_

_14、压合：Lamination_

_15、黑化:Black OxideTreatment_

_16、微蚀:Microetching_

_17、铆钉组合:eyelet_

_18、迭板:Lay up_

_19、压合:Lamination_

_20、后处理:Post Treatment_

_21、黑氧化:Black Oxide Removal_

_22、铣靶:spot face_

_23、去溢胶:resin flush removal_

_24、减铜：Copper Reduction_

_25、水平电镀：HorizontalElectrolytic Plating_

_26、电镀：Panel plating_

_27、锡铅电镀:Tin-Lead Plating /Pattern Plating_

_28、低于 1 mil: Less than 1 mil Thickness_

_29、高于 1 mil:More than 1 mil Thickness_

_30、砂带研磨:Belt Sanding_

_31、剥锡铅:Tin-Lead Stripping_

_32、微切片: Microsection_

_33、蚀铜:Etching_

_34、初检:Touch-up_

_35、塞孔：Plug Hole_

_36、防焊(绿漆/绿油)：SolderMask_

_37、C面印刷:Printing Top Side_

_38、S面印刷:Printing Bottom Side_

_39、静电喷涂:Spray Coating_

_40、前处理:Pretreatment_

_41、预烤:Precure_

_42、后烘烤:Postcure_

_43、印刷:Ink Print_

_44、表面刷磨:Scrub_

_45、后烘烤:Postcure_

_46、UV烘烤:UV Cure_

_47、文字印刷:Printing of Legend_

_48、喷砂:Pumice/Wet Blasting_

_49、印可剥离防焊/蓝胶:Peelable Solder Mask)_

_50、化学前处理,化学研磨：Chemical Milling_

_51、选择性浸金压膜：Selective Gold Dry Film Lamination_

_52、镀金：Gold plating_

_53、喷锡：Hot Air SolderLeveling_

_54、成型：Profile/Form_

_55、开短路测试：Electrical Testing_

_56、终检：Final VisualInspection_

_57、金手指镀镍金：Gold Finger_

_58、电镀软金：Soft Ni/Au Plating_

_59、浸镍金：Immersion Ni/Au / Electroless Ni/Au_

_60、喷锡:Hot Air Solder Leveling_

_61、水平喷锡:HorizontalHot Air Solder Leveling_

_62、垂直喷锡: Vertical Hot Air Solder Leveling_

_63、超级焊锡:Super Solder_

_64、印焊锡突点:Solder Bump_

_65、数控铣/锣板：N/C Routing/Milling_

_66、模具冲/啤板：Punch_

_67、板面清洗烘烤：Cleaning & Backing_

_68、V型槽/V-CUT：V-Cut/V-Scoring_

_69、金手指斜边：Beveling of G/F_

_70、短断路测试Electrical Testing/Continuity & Insulation Testing_

_71、AOI 光学检查：AOI Inspection_

_72、VRS 目检：Verified & Repaired_

_73、泛用型治具测试：Universal Tester_

_74、专用治具测试：Dedicated Tester_

_75、飞针测试：Flying Probe_

_76、终检：Final Visual Inspection_

_77、压板翘：Warpage Remove_

_78、X-OUT 印刷：X-Out Marking_

_79、包装及出货：Packing& shipping_

_80、清洗及烘烤：Final Clean & Baking_

_81、铜面保护剂：ENTEK Cu-106A/OSP_

_82、离子残余量测试:Ionic Contamination Test/ Cleanliness Test_

_83、冷热冲击试验:Thermal cycling Testing_

_84、焊锡性试验:Solderability Testing_

_85、雷射钻孔:Laser Ablation_

_86、雷射钻Tooling孔:Laser ablationTooling Hole_

_87、雷射曝光对位孔:Laser Ablation Registration Hole_

_88、雷射Mask制作:Laser Mask_

_89、雷射钻孔:Laser Ablation_

_90、AOI检查及VRS:AOI Inspection & Verified & Repaired_

_91、除胶渣:Desmear_

_92、专用治具测试:Dedicated Tester_

_93、飞针测试:Flying Probe_

_94、压板翘: Warpage Remove_

_95、底片：Ablation_

_96、烧溶：laser)_

_97、切/磨：abrade_

_98、粗化：abrasion_

_99、耐磨性：absorption resistance_

_100、允收:ACC /accept_

_101、加速腐蚀:accelerated corrosion test_

_102、加速试验:accelerated test_

_103、速化反应:acceleration_

_104、加速剂:accelerator_

_105、允许：acceptable_

_106、活化液：activator_

_107、实际在制品：active work in process_

_108、附着力：adhesion_

_109、黏着法：adhesive method_

_110、气泡:air inclusion_

_111、风刀：air knife_

_112、不定形的改变：amorphous change_

_113、总量：amount_

_114、硝基戊烷：amylnitrite_

_115、分析仪：analyzer_

_116、环状垫圈;孔环annular ring_

_117、阳极泥：anodeslime (sludge)_

_118、阳极清洗：anodizing_

_119、自动光学检测：AOI/automatic optical inspection_

_120、引用之文件：applicable documents_

_121、允收水平抽样：AQL sampling_

_122、液态光阻：aqueous photoresist_

_123、纵横比(厚宽比)：aspect ratioAs received_

_124、背光：back lighting_

_125、垫板：back-up_

_126、预留在制品：banked work in process_

_127、基材：base material_

_128、基准绩效：baseline performance_

_129、批：batch_

_130、贝他射线照射法：beta backscattering_

_131、切斜边;斜边：beveling_

_132、二方向之变形:biaxial deformation_

_133、黑化：black-oxide_

_134、空板：blank panel_

_135、挖空:blanking_

_136、弹开:blip_

_137、气泡:blister blistering_

_138、吹孔:blow hole_

_139、板厚错误:board-thickness error_

_140、黏结层:bonding plies_

_141、板弯:bow ; bowing_

_142、破空:break out_

_143、搭桥;桥接：bridging_

_144、接单生产：BTO (Build To Order)_

_145、烧焦：burning_

_146、毛边(毛头)：burr_

_147、碳化物：carbide_

_148、定位梢：carlson pin_

_149、载运剂：carrier_

_150、催化：catalyzing_

_151、阴极溅射法：catholicsputtering_

_152、隔板;钢板：caul plate_

_153、校验系统之各种要求：calibration system requirements_

_154、中心光束法：center beam method_

_155、集中式投射线：central projection_

_156、认证：certification_

_157、倒角 (金手指)：chamfer chamfer_

_158、切斜边;倒角：chamfering_

_159、特性阻抗：characteristic impedance_

_160、电量传递过电压：charge transfer overpotential_

_161、网框：chase_

_162、棋盘：checkboard_

_163、蟹和剂：chelator_

_164、化学键：chemical bond_

_165、化学蒸着镀：chemical vapor deposition_

_166、圆周性之孔破：circumferential void_

_167、包夹金属：clad metal_

_168、无尘室：clean room_

_169、间隙：clearance_

_170、表面处理：Coating/Surface Finish_

  

  

来源：本文整合自吴川斌的微博与网络信息

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。