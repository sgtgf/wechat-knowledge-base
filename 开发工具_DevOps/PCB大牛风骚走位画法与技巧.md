# PCB大牛风骚走位画法与技巧

原创 硬件笔记本 2024-04-28 07:47 四川

> 原文地址: [https://mp.weixin.qq.com/s/6vzHHE12I\_JrO9Dscdk4Kw](https://mp.weixin.qq.com/s/6vzHHE12I_JrO9Dscdk4Kw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4yQkJLjboRdkicGyT8uLeXzN1xTNrPEASPWh8cV1tC2diaAiaEwghFI96g/640?wx_fmt=jpeg&from=appmsg)

  

01

AD布蛇形线方法

  

  

Tool里选Interactive length tuning要先布好线再改成蛇形，这里用的是布线时直接走蛇形：**先P->T布线，再Shift+A切换成蛇形走线。**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X40Xicn4jJ8iaDERrk5iaibRnNzlQybKJtmBibNPl0HMbYlt2IMURWNUd1VPA/640?wx_fmt=jpeg&from=appmsg)

按Tab可设置属性，类型了选用圆弧，Max Amplitude设置最大的振幅，Gap就是间隔（不知这么翻译对不），下面左边是振幅增量，右边是间隔增量。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4n7sIfaocKiaT4UIAB8d7ic4wrWWjt85AIxNbyVE00fJ85uy003cAFI9g/640?wx_fmt=jpeg&from=appmsg)

然后开始布线：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4dTaDBxRAZjB7NicbbRJ5JTsJENlHibN3aRpUuZ4MR9E6nIrU8kfL1tnQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X49XRRibAXhkibjpd1lXtsfSOaKDLuicEcAfn5Zt5b8581ib4WPTH1VADgSg/640?wx_fmt=jpeg&from=appmsg)

让边缘变"圆"-按快捷键"2"，就会增大弧的半径，增到最大就是两个1/4的弧直连，就是一个180度的半圆了，快捷键 "," "." 可以调节振幅。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4c0VZfSiaicicunrlvwic2tOibReSOmKDGajxStNS0wibGfFAPxvsZ5Bd4uibA/640?wx_fmt=jpeg&from=appmsg)

要是不记得快捷键，没关系，随时按"\`"可以显示当前支持的操作。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X44CfzYEQt40ic79peaK7XroYRH152fmtQqo1Zxq3LRGOJUA2Giag8UcQQ/640?wx_fmt=jpeg&from=appmsg)

可以看到网络的长度，还不止一个地方哟。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4x1m6SZSnIHorbQawAA2Vo10lXSscI9iaNBwbjSGv7oyjSbWQmV5CXEg/640?wx_fmt=jpeg&from=appmsg)

等长可使用调节器完成等长布线。

  

02

大电流走线中去除阻焊层

  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4O0yfeDgzvYDj3jj80ictBzBy5q8TpkIzIE2NImz1j9PJiaH2eVnwsaNg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4qvg7b1X097woNZ3opopiaQ0DGpjUSTJSibXRmGYGMGSMNGT4Ycg8plnA/640?wx_fmt=jpeg&from=appmsg)

这里要注意的两点，首先Paste层才是真正的喷锡层，但默认走线上是有阻焊层的，所以单单使用Paste是没用的，故需要使用Solder。

此层中划出的部分是没有阻焊的，故可使用Paste+Solder的方法达到喷锡线的绘制，若板上本来就有走线，可直接使用对应层的Solder 进行开窗。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4vkhP4C2MmZEvfYMHiaWSne2XqGcl7B49s2DfuBnUV98KmAIGGtO3fOw/640?wx_fmt=jpeg&from=appmsg)

  

03

总线画法

  

  

