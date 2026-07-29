# 财务USB数字小键盘拆解、刷机、改造RPN计算

原创 电路一点通 2024-05-18 20:12 广东

> 原文地址: [https://mp.weixin.qq.com/s/T1t2Ia4v4M6fbA5fsJLqFA](https://mp.weixin.qq.com/s/T1t2Ia4v4M6fbA5fsJLqFA)

**前言**  
逛某宝，看到一种带液晶屏的财务小键盘，成色很新，才卖8.8元，应该是倒闭公司的产品，还没上市就夭折了。  
由从卖家的拆解图可以得知是USB串口，有改造潜力，故入手2个。

进大家庭⭕圈探讨回复: 交流 

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\财务USB数字小键盘拆解_刷机_改造RPN计算_images\img_000_f8a5d6df7cd2.jpg)

  
  
**一、外观**  
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ldySInqJ27xoP45ibzu17edg2IsbVuhicTQoLBSAJgC9WfLAJt9vPUg7NZPldzu9HL57oLL803Qy7mA/640?wx_fmt=jpeg "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ldySInqJ27xoP45ibzu17edgHvSFowZoSGeYdN2v5ia6nDaCNw5XbicDXpicydbHUogtXIh5VUa7jrOIQ/640?wx_fmt=jpeg "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
背面标签有型号，搜索不到这家公司和产品型号。保修贴显示为2019年12月生产。  
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ldySInqJ27xoP45ibzu17edgTxOFiaUD5owruEG3ZGheM98SramS46Fo048hqzLicljX8cPPnourLsDA/640?wx_fmt=jpeg "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
不出所料，插入电脑显示为串口。LCD全点亮，电流小于10mA。  
手感和一般市面上一般的薄膜键盘一样，中规中矩，反正比同价位的计算器要好。  
按下和松开按键时，串口能收到数据，但试过常用波特率均不像正常，特殊波特率？这不是重点。  
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ldySInqJ27xoP45ibzu17edg91HyOgLyS1SQRoGg8IJ48C9ibeeWxPTEhphOQjNBDW37nSgViafT2z6g/640?wx_fmt=jpeg "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
  
**二、拆解**  
背面标签和下面2个橡胶垫底下有螺丝，拧掉后撬开三边卡扣（这是友好的卡扣，小心一点就可以无损）  
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ldySInqJ27xoP45ibzu17edgro543r4hbIJfjpoD8DQalRickQibGzKdtcmbZu4x0lYk6ItgznzMCJEA/640?wx_fmt=jpeg "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
按键是胶碗薄膜，用斑马条（不确定是不是这么称呼）连接主板，不是焊接的，是用铁条+橡胶条+螺丝压住。  
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ldySInqJ27xoP45ibzu17edgZATP8chiaiaianvtrViaYZTWZ5GtyNaH2KfXN3r8KJZTchDDD2vJMOdNBg/640?wx_fmt=jpeg "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ldySInqJ27xoP45ibzu17edgxm0AN1AS2zw7a6pZzicYjMPYXV2RbgAtsrEarbVBoia81kggdbAiaqC7Q/640?wx_fmt=jpeg "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
拆下键盘后可以取下主板。主板和液晶的连接用的导电橡胶。  
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ldySInqJ27xoP45ibzu17edg2GNkkjcRnAdmjKxH53dGSfib7A90nKFW33oMxljXaE5chQy8bf1d9Kg/640?wx_fmt=jpeg "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
  
