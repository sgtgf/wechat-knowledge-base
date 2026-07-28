# 十几张图，案例讲解DC/DC电源PCB设计

原创 硬件笔记本 2024-11-25 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/v1qNmgrQw0vTtrXWxt534Q](https://mp.weixin.qq.com/s/v1qNmgrQw0vTtrXWxt534Q)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")

  

大家好，我是王工。

在DCDC电源电路中，PCB的布局对电路功能的实现和良好的各项指标来说都十分重要。本文以**buck电路**为例，简单分析一下如何进行合理PCB layout布局以及设计中的注意事项。

  

首先，以最简单的BUCK电路拓扑为例，下图（1-a）和（1-b）中分别标明了在上管开通和关断时刻电流的走向，即**功率回路部分**。这部分电路负责给用户负载供电，承受的功率较大。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbLt8Mtsg9ibfrgMoP5l56sTWp7LXpjZW7OtT9iaQKZwoLShFcIwD3tBWsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbL1H5KGPdKgwEbTEgDQCsOxz4WLrNuic2Bd61WwQ9s1rStarTOYtqahjg/640?wx_fmt=png&from=appmsg)

结合图（1-c）中Q1和Q2的电流波形，不难发现，由于电感的存在，后半部分电路中不会存在一个较高的电流变化趋势，只有在两个开关管的部分会出现**高电流转换速率**。在PCB布线时需要特别注意，尽可能减小这一快速变化的环节的面积，来减少对其他部分的干扰。随着集成工艺的进步，目前大部分电源芯片都将上下管集成到了芯片的内部。

  

了解了高电流转换速率部分后，让我们回到整个功率回路布局来看。以MPS的非常受欢迎的MPQ8633A（B）系列产品为例，这是一款完全集成的高频同步降压转换器可以实现高达12-20A的输出电流，其原理图如下，其功率回路（绿色标注）中包含输入电容，电感以及输出电容等器件。

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbLsNrhSTs2CcawVkksEACTIw3t6Rs7xBA0cpFiaaL946sljtgXRhib3AMA/640?wx_fmt=png&from=appmsg)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbL4k63rDdW35BIjd7DUML2FkPQjlutfFLaAq3N1CulmDp8HYklfHw9tw/640?wx_fmt=png&from=appmsg)

  

功率回路也需要做到尽可能地占用较小的环路面积，来减少噪声的发射以及回路上的寄生参数。推荐的PCB布局如图（3）所示。注意点如下：

  

-   **输入电容就近放在芯片的输入Vin 和功率地PGND** ，减少寄生电感的存在，因为输入电流不连续，寄生电感引起的噪声对芯片的耐压以及逻辑单元造成不良影响。**VIN 的管脚旁边至少各有1 个去耦电容** ，用来滤除来自电源输入端的交流噪声和来自芯片内部（倒灌）的电源噪声，同时也为芯片储能。**且电容需要紧挨管脚，两者的间距需要小于40mil** 。
    
      
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbL8RY55CDjqkapIeQYA6nibZbY1ZJswjJfibeuoSoymjNr0IsyRl9YqiaxA/640?wx_fmt=png&from=appmsg)
    

  

-   **功率回路尽可能的短粗，保持较小的环路面积** ，减少噪声的发射。
    
-   **SW 点是噪声源，保证电流的同时保持尽量小的面积** ，远离敏感的易受干扰的位置，例如FB等。
    

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbLSsX4OmWKkb4WcToqdE2ibVfxPjnTycVYQrdCZgmueFGibX9nbnMQp5DQ/640?wx_fmt=png&from=appmsg)

  

-   **铺铜面积和过孔数量会影响到PCB 的通流能力和散热**。由于PCB的载流能力与PCB板材、板厚、导线宽厚度以及温升相关，较为复杂，可以通过IPC-2152标准来进行准确的查找和计算。一般，对于MPQ8633A（B）的PCB来说，需要在VIN（至少打6个过孔）和PGND（至少打9个过孔）处多打过孔，**这两处的铺铜应最大化来减小寄生阻抗**。SW处的铺铜也需要加宽，以免出现限流的情况，导致工作异常。
    
      
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbLKFBQ2TTH18Z4Jibzd4oSo8Y7OAOvfvE2viaUQIncj9UibKUvYVGxIiaTRA/640?wx_fmt=png&from=appmsg)
    
    讨论完功率回路部分，转眼看芯片逻辑电路部分，这部分的PCB布局也是有所讲究的。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbLwOrWhcic28icV4yqoDUlftGCN5Da7ner2wW89qV3aLQpqvjSrxhrFfCQ/640?wx_fmt=png&from=appmsg)

  