altium Designer支持多条网络同时布线，布线可以起始于焊盘也可以起始于线路开端。按住shift键选择多个网络，或者用鼠标框选多个网络，选择菜单命令PLACE>>Interactive Multi-Routing再单击布线工具栏上的总线布线工具，既可以开始总线布线，在布线过程中可以放置过孔，切换直线层，可以按逗号和句号，分支线间距进行调整。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4dmXMBUvJicJv4zBmibyaVicxYxaZYInQDakhVQJBfPZOgv5ERC2XXKH5w/640?wx_fmt=jpeg&from=appmsg)

期间按2可加过孔，L可设换层~

  

04

从原理图到PCB

  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4PeLT68FQhs9LJdmgrNQ5vVVX7rp1xowRv02UqQaEspIbBwZJHgPfug/640?wx_fmt=jpeg&from=appmsg)

在原理图中用鼠标框选一块电路或选中若干个器件，按 T—>S，就能马上切换到PCB中，同步选中那些器件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4j7fYHJRJIg4ib2iauTc3pPOBOxleEs2YO5eP0KnGhdtEz3tMT5cFYalg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4DdL9IgBt7g79qUmTvpwjWPpcNLYjAoocRgoDDbVJicP3KCp2Oz9L3rQ/640?wx_fmt=jpeg&from=appmsg)

05

走线中换层、操作过孔、操作走线

  

  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4nWdoylPq7QvdhlC8iaq9KkBBoWIwX28fOGLicvRia3WDC3yJYZ3PB3wgQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4ElCcElq0kUYibIAIiaNeCy3iaXakJt1T9Ujw5SHpUn9ZVJbT22lXqQDJA/640?wx_fmt=jpeg&from=appmsg)

06

走线推挤与连线方式快速设置

  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4bKia7CTicVPzlV9wurYCxm9efoGXrczewQNG1c5q2EXpasvZhhaybicSA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4TibJoMLpa2VIbogXIYaSBwGECO1CFVIkuiawVInl4qZpqozAGbbLDWEg/640?wx_fmt=jpeg&from=appmsg)

07

简易图元的PCB黏贴

  

  

图元文件的粘贴让机械层设计文档的生成更容易完成，通过使用习惯的与Windows相同的粘贴命令（Ctrl+V），任何来自剪贴板中的图元文件都可以粘贴到PCB编辑中。图元文件可以是直线、弧线、简单的填充和True Type文本，任何导入的数据将被放置在当前层。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4cwouB5Cf5NN6OsPEYh9HKTibFP30GPsrtw0icZoDxogiaiaaaEtBfIej0g/640?wx_fmt=jpeg&from=appmsg)

从Word或Excel中拷贝数据到PCB中支持的图元文件包括位图，线，圆弧，简单填充和true type文字，允许您简单的粘贴logos和其他图形。

  

08

复杂图元（logo）PCB制作

  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4UiaQyfwNedkBianVXNCpdzbh6XN1NdbTmRuWQ00p4WQkicVkm9ywENTkA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X457jMdSF02tAgVag0OurhlUQzYq9Ih0BUOEjgE9rLCqsicJefr19mEjA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4BEVziayK4lmGajeXW4pwozocVoickibcRzhMib6mlwiap5hUrLPz0Pyxrow/640?wx_fmt=jpeg&from=appmsg)

09

栅格设置与捕获

  

  

在Altium Designer中可视化网格和电气网格可以按捕获网格的倍数来设置（Design>>Board Options）。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjg962OaHOeuzUKdr57fo4X4cXLdztvN1wCSkvZIKfyujJjy6GlwT2RKefibd01sEqauiciasV1v6QHGQ/640?wx_fmt=jpeg&from=appmsg)

010

丝印文字反色输出及位置设置

  

  

PCB编辑中增添了新的有效字符串属性框选项，新的选项可以为使用了True Type字体的反转文本定义不同矩形边界范围，而不是如原来使用反转文本本身的边界。

