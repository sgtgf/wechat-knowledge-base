# BLDC和PMSM在低速电动车应用的性能比较


> 原文地址: [https://mp.weixin.qq.com/s/1cjqgeSHUSmjWIAdP\_mdqA](https://mp.weixin.qq.com/s/1cjqgeSHUSmjWIAdP_mdqA)

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\BLDC和PMSM在低速电动车应用的性能比较_images\img_000_6e6d80aceda4.gif)**提示**：点击上方"**玩转电机设计**"↑关注我吧

  

**开门见山：**

1.  根据比较，BLDCM在恒转矩区间能提供更高的转矩；PMSM的转矩更稳定，速度范围更大，更满足电动车的理想性能需求。
    
2.  PMSM系统效率更高，续航里程更远。高效率区一般分布在中高速区间，低效区一般分布在重载和低速区间。
    
3.  低速电动车的低成本限制了先进技术、好材料在其匹配电机中的应用，阻碍了相关电机的先进技术的发展。
    
4.  PMSMS的空载损耗小于BLDCM，这是为什么PMSM更高效的原因，这一点通过实验和仿真都得到了证明。
    
5.  PMSM相对于其他种类的电机在电动车中的应用具备很多优势。随着材料和制造技术的发展，PMSM是最适合应用在电动汽车的电机，并且越来越多的低速电动车应用PMSM逐渐成为趋势。
    
6.  PMSM的振动和噪音更低。——译者补充
    

* * *

**实验验证**

电动汽车电机的理想机械特性：  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\BLDC和PMSM在低速电动车应用的性能比较_images\img_001_9528b03a74d4.png)

作为比较的PMSM和BLDCM：  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\BLDC和PMSM在低速电动车应用的性能比较_images\img_002_ebe2e8627bbf.png)  

功率和转矩特性测试结果：  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\BLDC和PMSM在低速电动车应用的性能比较_images\img_003_5c22fbb932e2.png)

两个电机在低速和中速区有相似的功率特征，但是BLDCM转速超过3000rpm时功率下降。  

系统效率MAP比较：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\BLDC和PMSM在低速电动车应用的性能比较_images\img_004_b38d784ff5cb.png)

高效率区都分布在中高速区，低速区效率下降明细。考虑一般的运行条件，PMSM续航里程更远。

* * *

**仿真验证**

电机模型：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\BLDC和PMSM在低速电动车应用的性能比较_images\img_005_2901ec63dce0.png)

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\BLDC和PMSM在低速电动车应用的性能比较_images\img_006_ce642b40ca92.png)

1000rpm磁场云图：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\BLDC和PMSM在低速电动车应用的性能比较_images\img_007_6cc958da0d1e.png)

PMSM的转子軛部和定子齿部磁密都比BLDCM低。

齿槽转矩：

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\BLDC和PMSM在低速电动车应用的性能比较_images\img_008_5ca129492047.png)

BLDCM的齿槽转矩比PMSM大。  

反电势波形：  

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\BLDC和PMSM在低速电动车应用的性能比较_images\img_009_c7cec1292659.png)

BLDCM的反电势大于PMSM。

* * *

原文：《A Comparison of Different Types of Motors Used For Low Speed Electric Vehicles Experiments and Simulations》——WANG Yue, GAO Dawei，Tsinghua University 

* * *

索取原文，请在留言区留下邮箱。

欢迎推荐优秀文献、国外电机最新咨询！

热文推荐：

[玩转电机结构分析之大局观](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247483925&idx=1&sn=d4f0586f4211888f6ae4aac5d726a607&chksm=ea64610fdd13e819c7c557f6d745ab2e63c87b2e95ed3b703aef1065d47f90905b48d0c9691d&scene=21#wechat_redirect)

[玩转电机设计DFEMA](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247483766&idx=1&sn=bc4cc20d6706fd2748c2f4a784d4bf4d&chksm=ea64626cdd13eb7a14aa190a61362ca95c0bad2eb29cdfc3e3c381eb4bb60f3b54be6d1752af&scene=21#wechat_redirect)  

[玩转高速电机转子设计](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247483680&idx=1&sn=84d2565fa79611f361c7610a08f5cb66&chksm=ea64623add13eb2cd276908f0db59f1d65f2a322e264e2b5b61e102a37c2640d322bc2c7cb2a&scene=21#wechat_redirect)

[玩转"Hair-Pin winding"——揭开新能源汽车发卡电机的神秘面纱](http://mp.weixin.qq.com/s?__biz=MzI2MDczMjUzMw==&mid=2247484022&idx=1&sn=00df943e7995299fe6aa3bee71327dba&chksm=ea64616cdd13e87ac3b356cd29b2ab4ec33577929e70d9ebc4662fafa92daed6fc8c904f5010&scene=21#wechat_redirect)

  

长按图片，识别二维码，关注我哟

> ![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\BLDC和PMSM在低速电动车应用的性能比较_images\img_010_d7f135e99ea3.png)