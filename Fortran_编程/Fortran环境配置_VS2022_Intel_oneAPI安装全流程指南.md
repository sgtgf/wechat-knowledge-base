# Fortran环境配置：VS2022+Intel oneAPI安装全流程指南


> 原文地址: [https://mp.weixin.qq.com/s/b7SYtUtOcZUQix278yWEpQ](https://mp.weixin.qq.com/s/b7SYtUtOcZUQix278yWEpQ)

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
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvmJvibXEib9oiaHQ8YqvjJvMLyia7JicuWAvBxk8ojibiaNZD4wmeBbzkR34Pg/640?wx_fmt=png&from=appmsg)
    
2.  点击VisualStudioSetup.exe，运行安装Visual Studio，工作负荷安装桌面开发、python和C++工作负载（这一项非常重要，记得勾选）。最后记得更改安装位置，需要内存较大，最好不要安装在系统盘。其余按照安装步骤一路安装即可。安装完成后记得==重启电脑==。![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvXX9ickaDvsaHUaDicaIG6yYzQLYIkYo9lJoPYNxcolJ961cdKvn3CEyw/640?wx_fmt=png&from=appmsg)
    
3.  下载Intel oneAPI：https://www.intel.com/content/www/us/en/developer/tools/oneapi/toolkits.html来到下载页面，选择下载Base ToolLKit和HPC Toolkit。![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cv73nlNEkJSye8JjoZMWdfxLxdJ1xZdt6wkR6SNHRgeibibX1BGo1u4B2Q/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvib7zKTbecydpndicrQKE46rfYdVqqzEztVXscvsicF5vIR8ZjZTlrGGeA/640?wx_fmt=png&from=appmsg)4.首先安装Base ToolLKit，再HPC Toolkit（强调：一定要按照这个先后顺序安装）。安装时，选择自定义安装，可以更改安装的选项和位置，最好把安装位置修改到其他盘。![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvqvzXG9YWicZgPk8yo8kOc3pVmwrywZmGCMdHQdAZsFlNhZWUwCSqu8A/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvZiaFhIK05cDDWj5Mzkeu9BpGg2ZsDHjUmyR70HRfumqw2yY7vLPEhZA/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cv2T69WtVWZLhKUU5mjTKARhdLibzT9e4uJ2DibYkZksguatvBUEzVP5Ng/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cv1TyeqFpXl4A1TFwiaYI2qwT0LnAMyQQFfXkUID6A4PsFFbicKJMfiavcQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvw5iczawNH56NiaaFKXWmzM1Mgd41fCAcHzuicOFhpjjR8vs5XSBAD1sbw/640?wx_fmt=png&from=appmsg)到此，Base Toolkit就安装成功了，接下来相同的步骤安装HPC Toolkit，不同的是自定义安装的位置不需要再修改了，因为有一部分base Toolkit的插件已经在上一阶段安装了。其余步骤不再赘述。![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvYibJEPt5QsKMl8CibUHQlG5MC8QeUEJajOZwx3N2IvA2CoUGwKUm8WCA/640?wx_fmt=png&from=appmsg)5，安装完成后，点击Go to Installed Products，可以看到两个工具都已经成功安装。至此，安装结束。![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvODRALDHbIG6YXg0Jcz9NqPycSFVez4wGNAn5kpHwWFfmA9jB46UkgQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cviaJtYqAJULXMROpbg2x2NLXnxOrA4zqQickOxMtB2NcRtRyLZng7kNIg/640?wx_fmt=png&from=appmsg)
    

# 新建Fortran项目

1.  打开Visual Studio 2022，选择创建新项目，选择fortran语言，点击Main Program Code，配置新项目的名称和存放位置，勾选解决方案和项目在同一目录。![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvP0NkSX6HouZgpaNCGo19N3ibYN6GBoPqRuCh0XfrqGJy6xSfUIr2miaQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvVmcOiaNkuLnaGNAqucSqAR62cNe7jamjXLibfHr7oII61gSCm9ZbVEbA/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvp9r8OUdIw5bQW0V3nRr4e50WUKlr5MjicUNVLP5MYwfH4FVjwfvUEiaQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cv2wKzO74cTdYFVFkrDlhYaBpujwqQod3obV1dOwke1eugmibu7FV89ug/640?wx_fmt=png&from=appmsg)
    
2.  此时已经成功新建一个项目，代码可以在左侧解决方案管理器的Source Files文件夹内找到，文件格式为.f90。左侧红色和绿色按钮分别代表调试和执行。我们分别进行调试和执行后，可以看到输出了Hello World，代表代码运行成功。![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cv8xqBic1wfZxER2DylG8urmyhjELN0udMnL7wrbNgibRk484sEEoLJnkQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cv5iaqdJhIqbAPLI6G9JqeJdIiaMVMBRjK0eRAaJFoD3rK8BsGe8v1cBnQ/640?wx_fmt=png&from=appmsg)
    

# 再次新建或打开项目文件

1.  文件--新建--项目可以再次新建另一个项目文件![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvDNDX5f1aLoGoZM0FDtoMcv74SWv9LeSVOSPCDYHdNXjXFb5rNV439Q/640?wx_fmt=png&from=appmsg)
    
2.  打开一个项目文件：文件--打开--项目或解决方案--选择.sln或vfproj文件都可以打开该项目![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvP7jMdLBoFnaHESFsjfo6piciah5UoRuym2UuHzm2K5gkH31W054fE97w/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/EhY9MoCDAeqndbowIQEkyK1x6gmum0cvnicd0DPhXR8cgSPSgKYqiay4dfjQxfLPHMgFWmJvAdpa83Ticjv6QRZ1g/640?wx_fmt=png&from=appmsg)