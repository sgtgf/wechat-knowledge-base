# 5种电平转换电路方法详解（NMOS、NPN、二极管、芯片）

原创 电路一点通 2024-08-21 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/B8jp2oJ-H-cSjtqU1tg6iA](https://mp.weixin.qq.com/s/B8jp2oJ-H-cSjtqU1tg6iA)

# **一、两颗NMOS搭建的电平转换电路**

我们两个设备或者芯片之间要进行I2C通讯，但他们I2C的电平不匹配，就需要增加电平转换电路了，这里我们用两颗NMOS管实现的I2C电平电路，从而实现3.3V电压域与5V电压域间的双向通讯。

![](D:\电脑文件\公众号知识库\电工_教育_学习\5种电平转换电路方法详解（NMOS_NPN_二极管_芯片）_images\img_000_38bddc3c5e35.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\5种电平转换电路方法详解（NMOS_NPN_二极管_芯片）_images\img_001_2131d9dc03ea.other)

R1和R2不一定是用10K电阻，也可以用4.7K的电阻，4.7K的上拉电阻，肯定比10K的驱动能力强，但它功耗会比10K的功耗高，所以一般情况下，我们只是两个芯片之间的电平转换，10K上拉电阻就可以满足了。像I2C总线，如果I2C总线上的设备有3个或以上，我们为了提供它的驱动能力，也是可以将上拉电阻改到4.7K或者2.2K都是可以的。

我们看看它的工作原理，这里以SCL为例：

1）当3.3V\_SCL输出高电平时，Q1的Vgs = 0，MOS管截止，5V\_SCL被R3上拉到5V,所以5V\_SCL为高；

2）当3.3V\_SCL输出低电平时，Q1的Vgs = 3.3V，MOS管导通，5V\_SCL被MOS管拉低,所以5V\_SCL为低；

3）当5V\_SCL输出高电平时，Q1的Vgs不变，MOS管截止，3.3V\_SCL被R1上拉到3.3V,所以3.3\_SCL为高；

4）当5V\_SCL输出低电平时，Q1的Vgs不变，MOS管截止，但通过MOS管的自身寄生二极管将3.3V\_SCL拉到低电平，所以3.3\_SCL为低；

  

我们这里讲解的是3.3V电压域与5V电压域，如果是2.5V、1.8V的电压域，设计的时候一定要考虑MOS管的Vgs开启导通电压是否满足。

  

# **二、两颗NPN三极管搭建的电平转换电路**

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\5种电平转换电路方法详解（NMOS_NPN_二极管_芯片）_images\img_002_e0dccf561e29.png)

  

我们这里用三极管来搭建UART通讯的电平转换电路，从电路模型上看跟MOS管的差不多，只是我们需要在三极管的b极串一个限流电阻。

我们看看它的工作原理，这里以Q5这组为例：

1）当5V\_TXD输出高电平时，Q5的Vbe < 0.7V，三极管截止，3.3V\_RXD被R5上拉到3.3V,所以3.3V\_RXD为高；

2）当5V\_TXD输出低电平时，Q5的Vbe > 0.7V，三极管导通，3.3V\_RXD通过三极管被5V\_TXD拉低，所以3.3V\_RXD为低；

  

# **三、二极管钳位搭建电平转换电路**

其实用二极管钳位法来搭建的电平转换电路，在工作中也经常在用。

![](D:\电脑文件\公众号知识库\电工_教育_学习\5种电平转换电路方法详解（NMOS_NPN_二极管_芯片）_images\img_003_654fd48bbdf8.png)

  

我们来看看它的工作原理：

1）当3.3V\_TXD输出高电平时，D2截止，5V\_RXD被R14上拉到5V,同时又被D1钳位到3.3V，所以5V\_RXD为高，即A点电平大概为4V左右；

2）当3.3V\_TXD输出低电平时，D2导通，5V\_RXD被D2拉低,所以5V\_RXD为低，即A点电平大概为0.3V左右；

  

3）当5V\_TXD输出高电平时，通过二极管D3钳位到3.3V,所以3.3V\_RXD为高，即B点电平大概为3.6V左右；

4）当5V\_TXD输出低电平时，D3不导通,直接通过电阻R15将3.3V\_RXD拉低，所以3.3V\_RXD为低；

  

这个电路虽然成本低，漏电流小；但它电平还是存在一定的误差，因为二极管都有一个正向压降，所以要正确的选择二极管，并且电平不能超出芯片正常工作的电平，还有一个缺点就是由于限流电阻会对速度有影响，所以建议此电平转换在100KHz的通讯下使用。

  

# **四、二极管和MOS管组合的电平转换电路**

