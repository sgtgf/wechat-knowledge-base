# TO-247-3 / TO-247-4封装的SiC MOSFET应用与设计解析


> 原文地址: [https://mp.weixin.qq.com/s/3zePIUlRgnmGcqXyEZwIYA](https://mp.weixin.qq.com/s/3zePIUlRgnmGcqXyEZwIYA)

SiC MOSFET，即碳化硅金属-氧化物半导体场效应晶体管，是一种基于第三代宽禁带半导体材料碳化硅（SiC）的功率器件。相较于传统硅基器件，SiC MOSFET凭借碳化硅材料的高击穿电场、高热导率等特性，具有耐高压、耐高温、开关频率高、导通损耗与开关损耗低等显著优势。它能大幅提升能源转换效率与功率密度，是实现电力电子系统高效化、小型化的关键元件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpM8zXgiboGUp8iapriaChTkyCoNMG4vh7AxzNa68vibwGMaWg7ZRHnWOMjXZJaE6092cyTibUrDPEj1j0BBrGXQLD3yXuKQnNF3ns7Q/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

目前，SiC器件主要技术路线包括平面栅和沟槽栅结构，已广泛应用于新能源汽车电驱系统、车载充电器、光伏逆变器、储能及数据中心电源等领域，市场正快速发展，国产化进程不断加速。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpPOLSEsxibmmJnxZ06o3R3hIop9uMpzltmIN41cgU5bgnYF1yZTlsGPO6xssPVLwXUViaN7QJpBxqxOROBibjE2UyNjpS0icO8sEj0/640?wx_fmt=jpeg&from=appmsg)

图片来源：网络

一、TO247封装介绍

TO-247 是高压大功率 SiC MOSFET 最通用通孔直插封装，分为3 引脚（TO-247-3）、4 引脚开尔文（TO-247-4/4S/4L） 两大主流形态；二者散热架构完全一致，核心差异在于是否独立开尔文源极引脚，直接决定高频硬开关损耗、栅极振荡、EMI 与整机效率，是光伏、储能、直流快充、大功率工业电源、车载 OBC 的主力封装。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP5ia02nq6aGkfic6hWvvJ8v1Dnrm7EgPyYGsibFao4WziaR3yjCDX46ib2nibzVCDUgIYS840JUXElgy8NuATxH4rUvlA6HibejHnEIg/640?wx_fmt=png&from=appmsg)

TO247-3封装的实物与拓扑图

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNFPR9Jr3CADibhjk81d1Lib5WhG1E4F08rW8nBSfMRuBM4m47oK2Cfg4K7lvQFenaDob5GFd27tdLtUpm672a3d2Qe4XGmc4HUo/640?wx_fmt=png&from=appmsg)

TO247-4封装的实物与拓扑图

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPfc5UEK2DjsNZZRmty0STFb6ao0icyyogRa2EHlBfsuMmLd7JS5Y1eEbUhibaiaSPDccDBspdD53gAdEyKlH4d2gdeZHhj5Gjoo0/640?wx_fmt=jpeg)

TO247-4S封装的实物与拓扑图

  

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPPk2wvnXPLRReIMf7bFSkpDmNlP0GdDk2fCxLCIKYUqxib61sxvEv0sTqhRzNVXqq9fQtPMAjqIVA5HqAK74TXBaS5zq63EDic4/640?wx_fmt=png&from=appmsg)

TO247-4L封装的实物与拓扑图

二、TO-247 封装基础共性特性（3/4 引脚通用）

散热优势

背部大面积金属基板可直接锁附散热器，结壳热阻 RthJC 低至 0.18~0.35℃/W，散热能力远超贴片 TOLL/D²PAK；适合大功率、密闭无强制风冷、多管并联高热耗设备；可搭配绝缘导热垫、水冷散热器，适配长期满载高温工况（Tj=175℃工业 / 150℃车规）。

电流与耐压覆盖全面

主流规格 650V/1200V/1700V，单管连续电流1~200A，支持多管并联拓展至几百千瓦功率，是分立器件单管功率上限最高的封装之一。

量产与机械可靠性

通孔插件装配，引脚强度高，抗震动、抗热循环分层，适配户外光伏、车载、储能长期 20 年寿命需求；供应链成熟，国内外厂商全覆盖，国产替代完善。

系统兼容度高

散热器标准化、安装孔统一，新旧方案改板成本低；爬电距离充足，高压 800V/1500V 母线无需额外隔离结构。

三、TO-247-3 与 TO-247-4 核心差异、各自优势

