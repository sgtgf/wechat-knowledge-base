# 综述系列 I 同济大学马志勋研究员团队：带有LC正弦波滤波器的永磁同步电机驱动系统有源阻尼策略综述与新扩展研究

原创 CES TEMS编辑部 CES电机与系统学报 2025-12-08 07:00 北京

> 原文地址: [https://mp.weixin.qq.com/s/Mo0Ag1RwpkfrySe2veRwog](https://mp.weixin.qq.com/s/Mo0Ag1RwpkfrySe2veRwog)

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KaAz0RgR4TBX1Id1iaKqWHsMJzF2444y9b5pRVKuu6jv7BTZepFh83z2A/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&wx_co=1)

**带有LC正弦波滤波器的永磁同步电机驱动系统有源阻尼策略综述与新扩展研究**

Xiang Wu1; Yongqi Ji1; Chao Li2; 

Yongxiang Xu2; Jibin Zou2; Lisi Tian1; 

Shuo Chen1; Zhixun Ma3; Yaofei Han3  

1.China University of Mining and Technology, Xuzhou, China

2.Harbin Institute of Technology, Harbin, China

3.Tongji University, Shanghai, China

**■**[在线阅读](https://ieeexplore.ieee.org/document/11189082)   ****■****[PDF](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=11189082)

X. Wu et al., "Review and New Expansion of the Active Damping Strategy of the PMSM Drive System with LC Sine Wave Filter," in CES Transactions on Electrical Machines and Systems, Vol. 9, No. 3, pp. 268-288, September 2025, DOI: 10.30941/CESTEMS.2025.00028.

**1**

**内容**

带有LC正弦波滤波器的永磁同步电机驱动系统具有固有的谐振问题，有源阻尼策略（AD）可在不引入额外电阻热损耗的情况下实现谐振抑制。 本文概述和分析了近年来带有LC正弦波滤波器的永磁同步电机驱动系统的有源阻尼策略，根据算法特点将其划分为固有阻尼法、状态变量反馈法和数字滤波器法。论文全面回顾、比较和总结了现有有源阻尼策略的稳定性、动态性能、鲁棒性和算法复杂性，并且对比分析了电控领域与并网领域中有源阻尼策略的细节差异。在此基础上，将现有电控领域中的有源阻尼策略进行扩展，分析了一种基于高通滤波器电容电流反馈（HPF-CCF）的有源阻尼策略应用于电控领域的优势。针对上述的有源阻尼策略，本文进行了仿真和实验结果分析。

**2**

**亮点**

**2.1** 总结分析了各类虚拟电阻放置位置对应的有源阻尼实现方式，并基于此给出有源阻尼简化设计的建议。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17iblJog5BONBxyWwFgYOJib28qNMBtdKlQGt7Dzf2okfuvfrl7jyzoOopxJBTVALy3Z9wtPs7uicdicpA/640?wx_fmt=png&from=appmsg)

  

**2.2** 将现有电控领域中的有源阻尼策略进行扩展，研究了一种基于高通滤波器电容电流反馈（HPF-CCF）的有源阻尼策略，通过理论分析、仿真和实验验证说明了HPF-CCF方法在动态性能、鲁棒性方面的优势，并可有效克服当谐振频率接近六分之一采样频率情况下的谐振抑制难题。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17iblJog5BONBxyWwFgYOJib28S19vaGJb5Jft7s2PaW4O3akg5D5b0ZegiaZbUrfuh5MKVJ5su1jwJXQ/640?wx_fmt=png&from=appmsg)

**3**

**结论**

本文综述了现有带LC正弦波滤波器的永磁同步电机驱动系统有源阻尼（AD）方法，包括基于固有阻尼的改进型AD方法、基于状态变量反馈的传统AD方法、基于状态变量反馈且含低通滤波器（LPF）和高通滤波器（HPF）的改进型AD方法，以及基于数字滤波器的AD方法。为解决谐振频率接近采样频率六分之一时的抑制难题，本文分析了一种基于HPF-CCF的AD方法扩展方案。文中对各类AD方法的稳定性、动态性能、鲁棒性及算法复杂度进行了详细对比，总结了不同工业场景下的AD方法选择建议如下：

1）若从相位裕度（PM）和幅值裕度（GM）角度评估控制系统稳定性，CCF、LPF-CCF与HPF-CCF具有一定优势；

2）在开环截止频率方面，为实现更优动态性能，HPF-CCF具有一定优势；

3）结合伯德图分析及实验结果，为保证控制系统鲁棒性，LPF-CCF、HPF-MCF与HPF-CCF具有一定优势；

