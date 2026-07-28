# 南京航空航天大学（吴红飞教授）：基于GaN器件的高频隔离双向谐振变换器及其应用


> 原文地址: [https://mp.weixin.qq.com/s/NwpC10w5MhpKW7lw89hRXg](https://mp.weixin.qq.com/s/NwpC10w5MhpKW7lw89hRXg)

大家好，今天分享南京航空航天大学吴红飞教授关于“基于GaN器件的高频隔离双向谐振变换器及其应用”的一篇研究报告。照明、储能、信息等领域的技术革新日新月异，对电力电子变换装置的设计和实现不断提出新的挑战。谐振变换器以其优异的软开关性能，使其在高频、高效、高密度电能变换领域得到广泛应用。但传统脉冲频率调制谐振变换器存在增益调节能力有限、难以兼顾宽范围调压与全工作范围高效率等问题。本报告将对谐振变换器的电压增益范围扩展与提升技术进行深入探讨，通过对谐振腔、电路结构、调制策略等环节进行优化与改进，扩展谐振变换器的电压调控自由度，实现宽电压范围、高效率电能变换。![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9A0SMibfq7K5fE5Vw6cu5hic6A6cgvs7ibQJdsCib9fSLvibJ8cbaxMllEQ0A/640?wx_fmt=jpeg&wxfrom=13&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9ABUngOicLxOiaAkic7ZUvEDPQdmuY8WVwAK7s9XmrzlzOByuy3kmHxiaPiaw/640?wx_fmt=jpeg&wxfrom=13&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9A3f6nAxS5ZfwZjhVp7YzEYajkjAvP24SOicILROISkGSfeZ2dNTqYr0A/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9A8iaA3FjoVJTMyBiaaRtZRia4R1UX9mIzm2dGYpch6nIFbbhEfZTGtgnrQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9A0w0uJsZHiaUKyw5SpiajYc8FicsWaSzSeVjmTHdfWgLy3Kftn06A7bHxQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AJBf1ibmCaicRyTia7gx2EBaknz72UNyeNwMMf3X76BzLlrS6Azx3gYV5w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AibGUPYO1IQA05xIicuNOwOJUdf11Zz4iaSCGLUBqZRmGFVibRotdeia8GUQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AWt3c3zSY6JQwExvj6gHiaribqbJvD04NvxLUZrzulYva9zHjMgfyLiaAg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AjPyc4L5dgtibPapDuial2QENW8m2ezUX3d3Ol0fMWI3gRwp0A9Msl2vg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AibY66HdA6sdlWbdZPuKMBQWOuPZV5Oqcp8AtDfpZoruaC1DHA9HaCwg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9ASO8E2lPGp6nIWXjslvlHTfFqB9dHFIbJfDFVRx1pSSn2HbTjUxzLFA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9Aj0kiaOic4hibUtz9GVextfstQzXkXxZBFEVc0NMsNicAfOkzvdua8ibKXicg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9A6AXv0e0YpL9QNK4PbW9M4eAMdhgN2Zl8Su6bED9Z0ZksOnkwcJoic2g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9Aa6yTlHaesU7BfVWslKiceESM4Y1hrL3p14niciaPmID96iaWic40Nrg0ibRg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AgF8XtfibD3FRJJTkIwUFW3DHicuYr0lw5Itic5U57tr5tpbjibzjjwbbaQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AZqv2OVqqD7f8IbkeILcpUf1lsqTcicXoGcs3qicjVoR1WzohrzPiakuiag/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AhCXE0eX9pez1sOUhGlYfba5ibyAGqibHOVkUatAO6OlNRlweMjQWFq6Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9ACDo3dpogxiaPAoEibqdcff0JHt0xjKo63gRxUTGobNWJoNxJcicgzibAnQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9ARY0gIPBuwF1SnYpcsujJxIOHBaiaD5bIbQV0icI8ZCMurcbDdqcf86lw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9A8n12WZFIC5S8cJhQKvsz1V3UJewBsXhqQQBlY7vAb4GKtYIvyJy0dA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AfEWmibznS9la3bHL90iaZicJh7prGwJSOg8eE11VsRl2htTvS9cBAy2NA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AzsFH28uVO3dN9icB48pDdkzMR9ABibA05jp9fZYM0QO7tWvPyciaV07bQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9A83AS5bvpl4KhnTWbSSJDk7VGkSlNRTDBRcGIyyibjP7mwGleMnCk3eQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AF8QAbw7EtQwEjUvNEXgCxTr9OdIOt89a2uWYDEAGMT1IqrthA5NNYA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AwPhQOrPHtxjuicp53u5WWAvfpjRVqiaKg67j3YnpyOkoIOgCFlalZjzw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9Axd668aiaiaepIqHSEW2prVl0oQEjiblQaXVSrWnC3WXIooeJgElveTSBg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AvlrDXTxiaGbqtb3WgxluHHCpYjgbjAxenT9Jqup9cibeQEIjkwQmwIaA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9A3vHMHtgflxadWFob3CF6YdT2uoSQiblHdADSnr23udVepNYIjgNDAew/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9Alp6hq2iaPx8K42z1741ic74gUV2s3UDclh1Ln5iboAcV9lqpStaXHYxWg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9A5ib0L5sKdLZFbwRuU3oZnIcOc7YXbowucGlyh99aibT9icpp2uvZKj3VA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9A56DBpMd5syKY4DicWqaUUCp8YyKO4ibZA96JNsVTlEmQ1LlGfsgj4ibOg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AGPe69vnibgx72aiaJbbHBI14EGyuAjahKLSlVRESBfOzMoruFICql3JQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AGPCxf24znpOMTvmtIPVntyic96mhF870BPfjupun1ezpkYK4rtqKIibA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9A6zIfYENDpPqI2zSFxOlncogjhVribTficc57vGWhNZV8HewobAk4XJYw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9At55MVYibxY4WU6mnptfsONpm0T2wCJSs6nJ4qKTECjO6QRVkJFjzGaQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AryUZkrrVYXU5mBgVD7KRibGBxp9WU50xzicO6GeyLmzAXS1WzkaEkiaiaQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AxsfjtcPEtFic0hhIoORlIWVYLuEaHva3IjBwB2Sg6kSO4ehOnfzJwcw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AUAByNrISMzsHeR1oyib7UP7dmdNtWHBB38gUXOGyFWK4zmyOmPV7xGA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AtGjMqicD1XH4g1Hc00LtNeHes2Pg4GL3P5YQ5vcOIe06aSX5REGicB1Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AE91HEtyCcta05473oXWukMyiaOEEIbEGul9Kj0sHCKLRtNEk8zj9a1g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AtrQRDib7WTNSZBDNedP7RRiaUGfzRtn1Rgg3o2RnY5FN5XWXluav0bdg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9Ahj9icNOic9GlBzwWKTUJ7HnMvUvYJfHr8xiblxqehJequfhbeWR7cC3WQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9ALMWQSStJYUF2PxJz3QmOjHPFibszvetNwT7FibZeMQY7homXP8O102XQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9Al74wtmPicPEbHaXGKqS7MicjIsIicxdqOXFcKxd5gxNVpSxxcXHfuWqDQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AhNBhuibLmZScuUGf5RbbNXa1VAlDwtfibE55LvSXzoRd2B4HbATib986w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AN81dqSppIiaPDJOSzZZpkOe3UzBqhTbykNxuNB4ZLkqV5KTeSZSemibg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9ArESpakLAhLKYDYHicQkJxSqcnINgHvCCloM0D53OdJ8eyT65gtpCefQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9AO2PgErAkYqWyInOoCNLiaHLZm3CHHHtIiaAMyQdeDHNmMXc1j9qcgCSw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9Aypa7HShORe0f5IDribLxduf5bzHwjrxCSfpP9lrTNzlbZhfo8yxZTuw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/xdsvKWSgf7VDj7ZlFQDFiasquCib0APQ9ALpzAlEyPuKGkt8p0b864uaTfn4eOyIvG1hMZYYPrR4JIfE3TYlEbmg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskXJicOSziau2VPdSibn5Povt1icVguS0GtJZI3UT88pgdw3LuADO113PpQgv7HGJyMZ8QV6vhzPeoFgQ/640?wx_fmt=png&from=appmsg)

吴红飞 教授、博士生导师，南京航空航天大学。江苏省杰出青年基金、教育部霍英东青年教师基金获得者，入选江苏省“青蓝工程”中青年学术带头人、江苏省“六大人才高峰”高层次人才。IEEE Senior Member、中国电工技术学会高级会员、中国电源学会高级会员。中国电源学会交通电气化专委会常务委员、青年工作委员会常务委员，中国电工技术学会青年工作委员会委员。担任国际期刊Journal of Power Electronics、CPSS Transactions on Power Electronics Applications、Chinese Journal of Electrical Engineering等多个期刊副主编，曾获Best AE和Outstanding Reviewer荣誉。

主持国家自然科学基金、装备预研重点项目、航天基金以及国防/军工/企业委托研制项目20余项。出版专著1部，在IEEE Trans.等国际顶级期刊发表SCI论文近80篇，论文被引用近3500次，获授权中国发明专利40余项、美国发明专利1项，已转让专利2项。第一完成人获省部级二等奖2项、三等奖1项，获中国电源学会优秀青年奖。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskXJicOSziau2VPdSibn5Povt1f8KuRrjdP1t0jP0OiaHibI2iakYxmMHiczyvlgnpRYewLlbF9KRQQFVL6Q/640?wx_fmt=jpeg&from=appmsg)

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)