# 在Fortran中实现≈运算符


> 原文地址: [https://mp.weixin.qq.com/s/xGqcDOND2AhgW4SIhVPW7Q](https://mp.weixin.qq.com/s/xGqcDOND2AhgW4SIhVPW7Q)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVWrn7o7smSdbpRDfYMwJPnEC8UW3Kx0LXkvibtz4Csq8xsDpRXPjK4O3n5zVWMoBLibptbR3oumk65A/640?wx_fmt=jpeg)

在数值计算中，浮点数的等价性比较是一个常见需求。然而，由于浮点数的表示方式，直接使用等号（==）来判断两个数是否相等往往不是最佳选择。在Fortran中，我们可以通过自定义一个近似等价运算符（≈）来简化这一过程。本文将介绍如何在Fortran中实现这一功能，并展示其在实数标量和数组等价性比较中的应用。

## 实现 ≈ 运算符

在数值计算中，判断两个实数是否相等时，通常会设定一个容差值，只要两数之差的绝对值小于这个容差，就认为它们“相等”。在Fortran中，我们可以通过定义一个泛型接口和相应的具体实现来创建一个自定义的近似等价运算符。这个运算符将比较两个数是否在某个容忍度范围内相等。

### 「定义泛型接口」

为了使用自定义的运算符，我们首先需要通过`interface`语句定义一个泛型接口，例如

`interface operator(.approx.)     procedure :: approximate !标量     procedure :: approximate_rank1 !一维数组       ! 可以为其维度添加更多的实现   end interface   `

这里定义一个近似等价运算符`.approx.`，并对实数标量和一维数组的比较函数`approximate`和`approximate_rank1`进行了绑定。

### 「定义函数」

接下来为函数提供具体的实现。对于标量实数的比较，我们继续定义函数 `approximate`，它将两个 `real` 类型的数作为输入，并返回一个逻辑值，表示它们是否在某个容忍度范围内相等。

`pure function approximate(a, b) result(approx_eq)     implicit none     real, intent(in) :: a     real, intent(in) :: b     logical :: approx_eq        approx_eq = abs(a - b) <= epsilon(a)   end function approximate   `

上述函数通过计算两个实数之差的绝对值，然后与给定的容差进行比较。这里我们使用了内置函数`epsilon(a)` 提供容差，它会返回与`a`相同种类的最小正数。当然，你可以根据具体的问题和需要，设定其他的容差。

对于数组，我们继续定义 `approximate_rank1` 函数，它将两个相同形状的一维实数数组作为输入，并返回一个逻辑值，表示数组中的所有元素是否都满足近似相等的条件。

`pure function approximate_rank1(a, b) result(approx_eq)     implicit none     real, intent(in) :: a(:)     real, intent(in) :: b(:)     logical :: approx_eq          approx_eq = all(abs(a - b) <= epsilon(a))   end function approximate_rank1   `

上述函数和 `approximate`函数非常相似，我们在最后使用了内置函数`all`判断所有元素是否满足近似相等的条件。`all`函数对数组执行逻辑归约操作，当且仅当数组中的所有元素为`.true.`时返回`.true.`，这对于处理涉及数组的条件判断特别有效。

### 「封装」

将以上内容封装到以下模块，以供后面调用。

`module new_operator     interface operator(.approx.)       procedure :: approximate !标量       procedure :: approximate_rank1 !一维数组     end interface   contains     pure function approximate(a, b) result(approx_eq)       implicit none       real, intent(in) :: a       real, intent(in) :: b       logical :: approx_eq          approx_eq = abs(a - b) <= epsilon(a)     end function approximate        pure function approximate_rank1(a, b) result(approx_eq)       implicit none       real, intent(in) :: a(:)       real, intent(in) :: b(:)       logical :: approx_eq          approx_eq = all(abs(a - b) <= epsilon(a))     end function approximate_rank1   end module new_operator   `

### 「使用`.approx.`运算符」

一旦定义了运算符和相应的函数，我们就可以使用`.approx.`运算符来比较两个数或两个数组是否近似相等。

`program test     use new_operator     real :: x, y     real :: a(3), b(3)     logical :: is_equal          x = 0.1 * 3.0     y = 1.0 - 0.7     is_equal = x .approx. y     print*,is_equal     !根据x和y是否近似相等返回.true.或.false.          a = [0.1 * 3.0, 0.2 * 4.0, 0.3 * 5.0]     b = [0.3, 0.8, 1.5]     is_equal = a .approx. b     print*,is_equal     !根据a和b是否近似相等返回.true.或.false.   end program test   `

容易发现，使用我们自定义的`.approx.`运算符，比较两个数或两个数组是否相等的过程变得非常简单。

## 小结

虽然Fortran没有直接提供`≈`这样的近似比较运算符，但我们可以通过自定义函数，有效地实现对实数的近似比较逻辑。这不仅使得代码更为简洁，也提高了程序处理浮点数比较时的鲁棒性和准确性。

  

## 推荐阅读

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。