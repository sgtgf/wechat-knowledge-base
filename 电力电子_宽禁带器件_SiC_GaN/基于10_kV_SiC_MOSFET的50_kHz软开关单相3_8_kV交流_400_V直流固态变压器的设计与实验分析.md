# 基于10 kV SiC MOSFET的50 kHz软开关单相3.8 kV交流/400 V直流固态变压器的设计与实验分析

原创 D. Rothmund, T. SiC碳化硅MOS管及功率模块的应用 2026-03-23 10:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/2kRvZuhftv97sL2FEd-ITw](https://mp.weixin.qq.com/s/2kRvZuhftv97sL2FEd-ITw)

文章来源: 苏黎世联邦理工院

作者：D. Rothmund, T. Guillod, D. Bortis, and J.W. Kolar

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOcprODXPkeAybTNmbWmz4UzR6EkHefoNU0udPUf8CJFUlYpO42VvicT30pia9NwjjEJGNW7bBGKzHZrBAfVYnQ6sHWXPGufuxX4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNwtuib1ojicEjHpw80vY51IALEEibZBYuqNpVmCyUHNiaNYbtiamicertK3klN7rlThWYUDzGSlicE9IRFticMJ1f6cuOz1AdqBziaDetI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPrsh1gwdicSnqgrYMEZeTup7xAGIzBOca5jpgLd9FLia1XqoibHa2KfP9bZrTqUUUdG2ichI2iapc86VHAiaYySPqn05rhTaiagRQdTY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPvnSnwacxmCRAl10Uq8qLT9fGvYXHeeADmaJHm2PaEiaRpAbFojNWe0p2Xtz4rCJbVjq4Kz2XzuEWXKFxr9OAVUjzfY0u27gjE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPBunvGeAYxPD9VFGznDNA8ic1ZWePCxfz8LV7CRGefDjTahQcy1uicrsJaPLWdwEsibibOuKzwxOGiaT44XtseekQS16onKh26yD2c/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNFqfP6BaGZA7wtBmiawhjmiaNJFCXHpsIPgtib6nuEhY0lgQavrO2bmJcxN1mUcyumdhba0mh7JnVwyMHmL2BL69EcKbZbL6hPXk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNsHdvMhOjmEbBVP18rSIyYicdcy7E227cQEUGLT0A7aXgenNB7iby8WZITwbJj9Tot9tHclvqLLZWARqHVUHhdNEXyxib1DjicE2I/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMuUnJkibOoRffnt1cer6ZBG3ia5ic7LKIOYJGNHzYeQJAiamlrYQW3Pj4xO2WdQs6kBSxtQPdDRA6JVKNY5h0IMj3qctTt4xHgXiaM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOSSx9j51SShNt448FiaOxKxd3nhvia60gmY0A4yU3Bj1I6EW0BiaYJkctDTzFtYqiadJyMwT1FfjRVnF9icqAn00TedibibQcjZsDfDM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNj76LA17O82ibok9UeeHOFUqJb8MBkrZoHe2SXpaC3FvInKIMAXJMfl69bwJwY2WXNbMCtAEMEjGk0ZAe1J50icsy1fpTaTPhr0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOibYyjJSa2NJOCDHkIG60susD1EibtpNlsZBaxmrPaQJQ23kxia7KuUTvFRIoNNlXXNz3FXkj4fvRlibWF7pEb5SEibRxibBHjQ0VCo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOBcPibx1FWHymicAcwcnv7X2ibKwMbwIteZogUxC65o5LtNEQ0AeU6agqTKU0GFmgf4PnSI30UAmD7gC91gk6j00TUibCSkgqIO6I/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPnXgdP0gmv6DnJkEvibq6riaCvJQyayG4JJ1TicP6Z0zZXyrsLP7Zu6etb42aF6V35yp5AZNkEUQxjQicHW5W9VCNWdKA5WXSrkvA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMaMRPsfdKgEDgbvD1qQN9iaXo9gqbyhup99BBdu03sWdTRuYbuD0HDHxghUEuLic1ibLKeX1LFkAsLKpd2fqsz1KGVhyibxKIvyhY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPUficvCfPKPFCOcYJIyxU9PRQ55wVF0odWMOVmBziagVjyj65vQMXppI7tCFXuWC5YVeIJ120tRNVomCZHicIEaSWpCogu9Om8Gk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMGkd1Kz8YaX94aa9JJw3FtGicwMJpqDtia3ia3jBBnVdHOdKoc3QHB7WvLsLjTVIWkZUrg7lBq6ab1HEu3iaoVdiakIscVWZC0mcSA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMFN400WaAia330EVZ2qibpuML85ticQwJHOyRkp6dtFSCKIWiaibUfg8ibjD0CCCIyyE6Ew9bFoQ8U1mcVDibke28FB5vTONp5cPRQVo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOpYSibIVRZCadicyb3VTRYdrZhYR4GH7x3I9MhaRh8knUJ0QGlguCmViaKRdiabU7rYfB5giaiaicypSHdKxib09hGJiaVJ8McFJoUu8jA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPsn1qyibRiaTARibfFb5czicNb8dialP2UZlpFFeLzicWcKVicz4TjFfCBraaFxPPp2SFXOeyQdvrPF0ol3wgtSX0fVgVStEc9wO5bS0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOduuB64Fb4JU8zGZ5OGXLzw6xF2r4hKgC1eArG9m9kOickNiaH1odlzEvMa6owbPpfs2GZ9IAe78uO0rics7PSulbME7ylNTrd2o/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPdJVPJjDAn7R8M4k5lPQvlMicMZY8g5RlXKU3qOprY1O5gymicbUtZNOz3zxYIHcC6SRcBVx4yLJML2U2hEL4xicp6aSgmA2bVRY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP5KOt0Bd8RvqZSSPNoicMxJCkClkicmKeA4fDzJhdaOujgSTlgh3pCicdG9H8y3PtLibEwrA7nkROuNprcQSsBdZvmDjaRd4QDStk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMKYoZ7XS2T0ZIAH8icENzVC9DWmhHp9AmHEgZGAhtYTCWhDEfE5zlZHzJJmLewvLI6sIIlvUsECZ3Y4OmoB0lEPiblCx0p25HJ4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNXicyDJjcRFsNqfhfAicRRRibW7Ru60dy8HIm0zOUXYqwHNURwJF3MM8tf8NmdpbuXSjb3qibCYV4gibQypsNthg9AD68RLpXYC9oA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNfibUMFJa3ticaicrVHuQ4wcsqAIawha1o8Zk7aOWKiaaZaLgatFvz7ytDNibIdxukqicnDzPB2ueGrsKfGaLLuic424ssQRJ7Nkj6G4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNo6iaFMetWIMHtt10pvzziaHmVY15KGW81DeBOEjKnsCpNqQS3ibwGG43mtb733YHdI52GSNsULgomzTBZE9iaPHhRsda7FYibQXyc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP7kYzoeYCnbn3wEib2nicqm0W4JiaDDHrpXTNrIgn0pIRiaTl7LDJ13SR3NegvglNM9GwHlJYlRlykN9CGibmVZTuvCaPBJ96tI1dM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO9KHnBgM3mWkz6mtnSkZWEfEGGyNcaExANCmuCBqzGjQ3n9ia7PVbmibN5nb7riak3SO8VvdeA7nJfoGxIBWZ7EVgawU7Axp55QU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPfquEDXa69Ec5e9mmhteJyr6M1GXfqFocLqMiaqnG3zJnjfHlwCRLhTW5zUHde5icm84LiaYZibwJNjic82jHeyVdpa7WIUicaxCdBY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOqUDjJ4hVWusLvzYundDvpJibhXTohgYGDDEygjAHBXeWls2B0TibDtO24oye26QaOpnjWVdibdZJvYOdozgn7z2gUhaRbVw7D6w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPZ6u2MZ7N3tkaheiaiaprfcyCYtCjLmB2cahPx7L93m71xz3R6pRqY6Pib93UPc5IYpodIV3lNxOZ1xjDMd3tpygZJ8TRhyUUO3c/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOfcc3f2tsdQkdMayh0UMm9aiboK4tkCWNNJChc5lvKoF2lDAW7aZJYBXlpNYK3FEdseojdZwZx4XgsbFv3znAGc0wtnafKXciaI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNia87LVNEqXEV0RibY6b8h10SKrJsFG9DzzJh0cP7qOulIkvzNxolV0QJn4oowxJNxibhZJ9G83uebA23lkDDFT2u2fGfvlYk1vM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPOapXCEAgGtN1p10gOKaXQzfZBibUKP0oTAnia0WaP4DSu5bAVB1w931b68mF0XduQaTLAgVBibG11XD3AVAce8Z5ChZPu3F6pms/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMJiatCv9cs3GAt2XSHBATNDUFNIr4zdx9tghlUWf3UMe5AqEbjyHZGUhcWZM7gA4Zwia6EzQ63G9zUEhHjSwfu6VKCx4NbgbUYY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOzZ0n33tmpr9ibnYEESK8ZroZ6wdgm41B7Rs6amibNodUT715qPwiac9r4wl0sQial2XA3QrMnNRuxdNP139XosIibVibusfO7iaGrRk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPKfxOThiaDzN5DPVhgPOcJvBphatf5COiacZvTOnvnxpOL6WxGYM3Mj6FR7Bzx8SOxsj46OabHeBPyqDMk04PpLQoQcmusPvox4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO7J6Ry36L3sd18CpH3OibLzZYa45WyeVJY2ib6Q3mibsZ84ZHxibRicv9GFqsRx3hNibt4SyEfJIBofapXo3wtLvQAxUbD64cribRf8A/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

这份会议报告（ETH Zurich，2018）展示了一套基于**10 kV SiC MOSFET**的**单相3.8 kV AC / 400 V DC固态变压器**，实现了**25 kW**功率、**50 kHz**高频软开关，整体效率达**98.1%**，功率密度**1.8 kW/dm³**。以下是对报告内容的总结，以及固态变压器的应用场景和SiC器件优势的分析。

## 一、报告总结

### 1\. 系统拓扑

**两级结构**：

**AC/DC 级**：3.8 kV AC → 7 kV DC，采用 **iTCM（集成三角电流模式）** 全桥，实现**全范围ZVS**，开关频率35–75 kHz。

**DC/DC 级**：7 kV DC → 400 V DC，采用 **半桥（MV侧）+ 全桥（LV侧）** 的隔离DC/DC，开关频率48 kHz，同样实现ZVS。

### 2\. 关键技术与设计

**10 kV SiC MOSFET**：高压、高频、低开关损耗。

**全软开关**：显著降低开关损耗，实测软开关损耗仅为硬开关的 **1/30**。

**高频变压器**：25 kW / 48 kHz，采用铁氧体U型磁芯，MV/LV绕组分层隔离，耐压15 kV，效率99.64%。

**高紧凑隔离电源与驱动**：

隔离电源采用分裂磁芯、串联谐振拓扑，耐压20 kV DC，耦合电容仅2.6 pF。

  

过流保护延迟仅 22 ns，可应对7 kV下1.2 MV/µs的电压瞬变。

### 3\. 性能指标

**输入级效率**：99.1% @ 25 kW

**DC/DC级效率**：99.0% @ >13 kW

**整机效率**：98.1% @ 25 kW

**功率密度**：1.8 kW/dm³（30 W/in³）

**输入电流THD** < 1%（通过LCL滤波与阻尼实现）

## 二、固态变压器的典型应用场景

固态变压器（SST）在中高压、高频、高功率密度场合具有显著优势，典型应用包括：

### 1. **数据中心供电**

替代传统工频变压器 + 多级变换，直接实现 **中压AC → 400V DC** 直流配电。

  

减少配电级数，提高效率，降低占地面积与散热需求。

### 2. **电动汽车快充站**

实现**10 kV/20 kV 中压电网 → 750V/400V DC** 的高频隔离变换。

  

支持大功率快速充电，减少配电变压器与充电模块间的中间环节。

### 3. **轨道交通与船舶供电**

用于 **牵引变流器前端**，实现中压电网 → 低压DC母线，减轻重量、提高效率。

  

高频隔离可优化系统体积与噪声。

### 4. **可再生能源并网**

用于 **中压直流微网** 或 **中压光伏/储能系统**，实现高效、双向能量变换。

  

软开关特性有助于提高系统可靠性与寿命。

### 5. **工业与电力配电**

替代传统工频变压器，提供 **电压调节、功率质量控制、直流配电** 等多功能集成。

  

特别适用于空间受限、对电能质量要求高的场合。

## 三、SiC器件在固态变压器中的应用优势

### 1. **高耐压、高频化**

SiC MOSFET 可实现 **10 kV、15 kV 单管耐压**，大幅简化中压侧拓扑（如本报告中MV侧仅用半桥）。

  

支持 **50 kHz以上高频开关**，大幅减小磁性元件体积，提升功率密度。

### 2. **极低开关损耗**

本报告中，**软开关下损耗仅为硬开关的1/30**，使高频运行成为可能。

  

即使在高频下，SiC器件的开关损耗仍可与导通损耗相当，利于实现高效率。

### 3. **高温、高可靠性**

SiC材料热导率高、耐温高（>200°C），在紧凑系统中更易散热。

  

配合快速过流保护（如报告中22 ns响应），可应对中压系统中常见的闪络、短路等极端工况。

### 4. **简化拓扑结构**

高压SiC器件可减少串联级数，避免多级模块间的均压、控制复杂性问题。

  

本报告中仅用 **单级AC/DC + 单级DC/DC**，系统结构显著简化，优于多模块串联方案。

### 5. **系统效率与功率密度提升**

相比传统IGBT + 工频变压器方案，SiC SST可将 **损耗和体积降低2倍以上**。

  

报告中整机效率98.1%、功率密度30 W/in³，在同类中压变换器中处于领先水平。

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPvr8ZqR5US9ViaVWlWX78Of3DNjBMXTsLjzOYQLqj8Ee6iaRtxaDdhjsuGs4LafYJich22TPYbnK7WCeZJcvmkaPHkg53fiaLEek8/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMb6q4H7J29q8EEovx1ibOtU1vvLTFYqxlqP6vQjRSxnhP4VFdice16LRjOiadkMgRjrumu2ERiaqVYDOibdDAyHsSTp10icz3OFv84E/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM7a1E47HWDsNpbW1NHxWlvHTbMgSAYjicL4BnNJmyO82GjOeJhjK1cUDuSZCNuZwcPjcVGPglkkLiaY07oicibG9ckBLwCkIbMpCQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOu6GBtA1iaq0SVlfe00undwLYn0GFID0TYasHVt4TXPe6qvg03m5DCUqbNwVqEYb5DWERNtqribE13weV1ZrpBHUydyVqTHuMSU/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)