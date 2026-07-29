# I/O接口技术：推挽/开漏输出、上/下拉输入、浮空输入

原创 电路一点通 2025-04-18 12:04 广东

> 原文地址: [https://mp.weixin.qq.com/s/eTaxhTSmwSpsAUzkLJonDA](https://mp.weixin.qq.com/s/eTaxhTSmwSpsAUzkLJonDA)

## 本文详细介绍了电子工程中的几种数字I/O接口技术，包括推挽输出、开漏输出的内部结构与工作原理，以及它们之间的对比，特别强调了开漏输出对电平匹配的需求。同时讨论了下拉输入和上拉输入的特点，以及浮空输入的特性。

-   [![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\I_O接口技术_推挽_开漏输出_上_下拉输入_浮空输入_images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

## 一、推挽输出

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\I_O接口技术_推挽_开漏输出_上_下拉输入_浮空输入_images\img_001_f90fb3220abc.png)  
推挽输出的内部电路大概如上图中黄色部分，输出控制内有反相器，由一个P-MOS和一个N-MOS组合而成，同一时间只有一个管子能够进行导通。  
当写入1时，经过反向器后为0，P-MOS导通，N-MOS截至，I/O引脚输出电压为VDD的高电平。  
当写入0时，经过反向器后为1，N-MOS导通，P-MOS截至，I/O引脚与地(Vss)相连输出低电平。

## 二、开漏输出

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\I_O接口技术_推挽_开漏输出_上_下拉输入_浮空输入_images\img_002_7cf7b1954a08.png)  
开漏输出又叫漏极开漏输出，开楼输出与推挽输出的区别在于，开楼输出无上管P-MOS。  
当写入1时，经过反向器后为0，N-MOS截至，I/O为高阻态。此时如果接外部上拉电阻可输出高电平。  
当写入0时，经过反向器后为1，N-MOS导通，I/O引脚与地(Vss)相连输出低电平。

## 三、对比开漏输出与推挽输出

1、都可以输出0和1(开漏输出需要外接上拉电阻)  
2、开漏输出高电平取决于外部上拉电平，适用于电平不匹配场合

## 四、下拉输入

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\I_O接口技术_推挽_开漏输出_上_下拉输入_浮空输入_images\img_003_2a79ce0a1498.png)  
下拉输入内部启用下拉电阻，把不确定的信号通过电阻连接到低电平，电信号初始化为低电平。

## 五、上拉输入

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\I_O接口技术_推挽_开漏输出_上_下拉输入_浮空输入_images\img_004_4f4f18debf79.png)

上拉输入内部启用上拉电阻：把不确定的信号通过电阻连接到高电平，电信号初始化为高电平。

## 六、浮空输入

浮空输入内部既不启用上拉电阻，也不启用下拉电阻，电信号跟随I/O信号变化。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\I_O接口技术_推挽_开漏输出_上_下拉输入_浮空输入_images\img_005_a56ea7dddf40.png)

  

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[FOC少走弯路:硬件电路直接抄，要么就要原封不动复刻？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544235&idx=1&sn=11b2609f81f5c64c733288147a084b4b&scene=21#wechat_redirect)**
    
-   **[硬件设计常用接口引脚定义](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544235&idx=2&sn=649cc886fcd77fb4a26f048e18c6b405&scene=21#wechat_redirect)**
    
-   **[三极管驱动NMOS实现3.3V转24V电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544233&idx=1&sn=06790b765b2d25b49e94122665b81686&scene=21#wechat_redirect)**
    
-   **[电子电路识图全突破(双色版)\_(电子工程师之路) -577页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456256878&idx=2&sn=1b5c9074b94476c7e7353ffd36b2242e&scene=21#wechat_redirect)**
    
-   **[仰望U7 水平对置电动化发动机PK斯巴鲁、保时捷（全面分析对比](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247517635&idx=1&sn=5a710ddcd76c009197074f074831d823&scene=21#wechat_redirect)**
    
-   **[汽车（轿车、跑车）动力传动系统构造透视图](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247517602&idx=1&sn=092e1bfd84da7aab9be94a05ea61205c&scene=21#wechat_redirect)**
    

**![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\I_O接口技术_推挽_开漏输出_上_下拉输入_浮空输入_images\img_006_b46e8bcc08e0.jpg)**

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**