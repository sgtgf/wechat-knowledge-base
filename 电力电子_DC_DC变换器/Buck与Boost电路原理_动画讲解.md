# Buck与Boost电路原理，动画讲解

原创 硬件笔记本 2023-08-21 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/-fN6SB9toA7t8HE6DbrcsQ](https://mp.weixin.qq.com/s/-fN6SB9toA7t8HE6DbrcsQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

  

  

Buck与Boost电路原理，动画讲解。转载自youtube。

-   [DCDC BUCK开关电源中的EMI辐射干扰分析](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505604&idx=1&sn=2d57c669d85907cdb7d6df55b85ff94e&chksm=c30a0816f47d8100a26438508dcad9668a515224fe63e888e269f3767073318bb093fabaa7f2&scene=21#wechat_redirect)
    
-   [为什么BUCK降压电路会出现奇怪的负电压？简单易懂一学就废](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247500716&idx=1&sn=f529ed8469a7fa8132c812dd4fac1e83&chksm=c30a1d7ef47d94687dd30c66e2a5319fc9b97ebb4ce81da169ff2771a574d5dd6d7a2f44b4e6&scene=21#wechat_redirect)
    
-   [BUCK电路，看完这篇我入门了](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247499182&idx=1&sn=00572c463e9018ec0d24256770267e1c&chksm=c30a237cf47daa6af36f352c50908bdb223e558f4678665289fbce4930daba96c941efbe474b&scene=21#wechat_redirect)
    
-   [前馈电容是如何影响buck电路的输出特性的？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247497084&idx=2&sn=1484a099a21236e771158241baefbf76&chksm=c30a2baef47da2b82b0cdb97ebb4205f05af3dd0e4975d0d98f821370ccc3253b8e61d8d63fc&scene=21#wechat_redirect)
    
-   [为了防止BUCK电源对传导测试的影响，我加了π型滤波，但电感又开始了啸叫。。。](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486551&idx=1&sn=c9009cd78ea5e66fd09a67efb2e97e05&chksm=c309d285f47e5b9332eec51006aa5ff7f22347c6339b8d56a70f5a985688324a7e6608120c70&scene=21#wechat_redirect)[详解BUCK电路](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247511558&idx=2&sn=d0e5b66ad9a3377cad7194d56903180b&chksm=c30a70d4f47df9c291abf08e96ccea110451655ccb108a04aca18b9f53af18f0064dc6d16e33&scene=21#wechat_redirect)
    
-   [怎么选择boost升压电路的电感？只要三个公式](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486535&idx=1&sn=5a64b1d3834100752d2a4d7b178e5b16&chksm=c309d295f47e5b830151646d0b594b32234311bbf7de4cda311e3954c34f270f4a174320d35d&scene=21#wechat_redirect)  
    

  

硬件工程师都在关注我们

![](Buck与Boost电路原理_动画讲解_images/img_002_2e84b7ba26c6.gif) ![](Buck与Boost电路原理_动画讲解_images/img_003_51d069a6484e.gif) ![](Buck与Boost电路原理_动画讲解_images/img_004_5fb296583be4.gif) ![](Buck与Boost电路原理_动画讲解_images/img_005_1f30148044c0.gif) ![](Buck与Boost电路原理_动画讲解_images/img_006_c5bc86d0867d.gif) ![](Buck与Boost电路原理_动画讲解_images/img_007_b38438d4de46.gif) ![](Buck与Boost电路原理_动画讲解_images/img_008_1d54e9fe0aef.gif) ![](Buck与Boost电路原理_动画讲解_images/img_009_9bb0105b1e46.gif)

![](Buck与Boost电路原理_动画讲解_images/img_010_de88c48250d0.gif) ![](Buck与Boost电路原理_动画讲解_images/img_011_3b83df2d253b.gif) ![](Buck与Boost电路原理_动画讲解_images/img_012_db521919e8d9.gif) ![](Buck与Boost电路原理_动画讲解_images/img_013_aea384ea417e.gif) ![](Buck与Boost电路原理_动画讲解_images/img_014_f4924e7a240a.gif) ![](Buck与Boost电路原理_动画讲解_images/img_015_a58db91dbb3b.gif) ![](Buck与Boost电路原理_动画讲解_images/img_016_f0edc68b0c53.gif) ![](Buck与Boost电路原理_动画讲解_images/img_017_3c93e54afedf.gif)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。