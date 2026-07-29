# 华为FPGA设计规范-供参考学习

原创 电路一点通 2024-07-29 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/iiw9mkNqa7JoEidO0hQv5w](https://mp.weixin.qq.com/s/iiw9mkNqa7JoEidO0hQv5w)

  
FPGA 设计任务主要是两方面的作用：系统的原型实现和 ASIC 的原型  
验证。编写本流程的目的是：

  
 **在于规范整个设计流程，实现开发的合理性、一致性、高效性。  
 形成风格良好和完整的文档。  
 实现在 FPGA 不同厂家之间以及从 FPGA 到 ASIC 的顺利移植。  
 便于新员工快速掌握本部门 FPGA 的设计流程。**

  
由于目前所用到的 FPGA 器件以 Altera 的为主，所以下面的例子也以 Altera 为例，工具组合为 modelsim + LeonardoSpectrum/FPGACompilerII + Quartus，但原则和方法对于其他厂家和工具也是基本适用的。

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为FPGA设计规范_供参考学习_images\img_000_8c54c105a5ac.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为FPGA设计规范_供参考学习_images\img_001_f76d26393f9a.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为FPGA设计规范_供参考学习_images\img_002_0b377800717f.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为FPGA设计规范_供参考学习_images\img_003_d4acdc107512.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为FPGA设计规范_供参考学习_images\img_004_e7d666583a64.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为FPGA设计规范_供参考学习_images\img_005_c1dc5f325921.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为FPGA设计规范_供参考学习_images\img_006_67cabac55d89.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为FPGA设计规范_供参考学习_images\img_007_d3de9351d206.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为FPGA设计规范_供参考学习_images\img_008_380c6e268bb6.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为FPGA设计规范_供参考学习_images\img_009_bc12ab4c3f61.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为FPGA设计规范_供参考学习_images\img_010_9f3b02249286.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\华为FPGA设计规范_供参考学习_images\img_011_6405fb6dc682.png)

## **一点通推荐**

[【华为】防护电路设计规范\_55页.文档资料](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526095&idx=2&sn=ff04ea11c31770ed3bc332890882e82b&chksm=fcef85adcb980cbb95db2e91177eeb03e4dc2dfcddf7021dc2d0d3a2321a91164236e9575840&token=970346432&lang=zh_CN&scene=21#wechat_redirect)  
[【华为】初级电子工程师必备手册（上117页 、下82页）PDF文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525856&idx=2&sn=9d302f4f4d508e08bba6a10567a638cf&chksm=fcef8682cb980f94cac6c9b7f51d1041c17e5896d4c0cb3049417a2a76b9e375324bb5715b56&scene=21#wechat_redirect)  
[【热议】硬件工程师中年危机之路是如何走？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525398&idx=1&sn=5c2d31960b18e681103755a8562e7801&chksm=fcef8774cb980e62b7b19f663c639cd8f5ad360a088284faef53e224825ee2b8bc4a41695b1d&scene=21#wechat_redirect)  
[硬件工程师开发手册-163页.pdf  
](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525090&idx=2&sn=f4fa30af30f11407e753739c1ebc95fa&chksm=fcef8180cb980896e634da41b9b2de7485e8f2e8d6af1833c7b374580d4b3eaade4455c459a0&scene=21#wechat_redirect)[硬件设计知识图谱-【思维导图】](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=1&sn=829caf028d3dbf2c450e1e4c150f69ff&chksm=fcef83c9cb980adf819648e5c98d75ea4e8b60412b3725794ac46c62b36b3eb5fa1d0e90e831&scene=21#wechat_redirect)