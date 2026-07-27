# S域是“连续世界”（模拟电路）， Z域是“快照世界”（数字采样）

原创 Frank 量子电动力学 2026-03-17 07:00 浙江

> 原文地址: [https://mp.weixin.qq.com/s/6-lGIOLW1D6OEFU4qnbOkA](https://mp.weixin.qq.com/s/6-lGIOLW1D6OEFU4qnbOkA)

你要在 DSP（比如 F28x）里写代码处理信号，电脑没法处理连续的微分方程，它只能一帧一帧地处理数据。把连续方程变成数字代码的过程，就是 **s 域到 z 域的映射（离散化）**。

咱们不扯复杂的数学公式，直接用最直观的方式讲透。

* * *

### 一、 核心直觉：什么是 s 和 z？

**S 域（拉普拉斯变换）： 描述的是信号随时间连续变化**

**。 本质上代表了“微分”运算（）。**

**你在电路课里学的电感 、电容  都是在  域**

**。 域（Z 变换）： 描述的是信号一个点、一个点地蹦**

**。 本质上代表了“延迟一个采样周期”。**

**比如你在代码里定义的 last\_error = error，这个 last\_error 就是  倍的 error映射的目标：** 找一个公式，把 s 替换成包含 z 的表达式，这样你就能把复杂的微分方程变成代码里的加减乘除。

* * *

### 二、 最常用的三种“翻译”方法

映射就像翻译，有好几种翻法，咱们看最常用的三种。

#### 1\. 前向欧拉法 (Forward Euler)

这是最简单的翻法。它认为当前的导数（斜率）可以代表这一整个周期的变化。

映射关系：  （ 是采样周期）

直观理解： 微分  (这一次的采样值 - 上一次的采样值) / 时间。

缺点： 极度不稳定。如果采样频率不够高，原本在模拟电路里稳定的系统，写成代码后可能会发散（炸机）。

#### 2\. 后向欧拉法 (Backward Euler)

稍微好一点，它用当前的导数来回溯。

#### 它用当前的导数来回溯。

#### 映射关系： 优点： 稳定性比前向欧拉好很多，不容易发散。  

#### 3\. 双线性变换 (Tustin 变换) —— 工业界最常用

这是最科学、精度最高的翻法，它取了前向和后向的平均值（梯形积分）。

-   ![](https://mmbiz.qpic.cn/mmbiz_png/r4Lxc81mibcFS2NCy8HHQibiavexBhY2eINd5dibqs6rMdbZk0UowtPfMP8yaT28t089L9biat5p2qlxrw2sjYn5GVQRc7eO8tx7rwMI9ONOOVPA/640?wx_fmt=png&from=appmsg)
    
    **优点：** 它能完美地保持系统的稳定性。如果你的模拟电路在 s 域是稳定的，翻译到 z 域也一定是稳定的。
    

* * *

### 三、 映射的几何意义（为什么会“炸”）

这是一个非常关键的物理图像，搞懂了这个，你就明白为什么要看稳定性了：

-   **在 s 域：** 系统的稳定性看“左半平面”。如果系统的极点都在纵轴左边，系统就是稳的。
    
-   **在 z 域：** 系统的稳定性看“单位圆”。如果系统的极点都在半径为 1 的圆圈内部，系统就是稳的。
    

**映射的本质：** 就是把 s 域的那个“左半平面”，揉皱了、塞进 z 域的那个“单位圆”里。

-   如果你用**双线性变换**，它能正好把整个左半平面塞进去。
    
-   如果你用**前向欧拉**，它塞歪了，有些原本稳的点掉到了圆圈外面，这就是为什么代码会跑飞。
    

  

* * *

### 四、 举个例子：把 PI 控制器变成 C 代码

咱们拿你最熟悉的 PI 控制器来练手。

![](https://mmbiz.qpic.cn/mmbiz_png/r4Lxc81mibcGOxrh9UOGgdXJLL1XuSn2uc9iaZicu6kQxX9rzYNcq8GvOTIbLIjzP12jicV1E0Eib3083UUlFeDibefIE0RwTy4Fx5YUJrxZiaVcRY/640?wx_fmt=png&from=appmsg)

1.  **写成 C 代码：**
    
    C
    
    // 每一个采样周期执行一次  
    error = target - feedback;  
    output = last\_output + Kp \* (error - last\_error) + Ki \* T \* error;  
      
    // 保存当前状态给下一次用（这就是 z^-1 的物理实现）  
    last\_output = output;  
    last\_error = error;
    

这就是从数学公式到代码的完整跨越。

* * *

### 学习建议：

1.  **不要去死背复杂的 Z 变换表。** 工业开发中，你只需要记住 **双线性变换（Tustin）** 的公式即可，大部分仿真软件（如 MATLAB/Simulink）都可以一键完成这种转换（`c2d` 命令）。
    
2.  **关注采样频率 f\_s = 1/T。** 无论映射多完美，如果你的采样频率太低（比如信号频率是 1kHz，你采样才 2kHz），映射就会失真（频率混叠）。通常采样频率要达到信号带宽的 10 倍以上。
    
3.  **看书重点：**  
    
    ![](https://mmbiz.qpic.cn/sz_mmbiz_png/r4Lxc81mibcEdnSgJkiccWQ1rSoJhJBcsKMDol01P9Z7m3RB9hCmmv3Hd6jAJ4wQqFXpyGZG1By5p47icOfoicYHeBDDLPI9gLwVddE8nQdFY9M/640?wx_fmt=png&from=appmsg)
    
    ，你就把它脑补成 **“代码里保存的上一个周期的变量”**。