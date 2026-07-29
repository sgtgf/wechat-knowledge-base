# 51单片机玩转LED·花样流水灯

原创 电路一点通 2024-09-23 11:30 广东

> 原文地址: [https://mp.weixin.qq.com/s/S8vFO3d7ZYDrYjW1D4PKeg](https://mp.weixin.qq.com/s/S8vFO3d7ZYDrYjW1D4PKeg)

51单片机的P0和P2口分别控制8个LED，试编写程序使这些LED按预定的花样显示。

【硬件平台】端口控制线采用总线画法，每个LED工作电压为2V，工作电流为3mA，限流电阻值为1k。

![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机玩转LED_花样流水灯_images\img_000_f5d6224c93f1.png)

## **一点通推荐**

[电子工程师自学速成-提高篇（512页 高清pdf文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523884&idx=2&sn=715054663619a1041c54f27fe0a20b4c&chksm=fcef7d4ecb98f4588a1cbdd416903beb946a126cf1d2d278c36da3b2ef364105e85958a68553&token=1494156528&lang=zh_CN&scene=21#wechat_redirect)    

[电子工程师必备-九大系统电路识图宝典.pdf(702页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)    

[开关电源环路设计与计算（45页）PDF-文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523296&idx=3&sn=3925f514288c3e99de2dcf1ac487edc8&chksm=fcef7882cb98f194be86616da328ea323e7516492ca890df66205a7bf73fbbfa532eb2664085&scene=21#wechat_redirect)    

[电源反馈设计速成篇.pdf（40页）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523709&idx=2&sn=932246205d9b7972e390a64ae8fe7736&chksm=fcef7e1fcb98f709b9afc7ab90d8513e35b0f0f4f30ead525ec8c177c63c3e22400b6b920451&scene=21#wechat_redirect)    

# [【宝马奔驰奥迪】汽车悬架系统图、各零部件名称标注](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247491485&idx=2&sn=5108d54e1eefcbba41c98fb0d8b0bffe&scene=21#wechat_redirect)

# [汽车发动机电控系统（ppt 培训课件）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247491156&idx=2&sn=0952b051b0e7cddf65fb8d081fd621a9&scene=21#wechat_redirect)

# [电气识图入门基础.ppt 教材-143页](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456243099&idx=2&sn=c535fde6f97f62968d10788df7ddc0ed&scene=21#wechat_redirect)

  

******进大家庭⭕圈探讨回复:****** ******交流******

  

【编程思路】

依然采用51单片机来实现花样流水灯功能，必须包含51单片机寄存器的头文件，才可使用其软硬件资源：

1 #include <reg51.h>

为使代码编写简略，引入下面的两个“类型简写”宏定义：

2 #define uchar unsigned char

3 #define uint unsigned int

P0、P2端口对应的花样数据很多，占用的空间较大。我们可以建立两个数组，将它们的存储类型定义为code（存储在ROM区）:

4 uchar code Pattern\_P0\[ \] =

5 {

6 0xFC,0xF8,0xFC,0xFE,0xFC,0xF8,0x1C,0xF8,0xFC,0xF5,0x1C,0xE8,

7 ............（省略列写，着重说明编程思想）

8 };

9 uchar code Pattern\_P2\[ \] =

10 {

11 0xF1,0xFE,03C,0xEE,0xFC,0xC8,0x1F,0xF5,0xAC,0xC5,0x1C,0xE6,

12 ............（省略列写，着重说明编程思想）

13 };

要产生流水效果，必须使灯的亮灭即跳转有时间间隔，因此要编写一个延时函数以便调用（具体延时可通过修改函数的实参来确定），可通过内外循环之积来延时：

14 void delay(uint x)

15 {

16 uchar i; //定义内循环变量

17 while(x--) //x次外循环

18 {

19 for(i=0;i<200;i++); //200次内循环空操作（不一定固定200，可根据具体情况变更）

20 }

21 }

最后编写主程序（程序从此入口执行）：

22 void main()

23 {

24 uchar i;//定义数组元素下标变量，方便取数组元素赋值给P0或P2端口

25 for(i=0;i<100;i++) //假定前面定义的两个数组各有100个元素（花样）

26 {

27 P0=Pattern\_P0\[i\]; //P0口灯以数组Pattern\_P0的第i+1个花样点亮

28 P2=Pattern\_P2\[i\]; //P2口灯以数组Pattern\_P2的第i+1个花样点亮

29 delay(100); //延时一会儿再跳转到下一个花样，如此循环往复按照100个花样流水显示

30 }

31 }

【程序展示】

![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机玩转LED_花样流水灯_images\img_001_66540d8819f1.jpg)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机玩转LED_花样流水灯_images\img_002_7eb20a7bfe05.png)

**👇👇👇更多技术资料👇👇👇**

![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机玩转LED_花样流水灯_images\img_003_f76d26393f9a.png)