1\. 结构原理区别

TO-247-3（3 引脚：D/G/S）

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMgic7bGMOG5ctmCKPrluIt1hrTcgWJNWic8Yb5wBR3iaYjbBmYicA6yu8l5tEgdRUsoXIwX9BPNmtjZV8YNLcuiciaI4aEbGvKbJ3icQ/640?wx_fmt=png&from=appmsg)

源极 S 引脚同时走大功率主回路电流 + 栅极驱动回流，引脚与内部引线存在寄生电感 Ls（8~12nH）；开关瞬态大电流 di/dt 在 Ls 上产生反向感应电压：

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNdV7A7ZRwmMWLCFwTPuiceZTBiaGiaYOCIibkg6MreFmic5xAleJrVKO77bm3SQicDBlIG84rYGyzfhgwO0yS8cCqIW6I8EaLToTqho/640?wx_fmt=png&from=appmsg)

有效栅压VGS =Vdrive−VLS，驱动电压被抵消，开关速度变慢、损耗上升、栅极极易振荡、易发生桥臂误导通。

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMmldg8ClhP2aibdePD0xZbRfZhr3OawXbly9gyrhgicF8ERcjjMmhG5fMfjIONDknKgUEMl5zwJO6DafYmwQ1wZ5pmopONibzhUg/640?wx_fmt=jpeg&from=appmsg)

TO-247-4（4 引脚：D/G/ 功率 S / 开尔文 KS）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPlMYj3CXAFicRr7m88ZVfIlgKNtd8pSkJIhKWic6WicfIUXyThF76Kna2LF7BcGzcTUiaKLT3sxqkZBGwHPb8u6I66XicLDniaBajQI/640?wx_fmt=png&from=appmsg)

独立开尔文源极 KS仅做驱动信号回流，无大功率电流流过；功率回路与栅极驱动回路电气解耦，驱动回路无 Ls 压降干扰，寄生电感降低至 3~4nH，彻底消除共源电感对 SiC 高速开关的负面影响。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpOvQejNfASH6PgibZorqjXdJ9iaDBkfKleSUJKteebVUNzvsjwFw5vAicBbUzFhGp0icPRgAjicjg022K4VpbS0TicSTpWQibwQe3eYsc/640?wx_fmt=jpeg&from=appmsg)

开通损耗对比

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMr8XjdUsYvTwUibKIz5pc7Q7rIicT9VG0zU6zWGxhXrFSxDzLajs5Hbk6ZfIhWXTWpibyrzTxmppztRAfdFSFAiaYooLicCk0nwmEs/640?wx_fmt=jpeg&from=appmsg)

关断损耗对比

2\. 电气性能量化优势（TO-247-4 对比 TO-247-3）

开关损耗大幅降低

开通损耗 Eon 下降 35%~70%，关断损耗 Eoff 下降 25%~34%；硬开关拓扑（图腾柱 PFC、Boost、全桥逆变）提升最明显，同等开关频率整机效率提升 0.5%~1.2%。

栅极振荡、电压尖峰抑制

无需大幅增大栅极电阻 Rg 降速，可使用更小 Rg 释放 SiC 高速特性；驱动负压尖峰从 - 7.4V 降至 - 3V 以内，米勒震荡、dv/dt 耦合干扰显著减弱，减少 RC 吸收电路用量与体积。

桥臂可靠性提升

半桥 / 全桥拓扑抗误导通能力增强，可压缩死区时间，进一步降低环流损耗，减少上下管直通短路风险。

EMI 优化

开关波形边沿干净，高频共模、差模噪声降低，简化输入 EMC 滤波器件体积与成本。

3\. TO-247-3 独有优势

成本更低：引脚更少、封装工艺简单，BOM成本敏感低成本设备首选；

PCB 兼容旧方案：传统硅 MOS/IGBT方案直接 pin to pin 替换，无需修改驱动布线；

低频软开关场景够用：LLC 谐振、低压低频 Boost（<60kHz），di/dt 小，Ls 负面影响可忽略，性价比更高。

4\. TO247-3/TO247-4 引脚封装核心对比表

对比维度

TO-247-3 SiC MOS

TO-247-4（开尔文）SiC MOS

源极寄生电感 Ls

8~12nH

3~4nH

硬开关 Eon 降幅

基准

降低 35%~70%

硬开关 Eoff 降幅

基准

降低 25%~34%

栅极震荡风险

高，需加大 Rg 降速

低，可小 Rg 高速开关

