# 什么是规范正交基 (orthonormal basis)


> 原文地址: [https://mp.weixin.qq.com/s/HB30ia3\_QhP0txbkRATGFw](https://mp.weixin.qq.com/s/HB30ia3_QhP0txbkRATGFw)

嘿！规范正交基听起来像高深数学，其实就是**一套完美的“坐标箭头系统”**。想象你在地图上定位：用“向右走3步、向上走4步”就能精确找到任何位置。这种箭头互相垂直（不互相干扰）、每步长度正好1（标准刻度），还能覆盖整个平面——这就是规范正交基！

它在物理、图形学、机器学习、信号处理里到处都在用，因为计算坐标**超级简单**，像读地图一样直观。下面我一步步拆解，配上清晰教育图解，保准你一看就懂！

### 1\. 先拆解三个关键词（通俗版）

-   **基（Basis）**
    
    一组最小向量，能通过“加倍+相加”（线性组合）拼出空间里**任意**向量。2D平面需要2个，3D空间需要3个。
    
-   **正交（Orthogonal）**
    
    向量之间**完全垂直**。数学上，**点积（内积）=0**：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9ZSotMZARnEkR8I7ceUBLIic0zZXINwUFC2hm7ufc4YcKChbXo7K6EYm97XxZBbYpz7y4iaYBEASGr0OYQtka4MSQBlHlTlBPkaicQ/640?wx_fmt=svg&from=appmsg)（就像x轴和y轴成90°，一个方向移动完全不影响另一个）。
    
-   **规范（Normal）**
    
    每个向量**长度正好为1**（单位向量）。长度公式：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57Oiah5NXCFGSrgtoQCmAyKicbxFMGOfyI9t88oMYo1c9NqE6nlRyQUN6XQiaeicFNpHZicfRVjKM3QNM6rtpyc0PtcEOUjy1hYeI2pdWB41LyHyQ/640?wx_fmt=svg&from=appmsg)
    

**规范正交基** = 同时满足上面三点！ 数学上超级简洁：一组向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BlDic3gnt2ZbRkZzjMgzLibRWMTcXS0zWF6NkO4u4ItXVGePaKxqicagibtDR0MEoa9OGveXABST2XvJWToD2k3E1XEJBn3vFCTVibYOLZzchW5Q/640?wx_fmt=svg&from=appmsg) 满足 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4TmTcibK7r4opILKVqbcXFX1jia6bO9mSfpFnl5TXuP60yqu6wg21AfHLNOCDYibxYibOsuGbErMTibYzVibtma9tPibnzX85FrIrQm0hvA6kBykfTw/640?wx_fmt=svg&from=appmsg) （![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Fdd4051PScJTWznGmc2t4mhHDno071cic3xjlC1z8mv4W6wIaqqrqQEib9uPg3c7thHoRibaEV6oW1TiakU4MOH9kMIg18ltWAew6ticuzpibQrKw/640?wx_fmt=svg&from=appmsg)是Kronecker delta：i=j时=1，否则=0）。

###   

### 2\. 最经典例子：2D平面标准规范正交基

标准基向量：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4tTIGJps5OtTdWoUre0RPuGvf305pfe3JWc6koZeDegAf6GY4dK5hzrH2iaD9huicj7zw67aTHwGVnN5m1qk4ZLiaFOLHicEjOGSPyfb2smaTTLA/640?wx_fmt=svg&from=appmsg)
    
    （水平向右）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dGCJ3kWbtnicYWGAIgVgmYSYL1gZB0oibJb3TQyBYtMJO7vE2K5d11WqclT5Cpr6AicENLL94RjyiaAPkaFyzoOia2QibuhG57rwJaKw/640?wx_fmt=svg&from=appmsg)
    
    （垂直向上）
    

它们垂直、长度1、能表示任何平面点！

**任意向量怎么表示？** 拿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4LrbSGAyNks1XBxJ1T33KqUZy4ogjVmzRkFykQf4dnra13Ijr4CX3DVUnjibo6ic2iar2mIck1l6GV6xhHRIfKBwzOoC3Q3lGVth7msib24N85Rg/640?wx_fmt=svg&from=appmsg)，它就是： ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79Oz4ygqKsEFf4IsdOcYbrqsMXHuibJvYOBb0xOTLQl3q0Xl4czlmYredyQQwoq2jmNMsPRIs23UjPLkrHPgupz5aG4rTFrzWtMhEFVRbVicGQ/640?wx_fmt=svg&from=appmsg) 坐标系数**直接就是点积**（投影长度）：

-   x坐标 = ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SdW9smE0CoXjgbhzb6tMIiclAKRu1EqJ3SQdoK0oUstJFn0OYWBibOyibZYhmZxKg3dHApobuibnBiaKsPStcbalRkz1UqbsmIZMpIeIWFVUxcJQ/640?wx_fmt=svg&from=appmsg)
    
-   y坐标 = ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4avg0oPAfnf6bd4auHOIJcCAzOYAyiak7bjIzKzCg6licCicfyzDeMbabOymJ0XXribjbEJUaMxFgO85Yj6sm5pOnxOrTA2ic6CCJlib2WicwzlZMxg/640?wx_fmt=svg&from=appmsg)
    

下面这张图完美展示标准规范正交基下向量的分解（水平和垂直投影）：

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctr09WJrkgu3qGVfx0x4o4rxpuefSuNeNOxZibuuBvxB3CMibtYcxq2icRV3lx8Uebicl83Ec7MCXCEdaQYvGGEEe7lD4345uI8MXk/640?wx_fmt=png&from=appmsg)

图1

规范正交基（orthonormal basis），可以拆成两半来看：

-   **orthogonal**
    
    彼此正交，夹角是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bR9Sxf41Tib0pInkhporwNpYgtmE0fic7BKygBIec66d5YYZfGtfRSXibTYicqibzHXtV41MxE7xpOYribnSCS1z1mqbcffU8bjnCAy87E8jibryhg/640?wx_fmt=svg&from=appmsg)
    
-   **normal**
    
    每个向量长度都是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ApdIhFTtcLP3nYKR5NMkKk9wDicFGUE6TDudMv7Zibbu5oHiaHwrKAkO8iarGHhh3Qvhv22V2Cmu10drgYI1iamYzdU5rkcQX2PNpUCx67MO2fJg/640?wx_fmt=svg&from=appmsg)
    

所以，**规范正交基 = 一组“互相垂直、而且每根都被标准化为单位长度”的基向量**。

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooct5RnUHlw8A0ZlVzevFjX972aq11FVRaWbeqlDF8d7Uic6pZd2QfrSf4ic7lbkUSbz8lL1eJn4hXNl3zGnrv3FHGSPY4GcQYgPLo/640?wx_fmt=png&from=appmsg)

图2

### 1\. 先说“基”到底是什么

在一个向量空间里，所谓一组**基**，就是：

-   它们能把空间里任何向量都表示出来
    
-   而且这种表示是唯一的
    

比如二维平面里，最常见的基是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76zynp09iage4v3mjiaQgSOaTKOicZs0ZEed857SIMJb9Xjz7rJrLrAQfZllhnicNjNgMXOLqxK4AvurVJKxbpGe8Xib76obvTicfrye6Knw9RVBAA/640?wx_fmt=svg&from=appmsg)

