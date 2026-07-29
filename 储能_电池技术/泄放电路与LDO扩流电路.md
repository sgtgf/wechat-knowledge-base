# 泄放电路与LDO扩流电路

原创 电路一点通 2026-04-19 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/NYn2c6aZ2XP3zKHb0xsKsQ](https://mp.weixin.qq.com/s/NYn2c6aZ2XP3zKHb0xsKsQ)

1.  直接用并联电阻的方式进行能量泄放，这种方式简单直接但是电阻会损耗掉一定能量：
    

![](D:\电脑文件\公众号知识库\储能_电池技术\泄放电路与LDO扩流电路_images\img_000_62e3d9bf5cd3.png)

安规电容旁边的 电阻 ：

![](D:\电脑文件\公众号知识库\储能_电池技术\泄放电路与LDO扩流电路_images\img_001_c5993f223ecb.png)

  

2.三极管泄放电路：针对于大功率场景电阻不便于直接使用的时候，主要目的是 电源 断开时泄放大电容C1的能量。利用了三极管导通条件：集电结正偏，发射结反偏三极管导通+硅二极管压降0.7v原理

![](D:\电脑文件\公众号知识库\储能_电池技术\泄放电路与LDO扩流电路_images\img_002_d7c9cf8d9ecc.png)

  

LDO 扩流电路 ：

按照0.7V作为 TIP42C 导通的条件，  当 1117 工作电流超过137mA 之后，  主要的电流就由 T1 提供。超过了200mA之后，  输出电压便随着电流增加而下降了。

![](D:\电脑文件\公众号知识库\储能_电池技术\泄放电路与LDO扩流电路_images\img_003_5d51e9a92a1c.png)

## **一点通推荐**

  

[硬件设计开发指导手册-docx文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567287&idx=2&sn=df35cb4391c24e71b35a23e3bccc67f6&scene=21#wechat_redirect)

[硬件经理项目瓶颈识别与解决方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567730&idx=2&sn=2fd06f74f985191e80ed327ba9e6780a&payreadticket=HLQ3FqBHScQRz2gNddKSU5A3TtcPs0JUNzTp4X22J7_eFVErigHM4Ta9l2JnYAEGJmq9oSc&scene=21#wechat_redirect)  

[研发经理主导电源ODM项目全流程手册（附:考核与追责机制）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567614&idx=1&sn=fe1657b3c7845fb3eef985772dce178b&scene=21#wechat_redirect)

[硬件产品开发与量产全流程管理手册（EVT/DVT/PVT/MP）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567720&idx=2&sn=638800807c6b5c7759578b4b9e1d565d&scene=21#wechat_redirect)

[电源硬件验证与测试用例编写手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567313&idx=2&sn=363dd274654c8f3590c1c860623c39da&scene=21#wechat_redirect)

[硬件开发全流程手册（.docx 文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567403&idx=2&sn=6b8511c131bf596492e9c8724be216d5&token=2048927905&lang=zh_CN&scene=21#wechat_redirect)

[开关电源技术平台与产品预研管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567264&idx=2&sn=374c4e23a2a674c254f29274615f1a30&scene=21#wechat_redirect)

[敏捷研发项目滚动式计划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567191&idx=2&sn=9a8fb8eefc74212bda6f0f07f00b8cd7&scene=21#wechat_redirect)

[产品总监主导嵌入式智能硬件市场调研手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567165&idx=2&sn=59e9eb93222e43f47328f42ecacc624e&scene=21#wechat_redirect)

[电源产品经理项目启动里程碑资料评审管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566969&idx=2&sn=9a3beaa09656b7cac804aad7bddf0134&scene=21#wechat_redirect)

[电源开发经理设计开发流程和规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566966&idx=2&sn=4a9569ebd0a6c25adb6e3fdf1af37332&scene=21#wechat_redirect)

[智能化行业趋势洞察与合作规划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566768&idx=2&sn=9b56b2555afae3e08459f3627bbf7c8c&scene=21#wechat_redirect)

[硬件经理方案评审与成本控制手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566835&idx=2&sn=7f95c948eafd554bfdf921da53eb597d&token=549077461&lang=zh_CN&scene=21#wechat_redirect)

[硬件研发总经理统筹团队核心技术突破手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566776&idx=2&sn=f0695fc2aa067e620b02521d7cc95d31&token=542927284&lang=zh_CN&scene=21#wechat_redirect)

[半导体元器件研发项目全周期计划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566856&idx=1&sn=5181825e9f152fa4c76a1787f316f099&scene=21#wechat_redirect)

  

![图片](D:\电脑文件\公众号知识库\储能_电池技术\泄放电路与LDO扩流电路_images\img_004_438ecdc46b4c.other)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️