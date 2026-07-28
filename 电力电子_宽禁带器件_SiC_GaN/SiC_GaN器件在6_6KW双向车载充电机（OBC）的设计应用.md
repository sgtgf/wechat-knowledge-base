# SiC/GaN器件在6.6KW双向车载充电机（OBC）的设计应用

原创 Fred C.Lee SiC碳化硅MOS管及功率模块的应用 2025-06-18 12:18 广东

> 原文地址: [https://mp.weixin.qq.com/s/ccFKkFsM7vxM6i9uTqnI8A](https://mp.weixin.qq.com/s/ccFKkFsM7vxM6i9uTqnI8A)

前言：SiC（碳化硅）和 GaN（氮化镓）作为宽带隙半导体材料，凭借其优异的物理特性，在功率器件领域展现出显著优势，推动了多个行业的技术革新。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsl8ghEGXdbbj5I18H072SYEGyYgULUNMXpJh56IeTMIllOmeyAU6r6pcib0hh7rzNRvtlTZsvBAenA/640?wx_fmt=png&from=appmsg)

SiC在高压、高温和成熟技术方面表现出色，而GaN则在高频、低成本和快速研发方面具有优势。这些性能优势使得SiC和GaN功率器件在各种新兴应用市场中具有广阔的前景，包括新能源汽车、光伏、机车牵引、智能电网、节能家电和通信射频等领域。随着技术的不断进步，SiC和GaN功率器件将继续推动电力电子行业的创新和发展。

# SiC和GaN宽带隙功率器件的性能优势

#   

## SiC（碳化硅）功率器件的性能优势

##   

1.  高压耐受性强：击穿场强是硅的 10 倍，适合制作 1200V 以上高压器件（如 1700V、3300V 模块），减少串联器件数量，降低系统复杂度。  
    
2.  低导通损耗：同等电压下，SiC MOSFET 的导通电阻比硅 IGBT 低 10 倍以上，适合大功率场景（如电动汽车电机驱动，效率提升 2%~3%）。  
    
3.  耐高温与高可靠性：热导率是硅的 3 倍，可在 200℃以上环境稳定工作，减少散热需求，适合恶劣工况（如车载、工业）。  
    
      
    
    GaN（氮化镓）功率器件的性能优势
    

##   

1.高频开关速度快：开关损耗比硅 MOSFET 低 80% 以上，适合 100kHz~10MHz 高频应用（如快充、5G 射频），减小电感电容体积。

2.低寄生电容：栅极电荷（Qg）和输出电容（Coss）极小，适合高频谐振电路，提升能量转换效率（如 GaN 快充效率超 95%）。