桥臂误导通概率

较高

极低

适用开关频率

≤80kHz，软开关优先

60~300kHz，硬开关首选

物料成本

低

略高

PCB 布局难度

简单，驱动布线无特殊要求

需严格分离 KS 与功率 S 走线

散热能力

一致

一致

  

四、TO-247-3、TO-247-4 适配应用场景划分

TO-247-4（开尔文）核心应用（高频硬开关大功率场景）

1\. 光伏逆变器（3~100kW 组串式 / 集中式）

拓扑：图腾柱 PFC、两电平全桥、三电平 NPC 硬开关逆变，母线 600/800V，频率 100~200kHz；

痛点：SiC 高速开关 di/dt 极大，TO-247-3 损耗高、散热器体积大；4 引脚开尔文大幅降低开关损耗，提升满载效率至 99.2% 以上，减小滤波电感体积；

落地规格：1200V TO-247-4 SiC，4~8 管并联。

2\. 储能 PCS 双向变流器（5~250kW）

双向 Boost + 全桥逆变，频繁硬开关切换、高低压充放电循环；开尔文封装抑制动态不均流，多管并联温升一致性更好，户外高温环境可靠性提升。

3\. 直流快充模块（20kW/30kW/60kW 风冷快充桩）

前级图腾柱 PFC + 后级 LLC / 移相全桥硬开关；单模块大功率、散热受限，4 引脚降低损耗减少散热器重量，多模块并联动态均流更优；行业主流方案统一选用 TO-247-4。

4\. 大功率工业服务器 / 通信电源（3kW~12kW AC-DC）

AI 算力电源、大功率通信整流，图腾柱无桥 PFC 硬开关拓扑，频率 150~300kHz；TO-247-4 释放 SiC 高频优势，功率密度显著提升，相比 TO-247-3 减少散热与滤波成本。

5\. 车载 6.6kW OBC、高压车载 DC-DC（车规 AEC-Q101 TO-247-4）

车载狭小电控盒、温度波动大、可靠性要求严苛；开尔文结构避免高压开关栅极震荡，降低整车功耗，主流车企 SiC OBC 标准封装。

6\. 工业高频焊机、伺服驱动器、高压 UPS

硬开关逆变、高 di/dt 工况，对损耗、EMI、短路鲁棒性要求高。

TO-247-3 适用场景（低频、软开关、成本优先设备）

1\. LLC 谐振软开关电源（工商业储能副边、低压充电模块、工业适配器）

谐振阶段电流过零开通，di/dt 极小，共源电感 Ls 几乎无负面影响，3 引脚完全够用，节约器件成本。

2\. 小功率户用微型逆变器、阳台光伏优化器（＜3kW）

功率小、开关频率 60kHz 以内，损耗增量可控，追求低成本 BOM。

3\. 工业低频 DC-DC 升压电源、高压辅助电源（频率＜50kHz）

开关速度慢，栅极震荡不明显，TO-247-3 性价比突出。

4\. 存量设备硅 MOS/IGBT 国产化替换

原有 PCB 仅支持 3 引脚通孔，无需改版直接替换 SiC，快速降本升级效率。

5\. 高压小电流工业电源（1700V 高耐压、单管电流＜20A）

导通损耗为主，开关损耗占比低，3 引脚足够满足性能需求。

五、市场落地典型应用案例分析

案例 1：60kW 直流快充模块（TO-247-4，1200V SiC）

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNZcArcicKYlZz9NR2sXAwQX8FZTWjia2hOUWfTtDLibjSZaaziapuP4PhdCv2S06DYoKHgh0HQtUAiaEdoWUZbFGkUWc9ybcOXwdJU/640?wx_fmt=jpeg)

1200V60A 45mΩ TO247-4封装SiC MOS参数表

系统参数：AC380V 输入，800V 直流母线，前级图腾柱 PFC 硬开关 120kHz，单桥臂 4 颗 SiC 并联；

选型器件：国产 1200V 45mΩ TO-247-4 碳化硅 MOS；

封装价值对比 TO-247-3：

Eon 损耗降低 42%，整机满载效率提升 0.9%，单模块散热功率减少 600W；

栅极无持续振荡，取消大容量 RC 吸收，BOM 减少 2 个功率电阻 + 高压电容；

多管并联动态电流差从 12% 降至 4%，器件温差缩小 8℃，延长使用寿命；

痛点解决：快充满载温升超标、EMI 滤波体积大、高频震荡导致器件老化。

