# 通俗易懂的Gram矩阵讲解


> 原文地址: [https://mp.weixin.qq.com/s/guhTwY4c7-zv8XGO3lSJPQ](https://mp.weixin.qq.com/s/guhTwY4c7-zv8XGO3lSJPQ)

        Gram矩阵（Gram matrix）是一个数学工具，常用于线性代数、机器学习和图像处理中。它本质上是一个“相似度表格”，用来描述一组向量（或数据点）之间两两的相似程度。咱们用日常生活比喻来讲解，避开复杂公式，先抓本质。

  

#### 1. **基本想法：向量像“人”，Gram矩阵像“朋友圈相似度表”**

-   想象你有几个朋友（对应“向量”），每个朋友有自己的特征，比如身高、体重、性格分数等（这些是向量的“维度”）。
    
-   你想知道他们之间谁和谁更“相似”？可以用“内积”（dot product）来衡量：两个朋友的特征值相乘再加起来，得分越高越相似（比如都高个子、都外向，得分就高）。
    
-   Gram矩阵就是一个表格：行和列都对应这些朋友，表格里的每个格子填的就是他们俩的相似度分数。
    

-   对角线：每个朋友和自己的相似度（总是正的，代表“强度”）。
    
-   非对角线：不同朋友间的相似度（可能正、负或零，表示相似、相反或无关）。
    
      
    

#### 2. **怎么计算？（简单步骤）**

-   假设你有一组向量，放在一个矩阵V里（每列一个向量）。
    
-   Gram矩阵G = V转置（![V^T](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tPXSacdwA8pTpMMibPp0IfFKAaFPlFLE3ibZtibAHM6ibIfIbEJgiabpFkow/640?wx_fmt=png&from=appmsg)） × V（矩阵乘法）。
    

-   “转置”就是把行变列（像把表格翻转90度）。
    
-   乘法结果的每个元素![G_{ij}](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t3TJubAZE7yqnOFruK4nkm832MhdFYmGJMSTeHupd4D1uqwKnAmtM0A/640?wx_fmt=png&from=appmsg) = 向量 i 和 向量 j 的内积。
    
      
    

-   如果向量是行向量，就![G = V × V^T](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t0ydpFChLfEhum45SgBsiaSaemjGa9mhSct8PBTDFVCElpIqMgaffewQ/640?wx_fmt=png&from=appmsg)。
    

![](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tconLR3LB9xiacOK0YGwxLnbPJmFiaCecShHTpAYXbCDI7V5eWcAfdwUQ/640?wx_fmt=png&from=appmsg)  
编辑

  

这张图其实把**格拉姆矩阵**（Gram matrix）= “**两两做内积的表格**”画得很直观：

* * *

## 1）先读图：它在做什么乘法？

图里中间那根彩色“竖条”矩阵写着 A，它的列是

![$A=[\,v_1\ \ v_2\ \ \cdots\ \ v_n\,]$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tSWicv43FtLDC0flRnxGMHOweKicj4VicKib0Jl1ABrJmc1ZYFCrbHTY9sw/640?wx_fmt=png&from=appmsg)

左边是 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5th6GSYu8hQVJ4GwTOyM5RREv7iafahT2buN7KKEE21qECLIQz95FYbxQ/640?wx_fmt=png&from=appmsg)，也就是把这些列向量转成行向量：

![$\begin{array}{c} A^T= \begin{bmatrix} v_1^T\\ v_2^T\\ \vdots\\ v_n^T \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tamUz1DGyBAudhbBcB8F3okN3qz3gTCwuWEpe3qUBfgiaLsMicpstJDaw/640?wx_fmt=png&from=appmsg)

然后图在算：![$A^T A$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5thLoFgCkqc3AwNibOlDBpnzrEQDKTWeibmTRJIDksqWcPVDW2yvvc3PBA/640?wx_fmt=png&from=appmsg)

  

* * *

