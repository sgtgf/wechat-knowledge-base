# 4500字，讲述DC/DC电源PCB布局

原创 硬件笔记本 2024-07-24 07:46 四川

> 原文地址: [https://mp.weixin.qq.com/s/981zTduqodtqEKnLBn1cxg](https://mp.weixin.qq.com/s/981zTduqodtqEKnLBn1cxg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&wxfrom=13)

  

在给首版电源板测试时，最好的结果是它不仅可以工作，而且还“安静”，凉爽地运行。然而现实总是很少一次成功。

开关电源的一个常见问题是“不稳定”的开关波形。有时，波形抖动很明显，可以听到从磁性元件发出噪声。如果问题与印刷电路板（ PCB）布局有关，则很难确定原因。EMC也是很注重（ PCB）布局，这就是为什么在开关电源设计的早期正确布局 PCB至关重要的原因。其重要性不可夸大。

良好的布局设计可优化电源效率，减轻热应力，最重要的是，可将噪声以及走线与组件之间的相互作用降至最低。为实现这些目标，设计人员必须了解开关电源中的电流传导路径和信号流，这一点很重要。以下讨论提出了针对非隔离式开关电源的正确布局设计的设计注意事项。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**布局**

对于大型系统板上的嵌入式 DC /DC电源，电源输出应位于负载设备附近，以最大程度地减小互连阻抗和整个系统上的传导电压降 PCB走线可实现最佳的电压调节，负载瞬态响应和系统效率。 

此外，大型无源元件（例如电感器和电解电容器）不应阻止空气流向低剖面，表面贴装半导体元件（例如功率 MOSFET， PWM控制器等）。为防止开关噪声扰乱开关中的其他模拟信号系统，请尽可能避免在电源下方布线敏感信号走线。否则，需要在电源层和小信号层之间使用内部接地层进行屏蔽。 

需要指出的是，该电源位置和电路板空间规划应在系统的早期设计 /规划阶段进行。不幸的是，有时人们会首先关注大型系统板上其他更 “重要 ”或 “令人兴奋 ”的电路。如果电源管理 /电源是最后的考虑因素，并且将其降级到板上所剩的空间，那么这肯定无助于确保高效且可靠的电源设计。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**层的放置**

在多层 PCB板上，非常需要将 DC接地层或 DC输入或输出电压层放置在高电流功率组件层和敏感的小信号走线层之间。接地层和 /或直流电压层提供交流接地，以屏蔽小信号走线，使其免受嘈杂的电源走线和电源组件的影响。   

通常，多层 PCB的接地或直流电压平面不应分段。如果无法避免分割，则必须将这些平面中的迹线数量和长度最小化。走线的走线方向应与大电流流向相同，以最大程度地减小影响。 

图 1a和 1c提供了用于开关电源的 6层和 4层 PCB板的不希望有的层布置的示例。在这些示例中，小信号层夹在大电流电源层和接地层之间。这些配置增加了高电流 /电压电源层和小型模拟信号层之间的电容性噪声耦合。为了最大程度地降低噪声耦合，图 1b和 1d给出了 4层和 6层 PCB设计所需的层排列示例。   

   ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasiahOicI3SH5DstzruibyP7O0RmtSJZkibGic8VN2WuvtsmCNP6XfnPmW1tYwz4wYd9MVFDJDGS5H4nQ/640?wx_fmt=png&from=appmsg)

在这两个示例中，小信号层被接地层屏蔽。重要的是，始终在外部功率级层旁边放置一个接地层。最后，还希望外部高电流电源层使用厚铜，以最小化 PCB的传导损耗和热阻。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**功率级组件布局**

开关电源电路可以分为功率级电路和小信号控制电路。功率级电路包括传导大电流的组件。通常，应首先放置这些组件。随后将小信号控制电路放置在布局中的特定位置。

电感大电流走线应短而宽，以最小化 PCB电感，电阻和电压降。这对于具有高 di / dt脉动电流的走线尤其重要。  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasiahOicI3SH5DstzruibyP7OibNu4luzHzsg4FS6SexCJve6dUj2okoaFK9pnlPRFqMwaymy2ecB1rw/640?wx_fmt=png&from=appmsg) 

