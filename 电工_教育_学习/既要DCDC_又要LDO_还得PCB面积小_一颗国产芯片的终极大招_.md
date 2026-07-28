# 既要DCDC，又要LDO，还得PCB面积小？一颗国产芯片的终极大招。

原创 王工 硬件笔记本 2026-06-16 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/9llENKxGt87NY6GI9QcP8w](https://mp.weixin.qq.com/s/9llENKxGt87NY6GI9QcP8w)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

大伙有没有碰到过这种场景？

你手里有个USB 5V供电的项目，需要两路电源：

-   一路3.3V，给MCU或者其它对纹波敏感的芯片，电流不大（200mA以内）
    
-   一路低电压，比如1.2V、1.8V或者2.5V，给核心、DDR或者IO，电流可能大一些（几百mA），对效率有要求。
    

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacicN1zzzjicQ2WW3bUo1TIxiacLguLexroicmcSEuficjQM1IqWjU88AEsqu1EcGlw39Hl1gKBucosmibkEqe4UDicNwhmjv9zR7TXlM/640?wx_fmt=png&from=appmsg)

以前咋办？上一颗DCDC做低压那路，再上一颗LDO做3.3V。两颗芯片，加上各自的电感电容，板子面积蹭蹭涨。

有没有一颗芯片，能把DCDC的效率、LDO的纹波、小封装的面积全占了？

最近扒了扒沁恒家的小芯片，CH2003就是干这个的。人家直接把DCDC和LDO揉进了一颗SOT23-6里，还集成了过流、过温保护，外围只需要几个电容和一个电感，PCB占用面积大大减少。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafziaaj5Z1MzKia9Ps3TricxWmjXvs1TMicJ6OunOBoiamzocmnVgAc4c5ayZPElc5QjfErrqypXrBfs6TKDURiaWKeic7Qpn3icrryNgg/640?wx_fmt=png&from=appmsg)

说白了，原来两颗芯片干的活，现在一颗包圆了。

01

**CH2003芯片介绍**

沁恒CH2003的思路很简单：**你不是既要又要吗？那我直接内部集成了呗**。

供电电压从VIN5引脚进来，芯片内部集成了一个5V转3.3V的LDO，和一个同步降压DCDC。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacmMRzNmjaZa0iaZu40oGd3qq6HrtGqfXjvGdsibrDHibx5dKKbFyv9vBfQEhZ1qvJc4wGclibOOicHJ8siarUjUiaU4zPRImKRKS1700/640?wx_fmt=png&from=appmsg)

CH2003K是可调版本，通过FB脚外接两个电阻，输出电压最低能到0.6V。CH2003V和CH2003W是固定版本，内置了分压电阻，输出分别是1.23V和1.13V。  

这颗芯片内阻小、效率高，还自带过流、过温保护。适合给MCU、SoC供电，尤其是USB2.0、USB3.0和Type-C这类系统。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafibPmfEyIXFBdsaFoZIYoml39o1wCG2SGVeoB0Q6jyeB5pomVCaW7QFiaAbYQzS0IExU3QMLjVCuZLoBxMWaAiaLBu7uaOlib9ZtY/640?wx_fmt=png&from=appmsg)

两路都从VIN5直接取电，LDO出3.3V，DCDC出你需要的低电压。各干各的，互不牵扯。这样一来，你既得了DCDC的高效率，又得了LDO的低纹波，还不用让LDO承受大压差发热。而且全塞进了一颗SOT23-6里面。

## 外围有多简单？直接看参考电路

如下是CH2003K参考电路，DCDC输出电压可调。同步 BUCK，节省外部肖特基二极管。外围仅需一个电感、输入输出电容和分压电阻。相比原来两颗芯片，再加两颗芯片本体和各自的外围走线空间，省下来的面积，保守估计30%以上。 Layout工程师看了直呼内行。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacX0ZP9yicK4Lq5vffQ0UPkYZoH1MeO5POVHgv7xN1ztGH2fT5icx2RcemaH9bmpRSWkeABCA4atLhDPK6koAPAlAEQLTDS9IFzM/640?wx_fmt=png&from=appmsg)

如下是CH2003V参考电路，DCDC输出电压固定为1.23V。相比以上电路，外围更精简。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niae7zPhkaOn14Hv7gs1fianJY2mlK2MJr6UgPukRMUxMDkh3GianG4Ja220UV3KyicS9Tq95bd1e3mxCLNqaSw0RAXicnOicQVb0Hc04/640?wx_fmt=png&from=appmsg)

如下是CH2003W参考电路，DCDC输出电压固定为1.13V。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafdFNPvLzth6Mibh0wvUgSSibAmibtFksVIurn15EUNMhGNicIJxJ6Gt7NoNxmSyuxqTQNa7X9bozIz8Rus6XpJW0t2opnhu7OJ6zc/640?wx_fmt=png&from=appmsg)

## 效率能达到多少？来看看规格书

实事求是地说，CH2003不是什么神器。它就是一个高度集成的、针对特定场景优化的小电源芯片。可自动切换 PWM 和 PFM 模式，PFM 模式可在轻载时提高效率。咱们直接看转换效率曲线。

当输入 VIN5 = 4V 或 5V，输出 VOUT = 3.3V 时，效率在93%以上。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafrltl5ic2wdrSicyIM75hraRuKL0s0cPibATjGrntm1Cx7PJfLr0hkAejy4v7Jsu8MWNM2b7YJ4cAKmqRp2gKN6M1BxIpeBLhOTU/640?wx_fmt=png&from=appmsg)