4）若考虑AD方法的算法复杂度，CCF与ICF-SOGI方法仅需设计1个参数，操作更简便。

此外，基于上述分析与对比，本文将带LC正弦波滤波器的永磁同步电机驱动系统有源阻尼控制未来发展面临的挑战及可参考方向进行了总结和展望。

**4**

**团队介绍**

团队隶属同济大学“国家磁浮中心牵引供电研究室”，现有教师8人，其中教授/研究员2人，副教授/副研究员2人，助理教授及工程师4人。团队承担国家重点研发计划、国家自然科学基金重点项目、面上项目等科研项目10多项，发表学术论文100余篇，授权发明专利30余项。研究团队长期从事磁浮交通牵引供电领域发展中的重大关键性、基础性和共性技术研究、大功率多电平变流器调制、交流电机模型预测与无位置传感器控制方面的研究。

  

**5**

**作者介绍**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17iblJog5BONBxyWwFgYOJib28Wuo4BkiaqmCGPJQk0RmomICBTYAKEflzjhlibLGicDqZn9ibictaBXStk4Q/640?wx_fmt=png&from=appmsg)

**吴翔**，2019年6月至2025年11月于中国矿业大学电气工程学院工作，副教授。现为同济大学交通学院副教授，从事轨道交通牵引供电、大功率交流电机先进控制研究，近年主持或参加国家自然科学基金2项，主持江苏省自然科学基金1项，发表论文60余篇，授权发明专利20项，获中国煤炭工业协会科技进步二等奖1项。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ17iblJog5BONBxyWwFgYOJib28Dia82jZnLUw06QZB5eW2F8yBdj06iaHvUGKUl839H6vGxUQ8r43JvzYA/640?wx_fmt=png&from=appmsg)

**季永琪**，2000年出生于山东。2023年于青岛大学获电气工程及其自动化专业学士学位，现于中国矿业大学攻读电气工程硕士学位，研究方向为带有LC正弦波滤波器的永磁电机控制。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17iblJog5BONBxyWwFgYOJib28UibRSacMwNyWcqXmSOk1SnbhKVsCiaDyXmSMSfhCWZNuicrR47ia0W3N9A/640?wx_fmt=png&from=appmsg)

**李超**，1996年出生于山东。他于2018年和2023年在中国矿业大学分别获得电气工程及其自动化专业学士和硕士学位。现于哈尔滨工业大学电气工程及自动化学院攻读博士学位，研究方向为带有LC正弦波滤波器的永磁电机控制。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17iblJog5BONBxyWwFgYOJib28B5fWbHrkenGLKI2sibVw2f4VbjWP8f5icZO672qjhFLK83rGUSXlephQ/640?wx_fmt=png&from=appmsg)

**徐永向**，哈尔滨工业大学，教授，博士生导师，国家级高层次人才，特种电机研究中心主任。作为负责人或作为技术骨干承担国家自然基金、863课题、973课题、重大专项、企事业单位委托研制等课题50余项。获国家技术发明二等奖1项、省科技特等奖1项、省科技一等奖2项、省部级科技奖励二等奖3项、三等奖1项。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17iblJog5BONBxyWwFgYOJib288ANFrHND5L2via84kIAYewOP1CBoN7PtibBBW5xcUeF5vU9MQwjVQLeg/640?wx_fmt=png&from=appmsg)

**邹继斌**，哈尔滨工业大学，教授，博士生导师，特种电机与驱动控制系统团队学术带头人，中国电机工程学会电机专业委员会副主任委员，“国家精密微特电机工程技术研究中心”副主任、哈工大实验室主任。多年以来一直从事特种电机及电力电子驱动控制的研究，先后承担了国家自然科学基金课题6项，国家863课题2项，国家部级基础科研课题1项，国家重大专项课题2项，国家预研课题2项，国家配套课题1项，承担航天领域科研课题120余项。获得国家技术发明二等奖1项，国家科技进步奖二等奖2项，部级科技进步奖10项，发表论文300余篇，其中SCI、EI检索120余篇，获发明专利80余项，出版专著2部。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17iblJog5BONBxyWwFgYOJib28icjLglCr7N1jQyCOznaPQiaB5q13bjDgcUsjdhBrXcK3o6yFKgfbaBRg/640?wx_fmt=png&from=appmsg)

**田里思**，2015年于华中科技大学获得博士学位,现任中国矿业大学电气工程学院教授、博士生导师，江苏省“六大人才高峰”高层次人才，主要从事电力电子与电力传动相关领域研究工作。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17iblJog5BONBxyWwFgYOJib28cxReSF3RnxOsG2Hibe3SBNovFxWD5WtI1JOhgEDZGTua641o3BXruYg/640?wx_fmt=png&from=appmsg)