为了解决纯二极管搭建电平转换的缺陷，我们将电路做了优化，用一颗二极管和一颗MOS管一起组合搭建一个电平转换电路，如下图，提醒一下读者，我们抖音和西瓜视频都有视频讲解。这个电路在UART通讯的应用中，我经常在用。一般用在波特率115200是完全没有问题。

![](D:\电脑文件\公众号知识库\电工_教育_学习\5种电平转换电路方法详解（NMOS_NPN_二极管_芯片）_images\img_004_0fc3d79175c8.png)

  

我们来看看它的工作原理：

1）当3.3V\_TXD输出高电平时，D5截止，1.8V\_RXD被R24上拉到1.8V,所以1.8V\_RXD为高，即C点电平大概为1.8V左右；

2）当3.3V\_TXD输出低电平时，D5导通，1.8V\_RXD被D5拉低,所以1.8V\_RXD为低，由于二极管的压降，所以C点低电平大概为0.3V左右；

3）当1.8V\_TXD输出高电平时，Q4截止，3.3V\_RXD被R25上拉到3.3V,所以3.3V\_RXD为高，即D点电平大概为3.3V左右；

4）当1.8V\_TXD输出低电平时，Q4导通，3.3V\_RXD被Q4拉低,所以3.3V\_RXD为低，即D点电平大概为0V左右；

  

# **五、电平转换芯片**

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\5种电平转换电路方法详解（NMOS_NPN_二极管_芯片）_images\img_005_8aa16a262d33.png)

  

为了稳定和可靠性，很多时候我们都会选择电平转换芯片，用它最省事！我们只需要分别给VCCA和VCCB供上两个不同的电平，那对应的A口也就输出VCCA一样的电平，同理，B口输出的电平跟VCCB的一样，以往我们用一些独立元件搭建的电平转换电路，都只需要一颗芯片就可以实现。

在使用电平转换芯片需要注意一点的是，一般是VCCB > VCCA，也就是说VCCB要用在电平高的一侧，VCCA用在电平低的一侧，使用的时候，具体看一下电平转换芯片的Datasheet。  
  

上图中，我们没有给电平转换芯片标明具体的型号，是因为这类芯片有很多个品牌，小编没有理由给某个品牌去打广告。  

## **一点通推荐**

  

-   [【免费】双色图解电子元器件核心知识与选用-234页.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528803&idx=2&sn=b3a7d0d6ffc9f2a761d17998637c05bf&chksm=fcef9201cb981b17202148c153f4addfdc81ffeda8da1e07e3fe54a237b01507a07d2a1cc32b&scene=21#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528803&idx=2&sn=b3a7d0d6ffc9f2a761d17998637c05bf&chksm=fcef9201cb981b17202148c153f4addfdc81ffeda8da1e07e3fe54a237b01507a07d2a1cc32b&scene=21#wechat_redirect)[【免费】电路分析基础完整版全套课件教程](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247529046&idx=2&sn=18ef79bf0c5c15a11ac783e527f631b9&chksm=fcef9134cb9818225db473babd5528a1ed1ff492484befd1bd18905a4c6c5549d506fcb756d3&token=1017669823&lang=zh_CN&scene=21#wechat_redirect)
    
-   [【方案分享】Linux快速启动只需要0.8秒！基于全志T113-i国产平台](http://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456247127&idx=1&sn=019bdf7318b7f281a771b10b62d6d777&chksm=87c11991b0b6908714c7e65c455d45b90a41287dabd1596b729f924c72afa06886aff00c190b&scene=21#wechat_redirect)
    
-   [各类特殊开关电源( 电路解析）问题解决方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528379&idx=1&sn=da0faa52dabc3a49544019425d2c085f&chksm=fcef8cd9cb9805cfcfda8935797d6af4a5a0172cba61e47932ceb8e7e2303f32f1718b7e42fb&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528379&idx=1&sn=da0faa52dabc3a49544019425d2c085f&chksm=fcef8cd9cb9805cfcfda8935797d6af4a5a0172cba61e47932ceb8e7e2303f32f1718b7e42fb&scene=21#wechat_redirect)[9V电池供电自动关机电路设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527863&idx=1&sn=7a4fb7ebdd36fd20775cea581203ffe0&chksm=fcef8ed5cb9807c39c49ca97bcefe651224e1e7375f902a8f87236821f201c570ccf72fe90f1&scene=21#wechat_redirect)
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\5种电平转换电路方法详解（NMOS_NPN_二极管_芯片）_images\img_006_fbdba6a347da.other)

******进大家庭⭕圈探讨回复:****** ******交流******