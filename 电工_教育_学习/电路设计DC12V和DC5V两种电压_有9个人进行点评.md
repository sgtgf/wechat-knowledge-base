# 电路设计DC12V和DC5V两种电压，有9个人进行点评

原创 王工 电路一点通 2025-05-14 11:38 广东

> 原文地址: [https://mp.weixin.qq.com/s/sN4d3MLRvkYRqWGq9sS67A](https://mp.weixin.qq.com/s/sN4d3MLRvkYRqWGq9sS67A)

在讲电路之前，我想先说几句。

1、首先感谢大家的评论，朋友圈差不多40来个兄弟在评论区给出意见，有几个群里也在讨论，还有几个兄弟把图发给我，一起琢磨。不管有没有实现功能，这种自我思考的过程是挺有意思的。

2、做硬件电路，真的是要靠积累，没有成千上万个细节是做不好硬件的，所以都说硬件靠经验，不是没有道理的。

3、本文的总结是好几个兄弟提出来的，希望能够收集大家的意见，看看别人是怎么想的，也希望能从中学到一点东西，一起学习，共同进步。

  

**以下进入正题**

**需求回顾：**

客户在使用产品时，需要考虑DC12V和DC5V两种电压，可同时使用，也可单独使用。那么可能出现三种情况：

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_000_31b94837e912.png)

  

1、只有DC12V输入时，电路正常工作；

2、只有DC5V输入时，电路正常工作；  

3、当同时输入DC12V和DC5V时，电路正常工作，且5V电压不能影响12V电压源，12V电压也不能影响5V电压源。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_001_02eaadff93f9.png)

很多兄弟就会想：这个简单，其实就是防反接，不是二极管就是MOS管，像上图那样最简单。因为客户需求电流比较大（max=8A），所以最好不要串二极管，不然二极管的功耗会很大，也可以选一个功率大些的二极管，但体积肯定很大，受限于功耗和板框大小，所以二极管不考虑。

总之，要设计一个最简单的电路，但是要实现功能，用的元件最少，最可靠，这样的产品才有竞争力。

  

  

**电路点评：**

## 电路1

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_002_cb74343cbc7b.png)

这位兄弟应该是想通过控制三极管的通断，进而控制PMOS的通断。图中三极管画错了，NPN画成了PNP，且发射极应该连接在GND。  

当DC12V输入时，NPN三极管导通，引起PMOS导通，12V输出。因为DC12V输入，所以5V串联的PMOS不通，同时体二极管会阻止12V灌入，5V接口无电压流入。

当5V输入时，通过PMOS体二极管输出，PMOS本身是无法导通的，所以全部电流流过体二极管，要知道体二极管流过的电流是有限的，这个是有点问题的。

当两组电压同时输入时，5V电压串联的PMOS也是无法开通的。

总之，电路看起来简单，但是没有达到想要的效果。

  

## 电路2

**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_003_1e049f89273a.png)**

当DC12V输入时，顺着二极管直接就输出。且12V连接到PMOS栅极，栅极被拉高，PMOS关断，体二极管会阻止12V灌入，5V接口无电压流入。  

当DC5V输入时，PMOS开通，5V电压输出，由于D1的存在不会倒灌进去DC12V接口。

当两组电压同时输入时，5V电压关断，PMOS的体二极管挡住12V过不来。

图中二极管D3，我觉得是多余的，而且会将PMOS的GS电压钳位在0.7V，导致管子无法开通。

  

## 电路3

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_004_f7b4bf407029.png)

乍一看，这个电路感觉有点复杂，用了5个MOS管。三种情况供电，两组电压各自回路上的PMOS都会自动打开，因为栅极直接到地，都会形成倒灌，所以这个功能没有实现。

  

## 电路4

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_005_14a3e7e9f97a.png)

这个兄弟设计的电路挺好玩的，巧妙的用了一个6V的稳压二极管，这个二极管的作用很大，给人一种不一样的感觉，很有意思。

当DC12V和5V同时输入时，稳压二极管D9导通，三极管Q4基极就有了电压（＞0.7V），Q4导通，这时三极管Q3的基极电压就会拉低，Q3截止，进而Q1，Q2截止，5V断开，同时体二极管会阻止12V的倒灌。

简单说，就是两组电压同时输入时，会断开5V，自动选择高端电压DC12V供电。

但是该电路有一个弊端和一个不确定性。

弊端：只有5V供电时，12V接口也会有5V电压。

