Fortran语言中的Module（模块）是Fortran 90引入的一个重要特性，是一种非常有用的结构。它允许程序员将相关的变量、常量、类型定义、函数和子程序等组织在一起，以便在程序的其他部分使用。使用Module可以提高代码的可读性、可维护性和重用性。下面我将通过具体的例子，通俗易懂地介绍一下Module的用法。

### 1\. 什么是Module

在Fortran中，Module是一种封装的机制，它可以用来创建自己的代码库。你可以把Module想象成一个工具箱，里面装满了你可能会用到的各种工具（变量、常量、类型、函数等）。当你需要使用这些工具时，只需要打开工具箱（use Module），而不需要每次都重新制造它们。

### 2\. 定义一个Module

一个Fortran模块由两部分组成：

1.  **声明部分（Specification Part）**：这部分声明了模块中将要使用的变量、常量、类型定义等。这是模块的规范部分，定义了模块的接口。
    
2.  **包含子程序和函数定义的部分**：这部分包含了模块中定义的子程序（Subroutine）和函数（Function）的具体实现。
    

模块的基本语法结构如下所示：

 module module\_name  
   ! 声明部分  
   \[声明语句\]  
   ! 包含子程序和函数定义部分  
   contains  
   \[subroutine和function的定义\]  
 end module \[module\_name\]

### 3\. 使用Module中的内容

要在程序中使用模块，你需要使用`use`语句。这会将模块中的所有公共成员引入到程序中，使得它们就像在程序中直接声明的一样。

 program/subroutine/function  
   use module\_name  
   implicit none  
   ! 现在可以使用模块中的公共变量和子程序  
   ...  
 end

请注意

-   您可以根据需要添加任意数量的模块，通常每个模块将位于单独的文件中并单独编译。
    
-   模块可用于各种不同的程序、子程序或函数。
    
-   模块可以在同一程序中多次使用。
    
-   在模块声明部分中声明的变量对模块来说是全局的。
    
-   模块中声明的变量在使用模块的任何程序、子程序或函数中也是全局的。
    

### 4\. 简单示例

下面我们将通过一个简单的计算圆面积的实例，来演示如何创建和编译一个包含模块的Fortran程序。

#### 4.1 定义一个简单的模块

首先，我们需要创建一个模块来定义圆周率常量和计算面积的子程序。

创建一个名为`circle_module.f90`的文件，内容如下：

 module circle\_module  
   implicit none  
   ! 定义圆周率常量  
   real, parameter :: pi \= 3.1415926  
   
 contains    
   ! 定义计算圆的面积的函数  
   function cal\_area(radius) result(area)  
     real, intent(in) :: radius  
     real :: area  
     ! pi对模块是全局的,直接使用  
     area \= pi \* radius \* radius  
   end function cal\_area  
 end module circle\_module

#### 4.2 使用模块

接下来，我们将创建一个主程序来使用`circle_module`中定义的常量和函数。

创建一个名为`main.f90`的文件，内容如下：

 program main  
   use circle\_module  
   implicit none  
   real :: radius, area  
     
   !模块中声明的变量对调用模块的程序也是全局的  
   !打印圆周率常量  
   print\*, "Pi = ", pi   
     
   radius \= 1.0  
   ! 计算并输出圆的面积  
   area \= cal\_area(radius)  
   print\*,  'Area of a circle: ', area  
     
 end program main

#### 4.3 编译和运行

在Windows环境下，我们可以使用gfortran编译器来编译上述程序。

以下是编译和运行的步骤：

1.  打开命令提示符。
    
2.  导航到包含`circle_module.f90`和`main.f90`文件的目录。
    
3.  使用以下命令编译程序：
    

 gfortran \-c circle\_module.f90 \-o circle\_module.o  
 gfortran main.f90 circle\_module.o \-o main

特别注意，模块文件要先于调用它的程序文件进行编译，否则会出现模块无法被识别的错误。

4.  运行编译好的程序：
    

 main.exe

得到如下计算结果：

> Pi =    3.14159250
> 
> Area of a circle:    3.14159250

### 5\. 控制模块中变量和子程序的可访问性

默认情况下，模块中的所有变量和子程序都是公共的（public），可以在使用该模块的任何地方访问。但是，有时候你可能希望某些变量或子程序只在模块内部可见。这时，你可以使用`private`属性来声明它们。也就是说，当您将某个变量或子例程声明为私有`private`时，它在模块外部不可用。

例如，在上面的例子中，我们将`pi`被声明为私有，这意味着它不能在模块外部直接访问。

 module circle\_module  
   implicit none  
   ! 定义圆周率常量，声明为私有变量  
   real, parameter, private :: pi \= 3.1415926  
   
   contains  
   ! 定义计算圆的面积的函数  
   ...  
 end module circle\_module

如果我们不对使用circle\_module的`main.f90`文件进行修改，而是直接重新编译程序，就会得到以下无法识别`pi`的错误消息 :

> main.f90:8:21:
> 
>   print\*, "Pi = ", pi
> 
>                     1
> 
> Error: Symbol 'pi' at (1) has no IMPLICIT type

### 6\. 小结

模块是现代Fortran标准中一个非常强大的特性，它使得Fortran程序设计更加模块化和面向对象。通过本文的介绍和实例，你应该对Fortran模块有了基本的了解，并能够在你的Fortran程序中使用模块来提高代码的质量和可维护性。记住，模块化是现代编程的一个重要趋势，掌握它将对你的编程生涯大有裨益。

由于篇幅限制，这里只提供了一个关于Fortran模块的基本概念和使用方法的概述。在实际应用中，你可能需要根据项目的具体需求来创建更复杂的模块，并深入理解模块的高级特性，如模块文件的组织、模块的继承等。希望这篇入门教程能够帮助你开始使用Fortran模块，为你的Fortran编程之旅打下坚实的基础。


**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于 Fortran 90 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的免费试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。