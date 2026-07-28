# AD、PADS、Cadence各有什么优势？

原创 硬件笔记本 2023-04-21 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/lAZ5L8\_mJV-LBXiqv\_30IA](https://mp.weixin.qq.com/s/lAZ5L8_mJV-LBXiqv_30IA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

整理 | strongerHuang

素材来源 | 知乎、ChatGPT

  

  

读者中有很大一部分是电子工程师，先想问下大家：你们画PCB常用什么软件？

\*\*函第一的AD?  

还是最贵Cadence（Allegro）？

  

看到有读者在问：AD、PADS、Cadence各有什么优势？

  

这里就简单分享一下相关的内容。

  

**介绍**

AD、PADS、Cadence三大工具是什么？

  

硬件开发工具，主要是“画原理图”+“画PCB图”

  

-   AD：Altium Designer
    
-   PADS：Pads Logic+Pads PCB
    
-   Cadence：ORCAD+Allegro
    

（每一套工具都带有很多辅助工具，如仿真、库管理等等，这里只讲主要工具，辅助工具以后再讲）

AD的显著特征：黄色的元器件

PADS的显著特征：黑底蓝字黄线

Cadence的显著特征：白底红字蓝线

![](https://mmbiz.qpic.cn/sz_mmbiz_png/ju1DzqX8iaOmhSFUSEuqf808QpdwARicviacGiaibIfTMS6so4jnssjQiczeJ0ial3cDvqdcrDFn0MwCkaqCKjU8PUCew/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

## **三大工具常见应用企业**

**AD：**高校、研究所，野鸡公司（此说法来自网络）。

**PADS：**小型电子产品设计公司。

**Cadence：**复杂产品的公司、大型公司。

大公司，如联想、华为等，都是以Cadence为主，PADS为辅。别抱着AD不放了，会用Cadence，跳槽去大公司，前途钱途都无量。

**他们各自的优势**

-   AD：上手快，简单。
    

所以研究所、学校和小公司喜欢用。没什么条条框框，又是Protel演变过来的，用熟悉了就不改了。

-   PADS：规则简单，方便使用。
    

所以很多中小型公司喜欢用，画图快、看图爽、管理起来也不算混乱。

-   Cadence：规则复杂，方便管理，画图好看。
    

库管理非常方便，对接生产采购很容易，画出来的图特别规整。所以大公司都喜欢用Cadence。然后利用PADS弥补Cadence的一些缺点。例如看图不方便。

  

当然，我这里还顺便问了当下流行ChatGPT：  

AD (Altium Designer)

优势：

1\. 界面友好：Altium Designer的界面直观且易于操作。

2\. 高级功能：支持高速电路设计、信号完整性分析、FPGA设计等高级功能。

3\. 相关资源丰富：拥有大量的在线库、论坛和教程，方便用户学习和使用。

4\. 成本较低：相较于其他EDA软件，Altium Designer的价格更为实惠。

PADS (Mentor Graphics PADS)

优势：

1\. 稳定性高：PADS软件非常稳定，适合进行复杂项目的设计。

2\. 模块化设计：支持模块化设计，方便用户组合和重用设计元素。

3\. 专业性强：PADS在电源、射频、信号完整性等方面具有很强的专业性。

4\. 集成性好：与其他Mentor Graphics软件集成良好，如HyperLynx等。

Cadence (Cadence OrCAD/Allegro)

优势：

1\. 功能全面：Cadence软件对于各种类型的电路设计都具有很强的支持，如模拟、数字、射频等。

2\. 分析功能强大：提供多种电路分析功能，如热分析、信号完整性分析等。

3\. 行业认可度高：Cadence在半导体和电子行业具有很高的认可度，适合进行大型项目的设计。

4\. 良好的生态系统：拥有丰富的第三方插件和库，方便用户扩展功能。

总结：各种EDA软件都有其独特的优势，用户可以根据自己的需求和预算选择合适的设计工具。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ju1DzqX8iaOmhSFUSEuqf808QpdwARicviaoBrLibNG8DdJYPUMuDVp5ibdXynxQhJa6iaWE7libafYRgJiaxicHDqEicaSQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/ju1DzqX8iaOmhSFUSEuqf808QpdwARicviaW6ZD7R5vGiaibTiaYj4NTniaZtHM4c4szsCwyU60ahsotH7Iwho74WMHFQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

**初学者，应当先从哪个入手？**

如果只是在学校或者研究所工作，AD足以。

如果要在正规公司做事情，可以先学习简单一些的PADS，再学习Cadence。

## 作为硬件初学者，怎么开始入手学习？

按照看图、改图、建封装、画原理图、画PCB图、出资料这样的顺序，先把简单的学明白了。

至于电路仿真这样的相对复杂功能，应当等对硬件开发的内涵有深入了解后，再去接触。

-   看图：会打开，会缩放，会查找，会选择
    
-   改图：会改连线、改名字、调用库里的元器件
    
-   建封装：建原理图封装和PCB封装
    
-   画原理图和PCB图：这个就不用多说了。
    
-   出资料：原理图输出BOM、PCB图输出Gerber和SMT资料等。
    

学会这些，就能开始接触项目工作了。

  

最后，你会发现AD、PADS、Cadence这三款都是收费软件，你是选择免费的软件（比如KiCad）来学习呢？还是放弃呢？

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。