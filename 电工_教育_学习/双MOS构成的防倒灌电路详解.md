# 双MOS构成的防倒灌电路详解

原创 电路一点通 2026-01-07 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/1HDdnQHviPd36mq4s5kixw](https://mp.weixin.qq.com/s/1HDdnQHviPd36mq4s5kixw)

![](D:\电脑文件\公众号知识库\电工_教育_学习\双MOS构成的防倒灌电路详解_images\img_000_8fe2104b9cdb.jpg)

1）当左侧控制信号为高电平时，三极管饱和导通，PMOS的栅极电压为低电平MOS管导通

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\双MOS构成的防倒灌电路详解_images\img_001_3edda18bc0ab.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

![](D:\电脑文件\公众号知识库\电工_教育_学习\双MOS构成的防倒灌电路详解_images\img_002_92ca7fe45927.jpg)

2）当控制信号为低电平时三极管截止

![](D:\电脑文件\公众号知识库\电工_教育_学习\双MOS构成的防倒灌电路详解_images\img_003_a5eb8eb9a10e.png)

3）PMOS管的栅极电压为高平MOS管截止

![](D:\电脑文件\公众号知识库\电工_教育_学习\双MOS构成的防倒灌电路详解_images\img_004_891e40550054.jpg)

4）如果这时输入电压VIN断开，或者前极电源不工作，并且输出端有大容性负载或者感性负载，或者电池的存在，输出电压就会通过MOS管的体二极管，传输到输入端，从而出现反灌的现象，可能会损坏前级电源

![](D:\电脑文件\公众号知识库\电工_教育_学习\双MOS构成的防倒灌电路详解_images\img_005_84411010ab30.png)

5）解决办法，多加一个PMOS

![](D:\电脑文件\公众号知识库\电工_教育_学习\双MOS构成的防倒灌电路详解_images\img_006_8182ee1a5c49.jpg)

6）当控制信号为高电平三极管饱和导通，两个MOS管的栅极电压都为0，Vin通过第一个MOS管的体二极管到达两个MOS管的源极![](D:\电脑文件\公众号知识库\电工_教育_学习\双MOS构成的防倒灌电路详解_images\img_007_d8fc232c9ab1.jpg)

7）所以两个MOS管都导通，输入电压通过两个MOS管给到输出电压

![](D:\电脑文件\公众号知识库\电工_教育_学习\双MOS构成的防倒灌电路详解_images\img_008_1514ca02de89.png)

8）当控制信号为低电平三极管截止，两个PMOS管的栅极为高电平，所以两个MOS管都截止，输入电压与输出电压互![](D:\电脑文件\公众号知识库\电工_教育_学习\双MOS构成的防倒灌电路详解_images\img_009_ecaef2c1f7d2.png)不干扰，

9）并且由于这两个MOS管的体二极管是反向连接的，一个体二极管导通，另一个体二极管就会反向截止，所以不会出现电压反灌到输入电压的现象

![](D:\电脑文件\公众号知识库\电工_教育_学习\双MOS构成的防倒灌电路详解_images\img_010_e40e182f26d5.png)

10）一些电源自动切换电路也是利用这种背靠背的MOS管电路，防止高电压灌入低电压

![](D:\电脑文件\公众号知识库\电工_教育_学习\双MOS构成的防倒灌电路详解_images\img_011_7691b439cc87.jpg)

## **一点通推荐**

[硬件-DCDC（BUCK）电路分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247563969&idx=1&sn=1284ffff3ca162eac43f4c113fb85fbf&token=717817220&lang=zh_CN&scene=21#wechat_redirect)

[3.3V与5V电压双向变换，PWM转电压到电流变换](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247564031&idx=1&sn=e3dcc5f84b342319cf3c95f562213b71&token=717817220&lang=zh_CN&scene=21#wechat_redirect)

[电感的饱和现象](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247563530&idx=2&sn=4a01ff9ee352b3c2e5e4a360ddf78497&token=717817220&lang=zh_CN&scene=21#wechat_redirect)

[STM32电机驱动板参数采集与处理](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247562259&idx=2&sn=e1d587318a3a55ff8ad2cac7b41e26d8&token=717817220&lang=zh_CN&scene=21#wechat_redirect)

[硬件工程师5年踩过的坑,可让新人少走弯路?](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247561932&idx=1&sn=726e23d4e8e2af638b11d3aaa7b961c6&token=717817220&lang=zh_CN&scene=21#wechat_redirect)

[200例电路，专治实操卡壳困境--“常用直流稳压电源电路应用”](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247561117&idx=1&sn=52cb24eca5cd8807dc2b6ce7ceb02fab&token=717817220&lang=zh_CN&scene=21#wechat_redirect)

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\双MOS构成的防倒灌电路详解_images\img_012_583ecf83b7f1.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️