# 如何进行Python和Fortran程序混编？


> 原文地址: [https://mp.weixin.qq.com/s/aAR\_2h7jF4tLHtbdgrfXkw](https://mp.weixin.qq.com/s/aAR_2h7jF4tLHtbdgrfXkw)

## 

# 提问

我有一个 Fortran77 的模型，想用 Python 写一个程序调用它。请问有什么好的混编方案吗？有什么程序可以做？

# 一己之见，欢迎拍砖

据我所知，Python 调用 Fortran 程序进行混合编程主要有以下 4 种方式：

## 1\. 使用 f2py

NumPy 的 f2py 文档：https://numpy.org/doc/stable/f2py/

这个页面详细介绍了如何使用 f2py 工具将 Fortran 代码转化为 Python 模块。

## 2\. 使用 ctypes

Python 标准库 ctypes 文档：https://docs.python.org/3/library/ctypes.html

这里有详细的说明，教你如何使用 ctypes 来调用 C 函数和共享库，包括 Fortran 编译产生的动态库。

## 3\. 使用 cffi

cffi 项目主页及文档：https://cffi.readthedocs.io/en/latest/

cffi 提供了一种更高级的方式来调用 C 代码，同时也适用于 Fortran 库，其文档详细介绍了如何使用。

## 4\. 使用 Cython

Cython 官方网站及文档：https://cython.org/

Cython 允许编写 Python 扩展模块，其中可以包含 Fortran 代码的调用。查看其文档以获取如何混合 Fortran 和 Python 的示例。每个链接都包含了丰富的示例和指南，帮助你根据自己的项目需求选择合适的方法并开始编程。

## 注意事项：

**编译器兼容性**：确保使用的 Fortran 编译器（如 gfortran）与你的操作系统兼容，并且 Python 环境已正确配置。

**数据类型匹配**：在 Python 和 Fortran 之间传递数据时，注意数据类型的对应和转换。

**接口声明**：为了使 Fortran 函数能够被 Python 正确调用，可能需要在 Fortran 代码中添加特定的接口声明。

  
好书推荐