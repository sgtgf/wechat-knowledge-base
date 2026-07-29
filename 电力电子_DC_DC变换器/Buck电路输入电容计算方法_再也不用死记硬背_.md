# Buck电路输入电容计算方法，再也不用死记硬背!

原创 电路一点通 2024-11-13 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/hB7gfiKDKgyi9boZGDTn7g](https://mp.weixin.qq.com/s/hB7gfiKDKgyi9boZGDTn7g)

 本文详细介绍了DCDC转换器中输入电容的选择依据，包括电流参数和电压参数的计算。通过纹波电流的有效值公式推导，指出占空比为0.5时输入电容纹波电流最大，并提供了输入电容的选择原则。同时，分析了输入电压纹波的影响，考虑了电容的ESR，给出了纹波电压的计算公式。最后，总结了电容选型应注意的要点，强调了实际应用中电容寄生参数的影响。

**👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_000_a8b37a87b291.other)  

  在进行DCDC设计的时候，我们根据芯片手册看到的输入电容选择如下图所示，那么到底都是怎么来的呢？

                             ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_001_c5d158a2c0dc.png)

# **电流参数计算**

Buck电路中**输入电容纹波电流的有效值计算公式**推导过程如下： 

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_002_3fc05ca456d9.png) 

根据上图可以得到如下公式： 

 ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_003_5fd7ebb2feaf.png)

根据BUCK电路占空比公式： 

                                                   ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_004_d46f628c68b1.png) 

能量守恒定律: 

             ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_005_7c769db33f53.png) 

所以，可以得到如下公式： 

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_006_2e6fcb8b3e3d.png)   

将①③代入②得： 

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_007_ca2bed073dca.png)

由有效值的积分公式，可以得出输入电容的有效值电流计算如下：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_008_26f1dc68a3cc.png)

 由上述公式可知，当![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_009_6e22c24bbb8b.png)

也就是占空比D=0.5时， 输入电容纹波电流最大，此时：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_010_74a456134066.png)

输入电容：选择RMS额定电流大于最大负载电流的即可。 

# 电压参数计算

      不仅要考虑输入电容的RMS电流，还要考虑其对输入电压纹波的影响。由于一个周期内，电容的充电电荷量和放电电荷量必然是一样。为了简便计算，对充电过程（也就是上管断开，此时电源只对输入电容进行充电）进行分析，因为此时充电电流就是输入电流，为_I__in_。根据电荷量计算公式，可以得到如下公式：

                   ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_011_27182b339172.png) 

其中，  
**_∆_****_V_****_in_** **为输入电容两端允许的最大纹波电压。**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_012_8fe3e43764ad.png)  

将③⑤代入④可得到纹波电压计算公式：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_013_83c9ebe78701.png)

 Ps：这个就是文章开头所示datasheet里面给出的计算公式。

代入之前讨论的最恶劣的情况_V__out__\=0.5__V__in_后，得到：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_014_88d1c4e93eae.png)

其中，![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_015_bccc156a1594.png)为开关频率，![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_016_dc76aee5b1d0.png)为输出最大电流。此时的![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_017_a9c76ce1dc89.png)为最小值。实际取值最好不小于计算值。

 由于实际使用的电容都不可能为理想电容，必定会带来一些寄生参数。如果将ESR代入考虑的话，分析如下：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_018_09917e153899.png)

由于实际使用的电容都不可能为理想电容，必定会带来一些寄生参数。如果将ESR代入考虑的话，分析如下：

当上管断开时，ESR上面产生的压降是恒定的，为：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_019_d95e62eb5a87.png)

 当上管导通时，ESR上产生的最大压降为：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_020_db4a3f615f9d.png) 

  

则一个周期的ESR纹波电压为：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_021_67d6cd32c8ea.png)

已知：

                                  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_022_574822d215bf.png)

 ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_023_701be19c3d75.png)

