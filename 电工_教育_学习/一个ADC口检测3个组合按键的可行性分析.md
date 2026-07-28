# 一个ADC口检测3个组合按键的可行性分析

原创 物联网全栈开发 硬件笔记本 2023-11-05 10:07 四川

> 原文地址: [https://mp.weixin.qq.com/s/8p7e-zt1Z\_HwJGrRYyhcJw](https://mp.weixin.qq.com/s/8p7e-zt1Z_HwJGrRYyhcJw)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

# ADC口检测多个组合按键的方法

一般情况下，一个GPIO口只能连接一个按键，通过检测外部输入的高、低电平判断按键的开闭状态。

使用按键切换串联或并联的电阻网络电压的通路，可能得到该网络与不同的按键状态相对应的分压值，处理器检测该分压值之后再映射到按键状态，从而实现按键检测。

接如果按键同一时刻只有一个闭合，可以用下图分压电阻相互串联的方式检测。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgz7dlqKzjNGkz4gD6XG3QsQ48YuZBWVZbDY3QfKiaWkf2cMcMQNaUHXCdC4tPhHM0wDTulGCAX4Og/640?wx_fmt=jpeg)

电阻串联分压的按键检测电路，适用于没有组合键的情况

如果按键存在多个同时闭合的情况，则应该用下图电阻并联的方式实现检测；

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgz7dlqKzjNGkz4gD6XG3QsHRGlQ2LsKbibiaX0P4rsvRydibNfYkPkpw2cpIZk1hmvp9LM1sk5croYQ/640?wx_fmt=jpeg)

存在多个按键同时被按下时的ADC检测电路

当需要检测n个可能同时闭合的按键时，存在种按键状态的组合。

比如，2个按键存在以下4种按键状态的组合：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgz7dlqKzjNGkz4gD6XG3Qs6j9Zfhcke9mDZB6u8yjWNExMaYaRUe6P7BzuhZPw3iacI1zrY9V2oYQ/640?wx_fmt=jpeg)

2个按键的4种组合状态

以下电路可用于2个组合按键的检测，

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgz7dlqKzjNGkz4gD6XG3QsEsppJ0MN3vKE0A0icBsx14tZnGXM8jFPicSkz3iaZibiboIewm4fVh6CrXA/640?wx_fmt=jpeg)

2个组合按键的检测电路

2种按键的4种不同状态，可以得到4个不同的分压值，经过12位ADC转换得到不同的ADC值，以此为中心划分为4个区间。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgz7dlqKzjNGkz4gD6XG3Qsd50icyib0ictswqgOlvicz07Aic64OoMKvZJzrZgA4HWh0vzFsRc4gergCQ/640?wx_fmt=jpeg)

4种组合状态的ADC区间划分

处理器通过判断转换得到的ADC值所在区间，以判断输入按键的状态。

如果ADC区间范围太小，当按键处于该区间对应的状态时，转换的ADC值有可能因为误差而落在其它区间，造成按键状态的误检测，为了避免这一情况，应该选择合适的电阻值，使得每一组按键状态对应的ADC区间的范围尽量大。

# 电阻阻值的选取

对于3个组合按键的ADC检测，根据上面的分析，电阻阻值的选择转换为以下约束条件，最大值的求解：

选择一组电阻R2，R3，R4，R1的阻值，计算3个按键的8个组合状态下的并联电阻与R1的ADC值，以此为中心划分8个区间，与相邻值的平均值为边界，划分8个区间；

每一个区间的边界之差为区间范围，求得8个区间中的最小范围值；

在所有可选阻值中，求解使得8个区间的最小范围值最大的一组阻值。

我们可以通过编写octave程序，将R2，R3，R4，R1遍历所有可选阻值，求出其中使最小范围值最大的一组阻值，程序如下：

```
re = linspace(1, 20, 30);%1kΩ-20kΩ之间等间隔取30个阻值rl=length(re);rk = [0 0 0;0 0 1;0 1 0; 0 1 1; 1 0 0; 1 0 1; 1 1 0; 1 1 1];%3个按键的8种状态列成3*8的矩阵maxdiff = 0;r2o = 0;r3o = 0;r4o = 0;r1o = 0;for i=1:rl  for j=1:rl    for m=1:rl      for n=1:rl         r2=re(i);         r3=re(j);         r4=re(m);         r1 = re(n);         gn = rk * [1/r2; 1/r3; 1/r4] + 0.00001;%矩阵乘法计算R2,R3,R4并联的导纳         rn = 1./gn;%计算3个电阻的并联阻抗         ad = 4096 * r1 ./ (rn + r1);         ads = sort(ad);         mind = 65535;         for p = 1:7            nd = ads(p + 1) - ads(p);            if(nd < mind)              mind = nd;%计算8个区间的最小范围值            endif         end         if(mind > maxdiff)          r2o = r2;          r3o = r3;          r4o = r4;          r1o = r1;          maxdiff = mind;//求解最小范围值的最大值         endif      end    end  endendmaxdiffr2or3or4or1o
```

