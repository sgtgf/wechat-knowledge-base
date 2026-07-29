# 高速EV-IPMSM电机设计耦合机械应力


> 原文地址: [https://mp.weixin.qq.com/s/UpS8s9CjAf6w7MJ7kZNLkw](https://mp.weixin.qq.com/s/UpS8s9CjAf6w7MJ7kZNLkw)

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_000_6e6d80aceda4.gif)**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

电动汽车电机的设计趋势是高速低转矩+减速箱，所以高速运行需要考虑到电机设计中来，需要同时保证电气性能和机械应力。  

**传统电机结构：**

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_001_5f16d80b9709.png)

8极48槽，基速4000rpm，最高速度17000rpm，最大输出功率150kW，详细数据见表1：  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_002_d69acf4d7898.png)

**机械应力仿真边界条件：**  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_003_66cd2591aba8.png)

最大网格边长0.00015mm，转子铁芯材料见表2：  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_004_89ab0b773b2d.png)

并做如下假设：

1.  固定速度
    
2.  不考虑温度影响  
    
3.  使用Von-Mises应力控制方程
    
4.  忽略电磁力影响
    
5.  忽略振动影响和轴端力
    

**转速和最大应力的关系：**  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_005_5cbca902102c.png)

**单层磁钢转子的受力分布：**

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_006_7fef259b5f09.png)

**几种减小转子机械应力的方法：**

1.  减小最大旋转速度
    
2.  减小转子直径  
    
3.  减小图4中的A区域
    
4.  缩短磁桥
    
5.  圆化磁桥
    
6.  插入磁钢分块
    

**改进电气性能的方法：**

1.  增加磁钢层数  
    

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_007_54c6280cb591.png)  

b. 尽量小的圆角半径和磁桥厚度

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_008_b262d6cd2ab7.png)

**试验设计：**  

采用部分因子设计法FFD(fractional factorial design)，选择了6个变量，如图7所示：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_009_097445df5820.png)

图8显示了3阶FFD结果，第一层增加，第二层增加和减小，第三层减小，有利于增加转矩和减小最大应力。  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_010_1791b24cd82f.png)

再利用面响应法RSM(Response Surface Method )和中心组合设计CCD(central composite design )优化电机设计\[_详见原文_\]，图9和图10是最大转矩和最大应力的响应面等高线：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_011_15a420fe6736.png)

**优化设计结果：**  

**传统模型和优化模型：**  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_012_4169f28012f3.png)

C型的磁极结构。

**应力分析结果：**  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_013_5b5204539a06.png)

20000rpm的最大应力448MPa，没有超过材料的屈服应力450MPa。

**电气性能-效率map：**

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_014_97bd4f95340e.png)

三分之一的区域效率大于97%，大部分区域效率大于93%。  

**性能表：**

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_015_e463ddda1779.png)

* * *

原文：《Multipolar High-Speed IPMSM Design for EV Traction Considering Mechanical Stress 》——Kyong-Soo Cha, Dong-Min Kim etc.

* * *

索取原文，请在留言区留下邮箱。

欢迎推荐优秀文献、国外电机最新咨询！

热文推荐：

[【电机内参】宝马工程师--分段斜极结构对同步电机振动噪音的影响研究](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484239&idx=1&sn=c4ffa79bffbc57fca9509b756f2ea1af&chksm=ea646055dd13e943f6e54b5b21da51bb3ee7cb9aabdf48c8ace0c3623ea665fc0d37c0a5cc55&scene=21#wechat_redirect)  

[【电机内参】一种高绕组系数&高槽满率的电机方案](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484134&idx=1&sn=51cd2bd08b953f7334eacd9fc5088095&chksm=ea6461fcdd13e8eaa5b4c809fcf727f979ef1cd647b29619e0becd0c829a1ce63e1bc1382706&scene=21#wechat_redirect)

[【电机内参】东芝(TOSHIBA)电动/混动汽车电机技术发展解密](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484076&idx=1&sn=8d1d033fd276b5e819fe99291e802745&chksm=ea6461b6dd13e8a09a3b7a93bfb2f1b42ef92b48c011fd4ab01fd357da4a849bd3a383a81df5&scene=21#wechat_redirect)  

[【电机内参】通用电动汽车和混合动力汽车的电机技术解密](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484056&idx=1&sn=118f1786cfe0d4f9ce8cf1228a6eabbd&chksm=ea646182dd13e89447167a680b8e00dd138f2497d8fc2466a442b5ef8861cc6f4ae0759bf5e2&scene=21#wechat_redirect)  

  [玩转"Hair-Pin winding"——揭开新能源汽车发卡电机的神秘面纱](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484022&idx=1&sn=00df943e7995299fe6aa3bee71327dba&chksm=ea64616cdd13e87ac3b356cd29b2ab4ec33577929e70d9ebc4662fafa92daed6fc8c904f5010&scene=21#wechat_redirect)

  

长按图片，识别二维码，关注我哟

> ![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\高速EV_IPMSM电机设计耦合机械应力_images\img_016_d7f135e99ea3.png)