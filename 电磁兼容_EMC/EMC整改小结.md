# EMC整改小结

原创 硬件笔记本 2022-12-13 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/WT6ALdLqDZ4QCgQe\_zzhHQ](https://mp.weixin.qq.com/s/WT6ALdLqDZ4QCgQe_zzhHQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

当产品一旦测试不合格，那么随之而来的肯定是EMC整改通知书。在EMC整改过程中很多管理人和技术人员并不太明白该从何处入手，今天我们就来分析EMC整改常遇到的问题和一些整改建议。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhRO0cuyWiacxK8NMJDCx5wTGYEkicibwiaksOqeote4HBk3TsiaePLfKqt5kmB8lSAGn0NwAj4UaJozlg/640?wx_fmt=png)

首先我们来从EMC测试项目构成说起，EMC主要包含两大项：EMI（干扰）和EMS（产品抗干扰和敏感度）。

  

当然这两大项中又包括许多小项目，

EMI主要测试项：

RE（产品辐射，发射）、

CE（产品传导干扰）、

Harmonic（谐波）、

Ficker（闪烁）。

  

EMS主要测试项：

ESD（产品静电）、

EFT（瞬态脉冲干扰）、

DIP（电压跌落）、

CS（传导抗干扰）、

RS（辐射抗干扰）、

Surge（雷击）、

PMS（磁场抗扰）。

  

通过这些测试项目我们不难看出EMC测试主要围绕产品的电磁干扰和敏感度两部分，如果一旦产品不符合安全认证标准需要EMC整改的时候我们可以通过降低其材料和零部件进行整改。

  

  

  

01

PART

EMC整改意见

  

1、在拿到整改意见书以后，需要提前定位好EMC整改计划。没有定位好计划就去盲目的整改产品就像无头的苍蝇一样到处乱动，这样只会增加整改的成本。

  

2、定位手段，对于这里小编觉得主要可以分为两点。第一：直觉判断，需要完全依托工程师的直觉和经验来进行判断。第二：比较测试，根据测试仪器所提供的数据来进行分析问题。

  

  

  

02

PART

EMC整改流程

  

**1、RE超标整改流程：**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhRO0cuyWiacxK8NMJDCx5wTt1ussHrj3wtu3ASUfjxp6JrZbk21VG3CBgLIM9bf7K88dCr08LQXZg/640?wx_fmt=jpeg)

  

**2、电线电缆超标整改流程：**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhRO0cuyWiacxK8NMJDCx5wTq5lxBparCH1RAn4oqJ9YVNR7YJemVToeGI1bYuezywBLcSrYMHzEXA/640?wx_fmt=jpeg)

  

**3、信号电缆整改流程：**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhRO0cuyWiacxK8NMJDCx5wTOViaQt0ia11TpxwVvzicnglo7eNOMjGWwVicwPh3bcl9IBePdtzWx4rN2g/640?wx_fmt=jpeg)

  

**4、屏蔽体泄漏整改流程：**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhRO0cuyWiacxK8NMJDCx5wT3uyibociaw55AKvY7ic7vAwicpcXgEQ35qWQpibSRPxFRsD4xHdml0xVp0w/640?wx_fmt=jpeg)

  

  

  

03

PART

EMC整改的一些小建议

  

**1、电容的滤波作用**

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhRO0cuyWiacxK8NMJDCx5wTKjGw4AicdTMbica2Ng7RKhKxXmKEt7Lq6AVt4xLoibPZP346ibQAyCoMpA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz/GFk2abHRMHRUxjVPUQyBrekuEEuIjsb5Qs65JWB2NiaCb1gN5fsO1iazBmFcoMjfojKqXcCRoGzHJtwn4D3VYkwQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

即频率f越大，电容的阻抗Z越小。

当低频时，电容C由于阻抗Z比较大，有用信号可以顺利通过；

当高频时，电容C由于阻抗Z已经很小了，相当于把高频噪声短路到GND上去了。

  

  

**2、电容滤波在何时会失效**

  

整改中常常会使用电容这种元器件进行滤波，往往有“大电容滤低频，小电容滤高频”的说法。

以常见的表贴式MLCC陶瓷电容为例，进行等效模型如下：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhRO0cuyWiacxK8NMJDCx5wTWzAZMsrTSA60meTnOHIIAcp3VQ0OW1kA0xKgCCr0o8oGicLwqFMmRIg/640?wx_fmt=jpeg)

  

  

容值10nF，封装0603的X7R陶瓷的模型参数如下：

  

