# 自动调节LED亮度的电路设计

原创 电路一点通 2024-08-14 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/BL\_Nlag2e3ATVV1urSLVww](https://mp.weixin.qq.com/s/BL_Nlag2e3ATVV1urSLVww)

本文介绍了一种电路设计，可通过连续性或间断性改变LED灯亮度。电路使用电阻、电容、二极管、MOS管和按键开关。连续性变化利用电容充电回路，间断性变化通过间断按键实现。改变电阻阻值可调整亮度变化速度。

![](D:\电脑文件\公众号知识库\电工_教育_学习\自动调节LED亮度的电路设计_images\img_000_d7563bce1205.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

分享一个网上的电路设计，可以**连续变化或者间断性改变LED灯亮度**的电路。

![](D:\电脑文件\公众号知识库\电工_教育_学习\自动调节LED亮度的电路设计_images\img_002_afae192975fc.jpg)

元器件：这里用到**电阻、电容、二极管、MOS管和按键开关。**

**电路工作状态**

当电路通电时，此时按住左边的开关不动,LED会逐渐变亮，直到最大的亮度。那么接下来就可以按右边的开关，只要按一下灯就会立马熄灭。

不过，如果左边的开关不是一直按着，而是间断按键，那么就会看到，按一下，LED亮一下。

**这是什么工作原理？我们来分析下这个电路。**

**连续性变化**

它主要用到了一个电容的充电回路，当电路通电按住左边开关，电流会通过R1和R2以及按钮开关给电容充电，这个过程并非一瞬间完成的。

随着电容两端电压的升高，MOS管栅极电压也跟着升高。

当栅极电压高于MOS管的夹断电压，DS之间开始有电流流过，LED开始变亮。

随着MOS管栅极电压升高DS之间电流变大，LED逐渐变亮。

但按下右边开关时，电容就会发生放电。

放电回路通过电阻R4，由于前面充电回路是通过R1和R2，阻值较大，所以这个充电过程会比较慢。

也就是说放电速度只不过是一瞬间的事情，在放电这个时间可以明显看到LED亮度变化。

![](D:\电脑文件\公众号知识库\电工_教育_学习\自动调节LED亮度的电路设计_images\img_001_afae192975fc.jpg)

**间断性变化**

间断性按下左边的开关，按一下，就是给电容充一下电，这样栅极电压也会提高一点，DS之间电流跟着变化，LED灯更亮一点。

这个快慢是可以由自己来设计的。

只要改变R1或者R2的阻值，充电回路就会发生变化，电容的充电速度就会发生变化，那么LED灯亮度变化也会有快慢的变化。

![](D:\电脑文件\公众号知识库\电工_教育_学习\自动调节LED亮度的电路设计_images\img_003_fb0ae11ba4ae.other)

## **一点通推荐**

[暴力拆解9V（实际8.4V）USB锂电池（附电路图）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527784&idx=1&sn=2265f8761a95ada40b0b3cd3237eb944&chksm=fcef8e0acb98071c088e01eb9c052039fd365448481e68c9dfb47de06c4fe0e037e3525aa8e9&scene=21#wechat_redirect)

[常用反激式开关电源工作原理、电路设计、PCB绘制](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527749&idx=1&sn=eb284586e2dc7010b9e85688eccb4225&chksm=fcef8e27cb980731c4dc84e935087767dbdb4bf0933e99db31905c8ae636be5bcadf5b9d8608&scene=21#wechat_redirect)

[各种开关电源电路原理详细解剖](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527134&idx=1&sn=4cf0a2b373971bb636497d5f74d10de4&chksm=fcef89bccb9800aa976e15bb5e2c9a82d5cfb65dffcc50959e0521d99f921962bdc4dc1803f1&scene=21#wechat_redirect)    

[华为2024届校园招聘【硬件开发/设计工程师】试题-附答案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&scene=21#wechat_redirect)

[这4种防反接电路-正反极接反了会烧毁电子元器件](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527038&idx=1&sn=981d151c23fcf91126261adf7d50230f&chksm=fcef891ccb98000a4f421374eb2d5e740090856f717e29212457d4ea2c8343836419d621e635&scene=21#wechat_redirect)