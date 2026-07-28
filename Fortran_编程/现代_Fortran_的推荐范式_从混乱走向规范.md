# 现代 Fortran 的推荐范式：从混乱走向规范


> 原文地址: [https://mp.weixin.qq.com/s/PXdha12ZvK3Jvb8r-lOMbA](https://mp.weixin.qq.com/s/PXdha12ZvK3Jvb8r-lOMbA)

![图片](现代_Fortran_的推荐范式_从混乱走向规范_images/img_000_72c346886810.gif)

Fortran（Formula Translation）作为世界上最早出现的高级编程语言之一，自1957年诞生以来，已经走过了近七十年的历程。它曾是科学计算领域的绝对霸主，如今虽不再如当年那般显赫，但在高性能计算、量子化学、材料模拟、气候建模等核心科研领域，依然占据着不可替代的地位。然而，Fortran 的悠久历史也带来了一个显著的问题：**语言范式的割裂与混乱**。

![](现代_Fortran_的推荐范式_从混乱走向规范_images/img_001_94629385cc54.png)

在 Fortran 77 时代，代码以固定格式书写，大量使用 `GOTO`、`COMMON` 块和隐式类型声明，虽然高效且节省内存，但可读性极差，几乎无法进行现代意义上的软件工程管理。而 Fortran 90 标准的发布，则是一场革命性的变革，引入了模块（`module`）、自由格式、动态内存分配、数组操作等现代特性，使 Fortran 开始向结构化、模块化、面向对象（F2003 起）的方向演进。

遗憾的是，这场变革并未彻底统一 Fortran 社区。许多遗留代码库中，Fortran 77 风格与 Fortran 90+ 风格并存，甚至在同一文件中混杂使用，导致代码风格割裂，维护成本高昂。更糟糕的是，市面上关于 Fortran 的教材大多仍停留在描述语言特性层面，缺乏对“**如何写出好 Fortran 代码**”的系统性指导。这使得许多新接触 Fortran 的科研人员只能凭借直觉或模仿旧代码进行开发，进一步加剧了混乱。

有鉴于此，本文将综合参考 Quantum ESPRESSO 基金会（QEF）提出的编程规则，以及编程实践中总结出的最佳范式，系统性地介绍 **现代 Fortran（以 F2008 为基准）的推荐编程范式**。我们的目标不仅是写出能运行的代码，更是要写出**清晰、健壮、可维护、可移植且高效的**现代 Fortran 代码。

## 一、拥抱模块化：告别“野函数”时代

Fortran 90 引入的 `MODULE` 是现代 Fortran 编程的基石。它彻底改变了 Fortran 77 时代松散、全局化的编程方式。

### 1.1 所有子程序都应封装在模块中

在 Fortran 77 时代，函数（`FUNCTION`）和子程序（`SUBROUTINE`）通常是独立存在的，被称为“外部过程”（external procedures）。这种方式存在致命缺陷：**编译器无法在调用点检查参数的类型、数量和意图（`INTENT`）是否匹配**。一个微小的参数错误（例如传入了整型而非实型）可能导致难以追踪的运行时错误或数值结果偏差。

现代 Fortran 的正确做法是：**将所有的 `FUNCTION` 和 `SUBROUTINE` 封装在 `MODULE` 中**。这样，当我们在主程序或其他模块中通过 `USE` 语句引入该模块时，编译器就拥有了该子程序的完整接口信息（称为“显式接口”），从而能够在编译阶段进行严格的参数检查。

`! 错误示范：野函数（不推荐）   SUBROUTINE legacy_sub(x)       IMPLICIT NONE       REAL(KIND=dp), INTENT(IN) :: x(:)       ! ... some code ...   END SUBROUTINE      ! 正确示范：模块化（推荐）   MODULE my_module       USE kinds, ONLY: dp       IMPLICIT NONE   CONTAINS       SUBROUTINE modern_sub(x)           REAL(KIND=dp), INTENT(IN) :: x(:)           ! ... some code ...       END SUBROUTINE   END MODULE   `

### 1.2 遵循最小权限原则：`USE ... ONLY`

为了保持代码的清晰和避免命名冲突，`USE` 语句必须带上 `ONLY` 子句。这不仅是良好的编程习惯，更是强制性的规范。

`! 不好的写法：引入了模块中所有公共实体，污染命名空间   USE kinds      ! 推荐的写法：只引入需要的实体   USE kinds, ONLY : dp, zero, one   `

此外，模块内部应明确指定 `PUBLIC` 和 `PRIVATE` 属性。默认情况下，可以将整个模块设为 `PRIVATE`，然后仅将需要对外暴露的接口设为 `PUBLIC`。这样做可以隐藏实现细节，降低模块间的耦合度。

`MODULE my_private_module       PRIVATE       PUBLIC :: public_routine          REAL(dp), PARAMETER :: internal_const = 1.0_dp   CONTAINS       SUBROUTINE public_routine()           ! ...       END SUBROUTINE          SUBROUTINE helper_routine() ! 默认为PRIVATE，外部不可见           ! ...       END SUBROUTINE   END MODULE   `

### 3\. 杜绝跨模块变量链式引用

避免在一个模块中 `use` 另一个模块的变量，再让第三个模块去 `use` 第二个模块来间接访问第一个模块的变量。这种做法会导致依赖关系混乱，难以追踪和维护。正确的做法是在需要使用该变量的模块内部直接 `use` 其原始定义模块。

## 二、严谨的数据声明与类型系统

Fortran 77 的 `IMPLICIT` 规则（即变量名以 I-N 开头默认为整型，其余为实型）是无数 bug 的温床。现代 Fortran 的第一信条就是：`IMPLICIT NONE`。

### 2.1 统一精度管理：`KIND` 参数

为了保证跨平台的数值一致性，必须杜绝使用 `REAL*8`、`DOUBLE PRECISION` 或 `DOUBLE COMPLEX` 这类非标准或过时的类型声明。正确的做法是在一个专门的模块（如 `kinds`）中定义精度参数（如 `dp`），并在整个项目中统一使用。

`! kinds.f90   MODULE kinds       INTEGER, PARAMETER :: dp = KIND(1.0d0)   END MODULE      ! 在其他文件中   USE kinds, ONLY: dp   REAL(KIND=dp) :: energy   COMPLEX(KIND=dp) :: wavefunction   `

所有数值常量也必须显式指定精度，推荐使用 `_dp` 后缀：

`REAL(dp) :: pi = 3.14159265358979323846_dp   REAL(dp) :: threshold = 1.0e-10_dp   `

### 2.2 明确的变量意图（`INTENT`）

对于子程序的参数，必须使用 `INTENT(IN)`、`INTENT(OUT)` 或 `INTENT(INOUT)` 来明确其用途。这不仅有助于编译器优化，更重要的是向代码阅读者清晰地传达了设计意图。

`SUBROUTINE solve_linear_system(A, b, x)       REAL(dp), INTENT(IN)    :: A(:, :)       REAL(dp), INTENT(IN)    :: b(:)       REAL(dp), INTENT(OUT)   :: x(:)       ! ...   END SUBROUTINE   `

### 2.3 内存管理：优先使用 `ALLOCATABLE`

在处理大小未知的数组时，应优先使用 `ALLOCATABLE` 数组，而非指针（`POINTER`）或自动数组（automatic arrays）。

-   `ALLOCATABLE` vs `自动数组`：自动数组（如 `REAL(dp) :: temp(n)`，其中 `n` 是运行时变量）通常在栈上分配。栈空间有限，大数组极易导致栈溢出。而 `ALLOCATABLE` 数组在堆上分配，空间更大。
    
-   `ALLOCATABLE` vs `POINTER`：指针虽然灵活，但会阻碍编译器的优化（因为别名分析变得困难），并且容易引发内存泄漏。除非有特殊需求（如构建复杂数据结构），否则应避免在计算密集型代码中使用指针。
    

分配和释放内存时，务必检查状态：

`INTEGER :: ierr   REAL(dp), ALLOCATABLE :: work_array(:)      ALLOCATE(work_array(large_size), STAT=ierr)   IF (ierr /= 0) CALL errore('my_sub', 'Allocation failed', 1)      ! ... use work_array ...      DEALLOCATE(work_array, STAT=ierr)   IF (ierr /= 0) CALL errore('my_sub', 'Deallocation failed', 1)   `

## 三、提升代码可读性与健壮性

### 3.1 统一的代码风格

-   **变量名、过程名一律小写**：如 `wave_function`, `calculate_energy`。
    
-   **Fortran 关键字、内在函数大写**：如 `CALL`, `IF`, `REAL`, `MATMUL`。或者，也可以选择全部小写，但需配合支持语法高亮的编辑器。
    
-   **常量使用全大写**：如 `PI`, `BOHR_RADIUS`。
    
-   **运算符**：使用现代关系运算符 `>`, `<`, `==`, `/=`，摒弃 `.GT.`, `.LT.`, `.EQ.`, `.NE.` 等过时写法。
    
-   **缩进与空行**：循环和条件块应该缩进（通常 2-4 个空格），在逻辑段落之间应该使用空行分隔，以清晰展示代码结构。
    
-   **行长度限制**：单行代码不要超过 132 个字符。虽然现代编译器大多支持更长的行，但为了兼容性和可读性，这是一个良好的习惯。
    
-   **预处理器**：如果使用 C 预处理器（CPP），宏定义必须全大写并以双下划线开头（如 `__MPI`），并使用 `#if defined (MACRO)` 语法。
    

### 3.2 充分的注释与文档

代码是写给人看的，其次才是给机器执行。注释应解释**为什么**这么做，而不是**做什么**（后者应由清晰的代码本身体现）。

对于公共接口，强烈推荐使用 **FORD**（FORtran Documentation）工具。FORD 能够从源码中的特定注释（以 `!!` 开头）自动生成漂亮的 HTML 文档。一个良好的 FORD 注释应包含子程序的功能描述、每个参数的详细说明（包括单位、维度等）。

`!! Computes the total energy of the system.   !!   !! @param[in]  density     The electron density on the real-space grid.   !! @param[out] total_energy The computed total energy in Rydberg.   SUBROUTINE compute_energy(density, total_energy)       ! ...   END SUBROUTINE   `

### 3.3 安全的数组操作

不同编译器对数组边界的处理策略不同。为了确保可移植性，应采取防御性编程：

-   在涉及数组索引的条件判断中，避免可能的越界访问。例如，不要写 `IF (i == 0 .OR. flag(i) == 0)`，因为当 `i==0` 时，`flag(i)` 的求值是未定义行为。应拆分为两个独立的 `IF` 块。
    
-   在进行数组赋值时，显式指定范围（如 `a(1:n) = b(1:n)`）比 `a = b` 更安全，尤其是在处理假定形状数组（assumed-shape arrays）时。
    

### 3.4 输入/输出：拥抱 `NAMELIST`

相比传统的按位置读取输入文件的方式，`NAMELIST` 是一种更健壮、更用户友好的选择。它允许用户以 `key = value` 的形式提供输入，顺序无关，且可以省略有默认值的参数。

`! 定义 namelist   INTEGER :: nstep = 100   REAL(dp) :: dt = 1.0_dp   NAMELIST /control/ nstep, dt      ! 读取输入文件   OPEN(10, FILE='input.in')   READ(10, NML=control)   CLOSE(10)   `

对应的输入文件 `input.in` 可以非常灵活：

`&control       dt = 0.5,       nstep = 200   /   `

* * *

## 四、协作与工程化实践

大型科学软件通常是团队协作的产物。良好的工程化实践能极大提升开发效率。

### 4.1 版本控制友好性

在使用 Git 等版本控制系统时，修改现有代码应尽量**新增行**而非**修改已有行**。例如，如果需要在一个已有的 `USE` 语句中增加一个新变量，最佳实践是另起一行写一个新的 `USE` 语句。这样可以避免在合并（merge）时产生不必要的冲突。

`! 已有代码   USE math_lib, ONLY : sin, cos      ! 需要增加 tan，不要这样改：   ! USE math_lib, ONLY : sin, cos, tan      ! 而应该这样新增一行：   USE math_lib, ONLY : tan   `

### 4.2 新功能的集成策略

当为成熟软件添加新功能时，应遵循“默认关闭”原则。通过引入一个逻辑控制开关（默认为 `.FALSE.`），让用户通过输入文件显式开启新功能。这能保证新代码不会意外影响现有功能的稳定性。

`PROGRAM main       LOGICAL :: enable_new_feature = .FALSE.       ! ... read input ...       IF (enable_new_feature) CALL new_feature_routine()   END PROGRAM   `

新功能的主体代码应放在独立的源文件和模块中，以保持代码的模块化和低耦合。

## 结语

Fortran 并非一门垂死的语言。恰恰相反，凭借其在数值计算领域的深厚积累、优秀的数组性能以及持续演进的标准（如 Coarray Fortran 对并行计算的支持），它依然是 HPC 领域不可或缺的利器。

然而，要充分发挥 Fortran 的威力，我们必须抛弃那些源于 Fortran 77 时代的陈旧陋习，全面拥抱以 **模块化、强类型、显式接口、动态内存和现代工程实践** 为核心的现代 Fortran 范式。这不仅能产出更高质量的科学软件，也能让新一代的科研工作者和开发者更轻松地学习、理解和贡献于这些宝贵的计算遗产。

正如 Effective C++ 之于 C++ 社区，我们迫切需要一本 “Effective Fortran” 来凝聚共识。希望本文能成为迈向这一目标的一小步。记住，**好的代码，是写给人看的，顺便让机器执行**。

  

往期推荐

[

现代Fortran探索之旅 | Module模块



](https://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484413&idx=1&sn=bc6a2c9ab33e140df5e10f3604588fc0&scene=21#wechat_redirect)

[

现代Fortran探索之旅 | Subroutine 和 Function



](https://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484411&idx=1&sn=c53aebec720214dd71110dcf1bd331b7&scene=21#wechat_redirect)

[

神奇的Namelist：在Fortran中轻松实现灵活的外部数据交互



](https://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484797&idx=1&sn=15a251aac411e78b720163b6863a8288&scene=21#wechat_redirect)

##   

## 推荐阅读

  

  

  

‍

  

  

  

![](现代_Fortran_的推荐范式_从混乱走向规范_images/img_002_d8aae6d6bc0e.png)

**闲鱼小店已上新，欢迎新老粉丝关注和咨询![](现代_Fortran_的推荐范式_从混乱走向规范_images/img_003_7947c6a54e9b.png)**

![](现代_Fortran_的推荐范式_从混乱走向规范_images/img_004_92dd42f5e05f.jpg)

**喜欢****作者******，请点********赞********和在看******![](现代_Fortran_的推荐范式_从混乱走向规范_images/img_005_2ab55b5e37e9.gif)**

**![](现代_Fortran_的推荐范式_从混乱走向规范_images/img_006_0dc7b9b79564.gif)**