3.成本与集成优势：可在硅基底上生长（异质外延），兼容现有半导体产线，降低制造成本，适合消费电子规模化应用。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBopT3LwGGEP9ohxjtOsrI2kved83nqA0OWfDIu8laajZicT4mspmTfzg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBOCWVv1pSBzO9EsogU2QSU7vPSau4ctDmYBPndWXsxUzvdbFnJnibg0Q/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBIibOHSsRqL9ZUk2SFgx5Wia51clHhtYBoq4DQeRKG0QKS9pMa46TCfaQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBQh5kJjoxVUicKQyTwGsaicvVHfoWyt1GgrAHmYFpsfTkcYxz68xmx71Q/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBVK034kricyk3qjBqyYhKW7tnoeibMIlclN3wAm2Yao7iaY3DtRIkYwLjQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oB84ygapOIkicicHyAeribAnlVfEkdjZaM6o5OjFiajfQaiaJEjQy3G2M9ySw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBpZaDOrdxVFlpGyC7PuQCcz80N8jt4ajHgJXsXrYsz2vAp6icaTbryIA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBBVlzLwkQvYVL6eYp0u7FjVxqdARHTKHXDKQiaeUHF8CtNb3OdmLIZHg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBEGCXYHbemq5pm1ibhwsva3InNxNGL7XUhU98gianra3AKgCnemJtOt3A/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBP2s04IIDxLhnTHFicsb9b1vQgClhIibYqmiaeBiaha7GFVE2JEbBNKvibWQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBr1ibZIl8k00ZSW6icrBLXJTap9FQKMobZhboIgkLGCl49Q9rKenkeib7Q/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBibffic6VhxW4yKvolkgcmop3BdicQUfJhSJbVR6LcU19xOf7weTZAk8dQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oB3ibCBsPp6iaK4QPBqribSAm2hNibMJKpOibgKib1QfVia2dDyU2mN4Fqb0cZw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBBuv3w9ovYbAJt6obbXFfyrFCw8YhpicJCzsicuQZzGPiauT22jC8reDvw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBesE088RSOmQXewKJnJhsWj2Fibz1I28pJiccJTP8iajwPefIQu86rr84Q/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBiaJNu23mLXJG8r2e1dicc712GFicqDk0uuTKWMib4sCoCE5ia2vtO3vbL5Q/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBTscY3X5TIe9ticotG4XJRrpgRU5pEghibe5vOGuCQ4AMn6ibPQlibg7Uicw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBBfpmv2MBg843pcECQ6SVjFxQsKDID7R0W8HymjtSRwDN3ylsiaCsKew/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBUfF0nnRYPaQWKjswfDk6PxeQdFVOfBoxt9N4plWRml4z2239ZsZPPg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBEL0ibyzG3WJmbgnYwkrc3X20IrichL5jjuVlLj7V4DnmcN2ADJBV6Ficw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBZQxGibWQLPcgibxElV1Y5CAF1uzfgAL8tjjd6DX91rq2yf0QNgYeBibicA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBMq9giclsv67QlwKNXZyPsmeWeJqmrCXzBNiaKZ7XpBiaQf6ImtlR4jFRg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBWibvfxKCUWD21uGPzxKO0Nm0QqgvqOwn1u7BpdWMjImmVic60oMMUYnw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBy8wFLpwMkQicCmpVmQqcedsqQFRRYcrsLpmgaT04mfqiaSnNqHC0kYibg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBGHrTMlxapS6U0S2DUESicUK53GBWBMpGG9UFolemqjmdRMWLjrzj3Gw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBzrORhAxdB9Fh3w4x7BBjZxWFTYurgFQ4gr6cu6EoXWslpvjWrJGHWg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBibeQCR1rFshvSo3z7ibddU1Zepx0BVFKQ783naCBib3JAUIwn7Pt3oYcQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBtblNiaxHDM0hfaFvKk5Txwen9A1M3R2Svs9yy7s5kc129VaLF0kurQg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBibP140mlrwJP72BicRl7qX4KJ1QNcj6JbibWibMuxBqib6icaenJ2M0qicBMA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oB9icIZMw2Ta8zFqHtibplSzAMbVTIp5WX5vrBs8CoC8N6zQGSkL5BBdNw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oB3bd7rdkEDV5cCBPKxyG2ygJXK9l6LU9BdJibhBj5wsnQGmia1jia7d4Qg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBv4nO7hcOn877VfhSYlhtkiaeot5ZyxS7ic9A0cbDicE2yGcFr2chsSbMg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBZRuwngLMWIm3hYgNBg5owXqQeLvNEsRhur6vbnKY7JGb8GuYqCpbKQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oB7xkAXtVtx9prJ0Cslcia6iahu97KMf4KblXErgDMa5n2xr1AwlLHQZLQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBY0onGFiayictpZW13S0YWpdZcxBoRlUWJ1G781fR9pH96bOvterkbqKw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBlunrqUoVfcU6VY4F3SzWLXosZvUlxyztTHiaKPViamk310ficuShrRsVg/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBeI5b419aMV0U3SSDoXzjfLhnJGCaGAXvrQHZKe1vUrC5BKJ1OIuVNw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBycnor7y1uxic6xj82YthseWtf1SfJKKEkBtk87hQh6GKte6odcyeOJA/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oB8UP9wkMMtYj8OhTkaEiaXHW86UscCFxPv8BqHI8x5MdhG7eIib3gtndw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBIhdghdyM7wotVTPic3w4zBpAmyGwxYZxKSMfia2l9uHXsRWvfLzR528A/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBQEF5fqWEdW98yYKRNZ8zZmic9rVQRRou3nQHBXmHqwAlSNzbKmiale1w/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBW6JBjK5SSdy6myNPoVI8eTS0NbpzmIEYYHv8QsmCnfH474TfIb8QnQ/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBqphxpuQJcTEpU2YgN23Mib52UvDtR9BOKlPia0g8DXA1qh0cc1MQyZYw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsnVick0jy4wrib0K5tnibsq7oBxFj0eZ7z1olM0XicjRVkqyQxp2bpibE9X8HlFyN0K5Dc9KseaYFpnTvw/640?wx_fmt=png&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1)

