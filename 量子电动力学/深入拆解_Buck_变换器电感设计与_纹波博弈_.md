# 深入拆解 Buck 变换器电感设计与“纹波博弈”

原创 Frank 量子电动力学 2026-04-28 17:03 中国台湾

> 原文地址: [https://mp.weixin.qq.com/s/ooc10ni6gyhMX\_MNUpzD1Q](https://mp.weixin.qq.com/s/ooc10ni6gyhMX_MNUpzD1Q)

在电力电子的广袤世界里，无论是设计几瓦的小电源，还是死磕几十安培（甚至像自动化物料搬运系统中那种动辄 80A 的极限阶跃负载）的大功率变流器，**Buck（降压）拓扑**永远是理解所有开关电源的基石。

今天，我们不空谈理论，直接拿一个真实的工程案例开刀：**如何为一个 18~24V 输入、12V/1A 输出的 Buck 变换器精准选型电感？**

在此之前，我们需要先建立一个物理直觉。

### 一、 物理直觉：电感就是那个“搬水的杯子”

想象一下，输入电容是一个高水位的大水池（24V），输出电容是一个低水位的小水池（12V）。如果直接用管子连通，水会失控地猛灌。为了平稳降压，我们引入了**电感**这个“水杯”。

-   **装水与倒水：** 开关管导通时，水杯从大水池舀水（电感充磁）；开关管断开时，水杯把水倒进小水池（电感退磁、续流）
    

![](https://mmbiz.qpic.cn/sz_mmbiz_png/r4Lxc81mibcH579gaDNwWWNgQOWp1JsKL0Jg5m9w2Je91ib4TsPIH5RP8zabaxrYgeYzmLicyRmB9Kibj0exCQEFAEhYp9V4BtXfOT9aIjqYcak/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/r4Lxc81mibcEUblWWjRkhHkDDNOu0qnEP3NZ8mZpGiaesDHDvaS3cl3Qo3smic9Ficqh6DU7rqKZkeYwOZticn3jfYnuJ9ibtQPBQOuXGZSZYGic08/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/r4Lxc81mibcHciaytCuEbGW8ss3k47g9k9vNFbjsGB2QVfnicnW78wDEAKIUia8Nxan2ibt0TOyldpZBukB5we1upF3hg2pUsVzGzwvMoSdDu9hc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/r4Lxc81mibcGEA76vgKEQye7YcP5XUcWcCyPumLA6BZt9KbwcHvrJ226ZTay9ExPgLFYV4O7ibibS2lOwU28gfFRIecEHwictnJeyDQiaZVfrrK4/640?wx_fmt=png&from=appmsg)