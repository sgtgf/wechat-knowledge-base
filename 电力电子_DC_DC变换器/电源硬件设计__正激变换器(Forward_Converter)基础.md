# 电源硬件设计—-正激变换器(Forward Converter)基础

原创 电路一点通 2024-12-19 11:39 广东

> 原文地址: [https://mp.weixin.qq.com/s/IYGP2OVB2omSF4V0oywIFw](https://mp.weixin.qq.com/s/IYGP2OVB2omSF4V0oywIFw)

## **1 正激变换器(Forward Converter)拓扑结构**

正激变换器拓扑结构，如图所示：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源硬件设计__正激变换器(Forward_Converter)基础_images\img_000_56f3402178c6.other)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源硬件设计__正激变换器(Forward_Converter)基础_images\img_001_97a34a4f7ee5.other)

**👇👇👇更多技术资料👇👇👇**![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源硬件设计__正激变换器(Forward_Converter)基础_images\img_002_ac6d85e0e2d9.other)

**拓扑结构分析：**

-   输入电压 Vi
    
-   输出电压 Vo
    
-   开关组件 S
    
-   变压器 T
    
-   原边线圈圈数 Np
    
-   副边线圈圈数 Ns
    
-   整流理想二极管 D1，D2
    
-   滤波电容 C
    
      
    

## **2 正激变换器(Forward Converter)原理**

正激变换器(Forward Converter)拓扑结构，如图所示：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源硬件设计__正激变换器(Forward_Converter)基础_images\img_003_ea4b1c35baff.png)

**S导通(开关管导通)时：**

  

-   电流由输入电压端流经变压器原边线圈与开关形成电流回路，此时变压器原边线圈两端压降为Vi
    
-   变压器原边线圈因电流流过而产生磁力线，其透过铁芯传到副边线圈，副边线圈产生感应电势
    
-   副边线圈两端感应电压Vi/n，使得理想整流二极管D1导通，电流形成回路，通过D1、输出储能电感与输出电容
    
-   副边储能电感两端固定压降VL，使得电感线圈上产生电流，此电流于电感铁芯内累积磁力线，直到开关关闭为止
    

**S关断(开关管关断)时：**

-   原边线圈因开关关断，原边无电流回路产生。原边线圈上产生反电动势，该反电动势与占空比D相关
    
-   变压器副边线圈因产生的感应电势极性，使得整流二极管D1关断，此时变压器能量传输截止
    
-   电感产生反电势，使得续流二极管导通，储能电感于开关关断时续流，电感上压降与输出相同
    
-   储存电感将导通时间储存于铁芯内的磁力线，透过电感上的感应线圈，由电流形式进行释放
    

**正激变换器电压转换公式：**![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源硬件设计__正激变换器(Forward_Converter)基础_images\img_004_ea048800fe24.png)

D = 占空比  
T = 周期  
n = 变压器匝比

**电压波形如图所示：**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源硬件设计__正激变换器(Forward_Converter)基础_images\img_005_058f50cc55b5.png)

## **3 正激变换器(Forward Converter)应用举例**

已知：输入电压值为 Vi  
给定：变压器匝比为 n  
调制：占空比为 D  
得出：输出电压值为 Vo

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源硬件设计__正激变换器(Forward_Converter)基础_images\img_006_f4ee508c4fc8.other)

**应用举例：**  
应用于输入电压为100V，隔离输出电压需求为5V，隔离变压器圈比为5。求占空比需控制在多少才能使得输出电压稳定在5V？

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源硬件设计__正激变换器(Forward_Converter)基础_images\img_007_c53c3bec3b7a.png)

## **4 正激变换器(Forward Converter)应用环境**

**正激变换器特点：**

  

正激

拓扑形式

隔离降压型

压比(Vo/Vi)

D/n

变压器利用率

低

功率应用范围

<300W

功率密度

低

开关管

一个(原边主动开关)

成本

低

调制方式

脉冲宽度调制(PWM)

控制芯片

UCC38C42

**应用环境：**

-   控制模块简易稳定
    
-   一般范围功率输出需求
    
-   低价格产品应用
    

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源硬件设计__正激变换器(Forward_Converter)基础_images\img_008_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

    
-   [搞电子软硬件人6大结局](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535913&idx=1&sn=4626ac39cad4f588de864678cc73c0a9&token=1042436362&lang=zh_CN&scene=21#wechat_redirect)
    
-   [比亚迪组织架构和产业布局图，25届应届生还要不要去？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535323&idx=1&sn=7dc18ed6d014e51af4f78ec3a1c2f8d2&scene=21#wechat_redirect)   
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535323&idx=1&sn=7dc18ed6d014e51af4f78ec3a1c2f8d2&scene=21#wechat_redirect)[大厂纷纷裁员导致失业率达几十年来至高，年轻人要怎么破局？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535307&idx=1&sn=fbff933dac99a365273556c919bfc0e8&scene=21#wechat_redirect)
    

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分