实线表示连续电流路径，虚线表示脉动（开关）电流路径。脉动电流路径包括连接到输入去耦陶瓷电容器 CHF，顶部控制 FETQT，底部同步 FETQB及其可选的并联肖特基二极管的走线。

图2 a显示了这些高 di / dt电流路径中的寄生 PCB电感。由于寄生电感，脉动电流路径不仅会辐射磁场，还会在 PCB走线和 MOSFET上产生高压振铃和尖峰。为了最大程度地减小 PCB电感，应将该脉动电流环路（热环路）布置为使其具有最小的周长，并由短而宽的走线组成。  

  ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasiahOicI3SH5DstzruibyP7OsMQWoibmkBchYrwhbXbdWxMExI2PJwCjxdlwBWZX5lj7Df7k3TibSzFA/640?wx_fmt=png&from=appmsg) ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasiahOicI3SH5DstzruibyP7OcbqzAtGCxAIRZ0wh7zCwo4PYTOU6KeicbsofR9vhcuEhacCcnNgSOFQ/640?wx_fmt=png&from=appmsg)

图2 .最小化同步降压转换器中的高 di / dt环路面积。（ a）高 di /dt环路（热环路）及其寄生 PCB电感器，（ b）布局示例。

高频去耦电容器 CHF应该是一个 0.1µF至 10µF的 X5R或 X7R介电陶瓷电容器，其 ESL和 ESR非常低。较高电容的电介质（例如 Y5V）可以在电压和温度范围内大幅降低电容。因此，对于 CHF，这些类型的电容器不是优选的。 

图2 b提供了降压转换器中的临界脉动电流环路（热环路）的布局示例。为了限制电阻压降和通孔数量，应将功率组件放置在电路板的同一侧，并在同一层布线。当需要将电源走线路由到另一层时，请在连续电流路径中选择一条走线。当使用通孔连接大电流回路中的 PCB层时，应使用多个通孔以最小化通孔阻抗。 

类似地，图3显示了升压转换器中的连续和脉动电流环路（热环路）。在这种情况下，应将高频陶瓷电容器 C HF放置在靠近 MOSFET QB和升压二极管 D 的输出侧。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasiahOicI3SH5DstzruibyP7OYenkqkslbE91K4Cib7Nb3jhp3grOvQOVZNe7N1Jv65vCB3tgIS7p70A/640?wx_fmt=png&from=appmsg)

图3. Boost转换器的连续和脉动电流路径

由开关 QB，整流二极管 D和高频输出电容器 CHF组成的环路必须最小化。图4显示了升压转换器中脉动电流环路的布局示例。 

   ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasiahOicI3SH5DstzruibyP7OFMVRvZaZpBjTTA8D5It7qb1o6VwHj9YlzGqyz30V2KuC0iautdRwTpQ/640?wx_fmt=png&from=appmsg)

图4.最小化Boost转换器中的高di / dt环路面积。 （a）高di / dt环路（热环路）及其寄生PCB电感器，（b）布局示例

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**隔离和最小化高 dv / dt 开关区域**

在图 2和 4中， SW节点电压以高 dv / dt速率在 VIN （或 VOUT）和地之间摆动。该节点富含高频噪声成分，并且是 EMI噪声的强大来源。为了使 SW节点与其他噪声敏感走线之间的耦合电容最小， SW铜面积应最小化。

但是，另一方面，为了传导高电感电流并为功率 MOSFET提供散热片， SW节点的 PCB面积不能太小。通常最好在此 SW节点下方放置一个接地铜区域，以提供额外的屏蔽。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**足够的铜面积来限制功率部件的热应力**

在没有用于表面安装功率 MOSFET和电感器的外部散热器的设计中，必须有足够的铜面积作为散热器。对于直流电压节点，例如输入 /输出电压和电源接地，希望使铜面积尽可能大。

多个通孔有助于进一步降低热应力。对于高 dv / dt SW节点， SW节点铜面积的适当大小是在最小化与 dv / dt相关的噪声与为 MOSFET提供良好散热性能之间的设计权衡。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**功率元件的正确焊盘图案以最小化阻抗**

