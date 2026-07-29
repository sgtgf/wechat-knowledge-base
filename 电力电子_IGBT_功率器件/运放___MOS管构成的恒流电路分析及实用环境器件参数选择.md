# 运放 + MOS管构成的恒流电路分析及实用环境器件参数选择

原创 电路一点通 2024-11-13 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/-MV5s48oEIe7HVvYg5Up4A](https://mp.weixin.qq.com/s/-MV5s48oEIe7HVvYg5Up4A)

这里使用的  
运放是 LM358  
mos管是2N6755 (Nmos)

想让其能够输出 1A 的恒流 （当然恒流限定了所带负载范围，下面说）

设计恒定电流为：I= V2/R3 = 2.5/2.5 = 1 A  
R2为负载，运放供电电源为15V  

**👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_000_a8b37a87b291.other)  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_001_b09671638e24.png)  
先来看下这个电路的带负载能力，见下图：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_002_6ec4c378fd14.png)可以看出，要想让其恒定输出1A电流，负载则不能大于20Ω，即R2不能大于20Ω，因为受到电源V3 （24V）的限制。想让带负载能力增强，增大电源V3也是一种办法。

正常工作时，电源V3的电压，一部分落在负载R2上，一部分落在电阻R3上，剩下的全都落在MOS管的上  
这里为了使电路能够正常输出1A恒定电流，将R2修改为 15Ω，如下图所示:

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_003_56f285ef6430.png)  
VM1测量 MOS电压 ：6.49V  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_004_fd15fd9d3728.png)

VM2测量 R2电压：15.01V  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_005_0a17c31a9340.png)

VM3测量 R3电压：2.5V  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_006_d4e895a573d1.png)

AM1测量 干路电流：1A  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_007_b3dffdbe3257.png)  
可知：6.49+ 15.01+2.5 = 24 V

_**说明**_  
UGS = 3.66V  
**![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_008_298e9acaa592.png)手册参数**  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_009_569fa7372805.png)

## **实用环境器件参数选择**

承接上文的参数及计算结果现在来计算下各器件功率：

R2 : P = 15.01 \*1 = 15 W  
电阻功率很大，发热厉害，当然这里用的是电阻，实际使用可能是别的非电阻类的负载。是否适用，根据负载额定功率而定。

R3: P = 2.5\*1 = 2.5W  
功率适中，选型需要选择功率电路，首选水泥电阻，功率保留50%余量

MOS: P = 6.49 \* 1= 6.49W  
翻看2N6755的参数手册可以看到，该MOS管参数为：60V 100A,耗散功率为 75W, 此电路中功耗处于正常范围内。实际使用中，如果发热厉害，需要加装散热器。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_010_3cb556ce0a3f.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_011_563be3129d98.png)

## **扩展**

1、当运放的供电电源偏低，比如只有5V的时候，R3两端理论上应该是2.5V的，实际却只有几百mV,此时适当提高运放供电电压即可。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_012_05c1c3034257.png)  
2、有些人可能认为此处的MOS管是处于开关状态，实际上值处于放大状态。

3、适当增加电源大小，就可增加改电路恒流带负载能力，这里将24V 改为 48V  
  
**看下图：**  
带负载能力增加了1倍。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_013_da2d5aae1de6.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运放___MOS管构成的恒流电路分析及实用环境器件参数选择_images\img_014_dc9b39eaee8a.other)

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