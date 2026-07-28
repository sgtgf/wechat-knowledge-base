# 使用标准 Fortran 过程获取命令行参数


> 原文地址: [https://mp.weixin.qq.com/s/Be3pJomCHHsJBmr9jqU2Tg](https://mp.weixin.qq.com/s/Be3pJomCHHsJBmr9jqU2Tg)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVX9SCMdbpeicN0Vgv8DSEoE7Za2icpGZCmMBJq3jmvPEmictNP8OJs56EnKVMic4FyBIr3YiaHMqFZM5MQ/640?wx_fmt=jpeg&from=appmsg)

在 Fortran 编程领域，有效地处理命令行参数是提升程序灵活性和用户交互性的重要环节。本文将基于 Fortran 2003 标准，详细介绍如何运用 Fortran 语言的标准过程来获取并处理命令行参数，确保代码的可移植性和标准化。

## 概览

在Fortran程序中，获取命令行参数是一个常见需求。虽然网络上有多种方法可以实现这一功能，但一些方法使用的是非标准过程。本文将专注于使用Fortran 2003标准过程来实现这一功能。

## 标准过程

自 Fortran 2003 起，标准引入了管理命令行参数的子程序和函数，包括：

-   `get_command()`：获取所有命令行参数组成的字符串。
    
-   `command_argument_count()`：返回不包含执行命令本身的参数数量。
    
-   `get_command_argument()`：根据编号获取特定的命令行参数。
    

这些函数和子程序的使用灵活，允许指定额外参数如 `command`、`length`、`value` 和 `status` 来控制行为和检查操作状态。执行子程序的结果以整数形式返回，0 表示成功，其他值则表示失败。

Fortran 程序中获取命令行参数的关键在于使用 `get_command_argument` 子程序。标准做法是先通过 `get_command_argument(number,length)` 获取第 n 个参数的长度，分配相应大小的字符串，再利用 `get_command_argument(number,value)` 取得参数的具体值。

## 示例代码

下面是一个示例程序，展示了如何高效地收集命令行参数，并模拟 C 语言中的 `argc` 和 `argv` 风格：

`program main     use, intrinsic :: iso_fortran_env     implicit none        type :: arguments       character(:), allocatable :: v     end type        integer(int32) :: argc     type(arguments), allocatable :: arg(:)          ! 获取不包括执行命令的参数个数     argc = command_argument_count()     ! 分配存储执行命令和参数的字符串数组     allocate (arg(0:argc))                    ! 获取每个参数     get_arguments: block       integer(int32) :: n, length_nth_arg       do n = 0, argc         ! 获取第n个参数的长度         call get_command_argument(number=n, &           length=length_nth_arg)         ! 分配与第n个参数长度相同的字符串         allocate (character(length_nth_arg) :: arg(n)%v)         ! 获取第n个参数的值         call get_command_argument(number=n, value=arg(n)%v)         ! 打印         print *, n, arg(n)%v         end do     end block get_arguments   end program main   `

此代码首先通过 `command_argument_count()` 确定参数总数，接着动态地为每个参数分配存储空间，并使用两步调用 `get_command_argument()` 分别获取长度和实际值。运行此程序时，命令行参数的索引（从 0 开始）和对应的值会被输出。

编译并执行上述程序后，就会输出包含执行命令的自变量编号及其字符串，例如：

`main.exe --help --version              0 main.exe              1 --help              2 --version   `

## 错误处理

对于错误处理，可以通过向 `get_command_argument()` 传递 `status` 参数来检查操作是否成功。如果 `status` 不等于 0，则说明有错误发生。例如：

`program main     use, intrinsic :: iso_fortran_env     implicit none      ! ...     integer(int32) :: stat   ! ...          call get_command_argument(number=n, &         value=arg(n)%v, status=stat)       if (stat /= 0) then         print *, "error in argument: ", n         stop       end if   ! ...   end program main   `

## 小结

使用Fortran标准过程来获取命令行参数是一种可靠且符合标准的方法。通过本文的示例，我们可以轻松地在Fortran程序中处理命令行参数。随着 Fortran 语言的不断演进，使得处理这类输入变得更加直观和用户友好。我们期待未来会更多便利的功能被引入Fortran。

## 推荐阅读

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。