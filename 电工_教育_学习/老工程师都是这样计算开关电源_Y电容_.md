# 老工程师都是这样计算开关电源“Y电容”

原创 硬件笔记本 2023-12-28 07:49 四川

> 原文地址: [https://mp.weixin.qq.com/s/zLU5r4WlWpRlZKFC0b4sDA](https://mp.weixin.qq.com/s/zLU5r4WlWpRlZKFC0b4sDA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

**开关电源基本原理图**

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_002_4ee591c6b40b.png)

  

**1.一次电路(Primary Circuit) ：**

直接与外部电网电源连接的.

  

2.二次电路(Secondary Circuit)：

位于设备内与一次侧相隔离的那部分电路.

  

3.Y-电容(Y-Capacitor)：

跨接于一次电路与地或一,二次电路之间的高压电容.

  

  

**开关电源接地、漏电流、耐压测试（安规）**

  

1.接地连续性测试(Ground Continuity Test)：

  

A.定义：

从Inlet PG 端上通过电流至使用者可接触的接地端,确保其阻值小于规格值,达到接地保护的功用.

  

B.标淮：

1.输入电流不大于25A,(DC or AC)电压不超过12V,时间至少3秒(TUV要求).

  

2.测试结果：电阻值不得大于100 mΩ.

  

2.接地泄漏电流测试(Earth Leakage Current Test)：

  

A.定义：

通过一个被安规单位(UL,TUV,CSA…)认可的“人体阻抗模拟电路”,测量当待测物 (SPS)接通电源时在可触到的金属部件与地之间流经人体的电流量.

  

B.标淮：

1.输入电压为额定电压上限的106%.

  

2.测试结果：Class I≦3.5mA;Class II≦0.25mA.

  

3.耐压测试(Dielectric Withstand Voltage Test)：

  

A.定义：

又称高电压介电测试,即 Hi-pot(High Potential)Test,从一次侧对二次侧(或一次侧对地)之间实施高电压以确定内部绝缘层有隔离危险电压的功用.

  

B.标淮：

1.输入电压为下列所示:

![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_003_b39150fe245c.png)

  

2.测试结果：不可有绝缘击穿现象(Breakdown).

  

  

**耐压测试交流与直流之区别**

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_004_ea2fc8c1d239.png)

  

  

**耐压测试之漏电流计算方法**

  

1\. DC 测试之漏电流设定：

  

DC 测试电流非常小(μA),一般一次侧对二次侧之间实施DC高电压,漏电流设定:0μA~100μA.

  

2\. AC 测试之漏电流理论计算：

  

计算公式：I =2π\*f\*V\*Cy

  

其中：

f— 测试电压频率 ( 50Hz or 60Hz )

V— 测试电压 ( unit : volt )

Cy—跨接于一次侧与地或一,二次侧之间的Y电容总和.

  

所以:Imin \= 2π\*f\*V\*Cymin

Imax = 2π\*f\*V\*Cymax

  

Cy 电容计算 :：Cy =Cy1 Cy2 Cy3 …

  

若一次侧地与二次侧地之间跨接一颗Y电容(Cy0 ),则：

![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_005_3caa926158fb.png)

Y电容公差一般为 ：/-20% OR /-10%

  

3\. 实际设定AC 测试漏电流时需考虑下列因素:

  

1.考虑初始漏电流 ：

初始漏电流即在无待测物状态下,所测得的漏电流.  

  

2.考虑Y电容公差 ：

  

电源工程师在选择同一颗容量大小的Y电容时,往往有几个型号,但其公差不一样(有的是 /-10%;有的是 /-20%),给实际漏电流设置带来麻烦,因此我们应该按 /-20% 公差去设定.否则须依 /-10% 公差去设定.

  

3.考虑实际线路中存在的分散电容,因此漏电流范围设定：(下限取整 :上限入整)

  

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_006_2e84b7ba26c6.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_007_51d069a6484e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_008_5fb296583be4.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_009_1f30148044c0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_010_c5bc86d0867d.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_011_b38438d4de46.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_012_1d54e9fe0aef.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_013_9bb0105b1e46.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_014_de88c48250d0.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_015_3b83df2d253b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_016_db521919e8d9.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_017_aea384ea417e.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_018_f4924e7a240a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_019_a58db91dbb3b.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_020_f0edc68b0c53.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\老工程师都是这样计算开关电源_Y电容__images\img_021_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。