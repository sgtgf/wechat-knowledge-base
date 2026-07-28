# SVD终极探奥


> 原文地址: [https://mp.weixin.qq.com/s/NrIFD2Ln6-FWqv7mxUGN5Q](https://mp.weixin.qq.com/s/NrIFD2Ln6-FWqv7mxUGN5Q)

![](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dNwVVZdSibFN4awxZSQueX24dXvX05QRrSncZQwA1GIDBwtbas5LTrAg/640?wx_fmt=png&from=appmsg)  
  

## **问：![V^T](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dajUvQugFRIeq6HAz3fLoicYLh4gN6gg7FeX6rmApjaBqpDiafIrICZJQ/640?wx_fmt=png&from=appmsg)为何叫做“右奇异向量”，而U叫做“左奇异向量”？**

因为它们**站在矩阵 A 的左右两边**，而且分别是两个“对称矩阵”的特征向量：

![$A = U\Sigma V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dU9UrRyTIiagibC28MmnnocleTLFDlibnTDsHfZxD2dHBmXLTUa2kQcRCA/640?wx_fmt=png&from=appmsg)

-   V 在右边（right side）➡️ 列向量 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 就叫 **右奇异向量**
    
-   U 在左边（left side）➡️ 列向量 ![u_i](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg) 就叫 **左奇异向量**
    

这只是名字的直观来源，但背后还有更本质的数学原因👇

其中：

-   U  是 ![$m \times m$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d8Ln5FekBxw9HGsM1WibNviaFqiabuo3w9ob48nkH0BwFmv1jgdA9ODibrA/640?wx_fmt=png&from=appmsg) 的正交矩阵（列向量 ![$u_1, \dots, u_m$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dkvfPjYZJlVEwb90iaACs1S5hROcjoo69Tk7BesibVBYRMAOjKRywqbfg/640?wx_fmt=png&from=appmsg) 为规范正交的左奇异向量）。
    
-   Σ  是 ![$m \times n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d5dMib8ibSCR80WA9mUeMe0dibRQUK3zeUictzPmMUia0S8HQDvibXqOQnKsg/640?wx_fmt=png&from=appmsg) 的对角矩阵，对角元素为非负奇异值 ![$\sigma_1 \geq \sigma_2 \geq \dots \geq \sigma_r > 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dsYYWrp3zP2ma7ndJKwtRSRlH0VMg9Pcg6JGB7NMzaqzcpfQcKhWaLg/640?wx_fmt=png&from=appmsg)（其中 r=rank(A)，其余为零）。
    
-   V 是 ![$n \times n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1UuTtGeM99oI1PL4XzVsaPm5VVDCYYYEISxYkrc5DxNsdWwnoYf81w/640?wx_fmt=png&from=appmsg) 的正交矩阵（列向量 ![$v_1, \dots, v_n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dlzvy7GGia74m4gHIwBQp7EeQErboj5hySUkndiaLvyH8bzsj8JML1ZuA/640?wx_fmt=png&from=appmsg) 为规范正交的右奇异向量）。
    

![](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6drffmdDPLXMkn3OCWryX5HQxUMM104P3N8n66uIL7TicTWmzlibWw8vMQ/640?wx_fmt=png&from=appmsg)  
  

 ![$A v_i = \sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx8hricMkxvia2zXvbGoyJLQ5aRLcVw6n16PnRcjlRBN02GibjSf6dkxYA/640?wx_fmt=png&from=appmsg) 的推导

1.  将两边右乘 V（因为 ![$V^T V = I$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6ddHOL3vF7ZIQqQicyltoRicQpfLeOB6AIjbK9AE6L8uyw5OalkSicOzK2w/640?wx_fmt=png&from=appmsg)，其中 ![I](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dgSn8a90LsXdF4fPQzexXCmicH4eOUnUwRAnGQrbcoGMG0bW0Via2e2oQ/640?wx_fmt=png&from=appmsg) 是单位矩阵），得到：
    
    ![$A V = U \Sigma$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d6b8rMg5d5awsZGFh7uLNI4oFScSHDyicdsA4u3yHfapWGqsPNE58YwA/640?wx_fmt=png&from=appmsg)
    
      这里 V  的列是 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg)，U 的列是 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg)，而 Σ  是对角的。
    
2.  考虑第  i 列（对于 i=1  到  r）：
    
    ![$A v_i = \sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx8hricMkxvia2zXvbGoyJLQ5aRLcVw6n16PnRcjlRBN02GibjSf6dkxYA/640?wx_fmt=png&from=appmsg)
    

-   AV 的第 i 列是 ![$A v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dId0pGic4nicptqjt0sgx6Df3ojLaQHGxdZBUuldZGsRasZmv2xBnskmQ/640?wx_fmt=png&from=appmsg)。
    
-   UΣ 的第  i 列是 U 的第  i 列乘以 Σ 的第 i  个对角元素，即 ![$\sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dwsnLIpnI1dHLpncJlavbAhEVEncLGECOZzKNNN5rnmGNxP7qMLKL2Q/640?wx_fmt=png&from=appmsg)。 因此：
    
      
    

这个推导非常直接，因为 SVD 的构造就是为了让 A 的右奇异向量 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 通过 A  映射到左奇异向量 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg) 的缩放版本（缩放因子为 ![$\sigma_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dQSKkKia740n8nuzYXZ2MRzPw6kfXOdiaYzCy0Jc8wYYL8SSdjQn2CwTg/640?wx_fmt=png&from=appmsg)）。

 ![$A^T u_i = \sigma_i v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dX0TMTMk9jQG7q02HgibqGwjIshba1kf0SvDpboKRIMWxyx4tWvQLUzg/640?wx_fmt=png&from=appmsg) 的推导

1.  将两边右乘 V （因为 ![$V^T V = I$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6ddHOL3vF7ZIQqQicyltoRicQpfLeOB6AIjbK9AE6L8uyw5OalkSicOzK2w/640?wx_fmt=png&from=appmsg)，得到 AV=UΣ）：
    
    ![$A v_i = \sigma_i u_i \quad $](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dhnplFm5Qx4liaK6qnDVEhCSfsJcvzdh3icXBuX5yVPZanb9wGXfVcNmA/640?wx_fmt=png&from=appmsg)（对于 i=1 到 r；这是伴随方程）
    
