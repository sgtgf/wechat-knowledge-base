# 数字孪生网络(DTN): 概念、架构及关键技术

原创 自动化学报 自动化学报 2021-04-22 16:53 北京

> 原文地址: [https://mp.weixin.qq.com/s/zJDPiyoaud2qyoMXhu95IA](https://mp.weixin.qq.com/s/zJDPiyoaud2qyoMXhu95IA)

**点击蓝字**

**关注我们**

  

随着新一代网络技术的发展, 网络的智能化与数字化被认为是新一代网络发展的趋势. 当前超大规模网络的发展面临巨大挑战, 例如网络灵活性不足, 网络新技术研发周期长、部署难度大, 网络管理运维复杂, 网络优化成本高、风险大等. 基于此, 本文系统化提出了 **“数字孪生网络(DTN: Digital twin network)”**的概念, 给出了系统架构设计, 分析了DTN 的关键技术和未来发展方向.

  

孙滔, 周铖, 段晓东, 陆璐, 陈丹阳, 杨红伟, 朱艳宏, 刘超, 李琴, 王晓, 沈震, 瞿逢重, 蒋怀光, 王飞跃. 数字孪生网络(DTN): 概念、架构及关键技术. 自动化学报, 2021, 47(3): 569−582

_http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.c210097?viewType=HTML_

  

本文将DTN定义为一个具有物理网络实体及虚拟孪生体, 且二者可进行实时交互映射的网络系统. DTN具备四个核心要素: 数据、模型、映射和交互; 可以对物理网络进行高效的分析、诊断、仿真和控制.

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zy6TiaZaPE21XfTwgywNI5pOxuT7C3ib4Vg1HxrJUnXhhzFxibHosibePeGQ/640?wx_fmt=jpeg)

  

本文给出了DTN“三层三域双闭环”的设计架构. 三层指物理网络层、孪生网络层和网络应用层; 三域指孪生网络层数据域、模型域和管理域; “双闭环”是指孪生网络层内基于服务映射模型的“内闭环”仿真和优化, 以及基于三层架构的“外闭环”对网络应用的控制、反馈和优化.

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZyMhUYlpW5dAMqIQnFklVFSIO6n8cuMNFY0gkqYtaTDnAu97zzfLdcsA/640?wx_fmt=jpeg)

  

DTN面临的挑战包括全网络域内设备接口的兼容性问题、构建高效层次化模型的建模难度大、模型仿真和验证功能面临实时性挑战、以及大规模网络的数据采集和存储等规模性难题. 构建数字孪生系统的五大关键技术, 即目标驱动的网络数据采集、多元网络数据存储和服务、多维全生命周期网络建模、交互式可视化呈现、以及接口协议体系.

  

DTN的相关研究目前还处于初级阶段. 将服务于包括网络规划、建设、维护、优化, 以及网络自动驾驶、意图网络等网络创新技术的应用, 提升网络的自动化和智能化水平. 

  

  

**●** **作者简介****●**

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZyjNn72hVibzU7TutN0VNvyqlic2O93lWHRyvq5k9FWNj16wqfrsVaHJvA/640?wx_fmt=jpeg)

**孙  滔**

中国移动研究院主任研究员, 网络创新实验室技术经理. 

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zy6ic1NQibvhJmxRnMW46p339vvibicNiardNPMa07HzS0JCdNDXK5WX1T9gQ/640?wx_fmt=jpeg)

**周  铖**

中国移动研究院网络与IT技术研究所项目经理.

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZymAfyiaNOHm2icVnU5oA1KrtD41969hxwEnMCQnRP9qVPFcpibPUaQYzCQ/640?wx_fmt=jpeg)

**段晓东**

中国移动研究院副院长, IMT-2030 (6G) 推进组网络技术组组长.

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZyuljXHEQ93c0Xria1ypxibiaCteibOngl1VGZGjQ3SkF3bGXekDRic4oHPww/640?wx_fmt=jpeg)

