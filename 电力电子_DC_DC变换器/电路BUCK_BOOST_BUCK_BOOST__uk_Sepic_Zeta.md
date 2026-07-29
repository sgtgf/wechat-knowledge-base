# 电路BUCK、BOOST、BUCK-BOOST、Ćuk、Sepic、Zeta

原创 电路一点通 2025-07-23 11:29 广东

> 原文地址: [https://mp.weixin.qq.com/s/SlIWXvhd4LnAVQl97wxkqw](https://mp.weixin.qq.com/s/SlIWXvhd4LnAVQl97wxkqw)

#### 目录

-   DCDC简介
    
-   BUCK电路
    
-   BOOOST电路
    
-   BUCK- BOOST电路
    

-   BUCK - BOOST电路的推导过程
    
-   BUCK-BOOST电路分析
    

-   Ćuk电路(BOOST-BUCK电路化简而来)
    
-   Sepic电路(Ćuk电路从输出端入手调整D与L2的位置。)
    
-   Zeta电路(Ćuk电路从输入端入手调整S与L1的位置)
    

## DCDC简介

DC-DC转换器（DC-DC converter）是一种电力转换设备，用于将一种直流电压转换为另一种直流电压。它通常由开关元件（如晶体管或MOSFET）、电感、电容和控制电路等组成。

  

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_000_83dd5bcb794f.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

  

DC-DC转换器的主要功能是改变输入直流电源的电压水平，以满足不同电路或设备对电压的需求。它可以提供降压（Buck）、升压（Boost）、升降压（Buck-Boost）等不同类型的电压转换。

简单来说，就算能将一种的直流输入电压(或电流)变换成另一等级直流输出电压(或电流)的装置。常见的有BUCK、BOOST、BUCK-BOOST、除此之外还有Ćuk、Sepic、Zeta电路等。

## BUCK电路

> 特点

-   只能做降压
    
-   降压升流
    
-   电压增益 = D
    
-   电流增益 = 1 / D
    

> 工作原理

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_001_4b16fefd081f.png)

> 如图是BUCK电路的基本结构，下面我们来分析以下BUCK电路的工作原理

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_002_64e59941a018.png)

-   当开关S关闭时，输入电压流经电感，给电容C充电和负载供电，电感上的电流增加，此时电感电压方向从左到右，电感左边为正，右边为负。输出电压为Vo = Vin - VL。  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_003_fd8bcafb4940.png)
    
-   当开关S断开时，输入电压不在起作用，由于电感两端电压不能突变，会产生一感应电动势电感上的电流开始减小，电感电压为左负右正，电感和电容内储存的能量给负载供电。
    
-   在实际电路中，开关S会由控制芯片控制，一般的控制方式有PWM脉宽调制和PFM脉冲频率调制方式。
    
-   由于只有在开关S闭合时，电源才会作用到后面电路，其余时候则是由电感和电容储存的能量给负载供电，在不考虑元器件的开关损耗且电路与稳态、连续（COM）的情况下，可以推导出Vout = Vin \* D(D为PWM的占空比)  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_004_dcf08e98175a.png)
    

> 下面介绍一些BUCK电路的重要参数

-   Vout = Vin \* D ; D= Ton \* fs (fs为控制芯片内部的开关频率)
    
-   ∆IL(电感纹波电流) = Vout \* (1 - Vout / Vin) / L\*fs 输入电压越大纹波电流也越大，在电路设计时需要以最大输入电压计算纹波电流，一般设计纹波电流在输出电流的0.2倍到0.4倍之间。
    
-   较大的纹波电流可以提供更高的输出效率，但也会增加电感的损耗和温升，较小的纹波电流有助于提高电路稳定性。
    
-   L = Vout \* (1 - Vout / Vin) / ΔIL \* fs 电感的选择需要按照最高输入电压计算，并留有一定余量
    
-   IL(MAX) = Iout + 0.5 \* ΔIL 要求电感的饱和电流 小于 IL(MAX)
    

![-
-](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_005_3f06c4b6260a.png)

> 同步BUCK和非同步BUCK的区别

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_006_3adc912a0b93.png)

