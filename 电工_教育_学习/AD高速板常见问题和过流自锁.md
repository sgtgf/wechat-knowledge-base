# AD高速板常见问题和过流自锁

原创 电路一点通 2026-05-09 11:28 广西

> 原文地址: [https://mp.weixin.qq.com/s/unZVg9YwwtRkJgQRymDFvg](https://mp.weixin.qq.com/s/unZVg9YwwtRkJgQRymDFvg)

可以使用电机减速器来增大电机的扭矩，低速运行的步进电机更要加上减速机

减速电机就是普通电机加上了减速箱，这样便降低了转速增大了扭矩

HDMI布线要求：

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_000_00a4038a86c8.png)

如要蛇形使其等长，不要在HDMI的一端绕线。

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_001_3b6d0cb3e373.png)

HDMI走线时两边拉线，中间接在一起。CPU端删除过孔。

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_002_8e78979fd15c.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_003_4392833750ae.png)

可以添加过孔在差分线之间并手动设置过孔的直径来调整差分线的间距问题。

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_004_3cf4a97c1648.png)

  

选中器件打开属性点击小锁图标即可锁定指定器件。

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_005_b6fd4fd5edb9.png)

选中一段线的一部分按Tab键即可选中整条线。属性里可以查看线长便于调成差分线等长。绕线等长的2倍规范。

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_006_c74d0f2efe02.png)

RJ45网口模块走线注意：

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_007_72f31f117cf3.png)

  

RP可以触发测量两线之间线宽。

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_008_e9c0f2a3e32a.png)

差分线的包地处理：左右边的地过孔最好进行错位打孔。

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_009_85800e7ffbc7.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_010_f67e936107bd.png)

EGND:外壳地

切换到英文大写模式，然后单击Q即可进行切换mm / mil

  

共模干扰就是指两条信号线与地之间的干扰信号，差模干扰就是两条信号线间的干扰信号。

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_011_7c44e80c2542.png)

来源一般有两种：

1、传导干扰主要就是地线电位不稳定带来干扰，地线电位如果发生浮动，那地线与信号线间的电压就会不稳定也就是共模电压不稳定，即产生了共模干扰。若两根线上的共模干扰电压不一致则还会使这两根信号线的差值发生浮动，引起差模干扰。我们常将信号线做成双绞线的原因就是让两根信号线的空间位置相对接近使它俩的共模干扰电压一致从而尽可能的消除了差模干扰，如果我们想得到的是信号线的差值，这样做就会大大减小误差。

2、空间耦合干扰空间中变化的电磁场在信号线上产生压降带来共模和差模干扰。

电路中常见的防护器件：

半导体放电管-TSS：

当浪涌电压大于VBO时，TSS会产生负阻效应，瞬时从高阻变低阻，将浪涌信号导入地上，从而保护电路。TSS通流量很大，当导通电流小于维持电流IH后又恢复常态。响应时间为纳秒级。

热敏电阻-PTC/NTC

气体放电管-GDT

压敏电阻-MOV:在正常电压下相当一个很小的电容，但电路出现过电压时，它的内阻急剧下降并迅速导通，其工作电流增大几个数量级。它与电路并联使用，保护电路不受开关或雷击所产生的突波影响。

瞬态电压抑制管-TVS:TVS管的工作 类 似于普通的稳压管，是箝位型的干扰吸收器。其应用是与被保护设备并联使用。TVS具有极快的响应时间（亚纳秒级）和相当高的浪涌吸收能力。

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_012_43c538505215.png)

过流自锁电路:

过流自锁电路是一种用于保护电子设备免受过电流损害的电路。它由以下几个部分组成：

采样环节：这一环节负责采集电流信号。通常，一个采样电阻与负载串联，以感应负载电流的变化。当电流超过预设的阈值时，采样电阻上的电压也会相应升高。

保护环节：在这个环节中，电压信号被放大并与其他参考电压进行比较。如果 检测 到过电流，比较器会输出高电平，触发后续的保护动作。

控制 驱动环节：当过电流发生时，控制驱动电路会响应比较器的输出信号，采取相应的保护措施。常见的控制驱动电路包括驱动继电器或晶体管，用于切断电源或降低负载电流。

自锁环节：为了防止过流状态消失后电路自动复位，需要引入自锁环节。自锁电路通常包括一个触发器或逻辑门电路，一旦过流发生，就会保持触发状态，直到过流原因解除并手动复位。过流自锁电路在检测到过电流时，会自动切断电源或降低负载电流，以保护电子设备免受过电流的损害。同时，自锁功能确保了只有在过流原因解除后，电路才会恢复正常工作状态。在过流自锁电路中，自锁的解除通常需要采取一些人工干预的措施,例如跳闸后把闸拉上。

![](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_013_c121932199f8.png)

  

## **一点通推荐**

[硬件测试用例规范手册.docx](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567942&idx=2&sn=31e81f733e79a056552dc93935c47702&scene=21#wechat_redirect)

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

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\AD高速板常见问题和过流自锁_images\img_014_1539b38016c7.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️