案例 2：8kW 组串式光伏逆变器（TO-247-4 1200V SiC）

工况：三相 800V 母线，全桥硬开关 100kHz，户外 - 30~45℃宽温；

对比 TO-247-3 方案：整机峰值效率从 98.4% 提升至 99.3%，电感体积缩小 35%；

可靠性收益：阴雨电网电压波动时无栅极误导通，故障率下降 70%。

案例 3：3kW LLC 储能逆变辅助电源（TO-247-3 650V SiC）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNaZibU5mZdMbrZUjpgs3t3X7Ix4slCg2dSpXDocCySFAJogcRfxviahLn1AAmAibOMYJPib2ibFte1YpgjtM9icEIlRib7oy1icIuCUfs/640?wx_fmt=png&from=appmsg)

650V60A 30mΩ TO247-3封装SiC MOS参数表

拓扑：全谐振 LLC 软开关，工作频率 50~70kHz，电流过零开通；

选型逻辑：软开关 di/dt 极低，共源电感无明显损耗贡献；选用 TO-247-3 单颗成本降低 15%，整机 BOM 节约近百元；

性能表现：效率与 TO-247-4 方案差距仅 0.2%，满足设计指标。

案例 4：6.6kW 车载 OBC（车规 TO-247-4）

约束：机舱狭小、高低温循环、振动工况；TO-247 通孔锁散热器散热优于贴片 TOLL；

开尔文核心作用：抑制车载高压冲击下栅极负压震荡，避免误开通造成桥臂短路，满足 AEC-Q101 可靠性标准。

六、TO-247 封装 SiC MOSFET 完整选型体系

1\. 封装形态快速选型判断标准

设计条件

优先选 TO-247-4

优先选 TO-247-3

拓扑类型

图腾柱 PFC、Boost、两 / 三电平硬开关逆变

LLC、谐振软开关、低频 Boost

开关频率

＞80kHz

＜60kHz

单管功率

＞3kW、多管并联大功率

＜3kW 小功率设备

约束条件

追求最高效率、最小散热器、低 EMI、高可靠性

成本优先、存量 PCB 兼容、低频软开关

电压等级

650/1200V 高频硬开关通用

1700V 高压小电流、低频辅助电源

  

2\. 耐压等级选型（SiC 通用裕量原则）

单相 220V 系统（服务器、户充、户用光伏）：母线峰值 450V → 650V TO-247；

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOv2KKpbAliaCxHpd3KXic8aibyE4ibrlx4gU0QMUle6hFrl8FnyyDANyOB08ez7ofXnAJL5USBL17Ma3I3VCKOVZa52BevvmZzeUk/640?wx_fmt=png&from=appmsg)

650V150A 12mΩ TO247-4封装SiC MOS参数表

三相 380V、储能 800V、直流快充：母线峰值 900V → 1200V TO-247（市场主流）；

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNDxFWJDZEtopeMAcCOttEhGFsfPLGH4m6MWGvuVrmX4s4g98ic8YCjDZiboGvwM2Tode9SjOylZWlkhxu9yLAVVFy45npg5tr8A/640?wx_fmt=png&from=appmsg)

1200V250A 7.5mΩ TO247-4封装SiC MOS参数表

集中式光伏 1500V 母线、高压工业电源：1700V TO-247。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNFZS4yzSySWxqGbeWAxuLNBHkGUXVgjlZxHDB8yV6dEa68FUV1lNsLs7V3RD7b6s2XYlPRelnicwoic1hRBdxZ0sPziaETVxcU40/640?wx_fmt=png&from=appmsg)

1700V120A 14mΩ TO247-4L封装SiC MOS参数表

3\. Rds (on) 与电流降额选型

TO-247 散热能力强，散热器良好（风冷 / 水冷）下电流降额系数 0.8~0.9；自然风冷密闭设备降额 0.6~0.7：

硬开关高频场景（TO-247-4）：优先平衡Qgd 栅电荷，选低栅电荷型号降低开关损耗，Rds (on) 适度放宽；

低频软开关（TO-247-3）：优先极小 Rds (on)，降低导通损耗；

多管并联：同桥臂必须统一封装、同型号，避免 3/4 引脚混用导致动态不均流。

4\. 器件等级

工业级：光伏、储能、快充、服务器；

车规 AEC-Q101 TO-247-4：车载 OBC、高低压 DC-DC；

国产替代要点：短路耐受 SCWT≥2μs（工业）/≥3μs（车规），体二极管 Vsd 偏低适配图腾柱拓扑。

