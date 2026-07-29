# 怎样的 PCB 才能承受住100A电流？

原创 硬件笔记本 2024-04-26 07:44 四川

> 原文地址: [https://mp.weixin.qq.com/s/noQ5JGRjHwtiVPN3NpCbkw](https://mp.weixin.qq.com/s/noQ5JGRjHwtiVPN3NpCbkw)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

通常的PCB设计电流都不会超过10 A，甚至5 A。尤其是在家用、消费级电子中，通常PCB上持续的工作电流不会超过2 A。但是最近要给公司的产品设计动力走线，持续电流能达到80 A左右，考虑瞬时电流以及为整个系统留下余量，动力走线的持续电流应该能够承受100 A以上。

![](怎样的_PCB_才能承受住100A电流__images/img_002_277ffd9c242f.png)

    **那么问题就来了，怎么样的PCB才能承受住100 A的电流？**

  

  

**方法一：PCB上走线**

要弄清楚PCB的过流能力，我们首先从PCB结构下手。以双层PCB为例，这种电路板通常是三层式结构：铜皮、板材、铜皮。铜皮也就是PCB中电流、信号要通过的路径。根据中学物理知识可以知道一个物体的电阻与材料、横截面积、长度有关。由于我们的电流是在铜皮上走，所以电阻率是固定的。横截面积可以看作铜皮的厚度，也就是PCB加工选项中的铜厚。通常铜厚以OZ来表示，1 OZ的铜厚换算过来就是35 um，2 OZ是70 um，依此类推。那么可以很轻易地得出结论：在PCB上要通过大电流时，布线就要又短又粗，同时PCB的铜厚越厚越好。  

  

![](怎样的_PCB_才能承受住100A电流__images/img_003_3f7224ed50a0.png)

   实际在工程上，对于布线的长度没有一个严格的标准。工程上通常会用：**铜厚/温升/线径**，这三个指标来衡量PCB板的载流能力。

  

以下两个表可以参考：

![](怎样的_PCB_才能承受住100A电流__images/img_004_98ffc05b1169.png)

从表中可以大约知道1 OZ铜厚的电路板，在10°温升时，100 mil (2.5 mm) 宽度的导线能够通过4.5 A的电流。并且随着宽度的增加，PCB载流能力并不是严格按照线性增加，而是增加幅度慢慢减小，这也是和实际工程里的情况一致。如果提高温升，导线的载流能力也能够得到提高。

  通过这两个表，能得到的PCB布线经验是：增加铜厚、加宽线径、提高PCB散热能够增强PCB的载流能力。

那么如果我要走100 A的电流，我可以选择4 OZ的铜厚，走线宽度设置为15 mm，双面走线，并且增加散热装置，降低PCB的温升，提高稳定性。

  

  

**方法二：接线柱**

  

除了在PCB上走线之外，还可以采用接线柱的方式走线。

在PCB上或产品外壳上固定几个能够耐受100 A的接线柱如：表贴螺母、PCB接线端子、铜柱等。然后采用铜鼻子等接线端子将能承受100 A的导线接到接线柱上。这样大电流就可以通过导线来走。

  

**方法三：定做铜排**

  

甚至，还可以定做铜排。使用铜排来走大电流是工业上常见的做法，例如变压器，服务器机柜等应用都是用铜排来走大电流。

附铜排载流能力表：

![](怎样的_PCB_才能承受住100A电流__images/img_005_0c196d067619.png)

  

**方法四：特殊工艺**

  

另外还有一些比较特殊的PCB工艺，国内不一定能找得到加工的厂家。英飞凌就有一种PCB，采用3 层铜层设计，顶层和底层是信号布线层，中间层是厚度为1.5 mm的铜层，专门用于布置电源，这种PCB可以轻易做到小体积过流100 A以上。

硬件工程师及从业者都在关注我们

![](怎样的_PCB_才能承受住100A电流__images/img_006_58147eba07eb.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_007_9b53a964efd5.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_008_75db8c1036fb.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_002_0b6ae33611dc.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_010_365c6cd9f8bb.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_011_2da1ccbac0ae.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_012_7446ffe5e3b8.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_013_d246b538f592.gif)

![](怎样的_PCB_才能承受住100A电流__images/img_014_3352ab08e99b.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_015_0f89804cd7eb.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_016_f506b795c6ac.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_017_97df29bd0f50.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_018_d7c6fe8cd645.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_019_19e2f7b6262a.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_020_08d092bef8a0.gif) ![](怎样的_PCB_才能承受住100A电流__images/img_021_50889e54acde.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。