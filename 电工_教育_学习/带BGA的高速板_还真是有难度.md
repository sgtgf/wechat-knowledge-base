# 带BGA的高速板，还真是有难度

原创 硬件笔记本 2024-09-20 07:43 四川

> 原文地址: [https://mp.weixin.qq.com/s/h6i9LfkGaTyCC1S-HL9DDA](https://mp.weixin.qq.com/s/h6i9LfkGaTyCC1S-HL9DDA)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

今天给大家分享一下什么是BGA？BGA PCB设计及布线方法。

## **一、什么是BGA扇出？**

在 PCB 布局设计中，特别是BGA（球栅阵列），PCB扇出、焊盘和过孔尤为重要。**扇出**是**从器件焊盘到相邻过孔的****走线**，如图下图所示。

过孔是 PCB 中各层之间的电气连接，用于连接输入和输出、电源和接地轨道。

![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_002_f9cea0cda7f2.png)

BGA扇出

  

通常，每个焊盘有一个过孔。PCB 焊盘是设备焊球放置并焊接到的地方。**使用细间距 BGA 进行 PCB 设计的重要和困难方面之一是 BGA 焊盘和扇出的布局。关注公众号：硬件笔记本**

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_003_b23b90c78edc.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

BGA焊盘

  

## **二、BGA焊盘和封装**

**BGA 封装通常围绕插入器构建**：一个小型印刷电路板，用作实际芯片和安装它的电路板之间的接口。芯片通过引线键合到中介层并覆盖有保护性环氧树脂。

内插器将信号从芯片边缘路由到底部的焊盘阵列，焊盘上附着小焊球。然后将完成的 BGA 封装放在印刷电路板上并加热，焊球熔化并在电路板和内插器之间建立连接。

下面为：**典型BGA 封装的内部结构**

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_004_1b6eab7e096d.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

典型 BGA 封装的内部结构（侧视图）

不同的 BGA 类型：经典 BGA（272 引脚，1.27 毫米间距）、芯片级封装（49 引脚，0.65 毫米间距）和晶圆级芯片级封装（20 引脚，0.4 毫米间距）。

不同 BGA 类型封装的营销名称种类繁多，基本上没有标准化。

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_005_2062c35d2521.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

BGA封装

  

这里举一个例子：CP161 绘制正确的占位面积的。可以在datasheet上找到，有推荐的焊盘图案，指定**NSMD型焊盘的焊盘直径为0.15 毫米。关注公众号：硬件笔记本**

![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_006_309f60267477.png)

NCP161 的 PCB 封装，如数据表中所建议

  

**NSMD** 指的是**未被阻焊层部分覆盖的焊盘**。另一种选择是阻焊层定义的焊盘，其中阻焊层确实覆盖了部分焊盘。虽然这两种类型都有其应用，

但**制造商的 BGA 芯片数据表中通常推荐使用 NSMD 类型**，因为它可以提供**更稳固的焊接连接**，焊球可以抓住焊盘的侧面和顶部。

下面为：**阻焊层定义（左）和非阻焊层定义的 BGA 焊盘（右）的区别**

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_007_4ee7f3dd5db4.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

阻焊层定义（左）和非阻焊层定义的 BGA 焊盘（右）的区别

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_008_e22be02e7b00.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

带有阻焊层定义焊盘（左）和非阻焊层定义焊盘（右）的四引脚 BGA 封装

## 

## **三、BGA PCB设计**

**对于 NSMD 版本，阻焊层开口应略大于铜焊盘**；在这种情况下，我们在 0.15 毫米焊盘上使用了 0.25 毫米开口，这意味着阻焊层开口在焊盘两侧仅延伸 0.05 毫米。这个时候应该与PCB制造商核实阻焊层对准是否能按照这个标准执行。

典型值为 2 密耳（0.05 毫米），这意味着在最坏的情况下，阻焊层将刚好接触到焊盘的边缘，如果制造商无法提供更精确的对准，可能需要稍微扩大焊盘开口。但**焊盘之间剩余的阻焊仍应满足最小焊层条规则。关注公众号：硬件笔记本**

**BGA焊盘编号不是按顺序编号，而是按行-列格式编号**，行从上到下依次标记为 A、B、C 等，而列从左到右编号。左上角的引脚 A1 通常由芯片顶部的一些标记指示，可以正确定位部件。

当你组装PCB时，特别是手动组装，就是在丝印层上标明封装轮廓。由于在放置芯片时看不到焊球和焊盘，因此丝印是判断芯片是否正确放置的唯一方法，记得要画一些指示器来指出哪个引脚是A1。

下面为：四引脚 BGA 封装的完整 PCB 封装。

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_009_6f31362db7ed.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

四引脚 BGA 封装的完整 PCB 封装

**只需四个焊盘，就可以轻松地将稳压器芯片连接到电路的其余部分。**虽然为输入、输出和接地连接绘制几个大电源层并将它们与焊盘重叠可能看起来很好，但通常最好先在每个焊盘上绘制一条细迹线，然后将该迹线连接到任何更大的结构。

其原因是可焊性，当焊球熔化时，就可能会黏附到铜上，也就是说焊盘与之相连接的走线。因此，芯片在焊接过程中会在走线方向受到轻微拉力。使连接径向对称应该抵消每个焊球施加的力并确保更可预测的焊接过程。关注公众号：硬件笔记本

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_010_6b0c610f008c.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

DO 的完整布局，以及周围的组件

**VCC 和 GND 都下降到内层的电源层**。请注意，即使与 0603 大小的电容相比，该芯片也非常小。

  

## **四、BGA间距及其对扇出的影响**

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_011_20b1664eb2a7.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

BGA间距

**BGA间距**：定义为**从中心到中心测量的两个相邻焊球之间的距离**。随着引脚数量的增加，元件的间距会减小。这种间距的减小使扇出变得复杂。因此，应该添加更多的内部层来布线引脚，这反过来又会增加PCB 制造的成本。

由于这些原因，决定所需的层数是一个比较困难的工作。有一个经验公式可以用来决定层数：

**层数=BGA芯片信号总数/(4面x每面BGA走线信号)**

下面为：**通过BGA引脚布线图**

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_012_dd1a04d036e1.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

通过BGA引脚布线

  

## **五、BGA布线：狗骨式布局**

当我们**放置带有 7×7 焊接网格的微控制器**时，就更加困难了。将走线布线到所有 49 个焊盘并不是那么简单，先从最简单的部分开始：**外部引脚**，可以使用水平和垂直走线简单地将它们向外布线。关注公众号：硬件笔记本

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_013_cd030c758bd8.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

BGA布线：狗骨式布局

第二层引脚可以通过外焊盘之间的轨道进行布线。遵守PCB 设计规则：

最小走线宽度和间隙不应超过 c = (pd)/3，其中 p 是焊盘间距，d 是焊盘直径。

对于此示例，间距为 0.65 毫米，直径为 0.35 毫米，最小间隙和轨道宽度降至 0.1 毫米，比较紧凑，有一些制造商是这样的。

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_014_878556558f59.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

BGA布线：狗骨式布局

**第三层向内**，通过过孔来输出信号。最常见的做法是在每四个焊盘的中间放置一个过孔，并从其中一个焊盘向其布线对角线迹线。

这里要**确保有足够的空间来放置过孔**。如果焊盘间距为p，那么两个焊盘中心点之间的对角线距离为p√2。焊盘内边缘之间的距离为 p√2 – d，其中 d 是焊盘直径。关注公众号：硬件笔记本

![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_015_e55a60a6ca5a.png)

焊盘间距

对于 ATmega164，p = 0.65 mm 和 d = 0.35 mm，这意味着焊盘之间有 0.57 mm 的空间。**我们需要在焊盘和通孔之间留出至少 0.1 毫米的间隙，通过将通孔稍微靠近它所连接的焊盘来获得一点空隙。**

放置过孔后，我们最终得到如下所示的布局。这是**dog-bone 布局样式**有点像卡通骨头。在这个简单的例子中，我们只有九个狗骨和足够的空间来路由底层的信号。如果我们有一个 8×8 的球包，那么我们就会有 16 个狗骨头，底层会和顶层一样拥挤。

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_016_aecb3520f2af.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

BGA布线：狗骨式布局

**狗骨布局样式可以扩展到任何 BGA 尺寸。但随着焊盘数量的增加，路由所有信号所需的层数也会增加。**7×7 或 8×8 BGA 只需两个信号层即可布线，但 9×9 或 10×10 芯片至少需要三个。一般来说，每增加两排焊盘就需要一个新的布线层。实际上，许多信号将是电源和接地引脚，可以直接连接到内部电源层，不需要进一步布线。可能还有未使用的引脚，这提供了更多的布线空间。关注公众号：硬件笔记本

重要的是要**确保 BGA 芯片下的所有过孔都被****遮盖****或覆盖在阻焊层中**。如果不是，那么熔化的焊球可能会流到通孔和预期的焊盘上，导致未对准和短路。这里必须要与制造沟通，是否支持帐篷过孔。

  

## **六、BGA布线：盘中孔布局**

BGA 布线的另一种布局方式是**盘中孔**。这通常用于无法在四个焊盘之间安装过孔的极细间距 BGA。

基本思路很简单：**在每个内部焊盘内部放置一个过孔，并将信号从下层向外布线**。

这里的问题是不能简单地将普通过孔放置在BGA焊盘中，因为融化的焊料会通过毛细管作用被吸入过孔内，导致连接不可靠。因此**需要填充通孔并在顶部涂上金属覆盖物，确保平坦、可焊接的表面。**官方术语是 IPC-4761 类型 VII，填充和封盖孔。

**通孔需要足够小以适合 BGA 焊盘内部，并且通常最终会成为微孔**，用激光钻孔。还可以通过使用盲孔来简化布线，盲孔不会一直穿过电路板，而是你想让它停留在哪就停留在哪一层。关注公众号：硬件笔记本

不过盲孔一般比较贵，如果你的设计使用最小的VII 型微孔和最紧密的间隙。

下面是一个示例布局，显示了**应用于 TDC7201 的焊盘内通孔技术**，虽然我们通常不需要在这样一个简单的 25 引脚设备上使用这个技术，不过这只是一个案例。

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_017_3ca8a74a257b.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

应用于 TDC7201 的焊盘内通孔技术

  

## **七、案例介绍：BGA布线中的焊盘中的过孔**

### **1、BGA布线中盘中孔**

![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_018_df2e6a49be82.png)

盘中孔

盘中孔有助于布线细间距 BCA 组件，在组件铜平台中放置过孔称为焊盘中过孔。这种技术提供了更多空间来布线而不会出现设计规则检查(DRC)错误在 BGA 扇出中，过孔以一定角度放置在焊盘中以最大化空间。大多数情况下使用偏移焊盘。关注公众号：硬件笔记本

### 

### **2、BGA布线使用偏置焊盘**

下面是放置在焊盘边界附近的盘中孔。

![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_019_b260781a9989.png)

BGA布线使用偏置焊盘

### 

### **3、位于中心的焊盘**

[![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_020_3cd3f8684c64.png)](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247553249&idx=1&sn=cb285ca0b6e3b92bff564b64a1fec60b&chksm=c30ace33f47d4725c81bd6a92019324e94e2d7b66d4f20d2dfb425fd49332f3652ac4e17b1c8&scene=21#wechat_redirect)

位于中心的焊盘

与焊盘中心的微孔相比，使用偏移孔增加了可用于布线的空间，如上图所示引脚之间的路由走线可以不同方式通过紧密间隔的引脚进行布线。

![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_021_8f8c22b4fa63.jpg)![](D:\电脑文件\公众号知识库\电工_教育_学习\带BGA的高速板_还真是有难度_images\img_022_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：文章整理于网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。