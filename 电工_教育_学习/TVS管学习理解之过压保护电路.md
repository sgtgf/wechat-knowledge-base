# TVS管学习理解之过压保护电路

原创 电路一点通 2026-04-06 19:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/JXZRbp7Bm3-loc0A\_4lYcw](https://mp.weixin.qq.com/s/JXZRbp7Bm3-loc0A_4lYcw)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\TVS管学习理解之过压保护电路_images\img_000_a19f8f2e335f.png)

TVS管学习理解记录  
前面我们讲了TVS管的相关关键参数学习，上面的连接可以前往，除了外部插拔的接口经常用到，那么还有就是 电源 的过压保护也是经常用到之一

## 一、过压保护电路

实际应用举例  
实际应用举例  
这里注意下，过压保护我们用的是稳压管而不是TVS管，其实也可以用TVS  
简单来说：  
**• 稳压管 主要用于电压钳位和稳压，工作在反向击穿区的稳态下。对于电源的，可以用稳压管  
• TVS管 主要用于瞬态电压抑制和过压保护，响应速度极快，用于应对瞬间脉冲。所以在端口保护的时候必须要用TVS**  
他们符号基本一样，注意区分  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\TVS管学习理解之过压保护电路_images\img_001_7b7781937c18.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\TVS管学习理解之过压保护电路_images\img_002_c32d837efa59.png)  
我们来分析一下这个电路，这里用的是 PNP 和PMOS，不太常用~但实用  
需要先确定一个过压保护点（V\_trip），即希望输入电压超过多少伏时关闭负载。假设您希望保护点为 15V。  
核心设计方程（忽略Q4基极电流）：  
当 VIN = V\_trip时，Q4应处于导通与截止的临界点，此时其 Vbe ≈ 0.65V（硅管导通阈值）。  
因此，在临界点有：  
V\_R20 = Vz(D3) = 12V  
V\_R21 = V\_trip - Vz(D3) - Vbe(Q4)  
V\_R21 / R21 = V\_R20 / R20  
(V\_trip - Vz - Vbe) / R21 = Vz / R20  
**步骤1：设定过压保护点 V\_trip**  
我们以 V\_trip = 15V 为例计算。  
**步骤2：确定基准电压 Vz**  
使用BZT52C12，其标称Vz=12V。计算时建议使用其最小值，以确保在最坏工艺条件下保护点也不会后移（即保护更“积极”）。根据数据，Vz\_min = 11.4V。我们取 Vz = 11.4V 进行计算。  
**步骤3：计算电阻比例**  
代入 公式 ：  
(15V - 11.4V - 0.65V) / R21 = 11.4V / R20  
(2.95V) / R21 = 11.4V / R20  
因此：  
R20 / R21 = 11.4V / 2.95V ≈ 3.86  
**步骤4：选取具体电阻值并校验电流**  
• 原则：流过R20、R21的电流应远大于Q4的基极电流（可忽略基极电流影响），同时功耗可控。  
• 计算：若取R21 = 10kΩ，则R20 ≈ 3.86 \* 10kΩ = 38.6kΩ，取标准值 R20 = 39kΩ。  
• 校验电流：在VIN=15V时，流过 电阻 的电流I = (15V - 0.65V) / (39kΩ + 10kΩ) ≈ 0.29mA。功耗P\_R20 = I² \* R20 ≈ 3.3mW，功耗很低，安全。  
**步骤5：回算实际保护点范围**  
由于电阻公差和Vz离散性，实际保护点是一个范围：  
• 最高保护点（当Vz取最大值12.6V，电阻为标称值）：  
V\_trip\_max = 12.6V + 0.65V + (12.6V \* R21/R20) = 12.6 + 0.65 + (12.6 \* 10/39) ≈ 16.1V  
• 最低保护点（当Vz取最小值11.4V，电阻为标称值）：  
V\_trip\_min = 11.4V + 0.65V + (11.4V \* 10/39) ≈ 14.6V  
因此，保护点大约在14.6V至16.1V之间动作，中心值约15.3V。 这个范围对于12V 系统 是合理的。

### 1.1、电路情况分析

**第① 种情况**：当正常输入12Vin时，稳压管不导通，PNP不导通，VGS(th)形成负压-3V，达到导通条件，PMOS导通，系统正常供电

