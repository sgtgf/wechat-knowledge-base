# p型自适应有限元实现


> 原文地址: [https://mp.weixin.qq.com/s/RkiWvsS0hYiW1kaFAc9\_9A](https://mp.weixin.qq.com/s/RkiWvsS0hYiW1kaFAc9_9A)

**简述**

在很多工程物理的有限元仿真过程中，网格剖分是一个难点，得到适合模型的最优网格更是难上加难，自适应有限元则是解决方法之一。

自适应有限元有很多分支，大体上可分成：h型自适应，p型自适应，hp型自适应，r型自适应，本次要介绍的是P型自适应有限元的实现。

p型自适应：在不改变网格的基础上，改变每个网格单元的阶数来实现提高数值解的精度。有文献提及：_“p型虽然不如h型更加的直观，但是在收敛效率上通常由于h型自适应”。_

这篇文章的边值问题沿用一维电磁波的在介质中的传播规律，具体有限元推导部分可以参考：“[自适应有限元技术:一维电场衰减数值模拟](http://mp.weixin.qq.com/s?__biz=MzkwNzUxOTM2NA==&amp;mid=2247483839&amp;idx=1&amp;sn=e2f7a7363e057ae988054c5d83e180cb&amp;chksm=c0d6b554f7a13c420b5667c418d2d0fe4e40b4192beffb78b7c46052cf66476163a0a24ded5f&scene=21#wechat_redirect)”、“[一维混合高阶有限元详细实现过程](http://mp.weixin.qq.com/s?__biz=MzkwNzUxOTM2NA==&amp;mid=2247483782&amp;idx=1&amp;sn=51f39dd80e76b688a32179284661d1c1&amp;chksm=c0d6b56df7a13c7bb6f4fad42dd7aed814ccb532057dff93ef767f70cee15712f304a85cd228&scene=21#wechat_redirect)”，本文主要介绍p型自适应部分。

**1.自适应有限元流程**

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhb4BdNNI2L7cZW13tOdBSN5aj4zd4bM4bs9DCsB3TkR028yaZ4e0Iyw/640?wx_fmt=png)

其中重点是三个部分：有限元模拟，后验误差估计，网格优化。

对于一维p型自适应而言，网格优化体现在每个网格上的阶数，根据后验误差与给出的策略即可，不需要改变网格本身。

该边值问题的有限元数值模拟部分的详细实现过程请参考：“[一维混合高阶有限元详细实现过程](http://mp.weixin.qq.com/s?__biz=MzkwNzUxOTM2NA==&amp;mid=2247483782&amp;idx=1&amp;sn=51f39dd80e76b688a32179284661d1c1&amp;chksm=c0d6b56df7a13c7bb6f4fad42dd7aed814ccb532057dff93ef767f70cee15712f304a85cd228&scene=21#wechat_redirect)”。

后验误差这里采取基于残差的后验误差，其基本原理是数值解带入到原边值问题中所得到的残差即可评价该网格的精度是否满足要求，关于后验误差更加详细的内容可以参考：“[自适应有限元：几种常见的后验误差](http://mp.weixin.qq.com/s?__biz=MzkwNzUxOTM2NA==&amp;mid=2247484119&amp;idx=1&amp;sn=23f18ffc9ffd003fdfeb62c7cb7ac94b&amp;chksm=c0d6b63cf7a13f2aad8632a6deb900ad9431c21e55ab046ddddd7a2a294ae2c9ad6401b850fb&token=605460253&lang=zh_CN&scene=21#wechat_redirect)”。

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhM2zpULibhPQDmgYaXwKiaEhCbVExXucXN5QKXtNBZXBsIGYlyiaFP2UTQ/640?wx_fmt=png)

根据上述公式，对于理论解情况,r是等于零，而对于离散求解的数值解，r一般情况是非零的，这就提供了每个网格解的残差，即可得到对应物理问题在当前网格阶数下的误差情况。

这其中有个关键点是对数值解求取两次导数的技术，对于1阶有限元而言，一次导数为常数，二次导数即为零。这个问题在高阶的情况不用过多纠结，当为高阶的时候，二次导数自然不等于零。    

这里展示二次导数的具体推导，同样给出基本的线性基函数：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhWHP5PXOzicQad16ibexD2lfuPoFlFSMDff099JZQSDeBwV2NhrhpjPjg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhsJLkzyribMHfefBLNibjyTfYnicQ2gT4jEFwxo44cpOgRJUKnibJg5Ckiaw/640?wx_fmt=png)

1阶叠层基函数与一次导数、二次导数的表达式：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhTRbkEXH6rnyW9vaUlwgOOia6fcJDLvvxFVxPicuJxzOrxfMfcbHj7TbQ/640?wx_fmt=png)

