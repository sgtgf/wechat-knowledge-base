# 直流电机h桥驱动方式有哪些

原创 电机新视界 2024-05-21 17:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/hAgmlCypdwRANfF2fEQAHQ](https://mp.weixin.qq.com/s/hAgmlCypdwRANfF2fEQAHQ)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0vnX1lWHoFibqUI1eNcg9vflNcVlSB8kBgOtVA8Ygm35kunaly4sHD18CNj06oiabQHJB1eodW2qulg/640?wx_fmt=jpeg&from=appmsg)

  


  

来源：电工与电气控制技术知识

在现代工业控制系统中，直流电机因其出色的速度和位置控制性能而得到广泛应用。其中，H桥电路作为一种常见的电机驱动方案，能够实现电机的正反转及速度调节。今天，我们就来深入探讨H桥电路的三种基本驱动方式：受限单机、单极和双极模式，并分析它们的工作原理与应用场景。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/GJ0wqfRCxtuqka7HVdgHq0HDlKxibQLGDBPou9iazePpOiakiaMehf0Ec0ao63XSjovv6K3KsjEVllaQFaic6qSAakA/640?wx_fmt=png&from=appmsg&wxfrom=13)

电机电枢驱动电压极性是单一的，这意味着它只能通过改变PWM控制信号来调节电机的转速。这种控制方式的优点在于其简单性，因为只需要对一个MOS进行PWM控制即可实现电机的调速。然而，这种控制方式也存在一些缺点。

首先，由于电压极性是单一的，电机无法实现刹车和能耗制动，这限制了其在需要快速停止或精确控制的应用中的使用。其次，当负载超过设定速度时，电机无法提供反向力矩，这可能导致系统的不稳定性和调速性能的下降。此外，由于电压极性的单一性，调速静差较大，调速性能较差，稳定性也不理想。

因此，在设计电机控制系统时，需要综合考虑这些因素，选择适合的控制方式以实现所需的性能要求。

接下来，我们看看单极模式。单极驱动方式指的是在电机运行过程中，只有一组开关（通常是下桥臂或上桥臂的两个开关）被用来控制电流的流向。这种方式简单且成本较低，但在大功率应用中可能会引起较大的功耗和热量。可以将其比作一条单车道的道路，车辆（电流）只能在这条道路上单向行驶，效率自然不如双向车道高。

最后是双极模式，这是一种更为高效的驱动方式。在双极模式中，H桥的所有四个开关都会参与工作，通过快速地切换上下桥臂的导通状态，不仅可以改变电流的方向，还可以通过调整开关的占空比（PWM信号的宽度）来精确控制电机的速度。这种模式就像是一个四车道的高速公路，能够支持双向通行，并且可以根据交通流量实时调整车道的使用，大大提高了运输效率。

在实际选择驱动方式时，工程师会根据应用需求和电机特性来决定。例如，如果电机需要在频繁启停的环境中工作，受限单机模式可能是最佳选择；而在对效率要求较高的场合，双极驱动则更为合适。单极驱动由于其控制简单且成本较低，常用于一些小型或低功率设备中。

总结来说，受限单机、单极和双极模式各有千秋，它们都是H桥电路驱动直流电机的不同策略，了解这三种驱动方式的特点和应用，对于电机控制系统的设计和维护至关重要，它们就像是工匠精心打磨的工具，能够帮助我们更好地驾驭电机，完成各项复杂的任务。


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0s3XKZR1KtlxFAuIoGYBDeHH3cUQjZhhwP3ibXQ70NSJO9zrLzszLTuWdV18EcNU3gKvQ0G5AfvRMA/640?wx_fmt=png)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vTicAlmdAM5kmIicsPkDYY96WxUU7Fgeicr3EF8TShjxlP65ccvCvqh45flVSeAdLP2t4dNfPxicjicww/640?wx_fmt=png)