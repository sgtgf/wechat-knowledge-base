# 我来捋捋I²C，让小白也能看懂

原创 硬件笔记本 2024-07-23 07:41 四川

> 原文地址: [https://mp.weixin.qq.com/s/lSrYef68NVKXweleoiiqiQ](https://mp.weixin.qq.com/s/lSrYef68NVKXweleoiiqiQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

I²C总线在嵌入式系统中很常见，但最近在一个群（可能是初学者群）交流的信息，让我比较吃惊，很多人连I²C总线基本的知识都不清楚。下面就来给大家讲一讲I²C总线的时序。

相信很多电子工程师，都是从 EEPROM 通信了解到的I²C总线。其实，I²C总线远不止于 EEPROM 存储器，它也有类似485、SPI等应用场景。

![](https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfcicRjLUhELzkh5icFpHnmibAB02eCiafDOLKm7Flo5DCCsjzJTsicKCNTN92pgguyTia2DvzIuZxm3lULLg/640?wx_fmt=png&wxfrom=13&tp=wxpic)

EEPROM存储器系统架构图

**位传输**

I²C总线是由飞利浦（Philips）公司开发的一种双向二线制同步串行总线，实现有效的IC间的控制，它只需要两根线（SDA和SCL）即可在连接于总线上的器件之间传送信息。

I²C总线在传输数据都是按照bit来传送。SCL为时钟线，SDA为数据线；在SCL时钟线为高电平时，SDA数据线上的电平不允许被修改，SCL时钟线为低电平时，SDA数据线上的电平可为高/低。

![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfcicRjLUhELzkh5icFpHnmibAB0iaN9ict9Hzic7qia8Y7BkLOuln5LapVKg3ibZRia2Du8E1xNjEJyMyynTbibA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

I2C总线的位传输

**起始条件：**SCL为高电平时，SDA由高电平向低电平切换；表示开始传送数据。

**停止条件：**SCL为高电平时，SDA由低电平向高电平跳变；表示结束传送数据。

**空闲条件：**I²C总线的SDA和SCL两条信号线同时处于高电平时；表示空闲状态。

![](https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfcicRjLUhELzkh5icFpHnmibAB0HuiaZscCtOZJVUQBAQcXS9oDIPJMKf1R0PUPTPt3RV8eBCl1CPUe64A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

‍起始和停止条件‍

**数据传输**

**1、字节传输**

发送数据时，由主机先发送一个起始信号，再将SDA信号切换为输出模式，然后将8位数据依次由高到低发送出去；

发送完成后，主机将SDA信号切换为输入模式，等待丛机回应ACK或NAK；再发下一笔数据。

![](https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfcicRjLUhELzkh5icFpHnmibAB0QqEap6hb3g7NRKC6nAFKpjMA4y3l5Yic6MEwrcX343Rib1EIpic8tRPng/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

I2C总线数据传输

**2、丛机地址**

在I²C总线系统中，每个设备都有它的固定地址，一般由芯片的A0,A1和A2决定。丛机地址字节由七位地址位(D7-D1位)和一位方向位(为D0位)组成。

器件地址的D7-D4一般都是被厂家固定了为1111，余下的D3，D2和D1连接到芯片的A2，A1和A0决定；D0为0x00表示写，D0为0x01表示读。大家看例程都是些0xA0和0xA1就是这个原因。

![](https://mmbiz.qpic.cn/mmbiz_png/icRxcMBeJfcicRjLUhELzkh5icFpHnmibAB0rtniamOBuiciaQPTFrfL9zow55OLr9PcI0TmbSoqOTkW2DXeRM3IwQ5rw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

EEPROM的器件地址

**读写过程**

**1、写数据过程**

1）主机发送I²C总线停止信号，防止总线忙写数据失败

2）主机发送I²C总线复位信号，确保写数据之前总线处于空闲状态

3）主机发送I²C总线开始信号，启动一次数据的写入

4）主机发送I²C丛机地址和写模式(W/R=0)信号，并且等待一个丛机的应答信号

5）主机接收到ACK的应答信号后，开始多个字节的写入，每写完一个字节需要等待一个丛机的应答信号

6）主机接收到ACK的应答信号后，发送I²C总线停止信号，确保总线处于空闲状态

**2、读数据过程**

1）主机发送I²C总线停止信号，防止总线忙写数据失败

2）主机发送I²C总线复位信号，确保读数据之前总线处于空闲状态

3）主机发送I²C总线开始信号，启动一次数据读取

4）主机发送I²C丛机地址和读模式(W/R=1)信号，并且等待一个丛机的应答信号

5）主机接收到ACK的应答信号后，开始多个字节的读取，每读完一个字节需要给丛机发送一个ACK应答信号

6）主机接收到ACK的应答信号后，发送I²C总线停止信号，确保总线处于空闲状态

![](https://mmbiz.qpic.cn/mmbiz_jpg/icRxcMBeJfcicRjLUhELzkh5icFpHnmibAB0yqmTibiajXSpibx6GnH2UZqZiatDgnLtOwEIJXjicLeNltX5FrCGLn6kmDQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

主机读/写数据过程

**结 语**

I²C总线在嵌入式应用中非常广泛，基本上所有的电力电子设备都会用到这个总线；

笔者根据自身多年的工作经验，记录下了我对它的理解，如果有写的不对，希望大家能多多指出，今天的I²C总线就先写到这里，希望对大家有帮助。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：本文来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。