2.  现在，转置原 SVD 方程：
    
    ![$A^T = V \Sigma^T U^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dtc2HEWVPrR33SRR5KdhFotMlbp0edzOhYqCuc5XLzicoJdPWG0DjoCA/640?wx_fmt=png&from=appmsg)
    
      （注意：![\Sigma^T](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dERIfNT8L6ECHnwVWnFTv48dk6GiaJ1jGcwSWVjRTrMskSBZep9h4BLw/640?wx_fmt=png&from=appmsg)  是 n×m 的对角矩阵。）
    
3.  将两边右乘 U 因为 ![$U^T U = I$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6doE5Ku0OMRcqHPC9WB1Jl2WxkGYXpR97ltCYKs9G2YEbx2kYwINfA4A/640?wx_fmt=png&from=appmsg)，得到 ![$A^T U = V \Sigma^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d9qrOo5lmYHZ88o97ngjS53MMCmP35vTj6G2gm9001EOzawK4pLPmSA/640?wx_fmt=png&from=appmsg)）：
    
    ![$A^T u_i = \sigma_i v_i \quad $](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dX0TMTMk9jQG7q02HgibqGwjIshba1kf0SvDpboKRIMWxyx4tWvQLUzg/640?wx_fmt=png&from=appmsg)（对于 i=1 到 r）
    
      这是因为 ΣT 的第 i 列是 ![$\sigma_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dQSKkKia740n8nuzYXZ2MRzPw6kfXOdiaYzCy0Jc8wYYL8SSdjQn2CwTg/640?wx_fmt=png&from=appmsg) 乘以标准基向量，乘以 U  的第 i 列（即 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg)）会得到 ![$\sigma_i v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dhOg7vwICPs4mflxicT8fII6DPHTrIkgnTzlbXrLOBvIYQ0XicTHbVVxg/640?wx_fmt=png&from=appmsg)。
    

  

* * *

# 1）从分解位置看：V 在右，U 在左

把分解写开：

![$A = U\Sigma V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dU9UrRyTIiagibC28MmnnocleTLFDlibnTDsHfZxD2dHBmXLTUa2kQcRCA/640?wx_fmt=png&from=appmsg)

对任意向量 x：

![$Ax = U\Sigma V^T x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dibshc9ULicU1fq60e4x9RhLYWPbhVL0hfhLiccf1aTWdrGlMKh75pnXzw/640?wx_fmt=png&from=appmsg)

你看变换流程（跟上图完全一致）：

1.  先乘 ![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dajUvQugFRIeq6HAz3fLoicYLh4gN6gg7FeX6rmApjaBqpDiafIrICZJQ/640?wx_fmt=png&from=appmsg)：把输入坐标系旋转到 e1,e2
    
2.  再乘 Σ：沿轴拉伸
    
3.  最后乘 U：把结果旋转到输出方向
    

所以：

-   ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 是在输入端决定**“从哪个方向进来”**的向量
    
-   ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg) 是在输出端决定**“最后朝哪个方向出去”**的向量
    

  

* * *

# 2）更本质的定义：它们分别是 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 与 ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg) 的特征向量

SVD 的核心关系是：

![$Av_i=\sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx8hricMkxvia2zXvbGoyJLQ5aRLcVw6n16PnRcjlRBN02GibjSf6dkxYA/640?wx_fmt=png&from=appmsg)

我们左右各乘一下，立刻出现“左/右”的来源。

* * *

## 为什么 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 来自右边：![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 的特征向量？

从

![$Av_i=\sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx8hricMkxvia2zXvbGoyJLQ5aRLcVw6n16PnRcjlRBN02GibjSf6dkxYA/640?wx_fmt=png&from=appmsg)

两边左乘 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg)：

![$A^TAv_i=\sigma_i A^Tu_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dRujib4ZeWPfF9L7fZUXV9EEzdYI8qZfSg1O5bicGTmsDm1hAzm3dZRiaQ/640?wx_fmt=png&from=appmsg)

而又有

![$A^Tu_i=\sigma_i v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dX0TMTMk9jQG7q02HgibqGwjIshba1kf0SvDpboKRIMWxyx4tWvQLUzg/640?wx_fmt=png&from=appmsg)

所以得到：

![$A^TA v_i = \sigma_i^2 v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dTOeMWacp5rHCSBCOQVEoTGwITlYfbIEuD4wN0hLF2k6xzlSReoyw4Q/640?wx_fmt=png&from=appmsg)

这说明：

✅ ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg)  **是 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 的特征向量**，特征值是 ![$\sigma_i^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dZPRYPd2wuZWKZzGFn0gyBoiaFSko3EA7yLP3EuCqxiadh9diaUzFEVz2Q/640?wx_fmt=png&from=appmsg) 

而且注意 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 的尺寸是：

-   如果 A 是 m×n
    
-   那么 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 是 n×n
    

它作用在 **输入空间（右侧空间 ![$\mathbb R^n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dYQdAbMKOsh7xOOSe9N8UKImXoORa82MVWBs60rkpDlibPp5rZUl9w2A/640?wx_fmt=png&from=appmsg)）**  
所以 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 被称为 **右奇异向量**。

* * *

## 为什么 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg) 来自左边：![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg) 的特征向量？

同样从

![$Av_i=\sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx8hricMkxvia2zXvbGoyJLQ5aRLcVw6n16PnRcjlRBN02GibjSf6dkxYA/640?wx_fmt=png&from=appmsg)

两边左乘 A（或者改写）：

把它两边右乘 ![$v_i^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d50s6VjSVsFZw7Q64iajw8XSxGXiaQzaXOMoRIKhu7WrHUpqtILtsh97g/640?wx_fmt=png&from=appmsg) 不直观，我们用另一条等价式：

![$A^Tu_i=\sigma_i v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dX0TMTMk9jQG7q02HgibqGwjIshba1kf0SvDpboKRIMWxyx4tWvQLUzg/640?wx_fmt=png&from=appmsg)

两边左乘 A：

![$AA^T u_i = \sigma_i A v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dk3JrR1uX1dLB9CDahjOHoH4KWWyMwQBblurSt85sGlg2sQ2KV3Pmyg/640?wx_fmt=png&from=appmsg)

又因为 ![$Av_i=\sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx8hricMkxvia2zXvbGoyJLQ5aRLcVw6n16PnRcjlRBN02GibjSf6dkxYA/640?wx_fmt=png&from=appmsg)，所以：

![$AA^T u_i = \sigma_i^2 u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dHgboSenAM07lRBSdUuMv0mC7o2ytVGmicrBibB10Tc5N8ZBZGDxGsnrw/640?wx_fmt=png&from=appmsg)

因此：

