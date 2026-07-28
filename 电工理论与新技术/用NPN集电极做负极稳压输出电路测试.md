# 用NPN集电极做负极稳压输出电路测试


> 原文地址: [https://mp.weixin.qq.com/s/qV6g9i\_uOL\_GkWs2Zfof1g](https://mp.weixin.qq.com/s/qV6g9i_uOL_GkWs2Zfof1g)

想要一个正极共地，用NPN集电极做负极稳压输出的电路：

只要输入电压比输出电压高 1V 以上即可保证稳压输出。

![](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuywgHFfTCdQ3hOichE3KZQWgAJsQughxyDT4ZYiaQU6Kg94icmWXjtia3D25ss6RIK4JKeMOS2G4lIiaJ2PMTkvSwqu8YwM85YXU0BP8/640?wx_fmt=png&from=appmsg)

C1消振电容。  
取值范围要试验确定，一般在几十PF 到几百PF 间，直接取100PF 左右就可以 。  
  
使用三极管做调整管的电路，不用这个电容一般也没事，加上它就是保险一点。  
使用NMOS 场管的电路必须加上，否则很可能加上负载就振荡。

于是想了几个电路，并搭电路测试了一下：

1、这个电路使用PNP 功率管做调整管，属于射极输出器形式，所以输入输出压差有点大。

![](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyxKfJVoeQ2zT95shpibL4XXGGpenrTpGkjq8bk5hRnjRof6USDZe3Tm1P6x4XDb8kbPzxLcGBLjcpuNjSyQabiaz810gHb7OlqbA/640?wx_fmt=png&from=appmsg)

  
试验实际输出5V，10 欧负载需要将近3V 的压差才能保证稳压输出。

5V 输出电压，10 欧负载输出波纹：

![](https://mmbiz.qpic.cn/mmbiz_jpg/EGUBSm6LuyxkQiaVRo7QO7pjlRO0hhUcTB1FjgbkArIgGNb4hSvWAljL8tq4K2VHlhNJpLHrxIAWOkb9DnC6A8PCmECvjHFq7JYJZnEC0icNA/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6Luyyq5NQLJM0flvbXR6Vn7vwiaUzWbAHQQwhZV5db26yywYXdfFiasnEdnlbhlT6bpLjlicbKiaMicoVuicib6yrh9svLanadOl5Ya14T3g/640?wx_fmt=png&from=appmsg)

2、为了减小压差，增加一只三极管组成复合管：  
  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6Luyzy6dTbSq4C9iaJzJWP5pl63y528cE91mQZkzPBfPvMw8Piaib4bss9Vdql0CoZwBocS4H31fVo4LgbS9CNbC6FfoT57jFgeDEddQ/640?wx_fmt=jpeg)  
5V 输出电压，10 欧负载输出波纹：

![](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6Luyw0KWTVtVOa84iaaX1yeKFA70NxEmdAekyO4xSMSNtUQGWiaGm75bPO5QDjLczqUdsASsMHlfHNq9vRTfR7pfQPicrRoI01Gf5GibA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuywGmJfJPIoicOiatxib5cgsjKkFoQvfoYDIUD8saK2AEYTqAorlr0ZMb1EtDdfQ2jaGuotCsS1thrtaCcsjrXRK3JtlfRpZ9JxytQ/640?wx_fmt=png&from=appmsg)

3、为了使用NPN 型三极管做调整管，并且集电极输出，设想了这个电路：

![](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyxZqvGwd2icPDwpr4Y0YffSiaYAf90gMPiaiaCsicYYeQeTfCx2PrJ1WMoKVJKPoB9SIrCW5C3s17qbbVkzDcgL92nGM8CITjvnwNiak/640?wx_fmt=png&from=appmsg)

输入输出压差进一步降低，大于0.5V 即可稳压输出。

5V 输出电压，10 欧负载输出波纹：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyyEibdLFcOm4KsBQ3Cwo6YdAGBvMosZI39nWP9kI4mwfJNpelkS7hOncTzgODiajgVJibiaNPBLTjEiblEOX6ndXyGgGI8rRGkt0hec/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuywITXeO0Zia96DvGM8WBw4xViaXJ2V5zzxD4QNZhw9Rk77IgmgCISxI1PlRLp0E5zFFBfTnHprEEFUAVHsWhmlcTCMdJaQMm262w/640?wx_fmt=png&from=appmsg)

3、如果需要大电流输出，可以把三极管换成NMOS 场管，压差也可以进一步减小：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyzP4GU0KfxowVpaKtOksXysTAIrrVvOsSTE9kt3LHKOfkuSsHnetK0olPvicnsiaekjRccia3F62W5wQRv5k3auemxBxicT5oQv3lI/640?wx_fmt=png&from=appmsg)

5V 输出电压，10 欧负载输出波纹：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6Luywlicj9kvly5MYY1MYQWN6oO3fNzqXbBBPqekm6FAl76aOcOedZibWTffA4CPPnHvLrO3EUWyEaoE3T0arXYyrdBcuZnSx7E3ibm0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/EGUBSm6LuyynEia6QkeDPqfM1yHicHXAIibteZUzM7cic866NsnHYliam8TszDNvtWU7hChuYbyDCyZCTedPX0ZmcvowfxRQVic6heIDSsibTqW4C4/640?wx_fmt=png&from=appmsg)

4\\使用光耦的电路

![](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyyhicjMvycYMGPTIhBwlBSS1BibV9iaiaYP8bovAxXibY0EvygKQOluB39PwOS1HQDaWxsOAD19hcTySfa7DWGYFAkjmiaoicaKnnxiaDE/640?wx_fmt=png&from=appmsg)

空载输出5.3V ，带10 欧负载后稳定在5.0V 。

输出端加上10 欧负载后的波纹：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyyQGSicyv60n7ia624aweYQgnOxbBpQxibUyFbnOE4cmibRxSibbia2QC6Q3L1VaKrs1j5mmWFBM1I2YMn7JdW7drX4gjhABnyOCYkuo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/EGUBSm6LuyzvJH5hdxQIncHgQ3HiceY1hX12vVFia9ua3iakB7ajY60of4zSAOZTZib4z4Q2dKtIFXYvicuaEoEJRuBmyPPBqNuNGxMq1YTNkoTw/640?wx_fmt=png&from=appmsg)