任何向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76ycEIvIicxHzicic78ZEibrBhDuQkj9G80PBJcXmuqxGiaibXXYAkG4Ke6WNLFEpEsb4mZHhlP3GbWPWd2J4gdgBhTNmgvKcZXMN9uPgrBHCIlB9Q/640?wx_fmt=svg&from=appmsg) 都能写成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57lbqFsDyjddvxxNBeEj7JcgsqNSvmz253QibkicpwhkB1vDqe9uzqKcceysLia1f4HODDsJNHSdics6aTGicXibvrTVJ9qOsn9knIYaJKBhwvSmibg/640?wx_fmt=svg&from=appmsg)

三维空间里最经典的基是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6OtISk4IlbiagrjT1xQvYm2tQyDwNb7VLbs7p9hsNNztX26QnJ2mibAsvUV86bUTLbsVhHHViaHQ1LXx5iaRBTXV9hnQLllTBEKbVZoSbsTH025Q/640?wx_fmt=svg&from=appmsg)

这就是我们熟悉的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0jLjlATXibtGibgZ00Zib8o9hscb2DNeNCZ9byUia117XkoC6Nd1F8h3mdSUb62DkLAfShGqZzIKU36n4213ZcbB8YwwHfVVkxKCng/640?wx_fmt=svg&from=appmsg) 三个坐标轴方向。

  

### 2\. 什么叫“正交基”

如果一组基里面，不同向量两两垂直，就叫**正交基**。

例如三维里：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UvWRSZEvpoiaP6OrZcc0Sq9JJS2qqDjQoRSOYCh6xKibusoxlZkzsY1kjucJIBG3PtpyuSa08iaPiaZJWdyq39weS93SECkLO6TqD0iaFe24eGaQ/640?wx_fmt=svg&from=appmsg)

它们彼此垂直，所以这是一个**正交基**。  
但它**不是规范正交基**，因为它们的长度不是 1：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4d05bFrYWZMM9lRUJpt7TgjCwsHzGMibRIAsLbiag5K4beVbvEnnVkbf1FPjt1p0FfZayxXEZ6MeZufichQPQJtG4H4aDUCmiaazHiclKib1N38Kbg/640?wx_fmt=svg&from=appmsg)

  

### 3\. 什么叫“规范正交基”

如果除了彼此垂直以外，还满足每个向量都是单位向量：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM45RD4IziaHIPDH9DRv14VU9ibscast1CoHNEGqkEBap9rlBwhITG2CN3qUmu2vHEXwZ0hrhKMQ0azk8NPW2aA8EYJZtQteRE2tu1JG6G8ic8U3Q/640?wx_fmt=svg&from=appmsg)

那么这组基就叫**规范正交基**。

数学上常写成：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yNPvnkDDhR13d3fWf2gDGicERDOtQMy4we0Bqp9sVnhqwdJhmbT6YiaskDoa7yM8FY7us6EwZff7PIZ3UL0zdMHtv6aV1HxfgzZk5q7Rxgkmg/640?wx_fmt=svg&from=appmsg)

也可以简写为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6SxBwFfhgDmwy6jBTIicxrddr5m3cYVDVicOpBIucc22k0ZPmHvX0Cwc4uqibdfMGq1de1vaiaA0kODZsSZYG8cUDHfJNly6EEb9HPA/640?wx_fmt=svg&from=appmsg)

这里 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXvqf4Sog3PM8ibv0jdUqia6icl6x0SbhNa1PSj4udUKn3WE0iaWrbujiaD4jtyCsA5O5LWBN9tsykBhmH7YVWfFl4fCwWOXjciaKHuIw/640?wx_fmt=svg&from=appmsg) 是 Kronecker delta：同一个下标时为 1，不同下标时为 0。

  

### 4\. 结合图2里的意思来理解

图中蓝色的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iblhNyfsNwBXX6mlibvohlWzCeR5u8MYUTBSMNFricDBictZSibE73tDkLO1eVWOMV8n3dU8V6DpsvJkWJ5FoC1ezfTsSgxgQkQxTqILmUCmicb5w/640?wx_fmt=svg&from=appmsg) 是互相正交的，绿色的

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Y559V5uMGT8r1FebJGaVWxjiaBE5FJYXEPzwJ6ICtfe6q36ToibOtFtgJpPofCMicejUZKfoZq7sdoXr7vKROoQtzgv8sY1iceNFfj3USwbic30A/640?wx_fmt=svg&from=appmsg)

是向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4XDrBibU5qzqrwnOIcNXorBDLJFrLPLYeq67wBUTlibZ3zOVKJeHUcFCS17cwVCL2Fewhs63qVH6PxlXtsgKt1JeZ9dzCUKtXrBSPxP0GAibxwg/640?wx_fmt=svg&from=appmsg) 在平面 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eQpfTjKyQSevib3y4gnjRPAMjtkcIfxSk7pbZwPkL7HGMKyuI9MQXFGsIXHWqheVBlmBN35q37kGrm9zWqTIGLojna7Mde1X8a5wHkFl000w/640?wx_fmt=svg&from=appmsg) 上的投影。

如果 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4r34Xgnpic4ohDupoTLG6A5CGOXvrmG5BdXsMppibrmwn7cM5iajzL9ZuUwJQmicdZY8BejjgKicnG4KIaucgvxjTCclTqo3upSSmfvHNWRdvLL8Q/640?wx_fmt=svg&from=appmsg) 不但正交，而且长度还都是 1，那么它们就是这个平面里的一组**规范正交基**。

这时有个特别漂亮的性质：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7AnGMqTW6XfWU521a8ODYkINVaWLNVVCa5cEmAhoRkKgps8IhCpjMF4hwXibVhMCgXia7mvN8gKCxUnzwtanYRTfW2e4TAu9KBySMicarm6dWFQ/640?wx_fmt=svg&from=appmsg)

于是投影可以直接写成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6OtISk4Ilbias8dCN5iamPPwgkoZcbdU3sewtNq2ckG7n1bOcLpTzMWqMH5VpJ6ErHLqrfUYJ2ssrDHxHA3lhLltxoiblHoh235orjG7CXZPuaQ/640?wx_fmt=svg&from=appmsg)

这个公式之所以这么干净，就是因为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Pzgx5Znm20wgqibMdA1u1X2A7fHhsQIBV9UDnFhlMZd6HDeiam8ibuKgB3nyWvnib6j8CsXvSBgHczQPiaY26jgFByS4KPN4eVo6k3ibgB4jUXNnw/640?wx_fmt=svg&from=appmsg) 是**规范正交**的。

  

### 5\. 为什么“规范正交基”特别好用

它最大的好处是：**坐标提取特别简单**。

一般情况下，若一组基不是规范正交的，要把向量分解到这组基上，往往要解方程组。  
但如果是规范正交基，坐标直接就是内积：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5G64ujpmNjicRE7MmicvopjCaYriaHRxMwg28Uf0SFOhjuP2F5qROkfsktTYTFjMRHxMs94pHOgNQoUqTboLrhDBrQe5vrX0picYj9URzZekxibLw/640?wx_fmt=svg&from=appmsg)

这非常像“把影子投到每个轴上”。

