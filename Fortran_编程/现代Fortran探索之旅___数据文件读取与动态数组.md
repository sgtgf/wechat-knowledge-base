# 现代Fortran探索之旅 | 数据文件读取与动态数组


> 原文地址: [https://mp.weixin.qq.com/s/d4wYoYy\_\_IK\_ZdK1h5OqGA](https://mp.weixin.qq.com/s/d4wYoYy__IK_ZdK1h5OqGA)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVV0Z1EwtEn9svQy6dNAOcDdXLtaaGiaL0xrianiblaSbiavmRgSmJJF4vBFxIgIrlqmxUg2dSn9wa4RwQ/640?wx_fmt=jpeg)

在科学计算和数据处理的领域中，Fortran语言因其高效的数值计算能力和对数组操作的强大支持而广受欢迎。在处理实际问题时，在处理大规模数据时，文件的读取和存储成为了一个不可或缺的环节。本文将基于一个具体的案例，探讨如何使用Fortran进行数据文件的读取，以及如何有效地利用动态数组来处理不确定大小的数据集。

## 为什么使用动态数组？

在处理实际问题时，数据集的大小往往是未知的，或者在运行时才能确定。例如，在有限元分析中，输入的节点坐标文件可能包含任意数量的节点。如果使用静态数组，我们需要预先定义一个足够大的数组来存储所有数据，这不仅浪费内存资源，也限制了程序的扩展性。相比之下，动态数组可以在运行时根据需要分配和调整大小，从而更高效地使用内存，并且使程序更加灵活和可扩展。

## 如何读取数据文件？

读取数据文件通常涉及到逐行读取数据，并将其存储在数组中。Fortran提供了多种方式来实现这一过程，但关键在于如何将文件中的每行数据正确地解析并存储到数组中。

### 「示例：节点坐标文件」

假设我们有一个名为 `INPUT.txt` 的文件，它包含了一个正方形的四个节点的三维坐标。文件内容如下：

> 4 3  
> 0.0 0.0 0.0  
> 1.0 0.0 0.0  
> 1.0 1.0 0.0  
> 0.0 1.0 0.0

这里，第一行 `4 3` 表示有4个节点，每个节点有3个坐标值（x, y, z）。接下来的行分别表示每个节点的坐标。

### 「编程初探」

为了读取这样的文件，我们可以编写一个Fortran程序，使用动态数组来存储节点坐标，并逐行读取文件内容。

作为初步尝试，我们可以先写一个小程序来实现所需的基本功能：

`program main       implicit none       real, allocatable :: array(:,:) !动态数组       integer :: m, n       integer :: i, j              ! 按行读取，按列存储       open(10, file='INPUT.txt')       read(10, *) m, n       allocate(array(n, m)) ! 获取到数据个数后分配内存       do i=1, m           read(10, *) (array(j, i),j=1,n) ! 读取数据并存储       end do       close(10)              ! 使用array数组       write(*, *) "data:"       do i=1, m           write(*, *) (array(j, i), j=1,n)       end do            end program main   `

编译运行一下，一切正常：

> data:  
> 0.00000000       0.00000000       0.00000000  
> 1.00000000       0.00000000       0.00000000  
> 1.00000000       1.00000000       0.00000000  
> 0.00000000       1.00000000       0.00000000

### 「代码升级尝试」

在编写程序时，我们都希望尽量将程序模块化，即把一个复杂工作细分成多个简单的过程。因此，我们希望将读写过程写在一个子过程中，使代码结构更清晰。我们来尝试升级一下上面的代码：

`program main       implicit none       real, allocatable :: array(:,:)       integer :: m, n       integer :: i, j              ! 利用子程序传入未知的数据个数m,n和未分配内存的数组       call readFile(m, n, array)              ! 使用array数组       write(*, *) "data:"       do i=1, m           write(*, *) (array(j, i), j=1,n)       end do          end program main      ! 定义子程序readFile   subroutine readFile(m, n, array)       integer, intent(inout) :: m, n       ! 此处仍然要声明allocatable           real, allocatable, intent(inout) :: array(:,:)       integer :: i, j              open(10, file='INPUT.txt')       read(10, *) m, n       allocate(array(n, m))       do i=1, m           read(10, *) (array(j, i),j=1,n)       end do       close(10)      end subroutine readFile   `

这段代码看起来逻辑没有什么错误，但编译后就会出现错误提示

> Error: Explicit interface required for 'readfile' at (1): allocatable argument

这是因为Fortran编译器需要知道子程序的接口定义，才能正确处理动态数组参数。

### 「解决方案」

#### 「方法一：Interface」

这个方法是利用了Fortran的`Interface`语法，在调用函数`readFile`的地方加入`Interface`，来明确子程序的接口定义。这样，编译器就能正确地理解子程序的行为。只要对上面代码略加修改即可。

`program main       implicit none       real, allocatable :: array(:,:)       integer :: m, n       integer :: i, j           !-------INTERFACE-------       interface           subroutine readFile(m, n, array)               integer, intent(inout) :: m, n               real, allocatable, intent(inout) :: array(:,:)           end subroutine       end interface       !-------INTERFACE-------              ! 调用readFile子程序       call readFile(m, n, array)              ! 使用array数组       write(*, *) "data:"       do i=1, m           write(*, *) (array(j, i), j=1,n)       end do          end program main      ! subroutine readFile(m, n, array) 不改动      `

这种方法有一个缺点就是，如果你在几个不同的过程里都调用了`readFile`，那么在这些过程中都要加入`interface`块，过于麻烦。

#### 「方法二：Module」

另一种解决方案是使用模块（`Module`）。我们可以将子程序封装在一个模块文件中，并在主程序中使用该模块。

对于这里所讨论的问题，具体实现方法也很简单：把`readFile`放在`Module`中，所有使用了`readFile`的过程或函数只需在开头加上一句 `use xxxModule`。

`program main       use myModule ! 这句一定要有       implicit none       real, allocatable :: array(:,:)       integer :: m, n       integer :: i, j       ! 调用readFile子程序        call readFile(m, n, array)       write(*, *) "data:"       do i=1, m           write(*, *) (array(j, i), j=1,n)       end do          end program main   `

在另一个myModule.f90文件中：

`module myModule      contains   ! 封装readFile   subroutine readFile(m, n, array)       integer, intent(inout) :: m, n       real, allocatable, intent(inout) :: array(:,:)       integer :: i, j              open(10, file='INPUT.txt')       read(10, *) m,n       allocate(array(n, m))       do i=1, m           read(10, *) (array(j, i),j=1,n)       end do       close(10)       end subroutine readFile           end module myModule   `

容易发现，使用模块的方法可以避免在每个调用子程序的地方都添加`Interface`块，使得代码更加清晰和易于维护。

## 小结

通过本文的讨论，我们了解了如何使用Fortran读取数据文件，并利用动态数组来处理不确定大小的数据集。同时，我们也探讨了两种解决子程序中动态数组参数编译错误的有效方法。这些技术将有助于编写更加高效、灵活和可维护的Fortran程序。通过合理地使用动态数组和模块化设计，我们可以提升程序的性能，简化代码结构，并为未来的扩展和维护打下坚实的基础。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于 Fortran 90 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的免费试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。