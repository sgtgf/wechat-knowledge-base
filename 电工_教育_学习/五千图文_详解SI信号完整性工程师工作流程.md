# 五千图文，详解SI信号完整性工程师工作流程

原创 广元兄 硬件笔记本 2022-02-09 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/HjVnd6CqJ2CYlrYWbZX-CA](https://mp.weixin.qq.com/s/HjVnd6CqJ2CYlrYWbZX-CA)

▼关注公众号：硬件笔记本▼

  

  

**写在前面**

  

初衷，无意中看到网友朋友圈上传了一张使用十年的笔记本电脑。想起十年前刚入职Samsung，想起那些年时光，那些点点滴滴……

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbLOmW31m5hN9mI3uOr1lxLLHPQhNicdOYSAChk0Jgkt5FcpKdORk6n3Q/640?wx_fmt=png)

打住，不煽情。

言归正传，关于设计过程中，SI信号完整性工程师工作的流程如下：

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbODRwxUQZCT0PTH7RI7CsX1LIPOrd0gONzEvhc5SurDudicmAXyy5Jfg/640?wx_fmt=png)

**01**

**评估阶段**  

Intel & AMD 等芯片厂商每年会发布一款新平台Design guide，各大生产商会在接下来的6~9个月，或者更快的时间内设计出相关产品，抢占市场。针对消费类的产品，唯快不破！

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbVVcA0ORVsXmLh1NJ9icicX3CO9Cn57S6EfKnGiaBoSrN5PHn3Z5gQRWUQ/640?wx_fmt=png)

离开Samsung前做的最后的一个平台

MRT市场会根据市场调研以及最新平台的新功能，给到研发中心一个设计需求及相关高低配置。消费类产品一般有高低价位，针对PC，高低配的差别，除了存储容量，更大的体现于独立显卡和集成显卡。当然，消费者关注的外表材质，也会因为配置而有所不同。

  

一、PCB设计

机构工程师会根据平台资料和先行评估，给到我们一个PCB板的厚度范围。如果这个范围在先期的平台中有使用过的机种符合，我们会尽量共用之前的PCB板厚和叠层，共用的主要好处是在PCB生产过程中的阻抗管控，特别是回板周期的保证。

如果不能共用，我们会参考平台设计规范中给出的叠层，下图为8-Layer参考叠层：

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbk4CIeu7HuBLVmgvtdPfEfT342QnJFkL2JmPUVCJ8VBxbntdt5G87pg/640?wx_fmt=png)

当然，平台也会给出不同板厚不同叠层的多种选择：

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbqAoQhqJa6674FJD1LRLGia7krJafa3I7boW2KjlY6iaTjG5dYlKIxF0A/640?wx_fmt=png)

这样，各家厂商会根据自身产品的定位和配置来做出选择。

  

需要指出的是，不同于高速产品（服务器&交换机等），消费类产品特别是Notebook是走线密度特别大的，经常会走双带线。针对上下层的串扰，只是给出走线Overlap建议，根本没有提到返回路径完整性。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbLazwEp9ZaqmRRp9Nia9Bx7oaKBAiaF4MrpGvaY0zqMFkyxupl8hB3yzw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbEaPg7ZMHoHOlolTdibg0uNs7kEiaiaLLhaEYgTjnHaFib71O1uHssJB9Yg/640?wx_fmt=png)

30度的建议看起来容易，其实Layout操作起来还是很麻烦的。针对Overlap重复度，之前还做过相关设计经验总结，现在应该不适用了。

  

从WHL平台开始，市面上出现了很多游戏本和超极本，为了追求产品的超薄，需要管控PCB板厚，也就需要控制介质厚度，没有所谓的远端参考，更多地需要对完整地平面做各种切割来保证电源完整性。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbh0AzgGq9hX8qEEDnImUa9u0icF3ucLicNlEkhBPvuEnRUfaXe4lvjAicg/640?wx_fmt=png)

等到转换赛道，从事更高速率的产品设计中，这些操作是不敢想象的。产品的不同，侧重点也有所不同，认知也有所不同，这正是一叶障目。  

  

**走线部分：**

根据阻抗软件算出差分阻抗的线宽线距，内存和显存单端阻抗的线宽。然后根据走线guide来评估走线范围是否满足走线间距及相互间距的要求。其实也就是满足Inter pair& Intra pair，至于其他杂线间距的要求都是可调的。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbQPydVmD4DzjkdeApKvhxP5xbDL3ggRF2icicMwtNSNumz0LY4BdwPxhA/640?wx_fmt=png)