也就是说：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5CRUc9ZvGkApIuWkP2lXMKmOjMJzv1ctCGRic7FPTDicYxrFmGZDQ75g0UTbknHqv2l2HSvCwu873umHBm3c0mY3jUb18cEU2mTLbQURpbMlvQ/640?wx_fmt=svg&from=appmsg)
    
    就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5aNxXaSrGO5FgPmh9jvMtAOQoDwID8hxeax0ficFO0vCYsY1gibkkWf8ibDWeAUaMiabKBwu8Eib71hX7cnGpVtktbduRHT2t3Gd8JhH4Im2hnzEw/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpY7dEBIVjgWtFX1yvAtiaiae34Y6XyElWj0xibGIYa0VP33x7VGo2haARFqmYrshJlEzuovR0arwGhEicrS0dxfBhMM5BH51Ltsmgw/640?wx_fmt=svg&from=appmsg) 方向上的分量
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7diaUuFibYgaMIqoqgP4aaBmicJlo35C8PJlfXn7EepSD2ANJIanNK4n1UWgy2vr5iaicq47Q2MNhTicea4KH88cK2eqvegpAbm00SibNvUmCBKNO9w/640?wx_fmt=svg&from=appmsg)
    
    就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7bC9qNz3FCQDSPFXHeyCcN3avrBdwnqWC6ToOWdUCNWqsRicUoplONibgKQz7TGNBjDfgibVIyKseks0SU4ibzqd2ysIPFeCeTOaW92iaibzRdZh2A/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mfF2dEW7G1Bj35an1Wsy4Vu9b96on1hM0PmM6Y22HIz3RZ0ofynteLu4WJ7twFsxTVMZYWxwRSaogbAicx6Ol7ibc98tspb6tTBNJKibDZArjA/640?wx_fmt=svg&from=appmsg) 方向上的分量
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MPibbZWhOZuECldZ3D71ymy0Va7pbCfEXicH8jzA1j9AWG50WQ5e0YzPCj5LzRkAlULmQkSq7L10UAPH4gv8eicGzdTialjP1l2BQOicw1lEUPjg/640?wx_fmt=svg&from=appmsg)
    
    就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76ycEIvIicxHicIyXNHkWFI8JL18QL6M7xIeRhDcgwlfon123IJogD3jCgnfpHL0PeyehPVKxIEx88ZVOk4rrQcFxVrqp7P9q62tqzCm6C9ibpg/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MPibbZWhOZuCxa7yU64PTXYvjg1vcybrrS6j23pBIbwQ1sDPyAiavgISPBkhUb8q7sA0A3XY9eN126xHJgIGXbedd87UiayYTrlJmqgC5RhpBw/640?wx_fmt=svg&from=appmsg) 方向上的分量
    

这就是为什么在欧氏空间里，规范正交基几乎是“最舒服”的坐标系。

  

### 6\. 一个二维直观例子

标准基

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXiaLXzjAy1x686KAdMH7aeEwfXqCcZDP9mskiaWibRhmCtSH8MmxxqaYH9g673oK5FlJ6AWkUiaYQs4Sc1PXkWcT2bFWyPKc42MFEg/640?wx_fmt=svg&from=appmsg)

就是一组规范正交基，因为：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68TIFib2hP6NXJQI3ibJr9x00l0ek29IyfPtyTfAf5J9JgfOGCe7PxAPr1GZVR0Pxd2RHSD277cEa8QjZqAImIJ0HeTsw8MpnC9GB4okFFyheA/640?wx_fmt=svg&from=appmsg)

给定向量

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BpFyhoV7rJJemfhhPibXofqMsNo1Ibzwbj7OPxNkzJFLH5AZs4ApLrzpjzATiaria5iaLYHIX9yAKB94aI3Y98SgOgMnMOF6TfcTIkYOwdsZxDg/640?wx_fmt=svg&from=appmsg)

那么

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tTO2tSibLsqWmg3BotgSNKDqumx3TCfMf8KqzDPnte9rMoI4YqkXBQ7pq53u8xKkGicEb8zPE5tgdlWYmknS3xDe5ysMmzJqkh4zicx3iaxheWw/640?wx_fmt=svg&from=appmsg)

因为

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZbTW8mQ9Qkux06kvu3teDvZl04eraELpUUnib1V9BM95xibXhCFAebhD0a9luZNlREkXNRicHmrFrZlK3b8Xn66yC92qoL58yaCnYibBVmmskhA/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM539s653260mgHJnoknqAhiagb4ibtBr4jySE29u7R8NhPVypNBbFEQLKlHZPgCNfMhUCagMibYMichfNmPhb5J60nw1r0ibFBru8dp6VNOlJ2aOWQ/640?wx_fmt=svg&from=appmsg)

这其实就是最普通的横坐标、纵坐标。

  

### 7\. 一个三维例子

设

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57d2W6B2MFGFDicx27VLb3CqgxAfnGo6vPFqpRprzyK2SiczNg6hUpaBgZvcQ5rXEp3qPTOSfSmDxJxJ5hGYn6b1qhAzWw6VuOviaBW1GFsYhHg/640?wx_fmt=svg&from=appmsg)

先看它们是不是规范正交：

#### 长度

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rEIkiaSbibsnjmibpQ7VWTsYTS2DbX3iaPTWfPicibjED9HakXQQIb7K812hBp0TsPbsLWKibicqRGmVibxQesja31gEx5PickUpd1UmIsSFlRVibic0S6g/640?wx_fmt=svg&from=appmsg)

#### 两两点积

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5micWD1ibhr6GXewqpRjeX40eF6ibLImcflSehCdbSHZVc3SpeWQla7NfSzl5sM9R3ticHjVWgpjibzCNIKY4N1dH0ZGxBdTVxleB5EqBY5nAY0dA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YibQB5EjqzQjDyZHKia4zmibNGSbWmWuHxMiaCsia3v741n1PZxybQiaUGmT80XVicRz53n0mCeKtun4SJFgjgUVIiaxm8BOpFdakia1C70ibhd34jlJg/640?wx_fmt=svg&from=appmsg)

所以这三根向量构成一组**规范正交基**。

现在给

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7diaUuFibYgaMGS25srbLgcAA6lsjVLsj1AJ6KqsgdmwIVubtvXNuacFboT3JZpOILCPf9YyP3sy0sWK8jCoXjBiastuX4PpVdicaUGXbrF2F1Mw/640?wx_fmt=svg&from=appmsg)

则它在这组基下的坐标就是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7A6DNtEtfJEribyKce1bp4OCDmG5JULia7q5picIvRfMM57u2BaQsMWOaBlW8cRKAyZph9rfWkHSdPYQgqicxb9SqVUuXQiaj4UzpHclkKgCmqO8A/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76zynp09iage9eyCWsMv0icKMWjvFjExT35RicZMGVQbApax32rfDm254crZylHzJK5kp87vs7dYDVDmQooDvVicwarzfvQZ0AICO6v7IGAJ1kcg/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpbjiceLYRiaUASbFh15LMC0gkVzicxahD1icNbicG3wYBficy71Bt00ziaR4kUeMJPIOLchrPV4gACevpj6TKGIaRFxYvRnKj6kWolcjg/640?wx_fmt=svg&from=appmsg)

于是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ibLIuYVJkVV8LqYxZJfhu11pwFS8vP8CRicpiaSuUkyR2W5a1me3otumrVvFNicbzMuia9GxxuA0LIB11gMEff4icIboK4J1ryKkxB5SsytOd7lWA/640?wx_fmt=svg&from=appmsg)

这说明：即使基不是标准的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM73fhc04sUsn2ASlSb1XQg3G0YFhvsvLHicYbxb29Amh4LeoCHfh0gIPtFj284L13bhYRS3ZpjQeXHbVY0crTAJWw0HhiafYEcSF0siaT6PUmdzw/640?wx_fmt=svg&from=appmsg) 方向，只要它是规范正交基，坐标照样很好算。

  

### 8\. 从矩阵角度看

如果把这组规范正交基向量作为列排成矩阵

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6P0X23UwXDHyAfSPX13BkzZMtbs5vibh6zEhM1R75ZvwwKxicdw1k4KPFNARiaUlY4TC3TYotkcU5Jqay8EJA3qqjMjicibaibIwyKcOe4Piad0DBag/640?wx_fmt=svg&from=appmsg)

