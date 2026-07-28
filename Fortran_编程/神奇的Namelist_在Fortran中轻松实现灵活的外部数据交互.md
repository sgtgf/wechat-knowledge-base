# 神奇的Namelist：在Fortran中轻松实现灵活的外部数据交互


> 原文地址: [https://mp.weixin.qq.com/s/NKi5VPd8mi5qJu8twNxxVQ](https://mp.weixin.qq.com/s/NKi5VPd8mi5qJu8twNxxVQ)

在科学计算与工程领域，Fortran一直是数值模拟和大规模数据分析的首选语言之一。随着语言的发展，Fortran不断引入现代化的特性，以提升程序的开发效率与代码的可读性。其中，`Namelist`（名称列表组）便是现代Fortran提供的一种强大而灵活的数据输入输出（I/O）机制。它允许用户以结构化的方式读取或写入配置信息，极大地简化了程序与外部数据的交互过程。本文将深入探讨Fortran中`Namelist`的使用方法，并通过丰富的示例展示其对不同变量类型的处理能力。

## 1\. Namelist简介

在传统的ASCII文件处理中，开发者需要严格按照数据在文件中的排列顺序来读取变量值，这不仅繁琐，而且容易出错。`Namelist`正是为了解决这一难题而设计的。它是Fortran 90引入的一个特性，并在后续版本中得到了增强。

`Namelist`（名称列表组）是一种内置于Fortran标准中的`I/O机制`，主要用于读写一组相关变量的数据块。与传统的逐个读取命令行参数或逐行解析文件不同，`Namelist`允许你在源代码中定义一个变量集合，并在外部数据文件中以特定格式一次性读取或写入这个集合。这样，你就无需关心变量在文件中的具体位置，从而极大地提升了编程的灵活性。

## 2\. 基本用法

首先，让我们从一个简单的示例开始，了解如何定义和使用`Namelist`。

`program NamelistExample     implicit none     integer :: iVal     real :: rVal     character(len=20) :: strVal        ! Namelist定义     namelist /exampleNml/ iVal, rVal, strVal        ! 初始化变量     iVal = 10     rVal = 3.14     strVal = "Hello Namelist"        ! 将Namelist写入文件     open(unit=10, file='input.txt', status='replace')     write(10, nml=exampleNml)     close(10)        ! 从文件读取Namelist     open(unit=10, file='input.txt', status='old')     read(10, nml=exampleNml)     close(10)        ! 打印值     print *, "Integer Value:", iVal     print *, "Real Value:", rVal     print *, "String Value:", trim(strVal)   end program NamelistExample   `

在这个例子中，我们通过`namelist`语句定义了一个名为`exampleNml`的名称列表组，它包含了三种基本类型的变量：整型`iVal`、实型`rVal`和字符型`strVal`。定义之后，这些变量就被视为一个整体，可以直接通过读写语句进行操作。「注意，`namelist`语句也算声明的一部分，必须编写在程序执行命令的前面」。

对变量值进行初始化之后，程序首先使用`write`语句，并指定`nml`关键字，将这些变量的默认值写入到名为`input.txt`的文件中，然后通过`read`语句，重新读取该文件，更新变量的值，并打印出来。

这个小例子充分展示了`Namelist`的基本使用方法：定义Namelist结构、写入数据、读取数据并使用。

## 3\. 文件格式

打开上面的例子输出的`input.txt`文件，我们可以看到以下内容：

`&EXAMPLENML    IVAL=10         ,    RVAL=  3.14000010    ,    STRVAL="Hello Namelist      ",    /      `

它给出了`exampleNml`名称列表组的具体数据。关于存放`Namelist`数据的文件格式，主要有以下几点说明：

-   「开头」：`&`字符，之后紧接在`namelist`语句中指定的名称列表组名称。注意，`&`之后不能有空格。
    
-   「信息元素」：变量信息以键值对（例如`var_name=var_value`）的形式指定，`=`前后可以有空格。每一对可以出现在不同的行上，或几对可以聚合在一行中，用逗号（`,`）分隔。键值对的顺序不重要，可以任意排序。
    
-   「结尾」：用斜线（ `/`）标志结束，之后必须用回车换行，不可省略。
    
-   「注释」：可以像在普通Fortran代码中那样编写注释，以`!`开头。注释不能插入到变量键值对信息项的中间，通常单独放在一行，或置于每一项的尾部。
    
-   「默认值和多余变量：」 如果文件中没有提供`namelist`语句中声明的某个变量的值，读取文件后，该变量将保持其在程序中初始赋值的状态。这一特性对于仅需修改部分参数的情况特别有用。另外要注意的是，文件中不要出现`namelist`语句中未定义的多余变量，否则会引发运行时错误。
    
-   「其他说明」：Namelist文件的变量名对字母大小写不敏感，可以自由改写。同一个文件可以同时包含多个名称列表组，只需分别按照标准格式书写即可。
    

基于上述说明，为了后续更好地用作输入文件，我们可以对上面程序输出的`input.txt`文件的内容稍作修改，使其更加美观和易读：

`!test   &exampleNml    iVal=10,   !一个整数    rVal=3.14, !一个实数    strVal="Hello Namelist", !一个字符串    /      `

## 4\. 处理复杂数据结构

`Namelist`的强大之处在于它能够方便地处理数组和其他复杂的数据结构。以下实例展示了如何使用`Namelist`处理数组和结构体：

`program ArrayNamelist     implicit none     type point       real :: x, y     end type point     integer, dimension(3) :: intArray     real, dimension(2,2) :: realMatrix     type(point), dimension(2) :: points        namelist /complexNml/ intArray, realMatrix, points        ! 初始化     intArray = [1, 2, 3]     realMatrix = reshape([1.0, 2.0, 3.0, 4.0], [2,2])     points(1) = point(0.0, 0.0)     points(2) = point(1.0, 1.0)        ! 写入和读取操作与之前相同     ! ...   end program ArrayNamelist   `

在这个例子中，我们定义了整型一维数组、实型二维数组以及一个自定义的结构体`point`及其数组。`Namelist`能够无缝处理这些复杂数据类型，使得对应的数据文件可以直观地反映程序内部的数据结构。

程序运行后，输出的`input.txt`文件内容如下：

`&COMPLEXNML    INTARRAY=1          ,2          ,3          ,    REALMATRIX=  1.00000000    ,  2.00000000    ,  3.00000000    ,  4.00000000    ,    POINTS(1)%X=  0.00000000    ,    POINTS(1)%Y=  0.00000000    ,    POINTS(2)%X=  1.00000000    ,    POINTS(2)%Y=  1.00000000    ,    /      `

这些内容充分展示了包含数组和结构体的Namelist的数据结构。它使得数据文件更加可读，非常便于维护和修改。后续我们可以以此文件为基础，创建一个自定义的参数输入文件，配合`complexNml`名称列表组，供其他Fortran程序读取。

## 小结

以上就是Fortran中`Namelist`的基本用法和示例。通过这种方式，你可以轻松地管理和交换程序所需的各种配置参数，使得程序更具灵活性和可扩展性。对于大型科学计算软件，`Namelist`更是用于集中配置模型参数的重要手段。希望本文能帮助你更好地理解和运用Fortran的`Namelist`功能，在科学计算的道路上更进一步。

  

![](神奇的Namelist_在Fortran中轻松实现灵活的外部数据交互_images/img_000_d981f1eb49d0.png)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。