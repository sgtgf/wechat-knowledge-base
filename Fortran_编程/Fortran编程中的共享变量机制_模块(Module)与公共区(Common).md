# Fortran编程中的共享变量机制：模块(Module)与公共区(Common)


> 原文地址: [https://mp.weixin.qq.com/s/cf4wZUg7vv4VZEQL7oRhVg](https://mp.weixin.qq.com/s/cf4wZUg7vv4VZEQL7oRhVg)

![](Fortran编程中的共享变量机制_模块(Module)与公共区(Common)_images/img_000_8bcddb233e93.jpg)

在Fortran编程语言中，虽然不直接支持全局变量的定义，但为了实现在不同程序单元如主程序与函数之间的数据共享，Fortran提供了两种关键的方法：模块（Module）和公共区（Common）。这两种方法都有着大量的应用，而随着Fortran标准的发展，模块已成为更推荐的实践。

## 模块（Module）的运用

模块是Fortran90及更高版本引入的一种高级特性，它允许程序员将一组相关的变量和函数封装在一起，并实现跨程序单元的数据共享。模块的结构清晰，具有良好的组织性和可维护性。

模块的结构如下：

`module 模块名     模块中的变量   contains     模块中的函数和子程序   end module 模块名   `

模块本质上就是包含一些变量和函数的一个集合。模块中的变量都有`save`属性，可以通过`use module`实现数据的共享。

以下是一个简单的例子，我们创建一个名为`const`的模块，其中包含一个常数`pi`以及一个简单的加法函数`add`：

`module const     implicit none     real, parameter :: pi = 3.1415927      ! 声明一个不可更改的常数pi      contains     real function add(a, b)       implicit none       real, intent(in) :: a, b       add = a + b     end function add   end module const   `

在主程序中，我们使用「use」关键字来引用模块`const`的内容：

`program main     use const     implicit none     print*, add(4.0, 5.0) * pi      ! 在主程序中调用模块内的函数和变量   end program main   `

注意这里`use`需要放在定义变量之前。

在模块`const`中，任何未特别指定权限的变量或函数，默认情况下对使用了`use const`的程序块都是可见的。

类似于C++中的类成员访问控制，模块同样也支持公有（「public」）和私有（「private」）成员的区分。例如，在另一个名为`circle`的模块中，我们可以设置变量`pi`为私有（`private`），并公开（`public`）两个计算圆面积和周长的函数：

`module circle     implicit none     private     real, parameter :: pi = 3.1415927       public :: area, length        contains     real function area(r)       implicit none       real, intent(in) :: r       area = pi * r**2     end function area        real function length(r)       implicit none       real, intent(in) :: r       length = 2.0 * pi * r     end function length   end module circle      program main     use circle, only : area      ! 只导入并使用area函数     implicit none     print*, area(2.0)   end program main   `

通过`public`和`private`关键字，我们可以精确地控制哪些模块元素对外部程序可见。在本例中，在定义变量之前加上`private`，则该模块内所有成员都会默认私有。就像这里的`pi`变量，外部程序是无权直接访问的，只有在`circle`模块内部定义的`area`和`length`函数能访问到它。当然，在私有环境中仍然可以定义公有，例如这里的`area`和`length`函数的公有化声明。若在共有环境中定义私有，则也是按类似方式完成。此外，当我们只想使用模块中部分成员时，可以在`use`语句中使用`only`关键字来选择性地引入所需元素，例如这里的主程序只使用了`area`函数。

## 公共区（Common）的使用及其局限性

在较早版本的Fortran中，公共区（Common）是一种共享变量的传统方式。其原理是通过内存对齐，让多个程序单元能够访问同一片内存区域。

然而，这个历史上的语句却具有非常多的「缺陷」：

1.  它只说明变量具有在公共区的属性，并不说明变量的类型和精度。
    
2.  公共区采用内存字节一一对应，而不是采用变量名称一一对应。这极易发生错误，且难以排查和调试。
    
3.  如果想要只共享某个变量而不包括其他一同声明的变量，那么就必须全部列出，这无疑增加了编写和维护代码的负担。
    

例如，下面的代码片段展示了如何在一个主程序和子程序之间共享两个整型变量`a`和`b`。我们分别在4个子程序中使用了`common`公共区的数据，但只有`SubOK`中是正确的。

`program main   implicit none   common a, b    integer :: a = 1 , b = 2    ! common 并不说明类型，需单独定义类型   call SubOK()    call SubOrder()    call SubType()    call SubKind()    end program main      subroutine SubOK()   implicit none   common a, b   Integer :: a, b   print*, a, b    ! 输出1，2，正确   end subroutine SubOK      subroutine SubOrder()   implicit none   common b, a ! 顺序错误   Integer :: a, b   print*, a, b    ! 输出 2,1 颠倒   end subroutine SubOrder      subroutine SubType()   implicit none   common a, b   real :: a, b ! 类型不一致   print*, a, b    ! 输出 1.40129846E-45 2.80259693E-45 完全错误   end subroutine SubType      subroutine SubKind()   implicit none   common a, b   integer(kind=8) :: a, b ! kind 不一致   print*, a, b    ! 输出 8589934593 0 完全错误   end subroutine SubKind   `

可以看出，公共区的变量，需要在每一个使用它的函数内重新定义，且必须保证对应变量的顺序、类型、精度等完全一致。稍有差别就会出现对应“错位”，尤其是当变量数量众多时，很容易发生误操作。

由于公共区不具备现代编程语言中严格的类型检查，编译器并不会对此发出警告或错误信息，此类问题在实际运行时才可能暴露，大大增加了调试难度。

由于公共区的管理复杂度较高，而模块则提供了更为安全、灵活的共享机制，因此，「强烈建议尽量避免使用common语句」，尤其是在大型项目中，以免因变量管理混乱而引发难以预料的问题。

## 小结

总结来说，Fortran通过模块（Module）实现了更为现代、严谨的数据共享机制，它不仅提供了一种组织代码的有效手段，还支持细致的访问控制，从而极大地提高了代码质量和开发效率。虽然公共区（Common）作为一种历史遗留方式在旧版代码中仍有应用，但在新的开发实践中，模块应当成为首选解决方案。对于追求代码可靠性和可维护性的开发者而言，熟练掌握并应用模块这一特性至关重要。

![](Fortran编程中的共享变量机制_模块(Module)与公共区(Common)_images/img_001_d981f1eb49d0.png)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。