# 比亚迪汽车工业：SiC特性分析仿真及其在移动储能电站的应用


> 原文地址: [https://mp.weixin.qq.com/s/mDj3gRiWNL-drgBgqzYvZg](https://mp.weixin.qq.com/s/mDj3gRiWNL-drgBgqzYvZg)

**文章来源：**储能科学与技术

**作者：**比亚迪汽车工业有限公司（罗红斌，邓林旺，薛程升，李多辉，冯天宇，王超，邹德天）

**摘要**

以氮化镓（GaN）和碳化硅（SiC）为代表的第三代半导体材料由于其禁带宽度大、击穿场强高、热导率高、电子饱和漂移速度高等特性，在光电子领域及高频大功率应用上倍受青睐。本文对比了SiC和Si的物理结构和电气特性，并选取了两款MOSFETs，在实验室中用Saber仿真了它们在电路中的损耗，结果显示SiC MOSFETs平均损耗比Si MOSFETs低30%～48%。最后，讨论了SiC器件在光电子、太阳能逆变器和移动储能电站中的应用，并且在实验室中测试、分析了两台来自不同厂家的样机，实验结果显示，SiC系统比Si系统运行温度降低50%～60%，损耗降低11%，整机效率提高2.68%，功率密度由约0.46 kW/L提高到0.90 kW/L。说明SiC能够大幅提升系统的效率和功率密度，因其巨大的潜力，未来有望将工作频率提升至500 kHz以上，将系统功率密度提升至现有产品的5～10倍。

**关键词：**SiC，第三代半导体材料，移动储能电站，功率密度，效率，仿真

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluo1FRk5hTpTBoybGf2F9mexTeD9HGUIL5XBATGIZOU0u9UIcpGibxyVcY2Vz9ZeRSUY3WgURsNibw/640?wx_fmt=png&from=appmsg)  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluo1FRk5hTpTBoybGf2F9mMQJuib738CZDljd9GMyNR444BuVuFyDUMlSUVmCquXhOc11OyB5ds4Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluo1FRk5hTpTBoybGf2F9m0ywicJdc4xicP3WlRENK0eA44YW7cZty63iae2AOT9JgW77DvAXbcj4dQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluo1FRk5hTpTBoybGf2F9mf0kKxLPPfj0j4ibzTNic2BxxgrR2GN5MJs6oticOGXcHHjAq5g8yZsiceQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluo1FRk5hTpTBoybGf2F9mzk8o7QBfppKqWPIaL14h7HyjNwAHr4QeqcWmMDrLRc3d1y5q6icXzsw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluo1FRk5hTpTBoybGf2F9m97CMY7Yccz7Y5icVJDOSWibXcFNN9XNfOEvxdcUkgVscXWN8s4RzR3qA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluo1FRk5hTpTBoybGf2F9mv5SWWgzYic61a6erJkOWHJksMNghwne45jkXVlqj7SJxOib82vTXJBrA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsluo1FRk5hTpTBoybGf2F9mtwOY2hNBicIFcMq5zTJD2mKbNicl1IT1W1aYqj6PNPwZricx9GfDlicA1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIDa65NThz7icmXgD9ukickv5ysLdiaW96X2Gc8cElM2j0tVFNnhbkSPYIhDVYbzRz3k0cLT3PdHFWg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

声明：此文来源网络，是出于传递更多信息之目的。若有来源标注错误或侵犯了您的合法权益，请与我们联系，我们将及时更正、删除，谢谢。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslIDa65NThz7icmXgD9ukickv9ibtj9UXrU3X3QeRWc2zECfiaJzSLa0Jdovw5FbjI5QJ8icQcBDPYjFHQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)