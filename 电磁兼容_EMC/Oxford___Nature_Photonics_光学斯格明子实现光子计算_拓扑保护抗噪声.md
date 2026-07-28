# Oxford | Nature Photonics：光学斯格明子实现光子计算：拓扑保护抗噪声


> 原文地址: [https://mp.weixin.qq.com/s/JDecCdRkEBK\_l1fx9R810A](https://mp.weixin.qq.com/s/JDecCdRkEBK_l1fx9R810A)

  

All-Q

2025.10

**论文快讯**

**NEWS**

![](https://mmbiz.qpic.cn/mmbiz_png/u4tC0Vm8LdBeicBklXcG6icTN5UdjONEYAqgxaPWOSkVSCCbE2r6K81SbaTDCe4aCn8icPBHBvg2YKUg30jXrapiaQ/640?wx_fmt=png&from=appmsg)

  

随着 AI 对高带宽、低功耗计算的需求激增，光子计算因光速快、能耗低的优势成为热门方向，但它有个致命缺点：现有方案大多是模拟式的。这意味着，计算过程中很容易受到噪声干扰 —— 比如马赫 - 曾德尔干涉仪网格里的随机相位误差、微环谐振器权重库的热串扰，都会让信号信噪比下降。

研究团队发现，“光学斯格明子” 能完美解决这些问题。它是一种特殊的光场，带着 “离散的拓扑数”—— 就像给模拟光场贴了 “数字标签”，能直接对接数字计算；更重要的是，它天生抗扰动，外界干扰很难改变它的拓扑数；而且它的 “空间变化偏振” 是个没被充分利用的维度，能和光的振幅、相位、波长互补，大幅提升信息密度，一个局域光场就能存下任意大的整数。

![](https://mmbiz.qpic.cn/mmbiz_png/u4tC0Vm8LdBeicBklXcG6icTN5UdjONEYAT3oB6iaicUwwVaOic7zxAZOSq6CyXShcVFkia0VZ7FFib6Gpppc1efLOvbQ/640?wx_fmt=png&from=appmsg)

## 用被动材料让斯格明子 “算算术”

1.  **关键工具：被动结构化材料**研究的核心是设计了一类 “被动结构化材料”—— 不需要外部能量输入，就能让光学斯格明子的拓扑数实现 “加减运算”。这类材料的实现方式特别多，比如用空间光调制器（SLM）级联、超表面、液晶喷墨打印，甚至是在二氧化硅里用激光写出双折射结构，这意味着未来很容易做成微型芯片。
    
2.  **抗扰的秘密：只看边界，不管内部**最神奇的是，这种材料的运算功能只由 “边界结构” 决定，和内部参数无关 —— 只要材料内部参数是连续的，哪怕内部有延迟量波动、各向异性吸收，都不会影响运算结果。这就像盖房子，只要地基（边界）稳，房子内部的小瑕疵（内部扰动）完全不影响整体结构，大大降低了制造难度。
    

![](https://mmbiz.qpic.cn/mmbiz_png/u4tC0Vm8LdBeicBklXcG6icTN5UdjONEYAckcwQzlwHiarbaiciau5chIgJCPyicX3GSfAON1xB4HNBjU1s5AA70ZRjw/640?wx_fmt=png&from=appmsg)

## 两大 “加法器”：从常规到广义的突破

研究团队设计了两种斯格明子加法器，从 “单一运算” 升级到 “多任务并行”，还都做了实验验证。

### （一）常规加法器：精准控制单一运算

1.  **怎么算？看偏振态 “指挥”**这种加法器的运算结果由输入光场的 “边界偏振态” 决定：如果输入光的边界是右旋圆偏振（RCP），拓扑数就会加 k；如果是左旋圆偏振（LCP），就会减 k（k 是材料边界延迟器的半转次数）。
    
2.  **实验说话：再差的材料也能算准**
    

-   团队用 “梯度折射率系统” 做了 2 阶加法器，给拓扑数从 - 3 到 3 的斯格明子做 “±2” 运算，哪怕用的是 “质检不合格、轴分布不对称” 的材料，结果依然准确；
    
-   他们还用水 “3 个 SLM 级联” 模拟有扰动的材料 —— 给 SLM 像素加随机电压噪声，哪怕噪声强度远超实际场景，斯格明子的拓扑数还是稳如泰山，抗扰能力直接拉满。
    

4.  **级联小技巧：加个 “半波片” 就行**单个加法器会翻转输出光的边界偏振态（RCP 变 LCP，LCP 变 RCP），只要在加法器后面或前面加一片 “半波片” 调整偏振态，就能把多个加法器连起来，实现更复杂的运算。
    

### （二）广义加法器：一次能算好几道题

1.  **升级理由：解决常规加法器的 “小脾气”**常规加法器对输入边界的偏振态太敏感，而且一次只能算一个整数。研究团队引入 “广义斯格明子数”—— 基于庞加莱球的连通分量推导出来的，一下子解决了这两个问题：不仅对偏振态波动、材料边界扰动更不敏感，还能 “一心多用”，一次同时做多个整数加减运算。
    
2.  **实验验证：噪声再大也不怕**团队用 3 个 SLM 级联做广义加法器，给 SLM 加 “全域随机噪声”（连边界都有噪声），还测试了不同输入偏振态。结果显示：不管噪声多强，广义斯格明子数都稳定；而且同一材料能对不同偏振态区域分别做 “加、减、同时加减”，灵活性直接拉满。
    

![](https://mmbiz.qpic.cn/mmbiz_png/u4tC0Vm8LdBeicBklXcG6icTN5UdjONEYA6pzsiajvp9G41hM8jMGHkVJwyvnx1l3PCpP9mQeH0Hry4AUv7O0rAdg/640?wx_fmt=png&from=appmsg)

## 待解的难题：离实用还有几步？

虽然研究成果亮眼，但要让光学斯格明子计算真正落地，还有几个难题要解决：

1.  **检测麻烦**
    
    ：广义斯格明子数很难从常规的偏振测量中快速提取，需要优化检测方法；
    
2.  **级联不易**
    
    ：广义加法器不能直接连起来用，得设计额外结构（比如用消光比渐变的衰减器把广义斯格明子转回常规的）才能级联；
    
3.  **芯片集成难**
    
    ：还没搞清楚波导里偏振场的传输规律 —— 怎么让波导支持斯格明子传播、怎么在芯片上传递斯格明子的信息，目前只知道 “短距离（芯片尺度）内斯格明子数能稳住”；
    
4.  **辅助技术缺**
    
    ：斯格明子的高效生成、快速检测技术还不够成熟，需要更灵活的光源和集成化的偏振传感器。
    

![](https://mmbiz.qpic.cn/mmbiz_png/u4tC0Vm8LdBeicBklXcG6icTN5UdjONEYAH3COOPhPmTubnYmnXssrh1A3nYsicNBjaicf3fM7Bl3vfMjxPicMt4vhA/640?wx_fmt=png&from=appmsg)

## 重新定义光子计算

这篇研究的意义远不止 “实现了整数运算”：

1.  **突破瓶颈**
    
    ：第一次把光学斯格明子的 “拓扑特性” 直接用在计算上，给光子计算提供了 “抗扰动、可规模化” 的新框架，解决了模拟光子计算的老难题；
    
2.  **范式创新**
    
    ：斯格明子数是 “任意整数”，打破了传统数字计算的 “二进制限制”—— 未来甚至能用两个斯格明子（或一个广义斯格明子）表示 “有理数”，让数据单位更灵活；
    
3.  **潜力巨大**
    
    ：理论上还能实现乘法（通过调控 Poincaré 球的映射次数）和除法，未来有望构建完整的整数运算体系；而且多种微型制造技术能让加法器变小，结合波分复用、轨道角动量等技术，能大幅提升光子处理器的 TOPS（每秒万亿次运算）性能。
    

  

\--点击底部阅读原文进入论文首页--

  

往期内容：

[崛起！25年国人科学家已在Nature Photonics发表文章63篇，占比超52%：本文详细统计](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484866&idx=1&sn=6add502a4bad0efc7e6fd63b2bf37289&scene=21#wechat_redirect)

[Nature Physics 纠缠光子的生成可以由电子能量来预报：基于自由电子与集成光子波导相互作用](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484668&idx=1&sn=2dbf0a72d4766c1af47f1196783ea510&scene=21#wechat_redirect)

[PRL | 太赫兹带宽的电光调制器：操控单光子级脉冲](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484659&idx=2&sn=861adfb44d193b327b05b0e7016298d7&scene=21#wechat_redirect)

[&lt;世界纪录&gt;IBM Quantum实现了史上最大的薛定谔猫量子态：120个比特的GHZ state](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484574&idx=1&sn=65e0b146d581d2e49acbea9c2c182a96&scene=21#wechat_redirect)

[博后招聘|ASML与荷兰先进光刻研究中心、牛津、香港大学、南洋理工、斯坦福、新加坡国立等](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484496&idx=1&sn=b23c1839977d9b4b8b300e59f7a2e029&scene=21#wechat_redirect)

[复旦大学最新Nature打破芯片壁垒：全球首颗二维硅基混合架构闪存芯片](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484468&idx=1&sn=e0cc42598f9b6cd66605c471c96d606a&scene=21#wechat_redirect)

[arXiv最新快讯-10月2日](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484302&idx=1&sn=eb4e1efa6a62e1c2a7a17f1be4c9c3d9&scene=21#wechat_redirect)

[arXiv.org快讯 | NVIDIA, MIT, Harvard等最新研究成果](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484283&idx=1&sn=07504f6cd4a7b81cf80740cbad6629f8&scene=21#wechat_redirect)

[arXiv.org快讯|MIT, 哥本哈根等最新研究成果](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484260&idx=1&sn=9fa554d2f603a11b20166ca64af040ed&scene=21#wechat_redirect)

[超宽带即插即用光子张量内核封装，损耗低于 1dB](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484260&idx=3&sn=2922769705860587a8d5f67ab44a7adf&scene=21#wechat_redirect)

[加州理工: 通过很少的单量子比特测量来认证几乎所有量子态](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484037&idx=3&sn=516845cc5ade930b26948b99b4ae993e&scene=21#wechat_redirect)

[西班牙ICFO：通过莫尔超晶格中的负差导率实现单光子检测发表于SCIENCE](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484164&idx=2&sn=7905f5bde1c914606d6ad78b5d90137a&scene=21#wechat_redirect)

[哈佛Lukin组：用于通用量子计算的低开销横向容错](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484142&idx=2&sn=363b7c6f2fb63f8af787b6482e660c68&scene=21#wechat_redirect)

[多模压缩态实现单模式量子增强多参数传感](https://mp.weixin.qq.com/s?__biz=MzIzNzg4OTEzNg==&mid=2247484142&idx=3&sn=aae7aa154b12c17dc404056a6f9de871&scene=21#wechat_redirect)

  

**END**

免责声明：本公众号发布的所有内容，包括但不限于文字、图片、图表、标志、标识、广告、域名、软件、程序等，除特别标明外，均来源于网络或用户投稿，版权归原作者或原出处所有。我们致力于保护原作者版权，若涉及版权问题，请及时联系我们进行处理。