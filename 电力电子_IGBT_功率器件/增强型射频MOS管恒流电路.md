# 增强型射频MOS管恒流电路

原创 电路一点通 2025-06-22 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/A6JjASjMOzsyn\_NPcglpXQ](https://mp.weixin.qq.com/s/A6JjASjMOzsyn_NPcglpXQ)

1）该恒流电路由两个PNP三极管，R56,R57,R58,R55这四个电阻构成；

2）C98,C96,C97用于射频去耦， R59用于限流；

3）U3为增强型的射频MOS管；

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型射频MOS管恒流电路_images\img_000_d8de0e0abbe6.png)

-   [![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型射频MOS管恒流电路_images\img_001_94f706ed1651.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

电路分析：

1）先分析Q8,R57,R56组成的回路，并设三极管BE极间压降为0.8V，且设定Q7基极的电流小到忽略不计。这样在这个回路就可以得到一个关于Q8射极电流的公式：10000\*i + 0.8 = 3 - 1000\*i ； 解的Q8射极电流i = 0.0002A； Q8基极电压为2V ； 

2）再看Q7，R55， U3，R59 , R58组成的回路； 由于前面第一步可以知道Q7的基极为2V，且BE极间电压为0.8V，所以Q7的射极电压为2.8V ； 计算得流经R55的电流为0.0111A；

3）由于R58为大电阻，所以极大的限制了流经R55的电流流到Q7，就算极限情况Q7的集电极电压等于Q7的射极电压，那经过Q7的最大电流只能是2.8/10000 = 0.00028A；所以流经R55的电流绝大部分都是留到U3的漏极的；所以可以认为Q8，R57,R56组成的回路，决定了流到U3漏极的电流；

4）该电路之所以实现恒流，主要原因是Q8,R57,R56组成的回路把Q7的基极电压钳制的死死的；

5）U3的栅极经过R59连接到Q7的集电极相连，其会取出R58两端的电压；至于其电压值会是多少，是由R55,Q7,R58,U3组成的回路怎样分配流经R55的电流才能达到平衡决定的！！R58两端的电压值会根据不同的MOS管而变化，变化极限为0~2.8V之间。

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\增强型射频MOS管恒流电路_images\img_002_742459e48440.jpg)

******进大家庭⭕圈探讨回复:************交流******

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[4-20mA电流信号采样电路问题探析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247548279&idx=1&sn=19dcf8dd043843bb5aec7ad8a1cfb7a3&scene=21#wechat_redirect)  
    **
    
-   **[7类防护电路汇总（CAN、以太网、射频、电源、同轴线、ESD）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247548076&idx=1&sn=5232666df246327f555980eff24a062c&scene=21#wechat_redirect)  
    **
    
-   [高压电工证培训课件PPT(电力系统基础知识)-45页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456259274&idx=1&sn=9541a869b530183df040ae59231e1612&scene=21#wechat_redirect)
-   **[汽车电气系统故障检修实例精解pdf-425页](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247522367&idx=2&sn=5056b2a4866082aea8a94b5ba8326f3b&scene=21#wechat_redirect)  
    **
    
-   [汽车行业公积金交12%的公司盘点](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247522339&idx=1&sn=9118b1d25ce33af9b69a96a8dfdae74c&scene=21#wechat_redirect)
    

  

  

分享💬点赞👍在看❤️