**第② 种情况**：当正常超过12Vin时，稳压管导通，PNP导通，VGS(th)约等于0V，达不到导通条件，PMOS不导通，系统不能正常供电，达到保护目的  
**第③ 种情况**：如果输入的是负压呢？此时稳压管正向导通，这个回路的理论电流为：I = \[0V - (-12V + 0.7V)\] / 10kΩ ≈ 11.3V / 10kΩ = 1.13 mA。从功耗角度看，元件是安全的，虽然电流很小，但这不是其标称的工作条件，长期或反复的应力可能影响其可靠性。不过一般基本不会坏，小问题  
可以 优化 的地方，那就是再加一个二极管，一次性解决了**防反接和高效供电**两个问题  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\TVS管学习理解之过压保护电路_images\img_003_8aee655ecfed.png)

还有一个方法就是D4采用双向TVS管，也是目前的主流，相应更改，但不但能持续保护，时间久了容易烧毁，不过对于电源保护具有非常快的响应，因为TVS管瞬间钳位是ns级  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\TVS管学习理解之过压保护电路_images\img_004_03536b1bb512.png)

## 总结

例如：以上就是今天要讲的内容，本文简单介绍了过压保护电路，希望能够帮助到大家，如有错误欢迎指正  
  

## **一精选推荐**

[敏捷研发项目滚动式计划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567191&idx=2&sn=9a8fb8eefc74212bda6f0f07f00b8cd7&scene=21#wechat_redirect)  

[产品总监主导嵌入式智能硬件市场调研手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567165&idx=2&sn=59e9eb93222e43f47328f42ecacc624e&scene=21#wechat_redirect)  

[电源产品经理项目启动里程碑资料评审管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566969&idx=2&sn=9a3beaa09656b7cac804aad7bddf0134&scene=21#wechat_redirect)

[电源开发经理设计开发流程和规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566966&idx=2&sn=4a9569ebd0a6c25adb6e3fdf1af37332&scene=21#wechat_redirect)

[智能化行业趋势洞察与合作规划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566768&idx=2&sn=9b56b2555afae3e08459f3627bbf7c8c&scene=21#wechat_redirect)

[硬件经理方案评审与成本控制手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566835&idx=2&sn=7f95c948eafd554bfdf921da53eb597d&token=549077461&lang=zh_CN&scene=21#wechat_redirect)

[硬件研发总经理统筹团队核心技术突破手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566776&idx=2&sn=f0695fc2aa067e620b02521d7cc95d31&token=542927284&lang=zh_CN&scene=21#wechat_redirect)

[半导体元器件研发项目全周期计划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566856&idx=1&sn=5181825e9f152fa4c76a1787f316f099&scene=21#wechat_redirect)

[汽车集团副总裁供应链生态战略手册](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536656&idx=2&sn=e58131b6a4f55224bd920a67dd740cdb&scene=21#wechat_redirect)

[上市公司董事长内部控制规范手册](https://mp.weixin.qq.com/s?__biz=Mzk0Mjc3ODcxMA==&mid=2247484792&idx=1&sn=e122baec78e25378e74f04136f9a141e&scene=21#wechat_redirect)

[电气总工程师客户项目按时交付全流程管控](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456267091&idx=2&sn=6b79568dd07b27dcc585d5175acd1d2a&scene=21#wechat_redirect)  

[成为优秀团队领导者-新范式与实践指南 · 2026](https://mp.weixin.qq.com/s?__biz=MzkyNzc4Njk1Mg==&mid=2247484171&idx=1&sn=3392329099f613536e3a3febd3bba7b3&scene=21#wechat_redirect)

[董事长应对突发应急事件预案手册](https://mp.weixin.qq.com/s?__biz=MzYzNDg1MDk4OQ==&mid=2247483656&idx=1&sn=e4f41e2354256e7dda0fb5dfcd239d38&scene=21#wechat_redirect)  

[董事长10个破局思维扭亏为盈](https://mp.weixin.qq.com/s?__biz=MzYzNDg1MDk4OQ==&mid=2247483693&idx=1&sn=e5ea589343244778c9ade0ba13350e2e&scene=21#wechat_redirect)  

[集团董事长各事业部绩效考核手册（完整版）](https://mp.weixin.qq.com/s?__biz=MzYzNDg1MDk4OQ==&mid=2247483713&idx=1&sn=d7dd486bf0d145b3c6f255ab4c2a76a7&scene=21#wechat_redirect)  

  

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\TVS管学习理解之过压保护电路_images\img_005_7b0f20b3e0d7.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\TVS管学习理解之过压保护电路_images\img_006_b2cb27eba44a.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️