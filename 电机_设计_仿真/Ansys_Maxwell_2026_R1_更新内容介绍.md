# Ansys Maxwell 2026 R1 更新内容介绍


> 原文地址: [https://mp.weixin.qq.com/s/QKtDW79xE5wpEHvzYOV5aA](https://mp.weixin.qq.com/s/QKtDW79xE5wpEHvzYOV5aA)

# Ansys Maxwell 2026 R1 更新内容介绍

## 1 通用更新

### 1.1 支持设置命名集（Named selections as assignments）

> 可以将多个几何体/面/点作为一个命名集，可以对命名集分配材料、边界条件、激励等，直接选中命名集即可，提升操作效率。

例如对多个绕组赋予材料属性，随后对这些绕组设置相同的网格剖分策略。将这些绕组作为一个命名集后，选中该命名集，这些绕组均被选中，很方便配材料、边界条件、激励等操作。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_000_c2eeb0a3dd88.jpg)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_001_7dc8e9c8dc79.jpg)

### 1.2 支持可视化查看被赋予网格策略的实体（Visualization of mesh operation assignment）

> 现在我们选中某个网格剖分策略，可以清晰的看到是哪些体/面被赋予这个策略

我们可以看到被赋予网格策略的几何体表面出现花纹。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_002_0da311a2dcbc.jpg)

### 1.3 Ansys Workbench 平台上，实现 Maxwell 3D 与 Ansys Motion 之间基于单元的力耦合，用于 NVH 分析（Motion/Maxwell 3D force coupling for element-based surface and volumetric force in Workbench for NVH）

> 2025 R2 beta 功能转正。

### 1.4 Python 脚本增强（Python scripting enhancements）

-   Inception voltage calculation：起始电压计算
    

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_003_d92dba5eca7c.jpg)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_004_6925bf2a7898.jpg)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_005_81639a654df8.jpg)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_006_b060982f5539.jpg)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_007_450d85fffb6c.jpg)

-   Query skew model setup：查询斜槽模型设置
    

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_008_9e82cb772077.jpg)

-   Query expressions in Fields Calculator：查询场计算器中的表达式
    

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_009_2bca96817c76.jpg)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_010_28cda59e86fc.jpg)

## 2 求解器

### 2.1 二维瞬态求解速度更快（Faster 2D Transient solutions）

> 2D 瞬态问题求解速度提升，缩短电机、变压器等设备电磁仿真的耗时。

### 2.2 二维瞬态求解器支持选择一阶单元（1st order element option available in 2D Transient solver）

> 2D 瞬态求解器支持一阶单元，在精度要求不高的场景下可进一步提升求解速度。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_011_2a702cfa98e4.jpg)

### 2.3 二维设计中支持设置全局最大网格尺寸（Global maximum length setting in 2D）

> 这个功能之前版本的初始化网格设置中就支持，不清楚这里具体更新了什么。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_012_e7477886c850.jpg)

### 2.4 三维设计中实心（solid）绕组支持设置 Y 连接（Y-Connection winding setup for solid windings in 3D）

> 2025 R2 支持了 2D，这次更新支持了 3D

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_013_e460d1171ed3.jpg)

### 2.5 SVPWM（空间矢量脉宽调制）激励优化，支持信号预览（SVPWM excitation improvements for periodicity and signal preview）

> 可提前预览波形，验证激励设置是否符合预期。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_014_8b362031c2b7.jpg)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_015_9bde0e4ace80.jpg)

### 2.6 感应电机性能图（Motor-CAD Lab）（Performance map for induction machines with Motor-CAD Lab）

> Motor-CAD Lab 中支持使用 Maxwell 求解器，求解结果可生成感应电机的性能图（如效率图、转矩 - 转速曲线等），快速评估电机性能。之前是 beta 功能，这个版本转正

## 3 A-Phi 求解器

### 3.1 AC 磁场（涡流场）A-Phi 求解器商业版发布（Commercial release of AC Magnetic A-Phi solution type）

> AC 磁场（涡流场） A-Phi 求解类型正式商用，稳定性和兼容性提升。

### 3.2 3D 组件优先级设置（3D component priority settings）

> 对于包含 3D 组件或 3D layout 组件的 Maxwell 3D 求解类型，用户可以为每个组件设置组件优先级。设置组件优先级提供了一种机制，用于解决组件与原生对象之间的相交冲突，这种冲突可能在原生对象与 3D 或 layout 组件相交时发生，或者在组件因用户错误或建模问题而重叠时发生。这些相交通常是轻微的，如果忽略，往往对仿真结果没有影响。然而，它们仍然可能导致仿真停止，并需要大量时间来进行故障排除和修复。通过分配优先级，可以解决此类冲突。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_016_1fe2d66e8c50.jpg)

### 3.3 支持对多频点进行分布式计算并具备 GPU 加速功能（Support distributed frequency sweep with GPU acceleration）

> 之前版本就支持的功能，暂不清楚此次具体更新了什么。

### 3.4 支持导出 layout 栅格的最大场强数据（Export layout grid max field data）

### 3.5 支持导出过孔电流与平均电流密度（Export via current and average current density）

### 3.6 支持导出层间所选过孔的受力数据（Export via force on selected vias between layers）

> 上述三个功能为包含 layout 组件且选择 Maxwell 3D · AC Magnetic · A-Phi 或 Transient · A-Phi 求解器时才具有的功能。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_017_20d6dfdca425.jpg)

### 3.7 支持交换端口方向（正、负端子互换）（Swap layout port direction）

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_018_1958830b8f11.jpg)

### 3.8 支持分别设置 RL 和 CG 提取（Independent RL and CG matrix setups）

> 可以分别运行 RL 提取 和 CG 提取

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_019_2f90be77dd5e.jpg)

### 3.9 支持对 3D 组件（3D Component） 进行加密（3D components full encryption）

> 3D 组件支持全加密，可保护其知识产权和设计细节，防止未经授权的访问、查看或修改。

允许将完整的 3D 电磁模型（包括几何、材料、边界和网格等）加密成一个“黑箱”组件。其他用户可以在不知道内部细节的情况下，合法地使用该组件进行系统级仿真，从而实现了技术共享与商业保密的平衡。

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_020_605504493eb4.jpg)

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_021_04d7d08f1330.jpg)

作者|斗沙片刻

  

  

![](D:\电脑文件\公众号知识库\电机_设计_仿真\Ansys_Maxwell_2026_R1_更新内容介绍_images\img_022_fbd2e0604ff1.png)