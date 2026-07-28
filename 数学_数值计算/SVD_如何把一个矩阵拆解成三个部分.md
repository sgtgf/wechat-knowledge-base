# SVD：如何把一个矩阵拆解成三个部分


> 原文地址: [https://mp.weixin.qq.com/s/2q66NXsfhEJ3Btxlb3QEvA](https://mp.weixin.qq.com/s/2q66NXsfhEJ3Btxlb3QEvA)

![](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceAP4W8g4QGwJt75x180RO4PwkG9z1TdBr1AIhibuye6sicAzHbYZJ4Sew/640?wx_fmt=png&from=appmsg)

  
  

      假设“M矩阵”指的是一个任意矩阵，奇异值分解（SVD）就是一种方法，能把这个矩阵“拆解”成三个更简单的矩阵：U、Σ（读作Sigma）和V^T。通俗地说，这就像把一张复杂照片拆成“框架”（U）、“重要程度列表”（Σ）和“图案模板”（V^T）。最终，你可以用这三个部分重新拼回原矩阵，但过程中能看到哪些部分是最关键的，能帮你压缩数据或找出隐藏模式。

为什么叫“拆解”？因为SVD不是随意切分，而是基于数学原理，让分解后的部分捕捉矩阵的“本质”。它适用于任何形状的矩阵（不一定是方形的），超级实用。比如，在图像处理中，它能帮你去除噪音；在推荐系统中，能找出用户偏好。

下面我用一个 **具体的数值例子**，把图里的

![$M = U S V^{H}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceLRuhbLR4AaDNyCtS7N1uy3ewfc4bhWibX1sRibAOSkL81Dxt1onCT7icg/640?wx_fmt=png&from=appmsg)

完整拆出来（这里是实数矩阵，所以 ![$V^{H}=V^{T}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice6gib7wlBxTia5OAbryO1M3JUXHRNCyfkmqc3af4sm5VSNvfVsdSycqjQ/640?wx_fmt=png&from=appmsg)）。

# 例子：M 是 3×2

取矩阵：

![$\begin{array}{c} M= \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} \qquad (m=3,\ n=2) \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice7hCUMr59DXU0kzF7IypIACkoKhXPA9BsK0ZjM4u4BD1GZIntjic6BPg/640?wx_fmt=png&from=appmsg)

SVD 要把它拆成：

![$\boxed{M = U\,S\,V^{H}}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice8Pc7ia1NRb4Edeq5W9MXBXQQvL7HxzwLwwrSibtwNTVuW6G4AdaGQE4A/640?wx_fmt=png&from=appmsg)

其中尺寸对应为：

-   ![$U\in \mathbb{R}^{3\times 3}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice9QkMwynZTlk82flTrxkKxWDWv5IOIP9zHe3o41wN5oXSe82dGic08oQ/640?wx_fmt=png&from=appmsg)
    
-   ![$S\in \mathbb{R}^{3\times 2}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceE1jIYOBEFGibxDM9rAhEOK9zwFW4K7Xrn2HrLq8vGhO8oVdr3Qbw0DQ/640?wx_fmt=png&from=appmsg)
    
-   ![$V\in \mathbb{R}^{2\times 2}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceCx0OEDlFZ1rcEzXCc5HBtgMWZwiagKeMPS5RksVYXt1Iw6BVickuVgCg/640?wx_fmt=png&from=appmsg)，且 ![$V^{H}=V^{T}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice6gib7wlBxTia5OAbryO1M3JUXHRNCyfkmqc3af4sm5VSNvfVsdSycqjQ/640?wx_fmt=png&from=appmsg) 
    

* * *

# 计算结果（数值版 SVD）

# 1) 奇异值矩阵 S

该矩阵的两个奇异值为：

![$\sigma_1 \approx 4.2755,\qquad \sigma_2 \approx 1.9287$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicej85Eh86M66JbPFlUOKndHSRlPxcpmhziaKiaE6g4icVDfJ6fK3O84f5yw/640?wx_fmt=png&from=appmsg)

所以：

![$\begin{array}{c} S= \begin{bmatrix} 4.2755 & 0\\ 0 & 1.9287\\ 0 & 0 \end{bmatrix} \qquad (3\times 2) \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceA5wenSnTibdtrd5liaFTLoDjGbtWIZk34jbUdVSSTGb5c0zEjjKDFiblw/640?wx_fmt=png&from=appmsg)

* * *

##   

## 2) 右奇异向量矩阵 V 与 ![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceskoFH1kDNtNGVh8icT0bUz4r7fqLFgbdXzrCeYYS8Pwms1GEFxic5UPw/640?wx_fmt=png&from=appmsg) 

