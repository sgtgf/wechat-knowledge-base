# 电源维修：开关电源中ntc电阻的作用？

原创 电路一点通 2024-11-14 11:29 广东

> 原文地址: [https://mp.weixin.qq.com/s/Q4WmL95OMNFQBzU1\_H8Q8A](https://mp.weixin.qq.com/s/Q4WmL95OMNFQBzU1_H8Q8A)

开关电源中有上拉电阻和下拉电阻，还有一个特殊的电阻，ntc电阻。

Ntc电阻是负温度系数电阻，温度越高，它的阻值越小。利用这个特性可以做成温度检测电阻和缓冲电阻等。

开关电源中为什么用这个电阻呢，这就要知道开关电源内部整流桥后面接的滤波电容，在通电后，电流会对电容充电，瞬间充电电流特别大，接近短路电流，这对电容和整流二极管的瞬间抗浪涌电流承受较大应力，影响二极管和电容的寿命，还会对电网产生干扰。

为了限制这种冲击电流，就要限制一下瞬间的充电电流，在整流桥输入一段串联一个普通的功率电阻可以限制这个充电电流，但是这颗电阻上会有功率损耗，这个阻值是一定的，当开关电源在满载工作时，这个电阻上会产生较大的损耗，这个损耗是根据负载大小变化的，显然减小了电源的效率。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源维修_开关电源中ntc电阻的作用__images\img_000_f1f9156296df.png)

  

所以就找到了ntc电阻，ntc电阻阻值随温度升高而减小，当有电流流过ntc电阻时，这个ntc电阻会发热，一有温度这阻值就马上下来了，这正好用在开关电源中，利用ntc这个特性就正好可以限制充电电流。

根据型号可知5d-11，这里的5指的是25°时阻值是5欧姆，d是圆形，11是ntc的直径。

工作原理是它的阻值是8欧姆，当上电的一瞬间，流过电阻，在电阻上产生压降会发热，当电阻一热，阻值就会下降，下降到1欧姆左右，电源启动，把电流缓慢冲进电容里，只要有电流流过NTC电阻，NTC电阻的阻值就不会变，断电后，当室温在25度时，阻值又恢复到8欧姆，NTC电阻在电源中还没遇到过自己单独损坏，进本都是因为整流桥短路，保险丝延时熔断，烧毁NTC电阻。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源维修_开关电源中ntc电阻的作用__images\img_001_2ce8130d3c18.png)

  

在NTC电阻上也会产生损耗，但是它的阻值比较低，电流比较小，可以忽略不计，在小功率电源中应用广泛，当电源功率大于100W,就需要加继电器，旁路ntc电阻。

**👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源维修_开关电源中ntc电阻的作用__images\img_002_a8b37a87b291.other)  

**那么该如何选择NTC启动电阻呢？**

为了电源的效率不能选择导通电阻大于1R,常温下电阻阻值根据电源功率大小选择，保证瞬间启动电流流过NTC电阻，就是在电源正常工作时，NTC电阻不能消耗过多的电能，当功率大于100W，就不能单独使用NTC电阻，电流比较大，影响电源效率，也容易损坏NTC电阻。

这就是NTC电阻的原理，它还可以做成温度检测电阻，成本低，广泛应用在各种家电设备中检测温度。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\电源维修_开关电源中ntc电阻的作用__images\img_003_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

-   [](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247493395&idx=1&sn=3b36eea34dd9b509bf0a75692be51629&chksm=c33d9faff44a16b993e0f2707214f3f62f3d8d002bc50a54a7d8658a049d37be409a8879955b&scene=21#wechat_redirect)[👉汽车资料汇总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[](http://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247494580&idx=1&sn=ee5d4200137e3cbcc5af7c11ae4c0cbc&chksm=c33d9308f44a1a1eb9299dd0a30b6b543efcb05577de8cfba2cab4d33c7d3297edb33b512f92&scene=21#wechat_redirect)
    
    
-   [比较器过压保护电路设计方案（完整版）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247533484&idx=1&sn=da712cf4131e4d7a3ad48f58b364a56f&chksm=fcefa0cecb9829d8a86df931f8904e57793fbb10baa2bb2c6fa44750cb0e15da53dc8533f238&scene=21#wechat_redirect)  
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247533484&idx=1&sn=da712cf4131e4d7a3ad48f58b364a56f&chksm=fcefa0cecb9829d8a86df931f8904e57793fbb10baa2bb2c6fa44750cb0e15da53dc8533f238&scene=21#wechat_redirect)[不用担心爆炸？BUCK降压控制电路方案指南](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247533594&idx=1&sn=adafca91a68914970d8aadedcc6151d1&chksm=fcefa778cb982e6eff9f85ed347b6c89f74a9a6398b3162c7c6854382fe0e636247728698a5f&scene=21#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247533484&idx=1&sn=da712cf4131e4d7a3ad48f58b364a56f&chksm=fcefa0cecb9829d8a86df931f8904e57793fbb10baa2bb2c6fa44750cb0e15da53dc8533f238&scene=21#wechat_redirect)[光耦隔离继电器电路讲解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534015&idx=2&sn=2cf0fed040b284e550536abc82f2ebe3&chksm=fcefa6ddcb982fcb03b336ac8cf5ac6010f460576e3a17f9b5f7c6da056711166fdd82ef19cd&scene=21#wechat_redirect)
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247533484&idx=1&sn=da712cf4131e4d7a3ad48f58b364a56f&chksm=fcefa0cecb9829d8a86df931f8904e57793fbb10baa2bb2c6fa44750cb0e15da53dc8533f238&scene=21#wechat_redirect)[6种过压保护电路设计，结合产品与成本考虑选择集成芯片为佳](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534153&idx=1&sn=1bc07cb431e06731402ac5a607932f13&chksm=fcefa52bcb982c3db3d615745fc640c2c1585eeba9b4103a7c50b6134bf54feeb76de141a405&scene=21#wechat_redirect)
    
      
    

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分