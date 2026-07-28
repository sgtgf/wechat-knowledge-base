# Antenna-17：TIS和EIS


> 原文地址: [https://mp.weixin.qq.com/s/ID\_fA2AaUntQ6X4BrIWN\_Q](https://mp.weixin.qq.com/s/ID_fA2AaUntQ6X4BrIWN_Q)

![](https://mmbiz.qpic.cn/mmbiz_png/FnSCBqnzmjKwcUbUBFoA80kxYs0N1ONj63CxSF1XlKzGIFJrjgiaib33XN7B6BibrsdDdxKONshp21aJhnUbvhZfL5X6H87yYnWkJPaEY7z0tc/640?wx_fmt=png&from=appmsg)

_

__**★★★**____Antenna-17---TIS and EIS____**★★★**__

_

引言：总各向同性灵敏度TIS是射频领域中常用的性能参数，与总辐射功率TRP一样，TIS也是一个取决于通信链路的天线和接收器（或无线电）的参数，为了更好理解TIS，首先需要了解接收器灵敏度。（传送门：[Antenna-16：TRP和EIRP](https://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247497690&idx=1&sn=e687c0d7a1a3072e9c1a12f35b538aaa&scene=21#wechat_redirect)）

____€1.总各向同性灵敏度（TIS）____

接收机的灵敏度是指在保证接收机能够维持可靠通信的前提下，接收机所能接收的最小功率。例如，假设误码率BER阈值为2.0%，意味着只要BER<2%，数据就能可靠传输。为了确定此灵敏度，需要向接收机输入一个已知数据信号，并记录其BER。通常，第一个数据信号的功率较高，以确保实测BER低于阈值BER。然后逐渐降低数据信号的功率，直到BER达到阈值。  

传导灵敏度

CMU设备直接连接到接收器端口，测试仪首先发送一些已知数据信号，被测接收器随后会将其发送回来，CMU即可确定误码率BER。

假设初始功率为-60dBm，误码率BER为0.001%，再次将误码率阈值设为2%。降低功率，例如降至-61dBm，并重复上述过程。假设在-90dBm时误码率为1.9%，继续将功率降至-90.5dBm，若实测误码率为2.03%，则接收机的最终灵敏度记录为-90dBm，这是能够实现可靠通信的最低功率。由于上述灵敏度是通过导线而不是如下所述的无线方式测量的，因此这种接收机灵敏度测量方法称为接收机的_传导灵敏度。_

_总各向同性灵敏度_

_总各向同性灵敏度TIS衡量的是接收机-天线系统在整个三维球面上的平均灵敏度，该结果与天线的辐射方向图密切相关。为了确定TIS，将被测系统（接收机/天线组件）放置在电波暗室中，_利用暗室天线向待测系统发射信号。逐渐降低发射功率，直至误码率BER达到阈值。假设我们对固定角度θ（θ1，ф1）和固定极化方式（例如φθ）进行此操作，我们得到的是该特定角度和极化方式下的_有效各向同性灵敏度_EIS，可表示为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTmnDTKWaBswMndXLxa5JUw5bn9TiaDibNEuDTBvOVo0icGkibf4RstSdWIEWXJDcwODz7EsvFS58ojBQ/640?wx_fmt=png&from=appmsg)

EIS的单位与灵敏度的单位相同（以dBm为单位），为了确定总各向同性灵敏度，我们还需要测量极化的phi分量，对于该特定角度，其表达式为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTmnDTKWaBswMndXLxa5JUwqW5l0CeY4TKdQpo70uic7KCKqDHmQKiaCQQ1LEicria2pmyePkL2zQSNGA/640?wx_fmt=png&from=appmsg)

总各向同性灵敏度是EIS分量在整个角度范围内的平均值：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTmnDTKWaBswMndXLxa5JUwbAOAFRHtphFibtAUWCYR1kS6RlmzS8uVnOWJzr2XnPibRwtueKIFFkGA/640?wx_fmt=png&from=appmsg)

公式中的平均值可能看起来有点奇怪，仔细思考一下就能明白。由于EIS值必须非常小才能对积分产生贡献，我们需要像1/EIS这样的项来参与积分。如果我们直接在球面上积分而不取倒数，那么灵敏度很差（值很高）的角度将主导积分结果。因此，需要对公式进行反转，以便对较小的数值（灵敏度高）赋予正确的权重。

灵敏度测量是一个迭代测量，而且我们必须测量整个球面上的两种极化，因此这种测量往往需要很长时间。是否可以简单地利用接收机灵敏度和天线的辐射方向图来简化这个过程，因为当我们改变极化方式或角度时，唯一的变量就是天线，似乎能够仅使用天线的辐射方向图来解决这个问题。

答案是否定的，首要原因是天线会拾取被测系统中所有电子元件产生的噪声，而这些噪声原本接收器是不会接收到的。例如在手机中，天线会接收来自内存和屏幕的能量，这些能量会直接传递给接收器，这种接收器灵敏度的降低被称为_灵敏度降低（desensitivity）_。由于天线会拾取接收器原本不会接收到的额外噪声，并且天线的效率始终小于1，因此总灵敏度TIS总是会高于接收器的传导灵敏度。此外，正如TRP所述 ，天线的非理想阻抗也会影响接收机，这会导致接收机性能进一步下降。

____€2.有效各向同性灵敏度（EIS）____

EIS是有效各向同性灵敏度的缩写，在天线测量中，在单一方向上（即对于固定的θ和ф）测得的灵敏度称为EIS。通常，对于天线系统（天线+传输线+接收器+相关电子设备）灵敏度测量，如果给出单个EIS值，则该值将是所有测量角度的EIS最小值。如果对具有各向同性天线的天线系统测量EIS值，则EIS将与总各向同性灵敏度TIS相同。

如果已知天线的最小EIS和方向性D，则有以下公式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TTmnDTKWaBswMndXLxa5JUwzUVAKdhkwlaKibCzexXFsxBfH9FKq4yGyLxY7tjGDbyLYsZAygId9ow/640?wx_fmt=png&from=appmsg)

这样，如果预先知道天线的方向性和峰值角度，则可以利用上述公式大幅缩短测量时间，这对于灵敏度测量尤为重要，因为灵敏度测量耗时远大于功率测量。

从本节可以清楚地看到，TIS是天线、接收器模块以及进行测量时的噪声环境的函数（噪声环境包括环境噪声\[热噪声\]和相关电子设备产生的自噪声）。