## 2）为什么 ![$A^T A$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5thLoFgCkqc3AwNibOlDBpnzrEQDKTWeibmTRJIDksqWcPVDW2yvvc3PBA/640?wx_fmt=png&from=appmsg) 就是“格拉姆矩阵”？

矩阵乘法的第 (i,j) 个元素，是“第 i 行”点乘“第 j 列”。

在这里：

-    ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5th6GSYu8hQVJ4GwTOyM5RREv7iafahT2buN7KKEE21qECLIQz95FYbxQ/640?wx_fmt=png&from=appmsg) 的第 i 行就是 ![$v_i^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tDaDrPdtsdfrwdojpicDq86enO84KmAf6wzpHes57xRqickGmqmdzDICw/640?wx_fmt=png&from=appmsg) 
    
-   A 的第 j 列就是 ![$v_j$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tW357R0v59DPOOnr3V1NwMAd9wy7WjPzIvNQelJDFpribuPTj6rlvjDw/640?wx_fmt=png&from=appmsg) 
    

所以

![$(A^T A)_{ij}= v_i^T v_j = \langle v_i, v_j\rangle$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tstfkml2hn8IpZbKrssVLIxIG8PUuKdUWfeYicibgUz4SicndURibdIGaXg/640?wx_fmt=png&from=appmsg)

这句话就是格拉姆矩阵的定义：

> **Gram 矩阵 G 的元素 ![$g_{ij}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tSKmwy1iaTgNKQMWSZpNemg5SmarJgDFkeh3xboEHLnXzIlaJwUaEcicg/640?wx_fmt=png&from=appmsg) = 向量 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tD9HNxDR2s31YtBt430qfDFOABMUhhoTKudouxbXQL8f2b5WyveFwdw/640?wx_fmt=png&from=appmsg) 和 ![$v_j$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tW357R0v59DPOOnr3V1NwMAd9wy7WjPzIvNQelJDFpribuPTj6rlvjDw/640?wx_fmt=png&from=appmsg) 的内积。**

图右侧那一格格小方块，就是把所有 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tD9HNxDR2s31YtBt430qfDFOABMUhhoTKudouxbXQL8f2b5WyveFwdw/640?wx_fmt=png&from=appmsg) 和 ![$v_j$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tW357R0v59DPOOnr3V1NwMAd9wy7WjPzIvNQelJDFpribuPTj6rlvjDw/640?wx_fmt=png&from=appmsg) **两两“点一下”**，填成一张表。

* * *

##   

## 3）每个格子在“几何上”是什么意思？

记住内积的几何意义：

![$\langle v_i, v_j\rangle = \|v_i\|\,\|v_j\|\cos\theta_{ij}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5txQ9uYzu8gyWjtADEM7aeVSatZhRicibwSE6RZicodRsjSicJZgaUbZSZFA/640?wx_fmt=png&from=appmsg)

所以格拉姆矩阵每一格都在回答一个问题：**这两根向量有多“同向/相似”？**

-   对角线 ![$g_{ii}=\langle v_i,v_i\rangle=\|v_i\|^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tUaibS4K3PRxiaZBWqCYMVu7XvNDaFPHH2iaJKtnmFwRAwD0zGVjpeov0A/640?wx_fmt=png&from=appmsg)   
      就是每根向量自己的“长度平方”。  
      图里对角线方块颜色“很纯”（同色），表示“自己和自己匹配度最大”。
    
-   非对角 ![$g_{ij}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tSKmwy1iaTgNKQMWSZpNemg5SmarJgDFkeh3xboEHLnXzIlaJwUaEcicg/640?wx_fmt=png&from=appmsg)（i≠j）
    

-   若 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tD9HNxDR2s31YtBt430qfDFOABMUhhoTKudouxbXQL8f2b5WyveFwdw/640?wx_fmt=png&from=appmsg)  **正交**（90°），cos⁡θ=0 ⇒ ![$g_{ij}=0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tD3srzRdzuvZaYYt3v7t6iaPJ5b2KnTYlZOm7pYOEqIZKXJ7L3jmyHFQ/640?wx_fmt=png&from=appmsg)   
      这格就“很弱/接近空白”（相似度为 0）。
    
