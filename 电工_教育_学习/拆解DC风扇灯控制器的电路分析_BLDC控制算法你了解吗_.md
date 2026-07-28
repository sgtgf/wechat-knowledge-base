# 拆解DC风扇灯控制器的电路分析，BLDC控制算法你了解吗?

原创 每天进步一点点 硬件笔记本 2023-07-22 11:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/v9WJfp1SbZIis9q8r2PqoA](https://mp.weixin.qq.com/s/v9WJfp1SbZIis9q8r2PqoA)

今天我们拆解DC的风扇灯控制器，这款为网上打样的外贸款，价格比较便宜的，来个一拆探底。  

  

正文

  
  

直接开拆，控制器正面

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflFbq7hPtWsN4og9T2lNN2OibID58BI3qZAhalLk3qkiaoysEhDaZrZ7fIUe8JEBdzahmicYJbQM6Pkg/640?wx_fmt=png)

  

拆开后PCB正面  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflFbq7hPtWsN4og9T2lNN2Ox3PBtLQr8kFiaOic7LMXBOScE1vEc5NGVyfgGQuViaU6LWqwoqjY4aDzw/640?wx_fmt=png)

  

PCB背面  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflFbq7hPtWsN4og9T2lNN2Owszpibcy0ib0BwThq2cMUicW5hMfhlY8wLmkoDSwoUyDGAVlWNRzeicibQg/640?wx_fmt=png)

  

LED灯部分AC-DC电源IC型号LY6018。  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflFbq7hPtWsN4og9T2lNN2Op32sG6BQNckONCAvdnWt3N2qaZGIvofJiavleGkRCStAjKAMib8dgfCA/640?wx_fmt=png)

  

电机部分AC-DC电源IC型号LY6021, 两通道LED控制IC型ED360N.  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflFbq7hPtWsN4og9T2lNN2OTWMhBDwePCAQ6PjIZnc2HNr9e6ib1ozKK10IDLCV7BZpB4Sk4WpT0mg/640?wx_fmt=png)

  

主控MCU分（被磨干净型号了），MRF310无线接收IC，S4614双通道MOS管。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflFbq7hPtWsN4og9T2lNN2OFs7gEKCicX4GZKrIlTMickXaEiaQEibHFUDuMcuH2nnF4lotoem5zSPgNw/640?wx_fmt=png)

通过拆解后的PCB画出其对应的电路原理方框图。  

通过如上电路原理方框图我们可以得知控制器电路组成的几大部分： 

1.AC-DC部分电路：把输入的AC交流电转换为隔离的直流安全电压，控制器有两个转换电路，一个为给风扇电机供电的24Vdc电压， 另一个为给LED供电的36Vdc电压。 分别采用LY6021 和LY6018 方案。这两款IC都是比较老式的DIP8封装了，没查到是哪个品牌的，只找到对应原理图。  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflFbq7hPtWsN4og9T2lNN2OsA86xa1bzFCtWziaA2fialjkVHQGNXvAIeBtOXtWibPMuHiaJRdAf0tl8g/640?wx_fmt=png)

2.灯部分：比较简单，通过电源进行电压变换后出来的38VDC电压，搭配36V LED光源接到两通道的LED驱动IC上，MCU可通过输出两路PWM对其进行调光和调色温。

3.电机控制部分：大概原理为通过MCU输出6个PWM信号控制三个两通道的MOS管依次上下导通，从而对三相电机进行控制。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflFbq7hPtWsN4og9T2lNN2O5V18SRP1WTZqshVvCPx0k8J2X2THyjlvEB0MBX1mSIjO2w7fgn9e5Q/640?wx_fmt=png)

由于之前没接触电机这方面，只能一边拆解，一边查资料学习分析了，为搞清楚原理干脆把电机也拆了，才略懂一二。  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflFbq7hPtWsN4og9T2lNN2OZql5oTaGZicXyG2RnuRJXQKACvlYBUdKhUT6RjEdHxG4elJxib5KSVHw/640?wx_fmt=png)

电机里面只有线圈的，没有霍尔元件，电机类型是直流无刷电机BLDC类型，电机控制方式为无霍尔器件FOC控制方式。  

控制BLDC的关键就是确定换相的时刻，主要通过检测电机线圈产生的反电动势来获得转子的位置，还要检测电机转速、电流大小等信息作为反馈输入，需要采集电机相电流，对其进行一系列的数学变换和估算算法后得到反馈量，然后形成闭环控制，对软件算法的要求比较高。有兴趣的朋友可以自行了解学习BLDC,PMSM,FOC相关理论知识。  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflFbq7hPtWsN4og9T2lNN2Ok8LFDSLAqhoYibbUeS40tt6c40kAicic7bxz25VKRibypDKMQ0iavGYbbrQ/640?wx_fmt=png)

总结：  

AC风扇灯控制器主要是通过继电器+电容或双向可控硅进行开关及调光调速功能，输入输出均为AC交流电压。因为美规传统风扇灯普遍是带E26/E12灯头设计的，光源需要AC电压供电，所以采用AC风扇灯控制器搭配AC电机+灯头这种设计会更经济合理，光源部分消费者可根据各自喜好，选择额定功率的任意灯泡，简单实用方便。 

DC风扇灯控制器，因为要控制BLDC直流无刷马达，所以需要采用开关电源进行电压转换后输出隔离或非隔离的直流电压，然后再通过MCU进行一系列算法后，输出信号控制开关管组成的三相逆变器进行电机控制。  

通过AC/DC风扇控制器的拆解对比，无疑控制直流无刷马达的DC风扇灯控制器，不管是在硬件还是软件方面都更加复杂，特别对算法的要求更加高。  

如上为个人拆解后的观点和理解，水平有限，若哪里有不对的，欢迎大家讨论指正，谢谢！

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群