重要的是要注意功率元件的焊盘（或焊盘）图案，例如低 ESR电容器， MOSFET，二极管和电感器。图 8a和 8b分别显示了不希望有的和所需的功率分量焊盘图案的示例。

  ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasiahOicI3SH5DstzruibyP7OA8seD5tBmmHYQhpBpUibiaNnKjB2qibeTurAmRRX6HLMhHM4ExOgyHJZQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasiahOicI3SH5DstzruibyP7OYyAV6pWyaGSFNAfOHGyt7yRlZRXTHa38R4CppiaqSjtDoT1YBwoltCA/640?wx_fmt=png&from=appmsg)

图5 .功率组件的期望和不需要的焊盘图案。（ a）不当对功率组件的焊盘使用散热垫，（ b）功率组件的推荐焊盘图案。

如图5 b所示，对于去耦电容器，正对通孔和负对通孔应尽可能彼此靠近，以最小化 PCB有效串联电感（ ESL）。这对于低 ESL的电容器特别有效。大价值的低 ESR电容器通常更昂贵。不合适的焊盘图案和不良的布线会降低其性能，从而增加总体成本。通常，所需的焊盘图案可降低 PCB噪声，降低热阻抗，并使高电流组件的走线阻抗和压降降至最低。 

大电流功率组件布局中的一个常见错误是对散热垫焊盘图案的不正确使用，如图5 a所示。不必要地使用散热垫图案会增加功率组件的互连阻抗。这会导致更高的功率损耗并降低低 ESR电容器的去耦效果。如果使用过孔来传导大电流，则必须使用足够数量的过孔来最小化过孔阻抗。同样，散热孔不应用于这些过孔。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**电源之间输入电流路径的分离**

图6显示了一个应用，其中几个车载开关电源共享同一输入电压轨。当这些电源彼此不同步时，有必要分开输入电流走线，以避免不同电源之间的常见阻抗噪声耦合。每个电源都具有本地输入去耦电容器的要求就不那么重要了。    

    ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasiahOicI3SH5DstzruibyP7OMFIB4MIsJq1QsPNUmgKOYg5JfsQDVjxTFy61TPkKic5XTAOk5CqGh3Q/640?wx_fmt=png&from=appmsg)

图6 .分开电源之间的输入电流路径

  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**控制电路布局控制电路的**

控制电路的位置应远离嘈杂的开关铜线区域。对于降压转换器，控制电路最好靠近 VOUT +侧，对于升压转换器，控制电路最好靠近 V IN +侧，其中电源走线承载连续电流。

如果空间允许，请将控制 IC放置在与噪声和高温的功率 MOSFET和电感器相距很小的距离（ 0.5-1英寸）处。但是，如果空间限制迫使控制器靠近功率 MOSFET和电感器放置，则必须格外小心，以将控制电路与具有接地层或走线的功率组件隔离开。

信号接地和电源接地的分离控制电路应与功率级接地之间有单独的信号（模拟）接地岛。如果控制器 IC上有单独的信号接地（ SGND）和电源接地（ PGND）引脚，则应分别布线。对于具有集成 MOSFET驱动器的控制器 IC， IC引脚的小信号部分应使用 SGND，如图7所示。   

   ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasiahOicI3SH5DstzruibyP7ONYvblpLMVD9DWXsXdI8PErypkpwmgugMeX9FlMPXyRszRW5oX8ItFQ/640?wx_fmt=png&from=appmsg)

图7 .控制器 IC的去耦电容与地分离

SGND和 PGND之间仅需要一个连接点。希望将 SGND恢复到 PGND平面的干净点。可以通过连接控制器 IC下方的两条接地走线来实现两个接地。图7显示了芯片电源的首选接地分隔。在此示例中， IC具有裸露的 GND焊盘。应将其焊接到 PCB上，以最大程度地减小电阻抗和热阻。应在此 GND焊盘区域上放置多个通孔。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**控制器 IC 的去耦电容**

控制器 IC的去耦电容器应物理上靠近其引脚。为了使连接阻抗最小，最好不使用过孔将去耦电容器直接连接到引脚。如图8所示，以下芯片引脚的去耦电容器应紧密放置：电流检测引脚， SENSE + / SENSE –，补偿引脚， ITH，信号接地引脚， SGND，反馈分压器引脚， FB， IC VCC 电压引脚 INTV CC和电源接地引脚 PGND。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**最小化环路面积和串扰**

分离出的噪声迹线和敏感迹线

