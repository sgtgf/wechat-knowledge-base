点击上方「蓝字」关注我们


Python是一种高级编程语言，以其代码的清晰性和相对简单的语法而闻名。Python的设计哲学强调代码的可读性，这使得即使是编程新手也能较容易地学习和使用。

本文是一篇针对初学者的 Python 基础教程，只要你认真阅读，花费 30 分钟即可快速了解 Python。

## 下载和配置

根据自己使用的操作系统，从 Python 官网安装下载对应的版本即可：

https://www.python.org/downloads


安装好后，调出命令提示符，输入“python”，检查是否安装成功。正常的话会出现下图所示的界面，看到“\>>>”符号：


这样就可以输入代码进行编程了。  

以下是 Python 的核心语法。

## 数学运算符

标准运算：

`print(1+1)   print(2-1)   print(2*3)   print(1/2)   `

输出结果：

> 2  
> 1  
> 6  
> 0.5

幂运算：

`print(2**2)   print(2**3)   print(2**(1/2))   `

输出结果：

> 4  
> 8  
> 1.4142135623730951

## 变量

以字母开头；不要使用特殊字符或空格：

`x = 3   y = 15   z = x + y   my_variable_name = x * y * z   print(my_variable_name)   `

输出结果：

> 810

## 字符串

使用相同类型的引号来开始和结束。

`name = 'Lily'   apostrophe = "can't use single quotes"   print(name, apostrophe)   `

输出结果：

> Lily can't use single quotes

使用三引号来表示跨多行的字符串。

`multiline_string = """Hello   world.   This   is   just   silly.   """   print(multiline_string)   `

输出结果：

> Hello  
> world.  
> This  
> is  
> just  
> silly.

要打印与字符串混合的变量，可以用逗号分隔：

`print("Hello", name, ", how are you?")   `

输出结果：

> Hello Lily, how are you?

或者（通常更有用），使用 `format` 命令（注意字符串中 `{}` 的行为）：

`print("Hello {}, how are you?".format(name))   `

在最新的版本中，也可以使用 `f` 字符串：

`print(f"Hello {name}, how are you?")   `

它们的输出结果和上面是一样的。

## 列表和切片

使用方括号 `[]` 定义列表：

`list_variable = [1,2,3,4,5]   `

使用名称后的方括号获取单个元素。请注意，这「从 `0` 开始」：

`print(list_variable[0])   print(list_variable[2])   `

输出结果：

> 1  
> 3

使用 `len` 获取列表的长度：

`print(len(list_variable))   `

输出结果：

> 5

使用切片获取多个元素，`start:end:step`。这包括起始位置，但「不包括结束位置」。`step` 默认值为 `1`：

`print(list_variable[0:2])   print(list_variable[:2])   print(list_variable[3:5])   print(list_variable[3:])   print(list_variable[0:5:2])   print(list_variable[1:5:2])   `

输出结果：

> \[1, 2\]  
> \[1, 2\]  
> \[4, 5\]  
> \[4, 5\]  
> \[1, 3, 5\]  
> \[2, 4\]

使用负数表示从末尾开始的元素：

`print(list_variable[-1])   print(list_variable[-2])   print(list_variable[-1:-3:-1])   `

输出结果：

> 5  
> 4  
> \[5, 4\]

可以给列表中的元素赋值，支持一次性设置多个元素：

`list_variable[0] = 10   print(list_variable)   list_variable[0:2] = [9, 11]   print(list_variable)   `

输出结果：

> \[10, 2, 3, 4, 5\]  
> \[9, 11, 3, 4, 5\]

## 循环

循环用于多次执行某个操作。对于列表中的每个元素，执行打印操作：

`list_variable = [1,2,3,4,5]   for number in list_variable:       print(number)   `

输出结果：

> 1  
> 2  
> 3  
> 4  
> 5

「注意，循环体内紧跟在冒号后面的所有代码行必须缩进」。

以下循环的每一步都将变量 `number` 设置为列表中的下一个元素，并进行计算和打印

`for number in list_variable:       number2 = 2*number       number3 = number2-1       print("number3", number3)   print("number2", number2)   `

输出结果：

> number3 1  
> number3 3  
> number3 5  
> number3 7  
> number3 9  
> number2 10

循环可以「嵌套」：

`list1 = [1, 2, 3]   list2 = [4, 5, 6]   for number1 in list1:       print("In loop 1:", number1)       for number2 in list2:           print("In loop 2:", number2)       print("Back in loop 1:", number1)   print("Done")   `

输出结果：