![](https://mmbiz.qpic.cn/mmbiz_png/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYy1UGYDqhlIYE4Il9GibZcMiaLLbYfKJfT58UicVJw4ddWsL8W3jD3WmSQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

反转尺寸（宽度/高度）：设置反转文本矩形框的宽度和高度；

版面调整：定义文本框中文字的相对位置；

反转文字的偏移：定义反转文字相对矩形框的偏移量。

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYuwvTna8d3n2EfEHe8G1iaQZYayhyHmaRybuDpO82u9hxicbXFXwdj8iaw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

011

各种~多边形填充

  

  

使用以选择对象定义多边形形状功能使得用外部资源（如DXF、AutoCAD等）来创建公司Logos或多边形非常容易。

多边形形状的定义分两步：首先从菜单Tools>>Polygon Pours>>Define From selected objects定义多边形区域，然后右键点击多边形填充区域并从弹出菜单上选择“属性”选项，就可以在对话框中设置填充模式了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYGZeVXcGFjibibgIBejtXHavANqu1lmn1WwyOF7GBOXfF4bu11RtMX5IQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

012

PCB中高亮选中网络

  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYD10vburhd5kBdrneQKNkCukJGyskDg4BdIl7Ko0dPRxK1I15YuXNLw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**013**

**单层操作与定制操作**

  

  

对于纷乱的器件布局，已经很是麻烦如果要在混乱中走线，实属不易，在 AD 中可以使用shift+s解决这一问题（PCB编辑状态下）：

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYoDbtvL1ngtQtEY7ax445QSuia75PvWzicyBkeTQ8k4kicHcr2pibxUWcdg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

另外，从网上学会了定制方法，开始比较麻烦，但学会了则很实用。

![](https://mmbiz.qpic.cn/mmbiz_png/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYzY3yicWQrzxicQXyphC8JWEQEQdiajOiardicwVicbibqh6EjqbibfJ1lY2IVw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

这个方法是：

![](https://mmbiz.qpic.cn/mmbiz_png/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYbk81ygnjM55WeHImowoDpSaAzTIfZknUdcF5Ls9FxLxjCg74qhUu3w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYUERVHzFGibZ0aWLXoBVMCkEvLIIeDQ7d1myKEgpoYrbqnziaibLM0RfPQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

只操作顶层走线的表达式为：

expr=IsTrack and OnTopLayer|mask=True|apply=True；

只操作底层走线的表达式为：

expr=IsTrack and OnBottomLayer|mask=True|apply=True；

只操作电气走线的表达式为：

expr=IsTrack and IsElectrical|mask=True|apply=True；

只操作过孔的表达式为：

expr=IsVia|mask=True|apply=True；

只操作顶层元件的表达式为：

expr=IsComponent and OnTopLayer|mask=True|apply=True。

订制若干种过孔尺寸，以小键盘区的数字键做快捷键，3表示0.3孔径的过孔、4表示0.4孔径的快捷键5……这样你想用任一种尺寸的过孔，都可以很方便地调出来。

我知道AltiumDesigner本身可以通过快捷键“shift+v”在走线过程中调用你填写好的各种尺寸过孔，但我单独放置过孔，要想改尺寸的话，要按Tab键后改写过孔尺寸的数据，非常麻烦。改用下面的方法：

![](https://mmbiz.qpic.cn/mmbiz_jpg/MLfSTncC3tOWsg9Icwhtkia43lgLWUEeZEvjteFhAR13MMEozzWpgbibffExyiaytwUV2IMaxI3icOgl4FQdC9Xiacw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYf9JPq8sLflzLdbCGBGo0JyBbNTdmAXX98GrmWwfLPX3e2RvpUTXzwQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

本来 Altium放置过孔默认用快捷键“P”+“V”，我现在用小键盘区的“.”来实现同样的功能：

![](https://mmbiz.qpic.cn/mmbiz_png/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYhtjho99GVPsxzlYgITrMVBAHGgZibBJYxxEv0gvPjVYNCpiaRvZhYwibg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

014

多层线的操作

  

  

有些人问这样的线是怎么画出来的：

![](https://mmbiz.qpic.cn/mmbiz_png/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCY5h3Q8M2WZwLeCfoMtOsEUFBdDhIZGp0M2rDYibibzRn9lDdbmL2c9Feg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

答：一根根画出来的。

如何设置才可以使线重叠？Preferences、PCB Editor，Interactive Routing，Interactive Routing Options，Automatically Remove Loops选项取消即可：

![](https://mmbiz.qpic.cn/mmbiz_png/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYokYtsibibl7tZ3klX1Xsica9ib8dR0NokBFxyVZDcjgnQDFibHViawUPYgmw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

不一根根画的话也可以，Place-Region，放一个多边形区域即可，不过要小心哦，不会自己添加网路的，会变绿。

  

015

走线切片的操作

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYeE80ZlT28NduQdCj7HcYJgRN3hE1VsK1nH8vibXh4dfxLh9icVpR6Gng/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYEiasm5WMkZSiaTZYrcauEt3njvTqLCLCmDW4ib4qCzFVSuFFCyjuKdYhA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

016

对等差分线的设置与走线

  

  

很多新手会听到“差分线”，其实说起差分线并不难，只是布线方式而已，比起之前说过的等长线，要容易的多，不过设置起来有一定规则：

放置元件和绘制差分对信号。差分对命名规则是名称相同，后缀分别标以\_P和\_N。再选择Place\\directives\\differential pairs，放置差分对符号。

![](https://mmbiz.qpic.cn/mmbiz_png/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYNarXRuia0J8SpW8rLwSibEW3I1RhEC6Tc3aR5zZianaLIb71JLvfia7Z8w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

更新至PCB后：

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYJbOEQveVr7WtL2CSTyWOqz8V35nDxu0OnIpQZiaOQgFRGJZvUwowNOw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

这样就好啦~

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYskYYoRpHuUPbDeFwtb6ibouxpH6YSEuecxRVaTy2zHkic87jjJ3CicChw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

017

3D显示操作

  

  

您的主窗口可以同时以2D和3D的方式显示。在2D和3D之间切换可以快捷键"3"来从一个2D视图切换到上个3D视图；按"0"拉平。Shift+right+click +drag可以旋转您的3D视图。

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYu5nGhr6d4tpUxUia98B5GGRcG5auZP5s1qXuA4mkBS57wHlp98rL65Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

哈哈~在此展示作者的新设计的板子~带JLINK仿真器的STM32F103C8小板~

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYvyFZJwt6zPbHHwlIKSic6cAzLMBKBWeZ1vFiblWSao2tFhdvjxzXdYgg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

018

快速放大缩小视图

  

  

有很多方法放大窗口，真正比较实用的就3种，以下做下介绍：

1、全界面视图

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYjd3qDiafmj87ntdrzHZ4kpDBzVRMSnhwAw7o4Oj1sib8TeEfAoBARl3Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

2、ctrl+滚轮（鼠标中心为中心放大与缩小）

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCY0F2GGc16ZsJjA4HYp8JD8P47GFNmm4n3Pib6JLxnCKz4tdFrOibX3WHg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

3、长时间按住滚轮变为放大镜形态，前后拖动鼠标~即可快速放大缩小。

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXFFUzhKJcCwVIIjYYQAZwCYSwxNG4ibDa79N8aB0rISo3uukZH4Y8qHhyXZtM2VVibnWsXnUIvm7kNg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

差不多了，想到的零零碎碎的小技巧就写到这里，截图或者找图也蛮累的，有空也会更新一下把另外的妙招写进去的。

个人认为，除了编程之外，作为一名嵌入式工程师（或许也不这么叫吧，我们公司硬件工程师就要包括下位机所有的软件和硬件的，只有上位机才称为软件工程师的）应该熟练掌握画板这一项技能。希望大家多多交流，把好方法留下，这样才能多学多用啊！

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