# SiC（碳化硅）和GaN（氮化镓）宽带隙功率器件的应用领域

#   

## SiC（碳化硅）功率器件的应用领域

##   

碳化硅（SiC）功率器件因其高耐压水平和电流承载能力，非常适合于以下几个应用领域：

1.新能源汽车

车载逆变器：提升电驱动系统效率（如特斯拉 Model 3 采用 SiC 模块，续航提升 5%~10%）。

车载充电器（OBC）：实现高功率密度充电，缩短充电时间。

电空调压缩机：高温环境下稳定运行，降低能耗。

2.能源互联网与电力系统

光伏逆变器：提升太阳能转换效率（如华为、阳光电源的 SiC 逆变器效率超 99%）。

智能电网变流器：支持高压直流输电（HVDC），减少电能损耗。

储能系统：优化锂电池充放电效率，延长储能设备寿命。

3.轨道交通与航空航天

高铁牵引变流器：适应高压、高振动环境，降低设备重量。

航空电源系统：满足飞行器轻量化、耐高温需求（如空客飞机的电力系统应用）。

4.工业与医疗设备

工业电机驱动：提升数控机床、机器人的能效和响应速度。

医疗设备电源：如 MRI、CT 机的高频电源，减小设备体积。

GaN（氮化镓）功率器件的应用领域

## 氮化镓（GaN）功率器件则因其低输入和输出电容，以及零反向恢复电荷，特别适合于以下几个应用领域：

  

1.消费电子与快充

手机 / 笔记本快充：如小米、OPPO 的 GaN 充电器，实现 100W 以上功率，体积比传统充电器小 50%。

无线充电：支持高频谐振，提升充电效率和传输距离。

2\. 5G 通信与射频领域

5G 基站射频放大器：高频段（如毫米波）下低损耗、高功率密度，支持大规模 MIMO 技术。

卫星通信：满足低轨卫星星座的高频率、窄带通信需求。

3.航空航天与国防

雷达系统：高频段雷达的发射模块（如 GaN 基相控阵雷达），提升探测精度。

无人机电源：轻量化设计，延长续航时间。

4.新能源与工业

风力发电机变流器：高频开关降低电感电容体积，适配海上风电场景。

激光雷达（LiDAR）：高频驱动提升自动驾驶传感器的响应速度。

系统级优势（SiC 与 GaN 共性）

体积与重量减小：高功率密度使器件尺寸缩小 50%~70%，如 SiC 逆变器体积比硅基方案小 30%，GaN 充电器可做到 “口红大小”。

效率提升与节能：相比硅器件，能效提升 5%~15%，减少碳排放（如一台 SiC 光伏逆变器每年可多发电数千度）。

可靠性与寿命延长：高温下性能衰减慢，开关损耗低，减少器件发热和疲劳，系统寿命提升 2~3 倍。

应用场景选择逻辑

优先选 SiC 的场景：高压（>600V）、大功率（>10kW）、高温环境（如汽车、电网、工业）。

优先选 GaN 的场景：中低压（<600V）、高频（>100kHz）、小型化需求（如消费电子、通信、快充）。

两者通过互补应用，共同推动功率电子行业向 “高效、节能、轻量化” 方向发展。

总结

SiC和GaN作为两种宽带隙半导体材料，各自具有独特的性能优势，适用于不同的应用领域。SiC器件因其高耐压和高电流承载能力，主要应用于高功率和高电压场合；而GaN器件则因其高频特性和低功率耗散，主要应用于中低压和高频场合。随着技术的不断进步，这两种器件的应用领域还在不断扩大，未来有望在更多领域发挥重要作用。

注：文字与报告无关

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGbhtiaRmYHTp4bDWkMosreWEkStrP0Cg41Vm84LnHXyNzX5oT80mzweicA/640?wx_fmt=jpeg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGboharT27juBiadHBOIA4TcgxwHsqNQeRHbBSFaTsnT8DZEsFVB7Mh71A/640?wx_fmt=jpeg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk7Rz2X0VrXA8xZqwdOrdGby1ADIqA7dRFfffghDzG9l5QkG9EE78A5k4JxgWOoSER53hFAhCOpNw/640?wx_fmt=png&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)