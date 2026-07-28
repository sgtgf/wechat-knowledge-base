# Jacobi（雅可比）迭代法


> 原文地址: [https://mp.weixin.qq.com/s/Fox1ikBEwcnRr5ZCjMjjDQ](https://mp.weixin.qq.com/s/Fox1ikBEwcnRr5ZCjMjjDQ)

#  ![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvSAQLrz9uCdcxK8cBz3jiaGQSlh38a2PGqBbsia1zoYtPZBBqxtuiccgt2a3G6pQUdlsU7EibpBHbVvjWmNsHZPol4gcOaBxYiaHh4/640?wx_fmt=png&from=appmsg)  
编辑

我先根据图片把 Jacobi 线性迭代的“从 Ax=b 到迭代公式”的推导走一遍，再解释它为什么会收敛/何时会发散，并给一个小例子把公式落到实处。

这张图在讲 **Jacobi（雅可比）迭代法**：要解线性方程组

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocuU4qAv7hXFIXYMDeWTicky0ohPud8wD1uwn8ggOKKnIJtriaHicJbPHwp6n0kWTCldhVuWKPcKKdlwHoQ4k3D5EjRlvOodkjsEfw/640?wx_fmt=png&from=appmsg)

它属于“**线性迭代（stationary linear iteration）**”的一类：把求解 Ax=b 变成一个固定点迭代

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocs21JrXvOxNo1hdDelbuvyVJdhoeYOE8BlhnJiaUUWxMg7IfbibzhxCWNpD4PBfiaLfuUUD6Nk4FEL8j12icwLn8DUicZZ1ibFNNhE7Q/640?wx_fmt=png&from=appmsg)

其中 B,c 由 A,b 构造出来。

  

* * *

## 1) 线性迭代的通用公式：矩阵分裂（splitting）

把 A 拆成

## A=M−N

其中 M 选得“容易求解”（比如对角矩阵或三角矩阵）。原方程

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooct5WxTJ4b5adYfJPAD1Wflkwk7YKNoCYuLVdckI88vRiaiaDqlDdfyicibTLKFzDhzPnFAJdTJicJWaMQDV9apZAvJrBlgGpDaQyIicA/640?wx_fmt=png&from=appmsg)

移项得

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvQibibRscrUmUcicoAWPPibQat7Fu8Gciadfbewfpe0Q1FLuoX08YLP1reD8eknHMYIfMS4P0OOHW65m9VVHXPHOsDPVSCPTbH5hJM/640?wx_fmt=png&from=appmsg)

  

## (1.1) 先做纯代数变形（没有 k）

前提：M **可逆**（否则 ![$M^{-1}$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocsuniccVAWYht4wZWhdnu2YGAFJxaSdTL02gsSKKwGEc1lStsGl1Bc6wNp1kAEpcvl2gCNlicwToUCRMKBbAxesYq5z0jRQgzpibI/640?wx_fmt=png&from=appmsg) 不存在）。

对等式两边左乘 ![M^{-1}](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocuLNujoPoScvr9ic1JmTcYFgicBICianjkou2pW9Nu3joqDaZhjFnkjcmhbMibd2KWwicG9TbDib4BeUagIBeXiazXjLN7S72cNVY487c/640?wx_fmt=png&from=appmsg)：

![$M^{-1}(Mx) = M^{-1}(Nx + b)$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocu9WNEMbcMC6xr7X86qOc5CBBhBLjtDia14Q9ojrvEhKnkmHxyKVdIoux6L15Diad5VUJicpJM9Cqy1tCuzNy03OrgUMH1ND5QJ4w/640?wx_fmt=png&from=appmsg)

左边 ![$M^{-1}M=I$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctevuNLaNhEqcnOswNAHHMgxuFPEiawYogcE0tPVfXKm5Sxb5ib86ML3FMFmibCA7QLkERiajZChMAgAOOYNX44IicMiaicpmR3h66ibC0/640?wx_fmt=png&from=appmsg)，所以

![$x = M^{-1}N x + M^{-1}b$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvck8jG69Yg3jO0kibjl5V4IN1FrwT8rDP71yB9gvHcNJ5QPqmiaFdjMTeu1lVVydBvDIep68QpOrw5YSSHWNqtfDMlvpe7TgIu4/640?wx_fmt=png&from=appmsg)

把它写成“固定点”形式：

![$x = F(x),\quad \text{}F(x)=M^{-1}Nx + M^{-1}b$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctjnoibWIyLG8Yiccj1YUeSlPtYoy48xZSQ138dOclmcUvzaSanvslXL2fGEg481iaRIlaNrcc1ISiaNZBr6ZAHa4SXHsBPicyVVb1s/640?wx_fmt=png&from=appmsg)

到这里为止，还是同一个方程的等价写法，并没有“迭代”。

  

* * *

## (1.2) 再把固定点方程变成迭代（引入 k）

固定点方程 x=F(x) 的经典求解方式是：  
从一个初值 ![$x^{(0)}$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvJwExlx5xQ24BaicmicXZOvpkPwbbo6OAfLiccQPYxGaPObRsWte1HbbDn0BI1eDOiaoNbHPmeFicH4ibXyc7nRgG95ZvPibicYCLToLg/640?wx_fmt=png&from=appmsg) 出发，不断做

![$x^{(k+1)} = F\big(x^{(k)}\big)$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocsRLaBck1wVllVibSmotXaEF15wFdu3W1jz3Q5CepUoRpicG8JD3tsdWzI5P7a1SEOk3pz5HN0mAk1t0Kubicxgm6fHDiaNaN63Y1Q/640?wx_fmt=png&from=appmsg)

把上面的 F(x) 代进去：

![$x^{(k+1)} = M^{-1}N x^{(k)} + M^{-1}b$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocto379BBmU6PFWD7m5JjTcxsqyxyAib48rUrH8LkLWj8N8RupBAG2SS8jIEwFVYaSCQyrzzXEBym26DHfDu2PTk2AFGIueLcVO4/640?wx_fmt=png&from=appmsg)

