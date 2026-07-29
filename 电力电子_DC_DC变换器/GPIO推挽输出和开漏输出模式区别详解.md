# GPIO推挽输出和开漏输出模式区别详解

原创 电路一点通 2025-02-28 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/S1eWqZDth2HzflvVeFLqwQ](https://mp.weixin.qq.com/s/S1eWqZDth2HzflvVeFLqwQ)

以STM32参考手册中的GPIO输出配置图为例：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_000_740812b23121.png)  
看到输出驱动器虚线框中的内容，输出驱动器中的P-MOS和N-MOS两个MOS管就是实现推挽输出和开漏输出的关键。推挽输出模式下，P-MOS和N-MOS都正常工作，开漏输出模式下，只有下面的N-MOS工作，上面的P-MOS不工作。  
注意：GPIO在输出模式下没有上拉下拉配置。

### 推挽输出（Push-Pull Output）

推挽输出的结构是由两个三极管或者MOS管受到互补信号的控制，两个管子始终保持一个处于截止，另一个处于导通的状态。电路工作时，两只对称的开关管每次只有一个导通，所以导通损耗小、效率高、既提高电路的负载能力，又提高开关速度。如图1所示：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_001_0ccc7e4c951c.png)  
图1 推挽输出结构

推挽输出的最大特点是可以真正能真正的输出高电平和低电平，在两种电平下都具有驱动能力。  
补充说明：所谓的驱动能力，就是指输出电流的能力。对于驱动大负载（即负载内阻越小，负载越大）时，例如IO输出为5V，驱动的负载内阻为10ohm，于是根据欧姆定律可以正常情况下负载上的电流为0.5A（推算出功率为2.5W）。显然一般的IO不可能有这么大的驱动能力，也就是没有办法输出这么大的电流。于是造成的结果就是输出电压会被拉下来，达不到标称的5V。当然如果只是数字信号的传递，下一级的输入阻抗理论上最好是高阻，也就是只需要传电压，基本没有电流，也就没有功率，于是就不需要很大的驱动能力。

对于推挽输出，输出高、低电平时电流的流向如图 2所示。所以相比于后面介绍的开漏输出，输出高电平时的驱动能力强很多。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_002_8fd25249861c.png)  
图2 灌电流与拉电流  
但推挽输出的一个缺点是，如果当两个或多个推挽输出结构的GPIO相连在一起，一个输出高电平，即上面的MOS导通，下面的MOS闭合时；同时另一个输出低电平，即上面的MOS闭合，下面的MOS导通时。电流会从第一个引脚的VCC通过上端MOS再经过第二个引脚的下端MOS直接流向GND。整个通路上电阻很小，相当于发生短路，进而可能造成端口的损害。这也是为什么推挽输出不能实现" 线与"的原因。

### 开漏输出（Open Drain Output）

常说的与推挽输出相对的就是开漏输出，对于开漏输出和推挽输出的区别最普遍的说法就是开漏输出无法真正输出高电平，即高电平时没有驱动能力，需要借助外部上拉电阻完成对外驱动。下面就从内部结构和原理上说明为什么开漏输出输出高电平时没有驱动能力，以及进一步比较与推挽输出的区别。

首先需要介绍一些开漏输出和开集输出。这两种输出的原理和特性基本是类似的，区别在于一个是使用MOS管，其中的"漏"指的就是MOS管的漏极；另一个使用三极管，其中的"集"指的就是MOS三极管的集电极。这两者其实都是和推挽输出相对应的输出模式，由于使用MOS管的情况较多，很多时候就用"开漏输出"这个词代替了开漏输出和开集输出。

介绍就先从开集输出开始，其原理电路结如图 3所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_003_3470417cd59a.png)  
图3 OC开集

