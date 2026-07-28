# 拆解汽车LED大灯，为什么又要恒压又要恒流，不矛盾吗？

原创 EthanZhang 硬件笔记本 2023-10-24 07:38 四川

> 原文地址: [https://mp.weixin.qq.com/s/y3S5P2ZbGncptd4btZtZcw](https://mp.weixin.qq.com/s/y3S5P2ZbGncptd4btZtZcw)

本文来自面包板社区拆解活动！奖励丰厚！（两台大疆无人机、两台示波器等）！电子工程师们赶快来参加吧👇

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfkTbV9PO8NXnwX7OOGGkEYyPTQGmWviacVibibmGiaapmtUyrKwfCuh17FyQQEH04HX2M6amXcxicn7sRA/640?wx_fmt=png)  

**一. 外观分析**

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Tsc1kDaOZxELdypYxtpt3soAqXF6J82iatrf8GoibjGR4vwkMO7DxpW7Rg/640?wx_fmt=jpeg)

如上图19年买的一款汽车LED前照大灯，在用了三年左右2022年就坏了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsBBzzZHfaUCT5W80KVESnmLQcwxKaiaChwbOq4kLXab9CCyBpkR3cVIw/640?wx_fmt=jpeg)

外观总图，LED光源与铝型材间的塑料部分是为了与汽车灯座部分配合固定的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsKz2vicHenIXiaFVRusiajCxe1ZvVClCIlT74n45kU5gibe443q0Bo8sCEQ/640?wx_fmt=jpeg)

  散热铝型材后面还带了个散热风扇，

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsUdIwoV2Dg756MRtib0VEKfpjbmJIe6Fcxf9koHibgR3vPtyS9uRlCUzQ/640?wx_fmt=jpeg)

金属外壳的驱动电源

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsL4w1dFjUOVQkHHyq93LaQmmlORUqzE4DYJsEw1mW6UmjO0pcpWpLaA/640?wx_fmt=jpeg)![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Tsfwy5Lfu9iadGnn5j2ericYuLO1QiaKSAN3sJxCF9JhaqlONlxCu2xJcbw/640?wx_fmt=jpeg)

电源接头

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Tsy6T5313VWZibu3ibNDAGReEQNhsGLpYChbKs8icfqMI8icNpV4rBCM2hlw/640?wx_fmt=jpeg)![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsAVKtWl2k6TX3aKbiaeBX6qrCvID0n6rcOFH7qzFXX2VpTDAUMVHmSwg/640?wx_fmt=jpeg)![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsAxfd8dDwLmbt7iaOurj50icMicSIVeqJFIQ6RqAqCxTB8YlKrp8ZrEWzQ/640?wx_fmt=jpeg)

LED灯板部分，LED灯珠表面已经明显损坏了。

LED灯珠用的为CSP封装的1919灯珠， CSP封装指Chip Size Package或Chip Scale Package，芯片级封装，在LED行业又叫倒装芯片。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsUO8rxfIA0ckic37mNgu0Mm6dnIA8ZuCRbl2ZtfPibic1LjdG1cJQicXAxg/640?wx_fmt=jpeg)

传统的LED封装工艺需焊金线、底座填充、支架等工艺，而 CSP封装则是直接把LED芯片与封装基座连接，省去了中间的工艺成本，也使得CSP工艺的LED封装导热性能更好，尺寸能做得更小。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Ts03Pmwzt0ww5MTRbIlQMbIaJECc1tqgbbT0IL1ibk40xjoEeQIjGp7Dg/640?wx_fmt=jpeg)

如图尺寸为1.9\*1.9mm，以首尔1919参考，最大电压2.86-3.25V，最大电流可达到1.5A，最大功率=3.25\*1.5=4.875W。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsH2wns1J3qkTzwXNFa6EWIIcKWARQ0ekgC4t5ARribxB3OkMkVaWor4A/640?wx_fmt=png)

**二、结构拆解**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsUCrygT81MrKjlB46rEm6d0jicEFwAI0iaNoicddtAemNAhsZZw0RGNsEg/640?wx_fmt=jpeg)

背部的风扇拆下来，里面的线是和灯板并联的，有点奇怪了。由于暴力拆解把风扇线也拉断了。  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsCFgLHwf43uCwhEW232gWpnocEcXGqEL6NzJkl0ozyhKGesl9eIffdg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Ts0H7zGKiaznd9EQZfdrDDjjWa0NiadAp0Bjasbzd9fnMgRE9y0RPodgkg/640?wx_fmt=jpeg)

驱动电源外壳为铝外壳，两边的封盖拆开后发现里面是灌胶的。

灌胶的作用除了防尘防水，还具导热散热功能，能把PCB上元件的热量传递到外面的铝壳。灌封胶+铝外壳设计具有非常好的导热散热效果。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsfjB9ogibTDgO02kRWsPicfVI6tn9LpibukjVWsFN9HibL0PH4pmLAk7QCw/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsUpyp5mf4iciaI4rGAERfkicXaTfFnTibgaxicWfakhtibynO6E92FSqv4VKg/640?wx_fmt=jpeg)

驱动电源PCB与铝外壳间有一层绝缘纸，避免元件与金属外壳接触造成短路。  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsoWazeSaBoPtorZujQmf5GZ8T5LyjGPUIWsh7TgeOfWkhaMNLQWFQ8A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsibjDxZBmdWpkPqCoVfcxuiaicOsaBVj9yq0FnMXIKPM4Uic5ic3bywkfQjg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsnPjruy7On7zdm9ZqRWVxYFiagusRPuEiaRXK7PXQRMwedwoKrV1Rrrfg/640?wx_fmt=jpeg)

