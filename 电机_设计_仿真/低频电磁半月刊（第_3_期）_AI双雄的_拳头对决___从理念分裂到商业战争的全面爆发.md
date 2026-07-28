# 低频电磁半月刊（第 3 期）：AI双雄的“拳头对决”——从理念分裂到商业战争的全面爆发


> 原文地址: [https://mp.weixin.qq.com/s/uZnHtW37NkLxxoELn4ze2g](https://mp.weixin.qq.com/s/uZnHtW37NkLxxoELn4ze2g)

# 低频电磁半月刊（第 3 期）：AI双雄的“拳头对决”——从理念分裂到商业战争的全面爆发

这里记录低频电磁方面仿真、算法、商软、开源库/软件值得分享的内容，同时也记录当前 AI 领域最新的发展，半月发布一期。

本期刊开源，欢迎投稿。

## 封面图

![](https://mmbiz.qpic.cn/mmbiz_jpg/cicZ6db39IjzLodjFCymaibIibvzBQ4HXEiaI38ndfngKLC4kUVNE5d7xdaDjgbwGibk63K0Rw8duPukwKZkxA4oqfY8D0Qz8gWGVn1asShGNOnY/640?wx_fmt=other&from=appmsg)

2 月 19 日，印度AI峰会上 Sam Altman（OpenAI CEO）和 Dario Amodei（Anthropic CEO）拒绝握手。两人主要矛盾源于公司竞争和理念差异：Dario于2021年离开OpenAI创办Anthropic，主要因对AI安全和商业化路径的分歧。

近期冲突包括2026年超级碗，Anthropic在视频中讽刺 OpenAI 的广告策略，Sam Altman反击 Anthropic 的视频，并称**OpenAI 为了让数十亿普通人用上先进 AI；而非Anthropic 走高价订阅路线，只服务富人**。Sam Altman 强调 OpenAI 中的广告会清晰标注、不侵入对话、不影响回答内容。

## AI

### Anthropic收购Vercept & OpenAI引入OpenClaw创始人

-   Vercept是一家专注于“视觉优先（Vision-first）”的AI初创公司，其产品Vy能通过“看屏幕”的方式操控电脑，完成跨应用任务。
    
-   OpenClaw是一个现象级开源项目，主打能跨应用、跨系统自主完成真实任务（如管理日历、订机票）的AI Agent，在开发者社区拥有巨大影响力。
    

**Anthropic** 的强调AI成为拥有“计算机通用控制权”的**闭环执行系统**，能像人类一样完成视频编辑、软件工程等复杂生产任务，其路径更侧重于**提升单一智能体完成复杂、可靠工作的能力**。**OpenAI** 的动向则暗示其关注点可能从单一对话界面，转向 **“多Agent协作”** 的编排层。其路径更侧重于构建一个**Agent之间能够交互、协作的底层平台或生态**。

### Cursor 全新升级：从看差异，到看演示

Cursor 现在可以展示演示效果\[1\]，而不仅是代码差异\[2\]。智能代理可以运行自己开发的软件，并向你发送工作视频（Cursor now shows you demos, not diffs. Agents can use the software they build and send you videos of their work）。

## 商业软件

### 中国电科院发布自研风电机组整机仿真软件-风研（WeMoLab）

针对我国风电行业长期依赖国外整机仿真软件、本土工况适配不足、中小企业研发成本高的现实困境，中国电科院历经十年技术攻关，整合国内多区域风资源实测数据，成功研制出风研（WeMoLab）软件\[3\]。作为我国首款全行业通用的自主研发风电整机仿真设计软件，其采用模块化可扩展架构，**覆盖“外部条件建模-整机多场耦合建模-仿真求解-结果分析”全流程，具备适配陆、海多类型机组及超大型化机型的仿真能力，核心性能与国外同类软件持平，且更贴合国内不同区域风资源特性与产业发展实际**。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/cicZ6db39IjyUe90HRic5VZxaPTtb66D0ibIqCR8PWXIYowVibbdgyHQapXRJrunN8fKOK3Vhp7iazGO7EB9nbia8ibMMYXnfqlWBHqViaib90Yo7VrA/640?wx_fmt=other&from=appmsg)

据公开报道，风研（WeMoLab）软件拥有完全自主知识产权\[4\]，机械模型仿真准确度提升30%，电气模型仿真准确度提升37%，整机刚柔耦合模型求解速度提升2倍，同时融入我国东南沿海、中西部山地等3类特有风况模型，更加贴合我国不同区域风资源特性，满足陆、海多类型风电机组及大型化机组的仿真设计需求，可为高校科研、产业升级、人才培养等差异化需求提供精准支撑。

### Synopsys 发布2026财年第一季度财务业绩

财报中重申全年总收入为96.1亿美元的预期，其中Ansys预计收入为29亿美元\[5\]。可以看到，工业软件行业是一个非常典型的**支点型产业**，本身市场规模并不大，但能**撬动、放大、支撑**千亿万亿级产业。

### Synopsys 发布 Ansys 2026 R1

**Synopsys发布Ansys 2026 R1**\[6\]，整合Synopsys与Ansys近百年工程经验，通过AI、多物理场仿真和数字孪生技术，实现设计探索加速、早期验证及更智能系统工程。AI方面的主要亮点包括全新智能体与生成式 AI 仿真功能\[7\]：

-   Ansys Mechanical软件中的全新**网格智能体（Mesh Agent）**：可用于探索性使用，帮助工程师在模型前处理过程中调试和解决网格划分故障。该智能体功能通过提供经过验证的修复步骤来指导工程师，以增强其对自动化前处理的信心；
    
-   Ansys Discovery软件中的Discovery**验证智能体（Validation Agent ）**——目前正处于早期客户评估阶段，其运用基于数十年工程专业积累的智能体AI，利用情境智能和行业最佳实践主动识别设置问题，使工程师能够满怀信心地加快进度，避免代价高昂的错误，并从一开始就实现更高性能的设计；
    
-   **面向几何结构的Ansys GeomAI平台**：引入了一种由生成式AI驱动的概念设计探索方法，使工程团队能够以更高的创造力和效率快速生成、评估和优化几何结构概念。通过直接学习参考设计，GeomAI可帮助工程师在保持工程意图的同时加速早期创新，确保AI生成的概念具备可预测性、可靠性，且可用于下游验证。
    

关于Ansys Maxwell更新内容可以参考我之前的文章\[8\]，也可以蹲后续Ansys中国的新功能系列直播\[9\]：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/cicZ6db39IjyUAF3w05fcUWmcYIEKZHM19edBhUB48MAoKDibzG87RouTf38ZTjuFkA1zneic9mopQibwBIkbManNOLb0vPHG2ru5GS8BRH2TjA/640?wx_fmt=jpeg&from=appmsg)

