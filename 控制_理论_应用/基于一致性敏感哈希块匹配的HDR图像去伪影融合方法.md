# 基于一致性敏感哈希块匹配的HDR图像去伪影融合方法

原创 自动化学报 自动化学报 2020-10-14 17:09 北京

> 原文地址: [https://mp.weixin.qq.com/s/x9liMAux\_m8SM2u17lQPUg](https://mp.weixin.qq.com/s/x9liMAux_m8SM2u17lQPUg)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEaYK6aRq4So9jNIWZ0Gn2VlmE8xgkL8hkKfjsPDkJEfsG55h5vJUY5w/640?wx_fmt=png)

点击**蓝字**关注我们

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YxIQukGy92EeF2tkAjz6BoPJsiaDZkDbxWgQpiaPdyv0SdcfFXnJ2BeYgUktjtjbyojdUJX1orn6ZZMMdX7uj8j9a/640?wx_fmt=svg)

多曝光高动态范围图像融合是指：融合一组具有不同曝光参数的图像序列以获取一幅具有完整场景动态范围（即10^8 : 1）的图像。  

![](https://mmbiz.qpic.cn/mmbiz_svg/3a3QxMHZ8YxIQukGy92EeF2tkAjz6BoPJyaTzUMHLibkiag5JIlTTs9cZ48ChtUQn09zo5Igsa768XpDw73eH7uSTIdwS4gEyT/640?wx_fmt=svg)

  

**朱雄泳, 吴炆芳, 陆许明, 谭洪舟, 邹兵兵. 基于一致性敏感哈希块匹配的HDR图像去伪影融合方法. 自动化学报, 2020, 46(7): 1496-1506**

_http://www.aas.net.cn/cn/article/doi/10.16383/j.aas.2018.c180003_ 

  

高动态范围(High Dynamic Range, HDR)图像的目的就是要正确地表示真实世界中从太阳光直射到最暗的阴影这段大范围的光线变化，还原最接近真实场景的图像。因此，它被广泛应用于卫星气象、遥感探测、医疗、军事等领域。相对重新设计传感器以获取HDR图像的方法，多曝光图像序列融合技术成本更低，更适用于实际应用；已论证使用两张不同曝光量同一场景的低动态图像也可以合成HDR图像的可行性，故当前主要利用现有传感器的基础上对同一场景采集多张不同曝光量的数字图像，再合成HDR图像，如图1所示。

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VESjX986TQTMLmFg3RlgmsbicwNRDd7fOSkSxO0vaeNnfn3AYOM24cfUQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

_(a) 多__曝光图像序列_  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VE6VSOfwWDISwqbGCeaYPdo2GfYia6zCxrJtsFqWXHD6L651Hg2tGic6tA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

_(b) 融合的HDR图像_  

_**图1  多曝光图像序列融合HDR图像**_

  

融合后的HDR图像能把场景中完整的光线变化都记录下来，信息量非常丰富，克服了传统图像的不足。但由于多曝光图像序列不一定是静止的，可能存在因采集设备抖动导致图像位移，或者场景中出现运动物体导致图像序列中的内容不一致，容易使得融合得到的HDR图像出现伪影等问题，如图2(b)红色方框所示。

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VE3rpCEOLUFlCJQpfusNl8ic3TaKYVZpL4yUoIAIEOsRrybXQgjFRdIXQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

_(a) ArchSequence多曝光图像序列_  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEvfry5ibkiaMyuc1OGBV8sexP2iasq2ia6yyHjia2C8uSP03b5S9dic9nVWtQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

_(b) 融合的HDR图像_  

_**图2  ArchSequence多曝光图像序列融合HDR图像**_

  

由于多曝光图像序列中出现了运动物体，从而导致融合后的HDR图像出现了伪影现象，使得图像质量大幅下降，观感体验也不好。为此，可先对图像进行配准对齐，再对配准对齐后的图像序列融合而得到去伪影后的HDR图像。

图像配准是指将不同时间、不同传感器或不同条件（气候、照度、摄像位置与角度等）获取的两幅或多幅图像进行匹配、叠加的过程。它通常是同一场景中不同曝光量的像素的融合，也可以是同一场景中局部移动像素的消除。 

当前比较常用的图像配准方法较多是基于PatchMatch算法，通过计算两个图像区域块之间的密集近似最邻域而进行块匹配，消除伪影，如图3所示。

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEcibnIOG7ME0AAic45T9J0Mzrupv03HNlFoz3G0KFqUxQVfyrjHmETLuA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

**_图3  Hu方法融合HDR图像_**

  

由图可见，基于PatchMatch块匹配方法的去伪影效果比较好，还能抑制曝光不好的区域。但当场景中较复杂时，PatchMatch算法为了提高精度需要多次迭代，使得时间复杂度较高，去伪影效果不够好，如图4所示。

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEmaIYm4lib5JUISsOS2lr2lAbiaPK0SWp8oVjicIxM2xm4Ux6SmwMyInOA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

_(a) Significant\_and\_fast\_abrupt\_motion多曝光图像序列_  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_png/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEhppscicPr8bmicsmbDThLvO1UqQPuIaAZT6iamKpMzCHlKnyIaXzCWhwg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

_(b) Hu方法融合HDR图像_  

_**图4  Significant\_and\_fast\_abrupt\_motion多曝光图像序列融合HDR图像**_

  

此时可以看到，PatchMatch算法不是太理想，窗外山坡上的建筑物、烟囱等物体的细节部分完全丢失。 

如何快速有效地从多曝光图像序列中融合得到一幅无伪影与模糊问题的HDR图像？本文引入一致性敏感哈希方法替代PatchMatch算法，进行近似最近邻域的图像区域块搜索。它能将高维数据降维高效处理，并利用图像间的一致性以传播更好的图像块，从而大大加快了密集近似最近邻域的搜索速度与准确性。对多曝光图像序列融合得到的HDR图像如图5-6所示：

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEcJEy28UsxTlk18HiaRdQT2OWJibgZGBsnq9Zrh4D3Mryl96wCGZuWKIg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

**_图5  本文方法融合的HDR图像_**

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEuynXozE8wneQfu2UibWzIGX7heHSicZzxGayuP0qNklDajza5Zh1e6ew/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

**_图6  本文方法融合的HDR图像_**

  

从仿真结果来看，本文方法在对复杂场景多曝光图像序列融合HDR图像时，能较好地去除伪影，且能保留绝大部分真实场景中的细节信息。客观指标如表1所示。

  

_**表1 对于不同图像序列，不同的去伪影方法评价指标**_

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VE9WvYyRffKrEJDswOGiaphdiaenrictdXefAUgibGpdTo8rmQV33HRgSESg/640?wx_fmt=jpeg)

  

