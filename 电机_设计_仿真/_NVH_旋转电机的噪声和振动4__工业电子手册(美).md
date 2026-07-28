# 【NVH】旋转电机的噪声和振动4——工业电子手册(美)

原创 Mr 晋 玩转电机设计 2025-02-04 14:58 四川

> 原文地址: [https://mp.weixin.qq.com/s/gSZ6OA2vwiOYqOo9AEY\_oA](https://mp.weixin.qq.com/s/gSZ6OA2vwiOYqOo9AEY_oA)

**NVH译文系列第4篇**  

原文摘自美国《工业电子手册 功率电子和电机驱动___》第二版__，第9章。_《The Industrial Electronics Handbook  POWER ELECTRONICS AND MOTOR DRIVES 》  
__

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzAdLoMJRATMq0NIu7ldiavyjnicUyYV1ZSGqbLvWgNLM6qUXxCEgRgbpWg4M8kffX9xy7feltQoGjA/640?wx_fmt=png&from=appmsg)

本篇为原书9.5-6节的翻译，主要内容是磁动势谐波、磁导谐波、磁密谐波。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRiaBH0XkcdLtBvTwiaXrQZPe7k8n1dKgXUGCicjOT1ewhI4LbblQ1eebDw/640?wx_fmt=png&from=appmsg)

  

### **5交流****电机的磁通密度谐波**

如前所述，磁噪声由磁密谐波的组合产生。确定这些谐波的方法包括有限元软件和解析法。本节重点介绍交流电机的解析方法。气隙中径向磁密b由作用于气隙的磁动势 ε与单位面积磁导 Λ的乘积得到：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRRnUxuu2IB97ThjDzYIgX5xlOSTiaeF1KHwdz7E197Ja4CmAo80qKGZQ/640?wx_fmt=png&from=appmsg)

当假设铁芯磁导率为无限大且忽略偏心时，ε的确定并不困难，难点在于 Λ的解析。文献中存在多种近似表达式：Timar \[2\] 的公式忽略定转子槽的相互作用；Alger \[13\] 通过单一基波项近似考虑槽影响；而更高阶的谐波（如定转子槽相互作用）对磁噪声起主要作用，需采用更精确的表达式 \[10, 19\]。

### **5.1 磁动势谐波**

### 以图9.14所示的三相单层绕组为例（极对数 p=1，每极每相1个线圈）。绕组通入三相电流时，各线圈产生的磁动势（m.m.f.）叠加形成旋转磁场。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRCnACHdibibeb845E1xUe7YkAnsNRA4v05iavPA6TD4Sl554DZSibL6HgWg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRibD7pUN0aYAby30uxrHMuZCfImZnZLRmx4icx42hcZRGBeqJjsxXYFJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRadeqj6ENib56WAgOUcibJN9C1RFfU7hVKxXgFW6qeOo2fulKyzlM7wIA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRtKd3qbDsMzB1qEoAyIJJPP9JKOCj96oibH4DPw1cD0sUoeLLtiauJHsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRPuYtiahe0UDXolmsc0S5PVbmO7oA6vsibf30202b6ntqae3G0FrzEnRA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRpeGDd4m4y9OllcvZicE6RQcmcibMuBfuEXQQRLlwZ2Xtou5FWKTBxLhQ/640?wx_fmt=png&from=appmsg)

### **5.2 气隙磁导谐波**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFR1bycWN7Kx9LWKTCQzibH2SAxicxWEWpas8wrVCW4tZ7ibk9GJOle28yMA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRVKarF3baA1svs73Ij8DuS342kP6WyuuGPB1uDPzIz22eJf89IGIlVA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRFB7HsBJibStkR1v6In8GLKJEw13ZvPf5ywkhMwjic8iaQsOvNLxIVzh4A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRU8ePYrlmhTybrccCEicR1tXYR15UarFBv4ibK9WcyVkIcpPO73KMbVWA/640?wx_fmt=png&from=appmsg)

磁导表达式包含四类项：

1.  恒定项 A00（对应均匀气隙）
    
2.  定子槽相关项 As0
    
3.  转子槽相关项 A0r
    
4.  定转子槽相互作用项 Asr
    

为了定性评估不同项的相对重要性，可以指出以下不等式关系：

-   As0 ≈ A0r（定子槽相关项与转子槽相关项幅度相近）；
    
-   A00 > As0 或 A0r（恒定项幅度大于定子或转子槽相关项）；
    
-   As0 或 A0r > Asr（定子或转子槽相关项大于定转子槽相互作用项）。
    

_磁导表达式（式9.37）适用于所有交流电机（感应电机、同步电机、开关磁阻电机等）。_

**定性分析角度：**仅需知道定转子槽数即可确定所有谐波成分；

**定量分析角度：**需根据槽的具体尺寸（如槽宽、槽深等）调整参数以精确计算谐波幅值。

### **5.3 磁通密度谐波**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFReJYUmL6mtzbicrmYw0581cyvX0FqDlXJ7vuLVaN5OEdic43yDwyuSGEQ/640?wx_fmt=png&from=appmsg)

### **6结论：**

电机噪声主要由高速时的气动噪声和电磁设计不当（如高极数、PWM逆变器供电或槽数选择错误）引起。通过理论模型估算振动与噪声，可优化设计以避免问题：

1.  **抑制关键谐波：**识别产生可听频率、大幅值、低阶数（m≤8m≤8）的力波组合。
    
2.  **槽数匹配：**避免定转子槽数组合引发共振（如 Nr=34、p=2时易产生 m=2的力波）。
    
3.  **主动降噪：**对已存在噪声的电机，可采用主动控制技术 \[20, 28\]。
    

本文公式为电磁-机械-声学的耦合分析提供了系统框架，结合解析法与有限元仿真，可实现低噪声电机设计。

  

_原文：_

__《The Industrial Electronics Handbook  POWER ELECTRONICS AND MOTOR DRIVES 》_，__第二版__，第9章  
_

* * *

**欢迎留言讨论！**

欢迎推荐优秀文献、国内外电机最新资讯！

欢迎投稿分享！

  

长按图片，识别二维码，关注我哟

  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwnM0Q7kianI9ClktRZuNyJs53Q2Irp5aup8son3fVl5riaoG8hUfkTasQTtiblqczsqHpDOibG7Qx6Qg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)