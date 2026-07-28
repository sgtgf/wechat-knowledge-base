# IGBT 匹配驱动器的计算方法

原创 陈海宇 ，张全柱 SiC碳化硅MOS管及功率模块的应用 2026-07-10 06:10 广东

> 原文地址: [https://mp.weixin.qq.com/s/hAmFVxztB-U699Sn8juRpA](https://mp.weixin.qq.com/s/hAmFVxztB-U699Sn8juRpA)

文章来源：华北科技学院学报

作者：陈海宇，张全柱，李圆红，邓永红(华北科技学院，北京 东燕郊 065201)  

摘要:为了给IGBT匹配有效可靠的驱动器，从实际工程应用的角度出发，介绍了为IGBT匹配合适驱动器的计算方法。并且采用该计算方法为FF300Ｒ17ME4型号的IGBT匹配了CONCEPT公司的2SP0115T2A0－17驱动板。通过此具体实例验证了该计算方法的有效性，可以为IGBT匹配到合适的驱动器，在实际研发中为IGBT匹配合适的驱动器具有非常好的指导意义。  

关键词:IGBT;驱动功率;门极电荷;驱动电流;驱动器

0.引言  

IGBT(InsulatedGateBipolarTransistor)，绝缘栅双极型晶体管，是由BJT(双极型三极管) 和MOS(绝缘栅型场效应管) 组成的复合全控型电压驱动式功率半导体器件。IGBT综合了MOSFET(场效应晶体管)驱动功率小，开关速度快与GTR(电力晶体管)载流密度大，饱和压降低两种半导体器件的优点，具有输入阻抗高、开关频率高、热稳定性好、易触发和能承受高压强电流等特点。由于IGBT以上的诸多优点，其在矿用电力电子设备、交通运输、电机控制、电力工程、可再生能源和智能电网中得以广泛应用。  

而IGBT在上述领域中的发挥出优越的工作性能与其驱动器的关系密不可分。IGBT驱动器是电力电子功率电路与信号控制电路之间的接口，是电力电子装置的重要环节，其性能的好坏影响着IGBT的整体工作性能。IGBT匹配合适的驱动器会使IGBT工作在比较理想的状态，不仅可以缩短的开关时间，减小开关损耗，提高电路效率，而且可以提高的耐压和抗干扰能力。因此为IGBT匹配合适的驱动器对电力电子电路至关重要。  

图1是电力电子技术中常用的三相桥式逆变系统原理图，其主电路中IGBT可靠的驱动与驱动器的可靠匹配密切相关。本文从工程应用的角度出发，着眼于为例如图1中的电力变换主电路功率开关器件IGBT匹配合适的驱动器。介绍了在电力电子技术中为功率开关器件IGBT匹配合 适驱动器相关参数的计算方法，通过为Infineon公司FF300R17ME4型号的IGBT的驱动器进行匹配计算选型，结果证明该方法可以为IGBT选择到合适的驱动器。该方法对工程应用的研发人员来说，为IGBT匹配驱动器具有非常好的指导意义。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMZiaWFBjzib3DmD0GnP0rDEEJ6yKqd2n5BdOnkADaYWW8vAXCTtXmxnbHFJiaUfehSmzWoEwPDXYMqrZzuKTNDXCA3KpyRQoycXk/640?wx_fmt=png&from=appmsg)

1.确定IGBT门极电荷与门极电容  

对于驱动器来讲，门极电荷QG这个参数很重要。因为门极电荷QG是用来计算IGBT驱动功率的重要参数，为IGBT匹配合适功率的驱动器至关重要。确定门极电荷量有两种方法，一种为实测法，一种为经验法。下面对两种方法进行详细介绍。  

1.1实测法  