所以

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctdnv3ZMfu7dWv5OXvAaTCn1fPnk17LLiclqFUlDM5HHVpkONQ9QsZYo54ysAlltqxf3EpsqoVicqudRibibpVibFf4icdwNvWN2v0aY/640?wx_fmt=png&from=appmsg)

这就是迭代公式。

  

* * *

## (1.3) 直觉：为什么可以这么做？

-   原式 Mx=Nx+b 的意思是：真解 ![$x^*$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocucjKfuvIxJc1URhlLE2xxZB9sWWueFicjXyOA6ia7S1EDMxUuYyfFVRTicnuFL4oWQ4OkFfsmfia3TDa86B5DMbHjx9LibVia3vIfPE/640?wx_fmt=png&from=appmsg) 同时满足
    
    ![$x^* = M^{-1}N x^* + M^{-1}b$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctzwSCT6kxdahe6cEEiaeRRqPhng2cfO4tZ3Kib4zoFLs6Vt4Rythsxy0AxzAgM7VNoicYgwgMQ3ptrcBd6o98ibG9NaJ6ia3RjXano/640?wx_fmt=png&from=appmsg)
    
-   迭代的意思是：我先随便猜一个 ![$x^{(0)}$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocsGzLPUQPq782ZJ2FiaE9IRhjNC0qjANOE1gVqukntX8IC35AwpSuJurP3am0JUWcbYpA2MylkEAxicRySib2Bma1jLsN9u7EeYqs/640?wx_fmt=png&from=appmsg)，把它塞到右边算出一个新值 ![$x^{(1)}$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocshiaGHTqzkrYwlSurgqyicmCeMynnPZU4T24p9YhiajCgxElS2FibibMHwBLfDgm1Z7foPnEfRiaX2XbSNM750oeicZ4Mwkx1QtVsuCE/640?wx_fmt=png&from=appmsg)，再把 ![$x^{(1)}$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocu5B7Voo7YonfXIpNYsa1j0MU3V9lrKGdRzANDWsm6rjTOickUINneFxLCqK2LgsBXpzffJI9C1iaNFCiaI0Qvh4RM17X8hPYDRD8/640?wx_fmt=png&from=appmsg) 塞进去算 ![$x^{(2)}$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocstk9eJUjWFqd5aQT2WBeFjl2t0G8Z8c7CjKTQUIiaIAuOiaI2W1DZnyEtx167JLwE8yOHxFbITP1QB5ynwDP0Hqr7UHxCdWdono/640?wx_fmt=png&from=appmsg)…
    
-   如果这个映射 F 有“收缩”性质（本质上对应 ![$\rho(M^{-1}N)<1$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvJUclmDDzMmNzOF20LWcNboBfbXWD0IFoC087wgE6OB6smTGibWlcDrXzNDftWFu2GQfuawNsGCheyHelwuJN88hicy53Mo7T0w/640?wx_fmt=png&from=appmsg)），就会越算越接近固定点 ![x^*](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvIOTyuurWvsxyUvEPibNxa88icrvoYsibiaa8u9JhnQ4GfpK2Q43empM3RGImfNguiadGAZMUPx14NtWD35GGHFlE8QibGnaicJyqMYU/640?wx_fmt=png&from=appmsg)。
    

  

* * *

## (1.4) 一句话总结

-   Mx=Nx+b **左乘**  ![$M^{-1}$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocsTibVluA5PHvPfsSuwcic6D39kqgdibY04Sqf7zEvpv9juTEefNMJsFDn2q8tnJc92M99UZoAgq07UWuEBpqFTsy6saoGQib7ghlM/640?wx_fmt=png&from=appmsg) 得到固定点形式 ![x=M^{-1}Nx+M^{-1}b](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocv7K50oxst1S0h436h6VMNX8sYA9jo3Iicxc2KHrsYiaBvZeuf8ntjTjReWrB1vIWicklw0eibePXQr3rxx5KaJqmRdXQkHROJco2s/640?wx_fmt=png&from=appmsg)；
    
-   再用固定点迭代用旧的 ![$x^{(k)}$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvg7xyksjLIIibWrW49KBRE73CpZLwy0I1icReDzRNOpbL25VOCtG838RvRpVVEJRicuhxEJ7Z4lZ5hnibrbezL0wbZAg88zqCkrks/640?wx_fmt=png&from=appmsg) 代入右边生成新的 ![x^{(k+1)}](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocuTr3W6Ia7iaQCYIv3juoJUxEHEqk7icnwPhnyiaqh1Bpj6Fv4ngNlrkyQ7xrAiafNd4GuGjpIjHBGHHZygCurz3oeA5x2TDNDU7nc/640?wx_fmt=png&from=appmsg)：
    
    ![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctqLOvrUu9iaCbn8zW68KWsibQxKuE4628wJrjwG0wOHMibV9OmmOx7kbR96ZicN99FVPAqVrqvqCcUvfHiadGJGGVtKY6UaoFc2t4M/640?wx_fmt=png&from=appmsg)
    

这就是“线性迭代及其公式”的核心：**选一个好解的 M，把难点挪到右边，用上一步的 ![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctJYbL1CM9RRgibxcLfjhU1xuPMFRWLM2dNwxibzVMJoPicK27v5qDtdhQuppibZyEC8FMX1yybH999QGOKlrGf3kAMtRA6owNZgbk/640?wx_fmt=png&from=appmsg) 去近似。**

* * *

## 2) Jacobi 迭代：用对角线当 M

把 A 分成对角 + 非对角：

## A=D+(L+U)

-   D：对角部分（只保留 ![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocuLNODRnic8zMeIe0fQwfib7kgEc2MfR92GtyzLX2P5OeRus1v2xZNynwF39QC0icNibZBtoic6gibS15gLeTJCz3Iic1TNE1qSibDSj2c/640?wx_fmt=png&from=appmsg)）
    
-   L：严格下三角
    
