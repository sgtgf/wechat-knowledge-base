# IIC通信转换IO引脚功能的电路方案

原创 电路一点通 2024-09-05 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/QXzACj4uzD\_U7Acn1oT6Jw](https://mp.weixin.qq.com/s/QXzACj4uzD_U7Acn1oT6Jw)

在开发项目的时候，如果单片机的UART串口通信数量不够，怎么办？

芯片哥介绍了其中的一个解决方案，是采用WK2124芯片，它就能实现扩展单片机的UART串口通信接口数量。只需要用单片机原来的1个SPI通信，就可以转换成4路UART通信。

![](D:\电脑文件\公众号知识库\电工_教育_学习\IIC通信转换IO引脚功能的电路方案_images\img_000_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

解决完了UART串口通信数量的问题，那如果单片机的IO引脚数量不够，又怎么办呢？

可能有工程师会说，选择一个引脚数量多的单片机型号不就解决了吗，多简单的问题啊。

是的，选择一个引脚数量多的单片机型号，的确是可以解决，而且还比较简单。只不过这只是其中的一个常用方法而已。

有没有不通过换单片机的型号来解决呢？做过软件代码开发的工程师都有体会，重新换一个单片机，对于程序的设计，是一个怎样的工作量。

如果是同一个品牌同一个系列的单片机，换一个型号这还好。如果是换品牌了，又换功能了，基本上就相当于程序需要重新开发了。

基于此，可以参考第二种方案

  

# HTR3355芯片

  

HTR3355芯片，是一个可以扩展单片机IO引脚数量的芯片，它与单片机的接口是IIC通信，也就是说单片机通过一个IIC通信，就可以增加IO引脚的数量。

![](D:\电脑文件\公众号知识库\电工_教育_学习\IIC通信转换IO引脚功能的电路方案_images\img_001_4295074a91ef.png)

HTR3355芯片---嘉兴禾润

芯片的左边，有两个标准的IIC通信引脚，一个是SDA，一个是SCL，单片机就是通过这两个引脚进行IO引脚数量的扩展。

扩展的IO引脚是在芯片的“右边”，分别是P0.0~P0.7和P1.0~P1.7。不难发现，HTR3355芯片总共可以扩展16个IO引脚数量。

每个扩展的IO引脚，它的工作电压在2.2V~5.5V之间。

  

# 应用电路

  

既然HTR3355芯片能实现扩展单片机的IO引脚数量，那具体在项目开发中，该如何使用呢？相信这个问题，有不少工程师会比较关心的吧。

![](D:\电脑文件\公众号知识库\电工_教育_学习\IIC通信转换IO引脚功能的电路方案_images\img_002_4295074a91ef.png)

HTR3355芯片应用电路

  

在硬件方面，只需要将芯片的SDA引脚、SCL引脚和INT引脚连接到单片机就可以了。其中INT引脚是芯片的中断输出引脚，也要连接到单片机的外部中断引脚。

在软件方面，工程师可以等效认为，HTR3355芯片的IO引脚就是单片机自身的IO引脚，单片机的IO引脚能干啥，它也能干啥。

比如读取每个IO引脚的电平状态，控制输出每个IO引脚的高低电平，这些功能在HTR3355芯片上也能完成。

假如芯片的P0.5引脚设置为输入引脚，平时的状态为高电平，如果引脚的电平被拉低到0V了，芯片的INT引脚就会向单片机输出一个中断信号。

单片机检测到有中断信号，就会让IIC通信去读取HTR3355芯片内部的寄存器，去判断到底是哪个IO引脚触发了中断信号。

其他的IO引脚功能，也是类似的，这样就实现了软件方面的开发设计问题了。

  

# 备注说明

  

需要强调的是，HTR3355芯片扩展的IO引脚，每个IO引脚都能自由地进行配置，可以配置输入和输出，互不影响。

芯片的每个IO引脚，它驱动电流的能力是要强于单片机IO引脚的，简单的一个例子是它能直接驱动LED灯，不需要借助三极管和MOS管。

芯片的AD0、AD1和AD2引脚，它们是IIC通信的地址选择引脚，如果没有涉及到级联的应用，直接连到GND就可以了。

  

总结下来，单片机的IO引脚数量不够，如果不想换单片机的型号，可以使用扩展IO引脚数量的方法，通过HTR3355芯片，只需要用IIC通信的2个引脚，就能将单片机的IO引脚数量扩大到16个。

____****👇👇👇**更多技术资料👇👇👇**__

![](D:\电脑文件\公众号知识库\电工_教育_学习\IIC通信转换IO引脚功能的电路方案_images\img_003_50f7299299c0.jpg)

## **一点通推荐**

[电子工程师自学速成-提高篇（512页 高清pdf文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523884&idx=2&sn=715054663619a1041c54f27fe0a20b4c&chksm=fcef7d4ecb98f4588a1cbdd416903beb946a126cf1d2d278c36da3b2ef364105e85958a68553&token=1494156528&lang=zh_CN&scene=21#wechat_redirect)    

[电子工程师必备-九大系统电路识图宝典.pdf(702页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)    

[开关电源环路设计与计算（45页）PDF-文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523296&idx=3&sn=3925f514288c3e99de2dcf1ac487edc8&chksm=fcef7882cb98f194be86616da328ea323e7516492ca890df66205a7bf73fbbfa532eb2664085&scene=21#wechat_redirect)    

[电源反馈设计速成篇.pdf（40页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523709&idx=2&sn=932246205d9b7972e390a64ae8fe7736&chksm=fcef7e1fcb98f709b9afc7ab90d8513e35b0f0f4f30ead525ec8c177c63c3e22400b6b920451&scene=21#wechat_redirect)     

[MOS管防倒灌电路设计及其过程分析,一目了然](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528803&idx=1&sn=d0026d8dcd21c03249401dc82249b741&chksm=fcef9201cb981b1772a86152006757b0c8e0386836151918acd8de682aedc76b97d4f5cf4281&scene=21#wechat_redirect)  

[DC-DC开关电源稳压芯片选用（7-40V转换5V和3.3V）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528820&idx=1&sn=a1d1c7451788762d1b0bcae050b308ea&chksm=fcef9216cb981b00d8df8b2babe8a9bcbe990a3399bece691afb09f27fc8c862b4e9602d1571&scene=21#wechat_redirect)    

[实用的防倒灌电路,倒灌问题如何解决?](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247529385&idx=1&sn=8f10f596f10ec39e76e01c185e0e568b&chksm=fcef90cbcb9819dd5e3967fe9815969e11c54d0354414ca76c667fc9c13ea30e8a3a83cee87b&scene=21#wechat_redirect)    

[高端MOS为什么要自举电路？自举电容、分立元件电路分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247528852&idx=1&sn=557433281289c22922c9b1ce3d3d07ad&chksm=fcef92f6cb981be0d6afd880ea297fa338f3c7cabce8753745cb9956e217e644fbcce1bbf298&scene=21#wechat_redirect)