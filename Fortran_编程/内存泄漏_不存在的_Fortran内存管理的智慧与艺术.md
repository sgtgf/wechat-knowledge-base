# 内存泄漏？不存在的！Fortran内存管理的智慧与艺术


> 原文地址: [https://mp.weixin.qq.com/s/h6G65gsy4d1ekDfyompUOA](https://mp.weixin.qq.com/s/h6G65gsy4d1ekDfyompUOA)

在编程的世界里，内存管理是一个无法回避的主题，它直接关系到程序的性能与稳定性。对于初学者而言，不当的内存管理往往成为学习过程中的拦路虎，尤其是在C或C++这类语言中，手动分配与释放内存的操作稍有不慎就会导致内存泄漏或是段错误，这些错误不仅难以调试，还可能导致程序崩溃或资源耗尽。相比之下，Fortran通过其内置的机制，为开发者提供了一条相对平滑的内存管理之路。

## Fortran内存管理的优雅之处

不同于C/C++需要手动调用`malloc()`和`free()`来管理堆内存，Fortran采取了一种更为自动化的方式。当你在Fortran中声明一个可分配的数组时，使用`allocate()`函数为数组分配内存，一旦这个数组超出了其作用域，Fortran的标准要求自动释放这些内存。这种机制极大地减轻了程序员的负担，减少了因忘记释放内存而导致的内存泄漏问题。

想象一下下面的场景：你编写了一个Fortran程序，其中有一段代码用来创建一个动态数组`x`，用于存储用户指定大小的平方数序列。在C语言中，你必须在不再需要这个数组时明确地调用`free()`释放内存。但在Fortran中，这一切都是自动完成的，如以下示例所示：

`program memExample      integer, dimension(:), allocatable :: x      integer :: i, n         write(*,*) "Enter the size of the array: "      read(*,*) n      allocate(x(n))         do i = 1, n         x(i) = i * i      end do         ! 使用完x后，无需显式释放，Fortran会自动处理   end program memExample   `

这段代码展示了Fortran的便利性，尽管我们没有明确释放`x`，但当程序执行到`end program`时，数组`x`占用的内存会被自动回收。

## 初始化动态数组与高级特性

Fortran不仅仅满足于自动释放内存，它还提供了丰富的功能来简化数组的初始化和操作。比如，使用`source`关键字可以在分配内存的同时初始化数组，这对于快速设置默认值非常有用：

`allocate(x(n), source = 0)   `

这样，新分配的数组`x`中的每个元素都会被初始化为0，省去了额外的循环赋值步骤。

Fortran 2003以后的版本更是引入了对「子程序中可分配数组参数」的支持，以及`move_alloc()`这样的高级功能，进一步增强了内存管理的灵活性。通过`move_alloc()`，我们可以轻松地在数组间转移分配，这对于调整数组大小或在函数间高效传递数据尤为重要。例如，下面的`resize()`子程序演示了如何在不丢失原始数据的情况下调整数组大小：

`subroutine resize(arr, new_size)      integer, dimension(:), allocatable, intent(inout) :: arr      integer, intent(in) :: new_size      integer, dimension(:), allocatable :: temp      integer :: min_size         if (allocated(arr)) then         call move_alloc(arr, temp)      end if      allocate(arr(new_size))      if (allocated(temp)) then         min_size = min(size(arr), size(temp))         arr(1:min_size) = temp(1:min_size)         deallocate(temp)      end if   end subroutine resize   `

如果数组`arr`已经被分配，它会使用`move_alloc()`将内容移动到`temp`，并在此过程中释放`arr`。然后，`arr`被重新分配为大小`new_size`。如果`temp`被分配，它会将相关数量的元素转回`arr`。通过这种方式，数组`arr`的尺寸可以根据需要动态调整，同时保持其原有数据的完整性。

## 保留数据：`save`属性的应用

有时候，我们希望某些数据在程序的多次调用中得以保留，这时就可以利用Fortran的`save`属性。它允许变量或数组跨函数调用维持其状态。例如，以下`alloc_arr()`子程序展示了如何使用`save`属性来创建一个在每次调用时都会增长的数组：

`subroutine alloc_arr(n)      integer, intent(in) :: n      integer, dimension(:), allocatable, save :: arr      integer :: i         if (.not. allocated(arr)) then         allocate(arr(n))         do i = 1, n            arr(i) = i         end do      else         do i = 1, n            arr(i) = arr(i) + 2         end do      end if         print *, arr   end subroutine alloc_arr   `

在这个例子中，数组`arr`通过`save`属性在子程序的多次调用之间保持其状态。每次调用`alloc_arr()`时，如果`arr`已经分配，则其元素值会增加2，而不是重新创建。例如，如果`n=4`且`alloc_arr()`被调用三次，则会输出如下结果：

>           1           2           3           4  
>           3           4           5           6  
>           5           6           7           8

这种机制对于需要维护状态信息或累积结果的场景特别有用。

## 结合递归函数的内存管理

递归函数是另一种考验内存管理能力的情境。Fortran通过`save`属性同样能优雅地处理递归中的状态跟踪。以计算阶乘并统计调用次数的递归函数为例：

`recursive function factorial(n) result(res)      integer, intent(in) :: n      integer :: res      integer, save :: call_count = 0         call_count = call_count + 1      if (n == 1) then         print *, "Number of calls: ", call_count         res = 1      else         res = n * factorial(n - 1)      end if   end function factorial   `

这里，`call_count`变量使用了`save`属性，使得每次递归调用时都能正确累加调用次数，即便函数返回，其值也不会丢失。

## 总结

综上所述，Fortran通过自动释放超出作用域的内存、支持初始化动态数组、提供高级内存操作工具（如`move_alloc()`）、以及允许通过`save`属性保留数据状态等特性，极大地简化了内存管理的复杂度。这些特性不仅降低了内存泄露的风险，还提高了编程效率和代码的可读性。

对于新手程序员而言，Fortran在内存管理方面的友好设计，无疑是一大福音，它让开发者能够更加专注于算法逻辑，而非繁琐的内存控制。随着编程语言的发展，Fortran在内存管理上的进步，无疑是向着更高效、更易用的编程环境迈进的重要一步。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。