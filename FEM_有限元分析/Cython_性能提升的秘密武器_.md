# Cython，性能提升的秘密武器！


> 原文地址: [https://mp.weixin.qq.com/s/f0KWXHRlVXEQLeDjW3xzkQ](https://mp.weixin.qq.com/s/f0KWXHRlVXEQLeDjW3xzkQ)

**Cython，性能提升的秘密武器！**

大家好，我是程序猿九思！今天我们要聊的主题是**Cython**。对于很多Python初学者来说，可能会遇到一个问题：Python虽然写起来很方便，但在性能方面不一定能满足要求，尤其是处理大量数据或复杂计算时，速度就显得慢了一些。那么，如何在享受Python简洁语法的同时，让代码跑得更快呢？答案就是——**Cython**！

Cython可以说是性能提升的秘密武器，它将Python代码编译成C语言，从而大幅度提升执行速度。今天，我们会一起学习如何使用Cython来编写高性能代码，动手试试看吧！

* * *

### 什么是Cython？

**Cython**是Python的超集，它的语法与Python非常相似，并支持将Python代码直接编译成C语言。这意味着，Cython代码可以享有Python的灵活性，同时拥有接近C语言的执行效率。Cython的主要用途包括**加速代码**、**调用C语言库**和**创建Python扩展模块**。

* * *

### 1\. 安装Cython

在使用Cython之前，首先需要安装它。打开终端或命令行，运行以下命令：

`!pip install cython   `

安装完毕后，我们就可以开始尝试Cython的基本用法啦！

* * *

### 2\. 从Python代码开始

为了理解Cython的加速效果，先编写一个普通的Python代码来计算一个大数列的平方和，并测量它的运行时间。

#### 代码示例

`# sum_square.py      def sum_square(n):       total = 0       for i in range(n):           total += i * i       return total      # 测试执行时间   import time   start_time = time.time()   result = sum_square(10**7)   end_time = time.time()   print("Result:", result)   print("Execution Time:", end_time - start_time, "seconds")   `

运行这段代码会发现，对于大规模数据，这个代码的执行时间比较长。接下来，我们会用Cython对它进行优化。

* * *

### 3\. 将Python代码转化为Cython代码

要让Python代码变成Cython代码，我们需要把文件扩展名改为`.pyx`，并在代码中指定变量类型。Cython中的**类型声明**可以告诉编译器具体的变量类型，从而提升执行速度。

#### 代码示例

`# sum_square.pyx      def sum_square(int n):       cdef int total = 0       cdef int i       for i in range(n):           total += i * i       return total   `

在这个Cython代码中，我们使用了`cdef`关键字来定义C类型的变量，比如`int`类型的`total`和`i`。这样一来，Cython在编译时会直接生成高效的C代码，大幅度提升执行速度。

**小贴士**：在Cython中，`cdef`用于定义C类型的变量，`def`仍用于定义函数；而`cpdef`则是定义既能被Python调用，也能被C调用的函数。

* * *

### 4\. 编译Cython代码

写好`.pyx`文件后，需要编译它。Cython文件不能像普通Python文件一样直接运行，所以我们需要编写一个`setup.py`脚本来编译它。

#### 代码示例

`# setup.py      from setuptools import setup   from Cython.Build import cythonize      setup(       ext_modules = cythonize("sum_square.pyx")   )   `

在终端运行以下命令进行编译：

`python setup.py build_ext --inplace   `

这个命令会将`.pyx`文件编译成一个可执行的`.so`（Linux）或`.pyd`（Windows）文件。接下来，我们就可以直接导入这个文件并测试执行速度了。

* * *

### 5\. 测试Cython代码的执行速度

编译完成后，可以在Python中直接导入并运行Cython代码，观察执行时间的变化。

#### 代码示例

`# test_cython_speed.py      import time   from sum_square import sum_square      start_time = time.time()   result = sum_square(10**7)   end_time = time.time()      print("Result:", result)   print("Execution Time with Cython:", end_time - start_time, "seconds")   `

这次的执行时间会比纯Python代码快得多。因为Cython将循环中的变量和操作转换为C语言处理，从而显著减少了运行时间。

* * *

### 6\. 进一步优化 - 使用`@cython.boundscheck(False)`

Cython有一些特殊的优化选项，比如关闭边界检查。边界检查指的是在访问数组或列表时检查索引是否越界。在某些场景中，我们知道代码不会越界，可以选择关闭边界检查来提升速度。

#### 代码示例

`# sum_square_optimized.pyx      # 关闭边界检查   @cython.boundscheck(False)   def sum_square(int n):       cdef int total = 0       cdef int i       for i in range(n):           total += i * i       return total   `

关闭边界检查后再次编译并测试代码，你会发现执行时间进一步减少了！

**小贴士**：边界检查的默认状态是打开的，确保在不影响代码安全性的前提下关闭它。

* * *

### 7\. 调用C语言库

Cython的另一个优势是可以直接调用C语言库。假设我们有一个现成的C函数，并希望在Python中使用它，我们可以通过Cython来实现。

#### 代码示例

`// my_c_functions.c      #include <math.h>      double calculate_sqrt(double x) {       return sqrt(x);   }   `

接下来，创建Cython文件调用这个C函数：

`# my_cython_module.pyx      cdef extern from "my_c_functions.c":       double calculate_sqrt(double x)      def py_calculate_sqrt(double x):       return calculate_sqrt(x)   `

然后，在`setup.py`中加入编译C文件的配置：

`# setup.py      from setuptools import setup, Extension   from Cython.Build import cythonize      ext_modules = [       Extension(           "my_cython_module",           sources=["my_cython_module.pyx", "my_c_functions.c"]       )   ]      setup(       ext_modules=cythonize(ext_modules)   )   `

这样就可以在Python中使用`calculate_sqrt`函数了，实现了C语言和Python的无缝对接。

* * *

### 8\. 将Cython用于数据处理

Cython在数据处理方面也非常有优势。比如在处理大量数据时，用Cython可以显著缩短数据处理时间。以下是一个用Cython计算均值的例子：

`# mean_calculation.pyx      def calculate_mean(double[:] data):       cdef double total = 0       cdef Py_ssize_t i       for i in range(data.shape[0]):           total += data[i]       return total / data.shape[0]   `

这里使用了Cython的内存视图（`double[:]`），专门用于高效处理大数据。将这个代码编译后，我们就可以直接使用`calculate_mean`处理大量数据了！

* * *

### 总结与实践

Cython是Python性能优化的一把利器，尤其在需要大量计算或处理大规模数据时，Cython能够提供显著的速度提升。今天，我们一起学习了Cython的基础用法，包括如何将Python代码转为Cython、编译Cython代码、关闭边界检查以及调用C语言函数等内容。

今天的Python学习之旅就到这里啦！记得动手敲代码。祝大家学习愉快，Python学习节节高！