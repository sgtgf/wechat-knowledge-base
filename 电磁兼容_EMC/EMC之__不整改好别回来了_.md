# EMC之 “不整改好别回来了”

原创 小圣 硬件笔记本 2022-06-27 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/cfrfU9ZCYgzQf0VNXIvU0Q](https://mp.weixin.qq.com/s/cfrfU9ZCYgzQf0VNXIvU0Q)

# ▼关注下方公众号了解更多▼

某月某日一个天色已暗的晚上（就前几天晚上），高级工程师忽然说到，“让林工去整改吧”，至此，初出茅庐的我拉开了第一次EMC整改的序幕……

  

这是一个会议用的音视频设备，带有声卡和摄像头，通过USB接入到PC端。  

  

此前该设备已经过摸底测试，测试标准是EN55032 ClassB 3M Radiation，属于欧盟CE认证，摸底测试数据如下图：

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV7vh4pUctIEnWqpIPMTYatnNMTqkaSSaicibjYeUWfLyk5ibLtmgUSKvmv8WC4q0B4wicULNyJ796hPMQ/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV7vh4pUctIEnWqpIPMTYatnu62VYb9FOmTpJNvLzA0ObicFBVZasrUJ5SwXUNMeuoLjiaJT0wUv9svA/640?wx_fmt=png)

  

看不懂上面数据？没关系，一句话概括就是触目惊心，惨不忍睹。

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV7vh4pUctIEnWqpIPMTYatnhIcqU1edPCKGib07QNiazRcAoQgBaWDGKqt375ewpT4DibI3BSreZnI1A/640?wx_fmt=png)

  

其中超标最严重的225MHz和240MHz这两个频点，分别超过23db和16db（正值表示辐射高于测试标准），如果说0db是脚踏实地，那么这两个频点已经在天上飞了~

  

数据表明情况很严峻，然而明天下午就要出发深圳市XX技术有限公司进行EMC测试，明天上午还有别的活要干，怎么办呢？此时天气微凉，夜景幽静，可谓天色正好，要不睡到明天再说？

  

开玩笑![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV7vh4pUctIEnWqpIPMTYatn7aLnCOibLvBCOBNZtCnQhW2EibTUSty9qGg5kkrdtQqqd1sjLatN8ySA/640?wx_fmt=png)，高工（高级工程师简称高工）那句“不整改好不要回来了”怕不是虚的，这不离晚上10点还有几个小时，我先了解一下概念呗（老手们没看错，我就是要先了解一下EN 55032和辐射的概念![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV7vh4pUctIEnWqpIPMTYatnkacTp0tVib1XW7ibfCwLkYw1pp9pZMMicORfgEf33x4DIkJA8R4w7RKJQ/640?wx_fmt=png)，此前我没去过实验室，这是第一次接触EMC整改，如果说明天下午要上战场，那么现在我就是个才加入军队的小兵![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV7vh4pUctIEnWqpIPMTYatnkacTp0tVib1XW7ibfCwLkYw1pp9pZMMicORfgEf33x4DIkJA8R4w7RKJQ/640?wx_fmt=png)）。当然基本概念某度一下就知道了，重头戏是整改方案，这可不是某度就能找到答案的。于是第二步——准备解决方案便启动了。在技术修炼这条路上，谁还没有几个同道中人和论道的圈子，虽然我是刚出栏的小牛，但圈子里的大牛多呀！……此处忽略一万个字，请教的过程先略过，后面致敬！

  

时间到了第二天早上，干了一些别的活之后，我拿到了作为测试主角的机器，是的，此刻我才接触到要整改的机器。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/fgzCXQ1TLV7vh4pUctIEnWqpIPMTYatnGwiclmpE6LPeSpmO2Aic0iaW5VOcozTVeRcAkr4xm9SPqicdZlicAWbaDyQ/640?wx_fmt=jpeg)  

  

迅速了解和学习一下组装及拆卸机器，因为涉及到换料，所以组装的动作要快速，毕竟实验室是有时间限制的。还学习烧录了一份可能会用上的固件，噢，该出发了。  

  