本文主要提出一种基于改进的相机响应函数和一致性敏感哈希算法的HDR图像去伪影融合算法。该方法引入相机响应函数对输入图像序列进行辐射校准，然后使用一致性敏感哈希进行配准融合，有效地解决了由于相机抖动和场景中运动物体在HDR 图像的融合过程中所导致的伪影和模糊现象。对于存在复杂变化的真实场景，本文算法也能较好地在去除伪影的同时精确记录场景中的光照变化，使得融合后的HDR 图像能展示出更多有效信息以便后续利用。仿真结果表明，本文算法在去伪影以及运行时间等方面都具有优秀表现，具有较好的鲁棒性。

  

**作者简介**

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEye2WDWdewnIkYmpjg5tcCa81ySib9XNqw5s6XAsKZWUibnZrXtVEcMTw/640?wx_fmt=jpeg)

**朱雄泳**

广东第二师范学院教师. 主要研究方向为数字图像处理, 视频信号处理, 计算机视觉.

E-mail: zhuxiongyong@gdei.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEDmbHgpPmaOnycyjhhwE8JV8ROht4ssaWJZDA6ib9o0GZibcadHUSxufw/640?wx_fmt=jpeg)

**吴炆芳**

中山大学电子与信息工程学院硕士研究生.  主要研究方向为数字图像处理.

E-mail: Wuwf\_828@163.com

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEvIVaEvpjLia2diaryMyUiaMF2Twf5YEB8VuqlayJEibWnSV3D41AsGo9qQ/640?wx_fmt=jpeg)

**陆许明**

广东第二师范学院教师.  2015年在中山大学获博士学位. 主要研究方向为数字图像处理, 视频信号处理, 无线通信, 集成电路设计.

E-mail: luxuming@gdei.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VE6d17zqKSZhBdZdBbDGqkpHCJNLjIib4Ie59gUFiaSce0Tqueceic7Yd7Q/640?wx_fmt=jpeg)

**谭洪舟**

中山大学电子与信息工程学院教授.主要研究方向为宽带通信, 信号处理, 复杂系统辨识及建模, 半导体集成电路设计. 本文通信作者.

E-mail: issthz@mail.sysu.edu.cn

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VErm7jFV0g1J01dWFy5nL52mWj83L2Ph7O6Up9JicFmmGK1Yp9wLDHuIQ/640?wx_fmt=jpeg)

**邹兵兵**

中山大学电子与信息工程学院硕士研究生.  主要研究方向为数字图像处理.