那么就有

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rU6pFYYpZAPuQCRvXXkFN3ibexNqnoDyHzEEzjVYibnYRPqCZyGIkPdhYj0sDrFAfME4ykv6lZiarf8wibrEfC21TIxGNAPu7PD1lYicjOh9zrvg/640?wx_fmt=svg&from=appmsg)

这样的矩阵叫**正交矩阵**（实数情形）。

这意味着：

-   列向量彼此正交
    
-   每列长度为 1
    

也就是说，**矩阵的列构成规范正交基**。

这时：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tCJvLBB965VicHqmcIGHHSUiayLhAAk6dLzOeULPR3XEHgOAyL5QuJ1BAgbVQbgiaS4JNWY1kuLekAhdBdFasZp2SlvogbK2yqic9CJIxyeEkbQ/640?wx_fmt=svg&from=appmsg)

所以很多计算会变得特别简洁。

  

### 9\. 几何上怎么理解

你可以把规范正交基想成一组“理想坐标尺”：

-   每根尺子都和别的尺子垂直，不互相干扰
    
-   每根尺子的刻度长度都统一为 1
    

所以一个向量投到这些尺子上时：

-   不会“串台”
    
-   不会因为尺子长短不同而额外缩放
    
-   坐标值就是纯净的“投影长度”
    

这正是图里那种分解思想的最优版本。

  

### 10\. 和“普通基”相比，本质优势是什么

普通基也能表示向量，但可能会有这些麻烦：

-   基向量不垂直，分量之间互相牵扯
    
-   基向量长度不统一，坐标值不再等于真实投影长度
    
-   求系数时要解联立方程
    

而规范正交基把这些麻烦都消掉了：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6IISRfPib8zuAvZtqiaoZje38vBCOVIQvrsV2XaGlPEwGQIAN8Wb95DBHAUdqhYnuI1fUCOXel7AaiaL8Of9GbdrlUFcEwrLUmM8ibMaISCmiaWvw/640?wx_fmt=svg&from=appmsg)

这是它最核心的美。

  

### 11\. 一句话总结

**规范正交基，就是一组既互相垂直、又都长度为 1 的基。**

它的最大价值在于：

-   分解向量最自然
    
-   投影公式最简洁
    
-   坐标系最稳定
    
-   矩阵计算最漂亮
    

图2本质上就在说明一件事：  
当 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM42L4cxvkOMFd2BADmMWOMnhW6H16gTFPeSTHzXH7HvvMTbJAVjw9Vickf8r0cMjrkZ9B5T4amAVC50fqK9o3FcTeicYToXwdwaAic469tgXMtgQ/640?wx_fmt=svg&from=appmsg) 是一组规范正交向量时，向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6A2dX2kRILmd5q8QLquNX4qiaW64y8gbn4c7kbzjKNpcz9McgSxAVicZP3xQIoM0iciclK0A7hFbN7gljrsH1mIgVr48QcKRP647iato47P0IoPNA/640?wx_fmt=svg&from=appmsg) 在它们张成平面上的投影，可以非常自然地分解为沿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48sMtRc63pfT60p3Kb0UIgjibNUHe8RwyudUPSfl1PyGVibdQKc0ES3edd7GqVWUX6T1DKLvhd09hYXSBUJSamTgEbOY96lCLfD7oaAwiajx0HQ/640?wx_fmt=svg&from=appmsg)、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7clbKDYmhrdVVSibH3IQ0MtG9qLSsUaVoNBuDO4zpXENWfulGJXUJnluAdkHl0icuKUibTuHUmCSdDE9DX7ia2LiaMdgRxlMcOibeheyPApkNgBa9g/640?wx_fmt=svg&from=appmsg) 两个方向的“独立分量”。

##   

## [Gram-Schmidt](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247495925&idx=1&sn=52bb8bcd6a1da71cb03d9ef558328884&scene=21#wechat_redirect) 如何把普通基变成规范正交基？

在上篇《[格拉姆-施密特（Gram-Schmidt） 正交化](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247495925&idx=1&sn=52bb8bcd6a1da71cb03d9ef558328884&scene=21#wechat_redirect)》，我们做了介绍，再度温习其中讲过的内容。Gram–Schmidt 的作用，就是把一组“普通基”一步步加工成一组**规范正交基**。

你可以把它理解成两步反复循环：

1.  **去掉前面方向的污染**
    
    ，让新向量和前面的都垂直
    
2.  **再单位化**
    
    ，把长度调成 1
    

所以它本质上是在做：

> “先正交化，再归一化”

##   

## 1\. 为什么需要 Gram–Schmidt

假设你手里有一组线性无关向量

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ex43d9b0GibH9X3hibGxcLFcdFZ5QYCg0xpYsQZDN7HFDbMzhY74Jg04a4picE8WuVweXDxh34cfl98PfNXS03A8pQRon04iaHsZfcSwq6T0dTw/640?wx_fmt=svg&from=appmsg)

它们能张成某个空间，但往往有两个问题：

-   不互相垂直
    
-   长度也不一定是 1
    

Gram–Schmidt 会把它们变成

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6bx0mGtWFw0RjH3BfpibdribGhZMafjydf3QHLaWiahRJAOhLUcRnNnQGkKH77JFicCoYVbdoqeFqMD1zibLHnh76fMqMdBdCT6dQ3gMYPE7h7N0g/640?wx_fmt=svg&from=appmsg)

满足：

-   彼此正交
    
-   每个长度为 1
    
-   张成的空间和原来一样
    

也就是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5GhsssEMjRXIJg6GbibZdVOsPwleTg7AImLT92YcskOFWZdicbcn3BovXboqg9lbrITHkYzPB8QAxT9chcBbeZ0ia6aVfsibCfyiam2c5MCWaKQwg/640?wx_fmt=svg&from=appmsg)

对每一步都成立。

这点很重要：**它不是换了一个空间，而是给同一个空间换了一组更“干净”的坐标轴。**

## 2\. 先讲最直观的二维版本

假设平面里有两根不共线向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0tKXWRUYrewndmg1a7x374JuXb8qpl0icoGicrtTX8w6fvuooxVrF9iaia9iaEuTqOOQiaicREvKKsC6YSxpsygfuAiancKzJ8zwndRdIw/640?wx_fmt=svg&from=appmsg)。

我们想把它们变成两根互相垂直、长度都为 1 的向量。

### 第一步：处理第一根

先把第一根变成单位长度：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7W32jqLPNGIhhO3JYyvycsQYOicTEYdaUA4H6VdW48rzxovQyw7qCAoRVgcZvulqb7kK8Cf3uXUp9PicXRHnGLGtO4LDGfGPIorANb648jk9hA/640?wx_fmt=svg&from=appmsg)

这很简单，就是保留方向，只把长度缩成 1。

### 第二步：处理第二根