-   U：严格上三角
    

Jacobi 的选择是：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvBiamohwcBnIyd3tTNJdMA2SmRIptHGJIfq4h05qUaDXFqnG5LTzM6dobBjY9W7pr1jFRZf1woYYN1tBmjqoEdOtg1orMJmrjE/640?wx_fmt=png&from=appmsg)

代入通用公式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocsSFasjZ1xsACgvJMm7gloqt5oicmIYNYx0A539TXpNaYKDr5DI5xfVvx0Mpt5YHxw1V8SalBxzdtib5TAAbGmkibz0LalWs4XCb0/640?wx_fmt=png&from=appmsg)

也常写成

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctNDypyxOIFqwmFAyHn5SOmUUOh21Hr3DibXpCM6jGtY9LZlZABEiat8oLXEhOWLXUAsqxJ9buCHiaRicCiaHbB4MABzFrsCibx2NL0c/640?wx_fmt=png&from=appmsg)

### 分量形式（最直观、也最像“按行更新”）

从第 i 行方程

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctibVyP9X46XeibkWCXUYZxXicj6PkG6EJwGfUFhE3qJg6GSnxOu6waiav9NWUIbtYha96EFh5Au2cZfYNUlHYWNp8PBWC6m0iaO8vQ/640?wx_fmt=png&from=appmsg)

这个求和展开就是：

![$a_{i1}x_1+a_{i2}x_2+\cdots+a_{ii}x_i+\cdots+a_{in}x_n=b_i$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocsLSW5ysc0jTMXLe7tJxFRcPYdicH1jeXvETptUOMC4ay9X5Q9WjVA3Mib4jLiaLYXMic3bb7vKiahwuQXf4Wc8iaxJkbQqQaKKEA48w/640?wx_fmt=png&from=appmsg)

现在把**“中间那一项”** ![$a_{ii}x_i$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocs8DGauwZwqRLUwk1Akr5uHLQF8LolCCzgIYa4MmBQcfE4V9RPSJEOZsYaaGpV6kQmmZkQEkKsrKKyh1fNJv5icrUzUJhn2TibE0/640?wx_fmt=png&from=appmsg) 单独写出来，其它所有项仍然放在一起：

![$a_{ii}x_i+\Bigl(a_{i1}x_1+\cdots+a_{i,i-1}x_{i-1}+a_{i,i+1}x_{i+1}+\cdots+a_{in}x_n\Bigr)=b_i$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvZrdWqEMT253VOTAJncuoej43yTLIoSVhEvjbDsdoCQ8X5tib5nCTPJQiaPbauuHYOsSMp2jibOVTVCzJ1FlLv4L7ZeP4ibDFIZMs/640?wx_fmt=png&from=appmsg)

括号里这一堆，正是“所有 j≠i 的项”。所以可写成：

![$a_{ii}x_i+\sum_{j\ne i} a_{ij}x_j=b_i$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocsByC6WBNB1VlR1wSpr3lvtkxuIPS8StLcfO8FHQY4HLIpq711orCuOlszfM9Ib6Cj7ibFVwIArPuPL0mHpBxlq2ecFj7cj5sUU/640?wx_fmt=png&from=appmsg)

> 关键等价关系：
> 
> ![$\sum_{j=1}^n a_{ij}x_j = a_{ii}x_i+\sum_{j\ne i} a_{ij}x_j$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctLpO6HAI8MOQCPwtR59sUCdPk6soRQgODU66Xn6kCcOFEzMdD7SDaG1wNfqDdPh4LvT9ogOpbUoWdCE0D50bDicqT3lcwsRdiaw/640?wx_fmt=png&from=appmsg)
> 
> 因为左边包含所有项，右边就是把其中一项（j=i）拆出来。

把 ![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocsicWScibHyIyPQCeiaGibqXX6aSrM94tPQ28C9UuXKJLMebHYkNpPPaXgfxmHibcibe5jDeMYFcJqHPqfDODJlh1N6fIznFj5077xic8/640?wx_fmt=png&from=appmsg)单独拎出来：

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocuzKeGnuJhxKLUHkpBMtMSbXWyY0VcBSxMAIWyUf7XVSD82er0flctms4oHBNS2tguEFm6DFTt5oPuc1gicU3rnY0gxDudLAL48/640?wx_fmt=png&from=appmsg)

于是 Jacobi 的更新是

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocs7Gsn7ZpPXESX7GQt8ibpKoBDFxHGYjmaBGPFFsibHT8eRqDibF1OiaRU0xGkZkQia4o2gwovtScD9JOJkAntibuWR5qHvBu3WH8IibY/640?wx_fmt=png&from=appmsg)

注意：右边 **全部用旧迭代 k 的值**（这是 Jacobi 的特征）。

  

* * *

## 3) 为什么叫“迭代”？误差传播公式一眼看懂

设真解为 ![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvCeo1cujVKEt2wG2zBgZn2GS0USn338EUn92hhKd6Rmrf8EFMXib5ia2dmGWKyxrXIugSARVicbvsaib2sUTb2ZkqndG6vyY05fVc/640?wx_fmt=png&from=appmsg)，误差 ![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvt3h9icoaFBgWSXicJQpJcG25EvOcjsXGzTqQpNHrWlbxjbf4icCHCa3kNzGz0bP2hpicrlv44l3Tw03z6gBF3bEyB3bJeXiciagmk4/640?wx_fmt=png&from=appmsg)。由

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocupdK4IW0VZqNZt60VmfQC3zSUde70x9dtcEf5CFZsN5byDiaKUD7Pfpqyyg9xTR7D4RcHib1dZ7tibwk0BTRJtwdhtfwVqtENUbE/640?wx_fmt=png&from=appmsg)

相减得

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvsEGAljI2nd6S5XbHOAm3puUsQp2mibQZAz8Usw0IeYqfahqeUMibPKYXxMGsyckxrrs0t6TNs4bqdwBRsXU3VB0fb74viaVMOGM/640?wx_fmt=png&from=appmsg)