> In loop 1: 1  
> In loop 2: 4  
> In loop 2: 5  
> In loop 2: 6  
> Back in loop 1: 1  
> In loop 1: 2  
> In loop 2: 4  
> In loop 2: 5  
> In loop 2: 6  
> Back in loop 1: 2  
> In loop 1: 3  
> In loop 2: 4  
> In loop 2: 5  
> In loop 2: 6  
> Back in loop 1: 3  
> Done

我们经常会对连续的整数进行循环，Python 为此提供了 `range` 函数：

`for number in range(4):       print(number)   `

输出结果：

> 0  
> 1  
> 2  
> 3

如果你有一个向量，并且在循环时想要跟踪索引，请使用 `enumerate` 函数：

`list_enum = [3.4, 7.9, -6.4, 0.1]   for i, number in enumerate(list_enum):       print("Index is", i, "number is", number)   `

输出结果：

> Index is 0 number is 3.4  
> Index is 1 number is 7.9  
> Index is 2 number is -6.4  
> Index is 3 number is 0.1

最后，如果你不知道要执行循环的次数，可以使用 `while` 循环：

`number = 15   while number > 0:       number = number / 2 - 1       print("number is now", number)   `

输出结果：

> number is now 6.5  
> number is now 2.25  
> number is now 0.125  
> number is now -0.9375

## 控制流

要使代码仅在某些条件满足时执行某些语句，需要使用 `if`/`elif`/`else` 命令：

`if 1 < 0:       print("1 < 0")   elif 2 > 1:       print("2 >1 ")   else:       print("Neither 1 < 0 nor 2 > 1")   `

输出结果：

> 2 >1

`if 1 > 0:       print("1 > 0")   elif 2 > 1:       print("2 > 1")   else:       print("Neither 1 > 0 nor 2 > 1")   `

输出结果：

> 1 > 0

`if 1 < 0:       print("1 < 0")   elif 2 < 1:       print("2 < 1")   else:       print("Neither 1 < 0 nor 2 < 1")   `

输出结果：

> Neither 1 < 0 nor 2 < 1

与循环一样，要执行的代码在冒号后面必须缩进。

## 函数

函数用于保存可重复使用的代码块：

`def sectionide(a, b):       """       Divide a by b.       """       result = a/b       return result   `

函数的名称紧接在 `def` 关键字之后。这里是 `sectionide`。

参数是括号中的变量。这里是 `a` 和 `b`。

执行的代码是冒号后面缩进的所有内容（与上面的循环相同）。

调用函数得到的值是 `return` 后面的值：这可以是一个数字、一个列表或更复杂的东西。

`print(sectionide(1, 2))   `

输出结果：

> 0.5

当你请求函数的帮助时，会显示字符串形式的函数内容（称为_文档字符串_）：

`help(sectionide)   `

输出结果：

> Help on function sectionide in module \_\_main\_\_:
> 
> sectionide(a, b)  
> Divide a by b.

## 库

要使用库中的命令，你必须 `import` 它们。然后，命令或变量需要通过在导入的名称后跟一个点来引用。

`import numpy   print(numpy.pi)   `

输出结果：

> 3.141592653589793

`import scipy.constants   print(scipy.constants.m_e)   `

输出结果：

> 9.1093837015e-31

`from scipy import constants   print(constants.m_e)   `

输出结果：

> 9.1093837015e-31

如果你创建一个文件并将其命名为 `file1.py`，那么你可以从_同一目录_中的另一个文件中使用 `import file1` 命令导入该文件的内容。

## 线性代数

我们在大多数线性代数运算中使用 `numpy` 库。

创建向量、矩阵或数组。

`import numpy   x = numpy.array([1.0, 2.0])   b = numpy.array([3.0, 4.0])   A = numpy.array([ [1.0, 2.0], [3.0, 4.0] ])   C = numpy.array([ [1.0, 2.0, 3.0], [4.0, 5.0, 6.0] ])   print(x)   print(A)   print(C)   `

输出结果：

> \[1. 2.\]  
> \[\[1. 2.\]  
> \[3. 4.\]\]  
> \[\[1. 2. 3.\]  
> \[4. 5. 6.\]\]

获取它们的长度和形状。

`print(len(x))   print(x.shape)   print(len(A))   print(A.shape)   `

输出结果：

> 2  
> (2,)  
> 2  
> (2, 2)

创建仅包含零或一的数组，可以是特定大小（例如 `zeros`），也可以是与现有数组相同的大小（例如 `zeros_like`）：

`v = numpy.ones(3)   w = numpy.zeros((4, 4))   print(v)   print(w)   D = numpy.ones_like(A)   print(D)   `

输出结果：