2阶基函数则添加：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhFEMMGAosKufbhV3pORDFy3jgWCs9Fb6ic6VEVq64DX9bjx5JVQwaIlQ/640?wx_fmt=png)

对于3阶基函数，的第四个基函数为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhANqibKRgUYY10qnvN1UVtp6FNERV0DlRB0fVTVabPdUlhibRL0bt1ZFg/640?wx_fmt=png)    

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhicPEXUQfGQdgmdMfNewzVHv3mnZ6PPn7vOjuicMzZDv08upbbDqgeVgQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhWPDibZ3lxRjkhkdewdsOGg2ic8XnXyn8I8ZNP9yxMDh0l3MFYmm3oib6w/640?wx_fmt=png)

N阶基函数的通式表示为：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhHED2kh2flgSzsezZ5AhoO1As43iaODAyIDx12Pw01XK3iacWNCushl4A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abh6af2sV1eDnKLjqhCZjViaabJoZnjwMtwQpklUiatSTHWX77SngicAfaKw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrPKyJEB8iaFA3B5ic75oRbdGx4XHotaDxibvrCd6qJNJohploOL50y14AXFPUAwDZLluoDXPuRSibc0w/640?wx_fmt=png&from=appmsg)

对于初始网格的阶数选定，均为1阶，然后选择误差较大的一半进行加1，直到所有网格精度均满足要求。

退出自适应迭代标准：选择连续两次迭代变化结果，二者数值结果的误差变化量小于给定范围，即可满足要求，公式如下：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhf0fmX1kibCU8x56CrRVF7aMUiama1EXDmbJX1oUItaoy7iav6F1ssczHw/640?wx_fmt=png)

**2.测试结果**

_Eg1：模型参数_

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abh9RjEwHhibIGicl4qRg0mn3gNoFrntRehMocciaNJ2cq8M3pvtwF9EQBtA/640?wx_fmt=png)

自适应最终结果如下：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhusNzkpb3tDaNluqOFeK8yRTBbOcmmkbmFMaibqnGaImeMmS3EvPSACA/640?wx_fmt=png)

单元残差与单元阶数如下：    

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhT4IGa9bYCPOdVwTc7bzncurTV9dBaAKumANp0LjBQ5y4fZK7CYG4Mg/640?wx_fmt=png)

_Eg2:介电常数为0的情况_

     ![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNrPKyJEB8iaFA3B5ic75oRbdGatwWNQXdeJKIhFnNF2gAIomZz1wJTbJYicgWb8unMLJcfxoeiaAI1Y8w/640?wx_fmt=png&from=appmsg)

自适应结果下的电场如下：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abh85UksIWv3bXhy05Wib8psFOXNr30N4LfAGpeqWaeqVW7lEQH9TU6D4g/640?wx_fmt=png)

单元误差与单元阶数如下：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhPuV8nibrdH89H9qQ91JLNSd81epBu8mY3Ksw9pp2W14qKnw1iaF2WSWw/640?wx_fmt=png)

_Eg3:设计一个电导率变化的模型，中间存在相对高导的区域，结果如下：_ 

  ![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhdThxr74NvnXM78d7lKrAQocnNQccF24ia41KGojlJhiaDr5qqZSjPwbg/640?wx_fmt=png)

自适应结果下的电场如下：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhy9B8zATjibfWCvXVt4CUBsZCrX8KV8z9WWhJWBa8TH2ibhpKX8GzVCTQ/640?wx_fmt=png)

单元误差与单元阶数如下：

              ![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNp21uicBjgWWbV2ctHPo5abhxqEuibm6S0ibk8IsKhUucFVYdibibx827JRUVIeAcrlBWeM0Wsqq28diaCw/640?wx_fmt=png)

测试各个模型后，自适应阶数的效果还是比较显著，呈现阶数越高，精度越大的态势。并且在变化区域大的地方阶数会高于阶数低的区域。

**3.结论**

实现了一维的P型自适应有限元，由于其一维的原因，不需要对阶数不同单元进行处理，所以其关键在于后验误差的获取和退出迭代标准的判断。

本次选择的后验误差与标准，从简单模型的效果上看不错的，在变化大的地方进行了阶数明显要高于变化小的区域。

一维的p型自适应有限元相对容易简单，这里也仅仅是抛砖引玉，对于二维、三维而言，考虑的因素更多，尤其是均匀网格有时候难以满足要求，对于ph型自适应，加密网格的同时再进行阶数优化可能会是更好的选择。