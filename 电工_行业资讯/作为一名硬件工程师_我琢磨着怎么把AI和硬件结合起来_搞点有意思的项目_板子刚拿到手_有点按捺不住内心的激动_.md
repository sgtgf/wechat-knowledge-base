# 作为一名硬件工程师，我琢磨着怎么把AI和硬件结合起来，搞点有意思的项目，板子刚拿到手，有点按捺不住内心的激动！

原创 王工 硬件笔记本 2025-03-11 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/HUCuvwfNUXk8gK4phcdwCw](https://mp.weixin.qq.com/s/HUCuvwfNUXk8gK4phcdwCw)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")

  

大家好，我是王工。

最近，AI的风刮得是真猛啊！各种AI工具层出不穷，仿佛一夜之间，人工智能就从科幻走进了现实。作为一名硬件工程师，我自然也按捺不住内心的激动，琢磨着怎么把AI和硬件结合起来，搞点有意思的项目。

  

这不，机会来了！刚好看到国内知名主板厂商**米尔电子**新推出了一款**RK3576开发板**，主打AI边缘计算，性能强劲，价格还亲民，跟他们工作人员聊了聊，问我有没有兴趣体验一下，这还用说？当然是安排！

  

011

**开发板介绍**

收到开发板的第一时间，我就迫不及待地拆开了包装。不得不说，米尔的包装还是很用心的，防震泡沫包裹得严严实实，开发板完好无损。

拿出开发板，第一印象就是精致小巧，巴掌大的板子上集成了各种元器件，布局紧凑，做工精细。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwCy8ibiaTEfibhAIzIWI10vpVLmgOkiaGGUDw171YDa9zLuf5UNLFN90QiaA/640?wx_fmt=jpeg)

  

  

开发板是与核心板配套使用的扩展底板，

咱们先来一张正面照，可以看到丰富的外设接

口。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwGtanT6Mhhf3FYt0xMH7wlG5dsfeFyzwPCuRsjKZDKypN6RmzaKoFWQ/640?wx_fmt=jpeg)

-     
    
    **DC JACK**
    
    （ 12VDC/3A 5.5-2.1DC插座）
    
-   **USB TYPE-C**
    
    （debug调试接口）
    
-     
    
    **WIFI/BT**
    
    （板载WIFI模块）
    
-     
    
    **Audio**
    
    （ 1路音频接口，3.5mm耳麦插座）
    
-     
    
    **DP**
    
    （1路DP接口，MiniDP插座）
    
-     
    
    **HDMI**
    
    （1路HDMI接口，HDMI Type-A插座）
    
-     
    
    **USB**
    
    （ 2路USB3.0，采用1x2 Type-A接口）
    
-     
    
    **Ehernet**（ 2路10/100/1000M 以太网RJ45接口）
    
-     
    
    **风扇接口**
    
    （一路风扇插座1x2x2.0mm）
    
-   **2.54mm间距的40PIN排针**（
    
    GPIO/I2C/
    
    UART/SPI/CAN-FD）
    

  

再来一张背面照片

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwpyOibbVQOdicCf3HROL0PBLCMrqWXSKtT75X4Yx77DgS0xeiaxqdS97lQ/640?wx_fmt=jpeg)

背面接口包括：

-   **SD接口**（1路 SD卡槽）
    
-   **SSD接口**（M.2 NVME SSD盘插座，尺寸2280，PCIE信号）
    
-   **MIPI-DSI接口**（4路MIPI-DSI，FPC插座，多媒体显示接口）
    

  

**下面进行细节展示：**

DC JACK 5.5-2.1DC，通用型号，可以兼容市面上大多数电源适配器。

旁边是通用的type-C接口，用于DEBUG调试。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwicicrEhdhK5YkUWib5bEHSthicgYeDoRxgzIH9JKJFKmwC4RKMaoVP94ag/640?wx_fmt=jpeg)

有5个按键，功能分别是MaskRom、RST、PWR、V+、V-，每个按键位置都有丝印标注。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwZED2z6yYQfgkQmLL4bHxH5MPJl0UZavSaDrNUyHHJ9Vx40O7J8L64Q/640?wx_fmt=jpeg)

有三颗贴片LED指示灯，分别表示PWR，RUN，USER，能很清楚的了解设备的工作状态。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwT8VVh08ILHUqOXNLmGgG03rP5TPDcNHwvJHMUmN8kbAQx6u8cenPlQ/640?wx_fmt=jpeg)

搭配板载模块WIFI模块AP6256，支持2.4GHz和5GHz频段，集成蓝牙5.0，使用标准的U.FL（IPEX）天线接口。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwkl2EicJyrkOUicKduuKCw3ic9zBeColhTFL632GmsL1JRaeibatNze5iaXA/640?wx_fmt=jpeg)

1路音频接口，3.5mm耳麦插座，用于连接耳机或麦克风，支持音频输入输出，适用于多种场景。

