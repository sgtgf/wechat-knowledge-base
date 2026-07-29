# 开关电源boost升压电路米勒效应（mos管发发热原因）

原创 电路一点通 2026-04-28 11:29 广东

> 原文地址: [https://mp.weixin.qq.com/s/I3nMz7dZMm\_E3gMXCmjEMw](https://mp.weixin.qq.com/s/I3nMz7dZMm_E3gMXCmjEMw)

> 讨论了大功率电子产品中mos管发热的原因，主要是由于变压器漏电感引发的LC振荡和mos管寄生电容的影响。通过添加RCD吸收电路和TVS管，作者给出了改善和优化方案，以降低尖峰电压并减少mos管热耗。详细原理和相关基础知识请参阅其他资源。

> 在开关电源、逆变器、ups等大功率电子产品中，经常会遇到mos管/场效应管/IGBT发热问题。

**现象：**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源boost升压电路米勒效应（mos管发发热原因）_images\img_000_fb1926adc518.png)  
能量守恒定律：能量不会凭空消失。  
变压器初级产生的磁能，未被次级完全吸收，存在1~5%的能量无法传递到负载，这个能量叫做漏电感。

在mos管存在3个寄生电容：Cgs，Cgd，Cds，其中Cds与变压器漏感产生LC振荡，体现在D级脉冲高压和振荡，导致 mos 管发热，变压器漏电感以热量的形式发散出去。

**改善：**  
加入rcd吸收电路，将mos管漏极的应力通过电容缓冲，通过 电阻 消耗。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源boost升压电路米勒效应（mos管发发热原因）_images\img_001_5f7987cb1739.png)

> 振荡虽然消失，但尖峰电压依然很高。 减小电阻阻值，增大电容容值可以降低尖峰电压，但是功耗也会增加。尖峰电压为30v。

**改进：**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源boost升压电路米勒效应（mos管发发热原因）_images\img_002_3574f918c33b.png)

> 在改进版本中，增加了一个在mos管漏极和vcc直接加入一个tvs管，钳位电压为10v，mos管漏极电压应力为20v。这时候mos管已经不再发烫。

本篇文章只给方案和效果， 电路原理 不展开还会增大篇幅，关于米勒平台、LC振荡、mos管寄生电容、pcb寄生电感、变压器漏感、rcd吸收电路等细节知识可自行百度。

## **一点通推荐**

[硬件测试用例规范手册.docx](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567942&idx=2&sn=31e81f733e79a056552dc93935c47702&payreadticket=HLPyeGig6k080UzIjCq7Oxx9MOg8G1znyA5Q6H9Zjs_7B-_1pGJfj-Ov2xcuZ5kVVF0sWjc&scene=21#wechat_redirect)

[硬件经理产品生命周期管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568241&idx=2&sn=83b05e53077b753741a3ca16cd891382&scene=21#wechat_redirect)

[主任电子工程师EMC设计与项目整改手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568271&idx=2&sn=d13f0f2ac329e2fd05f3bc9d24c23a05&scene=21#wechat_redirect)

[硬件研发整机电子系统规划与架构设计手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567811&idx=2&sn=5950431b22dab9f80a9a9b300e80568c&payreadticket=HFjXAwUuFf6gXwOmmf611nUXFNA2IQ6ttH6ZBU90OAOvBC1f68ZuAOt7-eRh1Vw1wYXvrqE&scene=21#wechat_redirect)

[硬件经理项目瓶颈识别与解决方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567730&idx=2&sn=2fd06f74f985191e80ed327ba9e6780a&payreadticket=HASnpri0QQzAvJ5xNF_8gwSFzCBv6dpVv-qzd4NrZQdUUFI_EL7kCy_-tlRO62MVhQBEZpA&scene=21#wechat_redirect)

[硬件设计开发指导手册-docx文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567287&idx=2&sn=df35cb4391c24e71b35a23e3bccc67f6&scene=21#wechat_redirect)

[硬件技术评审与风险管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567767&idx=2&sn=f35b40b747beee7a5df2f9fdbc2a7d36&scene=21#wechat_redirect)

[研发经理主导电源ODM项目全流程手册（附:考核与追责机制）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567614&idx=1&sn=fe1657b3c7845fb3eef985772dce178b&scene=21#wechat_redirect)

[硬件产品开发与量产全流程管理手册（EVT/DVT/PVT/MP）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567720&idx=2&sn=638800807c6b5c7759578b4b9e1d565d&scene=21#wechat_redirect)

[电源硬件验证与测试用例编写手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567313&idx=2&sn=363dd274654c8f3590c1c860623c39da&scene=21#wechat_redirect)

[硬件开发全流程手册（.docx 文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567403&idx=2&sn=6b8511c131bf596492e9c8724be216d5&token=2048927905&lang=zh_CN&scene=21#wechat_redirect)

[开关电源技术平台与产品预研管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567264&idx=2&sn=374c4e23a2a674c254f29274615f1a30&scene=21#wechat_redirect)

[产品总监主导嵌入式智能硬件市场调研手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567165&idx=2&sn=59e9eb93222e43f47328f42ecacc624e&scene=21#wechat_redirect)

[电源产品经理项目启动里程碑资料评审管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566969&idx=2&sn=9a3beaa09656b7cac804aad7bddf0134&scene=21#wechat_redirect)

[电源开发经理设计开发流程和规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566966&idx=2&sn=4a9569ebd0a6c25adb6e3fdf1af37332&scene=21#wechat_redirect)

[硬件经理方案评审与成本控制手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566835&idx=2&sn=7f95c948eafd554bfdf921da53eb597d&token=549077461&lang=zh_CN&scene=21#wechat_redirect)

  

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️