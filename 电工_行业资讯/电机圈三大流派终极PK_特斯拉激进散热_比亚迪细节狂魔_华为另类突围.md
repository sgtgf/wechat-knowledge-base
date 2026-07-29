# 电机圈三大流派终极PK：特斯拉激进散热、比亚迪细节狂魔、华为另类突围

原创 电机新视界 2025-03-12 13:48 上海

> 原文地址: [https://mp.weixin.qq.com/s/YwrLNe5xq1fNmBeRsYTfMA](https://mp.weixin.qq.com/s/YwrLNe5xq1fNmBeRsYTfMA)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0slLZrK8icrAxiasOzvBauyjAGpAZKhl6uicc6SuJN8icBNwhqTMvBBrO7DL7Pgyx0ZkaXuQreu6Lfh1A/640?wx_fmt=jpeg&from=appmsg)


来源：电动新视界

  

首先特斯拉3D6电机的转子采用经典的单V永磁结构，采用三分段的方式对噪音进行优化，中间分段是边缘的两倍。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIZqYlOmhsknLBzkRzXJUbibTiaLvicIFKWOl8EfMNH2kmKKzfNz40De9ZA/640?wx_fmt=png&wxfrom=13&tp=wxpic)

之前介绍的比亚迪转子采用6段V型（中间粗的其实是2级，看上去只有5段，实际是6段）

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIVTDoJxRvbP12WjxIre4BCNmAJuwu5fLWIgDM26NtZ3ZYdROiaXIrZRw/640?wx_fmt=png&wxfrom=13&tp=wxpic)

这种错极设计我们之前讲过，但分段细致度包括鲁片却没有之前比亚迪和华为的转子那么细致。包括上一代特斯拉电机转子侧面的噪音优化辅助槽方面是做得非常细致的，分高低两种，其中大辅助槽放置在V字磁钢槽的表面磁桥处，小辅助槽放置在靠近极中心的地方。这次特斯拉3D6转子上我们暂时没发现之前那么细致的高低搭配，简化为单一半径的静音槽，结合同样比较简化的3分段设计来看，特斯拉整体细致度没有那两家那么好的。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIwgyXdlibxZQ5B3kzuaOj0KocNRN7KXxEOmpC2hKYePwTiaAEtjMc54vw/640?wx_fmt=png&wxfrom=13&tp=wxpic&wx_lazy=1&wx_co=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIVuGNKM6uZv6E1k9ZLfSLxJI8dNqPYSbSGrf54W3eelG4TjAuR9IZ9Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

光切定子肯定有人觉得不过瘾，没关系，咱们这一期为了更好展现技术细节，老王来到了线切割加工中心，咱们把电机转子轴都剖开看一看。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HI8XYBmian4fFfewMXg5urFaX377ShgicsDxT3CaHGwF20G4VzGZn5Mksg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

撰稿前老王在一些咨询机构报告中看到了上一代特斯拉电机轴，是油液先进入到中心，由突出部甩到内壁后，冷却油再从四个小孔喷出进行散热。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIp7TWALmV6OzibWIGKtes7CTTr9h1jqkfks9wuiahsP2aGfFyicYTWws7Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

**电机低效制热模式润滑油和热流量示意**

这次切割后发现，特斯拉回归了和比亚迪华为一样的直通空心结构，油液进入端环之后，能立即给到转子两侧的甩油孔，给转子进行冷却，但仔细看还是没有比亚迪考虑那么细致，因为比亚迪的油道是可以流经永磁体两侧而特斯拉多数油液只能通过中间的减重孔，没有比亚迪那么直接，华为按理来说也可以做到和比亚迪一样的散热能力，只可惜用粘胶把油道填满了。不过整体三者都算是能对转子进行芯部冷却的电机。还是说得过去的。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIaHHTicSOvZtxOJ6jl2wMtPAGxAdviaBUo2jeicuSZ3CgibjE3E901micJxw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

另外关于**特斯拉转子油道**的这个设计变化，老王的猜测是一开始的轴芯突出部，应该是考虑到了油液搅动阻力，控制了喷油流量，所以冷却油的喷射点必须从中间开始以保证散热均匀，现在不需要，油液流量变大由一侧直接泵入即可。支撑这种观点的另一个依据在于原则上3D6电机的出现是为了配合特斯拉第四代热管理系统的，所以芯部设计老王猜测是增大了油液在电机内的流量以强化电机低效率制热模式的能力。 

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIEAoWsupggWx14F6U1PgbjKVdcia7HOCEcQOXq9icyrx8V60PlPtWbVUQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

**◇** **所谓低效制热模式**，有时候我们也叫做电机堵转发热，发热效率远高于PTC。在这一点特斯拉之前设计比较保守，那么从轴芯的设计向比亚迪华为靠拢这一点来看，特斯拉应该是解决了油液在电机内大量喷射后的搅动阻力问题。像比亚迪和华为都是自己设计了低粘度润滑油才敢这么设计流量的，而特斯拉显然也察觉到了这种设计的甜头。当然这只是一种论述路径，电机的发展影响到的机械结构还是挺多的。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HI2CMxgrzx79icUtT7UjWM7S9JibGicMU47fEW6VqQdzGeSG2AaVz1GFjHQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIpD3dibNTNuLPqhKN2CIleSX0U6oMMwJE2cqTSoZSvQJMZUH6JVag8Vg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

