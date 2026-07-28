在 Fortran 编程时，很多人都会对 `print` 与 `write` 语句之间的差别心存疑问：都是用于控制台输出，我该选择哪一个？

本文旨在剖析这两个语句的用途、差异以及在现代 Fortran 编程中的推荐实践。

## 控制台输出的两种方式

在处理控制台输出时，程序员通常会在 `print` 和 `write` 语句之间做出选择。

### 「print 语句」

`print` 语句是 Fortran 77 中引入的，它简洁明了，特别适合于简单的文本输出。例如，`print *,'Hello, World!'` 会直接将消息打印到控制台。视觉上，`print` 命令因其简洁性而易于辨认，适用于比较简单的输出场景。

### 「write 语句」

相比之下，`write` 语句的历史更为悠久，起源于 Fortran 66，用于设备无关的顺序 I/O 操作。随着时间的推移，`write(*,*)` 成为了向标准输出打印的标准方式。尽管它在功能上更为灵活，允许格式化输出和定向到不同文件单元，但在不需这些高级功能时，其语法相对繁琐。

## 汇编层面的等价性

有趣的是，在汇编层面，`print *,'hi'`与`write(*,*) 'hi'`是完全相同的，这在多个主流编译器（如gfortran, ifort）中得到了验证。使用 gfortran 时，两种输出方法对应的汇编代码均为：


这意味着，从执行效率角度考虑，两者并无区别。这就为程序员提供了灵活性，可以根据个人喜好和项目需求选择使用 `print` 或 `write`。

## 控制台I/O的标准化

说起规范化编程，就不得不提控制台输入/输出（I/O）的标准化问题。Fortran 2003 通过引入内建模块 `iso_fortran_env`，终于解决了长期存在的控制台 I/O 模糊性问题。该模块提供了一种标准方式，来引用标准输入（`stdin`）、标准输出（`stdout`）和标准错误（`stderr`），例如：

`module mymod     use, intrinsic:: iso_fortran_env, &     only: stdout=>output_unit, &     stdin=>input_unit, &     stderr=>error_unit   end module mymod   `

这里的「别名操作」（=>）不是必须的，但不得不承认 `stdin`、`stdout` 和 `stderr` 这样的命名确实要更流行一些。

## 推荐实践

-   「常规控制台打印」：对于日常简单的信息输出，建议使用 `print` 语句，如 `print *,'my text'`，以保持代码的清晰和简洁。
    
-   「高级控制台打印」：当需要更复杂的输出控制，如输出错误信息、管理非推进式输出或在不同输出目标间切换时，采用 `write(stdout,*)` 或类似形式会更加合适。
    

## 综合实例

下面是一个示例程序，展示了如何使用 `iso_fortran_env` 模块来引用标准输出，以及如何使用 `print` 和 `write` 输出语句在控制台和文件之间进行选择性输出。

`program main   use, intrinsic:: iso_fortran_env, &     only: stdout=>output_unit   implicit none   character(:), allocatable :: filename   character(256) :: buf   integer :: i, u      ! 从命令行获取输出文件名   call get_command_argument(1, buf, status=i)   if (i==0) then     ! 输出目标为文件     filename = trim(buf)  !自动分配字符串数组大小     print *, 'writing to ', filename     open(newunit=u, file=filename, form='formatted')   else     ! 输出目标为控制台     u = stdout   endif      i = 3 ! 测试数据   write(u,*) i, i**2, i*3      ! 输出结束，关闭非stdout的文件单位   if (u /= stdout) close(u)     print *,'goodbye'      end program main   `

## 小结

总而言之，虽然在某些情况下 `print` 和 `write` 在功能上可以互换，但根据具体需求选择最合适的语句，能显著提升代码的可读性和维护性。随着 Fortran 语言的不断进步，掌握这些细节对于现代科学计算领域的程序员来说非常重要。通过合理运用 `iso_fortran_env` 模块和理解 `print` 和 `write` 语句的最佳实践场景，开发者能够更加高效、清晰地进行输出操作。