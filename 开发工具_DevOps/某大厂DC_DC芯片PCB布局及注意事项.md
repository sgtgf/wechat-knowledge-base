# 某大厂DC-DC芯片PCB布局及注意事项

原创 硬件笔记本 2023-08-06 11:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/hK8U5IzMfgzeIjEewUETHg](https://mp.weixin.qq.com/s/hK8U5IzMfgzeIjEewUETHg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

在DCDC电源电路中，PCB的布局对电路功能的实现和良好的各项指标来说都十分重要。本文以buck电路为例，简单分析一下如何进行合理PCB layout布局以及设计中的注意事项。如有问题，欢迎指正。

  

首先，以最简单的BUCK电路拓扑为例，下图（1-a）和（1-b）中分别标明了在上管开通和关断时刻电流的走向，即功率回路部分。这部分电路负责给用户负载供电，承受的功率较大。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6ia1zGeS9WtpxqnoEsnLDfTLge10nib8A767Jgl1ibO8qL8SL9Hia9oAXzA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6FGv8zAv4fZUERiaibDf9Go26L7fLv3mD7huQeNdNgib5TWYsic7uibFXBicg/640?wx_fmt=png)

  

结合图（1-c）中Q1和Q2的电流波形，不难发现，由于电感的存在，后半部分电路中不会存在一个较高的电流变化趋势，只有在两个开关管的部分会出现高电流转换速率。

  

在PCB布线时需要特别注意，尽可能减小这一快速变化的环节的面积，来减少对其他部分的干扰。随着集成工艺的进步，目前大部分电源芯片都将上下管集成到了芯片的内部。

  

了解了高电流转换速率部分后，让我们回到整个功率回路布局来看。以MPS的非常受欢迎的MPQ8633A（B）系列产品为例，这是一款完全集成的高频同步降压转换器可以实现高达12-20A的输出电流，其原理图如下，其功率回路（绿色标注）中包含输入电容，电感以及输出电容等器件。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6VDvyRFsqdrf2AVEvlkiaLRX6qh30W3QYaNdkaibNNoEGibATlTd4rLd1w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6dq8BZKWD0ZWXI9cw2uy2hcVRLTQeRQ86mkcgYjfwpzaTbQX0C189icw/640?wx_fmt=png)

  

  

功率回路也需要做到尽可能地占用较小的环路面积，来减少噪声的发射以及回路上的寄生参数。推荐的PCB布局如图（3）所示。注意点如下：

  

1、输入电容就近放在芯片的输入Vin 和功率地PGND ，减少寄生电感的存在，因为输入电流不连续，寄生电感引起的噪声对芯片的耐压以及逻辑单元造成不良影响。VIN 的管脚旁边至少各有1 个去耦电容 ，用来滤除来自电源输入端的交流噪声和来自芯片内部（倒灌）的电源噪声，同时也为芯片储能。且电容需要紧挨管脚，两者的间距需要小于40mil 。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6LDSo17Yhg7xmYzCiaXmf8SL6PKncKLu8UL3cVr25oAiaHvJmVp3PzGqA/640?wx_fmt=png)

  

  

2、功率回路尽可能的短粗，保持较小的环路面积 ，减少噪声的发射。

  

3、SW 点是噪声源，保证电流的同时保持尽量小的面积 ，远离敏感的易受干扰的位置，例如FB等。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6ujs7fZud94vbkAcDibcQLJWpT5phnoMQsZ56LBVjib6sdg7iaMLtVyic6A/640?wx_fmt=png)

  

  

4、铺铜面积和过孔数量会影响到PCB 的通流能力和散热。 由于PCB的载流能力与PCB板材、板厚、导线宽厚度以及温升相关，较为复杂，可以通过IPC-2152标准来进行准确的查找和计算。一般，对于MPQ8633A（B）的PCB来说，需要在VIN（至少打6个过孔）和PGND（至少打9个过孔）处多打过孔，这两处的铺铜应最大化来减小寄生阻抗。SW处的铺铜也需要加宽，以免出现限流的情况，导致工作异常。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6icG8za4eObfeDl1M7lFMAEgN1Q6trapSHHHReuoL8EbP7RSlRLcNDyg/640?wx_fmt=png)

  

  