第二根 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6z6xWZ83QxpWlYuVnRmqmu08FHl423kTx6xpXaXdoLC2eC6GkqJ4mESe0up24eMqLPQ9ytxnVenEzG3rtRTtibV2uasTCsvdlficuT6gmow8jQ/640?wx_fmt=svg&from=appmsg) 往往不垂直于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5cw51Isia5ChtibgsPsfyOXIuCRhMOWsAW37fwRWhLO1zojlfmDGYx5MopXrJ9xG7yibX2RheenaGYoanotWlJDfaicMDduXUrtMAe9axBPlibswg/640?wx_fmt=svg&from=appmsg)。  
所以先把它在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7rlLBz6JOdg69eZTkk7KMrrbQeVqjz7ErUBYfL0BrqgyytuRjwwWvzbaXy61C2bCy10qF1EQI6JXChTZKIj65fEW6XkuTTWGw3CEUrnt0hqw/640?wx_fmt=svg&from=appmsg) 方向上的那部分去掉。

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZWvUDD9amcK0Ejo8KLhF8ibHY9l1RVosKZhocj8jlrxfib4GzKLxHUR6LczLbrO1ALHvOdhQIM81gn3mhpxsU2DicohhA7EqeIqqL2ic5f7G5g/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5kVRWP9RovviahDBbCrOz7nCtH3UpObFLXJu3SibsibKv9ogelA2mNMfKChORjPTNXmOZZz8uibR3orS4AdJJsUAle9xlkZIuk7oCCXLHVxDSyhw/640?wx_fmt=svg&from=appmsg) 上的投影是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM42L4cxvkOMFUSrVQtFGkcMn2fpVs5Qd4Frxevia8AbFOibutCzCgVSicZ2RWRksWDUbvUAuBISYZxnyU7icibTHiaicwBPnlnnefX7HzYoLpoU0RQ8w/640?wx_fmt=svg&from=appmsg)

于是定义

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpWFwKr3TLpic777ZHAuh5s6or5iatNQvOYf5mdk3gv0kEyooGDY8PFTL9U3y5UhgrOd9oSWvAkAICrcbJE864JuxEqE3y8oiczLJA/640?wx_fmt=svg&from=appmsg)

这一步的意思是：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49UGeW1q7sCC4ibtdjVRC7o6RxMuqnaDQpKSuicSVOo98VHvB0LtpYicRQUuulbDualHpcHv9Dia5GJXa4zia0xyeMwwcjw02GusjvEZSd7zFI9NQ/640?wx_fmt=svg&from=appmsg)
    
     原来斜着
    
-   减去它沿 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4jHiclRic54lPvWDOiaL61Gk3d7YAkTCkvRdChuNzPsYUs12TNesSVKyVlbOHWjWWiaZvxmWiauib1MVUGic4q9iasP5VaONyVTO39LnG4eTrStmWAIA/640?wx_fmt=svg&from=appmsg) 的分量
    
-   剩下来的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4d05bFrYWZMMMQP7eDlD6VOEm5ZvB0T6Xp6n4rTYwNK9Rdfg9YLmmRicOOzu5EOxUOzMPiaEC2YedrqTThmPaeDhqwYsg0UciccqQZGBDvyEOog/640?wx_fmt=svg&from=appmsg) 就只保留“垂直于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rEIkiaSbibsnlttmBor5oFHOsuIUtaDA56KcjFP0St1J1HQWibicSW51Mc0nBWniaVIgZBJ8AdcwpmFlNUI2fuZ8X2e8fhQGic2zk6pnibMu12REkA/640?wx_fmt=svg&from=appmsg)”的部分
    

所以此时

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6x9iaXQMpUXWjD5vtyrcUV76jzXEvO8UhKdRSE30htJg8a3CdXAe4iadxwz86U3P7N84RicIXFFBexmwkO8ibCVJHeiaDIJeCWTL5oRxuS8tzFriaw/640?wx_fmt=svg&from=appmsg)

最后再单位化：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4XDrBibU5qzqhKAjLapYjqRBkjf5KccL3UoibNoABokBLCOHLArv5RGNVc4niciblicJXvfIIQyPeBibJI9UzXL4dG51vCGnZvv5jbumQM4xEIZbicQ/640?wx_fmt=svg&from=appmsg)

这样 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MPibbZWhOZuOyzicGHnaRFiasiceDWscfXqDXT86v9lmZUOu66wkPrlYcCvlPrCMFjZELAPLP3t8cLOiaKEGciam0sPDjkjia8zF6vDenOlKcn3lVw/640?wx_fmt=svg&from=appmsg) 就是一组规范正交基了。

  

## 3\. 几何直觉：它到底在干什么

可以把 Gram–Schmidt 想成“做直角坐标系”：

-   第一根向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4I4Awoic9Cau74yMrx921drckicMsMHAebZWTgY4nNVHC7jGaaoCM2gia4IPicVjhFHHsEprjGseUBv9Ya8Mn9pejUmZiaJ0hWO10HiaKAAic5juoYQ/640?wx_fmt=svg&from=appmsg)，直接拿来当第一条轴，再缩成单位长度
    
-   第二根向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4d05bFrYWZMJRpfnrXF0K1sbPTHzTJibD0BvXvKgp0v6ibqDWslSJ5ibglO3aianqQoV9OIIWT26Vqib5fGv60oPibPFfAiaDJRxoVibjr4sPNl36ibMA/640?wx_fmt=svg&from=appmsg)，不能直接用，因为它斜着掺了第一条轴的成分
    
-   所以先把“沿第一条轴的影子”减掉
    
-   剩下的纯垂直部分，拿来做第二条轴
    
-   然后再缩成单位长度
    

到了三维时：

-   第三根向量里，可能混着第一轴和第二轴的成分
    
-   就把这两部分投影都减掉
    
-   剩下来的，就是垂直于前两个方向的“纯新方向”
    
      
    

## 4\. 三维版本最重要

给定三根线性无关向量

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5dLqf0dvXVaAJmiaJdcAicrLjnibKVh3ssFzhMbIka9QgIxhJmXrw7E0j3tXw6SglicA8UiaO8AbTyUjoNTnVoWC75dbokAejJ7tm2BFrTVlNcqCg/640?wx_fmt=svg&from=appmsg)

我们构造：

### 第一步

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QHFfbpJaMPT8uxwfdSHmd8RfuyXICj7hOtPUb9wLJ10Uy7sUm5c1IV7SCz3mGFJCAB9kHTKichwB29GKiamw1ZBSQn1wk8NcqiaLTdT7yhUN5Q/640?wx_fmt=svg&from=appmsg)

### 第二步

先去掉 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7DJf0Hzc3RfMUibewSBSKDWk460EIdRLbj2JKHIrNJMPmHIvUGHeBkRI7CVDE0w91oLYhUEAtDgsENBM44gZaXlqSSXPl38gQwZ4oYPUGkSgA/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4I4Awoic9Cau6D7iaSZcb4bRZJwo8NrcicubXxotv7REhvBG3w5Goqoq0froaOovOR0rptsIEicE138sbZSJyOUwWMZtAdicBMnJQl2yZ2hEVaz7A/640?wx_fmt=svg&from=appmsg) 方向上的分量：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM40mghhVnqppWgibJMpu1LRQvsTCmMns1ib6ibnDzHnO4HITelyicCOpVtQzc2Zz583ENX6Iib8HfQ2YRep56FRqKsSgn3ZHRX5J1Rk7J9VtJhoT4A/640?wx_fmt=svg&from=appmsg)

再单位化：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79Oz4ygqKsEDtNxg6Uf5KGH1n6N3oTC2WQWGhFDcvTk3n4rEia5wmpISz1fzLmQDdE2rfnl8jZGYxGaR1nt5SicK0x3pc6r4ohhMg2cBb0GV4Q/640?wx_fmt=svg&from=appmsg)

### 第三步

