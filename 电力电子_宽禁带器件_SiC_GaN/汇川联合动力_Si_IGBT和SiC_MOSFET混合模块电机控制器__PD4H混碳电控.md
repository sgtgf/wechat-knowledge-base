# 汇川联合动力：Si IGBT和SiC MOSFET混合模块电机控制器——PD4H混碳电控


> 原文地址: [https://mp.weixin.qq.com/s/3bz1-bgOv9tLUtT\_F2tnaA](https://mp.weixin.qq.com/s/3bz1-bgOv9tLUtT_F2tnaA)

  

**研发背****景**

汇川联合动力始终致力于技术创新，持续优化电驱动系统效率，为终端用户提供续航里程提升的卓越体验。2022年9月，公司成功量产了应用于整车800V电气架构的碳化硅(SiC)电机控制器，助力整车续航里程提升4%以上，开启了国内厂商将1200V SiC器件应用于电动汽车驱动电机控制器的先河。尽管SiC器件带来了效率上的飞跃，但其高昂的成本却成为大规模普及的绊脚石。

  

汇川联合动力历时一年多进行技术攻坚和产品研发，于近日推出了采用Si和SiC混合功率模块的电机控制器产品——PD4H混碳电控，为客户提供了兼具高性能与高性价比的理想选择。

**产品详解**

PD4H混碳电控基于第四代电机控制器平台进行开发，采用英飞凌新一代的IGBT和SiC MOSFET混合模块，优化并利用EDT3 IGBT 和Gen2 SiC的技术优势，使得两种芯片性能兼容匹配，发挥不同芯片在不同工况下的技术优势，具备效率高、兼容性强、性能强劲等特点，其峰值功率可覆盖150~250kW的动力总成系统，满足A/B/C级轿车、中大型SUV和MPV等多种车型的动力输出要求。当前该产品已完成A样的开发与验证。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslYwxm3CXUzgxsEuNakTQib5pGaPGY0EotBadavJ6RhPL0vc4lxYfS171zRa3pyzHvuxOyJzl0dtMA/640?wx_fmt=png&from=appmsg)

  

左图：PD4H混碳电控

  

       右图：PD4H混碳逆变模组

  

凭借在电控产品领域Si IGBT和SiC MOSFET器件应用的深厚积累，以及对电驱产品与整车应用场景适配的深刻洞察，汇川联合动力充分挖掘混合器件在电应力和热应力方面的边界应用能力，使得PD4H混碳电控具有以下优势：

**@效率高**

PD4H混碳电控CLTC工况实测效率高达98.5%，较采用同代Si基器件的电机控制器效率提升1.5%。混碳电控的高效率得益于其优异的动静态特性。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7Ftibib3Kb1MyT8aicZwI5GqzssoHTWwVicaqgsfwdTQBhyFkd9uDTLURx9mP0JhThEP8WXRKF5djWlgSrA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

Si-SiC混合功率模块的静态特性

  

由于在传统Si基功率开关器件中加入了部分SiC芯片，其小电流段因此具备了SiC的低导通损耗特性，与Si器件相比，在150A条件下导通损耗降低了约23%。此外，SiC更快的开关速度也降低了开关损耗，最高在150A条件下降低约35%。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7Ftibib3Kb1MyT8aicZwI5GqzssoRA3e3fs7QkIxhibd8sI8QyEuJCRvic5ib9YwCDFOKpZOo0bZFLiccib8sKA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

导通损耗对比

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7Ftibib3Kb1MyT8aicZwI5GqzssomalqaCnPBkmZvUFa8jialLLK746o71YOicdcz3cRgZF4aUK7ibZTXpEicA/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

开关损耗对比

  

PD4H混碳电控为客户在效率和成本之间提供了优秀的解决方案，其成本较全部采用SiC器件大幅下降，在工况效率仅损失0.3%的情况下，依然可以为整车带来约3%的综合续航里程提升，从而有效地降低了电池成本。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYwxm3CXUzgxsEuNakTQib5OGicUJeCZFVeu9A7XvBicshG9AliaXvicutrXkASiaKrTpicahMppNUmZC5A/640?wx_fmt=jpeg)

  

基于CLTC工况的整车收益

  

**@兼容性强**

PD4H混碳电控产品功率模块采用的是标准HPD封装，与当前主流的Si和SiC模块的封装保持一致，其逆变模组采用电容、功率砖和控制板叠放的结构，尺寸仅为190×150×90mm，外部接口完全兼容当前汇川联合动力的逆变砖、三合一和多合一等产品，便于客户在现有产品上直接替代升级以降本提效。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslYwxm3CXUzgxsEuNakTQib5IQoBJb95ueRbtsaCH8UGcdZgKbQaqqee86s5VrkyQJ4JqYUb8NBMmw/640?wx_fmt=jpeg)

  

