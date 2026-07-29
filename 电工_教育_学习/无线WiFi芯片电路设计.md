# 无线WiFi芯片电路设计

原创 电路一点通 2026-04-22 11:00 广东

> 原文地址: [https://mp.weixin.qq.com/s/87Bc-iAsXM8FvvtWw3QokQ](https://mp.weixin.qq.com/s/87Bc-iAsXM8FvvtWw3QokQ)

一、无线WiFi芯片具有的管脚  
对于射频信号，为了增强无线WiFi芯片的抗干扰能力，一般会采用

差分信号的处理方式，也就是说，无线WiFi芯片会以差分形式将信号发送出去，同时外部电路也必须为无线WiFi芯片提供差分射频信号的输入。如下图所示，红色方框内的四只管脚就是这个无线WiFi芯片的差分射频信号的输入，:输出管脚，也是最重要的射频信号管脚。Atheros（现被高通收购）一般都是差分输入和输出，Ralink有部分芯片采用输入为差分信号，而输出为单端信号，通过对比发现，Atheros考虑的问题更周全，性能也相对更稳定。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\无线WiFi芯片电路设计_images\img_000_f290ce374aeb.png)  
二、无线WiFi芯片发送的差分信号  
无线WiFi芯片发送的差分信号，功率放大电路处理的是单端信号，平衡器通常用来处理差分信号的问题，除此之外，电感和电容都能够改变信号的相位，从差分信号到单端信号，基本的方法就是用电感和电容组成两条不同的通路，这样，经过处理电路的两路信号就在相位上相差了180°，从而使原本相位相差 180°的差分信号同相，得到单端信号。相反，使单端信号通过两条不同的通路，就得到了差分信号。  
  

方法一，使用平衡器。原本相位相差180°的差分信号经过平衡器:(Balun,俗称巴伦)，就可以得到合二为一的单端射频信号。如下图所示，图中的 F1 就是一个平衡器,差分信号RFOUT\_P和RFOUT\_N经过F1得到单端信号RF\_OUT。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\无线WiFi芯片电路设计_images\img_001_5a304ea4edd9.png)  
方法二，使用分立元件，构建巴伦电路，配套ADS软件进行仿真。典型的使用分立元件的处理电路如下图所示  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\无线WiFi芯片电路设计_images\img_002_89bec1145717.png)  
2.1 平衡器的参数与选择  
在 Atheros 的方案中，平衡器往往使用的很多，平衡器的主要参数和简要的选型指南如下：  
不平衡阻抗  
平衡阻抗  
工作频率  
不平衡端口回波损耗  
相位变化  
插入损耗  
例如，常用的平衡器 HHM1711D1 典型参数如图 2-1所示。这样我们在设计是就可以根据我们的需求选择合适的平衡器了  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\无线WiFi芯片电路设计_images\img_003_75e5a64695ff.png)  
  

三、收发器接收的差分信号  
收发器接收的信号来自于前端的低噪声放大器，和功率放大器一样，低噪声放大器处理的也是单端射频信号，这样，我们必须将低噪声放大器输出的信号进行转换。同样，对于低噪声放大器的输出信号同样可以使用平衡器和使用分立元件。  
先来介绍使用平衡器的方案。在 AP51 中，采用了如下图所示的平衡器电路。单端信号 RF\_IN 经过平衡器 F5 后得到差分的射频信号 RFIN\_P和 RFIN\_N。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\无线WiFi芯片电路设计_images\img_004_7979598eb168.png)  
四、无线芯片电源管脚  
收发器一般会有很多个电源管脚，可以大概分为几类，如下图，一般会具有主电源管脚，核电压电源管脚，电源管脚，锁相环(Phase LockLoop，PLL)电源管脚等。  
在射频电路设计中，重点关注模拟电源。对于射频电路的供电，必须用线性稳压电源(LDO)，纹波小，稳定性高，有助于快速响应。  
对于收发器的电源管脚，通常的处理方法就是在每个电源的管脚处都放置个 0.1uF 的电容，耗电比较大的管脚旁，需要放置更大容量的电容，1-10uF 或者更大。一般来说，收发器的模拟电源供电和数字电源供电要用电感或者磁珠隔开。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\无线WiFi芯片电路设计_images\img_005_ee275bd59f84.png)

## **一点通推荐**

  

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

  

[](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\无线WiFi芯片电路设计_images\img_006_a19b4a0eab96.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️