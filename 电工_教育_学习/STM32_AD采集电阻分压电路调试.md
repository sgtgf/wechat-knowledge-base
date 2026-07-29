# STM32 AD采集电阻分压电路调试

原创 电路一点通 2024-11-03 12:56 广东

> 原文地址: [https://mp.weixin.qq.com/s/vFMr\_9wY3vwF55pFKSWDOA](https://mp.weixin.qq.com/s/vFMr_9wY3vwF55pFKSWDOA)

调试基于STM32为主控，内部ADC采集电阻分压式电压值电路，STM32未使用参考电压源，直接将Vref接至3V3供电端，发现采集后电压误差较大，其电路图如下所示。

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_AD采集电阻分压电路调试_images\img_000_a8b37a87b291.other)

  
![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_AD采集电阻分压电路调试_images\img_001_9e1c04ec9dd7.png)

## 理论计算

根据分压公式，理想Vr=1.967V。

## 调试

1.  万用表电压值测量如下图。  
    判断采集电压误差大，与程序无关，电路问题。  
    ![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_AD采集电阻分压电路调试_images\img_002_bc7b82f3ec8e.png)
    
2.  去掉D1二极管与同时去掉D1二极管与R3电阻，其值相同，如下值。  
    判断二极管导致了电压异常。  
    ![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_AD采集电阻分压电路调试_images\img_003_72b37858d386.png)
    
3.  最终电路修改为如下形式，理由为STM32内部自带钳位二极管，且稳压二极管反向特性较差，加上后，改变了ADC通路特性，导致损耗。  
    ![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_AD采集电阻分压电路调试_images\img_004_6f49fdd7fcaa.png)
    
4.  又将51K与10K更换100K与20K，计算后其精度更高。
    

作者：张大林爱喝茶

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32_AD采集电阻分压电路调试_images\img_005_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

  

-   [**常用电子元器件识别与检测（166页）.ppt资料**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
-   [**PCB设计参考:《PADS电路板设计超级手册》.pdf**](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
    [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&scene=21#wechat_redirect)
    
-   [**华为2024届校园招聘【硬件开发/设计工程师】试题-附答案**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527100&idx=1&sn=b0061ec9bf648721ba0730a74c742c37&chksm=fcef89decb9800c839973d0dc79d095c5cdb90d4fc4ca7b6779d4f02cc688c2806b4576542ab&scene=21#wechat_redirect)[**常用电子元器件识别与检测（166页）.ppt资料**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&token=1742542462&lang=zh_CN&scene=21#wechat_redirect)
    
-   [**光伏逆变器详细介绍(完整版)PPT. 资料**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526592&idx=2&sn=7feb32c6215f20313aee4de98d328778&chksm=fcef8ba2cb9802b41270bc9fcc2d484d30149ed75288f496091e24c4239e5315cfe48150dea0&scene=21#wechat_redirect)    
    
    
-   [**\[电子电路识图入门\]450页-PDF-图文版**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526229&idx=2&sn=e4ab8daaeb3ab306b1642a67ef9c49e8&chksm=fcef8437cb980d211aa7e23bda0fccfcdef5be40f5302ddbfb9bb097bce6907556d7e987e2ce&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526229&idx=2&sn=e4ab8daaeb3ab306b1642a67ef9c49e8&chksm=fcef8437cb980d211aa7e23bda0fccfcdef5be40f5302ddbfb9bb097bce6907556d7e987e2ce&scene=21#wechat_redirect)[**电源管理指南（85页）-PDF文档**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526188&idx=2&sn=ee200bc28f2bc43342f9ebae5c6391ce&chksm=fcef844ecb980d58f5ff41e1efe8e6ecb337b0183a0f17835c9391c89c62596471f6bd6e0126&scene=21#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526229&idx=2&sn=e4ab8daaeb3ab306b1642a67ef9c49e8&chksm=fcef8437cb980d211aa7e23bda0fccfcdef5be40f5302ddbfb9bb097bce6907556d7e987e2ce&scene=21#wechat_redirect)[**【华为】防护电路设计规范\_55页.文档资料**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526095&idx=2&sn=ff04ea11c31770ed3bc332890882e82b&chksm=fcef85adcb980cbb95db2e91177eeb03e4dc2dfcddf7021dc2d0d3a2321a91164236e9575840&scene=21#wechat_redirect)
    
-   [**电子工程师必备-关键技能速成宝典（692页）.pdf**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526066&idx=2&sn=e5f7278a65af2a44acc74823a658798f&chksm=fcef85d0cb980cc694bf887b0096ed184f6ac89ef01949820f9833f562d94d5ab1f376780265&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526066&idx=2&sn=e5f7278a65af2a44acc74823a658798f&chksm=fcef85d0cb980cc694bf887b0096ed184f6ac89ef01949820f9833f562d94d5ab1f376780265&scene=21#wechat_redirect)[**开关电源设计指南(216页).PDF资料**](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526059&idx=2&sn=895b85e82c8d767bb6905914061aba0c&chksm=fcef85c9cb980cdf67633e78906081fc53dcb3ee923dd607f671e5ac84a2093b6b2464dbdc5f&scene=21#wechat_redirect)