当输入 VIN5 = 3.3V 或 5V，输出 VOUT = 1.23V 时，效率在87%以上。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaebbqsLgCibpcjnp51hbmADbU5ph8KWAAWqocC4BxCOicIOjtGg9MwhnXpulxSAjhcvsZl1H4RCvxPIjxrWgGUfEXjTs23VMgQJc/640?wx_fmt=png&from=appmsg)

当输入 VIN5 = 3.3V 或 5V，输出 VOUT = 1.13V 时，效率在88%以上。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafPkzl1hGNUv2GJWFHaiaicLvG2MlL3uiaTpPGPVukWVkkhp33j3E6MTSy26nnyMFZ4fIxMqCiaic6IFdDDianCs8X8Jz0Jv0bk24usI/640?wx_fmt=png&from=appmsg)

芯片本身是给5V供电输入小系统用的，输出电流几百毫安是常态。在这个范围内，CH2003的效率完全能接受。而且那路LDO的效率其实取决于负载电流，本身不参与DCDC的变换损耗。

这款芯片主打的是兼具电源效率，低纹波和小体积的赛道。**在这个领域里，**别人需要两颗芯片才能完成的工作，它只用一颗SOT23-6封装的芯片就全部搞定了。

**当然，缺点也得说：如果耐压能再高一点，比如到12V，输出电流能再大一点，比如DCDC到1.5A或者3A以上，覆盖的场景会更多。不过真做成那样，封装和成本也得跟着涨，那就是另一款产品了。**

02

****另外一颗小芯片：CH213****

**除了DCDC+LDO这种电源芯片，我还发现了一款带限流功能的低压降理想二极管芯片CH213。这个我之前的文章也跟大家分享过一款TI的芯片，相比之下，沁恒这款性价比更高，也是国产化。**

**

CH213内部集成了过流保护、短路保护、过温保护、电源极性保护这些功能。额定5V、0.5A，支持5V电压下不超过1A的直流应用。输出端过流时能限流，输入电源接反了也能保护后面的负载电路，有些理想二极管接反了会烧坏。

**

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaeJILmmTXmlbKYdczFbF1RN2NhUm4vttssCCsxcFF2EvYQRyFuc7ibRJ1ayCd4cdHZ5icSMyEHFy2lKsSqSTHLqf6UENkPS6ibUB4/640?wx_fmt=png&from=appmsg)

你可以把它理解为：肖特基二极管加上自恢复保险丝，但导通压降比肖特基低得多，过流保护也比保险丝快得多。

沁恒CH213就是专门干这活的。它把防倒灌、限流、防反接三件事打包进了一颗芯片里，包括SOT23-3、SOT23-6、DFN6等封装。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/0o3ohHN0niaeHvmjK94rINVJu9EibDOEZ43vwy4NswZ7BM2LWeI37cLDQ5AIneWyiaYmS2LRueGEZdicoalbeg6wricVszDfBAAVj78z3YicO0sPU/640?wx_fmt=jpeg)

**这里重点聊聊防倒灌。**我之前也写过类似文章。有些设备会有两路电源输入，其中一路不能影响另一路，这时候防倒灌就很关键。以前遇到这种情况，要么串肖特基，压降大、发热厉害；要么用MOS管搭理想二极管电路，效果好但元件多、占面积。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacdbq0zMNe6NhhAJpHujfVWvFM6UTflxrncSn8QhWIT3BRF1m25qmAS5hOvHWorNHNy1h0UcuY3EwvYp9RKoAwqTp9aqorEOrU/640?wx_fmt=png&from=appmsg)

芯片内部是一个低导通电阻的MOS管，典型160mΩ。VIN高于VOUT时管子打开，电流通过；VIN低于VOUT时管子关断，防止倒灌。压降极小。5V、200mA时典型压降只有32mV，对比肖特基的300mV，差了将近10倍。电池供电设备里，这就是实打实省下来的续航。

自带限流保护。输出超过1.3A时自动限制，短路时限制在250mA左右。响应速度微秒级，比PTC自恢复保险丝的毫秒级快了一个数量级。后级真短路了，它先扛住，给主控争取反应时间。

还能防反接。电源正负极接反了，它自动关断。以前你要防反接，要么串二极管有压降，要么用MOS管搭电路嫌麻烦，CH213一颗搞定。

这里有两个典型场景：

一是USB HUB或开发板的VBUS防倒灌，二是电池供电设备的电源路径选择。另外，任何需要防反接且希望压降小的5V或3.3V系统，也都能用。跟肖特基加保险丝比一下：5V、500mA下，CH213压降80mV，肖特基加保险丝要400mV，功耗差多少，拿欧姆定律一算就明白。

**CH213 聊完了，下面顺带说几句他家的另外两款小芯片。**

03

****顺带提一下****

**沁恒还出了几款类似的电源小芯片，定位都很明确，咱就简单带一下：**

**CH2024**：28V输入的同步降压DCDC。这是给24V工业总线、PD电源或者电池组用的，输入耐压高，不是5V小系统玩的。如果你的板子输入是24V，要转个5V或者3.3V，可以考虑它。COT架构动态响应好，提供DFN封装，有助提升散热效果。

**CH217**：USB限流配电开关。USB口对外供电时，怕后级短路拉死前级，就在VBUS路径上串一颗CH217。它能限流，还能控制通断，相当于一个带保护的电子开关。

有时候硬件设计的快乐，不在于用多贵的芯片、堆多复杂的电路，而在于**用一颗恰到好处的小芯片，把一个应用场景的痛点解决。**