![$\begin{array}{c} V= \begin{bmatrix} -0.7983 & -0.6022\\ \ \ 0.6022 & -0.7983 \end{bmatrix} \qquad (2\times 2) \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceyROfuuU1JhFrPVJTstbtqk7I8fMLJhxayJfqFXHPxjrVPkNPATp1Pg/640?wx_fmt=png&from=appmsg)

因此

![$\begin{array}{c} V^{H}=V^T= \begin{bmatrix} -0.7983 & \ \ 0.6022\\ -0.6022 & -0.7983 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceEhRUeY3GjbjxRznSBlDfLoqicr9YnQUaOzvcFaCeUyNH8adAzYboO0w/640?wx_fmt=png&from=appmsg)

* * *

##   

## 3) 左奇异向量矩阵 U

![$\begin{array}{c} U= \begin{bmatrix} -0.7010 & \ \ 0.5228 & -0.4851\\ -0.2817 & -0.8279 & -0.4851\\ -0.6551 & -0.2034 & \ \ 0.7276 \end{bmatrix} \qquad (3\times 3) \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceCicPnwPOocuIawgwfIjYLCha9ZRSBGVQldDERLfOIN8K9nXduo2aHUQ/640?wx_fmt=png&from=appmsg)

* * *

# 最终：完整的 LaTeX 拆解表达式

![$\begin{array}{c} { \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} = \begin{bmatrix} -0.7010 & 0.5228 & -0.4851\\ -0.2817 & -0.8279 & -0.4851\\ -0.6551 & -0.2034 & 0.7276 \end{bmatrix} \begin{bmatrix} 4.2755 & 0\\ 0 & 1.9287\\ 0 & 0 \end{bmatrix} \begin{bmatrix} -0.7983 & 0.6022\\ -0.6022 & -0.7983 \end{bmatrix} } \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceibwJSdI8jMlcPxZ2icjdw8OxtoumaYfg7YbL7CUj0ac92DBTmUj5IGaQ/640?wx_fmt=png&from=appmsg)

* * *

# 补充：更常用的“经济型 SVD”（更贴合机器学习）

因为 M 是 3×2，其实只需要前 n=2 个方向：

![$M = \hat U\,\hat S\,V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceIf939WS6mDcnYS12ndpYAmrHtF3snA3OpFkXbzK9j1tM2oFO62qTvQ/640?wx_fmt=png&from=appmsg)

-   ![$\hat U\in \mathbb{R}^{3\times 2}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicePCdV3fZmLxbaWkPHsuwfSiaIzU5icxcl5aOibgULgTtAlBib9rrJwV2SCA/640?wx_fmt=png&from=appmsg)（取 U 的前两列）
    
-   ![$\hat S\in \mathbb{R}^{2\times 2}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice88VWpIR5uqsHQ0cZRPiah6khGYpPSVRte0CX0ryoChTL62EGFuS76HA/640?wx_fmt=png&from=appmsg)
    
-   ![$V^T\in \mathbb{R}^{2\times 2}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceoY5mImE5SEEa5TNOSibKBqwVC2xAiaa2ZgPXemP17BRibHkavtiaF3hY6g/640?wx_fmt=png&from=appmsg)
    

![$\begin{array}{c} \hat U= \begin{bmatrix} -0.7010 & 0.5228\\ -0.2817 & -0.8279\\ -0.6551 & -0.2034 \end{bmatrix}, \quad \hat S= \begin{bmatrix} 4.2755 & 0\\ 0 & 1.9287 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicepl8RMUjzXjIzpePu7gRS7sZn2Ft0IXX5XU2pU8icb7Ce0qosGAQWia1Q/640?wx_fmt=png&from=appmsg)

![$\begin{array}{c} { M= \begin{bmatrix} -0.7010 & 0.5228\\ -0.2817 & -0.8279\\ -0.6551 & -0.2034 \end{bmatrix} \begin{bmatrix} 4.2755 & 0\\ 0 & 1.9287 \end{bmatrix} \begin{bmatrix} -0.7983 & 0.6022\\ -0.6022 & -0.7983 \end{bmatrix} } \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicedN7tlqeibCM4xRC6wTD3HrvUePoNKtwDDq76PVribjTMXHDFc9u7iaibqw/640?wx_fmt=png&from=appmsg)

* * *

更“直观”的，还可以解释成一句话：

> **![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceskoFH1kDNtNGVh8icT0bUz4r7fqLFgbdXzrCeYYS8Pwms1GEFxic5UPw/640?wx_fmt=png&from=appmsg)：把输入坐标系旋转到“最合适的方向” →  
> S：沿两个主方向拉伸（一个拉得大，一个拉得小） →  
> U：再把结果旋转到输出坐标系**

  

下面演示如何**从 ![$M^TM$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice6D7tJ7oUKYpuoDhrVJicXCMt3VGHcmGGicYLj4HAH40TjzPQbZgp74PQ/640?wx_fmt=png&from=appmsg) 手算出 V 和奇异值 σ**（也就是 S 的对角线），一步一步写清楚 ✅  
 

