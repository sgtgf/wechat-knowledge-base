# 想要自己鼓捣点东西出来，奈何被DDR给难住了！

原创 王工 硬件笔记本 2025-02-19 07:50 四川

> 原文地址: [https://mp.weixin.qq.com/s/6TchYkhT-g2p9Y6whkehSw](https://mp.weixin.qq.com/s/6TchYkhT-g2p9Y6whkehSw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")

  

  

大家好，我是王工。

  

最近想要自己鼓捣点东西出来，设想的是先做好方案，画好原理图和PCB，然后在嘉立创打样回来焊接调试，在做方案的时候才意识到，可能会被DDR给难住。因为平时只需要设计方案和原理图，公司有layout工程师负责画板，我们不用自己操作，最多参加一下评审。这玩意儿看着简单，但真要自己去动手的时候，可能才知道没有想象中那么容易。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgG591tUAPwNsZzC6OmjwsdITT0oQNvBD9s44D52Zpd2GcEKulc1n76gbuNLT17ToVvsOTfJhzniaQ/640?wx_fmt=png&from=appmsg)

我想着，跟公司的layout同事交流一下经验，在这里顺便捋一捋DDR相关知识，跟大家一起分享一下DDR基础。为了提升文章的可读性，咱们还是分几个小点来写：

-   **DDR基础**
    
-   **DDR发展历程**
    
-   **DDR的PCB设计**
    

  

## 1、DDR基础

DDR主要起个什么作用呢？它是作为 CPU 和存储设备（如硬盘）之间的高速数据缓冲区。核心功能是临时存储正在运行的程序和数据，以便 CPU 能够快速访问和处理这些信息。

因为硬盘的读写速度较慢，无法直接与 CPU 高效通信。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhpYph1xo7IyGIjRnpPds11nGlAicVkB2HugtXPXK9T9FodszZDbCET2qUU8dePpeTXky1wt0U4lOw/640?wx_fmt=jpeg&from=appmsg)

DDR是存储器的一种，关于存储器的一些基础知识，大家看看如下链接：

-   [存储器基础](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247496178&idx=1&sn=57fecdae4793e95019a4f36c246ae7e0&scene=21#wechat_redirect)
    
-   [DDR之频率](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247503537&idx=1&sn=41e7a22ab5e6c244542df5d08235d050&scene=21#wechat_redirect)
    
-   [DDR之内存时序](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247496510&idx=1&sn=e6375b64d96a141ea32782821dbd93bc&scene=21#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247496510&idx=1&sn=e6375b64d96a141ea32782821dbd93bc&scene=21#wechat_redirect)[电源DDR硬件设计技巧](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247512403&idx=1&sn=7a30dd7aa925d6ed7c16a5b7ae7b527c&scene=21#wechat_redirect)  
    

当然这都是很基础的知识，也只是关于DDR的冰山一角。

  

  

DDR的版本迭代经历过SDRAM、DDR1、DDR2、DDR3、DDR4和DDR5，预计DDR6将在2026年上市。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgG591tUAPwNsZzC6OmjwsdrcmfKMZ5b5FoRiaibpZYqu5JOmPF7kYmCiauhFZwQ8aa12licsibibpeyrfA/640?wx_fmt=png&from=appmsg)

虽然今年已经是DDR5上市的第4年，但DDR4仍是目前市场的主流，打算以DDR4进行讲解。

## 2、DDR4的发展历程

以镁光型号为MT40A1G8WE-083:D为例

  

**2.1 DDR4的命名规则**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhzFmzVgmQFdRbYR3RicZjEzHrwOp8YhicjKIUwsmoOlL316JQicibfGxaNItlmZ5SSCorATtDlsTnVAQ/640?wx_fmt=png&from=appmsg)

1.  **MT**：代表制造商 **Micron Technology**。
    
2.  **40A**：表示产品系列或技术类型，指 **DDR4** 内存。
    
3.  **1G**：表示内存容量为 **1 Gigabit (Gb)**，即 **128 Megabytes (MB)**。
    
4.  **8**：表示内存位宽为 **8 bits**。
    
5.  **WE**：表示特定的封装类型。
    
6.  **083**：表示速度等级为 **833 MHz**（等效于 **DDR4-2666**）。
    
7.  **:D** ：可能代表特定的温度范围或工业级应用。
    

  

  

**2.2 DDR4的容量计算**  

我们以最后一组红色圈出为例来计算一遍：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg33HxhibhzA4zr5T7Zpe4UESQqJjzw7jnASVNAYTJ3q5rntqVl05eQeqxkH6eQ7BxdqEjcjmlOP7A/640?wx_fmt=png&from=appmsg)

