# MOS管GS端和G端串联一个电阻

原创 电路一点通 2024-09-10 11:36 广东

> 原文地址: [https://mp.weixin.qq.com/s/Y8CvFH2h9BDCiy6K5jF9qg](https://mp.weixin.qq.com/s/Y8CvFH2h9BDCiy6K5jF9qg)

电路中两电阻在MOS管中的作用：GS间并联电阻泄放电流防ESD并固定偏置，G极串联电阻与寄生电容形成RC电路减小瞬间电流并抑制振荡，阻值需根据具体需求选择。

## **一点通推荐**

    
-   [**4~20mA转0~5V电路设计，便于MCU处理**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247529739&idx=1&sn=76c13d68102e798326179b57d191a48f&chksm=fcef9669cb981f7f8e19c210afba78b2ea0aecc661460185d7bef827b467705788a34165773f&scene=21#wechat_redirect)
    
-   [**NMOS与PMOS的导通条件与使用方法**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247529699&idx=1&sn=d0d676b05dffb48ad22057d9f4978d7b&chksm=fcef9781cb981e972ddfad1ed26d72eaa513b6fa4df1fbfbf5b07207e9e7f0c9df03e15afcb3&scene=21#wechat_redirect)
    
-   [**过流保护电路与单片机外围电路**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247529758&idx=1&sn=853621a7207fe9642e6036b76afc52b2&chksm=fcef967ccb981f6a51f23179b5ba3628def35f068dc2624d91fddab61683bebc5114059ac216&scene=21#wechat_redirect)
    

有没有小伙伴知道，电路中两个电阻具体的作用是什么？

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管GS端和G端串联一个电阻_images\img_000_a463804cdfc0.png)

我们围绕以下两个问题来解答：

一、为什么在MOS管GS并联电阻（R1）？

二、为什么在MOS管G极串联电阻？（R2）

解决问题一：GS之间并联的电阻

作用：用来释放寄生电容的电流

原因：与MOS管的寄生电容有关，向DS端施加电压，给Cgd和Cgs充电，G极电压慢慢升高，直到MOS管导通。

1\. 泄放电阻

起到防ESD静电作用，避免处在一个高阻态，让MOS管误动作，损坏MOS管的栅GS极；

2\. 固定偏置

当前级电路开路时，电压施加在DS端，对Cgd充电，导致G极电压升高，它可以保证MOS管有效关断。

电阻阻值：5K-10K

阻值过大会影响MOS管关断速度，阻值过小驱动电流会增大。

问题二：为什么要在MOS管G极串联电阻？

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管GS端和G端串联一个电阻_images\img_001_e7f9a035b16d.png)

主要还是因为寄生电容，其次就是抑制振荡。

G极串联一个电阻，与Ciss形成一个RC充放电电路，能够有效减小瞬间电流值，避免损坏MOS管。（Ciss = Cgd+Cgs）

此外，当MOS管接入电路，也会存在引线产生的寄生电感，与寄生电容，形成一个LC振荡电路。串联一个电阻，可以有效减少振荡电路的Q值，避免电路故障。

电阻阻值：电阻建议在百欧以内，会减少MOS管的开启和关断时间，增加损耗。

不过，这个阻值是不稳定的。在防反接电路中，阻值大一点也是可以的，它可以降低工作时电量的损耗。

**👇👇👇更多技术资料👇👇👇**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管GS端和G端串联一个电阻_images\img_002_8683b10e9288.other)