内存和显存走线也按照这种方式方法进行预估，其实内存和显卡的走线相对固定，只是可能因为配置不同，走线数量（DQ&CMD）的变化而增加层数而已。

  

**电源部分：**

对各部分电源进行简单分层，重点关注电流负载需求大的CORE电，需要考虑不同层面的结合与转换，来保证其电源完整性。

  

上面的步骤都是前期布局预估，布线层数还没完全确定。这时候需要Layout工程师来做相关工作：高速信号狭窄部分走线；内存和显存摆放大器件；铺选电源路径。

通过这些工作，来最终确定PCB板层数。根据确定的层数，我们最终确定板厚和叠层。

  

至于板材的选择，因为消费类产品成本的限制，一般不会有损耗要求，只会给出FR4 的Tg，让板厂自行决定选材，印象中，有使用过TU768。不管板厂选择什么板材，必须进行相关阻抗的管控，特别是针对内存的单端线阻抗管控，内存相关的Margin 测试管控比较严格。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbviaic2klryziaicw5ozWw8CPTk2sOMibBL9HNAdPpBaOibc22ibzQ79v3c2Dw/640?wx_fmt=png)

  

二、风险预估  

各个工种会根据自身的设计规范给出风险预警。针对信号完整性这边，无非就是板型的限制造成信号线长不符合要求，走线空间不符合要求等等。一般新平台的新功能，因为没有设计经验，比如WHL Type C 的充电功能、Thunderbolt功能等都会预警。如果时间上来得及，会对一些风险点进行前仿真，如线长超出SPEC。

比如，设计中有PCIe信号超过SPEC或者经验值。Layout工程师先行设计出相关部分的走线，然后用PowerSI提取出S参数，用ADS模拟链路搭建，仿真出结果。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbmfP6XaRwzibE1dkouzJ7Wibp3z79bzRoh02l0AUWmg0Wb5jsciaHavMrQ/640?wx_fmt=png)

将得到的眼图及相关指标，与协议规范的标准或者模板进行对比，来衡量是否符合标准。不符合的情况下，评估风险级别。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbf5vyOyvI5p06KjZRUqqtPW8VxHswOCKP8oxvoicD9viakVDyKuGVawhA/640?wx_fmt=png)

针对相关的风险点，给出备选方案。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbicPbzulSBiam2U9RChpUwyib1xq7icH40ObuZWeLE0BCyQ8PwX4KO1fMXg/640?wx_fmt=png)

**02**

**设计阶段**

进入设计阶段，需要输出详细的设计规则给到Layout 工程师。设计细则有很多，很多公司也大同小异，每个公司也会有相应的文档格式和输出。

一、信号部分

这部分我们重点关注的是高速线、内存&显存的部分：

高速线（PCIe,USB,HDMI,SATA）差分阻抗线宽线距，组内&组间距离(Inter pair &Intra pair)。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbJwwk6wlHyQtzSCibYZeYn7bmNUL8w0BZRQ9iaGPEibiak9LQSha9ibGP8ibA/640?wx_fmt=png)

内存&显卡的阻抗（40Ω&50Ω）及组内&组间距离（16mil）；

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbOTbria5oDmLr6JlLJwZnzph0V9bibdjEUhhEIfjQicFyDnJHY6ybarpqQ/640?wx_fmt=png)

Reference Voltage(VREF)

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbTqPRrot6kQL9HOJaT4YhskbAzIGcYkRkp8SXm2j4QCKfJ6LLPdJFcA/640?wx_fmt=png)

除了上面重点部分，其他信号走线的规则，比如电源部分与信号线的距离以及一些其他相关规定，这里就不一一列举了。

  

二、电源部分

电源部分我们重点关注两点：电容摆放&电源路径。

**电容摆放：**

我们需要先确定去耦电容的种类和大体数量，然后框选去耦电容的摆放范围。摆放原则一般遵循去耦半径范围大小来摆放。小电容靠前，大电容靠后，有空间摆放的时候，也可以考虑部分大电容靠前，来防止电压过冲保护。这里前后的概念是基于终端用电Pin区域来说的。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbfG2tKCiaVaA8Vc2N5ticCInYNPPje4icAfywxE38nQfDJntQzmm2DMnYg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbGH0lT07M0x9OicxHpxGe5voGrGzib0W2pTjAW3q6INkkQY6CumZoWA3Q/640?wx_fmt=png)

去耦电容的数量部分，在后期产品量产后，会对其进行优化。减少电容数量，来降低产品成本。电容数量的减小，可以通过电容优化仿真和结合后期电源纹波测试的margin来评估。

  

