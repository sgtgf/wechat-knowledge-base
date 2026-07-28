# LQR系列05---原理推导及实例验证(史上最详细，了解LQR这篇就够了)


> 原文地址: [https://mp.weixin.qq.com/s/g1uH857twlca0umFJw\_E4g](https://mp.weixin.qq.com/s/g1uH857twlca0umFJw_E4g)

有了前面几节知识的铺垫，终于到了揭开LQR神秘面纱的激动时刻了，就是求下图中所示的反馈矩阵K. 

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmaQd0IRNLQD6sdteiavef7SmyCibRMYKFibyFGou1jdR8QHUsGghTSBFibLg/640?wx_fmt=png&from=appmsg)

****一、概述****

LQR的全名是Linear Quadratic Regulator, 线性二次型调节器。线性好理解，状态空间方程中，我们已经线性化了，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmaTnPFvYIyjj9azpibSgEHCcibOPjj8c3Zia1chWOpJrI8iaPHxEbMKL6Xag/640?wx_fmt=png&from=appmsg)

**二次型**是指，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAma4kVwCyicFDBfnMBbn3eofje7fFBtVlzemGWp6QbibNwm8GN3jgSRBZeA/640?wx_fmt=png&from=appmsg)

这里，初学的读者，可能对![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAma4icyIMIsSsGmb8F15aKTa9pibZjpVUeHenW8X1358h5efumdibFE8ydfQ/640?wx_fmt=png&from=appmsg)这种表达不理解，假如x为二维向量，则

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmaichpgrMp2jkxNicxP8jeJCSaN4TkJp4NVluXqyQqj1qmWrAxOaywEYJA/640?wx_fmt=png&from=appmsg)

由此上知，**![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAma4icyIMIsSsGmb8F15aKTa9pibZjpVUeHenW8X1358h5efumdibFE8ydfQ/640?wx_fmt=png&from=appmsg)是对1维中的![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmappNNXvjo54EU2ADNPtDqjjUMFrL1JhSwhprPtNiaWXsyVRPfFkbSgCA/640?wx_fmt=png&from=appmsg)****形式在****多维中的扩展，顺便说下，线性代数中很多概念都类似**，有兴趣的读者可以仔细体会下。

其中S、Q、R一般都是对角矩阵，分别被称为终端权重矩阵、运行权重矩阵与输入权重矩阵，S、Q为半正定(**此处通俗理解就是元素都>=0**)，R为正定(**元素都>0**)；

当![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmaicbCj8rfaH9Vf5ykym3S32krRbsMoxlRRjpfWCIt6UI53FDq6wOPZsA/640?wx_fmt=png&from=appmsg)为0向量时，就被称为**调节器**，代价函数变为  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41f7fPiaTqUKUuR3ho3QrB6F8sK4x0YTh8aNm3KzgUb53ySaEWdBMfNmz21kbL6b1mvwUNlTib3IYXA/640?wx_fmt=png&from=appmsg)

将状态转移方程展开，得

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmamlMkcBD6iazqUntQXy0JLV3EKKNGFRRIZXfeDQYm5HWFqjVp2gOu6CQ/640?wx_fmt=png&from=appmsg)

由引可知，在初始状态已知的情况下，

第1个状态由第0个状态与第0个输入决定，

第2个状态由第0个状态，以及第0、1个输入决定;

...  

第k个状态由第0个状态，以及第0、1.....k-1个输入决定;

问题就是，基于初始状态，求最优的控制序列![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmayiatM7XegjjCr4urNHOiaU6yXM8jTtTiayNGjwrHw3BN6daegGA6RswuA/640?wx_fmt=png&from=appmsg)

****二、推导****

与上节中的1维类似，也采用逆向分级的方式， 第k步的代价函数为  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b75g8njc51tEORic8RGaDJRHDd354YmNIT6oNiakaqgj34I4Dm3ycWViaxuw/640?wx_fmt=png&from=appmsg)

