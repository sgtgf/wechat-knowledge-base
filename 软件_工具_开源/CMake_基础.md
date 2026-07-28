很遗憾直到现在才开始接触cmake，过去都在微软的vs IDE上编写c++程序，即使引用第三方的库直接使用cmake也能编译成功，很少关注它本身的内容。但是现在我有一项工作的内容就是将在Windows平台上的c++程序移植到Linux平台上。我想选择cmake作为支持跨平台的构建工具。因此提前学了点cmake的基础知识。

cmake本身并不能直接编译和链接程序，它是一个构建程序。主要作用就是根据cmake脚本来生成Makefile文件，以供nmake、gun make等工具来生成可执行程序。

# 编译exe

## 简单的hello world

使用cmake需要提供一个`CMakeLists.txt` 的脚本文件，这个名称是固定的，位置一般在项目的根目录。假设现在有一个简单的hello world程序，它的项目目录可能如下

`v1   ├── CMakeLists.txt   ├── main.cpp   `

我们可以使用如下cmake脚本

`cmake_minimum_required(VERSION 3.15)   set(CMAKE_CXX_STANDARD 11)   project(test)   add_executable(hello ./main.cpp)   `

第一句的含义是指定使用cmake最小的版本为3.15； 第二句的含义是使用c++ 11标准 第三句的含义是指定项目名称 第四句的含义是生成可执行程序的名称为`hello`，并且指定要编译的源文件是当前目录下的 `main.cpp` 文件。工程中有多个源文件时，`add_executable` 后面可以加多个源文件路径

一般来说cmake脚本都会包含这么几条语句

脚本编写完毕后，需要使用`cmake`命令进行编译。该命令可以接受一个参数用于指定`CMakeLists.txt` 文件所在的路径，执行之后会生成一大堆中间文件和对应的Makefile文件。这些都会生成在当前执行cmake命令时所在路径。所以为了便于管理，一般会在适当位置建立一个新的build目录。这个时候整个命令如下

`mkdir build   cd build   cmake ..   make   `

前面我们在项目根目录下新建一个build目录用于保存中间文件，然后切换到build目录中。接着执行cmake命令并给出对应`CMakeLists.txt` 所在的路径。执行成功后会在build目录中生成一个`Makefile`文件，最后就是执行make命令来生成可执行程序

这样最简单的一个hello world工程就编译完成了。

## 指定可执行程序的路径

生成的可执行文件路径就在当前的build目录下，如果我们要指定可执行程序的路径，可以使用变量 `EXECUTABLE_OUTPUT_PATH`。它是cmake内置的变量，保存的是可执行程序输出的路径。在cmake中可以使用set来给变量赋值。到此我们的cmake脚本可能是这样的

`cmake_minimum_required(VERSION 3.15)   set(CMAKE_CXX_STANDARD 11)   project(test)   set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)   add_executable(hello ./main.cpp)   `

这里涉及到cmake中变量的定义和使用。其实cmake中变量特别简单，cmake中的变量全都是字符串，定义和设置变量值都是用`set` 操作符。而要取变量的值则使用 `${}` 来包住一个变量名。另外cmake使用 `EXECUTABLE_OUTPUT_PATH` 作为可执行程序的输出路径，这里我们设置输出路径为工程目录下的bin目录下面。这里的 `PROJECT_SOURCE_DIR` 表示的是当前项目的目录

## 指定头文件所在路径

这里我们来一个复杂一点的项目作为演示，这个项目的目录结构如下

`.   ├── include   │   └── calc.h   └── src       ├── add.cpp       ├── div.cpp       ├── main.cpp       ├── mul.cpp       └── sub.cpp   `

这种工程中，include目录放头文件，src目录放源文件，calc.h 中定义了4个函数分别实现加减乘除四则运算。它们的实现分别在 add.cpp、sub.cpp、mul.cpp、div.cpp 中，而main.cpp主要负责调用这些函数实现。main.cpp 的代码如下

`#include <stdio.h>   #include "calc.h"      int main (int argc, char *argv[]) {       int a = 30;       int b = 10;       printf("a + b = %d\n", add(a, b));       printf("a - b = %d\n", sub(a, b));       printf("a * b = %d\n", mul(a, b));       printf("a / b = %d\n", div(a, b));       return 0;   }   `

这里我们要解决一个问题，因为main.cpp在src中，而 calc.h在include目录中，它们并不在同一目录下，代码中直接引用它会提示找不到对应的头文件。我们当然可以写出 `include "../include/calc.h"` 来修正它，但是项目中文件多了，不同路径的源文件要写这种相对路径就是一种折磨了。一般的经验是给出头文件的路径，后面所有源文件都根据这个路劲来组织包含头文件的相对路径。这里我们需要指定include作为头文件的路径。cmake中使用 `include_directories` 来指定头文件路径，它可以接受多个目录表示可以从这些目录中去查找头文件。

所以这个项目的cmake文件可以这么写

