# DC-DC电源布局布线技巧

原创 硬件笔记本 2023-09-21 11:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/W5gGB6hIzKhzumH15efyDA](https://mp.weixin.qq.com/s/W5gGB6hIzKhzumH15efyDA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

在开关电源的设计中，PCB布局设计与电路设计同样重要。合理的布局可以避免电源电路引起的各种问题。不合理的布局可能导致输出和开关信号叠加引起噪声增加、调节性能恶化、稳定性欠佳等。采用恰当的布局可以避免这些问题的发生。

  

**1.DC-DC的环流**

![](DC_DC电源布局布线技巧_images/img_002_4de0b5c32898.png)

图24-1：开关元件Q1导通时的电流路径

如图24-1的红色线表示开关元件Q1导通时流过的主要电流和路径以及方向。Cbypass是高频用去耦电容器，CIN是大容量电容器。开关元件Q1导通的瞬间，流过急剧的电流，其大部分由Cbypass提供，其次由CIN提供，缓慢变化的电流则由输入电源提供。

  

  

![](DC_DC电源布局布线技巧_images/img_003_318ba8516420.png)

图24-2：开关元件Q1关断时的电流路径

图24-2的红色线表示开关元件Q1关断时的电流路径。续流二极管D1导通，电感器L中蓄积的能量会释放到输出侧。因为降压转换器的输出拓扑结构中串联了电感，所以输出电容器的电流虽然上下波动，但比较平滑。  

  

![](DC_DC电源布局布线技巧_images/img_004_3f234e5f0684.png)

图24-3：电流差分、布局方面的重要路径

图24-3的红色线表示图24-1和图24-2的差分。开关元件Q1从关断到开通，从开通到关断切换时，红色线部分的电流都会急剧变化。由于这个变化很快，所以会出现含有较多高次谐波的波形。该差分系统在PCB布局时是重要之处，需要给予最大限度的重视。

  

**2.PCB布局要点**

PCB布局要点大致如下：

1：将输入电容器，续流二极管和IC芯片放置在PCB的同一个面上，并尽可能靠近IC芯片放置。

2：为改善散热条件可以考虑加入散热过孔阵列。

3：电感可使来自开关节点的辐射噪声最小化，重要程度仅次于输入电容，需要放置在IC的附近处，电感布线的铜箔面积不要过大。

4：输出电容器尽量靠近电感器放置。

5：反馈路径的布线尽量远离电感器、续流二极管等噪音源。

  

  

**3.输入电容器的布局**

设计布局时，首先应放置最重要的部件：输入电容器和续流二极管。在设计电流较小的电源（Iout≤1A）时，需要的输入电容也比较小，有时一个陶瓷电容器可以同时作为CIN和Cbypass来使用。这是因为陶瓷电容器的电容值越小，频率特性越好。但是，由于不同陶瓷电容器的频率特性不同，使用前确认好实际使用产品的频率特性。

![](DC_DC电源布局布线技巧_images/img_005_8102a912c582.png)

图24-4：陶瓷电容的频率特性

CIN:1µF 50V X5R 10µF 50V X5R

CBY:0.1µF 50V X7R 0.47µF 50V X7R

如图24-4所示，当使用大容量电容器作为CIN时，一般而言其频率特性并不好，所以通常需要与CIN并联配置一颗频率特性优异的高频去耦电容器Cbypass，Cbypass通常使用表面贴装型的叠层陶瓷电容器（MLCC），一般选择X5R或X7R型，容值为0.1μF～0.47μF的电容。

  

![](DC_DC电源布局布线技巧_images/img_006_ff120917d7fc.png)

图24-5：理想的输入电容器的布局

如果Cbypass、IC的VIN引脚与GND引脚的距离较远，受布线寄生感抗的影响会产生电压噪声/振铃，所以尽量缩短二者之间的布线距离。降压转换器的应用中，即使将Cbypass放置在离IC最近的位置，CIN的地上也存在着数百MHz的高频。因此建议CIN的接地和输出电容器Cout的接地要距离1cm～2cm进行布局。

  

![](DC_DC电源布局布线技巧_images/img_007_6705bf037526.png)

图24-6：CBYPASS放在与IC相同面的最近处时

CIN放置在距离2cm处也不会有太大的问题。  

  

![](DC_DC电源布局布线技巧_images/img_008_562472572e9f.png)

图24-7：将CIN放在IC的背面纹波电压可能会增大

  

![](DC_DC电源布局布线技巧_images/img_009_aa20685819c6.png)

图24-8：不理想的输入电容布局受过孔和电感的影响噪声会增加

  

**4.续流二极管的布局**

二极管D1要放置在与IC同一层且最靠近IC引脚的位置，图24-9是Cbypass、CIN及二极管D1的理想布局。如果IC引脚到二极管的距离过长，由布线的寄生电感引起的噪音毛刺会叠加到输出上。续流二极管要使用最短且较宽的布线，直接连接到IC的开关引脚和GND引脚。如果借助过孔和底层连接，受过孔寄生电感的影响，毛刺噪声将增加，因此续流二极管的布线绝对不能借助过孔。

![](DC_DC电源布局布线技巧_images/img_010_84e2ed8fb164.png)

图24-9：理想的续流二极管布局

  

图24-10还展示了其他不合理的布局，续流二极管与IC的开关引脚及GND引脚距离较远，这会导致布线上的寄生电感增加从而导致噪音毛刺变大。为了改善布局不当产生的毛刺噪声，有时可能会追加RC缓冲电路作为应急处理。

![](DC_DC电源布局布线技巧_images/img_011_6b0607091a3d.png)

图24-10：不理想的续流二极管布局

  

如图24-11所示缓冲电路需要放置在IC的开关引脚和GND引脚的近处。即使放置在二极管的两端，也不能吸收由于布线的寄生电感产生的毛刺噪声（图24-12）。

![](DC_DC电源布局布线技巧_images/img_012_7f84cf562cc5.png)

图24-11：理想的缓冲电路布局

  

![](DC_DC电源布局布线技巧_images/img_013_89416be9a6c6.png)

图24-12：不理想的缓冲电路布局

  

**5.热焊盘**

PCB的铜箔虽然有助于散热，但因为厚度不够，超过一定面积就无法得到与面积相当的散热效果。利用基板散热是通过基板的板材实现的，使用散热过孔，能够有效地将热传递到基板的另一面并大幅降低热阻。

  

硬件工程师及从业者都在关注我们

![](DC_DC电源布局布线技巧_images/img_014_2e84b7ba26c6.gif) ![](DC_DC电源布局布线技巧_images/img_015_51d069a6484e.gif) ![](DC_DC电源布局布线技巧_images/img_016_5fb296583be4.gif) ![](DC_DC电源布局布线技巧_images/img_017_1f30148044c0.gif) ![](DC_DC电源布局布线技巧_images/img_018_c5bc86d0867d.gif) ![](DC_DC电源布局布线技巧_images/img_019_b38438d4de46.gif) ![](DC_DC电源布局布线技巧_images/img_020_1d54e9fe0aef.gif) ![](DC_DC电源布局布线技巧_images/img_021_9bb0105b1e46.gif)

![](DC_DC电源布局布线技巧_images/img_022_de88c48250d0.gif) ![](DC_DC电源布局布线技巧_images/img_023_3b83df2d253b.gif) ![](DC_DC电源布局布线技巧_images/img_024_db521919e8d9.gif) ![](DC_DC电源布局布线技巧_images/img_025_aea384ea417e.gif) ![](DC_DC电源布局布线技巧_images/img_026_f4924e7a240a.gif) ![](DC_DC电源布局布线技巧_images/img_027_a58db91dbb3b.gif) ![](DC_DC电源布局布线技巧_images/img_028_f0edc68b0c53.gif) ![](DC_DC电源布局布线技巧_images/img_029_3c93e54afedf.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群