不确定性：当先插上5V后，再插入12V时，12V可能会直接倒灌入5V电压。怎么讲？12V上电后，路径12V→D9→Q4，这个回路会把5V拉低从而使两个MOS截止。如果在截止前12V过来，就会直接倒灌入5V电压源。

  

## 电路5

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_006_3ddebe5eb6da.png)

这位兄弟设计的电路，按理说应该可以达到要求，电路简单。

  

## 电路6

以下这个图就是我设计的，跟上面兄弟的电路差不多。经过上面的分析后，相信大家应该也明白怎么回事了，大家尝试自己分析一下。

主要思路就是想达到一个自锁的功能，即：当两路电源同时供电时，关掉其中一路电源，且MOS内部的寄生二极管阻断另一路电源过来（图中阻值可忽略，可调）。

我跟一个朋友讨论过这个电路，应该没有什么问题，但是不确认实际使用时会不会出现没有考虑到的地方，如果有疑问，欢迎一起讨论。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_007_93304997c80a.png)

  

## 电路7

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_008_ace377b652ee.png)

这位兄弟的电路据说已经量产了千万次以上，完全没问题，稍加修改，几乎跟我的电路一样。

  

## 电路8

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_009_609965a0bd80.png)

这是我那天在地铁上，无意想到的另一个电路，思路跟上一个电路差不多，大家可自行分析，如果有疑问，欢迎一起讨论。

  

## 电路9

还有位兄弟推荐了一款芯片LM74610-Q1，这个芯片主要就是用来驱动外部MOS管，串联电源时可模拟理想二极管，也就是说串联回路基本可以看成零压降，这一点特别友好。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_010_c3eb219f3dec.png)

  

如果大家要用的话，具体的大家去看一下手册，里面的原理，参数，包括参考电路，layout都有讲。这里主要提一点：外部MOS选型的时候，体二极管压降最小电压为0.48V。

为什么会有这个要求呢？那是因为电压从0V到0.45V上升的这期间，会给电容Vcap充电，然后这个芯片才会正常工作，从而驱动NMOS打开。如果外部体二极管压降太小，芯片可能就无法正常工作。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_011_21d8b17bad53.png)

  

这个芯片虽好，但有两个弊端：

1、价格太高，对于成本有要求的，可能不太适用。  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_012_057551aa8acb.png)

  

2、应用场景比较狭窄，只用在这种特殊场合。如果你用的项目不多，且量不大，基本上没什么优势。  

以上都只是对电路进行一个粗略的分析，也可能有我没有考虑到的地方，实际使用还有待验证，请勿直接使用，毕竟没有量产过，硬件出错成本可是很高，本文旨在抛砖引玉。

如果你对以上电路有疑问，或还有更好的想法，请留言评论，谢谢！

  

-   [![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_013_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[FPGA工程师成长手记PPT-低速接口](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247546549&idx=2&sn=d451c3f5d0b90f5cecd43c656a416b8b&scene=21#wechat_redirect)**
    
-   **[（TL431)开关电源环路设计要点PDF](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247544590&idx=2&sn=d00339e654e3fc4a8ef92107e9789d1e&scene=21#wechat_redirect)**
    
-   **[电子电路识图电子书【直接领取】](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247542274&idx=2&sn=134ea717ff969059ebee8d82dc4bf96a&scene=21#wechat_redirect)**
    
-   **[常用汽车英语-外饰、内饰、引擎、底盘配件分布图](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247519990&idx=1&sn=fc3c723e01af5f52f55ff2bf9ab53362&scene=21#wechat_redirect)**
    

-   [电气识图入门笔记-143页pptx【直接领取、下载】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257708&idx=1&sn=f8fa4426a9cb241488683a3cf2ce16f0&scene=21#wechat_redirect)
    
-   [零基础看图学电气控制线路](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257754&idx=2&sn=2079167c41e1a90559fab4125a2b8140&scene=21#wechat_redirect)
    
-   [维修电工技能速成与实战技巧【298页】](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456257794&idx=1&sn=e1da4f1f474714b2344a5eb1d0af066c&scene=21#wechat_redirect)
    

**![图片](D:\电脑文件\公众号知识库\电工_教育_学习\电路设计DC12V和DC5V两种电压_有9个人进行点评_images\img_014_b46e8bcc08e0.jpg)**

******进大家庭⭕圈探讨回复:****** ******交流******

以“三点”行动支持！**分享💬点赞👍在看❤️**