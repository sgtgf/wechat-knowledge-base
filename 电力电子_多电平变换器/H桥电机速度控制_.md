# H桥电机速度控制~

原创 电机新视界 2023-01-15 09:30

> 原文地址: [https://mp.weixin.qq.com/s/MkXNApY9ZC5gVdEePlHfPQ](https://mp.weixin.qq.com/s/MkXNApY9ZC5gVdEePlHfPQ)

**点击下方**

**关注我们**

**

**来源：网络**

H桥是一种电子电路，可使其连接的负载或输出端两端电压反相/电流反向。这类电路可用于机器人及其它实作场合中直流电动机的顺反向控制及转速控制、步进电机控制(双极型步进电机还必须要包含两个H桥的电机控制器)，电能变换中的大部分直流-交流变换器(如逆变器及变频器)、部分直流-直流变换器(推挽式变换器)等，以及其它的功率电子装置。

  

![](H桥电机速度控制__images/img_000_76ae576842e9.jpg)

  

  

H桥是一个典型的直流电机控制电路，因为它的电路形状酷似字母H，故得名与“H桥”。4个三极管组成H的4条垂直腿，而电机就是H中的横杠。

  

![](H桥电机速度控制__images/img_001_0227b1da637d.jpg)

  

  

H桥电路，既可以分立元器件形式搭建，也可以整合到集成电路上。“H桥”的名称起源于其电路，两个并联支路和一个负载接入/电路输出支路，看上去构成了形如“H”字母的电路结构。

  

![](H桥电机速度控制__images/img_002_89ecd3ac1d22.jpg)

  

  

如上图所示单相桥式逆变电路工作原理开关T1、T4闭合，T2、T3断开：u0=Ud; 开关T1、T4断开，T2、T3闭合：u0=- Ud; 当以频率fS交替切换开关T1、T4和 T2 、T3 时 ， 则 在 负载电 阻 R上 获 得交变电压波形(正负交替的方波)，其周期 Ts=1/fS，这样，就将直流电压E变成了 交流电压uo。uo含有各次谐波，如果想 得到正弦波电压，则可通过滤波器滤波 获得。

  

  

![](H桥电机速度控制__images/img_003_11cc63eaf95a.jpg)

  

  

主电路开关T1~T4，它实际是各种半导体开关器件的 一种理想模型。逆变电路中常用的开关器件有快速晶闸管、可关断晶闸管(GTO)、功率晶体管(GTR)、功率场效应晶体管(Mosfet)、绝缘栅晶体管(igbt)。

  

  

**知识回顾**

**电机政策：**

[电机行业“未来出路”及2023市场发展趋势展望！](https://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247534719&idx=1&sn=c8e3e2ccf96af9a6164a1a8b95636a4c&chksm=cede09bbf9a980ad79c8d5f74254a5ab6a3e1ba793592b572264d9841d9c104c96eb698e4ad3&token=66697538&lang=zh_CN&scene=21#wechat_redirect)

  

[政策加力电机出口全年增速有望超10%！](https://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247532467&idx=1&sn=44465227804341d3c41aa56853f48f1c&chksm=cede3e77f9a9b7613728fb6fc8f003900c958a1e67be817f613dda6e4d7e7f858ff2f45d8f66&token=66697538&lang=zh_CN&scene=21#wechat_redirect)

  

# [工信部22年将电机列为重点用能专项监察对象，高效电机市场迎来爆发期](https://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247531789&idx=1&sn=1f19abf4671ee606cde5a6e3edf832ea&chksm=cede3cc9f9a9b5df405a345ead88b9c09118334a2f609e16aa29780eb9f5056b71d2150e19fc&token=66697538&lang=zh_CN&scene=21#wechat_redirect)

  

电机标准：

  

[重磅：节能标准将再度升级，高效电机或将成爆款！](https://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247536603&idx=1&sn=8fdb27613e85b06a5da9912ec460defc&chksm=cede0e1ff9a98709fe2e8aa9e4f6e040df309f9d7d2390f9a315d5dea5e47ee19ff2bf143026&token=66697538&lang=zh_CN&scene=21#wechat_redirect)

  

[【重磅】5部门发布最新电机能效准入水平！虚标能效将被重点打击整治！](https://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247535908&idx=3&sn=6eec1347ec795a83176cc4f901ec55fa&chksm=cede0ce0f9a985f64ce0e07697e68c6ddb191072645aa6d8de6370bcd597bb610675d2897b02&token=66697538&lang=zh_CN&scene=21#wechat_redirect)

![](H桥电机速度控制__images/img_004_31a98b8e3167.jpg)


  

![](H桥电机速度控制__images/img_005_ec5921db28d2.png)

