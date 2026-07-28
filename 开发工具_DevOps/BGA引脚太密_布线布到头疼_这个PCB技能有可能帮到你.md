# BGA引脚太密，布线布到头疼？这个PCB技能有可能帮到你

原创 王工 硬件笔记本 2026-01-14 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/Tfocl-1u5Gy8gRNZ-bXHhg](https://mp.weixin.qq.com/s/Tfocl-1u5Gy8gRNZ-bXHhg)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

  

大家都知道，咱们常见的智能手机很薄，功能却很多，性能也越来越强大。里面的电路板只有一少部分，大部分空间都被电池给占据了。

咱们以iPhone6SPlus为例，这是拆盖后的图片。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjPFYSNUWCfdfbQQIJcdhTV7tNFTnVOCzaavcbYueqWTnicKVTSDnpxWOzrV7xWc4eLNBX8vf7dbPA/640?wx_fmt=png&from=appmsg)

这是板子正面图片，主要IC包括：LDDR4，调试解调IC，功率放大器模块，**包络追踪IC，还有一个可能是6轴陀螺仪和加速度计的组合。**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjPFYSNUWCfdfbQQIJcdhTVcJiaHRQOZWg1lgrHQhtZINlOxN0KSoOuwAsXbKd6IBm7afnCe0IFicfw/640?wx_fmt=png&from=appmsg)

  

这是板子背面图片，主要IC包括：NAND 闪存，Wi-Fi模块，NFC控制器，电源管理IC，音频IC和功率放大器模块。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjPFYSNUWCfdfbQQIJcdhTVvMuVg1iaAA5SPtBvjmjRvwquNSukpf9ZMYibuic8ZlN0vedcDiawf985bA/640?wx_fmt=png&from=appmsg)

甭管是智能手机、汽车里的各种电子设备，还是搞AI的硬件，信号跑得飞快，线路挤得满满当当。这对咱们PCB工程师是个大考验，对生产这些电路板的工厂，要求更是严苛。  

今天就跟大家聊聊针对这种高密度板子，PCB省空间的一个法子——**盲埋孔。**

  

01

盲埋孔简介

咱们平时自己捣鼓或者做的大部分项目里，最常用的其实是**通孔**。

**通孔**最好理解，简单说就像一根钉子从板子的正面，一锤子砸穿到背面。板子层数不多（比如六层以内），或者项目预算紧巴巴的时候，用它准没错。

那**盲孔**和**埋孔**啥时候上场呢？主要就是板子上实在没地方了，线路又复杂得要命，通孔一打下去，背面的走线全给堵死了，这时候就得请它们出马。目前大部分的便携式产品中，**0.65mm 间距以下的**BGA封装，都使用了盲埋孔的设计工艺。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjPFYSNUWCfdfbQQIJcdhTVuVdodegYK0IoCOGzSvIz8nRqkffF4YaqqZ5SiaYWEbFictXdp1Bdr8ug/640?wx_fmt=png&from=appmsg)

**盲孔**：你可以把它想象成半截子的孔。比如，我只想从板子正面连到下面的第二层，那我就只从正面往下打孔，打到第二层就停，绝不捅穿到背面去。这样一来，背面那块地方就干干净净，可以走别的线。一个两个省不了多少地儿，但像手机主板上那种成千上万个连接点，用上盲孔，省出来的面积可就非常可观了。

**埋孔**：顾名思义就是孔完全埋在板子内部。它只管内层第二层和第三层怎么连，或者第三层和第四层怎么通，跟板子的顶层和底层都没关系，从外面根本看不出来。它和盲孔一样，都是为了让多层板里面的线路走得更顺、更密，把最金贵的表层空间给腾出来。用上埋孔，能减少信号受干扰的可能，保持传输线特性阻抗的连续性，还能节省走线空间，所以特别适合高密度、高速的电路板设计。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjPFYSNUWCfdfbQQIJcdhTVSILc5cmPUWlS2GicVL7QdadKLu4YHMeTHKoqj1vGVt6AGEFDxeLBaVw/640?wx_fmt=png&from=appmsg)

02

HDI板简介