E-mail: zoubingbing1991@163.com

  

**期刊动态**

[《自动化学报》发表文章入选第五届“中国科协优秀科技论文”](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956281&idx=1&sn=71dbf4174159b1942b63ef08eca1dfa0&chksm=f2941bf8c5e392eef9fc02c51a7f85605a0e1c1b044fb8601c509746572832d86715fdc68b14&scene=21#wechat_redirect)

[《自动化学报》2020上半年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955913&idx=1&sn=79bcb27a9ec7a0db7bda0de2622c8f98&chksm=f2941a08c5e3931e2fec62fe080dc3e19b2d2d0dc4b067cab1d8202fd628c36cadc59e31481e&scene=21#wechat_redirect)

[2020年度国家杰青名单公布，《自动化学报》多位专家入选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955856&idx=1&sn=b99cae140e826eb44167f31ff0df69e6&chksm=f2941a51c5e39347a56362162fb568dd1b37277274bfcf8b59178930104609f57bc2cb48652d&scene=21#wechat_redirect)

[《自动化学报》20篇文章入选2019“领跑者5000”顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955739&idx=1&sn=2b92c97a33944a61b36913f471989573&chksm=f29419dac5e390cc872091f2bf7d55f3d2e9cba612010294615680cc3020571ae80a3dda30d0&scene=21#wechat_redirect)

[《自动化学报》多位编委和作者入选2019年中国高被引学者](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955656&idx=1&sn=3855f19fc1a4cbd306b580fd974e2442&chksm=f2941909c5e3901f25ed372ddda199e10bd1f1e9da57ff240b37327020a993c87fe2fe021ee0&scene=21#wechat_redirect)

[【热点综述】2019年综述TOP20](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955584&idx=1&sn=b6460d48b4c365e8062c2b45bbcf8e38&chksm=f2941941c5e390574162e362028c22a441fa00ffbc0634599685c34f8a3a3446eaf90b8c0723&scene=21#wechat_redirect)

[自动化学报和IEEE/CAA JAS两刊编委获得2019年度国家自然科学基金项目](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955434&idx=1&sn=782abbffd5f83d1608e8bb509339ce85&chksm=f294182bc5e3913d5593db7f9f4c34e6266d942fc3c540165a545437b86f2756036fd9c62e25&scene=21#wechat_redirect)  

[《自动化学报》多名编委荣获“杨嘉墀科技奖”等奖项](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955508&idx=2&sn=7fe0b57657f4f9cfadde5ee398c67de4&chksm=f29418f5c5e391e31af1fd99cf5c0b61a5c1c44d8b78e903b71b0628054f29a34c2a6c7972e5&scene=21#wechat_redirect)  

[《自动化学报》发表文章再度入选中国科协优秀科技论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955422&idx=1&sn=491e442f16e1a088682cdac5316378df&chksm=f294181fc5e391094ce80df880894721ffad2c61b3b0cb0c2858601e846897c5061bb8cc8235&scene=21#wechat_redirect)  

[国家科技重大专项&重点研发计划等资助论文精选](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955416&idx=1&sn=152515bf1cc9800199a8da3d456f6b54&chksm=f2941819c5e3910ff3f98d74e2aae494046b5dbb6f6096c3d5c0c3d5ba134cf10f5e7af5bb86&scene=21#wechat_redirect)  

[国家自然科学基金资助论文精选（一）](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955406&idx=1&sn=3c905081a57f1deb156b9f6f12b57a56&chksm=f294180fc5e3911966de31a290e784e8d5856902968fb29b3d3242a2e2d26104d526d217c79b&scene=21#wechat_redirect)  

[国家自然科学基金资助论文精选（二）](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955406&idx=2&sn=be8a73e34b097480f593ad399d4ce4d1&chksm=f294180fc5e39119440ddd930d887fd848daf3104587519b2295e2e32d97a5cb9cfd7f4e7bc3&scene=21#wechat_redirect)  

[《自动化学报》2019上半年合集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955383&idx=1&sn=146b8efdb966258f38d8a80dad78e270&chksm=f2941876c5e39160ea3949bf480b71c8d0daaf10aa4567558970d889b3a70988a635f44a4c5b&scene=21#wechat_redirect)  

[【热点专题】模糊系统](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955382&idx=1&sn=07f211b9dd9d8c222f96d59f9960fd4f&chksm=f2941877c5e3916198db46714ecd96c3273dc248fa10dc75f84212a2531159e31f25f40c73c2&scene=21#wechat_redirect)  

[《自动化学报》入选2019谷歌学术中文期刊TOP100，这些高影响力文章不容错过](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955369&idx=1&sn=3e2c817818af2cb8752f819667ddd347&chksm=f2941868c5e3917e5b02ef313a656a02270cad13e6e2ab08b617dad2091c4842153a3503a69b&scene=21#wechat_redirect)  

[【热点综述】2019年最新文章](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955359&idx=1&sn=cd768b5f2572472b6465c3f06b21a803&chksm=f294185ec5e3914807e5a5c9ec3143c15eb94a38ae51f5608acbc21b9b16cd20da65649401e0&scene=21#wechat_redirect)  

[【热点专题】流程工业自动化](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955342&idx=1&sn=0301d93b276aaaf27fe36d71ee2c841d&chksm=f294184fc5e391596cf037d93097ab69ee48b5a3c36c5fd5dfdaa14a302c445a9ec4cf9dab11&scene=21#wechat_redirect)  

[【热点专题】数据驱动控制、学习及优化](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955310&idx=1&sn=9565312b88fe3ed17b199d148f22f191&chksm=f2941fafc5e396b93c014d1ab5d33c8f1da2a2d293843bcb814d5131b29677dfd4e38ff5699d&scene=21#wechat_redirect)  

[【前沿速递】机器人领域热点综述](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955259&idx=1&sn=c6aaf28c985bc4535380e5e774cac040&chksm=f2941ffac5e396ec6562e95c6ab505f84a1ad6f6f3f558a1a13abe94ec0a3db42a984830dec8&scene=21#wechat_redirect)  

[【好文推荐】智能交通文集](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955221&idx=1&sn=9fc1c9e36a890e83da22882421bd8a14&chksm=f2941fd4c5e396c2bd720a9d9e007ffb1e8dd88fde551cfa3b5a41a527458ebc340522a4b669&scene=21#wechat_redirect)

  

**热点文章**

[值得收藏！SCI论文Introduction常用句式超全总结](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956198&idx=1&sn=5797df8adbd13e69d5e4ef09c6ee1d63&chksm=f2941b27c5e3923193e5a7b9199c59c1604e278c2c1356063ed30890dfbd6ae6e2ac8f2997ee&scene=21#wechat_redirect)

[段广仁院士：高阶系统方法— II. 能控性与全驱性](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649956009&idx=1&sn=d887902e385f28ddea0fcb569208bb86&chksm=f2941ae8c5e393feccb4347c9a3afbe191007f67323747782405b9ca5c754ba6e16017557786&scene=21#wechat_redirect)

[段广仁院士：高阶系统方法— I. 全驱系统与参数化设计](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955943&idx=1&sn=7d2e161c5d48ea877709b94ef706a3af&chksm=f2941a26c5e3933077b5c9ef2cf38af1087f3f074454251d441433f1c53861ddd85386b7a260&scene=21#wechat_redirect)

[陈虹教授等：智能时代的汽车控制](http://mp.weixin.qq.com/s?__biz=MzAwMzAzMDgxOA==&mid=2651065976&idx=1&sn=d6daa2fafd8e723a0238c5566cf1641c&chksm=8131c435b6464d23449b163afedd37f20a5d7598fe6684c6b011d19554e0ed38ef031fbf2ec9&scene=21#wechat_redirect)

[JAS入榜自动化学科TOP20！谷歌学术计量最新发布](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955829&idx=1&sn=65a242374cd79202ed66d6eb2996a661&chksm=f29419b4c5e390a277044eb7607080f302ee1ee57fb98b61da143f4b851a2f5f8b1c78b0caee&scene=21#wechat_redirect)

[JAS最新CiteScore 8.3，位居所属各领域Q1区前列](http://mp.weixin.qq.com/s?__biz=MzIxMjA5Njg2Nw==&mid=2649061028&idx=1&sn=ed2e409ce394028f1f5d138b83194a62&chksm=8f5a94a8b82d1dbee81f0723b724a6132ff9cc12cef3cf9796a5189d8ba9242e3d8b965d582d&scene=21#wechat_redirect)

[《自动化学报》多位编委和作者入选2019年中国高被引学者](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955656&idx=1&sn=3855f19fc1a4cbd306b580fd974e2442&chksm=f2941909c5e3901f25ed372ddda199e10bd1f1e9da57ff240b37327020a993c87fe2fe021ee0&scene=21#wechat_redirect)

[自动化学报最新影响因子5.936，再获中国最具国际影响力期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955466&idx=1&sn=9c6704897821c19210518186e39d0ba9&chksm=f29418cbc5e391ddd81ab2ac1e23ee4ab89e543b226f4fc8d41dfe661d83c7463fed1fef1ac0&scene=21#wechat_redirect)  

[IEEE/CAA Journal of Automatica Sinica 被 SCI 收录](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955512&idx=1&sn=e3e85f94859128ed15dda84425097969&chksm=f29418f9c5e391ef44634f7051950c8b1304cc0cabad620775db21d9e85ebd13e6f733b7f03f&scene=21#wechat_redirect)  

[期刊引证报告发布：自动化学报各项主要指标蝉联第1，再获百种中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955508&idx=1&sn=aff836d3b0a4f52810122ffd1fa0f23c&chksm=f29418f5c5e391e3b1a6a9e951bf4d028224c9357e87648cdc54181ab6a4057cb6099ecaa0ef&scene=21#wechat_redirect)  

[《自动化学报》入选“庆祝中华人民共和国成立70周年精品期刊展”](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955387&idx=1&sn=62ce23f150d0a03760bf6f4f6d8275ce&chksm=f294187ac5e3916cd90ae2dde568a4b1b53a979beb38ee5faec7e958eb4501cf42593112d15c&scene=21#wechat_redirect)  

[《自动化学报》20篇文章入选2018“领跑者5000”顶尖论文](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955353&idx=1&sn=0ff56779fb42a8f874fe04aad60f81af&chksm=f2941858c5e3914e4ff91a57e72e2ef477c345e1bb6db9e8379ea2e7d2fb409491bba2db3580&scene=21#wechat_redirect)

[《自动化学报》和《自动化学报》（英文版）订阅信息](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955387&idx=2&sn=dc16f946c3dfe07b315cc57c96f3c570&chksm=f294187ac5e3916c479d1e5d899704f7cba032ce01acdbc9895e57f60482ccf80eba58f7c087&scene=21#wechat_redirect)  

[《自动化学报》入编《中文核心期刊要目总览》2017年版](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955034&idx=1&sn=e695485524836d18121a68a13af4bc30&chksm=f2941e9bc5e3978d4b787d4f54c01c65b5e0b73126beedf2234f4764b13eb7bd931bc80f342f&scene=21#wechat_redirect)  

[期刊引证报告发布：自动化学报各项主要指标位列第一，再获中国杰出期刊称号](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955091&idx=1&sn=d5de46ddcf90fdea8c515d265d4bf865&chksm=f2941f52c5e39644de3508812d978e93e3bc10ac2ec3885ea93489038298a50c7b4c9e472e59&scene=21#wechat_redirect)  

[JAS影响因子世界排名第7，自动化领域世界学术影响力Q1区唯一的中国期刊！](http://mp.weixin.qq.com/s?__biz=MzI2NjA3MzM5MA==&mid=2649955473&idx=1&sn=3851a113e1dcea9a7983feeec9498d1c&chksm=f29418d0c5e391c6bb5ec5307db29885e00fd4dbfa47efb0251c43e217fcf60e95b6586b8ac0&scene=21#wechat_redirect)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEpkqgs1epcNJaDcWLYjrrsWH6Ribfcoo954sRk0Qa91bk3jzkrnmPHgw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VECjXfz7TSF8iaAZbUl8OBu9gSmckCAaO8bydMA3SSs6scunBJuxCuteg/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEQl6JmFLEJMdibmXKlic2EaV3Pm87JVPD0OQuZjYDv4uibkCBAMJibLHJhA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

**长按二维码｜关注我们**

**IEEE/CAA Journal of Automatica Sinica (JAS)**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VElbdzauZ6fhib9Ckm4wBnTClUuH8xa8wItrI9FsGGxL3SpzQaUAlZJibA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》服务号**

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_jpg/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEBD7nXyw2szBM4CvhAt1oh6MHfgEndiaabcwTxLtAichMI6IJC8whegUQ/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

![](https://mmbiz.qpic.cn/mmbiz_gif/47ibaBJyUH46e05sn0Dvnf8iaSCwzQF0VEp18rUS8VCn0WWS4IDl27VBcb0YNVRTNhGSnWUFKkUR19gBAn3RuE1Q/640?wx_fmt=gif)

**长按二维码｜关注我们**

**《自动化学报》订阅号**  

  

**联系我们**

**网站:** http://www.aas.net.cn/ 

**投稿:** 

https://mc03.manuscriptcentral.com/ieee-jas 

**电话:**  010-82544653（日常咨询和稿件处理） 

           010-82544677（录用后稿件处理）

**邮箱:**  aas@ia.ac.cn（日常咨询和稿件处理）  

           aas\_editor@ia.ac.cn（录用后稿件处理）

**博客:** 

http://blog.sina.com.cn/aaseditor 

  

**点击****阅读原文** **了解更多**