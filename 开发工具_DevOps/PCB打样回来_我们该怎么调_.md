# PCB打样回来，我们该怎么调？

原创 硬件笔记本 2023-03-23 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/aYPtqr9icZIKHf3y7veNAw](https://mp.weixin.qq.com/s/aYPtqr9icZIKHf3y7veNAw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

无论是让别人做的板子，还是自己设计制作的PCB板，拿到手的第一件事就是检查板子的完整性，如镀锡、裂痕、短路、开路及钻孔等问题，如果板子的作用比较严谨，那么可以顺带检查下电源与地线间的电阻值。  

  

一般情况下，自己动手做的板子在镀锡完成后就会将元器件装上，而让人做得话，只是一个带孔的镀锡PCB板空壳，需要拿到手的时候自己安装元器件。

  

有人对于自己设计的PCB板有较大的信息，所以喜欢一次性先把元器件上全了再测试，其实，建议最好还是一点一点来。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhmm6vl5tAFyuZn6lQ7ah2nxhWEj9ob8sQycozGb0hQ8ySJ0GwlSgJYricic3x7TXHQHzljmgXQxxNQ/640?wx_fmt=png)

调试中的PCB电路板

  

新PCB板调试可以先从电源部位开始。最安全的方法就是，上一个保险丝然后连接电源(为了以防万一，最好使用稳压电源)。

  

使用稳压电源设置好过流保护电流，再把稳压电源电压往上慢慢调升，此过程需要监测板子的输入电流、输入电压跟输出电压。

  

当电压往上调的过程中，并未出现过流保护且输出电压正常，那么，表示该板子的电源部分是没有问题的，如果超出正常输出电压或过流保护，那么，就要排查故障原因。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhmm6vl5tAFyuZn6lQ7ah2nNlGD68phEWPBeUQMia38R7IWIFFtqlj5eUsx7ManfEThg50uFKa8x9Q/640?wx_fmt=png)

电路板元器件安装

  

在调试过程中逐渐将模块安装上去，每上一个或者几个模块时，都遵循上面的步骤进行测试，这样有利于避免设计初一些较为隐秘的错误，或者安装元器件错误，从而导致过流烧坏元器件。

  

如在安装过程中出现故障，一般用以下几个方法排查：

  

**故障排查方法一：电压测量法**

![](https://mmbiz.qpic.cn/mmbiz_jpg/Hlibq5A7Z6tNoh31rhM3jETib8tqdLkZMfqkSVibp6JV55q5K7VrUxjMIJjwUbwrVfyWodMawTZ7Z2XmeiaicicDBuww/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

测量电压法

  

当出现过流保护，不要急着拆卸元器件，先确认各个芯片的电源引脚电压情况，看是否在正常范围。之后再依次检测参考电压、工作电压等。

  

比如：硅三极管在导通时，BE结的电压会在0.7V左右，CE结则一般在0.3V或更小值。

  

当测试的时候发现BE结电压高于0.7V(这里排除达林顿等特殊三极管)，那么就有可能是BE结开路。依次方法，检查各点电压就能排除故障。

  

**故障排查方法二：信号注入法**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhmm6vl5tAFyuZn6lQ7ah2nZmL48KgCVDibfuEQxYJMGdGHTsygF8ibxnVsYrq4CJs6wnw2EGGGcO3w/640?wx_fmt=png)

信号注入法

  

信号注入法要比测量电压来得麻烦，在将信号源输送到输入端，我们需要依次测量往后各个点的波形，从波形中找到故障点。

  

当然，也可以用镊子去检测输入端，做法就是用镊子碰触输入端，然后观察输入端的反应，一般这种方法被用在音视频放大电路情况下使用(注意：热地板电路及高电压电路千万不要使用此方法，容易发生触电事故)。

  

该方法检测到前一级正常，而后一级有反应，那么故障并不在后一级，而是在前一级上。

  

**故障排查方法三：其他**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhmm6vl5tAFyuZn6lQ7ah2nME6L6iag97JMbUs2argY6hJ1BBOQvCnvosUETYjtU7gVRQMoRrFbzlg/640?wx_fmt=png)

PCB电路板外观检测机

  

上述两种属于较为简单且直接的方法，另外比如常说的看、闻、听、摸等，则属于需要些经验的工程师才能够检测出问题。

  

一般“看”，并不是看检测仪器的状态，而是看元器件的外观是否完整;“闻”主要是闻元器件的味道是否异常，比如烧焦味、电解液等味道，一般元器件在损坏时都会发出难闻的烧焦味。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhmm6vl5tAFyuZn6lQ7ah2ndyn3uGqUPU2TWCJM3iblVwJnxXHrLhRqRoibicNJSkAsfqfhx054zQ8Ig/640?wx_fmt=png)

  

而“听”则主要是听工作状态下板子的声音是否正常；关于“摸”，并不是去摸元器件是否松动，而是用手去感受元器件温度是否正常，比如工作状态下，该冷的元器件却发热，而该发热的元器件却异常冰冷。在摸的过程中切勿直接用手去捏，以防温度过高将手烫伤。

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。