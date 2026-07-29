# DC-DC电感值计算

原创 硬件笔记本 2023-12-29 07:46 四川

> 原文地址: [https://mp.weixin.qq.com/s/n\_iLAnV5n5Hn-9BWfQpv8w](https://mp.weixin.qq.com/s/n_iLAnV5n5Hn-9BWfQpv8w)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

  

引言：DC-DC的电感值通常我们很少计算，会直接选择手册里面推荐的值，这在通常场景下快速展开设计和选型没有问题，但是当有特别的电源需求时，就需要自己手动计算电感并选型，才能满足我们的设计指标，本节以降压DC-DC为例讲解如何计算并选择电感。

**PART**

**0****1**

  

**降压DC-DC的运转环路**

  

![](DC_DC电感值计算_images/img_002_75b58def6d4c.png)

图15-1：Q1导通时的电流环路

  

如图15-1是在降压型DC-DC中，当开关器件Q1导通时，电流从Vin通过电感L给输出平滑电容Cout充电，并提供输出电流Iout。此时电感L上流过的电流会产生磁场，以此将电能变换成磁能并储存起来。

  

![](DC_DC电感值计算_images/img_003_9f26bd414c44.png)

图15-2：Q2关断时的电流环路

  

如图15-2，当开关器件Q1关断时，续流二极管Q2导通，电感L里储存的能量向输出侧释放。在Q1导通阶段Cout已经储满电量，Q刚进入关断时，电感L反向电动势维持输出电流Iout，而后电感能量减弱，Cout就会开始参与放电维持Iout，注意看电容蓝色电流虚线。

  

**PART**

**0****2**

  

**电感的电流波形**

  

![](DC_DC电感值计算_images/img_004_f60ed9fcd0e8.png)

![](DC_DC电感值计算_images/img_005_ef699b9682c6.png)

  

![](DC_DC电感值计算_images/img_006_b67fed633a85.png)

图15-3：流经电感L的电流波形

  

如图15-3是流经电感L的电流波形，Iout是电感电流的平均值。图15-1里开关器件Q1导通时电感L流过的电流，Q1导通ON的时间Ton，电感L上施加的电压VL(ON)用下式来表示：

  

![](DC_DC电感值计算_images/img_007_aa248512f7ad.png)

  

其中VIN：输入电压；VSW：Q1导通时的压降；VOUT：输出电压

  

本身具有电感成分的电感L的电压VL和电流IL的关系用下式表示：

  

![](DC_DC电感值计算_images/img_008_2c432a5fabf4.png)

  

由公式(2)可以判断出给电感施加一定的电压，电压和反向电流会按照V/L的斜率增加，ILT是开关器件Q1在导通之前瞬间的电流，ILP是开关器件Q1在关断之前瞬间的电流。Ton时间段中电感流过的电流变化量可以根据公式(1)和公式(2)表示为下面公式。

  

![](DC_DC电感值计算_images/img_009_58cdffea3cc4.png)

  

接着我们来求开关器件Q1在OFF时电感L流过的电流，Q1在OFF时，电感L上应加的电压VL(OFF)根据图15-2可以表示为下面公式：

  

![](DC_DC电感值计算_images/img_010_59b694d7525f.png)

  

其中VD：Q2的正向压降；VOUT：输出电压

  

通过公式(2)和公式(4)，可以计算OFF时器件电感L的电流变化量

  

![](DC_DC电感值计算_images/img_011_f853701d1795.png)

  

因为电感L流过电流的电荷量与输出电流的电荷量基本相等（伏秒定律），所以下面公式成立：

  

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC电感值计算_images\img_002_65f5eadf9946.png)

  

用公式(3)和公式(6)可以求出ON时器件的ILP：

  

![](DC_DC电感值计算_images/img_013_755c920720db.png)

  

用公式(5)和公式(6)可以求出OFF时器件的ILP，下面公式成立：

  

![](DC_DC电感值计算_images/img_014_4e3a4a83695a.png)

  

**PART**

**0****3**

  

**On duty的计算**

  

On Duty是相对于开关振荡周期Tsw，开关器件的导通时间的比率。用下面公式表示：

  

![](DC_DC电感值计算_images/img_015_ff8854ba0988.png)

  

从公式(7)、(8)、(9)可以求出D，如下面公式：

  

![](DC_DC电感值计算_images/img_016_efb3f589c0ca.png)

  

对于公式(10)，如果忽略开关器件Q1的压降VSW和二极管Q2的压降，可以得到On Duty由输入电压和输出电压的比来决定：

  

![](DC_DC电感值计算_images/img_017_a860e65a4594.png)

  

**PART**

**0****4**

  

**线圈电流的最大值**

  

由公式(9)和公式(10)可以算出Ton如下式：

  

![](DC_DC电感值计算_images/img_018_259b4f45eb80.png)

  

把公式(12)代入到公式(7)，可以得到电感L的电流最大值ILP如下式：

  

![](DC_DC电感值计算_images/img_019_10ca4fa84791.png)

  