✅ ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg)  **是 ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg) 的特征向量**，特征值同样是 ![$\sigma_i^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dZPRYPd2wuZWKZzGFn0gyBoiaFSko3EA7yLP3EuCqxiadh9diaUzFEVz2Q/640?wx_fmt=png&from=appmsg) 

而 ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg)的尺寸是：

-    ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg) 是 m×m
    

它作用在 **输出空间（左侧空间 ![$\mathbb R^m$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dIpibSricxHlmtcfibqPzlDpf6UQIrib3Ru896WzVovLsmAZzToQlClytVA/640?wx_fmt=png&from=appmsg)）**  
所以 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg) 被称为 **左奇异向量**。

  

* * *

# 3）一句特别好记的话

> **右奇异向量 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg)：输入空间里“最关键的方向”**  
> **左奇异向量 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg)：输出空间里“对应的落点方向”**

并且二者被矩阵 A 精确对应起来：

![$Av_i=\sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx8hricMkxvia2zXvbGoyJLQ5aRLcVw6n16PnRcjlRBN02GibjSf6dkxYA/640?wx_fmt=png&from=appmsg)

它说的就是：

> 输入沿 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 方向走 1 步 → 输出沿 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg) 方向走 ![$\sigma_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dQSKkKia740n8nuzYXZ2MRzPw6kfXOdiaYzCy0Jc8wYYL8SSdjQn2CwTg/640?wx_fmt=png&from=appmsg) 步

* * *

# 4）为什么叫“奇异”？

顺便把“奇异”这个词也讲透（你会更舒服）：

-   如果 A 可逆（非奇异），那么所有 ![$\sigma_i>0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6deElkyZelukaWpPwcKqiafNpc9uvS9SYVw1UW4Hzicw6NHzv5ibCIKVz1w/640?wx_fmt=png&from=appmsg) 
    
-   如果 A 不可逆（奇异），就会有某些 ![$\sigma_i=0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dEKsDGolyPc5piaGCQcCfTjxUf6kuXZZszE5XVPplia1ibFVZfbF738azw/640?wx_fmt=png&from=appmsg) 
    

这意味着有些方向 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 会被压扁到 0：

![$Av_i = 0$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dErstqIDjapKuP4Masrb9UAibgM1TVddEib9icrIdt8eIruKPK0kam5s6Q/640?wx_fmt=png&from=appmsg)

所以叫 **奇异值 / 奇异向量**（和“可逆/不可逆”强相关）。

  

## **问：按上面所说的变换流程，![V^T](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dajUvQugFRIeq6HAz3fLoicYLh4gN6gg7FeX6rmApjaBqpDiafIrICZJQ/640?wx_fmt=png&from=appmsg)应该是在左才对啊?**

这句质疑 **非常正确** ——从“动作顺序”来看，确实是 ![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dajUvQugFRIeq6HAz3fLoicYLh4gN6gg7FeX6rmApjaBqpDiafIrICZJQ/640?wx_fmt=png&from=appmsg)  **最先作用**，看起来像“在最左边先做”。  
但名字里的“左 / 右”，**不是按“谁先做”来命名的**，而是按 **它在矩阵分解式里站在哪一边**、以及 **它对应哪个空间（输入/输出）** 来命名的。

我把这个关键点讲清楚，你就彻底不纠结了。

* * *

#   

# 1）动作顺序 vs 写法位置：这俩是两回事

我们从变换开始：

![y=Ax](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dobXwtniaicsYb7giaRx5YERgtwfvI5ajb3Ctl4ClYiccDGjw2ToZJx6xbw/640?wx_fmt=png&from=appmsg)

SVD 写成：

![$A = U\Sigma V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dU9UrRyTIiagibC28MmnnocleTLFDlibnTDsHfZxD2dHBmXLTUa2kQcRCA/640?wx_fmt=png&from=appmsg)

所以：

![$y = U\Sigma V^T x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dEiaPRNqv7zoofv4jAZrvaicAk9qdicbOTPboZB7JEZzgKTzorVy3L3qnw/640?wx_fmt=png&from=appmsg)

✅ **动作顺序（对向量 x 的作用顺序）一定是：右边先做！**

因为矩阵乘法是：

![$(U\Sigma V^T)x = U\big(\Sigma (V^T x)\big)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d4fLaKcwJrMbGcuTPNCoU3QLhvfPrvnVnEPnUfgMWUIb7YEk8RXy0cA/640?wx_fmt=png&from=appmsg)

所以流程是：

1.  ![$x' = V^T x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6ddpm8c8icSKUfAWGVgExQAM5MOfyGFYSBlicQ3FrNso6PGiaZSofR7wxbQ/640?wx_fmt=png&from=appmsg)（先对输入旋转对齐）
    
2.  ![$x'' = \Sigma x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dHOYay6ZUzYAWLCQxCd3IBkGA5mcvRS8SIe4bIhIcWTAXYAH5YUeJibg/640?wx_fmt=png&from=appmsg)（再拉伸压缩）
    
3.   ![$y = U x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6djpIbwSxZ8Bje3icl1via1ZbdF7FwU3OicTmdU3bZ9ibf8pKgXVP28bQyFw/640?wx_fmt=png&from=appmsg) （最后再旋转到输出方向）
    

**你说 “![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dajUvQugFRIeq6HAz3fLoicYLh4gN6gg7FeX6rmApjaBqpDiafIrICZJQ/640?wx_fmt=png&from=appmsg) 应该在左才对”**——你指的是“先做”，那完全没错 ✅  
但是注意：**矩阵写在右边，不代表它“后做”，反而代表它“先做”**。

  

* * *

# 2）那为什么还叫“右奇异向量”？——因为它属于“右边空间”（输入域）

“左/右奇异向量”的命名，来源不是动作顺序，而是：

## ✅ 它们分别是这两个矩阵的特征向量：

-     
    
-   **右奇异向量 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg)** ：来自
    
    ![$A^TA \ (n\times n)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dbaSZib7EeNggCsic8eLYjoBodoic7FUGGSYCwbCqXnAUJdeQVBrUXibE9w/640?wx_fmt=png&from=appmsg)
    
    它作用在 **输入空间 ![$\mathbb{R}^n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dYQdAbMKOsh7xOOSe9N8UKImXoORa82MVWBs60rkpDlibPp5rZUl9w2A/640?wx_fmt=png&from=appmsg)** （也叫 domain）
    
-     
    
