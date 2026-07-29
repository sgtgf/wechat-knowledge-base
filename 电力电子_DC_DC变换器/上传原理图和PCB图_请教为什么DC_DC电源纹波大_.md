# 上传原理图和PCB图，请教为什么DC-DC电源纹波大？

原创 硬件笔记本 2023-09-27 07:41 四川

> 原文地址: [https://mp.weixin.qq.com/s/QazruOr6-VGrmFqafJ7S5A](https://mp.weixin.qq.com/s/QazruOr6-VGrmFqafJ7S5A)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

**网友eefishing问题：**

一个DC-DC电源转换，纹波有点大，上传原理图和PCB图

用AOZ1050PI设计的一款DC-DC电源转换，输入9~18V，输出1.2V，AOZ1050开关频率500KHz，现在用示波器测得输出大概有100mV，Vp-p在485KHz左右的纹波。  
  
请问各位专家：  
1 这个指标的纹波是否在设计许可的范围之内？在一般情况下，DC-DC电源转换的纹波在一个什么范围内可以认为是正常的？

2 从原理图和PCB图上，这个设计是否还能够进一步优化降低纹波？还请指出。

敬请各位斧正。

![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_002_c3fdd1d45cf1.png)

![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_003_4bbb4d50962a.png)

  

**网友mituone的回复：**

100mV 的纹波（Ripple）对数字线路应该没什么问题，对模拟线路就看情况了，有的线路很敏感需要更低。但芯片资料展示在满载（Full Load）状况下，纹波（Ripple）可以压到 20mV 左右。

  

**布线建议︰**

L2 在上方，但 FB 在 AOZ1050 Pin 4，造成反馈路径绕了一大圈才回到芯片。将 L2 移到下方，可以缩短反馈路径。

AOZ1050 Pin 3 Power Return Ground 只有单点落地显得太单薄，要注意一盎司（oz）铜厚下，10 mil 的落孔只有 0.8A 的承受力，如果是使用十字线接地，就 4 条十字线加起来可承受的电流。宜将地铺大，并多打导通孔与背面的地连通。

注意芯片资料上的 AOZ1050 Pin 4 PGND 与 R5 落地的画法，它们是用不同的地符号。意思是说他们建议你用隔离的地（Isolation Ground），做法上就是 R5 和 Pin 4 拉在一起，然后单点落地。

输出应该先过滤波电容 C58、C59 和 C60，再给其它线路，注意到你的输入电容 C56 和 C57 就做得不错，可以参考它的做法。

注意线宽与承载电流的关系，输入与输出线宽需要计算。不晓得 C60 "+" 号旁边那条细线是做什麽用的？看起来很细。

  

**布线大原则︰**

让输入或输出滤波电容和地造成的回路越短越好。

  

**仍需检视的部份︰**

L2 电感宜选用有屏蔽（Shielding）的封装，避免漏磁（Magnetic Leakage）干扰。

L2 电感的额定电流（IDC1 和 IDC2）宜被检视，避免峰值电流（Peak Current）超过或温度升高，造成电感量不足产生纹波和噪声。

L2 直流电阻（DCR）宜被检视，太高效率不好、容易发热。

AOZ1050 Pin 5 COMP 上的补偿电路，芯片资料上有计算公式，宜试算一下是否搭配得宜。

电解电容 C56 和 C60 的 ESR 越小越好，如果您真的很在意纹波及噪声的大小，电解电容尽量选用可靠一点的厂牌。

硬件工程师及从业者都在关注我们

![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_004_2e84b7ba26c6.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_005_51d069a6484e.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_006_5fb296583be4.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_007_1f30148044c0.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_008_c5bc86d0867d.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_009_b38438d4de46.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_010_1d54e9fe0aef.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_011_9bb0105b1e46.gif)

![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_012_de88c48250d0.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_013_3b83df2d253b.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_014_db521919e8d9.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_015_aea384ea417e.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_016_f4924e7a240a.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_017_a58db91dbb3b.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_018_f0edc68b0c53.gif) ![](上传原理图和PCB图_请教为什么DC_DC电源纹波大__images/img_019_3c93e54afedf.gif)

## 

**声明：**

  

声明：文章来源与非网。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。