**陆  璐**

中国移动研究院网络与IT技术研究所副所长, CCSA TC5核心网组组长.

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZyIG1ohxbwmjez3jrg85qAiaPSITp1GdXEJK2NADdYW3uiaYVo8faia7ffw/640?wx_fmt=jpeg)

**陈丹阳**

中国移动研究院网络与IT技术研究所项目经理. 研究方向为数字孪生网络和意图网络.

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZyvY7su9YVJUbOBWdkGvib1YCKKdBnBCPfnrwKgMKtVtFRasyy8CJicrXQ/640?wx_fmt=jpeg)

**杨红伟**

中国移动研究院网络与IT技术研究所项目经理. 主要研究方向网络智能化、网络性能测量. 

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZyLllesJo5rZNvred82IWuU5hLOKw7vHsK7YKEuLicmh3KrY3eaeYWEhg/640?wx_fmt=png)

**朱艳宏**

中国移动研究院网络与IT技术研究所项目经理. 

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyy7fwZtpW6QylVsrmibRXGibtGEQibibp9m6mUI7PSj38PxhAfzja9oom4w/640?wx_fmt=jpeg)

**刘  超**

中国移动研究院网络与IT技术研究所项目经理.

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZyRb85HahTn5rgtKcgSz4QvDMTpibQuwdr4ibmgA1sy8BtZibxR7fa3In0A/640?wx_fmt=jpeg)

**李 琴**

中国移动研究院网络与IT技术研究所项目经理.

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZymickZlibtayPrCkPEVMREQhaCEBiavVKCRIwtDExbDHEmwTKvzicDtOb8g/640?wx_fmt=jpeg)

**王  晓**

中科院自动化所复杂系统管理与控制国家重点实验室副研究员.

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZyxMDUeMNRzDRPcmEgghhOlYBSjqernDsmcLxBALufx3kTCrJBBrK0Nw/640?wx_fmt=jpeg)

**沈  震**

中科院自动化所副研究员.

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZyyVFrVZgxM2ibpB9pQ9BIke1gaEMEoJIKF7YNb2iacfO4OGYM3gkJu7eg/640?wx_fmt=jpeg)

**瞿逢重**

浙江大学海洋学院教授, 海洋传感与网络研究所所长.

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zy9NdJn85tfxwWaWo8s9rp1MVtEChrsIicgxbia0YunKvuibZyeJIG3vl2g/640?wx_fmt=jpeg)

**蒋怀光**

美国国家可再生能源实验室研究员.

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2hLCVoicYpflG7UXs4kBasInNjhjOvMuyyINfHDCQibmAQEp4sB6riaKxCr1JHygiazBf/640?wx_fmt=svg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZyziawSZPQrYT4ockicykan7K9eibkACDDPOQcbNqC76heS4ZOavxZxKjJg/640?wx_fmt=jpeg)

**王飞跃**

中科院自动化所复杂系统管理与控制国家重点实验室主任, 中国科学院大学中国经济与社会安全研究中心主任, 青岛智能产业技术研究院院长. 

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YzUnzboffufIcoFmCZTpMN2Ao7NV6vVe8yj5wM0IR1icvy41N4lRfNPJlJ4tp1njqrUeP5m2RQWasr8lWPptuWQa/640?wx_fmt=svg)

  

**期刊目录**