第三根要同时去掉在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VlCeKUtqicPTCTBy9sKBkoTTCFXYROgrMf8Uman9CaW7hzSDTmIFlLGibW7iaIq1BnMlNf83icKwOyZiaJicicKC7DF8VCR5QtHj3HvhiciaPzzicMDjw/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6sAz5OWdbfR9ibd7pSPkWn8tqMpdcHtuTfUrc7Gwv4N4K9ibquNA4AQbGzGEz9WF62AKcO4dibQysa1ic8mIl1mYVobZrX36rA1tfIEEr1eiawGSw/640?wx_fmt=svg&from=appmsg) 方向上的分量：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5aNxXaSrGO5DLRbYemK6tPyiajiadJS2kf48cCTjGoPONFghfiaiaTYhibQtKuerFC5QBeEr1jt3SJL0GU6liaH08r6TvhVn7aRzxcic1rIGmT7ibgyQ/640?wx_fmt=svg&from=appmsg)

再单位化：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4r34Xgnpic4ojDEJz3RAibI2fSkzFyUg3hl4nicAHwrzVzmJvg76bfOib7RiabWISCe8dEKnz4KUTlekweV50hrjrVWyJZibPtQdSA5Ek2akekGlew/640?wx_fmt=svg&from=appmsg)

这样就得到规范正交基

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZMQf2pTc8YJdKarggsrGWt8aG6p1x7le61VIKBKdHNMSTrLmbs32BVawHCtsctIDYjwicY5eE9RIDZRbxUNuzJCOs4HeYz1cp7icUTEgORicKQ/640?wx_fmt=svg&from=appmsg)

## 5\. 一般公式

对第 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZMQf2pTc8YJMkha3eggZMlyjtUxcDjdiaqBCeibc1XEnGfq2obN11FAWiaSw6eJoDCHVuuJRDAucHrVZXOTfhZG3qLTicq5e2Fe65peNH7WJo3g/640?wx_fmt=svg&from=appmsg) 个向量：

先定义正交化后的向量

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZCQiaR43Tnboq2PqUrgr6y28eQ3sXibAC7PcNcBz2yzj0lsuKbVbic268sjt9AUwq6xWzmpUFGT2icz73MxibHvBLEoGp49dt3MiaRY20wQkUzj6g/640?wx_fmt=svg&from=appmsg)

然后归一化：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6pHamCPY4RvrIJbg3icVwE3uQgOX0ibia9QZPPFfAeOrAq2VoCZeLyrmMgictGcgDetYtLTVXUpUfEkhTlBmKWf7ia4fJya7ohTsCb0oPgaWVhmfA/640?wx_fmt=svg&from=appmsg)

这就是 Gram–Schmidt 的标准公式。

含义非常明确：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57Oiah5NXCFGfOWG18mDsmTG0OmpHKibqOxpDEHMNIIt0t4b5By0lGEpSJ12lTIw0WyzNrjqAd3A9X7kItxcOticZmPcMQZyY0dp1Vobtk3zBiaA/640?wx_fmt=svg&from=appmsg)
    
     是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZCQiaR43TnbjhgHaMOqwsXIeXHdkic7Fx7XtngUxr72KoicP0xrlDjq9ez8UTM9icflAaBmzu57N4GrKZWtLjB2ctLYOwRCDiaTiaY9coTtSY7RTQ/640?wx_fmt=svg&from=appmsg) 在第 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4icrM9uoutNScmem7Ho9X3XaebzSxbiaFKRkPAvyFnq0JRdLeSKefra9eeltLgMdZPAD8rKRglAFtr7eIRXobEjqIRS40AP10nA8H722pN3UDg/640?wx_fmt=svg&from=appmsg) 个已建好方向上的投影
    
-   把所有旧方向的投影都减掉
    
-   剩下的就是新方向
    
-   再把它变成单位长度
    
      
    

## 6\. 一个完整的 3D 整数例子

我们用一组很适合手算的向量：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5P9zgzkzL90Gc2vLLNclBRDepWsxpxN5xT03U6PZjUSZSKYuF9PZnO0mORM14kQ44EhrvkNsO2Lt0iaQcvHEuBwYDrPscGwLLH6FibGib82LBUg/640?wx_fmt=svg&from=appmsg)

来做 Gram–Schmidt。

### 第一步：构造 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6bx0mGtWFw0UjxEmpRHE4drNJpj9ncseUTe3ekGOIIjic1zStmAFay2CtB4Bc1Ja3EKiaPITqiaMuz41s3SUL43P4oq3Mn5GLQ5QWChBVGGh3Qg/640?wx_fmt=svg&from=appmsg)

先取

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM69NBmOkOibGnPcUtd2EjfpMDmtjSVgf9vFla1uUM0obwicmcs1xbvKb8dCBkzuduIzRcmnUjnYc749vrd0h8RaqDqrZxI9MCQ0RYj2e16aoZ3g/640?wx_fmt=svg&from=appmsg)

长度：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6m1Pnp5X9ib48m1KdGiaichnHfq0YdLT7v3PpCUqTBJOMNxdhc2Iqz1VictFTicwja6qriaDIJoAyds35ZicpicbeUvVCOEP9xR8Fxbrrw5kA4rvYcug/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SRPqic0qia2X1vGWGQOPygp8FXXKBLtKibbRO67XKk7dhU4g9icuzluL2uzG9jwfcxjP3dJLmG6I0ghBgUF6ZfbWJT7XKpEIVRc2cAxGg7AKWbg/640?wx_fmt=svg&from=appmsg)

### 第二步：构造 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ZBo5DU4FNRbOOC0HR52SQpubjXn5l0U66KQnLICUPPtKgPndqklvvgNdicSEJ7nXF3RHDMwbZeuHwKgyGEBM9pyEy7nskAJsDCmNGlQmDHGg/640?wx_fmt=svg&from=appmsg)

先算 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6IISRfPib8zuAqPAyUSwLPnt8PV8YRKGqQa6SvXLEmZDdh7nZHuLH1uick4hpmsumb4T3jwiaPEiajlJO7f0Qfmvz95g69aMmkRe9CC4kakgiaJPA/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59uXhfsorpcq9vILicAv3WmfUs38aBvtNcIiaGMbClhCPFvT6TqnZU7dWf4tLd3F8ibRvK9n8fQgwBaWI7XXkmpeuKmbuQgp0lQCN41OicNyjOrg/640?wx_fmt=svg&from=appmsg) 上的投影系数：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Jp0wN3B2d6xzGOTic8MzS4K2XQuiaTrx0S9YjmQXCr7O8AD1QeRYgictB85ROy1PNNohxHpL5thEoWGxSY43FibcxliaTRpLcEfzQbyTBXKibu41A/640?wx_fmt=svg&from=appmsg)

所以投影向量为：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4gpFy448ovguDhulebibeiaMnDvdgAKLprNGKrlBv4vr9O7Tj9onEYTckBZCB1El7JqQ6KGib2ckvJhZ2lMKQ3iaZV99EYNalM3e5YLB8lrykNGA/640?wx_fmt=svg&from=appmsg)

于是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5c8icKuPZT0pRJcg7xyrQOzQWphfmAT2FeemT1AghLMXjj3UcibXjgakUOabS7E7iarpBiccvU9wKZ0vM6Lu3VAZhw2EfuHdbQvhPmX7g0jTNeCQ/640?wx_fmt=svg&from=appmsg)

现在它已经与 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7diaUuFibYgaMJvbj1hkFiauGoES0DmPv781TVgGIjasicBejbhwSyge1r52VYwjFdTIZGibib26WHicPfYhdA9Em7Ibp2gynhtzkSLH98rAiaseXQZA/640?wx_fmt=svg&from=appmsg) 正交。

检查一下：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaIuk5rGzV3OjDWQtRrzqYszRiaGgcs1pPcbibmr94OiaNCf8LPRospAYcp4k6Z5J3SxQ1ibwGjFOszaDkEAmU8PLxvSGeyM1amu48H1Ekux0KcA/640?wx_fmt=svg&from=appmsg)

