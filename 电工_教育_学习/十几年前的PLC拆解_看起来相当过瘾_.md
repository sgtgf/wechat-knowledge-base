# 十几年前的PLC拆解，看起来相当过瘾！

原创 改名了 硬件笔记本 2024-01-28 19:26 四川

> 原文地址: [https://mp.weixin.qq.com/s/B22kfJAQpQD9HiQfocxd\_Q](https://mp.weixin.qq.com/s/B22kfJAQpQD9HiQfocxd_Q)

# ▼关注下方公众号了解更多▼

PLC，一直是想学习的，怎奈基础不太稳定，只能大概了解一下知识，并不会编程……那就拆个十几年前的PLC来研究一下吧![](https://mmbiz.qpic.cn/mmbiz_png/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnrRAYLbgtv1lkE7zgfcJuwFpJeAhjs8yWZKVb66fe8icib96Lco29GjuA/640?wx_fmt=png&from=appmsg)

  

这个也是老旧设备不使用的，连上电以后，所有指示灯都正常显示。

  

我们先来看一下外观，外观是由三部分组成，型号分别是XBM-DR16S、XBE-DC16A、XBE-RY08A。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFn8zW1psSYLGMAeCcqFmEGZLSfMqPknh3y2HjhibtyH0xXjvTt8OZj4Ig/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnt8ZoibkMUCAWMKlLstOSHpQjib558w1faj7kTU0w6baAS0kSnxia1Qhfg/640?wx_fmt=jpeg&from=appmsg)

  

第一个是LS可编程控制器，第二个是LS的XGB系列I/O模块，第三个是输出模块。

  

最右边那个是魏德米勒的24V直流电源，48W最大输出。PLC这仨个，每个都有对应功能的接口。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnY2fuGLibiaj9rYTNMjqwksRL8m6p3cujQvnk4ytFnyC7TicNGGzMVWlzQ/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnglU5aPqYPZ5g58MajbhweygcTIppRl5t8LGBxspbqkRIzMTx9GXIKA/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnjictPpUpj8WTsoEaT0sRxHSYQ9a5gptNnxC5SUYH4guFCJkxKUn2YWg/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnI26mfhvfze4GC1ibxe4V6iaX7GFJulQdTGAItOCa1DAyEmmN2xe0TB1Q/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnzAa4x4FAZNXocO45YYVwRjXFUV01JmT71dwZjlXWbqMMsHLyAdNtVg/640?wx_fmt=jpeg&from=appmsg)

  

外观，后面有轨道安装槽，上下两端各有一个对应的小锁可以互相锁住模块。

  

其中，第三组外面有一个扩展口可以撕开，继续往外扩展。编程模块底部有一个RS485接口，还有一个dc24V电源接口。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFn38eWF9QKDG7BM3ic4JxQuAuYoamcvwZofvq9Ds9gZxepHpZzBoXPUSg/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnia9yr0SG3mXGgPicZ5fv6wZAekcyDic9PFcdicm2gVSl7qVH0xWXibMXHbA/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnmQyttBCsWpxnj5amzBO5W72DTYyp2vqMDzPu5PTibVo9WaibsJVD0AfA/640?wx_fmt=jpeg&from=appmsg)

  

三组模块儿依次排开，都使用同一种接口。上下底部可以看到锁扣的位置。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnGQGAKZibCiakNXZrHSf0boGj5gZfSFDwic5ZWc2qNZIiatEMaSngPOQHiaw/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnOMcMcho2L8TS9YIUr5eAM42slMibYTUmwCaRibPPMfuiaUyHqPw4f6sicA/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnme6ss3GpXDgc04nQPtuVnNicOgRabfKwkMoUQkkqdFcFtznBuF4Q3ww/640?wx_fmt=jpeg&from=appmsg)

  

打开外壳看到背部几乎没有元器件，只有显示模块的LED灯。标签上应该是生产日期110411，差不多这个时候的老设备了。

  

LED灯通过外壳镶嵌的这个透光塑料，在正面显示。打开正面面板，一个RS232c的接口，运行停止开关，三个指示灯，电源，运行，错误，底部两排接口。

  

看里面有继电器，我猜测，这个可不可以单独使用，不用后面俩模块，如果运行的动作不是很多的话。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnYkG5jNOoPxZxfbibJ8uvkhmf4R04hYXMhLBwZvA1MojQ1QibW7hTNtow/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnOU8CZwjrhuD9ecGNkyzqVj0iceLiaZrleluaOnQZia9IVTHckyDzibKLwQ/640?wx_fmt=jpeg&from=appmsg)

  

拆开后是两块主板的，通过插口链接一起，左边的为可编程部分，右边的为跑程序的部分。

  

下面，看一下编程部分。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnhHE3SKj945JdOBXHju3vPIBoOAsaJGbPIgDzVaJ8UJUmiaF8o9QVmBw/640?wx_fmt=jpeg&from=appmsg)

  

