# 【他山之石】Nature Energy：面向能源系统调度与交易的新型优化理论暨区块链共识机制

原创 编辑部 中国电机工程学报 2022-07-04 16:45 北京

> 原文地址: [https://mp.weixin.qq.com/s/r\_hjSGDKDvpINp\_FlJZESg](https://mp.weixin.qq.com/s/r_hjSGDKDvpINp_FlJZESg)


**导语**

近日，能源领域顶级期刊Nature Energy发表了上海交大副教授陈思捷等人的研究性论文《A blockchain consensus mechanism that uses Proof of Solution to optimize energy dispatch and trading》。该论文提出了一种面向能源系统调度与交易的新型优化理论暨区块链共识机制，欢迎品读。

 

 

**求解证明机制：用于能源系统调度交易优化问题的区块链共识机制**

 

陈思捷，米翰宁，平健，严正，沈泽宇，刘学智，张宁，夏清，康重庆

（上海交通大学；清华大学）

 

**1**

 

**研究内容**

近年来，电力系统优化的边界逐渐扩展到电、冷、热、天然气、氢、交通、水、碳等多资源能源形式。多能源系统的协同优化需要跨能源载体的支持与配合，这对传统中心化协同优化调度运行方式带来了巨大挑战。一方面，虽然各能源子系统内部可能存在中心调度管理部门，但不同能源子系统之间往往是平级关系，一个凌驾于各能源子系统之上、能指挥跨能源系统协同优化工作的权威中心机构通常不存在。另一方面，集中优化方式下，优化相关信息与参数仅由中心机构掌握，其他市场主体难以检验协同优化调度方案的正确性、最优性；各方未必相信中心机构没有徇私舞弊，未必相信其严格遵守优化调度规则。

 

本文利用区块链“多边共治、相互制衡”的原理，提出了一种适用于能源系统调度与交易的新型优化理论暨区块链共识机制，命名为求解证明机制（Proof of Solution，PoSo）。PoSo具有“一人求解，多人验证，求解复杂，验证简单”的特性。其基本思路与经典的区块链工作量证明（PoW）共识机制类似，但将PoW中需要求解的复杂哈希谜题替换为优化问题。一方面，优化问题和PoW中的哈希谜题都有“求解复杂、验证简单”的特性，可以降低海量验证者的验证运算工作量；另一方面，这一替换使得宝贵的算力用于求解有意义的多能协同优化问题，而非PoW里无意义的哈希谜题。PoSo与PoW的对比如图1所示。


图1 PoW与PoSo对比

 

下面以多个综合能源服务商协同优化运行为例说明PoSo的思想（图2）。在组织多个综合能源服务商的协同优化时，往往不存在统一调度机构，而各服务商均希望掌握多能协同的指挥权、主导权。在本方法下，地位平等的各个服务商组成一个委员会，由全体委员会成员选出一个轮值主席负责求解多能协同优化问题并给出最优运行方案，随后其他委员会成员可以快速验证该方案的正确性与最优性。若该运行方案是最优解，则它能得到委员会成员的认可和支持并生效，并被全体服务商执行；若该运行方案非最优解，其他委员会成员将更换轮值主席并重新求解最优运行方案。由此可见，PoSo在维持跨能源载体原有的平级关系基础上，以各方共同治理、相互监督和制衡的方式平衡了各服务商对协同优化主导权的诉求，并保证了多能协同优化的数据不可篡改与规则不可篡改。


图2 PoSo算法流程图

**2**

 

**研究贡献**

 

本文的贡献不仅局限于能源系统调度与交易领域，而且对数学优化领域、区块链领域都有一定的贡献。

 

本文提出了一种去中心化（或者说多中心化）的可信优化架构。与集中式优化、分解协调和纯分布式优化架构相比，PoSo保证了各参与主体间的相互制衡与制约；即便某些参与主体试图通过单独作恶或串谋破坏协同优化以攫取不正当权益，PoSo依然能保证最优方案被执行，具有高容错性。与以区块链做协调级的分解协调方法相比，PoSo的计算效率显著提高。跟分解协调、纯分布式、以区块链做协调级的分解协调架构相比，PoSo也能适用于更多的优化问题类型（图3）。

 

本文提出了一种区块链架构；该架构里的共识层不仅可促成共识、而且还能完成通常必须在区块链合约层完成的任务和应用。在传统区块链架构中，大规模复杂优化问题只能在智能合约层求解。PoSo在共识层同时完成了各节点达成共识以及大规模优化问题求解与验证两个任务，显著提高了区块链的运行效率。


图3 PoSo与现有优化架构对比

**3**

 

**第三方评价**　　

North Carolina A&T State University助理教授Mahmoud N. Mahmoud在Nature Energy上发表评述性文章“Putting proof of work to work”，用全文篇幅介绍和评述了本文的工作。他在文中称“PoSo能在有不可信不诚实参与方的情形下依然给出能源系统优化问题的最优解，而传统的优化方法难以做到；PoSo利用了被现有的PoW共识机制所浪费的算力，而算力浪费一直以来被认为是限制区块链应用的重要瓶颈；PoSo在计算负担、计算效率方面优于现有的区块链技术；…这使PoSo可用于大量能源系统问题并用于其他协作网络，只要其运行规则可用数学优化问题描述（First, PoSo is capable of delivering the optimal solution to critical energy-related optimization problems even in the presence of dishonest parties, which is difficult to achieve in traditional optimization schemes. Second, PoSo utilizes the wasted computation power lost by the traditional proof of work mechanism, which is historically considered a key bottleneck that limits the use of blockchain. Third, PoSo is superior to existing blockchains in terms of the computation workload and efficiency…These findings make PoSo applicable to a wide range of energy systems problems and other collaboration networks whose rules can be depicted by mathematical optimization problems.）”。

 

**4**

 

**论文与期刊信息**　

Nature Energy的定位与中国电机工程学报类似，涵盖能源相关的各类领域，包括光能、风能、潮汐能、地热能、水能、核能、燃料电池、交通燃料、生物质能、电池、超导、电催化、碳捕集、碳储存、能源经济、能源政策、用能行为、能源安全、能源获取、能源公平、能量转换、能源系统、能源网络等。Nature Energy每年平均发表80余篇研究性论文（research article）；截至论文录用时的影响因子为60.9，位列全球全领域期刊第8名。

 

 

 

**5**

 

**作者介绍**

 

陈思捷，上海交通大学电子信息与电气工程学院、智慧能源创新学院双聘，副教授，博士生导师，电院电气工程系系主任助理，智慧能源创新学院新型电力系统技术经济研究所所长。入选中国科协青年人才托举工程、上海市浦江人才计划、上海交通大学“青年岗位能手”、《中国电机工程学报》“突出贡献专家”等。

 

智慧能源创新学院于2020年12月29日成立，目前已成立了碳捕集与利用研究中心、新型电力系统智慧运行与控制研究中心、数字核能研究所、新型电力系统技术经济研究所四个中心和研究所（https://www.senergy.sjtu.edu.cn/keyanjigou）。学院正处于快速发展阶段，现面向全球招聘教学科研并重教师、专职科研教师、博士后等，其中博士后表现优秀者将有机会留校任教，期待加盟，助力我国双碳事业。简历投递邮箱：nltai@sjtu.edu.cn，sijie.chen@sjtu.edu.cn。

 

 

 

 

**引文信息**

 

Chen, S., Mi, H., Ping, J., Yan, Z., Shen, Z., Liu, X., Zhang, N., Xia, Q., & Kang, C., A blockchain consensus mechanism that uses Proof of Solution to optimize energy dispatch and trading. Nat Energy 7, 495–502 (2022). https://www.nature.com/articles/s41560-022-01027-4 

论文所用的多能协同数据与优化结果已开源：

https://github.com/kelpman05/DataUofManchester

https://github.com/kelpman05/DataWuzhong