-   **左奇异向量 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg)** ：来自
    
    ![$AA^T \ (m\times m)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6djH4xpGyqxRrlS30MRNPQa0GI7Oz4I6sTB9ddscQzhM1jsicYfFL9mgw/640?wx_fmt=png&from=appmsg)
    
    它作用在 **输出空间 ![$\mathbb{R}^m$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dIpibSricxHlmtcfibqPzlDpf6UQIrib3Ru896WzVovLsmAZzToQlClytVA/640?wx_fmt=png&from=appmsg)** （也叫 codomain）
    

所以“右/左”的真实含义是：

> **右 = 输入端（列数那一侧，n 维那边）**  
> **左 = 输出端（行数那一侧，m 维那边）**

* * *

#   

# 3）用“维度”一眼看懂：谁属于右边？

设 A 是 m×n。

那么 SVD：

-   U 是 m×m（输出空间基底）
    
-   Σ 是 m×n（拉伸强度）
    
-   V 是 n×n（输入空间基底）
    

你看：

-   V 的列向量 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 都是 **n 维向量**（属于输入空间）  
      ✅ 所以叫 **右奇异向量**
    
-   U 的列向量 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg) 都是 **m 维向量**（属于输出空间）  
      ✅ 所以叫 **左奇异向量**
    

* * *

# 4）你看到的“先做 ![V^T](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dajUvQugFRIeq6HAz3fLoicYLh4gN6gg7FeX6rmApjaBqpDiafIrICZJQ/640?wx_fmt=png&from=appmsg)”，其实是“先把输入坐标系换掉”

图里第一步写 ![V^T](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dajUvQugFRIeq6HAz3fLoicYLh4gN6gg7FeX6rmApjaBqpDiafIrICZJQ/640?wx_fmt=png&from=appmsg)，它做的是：

![$x \mapsto x' = V^T x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dUcsViaL3ESmUAPgJG6OeHXIUiaItRkFTakr5jiaNzqDXmR5GicuSP9D8Uw/640?wx_fmt=png&from=appmsg)

这一步是发生在 **输入端**（也就是“右边空间”）：

-   你选的输入方向是 v1,v2
    
-   经过 ![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dajUvQugFRIeq6HAz3fLoicYLh4gN6gg7FeX6rmApjaBqpDiafIrICZJQ/640?wx_fmt=png&from=appmsg) 后被对齐成 e1,e2
    

所以虽然它“先做”，但它仍然属于 **输入侧**，因此叫“右”。

  

* * *

# 5）一句话消除你的困惑

✅ **“先做”的矩阵写在最右边**（因为它先乘到向量上）  
✅ **“左/右奇异向量”的左/右，指的是输入/输出空间，不指动作先后**

  

## ![$A^TAv_i=\sigma_i A^Tu_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dRujib4ZeWPfF9L7fZUXV9EEzdYI8qZfSg1O5bicGTmsDm1hAzm3dZRiaQ/640?wx_fmt=png&from=appmsg)，为何![A^T](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg)在中间？

这个问题非常棒，而且一旦把这一点想通，**SVD 里很多“推导链条”都会变得像搭积木一样自然**。

你问的是：

> 从 ![$Av_i=\sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx8hricMkxvia2zXvbGoyJLQ5aRLcVw6n16PnRcjlRBN02GibjSf6dkxYA/640?wx_fmt=png&from=appmsg) 出发，为什么左乘 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg) 会得到  
> ![$\;A^TAv_i=\sigma_i A^Tu_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dNRjAAzTELiapdaBG6picdt1e9MryMeyxjOiayhIib3oQkMSrYbibPaQSjHA/640?wx_fmt=png&from=appmsg)，并且 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg) **会“出现在中间”**？

关键原因只有一句：

> **我们是“左乘” ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg)，它必须放在最左边；但原式左边本来就有一个 A，所以乘完后就变成 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg)。**

下面我一步步拆开。

  

* * *

## 1）从最基本的一步开始：左乘 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 

SVD 的核心关系之一：

![$Av_i=\sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx8hricMkxvia2zXvbGoyJLQ5aRLcVw6n16PnRcjlRBN02GibjSf6dkxYA/640?wx_fmt=png&from=appmsg)

现在我们对**等式两边都左乘同一个矩阵** ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg)：

![$A^T(Av_i)=A^T(\sigma_i u_i)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6da94QM4xasJEhnQ92lb3GLlg0GTJTf1PgT3lFovWN11nhTqKKO97FlA/640?wx_fmt=png&from=appmsg)

这是合法的，因为：

-   等式两边都是同一个向量（同维度）
    
-   对两边做同一个线性变换，等式仍成立
    

  

* * *

## 2）为什么会变成 ![$A^T A v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6deGK8Mx3vfuyAiccHVN7rZt15qoc2CvrQ572ENwQXIibwLA971yLCwQUQ/640?wx_fmt=png&from=appmsg)？

因为矩阵乘法满足**结合律**（注意：不是交换律！）：

![$A^T(Av_i) = (A^TA)v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dmaybzahiccr2tAw8sed6WMR96rdhNic3R6C9MVH6FkRxY2tKbILj03fA/640?wx_fmt=png&from=appmsg)

你看到 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg) “跑到中间”并不是乱跑，而是由于：

-   原来是 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg) 
    
-   左边再乘一个 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg) 
    
-   就自然叠成了 ![$A^T A$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 
    

也就是：

![$A^T(Av_i) = A^TA v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dV2Aicn8wUO6p18N46DhpkNsN5IkYZPRmcFGnoFS5oBMe4IJ2xBOMGcQ/640?wx_fmt=png&from=appmsg)

所以左边就变成：

![$A^TAv_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6deGK8Mx3vfuyAiccHVN7rZt15qoc2CvrQ572ENwQXIibwLA971yLCwQUQ/640?wx_fmt=png&from=appmsg)

  

* * *

## 3）右边为什么是 ![$\sigma_i A^T u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dYThv6rsJRLeHp9noib4iabSuiciaZNZZx1oicOJg2vCPibGu6nZkyI2XgPBw/640?wx_fmt=png&from=appmsg)？

右边是：

![$A^T(\sigma_i u_i)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOlr2BadxCuia2eicCcYZCCr1LJk4gURazpzYlzzBMRiaUtr6bgFOL9YMw/640?wx_fmt=png&from=appmsg)

因为 σi 是一个**标量**，可以提到外面：

![$A^T(\sigma_i u_i) = \sigma_i A^T u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dVxXpIcBrVURDpCVdadl2jbSXNFIqRgC0mxEaShbYpdVZhQVFZYAKHw/640?wx_fmt=png&from=appmsg)

  

* * *

## 4）所以完整推导就是

![$Av_i=\sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx8hricMkxvia2zXvbGoyJLQ5aRLcVw6n16PnRcjlRBN02GibjSf6dkxYA/640?wx_fmt=png&from=appmsg)

左乘 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg)：

