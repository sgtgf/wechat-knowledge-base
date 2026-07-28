# C++ Lambda表达式：深入解析与应用


> 原文地址: [https://mp.weixin.qq.com/s/s53ea5UqKE7qxKQ4UsUNZg](https://mp.weixin.qq.com/s/s53ea5UqKE7qxKQ4UsUNZg)

### 

![](https://mmbiz.qpic.cn/mmbiz_gif/kicB09lvgibnnRjv0AAqQxyBODIttZXnQqcTPoF4Pt8tJmnia4CHaYUS3zqicFfKZTWibXTAew2ibFHDjy5Pf8nDnVEQ/640?&random=0.5435628020271572&random=0.7333430426412921&random=0.11768190117034583&random=0.12018774317487124&random=0.31661911194151493&random=0.7635339231703804&random=0.9613365986074616&random=0.1923479600602538&random=0.5088725080122942)

点击上方「蓝字」关注我们

![](https://mmbiz.qpic.cn/mmbiz_png/kLQoJJzjYaicxneNzbOg7ynx3TfnIwmNTpJQ7orkaUNrJIV4u7PNdSJ25Mtn6XdRQTamLDDicHnYfdic2bsiaNQjCw/640?&random=0.6153869521132325&random=0.3050959118824166&random=0.3425740390684655&random=0.5631073915395226&random=0.3811110885571365&random=0.7586035005343534&random=0.5766395221126888&random=0.5695725227414736&random=0.31459453309857777)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eRETdLuoXm1hlcFzRLY8530oa5qlVg14icIZ9hDbNPOkYIRsOWmTDTTFiaxJvPWFTqGXm8cTKIO6bau1qSEqqBDA/640?wx_fmt=png&from=appmsg&random=0.14341926131468363)

## 引言

在编程语言中，函数是构建程序逻辑的基本单元。C++作为一种多范式的编程语言，支持过程化、面向对象以及泛型编程等风格。随着C++11标准的引入，Lambda表达式成为了C++的一种新特性，它允许程序员以一种更简洁和直观的方式定义匿名函数，并且可以在需要时捕获上下文环境中的变量。Lambda表达式不仅简化了代码编写，还提高了代码的可读性和灵活性，尤其在结合STL（Standard Template Library）算法使用时效果显著。

本文将深入探讨Lambda表达式在C++中的应用，从基本概念出发，逐步讲解其语法结构、捕获列表、参数列表、返回类型推导等方面的内容，并通过实例展示如何高效地使用Lambda表达式。最后，我们将讨论一些高级用法及最佳实践建议。

## Lambda表达式的基础

Lambda表达式是一种内联函数对象，它可以被定义为一个表达式，而不是像传统函数那样需要命名。它的形式如下：

`[capture](parameters) -> return_type { body }   `

-   `capture`：捕获列表，用于指定lambda可以访问哪些外部变量。
    
-   `parameters`：参数列表，与普通函数相同。
    
-   `return_type`：返回类型，通常可以省略，编译器会自动推导。
    
-   `body`：函数体，包含要执行的代码。
    

### 捕获列表

捕获列表是Lambda表达式的重要组成部分之一，它决定了Lambda能否以及如何访问其定义范围之外的变量。捕获方式主要有以下几种：

-   **空捕获**：`[]` 表示不捕获任何外部变量。
    
-   **按值捕获**：`[x]` 将变量`x`按值复制到Lambda体内。
    
-   **按引用捕获**：`[&x]` 使`x`成为对原变量的引用。
    
-   **隐式按值或按引用捕获**：`[=]` 按值捕获所有外部变量；`[&]` 按引用捕获所有外部变量。
    
-   **混合捕获**：可以同时使用上述两种方式，例如`[&, x]`表示除`x`外所有变量按引用捕获，而`x`则按值捕获。
    

### 参数列表和返回类型

参数列表遵循常规函数的规则，可以为空或者包含多个参数。对于简单的情况，如果Lambda只接受一个参数并且该参数是某种类型的指针或迭代器，那么可以通过省略参数列表来利用隐式转换。

返回类型通常是可选的，当Lambda的主体只有一个表达式时，编译器能够自动推断出返回类型。但是，对于复杂的Lambda，特别是那些有多条语句的情况下，则需要显式声明返回类型。

## 实例解析

为了更好地理解Lambda表达式的实际应用场景，我们来看几个具体的例子。

### 简单排序

假设我们有一个整数数组，并希望按照降序对其进行排序。传统的方法是创建一个比较函数，然后将其传递给`std::sort`。有了Lambda表达式之后，我们可以直接在调用处定义比较逻辑：

`#include <algorithm>   #include <vector>   #include <iostream>      int main() {       std::vector<int> vec = {5, 3, 8, 6, 7, 2};          // 使用Lambda表达式进行降序排序       std::sort(vec.begin(), vec.end(), [](int a, int b) { return a > b; });          for (auto n : vec) {           std::cout << n << " ";       }          return0;   }   `

这段代码中，我们没有为比较函数命名，而是直接使用了Lambda表达式作为第三个参数传递给`std::sort`。这不仅减少了不必要的函数声明，也让代码更加紧凑易懂。

### 捕获局部变量

接下来的例子展示了如何在一个范围内操作元素的同时修改一个局部变量。这里我们计算一个向量中所有元素的平方和：

`#include <algorithm>   #include <numeric>   #include <vector>   #include <iostream>      int main() {       std::vector<int> vec = {1, 2, 3, 4, 5};       int sum_of_squares = 0;          // 计算向量中所有元素的平方和       std::for_each(vec.begin(), vec.end(), [&sum_of_squares](int n) {           sum_of_squares += n * n;       });          std::cout << "Sum of squares: " << sum_of_squares << std::endl;          return0;   }   `

在这个例子中，我们使用了捕获列表`[&sum_of_squares]`，使得Lambda表达式可以修改外部变量`sum_of_squares`。请注意，虽然这里选择了按引用捕获，但也可以选择按值捕获，取决于具体需求。

## 高级特性与优化

除了基本功能外，Lambda表达式还有一些高级特性和优化技巧可以帮助我们写出更高效的代码。

### 成员函数和成员变量

有时候我们需要调用对象的成员函数或访问成员变量。在这种情况下，可以通过捕获`this`指针来实现这一点。下面是一个简单的类，其中包含了使用Lambda表达式访问成员变量的方法：

`class MyClass {   public:       void print_all(const std::vector<int>& v) {           std::for_each(v.begin(), v.end(), [this](int n) {               std::cout << prefix << n << suffix << " ";           });       }      private:       std::string prefix = "Item: ";       std::string suffix = "\n";   };   `

通过捕获`this`，我们能够在Lambda内部安全地访问类的私有成员。

### 可变性

默认情况下，Lambda表达式的行为类似于常量函数，即不允许修改被捕获的变量。如果我们确实需要改变这些变量的状态，可以在Lambda前加上`mutable`关键字，使其变为可变的。例如：

`auto f = [val = 5]() mutable {       ++val;       std::cout << "Val is now: " << val << '\n';   };   f(); // 输出: Val is now: 6   `

### 性能考虑

尽管Lambda表达式带来了便利，但在某些性能关键的应用中，我们应该谨慎使用它们。因为每次调用带有复杂捕获列表的Lambda可能会导致额外的开销，比如临时对象的创建和销毁。此外，频繁地构造和析构Lambda也可能影响缓存命中率。因此，在追求极致性能时，应该权衡Lambda带来的好处与其潜在的成本。

### 最佳实践

-   **保持简洁**：尽量让Lambda表达式的逻辑简单明了，避免过度嵌套或过于复杂的表达式。
    
-   **优先使用引用捕获**：当不需要复制数据时，应优先考虑按引用捕获以减少内存占用。
    
-   **注意生命周期问题**：确保被捕获的对象在其整个生命周期内都是有效的，特别是在异步编程环境中。
    
-   合理运用`mutable`：只有在必要时才声明Lambda为`mutable`，否则保持不可变状态有助于提高代码的安全性。
    
-   **考虑编译器优化**：现代编译器对Lambda表达式进行了很多优化，但对于特别关注性能的应用，还是应该测试不同方案的实际效果。
    

## 小结

Lambda表达式是C++11以来引入的一项强大特性，它极大地增强了语言的功能性和灵活性。通过本文的介绍，相信读者已经掌握了Lambda表达式的使用方法及其背后的原理。无论是在日常开发工作中简化代码，还是探索更深层次的语言特性，Lambda表达式都将成为C++程序员手中的一把得力工具。随着C++标准的不断演进，未来版本还将带来更多关于Lambda的新特性和改进，值得我们持续关注。

# 推荐阅读

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/eRETdLuoXm1hlcFzRLY8530oa5qlVg14Sp7ykiaiaeksse1OriavStBSZ3aOeSRibrictsMImSUmYpM8KlkR2oh16xA/640?wx_fmt=gif&from=appmsg)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRETdLuoXm0F1TJuz7SHvpW1zgzV6ZIF0r5H99lwcz5CHLoNtLjOXfQpElKKhKEE3Eiapa05EFDfBlOlExx8iaOw/640?wx_fmt=jpeg&from=appmsg&random=0.07403834435997281&random=0.9548404603232596&random=0.104285335892905&random=0.6465628742284186&random=0.7114643948388735&random=0.39825419144728924&random=0.5036513307316739&random=0.24264210905518024&random=0.8403119589921406&random=0.004225922898027479)