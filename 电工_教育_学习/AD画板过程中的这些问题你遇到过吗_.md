# AD画板过程中的这些问题你遇到过吗？

原创 power107 硬件笔记本 2021-03-24 18:23 undefined

> 原文地址: [https://mp.weixin.qq.com/s/xRfDoAMdhuK2BKEoWn6DEQ](https://mp.weixin.qq.com/s/xRfDoAMdhuK2BKEoWn6DEQ)

有些小伙伴刚开始学习画板，对AD的操作不熟悉，或者由于工作需要，不得不用AD，下面是你可能遇到的问题及解决办法：

  

1、定义板子边框为什么总是弹出如下界面？

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIo6yao99N86Euhh0ickB74o8Hf2qib8VHjb84eWrbOHW90baoHWOQW269YLuImn6KXXQR7VMXwu2Ig/640?wx_fmt=jpeg)

原因是没有按照正常步骤做，未选中边框。

  

正确操作如下：

步骤①在机械层画出板子边框（边框一定是封闭的）

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIo6yao99N86Euhh0ickB74o5kNmwt8DHibyChG0byAaB8yiaGZXasujgMPFIpm5NkjfRPrX1zxCnxUg/640?wx_fmt=jpeg)

  

步骤②选中边框后，按如下方式操作或按快捷键DSD

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIo6yao99N86Euhh0ickB74oT6t5icicibalIkAvUAI6tG7uZ5PRhmWLicj6VElo3iblYJXTxLVW7lZhk2g/640?wx_fmt=jpeg)

  

2、敷铜后，想要更改，重新敷铜，却发现好像怎么也改不了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKic7sK60V13Ox82y43T0sRxzIv18wRZQiclB2CtibnSRibfARHs7qT8Jacx9kzL2ZsmvdnFOL5iatGjqw/640?wx_fmt=jpeg)

                  比如想要改成这样（颜色较浅区域）

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKic7sK60V13Ox82y43T0sRxbOTqdnDcu5PIsRoE5rJafOMBHoGNNXAsanesVj7tOpdxGh52iaj31hA/640?wx_fmt=jpeg)

                                实际还是这样

  

解决办法：

法1

铜皮更改后并选中，点击右键弹出如下窗口，选择Repour Selected

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKic7sK60V13Ox82y43T0sRxrVeAcpvPIXwuU0Th6qiaX58bGn8TQ0LOYHj4RTX3ibuYHj27pqKkkElg/640?wx_fmt=jpeg)

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKic7sK60V13Ox82y43T0sRxicvKev4fnQH99bHPjb1LIVwWFfDYv6uWaknLwpH7Q56uGGOhOqKP0lg/640?wx_fmt=jpeg)

                                   铜皮更改后

  

法2

左上角选择DXP，点击Preferences，弹出如下窗口，勾选Repour polygons After Modification。便可直接更改铜皮。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tJ16kYuqBMLGYt5icyGpvvI67r6u0MXabJuQ274vazib2Hp7cWmpXnNLB3bbarjcVL1DSY2MDiaQicDww/640?wx_fmt=jpeg)

  

3、在原有的原理图上增加电路，复制某些元件后，位号会跟原来一样（如下图）。元件数量可能几十个，几百个或者几千个，怎样让位号修改更简单？

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKic7sK60V13Ox82y43T0sRxlwJAkOIyeITar3cUkpQZUAEIG7ygX5Hqg6Sgn9zxLfO2gyf3F8nxKg/640?wx_fmt=jpeg)

  

①打开原理图，选择左上角DXP，点击Preferences，弹出如下窗口，勾选“重置粘贴元件标号”，选择确定。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKic7sK60V13Ox82y43T0sRxoB2vKwibQ8rjJPRHKyC1VlcnXFxELus1MHILO2jpnwibAich6b9ZjSDrQ/640?wx_fmt=jpeg)

  

②重新复制R61，就变成了如下R?，再使用自动编号就可以了。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tKic7sK60V13Ox82y43T0sRxnFK3iawUhYcAowJicmNTyDJ53mGiaPrKadibQcXVFuJqQwujsxQTW8yVqg/640?wx_fmt=jpeg)