跳过没得午休的路上时间，来到了深圳市XX技术有限公司，好吧，没有想象中的气势恢弘。我来得比较早，此刻还有别的人在实验室里整改，干劲十足（好吧，后面知道了他们下次还得干劲十足）。作为新手，熟悉环境是第一要义，找了一个舒适的地方，和工作人员聊聊天，再看看实验场地：

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV7vh4pUctIEnWqpIPMTYatnNoCXNxOAOeW7ibpdtYMibqlbicXs1S75tFDeZ8LVTGPgpCZhvXpQdPZrQ/640?wx_fmt=png)

（现场忘拍照片了，这是某度找来的）  

  

然后，该上场测试了。  

  

  

**正式开****战篇**

  

**ROUND 1**  

先上实验数据：

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV7vh4pUctIEnWqpIPMTYatnicyFx5pslmHuaF6GB4zzedrYiafr7D3iavN2sEIGzVGGawtuwSyibNakog/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV7vh4pUctIEnWqpIPMTYatn1vJJVynkhxZuGgsp62alwlk5k3nozJYiaFW8CJ4Degm8JDsibW4r85KQ/640?wx_fmt=png)

  

数据很漂亮，整个频段都在标准范围内，并且最少也留有2个dB的裕量，我心中暗喜，莫非一把过了？

  

如你所料，并没有，测试的设备只打开了音频，并没有打开摄像头，按照测试标准，设备在全功能运行时测得的辐射不超过才算通过，所以这次数据作废。  

  

有的伙伴看到这里，可能觉得问题很繁琐，没有头绪。如果是这样的话，给大家分享一个我平时高效处理问题的方法。作为一个知识分享型博主，**平时我会加入一些【硬件工程师探讨群】**，工作上很大一部分自己无法解决的问题，都会在群里跟硬件大佬们交流探讨——最后解决，相当于身边多了一群同事。

  

**这不最近嘉立创在搞【硬件工程师万人交流群】**，推荐给大家，专门为工程师们打造的一个日常探讨硬件技术和行业资讯，以及业务拓展合作的社群，扫码即可加入。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhT00nQicnsl7dzN3M3kRSJQh7lN8XpQha7J5Sf0Yjd6K5Mia8kIo6dHbTt27VdiaPmm8lpHvxvQVfzQ/640?wx_fmt=png)

接着继续测试...

  

**ROUND 2**

**先看一下全功能运行时的数据：**

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV54lcDQ8gVoMcpia0Ubg6wibUVaYAv9Lk2YLuFuL3f4X84icAC5o9qK9ZjkpM2QWzVGPxZGsLnauIEmg/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV54lcDQ8gVoMcpia0Ubg6wibUC2yMadCE9PIOibuavEoG1Wa2ibXTKWknaiaic4ibWjibdnEfn32iaH8l48iceQ/640?wx_fmt=png)

  

辐射超标虽然没有摸底测试的数据恐怖，但是两个频点超得也多，还是需要进行EMC整改。

  

**但是EMC从何整改呢？**

**一、锁定辐射源**  

从测试表可以知道超标的频率分别靠近225MHz和240MHz，225MHz是MIPI摄像头的时钟频率，而240MHz是USB2.0高速模式下的时钟频率，由此推断辐射是摄像头部分和USB线泄露出来的。

  

**二、制定应对策略**

先对USB泄露出来的辐射做处理，整改方案是在靠近机器端的USB线串一个磁环加绕线一圈，如下图红框处：

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV54lcDQ8gVoMcpia0Ubg6wibUu3PZY5zNL8V4Ahkg6NQUnDicFBmPlMURhbibTcxDdtrX1lGeTHXzRQVg/640?wx_fmt=png)

  

**三、实测验证**  

串磁环加绕线后，再次进行测试~

  

**ROUND 3**

**串磁环加绕线测得的数据：**

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV54lcDQ8gVoMcpia0Ubg6wibUhhicgiatsjKOm7qA4RfH0gQMJWydHfP0eqeXcvx0icA4nnSGhoyiab5Aaw/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV54lcDQ8gVoMcpia0Ubg6wibUwY1H4I4urelR6sMh9yNqLPeN9xlPvbBg3siaX7TrwvmDo0iabnyV6veA/640?wx_fmt=png)

  

