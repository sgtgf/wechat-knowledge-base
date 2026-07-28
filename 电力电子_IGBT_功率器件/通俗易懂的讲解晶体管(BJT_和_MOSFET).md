# 通俗易懂的讲解晶体管(BJT 和 MOSFET)

原创 硬件笔记本 2024-04-16 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/rlxFDlLbMpqxWvBfH3f\_Vw](https://mp.weixin.qq.com/s/rlxFDlLbMpqxWvBfH3f_Vw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

  

晶体管是一个简单的组件，可以使用它来构建许多有趣的电路。在本文中，将带你了解晶体管是如何工作的，以便你可以在后面的电路设计中使用它们。

一旦你了解了晶体管的基本知识，这其实是相当容易的。我们将集中讨论两个最常见的晶体管：BJT和MOSFET。

  

晶体管的工作原理就像电子开关，它可以打开和关闭电流。一个简单的思考方法就是把晶体管看作没有任何动作部件的开关，晶体管类似于继电器，因为你可以用它来打开或关闭一些东西。当然了晶体管也可以部分打开，这对于放大器的设计很有用。

  

  

1 晶体管BJT的工作原理

  

让我们从经典的NPN晶体管开始。

  

下图是个双极结晶体管(BJT)，有三个引脚：

-   基极(B)
    
-   集电极(C)
    
-   发射极(E)
    

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjT4gkFmpqUplPNMUq0lgDudqmfrPO3IvNPic5o1zcJFI9jgKECf647IYOrR1Aj7tjAarMfb40Qt4A/640?wx_fmt=png&from=appmsg)

如果你打开它，电流可以通过它从集电极到发射极。当它关闭时，没有电流流过。

  

如下示例电路中，晶体管是关着的。这意味着没有电流可以通过它，所以发光二极管也被关闭了。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjT4gkFmpqUplPNMUq0lgDuYTw1ygzEBL5sviap6JKITNwjW3ib6tbwE8XojFqwVZhbI9v1NT8k1Ribw/640?wx_fmt=png&from=appmsg)

要打开晶体管，基极和发射极之间的电压约为0.7V。

  

如果你有一个0.7V的电池，你可以把它连接到基极和发射极之间，晶体管就会打开。

  

既然我们大多数人没有0.7V的电池，我们怎么打开晶体管？

  

很简单！晶体管的基极到发射极部分的工作原理是二极管，二极管有一个正向电压，它会从可用电压中“抓取”这部分电压。如果你在串联中加入一个电阻器，其余的电压就会在电阻器上分压。

  

因此，增加一个电阻器，你会自动获得0.7V左右。这和你通过LED限制电流确保它不会爆炸是一样的原理。

  

如果还添加了按键开关，则可以通过按键开关来控制晶体管，进而控制LED：

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjT4gkFmpqUplPNMUq0lgDugoef3wvrVYgfkyWnWv6FP4icCFnh9zC1hPIGpbziaibeYCsCicDIo89gyQ/640?wx_fmt=png&from=appmsg)

1.1 选择元器件的值

  

要选择元器件的值，还需要了解晶体管的工作原理：当电流从基极流向发射极时，晶体管打开，使更大的电流可以从集电极流向发射极。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjT4gkFmpqUplPNMUq0lgDu1wpUQr2PPuic7GFPZyKph1SwuwcYuJLN2RGFhWZpb5IXXXSknoQhD3Q/640?wx_fmt=png&from=appmsg)

这两种电流的大小是有联系的，这叫做晶体管的增益。

  

对于一般用途的晶体管，如BC547或2N3904，这可能在100左右。

  

这意味着，如果你有0.1mA从基极流向发射极，你可以有10毫安(100倍以上)从集电极到发射极。

  

你需要什么电阻值R1才能得到0.1mA的电流？

  

如果电池是9V，晶体管的基极到发射极达到0.7V，那么电阻器上还有8.3V。

  

你可以用欧姆定律要找到电阻值：

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/3nsLG1HndEdnQicx3uTGo3tAnAKVXszLy0nzbibD5aCQicr88ZqUqeQCFHv2jpQotm8Efv9JdqyPmOrX0OhBADRxw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

所以你需要一个83 kΩ的电阻。并不是说一定是这个标准值，82 kΩ也可以，而且它已经足够了。

  

R2可以将电流限制在LED上，可以选择没有晶体管时连接LED和电阻直接到9V电池时所用的阻值。比如，1kΩ应该可以满足正常工作。

  

1.2 如何选择晶体管

  

NPN晶体管是最常见的双极结晶体管(BJT)。但是还有一个叫做PNP晶体管和它的工作方式是一样的，只是所有的电流都在相反的方向。

  

在选择晶体管时，最重要的是要记住晶体管能承受多少电流。这叫做集电极电流(iC).

  

  

2 MOSFET的工作原理

  

MOSFET晶体管是另一种常见的晶体管。

  

它还有三个引脚：

  

-   GateG)
    
-   Source(S)
    
-   Drain(D)
    

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjT4gkFmpqUplPNMUq0lgDujWIWgYHkxRnVM9cRC7pNcH9RX3J9K1icPUu9FibHia6ia0PqGsIJyPcgcQ/640?wx_fmt=png&from=appmsg)

MOSFET符号(N通道)

  

MOS的工作原理类似于BJT晶体管，但有一个重要的区别：

  

-   对于BJT晶体管，电流从一个基极到另一个发射极，决定了从集电极到发射极能流多少电流。
    
-   对于MOSFET晶体管，电压栅极和源极之间的电流决定了有多少电流能从漏极流向另一个源极。
    

  

  

2.1 如何打开MOSFET

下面是一个打开MOSFET的电路示例。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQEAMtxAuia8D02RL8onIhKXCicZhuxFjFXGTmjrQ8mCt7nflKPq5L1RxQ/640?wx_fmt=png&from=appmsg)

  

