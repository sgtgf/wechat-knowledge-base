# PCB大牛风骚走位画法与技巧

原创 硬件笔记本 2024-04-28 07:47 四川

> 原文地址: [https://mp.weixin.qq.com/s/6vzHHE12I\_JrO9Dscdk4Kw](https://mp.weixin.qq.com/s/6vzHHE12I_JrO9Dscdk4Kw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

![](PCB大牛风骚走位画法与技巧_images/img_002_ab0f3913a511.jpg)

  

01

AD布蛇形线方法

  

  

Tool里选Interactive length tuning要先布好线再改成蛇形，这里用的是布线时直接走蛇形：**先P->T布线，再Shift+A切换成蛇形走线。**

![](PCB大牛风骚走位画法与技巧_images/img_003_81548b69f3ea.jpg)

按Tab可设置属性，类型了选用圆弧，Max Amplitude设置最大的振幅，Gap就是间隔（不知这么翻译对不），下面左边是振幅增量，右边是间隔增量。

![](PCB大牛风骚走位画法与技巧_images/img_004_b7d4b7268c40.jpg)

然后开始布线：

![](PCB大牛风骚走位画法与技巧_images/img_005_56653218659a.jpg)

![](PCB大牛风骚走位画法与技巧_images/img_006_644486c65df4.jpg)

让边缘变"圆"-按快捷键"2"，就会增大弧的半径，增到最大就是两个1/4的弧直连，就是一个180度的半圆了，快捷键 "," "." 可以调节振幅。

![](PCB大牛风骚走位画法与技巧_images/img_007_dc33de64fa87.jpg)

要是不记得快捷键，没关系，随时按"\`"可以显示当前支持的操作。

  

![](PCB大牛风骚走位画法与技巧_images/img_008_00895ab55b7b.jpg)

可以看到网络的长度，还不止一个地方哟。

![](PCB大牛风骚走位画法与技巧_images/img_009_acf5bbc2bdd6.jpg)

等长可使用调节器完成等长布线。

  

02

大电流走线中去除阻焊层

  

  

![](PCB大牛风骚走位画法与技巧_images/img_010_106ac9036207.jpg)

![](PCB大牛风骚走位画法与技巧_images/img_011_733c8c04585a.jpg)

这里要注意的两点，首先Paste层才是真正的喷锡层，但默认走线上是有阻焊层的，所以单单使用Paste是没用的，故需要使用Solder。

此层中划出的部分是没有阻焊的，故可使用Paste+Solder的方法达到喷锡线的绘制，若板上本来就有走线，可直接使用对应层的Solder 进行开窗。

![](PCB大牛风骚走位画法与技巧_images/img_012_fd1da69150cb.jpg)

  

03

总线画法

  

  

altium Designer支持多条网络同时布线，布线可以起始于焊盘也可以起始于线路开端。按住shift键选择多个网络，或者用鼠标框选多个网络，选择菜单命令PLACE>>Interactive Multi-Routing再单击布线工具栏上的总线布线工具，既可以开始总线布线，在布线过程中可以放置过孔，切换直线层，可以按逗号和句号，分支线间距进行调整。

![](PCB大牛风骚走位画法与技巧_images/img_013_683102f7565e.jpg)

期间按2可加过孔，L可设换层~

  

04

从原理图到PCB

  

  

![](PCB大牛风骚走位画法与技巧_images/img_014_debf3ba9c125.jpg)

在原理图中用鼠标框选一块电路或选中若干个器件，按 T—>S，就能马上切换到PCB中，同步选中那些器件。

![](PCB大牛风骚走位画法与技巧_images/img_015_a2687e76a7ee.jpg)

![](PCB大牛风骚走位画法与技巧_images/img_016_4f82703e722f.jpg)

05

走线中换层、操作过孔、操作走线

  

  

  

![](PCB大牛风骚走位画法与技巧_images/img_017_b3f649361638.jpg)

![](PCB大牛风骚走位画法与技巧_images/img_018_d47694f8a831.jpg)

06

走线推挤与连线方式快速设置

  

  

![](PCB大牛风骚走位画法与技巧_images/img_019_6b3b07456c09.jpg)

![](PCB大牛风骚走位画法与技巧_images/img_020_36fea654c6ff.jpg)

07

简易图元的PCB黏贴

  

  

图元文件的粘贴让机械层设计文档的生成更容易完成，通过使用习惯的与Windows相同的粘贴命令（Ctrl+V），任何来自剪贴板中的图元文件都可以粘贴到PCB编辑中。图元文件可以是直线、弧线、简单的填充和True Type文本，任何导入的数据将被放置在当前层。

![](PCB大牛风骚走位画法与技巧_images/img_021_2b3e74c0e309.jpg)

从Word或Excel中拷贝数据到PCB中支持的图元文件包括位图，线，圆弧，简单填充和true type文字，允许您简单的粘贴logos和其他图形。

  

08

复杂图元（logo）PCB制作

  

  

![](PCB大牛风骚走位画法与技巧_images/img_022_e2b78c8ca303.jpg)

![](PCB大牛风骚走位画法与技巧_images/img_023_2a26d7c30f93.jpg)

![](PCB大牛风骚走位画法与技巧_images/img_024_89240c726f77.jpg)

09

栅格设置与捕获

  

  

在Altium Designer中可视化网格和电气网格可以按捕获网格的倍数来设置（Design>>Board Options）。

![](PCB大牛风骚走位画法与技巧_images/img_025_d5b0178f1177.jpg)

010

丝印文字反色输出及位置设置

  

  

PCB编辑中增添了新的有效字符串属性框选项，新的选项可以为使用了True Type字体的反转文本定义不同矩形边界范围，而不是如原来使用反转文本本身的边界。

![](PCB大牛风骚走位画法与技巧_images/img_026_cec9f5d93b1a.png)

反转尺寸（宽度/高度）：设置反转文本矩形框的宽度和高度；

版面调整：定义文本框中文字的相对位置；

反转文字的偏移：定义反转文字相对矩形框的偏移量。

![](PCB大牛风骚走位画法与技巧_images/img_027_8c28515e8935.jpg)

  

011

各种~多边形填充

  

  

使用以选择对象定义多边形形状功能使得用外部资源（如DXF、AutoCAD等）来创建公司Logos或多边形非常容易。

多边形形状的定义分两步：首先从菜单Tools>>Polygon Pours>>Define From selected objects定义多边形区域，然后右键点击多边形填充区域并从弹出菜单上选择“属性”选项，就可以在对话框中设置填充模式了。

![](PCB大牛风骚走位画法与技巧_images/img_028_60bc59bb9bc4.jpg)

  

012

PCB中高亮选中网络

  

  

![](PCB大牛风骚走位画法与技巧_images/img_029_d4a6445caa8b.jpg)

**013**

**单层操作与定制操作**

  

  

对于纷乱的器件布局，已经很是麻烦如果要在混乱中走线，实属不易，在 AD 中可以使用shift+s解决这一问题（PCB编辑状态下）：

![](PCB大牛风骚走位画法与技巧_images/img_030_6a52d5888227.jpg)

另外，从网上学会了定制方法，开始比较麻烦，但学会了则很实用。

![](PCB大牛风骚走位画法与技巧_images/img_031_c4a63cb40a17.png)

这个方法是：

![](PCB大牛风骚走位画法与技巧_images/img_032_c7507fdbcb70.png)

![](PCB大牛风骚走位画法与技巧_images/img_033_a3852b0a7bce.png)

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

![](PCB大牛风骚走位画法与技巧_images/img_034_90361b7d2b29.jpg)

![](PCB大牛风骚走位画法与技巧_images/img_035_863c74b74381.png)

本来 Altium放置过孔默认用快捷键“P”+“V”，我现在用小键盘区的“.”来实现同样的功能：

![](PCB大牛风骚走位画法与技巧_images/img_036_c95058070d37.png)

  

014

多层线的操作

  

  

有些人问这样的线是怎么画出来的：

![](PCB大牛风骚走位画法与技巧_images/img_037_a4dcb8e1efc1.png)

答：一根根画出来的。

如何设置才可以使线重叠？Preferences、PCB Editor，Interactive Routing，Interactive Routing Options，Automatically Remove Loops选项取消即可：

![](PCB大牛风骚走位画法与技巧_images/img_038_ada56c036278.png)

不一根根画的话也可以，Place-Region，放一个多边形区域即可，不过要小心哦，不会自己添加网路的，会变绿。

  

015

走线切片的操作

  

  

![](PCB大牛风骚走位画法与技巧_images/img_039_121f3178c5ff.png)

![](PCB大牛风骚走位画法与技巧_images/img_040_0d2367075bb2.png)

  

016

对等差分线的设置与走线

  

  

很多新手会听到“差分线”，其实说起差分线并不难，只是布线方式而已，比起之前说过的等长线，要容易的多，不过设置起来有一定规则：

放置元件和绘制差分对信号。差分对命名规则是名称相同，后缀分别标以\_P和\_N。再选择Place\\directives\\differential pairs，放置差分对符号。

![](PCB大牛风骚走位画法与技巧_images/img_041_906a53b00f5a.png)

  

更新至PCB后：

![](PCB大牛风骚走位画法与技巧_images/img_042_9d91a6372b33.jpg)

这样就好啦~

![](PCB大牛风骚走位画法与技巧_images/img_043_d02d9f29356d.jpg)

  

017

3D显示操作

  

  

您的主窗口可以同时以2D和3D的方式显示。在2D和3D之间切换可以快捷键"3"来从一个2D视图切换到上个3D视图；按"0"拉平。Shift+right+click +drag可以旋转您的3D视图。

![](PCB大牛风骚走位画法与技巧_images/img_044_07293a5bb067.jpg)

哈哈~在此展示作者的新设计的板子~带JLINK仿真器的STM32F103C8小板~

![](PCB大牛风骚走位画法与技巧_images/img_045_8fde9a6f0b14.jpg)

  

018

快速放大缩小视图

  

  

有很多方法放大窗口，真正比较实用的就3种，以下做下介绍：

1、全界面视图

![](PCB大牛风骚走位画法与技巧_images/img_046_7c07b127b846.jpg)

2、ctrl+滚轮（鼠标中心为中心放大与缩小）

![](PCB大牛风骚走位画法与技巧_images/img_047_f28c21af1685.jpg)

3、长时间按住滚轮变为放大镜形态，前后拖动鼠标~即可快速放大缩小。

![](PCB大牛风骚走位画法与技巧_images/img_048_1b7120ad97e8.jpg)

差不多了，想到的零零碎碎的小技巧就写到这里，截图或者找图也蛮累的，有空也会更新一下把另外的妙招写进去的。

个人认为，除了编程之外，作为一名嵌入式工程师（或许也不这么叫吧，我们公司硬件工程师就要包括下位机所有的软件和硬件的，只有上位机才称为软件工程师的）应该熟练掌握画板这一项技能。希望大家多多交流，把好方法留下，这样才能多学多用啊！

硬件工程师及从业者都在关注我们

![](PCB大牛风骚走位画法与技巧_images/img_049_58147eba07eb.gif) ![](PCB大牛风骚走位画法与技巧_images/img_050_9b53a964efd5.gif) ![](PCB大牛风骚走位画法与技巧_images/img_051_75db8c1036fb.gif) ![](PCB大牛风骚走位画法与技巧_images/img_052_0b6ae33611dc.gif) ![](PCB大牛风骚走位画法与技巧_images/img_053_365c6cd9f8bb.gif) ![](PCB大牛风骚走位画法与技巧_images/img_054_2da1ccbac0ae.gif) ![](PCB大牛风骚走位画法与技巧_images/img_055_7446ffe5e3b8.gif) ![](PCB大牛风骚走位画法与技巧_images/img_056_d246b538f592.gif)

![](PCB大牛风骚走位画法与技巧_images/img_057_3352ab08e99b.gif) ![](PCB大牛风骚走位画法与技巧_images/img_058_0f89804cd7eb.gif) ![](PCB大牛风骚走位画法与技巧_images/img_059_f506b795c6ac.gif) ![](PCB大牛风骚走位画法与技巧_images/img_060_97df29bd0f50.gif) ![](PCB大牛风骚走位画法与技巧_images/img_061_d7c6fe8cd645.gif) ![](PCB大牛风骚走位画法与技巧_images/img_062_19e2f7b6262a.gif) ![](PCB大牛风骚走位画法与技巧_images/img_063_08d092bef8a0.gif) ![](PCB大牛风骚走位画法与技巧_images/img_064_50889e54acde.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。