# USB Type-C接口设计参考

原创 硬件笔记本 2022-11-11 07:28 四川

> 原文地址: [https://mp.weixin.qq.com/s/Qhh-uWeyqV9ENlj2gzyD\_g](https://mp.weixin.qq.com/s/Qhh-uWeyqV9ENlj2gzyD_g)

**![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")**

  

USB Type-C是USB连接器系统的规范，在智能手机和移动设备上越来越受欢迎，并且能够进行电力传输和数据传输。

与USB的早些产品不同，它也是可翻转的 - 所以你不需要尝试多次插入。  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\USB_Type_C接口设计参考_images\img_002_e499ff444a46.png)

  

01

  

  

**什么是USB-Type-C**

USB-C是一种相对较新的标准，旨在提供高达10Gb/s的高速数据传输以及高达100W的功率。这些功能可以使USB-C成为现代设备的真正通用连接标准。

  

  

02

  

  

**功能介绍**

USB-C接口有三个主要功能：  
●它有一个可翻转的连接接口。接口的设计使插头可以相对于插座翻转。  
●它支持USB 2.0、USB 3.0和USB 3.1 Gen 2标准。此外，它还可以在称为备用模式（Alternate Mode）的操作模式下支持第三方协议，如DisplayPort和HDMI。  
●它允许设备协商并通过接口选择适当的功率流。

  

  

03

  

  

**信号图示**

USB Type-C连接器有24个引脚。图1和图2分别显示了USB Type-C插座和插头的插针。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\USB_Type_C接口设计参考_images\img_003_fda382d6fbb5.png)

  

  

04

  

  

**USB 2.0差分对**

D +和D-引脚是用于USB 2.0连接的差分对。插座中有两个D +引脚和两个D-引脚。

但是，这些引脚相互连接，实际上只有一个USB 2.0数据差分对可供使用。冗余设计只是为了提供可翻转的连接器。

  

  

05

  

  

**电源和接地引脚**

VBUS和GND引脚是电源和信号的返回路径。默认的VBUS电压为5 V，但标准允许器件协商并选择VBUS电压而不是默认值。电源传输允许VBUS具有高达20 V的电压。最大电流也可以升高到5A。因此，USB Type-C可以提供100 W的最大功率。

当为诸如笔记本电脑的大型设备充电时，大功率流可能是有用的。图3显示了RICHTEK的示例，其中降压 - 升压转换器用于生成笔记本电脑所请求的适当电压。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\USB_Type_C接口设计参考_images\img_004_c4cd030a5596.png)

请注意，电源传输技术使USB Type-C比旧标准更通用，因为它使功率水平适应负载的需要。您可以使用同一根电缆为智能手机和笔记本电脑充电。

  

  

06

  

  

**RX和TX引脚**

有两组RX差分对和两组TX差分对。

这两个RX对中的一个以及TX对可用于USB 3.0 / USB 3.1协议。由于连接器是可翻转的，因此需要多路复用器通过电缆正确地重新路由所采用的差分对上的数据。

请注意，USB Type-C端口可以支持USB 3.0 / 3.1标准，但USB Type-C的最小功能集不包括USB 3.0 / 3.1。在这种情况下，USB 3.0 / 3.1连接不使用RX / TX对，并且可以被其他USB Type-C功能使用，例如备用模式和USB供电协议。这些功能甚至可以利用所有可用的RX / TX差分对。

  

07

  

  

**CC1和CC2针脚**

这些引脚是通道配置引脚。它们执行许多功能，例如电缆连接和移除检测、插座/插头方向检测和当前广播。这些引脚也可用于Power Delivery和Alternate Mode所需的通信。

下面的图4显示了CC1和CC2引脚如何显示插座/插头方向。在此图中，DFP代表下游面向端口，该端口充当数据传输中的主机或电源。UFP表示上游面向端口，它是连接到主机或电力消费者的设备。

![](D:\电脑文件\公众号知识库\电工_教育_学习\USB_Type_C接口设计参考_images\img_005_66b3658deddb.png)

DFP通过Rp电阻上拉CC1和CC2引脚，但UFP通过Rd将它们拉低。如果没有连接电缆，则源在CC1和CC2引脚处看到逻辑高电平。连接USB Type-C电缆可创建从5V电源到地的电流路径。由于USB Type-C电缆内只有一根CC线，因此只形成一条电流路径。例如，在图4的上图中，DFP的CC1引脚连接到UFP的CC1引脚。因此，DFP CC1引脚的电压低于5 V，但DFP CC2引脚仍处于逻辑高电平。因此，监控DFP CC1和CC2引脚上的电压，我们可以确定电缆连接及其方向。

除电缆方向外，Rp-Rd路径还用作传递源电流能力信息的方式。为此，功耗（UFP）监视CC线上的电压。当CC线上的电压具有其最低值（约0.41 V）时，源可以分别为USB 2.0和USB 3.0提供500 mA和900 mA的默认USB电源。当CC线电压约为0.92 V时，源可提供1.5 A的电流。最高CC线电压约为1.68 V，对应于3A的源电流能力。

  

08

  

  

**VCONN引脚**

如上所述，USB Type-C旨在提供超快的数据传输速度以及高水平的功率流。这些特征可能需要使用通过在内部使用芯片进行电子标记的特殊电缆。此外，一些有源电缆利用重新驱动芯片来加强信号并补偿电缆等引起的损耗。在这些情况下，我们可以通过施加5 V、1 W电源为电缆内部的电路供电提供给VCONN引脚。如图5所示。

![](D:\电脑文件\公众号知识库\电工_教育_学习\USB_Type_C接口设计参考_images\img_006_91c8915a55c5.png)

如您所见，有源线缆使用Ra电阻来下拉CC2引脚。Ra的值与Rd不同，因此DFP仍然可以通过检查DFP CC1和CC2引脚上的电压来确定电缆方向。确定电缆方向后，与“有源电缆IC”对应的通道配置引脚将连接到5 V，1 W电源，为电缆内部的电路供电。例如，在图5中，有效的Rp-Rd路径对应于CC1引脚。因此，CC2引脚连接到VCONN表示的电源。

  

09

  

  

**SBU1和SBU2针脚**

这两个引脚对应于仅在备用模式下使用的低速信号路径。

  

100

  

  

**USB供电**

在我们熟悉了USB-C标准的固定，让我们简单介绍一下USB供电和备用模式。

如上所述，使用USB Type-C标准的设备可以通过接口协商并选择适当水平的功率流。这些功率协商是通过称为USB Power Delivery的协议实现的，该协议是上面讨论的CC线上的单线通信。下面的图6显示了一个示例USB供电，其中接收器向源发送请求并根据需要调整VBUS电压。首先，要求提供9V总线。在源稳定总线电压为9 V后，它会向接收器发送“电源就绪”消息。

然后，接收器请求一个5V总线，并且源提供它并再次发送“电源就绪”消息。

![](D:\电脑文件\公众号知识库\电工_教育_学习\USB_Type_C接口设计参考_images\img_007_c3f2a8dbb46d.png)

值得注意的是，“USB供电”不仅仅涉及与供电相关的谈判，其他谈判，例如与备用模式相关的协商，都是使用标准CC线上的供电协议完成的。

  

11

  

  

**PCB设计布线要求**

![](D:\电脑文件\公众号知识库\电工_教育_学习\USB_Type_C接口设计参考_images\img_008_949fe4bea4c7.png)

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。