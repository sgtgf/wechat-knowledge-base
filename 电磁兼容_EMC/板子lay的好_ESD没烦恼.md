# 板子lay的好，ESD没烦恼

原创 硬件笔记本 2023-09-14 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/6iGhS5WtY\_rRXNEZsT10HA](https://mp.weixin.qq.com/s/6iGhS5WtY_rRXNEZsT10HA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

板子lay的好，ESD没烦恼。提高ESD静电防护，PCB设计需要做好以下几点：

对于电源布局的整改，如图1所示：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_002_b76616437c41.png)

图1

1、DCDC电源布局，在电压输出端经过电感，旁路电容和储能电容的布局如上图，旁路电容C14、C13尽量靠近电感输出，取电压最好是经过电容C12后取电。目的是电路可更好滤波，减少干扰。

  

2、所有通过电源线、信号线上的高频旁路电容都尽量就近接地，以减小进入电路系统的ESD大电流，起到更好的吸收干扰的作用。

  

3、复位线、恢复出厂信号线要尽可能短。因为越长的走线就越难承受ESD能量，故元器件的布局尽可能凑近以减短走线长度。若实在无法避免，线的两边尽量有地包裹，如图2所示。（感谢关注微信公众号：硬件笔记本）目的是减少其他信号干扰，避免受到干扰使芯片无故重启。同时也可在电路上加电容或电阻，可增大内阻，防止过大的干扰信号。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_003_8fb0c6ab8963.png)

图2

  

4、开关复位线布局也是同样的原理，在电路上可加上一个π型滤波电路，如下图图3所示，可更好的消除外界干扰，防止芯片重置。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_004_4220a4119e38.png)

图3

  

5、给芯片供电，电源走线尽量是先通过电容再流向芯片，对芯片起到保护作用。如图4所示。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_005_cdab7f36f3eb.jpg)

图4

  

6、地线铺铜尽量避免直角。尽量使用拐角大于90°，直角尖会产生干扰，会导致放电路径不一致。如图5所示。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_006_62e3e8d9e718.png)

图5

  

7、通讯线先经过保护器件，再经过防雷管放电，防雷管就近接地，再经过TVS放电。线尽量短，回路尽可能小，可快速消除干扰信号。（感谢关注微信公众号：硬件笔记本）在地线上加上Y电容，可快速放电，消除静电。

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_007_9d72add08e1a.png)

图6

  

8、MCU和其他芯片可以分开取电，避免相互干扰，可在电路上加LC滤波电路。电路如图所示：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_008_f186dff94d96.png)

图7

  

9、也可使用多层板。多层板可大大改善系统抵抗ESD放电的能力。将第一层接地平面尽可能靠近信号走线层，可使用ESD瞬态放电在到达走线时能很快抵消。

  

10、加隔离。电气隔离也是抑制静电放电冲击的一种方法。在PCB上加隔离芯片或者光耦、变压器等，以及结合截止隔离和屏蔽可以很好抑制静电放电冲击。

  

总的来说，关于防止ESD静电干扰的设计，电源平面、接地平面和信号线的布局是PCB ESD防护设计的重要措施之一。

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_009_2e84b7ba26c6.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_010_51d069a6484e.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_011_5fb296583be4.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_012_1f30148044c0.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_013_c5bc86d0867d.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_014_b38438d4de46.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_015_1d54e9fe0aef.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_016_9bb0105b1e46.gif)

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_017_de88c48250d0.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_018_3b83df2d253b.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_019_db521919e8d9.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_020_aea384ea417e.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_021_f4924e7a240a.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_022_a58db91dbb3b.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_023_f0edc68b0c53.gif) ![](D:\电脑文件\公众号知识库\电磁兼容_EMC\板子lay的好_ESD没烦恼_images\img_024_3c93e54afedf.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。