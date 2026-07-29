# 自动地测量电机参数？简单！旋智发布基于LMS算法的电机参数自动识别源程序、算法和软件工具

原创 电机新视界 2022-09-08 10:13 上海

> 原文地址: [https://mp.weixin.qq.com/s/n3OpQ5GqEXLn6gcg0Kv-YA](https://mp.weixin.qq.com/s/n3OpQ5GqEXLn6gcg0Kv-YA)

**点击蓝字**

**关注我们**

![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0tbNsCFC0AHia37KF8iciapax1xHicVnLQN4FKqwxAqCXibgXqQ0e3aqvYQ26pvERgY4JibS8LYZOPWa5pA/640?wx_fmt=png)


来源：天天IC  

  

![](https://mmbiz.qpic.cn/mmbiz_png/FVUttoa5ciaYJ5xftes4JicJlgkQMrzldBRTG10OO3rP3tWlARJRHb59DnbKDZrprtr6eicyJVEWSnhuicicvLHuYxg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  

为了帮助客户更快和更便捷的测量永磁同步电机的参数，从而方便快捷的计算和调试电机FOC矢量控制参数，旋智科技提出了基于LMS算法的永磁同步电机参数辨识方法，并设计了电机辨识工具软件，该软件不需要客户掌握具体的测量方法和流程，实现了“一键式”测量。该软件集成的源程序，可以在静止情况下，对不同型号的电机进行参数识别。

  

集微网·爱集微APP，各大主流应用商店均可下载

  

**为了帮助客户更快和更便捷地测量永磁同步电机的参数，从而方便快捷地计算和调试电机FOC矢量控制参数，旋智科技提出了基于LMS算法的永磁同步电机参数辨识方法，并设计了电机辨识工具软件，该软件不需要客户掌握具体的测量方法和流程，实现了“一键式”测量。**该软件集成的源程序，可以在静止情况下，对不同型号的电机进行参数识别。

  

永磁同步电机（permanent magnet synchronous motor, PMSM）以其结构简单、功率密度高、控制性能好等优点在高性能伺服系统以及其他工业场合中得到大量应用。电机的高性能运行需要获取精确的定子电阻Rs、dq轴电感Ld、Lq以及转子磁链值，提供准确的电机参数，对提高电机的运行效率、动态稳态性能，都有很重要的作用。因此电机参数识别一直都是电机研究的热点。人工测定PMSM电机的参数，测量时需要用到电感表仪器，并进行相应的计算，并且，用仪器测量时，无法模拟电机实际工作状态，电感参数可能测量不准确。**旋智提供的同步电机参数测量算法，可以在电机基本静止的状态下，自动测定电机参数，并且该算法可以集成到电机控制程序中，实现电机驱动器对电机的自动测量，达到使电机驱动器自动适配不同电机的目的**，这对于同一款驱动器用于不同电机的应用非常有帮助，例如，需要更换不同规格电机的风扇、水泵，同一款硬件驱动板对应多种规格电机的家电应用等等。

  

**旋智电机参数识别的特点，在于使用了最小均方算法，简称LMS（Least Mean Square）算法。**该方法是⼀种可通过最小化误差信号（error signal）之均方值（mean square）而修正滤波器系数，以模拟所需理想滤波器的自适应滤波器，其中作为修正依据的误差信号为理想参考讯号与实际输出的信号之差。该种滤波器所用的最小均方法的信号误差值作为准备修正，是⼀种随机梯度下降法（Stochastic Gradient Descent）。如下图所示，随机梯度下降法的目的即找出使得红线相加距离最短的回归线：

  

![](https://mmbiz.qpic.cn/mmbiz_png/FVUttoa5ciaYJ5xftes4JicJlgkQMrzldBBib9gf3SISgGo0iageibrJLZBWSDLRpUt8pG4oKglNbJEwLszHhpatYMg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

最小均方法是由斯坦福大学的Bernard Widrow教授及他的首位博士生学生Marcian Hoff于1960年提出。这是⼀种最陡下降算法的改进算法， 是在维纳滤波理论上运用梯度下降法后的优化延伸，该算法不需要已知输入信号和期望信号的统计特征，“当前时刻”的权系数是通过“上一时刻”权系数再加上一个负均方误差梯度的比例项求得。对于⼀些应用来说，由于事先并不知道所需要进行操作的参数，例如⼀些噪声信号的特性，所以要求使用自适应的系数进行处理。在这种情况下，通常使用自适应滤波器反馈来调整滤波器系数以及频率响应。

  

![](https://mmbiz.qpic.cn/mmbiz_png/FVUttoa5ciaYJ5xftes4JicJlgkQMrzldBaBoHArzFXHSCUY0RmO9ZFScNxpBZZM1z7IsiatPzm3NbfBbqIH8r4Ow/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

图二：LMS自适应滤波器实现框图

  

结合PMSM方程：

  

![](https://mmbiz.qpic.cn/mmbiz_png/FVUttoa5ciaYJ5xftes4JicJlgkQMrzldBa5ZnxQcPhopUV8axcOgRcXJUhGxtwZ39DoYtibVfrw7OkFhEcchWIiaA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

当转速为0时，即可通过_i__d_和_v__d_，_i__q_和_v__q，_求出_L__d_、_L__q_和_R_的数值。

  

同时，旋智的设计还根据Y. Gong等⼈在IEEE上发表的论文”A novel variable tap-length algorithm for linear adaptive filter”，对算法进行进一步的改进。改进的总体思路是利用伪抽头长度通过现有抽头长度N(n)与下一抽头中收敛MSE的差值计算下一步中N(n+1)的长度，即当 N 增加时，收敛的 MSE 不断减小，直到不再减小甚至开始增加。然后根据Horowitz等人在文章“Performance advantage of complex LMS for controlling narrow-band adaptive arrays 中提出的 Pseudo Fractional Variable Tap-length Learning Algorithm:  

  

![](https://mmbiz.qpic.cn/mmbiz_png/FVUttoa5ciaYJ5xftes4JicJlgkQMrzldBjYRwJDmulp1ApfBicOIwTXoma2uKqWFh6018hmhuJ9QmRJGXc2QJBdg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

通过L(n)和L(n+1)之间的变化大小来判断是否更新抽头长度，并最终达到最优解。**该方法的优点是不仅获得了自适应抽头长度，而且将其升级为小数值，这意味着更好地权衡收敛和稳态误差。**

  

![](https://mmbiz.qpic.cn/mmbiz_png/FVUttoa5ciaYJ5xftes4JicJlgkQMrzldBRTG10OO3rP3tWlARJRHb59DnbKDZrprtr6eicyJVEWSnhuicicvLHuYxg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

图三：永磁电机离线数据采集

  

如图所示，在将电脑和旋智电机控制demo板和所测电机连接后，按下“start”，电机控制板将发出特定激励信号，测量信号结果传入电脑后，旋智电机测量软件计算，即可获得所测参数数值。

  

旋智电机测量软件集成的算法，也可以源程序的形式提供给客户，方便客户集成到自己的嵌入式电机控制工程中，实现对电机参数的自动测量，自动电机参数测量软件界面如下图所示，该APP内嵌的算法源文件，旋智也可以C语言程序的形式提供客户电机控制软件工程集成。

  

![](https://mmbiz.qpic.cn/mmbiz_png/FVUttoa5ciaYJ5xftes4JicJlgkQMrzldBnbEOgtsymUPkRxR2Fic0p5pBiceOF2e67zt7642F7GJUy38COymCqUfQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

在本实例中，低压电机测量结果如下所示：（参考数值为LCR数字电桥所测值）

  

![](https://mmbiz.qpic.cn/mmbiz_png/FVUttoa5ciaYJ5xftes4JicJlgkQMrzldBiajoH6pJ2I0TqWic3tp4ETABVbDCNvhiaYCDokLNachVc6PyFWAvZib4LA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_gif/vibkgHlPVq0stfSStzzDcbfsJbicnUlRKX8lZ5xOob5gHhNBgt33cniaxicjRhcoqUnDBgFoowtwgmpeiad3q5dddjw/640?wx_fmt=gif)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0s0OaHsxVicqRwsd1jffsZ1SInziao432K25CLbwomI8aoRfBsD0ibko7MJkWIcoEm08ia03Vpey2IyxQ/640?wx_fmt=png)

[![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0sGmXk8Cm0QNxGDTWzSMHRqdFkxlYib69DQy8MMHGCnZJicR76IgShmuhcbPeHKXGQUU33LKN7ibz7iaw/640?wx_fmt=png)](https://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247525821&idx=1&sn=3113091b400a6dbbdaeb4a408d475eba&chksm=cede2479f9a9ad6fa0d04b5f33407354cc6670c75781173cde92b5e552cd29d99cbb13031c6e&token=1102902197&lang=zh_CN&scene=21#wechat_redirect)

  

