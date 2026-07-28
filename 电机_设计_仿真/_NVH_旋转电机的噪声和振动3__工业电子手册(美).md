# 【NVH】旋转电机的噪声和振动3——工业电子手册(美)

原创 Mr 晋 玩转电机设计 2025-02-03 14:58 四川

> 原文地址: [https://mp.weixin.qq.com/s/6IO3FDXhOyCfprV65QlwfQ](https://mp.weixin.qq.com/s/6IO3FDXhOyCfprV65QlwfQ)

**NVH译文系列第3篇**  

原文摘自美国《工业电子手册 功率电子和电机驱动___》第二版__，第9章。_《The Industrial Electronics Handbook  POWER ELECTRONICS AND MOTOR DRIVES 》  
__

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chzAdLoMJRATMq0NIu7ldiavyjnicUyYV1ZSGqbLvWgNLM6qUXxCEgRgbpWg4M8kffX9xy7feltQoGjA/640?wx_fmt=png&from=appmsg)

本篇为原书9.4节的翻译，主要内容是电机的振动和声辐射。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFR8ibvEAbZ5Wc5sib97QSnKCRyTn2ynyveQEUBOsQpH6h0We2gW2c7JagA/640?wx_fmt=png&from=appmsg)  

### **4 机械和声学建模**

力分量 fmM的特性和定子设计可用于估算振动幅度及相应的噪声。首先计算静态变形幅度 Yms，其次考虑机械共振频率确定振动幅度 Ymd，最后估算声学噪声。大多数给定的力学表达式来自于梁理论 \[2,3\]。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRAbVYrGof83g4Lnhvuv4dAwW272RsbbO4gRI13L2S8md2PoOaImJPNA/640?wx_fmt=png&from=appmsg)

图9.13 定子的符号

### **4.1 静态变形幅度**

#### **4.1.1 静态变形幅度**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRHFogF3sE80bdzyOLBgscP48CZtUKBiaf0XWsI61U20CPX4qT0SBvGcg/640?wx_fmt=png&from=appmsg)

### **4.1.2 极对数影响**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFR0ufmzgZ8NNGibzljfTkicnzxZy3etflf3ibJuOLPZ803Gicr3HqK71E3HA/640?wx_fmt=png&from=appmsg)

### **4.2 共振频率和振动幅度**

### 每台电机均有多个固有频率，各对应一种振动模态。锤击可激发这些模态，产生由共振频率组成的噪声。若力的频率接近共振频率，振动幅度将显著增大。机械现象复杂，难以通过简单公式精确描述。Jordan 和 Timar 提出了以下近似公式 \[2,3\]，基于梁理论 \[14\]，所提出的方程式将定子视为一个完美的圆柱体，忽略地脚等结构的影响。

**4.2.1 共振频率**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRlLdbN0dky6fib01yAEib9JdpIXYSGB1crbc8gL2YOCkRT8ZTSicBiaaODQ/640?wx_fmt=png&from=appmsg)

### **4.2.2 振动幅度**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRuMIHfgHV1PGHysiaXQxe8SY82KZZQXEOfFJ7wNK8hc9VpYotSofoSEQ/640?wx_fmt=png&from=appmsg)

#### **4.3 电机的声辐射**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRMibdg6ERuvgOSws4ibaj50ClaP9WzZicQvPhlBeodHs4y9iaEtXjkBW2RQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/Zlibib2pr1chwng4ya0NOKUnydy5vxFbFRo2VnREicuVzibo6jCujleOxyVIs4jSAAgNOUezVVFroNWT5e3Ueic8zbA/640?wx_fmt=png&from=appmsg)

  

  

_原文：_

__《The Industrial Electronics Handbook  POWER ELECTRONICS AND MOTOR DRIVES 》_，__第二版__，第9章  
_

* * *

**欢迎留言讨论！**

欢迎推荐优秀文献、国内外电机最新资讯！

欢迎投稿分享！

  

长按图片，识别二维码，关注我哟

  

![](https://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chwnM0Q7kianI9ClktRZuNyJs53Q2Irp5aup8son3fVl5riaoG8hUfkTasQTtiblqczsqHpDOibG7Qx6Qg/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)