结合图（3）和（4）可总结注意点如下：

1.**将BST 电容放置在尽可能靠近BST 和SW 的位置**，使用**20mil 或更宽**来布线路径。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbLaiafVFTUI3GU4T4bE7lVC2pxNoxQ2M7DwcwVoBISGlAlPpGWWyGplFg/640?wx_fmt=png&from=appmsg)

2.**FB 电阻连接到FB 管脚尽可能短**， 减少噪声的耦合。这是芯片最敏感，最容**易受干扰的部分，是引起系统不稳定的十分常见原因。需要将其**远离噪声源，例如：SW点，电感，二极管等（在非同步buck中，MPQ8633外围无二极管）。如图，RFF、CFF、RFB1、RFB2都尽量靠近芯片摆放。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbLicRyXoavicib6IzRn9jq71eGwCVoX8sOhd56t2mMBSOT21HoC2Ga3SGlA/640?wx_fmt=png&from=appmsg)

  

3.**VCC 电容应就近放置在芯片的VCC 管脚和芯片的信号地之间，尽量在一层，没有过孔** 。对于信号地（AGND）和功率地（PGND）在一个管脚的芯片，同样就近和该管脚连接。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbLL1A9BZrP2e0E2BeiaYubfN1rAicCBHictibicmibyD0NSOgrBF40ZeLM8t0w/640?wx_fmt=png&from=appmsg)

  

4.AGND和PGND需要进行**单点连接**。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbLykBC80GbfD8JfEGrufZj7HBtHrFtQiaOVMDruhfJhvlyqBRFqPNCzYQ/640?wx_fmt=png&from=appmsg)

  

5.**将SS电容靠近TRK/REF至RGND**。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbL4joLiaOf5fbsaasESRiacdTWKmYq7ATaRLAjvKa6fLFkL82q3rBqJKNQ/640?wx_fmt=png&from=appmsg)

  

6.将SENSE电容置于输出SENSE线之间，**平行走线**。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbLicgiaZuZl7ibEEnPv3rmhz1LZ0CFYPZS1lAWYhicZOSUM0jWUX2Vem8Ghw/640?wx_fmt=png&from=appmsg)

  

7.PCB layout 中走线和铺铜都尽量避免90 °直角，走45°或者圆弧角，特别是在高频信号传输线部分。避免由传输线宽带来的反射和传输信号的失真。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbLkkMuPvicCmQk37VoNPhiaeJInZLgib55VfA2IkSkpnCyZemoGRbANFSHg/640?wx_fmt=png&from=appmsg)

  

最后，为了方便大家了解自己画的PCB是否合理，可以参考以下简易表格做一个自评：

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbLTA54iah8AhqjribJDuicobj7FEvD72Eqd8Zw8g5N6LcDXkic63pgRZT7Rg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQQ5TDvvpcrzEeLK6ickbLa6M55kzLia61YsAmBmewgoKkv8ufu9x8QFlExH8Jk0vBrYHxoeLHSsA/640?wx_fmt=png&from=appmsg)

  

以上表格适用于简单的buck、boost电路的PCB设计，多用单层或者双层板即可。仅供参考，欢迎补充。

  

**写在最后**

  

都说硬件工程师越老越吃香，这句话也证明硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

  

  

以下两个电路，是之前技术交流群群友发的，王工做了一个简单的分析，旨在帮助入门或转行的同学理解学习（点击图片直接进入）

  

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2ebSUpbwoG05XbkMxdhUpWXxtPKnAs8qlAZF60KO0b0xYSecfo1Micpm7voSg1ibfIOpn12oo3kkQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247554185&idx=1&sn=9ae8eb5e426c407262b6de79072e31bf&chksm=c30aca5bf47d434dab17c5ac618a20f6f73d4ee70a2dd5202d3e0005828655059005bfb22e48&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjg2ebSUpbwoG05XbkMxdhUpQvHwjHHqyVg59KzponKUXpOg5ynXzOHs40lCXUaWtovFsNlZm4MgicA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247487790&idx=1&sn=d4c4d72acf77e594d9bea313f957e27c&chksm=c309cffcf47e46eace62a9f21dcb5f58515686ff7adacb9ee9008bc0851809c6df6507734bed&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhqpIuJpq4LeBQlj8nWjX0G7FYEibJ5shBviacYG5PHUicTsicwrfpT7MZHB49cAApCeC3aMlNvZ3AnFA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

## 

**声明：**

  

声明：文章来源MPS，仅用于分享学习。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)