![](https://mmbiz.qpic.cn/mmbiz/GFk2abHRMHRUxjVPUQyBrekuEEuIjsb5xc3e8eZdo7dXH7UQDQEqibmpdC6SmQic1KPO3eACp9FskHVevH3deFfA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

  

由于等效模型中既有电容C，也有电感L，组成了二阶系统，就存在不稳定性。对电路回路来说，就是会发生谐振，谐振点在如下频率处：

  

![](https://mmbiz.qpic.cn/mmbiz/GFk2abHRMHRUxjVPUQyBrekuEEuIjsb57icksARliaNtOng8laGZRRrcUaaHdffVNgrFgxWq1QVeECfVe3bicwvng/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

  

下图是谐振曲线的示例：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhRO0cuyWiacxK8NMJDCx5wTS6u4xDgkXicIuezLbV9tlAoZiaHTicGKkZHUC5IQqGqpCNbb4dzFke2Kw/640?wx_fmt=jpeg)

  

即常说的在谐振点前是电容，谐振点之后就不再是电容了。

  

  

**3、LC滤波何时使用**

  

如果串联电感L，再并联组成C，就形成了LC滤波：

  

![](https://mmbiz.qpic.cn/mmbiz/GFk2abHRMHRUxjVPUQyBrekuEEuIjsb55gwMP2lia6T7uiaVfHET9JnAFDNOaAW4ZyFWEYhzHsL9tGfSrTv5coBw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

  

单独一个电容C是一阶系统，单独一个电感L也是一阶系统，在幅值衰减斜率是-20dB。但LC组成的二阶系统，幅值衰减斜率是-40dB，更靠近理想的“立陡”的截止频率的效果，即滤波效果更好。

  

![](https://mmbiz.qpic.cn/mmbiz/GFk2abHRMHRUxjVPUQyBrekuEEuIjsb5iavSMabibEglszWQiaX8c9AJya8mPWbibpwUn8uReChXibTPBDhMVkd1nGA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

  

  

**4、PWM频率到底是多少**

  

往往提到PWM，比如会说用20kHz PWM驱动电机等。但实际上，这个20kHz仅代表PWM的脉冲周期是50us：

  

![](https://mmbiz.qpic.cn/mmbiz/GFk2abHRMHRUxjVPUQyBrekuEEuIjsb5rOdrrVyvAHmFBLX2tmSxfhkjSMjvY7Gu3TIdcS01U0NTG0rjdG0ozg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

  

那么所谓的20kHz PWM在频域上的频率点落在哪里呢，如下公式：

  

![](https://mmbiz.qpic.cn/mmbiz/GFk2abHRMHRUxjVPUQyBrekuEEuIjsb59Dpyl1yg8JSIyATl7GZZZPt4MIyHVibMQOeDZrOV7L88Enh1UbzgXMw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

  

对于阶跃信号来说，由于上升时间tr无穷小，则频率f无穷大。当频率高了之后，寄生参数则不能在忽略，会引发很多谐振的问题。

  

从信号上来看，就是很陡峭的阶跃信号会有过冲和振荡的问题。简单来说就是频率f越大，则噪声所占的频率就会越宽泛，即EMC特性就会越差。

  

  

**5、如何将原理图和PCB对应起来**

  

由于细分工种的问题，原理图和PCB被割裂开来，由两组人进行分工作业：

  

![](https://mmbiz.qpic.cn/mmbiz/GFk2abHRMHRUxjVPUQyBrekuEEuIjsb5YC5M9mf24CVPOsVxtK9FxGVgtge89qaib9P0mB2w99zvfbm6cbQpSBA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

  

例如在原理图上有如下的电路：

  

![](https://mmbiz.qpic.cn/mmbiz/GFk2abHRMHRUxjVPUQyBrekuEEuIjsb5Hj0ZUpHgEznHQR6ZOYuwXsX4plibqplzAxIYFJPS1AUobl0vtPpaiaPQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

  

其隐含一个问题就是在PCB上其实V1的负极和C1的负极是有一条线（PCB layout工具软件中用的词比较准确，Trace，踪迹/轨迹）。

  

往往在设计阶段A->B->C是都会关注的。如果EMC出现问题，除了要在原理图上查找电路参数的问题，还需要特别关注C->D，即回流路径。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjhRO0cuyWiacxK8NMJDCx5wTiawBzPlYxgGof3XSrRib933MBRiaSiafQ91pa6TYTGRNML9momyHS5UriaA/640?wx_fmt=jpeg)

  

  

如果回流路径不顺畅，会造成信号的畸变：

  

![](https://mmbiz.qpic.cn/mmbiz/GFk2abHRMHRUxjVPUQyBrekuEEuIjsb544HuXEO9B4b4u27Z9XV9FoPwuODndp1bd8W7bntAU01QWjUTm4MKeg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

  

比如在EMC试验时，MCU的ADC采集到的信号被干扰到了，则除了在原理图上分析外，在PCB上讲该信号高亮出来，然后再耐心寻找该信号的回流路径是否有不顺畅的地方：

  

![](https://mmbiz.qpic.cn/mmbiz/GFk2abHRMHRUxjVPUQyBrekuEEuIjsb5Jh7LXtUH274dnY5pBmNk2GfZnoVcUMIOCHGqOViae2Y26ia74bdSYMxA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)  

  

对着信号线头脑中想象回流路径，有点意识流的感觉。

  

**6、总结**

  

![](https://mmbiz.qpic.cn/mmbiz/GFk2abHRMHRUxjVPUQyBrekuEEuIjsb5WJqDS5rIK8AdCwggvogT4bukoLKlZmMXSOvZIqSUqZ6t53hicicQs05g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。