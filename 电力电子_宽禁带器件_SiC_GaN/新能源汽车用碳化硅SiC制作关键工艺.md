# 新能源汽车用碳化硅SiC制作关键工艺


> 原文地址: [https://mp.weixin.qq.com/s/KTSGbMKlRBZMVGKUHan1cw](https://mp.weixin.qq.com/s/KTSGbMKlRBZMVGKUHan1cw)

**文章来源：**

**前言**

相比硅基功率半导体，碳化硅功率半导体在开关频率、损耗、散热、小型化等方面存在优势，随着新能源车企特斯拉大规模量产碳化硅逆变器之后，更多的新能源车企也开始量化碳化硅器件产品。本文主要介绍碳化硅产品的应用方向和生产过程。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaAWSXFuaSXvia8PjQ4udicWV0M8NYTDplFqbRKDDbvJTDzPZmuibSCvIgWDVacUWENs9DXODcDjnrg/640?wx_fmt=png&from=appmsg)

**应用方向**

车载领域，功率器件主要用在DCDC、OBC、电机逆变器、电动空调逆变器、无线充电等需要AC/DC快速转换的部件中（DCDC中主要充当快速开关）。

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZrRwo7ric7t5dk7aDYebnL8NGJABVwIq5HaYeDqicCaxxBiazcZlic6cgoQ/640?wx_fmt=png&wxfrom=13&tp=wxpic)

图源：博格华纳  

相比硅基材料，碳化硅材料拥有更高的临界雪崩击穿场强（3×106V/cm）、更好的导热性能（49W/mK）和更宽的禁带（3.26eV）。禁带越宽，漏电流也就越小，效率也越高。导热性能越好，则电流密度就越高。临界雪崩击穿场越强，则可以提升器件的耐压性能。

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZRYkDpPlvH1QlbRPqLny8Y8zYKZKib5XiaZJTYOGdMp985pdlgPW0G8pg/640?wx_fmt=png&wxfrom=13&tp=wxpic)

因此在车载高压领域，由碳化硅材料制备的MOSFET和SBD来替代现有的硅基IGBT和FRD的组合能有效提升功率和效率，尤其是在高频应用场景中降低开关损耗。目前最有可能在电机逆变器中实现大规模应用，其次为OBC和DCDC。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsliaAWSXFuaSXvia8PjQ4udicWfPGCq0Yyap2LKNBIDicBEicxJPstkQfKIM9pEVZhNsicmKwNrwrrN5AEA/640?wx_fmt=jpeg&from=appmsg)

在800V电压平台中，高频的优势使得企业更倾向选择碳化硅MOSFET方案。因此目前800V电控大部分规划碳化硅MOSFET。

平台级别的规划有现代E-GMP、通用奥特能（Ultium）-皮卡领域、保时捷PPE、路特斯EPA，除保时捷PPE平台车型未明确搭载碳化硅MOSFET外（首款车型为硅基IGBT），其他车企平台均采用碳化硅MOSFET方案。

800V车型规划的话就更多了，长城沙龙品牌机甲龙、北汽极狐S HI版、理想汽车S01和W01、小鹏G9、宝马NK1、长安阿维塔E11均表示将搭载800V平台，此外比亚迪、岚图、广汽埃安、奔驰、零跑、一汽红旗、大众等也表示800V技术在研。

从Tier1供应商800V订单获取的情况来看，博格华纳、纬湃科技、ZF、联合电子、汇川均宣布获得800V电驱动订单。

而在400V电压平台中，碳化硅MOSFET则主要处于高功率以及功率密度和高效率的考量。如现在已经量产的特斯拉Model 3\\Y后电机，比亚迪汉后电机峰值功率200Kw左右（特斯拉202Kw、194Kw、220Kw，比亚迪180Kw），蔚来从ET7开始以及后续上市的ET5也将采用碳化硅MOSFET产品，峰值功率为240Kw（ET5为210Kw）。此外，从高效率角度来考虑部分企业也在探索辅驱用碳化硅MOSFET产品的可行性。  

除电控产品外，部分企业在OBC和DCDC产品中也逐步采用碳化硅MOSFET产品，如欣锐科技已经在小三电（OBC产品）中采用该方案。  

综合来看，仅电控产品来看碳化硅MOSFET在800V平台的应用确定性要强于400V平台，而对于小三电产品中，当下最大的制约因素为材料成本，短期替代性不强。  

**碳化硅的生产过程**  

