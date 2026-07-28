# EMC主要从哪些方面来考虑

原创 硬件笔记本 2023-04-07 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/tQ81jvdWr78Hk8JgyC0ZPg](https://mp.weixin.qq.com/s/tQ81jvdWr78Hk8JgyC0ZPg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

电磁干扰的三要素是干扰源、干扰传输途径、干扰接收器。EMC就围绕这些问题进行研究。最基本的干扰抑制技术是屏蔽、滤波、接地。它们主要用来切断干扰的传输途径。广义的电磁兼容控制技术包括抑制干扰源的发射和提高干扰接收器的敏感度，但已延伸到其他学科领域。

本规范重点在单板的EMC设计上，附带一些必须的EMC知识及法则。在印制电路板设计阶段对电磁兼容考虑将减少电路在样机中发生电磁干扰。问题的种类包括公共阻抗耦合、串扰、高频载流导线产生的辐射和通过由互连布线和印制线形成的回路拾取噪声等。

  
在高速逻辑电路里，这类问题特别脆弱，原因很多：

  

1、电源与地线的阻抗随频率增加而增加，公共阻抗耦合的发生比较频繁；

2、信号频率较高，通过寄生电容耦合到步线较有效，串扰发生更容易；

3、信号回路尺寸与时钟频率及其谐波的波长相比拟，辐射更加显著。

4、引起信号线路反射的阻抗不匹配问题。

……

  

  

1

总体概念及考虑

  

1、五一五规则，即时钟频率到5MHz或脉冲上升时间小于5ns，则PCB板须采用多层板。

2、不同电源平面不能重叠。

3、公共阻抗耦合问题。

**  
模型：**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaL7Jgxumtj7dUeDO4QY915RKmxsH7M5TBAkUbJibQmPtd0lGu2XwXQgyTwl8qsMVUJ3jLPVorpKJA/640?wx_fmt=jpeg)

  

  

VN1＝I2ZG为电源I2流经地平面阻抗ZG而在1号电路感应的噪声电压。

由于地平面电流可能由多个源产生，感应噪声可能高过模电的灵敏度或数电的抗扰度。

  
**解决办法：**

①模拟与数字电路应有各自的回路，最后单点接地；

②电源线与回线越宽越好；

③缩短印制线长度；

④电源分配系统去耦。

  
4、减小环路面积及两环路的交链面积。

  
5、一个重要思想是：PCB上的EMC主要取决于直流电源线的Z  
  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaL7Jgxumtj7dUeDO4QY915ibZ6pRDA5O6w8ywHJ0BrGCxzIBFtDA7wX0nICJRBbRUlE66ibJoPxQHQ/640?wx_fmt=jpeg)

  

  

2

布局

下面是电路板布局准则：  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaL7Jgxumtj7dUeDO4QY915DcuOTic9kSlP4QvPCqvS3QC4GHe7ssZagHY3R3kWF3sicOqLOibjz8Xeg/640?wx_fmt=jpeg)

  
1、 晶振尽可能靠近处理器

2、 模拟电路与数字电路占不同的区域

3、 高频放在PCB板的边缘，并逐层排列

4、 用地填充空着的区域

  

  

3

布线

1、电源线与回线尽可能靠近，最好的方法各走一面。

2、为模拟电路提供一条零伏回线，信号线与回程线小与5：1。

3、针对长平行走线的串扰，增加其间距或在走线之间加一根零伏线。

4、手工时钟布线，远离I/O电路，可考虑加专用信号回程线。

5、关键线路如复位线等接近地回线。

6、为使串扰减至最小，采用双面＃字型布线。

7、高速线避免走直角。

8、强弱信号线分开。

  

  

4

屏蔽

**1屏蔽 > 模型：**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaL7Jgxumtj7dUeDO4QY915UrMCNXRnqZeYEXj2ZVibuwjVVQzKjyOKP17KDtsA8qazy5iczHs1RFVA/640?wx_fmt=jpeg)

屏蔽效能SE(dB)＝反射损耗R(dB)＋吸收损耗A(dB)

  
高频射频屏蔽的关键是反射，吸收是低频磁场屏蔽的关键机理。

  

