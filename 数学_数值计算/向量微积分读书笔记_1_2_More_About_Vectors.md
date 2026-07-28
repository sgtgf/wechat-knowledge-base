# 向量微积分读书笔记：1.2 More About Vectors


> 原文地址: [https://mp.weixin.qq.com/s/X3xze-z8LOKmDFsK6P2ChQ](https://mp.weixin.qq.com/s/X3xze-z8LOKmDFsK6P2ChQ)

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocsqckBzOS8xMn9A2YXdNnslTOD4To00r71X2VsphULSod1ZlnIRPVRw7p6gibqd6wzh8YZ7a7rkUuOd9qzyYyXzuBmbnwxmFK50/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctkg6g31u4Gtv5UU6QqN3VHFjYQnHcJ5zfYdM09lqYzQ5vaXByUP4U6icdEg7d3Ay83ibic75NNfPT2qLuFs9lz9WrpDp3wWszeLo/640?wx_fmt=png&from=appmsg)

我把这部分内容用“先讲概念，再讲 Example，再讲 Figure 在帮你看什么”的方式讲一遍。本节核心主题有两个：**标准基向量** 和 **参数方程**；后半部分再把参数方程用到直线、交点，以及更复杂的曲线上。

## 1\. 标准基向量：把一个向量拆成“沿坐标轴走了多少”

一开始，书里先讲和里的**标准基向量**。  
在二维里，，；  
在三维里，再加上。

意思很简单：任何向量都可以拆成“沿 x 轴的一段”加上“沿 y 轴的一段”，三维时再加上“沿 z 轴的一段”。  
所以：

这其实就是把“坐标写法”和“向量写法”联系起来。前者更像“点的坐标”，后者更强调“方向和长度”。

### Example 1

书里举的例子是：

这一步没有新计算技巧，重点是让你适应两种写法互相切换。

### Figure 1.18 和 Figure 1.19

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvwNl3f254J6yia1QGDpU5UAthL6p24cuiarCrG6mia4koC01IE8n3iafd3oqSn3zZW57ibqHWapVrNVXQzMf8dGbX7oTcDuoJBoKww/640?wx_fmt=png&from=appmsg)

这两张图非常重要，因为它们把“拆分向量”画出来了。

-   **Figure 1.18** 表示二维向量可以拆成和。
    
-   **Figure 1.19** 表示三维向量可以拆成、、。
    

你可以把它理解成：**一个总位移 = 各个坐标方向上的位移相加**。这就是后面做参数方程的基础。

## 2\. 为什么在空间里写直线，要改用参数方程

接下来书里提醒你：在二维平面里，像或这种式子表示的是**直线**。  
但到了三维空间，如果你只写一个线性方程，比如，它不再是直线，而是一个**平面**。

### Figure 1.20 和 Figure 1.21

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocuiaHyrgu7gFNtBPUvkD1YsPkM0QkMNeVkyDic0KGhGMic9TNP0WMGibZypewNLntLkJgbYverFg29ZjHpXUu5wHDUd69xdBDMLJUE/640?wx_fmt=png&from=appmsg)

-   **Figure 1.20**：在二维中，是一条水平线。
    
-   **Figure 1.21**：在三维中，变成了一整张平面。
    

这张对比图想告诉你：**空间里的直线，光靠一个方程拴不住，信息不够。**  
所以书里转向一种更自然的方法：用**参数方程**来描述。

## 3\. 参数方程：让点“随着时间动起来”

书里先从曲线讲起。  
二维曲线可以写成：

三维曲线可以写成：

这里的叫**参数**。最直观的理解就是：把看成时间，点的位置会随着时间变化。

### Example 2：圆的参数方程

书里给出：

因为

所以这表示半径为 2 的圆。

这个例子的关键不是“验证圆”，而是理解：  
**同一条曲线，可以不是直接写成，而是写成一个运动过程。**  
随着增大，点会沿圆周转一圈。

### Figure 1.22

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctFKVicN3H9tZiaam6ic3XIMwvRRZIYBiaRokw4icd5BUoOqQAAiaDicMcFpy5raibZaUiaX6qPWiaRS5zROHJviahYNWnzzt0foXrDbexskk/640?wx_fmt=png&from=appmsg)

这张图把圆上的几个关键时刻标出来：

-   时在最右边
    
-   时在最上边
    
-   时在最左边
    
-   时在最下边
    

图上的箭头说明了**参数增加时，点是按什么方向走的**。这就是参数方程最大的优点之一：它不仅告诉你“图形长什么样”，还告诉你“怎么走”。

## 4\. 直线的参数方程：一个点 + 一个方向

这是这一节最核心的知识点。  
书里说，一条直线由两样东西唯一确定：

1.  直线上的一个已知点
    
2.  一个和直线平行的方向向量
    

如果已知点的位置向量是，方向向量是，那么直线可以写成：

这就是书里的 **Proposition 2.1**。

它的直觉非常简单：

-   从已知点出发
    
-   沿着方向向量走倍  
    \-取遍所有实数，就扫出整条直线
    

把它拆成坐标，就是：

### Figure 1.23 和 Figure 1.24

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocuAFPib9EWPHicMAzy5NWRoqnDRicIGVNLRpqCvggQ9e4ABebDJrV34eEkmU0dkAcYMP9NmNzaY4O4dWyZrTU6I6Micm860QL3Jqm4/640?wx_fmt=png&from=appmsg)

-   **Figure 1.23**：强调“过点，并且方向和平行”的那条唯一直线。
    
-   **Figure 1.24**：把位置向量关系画成
    

