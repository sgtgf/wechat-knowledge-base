# 嵌入式-数模电-MOS管经典知识汇总

原创 电路一点通 2025-05-23 11:56 广东

> 原文地址: [https://mp.weixin.qq.com/s/gkSwlGZ2fNIucFGLn0vchQ](https://mp.weixin.qq.com/s/gkSwlGZ2fNIucFGLn0vchQ)

#### 目录

-   一：快速了解
    

1.看箭头快速辨认NMOS和PMOS

2.电流方向和寄生二极管方向相反

3.NMOS和PMOS区别

4.工作中最便宜最好用的贴片三极管-2N7002

5.用万用表快速检测mos管

-   二：带着第二节的问题从三四节找答案
    
-   三：电路符号
    
-   四：实物
    
-   五：答案
    

  

-   [![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

### 一：快速了解

#### 1.看箭头快速辨认NMOS和PMOS

> > 箭头朝里，里-你-n-NMOS  
> > ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_001_64724055baea.png)

#### 2.电流方向和寄生二极管方向相反

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_002_734824729853.png)

#### 3.NMOS和PMOS区别

作用、常用接法、导通条件和截止条件

-   示例①  
    **NMOS作用**：信号切换（开关）  
    **常用接法：** S极接地，US=0V  
    **截止条件**：UG=US=0V。  
    **导通条件：** UG比US大3V—5V即可，UG=3V。简单来说NMOS管G极电平高电平导通。  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_003_760fe6bb847c.png)
    

-   示例②  
    **NMOS作用**：电压通断（开关）  
    **常用接法：** D极接输入，UD=5V,S极接输出。  
    **截止条件**：UG=US=0V。  
    **导通条件：** UG比US大10V以上，UG=Us+10V=15V。（导通时，Us=5V）
    

-   （不太严谨的记法：NMOS管G极高电平导通，和输出端S极比较）  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_004_9dadde564e3c.png)
    

-   示例③  
    **PMOS作用**：电压通断（开关）  
    **常用接法：** S极接输入，Us=19v。 D极接输出。  
    **截止条件**：UG=US=0V。  
    **导通条件：** UG比US**小10V以上**，UG=Us-13v=6V。
    

-   （不太严谨的记法：PMOS管G极低电平导通,和输出端D极比较）  
     推荐文章《硬件-经典开机电路》  
    ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_005_8e390e6ed43b.png)
    

#### 4.工作中最便宜最好用的贴片三极管\-2N7002

> 常见的3PIN脚MOS管（SOT-23）![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_006_331fa7a27840.png)

#### 5.用万用表快速检测mos管

> > 万用表二极管（蜂鸣器）档  
> > ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_007_3993e67d13ec.png)  
> > ![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_008_f5b35c246c03.png)

### 二：带着第二节的问题从三四节找答案

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_009_20af9e64cf52.jpg)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_010_e0b68f17b9a4.jpg)

### 三：电路符号

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_011_3a5caa872c14.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_012_9923b4aa7be9.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_013_375093e8e955.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_014_eb32c99cfcf2.jpg)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_015_10121b38a22a.jpg)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_016_b2b52f291615.jpg)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_017_34f213b44506.jpg)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_018_ce74f4928421.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_019_f68aed4bd1a6.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_020_cb341fd2b65f.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_021_1592cbd5f7d9.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_022_ffe84947133b.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_023_3e65363b58d8.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_024_057536d4572d.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_025_1caf56a4ae22.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_026_694edbea9cab.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_027_2c0292e38dbe.jpg)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_028_bdd2082fcfe1.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_029_b643d68177d7.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_030_9bf01a69a60a.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_031_ca8b2ad247a5.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_032_8c220aa17538.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_033_dac2bfc3c6e8.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_034_40e3fe3896a1.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_035_5c641d5731e9.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_036_a8c692324764.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_037_b2ff3fccb920.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_038_4cfe2f4246a1.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_039_5f291e3cad02.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_040_9c38327d1224.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_041_a3728929ac02.jpg)

### 四：实物

mos管常用有8脚、6脚、3脚。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_042_41be63f5e72b.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_043_69369c30f3a5.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_044_c63e2583bda6.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_045_7f1958ab346b.jpg)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_046_00c27905f2ca.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_047_1dd633e22625.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_048_bb59827aa21f.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_049_ac4648d38939.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_050_b886f34e24ea.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_051_81757515cfca.jpg)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_052_d4f675c565d7.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_053_f748a6e6bd98.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_054_fa0be906a82e.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_055_2d4d99d813e9.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_056_93bede127be2.jpg)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_057_4648385b33c3.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_058_3c86efe1a4c1.jpg)

### 五：答案

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_059_ecfd4e473d62.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_060_bfab6571a6dc.jpg)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_061_1d143bb9243e.jpg)

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_062_fd66e7d12969.jpg)  
 

以上，完，欢迎评论区补充

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[AI硬件 革命要来了？468亿打包55个人](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546780&idx=1&sn=c74ce05df1595007f66956696de4ac31&scene=21#wechat_redirect)**
    
-   **[一种好用的隔离型4-20mA发生电路](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546659&idx=2&sn=ff2999eec5c2ca80db9769e5a9a16762&scene=21#wechat_redirect)**
    
-   **[MOS管驱动电路（串联电阻、二极管）、发热原因和解决办法](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546611&idx=1&sn=6301e7f9220bdb56eb90a9395332d2c8&scene=21#wechat_redirect)**
    
-   **[【H桥电机驱动电路原理】-学习笔记](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546574&idx=1&sn=593d51900ecd6296111c02f2566f5ce8&scene=21#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\嵌入式_数模电_MOS管经典知识汇总_images\img_063_b46e8bcc08e0.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️