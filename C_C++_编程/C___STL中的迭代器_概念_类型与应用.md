# C++ STL中的迭代器：概念、类型与应用


> 原文地址: [https://mp.weixin.qq.com/s/84RapqxhwlYPEBzpHFYSGQ](https://mp.weixin.qq.com/s/84RapqxhwlYPEBzpHFYSGQ)

### 

![](https://mmbiz.qpic.cn/mmbiz_gif/kicB09lvgibnnRjv0AAqQxyBODIttZXnQqcTPoF4Pt8tJmnia4CHaYUS3zqicFfKZTWibXTAew2ibFHDjy5Pf8nDnVEQ/640?&random=0.5435628020271572&random=0.7333430426412921&random=0.11768190117034583&random=0.12018774317487124&random=0.31661911194151493&random=0.7635339231703804&random=0.9613365986074616&random=0.1923479600602538&random=0.5088725080122942)

点击上方「蓝字」关注我们

![](https://mmbiz.qpic.cn/mmbiz_png/kLQoJJzjYaicxneNzbOg7ynx3TfnIwmNTpJQ7orkaUNrJIV4u7PNdSJ25Mtn6XdRQTamLDDicHnYfdic2bsiaNQjCw/640?&random=0.6153869521132325&random=0.3050959118824166&random=0.3425740390684655&random=0.5631073915395226&random=0.3811110885571365&random=0.7586035005343534&random=0.5766395221126888&random=0.5695725227414736&random=0.31459453309857777)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eRETdLuoXm1hlcFzRLY8530oa5qlVg14icIZ9hDbNPOkYIRsOWmTDTTFiaxJvPWFTqGXm8cTKIO6bau1qSEqqBDA/640?wx_fmt=png&from=appmsg&random=0.14341926131468363)

C++标准模板库（Standard Template Library, STL）是C++中一组高效的泛型组件集合，包括容器、算法、函数对象以及迭代器等。其中，迭代器扮演着连接容器和算法的关键角色，它为遍历容器元素提供了统一接口，使得我们可以用类似指针的方式访问数据结构中的元素。本文将深入探讨C++ STL中的迭代器，旨在帮助开发者更好地理解和使用这一强大的工具。

## 迭代器的概念

迭代器是一种抽象的数据类型，它的行为类似于指针，但功能更为强大。通过迭代器，我们可以遍历容器中的元素，而无需关心容器的具体实现细节。迭代器的主要作用是在不暴露内部表示的情况下，提供一种访问容器元素的方法。

迭代器的引入使得STL中的容器和算法可以相互独立设计，提高了代码的复用性和灵活性。无论底层容器是如何实现的，只要实现了迭代器接口，就可以使用相同的算法对其进行操作。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRETdLuoXm29Mctzwe9gNADSanlvqaoibaI3o8yiayUq9kBsVK9zO0xhSL2wA3STDTVlz17M31Hk6cxACeGYmWXw/640?wx_fmt=jpeg&from=appmsg)

## 迭代器的分类

C++ STL中的迭代器主要分为五类，它们各自有着不同的特性：

1.  **输入迭代器（Input Iterator）**：
    

-   用于读取序列中的元素。
    
-   支持单向前进，即只能向前移动。
    
-   通常用于只读操作，如从文件或网络流中读取数据。
    

3.  **输出迭代器（Output Iterator）**：
    

-   用于写入序列中的元素。
    
-   同样支持单向前进。
    
-   通常用于写入操作，如向文件或网络流中写入数据。
    

5.  **前向迭代器（Forward Iterator）**：
    

-   兼具输入迭代器和输出迭代器的功能。
    
-   支持多次遍历同一序列。
    
-   提供了更多的操作能力，比如可以多次解引用同一个迭代器。
    

7.  **双向迭代器（Bidirectional Iterator）**：
    

-   前向迭代器的基础上增加了后退的能力。
    
-   可以进行双向遍历，即向前和向后移动。
    

9.  **随机访问迭代器（Random Access Iterator）**：
    

-   提供了最强大的功能集。
    
-   支持任意跳跃到序列中的任何位置。
    
-   支持算术运算，例如加减整数来移动迭代器。
    

## 迭代器的操作

不同类型的迭代器支持不同的操作，以下是常见的几种操作：

-   **解引用（Dereferencing）**：`*iter` 获取迭代器指向的元素。
    
-   **成员访问（Member Access）**：`iter->member` 访问迭代器所指对象的成员。
    
-   **递增（Increment）**：`++iter` 将迭代器移动到下一个元素。
    
-   **递减（Decrement）**：`--iter` 将迭代器移动到上一个元素（仅限于双向和随机访问迭代器）。
    
-   **比较（Comparison）**：`iter1 == iter2` 或`iter1 != iter2` 检查两个迭代器是否相等。
    
-   **算术运算（Arithmetic Operations）**：`iter + n` 或`iter - n` （仅限于随机访问迭代器）。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRETdLuoXm29Mctzwe9gNADSanlvqaoibTjNda39Rp6Zs3HFN2ldJDQroNgZJ4IPjJcRoI2VI2puxfSsPiaTysmg/640?wx_fmt=jpeg&from=appmsg)

## 容器与迭代器的关系

每个STL容器都有自己的迭代器类型，这些迭代器能够访问容器中的元素。容器提供的基本迭代器操作包括：

-   `begin()` 和`end()`：返回指向容器第一个元素和最后一个元素之后位置的迭代器。
    
-   `rbegin()` 和`rend()`：对于支持反向遍历的容器，返回逆序迭代器。
    
-   `cbegin()` 和`cend()`：返回常量迭代器，用于只读访问。
    

## 迭代器失效

当容器发生改变时，比如插入或删除元素，某些迭代器可能会变得无效，不再正确地指向原来的元素。这种情况被称为迭代器失效。对于不同的容器，迭代器失效的情况也不尽相同。例如，在`vector`中插入新元素可能导致所有迭代器失效，而在`list`中插入元素则不会影响已有的迭代器。因此，在编写代码时，我们需要特别留意容器的操作可能引起的迭代器失效问题。

## 使用示例

为了更好地理解迭代器的工作原理，接下来我们将通过几个具体的例子来展示如何在实践中使用它们。

### vector 容器与迭代器

`#include <iostream>   #include <vector>      int main() {       std::vector<int> vec = {1, 2, 3, 4, 5};          // 获取 vector 的开始和结束迭代器       auto it_begin = vec.begin(); // 指向第一个元素       auto it_end = vec.end();     // 指向最后一个元素之后的位置          // 遍历 vector 并打印每个元素       for (auto it = it_begin; it != it_end; ++it) {           std::cout << *it << " ";       }       std::cout << std::endl;          return 0;   }   //输出：1 2 3 4 5   `

在这个例子中，我们创建了一个`vector<int>` 类型的容器，并使用迭代器来遍历它的元素。`begin()` 和`end()` 分别返回指向容器起始位置和结束位置之后的迭代器，而循环体内的`*it` 则用于解引用迭代器，获取其所指向的元素。

### 修改容器内容

`#include <iostream>   #include <list>      int main() {       std::list<int> lst = {10, 20, 30};          // 获取 list 的迭代器并修改元素       for (auto &elem : lst) {           elem *= 2;       }          // 打印修改后的列表       for (const auto &elem : lst) {           std::cout << elem << " ";       }       std::cout << std::endl;          return 0;   }   //输出：20 40 60   `

这里我们使用了范围for循环（range-based for loop），这是一种更简洁的方式来遍历容器。由于`list` 支持双向迭代器，因此我们能够轻松地对每个元素进行修改。

### 排序算法与迭代器

`#include <iostream>   #include <algorithm>   #include <vector>      int main() {       std::vector<int> vec = {5, 3, 9, 1, 6};          // 使用 sort 算法对 vector 排序       std::sort(vec.begin(), vec.end());          // 打印排序后的结果       for (auto num : vec) {           std::cout << num << " ";       }       std::cout << std::endl;          return 0;   }   //输出：1 3 5 6 9   `

此示例展示了如何利用 STL 提供的`sort` 算法对`vector` 进行排序。`sort` 函数接受两个迭代器参数，分别指定要排序的范围起点和终点。

## 小结

迭代器是C++ STL的重要组成部分，它们不仅简化了容器元素的访问方式，还促进了通用算法的设计。理解迭代器的工作原理及其各种类型，可以帮助我们编写出更加高效、可移植的代码。随着对迭代器概念的深入掌握，我们将能够更灵活地运用STL的各种特性，从而提高开发效率和代码质量。

由于篇幅限制，本篇文章无法覆盖迭代器的所有方面，例如自定义迭代器、迭代器适配器等高级话题。但对于初学者来说，上述内容应该已经足够构建一个坚实的基础，以便进一步探索C++ STL的世界。希望这篇文章能够帮助你更好地理解和使用C++ STL中的迭代器。

# 推荐阅读

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/eRETdLuoXm1hlcFzRLY8530oa5qlVg14Sp7ykiaiaeksse1OriavStBSZ3aOeSRibrictsMImSUmYpM8KlkR2oh16xA/640?wx_fmt=gif&from=appmsg)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRETdLuoXm0F1TJuz7SHvpW1zgzV6ZIF0r5H99lwcz5CHLoNtLjOXfQpElKKhKEE3Eiapa05EFDfBlOlExx8iaOw/640?wx_fmt=jpeg&from=appmsg&random=0.07403834435997281&random=0.9548404603232596&random=0.104285335892905&random=0.6465628742284186&random=0.7114643948388735&random=0.39825419144728924&random=0.5036513307316739&random=0.24264210905518024&random=0.8403119589921406&random=0.004225922898027479)