# 【电机内参】永磁体新工艺对电机设计的挑战——晶界扩散技术(Grain-Boundary-Diffused Magnets)


> 原文地址: [https://mp.weixin.qq.com/s/JbscTjTz26tU4kz7s\_vLsw](https://mp.weixin.qq.com/s/JbscTjTz26tU4kz7s_vLsw)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机内参_永磁体新工艺对电机设计的挑战__晶界扩散技术(Grain_Boundary_Diffused_Magnets)_images\img_000_6e6d80aceda4.gif)**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

原文：《 Grain-Boundary-Diffused Magnets:The challenges in obtaining reliable and representative BH curves for electromagnetic motor design.》——Margarita P. Thompson etc.

* * *

**1.晶界扩散技术**  

传统烧结磁体的工艺：按一定的配比熔炼和铸造生产出小片的NdFeB，然后利用氢爆和精磨制成2-10μm的粉末微粒，再压成磁场定向的小块，然后烧结退火，再把烧结块按需要的尺寸切割成磁体，表面研磨、倒角，表面镀防腐层。传统工艺中，镝(Dy)和铽(Tb)在熔炼工序加入，重稀土元素在最终的磁体中会均匀分布，所有永磁体截面的矫顽力相同。

晶界扩散技术(GBD)：在切割和研磨阶段，在磁体表面上敷上富含镝或铽的化合物，然后通过一个24~36小时的热处理工艺将重稀土元素扩散进永磁体。_(具体的晶界扩散工艺技术种类还很多，每个永磁体厂家都有所不同)_

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机内参_永磁体新工艺对电机设计的挑战__晶界扩散技术(Grain_Boundary_Diffused_Magnets)_images\img_001_2d161d3b8187.png)

晶界扩散技术的磁体含有更少的重稀土元素(HRE)，因为在基合金中的重稀土含量可以显著减少，在某些情况下可以消除，通常在0–4%的重量百分比范围内（wt%），同时扩散通常是在低于1%的Tb或Dy的质量分数范围内进行的。

晶界扩散技术可以使用1/3~1/2的传统工艺使用的镝或铽的用量达到和传统工艺磁体一样高的剩磁(Br)和矫顽力(Hcj)。

* * *

**2.EV/HEV电机转子特点**

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机内参_永磁体新工艺对电机设计的挑战__晶界扩散技术(Grain_Boundary_Diffused_Magnets)_images\img_002_b237fbb45aee.png)

上图是一张有限元法(FEA)计算的高退磁磁场下的转子永磁体的磁密场图。可以看出在角落和边缘位置有较高的退磁磁场，因此在这些位置需要更多的抗退磁保护。

GBD工艺正好可以提供这种保护，因为在角落和边缘位置HRE增加，并且这种保护的成本相比于传统工艺更低。

* * *

**3.扩散永磁磁体中稀土元素的分布**

电子探针显微镜下的铽扩散磁体截面map：  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机内参_永磁体新工艺对电机设计的挑战__晶界扩散技术(Grain_Boundary_Diffused_Magnets)_images\img_003_d065176e5613.png)

图3(a)显示4个面有明显的Tb层，和角落部分增加的Tb扩散特征；图3(b)显示另外两个面没有Tb扩散发生，说明这些的渗透是从四个面进行的。图3(c)显示同一个面内的Tb分布非常不均匀。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机内参_永磁体新工艺对电机设计的挑战__晶界扩散技术(Grain_Boundary_Diffused_Magnets)_images\img_004_70f2a87f164c.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机内参_永磁体新工艺对电机设计的挑战__晶界扩散技术(Grain_Boundary_Diffused_Magnets)_images\img_005_b7cb6c0576d3.png)

整体上分布规律：角落＞边缘＞中心，晶界＞区域＞晶粒。

* * *

**4.扩散永磁体的BH曲线**

