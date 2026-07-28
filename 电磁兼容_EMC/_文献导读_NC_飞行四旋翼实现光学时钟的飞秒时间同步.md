# 【文献导读】NC：飞行四旋翼实现光学时钟的飞秒时间同步


> 原文地址: [https://mp.weixin.qq.com/s/TkcvmbIwbB9rzDOMmm\_uCg](https://mp.weixin.qq.com/s/TkcvmbIwbB9rzDOMmm_uCg)

**论文信息**

题目：

Femtosecond time synchronization of optical clocks off of a ﬂying quadcopter

作者：

Hugo Bergeron, Laura C. Sinclair, William C. Swann, Isaac Khader, Kevin C. Cossel, Michael Cermak, Jean-Daniel Deschênes & Nathan R. Newbury

单位：

1\. National Institute of Standards and Technology, 325 Broadway, Boulder, CO 80305, USA.

2\. Université Laval, 2325 Rue de l’Université, Québec, QC G1V 0A6, Canada.

出版信息：Nature Communications, 10, 1819 (2019), DOI: 10.1038/s41467-019-09768-9

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaUHlEYibAG4OR4h2Cib0b02fCmPFN46TvtdN0iavicKWrlgZfxEHoHLIOKPqhSBraw9SFQvvaRiaK1rF5w/640?wx_fmt=png&from=appmsg)

**论文摘要**

未来的光学时钟网络将需要飞行时钟之间进行自由空间光学时频传递。然而，由于与强时变链路距离相关的飞行时间变化和多普勒频移存在，简单的单向或标准双向时间传递将完全失效。本文展示了一种先进的基于光频梳的光学双向时频传递（O-TWTFT）技术，可以成功地同步通过时变湍流空气路径连接的两个站点的光学时标。两站点间的链路通过扫描延迟线或四旋翼飞行器搭载的逆向反射器建立，其中飞行器运动速度最高可达24 m/s。尽管飞行时间互易性存在50 ps的偏差，两个站点的时标仍能实现<1 fs的时间偏差的同步。在存在10的-7次方量级多普勒频移的情况下，对应站点的频率一致性仍可达约10的-18次方。这项工作表明，基于光学频率梳的O-TWTFT技术能够为机载或星载光学时钟构建自由空间光学网络，为精密导航、时间同步及基础科学探测提供支撑。

**图文导读**

光学钟网络有望推动精密导航、时间分发、相干传感、相对论实验、暗物质搜寻及其他领域的发展。这类网络需要通过对移动的机载或星载时钟之间建立自由空间光链路，实现时钟比对与同步。然而，现有的基于光频梳的光学双向时频传递（O-TWTFT）技术无法在运动条件下实现飞秒级时钟同步。论文旨在解决以下时钟偏移问题：

(1) 光程非互易性（由节点间存在相对速度导致的）引入的时间同步误差；

(2) 由多普勒效应产生的频偏而引入的时间同步误差；

(3) 空气湍流引入的时间同步误差。

_**![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaUHlEYibAG4OR4h2Cib0b02fCNjSLV9KMwhibK6Evy9lOHKBHANhgv2C8v1r9l74Upc7XllstauZK7BA/640?wx_fmt=png&from=appmsg)**_

图1. 基于移动平台的O-TWTFT验证实验配置。(a)两套光学时标通过折叠光路与搭载于四旋翼飞行器的移动反射器实现同步。光信号在两个地点（A和B，都在屋顶实验室）之间做偏振复用处理后，用跟踪望远镜向空中引导。(b)主站点A的架构示意图：包含重复频率为的光频梳A、重复频率为的传递光频梳X、腔稳激光器、支持光通信的相位调制分布式反馈（DFB）激光器以及数字信号处理器。远端站点B除仅配置远程光频梳B外，其余结构相同。此外，站点B的数字信号处理器通过反馈信号，控制光频梳B以实现两站同步。其中，灰色线：光纤；灰色椭圆：50:50耦合器；蓝色椭圆：波分复用器；D：平衡光电探测器；黑色虚线：射频信号。(c)补充影片1中的图像。实时输出系统启动后的计算时间、往返传播距离、闭合速度以及链路状态。(d)额外实验装置：用来在0-4公里自由空间里，将两个站点和一个固定反射器同步。装置中配有扫描延迟线，专门模拟高速接近的效果（细节看插图）。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaUHlEYibAG4OR4h2Cib0b02fCiap3sr5VMQwSKt4uRlhTgmM90jhBGpejqVdmGdoHkJ9YqPBsJROKVEQ/640?wx_fmt=png&from=appmsg)

图2. 采用扫描延迟线实现4公里的同步。(a)飞行时间和接近速度是从O-TWTTT数据里得到的。接近速度的变化范围为0~24m/s。在主动同步时，标准差为1.1fs。所有数据的更新速率都是2.2kHz。(b)放大后的视图。在时钟的时间偏移中，浅蓝色线为整个时间段的情况，黑色线为主动同步时的情况。

![](https://mmbiz.qpic.cn/mmbiz_png/JDrw08nzpiaUHlEYibAG4OR4h2Cib0b02fCCT6Vas6fb5VR2VjmKM59KEgGLJZRpHvQMCYjg0eEnblzu5sdFsIR2Q/640?wx_fmt=png&from=appmsg)

图3. 四旋翼无人机链路的同步结果。图中展示了由环路外验证通道测量的飞行时间（光程）、接近速度以及时钟时间偏移。时钟时间偏移数据分为两类：以~2 kHz更新率记录的主动同步时段（灰色点），以及以10 Hz采样率记录的全时段数据（浅蓝色点）。后者清晰显示了长时间信号衰落期间时钟的漂移现象。在~2 kHz更新率的主动同步状态下，标准偏差为3.7fs。

**论文启示**

该论文展示了一种改进型光频梳双向时频传输技术，可在多种需要高精度时钟同步的运动平台中应用，例如全球导航卫星系统（GNSS）或其他机载移动节点网络。主要性能突破为：

(1) 扫描延迟线实验：在0-24 m/s速度范围内，时间偏差标准偏差为1.1 fs。

(2) 四旋翼无人机实验：在真实运动平台上实现3.7 fs的同步精度。

(3) 鲁棒性：在空气湍流环境下保持稳定同步，适应各种运动条件。

* * *

【本文特别声明】本文中对文献的解读与评述仅为学术探讨，不代表原论文作者及其机构的观点。文中引用的论文插图/图表仅为评论、说明之目的，属于在学术交流中的“合理使用”，其版权均归属于原出版方及原作者所有。我们已尽最大努力标注原始出处。如果您是版权所有者且认为存在侵权，请与我们联系，我们将立即删除。我们强烈建议读者阅读原文以获取最完整准确的信息（可点击左下角“阅读原文”跳转）。\[原文DOI链接：https://doi.org/10.1038/s41467-019-09768-9\]