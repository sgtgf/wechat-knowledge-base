# Ansys Maxwell 2025 R2 更新功能一览


> 原文地址: [https://mp.weixin.qq.com/s/VWdp7cgyRp\_fFHRcBehHBA](https://mp.weixin.qq.com/s/VWdp7cgyRp_fFHRcBehHBA)

本次更新涉及常规更新以及求解器方面的更新。

## 1常规更新

### 可以在 AEDT 中直接启动 Motor-CAD

![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTwVibdibUW1Viaw2FW0ibsTnFzLr4XMFmFab94F1qusDm9Bc5nCYZ6s6VXBcjbDxtNALcNMTmIVaMic8g/640?wx_fmt=png&from=appmsg)经过测试，应该是不需要两者版本匹配，在 Motor-CAD 顶部菜单栏 Defaults>>Automation 中点击 Update to current version 设置 Registered version: 2025.1.1 的路径即可：![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTwVibdibUW1Viaw2FW0ibsTnFzCEmZmDQHsltTmb65lJhakbPoXTfcR3X0QY6XYibRnK1icPiaoFUZ7zd2Q/640?wx_fmt=png&from=appmsg)更多相关内容参考帮助文档 Maxwell® Help：

-   Maxwell Coupling 17-121：Launching Motor-CAD from Ansys Electronics Desktop
    

### 空间矢量脉宽调制绕组功能增强

这个功能是在 2025R1 中新添加的功能，可直接在激励中对三相绕组创建空间矢量脉宽调制类型的激励，当前版本对这个功能进行了增强。

更多相关内容参考帮助文档 Maxwell® Help：

-   Assigning Boundaries and Excitations for 2D Designs 11-57：Setting Up an SVPWM Excitation
    

### Motor-CAD 和 Maxwell Map 图功能增强

Motor-CAD 和 Maxwell（基于 Machine Toolkit 插件）中的 Map 图功能增强

更多相关内容参考 Mator-CAD 帮助文档以及 Maxwell® Help：

-   Working with Ansys Electronics Desktop Projects 3-253：Maxwell ACT Extensions Wizards
    

### 涡流求解类型（Eddy current）改名为交流磁场（涡流）(AC Magnetic (Eddy Current))

![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTwVibdibUW1Viaw2FW0ibsTnFzM9PLFkOUZuoCqOaJMaMVDibvYtPia6ZibukhmlPv8c8vgYfFupcBkmWhA/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTwVibdibUW1Viaw2FW0ibsTnFzvBAdEpnw5umfJKOsw4xIwsliaC3GxrMM4q5QZiceoAVcdu0RTSFI9wPw/640?wx_fmt=png&from=appmsg)

### 曲面网格支持设置 TAU 网格纵横比

之前版本好像也支持。![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTwVibdibUW1Viaw2FW0ibsTnFzgGeHmlxJib5rxFGHx6ian7QXPI4uQtSDyRYNSdfI69kq44OOZufAs9ZA/640?wx_fmt=png&from=appmsg)

### 支持对含运动部件设备中的电弧进行耦合仿真

针对静止设备：![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTwVibdibUW1Viaw2FW0ibsTnFz1Ntrd4FhQwJFPpqfn47MUibqR08KIOaYyKYSDmrV9D9Gbl1aOZUkHicg/640?wx_fmt=png&from=appmsg)针对运动设备：![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTwVibdibUW1Viaw2FW0ibsTnFzbuiaa2cMhm8UibiaycdpyZnbm0rmQ0MNt64XaXicJj2ibpHUn7W8W3fwiaRw/640?wx_fmt=png&from=appmsg)更多相关内容参考帮助文档 Maxwell® Help：

-   Maxwell Coupling 17-128：Modeling an Electric Arc in a Static Device
    
-   Maxwell Coupling 17-128：Modeling an Electric Arc in a Device with Motion
    

### 涡流求解器中支持设置带阈值的非正弦激励（通过对数据集进行快速傅里叶变换）

之前版本好像也支持。![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTwVibdibUW1Viaw2FW0ibsTnFzq9Gjzta2xuKXuHmDyj8qJZPgnyyTjyAn4ticBXP3bfMguBR8ibqYrerQ/640?wx_fmt=png&from=appmsg)更多相关内容参考帮助文档 Maxwell® Help：

-   Assigning Boundaries and Excitations for 3D Designs 10-112：Using AC Magnetic Excitation to Generate Harmonic Losses
    

### 支持 Maxwell 与 Ansys Motion 耦合仿真

支持将 Maxwell 中计算的瞬态力数据通过 Workbench 传递给 Ansys Motion，用以计算 NVH。

更多相关内容参考帮助文档 Maxwell® Help：

-   Maxwell Coupling 17-103：Including Transient Data in Maxwell-Motion Workbench Coupling
    

### 3D 组件增强

具体更新内容暂时未知，蹲一波后续官方解读。

## 2求解器更新

### 支持在二维瞬态求解器中给 Solid 类型绕组设置星形连接

![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTwVibdibUW1Viaw2FW0ibsTnFza7jia4MJoiccKJBOSLF9cLSicNaEnfW3Rbb7Z3Tm9OD8snz2F0RS09tbg/640?wx_fmt=png&from=appmsg)目前不支持三维，也不支持混合绕组类型

### 支持在静磁和含直流偏磁的交流磁场求解器中设置高磁导率的磁性薄层

可以在两个物体交界面设置薄层，并指定其相对磁导率和厚度，本次支持了高磁导率磁性薄层。![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTwVibdibUW1Viaw2FW0ibsTnFzvWWTgCtjaQpEnHqMVB3GkO456V3J12XxK2NqBFdVG5xcPQgSLeOwsw/640?wx_fmt=png&from=appmsg)

### 提高了瞬态求解器对线性、非运动、恒定时间步长模型的求解速度

### 连续空气域（ Continuum Air）增强(Beta)

新版支持多域网格划分，打开 beta 功能以后，多域网格剖分自动激活，可提高网格划分效率、速度和健壮性，同时结合连续空气域（ Continuum Air）技术，使得计算结果更加准确和平滑，尤其对于铁损、齿槽转矩以及用于 NVH 分析的瞬态力等敏感量。

更多相关内容参考帮助文档 Maxwell® Help：

-   Maxwell 3D Technical Notes 28-104：Improving Reliability of Results for Air-Gap Modeling of Electric Motors (3D)
    

## 3A-phi 求解器更新

### 瞬态 A-phi 求解器中支持 3D layout 与 Maxwell 中的 3D 几何体之间进行网格链接

将 HFSS 3D Layout 的 EDB 文件导入时，可为 Layout 组件与 Maxwell 中的 3D 几何体设置网格链接。

更多相关内容参考帮助文档：

-   Using a 3D Layout Component 157：Simulating a 3D Layout Component with an A-Phi Solver
    

### 交流磁场（涡流）A-Phi 求解器功能增强：支持导入 layout 组件（beta）

更多相关内容参考帮助文档：

-   Simulating a 3D Layout Component with an A-Phi Solver
    

### 交流磁场（涡流）A-Phi 求解器中 RLGC 模型提取功能增强（beta）

更多相关内容参考帮助文档：

-   Post Processing and Generating Reports 24-10: Viewing Matrix Data
    

## 4附上原文

-   General Enhancements:
    

-   Launch Motor-CAD from AEDT
    
-   SVPWM Winding enhancements
    
-   Motor-CAD and Maxwell performance map enhancements
    
-   Rename Eddy current solution type to AC Magnetic (Eddy Current)
    
-   TAU Mesh aspect ratio support for Curved Surface Meshing
    
-   Support Motion Design in System Coupling for Maxwell-Fluent co-simulation Electric Arc application
    
-   Datasets FFT in AC Magnetic (Eddy Current) Solution: Multi excitations with thresholds
    
-   Maxwell-Motion Workbench coupling (Transient force data) for NVH gearbox applications (Beta)
    
-   3D component enhancements (Beta)
    

-   Solvers:
    

-   2D Transient Y-Connection for Solid Windings
    
-   Support for high-permeable magnetic thin layers in the Magnetostatic and AC magnetic with DC solutions
    
-   Maxwell Transient solver speedup for linear, non-motion, constant timestep models
    
-   Continuum Air 2D/3D enhancements (Beta)
    

-   A-Phi Solvers:
    

-   Support mesh link for 3D Layout in Transient A-Phi solution
    
-   AC Magnetic (Eddy Current) A-Phi solution enhancements: Layout Component support (Beta)
    
-   RLGC model extraction enhancement in AC Magnetic (Eddy Current) A-Phi solution (Beta)
    

作者|斗沙片刻