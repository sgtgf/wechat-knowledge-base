# RC低通滤波电路直接带载后会发生什么？

原创 硬件笔记本 2023-12-03 11:20 四川

> 原文地址: [https://mp.weixin.qq.com/s/y3guByaW5lmqAneY4EzomQ](https://mp.weixin.qq.com/s/y3guByaW5lmqAneY4EzomQ)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

1、滤波的含义

滤波是频域范畴，它说的是不同频率的信号经过一个电路处理后，信号发生变化的问题，变化包含了原始信号幅值和相位的变化，滤波电路对信号的幅值做出的响应称为幅频响应，对信号相位做出的反应称为相频响应。每一个频率的信号对应在时域就是信号的充放电特性。

滤波通常借助动态器件如电感和电容，利用它们在不同频率下阻抗变化，从而在其上面产生压降，对我们需要去除的信号进行衰减，从而达到滤波的效果。

我们知道电感和电容的阻抗特性其实就是储能特性，储能意味着时间特性，需要过程，这个过程是滤波特性的体现的一方面。

2、分析方法和工具

在s域，写出回路的传递函数，根据波特图进行分析，传递函数是输入和输出的增益关系

为了同时分析相位和幅值引入虚数，并且在虚平面进行分析，和频率相关的电路阻值特性，我们用阻抗描述，通常包含实部与虚部，这个数学工具的引入，包含了幅值和相位信息的体现，简化了分析难度。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaurkbVasmf1BW5Ip5ice5NzQiaDWeRbfkOhltCYkRpd7bY81ODHNicWExoYGg4L5Gic1nCZjHAQT83LQ/640?wx_fmt=png&from=appmsg)

角速度描述表示

注：

由于自然界正弦信号认为是单一频率的信号，是基础信号，不可再分解，其它信号是以正弦为基础的合成信号，所以，以下从电路输入某个频率的正弦信号开始分析。正弦信号输入这些线性电路，达到稳定后，输出信号只会发生幅值和相位的改变，不改变信号的频率。

3、RC低通滤波电路结构和特性

（1）RC滤波电路，图中包含了这个电路的传递函数G(s)表达式

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaurkbVasmf1BW5Ip5ice5NzWSLhzE1Pq7r26ibNUEVWZKxycUF2ZVUEkMZekF8sPmlPOdMRhQJla9w/640?wx_fmt=png&from=appmsg)

RC滤波电路

从传递函数解出一个称作为极点的根，即令传递函数的分母为零，最后得出一个频率，由于这个频率从波特图上看，曲线在这个点前后发生突变的现象，我们形象地将这个频率称为“转折频率”，转折频率意味着一个响应发生“突变”的频率点，转折意味着响应的转弯点，前后会发生较大的变化。记住波特图图横轴是频率，代表着一系列不同频率信号通过这个电路后，输出会发生不一样的变化，是一系列的信号，不是单一信号。转折频率代表了电路的固有特性，是电路参数和结构导致的结果，是电路的固有属性。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaurkbVasmf1BW5Ip5ice5Nz4diczZntpQdHwyHu04hFUI8Oc0eUtCMy2DhptRCRUBTtn0ZiaNYF4bWQ/640?wx_fmt=png&from=appmsg)

RC的转折频率

借助matalab工具进行绘制响应曲线，其它工具也可以，只要是自己熟悉的工具即可

下面我们对R和C赋值，R=100Ω，C1=100uF，得到转折频率f=15.915Hz

syms s R C % 定义符号参量

R=100; C=100\*10^-6;% 给分子分母赋值

G(s)=1/(s\*R\*C+1);% 传递函数表达式

num=\[0,1\];% 分子系数 den=\[1/100,1\];% 分母系数

G1=tf(num,den)% 得出传递函数

margin(G1)% 画出增益和相位裕量图

grid on;

% 得出传递函数为G(s)=1/(s/100 + 1)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaurkbVasmf1BW5Ip5ice5NzlPgKr8rJC8dOwGZtys4vlubBwdrJuAOz8NS82ZbHwZw5bo837dHFFw/640?wx_fmt=png&from=appmsg)

RC的幅频和相频曲线

曲线说明

（1）直流增益，即低频增益，在传递函数中令s=0，得到直流增益为1，转换成dB刚好为0dB（0dB=20log1），这正是我们无源器件低通滤波器的特点，不能放大信号，在低频段，电容容抗几乎为无穷大，即电容为开路状态，信号被原模原样传输过来，这时候增益就是1，由于电容看做开路，那么阻性电路中，信号自然也不会产生任何相位偏移。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaurkbVasmf1BW5Ip5ice5Nzd1DUexYCRHubGUnckic53gPfkaKIicVicono1kg1pVZQayF7ggYDdaCtQ/640?wx_fmt=png&from=appmsg)

直流增益

（2）转折频率的地方，这个频率的信号增益被衰减到原来的70.7%，也就是-3dB的地方，图中为-2.99dB对应转折频率为15.9Hz，这是由于实际计算转折频率为15.915Hz，存在一点误差。对相位来说，在这个频率点，相位会偏移-45°，负号表示信号被滞后了，从时间看，也就是被延时了。但是对其它不同频率信号在这个频率点前后响应出现较大的不同。之前看做不衰减也就是直流增益部分，之后信号被快速衰减，同时产生一定的相移。

（3）延时时间计算，也就是相位延迟和具体时间的对应关系，方便我们理解相位和延迟之间的关系，延迟时间为：延迟时间=Kd\*周期

延迟系数Kd，即在一个360°周期里延迟角度占有的比例，这里是45/360=1/8，也就是45°占有360°的1/8。

转折频率约为15.9Hz，即一个周期为62.89ms。

那么，输入信号被延时时间为62.89ms\*1/8=7.86ms，输出信号晚来输入信号7.86ms。

