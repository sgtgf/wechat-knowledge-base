# MOS管振铃现象

原创 电路一点通 2026-05-02 19:58 广西

> 原文地址: [https://mp.weixin.qq.com/s/VyNCJvZtoud4vNKyt6T75Q](https://mp.weixin.qq.com/s/VyNCJvZtoud4vNKyt6T75Q)

> 用MOS管作为电子开关电路如下单片机输出的PWM波形应该是规整的方波信号。但实际上确出现了下图的不稳定波形。这种上升沿和下降沿出现的不同程度的一小段震荡就叫做MOS管的振铃。如果振铃的峰值超过G端耐压，GS之间就会被击穿，MOS管就会坏掉。要判断振铃峰值是否会击穿MOS管，需要查看下图所示手册内容中的VGS下图所示型号的MOS管G与S之间最大电压为20V，超过这个电压就容易造成MOS管损坏。

1，什么是振铃

用MOS管作为电子开关电路如下

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管振铃现象_images\img_000_75b5a505cd26.png)

单片机输出的PWM波形应该是规整的方波信号。但实际上确出现了下图的不稳定波形。这种上升沿和下降沿出现的不同程度的一小段震荡就叫做MOS管的振铃。如果振铃的峰值超过G端耐压，GS之间就会被击穿，MOS管就会坏掉。要判断振铃峰值是否会击穿MOS管，需要查看下图所示手册内容中的VGS

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管振铃现象_images\img_001_a6020e435f93.png)

下图所示型号的MOS管G与S之间最大电压为20V，超过这个电压就容易造成MOS管损坏 

 ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管振铃现象_images\img_002_85482f6935ad.png)

## 2，振铃如何产生

第一种来源就是LC振荡电路

振铃的产生有点像LC振荡。要形成LC振荡必须满足三个条件：电容 电感 电源

电容就是G和S之间的pF级别的小电容；电源是IO口输出PWM波，PWM波上升沿期间，电容会被充电，下降沿期间，电容会放电。从上图示波器的图像可以看到，振铃就发生在PWM波上升沿和下降沿之后的一段时间；电感：我们知道多匝线圈的电感值大，而电路一定是有回路的，这个回路就可以看成是一匝线圈，这种电感就叫做寄生电感或者是杂散电感，它分布在电路里的各个地方，这样，有电容有电感有电源，LC振荡回路就构成了。 

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管振铃现象_images\img_003_5bbb34af0952.png)

## 3，如何减小振铃现象

1.  减小杂散电感：PCB布线时减小环路面积和环路周长。为了缩短周长，要让驱动电路尽量靠近MOS管
    
2.  在GS两端并联TVS(瞬变电压抑制二极管)，将电压限制在安全范围内
    

 ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管振铃现象_images\img_004_26dccc7b1034.png)

 3.第三个措施就是加R2一样的小电阻，消耗振荡的能量，电阻越大振幅越小 。但并不是越大越好，这会导致MOS管发热(参考MOS管发热原因一文)       

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管振铃现象_images\img_005_496225274c8f.png)

## **一点通推荐**

[硬件测试用例规范手册.docx](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567942&idx=2&sn=31e81f733e79a056552dc93935c47702&payreadticket=HLPyeGig6k080UzIjCq7Oxx9MOg8G1znyA5Q6H9Zjs_7B-_1pGJfj-Ov2xcuZ5kVVF0sWjc&scene=21#wechat_redirect)

[硬件工程师校/社招笔试面试300题（PDF文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568363&idx=2&sn=d600724318d4eefb89eec226a058666a&scene=21#wechat_redirect)

[硬件研发经理工业电源新品开发指导手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568350&idx=2&sn=a0ce8ee1bcf6922c052325905ddbff9c&scene=21#wechat_redirect)

[硬件经理产品生命周期管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568241&idx=2&sn=83b05e53077b753741a3ca16cd891382&scene=21#wechat_redirect)

[电子元器件选型和可靠性评估手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568287&idx=2&sn=9b149b750f4f0ce0f65e5584b7c68775&payreadticket=HIk1BZHCxQOrXWS6JDJkzngSNleGYWoU6JqjjSxPoCgLqEkT7r5rhNY6LvYA1FhkI_jSzYQ&scene=21#wechat_redirect)

[主任电子工程师EMC设计与项目整改手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568271&idx=2&sn=d13f0f2ac329e2fd05f3bc9d24c23a05&scene=21#wechat_redirect)

[硬件研发整机电子系统规划与架构设计手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567811&idx=2&sn=5950431b22dab9f80a9a9b300e80568c&payreadticket=HFjXAwUuFf6gXwOmmf611nUXFNA2IQ6ttH6ZBU90OAOvBC1f68ZuAOt7-eRh1Vw1wYXvrqE&scene=21#wechat_redirect)

[硬件经理项目瓶颈识别与解决方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567730&idx=2&sn=2fd06f74f985191e80ed327ba9e6780a&payreadticket=HASnpri0QQzAvJ5xNF_8gwSFzCBv6dpVv-qzd4NrZQdUUFI_EL7kCy_-tlRO62MVhQBEZpA&scene=21#wechat_redirect)

[硬件设计开发指导手册-docx文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567287&idx=2&sn=df35cb4391c24e71b35a23e3bccc67f6&scene=21#wechat_redirect)

[硬件技术评审与风险管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567767&idx=2&sn=f35b40b747beee7a5df2f9fdbc2a7d36&scene=21#wechat_redirect)

[研发经理主导电源ODM项目全流程手册（附:考核与追责机制）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567614&idx=1&sn=fe1657b3c7845fb3eef985772dce178b&scene=21#wechat_redirect)

[硬件产品开发与量产全流程管理手册（EVT/DVT/PVT/MP）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567720&idx=2&sn=638800807c6b5c7759578b4b9e1d565d&scene=21#wechat_redirect)

[电源硬件验证与测试用例编写手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567313&idx=2&sn=363dd274654c8f3590c1c860623c39da&scene=21#wechat_redirect)

[硬件开发全流程手册（.docx 文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567403&idx=2&sn=6b8511c131bf596492e9c8724be216d5&token=2048927905&lang=zh_CN&scene=21#wechat_redirect)

[开关电源技术平台与产品预研管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567264&idx=2&sn=374c4e23a2a674c254f29274615f1a30&scene=21#wechat_redirect)

[产品总监主导嵌入式智能硬件市场调研手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567165&idx=2&sn=59e9eb93222e43f47328f42ecacc624e&scene=21#wechat_redirect)

[电源产品经理项目启动里程碑资料评审管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566969&idx=2&sn=9a3beaa09656b7cac804aad7bddf0134&scene=21#wechat_redirect)

[电源开发经理设计开发流程和规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566966&idx=2&sn=4a9569ebd0a6c25adb6e3fdf1af37332&scene=21#wechat_redirect)

[硬件经理方案评审与成本控制手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566835&idx=2&sn=7f95c948eafd554bfdf921da53eb597d&token=549077461&lang=zh_CN&scene=21#wechat_redirect)

  

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️