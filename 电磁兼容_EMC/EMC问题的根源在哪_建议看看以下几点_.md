# EMC问题的根源在哪？建议看看以下几点。

原创 硬件笔记本 2021-10-31 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/UNUJRTvjNWwhJqQrL5sEJQ](https://mp.weixin.qq.com/s/UNUJRTvjNWwhJqQrL5sEJQ)

 ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")▲点击上方公众号名片关注了解更多▲![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")

  

  

随着信号上升沿时间的减小，信号频率的提高，电子产品的EMI问题，也来越受到电子工程师的重视。高速pcb设计的成功，对EMI的贡献越来越受到重视，几乎60％的EMI问题可以通过高速PCB来控制解决。

  

  

**1、高速信号走线屏蔽规则**

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC问题的根源在哪_建议看看以下几点__images\img_002_83f071a26bc1.png)

如上图所示：在高速的PCB设计中，时钟等关键的高速信号线，则需要进行屏蔽处理，如果没有屏蔽或只屏蔽了部分，都是会造成EMI的泄漏。建议屏蔽线，每1000mil，打孔接地。  

  

  

**2、高速信号的走线闭环规则**  

由于PCB板的密度越来越高，很多PCB layout工程师在走线的过程中，很容易出现这种失误，如下图所示：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC问题的根源在哪_建议看看以下几点__images\img_003_f57ea9539f8b.png)

时钟信号等高速信号网络，在多层的PCB走线的时候产生了闭环的结果，这样的闭环结果将产生环形天线，增加EMI的辐射强度。

  

**3、高速信号的走线开环规则**  

规则二提到高速信号的闭环会造成EMI辐射，同样的开环同样会造成EMI辐射，如下图所示：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC问题的根源在哪_建议看看以下几点__images\img_004_2b66526a0729.png)

时钟信号等高速信号网络，在多层的PCB走线的时候产生了开环的结果，这样的开环结果将产生线形天线，增加EMI的辐射强度。在设计中我们也要避免。

  

**4、高速信号的特性阻抗连续规则**  

高速信号，在层与层之间切换的时候必须保证特性阻抗的连续，否则会增加EMI的辐射，如下图：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC问题的根源在哪_建议看看以下几点__images\img_005_54997165455e.png)

也就是：同层的布线的宽度必须连续，不同层的走线阻抗必须连续。

  

**5、高速PCB设计的布线方向规则**  

相邻两层间的走线必须遵循垂直走线的原则，否则会造成线间的串扰，增加EMI辐射，如下图：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC问题的根源在哪_建议看看以下几点__images\img_006_f3ea66163ad0.png)

相邻的布线层遵循横平竖垂的布线方向，垂直的布线可以抑制线间的串扰。

  

**6、高速PCB设计中的拓扑结构规则**  

在高速PCB设计中有两个最为重要的内容，就是线路板特性阻抗的控制和多负载情况下的拓扑结构的设计。在高速的情况下，可以说拓扑结构的是否合理直接决定，产品的成功还是失败。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC问题的根源在哪_建议看看以下几点__images\img_007_fe5803682e61.png)

如上图所示，就是我们经常用到的菊花链式拓扑结构。这种拓扑结构一般用于几Mhz的情况下为益。高速的拓扑结构我们建议使用后端的星形对称结构。

  

**7、走线长度的谐振规则**

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC问题的根源在哪_建议看看以下几点__images\img_008_12e99efb3edb.png)

检查信号线的长度和信号的频率是否构成谐振，即当布线长度为信号波长1／4的时候的整数倍时，此布线将产生谐振，而谐振就会辐射电磁波，产生干扰。  

  

**8、回流路径规则**

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC问题的根源在哪_建议看看以下几点__images\img_009_38255e0db922.png)

所有的高速信号必须有良好的回流路径。尽可能的保证时钟等高速信号的回流路径最小。否则会极大的增加辐射，并且辐射的大小和信号路径和回流路径所包围的面积成正比。  

  

**9、器件的退耦电容摆放规则**

  

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC问题的根源在哪_建议看看以下几点__images\img_010_bbac92d629bf.png)

退耦电容的摆放的位置非常的重要。不合理的摆放位置，是根本起不到退耦的效果。退耦电容的摆放的原则是：靠近电源的管脚，并且电容的电源走线和地线所包围的面积最小。

  

声明：文章来源网络，侵删。

  

  

  

推荐阅读

  

  

  

-   [EMC中class A和class B哪个更严格？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486098&idx=1&sn=80dee46e75a3ed55c657569005907e82&chksm=c309d440f47e5d56b83a6b1902e070258254359c1415e8a4cf263004350b00ebca3f9925ae4a&scene=21#wechat_redirect)
    
-   [为什么在芯片电源入口VCC串一个小电阻？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486018&idx=1&sn=91edd9cf022bd0f1ddf0fb4f2321e3b8&chksm=c309d490f47e5d86e999de5ddf30879ccd1226081cd432ace4574789135f1a0f7564ffd8a0ef&scene=21#wechat_redirect)
    
-   [运放的反馈电阻数量级怎么选取比较合适？用K，10K，100K？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486055&idx=1&sn=0d6a9c89ef4f32302de6b9729fc9eddc&chksm=c309d4b5f47e5da328e95338a96ffeac72a0c009eb4e4f61039021f4c139c97024bb64278f60&scene=21#wechat_redirect)
    
-     
    

  

****觉得内容不错的话，欢迎分享，点赞，在看**![](D:\电脑文件\公众号知识库\电磁兼容_EMC\EMC问题的根源在哪_建议看看以下几点__images\img_011_642a876b39bd.gif)**