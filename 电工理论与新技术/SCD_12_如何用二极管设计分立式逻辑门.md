# SCD-12：如何用二极管设计分立式逻辑门


> 原文地址: [https://mp.weixin.qq.com/s/DI-1iu2788V6RsjC-y6ITQ](https://mp.weixin.qq.com/s/DI-1iu2788V6RsjC-y6ITQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRgyibE9PLhAm9F6M9xxsYHKyia4ac8AIumcfjqeRecNN9Mp0icoib1m21HGejgJfkdiaOjGyDzt6Ck6XQ/640?wx_fmt=png)

____**★★★**______SCD-12---二极管逻辑门______**★★★**____

引言：在板极逻辑系统控制中，在很多情况下会使用分立式逻辑控制而不是专门的逻辑芯片，本节主要讲解二极管分立式逻辑门的设计。

### __€1.二极管与门__

如**_图12-1_**是使用两个二极管组成的与门，当X或Y其中有一个或全部为低电平时，Z均为低电平，只有当X和Y都为高电平时，Z才为高电平，其中用1个二极管和1个电阻也可以组成与门，但不建议这么做，因为R1和R2会形成一个分压电路，当Y为低电平时，Z处的电压需要分压计算，避免超过GPIO的耐压值。一般来说，VCC的电压建议和所用GPIO高电平值保持一致。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSmTlzichUnWNt39LLneQ7NKHGzy2BLic6vun6LBKRb100ib3Y8Dffx3VOeR5HSFXSVTos1pDW4E4Zgw/640?wx_fmt=png)

**_图12-1：二极管与门_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhB56ia5TK6TlZCzcoSckITib3Syr3khQJDeY0m6NsyOOWKpRUj2fYBAFzQ/640?wx_fmt=png)

**_图12-2：二极管与门真值表_**

### __€2.二极管或门__

### 如**_图12-3_**和**_图12-4_**为两个或门电路，X和Y只要有一个为高电平，输出Z就为高电平。同样的，用1个电阻和1个二极管也可以组成或门，但建议使用双二极管形式。常用设计是**_图12-3_**所示，无需额外的偏置电阻，适用于走线距离短，周围干扰小，高低电平判断阈值相差较大的场景。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSmTlzichUnWNt39LLneQ7NKBVtItQseGQNN2SsBTmbu5f4ZjbjHDqmIVL5ia76X7fws9rILrfKTTwg/640?wx_fmt=png)

**_图12-3：二极管或门_**

当逻辑走线比较长且经过干扰源时，可以加下拉偏置电阻，增强钳位能力，避免X，Y低电平时，D1和D2不导通，此时Z相当于悬空，容易耦合干扰信号导致发生误判或误触发。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSmTlzichUnWNt39LLneQ7NKCURX4aNc84JE0EpmGe28PiagCicjrr0HZSA7Ope1fyqM8fFrQuOBhOMQ/640?wx_fmt=png)

**_图12-4：优化后二极管或门_**

**_![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRBQvvMuVGVlTPbJsbdZYhBA9IAESYhIgHqV3lB7gbnOnuUasI5gWlf43GlzBEYUCG7UlEA5rPYEw/640?wx_fmt=png)_**

**_**_图12-5：二极管或门真值表_**_**

### __€3.使用注意__

分立式二极管逻辑门的使用一定要注意以下四点：

1#：控制逻辑是否满足要求。

2#：逻辑控制一定是单向控制，也即不能发生倒灌现象。

3#：上下游逻辑电平一定要保持一致，可以使用简易电阻分压达到这一目的。

4#：四是二极管自身的导通压降可能会影响高低电平的判断，需要综合考虑二极管选型和电平阈值。

**_图12-6_**是一个常见的或门使用：A，B，C作为复位信号输入，只要外部某一个触发了复位信号均能将MCU/SOC复位重启，避免系统一直处于宕机状态。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSmTlzichUnWNt39LLneQ7NKzLriarF69D4VT8Cbh0a4WoPibibiaAV4NgoSkv6zV5xXz4I1cAiaH1ugFicQ/640?wx_fmt=png)

**_图12-6：多复位或门使用_**