之前其他咨询报告中显示上一代特斯拉电机采用芯部突出设计。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HISceRnibKQP2hEETnyxEs2nqbNF5pJjnUqPo6LdXbs2NE1Vr66A7Kahw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

本次我们拆解切割后，发现三家都没有采用之前的突出甩油设计。 

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HI1x9IaicDqoCTLnnnXSI8NiaRcH9BDyAUrGOILg64FtRAHrveuoeibIgoA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

我们其实可以把电机的一些核心机械设计进行一个简单的横向对比。三台电机在永磁体排列和制备方面，比亚迪和特斯拉采用规则形状的烧结钕铁硼单块永磁磁钢，而华为虽然采用分块样式的永磁体但第二集中经过我们的测试它还是和普通单块永磁磁钢类似，在这个方面三台电机我们认为相差不大，三家电机只有特斯拉不是双V型排列的永磁体。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIAzoYu46DAwDsgicI4LaKTbof5LV7mVxbkPEC3MII3CZ0iakHTLSAGPww/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

**叠片工艺方面比亚迪厚度最小，其余两家差别不大**，都属于比较先进的加工工艺，其中比亚迪永磁体侧面固定点较多，其他两家较少。三家都有明显的装配扣点，涡流发热的挑战都不小。分段错极布局华为和比亚迪是6层，特斯拉是3层，这一点特斯拉略显简单。整体鲁片工艺水平三家差异不明显，比亚迪略优。定子扁线层数方面，特斯拉是10层，多于比亚迪，高功率输出下特斯拉占优，低转速城市路况比亚迪有一定优势。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIhyWOKIaqfOGweAciaE4s1Pw8fc20wlC0bII3CfoicQSJQMibSt3cJZM8w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

**◇** **华为DriveOne**采用圆线电机也是强调高功率，整体效率不及比亚迪和特斯拉。这一块华为稍微落后一些。极对数方面，比亚迪采用8极72槽，华为和特斯拉都是采用6级54槽。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HISedHudPMQUE943aibRuJvHLPrGbLrJsxAz4lx2RQftmT2xUo3WLlGKQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

极对数和线圈槽数有大量评价维度，今后慢慢讲，本季讲一个技术点，就是永磁同步电机，多数都是正弦波交流驱动，但实际上接收的不可能是理想正弦波对吧?因为电机定转子之间有气隙，磁场有畸变，干扰输入到转子的电流电压。这之中存在大量高阶次谐波对电机运行产生影响，转化到用户身上就是噪音和振动。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIzp6SzWzSJYtkbXibONic4vrdg8ImdicEricW066UdtnhSb81SSMtnmeu1w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

转子静止状态下一定总是倾向于停留在某些特定位置。因为定子开槽空间相对局限，转子磁极和定子开槽相对应的磁路，磁阻总有不平衡量，而磁力线不管你那么多，总会将转子拉到磁阻路径最小的位置。而当转子旋转时，永磁体两端对应的齿槽区域内磁场波动就会变得更大，这种感觉类似你开车不断压到减速带的感觉，这种力矩波动，我们称为齿槽转矩。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIWXXJJeOneOxFQJaR9dFtPQ0jVKicrd1cicSzO9Qkibt5nYsIAyUO7iaBkQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

为此人们约定了一些评价因子，就是定子槽数和极数的最大公约数，以及最小公倍数。因为本次三台电机他们各自的槽数和极数都是能整除，所以评价因子就是他们自身转子的级数以及他们的槽数，最小公倍数自然就是槽数。比亚迪这里是8级72槽，特斯拉和华为都是6级54槽更低一些。这个数值越低，电机齿谐波次数就越高，齿槽波动越大，噪音和振动就不容易控制。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIaicELgBRywhy3c5z7zwdCbZ1ObANIdAZ48CPdPATVibXgMn5nSzIy8Sg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

但按永磁同步电机转速公式来看，这种极对数较少，换来的是相对低的铁损系数，因为在多数转速区间，铁耗是和电机频率成正相关性。 

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HITxxT2Qabm3HOhicM9JIMmtjiaiaA7iaLQ4VicFicDC99l3H2YwDPbPcp8RuA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

6磁极的华为特斯拉，在16000转运行频率估计和8极的比亚迪12000转左右的频率在一个级别，这也进一步解释了为啥比亚迪为什么把转子冲片做得这么精致的原因，就是为了尽可能优化铁损。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HI1n2ExlFeexQtSjHibEQy0WkibcUu0uPtDXgXP96LRRe8xp2ed2efzKsw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIUKb4bic0tChJ8Y3ZBeQEpH0YfTV1ib8mfbRvDr84KJJXVsFBBa9ziae5w/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

