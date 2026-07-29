# PCB设计如何防止别人抄板？

原创 硬件笔记本 2022-08-31 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/q3gFGnmlpuj7aImczm2UOQ](https://mp.weixin.qq.com/s/q3gFGnmlpuj7aImczm2UOQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

PCB设计中，在通过重重关卡完成PCB设计后，最重要的就是版权问题，抄袭现象是屡见不鲜了。那么，PCB设计如何防止别人抄板?

  

1、磨片，用细砂纸将芯片上的型号磨掉；对于偏门的芯片比较管用。

  

2、封胶，如粘钢材等，将PCB及其上的元件全部覆盖；里面还可故意搞五六根飞线拧在一起。要注意的是胶不能有腐蚀性，封闭区域发热不太大。

  

3、使用专用加密芯片，如ATMEL的AT88SC153等。

  

4、使用不可破解的芯片，如EPLD的EPM7128以上、ACTEL的CPLD等。

  

5、使用MASK IC，这需要很大的批量。

  

![](PCB设计如何防止别人抄板__images/img_002_329742f5d677.jpg)

  

6、使用裸片，抄袭者们看不出型号也不知道接线。但芯片的功能不要太容易猜。

  

7、在电流不大的信号线上串联60欧姆以上的电阻。(哈哈，有点坏，前提不能影响信号质量)

  

8、多用一些无字(或只有些代号)的小元件参与信号的处理，如小贴片电容、TO-XX的二极管等。

  

9、PCB采用埋孔和盲孔技术，使过孔藏在板内。(代价有点高)

  

10、使用其它专用配套件，如定做的LCD屏、定做的变压器等等。

  

11、申请专利。鉴于知识产权保护的环境太差，国外最优选的方法在咱们这只能放在最后一条。

  

以上便是PCB设计如何防止别人抄板的方法，希望能给大家帮助。