# cadence介绍及快捷键大全

原创 蜗牛 硬件笔记本 2022-04-06 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/DRbiYhVyEMkJbOiA6bXFbg](https://mp.weixin.qq.com/s/DRbiYhVyEMkJbOiA6bXFbg)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")  

  

很多小公司，高校和研究所都喜欢使用AD，它确实也比较简单，且容易上手。然而一些同行和很多大公司都是一直用Cadence，并且说它有多么香。

  

在高端PCB设计领域，Cadence是当前市场上主流高端软件供应商之一，其产品以卓越的性能备受各大企业的青睐。总觉得这个软件在PCB行业永远处于顶端位置。

  
今天我们一起来了解一下这个软件。

## 一、cadence简介 

我们一般常说的Cadence，并不是用来设计原理图或者画PCB的软件名称，它其实是Cadence公司推出的一套PCB设计软件工具的总称。

  

**它主要包含两大部分：**

  

一部分是orCAD软件，主要用来设计原理图，是板级电路领域使用最多的原理图设计软件。

  

另一部分是Allegro软件，主要用来设计PCB，以其强大的版图设计功能著称，Allegro的布局布线设计工具是业界领先的PCB设计系统，作为一个交互环境，它用于创建和编辑复杂且多层印制电路板。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjicJToyKEmozRdMjr3u66dK5DOdTIvuXMmN0ZvELib7uCAzWBHIaYYTxX7KaibZzatRiczBoQ2M6tnLw/640?wx_fmt=png)      ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjicJToyKEmozRdMjr3u66dKtoH80VZ7XVJVs2JpN2NtuE9XYXwSqGhb70Tr4EhWN5EK2uibcnH7Pbg/640?wx_fmt=png)

         orCAD原理图软件                  Allegro PCB软件

  

## 二、cadence优点 

Cadence 是一个大型的EDA 软件，它几乎可以完成电子设计的方方面面。包括ASIC 设计，FPGA 设计和PCB 板设计。在仿真电路图设计，自动布局布线，版图设计及验证等方面却有着绝对的优势。

  

在做大规模的，几万pin的项目，用AD肯定不行，打开可能需要半天时间（略夸张，但真的很慢）。allegro的优势在于，工程管理好，它的设计理念就是实际工艺是怎样就怎样，虽然复杂度高，但是专业度非常好，多人协作，规则设置，封装库维护，能满足公司的一切需求。

  

像TI，ADI，NXP这些一线IC大厂，甚至海思，瑞芯微，全志的参考设计，都是CADENCE格式，要做稍微有点交互的产品，基本上ARM平台，用cadence会省很多工作量。

  

## 三、cadence文件格式

1、原理图和PCB文件格式

原理图设计：Design Entry CIS,进去选Orcad Capture CIS。文件名后缀是**\*.DSN**。  

PCB设计：PCB Editor,进去选Allegro PCB Design GXL。文件名后缀是**\*.BRD**。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjicJToyKEmozRdMjr3u66dKy0rFqxBx5LgVkrDEe3jm7thpG3rjo1e9I0LKJF6DCQyCGgBBWGK5sw/640?wx_fmt=png)

  
2、原理图库文件

原理图库文件的扩展名是.olb。 默认目录（以安装在E盘为例）E:\\Cadence\\SPB\_17.2\\tools\\capture\\library

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjicJToyKEmozRdMjr3u66dKP0CZfmyLkm5ropCTibaOw5kMq96QoiagogCPMt8qb8rM06qoqNgvpa0A/640?wx_fmt=png)

  

  

3、PCB库文件

包含了3类文件：\*.pad、\*.dra、\*.psm文件。 

dra和psm是PCB封装，可以直接使用，pad是封装用到的焊盘。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjicJToyKEmozRdMjr3u66dKT3hyvTcQicrWWIiaMTDDqADEGakrGFpTDpyI4mQ9Zgt3D4c28dYOb4Eg/640?wx_fmt=png)

  

## 四、cadence版本信息及安装

目前各版本如下：

### Cadence SPB OrCAD Allegro 16.6

### Cadence SPB OrCAD Allegro 17.2-2016 

### Cadence SPB OrCAD Allegro 17.4-2019

用的比较多的版本是16.6。

  

各版本下载链接和安装说明可以参考吴川斌的博客。写的还是很详细，需要的可以直接去网站下载。

  

## 五、cadence快捷键

**快捷键  
**

**说明  
**

I

放大（zoom in聚焦，镜头拉近放大物体）

O

缩小（zoom out扩焦，镜头拉远缩小物体）

W  

画线（wire）

P  

快速放置元件(place)

C  

以光标所指为新的显示中心

H

元件标号左右翻转（针对集成IC）

V

元件标号上下翻转（针对集成IC）

R

元件旋转90°（rotate）

N

放置网络标号(number)

J

放置节点

T

放置TEXT

B

放置总线(bus)

F6

把鼠标变成大的十字光标，方便对齐操作

F10

跳转到下一页

ctrl+G

go to光标设定位置

ctrl+E

编辑元件属性（先选中元件）

ctrl+T

对齐网格线

ctrl+鼠标滚轮

放大缩小

ctrl+鼠标左键拖动

复制该元件，元件标号自动加1

G/F

放置电源和地（G和F两个快捷键效果是一样的ground/frame）

shift

画斜线（按住shift同时画线，可以画任意角度的电路连接线）

shift+鼠标滚轮

左右移动

长按鼠标滚轮

可任意方向拖动图纸