-   若夹角小、同向，cos⁡θ>0 ⇒ ![$g_{ij}>0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t2Dz5GskJDeuUKWz50GicIJmvjiaAWRBeJRJ1DrNvBHRM8mEgqph9HJgw/640?wx_fmt=png&from=appmsg)   
      这格就“大”（相似）。
    
-   若反向，cos⁡θ<0 ⇒ ![$g_{ij}<0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5ttCs3tSxNQompsHBzS40rhtg905g78PvC9SBdY6GTbYRzv3gVtAjgyA/640?wx_fmt=png&from=appmsg) 
    
      
    

你可以把右边那张矩阵当作：**“向量相似度热力图（但用内积计量）”**。

* * *

##   

## 4）格拉姆矩阵有哪些关键性质（机器学习里很常用）？

设 ![$G=A^T A$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t1F44pW6nMSB1YKDos9z2FgiaCOC3tic0syKrtHD06uEqSqOvulickkzNg/640?wx_fmt=png&from=appmsg)：

1.  对称：![$G^T=G$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5txiaMAzAJdLWia2dLPolNUxGdPnMIkA3mU9R9gkQE9fc9B3dzibQPMSibeg/640?wx_fmt=png&from=appmsg)  
      因为 ![$\langle v_i,v_j\rangle=\langle v_j,v_i\rangle$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tnia7D41U1TjMCyEc0LqH4D78oQy56xTVSOMPZZkBcyNdWIGdqBHwFuw/640?wx_fmt=png&from=appmsg)。
    
2.  半正定（PSD）：对任意 x，都有
    
    ![$x^T G x = x^T A^T A x=\|Ax\|^2 \ge 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tS2Fhgs8xuudExYDS51xc9gNw3ar8Cnf1pDH8bmEVwKtrtfw3PdKIicg/640?wx_fmt=png&from=appmsg)
    
    这点非常重要：很多优化问题靠它保证“碗状凸性”。
    
3.  秩不超过维度：  
      如果每个 ![$v_i\in\mathbb{R}^d$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t1ibuZK5Xh8SfwThSfJYdDfcWQMic0eeqEDKeUsMahssbpHkpY3icfsE2Q/640?wx_fmt=png&from=appmsg)，则 rank(G)≤d。  
      这意味着：就算你有很多向量，它们的“独立信息”也被空间维度限制。
    

  

* * *

## 5）它在机器学习里常出现在哪？

-   线性回归 / 最小二乘：经典的 ![$X^T X$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tia42gwhPQiaPefCV5Krp3ER8z5MFiavAfTNsbU1J9z0YxSMLGtjFIUBVg/640?wx_fmt=png&from=appmsg)（这就是 Gram）
    
-   核方法 / SVM：把内积换成核函数 ![$k(x_i,x_j)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tGEzzxWkMuAIQ9xAujvJAJkuL1OeWTbYyDDErvQh3UvW4w2pWrcVRAw/640?wx_fmt=png&from=appmsg)，得到“核 Gram 矩阵”
    
-   相似度矩阵：用点积/余弦相似度衡量样本之间的接近程度
    
-   PCA/协方差相关：中心化后 ![$X^T X$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tia42gwhPQiaPefCV5Krp3ER8z5MFiavAfTNsbU1J9z0YxSMLGtjFIUBVg/640?wx_fmt=png&from=appmsg) 和协方差矩阵只差一个缩放
    

  

我们就用一个**带具体数字**的小例子，把图里的“点点（内积）”彻底算清楚——你会直观看到：**右边那张方格表就是把每两根列向量都“点乘”一遍**。

* * *

## 1）造一个和图一致的场景：A 的列就是 4 根向量

设 A 有 4 列（对应图里 4 种颜色的竖条），每列是一个 2 维向量：

