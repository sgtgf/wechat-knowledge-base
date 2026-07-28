# DDR之内存时序

原创 蜗牛 硬件笔记本 2022-09-16 07:25 四川

> 原文地址: [https://mp.weixin.qq.com/s/QR0a7YRZUaOQjo9PeZso4Q](https://mp.weixin.qq.com/s/QR0a7YRZUaOQjo9PeZso4Q)

  

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

当我们购买内存条的时候，会看到内存条有如下规格11-11-11-28，它代表什么意思呢？

  

它是一种内存时序，指的是内存在处理各种任务时，遇到的固有延迟的一种数值描述。

  

  

**简单讲，就是CPU在向内存索要数据，或者在向内存写入数据的时候，内存要经历一系列的操作，才能把CPU想要的数据给出来或写进去，这一系列的操作所需要花费的时间周期就是内存时序。**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjia01T0iafYeAVUWx9dOapZsic4jer1H484XouBsFU6zpibic98ibIp1lf34qtJVA7Boibs3esQPprya87Hw/640?wx_fmt=png)

  

这四个数值分别表示CL，tRCD，tRP，tRAS，单位ns。这个数值越短，表示延迟越低，内存的性能越好。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhyWAqjMICSws4SpnAgMCJM5HuRUicU48Pgn25BnrqI2lXVdUr0Vo0uVT8btwTzQ5NZYFdYKvF0Tbg/640?wx_fmt=png)

  

其实时序还有很多，只不过这四个参数相对来说比较重要。

  

  

在讲解之前，我们了解一下内存是怎么存取数据的。首先要知道SDRAM(内存颗粒)，DDR就是将这些颗粒集成在一起，然后再加一个控制器。

  

内存在存取数据时，是以行列的方式进行，跟excel表格类似，通过行列方式定位数据，这个表格我们称为逻辑BANK(L-BANK)。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjziaiaY78WBhIwyNy2N9hjy9oM2RhVB5M6CVYBUpTYpKAFfqILLmzzcd0V1Jv8qeBLx2nTVsgic5ia5g/640?wx_fmt=png)

SDRAM内部L-BANK示意图  8X8阵列

  

B：L-BANK（逻辑logic bank）地址编号  

C：column列支持编号  

R：row行地址编号  

  

如果我们要找到BANK中的黄色位置，先指定L-BANK地址B1，然后指定行地址R6，再指定列地址C4，最终就能找到寻址单元。

  

  

谈到BANK，我们顺便了解一下**RANK**这个概念（经常容易搞混，分不清楚）

  

DDR数据存储时，以64bit数据线为例，CPU每次从内存里面读取数据都是一次64bits，而内存颗粒一般没有64bit，大多为4bits，8bits，16bits。为了凑够CPU访问所需的64bits，假设每个颗粒是8bits，就需要8个颗粒并在一起，并在一起的8个颗粒就叫Rank。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhyWAqjMICSws4SpnAgMCJMh7kibCrsRryq8TRl3hBKY8wQJveQFG68Ovnw3RfSu500Q7icsnLZrRTA/640?wx_fmt=png)

  

假设内存芯片基本上是8个L-BANK地址，也就是8个这样的表格。

  

  

在了解数据如何存取后，下面具体看一下这四个参数：

  

**1、tRCD**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhs8jJphWuuibGzqPyLnCHgsEGJCa1EHbYuTjYoKPEtrgkerF79g5pfWbIFlOP5bF7ELfX2nI4WibaQ/640?wx_fmt=png)

内存行地址传输到列地址的延迟时间为**tRCD（RAS to CAS delay）**，因为在行激活命令发出之后，芯片存储阵列电子元件响应需要一定的时间。  

  

简单说，在内存控制器接收到行的指令后，需要等待一定的时间才能访问这一行，这个等待时间就是tRCD。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgPQ8iaIufKUM36iaSicjuRF1PTayf7f0fk5DJQCJ3hAoRS4HibW7oqsK9EWL2ibWI5ibUibeCCZs8pI9G7g/640?wx_fmt=png)

  

