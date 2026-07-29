# RLC电路及滤波器设计

原创 电路一点通 2024-09-24 11:39 广东

> 原文地址: [https://mp.weixin.qq.com/s/6-4ksmNiS34ZbG59sSES-A](https://mp.weixin.qq.com/s/6-4ksmNiS34ZbG59sSES-A)

#### 文章目录

-   LC-resonant circuits
    

-   频率响应
    
-   频率响应
    
-   滚降系数
    
-   带通滤波器
    
-   并联
    
-   串联
    
-   带阻滤波器
    
-   电容耦合LC震荡电路
    
-   电感耦合LC震荡电路
    
-   电容和电感耦合
    

-   滤波器配置总结
    
-   滤波器设计
    

-   低通滤波器
    
-   高通滤波器
    
-   带通滤波器和带阻滤波器
    
-   计算 normalised component
    

-   LC 滤波的缺点
    

  

**👇👇👇更多技术资料👇👇👇**

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_000_e0cbcaf82b73.other)

## LC-resonant circuits

电感和电容常以LC震荡电路的形式存在于射频电路中

LC震荡电路也被称为 LC tank，因为它可以像水箱存水一样存储能量

在一个LC震荡电路中，电感和电容以串联或并联的方式连接

### 并联

如图是一个并联LC震荡电路  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_001_e68fc111a586.png)  
其中 R S R\_S RS是电源的内阻，电感和电容的阻抗分别为：  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_002_2d5caa807d8d.png)  
此时，存在频率 ω \\omega ω，使得二者的感抗可以互相抵消，这个频率称为谐振频率 ω 0 \\omega\_0 ω0  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_003_6afdc54a87e2.png)

#### 带通滤波器

电路的输出电压和输入电压之比为：  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_004_ed0a9954e601.png)  
在谐振频率下，电感和电容互相抵消，导纳为零，阻抗无穷大，可视为开路，根据上图的电路，知道只有谐振频率下的信号可以通过，由此制成带通滤波器

### 串联

当电容和电感串联时，同样存在一个谐振频率，使得二者的感抗互相抵消，串并联的谐振频率计算公式相同

### 带阻滤波器

串联时，输出电压和输入电压之比为  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_005_5c2886b60403.png)  
谐振频率下，电容和电感表现为短路，理想情况下阻抗为零，此时频率为 ω 0 \\omega\_0 ω0的信号会前往地，而不是输出，这样就制成了带阻滤波器

### 电容耦合LC震荡电路

将两个并联LC震荡电路用一个电容耦合，可以得到更好的带通滤波器，如图：  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_006_c3afb5a635e5.png)  
在频率低于谐振频率时，电容可以视为断路，LC tank 等价于一个电感，等效电路为  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_007_69ec2316ee0c.png)  
低频信号会经过电感的阻抗后到达地，此时电感的阻抗很小  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_008_a9aba995bb3a.png)

在频率高于谐振频率时，电感视为断路，等效电路为：  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_009_7bc5d2f6db24.png)  
高频信号经过电容的阻抗后到达地，此时电容的阻抗很小  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_010_edf3c2826c54.png)

#### 频率响应

根据耦合电容的容值，耦合可能过强或过弱  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_011_6a7002edccb4.png)  
耦合的程度会影响滤波器的表现

#### 滚降系数

在判断滤波器的性能时，一个很重要的参数是 roll-off，即滤波器削弱无用信号的速度  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_012_bbe44a747722.png)  
如图，使用多个 resonators 的滤波器拥有更好的滚降系数，然而相应的，也会造成的更强的信号衰减和成本上升

### 电感耦合LC震荡电路

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_013_1a229c4bd540.png)

#### 频率响应

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_014_bd74710309cd.png)

### 电容和电感耦合

用串联的电感和电容来耦合，可以获得更好的滚降系数  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_015_a6f2c3a4f4b1.png)

同样的，将耦合和接地用的LC tank 交换，可以得到带阻滤波器：  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_016_1d6176109d9c.png)

## 滤波器配置总结

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_017_c5ef10258b50.png)  
途中是不同滤波器对应的电容，电感配置

## 滤波器设计

在设计滤波器时，电感和电容可以布置在信号的通道上，或者是接地，如上图所示

