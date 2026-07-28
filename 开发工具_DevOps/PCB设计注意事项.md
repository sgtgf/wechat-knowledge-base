# PCB设计注意事项

原创 蜗牛 硬件笔记本 2020-04-04 19:56 undefined

> 原文地址: [https://mp.weixin.qq.com/s/Du8f0aK4f6JszdwzVpXpzw](https://mp.weixin.qq.com/s/Du8f0aK4f6JszdwzVpXpzw)

不同的人画出的PCB风格是不一样的，我觉得检查是特别重要的一个环节，不要以为会很麻烦，感觉是浪费时间。其实每次检查都会发现一些小问题，然后再进行优化，正是这些小细节的差异，会让你的板子跟别人的不一样。

以前每次画完PCB总会发现一些小问题，或者漏掉些什么，以至于需要多次修改，不能很好的提高工作效率。现将整个画图过程需要注意的地方都一一记下，以后按这个步骤检查肯定没问题啦。

本文针对一般低频电路的PCB设计注意事项进行说明，对于高速PCB可能不适用。

  

1.结构。首先就是定位，保证结构没有问题。确定安装孔的位置，关键接口和关键元器件的位置 ，散热器的位置等等。

  

2.封装。确认封装是否画准确。给个小技巧，为了确保无误，可以先将封装画好后再打印出来与实物进行对比。

  

3.安全间距。元件之间可设置为6mil，并设置分组，同一个组的网络设置为12mil，一般1mm耐压300V。

  

4.走线宽度。根据走线电流来决定，如下表。在保证走线正常的情况下，电源线和音频线的走线比要求设置的粗一些。

  

5.芯片的去耦电容104，102一定要放在芯片的电源和地之间，让芯片的供电引脚到芯片的地回路最短。请记住一定是最短。若同时并联102和104，则102首先要靠近芯片。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIArgnQXscDG1Fia8sByoOnGG2JCjSIw8UhYInr07eWfuCaEnUHKspYVmHjrkE1BgwBvCx36U7MR0A/640?wx_fmt=jpeg)

6.尽量保证地回路是连通的，这样才能尽可能避免不必要的干扰。

  

7.在地比较少的地方尽量打过孔，但是整个板子的过孔不要太多，否则影响板子的可靠性。

  

8.走线尽量拉直。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIArgnQXscDG1Fia8sByoOnGcO79VZqlC1WS5YdD4GsQDHVtaBcZWncebA0lM9kU48iaA9fgqLiae4nw/640?wx_fmt=jpeg)

  

9.尽量保持铜皮边缘整齐。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIArgnQXscDG1Fia8sByoOnGFJkobaBWcgxuOam7Euy7PB7zWDNxO0yH7kXfpK4BM8x7Fzbf4ib5vSQ/640?wx_fmt=jpeg)

  

10.走线和敷铜都不要走直脚，可45℃走线。

  

11.元件值和位号字体大小设置一样，尽量放置规范，看起来整洁。