将⑦⑧代入⑥得到由ESR带来的输入电压纹波为：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_024_6b7148b547a9.png)**通过以上分析，电容选型需要注意以下几点：**

 ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_025_f53b3dce5da6.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路输入电容计算方法_再也不用死记硬背__images\img_026_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

-   [汽车各传感器工作原理及排查步骤大全](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247493395&idx=1&sn=3b36eea34dd9b509bf0a75692be51629&chksm=c33d9faff44a16b993e0f2707214f3f62f3d8d002bc50a54a7d8658a049d37be409a8879955b&scene=21#wechat_redirect)
    
-   [宝马新能源汽车核心三电系统技术，很普通却又自信？  
    ](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247495977&idx=1&sn=bae760efc0b62a32396cc04d8c265da0&chksm=c33d8995f44a0083b1d6469190d6690e80f8cfec5492cb7d608c7c99289d34585d51e824ae1d&scene=21#wechat_redirect)
    
-   [新能源汽车常见故障诊断与维修PPT](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247495977&idx=2&sn=eff2dabd2ec38e571c7e13262ad7d770&chksm=c33d8995f44a0083d265f224059c0c5a52d0c9e223dd47d66410c8d69e36433614d787e64f4e&token=1114010272&lang=zh_CN&scene=21#wechat_redirect)
    
-   [大众发动机EA211和EA888高低功率版本差距？](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247496865&idx=1&sn=7781a23b7f121e106aa459dfa87a0b8c&chksm=c33d8c1df44a050b221a4c404b9a6ca2e64d19f11ffa727ec53111b7b2a2c5b35a1e3c3fc50e&scene=21#wechat_redirect)
    
-   [新能源纯电动汽车整车控制策略ppt](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247496140&idx=2&sn=657734200341171606fdb2ec67186f00&chksm=c33d8970f44a00667d9aecea990bdc04e44b06fa30cde82b4aee366ac949501f7be407bc91b5&scene=21#wechat_redirect)  
    
-   [👉汽车资料汇总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247494580&idx=1&sn=ee5d4200137e3cbcc5af7c11ae4c0cbc&chksm=c33d9308f44a1a1eb9299dd0a30b6b543efcb05577de8cfba2cab4d33c7d3297edb33b512f92&scene=21#wechat_redirect)
    
-   [反激开关电源基本原理和电路拓扑](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)
    
-   [实 用 电 路 手 册（pdf-661页）-设计参考、维修学习](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)
    
-   [图解电子电路一点通（297页）.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525041&idx=2&sn=c820aa21927ddca45445f7da84bd0ea5&scene=21#wechat_redirect)  
    
-   [电子工程师必备-九大系统电路识图宝典.pdf(702页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [常用电子元器件识别与检测（166页）.ppt资料](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)  
    
-   [PCB设计参考:《PADS电路板设计超级手册》.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
-   [开关电源环路设计与计算（45页）PDF-文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523296&idx=3&sn=3925f514288c3e99de2dcf1ac487edc8&scene=21#wechat_redirect)
    
-   [华为2024届校园招聘【硬件开发/设计工程师】试题-附答案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&token=1172852034&lang=zh_CN&scene=21#wechat_redirect)    
    
    
-   [模拟电子技术基础(完整课件)654页-各种放大电路性能比较](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526370&idx=3&sn=329b28c7ac8bc14214172aa4b516238c&chksm=fcef8480cb980d96b5b17dbe82004e9c9e5f4957a26f47909c9a1338a1bc4dda8cf56ba929d3&scene=21#wechat_redirect)  
    
-   [最经典MOS管电路工作原理及详解（pdf-55页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524410&idx=2&sn=6dc304cc94fa073140fff4c4064a564f&scene=21#wechat_redirect)
    
-   [【华为】防护电路设计规范\_55页.文档资料](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526095&idx=2&sn=ff04ea11c31770ed3bc332890882e82b&scene=21#wechat_redirect)
    
    

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分