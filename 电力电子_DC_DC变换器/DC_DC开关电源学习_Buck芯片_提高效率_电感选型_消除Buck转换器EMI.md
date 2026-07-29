# DC-DC开关电源学习：Buck芯片、提高效率、电感选型、消除Buck转换器EMI

原创 电路一点通 2025-01-12 11:32 广东

> 原文地址: [https://mp.weixin.qq.com/s/NQMuUzDGBxOommaaHHchFw](https://mp.weixin.qq.com/s/NQMuUzDGBxOommaaHHchFw)

## Buck芯片       

        部分芯片有SS引脚，该引脚为软启动引脚，特点是电压升高不是瞬间跳变而是慢慢升高到额定电压。![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_000_b731a343326a.png)

        同步整流的BUCK电路比普通的BUCK电路效率高，成本低。所以多用同步整流芯片，少用像LM2596这样的芯片（体积大，效率低，发热严重）。

## 提高效率的方法：

       1、使用 ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_001_82b627df0cb1.png)小的MOS管，将两个MOS管并联可以进一步减小MOS管的![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_002_82b627df0cb1.png)；

       2、使用DCR小的电感，开关频率越高，使用的电感越小 

       3、输出电容最好用多个MLCC（0.1uF、10uF、22uF），输入电容最好用一个大的固态电容加上几个小的贴片电容（1000uF、22uF、0.1uF）

        4、提高输出电流

## 电感选择：

        电感的选择取决于输入电压![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_003_594597ec9e2e.png)与输出电压![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_004_7688fffae585.png)的压差、所需输出电流![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_005_74220d9eb7f7.png)与芯片开关频率![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_006_c0e3d1ecb0fd.png)，计算公式如下：

        ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_007_a99efb258a3a.png)

计算出电感值后，购买略大于计算值的使用，电感越大电源的纹波越小，但效率越低，根据实际情况选择电感大小。

###         电感选型：

        常用电感有非屏蔽电感、半屏蔽电感、全屏蔽电感三类。

非屏蔽电感：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_008_4efdb0f1c61e.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_009_b0a20bdfec36.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_010_8b4313e5d251.png)

半屏蔽电感（就是漏了一半电感在外面，没全包住）：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_011_57738a7ec083.png)

全屏蔽电感（把线全部包住）：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_012_af619f9c88d5.png)

        非屏蔽电感会产生大量的漏磁，它们会进入其它回路和滤波元件中。在噪声敏感的应用中要使用半屏蔽或全屏蔽电感，敏感电路和回路要远离电感。特别是VO到FB的走线，要避开电感和二极管，特别注意不能和电感平行。

        所以最好使用全屏蔽电感，避免漏磁干扰电路。

## 消除Buck转换器中的EMI问题：

### 1、转换器中的EMI源头：

造成EMI问题的辐射源有两类：交变电场（高阻），交变磁场（低阻）。Buck架构DC/DC转换器中主要的辐射源通常是磁场。磁场辐射是由小型电流环中的高频电流形成的。电流环所生成的高频磁场会在离开环路大约0.16![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_013_fe90d3c82e50.png)以后逐渐转换为电磁场。现实中造成辐射超标的原因常常是应该极小化的环路变成了大的环路，或者是附加在线路上的导线形成了多余的辐射。这些大回路或导线所形成的天线效应将在总的辐射中发挥主要的作用。

### 2、转换器中的电流回路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_014_5a671248ecc1.png)

Buck架构DC/DC转换器中存在两个电流发生剧烈变化的主回路：

上图（b）所示为![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_015_3c7b48b5b267.png)引脚波形，![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_027_519f5b6b6317.png)区间Q1通，Q2关；![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_028_b72e4ff33c23.png)区间Q1关，Q2通。

        1.当上桥MOS管Q1导通，电流从电源流出，经Q1和L1后进入输出电容和负载，再经地线回流至电源输入端。在此过程中电流的交变成分会流过输入电容和输出电容。这里说的电流路径如上图红线所示，标记为![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_020_ac4534461f5a.png).

        2.当Q1截止以后，电感电流还会继续保持原方向流动，而同步整流开关MOS管Q2将在此时导通，这时电流经Q2、L1、输出电容流动并经地线回流至Q2，其回路如上图蓝线所示，标记为![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_019_8dd7da5c56d6.png).

        3.电流![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_018_ac4534461f5a.png)和![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_021_8dd7da5c56d6.png)都是不连续的，这意味着它们在发生切换的时候都存在陡峭的上升沿和下降沿，这些陡峭的上升沿和下降沿具有极短的上升和下降时间，因而存在很高的电流变化速度![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_031_8983e2d2c90d.png)，其中就必然有很多高频成分。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_023_a7437676a5c1.png)

        将整个电路拆成两个工作区域，一个是![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_026_6aba04a807bd.png)区域，一个是![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_030_b3c1a27f049d.png)区域。![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_032_6aba04a807bd.png)区域在![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_016_519f5b6b6317.png)时有电流，在![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_017_b72e4ff33c23.png)时没电流，电流变化率![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_022_8983e2d2c90d.png)大，生成的高频噪声就多。反观![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_025_b3c1a27f049d.png)区域，由于电感的存在，电流不能跳变，相对稳定，电流变化率![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_029_8983e2d2c90d.png)小，产生的高频噪声就少。所以进行Buck转换器PCB布局时，![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_024_6aba04a807bd.png)区域的面积应当尽可能设计的小一点。

        芯片的VIN引脚和GND引脚之间要接一个0805封装的COG（最好）或者X7R（便宜）0.1uF电容，这个小电容越靠近芯片的VIN和GND引脚越好，在此小电容旁边再并联大容量MLCC电容。例如10uF或者22uF的0805电容。

        芯片开关频率小于等于5MHz，VIN引脚和GND引脚之间就用一个0.1uF的0805COG电容；大于5MHz就使用0.01uF的电容。

        SW引脚与FB引脚要越远越好

