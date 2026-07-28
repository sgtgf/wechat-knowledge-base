# MOS管防护电路解析

原创 硬件笔记本 2023-12-21 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/YZlX5vjhUdWaeSi3VgWLyg](https://mp.weixin.qq.com/s/YZlX5vjhUdWaeSi3VgWLyg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

功率MOS管自身拥有众多优点，但是MOS管具有较脆弱的承受短时过载能力，特别是在高频的应用场合，所以在应用功率MOS管对必须为其设计合理的保护电路来提高器件的可靠性。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaDXI4icoQjdL2EibGPjicXicrvbKRfggricNVmYZXO27giakLFsgK5g5UUYVHY6TKtf4ZFTYic1h5eJLQvg/640?wx_fmt=png&from=appmsg)

  

功率MOS管保护电路主要有以下几个方面：

**1）防止栅极 di/dt过高：**

由于采用驱动芯片，其输出阻抗较低，直接驱动功率管会引起驱动的功率管快速的开通和关断，有可能造成功率管漏源极间的电压震荡，或者有可能造成功率管遭受过高的di/dt而引起误导通。

为避免上述现象的发生，通常在MOS驱动器的输出与MOS管的栅极之间串联一个电阻(R509)，电阻的大小一般选取几十欧姆。该电阻可以减缓Rds从无穷大到Rds(on)(一般0.1欧姆或者更低)。若不加R509电阻，高压情况下便会因为mos管开关速率过快而导致周围元器件被击穿。但R509电阻过大则会导致MOS管的开关速率变慢，Rds从无穷大到Rds（on）的需要经过一段时间，高压下Rds会消耗大量的功率，而导致mos管发热异常。该电阻上并联的二极管(D507)是在脉冲下降沿时起到对栅极放电的作用，使场效应管能快速截止，减少功耗。

**2）防止栅源极间过电压:**

由于栅极与源极的阻抗很高，漏极与源极间的电压突变会通过极间电容耦合到栅极而产生相当高的栅源尖峰电压，此电压会使很薄的栅源氧化层击穿，同时栅极很容易积累电荷也会使栅源氧化层击穿，所以要在MOS管栅源极并联稳压管(图中D903)以限制栅极电压在稳压管稳压值以下，保护MOS管不被击穿，MOS管栅源极并联电阻(图中R516)是为了释放栅极电荷，不让电荷积累，实测单独焊接该下拉电阻（R516）还是不足以快速释放g极电荷，会导致mos管误触发，可靠的放电电路还是需要依赖**MOS管g极->D507->驱动芯片地回路**来进行可靠的放电。

**3）防护漏源极之间过电压 :**

虽然漏源击穿电压VDS一般都很大，但如果漏源极不加保护电路，同样有可能因为器件开关瞬间电流的突变而产生漏极尖峰电压，进而损坏MOS管，功率管开关速度越快，产生的过电压也就越高。为了防止器件损坏，通常采用齐纳二极管钳位(图中D901)和RC缓冲电路(图中C916，R926)等保护措施，实测加上稳压管（D901）的效果要比加上RC电路的效果要好，推荐先用稳压管测试，但是此处绝对不能加tvs，加tvs会导致源极电压抬高，gs损坏。

当电流过大或者发生短路时，功率MOS管漏极与源极之间的电流会迅速增加并超过额定值，必须在过流极限值所规定的时间内关断功率MOS管,否则器件将被烧坏，因此在主回路增加电流采样保护电路，当电流到达一定值，通过保护电路关闭驱动电路来保护MOS管。

#### **4）电流采样保护电路**

将经过mos管的电流通过采样电阻采样出来，然后将信号放大，将放大获得的信号和mcu给出的驱动信号经过或门控制驱动芯片的使能，在驱动电流过大时禁止驱动芯片输出，从而保护mos管回路。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaDXI4icoQjdL2EibGPjicXicrvJXztPksk2tfM95pCOLeGMWOvUUwjJveKH8QsMbRHb9ld1AybPIGqvA/640?wx_fmt=png&from=appmsg)

**原文链接：**https://blog.csdn.net/zhuimeng\_ruili/article/details/108979413

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。