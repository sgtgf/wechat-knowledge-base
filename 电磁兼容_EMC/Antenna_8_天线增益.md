# Antenna-8：天线增益


> 原文地址: [https://mp.weixin.qq.com/s/j3l\_1AN3HnDoBtXPmVXKmA](https://mp.weixin.qq.com/s/j3l_1AN3HnDoBtXPmVXKmA)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQULfdZ7R11TgWJrYQ90cXz0CgNqGiaaOLoR9M8icichvHs3LW9EicByJuxELoHHzfomJShUVTgBjoPYg/640?wx_fmt=png&from=appmsg)

____**★★★**______Antenna-8---Gain______**★★★**____

___引言：天线增益是描述天线性能的重要指标之一，用于定量的描述天线把输入功率（能量）辐射的集中程度，从通信角度讲，就是在某个方向上和范围内产生信号能力的大小。实际应用中，即使集中某个方向，天线还是会在空间各个方向都有大小不同的增益，天线增益通常是指产生最大增益的方向上的增益，而这体现了天线的方向性。  
___

___€1.天线增益定义___

___天线增益是指在输入功率相等的条件下，实际天线与理想的辐射单元在空间同一点处所产生的场强的平方之比，即功率之比，它定量地描述一个天线把输入功率集中辐射的程度。其定义为：在相同半径___r的球面上，实际天线辐射最大方向上的电磁波通量密度与各向同性天线（理想点源天线）通量密度之比。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/wQl20oAva8v26Zk7IMlkdTvI3JFs7lFKia4hXnPNz20icaUtd88IB7bbvUhN9gAlZngib5QnR3ACD8kicayibAj112Q/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1)

图8-1：天线增益的定义

从图8-1中可以看出天线增益的意义在于，与理想点源形成的各向同性辐射（呈球面扩散）能力相比，一个实际的方向性天线的辐射能量将主要集中到某一特定方向上。这样在与理想点源相同辐射功率的情况下（图a），方向性天线在特定方向上将有更大的电场强度。或者说，如果在某个特定方向和距离上，方向性天线与理想点源天线形成的场强相等（图b），那么方向性天线所需的辐射功率将远小于理想点源天线。  

除了理想点源定义方式，另一种表示增益的单位是与理想半波振子的比较值，用dBd表示，d是dipole（振子）的缩写。由于半波振子的增益是2.15dBi，所以dBi=dBd+2.15。4个半波对称振子沿垂线上下排列，构成一个垂直四元阵，其增益约为G=8.15dBi，也就是6dBd。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQqkuBoR9mpic9gEz9jGCsaoOmicnutlyZrSaHEGHgbqwJhuHhcib2rjuCMNBTDYLlyPmzicRfN8A6yow/640?wx_fmt=png&from=appmsg)

图8-2：增益的度量

根据德布罗意的波动理论，电磁波同样具备波粒二相性，对于可见光波段，平面镜对光具有绝大多数的反射效果，而在微波段，具备全反射微波材料主要是导电性能良好的金属材料，这些材料对微波的反射系数接近于1，所以加强天线增益的最直接方式是增加合适的反射罩，集中辐射能量，常见的如基站天线，抛物面天线等。与全反射相反，军事上的战斗机则要求对电磁波全吸收，战斗机全身覆盖高性能吸波材料，降低自身的RCS，大大降低被雷达探测到的概率。

___€2.天线增益计算___

天线增益的标准基础定义公式（理论推导）：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6hf2yhCTfQ6mFTCkMo1YyVJAaIPfU3NfCRKNk4c3JqCHaD3Jn5NVLbiaQ/640?wx_fmt=png&from=appmsg)

其中Pmax是天线最大辐射方向的功率密度，Pavg是理想全向点源天线的平均功率密度。理想全向点源天线（各向同性天线）的平均功率密度Pavg计算公式基于能量守恒原理，假设天线在自由空间中无损耗地向所有方向均匀辐射，其公式为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6hYsQyzBb1GoicVGBFF9ic6rMbsUic4snj0ocWKTWBe6kFREiacSomfkVeXQ/640?wx_fmt=png&from=appmsg)