当n **= N** 时，最后一步，木已成舟了，只有终端代价，如

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAma4eoC1s9icSbNlxo4LlOSxcMe3CJLmRoup34xQoWBpiahZkT9BwWsxDCA/640?wx_fmt=png&from=appmsg)

当 **n = N - 1, k = 1**时，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmar0VqJ8LY4TCiatoxr1ES37NWZ91CS2D01PcCbZJ4bwdXmg6jlUtlzicQ/640?wx_fmt=png&from=appmsg)

**根据贝尔曼最优理论，如果第N-1 步 → 第N步是最优的，则第N步 → 第N步也是最优的.**

当 **n = N - 2, k = 2**时，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAma0Mnj9G5fb5uHWQhTIFicbEaWiaRybhRh8jDMd7UHyAkSWxuk5g3Yb8Yw/640?wx_fmt=png&from=appmsg)

**根据贝尔曼最优理论，如果第N-2 步 → 第N步是最优的，则第N-1步 → 第N步也是最优的**。

...

**详细计算如下**：

**当 n = N -1, k = 1时**，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmaxn8OLeqbZUdxbrHbxL7CA6mZbcqUsIbgLOcOjSzzDF3TsibUJzEzIAw/640?wx_fmt=png&from=appmsg)

为了进一步认证所求的![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmaYjjKqIicqthYkOKantZ0GlWFD7QAiaFgpG54dTdwQURA3qx6KmMLSEOw/640?wx_fmt=png&from=appmsg)对应的J为最小值，可求J的二阶导，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmas6IRbcdBJZMMFlKWF4uK5DtRwlNdq7Mgg1icCwGL7LPsdpl4mRGD2SA/640?wx_fmt=png&from=appmsg)

此时的最小代价为，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmahnXGibFhFcOpycdwUzcEPRxO8ibfp6eicvgOhRicb9BbnYsicpT2EomZ5ibA/640?wx_fmt=png&from=appmsg)

**当 n = N -2, k = 2时**

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmahKJUIudTGGaJtdX1bbYj9khYb16BtxbqGOrQMcASWhSRNq8NialfICA/640?wx_fmt=png&from=appmsg)

为了进一步认证所求的![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmanfg25CnUO4cNMjyHzvjPGvfYfSlG7x911xLPH53MSy8lUg9TXfLf4A/640?wx_fmt=png&from=appmsg)对应的J为最小值，可求J的二阶导，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmaomXCvEWoSLrt4icPSdvFhPzJkbqSnDF0e3j6e5ZuAeibtIjO0zOXJb3w/640?wx_fmt=png&from=appmsg)

此时的最小代价为，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmaY0I52P96U4extgRxRic0rL80AbjUTGgdx8LjwIdtZCJDianzPq9P1PaQ/640?wx_fmt=png&from=appmsg)

...  

流程如下，  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b75FMXku3P97Woz3F61ptlgftjmwD9gJEYOWhpdb2Lqh1G3PicJQcyiafrw/640?wx_fmt=png&from=appmsg)

其中，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmaO7j5mxaNrvV9u5LBQkUZmQQZDibZ4PO3zT7nAFfefhEGWckqib2JfhEQ/640?wx_fmt=png&from=appmsg)

****三、案例（****弹簧-质量-阻尼系统****）建模****

典型的弹簧-质量-阻尼系统。其中，初始位置为1，初始速度为0，控制目标是通过调节u= f, 让位置与速度都为0.

****![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmaqgkMddLEV88v0zwEFqT1ia4xgAIa9Qu84Eiaib7KXoMhFdgM2TjE6B45Q/640?wx_fmt=png&from=appmsg)****

建模分析如下：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b75QGBCrseNzHGdNFEyNcH4GNNJibDT8LCNVdJOH1l3w6eN0TGszlskUVQ/640?wx_fmt=png&from=appmsg)

**四、LQR求解**

编程实践如下：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b75N0LnsMrkWqyLnJONS5x33NnUDu7uiaXicjriaV57qevibYTqmvawhMBPdg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b75u9qqrTImibOOlpwTkxulRDTP9IKgLRkzwRGISC4U8wg0iaBmqmFLOCmA/640?wx_fmt=png&from=appmsg)