再迭代：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocu5JyJ9SMFQYCKeRLKUs5nQBwwOrQBLMjthtibXficBgLsqPsaL9iajNfo1afJUfFLR3ib7hibgoxba5qSxGajAL9DhN8u4RO1dPH1s/640?wx_fmt=png&from=appmsg)

所以收敛（误差趋于 0）的关键就是：![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocthmofspZ0NOqoe4tic8CNZnDoCc2nwibxdYIr5KvGPGzy6OLgdmZPQuyBpyzJ2kYw1rFXv5iczF10OtSgCyImx9ZW12BOLyNQq2c/640?wx_fmt=png&from=appmsg) **会不会趋于 0**。

#   

# 推导过程：

## (3.1) 定义“真解”和“误差”

-   设线性方程组 Ax=b 的真解是 ![x^*](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctB8NwViaW8Oqibx6ueRXNtFl5IZyEWL9nficq5BFfMObYCiapQ2WUzmlhZe8zcp0f0HgibheQ1OJ8ic7jSticjAuaddgqU7Nibib9naX20/640?wx_fmt=png&from=appmsg)（假设存在且唯一）。
    
-   定义第 k 步的误差：
    

![$e^{(k)} = x^{(k)} - x^*$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocubibvWI6JNZDgTtqsAz3xtALsg1dOah2mDG2UypeY0YHqvib86voT5znqLiacWwwRBYq3NmibP0kibbXv6XicRmQQNbAGtc0bO0hXWk/640?wx_fmt=png&from=appmsg)

  

* * *

## (3.2) 关键：真解 ![x^*](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctyOe2uFaHnDTzgzebREGPf2wnux2kv3uRXIvfiaG1c0sfdM7In6CrIXCoIzn0xpSXblVm4ENOECWT2ZjCWciaGnXFAMhQPPOvVM/640?wx_fmt=png&from=appmsg) 也满足同一个固定点方程

为什么？因为迭代式是从原方程推出来的固定点形式。

![$x = Bx + c$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvUa7j3Q19dX1tE0ialOeQFBLzx4VcO2CFibepzibmDHDkxL67qgqnj2etia32Hyf61SGlMIHX1PeRy84LricEdicvdPkRsVzIofMGNc/640?wx_fmt=png&from=appmsg)

既然 ![x^*](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctnI2X8yXtYheMheYMmK6JZRfjUKDicAFujB8uw7DIiazQh9XUZFTBc7tr8WYj7qdYr1nfHWRblOKkpmCZXpOyWzQfpkY6U3lEsU/640?wx_fmt=png&from=appmsg) 是原方程的解，它当然也满足这条等价关系：

![$x^* = Bx^* + c$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocuibUia7k2F9o4gL7PHPa5BHOFic3VXywNTAbicyhP4OvkJCLRGaUiaibSENXEk5X3JyQj1cB6JVJhlbg3IL5xZQhGymIkWrOUYzbZxM/640?wx_fmt=png&from=appmsg)

> 这一步特别重要：**“真解”是映射 F(x)=Bx+c 的固定点**。

* * *

##   

## (3.3) 两条式子相减：得到误差传播

现在我们有两条式子：

(1) 迭代一步：

![$x^{(k+1)} = Bx^{(k)} + c$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctKnv79Dian8LRrvEaMicFibkq3P9mq9CRx4poxj6C6vFlEl1SibLQMnoziaqemMymrfAsUc5XOKianiaqQdpAE7r2mPGyTvO7xOOo8aU/640?wx_fmt=png&from=appmsg)

(2) 真解固定点：

![$x^* = Bx^* + c$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctuHDNSjA5ePP8ufkqeXdicNXRaH3Ty0LZsPs7qU20zgz73KSlha6ImMwl0IicHLpWjicM7iavNQY7wfNAWdbOQWUZjoT3v4B6PiaQc/640?wx_fmt=png&from=appmsg)

把 (2) 从 (1) 里减掉（左边减左边，右边减右边）：

![$x^{(k+1)} - x^* = \big(Bx^{(k)} + c\big) - \big(Bx^* + c\big)$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocsm44w55I7bAFicZNxo7nB9gH7PorPoCby1lAN228dmNAWmukbb7CkZ5WejiavPs4Y7ncPWI6EQsGZppLXiaLPglxx8eLQP8YNXEk/640?wx_fmt=png&from=appmsg)

右边 +c 和 −c 抵消：

![$x^{(k+1)} - x^* = Bx^{(k)} - Bx^*$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocufR3Cwe3GbP5N18tDWy0YXyfsITqBr56jibibtEkyDJucyR7gSLeYISkjsyruIFLKl6Ca7KDZMWVK9eCwtO7BBf6fPdhJibR0VhA/640?wx_fmt=png&from=appmsg)

把 B 提出来（线性性）：

![$x^{(k+1)} - x^* = B\big(x^{(k)} - x^*\big)$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocs1BvpMAfCZvapHCSYxia9fKCL31JVbMQOVZneLDpaQBNZEr44B9cVVw49vv115diac3ujaBldohibMLQMicvuyiaJ2AOu0JjkWsp3Y/640?wx_fmt=png&from=appmsg)

根据误差定义 ![$e^{(k)}=x^{(k)}-x^*$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctUo19scJNKMxP9XABvSPO7Ij2oibGmfvudwHQ2u4GibvP9gh4mfibgZ4RRcnChZLJYBNdMH7zjlGomBmAZqdrfvsb7vv6hJo0n0A/640?wx_fmt=png&from=appmsg)，立刻得到：

![$e^{(k+1)} = B e^{(k)}$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocuhWv1IsGpWrU378QociaC84mSicFD6jFM03ia79iciaXDI2L6EyT30K9iaEvcNhHgibavHEkP2ibTRBX6S4d1E9ESJZhxUWvFD7pgibtb8/640?wx_fmt=png&from=appmsg)