> \[1. 1. 1.\]  
> \[\[0. 0. 0. 0.\]  
> \[0. 0. 0. 0.\]  
> \[0. 0. 0. 0.\]  
> \[0. 0. 0. 0.\]\]  
> \[\[1. 1.\]  
> \[1. 1.\]\]

我们经常需要在一个区间（例如 `[0, 1]`）上创建「线性间隔」的数组：

`z = numpy.linspace(0, 1, 6)   print(z)   `

输出结果：

> \[0.  0.2 0.4 0.6 0.8 1. \]

数学运算一次性应用于所有元素：

`print(x + 1)   print(2 * A)   print(C**2)   `

输出结果：

> \[2. 3.\]  
> \[\[2. 4.\]  
> \[6. 8.\]\]  
> \[\[ 1.  4.  9.\]  
> \[16. 25. 36.\]\]

特定的 `numpy` 函数一次性应用于所有组件：

`print(numpy.sin(x))   `

输出结果：

> \[0.84147098 0.90929743\]

函数可以应用于整个数组，例如对所有元素求和：

`print(numpy.sum(x))   print(numpy.sum(A))   `

输出结果：

> 3.0  
> 10.0

向量点积和矩阵乘法使用 `dot` 函数：

`print(numpy.dot(x, x))   print(numpy.dot(A, x))   `

输出结果：

> 5.0  
> \[ 5. 11.\]

更多特定的线性代数函数可以在 `linalg` 子库中找到。

求解线性系统：

`print(numpy.linalg.solve(A, b))   `

输出结果：

> \[-2.   2.5\]

矩阵的行列式：

`print(numpy.linalg.det(A))   `

输出结果：

> \-2.0000000000000004

矩阵的特征值和特征向量：

`print(numpy.linalg.eig(A))   `

输出结果：

> (array(\[-0.37228132,  5.37228132\]), array(\[\[-0.82456484, -0.41597356\],  
> \[ 0.56576746, -0.90937671\]\]))

## 绘图

通常使用 `matplotlib` 库。`pyplot` 接口是最直接的。

`from matplotlib import pyplot   x = numpy.linspace(0, 5)   y = numpy.sin(x)   pyplot.plot(x, y)   pyplot.show()   `


  

我们可以设置坐标轴标签、绘图的限制、标题：

`x = numpy.linspace(0, 5)   y = numpy.sin(x)   pyplot.plot(x, y)   pyplot.xlabel("x")   pyplot.ylabel("sin(x)")   pyplot.xlim(1, 4)   pyplot.ylim(-1.1, 1.1)   pyplot.title("A plot")   pyplot.show()   `


为了更漂亮的数学表达式，我们可以使用 LaTeX，将文本用 `$ $` 包围。但是，我们应该通过在前面加上 `r` 来确保字符串是_原始_的：

`x = numpy.linspace(0, 5)   y = numpy.sin(x)   pyplot.plot(x, y)   pyplot.xlabel(r"$x$")   pyplot.ylabel(r"$\sin(x)$")   pyplot.show()   `


对于曲面绘图，我们需要为坐标和要绘制的内容构造矩阵或数组。

`x = numpy.linspace(0, 2, 40)   y = numpy.linspace(0, 1, 50)   X, Y = numpy.meshgrid(x, y)   Z = numpy.exp(-X) * numpy.sin(X**2 + Y**2)   `

然后我们需要构造一个 3D 坐标系来进行绘图：

`fig = pyplot.figure()   axis = fig.add_subplot(1, 1, 1, projection='3d')      axis.plot_surface(X, Y, Z)   pyplot.show()   `


我们可以通过更改参数来绘制每行和每列的线条，并更改颜色映射：

`from matplotlib import cm      fig = pyplot.figure()   axis = fig.add_subplot(1, 1, 1, projection='3d')      axis.plot_surface(X, Y, Z, rstride=2, cstride=2, cmap=cm.viridis)   pyplot.show()   `


## 求解器

`scipy` 库能为你解决许多问题。例如它的 `optimize` 子库，可以用于求根：

`from scipy import optimize      def f(x):       return numpy.exp(-x) - x + 1      root = optimize.brentq(f, 0, 2)   print("Root is", root)   `

输出结果：

> Root is 1.278464542761074

还有 `integrate` 子库，用于积分和求解微分方程：

`from scipy import integrate      quadrature, error = integrate.quad(f, 0, 1)   print("Integral is", quadrature)   `

输出结果：

> Integral is 1.1321205588285577

## 读完之后

这篇 Python 基础教程只是让从没有接触过 Python 的读者对 Python 有个初步的印象，所以很多知识点都没有谈到，例如，本教程没有提到类和对象、文件操作、进程线程、图形界面、网络编程等。大家后续可以根据自身需要，更深入地学习和掌握 Python。