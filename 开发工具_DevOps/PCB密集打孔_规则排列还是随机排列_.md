# PCB密集打孔，规则排列还是随机排列？

原创 硬件笔记本 2024-09-05 07:39 四川

> 原文地址: [https://mp.weixin.qq.com/s/-i8z8x-E8LFRkZfca6vBTg](https://mp.weixin.qq.com/s/-i8z8x-E8LFRkZfca6vBTg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

  

**过孔是什么**

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

过孔（Via），电路板上的孔，连接不同层之间的线路，把电路板从平面结构变成立体结构。

  

单层线路想不交叉太难了，双层或更多层线路，必须通过过孔来连接。通过孔壁上的铜，连通上下层的电路铜线。

![](PCB密集打孔_规则排列还是随机排列__images/img_002_3e66ec276632.jpg)

单层PCB，有些时候无法布线，必须通过过孔换层

  

![](PCB密集打孔_规则排列还是随机排列__images/img_003_e62299dfe4b1.jpg)

大大小小的过孔，连接不同层的电路

  

  

**过孔有哪些种类**

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

电路板上的过孔，主要有机械孔和激光孔两种。

![](PCB密集打孔_规则排列还是随机排列__images/img_004_cbf3a2de0d54.png)

  

**1、机械孔**

用机械钻头钻出来的孔。孔的内部直径在0.2mm以上。用更粗的钻头钻出来的孔就会更大。

消费电子产品通常按照0.3mm内径来设计。普通的电路板厂都可以做0.3mm的机械孔。

如果使用0.2mm和0.25mm的机械孔，钻头细钻孔速度慢钻头易折断，价格就要贵一些，也不是所有的PCB厂家都能做这么小的机械孔。

钻头一下子就把电路板钻穿了，所以机械孔也叫通孔。

  

  

**2、激光孔**

用激光打出来的孔。内径一般是0.1mm。很少有其他规格的激光孔。

因为激光的功率有限，无法直接打穿多层PCB板，通常用来做表层的盲孔。

**PCB板过孔设计的注意事项孔径尽量大一些：**上面讲了，小孔要用小钻头，小钻头价格高，对板厂要求也高。如果电路板面积较大，甚至可以用0.5mm内径的机械孔。

**尽量不用激光孔：**带有一层激光孔的电路板，比不带激光孔的贵30%（一阶板）。带有2层激光孔的，比1层激光孔的再贵30%（二阶板）。

**其他更贵的设计：**过孔工艺越复杂，电路板价格越高，最便宜的和最贵的相差几十倍以上。像0.2mm的机械孔比0.3mm的机械孔电路板贵20%左右；2层激光孔重叠的叠孔板，比2层激光孔交错的错孔板贵20%以上；苹果手机喜欢用的任意层互联板比普通只有机械孔的电路板贵10倍以上（全板都是重叠激光孔）。

  

**密集打孔，规则or随机**

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

  

每个过孔的内表面面积是有限的，通过的电流也是有限的。

对于电源线、地线等需要通过大电流的PCB线路，需要打很多个过孔。

![](PCB密集打孔_规则排列还是随机排列__images/img_005_6c3845d6d9fa.jpg)

随机打孔和规则打孔

  

这些过孔可以是矩阵式规则排列，也可以是随机排列的，这两种有没有区别呢？

规则排列的比随机排列的好看。随机排列的画图速度快。大部分公司没有强制要求，“有强迫症”的PCB工程师都喜欢用规则排列。

矩阵型规则排列的过孔，有可能在某些方向上对信号的阻挡能力更强，如果不刻意追求好看，随机打孔会更稳妥一些。

![](PCB密集打孔_规则排列还是随机排列__images/img_006_8f8c22b4fa63.jpg)![](PCB密集打孔_规则排列还是随机排列__images/img_007_d5dcc7ecfdf3.jpg)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。