像特斯拉和华为这样的54槽6极的电机，在这种格局下不妨就采用调大电流去推高转速和扭矩的路线，从用户角度更容易被接受。而比亚迪虽然电机控制系统不好做，但8级72槽的这个设计，相当于更多的电极一起并联出力。峰值扭矩提升相对会比较容易一些，而且想做高功率也不用傻傻的用大电流来硬打，加上之前我们说的比亚迪减速比是11左右也能够互为佐证，综合来看在性能指标方面都是指向节能和静音的。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIBsLI4UtZyclHczLR1GLp2FlbUw8c3LsQrOdpZfyLzRVMMfmXMPQESQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

◇ **冗余设计角度来说**，三台电机峰值转速都有提升的余地，只不过可能没必要，尤其是比亚迪的16000转搭配10.8的减速比这种格局来说，老王认为比亚迪应该是考虑到更高的通用属性从而限制了峰值转速。这就好比当初刀片电池刚推出时，看起在能量方面仍然有提升空间，但通过技术创新和规模化之后，像特斯拉这种顶流公司都会考虑采购，这就是工程哲学的魅力。

  

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HI2Xoo3gBpDSVnrhRzxicQr0Opy7TUic2bT6IefchshW7mkugsfJwr5fFg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

另一方面，大电流的发热其实特斯拉人家也不怕，因为转子有芯部油冷，定子还有喷淋孔道，所以特斯拉才敢上9.3的减速比，而华为也不能只看圆线电机这种缺点，华为的优势是在逆变模块的可靠性方面做到完善的同时，用模块化的思维渗透到供应链的需求层面。举个不恰当的例子，比亚迪的电机有点像8缸发动机，平顺性好噪音也小，但为了省油就略微限制了运动挡。而特斯拉或者华为这个格局就是暴躁的小排量，相对容易控制，但有时候想跑快必须以能耗为代价。

![图片](https://mmbiz.qpic.cn/mmbiz_png/VuZKe64g19fZNX8libfiauh2T89kvUl6HIF49th6CgQia3lzcEicOTiadCINqomRn0BguDQ5P6R8vXfeRaI4euq1hvA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

总的来看，在机械设计这个维度，我们可以暂时下一个朴素的结论，就是特斯拉偏向运动，比亚迪偏向节能和静音。

  

  

  

  

**知识回顾**

**电机政策：**

[电机市场的IE5时代，真的要来了吗？  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247550130&idx=1&sn=42a14a5382b68a0bbd4ba48093155097&chksm=cede4576f9a9cc600786ab2908e4c3ef2cf3dbbfdb71a9265508f92e2dbda25384b66424bfde&scene=21#wechat_redirect)

  

# [高压电机 能效标准GB 30254-2024已发布 9月1日正式实施](https://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247574347&idx=1&sn=324e60a45f9ce388894db215c8ad9534&scene=21#wechat_redirect)

  

**精选文章：**

[清华大学的电机系毕业生都去哪儿了？](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247548328&idx=1&sn=8bbb58f38491f58600b87c85f9a2a864&chksm=cede7c6cf9a9f57ac80d409cbc6b9ced57c5d4df799227673198488eb6ac427f40098e09d145&scene=21#wechat_redirect)

  

# [华为都“活不下去了”！电机中小企业未来三年要怎么过](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247575025&idx=1&sn=800a15fe2572766ef1632371ee7475f2&chksm=cedfe435f9a86d23f050893e070245640fbc59fce832cb6264e6ecf8b6c43c0fe9a0c6565a38&scene=21#wechat_redirect)？


![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0v0ZV7sRibAYoRKHdqMsgS88ic1cyT6sT4Eb9gB9NyuTGgwBM45cpIiayzA9KliaEhiasA8MFU1dzKPcjg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0v0ZV7sRibAYoRKHdqMsgS88HJkEmpYqlKiaC4tFrnTia7L7pjBnCvUZtV9MV1HRf7nRn8kPs7bKsmQQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0v0ZV7sRibAYoRKHdqMsgS88ULU9yWwiclQtG6BjIghiafsrrnPXJxjrGQfbnkeibicOsWjPXsyjwG4zdg/640?wx_fmt=jpeg&from=appmsg)

扫码报名了解变压器会议

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0uKdXjFpsB1RDrRBMYRO6OxT5YrmvxSnbaaDeXF4bqovY9IfrC6SxJMBQtp4dnM1tPnlKziaSEUguw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0uKdXjFpsB1RDrRBMYRO6Ox2gll6RtjpK3FFYmgTBOGo4FeTnVZtkL7ZlKEclXqTtZ7vtFY28R0ew/640?wx_fmt=jpeg&from=appmsg)


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0t1sNKPl7b3fvXjBZ5n0zqWv9bKebxXm1TmYGTjkrJbvI0JtF4TibavniaFHiavc18KnuUoQMicVG09yw/640?wx_fmt=png&from=appmsg)