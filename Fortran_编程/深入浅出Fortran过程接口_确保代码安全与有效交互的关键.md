## 引言

在编程语言Fortran中，“过程”是一个关键的概念，它涵盖了函数(function)和子例程(subroutine)两种形式。函数如同C语言中的函数，可以在表达式中被调用来计算并返回值；而子例程则是通过CALL语句调用，执行特定任务但不返回值。

「过程接口」，顾名思义，就像一座桥，连接着调用者与被调用的过程。它就如同C语言中的函数声明，详尽描述了过程的各种属性，如名称、类型（是函数还是子例程）、返回值（仅对函数而言）、以及各个输入输出参数（即“哑元”或称“虚参”）的详细特性。

## 过程接口的重要性

每个过程接口都包含了一系列细节，比如哑元的类型、属性（intent、optional、allocatable等），这些信息对编译器至关重要。当过程定义和调用不在同一个编译单元（例如不在同一个源文件）时，如果没有显式的过程接口，编译器就无法进行有效的类型检查和参数匹配。这可能导致在编译阶段未发现的问题，在程序运行时产生难以预料的结果。

例如，假设有一个名为`add`的加法函数，它要求接受两个整型参数。但在主程序中，不小心传递了实型数值作为参数调用。由于没有显式接口约束，编译虽然能通过，但在运行时会产生意外的数值。编译并运行以下代码：

`!!! add.f90 文件   integer function add(a,b)     implicit none     integer, intent(in) :: a, b     add = a + b   end function add      !!! main.f90 文件   program main     implicit none     integer, external :: add     print*, add(2.0, 3.0) ! 错误地使用了实数作为参数   end   `

执行后得到的是一个非预期的整数值-2143289344，而非期望的5.0。这是因为编译器并未能在编译阶段发现实参与整型哑元之间的类型不匹配。

## 显式接口的应用

要解决这种问题，可以采取以下几种方式提供显式的过程接口：

1.  将过程定义和调用放在同一编译单元内，使编译器能够直接看到过程的所有信息。
    

`!!! main_new.f90 文件   integer function add(a,b) ! 原add.f90文件的内容     implicit none     integer, intent(in) :: a, b     add = a + b   end function add      program main     implicit none     integer, external :: add     print*, add(2.0, 3.0) ! 编译时就会报错   end   `

2.  在调用位置明确声明过程接口，这样编译器就可以依据接口来检查实参类型和数量的一致性。
    

`!!! add.f90 文件不变   !!! main_new.f90 文件   program main     implicit none     interface       integer function add(a,b)         implicit none         integer, intent(in) :: a, b       end function add     end interface     print*, add(2.0, 3.0) ! 编译时就会报错   end   `

3.  将过程放入模块（module）中，Fortran编译器会自动为模块内的过程生成显式接口。
    

`!!! add_new.f90 文件   module func_mod   contains     integer function add(a,b)       implicit none       integer, intent(in) :: a, b       add = a + b     end function add   end module func_mod      !!! main_new.f90 文件   program main     use func_mod !使用module     implicit none     print*, add(2.0, 3.0) ! 编译时就会报错   end   `

在以上这3个修改后的版本中，编译器会在编译阶段检测到实参类型与接口声明不符，并提示错误。

## 进一步探讨过程类型及其接口

Fortran过程接口根据其定义的位置和调用方式分为显式（`explicit`）和隐式（`implicit`）。若调用者明确知道被调用过程的详细特征，则接口显式；反之，编译器需要从引用和声明中推理得出，则接口隐式。

同时，针对不同的过程类型（外部过程、模块过程、内部过程、内置过程、哑元过程和语句函数），Fortran编译器处理接口的方式有所不同，其中外部过程默认为隐式接口，而模块过程等其他类型则具有显式接口。用户可以通过`interface`语句为任何默认隐式接口的过程显式指定接口说明。

总之，理解和合理运用Fortran过程接口对于编写高质量、无误的代码至关重要，它能够在编译阶段就避免很多潜在的运行时错误，提升代码的安全性和可靠性。通过清晰的过程接口设计，开发者可以更好地管理过程间的交互，确保数据准确无误地在各个过程中流转。


**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于 Fortran 90 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的免费试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。