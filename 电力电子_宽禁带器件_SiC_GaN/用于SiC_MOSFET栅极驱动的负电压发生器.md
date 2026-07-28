# 用于SiC MOSFET栅极驱动的负电压发生器

原创 Jianlong Chen SiC碳化硅MOS管及功率模块的应用 2025-08-04 06:36 河南

> 原文地址: [https://mp.weixin.qq.com/s/Fthre4MMzMgFGZ\_JEdBraA](https://mp.weixin.qq.com/s/Fthre4MMzMgFGZ_JEdBraA)

文章来源：APEC2025(wolfspeed)

作者：Jianlong Chen

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHmlpMCPicqhZrjKSgMT5ibyAuNGaghmndxofhffjNmyRib3EN0x6ALUxWg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHyoWvrJAWsUBW6WPA1vFnWhMsIbD8bGtzLYWS682P8Eg2eOz6XWqb4g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHcicwmZCIdZOJGLDyvibPEY1KndBXTsC1qXjPkQicwZ9E3RMjeJlwD8IVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHKsiadRHFjSVtFCibggibb8GTW8tXkGZI9pgVicdEWWVeSL1kKSPOgNNUvA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHo7CBaMxRBxN05MqLkySxDPyqZ6PX2CiclD1STU2xe7lFrt5z4YbpYow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvH8h2E5FFDZJpwfogthVg1zzom8r5ibFA5lteCGC7TWVZdGCGpPjkqFJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHkIBzlpwhEVPic0vw8LQEhk6rXia3WQgGicJYHEticoGYjrd49RRKQX0ibOA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHtvRKMc0DqX6aDicRgYBPC5FWcpqic5hJ3y5bUz7QibpjFQA2oTVTkJNYw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHS1PQQEibLt7MXHQPFCbvxafgNfW4xal4ictsd2jXOqEEzwMuPaHWBj8Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHZngB7icMEy1jt9955NDprSw2kCic1l5bvQ3BCTdSeHnSucl01yo5j39g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHjokWF3WRicNlqMX0t8t7l1pLA2qsu32VzO3JIlts2EL99E8cLD2QF2A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHw8amSs7IT7vsnribWI7NNRiaMQBgNP992qEB5IRZTZePJO3PJEqHdEyQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHxySojfeMHUnEZuqhdEquunvtc6xYiabuwzLXscwuhbW8wSrI8CKiashg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHmw0J04Eiab5Hhkwwgedgpt99Dxf5icVr36U4zJuw67SnzgicRhSs64cZw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHXKInRSqdZP5mjiae3cAXibgXwRgCia3oxmibicSkq4VmFWWswARId70FQ1w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHGbEK0p64Ly20BJaejAShgTDzSQWLib78uxHkUkDzs7jI1kF9XX9Fia2w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnYzaMsGl21wzTTibVncNyvHOFHocL4K9ib6a83DngEgZJoNIOY9cjshpjzHQEgYic1AEibbd4s1Q43vA/640?wx_fmt=png&from=appmsg)

注：文字与报告无关

SiC MOSFET 栅极驱动的负电压发生器是为了确保 SiC MOSFET 可靠关断而设计的电路模块。由于 SiC MOSFET 开关速度快、dv/dt 高，容易造成栅极串扰，存在误开通风险，因此需要负压关断来保证系统安全。

以下是几种常见的 SiC MOSFET 栅极驱动负电压发生器方案：

  

**基于稳压管的负压发生器****：如北京大学东莞光电研究院提出的一种方案，电路由电源VDD1、电阻R1和R2、电容C8和C9以及稳压管D4 组成。VDD1 电源通过电阻R1//R2给电容C8//C9 充电，电容两端电压上升到 D4 反向击穿电压后，D4 两端电压稳定，从而建立负压 VDD2。D4 的稳压值取决于驱动负压大小，可根据稳压管推荐的反向工作电流来计算限流电阻 R1 和 R2。该方案可以实现全 PWM 开关周期的额定负压关断，在 SiC MOSFET 驱动中使用较为普遍。**

**利用电容充电的负压发生器：同样由北京大学东莞光电研究院提出，该方案利用电容 C1 实现负压关断。只有在 PWM 驱动信号使能条件下，VDD1 通过驱动芯片内部上拉管子给 C1 充电。C1 比 SiC MOSFET 输入电容要大很多，以确保最长的关断时间内，C1 在放电的情况下仍旧可以提供足够的负压。但此方案中，SiC MOSFET 在最初始的若干个 PWM 周期关断负压不足，开关频率越高，C1 充电到稳定负压的时间越长，负压关断不足的 PWM 周期数越多，驱动串扰隐患加剧。**

**基于辅助绕组的负压发生器：一种使用辅助绕组产生负压驱动 SiC MOSFET 的系统，包括辅助绕组、第一二极管、第一电阻、第一电容及驱动芯片。辅助绕组的一端接地，另一端与第一二极管的负极相连接，第一二极管的正极与第一电阻的一端相连接，第一电阻的另一端与驱动芯片的 VDD - 引脚及第一电容的负极相连接，第一电容的正极接地，驱动芯片的 GATE 引脚与 SiC MOSFET 管的栅极相连接。通过第一二极管对辅助绕组处的负压采样，第一电阻起到限流作用，可根据其大小调节驱动芯片中 VDD - 引脚处的负电压，第一电容起到储能及滤波作用，使得驱动芯片中 VDD - 引脚的电压能够稳定。**

