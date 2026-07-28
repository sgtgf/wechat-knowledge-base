# SiC MOSFET简化高频软开关设计工作

原创 Ke Zhu SiC碳化硅MOS管及功率模块的应用 2025-09-14 10:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/jGFglfIF707WM0b6BC2xvA](https://mp.weixin.qq.com/s/jGFglfIF707WM0b6BC2xvA)

文章来源：APEC2024(Qorvo)

作者：Ke Zhu, Ramanan Natarajan

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqiarNbOWGiaoL3qwicFibhQkVxcVrw0icPT86XlpttHIOXDXQeuiak9CMpc7A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqSyQtBMHjwjV5ByphhthSkkwBfaH1BUg9Ktp4M0icHnmKjzicJfFlBUeQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqqz9icaQptG8yZUiar5c6IJbCI6nPWeQXbXwoG77nxwXTUx1Fo6Ip0x3A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqwxOhia44xLK7je2qwFx4NEOurpicVVCe54iaFP1Zv0RiasdDTET4jwmIBA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqpIBow1wp8vS7UnOSt0dqSZCdvmfgVCJaMEA2gKePr1BgDhjGz3gLPA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqXUU0dSKcoibT8zQcTOOtxDZL3iaDzdcZVED1WOuMeewYQhAB7HRRQhkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqr1m1KjlMibibBnKiamRX63o5PWWBpkV7babSyzBjgBaG77n6R1t8zbeHA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqbtF8ickcLocPwWzibicf1huFxib03EDgVYphoI5NaiatM1BUfBT5MQBZDzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqj87ibFLPicr42FzWic38fVSK7HVnJqEL3EvqP80DmPwZLNO18bVVvPYrQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqia2hKpialFDQcNhibIXoHO93XdIiaMMMJIF4wqcad3sT6WoWp7mgBNYnrA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqtF4bGpfQjwsr9H5yduia6Z15PnXQ11hVPicc35CDaSNQiaNEuJC7EzMZw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCq1a4jITKxvbWGmc3XbyNrZia6ibrCKMtvWXE4GLBOrtNrs7p5M9lNvBxQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqgLIFhFTq2JUoo2iaeYW58H8PiaAjXYGuOicgUzRBfm5GWr6zqsAI7Ur3A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqoJjicCb0IYTVs3icGxAcf9Q6NtD0SpYvnP1wZAaRwrohia3opIPoStj6w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqDQ1vXenW5xUwLG1tF1uJs5MMxwjN35WbVFAOcqRpCBB7yIsibMeribDg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCq5sTOic5Mvt0Jbgck8ASc2iahwdfHZMzypYXJbD38L1pl2oOyia7ZZ6gRw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqibOP9llQYDJOHlibYfNyia9MzJEY4CIHJdC0gaDzRNibyR0IPyOtyeE6TQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqNIS9S9ibuH0eibKCqc3iamwNBCmibnfiap78MBgny0TY0EXayaMAkBmGvQQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqSnQkKyR2Kje1APWWy6BhiaBNFqNHkP7Yq5yqjKReRvMNjBR5Rl3ibnPg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCq6kgJhQI84koOuOfvqOQt4AZQr9n4nRjHXqsHibic6rQjgicc7cpy8oehQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslCC4QEw99ibibegrAEWEiclCqFq6Yp4iackiad4QAnhOz321IsBpXpbLKicSpt3gNCYGrfeSs4f66OCw9Q/640?wx_fmt=png&from=appmsg)

注：文字与报告无关

SiC MOSFET 通过低 Qrr、低 Coss 与低 Qg，显著放宽 ZVS/LLC 的实现窗口，简化参数迭代与缓冲设计，在高频与宽工况下提升效率与功率密度。

* * *

###   

### 它如何简化高频软开关

###   

低 Qrr：显著降低硬开关与轻载 / 瞬态损耗，拓宽软开关范围，减轻设计对 “全工况零应力” 的苛求。

低 Coss：更快放电至零电压，缩短死区、提升占空比与功率密度，更易在宽输入 / 负载维持 ZVS。

低 Qg：降低驱动损耗与死区中电流拖尾，轻载效率更好、动态更稳。

高导热 / 高温稳定：放宽热设计余量，降低参数对结温漂移的敏感性。

* * *

###   

### 典型设计减负点

###   

参数收敛更快：硬开关不可避免的工况，SiC 仍能保持低损耗，减少 “软开关失效点” 的补偿与反复仿真。

轻载效率更易达标：低 Qrr 与 Qg 抑制轻载硬开关与驱动损耗，降低对复杂轻载策略的依赖。

缓冲与 EMI 更可控：用低 Rg 配合 snubber/Cds 快速抑制 VDS 尖峰与振铃，兼顾低损耗与 EMI。

磁件与散热更精简：高频化允许更小电感 / 电容，银烧结等封装降低热阻、提高密度与可靠性。

* * *

###   

### 快速落地要点

###   

选器件与拓扑

优先低 Qrr、低 Coss、低 Qg；半桥 / LLC/PSFB 在高频更易实现 ZVS。

评估封装热阻与导热（如银烧结），按目标结温反推 Rth 与散热。

设定死区与占空

以 Coss 与谐振参数估算死区，SiC 通常可较 Si 缩短；实测验证零电压窗口与占空比提升。

缓冲与 EMI

低 Rg+snubber/Cds 抑制 VDS 过冲与振铃，比单纯加 Rg 更高效。

优化功率回路与驱动回路寄生，减小 di/dt/dv/dt 带来的 EMI。

轻载与瞬态

利用 SiC 低 Qrr/Qg，简化轻载降频 / 变频策略，降低轻载硬开关与驱动损耗。

负载 / 输入突变时，SiC 仍能保持低损耗，减少对复杂缓冲与钳位的依赖。

* * *

###   

### 常见误区与优化

###   

误区：用高 Rg 降 EMI。优化：低 Rg+snubber/Cds，在抑制尖峰的同时维持低 Eoff。

误区：追求 “全工况完美 ZVS”。优化：SiC 允许硬开关工况存在且损耗可控，减少辅助电路与迭代成本。

误区：忽略 Coss 非线性。优化：在关键工作点（如母线电压 / 0V）测量并据此调整死区与缓冲。

* * *

###   

### 小结

###   

高频软开关设计中，SiC MOSFET 将 “零电压实现难、参数窗口窄、轻载 / 瞬态硬开关损耗大” 的痛点，转化为 “更宽的 ZVS 窗口 + 更低的硬开关损耗”，使拓扑选型、死区 / 缓冲设计、轻载策略与热设计同步简化，显著降低设计迭代成本与时间。

  

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk8iay30Rkdxgr9lHMDHFcIL9s9icLpA7sMkZl1yeAoJ70pnzOEicPx72xfic8DAlykF9ISV9UaWFibgtA/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=13)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsk8iay30Rkdxgr9lHMDHFcILvxnibEN9LH8II05JCjJuHZ0eJDvLRlLLPec3gpN4R5gy7IAvkRDiatdw/640?wx_fmt=jpeg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=14)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsk8iay30Rkdxgr9lHMDHFcILQftGrb0sLqYcs0hr4mZSf1WbuCoQjtIcgLmencF3V61K3BE4h5A4Sw/640?wx_fmt=png&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=15)