# 三相单级隔离AC-DC变换器拓扑及控制


> 原文地址: [https://mp.weixin.qq.com/s/vl-RU7jKE5K9d6O0\_dvnFw](https://mp.weixin.qq.com/s/vl-RU7jKE5K9d6O0_dvnFw)

作者：郭志强（北京理工大学）

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrniaPSzKVbl5pV2BqIm3ictP3lJPibict0ECl3fX0sOpIt6aA5OMNqj1KXg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrl1kqFdh7icFjCVnNPg0b6KvUktL1H38eaG1aShllTe2icSVt1O8nezjw/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrhSfHIn2dicibiaJo43PicfxjTPY6Oa0iaGoMxZcy34KUm50mxU3B2lubBlg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrIxmhJxV1r0ibmGnzMr0UkibDuoIreDHnJgYNdPyTmxw5ZK2DBIb4BvQA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrNXcXd7dRo4gvYMMk1AHiaEAEBHZ3vhRX15FleWWCrmdl5eicz8C4rWeQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrxJibKCgz6OrEFJVDKHUZicNtnicprsKfcVtZic5ib7xMwe76Ao0ouNzfRZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrDrwtxJj8QRibfib9r7lblBicKQ2gfTbA75iaKMeJwYnuCib0WkKKsCRkmhw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrATvmevKFheeBUHDzP9jRZuA9VR7zSTTQEdunEr4FcHAhR8V7qMDAYg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrmBL2icTIQa0a8xb1tmvFjjWGRia4HfbuwvVQurBOcI3HXABZvRIXSuGw/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGruonZ4PzGkJbFbCmJPsXCPKoQVNO7JVPyNq3EcWOSoTtaMhrexRk9KA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrs2EDrUzwjZyD5LjUFpJrGGz5OkzgU1hhkL3mQchxLC1JPFGuYcKNSA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrgH55A3k1nMaGdiaeHnrxlLwmXQtbkxialKKYrX2f6ibQ2rribrvBzuspOg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrfIxEdevfNY3vhUUtDw8gyrn9hUx2va9cAeFWQtVLnzbXWPeZ8TiasGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrf0KgycBfxkPxsJY92YDn3ZFu3mCFXpJdhjMb20P9EmZeblEA9bXl5Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGraKXBz2lhAogCcibz5EobI8SLcA0ibSr7mAh5NVI6D1m7lazdSbibnmTAw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGriaRKGDMBhnXfzs6EYpN0R87RdWcE4LVfmOLMYzFnvN8onbT8bicKw5eg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrP2RCTZbetKicibzkt7N0kIdTqYCS6icOicfg0EO4W3Ne14O8DhY4F5Lkkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrib7q9gthRl111OceZvT0n5SjuwWMiblnNtq4NP48Cicg6W4fX9oAfYytA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrA91Kb4pE2jicXTo4zt0BDn6pZCmnt1U6rDe0vlddbq38osZ5msyAMHw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr1Wmp0lHg7PbRY4ib3TXUBibhWICQ1x0xibrjSKl5RrgNP9KeY4MBLFDEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGricF7k97R8diaXSl4eXsfsNWzvU9LTP8NsgPa5pUDmbHwUrglOxRib2Qvg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrfZ2WRm0u6PwhKV1vYaP6HibdgjfNYaFWTXc2YIAovwXFw2AbBBROglA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrsQiagmDqgQ1w5orTRBEXZDgz1FYI7mAQJniaic0pVI7sfpicrEQPZkHhqQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrU0ibNAtmM9zwXmbWPZ1P5KIWMUI4l7UZliamURviaBLcsqlLQCF17wdgQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGroKkalPXc00aIHO1mVoeMLRlHOHPDgEJ5XrP3MgDubRF6B2dhTaJyXA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrIDFeZ4cwqPGwKWpQKv0eBibL4icpPcmBc5lK0ictIuckQMtp46mdqp6KA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrc4V2sSacClFzCbVqKKgeBxpoIEnakVfg6fw38arSUurS3xOfb7mxFA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr7TY25DTVolcwdhCghiaHqIpKrgrHpRnYbgF980JtScpZ3htR4ibjJRKQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrib49Z5HyvTe6y6FdwFWBQP2XEg5EbFL12A9gyWwjiaGLzgAZ4fTKbkiaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrolW85IGKkkd7QcgdXgV8yJKzYcgDFEjLzkvMOqgsbRAic5j9p5ygYZQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrB5qO37XeEC1MhIMXLmAdyP2pibgT0UnQ0p9BZNCKXILNm1zwtW2qicyg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrseBRTXBBbfkAibfG69ibG6icdY6q1ibSQaSSZGWx9MWibGANCGvYxS5P0UA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr0MgqpVBbpR5TDcypGvZQ4OkO3UdcsYib86iaLmRrm2ibxJuhSnX7eZPzA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrJqKvPDzQ8icpWcmSnicYfLPpZeDzYMFmWf5p4FPnHibZkfvdDB2a31FWg/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrzAtAHH1Ukp3jIjKlWqzjhOIbMgIxsTfz8AzwGDH0wSQxYN36ZiavibJQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr1d9xlvl3y7T05U6jfMWlic0wM8amLgxWNicEMaVOBXH8vvUbKibxFys6w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrQIfKgNKSHAUKBIrVR7Pgrx1OZK3DJmHLk7RfursJGkvjGm3XYxzXhw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr8fSIskec0gtp2lFOT9qXkSQicIA9QXPJlFDWWcS5oXZwz5Ife0eibd6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr7iagicccAaiaGeGyCtC19ic41yYTdHbILQlicLNKt0W2vNd9uDbownqYZ6A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr564PuQdeTLZPicZl8oIxIkzpkLgqIibIoSOA1vpUr4EnTpYFwsA00vsw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrON7V965ypLsxvp80TBAvfS6tBgyGssAu1SulicK0lC3m907IxhJ9ITQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrtGj8ouB9fvia9QpEEy9zF4VIvPLVVcZ0DvicBZib2iaFOIR3gCjibk7gZuw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGribC0AV8EqzF4875hGKWv7yMNVx6zHOvia9NCjoLz2J2TID3RGTu0tkFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrj5rSm8yUK4VIe4RbXDXF1J6Peu8u1icD25s7dAibOCL0kuIOVrxZYBicQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrFjLdMIbZMUb0zvg0HzkxAO23iaJZHCiaagicYbDpp23iaiaCmrH9zBR0xZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrMggALiaia87GkylLHRewOfxIue8ibj06FZ4hIBwZZRJ1oqniaQV5Nysjng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmBchFsMp2szgqoHR62ppGroeicmibP4CbS9nJCScOe8w4MqOx3Gysic8rQicIbxQXXu0ibL8a9MKO8mlg/640?wx_fmt=jpeg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrJ23qN3FsSDUiclCiayFWv3ZtF9uCMlJXIQH6I6eHbxsK3ia6jIgoIPYaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrKDh89Sqiciaqicn7ESsIWLWMsYEwc23GdibJZB38KAKSBEOHpUR0Uzc8JQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrBUPTqueldQcDzNg6ibj9ERJfgicZnkXdcYDntHlgFAuQk3Y6nPicowGzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr0MgQl4DYoKjxJXCZDYcTzw9hwFzWibckvRWGeUhrAE71FrIgQ3rJWCQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrveCkZdKpm90aOibhn2KeiaKGQF5POTFhSJoOuk1F4g7evvzWRunYpGdA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr96ESq8F8h9bTu4jnIwnFEXwumPjK4jten9yjWicmWG7b77eULCdnl4Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGroZC0ibLKwIWyJZ7qMWSzI6sBUQTjoicibJ9p9hmg6EK5W9zPeVy0Bf0YA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGreUVGicaZFW55G2fias6okshNvic6tCtKC1uiapicnc6kdjfuNr4UFeBjS0g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrqPDQVZzUAFcxlILtp4fMrzHXZWxoXYnVEYPtDF8hkWhW86iaiboUicCkg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrljvtu2TojicQpUHrqGHdRhPib2TAbDroib21MEGdutOZthRVYK6o1ky6A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrpiaQ4FnsTSQZxvus5GvZIT1vkZcFNZKtwlrNiaZhNDwLBYZY17LWOGpA/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

三相单级隔离AC-DC变换器直接在一个功率变换级中完成工频整流、功率因数校正、高频隔离和直流稳压输出，具有**高功率密度、高效率和高可靠性**的潜力，广泛应用于数据中心电源、电动汽车充电、可再生能源并网等中高功率场合。

下面我将从**拓扑结构**和**控制策略**两个方面进行详细阐述。

### 一、主要拓扑结构

单级隔离拓扑的核心思想是将输入整流、功率因数校正和隔离DC-DC变换的功能融合在一个高频开关网络中。以下是几种典型和具有前景的拓扑：

#### 1. **三相单相矩阵式隔离型变换器**

这是最直接的单级概念衍生。通过高频开关矩阵，直接将三相工频电压斩波并送入高频变压器。

-   **代表拓扑**：**三相单级隔离式PFC变换器**，如基于三相六开关桥臂的拓扑。
    
-   **工作原理**：六个开关管以高频工作，同时实现：
    

-   **整流与PFC**：通过电流控制（如滞环或PWM），使输入电流波形跟踪输入电压波形。
    
-   **隔离与变压**：将高频斩波后的电压直接加在高频变压器原边。
    
-   **输出整流**：变压器副边经整流滤波得到稳定直流。
    

-   **优点**：理论上元件数较少，结构紧凑。
    
-   **缺点**：**控制极其复杂**，需要同时处理多变量；开关应力高；变压器利用率可能不均；EMI问题严峻。因此在实际大功率应用中较少见。
    

#### 2. **三相谐振变换器**

利用谐振原理实现软开关，是当前研究的热点，能实现高效率。

-   **代表拓扑**：**三相LLC谐振变换器**。
    
-   **工作原理**：
    

-   **前级**：通常仍需要一个三相二极管不控整流桥或可控整流桥，形成一个**不稳定的直流母线**。但这仍被视为“单级”，因为后续的LLC是**唯一进行稳压和能量传输的主动开关级**。
    
-   **核心级**：由三个半桥或全桥（对应三相）与一个**三相集成磁件（磁性集成）** 的LLC谐振腔和变压器构成。开关管工作在变频模式。
    
-   **后级**：同步整流输出。
    

-   **优点**：原边开关管可实现**全范围零电压开通**，副边整流管可实现零电流关断，开关损耗极低，效率极高（常>98%）。电磁干扰小。
    
-   **缺点**：设计复杂，特别是三相磁性集成设计；变频控制动态响应相对较慢；轻载调节能力有限。
    

#### 3. **三相有源桥/双有源桥**

非常适合需要双向功率流动和宽电压范围的应用。

-   **代表拓扑**：**三相双有源桥**。
    
-   **工作原理**：
    

-   **输入侧**：三相全桥（或三电平桥）作为整流器，将交流电转换为高频方波。
    
-   **隔离**：高频方波直接作用于高频变压器。
    
-   **输出侧**：另一个三相全桥作为同步整流器，将变压器副边的高频交流整流为直流。
    
-   **核心控制**：通过调节原副边桥臂之间的**移相角**来控制功率大小和方向。
    

-   **优点**：**天生双向**；通过移相控制可实现软开关（ZVS），效率高；控制相对矩阵式简单；变压器工作于纯交流方波，利用率高。
    
-   **缺点**：需要较多的开关管（12个）；存在回流功率，在特定工况下会降低效率。
    

#### 4. **基于三电平/多电平的衍生拓扑**

为了适应更高的输入电压或降低开关应力。

-   **代表拓扑**：**T型三电平、ANPC型或级联H桥**与隔离型DCDC结合的拓扑。
    
-   **工作原理**：在输入侧采用三电平结构，后接隔离变换器（如DAB或LLC）。虽然看起来像“一级半”，但其控制是整体协调的，目标仍是单级功率处理。
    
-   **优点**：开关管电压应力减半，可用于690V等更高压三相系统；输出波形谐波更小，EMI更好。
    
-   **缺点**：拓扑结构和控制更为复杂。
    

### 二、核心控制策略

控制目标是：**实现单位功率因数、低谐波输入电流，以及稳定、快速响应的直流输出电压**。常用控制框架如下：

#### 1. **外环-内环双闭环控制（最主流）**

-   **外环（电压环）**：采样输出电压，与参考值比较，通过PI（或更先进的如滑模、模糊）控制器，生成用于控制输入电流幅值的指令信号。此指令决定了需要从电网汲取的有功功率大小。
    
-   **内环（电流环）**：实现输入电流的波形控制。
    

-   `Id`：代表有功电流分量，其指令来自外环电压环的输出。
    
-   `Iq`：代表无功电流分量，为**实现单位功率因数，其指令应设为0**。
    

-   **坐标变换是关键**：通过**Clarke变换（3相→2相静止）** 和 **Park变换（2相静止→2相旋转dq）**，将三相时变的交流电流 `ia, ib, ic` 转换为两个直流量 `Id` 和 `Iq`。
    
-   在`dq`旋转坐标系下，使用PI控制器分别对`Id`和`Iq`进行无静差跟踪。
    
-   将控制器的输出，再经过**反Park变换**，得到两相静止坐标系下的电压调制信号。
    
-   最后通过**空间矢量脉宽调制** 生成各开关管的驱动脉冲。
    

#### 2. **调制技术**

-   **SVPWM**：是三相变换器的首选调制方式。它比传统SPWM具有更高的直流母线电压利用率（高15%），谐波特性更优，数字实现方便。
    
-   **移相控制**：专门用于DAB类拓扑，通过调节原边和副边桥之间的相位差来直接控制传输功率。
    
-   **变频控制**：用于LLC等谐振变换器，通过改变开关频率来调节增益，实现稳压。
    

### 总结与趋势

**拓扑类型**

**典型代表**

**优点**

**缺点**

**适用场景**

**矩阵式**

单级隔离PFC

理论元件少，结构紧凑

控制极复杂，应力高，难实用化

研究前沿，实际应用少

**谐振式**

三相LLC

**效率极高**

，软开关，EMI好

设计复杂，动态慢，磁性集成难

追求极限效率的场合，如数据中心PSU

**有源桥/双有源桥**

三相DAB

**天生双向**

，控制灵活，软开关范围宽

开关数量多，存在回流功率

V2G、储能、微网等双向应用

**多电平衍生**

三电平+DAB/LLC

适用于高压输入，开关应力低，波形质量好

拓扑与控制更复杂

工业高压供电、风电变流器

**当前研究与发展趋势**：

**1.宽禁带器件应用**：SiC和GaN器件的高频、高效特性，使三相单级变换器能工作在更高频率，进一步减小无源元件体积。

**2.先进控制算法**：模型预测控制、滑模变结构控制等被引入，以改善动态响应和鲁棒性。

**3.磁性集成技术**：将多个电感、变压器磁芯集成在一个磁件中，是提高功率密度的关键。

**4.模块化与并联**：采用模块化设计，通过多个变换器并联或交错运行来扩容，并降低电流纹波。

**选择建议**：

-   若追求**极致效率**和**单向功率**，**三相LLC**是首选。
    
-   若需要**双向功率流**和**宽范围电压调节**，**三相DAB**是理想选择。
    
-   对于**高压输入**的工业场景，可考虑**三电平衍生拓扑**。
    
      
    

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskEEFxG77Go8L03Jzol7D0Lg0ic7Wmab19oibVpuaia1mQAiaNAgNUWYxUzl8pBcVApUBhPXE26ksVnCA/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0L8E5icdNByzq2nNuCVcPDiazdiaGQfA3ALoWMsqiasxlxpeQsdZzrueM3NA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0L1ARyzQpibNUVjIFsYtsrSvy5wNyvIGtmWAGVyrOwltbkbibAROaO1FyQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LgBPFSluc8rlZ1V92tCR1DaBHNXvAjVVQ3rQGiaFIfv8cuib5Leh0MxUg/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)