# PCB的抄板五大步骤

原创 硬件笔记本 2024-03-08 07:45 四川

> 原文地址: [https://mp.weixin.qq.com/s/gjNJ02Uq0y3PB9lQBNPQ4w](https://mp.weixin.qq.com/s/gjNJ02Uq0y3PB9lQBNPQ4w)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

抄板，就是在已经有电子产品和电路板实物的前提下，利用反向技术手段对电路板进行逆向解析，将原有产品的文件、物料清单、原理图等技术文件进行1:1的还原操作，然后再利用这些技术文件和生产文件进行制板、元件焊接、电路板调试，完成原电路样板的整个复制。

![](PCB的抄板五大步骤_images/img_002_e7209ba831f6.png)

  

一、拿一块PCB板，首先需要在纸上记录好所有元气件的型号，参数以及位置，尤其是二极管、三级管的方向，IC缺口的方向。用数码相机拍两张元器件位置的照片。

二、拆掉所有元件，要将PAD孔里的锡去掉。用酒精将板子擦洗干净，然后放入扫描仪，在扫描仪扫描的时候要稍调高一下扫描的像素，得到较清晰的板子图像。再用水纱纸将顶层和底层轻微打磨，打磨到铜膜发亮，放入扫描仪，启动PHOTOSHOP，用彩色方式将两层分别扫入。注意，PCB在扫描仪内摆放一定要横平竖直，否则扫描的图象就无法使用。

三、调整画布的对比度，明暗度，使有铜膜的部分和没有铜膜的部分形成强烈对比，然后将图转为黑白，检查线条是否清晰，如果不清晰，就要继续调节。如果清晰，将图存为黑白BMP格式两个文件，如果发现图形有问题，还需用PHOTOSHOP进行修正。

四、将两个BMP格式的文件分别转为PROTEL格式文件，在PROTEL中调入两层，如果两层的PAD和VIA的位置基本重合，表明前几个步骤做的很好，如果有偏差，则重复第三步，直到吻合为止，将TOP层的BMP转化为TOP.PCB，注意要转化到SILK层，就是黄色的那层，然后你在TOP层描线就是了，并且根据第二步的图纸放置器件。画完后将SILK层删掉,不断重复知道绘制好所有的层。

五、在PROTEL中将TOP.PCB和BOT.PCB调入，合为一个图就OK了。用激光打印机将TOP LAYER，BOTTOM LAYER分别打印到透明胶片上(1：1的比例)，把胶片放到那块PCB上，比较一下是否有误，如果没错，就算成功。

由于电子产品都是由各类电路板组成控制部分进行工作，因此，利用PCB抄板这样一个过程，可完成任何电子产品全套技术资料的提取以及产品的仿制与克隆。

硬件工程师及从业者都在关注我们

![](PCB的抄板五大步骤_images/img_003_58147eba07eb.gif) ![](PCB的抄板五大步骤_images/img_004_9b53a964efd5.gif) ![](PCB的抄板五大步骤_images/img_005_75db8c1036fb.gif) ![](PCB的抄板五大步骤_images/img_006_0b6ae33611dc.gif) ![](PCB的抄板五大步骤_images/img_007_365c6cd9f8bb.gif) ![](PCB的抄板五大步骤_images/img_008_2da1ccbac0ae.gif) ![](PCB的抄板五大步骤_images/img_009_7446ffe5e3b8.gif) ![](PCB的抄板五大步骤_images/img_010_d246b538f592.gif)

![](PCB的抄板五大步骤_images/img_011_3352ab08e99b.gif) ![](PCB的抄板五大步骤_images/img_012_0f89804cd7eb.gif) ![](PCB的抄板五大步骤_images/img_013_f506b795c6ac.gif) ![](PCB的抄板五大步骤_images/img_014_97df29bd0f50.gif) ![](PCB的抄板五大步骤_images/img_015_d7c6fe8cd645.gif) ![](PCB的抄板五大步骤_images/img_016_19e2f7b6262a.gif) ![](PCB的抄板五大步骤_images/img_017_08d092bef8a0.gif) ![](PCB的抄板五大步骤_images/img_018_50889e54acde.gif)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。