通过232接口进来的第一个芯片ST202EC，一颗来自意法半导体的RS232收发器，5伏供电，可以满足所有EIA/TIA-23E和CCITTV2.8规范，数据速率高达230kbps。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFntibbhibVqBFK7BbqdmBqGwwY0zm4K79Zw2iaeialLlWeeLsjplOYKL0ZWw/640?wx_fmt=jpeg&from=appmsg)

  

一颗麦克隆生产的4M闪存，单电源供电操作，4.5~5.5V，用于读取擦除和编程操作。擦除暂停擦除恢复，暂停扇区擦除操作，从另一个未被查出的扇区读取数据或将数据编程到另一个扇区。右边那个14针脚的HC14，是Fairchild仙童公司生产的一颗逻辑芯片。再往右的一颗957B功能没找到……

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFn5BVoIODRKGIbszjGV3hPPaz1nJsJibGI6zqD6ic6ZoMAQcuorBusytmg/640?wx_fmt=jpeg&from=appmsg)

  

主控芯片U1，丝印H8S/2424是一颗瑞萨的16位高速中央处理器，为实现低成本的系统配置而提供的片儿上外围功能是DAM控制器EXDMA控制器。数据传输控制器串行通信接口IC总线接口同步串行通信单元Ad转换器da转换器和各种定时器。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnWbDicoaFIm724XSib1OGroodqLtR6G8ZKpmzlra4UBUeXmfVtDwZtURg/640?wx_fmt=jpeg&from=appmsg)

  

一颗大电容，旁边两颗TLP280-4，是东芝的一颗光耦合器。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnibnxHH05IlKMQXGP9qsUbCHicSKJhLKuuP9hQWR45GhNwicHTuK86nic1Q/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFntHSlbfjTyWrgfgia1mIrPfdia9vYASNg2545Ar6Gt43Ywics8JBXcx20w/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFn4cTN42nr7S4WZ94bgShX674BRYIgbtHM3zIG1gZNDNPY7Ia9zwFQrQ/640?wx_fmt=jpeg&from=appmsg)

  

背部的芯片位置是两颗的，但是只安装一颗芯片，丝印不太清晰，品牌是BSI联邦科技的，应该是存储芯片，中国台湾制造。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnibBQEM7QXUusC81XJCP9186VoAKJ1Lgm2BYICMC0R6xuy5QUTEqoJyg/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnwgvHlwZrv1UHZJmlvq9XWbks6thTUMxecWO1Gfxk7ibib3W3RkibRUWaw/640?wx_fmt=jpeg&from=appmsg)

  

8颗LED，用于显示当前功能。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnz6FfkiauvpSlTLmQJuwyVFYfSBBZRwTwn1qRkhfs25zicmXmInLf4hvg/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnDiaHklR3uicYIGxoibhVKLick6DCly147UTd2FvsGXXKel2vtNdUwVkuWQ/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnIMcE2ZOvvQzIJCYLDF2mnibDBHNaJia0ps9bFdg8BibX2BDrwpU59BDuw/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFn8QjZtXc3buRyjqw6vXiayseXNyjQLLEiboAibO77vfdHOr4sprMsSbT5A/640?wx_fmt=jpeg&from=appmsg)

  

再来看下这块板子，带继电器的。

  

排线进来，先是一个功率电感，一个贴片二极管，旁边还有个35V电容。

  

再往下一颗丝印LM2596S，是一个开关稳压电路，该芯片采用pwm调制模式，能够调节占空比线性范围0-100%。再往下一个开关，还有仨个LED显示，就是对应电源，运行，错误的指示灯。一共有8个继电器，旁边一个24V输入，4颗电容，3个电感。24V输入应该是给整个plc供电的，开头照片接入一个24V电源，可以点亮。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnIpEYP8wib2nWbO5TRl1icAJiau6EhMjNwCK4ZdzB1DMCUs6HXB3UtpoWw/640?wx_fmt=jpeg&from=appmsg)

  

板的背部，可以看到8个继电器的引脚，都对应到一个开关管，再串联到LED，再链接到插头，跟PLC链接起来，给信号。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnWJHF4SVlQk7zvRicXNF5vbFqiaH9pHAMiaWuNEHjovaoroJZEMUEz6cug/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFn5larkLKgFtECLxToJNkZ0PtZuCSf6bRt0wSflNUowB7ct5iaibHexuoQ/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnFgOCBf4Pt2eSiaRxcaL75ibia61HpRKlqyPBuJvE6nSJAb2Af88T4aaWw/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnvjB1epcLODlVgibSe8QCPkW5er6Lf8fYkhdYJTXwy5wa1XtrJic2AecA/640?wx_fmt=jpeg&from=appmsg)

  

再来拆中间这块DC16A，继电器接口是直接连到DC16A上。

  

靠近接口的第一个芯片HC244，是德州仪器的一颗带三态输出的八进制总线收发器。负责数据传输吧。

  

左边那个马来西亚生产的瑞萨D78F05358位单片微控制器。

  