如下是对一个100Hz和200Hz信号进行延时举例，也说明了相位差和时间差之间的关联，它们一一对应（one to one）

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaurkbVasmf1BW5Ip5ice5NzlmFINTcI7GnRPSLjWPxibYRsLc4XX8MP9VhSxp3ct3X8PVjMw5AsBeg/640?wx_fmt=png&from=appmsg)

相位延迟的含义表示

用TINA仿真进行波形验证，借助仿真软件验证你的结果，并且可以帮助你理解

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaurkbVasmf1BW5Ip5ice5NzCFtSDX37RNYVibSvJRgmibxAXleX2Pn1ggfct89KGh6Kdm4x9167WiaOw/640?wx_fmt=png&from=appmsg)

RC仿真电路

相比于输入信号Uin，稳态后，电容电压为输出信号被滞后45°，并且幅度被衰减到70.7%，从下图波形也可以看出。（稳态后，电阻上电压超前了45°，想象一下，这个电路测量对象不同，带来了“高通”和“低通”的概念）

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaurkbVasmf1BW5Ip5ice5NzQ0D0h4nSvAJ8ibT78kl3SlZgd3Yb1wZmNPZh1kZ3boVGUtaTXyALYUw/640?wx_fmt=png&from=appmsg)

仿真波形

4、直接带载后会发生什么？

如下图，我们将R2放置在电路中，模拟一个负载

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaurkbVasmf1BW5Ip5ice5NzpY01ickm0NMVJET8jsz2fLnW5iadJoTvDZx5epXPfmV4NB5l9dPhOcmw/640?wx_fmt=png&from=appmsg)

带载的RC电路

我们再次借助MATLAB化简方程

%zo输出阻抗，是电容C1和电阻R2的并联值 % z是电路总阻抗 % G(s)传递函数

syms R1 R2 C1

zo=R2/(s\*C1\*R2+1); z=R1+zo;

G(s)=zo/z; G1(s)=simplify(G(s))%化简代数式

最后得出传递函数为G(s)=G1(s)=R2/(R1 + R2 + C1\*R1\*R2\*s)

同时令传递函数的分母为零解出极点，如上图，我们可以把它写作为频率的形式，这个频率在波特图中正好是转折频率，我们利用MATLAB进行验证

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaurkbVasmf1BW5Ip5ice5NzuwGDXibicDibTuHN4Kjf8owARtiaYH02Ir7UqWD0D33xm9VwWBiayLLa7tw/640?wx_fmt=png&from=appmsg)

带载后RC电路的转折频率

转折频率处，输出信号相比输入信号，输入信号的幅值被衰减到原来的70.7%，相位被滞后45°（图中就是-45，符号表示信号相位被滞后）

下面我们对R1、R2和C1赋值，R1=100Ω、R2=20Ω，C1=100nF

syms R1 R2 C1 s

R1=100;R2=20;C1=100\*10^-9;

zo=R2/(s\*C1\*R2+1); z=R1+zo;

G(s)=zo/z;

G1(s)=simplify(G(s))%化简代数式

% G(s)=G1(s)=R2/(R1 + R2 + C1\*R1\*R2\*s)

%得到传递函数表达式 G(s)=G1(s)=100000/(s+600000)

num=\[0,100000\]; den=\[1,600000\];

G1=tf(num,den)% 得到传递函数

margin(G1)

grid on;

最终得到幅频和相频特性图

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaurkbVasmf1BW5Ip5ice5Nzr3OnKZGadKbALYN86INI9EYHVPTuF5dxxKBURoXQ1BDibBibuJxnBWag/640?wx_fmt=png&from=appmsg)

幅频和相频特性图

（1）直流增益，也就是低频下的增益，我们对传递函数频率项s=0，那么就得到直流增益，这也是我们在做电源环路中分析中采取的方法得到直流增益。这里直流增益如下，也就是除去了时效性动态器件的影响，纯阻性表现的特性，就是一个简单的分压电路。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaurkbVasmf1BW5Ip5ice5Nze1ZO23dybImpCGRXRXKEK77ias3TS9vSqlSZGkVtqib491PcHNiawJX2w/640?wx_fmt=png&from=appmsg)

直流增益

注：1/6刚好是-15.6dB，负分贝表示信号被衰减

（2）转折频率处，我们经过简单计算，得到转折频率为f=95.49kHz，如下图，转折频率处信号衰减到原来的70.7%，即1/6\*70%=0.1178，即为-18.6dB，波特图中可以看出，同时相位被滞后45°（-45℃）。

这个电路，我们对并联在C1上的R2取值为无限大，我们将R2取值无穷大后，只需要把传递函数简单化简后求极限，则电路重回到开头的RC电路，传递函数和RC低通电路相同。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaurkbVasmf1BW5Ip5ice5NzeS0CssRfGFPjDhM2iaRsdlRYPoYw4hkbGJeJuxjWQ9zVh5jVDZwXmTw/640?wx_fmt=png&from=appmsg)

转折频率

注：负载的直接接入导致转折频率会向右移，即转折频率比单纯的RC会偏高，若R2趋于∞，那么转折频率由95.49k变为15.92k（用Excel快速计算一下）。

实际中滤波电路该怎么样接负载

实际当中，尤其是采样电路，我们经常会用到RC低通滤波，我们会采用输入阻抗很大的运放组成跟随器。

在MCU中，采样输入端口往往也是阻抗很大，所以我们也可以直接用RC滤波进行直接接入

高输入阻抗端口，这些都是让我们想要的信号幅值不发生衰减，而且几乎不产生相移、设定的转折频率不发生偏移，信号能够被正常采集。

来源：https://www.toutiao.com/article/7191694143415009853

  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源头条磁小诗。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。