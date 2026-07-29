# LQR数学推导


> 原文地址: [https://mp.weixin.qq.com/s/fi4XNT9MWc2ZIzLLJ8kU2w](https://mp.weixin.qq.com/s/fi4XNT9MWc2ZIzLLJ8kU2w)

关于LQR的推导，之前写过一篇，[LQR系列05---原理推导及实例验证(史上最详细，了解LQR这篇就够了)](https://mp.weixin.qq.com/s?__biz=MzUyNjY0NTkxMQ==&mid=2247484624&idx=1&sn=52e5df553ae3034d67bf75a3d3123839&scene=21#wechat_redirect)，这里有些小错误，整个逻辑也不太清晰，现重新梳理了下。

假设离散形式的状态转移方程如下：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\LQR数学推导_images\img_000_8453bb0cc225.png)

需要基于LQR的代价函数最小原则，以及全状态反馈，自动配置闭环极点，即

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\LQR数学推导_images\img_001_623042408c99.png)

下面着重讨论怎样基于指定的输入权重与状态权重，得到反馈矩阵K(下面的推导用F表示，feedback的简写)。

基于状态转移方程可知：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\LQR数学推导_images\img_002_c16a8779845b.png)

要保证第0步→第N步的代价最优，可采用逆向分级的思路：

-   step1：保证第N-1步→第N步最优；
    
-   step2：保证第N-2步→第N步最优，它又分为第N-2步→第N-1步、第N-1步→第N两个阶段，基于贝尔曼最优策略，要保证第N-2步→第N步最优，则其中包含的第N-1步→第N步必定最优；
    
    ...
    
-   stepN-1：保证第1步→第N步最优，它又分为第1步→第2步、第2步→第N两个阶段，其中包含的第2步→第N步必定最优；
    
-   stepN：保证第0步→第N步最优，它又分为第0步→第1步、第1步→第N两个阶段，其中包含的第1步→第N步必定最优；
    
      
    

假设第j步→第N步的代价函数为

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\LQR数学推导_images\img_003_577bbc161fe1.png)

S为末态权重矩阵，Q为暂态权重矩阵，R为输入权重矩阵。

  

当j = N时，即最后时刻，此时木已成舟，改变不了什么，现有的就是最好的，即 

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\LQR数学推导_images\img_004_6d277e603b16.png)

  

当j = N-1时，

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\LQR数学推导_images\img_005_43d0fcb6a3a5.png)

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\LQR数学推导_images\img_006_65e36fe34ade.png)

  

当j = N-2时，

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\LQR数学推导_images\img_007_01b6c056436a.png)

  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\LQR数学推导_images\img_008_40a8c551813b.png)

  

...

  

流程如下，

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\LQR数学推导_images\img_009_aa3be92510f5.png)

其中，

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\LQR数学推导_images\img_010_6b09446a3b0f.png)