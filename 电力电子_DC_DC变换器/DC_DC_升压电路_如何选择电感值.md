# DC-DC 升压电路，如何选择电感值

原创 硬件笔记本 2023-02-08 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/6eCfNXKD7Gmx0vjb8DPoNw](https://mp.weixin.qq.com/s/6eCfNXKD7Gmx0vjb8DPoNw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

升压拓扑结构在功率电子领域非常重要，但是电感值的选择并不总是像通常假设的那样简单。在 dc - dc 升压转换器中，所选电感值会影响输入电流纹波、输出电容大小和瞬态响应。选择正确的电感值有助于优化转换器尺寸与成本，并确保在所需的导通模式下工作。本文讲述的是在一定范围的输入电压下，计算电感值以维持所需纹波电流和所选导通模式的方法，并介绍了一种用于计算输入电压上限和下限模式边界的数学方法。 

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjbvJU4Lp62btVBXeCwydSW67YXTfYxvBgzbPHlILApRO53hOx3icrbzickICueksXReKKcOlEDpIvg/640?wx_fmt=png)

  

  

  

  

**导通模式**

  

  

  

升压转换器的导通模式由相对于直流输入电流 (IIN) 的电感纹波电流峰峰值 (ΔIL) 的大小决定。这个比率可定义为电感纹波系数 (KRF)。电感越高，纹波电流和 KRF 就越低。  
  
![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZgm1UNzoVCfYS2MDjldJtY5rZ48rDVC70FeHyvzxxickxOlK1UWtHYhQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (1) ， 其中  ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZC7ZgxOLny2C9hwAc4NzGcEdSXJWrvAQ4yqdmw0iafc3CMeflbXtr7WA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (2)  
   
在连续导通模式 (CCM) 中，正常开关周期内，瞬时电感电流不会达到零 (图1)。因此，当 ΔIL 小于 IIN 的2倍或 KRF <2时，CCM 维持不变。MOSFET 或二极管必须以 CCM 导通。这种模式通常适用于中等功率和高功率转换器，以最大限度地降低元件中电流的峰值和均方根值。当 KRF > 2 且每个开关周期内都允许电感电流衰减到零时，会出现非连续导通模式 (DCM) (图2)。直到下一个开关周期开始前，电感电流保持为零，二极管和 MOSFET 都不导通。这一非导通时间即称为 tidle。DCM 可提供更低的电感值，并避免输出二极管反向恢复损耗。 

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjbvJU4Lp62btVBXeCwydSWeicG63gRCkuf0NTWk2akmHy0RCYFdLPcy4XAUEb2j8zqOTgxWS9r2tQ/640?wx_fmt=jpeg)

图1 – CCM 运行  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjbvJU4Lp62btVBXeCwydSWiaNUv0G2EoJ2WhQtibAD9JUNAic2vVMic9uy5QOILn9oPXsj5wK2boOVNA/640?wx_fmt=jpeg)

图2 – DCM 运行

  

