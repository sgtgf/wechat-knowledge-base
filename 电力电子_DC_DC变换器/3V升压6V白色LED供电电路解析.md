# 3V升压6V白色LED供电电路解析

原创 电路一点通 2024-11-20 11:40 中国香港

> 原文地址: [https://mp.weixin.qq.com/s/t2VvRFenNRr2gzbFmMVpeg](https://mp.weixin.qq.com/s/t2VvRFenNRr2gzbFmMVpeg)

今天带大家了解如何将3V电压升到6V，点亮白色LED！这个电路特别适合低电压的便携应用，比如两节干电池就能轻松搞定💡～

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\3V升压6V白色LED供电电路解析_images\img_000_e21cec68a685.png)

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\3V升压6V白色LED供电电路解析_images\img_001_a8b37a87b291.other)

🔍 电路原理 核心元件👉IC\_LM2665，通过电荷泵原理把3V升压到6V。电容C1、C2和C3保证了电荷转换的平稳，而D1二极管保护输出电路不受反向电流影响。限流电阻R1和R2保护LED不被烧坏🔥。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\3V升压6V白色LED供电电路解析_images\img_002_5ba8de6d10e8.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\3V升压6V白色LED供电电路解析_images\img_003_dd160650008d.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\3V升压6V白色LED供电电路解析_images\img_004_595cd74f9913.jpg)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\3V升压6V白色LED供电电路解析_images\img_005_ea373bf88d66.png)

💡 优点

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\3V升压6V白色LED供电电路解析_images\img_006_fd423498a5db.png)

✅ 结构简单、适合低电压应用 ✅ 稳定输出，适合便携照明设备🌟 ⚠️ 注意事项 💡 电容质量很重要，选用低ESR电容提高效率 💡 芯片散热需注意，长时间工作时温度会升高 💡 负载电流增大可能导致电压不稳，建议控制LED电流。  

******进大家庭⭕圈探讨回复:****** ******交流******

  

▼ **往期精彩回顾** ▼

[汽车各传感器工作原理及排查步骤大全](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247493395&idx=1&sn=3b36eea34dd9b509bf0a75692be51629&chksm=c33d9faff44a16b993e0f2707214f3f62f3d8d002bc50a54a7d8658a049d37be409a8879955b&scene=21#wechat_redirect)  

[汽车外观基本构造图（各部位名称图解标注）](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247493105&idx=1&sn=f66d01f0fd32cc28ae54cceb95bb9032&chksm=c33d9d4df44a145b673768c578589b4b434f0e2d454ef6ac27f2725b8911d25e872cd8a44709&scene=21#wechat_redirect)

[一图看全：特斯拉核心零部件供应商](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247493097&idx=2&sn=23a1317139c3c8807efbe8b9becc782c&chksm=c33d9d55f44a144335c70d72f8b3448289ca21632eae2b792124cf937ed127965689a198c718&scene=21#wechat_redirect)  

[小米su7整车零部件供应商一览表](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247493091&idx=1&sn=e8854fb79ea5b56541f2a08e185c6607&chksm=c33d9d5ff44a1449a72d4962a8d674e95bc66e408e3c2d3024bf642f98a62f29be1d254c635c&scene=21#wechat_redirect)  

[DC-DC硬件电路基础知识-较全面](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247531531&idx=1&sn=5abdf76fa6b916d2ea29bcef1b4fcecf&chksm=fcef9f69cb98167f301aa550ca87f395e78913303b6b6d554cb3b7b298d7f432e7154dae9feb&scene=21#wechat_redirect)    

[两个MOS管背靠背串联，就会组成双向开关  
](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247531249&idx=1&sn=8001c4b0642c5143b30e6e1130c0702a&chksm=fcef9993cb981085ec126d7ea3f98b2c6b19ecf28366927cff44d9e529288cc852a97bf4a2be&scene=21#wechat_redirect)

[踩坑又给项目埋雷，这RS485自动收发电路设计](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247530963&idx=1&sn=8b66d17c3ded9495afcc875031010e10&chksm=fcef9ab1cb9813a77b6544b556527d29588fcf6abaf98430a0caeb4401200ba693aaba120862&scene=21#wechat_redirect)    

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分