# 【图谱】电路里无源器件vs有源器件核心区别

原创 电路一点通 2026-04-05 18:58 广西

> 原文地址: [https://mp.weixin.qq.com/s/aJXng-Q9XA6gFJN3adQ3yw](https://mp.weixin.qq.com/s/aJXng-Q9XA6gFJN3adQ3yw)

无源器件vs有源器件区别在哪里  
1️⃣无源器件（不用通电就能工作） 电路里的 “基础配角”，自身不放大信号、不产生电能，只负责被动响应。  
🎈电阻：限流、分压、匹配阻抗，贴片 / 直插都常见  
🎈电容：滤波、储能、隔直流通交流，电源电路必备  
🎈电感 / 磁珠：储能、滤波、抗干扰，高频电路和电源板大量用  
🎈变压器、晶振：也归无源，负责变压、提供时钟基准  
  
2️⃣有源器件（必须通电才能工作） 电路里的 “大脑与心脏”，能控制电流、放大信号、执行逻辑。  
🎈二极管、三极管、MOS 管  
🎈各类芯片：MCU、电源 IC、驱动芯片、存储芯片  
🎈光耦、继电器、可控硅等开关 / 隔离器件  
  
一点通推荐  
[电源产品经理项目启动里程碑资料评审管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566969&idx=2&sn=9a3beaa09656b7cac804aad7bddf0134&scene=142#wechat_redirect)  
[电源开发经理设计开发流程和规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566966&idx=2&sn=4a9569ebd0a6c25adb6e3fdf1af37332&scene=142#wechat_redirect)  
[智能化行业趋势洞察与合作规划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566768&idx=2&sn=9b56b2555afae3e08459f3627bbf7c8c&scene=142#wechat_redirect)  
[硬件经理方案评审与成本控制手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566835&idx=2&sn=7f95c948eafd554bfdf921da53eb597d&token=549077461&lang=zh_CN&scene=142#wechat_redirect)  
[硬件研发总经理统筹团队核心技术突破手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566776&idx=2&sn=f0695fc2aa067e620b02521d7cc95d31&token=542927284&lang=zh_CN&scene=142#wechat_redirect)  
[敏捷研发项目滚动式计划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567191&idx=2&sn=9a8fb8eefc74212bda6f0f07f00b8cd7&scene=142#wechat_redirect)  
[汽车研发制造公司总经理统筹全产业链及生产基地营运](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536602&idx=2&sn=919a907a69086a7f26b3720e3e0d6484&scene=142#wechat_redirect)  
[新能源汽车维修主管工作统筹与管理手册](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536552&idx=2&sn=1e2fc3ea32314332f1ded7d500611f67&scene=142#wechat_redirect)  
[新能源汽车经理(中高层）商务谈判能力手册](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536571&idx=2&sn=9b94a03acec674bfd1e1c3f5d29ec01f&scene=142#wechat_redirect)  
[汽车销售总监服务运营与团队管理手册（含配套落地模板）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536542&idx=2&sn=6fb9147a869497d775527733bb9facb2&scene=142#wechat_redirect)  
[半导体元器件研发项目全周期计划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566856&idx=1&sn=5181825e9f152fa4c76a1787f316f099&scene=142#wechat_redirect)  
[汽车集团副总裁供应链生态战略手册](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536656&idx=2&sn=e58131b6a4f55224bd920a67dd740cdb&scene=142#wechat_redirect)  
[上市公司董事长内部控制规范手册](https://mp.weixin.qq.com/s?__biz=Mzk0Mjc3ODcxMA==&mid=2247484792&idx=1&sn=e122baec78e25378e74f04136f9a141e&scene=142#wechat_redirect)  
[董事长应对突发应急事件预案手册](https://mp.weixin.qq.com/s?__biz=MzYzNDg1MDk4OQ==&mid=2247483656&idx=1&sn=e4f41e2354256e7dda0fb5dfcd239d38&scene=142#wechat_redirect)

![图1](D:\电脑文件\公众号知识库\电工_教育_学习\_图谱_电路里无源器件vs有源器件核心区别_images\img_000_8085ab8a2d04.png)

图1

![图2](D:\电脑文件\公众号知识库\电工_教育_学习\_图谱_电路里无源器件vs有源器件核心区别_images\img_001_fd0f0f48eb5d.png)

图2

![图3](D:\电脑文件\公众号知识库\电工_教育_学习\_图谱_电路里无源器件vs有源器件核心区别_images\img_002_c1d4d716774a.png)

图3

![图4](D:\电脑文件\公众号知识库\电工_教育_学习\_图谱_电路里无源器件vs有源器件核心区别_images\img_003_76092b12a9fa.png)

图4