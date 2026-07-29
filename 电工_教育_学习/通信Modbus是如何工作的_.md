# 通信Modbus是如何工作的？

原创 strongerHuang 硬件笔记本 2023-05-24 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/dYvtFf7YOZq7Njtg2a1jZg](https://mp.weixin.qq.com/s/dYvtFf7YOZq7Njtg2a1jZg)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

学电子需要掌握一些常见的通信协议，Modbus就属其中一种，Modbus在现实生活中应用非常广泛，很多工业电子设备的系统中基本都有它的存在。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\通信Modbus是如何工作的__images\img_002_47106686277e.jpg)

今天针对初学描述关于一些Modbus常见的问题。

  

**什么是Modbus？**

Modbus 是由 Modicon 公司（现施耐德），于1979年针对 PLC 开发的一种通信协议，当时主要用于工业电子设备之间联网通信。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\通信Modbus是如何工作的__images\img_003_b2ba362402df.jpg)

  

**Modbus 是一种应用层通信息协议，位于 OSI（开放式系统互联通信）模型的第 7 层。**它在不同类型的总线或网络上连接的设备之间提供客户端/服务器通信。

  

Modbus 是由一个 Master（主机） 和最多 247 个 Slave（从机）组成的通信网络。

  

更多关于Modbus的介绍，可以参看：  

https://modbus.org/

  

**Modbus干什么用？**

Modbus 是一种开放的通信协议，你可以免费将其应用到你的设备中，而无需支付版税。

  

Modbus 是一种广泛使用的标准通信协议，你和其他厂家的设备，如果都遵循 Modbus 标准协议，就可以进行通信传输数据。

  

**Modbus是如何工作的？**

Modbus 通常底层基于 UART 串口485进行通信，最简单的一个主设备和一个从设备通信，就是通过串口Tx和Rx进行收发数据。

![](D:\电脑文件\公众号知识库\电工_教育_学习\通信Modbus是如何工作的__images\img_004_09094c869e9b.jpg)

  

底层串口的通信，就是大家熟悉的“0”“1”通信，在这个基础上，添加 Modbus 通信协议，方便解析协议和多设备组网。

  

一主多从，在从设备中都有唯一的地址，通过解析从机地址，主机就能和对应的从机进行通信。  
  

**什么是Modbus ASCII？**

Modbus ASCII是Modbus协议中的一种传输方式，对应的还有另外一种

Modbus RTU传输方式。

  

施耐德电气（Schneider Electric）收购了Modicon公司之后，有推出了Modbus TCP协议。

![](D:\电脑文件\公众号知识库\电工_教育_学习\通信Modbus是如何工作的__images\img_005_4a233f890cfd.png)

  

协议格式：

![](D:\电脑文件\公众号知识库\电工_教育_学习\通信Modbus是如何工作的__images\img_006_ad5e1aada889.png)

  

**什么是从机地址？**

从机地址（或从站ID），就是为每一个从设备分配的唯一地址，方便主机建立通信时进行识别，从机地址在出厂时就会设置好。

  

**什么是功能码？**

功能码是 Modbus 通信协议中的一项，主机发送的第二个字节就是功能码。就是你看到的读写线圈寄存器那些内容。

  

下面贴几个常见功能码：

![](D:\电脑文件\公众号知识库\电工_教育_学习\通信Modbus是如何工作的__images\img_007_cea53c58dda4.png)

  

**什么是CRC？**

正规的通信协议基本都有校验码，目的就是为了确保传输的数据没有错误。像校验和、CRC校验等是嵌入式设备通信协议常见的校验码。

  

Modbus使用CRC循环冗余校验，其校验信息位于消息末尾的两个字节。

  

这里推荐阅读文章《[**自定义串口通信协议**](https://mp.weixin.qq.com/s?__biz=MzI4MDI4MDE5Ng==&mid=2247501341&idx=1&sn=a745e1efce17155580e07de35241f04a&scene=21#wechat_redirect)》中文末校验相关的内容。

  

参考：

http://www.simplymodbus.ca/crc.xls

  

**什么是字/字节排序？**

字节排序就是先存储（传输）高字节，还是先传输低字节。比如：0x1234，它是两个字节，传输时通常是分0x12和0x34传输。

  

在通信中，会牵涉到一个字节排序的问题，但在Modbus 规范中并未准确定义数据在寄存器中的存储方式。

  

Modbus标准协议没有具体约定，就需要开发者在开发过程中人为约定先传输高字节，还是低字节。

  

**最后**

Modbus是一种应用非常广泛的标准通信协议，工业自动化、电子、嵌入式等这些专业的同学，建议都抽时间学习一下。

  

由于时间有限，本文只介绍了一些基础内容，更多介绍和协议具体内容，请到官网深入了解。

  

https://modbus.org/

（公号不支持外链接，请复制链接到浏览器打开）

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。