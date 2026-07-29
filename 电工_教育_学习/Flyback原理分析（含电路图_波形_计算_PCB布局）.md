# Flyback原理分析（含电路图、波形、计算、PCB布局）

原创 硬件笔记本 2023-04-29 18:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/GjsbWDoy-3asvGisooiU1g](https://mp.weixin.qq.com/s/GjsbWDoy-3asvGisooiU1g)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

1、Flyback变换器工作模态分析；

2、Flyback关键波形分析；

3、RCD吸收电路设计及开关管应力；

4、从噪音回路看布线要点。

5、基于实际项目，原创反激开关电源视频教程曝光

  

  

  

  

**Flyback 变换器模态分析**

  

  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_002_b962fae56fe3.jpg)

ON：开关管导通，变压器原边充电，二极管关断，负载由输出滤波电容供电。

OFF：开关管关断，二极管导通，变压器储存能量通过二极管向负载侧传送。

基本输入输出关系：

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_003_c1481ebd0b7e.png)

  

**理想情况下开关波形**

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_004_de0a376d1ebb.jpg)

  

  

  

**Flyback 变换器关键波形分析**

  

  

  

  

**DCM工作模式下MOS DS电压波形分析**

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_005_86310f5a940e.jpg)

**CCM工作模式下MOS DS电压波形分析**

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_006_6ed6f603a910.jpg)

**CCM工作模式下MOS DS电压波形分析**

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_007_72c213a13a12.jpg)

**开关管上电流尖峰的波形分析**

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_008_befaf2ee4907.jpg)

**开关管上电流尖峰的波形分析（一）**

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_009_99b24063d2f6.jpg)

开关管关断后，变压器副边为输出电压Vo钳位，此时寄生电容Cp两端的电压为nVo,方向是上负下正；当开关管导通时，Cp电容放电，此时Cp与线路寄生电感及输入电压构成谐振回路，从而形成该尖峰电流（谐振电流）。

  

**开关管上电流尖峰的波形分析（二）**

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_010_4c9d8c4b7a32.jpg)

**开关管上电流尖峰的波形分析（三）**

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_011_5f6c67b09556.jpg)

  

  

  

**RCD无源吸收电路的设计**

  

  

  

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_012_5bbcee43998c.jpg)

  

  

  

**开关器件的应力分析**

  

  

  

  

**主开关管S1电压应力：**

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_013_582584841c4e.png)

  

**整流二极管D1电压应力：**

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_014_fe0d77bcaded.png)

  

  

  

  

**Flyback噪音回路及布板要求**

  

  

  

常见的反激式（Flyback）变换器拓扑  

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_015_88bcb3d391ab.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_016_b0e4fd38148d.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_017_9af53247b1e5.jpg)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_018_5a5b89c3cfd8.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_019_0f396934f458.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_020_ef4eb404ccc3.jpg)

**反激是变换器中的噪声**  

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_021_97fd6fd89537.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_022_f745619796e3.jpg)

  

**单点接地，避免回路间耦合**  

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_023_011968192635.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_024_084422bb9965.jpg)

  

**利用高频电容，减少回路面积**  

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_025_b100bed523ca.png)

**通过布线，进一步减少高频噪声**  

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_026_c71afcc75262.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_027_21b0bcc25d24.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_028_1923283cf96e.jpg)

  

**通过布线，进一步减少接地阻抗**

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_029_806f3ef077df.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_030_2c58137cab27.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_031_801556dae119.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_032_ae582113d8ad.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_033_88bc934f14de.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\Flyback原理分析（含电路图_波形_计算_PCB布局）_images\img_034_336dfaa8beb1.jpg)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。