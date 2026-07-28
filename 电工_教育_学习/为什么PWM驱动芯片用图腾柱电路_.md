# 为什么PWM驱动芯片用图腾柱电路？

原创 硬件笔记本 2023-12-14 07:49 四川

> 原文地址: [https://mp.weixin.qq.com/s/ZdTxs6i6bIr7XEh-gB8h1Q](https://mp.weixin.qq.com/s/ZdTxs6i6bIr7XEh-gB8h1Q)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

推挽电路的应用非常广泛，比如单片机的推挽模式输出，PWM控制器输出，桥式驱动电路等。推挽的英文单词：Push-Pull，顾名思义就是推-拉的意思。所以推挽电路又叫推拉式电路。  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuL6SXrHCE4hficnmVpFeUDnGbNcpfNdoCvXwkp3wQuPS9n1P9Dr4FjYg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

图1：锯木头

❤推挽电路有很多种，根据用法的不同有所差异，但其本质都是功率放大，增大输入信号的驱动能力，且具有两个特点：

①很强的灌电流，即向负载注入大电流；

②很强的拉电流，即从负载抽取大电流。

相关文章:[动画演示什么是拉电流、灌电流](http://mp.weixin.qq.com/s?__biz=MzUzODM0MDI0MQ==&mid=2247486211&idx=1&sn=39176988bd209e0ee253a99e63359f07&chksm=fad875fdcdaffceb9fd7240018677e5663d9e43e7562135a54714dc8c6d017a7c99b91643819&scene=21#wechat_redirect)。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuxV2utkTy8H4Lw0taicJRIpTBhjWNXDdq1w3BQV0a63z5MnpVONTvribg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

图2

❤如图3由NPN+PNP三极管组成的推挽电路，这就是我们常用的互补推挽电路。特点是输出阻抗很小，驱动能力很强。相关文章:[STM32的GPIO电路原理](http://mp.weixin.qq.com/s?__biz=MzUzODM0MDI0MQ==&mid=2247492199&idx=2&sn=efc72dab13edf0c383cdefb64198648b&chksm=fadb9c99cdac158f0bf9e577dd50b2b286af6eb410e00d32940d576fb81c895acafe41562fc1&scene=21#wechat_redirect)。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTu3Sn35IBdT7TVdrjG3e406YvHWbntJJP1AG1xyKJ0n00t0fqwMndZLA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图3：互补推挽电路

❤如图4，输入信号由低电平跳变到高电平，上管导通。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuYViaaEeu6ic4AUibcic9hfPGSysicFlDqhRITw7AU4f0DSlpSRAC5e0ZGUw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图4：上管导通

❤如图5，输入信号由高电平跳变到低电平，下管导通。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuhfwW2fylfGghqHwlicKEGuvCwibsqW6u1CxM07aI1jtVTFDPlxmoQDCA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图5：下管导通

❤如图6，NPN+PNP构成的互补推挽电路是共射极输出，在任意时刻，有且只有其中一个管子导通有输出。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuJ8VzUEJmCI0n0nglD630cia0NyLpiamqqcAfsuwBawsKSDicenYJb5p0A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图6：共射极输出

❤有朋友觉得三极管不都是集电极（C）作为输出吗？怎么画风变了。按常规思路应该是如图7所示的电路图；如果单独输入是0V或12V，那么该电路看似没有毛病，但是输入信号是变化的，电压信号高低电平的跳变有过渡的过程，所以在某个中间电压时会出现两个管子同时导通的情况，这是要炸管的，切记！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuDLeiaicWR32ias0vlTt8IZT60IebU5oywf28glbYrIlNMKVChwLRzT9tg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图7：错误的推挽电路

❤如图8为推挽驱动MOS管的电机调速电路，MOS管的G极灌电流及拉电流都很大，于是MOS管的开通和关断时间都非常短，平台电压也非常窄，可有效降低开关损耗。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuctufnqwdHP6vbm5l4SfMdkzPdRfDvPlicR1KWjIzdeSiaYk8lslYX7tA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图8：电机调速电路

>   

❤当然，如图9把三极管替换成MOS管也是完全可以的，驱动能力会更强劲。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuBTskl5FmiaiaiadQ1fE8uj59EianFQHIBbN30eialgUoLBaFDrmHxcmpKdw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图9：MOS管结构的互补推挽

以上互补推挽电路的输入信号幅值必须和推挽供电电压一致，比如推挽供电电压为12V，那么输入的PWM信号的幅值也必须是12V。如果输入低于12V，输出也也会低于12V，参考图6所示，那么在管子上形成的压降会导致管子发热严重。

❤那么有没有小电压驱动大电压的推挽结构呢，当然有，在很多驱动芯片里非常常见，我们管TA叫图腾柱；如图10所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuibUXBOiaQD8ZPZpFk6GdhacrxGbHUzWbrRIu8syCubKib9goicADjYkwQA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图10

如图11的红框内，图腾柱由NPN+NPN构成，上管前级有个非门。（实际上，芯片框图对有些功能只以模块化展示，涉及的细节属于绝密是不可能呈现出来的）

❤为什么芯片采用图腾柱而不是互补推挽呢？原因是芯片内部的工作电压为5V（VCC经过芯片内部的线性电源得到5V），由前面对互补推挽的分析得知该结构并不适用于小电压驱动大电压；于是图腾柱结构的推挽孕育而生。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuY9suZnZaNk7TLGXlqW0icuxaZk3WYmQS1d9LtTKZ5Gicnu5OGbjRjrHg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图11：图腾柱

❤如图12为图腾柱仿真电路，信号源为5V/1k的方波，二极管D1的作用是防止Q3、Q4同时导通而导致炸管。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuJTG3SmUicR91j1HG5CcmQhwDeqshWbvJuUzgdxIPxJycs4KseibUW1Fg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图12：图腾柱仿真电路

❤如图13为图腾柱仿真波形，输出与输入相位相反，黄色表示Ui输入波形，蓝色表示Uo输出波形，实现了小电压驱动大电压的推挽输出。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuG0iakLqPC2iasjDlJ47G0ice3rFF5dtic6jrGqggac9QZK26hbw2l5P4GA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图13：图腾柱仿真波形

❤如图14为互补推挽仿真电路，信号源为12V/1k的方波。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuglfhnMtFHCHX1E2P0iaYBK8Cno4gTasl92OHHIwicibHbNJn2X6jd0SNQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图14：互补推挽仿真电路

❤如图15为互补推挽仿真波形，输出与输入相位一致，黄色表示Ui输入波形，蓝色表示Uo输出波形。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTub4zsdau4OOEU0kBTticSUqicUsrbUFxuOicbRmxpcSJTRd6vDcWtrwCYQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图15：互补推挽仿真波形

❤然而，我们常用的运放也是推挽输出，运放的一个特性就是输入阻抗很大，输出阻抗很小，输出如图16红框所示，输出阻抗不到200Ω。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTun3ic5dgEnSULSNwhuFayIyIjAkDPo4afTnU4XBFsqjg2Xbib4vZ23Kcw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

图16：运放的推挽输出

❤如图17，运放输出端与反相输入端直接相连就构成了常用的跟随器，输出电压等于输入电压，驱动能力大大增强。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/pG6UhleibGxfpfDichnbPaSsMtk5jHwLTuiadFohmB1rGlv4Y3sweH6YU3Ok50x3kTGuoJ2Un5V8rtDbElraCW8GA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

图17：跟随器

❤要点：

①图腾柱是NPN+NPN结构，互补推挽是NPN+PNP结构；

②图腾柱有非线性特征，只能用于PWM输出，而互补推挽有线性特征，除了用于PWM输出外，还可用于模拟信号输出；

③图腾柱多见于PWM芯片驱动，用于直接驱动功率MOS管；互补推挽多见于搭建的电路以及MCU（单片机）、运放等芯片；

④PWM控制时，图腾柱输入电压可小于驱动电压，而互补推挽必须是输入电压与驱动电压相等。

关于图腾柱和互补推挽，很多时候都被认定是同一个电路（且存在争议），其实不然，正确认识以及了解它们的区别后，相信读者对它们有个全新的认识。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源头条电卤药丸。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。