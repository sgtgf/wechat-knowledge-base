# 做电源，不懂LLC就亏大了！

原创 王工 硬件笔记本 2025-06-05 07:55 四川

> 原文地址: [https://mp.weixin.qq.com/s/jZHQ00d3DPRMFw121t5KoQ](https://mp.weixin.qq.com/s/jZHQ00d3DPRMFw121t5KoQ)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

### 

### **大家好，我是王工。**

今天给大家分享一份**LLC谐振转换器的设计指南**，来自仙童半导体（Fairchild）的经典文档。  

如果你在搞电源设计，尤其是**高效率、高功率密度**的电源，**LLC谐振拓扑**绝对是绕不开的！为啥？因为它能实现**零电压开关（ZVS）**，大幅降低开关损耗，效率轻松做到**90%以上**，特别适合**大功率适配器、服务器电源、LED驱动**等场景。

这份PDF有38页，从**基本原理、设计流程到实际案例**，都有讲解！下面我挑重点给大家捋一捋，文末有完整PDF获取方式，记得看到最后！

  

### **1、LLC到底牛在哪？**

传统硬开关电源（比如反激、正激）在高频工作时，MOS管一开一关就会产生损耗（电压电流重叠导致的**开关损耗**），频率越高损耗越大，效率上不去。

![](做电源_不懂LLC就亏大了__images/img_002_49c621a8d8b4.png)

而**LLC谐振变换器**的妙处在于：

-   **ZVS（零电压开关）**：MOS管导通时电压已经降到0，几乎没有开关损耗！
    
-   **宽输入/负载范围**：即使负载很轻，也能稳定工作，频率变化小。
    
-   **集成变压器设计**：把谐振电感和变压器集成在一起，省掉一个磁性元件，体积更小！
    

简单来说，**LLC就是高频高效电源的“黑科技”**，搞懂了它，你的电源设计水平直接上一个台阶！

  

### **2、串联谐振（SRC） vs. 并联谐振（PRC） vs. LLC**

文档里对比了三种谐振拓扑，咱们快速过一下：

#### **（1）串联谐振（SRC）**

-   **优点**：通过ZVS降低开关损耗EMI，降低高频磁性元件的尺寸。
    
-   **缺点**：**负载调节差**，空载时没法稳压，输出电流波动大。
    

#### **（2）并联谐振（PRC）**

-   **优点**：空载也能工作，输出电流平滑，适合大电流场景。
    
-   **缺点**：初级电流几乎与负载无关：有效电流在谐振网络内循环，即使在无负载情况下。循环电流随输入电压增加而增加：不适合于输入电压较宽的应用场合
    

#### **（3）LLC谐振（终极方案）**

**它结合了SRC和PRC的优点**：

-   通过ZVS降低开关功耗：提高效率；
    
-   宽负载范围下频率变化范围小；
    
-   零电压转换，即使在无负载的情况下。
    

**结论**：如果要搞高效电源，LLC绝对是首选！

### 

### **还有一些计算公式和举例，大家就自己看了，以下是PDF文档内容：**

![](做电源_不懂LLC就亏大了__images/img_003_f485bca456df.jpg)

![](做电源_不懂LLC就亏大了__images/img_004_4d0e9baf68d0.jpg)

![](做电源_不懂LLC就亏大了__images/img_005_d3230d071823.jpg)

![](做电源_不懂LLC就亏大了__images/img_006_8df1d54bc2a5.jpg)

![](做电源_不懂LLC就亏大了__images/img_007_6edc398f6568.jpg)

![](做电源_不懂LLC就亏大了__images/img_008_352d31307fa1.jpg)

![](做电源_不懂LLC就亏大了__images/img_009_135d13fd0090.jpg)

![](做电源_不懂LLC就亏大了__images/img_010_c36e15ca2fcf.jpg)

![](做电源_不懂LLC就亏大了__images/img_011_b134185832e2.jpg)

![](做电源_不懂LLC就亏大了__images/img_012_ea54deb17946.jpg)

![](做电源_不懂LLC就亏大了__images/img_013_1b97914ed96b.jpg)

![](做电源_不懂LLC就亏大了__images/img_014_2a5266743e95.jpg)

![](做电源_不懂LLC就亏大了__images/img_015_1cb2374ed2e0.jpg)

![](做电源_不懂LLC就亏大了__images/img_016_f63b2780b2a2.jpg)

![](做电源_不懂LLC就亏大了__images/img_017_a4e97367d710.jpg)

![](做电源_不懂LLC就亏大了__images/img_018_5abea0acabd1.jpg)

![](做电源_不懂LLC就亏大了__images/img_019_be24c87dc1e7.jpg)

![](做电源_不懂LLC就亏大了__images/img_020_3254a7b9cf1c.jpg)

![](做电源_不懂LLC就亏大了__images/img_021_2a7b95f78abd.jpg)

![](做电源_不懂LLC就亏大了__images/img_022_539b7b340505.jpg)

![](做电源_不懂LLC就亏大了__images/img_023_e50919ce358d.jpg)

![](做电源_不懂LLC就亏大了__images/img_024_d1574eed6364.jpg)

![](做电源_不懂LLC就亏大了__images/img_025_94910ff18d68.jpg)

![](做电源_不懂LLC就亏大了__images/img_026_0ac7c63d9d35.jpg)

![](做电源_不懂LLC就亏大了__images/img_027_74c325ba083b.jpg)

![](做电源_不懂LLC就亏大了__images/img_028_218ab713c9bd.jpg)

![](做电源_不懂LLC就亏大了__images/img_029_56d77ab510a0.jpg)

![](做电源_不懂LLC就亏大了__images/img_030_7d62b8ac12ee.jpg)

![](做电源_不懂LLC就亏大了__images/img_031_a8b19e05b954.jpg)

![](做电源_不懂LLC就亏大了__images/img_032_04a1fb3d1305.jpg)

![](做电源_不懂LLC就亏大了__images/img_033_74ac4ef0fbe5.jpg)

![](做电源_不懂LLC就亏大了__images/img_034_c291a5e2343c.jpg)

![](做电源_不懂LLC就亏大了__images/img_035_12e24a2a1044.jpg)

![](做电源_不懂LLC就亏大了__images/img_036_2240e02f7702.jpg)

![](做电源_不懂LLC就亏大了__images/img_037_9b8e64ffd5f3.jpg)

![](做电源_不懂LLC就亏大了__images/img_038_764ea45b9dca.jpg)

![](做电源_不懂LLC就亏大了__images/img_039_ca6679fba7a6.jpg)

![](做电源_不懂LLC就亏大了__images/img_040_ad1e81dbc9bb.jpg)

在微信公众号硬件笔记本，后台回复LLC谐振转换器的设计，即可获取PDF文档。

  

**写在最后**

都说硬件工程师越老越吃香，这句话也告诉我们硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

推荐阅读（点击图片直接进入）

[![图片](做电源_不懂LLC就亏大了__images/img_041_8f872b8ba8ee.png)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247500681&idx=1&sn=117bdaa8c04eecdda16fb1d0c0e9fa37&scene=21#wechat_redirect)

[![图片](做电源_不懂LLC就亏大了__images/img_042_ae4afad92afd.png)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![图片](做电源_不懂LLC就亏大了__images/img_043_8f8c22b4fa63.jpg)![图片](做电源_不懂LLC就亏大了__images/img_044_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：文字原创，PDF来自仙童。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)