遍历得到，R2=8.2kΩ，R3=10.8kΩ，R4=18.0kΩ，R1=6.3kΩ，此时8个ADC区间的最小范围值为186。‘

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgz7dlqKzjNGkz4gD6XG3Qs2LyuwLHdHySFlPBC8W6mib2bqXYXxEicOv5d5g3UUSZtN5NBO5QcDoTQ/640?wx_fmt=jpeg)

3个按键8组状态的ADC区间划分

# 汽车电子设计规范对按键检测的要求

根据某百年车企某特的软硬件设计规范要求，对按键检测有以下要求：

1) 按键断开时，最小的绝缘电阻为100KΩ，对于涉水的开关(比如门状态开关，最小的绝缘电阻为10KΩ)

2) 接键闭合时，最大的接触电阻为50Ω

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgz7dlqKzjNGkz4gD6XG3QsD4LJtg2SkyiaZY00vzmRUuMfa5HarBwTxyjmHl9rzmx6N4Xz0YMib6mA/640?wx_fmt=jpeg)

考虑了绝缘电阻和接触电阻的按键模式

3)对于有机械触点的按键，在闭合瞬间，需要提供不小于10mA的润湿电流(wetting current)

润湿电流是指能够通过维持一定的小电弧清理触头表面的尘垢和腐蚀以保持触头状态良好的最小电流值。

# 采用蒙特卡洛分析可靠性

R2、R3、R4、R1选择1%精度的电阻，考虑初始误差，老化和温度的影响，其阻值在95%至105%之间均匀分布；

按键断开时的绝缘电阻在100KΩ-1MΩ之间均匀分布；

按键闭合时的绝缘电阻在0-50Ω之间均匀分布；

ADC转换误差在-10LSB于+10LSB之间均匀分布；

用Octave编写蒙特卡洛仿真程序，

```
format long;adc = 0:1:4095;adcc = zeros(1, 4096);r2=8.2;r3=10.8;r4=18;r1=6.3;n=1000000;for i=1:n  r2d = ((rand - 0.5)*10/100 + 1) * r2;  r3d = ((rand - 0.5)*10/100 + 1) * r3;  r4d = ((rand - 0.5)*10/100 + 1) * r4;  r1n = ((rand - 0.5)*10/100 + 1) * r1;  r2on =r2d + (rand -0.5) * 0.05 + 0.025;  r3on =r3d + (rand -0.5) * 0.05 + 0.025;  r4on =r4d + (rand -0.5) * 0.05 + 0.025;  r2off =(rand - 0.5)*900 + 550;  r3off =(rand - 0.5)*900 + 550;  r4off =(rand - 0.5)*900 + 550;  rk = [0 0 0;0 0 1;0 1 0; 0 1 1; 1 0 0; 1 0 1; 1 1 0; 1 1 1];  rki = floor(rand*8);  rkn = rk(rki + 1,:);  r2n = r2on;  r3n = r3on;  r4n = r4on;  if(rkn(1) == 0)    r2n = r2off;  end  if(rkn(2) == 0)    r3n = r3off;  end  if(rkn(3) == 0)    r4n = r4off;  end  rs = 1/ (1 / r2n + 1 / r3n + 1 /r4n);  adv = r1n * 4096 / (r1n + rs);  adn = floor(adv +(rand - 0.5) *20);  if(adn < 0)    adn = 0;  end  if(adn >= 4096)    adn = 4095;  end  adn=adn+1;  adcc(adn)=adcc(adn)+1;end plot(adc, adcc);
```

取1000000个样本，统计仿真得到的ADC值，绘制分布图，如下：

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgz7dlqKzjNGkz4gD6XG3Qsq5tsq0GEQkO70P7jRnlwyea8CKum8DXuOfiaiam2gS2n9zm29fKEgicVg/640?wx_fmt=jpeg)

ADC值分布图

可见，8个按键组合的ADC值没有限定在区间范围内，而是发生了重叠。

也就是发生了按键状态误检测的现象。

结束：

将一个ADC口用于检测3个可能同时按下的按键时，会发生误检测的情况。

同时使用ADC口检测按键还存在没办法提供润湿电流的情况，在工作环境比较恶劣时，按键的机械触点易沾染灰尘等杂质，易被氧化，大大降低按键的使用寿命。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源头条物联网全栈开发。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。