如果要打开MOSFET晶体管，需要在栅极和源极之间的电压高于晶体管的阈值电压。例如，BS170有一个栅源阈值电压2.1V。(Datasheet中有注明)

  

MOSFET的阈值电压实际上是它关闭的电压。因此，要正确地打开晶体管，你需要一个稍高一点的电压。

  

电压多高取决于你想要通过多大的电流(在datasheet中会有注明)。如果你比阈值高出几伏，那通常对低电流的东西来说就足够了，比如打开一个LED。

  

请注意，即使你使用足够高的电压，可以使1A电流通过，这并不意味着你将得到1A。只是意味着你想让1A能通过，实际的电路连接特性才决定了实际的电流。

  

因此，你可以走到你想要的电流大小，只要你确保你不超过最大的栅极源电压限制(BS170是20V)。

  

在上面的例子中，当你按下按钮时，门被连接到9V，这打开了晶体管。

  

2.2 选择元器件的值

  

R1的值并不重要，但大约10kΩ应该可以正常工作，它的目的是关闭MOSFET。

R2用来设置LED的亮度。对于大多数LED来说，1kΩ应该工作得很好。

  

Q1几乎可以是任何N沟道MOSFET，例如BS170。

  

2.3 如何关闭MOSFET

  

关于MOSFET的一件重要的特性是，它的作用也有点像电容器。即栅极和源极部分，当你在栅极和源极之间施加电压时，这个电压会一直保持到放电为止。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjT4gkFmpqUplPNMUq0lgDuekauOicToqRXHhibaWZiaG1spicrc63OlCHvR2U7qAl4jAmibmXZd0ulguA/640?wx_fmt=png&from=appmsg)

如果没有上面例子中的电阻(R1)，晶体管就不会关闭。有了电阻R1，栅极源极电容就有了放电的闭环回路，从而使晶体管再次关闭。

  

2.4 如何选择MOSFET晶体管

  

上面的示例使用N通道MOSFET和P通道MOSFET的工作方式是一样的，只是电流流向相反的方向，并且栅极到电源电压必须是负值才能打开它。

  

有数千种不同的MOSFET可供选择。但如果你想建立上面的例子电路，并想要一个具体的建议，BS 170和IRF 510是两个很常用的。

  

在选择MOSFET时要记住两件事：

  

-   这个栅-源阈值电压。你需要更高的电压才能打开晶体管。
    
-   这个连续漏电流。这是流经晶体管的最大电流。
    

  

  

还有其他重要的参数也需要记住，不过这取决于你在做什么。但这不在本文的范围之内。记住以上两个参数，您就有了一个很好的开始。

  

2.5 MOSFET栅电流

  

如果你想控制一个MOSFET，例如，单片机、Arduino或Raspberry PI，还有一件事你需要记住：当你打开晶体管时，流进栅极的电流。

  

如前所述，MOSFET的栅到源充当电容器，这意味着一旦充电，就不会有更多的电流流过。因此，当MOSFET打开时，没有电流流过栅极。

  

但是当MOSFET刚被打开时有一个电流，就像你给电容器充电时一样。在极短时间内，可能会有大量的电流流动。

  

为了保护单片机不受过多电流的影响，需要添加一个MOSFET栅极电阻:

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaVKLDPI7jzHgKfHQnBjUDQsQSbbXVbvpg2ic1EQyvPibh3gYxF7hcialZudHSKw8PMrhe8xPfib6CHcQ/640?wx_fmt=png&from=appmsg)

  

对于这一点，通常1000Ω是一个很好的值。使用欧姆定律结合你的具体情况。

  
  

3 为什么需要晶体管

  

一个常见的问题是，为什么我们需要晶体管？为什么不把LED和电阻直接连接到电池上呢？

  

晶体管的优点是你可以用较小的电流或电压来控制更大的电流和电压。

  

这是超级有用的，如果你想要控制的东西，如电机，大功率LED，扬声器，继电器，和更多来自一个覆盆子PI/Arduino/微控制器。从这些板卡输出引脚通常只能提供几毫安在5V。因此，如果你想控制你的110 V室外露台灯，你不能直接从引脚供电。

  

相反，你可以通过继电器。但是，即使是继电器通常需要更多的电流比引脚所能提供的。所以你需要一个晶体管来控制继电器：  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjT4gkFmpqUplPNMUq0lgDuHDSNkvMAicLExW7eggMNSQibsRRpcqicia8ALK8MXcgf3L5qS8QN3YplNQ/640?wx_fmt=png&from=appmsg)

将电阻器的左侧连接到输出引脚(从Arduino开始)以控制继电器。

  

但是晶体管对于更简单的传感器电路也很有用，比如这个光传感器电路，触摸传感器电路，或H桥电路。

  

我们几乎在所有电路中都使用晶体管。它确实是电子学中最重要的部件。  

  

  

4 晶体管作为放大器

  

晶体管也是使放大器工作的原因。它不只是两个状态(开/关)，它也可以在“完全打开”和“完全关闭”之间的任何位置。

  

这意味着一个几乎没有能量的小信号可以控制晶体管，在晶体管的集电极发射极(或漏源)部分产生更强的信号。因此，晶体管可以放大小信号。

  

下面是一个简单的放大器用来驱动扬声器。输入电压越高，从基极到发射极的电流越高，通过扬声器的电流越高。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjT4gkFmpqUplPNMUq0lgDuvDic2t2bcFXTXia7k4gnFx5mAZG6oyPwaCyG313gwuXyjx62gvMUyyIw/640?wx_fmt=png&from=appmsg)

不同的输入电压使扬声器中的电流发生变化，从而产生声音的高低。

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。