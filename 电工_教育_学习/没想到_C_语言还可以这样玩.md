# 没想到 C 语言还可以这样玩

原创 硬件笔记本 2024-05-08 07:36 四川

> 原文地址: [https://mp.weixin.qq.com/s/g7l\_\_fmb5qjF\_dWGoTUVQA](https://mp.weixin.qq.com/s/g7l__fmb5qjF_dWGoTUVQA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

有人说程序员就是艺术家，那下面我们看看用c语言能画出什么作品吧。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/zcVcDoKYUnYw76q97PNvXHpjaQsKXFm0sQgMSOZ2zVA7h32OKH3hlCoRP56krIPjmgGwwex8ndZCCJgdnQIpCg/640?wx_fmt=jpeg&wxfrom=13&tp=wxpic)

  

我们知道，在计算机中要显示颜色，一般都是用R、G、B三个0-255范围内的整数来描述。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/9mQQWOf4KRIyQwc44ia8tC4KoQN5Vg0VTpTl88yhQ1MzAELMt5B8IADlBQIhm22vAQ4mcy9or2EibDfhyPicCXrLA/640?wx_fmt=jpeg&wxfrom=13&tp=wxpic)

  

这一点，即便你不是从事前端、客户端这些与界面交互相关的开发工作，也应该知道。

  

也就是说，你现在在屏幕上看到的任何一个像素点的颜色，都可以用RGB三个整数值来表示。

  

那就有一个有趣的问题**：如果让程序自动来填写每一个像素点，最后会是一副什么画呢？**

  

最近，我在知乎就看到了这么一个有趣的话题，看完真的让人称奇，独乐乐不如众乐乐，分享给大家。

  

**事情是这样的：**

  

国外有个大佬在StackExchange上发起了一个叫做 Tweetable Mathematical Art 的比赛。

  

参赛者需要用C/C++编写代表三原色的RD、GR、BL三个函数，每个函数都不能超过 140 个字符。每个函数都会接到 i 和 j 两个整型参数（0 ≤ i, j ≤ 1023），然后需要返回一个 0 到 255 之间的整数，表示位于 (i, j) 的像素点的颜色值。

  

举个例子，如果 RD(0, 0) 和 GR(0, 0) 返回的都是 0 ，但 BL(0, 0) 返回的是 255 ，那么图像的最左上角那个像素就是蓝色。

  

参赛者编写的代码会被插进下面这段程序当中（我做了一些细微的改动），最终会生成一个大小为 1024×1024 的图片。

```
// NOTE: compile with g++ filename.cpp -std=c++11
```

  

[我选了一些自己比较喜欢的作品，放在下面和大家分享。首先，是一个来自 Martin Büttner 的作品：](http://mp.weixin.qq.com/s?__biz=MzI2MTIzMzY3Mw==&mid=2247487508&idx=1&sn=78cf235aa9ba5f988c6922ca98f8bfd6&chksm=ea5cdd72dd2b54647cf55b4a73dcafa69fc7228205ad39ecc98fe57b39cdecb21c238c6d6cb6&scene=21#wechat_redirect)

![](https://mmbiz.qpic.cn/mmbiz_jpg/wqfIPAmgib2UGvh6iaEtqAVtUWvuuVcLd7gzich6j1sBq2Embc31xVRpm758Iia46Ghtdkv4k4pw7TFYsQAlBFuoqQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

它的代码如下：

```
unsigned char RD(int i,int j){
```

  

这同样是来自 Martin Büttner 的作品：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/9mQQWOf4KRIyQwc44ia8tC4KoQN5Vg0VT8ROoCxYYLF8uzbkeNJ6FnicZ3djgMDlauibymwsDnSOFxocRPyI3hH1A/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

这是目前暂时排名第一的作品，它的代码如下：

```
unsigned char RD(int i,int j){
```

  

下面这张图仍然出自 Martin Büttner 之手：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/9mQQWOf4KRIyQwc44ia8tC4KoQN5Vg0VTBXBsUtbUZHhfLcibR6LY5MEE3kBibOR5ECqONcZlxibNvm7ENKOFH6wMw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

难以想象， Mandelbrot 分形图形居然可以只用这么一点代码画出：

  

```
unsigned char RD(int i,int j){
```

  

Manuel Kasten 也制作了一个 Mandelbrot 集的图片，与刚才不同的是，该图描绘的是 Mandelbrot 集在某处局部放大后的结果：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/9mQQWOf4KRIyQwc44ia8tC4KoQN5Vg0VTQz1DGDeJ2a27r57Loesg6QCKr9tp89FNzJicAg9RyxiajjQRAmcbQm0Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

它的代码如下：

```
unsigned char RD(int i,int j){
```

  

这是 Manuel Kasten 的另一作品：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/9mQQWOf4KRIyQwc44ia8tC4KoQN5Vg0VTDo3ouaXq4Ep8AzmyQHSXpyzVKEWqCrBlowjsjkZQetqicicBxyMkyXgQ/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

生成这张图片的代码很有意思：函数依靠 static 变量来控制绘画的进程，完全没有用到 i 和 j 这两个参数！

```
unsigned char RD(int i,int j){
```

  

这是来自 githubphagocyte 的作品：

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/9mQQWOf4KRIyQwc44ia8tC4KoQN5Vg0VTyvcYLuqEhGBNILnowSazOIHPC9e5Gqh3gqTsWfaZ1cBMykEUxYnV6Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

它的代码如下：

```
unsigned char RD(int i,int j){
```

这是来自 githubphagocyte 的另一个作品：

![](https://mmbiz.qpic.cn/mmbiz_jpg/9mQQWOf4KRIyQwc44ia8tC4KoQN5Vg0VTibXqREj1DmeS6icCgOsoboK2tpcrcuuLYo4BfmUP1UEJjGnw1eM2f15g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

这是一张使用 diffusion-limited aggregation 模型得到的图片，程序运行起来要耗费不少时间。

代码很有意思：巧妙地利用宏定义，打破了函数与函数之间的界限，三段代码的字数限制便能合在一起使用了。

```
unsigned char RD(int i,int j){
```

  

最后这张图来自 Eric Tressler：

![](https://mmbiz.qpic.cn/mmbiz_jpg/wqfIPAmgib2UGvh6iaEtqAVtUWvuuVcLd7hBqTqVeqYh5iaPo77uvtNhG1QZRFnoB6GJbsaibfYT6R7D0AAicfkQRlg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

这是由 logistic 映射得到的 Feigenbaum 分岔图。和刚才一样，对应的代码也巧妙地利用了宏定义来节省字符：

```
unsigned char RD(int i,int j){
```

  

怎么样，短短几行代码，就能画出如此绚烂的图像，你有没有什么脑洞大开的想法，可以复制上面的代码来试一试啊！

_作者：烧茄子_

_原文地址：__www.zhihu.com/question/30262900/answer/48741026_

不看此公众号内容  

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。