**注解：**

上述如果按照前向欧拉法离散化，得到离散化结果为  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b75PoQr3tNhmQFg2PIgK0cumeqwSEI8xqeFnMnuMcjSUJicbm1QE4ESnZw/640?wx_fmt=png&from=appmsg)

而matlab中c2d()的函数输出为：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b753MKheWFxT7FPYVH1uCqINxlgic5Hcd85s25gVyHacXD27kPYdG7Uvaw/640?wx_fmt=png&from=appmsg)

对比可以看出，差距不大。![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b75iaGibdhXuRx74upKLP7yIib0nWLkjpnIG3kPiaW5NicX0cDJbhUu5cicgQkg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b75HqnfYvmqnRZStL6WnMWRpfErp8d0k5Rib8PRAYvsVm8Tv60JYFRk3ew/640?wx_fmt=png&from=appmsg)

**注解：**

此处关键是要理解LQR的下述执行流程，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b75FMXku3P97Woz3F61ptlgftjmwD9gJEYOWhpdb2Lqh1G3PicJQcyiafrw/640?wx_fmt=png&from=appmsg)

需要注意的是F\_N矩阵，它最终存储的是所有的F矩阵。

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b75aib6Z5dNRhDx3nEJxCdPibnMUxTZUqzXhJ6DfDfyux6WtHczxeicHq3dA/640?wx_fmt=png&from=appmsg)

**五、LQR求解结果分析**

**第一，不施加f，**

状态与输入的情况如下图：  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b75frZibrhqTckB6CclYdb2jF42JAtusUYBpfN3iaCibkR8gz8xicUkrn8jibg/640?wx_fmt=png&from=appmsg)

可以看出，不施加力，在初始速度为0，初始位置为1的情形下，弹簧-质量-阻尼系统中，其质量块的位置与速度都震荡收敛至0，这与事实是相符的。

**第二，采用LQR反馈控制，观察R的影响**

设置R = 0.1时，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b75VgsXDZnHYReT31WKuGIzoRbSwVHCxSNbPac9nEH1FKm3GZhu0w2E5w/640?wx_fmt=png&from=appmsg)

设置R = 0.01时，  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG42t31TtYCJA6PWFlMlF1b75iaEtViaHrjeRicrAI7CMyH4eeMlmoSVIujC1A6s8EwWYEOFPU7EcA8MIA/640?wx_fmt=png&from=appmsg)

**可以看出，R = 0.01比 R = 0.1时要求的输入明显大，R = 0.1更看重输入 , 某权重越大，表明越看重某项。**

****六、LQR工程化****

在上述的计算过程中，我们把k= 1...100的F矩阵存在F\_N中，其值如下：

2.045137

1.635248

2.045137

1.635248

2.045137

1.635248

2.045137

1.635248

2.045137

1.635248

2.045137

1.635248

2.045137

1.635248

2.045136

1.635248

2.045136

1.635248

2.045136

1.635248

2.045136

1.635248

2.045136

1.635248

2.045136

1.635248

2.045136

1.635248

2.045136

1.635248

2.045136

1.635248

2.045136

1.635248

2.045136

1.635248

2.045137

1.635248

2.045137

1.635248

2.045137

1.635248

2.045137

1.635248

2.045137

1.635248

2.045137

1.635248

2.045137

1.635248

2.045136

1.635248

2.045136

1.635248

2.045136

1.635248

2.045136

1.635248

2.045136

1.635248

2.045135

1.635247

2.045135

1.635247

2.045134

1.635247

2.045134

1.635247

2.045134

1.635247

2.045134

1.635247

2.045134

1.635248

2.045134

1.635248

2.045135

1.635248

2.045136

1.635249

2.045138

1.635249

2.04514

1.635248

2.045143

1.635247

2.045144

1.635245

2.045145

1.635241

2.045143

1.635236

