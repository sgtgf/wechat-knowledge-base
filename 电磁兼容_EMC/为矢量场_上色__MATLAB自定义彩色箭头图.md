# 为矢量场“上色”：MATLAB自定义彩色箭头图


> 原文地址: [https://mp.weixin.qq.com/s/JFge5IdyO26NBfMx0LzD4w](https://mp.weixin.qq.com/s/JFge5IdyO26NBfMx0LzD4w)

_在对电磁场可视化的过程中，常常会使用quiver函数，其长度虽能反映场强，却常因长短不一、相互重叠而影响图的清晰与美观。为此，许多人更倾向于用箭头的颜色来直观映射电磁场的强度：通过将场强编码为颜色，不仅能使图像色彩丰富，更能让场的分布规律一目了然。下面，我们就一起学习如何在二维和三维图中实现这种效果。_

【注】所有代码取自于matlab社区，作者只是对其整合及应用。

1\. 首先我们需要自定义一个colorbmap来实现我们想要的颜色。

例如：对于一个归一化（0-1）的数据，我们可以选取三个特征位置（0对应纯蓝色，0.5对应纯白色，1对应纯红色）来让这组数据从实现蓝-红-白渐变。

这里主要使用到customcolormap这个函数来实现颜色自定义，代码如下：

mymap =customcolormap(\[0 0.5 1\], \[1 0 0;1 1 1; 0 0 1\]);

colormap(mymap)

colorbar

运行结果如下图所示：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为矢量场_上色__MATLAB自定义彩色箭头图_images\img_000_3cf2ad107804.png)

【customcolormap函数下载地址】

https://ww2.mathworks.cn/matlabcentral/fileexchange/69470-custom-colormap/

2\. 下面我们使用某个纵向截面的电磁飞环矢量场数据作为数据集，例如二维电场E(r,z)。

与quiver不同，quiverC2D是点对点对应的，因此输入坐标x,y也需要是矩阵。为了颜色能自然过渡，这里我们使用十种渐变颜色生成colormap，对横向电场Erho及纵向电场Ez进行归一化处理后，将生成的颜色与电场模值nE映射，代码如下：

mycolormap = customcolormap(linspace(0,1,10), {'#68011d','#b5172f','#d75f4e','#f7a580','#fedbc9','#d5e2f0','#93c5dc','#4295c1','#2265ad','#062e61'});

ax=gca();

colormap(ax,mycolormap)

quiverC2D(zz,rr,,Ez./nE，Erho./nE,nE,1.5)%nE=sqrt(Erho.^2+Ez.^2)

运行结果如下图所示：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为矢量场_上色__MATLAB自定义彩色箭头图_images\img_001_844c44581bd3.png)

3、在三维空间中绘制斯格明子时，我们希望能将展示出某个面上的电场分布E(x,y,z),并将归一化的纵向电场Ez(x,y,z)值域与颜色相映射，我们可以使用quiver3CD这个函数，代码如下：

F=sqrt(Fx.^2+Fy.^2+Fz.^2);

quiverC3D(xx,yy,zeros(size(zz)),Fx./F,Fy./F,Fz./F)

运行结果如下图所示：

![](D:\电脑文件\公众号知识库\电磁兼容_EMC\为矢量场_上色__MATLAB自定义彩色箭头图_images\img_002_9702148780fd.png)

【quiverC2D/quiverC3D函数下载地址】https://ww2.mathworks.cn/matlabcentral/fileexchange/58527-quiver-magnitude-dependent-color-in-2d-and-3d

* * *

【本文特别声明】本文所演示的软件操作技巧基于特定软件版本，不同版本界面和功能可能有所不同。文中展示的仿真结果、参数设置和模型均为教学演示目的而设计，不保证其适用于所有实际应用场景。使用者应根据自身项目需求进行调整和验证。本文分享的代码/模型仅供参考，作者及教研室不承担因其使用直接或间接导致的任何问题（如仿真不收敛、项目延误等）。