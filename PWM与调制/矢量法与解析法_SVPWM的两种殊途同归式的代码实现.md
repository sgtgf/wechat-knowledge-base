# 矢量法与解析法，SVPWM的两种殊途同归式的代码实现

原创 傅存敬 电磁散人 2026-01-29 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/cqmAdLGTn07bMslvXV1JYQ](https://mp.weixin.qq.com/s/cqmAdLGTn07bMslvXV1JYQ)

最近本来是在研究参数辨识的，猛然发现一个有意思的事儿——SVPWM的代码实现。好多同仁一听到这个名字就头大，什么扇区啊、矢量啊，T1、T2、T0。。。头都大了。还有同仁说，前期分享的技术文章中引用的代码A（也就是本文文末共享的代码），使用的SVPWM代码实现，好像叫什么“零序注入”法，用了什么uMAX、uMIN，感觉跟TI或Infineon官网上给出的扇区法SVPWM不是一回事儿啊？

今天散人尝试着用一篇文章的内容把这事儿捋清楚。其实，无论是零序注入法（也有文献称为CBPWM，亦即Carrier-based PWM），还是扇区法，这俩玩意儿，**就是一个东西的两种“说法”**，跟咱们中学学的几何似的，一个叫欧几里得几何，拿尺子圆规画；一个叫解析几何，用x，y坐标算。最后不都研究的是那个圆、那条直线吗？也就是说，○这是个圆，x² + y² = r²，这也是个圆。

**一、先说大部分同仁熟悉的“扇区法”，我管它叫“三蹦子拉货法”**

想象一下，咱有个三轮车，就叫它“三蹦子”吧。这三蹦子有三个轮子，但每次只能俩轮子同时蹬，或者仨轮子都不蹬（歇着）。现在，我们有：

-   **六个有用（非零）矢量** ：V1，V2，V3，V4，V5，V6，就是你猛蹬某一个或两个轮子，车“嗖”地一下往六个固定方向（0°, 60°, 120°…）蹿出去。
    
-   **两个零矢量** ：就是仨轮子都不蹬，车在原地不动，你歇着。
    

现在有个任务：**要把一箱货从院子正中间，拉到东北角某个点**（这就是咱们需要控制的的“参考电压矢量V” ）。但你这三蹦子只会往那六个固定方向跑，咋办？

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREMib3M4HiaXHHnGuvw6Zxs7mLZAgKoZDtibk7ibO4pSK2uwUJEfyvGWDic1NPkN8OfAPeqqPhae7abypw/640?wx_fmt=png&from=appmsg)

**“扇区”** 这就出来了！你一看，哦，东北角在 **扇区 I**，也就是在“正东”（V1）和“东北60度”（V2）这两个方向之间。

那不简单了嘛！**先往正东蹬一会儿，再往东北60度蹬一会儿，**不就到了吗？

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREMib3M4HiaXHHnGuvw6Zxs7mJic6OTDGlibYGKrexTXAKf4ZsiaCYWtgtdenicYS0icKpglvYgUPgHF79Ew/640?wx_fmt=png&from=appmsg)

-   **T1 和 T2**：就是你分别朝 V1 和 V2 方向蹬了多长时间。
    
-   **T0 + T7**：你蹬这两下，可能用不了整整一秒（一个周期），剩下那点儿时间干嘛？歇着呗！这就是零矢量时间。
    

所以扇区法，就是告诉你：**要去某个目的地，你得先判断它在哪个“旮旯”（扇区），然后用这个旮旯两边的两个“固定方向”拼凑，剩下的时间原地休息。** 这不就跟咱们走路似的吗？要去东北，先往东走几步，再往北走几步。直观！

**二、再说“零序注入法”，我管它叫“仨兄弟爬楼梯法”**

现在换个场景。有仨兄弟，叫 **a, b, c**，他们要爬一个楼梯。这个楼梯有个规定：**顶不能高于天花板，脚不能低于地板**（这就是载波的 \[-1, 1\] 范围）。