![$\begin{array}{c} v_1=\begin{bmatrix}1\\0\end{bmatrix},\quad v_2=\begin{bmatrix}1\\1\end{bmatrix},\quad v_3=\begin{bmatrix}0\\2\end{bmatrix},\quad v_4=\begin{bmatrix}-1\\1\end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tpzQxnTnxefa9qPictBfXpiaFglSrzQ167ruDO6b9tSaD4Z5u9rXK2frQ/640?wx_fmt=png&from=appmsg)

把它们并排放成矩阵：

![$\begin{array}{c} A=[v_1\ v_2\ v_3\ v_4] = \begin{bmatrix} 1&1&0&-1\\ 0&1&2&1 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tANOMwic6icOWsAiamtuuQ1ApiafLSWwFy7TKj4q2pdjvZMNakcbPYp8yCQ/640?wx_fmt=png&from=appmsg)

* * *

## 2）格拉姆矩阵 ![$G=A^T A$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t1F44pW6nMSB1YKDos9z2FgiaCOC3tic0syKrtHD06uEqSqOvulickkzNg/640?wx_fmt=png&from=appmsg)：每个格子就是一个“内积”

![$G=A^T A,\quad g_{ij}=(A^T A)_{ij}=v_i^T v_j=\langle v_i,v_j\rangle$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t6q4MMvKtnKcob6kGTgO38hDkaudjkoWOz1rRdpmAJoQpVfib4f1e23g/640?wx_fmt=png&from=appmsg)

我们把所有两两内积都算出来（这就是右侧方格表每个格子的数）：

### 先算对角线（自己点自己 = 长度平方）

-   ![$g_{11}=v_1\cdot v_1=1^2+0^2=1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tpKKehGhFoqWcBcZFQWT2dgbRGVa3aGNbFtZUU3hnYUpia9FpjunYBJw/640?wx_fmt=png&from=appmsg)
    
-   ![$g_{22}=v_2\cdot v_2=1^2+1^2=2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tN0BP4qjWh3uk6ic7QYVaiauUiaibribER5JEmu2oRkibldLzTyxpYOibjX3CA/640?wx_fmt=png&from=appmsg)
    
-   ![$g_{33}=v_3\cdot v_3=0^2+2^2=4$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t5icSU2sxxgnuib2GMC7omAvk4HvwVvh35wbEQia9nt6SZh3new1qsdZVA/640?wx_fmt=png&from=appmsg)
    
-   ![$g_{44}=v_4\cdot v_4=(-1)^2+1^2=2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tVq4bR6SO1x6nYWzhoFgJz2Clzn2PJe4bMDCKIYYqFrR406rk7f48rA/640?wx_fmt=png&from=appmsg)
    

### 再算非对角线（两两相似度）

-   ![$g_{12}=v_1\cdot v_2=1\cdot1+0\cdot1=1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tw2mFeTvelxIiaBwRLO9tayqaBgo5oicQhQm9IZJC8EA1y8XniaN6nxn6A/640?wx_fmt=png&from=appmsg)
    
-   ![$g_{13}=v_1\cdot v_3=1\cdot0+0\cdot2=0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tqsU2hqrLJxqjMNiaY6HfUdwupzaBSLQ3wekXa6F1icPy55K5piajgct2Q/640?wx_fmt=png&from=appmsg)
    
-   ![$g_{14}=v_1\cdot v_4=1\cdot(-1)+0\cdot1=-1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tLyCA1athFEGibfd1jqq1CnOKexKic1yicDxpTkyhYXRr9CsZict5Dshh6g/640?wx_fmt=png&from=appmsg)
    
-   ![$g_{23}=v_2\cdot v_3=1\cdot0+1\cdot2=2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tibGs4CPpK3Cic4JcMx7o6mxWibBGRzsxF6466XWJf32OjaZXIy4wWb5Gw/640?wx_fmt=png&from=appmsg)
    
