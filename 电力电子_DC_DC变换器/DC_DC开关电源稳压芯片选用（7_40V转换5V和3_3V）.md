# DC-DC开关电源稳压芯片选用（7-40V转换5V和3.3V）

原创 电路一点通 2024-08-18 11:43 广东

> 原文地址: [https://mp.weixin.qq.com/s/UQZF\_IGocdT8Xc1KHYS2NQ](https://mp.weixin.qq.com/s/UQZF_IGocdT8Xc1KHYS2NQ)

## **一.原理图**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源稳压芯片选用（7_40V转换5V和3_3V）_images\img_000_daef9083c0b8.png)  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源稳压芯片选用（7_40V转换5V和3_3V）_images\img_001_5a9bcbd74111.png)  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源稳压芯片选用（7_40V转换5V和3_3V）_images\img_002_2140a6ebb997.other)此电路由一个DC-DC开关稳压芯片（LM2596）和一个线性稳压芯片（AMS1117）组成，可以将7-40V的输入电压转换5V和3.3V的电压输出。此处只对前半部分开关稳压芯片做介绍，线性稳压芯片另一篇文章介绍。

## **一点通推荐**

-   **[【](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528803&idx=2&sn=b3a7d0d6ffc9f2a761d17998637c05bf&chksm=fcef9201cb981b17202148c153f4addfdc81ffeda8da1e07e3fe54a237b01507a07d2a1cc32b&token=2140630406&lang=zh_CN&scene=21#wechat_redirect)********[**免费**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528803&idx=2&sn=b3a7d0d6ffc9f2a761d17998637c05bf&chksm=fcef9201cb981b17202148c153f4addfdc81ffeda8da1e07e3fe54a237b01507a07d2a1cc32b&token=2140630406&lang=zh_CN&scene=21#wechat_redirect)********[】双色图解电子元器件核心知识与选用-234页.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528803&idx=2&sn=b3a7d0d6ffc9f2a761d17998637c05bf&chksm=fcef9201cb981b17202148c153f4addfdc81ffeda8da1e07e3fe54a237b01507a07d2a1cc32b&token=2140630406&lang=zh_CN&scene=21#wechat_redirect)******************[](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528803&idx=2&sn=b3a7d0d6ffc9f2a761d17998637c05bf&chksm=fcef9201cb981b17202148c153f4addfdc81ffeda8da1e07e3fe54a237b01507a07d2a1cc32b&token=2140630406&lang=zh_CN&scene=21#wechat_redirect)********
    
-   **[硬件面试电路分析（含拓展电路分享）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528268&idx=1&sn=7c58eb7c3b51fe8c9998926002ffc385&chksm=fcef8c2ecb9805389b2fba3bb8b4efeb68d0ca2d0abfbd1723e9c4504b15a2723d2e8f8039cb&scene=21#wechat_redirect)**
    
-   [**PCB设计参考:《PADS电路板设计超级手册》.pdf**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
-   **[5个经典实用的电路保护实例](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527535&idx=3&sn=cc724c7ea398f8fc38d400361df26098&chksm=fcef8f0dcb98061b5007135ae5e16c080a79177054c07ea3fa22ff6663734e48a02e41e91e4f&scene=21#wechat_redirect)**
    
-   **[20个常用电源降压 5V转3.3V电路设计技巧](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527466&idx=1&sn=5495dcf043e000f38c857cad5f07ad0e&chksm=fcef8f48cb98065ef0000423d165d572d8bef12e3ce66966e2e083592beab5c6383d29f59965&scene=21#wechat_redirect)**
    

**二.开关稳压芯片原理讲解**

1.  **BUCK降压电路**
    
    此DC-DC芯片降压稳压主要是基于BUCK电路。网上对BUCK电路介绍很多，此处只大致讲解。
    

BUCK基本电路形式:  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源稳压芯片选用（7_40V转换5V和3_3V）_images\img_003_7a11c334fad5.png)  
三极管导通时：  
电源经过三极管给电容C充电，给负载RL供电，同时电感L开始储能。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源稳压芯片选用（7_40V转换5V和3_3V）_images\img_004_4dad26434b97.png)  
三极管关断时：  
通过二极管构成回路，电容C和电感L为负载RL供电，但是电流在缓慢减小。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源稳压芯片选用（7_40V转换5V和3_3V）_images\img_005_da944e31e582.png)  
由上图可见，通过对三极管基极施加高低电平（PWM）可以控制三极管的导通与关断，从而达到降压的目的。

**结论：**Vo=Vi\*D（Vo是输出电压，Vi是输入电压，D是三极管基极PWM的占空比）  
因为D在0~1之间，因此输出电压一定小于输入电压。（具体推导过程可自行查找）

#### **2.LM2596基本介绍**

★LM2596是降压型电源管理单片集成电路的开关电压调节器。  
★能够输出3A的驱动电流。  
★转换效率高，70%~90%。  
★固定输出版本有3.3V、5V、12V，可调版本可以输出小于37V的各种电压。

#### **3.LM2596内部原理讲解**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源稳压芯片选用（7_40V转换5V和3_3V）_images\img_006_cf65b494da78.png)  
此芯片即是上面buck电路中三极管的部分，后面电容电感等需要外接。

开关及基准电压：ON/OFF引脚为低电平时开启此芯片，同时产生一个1.235V的参考电压，用于与反馈电压比较，实现稳压。

限流保护：当经过芯片的电流大于4.5A时，芯片自动关闭。

过热保护：当芯片温度过高时自动关闭。

三极管输出：可简单理解为BUCK电路中的开关三极管。

输出反馈：FEEDBACK脚接在电路的输出端，通过输出端的反馈电压与基准电压1.235V进行比较，从而检测输出电压是否偏离所需电压，进而对芯片进行相应的稳压控制。其中R1值固定2.5KΩ，R2值由芯片型号决定（不同输出电压，R2不同，对于电压可调的型号，需外接R1和R2）。例如图中所示，5V输出的芯片R2=7.6KΩ。因为Vref=Vo\*R1/（R1+R2）。1.235≈5\*2.5/（2.5+7.6）

假设（以5V输出为例）：当Vo由于Vi的波动大于5V时，反馈检测电阻R1上的电压将大于1.235V，此电压Vr1与基准电压Vref通过误差放大器，将Vref-Vr1（为负数）的值放大（这样，即使微小的误差也会被检测到）。然后送入比较器与一锯齿波比较，比较器即对应输出高低电平控制后级的latch（如下图所示，占空比增大)。比较输出为1时latch输出低电平，比较输出为0时latch输出高电平，相当于对比较器输出取反（实际latch类似于一个SR触发器，比较器输出接到R输入，此不做详解）。那么三极管基极接收到的PWM占空比减小，由BUCK电路的结论可知，占空比减小，输出电压减小，从而使输出处于动态平衡，稳定在5V。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源稳压芯片选用（7_40V转换5V和3_3V）_images\img_007_7a6293c533ca.png)

#### **4.常用接法及元件选取**

**数据手册接法**  
最上面的原理图即按此接法略加修改，此为固定的5V电压输出。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源稳压芯片选用（7_40V转换5V和3_3V）_images\img_008_85fa57294ed5.png)

