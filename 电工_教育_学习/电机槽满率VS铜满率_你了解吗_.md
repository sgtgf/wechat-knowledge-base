# 电机槽满率VS铜满率 你了解吗？

原创 电机新视界 2024-08-13 17:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/8nyECZs8axk03yooEeSP1A](https://mp.weixin.qq.com/s/8nyECZs8axk03yooEeSP1A)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0s1u4ztdWjDoyDhYIW9MOhDMGrAzeDVuvZ2dfZib765WVhdyXHexcxMPBNzR0QYNDlLNEbmuUSibq4w/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=Mzg4NzgyMjIwNg==&mid=2247526151&idx=1&sn=f2ad16b6fe06f9d5bd954057834bb252&scene=21#wechat_redirect)

[![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0t8PE1jut6syNaXWztwMIKfloy7NO3ltUjCw33CwMdkozLu7wSA3UI6qibZLEn27wSRVUEjCYBfiaFA/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzI0MDU0NDMyMQ==&mid=2247717560&idx=1&sn=e29e07e0eb7d394a5b7ff41eff76da7e&scene=21#wechat_redirect)


来源：旺材电机与电控

  

**槽满率对电机的影响**

什么是槽满率？

  

即铁芯槽内的导体截面积与铁芯槽口总面积的比值，电机槽满率越高代表着“铜线在铁芯槽内填得越满”。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FticlEuQsFcCkb25AXDLWqbLEXBRMYyrfrYEoF5O1HBO3W6xtqz4xkA0ePpCibsiaT9r5CwVVTNSibzXRg/640?wx_fmt=png&wxfrom=13&wx_lazy=1&wx_co=1)

槽满率对比示意图  

  

由上图可以看出，扁线电机由于槽满率的大幅提升，已经成为新能源驱动电机的绝对主流。从产品的角度，当然是槽满率越高越好，但另一方面槽满率的不断提高，对扁线电机的制造工艺、设备精度/复杂度都带来了巨大挑战。

  

槽满率(英文：slot fill factor，取自电机仿真软件Maxwell)，大部分认为槽满率是指线圈放入槽内后占用槽有效面积的比值，当然也有人认为槽满率是定子槽中的铜线所占的横截面积与裸槽中的总空间之比，两者的区别在于是否要将铜线包裹的绝缘层、绝缘纸等材料考虑在内。个人认为后者可能更像是铜满率，但两种计算都行，因为单纯的两种方式的计算，并不会对电机性能造成实质的影响，但在电机性能的比对中，还是需要统一计算方式的。  

  

那么槽满率的计算公式是什么呢？我们以考虑绝缘材料计算槽满率为例，则计算公式为：

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FticlEuQsFcCkb25AXDLWqbLEricgPF6gAgn08CjSOSrvtp44miaibABkr0tryIFO0gHIvH98ybSQwqWkQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

其中，W为单个槽内导线总个数；

  

D为导线直径尺寸（包括漆包线层），如下图所示；

  

A有效面积为裸槽总面积减去槽绝缘（如绝缘纸等）的面积。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FticlEuQsFcCkb25AXDLWqbLExXnEu33B6cATT10wRd49TKhg5av2pw7bacfsWfTiaMd905qcjQ2VEdQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

导线  

  

**一般认为槽满率取75%-80%，不大于80%，**因为高槽满率对于线圈散热有不利影响，当然这是对于初步设定槽满率时可采用的方案，在最终验证过程中槽满率可以低于此数值，但不建议高于此数值。从上式可以看出提高槽满率的方法有很多，如增加导线直径尺寸，减少槽有效面积，然而这样对线圈槽满率的高低的调整，对于电机的性能几乎不构成影响，可能与嵌线的难易程度有关。因此，一般说提高槽满率，一般指在铁芯槽中尽可能多的放置线匝，即提高W（单个槽内导线总个数）。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FticlEuQsFcCkb25AXDLWqbLEEJna2Tk24ARcgEjL2lY5Xia8dbX6wu8ibVmoZBkicAsHFQYWYBEEwprLQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

电机槽满率模型  

  

提高槽满率究竟对电机有何影响呢？首先，提高槽满率的方法有很多，这里仅指**提高线圈匝数**的方式提高槽满率；其次，提高电机的槽满率，可使**电机功率增大，同等功率时电机长度缩短**；最后，提高电机的槽满率可减**少相当一部分的铜导线、硅钢片、铁磁材料等，**增加电机材料的利用率，相对适宜的槽满率可以有效提高有效材料的比例，降低电机的材料成本。

  

槽满率对电机导线集肤效应的影响？那么，导线集肤效应——当导体通以交流电流时，导体断面上出现的电流分布不均匀，电流密度由导体中心向表面逐渐增加，大部分电流仅沿导体表层流动的一种物理现象，如下图所示。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FticlEuQsFcCkb25AXDLWqbLEAFib74MtpHYSXzSVjAI3SoqMEsrJ8kaKGicGOnP9uegUrWKuDa3tcCag/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

集肤效应简图  

  

当然，槽满率的提高，对于扁线定子的制造而言，也提高了一定的难度。

  

**首先，对铜线成型的精度和一致性要求高。**铜线成型时，不可能完全与理论数模线型一致，轮廓度、直线度等均存在误差和波动。所以相比于3D数模，槽内一组铜线在插线时并没有那么规整。这种不规整会明显增加铜线入铁芯槽时的摩擦阻力，需要更大的压入力才能克服，而压入力过大会导致插入不到位、铜线挤压变形或损伤、绝缘纸滑动等一系列问题。槽满率越高，铁芯槽内的设计预留间隙就越小，对这种不规整现象的容忍度也越低。

  

**其次，对设备所有对中、导向相关的机构和零件精度要求高。**在hairpin插入铁芯时，需要让所有槽（48、54、72…）同时与铁芯槽口精确对中，铜线才能顺畅进入铁芯槽口。槽满率越高，对中的精度要求就越高。  

  

**再者，绝缘纸在入线时滑动的风险增高。**槽满率高意味着入线时铜线与绝缘纸的摩擦力增加，绝缘纸容易被摩擦力带动产生轴向滑动。需要尽可能将绝缘纸包络尺寸做大，同时在插线、压线过程中对绝缘纸底部做好承托。

**变截面扁铜线可将电机铜满率提升至80%**

相关专家表示，槽满率和铜满率有一些区别，槽满率是铜线在槽内占据的面积。计算时铜线上的绝缘是不去除的。铜满率是去掉铜线上的绝缘后计算的纯铜占槽面积的比例。

  

Fraunhofer IWU（德国弗劳恩霍夫机床与成型技术研究所）通过使用新的金属成型生产工艺加工扁铜线，**可以将电机定子铜满率（非槽满率）从50%大幅提升至80%。**

  

通常扁线电机的定子槽是矩形槽，槽内插有绝缘纸，涂有绝缘层的（PEEK，PI等）铜线插入矩形槽后灌封固定，为了贴合矩形槽，铜线的截面是同样也是矩形，且每一层每一根导线截面的名义尺寸（长x宽）都相同，如下图所示。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FticlEuQsFcCkb25AXDLWqbLETTPXv0AAC0Z9TkGFdGicMoFSiaDmUjCZWF6qADPKK0xxWBhQ4gKZiaJgQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

常规的扁线电机矩形槽  

  

与常见扁线电机的矩形槽不同，Fraunhofer IWU将电机定子槽设计成梯形，对应着铜线也经过特殊设计：铜线采用变截面设计，为保持相同的载流能力，每一层铜线截面积都相等，但是梯形截面的上下底和高都不相等，越靠近电机轴线的越窄越厚，越远离电机轴线的越宽越薄，如下图所示。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/DpeVq9ia7FticlEuQsFcCkb25AXDLWqbLEXxFzLqoMOqZaJEupTD4YHSUBjbd1jcsJfI5hhWrelsaWkO21ZEgKrQ/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

采用梯形槽的扁线电机  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/DpeVq9ia7FticlEuQsFcCkb25AXDLWqbLEe7YG3HOmkUXKYRqIgaC1Mxsiaibxduy3U56XFWxpOwzjP9mDv84JKoQA/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

变截面的绕组  

  

上图是一个展示样品，可以明显看到上方的铜线比底部的铜线更窄也更厚（ad）。通过梯形槽的应用，可以最大限度地利用电机内部空间，在总体外包络不变的前提下实现更大的电流，进而提升电机的功率密度与扭矩密度。

  

Fraunhofer IWU研究所推出的变截面扁线成型技术，不仅能够显著提升电机的性能，同时还可以极大地减少材料的浪费，整套工艺流程几乎不会产生废料。

  

  

**知识回顾**

**电机政策：**

[电机市场的IE5时代，真的要来了吗？  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247550130&idx=1&sn=42a14a5382b68a0bbd4ba48093155097&chksm=cede4576f9a9cc600786ab2908e4c3ef2cf3dbbfdb71a9265508f92e2dbda25384b66424bfde&scene=21#wechat_redirect)

  

[强制执行电机能效！2023年工信部发布最新工业节能通知！  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247552223&idx=1&sn=9a79a63e6376dc92a45d3945ccfccbc4&chksm=cede4d1bf9a9c40d9fa969d4856721610e61d357988dde293f59cbc0994f971b7dc168c64b0c&scene=21#wechat_redirect)  

[又一“千亿级”来了！高效电机再上央视！](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247549961&idx=1&sn=3138aaff5c66723c28a9499b551d3399&chksm=cede45cdf9a9ccdbd20ddd6eb429e4a1cf67bb758cb509a84cf1b292a9887047cfa38edcc451&scene=21#wechat_redirect)  

  

**精选文章：**

[清华大学的电机系毕业生都去哪儿了？](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247548328&idx=1&sn=8bbb58f38491f58600b87c85f9a2a864&chksm=cede7c6cf9a9f57ac80d409cbc6b9ced57c5d4df799227673198488eb6ac427f40098e09d145&scene=21#wechat_redirect)

  

[一路走来，风雨兼程，江西这家企业有太多故事！  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247552832&idx=1&sn=0691f10025dc8233e2c704ede28ff691&chksm=cede4e84f9a9c79222cf4bb485f1f3e0eb9f33f37ceff89c3ef6bf2136aa0cc5176d46b97555&scene=21#wechat_redirect)

  

[三十年磨一剑！卧龙电气背后不为人知的秘密！](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247553465&idx=1&sn=ce7240d5584ea18953b6e135546f0b7e&chksm=cede507df9a9d96b56d7b338b3f7006b29e5756c9c90bc5606002a402f4c3ffe5d991ac8ba3b&scene=21#wechat_redirect)


![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0t8PE1jut6syNaXWztwMIKflTUnuEXWxPibLJDokYVjA047arWNC64WjZJstawXXntEkpuzS14LA6A/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0uvwUyrFWszpp9eIGyDibzTRGtuJD4wgepVTRmtwU9x1PP28X6vB0fFOzebt0zQtgfPhPbXpTZM8dg/640?wx_fmt=jpeg&from=appmsg)

  


  

![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0vTicAlmdAM5kmIicsPkDYY96WxUU7Fgeicr3EF8TShjxlP65ccvCvqh45flVSeAdLP2t4dNfPxicjicww/640?wx_fmt=png)