振动试样磁力计测试磁特性：  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机内参_永磁体新工艺对电机设计的挑战__晶界扩散技术(Grain_Boundary_Diffused_Magnets)_images\img_006_a28441513dc2.png)

从上图可以看出，角落部位的退磁曲线面积大于中心位置，BH曲线看不出明显差异。所有曲线都不重叠，测量结果不稳定，造成这些现象的原因有：2mm的样板区域可能太大、每一个样本区域的晶界数量不一样、扩散参数影响、扩散工艺、样本制造、初始磁体的圆角和圆边、样本块的面不够平行、样本块的面和测量仪器(VSM)不够平行。获取精确的BH曲线很困难。原文还介绍了一种利用磁滞回线测量仪测量磁特性的方法，结果也不理想。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机内参_永磁体新工艺对电机设计的挑战__晶界扩散技术(Grain_Boundary_Diffused_Magnets)_images\img_007_aa552a5010ea.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机内参_永磁体新工艺对电机设计的挑战__晶界扩散技术(Grain_Boundary_Diffused_Magnets)_images\img_008_b5d944b92b20.png)

* * *

**5.永磁材料的发展**

烧结钕铁硼的发展方向：减小晶粒尺寸获得更高的矫顽力；优化的热成型技术可以减小高温时的磁性能损失。

少稀土材料：铈(Ce)基永磁体，铈的价格比钕低很多。Ce2Fe14B可以用于低要求的场合，CeFe10Si2的居里温度可以到310℃，比钕铁硼的稀土含量少1/3。

无稀土材料：锰铝碳manganese–aluminum–carbon (MnAlC) ，锰铋manganese–bismuth (MnBi) ，铁氮Iron nitride(Fe16N2)。

电机设计的挑战：优化电机设计、设计新颖的磁路结构、充分利用钕铁硼的性能、利用最小的永磁体尺寸达到目标性能。

* * *

译者总结：

降低永磁体重稀土含量、降低成本、避免价格波动、保证供应链稳定是近年来永磁电机行业的热门话题，特别是汽车行业。晶界扩散技术（GBD）在一定程度上能降低重稀土的用量，并适用于车用永磁电机的特点（高退磁风险的磁钢局部，可以通过渗透技术增加局部重稀土浓度以增加矫顽力，降低退磁风险），同时GBD技术也对电机设计带来很多挑战，最重要的一条就是怎样获得准确的磁钢BH曲线（同一片磁钢不同区域的BH曲线不同）。

* * *

  

索取原文，请在留言区留下邮箱。

  

欢迎推荐优秀文献、国外电机最新咨询！

  

推荐链接：

[【电机内参】东芝(TOSHIBA)电动/混动汽车电机技术发展解密](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484076&idx=1&sn=8d1d033fd276b5e819fe99291e802745&chksm=ea6461b6dd13e8a09a3b7a93bfb2f1b42ef92b48c011fd4ab01fd357da4a849bd3a383a81df5&scene=21#wechat_redirect)  

[【电机内参】通用电动汽车和混合动力汽车的电机技术解密](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484056&idx=1&sn=118f1786cfe0d4f9ce8cf1228a6eabbd&chksm=ea646182dd13e89447167a680b8e00dd138f2497d8fc2466a442b5ef8861cc6f4ae0759bf5e2&scene=21#wechat_redirect)  

  [玩转"Hair-Pin winding"——揭开新能源汽车发卡电机的神秘面纱](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484022&idx=1&sn=00df943e7995299fe6aa3bee71327dba&chksm=ea64616cdd13e87ac3b356cd29b2ab4ec33577929e70d9ebc4662fafa92daed6fc8c904f5010&scene=21#wechat_redirect)

  

长按图片，识别二维码，关注我哟

> ![](D:\电脑文件\公众号知识库\电机_设计_仿真\_电机内参_永磁体新工艺对电机设计的挑战__晶界扩散技术(Grain_Boundary_Diffused_Magnets)_images\img_009_d7f135e99ea3.png)