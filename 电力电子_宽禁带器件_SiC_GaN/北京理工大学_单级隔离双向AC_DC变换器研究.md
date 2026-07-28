# 北京理工大学：单级隔离双向AC-DC变换器研究


> 原文地址: [https://mp.weixin.qq.com/s/V3GnMxxdnrohe5grcfeIKA](https://mp.weixin.qq.com/s/V3GnMxxdnrohe5grcfeIKA)

分享 一篇北京理工大学-郭志强（教授）有关“单级隔离双向AC-DC变换器研究”的报告。报告总结：1.采用单相级隔离AC-DC变换器可以适应宽电压增益，高功率密度，并且可以实现双向功率流动。2.采用具有最小电流应力和软开关的全局优化控制策略，减小变换器导通损耗和开关损耗。3.采用单环控制无需输入电流采样即可以控制输出电压，又能够调节输入电流，实现输出电压和输入电流的解耦控制。4.采用数值求解方法，得到变压器匝数比和串联电感的优化组合，通过优化磁性元件设计进一步提升变换器效率。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAzUnpf5ZeKcfMaP2Fddxm4czrKiaawROpOATt9kThzTVyctU9RwVEkTA/640?wx_fmt=png&from=appmsg&wxfrom=13)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAG2um6rAolJX5ezlQKG4Hsms5A5vgE1uae7OtXnocopAibKyT9MyyVgA/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=13&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAZjU0fvkExe4WDfoo5wYzDumibWRgnEaibiaj56zmdVGLgPicEUqJvgdwjA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAkib9icJXORYCnlKTk6eRAgibeMEP0B2iakd9wpWUPS1RW0lBhic9fOXhyiaw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAmicDzVadjGqMf2JnrYv8ibLJLqCM5jrkseIWk44HejVjkaWqq7fKl0rA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHA1CPiboLFQKRPWqRlj1vJdzlia3L15xiazicjtOZ8lpEZgFOf8rnlQbHcgw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHA5IEMCbl5iaenRm3eJo4Aeg3arLv00Dmt39CFiaTxS5FPkPuic3RhebicbQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAYDsuHVdos4TTHlJJkqicWNlebELyDyqamIsceic9wF5LjbCARpGGcamA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAWDqwicexQLMuuLKqHJKbBOhQhzHFF4a6XiaFLiaTmxfk7pjnIwy0PIWrQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHALxRKMtSR3bicJvuicEorTiazu9rfl8eDoU7EqdruHVxnHTibzlNQ21ILAA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAJIzd162ZWUNE5Dbzjw4eC0jAwEYh6TrpWMMJROYnwMRicP6ZrRSyqQA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAWXSOjrRmwZEGKKjQNMvebMEuzAZM3wIcRh9eDC96FN1UUtFce7h6fQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHApqPUdN48zVaa6CQ9KKqCDCQqNRvr72wickws4ZqiaFzfet3CQs9s8ibNQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAh3y4jT5mBRv3xI2mCXrKaorGy8J6P9CqNPnZYovcvKqqMeoNb3ShOg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAKd5ibZjbZtn7qFO8ffkHGshH2zbjic2K7CMiaMZYpvTCjwSoUpmN7qkeA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHA0ppsxLKdcwWo7Ocj7ahbuZ0C2mk8rRYPYX5PBXAURiboTIU7aAbkI6Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAcwfu2ETvnerwhBmmh6XavTYclvSXrjiasfpY2xrt8cpcKAJZMaicNJzw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHA0e6fDxGcEBJicDTamCdPfiacrcVic1dHrjxjsicr5RzUGFv94mJL4ibGFPg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHALSxXKLZiaFob0PLjLmIvhwyEYw8UM1forqEmmTPwX8rVFpKcwb9fS7w/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAeJ9ZE0gldbALD0QKlp25GYadD2RBCg0gD02dgfPySdtkHYib32mHtEg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAOSJqsGKAhHaLIxZwFrLEQFiaTapK5N9A26d7grqL9HL8FG8A9mZ94QQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAOOPR6BhWBeQzYHgEHlBzH5R4DiccFVqDAos1gFqiaQXQBuqp5kX9Zeuw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAlkz0qK2B463EbgkkicxGbb9kTPQKNlaCJKuUkmiaR4SyVSvs007zPY8w/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAkhc5E8ickI181Bia5GWSUyCicQ2tQXqUtTcpFAHpQk8T4qoCicrQIdNlRQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHA1HSuv347uGlUBicXoq8b6UsNyKqvFDa0zBia7yxvDXib32wialPtfib7AjQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAentSNjAleShVjh0zS9OtGeUtLaC4leqMlz0gyNCFRBZJSetTUrRPhA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAkAl6vIicOujvfnQPCe1QjTDLKKPyQ3lBGfuQzTUnpsqo1ickRXxo5Ddg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHArX8Z0nVhRMw6AHCokicacrXpt85MqgUaXbEf18lCvB9qyMxOyjic2a9A/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAkSAPSa2kpnX7bibrdFCmMTLnabiaBpk6ClicTbzVpXTGYcFFpa6eV955w/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAujibqoJ7odqrB5xmmh4ictAPibEqnbAE6EqCw69tkenQITsffkLucW2pA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAZlQiaFicSEm4H6xaShms9V9wdpY6kZuJye7FnoLLUzMwaHOgsmjNMboQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAammHhCHbSy7NSZUMgjQ1AZ1pibkXyWkUIc6L69HrHICV7AvGzAvxb5w/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHA9uzicUowIFEfniaiblG63W0k0PDUqibzLvffcZf4ibUg1NxoEC9O5FIErDw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAicHZFQPFdwE2QthqtGPn2MwWPrqCY8lbpvg6SM6mFfYWoticCSaVWPQA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHA1GyB1656Lm4ukGScslYbQQgM3JI1x7DVtHFO6K6IM8PYvPt0XN3Rrg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHA5BcIqrteaCMXKGdtYAJYXiblspCvy888mJDSjiafWZAgiaD0IOLpWPFQg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHA3GrlEiaZzeVBicP3iboCiahRluEBmZOdGql0Ndia2JTZF1s47dSLad6aWsA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAFCtYrHcMdHHgbzAiauwWM6AjiaCAdVVlicn1deTbPwXXqGXm3YXic2YCLg/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAmZHicQWibXwt83Vam3VibDpWyGHuo40obsyAhMuvwibkHicicEJJyOibJibkCQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAOxcRGTkT4yxpnKoxvodyeaGWcmJvibpfSLiajo5DEVicNCTTMcibjgaVWQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAiaG6BibQ8LhwiaIDtxksBW55R0DjNkQMX7H2mJTBTiazsP1R329ezB2NHA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAYpNw0JiaibG8ibVUFDojqjkMzx0aO7siaJ9E6hV1bt7uyXL3CNLxwiaeAKw/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHA6UJf3sKbPiaJ5MUia4OQgCcQCu5xMXwrtmTSuQyBJ2qia3c6JpflquJBw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHASqv3c7uW6fbZL9llyib5nP12uicKs6xbMxGSEicfNzPcWo8f4QUgPvzjA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAT9voLBFlAyLZm3OD5sIiaQ5aJ7rK9AxDPIBuEpIPh4gOyxkOHEbWv7w/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHArFwh3BH5gat9EAmr0oy3NbUk5D2FESbO1SrtZmAmiaJI9aUHvnPNTRQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHA8o9p1L2AOe9BuhNBMt8FcnfgSpEeiba3IanKx4DiaMceM2PhBoZeMLoA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAwT8t1hftv1rC2YJJe8ID9kjQ203CjgXyyVGAp8Vsx4JzvH0U9ku7WQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHA0YyQNq8mxWdk070O4VRdDmyapZKkr5ibicMlnnbGPofYG6HyRyERYPcQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHAbZ1wFlVxyib5AVibpgNyvgN73Mxv41Gbhf9sW7VYVumjqa4KgnTTlvpA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/9bwhXZWoFDg3IAzLCXTvdBqYdTjRlQHA2ucfhQibMhooWRUx9wASUemYmnTzbAibzCdOeoQsJRYXqwUYM6s8zC0g/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

