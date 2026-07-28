# 如何测试DC-DC的SW信号？

原创 硬件笔记本 2023-12-11 07:41 四川

> 原文地址: [https://mp.weixin.qq.com/s/5qAMAQAcldLLnLQbVB1MzA](https://mp.weixin.qq.com/s/5qAMAQAcldLLnLQbVB1MzA)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

对于绝大部分buck芯片而言其上下两管都集成到芯片内部，那么该如何观测两管的工作状况呢？实际应用中我们通过观测上下两管交替点的电压来判断上下MOS管的开通与关断情况，并将这一点称为SW，如下图所示,  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflI4LoIL7iaibe60Ltm5Q25CkRgUtzncdXnHfzTqCcPBIhXMVunONicFoYNjiahSVV46QKMhNoOicxUQbA/640?wx_fmt=png&wxfrom=13&tp=wxpic)

**怎么测SW ：  
**  
以MP2332为例，作为一款完全集成的高频、同步、整流、降压开关变换器，MP2332采用恒定导通时间 （COT） 控制实现了快速瞬态响应、简单的环路设计和快速输出调节。在宽输入4.2V到1.8V范围内可以满足 2A 的输出电流，除此外MP2332还有出色的负载和线性调节性能及优秀的待机功耗，其静态电流 Iq 只有200μA。  
  
**应用实例：  
**

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflI4LoIL7iaibe60Ltm5Q25CkWpaIQ8BqiaRrwEibdITNXJWhhR70y1gNrRJ5PUnJJt06ARtA4h7oefLA/640?wx_fmt=png&wxfrom=13&tp=wxpic)

在EV2332板上，只需要将示波器探头钩住该SW测试点，探头接地端接GND测试点，当正常上电后，即可在示波器上读出SW电压波形。线路连接图如下：  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflI4LoIL7iaibe60Ltm5Q25CkW8YPs8iaOQ2r8dNtiavL97K0X3IkrsBJcdic5j8FvURm8BoBUAibBbMFhg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

**SW 图像读取信息：  
**  
通过SW波形可以判断出芯片工作状态：轻载降频PFM和CCM状态。  
  
MP2232空载启动时SW波形：为了在短时间内建立输出电压，开关比较密集，当输出电压建立后开关波形稀疏间隔约2ms才会有开关动作。轻载条件下，MOS管导通交叠区产生的开关损耗占据主导地位，为了提高效率，芯片将进入轻载降频模式PFM。当电感电流降为零时，low-side driver进入(Hi-Z)态。输出电容通过电阻R1和R2缓慢放电到GND。当VFB下降到VREF以下时，高边MOS打开此时才会在示波器上看到SW波形。输出电压会通过电感与MOS寄生电容进行LC谐振放电。  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflI4LoIL7iaibe60Ltm5Q25CkFae9q1ib51gmjmy6NIYnK5vKqLCyF9ChJDOs2JeNIb9TMiaHChrLr7TQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

将上述PFM的SW波形展开即为下图，这里可以结合CH4电感电流进行分析。第一阶段：上管导通，Vin给电感和负载供电，电感电流以固定斜率上升（U\_L=L di/dt ）。第二阶段：上管关断，下管续流，此时电感电流以固定斜率下降。第三阶段：电感储能释放完毕，续流回路断开，但此时上管还未打开，电感及回路中寄生电容会形成LC阻尼震荡，以Vout为中心进行谐振。  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflI4LoIL7iaibe60Ltm5Q25CkI3hsYExKAljwav1MIMDDN61AWdtHUys8GaPWIAvteoOQ63tFmz1lgQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

MP2232 当电感电流不再为零，芯片将进入连续导通模式（CCM）。即上下管交替开通关断，当高侧MOSFET （HS-FET）处于关断状态时，低侧MOSFET（LS-FET）导通，两管交替导通，此时SW波形为固定频率下的PWM波形。  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflI4LoIL7iaibe60Ltm5Q25Ck2zk8cIc0ONbtkFic3TviaibeCc5DX2O7UYAxfwkeopOicetmXFUTHrLDog/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

将CCM 的SW波形展开即为下图：  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflI4LoIL7iaibe60Ltm5Q25CktwiaO9a65fZZpy0zTelPYdRGD1d41f9o02mBQfYuVhWJk1mNY5Ihnfw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

在此情况下SW我们可以读出上下管分别导通的时间，如图中高电平为上管开通时间，其电压值等于Vin，低电平为下管的开通时间其电压值等于0。对于一个周期而言，上管开通时间ton与整个周期T的比值为占空比D。在CCM模式下，设输入电压为E，输出电压为U（平均值）。在整个周期内![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTflI4LoIL7iaibe60Ltm5Q25Ck8mslAULVIotFTXEP2c9T4eicSOZCvWzRHHXYlvGkoY7j05dU6ZrEGCg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)化简后可以得到 D=U/E。  
  
由此可知，在实际操作中，我们可以通过观测PFM和CCM 等不同状态下的SW波形，分析判断buck电路工作是否正常。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源MPS官网。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。