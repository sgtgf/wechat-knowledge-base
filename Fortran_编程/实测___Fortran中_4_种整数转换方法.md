# 实测 | Fortran中 4 种整数转换方法


> 原文地址: [https://mp.weixin.qq.com/s/XBk06OFrHcR7zjGG1XCmgQ](https://mp.weixin.qq.com/s/XBk06OFrHcR7zjGG1XCmgQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVVD8PfRibLSshCSibRmWHepdFOD2qh33jViaNicEvGlctlicQnhLP5Jct7MkrVLDNLQrZjM55kq7iaLBeDA/640?wx_fmt=jpeg)

浮点数在编程中扮演着重要角色，但有时我们需要将其转换为整数。在Fortran中，这种转换可以通过几种不同的方式进行，每种方式都有其特定的用途和效果。本文将探讨Fortran中浮点数的整数转换方法，并结合实际算例，展示这些方法的应用。

## 整数转换的基本方法

在Fortran中，将浮点数转换为整数可以通过以下4种内置函数实现：

1.  `int()`：丢弃小数部分，直接转换为整数。
    
2.  `nint()`：将浮点数四舍五入到最近的整数。
    
3.  `ceiling()`：向上取整，即转换为不小于该浮点数的最小整数。
    
4.  `floor()`：向下取整，即转换为不大于该浮点数的最大整数。
    

这些函数在处理浮点数时提供了不同的舍入策略，使得开发者可以根据具体需求选择合适的转换方法。

## 实例

考虑一个简单的算例，我们将取不同的具有代表性的浮点数，然后观察不同整数转换方法的结果。

`program main     use, intrinsic :: iso_fortran_env     implicit none          real(real32) :: x        x = -1.5_real32     print '(F12.8)',x     print *, int(x),nint(x),floor(x),ceiling(x)        x = -1._real32 + epsilon(x)     print '(F12.8)',x     print *, int(x),nint(x),floor(x),ceiling(x)        x = -0.5_real32     print '(F12.8)',x     print *, int(x),nint(x),floor(x),ceiling(x)        x = 0.5_real32     print '(F12.8)',x     print *, int(x),nint(x),floor(x),ceiling(x)        x = 1._real32 - epsilon(x)     print '(F12.8)',x     print *, int(x),nint(x),floor(x),ceiling(x)          x = 1.5_real32     print '(F12.8)',x     print *, int(x),nint(x),floor(x),ceiling(x)        end program main   `

这里，函数`epsilon(x)` 用于返回与`x`相同种类的最小正数 ε，满足1+ε\>1 和1−ε<1。

## 结果分析

将输出结果汇总成如下表格：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVWDiaibQCexwZN8KJyguSj4FcfficehJWjicsz6M4sSIwMa53ibZgCEHDFia6ib04f6opGW5wlrRhZCHVF3A/640?wx_fmt=png&from=appmsg)

从结果中可以看出，

-   使用`int()`时，由于直接丢弃小数部分，结果可能会有较大的误差。
    
-   `nint()`提供了四舍五入的结果，通常更接近实际值。
    
-   `ceiling()`总是向上取整，可能导致结果偏大。
    
-   `floor()`总是向下取整，可能导致结果偏小。
    

## 结论

Fortran提供了多种浮点数到整数的转换方法，每种方法都有其特定的用途。在实际应用中，选择合适的转换方法对于保证程序的准确性和效率至关重要。通过上述算例，我们可以看到正确使用这些转换函数的重要性。希望本文能够帮助读者更好地理解和应用Fortran中的浮点数整数转换。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。