图 3左边的电路是开集（OC）输出最基本的电路，当输入为高电平时，NPN三极管导通，Output被拉到GND，输出为低电平；当输入为低电平时，NPN三极管闭合，Output相当于开路（输出高阻）。高电平时输出高阻（高阻、三态以及floating说的都是一个意思），此时对外没有任何的驱动能力。这就是开漏和开集输出最大的特点，如何利用该特点完成各种功能稍后介绍。这个电路虽然完成了开集输出的功能，但是会出现input为高，输出为低；input为低，输出为高的情况。

图 3右边的电路中多使用了一个三极管完成了"反相"。当输入为高电平时，第一个三极管导通，此时第二个三极管的输入端会被拉到GND，于是第二个三极管闭合，输出高阻；当输入为低电平时，第一个三极管闭合，此时第二个三极管的输入端会被上拉电阻拉到高电平，于是第二个三极管导通，输出被拉到GND。这样，这个电路的输入与输出是同相的了。

接下来介绍开漏输出的电路，如图 4所示。原理与开集输出基本相同，只是将三极管换成了MOS而已。\*\*图4的开漏输出电路相当于图3中的右图。\*\*MOS管不会导致电平反相。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_004_4c8b975bb7c7.png)  
图4 OD开漏  
接着说说开漏、开集输出的特点以及应用，由于两者相似，后文中若无特殊说明，则用开漏表示开漏和开集输出电路。

开漏输出最主要的特性就是高电平没有驱动能力，需要借助外部上拉电阻才能真正输出高电平，其电路如图 5所示。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_005_36d4257e5403.png)  
图5 OD门上拉  
当MOS管闭合时，开漏输出电路输出高电平，且连接着负载时，电流流向是从外部电源，流经上拉电阻RPU，流进负载，最后进入GND。

开漏输出的这一特性一个明显的优势就是可以很方便的调节输出的电平，因为输出电平完全由上拉电阻连接的电源电平决定。所以在需要进行电平转换的地方，非常适合使用开漏输出。  
开漏输出的这一特性另一个好处在于可以实现"线与"功能，所谓的"线与"指的是多个信号线直接连接在一起，只有当所有信号全部为高电平时，合在一起的总线为高电平；只要有任意一个或者多个信号为低电平，则总线为低电平。而推挽输出就不行，如果高电平和低电平连在一起，会出现短路电流倒灌，损坏器件。

### 总结

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_006_05144ce52086.png)

开漏形式的电路有以下几个特点：

1、利用外部电路的驱动能力，减少IC内部的驱动。当IC内部MOSFET导通时，驱动电流是从外部的VCC流经R pull-up ，MOSFET到GND。IC内部仅需很下的栅极驱动电流。

2、一般来说，开漏是用来连接不同电平的器件，匹配电平用的，因为开漏引脚不连接外部的上拉电阻时，只能输出低电平，如果需要同时具备输出高电平的功能，则需要接上拉电阻，很好的一个优点是通过改变上拉电源的电压，便可以改变传输电平。比如加上上拉电阻就可以提供TTL/CMOS电平输出等。（上拉电阻的阻值决定了逻辑电平转换的沿的速度 。阻值越大，速度越低功耗越小，所以负载电阻的选择要兼顾功耗和速度。）  
比如STM32用3.3V供电，将GPIO设置为开漏输出模式，同时引脚外部接上拉电阻到5V，则高电平时可以拉到5V，不需要接特殊的电平转换电路或芯片，即用一个电阻实现了3.3V转5V，当然上升沿速度受电阻大小影响。（理论成立，没有进行验证）

3、OPEN-DRAIN提供了灵活的输出方式，但是也有其弱点，就是带来上升沿的延时。因为上升沿是通过外接上拉无源电阻对负载充电，所以当电阻选择小时延时就小，但功耗大；反之延时大功耗小。所以如果对延时有要求，则建议用下降沿输出。

