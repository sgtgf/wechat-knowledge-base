# STM32的完整启动流程

原创 硬件笔记本 2024-03-21 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/imI\_0FNDOilSHMRSjwpdRQ](https://mp.weixin.qq.com/s/imI_0FNDOilSHMRSjwpdRQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

关于STM32的启动流程，网上有的资料在讨论几种boot模式，有的在回答启动文件的内容，在查阅了很多资料后，本文给出一个比较全面的总结和回答。  

### 1\. 根据boot引脚决定三种启动模式

![](https://mmbiz.qpic.cn/mmbiz_png/q9QQ6Djib2QtrkFDv81qwiaJk8GzSZ7IRoialSWZVME3uUXF45zwIzicDSnKnXqLic5oSr5ByWhRbqibibu1mbMdhX3Yg/640?wx_fmt=png&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)

复位后，在 SYSCLK 的第四个上升沿锁存 BOOT 引脚的值。BOOT0 为专用引脚，而 BOOT1 则与 GPIO 引脚共用。一旦完成对 BOOT1 的采样，相应 GPIO 引脚即进入空闲状态，可用于其它用途。BOOT0与BOOT1引脚的不同值指向了三种启动方式：

1.  从主Flash启动。主Flash指的是STM32的内置Flash。选择该启动模式后，内置Flash的起始地址将被重映射到0x00000000地址，代码将在该处开始执行。一般我们使用JTAG或者SWD模式下载调试程序时，就是下载到这里面，重启后也直接从这启动。
    
2.  从系统存储器启动。系统储存器指的是STM32的内置ROM，选择该启动模式后，内置ROM的起始地址将被重映射到0x00000000地址，代码在此处开始运行。ROM中有一段出厂预置的代码，这段代码起到一个桥的作用，允许外部通过UART/CAN或USB等将代码写入STM32的内置Flash中。这段代码也被称为ISP(In System Programing)代码，这种烧录代码的方式也被称为ISP烧录。关于ISP、ICP和IAP之间的区别将在后续章节中介绍。
    
3.  从嵌入式SRAM中启动。显然，该方法是在STM32的内置SRAM中启动，选择该启动模式后，内置SRAM的起始地址将被重映射到0x00000000地址，代码在此处开始运行。这种模式由于烧录程序过程中不需要擦写Flash，因此速度较快，适合调试，但是掉电丢失。
    

**总结：上面的每一种启动方式我都描述了“xxx的起始地址被重映射到了0x00000000地址，从而代码从xxx开始启动”，如下图是STM32F4xx中文参考手册中的图，可以看到类似的表述。同时，在下图中也展示了STM32F4xx中统一编址下，各内存的地址分配，注意一点，即使相应的内存被映射到了0x00000000起始的地址，通过其原来地址依然是可以访问的。**

![](https://mmbiz.qpic.cn/mmbiz_png/q9QQ6Djib2QtrkFDv81qwiaJk8GzSZ7IRoFKIomicicoibbWBe1TSmXHPHPmuN9elwa0n6Yaic0NtQbefMbicBicBh4R5w/640?wx_fmt=png&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)

  

### 2\. 启动后bootloader做了什么？

根据BOOT引脚确定了启动方式后，处理器进行的第二大步就是开始从0x00000000地址处开始执行代码，而该处存放的代码正是bootloader。  
bootloader，也可以叫启动文件，无论性能高下，结构简繁，价格贵贱，每一种微控制器(处理器)都必须有启动文件，**启动文件的作用便是负责执行微控制器从“复位”到“开始执行main函数”中间这段时间(称为启动过程)所必须进行的工作**。最为常见的51，AVR或MSP430等微控制器当然也有对应启动文件，但开发环境往往自动完整地提供了这个启动文件，不需要开发人员再行干预启动过程，只需要从main函数开始进行应用程序的设计即可。同样，STM32微控制器，无论是keiluvision4还是IAR EWARM开发环境，ST公司都提供了现成的直接可用的启动文件。  
网上有很多资料分析了STM32的启动文件的内容，在此我只进行简单的表述。启动文件中首先会定义堆栈，定义中断/异常向量表，而其中只实现了复位的异常处理函数Reset\_Handler，该函数内容如下(STM32F4XX，IAR编译器)，可以看到其主要执行了SystemInit和\_\_iar\_program\_start两个函数，其主要功能除了初始化时钟，FPU等，**还会执行一个重要功能，那就是内存的搬移、初始化操作。** 这是我想重点介绍的内容，同时也会回答一个疑问，就是如果从Flash启动的话，代码究竟是运行在哪儿的？在我之前接触ARM9、CortexA系列的时候，一般都是把代码搬到内部的SRAM或者外部DDR中执行的，STM32是如何呢？答案下一小节揭晓。

  
![](https://mmbiz.qpic.cn/mmbiz_png/q9QQ6Djib2QtrkFDv81qwiaJk8GzSZ7IRoJKhicORnpDaKFy2RsypUj9JtsZbtkdn1vy415snIsjA4nicSJsqcGvQQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

### 3\. bootloader中对内存的搬移和初始化

本节针对程序在内置Flash中启动的情况进行分析。

![](https://mmbiz.qpic.cn/mmbiz_png/q9QQ6Djib2QtrkFDv81qwiaJk8GzSZ7IRowpPBQzia64IgUzaOcLDc2fjAc07r326Q6XTTWkdkSQEkeDaTuc8FqJw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  
我们知道烧录的镜像文件中包含只读代码段.text，已初始化数据段.data和未初始化的或者初始化为0的数据段.bss。代码段由于是只读的，所以是可以一直放在Flash中，CPU通过总线去读取代码执行就OK，但是.data段和.bss段由于会涉及读写为了，为了更高的读写效率是要一定搬到RAM中执行的，因此bootloader会执行很重要的一步，就是会在RAM中初始化.data和.bss段，搬移或清空相应内存区域。

  
因此我们知道，当启动方式选择的是从内置Flash启动的时候，代码依旧是在Flash中执行，而数据则会被拷贝到内部SRAM中，该过程是由bootloader完成的。bootloader在完成这些流程之后，就会将代码交给main函数开始执行用户代码。

-   现在让我们思考一个问题，PC机在运行程序的时候将程序从外存（硬盘）中，调入到RAM中运行，CPU从RAM中读取程序和数据；而单片机的程序则是固化在Flash中，CPU运行时直接从Flash中读取程序，从RAM中读取数据，那么PC机能从Flash之类的存储介质中直接读代码执行吗？
    
-   答案是不行。因为x86构架的CPU是基于冯.诺依曼体系的，即数据和程序存储在一起，而且PC机的RAM资源相当丰富，从几十M到几百M甚至是几个G，客观上能够承受大量的程序数据。但是单片机的构架大多是哈弗体系的，即程序和数据分开存储，而且单片的片内RAM资源是相当有限的，内部的RAM过大会带来成本的大幅度提高。
    

### 4\. ISP、IAP、ICP三种烧录方式

虽然这个小节稍稍偏题，但是由于上面在3中启动方式中介绍过了ISP烧录，因此一并在此介绍剩下的两种烧录方式。  
本小节摘自 https://blog.csdn.net/zhuimeng\_ruili/article/details/119709888。

1.  ICP(In Circuit Programing)。在电路编程，可通过CPU的Debug Access Port 烧录代码，比如ARM Cortex的Debug Interface主要是SWD(Serial Wire Debug)或JTAG(Joint Test Action Group)；
    
2.  ISP(In System Programing)。在系统编程，可借助MCU厂商预置的Bootloader 实现通过板载UART或USB接口烧录代码。
    
3.  IAP(In Applicating Programing)。在应用编程，由开发者实现Bootloader功能，比如STM32存储映射Code分区中的Flash本是存储用户应用程序的区间（上电从此处执行用户代码），开发者可以将自己实现的Bootloader存放到Flash区间，MCU上电启动先执行用户的Bootloader代码，该代码可为用户应用程序的下载、校验、增量/补丁更新、升级、恢复等提供支持，如果用户代码提供了网络访问功能，IAP 还能通过无线网络下载更新代码，实现OTA空中升级功能。
    
4.  IAP和ISP 的区别。  
    a、ISP程序一般是芯片厂家提供的。IAP一般是用户自己编写的  
    b、ISP一般支持的烧录方式有限，只有串口等。IAP就比较灵活，可以灵活的使用各种通信协议烧录  
    c、isp一般需要芯片进行一些硬件上的操作才行，IAP全部工作由程序完成，不需要去现场  
    d、isp一般只需要按格式将升级文件通过串口发送就可以。IAP的话控制相对麻烦，如果是OTA的话还需要编写后台的。  
    e、注意，这里介绍的bootloader功能显然跟之前介绍的启动文件bootloader有所区别，其目的是为了能接受外部镜像进行烧录，而不是为了运行普通用户程序。
    

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。