# 例子矩阵

![$\begin{array}{c} M= \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} \quad (3\times 2) \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceMJ3DcC6OictKL6J86W5hmiaAEy7jTXIA9rpI2a4vicgAf5MU03Ueep3mA/640?wx_fmt=png&from=appmsg)

SVD：

![$M = U\,S\,V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicescaIEicykVuBPsF1VqJmHYwALFibhgWDcwUrzrQya3qcCtGWqnReyRTA/640?wx_fmt=png&from=appmsg)

* * *

# 第 1 步：先算 ![$M^T M$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice6D7tJ7oUKYpuoDhrVJicXCMt3VGHcmGGicYLj4HAH40TjzPQbZgp74PQ/640?wx_fmt=png&from=appmsg) 

![$\begin{array}{c} M^T= \begin{bmatrix} 3 & 0 & 2\\ 1 & 2 & 2 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceBHyh3WNeu2B32hVaGNX33DAmgHDsyX1TfuiaJOmfF1DHEtQicibicXhwTg/640?wx_fmt=png&from=appmsg)

![$\begin{array}{c} M^T M= \begin{bmatrix} 3 & 0 & 2\\ 1 & 2 & 2 \end{bmatrix} \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} = \begin{bmatrix} 13 & 7\\ 7 & 9 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceWn7QVaMFticH63ZVcRGINjJ2ECRKr6OvWicx5twrq6QwOib4TWcufhoWg/640?wx_fmt=png&from=appmsg)

* * *

# 第 2 步：解特征值（得到 λ，再开方得 σ）

特征方程：

![$\det(M^TM-\lambda I)=0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceM9UemBsgGAXyiaSxC2iaHx9l69iagqLicc3jwib6N0hvNp17xETYSiaFdcbw/640?wx_fmt=png&from=appmsg)

展开：

![$\begin{array}{c} \det \begin{bmatrix} 13-\lambda & 7\\ 7 & 9-\lambda \end{bmatrix} =(13-\lambda)(9-\lambda)-49=0 \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice5UlEGa0dwGt4BxAfuahtOicfP5qBXrHjqviaS6fuzA08ItZPjpdRhu6w/640?wx_fmt=png&from=appmsg)

## (2.1）λ 是什么？

这里的 ![$I$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceVMDic4u3lPwE8AQrUF5dzD9Dqjf8ibPibfXUChFdJpfqJ5vYicDaIYg9eg/640?wx_fmt=png&from=appmsg) 是 **单位矩阵**（跟 ![$M^TM$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice6D7tJ7oUKYpuoDhrVJicXCMt3VGHcmGGicYLj4HAH40TjzPQbZgp74PQ/640?wx_fmt=png&from=appmsg) 同维度，都是 2×2）：

![$\begin{array}{c} I= \begin{bmatrix} 1 & 0\\ 0 & 1 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceMVUm7H6S7iagEdEMgwYme5ummh0Z1tIGZZJk2GN66E9yr2BhK9msYeQ/640?wx_fmt=png&from=appmsg)

所以

![$\begin{array}{c} \lambda I= \begin{bmatrix} \lambda & 0\\ 0 & \lambda \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceqhGLDqcicibvM36jcXCvnqukCWDTlf7gS1QVKdT1bdvJY4b867vL1wHw/640?wx_fmt=png&from=appmsg)

* * *

##   

## (2.2）做矩阵相减：![$M^TM - \lambda I$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicevFEeWl91kGFvleqnE52DdgZo0xGZ7OsQGCsViapr5hBx202D6NQMw2w/640?wx_fmt=png&from=appmsg)

![$\begin{array}{c} M^T M-\lambda I= \begin{bmatrix} 13 & 7\\ 7 & 9 \end{bmatrix} - \begin{bmatrix} \lambda & 0\\ 0 & \lambda \end{bmatrix} = \begin{bmatrix} 13-\lambda & 7-0\\ 7-0 & 9-\lambda \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceyLwiavc6QQqu3D7LatsWqiaVuQXprHGtpiaia3GNib2HofQvriagyjxItwNg/640?wx_fmt=png&from=appmsg)

所以就是：

![$\begin{array}{c} M^T M-\lambda I= \begin{bmatrix} 13-\lambda & 7\\ 7 & 9-\lambda \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceuzEgrmSibXlQWp3X1U6WYKGFcFnR9ib8hMxebDTngEpauZpWD14UtfvQ/640?wx_fmt=png&from=appmsg)

* * *

##   

## (2.3）最后对它取行列式

因此：

![$\begin{array}{c} \det(M^TM-\lambda I) = \det \begin{bmatrix} 13-\lambda & 7\\ 7 & 9-\lambda \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceHHS8B6icMia1JSpm4fRv7avdQkWqBO9c7osjRzdyS9TDaicbLsXOGY25A/640?wx_fmt=png&from=appmsg)