![](https://mmbiz.qpic.cn/mmbiz_jpg/Z8Iha3NiaCREMib3M4HiaXHHnGuvw6Zxs7mzFic3htWTqbIZibGs5rBXREicHf2F5SoeQwBEDA3EDO0327eE3H6SQNNg/640?wx_fmt=jpeg&from=appmsg)

ua', ub', uc': 这是仨兄弟本来想爬的高度。他们仨特团结，任何时候爬楼的高度加起来都是0（三相对称）。比如 a 想爬到 0.8米，b 可能就想在 0.1米，c 就得在 -0.9米。

问题来了：c 想去地下室（-0.9米），可楼梯没修到地下室啊（最低是地板0米）！a 想爬到 0.8米，可天花板只有1米高，也快顶头了。咋办？

**“零序注入”**就是想出个聪明的办法：**仨兄弟一起踩个板凳！**

-   u0：就是这个板凳的高度。
    
-   **最终高度 ua，ub，uc**：就是他们仨各自想去的高度，再加上这个板凳的高度。
    

板凳多高合适呢？

-   **最矮那个兄弟**（umin），比如 c，他想去 -0.9米，咱至少得给他个 0.9米高的板凳，他才能踩着板凳，脚恰好在地板上。
    
-   **最高那个兄弟**（umax），比如 a，他想去 0.8米，你给的板凳可不能太高，不然他一站上去，头撞天花板了（超过1米）。
    

所以这个板凳的高度 u0 是有讲究的，它得不大不小，**正好让仨兄弟都挤进“地板到天花板”这个空间里。**

对称 SVPWM 对应的“CENTER”零序注入，就是一种最公平的垫板凳方法：

u0 = ½ - ½( umax + umin)

它的意思是：**找到最高和最矮的兄弟，让他们俩离天花板和地板的距离一样远！** 是不是特公平？这样整个队伍就“居中”了。

**三、两件事咋就成一回事儿了？**

各位同仁再品品：

-   "三蹦子”在哪个扇区，是不是就决定了 a,b,c 三兄弟里谁最高、谁最矮、谁在中间？
    
    比如扇区I，a 总是最高的那个，c 总是最矮的那个。“扇区”和“谁高谁矮”就是一回事！
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREMib3M4HiaXHHnGuvw6Zxs7mIljen3KegBfrbw2WNibttefZf1Hp6b1ia5tLfxToIU0T8Ek9IAn3Z3Mg/640?wx_fmt=png&from=appmsg)

-   “三蹦子”往 V1 方向蹬了多久（T1）、往 V2 方向蹬了多久（T2），这不就决定了最终目的地离“正东”和“东北60度”有多近吗？
    

这在“仨兄弟”这边，就体现为：**仨兄弟最终的高度差是多少。**比如最高和中间那个差多少、中间和最矮的差多少。这个“高度差”，就对应了 T1, T2 的大小。

所以啊，你看：

-   **扇区法**是从“方向”入手，算“时间”。
    
-   **零序注入法**是从“高度”入手，算“板凳”。
    

一个是从几何上拼凑，一个是从代数上平移。但最后达成的效果——让逆变器输出那个等效的电压矢量——是**一模一样的！**

文末论文中的 Table II 和 Table IV，就是在告诉各位：**如果你知道了“三蹦子”的时间（Ti），我能帮你算出“仨兄弟”该踩多高的板凳（ei(t)）；反过来也行！**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREMib3M4HiaXHHnGuvw6Zxs7m3LK4licICvl45REJPibKNib6uZw34rVnTXWFPl6d2hkuujnVz5MQQhs7g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCREMib3M4HiaXHHnGuvw6Zxs7mNG9iby7Zl2Co5ZopiclKmxZS2ZckYUH5Y3Bqx6LA7DC0mjoCTBk98apw/640?wx_fmt=png&from=appmsg)

所以，以后别怕了。一个 SVPWM，俩“马甲”。一个叫“几何形式”，一个叫“代数形式”。你喜欢哪个就用哪个，都是英雄，殊途同归！

  

参考代码：https://github.com/rombrew/phobia/tree/master/src/phobia

参考文献：

\[1\] Zhou K , Wang D .Relationship Between Space-Vector Modulation and Three-Phase Carrier-Based PWM: A Comprehensive Analysis.\[J\].IEEE Transactions on Industrial Electronics, 2002.

文献链接：

https://pan.baidu.com/s/1R6veKtYAG86LhfOXaLKJxw?pwd=rdf7 提取码: rdf7