显然，加磁环的辐射比不加的辐射小了好多，这说明整改的方向是正确的，效果十分明显！从测得数据来看，只剩219MHz这个频点超了，只要这个频点也低于辐射标准，这次的EMC整改就圆满结束了。  

  

但对于219MHz这个频点，我也摸不清是从哪冒出来，于是我寻求高工的帮助并将这阶段性的胜利告知高工。

  

但见高工心情微微欣悦，思索片刻后给了我一个整改方案：把USB座处的两个ESD管换成0402封装的33pF电容。  

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV54lcDQ8gVoMcpia0Ubg6wibUaPQZScFOjXwc85A0T975NVtiaRgfZTYgwrLVrtezcicUoqhc7qabJialQ/640?wx_fmt=png)

换料当然是很快的啦，就三步：拆机、换料、装机，搞定，再次测试~  

  

**ROUND 4**

**串磁环加绕线、ESD换成33pF测得的数据：**

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV54lcDQ8gVoMcpia0Ubg6wibU9ZLWFnW8Q6jQ5ib4CaApleOpAXqxBPvJ25Z7hbMt10dPek4Aqky2eTQ/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV54lcDQ8gVoMcpia0Ubg6wibU2ibeqdZaVVicXs5eUXgsrian9mbiahsZb5Vic9x9HyfpAXRCccfmltdicTzg/640?wx_fmt=png)

  

好吧，效果变差了，辐射从1.88dB超到了2.68dB。

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV54lcDQ8gVoMcpia0Ubg6wibUM9hUg57umia94KYmD3gKdwXv3TuoOdtxUNOwPHfCvy4rg33MygrRIlw/640?wx_fmt=png)

  

片刻过后，高工继续出招：

1、拆掉刚换上去的33pF  

2、机器内的USB线加屏蔽，屏蔽方法是用导电布或者铜箔包裹然后接地

3、部分DCDC区域内外加屏蔽，屏蔽方法是用导电布或者铜箔包裹然后接地，此处需在铜箔下面垫纸，以免铜箔将元器件短路

3、拔掉主板连接到机器顶部触摸按键板的排线

  

我思索一下，决定实施以下的整改方案：

1、拆掉刚换上去的33pF  

2、机器内的USB线加屏蔽，屏蔽方法是用导电布或者铜箔包裹然后接地

3、部分DCDC区域内外加屏蔽，屏蔽方法是先在器件表面上垫纸，再用导电布或铜箔包裹然后接地

4、主板连接到机器顶部触摸按键板的排线加屏蔽，屏蔽方法是用导电布或者铜箔包裹然后接地

5、主板与MIPI摄像头连接的排线加屏蔽，屏蔽方法是用导电布或者铜箔包裹然后接地

6、机器外靠近机器端的USB线串磁环加绕线  

  

PS：这次的改动是把所有的招数都用上了，要是测试还没通过，我也没辙了![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2Caog9bCZgvtH3jjojsp4MKgJsfycibBD1myicm4Kc3uovtJDMEvGCsKfefw/640?wx_fmt=png)

  

花费一些功夫，拆机、拆料、加屏蔽、装机，再次上场测试~  

  

**ROUND 5**

****串磁环加绕线、**USB处的ESD管NC、机器内USB线加屏蔽、部分DCDC区域加屏蔽、触摸按键板排线加屏蔽、MIPI摄像头排线加屏蔽测得的数据：**

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2Caot3yCZEx6ma6INQ0edPJVAcDsS8jG1zFnYTsTJ5BbNR4nGNajhZlsVQ/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaoOqKmuO8BYyTfIlibB3jicg5WhF2357zuWdvEhiavETGlApSLgVUw7IJTQ/640?wx_fmt=png)

  

