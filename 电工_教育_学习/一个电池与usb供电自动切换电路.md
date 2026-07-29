# 一个电池与usb供电自动切换电路

原创 硬件笔记本 2024-03-09 08:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/ghnuPGkyFNBv2gfaHmZ1Zw](https://mp.weixin.qq.com/s/ghnuPGkyFNBv2gfaHmZ1Zw)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

日常电器中，双电源自动切换的例子随处可见如：交流适配器和USB供电的电源切换、电池供电和USB供电的自动切换。

这些电路一般都遵守一个原则：优先选择电压高者使用。

其实最开始这个电路是在 锂电充电电路上发现的，数据手册非常贴心的给出了双电源自动切换的参考应用，简单易实现。

如果需要电池和USB电源切换，只需将USB电源放在上面，锂电放在下面。反正无论怎么更改，上面的电压始终要高于下面的。

**电路：**

![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_002_a11ef4af424a.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_003_ba8d95be7944.png)

**电路实际现象：**

只插入交流适配器，电路会自动切换为交流适配器供电。

只插入USB-5V电源，电路会自动切换为USB供电。

同时将交流适配器和USB-5V电源接入电路，由于交流适配器的输出电压一般为 5.5V以上，比USB电源的5V略高，电路会自动切换为交流适配器供电。

  

**电路原理：**

电路由 1个P-MOS（如AO3401）、1个二极管（推荐用肖特基，压降小）、1个适当阻值的下拉电阻 组成。

假设USB电源电压为5.0V，交流适配器的电压为5.5V，比USB的略高。

当交流适配器的 5.5V单独接入时，二极管导通，电路自动切换为交流适配器供电，此时用电端电压为 5.5 - 0.3 = 5.2V。

当USB-5V单独接入时，P-MOS的DS寄生二极管首先导通，S极电压为 5 - 0.7 = 4.3V，而此时的G极被下拉电阻拉低为0V，故 Vgs = 0 - 4.3 = -4.3V。-4.3V < P-MOS的GS最低导通门限电压，于是 P-MOS导通，之后用电端电压为 5 - I\*Ron。由于MOS的导通电压都比较低，约几十mΩ，且一般电路电流都不会超过2A，故P-MOS的导通压降几乎可以不计。可以非常高效的将5V输出至用电端。

当交流适配器5.5V与USB-5V同时接入时，肖特基D1导通，此时 P-MOS的G极电压为 5.5V，S极电压为 5.2V，Vgs = 5.5 - 5.2 = 0.3V，0.3V > P-MOS的GS最低导通门限电压，于是 P-MOS关断。电路便自动切换为由输入电压较高的交流适配器供电。

同理此方法同样适用于 电池输入与USB电源的自动切换。将USB电源连接在电路输入侧的上面，4.2V锂电连接在电路输入侧的下面，电路会优先选择电压高者。

版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。

原文链接：https://blog.csdn.net/Mark\_md/article/details/108800154

硬件工程师及从业者都在关注我们

![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_004_27e4e85ce630.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_005_26e7c42e5929.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_006_86e7b1720ef8.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_007_607a9b5809f6.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_008_c337f32f2ad2.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_009_845d28096f90.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_010_2e2b5ebc409a.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_011_16e467ebcf07.gif)

![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_012_ebed19ebd456.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_013_de9b387fc9a9.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_014_fb5805018722.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_015_25764f7ff52f.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_016_f992681cd3b5.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_017_d13d18656a84.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_018_fbbfff43554c.gif) ![](D:\电脑文件\公众号知识库\电工_教育_学习\一个电池与usb供电自动切换电路_images\img_019_05704500a9db.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。