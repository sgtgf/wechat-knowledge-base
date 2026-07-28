# 16张图，教你PCB布局

原创 硬件笔记本 2023-02-28 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/ORHv8pvxO0UOP-xKobNEdA](https://mp.weixin.qq.com/s/ORHv8pvxO0UOP-xKobNEdA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

文章来源：面包板社区

分析好整个电路原理以后，就可以开始对整个电路进行布局布线，下面，给大家介绍一下布局的思路和原则。

**1.**首先，我们会对结构有要求的器件进行摆放，摆放的时候根据导入的结构，连接器得注意1脚的摆放位置。

**2.**布局时要注意结构中的限高要求。 

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxgq8ibDXURUmkgjZmxswCnywvpEFrsMjK3eYwiacD2WANI8QRHjLxHazXQ/640?wx_fmt=png)

  

**3.**如果要布局美观，一般按元件外框或者中线坐标来定位(居中对齐)。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxgkRicyEopibMAtTf38C245wnj1s5WYNUDFDUWALq8ibG8zDem6ctHv7U6w/640?wx_fmt=png)

  

**4.**整体布局要考虑散热。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxgzVBZ1yj4WD1RygSDvOAOGia6tHOsOcGvPEZMCOTu5liaBCp285jPVRuw/640?wx_fmt=png)

  

**5.**布局的时候需要考虑好布线通道评估、考虑好等长需要的空间。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxgQ87UMh9nleW5JJOgoCRESyFqGbibGqEFZtu1RLO1JAs77KgNG4N3nOw/640?wx_fmt=png)

  

**6.**布局时需要考虑好电源流向，评估好电源通道。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxg8xf24yxPf1hb3ym5IUw3tP7AIYuDEjpykpen9ic8IEBWqlwhHVtulhg/640?wx_fmt=png)

  

**7.**高速、中速、低速电路要分开。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxgMx429Oyk4iavEzYQk7olw5Q1QDjcuxBWHmdG0Bz42iawb1581iaeoaWXw/640?wx_fmt=png)

  

**8.**强电流、高电压、强辐射元器件远离弱电流、低电压、敏感元器件。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxg5Iylv3aej3BEqjdQS1ZE8Ymvwm0XaWbYhjeyReZicOg7GOibkpxAL1aQ/640?wx_fmt=png)

  

**9.**模拟、数字、电源、保护电路要分开。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxgXhBic8s2rmSerf1ebHkGZgciaptJYyceL4fW8XdHttpscKubXqUoica0A/640?wx_fmt=png)

  

**10.**接口保护器件应尽量靠近接口放置。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxgI4WshldtbxQIglFkqtjpNiaEez24yDOicYASVGKEQKERYAO1PfiaoRlgg/640?wx_fmt=png)

  

**11.**接口保护器件摆放顺序要求：

-   一般电源防雷保护器件的顺序是：压敏电阻、保险丝、抑制二极管、EMI滤波器、电感或者共模电感，对于原理图 缺失上面任意器件顺延布局。
    
-   一般对接口信号的保护器件的顺序是：ESD(TVS管)、隔离变压器、共模电感、电容、电阻，对于原理图缺失上面任意器件顺
    
    延布局，严格按照原理图的顺序(要有判断原理图是否正确的能力)进行“一字型”布局。
    
      
    

![](https://mmbiz.qpic.cn/mmbiz_jpg/GFk2abHRMHSuMvxbZGOZskAsNzMtkIS9kmvrMUsiaFgX1TxQo1G0tr5o4rUkj8slHgESDp9THDDoibDgXTbZrjpw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

**12.**电平变换芯片(如RS232)靠近连接器(如串口)放置。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxgSBJGyUIRQ84xbLq7UHR5W4SqM3UI2Xnz12eKluaNoF1dJpKkGW6REw/640?wx_fmt=png)

  

**13.**易受ESD干扰的器件，如NMOS及CMOS等器件，尽量远离易受ESD干扰的区域(如单板的边缘区域)。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxgibAsh53iasXhzKUuukWQ3icMG80xdBH2tsB47JaOsWcu3F5sCFibfoU1Jg/640?wx_fmt=png)

  

**14.**时钟器件布局：

-   晶体、晶振和时钟分配器与相关的IC器件要尽量靠近;
    
-   时钟电路的滤波器(尽量采用“∏”型滤波)要靠近时钟 电路的电源输入管脚;
    
-   晶振和时钟分配器的输出是否串接一个22欧姆的电阻;
    
-   时钟分配器没用的输出管脚是否通过电阻接地;
    
-   晶体、晶振和时钟分配器的布局要注意远离大功率的元器件、散热器等发热的器件;
    
-     
    
    晶振距离板边和接口器件是否大于1inch。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxg0hohDwILXuW6PrryW3YntCAHuNgGAZy0vaU6tknkltLXr731umQjNg/640?wx_fmt=png)

  

**15.**开关电源是否远离AD\\DA转换器、模拟器件、敏感器件、时钟器件。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxgSsU5TMeXaHicgevS1OW34gpghp7EXiaDaN1fAibgLMsV1K2HfNAFQEAkw/640?wx_fmt=png)

  

**16.**开关电源布局要紧凑，输入\\输出要分开，严格按照原理图的要求进行布局，不要将开关电源的电容随意放置。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxgXSia1eAVF9r9ZXziccxgRlRbKSVLyXLCKS5Wek0iaV7XhBk4OIVuENASg/640?wx_fmt=png)

  

**17.**电容和滤波器件 ：

-   电容务必要靠近电源管脚放置，而且容值越小的电容要越靠近电源管脚;
    
-   EMI滤波器要靠近芯片电源的输入口;
    
-     
    
    原则上每个电源管脚一个0.1uf的小电容、一个集成电路一个或多个10uf大电容，可以根据具体情况进行增减。
    
      
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia8c6ibWNUbxWBtKGtfpibOxg8vBHwBykOj1rEAictUFLIWoPc05icVHtchwFAKJsq1JQ0xJ9LtiaHQRJQ/640?wx_fmt=png)

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。