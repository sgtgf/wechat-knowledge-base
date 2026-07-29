# ​为什么ADC采集电路前级要加一个电压跟随器？

原创 硬件笔记本 2024-08-20 17:23 四川

> 原文地址: [https://mp.weixin.qq.com/s/8ncFJ0H7YrpziHMYCllWQw](https://mp.weixin.qq.com/s/8ncFJ0H7YrpziHMYCllWQw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp "音符")

  

大家都知道电压跟随器具有高输入阻抗，低输出阻抗的优点。输入阻抗很大时，跟随器相当于和前级电路断路，和自恢复保险丝原理一样，通过高阻抗断开电源电路。电压跟随器输出阻抗很低，相当于和后级电路短路。后级电路的输入电压值，等于电压跟随器输出端的电压值。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\_为什么ADC采集电路前级要加一个电压跟随器__images\img_002_cf3b7d365fc2.jpg)

  

电压跟随器输入端和输出端的电压值基本一样大，增益为1。

  

在ADC采集电路中，如果精度要求不高的情况下，通过2个电阻分压，将分压后的电压值传输给电压跟随器。有些电路设计师直接将分压后的电压值，直接接到CPU自带ADC的引脚，或ADC芯片的采集引脚。在实际的项目中，这样采集到的电压值和理论电压值误差较大，在软件设计中，通过程序对采集到的值进行补偿，补偿后的电压值和实际电压值一样。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\_为什么ADC采集电路前级要加一个电压跟随器__images\img_003_1a0b7ab3837c.jpg)

  

采集到的电压值和实际电压值不一致的原因，主要ADC采集端也有一个阻抗，外部分压电阻和ADC端电阻值并联后，整个分压电阻值发生变化，因此ADC采集到电压值和理论值不一样。

  

例如：项目需要对一个电源电压5V进行监控，采用单片机自带ADC，单片机的工作电压为3.3V。因此，需要对5V电压进行分压，上端分压电阻20K，下端分压电阻10K，分压后传输给ADC的电压值为1.67V。实际ADC端也有一个电阻值，假设这个电阻值为10K，这个ADC端电阻值和分压电阻10K并联后，阻抗变成5K，实际ADC采集到的电压值为1V。

  

电压跟随器还起到隔离作用，保护后级电路。

  

所以很多ADC采集电路，在前级都会加上一个电压跟随器。

![](D:\电脑文件\公众号知识库\电工_教育_学习\_为什么ADC采集电路前级要加一个电压跟随器__images\img_004_8f8c22b4fa63.jpg)![](D:\电脑文件\公众号知识库\电工_教育_学习\_为什么ADC采集电路前级要加一个电压跟随器__images\img_005_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：文章来源头条电子哥与电子。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。