# 锁相环 PLL 的组成和应用

原创 面包板社区 硬件笔记本 2024-08-18 18:57 四川

> 原文地址: [https://mp.weixin.qq.com/s/nP59geaUkpu8SvBdOSnAgA](https://mp.weixin.qq.com/s/nP59geaUkpu8SvBdOSnAgA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

锁相环路，简称PLL，作用：可以锁定相位，可以消除频率误差。  
  
**1、锁相环路基本组成**  

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_002_b84550dabd2a.png)

鉴相器（PD）：用以比较ui、uo相位，输出反映相位误差的电压uD(t)。  
  
环路滤波器（LF）：用以滤除误差信号中的高频分量和噪声，提高系统稳定性。  
  
压控振荡器(VCO)：在uC(t)控制下输出相应频率 fo。  
  
若两正弦信号频率相等，则二者之相位差恒定；反之，只要保持其相位差恒定，即可使两信号频率相等。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_003_032f7aa9faa6.png)

锁相环路的基本工作原理：  
  
若wi ≠wo，则ui(t)和uo(t)之间产生相位变化 → uD(t) ，与瞬时误差相位成正比→uc(t)，滤除了高频分量和噪声→ wo ，去接近wi ；最终使 wi = wo ，相位误差为常数，环路锁定，这时的相位误差称为剩余相位误差或稳态相位误差。  
  
**2、锁相环路的数学模型**  
  
**鉴相器的相位模型：**  

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_004_a0f5b9e808c6.png)

模型为：  

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_005_0e1ae69f92ce.png)

**压控振荡器的相位模型：**  

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_006_4f5bdf854424.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_007_dae4cff4bc20.png)

模型为：  

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_008_78a89270d0ac.png)

**环路滤波器的电路模型：**  

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_009_f37d1226dfaf.png)

模型为：  

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_010_057cc2e56d19.png)

**PLL的相位模型和基本方程：**  

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_011_b03c6db53b37.png)

上式是一个非线性微分方程,它完整地描述了环路的控制过程。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_012_9a3c0e6fb3f5.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_013_4cfd00f7a508.png)

锁相环路(PLL)是一个传递相位的闭环系统，只要研究它的相位数学模型或它的微分方程，即可获得该系统的完整性能。  

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_014_3e6bc2f392cb.png)

**3、锁相环路的捕捉与跟踪**

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_015_dc4c75d1a7e2.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_016_1061bb13cd64.png)

**4、 集成锁相环路**  
  
**通用型单片集成锁相环路L562简介：**  
  
为多功能单片集成PLL。内部除有PD、VCO外，还有三个放大器和一个限幅器。工作频率可达30MHz。  
  
鉴相器（PD）采用双差分对模拟相乘器电路，压控振荡器（VCO）采用射极耦合多谐振荡器电路。

限幅器用于限制锁相环路的直流增益，以控制环路同步带的大小。  
  
只需单电源供电，一般采用18V电源，最大电流14mA。输入信号电压最大值为3V。  
  
L562内部结构与外引脚排列：  

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_017_7678df3984ca.png)

L562内部的射极耦合多谐VCO：  

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_018_6cfd1044f1df.png)

**CMOS锁相环路CD4046简介：**为数字PLL。内有两个PD、VCO、缓冲放大器、输入信号放大与整形电路、内部稳压器等。具有电源电压范围宽（5~15V）、功耗低、输入阻抗高  等优点。工作频率0~1MHz。内部VCO产生50%占空比的方波。输出电平可与TTL电平或CMOS电平兼容。

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_019_dacf3876b4a5.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_020_d53175b9d724.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_021_5b123a1e28c1.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_022_e119ccb9e5f3.jpg)![](D:\电脑文件\公众号知识库\电工_教育_学习\锁相环_PLL_的组成和应用_images\img_023_4700b023e565.jpg)

## 

**声明：**

  

声明：文章来源：面包板社区czd886分享。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。