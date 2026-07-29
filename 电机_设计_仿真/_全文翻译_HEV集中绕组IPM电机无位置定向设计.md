# 【全文翻译】HEV集中绕组IPM电机无位置定向设计


> 原文地址: [https://mp.weixin.qq.com/s/-kWqCfRgVzwFqgHd1KAe0A](https://mp.weixin.qq.com/s/-kWqCfRgVzwFqgHd1KAe0A)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_000_6e6d80aceda4.gif)**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

原文：：《Sensorless-Oriented Design of Concentrated-Winding IPM Motors for HEV Drive Application》——Y.Kano, T.Kosaka

* * *

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_001_34bdc79dd3a1.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_002_b78654fc12bd.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_003_143338d7ffec.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_004_1d2197f2b767.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_005_cc8e82f9b755.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_006_8927a867a7c0.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_007_6f40e597aaf4.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_008_3d0ea69f0634.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_009_76796b6171e9.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_010_1d4a1d2ceb50.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_011_8817c41dccd1.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_012_a0ae6b72e981.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_013_84993c8bc259.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_014_734b82cb1c69.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_015_356d30f6e12f.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_016_fc52c47b14dd.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_017_fbf6886cee0e.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_018_767569084b59.png)

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_019_6bf178d75a34.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_020_36bb5c4dc4ef.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_021_845a739b8889.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_022_a0a4dcf40f9d.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_023_c6c1b99d0c7c.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_024_e6ce1a48e24e.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_025_d28927ca5747.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_026_d8542cafd04d.png)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_027_4878c74e08c3.png)

* * *

感谢黄海林的翻译分享！

索取原文，请在留言区留下邮箱。

欢迎推荐优秀文献、国外电机最新咨询！

  

推荐链接：

[【电机内参】宝马工程师--分段斜极结构对同步电机振动噪音的影响研究](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484239&idx=1&sn=c4ffa79bffbc57fca9509b756f2ea1af&chksm=ea646055dd13e943f6e54b5b21da51bb3ee7cb9aabdf48c8ace0c3623ea665fc0d37c0a5cc55&scene=21#wechat_redirect)  

[【控制内参】低频信号注入的永磁同步电机无位置传感器的控制算法](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484206&idx=1&sn=d1a43a51c2a0ab0155d33e307ede43cb&chksm=ea646034dd13e9223d0b697c60982cac686c784e0dc72f7ea9d3b9f9fb66d042134a2342aabe&scene=21#wechat_redirect)  

[【电机内参】一种高绕组系数&高槽满率的电机方案](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484134&idx=1&sn=51cd2bd08b953f7334eacd9fc5088095&chksm=ea6461fcdd13e8eaa5b4c809fcf727f979ef1cd647b29619e0becd0c829a1ce63e1bc1382706&scene=21#wechat_redirect)

[【电机前沿】一种新颖的应用于混合动力汽车的磁场调制型双机械端口电机](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484111&idx=1&sn=cd7bf61262c4f1c1c4c337d0b333ad07&chksm=ea6461d5dd13e8c362236f82426829a18610659c08623e0c1bd11bbf4d501a26dc127c2dd061&scene=21#wechat_redirect)  

[【电机内参】永磁体新工艺对电机设计的挑战——晶界扩散技术(Grain-Boundary-Diffused Magnets)](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484088&idx=1&sn=2d1e138f1c826d5db98bf9024fc622db&chksm=ea6461a2dd13e8b4b3c2f03853845c81aea251848b2fe6187e8aad3e80c00b20329c1cd88d2b&scene=21#wechat_redirect)  

[【电机内参】东芝(TOSHIBA)电动/混动汽车电机技术发展解密](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484076&idx=1&sn=8d1d033fd276b5e819fe99291e802745&chksm=ea6461b6dd13e8a09a3b7a93bfb2f1b42ef92b48c011fd4ab01fd357da4a849bd3a383a81df5&scene=21#wechat_redirect)  

[【电机内参】通用电动汽车和混合动力汽车的电机技术解密](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484056&idx=1&sn=118f1786cfe0d4f9ce8cf1228a6eabbd&chksm=ea646182dd13e89447167a680b8e00dd138f2497d8fc2466a442b5ef8861cc6f4ae0759bf5e2&scene=21#wechat_redirect)  

  [玩转"Hair-Pin winding"——揭开新能源汽车发卡电机的神秘面纱](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484022&idx=1&sn=00df943e7995299fe6aa3bee71327dba&chksm=ea64616cdd13e87ac3b356cd29b2ab4ec33577929e70d9ebc4662fafa92daed6fc8c904f5010&scene=21#wechat_redirect)

  

长按图片，识别二维码，关注我哟

> ![](D:\电脑文件\公众号知识库\电机_设计_仿真\_全文翻译_HEV集中绕组IPM电机无位置定向设计_images\img_028_d7f135e99ea3.png)