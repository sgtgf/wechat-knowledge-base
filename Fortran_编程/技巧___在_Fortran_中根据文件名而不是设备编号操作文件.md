在Fortran编程领域，处理文件输入输出时，传统上依赖于为每个文件或I/O设备分配一个特定的设备编号。尽管这一机制沿袭了Fortran悠久的历史传统，但在现代编程实践中，直接通过文件名来操作文件显得更为直观和便捷。本文将探讨如何在Fortran中实现这一目标，避免显式地使用设备编号，转而利用文件名作为操作依据。

## Fortran中的文件操作背景

Fortran将所有文件和输入输出设备抽象为“装置”，并为每个装置分配一个编号。例如，标准输出通常对应设备号5，而标准输入则为6。随着时间的发展，Fortran引入了如`output_unit`和`input_unit`这样的预定义常量来简化这些基本的I/O操作。尽管如此，在打开文件时，仍然需要手动关联一个设备编号与文件路径。

## Fortran 2008的新特性

从Fortran 2008开始，引入了`newunit`关键字，使得系统能自动分配一个未被使用的设备编号给文件，减轻了程序员手动管理设备编号的负担。以下是一个使用`newunit`的基本示例：

`use, intrinsic :: iso_fortran_env   integer(int32) :: unit_number   open(newunit=unit_number, file="test.txt")   write(unit_number, *) "test"   close(unit_number)   `

## 利用Inquire语句简化操作

尽管`newunit`提供了一定程度的便利，但仍然需要显式地管理这个额外的变量。为了进一步简化流程，我们可以利用`inquire`语句，这是一种查询语句，能够根据文件名获取文件状态或关联的设备编号。

例如，通过使用`opened`和`number`参数，检查“test.txt”是否已打开及其设备编号：

`use, intrinsic :: iso_fortran_env   integer(int32) :: unit_number   logical :: is_opened   inquire(file="test.txt", opened=is_opened, number=unit_number)   `

## 实现文件名到设备编号的映射函数

为了彻底消除对设备编号的直接依赖，可以设计一个函数，该函数仅需文件名作为输入，返回相应的设备编号。此函数首先尝试查询文件是否已经打开，如果已打开，则直接返回其设备编号；否则，自动打开文件并分配一个新的设备编号。

`function get_unit(filename) result(unit_number)     use, intrinsic :: iso_fortran_env     implicit none     character(*), intent(in) :: filename     integer(int32) :: unit_number     logical :: is_opened          inquire(file=filename, opened=is_opened, number=unit_number)     if (is_opened) return     open(newunit=unit_number, file=filename)   end function get_unit   `

这样，文件读写操作可以简化为直接调用此函数，而无需事先知道或管理设备编号：

`write (get_unit("test.txt"), *) "test"   close (get_unit("test.txt"))   `

## 小结

通过上述方法，我们成功地在Fortran程序中实现了基于文件名而非设备编号的操作方式，极大地方便了文件处理逻辑的编写与维护。利用`inquire`语句和`newunit`关键字的组合，不仅避免了显式的设备编号管理，也使得代码更加清晰和易于理解。虽然引入函数来间接操作文件可能引入了新的抽象层次，但这对于提升代码的可读性和灵活性而言是值得的。

  


**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。