在Fortran编程中，`all`和`any`这两个函数是处理数组的强大工具。它们可以简化条件判断，使得代码更加简洁和高效。本文将详细介绍这两个函数的高级应用，包括数组等价性比较、形状检查、索引上下限检查以及如何检查数组中是否存在`NaN`值。

## Fortran的关系运算符

在介绍`all`和`any`函数之前，我们先来回顾一下Fortran中的关系运算符（`==`, `/=`, `<`, `<=`, `>`, `>=`）。这些运算符比较左右两边的值，并根据满足的关系返回`.true.`或`.false.`。

`print *, (1 == 2), (1 /= 2), (1 < 2), (1 > 2)    ! F T T F   `

在Fortran中，关系运算符不仅可以用于标量，还可以用于数组。当用于数组时，返回的结果也是一个数组。

`integer :: a(2, 3), b(2, 3)   a = reshape([(i, i=1, product(shape(a)))], shape(a))    ! [[1, 2], [3, 4], [5, 6]]   b = reshape([(i, i=product(shape(b)), 1, -1)], shape(b))    ! [[6, 5], [4, 3], [2, 1]]   print *, a < b    ! [[T, T], [T, F], [F, F]]   `

注：这里的内置函数`shape(array）` 用于返回`array`的形状数组，`product(array)`用于返回数组`array`中所有元素的乘积。

## `all`函数和`any`函数

`all`和`any`函数是Fortran中用于数组简化的两个非常重要的函数。它们可以对数组进行归约操作。


  

## `all`和`any`的典型使用场景

### 「数组值的等价性比较」

当需要比较两个数组的等价性时，可以使用`all`或`any`。例如，要判断两个数组`a`和`b`的所有元素是否相等：

`if (all(a == b)) then       ! 两个数组所有元素相等的处理   end if   `

要判断两个数组`a`和`b`中是否至少有一个元素不等：

`if (any(a /= b)) then       ! 两个数组至少有一个元素不等的处理   end if   `

对于实数数组，由于浮点数的精度问题，通常不能直接使用`==`进行比较。相反，我们可以使用一个阈值（通常是机器的最小精度单位）来判断两个数是否“足够接近”，从而视为相等：

`all(abs(a - b) < epsilon(a))   `

这里使用了内置函数`epsilon(a)` ，用于返回与`a`相同种类的最小正数。

### 「数组形状检查」

在比较两个数组`a`和`b`之前，通常需要确保它们的形状相同。结合`shape`使用`all`函数可以轻松检查这一点：

`all(shape(a) == shape(b))   `

例如，

`integer :: a(2, 3), b(3, 2)   print *, shape(a) ! [2, 3]   print *, shape(b) ! [3, 2]   print *, all(shape(a) == shape(b)) ! F   `

### 「数组的索引上下限检查」

当有多个条件需要使用`.and.`或`.or.`进行评估时，使用`all`或`any`可以简化条件判断。例如，比较两个二维数组`a`和`b`的索引上下限。如果不使用`all`，通常需要这么写：

`if (lbound(a, dim=1) == lbound(b, dim=1) .and. &       lbound(a, dim=2) == lbound(b, dim=2) .and. &       ubound(a, dim=1) == ubound(b, dim=1) .and. &       ubound(a, dim=2) == ubound(b, dim=2)) then       ! 索引上下限全部匹配的处理   end if   `

使用`all`的话，就会简洁很多：

`if (all([lbound(a) == lbound(b), &     ubound(a) == ubound(b)])) then       ! 索引上下限全部匹配的处理   end if   `

### 「检查数组中是否存在`NaN`」

Fortran提供了`ieee_arithmetic`模块中的`ieee_is_nan`函数来检查一个数是否为`NaN`。由于`ieee_is_nan`是一个元素函数，它可以接受数组参数，并返回一个逻辑数组，指示每个元素是否为`NaN`。使用`any`函数可以轻松检查数组中是否存在`NaN`：

`use, intrinsic :: ieee_arithmetic   real :: a(10, 10)   a(:, :) = 0d0   a(2, 3) = ieee_value(0., ieee_quiet_nan)      if (any(ieee_is_nan(a))) then     print *, "a has ", count(ieee_is_nan(a)), " NaN"   end if   `

注：`count(mask [, dim])`也是内置函数，用于返回逻辑数组`mask`中`.true.`的元素数量。

## 小结

本文介绍了`all`和`any`函数在Fortran中的高级应用。这些函数在处理数组时非常有用，特别是在数值计算中。希望本文能帮助你更有效地使用`all`和`any`函数，提高Fortran编程的效率。


**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。