和其他功率半导体一样，碳化硅MOSFET产业链包括长晶-衬底-外延-设计-制造-封装环节。  

**1、长晶**  

长晶环节中，和单晶硅使用的提拉法工艺制备不同，碳化硅主要采用物理气相输运法（PVT，也称为改良的Lely法或籽晶升华法），高温化学气相沉积法（HTCVD）作为补充。核心步骤大致分为：  

  

-   碳化硅固体原料；
    
-   加热后碳化硅固体变成气体；
    
-   气体移动到籽晶表面；
    
-   气体在籽晶表面生长为晶体。
    

  

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZzmVaiaI7hsicUjfVQqcqibc3YcHeetkjsOerOOfYItGREibEMbicgczKnGg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

来源：《拆解PVT生长碳化硅的技术点》

工艺的不同导致碳化硅长晶环节相比硅基而言主要有两大劣势。  

  

-   生产难度大，良率较低。碳化硅气相生长的温度在2300℃以上，压力350MPa，全程暗箱进行，易混入杂质，良率低于硅基，直径越大，良率越低。
    
-   生长速度慢。PVT法生长非常缓慢，速度约为0.3-0.5mm/h，7天才能生长2cm，并且最高也仅能生长3-5cm，晶锭的直径也多为4英寸、6英寸，而硅基72h即可生长至2-3m的高度，直径多为6英寸、8英寸新投产能则多为12英寸。因此碳化硅的常称之为晶锭，硅则成为晶棒。
    

  

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZp6ByVIFo0tcObSMPWu8DGbmOsQ9oWiac9iahBm22BibEZB3CCYNK0Kyuw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

碳化硅晶锭  

**2、衬底**

长晶完成后，就进入衬底生产环节。经过定向切割、研磨（粗研磨、精研磨）、抛光（机械抛光）、超精密抛光（化学机械抛光），得到碳化硅衬底。衬底主要起到物理支撑、导热和导电的作用。加工的难点在于碳化硅材料硬度高、脆性大、化学性质稳定，因此传统硅基加工的方式不适用于碳化硅衬底。

切割效果的好坏直接影响碳化硅产品的性能和利用效率（成本），因此要求翘曲度小、厚度均匀、低切损。目前4英寸、6英寸主要采用多线切割设备，将碳化硅晶体切割成厚度不超过1mm的薄片。

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZYfWydYN2Bwb0xdibJ1esczJ3rMXsaKwYlY94wsgp2CONnxWyUwP23pQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

多线切割示意图

未来随着碳化硅晶圆尺寸的加大，对材料利用率要求的提升，激光切片、冷分离等技术也将逐步得到应用。  

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZmhk6vGcQ4icevRqR3nW7iawDKHbicicYrZ4Z13ZsdwkCKY9EwRqlXiaiaKrw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)英飞凌曾在2018年收购Siltectra GmbH，后者开发了一种成为冷裂的创新工艺。相比传统的多线切割工艺损失1/4，冷裂工艺只损失1/8的碳化硅材料。

  

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZTmxn7nFUcffEKudNt8EDrGqwLA4T5uXpfde0wskK3mMa884wp7wEXw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**3、外延**

由于碳化硅材料不能直接在衬底上制作功率器件，需额外在外延层上制造各种器件。因此衬底制作完成后，经过外延工艺在衬底上生长出特定的单晶薄膜，衬底晶片和外延薄膜合称外延片。目前主要采用化学气相沉积法（CVD）工艺制作。

**4、设计**

衬底制作完成后，则进入产品设计阶段。对于MOSFET而言，设计环节的重点是沟槽的设计，一方面要避免专利侵权（英飞凌、罗姆、意法半导体等均有专利布局），另外则是满足可制造性和制造成本。

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZjSHawXFXDmJibaOVlO5BoKicB0o8hhrb6CAAOHp2U0dCAwUZhFAyibZ6w/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

**5、晶圆制造**

产品设计完成后便进入晶圆制造阶段，工艺大体与硅基类似，主要有

  

-   图形化氧化膜，制作一层氧化硅（SiO2）薄膜，涂布光刻胶，经过匀胶、曝光、显影等步骤形成光刻胶图形，最后通过刻蚀工艺将图形转移到氧化膜上。
    

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZdGrUZhUmMOY8HLagHNeRfQoHDCzI2PrHknScqzPGicibsfmte3vFvsMw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