把公式(13)代入到公式(6)，可以得到电感L的电流最小值ILT如下式：

  

![](DC_DC电感值计算_images/img_020_b7ade0ad0149.png)

  

电流的变化量 (ILP－ILT) 如下式：

  

![](DC_DC电感值计算_images/img_021_caf2520acc5b.png)

  

由公式(13)和公式(15)可以推出最大电流和电流变化量随着电感L的增大、开关频率提高，电流值会减小。

  

**PART**

**0****5**

  

**电感值的计算**

  

流过电感L电流的变化量 (ILP－ILT) 和输出电流Iout的比是电流纹波比R

  

![](DC_DC电感值计算_images/img_022_c141e22c64da.png)

  

把公式(15)代入到公式(16)

  

![](DC_DC电感值计算_images/img_023_36583342b98f.png)

  

由公式(17)求出的电感L值的公式如下：

  

![](DC_DC电感值计算_images/img_024_b591a2ce291e.png)

  

当输出电压VOUT很高的时候，公式可以简化如下：

  

![](DC_DC电感值计算_images/img_025_9e90db2ce1d5.png)

  

要缩小R的话，增大电感，抑制ΔIL就可以了，但是电感器变大，变得不实用，所以降压型转换器通常设定在0.2～0.5的范围内。

  

**PART**

**0****6**

  

**线圈能流过的最大电流**

  

电感能流过的最大电流可以用下式求得：

  

![](DC_DC电感值计算_images/img_026_e9c45bc69214.png)

  

电感流过的电流是输出电流+纹波电流。输出短路等故障发生时，负载过渡状态中，没有软启动功能的IC在电源上升时，有时电感电流会超过上述计算的最大电流。在过渡状态下，电感电流可能会增加到IC的开关电流限制值。因此，最安全的方法不是按照大于电感电流最大值选择电感，而是选择额定饱和电流大于开关电流限制值的电感。

  

**PART**

**0****7**

  

**线圈流过的有效电流**

  

三角波的有效值如下式表示：

  

![](DC_DC电感值计算_images/img_027_237434c377d4.png)

  

把公式(13)和公式(14)代入公式(20)可以得到下列公式：

  

![](DC_DC电感值计算_images/img_028_dd3e41045085.png)

  

**PART**

**0****8**

  

**电感计算实例**

  

首先列出降压型转换器的动作条件

  

\- 输入电压：VIN=12V

\- 输出电压：VOUT=3.3V

\- 输出电流：Iout=2A

\- 输出电流纹波比：R=0.3

\- 开关器件 Q1 导通时的压降：VSW=0.30

\- 续流二极管Q2的正向压降：VD=0.26，同步整流的时候，按照下管开关器件Q2在导通时的压降进行计算。

\- 开关频率：fsw=380kHz

  

代入公式(18-1)和公式(18-2)，求电感的感量，由公式(18-1)得：

  

![](DC_DC电感值计算_images/img_029_27197ae89e0a.png)

  

由公式(18-2)得：

  

![](DC_DC电感值计算_images/img_030_97d8c1f7e02e.png)

  

由公式(19)计算电感的最大电流：

  

![](DC_DC电感值计算_images/img_031_a766352eaf55.png)

  

由公式(20)计算电感的额定有效电流：

  

![](DC_DC电感值计算_images/img_032_caf9b68197ee.png)

  

在设计的时候，选择满足计算值的电感，选择最接近的标准值10µH。选择的电感值和计算值有差异的时候，用公式(17)计算电流纹波值R，把这个值代入公式（19），再次计算线圈的最大电流：

  

![](DC_DC电感值计算_images/img_033_4831428bae4b.png)

  

![](DC_DC电感值计算_images/img_034_e7d7ad97384b.png)

  

硬件工程师及从业者都在关注我们

![](DC_DC电感值计算_images/img_035_2e84b7ba26c6.gif) ![](DC_DC电感值计算_images/img_036_51d069a6484e.gif) ![](DC_DC电感值计算_images/img_037_5fb296583be4.gif) ![](DC_DC电感值计算_images/img_038_1f30148044c0.gif) ![](DC_DC电感值计算_images/img_039_c5bc86d0867d.gif) ![](DC_DC电感值计算_images/img_040_b38438d4de46.gif) ![](DC_DC电感值计算_images/img_041_1d54e9fe0aef.gif) ![](DC_DC电感值计算_images/img_042_9bb0105b1e46.gif)

![](DC_DC电感值计算_images/img_043_de88c48250d0.gif) ![](DC_DC电感值计算_images/img_044_3b83df2d253b.gif) ![](DC_DC电感值计算_images/img_045_db521919e8d9.gif) ![](DC_DC电感值计算_images/img_046_aea384ea417e.gif) ![](DC_DC电感值计算_images/img_047_f4924e7a240a.gif) ![](DC_DC电感值计算_images/img_048_a58db91dbb3b.gif) ![](DC_DC电感值计算_images/img_049_f0edc68b0c53.gif) ![](DC_DC电感值计算_images/img_050_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源电子工程师笔记。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。