4、可以将多个开漏输出的Pin，连接到一条线上。通过一只上拉电阻，在不增加任何器件的情况下，形成“与逻辑”关系。这也是I2C，SMBus等总线判断总线占用状态的原理。  
补充：什么是“线与”？：  
在一个结点(线)上， 连接一个上拉电阻到电源 VCC 或 VDD 和 n 个 NPN 或 NMOS 晶体管的集电极 C 或漏极 D， 这些晶体管的发射极 E 或源极 S 都接到地线上， 只要有一个晶体管饱和， 这个结点(线)就被拉到地线电平上。 因为这些晶体管的基极注入电流(NPN)或栅极加上高电平(NMOS)，晶体管就会饱和， 所以这些基极或栅极对这个结点(线)的关系是或非 NOR 逻辑。 如果这个结点后面加一个反相器， 就是或 OR 逻辑。

其实可以简单的理解为：在所有引脚连在一起时，外接一上拉电阻，如果有一个引脚输出为逻辑0，相当于接地，与之并联的回路“相当于被一根导线短路”，所以外电路逻辑电平便为0，只有都为高电平时，与的结果才为逻辑1。

关于准双向IO，实际上结构类似于开漏输出，只不过是把上拉电阻集成到了单片机内部。（跟开漏输出有点关系，顺带放这）  
如51单片机的P1 ~ P3端口  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_007_a4b08fc33b18.png)

用。

  

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_008_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_009_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_010_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_012_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_011_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_013_ead434f24ea4.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)****[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    
-   **[深圳上市公司高管Top10，有人身家超3400亿？看完我酸了](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540115&idx=1&sn=1bc9d69060852e9fa205599a26b9147e&scene=21#wechat_redirect)**
-   **[各种电工电子控制电路365例【文末领取】](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**  
    
-   **[【808页】西门子S7-200 300 400完整培训教程 、变频器培训教材](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254439&idx=2&sn=a5197e1020460d0711cc99af703257ad&scene=21#wechat_redirect)**
    
-   [**【397页】西门子PLC系统及其应用培训ppt**](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254438&idx=2&sn=287d0277c4525dd2c8f6b9c6c7b0da89&scene=21#wechat_redirect)  
    
-   [**图表细说元器件及实用电路362页**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539497&idx=2&sn=2b675f61f20c00929a3e00218819c13a&token=739485273&lang=zh_CN&scene=21#wechat_redirect)
    
-   [**清华大学DeepSeek第一、二弹干货：从入门到精通-赋能职场**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539461&idx=2&sn=fb6044426bf24370f4bdc4a1073eeb1d&scene=21#wechat_redirect)
    
-   **[ARM嵌入式系统培训精华(全套)PPT-【周立功】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539769&idx=3&sn=ca79cbbab4916e2ef142f475875b70b0&token=1991019132&lang=zh_CN&scene=21#wechat_redirect)**
    
-   [三菱PLC Q系列 QnACPU编程手册（PID控制指令篇）](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254661&idx=2&sn=4190c10cd690736929e4a076ccd3f3db&scene=21#wechat_redirect)
    
-   [电气工程基础知识及识图（第一讲）](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254710&idx=2&sn=e844f3f489cdf31366b70d77fe110f07&scene=21#wechat_redirect)
    
-   [学西门子变频器应用深入浅出-254页pdf](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254707&idx=2&sn=395f183db4de32c363c51379d09e25ef&scene=21#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254771&idx=2&sn=db18ac97d9dad3a4a93dd42d377465b8&scene=21#wechat_redirect)[2025 AI+热门方向](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254771&idx=2&sn=db18ac97d9dad3a4a93dd42d377465b8&scene=21#wechat_redirect)
    
-   [电气系统总线与常用元器件（课件）.ppt](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254804&idx=2&sn=fe95989da467faf5fedac07fc721f929&scene=21#wechat_redirect)
    
-   [PLC编程实用指南（第2版）848页.pdf](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456254979&idx=2&sn=3fa37d7e37d6f66be0ff06e69a47206e&scene=21#wechat_redirect)
    

* * *

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\GPIO推挽输出和开漏输出模式区别详解_images\img_014_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**