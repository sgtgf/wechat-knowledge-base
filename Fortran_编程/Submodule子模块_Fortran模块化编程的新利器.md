在现代软件开发中，模块化（modularity）是提高代码可读性、可维护性和复用性的关键。Fortran 作为一门历史悠久但持续演进的科学计算语言，在 Fortran 2008 标准中引入了一项重要特性——Submodule（子模块）。这一机制极大地增强了 Fortran 的模块化能力，尤其在大型项目中能显著提升编译效率与封装性。本文将结合具体算例，深入浅出地介绍 Submodule 的设计动机、语法结构、使用场景及其优势。

## 为什么需要 Submodule

在 Fortran 2008 之前，模块（`module`）是组织代码的主要方式。一个模块可以包含类型定义、变量、接口和过程（函数或子程序）。然而，随着项目规模扩大，模块文件往往会变得臃肿不堪：

-   所有过程的实现必须写在模块内部；
    
-   修改任何一个过程的实现，都会导致整个模块重新编译；
    
-   更严重的是，任何使用该模块的其他单元（如其他模块或主程序）也必须随之重新编译——这被称为“**编译级联（compilation cascade）**”。
    

此外，若想将某些私有过程的实现移出模块以减小其体积，传统做法只能将其改为外部过程（external procedure）或放入另一个模块。但这会破坏封装性：外部过程无法访问原模块中的 `private` 实体，而新建模块又可能暴露不应公开的细节。

为解决这些问题，ISO/IEC TR 19767:2005《Enhanced Module Facilities》提出了增强模块设施，并最终被纳入 **Fortran 2008 标准**，其中核心就是 **Submodule**。

## Submodule 的基本概念

Submodule 允许我们将模块中某个过程的**接口（interface）**保留在主模块中，而将其**实现（body）**移到一个独立的源文件中。这种分离带来三大好处：

1.  **减少主模块体积**：主模块只保留声明，逻辑清晰；
    
2.  **避免不必要的重编译**：修改实现只需重编译子模块，不影响使用主模块的其他单元；
    
3.  **保持封装性**：子模块通过“宿主关联（host association）”可访问主模块的所有实体（包括 `private` 成员），但兄弟子模块之间不能互相访问彼此的局部实体，实现了细粒度的信息隐藏。
    

Submodule 支持**层次结构**：一个子模块可以拥有自己的子模块（称为“后代子模块”），形成树状依赖关系。

## 语法结构详解

### 1\. 主模块（Parent Module）

主模块中使用 `interface` 块声明过程的接口，并用 `module function` 或 `module subroutine` 指明这是一个将在子模块中实现的过程。

`module points       implicit none       private       public :: point, point_dist          type :: point           real :: x, y       end type point          interface           module function point_dist(a, b) result(distance)               type(point), intent(in) :: a, b               real :: distance           end function point_dist       end interface   end module points   `

注意：

-   `point` 类型和 `point_dist` 接口是公开的；
    
-   所有其他内容默认为 `private`；
    
-   `module function` 表示其实现在子模块中。
    

### 2\. 子模块（Submodule）

子模块通过 `submodule (parent_module) submodule_name` 语法声明其归属，并在 `contains` 后实现过程。

`submodule (points) points_a       implicit none   contains       module procedure point_dist           distance = sqrt((a%x - b%x)**2 + (a%y - b%y)**2)       end procedure point_dist   end submodule points_a   `

这里使用了简写形式 `module procedure`，无需重复参数列表和返回类型——编译器会自动从主模块的接口继承这些信息。当然，也可以完整写出函数体，但推荐使用简写以减少冗余。

## 完整算例：几何点运算库

下面我们构建一个稍复杂的例子，展示 Submodule 在实际项目中的应用。

### 场景描述

我们要实现一个二维点（`point`）的操作库，支持：

-   计算两点间距离；
    
-   计算点到原点的距离；
    
-   判断两点是否重合；
    
-   提供格式化输出。
    

这些功能中，有些是公开接口，有些是内部辅助函数。

### 步骤 1：定义主模块 `geometry_mod`

`! geometry_mod.f90   module geometry_mod       implicit none       private       public :: point, distance, origin_distance, is_equal, print_point          type :: point           real :: x = 0.0, y = 0.0       contains           procedure :: init => point_init       end type point          interface           module function distance(p1, p2) result(d)               type(point), intent(in) :: p1, p2               real :: d           end function distance              module function origin_distance(p) result(d)               type(point), intent(in) :: p               real :: d           end function origin_distance              module function is_equal(p1, p2, tol) result(eq)               type(point), intent(in) :: p1, p2               real, intent(in), optional :: tol               logical :: eq           end function is_equal              module subroutine print_point(p)               type(point), intent(in) :: p           end subroutine print_point       end interface      contains       ! 内联过程：简单初始化，可保留在模块内       subroutine point_init(self, x, y)           class(point), intent(out) :: self           real, intent(in) :: x, y           self%x = x           self%y = y       end subroutine point_init      end module geometry_mod   `

