# MOS管关断波形下降沿振荡解决办法

原创 电路一点通 2025-10-27 11:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/UZXIUnL2K71rTtEO1Ig4NQ](https://mp.weixin.qq.com/s/UZXIUnL2K71rTtEO1Ig4NQ)

## 问题阐述：

一个直流电机控制电路，部分原理图如下：

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断波形下降沿振荡解决办法_images\img_000_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断波形下降沿振荡解决办法_images\img_001_26ceb10b5932.png)

波形如下：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断波形下降沿振荡解决办法_images\img_002_ed402376cbe3.png)

## 原因分析：

  

**L**：线路寄生电感（如PCB走线、MOS管引脚电感）。

**C**：MOS管输出电容（Coss）、负载电容或布线电容。

关断时驱动欠阻尼，导致回路的寄生参数发生LC振荡，所以需要加大阻抗去消除这个振荡。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断波形下降沿振荡解决办法_images\img_003_0ca165078dcf.png)

## 解决方案：

**方法一：增大MOS的栅极电阻**

  

增大栅极驱动电阻（Rg\_off），减缓关断时的di/dt（但会增大开关损耗）。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断波形下降沿振荡解决办法_images\img_004_de5526954c97.png)

波形明显改善：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断波形下降沿振荡解决办法_images\img_005_f55a0e4ee30f.png)

**方法二：在MOS的DS极之间并联RC吸收电路**

电阻消耗振荡能量，电容限制电压尖峰。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断波形下降沿振荡解决办法_images\img_006_5d4e236257d8.png)

波形明显改善：

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断波形下降沿振荡解决办法_images\img_007_86cfbebc90c9.png)

方法三：电机两级并一个反向二级管做续流，但是板子本来就加过了

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断波形下降沿振荡解决办法_images\img_008_527209ce2457.png)

  

## **一点通推荐**

-   [PCB跨分割信号回流路径处理要点](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247555338&idx=1&sn=c4497e182b7dca0cded34c74c69e9dc3&token=1292179178&lang=zh_CN&scene=21#wechat_redirect)
    
-   [光耦电路设计与参数计算](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247555012&idx=1&sn=f690d3360e4de4715dc7ba74dc47c323&token=1292179178&lang=zh_CN&scene=21#wechat_redirect)
    
-   [三极管开关电路基极限流电阻计算](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247554397&idx=1&sn=39d0cecaeaad61e88cf7977975b04067&token=1292179178&lang=zh_CN&scene=21#wechat_redirect)
    
-   [中国十大汽车巨头市值营收天梯图](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247529380&idx=1&sn=d46e41b9fd9df954fe319d4c86fd99b5&token=1242896951&lang=zh_CN&scene=21#wechat_redirect)
    
-   [20种常用电路接线图解，附实物接线步骤](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456263238&idx=1&sn=d0117c1c3d5c8657f0500fbbf82f26fb&scene=21#wechat_redirect)
    

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管关断波形下降沿振荡解决办法_images\img_009_a0b60db42148.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️