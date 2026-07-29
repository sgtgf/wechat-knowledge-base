# 双向DC-DC 电路（直流-直流转换电路）

原创 电路一点通 2025-01-27 11:28 广西

> 原文地址: [https://mp.weixin.qq.com/s/cMnzpDILcg6JF7H5v3w1YQ](https://mp.weixin.qq.com/s/cMnzpDILcg6JF7H5v3w1YQ)

> 《Forth——双向DC电路》
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
> 双向DC-DC 电路组成介绍
> 
> 双向DC-DC 电路状态分析及平均电流与占空比的关系
> 
> 状态一：纯Buck电路
> 
> 状态二：纯Boost电路
> 
> 状态三：Buck-Boost混合电路
> 
> MATLAB作关系图
> 
> 手写整理版
> 
> 电路组成
> 
> 状态分析与公式推导
> 
> 比较分析三种状态
> 
> * * *
> 
>   

[![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_000_ee6997ddabb5.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

## 电子整理版 

#### 双向DC-DC 电路组成介绍

        双向DC-DC 电路就是在保持输入、输出电压极性不变的情况下，根据实际所需的改变电流的方向，实现双象限运行的双向直流变换器。

        通过改变MOS管的开断，可以改变输出电流的方向，合理运用输入输出端口，既可以实现降压功能，也可以实现升压功能。它由两个MOS管和两个二极管组成。其电路结构图如图2.3.1所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_001_ef42d2936ed4.png)

图2.3.1   双向DC-DC电路基本电路结构

#### 双向DC-DC 电路状态分析及平均电流与占空比的关系

        假定开关管开断状态始终不同（注：电路设计中使用芯片IR2103构成驱动电路实现此设定），根据实际电路开关管不同开断方式及时间情况，得到纯Buck电路、纯Boost电路、Buck-Boost混合电路三种状态。

        设电路的单位工作周期为Ts，开关管Q1开通所持续时间为t1 =DTs，其中D为Q1导通时间所占工作周期的比例，即占空比。开关管Q2开通所持续时间为t2=Ts-t1 =（1-D）\*Ts。I1为输入U1侧电流，I2为输出U2侧电流，Io流经iL的平均电流，电流取正方向为从左到右。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_002_3b97fc590c81.png)

下面分别对各状态进行分析：

##### 状态一：纯Buck电路

        如图2.3.2所示。左侧作为输入端，右侧作为输出端时电路等效于Buck电路。此时Q2始终保持关断状态，通过改变mos管Q1的开断时间，即其占空比D，实现从U1到U2的Buck电路降压功能。为便于分析，状态一只考虑等效Buck电路连续状态下情况，即为纯Buck电路。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_003_ffa4397db22e.png)

图2.3.2   等效buck电路工作

结合之前分析可得纯Buck电路下：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_004_68a35f5ede97.png)

##### 状态二：纯Boost电路

        如图2.3.3所示。左侧作为输出端，右侧作为输入端时电路等效于Boost电路，此时Q1始终保持关断状态，通过改变mos管Q2的开断时间，即其占空比D，实现从U2到U1的Boost电路升压功能。为便于分析，状态二只考虑等效Boost电路连续状态下情况，即为纯Boost电路。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_005_77c910f1713c.png)

图2.3.3   等效boost电路工作

结合之前分析可得纯Buck电路下：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_006_4996bbfff3c2.png)

即：

        纯Boost电路的平均电流=-纯buck电路的平均电流

        纯Boost电路的增益=纯Buck电路的增益的倒数

##### 状态三：Buck-Boost混合电路

        如图2.3.4所示。合并分析Buck电路和Boost电路中的特殊情况，即其工作在断续情况下，即为Buck-Boost混合电路。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_007_06588f4fdcd5.png)

图2.3.4   buck-boost混合电路电路工作

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_008_e5c2f4bee0c5.png)

#### **MATLAB作关系图**

运用matlab求解、作图，程序如下： 

syms   
M\=0:0.0005:0.5;I1=-0.5:0.001:0.5;  
for D=0:0.1:1  
    b\=1;  
    for a=0:0.0005:0.5  
        M(b)=D;  
        b\=b+1;  
    end  
    plot(I1,M);  
    hold on;  
end   
D\=0:0.01:1;x=0.5.\*D.\*(1\-D);y=D;  
plot(x,y)  
hold on;  
D\=-1:0.01:0;x=-0.5.\*(-D).\*(1+D);y=-D;   
plot(x,y)  
hold on  
xlabel('I\*');ylabel('电压增益M');  
legend('D=0','D=0.1','D=0.2','D=0.3','D=0.4','D=0.5','D=0.6','D=0.7','D=0.8','D=0.9','D=1','纯buck状态分界线','纯boost状态分界线');

结果如图2.3.5所示。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_009_125c1ba89f26.png)

图2.3.5 占空比不同情况下I\*O与M的关系图

## 手写整理版

##### 电路组成

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_010_733c86b50012.png)

##### 状态分析与公式推导

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_011_90aba970e30c.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_012_0d5cc314d08e.png)

##### 比较分析三种状态

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_013_315643f8bc20.png)

>         如有不解/错误/小意见/小讨论/小思考...欢迎提出！

  ****推荐**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_015_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_014_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_017_ef7d17c8c639.png)**![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_016_ef7d17c8c639.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\双向DC_DC_电路（直流_直流转换电路）_images\img_018_ef7d17c8c639.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

******进大家庭⭕圈探讨回复:****** ******交流******