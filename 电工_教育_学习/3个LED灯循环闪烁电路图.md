# 3个LED灯循环闪烁电路图

原创 电路一点通 2025-07-21 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/4PqlcycEx5hjClSd4fq67w](https://mp.weixin.qq.com/s/4PqlcycEx5hjClSd4fq67w)

三个LED灯循环闪烁电路  

![](D:\电脑文件\公众号知识库\电工_教育_学习\3个LED灯循环闪烁电路图_images\img_000_cea19cf8417d.jpg)

这个是电路原理图  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\3个LED灯循环闪烁电路图_images\img_001_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

电路原理：  
VT2  
由于电子元器件实际参数差异性，不可能同时导通，假设VT1 三极管先导通，红色 灯发光（R2是限流电阻),C2是电容，电容电压不能突变的特性，导致，VT2基极电压此时为0，（ VT1导通此刻电容相当于对地短路),VT2基极电压为0, VT2截止，绿灯不亮,由于VT2截止，VT3基极电压升高，VT3导通，黄灯发光，现在只有红灯和黄灯发光，随着时间推移，电容C2通过R3充电当电 压上升超过0.7V后，VT2导通，  
绿灯发光，VT3基极电压由于VT2导通而拉低，VT3截止，黄灯熄灭,然后电容C3通过电阻R5充电，电压升高到0.7V,VT3导通，黄灯发光，VT1由于VT3导通而截止，。。。。。。此电路这按照这种循环过程，灯逐个点亮.  

![](D:\电脑文件\公众号知识库\电工_教育_学习\3个LED灯循环闪烁电路图_images\img_002_2d7d051e1c7e.jpg)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\3个LED灯循环闪烁电路图_images\img_003_aace0ebed5d8.jpg)

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[MOS 电平转换电路设计引发思考，可避免更多的坑](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549824&idx=1&sn=89921358e777cba2c9b2b05d3f9b353b&scene=21#wechat_redirect)**
    
-   **[1~5V电压信号转换为4~20mA电流输出电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549812&idx=1&sn=6233a2296c0a77cd4acd614618901746&scene=21#wechat_redirect)**
    
-   **[大浪淘沙！广汽集团好日子一去不返了吗？](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523632&idx=1&sn=dcaf11b81dd4109a575c7fbfd0be4f06&scene=21#wechat_redirect)**
    
-   **[电工识图电工技能速成全图解-554页.pdf](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260269&idx=1&sn=19c896b6ff7d37881214fe83de352960&scene=21#wechat_redirect)**
    
-   **[楼宇自控系统的主要监控对象及监控原理-PPT](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260270&idx=2&sn=2380b447b50547c352aa3649aebd8e77&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\3个LED灯循环闪烁电路图_images\img_004_564a8a9dfb8b.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️