当 KRF = 2 时，转换器被认为处于临界导通模式 (CrCM) 或边界导通模式 (BCM)。在这种模式下，电感电流在周期结束时达到零，正如 MOSFET 会在下一周期开始时导通。对于需要一定范围输入电压 ( VIN）的应用，固定频率转换器通常在设计上能够在最大负载的情况下在指定 VIN 范围内，以所需要的单一导通模式 (CCM 或 DCM) 工作。随着负载减少，CCM 转换器最终将进入 DCM 工作。在给定 VIN 下，使导通模式发生变化的负载就是临界负载（ICRIT）。在给定 VIN 下，引发 CrCM / BCM 的电感值被称为临界电感（LCRIT），通常发生于最大负载的情况下。

  

  

  

  

**纹波电流与 VIN**

  

  

  

众所周知，当输入电压为输出电压 (VOUT) 的一半时，即占空比 (D) 为50％时 (图3)，在连续导通模式下以固定输出电压工作的 DC－DC 升压转换器的电感纹波电流最大值就会出现。这可以通过数学方式来表示，即设置纹波电流相对于 D 的导数 (切线的斜率) 等于零，并对 D 求解。简单起见，假定转换器能效为100％。  
   
根据 ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZ0pu9jXFFmCnSObRPJQOGPXastpmWXGoXFpyohuDMoneiaBasLicZhZZQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (3)、![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZx7siaBNBiblSXT6WkIH5SibKLzAkcDvQXeU6zJrMtWXH9ShIoFF9pJx9g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (4) 和 ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZq8vwgaLllIa5ZEQCIiasnsM35yzDvDROynBZnF09ibjkftv7Y7JCt2qA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (5),  
   
并通过 CCM 或 CrCM 的电感伏秒平衡![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZDNSWguV1mfI0ib1jjOicibql22VKSVlsjBFER9VU6Ov1lgSmW6m9Rjs6A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (6),  
   
则 ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZ5hWxyZFqUBCAWcgJ8hUdNiaOghnvIngziaAlKzyrTv2zEnXTY407oAoQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (7).  
   
将导数设置为零,   ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZLcnicjXmicibL30bcyK2HUMPiaEdWzWjf0QAoSY1xuSiaYoChXnAb4XH8nA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (8)  
我们就能得出 ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZUK7gH997P53sUjeVlyl4j7RDHibfh5WRYDbDrKIptdoicZoo3SVUib4bA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (9).   

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjbvJU4Lp62btVBXeCwydSWSVgKp1Hw4M1rRyQKAuDRD3gsb89SDt4BjsDIFvMjYOibJp4XEXKWWrg/640?wx_fmt=jpeg)

图3 – CCM 中的电感纹波电流

  

  

  

  

**CCM 工作**

  

  

  

为了选择 CCM 升压转换器的电感值 (L)，需要选择最高 KRF 值，确保整个输入电压范围内都能够以 CCM 工作，并避免峰值电流受 MOSFET、二极管和输出电容影响。然后计算得出最小电感值。KRF 最高值通常选在0.3和0.6之间，但对于 CCM 可以高达2.0。如前所述，当 D = 0.5 时，出现纹波电流 ΔIL 最大值。那么，多少占空比的情况下会出现 KRF 最大值呢？我们可以通过派生方法来求得。  
  
假设 η = 100%， 则 ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZTeSXwWy1jbSlzcE0ib0hLu6TbDCLibcr5CJCusT8WqkSQYuEz17ibBiabA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (10),    
   
然后将(2)、(6)、(7) 和 (10) 代入(1) ，得出: ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZf5GS4TdWzyW1zavrSIHeVT5XSMNk3M3TpfAkfk205ukf4dqLZiblecQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1) (11)                           ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZGtkZdg4VFdfuia89y08SiaSuAH30zH8ib3iao9icYpPt5ib4Vq7SRyrlvcVg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (12).    
   
对 D 求解，可得![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZLA3xOzT2icQO8fWsqmbUT0Q2DLwkIhRhdZTgaPBMV5yXFkJAUxicfDpg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (13).  
  
D = 1 这一伪解可被忽略，因为它在稳态下实际上是不可能出现的 (对于升压转换器，占空比必须小于1.0)。因此，当 D =⅓ 或 VIN = ⅔VOUT 时的纹波因数 KRF 最高，如图4所示。使用同样的方法还能得出在同一点的最大值 LMIN、LCRIT 和 ICRIT。 

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjbvJU4Lp62btVBXeCwydSWdRB9k6lZBndF66FqbR9vxpLAyJ1c18vovXmQ6vtvAl7sR0euibr65Sw/640?wx_fmt=jpeg)

图4 – 当 D =⅓ 时 CCM 纹波系数 KRF 最高值

 对于 CCM 工作，最小电感值 (LMIN)应在最接近 ⅔ VOUT 的实际工作输入电压 (VIN(CCM)) 下进行计算。根据应用的具体输入电压范围，VIN(CCM) 可能出现在最小 VIN、最大 VIN、或其间的某个位置。解方程 (5) 求 L，并根据 VIN(CCM) 下的 KRF 重新计算，可得出![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZTyS6JtknGdSUbAkicRV3DTILGGyAwic0cVv1TFCe4pdkdiaefX1MyQvFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (14)，其中 VIN(CCM) 为最接近⅔VOUT 的实际工作 VIN。    
     
对于临界电感与 VIN 和 IOUT 的变化，KRF = 2，可得出 ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZ2TicmiagSwLHEuMG9RC3NxzjDS4ibWiaM67XNIhAGOcXicVTsgaudMf5tIw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (15).  
   
在给定 VIN 和 L 值的条件下，当 KRF = 2时，即出现临界负载 (ICRIT)： ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZ6ia67sc0E5ziam9wPBeiaAaicFJia5PTB4BJo9wd3lO4OSh9qDWqTSAxNCA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (16) 

  

  

  

**DCM 工作** 

  

  

  

如图5所示，在一定工作 VIN 和输出电流 (IOUT) 下的电感值小于 LCRIT 时，DCM 模式工作保持不变。对于 DCM 转换器，可选择最短的空闲时间以确保整个输入电压范围内均为 DCM 工作。tidle 最小值通常为开关周期的3％-5％，但可能会更长，代价是器件峰值电流升高。然后采用 tidle 最小值来计算最大电感值 (LMAX)。LMAX 必须低于 VIN 范围内的最低 LCRIT。对于给定的 VIN，电感值等于 LCRIT (tidle= 0) 时引发 CrCM。 

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjbvJU4Lp62btVBXeCwydSWs0nRW13RnBRkxxy9ok2DTwBGTIfbC3EB8mtmVtPzo3L7s8SibQAJqnA/640?wx_fmt=jpeg)

图5 – LCRIT 与标准化 VIN 的变化

 为计算所选最小空闲时间 (tidle(min)) 的 LMAX，首先使用 DCM 伏秒平衡方程求出 tON(max) (所允许的 MOSFET 导通时间最大值) 与 VIN 的函数，其中 tdis 为电感放电时间。 ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZ4KlsMDiaQxgQEHlQcEYvt6iaxBgrNxcrjNy2ZtCPFvLJhYZgSoSdmCPg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (17)，其中

 ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZbu15crwHbOTXmOiacB7dcaRlXd1AyJk2KoTXJ0KHKFE0786iaj453aXg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (18)  
   
可得出 ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZGe3RVFrgUnr6pmlU0gNQnUOCCpVTs32B7QvFWbqNMrIrdsJicthKUkQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (19).  
   
平均 (直流) 电感电流等于转换器直流输入电流，通过重新排列 (17)，可得出 tdis 相对于 tON 的函数。简单起见，我们将再次假设 PIN = POUT。 ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZibO9Eh8LBDeIv9PLD7de4t3OdsEaI7gfovCvNypfcFMkia8qPeuRICkg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (20) ，其中![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZZSeANoUvuopZL9vePlkhCVFSH5nsqIsQWkLYgG9gGxpk0YLJcTkFZg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (21).  
   
将方程 (3)、(5)、(10)、(19) 和 (21) 代入 (20)，求得 VIN (DCM) 下的 L ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZhFZoibLF0xFtevTgMTsZiac72wxImHOfWPuZoS1T0F3gxeZke8GIbgLQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (22). LMAX 遵循类似于 LCRIT 的曲线，且同在 VIN = ⅔VOUT 时达到峰值。为确保最小 tidle，要计算与此工作点相反的实际工作输入电压 (VIN (DCM)) 下的最低 LMAX 值。根据应用的实际输入电压范围，VIN(DCM) 将等于最小或最大工作 VIN。若整体输入电压范围高于或低于 ⅔ VOUT（含⅔ VOUT），则 VIN(DCM) 是距 ⅔ VOUT 最远的输入电压。若输入电压范围覆盖到了 ⅔ VOUT，则在最小和最大 VIN 处计算电感，并选择较低 (最差情况下) 的电感值。或者，以图表方式对 VIN 进行评估，以确定最差情况。 

  

  

  

**输入电压模式边界** 

  

  

  

当升压转换器的输出电流小于 ICRIT 与 VIN 的最大值时，如果输入电压增加到高于上限模式边界或下降到低于下限模式边界，即 IOUT 大于 ICRIT 时，则将引发 CCM 工作。而 DCM 工作则发生于两个 VIN 的模式边界之间，即 IOUT 小于 ICRIT 时。要想以图表方式呈现 VIN 下的这些导通模式边界，在相同图表中绘制临界负载 (使用所选电感器) 与输入电压和相关输出电流的变化曲线。然后在 X 轴上找到与两条曲线相交的两个 VIN 值 (图6)。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjbvJU4Lp62btVBXeCwydSWho3rypcCYesN53Oqn6B0a06Xg0gmibp9mZkwxdwy28KJq3hxEQluQMw/640?wx_fmt=jpeg)

图6 – 输入电压模式边界

 要想以代数方式呈现 VIN 的模式边界，首先将临界负载的表达式设置为等于相关输出电流，以查找交点： ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZuujcfrd2dMfwEtdGkZn18DDgKN1WH4evPblqfwaiadicSFEArFQAvymg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (23).  
   
这可以重写为一个三次方程，KCM 可通过常数计算得出 ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZojLndFaL6M8WkMgbOKLvWwexXN87nIeRSwpFNNBicU4ZwZZZ1KK8Jdw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (24)     其中

![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZlCUWEIrmTMgfcuB45C5rkAdn8aeFrVPoHvCS74M26d71mrLrBBTQ1w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (25).  
   
这里，三次方程通式 x3 + ax2 + bx + c = 0 的三个解可通过三次方程的三角函数解法得出 \[1\] \[2\]。在此情况下，x1 项的“b”系数为零。我们将解定义为矢量 VMB。  
   
我们知道 ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZUHfdcwK5Ec77ia6dIN9eUGiaftFmBolFREmwLJicztH8mnQUYhRKPHZSQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (26)、  

  ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZqhmickjXkJoFL5icb7cibx3XfGeJ3sskmzAyLrq4FJiaWaibBbJncdWL3OQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (27)、   以及

![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZ3bDHgGIuvzgMibnRPf2tGbibicQf7VczMBIoM1XssYdx4teCNExicS2vPA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (28), ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZ7hm8RBLAVMYU1aE1sYqiat3AJ2CJYW5xY26Sv6lrlq9NricAm5aIpKFw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZlV8ccP9WuDV6ibZiaPDcLAgxdt3awqOYPjicdgicaMZ2NNdGPIKWpTAibhA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  (29).  
   
由于升压转换器的物理限制，任何 VMB ≤ 0或VMB > VOUT 的解均可忽略。两个正解均为模式边界处 VIN 的有效值。 

  

  

  

**模式边界 – 设计示例** 

  

  

  

我们假设一个具有以下规格的 DCM 升压转换器：  
   
VOUT  = 12 V  
IOUT  = 1 A  
L  = 6 μH  
FSW  = 100 kHz  
   
首先，通过 (25) 和 (28) 计算得出 KCM 和 θ： ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZk2azgiafh0I8ORDvGiaVTJWgWAiaKqTibC5wL2xWPZia3s2uumesD3YYZfQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  
 ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZLRvYCb9RRbnUddFNQ2yuufjCg162OLgaI4hg5SJJvtYbfCG2CWFlgw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1).  
   
将 VOUT 和计算所得的 θ 值代入 (29)，得出模式边界处的 VIN 值： ![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZc61Zw4wQ0b200Aa7X8Tj05le5CQykeicDXrGr4PgiaCxBuJ1EKCFRkIw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/mmbiz_png/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZiaWo56dAQLMib8zXl6PmssOC9aQAA8Zr1t1ibsZibiaAxibSoKiaCarYLE3icw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1).  
   
忽略伪解 (-3.36 V)，我们在 4.95 V 和 10.40 V 得到两个输入电压模式边界。这些计算值与图7所示的交点相符。 

![](https://mmbiz.qpic.cn/mmbiz_jpg/HAdNd8ibDwCGIDMuRYdKbYx3XCoOVn1vZZacHXHtXNtT6P5mBC1WnxPobglovbPhsSI7ve5wBrWVHnAicH9ficIMQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

图7 – 计算得出的模式边界

  

  

  

  

**结论** 

  

  

  

电感值会影响升压转换器的诸多方面，若选择不当，可能会导致成本过高、尺寸过大、或性能不佳。通过了解电感值、纹波电流、占空比和导通模式之间的关系，设计人员就能够确保输入电压范围内的所需性能。 

  

  

  

**参考文献** 

  

  

  

\[1\] H. W. Turnbull, Theory of Equations, Chapter IX, Edinburgh & London: Oliver and Boyd, 1952.  
  
\[2\] I. J. Zucker, "The cubic equation - a new look at the irreducible case," The Mathematical Gazette, vol. 92, no. 524, pp. 264-268, July 2008.

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。