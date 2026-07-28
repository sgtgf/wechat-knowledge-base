# RF devices-5：滤波器的温度系数与Q因数


> 原文地址: [https://mp.weixin.qq.com/s/SfoYt-1BMiDgcXKIjl6a8Q](https://mp.weixin.qq.com/s/SfoYt-1BMiDgcXKIjl6a8Q)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TRvCGtpAHL6cicWQCllqUJD89FZ4Qh1scHsthianqbOTVVm84oSmIUvBMe4NLNdRFic9GYAZkcLF4G7g/640?wx_fmt=png&from=appmsg)

____**★★★**______FILTER-5---系数______**★★★**____

引言：可使用频谱的增加会推动无线设备逐步改进，但增加这些额外的频谱有时候会影响到某些区域，导致其中的频段相互重叠，此外，由于RF路径增加，会导致系统发热量随之增加，而发热反过来又会影响滤波器的性能。  

___€1.温度系数___

为了确保妥善隔离这些信号路径，会使用温度系数较低的RF滤波器，但并不是任何一种滤波器都适用于这些频段紧密相连的应用。如**_图5-1_**所示，手机和Wi-Fi频段有时候紧挨着彼此，只相差几个MHz，那么就需要使用BAW等RF滤波器技术来确保这些频段彼此共存。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSSf5UQ5G9jibzGwUsukeFp2icHmaBLAvsDbWmadfP09b473oNlBgZI3hw6Uiak8bOBumU4XVEcUuuDQ/640?wx_fmt=png&from=appmsg)

**_图5-1：紧密连接的Wi-Fi和手机频段的示例_**

在SAW和BAW技术中，采用最优的温度系数至关重要，它可以决定一个应用是容易遭到RF干扰，还是具有出色的信号质量。在BAW和SAW技术中，滤波器响应会基于温度变化，如**_图5-2_**所示：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TSSf5UQ5G9jibzGwUsukeFp2LfpIXVb2lLtCtJKmGd00B1p30v2TGISQWicseF2YyLuPebNyuBDAyuw/640?wx_fmt=png&from=appmsg)

**_图5-2：RF滤波器的温度漂移_**

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ8blfDJicuGPz5fP6YPa0ZekYcF2RK8vSnRE3pS8um4ysgGuskKLibnewsN0629Y5oRsecicaS1BHjw/640?wx_fmt=png&from=appmsg)

**_表5-1：RF滤波器的一般温漂系数_**

如**_图5-2_**所示，滤波器响应随着使用场景温度而改变，滤波器带宽在变冷时向右漂移，在变热时向左漂移。滤波器的温度漂移是由工艺的百万分之一摄氏度 (ppm/° C)特性和滤波器在应用中经历的温度漂移决定的。应用的频率和环境条件通常是固定的，因此，要将滤波器的温度漂移降到最低，唯一方法是通过工艺技术，使用温度补偿 (TC) 滤波器工艺技术会影响滤波器的整体响应。

TC-SAW、多层SAW和BAW技术工艺大大降低了单个滤波器的温度漂移，这些BAW、多层SAW和TC SAW工艺技术提供更低的插入损耗，产生更陡的滤波器裙边，并提供更好的温度响应，这些都等同于温度变化期间更好的带外衰减。它们还能提高接收器的灵敏度、隔离和抑制，与SAW滤波器相比，BAW滤波器本身对温度变化的敏感度更低，温度补偿（TC-SAW 和 TC-BAW）甚至会进一步降低温度敏感度。在BAW中，由于结构不同，三种类型的BAW在求解温度系数时存在差异。

滤波器空腔会影响散热路径，从而影响滤波器的温度系数。在5G和Wi-Fi应用中，当处于更高频率时，BAW相较于FBAR的优势会更加明显，在使用BAW时，反射器层会变得更薄，会进一步改善散热。相比之下，使用FBAR时，空腔上方的膜变得更薄，降低了它从谐振器转移热量的能力。因此，当BAW和FBAR之间的插入损耗为常数时，发射功率每升高1W，温度升高20°C，FBAR则是每W升高70°C。温度变化越小，性能越高，使得BAW滤波器能够满足系统在高功率、高温条件下的插入损耗和带外衰减要求。此外，因为高Q因数和高耦合BAW滤波器具有低插入损耗，这有助于降低功耗和相关的散热问题。

由于如今的高频率和小尺寸应用，温度方面的限制也愈加严苛，此外设计的频率越高，要满足参数要求的难度就越大。其中一个关键参数是插入损耗，线路长度、匹配组件、滤波器组件和连接走线都会对插入损耗产生额外影响，频率高于3GHz时尤其如此，为了优化系统的链路预算，需要使用低插入损耗滤波器。

___€2.Q因数___

滤波器的插入损耗由多种因素决定，其中包括相对于中心频率的滤波器带宽、滤波器的阶数，以及组成组件的谐振器的Q因数。Q因数是衡量谐振电路的选择性的一个指标，如**_图5-3_**所示，谐振器损耗和耦合是实现低插入损耗和高选择性的关键。如果谐振器的耦合和阻抗相似，可以通过Q因数来比较它们的性能。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/JGbdHe4j0TQ8blfDJicuGPz5fP6YPa0Zegyuu9tAqTr0j4rBSbM08nZKNkG0KTcxSVCwLH5fI1jTvJUjQy7tjXg/640?wx_fmt=png&from=appmsg)

**_图5-3：RF滤波器的Q因数、带宽和衰减特性_**

___€3.耦合系数___

在滤波器技术中，驱动应用性能的两个性能参数是滤波器耦合系数和Q因数，RF滤波器谐振器耦合系数是决定声学耦合滤波器带宽的关键因素。在SMR或FBAR配置中，提高BAW滤波器谐振器的耦合效率可以在小封装尺寸下提供低插入损耗和高性能。有效耦合系数 (K2 eff) 是测量谐振频率 (ƒs) 和抗谐振频率 (ƒp) 之间的相对间距的一种指标，它的值取决于许多因素，包括电极和压电特性。在BAW滤波器中，谐振器的有效耦合系数决定了滤波器可获得的平坦通带带宽。