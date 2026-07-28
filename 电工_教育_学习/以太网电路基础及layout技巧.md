# 以太网电路基础及layout技巧

原创 王工 硬件笔记本 2025-06-27 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/rF1g5PAAOv9yy7mz6Kwl9w](https://mp.weixin.qq.com/s/rF1g5PAAOv9yy7mz6Kwl9w)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

大家好，我是王工。

今天跟大家分享一下以太网相关基础知识。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhbTqkG3SHKdPibwrppq9bXgYHFxodX9vcO9EYVN1JXicING6vuamrAhAJnd6mm5CYJtvibcE8xibIA3Q/640?wx_fmt=png&from=appmsg)

以太网（Ethernet）是我们日常生活中最常见的网络通信方式之一，广泛应用于：

**路由器**、**交换机**——构建局域网（LAN）

电脑、**服务器**——高速数据传输  

工业设备、**智能家居**——稳定可靠的通信

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgJicLIicibEDibStFl4LHogWUwFQMtF7K7DpBavbuicl9bliaGlsCl9aDrNBg01ZlhT8afadAibmibWvMC2g/640?wx_fmt=png&from=appmsg)

本文将分析**以太网硬件设计**，涵盖**MAC/PHY架构选择、网络变压器作用、PCB布局走线要点**，帮助大家优化设计，提高通信稳定性。  

  

011

**以太网电路硬件架构**

以太网接口的硬件电路通常由以下部分组成：  
🔹 **CPU**（处理数据）  
🔹 **MAC**（媒体访问控制层）  
🔹 **PHY**（物理层芯片）  
🔹 **网络变压器**（信号隔离与增强）  
🔹 **RJ45接口**（物理连接）

随着芯片集成度提高，设计方式也在不断优化，以下是几种常见方案对比：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhbTqkG3SHKdPibwrppq9bXgzsib0g3tuJYXJWIaGhRNfo32ricicicNyW2f1j9mBwiarI642uTLDoVQcjQ/640?wx_fmt=png&from=appmsg)

**MDIO总线接口**，主要是完成CPU对于PHY芯片的寄存器配置；

**MII即媒体独立接口，也叫介质无关接口。**常见的有MII、RMII、GMII、RGMII等。“媒体独立”表明在不对 MAC 硬件重新设计或替换的情况下，任何类型的 PHY 设备都可以正常工作。

**对于上述四部分，并不一定都是独立的芯片**，主要有以下几种情况：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhbTqkG3SHKdPibwrppq9bXgMjoiaV70PtQbctTbWs5kicyde4iacmfJibvTDchBVOKO6btrreN6RLHiauw/640?wx_fmt=png&from=appmsg)

**PHY整合了大量的模拟硬件，而MAC是典型的全数字器件，芯片面积及模拟/数字混合架构的原因，是将MAC集成进微控制器而将PHY留在片外的原因。更灵活、密度更高的芯片技术已经可以实现MAC和PHY的单芯片整合；**

**结论**：

-   **方案2**（CPU集成MAC+PHY + RJ45带变压器）最优，器件少、开发简单。
    

  

021

**关键元件解析：PHY、网络变压器、RJ45**

### **1、PHY芯片：数字信号与模拟信号转换的桥梁**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgJicLIicibEDibStFl4LHogWUwaV3IZiblicsc0PfW4rTSvia1hlqQcyG0Cico64Hn1uOJtrDh63f8m3XVfA/640?wx_fmt=png&from=appmsg)

-   **作用**：将MAC层的数字信号转换为适合网线传输的模拟信号。
    

**关键参数**：

-   **速率**：10/100Mbps（百兆）、1000Mbps（千兆）
    
-   **接口类型**：MII/RMII/GMII（与MAC通信）
    

-   传输距离：千兆以太网支持最长100米的双绞线传输
    
-   特殊功能：部分PHY芯片支持POE（以太网供电）
    

### **2、 网络变压器：信号隔离与增强**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgJicLIicibEDibStFl4LHogWUwF58fF7ibIEpRp2IJcksA844LicBpqZibXlFfMtKRrbEsbWrlsvfhVnDJQ/640?wx_fmt=png&from=appmsg)

网络变压器（也叫**以太网隔离变压器**）是保证通信稳定的关键，主要作用：  
**电气隔离**——阻断PHY与RJ45之间的直流分量，保护芯片；  
**抑制共模干扰**——减少外部电磁干扰（EMI）；  
**阻抗匹配**——优化信号传输质量。  

### 

### **3、RJ45接口：百兆 vs. 千兆**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgJicLIicibEDibStFl4LHogWUw0lMHw7fEa1Wic7P9Xu6NsOGpHsKaZjClFovxZjdnPQ0LvYsYZxpiaqtw/640?wx_fmt=png&from=appmsg)

**百兆（100BASE-TX）**：  
仅使用 **2对（4芯）双绞线**（Cat5或更高规格电缆中的1-2、3-6线对）：

1对（TX+、TX-）用于发送数据，

1对（RX+、RX-）用于接收数据，