二极管D：为了在三极管关断时，可以立刻使此二极管导通形成回路，需要选择反向恢复时间短的二极管，例如SS34（肖特基二极管）或ES2D（超快恢复二极管）。

电感L：在要求不高的情况下，选择33uH的功率电感即可。

输入输出端电容C：均由一个220uF的电解电容和一个100nF的陶瓷电容构成（最上面的原理图）。可滤除高频率和低频率的杂波，同时输出端还作为BUCK电路中的储能电容。  
  

#### **5.补充：输出可调电路**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源稳压芯片选用（7_40V转换5V和3_3V）_images\img_009_38f92277021e.png)  
此为数据手册中给出的输出可调型号芯片的连接电路。相当于把输出固定型号芯片的检测电阻R1，R2从芯片中提出，可根据需要自行配置。同时，如果把R2换成可调电阻，即可通过改变其阻值实现输出电压的调节。同样满足Vref=Vo\*R1/（R1+R2）。

Tips：在实际焊接测试的过程中，有一点需要格外注意：当LM2596的输出端没有接220uF的大滤波电容（电解电容）时，可能会使输出的电压有很大的纹波，无法正常使用。  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源稳压芯片选用（7_40V转换5V和3_3V）_images\img_010_fbdba6a347da.other)

******进大家庭⭕圈探讨回复:****** ******交流******