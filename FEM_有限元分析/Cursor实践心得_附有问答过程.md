# Cursor实践心得，附有问答过程


> 原文地址: [https://mp.weixin.qq.com/s/LgzaUJEe914xgykJo1tcCQ](https://mp.weixin.qq.com/s/LgzaUJEe914xgykJo1tcCQ)

**简述**

这段时间本想用Cursor实现仿真流程的简单建模、网格剖分、有限元求解、显示这几个步骤，尝试做成一个简单的小软件，结果不断尝试后，发现还是毕竟难以实现，或者说还没有找到更好的对话方式。最后Cursor的免费使用时间，这个想法也暂时夭折了。

不过，实现过程中还是有一些结果与心得，这里简单总结一下。

最后附上部分与cursor对话的截图。

**一些结果**

**1.我先让Cursor帮我用Qt做一个界面，实现简单建模的功能。**

实现过程中，界面绘制简单模型，包括与右端几何树的联动好了，结果在进一步添加bool运算的时候，始终报错。最后导致整个代码难以调试通过，也回不去没有bool运算的结果。  

中间环境的代码没有保存，因此也无法展示没有bool运算的结果了。只能看看一步步生成的文件夹内容。

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312jeXJ26rm1xHI72e58kwNSL8FjjUibkpRhkW1IVV2H0UlzUFKAD86hHctg/640?wx_fmt=png)

**2.想了想，那就看看能不能实现简单的网格剖分**

想着Cursor可能比较笨，因此就选择毕竟容易的python语言。最先让它帮我写了一个markdown，现在里面写好各个步骤的流程与一些能想到的细节。    

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312je5EArzW8oQs2PZUxABlLlT6sEpibTfkIfXgLMicU6naYY5piaUoCP23gqg/640?wx_fmt=png)

然后给它正确的读入几何模型的格式（直接用triangle的input格式）。解析好后，然后使用delaunay网格剖分，很快最简单的实现了，这时候吸取教训，保存的结果：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312jeY6OWjC18jXvibTNeKl0KeMguMBE4TMLNm7W5YoMGSRgCtsYroVGFpKA/640?wx_fmt=png)    

然后让Cursor帮我添加面积约束，也实现了，只不过网格质量很差：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312jeibmXFIDN7nvkD2W9aztCFafwia7oPwziadcFDZZCI3wO0PKLIf8XrCKXw/640?wx_fmt=png)

然后想着和tiangle一样，实现区域的面积控制，也基本上实现了，虽然网格质量还是很差：  

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312je4sUibjFV9J99r4nUItbXYlVFvK7ibicGD5qBr9icEt3mn8qOB3QIq6FdxQ/640?wx_fmt=png)

这里我预感后面的优化可能会出问题，于是备份代码。

接下来，我尝试让其帮我优化网格质量，根据角度、长短边比之类的。这里就开始卡住了，始终解决不了问题，而且在一次次的修改bug中也打乱了没有优化网格的代码，结果再一次导致整个代码无法修复，最终的结果就出现如下问题：    

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312jeT6RIWgaoTTGNH6jfkk4FA8vcakJzBbtBXeBC6A4UIcvamXVvNnoBQA/640?wx_fmt=png)

无论如何调试，始终不对，直到Cursor试用期到了。下面是生成的文件名，可以看到mesh\_generator.py修改了110次了还没有成功。

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312jeua44ZKWO3ib7I4vgK17GYfGLYMDdHC9I0cedUaMWicKSEA6wmFACuH1Q/640?wx_fmt=png)

**使用心得：**

1.对于比较复杂的依赖环境Cursor能很好的提供解决方案和傻瓜式的流程，一步一步教你安装、查看版本、如何编译等待操作。只要你的电脑环境本身不复杂，那么基本上它能帮你安装好可行的环境。

2.对于简单的案例，例如测试文档、简单的框架、简单的功能cursor能快速帮你实现，一旦上了点难度的，可能就得反复调试。    

3.如果能清晰详细的描述想要实现的功能，cursor也能帮你实现，如果不清晰，技术点自己都不知道的情况下，那么就很难成功了。

4.对于C++而言，Cursor很多时候检查不到位，添加了新函数，或者更改了函数接口时，不会自动检查是否定义该函数，是否会造成重定义、接口是否统一等问题，当然也可以通过一次次的反复询问解决这些语言上的问题。

5.如果真想用cursor来写复杂的代码的时候，一定一定要记着自己备份，如果一旦cursor反复调试后实现不了，而你没有备份，那么基本上就宣告失败了（或许也有其他方法，目前还不知道）。因为AI本身有随机性，基本上恢复不了某个阶段的代码。

6.Cursor的试用期是两周，到期后就不能使用claude-3.5-sonnet了，只能使用mini。但是mini基本上都没有上下文而且很“笨”，如果调试操过三次没有成功，基本上就陷入了答非所问的结果。

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312jescvaBMG83MXovdOTNdXj2nc6NVWPpVCliahIeqX8d9nsHfmBCxsia2SA/640?wx_fmt=png)

7.之前有朋友问具体步骤怎么实现了。觉得用多了就有感觉了，下面截图一些我个人的提问和回答内容，不喜勿喷。

问1：给出你想要做的事情，可以先写在md里面。

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312jeBOhLbHWlB9UeBn5OQI0aicYWy4EwKTLick23CJaCyWc6vaZtBQUW3akg/640?wx_fmt=png)

问2：直接上截图

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312jeVBlnticg4nfCygh1tevYYFiaOVSicolf2jK3JNT74MfdibngHLP22xRMOA/640?wx_fmt=png)

问3：让cursor推荐语言    

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312jePKF57bkNicjI2zbmxX6MbMMleUdOfzdTldu7xmhXQMuVaIibHeKfDuEQ/640?wx_fmt=png)

问4：根据cursor提示继续

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312jew9POMia1A0NXX2EyJ5qwfGnox47WXTWr4vAWYlpoVPhu7Evcttx3Uyg/640?wx_fmt=png)

....

自己查看markdown，觉得差不多了，就可以让cursor写代码了。    

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312jeKKfhxOvwQ0Tw0rsMNLqIaxTQ04mZpmPd0pchyFCMn5N2Jaib1PgMNqA/640?wx_fmt=png)

想要个测试代码，问cursor

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312jeQoYz1xspJOeA8sheiaz0PMtFmf7icsF6b4UOUqNKibPqLMwYyr2SqHcag/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312je8mEYOJk5xKIu2QI6NqL00ISSgRGk1fL4nPDGGJibTKx9Fib6usN1FC3A/640?wx_fmt=png)

第一次生成的文件有错误，于是提示它修改：

![](https://mmbiz.qpic.cn/mmbiz_png/atV33WFsFNoe03jMVbSYcT56tw1312je7lhibnWicxTy8WkwghqOKaWk6TmBZqyO54yy54zOfIiauXJIMaXrmvl9w/640?wx_fmt=png)

.....

之后的提问类似，有什么需求就问，有错误就复杂粘贴错误内容，然后就开始一步一步去实现你想要实现的功能。        

8.个人感受，整个过程就是提问和粘贴复制，虽然感觉很舒服，但是如果遇到cursor反复解决不了的问题，就会陷入无限的修复bug过程中，拆了东墙补西墙的感觉，脑袋啥也没做嗡嗡嗡的。可能还需要学习，多实践找点简单的案例来实践。