首先测试水平方向的辐射，数据非常漂亮，裕量很足，这让我有信心通过垂直方向的辐射测试。

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaoIWAXFoIVlX4FVzL9dCwdp48OiagZ6q5AhicpRDzlrzzjicONRO7gWqYiag/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2Cao82iaC40I8BFYicR9WRoGEQAoxzdrSWVLaKajy4hpHZvvHQZI2g7NelNw/640?wx_fmt=png)

  

过了！虽然心里有所预料，但结果通过时还是惊喜到了！

需要注意：虽然过了，但数据还不是十分漂亮，通常来说要留有几个dB的裕量才稳妥，这样在产品抽测环节基本不会出现辐射不合格品。  

  

由于在实验室的时间不多，所以辐射通过后赶紧做下一步的工作，即逐步排查主要辐射源和去除不利于生产的EMC整改方案。首先去除磁环，磁环体积大且要绕线，不方便生产且不美观。

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaoB28PgMFWUDiayX3mFW5dbjmnN3cEuYpH1oia2mETfTzLalmZGk0hUy6Q/640?wx_fmt=png)

  

随手去除磁环，再次测试~

  

**ROUND 6**

**USB处的ESD管NC、机器内USB线加屏蔽、部分DCDC区域加屏蔽、触摸按键板排线加屏蔽、MIPI摄像头排线加屏蔽测得的数据：**

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaoXoh6Ml8SqSjX42Y7TbV67KvcWczibogJeicQNZKfcKofic0lkFG8iaKs5w/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaolyiasLLUwpxFyUmu38c99s9vxjhlmicaLPmJ91FEMqScMJ3qG2T4Od0g/640?wx_fmt=png)

  

去掉绕了线的磁环后，测试图简直是杂草丛生![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2Cao73fic1dgkUwz1iaLVJstibicZB4AwZDHn34k70yCuFwT7jKrpQRtApAlzQ/640?wx_fmt=png)，显然，磁环加绕线的做法在抑制辐射中起了极大的作用且不能被替代。

  

后面在有磁环加绕线的基础上，陆续做了些整改测试：

1、拔掉主板与机器顶部触摸板的排线，辐射测试数据差异不大  

2、在1的基础上，MIPI摄像头排线用导电布包裹但不接地，结果amazing  

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaoOZtyibicqt8jJU1dtDwO1WfqGVW4ibzZHdb0lGoiapebibroBniaQbOzdfXg/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaocFUseaicCFzRIeMsx0CCtyBClJda0gJreEBh8K9YplBfdUnh0Wt1s2A/640?wx_fmt=png)  

  

从测试数据可以看出，整改效果竟是更好了！

  

趣味插曲：此次测试结束时，另一个工作人员进来，看到数据后十分惊讶：“居然过了？上一个折腾了好久都没过”，“早就过了”，“？？” 😀

  

3、在2的基础上，去除DCDC区域的屏蔽，辐射当然是更大了，并且水平方向和垂直方向的辐射强度发生了翻转，即整体辐射更大，但水平方向较垂直方向增强的辐射更大。

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2Cao7yhe3ZIEboTQQicUylvzpp8EliaOsANU5ee0oN4FJquicKE7ibHvWSMsVQ/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaoWEB4bMYjgftwUibcK3nTWuF5rKppicBv3GeesdqXFxFUic7AlyUiaxvo4w/640?wx_fmt=png)

（垂直方向辐射测试数据）

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaocqGtophIA8zVjNdMNJVQsyYiaKPDiciaeHF2PicTDfMjTnptzWx23lR54A/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2Cao6xNjsn1jTAicTb7Xs3qEog6rAfANtFoNwa3RYA9wtCAtUjGrM1KDHBA/640?wx_fmt=png)

（水平方向辐射测试数据）

**最后附上高频辐射测试图：  
**

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2Cao7bicyelH8jGMlQlZhb4zQ7uTDECq1C7J5micrV7LcQfHjBJiaFu4FuEZw/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2Cao2m9ZibgPYdGz19EUHJickayyT9ETUAJxeF5VOWmJKiatylSKXwYfUrBng/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaoFUhlyrl5xQyibEO1b60fhlDLltOeOxywOEWCGrROE7gicLajZic2frfJg/640?wx_fmt=png)

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2Caojgk82YbicwliaKvIxibpWDBAibnfhFCO9jgS3znK1Eficyg2yWWE1nXYqJg/640?wx_fmt=png)

  

