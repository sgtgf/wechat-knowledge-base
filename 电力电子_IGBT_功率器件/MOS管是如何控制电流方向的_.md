# MOS管是如何控制电流方向的？

原创 电路一点通 2024-12-23 11:29 广东

> 原文地址: [https://mp.weixin.qq.com/s/GhFtBraKVdQi42C-LdaKHw](https://mp.weixin.qq.com/s/GhFtBraKVdQi42C-LdaKHw)

MOS管通过栅极电压控制漏极电流，利用电压比较器（如LM358）实现动态控制。控制电压与参考电压比较，通过循环控制实现电流动态调整及方向控制，方向由MOS管类型（N或P沟道）决定。  
  
在mos管实际使用的过程中,mos管既可用于放大电流，又可以作为电子开关。  

**👇👇👇更多技术资料👇👇👇**![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管是如何控制电流方向的__images\img_000_ac6d85e0e2d9.other)

那么mos 管如何控制电流方向的呢？

mos 管作为电压控制器件，通过加在输入端栅极的电压来控制输出端漏极的电流，即利用对 G 极施加电压以实现对电流的控制。

以利用电压比较器（如 LM358）控制 mos管为例，将一个控制电压（接入比较器同相输入端）和一个参考电压（接入比较器反相输入端）同时送入电压比较器（比较器电源接正 12V 和地），比较器的输出经过 5.1K 电阻上拉后接 G 极。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管是如何控制电流方向的__images\img_001_e5839166f46e.jpg)

在初始阶段，若控制电压比参考电压高，此时 G 极基本上能加到12V，可使 mos管迅速导通，输出电流。由于刚开始电流很小，所以控制电压比参考电压高很多。

而随着电流增大逐步达到某个值时，参考电压会迅速上升，当与控制电压接近并超过时，比较器就输出低电平（接近 0V），使得 mos管截止，电流减小。而后电流减少后，参考电压又下降，管子又导通，电流又增大，如此循环往复，实现对电流的动态控制以及电流方向按照 mos管自身类型（N 沟道或 P 沟道）所规定的从漏极到源极或从源极到漏极的流向控制。

## **一点通推荐**

    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535254&idx=1&sn=dfc8309f803b74c18aea2104cbd9724c&scene=21#wechat_redirect)[运算放大器LM358的几种外围电路设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535785&idx=1&sn=cc4724229f10287b7affa5d2d7bf7038&scene=21#wechat_redirect)
    
-   [搞电子软硬件人6大结局](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535913&idx=1&sn=4626ac39cad4f588de864678cc73c0a9&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247535913&idx=1&sn=4626ac39cad4f588de864678cc73c0a9&scene=21#wechat_redirect)[【电路设计】优化降压电源硬件方案，稍有不慎会翻车](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536039&idx=1&sn=a5508c56be41289a17e29da15123bc7d&token=1657833886&lang=zh_CN&scene=21#wechat_redirect)
    

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管是如何控制电流方向的__images\img_002_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分