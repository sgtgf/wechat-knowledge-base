动态链接库（Dynamic Link Library，通常在Windows上为`.dll`文件，在Linux上为`.so`文件）是一种计算机程序设计中的概念，也称为共享库或动态库。它是包含可执行代码和相关资源的数据结构的集合，可以在多个应用程序之间共享，而非每个应用程序单独包含这些代码的副本。通过使用动态库，程序在运行时可以从存储在磁盘上的独立文件加载所需的函数或对象代码，从而节省存储空间并提高资源利用率。

GFortran是GNU Fortran编译器，它可以用来编译Fortran源代码并创建各种类型的可执行文件，其中就包括动态链接库。本教程将一步步指导你如何在Windows和Linux环境下使用GFortran来创建和链接Fortran的动态链接库。

## 编译动态链接库

假设你有一个Fortran源文件`mylib.f90`，里面包含了许多函数和模块，你想将其编译为动态链接库。你可以使用以下命令：

-   Linux
    

`gfortran -shared -fPIC -o libmylib.so mylib.f90   `

-   Windows
    

`gfortran -shared -fPIC -o libmylib.dll mylib.f90   `

这里的参数解释如下：

-   `-shared`: 指示编译器生成共享库。
    
-   `-fPIC`: 生成位置无关的代码（Position Independent Code），这是创建共享库的常见要求。
    
-   `-o libmylib.so` 或 `-o libmylib.dll` : 指定输出文件的名称。共享库的扩展名在Linux上通常是`.so`，在Windows上通常为`.dll`。
    

## 调用动态链接库

要在程序中使用这个库，你需要在编译时链接它。假设你有一个主程序`main.f90`，你想在其中使用`mylib`库中的函数。你可以使用以下命令编译主程序：

`gfortran -o main main.f90 -L/path/to/your/library -lmylib   `

这里的参数解释如下：

-   `-L`: 指定库搜索路径，例如`-L.`表示搜索当前的目录。
    
-   `-lmylib`: 指定要链接的库。这里不需要`.so`或`.dll`扩展名。
    

## 运行时注意事项

在运行时，你需要确保动态链接库在库搜索路径中。在Windows上，通常需要利用`-L`来明确指定。在Linux上，你还可以通过设置`LD_LIBRARY_PATH`环境变量来实现这一点：

`export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/path/to/your/library   `

## 完整例子

在Windows上，假设你有以下Fortran源文件`mylib.f90`：

`! mylib.f90   module mylib     implicit none     public :: add   contains     integer function add(a, b)       integer, intent(in) :: a, b       add = a + b     end function add   end module mylib   `

你可以使用以下命令编译它为动态链接库：

`gfortran -shared -fPIC -o libmylib.dll mylib.f90   `

然后，创建一个使用这个库的程序`main.f90`：

`! main.f90   program main     use mylib     implicit none     integer :: result        result = add(3, 4)     print *, 'The result is ', result   end program main   `

最后，编译并链接`main.f90`生成`main.exe`：

`gfortran -o main main.f90 -L. -lmylib   `

执行以上命令，需要`libmylib.dll`在当前工作目录中。如果`dll`文件在其他位置，那么你就需要通过`-L/path/to/your/library`来具体指定一下了。

在Linux上的操作是完全类似的，你还可以使用上面提到的`export LD_LIBRARY_PATH`命令来指定动态链接库的搜索路径。

## 小结

在大型项目中，为了实现模块化编程和资源复用，动态链接库扮演着重要角色。GFortran作为GNU Fortran编译器，能够帮助我们轻松创建和使用Fortran的动态链接库，极大地增强了代码的可重用性和项目组织的灵活性。希望本教程能帮助你快速地入门Fortran动态链接库的编译和调用。

  


**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于 Fortran 90 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的免费试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。