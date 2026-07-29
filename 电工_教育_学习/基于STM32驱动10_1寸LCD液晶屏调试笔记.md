# 基于STM32驱动10.1寸LCD液晶屏调试笔记

原创 电路一点通 2025-05-16 12:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/nh5-j59JPoAj8KipOFKdHw](https://mp.weixin.qq.com/s/nh5-j59JPoAj8KipOFKdHw)

液晶屏是如何被点亮的，如何显示文字，如何触摸，都需要主控驱动液晶屏，都需要程序控制，通过配置硬件，可以驱动LCD屏幕。

-   [![图片](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

  

硬件stm32h743开发板，主频480M，带LTDC接口，可以直接驱动液晶屏

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_001_bbd9b5ebec01.jpg)

  

建立rtthread 工程，选择版本，芯片系列，串口号，调试器

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_002_cb7e4ebbc821.jpg)

  

点击CUBEMX,创建芯片配置

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_003_0b773b69a2f5.jpg)

  

时钟配置，外部时钟25M倍频最高主频480M，LTDC时钟和SRAM时钟

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_004_39d38441143b.jpg)

  

LTDC配置,ltdc是lcd控制器，可以直接控制LCD，设置显示分辨率，显示像素，RGB数据位

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_005_42addf8f9c86.jpg)

  

屏幕层设置

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_006_ddba0fac31d9.jpg)

  

LCD引脚配置，对应液晶屏RGB引脚，全部设置高速

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_007_55b683936fe0.jpg)

  

  

外部SRAM配置，LCD得显存是使用得SRAM,要开启SRAM,设置SRAM地址

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_008_3c351a1570e7.jpg)

  

外部SRAM配置

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_009_47a9e78d35c6.jpg)

  

工程配置

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_010_ee10953507b5.jpg)

  

  

.c.h文件配置

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_011_4094958fd628.jpg)

  

点击代码生成，关闭cubemx

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_012_c583d3773f1a.jpg)

  

回到rtthread studio添加

打点函数

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_013_8815dd4af2ec.jpg)

  

调用画线函数

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_014_ed0ec6bea5d4.jpg)

  

构建工程

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_015_500aed601d33.jpg)

  

点击下载工程

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_016_701c04c054e8.jpg)

  

下载启动画面

![](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_017_7bdc13a5b96f.jpg)

  

**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\基于STM32驱动10_1寸LCD液晶屏调试笔记_images\img_018_b46e8bcc08e0.jpg)**

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**