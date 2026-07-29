# 纯硬件也可以做PWM波？

原创 电路一点通 2026-04-17 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/4QFH\_GW6B9Xj0Q2ezBmTHA](https://mp.weixin.qq.com/s/4QFH_GW6B9Xj0Q2ezBmTHA)

首先是电源部分，左边是用了一个三极管和一个稳压管搭建的稳压电源电路，15V的电源通过电阻R1到三极管的B极，稳压管的电压在5V6,然后经过三极管的PM结降压为5V输出。右边是一个跟随放大器。理想的电压跟随器应具有输入阻抗趋于无穷大、输出阻抗为0和正向电压传输系数Av=1三个基本特征，跟随器是一种电子线路，其输出信号基本等同于输入信号，但提高了带负载能力，广泛存在于各类电子线路中。

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\纯硬件也可以做PWM波__images\img_000_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)**👆查看更多目录👆**

电阻R3和R4用来调节输入跟随器的电压值，输出相同的电压值，跟随器输出一个5V6的电压，导通三极管Q2，通过PM结得到一个比较稳定的5V电压。J1是跳线帽的排针，实际电路的调试就通过一个跳线帽连接起来，就可以用一个电阻器调整输入电压。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\纯硬件也可以做PWM波__images\img_001_a71619ccceff.png)  
接下来就是主体电路部分了。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\纯硬件也可以做PWM波__images\img_002_dd1c4df54d3c.png)  
从左边开始看，5PIN的排针是传感器的接触点，不用理会。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\纯硬件也可以做PWM波__images\img_003_707c15ae3609.png)

传感器的2号脚输入一个小电压的信号，U1B是一个同相放大器，把小电压放大。放大倍数为（1+R22/R15）,TR3还是作为实际调节电阻，可以调整放大倍数。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\纯硬件也可以做PWM波__images\img_004_4f66f819d466.png)  
放大后的电压经过电阻进入两个比较器的负相输入端。R16,17,18三个电阻通过分压作为比较器的比较值。D6稳压管和电容C7作为滤波作用，提供了一个比较稳定的电压，让电压值波动小，稳定。当比较器的状态输出改变时，点亮LED。这一个比较简单就不详细讲。  
  

接下来的电路就比较有意思了。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\纯硬件也可以做PWM波__images\img_005_165449da1921.png)  
这一个电路的作用是当电平翻转时蜂鸣器会发出声音提醒，具体是这样子实现的。一开始电平为低电平信号，蜂鸣器没用工作。当高电平到时，高电平会给电容C10充电，由于电容有通交流，隔离直流的特性，这时候会有一个电流流过二极管D11，让蜂鸣器发出声音，时间由电容的充电电流决定。当低电平时，电容放电，电流由R45流向三极管Q10的B极，低电平时B1和地是联通的，经过两个三极管放大了信号通过二极管D9蜂鸣器发出声音，三极管是反相放大，二次放大信号才同相。这里电路设计得比较有意思，利用了一个电容充放电的特性。  
  

另一个电路也是比较有趣，用电容的充放电来做一个PWM波（虽然说用单片机就可以很容易输出）。先看电路。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\纯硬件也可以做PWM波__images\img_006_f519c5dbdf2f.png)  
这一个电路也是比较器，不过有反馈电阻R29，所以是滞回比较器，不懂的同学百度一下，这里就不写了。电路上电，电容是没有电的，比较器输出高电平，通过电阻R33给电容充电，当电容的充电到电压大于4号脚的输入时，比较器输出低电平，电容放电电压下降，然后因为滞回比较器的特点，4脚的电压会比一开始的小，当电容放电到比4号脚的电压小时，比较器反过来输出一个高电平给电容充电，电容的电压上升，这样子就形成一个三角波。注意这里要明白电容的充放电曲线。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\纯硬件也可以做PWM波__images\img_007_1a928a68ab7c.png)

一般取充电到%64左右，因为这样子速度比较快，做出来的三角波也比较好一点。电容出来的三角波通过一个比较器就可以得到一个PWM波了。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\纯硬件也可以做PWM波__images\img_008_27e81e250980.png)  
一般直流电源会设置成可调电压，用电阻器，这样子就可以调整PWM的占空比了。  

  

## **一点通推荐**

  

[硬件设计开发指导手册-docx文档](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567287&idx=2&sn=df35cb4391c24e71b35a23e3bccc67f6&scene=21#wechat_redirect)

[研发经理主导电源ODM项目全流程手册（附:考核与追责机制）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567614&idx=1&sn=fe1657b3c7845fb3eef985772dce178b&scene=21#wechat_redirect)

[电源硬件验证与测试用例编写手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567313&idx=2&sn=363dd274654c8f3590c1c860623c39da&scene=21#wechat_redirect)

[硬件开发全流程手册（.docx 文档）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567403&idx=2&sn=6b8511c131bf596492e9c8724be216d5&token=2048927905&lang=zh_CN&scene=21#wechat_redirect)

[开关电源技术平台与产品预研管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567264&idx=2&sn=374c4e23a2a674c254f29274615f1a30&scene=21#wechat_redirect)  

[敏捷研发项目滚动式计划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567191&idx=2&sn=9a8fb8eefc74212bda6f0f07f00b8cd7&scene=21#wechat_redirect)  

[产品总监主导嵌入式智能硬件市场调研手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247567165&idx=2&sn=59e9eb93222e43f47328f42ecacc624e&scene=21#wechat_redirect)

[电源产品经理项目启动里程碑资料评审管理手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566969&idx=2&sn=9a3beaa09656b7cac804aad7bddf0134&scene=21#wechat_redirect)

[电源开发经理设计开发流程和规范手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566966&idx=2&sn=4a9569ebd0a6c25adb6e3fdf1af37332&scene=21#wechat_redirect)

[智能化行业趋势洞察与合作规划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566768&idx=2&sn=9b56b2555afae3e08459f3627bbf7c8c&scene=21#wechat_redirect)

[硬件经理方案评审与成本控制手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566835&idx=2&sn=7f95c948eafd554bfdf921da53eb597d&token=549077461&lang=zh_CN&scene=21#wechat_redirect)

[硬件研发总经理统筹团队核心技术突破手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566776&idx=2&sn=f0695fc2aa067e620b02521d7cc95d31&token=542927284&lang=zh_CN&scene=21#wechat_redirect)

[半导体元器件研发项目全周期计划手册](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247566856&idx=1&sn=5181825e9f152fa4c76a1787f316f099&scene=21#wechat_redirect)

  

  

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\纯硬件也可以做PWM波__images\img_009_1539b38016c7.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（8万+粉丝）。
> 
> 分享💬点赞👍在看❤️