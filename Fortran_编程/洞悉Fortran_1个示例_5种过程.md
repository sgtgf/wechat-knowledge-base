# 洞悉Fortran：1个示例，5种过程


> 原文地址: [https://mp.weixin.qq.com/s/cs-P1ItCBTRYXuNIU1EU6A](https://mp.weixin.qq.com/s/cs-P1ItCBTRYXuNIU1EU6A)

在编程的世界里，Fortran语言以其在科学计算和数值分析领域的卓越性能而闻名。了解Fortran中的不同过程类型对于编写高效、可读性强的代码至关重要。本文将深入探讨Fortran中的5种过程类型：外部过程、模块过程、内部过程、内置过程和虚拟过程，并通过一个综合性的示例程序来具体展示它们是如何工作的。

  

## 什么是过程？

在Fortran语言中，过程（procedure）是指一组执行特定任务的语句集合。这些过程可以是函数或子程序，它们可以被其他程序或模块调用，以实现代码的重用和模块化。

以下是Fortran各种过程其接口类型的统计。

过程类型

接口类型

外部过程（external procedure）

implicit

模块过程（module procedure）

explicit

内部过程（internal procedure）

explicit

内置过程（intrinsic procedure）

explicit

虚拟过程（dummy procedure）

implicit

对于默认为隐式（implicit）接口类型的过程，我们可以通过interface语句来显式指定接口类型：

```
interface  [interface_body]end interface
```

关于过程接口的具体阐述，可以参考下面的这篇博文：

[深入浅出Fortran过程接口：确保代码安全与有效交互的关键](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484605&idx=1&sn=121c23968804b120a463966aa5515aaf&chksm=c33790c7f44019d12a482c3df09dde9ab741dbb63fa546a1639fcb910d34ff5d020deedfb4d2&scene=21#wechat_redirect)

## 示例程序

以上5种过程类型，可以通过下面这个综合性的示例程序来理解：

`! 外部过程定义   subroutine external_proc()     implicit none     print*, "external_proc is a external procedure"   end subroutine external_proc      ! 另一个外部过程   integer function add_int(x,y)     implicit none     integer,intent(in) :: x,y     add_int = x + y   end function add_int      module mod_a     implicit none      contains     ! 模块过程定义     subroutine mod_proc()       print*, "mod_proc a module procedure"     end subroutine mod_proc          integer function do_math(a,b,simple_math)       implicit none       integer,intent(in) :: a,b       ! 虚拟过程接口定义       interface         integer function simple_math(x,y)           implicit none           integer,intent(in) :: x,y         end function simple_math       end interface              do_math = simple_math(a,b)     end function do_math   end module mod_a      program main     use mod_a     implicit none     real :: a,b,c     integer :: d     ! 外部过程接口的显式声明     interface       integer function add_int(x,y)         implicit none         integer,intent(in) :: x,y       end function add_int     end interface        a = 2.0        ! 调用内部过程     b = square(a)        ! sqrt是Fortran标准中的一个内置过程     c = sqrt(b)        ! 调用外部过程     call external_proc()        ! 调用模块过程     call mod_proc()        ! 以过程作为实参，该过程需符合对虚拟过程接口的定义     d = do_math(1, 2, add_int) !结果为3        print*,'d=',d   contains     ! 内部过程定义     real function square(x)       implicit none       real,intent(in) :: x          print*, "square is a internal procedure"       square = x * x     end function square   end program main   `

## 示例详解

### 1\. 外部过程（External Procedure）

外部过程，顾名思义，是指在主程序之外定义的子程序或函数，可以在不同的源文件中定义并在其他地方被调用。在Fortran中，外部过程默认具有隐式接口，意味着编译器需要根据其声明和实际调用时的参数列表匹配。为了确保代码的可读性和编译器能够正确检查过程的使用，可以使用`interface`块显式声明外部过程的接口。

例如，在给出的示例程序中，`external_proc`和`add_int`就是两个外部过程，主程序还使用`interface`块显式声明了`add_int`的接口：

`subroutine external_proc()     implicit none     print*, "external_proc is an external procedure "   end subroutine external_proc      integer function add_int(x,y)     implicit none     integer,intent(in) :: x,y     add_int = x + y   end function add_int      program main     ...     interface       integer function add_int(x,y)         implicit none         integer,intent(in) :: x,y       end function add_int     end interface     ...   end program main   `

### 2\. 模块过程（Module Procedure）

模块过程是位于Fortran模块内的过程，其接口在模块内是明确且显式的。当其他部分通过`use`语句引用该模块时，模块内的过程就能被直接调用。这种方式提高了代码重用性，增强了数据封装和模块化设计。

在给出的示例程序中，模块`mod_a`中包含了两个名为`mod_proc`和`do_math`的模块过程：

`module mod_a     implicit none        contains       subroutine mod_proc()         print*, "mod_proc is a module procedure "       end subroutine mod_proc          integer function do_math(a,b,simple_math)       ...       end function do_math   end module mod_a   `

### 3\. 内部过程（Internal Procedure）  

内部过程又称为嵌套过程，它是在主程序或者另一个过程内部定义并使用的子程序或函数。这种过程通过`contains`关键字进行定义，使得它们与所在环境紧密结合，仅对所属主体可见。例如，在示例程序的`main`程序中，`square`函数是一个内部过程：

`contains     real function square(x)       implicit none       real, intent(in) :: x       print*, "square is an internal procedure "       square = x * x     end function square   `

### 4\. 内置过程（Intrinsic Procedure）

内置过程是由Fortran编译器自身提供的标准函数和子程序，如数学函数`sqrt()`用于求平方根。这些过程不需要用户定义，其接口是编译器预先知道的，并且总是可用。

例如，在示例程序中，计算平方根的`sqrt()`函数即为内置过程：

`c = sqrt(b)   `

### 5\. 虚拟过程（Dummy Procedure）

虚拟过程，更准确地说是“虚拟过程参数”（Dummy Procedure Argument），我们可以把它当作一个没有实体内容的过程占位符。虚拟过程作为形参出现在另一个过程的接口中，表示这一过程可以接收某些过程作为实参。实参必须是外部过程、模块过程或内部过程的特定名称，且满足某种由虚拟过程给定的接口规范。

例如，在示例程序中，`mod_a`模块中的`do_math`函数就使用了一个名为`simple_math`的虚拟过程参数，表示允许传递不同的、但符合`simple_math`接口规定的过程，到`do_math`函数中执行相应的计算。在主程序中，我们将先前定义的外部过程 `add_int` 作为实参传给 `do_math`，实现了加法操作。

`module mod_a     ...     integer function do_math(a,b,simple_math)       implicit none       integer,intent(in) :: a,b       ! 虚拟过程接口定义       interface         integer function simple_math(x,y)           implicit none           integer,intent(in) :: x,y         end function simple_math       end interface       do_math = simple_math(a,b)     end function do_math   end module mod_a      program main     use mod_a     ...     d = do_math(1, 2, add_int) !结果为3     ...   end program main`  

## 小结

总结来说，Fortran中的这5种过程各有其独特之处，分别服务于不同的编程需求。理解并熟练运用这些过程类型有助于编写出更加清晰、健壮和高效的Fortran程序。此外，显式接口的应用进一步加强了程序的可靠性和可维护性，是现代Fortran编程实践中不可或缺的一部分。通过上述示例程序的逐段解析，我们可以深入体会每种过程类型的使用场景和具体实现方式。

  

![](洞悉Fortran_1个示例_5种过程_images/img_000_d981f1eb49d0.png)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。