**集成负电荷泵调节器的驱动器：如 IX4352NE 低侧 SiC MOSFET 和 IGBT 栅极驱动器，配备内部负电荷泵调节器，无需外部辅助电源设备或 DC/DC 转换器，能提供用户可选的负栅极驱动偏置，以实现更高的 dV/dt 抗扰度和更快的关断速度。其工作电压范围（VDD-VSS）高达 35V，逻辑输入与标准 TTL 或 CMOS 逻辑电平兼容，可简化电路设计并提高集成度。**

SiC MOSFET 栅极驱动负电压发生器的应用场景与其核心功能密切相关 —— 通过提供稳定的负栅极电压，抑制 SiC MOSFET 因高 dv/dt、快速开关特性导致的栅极串扰和误开通风险，确保器件可靠关断。以下是其主要应用场景：

### 1. **新能源汽车电驱系统**

### 

**场景特点：新能源汽车（纯电动、混合动力）的电机控制器中，SiC MOSFET 因高频、高效特性被广泛用于逆变器主回路，需承受高电压（如300V-800V）、大电流和快速开关动作。**

**负电压发生器作用：电驱系统中，电机运行时的高频PWM 信号会产生强电磁干扰，且SiC MOSFET 的高 dv/dt 易通过栅极寄生电容耦合形成干扰电压。负电压发生器提供- 5V~-10V 的关断电压，确保栅极在关断状态下稳定保持低电平，避免因干扰导致的误开通，防止桥臂直通等故障，保障行车安全。**

### 2. **工业电机驱动与伺服系统**

### 

**场景特点：工业领域的高压电机（如压缩机、风机、数控机床伺服电机）驱动中，SiC MOSFET 用于高频逆变器，以提升效率和功率密度，工作电压通常为 600V-1200V，开关频率可达几十 kHz。**

**负电压发生器作用：工业环境中电磁干扰复杂，且电机负载可能存在突变（如冲击性负载），导致电压波动。负电压发生器能稳定提供负偏压，增强栅极抗干扰能力，确保电机在高频开关下可靠运行，减少因误动作导致的设备停机或损坏。**

### 3. **光伏逆变器与储能系统**

### 

**场景特点：光伏逆变器将太阳能电池板的直流电转换为交流电，SiC MOSFET 的高频特性可减小滤波器体积、提高转换效率；储能系统（如锂电池储能变流器）则需处理高电压（如500V-1500V）和双向能量流动，开关频率高且工况多变。**

**负电压发生器作用：光伏和储能系统中，输入电压可能随光照、负载变化而波动，且逆变器常工作在高频（20kHz 以上），栅极串扰风险高。负电压发生器保证 SiC MOSFET 在关断时栅压稳定，避免因电压波动或干扰导致的误开通，提升系统可靠性和能量转换效率。**

### 4. **轨道交通牵引变流器**

### 

**场景特点：高铁、地铁等轨道交通的牵引变流器中，SiC MOSFET 用于实现直流 - 交流转换，工作电压高达 3kV-5kV，且需适应剧烈的振动、温度变化等恶劣环境，对器件可靠性要求极高。**

**负电压发生器作用：牵引变流器的高电压、大电流开关过程会产生极强的 dv/dt（可达 100kV/μs 以上），栅极寄生耦合效应显著。负电压发生器提供的稳定负偏压能有效抑制栅极干扰，防止 SiC MOSFET 误开通，确保列车牵引系统安全运行。**

### 5. **高压直流输电（HVDC）与柔性交流输电（FACTS）**  

###   

### 场景特点：在高压直流输电或柔性交流输电系统中，SiC MOSFET 用于换流阀等核心设备，工作电压高达数万伏，开关动作直接影响电网稳定性。

**负电压发生器作用：高压系统中，开关过程的电磁干扰可通过长电缆、母线等耦合至栅极，导致误动作。负电压发生器通过提供强抗扰的负栅压，确保 SiC MOSFET 在关断状态下的稳定性，避免电网故障（如短路、电压波动）。**

### 6. **航空航天电源系统**

### 

**场景特点：航空航天领域的电源系统（如飞机机载电源、卫星电源）需小型化、高效率，SiC MOSFET因高频特性成为优选，但需承受极端温度（-55℃~125℃）和振动环境。**

**负电压发生器作用：极端环境下，器件参数漂移可能加剧栅极不稳定性，负电压发生器需在宽温范围内提供稳定负偏压，确保 SiC MOSFET 可靠关断，保障航空航天设备的电源系统安全。**

### 总结

###   

SiC MOSFET 栅极驱动负电压发生器的核心应用场景均具备**高电压、高频开关、强电磁干扰**或**恶劣环境**等特点，其作用是通过稳定的负栅压抑制误开通风险，最终提升整个电力电子系统的可靠性、安全性和效率。只要涉及 SiC MOSFET 的中高压、高频应用，且对开关可靠性有严格要求，均需配置负电压发生器。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk8iay30Rkdxgr9lHMDHFcIL9s9icLpA7sMkZl1yeAoJ70pnzOEicPx72xfic8DAlykF9ISV9UaWFibgtA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&randomid=prggfyhv&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk8iay30Rkdxgr9lHMDHFcILvxnibEN9LH8II05JCjJuHZ0eJDvLRlLLPec3gpN4R5gy7IAvkRDiatdw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&randomid=pp884d0k&tp=webp)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8iay30Rkdxgr9lHMDHFcILQftGrb0sLqYcs0hr4mZSf1WbuCoQjtIcgLmencF3V61K3BE4h5A4Sw/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&randomid=78s9mwzf&tp=webp)