这就是误差传播公式。

  

* * *

## (3.4) 再迭代一次，就能看到“为什么看 ![$B^k$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocuECyLiaUiaW2mQjX8Tvpn7LW9TBPhqLI4lCNXnWEeyZxu5DoF1n4Fg8sAuCibtGgkbzsPtRGoZIIibp3stZN8ibdklxQzX5S1uObnE/640?wx_fmt=png&from=appmsg)”

由

![$e^{(k+1)} = Be^{(k)}$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocuJHnDhfJib9ibg9Dx4fTd3W96ibFxuQwbXIg0y0vvGVsPePL6qQWbSITNiczufxp7b6NjPiaaAEPZ5xGsjnibsT83sQ0nnDzH1Qpghg/640?wx_fmt=png&from=appmsg)

继续往前推：

-   ![$e^{(1)} = Be^{(0)}$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocsB26H2SwK9tg6UgrYOyWmEwr9E0HRzI8IrhibKypsyX8klmDBlwfcECNDwwtibI0xn5j70TkWvvmKBxQHHjyLAOY9oXdEJI6zBQ/640?wx_fmt=png&from=appmsg)
    
-   ![$e^{(2)} = Be^{(1)} = B(Be^{(0)}) = B^2 e^{(0)}$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocsdlcibl4Uic6ic9fr1SdqmhticCamvaeCg47pOiaT6My4byK0bc7icRMhAqwyfZFaykrEsHr2pWdzXe0kFhDFicI3VNicduBSDVmBJ0qo/640?wx_fmt=png&from=appmsg)
    
-   ![$e^{(3)} = Be^{(2)} = B^3 e^{(0)}$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvgAAzHbqlcicR3Innnibz4KO662VP1zicYuVdBwPicrPETG8s051w6I2ndpeuyYaQPrYkRloP8oaDfx6n4nr3PZKicKvMia8smASemU/640?wx_fmt=png&from=appmsg)
    

归纳可得：

![$e^{(k)} = B^k e^{(0)}$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvRjUUUibVzdjv1BH9qIu59eMbgBwHMf5yZyGcDZfTLpgSbKmRfIbFzMOToBUkTsMRkWwDRRibPSWog0ibdtaicBkJetTazI4VUPvw/640?wx_fmt=png&from=appmsg)

所以：

-   如果 ![$B^k\to 0$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvcAXiadGIvGbib2jz0qXbECKC6ql2omRugLFCibDpgdiaQD9Bru1QfTISiaB1pGHpO3A3JvdPwVic9ViatESUdZGXV2K6tb1P9zzW1II/640?wx_fmt=png&from=appmsg)，误差就 →0，迭代收敛；
    
-   如果 ![$B^k$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocsoId2Ntv49A4RM45yDB2EE9RUkUoYsh4ojPsD4xFrjjhL6Mia3Bib5icZgDoOfohA4ja1JFpF1vgM0ZmHMNdfOHYhvtUq8dzyU4I/640?wx_fmt=png&from=appmsg) 不趋于 0，误差不会消失，迭代不收敛。
    

* * *

##   

## 4) 收敛判据：谱半径（和 ρ(A)强相关）

 ![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctIBWwzQpfIe6ENQicdDno4Gyq3C5thr5xUMawHnZQF4Kyjz4wNNfd8xfZYH5Ajr7Aiax0dM2iapEJicSujIybJibf97Mib76UY3IeZs/640?wx_fmt=png&from=appmsg)

收敛到唯一固定点的经典条件是：ρ(B)<1， 其中

# ![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocu1HkSthNakr2HzTPQ6C8pUpv3AOYMzf8EEC9Duc2dibP10DHtbcPmicBIcoiazBPUUkbzyXvk2qFPOt2NZOhMibp3OIOqXo4ibs0Gc/640?wx_fmt=png&from=appmsg)

直觉上：B 的“放大因子”最大也得小于 1，误差才能越乘越小。

对 Jacobi 来说就是

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctr8PNKUFrbCInr0icQHs0Ez3omo6DDCmib6sIC5AubLKTfpo41zUbTQqvwq4Fmpf4DyzTFZYPibicbg8Jibdj1dyYaj7IMQ4sCqSiaE/640?wx_fmt=png&from=appmsg)

### 常见的“足够条件”（好用但不是必要条件）

如果 A **严格对角占优**：

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocuu8UVckQX7apDeTjLuia0wwhmEjibeqqpsUpgWcfv67EJJUrY84tTglR1t2H4oH8gtEWaX04NiaU59eqejmSibdZQONQsoLu21icCg/640?wx_fmt=png&from=appmsg)

则 Jacobi 一定收敛（并且通常收敛挺稳）。

* * *

##   

## 5) 一个 2×2 小例子，把公式落地

解

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctqORz2CTic2l53icLBEYNubUdYD4cVuXyAYx955FbNjoRtiaa9AWcYibqlDISdZNmCFzMlH5XQXuUfQwETdC4br2TGdwyBOa5o2QA/640?wx_fmt=png&from=appmsg)

## (5.1) 先把矩阵乘法展开成两条方程（逐行）

第一行：

![$4x_1 + 1x_2 = 1$](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocslnsWR2tiaTpzTEJ53Dmg9SWowDQiaafBuibZeYMmic54IfPichKFR5eicWJRibjWvy5ickwKKq4zlZ5K8ssDJ6MCOKDDaXrMXibRfdhC4/640?wx_fmt=png&from=appmsg)

第二行：

![$2x_1 + 3x_2 = 2$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocu0YBwNmDcBYCQzPj7bJfeia38gTUnSCGoBejS9pUe6eiakgrPMPD5XSQ0pEIpLjz9Aib53Qw0BoyTqsSSvvRB9WAbicAhENNYdMdo/640?wx_fmt=png&from=appmsg)

  

## (5.2) 每一行把“对角项”对应的未知量解出来

### 第1行解 x1

