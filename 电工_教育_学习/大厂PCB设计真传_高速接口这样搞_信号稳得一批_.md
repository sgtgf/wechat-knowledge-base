# 大厂PCB设计真传：高速接口这样搞，信号稳得一批！

原创 王工 硬件笔记本 2025-04-21 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/AIxqDHMy4Ww7oZITplahNw](https://mp.weixin.qq.com/s/AIxqDHMy4Ww7oZITplahNw)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&tp=wxpic "音符")

  

  

大家好，我是王工。

  

近期在公司PCB layout评审过程中，关于USB3.0背面接口区域是否需要做掏空处理的问题，团队中存在一些不同的见解。今天我想借此机会与大家一起探讨交流这个技术细节，看看大厂都是要求怎么做的。

  

011

****大厂对高速接口的设计要求****

在高速信号接口，如USB3.0、HDMI、PCIe、SATA等的设计规范中，一些知名芯片厂商都会提出明确的设计要求。

  

USB3.0座子的焊盘和AC耦合电容的焊盘下方必须挖空一层来保证阻抗的连续性，挖空的大小，不小于封装焊盘尺寸。

![](D:\电脑文件\公众号知识库\电工_教育_学习\大厂PCB设计真传_高速接口这样搞_信号稳得一批__images\img_002_09a6cf686c01.png)

  

  

HDMI座子的焊盘和TVS管的焊盘的下方必须挖空一层来保证阻抗的连续性，挖空的大小，不小于封装焊盘尺寸。

![](D:\电脑文件\公众号知识库\电工_教育_学习\大厂PCB设计真传_高速接口这样搞_信号稳得一批__images\img_003_ee55fea2fa77.png)

  

  

PCIE Slot的焊盘和AC耦合电容的焊盘的下方必须挖空一层来保证阻抗的连续性，挖空的大小，不小于封装焊盘尺寸。

![](D:\电脑文件\公众号知识库\电工_教育_学习\大厂PCB设计真传_高速接口这样搞_信号稳得一批__images\img_004_d469417e7632.png)

  

  

SATA座子的焊盘和AC耦合电容的焊盘的下方必须挖空一层来保证阻抗的连续性，挖空的大不小于封装焊盘尺寸。

![](D:\电脑文件\公众号知识库\电工_教育_学习\大厂PCB设计真传_高速接口这样搞_信号稳得一批__images\img_005_0e7c189ef90f.png)

  

  

  

021

****从原理上来理解挖空参考层的要求****

#### **为什么需要挖空参考层？**

上面其实芯片大厂也有提到，高速接口信号（如HDMI 2.1的12Gbps速率）对**阻抗连续性**极其敏感。焊盘和TVS管（静电保护器件）的焊盘区域由于以下原因会导致阻抗突变：

-   **焊盘厚度增加**：相比普通走线，焊盘更厚，导致局部电容增大，阻抗降低。
    
-   **TVS管寄生电容**：TVS管本身有寄生电容（如0.5pF~2pF），会进一步降低高频信号阻抗。
    

  

以下是各高速接口的传输线阻抗要求

HDMI接口，传输线阻抗差分100ohm，±10%。

![](D:\电脑文件\公众号知识库\电工_教育_学习\大厂PCB设计真传_高速接口这样搞_信号稳得一批__images\img_006_2f450b3251fa.png)

  

  

PCIE接口，传输线阻抗差分90ohm，±10%

![](D:\电脑文件\公众号知识库\电工_教育_学习\大厂PCB设计真传_高速接口这样搞_信号稳得一批__images\img_007_f3fcf71d90aa.png)

  

SATA接口，传输线阻抗差分90ohm，±10%

![](D:\电脑文件\公众号知识库\电工_教育_学习\大厂PCB设计真传_高速接口这样搞_信号稳得一批__images\img_008_194de9c90894.png)

  

  

USB3.0接口，传输线阻抗差分90ohm，±10%

![](D:\电脑文件\公众号知识库\电工_教育_学习\大厂PCB设计真传_高速接口这样搞_信号稳得一批__images\img_009_2dcf05c55446.png)

  

**挖空相邻参考层（如GND或Power平面）的作用**：  
**减少寄生电容**：去除参考层后，焊盘与平面间的电容减小，补偿因焊盘变厚或TVS管引入的容性负载。  
**维持阻抗匹配**：使信号路径的阻抗尽量接近设计值。

  

#### **为什么挖空尺寸≥焊盘尺寸？**

-   **电场分布影响**：高速信号的电场不仅分布在焊盘正下方，还会向外扩散（边缘场效应）。若挖空区域小于焊盘，参考层边缘仍会引入额外电容。
    
-   **制造公差**：PCB加工存在对位误差，挖空稍大可确保覆盖实际焊盘区域。
    

****总结**：挖空HDMI焊盘和TVS管下方的参考层，本质是通过控制电场分布来优化阻抗连续性，是高速信号完整性的关键设计手段。**

  

  

参考内容：

https://support.huawei.com/enterprise/zh/doc/EDOC1100304822/16ac287

  

如果这篇文章对你有帮助，别忘了**点赞**、**收藏**，并**分享**给更多需要的人！

**写在最后**

都说硬件工程师越老越吃香，这句话也告诉我们硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

推荐阅读（点击图片直接进入）

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\大厂PCB设计真传_高速接口这样搞_信号稳得一批__images\img_010_8f872b8ba8ee.png)

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\大厂PCB设计真传_高速接口这样搞_信号稳得一批__images\img_011_ae4afad92afd.png)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\大厂PCB设计真传_高速接口这样搞_信号稳得一批__images\img_012_8f8c22b4fa63.jpg)![图片](D:\电脑文件\公众号知识库\电工_教育_学习\大厂PCB设计真传_高速接口这样搞_信号稳得一批__images\img_013_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：原创文章，转载请注明出处。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)