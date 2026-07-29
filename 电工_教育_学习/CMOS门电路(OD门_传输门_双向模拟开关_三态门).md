# CMOS门电路(OD门、传输门、双向模拟开关、三态门)

原创 电路一点通 2024-08-30 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/VICpJG0s75RHdQCVu-edFQ](https://mp.weixin.qq.com/s/VICpJG0s75RHdQCVu-edFQ)

#### **文章目录**

【 1. MOS管】

【 2. CMOS电路】

-   电路结构
    
-   拉电流
    
-   灌电流
    

【 3. 多余输入端的处理】

【 4. 扇出系数】

【 5. 输入噪声容限】

-   提高噪声容限的方法
    

【 6. 电压、电流的传输特性】

【 7. 静态输入、输出特性】

-   静态输入特性
    
-   静态输出特性
    

【 8. 动态特性】

-   ①传输延迟时间
    
-   ②交流噪声容限
    
-   ③动态消耗
    

【 9.其他类型的CMOS门电路】

-   ①电路结构
    
-   ②用途
    
-   ①传输门
    
-   ②双向模拟开关
    
-   ①电平转换
    
-   ②线与功能
    
-   ①与非门
    
-   ②与非门CMOS缺点解决办法
    
      
    
-   ①与非门
    
-   ②或非门
    
-   一 . 普通电路
    
-   二. 带缓冲极的CMOS门  
    
-   三. OD门 (漏极开路的门电路)
    
-   四. CMOS传输门及双向模拟开关
    
-   五. 三态输出门  
    

【 10.CMOS门电路优点】

【 11. CMOS命名】  

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_000_07e4a708eb0a.other)

  

## **【 1. MOS管】**

MOS管：绝缘栅型场效应管。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_001_6c04eeaf3e7e.png)

##   

## **【 2. CMOS电路】**

当NMOS管和PMOS管成对出现在电路中，且二者在工作中互补，称为CMOS管(Complementary Metal-Oxide-Semiconductor)。

### 电路结构

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_002_bc07ffea343d.png)

### 拉电流

如下图所示，输入低电平，经过CMOS反相器，输出为高电平。电流从CMOS流向负载，该电流称为拉电流。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_003_fab742a0f796.png)

### 灌电流

如下图示，输出高电平，经过CMOS反相器，输出为低电平。电流从负载流向CMOS,该电流称为灌电流。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_004_2a2eae7890b8.png)

## **【 3. 多余输入端的处理】**

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_005_eb8d26fc7af3.png)

## **【 4. 扇出系数】**

**扇出系数**：逻辑门所能够驱动同类门（输入端）的个数。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_006_604cb10a40a8.png)

## **【 5. 输入噪声容限】**

因为在将许多门电路相互连接组成系统时，前一级门电路的输出就是后一级门电路的输入，即允许前一级输出电压的变化范围称为输入噪声容限。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_007_da889d3805e1.png)

### 提高噪声容限的方法

**增大VDD**  
![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_008_9a71a6f8e41b.png)

## 【 6. 电压、电流的传输特性】

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_009_7058eff6c4f3.png)

## **【 7. 静态输入、输出特性】**

### 静态输入特性

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_010_fead39b86f99.png)

### 静态输出特性

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_011_5b813f61447d.png)  
![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_012_123ad6c249b2.png)  
![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_013_3eb50f803997.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_014_c5ed005c62f2.png)  
![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_015_a1495585a952.png)  
![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_016_37b3db09df7c.png)  
![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_017_f6c1d0c4a9a5.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_018_267484fc7839.png)

## **【 8. 动态特性】**

### ①传输延迟时间

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_019_ace5675f11f2.png)

### ②交流噪声容限

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_020_e9be8ea603a3.png)

### ③动态消耗

逻辑电路输出状态发生变化时的消耗，包括两种：PT、PC。  
![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_021_d6277ae07bc6.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_022_2d048b1d4adb.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_023_545c285c111d.png)

##   

## **【 9.其他类型的CMOS门电路】**

### 一 . 普通电路

##### ①与非门

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_024_d8500e36b8ca.png)

##### ②或非门

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_025_ca5939f81bea.png)

###   

### **二. 带缓冲极的CMOS门**

#### ①与非门

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_026_03a03bb1e787.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_027_fa7ee939a419.png)

#### ②与非门CMOS缺点解决办法

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_028_85f9a496869c.png)

### **三. OD门 (漏极开路的门电路)**

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_029_76abb18f7de3.png)  
                                       O                          D                          门                          ：                         可                          实                          现                          线                          与                          功                          能                          的                          与                          非                          门                          C                          M                          O                          S                          结                          构                          电                          路                          Y                          =                          (                          A                          B                                   )                             ′                                         OD门：可实现线与功能的与非门CMOS结构电路Y=(AB)'                   OD门：可实现线与功能的与非门CMOS结构电路Y\=(AB)′  
![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_030_f9bcac6150b0.png)

#### ①电平转换

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_031_8d4a7f34f0d8.png)

#### ②线与功能

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_032_0331135e4270.png)

### **四. CMOS传输门及双向模拟开关**

#### ①传输门

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_033_575012f71ae6.png)

#### ②双向模拟开关

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_034_571618e6ce66.png)

### **五. 三态输出门**

#### ①电路结构

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_035_bdcf91bc7e93.png)  

                                          三                          态                          门                          ：                         可                          实                          现                          总                          线                          功                          能                          的                          非                          门                          C                          M                          O                          S                          结                          构                          门                          电                          路                               三态门：可实现总线功能的非门CMOS结构门电路                   三态门：可实现总线功能的非门CMOS结构门电路

#### ②用途

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_036_d7f4d4db69dc.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_037_84b6c2188901.png)

## **【 10.CMOS门电路优点】**

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_038_4a970a4e6c7f.png)

## **【 11. CMOS命名】**

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_039_1d56fe497d54.png)  

![](D:\电脑文件\公众号知识库\电工_教育_学习\CMOS门电路(OD门_传输门_双向模拟开关_三态门)_images\img_040_fbdba6a347da.other)

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