旁边是MiniDP接口，比标准DisplayPort更小，有效节约主板的占用空间。主要用于视频和音频传输，支持高分辨率和高刷新率，最高可达8K@60Hz或4K@120Hz。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwLoeudG7gvVwbT1ruQnHNOicrKjhoLTtup0oFVZ6lH7WW5pXZ4VJWR9Q/640?wx_fmt=jpeg)

标准的HDMI TYPE-A接口，具有高带宽、音视频一体化、广泛兼容性和高可靠性，成为音视频传输的主流接口。

  

从板内向外看，HDMI和DP接口的差分信号线上都有ESD静电管作为接口防护，DP接口还有共模电感，能有效抑制EMI。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwvU10n4Sicoq3ua3DsFhs54QPtP0Xc6NMex2EON6uDBkSud1lC6ib3e8w/640?wx_fmt=jpeg)

  

  

两个USB3.0接口，两个千兆以太网口。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwxtWbLqhQ3T9dkddhO0We6Fum8ibbThKzGdibEv1pF4zCUHcj09v0y2DQ/640?wx_fmt=jpeg)

网口背面细节展示。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHw2MWFXh1PZuyVKVeA6kAnw33HxN4V27yyvJdpPK1QdmSM50P4Sp3N9A/640?wx_fmt=jpeg)

主板两侧各有一个2.54mm间距的40PIN排针，其实当我看到主板第一眼最醒目的就是这个橙色的排针，再搭配黑色的主板，整体看起来有种高端大气上档次的感觉。这个针座有丰富的GPIO接口，可根据实际项目需求进行应用，满足各种使用场景。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwR0PrYJHicia63G89tEcYib7zEwHrkEa262135JeIF2Yia3pRBDetz0g5Ag/640?wx_fmt=jpeg)

板子背面的可插入SD卡，能够方便地进行存储卡的读写操作。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwTtLO0xiapLtY4Ye0tqR0DGv7gMe2Vh10jDIDGzicfIO79ECQdJrD1GJg/640?wx_fmt=jpeg)

SSD插槽，主要用于连接固态硬盘，通过高速传输特性提升设备的读写速度和存储容量‌。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwYA7oMvicibXqUdaBelb2XThrGLYrfvExsLbZ3PZpE8qJeUIwLTgleLSg/640?wx_fmt=jpeg)

MIPI-DSI接口，包含3组4 lane的MIPI CSI摄像头输入接口，以及一个MIPI DSI显示输出接口，需要FPC软件线进行连接，可以清晰看到接口处也加了ESD防静电管。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwsO5QzvgRgjmDb97Ks6ZLI0cM01iaA6PFyricNRKj2qW6UqllnntARlicw/640?wx_fmt=png)

米尔金色的丝印真的很好看，不像咱们通用的白色丝印，看起来就很喜欢。米尔MYIR，是Make Your Idea Real第一个大写字母的缩写，很有寓意。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwS5kb6rN8XLiaaZHQTIziasJia9nAHYb4CfPlBDPaxuAQ80frtLdeBOgsQ/640?wx_fmt=jpeg)

  

  

细心的同学会发现，板子的四个角都有塑料间隔柱，当我们进行产品开发时，可以直接把它放在桌面，不用再单独找一张纸进行绝缘隔离，这个高度刚刚好，细节拉满。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwg70OlE0lnENWcfAwia0dXbico95QKOFIEDFT5eiaCKggZY9ZoUNPAaQGw/640?wx_fmt=jpeg)

**咱们做硬件的有一个癖好，看到坏的东西就想修，看到板子就想拆。**

  

大家可以看到这个散热器热别大，我很好奇，散热器下面的主芯片模块又是什么样子，说干就干，继续拆解散热器。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwIooAvacU7KAiciaLkcQ6w2ibmR1WNZLaQGS8micYHDJwp4a4d2icxYOPOuw/640?wx_fmt=jpeg)

散热器下面可以看到这个**金属屏蔽罩里面就是米尔的SOC核心板**，核心板是以SMD贴片的形式焊接在底板，管脚LGA贴片封装，通过 LGA 焊盘引出信号和电源地共计381PIN。板卡采用12层高密度PCB设计，沉金工艺生产，独立的接地信号层。

  

外形尺寸：43mm\*45mm\*3.85mm（含屏蔽罩），是相当的小，元件多，空间小，也难怪是12层板。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwLDFghG3AvrXcVEFPzKcRdz9HVHWATgjnBDpiakZsp2TFI30uVK7cHMA/640?wx_fmt=jpeg)

不得不提一句，这种模组的要求是非常的高，内部集成了内部集成了PMIC、DDR、eMMC等芯片，以及各种阻容、电感器件，对于布局和走线要求很高，一般公司不一定做得出来，就算你做出来了，也不一定保证可靠性，所以一般的企业没有必要做核心板，直接买现成的可以节约很多时间和精力。

