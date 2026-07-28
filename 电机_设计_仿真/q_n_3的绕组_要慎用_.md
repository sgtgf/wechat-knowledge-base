# q=n/3的绕组，要慎用！

原创 Mr 晋 玩转电机设计 2024-06-15 17:30 浙江

> 原文地址: [https://mp.weixin.qq.com/s/w-q-waM13DCio2q-Fp3Acw](https://mp.weixin.qq.com/s/w-q-waM13DCio2q-Fp3Acw)

**vision**：**知识无涯，而工程问题有涯****。****死磕问题，紧跟前沿，总结分享。****助力中国电机引领全球！**

  

* * *

**每极每相槽数q的分母为3倍数的分数槽绕组，不能构成三相对称绕组。**  

* * *

最近遇到一个上帝(客户)，他做了一个6极24槽(q=4/3)的永磁同步电机，测试带载性能OK，然后就把模具也开了。但是用户验收的时候，要考核空载三相电流的平衡度，测试结果不平衡度超过20%(验收标准10%)。然后来问：是不是软件排的绕组有问题？ ？？这可把宝宝急坏了。   

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chyBPcQiaz52ib4zfHvp5ZakoTQ7Cgdxq0qOL4mzuKTCrfNToWjw5iaQ2kqYwTaXhnQSn4v6W1T9Cztsg/640?wx_fmt=png&from=appmsg)

然后呢就有了写这篇文章的念，今天就来聊一聊：  

1.  **为什么就不对称了？**
    
2.  **有没有救****，能不能死马当活马医？**
    
3.  **仿真验证****(EasiMotor) !**
    

* * *

**1.为什么不对称？**  

来看一下6极24槽的槽矢量电动势星形图：  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chyBPcQiaz52ib4zfHvp5ZakoTA1j2s8ibxJ0CjSTE2nTMJjOtibibhp263jiaelLicHp9fIMgECSsSRiblKkg/640?wx_fmt=png&from=appmsg)

很明显无法三等分，不能形成对称的60°或者120°相带。  

按正常分数槽绕组规律排列时，每相槽数不等：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chyBPcQiaz52ib4zfHvp5ZakoTTXia9pMzP7eCPtdbiaCjbtHxKP8WrwhL5MX41fBMGrU40ib73Nd4GcrOQ/640?wx_fmt=png&from=appmsg)

必须改进绕组排列方法，使每相槽数相等，且主波合成槽矢量尽可能对称。

6极24槽的q=4/3 ， 分析前半数槽(Z/2=12)共占三个极、九个极相 组。每极所占三个极相组的总和应相等，每相所占三个极相组的槽数总和也应 相等，都为Z/6 。后半数槽为前半数槽极性相反的重复。按此思想 ，排出方案：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chyBPcQiaz52ib4zfHvp5ZakoTyxyenaEsGMw0G9pyknZz4hMUicjjI9yEKrL1fsU8kTpCAO15q7OdEgA/640?wx_fmt=png&from=appmsg)

画出三相主波的合成槽矢量图：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chyBPcQiaz52ib4zfHvp5ZakoTPLmnUWDBr7AUzgGRVCtlzawrPia2hyMibqIpWrpcKHtp0YffM2otQXCA/640?wx_fmt=png&from=appmsg)

从图看出三相仍是不对称的，虽然三相的槽数是相等的。

不对称绕组所生的磁势具有以下两个特点：

1.  三相合成磁势中，除主波和次数为主波整数倍的高次谐波磁势以外，还可能有一系列次数比主波低的低次谐波，和次数为主波分数倍的分数次谐波。
    
2.  三相结合磁势的各次谐波除正转分量外，还可能出现反转分量。
    

* * *

**2.有没有救？**

有，对称化。

主波的负序分量使电机三相电流不对称，应尽量削弱，使 之“ 对 称化 ”。第一个方法是使个别槽减少匝数或空槽。

第二个方法是使后半槽数的矢量不是前半的重复 ， 则有可能将主波槽矢量调整到负序分量最小，但这时存在一系列偶次谐波。

* * *

**3.仿真验证**

用电磁仿真软件**EasiMotor**建立电机模型，

首先仿真三相槽数相等的模型：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chyBPcQiaz52ib4zfHvp5ZakoT7ZicFWrZb8e6YIJxMAd5r3L1da7ljKSzUxoicibMuprfxWRjAicyNNHia2g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chyBPcQiaz52ib4zfHvp5ZakoTldiaxLXnp3yFgJ1pJM0c9L44oAF2fO7JOrRAyKuyhnlm9MEHLejZqsg/640?wx_fmt=png&from=appmsg)

反电势，三相波形不对称，畸变的情况不一样。  

**轻载电流：**  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chyBPcQiaz52ib4zfHvp5ZakoTLJz8FdXELy2AwPmjyicuDaz3xT85Lib5Ym5N8QaqFFzIQe6ym2tib5icMg/640?wx_fmt=png&from=appmsg)

三相轻载电流的不平衡度比较大。

* * *

**改进方案仿真**

采用了**方法一**中的‘空部分槽’，把A、B相中2的两个相邻排线去掉1个，模型如下：  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chyBPcQiaz52ib4zfHvp5ZakoT6c9efxnk1owDKQBVgmXdGm2YnJvaIf469tnfTVO5PGmpYHAhicLORUQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chyBPcQiaz52ib4zfHvp5ZakoTC7o9LEicFP5vfbdibiaDF1CVSS1xTKnczSDoJicP0fqDubTxS4AMcIfwzg/640?wx_fmt=png&from=appmsg)

A、B相反电势比较对称；由于C相没有空槽，C相的反电势偏大。

**轻载电流：**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chyBPcQiaz52ib4zfHvp5ZakoTibASKtNldpEibHOwro8ou4GctJ6UXkzg7OSg6HDUNz8VqeaSKIE7OQhQ/640?wx_fmt=png&from=appmsg)

三相轻载电流的不平衡度减小至10%左右。

仿真验证了方法一是有效的，能在一定程度上减小不平衡电流。但和对称的绕组相比，电流不平衡仍然很大。所以在实际项目中，要尽量避免使用每极每相槽数q的分母为3倍数的分数槽绕组。

* * *

_参考文献：_

_<不对称绕组的分析>，黄士鹏  
_

_<不对称绕组的磁势谐波分析>，汤蕴璆_  

* * *

**欢迎留言讨论！**

欢迎推荐优秀文献、国内外电机最新资讯！

欢迎投稿分享！

  

长按图片，识别二维码，关注我哟

  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwnM0Q7kianI9ClktRZuNyJs53Q2Irp5aup8son3fVl5riaoG8hUfkTasQTtiblqczsqHpDOibG7Qx6Qg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)