展开：

![$(13-\lambda)(9-\lambda)-49 =117-22\lambda+\lambda^2-49 =\lambda^2-22\lambda+68=0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceZymUX8iaB4VGKNMgNbPslI8FmqicQ1CHdWJXd46t0xAgDNwxuibFvQKYg/640?wx_fmt=png&from=appmsg)

解这个二次方程：

![$\lambda=\frac{22\pm \sqrt{22^2-4\cdot 68}}{2} =\frac{22\pm \sqrt{484-272}}{2} =\frac{22\pm \sqrt{212}}{2} =11\pm\sqrt{53}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceQIPfmoYOKf787qtpjtjibicdLphOyfeWGV2aicgx450LM9qWNF0CYibhAQ/640?wx_fmt=png&from=appmsg)

所以两条特征值：

![$\lambda_1=11+\sqrt{53}\approx 18.2801,\qquad \lambda_2=11-\sqrt{53}\approx 3.7199$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceaa84067LA1BearlvpBWcCQmiasxYx0Ea4cxaqliaVibsiaVM93fyn9pnZw/640?wx_fmt=png&from=appmsg)

* * *

## ✅ 奇异值 = 特征值开平方

![$\sigma_1=\sqrt{\lambda_1}=\sqrt{11+\sqrt{53}}\approx 4.2755$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicefgBuHrdcjAqQmfBsq1xC9QDoYIcEA82cw2wMfT0DPINTRVknQPq0ww/640?wx_fmt=png&from=appmsg)

![$\sigma_2=\sqrt{\lambda_2}=\sqrt{11-\sqrt{53}}\approx 1.9287$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicek0NXu0uCkdm0G3YRUByC4kO4CtN9WcXo9WhX0niczn9TpQYQhuDucDQ/640?wx_fmt=png&from=appmsg)

于是（注意 S 是 3×2）：

![$\begin{array}{c} S= \begin{bmatrix} \sigma_1 & 0\\ 0 & \sigma_2\\ 0 & 0 \end{bmatrix} = \begin{bmatrix} 4.2755 & 0\\ 0 & 1.9287\\ 0 & 0 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice4F50kzfXO5W2ggI481JPrnpEUXf3nIQqBtbRKiaibxgu6lnOfc7e0iaKw/640?wx_fmt=png&from=appmsg)

* * *

# 第 3 步：解特征向量（得到 V）

我们对每个 λ，解：

![$(M^TM-\lambda I)v=0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceB4GnkwUUCC7ZMLoic2vUFGDfP2v4iakFV5wqgnREc2cA42q4gbibSxr9w/640?wx_fmt=png&from=appmsg)

* * *

## (3.1) 对 ![$\lambda_1=11+\sqrt{53}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice32nYset7BWYdcbX3R1fXUsPcsz3RBAsmf5E5JxgvqIiaY7y0ew6DwKw/640?wx_fmt=png&from=appmsg) 求 v1

![$\begin{bmatrix} 13-\lambda_1 & 7\\ 7 & 9-\lambda_1 \end{bmatrix} \begin{bmatrix}x\\y\end{bmatrix}=0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice1nV6UAMbv9VDk1IurIsJl6DWjqROicEhymhhicDbwsibwoIO1QCkia7E7A/640?wx_fmt=png&from=appmsg)

用第一行：

![$(13-\lambda_1)x+7y=0 \quad\Rightarrow\quad y=\frac{\lambda_1-13}{7}x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceHkVJJnsdqkU3AffP4CI3hvfGVLIIWhs0iaiap68zslbe6HsHZb0aM0Bg/640?wx_fmt=png&from=appmsg)

代入 ![$\lambda_1=11+\sqrt{53}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice32nYset7BWYdcbX3R1fXUsPcsz3RBAsmf5E5JxgvqIiaY7y0ew6DwKw/640?wx_fmt=png&from=appmsg) 

![$y=\frac{(11+\sqrt{53})-13}{7}x =\frac{\sqrt{53}-2}{7}x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceKNib42p2r8MGB6fvCTibhZvedARp2VzJYohReGD5tlTYJqq8z0vlcjEw/640?wx_fmt=png&from=appmsg)

  

# (3.2）关键点：这不是一个“唯一解”，而是一整条直线方向

因为它只是说：

![$y = kx \quad,\quad k=\frac{\sqrt{53}-2}{7}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceibTiaaFjiaukMZwdDB9oVIJXY7vg4sUuXibum1o5de3RCxYl5DkqhtnxEw/640?wx_fmt=png&from=appmsg)

这说明所有满足条件的 (x,y) 都在同一条过原点的直线上：

![$(x,y)=(x,kx)=x(1,k)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceWXOrDqu7lpr7AfTUibPvqneOVtz12y4qheN58QJN4iaEJDFJXjHDCwicg/640?wx_fmt=png&from=appmsg)

