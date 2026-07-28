# Python & MATLAB 绘制超有美感的矢量箭头图（1）


> 原文地址: [https://mp.weixin.qq.com/s/faZDSLc\_XTc6b6uze9KkMg](https://mp.weixin.qq.com/s/faZDSLc_XTc6b6uze9KkMg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/r0oTUiaJxSpWziaUNKYh50mUMLicny4Vt6y7oe4IG8gXiavicWgvKDGOuoDrtYyx39YVX2CE0nzq9CbaCHTx9wKAouQ/640?wx_fmt=png&from=appmsg)

导读

* * *

在光学研究中，矢量箭头图不仅是展示电场、磁场分布的利器，还能直观表达能量流向和梯度变化。今天，我们就来做一件“美学与科学结合”的事情——用 Python 和 MATLAB 绘制一张具有能量梯度的矢量箭头图，让光场的方向与能量分布一目了然，还能赏心悦目。

* * *

## 一、科学原理简述

在光学中，电磁波能量分布可以用 Poynting 矢量表示。

-   **矢量方向** → 光能流动方向
    
-   **矢量长度/颜色** → 光能大小或梯度  
    通过改变箭头的长度、颜色渐变，便可以把能量分布“可视化”。
    

> 💡 小提示：这里我们可以用数学函数生成一个二维矢量场，比如螺旋光场、光学涡旋或高斯光束的能量流向。

* * *

二、Python 绘制简单的矢量箭头图

使用 `matplotlib` 的 `quiver` 函数，结合 `numpy` 生成二维矢量场，并通过颜色表示能量梯度，绘制效果如下图（效果一般，且不好看）

```
import numpy as np
```

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/r0oTUiaJxSpWziaUNKYh50mUMLicny4Vt6yY8PvoVyibw7UlLhOibsDzkpkKRUF3w3NMH9ViabqXfGZH0N3jrRpM9Fww/640?wx_fmt=jpeg)

* * *

三、Matlab 绘制简单的矢量箭头图

quiver + `meshgrid` 同样可以完成，配合 `colormap` 和 `quiverc`（彩色矢量）绘制，可以看到，效果也一般

```
Nx = 30; Ny = 30;
```

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/r0oTUiaJxSpWziaUNKYh50mUMLicny4Vt6yMSs5KW1Ing0ZYojwAUPv5lcUrXqTwBUvHqicic0RqNyhd0ia4cONVeVaQ/640?wx_fmt=jpeg)

* * *

四、美感提升技巧（后续更新)

1.  **颜色渐变**：使用 `plasma`, `viridis` 等高对比色
    
2.  自定义quiver: 改变箭头，使其成为3D
    
3.  **箭头密度**：调整网格点数量，平衡信息量和美观
    
4.  **渐变大小**：箭头长度随能量梯度变化，更直观
    
5.  **背景与边框**：去掉坐标轴或增加透明背景，让科研图更艺术
    

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/r0oTUiaJxSpWziaUNKYh50mUMLicny4Vt6yfwaLDCY1icUA03NUAxG04vmCfqnJc8iauhkAicL5J2ENibiaqcjOTSaQGiag/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/r0oTUiaJxSpWziaUNKYh50mUMLicny4Vt6yV0Gib5q80P00SlTagYge7FHm2iaBzujBtub3OVKkROfPib9OmTnzRDK3A/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/r0oTUiaJxSpWziaUNKYh50mUMLicny4Vt6yL1JSsbuOq3knHzcrpuEaax2EDb1r3qPy2unuRTbohGiaG0x90KAMfaw/640?wx_fmt=jpeg)

* * *

## 五、扩展玩法

-   绘制光学涡旋、衍射图样、光学力场
    
-   使用 Streamlit 或 MATLAB App 实现交互式控制箭头密度、能量梯度
    
-   将矢量图导出为 SVG，进一步在矢量绘图软件中加工
    

* * *

六、结语

矢量箭头图不仅仅是科研工具，也可以是艺术作品。  
Python 与 MATLAB 各有优势，配合渐变色、动画效果，能把光学中的能量流动“画成诗”。

* * *

✨ **下一篇预告**

👉 Python & MATLAB 绘制超有美感的矢量箭头图（2）  

敬请期待 💫