L 和 C 的值可以通过 Normalised component g k / 1 g k g\_k/\\frac{1}{g\_k} gk/gk1 ，以及 corner 或 center frequency ω c \\omega\_c ωc 来决定

g k g\_k gk 的计算方式为：  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_018_664e63559f05.png)  
其中 n 是电容或电感的数量（注意这里是尽可能合并之后的数量）

低通滤波器 L k L\_k Lk 和 C k C\_k Ck 的计算方式为：  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_019_4f2afaac4a46.png)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_020_3994a66b1828.png)

对于低通滤波器，系数为 g k g\_k gk

高通滤波器 L k L\_k Lk 和 C k C\_k Ck 的计算方式为：  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_021_b408fcd7db36.png)  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_022_96b04bbd63c4.png)  
对于高通滤波器，系数为 1 g k \\frac{1}{g\_k} gk1，可以看到，将低通滤波器中的 g k g\_k gk 取倒数，就得到了高通滤波器的计算公式

其中 R 0 R\_0 R0 是电源或是负载的内阻

### 计算 normalised component

g k , 1 g k g\_k, \\frac{1}{g\_k} gk,gk1 与 R 0 R\_0 R0 相关

#### 低通滤波器

对于含有两个元件的低通滤波器，关系为：  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_023_5ac7065d9882.png)

#### 高通滤波器

对于含两个元件的高通滤波器，关系为：  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_024_11a1e5381ea6.png)

#### 带通滤波器和带阻滤波器

带通和带阻滤波器的 normalised component 除了 g k g\_k gk 之外，还包含一个 bandwidth fraction Δ，同时对于这两种滤波器, n 是LC tank 的数量，而不是电感或电容的数量  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_025_ce0b4288c4e3.png)  
根据上图，可以得出 Δ \\Delta Δ 和 ω c \\omega\_c ωc 的值为：  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_026_289e1c742656.png)  
下图是两种滤波器分别对应的 normalised component  
![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_027_b59cf4e0bf64.png)

## LC 滤波的缺点

由于寄生电路的存在，LC 滤波器无法在过高的频率下工作（一般为 2GHz 以上），电感自谐振的频率yy也会决定 LC 滤波器的最大工作频率

现代通信系统通常采用 surface acoustic wave 滤波器

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\RLC电路及滤波器设计_images\img_028_d25bc7b0ced1.other)

## **一点通推荐**

[搞硬件的你，被 华为2024年校招薪资吓到吗？（投票看看）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526748&idx=1&sn=8e28a2e93acf072473092195ee7fb854&chksm=fcef8a3ecb9803287cb056ac85e4f73a9ba57cfcf6fb1246078ba62c434beecf7d5eca040852&scene=21#wechat_redirect)  
[【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路清晰有方向](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&scene=21#wechat_redirect)[常见](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523395&idx=1&sn=a6f1ffa4f12b146e7e7e43f64cfee4d0&token=796481278&lang=zh_CN&scene=21#wechat_redirect)  
[【_华为_ 】2024届校园招聘-硬件通用/单板开发-40道题（附答案）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527563&idx=1&sn=a8afccbf6eb0630b71b071e512dbc937&chksm=fcef8fe9cb9806ff57d1bb9324600493784e5bd03a77d499e840a82481ac8837db5ea5e578d3&scene=21#wechat_redirect)  

[_华为_2024届校园招聘【硬件开发/设计工程师】试题-附答案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&scene=21#wechat_redirect)   [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523395&idx=1&sn=a6f1ffa4f12b146e7e7e43f64cfee4d0&token=796481278&lang=zh_CN&scene=21#wechat_redirect)

[华为硬件机试新题目-〔2023 版 本〕](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526592&idx=1&sn=adc0e40eb76b8e8d6050f65ab6c9a980&chksm=fcef8ba2cb9802b459e10df35556dbbc61a04a38cfa5d9dec3569813bcb7eb2b7717b04c16e5&scene=21#wechat_redirect)    

[硬件工程师学习思维路线图](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526370&idx=2&sn=f650a68f03476447e527c38908cf8ec5&chksm=fcef8480cb980d9692641005a15a1bec1e94f2d40d722ae1403ef587411f054514a05e1f8241&scene=21#wechat_redirect)


******进大家庭⭕圈探讨回复:****** ******交流******