混碳逆变模组尺寸

  

在应用电路设计上，PD4H混碳电控产品既支持两路驱动独立控制Si和SiC的方案，也兼容一路驱动同时控制Si和SiC的方案，后者可适配当前主流的驱动芯片，无需开发专用的驱动芯片，其硬件电路设计、软件控制策略与汇川联合动力当前产品兼容，具有较高的成熟度，在现有产品上无需做过多的设计更改即可升级。

  

**@性能强劲**

  

得益于汇川联合动力深厚的功率器件边界应用能力，通过优化的驱动和控制策略保证了Si和SiC芯片的均温，且器件结温支持长时175℃工作，PD4H混碳电控峰值功率可达250kW，对应的母线电压范围覆盖210~485VDC，电动工况下峰值电流可达620Arms。下图为PD4H在485V母线电压、620Arms相电流和65℃冷却液温度条件下的混合模块实测温度云图。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7Ftibib3Kb1MyT8aicZwI5GqzssoW1RTCg6w4VXTicROmYiaYATHNyMKp0emzOiczEUoYddPicYk7qBWUV4S5g/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

实测温度云图

  

**关键技术优势**

  

功率模块中Si与SiC器件的混合应用，增加了驱动设计和软件控制的复杂性，但同时也为驱动参数和控制策略适配设计提供了更多的自由度。这是发挥混合模块优势的重点与难点所在。汇川联合动力以工匠精神精心打磨混合模块应用设计的每一个细节，精益求精，旨在充分发挥混合器件的强大性能，并兼顾混合器件应用的可靠性。

  

**@更优的驱动参数匹配**

  

  

Si-SiC混合模块采用了Si-IGBT、SiC-MOSFET和Si-FRD三者并联的方案。其中，MOSFET与IGBT在开关速度和导通压降上的协同，以及FRD与MOSFET体二极管的协同，是驱动参数匹配的技术难点。在设计混碳模块的驱动参数时，我们主要从以下三个方面进行考虑：  

  

▶  驱动电压的选择需要平衡模块在短路时的耐受能力与低导通损耗之间的矛盾；

  

▶  驱动参数的设计需兼顾全温域、全电流范围内FRD的振荡特性，以及MOSFET体二极管的反向恢复特性；

  

▶  IGBT和MOSFET的开关延时设计需兼顾各器件的电流/电压耐受能力与低开关损耗的需求。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7Ftibib3Kb1MyT8aicZwI5GqzssoWwXzrxiaV5gDDIUGMm4S6KDb1kst0iceOUWjAWnicrzWwVJibrGA30iaJkQ/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

开通过程

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/DpeVq9ia7Ftibib3Kb1MyT8aicZwI5GqzssoJSgGjmVu0S2Nev6068yL15Wy24eQibpXxySoMlfP1mscakWtVCltuug/640?wx_fmt=other&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

关断过程

**@更灵活的控制策略**

  

Si-SiC混合模块存在两条控制通路，即IGBT+FRD通路和MOSFET通路。两条控制通路损耗、热阻的差异，以及控制的独立性，使得模块控制策略与整车工况适配的优劣成为了混合模块应用的关键。PD4H混碳电控具备更灵活的控制策略，主要体现如下：

  

▶  结合整车工况，调整IGBT和MOSFET的开关状态和时序，兼顾低损耗和器件电应力耐受，实现了效率的提升；

  

▶  调节IGBT、MOSFET和FRD的导通时间比例，保证了各器件的相对均流和绝对均温，实现了强劲的电流输出能力；

  

▶  灵活切换控制通路，实现一路控制通路异常时的整车跛行控制，减少了整车抛锚的概率。

来源：汇川联合动力

**声明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。**  

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsl3hte5TGNd1rkG4U8YHauAibeANDxXDLib2f0iamUlPVUa5HflhfheiaVMby4JxWyIyFnrv19DEiarQKw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请添加个人微信，并备注单位+姓名+研发方向。

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmSS80kzCfTUHPJEKDjyzSCeXic4QdL4Pe8H0DAznZ4t7Vgicz6ibgp6rGzplvv9wvHpsLfWEz9Mz6eg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLslRWJA1libIEbpaQ1mjeiaqqbxW3JSicMM8aLuYByKmCC8zZVJ4y1icVvFKhGLENr7XQO8zSvZZia6Q0Ew/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)