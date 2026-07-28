# 超详细的RCD吸收电路讲解

原创 鱼 硬件笔记本 2024-06-20 07:44 四川

> 原文地址: [https://mp.weixin.qq.com/s/RIDTqMLWt6ZE1mBmJHYvrA](https://mp.weixin.qq.com/s/RIDTqMLWt6ZE1mBmJHYvrA)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

首先开关电源是一门很复杂的领域，很多人说电源就是吃经验，现实也存在靠经验和试错来调试的工程师。

个人感觉是因为开关电源想从理论的层次去解释一个问题产生的原因和从理论去解决往往十分困难的。比如变压器交叉调整率的怎么计算，环路中奇奇怪怪的伯德图产生原因？但是充实的理论知识还是可以在出现新问题的时候更快的定位问题。更好的做定性分析。

**看这个系列的同学需要储备的知识**

基本的电路知识，基本的器件知识即可，如果是课本上的内容就是模电和电路。

**快速过一下反激基本原理**

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138aibzM90eslX4eEjibibapECfBkguTwkuPNdC11ricfqKZbnZIic6lkQ4rRwA/640?wx_fmt=png&from=appmsg)

1、 其实在图片之前还有一个EMI模块。但是不在本次系列的讲解中。

2、经过整流桥整流之后会给大电解充电，这个应该比较好理解吧，整流桥把交流电流整流为直流点，输入大电解进行稳定电压。安抚一下输入的电压，别太躁动。

3、原边MOS相当开关，开关时间决定了原边电感的输入能量大小（DCM tis：不用理解DCM是什么）

4、原边MOS关闭期间，变压器储存的能量无处可去，结果发现副边居然有一个乖乖是单向导通的玩意（二极管D2、D3）那就往你那边跑吧，就给后面的C3输入电容充电。

5、MOS开通，变压器储能，D3反向截止，输出端电压由输入电容维持。

。。。。。

里面还有很多很细的细节，我们慢慢道来。

  

 RCD原理

上图里面没有讲到的一个是D1、C2、R1组成的东西。

一般我们称为RCD吸收电路。   

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138aBrTCXQZf7HibQwF3Rp08HoEGlGLXry8npCj8RTmeflGpLulbVRChVVQ/640?wx_fmt=png&from=appmsg)

RCD的出现是为了解决原边MOS关闭的时候漏感能量造成原边MOS应力过高的问题，这句话我慢慢解释。

1、现实变压器不是理想的，像98折的充值活动一样，原边绕组（原边线圈）充了100块钱，但是到副边只剩98块钱了，中介吞了2块钱。这中介便是漏感，漏感通俗的定义是无法耦合到副边的感量。顾名思义，测量也非常简单，通过短路输入绕组，再测量原边的感量，由于输入绕组短路，磁芯磁路被短路，耦合到副边的能量都被短路了，还能测量出来的便是漏感。如下图表示：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138ankfBia2e5touMVtuZVKzZM02XXYcWFFF2rYdCwZkVoo3H2icUmcHGIPA/640?wx_fmt=png&from=appmsg)

2、漏感存在又会造成什么问题呢，好问题，给提出这个问题的小朋友点赞。

As we all know 原边的MOS开通的时候，会给原边的电感充入100块钱的电流，那你猜一下，100块钱原边电感能全部得到吗？显然不能，因为漏感和原边的电感时串联关系，会根据他们的感量来分配着100块钱，假如漏感分到了2块钱，而漏感的定义是无法耦合到副边的感量那这两块钱又该用在什么地方呢。   

As we all know 电感的电流不能突变，假如mos关断的一刻，漏感上的电流已经达到1A，那MOS关断的时候，MOS阻抗近似无穷大，假设10兆欧姆吧，1A电流不能突变，回路已经形成了10兆欧姆的阻抗，那电压是多少呢?显而易见是1A\*10兆欧=10兆伏=10 000 000V，一般MOS耐压多少V呢，650V?700V？这时候MOS是不是会承受一个10兆伏的电压，MOS可抗不住，直接躺平，boom的一声，然后同事就围上来：“哟，这次怎么没有上次响呢？”