通过在数据手册网站下载的IGBT数据手册中，可极电荷量QG，但是在实际应用中要考虑实际的电压摆幅。门极驱动器的输出电压摆幅在输出功率范围内会有轻微的变化，这是因为驱动器高压隔离DC/DC电源的外特性有些软所致。可以在预期使用的功率范围内依据驱动器的数据手册得出电压摆幅，或者是在电路中进行实测。不同的电压摆幅对应的不同的门极电荷量。比如数据手册只给定了0～+15V电压摆幅情况下门极电荷QG的值，但是-15V～+15V电压摆幅下的门极电荷量QG并没有给出。在设计时选用-15V～+15V电压摆幅，门极电荷量QG需要按照下述方法确定，即可以采用实测法对门极电荷量进行计算。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPKctVRZ60yYbmgUn6h7EEKepib6l5L3Y0RwwvB21Aiblm6AWNVhxhic4plWIIvH96WTiazXtictS6ZIDxDeCjicLXaRMgfgwyNm6lIE/640?wx_fmt=png&from=appmsg)

图2显示的是一张典型的驱动器开通过程波形图，驱动器输出电流IOUT在开通过程中一直在对IGBT门极进行充电。图2中输出的电流IOUT与时间轴围成的面积就是总的充电电荷量。积分时间从驱动器开始输出电流到输出电流为零这段时间。门极电荷的计算公式为:

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPkDhS7nxA7njuQZgwunIhnibroNjuweXibCu3N8JXKeX2ibM6gAXRuCx7yegqASRtpo2aicL7v7t9oSeu4Iicg1Q9mb1HicHOHUDQUE/640?wx_fmt=png&from=appmsg)

(1) 式中:  

ton———驱动器开始输出电流的时刻;  

toff———驱动器输出电流降为零的时刻;  

QG———IGBT门极电荷量;  

IOUT———驱动器输出电流。  

用这种方法进行测量时，一定要注意是在输出电流是在没有发生振荡的情况下测量的，这样测量的门极电荷量QG才会准确。通过公式(1) 的计算得出实测门极电荷量QG。ΔV是IGBT开通电压与关断电压的差值，开发人员可以根据自己设计的IGBT开通电压与关断电压的差值得知。也可以在驱动器开通过程的波形图中测出ΔV。IGBT门极实际的输入电容:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOliaVKSA3iatMbNwM7SHnuRZNXcoGicP98lm5iafgibI7R81Lw1WGjTmxZtwanLntdWrlHmicTXSf8vHdsTYOruA6k27sGibVyTYxHa8/640?wx_fmt=png&from=appmsg)

(2)式中:  

CIN———门极实际的输入电容;  

QG———IGBT门极电荷量;  

ΔV———IGBT的开通电压与关断电压的差值。  

1.2经验法  

对于开发人员来讲，用实测法对门极电荷量QG以及输入电容CIN进行计算比较繁琐，输入电容还有一种从工程应用经验中得到的计算方法。其输入电容公式:

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOl0jW1yIx9b7D3OEe8V7x2IsJMqBeyTyWQ0uWUM7ibjCCWrCVIdZfxwbIcribZJlhV1icbYNA1mj8HrFxvSolKpG3DDwjtDk9mFw/640?wx_fmt=png&from=appmsg)

(3)式中:  

CIN———门极实际的输入电容;  

Cies———数据手册中给定的输入电容值。  

2.IGBT驱动功率的计算  

2.1无外接辅助阻容IGBT驱动功率的计算 

驱动器是用来驱动电力电子主回路IGBT开 关器件的通断的，其控制IGBT通断的本质是:对IGBT的门极进行充电使其电压达到导通电压从而使功率器件导通。对IGBT的门极进行放电到门极关断电压使开关器件关断。对IGBT门极的充放电没有损失能量，能量损失在所接的门极电阻与功率器件组成的外部电路上。在功率开关器件的导通与关断转换期间，在驱动器的门极电阻与功率器件组成回路中产生一定的损耗，这个损耗即为IGBT的驱动功率。要按照功率开关器件所需的驱动功率来设计驱动器。

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPyjVHicwm9iccHeQic3SSryar6m1oX3iaNgqpTx86PibclCSXZGJlCKd47PPGgruQUAn3YEDMt4sana3V7h79ZwWduiaLYqPyGhNQQU/640?wx_fmt=png&from=appmsg)