-   这个是同步BUCK。（其中MBOT替代了续流二极管的位置，MTOP与MBOT处于交替开启状态）  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_007_669994f2775b.png)
    
-   这个是非同步BUCK
    
-   同步BUCK比非同步BUCK拥有更高的能量转换效率。
    

> 伏秒平衡与安秒平衡

-   在我们前面的分析中，都是基于DCDC变换器工作中稳态，元件均为理想元件，线路阻抗为0，开关频率足够高，电感上的电流、电容的电压近似不变的情况。
    
-   此时对于电感有伏秒平衡：开关打开期间电感电压对开启时间的积分 = 开关闭合期间电感的电压对闭合时间的积分 （其本质就是在一个周期内，电感储存的能量 = 电感释放的能量）- 后面的电路输出都可以从这个公式推出。
    
-   对于电容有安秒平衡，原理同电感。
    

> 最后是开关开启和关闭时各器件的电压与电流变化趋势

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_008_21a7111871d2.png)

## BOOOST电路

> 特点：

-   只能做升压
    
-   升压降流
    
-   电压增益 = 1/ （1 - D）
    
-   电流增益 = 1 - D
    

> 工作原理

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_009_6a40f6d43c52.png)

-   如图是BOOST电路的基本结构，下面我们来分析一下工作原理
    

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_010_752fb7552705.png)

-   开关S闭合，后级电路被短路，前级电路电流通过电感和开关，后级电路电容C放电，提供输出电压给负载，电容电压从大于Cin开始减小(电容电压会一直大于Vin）。此时电感上电流增加，电压左正右负。VL = Vin。  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_011_eaf1aaafd78a.png)
    
-   当开关断开时，电流通过电感L和二极管D给电容C充电且提供负载电压。此时电感上的电压差减小，电流开始减小，由于电感的自感，此时电压左负右正，给电容充电，电容电压增加(电容电压一直大于Vin)，同时给负载供电。
    

> 输出电压推导

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_012_ff323a526f6f.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_013_7f1a0b399609.png)

-   由电感的伏秒积平衡：Vin_D_Ts = （Vo-Vin）\*(1-D)\*Ts
    
-   得到： Vout = V\_IN/(1−D) ； D=1 − Vin / Vout
    

> BOOST电路的重要参数：

-   Vout = Vin / ( 1 − D ) ; D = 1 − Vin / Vou
    
-   ΔIL(电感纹波电流) = Vin / L \* Ton = Vin ∗ ( 1 − Vin / Vout ) / L\* fs 输出电压越大，电感纹波电流越大(Vout = 2 \* Vin 时最大) ，一般选择ΔIL在0.2倍输入电流到0.4倍输入电流之间。
    
-   IL(MAX) = Iout \* Vout / （电源转换效率 \* Vin）+ ΔIL / 2 ，电感电流最大值需要小于电感的饱和电流 。
    

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_014_5eaffc5cf93a.png)

> 开关开启和关闭时各器件的电压与电流变化趋势

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_015_e313362cfdff.png)

## BUCK- BOOST电路

上面我们介绍了BUCK和BOOST电路，他们都只能做降压或升压，现在我们来介绍以下BUCK-BOOST电路

BUCK-BOOST电路是一种电源转换电路，可以实现输入电压的升压和降压。这种电路通常由开关管、电感器、二极管和输出电容组成。BUCK-BOOST电路的作用是根据需要调整输出电压，使之高于或低于输入电压。

BUCK-BOOST电路可以实现对升降压。

### BUCK - BOOST电路的推导过程

-   BUCK-BOOST电路就是BUCK电路加上一个BOOST电路  
    ![g)](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_016_263901e8ff82.png)  
    很明显，这个电路存在一个问题：元件太多了，实现的成本很大，所以我们做出如下改进：
    

1.  BUCK和BOOST电路共用一个开关S和续流二极管D。
    

那么Vout = - Vin \* D/（1-D），发现当D的之变化时，同样可以实现升降压  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_017_5ab6bdbc9e97.png)

