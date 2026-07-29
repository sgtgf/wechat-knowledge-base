# ADC输入的三种类型：单端，伪差分，真差分

原创 电路一点通 2024-07-04 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/iNCbWZwRBhclrttqmJVaVQ](https://mp.weixin.qq.com/s/iNCbWZwRBhclrttqmJVaVQ)

# 一、单端输入

如图所示,单端输入只有一一个输入引脚ADCIN ,使用公共地GND作为电路的返回端, ADC的采样值

\=ADCIN电压-GND的电压(0V)。这种输入方式优点就是简单,缺点是如果vin受到干扰,由于GND

电位始终是0V ,所以最终ADC的采样值也会随着干扰而变化。

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC输入的三种类型_单端_伪差分_真差分_images\img_000_ea6ac83a58b3.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC输入的三种类型_单端_伪差分_真差分_images\img_001_cb9825d9fe8b.png)

#   

# 二、真差分输入

而差分输入比单端输入多了-根线,最终的ADC采样值=(ADCIN电压)-(ADCIN-电压) ,由于通常这两根差分线会布在一起,所以他们受到的干扰是差不多的,输入共模干扰,在输入ADC时会被减掉，从而降低了干扰,缺点就是接线复杂-些。而且需要VIN+和VIN-两路反相的输入信号。

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC输入的三种类型_单端_伪差分_真差分_images\img_002_94cbc2db1941.jpg)

  

# 三、伪差分输入

为了既有差分输入的优点又有单端输入简单的优点,还有一种伪差分输入,通过把信号地连到ADCIN-端实现-种类似差分的连接,也具有一定的共模抑制能力,只是由于输入信号VIN的阻抗和其地线的阻抗不同,所以在受到干扰时产生的电压尖峰也不会相等,所以共模抑制能力并不是很强。

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC输入的三种类型_单端_伪差分_真差分_images\img_003_2139eec6bc11.jpg)

  

# 总结：

1、ADC的输入类型有三种，单端，伪差分，真差分。

（1）单端输入是Vin，内部ADC读取Vin和GND的差值;

（2）伪差分AIP-AIN，内部ADC读取AIP和AIN的差值，但允许AIN上有一个很小的共模电压，比如正负0.3V;

（3）真差分是AIP-AIN，其内部AIP和AIN分别有一个ADC，分别读取转换AIP-GND，和AIN-GND，再对这两个数字值做差，所以AIN上也可以接收很大的共模值；

2、根据以上可知，对于伪差分输入的ADC，单端信号加在差分输入端，差分负端接地（返回路径），则ADC输入的地线阻抗上耦合的共模量也不会对系统带来影响;

3.、差分放大器，是仪表放大器的一种，用于接收差模，抑制共模。而可以输出差分信号的放大器，是全差分放大器，其输出以ref为参考输出（真）差分信号，由前述可知，真差分信号接入伪差分输入的ADC是无法正确转换的。

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC输入的三种类型_单端_伪差分_真差分_images\img_004_14e1e1438024.png)

**推荐资料：  
**

-   [**电源设计经验50谈（99页），少走弯路**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523933&idx=2&sn=0ad0a9973b1e85a283137e9008a18821&chksm=fcef7d3fcb98f4292cb94b0f035dee4ffe5de2bc9fbcd1253ff5d19e6a45164fb675714ee92c&scene=21#wechat_redirect)
    
-   [**电子工程师自学速成-提高篇（512页 高清pdf文档）**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523884&idx=2&sn=715054663619a1041c54f27fe0a20b4c&chksm=fcef7d4ecb98f4588a1cbdd416903beb946a126cf1d2d278c36da3b2ef364105e85958a68553&scene=21#wechat_redirect)[电气识图入门基础.ppt 教材-143页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456243099&idx=2&sn=c535fde6f97f62968d10788df7ddc0ed&chksm=87c1095db0b6804b0e9310fc44c431d2dbc79facfc0420f5743a3cc279952f9f225547908dd1&scene=21#wechat_redirect)
    
-   [电子元器件识别与检测：全彩图文档资料（246页）](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456242922&idx=2&sn=5243ed16ff1b50d76ebe5d3175bd7489&chksm=87c1082cb0b6813ae9df99656fe6fa8a55293720cc953d91c02bbf308930485832f87136c05c&scene=21#wechat_redirect)
    
-   [**汽车内外构造图、示意图详解，学车、修车、造车无难事**](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247485910&idx=1&sn=07c35a23a01645daa969c774ebc78c07&chksm=c33e716af449f87c2ff768c88a937f907dcddfe781ac3abfff48e01f75b00cee724c8c35a47f&scene=21#wechat_redirect)
    
-   [**汽车机械式变速器设计（61页）ppt-资料**](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247485996&idx=2&sn=521c6edf2600e8d3607c4352dd6ab019&chksm=c33e7290f449fb862e5806fc0aa1b61f514428a2a22a1ea6c48871af9b47ef123ca2c376689d&scene=21#wechat_redirect)