这两张图其实就是把抽象公式翻译成几何语言：  
**点的位置 = 起点位置 + 沿方向向量走出来的位移。**

## 5\. Example 3：已知一点和方向，求直线方程

题目给的是：过点，并且平行于向量

于是

代入公式：

得到参数方程：

这个例子本质上是在练一个模板：  
**“点 + 方向” → 直接套**。  
其中时，点正好是给定点；变化时，点就在直线上滑动。

## 6\. Example 4：已知两个点，求直线方程

如果给你的是两个点和，怎么办？  
方法是先求方向向量：

然后再把它当成。于是可以写成：

书里还说明：你也可以选另一个点当起点，或者把方向向量反过来，最后会得到**不同形式但表示同一条直线**的参数方程。  
这点非常重要：**参数方程通常不是唯一的。**

### Figure 1.25

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocsINS8x2kXlx8YnodCDVHc2uic9lxPic4ycuoge8Yc4ts74HoGpW3ZywnXCvTMsIRBh7Ikiaa1BkBPeOljsjJ7ejCiaF8hh7tcoFVU/640?wx_fmt=png&from=appmsg)

这张图的作用就是帮助你看到：  
从一个点指向另一个点的向量，本身就天然是这条直线的方向向量。  
也就是说，**“两点式”其实会自动变成“点 + 方向”式。**

## 7\. 对称式：把参数消掉，换一种写法

书里接着把参数消去，得到直线的**对称式**：

这只是同一条直线的另一种表示方式。

它的意义有两个：  
第一，能帮你检查自己写的参数方程是不是同一条线；  
第二，它提醒你：在三维中，一条线通常要靠**两个标量方程**共同描述，而一个向量方程就能把它们统一起来。

## 8\. Example 5：直线与平面的交点

书里用参数方程做第一个“应用题”：求直线

与平面

的交点。

方法特别统一：  
把直线上的点代进平面方程。也就是把

代进去，得到一个只含的方程。书里解出：

再代回直线参数方程，得到交点：

这一题的套路可以记成一句话：  
**“先在线上走，再看走到哪一步刚好落到平面里。”**

## 9\. Example 6：两条直线是否相交

接下来书里讨论两条直线相交的问题。  
思路是：两条线如果相交，就必须存在某个和某个，让它们分别走到同一个点。于是把两条线的坐标分别相等，得到一个方程组。

书里最后算出：

于是交点是：

这一题的本质是：  
**两条线各自有自己的“时间表”，相交就是要找到两个时刻，让它们同时到达同一个位置。**

## 10\. 参数方程不只描述直线，还能描述更复杂的曲线

最后一部分，书里开始展示参数方程更强的威力：  
只要你能把一个点的位置拆成几个容易理解的向量相加，就能写出很多复杂曲线。

### Example 7：摆线 cycloid

题目背景是：一个半径为的轮子在地面上**无滑动滚动**，轮缘上的一个点会画出一条曲线，叫 **cycloid（摆线）**。书里最后得到：

这个结果很好理解：

-   圆心整体向前走了距离
    
-   轮缘上的点相对圆心还要做圆周运动
    
-   所以最终位置 = 圆心平移 + 点相对圆心的转动位移
    

### Figure 1.26、1.27、1.28

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocsR11aOviaKhYw8XtBLOwYlT61tPOuNU4qKQXRRB3w49E0Vko2KC1icDzQ5M4VM7RKlGa8BF4XxqSwSVDtRaibC13mR2LMMBC2sg8/640?wx_fmt=png&from=appmsg)

这三张图是在一步一步拆这个运动：

-   **Figure 1.26**：先让你看最终曲线长什么样
    
-   **Figure 1.27**：轮子转过角后，圆心和轮缘点的位置关系
    
-   **Figure 1.28**：把向量平移到原点，方便分解成三角函数形式
    

这组图想传达的思想是：  
**复杂曲线不是“猜”出来的，而是用向量分解“拼”出来的。**

### Example 8：圆的渐开线 involute

最后一个例子更有意思：从一个不转动的圆形胶带卷上把胶带拉开，胶带末端会画出 **involute（渐开线）**。书里取参数作为圆上切点的位置角，最后得到：

这题的核心思路是：

也就是：  
**末端点的位置 = 圆上切点的位置 + 被拉出的那段切线方向的长度。**  
这里表示已经拉开的胶带长度。

### Figure 1.29、1.30、1.31

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocs6lcgUZzSq1EM2WltAv2T3JalVdmEfEILEzs9viayWWFDcB2iaQ8Cian0JxfuSoBRGPJd0AsYmqPeP4KYE6UX9mqyica6D6xfcNWs/640?wx_fmt=png&from=appmsg)

-   **Figure 1.29**：整个物理情景——胶带从圆上被拉开
    
-   **Figure 1.30**：把拿出来单独看，确定它的长度和方向
    
-   **Figure 1.31**：最终的渐开线图形
    

这几张图的意义是帮助你看懂：  
**切点在圆上转，末端沿切线拉开，于是两种运动叠加，形成渐开线。**

## 本节总结

本节其实是在建立一个很重要的统一观点：

1.  **向量可以表示位置，也可以表示方向。**
    
2.  **参数方程可以把“图形”变成“运动过程”。**
    
3.  **一条直线最自然的描述方式，是“一个点 + 一个方向向量”。**
    
4.  **更复杂的曲线，也能靠向量分解和参数来构造。**
    

所以这部分内容表面上是在讲“参数方程”，本质上是在训练你用**向量视角**看几何。