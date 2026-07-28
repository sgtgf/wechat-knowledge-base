# 三电平全碳化硅（SiC ）功率模块的技术及应用解析


> 原文地址: [https://mp.weixin.qq.com/s/AHagqy8twGemK4Orvzg-iw](https://mp.weixin.qq.com/s/AHagqy8twGemK4Orvzg-iw)

# I 型三电平=**无源二极管中点钳位 I-NPC**，单相竖直 4 颗 SiC MOS+2 颗 SiC 钳位二极管集成在功率模块内部，是大功率 1500V 光伏、大容量储能最经典高压三电平方案；全SiC替换硅IGBT后完美弥补原生内外管损耗不均短板。

下面从**模块拓扑特性、应用优势、落地领域、硬件 + 软件设计要点**完整拆解。

## 一、SiC I 型三电平模块拓扑与器件本体特性

###   

### 1、拓扑结构定义

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPpfIzlehjtQs2bCpYQ0dRqufzuA5Br53FLkRKMqdW9LcJXfyqY3601SMcS9ejcRfY02ia0OewCozFsia1OyNf4Cdiah5PratKob8/640?wx_fmt=png&from=appmsg)

I 型三电平模块拓扑图

###   

单相桥**4只串联SiC MOS（T1/T2/T3/T4）+2 只 SiC SBD 钳位二极管**，直流母线由上下两只串联支撑电容引出中点，依靠两只 SiC 钳位二极管把零电位钳位至母线中点，输出**+Vdc/2、0、-Vdc/2**三电平；**全部 SiC 器件额定耐压只需 Vdc/2**，1500V 直流母线标配**1200V SiC MOS+1200V SiC SBD**，无需 1700V 高压器件。

外管 T1、T4：靠近正负母线，主要承担导通损耗、低频换流；

内管 T2、T3：靠近交流输出，全工况高频开关、开关损耗集中（NPC-I原生痛点）；

D5/D6 SiC 钳位 SBD：零电平续流通路，无反向恢复损耗。

###   

### 2、SiC 模块化封装特征

###   

量产SiC I-NPC模块主流：Easy2B、Easy3B  I型模块，模块DBC基板对称布线、低杂散电感（Ls＜8nH）、银烧结芯片，额定结温 175℃，内部 SiC MOS 与 SiC SBD 配比出厂定型，省去分立器件搭架布线成本。

### 3.I 型三电平模块产品

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNibApRjWwkxSkFrQjfEuGHyvSTpWB8tYTdW7h3lPmAFdfANujfaGfBS1YyX0P7OkXlR0NXVhJrTYDibHtbVicsWia3XPUknAdawxQ/640?wx_fmt=png&from=appmsg)

Easy-2B封装三电平模块拓扑图（电压1200V,电流210A)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPCiaV8B23zMKQVr6O29mU0JYzHb1vsC9lwZOKqVFBsQ1HqL2mujiaJVnwicoKypg6glvpichJv8LmxZzw7SQvqzWC0tkickIvSAXdQ/640?wx_fmt=png&from=appmsg)

Easy-3B封装三电平模块拓扑图（电压1200V,电流380A)

###   

### 4、SiC 相比硅 I-NPC 核心器件变化

###   

### SiC MOS 单极性导电，无少子拖尾电流，内管高频开关损耗下降 70%+，改善 I-NPC 内外管温升不均衡缺陷；

###   

### SiC 钳位 SBD Qrr≈0，零电平续流无反向恢复尖峰，消除硅 FRD 续流损耗；

###   

### 开关频率由硅方案 3～8kHz 提升至20～35kHz。

##   

## 二、SiC NPC-I三电平整机应用优势

###   

### 1、对比硅 IGBT NPC-I

###   

### 效率大幅提升：满载效率≥99.2%，轻载（20% 额定功率）效率提升 1.2%～2.0%；

###   

### 高频小型化：滤波 LC 体积缩减 40%～50%，整机功率密度提升 30%+；

###   

### 高温裕量大：SiC 耐高温特性缓解内管过热，同等散热器功率扩容 15%～20%；

###   

### 钳位支路全 SiC SBD，省去 RC 吸收回路，BOM 器件减少。

###   

### 2、对比 SiC 二电平拓扑

###   

### 高压成本最优：1500V 母线只用 1200V 成熟 SiC器件，二电平必须 1700V SiC器件；

###   

### 输出 dv/dt 减半、THD 更低，EMC 整改成本下降、共模干扰显著降低；

###   

### 母线电容纹波更小，直流薄膜电容容量减小 25%。

###   

### 3、对比 SiC T 型、ANPC 三电平

###   

I-NPC **独有优势：**

无源二极管钳位，无额外有源开关，模块 BOM 成本低于 ANPC，大功率整机性价比最优；

驱动通道少（4 路驱动 / 相，ANPC 6 路），驱动电源、驱动芯片成本更低；

拓扑工业应用超 30 年，控制方案成熟、算法开发难度低于 ANPC。

短板（SiC 可缓解但无法根除）：

内管 T2/T3 损耗集中、温升偏高；轻载中点电位漂移大于 ANPC。

##   

## 三、主流落地应用领域

##   

### 1、集中式 / 大功率组串光伏逆变器

###   

### 功率：250kW～1.5MW、DC1500V 高压光伏系统标配 SiC I-NPC；

###   

