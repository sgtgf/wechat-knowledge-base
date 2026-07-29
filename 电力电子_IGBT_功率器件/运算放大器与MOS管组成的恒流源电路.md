# 运算放大器与MOS管组成的恒流源电路

原创 电路一点通 2024-11-17 11:30 广东

> 原文地址: [https://mp.weixin.qq.com/s/tCYM8mSFdLJCX7CzYjFXLA](https://mp.weixin.qq.com/s/tCYM8mSFdLJCX7CzYjFXLA)

### **恒流源电路图**

这是一种由运放组成的恒流源电路。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lcxsdJICQuaK2pfQwf7iaqxwcRYk5FI94emwfictrfuGOvulYUWapfKwuHdERicCx5gnP8mIWyhCXXww/640?wx_fmt=png&from=appmsg "运算放大器 MOS管 恒流源电路")

****👇👇👇**更多技术资料👇👇👇**![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运算放大器与MOS管组成的恒流源电路_images\img_001_04220958ac2f.jpg)

### **原理分析：**

1\. OPA  
OPA （集成运算放大器）具有开源增益高，输入阻抗大，输出阻抗小的特点。

2\. MOS管工作原理  
我们知道三极管是利用 Ib 的电流控制 IC 的电流，属于电流控制电流器件。

而MOS则是利用Ugs的电压去控制电流 Id 的，所以说 MOS 管是电压控制电流的器件。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lcxsdJICQuaK2pfQwf7iaqxwQPPfl28Hiaia6vaeINMwbEwp6Z88Hmy0a2UM3HPEPgWWEWXbRVS912Fw/640?wx_fmt=png&from=appmsg "运算放大器 MOS管 恒流源电路")

对于N沟道增强型的MOS管，当Ugs>Ugs(th)时，MOS就会开始导通，如果在D极和S极之间加上一定的电压,就会有电流Id产生。

在一定的Uds下，D极电流Id的大小是与G极电压Ugs有关的。

我们先来看一下MOS管的输出特性曲线，MOS管的输出特性可以分为三个区：截止区、恒流区、可变电阻区。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lcxsdJICQuaK2pfQwf7iaqxw5A5QlYicNGQSlswfy21PeHz3weHSg9zE6GRsDYYxmTpKkmC6TuZK0kA/640?wx_fmt=png&from=appmsg "运算放大器 MOS管 恒流源电路")

截止区 ：当满足 Ugs<Ugs(th)，MOS管进入截止区。

截止区在输出特性最下面靠近横坐标的部分，表示MOS管不能导电，处在截止状态。截止区也叫夹断区，在该区时沟道全部夹断，电流Id为0，管子不工作。

恒流区 ：当满足 Ugs≥Ugs(th) ，且 Uds≥Ugs-Ugs(th)，MOS管进入恒流区。

恒流区在输出特性曲线中间的位置， 电流Id基本不随Uds变化，Id的大小主要决定于电压Ugs，所以叫做恒流区，也叫饱和区，当MOS用来做放大电路时就是工作在恒流区（饱和区）。

注：MOS管输出特性的恒流区（饱和区），相当于三极管的放大区。

可变电阻区 ：当满足 Ugs>Ugs(th)，且 Uds<Ugs-Ugs(th)，MOS管进入可变电阻区。

可变电阻区在输出特性的最左边， Id随着Uds的增加而上升，两者基本上是线性关系 ，所以可以看作是一个线性电阻，当Ugs不同电阻的阻值就会不同，所以在该区MOS管相当就是一个由Ugs控制的可变电阻。

击穿区在输出特性左边区域，随着Uds增大，PN结承受太大的反向电压而被击穿，工作时应该避免让管子工作在该区域。

根据MOS管的输出特性曲线，比如下图是取Uds=10V的点，然后用作图的方法，可取得到相应的 转移特性曲线 。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jwW4UHic87lcxsdJICQuaK2pfQwf7iaqxw7TEGO8ehh3ZibMiaTRKce7qNZia33RN5CGXRju564RmwmfwvKCQfyeTCQ/640?wx_fmt=png&from=appmsg "运算放大器 MOS管 恒流源电路")  

转移特性是表示Uds不变时，Id与Ugs之间的关系。

在上图的转移特性曲线上，我们可以看到当Ugs大于4V时，Id大幅度增加，而当Ugs到达5V以上时，Id基本没有什么大变化了。  
**恒流源工作原理**

此电路是一个负反馈电路，由采样电阻R3实时反馈负载电流，当负载电流变大时，运放反相输入端的电压比正相输入端的电压高，运放输出低电平，使三极管截止，触使负载电流减小；

当负载电流变小时，运放反相输入端的电压比正相输入端的电压低，运放输出高电平，使三极管导通，触使负载电流曾大。因此，负载电流经过采样电阻的实时反馈下最终达成恒定的稳定电流。

电阻R2起缓冲限流的作用，一般选取1K~100K之间；通过调节电位器RP即可改变恒流源电流的大小，可以根据实际需求选择合适的电位器及电阻大小；稳压管D的作用是为电位器提供恒定的电压，防止因为电源的波动而引起运放正输入端电压不稳定，导致负载电流有波动。

三极管Q1为NPN类型，使用时根据实际电压、电流的要求选择合适的三极管，若功率大需考虑散热的要求，做好散热措施。

此电路看似简单，实际原理是当采样电阻的电压变化时，直接反馈到运放的反相输入端，它与同相输入端电压的差值被运放放大，输出控制三极管的基极电流，改变三极管的内阻，从而改变发射极与集电极间的电压降，从而使采样电阻的电压保持不变，以达到负载电流恒定的目的。  

此处的三极管处于放大区, 随着输入端电压差值被运放放大，使得三极管的导通程度不一样，通俗一点就是，电流大了，少导通一点，电流小了，多导通一点。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\运算放大器与MOS管组成的恒流源电路_images\img_005_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

-   [多种接口电路原理图解析【STM32自学实操教程】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247531635&idx=1&sn=ad789212ad7ceb299663156546b7b790&chksm=fcef9f11cb981607ef6a7d27ef2d9f48b8dd35338b91dc535e797cc98f5f5c9f5d1312f50370&scene=21#wechat_redirect)    
    
-   [多路降压稳压DC-DC开关电源电路设计（3.3V、5V、12V、ADJ）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532091&idx=1&sn=e39f9a88a6487f2eadf7b5d2b5782e0c&chksm=fcef9d59cb98144f8b6f0232b77b8569d007edbbd90dcbf0b54bd25e959ad6901f92ca480edd&token=1289401606&lang=zh_CN&scene=21#wechat_redirect)  
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247532091&idx=1&sn=e39f9a88a6487f2eadf7b5d2b5782e0c&chksm=fcef9d59cb98144f8b6f0232b77b8569d007edbbd90dcbf0b54bd25e959ad6901f92ca480edd&token=1289401606&lang=zh_CN&scene=21#wechat_redirect)[DC-DC硬件电路基础知识-较全面](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247531531&idx=1&sn=5abdf76fa6b916d2ea29bcef1b4fcecf&chksm=fcef9f69cb98167f301aa550ca87f395e78913303b6b6d554cb3b7b298d7f432e7154dae9feb&scene=21#wechat_redirect) 
    
-   [PFC电路加旁路二极管有啥作用？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247531318&idx=1&sn=552511e8ad5f56fdaaba90f8c98b8033&chksm=fcef9854cb9811428e26ebdb9a590f643cd315be08328c3cfcd218591a16de35e281271b1fc1&scene=21#wechat_redirect)   
    
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分