**电源路径：**

先期我们会根据相关设计规范文件，找出各部分电源的最大承载电源，根据承载电流做出电源树(Power Tree)，来评估和确定主次路径电流大小。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbGF4NtKMNVnjpCLMgwic2ltkxy3paLd5qTBuQVfMxRyePj3D6FoK1cjw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbeWIic2OgbjQkJum1puJvNHTgW8mQQjrjRmIIXVibC8u8wv4W7gpRrU1w/640?wx_fmt=png)

根据电源树，来分配各部分电源大体的主次路径。协调各层各部分电源的铺垫方式及大小。一般按40mil/1A的电源来预估电源Shape的宽度。针对有些电的负载比较，一般考虑在内层给于补充，来保证其负载，同时在转换电源层的时候，要注意打孔的数量。铜皮1oz，Via10过孔通流在1A预估。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbibiauUR9MbdzrFWY3PZuicmQSjfbrGvWcdCayr6UpPERpB2ZdjFWv0tEA/640?wx_fmt=png)

这里需要特别强调的是：整个电源路径，一定要关注其狭窄部分，这部分特别影响通流能力。比如5V的电，跟后期测试相关节后的IR Drop有很大的关系。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbttyZT6Vb8vutJ4xfLshellQ2oX0QN5ruUgD3GW50C4x2rc1urUKiapg/640?wx_fmt=png)

  

三、设计检查

PCB Gerber前检查的条目也很多，每个公司也会有自己的Checklist。信号方面主要是HSD相关高速线的检查。

**线长匹配检查：**

我们会输出一个等长表格，来确保整个高速线的匹配。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icb8CTOYXVHXpap8MYzgL4NOXUrya8AyibCZnI4dcibqYekKb1RvP9UGbog/640?wx_fmt=png)

**匹配方式：**

会给出参考线长匹配方式及一些差的匹配方式：

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbNg0JFMSsmP7D968USw3LPpFsoUaKeIeAAMlHJ79hPwn7HMrNiabbhSQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbpUHeKaDBQcF4bibick66BpZlQVPUaiaQqNwDWXWXgib97MdElfgfJEWOKQ/640?wx_fmt=png)

**路径检查：**

保证走线路径相互对称，转换过孔处有回流地孔，远离干扰源（如电源）等。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbZtapjdYYNzLaPZjpXkIdnoFPmfXyf9iaytNT3NNxoGILuMNkgdME6AA/640?wx_fmt=png)

**03**

**测试阶段**  

PCB Gerber之后，一般在10~15天回板。这段时间，需要整理相关资料，准备测试阶段的工作。

因为消费类产品的时效性，测试的时间一般在10~15天。测试的Item很多，时间关系，一般只测高配版本。一般这段时间会一直耗在实验室，直到测试&问题解决才能出关坐回办公室。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbQaDXJtVoHz7ibQqibMmybCXClr5raAiaSUVo8oW32kPWRCYLkqawlpJQA/640?wx_fmt=png)

一、电源部分

电源测试的Item很多，这里只讲讲其中几个。

**纹波测试:**

电源纹波测试量很大，需要让测试主板在高性能状态，一般会运行相关测试软件，然后用示波器点测终端的耦合电容。同一个电不同容值，不同的电不同容值，都要点测。

纹波测试重点关注Pk-Pk值，终端的标准是+/-5%，源端+/-3%的标准，测试标准因产品而定。纹波测试的作用，除了终端电源的完整性，也为后期量产后，机种降成本(Costdown)设计提供测试数据。

如果有些电测试有问题，就得需要从源端、电源路径、终端耦合电容的摆放等多方面找出问题，然后解决。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icb6JDF4hsQ3fgVSgejicTKE5HrWp2aaiblxUXTWYnscwqF43TdEAXSj7Aw/640?wx_fmt=png)

检查电容摆放位置（0.5 inches）之内

  

**降低成本:**

量产后，可以结合OptimizePI，降低机种成本。通过OptimizePI仿真，可以优化减少耦合电容种类和数量。再根据纹波实测的结果，给出优化的结果。可以的话，通过相关的PCB测试板重工认证。不知道现在的版本有没有更新优化的版本，能够给出优化后电容摆放的范围。

  

**压降测试：**

