# 干货|分享一个EMC实际案例及整改过程

原创 蜗牛 硬件笔记本 2021-06-28 07:00 undefined

> 原文地址: [https://mp.weixin.qq.com/s/HxgE8YwQ4GmMiXF0Nao7DA](https://mp.weixin.qq.com/s/HxgE8YwQ4GmMiXF0Nao7DA)

 ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")▲点击上方公众号名片关注了解更多▲![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")

  

大家好，我是蜗牛。文章已经好几天没更新了，因为我又开始了EMC整改。

  

看过我前面文章的朋友可能会问“你之前不是已经折腾过两周，EMC好像测过了，怎么又在测？”我也很无奈，明明之中好像有一种孽缘。

                      ![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tI3NeoibhCVOQElp2SrLct6MiaFphia9DEDDCPnUFNJn8ue5l1ibZ5T2TFhrkiagew2OKaibkdjNvIiaictuQ/640?wx_fmt=jpeg)

事情是这样的，因为公司产品做的认证比较多，上次通过了，这次换了一个地方又不过，所以要再找原因。  

  

测试细节东西太多，过程曲折，为方便读者有一个良好的读感，只记录重点内容。结合上次和这次的经验，我把整改步骤都再重新梳理一遍。

  

一、确认现象，证明测试准确。

  

这里很重要的一点就是测试环境。稍不注意，结果可能就不准确。

  

设备的位置，电线的摆放都是有讲究的。之前做辐射干扰的时候，把笔记本电脑遗忘在了实验室，而且电脑是开着的。测试结果明显就差了很多。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tI3NeoibhCVOQElp2SrLct6M3vSYnicEgxVZj91hUXFIfXkAoqPiaZQywKK7sYALNRlfXyJ04QNEI18w/640?wx_fmt=jpeg)

  

二、看波形，找原因。

  

针对某个频率点超标，要分析可能的原因，找到问题点。这是很重要的一部分，也是花时间最多的一部分。常用排除法来查找。

  

①首先排除自己能想到的问题。

  

②如果还是不行，简单粗暴的方式就是拔掉一些功能连接线(比如wifi天线，显示屏连接线，灯排线，刷卡器线类似等等)。这一步很大可能会找到原因。

  

很遗憾，以上两个步骤都没能完全解决我的问题。传导干扰还是过不了。

  

③既然是传导，那就跟电源有关。最有可能的怀疑对象是一个12V转5V的BUCK降压芯片。

![](https://mmbiz.qpic.cn/mmbiz_png/bsiaOicpwT9tIBoRSGXAxY1RDV9Od0JhKFQtNx7ddLLmyhvpGQBCq2p6xp40KK0RicmgATQbvk2X9OGuTOZ4CPlxw/640?wx_fmt=png)

  

规格书上是固定频率570kHz，跟我们的干扰频率很接近。

![](https://mmbiz.qpic.cn/mmbiz_png/bsiaOicpwT9tIBoRSGXAxY1RDV9Od0JhKFXRFu3wX1BQnQ5aUqx3ziaDEmsunVlxgLLaX7OQ2qhMQWGCStsHORbpA/640?wx_fmt=png)

  

实测开关频率为1.66us（602KHz），更接近了，我更加相信了自己的判断。

![](https://mmbiz.qpic.cn/mmbiz_png/bsiaOicpwT9tIBoRSGXAxY1RDV9Od0JhKFy96QkoFaTicmSbbWyG8PEBO8BYaex72dLibg1QMj7d2oAlTBPhvkPgBQ/640?wx_fmt=png)

怎么确定就是这个芯片的原因呢？只要BUCK芯片不工作就可以了。可以采用两种方式来排查，一种是外供电，另一种是用LDO替代。  

  

果然超高的频点降了下来，证明确实是BUCK芯片的开关频率引起传导干扰测不过。

  

  

三、解决问题

  

既然是BUCK芯片引起的，首先想到的是PCB布板，再对照规格书查看。以下是PCB参考布局。

  

![](https://mmbiz.qpic.cn/mmbiz_png/bsiaOicpwT9tIBoRSGXAxY1RDV9Od0JhKF9jFoa19Ke1JArbFREFgTmnKD9oDbJY2SiaTkE6l9PicOQR9h1VdJjS2A/640?wx_fmt=png)

再对照PCB板仔细分析，滤波电容靠近管脚，电流回路面积最小，芯片用地包起来，没有发现问题。

  

接下来怎么办呢？开关频率没法调，驱动电阻是芯片内部集成的，也调不了。只有尝试在电源处加滤波电容，多次尝试无果。

  

突然又有一个猜想，传导干扰不会是辐射引起的吧，然后再耦合到电源线上？于是我用铜箔把整个芯片包起来，并且铜箔接地，果然问题解决了。

  

  

四、小结

  

很多人都说EMC是玄学，因为它看不见摸不着，经常让人感到头疼。它确实也有一定的难度，所以设置有专门的EMC工程师岗位。

  

在积累一定的理论知识和经验后，你会发现原来它也不是无迹可寻，通过猜想再验证就能找到问题点。通常的解决办法也无非就是消除干扰源和隔断传播路径两种。

  

  

今天的分享就到这里，希望对你有帮助。

  

扫码管理员，备注“加群”，拉你入技术交流群。  

![](https://mmbiz.qpic.cn/mmbiz_png/bsiaOicpwT9tIBoRSGXAxY1RDV9Od0JhKFia7iaibpspoa3lInfMIYkxOOLMluTIAXSWJeJn7VIC1IVXM85KFViaRIMQ/640?wx_fmt=png)

       **觉得内容不错的话，欢迎分享，点赞，在看**

![](https://mmbiz.qpic.cn/mmbiz_gif/iaLLibsB5S6FN0h1dvAiaKt7ITP9EYBbIyOGvA1H5PkiaL9NQSoDNoq7Y5kBH8qNziaIYhBZyFibBqNXRHh3ZukzICvg/640?wx_fmt=gif)