# 玩转电机妖怪分析（modal）


> 原文地址: [https://mp.weixin.qq.com/s/SLIb6YoQENHbViHbCr1vTg](https://mp.weixin.qq.com/s/SLIb6YoQENHbViHbCr1vTg)

      唐僧：“悟空，救我！有妖怪！”

      悟空：“师父，妖怪在哪里？”

      唐僧：“在...在.电机里。”

      悟空顺着唐僧手指的方向看到一台电机。

      悟空：“师父，只有一台电机啊！哪里有妖怪？”

      唐僧：“这个妖怪在电机转到1800rpm才出来！”

      悟空：“二师兄，给俺老孙把电机转起来，让老孙用火眼金金看看这是什么妖怪！”

      随着电机转速提升到1800rpm，妖怪在电机里“嗡嗡嗡...”的叫起来，并且还在电机里面跳舞，弄得电机也在抖动。

      悟空纵身一跃，从耳朵里掏出如意金箍棒，大喊：“妖怪哪里逃？”

      “咚”一声巨响，电机被砸得粉身碎骨，却，却不见妖怪的踪影！

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyR3M8gO1oBBNoT9eLiclmZC54V8GKSyAoJ4C4fFWcj9YFc311y8mnAH5QnL6z4Gtv8Aqth5XwwA7Q/0?wx_fmt=png)

\------------历史课时间-------------

       魏晋之时，在一寺庙之下，有一老者，家有一琴，每日隐隐作响，老者疑是鬼怪，找仙师数人作法，几日不绝，但琴依然隐响如故，后来一才子，听老者之言，细细听之，发现寺中钟鼓鸣响琴便隐隐作声，微一笑，取利剑一把，削去琴身之木数寸，从此琴便不再作怪。（宝宝好苦！古文看不懂！）

      19世纪初，法国昂热市一座102米长的大桥上有一队士兵经过。当他们在指挥官的口令下迈着整齐的步伐过桥时，桥梁突然断裂，造成226名官兵和行人丧生。（据说是拿破仑的兵！）

      1940年，美国的全长860米的塔柯姆大桥被大风吹得波澜起伏，最后倒塌。

      古希腊的学者阿基米德曾豪情万丈地宣称：给我一个支点，我能撬动地球。而现代的美国发明家特士拉更是“牛气”，他说：用一件共振器，我就能把地球一裂为二！他来到华尔街，爬上一座尚未竣工的钢骨结构楼房，从大衣口袋里掏出一件小物品，把它夹在其中一根钢梁上，然后按动上面的一个小钮。数分钟后，可以感觉到这根钢梁在颤抖，慢慢地，颤抖的强度开始增加，延伸到整座楼房。最后，整个钢骨结构开始吱吱嘎嘎地发出响声，并且摇摆晃动起来。惊恐万状的钢架工人以为建筑出现了问题，甚至是闹地震了，于是纷纷慌忙地从高架上逃到地面。眼见事情越闹越大，他觉得这个恶作剧该收场了，于是，把那件小物品收了回来，然后从一个地下通道悄悄地溜开了，留下工地上的那些惊魂甫定、莫名其妙的工人。这一段是一本书中有关美国著名发明家特士拉进行共振器发明的描写,里面所说的“小物品”便是一个共振器。

      共振的例子还有很多，各种弦乐器中音腔在共鸣箱中的振动等利用了“力学共振”；电磁波的接收和发射利用了“电磁共振”；激光的产生利用了“光学共振”；医疗技术中则有已经非常普及的“核磁共振”等。

![](http://mmbiz.qpic.cn/mmbiz_jpg/Zlibib2pr1chytmCpFXOZMibfibo1DFIibTX5B6Ut8rRz0ibM588mkeMWBZ2vCTbyAXCiciakQsPLsJ668q6Pw4Fl0AcHQ/0?wx_fmt=jpeg)

      如果全地球上的人一起喊“1、2、3、跳，1、2、3、跳......”，地球会不会共振，然后爆炸？？？！！！

\------------干货分界线\-------------

      随着国家和社会对环境污染和节能重视性的不断提高,在电机极力追求高效节能及结构上体积小、质量轻的同时,导致了电机结构上的刚性逐渐下降,进而很容易引起电机的振动噪声。而电机振动与噪声一直是困扰人们的难题,严重时可成为直接决定到该产品能否稳定运行的关键因素和能否满足标准限值的瓶颈。

      振动是所有电机运行过程中普遍存在的现象，对电机危害很大，会加速电动机轴承的磨损，使轴承寿命降低，振动过大会使电机线圈之间、线圈与绝缘之间、导线与外壳之间相互摩擦造成绝缘电阻的降低，会使绝缘寿命降低，严重时会造成击穿现象，从而降低电机的使用寿命，严重影响电机的使用性能。

      电机结构的模态是其固有特性，与电机结构的运动性能有很大联系，电机结构的振动频率要远离模态频率，振动方向要避开模态振型的方向，否则容易引起共振损坏电机。因此，掌握电机结构的模态信息对于电机的科学使用是非常重要的，有限元分析软件可以用于计算电机的模态频率和模态振型(模态向量)，效果良好，计算过程一般如下：

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chyvibTfhu4PE0tficdGTKSatfG0MT0bljuu7vxp3j2ricumN1hzBMY9z08ptqryUL7ymibL6wcl1TOPMQ/0?wx_fmt=png)