说到这儿，就不得不提到**HDI板**了。这名儿听着高大上，其实就是用**上面所说的盲孔、埋孔工艺**。它的核心就两样：**微孔**和**细线**。注意啊，有埋孔的不一定是HDI（老式机械钻孔也能做埋孔），但HDI板里的埋孔，肯定是激光钻的微孔。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjPFYSNUWCfdfbQQIJcdhTVPpZT3PLJLUzA1vXJsPzXNhjjlEMC4V1jAfevTicUW32cHu09F7eI8fA/640?wx_fmt=png&from=appmsg)

咱们在嘉立创官网上可以看到，这里还有**一阶**、**二阶**这个词。这说的不是板子有几层，而是**制造过程有多麻烦**，得经历几次激光钻孔和压合的循环。次数越多，阶数越高，能做的线路结构就越复杂，当然，做起来越难，成本也蹭蹭往上涨。

咱们拿六层板来举个详细的例子：

一阶：一阶板就是先钻通L2-L5，再压上第1和6层外层铜箔，接着用激光钻出表层到次外层的盲孔（L1-L2和L6-L5）。整个过程只有一次压合和一次激光钻孔，因此称为一阶。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjPFYSNUWCfdfbQQIJcdhTVBKrNDX4gaZF4X6S9pK9aDpuNa6E8VJnxbby2nyia9puwmrMY2LL6iczQ/640?wx_fmt=png&from=appmsg)

  

二阶：在制作二阶板时，先钻通L3-L4埋孔，再压合形成L2-L5中间板，第一次激光钻孔L2-L3和L4-L5盲孔，然后第二次压合L1和L6，第二次激光钻孔完成L1-L2和L5-L6盲孔，最后钻通孔连接所有层。‌整个过程需两次压合和两次激光钻孔，因此称为二阶。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjPFYSNUWCfdfbQQIJcdhTV2vT7vkFyyfkApNTVQ2yxn8v7qn6XXU0SAwZVDick1ZtGBf174XfNMUQ/640?wx_fmt=png&from=appmsg)

既然HDI盲埋孔这么好，为啥不是所有板子都用？**最实在的原因就一个字：贵！**  
以前，一个盲孔的成本比通孔能贵出50%甚至更多，埋孔就更别提了，翻个两三倍都是常事。而且生产周期还长。所以对于很多对电路板大小要求没那么苛刻的产品来说，**稍微把板子尺寸做大一圈，可比用盲埋孔省钱多了**，这是大实话。

**但是，情况现在不一样了。** 以前这技术贵，工艺复杂，量小价高。现在，像咱们经常打样的**嘉立创**这样的大厂也可以做HDI盲埋孔板子，一下子就把门槛拉低了。

  

03

嘉立创盲埋孔简介

**嘉立创搞的HDI盲埋孔板，对咱们普通工程师和各企业来说，更加方便：**

1、能力够用，覆盖广： 它支持从一阶到二阶的HDI工艺，能做到最小3mil的线和间距，最小3mil的激光孔，板子最高能做到32层。这意味着市面上绝大多数的高密度设计需求，它都能接得住，不用再为找一家能做的厂而发愁。

**2、交期快了一半：** 传统做HDI板，等上一两个月不稀奇。嘉立创利用自己的流程优势，把交期压缩到了行业平均水平的一半左右，这对产品研发赶进度太重要了。

**3、价格实在多了：** 通过规模化、自动化的生产和数字化的管理，它把HDI板的制造成本给打了下来。虽然肯定还是比普通通孔板贵，但已经从用不起变成了可以权衡考虑。对于想提升产品竞争力、做小型化的人来说，多了一个非常可行的选择。

**4、板材可靠，不玩虚的：** 用的都是像**生益****S****1000-2M**这种行业内公认的高品质板材，电气性能、耐热性都很好，做车规级、工业级的板子也更有底气。

**5、操作省心：** 直接在它家网站上传文件、选参数、看报价、下单，生产进度网上随时可查。比起以前动不动就要发邮件、打电话去跟工厂反复确认，效率高太多了。

**我们可以把****HDI****盲埋孔理解成一个高级工具**。以前这工具又贵又难买，现在嘉立创这样的厂家把它做成了价格合理、交货快的标准件。这让我们这些搞设计的人，在遇到难题时，手里多了一个靠谱的、能用得起的解决方案。下次画板子被逼到墙角时，不妨去嘉立创的页面上算个价看看，说不定就有惊喜。