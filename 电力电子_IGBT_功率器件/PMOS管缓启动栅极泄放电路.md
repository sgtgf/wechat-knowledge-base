# PMOS管缓启动栅极泄放电路

原创 电路一点通 2026-04-20 19:08 广东

> 原文地址: [https://mp.weixin.qq.com/s/3tE2Sp\_GmlWo0D818H-v9w](https://mp.weixin.qq.com/s/3tE2Sp_GmlWo0D818H-v9w)

> 介绍了在处理大容性负载时，PMOS管在关断过程中可能面临的挑战。通过在栅源极间加入快速泄放控制回路，实现PMOS的快速关断，通过仿真和实物验证展示了该方法的有效性。作者使用立创EDA进行了电路设计和模拟验证。

一、问题痛点

        我们在使用PMOS控制电路通断的情况下，如果后端容性负载比较大的话，一般采用PMOS缓启动电路进行设计，在PMOS管的栅源极并入合适大小的电容，实现PMOS管的缓慢开通，但是在关断的过程中，PMOS管栅极的充电过程非常的缓慢，如果此时后端依旧有负载情况，很有可能造成PMOS管的损坏。

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_000_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

二、解决方式

        在PMOS管的栅源极之间加入快速泄放控制回路，当关断使能给触发后，迅速将PMOS管栅极电压恢复到与源极电压保持一致，实现PMOS管的快速关断。

三、仿真电路的建立

        在栅源极之间并入10uF电容，实现PMOS管的缓启动设计，同时使得仿真的波形图更加直观，仿真电路如下图1所示。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_001_899cb338c280.png)

图1 PMOS管栅极泄放电路仿真图

 四、仿真结果

       加入栅极泄放电路仿真图如图2所示，栅、漏极电压波形图如3所示。其中绿色波形为PMOS管的栅极电压波形，红色波形为PMOS管的漏极电压波形。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_002_ca6b3569678e.png)

图2 加入栅极泄放电路仿真图

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_003_02b7b42b4ae5.png)

图3 加入栅极泄放电路栅、漏极电压波形图

        未加入栅极泄放电路（断开Q5 三极管 发射极与PMOS栅极的连接）仿真图如图4所示，栅、漏极电压波形图如图5所示。其中绿色波形为PMOS管的栅极电压波形，红色波形为PMOS管的漏极电压波形。 

  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_004_10910b441452.png)

图4 未加入栅极泄放电路仿真图

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_005_0c88150412c0.png)

 图5 未加入栅极泄放电路栅、漏极电压波形图 

 五、原理分析  

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_006_8650c630fdce.png)

        在S1未使能的情况下，三极管Q2、Q1的b极无电流，三极管Q2、Q1不导通，此时PMOS管的栅极电压、三极管Q5的基极、发射极均为60V，PMOS管不到导通；

        在S1使能的情况下，三极管Q1、Q2导通，此时Q5的基极为0V，发射极在电阻R4、R2的作用下为40V，此时PMOS为导通状态。当S1断开瞬间，三极管基极在R6的作用下快速充电至60V，此时三极管Q5导通，60V直接通过Q5到达PMOS的栅极，实现PMOS管的栅极快速泄放，实现PMOS管的快速关断。调节电阻R6的大小可以实现快速泄放的速度。

六、结论

        从上述仿真结果可以看出，加入栅极泄放回路的栅极电压上升时间远比未加入栅极泄放回路上升时间小的多，由此可得出该栅极泄放电路可以实现PMOS缓启动电路的栅极快速泄放，加快PMOS管的快速关断。

七、实物电路的搭建

        一如既往，白嫖党上线，我们在立创EDA搭建 原理图 及PCB。立创EDA原理图如图6所示，立创EDA实物渲染图如图7所示。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_007_acfaea560c47.png)

图6 立创EDA原理图

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_008_0cae10e6831b.png)

图7 立创EDA实物渲染图 

八、实物验证结果

        等待许久，终于拿到实物，省去手工焊接的步骤，下面放一张调试过程中的实物图片。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_009_ecb02e36f338.png)

        按照上述的原理图在进行调试中，可以证实该电路可以实现PMOS关断过程中的栅极泄放，但是在测试过程中，发现一个问题，即在S1开关闭合后，NPN三极管的E极电压并不是R4、R2分压后的电压，后仔细查证，发现在开启Q4管过程中以及Q4管完全开通后，三极管Q5的E极电压远高于B极电压，造成了NPN三极管EB极之间电压超过器件所能承受的电压，故该电路存在一定的问题。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_010_afa3a91d4b2b.png)

