# Fortran 仍然在被使用的 5 个重要原因


> 原文地址: [https://mp.weixin.qq.com/s/LwQXzbuBjqRW0CtdyJ5QjA](https://mp.weixin.qq.com/s/LwQXzbuBjqRW0CtdyJ5QjA)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVV6GUal5MQQmOiaibBt0gFuzAna2vCrs1c8VR8ylO2fuzVYANnicsjkqjXycSLdHwxutxgjD5JbAJbVA/640?wx_fmt=png&from=appmsg)

时不时地会被一些编程小白问到，Fortran这么古老的编程语言还有前途吗？

作为 Fortran 的忠实老粉，自己自然很想给出一个肯定的答复，但毕竟不是编程语言专家，不敢妄下断言。好在自己平时读的资料比较多，依稀记得以前读过一篇博文，对 Fortran 现在仍然在被活跃使用的原因阐述得比较深入。为了解除大家的困惑，周末抽空把这篇博文重新翻找出来，简单翻译了一下，贴给大家参考。

# 原文链接：

> 5 Reasons Why Fortran is Still Used 
> 
> by Martin D. Maas, Ph.D
> 
> https://www.matecdev.com/posts/why-fortran-still-used.html

  

**译文**

Fortran 是一种专门用于高性能计算的编程语言。信不信由你，它至今仍然在被广泛使用并且不断发展。

Fortran 在高性能计算中仍然被使用。此外，它还在不断进化。

Fortran 是一种非常古老的编程语言，以至于大多数人认为它已经不再被使用了。但问题是，为什么物理系的研究人员、超级计算中心或政府机构的一些人仍然在使用 Fortran 呢？在深入探讨之前，让我们试图用几句话来概括：

> **Fortran 是一种专门为高性能计算而设计的编程语言**。它至今仍然被使用的良好理由包括其**以性能为中心的文化、易于使用的数组语法、长期代码寿命的保证，以及通过集合数组阵列扩展（Coarrays）提供的内在分布式内存并行性**。
> 
> **Fortran is a language that is specialized for high-performance computing**. Good reasons for its continued use today include its **performance-centric culture**, an **easy-to-use array syntax**, the **guarantee of long code longevity**, and **intrinsic distributed-memory parallelism via coarrays**.

我们应该注意，到了 2010 年，Fortran 被描述为非常接近成为“**理想的 HPC 编程语言**”。

这篇文章试图**总结 Fortran 的历史优势，并思考这些优势是否仍然存在**。

## 1\. Fortran 围绕着以性能为中心的文化构建

出于非常明显的原因，性能一直是高性能计算社区的首要任务。

Fortran 的历史发展主要关注优化。这通常意味着，为了**给编译器提供最好的机会来积极优化代码**，语言对程序员施加了许多限制。

简单来说，**Fortran 使得编写运行速度慢的代码非常困难**，而在其他语言中，包括 C 语言，你有自由去做那些会导致代码运行缓慢的事情。

应该注意的是，C/C++ 编译器花了很长时间才赶上 Fortran 编译器历来享有的速度，这要归功于它们从一开始就提出的简单限制性方法。例如，**C99 标准引入了受限指针**，这使得编译器能够更好地进行优化（参见关于 restrict 关键字的维基百科条目）。

多年来，编译器理论和实践有所改进，编译器在优化各种代码方面变得更好。因此，在 Fortran 和其他语言中，重点都转向了增加能够提高程序员生产力的功能。

在编译器领域最新的发展之一是 Julia，它在单线程和多线程情况下都可以像一些 Fortran 编译器一样快，例如流行的开源编译器 gfortran 。

## 2\. Fortran 在科学计算中比 C/C++ 更易于使用

过去的“快速”语言主要是 C/C++。

这些语言对于通用编程非常方便。然而，要执行科学计算的最基本操作，如处理多维数组和复数，需要承担显著的**语法开销**。

另一方面，Fortran 从一开始就**原生支持多维数组、复数，甚至是一些特殊函数**。

Fortran 还引入了****独创**的数组语法**，后来被 Matlab 采用。实际上，Matlab 最初被称为“改进的 Fortran”，主要是因为它保留了并改进了这种语法。还应该注意的是，即使在今天，现代 Fortran 拥有 C++ 所不具备的数组功能，如**数组推导式**（Array Comprehensions）。

当然，C/C++ 在这个领域也取得了一些进展，例如**在 C99 标准中引入了原生复数**。然而，应该注意的是，C 标准的某些变化需要很长时间才能传播。例如，正是因为这个问题，Python 的 ctypes（提供与 C 的兼容性，应符合标准）仍然不支持复数。

至于多维数组，C++ 开发者面临的一个重大问题是可选择的库数量众多。已有的选择至少包括：Eigen、Blaze、Fastor、Armadillo、XTensor、Boost.MultiArray。火上浇油的是，许多开发者又重新发明了自己的多维数组库。

这个领域的标准的缺乏，使得在选择了这些基本库的不同开发者之间共享代码变得困难。**这个问题将随着 C++23 的到来而改变，它最终将使多维数组成为标准的一部分。**

## 3\. 在科学计算中的代码寿命和向后兼容性

时不时地，我仍然会编译几十年前编写的 Fortran 代码，科学计算领域的许多人也这样做。

数值计算不像网页设计那样迅速过时。长期的代码寿命是科学计算中非常期望的特性。任何投入大量精力编写数值代码的人都希望确保它**在未来几十年内仍然可以工作**，而且基本上不需要改变。

如果有的话，**由于其严格的向后兼容性政策，Fortran 就是长期代码寿命的保证**。遗憾的是，这也引入了显著的惯性，为了语言特性的不会过时。

## 4\. 通过集合数组阵列扩展（Coarrays）实现固有的分布式内存并行性（Intrinsic distributed-memory parallelism）

Fortran 2008 标准引入了一个重大创新，**将分布式内存系统上的并行处理作为语言的一部分**，以集合数组阵列扩展（Coarrays）的形式。

在最新的 Fortran 版本中，只需要进行较小的更改，就可以将现有的单线程或多线程代码转换为分布式内存并行代码。要知道，这在通常来说可是非常具有挑战性的工作。

MPI 作为一个标准化的网络层，已经成为了过去 25 年集群计算的支柱。然而，它正在逐渐显示出过时的迹象。特别是，**MPI 要求程序员编写一些现在被认为是非常低级代码**，使用“send”和“receive”语句。

在数值计算中，**开发者更愿意考虑分布式数组或类似抽象的概念**，并让某个网络库来处理和优化通信。

**Fortran的集合数组阵列扩展（或 CAF）是 HPC 中最早的后 MPI 编程模型之一**。通过将其作为标准的一部分，保证了 CAF 不会像一些以前的在其他语言的基础上开发新的并行编程模型的尝试那样（例如 Unified Parallel C），会因为兴趣缺乏或精力投入过度分散而消失掉。

## 5\. Fortran 仍在发展

信不信由你，Fortran 仍在积极开发中。一方面，Fortran 标准委员会负责定期修订该语言。

而另一方面，更重要的是，有一些有趣的努力正在将 Fortran “复活”为新项目的有效选择。

目前，Fortran 缺乏现代工具，如构建系统和包管理器，也缺乏一个蓬勃发展的开源社区，甚至一个标准库。

这些大多数问题正在新的 Fortran-lang.org 社区中得到解决，这是一个与供应商无关的社区。甚至有 LFortran，一个交互式编译器，目前正在 pre-alpha 阶段开发。另请参见这些倡议的作者撰写的预印本《Toward Modern Fortran Tooling and a Thriving Developer Community 》。

将 Fortran 适应互联网时代的努力是非常值得的。一个好的问题是，**是否有足够的 Fortran 开发者采用开源文化，使这一想法成为可能？**

* * *

注：原文中有部分内容是对 Julia 语言的评判，与这里的问题不太相关，所以作了适当删减。有感兴趣的可以去原文查看。

  

**结语**

正如上文所说的，Fortran可能不是最时髦的编程语言，但它的稳定性、效率和在科学计算领域的强大功能使其成为值得学习的工具。通过掌握Fortran，你将能够解决一些最复杂的计算问题，并为未来的编程之旅打下坚实的基础。

Fortran的学习之路永无止境，随着你不断地深入，你会发现更多的宝藏。无论是高性能计算、并行编程还是优化算法，Fortran都有着广泛的应用。在这个过程中，你不仅会学到编程技巧，还会培养出解决问题的能力，这将是你宝贵的财富。祝你在Fortran的世界中探索愉快！

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

FEtch 系统是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于 Fortran 90 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "FEtch有限元开发系统(519166061)" 留言讨论。我们长期开展 FEtch 系统的免费试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取许可证文件。