![$A^T(Av_i)=A^T(\sigma_i u_i)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6da94QM4xasJEhnQ92lb3GLlg0GTJTf1PgT3lFovWN11nhTqKKO97FlA/640?wx_fmt=png&from=appmsg)

结合律 + 标量提出：

![$A^TAv_i=\sigma_i A^Tu_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dRujib4ZeWPfF9L7fZUXV9EEzdYI8qZfSg1O5bicGTmsDm1hAzm3dZRiaQ/640?wx_fmt=png&from=appmsg)

✅ 这就是你看到的式子。

  

* * *

# 5）“为什么 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg) 在中间”的直觉版本

你把它当成“先做 A，再做 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg)”：

-   ![$v_i \xrightarrow{A} Av_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d3xMoGBb2u81L654KdjkWvfTwAZRcxOJiccTnWKcFentPPcAXEpcgkmQ/640?wx_fmt=png&from=appmsg)
    
-   然后再 ![$\xrightarrow{A^T} A^T(Av_i)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dP42I9qUv0ibCLyQFGV8pl4p5PRZLXqwIV1ppFK1gjicwj32ZFD6Qiatpw/640?wx_fmt=png&from=appmsg) 
    

所以总体就是：

![$v_i \xrightarrow{A^TA} A^TAv_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dsADT8EMDYOHAZvBb33J6aNy6K8d0M9IKkLY2LkoZENzSibGmfzW1W4g/640?wx_fmt=png&from=appmsg)

也就是 **复合变换**：先 A，再 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg)。

因此 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg) 不是“插到中间”，而是“叠在前面”，和原来的 A 贴在一起，就形成了 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg)。

  

* * *

# 6）顺便用维度让你彻底安心（不会写错）

假设 A 是 m×n。

-    ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 是 n×1
    
-    ![$Av_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dId0pGic4nicptqjt0sgx6Df3ojLaQHGxdZBUuldZGsRasZmv2xBnskmQ/640?wx_fmt=png&from=appmsg) 是 m×1
    
-    ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg) 是 n×m
    

所以：

![$A^T(Av_i):\quad (n\times m)(m\times 1) = n\times 1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dFyOsRueUvGzic1bZnogUibK4gCS9OPSNc9NJyJveJ342X0Adj93NjWZA/640?wx_fmt=png&from=appmsg)

完全合法。

而 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 是：

![$A^TA:\quad (n\times m)(m\times n)=n\times n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dZ7WFRSJuJ1HLiaEPkOtrl1oetibyJm2Cz1vF5ak1ZxMsHbYC4FkQQSUA/640?wx_fmt=png&from=appmsg)

再乘 ![$v_i (n\times1)$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dibFrHaxUicibeBs22Mvj8culG7wqzxJqkRMekYh4VuHan0QverO73jOoA/640?wx_fmt=png&from=appmsg) 也合法：

![$(n\times n)(n\times 1)=n\times 1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dLF3RFdBbNyNk4fhNQkolhLDGcm3XOkyia6Sp6u4yedTIlUvcMNmz8mg/640?wx_fmt=png&from=appmsg)

所以 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 自然是“作用在 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 所在的空间”的矩阵。

  

* * *

# 7）一句话总结

你可以这样记：

> **左乘 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg)**  就是把原来的 A “包”起来，变成 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg)。  
> **它之所以看起来在中间，是因为原来就有一个 A 在左边。**

我们继续，把最关键的结论 **一步一步推到完全没疑问**：

> ✅ **为什么 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 是 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 的特征向量？**  
> ✅ **为什么特征值是 ![$\sigma_i^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dZPRYPd2wuZWKZzGFn0gyBoiaFSko3EA7yLP3EuCqxiadh9diaUzFEVz2Q/640?wx_fmt=png&from=appmsg)？**

* * *

# 已知起点（你已经接受的这一步）

SVD 的核心关系：

![$Av_i=\sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx8hricMkxvia2zXvbGoyJLQ5aRLcVw6n16PnRcjlRBN02GibjSf6dkxYA/640?wx_fmt=png&from=appmsg)

刚刚推到：

![$A^TAv_i=\sigma_i A^Tu_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dRujib4ZeWPfF9L7fZUXV9EEzdYI8qZfSg1O5bicGTmsDm1hAzm3dZRiaQ/640?wx_fmt=png&from=appmsg)

现在我们要把右边的 ![$A^Tu_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx7OHTLpqejZbiamPgzicibxIDAhZd7BskYqichsjibqVh39jBMdiauObz2KQ/640?wx_fmt=png&from=appmsg) 处理掉，变成只含 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg)。

* * *

# 关键补刀：其实还有另一条对称关系

从 SVD 分解：

![$A = U\Sigma V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dU9UrRyTIiagibC28MmnnocleTLFDlibnTDsHfZxD2dHBmXLTUa2kQcRCA/640?wx_fmt=png&from=appmsg)

转置一下：

![$A^T = V\Sigma^T U^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dtc2HEWVPrR33SRR5KdhFotMlbp0edzOhYqCuc5XLzicoJdPWG0DjoCA/640?wx_fmt=png&from=appmsg)

于是你会得到一条与 ![$Av_i=\sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx8hricMkxvia2zXvbGoyJLQ5aRLcVw6n16PnRcjlRBN02GibjSf6dkxYA/640?wx_fmt=png&from=appmsg) 完全对称的关系：

![$A^Tu_i = \sigma_i v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dX0TMTMk9jQG7q02HgibqGwjIshba1kf0SvDpboKRIMWxyx4tWvQLUzg/640?wx_fmt=png&from=appmsg)

（这句话和前一句是“互为镜像”的。）

* * *

# 把它代回去：立刻得到特征向量方程

我们现在有：

![$A^TAv_i=\sigma_i A^Tu_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dRujib4ZeWPfF9L7fZUXV9EEzdYI8qZfSg1O5bicGTmsDm1hAzm3dZRiaQ/640?wx_fmt=png&from=appmsg)

把

![$A^Tu_i = \sigma_i v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dX0TMTMk9jQG7q02HgibqGwjIshba1kf0SvDpboKRIMWxyx4tWvQLUzg/640?wx_fmt=png&from=appmsg)

代入右边：

