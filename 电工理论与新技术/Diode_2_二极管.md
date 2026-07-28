# Diode-2：二极管


> 原文地址: [https://mp.weixin.qq.com/s/Oj0AeIyzI5OB4Dpouu6l5Q](https://mp.weixin.qq.com/s/Oj0AeIyzI5OB4Dpouu6l5Q)

![](https://mmbiz.qpic.cn/mmbiz_png/JGbdHe4j0TT8iaUYiczGH1Oq76SXDuwNKic5QhlNZsZPk0jYia7fFa3iaAq6Tmo6gVC8RDRytEnz0gABc8gQiaAg3UrA/640?wx_fmt=png)

____**★★★**______Diode-2---二极管______**★★★**____

_撰稿：Timothy  校稿：Timothy_

引言：二极管是使用特别广泛的一类无源保护器件，各个二极管的物理原理虽然相似，但是功能特性却差别很大，使用场景也各不相同，本节简述各类二极管的基本特性。

_____€1.稳压二极管Zener_____

如**_图2-1_**所示，稳压二极管Zener利用了PN结的反向特性，当提高PN结二极管的反向电压时，大电流在一定的电压下开始流动，并得到恒定的电压。（这种现象称为击穿，其电压称为击穿电压）稳压二极管利用了这一特性。由于这种击穿电压也被称为齐纳电压，所以稳压二极管也被称为齐纳二极管，该电压可用作恒压电源或电子电路的参考电压。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSFBxOmEbw2wulmr4BiciaQXblHeicaJ82WBibQxyDEF2QQZBHgic8t8H3o9LwtgDMtJ3nQeWHicS767Hng/640?wx_fmt=png)

**_图2-1：TVS和Zener的I-V曲线_**  

对于齐纳二极管应用最重要的是反向偏置时的特性，其中齐纳二极管具有低于特定击穿电压的小泄漏电流，在击穿电压以上，I-V特性显示电流急剧增加。齐纳二极管可以在击穿电压VZ或高于击穿电压VZ时作为电压稳定器持续工作。一般情况下，举个例子，当电压小于或等于6V时，会观察到齐纳现象，如果电压超过6V，雪崩现象将超过齐纳现象成为主导。齐纳电压和雪崩电压具有不同的温度特性，前者的温度系数为负，后者的温度系数为正。

_____€2.TVS二极管和齐纳二极管之间的差异_____

TVS二极管（ESD保护二极管）在短时间内吸收很高的过电压，其作用是避免对其它半导体器件施加过大的电压。另一方面，如**_图2-2_**所示，齐纳二极管将输入电压钳位为恒定电压，并将钳制的电压提供给其它半导体器件。因此两者的差异在于，TVS二极管吸收浪涌电压以保护其它半导体器件，而齐纳二极管为其它半导体器件提供恒定电压，这两个二极管都具有箝位特定电压的功能，但它们用途不同。  

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSFBxOmEbw2wulmr4BiciaQXbkPoBQLb7zIQYzx0ic0F5uMibWvjNe6kMvN5icYnVYDAnibKWricbiaF9JialQ/640?wx_fmt=png)

**_图2-2：TVS和Zener的效能_**  

TVS二极管通常在反向阻断状态下使用，（几乎没有电流流动，只施加电压）只有当电压超过一定电压（钳位电压）并施加到TVS二极管时，才会发生击穿（钳位），齐纳二极管通常用于击穿状态，假设击穿（齐纳）电流总是在正常状态下流动。

_____€3.变容二极管_____

**_图2-3_**表示了变容二极管的特性，可变电容二极管是利用耗尽层电容特性的产品，当施加反向电压时，耗尽层出现在二极管的PN结中，其厚度与反向电压成正比。因此随着反向电压的增加，耗尽层厚度增加，但电容减小，其作用与增加电容器两个电极之间的距离相同。相反，如果反向电压减小，耗尽层厚度减小，但电容增加。变容二极管主要应用于调谐电路等。由于这种电容变化会改变频率特性，因此与普通二极管相比，需要较大的电容变化率。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSFBxOmEbw2wulmr4BiciaQXbcnBXial4BWLicugpibzDCc6hxjIqOtpepLk0dLYQRD7iatVWLtQ1oohpWQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSFBxOmEbw2wulmr4BiciaQXbkgnnWfhsTBNaTia4euOsfiaj77CiaeibjZaYnJ9jYnbbJlnbvVfuRnYbcw/640?wx_fmt=png)

**_图2-3：可变电容二极管耗尽层与电容的关系_**

可变电容二极管与一般二极管不同，其重要特性不是正向电压VF和开关特性，而是电容值及其变化（取决于电压）。

_____€4.肖特基势垒二极管（SBD）_____

肖特基二极管，全称肖特基势垒二极管，肖特基势垒二极管（SBD）是一种采用半导体和金属（比如：钼）结合，而不是采用PN结的器件。一般来说，金属与N型层结合的半导体已经实现了商业化，由于其正向电压小，反向恢复时间短，所以适合于高速开关应用。对于SBD而言，正向电压（VF）和反向漏电流之间存在折衷关系。根据所使用的金属，通常来说反向耐受电压约为20至150V，VF约为0.4至0.7V，低于PN结二极管的值，具有低正向电压和低泄漏电流的新型结构的SBD也已经实现商业化，**_图2-4_**示出了SBD的I-V曲线。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSFBxOmEbw2wulmr4BiciaQXb8ULOlbiaPywQSMEVyvAOpr3nXSOIjFEZsZiafib6Yj7DhQiaIzoyh71Wcg/640?wx_fmt=png)

**_图2-4：SBD的I-V曲线_**  

如**_图2-5_**所示，SBD的反向恢复时间（trr）由LC谐振电路根据结电容和外部接线的电感确定，（由于结电容几乎不受温度的影响，所以从室温到高温trr相同）对于PN结二极管而言，trr会随着温度的升高而变长，所以SBD的开关特性越来越具优越性，适合用于高频开关。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSFBxOmEbw2wulmr4BiciaQXbuBZBhAxTfgv1Akszia67oIzhe4FOHXuhG2jDA3OnuU0gvhNqkicplQmw/640?wx_fmt=png)

**_图2-5：反向电压施加于SBD时的等效电路和SBD结电容的特性_**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSFBxOmEbw2wulmr4BiciaQXbkNOOccfLdQSqqCKSibRADTgpibQZacyd11JwlkXB5xDZKJKdgUPXsxSw/640?wx_fmt=jpeg)

**_图2-6：SBD的典型反向特性_**

其中：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSFBxOmEbw2wulmr4BiciaQXbIbXicAD6Ua9VOzdPibXLJ7pdoNhqZficzey0BxagL2q9wwUiautxIL4xTg/640?wx_fmt=png)

反向电流特性是阻尼振荡，对于SBD而言，半导体由N型层组成，因此金属充当二极管的阳极。同样地，只有电子是载流子，SBD变成了类似MOSFET的单极元件。硅的能级不同于金属（能隙），该能级因金属元素而异。符号ΦB用于表示不同的能隙。Pt（铂）是一种具有大能隙的金属，V（钒）或Ti（钛）是具有小能隙的金属，采用ΦB大的金属，泄漏电流小，但是正向电压VF大，采用ΦB小的金属，则情况相反。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/JGbdHe4j0TSFBxOmEbw2wulmr4BiciaQXb5rxZN5HRgTkicEicaViaZ3K7WJyia2pZPs890DGceGZJAYHV86PHJNic4Hg/640?wx_fmt=jpeg)

**_图2-7：综合I-V曲线比较_**