# 保持图片原有清晰度！！！Word转PDF方法


> 原文地址: [https://mp.weixin.qq.com/s/T4\_yv6xH6IVigo0xettCzQ](https://mp.weixin.qq.com/s/T4_yv6xH6IVigo0xettCzQ)

## 1前言

Word中插入的位图以及矢量图（SVG格式）转成PDF格式总是会变模糊，对于有强迫症的人来说难以接受。这是之前常令我头疼的事情，这也是我吐槽Word的原因之一。前不久偶然间发现了解决办法，整理出来分享给朋友们。

## 2缘起

前不久提交稿件的时候，除了源文件外，还需要上传源文件的PDF版本以及所有图、表的单个文件，且图表文件推荐的格式为PDF。![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTG2OTz7RdlgwYBqFuVlpTrvpKhT7LqlPPUXURFSFAmV8VUlnXChHp3Bdn3bclNWSdDP1SzfYOiaBg/640?wx_fmt=png)因为我的源文件是Word格式，因此就遇到了开头提到的Word转PDF问题。在这个过程中除了将Word转PDF外，还需得到单个图表PDF格式文件。后者相对简单，一般绘图软件都支持直接导出PDF，直接在相应绘图软件中导出对应图片的PDF格式即可。

笔者常用的图片格式包括：

-   位图
    
-   SVG格式的矢量图（其中含有位图）
    
-   SVG格式的矢量图
    
-   PDF格式的矢量图
    

PDF格式的图片不能插入Word中，位图清晰度受到Word设置的影响(下文会进行说明)，因此，笔者建议将上述格式的图片均先转换成SVG格式，再插入Word中。

## 3位图转SVG

一般像Visio、开源软件Inkscape等均支持导入多种格式的位图，然后再将其导出或另存为SVG格式即可。

## 4PDF转SVG

由于Word中不能插入PDF格式的图片，因此需要先将PDF格式的矢量图转换为SVG格式的矢量图，转换有多种方法，可使用上文提到的开源软件Inkscape，亦可采用下面这种方式。

由于已经安装了`LaTeX`环境，因此可以直接使用其带有的开源命令工具`pdftocairo`进行格式的转换：

`pdftocairo -svg filename.pdf   `

转换得到的SVG格式的文件，便可以插入Word中。

## 5Word转PDF

调整好所需图片，接下来就是重头戏，如何将Word转换为PDF，不损失图片清晰度。

尝试更改Adobe Acrobat DC的设置，关闭对所有图片的压缩后，从Word中不论是打印方式生成PDF还是导出方式生成PDF，图片都会变模糊，但如果从Adobe Acrobat DC中导入Word文件，再导出PDF便可解决该问题。

首先打开Adobe Acrobat DC中的创建PDF选项。![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTG2OTz7RdlgwYBqFuVlpTrUGgQAV5ospNZHf4PLd2enksYsOVYzEDibRJGnhnwibngakPbgFypfPEw/640?wx_fmt=png)注意这里不要将Word文件拖到Adobe Acrobat DC中创建PDF，因为那样无法更改高级设置，点击“选择文件”后从文件资源管理器中找到对应的Word，导入Word后，打开高级设置。![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTG2OTz7RdlgwYBqFuVlpTr0wFquibSE3CSLumV8cXoxKd4iaUPoB7xQYUlHz7T6iaKLdTvWDH87tN6Q/640?wx_fmt=png)![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTG2OTz7RdlgwYBqFuVlpTrH7LFlZ5aVzK4Df3oWzxocsJajVXcSoa3OrTLbl8cLCQUQ9ic4JAsicaA/640?wx_fmt=png)默认Adobe PDF设置为标准，点击右侧的编辑，将图像选项中对图片的压缩全部关闭，并将该设置另存为。![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTG2OTz7RdlgwYBqFuVlpTrOhCFQxXMX3qjPcedicrSgpPK1ofl3BzaF6f7QIjMrPkUlibw9JT7p2Ag/640?wx_fmt=png)将Adobe PDF设置更改为刚刚另存的设置，点击确定，之后点击创建便可以保留SVG格式的矢量图的矢量特征，放大后不模糊，并且位图转换得到的SVG格式的图片也没有损失清晰度，SVG格式的矢量图（其中含有位图）也保持了原有的清晰度。

几点说明：

-   上述设置是为了使得位图以及含有位图的矢量图不压缩，上述过程（从Adobe Acrobat DC导出PDF）保证了纯矢量SVG格式的图片保留矢量特征，也就是说如果图片均为纯矢量图，Adobe PDF设置中保持标准即可。
    
-   位图格式的图片从Word中打印生成PDF或者导出生成PDF与从Adobe Acrobat DC导出PDF均保持了原有位图清晰度，没有区别，但由于Word默认会对位图进行压缩，因此还需要更改Word中高级选项设置，为避免Word源文件传递中设置不同导致的位图压缩，因此建议对于位图文件，也转换为SVG格式再插入Word中。![](https://mmbiz.qpic.cn/mmbiz_png/WH5LbrDn8DTG2OTz7RdlgwYBqFuVlpTrpRNL02X9SKNZiat4v5o3FRHMX20xm51cAWRzFJOEib7Jjiblc2rlpWX5A/640?wx_fmt=png)
    
-   SVG格式的图片先导入Viso而后再复制进Word也是一种较好的选择，但这种方案存在的问题是当图片中含有位图时，其中位图的清晰度取决于位图相对于画板的大小，有点小坑，感兴趣朋友可以自行尝试。
    

亲测，按照上述方法生成的PDF中的图片：位图、SVG格式的矢量图（其中含有位图）、SVG格式的矢量图仍然保持高清且没有发生错位。

作者|斗沙片刻