## 3、输入和输出的滤波处理

        理想情况下，输入、输出电容对于Buck转换器的开关电流来说都具有极低的阻抗。但实际上，电容都存在ESR和ESL，它们都增加了电容的阻抗，并且导致上面出现额外的高频电压跌落。这种电压跌落将在电源供应线路上和负载连接电路上形成相应的电流变化。

        由于Buck转换器输入电流的不连续特性和实际为转换器供电的电源线通常都很长的缘故，输入回路A3所造成的辐射也可能是很客观的，并且可导致超出规格的传导辐射（150kHZ~30MHz），不能通过电磁兼容（EMC）的传导测试检验。

### 对输入滤波：

        为了降低输入电容![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_033_969e835a7bc2.png)造成的电压跌落，可以在靠近Buck芯片的地方放置多种不同尺寸的低ESR的MLCC电容，例如可将1206封装的20uF和0603或0402封装的100nF电容结合起来使用。为了降低输入回路的噪声，强烈建议在输入线上添加额外的LC滤波器（如一个1uH电感+100uF电解电容），用以抑制电源输入端可能出现的振铃信号，确保输入电源的稳定。

### ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_034_43adf2bec0c1.png)对输出滤波：

        使用不同尺寸的MLCC电容作为输出电容Cout，小尺寸的0603和0402的22nF~100nF电容效果就很好，可以有效阻止源于开关切换节点的高频噪声经由电感L1的寄生电容耦合到输出端。输出线上添加磁珠可以构成额外的LC滤波器（如一个22uF的1206MLCC+0603 4A磁珠）。但使用高频磁珠可以防止输出回路变成有效的环形天线，但要注意磁珠可能会是转换器的负载瞬态响应特性和负载调整特性变差。如果应用中的负载在这分面有严格要求，就不要使用磁珠，可以直接将转换器尽可能地靠近负载，通过对铜箔的优化布置使环路的面积最小化。

## 4、降低转换器的开关切换速度

        如果通过PCB布局和滤波设计的优化仍然不能让一个Buck转换电路的辐射水平低于需要的水平，那就只能降低转换器的开关切换速度来降低辐射水平。

        EMI辐射通常发生在50MHz~300MHz频段，部分芯片可以通过设计外围电路改变开关频率，适当降低开关频率，可以降低辐射水平。

## 5、在自举电路上增加串联电阻

        对于大多数应用来说在自举电容Cboot上串联一个10欧姆的电阻Rboot就可以降低辐射EMI

## 6、RC缓冲抑制电路

        正确添加RC缓冲电路可有效地抑制振铃现象，同时会增加开关切换的损耗。

        在开关节点SW处和功率地之间串联一个电阻![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_040_ded33e21cf44.png)和电容![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_038_f0d83be29a2c.png)，注意![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_037_ded33e21cf44.png)和![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_036_f0d83be29a2c.png)的大小一定要计算正确，随意放两个上去，并不会有效果，还会减少效率。

        ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_039_6c9e8070054b.png)

## 7、RL缓冲抑制电路

        就是在电源处和VIN引脚之间接一个RL并联电路，如下图![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_035_ded33e21cf44.png)和![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_041_6301f2b54cf3.png)。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\DC_DC开关电源学习_Buck芯片_提高效率_电感选型_消除Buck转换器EMI_images\img_042_5ca8641dd475.png)

▼ **往期精彩回顾** ▼

    
-   [👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   [硬件面试题-反激式开关电源电路详解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537159&idx=1&sn=84e355e70c57703239a3656504780f71&scene=21#wechat_redirect)
    
-   [防反接电路、防倒灌电路、过流保护和ESP保护](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536825&idx=1&sn=fedae5c74f2c7804d197982cc5b4a17f&scene=21#wechat_redirect)
    
-   [24V转12V~3V降压芯片和线性LDO选型  
    ](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537868&idx=1&sn=9840e1c394e7248faa70b5fc187711a6&scene=21#wechat_redirect)