![$A^TAv_i = \sigma_i(\sigma_i v_i)=\sigma_i^2 v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dVicaB7gicbmb6neDRCWs0JMuoqiaHAia1eCaANVbJj3BnX4oAxFGUfWiaRA/640?wx_fmt=png&from=appmsg)

于是最终得到：

![$\boxed{A^TA\,v_i=\sigma_i^2 v_i}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d5U23hzv8AuRJjicaD5ialDaYzy5JH90nqgWpKlgw80OlQaWTSCGbUdUw/640?wx_fmt=png&from=appmsg)

这是什么？

这就是标准的“特征向量定义式”：

![$M x = \lambda x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dUUs4Q9F2dteGL1Q0Qq2AH3ejlfjRr7Ts2JU8TVFfpAEZHfp0mCY9Ig/640?wx_fmt=png&from=appmsg)

对比一下：

-   ![$M = A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dZicfQKzQt2ewMEjCbdIZZVmTo3yYEQzXkcpIEZEXohYibsLhGslBEiaWA/640?wx_fmt=png&from=appmsg)
    
-   ![$x = v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dVFekpS646LQFvcl1pq9JRbB4ibHsyQJLiaAsjqQbwpwYAleicHanpPgTQ/640?wx_fmt=png&from=appmsg)
    
-   ![$\lambda = \sigma_i^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dKOJlnQmXwXSQS76euTbyVpO1DvqEibyn8YtdEknBXHEzekOUTKbfGOw/640?wx_fmt=png&from=appmsg)
    

所以我们得到结论：

✅ ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg)  **是 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 的特征向量**  
✅ **对应特征值是 ![$\sigma_i^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dZPRYPd2wuZWKZzGFn0gyBoiaFSko3EA7yLP3EuCqxiadh9diaUzFEVz2Q/640?wx_fmt=png&from=appmsg)** 

* * *

# 为什么一定是平方 ![$\sigma_i^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dZPRYPd2wuZWKZzGFn0gyBoiaFSko3EA7yLP3EuCqxiadh9diaUzFEVz2Q/640?wx_fmt=png&from=appmsg)？（几何直觉版）

你可以把 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 当成一个“测量放大倍数”的机器：

-   A：把输入向量变形（旋转+拉伸+旋转）
    
-   ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg)：再把它“拉回输入空间”去对齐比较
    

所以 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 的效果像是：

> **测量某个方向在经过 A 变形后到底被拉长了多少**  
> 结果会变成“长度的平方倍率”。

因为长度平方会自然出现：

![$\|Ax\|^2 = (Ax)^T(Ax)=x^T(A^TA)x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxjqmQooalia5C4vFMibLdicgpk6ibPdvPpHfNAbAQAB4Uk8pgBmRatyz1A/640?wx_fmt=png&from=appmsg)

所以![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 的特征值出现平方非常正常：它对应的是“能量 / 长度平方”的倍率。

* * *

# 同理可得：![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg) 是 ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg) 的特征向量

用同样套路，从

![$A^Tu_i=\sigma_i v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dX0TMTMk9jQG7q02HgibqGwjIshba1kf0SvDpboKRIMWxyx4tWvQLUzg/640?wx_fmt=png&from=appmsg)

两边左乘 A：

![$AA^T u_i = \sigma_i Av_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dk3JrR1uX1dLB9CDahjOHoH4KWWyMwQBblurSt85sGlg2sQ2KV3Pmyg/640?wx_fmt=png&from=appmsg)

再代入 ![$Av_i=\sigma_i u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dx8hricMkxvia2zXvbGoyJLQ5aRLcVw6n16PnRcjlRBN02GibjSf6dkxYA/640?wx_fmt=png&from=appmsg)：

![$AA^T u_i = \sigma_i(\sigma_i u_i)=\sigma_i^2 u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw9MKS0xQz9IbNzR6jMKYlSUILNWNRAj1baK3u0ep38RVwH949Nv88Q/640?wx_fmt=png&from=appmsg)

所以：

![$\boxed{AA^T\,u_i=\sigma_i^2 u_i}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dqPoWn6ScKkZ6LXmYB1qYiaOKhiaJSJIqnCHgd78uTkiaJITUUQ3oFa9FA/640?wx_fmt=png&from=appmsg)

✅ ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg)  **是 ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg)的特征向量**  
✅ **特征值同样是 ![$\sigma_i^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dZPRYPd2wuZWKZzGFn0gyBoiaFSko3EA7yLP3EuCqxiadh9diaUzFEVz2Q/640?wx_fmt=png&from=appmsg)** 

* * *

# 一句话把整套逻辑锁死

![$\boxed{Av_i=\sigma_i u_i} \quad\Longleftrightarrow\quad \boxed{A^Tu_i=\sigma_i v_i}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6derwPS4ln0SHJswmRhxnueRlTT3IIib1jlyerOREahxGloDUFdlrKeYg/640?wx_fmt=png&from=appmsg)

因此：

![$\boxed{A^TA v_i=\sigma_i^2 v_i} \quad,\quad \boxed{AA^T u_i=\sigma_i^2 u_i}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1zzWg5NQCu87HAj9InicFV7OBBjzwlVbLvCicDnS5kMWsnfA1mOxTv5g/640?wx_fmt=png&from=appmsg)

  

## **问：旋转的意义是什么呢？**

旋转在 SVD 里不是“花活”，它有非常实在的意义：**把问题变成“沿两条互相垂直的轴做拉伸”**，从而让矩阵的复杂变形变得可解释、可计算、可压缩。

你可以把 SVD 的三步：

![$A = U\Sigma V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dU9UrRyTIiagibC28MmnnocleTLFDlibnTDsHfZxD2dHBmXLTUa2kQcRCA/640?wx_fmt=png&from=appmsg)

理解为对一个“橡皮圆片”的三段动作：

* * *

## 1）![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dajUvQugFRIeq6HAz3fLoicYLh4gN6gg7FeX6rmApjaBqpDiafIrICZJQ/640?wx_fmt=png&from=appmsg) 的旋转：把“最关键的输入方向”对齐到坐标轴

矩阵 A 对不同方向的拉伸强度不一样。  
SVD 要找出输入空间里两条最特殊的方向 v1,v2：

-   沿 v1 走，会被放大得最多（σ1）
    
-   沿 v2 走，会被放大得次多（σ2）
    
-   而且 v1⊥v2
    

但是这两条方向通常是斜着的，不一定是水平/竖直。

所以 ![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dajUvQugFRIeq6HAz3fLoicYLh4gN6gg7FeX6rmApjaBqpDiafIrICZJQ/640?wx_fmt=png&from=appmsg) 的意义是：

