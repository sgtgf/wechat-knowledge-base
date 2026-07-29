# 详解BUCK电路

原创 硬件笔记本 2023-05-23 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/6s-m8PtBNcLZr\_ZTymqGpA](https://mp.weixin.qq.com/s/6s-m8PtBNcLZr_ZTymqGpA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

文章来源：硬件十万个为什么

**一、Buck电路原理图**

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_002_9fcd9e10eb5f.png)

Buck电路，又称降压电路，其基本特征是DC-DC转换电路，输出电压低于输入电压。输入电流为脉动的，输出电流为连续的。

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_003_b44880a2fec5.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_004_8ed8be9d97f4.png)

  

**二、Buck电路工作原理**

1、基本工作原理分析

当开关管Q1驱动为高电平时，开关管导通，储能电感L1被充磁，流经电感的电流线性增加，同时给电容C1充电，给负载R1提供能量。等效电路如图二

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_005_20688e0978cd.png)

当开关管Q1驱动为低电平时，开关管关断，储能电感L1通过续流二极管放电，电感电流线性减少，输出电压靠输出滤波电容C1放电以及减小的电感电流维持，等效电路如图三

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_006_1e647de5e185.png)

  

**三、Buck电路的三种工作模式：CCM，BCM，DCM**

1、CCM (ContinuousConduction Mode),连续导通模式：在一个开关周期内，电感电流从不会到0。或者说电感从不“复位”，意味着在开关周期内电感磁通从不回到0，功率管闭合时，线圈中还有电流流过。

2、DCM，(Discontinuous Conduction Mode)非连续导通模式：在开关周期内，电感电流总会会到0，意味着电感被适当地“复位”，即功率开关闭合时，电感电流为零。

3、BCM（Boundary Conduction Mode），边界或边界线导通模式：控制器监控电感电流，一旦检测到电流等于0，功率开关立即闭合。控制器总是等电感电流“复位”来激活开关。如果电感值电流高，而截至斜坡相当平，则开关周期延长，因此，BCM变化器是可变频率系统。BCM变换器可以称为临界导通模式或CRM（Critical Conduction Mode）。

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_007_ad1411f209e3.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_008_170ff2fc9856.png)

BCM

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_009_d3f106672537.png)  

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_010_0590c2cdea54.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_011_17a80724e2ac.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_012_b8876d885d8b.png)

  

1、CCM Mode：关键点波形

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_013_f1d3c506da12.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_014_3f975f9f89d5.png)

负载电流IO与电感电流的关系，在一个周期内进行分析，负载电流即为在一个周期内电流的平均值。电流的平均值在数学上的表达式为：

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_015_df5d68f61a71.png)

即在一个周期内电流函数曲线与时间轴所围成的面积除以周期，为电流的平均值。参照图四电感电流波形，一个周期内面积为

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_016_8072d5ee0baf.png)

BCM  Mode：关键点波形

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_017_98217348af93.png)

可以得知电感最小电流逐渐减小到零时，工作模式也逐渐从CCM进入BCM。根据伏秒积平衡 ：

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_018_e3ea48530f8d.png)

DCM  Mode：关键点波形

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_019_e5e498554de8.png)

电路系统工作在DCM模式下，需要满足两个条件，一、电感充磁开始以及消磁结束时流经电感的电流为零；二、电感消磁时间小于开关管关断时间。根据伏秒积平衡有：

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_020_ac0ffc481d0a.png)

同样，在一个周期对电感电流进行分析：

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_021_b632b4aed54a.png)

**四、外围器件参数对系统工作模式的影响**

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_022_b003739e7bbc.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_023_5810340d3667.png)

  

**五、BUCK电路仿真验证**

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_024_fa41c1a48282.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_025_5d5723be4694.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_026_959ba8eb4f1c.png)

2、CCM模式仿真验证：在上述BCM分析的基础上，得出储能电感的电感量80uH为临界点，由系统工作在CCM的条件，可以将储能电感电感量设置为120uH,理论计算：

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_027_dc576f0a1532.png)

参照图九，可以得出仿真结果，

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_028_aca8e05c9b5d.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_029_9c18d793b057.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_030_b5bde4830fb3.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\详解BUCK电路_images\img_031_97c7887a9f20.png)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。