**三、测绘分析**  
接下来逆向分析主板。下面2图是卖家提供的。  
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ldySInqJ27xoP45ibzu17edgdaVY4l0gHuASWo7Mia36TYRzYG3M3icym3VPicDZrbpl6pkia8hsNhwUyg/640?wx_fmt=jpeg "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ldySInqJ27xoP45ibzu17edgK4PCT75Njv1EE1zpQI5Nvr9D9TfECFVcwT6TDgEnf7T2UC0ebLOz0w/640?wx_fmt=jpeg "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
主控WT56F216为台湾伟诠增强型8051。官方产品介绍  
MCU内置LCD控制器，串口通过CH340E连接到电脑，扫描键盘用GPIO。预留了蜂鸣器以及标号为LD1的元件（应该是液晶背光灯），也是GPIO控制。背面没有元件。  
![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jwW4UHic87ldySInqJ27xoP45ibzu17edgYwzK2FfsvJ9ichz9bocez3UBLcrTUEWElpuQk1qmN5fACnnRpnZ1TJw/640?wx_fmt=jpeg "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
测绘得到引脚定义  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87ldySInqJ27xoP45ibzu17edgTB9DZBLicsqpt2E6HlEqHlIrdsx3lmdBVibet2XcfDy8h5UT29liaqXaw/640?wx_fmt=png "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
矩阵键盘定义（列线已有上拉电阻，所以行线要配置成开漏输出，列线是浮空输入）  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87ldySInqJ27xoP45ibzu17edg76MO697fJ6J66S7dOwlxrfeaj5IP56EPL5MelS9qG4uk37SX4qWVcA/640?wx_fmt=png "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
  
**四、ISP接口**  
WT56F216的ISP接口称为SWUT，本质上是115200bps的单线半双工串口，用名为WLINK的下载器实现ISP烧录。  
WLINK中串口输出是开漏+分压电阻，输入是施密特触发器。  
电脑发送数据时，输出1.5V表示0，3.3V表示1。（WT56F216认为低于1.8V为0，高于2.8V为1）  
电脑接收数据时，低于0.8V识别为0，高于1.5V识别为1。  
这样一来，电脑发送数据时，WT56F216可以识别，但因为电压不够低，不会回环到接收。  
WT56F216发送数据时变为推挽输出，电脑可以识别。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87ldySInqJ27xoP45ibzu17edgr67ZVIqpOFyIAZvOjK8qLeDNvypCjSChpZTZOicgzwYuUKbaXycyNUw/640?wx_fmt=png "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
  
因为买不到原装WLINK下载器，只好根据这个原理自己做一个。原理图在下面。  
原版是纯数字电路，我改用一片STC51（需要3V低压版或15系列宽电压版）。电位器用2.2K~10K即可。  
程序很简单，一个死循环，把P3.0转移到P1.3，把P1.1转移到P3.1。太简单以至于可以在STC ISP中直接写机器码。  
这里必须用STC51中转一下，是因为8051的输出是开漏+弱上拉，输入是施密特触发器，符合基本要求。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87ldySInqJ27xoP45ibzu17edgqYOhovWV1tWibHjasbu3Sm5AQhwjRpnbBiav5cjtVgyTCLsnHwDfZNwQ/640?wx_fmt=png "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
  
连好线，用SWUT-ISP软件（官网下载页面）尝试连接。  
调整电位器（调到下方约1/3处）直到ISP能建立通信。  
  
**五、编程**  
WT56F216的设计思路很特别，除8051标准外设，其余都挂在外部总线上，寄存器用MOVX指令访问。  
  
**六**  
我是个电工，经常要做些电学计算，但普通计算器太简陋，不能先乘除后加减，也没有倒数，很不方便。  
早就想自制一台符合心意的计算器，但试过之后才发现写软件的坑太多，调试就像打地鼠。  
想到世界三大计算器厂（德仪、惠普、卡西欧）都是凭数十年经验积累才取得今天地位，我也就释然了，不要重新发明轮子。  
调查了一番，发现惠普在70年代开发的一系列计算器技术资料相对完备。  
其中一款HP-45定位适中，很合我意，于是决定复刻。  
  
**七、逆波兰式**  
逆波兰式（Reverse Polish notation，RPN）也叫后缀表达式，算符写在数的后面。（我们日常习惯书写的叫中缀表达式，算符在数的中间。）  
比如，日常写的1+2\*SIN(3+4\*5)，用RPN写就是4 5 \* 3 + SIN 2 \* 1 +。  
举个例子：计算5欧和8欧电阻并联的阻值，即1/(1/5+1/8)的输入过程和栈的变化。  
![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87ldySInqJ27xoP45ibzu17edg4O4asO23oWUW1ILY8icKxJiatpXNGhqwxtEAjs4mnZTPJBRqZmksz90w/640?wx_fmt=png "财务USB数字小键盘拆解&amp;刷机&amp;改造RPN计算器")  
  
**八、HP-45计算器**  
这是一款RPN科学计算器，有基本初等函数、度分秒、直角/极坐标、统计等功能。  
CPU主频约784kHz，每秒执行约3500条机器码。如今的8051都能轻松秒杀它，小键盘里的单片机当然也跑得动。  
官方早就停更了，现在国外仍有一些爱好者在研究它。这个链接是比较详细的介绍：https://www.hpmuseum.org/hp45.htm  
  
**九、虚拟机**  
HP-45的CPU构架、总线结构、指令集、ROM机器码（固件）都详细列在它的专利文件中，很容易获取到。  
我据此用C语言写成HP CPU的虚拟机，在上面直接运行HP-45机器码。  
由于是用ANSI C写的，可以移植到任何有C编译器的CPU上，只要以3500步/秒的速度执行，就能完全复刻当年HP-45的行为。  
具体过程不多说，有兴趣的朋友可以私信交流。  
这是代码仓库 https://github.com/reiyawea/HP-45-emulator

，是比较“正规”的写法，适用ARM使用。  
  
**十、移植到小键盘**  
HP-45是LED显示构成是【负号+10位底数+负号+2位指数】，完整显示需要14位7段数码管。  
而这款小键盘只有8位，所以只截取前8位底数显示。如果是负数，则是负号+前7位底数。如果有指数，则是前5位底数+符号+2位指数。  
5欧和8欧电阻并联的视 频演示

（B 站外链

https://www.bilibili.com/video/BV1jS4y1J7X7/）。  
按C51语法改动并优化（比如把函数传参改为全局变量）后，在8051上大约占用7KB ROM和200B RAM，用12M主频基本上能实现全速仿真。  
  
**十一、最后**  
由于键位不够，无法分配函数功能，所以只有四则运算、倒数、指数、平方、开方。即使如此，也是秒杀同价位的计算器和大多数手机APP。  
期待能捡到键位更多的同类键盘，到时再完整地复刻HP-45。  

来源：yleee 作者reiyawea

![](D:\电脑文件\公众号知识库\电工_教育_学习\财务USB数字小键盘拆解_刷机_改造RPN计算_images\img_017_1f623a67e9d8.jpg)