七、TO-247 封装硬件设计核心要点（分 3/4 引脚差异化）

通用散热设计（3/4 引脚一致）

安装规范：器件背部金属基板通过导热垫紧贴散热器，螺丝扭力统一（0.8~1.2N・m），避免接触热阻飙升；

多管并联布局：器件间距≥10mm，错开放置，防止散热器局部热堆积；

导热垫选型：0.1~0.3mm 高导热硅胶垫，耐压≥2kV，满足高压绝缘；

热冗余设计：满载最高温升控制在 100℃以内，环境温度＞40℃必须配备强制风冷。

TO-247-4（开尔文）专属 PCB 布局关键（发挥低寄生核心）

功率源极 S 与开尔文 KS 严格分离，禁止共铜箔

KS引脚独立短线直接连接驱动芯片信号地，走线宽度0.2~0.3mm，长度＜15mm；

功率 S 走大电流宽铜箔，直接接母线电容地，两路地线仅在驱动芯片单点汇合；

严禁 KS 走线与功率 S 铜箔重叠、并行长距离耦合。

栅极回路极简布线

驱动电阻 Rg 紧贴 G 引脚放置（5~20Ω，高频硬开关取 5~10Ω）；G-KS 回路独立完整，包围地层屏蔽，远离 D 极高压开关节点，间距≥5mm，抑制 dv/dt 耦合干扰。

功率环路最小化

母线高压陶瓷缓冲电容紧贴 D、功率 S 引脚，功率环路面积控制在 2cm² 以内，进一步降低外部 PCB 寄生电感，配合开尔文封装最大化降低尖峰。

TO-247-3 布局注意事项（弥补无开尔文短板）

必须加大栅极电阻 Rg（15~30Ω），刻意降低开关速度，抑制栅极振荡与误导通；代价是开关损耗上升、效率下降；

G-S 两端并联 10~18V 稳压二极管 + 小型 RC 吸收（100Ω+1nF），吸收负压尖峰；

死区时间放大至 300~500ns，防止上下管直通；

功率环路尽可能缩小，降低外部寄生叠加源极 Ls 的负面影响。

驱动与可靠性通用设计

SiC 标准驱动电压：+15V/+18V 开通 /-5V左右 关断，负压抑制体二极管导通、降低误导通风险；

短路保护：驱动芯片需集成 100ns 级快速短路检测，SiC 短路耐受时间短，硬件限流 + 软件双重保护；

高压绝缘：TO-247 引脚爬电距离满足安规，800V 母线 PCB 引脚间开槽增强绝缘；

量产工艺：插件波峰焊温度曲线匹配塑封耐温，引脚无虚焊、冷焊，户外设备做三防涂覆。

EMI 优化要点

TO-247-4：波形干净，可减小输入共模电感、Y 电容规格；

TO-247-3：开关振荡大，需增加滤波器件，预留更大 EMI 调试空间；

功率地层完整分割，驱动地、功率地、采样地单点共地，避免地环路噪声。

八、选型与设计高频避坑总结

误区 1：大功率硬开关为省成本选用 TO-247-3

后果：损耗飙升、散热器体积加大、EMI 超标，综合硬件成本反而更高；硬开关＞80kHz 优先 TO-247-4。

误区 2：TO-247-4 布线时 KS 与功率 S 共地走线

后果：开尔文结构失效，性能倒退至 3 引脚水平，振荡、损耗全部反弹。

误区 3：同一桥臂混用 TO-247-3 与 TO-247-4 并联

后果：封装寄生差异导致动态不均流，单管过热失效。

误区 4：TO-247-3 高频硬开关使用小栅阻 Rg

后果：剧烈栅极振荡、桥臂误导通，极易炸管。

误区 5：忽视 TO-247 通孔散热器安装扭力，导热垫接触不良

后果：热阻成倍上升，满载器件超温降额，长期运行老化加速。

碳化硅器件（SBD+MOSFET+模块）产品介绍文章链接

  

1.SiC SBD产品介绍

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMG7PHYeeuEAjFFtzQoIt4ZGWtibzcdI6iarsTCU3XvZpmicL1Q3D3icQporBGEibfeiaLLcxwcNyc1XLyGfV5w79SOAB6j4QRW4WKRY/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=7)

[1200V 20A-100A的SiC SBD的产品及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247513753&idx=1&sn=00ba00e4f43c48a5a4b0cb55aa8f5d7d&scene=21#wechat_redirect)

  

2.SiC MOSFET产品介绍

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpONiafQO306II3aOAiaFjupvZuqzmAg5fZW7tHUNDBGlQ7ibzicRE44t9ECzUjf2DGqUza49Z0UOjjmernJpX5WqQut875v6IG91LA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=8)

