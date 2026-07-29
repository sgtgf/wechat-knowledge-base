# 分析二阶RC滤波电路

原创 物联网全栈开发 电路一点通 2025-03-10 11:33 广东

> 原文地址: [https://mp.weixin.qq.com/s/I\_ahGICDloxIKn66QT4nXQ](https://mp.weixin.qq.com/s/I_ahGICDloxIKn66QT4nXQ)

为了将PWM信号转成直流，需要利用低通滤波器滤除PWM信号中的高次谐波信号。

  ****推荐**  ![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_003_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_004_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_001_ead434f24ea4.png)**![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_002_ead434f24ea4.png)![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_000_ead434f24ea4.png)****  

[![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_005_c6749c457cb4.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

多阶RC低通滤波是一种比较常用的方法，如下图的二阶RC滤波电路：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_006_f69819c15e28.jpg)

用于PWM转直流的二阶RC滤波电路

# 拉普拉斯变换

单位阶跃信号定义为：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_007_6d2eaaa36803.jpg)

单位阶跃信号

其拉普拉斯变换定义为：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_008_d2deaeb8606e.jpg)

单位阶跃信号的拉普拉斯变换

如果PWM信号的高电平为VH，当输出高电平时，输出信号的拉普拉斯变换为：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_009_e9bee87c52c2.png)

电容C3，C4在频域下的阻抗分别为![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_010_ea6ea62eff19.png)以及![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_011_4ec23eac0a54.png),得到频域下的等效电路和参数：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_012_a7b7e7677408.jpg)

频率下的电路和参数

# Octave符号运算

当输入信号![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_013_85da3d8c407d.png)时，根据频域下的电路，可以计算出电容C4两端的电压。

涉及到分式多项式的运算，运算量大，容易算错。

可以使用Octave的符号运算快速得到结果。

Symbolic符号运算包需要用到Python的SymPy库。

在Octave的命令行窗口，运行pkg install -forge symbolic，下载symbolic符号运算包，

再运行pkg load symbolic，加载symbolic符号运算包。

运行以下脚本：

```
syms R3 R4 C3 C4 s VHZC4=1/(C4*s);%电容C4的阻抗ZC3=1/(C3*s);%电容C3的阻抗Z1=R4+ZC4;%Z1为R4与C4串联Z2=ZC3*Z1/(ZC3+Z1);%Z2为C3与Z1并联Vo=VH/s*Z2/(Z2+R3)*ZC4/Z1;%C4两端的电压为Z2与R3分压之后，再由C4与R4分压simplify(Vo)%化简符号表达式
```

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_014_cb4228b2e183.jpg)

Octave符号运行过程

得到电容C4两端电压Vo(s)为：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_015_8a7bf2e4fef4.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_016_c5bd1f63ce57.png) （式1）

# 拉普拉斯逆变换

假设![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_035_bfe8b23792b8.png)分别为方程

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_018_8dca4ffc6ca1.png)的两个根，

则根据韦达定理，有：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_019_fe7fc80cce8c.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_020_bbe0593ec72b.png)

而![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_021_ab2f52f17b0c.png)可以表示为：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_022_ba77546f7208.png)

对于形如![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_023_e87d04b19491.png)的多项式，

可以转换为：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_024_85cf11001601.png)

左右两边同时乘以s,得到，

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_025_022f12863076.png)

在上式中，令s=0，得到：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_026_b89626306909.png)

左右两边同时乘以![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_027_b71af1217665.png)之后，令![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_028_95860186279e.png),得到：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_029_cd57910e36dc.png)

同样得到，

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_030_1082f2c440f2.png)

所以，

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_031_79567026f89b.png)![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_032_54faed86c6f3.png)

根据拉普拉斯的逆变换，

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_033_475bfbbffef3.jpg)

常见的拉普拉斯变换对

得到，C4两端的电压在时域的表达式为：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_034_a6adfb84eea4.png)（式2）

# PWM输出直流的纹波分析

当R3=R4=10kΩ，C3=C4=1uF时，

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_017_bfe8b23792b8.png)分别是以下方程的两个根，

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_036_59abbb8cf24d.png)的两个根，

根据求根公式，得到,

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_037_08d9e25cee72.png)的两个根，

假设![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_038_8d00233a22cb.png)，

当PWM的频率为800Hz时，占空比为100%时，充电的最长时间为1.25ms，

此时，![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_039_7160cc3ffbf4.png)最大为-38.2\*1.25ms=-0.04775<1，

而![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_040_03b325c4e7d7.png)最大为-261.8\*1.25ms=-0.32725<1，

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_041_14c25682fe26.jpg)

常见函数的泰勒公式展开

将函数![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_042_46aaf956875f.png)，![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_043_0f3c74b29e25.png)用泰勒公式展开，并保留至第二项；

得到：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_044_ce766f4a9356.png)，

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_045_20bdb4458abc.png)，

代入式2，得到：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_046_0846122eab0c.png)（式3）

当考虑PWM输出一段时间之后，PWM在切换到高电平的瞬间，电容C4已经有一定的电压U0，则式1应该加到电容C4的初始电压，再经过拉普拉斯逆变换，得到，

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_047_da1a7cd2a2af.png)\--对于电容初始电压不为0的情况，此处分析有误，在另一篇文章的再做详细分析。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_048_f0b18286a9d9.jpg)

充电波形

当高电平为5V，占空比为50%时，纹波大小为：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_049_48c31e9b6a02.png)![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_050_b1b6dd9ddf81.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_051_5b46e32cb7b6.png)

  

## **一点通推荐**

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电磁兼容_EMC\分析二阶RC滤波电路_images\img_052_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**