![$x_1 = \frac{1-x_2}{4}$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocs6ygyc9FBBMqnjuibwjOWlZNgKesLvoeFWS36WMYIjhCsl4lWZSxbbBUw0RS6wykT91vR1rlgyAOtsaiawnD6gpRyicXX5YbunSI/640?wx_fmt=png&from=appmsg)

### 第2行解 x2

![$x_2 = \frac{2-2x_1}{3}$](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctHFeY5nY0yrZmL1n3OBica3h8kcpKzuXqEPM3yQj7Uh1CtB0TZdicbKdqqSKLNMOjIzMDgbytt0YazGRO1FEF19u7JvILHiaC8wY/640?wx_fmt=png&from=appmsg)

##   

## (5.3) 变成 Jacobi 迭代：右边用旧值 k，左边生成新值 k+1

Jacobi 的规则：**第 k+1 步同时更新所有分量，但右边一律用第 k 步的旧值**。

所以把上面两条“解出来的形式”改写成：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctB47rfR0gjaBRb65O0icPMaibb7Dm3xicmhYsMUrf26pOUKNqLUeNNIoX6gR2O0LXRRwribO145icy4NJp9vZKAp03ONwpGbtU3j2U/640?wx_fmt=png&from=appmsg)

取初值

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctljb23ZlIdPC0aEdNtxgNibMFYUpGLGrCmXwicDu7lgiamzazWtNJcye9zxUJGonlZecrxrPurGoyVhKAoGDiczCsWFJCicvmXfNtk/640?wx_fmt=png&from=appmsg)：

-   k=0→1：![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvV6XfxlPslGictia9aSI1rYuiaJgNO6cCPGaPdtLPDqxeaUrMmt0uUy8cNwZFtzVxa1VTl7uKO5Oxoxpoy960PsiaVR9v6kXdCC14/640?wx_fmt=png&from=appmsg)
    
-   k=1→2：![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocutYLMBZ0b5rEyPVF6XPCwILcLlaMyzBDOXImxw1fNDYyy2tMsnlbNx9aSoHgtXbFX4iaUcvPoFJun0XSSFeX8suoiccSPeEaUr0/640?wx_fmt=png&from=appmsg)
    
-   k=2→3：![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocthUpUrdfpVcicYb25GIvXUgnjmy2IdIQ5caIUSlERhe3p6ZxDuTN9MniaqwjOUabJ526PelkF64iaDXIkYWEicfSEmtQmyibErsicEI/640?wx_fmt=png&from=appmsg)
    

会在真解附近来回“拉近”，逐步收敛。

* * *

##   

## 6) 线性迭代法家族（ Jacobi 只是其中一个）

同样从 A=D+L+U 出发：

-   Jacobi：用旧值更新（并行友好）
    
    ![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctDmOTsUV52QyGDsVdziaiawRkK65EcKhicFwAYQcricGTv9tIwWnCHZPBHOX0DuHicEpbnqCJFKF8QZibf76WibEZHPSU2kfwico5SbMY/640?wx_fmt=png&from=appmsg)
    
-   Gauss–Seidel：一更新就立刻用新值（通常更快）
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvYZ4yJiafBnbI6BRn23SvHBVszjQDficFmNT1ag2bkITqIdzZW33XNNjib4fknGrBOcNmwwJQaC5WU7EqsU8wiclf3ST1NZMzV6ws/640?wx_fmt=png&from=appmsg)
    
-   SOR（加松弛 ω\\omegaω）：在 GS 上再“加速/减速”
    
    ![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvHYfhKGiaPZoq5hjD3ictJXlS2rCbUTPz5mY5CvRjNJFNJGTNUTTeVK7FPvw2PuRDjQYdOdRUqw1dvtMFtLRXCUtSUFVZcic5qos/640?wx_fmt=png&from=appmsg)
    

  

它们本质都符合：  ![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvn0abIsSZxyCupWdyT6gnmXYBmiaqPRe9KPW229HicNPwleEvcwHTiaO58hKlDzFrCUjoMB31xc6ZHPZI2DPhGrY9LlYZZhGSplk/640?wx_fmt=png&from=appmsg) 以及收敛判据 ρ(B)<1。

  

那我就用一个 **3×3 的具体数值例子**把 Jacobi 线性迭代的“矩阵分裂 → 迭代矩阵 B → 谱半径 ρ(B) → 实际迭代过程”完整走一遍。

* * *

## 例子：解 Ax=b

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvjdHUqE3Jfzsfb6qn2qNpheic6Ezg0ZqiaEghsWzNh0riczAA4JKJG3Xmrybiaw6A1Hag6ElZIC8cV1HicEz1XnCNaWxrdqdTWQTaE/640?wx_fmt=png&from=appmsg)

先看一个常用的收敛“足够条件”——**严格对角占优**：

-   第1行：∣4∣>∣1∣+∣1∣=2
    
-   第2行：∣7∣>∣2∣+∣1∣=3
    
-   第3行：∣12∣>∣1∣+∣−3∣=4
    

所以 Jacobi 通常会收敛（这不是必要条件，但很实用）。

  

* * *

## 1) 矩阵分裂：A=D+L+U

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvsHeYoaTjBLYDGDdHhZPK7l5FZT7cyicpuMYBbPkK9ibS3LK25kHlicBiaSK5nY6N6WmVY1UTvlOmzON14eG0qm0ibfiaEicLkdkceiac/640?wx_fmt=png&from=appmsg)

* * *

##   

## 2) Jacobi 的迭代公式（矩阵形式）

Jacobi 取 M=D，于是

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvXShjfx4cdE233sm3eBIbmLsEzbfAOR4pLjiaGfsHNLt3DtibRz6Waops70VnZIuTPDicRjw7WtCvXq1Eicl6007M5jwGOs09gfu4/640?wx_fmt=png&from=appmsg)

写成标准“线性迭代”：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocuswOicacwOIdMaXgjtnXtqVyCux4zF2UCORad0HHPibcUwJrklpEQOB24cXKMNGl4ia3HTXD7IjbPyeRvibmnERP5kIKEB3icIeHk0/640?wx_fmt=png&from=appmsg)