理想全向点源天线（各向同性天线）的总辐射功率Prad是天线实际向空间辐射的总功率，根据输入功率和效率计算，工程中，若已知天线的输入功率Pin和天线效率η（无损耗时η=1），则：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6hfvJkkAt7jBLojpebGjyOk3jUwGcPhzEjTJHlTPpIEro5vmTgKXA9Tg/640?wx_fmt=png&from=appmsg)

这是简化计算常用的“输入---辐射功率”关系，本质仍基于上述电磁能通量积分的物理定义。核心逻辑是：总辐射功率是天线向外辐射的电磁能量总和，需通过场分布的面积分严格推导，工程中可结合效率与输入功率简化计算 。假设天线的输入功率Pin=50W，效率η=0.9，则总辐射功率为Prad=45W，此时在距离r=5m处的平均功率密度为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6h0YhWfWGoxrbKbSTVkOCiaM2O9o0axeSOzxJbjE0lAgdkHoTzLSribLpQ/640?wx_fmt=png&from=appmsg)

___Pmax的计算，需要结合天线的方向性函数与总辐射功率，在基于方向性函数的严格定义下，若天线在最大辐射方向的方向性函数值为：___

___![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6hnnZO4g5J2ow8LMJ9yxDuoibuibC9RtgZVWqKvhz42Ve3ONSiajclJTTSQ/640?wx_fmt=png&from=appmsg)___

___其中Prad是总辐射功率，D为方向性系数，r为远场距离。___

___![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSq9OGcdEDmfepYDCy3VWdicdnELAZicBmd3pwibaX6xm9WXb20wGnbXaKmszBTaLHActpEj0WZG3guw/640?wx_fmt=png&from=appmsg)___

___对于上面的标准公式来讲，关键参数D比较难以获取，涉及大量复杂的专业计算，所以对于常用天线，天线增益G有快速近似计算式。___

1#：对于一般天线（通过波瓣宽度估算）增益，可用近似计算公式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6hZtib2sa8VwA995icWR5iabA0YUJYRJYwDf4qCr8YL8vNicg8GsoqLJISXg/640?wx_fmt=png&from=appmsg)

其中2θ\_3dB,E和2θ\_3dB，H是天线在两个主平面上的波瓣宽度（单位：度），32000是经验统计值，从上式可知天线主瓣越窄，增益越高。

2#：对于抛物面天线增益，可用近似计算公式：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6h0vCibKsf97iazT0BVHccLnhM6iajpsclXq3XNkznbic6r8cW9dYPwnJEPw/640?wx_fmt=png&from=appmsg)

其中，D为抛物面直径，λ0为中心工作波长，影响电磁波在抛物面结构上的传播、反射特性，4.5为经验系数，融合了抛物面天线实际应用中能量转换、损耗等复杂因素，是对该类天线增益与尺寸、波长关系的经验化简化表达。直径D越大，波长越短，增益越高。

3#：对于直立全向天线增益，可用近似计算公式 ：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6hOaXLEiaqKRts0lO5PPufZFBcu9vQ8JENiadZRKhG4r6qvbVfQiceib9ic0g/640?wx_fmt=png&from=appmsg)

其中，L为天线长度，λ0为中心工作波长，长度越长，波长越短，增益越高。

___4#：天线（有效孔径关联）___

___![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6htFI6nNoxCW1upHcukXPfdklNogpastExv0UmSpDuyLPBkJiale6PkuQ/640?wx_fmt=png&from=appmsg)___

___![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6hJVC3ibHDwIMhaOiajq8gl8HUxWmPgYDEl1KnHpYz08bpDLKcEhfXQPRQ/640?wx_fmt=png&from=appmsg)___

___![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6h59JNzoYXFXRh0nRVbvfaedRyRLaZkkaCYyhibGsEbtfgdgE5v69s8wQ/640?wx_fmt=png&from=appmsg)___

