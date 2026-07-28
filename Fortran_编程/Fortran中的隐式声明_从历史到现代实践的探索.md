# Fortran中的隐式声明：从历史到现代实践的探索


> 原文地址: [https://mp.weixin.qq.com/s/1BGTF4hhh7nHiLSKov2lyw](https://mp.weixin.qq.com/s/1BGTF4hhh7nHiLSKov2lyw)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVUxNZIxAnxKnBXf8JF0n7TDE5DjD6Gf4GXVADHWOuFm6DjFo4O3Jnwtfm97LYy3O5JaKaID0tsquA/640?wx_fmt=png&from=appmsg)

Fortran，作为科学计算和数值模拟领域的先驱编程语言，自其诞生以来便见证了计算机科学和技术的发展。在它悠久的历史中，一个特别引人注目的特性是所谓的“隐式声明”（implicit typing），即变量类型可以依据命名规则自动推断而无需显式声明。这种做法虽然简化了早期程序员的工作，但也带来了诸多问题，促使后来的语言版本逐步引入更严格的规则以提高代码的健壮性和可读性。

## 隐式声明的历史背景

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVUxNZIxAnxKnBXf8JF0n7TDluRzTgibaa1Zh9qk2GmbMXkCkNBia8XNx32cdM1sWrnuhMar9V19Itkg/640?wx_fmt=jpeg&from=appmsg)

1957年，IBM推出了第一版FORTRAN（Formula Translation）编译器，标志着高级编程语言时代的开始。那时，为了使程序尽可能简单易写，Fortran允许程序员不声明变量的数据类型。根据默认规则，以字母 `i、j、k、l、m 或 n` 开头的变量被视为整数，其余则被假定为实数。这一特性极大地便利了早期科学家们快速编写和测试数值算法，但同时也埋下了隐患。例如，考虑以下简单的Fortran代码片段：

`program squares     do i = 1, 5       x = i**2       print *, x     end do   end program squares   `

这段代码没有声明任何变量，却能成功编译并运行，输出前五个正整数的平方。这里，`i`因为是以'i'开头而被默认认为是整数，`x`则是实数。然而，这样的代码在今天的标准下被认为是不可取的，因为它缺乏明确的变量声明，增加了潜在错误的风险。

## 潜在的问题与挑战

随着软件规模的增长和复杂度的增加，隐式声明带来的灵活性逐渐暴露出其缺点：

-   **代码难以维护**：未明确声明类型的变量使得代码的理解和维护变得更加困难，尤其是当项目由多个开发者共同完成时。想象一下，如果你接手了一个大型的科学计算项目，里面充满了未声明类型的变量，这将大大增加理解代码逻辑的时间成本。
    
-   **错误不易察觉**：由于缺少编译时检查，某些类型相关的错误可能直到运行阶段才会显现出来，增加了调试成本。比如，在上面的例子中，如果我们将`i`改为大写的`I`，那么在一些旧版本的Fortran中，`I`可能会被视为实数，导致循环无法正确执行。
    
-   **意外行为**：对于新手而言，理解为何特定变量具有某种数据类型可能是非直观的，这可能导致逻辑上的误解和误用。例如，初学者可能会惊讶地发现，他们的变量`god`被默认解释为实数，除非他们特意将其声明为整数——这就是为什么Fortran中有句玩笑话：`“In Fortran, GOD is REAL (unless declared INTEGER).”`（在Fortran中，上帝是实数，除非声明为整数。）
    

## 向显式声明的转变

认识到上述问题后，Fortran 90引入了一个重要的变革——`IMPLICIT NONE`语句。通过要求所有变量必须显式声明其类型，此指令有效地消除了因隐式类型导致的各种潜在风险，并促进了更加严谨的编程习惯。如今，几乎所有的新Fortran代码都遵循这一原则，确保每个符号都有清晰定义的作用域和含义。修改后的示例代码如下：

`program squares     implicit none     integer :: i     real :: x     do i = 1, 5       x = i**2       print *, x     end do   end program squares   `

在这个版本中，我们添加了`implicit none`来禁止隐式类型规则，并明确声明了`i`为整型，`x`为实型。这样做不仅提高了代码的可读性和可维护性，还减少了出错的可能性。

## 编译器选项与工具支持

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVUxNZIxAnxKnBXf8JF0n7TDbtARUX8wf6uRfdKCWUjvkPCHSpzc32alLPXhRa6OJicbuScPNjicBlug/640?wx_fmt=png&from=appmsg)