其中

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocsaYxce00nq2CnpefIkp6RKR6qI7SopJWCwOibNRMw6ygAIPBeEoZqL8px7lnckXRqyicnchY4AIOjL3ASFD4jMIEicrIbzWgo1oo/640?wx_fmt=png&from=appmsg)

```

```

```
Python代码：
```

```
import numpy as npA = np.array([[4, 1, 1],              [2, 7, 1],              [1, -3, 12]])b = np.array([[7], [-1], [10]])D = np.diag(np.diag(A))L_plus_U = A - DD_inv = np.linalg.inv(D)B_J = -D_inv @ L_plus_Uc_J = D_inv @ bprint("B_J =")print(B_J)print("\nc_J =")print(c_J)
```

  

运行此代码会产生以下输出：

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocuAHyicdBwOrwSWqbljUiaicGyibroNf7uOYtUXUibwXciayiagjTGtZ1KU2WVn5picFW0np87piasR71L4T0bmiccO3zDCFqZSYRZOJ4iapQ/640?wx_fmt=png&from=appmsg)

  

* * *

##   

## 3) 收敛为什么看谱半径 ![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvfRT3ZYweSkOfS0H6MkERL3MtGKTYEbjmkhdibHQHPTXfPiaCoBYBNLdaqSibBiaVVJicwRjAaXUKiayBnfjaCf52gtNduknhroQ2Uk/640?wx_fmt=png&from=appmsg) 

误差 ![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocuEhOLHw8N05ekSlmvntzibaV74s1hbM55LicL70LMt7hoRmpWzZHe60Kekb5HECxSF308ZVHNhsEomHVscxDUHmlCUF882ln7nA/640?wx_fmt=png&from=appmsg) 满足

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocs1kAEZS0pjK5RofGxxYwYYZJDIf1rsWNe6niaASEdgKnapp5ygaq4IMvadCQcJajrcewtObKxvBv0qbicicdMKib8UlCzP654Iens/640?wx_fmt=png&from=appmsg)

所以只要 ![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctgGnb94tWlvcog3FoQiapQ9T0IFZ9uPI1Mhe7IhqwNzScCEBHia1bVvhqmIwaVTUuibxYN89V7H08WGZfpJgAPsqrBu5zm7o0kQg/640?wx_fmt=png&from=appmsg) 反复乘会“越来越小”，误差就会消失。这个“会不会越来越小”的核心指标就是：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctDBcAgxEJ7SibC3vpM89NyGfibSI6Y7f2XUcR1yJ3dZKWdeVMQBtB4y2NpGTmLl2iauJ5wPWDZ0O3LzY1Lc8ia0butj4JTH6JzGcI/640?wx_fmt=png&from=appmsg)

本例中 ![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvOxO1LsEI8HBkR9YOZ5PO6y63kxU7ZxXKXVlOa5S0Rzf8U9OqjvWVyVibBcefOlQcBJPvVrjx7j9Cbk8pPWxaNq5AToiabcaWXA/640?wx_fmt=png&from=appmsg) 的特征值约为

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocuGaBPHKhUWsKnnib4D5VhRibE75KdicK7FlYblDXvJ2gvMJTic8vyXAZTcgu5I2yZXRGZ0cS5P22EAjCRfubSbWtwdchH2jfKfwYM/640?wx_fmt=png&from=appmsg)

因此

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocsPicBOc9N6Q3PkflSEg1BMtlLOQbj81adibG2vV8tfDawVWbCqrCkpWksIHSvWoiaOSrqZnEyxvhglwAhszFU3KCiaOh3Ib0Q4AWs/640?wx_fmt=png&from=appmsg)

结论：**收敛**（而且因为谱半径不大，收敛会比较快）。

* * *

##   

## 4) 真正迭代几步看看（从 ![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRooctxTbzxyoQqibgY3WtIEicuAzAFMLc69uOEkq1h2ZkLzLicNHOD2eqtlK8hbc8Um1Ranhd8msc6QzryL2ic1eDJnia1zY2jtGGKoKYo/640?wx_fmt=png&from=appmsg) 开始）

Jacobi 分量公式就是（对应图片里的“按行解出每个 ![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocv5ESly7rwNYM8tpdxxhQx07YahEPwBblJ1ia0EiaAPQohxsiaPBZ720V4rFUpJdiarllOTUQPkTCc2udfEnlBEEibf8Pp3tXMibd8zo/640?wx_fmt=png&from=appmsg)”）：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvlSgiaEwUzzkP6kTMqgujvBo68KLL4rzOXVJxK3ApHVGsiaG2RHBsnG6LXFF1yWamvM9KkHZfFTx5dNlHKuErQ57Yf5lGNN7n8M/640?wx_fmt=png&from=appmsg)

迭代结果（四舍五入到 6 位）：

k

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocsjr4VIP69FIoEOjECG1uHFeAqJyFyRJefBPJibicHr3FQUKzZbf5YcicJiakicsIklyu40lLrGkndTuVxsjl4HP2NW4Z3TVfll3sUg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocualMA6j5vNEickzkfHTqYlOlwGibgK00hnQichcSEGkuFhuaDfFlSCA78YGbrzdmMscMg3oDboVNE9Z01bdoO3908XPLI7q3RycA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvJAnFXAoDtdRdzUtSPDzDEWolmqxbpRDkIJtsR1iaC6pricTxGv1kfnBC0Ct4jQTZ8e89MWyicKMzqusnM6UIXUEmaJic2sLBUTEQ/640?wx_fmt=png&from=appmsg)

0

0.000000

0.000000

0.000000

1

1.750000

\-0.142857

0.833333

2

1.577381

\-0.761905

0.651786

3

1.777530

\-0.686650

0.511409

4

1.793810

\-0.723781

0.513543

5

1.802559

\-0.728738

0.502904

6

1.806458

\-0.729718

