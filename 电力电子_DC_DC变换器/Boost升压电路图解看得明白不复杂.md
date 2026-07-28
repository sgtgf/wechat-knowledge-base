# Boost升压电路图解看得明白不复杂


> 原文地址: [https://mp.weixin.qq.com/s/yXMuGWhGeJyXQXDVETOC\_Q](https://mp.weixin.qq.com/s/yXMuGWhGeJyXQXDVETOC_Q)

Boost升压电路看起来不复杂，但真正做项目时，最容易踩坑的往往不是公式，而是工作过程、元器件能力和PCB布局。  
  
这篇主要讲清楚几个问题：  
  
MOS导通时，输入先给电感储能；  
MOS关断后，电感释放能量，与输入一起推向输出，电压才被抬高。  
  
理想情况下：  
  
VOUT ≈ VIN ÷（1-D）  
  
但实际输出还会受到芯片最大占空比、开关限流、电感饱和电流、二极管压降、器件损耗和散热影响。  
  
所以芯片资料写“4A”，不代表输出端就能稳定提供4A。升压倍数越高，通常能带的输出电流越需要保守评估。  
  
另外，#Boost电路 对PCB布局也比较敏感：  
  
功率回路尽量短而粗；  
输入电容靠近VIN和GND；  
电感、二极管、输出电容靠近芯片；  
SW节点面积不要太大；  
反馈走线远离SW和电感。  
  
会画原理图只是第一步，能不能稳定带载，还得看选型、布局和实际测试。  
  
你们做Boost电路时，最容易遇到的是输出掉压、纹波大，还是芯片发热？  
  
来源:Ian的硬件调试笔记

![图1](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6Luyw804qBfic2prFuhf17yw7VdvewKokLpjoLzovKRTnpv9uDFzicbrnLrf78KtPKc9KBfKWdWIp7KkmLnestqnb0rMTpgMLGvyHzc/0?wx_fmt=jpeg)

图1

![图2](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6LuyyrdVprKWP9THGhef7hZ2JwH2Daia8Xo3YMVQP8XT1XiaeAzKTkjcwRlKibPQLoI5yuCdfBpPzR9KrT6uKafAuq0rtAcWsUGOrhnQ/0?wx_fmt=jpeg)

图2

![图3](https://mmbiz.qpic.cn/mmbiz_jpg/EGUBSm6LuyzT9yKD1HpQaBiaf3cW4DeQY3PaHwwXcuSP7MKwL4f3pSZaLJxXBY0rUiaDT0HrSkTKcjPiapYh8D5nRApslAosLXmtX3vzApnosI/0?wx_fmt=jpeg)

图3

![图4](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6LuyxO3ickycxEanWIKvMdvtIOfYXyzb0IFyT2S637CbryJibHWaFPmTocJ1B6lbsHWcqjPD8ye1rpW7LC3Bx8dmjIN9rh1ybIhT2rA/0?wx_fmt=jpeg)

图4

![图5](https://mmbiz.qpic.cn/mmbiz_jpg/EGUBSm6LuywAJatUGdBC0EiaWQNomfKibDBiaEYGLPIezA40ia7ISPUafU3BkGxxicpSiaFSKLoThCGd15lTlx6MVCGRv7mId7HkVjoujDCQ3I6WE/0?wx_fmt=jpeg)

图5

![图6](https://mmbiz.qpic.cn/mmbiz_jpg/EGUBSm6Luyznepml2JTLiaWtf5wr7wXFXByyU1XUzUROhVZkuHibjVgod02gjV5p5UV1PiciaaX0HQBnAL06lFicRkxatK8Ys1wTTIwqrjWubz4Q/0?wx_fmt=jpeg)

图6

![图7](https://mmbiz.qpic.cn/mmbiz_jpg/EGUBSm6LuywQ8S9mU7xUdF5ibnRB42ianqJVwqXaYGmPY6mr2zcqtc93qTfN94qqIQQeAdeSiakloYDyQ9ULRsmxiaZawca5rVtVY86YicNThCQI/0?wx_fmt=jpeg)

图7

![图8](https://mmbiz.qpic.cn/sz_mmbiz_jpg/EGUBSm6LuywhtX7nMHZg9spbyoKhpHyTic86Qhpcrs7gNHTWD3BbW33R4WJu5g91qZbdL2df58hXh7zFwFm2eXN2vR7xdu7zl47Sl20stkvQ/0?wx_fmt=jpeg)

图8