# 通过分析波形，透彻理解 UART 通信

原创 硬件笔记本 2024-05-09 07:43 四川

> 原文地址: [https://mp.weixin.qq.com/s/CWXQbseOul\_hMztgnwnP0w](https://mp.weixin.qq.com/s/CWXQbseOul_hMztgnwnP0w)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

**`UART`**是一种**`异步全双工串行通信`**协议，由 Tx 和 Rx 两根数据线组成，因为没有参考时钟信号，所以通信的双方必须约定**`串口波特率`**、**`数据位宽`**、**`奇偶校验位`**、**`停止位`**等配置参数，从而按照相同的速率进行通信。

异步通信以一个字符为传输单位，通信中两个字符间的时间间隔多少是不固定的，然而在同一个字符中的两个相邻位间的时间间隔是固定的。当波特率为 9600bps 时，传输一个 bit 的时间间隔大约为 104.16us；波特率为 115200bps 时，传输一个bit的时间间隔大约为 8us。

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfl49GF2Qxa6icgN8ibUkzkHj4kFsBCiaPP4yYK6N5YjhLXol35FZw9XJ8A4cKobc6uYmvZQ5ynCE3jicQ/640?wx_fmt=png&wxfrom=13&tp=wxpic)

  

数据传送速率用波特率来表示，即每秒钟传送的二进制位数。例如数据传送速率为120字符/秒，而每一个字符为10位（1个起始位，7个数据位，1个校验位，1个结束位），则其传送的波特率为10×120＝1200字符/秒＝1200波特。

数据通信时序图：

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfl49GF2Qxa6icgN8ibUkzkHj4SQtISRJByEngJvhXpoQeMibSKjkFlCfic3VPqAibtOGnl6JlLRE91aSbQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**其中各位的意义如下**： 

**`起始位`**：先发出一个逻辑”0”信号，表示传输字符的开始;

**`数据位`**：可以是5~8位逻辑”0”或”1”；如ASCII码（7位），扩展BCD码（8位）；小端传输，即LSB先发，MSB后发;

**`校验位`**：数据位加上这一位后，使得“1”的位数应为偶数(偶校验)或奇数(奇校验);

**`停止位`**：它是一个字符数据的结束标志。可以是1位、1.5位、2位的高电平（用于双方同步，停止位时间间隔越长，容错能力越强）;

**`空闲位`**：处于逻辑“1”状态，表示当前线路上没有数据传送;

  

注：异步通信是按字符传输的，接收设备在收到起始信号之后只要在一个字符的传输时间内能和发送设备保持同步就能正确接收。下一个字符起始位的到来又使同步重新校准（依靠检测起始位来实现发送与接收方的时钟自同步的)。  
  
![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfl49GF2Qxa6icgN8ibUkzkHj43p0eUbprawOOVo4d1PagRX6FRawf08umW2pSWRnsWsrE3ic0YtcXDibw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

↑图-1 起始位和停止位  

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfl49GF2Qxa6icgN8ibUkzkHj4cvSjEk4uia3HwBaxXbR7INSUcuPiaoEmic3RymqZoJFZnHVBuiaHRVdXPw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

↑图-2 数据位  
  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/xML2GYBfTfl49GF2Qxa6icgN8ibUkzkHj4o5oMFLJa9ByicnU92Uhd0v8ia1JjzN8BE3M8dIlUwnGsUUhwR1r2jU4w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

↑传输“A”  

  

上图是 uart 协议传输一个”A” 字符通过示波器的uart解码而得到的波形示意图。根据此图来介绍一下 uart 的一些基本参数。 

**`波特率：`**此参数容易和比特率混淆，其实他们是有区别的。但是我认为 uart 中的波特率就可以认为是比特率，即每秒传输的位数(bit)。一般选波特率都会有9600、19200、115200 等选项。其实意思就是每秒传输这么多个比特位数(bit)。 

**`起始位：`**先发出一个逻辑”0”的信号，表示传输数据的开始。 

**`数据位：`**可以选择的值有 5,6,7,8 这四个值，可以传输这么多个值为 0 或者 1 的bit位。这个参数最好为8，因为如果此值为其他的值时当你传输的是 ASCII 值时一般解析肯定会出问题。理由很简单，一个ASCII字符值为8位，如果一帧的数据位为7，那么还有一位就是不确定的值，这样就会出错。 

**`校验位`**：数据位加上这一位后，使得“1”的位数应为偶数(偶校验)或奇数(奇校验)，以此来校验数据传送的正确性。就比如传输 “A”(01000001) 为例。   
1、当为奇数校验：”A”字符的8个bit位中有两个1,那么奇偶校验位为1才能满足1的个数为奇数(奇校验)。图-1的波形就是这种情况。   
2、当为偶数校验：”A”字符的8个bit位中有两个1,那么奇偶校验位为0才能满足1的个数为偶数(偶校验)。   
此位还可以去除，即不需要奇偶校验位。 

**`停止位`**：它是一帧数据的结束标志。可以是 1bit、1.5bit、2bit 的空闲电平。可能大家会觉得很奇怪，怎么会有1.5位~没错，确实有的。所以我在生成此 uart 信号时用两个波形点来表示一个bit。这个可以不必深究。。。 

**`空闲位`**：没有数据传输时线路上的电平状态。为逻辑 1。 

**`传输方向`**：即数据是从高位(MSB)开始传输还是从低位(LSB)开始传输。比如传输 “A” 如果是 MSB 那么就是 01000001（如图-2），如果是 LSB 那么就是10000010（如下图的图-4）   
uart 传输数据的顺序就是：刚开始传输一个起始位，接着传输数据位，接着传输校验位(可不需要此位)，最后传输停止位。这样一帧的数据就传输完了。接下来接着像这样一直传送。在这里还要说一个参数。 

**`帧间隔`**:即传送数据的帧与帧之间的间隔大小，可以以位为计量也可以用时间(知道波特率那么位数和时间可以换算)。比如传送”A”完后，这为一帧数据，再传”B”，那么A与B之间的间隔即为帧间隔。 

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfl49GF2Qxa6icgN8ibUkzkHj4hp4rnQbib6IjjCFJ1icpbqD4nOUMx6qIa10v9oXjptdnmghbz9aNf5VA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

 ↑图-3

  

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfl49GF2Qxa6icgN8ibUkzkHj4RUy8QC1qibBUujYicPYxWAtobUOGI7MBVVdeau8l0s62Oxsibjn8KT1bg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

 ↑图-4

上两图和下两图传送的数据和波特率都是一样的，但是有几个参数是故意设置反了从而形成对比。有助于更深入的理解UART。 

![](https://mmbiz.qpic.cn/mmbiz_png/xML2GYBfTfl49GF2Qxa6icgN8ibUkzkHj4cvSjEk4uia3HwBaxXbR7INSUcuPiaoEmic3RymqZoJFZnHVBuiaHRVdXPw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：文章来源面板包社区。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。