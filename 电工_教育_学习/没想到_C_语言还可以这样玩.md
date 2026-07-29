# 没想到 C 语言还可以这样玩

原创 硬件笔记本 2024-05-08 07:36 四川

> 原文地址: [https://mp.weixin.qq.com/s/g7l\_\_fmb5qjF\_dWGoTUVQA](https://mp.weixin.qq.com/s/g7l__fmb5qjF_dWGoTUVQA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

有人说程序员就是艺术家，那下面我们看看用c语言能画出什么作品吧。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_002_cd5273ffc0eb.jpg)

  

我们知道，在计算机中要显示颜色，一般都是用R、G、B三个0-255范围内的整数来描述。

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_003_0e7190a66aff.jpg)

  

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

![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_004_8543321f702c.jpg)

  

它的代码如下：

```
unsigned char RD(int i,int j){
```

  

这同样是来自 Martin Büttner 的作品：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_005_e69a96685529.jpg)

  

这是目前暂时排名第一的作品，它的代码如下：

```
unsigned char RD(int i,int j){
```

  

下面这张图仍然出自 Martin Büttner 之手：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_006_73ae45b709bc.jpg)

  

难以想象， Mandelbrot 分形图形居然可以只用这么一点代码画出：

  

```
unsigned char RD(int i,int j){
```

  

Manuel Kasten 也制作了一个 Mandelbrot 集的图片，与刚才不同的是，该图描绘的是 Mandelbrot 集在某处局部放大后的结果：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_007_144472b2f7d1.jpg)

  

它的代码如下：

```
unsigned char RD(int i,int j){
```

  

这是 Manuel Kasten 的另一作品：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_008_d154a5ef18ca.jpg)

  

生成这张图片的代码很有意思：函数依靠 static 变量来控制绘画的进程，完全没有用到 i 和 j 这两个参数！

```
unsigned char RD(int i,int j){
```

  

这是来自 githubphagocyte 的作品：

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_009_811b28672d01.jpg)

  

它的代码如下：

```
unsigned char RD(int i,int j){
```

这是来自 githubphagocyte 的另一个作品：

![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_010_df13b9b1f3f6.jpg)

  

这是一张使用 diffusion-limited aggregation 模型得到的图片，程序运行起来要耗费不少时间。

代码很有意思：巧妙地利用宏定义，打破了函数与函数之间的界限，三段代码的字数限制便能合在一起使用了。

```
unsigned char RD(int i,int j){
```

  

最后这张图来自 Eric Tressler：

![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_011_f622c1ced47a.jpg)

  

这是由 logistic 映射得到的 Feigenbaum 分岔图。和刚才一样，对应的代码也巧妙地利用了宏定义来节省字符：

```
unsigned char RD(int i,int j){
```

  

怎么样，短短几行代码，就能画出如此绚烂的图像，你有没有什么脑洞大开的想法，可以复制上面的代码来试一试啊！

_作者：烧茄子_

_原文地址：__www.zhihu.com/question/30262900/answer/48741026_

不看此公众号内容  

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_012_27e4e85ce630.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_013_26e7c42e5929.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_014_86e7b1720ef8.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_015_607a9b5809f6.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_016_c337f32f2ad2.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_017_845d28096f90.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_018_2e2b5ebc409a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_019_16e467ebcf07.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_020_ebed19ebd456.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_021_de9b387fc9a9.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_022_fb5805018722.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_023_25764f7ff52f.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_024_f992681cd3b5.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_025_d13d18656a84.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_026_fbbfff43554c.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\没想到_C_语言还可以这样玩_images\img_027_05704500a9db.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。