如图3所示在无外接辅助阻容情况下IGBT门极驱动示意图，在这种条件下，开关频率为f时，IGBT驱动功率PD的计算公式为:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO17vHSDGTE8MZmq3O5cM9LpOgH5LlJYwB1ssibBUTuicAich2srDeic6ODkMQkOFISAHh7M29O6MAhTkicoHzKhxxvFDt58JrnZeBY/640?wx_fmt=png&from=appmsg)

(4)式中:  

PD———IGBT驱动功率;  

QG———IGBT门极电荷量;  

f———IGBT开关频率;  

ΔV———IGBT的开通电压与关断电压的差值。  

式中QG为门极电荷量，可以在特定的电压摆幅条件下，从数据手册中直接查询，f为开关通断频率，ΔV是电压摆幅。ΔV\=Von-Voff式中ΔV电压摆幅值的计算为了充分的打开IGBT，让其在饱和区工作，以降低导通损耗，Von为IGBT开通电压，Voff为关断电压。比如:一般开通电压Von可以选取+15V。为了可靠关闭IGBT，防止误开通，关断电压Voff选取-15V。所以一般ΔV\=Von-Voff\=30V。  

2.2有外接阻容IGBT驱动功率的计算

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMu9FHYx71c87y0LpVxam80xPmI6llH4ibia7ZctjCxZd2icsW9EMY7NkE9BA3jZLTwxTBad6tjwu25C0DzsjUbtt48NDRTF8cejU/640?wx_fmt=png&from=appmsg)

如图4所示为有外接辅助阻容IGBT门极驱动示意图。当IGBT门极外接辅助阻容时，驱动器也要对其外接电容进行充放电，这样外接电阻才不影响驱动功率。在门极驱动电流不发生谐振的情况下，在频率开关条件为f的情况下，驱动功 率计算公式为:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPibicTVgtCDDvw1CnEDBcgENaA2wicksiaBV755IbyaM7OmnRNicnLd6I7MjsA5JR8dJpCgBE6lKJddYtbIBTbSiamlwYUPFHkBFSmU/640?wx_fmt=png&from=appmsg)

(5)式中:  

PD———IGBT驱动功率;  

QG———IGBT门极电荷量;  

f———IGBT开关频率;  

ΔV———IGBT的开通电压与关断电压的差值 (电压摆幅);  

CGE———外接电容。

通常情况下，在实际应用中，第一种也就是不外接阻容RGE、CGE的门极驱动方式应用较多，由于QG\=CINΔV，所以本公式可以写成

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPovd42oexukhib4hhibsZNJRE2e5gGW69SGMj9ib2xagx6XVV47cDXXrvq6MYjPNibdUibbCLrmq6TayNibyaAdxlQWicClqWC7oTwq0/640?wx_fmt=png&from=appmsg)

(6)式中:  

PD———IGBT驱动功率;  

QG———IGBT门极电荷量;  

f———IGBT开关频率;  

ΔV———IGBT的开通电压与关断电压的差值 (电压摆幅);  

CIN———门极实际的输入电容。  

3.IGBT驱动电流的计算  

IGBT驱动电流是为IGBT匹配合适驱动器要考虑的重要参数，其大小由门极输入电压与门极输入电阻决定，门极电阻值是由IGBT模块内置与外置电阻组成。内置门极电阻Ｒinternal可以从IGBT的数据手册中进行查询，外置门极电阻Ｒexternal为用户自己选择的外接电阻，其电阻值不低于数据手册推荐的RGon，一般取模块资料推荐值RGon的2倍。门极驱动电流IOUT，max必须足够大以便在最大电压摆幅及最小门极电阻条件下提供足够的驱动电流。其一阶最大值可以简写成:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPEIS5GXKVLVuhCakG082tibTHdMF3d9icjTDC9vjUpQ0wia5KS1czPuOFNSFicOWsty83DgQPu9BRzgMxFbROYkpZ6Nibft26lOADI/640?wx_fmt=png&from=appmsg)

