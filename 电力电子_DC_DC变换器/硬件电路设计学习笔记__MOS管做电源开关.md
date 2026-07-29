# 硬件电路设计学习笔记--MOS管做电源开关

原创 电路一点通 2026-05-24 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/DlEy95xeFphoYWIB3nudng](https://mp.weixin.qq.com/s/DlEy95xeFphoYWIB3nudng)

* * *

## 一、Nmos做 电源 开关

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\硬件电路设计学习笔记__MOS管做电源开关_images\img_000_e34791cb16cf.png)

### 电路分析

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\硬件电路设计学习笔记__MOS管做电源开关_images\img_001_3435b43c3c1f.png)

### 仿真 效果验证

#### 开关未闭合

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\硬件电路设计学习笔记__MOS管做电源开关_images\img_002_89c3728eafcd.png)

#### 开关闭合

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\硬件电路设计学习笔记__MOS管做电源开关_images\img_003_03e09b88145b.png)

* * *

### 如何让其处于一直饱和导通？

-   使用自举电容
    
-   使用一个比电源更高的控制信号来控制mos管的栅极g  
    这里主要讲使用自举电容
    

#### 使用 自举电容

利用**电容两端电压不能突变**的特性  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\硬件电路设计学习笔记__MOS管做电源开关_images\img_004_d1bfcaac2986.png)

#### 电路分析

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\硬件电路设计学习笔记__MOS管做电源开关_images\img_005_038178a22923.png)

#### 仿真效果验证

### ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\硬件电路设计学习笔记__MOS管做电源开关_images\img_006_927457cfa606.png)

## 二、Pmos做电源开关

利用**Pmos源极s接电源**的特性  
**导通条件:Vg-Vs<Vth**

### 仿真效果

#### 开关未闭合

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\硬件电路设计学习笔记__MOS管做电源开关_images\img_007_ddfa5b97b500.png)

#### 开关闭合

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\硬件电路设计学习笔记__MOS管做电源开关_images\img_008_0e1d4ae9bc95.png)

  

## **一点通推荐**

[硬件测试用例规范手册.docx](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567942&idx=2&sn=31e81f733e79a056552dc93935c47702&scene=21#wechat_redirect)

[硬件设计开发指导手册-docx文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567287&idx=2&sn=df35cb4391c24e71b35a23e3bccc67f6&scene=21#wechat_redirect)

[硬件技术评审与风险管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567767&idx=2&sn=f35b40b747beee7a5df2f9fdbc2a7d36&scene=21#wechat_redirect)

[硬件研发整机电子系统规划与架构设计手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567811&idx=2&sn=5950431b22dab9f80a9a9b300e80568c&scene=21#wechat_redirect)

[研发经理主导电源ODM项目全流程手册（附:考核与追责机制）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567614&idx=1&sn=fe1657b3c7845fb3eef985772dce178b&scene=21#wechat_redirect)

[硬件产品开发与量产全流程管理手册（EVT/DVT/PVT/MP）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567720&idx=2&sn=638800807c6b5c7759578b4b9e1d565d&scene=21#wechat_redirect)

[智能工业物联网网关新产品开发任务书.docx](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567787&idx=2&sn=620933a95444ec361d98da5fc1f1da98&scene=21#wechat_redirect)

[电源硬件验证与测试用例编写手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567313&idx=2&sn=363dd274654c8f3590c1c860623c39da&scene=21#wechat_redirect)

[硬件开发全流程手册（.docx 文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567403&idx=2&sn=6b8511c131bf596492e9c8724be216d5&token=2048927905&lang=zh_CN&scene=21#wechat_redirect)

[开关电源技术平台与产品预研管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567264&idx=2&sn=374c4e23a2a674c254f29274615f1a30&scene=21#wechat_redirect)

[产品总监主导嵌入式智能硬件市场调研手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567165&idx=2&sn=59e9eb93222e43f47328f42ecacc624e&scene=21#wechat_redirect)

[电源产品经理项目启动里程碑资料评审管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566969&idx=2&sn=9a3beaa09656b7cac804aad7bddf0134&scene=21#wechat_redirect)

[电源开发经理设计开发流程和规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566966&idx=2&sn=4a9569ebd0a6c25adb6e3fdf1af37332&scene=21#wechat_redirect)

[硬件经理方案评审与成本控制手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566835&idx=2&sn=7f95c948eafd554bfdf921da53eb597d&token=549077461&lang=zh_CN&scene=21#wechat_redirect)

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\硬件电路设计学习笔记__MOS管做电源开关_images\img_009_1539b38016c7.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️