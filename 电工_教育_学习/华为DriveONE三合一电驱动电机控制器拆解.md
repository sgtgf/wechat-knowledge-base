# 华为DriveONE三合一电驱动电机控制器拆解

原创 电机新视界 2024-12-04 12:00 上海

> 原文地址: [https://mp.weixin.qq.com/s/a5wGy9owcKM8cukIiPR\_Xg](https://mp.weixin.qq.com/s/a5wGy9owcKM8cukIiPR_Xg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0v60sr7wQibxMRQRCwtMXEWpj8JC0JQfLhhib40j4yCogTRUEqz0DPcRZiaIXEaCthfOtnN5p7n6SRow/640?wx_fmt=jpeg&from=appmsg)


来源：车规半导体硬件

DriveON电驱系统E是华为推出的三合一电驱系统，在极狐、阿维塔、问界以及与奇瑞合作的智界S7都有搭载。

最近B站博主@混合动力之路对阿维塔的DriveONE三合一电驱系统进行了拆解，重量为70kg左右，减速器采用定减速比，无档位，结构简单，峰值功率230Kw，额定电压630VDC。  
  
首先咱看看官方的宣传图。

![](https://mmbiz.qpic.cn/mmbiz_gif/CvyFYUrD5pcdo7jZ3M29jhicLCxMrSlicSf0CznoaefhRTIfalbGFjF5h82HDRRl0tOLrZcOWQLnWwnvArYx46yg/640?wx_fmt=gif&from=appmsg&wxfrom=13&tp=wxpic)

如图所示，为拆解后的主控板，主控板内包含了电源模块以及电机控制模块，具体拆解结果见下表。  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZrYhkdB01mHXhLTaa1SHCNztqavTwx1uD42RYuLspvZNxiaNR7iaxtHog/640?wx_fmt=other&from=appmsg&wxfrom=13&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZQMG7LFMPkxPDnjNuiaaPkSSafp0MhaLloficDMCNeXplKPOhQeYZiaQLg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZKbib7yQqvMgXDnDwHjka27iczgdZ7cmbZ4TjhMZrmnjnpPm3rn4dRXOA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

接下来，我们将依次展开分析：

  

华为主控板将主控模块和预驱动模块集成在一块板子上，集成度高，板面规整，并且使用了耐温较高的英飞凌或者ST芯片方案（环境使用温度高达150℃，非常规的125℃），使用了较多的变压器进行信号隔离，抗EMC设计较为充分，接插件部分被金属屏蔽，隔绝干扰，使得整体设计可靠、安全。

  

  

**主控MCU**

  

华为DriveONE中使用的是英飞凌的SAL-TC277TP-64F200N DC是一款强大的32位AURIX TriCore微控制器，独立完成复杂控制逻辑，适用于汽车和工业应用。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZzkHZo4ibq7Kf0Yc0BISJh3K1MaaOhuuFa6H0ianZcJJdYI2DplYyHePw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

它具有200MHz的频率，高达4MB的Flash存储器，以及LFBGA-292封装。该微控制器属于TC27xT系列，其创新的多核架构基于多达三个独立的32位TriCore CPU，旨在满足最高的安全标准，同时显著提高性能。它配备了具有200 MHz的三重TriCore、4MB的Flash存储器和强大的通用定时器模块（GTM），TC27xT系列旨在减少复杂性、最佳功耗和显著的成本节约，环境使用温度-40℃到150℃，ASILD车规级安全等级。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZvjjxmWVbRln9053jGnl0k2kU1BHn5Iwr7YqcBoDOTvicgSTeMWEb9IQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

在电机控制器主控板中，主控MCU（Microcontroller Unit，微控制器单元）芯片是核心的处理器，负责执行复杂的控制算法、处理传感器数据、生成控制信号，并管理整个系统的运行。

  

**主控MCU芯片通常具备以下特点：**

  

▶  **处理能力：**主控MCU芯片具有足够的处理能力来执行复杂的控制任务，包括实时控制和信号处理。

  

▶  **存储器：**内置或外接存储器，用于存储程序代码和数据，确保系统可以执行预设的算法和逻辑。

  

▶  **通信接口**：具备多种通信接口，如UART、SPI、I2C、CAN等，以实现与其他组件和外部设备的通信。

  

▶  **输入/输出（I/O）端口：**提供丰富的I/O端口，用于连接各种传感器、执行器和其他电子元件。

  

▶  **模拟和数字转换功能：**一些主控MCU芯片具备模拟到数字（ADC）和数字到模拟（DAC）转换功能，用于处理模拟信号。

  

▶  **定时器/计数器：**内置定时器/计数器，用于时间测量和定时控制。

  

▶  **安全特性：**某些主控MCU芯片具备安全特性，如加密功能，以保护系统免受未经授权的访问。

  

▶  **电源管理：**集成电源管理功能，以优化系统的电源使用和性能。

  

主控MCU芯片的选择取决于电机控制器的具体应用需求，包括控制的精度、响应速度、功率级别、环境条件等。在电机控制器的设计中，主控MCU芯片的选择对于确保系统的性能、效率和可靠性至关重要。

  

  

**电源管理芯片PMIC**

  

华为DriveONE中使用的是英飞凌的TLF35584QVVS1是一款多功能输出系统电源，特别适用于安全相关的应用。  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZwhKJfOHb3eluRAgdMKhrZVNULJ8FNrmMRIDzByToVaUsfoMiaj3Xic2g/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

  

它通过高效且灵活的前后调节器概念，输入电压3到4V，支持buck-boost（升降压转换）、收发器和传感器提供电源。这款产品具备宽泛的开关频率范围：500k到2.2MHz，允许在效率和使用小滤波组件方面进行优化，输出电压纹波小，可作为MCU ADC等外设的参考电压，。TLF35584QVVS1集成了功能安全特性，支持ASIL-D级别，适用于各种微控制器（μC）。

  

此外，该产品还具有多种安全特性，例如UV/OV监控、灵活的看门狗、错误监控、带有两个输出的安全状态控制器以及内置自测试功能，确保相关安全特性的正常工作。所有安全相关的配置都受到保护，只能通过特殊且成功的解锁/锁定序列进行更改。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZt8WuxpTuEOYn7cPZm2OSlmY0uUO3Vw4UcjKDJyA3QiaT4Gpu7MOhylg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

在电机控制器主控板中，PMIC（Power Management Integrated Circuit，电源管理集成电路）是一个关键组件，负责管理和调节电源供应。

  

**PMIC的主要作用包括：**

  

▶  **电压调节：**PMIC负责将电源（如电池）提供的电压转换为主控板上的各个组件所需的电压水平。例如，微控制器（MCU）和其他集成电路可能需要不同的工作电压。

  

▶  **电流保护**：PMIC通常包含过流保护功能，以防止电路因电流过大而损坏。

  

▶  **电源切换：**在某些设计中，PMIC能够根据系统需求在不同电源之间进行切换，如从电池切换到外部电源。

  

▶  **电源监控：**PMIC可以监控电源状态，如电压、电流和温度，确保电源在安全范围内工作。

  

▶  **节能管理：**PMIC可能包含节能模式，当系统处于低功耗状态时，可以减少电源消耗。

  

▶  **热管理：**一些PMIC还具备热管理功能，能够监测芯片温度，防止过热。

  

在电机控制器中，PMIC对于确保系统稳定、高效和安全的电源供应至关重要。它通过高效的管理和调节电源，帮助延长电池寿命，提高系统整体性能。

  

  

**预驱动IC**

  

华为DriveONE中使用的是NXP的MC33GD3100EK是一款用于电动汽车牵引逆变器的栅极驱动器，适用于IGBT和SiC功率器件。SPI接口用于监视和编程，低延时，集成信号隔离。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZuicwuPhS5QMzSHeHSvZyKe5vGVT9kP51dpfHVvCyfm7oh9RxAc2lQtw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

这款产品具有集成电隔离和低导通电阻驱动晶体管的特点，这提供了高充电和放电电流、低动态饱和电压和轨到轨栅极电压控制。电流和温度感应最小化了IGBT在故障期间的应力。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZQib02u0hfiau5Svw4wspZcNxQic9wya5r1wI4jLM1lwDqPKicc1k6I21JQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

MC33GD3100EK的设计旨在满足汽车应用的严格要求，完全符合AEC-Q100 1级标准。该器件还具备SPI接口，用于安全监控、可编程性和灵活性，以及低传播延迟和最小PWM失真等特点。它兼容200V至1700V IGBT/SiC，功率范围超过125kW，工作频率超过40kHz，提供5.0V和3.3V耐受MCU接口，工作温度范围为-40°C至125°C，封装类型为32引脚宽体SOIC。

  

在电机控制器主控板中，预驱动IC（Pre-driver Integrated Circuit）是一个重要的组件，它位于主控MCU（微控制器单元）和功率器件（如IGBTs或MOSFETs）之间。

  

**预驱动IC的主要作用包括：**

▶  **信号放大：**预驱动IC接收来自主控MCU的控制信号，并对这些信号进行放大，以确保它们能够有效地驱动功率器件。

  

▶  **驱动优化：**预驱动IC对驱动信号进行优化，以减少开关损耗，提高系统的效率和可靠性。

  

▶  **保护功能**：预驱动IC通常包含保护功能，如过流保护和短路保护，以保护功率器件免受过载和短路的损害。

  

▶  **接口匹配：**预驱动IC能够适配不同类型的功率器件和主控MCU，确保它们之间的兼容性和最佳性能。

  

▶  **时序控制：**在一些高级的预驱动IC中，还可能包括时序控制功能，用于精确控制功率器件的开关时序，进一步优化系统性能。

  

预驱动IC的选择和配置对于确保系统的性能、效率和可靠性至关重要。它不仅提高了功率器件的使用寿命，还增强了系统的整体安全性和稳定性。在电机控制器的设计中，预驱动IC与主控MCU、PMIC、接口IC和功率器件等其他组件协同工作，共同实现电机的精确控制和系统的稳定运行。

  

**输入接口IC**

  

  

华为DriveONE中使用的是ST的L9966C是一款专门设计的模拟-数字转换器（ADC）/数字-模拟转换器（DAC），属于特殊类型的集成电路，允许用户修改传感器等，而无需改动PCB。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZWASQicY3KsaSAGl1w5xtvQLtn1ghRuic93Qeqgm4icPQRxheh8jP7h7DQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

它具有10位分辨率，并且提供了多种输出类型，包括电压、电流和同步/解析输出,15个可编程接口，12路连接外部模拟负载，12bit电压测量，15bit精确电阻测量，可编磁阻传感器/hall传感器接口。此外，L9966C的工作温度范围相当广泛，可以从-40°C扩展到150°C。这些特性使得L9966C非常适合用于需要高精度模拟和数字信号转换的应用场合。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZibib9UDHh2uH3TozwvET7tgth5Og90Nk18qcFibvbYfQIB5Xbr31VkaMw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

在电机控制器主控板中，输入接口IC（Integrated Circuit）是负责处理和转换外部输入信号的电子组件。这些输入信号通常来自各种传感器，如温度传感器、速度传感器、位置传感器等，以及来自驾驶员操作的控制信号，如加速踏板位置和制动踏板状态。

  

**输入接口IC的主要功能包括：**

  

▶  **信号采集：**从传感器和其他输入源采集模拟或数字信号。

  

▶  **信号调理：**对采集到的信号进行调理，如放大、滤波、整形等，以满足主控MCU或其他处理单元的要求。

  

**▶  信号转换：**将调理后的信号转换为主控MCU能够理解和处理的格式。

  

▶  **数据处理：**对信号进行初步处理，如计算速度、位置等关键参数，为后续的算法处理提供基础数据。

  

▶  **通信：**将处理后的信号传输给主控MCU或其他处理单元，以进行进一步的决策和控制。

  

输入接口IC的选择和设计对于确保系统能够准确、实时地采集和处理外部输入信号至关重要。它直接影响到电机控制器的性能和响应速度。在设计电机控制器时，输入接口IC的选择和布局对于确保系统的准确性和可靠性至关重要。

  

  

**变压器**

  

  

华为DriveONE中使用的是Pulse Electronics的PM3045NL是一款专为IGBT设备切换设计的汽车级正向门极驱动变压器。这款变压器是一个2W正向变压器，提供+15V用于设备开关开启和-7.5V用于强大的开关关闭。封装结构提供3750KV ac耐受电压，在紧凑的（15.8×12.5×10.2mm）SMD平台上。该平台满足10mm最小爬电距离并符合IEC62368-1的加强绝缘要求。使用三绝缘线以满足汽车应用中的高可靠性要求。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZniaIpib5JYJJNlwvBuJlQibeF9VuYXbU6zFt9QsdfKOiaYFZYdhuTCBhNg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

一个典型的应用是在电动汽车的三相逆变器驱动系统中，典型输入电压为15V，100KHz开关频率。线圈（6-8）提供+15V输出，全桥整流器用于IGBT开关开启，线圈（5-7）提供-7.5V，半桥整流器用于开关关闭。

  

在电机控制器主控板中，变压器是一个关键的组件，用于改变电压水平，通常用于隔离高压和低压电路，以提高系统的安全性和抗干扰能力。

  

**变压器的主要功能包括：**

▶  **电压变换：**变压器可以将输入电压转换为所需的输出电压，以适应不同组件的工作电压要求。

  

▶  **隔离：**变压器提供电气隔离，减少高压电路对低压电路的干扰，同时保护低压电路免受高压电路的影响。

  

▶  **抗干扰：**变压器的隔离特性有助于提高系统的抗干扰能力，减少外部电磁干扰对电路的影响。

  

▶  **电源供应：**变压器为电机控制器主控板上的其他组件提供电源，确保它们在适当的电压和电流下工作。

  

**▶  电源保护：**变压器有助于防止电源的过压和欠压，保护整个系统免受电源异常的影响。

  

变压器在电机控制器中的作用至关重要，因为它确保了系统的电源供应稳定可靠，这对于系统的性能和寿命至关重要。在设计电机控制器时，变压器的选择和布局对于确保系统的安全性和稳定性至关重要。

  

  

**高速开关二极管**

  

  

BAV99在电路设计中常用于保护电路免受静电干扰和过电压的影响，特别是在汽车电子和高速通信系统中。它的设计和功能使其成为一种可靠且有效的ESD保护和电压限制元件。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZFjuJ5LXFsehZxI3jZqCRSDMJrsevTn1ibPZmmBXcWlj0rXdvTofcDlg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

在电机控制器主控板中，高速开关二极管是一种电子元件，主要用于保护电路免受反向电压的影响，以及在开关电源电路中帮助防止过电压。

  

**高速开关二极管的主要特点和功能包括：**

  

▶  **反向电压保护：**当电路中的电压反向时，高速开关二极管能够迅速阻断反向电流，从而保护电路中的其他元件不受损害。

  

▶  **过电压保护：**在开关电源电路中，高速开关二极管可以迅速响应过电压情况，避免电路中的元件受到损坏。

  

▶  **开关速度：**由于其高速特性，高速开关二极管能够快速切换，响应时间短，适用于高频电路。

  

▶  低导通电阻：高速开关二极管具有较低的导通电阻，有助于减少开关损耗，提高系统的效率。

  

▶  **耐压能力：**一些高速开关二极管具有较高的耐压能力，能够承受较大的电压波动。

  

在电机控制器的设计中，高速开关二极管的选择和布局对于确保系统的稳定性和可靠性至关重要。它们通常与主控MCU、预驱动IC、PMIC、变压器等其他组件协同工作，共同实现电机的精确控制和系统的稳定运行。

  

  

**外部存储芯片**

  

  

华为DriveONE中使用的是NXP的TJA1145TFD是一款高速CAN收发器，它为控制器局域网（CAN）协议控制器和物理双线式CAN总线之间提供接口。这款收发器专为汽车行业的高速CAN应用设计，为带有CAN协议控制器的微控制器提供发送和接收差分信号的功能。TJA1145TFD在待机模式和睡眠模式下具有超低的功耗，并支持符合ISO 11898-2:2016标准的CAN局部联网，通过选择性唤醒功能实现。

  

TJA1145TFD产品具有CAN FD帧检测功能，因此不会存在假唤醒的情况。它还实现了当前ISO11898标准（ISO11898-2：2003，ISO11898-5：2007和ISO11898-6：2013）以及ISO 11898-2：2016即将发布的更新版本中定义的CAN物理层。在CAN FD快速相位下，即使数据速率高达2 Mbit/s，此实施也能实现可靠的通信。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZ9z8znIWgHnjlRSQFddq54VKnh8e7lRhw7h20qcoXE2nIVqBXHajeHw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

此外，TJA1145TFD提供了SPI接口用于执行收发器控制和检索状态信息。电源断开时，总线连接变成为真正的浮空连接。该产品适用于12 V和24 V系统，提供SO14和无引脚HVSON14封装，并获得了AEC-Q100认证，是深绿产品（无卤，符合危害性物质限制(RoHS)指令）。

  

TJA1145TFD的高级ECU电源管理系统包括极低电流待机和睡眠模式，具有完全唤醒功能，可通过抑制输出让整个节点掉电，并支持本地和远程唤醒功能。I/O电平会自动调整到控制器的I/O电平，使得TJA1145可以直接连接到3.3 V至5 V的微控制器。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZgvw5iapFnzib5DbzjCYprZUgpCUdfR2mW5hWLrL0wr7nIQ6vybmTesQw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

TJA1145TFD还具有保护功能，如16、24或32位SPI用于配置、控制和诊断，过温警告和关机，VCC、VIO和BAT针脚的欠压检测与恢复，以及冷启动诊断等。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZrBt6IAlVDDxJPVrnbdenArvnxZChHPNcbYnwxicqFjLiawGPeIVrZMRg/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

综上所述，TJA1145TFD是一款高性能、低功耗的CAN收发器，适用于汽车行业中的高速CAN应用，能够提供可靠的通信和有效的电源管理。

  

在电机控制器主控板中，外部存储芯片是一个重要的组件，用于扩展主控MCU（微控制器单元）的存储能力。外部存储芯片通常包括Flash存储器、EEPROM（电可擦可编程只读存储器）或其他类型的非易失性存储器。

  

**它们的主要功能包括：**

▶  **存储程序代码和数据：**外部存储芯片用于存储程序代码、数据和配置设置，这些信息可能不适合或不适合存储在主控MCU的内部存储器中。

  

▶  **数据备份：**外部存储芯片可以用于存储关键数据，如故障记录、配置设置和用户数据，以便在主控MCU发生故障或需要重新编程时使用。

  

▶  **扩展存储容量：**外部存储芯片提供额外的存储空间，使主控MCU能够处理更多的数据和程序代码，从而提高系统的性能和功能。

  

▶  **提高系统性能：**通过将数据和程序代码存储在外部存储芯片中，主控MCU可以更快地访问这些信息，从而提高系统的响应速度和性能。

  

▶  **断电保护：**外部存储芯片是非易失性存储器，即使系统断电，存储的数据也不会丢失。

  

在电机控制器的设计中，外部存储芯片的选择和配置对于确保系统的可靠性和性能至关重要。它们与主控MCU和其他组件协同工作，共同实现电机的精确控制和系统的稳定运行。

  

  

**静电保护芯片**

  

华为DriveONE中使用的是NXP的PESD2CAN是一款小型SOT23表面贴装器件（SMD）塑料封装产品，旨在保护两条汽车控制器区域网络（CAN）总线免受静电放电（ESD）和其他瞬变造成的损害。  

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZbL2l8GSyLEzic6m1SpOYdTvlfyozUqQSRoyAX5FZXXicq6Buyia8oZEtQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

在电机控制器主控板中，静电保护芯片是一种电子元件，用于保护电路免受静电放电（ESD）的影响。静电放电是电子设备中常见的损害源，尤其是在环境湿度低或接触不良的情况下。

  

**静电保护芯片的主要功能和特点包括：**

  

▶  **ESD保护：**静电保护芯片能够在静电放电发生时迅速吸收或分流静电能量，从而保护电路中的其他敏感元件不受损害。

  

▶  **电压阈值：**静电保护芯片通常具有一个特定的电压阈值，当电压超过这个阈值时，芯片会迅速启动保护功能。

  

▶  **响应速度：**静电保护芯片的响应速度非常快，能够在纳秒级的时间内启动保护功能。

  

▶  **保护范围：**静电保护芯片可以提供多种保护等级，以适应不同的应用需求。

  

▶  **无源器件：**大多数静电保护芯片是无源器件，不需要外部电源即可工作。

  

在电机控制器的设计中，静电保护芯片的选择和布局对于确保系统的稳定性和可靠性至关重要。它们通常与主控MCU、预驱动IC、PMIC、变压器等其他组件协同工作，共同实现电机的精确控制和系统的稳定运行。

  

  

**比较器**

  

  

华为DriveONE中使用的是ST的LM2903是一款低功耗双电压比较器，它包括两个独立的低功耗电压比较器，专门设计用于在宽电压范围内由单电源供电运行。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZXllzyVQVpmcWicE0cRbk6PURCUx3W2a9vN4nu3pDXV9pyR1BlxaOVYA/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

该器件还有独特的特性，即虽然通过单电源电压工作，但输入共模电压范围包括负电源轨。其参数值包括输入失调电压为7mV，输入偏置电流为250nA，工作电压为1V至18V或2V至36V。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZPpiabfRIEWKaTCB6UgBTK2A2d2M81dB0g3TbKibL5BJoEXRdu7cLS3Rw/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

在电机控制器主控板中，比较器是一个关键的电子元件，用于比较两个电压或电流的级别，并输出比较结果。

  

**比较器的主要功能和特点包括：**

  

▶  **电压或电流比较：**比较器能够比较两个输入端的电压或电流，并输出逻辑电平信号，指示输入信号之间的大小关系。

  

▶  阈值设置：通过调整比较器的参考电压，可以设置比较器的阈值，使其能够检测到特定范围内的电压或电流变化。

  

▶  **信号处理：**比较器常用于信号处理电路中，如波形整形、阈值检测、限幅等。

  

▶  **控制信号生成：**比较器的输出信号可以用于生成控制信号，触发其他电路或执行特定操作。

  

▶  抗干扰能力：比较器通常具有较高的抗干扰能力，能够在噪声环境中准确地比较信号。

  

在电机控制器的设计中，比较器的选择和布局对于确保系统的准确性和可靠性至关重要。它们通常与主控MCU、预驱动IC、PMIC、变压器等其他组件协同工作，共同实现电机的精确控制和系统的稳定运行。

  

  

**运放**

  

华为DriveONE中使用的是ROHM的BA3472YF-C是一款高速接地感测运算放大器，属于BA3472Y系列。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZoGDaVciaRMsicjUaYFHbMoW7EYhA9H2LsjqSOrYibg1dwDl0w3fEQiaVRQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

**这款运算放大器的主要特点包括：**

▶  **高速特性：**具有10V/µs的转换速率和4MHz的增益带宽积。

  

▶  **高增益：**提供高增益性能。

  

▶  **低功耗：**设计上注重低功耗。

  

▶  **宽工作电压范围：**能够在+3V至+36V（单电源）或±1.5V至±18V（双电源）的电压范围内工作。

  

▶  **内置相位补偿电容：**在单芯片上集成了2个或4个独立的运算放大器和相位补偿电容。

  

▶  **功能安全：**适用于汽车使用，支持功能安全分析。

  

▶  **静电保护：**内置静电保护电路，人体模式(HBM)可达±5000V。

  

▶  **温度范围：**能够在-40°C至+125°C的温度范围内工作。

  

▶  **封装尺寸：**采用5x6.2mm（t=1.71mm）的封装。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZv2QBFyp34kXovN521K3VyjljjzCLsKziay7toEibBYOdv03Ttm7q3vqQ/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

BA3472YF-C适用于需要高速性能、高增益和宽工作电压范围的多种应用，特别是在汽车电子领域。

  

在电机控制器主控板中，运放（运算放大器）是一种非常重要的电子元件，用于放大电信号、执行模拟信号处理、滤波和其他信号调节功能。

  

**运放的主要功能和特点包括：**

  

▶  **信号放大：**运放能够放大输入信号，提供高增益的放大。

  

▶  **信号处理：**运放可以执行各种信号处理任务，如滤波、振荡、积分和微分等。

  

▶  **反馈网络：**运放通常与反馈网络一起使用，以实现特定的增益和频率响应。

  

▶  **精度：**现代运放具有高精度，能够提供稳定的增益和相位响应。

  

▶  **抗干扰能力：**运放通常具有较高的抗干扰能力，能够在噪声环境中准确地处理信号。

  

▶  **温度稳定性：**运放的设计考虑了温度变化，以确保在不同温度下都能提供稳定的性能。

  

在电机控制器的设计中，运放的选择和布局对于确保系统的准确性和可靠性至关重要。它们通常与主控MCU、预驱动IC、PMIC、变压器等其他组件协同工作，共同实现电机的精确控制和系统的稳定运行。

  

  

**IGBT模块**

  

  

华为DriveONE中使用的是安森美的NVG450A120L5DSC是VE-Trac Dual功率模块系列的最新成员，专门针对混合动力（HEV）和电动汽车（EV）牵引逆变器的800V母线电压应用设计。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZQSC9ATOW6Hicab9QPHf9vwuLR2z6xia5uzPlcCApoAlq7LAJ0NRBsy2w/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)![](https://mmbiz.qpic.cn/mmbiz_png/SwFULVVNhkaH5kHVrXPtzpJicrrL4b7cTCDL2jBnYWa65HgynTlSDawtuUcy0svTuZJPOTqbqJ9LiaWWCc4cAicFA/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

  

这款模块包含两个最新的1200V Ultra Field Stop (UFS) IGBT，采用半桥配置。UFS IGBT芯片组利用成熟的Trench Ultra Field Stop IGBT技术，在提供高电流密度的同时提供强大的短路保护和更高的阻断电压。此外，UFS IGBT和共封装的软二极管能够在低功耗运行的同时实现软开关，有助于提高HEV/EV主驱应用的系统整体效率。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/DpeVq9ia7FtibTaY4c3fGIyyCam3LPWZAZrsQKG5lp5eX5sU0ibyick85zaCIgRcCNtPiauiaH0NYWJwicRKRQKZB9T2A/640?wx_fmt=other&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp)

  

**该模块的主要特点包括：**

▶  双侧散热；

  

▶  集成芯片级温度和电流传感器；

  

▶  Tvj max = 175°C；

▶  车规级；

  

▶  低导通和开关损耗。

  

该产品适用于混合动力和电动汽车牵引逆变器以及高功率DC-DC转换器。它的设计考虑了高效率和紧凑的封装外形，使其非常适合于电动汽车和其他高性能应用在电机控制器中，绝缘栅双极晶体管（IGBT）模块扮演着核心角色，其主要作用包括：

  

▶  **开关功能：**IGBT模块的主要功能是控制电机绕组的电流，实现电机的启动、停止、加速和减速。通过快速开关，IGBT模块可以精确控制电机中的电流和电压，从而实现对电机速度和位置的精确控制。

  

▶  **能量转换：**在电机控制器中，IGBT模块负责将直流电（DC）转换为交流电（AC），以驱动交流电机，或将交流电转换为直流电，用于电池充电等应用。

  

▶  **效率优化：**IGBT模块的高效率特性有助于降低能量损耗，提高电机系统的整体效率。这尤其重要在电动汽车（EV）和混合动力汽车（HEV）中，因为这些车辆的电池容量和续航能力直接受益于高效率的能量转换。

  

▶  **保护功能：**IGBT模块通常包含或与外部电路集成，提供过电流保护、过热保护等保护机制，以防止电机和控制器因异常条件而损坏。

  

▶  **适应不同应用：**IGBT模块的设计使其能够适应不同类型的电机和不同的工作条件，包括高电流和高电压应用。

  

▶  **热管理：**由于IGBT模块在开关过程中会产生热量，因此它们通常需要有效的散热解决方案，如散热片或液冷系统，以保持工作温度在安全范围内。

  

▶  **系统集成：**IGBT模块与电机控制器的其他部分（如微控制器、传感器、驱动电路等）紧密集成，共同实现复杂的控制策略，如矢量控制或直接转矩控制。

  

总之，IGBT模块在电机控制器中的作用是至关重要的，它不仅确保了电机的高效和精确控制，还提高了整个系统的可靠性和性能。

  

  

**知识回顾**

**电机政策：**

[电机市场的IE5时代，真的要来了吗？  
](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247550130&idx=1&sn=42a14a5382b68a0bbd4ba48093155097&chksm=cede4576f9a9cc600786ab2908e4c3ef2cf3dbbfdb71a9265508f92e2dbda25384b66424bfde&scene=21#wechat_redirect)

  

# [高压电机 能效标准GB 30254-2024已发布 9月1日正式实施](https://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247574347&idx=1&sn=324e60a45f9ce388894db215c8ad9534&scene=21#wechat_redirect)

  

**精选文章：**

[清华大学的电机系毕业生都去哪儿了？](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247548328&idx=1&sn=8bbb58f38491f58600b87c85f9a2a864&chksm=cede7c6cf9a9f57ac80d409cbc6b9ced57c5d4df799227673198488eb6ac427f40098e09d145&scene=21#wechat_redirect)

  

# [华为都“活不下去了”！电机中小企业未来三年要怎么过](http://mp.weixin.qq.com/s?__biz=Mzg3MzY5OTQ5OQ==&mid=2247575025&idx=1&sn=800a15fe2572766ef1632371ee7475f2&chksm=cedfe435f9a86d23f050893e070245640fbc59fce832cb6264e6ecf8b6c43c0fe9a0c6565a38&scene=21#wechat_redirect)？


![](https://mmbiz.qpic.cn/mmbiz_jpg/vibkgHlPVq0sib5wZiatdKpxSTgRDG9vM6BrpiceLL0kK81U42flFXKkzfxialicRjg5Sh9vNvA86y00A5wSGFiaNWnnQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0s2cdPOwTWgsSfzkhVTn3PSF8TM2U217jHJaFWgRbGL5MrtpRXfTP9CtYJAR2n35XkklSk9EFIP4Q/640?wx_fmt=png&from=appmsg)

  


![](https://mmbiz.qpic.cn/mmbiz_png/vibkgHlPVq0tMzMevYpPAySDyFiaafVt6hlnBk2MabwiahKl2h63picic7sVYg0g3DojZDAtHn0rMCIUhye6HKw5rdQ/640?wx_fmt=png&from=appmsg)