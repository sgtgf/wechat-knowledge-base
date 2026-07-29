# 电路设计LDO线性稳压器要不要并联二极管？

原创 电路一点通 2025-07-15 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/QqtzA1CqRx1uAF3Nyn-EiA](https://mp.weixin.qq.com/s/QqtzA1CqRx1uAF3Nyn-EiA)

  

LDO的应用场景是怎么的呢？LDO要不要并联二极管呢？

> 一、讨论了LDO稳压器不需要并联二极管的情况，但在特定条件下如输入端对地短路或大输出电容时需要保护。LM1117内置二极管可承受一定浪涌电流，而外部二极管的添加需参考LM317等芯片的数据手册
> 
>   
> 
> 二、介绍了在切断5V供电时，二极管可预防LDO输出端因电容作用掉电慢产生反向压差，为其提供热损路径，防止损伤LDO。当输出端并联大电容时需加该二极管，选用普通二极管，反向耐压要大于LDO输入电压，还提及1N4148参数及与其他型号区别。

进大家庭⭕圈探讨回复: 交流 

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计LDO线性稳压器要不要并联二极管__images\img_000_8fb162b06e02.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

一般来说，LDO是不需要并联二极管的。

看下图第一个是典型电路，第二个是带可调节电压功能的LDO典型电路，从图里就可以看出并没有并联二极管。但是这不是必定的，偶尔也会看到LDO的输入引脚和输出引脚之间并联一个二极管，这是什么神奇操作？这个二极管是什么作用呢？

上面也说了一般情况下，LDO不需要任何保护二极管，但是当输出电容器连接到稳压器并且输入端对地短路时（图二）需要并联二极管，输出电容器将放电到稳压器的输入端。

以LM1117稳压器举例，在LM1117稳压器中，输出引脚和输入引脚之间的内部二极管可以承受10A至20A的微妙级浪涌电流。

![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计LDO线性稳压器要不要并联二极管__images\img_001_f3737a1b4ddc.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计LDO线性稳压器要不要并联二极管__images\img_002_252eab414f45.png)

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计LDO线性稳压器要不要并联二极管__images\img_003_2470bfc792df.png)

下图是LM1117稳压器的内部框图，如果使用极大的输出电容器并且输入瞬时对地短路，稳压器可能就会损坏。这种情况下建议在输出引脚和输入引脚之间使用外部二极管来保护稳压器。

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计LDO线性稳压器要不要并联二极管__images\img_004_bf2995153e8f.png)

关于LDO线性稳压器并联二极管，其实还是要看芯片的datasheet 数据手册说话，毕竟是最权威的东西。

看下图这个，这个是一个并联二极管的实际案例原理图，用的是稳压器LM317。关于并联二极管手册里是这麽说的：二极管D1提供一个低阻抗的泄放路径，防止输出电容对稳压器的输出引脚放电。还是如前面所说，一般情况不需要增加这个二极管D1，怎么设计最好参加数据手册，还需要注意：增加这个二极管时，二极管的反向耐压要大于LDO稳压器的输入电压。

所以，遇到问题，比如发现LDO稳压器罕见的并联了二极管，首先看数据手册是没毛病的。

![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计LDO线性稳压器要不要并联二极管__images\img_005_67f81972dd21.png)

  

# LDO并联在输入输出端二极管

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计LDO线性稳压器要不要并联二极管__images\img_006_063f5f4fd722.png)

 该二极管作用是在切断5V供电时，预防LDO输出端因为电容良好的作用，掉电速度低于5v输入，有反向压差时，提供一个热损路径，防止损伤LDO。（1N4148维持两端压差不大于1v）

-   当输出端并联有大电容时，需要考虑加上该二极管
    
-   该二极管的选用普通二极管即可，反向耐压要大于LDO输入电压
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计LDO线性稳压器要不要并联二极管__images\img_007_05892f160032.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计LDO线性稳压器要不要并联二极管__images\img_008_83c98f051a91.png)

 选用1N4148参数 

1N4148 是开关二极管，耐压100V，电流150mA，正向压降高，为1V，反向恢复速度快，4ns

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[2个offer：大公司PCB工程师和小公司硬件工程师选择哪个？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549608&idx=1&sn=ff99090971a94e215de445691d456834&scene=21#wechat_redirect)**
    
-   **[【电路测试】过压、欠压、反接保护](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549510&idx=2&sn=e01a0f447ca90ab58c039cd2d9a3f873&scene=21#wechat_redirect)**
    
-   **[新能源纯电SUV汽车能耗天梯图（车型一览）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523431&idx=1&sn=5feb7ee980f6f06c562214ed1f57e12e&scene=21#wechat_redirect)**
    
-   **[电子元器件故障检测与丰富维修实践技巧全图解-246页-Pdf](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456259977&idx=1&sn=4cd1483bf40828a185bf2b5d858368f8&scene=21#wechat_redirect)**
    
-   **[每天分享高佣爆款--肯德基/麦当劳8件套39.9元！](https://mp.weixin.qq.com/s?__biz=MzkyOTg0NTExMA==&mid=2247483691&idx=1&sn=7fb1a981613fbaea384398f0eae3ea6e&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计LDO线性稳压器要不要并联二极管__images\img_009_f511fad8e77a.png)

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️