[2021年第03期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958419&idx=1&sn=b5d00eb294aa8c61a6fe4a0da8b461b9&chksm=f2942c52c5e3a544ca32e37d63f8ca879a64018d3fa5b25abd6bde1aeb582914f16e1e11182a&scene=21#wechat_redirect)

[2021年第02期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958305&idx=1&sn=a701b9996478d2c09078a03f5b22d524&chksm=f29423e0c5e3aaf692be51b3905e1cbf4045c6df9664ce7d13459de3c0c61aa284b13eb502b9&scene=21#wechat_redirect)

[2021年第01期](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958084&idx=1&sn=24c140a6a1957eb7f4164689ed2840a5&chksm=f2942285c5e3ab93c5ed6127ad93e76ded82ae657ca79f7ead390387fbe2a72cb6df0ec6dcd2&scene=21#wechat_redirect)

[《自动化学报》2020年全年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957972&idx=1&sn=1951847aacbcb7d22bdd2a46a79af871&chksm=f2942215c5e3ab03d070d8e52b8764b38036897c97b6a26c7a1f918c806b28edbe6c0fbf7ea9&scene=21#wechat_redirect)

[2020年第10期 工业人工智能专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957201&idx=1&sn=ab82a767bd716ab67fdf2942500d8b61&chksm=f2942710c5e3ae06b27f9e63a5e329a1123d90b051164e6b6123c500230541b1ed12d92abbfb&scene=21#wechat_redirect)

[2020年第09期 分布式信息能源系统理论与应用专题](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956412&idx=1&sn=8ebc13d63fd333ad85dbb8b5825df248&chksm=f294247dc5e3ad6ba297857a5b957e97cf499266c50318791fa8abd9432ecf1d9c3d9b287e36&scene=21#wechat_redirect)

[2019年第12期 智能轨道交通系统专刊](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955524&idx=1&sn=a76b97bf832e984f0155acc0fb367bc7&chksm=f2941885c5e391935c353c88072e806cb0b5b9b78b1f7b23b3c6f4b8c6a2c12f72557f87b56b&scene=21#wechat_redirect)  

[2019年第01期 信息物理融合系统理论与应用专刊](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955194&idx=2&sn=fb75bc8af9672922fa20efe2d30ff6c9&chksm=f2941f3bc5e3962db43689d03a54a0e40d83cb0e69fb9c48e87c0325b5bdf1b71028ebbbba0a&scene=21#wechat_redirect)

  

**热点文章**

[基于区块链的数字货币发展现状与展望](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649958456&idx=1&sn=db1e69bbd69e864051158910b599e0a9&chksm=f2942c79c5e3a56f669395da520a1f215c6452cc8a0d40ca6e3b274b85e077c547bf4d85a8e5&scene=21#wechat_redirect)

[比特驱动的瓦特变革—信息能源系统研究综述](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651070474&idx=1&sn=bbfe03a0e9a8f97f46c87d75f466e7c2&chksm=8131ea47b646635104e90390e9a09f18947b3cd7d1bc9438dd4b4275f17db875abd2ab1a2849&scene=21#wechat_redirect)

[状态转移算法原理与应用](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069967&idx=1&sn=3fec83278b26be988d7a5fea928a69a9&chksm=8131d442b6465d54d02d3a0ae16b064548d496696b14906b9f6de6043645035ecd25f4f7b39b&scene=21#wechat_redirect)

[绿色能源互补智能电厂云控制系统研究](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069602&idx=1&sn=b50c1e8d5fd295dc2d98238c1d68ee42&chksm=8131d6efb6465ff9d162c0a8ff5aca0e6faa643e665e071c42484c4f1e61d951dd5851f346f1&scene=21#wechat_redirect)

[智能船舶综合能源系统及其分布式优化调度方法](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069520&idx=1&sn=8350658b7c26be6fdeab22034106ec66&chksm=8131d61db6465f0b6c2371721e55aec2e5e573eef4539d980fe768f3f0855242d0d4ff6e7d33&scene=21#wechat_redirect)

[孙长银, 吴国政, 王志衡等：自动化学科面临的挑战](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651070248&idx=1&sn=a02af679240552bf79b3dd01100be89b&chksm=8131d565b6465c73532b22b11e92c8dd87b72d269f79fe53a2e3050fa996cc8ab1fec676659c&scene=21#wechat_redirect)

[值得收藏！SCI论文中的常用句式全总结](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069425&idx=1&sn=c945766f5d7f2ada8a217b981dcc734c&chksm=8131d1bcb64658aa80092eb53e1ead905ab02fc7a9f035e798e57d6407472ef688e8f7f0e831&scene=21#wechat_redirect)

[收藏！SCI论文经典词和常用句型汇总](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651069036&idx=1&sn=961c952c84a07355dc70d4bb8291ce25&chksm=8131d021b6465937c80cf41a3118a5ad92a752cb3979f22d5964a741269a1df1987a37185a31&scene=21#wechat_redirect)

[吴国政等：浅析人工智能学科基金项目申请资助情况及展望](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651068994&idx=1&sn=bca1ddc9774ad59ff1459a32883be60f&chksm=8131d00fb646591928654c4880aa609305efa30b538c0c431d8c8138df4401fcc87e80a131e0&scene=21#wechat_redirect)

[段广仁院士：高阶系统方法—Ⅲ. 能观性与观测器设计](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956510&idx=1&sn=7aa3652a7908ccd9621b47023dc25103&chksm=f29424dfc5e3adc938a51b7b1620a6f47911c974153f94b2c38cfdc37536b750195fbc4be8a4&scene=21#wechat_redirect)

[段广仁院士：高阶系统方法— II. 能控性与全驱性](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956009&idx=1&sn=d887902e385f28ddea0fcb569208bb86&chksm=f2941ae8c5e393feccb4347c9a3afbe191007f67323747782405b9ca5c754ba6e16017557786&scene=21#wechat_redirect)

[段广仁院士：高阶系统方法— I. 全驱系统与参数化设计](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955943&idx=1&sn=7d2e161c5d48ea877709b94ef706a3af&chksm=f2941a26c5e3933077b5c9ef2cf38af1087f3f074454251d441433f1c53861ddd85386b7a260&scene=21#wechat_redirect)

[陈虹教授等：智能时代的汽车控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651065976&idx=1&sn=d6daa2fafd8e723a0238c5566cf1641c&chksm=8131c435b6464d23449b163afedd37f20a5d7598fe6684c6b011d19554e0ed38ef031fbf2ec9&scene=21#wechat_redirect)

[科研必备！盘点常用文献管理工具](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956322&idx=1&sn=aa1f98bb307dda70981e073546c973c4&chksm=f2941ba3c5e392b58981c27b2ea1334ef149e0b9eb126ac62453537db789a694cc35f72cac09&scene=21#wechat_redirect)

[吴子牛教授: 浅谈论文写作](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955566&idx=1&sn=3df5d36d46f533cae96361a987e914db&chksm=f29418afc5e391b97525c9f5193e21d92517dc58041e51509d0e5fb7f25938a7e601e414e46b&scene=21#wechat_redirect)

[刘洋教授: 浅谈研究生学位论文选题方法](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955575&idx=1&sn=b0cba28d16eb2af6672862064dca2ac8&chksm=f29418b6c5e391a0af6810385fdc25c36fade0562348469a5b28195b9c46309ee1c7b873c280&scene=21#wechat_redirect)

[张军平教授: 论文选题与写作](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955604&idx=1&sn=1b2dab0efab5528e57ce3b80a69f70e0&chksm=f2941955c5e390434fb1bc78bbd754f6209f2c75ba841c3023aadf8681c4f6b6784cf3f2af84&scene=21#wechat_redirect)

  

**期刊动态**

[《自动化学报》致谢审稿人](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957872&idx=1&sn=e642c48a6d17dc0f99d2f3879446ecab&chksm=f29421b1c5e3a8a7b4e5cf8564d2f0713d3bcec5186ef4684875caf67dd096659450c96f31ce&scene=21#wechat_redirect)

[自动化学报蝉联百种中国杰出期刊称号，入选中国精品科技期刊](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957485&idx=1&sn=8af865466cb6f52b05a1e41af8549e71&chksm=f294202cc5e3a93a40b4850e6e0f0bccaf56c89591e049e9d98bfe9a598913f5d25e8ecfcf8d&scene=21#wechat_redirect)

[《自动化学报》挺进世界期刊影响力指数Q1区](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957452&idx=1&sn=c5fa8ac9c581e4ae3de2e7956e603dca&chksm=f294200dc5e3a91bb250e25fd6f7e47dc1114ad6fdf1762a7bfc440f789a059f1de455584e66&scene=21#wechat_redirect)

[《自动化学报》多名作者入选科睿唯安2020年度高被引科学家](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649957295&idx=1&sn=597189346218d96d9906447a50281084&chksm=f29427eec5e3aef8d0662def8a0afcde2d2f3f828ae8208a52b14fc72169cedc5d81c06185a9&scene=21#wechat_redirect)

[自动化学报排名第一，被评定为中国中文权威期刊](https://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956509&idx=1&sn=1e39aaf65dc579606cf36258be8e1744&scene=21#wechat_redirect)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyk9VKeLAcasUAusOBeSbEmuCGOdlumaBYK7qW5OjIyqaTECFcP7ZwiaQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZycHq4PKlNk8GGRkBSc178Eiaf2g5rjo4iaQqTPZdicRwj0T2GmgdQIDZYA/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyag9RG8WmeJicDlk5gRFTLYvDhPZtibcicE4M6yicRPRY6K96e0lCmic6zCw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyag9RG8WmeJicDlk5gRFTLYvDhPZtibcicE4M6yicRPRY6K96e0lCmic6zCw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zy4ficIEmpfC1ZTE8fNjyIu3G4w4HSMCUX0tibVDHfYO8AtrqG145rhGfw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyag9RG8WmeJicDlk5gRFTLYvDhPZtibcicE4M6yicRPRY6K96e0lCmic6zCw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyag9RG8WmeJicDlk5gRFTLYvDhPZtibcicE4M6yicRPRY6K96e0lCmic6zCw/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyag9RG8WmeJicDlk5gRFTLYvDhPZtibcicE4M6yicRPRY6K96e0lCmic6zCw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyag9RG8WmeJicDlk5gRFTLYvDhPZtibcicE4M6yicRPRY6K96e0lCmic6zCw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZyRRHF2v2lgmQ9CZYhV8eic1icL7icWbQUJIS6O5HVm8TGfJadz3iausH8bQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyag9RG8WmeJicDlk5gRFTLYvDhPZtibcicE4M6yicRPRY6K96e0lCmic6zCw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyag9RG8WmeJicDlk5gRFTLYvDhPZtibcicE4M6yicRPRY6K96e0lCmic6zCw/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyag9RG8WmeJicDlk5gRFTLYvDhPZtibcicE4M6yicRPRY6K96e0lCmic6zCw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyag9RG8WmeJicDlk5gRFTLYvDhPZtibcicE4M6yicRPRY6K96e0lCmic6zCw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH47oeSdrUSRfWhg5wLjG31ZyjRic72PXve2ODoy533tzQcAga23YkNak1zKEKkOGL1ePe1NWvL5Lrdg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyag9RG8WmeJicDlk5gRFTLYvDhPZtibcicE4M6yicRPRY6K96e0lCmic6zCw/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH47oeSdrUSRfWhg5wLjG31Zyag9RG8WmeJicDlk5gRFTLYvDhPZtibcicE4M6yicRPRY6K96e0lCmic6zCw/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》订阅号**  

  

**联系我们**

**网站:** 

http://www.aas.net.cn

http://www.ieee-jas.org

**投稿:** 

https://mc03.manuscriptcentral.com/aas-cn   

https://mc03.manuscriptcentral.com/ieee-jas 

**电话:**  010-82544653（日常咨询和稿件处理） 

           010-82544677（录用后稿件处理）

**邮箱:**  aas@ia.ac.cn（日常咨询和稿件处理）  

           aas\_editor@ia.ac.cn（录用后稿件处理）

**博客:** 

http://blog.sina.com.cn/aaseditor 

  

**点击****阅读原文** **了解更多**