# 扩展卡尔曼滤波EKF系列02---基础原理：分布融合的视角


> 原文地址: [https://mp.weixin.qq.com/s/Eg\_ciPMMz2fEQgevEqWapw](https://mp.weixin.qq.com/s/Eg_ciPMMz2fEQgevEqWapw)

**一**、2个高斯分布的合并****

以1维高斯分布为例，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2JhHyrjYeibhgx6iaha6iaBjGI4IibkiaHmfwdibicTicWibianhhCj9HfWcFxb4g/640?wx_fmt=png&from=appmsg)

上述是对同一变量得到的2个高斯分布的概率密度曲线示意图，**为了得到更加准确的估计，可将这2个高斯分布相乘，相乘后的高斯分布均值在2个分布的均值之间，方差比任何1个分布的方差都小。**

将2个分布的概率密度函数代入后，可得相乘后分布的均值与方差为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH20cnVGuz5iaLGMvzLbOBFPEW6oMRichJsvajvekpeSDe1qFaVnF5AuQIw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2cdW8KIS2JSjzDbVXCG1eJSBtPRTpRfGjAjqKjgkxg7zuKTc2MKTiagQ/640?wx_fmt=png&from=appmsg)

备注：这里的k、第0个分布的方差、第1个分布的方差与上节中系数、估计误差、测量误差非常类似。

我们把上述1维扩展成多维，得

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2cVRyiclEF4SZmbjcibZCMFXic9kBwiaQFicOQWvRzVysG4lWe1JbXw9pfmg/640?wx_fmt=png&from=appmsg)

**二、预测估算**

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2WveicX9BW3HmuyzwW0RHowBDnM6q9NfX88br9IK4XXV6XgVZy5sibE9g/640?wx_fmt=png&from=appmsg)

第1个式子，就是状态转移方程，基于上一时刻的状态![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2cLDdIwVQ4kjoBW1lhZQQxId7uDNh2jjJiaYrVlkEvFJ6qQicXkSI5c8Q/640?wx_fmt=png&from=appmsg)、与当前时刻的输入![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2OxIwTMmGqqO65CEN2uuMXKo9XzYGWic2phV5Y2t1zqvFW4w4CkRdR0Q/640?wx_fmt=png&from=appmsg)，再加上此刻的状态转移矩阵![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2GJgMQg3jevEMNxibK5pjunv5p4Wu0N5EKDR2mIxMZL2HnEDDBerPlcA/640?wx_fmt=png&from=appmsg)与输入矩阵![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2jnntq8ibfDzwaicsQsBHgTtvTibiap7bciaoOYRGRVaLDQvCpXkhak76aLg/640?wx_fmt=png&from=appmsg)，则可得当前时刻的状态![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2y45HJZ0TArsQZud0yRa8Qv1eJicVdaydOvXD6MibokMW58IibfyM0CYVw/640?wx_fmt=png&from=appmsg)。

第2个式子，是计算估计后协方差矩阵，因为若分布中的每个点左乘A,则结果的协方差矩阵

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2ia4Bos249YE3lC8yeaothFhjGBYdHo6k3ZZfMp09niaDSWxHvRd2VLKQ/640?wx_fmt=png&from=appmsg)

其中，![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2iaglg0dUuDHJd95xVm4O5uialsTY3TjzDycNGGd1L7ib4cS0qk2dcxmng/640?wx_fmt=png&from=appmsg)是噪声

上述值，是单纯根据模型**算**出来的。

**三、观测更新**

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2wiap4pQEUc5ydBgXbAa0rXkfhaAdgYlAdbk6zNMRicds8iaxMuRj1j8EA/640?wx_fmt=png&from=appmsg)

第1个式子，基于预测步骤得到的状态估算，得到测量的估算；

第2个式子，测量估算对应的协方差矩阵。

站在**观测值**的角度，上面描述的是**算出来**的值；

另外还有一个是**测出来**的值，其分布的均值为![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2oPe9BROibOBjet3MFRf112jjJoziaKRM3SBtHw6DecLz53zSUvVydqZw/640?wx_fmt=png&from=appmsg)，方差为![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2kWibtrS0dA6dJ9YoZVe7SSnibr6vtlvypbrIvTTGR35u58ga2AAuUtsw/640?wx_fmt=png&from=appmsg)

根据融合2个高斯分布相乘的原理，可得融合后的新分布为(**站在观测的角度**)：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2c8ibJWUkBEB4ZaI1LOgMRGzT6eTziaVPlKiaGqdKsSV8Bft9NHD4cL5KQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2cpPiaJwSyibp0qGoDPfZ5aXmgudRkO3UuuADKnqqG6SvbcCxx5GSFG5A/640?wx_fmt=png&from=appmsg)

将上述公式化简后，得

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2gSeYAbcaHe9s6egIsfibDt6iajd12HibxUZ32nTiclL3VEpNcV58McWd3Q/640?wx_fmt=png&from=appmsg)

  

基于预测与观测过程，可以得到KF的执行流程，如下  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41kfsPCUj4ZbxBbKezwxMH2oNOiaKfBlwbicrJPMHRLYS7OVsVibfbiaMpw74yTseib0eFuGicibYvvA9buw/640?wx_fmt=png&from=appmsg)

**四**、思考****

上述2个高斯分布的融合，是要求站在观测的视角，因为基于观测方程，可以方便地得到对观测估算的分布；读者可以想想，如果基于观测方程与观测值反向求状态值的估算，然后站在状态值的视角，进行高斯融合，是不是也可以呢？