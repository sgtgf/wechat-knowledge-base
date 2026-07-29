# MOS栅极-源极的下拉电阻作用

原创 硬件笔记本 2024-07-15 07:41 四川

> 原文地址: [https://mp.weixin.qq.com/s/4JjoDam1LuJisXDDFKeKXQ](https://mp.weixin.qq.com/s/4JjoDam1LuJisXDDFKeKXQ)

##### ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

MOSFET栅极-源极的下拉电阻有什么作用？

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS栅极_源极的下拉电阻作用_images\img_002_05b75c92e5aa.png)

米勒电容：**在栅极（G）和漏极（D）之间的一个寄生电容**。

当MOSFET关断时，米勒电容的存在，会使MOS管的Vds产生一个电压从接近0（饱和压降）到母线的变化过程，这个电压变化率就是“dv/dt”，然而电容就是电压变化发生作用的器件，电压在电容两端变化，即产生电流“i”。

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS栅极_源极的下拉电阻作用_images\img_003_6cc959b8356f.png)

GS之间有一层绝缘体，也就是二氧化硅（SiO2），因此G-S之间就是高阻抗（几十到几百兆不等），一旦驱动异常，它可能会通过米勒电容的电流给G-S充电，小电流高阻抗可能对应着高电压，栅极电压被充电，当超过门槛电压“Vgs(th)”，就会导致MOSFET重新开通，这是十分危险的情况。

可以看这个反激电源拓扑的MOSFET驱动，它就是米勒电容电流通过驱动芯片内部下拉低阻回路进行释放，避免栅极被充高而误导通。

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS栅极_源极的下拉电阻作用_images\img_004_fcd2ffb2020c.png)

在这里我们就知道了，驱动芯片内部已经存在泄放下拉电阻，但如果驱动电阻Rg在以外情况下开路或者没有连接，那么下拉电阻（R8）就可以给米勒电容提供泄放路径，让MOS管G-S之间保持低阻抗，稳定安全状态。这就是下拉电阻的重要作用了。

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS栅极_源极的下拉电阻作用_images\img_005_c30dfe4b76f6.png)

  

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS栅极_源极的下拉电阻作用_images\img_006_4584f930858c.png)

下拉电阻还有另一个作用：**预保护电阻**

我们知道MOS管G-S是高阻抗，这也是为什么它是 ESD敏感器件的原因。它的高电压施加在门极不易泄放，累积过程会损坏G-S极之间那层二氧化硅，导致器件失效。

因此，下拉电阻还兼顾了功耗和实际泄放效果。一般这个电阻选值在中小功率电源中（0~500W）选择大概10K-20K，大功率电源选择4.7K~10K。

![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS栅极_源极的下拉电阻作用_images\img_007_b0b5c38457eb.jpg)![](D:\电脑文件\公众号知识库\电工_教育_学习\MOS栅极_源极的下拉电阻作用_images\img_008_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。