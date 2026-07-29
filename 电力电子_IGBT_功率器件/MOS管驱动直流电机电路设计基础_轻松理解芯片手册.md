# MOS管驱动直流电机电路设计基础，轻松理解芯片手册

原创 电路一点通 2024-10-24 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/EUQwjTAbzoVeoeBEHNEBpg](https://mp.weixin.qq.com/s/EUQwjTAbzoVeoeBEHNEBpg)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动直流电机电路设计基础_轻松理解芯片手册_images\img_000_c74a9c791803.png)  

本例以驱动继电器为例，来讲述相关电路设计，MOS管选型，以及看懂芯片手册。  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动直流电机电路设计基础_轻松理解芯片手册_images\img_001_e8e3107f7caf.png)**👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动直流电机电路设计基础_轻松理解芯片手册_images\img_002_a8b37a87b291.other)

## **驱动电路如下图**

D1作用是泄放继电器的反向电动势  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动直流电机电路设计基础_轻松理解芯片手册_images\img_003_2dac4db656d9.png)

## **继电器参数**

24V继电器 电大负载25A/250VAC，线圈电阻640欧。  
简单计算一下，流过线圈的电流为37.5mA。  
这里有个背景知识，继电器的线圈为感性负载，在通电和断电的瞬间，会产生反向电动势，通电时这个电动势与电源方向相同，上正下负，电源可以吸收绝大部分。  
  
断电时这个电动势与电源方向相反，下正上负，此时二极管D1导通，将这个电动势短路泄放掉。对于低压电路，二极管用1N4007就可以了，耐压1000V，电流1A，便宜好用。讲究的可以用快恢复二极管，性能更好些。漏电流略大，此处可以忽略。  
  

## **MOS管（以下统称芯片）选型**

这个MOS管的选型很简单，关键参数只涉及电压和电流即可，其他可不作考虑。  
  
耐压：1.2~1.5倍电源电压或更高  
电流：5倍工作电流妥妥的够，即150mA以上足矣。  
功耗：一般管子的Rds只有几十毫欧，功耗肯定满足需求。  
开关频率：这个不用想，肯定够，继电器的动作频率不可能超过100Hz，什么管子都够。  
  
在元器件商城按销量排序，然后往下拉，找个价格，品牌都能接受的就行，比如下图这个。N沟道的一般比P沟道的便宜，这个选型时要注意。  

## **查看芯片文档，以确定参数匹配。**

对于今天这个应用，芯片第1页的信息就足够了，30V，5.2A，27毫欧，可以满足需要。  
SOT23封装，也很小，省电路板空间。尽量选贴片元件哈，这样在批量生产时可以降低成本。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动直流电机电路设计基础_轻松理解芯片手册_images\img_004_35e16c553e04.png)

## **为什么要看英文文档**

很简单，因为芯片厂家提供的一般都是英文文档，哪怕是国内的厂家也是这样。  
  
有些工程师的英文水平不好，很不愿意去看英文版的芯片手册，尽量去网上找别人翻译好的中文文档。我最开始也是这样。但是逐渐发现，这些翻译的文档，除了原厂提供（比如TI在这方面做得很好），一般来说都是比较旧的，而且经常词不达意，手册也不全，到后来就逐渐变成了去看英文手册。  
  

## **快速看懂芯片手册**

芯片手册一般分成几个部分，次序不一定相同，但基本都包含以下几个部分：

## **简要介绍**

第1页一般是芯片的简要介绍，会说明芯片性能，关键参数，封装，以利于工程师的快速选型。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动直流电机电路设计基础_轻松理解芯片手册_images\img_005_35e16c553e04.png)

## **目录**

接下来就是目录，这个没啥好说的，就是让工程师快速定位到想要找到的具体细节。比较简单的芯片就没有这个。比如今天讲的MOS管就没有目录

## **引脚说明以及典型应用电路**

引脚说明上图就有了。  
对于多脚的芯片来说，一般都会有，对于三极管，MOS管这类简单的元件，一般是不带应用电路的。

## **极限参数**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动直流电机电路设计基础_轻松理解芯片手册_images\img_006_5999da0a55bf.png)

**简要说明一下：**  
VDS 漏极和源极的最大电压30V  
VGS 栅极和源极电压最大±12V  
漏极电流：最大5.2和4.6A，分别对应不同的温度  
漏极最大脉冲电流：20A  
最大功耗1W  
存储温度范围：-55 to 150  
工作环境温度：-55 to 150  
简单理解就是，超过这个范围，元件就会坏，所以一定不要超过这些规定的值。

## **电气参数表**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动直流电机电路设计基础_轻松理解芯片手册_images\img_007_84d28c39a681.png)