tRCD以时钟周期为单位，例：tRCD=2，代表延迟两个时钟周期。

  

这个参数对系统影响不大，因为程序存储数据到内存中是一个持续过程。同一个程序中一般都会在同一行中寻址。

  

  

**2、CL**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhs8jJphWuuibGzqPyLnCHgsZHwyeLFOxz1dwYAzVYboLdXe8QUeHN2ZgryibFUmR4cmENiap1bqSWDg/640?wx_fmt=png)

内存先确定了行，要想找出数据，还需要确定列，这时我们就能准确的找到目标数据。

  

内存确定了行数之后，还需要等待一定的时间才能访问具体列数，这个等待的时间就是**CL**，CL就是列地址访问的延迟时间，是时序中最重要的参数。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhs8jJphWuuibGzqPyLnCHgsxm1W7Lg55OGyJA8Vnz0hmiaViaiczIYNxsg1OyNVYYGNclRPQ3iaR7AZFQ/640?wx_fmt=png)

  

  

关于CL这里必须强调几点：

  

-   CL(CAS Latency，CAS潜伏期)，在频率相同的情况下，CL值越小，内存速度越快。由于CL只在**读取**时出现，所以CL又被称为读取潜伏期。
    

  

-   CL的值随着内存频率的增加而增大。
    

  

-   CL数值也以时钟周期数表示，因此必须知道内存的频率才可以知道CL延迟的具体时间，比较才会更有意义，例：  
    

DDR-400内存，CL=2.5，时钟频率为200MHz，实际CL=12.5ns。

DDR2-800内存，CL=5，时钟频率为400MHz，实际也是CL=12.5ns。

二者一样。

  

-   选择购买内存时，最好选择同样CL值的内存，不同速度的内存混插在系统内，会以较慢的那块内存来运行，从而造成资源的浪费。
    

  

  

**3、tRP**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhs8jJphWuuibGzqPyLnCHgsPPPdTIx2kXz4MJ8LQhqFD3UbTauIRKAj5JR49toDBVNo2HIEduwLTg/640?wx_fmt=png)

**tRP（RAS Precharge Time ）**行预充电时间。假如当前寻址的存储单元是B1、R5、C2。如果接下来的寻址命令是B1、R6、C2，由于是同一L-Bank的不同行，那么就必须要先把R5关闭，才能对R6进行寻址。

  

从开始关闭现有的工作行，到可以打开新的工作行之间的间隔就是tRP，单位也是时钟周期数。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhs8jJphWuuibGzqPyLnCHgstXZV4cpvwAvFQYX6TtccIzN2VajCFaiagWeagDPBzBJJfcKiaXiaXSt6w/640?wx_fmt=png)

  

  

**4、**tRAS****

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhs8jJphWuuibGzqPyLnCHgsB0XiaWQQERys87Ns0R48eLCILmsYWUB06MvHz8j0HehAZzzzZicjMIxw/640?wx_fmt=png)

**tRAS**，表示内存行有效至预充电的最短周期 ，可以简单理解成内存写入或读取数据的一个时间，一般接近前三个参数的总和。

  

调整这个参数须要结合具体状况而定，通常咱们最好设在5－10之间。这个参数要根据实际状况而定，并非说越大或越小就越好。

  

若tRAS的周期太长，会影响系统的性能。

若tRAS的周期太短，则可能因缺少足够的时间而没法完成数据传输，容易引起数据丢失或损坏。该值通常设定为CAS latency + tRCD + 2个时钟周期。

  

  

最后简单概况一下：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhs8jJphWuuibGzqPyLnCHgsFw2Oic0ibHnKlSzTfZ82xWpHsNneibSqGKIvAdMhvAkE4Hd525Aw0GWMg/640?wx_fmt=png)

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“**加群**”，管理员拉你入技术交流群。