压降测试的原因是PDN有阻抗，负载电流从源端到终端，会有压降的产生。以USB3.0为例，终端的电压值需要≥4.75V，才能保证终端设备的识别。特别是小板上的USB3.0接口。印象中，开发过一款产品，卖点就是小板上有USB3.0接口，因为要经过FPC Cable，接口的压降问题就搞了很长时间。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbzics3ogGcvOWWtv582QQKjUS9Wls8nEY8H5zfgpcniay799EAGmQapLw/640?wx_fmt=png)

IR Drop 压降测试除了可以用软件Power DC仿真跑出电压值，还可以使用测试夹具抽载（USB3.0&1A，USB2.0&500 mA），测出终端的电压值，看其是否符合SPEC。

针对Drop风险比较大的链路，PowerDC搭建仿真，根据仿真结果，给出风险预估。但是这种，只能针对主板带终端接口的链路。PowerDC搭建仿真，是没办法导入FPC Cable模型，来预估带Cable 的压降，不知道现在版本，可不可以导入使用。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbcrgcMHicC5wVUDMAnBsSfjCJtw42FTCICP8piczWGjKL0LjgjkNyrHqQ/640?wx_fmt=png)

PI 仿真三大件

PowerSI 提取AC PDN 电阻，不同于高频段的噪声由芯片过滤， PCB板耦合电容作用于兆级别。  

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbL5dVLx1JI8IqicKzWnJGuzPjreZGfmJwtkzGMGYkPQ9vuPn8OjK9DEA/640?wx_fmt=png)

二、信号部分

信号的测试不仅仅是高速信号相关测试，时钟的部分也要进行测试（保持时间，建立时间等）。这里只讲印象比较深刻的几个。

  

**内存测试：**

一般默认VREF的电为System Memory Voltage一半，比如DDR4是1.2V，即为600 mV。测试方法：将分压电阻拿掉，用外部Power Supply 对其供电，以600 mV为基准，上下调节电压值，同时运行Memory Stress Test。一般测试时间≥2H。一直降低或提高测试值，直到测试Fail。此时测试值和600 mV的差值即可认为VREF Margin。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbYRfYXXeA3utHGbZ3lsp5bBg53DlExbaUxJm3eadQLWmfIfm4mEicSLQ/640?wx_fmt=png)

也可以通过Intel 给的关于DDR测试软体工具RMT(Rank Margin Tool) 。BIOS打开Debug port，测试软件通过修改内部设置, 让其开机时自动运行Training程序, 同时通过Debug Port输出Training的结果，从而得到Memory Margin。如下图，所得到的结果包含Write/Read Timing Margin，ADD/CMD Timing Margin等信息。也会对其结果做出是否PASS的判断。关于RMT测试的详细内容，可以参考Intel参考文档。  

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbibZlfoXIqwx10Zib89892afJeGZINSEMXL9os9Ve60DwkFgeibw3rQv6A/640?wx_fmt=png)

DDR3的测试结果图，印象中Timing Margin 的最小值是14

至于其他的点测就不一一列举了。印象中，最痛苦的测试：用两个7240测VCM。这个测试必须两个人，一个人抓波形，一个人两只手各拿一个7240探头。先抓好波形，还要Count 200以上,这段时间手不能动，必须保持住。一般测下来，手都快废了。  

接口方面的测试就比较粗暴和直接。上了测试夹具就自动跑测试程序。

  

**接口测试:**

USB3.0,PCIe2.0&3.0等接口一致性测试，一般是对发送信号进行质量测试，一般看眼图相关指标。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbWxFHDKpxTh8PAmXdXbJ4CK7iaTxwupWyptCYoEGVsqUgGwkPmAB3gcA/640?wx_fmt=png)

主板的BIOS会设定一个默认值，这个默认值可能是经验值，也可能是设计规范根据线长范围给出的一个参考值，如果测试眼图显示Fail，会通过修改发送端的预加重或者是接收端EQ（均衡）参数，来改善眼图质量，让其满足相关协议规范测试标准。

根据测试结果，选择一个设置值，BIOS工程师将其设定，供新的版本使用。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbyOVLcMgVmIAVSgn3vrALicrNVa646fjILJ0wHCdA0Laqgib7xOiamOrMw/640?wx_fmt=png)

PCIE3.0预加重的组合

  

**HDMI**

不同于其他接口，想讲一下HDMI接口，也可能是现有的工作对这个接口的关注越来越少了。现有显示产品都支持HDMI接口，HDMI接口的普及度和重视程度在消费类产品中也越来越高。

记得当初有人还整理了一份HDMI接口各种分辨率及对应各种帧频。后来有的显示产品号称支持4K，一看支持的最大帧频，就默默走开了。

