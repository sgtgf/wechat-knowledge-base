# BUCK降压电路分析：MOS管导通和断开

原创 电路一点通 2026-05-14 19:20 广东

> 原文地址: [https://mp.weixin.qq.com/s/\_mbWKylWoURPvcz7U3qvwA](https://mp.weixin.qq.com/s/_mbWKylWoURPvcz7U3qvwA)

> 本文介绍了BUCK电路的工作原理，通过分析电路在MOS管导通和断开两个阶段的能量转换，揭示了BUCK电路如何实现降压功能。电感在储能与释放能量时极性变化，电容则保持极性不变，二极管起到单向导通作用。通过调整开关管的占空比D，可以控制输出电压UO始终小于输入电压V1，从而实现稳定的输出电压。电感和二极管的选择对电路效率至关重要。

前段时间讲过了BOOST电路，现在该轮到讲 BUCK 电路了。

BUCK电路和BOOST电路用到的器件几乎一样，如果理解了BOOST电路的升压 原理 ，其实BUCK的降压原理也是很容易理解的。

下面简单的讲一下BUCK电路。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK降压电路分析_MOS管导通和断开_images\img_000_c8bbd2e4d968.png)  
图示为简单的BUCK 电路图 。

此电路具有电源，开关管，电感，二极管 电容，负载电阻器件。

其中，开关管选用的为MOS管，也可以选择三极管。其源极接PWM波。PWM的高低起伏控制着 MOS 管的导通与断开。

电感：可以将电能 转换 为磁能存储起来，也可以将磁能转换为电能进行释放。在整个电路中，需要注意到以下两点：  

**1 电感在进行储能与释放能量时，其极性会发生反向。**  
**2 电感电流不能突变，其只能线性放大和减小。这个从电感的公式L_di/dt=U就能看出来。_**\*

  

电容：具备储能与释放能量的特点，与电感相反，其极性不会发生变化。当外部电压大于电容电压时，其进行充电，当外部电压小于电容电压时，其开始放电。

二极管：具有单向导通，反向截止的特性。部分电路中，也有将此二极管改为MOS管的，我们称之为同步BUCK电路。然而我们今天要讲的是异步BUCK电路。

为了更好的讲解电路，还是分为两个阶段进行讲解。

下面以理想状态下，对电路进行分析。

  

MOS管导通![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK降压电路分析_MOS管导通和断开_images\img_001_320d69ad2c59.png)  
当MOS管导通时，电流流向如图所示。  
  

此时V1为整个电路进行供电，电感L1将电能转换为磁能进行储能。其极性表现为左端正极，右端负极。电容此阶段开始充电。电路输出电压UO1。电感两端的压差等于V1- UO1。

  

MOS管断开  
  

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK降压电路分析_MOS管导通和断开_images\img_002_4bf439e09ae2.png)  
当MOS管断开时，电流流向如图所示。  
此时电感相当于电池，对外进行放电。因为电感电流不能突变，所以流经电感的电流流向不变。极性发生变化，表现为左负右正。此时二极管起到了续流的作用。此时输出电压为UO2。  
UO1= UO2。

当开关闭合与断开的瞬间，电感极性会发生偏转，此时负载由电容供电。

__前面我们提过，电感的秒伏定理。根据电感的秒伏定理可知：  
UO2_（1-D）_T= （V1-UO1）_DT  
即简化一下：UO1_(1-D)=（V1- UO1）_D  
UO1=D_V1  
因为D永远小于1，所以UO1永远小于输入电压V1。__

为了更好的明白BUCK电路，我们可以这样理解。假设我们想要指定的电压Uo输出。

**在MOS管闭合时，因为电感电流不能突变，其右端电势也只能随着电源供电储能，右端电势从0V逐渐升高，当升高至Uo以上时，MOS管瞬间断开，停止输出电压的继续升高，此时输出电压略高于设定值。  
在MOS管断开后，其开始释放能量，当右端输出电压低于Uo时，MOS管瞬间再闭合，阻止输出电压的继续下降。  
来回反复的循环，使得输出电压始终保持在Uo上下轻微的徘徊，而这种徘徊的压差可以理解为我们常说的纹波值。其可以通过调整输出电容的参数来降低纹波，保持稳定的输出电压。**  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\BUCK降压电路分析_MOS管导通和断开_images\img_003_35c99e1a588a.png)  
由于二极管以及MOS管都为非理想状态，所以输出电压与上述公式计算存在偏差。所以。为讲究效率，二极管以及MOS管 电感的选择也是非常的重要的，后面的文章我再进行讲解。

## **一点通推荐**

[硬件测试用例规范手册.docx](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567942&idx=2&sn=31e81f733e79a056552dc93935c47702&scene=21#wechat_redirect)

[智能硬件全流程测试手册：构建高效测试体系](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568440&idx=2&sn=e97b55d6ae91af88403f9033a6e54e42&scene=21#wechat_redirect)

[硬件设计说明书编制规范手册（标准Word版）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568416&idx=2&sn=a6fbb11d722eb24bd0d67207d27e23c2&scene=21#wechat_redirect)

[硬件产品经理市场调研分析手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568392&idx=1&sn=53fba20d380e3c0eef53eac93860175b&payreadticket=HEfeLt-x_BTSXASkTFqLUQVhT2UVByzLeZQVQcVqbvbPGlBGAq5DY1HTpl_itCzChAspp_c&scene=21#wechat_redirect)  

[硬件经理产品生命周期管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247568241&idx=2&sn=83b05e53077b753741a3ca16cd891382&payreadticket=HFdBQY7_cStRwxFyhiZc4F5sgsuqMGwHf_ZPJmxgWHlbGzXuB6iraKpTnhjLOLKrv9pfbzo&scene=21#wechat_redirect)

[硬件设计开发指导手册-docx文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567287&idx=2&sn=df35cb4391c24e71b35a23e3bccc67f6&scene=21#wechat_redirect)

[硬件技术评审与风险管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567767&idx=2&sn=f35b40b747beee7a5df2f9fdbc2a7d36&scene=21#wechat_redirect)

[硬件研发整机电子系统规划与架构设计手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567811&idx=2&sn=5950431b22dab9f80a9a9b300e80568c&scene=21#wechat_redirect)

[硬件产品开发与量产全流程管理手册（EVT/DVT/PVT/MP）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567720&idx=2&sn=638800807c6b5c7759578b4b9e1d565d&scene=21#wechat_redirect)

[电源硬件验证与测试用例编写手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567313&idx=2&sn=363dd274654c8f3590c1c860623c39da&scene=21#wechat_redirect)

[硬件开发全流程手册（.docx 文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567403&idx=2&sn=6b8511c131bf596492e9c8724be216d5&token=2048927905&lang=zh_CN&scene=21#wechat_redirect)

[电源开发经理设计开发流程和规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566966&idx=2&sn=4a9569ebd0a6c25adb6e3fdf1af37332&scene=21#wechat_redirect)

[硬件经理方案评审与成本控制手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566835&idx=2&sn=7f95c948eafd554bfdf921da53eb597d&token=549077461&lang=zh_CN&scene=21#wechat_redirect)

  

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️