-   离子注入，将做好掩膜的碳化硅晶圆放入离子注入机，注入铝（Al）离子以形成p型掺杂区，并退火以激活注入的铝离子。移除氧化膜，在p型掺杂区的特定区域注入氮（N）离子以形成漏极和源极的n型导电区，退火以激活注入的氮离子。
    

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZYRibcCAUh2ibHL0s95Z53dZYPbm3FaEM83Gnmdqask70IdziaZAuYumpw/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

-   制作栅极。在源极与漏极之间区域，采用高温氧化工艺制作栅极氧化层，并沉积栅电极层，形成栅极（Gate）控制结构。
    

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZ5UJWylaoryWPdsf8DiaZxO4yZp4mZaCr3EeVWhGibiasdBXRYZPrLmibvA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

-   制作钝化层。沉积一层绝缘特性良好的钝化层，防止电极间击穿。
    

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZkicO2Q6JN7qA5tRvnA335EuxR0icbr6UzhUUBhLMKc1I2NssMCAIIkibg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

-   制作漏极和源极。在钝化层上开孔，并溅射金属形成漏极和源极。
    

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZ0GPhO1KuZKCn6ypfSl5VwaqSZ8NY6ZcevQMYDMY4nRPHTEqibP5rhhg/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

摘抄自：信熹资本

虽然工艺层面与硅基差别不大，但由于碳化硅材料的特性，离子注入和退火均需在高温环境下进行（最高1600℃），高温会影响材料本身的晶格结构，难度上升的同时也会影响良率。此外，对于MOSFET部件而言，栅氧的质量直接影响沟道的迁移率和栅极可靠性，由于碳化硅材料中同时存在有硅和碳两种原子，因此需要特殊的栅介质生长方法。（还有一点便是碳化硅片是透明的，光刻阶段位置对准也难于硅基）  

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZcjicV3IauBicvUhIYAF0YeNtREsSNHDVpichlESpedEQO5gzu5VuyaanA/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

晶圆制造完成后，将单个芯片切割成裸芯片后，即可根据用途进行封装。

分立器件常见的封装。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaAWSXFuaSXvia8PjQ4udicWUJgUxbgHD3bNG1xr2XKWxkMIW4UVTmMpCiaSHBJNU58QLNIJHfkfEYw/640?wx_fmt=png&from=appmsg)

车载领域由于功率和散热要求高，并且有时需要直接搭建桥式电路（半桥或者全桥，或直接和二极管一同封装），因此常直接封装成模块或者系统。根据单个模块封装的芯片数量，常见的形式有1 in 1（博格华纳）、6 in 1（英飞凌）等，部分企业采用单管并联的方案。

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZrgyUzmfiaozXlPGhYCKsbKVjicjWpKG6CfpPQEzRf2KibBOKZ7RiayzGUQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

 博格华纳Viper，支持双面水冷，支持碳化硅MOSFET

![](https://mmbiz.qpic.cn/mmbiz_png/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZJgzOMMpiaDPEccWI7nCCqWUFrVXWqIyEdW4vjFAWsOljhGwfIpAGBDQ/640?wx_fmt=png&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

 英飞凌CoolSiC™ MOSFET模块

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsliaAWSXFuaSXvia8PjQ4udicWBpAolAePqPHkTz9LriaQesKOg0fofI3siaUEfgK5F4kJwaHLA1jSicDtQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/87GtaTF2DXsy6OKtH5crJvEGGaBqmv1BvuMxMEAcoqC9TQLlqXrvfJpQOcy8puCoTMKlFS4x2E3pygWJppJE1Q/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

和硅基不同，碳化硅模块工作温度较高，大约在200℃左右。传统的软钎焊料温度熔点温度较低，无法满足温度要求。所以碳化硅模块常采用低温银烧结焊接工艺。

模块制作完成后便可应用至零部件系统中。

![](https://mmbiz.qpic.cn/mmbiz_jpg/ZvCIYHngAoyt1zuwslFTcGg3DlqZgStZJaPrMjMbuibJ9exvjbMqMv9qiadTmThiaVmmhyLsVBdytEKbugoL3U6ZA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

特斯拉Model3电机控制器，裸芯片来自ST，自研封装和电驱动系统。

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslVkNiafwyia0fSaqpCwauMUMX0KISwgGGl2MDNhJKIBJg6lkQBfUGgSyLVxhtCj4CCzc5Q10y33C8Q/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

-   **声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**
    
-   ![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)