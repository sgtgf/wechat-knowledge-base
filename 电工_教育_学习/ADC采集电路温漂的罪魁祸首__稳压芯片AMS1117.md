# ADC采集电路温漂的罪魁祸首--稳压芯片AMS1117

原创 电路一点通 2024-11-27 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/PBTB3RXudtl78bw1DdmTTQ](https://mp.weixin.qq.com/s/PBTB3RXudtl78bw1DdmTTQ)

最近在做一个uV电压采集的产品，发现总是开机用了一段时间后，采集结果慢慢变不准了，找了很久没找到原因，后来发现是电路版温度慢慢升高导致，结果发现罪魁祸首是1117, 1117在大电流的时候会发热。

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC采集电路温漂的罪魁祸首__稳压芯片AMS1117_images\img_000_a8b37a87b291.other)

**把AMS1117的温升详细做个个测试。**

  
测试设备：  
1、稳压电源  2、电子负载  3、温度记录仪

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC采集电路温漂的罪魁祸首__稳压芯片AMS1117_images\img_001_9bc6a3014923.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC采集电路温漂的罪魁祸首__稳压芯片AMS1117_images\img_002_00b79b169ec3.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC采集电路温漂的罪魁祸首__稳压芯片AMS1117_images\img_003_f058ce69ef1f.png)

测试过程  
5V电压输入，3.3V输出，热电偶贴到1117表面，上位机检测温度曲线，方便测试100mA、200mA、300mA、400mA、500mA、600mA、700mA、800mA时的温升情况。

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC采集电路温漂的罪魁祸首__稳压芯片AMS1117_images\img_004_eb5b31110976.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC采集电路温漂的罪魁祸首__稳压芯片AMS1117_images\img_005_f5d6bbf0ca57.png)

  
结果汇总：  
在800mA的时候AMS1117表面温度会升高的75度，小伙伴在做精密信号采集电路的时候，一定要考虑温升对模拟电路的影响，测量电路务必使用低温飘电阻，也可以软件对温度做些补偿

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC采集电路温漂的罪魁祸首__稳压芯片AMS1117_images\img_006_49f035b012e1.png)

  

作者：悠谷浮云 

******进大家庭⭕圈探讨回复:****** ******交流******

▼ **往期精彩回顾** ▼

    
-   [突然发现学习电路的蕞强外挂，真的很牛](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534785&idx=1&sn=846ea4c09ccf391f330d6c56caf8f55d&scene=21#wechat_redirect)  
    
-   [小米到底给员工开多少钱（小米2024校招薪资、学历一览表）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534733&idx=1&sn=cd030ddd88e6353caac160985d7e8984&scene=21#wechat_redirect)    
    
-   [比亚迪离职提桶跑路，给我翻译翻译什么叫“工程师之魂”？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534674&idx=1&sn=33ad17d436e408cc416d8010fd4e409e&scene=21#wechat_redirect)  
    
      
    
-   [反激开关电源基本原理和电路拓扑](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)  
    
-   [图解电子电路一点通（297页）.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247525041&idx=2&sn=c820aa21927ddca45445f7da84bd0ea5&scene=21#wechat_redirect)  
    
-   [电子工程师必备-九大系统电路识图宝典.pdf(702页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)  
    
-   [【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路清晰有方向](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)  
    
-   [PCB设计参考:《PADS电路板设计超级手册》.pdf](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
-   [开关电源环路设计与计算（45页）PDF-文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523296&idx=3&sn=3925f514288c3e99de2dcf1ac487edc8&scene=21#wechat_redirect)
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分