## 开源软件/库

### VTK 9.6.0 版本发布

本次更新围绕**新功能拓展、架构与性能优化、多平台与语言支持增强、Bug 修复**四大核心展开，同时完成了部分旧特性的弃用和第三方依赖的升级。本次更新让 VTK 在**AI 集成、分布式计算、Web 前端部署、Python 生态融合**方面实现了重要突破，同时通过架构重构和性能优化，为大规模科学计算和可视化提供了更高效、稳定的支撑，也为后续版本的功能拓展奠定了基础\[10\]。

附国内镜像仓库\[11\]。

### Gmsh 4.15.1 版本发布

修复了 4.15.0 版本的bug\[12\]。

附国内镜像仓库\[13\]。

## 思维破壁机

### Anthropic 设计负责人 Jenny Wen 谈 AI 时代的设计变革\[14\]

根据宝玉老师整理的推文，我挑出自己比较赞同的几点和朋友们共享：

-   构建软件最难的部分，其实不是构建它本身。  
    工作中最难的时刻，往往不是技术实现，而是你和另一个人在争论”这个功能到底该不该做””该做成什么样”。这种**人与人之间的决策分歧**，AI 可以提供参考意见，但不能替你解决。设计和产品决策一样，**决策和责任仍然落在人身上**。
    
-   随着AI Agent发展，传统**软件的UI并不会完全消失**，对于特定任务，UI 仍然更直接。人们仍然喜欢看到 UI、点击它们、和它们互动，这比打字高效得多。
    
