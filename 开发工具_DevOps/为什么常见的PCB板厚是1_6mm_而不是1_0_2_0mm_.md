# 为什么常见的PCB板厚是1.6mm？而不是1.0，2.0mm?

原创 王工 硬件笔记本 2025-09-29 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/alKwt6Q8HzXAH2bWpwQxsQ](https://mp.weixin.qq.com/s/alKwt6Q8HzXAH2bWpwQxsQ)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=frjerr2t&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&randomid=x41xcyk9&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

“王工，咱们这次打板，板厚还是选默认的1.6mm吗？” 

“对，就它吧。” 

这样的对话，几乎发生在每个硬件项目投板的起点。我们太习惯这个选项了，以至于很少去问：为什么偏偏是1.6mm，而不是1.0mm或2.0mm？

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgHWVKczIWxBfUhZb8EBicXLtbExf2dQmtJdzmtnjZgamqLv6MicKVNaOwHT8p07JnhEF6x1C2SdDOg/640?wx_fmt=png&from=appmsg)

说实话，每次顺手勾选这个默认值时，我心里偶尔也会闪过一丝好奇：它既不是整数，也不像有什么特别的数学道理，怎么就成了行业默认？后来我特意去查了一些资料，才发现这个答案并不在现在的电路设计手册里，而是藏在一段跨越百年的工业历史中。今天就跟大伙儿一起唠唠，这背后其实是一个“用着用着就成了标准”的有趣故事。

  

011

故事的起点：一块“木板收音机”

要想弄明白1.6mm的来历，咱们得把时钟拨回到还没有PCB的年代。那时候的电子设备，比如收音机，里面是啥样呢？不是整齐的绿色电路板，而可能是**一块木板**或者**一块硬纸板**！工程师在上面钻好孔，然后用铆钉和铜线，像搭鸟窝一样，把那些笨重的电子管和元件一个个连接起来。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgHWVKczIWxBfUhZb8EBicXLczh1mpKMpH3AlqzA2JPxSZwoYZcxzVJoe2TQhvBaN6eicpaMiblgFvMw/640?wx_fmt=png&from=appmsg)

后来，人们找到了一种叫“**电木**”（酚醛树脂）的新材料。这东西结实、绝缘、耐热，在当时主要用来做收音机的外壳、电话机，还有各种桌面。它可是那个时代的“高科技塑料”。

  

021

**1.6mm的由来**：一次“顺手”的借用****

那么，当时生产这种电木板的标准厚度是多少呢？答案就是：**1/16英寸**。换算一下，就是咱们熟悉的**大约1.6毫米**。这个厚度对于做桌面和面板来说，强度刚刚好。

当时的电子工程师们一看，这电木板真不错啊！比木头和纸板强多了。于是，他们就“借”用了这种现成的材料，拿来当安装元件的基板。这就像你想垫一下桌脚，顺手从旁边拿了本厚度刚好的书——电木板就是那本“厚度刚好的书”。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgHWVKczIWxBfUhZb8EBicXLialcjiaavfsvfzE0Ahv0C2KmuapJ35gZ2xUdhJ5kLviaFaJPWeYgAn3Lw/640?wx_fmt=png&from=appmsg)

  

031

**电路板的由来**

再后来，有天才工程师想出了更厉害的办法：“我们能不能把铜箔直接贴在这板子上，然后用化学方法‘画’出线路呢？”——这就是印刷电路板技术的开端。

就这样，1/16英寸（1.6mm）这个厚度，从电木板那里被完整地“继承”给了最早的PCB。紧接着，所有的配套零件，比如板对板的连接器，也都按照这个厚度来设计。一个完整的产业链形成了，1.6mm也就稳稳地成了全球默认的“行业标准”。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgHWVKczIWxBfUhZb8EBicXLAur726Mlp0pJr1r2qIr6PTkVWu53LnQ1pI3uGjnpMia2Ga0rCzicuFmQ/640?wx_fmt=png&from=appmsg)

  

041

**电路为什么今天还在用1.6mm？**

你可能又会问，现在材料早换成FR-4了，为什么厚度还是它？这就好比电脑键盘为什么是QWERTY排列——不是它最科学，而是大家用习惯了，整个生态都围绕着它建立了。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgHWVKczIWxBfUhZb8EBicXL1z7m754qJVwlqNCSS319Aj2qH6UkiarTKcMKVmsXICKxwLicRsv4ecOg/640?wx_fmt=png&from=appmsg)

**1、配套全**：所有的连接器、外壳、安装孔位，都按1.6mm设计。改了厚度，麻烦就大了。

**2、成本低**：板厂做1.6mm的工艺最成熟，效率最高，所以价格最便宜。

**3、够用**：对大多数电子产品来说，这个厚度在强度和成本之间取得了最佳平衡。

当然随着科技的不断进步，咱们产品的种类越来越多，适用场景也越来越复杂，不是所有板子都非得用1.6mm。比如：

-   **超薄设备**：像手机、手表，可能用0.8mm甚至更薄。
    
-   **高端复杂板**：20多层的主板，叠起来自然就厚，可能得用2.0mm以上。
    
-   **特殊接口**：比如一些金手指，可能规定用1.57mm。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgHWVKczIWxBfUhZb8EBicXLvPiaAThuOY5udIuCqC3zddTT1Q3MAxTOsjwyEudAmD91gfTby81LS5Q/640?wx_fmt=png&from=appmsg)

  

不过，选这些“特殊厚度”，你得清楚三点：

**1、得加钱**：材料和加工费都会更贵。

**2、得耐心等**：交货期可能会延长。

**3、得先问**：最关键的一步！画图前一定要问板厂：“这个厚度，你们能做吗？”大多数情况下一般厂家都能满足。

所以，你看，一个简单的数字背后，是一段横跨百年的工业史。1.6mm的数字，可能不是最时髦的，但绝对是最让人省心的。

下次你再勾选那个默认的“1.6mm”时，就可以会心一笑了：咱们选的不仅是板厚，更是一段百年工业历史的延续。希望这次的分享，也能满足你的好奇心！

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgqfqtsGTmRYOSlcJV9S16TNMQL0x3BbmzS3fIwSVcHUAl7Tm8fjhyiaoaa22lajLqMiaIE0IictxHKw/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247561938&idx=1&sn=27ed46e1cad1149ba29c97fe13b12f6a&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgqfqtsGTmRYOSlcJV9S16T1gHeYlMPFzgosA250wmmG63hAH3RXqQdv3J6xIUn4aWCv4JPkeBAicA/640?wx_fmt=png&from=appmsg)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247561335&idx=1&sn=0ef48120c22a90b202dbeb26e94eddfa&scene=21#wechat_redirect)

加群/投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgHWVKczIWxBfUhZb8EBicXLQphZ2YHBhxbSzSDjVQWGPMV4vEa9n25pgBwXxwJEvTR5tCFd4aiavDg/640?wx_fmt=jpeg&from=appmsg)