[8种封装的国产碳化硅(SiC)MOSFET产品选型及设计应用介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247506596&idx=1&sn=c317d83220c0fd6f936ac79de4b611b3&scene=21#wechat_redirect)

  

[TOLL封装的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247508515&idx=1&sn=82d82ca04e03b63cc702cb27350ae7e1&scene=21#wechat_redirect)

  

[采用TO263-7封装650V～1700V的SiC MOSFET](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247514170&idx=1&sn=4f00ad9088d9ae52f83680f6f0d4d6d2&scene=21#wechat_redirect)

  

[TOLT封装的SiC MOSFE产品及应用介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247539705&idx=1&sn=db2369c1e63b225addf08cc23cc0ebd2&scene=21#wechat_redirect)

  

[TOLL和TOLT封装的SiC MOSFTE应用对比](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247539428&idx=1&sn=6bdc5cb8a49590ef8d291338747a79b6&scene=21#wechat_redirect)

  

3.SiC 功率模块产品介绍

  

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOiamnJiboK9k3AsBlgsFb0DQ7LvswNNcXvSCgZF2jtcQ6nKJib2HiaticBTAntbic1HfmF3vjUTSkwog3OQMN1J4koaeZhTwYnrhEiaw/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=9)

[10种封装的碳化硅MOSFET和11种封装的SiC功率模块的产品介绍及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247533514&idx=1&sn=5a094030fb5da795f6e432cf3bcc332c&scene=21#wechat_redirect)

  

[HPD封装的SiC功率模块的产品介绍](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517124&idx=1&sn=35085cc392a067787930bf863a134590&scene=21#wechat_redirect)

  

[MD3系列的三相全桥碳化硅（SiC）功率模块的产品及应用场景](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247519655&idx=1&sn=079d26a795b2ff807b28e5736e8b06d9&scene=21#wechat_redirect)

  

[MEK6封装三相全桥碳化硅模块在载人小型飞机电调系统的突破性应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517193&idx=1&sn=684c24f1755b073b770c1c7ab9cc50ad&scene=21#wechat_redirect)

  

[62mm封装的SiC功率模块的产品及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247515543&idx=1&sn=9b90b76843b8453c434ffd9ada6cbd7f&scene=21#wechat_redirect)

  

[DCM封装的碳化硅（SiC）功率模块的产品介绍及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517694&idx=1&sn=1679554149297473be8c46272265d3a0&scene=21#wechat_redirect)

  

[Econodual封装1200V1000A的SiC功率模块产品介绍及仿真测试](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247513868&idx=1&sn=0dc0d8b427d47c622018c5d97ffc080a&scene=21#wechat_redirect)

  

[34mm封装碳化硅MOSFET半桥模块，助力工业电源（焊机逆变、感应加热设备、高频逆变器、不间断电源）的高效化和小型化](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247507568&idx=1&sn=19b012f5ecd5e3f9bbcc07551f73f03e&scene=21#wechat_redirect)

  

[Easy封装的碳化硅（SiC）功率模块的产品介绍及应用](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517622&idx=1&sn=d7ae98ac554700ccdf005e03e189705e&scene=21#wechat_redirect)

  

[SM8贴片塑封SiC半桥模块，具有顶部散热层，集成了NTC温度传感器，适合紧凑、轻便、高效率的应用场景](https://mp.weixin.qq.com/s?__biz=MzkxMDI0NzgzMg==&mid=2247517087&idx=1&sn=2aa39b989036cb20954d564dd5ad19a8&scene=21#wechat_redirect)

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpOYf8wwbdeN2Fccp72wiaWDdzcg4iaLxUHEPMnzGoO0QFubXRtRJ1uYeMicRd8fAib0Qz940Dp00cKictenlnZ9v3fXqJDOAquuJRFo/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/w7mE225tvpNmaP2QficgrgKQFQXTHAzz6mqJTl7vrRR7rq1223MOlzZWvvWibWcAVymgrkcOadba13AicBwoUGqD0V5zmoJwtib3MGVutTcAoS8/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=31)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpNPENV9qicOmaZtic8cBy5ib41ibaWrLQIvFAVpVmZbEicZROVjwbcMUDRIuCjFlpjc43vlEuddfWdtJlMcbwb28ib4Uyftj7ia35UnBU/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=61)