`cmake_minimum_required(VERSION 3.15)   set(CMAKE_CXX_STANDARD 11)   project(test)   set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)   include_directories(${PROJECT_SOURCE_DIR}/include)   add_executable(hello ./src/add.cpp ./src/sub.cpp ./src/mul.cpp ./src/div.cpp ./src/main.cpp)   `

## 遍历目录中的源文件

上面的示例中我们发现 `add_executable` 后面加了好多cpp文件，这个项目比较小只有这么几个文件，如果一个项目有几百个源文件，并且每个源文件都在不同的目录，我们把每个源文件都这样一个个的写出来，不知道要写到什么时候呢。是否有办法能一次获取目录中的所有cpp文件，并保存在一个变量中，在需要指定源文件的场合直接使用这个变量，这样就简单很多了。

cmake中当然有这个方法，它提供了两种方式来实现这个需求。

第一种方式是使用 `aux_source_directory`。它接受一个目录，将指定目录中的所有源文件以list的形式放入到指定变量中，使用它可以将之前的cmake文件改写成下列形式

`cmake_minimum_required(VERSION 3.15)   set(CMAKE_CXX_STANDARD 11)   project(test)   set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)   aux_source_directory(${PROJECT_SOURCE_DIR}/src SOURCES)   include_directories(${PROJECT_SOURCE_DIR}/include)   add_executable(hello ${SOURCES})   `

这里我们遍历src目录中的所有源文件，将结果放入到变量SOURCES中。最后在add\_executable中将这个结果传入，作为源文件参与最后的编译。

第二种方式是可以使用`file`函数，它能遍历指定目录中的指定文件，并且将结果返回到对应参数中，它的使用方式如下

`file(<GLOB|GLOB_RECURSE> <variable> [LIST_DIRECTORIES])   `

第一个参数是 `GLOB` 或者是 `GLOB_RECURSE`。后者表示递归遍历所有子目录中的文件。 第二个参数是变量，最后会将遍历的结果放入到这个变量中。第三个参数是一个可选的，它表示筛选条件，可以填入多个条件。我们可以将上面的`aux_source_directories` 替换成 `file`，写成如下形式

`file(GLOB_RECURSE SOURCES ${PROJECT_SOURCE_DIR}/src/*.cpp)   `

# 编译静态库和动态库

我们再来修改一下这个工程。我们将四则运算的操作独立出来编译为一个静态库，然后在另一个工程中链接这个库并调用这些函数。这个时候可以这么组织工程，在上一个工程的基础上删除`main.cpp` 就可以了。 编译静态库可以使用 `add_library` 操作符，它用来生成库文件。它可以编译动态库或者静态库。第一个参数是库的名称，最终会生成一个名称为 `libname.a` 或者 `libname.so` 的文件，其中name是我们指定的第一个参数；第二个参数是`STATIC` 或者 `SHARED` 分别是编译静态库和动态库。第三个参数是编译时需要参与便于的代码源文件。 所以我们的`CMakeLists.txt` 文件可以这样写

`cmake_minimum_required(VERSION 3.15)   set(CMAKE_CXX_STANDARD 11)   project(test)   set(LIBRARY_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)   file(GLOB_RECURSE SOURCES ${PROJECT_SOURCE_DIR}/src/*.cpp)   include_directories(${PROJECT_SOURCE_DIR}/include)      # 编译动态库   # add_library(mylib SHARED ${SOURCES})   # 编译静态库   add_library(mylib STATIC ${SOURCES})   `

上面的配置中，使用 `LIBRARY_OUTPUT_PATH` 来指定库文件生成的路径，最终会在bin目录下生成一个名为 `libmylib.so` 或者 `libmylib.a` 的库文件

# 链接静态库和动态库

上面我们编译生成了静态库和动态库，该如何在工程中引用它们呢？ 引用动态库或者静态库可以使用 `target_link_libraries`。它可以链接静态库或者动态库。在指定要链接的库名称为`name` 之后，它默认会优先从用户指定的位置查找名为 `libname.a` 或者 `libname.so` 的库，如果用户未指定位置或者在指定位置未找到对应的库，那么它会到系统库中查找，都找不到则会报错。我们可以通过 `link_directories` 来指定库文件的路径，下面是一个示例

`cmake_minimum_required(VERSION 3.15)   set(CMAKE_CXX_STANDARD 11)   project(test)   include_directories(${PROJECT_SOURCE_DIR}/include)      set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)   link_directories(${PROJECT_SOURCE_DIR}/lib)      add_executable(hello ${PROJECT_SOURCE_DIR}/main.cpp)   target_link_libraries(hello       mylib   )   `

`target_link_library` 需要放到 `add_executable` 或者 `add_library` 之后，它的第一个参数就是我们在 `add_executable` 或者 `add_library` 中给定的生成程序的名称。

# 添加编译宏

一般来说，在代码中对于debug版本会额外的输出一些日志信息用于调试，或者根据不同版本来调整某个数据结构的定义，例如

