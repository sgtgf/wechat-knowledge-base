# 一题多解 | Fortran中的阶乘


> 原文地址: [https://mp.weixin.qq.com/s/L\_QCYRsfH9T037SM13\_e-A](https://mp.weixin.qq.com/s/L_QCYRsfH9T037SM13_e-A)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVUQCn96bP7hPmBV5GGjKib0wNzqs8XdcrZNjaE0M2HXKcduVw15D4bb5rhyQy2IrwCnADB5HhB1uGg/640?wx_fmt=jpeg&from=appmsg)

  

当我们谈论数值计算领域的编程语言时，Fortran常常被提及为一个历史悠久且功能强大的工具。然而，新手们可能会惊讶地发现，这样一个以数值计算见长的语言竟然没有内置计算阶乘的函数。本文将揭示这一现象背后的原因，并介绍几种实现阶乘计算的有效方法。

## 结论先行：`gamma` 函数

首先，一个快速而简洁的答案是：可以利用Fortran数学库中的`gamma`函数来间接计算阶乘。

`gamma` 函数和阶乘有以下关系：

`𝑛!=Γ(𝑛+1)`

例如，计算10的阶乘，只需一行代码即可完成：

`integer :: n = 10   print *, gamma(dble(n + 1))    ! 输出: 3628800.0000000000   `

注意，由于`gamma`函数接受并返回实数，我们需要使用`dble`对整数输入进行类型转换。

`gamma`函数比阶乘函数更为通用，它不仅覆盖了所有非负整数（即阶乘的情况），还能处理实数和复数域内的值，为我们的计算提供了更全面的选择。因此，直接使用`gamma`函数计算阶乘，通过简单地将整数参数加一并转换为浮点数，即可得到所需结果。

## 多样化的实现路径

### 「封装`gamma`函数」

为了更加方便地调用，我们可以封装上述`gamma`函数的代码到一个名为`factorial`的函数中：

`function factorial(n) result(res)     use, intrinsic :: iso_fortran_env     implicit none     integer(int32), intent(in) :: n     integer(int64) :: res     res = nint(gamma(dble(n + 1)), int64)   end function factorial   `

这样，我们就可以像调用其他标准库函数一样调用`factorial(n)`来计算阶乘了。

### 「数组乘积」

Fortran还提供了另一种优雅的解决方案，利用数组的`product`函数。构建一个从1到n的整数序列，然后计算这个序列的乘积：

`integer(int32) :: i,n = 10   integer(int64) :: factorial   factorial = product([(i, i=1, n)])   `

这种方法简洁高效。对于`n`和`factorial`为常量的情况，可以继续配合`parameter`属性，在编译时即可完成计算。这无疑是获取阶乘值的最快途径。

### 「再探经典：递归函数」

尽管不是Fortran的标准特性，递归也是实现阶乘的经典方式：

`recursive function factorial_recursive(n) result(res)     use, intrinsic :: iso_fortran_env     implicit none     integer(int32), intent(in) :: n     integer(int64) :: res     if (n > 0) then       res = n * factorial_recursive(n - 1)     else       res = 1     end if   end function factorial_recursive   `

从Fortran 2018开始，不需显式声明`recursive`属性也能直接编写递归函数。需要注意的是，递归方法在处理大数时可能遇到栈溢出的问题，因此在实际应用中需谨慎选择。

## 小结

Fortran未直接提供阶乘函数的原因，在于其拥有更为泛化的`gamma`函数。利用`gamma`函数，或者通过数组乘积、递归等方式，我们都能轻松实现阶乘计算。了解这些不同的实现策略，不仅能丰富我们的编程技能，还能让我们在面对数值计算挑战时更加游刃有余。

## 推荐阅读

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。