# Digital series-Storage-3：并行Nor Flash


> 原文地址: [https://mp.weixin.qq.com/s/kQH9U3kBCazysCpuKevF9A](https://mp.weixin.qq.com/s/kQH9U3kBCazysCpuKevF9A)

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_3_并行Nor_Flash_images\img_000_869fa41d1afa.png)

____**★★★**______Storage-3---并行Nor Flash______**★★★**____

## ______€1.____________特征属性______

并行（ISA）Nor Flash有5V、3V和1.8V三种不同的供电体系，容量从2Mb-1Gb，具有x8、x16可选配置的引导和统一扇区架构。Parallel Nor Flash具有高性能、低功耗、高耐久性、高可靠性的特点。

部分Parallel Nor Flash提供性能增强的产品，支持突发模式和地址数据多路复用（AD Mux）使得具有更快的有效编程和读取时间，更加适合要求更高密度、更好性能和更低功耗的应用程序的需求。

## ______€2.____________结构______

Parallel Nor Flash已经很接近DDR了，它有单Bank和多Bank体系，其中多Bank体系结构可以实现同时读写功能，更快的有效编程和突发读取时间，非常适合要求高性能和低功耗的应用。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_3_并行Nor_Flash_images\img_001_d1a51e73a965.png)

**_图3-1：Parallel Nor Flash的典型结构_**

## ______€3.____________接口______

Parallel Nor Flash数据和地址接口遵循JEDC规范，读写接口在引导和统一扇区架构中提供，配置为x8、x16。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_3_并行Nor_Flash_images\img_002_8ded355dd724.png)

**_图3-2：Parallel Nor Flash的简图和基本引脚定义_**

不同的品牌的并行Nor Flash，数据线位宽没有区别，但是地址线的数量受容量和内部结构的影响，会有一些差异，设计时不能按照标准品来进行使用。

## ______€4.____________传输速度和容量______

Parallel Nor Flash的传输速度评估和串行不太一样，串行一般使用时钟频率，吞吐量，但Parallel Nor Flash的定位已经不再是纯粹的静态存储器件，而是需要运行程序。所以Parallel Nor Flash使用写入速度（ns）和读取速度（ns）来评估，转换吞吐量需要使用页面容量×访问时间来获得。（传送门：[Digital series-Storage-1：什么是串行Nor Flash？](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491526&idx=1&sn=c8fdee50014ddf126a8c95f473032692&chksm=c3355559f442dc4fdf22663fa5b4491616b245cab4a77dcf7571c58e4227562d9c93b9284405&scene=21#wechat_redirect)）

## ______€5.____________MCP______

MCP，即Multi Chip Package，多芯片封装，将多种存储芯片封装成一个芯片，体积小节约PCB空间，简化电路设计。MCP解决方案组合为嵌入式和无线应用程序的使用提供了灵活的选择和快速的上市优势，凭借较小的占地面积和向后兼容的引脚，客户可以选择不同的密度来满足其经济高效的解决方案。如**_图3-3_**和**_图3-4_**基于Flash的MCP方案有两种：Parallel Nor-Based MCP--->Parallel Nor Flash + Pseudo Static RAM (pSRAM)和Nand-Based MCP--->SLC Nand Flash and LPDDR2。

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_3_并行Nor_Flash_images\img_003_4998a052fafc.png)

**_图3-3：Parallel Nor Flash + Pseudo Static RAM的MCP_**

![](D:\电脑文件\公众号知识库\电工理论与新技术\Digital_series_Storage_3_并行Nor_Flash_images\img_004_fa0b5f446333.png)

**_图3-4：SLC Nand Flash and LPDDR2的MCP（NAND x16+LPDDR x32）_**

**_图3-4_**也支持Nand x8+LPDDR x32，Nand x8+LPDDR x16，Nand x16+LPDDR x16多种配置。对MCP的理解，可以认为是两枚独立的芯片叠封在一起，但调试和使用则需要作为一个系统来进行。实际上Parallel Nor Flash的市场越来越小，它的多数使用场景逐渐被串行Nor Flash（吞吐量大，引脚数少，调试便捷）取代，优势越来越不明显。

最后补充一点上节Serial Nor Flash，SOC选用Serial Nor Flash的考虑点之一是将Boot启动程序放置于Serial Nor Flash中，这样SOC直接从Serial Nor Flash启动就会很快。而从eMMC启动，SOC需要先将Boot程序搬运（拷贝）到DDR上，然后SOC在DDR上运行Boot程序，整个系统才开始运行。选择哪种启动介质，这个取决于系统的大小、Boot程序的复杂度、启动时间要求和成本考虑。（传送门：[Digital series-Storage-2：什么是串行Nor Flash-2](http://mp.weixin.qq.com/s?__biz=Mzk0MzQzMTY2NA==&mid=2247491627&idx=1&sn=4777a767a7c7ed30a55600136abe0e7f&chksm=c336aab4f44123a28fd597bc97d09df35e8a3b5cdb89cbd5817f1e20778352296f34e6a3f56f&scene=21#wechat_redirect)）