来控制下面4个白色的TLP280-4，是4个可编程控制器AC/DC输入模块PC卡调制调节器。后面通过几个贴片电阻链接对应的接口。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnnn9YO4xuQ8zckyWEBsTglHo1mgtMbb18GI94xNNLPhkEOeDibiaGcdSQ/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnaPF8dz1AibOcbY6PibZXCxZ0RSfbIaibWP3H6xdqTtBlx5w2DmfRnIFJw/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFn5MFEmiajAp85NeYNT9cb0BVBLaOYlV8zc37yWlHs9EEibbCIWqUkem5Q/640?wx_fmt=jpeg&from=appmsg)

  

显示部分，我以为还是普通LED灯显示，结果是通过排线，链接到这个集成显示的，也可以说是显示屏吧，分两组从0到F，点亮某一个，说明某一路正在工作。

  

背部没有什么材料，只有一个接口，几个电阻。标签内容应该是11年3月29日的生产日期。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFn05zfaao7FjyGIUtiaqHYsc4icOS3wTRrzZuEicnsh7j090BORJkVn6IVw/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFn1CvtXfZUNcKKbbG8opYTw3GibEf6MgnkGTMEqkd20ejZxC3yiaeG6w3w/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFn2bnuXCMkJTDyG1gQrfduSNlo7MLfPF6jYqnF5NBT0cltf7LIXeJ71w/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFn5AZ4OjGbfxJ860SxQQXdzsmffZMWqNZEZ7jf2Al242Q1T92XgE1UBw/640?wx_fmt=jpeg&from=appmsg)

  

第三组08A，也是8个继电器，一个接口，也有预留8个继电器接口，跟输出接口。

  

芯片第一个也是HC244，跟上一块的一样。

  

另一个贴了标签了，外面有胶，清理不出来。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnP7x8dicyvSNibflZjhYGCg2Ica8Zia4H1Qg1vQ23TkeU0FkVmFTBLkicAQ/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnfz8OZ0OOtVXOl2Ujt7ldPafT3WI0L42oxnfu7gbhSKjbadXpnZ5TeQ/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnUT4Nyz6TEk98kuRDGmKib8e5qUMPqPKd6rA1t7iaC0DWyzZbFu0fArqA/640?wx_fmt=jpeg&from=appmsg)

  

显示部分，只有一组显示0-F的。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnJUtgia4gYPTxZuUM7aXRQOpS4SFkyFD4e1lCkflKZrYtbEZ4a4HzGag/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnQ3kRF29BCTdMqlDJEMtdkSGHp7Ux0oibJU0tebXK7RtsvGu9eyqXlWA/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnfSNpPQBAic6YhODq40ODWaV1Zt2CfSPMMtKe5QJjWIiawlOAB2I10COg/640?wx_fmt=jpeg&from=appmsg)

  

继电器型号APA3319，最大电流1A，品牌为松下，中国制造。这个板的生产日期，11年3月14日，韩文字应该是检验合格吧。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFn1NLET4vqq9Z9cEOmLtUMd76W7kJSAdKjzsiauiacfw8neOL2gZK8Nxdg/640?wx_fmt=jpeg&from=appmsg)

  

给一个24V电源，指示灯亮了，需要搭配设备，感应器继电器，来工作。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnCEibPwLODV84vDD9fzeMqwI6VlcrhP5GBFoM6mL2gGLJuiaWzZwic9pcA/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnqhNx0Tvkfria4mJu2TXMjw2MicHXDVxKeCt2jiaF9ly7ic6R2O7JbVBeLQ/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFniaJaZ4k65NyFCKVwkQvMwEqibnMfh1EZ8kxHcBn1kI70TAfdlIN7zEkQ/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFn84oWVo6h06L7sicYGmNsZ1cUXtEpx5Oow5xZCSmRrZjWVmibHoOic7yTA/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFniazzeayULhiaMLqhJQYDXWpUWettVK1uz7GdrbyoWgTVCxWl1ibQNGC3w/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnSHgBXcbVIYZzVQ9klqh4COcq2puUUIt8icO8pnYygrjxOjukOiaaqfgQ/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnia4BJoibkxLoJdv2LtceNPoNdKrdhGFUpicM6reuVHcyxFzwdx9xYkk0g/640?wx_fmt=jpeg&from=appmsg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/XZMicpgcYibXG273jLwUCE2uOoOHnfHsFnt8lxY2OBibn31AsbRJoHukZfPLDp12miagPmBibklWma2OQfGpyRIVMJQ/640?wx_fmt=jpeg&from=appmsg)

  

再来看看这个轨道电源，品牌魏德米勒，24V2A输出，最大功率48W，型号8739170000，pcb生产日期2007/11/27，一个16年的电源了。现在在某宝售价100-300左右，不过用料还可以，三信电容，变压器，安规电容，东芝K2607场效管，这堆用料这个价格，大家觉得怎么样？

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。