其余2对未使用。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhbTqkG3SHKdPibwrppq9bXgPV9cicAcoON6PicVlic7fKhzTGOfXhbRaOY4JcorWehnaIfj8IiapicNw8w/640?wx_fmt=png&from=appmsg)

### **RJ45 插座 10M/100M 接口定义**

### 

-   **千兆（1000BASE-T）**：  
    使用 **全部4对（8芯）双绞线**（Cat5e或更高）：
    
    以太网可以通过自动协商协议选择工作模式，通常会自动选择全双工模式，但也可能回退到半双工模式。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhbTqkG3SHKdPibwrppq9bXgaluQGdD7JFKwc2DppB4XF91LTeZicGOARSj2T958TEEmjaehe6apNBA/640?wx_fmt=png&from=appmsg)

### **RJ45 插座 1000M 接口定义**

### 

031

**PCB设计要点**

### **1、整体布局**

-   **尽量靠近RJ45**，缩短差分走线长度。
    
-   **下方避免其它信号线**，防止干扰。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgJicLIicibEDibStFl4LHogWUwSyNK6KGb73pRsS29p18FsMVw0OHtwCK4HD97KwX0OTmbVbibQRObypg/640?wx_fmt=png&from=appmsg)

  

### **2、差分线（TX/RX）走线规则**

-   **等长匹配**（要求长度差≤5mil）。
    
-   **阻抗控制**（通常100Ω差分阻抗）。
    
-   **避免锐角走线**，减少信号反射。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgJicLIicibEDibStFl4LHogWUwCAQsO2lntsq6x0RjC4gE9rydxeNMBW65Lz5vHKTVfhGAcF2PyibdMyQ/640?wx_fmt=png&from=appmsg)

  

**3、网口与变压器PCB设计要点**

**3.1、耐压隔离**

网络变压器中间隔离区需足够宽，确保耐压要求。  

PHY与RJ45需分属不同地平面，禁止跨平面布局或走线。

  

**3.2、抗干扰处理**

**变压器下方所有层挖空，避免底层铜箔引入噪声。**

**3.3、差分线布线**

优先走底层，远离网口外壳接地层。  

阻抗建议控制在100Ω±10%（非强制但推荐）。

**3.4、外壳接地**

网口金属外壳接地线需加粗，确保低阻抗连接。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgJicLIicibEDibStFl4LHogWUwzrblF2FVG5NnmWkx3bzWJSIoib2j6gibfcUT4sfNmcSjDXZ5MAfS8icxw/640?wx_fmt=png&from=appmsg)

  

4、Bob Smith连接

隔离绕组的中心抽头有一个“Bob Smith”端接， 通过75Ω电阻和1000pF电容连接到机壳地，这个阻容的作用就不赘述了，感兴趣可以自己在网上去查。公众号硬件笔记本

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgJicLIicibEDibStFl4LHogWUw3vJIAtOndSMXUy0SHKFvIysCBe7872xZf56UwoVETRwfSHSbjQPZpw/640?wx_fmt=png&from=appmsg)

  

5、网口若带LED指示灯，通常包含：

**LED\_LINK**（连接指示灯）——显示物理链路状态，异常时可能是网线、端口或对端设备问题；  
**LED\_SPEED**（速率指示灯）——显示当前网络速度，异常时可能因网线质量差或信号不良。

**PCB设计要点**：优先走差分线，LED信号线需避开并用地平面隔离。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgJicLIicibEDibStFl4LHogWUwb4XsFtqxhfyaYlL4gacLnoFeDuENJhw6EH1dMJTO4UK6Qic1Ok2icfibw/640?wx_fmt=png&from=appmsg)

6、晶振处理  

25MHz晶体下方应避免走其他信号线，并需进行完整的包地处理。由于以太网的25MHz时钟一旦出现问题会带来较大调试难度，因此必须确保晶振部分的包地处理完善可靠。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgJicLIicibEDibStFl4LHogWUwle40uxjT4IDqYticiamZdzW8dN0PFulQxgUGhZcNHRK8cG3wY0asRfSQ/640?wx_fmt=png&from=appmsg)

当然，本文旨在抛砖引玉，内容并不完全，篇幅有限，就写到这里了，欢迎大家留言更正补充。

如果这篇文章对你有帮助，别忘了**点赞**、**收藏**，并**分享**给更多需要的人！

**写在最后**

都说硬件工程师越老越吃香，这句话也告诉我们硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

推荐阅读（点击图片直接进入）

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjlXjk6N5523uiag35OccaBa4kLQjG8lS2DUnnaNvKmu0cjpvXCH6tOIQ1yqcys5jqnITC8fuAyNRw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247500681&idx=1&sn=117bdaa8c04eecdda16fb1d0c0e9fa37&scene=21#wechat_redirect)

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjlXjk6N5523uiag35OccaBavtviastib6IxfE1ympMNCSrricNxPsY130ymh6icx38mRicPtLYKLIxJXaQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&watermark=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

## 

**声明：**

  

声明：原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。  

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)