# MOS管选型问题，有那么纠结吗？

原创 电路一点通 2024-11-19 11:30 广东

> 原文地址: [https://mp.weixin.qq.com/s/I\_NQYsstJSFs2A-O832Dog](https://mp.weixin.qq.com/s/I_NQYsstJSFs2A-O832Dog)

MOS管选型需考虑沟道类型（NMOS或PMOS）、电压、电流、热要求、开关性能及封装，同时需结合电路设计、工作环境及成本，避免混淆NMOS和PMOS。“不知道MOS管要怎么选。”

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管选型问题_有那么纠结吗__images\img_000_1d0b6c46142f.png)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管选型问题_有那么纠结吗__images\img_001_afde13588bed.png)

    **👇👇👇更多技术资料👇👇👇**  ![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管选型问题_有那么纠结吗__images\img_002_a8b37a87b291.other)

“这个需要什么型号的MOS管。”

**然后就会发现一个很常见的问题，大家都会把NMOS和PMOS的使用情况给混淆了。**

在明确选择自己需要哪种产品前，首先要确定采用的是**NMOS还是PMOS**，其次就是确定电压、电流、热要求和开关性能，最后就是确认封装。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管选型问题_有那么纠结吗__images\img_003_63e988b34cdc.jpg)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管选型问题_有那么纠结吗__images\img_004_8ebcf4cce4fa.jpg)

今天小编给大家简单总结下在MOS管选型时需要注意的六个方面：

**一、确定沟道**

在低压侧开关中，要考虑到导通和关断器件所需的电压情况，采用**NMOS**会比较好；

在高压侧开关寒总，要考虑电压驱动的问题，就需要采用**PMOS**。

**二、确定电压**

确定器件所能承受的最大电压，也就是Vds，这和工作温度环境也有关系，最大电压会随着温度的变化而变化。此外，额定电压越大，器件成本也越高。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管选型问题_有那么纠结吗__images\img_005_872b95d7b699.jpg)

**三、确定电流**

MOS管的额定电流和电压一样，需要负载在所有情况下所能承受的最大电流。这里还必须计算导通损耗，也就是确定Rds（on），它会随着电流上升。

对MOS管施加的电压VGS越高，RDS(ON)就会越小；反之RDS(ON)就会越高。

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管选型问题_有那么纠结吗__images\img_006_536f98afa0ad.jpg)

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管选型问题_有那么纠结吗__images\img_007_2eb6157299b2.jpg)

**四、确定热要求**

计算系统的散热要求，器件的结温=最大环境温度+（热阻×功率耗散）

**五、确定开关性能**

计算开关过程中器件的总损耗（开通损耗和关闭损耗），推导出开关总功率。

**六、确定封装**

不同的封装尺寸MOS管具有不同的热阻和耗散功率，需要考虑系统的散热条件和环境温度，选取参数和封装更通用的功率MOS管**。**

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管选型问题_有那么纠结吗__images\img_008_dc9b39eaee8a.other)

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

    
-   [4种开关电源开关管(MOS管)驱动电路分析](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534374&idx=1&sn=929dc452a7f2f8955b75106d14a6cc0b&chksm=fcefa444cb982d52aec469979f921ab990a640414863a4766e6b5b58972b52afdb9edd80208c&scene=21#wechat_redirect)
    
-   [12V20A开关电源简单拆解看下内部做工](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534369&idx=1&sn=9a0185d0e3cb2972ef70dba234099368&chksm=fcefa443cb982d5567e0e6dd28278e04b6a5ec0283f15833265e066ad5d02f00ee166320e15a&scene=21#wechat_redirect)    
    
-   [峰值检测电路汇总](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534229&idx=2&sn=97b1b1051c11304be65c7ebf70b01515&chksm=fcefa5f7cb982ce106db5801d5348ffa5fc5d0b6b0dcd3cb2c476bbf7bd37b2d9ba88531603d&scene=21#wechat_redirect)    
    
-   [](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534229&idx=2&sn=97b1b1051c11304be65c7ebf70b01515&chksm=fcefa5f7cb982ce106db5801d5348ffa5fc5d0b6b0dcd3cb2c476bbf7bd37b2d9ba88531603d&scene=21#wechat_redirect)[光耦隔离继电器电路讲解](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534015&idx=2&sn=2cf0fed040b284e550536abc82f2ebe3&chksm=fcefa6ddcb982fcb03b336ac8cf5ac6010f460576e3a17f9b5f7c6da056711166fdd82ef19cd&scene=21#wechat_redirect)
    

  

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28分