# 反激电源主滤波电容存电及HV）引脚功能

原创 电路一点通 2025-11-03 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/XLKAtVsEYtWBG8p\_2fA6HQ](https://mp.weixin.qq.com/s/XLKAtVsEYtWBG8p_2fA6HQ)

断开AC输入电压，输出电源立刻下降到0：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\反激电源主滤波电容存电及HV）引脚功能_images\img_000_3ad851377030.png)

-   [![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\反激电源主滤波电容存电及HV）引脚功能_images\img_001_7fbf2dceba80.other)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

但是，此刻测量主滤波大电容的电压，仍然300V左右：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\反激电源主滤波电容存电及HV）引脚功能_images\img_002_499bf55d646f.png)

此时不要触摸板子，不然一定让你尝尝300V大电容的力量，此时用放电神器对电容进行放电：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\反激电源主滤波电容存电及HV）引脚功能_images\img_003_e17dd03cb4f3.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\反激电源主滤波电容存电及HV）引脚功能_images\img_004_78293e1dcc0c.png)

实际上，关了AC输入电源之后，这个主滤波电容的电会慢慢通过MOS的RCD滤波旁边的电阻消耗点，只不过时间很慢。

EBO:

**输入检测。EBO 引脚连接到外部分压电阻，用于检测输入电压。这样可以实现更精确的欠压启动/关闭（brown-in/-out）功能，并允许设置可调的阈值。**

**如果将 EBO 引脚短接到 PGND（功率地），则表示禁用外部电压检测功能，此时欠压启动/关闭功能将依赖内部通过 HV 引脚进行的检测。**

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\反激电源主滤波电容存电及HV）引脚功能_images\img_005_d8deb96934cc.png)

**HV:**

高电压（HV）引脚。HV 引脚内部集成了一个高压电流源，用于芯片的启动和正常运行。在启动和运行过程中，HV 会对输入电压进行采样，用于实现欠压启动/关闭（brown-in/-out）功能以及对一次侧峰值电流进行线路电压补偿。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\反激电源主滤波电容存电及HV）引脚功能_images\img_006_f36107e66757.png)

  

## **一点通推荐**

[DCDC降压辐射超标整改措施](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247556533&idx=1&sn=86e86e5878eaa02b47d4dfc96f9cc3e0&token=698231825&lang=zh_CN&scene=21#wechat_redirect)

[600W电源（PFC+LLC）EMC整改心得](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247556444&idx=1&sn=a761511721bbaac5c09dc18b447d34e4&token=698231825&lang=zh_CN&scene=21#wechat_redirect)

[电池分压电阻检测不准的原因及解决办法](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247556037&idx=1&sn=72587165068ed6c9dd5959ed8bed2574&token=698231825&lang=zh_CN&scene=21#wechat_redirect)

[比亚迪新能源汽车工厂分布、产能分析](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247530168&idx=1&sn=4b2c38577c2dcd20e93c64efdd34ff76&token=1669149721&lang=zh_CN&scene=21#wechat_redirect)

[电线平方数选错=埋雷！一张表+3句口诀](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456263463&idx=1&sn=b4b1637ac743d2c3ab296b600cb765ab&scene=21#wechat_redirect)

  

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️