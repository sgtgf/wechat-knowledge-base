# Fortran介绍

Fortran是一种历史悠久的高级编程语言，以强大的数值计算能力著称。诞生于20世纪50年代，主要用于科学计算、数值模拟和工程计算等领域。经过多次标准更新，其功能不断增强，在科学研究和工程领域发挥着重要作用。

# Fortran安装材料

Fortran语言运行需要开发环境和编译器，首先介绍一些可以选择的开发环境和编译器。

## 开发环境

1.  Visual Studio：本文选择Visual Studio 2022社区版作为集成开发环境。
    
2.  Code::Blocks： 轻量级 IDE，支持 Fortran。
    
3.  Eclipse + Photran： 重型 IDE，适合大型项目开发。
    

## 编译器

-   开源免费的编译器：Gfortran：https://fortran-lang.org/zh\_CN/learn/os\_setup/install\_gfortran/
    
-   商业编辑器：Intel Fortran Compiler Classic (ifort)和Intel Fortran Compiler (ifx)；ifort后期将不再更新，因此推荐ifx。Intel 提供了 oneAPI HPC 工具包，其中包含 Intel Fortran Compiler Classic (ifort) 和 Intel Fortran Compiler (ifx)。所以本文将安装Intel oneAPI。
    

## 最终配置

本文选择Visual Studio 2022社区版+Intel one API的方式配置Fortran的运行环境。

# 安装步骤

1.  下载Visual Studio 2022社区版：  
    
    
    
2.  点击VisualStudioSetup.exe，运行安装Visual Studio，工作负荷安装桌面开发、python和C++工作负载（这一项非常重要，记得勾选）。最后记得更改安装位置，需要内存较大，最好不要安装在系统盘。其余按照安装步骤一路安装即可。安装完成后记得==重启电脑==。
    
3.  下载Intel oneAPI：https://www.intel.com/content/www/us/en/developer/tools/oneapi/toolkits.html来到下载页面，选择下载Base ToolLKit和HPC Toolkit。4.首先安装Base ToolLKit，再HPC Toolkit（强调：一定要按照这个先后顺序安装）。安装时，选择自定义安装，可以更改安装的选项和位置，最好把安装位置修改到其他盘。到此，Base Toolkit就安装成功了，接下来相同的步骤安装HPC Toolkit，不同的是自定义安装的位置不需要再修改了，因为有一部分base Toolkit的插件已经在上一阶段安装了。其余步骤不再赘述。5，安装完成后，点击Go to Installed Products，可以看到两个工具都已经成功安装。至此，安装结束。
    

# 新建Fortran项目

1.  打开Visual Studio 2022，选择创建新项目，选择fortran语言，点击Main Program Code，配置新项目的名称和存放位置，勾选解决方案和项目在同一目录。
    
2.  此时已经成功新建一个项目，代码可以在左侧解决方案管理器的Source Files文件夹内找到，文件格式为.f90。左侧红色和绿色按钮分别代表调试和执行。我们分别进行调试和执行后，可以看到输出了Hello World，代表代码运行成功。
    

# 再次新建或打开项目文件

1.  文件--新建--项目可以再次新建另一个项目文件
    
2.  打开一个项目文件：文件--打开--项目或解决方案--选择.sln或vfproj文件都可以打开该项目