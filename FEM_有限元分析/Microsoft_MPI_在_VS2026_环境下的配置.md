# Microsoft MPI 在 VS2026 环境下的配置


> 原文地址: [https://mp.weixin.qq.com/s/ff3S1Ryqs3PXnP2TaIMmGw](https://mp.weixin.qq.com/s/ff3S1Ryqs3PXnP2TaIMmGw)

**MPI（Message Passing Interface**）是**跨节点并行计算的通用通信协议**，让分布式内存系统中的进程通过标准化接口高效传递数据、协同完成大规模计算任务。**高性能计算和自然科学**之间历来有良好的共生关系，包括且不限于：应用数学、机器学习、物理模拟……

如何在 Visual Studio 2026（VS2026）中配置 Microsoft MPI（MS-MPI）？

假定已经安装好 VS2026，以下是基于最新实践的详细流程。

## 1\. 安装 MS-MPI 环境

MS-MPI 是 Windows 下最稳定的 MPI 实现，需安装两个关键组件：

-   **运行时环境（msmpisetup.exe）**
    
    提供 mpiexec.exe 等执行工具，确保进程管理功能正常。
    
-   **开发工具包（msmpisdk.msi）**
    
    包含头文件（mpi.h）和库文件（msmpi.lib），用于编译 MPI 程序。
    

下载地址：访问 微软官方页面，需同时下载并安装上述两个文件，否则会出现 “msmpi.dll缺失” 或 “mpiexec命令无法识别” 的问题。  
![](https://mmbiz.qpic.cn/mmbiz_png/BrAq83gJ8g4Sr4ClrJPNLJo5DujNHTNfkQpUlOTawicib3z7rvGZxQWUIbdVyOqicNkVt8f8dV56XqpGXnOJiae39qXaklnek4oWYXibF29v1icdg/640?wx_fmt=png&from=appmsg)

安装完成后，系统会自动配置环境变量，默认路径为 C:\\Program Files\\Microsoft MPI\\Bin（运行时）和 C:\\Program Files (x86)\\Microsoft SDKs\\MPI（开发包）。

## 2\. 配置 VS2026 项目属性

新建 C++ 控制台项目后，右键 项目 → **属性**，按以下步骤配置（确保平台为 **x64**，Debug/Release 模式需分别设置）：

### 2.1 添加 MPI 头文件路径

点击 **C/C++** → **常规** → **附加包含目录** ，输入 MS-MPI 头文件路径，通常为 C:\\Program Files (x86)\\Microsoft SDKs\\MPI\\Include

![](https://mmbiz.qpic.cn/mmbiz_png/BrAq83gJ8g6MczysbhXq3sEJzsNBsnTbHjnhKETMJgkqq8fkEnoyctqsPAAEUvW0vtam0Gjo2guakWVOBmPP3QWfaM0iaKOjAqrzniasb1uwY/640?wx_fmt=png&from=appmsg)

### 2.2 添加 MPI 库文件路径

点击 **链接器** → **常规** → **附加库目录** ，输入 MS-MPI 库文件路径，通常为 C:\\Program Files (x86)\\Microsoft SDKs\\MPI\\Lib\\x64

![](https://mmbiz.qpic.cn/mmbiz_png/BrAq83gJ8g4H857rbyp1h9Z4DovzcHI7Vq0Ojw02JB9PhAka6BU9Jibia2NQyUx5mXngjXkrmXTzddPTofqCDpibJuf9oAQxQbvC8EoWHfT2dg/640?wx_fmt=png&from=appmsg)

### 2.3 添加 附加依赖项

点击 **链接器** → **输入** → **附加依赖项** ，添加 msmpi.lib（静态链接）。

![](https://mmbiz.qpic.cn/mmbiz_png/BrAq83gJ8g51ZT1qV7QaiaUMUrZUdtbJ7PhImaSy9L3LbicY0ZxChjK0p74iar0rLGiasQ2UZFP3cH5J5ph3mRKb9xHTFXFiaWhsmCiaeQKF9aibOI/640?wx_fmt=png&from=appmsg)

### 2.4 修改调试命令及参数

若需通过 VS2026 直接调试，需修改项目属性的**调试**选项：

-   **命令**
    
    设置为 mpiexec.exe 的完整路径（如 C:\\Program Files\\Microsoft MPI\\Bin\\mpiexec.exe）。
    
-   **命令参数**
    
    填写 -n 4 $(TargetPath)（4为进程数，$(TargetPath)自动指向当前编译的 exe 文件）。
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/BrAq83gJ8g6aBiaHAI4JLvGGX72PVvVe4RHrEM7X7ndt4wgqcMbukufyxFOK3qr3GiaibV0ojNZ4TaOjfxibG95y4xwz3WNeDWu6pVzJhBIIcsE/640?wx_fmt=png&from=appmsg)

设置后点击 **启动调试** ，VS2026 将自动调用 mpiexec 启动多进程并附加调试器。

## 3\. 编写与调试 MPI 程序

以下是测试代码，多进程并行版 “HelloWorld” ，如下：

```
#include <mpi.h>
```

以上 MPI\_Init()、MPI\_Finalize()、MPI\_Comm\_size()、MPI\_Comm\_rank() 这四个函数是必须的。运行结果如下：

```
Process 2 of 4: Hello, World!Process 1 of 4: Hello, World!Process 3 of 4: Hello, World!Process 0 of 4: Hello, World!
```

## 4\. 常见问题解决

-   **找不到 msmpi.lib**
    
    检查库目录是否正确添加，或手动复制 msmpi.lib 到项目输出目录。
    
-   **进程数始终为 1**
    
    未通过 mpiexec -n <进程数> 启动，或调试配置中未设置命令参数。
    
-   **权限错误（PMI\_Init returned -1）**
    
    以管理员身份运行命令提示符，或执行 wmpiregister.exe 注册本地账户。
    

## **结语**

VS2026 配置 MPI 的核心是**正确安装 SDK**、**配置项目依赖路径**，并 **通过 mpiexec 显式指定进程数**。若需跨平台开发，可后续学习 OpenMPI 在 Linux 下的配置，但 Windows 环境中 MS-MPI 仍是最便捷的选择。大家在配置时是否遇到过环境变量或权限相关的问题？哈哈，赏花啦，山桃、玉兰、梅花，美美哒。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/BrAq83gJ8g5hnoWh4t4z1KB6Mnh8Kyia1nusYMPp05pibTJQYjygINZTUq4rXDcw1M0hIrHH2q2QxndrIe4RRZCoeInUHk8UHkHoibrTBxFA8k/640?wx_fmt=png)