> **先把坐标系旋转一下，让 v1,v2 变成标准轴 e1,e2**  
> 这样后面就能“只沿横纵拉伸”，不用斜着拉。

这是“把复杂方向问题变成标准轴问题”。

  

* * *

## 2）Σ 的拉伸：真正发生“变形”的地方

对齐以后，核心就变成超级简单的：

![$\begin{array}{c} \Sigma= \begin{bmatrix} \sigma_1 & 0\\ 0 & \sigma_2 \end{bmatrix} \end{array}$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dU5H03h4aosxawsjicTyH1YC0mtbKMsdZLIiazfiblNHXNMJx8VjHLB7Eg/640?wx_fmt=png&from=appmsg)

它的意义就是：

-   横向拉 σ1
    
-   纵向拉 σ2
    

单位圆 → 椭圆。

> **Σ 才是矩阵“本质的变形强度”**  
> 旋转只是让它以最干净的方式发生。

* * *

##   

## 3）U 的旋转：把椭圆摆到“输出空间应该在的位置”

你把圆片拉成椭圆后，它的主轴现在对齐在 e1,e2 上。  
但真实矩阵 A 输出的椭圆可能是斜着的。

所以 U 的意义是：

> **把椭圆整体旋转到输出空间中的最终方向**（主轴变成 u1,u2）

* * *

# 总结：旋转的意义到底是什么？

一句话：

✅ **旋转是“换一个最合适的坐标系”，让变形只剩下纯拉伸。**

更具体地说：

-   ![$V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dajUvQugFRIeq6HAz3fLoicYLh4gN6gg7FeX6rmApjaBqpDiafIrICZJQ/640?wx_fmt=png&from=appmsg)：选择输入的最佳坐标系（用 ![v_i](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 做基）
    
-   U：选择输出的最佳坐标系（用 ![u_i](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg) 做基）
    
-   Σ：在这两个最佳坐标系之间，只做拉伸（信息全在这里）
    

* * *

# 为什么旋转这么重要？（没有旋转就做不到这几点）

## A）把“混合变形”拆开成“互不干扰的两条轴”

一般矩阵会同时做：

-   斜着拉
    
-   斜着剪切（shear）
    
-   再转
    

看起来很乱。

旋转的作用就是把这种混合效果拆开成：

> 两个独立方向上的拉伸（互不干扰）

这就是“可解释”的来源。

* * *

## B）让很多计算变得简单：最大放大倍数一眼就知道

Σ 中最大的奇异值 σ1 就是：

![$\max_{\|x\|=1}\|Ax\|=\sigma_1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dicve0rGVUbnw4JmQsNvpDbqtvQ9MyTglKsfBmicnRazPkk2MXU2VGQ1A/640?wx_fmt=png&from=appmsg)

这就是矩阵的“最大增益”。  
如果没有旋转对齐，这个结论很难直观看出来。

* * *

## C）降维/压缩的根本原因：只保留最重要的方向

旋转告诉你：

-   “输入里哪几个方向最重要”（v1,v2,...）
    
-   “输出里对应什么方向”（u1,u2,...）
    
-   “重要程度是多少”（σ1,σ2,...）
    

所以你可以直接丢掉小的奇异值方向：

![$A \approx \sigma_1 u_1v_1^T+\sigma_2u_2v_2^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dribVQ0bQSSSLYEZcKhg9s5oR97ibaRNXJNiasaMicK142XpKlCSJYy4kdg/640?wx_fmt=png&from=appmsg)

这就是图像压缩、PCA 去噪的核心。

* * *

# 最形象的类比：旋转=“先摆正再加工”

你可以把它类比成木工加工：

-   一块木头斜着放，锯很难锯得准（剪切+拉伸混在一起）
    
-   先把木头摆正（旋转）
    
-   再沿水平/竖直锯（纯拉伸）
    
-   最后再摆回成品角度（旋转）
    

## ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg)和![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg)有什么差别？

![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg)和![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg) 看起来只是顺序换了一下，但它们在 **尺寸、作用空间、几何意义** 上完全不同；不过它们又共享同一套“核心信息”（奇异值）。

下面用几何 + 代数把差别讲清楚。

  

* * *

# 1）最直观差别：尺寸不同、住在不同空间里

设 A 是一个 m×n 的矩阵：

### ✅ ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 是 n×n

-   作用在 **输入空间 ![$\mathbb R^n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dYQdAbMKOsh7xOOSe9N8UKImXoORa82MVWBs60rkpDlibPp5rZUl9w2A/640?wx_fmt=png&from=appmsg)** （domain）
    
-   其特征向量是 **右奇异向量 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg)** 
    

![$A^TA v_i = \sigma_i^2 v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dTOeMWacp5rHCSBCOQVEoTGwITlYfbIEuD4wN0hLF2k6xzlSReoyw4Q/640?wx_fmt=png&from=appmsg)

### ✅ ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg) 是 m×m

-   作用在 **输出空间 ![$\mathbb R^m$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dIpibSricxHlmtcfibqPzlDpf6UQIrib3Ru896WzVovLsmAZzToQlClytVA/640?wx_fmt=png&from=appmsg)** （codomain）
    
-   其特征向量是 **左奇异向量 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg)** 
    

![$AA^T u_i = \sigma_i^2 u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dHgboSenAM07lRBSdUuMv0mC7o2ytVGmicrBibB10Tc5N8ZBZGDxGsnrw/640?wx_fmt=png&from=appmsg)

所以它们的第一差别是：

> **一个在输入端“看问题”，一个在输出端“看问题”。**

* * *

#   

# 2）几何意义：它们都是“能量/长度平方”的测量器

对任意向量 ![$x\in \mathbb R^n$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dIvMVefNyu6rKSq0gyt14dSpv8icDqVA6eEB5kFJ5DCzO3zm53D6LFXA/640?wx_fmt=png&from=appmsg)，有一个非常关键的恒等式：

![$\|Ax\|^2 = (Ax)^T(Ax) = x^T(A^TA)x$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxjqmQooalia5C4vFMibLdicgpk6ibPdvPpHfNAbAQAB4Uk8pgBmRatyz1A/640?wx_fmt=png&from=appmsg)

这说明：

✅ ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 是在输入空间里计算“经过 A 后长度平方”的工具  
也就是说它告诉你：

> “输入方向 x 被 A 放大了多少能量？”

同理，对任意 ![$y\in\mathbb R^m$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dmaTUZxnKZrd4dUcpRUgjX52Kc5Bk89VL2Bl7yficBdAlyAtF1AKibePw/640?wx_fmt=png&from=appmsg)：

