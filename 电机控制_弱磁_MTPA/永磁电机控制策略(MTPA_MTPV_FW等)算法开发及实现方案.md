# 永磁电机控制策略(MTPA/MTPV/FW等)算法开发及实现方案


> 原文地址: [https://mp.weixin.qq.com/s/eLWfxUkP1BJfDHkEzUZPig](https://mp.weixin.qq.com/s/eLWfxUkP1BJfDHkEzUZPig)

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIXNZfbdj53bicxxicss8D5WANHd3de5SdpQ8pwibiaIsMAlsTsWgx7vorTs6e0kq35k0XWDurue9XsQAA/640?wx_fmt=gif)

[![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKsVuAzKYgsaiajzSsgRcchqxwfYJLc7hK9Q3DKj71ia05ibicZPajUIBd45KJyibwqNS1QqTnJ9C7ohRgQ/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658227&idx=1&sn=01213ca1b75e26081b2c06dd5aaea234&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_gif/icrlIsZGPBvyokNic4JvGNA3jKsVNf1qetvQY78kokibWsFndypjOUicU3ERKwyy6kU62eeTEUUzqK8p07ib50pbZtg/640?wx_fmt=gif&wxfrom=13&tp=wxpic)

  

关注公众号，点击公众号主页右上角“ · · · ”，设置星标，实时关注最新资讯，以免错过最新推送

 **最大转矩电流比** 

最大转矩电流比（Maximum Torque per Ampere，MTPA）就是一种电机在不同的转速和转矩给定下，确定d轴电流和q轴电流给定值的方法，以保证电机的效率处于最优状态。

  

实际应用时有两种，一种是解析法，另一种是Look Up Table法。由于永磁同步电机参数的非线性，解析法在工程上不实用，但有助于理解和分析。Look Up Table法通过标定将解析方程和非线性参数转化为Look Up Table，更为实用和简单。

  

当永磁同步电机工作在线性调制区，且主要损耗为铜损耗时，MTPA点与最优效率点近似相等。在实际工程中，永磁同步电机不仅存在铜损耗，还存在铁损、涡流损耗、机械损耗等，特别是在六阶梯波模式下，铁损可能成为永磁同步电机的主要损耗，MTPA点不等于最优效率点。由于设计参数和实际参数的差异，通过标定最终确定d轴电流和q轴电流给定值。

  

根据

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKEfIkYECd5yWtIhoD0lum7RXqIia3joKdzMyypD7dmQMQ1AQd4a47xyA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

给定

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKgJlNDYUZqJLb5ngHiaV99JWgxfpiastucISjL3MlL3AEIGhOgurMEuOA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

得到

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyK0keJeNhhgbq6NqcuKuFQ7yIXwqLGd5dNgkx2yPHoALzicyn1VjalxZw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

在给定的定子电流绝对值下的最大转矩可以通过以下公式找到

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKNdWumicH3hqOqIAjJb9zBq9nnSGfiaQE5meHvEnKXgoIo5ZN6JLRlKxA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

得到

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKbvgyHwtSDcfKCKb7RQN8nDvvFYpP9cLQZX93UZMd9td0nNQfss549A/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

  

因为  90° ≤ β ≤ 180° ， -1 ≤ cosβ ≤ 0

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKCOSeG8vk9d4QBGplvMdkHPWtBRzp0FfcicpPKkWR1ysyg2yvnKpDQ8w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKoyuRcicuicpfppyp7ib0cJTibNvF0HJa3YsAKtywuYO4ThodUMS4IO976Q/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKV71DIfgH5m8iawKuDNYuibnPtQIbdwKXPDaXicBJUriaORia6qahDh9V6TQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

将 ![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKxs4b4U97xtNJoaAtRmQrapP5131do4GbTmGcCD9ibwwJ2lNWITy9zYA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1) ,  ![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKme2HOeZXbl7WPzyW60HRoxNZkoX1knibnjmN1ekdXl9ta28rmHJIHmA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1) 代入 ![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKTibiaf2WmicycJx2U0WPicicMhPcqr7rMyxK8GpUTqLhokvGhjLMICMAibnQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1) ，得到 ![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKzABLfxylBD0GdUIcRRSyUzAPrER3bcsuEwtWCkR0iasia3SzB2qaichgg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1) ，因为方程非常复杂，所以用MATLAB等数值工具求解。

  

当永磁同步电机转速升高时，反电势也随之升高，但逆变器的输出电压受到限制。根据永磁同步电机稳态模型方程：

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKkaAYVEXynLgGmr0kWPjkeftS37qSgQ1oicm63eic6PXiatAzLBHjTib7dg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

忽略定子电阻压降，考虑电流限值和电压限值

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKGaLDNBuvojZI3WCaq5iat4IDOIqun9OpenoMQ9urDgIvLf525LvFaaA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

如下图所示\[1\]，作为设定点的 ![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKxs4b4U97xtNJoaAtRmQrapP5131do4GbTmGcCD9ibwwJ2lNWITy9zYA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1) , ![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKme2HOeZXbl7WPzyW60HRoxNZkoX1knibnjmN1ekdXl9ta28rmHJIHmA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1) 必须在电流极限圆和电压极限圆内，随着速度升高，电压极限圆会收缩。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKFWA8uaBc47CY1EhjAuRsUFemqgDQ7ysGNQ2D3UZxpkCIuksH77OBrw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

**不同条件下的电流极限圆和电压极限圆**

 **MTPA的数值解法** 

利用MTPA的思想计算PMSM的MAP，计算步骤如下：

1.读入电机参数：![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKdwibp1uYQibSQxIxHGOFw5kXWCjZCqj6hub3n0iaFXonuswNg4EC2Z9Lg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKlmAdvjicTeZAPJG9j8G6zF1Ribcer5EntvzbWZxtNrzE2ZlfKmPHUzmQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKVVM4pFvqiazP1h4llXCF0UOKFSic9NbyViaalauHzic9VdfDBiciadjKOPvQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKePFZTAicQIRicRGk9oqs9XYg6BpKNmTxn3Rz4ticXTnn9QnLcQqeTticXw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，极对数![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyK9Y0icQd7tJ7bUsCB6AX2sJv32Httjapicic9ylhibS51XBK2OYpTmczCPQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，电流极限值![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKjdm90RdaMPDXOS2iamjIBXGMXibbMqPud7ibKTtbOcAhfCbFyycj6eA5w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，电压极限值![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyK7CKsMmmlpuJOA3FTM1zaFbIMC7W0ceG5yMTZU7qiayLCNB2NHPeVDxw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，电机转速极限值![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyK4qIPa9V6OyPDzQMT5TgEIjFpoOV8nLWECcDJUfgbzMfUcIxLiaNCqrg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，功率极限值![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyK5kMmPcoqFLywa3lmI1NZnsWqsRq7iczlibdM5M9C7ibPTtLeln8Emw94g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)。

2. 电机转速从0按照一定步长增加至![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKvdDtRM5sOJbnFMJDEibKKq1EcZLQGo49ILMIYjFC2994zMqCpF1Zk8Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)。

3. 计算MTPA转矩点：

· 电机电流从![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKhHkLzFsSoQeBukmjFlosZ6YruykNrBEXUgeVTQ0UthJpaib98exkdwg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1) 按照一定步长增加至![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyK8lX0LjB0k8nLrao0xMf88P826KYkLiauhN5bibXV4NFxgvf9IoiaIDqPQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1) 。

· 电机电流角从90°按照一定步长增加至180°。

· 根据电压和转矩方程，计算![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKxs4b4U97xtNJoaAtRmQrapP5131do4GbTmGcCD9ibwwJ2lNWITy9zYA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)，![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKme2HOeZXbl7WPzyW60HRoxNZkoX1knibnjmN1ekdXl9ta28rmHJIHmA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)，![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKPg70cThc3FERDbHnkibVlRxT5c6SPR0e6tcukOjVDZiarDyxPrIDje4Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyK6GKkbRXjx1GibXUqPAoxU7Aw8ux8SeibYTJe1QpZd5MuiaVSw9o2rB4icg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKCR9vWfkfoKGTdPXAgntGYwe4BNTxZZzBjFbNDxCbty1CWLZB9HTbOA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，找出转矩![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKJCLU3pCJy8qydS2Z0gCbNW99nibuTobDqUqeTyLiarEIeYGGD0KRUefA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)最大的点。

4\. 记录和计算：![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKSicgrpRfm8CyHW2iazZz8M5hn9CibKBU0RNNJjEK4dEqJdM9BM3OfDib9A/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKxs4b4U97xtNJoaAtRmQrapP5131do4GbTmGcCD9ibwwJ2lNWITy9zYA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)，![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKme2HOeZXbl7WPzyW60HRoxNZkoX1knibnjmN1ekdXl9ta28rmHJIHmA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)，![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKhHgVygLwp5lrZCV9WJbkt9YN2Utqia1w7rZ1lR5GXOTe7xYJag2WGbw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKPg70cThc3FERDbHnkibVlRxT5c6SPR0e6tcukOjVDZiarDyxPrIDje4Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyK0MC8icicoHUWl8ZmhOgyW6OrD7mYp5SJ1npdiaCsicz3yNfvdthOFw6q4g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKbgliaGOFRExlpefMic5HPYBmdKUvY2GSg24PpNjP0Locxmt5MtM1fr4Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，电子电压![图片](https://mmbiz.qpic.cn/mmbiz_jpg/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKPl8rlVlqo2Q3zYu9ToXbC1Xc57SUyIEZzer1tLQicWeU22icza0wA1Cw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1)，输入功率![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKN4pibqibbiaRotZEaGVRpeXSKNNAD0vnkEgic4Q7KS2NnOotYGcgdlQuXg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)，输出功率![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyK0e0OlxzOopVNI706M5mFfSCf0tTXdibPZQHZPiccjbzO9HicMzaFicNufQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)，功率因素![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKw0r2iadHrzQf3DbNibeenMjlia1qIUFQKowibZe8vCwGphu6XTX63RdGNw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)，效率![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKll9oTA303qN7w2nrGj3qOucqZPIicI3Rs5wicynQZ88ejMH8YAfIuppQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)。

  

5\. 滤除掉不满足电压限制、功率限制等的结果。

  

**计算结果如下：**  

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyK6VmibyQnibtncficn1ZFO9aDSHAzaGlGyJiczUgPJz8UdjNicKTTxeiaqkzg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

**x轴: 转速(Hz); y轴: 定子电压, 定子电流，转矩，功率 (电动工况)**

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKLyByxcohewjEXpdm9T8F7ZEu6O8ibcOBNYiaxvxfHPpzzBREj4M4xfmA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

**X轴：d轴电流，Y轴：q轴电流（电动工况）**

![图片](https://mmbiz.qpic.cn/mmbiz_png/jruY7EUUotqdVYKzxDbxAE8E0MibAiaMyKw4fdIVrWbgv7lUHYE9HVjUCXib5icdewPPUhEicf6ic0WSTzGa376NHXZQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1)

**X轴：d轴电压，Y轴：q轴电压（电动工况）**

为了帮助大家深入理解永磁电机控制策略和掌握基于数学模型的永磁电机控制器的Simulink搭建方法并完成相应的算法开发，西莫特邀上海熠速信息技术有限公司高级工程师许为老师全新打造了永磁电机数学建模及控制算法开发研修班课程，从MTPA（最大转矩电流比）、FW（弱磁）、MTPV（最大转矩电压比）得到定子电流最优控制轨迹，进一步详细解读永磁电机常用的几种控制策略的原理到数值解法再到算法开发的过程实现。培训共分12部分，力求完整覆盖到永磁同步电机及永磁无刷直流电机控制系统相关建模仿真及算法开发等方方面面内容，为学员在实际工作中电控领域的学习和提高需求以及各种相关应用问题的解决提供更好的帮助。相对于西莫之前的电机控制研修班课程，本次培训更加聚焦于以电机控制系统建模仿真为依托深入解读和实现电机控制算法开发的过程，从基本电机控制的基本原理入手，进一步详细全面系统地帮助大家深入理解和完成永磁电机控制系统数学模型的建立，并结合典型的控制算法实例讲授来提高大家对永磁电机控制的认知，了解更多关于永磁电机控制的应用和未来发展趋势：

![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKtuIdpS8l66iazOEAHFZuZEohg4Ucqg7pFaKlK082RvuibjTJSpNbJh6a0Dn6QTdK0fFFSD36icFR8mw/640?wx_fmt=jpeg&from=appmsg)

欢迎对永磁电机控制仿真及算法开发有迫切学习需求的朋友扫码报名，关于本次培训的详细情况介绍如下：

  

**授课背景**

  

  

电机模型是电机控制算法开发和测试的基础，通过建立电机的数学模型，加深对电机的理解，才能更好地开发和测试电机控制算法。然而，电机控制系统不仅仅只有电机，还有微控制器，功率变换器，各种电流/电压传感器，各种速度/位置传感器，电容器，对这些部件的认识和理解，对于电机控制算法开发，模型搭建，仿真测试也是至关重要的。

目前从事电机控制算法开发，模型搭建，仿真测试的专业人才，对于电机控制算法的认识和理解不系统，不深入，不擅长利用理论知识分析具体问题。究其原因，主要有以下几点：一是学到的关于电机，电力电子，控制理论，微机原理，传感器，模拟电路数字电路等知识都是零散的，当部件组成系统时，不清楚部件之间的关联关系，无法串联起来成为一个整体；二是缺乏对电机控制系统的系统性认识，往往见木不见林，无法从系统层面思考问题，无法考虑部件对于整体性能的影响；无法将理论知识应用到实际的电机控制系统中，去理解问题，分析问题。三是对于一些问题的理解停留在表面，思考角度单一，无法进一步加深理解和认识；四是缺少对于实际应用环境，现场工况，产品设计目标等的理解；

因此，本课程是专门针对电机控制算法开发和测试等相关人员量身打造的一款技术培训课程，不仅适合在校大学生，希望加深对实际产品和系统的理解；也适合有一定工作经验的电机控制行业的专业技术人员，希望提升理论深度，并学习如何理论联系实际，分析和解决实际问题。总之，这是一门既有上层整体思考高度，又有下层部件认识深度的课程，既可以让大家快速提升专业理论知识又能提升分析和解决实际问题能力。

**课程简介**

  

  

课程内容由三大板块组成，每个板块都有详细的理论知识、实物图片、公式推导、模型搭建、算法分析等。让大家学会通过仿真手段，理解现场实际电机的工况，模拟现场的现象，分析现场实际的问题，理解控制参数对于控制性能的影响，从而改进电机控制算法。让大家明白，哪些问题可以先通过仿真手段解决，再借助试验手段。

1 电机控制系统的系统设计与部件组成：整体上理解电机控制系统的设计目标，再认识各个部件，电源，电容，逆变器，电机，电流传感器与采样处理，电压传感器与采样处理，速度/位置传感器与解析，从而在整体上和部分上对于电机控制系统有一个认识；

2 三相永磁同步电机控制部分：永磁同步电机三种数学模型（DQ模型，非线性模型，空间谐波模型），三种数值计算方法（前向欧拉，后向欧拉，Tustin法），逆变器模型，SVPWM算法及实现，软件功能模块，FOC算法，电流调节器的设计，MTPA/MTPV/FW方法，闭环仿真（不同的参数对于系统性能的影响），工程问题讨论（实际系统并不理想，这些因素对于系统性能的影响），从而提升理论联系实际，解决电机控制算法实际问题的能力；

3 三相永磁直流无刷电机控制部分：直流无刷电机的数学模型，六步换相控制算法，电流信号的处理，滞环控制，电流调节器的设计，BLDC的PWM调制方式，从而学会开发直流无刷电机控制算法。

课程既涉及电机控制系统又涉及各个部件，力求由浅入深，降低基础门槛；深入浅出，讲解通俗易懂；既注重基础理论又兼顾实际问题的分析，既顾及新手上路又关注能力提高。

**授课老师**

  

  

许为，高级工程师，中南大学，硕士研究生，电力电子与电机控制方向。长期从事电力电子系统建模与仿真，实时仿真系统的设计与应用，电网侧和电机侧变流器的核心控制算法的研究与开发。发表相关论文十几篇，申请相关专利十几项，软件著作权4项，获中国专利优秀奖1次。先后负责和参与铁路牵引系统，供电系统，直线推进系统，电动汽车，风力发电系统，光伏发电系统，船舶电力推进，工业变频，大功率轧机等的实时仿真系统的开发。并从事高速铁路感应电机，电动汽车永磁和感应电机，工业变频感应电机等项目核心控制算法的开发，弱电网条件下多重化网侧变流器的核心控制算法的研究与开发，以及诸多现场故障与疑难问题的分析和解决。

**授课对象**

  

  

-   电机控制行业软件工程师、测试工程师、模型开发工程师、服务工程师、销售工程师、项目经理等
    
-   新入职或即将入职的大学生、研究生
    
-   非电机专业有专业拓展意向或转行电机控制的专业技术人员
    

**课程收获**

  

  

通过本课程的学习，可迅速使自己电机控制专业理论，仿真建模，分析实际问题技能得到跨越式提高；对行业新手，可快速入门进入工程技术人员角色，胜任简单的电机控制技术工作，熟悉相关软硬件的设计流程。

**课程大纲**

  

  

可能视报名学员所在领域和工作岗位不同授课内容有少许增减，以现场授课内容为准；也欢迎大家在预报名填表的时候提出您的需求和建议。每天课程结束之前安排互动交流环节，现场答疑和交流。

![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKtuIdpS8l66iazOEAHFZuZEo5ZDficM7twjeYFZwTgnvLCaplfz9QsTTNOWNdHyjbwINftDWxmk3OPA/640?wx_fmt=jpeg&from=appmsg)

**增值服务**

  

  

-   西莫会员报名享8折优惠，全日制在校学生凭学生证享5折优惠，培训后皆可领500积分用于论坛学习资料的下载。
    
-   往期西莫任何研修班学员参加本次培训享72折的优惠。
    
    以上优惠均需提前付款方可参加，如要求开具增值税专用发票则不享受任何优惠。（优惠可面向开具增值税普通发票并提前付款的西莫会员）
    
-   参训学员可以针对课程相关问题在课程结束后也能得到老师的解答与指导（微信、邮件、电话）；并建立培训后学习的专用微信群作为培训讲授的补充，供学员间开展后续交流讨论；对课堂上讲授过的内容可长期答疑，以帮助大家巩固课后学习效果。
    
-   凡参加我单位组织电机电控培训的企业，均可免费帮助在西莫电机论坛及公众号上发布推送招聘信息，助力企业引进优秀技术人才。
    
-   凡参加我单位组织电机电控培训的企业，均可免费帮助在西莫电机论坛及公众号上发布产品信息推广，助力企业宣传产品品牌建设。
    

**培训课程费用及报名**

  

  

-   标准费用：3980元/人，含专业培训教材、证书费。食宿可统一安排，费用自理。
    
-   培训时间：2025年7月19-20日
    
-   培训地点：上海（具体地点会提前一周通知）
    
-   报名方式：扫描下方二维码进行预报名，提交报名信息后可通过提示添加微信索取培训的正式邀请函以及报名回执
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVAgHHz8bTt6xsRmjb3cyQZbUIdK7iaBvZllT5DsmVKjpQlibVASfRmoBEnSAxmicWxap2SXFtt69icXQ/640?wx_fmt=png&from=appmsg)
    

其他事宜咨询，请联系会务组负责人张老师，电话：18516258619欢迎大家踊跃报名！

![](https://mmbiz.qpic.cn/mmbiz_gif/D3daD2ElhIUE2A9cx6RwEpHeicccUnLeRiaV6GExMABU7T4JW6xZ8fuBgS6xUW4tBvCbRQbdgib2ShLrW4Gia4jT7g/640?wx_fmt=gif)

[![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKsVuAzKYgsaiajzSsgRcchqxF4IDicN6icoibHub2UQVcjDuMO0ZtSVR1YVvdnics5dP5YZx7ibvpwyDczw/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658223&idx=1&sn=fe89f2ddfb905b6abf9641c8c74fe27e&scene=21#wechat_redirect)

[![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKsVuAzKYgsaiajzSsgRcchqxTkELSPpD63HeTZcBQ1mEnpFNwJEBJib2zyLERNO0drj5ziab4McIHLXQ/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658235&idx=1&sn=ea513ab4961c967a53418e97fe47b9ed&scene=21#wechat_redirect)

[![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKv6t5UJe8wFyiaqZ90kCfoiaLTDLry2AZEmlCEicOPVibxnKrYf7ZKvxIhndIAmdzsrk28sXcdBI9co9w/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658218&idx=1&sn=5d2f8c0d5d10356a1e5e56f4fcef11fb&scene=21#wechat_redirect)

[![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKv6t5UJe8wFyiaqZ90kCfoiaLhtT9wu9fvm3HM9fjxhG3HrbpnHYKhJOXReVNicHvnnQpV7C80yeckUw/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658229&idx=1&sn=0bf1dfb4ffbc8bc866863076f49af9a8&scene=21#wechat_redirect)

[![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKsVuAzKYgsaiajzSsgRcchqxsEXTlwtGfsHKkpZERsJAxbx188AR3icY3e5k8aaCmSzyYh2akibC1JSw/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658121&idx=1&sn=7cf6e4b756408d14b94b862588414780&scene=21#wechat_redirect)

[![](https://mmecoa.qpic.cn/mmecoa_jpg/9RCbW5V9GKsVuAzKYgsaiajzSsgRcchqxRTOClqfnNrwg1eqAnnB9P6tQ2abVrwy6rAFRve80csEJYeG5wR0bTw/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658205&idx=1&sn=7e9b903c177a4d7b6873a0b57537c2cb&scene=21#wechat_redirect)![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIUfOAjXn1AUTs3kViax3rSDvTWPnp1LrAXb97Bvkuzm8WZTu1zqnG0SuNQmBbLt8aibThApiafVVt8NA/640?wx_fmt=png)

[![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIVhiaShka2hzoZ3EwiaApgSc27MFwUVnGiaIe1wavPaQpAjeEJBqpZWthz1qY4bkVXDyJbfTPkicMx9FA/640?wx_fmt=png)](https://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650658205&idx=2&sn=71d533c66e7a95dd3937c318920f34d8&scene=21#wechat_redirect)  

[![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWZmc8zsicsTcbCIbVFv7SoOodJAqUibPBTD0s7skbpFRlvg05pUo90abibFXBk5dljD4LMBxk8x0vqw/640?wx_fmt=png&from=appmsg)](http://mp.weixin.qq.com/s?__biz=MzA5NjExNjMyMA==&mid=2650653764&idx=1&sn=eb5317bf3d00f3cbee6d4528d63d4976&chksm=88bc6f4bbfcbe65d53c1e02169550dbdc8d8829eeea7518fee5bd7dc595c04c9a5b75d14f9a0&scene=21#wechat_redirect)![](https://mmbiz.qpic.cn/mmbiz_png/D3daD2ElhIWEDKUS6uyXBHiboINPcBLKibHWbwAfibdzBE1M50oLib9VPYiaQXtgd8o9aH4byicFy5BfmQb84jMHlxBQ/640?wx_fmt=png)

点击**阅读原文**，直接报名参加本次培训！

******觉得好看，请点这里********↓********↓************↓********↓**********