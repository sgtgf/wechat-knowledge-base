# TDS水质及电导率计算方法及电路程序设计

原创 电路一点通 2025-01-17 11:32 广东

> 原文地址: [https://mp.weixin.qq.com/s/Um\_mzTUYzOSljoV7LpHvnQ](https://mp.weixin.qq.com/s/Um_mzTUYzOSljoV7LpHvnQ)

TDS 用来表示测定溶解在水中的所有固体物质，包括矿物质、盐分以及溶解在水中的微小金属物质，说白了，其值的大小反映了水质的好坏，为此我们设计一款基于电极测量法的TDS水质检测模块。下面为该模块设计原理及功能介。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_000_c004694ef3e5.other)

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_001_a8b37a87b291.other)

#### **1.模块功能概述**

      TDS水质检测模块采用TDS传感器（钛合金）和NTC（3950\_10K）热敏电阻配合8 位高性价比单片机(STM8S003F4P6)，内部已做 AD (10位)采集，并通过算法计算出对应的TDS值及温度值，用户只需通过串口读数据即可，另外可接数码管显示模块，即可循环显示TDS值和温度值，方便用户快速使用。 

#### **2.TDS定义简介**

       TDS 用来表示测定溶解在水中的所有固体物质，包括矿物质、盐分以及溶解在水中的微小金属物质。测量单位为 ppm 或 mg/L,它表明 1 升水中溶有多少毫克溶解性固体。通常可用电导率推测溶液中的盐分，水越纯净，可溶性固体越少，电阻越大，电导越小，纯水几乎不能导电。TDS 值与电导率有直接关系，TDS 值一般为电导率的 0.55 倍。

TDS 水质检测广泛用于评估净水器滤芯性能，测试饮用水质量以及其它水质分析相关领域。

#### **3.模块TDS测量方法**

        TDS 测量主要通过给测试电极输入交变的驱动电压（防止探头极化），在被测液体中产生微小电流，从而得到被测液体的电导率。温度测量则通过测量 NTC 负温度系数的热敏电阻值，从而计算出当前的环境温度。并根据TDS传感器在受不同温度范围所表现的特性差异，通过获取的温度在相应温度范围内进行补偿。

       模块采用电极法测定水溶液的电导率，当两电极插入溶液中，可以测出两电极间的电阻R。根据欧姆定律，温度一定时，有R=pL/A，其中p为电阻率，L为电极间间距，A为电极的截面积。由于A、L是固定不变的，故L/A是一常数，称为电导池常数Q,即R=pQ.

电导S与电阻R成倒数关系:S=1/R

电导率K与电阻率p成倒数关系:K=1/p

K=1/p=Q/R

      用标准溶液校准，获得电导池常数Q再测水样得到电阻R，即可求出K，即可得到TDS=0.55K。

注意受温度影响，以25℃为标准温度，温度每增加1℃，电导率上升2%，故温度作为补偿因子参与TDS计算，公式为：K=K(未温补)÷(1+0.02\*(T-25))。T为测得溶液温度值。

       本模块采用TDS为488ppm的校准液进行校准，经计算得出电导池常数为437140.将电导池常数更新到计算公式后对溶液进行测量。

![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_002_8fc135193806.png)

      如上图为本模块TDS传感器接口电路，通过将TDS传感器两端接入TDS2和TDS3，TDS1和TDS3分别连接单片机的两个普通IO，TDS2连接至单片机AD测量IO。通过控制TDS1和TDS3进行高低电平交替输出，则等效于采用交流驱动TDS传感器。电流通过R13电阻和TDS探针及溶液形成回路，则可测量TDS2端的电压，根据电阻分压原理，即可求出TDS两探针之间的电阻值，即溶液的阻值。

       TDS 测量主要通过给测试电极输入交变的驱动电压，在被测液体中产生微小电流，从而得到被测液体的电导率。温度测量则通过测量 NTC 负温度系数的热敏电阻值，从而计算出当前的环境温度，如下图。

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_003_d76ba6c55647.png)

本模块总体电路原理图如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_004_6af7045e56fa.png)

 以下为模块mcu进行计算TDS值的关键算法代码：  