长度：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57d2W6B2MFGP1wYCsukLS3UXE8mhjZVQPYHoXA0CsvnDFsicVmek1M6u2rzNrO4coOd7tmLkJr0yfQ2GnGRGQd8p2SgM8dRmfumcp7dOKWy0g/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5gju16GXSGEAibrdWGvGb8HmxibyRQLdUkiaWL0aGaCstltuBR8eiamDG55lpjGz0MXK2S71wiawemNzBwVN6wQ22iawoC0h0hDGPA0DPh6bmwzkOA/640?wx_fmt=svg&from=appmsg)

更好看的形式是乘一下：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IficYiciaibWZCmiccoekFjlupablfwB8GcRTq9nQAGBT2teEcSfWOic6X2soY33jIqsj89hvW9hR0Cnb2dbXsvgya7jbdVTTvgQbjGYO0830GdQg/640?wx_fmt=svg&from=appmsg)

  

### 第三步：构造 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e0Nrdvf4JLyhydw6q5gmR92GUic9iaeEr8iagC6bPwCqI7bBAA0k4BkS6PAF6hXqM59LriaFD9bDLpgAGHJgSjvXQ7E0yYRJibRkK5bxKLvBCIZA/640?wx_fmt=svg&from=appmsg)

先算 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6sIjkibRfAAsgSCgPJmI7gibK5GRxkE561cibFibkW1PicujaHxbZuQIvcMQUibqH5D98cksD0X0OmrswhYHtGRH4Yib3icwiayicE8fZ4Ma7eKicjBFjqQ/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wjtXSqaicgyD0SJr71wuwE8v0pOVY1WPnSWzQsgQq4ueHeiaYM6tkA5ibVRsyWP3TRtBOibD2xmlVPVRGHWefEPM5AUJFib3RAFiarqe6aapXReHw/640?wx_fmt=svg&from=appmsg) 上的投影系数：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0hsx64ZuffibyzBtIaPP4TUtX7MBlgvvrHgcYBEGI7Lb7IQGGzuKtN8P22RgnPSN5rv5uCQzpaCdb0ZmrT95l0TCfyXSpicL9C4w/640?wx_fmt=svg&from=appmsg)

所以对应投影是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6qoneK2uIpTibddWXQaA5cPbxickhXZTBciaXNwTmia0OMUS9FJE6UM4KBsZ5x2nLEOvLVAxicw7YvbiamBfnZ8JO5oHUbYseAXCFVaQ85f5iaibJq8Q/640?wx_fmt=svg&from=appmsg)

再算 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6lKq7OgTLib6icqKVlaRusic6hqBiahTSDpdnEynXctxPc1VjqnB3Pvq7uJyuEGpXAkCWhCG7icicz6jMKmU6uViaSYpEzlG99xJlDibZO14EZwibO2Yg/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5CRUc9ZvGkAseeK2mskSFxP7MXEuT0qqOREIsFVkmMpl0ao05hvUsWeBGicz08cdvcTAxqOGVSRwLPHRS3QAs4GspqAicm54Cfzk2c979X6guA/640?wx_fmt=svg&from=appmsg) 上的投影系数：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47LYKRJWSMibUzjq7J0BUyujHxK6RnnUwpjpK5VibpTvSPHzbqibSSaSzW4MYibzRZaTCtDI1K4DDRMeEH20Fp5oI8E5r2FXxib0uSWA/640?wx_fmt=svg&from=appmsg)

对应投影是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7rlLBz6JOdgibncU0reoVHz7HlfkSmtPJiaB4Rkdl2tc8GcfPF7RPsgXxA00qaTJka3bzTQeptBGNMMQ6YicGAtVdXVJHtVE9IeWfRDvNXNalEA/640?wx_fmt=svg&from=appmsg)

于是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76zynp09iage56mTcArueYcumviarFC15YUic9ibe10viaB8b7xicVO3SYDUavibmahRyLhhs99s7KeCgrwcrMnQticVYXPbsbujNztSpU8afP3xSqYA/640?wx_fmt=svg&from=appmsg)

即

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Asvuw3hPEXXHPpJ1sWU6Nc7wuwuF4nfFdPVBaE8Trp5rMbP89yUxX196JHucQBOo4Gic5wjQhdpo3jeeRPm8mJM3o45eOKjBGUwNia4r4ZuKw/640?wx_fmt=svg&from=appmsg)

先减前两个：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ialnImyE3mpSuIee9GAYSQibtj26sgR6qcyiaO60ibchvmXz2XjYg3XFsGhppTwdwoQXpQy4DTwgkic0GxzFgm7DXEF8aic9N0bUTibRV2nBlUFLrA/640?wx_fmt=svg&from=appmsg)

再减第三个：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EanPsXVBWLct4ZasUOJq704CLeDJya4AtX6icRWfTbkEBVJwXd7XdvYuvPJjAVN0bsXPSs31R8vYcMcqkIS1DsnC7sbic0Cerg7eQwib1GiceBw/640?wx_fmt=svg&from=appmsg)

可以提出来：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57fichicXWqmlA5TvDPvl23bChkThWKibet3ZbJEkvpHqPjpUa7Hdp53QOgmOo0RGibUVEWSjXQcYsXJ0ZLztjwZJ25ib5icZ6G4uweXx5eiaw0zmGQ/640?wx_fmt=svg&from=appmsg)

长度：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QHFfbpJaMPTBptz0oN3k1oMtO59ZggjJ4yoIa61hia4QGY05n4EHpzDzyFE2zgH9f1gCoYO5nnh1CSbcicgZksuEWUKCs1H5aZjuWsYkrhm7w/640?wx_fmt=svg&from=appmsg)

归一化后得到

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiaW8IhMLaK42wjOPTT3H0DePXRJibgYiadPsb2ZMmGmm1TZ6nSyV2zRInOtByZ0xoGQNGvxeVeZcibu630YMrY4hVFgFtH4to8iaAibA/640?wx_fmt=svg&from=appmsg)

##   

## 7\. 最终得到的规范正交基

所以由

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ZBVeyG33Eno5QiapfGvsbdGj3UxH8icPgh3qpF1nuPhTgyCVYkly6cPXeL4j1X526ziaaicVziat3k9y8icnAEXvtWLuyy4ldxicaxWM7O9BPcUIfQ/640?wx_fmt=svg&from=appmsg)

经过 Gram–Schmidt 得到：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4LrbSGAyNks9GxQWw1bZVYB6u7xJ1DeVX8cdToabSIATUgdKpBGd6xT2F9toYFicyhUbiaQ9Z5icYAdJHNyHicUjia3kHq0Ay9E31NASbQWnMISzA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5aNxXaSrGO5OIialo9UIcIMwjKLdmyVwXoL5eku99LkUzAF3zy18FmQqjcSlCfFNgo6FFBIiaMqozWRJgh8jRNrnG7qw8tKKFU9VOFplicrRTZg/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qRjsKeuibb0Ndxwia5uxPm23CEF0Oxk4XOulXibzLezhEzDQ2WO6ticRURBxpicVqe00pqsTD5r3Ol9kicptCNO6BUOmr63b0IrjsOy3Qw98LcXbA/640?wx_fmt=svg&from=appmsg)

它们满足：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoM8f8icZUwGPHqrJtib6FeX3ZbV0ctHcuxFeh8qWtlaOvsGxIiaTjKRIwBbyo1cs0Am2JHzBsrlpCmZP97wNsVBvQBsl5VeE802OQ/640?wx_fmt=svg&from=appmsg)

所以这就是一组规范正交基。

  

