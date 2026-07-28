# Fortran调用C语言：应用Gauss-Legendre积分计算圆周率


> 原文地址: [https://mp.weixin.qq.com/s/xWo7QvL-v9fFiUs4XFKfvg](https://mp.weixin.qq.com/s/xWo7QvL-v9fFiUs4XFKfvg)

在科学计算领域，Fortran以其卓越的数值运算性能和丰富的数学库备受青睐，而C语言则以灵活高效、系统级编程能力著称。当项目既需要利用Fortran的数学优势，又需借助C的底层功能或现有库时，实现两者的混合编程便显得尤为重要。本文将通过一个实例，深入探讨如何从Fortran程序中调用C函数，重点阐述涉及**高精度实数类型**和**函数指针参数**的复杂情况。

  

## 实例背景

设想这样一个场景：你正着手开发一个Fortran应用程序，需要执行高精度的数值积分运算。幸运的是，你找到了一个高效且成熟的C库，它提供了基于Gauss-Legendre积分法的积分计算功能。然而，该C库作为一个黑盒，只能以二进制文件`.o`和头文件`.h`的形式提供，其内部细节不可更改。如何才能优雅地将此C库融入你的Fortran项目中呢？

## 目标函数与积分

我们这里要计算的积分，是一个著名的关于圆周率 π 的近似表达式：

这个积分不仅计算简单，而且在区间\[0,1\]内无奇异性，非常适合用于演示。

## C函数接口

首先，让我们关注`.h`文件中的关于C函数的接口说明。

`long double Gauss_Legendre_Integration     (long double a, long double b, long double (*f)(long double));   `

对应于编译好的`gauss_legendre.o`文件，它提供了一个名为`Gauss_Legendre_Integration`函数。该函数有3个参数：积分下限`a`、上限`b`及一个指向被积函数的指针`f`。`f`有一个输入参数。所有参数和返回值的类型均为`long double`，确保了高精度。

## Fortran调用准备

在Fortran端，我们借助`iso_c_binding`模块来桥接类型差异，确保数据类型的一致性和兼容性。通过定义接口区块，我们告诉Fortran如何解析C函数的签名，包括函数名、参数类型和返回值。

`program Integrate     use, intrinsic :: iso_c_binding, cl=>c_long_double     implicit none        interface !定义接口区块       function gl10(a, b, f) bind(c,name='Gauss_Legendre_Integration')         import::cl,c_funptr         real(cl), intent(in), value :: a, b         type(c_funptr), intent(in), value :: f         real(cl) :: gl10       end function          function f1(x) bind(c)         import::cl         real(cl),intent(in), value ::x         real(cl) :: f1       end function     end interface        type(c_funptr) :: f1_cptr     real(cl) :: a, b, res        a=0.0_cl     b=1.0_cl        f1_cptr = c_funloc(f1)  !获取Fortran函数f1的C地址     res = gl10(a,b,f1_cptr)     write(*,"(A,e18.12)") 'res =   ',res     write(*,"(A,e18.12)") 'Error = ',res-4*atan(1.0_cl)   end program      function f1(x) bind(c) !定义被积函数       use, intrinsic :: iso_c_binding, cl=>c_long_double       implicit none       real(cl),intent(in), value ::x       real(cl) :: f1       f1=4.0_cl/(1.0_cl+x*x)   end function   `

### 「数据类型映射与调用约定」

为了确保Fortran与C之间的数据传递正确无误，我们精心映射了数据类型：`c_long_double`对应C的`long double`，`c_funptr`则处理函数指针。通过`bind(C)`属性，我们严格遵循了C的调用约定，包括参数传递方式。特别地，使用`value`关键字强调了对Fortran中的输入参数按值传递，这与C语言的习惯一致。

### 「函数指针的处理」

值得注意的是，C中的函数指针传递是通过Fortran的`c_funptr`类型实现的。利用`c_funloc`获取Fortran函数的地址，然后以值的方式传递给C函数，确保了C函数能正确调用Fortran中的被积函数。

## 编译与执行

最后，先将Fortran代码编译，再链接Fortran和C的`.o`文件生成可执行文件。示例命令如下：

```
gfortran -c integrate.f90 -o integrate.ogfortran integrate.o gauss_legendre.o -o integrate.exe./integrate.exe
```

运行一下，我们得到了关于 π 的正确的计算结果：

`res =   0.314159265359E+01   Error = 0.253001829556E-12   `

## 小结

通过上述步骤，我们成功地实现了Fortran程序调用C库中的函数，展示了跨语言混合编程的魅力。此方法不仅扩展了Fortran应用的能力边界，也为复用现有C库资源开辟了新途径。在处理复杂的科学计算任务时，这种混合编程策略无疑为开发者提供了强大的工具组合。

## 推荐阅读

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。