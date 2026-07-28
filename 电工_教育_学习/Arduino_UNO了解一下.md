# Arduino UNO了解一下

原创 硬件笔记本 2023-01-16 07:45 四川

> 原文地址: [https://mp.weixin.qq.com/s/YDA5gi-OROngCWTKQmZpgg](https://mp.weixin.qq.com/s/YDA5gi-OROngCWTKQmZpgg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**什么是Freeduino?**

  

  

  

  

它就是没有任何电路板的Arduino UNO板。

它使用一种称为自由形式的技术通过导线或铜丝而不是电路板来互连组件。它看起来简约又漂亮!

为什么我要做这个?我经常很难解释什么是自由形式的电子及其外观。而Freeduino正好是自由形式电子艺术的一个很好的例子，可以轻松地与著名的设备Arduino UNO相提并论，因此我做了它。

你可以查看上一篇LED挂饰，了解黄铜焊接的基础知识，所需的工具和材料。

  

  

  

**了解Arduino UNO**

  

  

  

![](https://mmbiz.qpic.cn/mmbiz/nyJUhrkzoHBGr3AaRTygG6MMfU78kPvqXKurL4nn2ob6v7ictbWDXIic0T69jSiaajicGmicW1IJEA5pogpg2K9ia9XA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

在实际开始焊接之前，我们需要了解Arduino UNO的各部分功能。大体可以将其分为4个块：

ATmega328 MCU

ATmega328P PDIP

16MHz振荡器

防抖电容器

电源电路

7-12V至5V电压调节器

5V至3.3V电压调节器

USB /输入插孔自动选择电路

反向电流保护

USB转UART电路

USB接头

带有振荡器和去抖电容器的串行转换器芯片(ATMEGA8U2-MU)

信号灯

电源指示灯

默认LED(D13)

TX / RX LED

  

  

**ATmega328 MCU**

  

  

  

首先，我们从MCU以及数字和模拟IO引脚接头开始。Arduino UNO具有巧妙的排针布局，与ATMEGA328 28-DIP封装的布局非常匹配。因此，无需交叉导线。

![](https://mmbiz.qpic.cn/mmbiz/nyJUhrkzoHBGr3AaRTygG6MMfU78kPvqZiaJm9Hlt6h0M7vXnJzB6p1iagxEaFvq2PhClmhSjsVMMBdDZ8QsErfw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz/nyJUhrkzoHBGr3AaRTygG6MMfU78kPvqqQVRWevpzicbnshEbZrFbpPnPLlicia09dPia5yRic9mk4dIDKfJrt7vDfQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

ATmega328起作用的唯一外部组件是需要两个22pF电容器的外部16MHz振荡器。ATmega328P的硬件最少。现在可以通过AVR  ISCP接口与USBasp编程器进行第一次测试。

![](https://mmbiz.qpic.cn/mmbiz/nyJUhrkzoHBGr3AaRTygG6MMfU78kPvqThicyYMWibKS2Vk7oL3r7CyCovOFBmyX3MOpAmgzjl0BrRuJqjj3oHjg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

  

**电源电路**

  

  

  

我给自己做了一个特殊的夹具，用于将针座固定在适当的位置，从而留出足够的焊接空间。

![](https://mmbiz.qpic.cn/mmbiz/nyJUhrkzoHBGr3AaRTygG6MMfU78kPvqeTSXBBz7FiawTiczAN3rGFCV3hiaW3icwtpUmp7Ok6JEaUEorX5ibcdx3TA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

ATmega328由5V供电。Arduino  UNO有两个电源输入源——插孔(7-12V)或USB连接器(5V)。同时它还为外部组件提供3.3V电源。这意味着需要2个稳压器。首先将7-12V转换为5V，然后将5V转换为3.3V。根据数据手册中的建议，我使用了两个AMS1117  5V和3.3V稳压器以及一些电容器。

![](https://mmbiz.qpic.cn/mmbiz/nyJUhrkzoHBGr3AaRTygG6MMfU78kPvq7ekZGfcSlYr4UOG3ReiaLbVjchsHnevSruFSV30mA4khnCTHhsmRczA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

为了简化操作，我将电源电路焊接到了板子的外部，然后将其放在数据线上。这实际上创建了两层自由形式的电路。我省略了自动选择和反向电流保护部分，因为这会使所有过程变得非常复杂。除非您对板子不满意，否则可以不需要它们。

  

  

  

**USB转UART电路**

  

  

  

![](https://mmbiz.qpic.cn/mmbiz/nyJUhrkzoHBGr3AaRTygG6MMfU78kPvq9ibtG49L8sSlRRUaFibCJAswzZPYf3xpfU1czwueXryM3SrAmJdTeCQg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

如果要在不依赖编译器的情况下通过Arduino IDE上传程序，这一点很重要。好吧，没有它就不会那么酷。原始的Arduino UNO  R3使用ATMEGA8U2-MU，虽然很棒，但太小了，不适合自由形式的电路。我决定选择CH340C芯片。它具有合适的SOP-16封装，仅需四个外部组件——去抖电容器，复位电容器和两个Tx  / Rx线路电阻器。无需外部电容器的事实大大简化了整个电路。

![](https://mmbiz.qpic.cn/mmbiz/nyJUhrkzoHBGr3AaRTygG6MMfU78kPvqS6v1Pu8iaCKCsucnFrC6df2ibfR41ZGmVOicRZmgxouL0ib8lBObPzpErA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

  

**led指示灯**

  

  

  

我不喜欢那些大型THT LED，所以我决定使用小型SMD 1206  LED来发出功率，L，Tx和Rx通信信号。我很后悔。我先将一个SMD电阻焊接到他们，然后尝试将其焊接到电线。这很棘手。我必须使用低温的烙铁，并尽快解决问题，否则SMD组件的另一侧会被拆焊。

![](https://mmbiz.qpic.cn/mmbiz/nyJUhrkzoHBGr3AaRTygG6MMfU78kPvqqaib80N9L2D82PERqQA0encUCDfL7MBUoNoxKS3eB2fOHpZ7ocvmDlw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

  

**Freeduino能点亮吗?**

  

  

  

首先，我连接了外部电源来检查电源调节器。所有电压电平都很好，因此我继续进行连接，并通过USBasp编程器将自举程序上传到芯片中。惊喜的是，该芯片在第一次尝试时就进行了通信。那是一个好兆头。外部晶振正常工作，所有引脚均正确连接。最后一步是连接USB电缆，然后尝试上传blink的程序。我们来看看：

![](https://mmbiz.qpic.cn/mmbiz/nyJUhrkzoHBGr3AaRTygG6MMfU78kPvqibSfiaaJLCz8U2VUXl4HlIibmiamu3DF0pgO0UgtxxqzHibFOePKyITFnbA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

现在，我将其装入透明树脂中，以使其不那么脆弱。

![](https://mmbiz.qpic.cn/mmbiz/nyJUhrkzoHBGr3AaRTygG6MMfU78kPvqDU3SiaFsLDI7xt1IK3nouzuOek59Y6iaqMDRIE0mIzzul7fAiaYOgnWNQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz/nyJUhrkzoHBGr3AaRTygG6MMfU78kPvqKKUR73dhqmib0d5jNsfQPqx8CswmgwFtibVBVibF9VsHHtFnBdWwlYbJA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz/nyJUhrkzoHBGr3AaRTygG6MMfU78kPvqwwiaQicwufdBqkP9YCVnt7N4piciacib09c6Yz7GNp1vDviarcGn9GyvUcicQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    
      
    

后台回复“加群”，管理员拉你加入同行技术交流群。