3、既然出现了问题，那就有解决问题的方案，那就是RCD电路：

上面第2点种很说明了在mos关断的时候因为漏感会产生很大漏感尖峰电压，这种会超过MOS的耐压造成MOS损坏。现在一个个状态在分析RCD状态。

3-1：如下图，在整系统没有开启前，三个测量针的位置都是311V，R1会吧C1两端电压维持一致都是311V，变压器原变也是导通的，也是311V。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138anGOLM0CnNbU6m226m3o5QTSAfCJiaZjX0vlRPfm29lnYRJWnusNxIbg/640?wx_fmt=png&from=appmsg)

3-2：如下图，在MOS导通的时候，mos的d极会被拉到地，也就是0V，变压器原边两端形成压差，电流线性上升，同时漏感是串联进去的，也存在漏感电流线性上升。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138aBSmTpJxIeBoSg2aCukEH1uvYcM9obBZ5m2oGZMukOMia7u783XBZYpQ/640?wx_fmt=png&from=appmsg)

3-3：MOS由导通变为关闭，变压器储存的能量转到副边，而漏感的能量，无法转移到副边。漏感电流方向不变，还是从右到左，而MOS已经关闭了，当然关闭过程也是瞬间完成了，在MOS的DS间的阻值逐渐增大时，MOS漏极的电压也逐渐升高。当升高到311.7V，D1就会导通。   

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138av4yzrz4ic39PRgbXJDlh0m7jBTJuxS2a9HTcOYI4p0GqJu4bh9EI2PQ/640?wx_fmt=png&from=appmsg)

3-4同时也由于副边的反射电压，会在输入电压和反射电压叠加形成MOS的电压平台（这个后面讲，现在先讲RCD部分），漏感尖峰时叠加在MOS平台电压之上的。当MOS漏极电压比C1的下面的电压高0.7V，二极管通道，漏感电流这时候就有去路了，而且C1有储存能量的能力，不用憋屈在MOS上了。由于二极管导通了，漏感存储的电流流向C1,C1的电压逐渐升高，直到漏感能量完全释放完。   

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138a0ZqObtozbwS3nAN6Tvdr36BafBjyicx7zozO5l6QqiacO4kXaxkPEIjA/640?wx_fmt=png&from=appmsg)

3-5 漏感能力释放完之后，MOS漏极的电压下降到平台电压，二极管截至。直到下一个周期MOS管导通再关闭的时候，漏感尖峰比C1电压高了才能重新导通。在重新导通之前，C1上面的电压会被R1消耗，逐渐下降。直到下一个周期漏感尖峰电压重新充电。如此反复。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138aW8TtbBl9lQT8VC0F83pDLz7r3mClDVR7grRicsC8UwppndG1eWc8AjQ/640?wx_fmt=png&from=appmsg)

**总结：**

1、漏感尖峰电压会被RCD吸收，漏感能量一定，电容越大，电容充电的电压就越低，吸收能力就越强，MOS漏极的电压就越低。

2、在漏感能力释放完之后（这个过程一般只有一个周期的3%时间），是要通过R1释放掉电容吸收的能量的，把电容的电压降下来方便下一次漏感尖峰来之前再进行吸收。

3、电容容量和电阻需要合理搭配，容量足够即可，足够能吸收漏感尖峰电压，不至于超过MOS耐压。电阻需要足够小，小到在放电阶段把电容电压下降到MOS的电压平台。但是不能下降过来电压平台，这样就会把电压平台和母线电压之间的能量也吸收释放掉，得不偿失。

总结之后就结束了嘛?不可能，公式都没有一条，统统汇总到下面了，自己拿哈。

RCD有关公式汇总

一个简单的表格是这么创建的：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhjRX2HpKtcibPQnvdqa138aE3fwgTGbAuYVnzP84RjONHfI7u4fcE5pVYojdCIibjb2jY2oJJpFQOg/640?wx_fmt=png&from=appmsg)

原文链接：https://blog.csdn.net/Cuxiaoweiba/article/details/128120780

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=13&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。