尽管现代Fortran强烈推荐使用`IMPLICIT NONE`，但为了保持向后兼容性，许多编译器仍然保留了对传统隐式类型的处理方式。然而，大多数主流编译器（如GNU Fortran, Intel Fortran等）提供了命令行选项来强制执行严格的类型检查，例如gfortran中的`-fimplicit-none`标志或Intel Fortran里的`-implicitnone`选项。这些设置可以帮助开发者避免无意间引入未声明变量的风险，从而进一步提升代码质量。让我们看看如何使用这些选项：

假设我们有一个包含隐式类型变量的文件`implicit.f90`，内容如下：

`program test     do i = 1, 10       x = i**2       print *, x     end do   end program test   `

如果我们尝试用带有`-fimplicit-none`标志的gfortran编译这个文件，将会得到如下错误信息：

`$ gfortran implicit.f90 -fimplicit-none   implicit.f90:2:6:          2 |   do i = 1, 10         |      1   Error: Symbol 'i' at (1) has no IMPLICIT type   implicit.f90:3:5:          3 |     x = i**2         |     1   Error: Symbol 'x' at (1) has no IMPLICIT type   `

编译器明确指出，`i`和`x`都没有被声明类型，这迫使我们必须修正代码，加入必要的声明，从而保证了代码的正确性和可靠性。

## 社区讨论与标准化进程

近年来，在一些在线论坛上出现了关于是否应该改变Fortran标准以默认启用`IMPLICIT NONE`的讨论。虽然这样的提议得到了部分支持者的赞同，认为它可以简化学习曲线并减少初学者犯错的机会；但是，考虑到现有大量依赖隐式类型的遗留系统以及由此引发的兼容性问题，标准委员会成员普遍持谨慎态度。事实上，**任何重大改动都需要权衡利弊，并且要充分考虑到整个生态系统的影响。**例如，若默认行为突然改变，只需一个编译器更新，一大批先前符合标准的代码就会停止构建。这样的遗留系统的维护者将需要更新他们的代码——通过显式声明所有先前隐式类型的变量——或使用编译器选项将其作为例外。实际上，变化将在应用程序和编译器两端发生，产生开发和维护成本。

## 小结

回顾Fortran从宽松到严格的过程，我们可以看到编程语言设计是如何随着时代变迁而不断演进的。尽管隐式声明曾经是该语言的一大特色，但它也限制了后续发展。因此，今天的最佳实践建议始终使用`IMPLICIT NONE`，不仅有助于培养良好的编程习惯，而且能够显著降低程序出错的概率。记住，每一次敲下`IMPLICIT NONE`都是对自己编码质量和专业精神的一种承诺。它不仅仅是一个语法元素，更是一种态度，代表着对代码质量的追求和对细节的关注。通过坚持这种做法，我们可以创建出既强大又易于理解和维护的程序，而这正是优秀编程实践的核心所在。

# 推荐阅读

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg&random=0.2312854885901674&random=0.7034958920451049)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。

我们长期开展 FEtch 系统的试用活动，欢迎私信交流和扫码咨询，免费获取**许可证文件**。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVWOboiawHS9a0aZP73ss6jaKwHtTRFgyVZWmADYcYibSN0SVa6JMZFTtPziaBdnnkaEK7r9IPLicM5MdQ/640?wx_fmt=png&from=appmsg)

**喜欢****作者******，请点********赞********和在看******![](https://mmbiz.qpic.cn/mmbiz_gif/6BxCiaoAkhCpmWx6ic8Sg6X6PXsnJWo7a3hOSHEicIvYJO3nOPdf6GiaqmlM1gXnia8Ppu76xY0hiaTBXSjQNRsr6Dkg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6459285066781566&random=0.9039664113437702&random=0.10616299980642463&random=0.37943585876598473&random=0.7246305284075434&random=0.1820491079508062&random=0.3136645327514245&random=0.8290227030922905&tp=webp&random=0.5243579855146836)**

**![](https://mmbiz.qpic.cn/mmbiz_gif/pn1AOBGTwDVWGtThsMX1L4lk0EffmPg1BKAYaooibsaRwoYMzqxhJ1seOlZialOpryLocgAFt7Yb97uwwseMCLxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.90499299240585&random=0.7427014598159356&random=0.6203706698189717&random=0.17266143983420013&random=0.4502076552242009&random=0.3348111146987862&random=0.5857982594073723&random=0.5924137199896844&tp=webp&random=0.47123292578677933)**