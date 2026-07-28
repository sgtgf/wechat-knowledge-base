# LQR系列01---最优控制问题与性能指标


> 原文地址: [https://mp.weixin.qq.com/s/n\_F3PHk4moo\_mUTKZ4YDMA](https://mp.weixin.qq.com/s/n_F3PHk4moo_mUTKZ4YDMA)

车的状态可用x(k）来表示，分别是k时刻的位置x,位置y,姿态角度θ以及速度v,

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH27XRlABHYQhSB31rWatBUSQkGCBamjB2xYsfz23EUhibM70xlib79iaUIA/640?wx_fmt=png&from=appmsg)

则车的状态空间方程可表示为，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35icyLxx8jurO2ycUk6nz84icyrU9ibF8I2BCaob1RtHdtqicfxcfncXy101w/640?wx_fmt=png&from=appmsg)

可看出，f为非线性函数，一般需要线性化处理。其中控制量为

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35icec2WNicQibWCHKGF07MesPwyFsBnPKGjzfx2LsBzaupT8WLRJSC2JicVA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2vSV4TnnGV0yyia2QBLPH8MRuu3iavzoxF7lU7vHFVnJdOdS18y2hWogA/640?wx_fmt=png&from=appmsg)为油门表征的加速度，![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2CIlAxJKTszU1lnrmY4KiaRRMvG3S8uX7ibcOmhMULHw5gpiavFBf6KW8Q/640?wx_fmt=png&from=appmsg)为舵机角速度

为了方便计算机的处理，状态空间需离散化，得

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2jpRicHcibLEsWX27IEZddLPNc72Aib4U9xcPLia5tMBWzSsiaicDhybDDAicA/640?wx_fmt=png&from=appmsg)

其中，d代表是离散化discretizing，![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2FCZzZQ0cXeEFRkpdSkB1gHf9O1MAGLQDUArEz4yyz2e9n2kh9ibuDIA/640?wx_fmt=png&from=appmsg)是离散化函数

从而可得，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35icPTcrxMhXpic9C6OkbpBWnDHgPzmNn7FLZrerzXe5jA9akvDxCsGBV7w/640?wx_fmt=png&from=appmsg)

可看出，最终的状态![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2PYjnvS2bZtRXIeJooZ6SOtPp0WRia1wynZAdENnWqcNcaRmTWpcnibOA/640?wx_fmt=png&from=appmsg)不仅与初始状态![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2c6gHsBAiabYYC31FZo8ibVnQ2QIfUX7MsmPw6icicRwBKicfCmmVZ8gF1Lw/640?wx_fmt=png&from=appmsg)有关，还与控制序列![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2LDHJ9UgngBjpgT1ibdB5SDWcGSxBSKFgDp2Zmqf5SWDMABqY2AtWIQw/640?wx_fmt=png&from=appmsg)有关

在k=0时刻，车的初始状态为

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH28mvXDH6Soys2X1mia4uhf0YlFIYX5Jaf8JOvwtYpK5icHJFIBpyOGwKw/640?wx_fmt=png&from=appmsg)

在k=N时刻，期望车的状态为，因为是停车问题，![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2Kp3KJzqAmU58FJlI75VJMEgqpdqpiazBWcrBQK4RKNib0qHeU8wBaguw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2E9TUNvTsvG8DwYoFP3luZYf773msR8SiaohxrjRPIVKcfFvCu7Wa9tA/640?wx_fmt=png&from=appmsg)

最终的目标就是，找到最优的控制序列![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2qcfWXl4jyN2L6HyhEaDYbAFDIxa653p0KJrgtWd2d7StY45uLR7p1A/640?wx_fmt=png&from=appmsg)，在其作用下，使![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2KwY3jejHLPkgV4aVj6ueyic8G2SUiaiaicVFViatB9lFsRYZGh0HwxYNx5A/640?wx_fmt=png&from=appmsg)，即代价函数J最小，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35icW0KHJlWLdbS4k0zChXkDmeAqmcW27BKKY7zyWZX2YzxQDXFwOCRQVg/640?wx_fmt=png&from=appmsg)

另外，整个系统是有约束的，如状态分量速度![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35icZOPhTRmPCS6E4pdVoYjIXkJmBO38IOdLI3War1xjqHI8jOibCFxyueg/640?wx_fmt=png&from=appmsg)有最大值与最小值，与控制的角速度![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35ic1j6fONxMf7wPg4USOPB6tvdF1DwhfFyMQmQnCPbVY73QxbbrEE4vwg/640?wx_fmt=png&from=appmsg)与加速度![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35icEic9KlicZZCWzZ7Sbt7sQW59XcwGhDibbvcazanYlxqjf6tp0EyCtrn8A/640?wx_fmt=png&from=appmsg)也有最大值与最小值，即

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35ic6WEibFYdDzGRft1FBXxVf9FMLGe34mhaZoh09hmwlmDse1V848aprYw/640?wx_fmt=png&from=appmsg)

这些约束是不可改变，故称为**硬约束**

在代价函数中，性能指标除了考虑状态需要趋近目标(产出)外，还需要考虑控制施加所耗的能量的大小(投入)，与终点状态趋近目标类似，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35ic63xmZXAibicCGB4Aib7NicOJhjzbGoBiaxeic9CRndAOKylG9ME5EZRFuzoQ/640?wx_fmt=png&from=appmsg)

上述对控制输入的约束是可以通过权重系数改变的，称为**软约束**，此时的代价函数为![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35icWFqxXoxXcA3o7ZRibELibciaCwTDVqPtbMVlQNdiaMDGyoWiaqAx00AVGxQ/640?wx_fmt=png&from=appmsg)

有些场景，如无人叉车的仓储物流场景，控制性能除了对终点状态有要求外，对中间途经点也有要求，即不仅要求结果(终点)好，还需要过程(途经点)好，即代价函数还需要加上这部分，假设中间k=1,2,3,...,N-1的目标状态为![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35icbPDrH81c1XKV6KCDUKoicQL1rPDF2c9ibc4ibmicibMytibSAXLFhYhdP3RA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35icGIqD2vRbBiaU36GdMuhXiaCicgricdOujMx70Ae4nSMOHvv9707edpbZuA/640?wx_fmt=png&from=appmsg)

至此，总代价函数

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35iczcUKHZHI9w3ZCSg23JNmWSn2mnCZ2SiboheyBGXaEib81FQ7Qb7cxWEw/640?wx_fmt=png&from=appmsg)

当避障需求时，中间点状态向量中的位置分量还应有避开区域，即  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35iceH7JplCSnOsQB00jy98qC7XeonOob1IfWrZnNOowIjrEubUcafSqKQ/640?wx_fmt=png&from=appmsg)

**总结**：最优控制问题可描述为，在硬约束

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35ic6WEibFYdDzGRft1FBXxVf9FMLGe34mhaZoh09hmwlmDse1V848aprYw/640?wx_fmt=png&from=appmsg)

若有避障，则中间途经点的位置分量还需在容许轨迹内，即

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35iceH7JplCSnOsQB00jy98qC7XeonOob1IfWrZnNOowIjrEubUcafSqKQ/640?wx_fmt=png&from=appmsg)  

在这些约束条件下，寻找最优控制序列![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2qcfWXl4jyN2L6HyhEaDYbAFDIxa653p0KJrgtWd2d7StY45uLR7p1A/640?wx_fmt=png&from=appmsg)，使总代价函数最小，即

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41Z3HgbPzb8fHKU3CL4X35icTbtLwxy7ggWGULAoatgbjR0H6kRgGnry20lnibib1K3yG1HIkjxyOQUg/640?wx_fmt=png&from=appmsg)