## 8\. 为什么它一定能成功

前提是原向量组

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7n6Ln7cXbs1IhvrsGOD3OUbI57MGKGblHNPAAc8QtnwQhJabAecgNv5pQ4qxcPuWGOMcMicpTB8tdtEic3BAEmEHI3SibbV9mvoKms1Y4icNxiaCA/640?wx_fmt=svg&from=appmsg)

必须**线性无关**。

因为如果某一步得到的

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4LrbSGAyNks75ic6SuuEbBe2BHuxLRHg85qD4BwVgAq9uwaE3EGzX0etktJabVfaKjbia356wuz23pebOvuIPoFEJibl7WIII5ZPgPHbd6UWRNg/640?wx_fmt=svg&from=appmsg)

说明 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5akIGuXt0smqiaRzjnm6ank59Sfu85JuT0gibmlljpHWtYqA98LjXIcRrGn3w59mdMTss59HMIZ8Z9YjcteeTxuY4AowNA6GY3e0fYOuPIVNEQ/640?wx_fmt=svg&from=appmsg) 完全落在前面那些向量张成的空间里，没有“新方向”了。  
这就意味着原来的向量组线性相关。

所以：

-   **线性无关**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM53qZ9oGDHY7qmibGqJg6YgZibD37g12gTGURF6lOrVQl9NeMfqBXJJVtqZLkW4MHI4ia2yUQspeHO4bdEE7oxwzPHS7B0YHL5ibJHT6kiarAS2UUA/640?wx_fmt=svg&from=appmsg)
    
     每一步都能提取出新的正交方向
    
-   **线性相关**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68dL51q5BqicY5ibfzH4icrkcpKZqWeO7vlZFGTTRzpvYxJOMibAZ4Ob0ECDZVDlNcGdfEJtdiclzPXLvt3QytTzYib3htBmSSwXfcWl3QPSH5oZZg/640?wx_fmt=svg&from=appmsg)
    
     某一步会卡住
    

##   

## 9\. Gram–Schmidt 的本质图像

它不是“凭空制造新向量”，而是这样：

-   第 1 根：直接拿来
    
-   第 2 根：去掉朝第 1 根的分量
    
-   第 3 根：去掉朝前 2 根的分量
    
-   第 4 根：去掉朝前 3 根的分量
    
-   ……
    

所以每一步都像在做：

> “把旧方向的影子全部扣掉，只保留真正新的那一部分”

最后再把每根都缩成长度 1。

##   

## 10\. 它和投影的关系特别紧

Gram–Schmidt 其实就是**投影思想的连续使用**。

因为每一步都在做：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5aNxXaSrGO5EDSxTibn9wSw1WG0ImE6WVSHZfuwI5TbGmxY6VpXuZoUjquiaeV8uoreXYcRHoibYcbUTSgC84WUn26yo5yTkIO7zsrXDP3PNhsw/640?wx_fmt=svg&from=appmsg)

例如第三步：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4I4Awoic9Cauxbpa0zQYEhN3On9C6WI2AGwON7NGn6DwqXZnTUrz34DekNkC3213GD9bbq3ZDxRrmt4RWuM22KhPA6mJsiamPv8Bsokm56STjg/640?wx_fmt=svg&from=appmsg)

而

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Pe75W7ynn13wBFx0CLsjGicOvua6ia68WgEJIr2Og2vrvGZq3gPL0Uk2xqAduwkLpNZ0ZYtvhaA1h5WR2fhuiaMMRGnmqp8SbHheoyNykka2jg/640?wx_fmt=svg&from=appmsg)

所以 Gram–Schmidt 可以看成：

> 反复从向量里“剥离掉”已经解释过的部分，只留下新的正交信息。

这在数值线性代数、最小二乘、QR 分解里都非常核心。

##   

## 11\. 和 QR 分解的关系

如果把原向量组作为矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM69gdJ0ktiaJZu5TsiaI1mNr7X2CMoIqmyURt9PyGOXmtKgX9eF7WLiarJ4RHuyJw34iauoibtOVWbvh70ubpEfGWg5ibaCGWteaXfAKt54fmsHc59Q/640?wx_fmt=svg&from=appmsg) 的列：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoMqd8GfJw4wDhs9icbHAUG8gKXvicpcAkGc8pyibMq4jiaWTdInNicDTkM8dPJPxHiaMqsPoP2KQdA4Qmmj9C0F5gq7QXF7EqokkN7jg/640?wx_fmt=svg&from=appmsg)

Gram–Schmidt 最后得到一组规范正交列向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4PWqk8VfXjT0qqNUEZY5bCZW2L1nwIVVmicAjBlMoOpkjpianngNWszDhOwgaqDticClCL6nVZD7tyhykhGFG6VJPWB87R08qvLH6NxldoIubLw/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6bx0mGtWFw0XiaHdXPQQ1CIQicD2yLK7YiaCKYwCwbvOnHqDxKoD6eKG7wnLcqfCtrjCcowyuTuhxicrd3Kc0BbN0j3VDVlYxqS4u4VaBoPW4VaQ/640?wx_fmt=svg&from=appmsg)

同时会出现一个上三角矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ceQCHhpYR1EzgzHDk6bedeg8yG1iaJiciaehiapC33TreicPlNP9vV6aqsayp9nT8SbHMiciawkkNxPN15XvdIq22cPiczhic1RGxT3F9dGvGTT2FFZg/640?wx_fmt=svg&from=appmsg)，使得

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Pe75W7ynn128GmiamMWiabibdK5bq8Dxiciaia4p8JjjHLTzkF2onOaGarZesgXNAdrJzAsG0XlYtBrTcvHzjNBMibd0WBFrPluIWjeflz7k5JybUQ/640?wx_fmt=svg&from=appmsg)

这就是 **QR 分解**。

其中：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7g6O3ibDtVkISlQ6HyjdaqI3H0oQkPe5Ioj7TzAqBPFlbMCJlYldT85tsZvssGrGibUNiad2fYH51VDqfuAiciciae0wjCyBkekxWicSsGCicReTCSOg/640?wx_fmt=svg&from=appmsg)
    
     的列是规范正交基
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7FVBe1xZ7ZJ8ibe7iaSZFibRa5mR6MoL3PyHjcTqiagj8tAeMpOibJL5slLhXKJXaDxayNetaMHXuOlcFkCfkRwoe2UV7BSkALwib4LTa52IszaeyQ/640?wx_fmt=svg&from=appmsg)
    
     记录“原向量如何由这些正交方向组合而成”
    

所以 Gram–Schmidt 不只是几何方法，也是矩阵分解算法。

##   

## 12\. 一句话抓住核心

Gram–Schmidt 的核心就是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4aibzbYwowSgh0MT4YMlVaDsXeh7AeVe1KxcH1pLCJ8HlPMMPH0pKZkrj6FjNgtH2Fj0trXBkfscDllYLlNyXGibm5Oia4slQGYJF0KWicndRRdA/640?wx_fmt=svg&from=appmsg)**减投影，得正交；再归一，得规范**

也就是：

-   把旧方向成分减掉
    
-   留下新方向
    
-   再标准化成单位长度
    

##   

## 13\. 最后给你一个特别直观的口语版

假设你要在空间里立三根“互相垂直的标准杆”：

-   第一根杆子，随便拿第一根向量，削成单位长度
    
-   第二根杆子，把它斜着指向第一根的那部分锯掉，只保留垂直那部分，再削成单位长度
    
-   第三根杆子，把它朝前两根的成分都刮掉，只保留真正“跳出那个平面”的部分，再削成单位长度
    

这就是 Gram–Schmidt。