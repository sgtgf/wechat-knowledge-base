# Fortran文件交互指南：轻松掌握数据读写艺术


> 原文地址: [https://mp.weixin.qq.com/s/TsR\_I9yZ4YqPHTseh-kc6w](https://mp.weixin.qq.com/s/TsR_I9yZ4YqPHTseh-kc6w)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/icVUVTFlBCVWzF5T1NAjeuWJkDK0pWW6RxxXXtgLiaUCZiaIIULiat4jAdIlEfO4SUKImZh46Ik8rP2UkUaksYzKvA/640?wx_fmt=jpeg)

在科学计算领域，Fortran凭借其高效的数值运算能力和悠久的历史，一直是众多研究人员的首选语言之一。今天，让我们一起深入浅出地探索Fortran中的文件交互——如何让程序与外部世界的数据顺畅沟通。

## 1\. 初识Fortran文件系统

想象一下，你的Fortran程序就像是一个勤奋的图书管理员，它不仅要负责整理书架上的书籍（数据），还要能够从仓库（外部文件）取书（读取数据）和放书回仓库（写入数据）。在这个比喻中，Fortran通过“**unit**”这一概念来标识不同的“书架”，每个unit对应一个文件。打开文件就像告诉系统：“我要用这个unit来操作某个具体的文件了。”

## 2\. 打开与关闭：文件操作的门户

在Fortran中，使用`open`命令来打开文件，就像推开图书馆的大门。例如：

`integer :: io   open(newunit=io, file="log.txt")   `

这段代码的意思是：“给我分配一个新的unit编号（储存在变量`io`里），并用它打开名为`log.txt`的文件。”如果这个文件不存在，而且你打算读写，Fortran会贴心地为你创建它。

完成工作后，记得用`close`命令关闭文件，好比离开图书馆时关上门：

`close(io)   `

这一步非常重要，它确保所有数据正确写入磁盘，并释放系统资源。

## 3\. 读取文件：倾听数据的声音

当你需要从文件中获取数据时，首先确保以正确的模式打开文件。比如，想要读取一个已存在的文件，应该这样操作：

`open(newunit=io, file="data.txt", &     status="old", action="read")   `

这里的`status="old"`告诉Fortran这个文件应该是旧的（已经存在），而`action="read"`表明我们只是想读取它。接下来，你可以使用`read`命令来获取数据：

`real :: temperature   read(io, *) temperature   `

这段代码意味着从当前的unit（即我们刚打开的文件）读取一个实数到变量`temperature`中。

## 4\. 写入文件：记录你的计算之旅

写入文件是记录计算结果或日志的重要步骤。创建新文件时，可以这样做：

`open(newunit=io, file="results.out", &     status="new", action="write")   write(io, *) "Today's result:", result_value   `

如果你希望在现有文件末尾追加数据而不是覆盖，只需调整`status`和`position`：

`open(newunit=io, file="log.txt", status="old", &     action="write", position="append")   write(io, *) "New log entry added."   `

这样，每次执行写入操作时，都会在文件末尾添加新的内容，而不是覆盖原有的数据。

## 5\. 安全起见：先检查，后行动

在尝试读取或替换文件之前，检查文件是否存在是个好习惯。利用`inquire`函数，我们可以做到这一点：

`logical :: exists   inquire(file="important_data.dat", exist=exists)   if (exists) then     ! 文件存在，可以安全操作   else     ! 文件不存在，处理这种情况   end if   `

或者，直接在`open`调用中使用`iostat`和`iomsg`来捕获可能的错误：

`integer :: io, stat   character(len=512) :: msg   open(newunit=io, file="file_maybe_not_there.txt",&     status="old", action="read", iostat=stat, iomsg=msg)   if (stat /= 0) then     print *, "Error opening file:", trim(msg)   end if   `

## 6\. 文件操作进阶：定位与管理

有时，你可能需要在文件中移动指针，比如回到文件开头重新读取数据，或在写入后立即修改前一行。这时，`rewind`和`backspace`命令就派上用场了：

-   `rewind(io)`使文件指针回到文件的开头。
    
-   `backspace(io)`则是将指针移回至上一行。
    

此外，如果你临时需要一个内存中的文件来暂存数据，可以使用`status="scratch"`：

`open(newunit=io, file="temp_scratch", &     status="scratch", action="write")   write(io, *) "Temporary data storage."   close(io) ! 关闭时，此文件会被自动删除   `

## 7\. 优雅的告别：删除文件

如果想要删除文件，可以先打开再关闭，并指定`status="delete"`：

`logical :: exists   integer :: io, stat   inquire(file="obsolete_file.txt", exist=exists)   if (exists) then     open(file="obsolete_file.txt", newunit=io, iostat=stat)     if (stat == 0) close(io, status="delete", iostat=stat)   end if   `

为了确保操作的安全性，一定要确认好文件名，避免误删其他重要文件。

## 小结

通过以上介绍，相信你已经掌握了Fortran中文件交互的基本技巧。无论是数据记录、分析还是结果分享，灵活运用这些工具都将使你的程序更加健壮和高效。记住，每一次与文件的互动，都是你与数据世界的对话，保持清晰、准确和高效，你的Fortran之旅定会更加精彩。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icVUVTFlBCVVKPaBk6IMGvUnuicNQJxIo3KEorLicIia2iclYzr6GQ6yLEomn1XIT3VHvMZ7wpNMJicuH41Dib23myUwQ/640?wx_fmt=png&from=appmsg)

**FEtch 系统**是笔者团队开发的新一代有限元软件开发平台。只需按照有限元语言格式填写脚本文件，即可在线自动生成基于**现代 Fortran** 的有限元计算程序，从而大幅提高 CAE 软件的开发效率。欢迎私信交流。

有任何疑问或建议，欢迎加Q群 "**FEtch有限元开发系统(519166061)**" 留言讨论。我们长期开展 FEtch 系统的试用活动，感兴趣的朋友入群后可直接联系管理员，免费获取**许可证文件**。