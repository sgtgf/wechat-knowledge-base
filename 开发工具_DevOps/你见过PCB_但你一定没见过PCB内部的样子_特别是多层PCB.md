# 你见过PCB，但你一定没见过PCB内部的样子，特别是多层PCB

原创 硬件笔记本 2024-07-05 07:38 四川

> 原文地址: [https://mp.weixin.qq.com/s/STjcoQMCq10owQp0D8lcyQ](https://mp.weixin.qq.com/s/STjcoQMCq10owQp0D8lcyQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

硬件工程师刚接触多层PCB的时候，很容易看晕。动辄十层八层的，线路像蜘蛛网一样。

今天画了几张多层PCB电路板内部结构图，用立体图形展示各种叠层结构的PCB图内部架构。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138aJHgFsGZV3Pdx8XgB2nnqibWicrAjibAqIDuAmeLkWQyr6wOjgX0eIM7iaA/640?wx_fmt=png&from=appmsg)

  

**01**

  

**高密度互联板(HDI)的核心 在过孔**

  

多层PCB的线路加工，和单层双层没什么区别，最大的不同在过孔的工艺上。

  

**线路都是蚀刻出来的，过孔都是钻孔再镀铜出来的**，这些做硬件开发的大家都懂，就不赘述了。

  

多层电路板，通常有**通孔板、一阶板、二阶板、二阶叠孔板**这几种。更高阶的如**三阶板、任意层互联板**平时用的非常少，价格贼贵，先不多讨论。

  

一般情况下，8位单片机产品用**2层**通孔板；32位单片机级别的智能硬件，使用**4层-6层**通孔板；Linux和Android级别的智能硬件，使用**6层**通孔至8一阶HDI板；智能手机这样的紧凑产品，一般用**8层**一阶到10层2阶电路板。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138akzyibMzaFjO3icNXEphzvuKQSicvpBNhaqYzib2hXibb8lPKToiaH5hwKH7g/640?wx_fmt=png&from=appmsg)

8层2阶叠孔，高通骁龙624

  

  

**02**

  

**最常见的通孔**

  

只有一种过孔，从第一层打到最后一层。不管是外部的线路还是内部的线路，孔都是打穿的，叫做通孔板。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138aEr88vHIUJaf6bagHjIq1VOSuOFDX9XiabpBawOhvunzWHyU4xibTbvicw/640?wx_fmt=png&from=appmsg)

**通孔板和层数没关系**，平时大家用的2层的都是通孔板，而很多交换机和军工电路板，做20层，还是通孔的。

  

用钻头把电路板钻穿，然后在孔里镀铜，形成通路。

  

这里要注意，通孔内径通常有0.2mm、0.25mm和0.3mm，但一般**0.2mm的要比0.3mm的贵不少**。因为钻头太细容易断，钻的也慢一些。多耗费的时间和钻头的费用，就体现在电路板价格上升上了。

  

  

**03**

  

**高密度板(HDI板)的激光孔**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138atVNDrrpFrBYZBLhxiaxib2SQCdGahZ7iakcCib5dmD5na2BqUbJQ5yniabg/640?wx_fmt=png&from=appmsg)

这张图是6层1阶HDI板的叠层结构图，表面两层都是激光孔，0.1mm内径。内层是机械孔，**相当于一个4层通孔板，外面再覆盖2层**。

  

激光只能打穿玻璃纤维的板材，不能打穿金属的铜。所以外表面打孔不会影响到内部的其他线路。

  

激光打了孔之后，再去镀铜，就形成了激光过孔。

  

  

**04**

  

**2阶HDI板 两层激光孔**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138aEFiaFl3c7pAMhJuZqDox9l5jSTibWMtTYgQk7SyWq9mhn9oUdyFnlDuA/640?wx_fmt=png&from=appmsg)

这张图是一个6层2阶错孔HDI板。平时大家用6层2阶的少，大多是8层2阶起。这里更多层数，跟6层是一样的道理。

  

**所谓2阶，就是有2层激光孔。**

  

**所谓错孔，就是两层激光孔是错开的。**

  

**为什么要错开呢？**因为镀铜镀不满，孔里面是空的，所以不能直接在上面再打孔，要错开一定的距离，再打上一层的空。

  

6层二阶=4层1阶外面再加2层。

  

8层二阶=6层1阶外面再加2层。

  

  

**05**

  

**叠孔板 工艺复杂价格更高**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138axOOyib4PDRlzunRDDkFibibQ0aicpgHnZKeibuhzf2baB1u5DovmRib12jmA/640?wx_fmt=png&from=appmsg)

错孔板的两层激光孔重叠在一起。**线路会更紧凑。**

  

需要把内层激光孔电镀填平，然后在做外层激光孔。价格比错孔更贵一些。

  

  

**06**

  

**超贵的任意层互联板 多层激光叠孔**

  

就是每一层都是激光孔，每一层都可以连接在一起。想怎么走线就怎么走线，想怎么打孔就怎么打孔。

  

**Layout工程师想想就觉得爽！再也不怕画不出来了！**

  

**采购想想就想哭，比普通的通孔板贵10倍以上！**

  

所以，也就只有iPhone这样的产品舍得用了。其他手机品牌，没听说谁用过任意层互联板。

  

**总 结**

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138aorJGfWT5urr2iaEibTI5sRaqkDSO5cKh6RboKj53xXrGSsgBmTiatenhw/640?wx_fmt=png&from=appmsg)

最后放张图，再仔细对比一下吧。

  

请注意观察孔的大小，以及孔的焊盘是封闭的还是开放的。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。