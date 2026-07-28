# 现代Fortran探索之旅 | Character字符串


> 原文地址: [https://mp.weixin.qq.com/s/GDJ08uIbjF5EMlCXd0uJVQ](https://mp.weixin.qq.com/s/GDJ08uIbjF5EMlCXd0uJVQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVV0Z1EwtEn9svQy6dNAOcDdXLtaaGiaL0xrianiblaSbiavmRgSmJJF4vBFxIgIrlqmxUg2dSn9wa4RwQ/640?wx_fmt=jpeg)

Fortran，作为一种历史悠久且广泛应用于科学计算的语言，其对字符串的支持可能不如Python、Java等现代语言那样直观和灵活，但在实际编程中，理解并掌握Fortran中的字符串处理技巧同样至关重要。本文将通过一系列实例，带您走进Fortran的世界，探讨如何有效地处理和操作字符串。

## 字符串的定义和赋值

在Fortran中，字符串是用`character`数据类型来声明的，需要指定其最大长度。例如：

`character(len=20) :: myString   `

上述代码声明了一个最多可容纳20个字符的字符串变量myString。

我们可以直接在声明时初始化字符串：

`character(len=20) :: myString = "Hello, Fortran!"   `

或者稍后再对其进行赋值：

`myString = "This is a test."   `

注意，Fortran中预定义长度的字符串是定长的，这意味着在声明时必须指定最大长度。若实际内容长度小于声明长度，则「用空格填充剩余部分」；若超过声明长度，则会被截断。

## 字符串基本操作

### 1\. 去除空格

一般我们声明字符串变量长度时不会完全与实际占有长度相同，多出来的空间一般会用空格占据，但处理字符串过程中往往需要删除这些空格。为此，Fortran提供了以下内置函数：

内置过程名

功能

`adjustl`

字符串左对齐，即去除左端空格

`adjustr`

字符串右对齐，即去除右端空格

`trim`

去除字符串尾部空格

通过以下程序来查看三个函数的区别。

`character(len=30) :: str   str = "     Hello, Fortran     "   print*, "::", str, "::"   print*, "::", adjustl(str), "::"   print*, "::", adjustr(str), "::"   print*, "::", trim(str), "::"   `

输出结果为：

`::     Hello, Fortran           ::   ::Hello, Fortran                ::   ::                Hello, Fortran::   ::     Hello, Fortran::   `

我们发现，对齐函数`adjustl`和`adjustr`虽然将其中一端的空格去除，但会在另一端补上空格，字符串的长度是保持不变的。而`trim`函数则会去除字符串尾部空格，字符串的长度也随之减小。

### 2\. 连接字符串

在Fortran中，可以使用`//`操作符来连接两个或更多的字符串：

`character(len=20) :: str1 = "Hello"   character(len=20) :: str2 = ", Fortran"   print*, "::", str1//str2, "::"   print*, "::", trim(str1)//trim(str2), "::"   `

输出结果为：

`::Hello               , Fortran           ::   ::Hello, Fortran::   `

可以看出：

-   连接后的字符串长度是原来两个字符串长度之和。
    
-   连接操作不会自动删除字符串中的空格字符，因此常常需要结合`trim`函数来使用。
    

### 2\. 提取子串

Fortran可以很容易地提取字符串中的一部分内容，语法很像数组切片（如果将字符串看成由字符组成的数组的话）。

`character(len=50) :: original = "Fortran is fun"   character(len=2) :: substring   substring = original(9:10)   `

在上述例子中，substring将获取original从第9个到第10个位置的字符，即"is"。

但以下数组适用的操作对字符串来说是不允许的：

`original(3)   original(1:5:2)   `

### 3\. 获取字符串长度

使用内置函数`len()`可获取字符串的长度，而`len_trim()`可获取实际非空字符的数量（去掉尾部空格填充）：

`print *,len(myString)   print *, len_trim(myString)   `

### 4\. 字符串比较

Fortran提供了`==`操作符用于比较两个字符串是否相等：

`if (myString == "Test") then       print *, "Strings match."   else       print *, "Strings do not match."   end if   `

### 5\. 转换为大写/小写

Fortran没有内置的转换大小写函数，但可以通过循环和ASCII码实现这一功能：

`do i = 1, len(myString)       select case (ichar(myString(i:i)))           case (65:90) ! 大写字母的ASCII码               myString(i:i) = char(ichar(myString(i:i))+32) ! 转化为小写字母           case (97:122) ! 小写字母的ASCII码               myString(i:i) = char(ichar(myString(i:i))-32) ! 转化为大写字母       end select   end do   `

这里用到了内置函数`ichar`和`char`。`ichar`用于返回编码表中字符对应的整数，而`char`用于返回给定整数对应的编码字符。

### 6\. 格式化输出字符串

在Fortran中，我们可以通过`write`语句配合格式说明符对字符串进行格式化输出：

`write(*,'(A20)') myString   `

其中`A20`表示输出一个最多包含20个字符的字符串。

### 7\. 字符串与数值类型转换

数值型数据可以转换为字符数据，字符数据也转换为数值型数据。在Fortran 中为这种转换提供了一种特殊机制，称为内部文件（`Internal file`）。

内部文件是 Fortran I/O 系统的扩展。在内部文件中，`read`操作和`write`操作发生在内部字符缓冲区上，而不是磁盘文件（外部文件）中。任何能够写入外部文件的数据都可以写入内部文件，而且也可以执行更多的操作。同样，任何可以从外部文件中读到的内容，也可以从内部文件中读到。

例如，以下展示了圆周率`pi`的实型数据与字符数据之间的互相转化过程：

`real :: pi = 3.14159   character(len=20) :: pi_str   write(pi_str, *) pi  ! 实型pi转为字符串pi_str   read(pi_str, *) pi ! 从字符串pi_str重新读入实型pi   `

## 小结

虽然Fortran的字符串处理机制相对较为基础，但对于日常开发而言已经足够使用。深入理解和熟练掌握这些技能，能有效提升Fortran程序的编写效率和代码质量，特别是在涉及大量文本数据处理的科学计算领域。

以上仅为Fortran字符串处理的基础知识，更多详细内容和实战应用，期待您在实际编程实践中不断探索和积累！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于 Fortran 90 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的免费试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。