-   三种人才：**方块型强通才**（在多个维度上都达到了 80 分水平的人）**、深 T 型专家**（在某个领域排到行业前 10%）**、有匠心的应届生**（学东西快，没有固化的流程思维，一个白纸状态的快速学习者可能比满脑子旧流程的资深人更有优势）。
    
-   **Jenny Wen**最尊敬的领导者往往会主动选择做一些“低杠杆”的事情：比如高管自己花大量时间测试产品、复现问题、跟工程师一起看日志抠细节。领导亲自做会建立对产品的深度熟悉感，也给团队传递了“**没有什么事是掉价的**”这个信号。
    

### 测试是新的护城河

阮一峰老师在科技爱好者周刊（第 388 期）\[15\]中点明：测试是新的护城河。

一位 Cloudflare 工程师仅用一周、花费 1100 美元 Token 费用，借助 AI 就重新实现了拥有十年积累、大团队巨额投入的 Next.js，性能更优且完全兼容、无需改码即可运行。 **成功关键在于 Next.js 有完善文档、社区资料与完整测试用例，AI 可通过测试保证 API 行为一致。** 这说明传统技术护城河在 AI 面前极易被攻破，测试用例才是未来软件真正的核心护城河。

**测试案例对于工业软件来讲同样至关重要**，存在解析解的案例往往数量有限且大多条件简单，没有众多**关键行业的极端情况和边缘案例**，工业软件也只能停留在**玩具级别**，难以真正商用。

多说一句，有时候玩具也可能会有市场，关键看瞄准的用户画像，以及投入多少，期望带来多少效益。

### 参考资料

\[1\]

A computer for every agent: _https://www.youtube.com/watch?v=6Nru5OQq9O4_

\[2\]

Cursor 智能体现在可以控制自己的计算机了: _https://cursor.com/cn/blog/agent-computer-use_

\[3\]

我国首套自主风电整机仿真软件 WeMoLab 在北京发布: _https://mp.weixin.qq.com/s/VWOpWGMZZcwqY8TFXX-Wng_

\[4\]

中国电科院自主研发的风电机组整机仿真软件发布: _https://mp.weixin.qq.com/s/udzDN\_kTxs5zg5HIfOSL3g_

\[5\]

Financial Summary Table: _https://investor.synopsys.com/financials/quarterly-results/default.aspx_

\[6\]

Synopsys Launches Ansys 2026 R1 to Re-Engineer Engineering with Joint Solutions and AI-Powered Products: _https://news.synopsys.com/2026-03-11-Synopsys-Launches-Ansys-2026-R1-to-Re-Engineer-Engineering-with-Joint-Solutions-and-AI-Powered-Products_

\[7\]

新思科技推出Ansys 2026 R1版本，通过联合解决方案和AI驱动型产品重塑工程领域: _https://mp.weixin.qq.com/s/1Jo5z2tMbiP17a5bJqh2-w_

\[8\]

Ansys Maxwell 2026 R1 更新内容介绍: _https://mp.weixin.qq.com/s/QKtDW79xE5wpEHvzYOV5aA_

\[9\]

Ansys EMPS 2026 R1新功能 - Maxwell & MotorCAD: _https://v.ansys.com.cn/live/090IRxUS_

\[10\]

VTK 9.6 Release Notes: _https://docs.vtk.org/en/latest/release\_details/9.6.html_

\[11\]

VTK国内镜像: _https://gitee.com/YoHen-Fu/vtk_

\[12\]

Gmsh 4.15.1 Release: _https://gitlab.onelab.info/gmsh/gmsh/-/releases_

\[13\]

Gmsh国内镜像: _https://gitee.com/YoHen-Fu/gmsh_

\[14\]

Anthropic 设计负责人 Jenny Wen 谈 AI 时代的设计变革: _https://x.com/dotey/status/2028599757820613086_

\[15\]

科技爱好者周刊（第 388 期）: _https://www.ruanyifeng.com/blog/2026/03/weekly-issue-388.html_

作者|斗沙片刻

![](https://mmbiz.qpic.cn/mmbiz_png/cicZ6db39IjyrJdQGW3FW3VqqJwM7gWRRccuibU6Iia6nic4jwWKWibI2WFRcQEs1iaSrtxxcKLZiahBW84FhFCwiaO4Mkcb0n7Jb0s5K19BHibpPsSE/640?wx_fmt=png&from=appmsg)