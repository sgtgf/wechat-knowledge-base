# 通用前后处理软件 GiD 简介


> 原文地址: [https://mp.weixin.qq.com/s/dY9nEvkT8OV01fZugCQLBg](https://mp.weixin.qq.com/s/dY9nEvkT8OV01fZugCQLBg)

FEtch 系统的前后处理器采用了欧洲工程数值模拟国际中心（CIMNE）开发的 GiD 软件。CIMNE 创始于1987年，总部位于西班牙巴塞罗那。2022 年，GiD 发布了 v16 版本，目前仍在不断地发展和升级中。

GiD 是为各种数值分析程序的几何建模、数据输入和结果文件的可视化而开发的通用、自适应并且界面友好的应用程序。采用诸如有限元法、有限体积法、边界元法、有限差分法或者无网格算法的计算方案，都可以应用 GiD 作为前处理建模和后处理可视化分析工具。因此，GiD 特别适合于数值模拟专业软件前后处理器的定制。

GiD 软件具有全面的几何建模、网格划分、CAD 数据导入、后处理结果显示等功能。GiD 采用类似于 CAD 的操作模式，同时它还具备强大的批处理能力。用户在使用 GiD 创建复杂模型问题时，会感受到前所未有的方便和轻松。它易于操作、方便灵活、直观便捷。GiD 可以很好地处理各个领域的建模仿真问题，包括固体和结构力学、流体动力学、电磁学、热传导及地质力学等等。

目前，GID 被广泛地应用于高校、研究中心及企事业单位，用以发展不同领域的数值仿真方法。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXTOzYmFB7AwL9Jib2ue7lteI2s0icarMDyPJHlVYCicdW8gtbcIomuJ95CzEnOwvcQvwERN3hhqsqiaw/640?wx_fmt=png&from=appmsg)

  

## 

FEtch 与 GiD

FEtch 系统整合了GiD 后，前后处理功能得到了全面加强。FEtch 与 GiD 之间相互传递数据。FEtch 通过生成 GiD 模板，配置 GiD 的前处理界面和数据输出格式。经过前处理操作，GiD 输出模型的网格数据文件，为 FEtch 所开发的有限元计算程序提供输入数据。有限元程序计算完成后所生成的结果文件即为后处理文件，由 GiD 读入并进行图形化显示。FEtch 和 GiD 两者之间的关系如下图所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVXTOzYmFB7AwL9Jib2ue7lteDCOm7UdOnxMjuZjxqcho58631cg3U3mdV2jhOGugriaibI7bK8263zDw/640?wx_fmt=jpeg&from=appmsg)

  

## 

功能全面的几何建模

在前处理方面，GiD 采用拉伸、旋转、镜像、缩放、偏置等操作得到面、体，可以直接构造矩形、多边形、圆、球、圆柱、圆锥、棱柱、圆环等；还可以通过体面的布尔加、减、交等操作得到模型。GiD 同时还提供了丰富的 CAD 和 CAE 接口，如 IGES、DXF、Parasolid、VDA、STL、Nastran 等，可以按上述格式导入GiD，或将 GiD 的数据文件导出为上述格式。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXTOzYmFB7AwL9Jib2ue7lteRl8n0Z9hMfwYeIcK9h9fyvxH8SbQrWn1IrkicoXBwkic4a2ZOODEYbLQ/640?wx_fmt=png&from=appmsg)

  

## 

性能卓越的网格剖分

GiD 可快速将几何模型自动离散成线单元、三角形单元、四边形单元、四面体单元、六面体单元等。可以根据用户的需要对网格进行局部的加密以及网格阶次的选择。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXTOzYmFB7AwL9Jib2ue7ltez4JbLtE1SU16HjQbAcPLCJSKCSHbqRtbp2bJQUROSB8KHCjM64aFNA/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXTOzYmFB7AwL9Jib2ue7lteMU6iaQ4T0aJzFZWqeEDAuGhu8hialAl1Mbcs6N5WWp0dJALFZXu8kH3g/640?wx_fmt=png&from=appmsg)

  

## 

灵活强大的后处理

GiD 可将结果写成各种常用的图形文件，如：BMP、GIF、TPEG、PNG、TGA、TIFF、VRML 等格式，以及 AVI、MEPG 的动画格式。后处理支持的结果显示方式有：带状云图显示、等直线显示、切片显示、矢量显示、变形显示，等等。用户可以根据需要定制显示菜单。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXTOzYmFB7AwL9Jib2ue7lteibrrqaE8l6S4mJYdkGAHTaCI2jPs7fDo9PibEiciaJyq6qAvUYJ7lvGZibw/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXTOzYmFB7AwL9Jib2ue7ltegCGgia8mqyHYhTzDYztqqDuo6Oaic7G27vG72jjJFwZRsx0fG9HCgDhA/640?wx_fmt=png&from=appmsg)

  

## 

极高的性价比

GiD 软件提供了多种许可证形式，可以灵活选用。总的来说，GiD 的性价比还是很高的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVXTOzYmFB7AwL9Jib2ue7lteeCuOln6Ra30wKaXBNT3xxibU577JV2icEiaPszWsepNL0JImBzSiciarLyw/640?wx_fmt=png&from=appmsg)

  

如果你平常用到的模型网格节点数小于 1 万，那么完全可以毫无顾虑地免费使用 GiD 做前后处理。这对科研领域搞算法研究的工作者来说，还是非常友好和实用的，毕竟大多数测试的算例的模型都比较简单。

如果需要短期突破一下网格节点的数量限制，那么可以申请免费的试用许可证，有效期一个月，只需要绑定邮箱或计算机硬件号即可。

当然，如果你的经费充足，还是建议购买一下，定价不超过 1 千欧元。

## 

更多信息

下载和订购 GiD，请访问：官网

* * *

FEtch 系统是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎站内私信交流。

有任何疑问或建议，欢迎加Q群 "FEtch有限元开发系统(519166061)" 留言讨论。我们长期开展 FEtch 系统的免费试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取许可证文件。