一番折腾我们终于把驱动部分PCB拆解出来并酒精清洗。终于得见全貌！

电源PCB采用双面板工艺，底面贴的为驱动IC及贴片电阻电容，上面为插件的功率电感与电解电容，贴片的二极管及TVS，两面均为锡膏工艺。

不得不说，底面PCB的SMT工艺有点辣眼睛了，电阻都歪歪扭扭的。

驱动IC型号为LC2740，一款恒压+恒流降压IC，最大3A电流输出。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Tswwq5P3HD6SuyOIcQKx8kMUbA65RoibOpC75amhibU2VUPT7ScZ5BibXYQ/640?wx_fmt=jpeg)

**三、电路分析**

根据拆解的PCB板和IC资料，我们画出对应的原理图，整个电路为一个比较简单的BUCK降压的恒压恒流电路。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Ts9ibymbXAe6g2lG0ZUtf182QPGeG7GneOYnRzNIibhiaRpQTDS5YgqPVSw/640?wx_fmt=jpeg)

1、IC输入端有个TVS管，主要作用为吸收输入电压中的瞬态浪涌，避免尖峰电压过高击坏驱动IC。负极下面有两个SS56肖特基二极管，利用二极管单相导通，作用防反接，避免因输入正负电压接反导致IC烧坏。电解电容C4低频滤波及储能作用，贴片电容C9高频滤波。L1为buck功率电感。

2、R7,R8为恒流采样电阻,参考IC规格书,CPS-VSN间参考电压为50mV,可以得出设计的输出电流I=U/R= 0.05/(0.047并0.036)=0.05/0.0204=2.451A，

3、降压后的高频斩波，经C5电解电容，变为稳定的电压，C2为高频滤波作用。

4、R5,R6为设计输出电压的分压电阻，参考IC规格书VFB参考电压为1V，可以计算出此驱动设计的输出电压为:

V=I\*R=(1/10)\*(10+100)=11V.

由此可得出此款驱动最大输出功率P=UI=11\*2.451=29.96W.

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsrK9qRvTtEGYg8v87nwViaiaAw4icsZZBpWEIfOloekgR7MCxvbyibPMW0w/640?wx_fmt=png)  
  
![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsRUmJAVssxg5ntW7Gtoniah75JfKVAEGOpLMHccMmQFeHiaoh8DbtlEIA/640?wx_fmt=jpeg)  

如上散热风扇与驱动电源的连接示意图，散热风扇是并联在LED灯上的，实际测试了，风扇在9V-11V功率都是比较稳定的，但功率只有0.6W左右。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4Tsvg2NcOXLvZ6OMDfGDMtWiaTyfqnbJQiaxib2VqvsD6aDvvT1smOibaBvpw/640?wx_fmt=png)

实际上电测试，驱动电源是好的，就是LED灯珠坏了，推测因LED前大灯靠近汽车发动机，因环境温度太高导致LED损坏。

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsV7457E15iclztXfFEzib9yyemaiaDoHvqcwoFSNNrJTsX7MjITB8dOcMQ/640?wx_fmt=jpeg)![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfkY9LTXNCsDMC8TsFwVk4TsFL8iblZTudKfp0DM6S0KbSibdibWVHqT4KxF1VQibegZHZT8ibWZND0T2wQ/640?wx_fmt=jpeg)

问题来了

1、为什么输出要11V这么奇怪的电压呢，而不是9V ？

上面有介绍过3V的LED的实际电压一般在2.8V-3.2V范围，如果按3.2V计算：3.2\*3=9.6V，再加上输出引线存在的内阻，2.45A的大电流也会在输出导线上产生压降，最大电压估计去到10-10.5V左右了，于是为了确保LED正常工作且留有余量，把输出电压设计为11V。

2、为什么又要恒压又要恒流，会不会矛盾呢？

首先我们需了解为什么需要恒流，LED的正向电压-温度关系是负相特性的，就是随着其温度越高，其正向电压Vf会越低，所以当LED灯由启动到点亮一定时间时，其LED压降是越来越低的，如果用恒压的驱动电压供电，输出电压不变，LED电压越来越低，输出电流则会慢慢变大，电流若超过LED最大额定电流则容易烧坏。为确保LED不超额定值，所以我们一般采用恒流方式驱动LED。

恒压是为了确保提供的电压满足负载正常工作时，也要避免过高的输出电压瞬间击坏负载，所以需要设定个合适的稳定的输出电压。

**四、总结**

LED汽车照明灯具与通用照明灯具存在较大差距，主要表现在输入电压波动，使用过程中振动强度及频率的改变以及发动机舱及其他周围热量的改变、温湿度交变，太阳辐射，盐雾腐蚀，尘降等等诸多因素。拆解的这款LED汽车大灯光源采用了散热性能更好的CSP封装LED+散热铝材+散热风扇，驱动电路加TVS作为浪涌保护，驱动使用铝外壳灌胶工艺作为防护，这些设计的目的就是满足汽车LED照明的使用环境要求，提高可靠性。

可惜的是这款产品是只用了三年就坏了，由此看来此可靠性设计还是有待提高。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。