1.  L1、L2、C1组成的LCL网络在低频状态下可以由一个电感L代替(具体推导过程我也不是很懂，直接放结论)
    

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_018_c1d6d7ffd75c.png)

> 有了以上内容，我们就可以对电路进行简化了：

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_019_d09670bb0412.png)

但是，我们还需要解决一个问题：我们前面讲S1和S2可以用同一个开关控制，D1和D2可以用同一个开关控制，那具体思把哪一个元件去掉，去掉后的位置该这么放呢？

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_020_7907903327aa.png)

-   开关S导通时，电流通过S1经过电感L在经过S2，这个时候，S2可以省略。  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_021_3f1d76ce6428.png)
    

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_022_5ed13c826c7a.png)

-   当开关S断开时，电流通过电感流经D2和D1，这里我们可以吧D2省略，同时讲整个输出回路翻转  
    ![-](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_023_b0dd212ef4ae.png)
    
-   最后，我们将开关闭合断开时的简化电路拼到一起，就得到了BUCK-BOOST电路
    

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_024_12ddee0bd121.png)

### BUCK-BOOST电路分析

> 特点：

-   输出电压Vout = - D\* Vin / (1 - D) 与输入电压相反。
    
-   可以升降压
    
-   电压增益 = D /1-D
    
-   电流增益 = 1 - D / D
    

> BUCK-BOOST电路的工作原理

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_025_e0b950a68c16.png)

-   当开关闭合时，电源给电感充电，电感上电流增加，电压上正下负，后级电路电容给负载供电。  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_026_6af2188421c4.png)
    
-   当开关断开时，电感释放能量，电感电流减小，电压上负下正。给电容充电和负载充电。
    

## Ćuk电路(BOOST-BUCK电路化简而来)

> 与BUCK-BOOST电路类似，Ćuk电路电路是由BOOST-BUCK电路构成，并且通过上面的方法推导化简来的，这里我们就不做讲解，直接放结论。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_027_b2f77f2c2b39.png)

> 特点

-   输出电压Vout = - D\* Vin / (1 - D) 与输入电压相反。
    
-   可以升降压
    
-   电压增益 = D /1-D
    
-   电流增益 = 1 - D / D
    

## Sepic电路(Ćuk电路从输出端入手调整D与L2的位置。)

> 将 Ćuk电路的输出端翻转过来，就形成了Sepic电路

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_028_2a50a6260f3b.png)

> 特点

-   输出与输入同向
    
-   也可以做升降压，但是需要的元件更多，所以不经常使用
    

## Zeta电路(Ćuk电路从输入端入手调整S与L1的位置)

> 将Ćuk电路的输入端翻转过来，就形成了Zeta电路

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_029_e38c7bec1e52.png)

> 特点

-   输出电压Vout = - D\* Vin / (1 - D) 与输入电压相反。
    
-   可以升降压
    
-   电压增益 = D /1-D
    
-   电流增益 = 1 - D / D
    

  

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[MOS管导通和工作原理，这样讲解更全面](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247550027&idx=1&sn=57d6ebc656eb23e66f46318cedb06414&scene=21#wechat_redirect)**
    
-   **[电路设计LDO线性稳压器要不要并联二极管？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247549625&idx=1&sn=0a71180aab661ae4ff2dd38d96ac0096&scene=21#wechat_redirect)**
    
-   **[蔚来能源总部搬迁武汉，（附：内推岗位）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247523881&idx=1&sn=b181ea7ffc6b6a7637310d05383305ae&scene=21#wechat_redirect)**
    
-   **[新能源纯电整车控制器上下电控制PPT](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247497083&idx=2&sn=39344af75adcf42b091d134eabe77c6a&scene=21#wechat_redirect)**
    
-   **[高压电机知识培训-PPT(常见故障及处理方法)](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456260351&idx=1&sn=c71c631b8a3c0742dd8b87b6361ac43b&scene=21#wechat_redirect)**
    

  

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电路BUCK_BOOST_BUCK_BOOST__uk_Sepic_Zeta_images\img_030_d97a53dd76b6.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来@电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️