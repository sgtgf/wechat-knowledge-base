# LQR系列03---基于贝尔曼最优原理的动态规划的进阶理解


> 原文地址: [https://mp.weixin.qq.com/s/uXCwYSwQ-1gZZxcXqcujXQ](https://mp.weixin.qq.com/s/uXCwYSwQ-1gZZxcXqcujXQ)

这节本来应该是与上节一起的，一者内容过长，二者昨晚太晚，不能继续整理，故今天再加1节。

****一、****绘图****

上节我们通过编程的方法，求取了时间代价矩阵以及输入加速度矩阵，但求取后，基于这两个矩阵，怎么得出最优的路径呢？为了方便理解，我们继续编程，将高度-速度(h-v)，高度-加速度(h-a)曲线画出来。

如果 N\_h=5， N\_v = 3， 则上述的时间代价矩阵

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliawSLKWnR3AD2YggkJcZagTajNhjgQQtm5tTItib2O2911gdvbra8YLyg/640?wx_fmt=png&from=appmsg)

输入加速度矩阵为  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliah0bZ9jCemLvOPSX99TkPbBrRGDaYZaUHdRI4xhcQpAj9n51qOwJicLQ/640?wx_fmt=png&from=appmsg)

画图的代码如下：  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliahbTp6yibV6qANibFGfxiambAnNz7L2B8eAUv5h2p9VKFwkSwDPiciaDkusw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliaeb7tZjopQKFOgRnyYsKMbXqxUAMR5rwAF6VhmXP0QIeR95iclSec2XA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliaX92tK3kG73ezdnTckcfW1MhkJhMZIYbRXibyXSUvuK14jmgR1XibiayiaQ/640?wx_fmt=png&from=appmsg)

画图的加速度输入向量为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliak1kGkSDyKc2icbsYCXQaiaKWgalsfogydVic8jW6oeibyKJOqXxZy4h3wg/640?wx_fmt=png&from=appmsg)

画图的高度向量为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliaVJTf0jApwb0JibhNGSVMhrKVH1q6ZWl1wPm8ib4licHchdZGJYj1zM2Nw/640?wx_fmt=png&from=appmsg)

画图的速度向量为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliaL396JPCQAawSiczibPcrOn0yL9BahNz7jpX7jy5ncRxe8kpsp6FhzWCQ/640?wx_fmt=png&from=appmsg)

将上述3个向量画成高度-速度(h-v)，高度-加速度(h-a)曲线如下：  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliaqKNbhmqlloLspBoHGNg2KNXJwicDKk1b2oECICiciaWZ2K8OQTf5oGPsw/640?wx_fmt=png&from=appmsg)

****二、图形理解****

      当初始高度 h\_plot\_init = 0.0; 初始速度 v\_plot\_init = 0 .0;

在h-v图中，当h = 0时，v = 0,  这是初始状态；

                  当h = 2时，v = 2, 

                  当h = 4时，v = 3, 

                  当h = 6时，v = 3,   

                  当h = 8时，v = 3, 

                  当h = 10时，v = 0, 

  

在h-a图中，当h = 0时，a = 1, 

            当h = 2时，a = 1.25, 

            当h = 4时，a = 0, 

            当h = 6时，a = 0,   

            当h = 8时，a = -2.25, 

            当h = 10时，a = 0,

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliatPDd4nXlicfyehdTmH7wg8DA55mcCYAfiblmpmFvu729yIH3dRqFb4Bg/640?wx_fmt=png&from=appmsg)

上节中的图，其实就是这样来的。

  

****三、不同初始位置****

当初始高度 h\_plot\_init = 0.0; 初始速度 v\_plot\_init = 0 .0;

****![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliaqKNbhmqlloLspBoHGNg2KNXJwicDKk1b2oECICiciaWZ2K8OQTf5oGPsw/640?wx_fmt=png&from=appmsg)****

当初始高度 h\_plot\_init = 2.0; 初始速度 v\_plot\_init = 2 .0;

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliaOqo1MuUIibWptCpUTh65lsDyr4mSK7wN8AAxMAQljWwDWOz3sLiaGicNw/640?wx_fmt=png&from=appmsg)

  

当初始高度 h\_plot\_init = 2.0; 初始速度 v\_plot\_init = 0 .0;

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliaBQkmMX6UpcOP8iaju2nvXqJ0njzxGQ45odvnrqqn4p5XicP6KKp2bBMw/640?wx_fmt=png&from=appmsg)

  

这3张图总结起来，不就是上节的  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliaXXGp5pTZbhR7X0S5NKwVC1B6YrHo6WSspUoYTUCmnovd3uzia4SUiaPw/640?wx_fmt=png&from=appmsg)

  

****四、高度离散化****

如果 N\_h=10， N\_v = 50，

画图的加速度输入向量为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliamWrQlWh8s3E2wbAYic43BIsaCnlg1OdbDby4oVpmySAibsibribM1sle1g/640?wx_fmt=png&from=appmsg)

画图的高度向量为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtlia1sBMbF1ickHiavOgbZNgyrDaQaJW5An2ocplY7K7SiawPqCQz6mv90R0A/640?wx_fmt=png&from=appmsg)

  

画图的速度向量为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliaOrBicafNGjGobMVdOK30F6E0SwUWZ9JdUZicv7yhCfuFhhwQNTqHicNqw/640?wx_fmt=png&from=appmsg)

  

最终图形是：  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtlia67qAibTAGaVSyVoKIQ1BAQAYYE1iaRf2iagqZ1oHrTD0bttVKc75V5lIQ/640?wx_fmt=png&from=appmsg)

  

****五、思考****

****![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliaXXGp5pTZbhR7X0S5NKwVC1B6YrHo6WSspUoYTUCmnovd3uzia4SUiaPw/640?wx_fmt=png&from=appmsg)****

上图是不同初始位置的规划轨迹图的对比，可以看出，不管初始位置如何，基于该初始位置的“次优”轨迹都会向全局的“最优”轨迹上靠。充分验证了百度词条中有关**最优化原理**的阐述：**“一个过程的最优策略具有这样的性质，即无论其初始状态及初始决策如何，其以后诸决策对以第一个决策所形成的状态作为初始状态的过程而言，必须构成最优策略。这个原理的实质是多阶段决策过程具有这样的性质，即不管过去的过程如何，只从当前的状态和系统的最优化要求出发，作出下一步的最优决策”。**那该原理又与LQR有什么关系呢？请听下节讲解。

另外，今天是中秋佳节，首先祝大家中秋快乐，今后的日子里，希望与大家一起，继续关注工程算法相关，期待不断推倒一堵堵隔断书本理论与工程应用的“墙”。

![](https://mmbiz.qpic.cn/mmbiz_jpg/RGhGOXAMG43R3ibN8bnDh2lfia8oUjKtliaj3kTqVnbtU7zskvFJedtoyx8yqXicnfoS7WJribzUN4oRfWJfMYbic2xA/640?wx_fmt=jpeg&from=appmsg)

作者的俄罗斯中秋晚餐