资料来源：NE电气  

**‌SiC MOSFET器件在变换器中的应用非常广泛，主要应用于高频大功率变换器、逆变器、电机驱动系统等领域。****‌**

SiC MOSFET在高频大功率变换器中的应用  

SiC MOSFET在高开关频率下表现出色，适用于高频LLC谐振DC/DC转换器。在高开关频率下，LLC变压器的漏感可用作谐振电感，从而减少变压器的体积和重量，降低磁性元件的功率损耗。实验结果表明，SiC功率器件在500 kHz时的峰值转换器效率接近400.16%‌。

SiC MOSFET在逆变器中的应用  

SiC MOSFET在逆变器中具有开关损耗小、开关频率高和耐高温能力强等优点，适用于高性能电力电子变换器。例如，在三相逆变器中，SiC MOSFET可以显著降低开关损耗和导通损耗，提高系统的整体效率。此外，SiC MOSFET还具有较高的耐压能力和较低的导通电阻，适用于大功率应用场景‌。

SiC MOSFET在电机驱动系统中的应用  

SiC MOSFET在电机驱动系统中表现出色，适用于电动汽车驱动电机功率变换器。由于其优异的开关性能和耐高温能力，SiC MOSFET能够提供更高的功率密度和效率，降低系统的整体重量和成本。在实际应用中，SiC MOSFET还解决了高频串扰问题和死区内电压振荡问题，提高了系统的稳定性和可靠性‌。

SiC MOSFET器件的优势  

**‌高开关频率‌**：SiC MOSFET能够在更高的频率下工作，减少变压器的体积和重量，降低磁性元件的功率损耗。

**‌低开关损耗‌**：由于其优异的开关性能，SiC MOSFET在高频操作下具有较低的开关损耗和导通损耗。

**‌耐高温能力强‌**：SiC MOSFET能够在高温环境下稳定工作，适用于高功率密度应用。

**‌高效率‌**：SiC MOSFET的高开关频率和低损耗特性使其在各种应用中表现出色，提高系统的整体效率。

综上所述，SiC MOSFET在变换器中的应用具有显著的优势，适用于高频大功率变换器、逆变器和电机驱动系统等领域，能够提供高效、可靠和轻量化的解决方案。

文字来源：Ai

**注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)