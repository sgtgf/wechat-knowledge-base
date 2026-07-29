# MOS管电路工作原理及基础知识详解

原创 电路一点通 2025-02-25 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/YAz4cK7nAii9\_K7\_oPFgQg](https://mp.weixin.qq.com/s/YAz4cK7nAii9_K7_oPFgQg)

#### 目录

-   一，MOS管画法辨认
    
-   1.1 辨认MOS管
    
-   二，MOS管使用
    
-   三，如何选择MOS管
    
-   四，万用表辨认MOS管
    
-   2.1.1 导通条件
    
-   2.1.2实例
    
-   2.1 作为开关管
    
-   3.1.1 选择PMOS还是NMOS
    
-   3.1.2 电压：漏源极电压Vds，栅源极电压Vgs，栅极导通电压VGS(th)
    
-   3.1.3 电流：持续漏电流Id
    
-   3.1.4 导通电阻Rds(on)
    
-   3.1.5 寄生电容
    
-   3.1.6 结温Tj
    
-   3.1.7 开关频率
    
-   3.1.8 封装
    
-   3.1 MOS管需要注意的几个参数
    
-   3.2 常用PMOS参数整理
    

  

##### 一，MOS管画法辨认

###### 1.1 辨认MOS管

S级：两线相交  
G级：不解释  
D级：单独引线边  
箭头指向G极为N沟道，背向G极为P沟道。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_000_bbca7661f0c7.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_001_e8cd3ec2c805.png)  
N沟道，S指向D。  
P沟道，D指向S。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_002_8a91bc174f6c.png)  
小技巧：中间箭头方向与二极管方向一致  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_003_1af2f962d585.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_004_ae9f3327feef.png)  
总结  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_005_7477930688e8.png)

##### 二，MOS管使用

###### 2.1 作为开关管

###### 2.1.1 导通条件

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_006_b5b69ea27e90.png)  
多少伏导通  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_007_f9085ea60701.png)

###### 2.1.2实例

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_008_144c5329f7f9.png)  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_009_187ce877f0d0.png)  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_010_2962cfefe14d.png)

##### 三，如何选择MOS管

###### 3.1 MOS管需要注意的几个参数

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_011_6f36523c161b.png)

###### 3.1.1 选择PMOS还是NMOS

NMOS：导通电阻小，发热低，允许通过电流大，型号多，成本低。  
常用于正激，反激，推挽，半桥，全桥等拓扑电路。  
PMOS：型号少，成本高。  
常用于电源开关电路。

###### 3.1.2 电压：漏源极电压Vds，栅源极电压Vgs，栅极导通电压VGS(th)

极限电压：Vgs，Vds。  
驱动电压：Vgs，尽量越大越好，越大导通电阻Rds(on)越小。  
栅极导通电压VGS(th)：MOS管开启电压。  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_012_d12b62578b02.png)  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_013_08eed13c82d9.png)

###### 3.1.3 电流：持续漏电流Id

Id要大于尖峰电流。通常，尺寸越大，导通电阻Rds(on)越小，允许的Id越大。  
Id还与Vgs，Vds有关。电压越大，电流越大，以SI2323为例(外壳温度Tc，环境温度Ta)：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_014_414ccfeafb6f.png)  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_015_74741cffa16c.png)

###### 3.1.4 导通电阻Rds(on)

随着MOS管温度的升高，Rds(on)也会变大。MOS管的功率，导通损耗的公式：  
Ptron=I2\*Rdson。  
以SI2323为例：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_016_31ae7362b838.png)

###### 3.1.5 寄生电容

寄生电容越小，开关速率越好。常见有三个，以SI2323为例：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_017_d2fae5acab2d.png)

###### 3.1.6 结温Tj

MOS管工作温度，不能大于结温的90%，否则要加散热片。其他还有，外壳温度Tc，环境温度Ta，PCB温度Tpcb。  
上面是结温，下面是到引脚温度，以SI2323为例：  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_018_f4caf18312cd.png)

###### 3.1.7 开关频率

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_019_8302eac9c82d.png)

###### 3.1.8 封装

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_020_238699a4a6af.png)

###### 3.2 常用PMOS参数整理

PMOS型号：SI2323DS-T1；XP162A12A6PR-G；AO3407；ADO4185；  
NMOS型号：Si2302DDS；  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_021_54628bacc5b9.png)

##### 四，万用表辨认MOS管

辨认P,N  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_022_bce822e500f7.png)  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_023_4573bcc4837c.png)  
原理  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_024_a5b92be5c15f.png)  
辨认MOS管是好是坏  
![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_025_60c0e8d4cbd1.png)

  推荐  ![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_027_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_026_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_029_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_030_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_028_ead434f24ea4.png)**

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_031_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)  
    

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管电路工作原理及基础知识详解_images\img_032_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:************  
交流******