当时1.4标准比较常见，现在2.0标准应该普及了吧。2.0标准可以支持4K x 2K ,最大帧频到60 Hz。现在HDMI2.1的标准都出来了，都能支持48 Gbps, 支持4K120Hz的画面传输。

  

TMDS( Trans it ion Minimized Differential Signa l ing)

最小化传输差分信号传输技术。TMDS是一种微分信号机制，采用的是差分传动方式。看到TMDS，就想起LVDS，都有抗干扰能力。至于两者的区别，这里就不做展开了。

TMDS使用的也是8b/10b编码技术，但其编码方式和PCIe&SATA等串行编码方式不同，通过特殊的编码来减少视频信号传输时信号线上的跳变边沿从而控制对外的电磁辐射，同时又可以保证接收端正确的时钟锁定。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbITtstOprxibwJmSAnBolJakNH6dLrtySkYwiauxzyySgczF9w3sNInVw/640?wx_fmt=png)

一个HDMI包括3个TMDS数据通道和1个TMDS时钟通道

  

HDMI 的测试需要对高分辨率&低分辨率以及不同分辨率下不同帧频的测试。下图红色标记处需要手动拧下再交叉拧上，来测试不同组合。这玩意戴上手套接口就不好拧紧，影响测试结果。光手拧，如果测得不顺利，后果比较严重。手疼真记忆犹新。

HDMI的测试需要专门提供一个3.3 V的电源，直流偏置来保证信号的输出。这也是跟其他接口测试不一样的地方。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icb1olzEdyTGBADPg4hesuNfKOTsxXeJBBJK4CHDwxNMqNTXtibm5ziaB2g/640?wx_fmt=png)

测试阶段流程图：

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbkjYHpNEtYION2TRibCACHWmXVzMq0AvNtjDVTR9ZKogv9dUoCibHhn3Q/640?wx_fmt=png)

测试结束后，整合相关测试报告上传系统。如果测试中有Fail项目，需要给出相关原因，提出解决或者优化方案。

**04**

**调试和解决问题**  

一、配合改进

别的工种需要优化和修改，或者导入和支持新的部件，涉及到高速线号部分，我们需要进行相关调试及测试认证，来配合产品优化及功能升级。

二、问题解决

高速信号方面的测试，如果遇到Fail的项目，就需要Debug。如果确认需要修改或者优化版图来解决，需要尽快将修改建议统一格式，上传系统。Layout工程师修改优化Layout后，需要我们确认修改是否符合要求，并在系统确认。

回板后，需要再次测试验证，确认是否解决之前阶段的问题。

三、市场问题

产品上市后，会有市场问题。高速信号完整性相关的问题，比如USB3.0接口不识别、HDMI不支持高分辨率等问题，都需要我们来确认、分析与解决。

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbWTDiaUKGcbkto4bBWWUHIic7O3UwRfkVVgEQicZ1IBgnyibiakTrogwPBNw/640?wx_fmt=png)

  

**总结**

其实，上面所写的几个阶段内容，是经过修改整理的。实际的机种划分阶段，肯定跟这个大有不同。只不过信号完整性工程师的工作内容大体就是这些，大同小异。疑难杂症的问题就另当别算了。如果说硬件工程师是原理图上功能的实现，信号完整性工程师更多的是PCB板级信号质量的管理。随着产品速率的高速化及复杂化，信号完整性工程师将越来越……

  

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icb3K8IhlHw12t2FpbqdQ4LzOAtXTemUK1GGuRKgh40uK6ibk0RF5Giaq8Q/640?wx_fmt=png)

**工作流程详细图**

  

**写在后面**

上周的某一天，开始准备和写这篇文字的时候，朋友圈里充斥着公司文化节的信息：

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbZjtHAxrVLIPjAF4r0ZhkLeoRZDYiciamB24lUxjxFhMQ0I6kbV4qKnKQ/640?wx_fmt=png)

看着这些，想起一个场景：一个人站在斜坡上，喝着咖啡，以局外人的视角看着热闹。看完后，转身离开，内心平静如水。

以此文，算是对上一份工作的总结，也算是一种告别。

  

部分图片来源于网络，侵删。  

![](https://mmbiz.qpic.cn/mmbiz_png/S9BIsMrEs28wNvjMiaU7lTVH38Qdicb9icbqvML63vX6IDvtFLrQOVO0U4ZHPpA3Z9kAyYEXplnYjRXt9k6DKZYCA/640?wx_fmt=png)

这是广元兄的第26篇原创。  

Slogan:一起学习，共同进步！