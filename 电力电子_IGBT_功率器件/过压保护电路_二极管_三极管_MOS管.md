# 过压保护电路：二极管、三极管、MOS管

原创 电路一点通 2026-04-01 19:03 广西

> 原文地址: [https://mp.weixin.qq.com/s/5kKSl9zq4gnoNesoZIox\_w](https://mp.weixin.qq.com/s/5kKSl9zq4gnoNesoZIox_w)

## 利用二极管、三极管、 MOS 管搭建过压保护电路  

### 电路介绍

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_000_16f9ed0dd775.png)  
这是一个 9V-9.7 输入过压保护电路

下面来看下器件介绍  
电阻 就不用多说了，先来看下稳压管  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_001_f92d18648a53.png)  
来看下他的参数，主要关注他的击穿电压 和 ==击穿电流，击穿电压指的是他正常工作时的稳压值 ， 击穿电流指的是要想达到标称的稳压值，工作时通过稳压管的电流所需要打到的值。

这里才用的稳压管的稳压值(击穿电压)为9.1V ,击穿电流为30mA （这里的30mA 是我自己修改的，为了 仿真 需要，实际参数不止30mA）

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_002_60399d468cd2.png)

再来看下三极管 MMBT3906, 就是一个普通的 PNP 三极管

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_003_bbddff422b33.png)  
在来看下MOS管，他是一个PMOS

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_004_369fefc066e8.png)来看下他的参数：

开启 电压：-3.695V  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_005_d0368883c495.png)![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_006_ff5ca6540a35.png)

### 电路分析

这个电路的作用过压保护，比如系统正常供电电压为9V , 当输入电压在9V-9.7V 之间时，输出电压正常输出当输入电压大于9.7V时，输出端不在输出，起到输入电压过压保护的作用。

先看输入电压为9V的时候，稳压管可以说就没有工作，输出电压为8.96 V 未过压

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_007_6498df2f7360.png)再看下输入电压为9.7V 的情况,输出9.65V ,未过压

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_008_b18a606906bd.png)

再看下输入电压为9.8V 的情况,输出0V ,过压保护

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_009_a703ed107d98.png)  
来看这个电路直流扫描传输特性  
设置输入 电源 电压从0-15变化，观察输出电压变化

![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_010_c57ba00779f5.png)曲线的两个拐点3.81V 正好是MOS管的Vgsth 电压，9.69V是电路不发生过压保护的最大电压。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_011_f554e4b5bf35.png)

### 总结

这各电路可用与多种电压值的过压保护，只需要根据过压保护电压值进行稳压三极管的的 稳压值修改，另外就是三极管、MOS管耐压考虑了。

  

## **一点通推荐**

[智能化行业趋势洞察与合作规划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566768&idx=2&sn=9b56b2555afae3e08459f3627bbf7c8c&scene=21#wechat_redirect)

[硬件研发总经理统筹团队核心技术突破手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566776&idx=2&sn=f0695fc2aa067e620b02521d7cc95d31&token=542927284&lang=zh_CN&scene=21#wechat_redirect)

[汽车研发制造公司总经理统筹全产业链及生产基地营运](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536602&idx=2&sn=919a907a69086a7f26b3720e3e0d6484&scene=21#wechat_redirect)

[新能源汽车维修主管工作统筹与管理手册](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536552&idx=2&sn=1e2fc3ea32314332f1ded7d500611f67&scene=21#wechat_redirect)

[新能源汽车经理(中高层）商务谈判能力手册](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536571&idx=2&sn=9b94a03acec674bfd1e1c3f5d29ec01f&scene=21#wechat_redirect)

[汽车销售总监服务运营与团队管理手册（含配套落地模板）](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536542&idx=2&sn=6fb9147a869497d775527733bb9facb2&scene=21#wechat_redirect)

[半导体元器件研发项目全周期计划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566856&idx=1&sn=5181825e9f152fa4c76a1787f316f099&scene=21#wechat_redirect)

[汽车集团副总裁供应链生态战略手册](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247536656&idx=2&sn=e58131b6a4f55224bd920a67dd740cdb&scene=21#wechat_redirect)

[![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_012_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\过压保护电路_二极管_三极管_MOS管_images\img_013_1539b38016c7.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️