-   ![$g_{24}=v_2\cdot v_4=1\cdot(-1)+1\cdot1=0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tyYzN5qib0DqK0cnhcsks2ibavWqse8Oh6HjSuicCjcOpzTvzLjAPibfeQA/640?wx_fmt=png&from=appmsg)
    
-   ![$g_{34}=v_3\cdot v_4=0\cdot(-1)+2\cdot1=2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t6ibNuvFiaoz97ia4Wm2r61kdCQSRlnvxInascKIw8rSWuGNosa5K6jdPQ/640?wx_fmt=png&from=appmsg)
    

于是整张“方格表”（Gram 矩阵）就是：

![$\begin{array}{c} G= \begin{bmatrix} 1&1&0&-1\\ 1&2&2&0\\ 0&2&4&2\\ -1&0&2&2 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tlvwy8L7XF0pS0yMUzwTLr1jx1Uyz9Tv4toM6TUia0iawD38d2OeibjG0w/640?wx_fmt=png&from=appmsg)

你看它天然就**对称**（因为 ![$v_i\cdot v_j=v_j\cdot v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tO9yFIzhPSH06FsnKiaf4rAz1fOmzbdPZc83ldc4Af3vqXjUW89aQeLw/640?wx_fmt=png&from=appmsg)）：左下角就是右上角的镜像——这也和图的方格“左右对称感”一致。

  

* * *

## 3）把每个数翻译成几何含义：同向、正交、反向

内积和角度关系：

![$v_i\cdot v_j=\|v_i\|\,\|v_j\|\cos\theta_{ij}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tKV7ZqwyxbGC7s8tbxibQXhSicGD6Kk3tN8bXGNvBKg8slYGzIibke8SAA/640?wx_fmt=png&from=appmsg)

所以：

-   g13=0 ⇒ v1 与 v3 **正交（90°）**
    
-   g14=−1<0 ⇒ v1 与 v4 **偏反向（钝角）**
    
-   g12=1>0 ⇒ v1 与 v2 **偏同向（锐角）**
    

我们甚至能算出角度（用余弦）：

-   ![$\|v_1\|=1,\ \|v_2\|=\sqrt2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t8rsnPVEcdIrOeqtPGdAhbwHtLlD9qic4mFkeuADk5LqczJTsicqc0MIA/640?wx_fmt=png&from=appmsg)
    
    ![$\cos\theta_{12}=\frac{1}{1\cdot\sqrt2}=0.707 \Rightarrow \theta_{12}\approx45^\circ$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5teZG16Kxg2yibsVstDYTsqicbyhFGfKtrBQKtgErZuuZboeXuqYIDjSQw/640?wx_fmt=png&from=appmsg)
    
-   ![$\|v_4\|=\sqrt2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t8cHyRyg0WnYibuxaau4NMdMs8OQzxcgx834iavCyST1D46fCTTBdGBBg/640?wx_fmt=png&from=appmsg)
    
    ![$\cos\theta_{14}=\frac{-1}{1\cdot\sqrt2}=-0.707 \Rightarrow \theta_{14}\approx135^\circ$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tjSKF85W7YnFrDR83uQELrtibPrB7ia05LJMsOiaSwLvoBFfjIh6kGu1JQ/640?wx_fmt=png&from=appmsg)
    

所以 **Gram 矩阵就是“角度 + 长度”的编码表**：  
对角线管长度，非对角线管夹角（方向相似度）。

  

* * *

## 4）为什么机器学习里爱用它？一句话就够

如果把 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tD9HNxDR2s31YtBt430qfDFOABMUhhoTKudouxbXQL8f2b5WyveFwdw/640?wx_fmt=png&from=appmsg) 当成样本（或特征向量），那么 G 就是：

> **样本两两相似度矩阵（用内积做相似度）**

-   在线性回归里：![$X^T X$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tia42gwhPQiaPefCV5Krp3ER8z5MFiavAfTNsbU1J9z0YxSMLGtjFIUBVg/640?wx_fmt=png&from=appmsg) 就是 Gram（决定曲面形状、可解性、病态程度）
    
