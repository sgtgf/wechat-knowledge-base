# 控制器供电和正弦电流供电下的PMSM性能对比

原创 Mr 晋 玩转电机设计 2019-05-13 22:58 undefined

> 原文地址: [https://mp.weixin.qq.com/s/fsbvlAQUV54J2ckg-f4wng](https://mp.weixin.qq.com/s/fsbvlAQUV54J2ckg-f4wng)

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_000_0458cc1e8746.gif)**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

本文用联合仿真实现控制器供电，对比正弦供电下的仿真性能（电流、转矩波动、磁密、铜损、铁损、磁钢涡流损耗），最后用热仿真和测试验证方法的准确性。

**模型：**

**电机**，额定功率400W，额定转速3000rpm，表贴式转子，闭口槽。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_001_64a29f9548d8.png)

速度和电流双闭环矢量控制模型  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_002_1f10280e2c32.png)

联合仿真模型  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_003_ce30bf10d7a2.png)

* * *

**仿****真结****果**

**电流**有明显的纹波，谐波含量6.69%。  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_004_21c23cfad623.png)

**转矩波动**  

控制器供电的电磁转矩由于电流谐波的影响，转矩波动达到了15.17%，明显大于正弦供电的仿真结果。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_005_98f316492cef.png)

**磁密**

控制器供电的磁密3.04T略小于正弦供电的3.08T（最高磁密达到这么大，作者的硅钢片材料可能有一定的问题）。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_006_8123dc319f49.png)

* * *

**损耗**  

铜损计算公式：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_007_45996863179a.png)

其中Rk是谐波等效电阻，k是谐波阶次。

**铁损**

控制器供电的铁心损耗大于正弦电流供电。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_008_8ea14ae3f9d4.png)

**磁钢涡流损耗**

控制器供电的磁钢涡流损耗是理想电流的2.5倍。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_009_55875ae48625.png)

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_010_1b60c5af4127.png)

* * *

**原型机验证**

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_011_9d6e44bd95f9.png)

**温度**测试结果

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_012_a1072eebc299.png)

通过温升仿真和原型机温升测试，验证了联合仿真计算的损耗更准确。

  

* * *

原文：《Characteristic Analysis and Temperature Rise Calculation of PMSM under Different Power Supply Modes》——Guangkun Lian, Huitao Li, Biao Chen, Fei Ban, and Jiahe Zhang

* * *

可到QQ群:364941038下载原文

欢迎推荐优秀文献、国外电机最新咨询！

  

长按图片，识别二维码，关注我哟

> ![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\控制器供电和正弦电流供电下的PMSM性能对比_images\img_013_d9a47a7240bf.png)