![$\|A^Ty\|^2 = y^T(AA^T)y$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dbTDGgoCCn5TBhTBm6b9X7eSVUFOA8icoPq3vGbuxsskWK8188Siak7aQ/640?wx_fmt=png&from=appmsg)

所以：

✅ ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg) 是在输出空间里计算“经过 ![$A^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dr1oMwzhm6vW6EiaLpaXx4ZUHseIiavqEYsJEic24U2STic5K3bNOkKzMBw/640?wx_fmt=png&from=appmsg) 后长度平方”的工具

* * *

#   

# 3）它们共享什么？——共享同一组非零特征值（![$\sigma_i^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dZPRYPd2wuZWKZzGFn0gyBoiaFSko3EA7yLP3EuCqxiadh9diaUzFEVz2Q/640?wx_fmt=png&from=appmsg)）

尽管尺寸不同，但它们的**非零特征值完全一样**：

-    ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 的特征值：![$\sigma_1^2,\sigma_2^2,\dots$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dmt12u4p8FwvmM3v1Ta5muwpdH1U0b0ibQvKWeKxdLnk31Q0xmfIXNnw/640?wx_fmt=png&from=appmsg)
    
-    ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg) 的特征值：![$\sigma_1^2,\sigma_2^2,\dots$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dmt12u4p8FwvmM3v1Ta5muwpdH1U0b0ibQvKWeKxdLnk31Q0xmfIXNnw/640?wx_fmt=png&from=appmsg)
    

原因来自 SVD：

![$A = U\Sigma V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dU9UrRyTIiagibC28MmnnocleTLFDlibnTDsHfZxD2dHBmXLTUa2kQcRCA/640?wx_fmt=png&from=appmsg)

那么：

### ✅ 展开 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 

![$A^TA = (U\Sigma V^T)^T(U\Sigma V^T) = V\Sigma^T U^T U\Sigma V^T = V(\Sigma^T\Sigma)V^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d4nlSJmibYG30BpC5eHTFphPxlmJjaY7ALhF46VJqIRSd0tnnhFsUHUA/640?wx_fmt=png&from=appmsg)

### ✅ 展开 ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg) 

![$AA^T = (U\Sigma V^T)(U\Sigma V^T)^T = U\Sigma V^T V\Sigma^T U^T = U(\Sigma\Sigma^T)U^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dAEk79VrxKAvJrFeLNiczujVxQJ6KubwJExx9ouMicTJ87AGhpzddyang/640?wx_fmt=png&from=appmsg)

而 ![$\Sigma^T\Sigma$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dZEsOktgcwXHyKyKiaWRlW1vpta2TW0namfxMLccKInoKQv6PYNAHf9Q/640?wx_fmt=png&from=appmsg) 和 ![$\Sigma\Sigma^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dkElfBogicbgITCcT9PUctykdvgxhPfRZ1icnLK9Tt1Hr1mKHlZd6iaGDw/640?wx_fmt=png&from=appmsg) 的对角线上都是 ![$\sigma_i^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dZPRYPd2wuZWKZzGFn0gyBoiaFSko3EA7yLP3EuCqxiadh9diaUzFEVz2Q/640?wx_fmt=png&from=appmsg)（只是维度不同）。

所以结论：

>  **![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 和 ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg)是两台不同尺寸的机器，但里面装的是同一组“奇异值平方”发动机。**

* * *

#   

# 4）它们到底差在哪？——“谁在当主角”不同

### 对 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg)：主角是输入方向 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 

它回答的问题是：

> 输入空间里，哪些方向最容易被 A 放大？

最大就是 ![$v_1$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dWPFbAdg0UGicQ8ibfmVgYibgFnFibzTiadR924QVCHc0QLncMh13wdKAPaw/640?wx_fmt=png&from=appmsg)，放大倍数是 σ1。

### 对 ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg)：主角是输出方向 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg) 

它回答的问题是：

> 输出空间里，那些被 A 产生的方向（椭圆主轴）朝哪？

对应就是 ![$u_1,u_2,\dots$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dHPDTDiagcurSLqfueN0QVn7iaia5OPkjribiakO7nIeYicqHVarKNR0RpzqA/640?wx_fmt=png&from=appmsg) 

* * *

#   

# 5）再来一个“工程上很实用”的差别：计算上选哪个更省？

假设 A 是 m×n：

-   如果 m≫n（样本很多，特征少，例如 100万×300）
    

-    ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg) 是 n×n 很小
    
-   常用 **算 ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg)**  来求 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg) 
    
      
    

-   如果 n≫m（特征很多，样本少）
    

-    ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg) 更小
    
-   常用 **算 ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg)**  来求 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg) 
    
      
    

这就是为什么 PCA 实现里经常看到：

-   数据矩阵 X 做 ![$X^TX$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d3icvHMHjSL2WcbWH5zrqDuSQqpAdHIDgib8Wn3TDMBF05ccD5Z4319hA/640?wx_fmt=png&from=appmsg) 或 ![$XX^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d9RxgaoePGw22OMh2CfKkrSYicZXk4SBkSNTRsPiaXSf9MYbHkzv8ZPAg/640?wx_fmt=png&from=appmsg) 看情况选。
    

* * *

#   

# 6）总结一句话版

✅ ![$A^TA$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dw0vI6lZ4rwTHYTnPpZ6iahHPAtxNypEOlaXZpNZbbSzWPzBzphWjoOA/640?wx_fmt=png&from=appmsg)：输入空间的“放大镜”（找 ![$v_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dxQiaDNrLzm1wuccDwawM4wdmkgxvdGIuQFOGy1pur7e94pNIby7KWIQ/640?wx_fmt=png&from=appmsg)）  
✅ ![$AA^T$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6d1OkQLDBRlOH4uXf0AK5MHTXXSVWXeicME6uicniaBFv5PCfpNq9MxSG0w/640?wx_fmt=png&from=appmsg)：输出空间的“成像仪”（找 ![$u_i$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dOJbtUAHiaKSPacNO5lx6E1ViapUKLnQXmlz3bS4Ymw1nqlkjJe6WtqRQ/640?wx_fmt=png&from=appmsg)）  
✅ 它们共享同一组非零特征值：![$\sigma_i^2$](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0tqI4leMnNzDwt6r3EUhKE6dZPRYPd2wuZWKZzGFn0gyBoiaFSko3EA7yLP3EuCqxiadh9diaUzFEVz2Q/640?wx_fmt=png&from=appmsg)