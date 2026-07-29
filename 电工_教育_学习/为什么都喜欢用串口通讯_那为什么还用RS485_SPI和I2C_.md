# 为什么都喜欢用串口通讯？那为什么还用RS485,SPI和I2C？

原创 蜗牛 硬件笔记本 2024-02-27 07:57 四川

> 原文地址: [https://mp.weixin.qq.com/s/8w7L5dNR-1W8xICIHtObTQ](https://mp.weixin.qq.com/s/8w7L5dNR-1W8xICIHtObTQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

## 1、为什么都喜欢用串口通讯？

之前在做单片机产品的时候，用的最多的就是串口通讯，凡是单片机的外设，优先选用带串口功能的，比如蓝牙模块，WIFI模块，4G模块，电表和显示屏等等。

![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_002_4059e058d284.png)

  

为什么都喜欢用串口通讯？  

因为简单啊，通常仅需2条通讯线，1条电源线和1条地线相连。  

  

[![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_003_7ffdc96d1bd3.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247534234&idx=2&sn=db9d94c0e606d38711920c20c845ff8f&chksm=c30a9848f47d115e45d740fcb4393928e3a47e08ded0054643993a989d402e4fd7a943ba3a91&scene=21#wechat_redirect)点击图片可详看串口介绍

  

双方约定好相同的速度，比如115200bps，以这种数据包的形式给对方发送数据，一次发送8位，也就是一个字节的数据。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_004_b820bd24c3e1.png)

  

## 2、串口通讯的缺点

虽然串口简单，但是它也有缺点：

1、远距离信号不能传输；  

2、通讯速度较慢；  

3、只支持一对一通讯，不能一对多通讯。

所以，针对这几个缺点，我们需要采用其它的方式来弥补串口的不足。

  

## 3、RS232，RS485，SPI通讯

**3.1、RS232，RS485**

像我开始举的例子，单片机跟外设之间距离短可以正常通信，要是我们长距离传输数据就容易受到干扰，导致通信异常，这时候聪明的人类就发明了RS232和RS485通信。

  

-   RS232通信距离可达30m左右；
    
-   RS485的通信距离理想情况下能超过1000m，且485的总线上可挂多个负载。
    

[![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_005_b71be33d3359.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247518805&idx=2&sn=78a8432359246b442f01acf2862277dd&chksm=c30a5487f47ddd914cfe3f6cd097b194d6ce5a7ffd4e26004682242870ddd29da7d4d7cb16b3&scene=21#wechat_redirect)

点击图片可详看485介绍

通常，串口通信最大的波特率为115200

**如果没有校验位**，就应该除以10，得到的是每秒字节数：115200÷10＝ 11520 (字节/秒)。再除以 1024，就是每秒 KB 数：11520÷1024＝11.25 (KB/秒)。

**如果有一位奇偶校验位**，就应该除以 11，得到的是每秒 KB 数：115200÷11÷1024＝ 10.27 (KB/秒)。

所以串口的速度是非常的慢，之所以这么慢是因为早期的单片机频率比较低，时钟精度也不高，所以通信双方的波特率不能做到完全一致，速率太快就会通信异常。  

  

**3.2、SPI**

那如果在通信双方之间加一个clock时钟信号，不给通信双方约定相同的速度，我们只需根据时钟信号的上升沿进行发送接收数据，大大提高了通信速率，于是产生了SPI通信，它可以轻松突破10M。  

[![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_006_6705e1ff1f9b.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247487384&idx=1&sn=a11383b316fd0d14f67a2ba66d4cc095&chksm=c309d14af47e585cf70e5603bcdff726be46b899aa8ecff29c7f7ac0631ac6d207fed7aa142e&scene=21#wechat_redirect)

点击图片可详看SPI介绍

**3.3、I2C**

如果我们的单片机要同时控制多个外设，用很多串口分别连接是很浪费的，要是一条通信线上可同时挂多个外设，那是相当的节约资源,所以就产生了I2C。

[![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_007_7c94b078256a.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247496347&idx=1&sn=cba4032abe8e015783bf7e6913201a48&chksm=c30a2c49f47da55fd6cb459514c91fd409a2032f23e2dfe693f4fe5abbad122169d9115c78ec&scene=21#wechat_redirect)

点击图片可详看I2C介绍

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_008_58147eba07eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_009_9b53a964efd5.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_010_75db8c1036fb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_011_0b6ae33611dc.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_012_365c6cd9f8bb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_013_2da1ccbac0ae.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_014_7446ffe5e3b8.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_015_d246b538f592.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_016_3352ab08e99b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_017_0f89804cd7eb.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_018_f506b795c6ac.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_019_97df29bd0f50.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_020_d7c6fe8cd645.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_021_19e2f7b6262a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_022_08d092bef8a0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\为什么都喜欢用串口通讯_那为什么还用RS485_SPI和I2C__images\img_023_50889e54acde.gif)

## 

**声明：**

  

声明：原创文章转载请注明出处，部分图片整理于网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。