写到这里，我感触颇深。近年来，国产芯片发展迅猛，像RK3576这样的高性能芯片不断涌现，打破了国外厂商的垄断，像RK3576核心板、开发板这样的优秀产品出现，更加助力中国科技的腾飞！

这就是RK3576 SoC，通过金属壳边缘可以看到芯片周边很多的阻容元件，上面可以明显看到散热硅胶垫留下的印迹，芯片主要是通过散热硅胶垫将CPU的热量导出到外部散热器。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwhlAx6YKKQFqwpyVIU8wxUIyy14oaVMAAw5vs3FF3icw7be3hkxialC3Q/640?wx_fmt=jpeg)

  

RK3576 是咱们的**重头戏**，作为一款**主打AI边缘计算的开发板**，它搭载了瑞芯微近期推出的第二代高性能AIOT平台——RK3576，采用先进的**8nm制程工艺**，**四核Cortex-A72+四核Cortex-A53架构**，**主频高达2.4GHz**，**内置Mail-G52 MC3 GPU**。

  

更重要的是，它集成了**NPU神经网络处理单元**，AI算力高达**6TOPS**，可以轻松运行各种AI模型。

  

板子的信息都基本了解，开始上电，板厂已经烧录好了固件，接上我的家用办公显示屏，成功点亮。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwqUFickEMr0YY4z6b0oZJwo4pR0QILkkk7Aw9TBb5crUcfgO6GJxONUA/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwfSGFSRp9ax2xq1OY2tCR9JlqI2sC1PEGWmXE4hgZFIkXpzxmvBVd9w/640?wx_fmt=jpeg)

  

03

**资料完整****，认证通过，售后有保障**

作为个人玩家，**我比较关心的是他们的资料是否完善**，一个简单的产品介绍就有几十页，文档内容也很规范。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwdRcicWGxD75dbVt8ofeC64ceRSx3zmVETDDFpYdWHI6LvgSYibVCfCdw/640?wx_fmt=png)

当然，一旦你购买了他们家的产品，可以下载更完善的**HDK和SDK参考资料**，包含开发板的技术规格、设计指南、接口说明、驱动程序、示例代码和必要的软件工具，以便于开发者能够顺利进行产品的开发。

作为企业，**认证要求是必选项**，有了相关认证，可以为整个产品的开发周期节约很多时间和精力。

该模块通过了传导CE和辐射RE测试，而且是ClassB标准，这两项测试通过，必将为整个产品加分。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHw0F3LicKkoHDZvmYQEltRzbiaI0bZibWMrMLb0EaTfQttxONVQXHbxCsFw/640?wx_fmt=png)

  

再看辐射波形，余量在10dB以上，吊打其它大多数产品了。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwNiaD1U63AoV6iapNHha8ibXm8gicBxBkk9OOf0CdcsmS8C0T7icoerTgK3w/640?wx_fmt=png)

再好的产品，在使用过程中，也难免会遇到各种问题，**可靠的售后服务**也是相当重要，这一点咱们做产品的人深有体会。遇到问题不可怕，可怕的是当你遇到问题，供应商态度差，回复慢，不专业，解决不了问题，就很让人头疼。 

据王工了解，这款**MYD-LR3576 米尔开发板的公司**，专注于嵌入式处理器模组设计研发、生产、销售于一体，在咱们嵌入式行业已经深耕10多年，产品都做过信号量测，高低温可靠性测试，EMC测试和防静电测试以及其它测试，**大厂品质有保证**。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHw3GPTBGjrXIHLODTBRZxaDwGg5fynrcoRxkC0ByWiaJW0s6DDYmSSagA/640?wx_fmt=png)

更多详情，见米尔科技公司官网：

www.myir.cn

  

外观高端，功能强大，性能十足，这么优秀的产品一定很贵吧。**前面介绍的LGA核心板，价格仅498起，这个开发板价格699起，性价比算是蛮高的了**，大家可以通过以下链接进行购买：

https://detail.tmall.com/item.htm?id=846172160887

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhYobr2Lt131mIJEaauPOHwOcd17wMF8Xob6tJaVJ9lt9WSXYsPQAXHfEfgrRicSLK3CaZ1cXwjnqw/640?wx_fmt=png)

  

最后，给大家附上米尔RK3576核心板、开发板、边缘计算盒子的配置型号：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaP5ria1JaEmPvDne35eTp9T44ToCBDh9aouSm5OAeuT9pI6wXromcLehyIWf3gm3qibP7f88uWqplg/640?wx_fmt=png)

大家根据自己的实际项目需求选择购买。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/u3IjerbQOXgP5woa1oZ0VhUt8yESw4GwcwibV5ChsC9xIQ9aiaUOZUqqA8NW7wQg30SejEvfwMQyvPEdV3VJTJTQ/640?wx_fmt=png)

也可以关注米尔电子官方公众号，获取最新资讯：