# 如何测试DC-DC的SW信号？

原创 硬件笔记本 2023-12-11 07:41 四川

> 原文地址: [https://mp.weixin.qq.com/s/5qAMAQAcldLLnLQbVB1MzA](https://mp.weixin.qq.com/s/5qAMAQAcldLLnLQbVB1MzA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

对于绝大部分buck芯片而言其上下两管都集成到芯片内部，那么该如何观测两管的工作状况呢？实际应用中我们通过观测上下两管交替点的电压来判断上下MOS管的开通与关断情况，并将这一点称为SW，如下图所示,  

![](如何测试DC_DC的SW信号__images/img_002_00c494f2a15a.png)

**怎么测SW ：  
**  
以MP2332为例，作为一款完全集成的高频、同步、整流、降压开关变换器，MP2332采用恒定导通时间 （COT） 控制实现了快速瞬态响应、简单的环路设计和快速输出调节。在宽输入4.2V到1.8V范围内可以满足 2A 的输出电流，除此外MP2332还有出色的负载和线性调节性能及优秀的待机功耗，其静态电流 Iq 只有200μA。  
  
**应用实例：  
**

![](如何测试DC_DC的SW信号__images/img_003_e48ef60451ce.png)

在EV2332板上，只需要将示波器探头钩住该SW测试点，探头接地端接GND测试点，当正常上电后，即可在示波器上读出SW电压波形。线路连接图如下：  

![](如何测试DC_DC的SW信号__images/img_004_9d1175dd5098.png)

**SW 图像读取信息：  
**  
通过SW波形可以判断出芯片工作状态：轻载降频PFM和CCM状态。  
  
MP2232空载启动时SW波形：为了在短时间内建立输出电压，开关比较密集，当输出电压建立后开关波形稀疏间隔约2ms才会有开关动作。轻载条件下，MOS管导通交叠区产生的开关损耗占据主导地位，为了提高效率，芯片将进入轻载降频模式PFM。当电感电流降为零时，low-side driver进入(Hi-Z)态。输出电容通过电阻R1和R2缓慢放电到GND。当VFB下降到VREF以下时，高边MOS打开此时才会在示波器上看到SW波形。输出电压会通过电感与MOS寄生电容进行LC谐振放电。  

![](如何测试DC_DC的SW信号__images/img_005_355d09266d60.png)

将上述PFM的SW波形展开即为下图，这里可以结合CH4电感电流进行分析。第一阶段：上管导通，Vin给电感和负载供电，电感电流以固定斜率上升（U\_L=L di/dt ）。第二阶段：上管关断，下管续流，此时电感电流以固定斜率下降。第三阶段：电感储能释放完毕，续流回路断开，但此时上管还未打开，电感及回路中寄生电容会形成LC阻尼震荡，以Vout为中心进行谐振。  

![](如何测试DC_DC的SW信号__images/img_006_720f986102e6.png)

MP2232 当电感电流不再为零，芯片将进入连续导通模式（CCM）。即上下管交替开通关断，当高侧MOSFET （HS-FET）处于关断状态时，低侧MOSFET（LS-FET）导通，两管交替导通，此时SW波形为固定频率下的PWM波形。  

![](如何测试DC_DC的SW信号__images/img_007_2cd1f5d60220.png)

将CCM 的SW波形展开即为下图：  

![](如何测试DC_DC的SW信号__images/img_008_fda30d069806.png)

在此情况下SW我们可以读出上下管分别导通的时间，如图中高电平为上管开通时间，其电压值等于Vin，低电平为下管的开通时间其电压值等于0。对于一个周期而言，上管开通时间ton与整个周期T的比值为占空比D。在CCM模式下，设输入电压为E，输出电压为U（平均值）。在整个周期内![](如何测试DC_DC的SW信号__images/img_009_173f5d0d2045.png)化简后可以得到 D=U/E。  
  
由此可知，在实际操作中，我们可以通过观测PFM和CCM 等不同状态下的SW波形，分析判断buck电路工作是否正常。

硬件工程师及从业者都在关注我们

![](如何测试DC_DC的SW信号__images/img_010_2e84b7ba26c6.gif) ![](如何测试DC_DC的SW信号__images/img_011_51d069a6484e.gif) ![](如何测试DC_DC的SW信号__images/img_012_5fb296583be4.gif) ![](如何测试DC_DC的SW信号__images/img_013_1f30148044c0.gif) ![](如何测试DC_DC的SW信号__images/img_014_c5bc86d0867d.gif) ![](如何测试DC_DC的SW信号__images/img_015_b38438d4de46.gif) ![](如何测试DC_DC的SW信号__images/img_016_1d54e9fe0aef.gif) ![](如何测试DC_DC的SW信号__images/img_017_9bb0105b1e46.gif)

![](如何测试DC_DC的SW信号__images/img_018_de88c48250d0.gif) ![](如何测试DC_DC的SW信号__images/img_019_3b83df2d253b.gif) ![](如何测试DC_DC的SW信号__images/img_020_db521919e8d9.gif) ![](如何测试DC_DC的SW信号__images/img_021_aea384ea417e.gif) ![](如何测试DC_DC的SW信号__images/img_022_f4924e7a240a.gif) ![](如何测试DC_DC的SW信号__images/img_023_a58db91dbb3b.gif) ![](如何测试DC_DC的SW信号__images/img_024_f0edc68b0c53.gif) ![](如何测试DC_DC的SW信号__images/img_025_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源MPS官网。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。