-   在核方法里：把内积换成 ![$k(x_i,x_j)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tGEzzxWkMuAIQ9xAujvJAJkuL1OeWTbYyDDErvQh3UvW4w2pWrcVRAw/640?wx_fmt=png&from=appmsg)，得到“核 Gram 矩阵”，不用显式进高维也能做相似度
    

图中**“点最多”**其实是在强调：**每个向量里有很多个分量**（图里用一串黑点 + 省略号表示），而 **Gram 矩阵里的一个格子**，就是把这“一长串点”**逐个相乘再全部相加**得到的。

  

我就拿图里最典型的那个格子——**左上角 g11**（黄色行 × 黄色列，也就是 ![$v_1^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tULVESXIpwQmnYBCrjy0zVCQlMVLUdovSKAvxqwmJjTMulB9iaern8Kg/640?wx_fmt=png&from=appmsg) 和 v1）来示范：这格对应的“点”（分量）最多、最直观。

* * *

## 1）把图里的“点点”写成符号

图中黄色那行是：

![$v_1^T = [\ \bullet\ \ \bullet\ \ \bullet\ \ \cdots\ \ \bullet\ ]$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tTRs6l5eUjIb3acGkqa6HBicwYGaicRjF8Vu4bvK9lAQpbkreDwlSncRw/640?wx_fmt=png&from=appmsg)

意思是：v1 有很多个分量。把它写成具体形式就是：

![$\begin{array}{c} v_1= \begin{bmatrix} a_1\\ a_2\\ a_3\\ \vdots\\ a_m \end{bmatrix}, \quad v_1^T=[a_1\ a_2\ a_3\ \cdots\ a_m] \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tATDSKqUPSlNJy8HeeqNnHgBmTa4KuF6ShmYDmQzL8Aiagr5T3ddbUwQ/640?wx_fmt=png&from=appmsg)

这里每个 ![$a_k$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tnFISGHibiaODOjiad782Ixes8LzibaMf7ibwlzXMXEUYHlyhSJqI3bKV1RA/640?wx_fmt=png&from=appmsg) 就对应图里的一颗黑点（省略号表示中间还有很多颗）。

  

* * *

## 2）“一个格子”是怎么来的：逐点相乘 + 全部相加

右侧 Gram 矩阵 ![$G=A^T A$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t1F44pW6nMSB1YKDos9z2FgiaCOC3tic0syKrtHD06uEqSqOvulickkzNg/640?wx_fmt=png&from=appmsg) 的左上角格子是：

![$g_{11}=(A^TA)_{11}=v_1^T v_1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5twEczNPgtibZ89TI7icmVf0bSTh2BWV9BricEVMJNa6cia0ib8pCMH1nC6kw/640?wx_fmt=png&from=appmsg)

按“点乘”的规则：

![$\begin{array}{c} v_1^T v_1 = [a_1\ a_2\ a_3\ \cdots\ a_m] \begin{bmatrix} a_1\\ a_2\\ a_3\\ \vdots\\ a_m \end{bmatrix} = a_1a_1+a_2a_2+a_3a_3+\cdots+a_ma_m \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tKY9GmOoT3iaI84m2rw4H2xgtIMyfEfsum6XWvBgEyusuJwgozMiaPNzw/640?wx_fmt=png&from=appmsg)

也就是：

![$g_{11}=a_1^2+a_2^2+\cdots+a_m^2=\|v_1\|^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t32ELkSXBRBNw3z6C0iagKhibGiauTwYEic2UfyqwhUWfRrfTpF0F0laTuQ/640?wx_fmt=png&from=appmsg)

**这就是为什么对角线是“长度平方”**：因为自己跟自己点乘，就是“每个点自己乘自己，再求和”。

  

* * *

## 3）同理，右上角那种“双色格子”是怎么来的？

