# 现代Fortran探索之旅 | Type派生类型


> 原文地址: [https://mp.weixin.qq.com/s/d8g4jElcKE8kUeqwKkrCRA](https://mp.weixin.qq.com/s/d8g4jElcKE8kUeqwKkrCRA)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVV0Z1EwtEn9svQy6dNAOcDdXLtaaGiaL0xrianiblaSbiavmRgSmJJF4vBFxIgIrlqmxUg2dSn9wa4RwQ/640?wx_fmt=jpeg)

Fortran 中提供了整型、实型等5种内置的数据类型，而在实际计算中，计算对象往往并不只限于这些内置数据类型，而需要一些特定的数据结构。为了便于组织数据，现代Fortran增加了派生类型的新内容。

派生类型是指用户利用Fortran系统内部固有的数据类型（如整型、实型等），或者已定义的用户自定义类型，组合创建出一个新的数据类型，它们实际上是由内部数据类型形成的某种结构。任何复杂的数据结构，经过分析后都可分解为比较简单的结构成员，可以用自定义的派生类型来表示。派生类型使Fortran语言的功能得到加强，用户使用更加便利。

这里，我们将结合具体实例，详细介绍如何创建和使用Fortran的派生数据类型，以帮助初学者理解和掌握这一强大的特性。

### 0\. 为何需要派生类型

Fortran 是一种**强类型**语言，这意味着每个变量都必须有一个类型。

Fortran 中有 5 种内置数据类型：

-   `integer` —— 表示整数的数据，正数或负数
    
-   `real` —— 用于浮点数据（不是整数）
    
-   `complex` —— 由实部和虚部组成的对
    
-   `character` —— 用于字符数据
    
-   `logical` —— 用于表示布尔值（真或假）的数据
    

在实际计算中，计算对象往往并不只限于这些内置数据类型，而需要一些特定的数据结构。

在Fortran90以前的版本中，没有用户自定义的数据类型，给用户带来了许多不便。例如，一个学校要比较完整地表达多个学生的信息，假设学生包含的信息有：学生所在院系、姓名、学号、性别、年龄、家庭住址、成绩等，同时要对这些数据进行相应的处理，如查找、插入排序、删除等。以前Fortran所用的方法是：将学生的每一项信息分别放在一个数组中，例如：所有学生的姓名可以放在一个字符型数组中，学号可以存放在一个整型数组中，成绩可以存放在一个实型数组中等。要解决这个问题，用户在编写程序的过程中需要定义多个不同类型的数组，并对多个不同数组进行处理，程序看起来很复杂，而且由于要兼顾不同数组间的对应关系，使用起来容易出错。

为了解决类似的问题，现代Fortran在这方面有较大的改进，在内置数据类型的基础上，Fortran允许用户使用`type`关键字创建自定义的数据类型，以便于组织和管理相关的数据集合。

### 1\. 创建派生类型

派生类型（也称为构造类型或结构体）是由一系列的类型声明语句构成的，其定义的一般格式为：

 type :: 派生类型名  
     成员1类型说明  
     成员n类型说明  
 end type \[派生类型名\]

说明：

(1) `type`为关键字，定义一个派生类型的起点；`end type`为派生类型定义结束的标志，其后面的派生类型名可以不写，当定义多个`type`块时最好写上。`type`块中只有类型说明语句，不允许有可执行语句。

(2) 派生数据类型可以在任何程序单元中定义，作用域也在该程序单元中。为了方便被不同的程序单元使用，派生数据类型一般在module模块中定义，以便被调用。

举个例子。在数学中，我们经常处理各种几何形状，比如圆、矩形和三角形。在Fortran中，我们可以通过定义派生类型来表示这些形状的共同属性和方法。例如：

 type :: shape  
    character(len=20) :: name  
    real :: area  
 end type shape

这里，我们定义了一个名为`shape`的派生类型，它有2个成员：`name`来存储形状的名称，`area`来存储形状的面积。

### 2\. 构造和初始化派生类型变量

一旦用户定义了派生数据类型，就可以声明该类型的变量了。声明变量的形式为：

 type(派生类型名) :: 变量名

定义完了变量，我们可以继续进行初始化，接着给定派生数据类型各成员的值。其格式为：

 派生类型变量名 ＝ 派生类型名（成员初值表）

紧接上面的例子：

 type(shape) :: myShape  
 myShape \= shape(name\='Unknown Shape', area\=0.0)

这段代码创建了一个`shape`类型的变量`myShape`，并初始化了其成员变量的值。

### 3\. 成员访问

要访问派生类型变量的成员，我们需要使用成员访问操作符`%`。例如：

 myShape%name \= 'mySqure'  
 myShape%area \= 10  
 print \*, 'Shape Name: ', myShape%name  
 print \*, 'Area: ', myShape%area

### 4\. 继承派生

Fortran 2003 标准中增加了 `extends` 属性，它引入了面向对象范式（OOP）的一个重要特征，即继承。它通过让子类型从可扩展的父类型派生出来，实现了代码的可重用性。具体形式为

  type, extends(parent) :: child

这里，`child` 继承了 `type :: parent` 的所有成员和功能。

对于上面的例子，我们可以从`shape`继续派生出具体的几何形状类型，如`circle`（圆）和`rectangle`（矩形）。

 type, extends(shape) :: circle  
    real :: radius  
 end type circle  
   
 type, extends(shape) :: rectangle  
    real :: length  
    real :: width  
 end type rectangle

在这些派生类型中，我们添加了特定于形状的属性，例如`circle`的`radius`和`rectangle`的`length`与`width`。

### 5\. 类型绑定过程

利用 `contains` 语句，类型绑定过程允许我们定义与派生类型紧密相关的函数和子程序。例如，我们可以为`circle`类型定义一个计算面积的函数。

 type, extends(shape) :: circle  
    real :: radius  
 contains  
    procedure :: calculate\_area  
 end type circle  
   
 subroutine calculate\_area(this)  
    class(circle) :: this  
    real, parameter :: pi \= 3.1415926  
    this%area \= pi \* this%radius \* this%radius  
 end subroutine calculate\_area

在这个例子中，`calculate_area`子程序是`circle`类型的类型绑定过程，它用于计算并更新圆的面积。

需要说明的是：

-   `this` 是一个任意名称，我们选择它来表示类型绑定函数内的派生类型 `circle` 的实例。这允许我们访问其成员并在调用类型绑定过程时自动将其作为参数传递。
    
-   在 `calculate_area` 子程序的接口中使用了 `class(circle)` 而不是 `type(circle)`。关键字 `class` 是与面向对象编程（OOP）特性相关的一个高级特性，从Fortran 2003版本开始被引入，以支持类型多态和类型绑定过程。
    

### 6\. 简单示例

让我们通过一个具体的例子来综合运用上述概念。

#### 6.1 创建派生类型

首先对上面提到的派生类型进行封装，到全部移动到`shaps`模块里。

创建一个名为`shapes_module.f90`的文件，内容如下：

 module shapes  
     implicit none  
       
     ! 创建shap类型  
     type :: shape  
        character(len=20) :: name  
        real :: area  
     end type shape  
       
     ! 继续创建circle类型  
     type, extends(shape) :: circle  
        real :: radius  
     ! 绑定过程，计算面积  
     contains  
             procedure :: calculate\_area  
     end type circle  
   
 contains  
! 过程的具体定义  
     subroutine calculate\_area(this)  
         class(circle):: this  
         real, parameter :: pi \= 3.1415926  
         this%area \= pi \* this%radius \* this%radius  
     end subroutine calculate\_area  
 end module shapes

#### 6.2 使用派生类型

接下来，我们将创建一个主程序来使用`circle`这一自定义的派生类型。

创建一个名为`main.f90`的文件，内容如下：

 program main  
     use shapes  
     implicit none  
     ! 派生类型的变量声明  
     type(circle) :: myCircle  
   
     ! 初始化圆形  
     myCircle \= circle(name\='MyCircle', radius\=1.0)  
     ! 调用myCircle绑定的过程  
     call myCircle%calculate\_area()  
     ! 结果打印  
     print \*, 'name: ', myCircle%name  
     print \*, 'area: ', myCircle%area  
 end program main

在这个程序中，我们创建了一个`circle`类型的实例`myCircle`。我们为`myCircle`调用了类型绑定的`calculate_area`子程序来计算圆的面积。

#### 6.3 编译和运行

在Windows环境下，我们可以使用gfortran编译器来编译上述程序。

以下是编译和运行的步骤：

1.  打开命令提示符。
    
2.  导航到包含`shapes_module.f90`和`main.f90`文件的目录。
    
3.  使用以下命令编译程序：
    

 gfortran \-c shapes\_module.f90 \-o shapes\_module.o  
 gfortran main.f90 shapes\_module.o \-o main

特别注意，模块文件要先于调用它的程序文件进行编译，否则会出现模块无法被识别的错误。

4.  运行编译好的程序：
    

 main.exe

得到如下计算结果：

> name: MyCircle area:    3.14159250

### 7\. 小结

通过上述教程，我们了解了派生类型的基本概念，包括如何创建、初始化、访问成员、实现继承和绑定过程。派生类型是Fortran编程中一个非常强大的特性，它提供了极大的灵活性和组织能力。在实际应用中，你可能需要根据项目的具体需求来创建更复杂的派生类型，并深入理解派生类型的高级特性，如操作符重载、创建数组等。希望这篇入门教程能够帮助你更好地使用Fortran派生类型，为你的Fortran编程之旅打下坚实的基础。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于 Fortran 90 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的免费试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。