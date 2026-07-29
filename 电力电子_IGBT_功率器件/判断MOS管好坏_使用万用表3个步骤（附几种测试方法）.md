# 判断MOS管好坏，使用万用表3个步骤（附几种测试方法）

原创 电路一点通 2025-02-11 12:03 广东

> 原文地址: [https://mp.weixin.qq.com/s/k5ENzIdbU5RCf6C8-ndxfg](https://mp.weixin.qq.com/s/k5ENzIdbU5RCf6C8-ndxfg)

判断MOS管的好坏的方法，对于购买了二手MOS管的情况，或者部分MOS管损坏的情况下，是比较有需要的。  

在测试MOS管时，有几个关键注意事项需要牢记：

-   1\. 确保输入电源满足或超过MOS管的阈值电压要求。
    
-   2\. 漏极电压和栅极电压不应超过MOS管的击穿电压。
    
-   3\. 选择合适的限流电阻为LED供电。
    
-   4\. 在连接中始终使用栅极源电阻，以减少噪声并帮助器件寄生电容放电。
    
-   5\. 在MOS管栅极处使用低阻值电阻。
    
-   6\. 使用测试电路时，确保采用低侧开关电路，以确保MOS管的正常工作。
    

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_000_62769cacb46c.png)

  

一些情况下，这种表面有烧毁痕迹的MOS管很容易判断为已损坏

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_001_5e399de3df61.jpg)

  

但另外一些情况下，只能通过万用表来判断MOS管 ，这里以N沟道MOS管来举例说明如何判断

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_002_b5315f086390.jpg)

## 第一步

使用二极管档位来测量MOS管，多数时候导通电压应该在4.5-5.5V之间，负极接D引脚，正极接S引脚

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_003_69d8d561409a.jpg)

如果导通电压过低或者接近0，那么说明已经损坏

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_004_69fbaae804b7.jpg)

  

  

## 第二步

测量D和S之间的电阻，如果不是无穷大说明有损坏

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_005_0c1d9492d8a6.jpg)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_006_6baf407ede48.jpg)

##  第三步

给G极通电，设置在5V-12V，然后测量有没有完全导通，如果有很大的比如5欧姆甚至以上的电阻说明有问题

 ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_007_62769cacb46c.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_008_7d4bc6c3d154.png)

  

 **延申阅读：****另外几种测试MOS管工作状态的常用方法：**

1\. 使用万用表进行二极管测试：这种方法利用MOS管内部的体二极管来评估其工作状态。对于NMOS管，体二极管从源极到漏极，而对于PMOS管则相反。通过测量二极管的正向和反向偏置电压，可以判断MOS管是否正常工作。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_009_b43e602fe3d6.jpg)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_010_a6cd79a224b5.jpg)

2\. 电阻测试：当MOS管的栅极没有触发脉冲时，漏源电阻应该很高。通过测量漏源之间的电阻，可以判断MOS管是否有故障。使用欧姆表或万用表进行电阻测试，并与MOS管的数据表进行比较，以确定其工作状态。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_011_5e74a544f26b.jpg)

3\. 连续性测试和蜂鸣器辅助测试：使用数字万用表的连续性模式，通过听取蜂鸣器的声音来判断MOS管的连通性。如果蜂鸣器响起，则表明MOS管存在故障；如果蜂鸣器保持静音，则MOS管状态良好。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_012_f79c3fac162e.jpg)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_013_c044a2e562ce.jpg)

4\. 组装测试电路：通过搭建简单的测试电路来评估MOS管的工作状态。根据MOS管的类型（N沟道或P沟道），观察LED的亮灭情况来判断MOS管是否正常工作。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_014_995c540fc246.jpg)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_015_da61dd1d3c2d.jpg)

[![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_016_4955e1d116e1.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_017_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

MOS管是电子电路中常用的半导体器件，具有高输入阻抗、低噪声、高频率响应等优点。判断MOS管的好坏还可以通过外观检查、电气性能测试和使用注意事项等方法进行综合判断。选用合适的驱动电路、注意散热问题、在使用多个MOS管时注意相互影响和配合问题，以及在电路调试时注意参数指标是否符合设计要求，是保证电子设备稳定性和可靠性的关键。

  

  

  

**热点文章推荐**

-   [**嵌入式常用硬件电路设计及分析（通信）  
    **](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539099&idx=1&sn=a0efeeb663e20106f8956101def5f0bd&scene=21#wechat_redirect)
    
-   [**这几种开关电源电路图、工作原理图,才是了解开关电源的开始**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247538957&idx=1&sn=a7edc02311a7c9a2a84a41b5ef5e30e5&scene=21#wechat_redirect)  
    
-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\判断MOS管好坏_使用万用表3个步骤（附几种测试方法）_images\img_018_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******