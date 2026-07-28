# 为什么在MOS管的栅极套磁珠

原创 蜗牛 硬件笔记本 2020-05-14 07:55 undefined

> 原文地址: [https://mp.weixin.qq.com/s/sJ1p3DElTm1hzpUUH1nRUg](https://mp.weixin.qq.com/s/sJ1p3DElTm1hzpUUH1nRUg)

关于磁珠：  

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tK83C30RzibmTOgsBvAD3ejezcS15iaMYD229VBfLQ5GvuoZxqsddoPYbT7AncjmOzxqyHjo842PNEQ/640?wx_fmt=jpeg)

1.磁珠等效于电阻和电感串联，但电阻值和电感值都随着频率变化而变化，它有很高的电阻率和磁导率。

  

2.因为等效成电阻和电感串联，所以磁珠是消耗型元件，而电感是储能元件。它对高频噪声有很好的的抑制作用，将吸收的高频信号转化成热能。

关于MOS管：

1.某些特殊的MOS管寄生电容很小，开关速率特别快。效率高，功率损失少。但同时也会有更高的dv/dt，di/dt；

  

2.MOS管的引脚有一定的长度，会形成引线电感；

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tK83C30RzibmTOgsBvAD3ejetlIqu9JwLwhiczdkW46uv0m2KIEPDYJAycScrffAn9NRw5r8pkgLg1Q/640?wx_fmt=jpeg)

3.PCB布线也会形成寄生电感和寄生电容，进而产生LC振荡。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tK83C30RzibmTOgsBvAD3eje62Wa2Hk3giaFG4UdsJqI5tcXD3evrvibH6j1AMJMa6pHPWkGRibgoX29w/640?wx_fmt=jpeg)

  

由于以上原因，MOS管在开关瞬间产生寄生振荡，其频率约为几十到几百兆，该寄生振荡会损坏MOS管的gs，产生严重EMI，并会造成很大的开关损耗等。这时候MOS的G极很容易自激振荡，如遇有这种情况，可在G极套上磁珠可消除或衰减振荡。