**1\. 工况分析**

      模态分析的工况分为两种，一种是无载荷模态（模态求解不含应力求解），一种是预应力模态。什么情况下需要做预应力模态？当你的预应力（工况）会影响到你的模态求解结果的时候，比如大变形、大应力等。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chytmCpFXOZMibfibo1DFIibTX5eknjMp9vDkt0jbia4arHX68EVRpibUHoV5sPO5gFuBf9ia0EVQOaECwfA/0?wx_fmt=png)

**2\. 简化模型**

       模态分析一般不做结构上的对称简化，对质量阵和刚度阵有影响。在不影响结果精度的情况下，可以简化的结构有：不影响结构刚度的结构可以简化成质量点，比如定子绕组和绝缘；转子偏心量简化为质量点；轴承简化为弹簧或实体。模态分析不支持非线性接触，一些考虑非线性的接触的结构可以简化。

**3\. 设置材料**

       从供应商获取相关材料数据后建立材料即可。需要注意的是叠压后的铁芯在厚度方向的弹性模量不是常规钢材的210GPa ，叠压系数、浸漆等工艺也会影响，最好根据自家产品实测数据进行仿真。相同的情况还有绕组参数。 

**4\. 网格划分**

      网格无特殊注意事项，够用就行。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chytmCpFXOZMibfibo1DFIibTX56YnoRPFeEPlLLjcDlkIOyriceYsQ7Ho45vdXibtniax4odREFw2biaAdqQ/0?wx_fmt=png)

**5\. 边界与载荷**

      边界约束按实际情况添加即可，注意约束住所有自由度，防止产生刚体位移和频率为0的刚体模态。如果要考虑载荷，在预应力分析里面做。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chytmCpFXOZMibfibo1DFIibTX57GWBlmHibKxPicz6ldeuh9KYDxSG9fnWl5HovxnjF78Tjg6kwglCcGpQ/0?wx_fmt=png)

**6\. 求解**

      需要设置求解阶数，根据需要设置阶数即可。有限元法求解模态的特性，阶数越大的模态准确性越低，所以一般情况不需要求解20阶以上模态。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chytmCpFXOZMibfibo1DFIibTX55PVSUTf6mvxHXeuj9NkGq0427H5T7kwEbMb5LKOIU2r56HeCCrbgmQ/0?wx_fmt=png)

**7\. 结果后处理**

       结果关注频率和振型。

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chytmCpFXOZMibfibo1DFIibTX55PVSUTf6mvxHXeuj9NkGq0427H5T7kwEbMb5LKOIU2r56HeCCrbgmQ/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chytmCpFXOZMibfibo1DFIibTX5MKKSYlHia8e7QYHAJPKdVVnmIRtfaHRxkWSd0V1aDqibuzo04hzib0tpA/0?wx_fmt=png)

频率表

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chytmCpFXOZMibfibo1DFIibTX5pST29Eph7icbGxy89cHreuyVicImM7LBx15kfhPAibTW5h6oibEZm7ph0A/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chytmCpFXOZMibfibo1DFIibTX5lzWlpjIR6S25YzYM2tMz1KexibXA5iaDNiaL1ebYSVB6QkFVHSwTgWufg/0?wx_fmt=png)

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chytmCpFXOZMibfibo1DFIibTX5SsU7BXJTNun1btibiciaUjjiaIGibqLB4ibKwKWcWYPuRgUfSeYp9RH2NHww/0?wx_fmt=png)

**7\. 总结**

       利用有限元仿真软件对电机结构进行模态分析，具有较好的精度。可以得到较为直观的振型图，用以了解电机结构的振动规律以及薄弱环节，可以指明潜在故障发生的位置，有效的避免故障的发生。

       通过有限元模态仿真，得到了电机定子的固有频率和振型云图，了解了电机定子的振型特点，为提高电机定子的振动特性提供依据，对电机的设计和优化有一定的指导意义。

       机智的你不知道有没有发现定子模态振型和电机空间电磁力的关系！？

![](http://mmbiz.qpic.cn/mmbiz_png/Zlibib2pr1chytmCpFXOZMibfibo1DFIibTX5D53cJDbZS7A1iaS1JyckDf6mb8zesK2QY5iaXLHCV0Jfl1d2zVppxraA/0?wx_fmt=png)

  

下期预告《玩转电机捉妖记》

  

关注微信公众号，免费获取《电机模态分析-详细操作文档（step by step）》

  

感谢你的阅读！欢迎**关注**本公众号，共同**探讨**电机设计，**分享**电机设计经验！

![](http://mmbiz.qpic.cn/mmbiz_jpg/Zlibib2pr1chyibFIWnfwX0zMBFTiajxFQ04icCDtGawUrUJPR2mfviaONcQuCMFupZlHesXCke26pQIqqdx1R4PzibBQ/0?wx_fmt=jpeg)