0.500936

而这个方程组的真解是：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocsZdtUpcbwesr552tsML3I0rtRIibHQm2FZPianKLfVdIj6TnlUkKxxYiaJhqrDKibQgcyuPMV0fqNictwbZ7BOzyt0tm4oQpe2BuJE/640?wx_fmt=png&from=appmsg)

你会看到数值很快贴近。

  

在上篇文章《什么是矩阵的谱半径》中，出现了一个公式：

![x_{k+1} = A x_{k} \quad \Rightarrow \quad x_{k} = A^{k} x_{0}](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocuibm2UeAYVgTCTf4ibztH9w70Nia7gZVC0JrzTSsVMsAZgVOpxD9kESpAlY7mqh9HQK2lJeWk4K3wm4SeRogD0KaEDHLhJ9ia4ibm0/640?wx_fmt=png&from=appmsg)

**它是线性迭代（或线性动力系统）中一个非常重要且基础的特例公式**。它与我们之前讨论的通用形式紧密相关，其核心在于描述了一个**齐次**（没有常数项）的线性迭代过程。

### 1\. 公式解析

-   变量含义：
    

-    ![x_k](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocvjRPCFUaLQUmnObYwmAX3Iy8Zkm0SYM7xf5MmQZLZvibdLD2OlUn4ukotC59P3xTxFmVt3fSj3p5ibvLdJQEChD0YOkXBgYoe6k/640?wx_fmt=png&from=appmsg) 和 ![x_{k+1}](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocu91ia49rZ8qDUXdx4aG6ezBxYeYWm4HkrfAS6EKzOZv9MK2nic6mCicD8azwWoM246OibZSqsvKAsvibLW9TlkCQ2T2VPPCOY6AIU8/640?wx_fmt=png&from=appmsg) 是系统的**状态向量**，代表了在第 k 步和第 k+1 步时的状态。
    
-   A 是一个**方阵**，被称为**状态转移矩阵**或**系统矩阵**。它完全决定了系统如何从当前状态演化到下一步状态。
    
-   x0 是**初始状态向量**。
    
      
    

-   公式解释：
    

-   第一个等式 ![x_{k+1} = A x_k](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocukc8DAeYIasEWKZ14IhSf2zmJZLbpDia7QVRkyhSEuDdtzU34wvxUETeMMPrYm7hibS6a5HkPSlkaDcxPCp1QKiaUbGjTmE9pXcU/640?wx_fmt=png&from=appmsg) 是**迭代定义式**。它表示下一步的状态 ![x_{k+1}](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvedxTy1Ziaiav9zYMLyeFpg5AicP0MELxCwxMc8Ht67rgjicVshZFdbIibwOraufoqjIXniaIZkSxIIC5QPDJSibLCDw0P5WxnHKD1WM/640?wx_fmt=png&from=appmsg) 是由当前状态 ![x_{k}](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocujtDJsH2SZNhAkWIXOVicWMal2jwjtZTPMKnBIy6bQC17W9e0NicxicwRYNY1GFLGniaeQ2NWHibJWHMgwzCvj3KOnNCH1M2ibuLhfc/640?wx_fmt=png&from=appmsg) 左乘矩阵 A 得到的。
    
-   箭头推导出的第二个等式 ![x_k = A^k x_0](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocsficdE0RkDpk4pGtjtshiagrAdcFrN3cAg0V2aFK9wWBeU20C5pGEgoFv6uMtq7RSTjZNz6Hj8DNmftmAkyB7W7DLhiaghfUllQY/640?wx_fmt=png&from=appmsg) 是**解析解式**。它清晰地表明：\*\*经过 k 次迭代后的状态 ![x_k](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvm8HWPZicnnOnfS7qOZZF4LnOhv0PIVGhX8MicNzsnVzCHBEbWngia0I9nrCMUIFGEmDaVXAgEic6Hze4nkWHV8SpyibniaJhKuLHAc/640?wx_fmt=png&from=appmsg)，等价于将转移矩阵 A 自乘 k 次（即 ![A^k](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocvagwK8eN85akUBq2Ag2hO4abMBYuia2tvHuZkJJLaQozyOCYibVG604wibExwIx6cLDickESica8icw2uYOK3Ynr83ficFJJhyeXSicibU/640?wx_fmt=png&from=appmsg)）后，再作用于初始状态 x0。\*\* 这个公式将迭代过程“压缩”成了一个幂运算，是理论分析的关键。
    
      
    

### 2\. 与通用定义的关系

您之前看到的通用线性迭代公式为 ![\mathbf{x}^{(k+1)} = B \mathbf{x}^{(k)} + \mathbf{c}](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRooctfk6grC3twP1d764ehh2sVeU8upYA7EePYjAE27GSf0TkcxNb2TBzGIIoyL1hAAnutncBnURwRvhcibm0D6Pzfn6ib58apOAS1U/640?wx_fmt=png&from=appmsg)。

-   图片中的公式是上述通用形式在 **c=0（即没有外加常数项）时的特例**。此时，迭代矩阵 B 就是图中的矩阵 A。
    
-   这种齐次形式描述的是一种“自生”的系统演化，每一步的变化完全由当前状态和固定的变换规则 A 决定，没有外部输入或偏移。
    

**总结来说，此公式是齐次线性动力系统的核心迭代关系。**它通过 ![x_k = A^k x_0](https://mmbiz.qpic.cn/mmbiz_png/sVzeakRoocsxFuj1XkV8Pp6iaRJ9PYicxBETtfc4PQGaOlz2KKb95rFQxIVZFeA8UybLMXtZUlMnUx7t09v1VT3GJLXgwIzD1OyGfzpdu0ddE/640?wx_fmt=png&from=appmsg) 这一简洁形式，将系统状态直接与初始状态和矩阵的幂联系起来。而利用特征分解，我们可以深刻洞察该系统在不同方向上是如何被放大、衰减或维持的，这是分析系统稳定性、收敛性和长期行为的最强大工具之一。