2、工作频率低于1MHz时，噪声一般由电场或磁场引起，(磁场引起时干扰，一般在几百赫兹以内)，1MHz以上，考虑电磁干扰。单板上的屏蔽实体包括变压器、传感器、放大器、DC/DC模块等。更大的涉及单板间、子架、机架的屏蔽。

  
3、 静电屏蔽不要求屏蔽体是封闭的，只要求高电导率材料和接地两点。电磁屏蔽不要求接地，但要求感应电流在上有通路，故必须闭合。磁屏蔽要求高磁导率的材料做 封闭的屏蔽体，为了让涡流产生的磁通和干扰产生的磁通相消达到吸收的目的，对材料有厚度的要求。高频情况下，三者可以统一，即用高电导率材料(如铜)封闭并接地。

  
4、对低频，高电导率的材料吸收衰减少，对磁场屏蔽效果不好，需采用高磁导率的材料(如镀锌铁)。

  
5、磁场屏蔽还取决于厚度、几何形状、孔洞的最大线性尺寸。

  
6、磁耦合感应的噪声电压UN＝jwB.A.coso＝jwM.I1，(A为电路2闭合环路时面积；B为磁通密度；M为互感；I1为干扰电路的电流。降低噪声电压，有两个途径，对接收电路而言，B、A和COS0必须减小；对干扰源而言，M和I1必须减小。双绞线是个很好例子。它大大减小电路的环路面积，并同时在绞合的另一根芯线上产生相反的电动势。

  
7、防止电磁泄露的经验公式：缝隙尺寸 < λmin/20。好的电缆屏蔽层覆视率应为70％以上。

  

5

接地

1、300KHz以下一般单点接地，以上多点接地，混合接地频率范围50KHz～10MHz。另一种分法是：< 0.05λ单点接地；< 0.05λ多点接地。

  
2、好的接地方式：树形接地

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaL7Jgxumtj7dUeDO4QY915LCyjoWLPH2cxyoOhbheuhicyHiabgZRYAp93AQ8I4R7jkib318V9leq2Q/640?wx_fmt=jpeg)

  
3、信号电路屏蔽罩的接地。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaL7Jgxumtj7dUeDO4QY915NHT7k7PlPn7LMEKmY37ibV5p1E6BJ0LEtL9sSdM9pmY42KG2LNJaoXg/640?wx_fmt=jpeg)

  
接地点选在放大器等输出端的地线上。

  
4、对电缆屏蔽层，L < 0.15λ时，一般均在输出端单点接地。L<0.15λ时，则采用多点接地，一般屏蔽层按0.05λ或0.1λ间隔接地。混合接地时，一端屏蔽层接地，一端通过电容接地。

  
5、对于射频电路接地，要求接地线尽量要短或者根本不用接线而实现接地。最好的接地线是扁平铜编织带。当地线长度是λ/4波长的奇数倍时，阻抗会很高，同时相当λ/4天线，向外辐射干扰信号。

  
6、单板内数字地、模拟地有多个，只允许提供一个共地点。

  

7、接地还包括当用导线作电源回线、搭接等内容。

  

  

6

滤波

1、选择EMI信号滤波器滤除导线上工作不需要的高频干扰成份，解决高频电磁辐射与接收干扰。它要保证良好接地。分线路板安装滤波器、贯通滤波器、连接器滤波器。从电路形式分，有单电容型、单电感型、L型、π型。π型滤波器通带到阻带的过渡性能最好，最能保证工作信号质量。

一个典型信号的频谱：  
  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaL7Jgxumtj7dUeDO4QY915dIuyNF4mNMhsqnwykkzFq7BQdDzicxnnKqg6UG9EROSiclTOox1RAV4Q/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaL7Jgxumtj7dUeDO4QY915xlqC5C3UpJWrb2EDhCg0QvLCW9JVf8OiczG1njFoAibMsjb9ckzLxibDw/640?wx_fmt=jpeg)

  
2、选择交直流电源滤波器抑制内外电源线上的传导和辐射干扰，既防止EMI进入电网，危害其它电路，又保护设备自身。它不衰减工频功率。DM(差摸)干扰在频率 < 1MHz时占主导地位。CM在 > 1MHz时，占主导地位。

  
3、使用铁氧体磁珠安装在元件的引线上，用作高频电路的去耦，滤波以及寄生振荡的抑制。

  
4、尽可能对芯片的电源去耦(1-100nF)，对进入板极的直流电源及稳压器和DC/DC转换器的输出进行滤波(uF)。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaL7Jgxumtj7dUeDO4QY915pppSGET3dX6icn2TtLibuCaEIBrmwEZUM7ggQoB2z6FD8ypZoITPE6YA/640?wx_fmt=jpeg)

Cmin≈△I△t/△Vmax    △Vmax一般取2％的干扰电平。

注意减小电容引线电感，提高谐振频率，高频应用时甚至可以采取四芯电容。电容的选取是非常讲究的问题，也是单板EMC控制的手段。

  

  

7

其它

单板的干扰抑制涉及的面很广，从传输线的阻抗匹配到元器件的EMC控制，从生产工艺到扎线方法，从编码技术到软件抗干扰等。

  

一个机器的孕育及诞生实际上是EMC工程。最主要需要工程师们设计中注入EMC意识。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。