`#ifdef X64   typedef unsigned long long ULONG_PTR   #else   typedef unsigned long ULONG_PTR   `

VS 中可以通过预处理器来指定编译时的宏，而GCC 可以通过-D 来指定宏。

cmake中也类似，它可以通过 `add_compile_definies` 来指定宏。它传入的参数于GCC定义宏类似，以`-D`开头后面跟宏的名称，例如要定义名为 `_DEBUG` 的宏，可以写成 `-D_DEBUG`。定义宏后面还可以使用 `=` 来指定宏的值。下面是一个具体的例子

`#include <stdio.h>      int main (int argc, char *argv[]) {   #ifdef _DEBUG       printf("this is debug version\n");   #endif       printf("the app version is %s\n", VERSION);       return 0;   }   `

`cmake_minimum_required(VERSION 3.15)   set(CMAKE_CXX_STANDARD 11)   project(test)      set(EXECUTABLE_OUTPUT_PATH ${PROJECT_SOURCE_DIR}/bin)      add_compile_definitions(       -D_DEBUG       -DVERSION="1.0.1")      add_executable(hello ${PROJECT_SOURCE_DIR}/main.cpp)   `

# 多个工程嵌套

一般在项目中，可能有多个子项目，例如一个web商场可能有前后端之分。在cmake中项目有子工程的话，将各个子工程放到主工程的子目录下，然后使用 `add_subdirectory` 将各个子项目连接起来。

下面是一个具体的例子

`.   ├── calc   │   ├── add.cpp   │   ├── CMakeLists.txt   │   ├── div.cpp   │   ├── mult.cpp   │   └── sub.cpp   ├── CMakeLists.txt   ├── include   │   ├── calc.h   │   └── sort.h   ├── sort   │   ├── CMakeLists.txt   │   ├── insert_sort.cpp   │   └── select_sort.cpp   ├── test_calc   │   ├── CMakeLists.txt   │   └── main.cpp   └── test_sort       ├── CMakeLists.txt       └── main.cpp   `

上述项目有4个子工程，分别是四则运算的`calc` 、排序算法的 `sort`。以及对应的测试用例`test_calc` 和 `test_sort`。算法编译成静态库，测试工程直接链接对应的静态库。

基于以上布局，我们在主工程的 `CMakeLists.txt` 可以这么写

`cmake_minimum_required(VERSION 3.15)   project(test)      # 定义变量   # 静态库生成路径   set(LIBPATH ${PROJECT_SOURCE_DIR}/lib)   # 可执行程序的存储目录   set(EXECPATH ${PROJECT_SOURCE_DIR}/bin)   # 头文件路径   set(HEADPATH ${PROJECT_SOURCE_DIR}/include)   # calc库名称   set(CALCLIB calc)   # sort 库名称   set(SORTLIB sort)      # 测试程序的名字   set(CALCAPP test_calc)   set(SORTAPP test_sort)      # 添加子目录   add_subdirectory(sort)   add_subdirectory(calc)   add_subdirectory(test_calc)   add_subdirectory(test_sort)   `

在这个文件我们定义了一些其他工程都会用到的一些配置，例如包含的头文件路径、生成程序的路径。以及项目中包含的子项目。在最外层定义的变量可以直接在子工程的`cmake` 配置文件中使用。这里有点像派生类可以使用基类定义的变量。

在`calc` 子工程中，可以这么配置

`cmake_minimum_required(VERSION 3.15)   project(calc)      # 指定要编译的源文件   aux_source_directory(./ SOURCES)   # 指定头文件的路径   include_directories(${HEADPATH})   # 指定生成库的路径   set(LIBRARY_OUTPUT_PATH ${LIBPATH})   # 指定生成库的名称   add_library(${CALCLIB} STATIC ${SOURCES})   `

`calc` 子工程使用根目录工程中定义的变量指定了生成库的路径、库名称。并且直接定义编译成静态库

在`test_calc` 这个测试程序中，可以这么配置

`cmake_minimum_required(VERSION 3.15)   project(test_calc)      # 指定头文件的路径   include_directories(${HEADPATH})   # 指定生成exe的路径   set(EXECUTABLE_OUTPUT_PATH ${EXECPATH})   # 指定库文件的目录   link_directories(${LIBPATH})   # 生成可执行文件名称   add_executable(${CALCAPP} ./main.cpp)      target_link_libraries(       ${CALCAPP}       ${CALCLIB}   )   `

在测试工程中使用父工程中定义的变量指定了生成程序的路径以及链接库的路径。

其他的工程与上面两个子工程的配置类似，只需要改一些变量。就可以运行了。

至此, 已经介绍完了使用cmake配置工程的一些基本配置。我们几乎可以将VS 中的项目配置一比一的使用上述内容使用cmake复刻一遍。至于跨平台的配置，无外乎是一些常见的标志判断，根据条件设置变量即可。后续如果我还有好的cmake使用实践也会分享出来。