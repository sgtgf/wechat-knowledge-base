# 零基础入门PCB设计 （结构与组成）

原创 电路一点通 2025-08-11 18:58 广西

> 原文地址: [https://mp.weixin.qq.com/s/LO2uIh48-5-TNW72NF12eg](https://mp.weixin.qq.com/s/LO2uIh48-5-TNW72NF12eg)

## 1、PCB板简介  

（1）PCB是英文Printed Circuit Board的缩写，中文名称为印制电路板，又称印刷电路板、印刷线路板，是电子元器件电气连接的提供者。

（2）PCB根据其基板材料的不同而不同，可分为高频微波板、金属基板，铝基板、铁基板、铜基板、双面板及多层板。

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_000_8eb3e78ebda8.png)

  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_001_9f08ed891344.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

## 2、PCB板的组成

（1）导线：导线（Track）具有和原理图对应的网络连接关系，导线带有网标（NetLable），对应电路图结点。在布线时，导线可以被自动推挤、环绕等（导线通过结点连接，没有结点的地方，布线时不允许导线有物理交叉连接）。

（2）铺铜：通过一整块铜皮对网络进行连接，在布线完成后，用铜皮填满PCB的剩余部分，通常用于地（GND）和电源（POWER），由于铜皮面积很大，散热效果会比较客观。

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_002_9d697fccee39.png)

（3）过孔：

①过孔的作用：

\[1\] 电气连接：过孔可以用于将不同层面的电路连接起来，使得电路板能够在不同的层次上进行有效的信号和电源传输。（PCB一般分为两层，每增加一层，成本就会剧增）

\[2\] 器件固定或定位：过孔可以用作固定电子部件的位置，如电阻、电容等，确保其在电路板上的正确布局。

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_003_4387f0811cf8.png)

②过孔的分类：

\[1\] 通孔：最常见和最简单的PCB过孔是通孔过孔，通孔是从PCB的上层钻到底层的机械钻孔。

\[2\] 盲孔：盲孔是激光钻孔的一种，是从PCB的上层或底层到内层钻孔和电镀的孔。

\[3\] 埋孔：埋孔可以是激光钻孔也可以是机械钻孔，指位于印刷线路板内层的连接孔，它不会延伸到线路板的表面。（开销很高）

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_004_e1ff6527cb4c.png)

（4）焊盘：元件通过PCB上的引线孔，用焊锡焊接固定在PCB上，印制导线把焊盘连接起来，实现元件在电路中的电气连接，引线孔及周围的铜箔则称为焊盘。

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_005_3fdbfcb2a6a3.png)

（5）丝印：丝印是指在电子线路板（Printed Circuit Board）上印刷的信息，如文字、标志、图形等，这些丝印具有重要的功能，它们可以帮助标识电子元件的位置、数值、型号等信息，以及元件的方向和正确的安装方式。

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_006_313dcdad703a.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_007_76c5bc8d5798.png)

（6）阻焊：在铜层上面覆盖油墨层，油墨层覆盖住铜层上面不需要焊接的线路，防止PCB上的线路和其它的金属、焊锡或者其它的导电物体接触导致短路，起到绝缘及保护铜层作用，选择性露出焊接需要的铜PAD、IC等。

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_008_e1ab6c776fec.png)

## 3、PCB叠层结构

（1）PCB材料的组成主要由PP半固态片和Core芯板两部分组成，这就构成了所看到的绿色、红色或者黑色等的板子，再加上敷铜线路层、器件，就构成了电路板。

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_009_1df2767be204.png)

（2）PCB版至少有两层电路板，实际中可根据需要增加层数，但为了节约成本，一般非必要情况使用两层PCB即可。

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_010_b87a829996c8.png)

（3）一般PCB制图软件对PCB层有如下几种分类（包括但不限于，不同软件定义可能不同）：

①信号层（Signal layer）：包括顶层、底层、中间层，各层之间可以通过通孔、盲孔和埋孔实现互相连接。（一层信号层可视作一层电路板）

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_011_3c9887f9a3fe.png)

②丝印层：采用丝网印刷工艺涂印，作为装配图、注释标记、Logo，也可作为切割、装配标记。（并非电路板层，仅体现在顶面和底面，顶层丝印黄色表示，底层丝印绿色表示）

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_012_10128c5923e7.png)

③阻焊层：阻焊层标注的区域在实物中体现为裸露的金属，其内部填充的区域不会被绿油覆盖，元件引脚的阻焊层会比焊盘稍大些，工程师可在此区域焊接。大电流导线可以用阻焊层裸露出来搪焊锡加厚。（并非电路板层，仅体现在顶面和底面）

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_013_223ca2e426f8.png)

④锡膏层：锡膏层覆盖区域可涂布锡膏，开钢网时便是根据锡膏层进行开孔的，回流焊时锡膏层覆盖区域便会被涂上锡膏。（并非电路板层，仅体现在顶面和底面）

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_014_1213a3674f98.png)

⑤多层：在多层上画的实体分布在PCB板的每一层，常用于直插焊盘、过孔等，需要穿透每个层用于焊盘时，可定义电镀孔（PTH）和非电镀孔（NPTH）。

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_015_caaacfded5db.png)

⑥机械层（mechanical）：机械层是定义整个PCB板的外观的，它一般用于设置电路板的外形尺寸、数据标记、对齐标记、装配说明以及其它的机械信息。（并非电路板层）

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_016_722752d7a596.png)

⑦板框层：标注板框尺寸的图层。（并非电路板层）

![](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_017_f4ae11e1ed13.png)

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[这种电路设计虽然少见，但真的很实用](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247550534&idx=1&sn=6031cc6892cdeba09d5909c0d4ccb296&scene=21#wechat_redirect)**
    
-   **[2个offer：大公司PCB工程师和小公司硬件工程师选择哪个？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549608&idx=1&sn=ff99090971a94e215de445691d456834&scene=21#wechat_redirect)**
    
-   **[PCB设计-485接口+避坑大全](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544590&idx=1&sn=4941b7ee5c86f701ac5e06d1fb6367bf&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\零基础入门PCB设计_（结构与组成）_images\img_018_a0b60db42148.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️