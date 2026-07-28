# 什么是D类功放？

原创 硬件笔记本 2023-04-15 12:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/S29f7XChb2vU3uOwDmGNEQ](https://mp.weixin.qq.com/s/S29f7XChb2vU3uOwDmGNEQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

在过去的几十年里，音频内容已经取得了非常大的进步，从经典的电子管放大器到现代媒体播放器，技术进步了改变了数字媒体的消费方式。扬声器技术取得了非常大的进步，但放大器方法的改进发挥了重要作用，尤其是 D 类放大器。

这篇文章主要分享：D 类放大器，D 类放大器的优缺点，D 类放大器原理、D 类放大器电路图、D 类放大器设计、D 类放大器测试。

  

**一、D 类放大器框图**

什么是 D 类音频放大器?最简单的一个说法 D 类音频放大器是一个开关放大器。为了了解 D 类音频放大器的工作原理，我们需要了解 D 类音频放大器的功能以及开关信号是如何产生的。下面给出了框图帮助大家理解。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSv9LqT8hCiamiaup7YDCc17ZB180e0q6avBnaUNpQbuVrjShdjhswd3MQ/640?wx_fmt=png)

D 类音频放大器工作原理图

  

**二、 D 类放大器怎么样?**

D 类放大器效率高。与 A 类、B 类和 AB 类放大器相比，D 类音频放大器的效率可高达 90-95%，AB 类放大器的最大效率为 60-65%，因为它们工作在有源区并表现出低功率损耗，如果将集电极 - 发射极电压乘以电流，你就会发现这一点。

  

**三、D 类放大器原理**

现在，回到 D 类音频放大器的功能简化框图。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqS7ZD8A7D6lkiaQibibUAL2GuBz7crjjwZaEBGoWoC1kKvuWRh2UC67b4hw/640?wx_fmt=png)

  

D 类放大器原理 你在同相端看到的，有音频输入;在反相端，有高频三角信号。此时，当输入音频信号的电压大于三角波的电压时，比较器的输出变为高电平，当信号为低电平时，输出为低电平。有了这个设置，我们只是用高频载波信号调制输入音频信号，然后连接到 MOSFET 栅极驱动 IC，顾名思义，驱动器用于驱动两个 MOSFET 的栅极侧和低侧一次。在输出端，得到一个强大的高频方波，我们通过一个低通滤波器来获得我们最终的音频信号。

![](https://mmbiz.qpic.cn/mmbiz_png/jwW4UHic87lf98M2ZbFib1BhzYauJkibZjw95FmZLJIqSH9GeJVnajMI4ffTFicszLPCbycMMQQtsexhib1cfc7oeLA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

D 类放大器工作原理图

  

**四、D 类放大器设计所需组件**

了解了 D 类放大器的基础知识后，我们可以来 DIY D 类放大器。这是一个比较简单的测试项目，组件也比较通用，你直接在网上就可以买到大部分组件，下面给出了带图片的组件列表。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSAgU502Tyy0MpxTYAjPzHD6moDIKBPP2OZnzeib35oeOjcqPnPY61ia1Q/640?wx_fmt=png)

构建 D 类功率放大器的零件清单 构建 D 类功率放大器的零件清单：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqS2ctey4JLv26lbvknJEBTM0ByIkibBcfZdwPJp3emH436ymOoU1Sbthw/640?wx_fmt=png)

构建 D 类功率放大器的零件清单图

  

**五、D类音频放大器电路图**

D 类放大器电路电路图如下所示：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSarNkjRqAOffo8PdPR97ZZnvNl5GW8tichBzj59N2fFmTuX9SRpIzBibw/640?wx_fmt=png)

D 类放大器电路电路图

  

**六、D 类放大器的使用方法**

这里主要是讲一下 D 类音频放大器的主要每个功能模块，并且解释每个模块的工作原理。

  

1、输入电压调节器

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSMX0MpiasBxPiasGNYSo66IgU2kFUkXZFsMkPwCsRCW7UiceoCC8Znn5wQ/640?wx_fmt=png)

