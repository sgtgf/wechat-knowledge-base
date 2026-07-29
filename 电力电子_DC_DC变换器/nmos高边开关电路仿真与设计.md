# nmos高边开关电路仿真与设计

原创 电路一点通 2026-04-27 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/YOzVun7GBEGVw7CYmnwJMg](https://mp.weixin.qq.com/s/YOzVun7GBEGVw7CYmnwJMg)

以前学习电力电子的时候，经常听他们讲双管反激电路难点在于高边nmos的开关问题。当时我模电基础很烂，对这个问题我并没有太深刻的体会。最近使用mos做电源开关的时候因为手上没有pmos了，但是又要做高端开关。于是开始仿真（踩坑）。以下经历希望对各位读者有帮助。

### pmos高边开关

总所周知，pmos开关如下图所示：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_000_e0edc6bb67d8.png)

[![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_001_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

开关按下时：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_002_37fc4231e567.png)

这个电路需要注意R1 R2取值，因为mos开关的开关条件是![V_{GS}>V_{GS(th))}](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_003_f11c806f622f.png)，如果取值不对则分压不够没办法打开。

### nmos 低边开关

对于nmos，我们常见的开关电路如下：

关闭时：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_004_6946c69df3e1.png)

开启时：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_005_6a98f2504599.png)

### nmos高边电路探索

pmos市面上少，库存有时候会不够，如果是nmos会好很多，但是低边开关是阻断地通路，如上图nmos低边开关没有开启时负载是带电的。这样如果有人乱碰电压低还好，电压高那就可能出问题。根据以上问题，最好是直接使用nmos实现高边开关。那这个怎么实现呢？

根据以上我首先想到的是直接拿nmos替换掉pmos，其电路图如下

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_006_8ee67ab5c492.png)

之所以不s接vcc g接负载是因为这样就算没有打开电流也会走体二极管到负载。这样一方面不能开关，另一方面就算是导通了也有压降。这样不完美。其电路图如下：![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_007_658932d93058.png)

重新回到nmos替换掉pmos的高边电路:其打开时现象如下:

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_008_09fdcd114426.png)

为什么这里负载的电压只能到8点多，升不上去？这个电压既不是完全关断，也不是完全打开？这个情况是怎么产生的呢？

这个问题其实很简单，mos开关的条件是![V_{GS}>V_{GS(th))}](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_009_442ee04dd69b.png)，pmos的![V_{GS}](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_010_f679363cd285.png)为负，nmos的![V_{GS}](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_011_f015e64fc590.png)为正。那这个电路开关没有打开时![V_{GS}](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_012_7889a5a3729f.png)是多少呢？答案是+12V。这样![V_{G}](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_013_dcd59786e8fd.png)开关开启或关闭时电压不一样。pmos的![V_{G}](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_014_b70443041639.png)小于+12，nmos的![V_{G}](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_015_3588bd3f58d4.png)大于+12v。此电路中输出电压与输入之差正好是![V_{GS(th))}](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_016_7634a5931c5c.png)。故改进如下：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\nmos高边开关电路仿真与设计_images\img_017_fcfdf337daa0.png)

那这个15v应该怎么产生呢？个人有以下思路：

1boost

2电荷泵

## **一点通推荐**

[硬件测试用例规范手册.docx](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567942&idx=2&sn=31e81f733e79a056552dc93935c47702&payreadticket=HLPyeGig6k080UzIjCq7Oxx9MOg8G1znyA5Q6H9Zjs_7B-_1pGJfj-Ov2xcuZ5kVVF0sWjc&scene=21#wechat_redirect)

[硬件经理产品生命周期管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568241&idx=2&sn=83b05e53077b753741a3ca16cd891382&scene=21#wechat_redirect)

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

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️