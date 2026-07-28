# 现代Fortran探索之旅 | GFortran常用编译选项


> 原文地址: [https://mp.weixin.qq.com/s/-L\_ICwyUxx2F9vWXwT\_LRg](https://mp.weixin.qq.com/s/-L_ICwyUxx2F9vWXwT_LRg)

GFortran是GNU Fortran编译器，它是GCC（GNU Compiler Collection）项目的一部分，用于编译Fortran源代码。GFortran支持多种Fortran标准，包括但不限于Fortran 77、Fortran 90/95、Fortran 2003、Fortran 2008和Fortran 2018。下面列举并简要介绍一些GFortran常用的编译选项，并提供一些具体实例。

**gfortran安装请参考**：[Fortran开发环境极简配置教程](http://mp.weixin.qq.com/s?__biz=Mzk0MzI0NDU2NQ==&mid=2247484359&idx=2&sn=f5e95d2ccaa5a2772913b688bb597ec3&chksm=c33797bdf4401eab947281eff9a587cee3e92ccedf773afe28e813c81c290ea468df17258461&scene=21#wechat_redirect)

## 基本编译选项

1.  **编译与链接**
    

-   `-c`：只编译而不链接，产生目标文件（`.o` 文件）。
    

`gfortran -c my_program.f90   `

-   `-o output_file`：指定输出文件名。
    

`gfortran my_program.f90 -o program_executable   `

2.  **标准指定**
    

-   `-std=<standard>`：指定Fortran语言标准版本。
    

`gfortran -std=f2003 my_fortran_program.f90   `

3.  **警告控制**
    

-   `-Wall`：开启所有警告。
    

`gfortran -Wall my_program.f90   `

-   `-Werror`：将所有警告视为错误，阻止编译通过除非所有警告都消除。
    

`gfortran -Wall -Werror my_program.f90   `

4.  **优化级别**
    

-   `-O[0-3]`：设置优化级别，从-O0（无优化）到-O3（最高级优化）。
    

`gfortran -O3 my_optimized_code.f90   `

5.  **包含目录**
    

-   `-I<directory>`：添加头文件搜索路径。
    

`gfortran -I/path/to/includes my_program.f90   `

6.  **库链接**
    

-   `-L<directory>`：添加库搜索路径。
    
-   `-l<library>`：链接指定库。
    

`gfortran my_program.f90 -L/usr/local/lib -lmy_library   `

7.  **调试信息**
    

-   `-g`：生成包含调试信息的目标文件或可执行文件，便于使用gdb等调试器进行调试。
    

`gfortran -g my_program.f90 -o debuggable_program   `

8.  **自由格式与固定格式**
    

-   `-ffree-form` 和 `-ffixed-form` 选项用于指定 Fortran 源文件的格式是自由格式还是固定格式。默认情况下，gfortran 会根据文件扩展名自动判断格式。
    

`gfortran -ffree-form -o myprogram mysource.f90   `

9.  **并行编译**
    

-   `-fopenmp`：启用OpenMP支持，允许编写并行程序。
    

 `gfortran -fopenmp parallel_program.f90 -o parallel_executable`

## 其他高级选项

-   `-shared`：生成共享目标文件而不是可执行文件。
    
-   `-fdefault-real-8`：默认情况下使用双精度实数。
    
-   `-fcheck=all`：启用额外的运行时检查，如数组边界检查。
    
-   `-fbacktrace`：启用Fortran程序崩溃时的回溯信息。
    
-   `-mtune` 和 `-march` ：设置编译器优化的目标 CPU 类型。
    

## 举例说明

实际使用时，可以根据需要组合这些选项来编译Fortran程序，例如，编译并链接一个带有多重优化且需要链接外部库的Fortran程序：

`gfortran -O3 -fopenmp -I/path/to/includes -L/path/to/libs \            -lrequired_library -o executable main.f90 other_module.f90   `

## 小结

GFortran提供了丰富的编译选项，使得开发者可以根据项目需求进行细致的编译控制。从简单的编译到复杂的优化和调试，GFortran的选项都能满足Fortran程序开发的各种需求。掌握这些选项对于编写高效、可维护的Fortran程序至关重要。

以上只是GFortran众多选项中的一部分，根据实际编程需求和项目配置，还有更多具体的编译选项可供使用。了解完整的选项列表及详细说明，建议查阅官方文档或执行`gfortran --help`获取最新信息。

  

  

![](现代Fortran探索之旅___GFortran常用编译选项_images/img_000_d981f1eb49d0.png)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于 Fortran 90 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的免费试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。