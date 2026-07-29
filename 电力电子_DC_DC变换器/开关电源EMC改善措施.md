# 开关电源EMC改善措施

原创 电路一点通 2026-05-11 11:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/AfcS6NYVKH5IFu1KCFQX0g](https://mp.weixin.qq.com/s/AfcS6NYVKH5IFu1KCFQX0g)

### 1. 开关电源 的EMI干扰机理

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源EMC改善措施_images\img_000_f07ad90a015e.png)

当开关MOS管的时候，电感上会产生感生电动势，这种感生电动势是EMI干扰的来源。大的 du/dt以及di/dt是EMI问题的来源。

### 2.通过钳位抑制EMI

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源EMC改善措施_images\img_001_0ae6226b42ca.png)

### 3.阻容吸收抑制EMI

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源EMC改善措施_images\img_002_9cae9613966d.png)

这里需要注意的 设计 点是，当MOS管关闭以后对电容充的电必须在MOS打开的时候能够释放，否则下个周期就无法吸收电流，这个时候就要求电容不能太小电阻不能太大。但是如果电容和电阻太小，又吸收不了多少能量。 一般经验就是使Ton>3RC。

### 4.波形整型抑制EMI

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\开关电源EMC改善措施_images\img_003_a48113ddb0ce.png)

通过在 MOS 管驱动端增加电阻，降低边沿陡峭成本降低EMI。但是坏处就是增加了MOS管的开关损耗，导致管子发热。

  

## **一点通推荐**

[硬件测试用例规范手册.docx](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567942&idx=2&sn=31e81f733e79a056552dc93935c47702&scene=21#wechat_redirect)

[硬件设计说明书编制规范手册（标准Word版）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568416&idx=2&sn=a6fbb11d722eb24bd0d67207d27e23c2&scene=21#wechat_redirect)

[硬件产品经理市场调研分析手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568392&idx=1&sn=53fba20d380e3c0eef53eac93860175b&payreadticket=HEfeLt-x_BTSXASkTFqLUQVhT2UVByzLeZQVQcVqbvbPGlBGAq5DY1HTpl_itCzChAspp_c&scene=21#wechat_redirect)

[硬件工程师校/社招笔试面试300题（PDF文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568363&idx=2&sn=d600724318d4eefb89eec226a058666a&payreadticket=HAp7Lkbfl5CGAzP03hM87SqQSU623IN6iFgNCkzldGuLuglSsgBN3umPfIvKQZnZbekRTZs&scene=21#wechat_redirect)

[硬件研发经理工业电源新品开发指导手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568350&idx=2&sn=a0ce8ee1bcf6922c052325905ddbff9c&payreadticket=HKdGiStvhIhrzQ1PHKT0HUweg0hNxHWPqrAW_PHXfb_SACAPuZQmKCbXSjXzbjlSdriDsx4&scene=21#wechat_redirect)

[电子元器件选型和可靠性评估手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568287&idx=2&sn=9b149b750f4f0ce0f65e5584b7c68775&payreadticket=HMEowzbqBgTT474RJS9VTnlNqeSqRxOxFEtFzZMAQqOjiy-FVz_F56s4cimjNZ4ZFRvrLSo&scene=21#wechat_redirect)

[主任电子工程师EMC设计与项目整改手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568271&idx=2&sn=d13f0f2ac329e2fd05f3bc9d24c23a05&payreadticket=HMsQRlZzIuZDaPOZz6j_JXWgEOTgCOekUylZ5X8sPFp9BgN8aDGciAhy3JTvEWbimuf-zPk&scene=21#wechat_redirect)

[硬件经理产品生命周期管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568241&idx=2&sn=83b05e53077b753741a3ca16cd891382&payreadticket=HFdBQY7_cStRwxFyhiZc4F5sgsuqMGwHf_ZPJmxgWHlbGzXuB6iraKpTnhjLOLKrv9pfbzo&scene=21#wechat_redirect)

[硬件设计开发指导手册-docx文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567287&idx=2&sn=df35cb4391c24e71b35a23e3bccc67f6&scene=21#wechat_redirect)

[硬件技术评审与风险管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567767&idx=2&sn=f35b40b747beee7a5df2f9fdbc2a7d36&scene=21#wechat_redirect)

[硬件研发整机电子系统规划与架构设计手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567811&idx=2&sn=5950431b22dab9f80a9a9b300e80568c&scene=21#wechat_redirect)

[研发经理主导电源ODM项目全流程手册（附:考核与追责机制）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567614&idx=1&sn=fe1657b3c7845fb3eef985772dce178b&scene=21#wechat_redirect)

[硬件产品开发与量产全流程管理手册（EVT/DVT/PVT/MP）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567720&idx=2&sn=638800807c6b5c7759578b4b9e1d565d&scene=21#wechat_redirect)

[智能工业物联网网关新产品开发任务书.docx](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567787&idx=2&sn=620933a95444ec361d98da5fc1f1da98&scene=21#wechat_redirect)

[电源硬件验证与测试用例编写手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567313&idx=2&sn=363dd274654c8f3590c1c860623c39da&scene=21#wechat_redirect)

[硬件开发全流程手册（.docx 文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567403&idx=2&sn=6b8511c131bf596492e9c8724be216d5&token=2048927905&lang=zh_CN&scene=21#wechat_redirect)

[开关电源技术平台与产品预研管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567264&idx=2&sn=374c4e23a2a674c254f29274615f1a30&scene=21#wechat_redirect)

[产品总监主导嵌入式智能硬件市场调研手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567165&idx=2&sn=59e9eb93222e43f47328f42ecacc624e&scene=21#wechat_redirect)

[电源产品经理项目启动里程碑资料评审管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566969&idx=2&sn=9a3beaa09656b7cac804aad7bddf0134&scene=21#wechat_redirect)

[电源开发经理设计开发流程和规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566966&idx=2&sn=4a9569ebd0a6c25adb6e3fdf1af37332&scene=21#wechat_redirect)

[硬件经理方案评审与成本控制手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566835&idx=2&sn=7f95c948eafd554bfdf921da53eb597d&token=549077461&lang=zh_CN&scene=21#wechat_redirect)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️