注：30MHz-1GHz是低频辐射的测试频段，1GHz以上是高频辐射的测试频段

  

从测试数据可以看出，高频辐射裕量十分充足。  

**到此EMC测试整改圆满结束，现在天色比昨晚接到整改任务时稍黑，该打道回府了~**

  

后续：  

回到公司后，高工：“林工还是相当不错的！”

………………………………………………………………  

  

**EMC整改小知识：**

**1、为什么磁环绕线要多一圈呢？  
**

答：因为这样可以提高磁环的抗干扰特性，还可增强它的滤波效果，所以把线圈绕磁环多一圈是一个非常不错的选择，按照这种做法来做，不仅可以把紊乱的信号拒之门外，还可以把外面有用的信号，吸收到电子产品里，从而使电子产品达到最佳状态。  

直接把磁环串在电线上使用，EMC的效果基本没有，因为磁环的滤波次数不够，必须绕多一圈（理论上绕的圈数越多效果越好，实际生产装配不允许绕多圈）来增强磁环的特性，多绕一圈即信号线滤波两次，更有效地抑制干扰信号。

**PS：应对从设备USB泄露出来的辐射，磁环放置越靠近设备端接口效果越好**

****2、MIPI摄像头排线要用导电布或铜箔包裹？****

答：摄像头排线使用的是FPC软板，自带电磁膜屏蔽（FPC柔性线路板作为电子器件中的连接线，主要是起到导通电流和传输信号的作用。当信号传输线分布在FPC最外层时，为了避免信号传输过程受到电磁干扰而引起信号失真，FPC在压合覆盖膜后会再压合一层导电层（电磁屏蔽膜），起到屏蔽外面电磁干扰的作用）。

**但电磁屏蔽膜这东西，好的EMC效果很****好，差的近乎于无。电磁屏蔽膜与信号之间间距很小，产生了很大的分布电容，有这些电容在，屏蔽层很有可能变成天线，会产生共模辐射。如果用铜箔或者导电布把它抱起来接地，大概率可以解决这个问题。**

**在本次EMC整改中，向许多经验丰富的硬件工程师请教整改方法，特此致谢：**

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaoKlMG19OmC0M0pzAvjHPiaq3KrazrejNYHxzqibZic5Gs830UcvPbBhyEA/640?wx_fmt=png)

——出自拥有二十几年经验的谢大侠  

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaoiafibQu5YKzXGDohnfoCy2x2EHdt1fcw0v3U9ElXNRanCHY1sVxlLCXA/640?wx_fmt=png)

——出自大牛N（科学家）

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaoEgRwfP30gvqOfU1FYaia3oILtgWnAIYbQTSSHPwQS1BW0mgZoqhIAuQ/640?wx_fmt=png)

——出自经验丰富的xl大侠

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaovFJKHbCiceGzg2xH4ic0leEQJ72XmNhSp9wYiaQgFkCXTRJVlQ5sHuycA/640?wx_fmt=png)

——出自热心的肉刀大侠

  

  

![](https://mmbiz.qpic.cn/mmbiz_png/fgzCXQ1TLV5aibWqSGXkbQLicgaSew2CaoKBLmqA8QoibkfwcjiaBdVfDnkia3uov5PRX1YEibF9EPSR86JM2XRkPutQ/640?wx_fmt=png)

——出自强劲的某打水大侠

  

  

还有很多热心的硬件工程师帮忙分析和划策，这里表示十分感谢，限于篇章，不一一列举。

  

最后，文章由初出茅庐的小子撰写，若有错误以及不完善的地方，请指点出来，感谢您的点评~

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhT00nQicnsl7dzN3M3kRSJQibjkxQqeEI7ZCV6bU2XukIf4Qar32ugUlUlaRC1dH8yjIiav0har5Z3w/640?wx_fmt=png)