DRAM颗粒的容量 = 位宽  × 地址数量

bank地址线位宽为16；

bank group选组线为1，BG0；

bank选择线为2，BA\[1:0\]；

行地址线为16，A\[15:0\]；

列地址线为10，A\[9:0\]；

容量=16 x 2^（1bank选组线+2bank选择线+16行地址线+10行地址线）  

容量=16 x 2^（1+2+16+10）

容量=16 x 2^29

容量=8,589,934,592b（单位换算b，Kb，Mb，Gb）

容量=8Gb（除以3次1024，注意b代表bit，而不是byte）

容量=1024MB（8Gb/8）

  

  

**2.3 DDR4的速率**

下图表中的数据展示了不同速度等级下，内存模块的时序参数。

例如，速度为2666 MT/s的内存模块在速度等级-075E下的时序参数为18-18-18，对应的访问时间、行地址到列地址延迟和行预充电时间均为13.50纳秒。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg33HxhibhzA4zr5T7Zpe4UEOU4I6BicgYfTWjRHiax0sfReWQpiavN0ot2qywSdZ9iaeEP2MLKKian5n1g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg33HxhibhzA4zr5T7Zpe4UED0ThLXtrzytKnAssGMNmgKSQypoAUGTspFSTw0Biclu1YoaSDeyrSDA/640?wx_fmt=png&from=appmsg)

  

**1.Speed Grade1**：内存模块的速度等级。

****2.**Data Rate (MT/s)**：内存模块的数据传输速率，单位为百万次传输每秒（MT/s）。

****3.**Target C****L-nRCD-nRP**：目标时序参数，包括CAS延迟（CL）、行地址到列地址延迟（RCD）和行预充电时间（RP）。

**4.t** **AA (ns****)**：访问时间，即从发出读取命令到数据可用的时间，单位为纳秒（ns）。

**5.t** **RCD (****ns)**：行地址到列地址的延迟时间，单位为纳秒（ns）。

‍**6.t** **RP ‍**(ns)****：行预充电时间，单位为纳秒（ns）。

**2.4 DDR4的封装**

DDR4封装(有78球和96球，7种尺寸大小)封装(Packages)：4/8bit芯片采用78球FBGA封装，16bit芯片采用96球FBGA封装。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg33HxhibhzA4zr5T7Zpe4UEum49Et2Fz9f45icptUmwY1zVVJvajPUhqtFacp7ic7xZWOCfwgfxy29g/640?wx_fmt=png&from=appmsg)

尺寸:13.2mm X9mm

尺寸:12mm X8mm

尺寸:11mmX7.5mm

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg33HxhibhzA4zr5T7Zpe4UEUpw4azdICOSIxZH5CNGFnFJZKNZpt4uiaJNqCaiaKLcPyFPR33FMBBXg/640?wx_fmt=png&from=appmsg)

尺寸:14mmX9mm

尺寸:14mmX8mm

尺寸:13.5mm X7.5mm

尺寸:13mmX 7.5mm

  

当然，DDR还有很多其它细节，包括选型，一些重要的电源线，数据线，地址线，控制线和时钟信号等，大家感兴趣可以自己下来了解，下面再说说DDR4的PCB设计。  

## 3、DDR4的PCB设计

**DDR4布局**

1、DDR在布局的时候一定要尽可能的靠近CPU，阻容元件放置在DDR背面，特别是滤波电容要尽量靠近管脚，走线要尽量短，电源线尽量粗，必须要配置比较大的储能电容。

  

2、地址线布局布线需使用Fly-by的拓扑结构，通过串行连接每个内存芯片，从而减少信号反射，提高信号完整性。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia2pJfdXSG8zvMsLMXvpectuO6LEs4LXicuYcbndj3heyzD3sGVPYz9hbc6NWo3olm5gicjRBMlmw9w/640?wx_fmt=png&from=appmsg)

  

**DDR4走线**

1、阻抗控制。PCB走线阻抗必须要严格控制，否则会出现数据通信异常，或导致电路性能下降，这个阻抗跟PCB线宽，线距，线层，板材还有其它相关因素有关。通常信号线中如果是差分线，阻抗应该是100Ω，如果是独立的线，单端为50Ω。这个需要专业的工具直接计算，以保证信号完整性‌。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg6icZYjibrWD82IiaU4vjPdlJMSoj1vciac6iax8DhicqsicWXQaLLwkg74hMWwcEV3VknF0Pj5gukGlgiaQ/640?wx_fmt=png&from=appmsg)

  

可选用嘉立创的阻抗计算神器，链接如下：

https://tools.jlc.com/jlcTools/index.html#/impedanceCalculatenew

  