其中A是物理面积，η是效率，Ae是有效孔径面积，λ是信号波长，体现增益与天线尺寸、波长的物理关系。上式更具通用性，适用于各类可通过有效孔径分析增益的天线，像喇叭天线、抛物面天线等也可从有效孔径角度用此公式理解，但并非像公式2那样针对特定结构（抛物面 ）定制，是从电磁波接收的物理本质（有效孔径与增益关系 ）推导而来，体现天线尺寸、波长对增益的基础影响。

___€3.天线的有效孔径___

在卫星通信测控领域，经常使用“口径天线”（最常见的是喇叭天线和抛物面反射天线），延伸到任何天线的有效孔径与天线增益峰值 (G) 的一般关系式为：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6hG8lQffxQIPiaz1uOBrSGDyNyVgbNJwWWgHemmrYGDQlatCgYf0OoXiaQ/640?wx_fmt=png&from=appmsg)

式中，G为口径天线的增益，λ为电磁波的波长，Ae为有效口径大小（面积单位）。有效面积或有效孔径Ae是计算天线接收功率的一个有用参数，假设有一个与接收天线极化相同的平面波入射到天线上。再假设该波沿天线的最大辐射方向（接收功率最大的方向）向天线传播，那么有效孔径参数就描述了从特定平面波中捕捉到多少功率。假设p是平面波的功率密度（单位 W/m^2），如果P\_t表示天线终端可供天线接收器使用的功率（单位：瓦特），那么：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6hmST4SyQhwvNswPsxnHLDtEQHicdEer9GxU9LoA2NffjGCjlTqnww0JA/640?wx_fmt=png&from=appmsg)

因此，有效面积只是表示天线从平面波中捕获并传递多少功率，该面积包含天线的固有损耗（欧姆损耗、介质损耗等）。有效孔径或有效面积可通过与具有给定有效孔径的已知天线进行比较，或通过使用测量增益和上述公式进行计算，在实际天线上测量得出。

€4.天线有效孔径与辐射/接收能力的对偶性

___接收场景：有效孔径Ae是天线 “捕获电磁波能量的等效面积”，面积越大、波长越短，接收增益越高（符合直觉：大口径天线收信号更强）。___

___发射场景：有效孔径Ae可理解为天线 “等效辐射能量的虚拟面积”，面积越大、波长越短，发射增益越高（本质是天线将电流 / 电压转换为电磁波的能力，与接收是互易过程）。___

_根据天线互易性（发射和接收特性对称），发射天线的增益Gtx与接收天线的增益Grx相等。比如抛物面发射天线，其有效孔径：_

_![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6hoIjFQupPGrrQuZ4DnJjfG5wgVTBcvRc2hWic6iaIVOxVXcDaP5ibNfCHQ/640?wx_fmt=png&from=appmsg)_

______ηap___为口径效率，代入公式可得发射增益，与抛物面经验公式本质一致，___ηap≈0.57为典型抛物面口径效率。______

___![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSQQfLaQyiabvGeTMKbPcd6htbiaicT78tsJzV7hxN8SotENsmmjBzpSKu41AYLFFqnsszzia6DP7kOzA/640?wx_fmt=png&from=appmsg)___

可以这样来理解增益的物理含义：为在一定的距离上的某点处产生一定大小的信号，如果用理想的无方向性点源作为发射天线，需要100W的输入功率，而用增益G=13dB=20的某定向天线作为发射天线时，输入功率只需100/20=5W 。 换言之，某天线的增益，就其最大辐射方向上的辐射效果来说，与无方向性的理想点源相比，把输入功率放大的倍数，此例中就是相当于将5W的辐射能量放大到了100W辐射能量所达到的效果。

从这一点上来看，天线增益与有源电路增益相比有本质区别：有源电路的增益是定量描述某个器件将某个数值的功率真实放大到多少倍的能力。根据能量守恒定律，增益显然与天线方向图有密切的关系，方向图主瓣越窄，副瓣越小，增益越高。天线增益越高，其方向性越好，能量越集中，波瓣越窄。增益越高，天线越长。