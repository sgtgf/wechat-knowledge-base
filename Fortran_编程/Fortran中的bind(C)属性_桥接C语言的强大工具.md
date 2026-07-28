随着科学计算领域不断拓展以及复杂应用程序的需求增加，跨编程语言的协同工作变得至关重要。Fortran作为一款历史悠久且在高性能计算(HPC)领域广受青睐的编程语言，常需要与C语言携手合作，以实现性能优化、功能扩展和资源共享。Fortran 2003及后续版本引入了`bind(C)`这一特性，这无疑为Fortran和C之间构建无缝接口提供了一座坚固的桥梁。本文将详细介绍如何使用Fortran的`bind(C)`属性来与C语言互相调用，并通过简单实例来展示这一过程。

## bind(C)属性简介

在Fortran中，`bind(C)`属性是标准库中`iso_c_binding`模块的一项核心功能，允许Fortran程序与C语言程序进行低级别的交互。当某个Fortran子程序或函数定义使用`bind(C)`声明时，意味着它的内存布局、调用约定以及ABI（Application Binary Interface）必须严格遵循C语言的规则。这样，具有`bind(C)`属性的Fortran子程序就能被C代码直接调用，反之亦然。

## 从Fortran调用C函数

让我们通过实际示例深入理解这一过程。假设有一个简单的C函数，其功能是计算两个浮点数之和：

`// add.c   #include <stdio.h>      void calC(float *a, float *b, float *c) {     *c = *a + *b;     printf("In C: a + b = %f\n", *c);   }   `

要在一个Fortran程序中调用此C函数，我们需创建一个接口(`interface`)，并在Fortran代码中使用`bind(C)`属性来精确匹配C函数的名称：

`! main.f90   program main     use iso_c_binding     implicit none        real(kind=c_float) :: a, b, c        interface       subroutine calc(a, b, c) bind(C, name='calC')         use iso_c_binding         real(kind=c_float), value :: a, b         real(kind=c_float), intent(out) :: c       end subroutine calc     end interface        a = 1.0     b = 2.0     call calc(a, b, c)     print *, "In Fortran: a+b= ", c   end program main   `

在此Fortran程序中，我们首先导入了`iso_c_binding`模块以确保数据类型与C语言兼容。接着，我们定义了一个接口`calc`，该接口与C函数`calC`通过`bind(C)`属性紧密相连。值得注意的是，我们使用了`kind=c_float`来保证数据类型的准确匹配，并使用`intent(in)`和`intent(out)`关键字明确了参数的输入/输出方向。

接下来，我们将Fortran源文件和C源文件分别编译成对象文件，再通过链接生成可执行文件。在Windows环境下，利用`gfortran`和`gcc`编译器完成这一过程的命令行指令如下：

`gfortran -c main.f90   gcc -c add.c   gfortran main.o add.o -o main.exe   `

执行`main.exe`后，可以看到两段代码分别打印出了相同的计算结果：

> In C: a + b = 3.000000  
> In Fortran: a+b=    3.00000000

## 从C调用Fortran函数

同样的，`bind(C)`属性也支持从C语言中调用Fortran函数。例如，若有一个Fortran子程序负责计算两个数的平方和：

`! square_sum.f90   subroutine square_sum(x, y, result) bind(C)     use iso_c_binding     real(kind=c_float), value :: x, y     real(kind=c_float), intent(out) :: result        result = x**2 + y**2     print *, "In Fortran: x^2 + y^2= ", result   end subroutine square_sum   `

在C代码中，我们可以像调用普通C函数那样，调用这个Fortran子程序：

`// main.c   #include <stdio.h>   extern void square_sum(float *x, float *y, float *result);      int main() {     float x = 3.0;     float y = 4.0;     float result;        square_sum(&x, &y, &result);     printf("In C: x^2 + y^2= %f\n", result);        return 0;   }   `

仍然使用Windows环境下的`gfortran`和`gcc`编译器，编译链接这两个文件：

`gfortran -c square_sum.f90   gcc -c main.c   gcc square_sum.o main.o -o main.exe -lgfortran   `

这里，首先使用`gfortran`编译Fortran源码生成`.o`文件，然后使用`gcc`编译C源码，最后用`gcc`链接两者，并加入`-lgfortran`选项确保链接Fortran库，最终生成可执行文件`main.exe`。

运行`main.exe`会同时显示Fortran子程序和C程序中计算出的平方和：

> In Fortran: x^2 + y^2=    25.0000000  
> In C: x^2 + y^2=  25.000000

## 注意事项

在进行Fortran与C混合编程时，运用`bind(C)`属性需要注意以下几个关键点：

1.  「函数声明」：所有需要与C代码相互调用的Fortran子程序或函数都应明确使用`bind(C)`属性进行声明，以符合C语言的调用约定和链接规范。
    
2.  「数据类型映射」：参数和返回值的数据类型必须与C语言相对应。使用`iso_c_binding`模块可以轻松地映射C兼容的数据类型，如`integer(c_int)`、`real(c_float)`等。
    
3.  「参数传递」：由于Fortran默认采用按引用传递参数的方式，在与C语言交互时，实际上是以指针形式传递参数。因此，在编写接口时，务必考虑这一点。
    
4.  「名称修饰」：Fortran编译器可能会自动对子程序名进行修饰，导致在C代码中找不到对应的函数。通过在`bind(C)`属性中添加`name="..."`选项可以显式指定Fortran子程序在C中的可见名称。
    
5.  「字符处理」：Fortran和C对于字符串处理存在差异，尤其是在字符串终止符方面，C字符串以`null`字符结束，因此在涉及字符串转换和传递时需额外留意。
    
6.  「内存管理」：跨语言调用时，内存分配和释放的一致性非常重要，以免出现内存泄漏或双重释放等问题，确保程序的稳定性和安全性。
    

## 小结

总结起来，Fortran中的`bind(C)`机制极大地简化了Fortran与C语言之间的混合编程流程，显著提升了跨语言开发大型项目的效率。通过这一特性，开发者能够在保持Fortran强大的数值计算能力和内存管理优势的同时，便捷地整合C语言提供的丰富库资源，进而推动科学计算、工程计算及其他领域软件开发技术的进步。无论是利用Fortran高效计算能力解决复杂的数学问题，还是借助C语言丰富的系统级功能和第三方库支持，`bind(C)`属性都成为了连接两种语言的重要纽带，让开发者能够跨越语言界限，充分挖掘二者潜力，实现更高层次的应用融合和技术创新。


**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。