# 增强型MOS场效应管电路分析方法

原创 电路一点通 2025-04-22 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/OcaZT6M0KzlfmH2Gzd-icw](https://mp.weixin.qq.com/s/OcaZT6M0KzlfmH2Gzd-icw)

增强型MOS场效应管 输出特性曲线 转移特性曲线 衬底效应 场效应管模型 场效应管电路分析方法

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型MOS场效应管电路分析方法_images\img_000_e7295981bd41.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型MOS场效应管电路分析方法_images\img_001_4fc2e7797336.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型MOS场效应管电路分析方法_images\img_002_d959c58adf67.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型MOS场效应管电路分析方法_images\img_003_2b65282b24d3.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型MOS场效应管电路分析方法_images\img_004_de4b94d26d89.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型MOS场效应管电路分析方法_images\img_005_3bf6326f941b.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型MOS场效应管电路分析方法_images\img_006_dd25e51beaa6.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型MOS场效应管电路分析方法_images\img_007_b15c6295661e.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型MOS场效应管电路分析方法_images\img_008_36da7aee788e.png)

来源：橙九笔记

  

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型MOS场效应管电路分析方法_images\img_009_242ed73b831f.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)**👆查看更多目录👆**

## **一点通推荐[👍👍👍](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3409785953525891079&scene=173&subscene=&sessionid=svr_03f04b159f2&enterid=1729216795&from_msgid=2247525041&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**


-   [轻松学电子电路识图，实战技能-282页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256899&idx=2&sn=c5970837439ee7f2bac08e630bb2d444&scene=21#wechat_redirect)【资料可领取】
    
-   [电子电路识图全突破(双色版)\_(电子工程师之路) -577页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256878&idx=2&sn=1b5c9074b94476c7e7353ffd36b2242e&scene=21#wechat_redirect)【资料可领取】  
    
-   [电工线路安装与调试技能-7日通培训和技术提升\[239页\]](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256997&idx=2&sn=df4245ff1084d8508e8a2552300a9fa1&scene=21#wechat_redirect)【资料可领取】
    
-   [西门子PLC高级应用实例精解\_第2版-368页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257003&idx=2&sn=c2313e1bec3e59a63fa08faea4ca528d&scene=21#wechat_redirect)【资料可领取】
    
-   [电子电路识图电子书【直接领取】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=2&sn=134ea717ff969059ebee8d82dc4bf96a&scene=21#wechat_redirect)
    
-   [PCB布局-地和电源-47页（资料可领取）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247541650&idx=3&sn=9c2af22b312a8b613896c485fe9d59f5&scene=21#wechat_redirect)
    
-   [ARM嵌入式系统培训精华(全套)PPT-【周立功】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247539769&idx=3&sn=ca79cbbab4916e2ef142f475875b70b0&scene=21#wechat_redirect)【资料可领取】
    
-   [高效微逆变器设计（原理图+程序+上位机等）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247540907&idx=2&sn=8fcb9c897e4cc82906451def4a597f1b&scene=21#wechat_redirect)【资料可领取】
    

-   [【华为技术】信号口防雷电路设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544474&idx=2&sn=f6c0065e381c9fa3275154ad9abedfb0&scene=21#wechat_redirect)【资料可领取】
    
    ![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型MOS场效应管电路分析方法_images\img_010_d0741a682fda.jpg)
    
    ******进大家庭⭕圈探讨回复:************交流******
    
      
    

分享💬点赞👍在看❤️