九、电路改进

        为解决上述的NPN三极管的EB极压差超过器件额定电压范围，便设计如下原理图，并通过实物飞线验证（见上图实物图）。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_011_2873783d185c.png)

        上图原理分析：加入了 二极管 D1（实物器件选择时反向击穿电压需要大于最大输入电压） 、电阻R1。当S1开关闭合后，三极管Q5的B极在Q2的作用下拉到GND，三极管Q5的E极由于在D1的作用下通过电阻R1下拉到GND，此时三极管Q5的EB极压差在器件的正常范围内，故该原理图电路可正常工作，实际测试数据如下。

        蓝色为Q5三极管B极电压，黄色为Q5三极管E极电压

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_012_c7e6c323ab4c.png)

         后端空载时，S1开关开通与断开时PMOS管的栅极电压如下图所示。

    ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_013_c398c0c67d1f.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_014_2e7dca884238.png)

        后端带载5A时，S1开关开通与断开时PMOS管的栅极电压如下图所示。   

    ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_015_c947c9747c72.png)![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_016_7757cb024afe.png)

        由上图分析可知，无论在后端空载还是带载5A情况下，控制主路通断的PMOS管Q4在使能开关S1开通的时候，PMOS管Q4的栅极放电时间大约为20ms，S1断开的时候，PMOS管Q4的栅极充电时间大约为200us，明显关断的速度远大于缓启动的速度，由此可验证该PMOS管栅极泄放电路应用成立。

十、电路优化

        在用PMOS管通断作为锂电池设备的开关的时候，需要考虑到静态功耗的问题。上述电路在使能开关未使能的情况下，会一直产生静态功耗，其主要矛头就是下拉的电阻R1，当电阻R1阻值越小，静态功耗就越大。当S1断开的时候，三极管Q5的B极一直有电流存在，此时E极一直会有电流通过R1流入GND。当然可以通过变大R1的阻值来减小静态功耗，但不是最优解决方案。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_017_3ba18de1d4cc.png)

        最终，解决方案如下图所示。 

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_018_783ec0626cea.png)

        原理分析：当使能开关S1断开时， Q2截止，此时R6右侧电势为60V，而此时Q5的E极电势为60V，也即三极管Q3的E极为60V，三极管Q3的BE无电势存在，也即三极管Q3截止，也即当使能开关未开通时，无静态电流经过Q3流向GND，此时PMOS管作为锂电池后端控制开关静态损耗达到最低值。

十一、最终方案图

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_019_26902a9fb53c.png)

  

  

  

## **一点通推荐**

  

[硬件设计开发指导手册-docx文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567287&idx=2&sn=df35cb4391c24e71b35a23e3bccc67f6&scene=21#wechat_redirect)

[研发经理主导电源ODM项目全流程手册（附:考核与追责机制）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567614&idx=1&sn=fe1657b3c7845fb3eef985772dce178b&scene=21#wechat_redirect)

[硬件产品开发与量产全流程管理手册（EVT/DVT/PVT/MP）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567720&idx=2&sn=638800807c6b5c7759578b4b9e1d565d&scene=21#wechat_redirect)

[电源硬件验证与测试用例编写手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567313&idx=2&sn=363dd274654c8f3590c1c860623c39da&scene=21#wechat_redirect)

[硬件开发全流程手册（.docx 文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567403&idx=2&sn=6b8511c131bf596492e9c8724be216d5&token=2048927905&lang=zh_CN&scene=21#wechat_redirect)

[开关电源技术平台与产品预研管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567264&idx=2&sn=374c4e23a2a674c254f29274615f1a30&scene=21#wechat_redirect)

[敏捷研发项目滚动式计划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567191&idx=2&sn=9a8fb8eefc74212bda6f0f07f00b8cd7&scene=21#wechat_redirect)

[产品总监主导嵌入式智能硬件市场调研手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567165&idx=2&sn=59e9eb93222e43f47328f42ecacc624e&scene=21#wechat_redirect)

[电源产品经理项目启动里程碑资料评审管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566969&idx=2&sn=9a3beaa09656b7cac804aad7bddf0134&scene=21#wechat_redirect)

[电源开发经理设计开发流程和规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566966&idx=2&sn=4a9569ebd0a6c25adb6e3fdf1af37332&scene=21#wechat_redirect)

[智能化行业趋势洞察与合作规划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566768&idx=2&sn=9b56b2555afae3e08459f3627bbf7c8c&scene=21#wechat_redirect)

[硬件经理方案评审与成本控制手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566835&idx=2&sn=7f95c948eafd554bfdf921da53eb597d&token=549077461&lang=zh_CN&scene=21#wechat_redirect)

[硬件研发总经理统筹团队核心技术突破手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566776&idx=2&sn=f0695fc2aa067e620b02521d7cc95d31&token=542927284&lang=zh_CN&scene=21#wechat_redirect)

[半导体元器件研发项目全周期计划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566856&idx=1&sn=5181825e9f152fa4c76a1787f316f099&scene=21#wechat_redirect)

  

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\PMOS管缓启动栅极泄放电路_images\img_020_a19b4a0eab96.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️