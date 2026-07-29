# PCB设计参考:《PADS电路板设计超级手册》.pdf

原创 电路一点通 2024-08-05 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/vqfo7NiCoIJLNhCFUkXoxQ](https://mp.weixin.qq.com/s/vqfo7NiCoIJLNhCFUkXoxQ)

印刷电路板 ( PCB) 设计软件 PADS 的常用操作和一些设计技巧, 配合大量的示意图,以实用、 易懂的方式描述, 让读者迅速掌握软件的操作技巧, 为学习 PCB 设计打下良好的基础。

本书主要内容包括网络表篇、 结构篇、 软件参数设置、 封装、 布局、 布线、 设计验证、 文件输出、 实战技巧。

适合从事 PCB 设计的人员阅读, 也可作为工程师、 在校学生 PCB 设计的参考手册。

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_000_de01f2a32e9c.other)

 **实 战 技 巧**

**BUS 总线布线**

对于同一类型的一组总线, 使用 BUS 总线布线功能, 有利于提高设计的速度。可以采用总线布线的走线类型, 如图 9-1 所示。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_001_c15b0da477f7.png)

执行菜单命令 揖 工具铱 - 揖 选项铱 , 在 “ 设计选项冶 的 “ 在线 DRC冶 中, 勾选 “ 防止错误冶 , 如图 9-2 所示。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_002_2297aa23aa19.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_003_3a072a9835ce.png)框选需要总线布线的引脚或线头, 被选中的网络会刷新一遍, 随后将引出一根在边上的控制线, 如图 9-4 所示。

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_004_a1b00a34e71d.png)

图 9-4摇 总线控制线的引出

  
由这根线决定这一把线的开始、 暂停、 结束、 走线方向、 拐弯位置、 拐角角度等, 如图 9-5所示。

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_005_276b3fe3c4e9.png)

图 9-5摇 总线控制的作用

  
如果到达终点了, 软件先引导边上的线连接至终点。  
到达终点焊盘时要确保能接上, 否则总线的线也会跟着过来。连接好一根后, 会依次切换到下一根, 直到最后一根。也或者可以先整组总线暂停, 再用添加布线一根根去连接。布线完成后的文件如图 9-6 所示。

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_006_5c0c71574fb9.png)

**电源模块设计**

(1) 输入 / 输出主回路清晰, 输入 / 输出地单点汇聚。  
(2) EN 信号接到输入的滤波电容上, FB 信号接到输出的滤波电容上。  
(3) 有散热焊盘的需加散热过孔。  
如图 9-9 和图 9-10 所示。

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_007_3be68b584e2a.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_008_3d3d92a2ab1d.png)  
**HDMI 设计**  
(1) 特性阻抗控制 100赘 。  
(2) ESD 器件靠近 HDMI 输入接口放置, 匹配电阻并排放置。  
(3) 组内误差控制 5mil, 组间误差控制 25mil。  
(4) 组与组间距要求 20mil 以上, 立体包地处理。  
如图 9-11 所示。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_009_55fc9b90b954.png)

以上内容节选：**《PADS电路板设计超级手册》235页.pdf**  

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_010_f640cf0847e3.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_011_198a6980b64f.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_012_1d046be4dc71.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_013_8da247d537c7.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\PCB设计参考__PADS电路板设计超级手册__pdf_images\img_014_a80a80683b9c.png)

## **一点通推荐**

[总结MOS管发热4种原因](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527466&idx=4&sn=fbcfca5786921e21c9c3365ab267359b&chksm=fcef8f48cb98065e92cb014715dfa53c868cfe44345aa0385ad2d266b4a0a1076d2b7d5f1930&scene=21#wechat_redirect)    

[超励志！44岁PCB工程师简历](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527317&idx=3&sn=f53dc662f6daa5353b734b0ac75a3fb4&chksm=fcef88f7cb9801e153ff210ea8e590b71066bce8707e7184ade59398c9d5e97e207082a9c0b0&scene=21#wechat_redirect)    

[常用电子元器件识别与检测（166页）.ppt资料](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)

[运放与MOS管组成的恒流源电路原理分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526424&idx=3&sn=33d8d3c80fa9b7dac6676c68f7ce6c30&chksm=fcef8b7acb98026c1118a0fed574b3888d51ee76d274d9896084ec753bde686c09e610d9641f&scene=21#wechat_redirect)