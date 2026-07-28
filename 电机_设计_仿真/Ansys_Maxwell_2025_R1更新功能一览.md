# Ansys Maxwell 2025 R1更新功能一览


> 原文地址: [https://mp.weixin.qq.com/s/hEc7xrR8Mou8SKHVtsgQBg](https://mp.weixin.qq.com/s/hEc7xrR8Mou8SKHVtsgQBg)

## 1彻底更换几何内核

为保证多物理场分析中模型数据的一致性和准确性，从 2023 R1 开始，**建模几何内核由 ACIS 更换为了 Parasolid**。从 2025 R1 版开始，使用 ACIS 建模内核（2022 R2 及更早版本）的旧版本软件中的项目**无法**再迁移。**建议在当前版本中打开之前使用 2024 R2 版本软件将这些项目转换为 Parasolid**。

-   **Parasolid**：由英国的 Shape Data 公司开发，后来被西门子 PLM 软件公司收购，是一款功能强大的三维几何建模引擎，为许多知名的 CAD/CAM/CAE 软件提供了底层的几何建模支持，在工业设计和制造领域应用广泛。
    

如果尝试打开 2023R1 之前版本软件创建的项目，新版软件会提示无法打开，请使用 2024 R2 版本软件将这些项目转换为 Parasolid：

![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DSrX5vAEnGmaX8ECq1czwVc2qD0AJ90PXqMIdNLFYCTl1LK0l0JV5KZVeic3TOSloh1wCgmYEq6wXw/640?wx_fmt=jpeg&from=appmsg)

## 2空间矢量脉宽调制（SVPWM）激励

新版软件新增支持空间矢量脉宽调制（SVPWM）激励，可直接在 Maxwell 中选择创建。

![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DSrX5vAEnGmaX8ECq1czwVcNFTZwMwmgM3eR3PhXRIPTausNlyf1S8Jib2drQxMDf1ugyGaxs6KYmg/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DSrX5vAEnGmaX8ECq1czwVclGasRu4nFxmWpARn7Bf17ZibD5DecRS8m0WcYPR2wPB21sJa5VYZicFQ/640?wx_fmt=jpeg&from=appmsg)

更详细内容可参考帮助文档：Maxwell® Help：Setting Up an SVPWM Excitation

## 3使用 Park DQ 变换创建电机降阶模型（reduced-order model，ROM）

本次更新支持了使用 Park DQ 变化方式创建电机降阶模型，使用降阶模型可以更方便的生成效率图。

更详细内容可参考帮助文档：Maxwell® Help：Create Efficiency Maps based on Reduced-Order Model

## 4支持 3D 涡流求解器考虑"直流(DC)场"

对于涡流场，新版本软件可通过设置直流激励支持考虑直流偏磁情况，需要注意的是，“直流(DC)场”仅支持 3D 模型。

![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DSrX5vAEnGmaX8ECq1czwVcIyzRjK8C3XxHDp4wCThyh8fmOcI1Im178n10rAwjI10IGBHWQBq6Vg/640?wx_fmt=jpeg&from=appmsg)

电压、电流激励均支持设置“直流(DC)场”

![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DSrX5vAEnGmaX8ECq1czwVc9EJZSOzbavcviaVId0RZHnBKmKicHtYounnjzbLkCSDgFY4icqfbnmhrA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DSrX5vAEnGmaX8ECq1czwVcicdH0CGsFUpj20wymLXk5CQouxGcx6E5bqBOvSszjYsxrvoY4aXeZBw/640?wx_fmt=jpeg&from=appmsg)

详细内容可参考帮助文档 Maxwell® Help：Including DC Fields in a 3D Eddy Current T-Omega Solution

## 5“从快速傅里叶变换（FFT）获取数据集” 性能提高

二维以及三维涡流场分析中，软件支持从 FFT 数据中获取数据集作为涡流场的激励，本次更新对这个转换过程进行了优化，提高了转化效率

![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DSrX5vAEnGmaX8ECq1czwVcqG2icXTR1Iy5GZ1EgicEKbibdr1IEHnRaKl02UG2zIziaDAjialgF08CPEQ/640?wx_fmt=jpeg&from=appmsg)

详细内容可参考帮助文档 Maxwell® Help：Using Eddy Current Excitation to Generate Harmonic Losses

## 6支持保存选中对象的物理场数据

求解瞬态问题时，之前保存了所有实体的求解结果，为了节省磁盘空间以及仿真时间，当前版本软件可设置只保存我们关心区域或者实体的求解结果！

![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DSrX5vAEnGmaX8ECq1czwVczXKHoOQcQqGEycNVib6xcdA0VkBZ8hmVu5qFdYCgu0ZKFReaia9kFYkg/640?wx_fmt=jpeg&from=appmsg)

详细内容可参考帮助文档 Maxwell® Help：Save Fields on Object/Face List

## 7通用求解器性能提高

通过减少文件 IO 提高通用求解器性能:

-   文件输入输出（IO）操作通常会消耗一定的时间和系统资源。如果在使用通用求解器的过程中，能够减少对文件的读取、写入等操作，就可以减少这些 IO 操作所带来的时间开销和资源占用，从而使通用求解器能够更高效地运行，提高其处理问题的速度和效率等性能指标。例如，在一些数据处理场景中，如果通用求解器可以在内存中进行更多的操作而不是频繁地读写文件，就有可能实现通过减少文件 IO 来提高性能。
    

## 8提高了二维瞬态求解器的性能

这次版本，软件提高了二维瞬态求解器的性能。

## 9提高了软件在 AMD 处理器上的性能

这次版本，通过库支持，使得软件在 AMD 处理器上的性能得到了提高。

## 10Continuum Air\[2D\]支持斜槽模型（Beta）

当模拟中有运动时，运动域和静止域界面上的网格可能会变得非共形（即界面两侧的节点不在相同的位置）。这需要一些插值 / 映射技术来将字段从一边映射到另一边。根据用于这种映射的方法，界面上的场量可能会因数值误差而出现局部热点（该处场量明显高于周围区域）。

![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DSrX5vAEnGmaX8ECq1czwVcKsEIwOQxhohrhqcbUv7dWXoourjBfiaJ1PW1JpNMnU8wyGNNwpI7ZXg/640?wx_fmt=jpeg&from=appmsg)该功能可用于提高求解结果的平滑度和准确性，从而使模拟更加稳健和准确，新版软件支持了斜槽模型。

该功能是 Beta 功能，需要勾选**Tools > Options > General > Desktop Configuration > Beta Options**中的 Continuum Air\[2D\]选项

![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DSrX5vAEnGmaX8ECq1czwVc8C5VXpAhM6ib9dvO8k3Zl4QYlPjGpBGDtEiaNWRdK4TrVy8wavYoiahBg/640?wx_fmt=jpeg&from=appmsg)更详细内容可以参考 Maxwell® Help：Improving Reliability of Results for Airgap Modeling of Electric Motors (2D)

## 11涡流场 A- 求解器补充新特点（Beta）

新版软件可能涉及了焊点相关新增特性，但在帮助文档中暂时没有找到更多信息。

## 12导出到 RedHawk-SC 以获得 ECAD PCB 上的感应电流（Beta）

支持导出走线中的感应电流，以导入 ANSYS RedHawk-SC（SoC 电源完整性和可靠性软件）

![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DSrX5vAEnGmaX8ECq1czwVc7289YIJAl6AdvPyYWZSExXNR9aCxFAYSBBGqAEyDpUhYahhWFrIUVw/640?wx_fmt=jpeg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DSrX5vAEnGmaX8ECq1czwVcyyEWaI8fnUf4vNfXEVDTqSptz6KuY9O2h8tFTYP3cPTzbtOJTckNnA/640?wx_fmt=png&from=appmsg)

该功能是 Beta 功能，需要勾选**Tools > Options > General > Desktop Configuration > Beta Options**中的 Maxwell Export ECAD Induced Eddy Current 选项

![](https://mmbiz.qpic.cn/mmbiz_jpg/WH5LbrDn8DSrX5vAEnGmaX8ECq1czwVcbkPxmOtTISNLiaeTjsiarO1K3vPA7Ln86pCUQ2ZYVJicfs5YOZkx7zKicw/640?wx_fmt=jpeg&from=appmsg)更详细内容可以参考 Maxwell® Help：Export Layer-Induced Eddy Current

作者|斗沙片刻