### 步骤 2：实现子模块 `geometry_impl`

`! geometry_impl.f90   submodule (geometry_mod) geometry_impl       implicit none   contains       module procedure distance           d = sqrt((p1%x - p2%x)**2 + (p1%y - p2%y)**2)       end procedure distance          module procedure origin_distance           d = sqrt(p%x**2 + p%y**2)       end procedure origin_distance          module procedure is_equal           real :: tolerance           tolerance = 1e-6           if(present(tol)) tolerance = tol           eq = (abs(p1%x - p2%x) <= tolerance) .and. &                (abs(p1%y - p2%y) <= tolerance)       end procedure is_equal          module procedure print_point           write(*, "(A, F8.3, A, F8.3, A)") "Point(x=", p%x, ", y=", p%y, ")"       end procedure print_point      end submodule geometry_impl   `

### 步骤 3：测试主程序

`! test_geometry.f90   program test_geometry       use geometry_mod       implicit none       type(point) :: p1, p2          call p1%init(3.0, 4.0)       call p2%init(1.0, 2.0)          print *, "Distance between p1 and p2:", distance(p1, p2)       print *, "Distance from p1 to origin:", origin_distance(p1)       print *, "Are p1 and p2 equal?", is_equal(p1, p2)       call print_point(p1)      end program test_geometry   `

### 编译与运行（以 gfortran 为例）

`gfortran -c geometry_mod.f90   gfortran -c geometry_impl.f90   gfortran -c test_geometry.f90   gfortran geometry_mod.o geometry_impl.o test_geometry.o -o test.exe   ./test.exe   `

输出示例：

 `Distance between p1 and p2:   2.82842708    Distance from p1 to origin:   5.00000000    Are p1 and p2 equal? F   Point(x=   3.000, y=   4.000)`

目前主流 Fortran 编译器均已支持 Submodule，建议在新开发的项目中启用 `-std=f2008` 或更高标准。

## Submodule 的高级特性

### 1\. 层次化子模块

子模块可以进一步派生子模块：

`submodule (geometry_mod) advanced_ops       implicit none   end submodule advanced_ops      submodule (advanced_ops) vector_ops       implicit none   contains       ! 可访问 geometry_mod 和 advanced_ops 中的所有实体   end submodule vector_ops   `

这种结构适合大型库的分层设计。

### 2\. 信息隐藏的强化

-   主模块控制对外接口；
    
-   子模块可访问主模块所有内容（含 `private`）；
    
-   兄弟子模块互不可见：`submodule A` 无法访问 `submodule B` 中定义的局部变量或过程，即使它们同属一个主模块。
    

这比传统“将私有过程移入辅助模块”的做法更安全，因为后者可能无意中暴露接口。

## 编译效率优势

假设主模块有 100 个过程，分布在 10 个子模块中，有 50 个程序单元使用它。若修改其中一个子模块中的一个函数：

-   **无 Submodule**：修改任一过程 → 重编译整个模块 → 所有 50 个使用该模块的程序单元全部重编译；
    
-   **使用 Submodule**：仅重编译该子模块及其后代 → 主模块 `.mod` 文件不变 → 其他程序单元无需重编译。
    

在大型项目（如气候模型、CFD 求解器）中，这种差异可能将编译时间从几十分钟缩短到几秒。

## 小结

Submodule 是 Fortran 2008 带来的革命性特性之一，它不仅解决了长期存在的模块臃肿与编译效率问题，还强化了封装与信息隐藏原则。对于从事高性能计算、数值模拟或大型科学软件开发的 Fortran 程序员而言，掌握 Submodule 的使用是迈向现代化 Fortran 编程的重要一步。

  

往期推荐

[

对 Fortran 初学有何建议?


](https://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247485015&idx=1&sn=f32fae4a8e0774240407128c8d1b35a5&scene=21#wechat_redirect)

[

现代Fortran探索之旅 | Module模块


](https://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484413&idx=1&sn=bc6a2c9ab33e140df5e10f3604588fc0&scene=21#wechat_redirect)

[

现代Fortran探索之旅 | Subroutine 和 Function


](https://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484411&idx=1&sn=c53aebec720214dd71110dcf1bd331b7&scene=21#wechat_redirect)