2.045138

1.635228

2.045129

1.635217

2.045114

1.635204

2.045091

1.635188

2.04506

1.635171

2.045021

1.635152

2.044975

1.635135

2.044923

1.63512

2.04487

1.635111

2.044823

1.635109

2.044789

1.635119

2.044779

1.635141

2.044805

1.635174

2.044877

1.635215

2.045004

1.635257

2.045188

1.635285

2.045422

1.635278

2.045684

1.635209

2.045933

1.635039

2.046105

1.634725

2.046106

1.634216

2.045815

1.633463

2.045087

1.632422

2.043758

1.631065

2.041665

1.629388

2.038667

1.627431

2.03468

1.62528

2.029718

1.623087

2.023939

1.621065

2.01769

1.619491

2.011549

1.618677

2.006344

1.618939

2.003147

1.620532

2.003214

1.623563

2.007881

1.627877

2.018365

1.632917

2.035481

1.637564

2.059246

1.63996

2.088354

1.637363

2.11956

1.626054

2.147019

1.601415

2.161793

1.558296

2.151847

1.491829

2.103047

1.398807

2.001608

1.279481

1.837976

1.139271

1.61118

0.989442

1.331673

0.845924

1.02085

0.726236

0.707019

0.645732

0.419773

0.614836

0.185489

0.638296

0.025651

0.716226

\-0.04194

0.845951

注意到，当k = 1时，我们计算得到的是F\_99, 存在F\_N的最后一行...当 k = 100时，计算得到的是F\_0，存在F\_N的第一行。由上图可看出，当k约等于50左右，F的值就趋于稳定了。**事实上，对可控且稳定的系统，当N→无穷大时，F→常数**。所以，我们就可以先迭代一定的次数将F求出来，然后控制时直接用，如

\[F\] = F1\_LQR\_Gain(A,B,Q,R,S) 函数所示，

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41f7fPiaTqUKUuR3ho3QrB6FhOMcvLRE0FxhyuoGMCAcDtjhHichYAyIJYzzunEByC9fNxSNFt9wIMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41f7fPiaTqUKUuR3ho3QrB6FK1ykxNcUu6K0uYIHtaTvcliaKgo089PnKSCSAEzL4kMupV8UVuWksTQ/640?wx_fmt=png&from=appmsg)

主代码计算F增益，就可直接调用该函数，如下

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41f7fPiaTqUKUuR3ho3QrB6FtPJyNicQffhX6uOgwqlia2FiboVJRb0lNb4k7icl3o1MNYydDgaX929EOg/640?wx_fmt=png&from=appmsg)

得出的结果与之前相同，  

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41f7fPiaTqUKUuR3ho3QrB6Fc4gWz4FRbk9eYhjW9gcic7ZE5EicKia6HsXGtbVujNib2gcT2qYOvPj0VQ/640?wx_fmt=png&from=appmsg)

实际使用中，可构建1个类，如下：

![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG41f7fPiaTqUKUuR3ho3QrB6F6O62g7PQHXIj1uHMX9yu5e6ZoyN2gGyxicszyF8cFfLHNY5ia0tlOiaCA/640?wx_fmt=png&from=appmsg)

****附录 矩阵求导结论****

**结论1：**

****![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmaQsVCvAtUgZ2yhYqyibh5FicY6Pv9fuzGibtlcv6TRtZCdrA8GHVtk4dRQ/640?wx_fmt=png&from=appmsg)****

******结论2：******

****![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAma5BfRtTsFod3eIEJricoEwmL0T9QJXJR2IjmSFdBS3xMeQfrUZXgqL5w/640?wx_fmt=png&from=appmsg)****

******结论3：******

****![](https://mmbiz.qpic.cn/mmbiz_png/RGhGOXAMG40Dyqqn5KaTPh5InZsVcAmaic1bKyVt6aMicRwFb2XaUeL3mc53jtayJeOSsWC7INs5bTVND4MMDoMQ/640?wx_fmt=png&from=appmsg)****