这个表就包含了最基本的参数，比如电压，导通电阻，栅极开启电压，各个极间电容等等  
可以仔细查一遍，以后再看就一目了然了。

## **图表**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动直流电机电路设计基础_轻松理解芯片手册_images\img_008_0b82efef7e9b.png)

相关参数并不是一个恒定的值，而是随着其他参数的变化，自身也会变化的，厂家就用一些图表把这些变化表示出来。看一下横轴和纵轴，再看一下粗体字的说明，也就明白了。

## **封装以及Layout**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动直流电机电路设计基础_轻松理解芯片手册_images\img_009_203ed8bb2225.png)

第1行说明了封装是SOT-23，每个包装是3000/卷。  
右下的表给出了元件各个部位的尺寸参数，左边是公制单位（毫米），右边是英制单位（英寸）。  
在  
本手册并未给出Layout建议，我找了一个别的MOS管的手册截图，如下：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动直流电机电路设计基础_轻松理解芯片手册_images\img_010_71758249faa7.png)

每个尺寸都有2个数值，上面的单位是英寸，下面是毫米。  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动直流电机电路设计基础_轻松理解芯片手册_images\img_011_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

-   [电路识图从入门到精通-PDF（312页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)
    
-   [模拟电子技术基础(第四版)习题解答-【PDF资料】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522132&idx=2&sn=3a85b0179382987c337a49049f5f0bd7&scene=21#wechat_redirect)
    
-   [看图学集成电路选用检测与查用100问(pdf 302页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)
    
-   [反激开关电源基本原理和电路拓扑](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)
    
-   [实 用 电 路 手 册（pdf-661页）-设计参考、维修学习](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)
    
-   [图解电子电路一点通（297页）.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525041&idx=2&sn=c820aa21927ddca45445f7da84bd0ea5&scene=21#wechat_redirect)  
    
-   [电子工程师必备-九大系统电路识图宝典.pdf(702页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)
    
-   [19种常用驱动电路设计及应用（电子版）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247529502&idx=2&sn=b35abc3b8294b8edc89daa264cb38987&chksm=fcef977ccb981e6ae3c739547627682d34206a98e9f36f2f63a36a56d9dd94bacef74b2043a7&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [常用电子元器件识别与检测（166页）.ppt资料](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)  
    
-   [PCB设计参考:《PADS电路板设计超级手册》.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
-   [开关电源环路设计与计算（45页）PDF-文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523296&idx=3&sn=3925f514288c3e99de2dcf1ac487edc8&scene=21#wechat_redirect)
    
-   [华为2024届校园招聘【硬件开发/设计工程师】试题-附答案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&token=1172852034&lang=zh_CN&scene=21#wechat_redirect)    
    
-   [常用接口设计和ESD保护(PDF-82页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523952&idx=2&sn=fac1a461d467325de86d1f531ca296c9&chksm=fcef7d12cb98f404b7b1dc90a93edc36a17f244f1a2d0122d78527eb5525b77e4979c7aebf7f&token=110640857&lang=zh_CN&scene=21#wechat_redirect)  
    
    
-   [9天练会电子电路识图.pdf资料（302页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)
    
-   [模拟电子技术基础(完整课件)654页-各种放大电路性能比较](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526370&idx=3&sn=329b28c7ac8bc14214172aa4b516238c&chksm=fcef8480cb980d96b5b17dbe82004e9c9e5f4957a26f47909c9a1338a1bc4dda8cf56ba929d3&scene=21#wechat_redirect)  
    
-   [最经典MOS管电路工作原理及详解（pdf-55页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524410&idx=2&sn=6dc304cc94fa073140fff4c4064a564f&scene=21#wechat_redirect)
    
-   [【华为】防护电路设计规范\_55页.文档资料](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526095&idx=2&sn=ff04ea11c31770ed3bc332890882e82b&scene=21#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526095&idx=2&sn=ff04ea11c31770ed3bc332890882e82b&scene=21#wechat_redirect)[最经典MOS管电路工作原理及详解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524410&idx=2&sn=6dc304cc94fa073140fff4c4064a564f&chksm=fcef8358cb980a4e18bf95201f656b857dfeff63361746c65d100d8bfe3b50cf30e04ef547e8&scene=21#wechat_redirect)
    
-   [电源管理指南（85页）-PDF文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526188&idx=2&sn=ee200bc28f2bc43342f9ebae5c6391ce&chksm=fcef844ecb980d58f5ff41e1efe8e6ecb337b0183a0f17835c9391c89c62596471f6bd6e0126&scene=21#wechat_redirect)    
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分