讨论完功率回路部分，转眼看芯片逻辑电路部分，这部分的PCB布局也是有所讲究的。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6KB4cgsTY5FKyib6ypJ2EBsCF8MURv39iaTPz5qXkc2xYTvYWVKGEWxCQ/640?wx_fmt=png)

  

  

结合图（3）和（4）可总结注意点如下：

  

将BST 电容放置在尽可能靠近BST 和SW 的位置 ，使用20mil 或更宽 来布线路径。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd61heNcKhD2CPYLWdbtRoKqWHXuahRDdBnTXUwr5sE0QyibSfZgKqCH5w/640?wx_fmt=png)

  

  

FB 电阻连接到FB 管脚尽可能短， 减少噪声的耦合。这是芯片最敏感，最容易受干扰的部分，是引起系统不稳定的十分常见原因。需要将其远离噪声源，例如：SW点，电感，二极管等（在非同步buck中，MPQ8633外围无二极管）。如图，RFF、CFF、RFB1、RFB2都尽量靠近芯片摆放。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6Jz80rJibrG1HpSvFKMuibUOk8PP2DQ2uokcsxBoMiaBHtaXrvjewNu4FQ/640?wx_fmt=png)

  

  

VCC 电容应就近放置在芯片的VCC 管脚和芯片的信号地之间，尽量在一层，没有过孔 。对于信号地（AGND）和功率地（PGND）在一个管脚的芯片，同样就近和该管脚连接。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6lh9cw7IPdputHzmWyTe4D2nBL836g7ydDcu1ooRfiarIm8ezK3hNqgw/640?wx_fmt=png)

  

AGND和PGND需要进行单点连接。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6FyXia1Qcwtm7JekyoZVV30nMD35uBvl7MA3xxBw5a44r7lEGPHKsYeA/640?wx_fmt=png)

  

  

将SS电容靠近TRK/REF至RGND 。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6cKIcG2obSopA3C0vzIgiawqiak4NB1BiakJ6h2DZ0fmR4fljff8MaiaKmw/640?wx_fmt=png)

  

  

将SENSE电容置于输出SENSE线之间，平行走线。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6w0iazQgCHpAGkIMj0ub9lZ8wFBWKOfTXTSQ94KicXXFG07Ct8VNYbxhA/640?wx_fmt=png)

  

  

PCB layout 中走线和铺铜都尽量避免90 °直角 ，走45°或者圆弧角，特别是在高频信号传输线部分。避免由传输线宽带来的反射和传输信号的失真。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6Jz9tLseicyRJ5DUTE2vEjVsqmwT2ZL3xHaxzTuJqq7ME3MHJf9bL4Qw/640?wx_fmt=png)

  

  

最后，为了方便大家了解自己画的PCB是否合理，可以参考以下简易表格做一个自评：

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6DOqFBlaxSHBr6Ecb0gherDUqhic7T7gyLLNbZsuEuxjib1j0PtJ8ic63A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVibNrMdwftzY5brJatQicd6C8FSuMFPYHXWbRZPc1NgQe3XybW6U0eshBCp1GsRTicyw3YTywyhgJQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/FJtasAibLFa4oib1tM7IDzzGyibTcYzk8YmCTAh1mjcnicafkHgKauhLMLeRebXvLryRtkSiaz3Dbia0WiavcahbVhsOA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

以上表格适用于简单的buck、boost电路的PCB设计，多用单层或者双层板即可。仅供参考，欢迎补充。

文章转载来源MPS论坛，作者：Joey.Zhou

-   ## 
    
    **声明：**
    
      
    
    声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。
    
    ## 
    
    投稿/招聘/推广/宣传 请加微信：woniu26a
    
    **推荐阅读▼**
    

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    
      
    

[后台回复“加群”，管理员拉你加入同行技术交流群](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)