也就是说：

![$\begin{bmatrix}x\\y\end{bmatrix} = x \begin{bmatrix} 1\\ k \end{bmatrix}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicesD1G32F8CLt6meq8hjQQKMF2LEzal0Sl4fw1oDv3WLHErZWLXdP0zg/640?wx_fmt=png&from=appmsg)

* * *

#   

# (3.3）为什么可以直接令 x=1？

因为特征向量只关心“方向”，不关心长度。

如果 v 是特征向量，那么任意非零倍数 cv 仍然是特征向量：

![$(M^TM)v=\lambda v \Rightarrow (M^TM)(cv)=c\lambda v=\lambda(cv)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicemIBMNrNCmibBibWDibynTy8wDPsKaoOmSwAgGj6ficP5CQicZZUrFf1sSqg/640?wx_fmt=png&from=appmsg)

所以我们可以选择一个最方便的尺度，比如令：

x=1

那么：

![$y=kx=k\cdot 1=k$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceibWYRsqqKTFmEJMVRB1z3f8gIV5iamOSYW0zkCW5HFkicnicoR1z4NiazAQ/640?wx_fmt=png&from=appmsg)

于是得到一个“代表方向”的向量：

![$\begin{array}{c} v_1\propto \begin{bmatrix} 1\\ k \end{bmatrix} = \begin{bmatrix} 1\\ \frac{\sqrt{53}-2}{7} \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceoQuVnSKT0J3ZbLQG7vWxRESyQmmVmDweoLcubBIELP96O7gdCnXZSA/640?wx_fmt=png&from=appmsg)

这里的符号 ∝ 的意思是：

> **“成比例 / 同方向”**  
> （差一个任意非零倍数都算同一个特征向量方向）

* * *

#   

# (3.4）为什么会出现近似数值 0.7543？

我们把

![$\frac{\sqrt{53}-2}{7}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceDFKU5iaf47wgOFBRjM9Xy4oUxXKK9EOWicPgbib2UBCMXne40rXnytAdg/640?wx_fmt=png&from=appmsg)

算成小数：

![$\sqrt{53}\approx 7.2801$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicetyBCCgtfAickAbUUcWDOnoJOxKZ2k6qstXPicdj9X25V14Mb9t0jgf3Q/640?wx_fmt=png&from=appmsg)

![$\sqrt{53}-2\approx 5.2801$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceRINZOia5RM1Wvzbvl2fxEVXAJVtCp357O7ibuiaCOPYpWJyEOlMq6QxaA/640?wx_fmt=png&from=appmsg)

![$\frac{5.2801}{7}\approx 0.7543$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicepSoLaZ6NSVWAwt9fIXPrr6lFkxPSDKeFLMKwcJiaUn5NdZVuR4KyHWA/640?wx_fmt=png&from=appmsg)

所以：

![$\begin{array}{c} v_1\propto \begin{bmatrix} 1\\ 0.7543 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicecvdqRwy0as4Qy1ib45rJHGbibntfkZpvOau19Bvrr3an0ZFLsIUAc0cQ/640?wx_fmt=png&from=appmsg)

我们就把v1继续**一步步变成“单位特征向量”**（也就是 SVD 里真正用的那种 v1），并解释为什么变成了带负号的版本。

单位化（长度变成 1），可取：

![$\begin{array}{c} v_1= \begin{bmatrix} -0.7983\\ -0.6022 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceVJyIJ0FVYGa3xOsU8js6uacTzUgOYZic44dQe26wvSdG96V0naS3Mxw/640?wx_fmt=png&from=appmsg)

  

# (3.5）“∝” 的意思：方向对了，但长度随便

意思是：真正的特征向量可以是它的任何非零倍数，比如

![$\begin{bmatrix} 2\\ 1.5086 \end{bmatrix},\; \begin{bmatrix} 10\\ 7.543 \end{bmatrix},\; \begin{bmatrix} -1\\ -0.7543 \end{bmatrix}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice7XViavLC5jUUh4wQibBCtn3pJs3rYVa3pRIlQrLZ8J1cYTbsLmcenKxg/640?wx_fmt=png&from=appmsg)

它们都在同一条直线上，方向一致。

  

* * *

# (3.6）为什么要“单位化”（归一化）？

在 SVD 里，V 要满足正交条件：

![$V^T V = I$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceHwpTkbPO9ICja2ho8nm58l9y6I9YiaeZnnF78K6NmmLicXwAuxNGpMicw/640?wx_fmt=png&from=appmsg)

所以它的列向量必须是**单位向量**：

![$\|v_1\| = 1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicemJffKDzwtfexJkacnKsGyJMrQwdpE6ibgUfznMQCBTERKOOxOXDCNTg/640?wx_fmt=png&from=appmsg)