**陈硕**，中国矿业大学，讲师，硕士生导师，研究方向包括永磁同步电机先进控制系统。入选前2%顶尖科学家“2025年度影响力”榜单，共发表SCI/EI论文40余篇，其中以第一/通讯作者发表SCI期刊论文16篇(包括SCI一区论文14篇，ESI高被引1篇)，公开/授权国家发明专利10项。主持国家自然科学基金青年项目、江苏省自然科学基金青年项目、中央高校青年科技基金、中国矿业大学“启航计划”培养基金、人才引进科研启动基金与横向项目各1项，担任《Processes》专刊客座主编。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17iblJog5BONBxyWwFgYOJib28FUtPHKjRDYEq4D7liaUNibMY0kf2c5hqARYXIiaWuaJQKztia1RVxo9icPA/640?wx_fmt=png&from=appmsg)

**马志勋**，同济大学交通学院研究员、博士生导师，国家磁浮交通工程技术研究中心牵引供电研究室主任。IEEE高级会员，中国电源学会交通电气化专委会委员，中国铁道学会高速磁浮委员会委员。主持包括国家自然科学基金面上项目、国家重点研发计划子任务、揭榜挂帅及产学研课题等10余项。发表国内外高水平论文60余篇，出版专著2部，授权发明专利10余项。研究方向为磁悬浮与轨道交通牵引控制、电机及电磁控制、电力电子变换器控制等。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/jFLbUGmZ17iblJog5BONBxyWwFgYOJib28hiagLA4EV5tLUbW23diaNTXVO563S4icvpP5CEJgiaOSg2rjWqZqsc9OKA/640?wx_fmt=png&from=appmsg)

**韩耀飞**，同济大学国家磁浮交通工程技术研究中心副研究员，主持包括国家自然科学基金面上项目、省部级及企业委托项目等20余项。发表国内外高水平论文30余篇，授权发明专利20余项。主要从事电力电子与电力传动相关领域研究工作。

  

★

《中国电工技术学会电机与系统学报（英文）》(CES TEMS)是中国电工技术学会和中国科学院电工研究所共同主办、IEEE PELS学会技术支持的英文学术期刊。期刊发表国内外有关高性能电机系统、电机驱动、电力电子、可再生能源系统、电气化交通等研发及应用领域中原创、前沿学术论文。中国工程院院士马伟明担任主编，IEEE的执委Don Tan博士为国际主编。目前已被ESCI、EI、Scopus、 Inspec、Google scholar、IEEE Xplore、中国科学引文数据库(CSCD) 核心版、DOAJ、CSTPCD、知网、万方、维普等数据库收录。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ179z3lvZnpbXAWIveZK2I2KalkDdQtbbTvQNT5Z89ibvTeUaI5nU6me4w5ualicmNwEGzsebDicBujmicw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

**中国电工技术学会**

**新媒体平台**

  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1k432BagqYBSpEricSKUWFXSlSfsmibVn6lrHGgF3bk2HNDKgMsmv0jzjg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kFquwswRdMpgltNf0ofDboWBsO2VEWngicxMLCwAjKicUpA36bE18nqyQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kqvWm5WpOHLYBxwbAicSjcBbZ10gGc0OGXJry876QYUDbR6L4mnIeQTQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

学会官方微信

电工技术学报

CES电气

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kxqBhgTkxhRWEW0XjEyERqib5lURct6qfw0hu5MicCFTEE3fUuRuMGwYQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kJUJKGasHWENobphbJ482N9gYfNsVC4r2IJslRgg6hDeDOaq7UjODicA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kI0fa9LY4e2piaNeSjLI4ybUTWNhecEM1ZeRicz1zy8qPmiab5ia11BtCcw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

学会官方B站

CES TEMS

今日头条号

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kiaDDmDY7734hLauYWibPJQW5ThU9SLI35icS2kke05zNibsXXKjfIpFyRQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/jFLbUGmZ178JiaFc2oAchm3D534NzqA1kQBmbDzflDusd312Op55BibBmUtibVk1AjOfyWzWPwtLO0s5oz2EsSWVg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/jFLbUGmZ178JiaFc2oAchm3D534NzqA1ks1BJP50Lux134cYxqiao7iaI6HBoQgw1oRNAaN2lHDCcY0RzFBibR76qA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

学会科普微信

新浪微博

抖音号