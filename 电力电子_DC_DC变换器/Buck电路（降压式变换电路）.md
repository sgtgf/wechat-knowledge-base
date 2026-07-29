# Buck电路（降压式变换电路）

原创 电路一点通 2025-01-24 11:27 广西

> 原文地址: [https://mp.weixin.qq.com/s/--MO-Ik9vpJsdGFRZlzwUQ](https://mp.weixin.qq.com/s/--MO-Ik9vpJsdGFRZlzwUQ)

> 《First——Buck电路》
> 
>         Buck、boost、buck-boost、双向DC电路大纲整理。
> 
>         分析了电路连续、临界、断续三个开关状态，推导稳态电压增益M与电感平均电流I0关系，并使用matlab作关系图。
> 
>         建议按顺序理解阅读。
> 
> * * *
> 
> ## 目录
> 
> 电子整理版
> 
>                 Buck电路组成介绍
> 
>                 Buck电路状态分析 
> 
>                 Buck电路不同状态下平均电流与占空比的关系
> 
>                 MATLAB作关系图
> 
> 手写整理版
> 
>                 电路组成与状态分析
> 
>                 Buck电路不同状态下平均电流与占空比的关系 
> 
>                 MATLAB作关系图

  

[![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_000_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

## 电子整理版

##### Buck电路组成介绍

        Buck电路由MOS管IRF540N ，二极管，电感，电容，负载所构成。其电路结构图如图2.1.1所示。其中输入电压 Ud为18V,UL为电感两端电压，Uo为平均输出电压，iL为通过电感的电流，Io为流经iL的平均电流。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_001_3667b3e7e308.png)

 图2.1.1   Buck电路基本电路结构

        电感L和电容C组成低通滤波器，此滤波器设计的原则是使 Ud(t) 的直流分量可以通过，而抑制Ud(t) 的谐波分量通过；电容上输出电压 Uo(t)就是 Ud(t) 的直流分量再附加微小纹波Uripple(t)。由于电路工作频率很高，一个开关周期内电容充放电引起的纹波Uripple(t) 很小，相对于电容上输出的直流电压Uo有：Uripple(t)<< Uo(t),所以电容上电压宏观上可以看作恒定。电路稳态工作时，输出电容上电压由微小的纹波和较大的直流分量组成，宏观上可以看作是恒定直流，这就是开关电路稳态分析中的小纹波近似原理。

##### Buck电路状态分析 

        一个周期内电容充电电荷高于放电电荷时，电容电压升高，导致后面周期内充电电荷减小、放电电荷增加，使电容电压上升速度减慢，这种过程的延续直至达到充放电平衡，此时电压维持不变；反之，如果一个周期内放电电荷高于充电电荷，将导致后面周期内充电电荷增加、放电电荷减小，使电容电压下降速度减慢，这种过程的延续直至达到充放电平衡，最终维持电压不变。这种过程是电容上电压调整的过渡过程，在电路稳态工作时，电路达到稳定平衡，电容上充放电也达到平衡，这是电路稳态工作时的一个普遍规律。

        根据充、放电情况，得到以下三种状态：

        状态一：Ud放电，电感储能，电容充电，二极管截止，三极管导通，iL线性增加，UL1 \= Ud - Uo，此时的等效电路图如图2.1.2(a)所示。

        状态二：Ud停止放电，电感成为新的供电元件，电容保持，二极管导通，UL2 \= - Uo，此时的等效电路图如图2.1.2(b)所示。

        状态三：电感放电结束，电容开始向负载供电，UL3 \= 0，此时的等效电路图如图2.1.2(c)所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_002_b2492b6c86ce.png)(a)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_003_35d85302439d.png)(b)         ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_004_190c6560f5a5.png)(c)

图2.1.2   Buck电路工作时不同状态下的等效电路图 

        由于开断时间不定，所以Buck电路工作状态分为连续状态和断续状态。其中连续状态包含状态一、二，断续状态包含状态一、二、三。

##### Buck电路不同状态下平均电流与占空比的关系

        设Buck电路的单位工作周期为Ts，上述状态一所持续时间为t1 =DTs，其中D为状态一所占工作周期的比例，即占空比状态一所持续时间为t2 =D1Ts，其中D1为状态二所占工作周期的比例。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_005_0a725e0009ca.png)

 ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_006_0411b2d53074.png)

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_007_0c4208102682.png)

##### MATLAB作关系图

运用matlab求解、作图，程序如下： 

syms   
I1\=0:0.0001:0.3;M=0:0.0002:0.6;  
for D1=0:0.1:1  
n\=1;  
for I=0:0.0001:0.3  
if I>0.5\*D1\*(1\-D1)  
M(n)=D1;  
else   
M(n)=(D1\*D1)/(2\*I+(D1\*D1));  
end   
n\=n+1;  
end   
plot(I1,M)  
hold on;  
end  
xlabel('I\*');ylabel('电压增益M');  
D1\=0:0.01:1;  
x\=0.5.\*D1.\*(1\-D1);y=D1;   
plot(x,y);  
legend('D=0','D=0.1','D=0.2','D=0.3','D=0.4','D=0.5','D=0.6','D=0.7','D=0.8','D=0.9','D=1','分界线');

结果如图2.1.4所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_008_a9ba5de4d72e.png)

图2.1.4 占空比不同情况下I\*O与M的关系图

## 手写整理版

##### 电路组成与状态分析

##### ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_009_8ea5bb8b610b.png)

##### Buck电路不同状态下平均电流与占空比的关系 

分析推导：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_010_6211b8fbed24.png)

  

##### MATLAB作关系图

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_011_77e91fa0d6ba.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_012_f23b741059a9.png)

  ****推荐**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_016_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_014_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_015_ef7d17c8c639.png)**![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_013_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\Buck电路（降压式变换电路）_images\img_017_ef7d17c8c639.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)****[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

******进大家庭⭕圈探讨回复:****** ******交流******