因此我们要把向量缩放到长度 1。

  

* * *

# (3.7）计算长度 ∥v1∥

先记：

![$\begin{array}{c} \tilde v_1= \begin{bmatrix} 1\\ 0.7543 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicevwSgQ4Coxsyicurg3iblRyFVFuFYu573jgegOM8FtfWAa1XWOdfgWsWg/640?wx_fmt=png&from=appmsg)

它的长度是：

![$\|\tilde v_1\| = \sqrt{1^2 + 0.7543^2} = \sqrt{1 + 0.5690} = \sqrt{1.5690} \approx 1.2526$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice7sHpgIasExTNAvcbic91Do8vp1rNMXtibsh7nyqzK92iaqCvKicuw3uXibw/640?wx_fmt=png&from=appmsg)

* * *

#   

# (3.8）单位化：除以长度

单位向量定义：

![$v_1 = \frac{\tilde v_1}{\|\tilde v_1\|}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceeEE6qcI4Tvib5xLiaJHPM5T8XHxkcTfGXmkHwj8rdbZLrLM5XXmTXPww/640?wx_fmt=png&from=appmsg)

所以：

![$\begin{array}{c} v_1 = \frac{1}{1.2526} \begin{bmatrix} 1\\ 0.7543 \end{bmatrix} = \begin{bmatrix} 0.7983\\ 0.6022 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicedJeOLGmUDeBGLia0E2T7xHc7E7VXnAhCm1XnInibexZVakXYj1w30teA/640?wx_fmt=png&from=appmsg)

✅ 这就是“标准的单位特征向量版本”。

  

* * *

# (3.9）为什么之前写的是负号版本？

我写的是：

![$\begin{array}{c} v_1= \begin{bmatrix} -0.7983\\ -0.6022 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceVJyIJ0FVYGa3xOsU8js6uacTzUgOYZic44dQe26wvSdG96V0naS3Mxw/640?wx_fmt=png&from=appmsg)

原因只有一个：

## ✅ 特征向量整体乘 −1 仍然是特征向量

因为如果：

![$(M^TM)v_1=\lambda_1 v_1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceRbSd13YBSA47TSU0kmkgXDUDvdxwem6jTQnXZSeMibibvSib5rdrxcISQ/640?wx_fmt=png&from=appmsg)

那么两边同乘 −1：

![$(M^TM)(-v_1)=\lambda_1(-v_1)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice9PcFMLa4LLqYGWLKs89y1icf1HXmm8BHCYgbhscXsCBUDMKk0RjeXZA/640?wx_fmt=png&from=appmsg)

依然成立。

所以：

![$\begin{bmatrix} 0.7983\\ 0.6022 \end{bmatrix} \quad\text{}\quad \begin{bmatrix} -0.7983\\ -0.6022 \end{bmatrix}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicehtljLEaibMRHibLFtz5SWng5Eq8ibQUZH8zXhVcKtjPzK3Z24SZ9WQ4Ew/640?wx_fmt=png&from=appmsg)

**二者完全等价**，只是方向箭头反过来了（同一条直线）。

* * *

#   

# ✅ 总结一句话（最关键的直觉）

从 y=kx 推出向量方向

![$(x,y)\propto(1,k)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicezJllFYVewdT3hqlz0rsxIMC9SzDSeoIugABNJIJ9Dyd0u2xrQOKYVw/640?wx_fmt=png&from=appmsg)

因为把 x 提出来：

![$(x,y)=(x,kx)=x(1,k)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceWXOrDqu7lpr7AfTUibPvqneOVtz12y4qheN58QJN4iaEJDFJXjHDCwicg/640?wx_fmt=png&from=appmsg)

所以特征向量可以写成：

![$\begin{array}{c} v_1\propto \begin{bmatrix} 1\\ k \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice10anx12QVQicklAGYBgaVtmms89RkhICfG0W4ZViagYSYk8ouX7056EQ/640?wx_fmt=png&from=appmsg)

所以特征向量方向为：

![$\begin{array}{c} v_1\propto \begin{bmatrix} 1\\ \frac{\sqrt{53}-2}{7} \end{bmatrix} \approx \begin{bmatrix} 1\\ 0.7543 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice4djdBfyjYwGgRDrVZzu7jiaaMmFGVRvichP5XvoCcsLAFh1lvmy6icgqA/640?wx_fmt=png&from=appmsg)

##   

## (3.10) 对 ![$\lambda_2=11-\sqrt{53}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceKwA0VnyLibwEyYZvdqomUjoxvx8zK0zmhBiapv3xRx3HsPUiaJW0173Sw/640?wx_fmt=png&from=appmsg) 求 v2

同样：