输入电压调节器首先使用 5V 稳压器 LM7805 和 12 伏稳压器 LM7812 调节输入电压。这里非常重要，因为我们要用 13.5V 直流适配器为电路供电，而为 NE555 和 IR2110 IC 供电，需要 5V 和 12V 电源。

  

2、带有 555 非稳态多谐振荡器的三角波发生器：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSqwicqad6y0SJ3iaLvmicG4LQb53iaOibkhRfib8ZSQSZY060p5U0mfyKBujQ/640?wx_fmt=png)

带有 555 非稳态多谐振荡器的三角波发生器 从下图可以看出，我们使用了一个带有 2.2K 电阻的 555 定时器来产生一个 260KHz 的三角信号。

  

3、调制电路：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSFM0tudTHniaUicF9FziaJNWVaBeV2OQ59CeIFNT6UMFpDaZEjE3pl0I1Q/640?wx_fmt=png)

  

调制电路 从上图中可以看出，我们使用了一个简单的 LM358 运算放大器来调制输入音频信号。说到输入的音频信号，我们使用了两个 10K 输入电阻来获取音频信号，并且由于我们使用的是单电源，因此我们连接了一个电位器来抵消输入音频中存在的零信号。当输入音频信号的值大于输入三角波时，该比较器的输出将为高电平，在输出端，我们将获得调制方波，然后将其馈送到 MOSFET 栅极驱动器 IC。

  

4、IR2110 MOSFET 栅极驱动器 IC：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSzDVuib2YpdTmZUK3KToyeAOpa0tNhdcicX5ALUr7W77HJjMfyGqhHWyA/640?wx_fmt=png)

IR2110 MOSFET 栅极驱动器 IC 我们使用了 MOSFET 栅极驱动器 IC 来正确驱动 MOSFET。所有必要的电路都按照IR2110 IC 数据表的建议放置。为了正常工作，该 IC 需要输入信号的反相信号，所以我们使用BF200高频晶体管来产生输入信号的反相方波。

  

5、MOSFET 输出级：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqS5tKeJvU4tfjnPahmEqnrm3nWwSmB2ic5LPMekltWEyXHyMpwibaP0ucw/640?wx_fmt=png)

MOSFET 输出级 从上图中可以看出，我们有 MOSFET 输出级，它也是主要的输出驱动器，因为我们正在处理高频和电感，所以总是涉及瞬态，所以我们使用一些 UF4007 作为反激防止 MOSFET 损坏的二极管。

  

6、LC 低通滤波器：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSt6xz0GmzwJhAnAFX8gBMjrXTwicbfpF5ODUfjseOetrUyfUUNh8ibJow/640?wx_fmt=png)

LC 低通滤波器 MOSFET驱动级的输出是高频方波，这种信号绝对不适合驱动扬声器等负载。为了防止它，我们使用了一个 26uH 电感和一个 1uF 无极性电容来制作一个低通滤波器，记为 C11。这就是简单的电路功能。

  

  

**七、测试 D 类放大器电路**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjGlvw3hfp4AI6OUPG9PcqSjb5ickm7VujHnbq6hK0SAeUMW0lKdQhEXhhSYzP6fQic8OJliaoNWrCyQ/640?wx_fmt=png)

测试 D 类放大器电路 从上图中可以看出，使用了一个 12V 电源适配器为电路供电，它发出的电压比 12V 略高，准确地说是 13.5V，非常适合我们的板载 LM7812 稳压器。负载使用的是 4 Ω、5 W 的扬声器。对于音频输入，我使用的是带有 3.5 毫米长音频插孔的笔记本电脑。当电路通电时，不会像其他类型的放大器那样发出明显的嗡嗡声，但是这个电路在较高的输入电平下会出现削波问题，所以这个电路有很大的改进空间。当驱动中等低负载时，MOSFET 根本没有变热，因此对于这些测试，它不需要任何散热器。

  

**八、进一步增强**

这个 D 类放大器电路是一个简单的原型，有很大的改进空间，这个电路的主要问题是采样技术，需要改进。为了减少放大器的削波，需要计算适当的电感和电容值以获得完美的低通滤波器级。与往常一样，可以在 PCB 上制作电路以获得更好的性能，可以添加一个保护电路，以保护电路免受过热或短路的影响。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。