# 让你的Python代码更加Pythonic：优雅编程的10个技巧


> 原文地址: [https://mp.weixin.qq.com/s/IaifLfLOtDveMB4G1TSzoA](https://mp.weixin.qq.com/s/IaifLfLOtDveMB4G1TSzoA)

![图片](https://mmbiz.qpic.cn/mmbiz_gif/VIM0SmWQpWvsQIEAS5b228jQGB4FurcBibs2iaubicTaW5IkOa3r4XpLaPyzmen89DAcSJr1ObOucT9iceic0xehFcg/640?&random=0.7208003402280347&random=0.16634114621985852&random=0.8658017081419105)

点击上方「蓝字」关注我们

![图片](https://mmbiz.qpic.cn/mmbiz_png/2MhiaCtgicxW6hVicfNzL5yE9b4tViaWuriaVsWhgzqbAxD0eIYhziaLtLI1uwLENGob23fQJEVe1M77eMPRP8yNHrKQ/640?&random=0.5083455645781676&random=0.6902606942797083&random=0.5006165306553911)

  

![Python中文网_派森| CNPython](https://mmbiz.qpic.cn/mmbiz_jpg/XWmWoeAjJ1Mbib6OVWshxzEmT53DqXZSWIkwRWcjGYFfQtHHdfc3t3iclSd25RPCP8vGweVFYCpvCbxJun4PWiaNw/640?wx_fmt=jpeg&from=appmsg)

在软件开发的世界里，Python以其简洁和可读性而闻名。"Pythonic"这一术语不仅捕捉了这种语言的核心特质，也成为了高效、直观编码风格的代名词。本文将深入探讨10个技巧，帮助你提升Python代码的质量，使其既符合Python的设计哲学，又能在团队协作中作为“通用语言”。无论你是新手还是经验丰富的开发者，这些技巧都将助你在Python编程之旅上更进一步。

## 1\. 变量交换：无需临时变量

在传统的编程思维中，当需要交换两个变量的值时，通常会引入一个临时变量来完成这一过程。然而，在Python中，通过元组解包（tuple unpacking）可以实现更加简洁高效的变量交换。考虑如下示例：

`# 非Pythonic   a = 5   b = 10   temp = a   a = b   b = temp      # Pythonic   a, b = b, a`

在上述非Pythonic的例子中，我们首先定义了一个临时变量`temp`用于存储`a`的值，然后分别将`b`的值赋给`a`，最后将`temp`的值赋给`b`。虽然这种方法可以完成任务，但它显得冗长且不够直观。

相比之下，Pythonic的方法只需一行代码即可完成同样的操作。通过元组解包，我们可以直接将`b`的值赋给`a`，同时将`a`的值赋给`b`。这种方法不仅减少了代码行数，还避免了引入额外的变量，使代码更加简洁明了。此外，由于去除了不必要的临时变量，这样的写法也符合Python简洁至上的哲学理念。

## 2\. 使用in操作符替代多个or条件

在编写条件判断语句时，常常会遇到需要检查某个变量是否属于多个可能值的情况。传统做法是使用多个`or`条件组合起来进行判断，但这不仅会使代码变得冗长，还会降低可读性。Python提供了一种更为优雅的解决方案——使用`in`操作符。让我们来看一个例子：

`# 非Pythonic   if fruit == "apple" or fruit == "orange" or fruit == "berry":       print("Valid fruit")      # Pythonic   if fruit in ["apple", "orange", "berry"]:       print("Valid fruit")`

在非Pythonic的例子中，为了验证`fruit`变量是否属于指定的几种水果之一，我们需要重复书写多个`or`条件。这种方式在选项较少时或许尚可接受，但随着选项数量的增加，代码将会变得越来越复杂且难以维护。

相反，采用`in`操作符的方法则要简洁得多。这里，我们只需创建一个包含所有可能值的列表或集合，然后用`in`操作符检查`fruit`是否存在于该集合中。这不仅极大地简化了代码，使其更加紧凑，而且显著提升了代码的可读性。尤其是当需要比较的选项较多时，这种方法的优势更加明显。

此外，值得注意的是，如果需要频繁地进行此类查找操作，使用集合（set）而非列表可能会进一步提升性能，因为集合的查找速度比列表更快。例如：

`valid_fruits = {"apple", "orange", "berry"}   if fruit in valid_fruits:       print("Valid fruit")`

## 3\. 列表推导式：用一行代码替代循环

列表推导式是Python中一项强大而独特的特性，它允许以简洁的语法构建复杂的列表操作，从而大幅减少代码量。相比于传统的for循环方法，列表推导式不仅能提升代码的可读性，还能在很多情况下带来性能上的优化。

首先，我们来看一个简单的例子，展示如何使用for循环创建一个包含前十个自然数平方的列表：

`# 非Pythonic   squares = []   for x in range(10):       squares.append(x ** 2)`

这段代码通过遍历范围内的每个数字，并将其平方后添加到`squares`列表中。尽管这种方法完全可行，但显然有些繁琐。

现在，让我们看看如何用列表推导式实现相同的功能：

`# Pythonic   squares = [x ** 2 for x in range(10)]`

在这段Pythonic代码中，我们仅用一行就完成了相同的任务。列表推导式的语法由三部分组成：表达式、循环变量和可选的过滤条件。这里的表达式`x ** 2`表示我们要对每个元素执行的操作，循环变量`x`遍历`range(10)`中的每一个值。

除了基本形式外，列表推导式还支持添加条件筛选，例如只选择偶数的平方：

`even_squares = [x ** 2 for x in range(10) if x % 2 == 0]`

这种能力使得列表推导式在处理数据过滤和转换时特别有用。它不仅使代码更加紧凑和直观，而且通常比等效的传统循环执行得更快，因为编译器能够更好地优化这类结构。

## 4\. 字典合并：使用|操作符（Python 3.9+）

Python 3.9引入了一项令人振奋的新特性——字典合并操作符`|`，这使得合并两个字典变得更加简洁和直观。在此之前，合并字典通常需要借助于字典解包（dictionary unpacking），即使用`**`运算符。下面通过对比两种方式来说明新特性的优势。

先看传统的字典合并方法：

`dict1 = {'a': 1, 'b': 2}   dict2 = {'b': 3, 'c': 4}   merged = {**dict1, **dict2}  # 合并字典`

在这种方式中，我们使用`**`操作符来解包字典，并将它们合并成一个新的字典。虽然这种方法有效，但它的语法略显复杂，特别是当需要合并多个字典时，代码可能会变得难以阅读。

现在，让我们看看Python 3.9及更高版本提供的新方法：

`dict1 = {'a': 1, 'b': 2}   dict2 = {'b': 3, 'c': 4}   merged = dict1 | dict2`

使用`|`操作符，我们只需一行代码就能完成字典的合并。这种方式不仅简洁明了，而且语义清晰，让人一眼就能看出是在进行字典合并操作。此外，如果字典中有相同的键，后面的字典值会覆盖前面的值，正如我们在上面的例子中看到的，`'b': 3`会覆盖`'b': 2`。

不仅如此，`|=` 操作符还可以用于原地更新字典：

`dict1 |= dict2  # 相当于 dict1.update(dict2)`

这种原地更新的方式同样简洁高效，适用于那些希望修改现有字典而不是创建新字典的场景。

## 5\. F-String格式化：告别老旧的字符串拼接

F-String，即格式化字符串字面量（formatted string literals），是Python 3.6引入的一种强大的字符串格式化方法。相较于传统的字符串拼接和`.format()`方法，F-String以其直观、灵活和高性能的特点，成为了现代Python编程中处理字符串的理想选择。

首先，我们来看一下使用传统方法进行字符串拼接的例子：

`name = "Alice"   age = 30   greeting = "My name is " + name + " and I am " + str(age) + " years old."`

这种方法虽然能够完成任务，但在涉及多个变量时显得笨拙且容易出错。特别是当需要对数值类型进行转换时，必须手动调用`str()`函数，增加了代码的复杂度。

再来看看使用`.format()`方法：

`greeting = "My name is {} and I am {} years old.".format(name, age)`

这种方法较之字符串拼接有所改进，但仍需记住占位符的位置和顺序，尤其是在处理大量变量时，代码的可读性会受到影响。

现在，让我们看看如何使用F-String实现同样的功能：

`greeting = f"My name is {name} and I am {age} years old."`

在F-String中，只需要在字符串前加上`f`或`F`前缀，并在大括号内嵌入表达式即可。这种方式不仅直观易懂，还能直接嵌入任意Python表达式，比如计算结果或函数调用：

`greeting = f"My name is {name.upper()} and I am {age * 2} years old."`

此外，F-String还支持格式化规范，例如控制输出宽度、精度等：

`greeting = f"My name is {name:10} and I am {age:03d} years old."`

在这个例子中，`{name:10}`表示将`name`左对齐并占据至少10个字符的空间，而`{age:03d}`则表示将`age`右对齐并填充零，直到总长度达到三位数。

除了上述优点之外，F-String在性能上也有显著优势。由于F-String在编译时就已经确定了表达式的解析方式，因此在运行时不需要额外的解析步骤，相比`.format()`方法具有更高的执行效率。

总结来说，F-String凭借其直观的语法、强大的表达能力和卓越的性能，成为了Python中处理字符串的首选方法。它不仅简化了代码编写，还提升了代码的可读性和维护性，是每位Python开发者都应掌握的重要技能。

## 6\. 解压赋值：优雅处理序列数据

Python中的解压赋值（Unpacking）是一项极为有用的特性，它使得从序列中提取元素变得异常简洁和直观。通过解压赋值，你可以一次性获取序列中的多个元素，并将它们分配给相应的变量，极大地方便了数据处理工作。以下是一个具体的应用实例：

假设我们有一个包含五个整数的列表`data`，我们的目标是从中提取首尾元素，并将中间的所有元素作为一个子列表保存下来。

`# 非Pythonic   data = [1, 2, 3, 4, 5]   first = data[0]   middle = data[1:-1]   last = data[-1]      # Pythonic   first, *middle, last = data`

在非Pythonic的例子中，我们通过索引单独提取`first`和`last`元素，并使用切片操作获取中间部分的子列表。这种方法虽然能够达成目的，但代码相对冗长且不够直观。

相比之下，Pythonic的方式使用了解压赋值。在这里，`*middle`表示将剩余的所有中间元素收集到一个列表中，而`first`和`last`则分别对应序列的第一个和最后一个元素。这样做的好处是，代码不仅更加简洁，而且直接表达了“提取首尾元素”的意图。

解压赋值不仅限于列表，它同样适用于元组和字符串等其他类型的序列。例如，如果你有一个元组`coordinates = (10, 20, 30, 40)`，可以通过以下方式解压：

`x, y, z, w = coordinates`

或者，如果你想忽略某些元素，可以使用下划线`_`作为占位符：

`first, _, _, last = coordinates`

此外，解压赋值在处理函数返回值时也非常方便。例如，一个返回多个值的函数可以直接解压到多个变量中：

`def get_bounds():       return 10, 20      min_val, max_val = get_bounds()`

## 7\. 使用with语句管理资源

在编程过程中，正确管理外部资源（如文件、网络连接等）是确保程序稳定性和安全性的关键。Python提供了`with`语句，这是一种标准化的方式来自动管理资源的打开和关闭，避免了因忘记释放资源而导致的潜在问题。下面通过具体的例子来展示`with`语句的强大之处。

首先，我们来看一个不使用`with`语句管理文件的例子：

`file = open("example.txt", "r")   try:       content = file.read()   finally:       file.close()`

在这个例子中，我们手动打开文件，读取内容，并在`finally`块中确保文件被正确关闭。尽管这种方法可以防止文件未关闭的问题，但它显得较为繁琐，特别是在需要处理更多资源或异常情况时。

现在，让我们看看如何使用`with`语句简化这一过程：

`with open("example.txt", "r") as file:       content = file.read()`

使用`with`语句，我们不再需要显式地调用`close()`方法。一旦`with`块结束，Python会自动调用资源对象的`__exit__`方法，确保文件被正确关闭。这种机制不仅简化了代码，还减少了因疏忽导致资源泄漏的风险。

`with`语句不仅适用于文件操作，还可以用于其他上下文管理器。例如，数据库连接、网络套接字等都可以通过`with`语句来管理：

`import sqlite3      with sqlite3.connect('example.db') as conn:       cursor = conn.cursor()       cursor.execute('SELECT * FROM users')       rows = cursor.fetchall()`

在这个例子中，数据库连接会在`with`块结束后自动关闭，无需手动调用`conn.close()`。

此外，`with`语句还支持嵌套使用，以便同时管理多个资源：

`with open("input.txt", "r") as input_file, open("output.txt", "w") as output_file:       for line in input_file:           output_file.write(line.upper())`

这种嵌套使用的方式使得代码更加简洁和易于维护，同时确保每个资源都被正确管理。

## 8\. 使用生成器表达式替代列表推导式

在处理大数据集时，内存使用效率成为一个关键问题。生成器表达式（Generator Expression）作为一种轻量级的迭代工具，能够在按需生成数据的同时节省大量的内存开销。与列表推导式相比，生成器表达式不会一次性生成整个列表，而是逐个生成元素，适合处理大规模数据集。

首先，我们来看一个使用列表推导式的例子：

`total = sum([x ** 2 for x in range(1000000)])  # 生成完整列表`

在这个例子中，`sum`函数接收一个包含一百万个平方数的完整列表。尽管这种方法能够完成任务，但由于需要一次性生成整个列表，它会占用大量内存，特别是在处理更大规模的数据时，可能导致内存溢出。

现在，让我们看看如何使用生成器表达式来解决这个问题：

`total = sum(x ** 2 for x in range(1000000))  # 使用生成器`

在生成器表达式中，`x ** 2 for x in range(1000000)`并不立即生成一个完整的列表，而是创建一个生成器对象。每次调用`next()`方法时，生成器只会计算并返回下一个值，而不是预先生成所有值。这种方式不仅节省了内存，还提高了处理大规模数据集的效率。

生成器表达式尤其适用于那些需要遍历整个数据集但不需要一次性访问所有元素的场景。例如，当你只需要处理数据的一部分，或者在处理过程中可以根据某些条件提前终止时，生成器表达式可以显著减少内存占用。

此外，生成器表达式还支持与内置函数和其他迭代工具结合使用，进一步扩展其应用范围。例如，可以将生成器表达式传递给`filter()`或`map()`函数：

`filtered = list(filter(lambda x: x > 10, (x ** 2 for x in range(10))))`

在这个例子中，生成器表达式`(x ** 2 for x in range(10))`生成一系列平方数，`filter()`函数则根据给定条件筛选出大于10的元素。

## 9\. 利用itertools模块简化迭代逻辑

Python标准库中的`itertools`模块提供了一系列高效的迭代工具，能够显著简化复杂的迭代逻辑。其中，`zip_longest`函数是一个特别有用的工具，它能够处理不等长序列的交织问题，使得代码更加简洁且高效。

首先，我们来看一个不使用`itertools`模块的复杂例子，尝试实现两个字符串的交织操作：

`from itertools import zip_longest      def interleave(s1, s2):       result = []       for i in range(max(len(s1), len(s2))):           if i < len(s1):               result.append(s1[i])           if i < len(s2):               result.append(s2[i])       return ''.join(result)`

在这个例子中，我们手动遍历两个字符串的最大长度，并逐个添加字符到结果列表中。尽管这种方法可以实现预期效果，但代码显得冗长且不易维护。

现在，让我们看看如何使用`itertools.zip_longest`函数简化这一过程：

`from itertools import zip_longest      def interleave(s1, s2):       return ''.join(c for pair in zip_longest(s1, s2, fillvalue='') for c in pair if c is not None)`

在Pythonic的例子中，我们使用了`zip_longest`函数，它能够将两个序列的元素一一配对，并在较短序列不足时使用指定的填充值（`fillvalue`）。通过嵌套的生成器表达式，我们轻松地实现了字符串的交织操作。

`zip_longest`不仅适用于字符串，还可以用于任何可迭代对象。例如，它可以用来处理两个不同长度的列表：

`list1 = [1, 2, 3]   list2 = ['a', 'b', 'c', 'd']   result = [item for pair in zip_longest(list1, list2, fillvalue=None) for item in pair if item is not None]`

在这个例子中，`zip_longest`将两个列表的元素配对，并使用`None`作为填充值。最终结果是一个包含所有非空元素的列表。

除了`zip_longest`，`itertools`模块还提供了许多其他有用的函数，如`chain`、`combinations`、`permutations`等，它们各自解决了不同的迭代问题。例如，`chain`函数可以将多个可迭代对象串联起来：

`from itertools import chain      list1 = [1, 2, 3]   list2 = [4, 5, 6]   combined = list(chain(list1, list2))`

总之，`itertools`模块中的工具不仅简化了复杂的迭代逻辑，还提高了代码的可读性和执行效率。掌握这些工具，可以使你的Python代码更加Pythonic，并在实际应用中发挥更大的作用。

## 10\. 遵循PEP 8规范：统一代码风格

PEP 8（Python Enhancement Proposal 8）是Python社区广泛认可的代码风格指南，旨在促进一致且易读的代码编写习惯。遵循PEP 8不仅能提升代码的美观度和可读性，还能确保团队成员之间的合作更加顺畅。以下是几个重要的PEP 8建议及其解释：

#### 文件夹命名

-   • **推荐**：使用小写字母命名，避免使用下划线。
    
-   • **示例**：`myproject` 而不是 `my_project` 或 `MyProject`
    

#### 模块命名

-   • **推荐**：使用小写字母，必要时可用下划线分隔单词。
    
-   • **示例**：`module.py` 和 `db_convert.py`
    

#### 类命名

-   • **推荐**：使用驼峰命名法（CamelCase），即每个单词首字母大写，且不使用下划线。
    
-   • **示例**：
    
    `class MyClass:       pass`
    

#### 函数命名

-   • **推荐**：使用小写字母，单词之间用下划线分隔。
    
-   • **示例**：
    
    `def my_function():       pass`
    

#### 变量命名

-   • **推荐**：同函数命名规则，使用小写字母，单词之间用下划线分隔。
    
-   • **示例**：
    
    `my_variable = 1`
    

#### 常量命名

-   • **推荐**：常量名全部大写，单词之间用下划线分隔。
    
-   • **示例**：
    
    `THIS_IS_A_CONSTANT = 1`
    

遵循PEP 8不仅有助于保持代码风格的一致性，还能提高代码的可维护性。例如，限制每行代码不超过79个字符可以避免横向滚动，便于查看和编辑代码。此外，合理的空白行和注释位置也能增强代码的层次感和可读性。

## 小结

编写Pythonic代码不仅仅是追求代码的美观，更是关于如何以最自然的方式表达逻辑，让代码既高效又易于理解。正如《The Zen of Python》所强调：“Readability counts.” 和 “Simple is better than complex.” 掌握上述技巧，不仅是对Python设计哲学的理解深化，也是成为更优秀程序员的关键一步。现在就开始实践吧，让你的Python代码更加Pythonic！ 🐍

  

**喜欢****作者******，请点********赞********和在看******![图片](https://mmbiz.qpic.cn/mmbiz_gif/6BxCiaoAkhCpmWx6ic8Sg6X6PXsnJWo7a3hOSHEicIvYJO3nOPdf6GiaqmlM1gXnia8Ppu76xY0hiaTBXSjQNRsr6Dkg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp)**

**![图片](https://mmbiz.qpic.cn/mmbiz_gif/pn1AOBGTwDVWGtThsMX1L4lk0EffmPg1BKAYaooibsaRwoYMzqxhJ1seOlZialOpryLocgAFt7Yb97uwwseMCLxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp)**