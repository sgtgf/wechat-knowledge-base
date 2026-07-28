在科学计算领域，Fortran作为一门历史悠久且性能强大的语言，仍然广泛应用于数值模拟和数据分析。而Gnuplot作为一个灵活且功能丰富的图形可视化工具，能够将计算结果以直观的方式展现。本文将结合这两者，展示如何使用Fortran编写程序生成数据，并利用Gnuplot绘制出精美的等值线图。

## 准备工作

首先，确保你的系统中安装了Fortran编译器（如gfortran）和Gnuplot。对于Linux用户，可以通过包管理器轻松安装这些工具；Windows用户则可能需要从官方网站下载安装包。

参考：[Fortran开发环境极简配置教程](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484359&idx=2&sn=f5e95d2ccaa5a2772913b688bb597ec3&chksm=c33797bdf4401eab947281eff9a587cee3e92ccedf773afe28e813c81c290ea468df17258461&scene=21#wechat_redirect)

        gnuplot官网：http://gnuplot.info

## Fortran程序编写

我们将从一个简单的例子开始，创建一个Fortran程序来计算二维空间中的函数值，并将结果保存到文件中以便供Gnuplot读取。


  

假设我们要绘制函数 在区间 \[-10, 10\] 上的等值线图。使用 Fortran 创建二维网格点（如上图），并将每个网格点的 值输出为数据文件。具体代码为：

`program contour_plot     implicit none     integer :: nx,ny,i,j     real(8) :: xmin,xmax,ymin,ymax,dx,dy     real(8), allocatable :: f(:,:)     real(8), allocatable :: x(:),y(:)   ! 网格参数读取     namelist /grid/nx,ny,xmin,xmax,ymin,ymax     open(11, file = 'input.dat')     read(11, nml=grid)     close(11)     print *, ' nx, ny = ', nx, ny     print *, ' xmin, xmax = ', xmin, xmax     print *, ' ymin, ymax = ', ymin, ymax   !     allocate(x(1:nx))     allocate(y(1:ny))     allocate(f(1:nx,1:ny))   ! 计算网格点     dx = (xmax - xmin)/dble(nx)     dy = (ymax - ymin)/dble(ny)        do i = 1, nx       x(i) = xmin + dx*dble(i-1)     enddo        do j = 1, ny       y(j) = ymin + dy*dble(j-1)     enddo        ! 创建输出数据文件       open(12, file = 'output.dat')   ! 计算函数值     do j = 1,ny       do i = 1,nx         f(i,j) = x(i)**2 + y(j)**2         ! 将结果写入文件         write(12,'(3e12.4)') x(i),y(j),f(i,j)       enddo       write(12,*)     enddo     close(12)   end program contour_plot   `

代码中使用了名称列表组`namelist`来定义网格大小和区间范围参数，并以`input.dat`作为输入数据文件，以方便修改参数值。这里使用的数据文件的具体内容如下：

`&grid   nx=40   ny=40   xmin=-10.d0   xmax= 10.d0   ymin=-10.d0   ymax= 10.d0   /      `

编译并运行程序，就会输出如下的网格点函数值文件`output.dat`。


  

## Gnuplot脚本配置

接下来，我们需要使用Gnuplot来读取上述Fortran程序产生的数据，并绘制等值线图。

在`output.dat`所在目录下启动 Gnuplot，输入如下命令：

`gnuplot> set contour   gnuplot> splot "output.dat" with lines   `

`set contour` 命令用于开启等值线绘图模式，`splot` 命令读取数据文件并绘制等值线。效果如下：


因为我们所需要的只是在底部（x-y 平面）上绘制的等值线，不需要三维视图，所以让我们再次绘制它，输入如下命令：

`gnuplot> set contour   gnuplot> unset surface   gnuplot> set view 0,0   gnuplot> splot "output.dat" with lines   `

此时的效果如下：


初见轮廓，我们还需要继续改进它。由于对很多数据每次都要输入Gnuplot命令很麻烦，所以准备一个命令脚本来执行会方便很多。我们创建一个名为`plot.lt`的文件，并输入以下内容：

`set terminal png   set output "contour.png"      set title "Contour Plot of f(x,y) = x^2+y^2"   set xlabel "X-axis"   set ylabel "Y-axis"      unset surface   set view map   set contour   set cntrparam levels 10   set key at screen 0.96, 0.7   splot "output.dat" with lines title "f(x,y)"   `

这个脚本首先设置了输出为`PNG`格式，然后指定了标题、坐标轴标签、图例位置等信息。`set cntrparam levels 10` 设置了等值线的数量，后面我们可以根据需要自行调整。

为了运行该脚本，在命令行输入：

`gnuplot plot.plt   `

或者

`gnuplot> load 'plot.plt'   `

这样就得到了所需要的等值线图像文件 `contour.png` ，效果如下：


  

## 小结

通过上述步骤，我们得到了一幅展示函数f(x,y)等值线的图像。这种方法不仅适用于简单的数学函数，对于复杂的科学计算结果同样有效。Fortran的强大计算能力配合Gnuplot的灵活绘图特性，为科研工作者提供了高效的数据可视化手段。希望这篇指南能帮助你在项目中快速上手等值线图的制作。