![$y=\frac{\lambda_2-13}{7}x =\frac{(11-\sqrt{53})-13}{7}x =-\frac{\sqrt{53}+2}{7}x \approx -1.3257x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceJ7ycpxnU6Kb78NeByLM6ibbmXLR7ozpmeiawWHf5icIl6FTROgjTlw3AQ/640?wx_fmt=png&from=appmsg)

所以：

![$\begin{array}{c} v_2\propto \begin{bmatrix} 1\\ -1.3257 \end{bmatrix} \Rightarrow v_2= \begin{bmatrix} 0.6022\\ -0.7983 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicetqEy35s0H5cop5n3lGhYVYmSot2WibNVq3m2UANTLPmkKZ5P0FiadHpw/640?wx_fmt=png&from=appmsg)

* * *

## ✅ 组成 V

把 v1,v2 作为列拼起来：

![$\begin{array}{c} V= \begin{bmatrix} -0.7983 & 0.6022\\ -0.6022 & -0.7983 \end{bmatrix} \quad\Rightarrow\quad V^T= \begin{bmatrix} -0.7983 & -0.6022\\ 0.6022 & -0.7983 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceNBUl3CXaV0U78M00QxFrAhBcsLa5MLQSR2BYYAzyIRga7F0EBnqb7Q/640?wx_fmt=png&from=appmsg)

* * *

# 第 4 步：用 ![u_i=\frac{Mv_i}{\sigma_i}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceRYxurwIwLTXlZbWSODUaiamYib3llLRdlOgk3ZicW6v2SkdB5vl6utmvQ/640?wx_fmt=png&from=appmsg) 得到 U

这个很关键，因为它解释了“为什么 U 会出现”：

![$Mv_i=\sigma_i u_i \quad\Rightarrow\quad u_i=\frac{1}{\sigma_i}Mv_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceYsorOe2poekxmVGpxaqwRcFa0O7xTIDjIOOUrkDW5pzLw7K2EmQ5uA/640?wx_fmt=png&from=appmsg)

计算得：

![$\begin{array}{c} u_1= \begin{bmatrix} -0.7010\\ -0.2817\\ -0.6551 \end{bmatrix}, \qquad u_2= \begin{bmatrix} 0.5228\\ -0.8279\\ -0.2034 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicevicomeiaNUkluLYGUEkFXjQRLQY907gkkNFiaCDia0JY7vot3nmAWG9gEw/640?wx_fmt=png&from=appmsg)

再补一个正交单位向量 u3，凑成 3×3 的正交矩阵：

![$\begin{array}{c} u_3= \begin{bmatrix} -0.4851\\ -0.4851\\ 0.7276 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicemyfNVWyk6icwEBBfLeib3uHS6l7dNNObkwOPib5tto5ceXbAicBpPD2Acg/640?wx_fmt=png&from=appmsg)

于是：

![$\begin{array}{c} U= \begin{bmatrix} -0.7010 & 0.5228 & -0.4851\\ -0.2817 & -0.8279 & -0.4851\\ -0.6551 & -0.2034 & 0.7276 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicebRA1CJh16fvvqUPgk2wDh9dqLTTzMgLF5BiafhaPib34GUhUAgOKxeGQ/640?wx_fmt=png&from=appmsg)

* * *

# ✅ 最终完整拆解

![$\begin{array}{c} { \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} = \begin{bmatrix} -0.7010 & 0.5228 & -0.4851\\ -0.2817 & -0.8279 & -0.4851\\ -0.6551 & -0.2034 & 0.7276 \end{bmatrix} \begin{bmatrix} 4.2755 & 0\\ 0 & 1.9287\\ 0 & 0 \end{bmatrix} \begin{bmatrix} -0.7983 & -0.6022\\ 0.6022 & -0.7983 \end{bmatrix} } \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceX4faSufgiaDhY4nCbM0hsBIc8oeBEPW4mrC3Qicm7CYLPKAlooEDrAGg/640?wx_fmt=png&from=appmsg)

* * *

  

下面我把 ![Mv_1=\sigma_1 u_1](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceKjJOV6M4BXP87fKoMbU8MU4uQIibnwRRTrYegib4BibS99icLBAjIlHVdw/640?wx_fmt=png&from=appmsg) **逐项乘出来**，让你看到它真的就是“乘完正好等于 σu” 的那种一致性：

# 已知

![$\begin{array}{c} M= \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} ,\quad v_1= \begin{bmatrix} -0.7983\\ -0.6022 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicenOamIC0oZSoecA8xlEkvUzbayybWs7Aic7kxoWzgMmjZiakMuicO2mzKQ/640?wx_fmt=png&from=appmsg)

![$\begin{array}{c} \sigma_1=4.2755, \quad u_1= \begin{bmatrix} -0.7010\\ -0.2817\\ -0.6551 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicesu0sCEuMdon7S7mGbHKHqve1wd2hAYBByTWiaeOpJB59wrhgcQuKuOA/640?wx_fmt=png&from=appmsg)