可以电容耦合两个或更多相邻导体。一根导体上的高 dv / dt电压变化会通过寄生电容器将电流耦合到另一根导体。为了减少从功率级到控制电路的噪声耦合，有必要使噪声开关走线远离敏感的小信号走线。如果可能，请在不同层上布线嘈杂的走线和敏感走线，并使用内部接地层屏蔽噪声。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**电流检测迹线和电压检测迹线**

在所有小信号迹线中，电流检测迹线对噪声最敏感。电流感测信号幅度通常小于 100mV，与噪声幅度相当。其 SENSE + / SENSE - 迹线应该与最小间隔（开尔文检测）平行进行路由，以尽量减少拾取的 di / dt相关的噪声的机会，如图8。   ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasiahOicI3SH5DstzruibyP7OPpQCVkAJbUl4aYB6fxjVdiaLCIQCve3KWHYj3LQT9ovqiaImiarf7r4xw/640?wx_fmt=png&from=appmsg)

图8 .电流感测的开尔文感测（ a） RSENSE和（ b）电感器 DCR感测

此外，用于电流检测走线的滤波电阻和电容应尽可能靠近 IC引脚放置。如果将噪声注入到长检测线中，这将提供最有效的滤波。如果将电感器 DCR电流感测与 R / C网络一起使用，则 DCR感测电阻 R应靠近电感，而 DCR感测电容 C应靠近 IC。

如果在走线到 SENSE –的返回路径中使用过孔，则该过孔不应与另一个内部 VOUT +层接触。否则，该过孔可能会传导大的 VOUT + 电流，并且导致的电压降可能会使电流检测信号失真。避免在嘈杂的开关节点（ TG， BG， SW， BOOST迹线）附近布线电流检测迹线。如果可能，将接地层放置在电流感测走线和具有功率级走线的层之间。

如果控制器 IC具有差分电压遥感引脚，则也应使用开尔文（ Kelvin）感测连接对正负负极走线使用分开的走线。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**迹线宽度选择**

电流电平和噪声灵敏度是特定控制器引脚所独有的。因此，需要为不同的信号选择特定的走线宽度。通常，小型信号网可能较窄，并具有 10至 15 mil宽的走线。高电流网络（栅极驱动， VCC 和 PGND）的走线应短而宽。建议这些网的宽度至少为 20 mil。

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**输入上电浪涌尖峰电压**

DC-DC电路在上电接通，断开重负载时，常常瞬间产生一个很高的尖峰电压，降低尖峰幅度的方法是线路阻抗和电容的等效串联电阻（ESR）。

如：LDO电路中，功率比较低的应用，较高的输入上电时，一般在输入正极端串联2-10欧姆的电阻。

如：DC-DC电路中，一般输入电容采用有较高ESR等效串联电阻的电解电容， LDO电路也可以用电解电容的方案。              

              ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiasiahOicI3SH5DstzruibyP7OaibUEfdic6gcUiapf1MuUMibBM9ZgnjGPuqJTvFia7YulljlOCo6GoIAdpA/640?wx_fmt=png&from=appmsg)

  

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

**电路PCB设计要求重点**

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/FJtasAibLFa7T4U3vhaVVvmBD26edicGEH8XaT6JibVckx1ljXM4oJd8RdicHmttywsicJibRe21MzGsiaGr5lFdR2G5A/640?wx_fmt=gif&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

  

1，输入电容CIN就近放在芯片的输入Vin引脚盘和电容地端放置在功率的PGND， 增加过孔，减少阻抗，减少寄生电感的存在，因为输入电流不连续，寄生电感引起的噪声对芯片的耐压以及逻辑单元造成不良影响 。  

2，功率电路的回路尽可能的短粗，保持较小的环路面积，

3， SW/LX是噪声源，保证电流的同时保持尽量小的面积，远离敏感的易受干扰的位置，如FB输出反馈电路，

4， 输出电容COUT就近放在放置在电感旁， 增加过孔，减少阻抗 ，

5， FB反馈电阻连接到FB管脚尽可能短，靠近IC的FB管脚放置， 减少噪声的耦合，

6，散热设计，芯片底部尽量多打过孔，增加散热设计

7，外围器件电阻或电容的接地端，回路不能从电感底部（干扰大）走，可在电阻电容的接地端打过孔。如果是输入电容CIN或者输出电容COUT，需要多增加过孔。保证功率回路的干净稳定。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。