比如第一行第三列那个格子（黄色行 × 青色列）：

![$g_{13}=v_1^T v_3$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tD23pI7aicDhh17jldQ2HoegBn3qlWOkQCQGttibibESxiaEbiagprFg9uibw/640?wx_fmt=png&from=appmsg)

如果

![$\begin{array}{c} v_3= \begin{bmatrix} c_1\\ c_2\\ c_3\\ \vdots\\ c_m \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tkiaX1WsmEYxBYAySEiaI2J3IXgicq6Lg83bp8Le0UEdYRAn4I1azJJu8Q/640?wx_fmt=png&from=appmsg)

那么：

![$\begin{array}{c} g_{13} = [a_1\ a_2\ a_3\ \cdots\ a_m] \begin{bmatrix} c_1\\ c_2\\ c_3\\ \vdots\\ c_m \end{bmatrix} = a_1c_1+a_2c_2+a_3c_3+\cdots+a_mc_m \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tloUtYOItSRbTfl16POWiaWXKnJRsfbZhvuRICpaCZ3JndBvVvcrJSicg/640?wx_fmt=png&from=appmsg)

你可以把它想成：

> **同一“高度”的点配对相乘（第 1 个点乘第 1 个点，第 2 个点乘第 2 个点……），最后把所有乘积加起来，塞进那个格子。**

图里用“双色”表示：这个格子来自“黄色那行的向量”和“青色那列的向量”的配对。

  

* * *

## 4）一句话把图讲透

-   左边：很多行 ![$v_i^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tDaDrPdtsdfrwdojpicDq86enO84KmAf6wzpHes57xRqickGmqmdzDICw/640?wx_fmt=png&from=appmsg)（每行很多“点”）
    
-   中间：很多列 ![$v_j$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tW357R0v59DPOOnr3V1NwMAd9wy7WjPzIvNQelJDFpribuPTj6rlvjDw/640?wx_fmt=png&from=appmsg)（每列很多“点”）
    
-   右边：每个格子 ![$g_{ij}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tSKmwy1iaTgNKQMWSZpNemg5SmarJgDFkeh3xboEHLnXzIlaJwUaEcicg/640?wx_fmt=png&from=appmsg)  **把这两串点逐点相乘再求和**：
    

![$g_{ij}=\sum_{k=1}^{m} v_{k i}\, v_{k j}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t0VicNCNU3o8nOLa1ZYvhD54K9OrAibibH3akgVXicmwPYT2clHIpn114NA/640?wx_fmt=png&from=appmsg)

下面我们来把第一行完全展开成“第1点×第1点 + 第2点×第2点 + ……”的形式，和图里的颜色位置一一对应。

“第一行”在图里就是：**最上面那条（黄色那条）行向量 ![v_1^T](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tNK6n0oJAMeLZtGSsktYicrd7WOd4rE4UMicvEWwHQvkEYKA5PXR15V1w/640?wx_fmt=png&from=appmsg)** ，去和中间矩阵 A 的**每一列**依次“点乘”，得到右侧 Gram 矩阵的**第一行**。

* * *

## 1）先把第一行写成公式：第一行 = v1 和所有列两两内积

设

![$A=[v_1\ v_2\ \cdots\ v_n],\quad G=A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tnDlnb8lyEDVdMibSF4SP5udnT2jLGWJba67zqDX7M1kYv3A0lwMZeicQ/640?wx_fmt=png&from=appmsg)

那么 Gram 矩阵第一行就是：

![$G_{1,:}= \big[ v_1^T v_1,\; v_1^T v_2,\; \dots,\; v_1^T v_n \big]$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t2uRicMbNG0KgVu8rP634pquZxtCx2oficLL2Te7t3W8tlEhGFric034cw/640?wx_fmt=png&from=appmsg)

也就是：

-   第 1 个格子：![$g_{11}=v_1\cdot v_1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tb1icVFbufD58PqB2AILzkEeTQR2FvkaRcbbwtyyOSxia6hzZBfibLcIMw/640?wx_fmt=png&from=appmsg)
    