* * *

# 1）左边：逐项算 ![$M v_1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceZFEYyh2nvY9ibjmQGiaKoddicZ3m7mI0MvzKicIpbwicibtibZKNsSTFobWMw/640?wx_fmt=png&from=appmsg) 

![$\begin{array}{c} Mv_1= \begin{bmatrix} 3 & 1\\ 0 & 2\\ 2 & 2 \end{bmatrix} \begin{bmatrix} -0.7983\\ -0.6022 \end{bmatrix} = \begin{bmatrix} 3(-0.7983)+1(-0.6022)\\ 0(-0.7983)+2(-0.6022)\\ 2(-0.7983)+2(-0.6022) \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicesJ798GIGPUebL34UjZ5EhogSnrlA6DyVSyJlVvAMdfkccY5tfXSic0w/640?wx_fmt=png&from=appmsg)

现在每一行都算出来：

### 第 1 行

![$3(-0.7983)+1(-0.6022) = -2.3949-0.6022 = -2.9971$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicemZFFeuh5nR5Gnu9nqphrwibbAw6eorxrfsxoMcfcWbn29oRIo1ncrzw/640?wx_fmt=png&from=appmsg)

### 第 2 行

![$0(-0.7983)+2(-0.6022) = 0-1.2044 = -1.2044$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice2fQ9IzGofqrd3V8eqw27GCicXLN0hFqXwU0nDxic06by6ia8dHq7ibibbZw/640?wx_fmt=png&from=appmsg)

### 第 3 行

![$2(-0.7983)+2(-0.6022) = -1.5966-1.2044 = -2.8010$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlicek4lGHcDjnqiaY64USicribI2gMubgCbEyN9LjaGJHzIOibPmpeDsQ6f2Og/640?wx_fmt=png&from=appmsg)

所以：

![$\begin{array}{c}{ Mv_1= \begin{bmatrix} -2.9971\\ -1.2044\\ -2.8010 \end{bmatrix}} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceMPuVkdwSruTuZmyzqb3QbJd9HAAlbMtnibhMXZFUAezpIicGD9zyp7lw/640?wx_fmt=png&from=appmsg)

* * *

#   

# 2）右边：逐项算 ![$\sigma_1 u_1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice9WexEYqPyohWciaurYsAkDdUWLWqhZbtP8Umut4CslVHaz6zWobxfiaw/640?wx_fmt=png&from=appmsg) 

![$\begin{array}{c} \sigma_1 u_1= 4.2755 \begin{bmatrix} -0.7010\\ -0.2817\\ -0.6551 \end{bmatrix} = \begin{bmatrix} 4.2755(-0.7010)\\ 4.2755(-0.2817)\\ 4.2755(-0.6551) \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceYbLEToLuQr55wAGcul4oAgJuElAqc9e18lJIs89h1oEjurUT3A4nzg/640?wx_fmt=png&from=appmsg)

逐项乘：

### 第 1 项

![$4.2755(-0.7010)=-2.9971$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceia1iayh7qOgOv0sqTsrUlicDWYuYgibsE9ByGX9WkDMNqcEkWHRwqZNIdQ/640?wx_fmt=png&from=appmsg)

### 第 2 项

![$4.2755(-0.2817)=-1.2044$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlice3GPCY99bd593icJuYxAictyibkZ6NHU9XzRV1vC324hRxh0s923gfnJjQ/640?wx_fmt=png&from=appmsg)

### 第 3 项

![$4.2755(-0.6551)=-2.8009\approx -2.8010$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwlices9fRQeCQFeQzQMAky3DazwFqOFleHqFfTNI9z9Izh3DtPqRalGNXMg/640?wx_fmt=png&from=appmsg)

所以：

![$\begin{array}{c} { \sigma_1 u_1= \begin{bmatrix} -2.9971\\ -1.2044\\ -2.8010 \end{bmatrix}} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceoIu0BILiaRE1huTDTAr5ibLM4BTtEzicXel2mtmBWxJ4HiaK9BPslfVPFA/640?wx_fmt=png&from=appmsg)

* * *

# ✅ 对齐验证：两边完全相等（误差仅来自四舍五入）

![$\begin{array}{c} { Mv_1= \begin{bmatrix} -2.9971\\ -1.2044\\ -2.8010 \end{bmatrix} = \sigma_1 u_1 } \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceFAEWMnoiaHa8dWXUKFwXrraehqFJFPgKOEPzNwE88M4dsMvQNn0Vr3w/640?wx_fmt=png&from=appmsg)

同样可逐项验算![$Mv_2=\sigma_2 u_2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tpUBzHiaXHJ7gaP7s2TAwliceLQlV6YNjs7cCBKZ3GwxbUs6cibfWQyYhCRlIicstpWnNMc0zqMBjYTWQ/640?wx_fmt=png&from=appmsg)。