#define POLAR\_CONSTANT        (513385)  /\* 电导池常数，可通过与标准TDS测量仪对比计算反推  \*/  
#define TDS\_COEFFICIENT       (55U)     /\* TDS = 0.55 \* 电子传导率\*/  
//TDS 的计算  输入TDS传感器分压的平均电压  
// adc\_avg\_value：采集到的TDS传感器分压AD值  
void R\_TDS\_Calculate(u16 adc\_avg\_value)  
{  
    float tds\_resister=0,siemens\_value=0;//西门子值  
    float electornic\_conductor=0,temperature=0;  
     
   //获取温度值  
   temperature=(u16)((u16)(g\_Temperature\[0\]\*10)+g\_Temperature\[1\])/10;  
       /\*AD限值处理\*/  
    if(adc\_avg\_value >=998)  //998     
    {  
       tds\_Value = 0;  
    }  
    else  
    {  
      //计算溶液电阻值  
      /\* 1.5k的串联液体TDS电阻值 \*/  
      tds\_resister =1.0\*adc\_avg\_value \* 1500 / (1024 - adc\_avg\_value);  
   
      /\* 计算电导率值 。其中POLAR\_CONSTANT 为电导池常数\*/  
      siemens\_value =(1.0\* POLAR\_CONSTANT / tds\_resister);  
        
      /\* temperature adjust \*/  
      //经过温度补偿过的电导率值  
      electornic\_conductor= siemens\_value /(1+0.02\*(temperature-25));  
      // 计算出TDS值，TDS\_COEFFICIENT为转换系数  
      tds\_Value =(u16)(1.0\* electornic\_conductor \* TDS\_COEFFICIENT / 100);  
        
    }  
}  

#### **4.技术指标**

![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_005_aaba8ac9b25a.png)

#### **5.外形尺寸**

![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_006_647a7793968d.png)

#### **6\. 通信协议**

 波特率：9600，无校验位，1停止位，8位数据。

![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_007_fda24156aa38.png)

TDS：91ppm。温度：26.2℃  
//校验值算法 起始位后 86 00 85 00 00 00 00 到校验值前相加求和取低八  
//位，再取反加一  
uint8\_t getCheck(uint8\_t \*data,uint8\_t iLength)  
{  
uint8\_t sum=0; uint8\_t iFor=0;  
for(iFor=0;iFor<iLength;iFor++)  
{  
sum+=data\[iFor\];  
}  
return (0xff-sum+1);  
}  

#### **7.上位机和数码管显示应用**

       模块板载USB转TTL电平芯片和micro-usb接口，可直接通过micro-usb数据线将电脑与模块连接，即可在电脑查看模块所使用的串口端口号，请到电脑设备管理器查看，端口号因个人电脑而异，如下图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_008_3357e9ff80f3.png)

       板上另有串口TTL接口引出，方便用户与其他mcu进行连接读取数据。

接下来可打开上位机软件，并选择相应串口号，如下图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_009_fb5ec7e18055.png)

       上位机发送及接收数据协议按照模块协议编写，上位机每1秒向模块获取一次数据。

模块载有串行控制四位数码管接口，只要模块上电，将数码管显示模块直接插在模块接口上即可显示所测温度值及TDS值，TDS和温度显示时间为：3S+2S。显示效果如下图：

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_010_07b36cb2c342.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_011_df631df7c900.png)

  

#### **8.测试数据对比**

      下图是关于TDS水硬度标准的说明，用户可根据图中标准对照查看所测水质符合哪种等级，以达到直观判断水质优劣的目的。

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_012_45c19bf4fe7b.png)

     以下为采用本模块和小米TDS检测仪分别对两种不同TDS值水进行测试对比所得的实验效果图：

1.左图为小米TDS检测笔所测数据为376ppm，右图为本模块所测数据为372ppm。

![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_013_f9406f926444.png)

 2.左图为小米TDS检测笔所测数据为74ppm，右图为本模块所测数据为78ppm。

![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_014_6448468bc4bc.png)

#### **9.使用注意事项**

1、TDS探头不能用于55℃以上的水中。

2、TDS探头放置位置不能太靠近容器边缘，否则会影响测量结果。

3、TDS 探头头部与导线为防水，可浸入水中，但连线接口处与信号转接板不防水，请注意使用。

******进大家庭⭕圈探讨回复:****** ******交流******

******![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_015_dc9b39eaee8a.other)******

  

  ****推荐**  ![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_016_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_017_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_018_ef7d17c8c639.png)**![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_019_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\TDS水质及电导率计算方法及电路程序设计_images\img_020_ef7d17c8c639.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)