-   第 2 个格子：![$g_{12}=v_1\cdot v_2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tia1oldia1POurtYVKDIqHs4fVribXnCWxFYG6sonFzGxO5ia1tNhK0S2mQ/640?wx_fmt=png&from=appmsg)
    
-   …
    
-   第 n 个格子：![$g_{1n}=v_1\cdot v_n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tgrpE3fxjJxOcoPx0uHMp0EEic2gM78p6tt6bBibBficIKUCRNXOGhibykw/640?wx_fmt=png&from=appmsg)
    

  

* * *

## 2）把“点最多”的意思展开：每个格子都是“一长串点逐个相乘再相加”

假设每个向量有 m 个分量（图里黑点很多 + 省略号）：

![$\begin{array}{c} v_1=\begin{bmatrix}a_1\\a_2\\\vdots\\a_m\end{bmatrix},\quad v_j=\begin{bmatrix}b_{1j}\\b_{2j}\\\vdots\\b_{mj}\end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5thexnyWfs1JlBLSBzZt0U7gQia7uicEstkwGSMzILezXDk4K4fBicKYnicg/640?wx_fmt=png&from=appmsg)

那么第一行第 j 列的格子：

![$g_{1j}=v_1^T v_j = a_1 b_{1j}+a_2 b_{2j}+\cdots+a_m b_{mj} =\sum_{k=1}^m a_k\, b_{kj}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5t7DqDTWVqSSnlRICLMRWKGticKMfEO2bPdVo9bicAzqTst4iaoaqiawdnTQ/640?wx_fmt=png&from=appmsg)

这句话对应图里的动作就是：

> **黄色那一行的第 1 个点 × 第 j 列的第 1 个点**  
> **\+ 黄色那一行的第 2 个点 × 第 j 列的第 2 个点**  
> **\+ …（一直配对到最后一个点）**

* * *

##   

## 3）第一行里最特殊的那个格子：第一个 g11

第一行第一个格子（黄色×黄色）：

![$g_{11}=v_1^T v_1 = a_1^2+a_2^2+\cdots+a_m^2=\|v_1\|^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tLmzcts5n5LjQTcKCwxJVmjViaxzKx4vg5d9rEBh1YaYAJTYA1jfGjpQ/640?wx_fmt=png&from=appmsg)

所以第一行的第一个格子永远是“黄色向量的长度平方”，通常也会是这一行里最“显眼/大”的值之一（图上常用更强的视觉强调来画对角线）。

* * *

##   

## 4）用 3 个点做一个“微缩版”，你会秒懂第一行怎么填

把“很多点”先缩成 3 个点（只是演示规则）：

![$v_1=[a_1,a_2,a_3]^T,\; v_2=[b_1,b_2,b_3]^T,\; v_3=[c_1,c_2,c_3]^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tMlg0I7OnQtZEPKxgBhiaZanx6KBFSzFPricLia1klDwic4Wwcs1RbKoRfg/640?wx_fmt=png&from=appmsg)

那么第一行就是：

![$[g_{11},g_{12},g_{13}] = [a_1^2+a_2^2+a_3^2,\; a_1b_1+a_2b_2+a_3b_3,\; a_1c_1+a_2c_2+a_3c_3]$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tr1uwASOx0ic5v1NfialU2v5tUh53icu6zfftvticyNiad9CCgzD2zYzVPysxXHCwqDFcPIObGN5ochutg/640?wx_fmt=png&from=appmsg)

把 3 换成 m，就是图里“点最多”的真实情况。

#### **注意点（避免坑）**

-   Gram矩阵总是方形、对称、正半定（数学上保证它“稳定”）。
    
-   如果向量是归一化的（长度1），它就类似相关系数矩阵（-1到1）。
    
-   在编程中，用NumPy超简单：G = np.dot(V.T, V)。