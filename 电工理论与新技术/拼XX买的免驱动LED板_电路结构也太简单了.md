# 拼XX买的免驱动LED板，电路结构也太简单了


> 原文地址: [https://mp.weixin.qq.com/s/5VezU7RnevLl2EfCY9JVvw](https://mp.weixin.qq.com/s/5VezU7RnevLl2EfCY9JVvw)

在拼XX上买了一个免驱动LED板，电路非常简单，除了灯珠，它只有一个整流芯片，一个恒流芯片，二个贴片电阻，一个贴片电容。这个电路，关键是那颗恒流芯片，这是一个单通道高压线性恒流源芯片，它串联在电路中，通过mos管的开关降压恒流，点亮LED灯珠。220v电压，经整流芯片整流，经电容c和R2滤波，然后经过灯珠，到线性恒流芯片的7脚，经过芯片内部的MOS管，mos管的源极外接取样电阻R1，2脚是接地脚（见图）。芯片内部有高压启动电源模块，电压保护，温度保护，电流检测保护等功能。本电路板关键要散热，要把电路板用导热硅胶紧粘在铝板上，因为电路板很容易发热，没有散热片，容易过热保护，甚至烧毁恒流芯片。

![](https://mmbiz.qpic.cn/mmbiz_jpg/EGUBSm6Luyxibwaib3CoPb8koiaibA3tWUcNnsnrsHwzic4qQ8VxST2BszYnZ0ChgFrtbDiae2jd4gUyTZNdK64wibgoGGz1Udiatibpibgt3qZOxVLwM/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/EGUBSm6LuyxHXUyic9hXxrWcsQkepdUl5iaiaAnVlicXRXY4P2LpicH1YibOJ6iccKOgHga5icfUas2v1ObSciboib0ic0Rn99gFpcqlY6CcDM69NyXq6s/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6LuyxAnYcx6qG6HqoD5ru6rgK2lA8LFmYG075AWHBpkSSAsGsiaKSWJq1ia3kSRLEibyutakxlJhJs1boHicANahzF8y9FJBqyfGBrqzA/640?wx_fmt=jpeg&from=appmsg)