## 使用说明如下：

https://www.jlc.com/portal/q7i37381.html

  

  

2、DDR4的信号可以分为4组数据线和2组地址线，数据线最好同组同层（即：同一组的信号必须要走线在同一层），地址线一般很难做到同组同层，这一点也没有硬性要求。先把数据线走通，对于同一组信号内的走线，layout要做等长处理，最好控制在10~20mil以内（数据走线），对于地址信号走线要求就没那么高，一般50mil以内就可以了。

  

3、这里有个细节要注意一下，实际走线长度=芯片内部长度L1（数据手册会有标注）+ 芯片引脚之间的走线长度L2。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhp1N2WPH6FELotnfqv4qqLsuic1k43sOHJOibdUZD6aHrpAicYAxDJSorPpk3YY1DBnLrgYlz0FD5BQ/640?wx_fmt=png&from=appmsg)

  

4、做等长的时候要注意一个3w原则，相邻的信号线，中心间距大于线宽的3倍，还需要对敏感的差分线做包地处理。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhp1N2WPH6FELotnfqv4qqL5DvHXvCMBSibYiboqxW2iaB3aEXQhNapQOevmZsiaQkkrZulUmJl6BJk6w/640?wx_fmt=png&from=appmsg)

  

以上描述看起来很简单，实际操作会更复杂，多熟悉几次应该就好了。

  

还有一些相关要求，可参考DDR4的走线设计要求在JEDEC标准中有详细的规范

https://blog.csdn.net/weixin\_43199439/article/details/142467998

  

好了，PCB设计的重点就讲这些了。

  

原理图和PCB都搞定了，那么下一步就要打样回来调试，板厂我首选嘉立创，主要是平时一直都是在他家打板，没出过啥问题，他们家的工艺文件规范，服务态度好，每次打板都会建一个小群，几个人服务一个人那种，真的有体会到上帝就是顾客的那种感觉，有问题可以及时沟通，效率很高。  

  

再来看一下他们针对BGA封装的一些工艺指导，通过以下图片对比，明显可以看出嘉立创的盘中孔工艺相比传统工艺的优势（图片都有文字说明）。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg6icZYjibrWD82IiaU4vjPdlJq2s7qAuZkibtvd2jzCeicibicPoSugCT3oauBOAp0tSJ3j22IzO3BoZJ6g/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg6icZYjibrWD82IiaU4vjPdlJNp9QgIBc4x3RAyQYUf5CibSkib6OzmqgwcsppC1T5nVvfcibvicHLURftA/640?wx_fmt=png&from=appmsg)

  

为了节约成本，我本想计划做四层板，但看到嘉立创对于六层板以上的PCB，可以免费升级盘中孔工艺，我迫切的想赶紧体验一下。

可能还有不知道盘中孔工艺的同学，我这里再解释一下，简单说就是直接把过孔打在焊盘上，中间再用树脂塞上，然后表层和底层用电镀铜的方式把孔盖住，这样孔就看不见了，贴片时也不用再担心传统工艺的漏锡问题了。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia2pJfdXSG8zvMsLMXvpectdJLlFb492u5Vod83N9SWmSqjiapmqnzWKf85b5icWubKudbia3UTCq98g/640?wx_fmt=png)

不用单独打过孔，也更方便我进行PCB走线，这又大大的降低了我的布线难度。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia2pJfdXSG8zvMsLMXvpectricYwDC8USvFTGXiaKYbLOLkrIYGZZGLqicuzrDmLoFv9Qek1SxrcKLwA/640?wx_fmt=png&from=appmsg)

而且板子实物的表面看起来也更整洁，美观。大家可以看一下嘉立创官网的晒单，这个板子采用盘中孔工艺，过孔很少，整个板子看起来很清爽。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhZRnvKBbZzdYGFudERPz4mmf392raf11ACUxzDxwjaAm1vbMI4yxfXxMib5M9MsKicE6Og4WAjtBzA/640?wx_fmt=png)

好了，今天的分享就到这里，咱们下次再见。  

  

  

**写在最后**

  

都说硬件工程师越老越吃香，这句话也告诉我们硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

推荐阅读（点击图片直接进入）

  

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgzfuoN0611riacBaXWMz1bf4VhibuwTs50lL1Ciblge3EhmVfonwqsN2GezDxt6zkrUfQ910APuKiaxA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247500681&idx=1&sn=117bdaa8c04eecdda16fb1d0c0e9fa37&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaj1a1Ebg5vIlfWGTLM1ztXHUzapW5aF3DvQtjsqASs1fQibnMCpibwjbR1O0aiaqYPSbHvzhiclDkSMQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

  

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)