为保证驱动器在电流存在振荡与不存在振荡情况下都能输出符合要求的驱动电流，驱动器的输出电流应不小于门极电流，其计算公式为:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMicEYH34Kdxm3Ml2bkQ9pKB3z7WvEMpQYicNnOiaWAsfZ2DzEtXibZObFdwT260DVQB3A4ftMxAL7tLZk0RBNWIS73vFDCYrynkks/640?wx_fmt=png&from=appmsg)

(8)式中:  

IGmax———IGBT驱动的最小门极电流值;

ΔV———IGBT的开通电压与关断电压的差值(电压摆幅);  

ＲGmin———电路中选择的最小驱动电阻。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOtDhzHsCbbycS6VqVia7WBsrLr8gVkrJQkyjHDn0hiaqg8GXfPxkSGeNtJTPgvLmicHiaSkZC3UxrEeocibb8CWJEDtOnCDVGvWJnU/640?wx_fmt=png&from=appmsg)

(9)式中:  

ＲGmin———电路中选择的最小驱动电阻;  

Ｒinternal———IGBT内置门极电阻;  

Ｒexternal———IGBT外接门极电阻。  

4.FF300Ｒ17ME4型号的IGBT驱动器的选型  

采用上述计算的方法，为FF300Ｒ17ME4型号的IGBT匹配驱动器进行相关参数的计算。工作频率f取10kHz，Von\=+15V，Voff\=-15V。通过查询IGBT数据手册得到ＲGon\=3.3Ω，则外接电阻Ｒexternal\=2·ＲGon\=2·3.3\=6.6Ω，门极电阻查表得Ｒinternal\=RGint\=2.5Ω，RGmin\=6.6+2.5\=9.1Ω。IGBT需要最小驱动电流:

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOrsh4LVljyK5cMsUUEtQXGQf3lH9yn3ibR85ZpmnRROcvWibiaPQ7EhPp8Kzsd58k6nw8Tcoqlwqic14eNEhxPA2TsnibyU9dAW4bQ/640?wx_fmt=png&from=appmsg)

通过查询IGBT的数据手册，电压摆幅在-15V到+15V也就是ΔV\=30V时对应的门极电荷量QG是3.05μC，每个通道所需驱动功率PD\=f·QG·ΔV\=10×10³×3.05×10-⁶×30\=0.915W。为此选择了CONCEPT公司的2SP0115T2A0－17驱动板。这个驱动板是双通道输出的驱动板，每个通 道输出功率为1W，可以满足本例IGBT需要的驱动功率;驱动板输出的驱动电流为15A大于3.3A可以满足驱动电流要求。通过本实例说明本方法可以为IGBT匹配合适的驱动器。  

5.结论  

本文主要介绍了为IGBT匹配合适驱动器相关参数的计算方法。并且采用这种计算方法为FF300Ｒ17ME4型号的IGBT选择了合适的驱动器。通过具体实例说明了这种方法可以为IGBT匹配到合适的驱动器，证明了这种方法的有效性。这种计算方法在工程应用中可以为IGBT快速有效地选择合适的驱动器，在工程应用中具有非常好的指导意义。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPIFibOIiaiaiajBNHPAl8iaEib7FFHRGvtLRVtQI3Wz9ay29QwmIc0ibBIdlSib7eXMiaFqT4Ea8IeA8ztyAxUgGrrFJRX6hopic8Xh42q4/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNp0wJ33jpDmwibNGTrGTia2Mricm7Nd6DAku8fI6TDkjvNATxNyJe9ibauYZmTnIhVE9Dqr1Hkja5nib9hg7u6Eku8bX5qUvFam9icg/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMXme6l4jfavz7auficicicgjU4WMNu2SIuOu423IgJskafiaHhiajDYdjNAicM5JyiaPvFWVtNSDgAFVVtKmHzUDk78XNEGWflW93TxQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMj3ZhvMx6bUGpZ8Yfsvpvg4uQl9IGBdeSQR2KeQFa845TMe5YCxdFDLUgibmicF41TlKxUDZsgcV48wKtiaKia9NiaEoU4d2e5uowM/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)