### 适配：地面集中光伏电站、工商业大功率组串逆变器，成本优先选型I-NPC而非 ANPC。

###   

### 2、大容量集装箱储能 PCS

###   

### 功率：500kW～2MW 高压储能变流器、1500V 电池簇系统；整舱集中式 PCS 优先 SiC I-NPC，兼顾成本与高压可靠性。

###   

### 3、大功率工业 SVG/APF 电能质量装置

###   

300kvar 以上静止无功发生器、有源滤波器，电网侧大功率电能治理设备。

### 4、大功率重载特种变频

###   

船舶岸电变流器、矿用中压变频器、风电全功率变流器。

5.直流充电桩

在中高功率（如150–350 kW）直流快充场景下，可使用更低耐压（如1200 V）器件构建800 V系统，显著降低开关损耗与电磁干扰（EMI），并支持更高开关频率以提升功率密度；但需应对复杂换流回路与驱动时序挑战，尤其在搭配SiC MOSFET时效率与密度优势更突出。‌‌

6.固态变压器（SST）

在中高压（如800–1500V母线）下以标准耐压器件（如1200V SiC/IGBT）实现高效率、低谐波、高功率密度，且结构对称便于模块化设计。‌‌

## 四、整机硬件 + 软件全维度设计要点

###   

### 1.驱动系统设计

###   

### 栅极标配：开通 / 关断独立栅阻 + 负压关断 (-5V左右)，内管 T2/T3 高频开关，关断电阻适当加大（15～30Ω）抑制振铃、外管 T1/T4 选用小栅阻提速；

###   

### 驱动时序互锁：硬件做逻辑保护，严格先关外管 T1/T4，再关内管 T2/T3，杜绝桥臂直通炸管；

###   

### 四路驱动电源相互隔离，强弱电分区，驱动走线就近模块端子缩短引线。

###   

### 2.中点电位控制

###   

### 软件主流方案：零序分量注入 SVPWM + 虚拟矢量调制，双算法配合把中点电压波动控制在 ±5% 以内；轻载、不平衡工况加大零序补偿带宽；

###   

### 硬件辅助优化：

###   

### 上下母线分压电容容差≤3%，优选同批次薄膜电容；

###   

### 大功率（＞800kW）整机增加有源中点均压电路，低成本方案并联小容量泄放电阻；

###   

### SiC 高频下中点电容充放电速率更快，控制环路带宽相较硅 INPC 提升一倍。

###   

### 3.功率回路与杂散电感管控

###   

### I-NPC存在主功率回路 + 中点钳位支路双环路，必须定制 I 型专用叠层母排，分别压缩两条环路面积，抑制 SiC 高速开关 Vds 尖峰；

###   

### SiC SBD 钳位二极管就近中点端子布置，缩短钳位引线，减小续流尖峰；

###   

### 1500V 高压机型严格按照安规规范设计母排爬电、电气间隙，PCB 开槽加强绝缘。

###   

### 4.损耗与散热设计

###   

### 器件筛选：同桥臂 4 颗 SiC MOS 同批次、Vth/Rds (on) 参数匹配，减小动态不均压；内管优先选用低 Rds (on) 规格 SiC器件；

###   

### 散热分级：≤300kW 风冷、＞300kW 整机标配水冷（Pin‑fin 水冷 SiC 模块）；内管对应散热器区域加大导热面积 15%；

###   

### 利用 SiC 第三象限同步整流：逆变续流时开通 MOS，用沟道导通替代体二极管，续流损耗下降 80%，大幅降低内管温升。

###   

### 5.EMC 与滤波设计

###   

### SiC 器件高频 dv/dt 高，交流侧加大共模电感、Y 电容容量，功率地与模拟地单点分开接地；

###   

### 高频工况适当优化死区时间（200～400ns），平衡损耗与 EMI 噪声。

###   

### 6.保护逻辑设计

###   

### SiC 短路耐受时间＜2μs，驱动内置硬件极速短路保护（硬件关断＜1μs），分内外管独立故障采样；

###   

### 新增中点过压 / 欠压保护，中点电压偏移超阈值先降功率、超限停机，防止器件过压击穿。

##   

## 五、选型落地总结

##   

## DC1500V、250kW～2MW、成本优先项目→SiC I 型三电平；

##   

## DC≤800V、≤250kW 中小功率→SiC T 型三电平；

##   

## 超高功率、损耗均衡要求极高、多机并联场景→SiC ANPC 三电平。

#   

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpO6LL2ibRcmyDTxkibHKWRwuZeRJ6cSwia1SZ1KTmKwLunNNyFeDbaNw17TibyagtM0wSAAaYQA7M5RUUVa5m0iaVXtbz3duV2jVDM8/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPDdPqex8ra8VbYQOzhJ8us9s1r71fu0gnCgPqib3EOyAAysmG9LbEbcELSHCuwK62p0OiaR73balwDnwOSATnnheBtxogUYJxJo/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPKDXRYyGgatyIFrEia17SZH3YSelp67OJUuwW9S34tibs8DqRmiam0hFVNib0CKSedqZ7rZdpxNGLf5njfSWy5ia7xaN73RhdZpWQ4/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOZsfHPKxeDRar9kW20EBic0ulRBiaqF0PMUbISRrgibGG4TV6Obe0f0VdmOoMxJ0M1vVHuK2zGXd5TJK2YiaVWmfFFqRKeO0HicgNA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)