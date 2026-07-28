# 9个PCB布局技巧，高级工程师都知道，初级工程师可能一个不知道

原创 硬件笔记本 2024-02-07 07:54 四川

> 原文地址: [https://mp.weixin.qq.com/s/7CgBrivk680TvJ8hf7vgoQ](https://mp.weixin.qq.com/s/7CgBrivk680TvJ8hf7vgoQ)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic "音符")

  

今天给大家分享的是：****PCB 设计技巧****

# **1、稳压器布局**

线性稳压器十分常见，由三个引脚组成：

-   稳压输出（5V、3.3V等）
    
-   接地（GND）
    
-   未稳压电压输入
    

不同型号的引脚顺序和封装可能不同，因此在设计的时候一定注意。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqk0zPRrkMBE1gKKOOXkqravib5Of81uXOfAS3fE7LVFgDFvfGCatLYrDw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

不同型号的引脚顺序和封装

稳压器引脚排列：78L05、MCP1826、MCP1702-5002E

在PCB 完成后，可能会发现电路需要更高的输入电压、或者更低的压差电压。****如果布局的合理，就方便更换稳压器。****

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqk0miaRhuZ45A5otCibVAF9vAtw3zmaDyFkeFicASiciaQdbYx237NLniak9rA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

灵活的稳压器 PCB 布局

**添加第4个和第5个孔，根据以下引脚排列：**

-   +5、+UN、GND（顶部三孔）
    
-   GND、+UN、+5（顶部三个孔装反）
    
-   +UN、GND、+5（中间三孔）
    
-   +5、GND、+UN（中间三孔装反）
    
-   GND、+5、+UN（底部三孔）
    
-   +UN、+5、GND（底部三个孔装反）
    

上面涵盖了引脚的 6 种排列方式，如果确保所有孔的直径均为 0.040 英寸，那么就包含了TO-220 和 TO-92 封装。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqkq9fibzEjz9O8y0cz9XoLOhZ4jLESblnwbIQGo0iaG4zOibIcxbbwGywVA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

三引脚线性稳压的通用布局

# **2、不同微调电位器引脚兼容**

小型电位器（通常称为微调器或微调电位器）也有多种封装选择，最常见的微调电位器具有0.1英寸间距的引线，但引线的连接位置与元件主体不太同。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqkxzXBCsAJ3HntE8gKKXtsexA001ghCY1KfdVckV8Dl7kPiaibfRiakIPsA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

微调电位器引脚排列

最左边的微调电位器可能成本最低，不因为交错的引脚导致PCB出现问题。第二个电位器是最紧凑的，但价格也更好。

第三个是多圈电位器，可以垂直安装或者平放。最右边的微调电位器有一个方便手指操作的旋钮，非交错的引脚位于封装的正面。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqksoLdGw5N1eXdcVQc2plDnFcpchiaiaewibenFyVYPmIbiaAjuj5brZ7JicQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

封装的正面一直到中心布置一个3\*3网格

**为了与所有这些引脚排列兼容，可以从封装的正面一直到中心布置一个3\*3网格，这样上面所说的4种微调电位器都可以放入PCB中的同一位置。**

在几乎所有通孔电位器上，中心销往往是滑动端，你可以将孔图案网格延申到布局的顶部，以防你需要将电位器反着定向。（也就是是说，假设你沿顺时针是增大，但是你可能需要减小。）

  

# **3、布局电容-添加额外的孔**

使用 3 个电容，以便在组装时可以选择 0.1 英寸和 0.2 英寸间隔的零件。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqkN5UviaGMmiaMzUoWw0cUOBHoIY9TRGwvGhK87OaMTm5al6uNlhU79yqw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

电容

扩展电容接受具有相同阻值但不同阴线间距的电容。

为了保持一致性，****可以将第一个焊盘设为正方形并设为正值，另外2个孔接地并连接在一起。****

不管你使用的电容是什么尺寸，都必须要填充一个孔。这样可以知道，较小的部件应该与第一个孔对齐。

**额外孔的另一个好处是，如果在PCB上出了错误，另外一个孔可以备用接地连接。**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqkFCMB5zOiaEJX8qv8oGfQ3DCXRGApbG5Ge4s6seKludhfxicDbwydsBOw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

电容布局

  

# **4、布局按钮要添加的额外的孔**

触觉按钮在电子电路中非常常见，最常见的触觉按钮封装包含4个引脚，形状是方形的。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqkia413fTQXBiaAyERsuHgh7gIupMk7CD33iagGST1zj89HRphdsOHUXXYQ/640?wx_fmt=png&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

触觉按钮

实际上，封装是矩形的，但如果将引脚强行插入 PCB孔中，可能会以90°偏离方向安装。通常，按下按钮时，按钮会将一对引脚连接到另一对引脚，如果安装不正确的话，就分不清是按下去了，还是正常的状态。

安装前，需要要万用表仔细测量引脚的连续性。或者，你****可以对 PCB 进行布局，让按钮可以任意方向安装也可以正常工作。****

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqkHV6PwALRMjYmibFHpZjZriaB7T9Zrb3ibadhuR9OZticotoTWF6dVurqrg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

按钮布局

从电气角度来说，通过将电路连接到相对角上的引脚。你肯定只能从开关的一侧获得一个引脚，而从另一侧获得另一个引脚。

你可以使用万用表来测量开关上相对引脚的连续性。

不管你选择哪两个引脚，标准按钮在按下时始终显示连续性，而在释放时则不显示连续性。

  

**按钮选择**

**可以通过在中间添加3个额外的孔让按钮更加通用，这样的话，可以安装多种类型的按钮。**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqk6b8aeJgicTNG1HPw1uicicIEsJ1R6yXlPGHcsLXVPjGCyWv39OxYUBzYw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

按钮布局

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqkp60sExYdVuulRyhfQJ7xgic3kI7AWJlTMDmULhUKELte2UYQibehEnaA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

按钮模式允许选择零件

  

# **5、孔周围添加更宽的圆形焊盘**

默认情况下，大多数 PCB 布局在常见的 0.029 英寸直径孔周围使用 0.056 英寸直径焊盘。

这对于DIP芯片和其他紧密间隔的孔非常有效，因为仍然有足够的空间在两个孔之间走线而不触碰到焊盘。

但是，在许多PCB中，大多数孔没有非常紧密地通过走线。对于周围比较宽阔的孔，****通过在孔周围添加更宽的圆形焊盘，以在焊接过程中提供最大的接触面积。****

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqk13VYZhFOIBFmkw1lzjn44ia674Mm2BgUm89Kod0C20IZAxq8suSU6yA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

具有较大焊盘的孔

在上面的示例中，你可以看孔周围有宽阔的闪亮区域，以确保零件引脚和PCB走线之间良好的焊接接触。焊接速度也更快。

  

# **6、阻焊层**

阻焊层是一种电和化学绝缘涂层，可以保护金属走线免受环境和意外电气连接的影响。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqk8J1Ct5o4ONXBY7B6Kdqa7ibYntbMIURXyoYDTxtYRTdufMgrl2NJYRw/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

扩展被阻焊层覆盖

你添加的扩展焊盘区域可能在 PCB 生产过程中被阻焊层覆盖。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqkz4CogiaSXK3514cVLtchQQcHCSiaw1QXP7wDRMuLBpjfAuBVRicGfnBMA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

带圆形底焊盘的孔PCB布局

在PCB 布局软件中，通过****从焊盘工具中选择圆形焊盘而不是从圆形/弧形工具中选择圆形来制作扩展焊盘。这样，PCB制造商就不会覆盖焊盘，因为焊盘是用于焊接。****

只需将 0.080 英寸直径的焊盘移至 0.029 英寸直径的孔即可形成具有扩展焊接区域的孔。

这样的话，在PCB的另一侧拥有更大的焊接表明，同时允许走线穿过PCB的另一侧引脚，如果你需要两侧都有更大的焊接表面，则需要增加带有孔的焊盘尺寸。

  

# **7、铜填充可以减少热量并提高效率**

某些部件（例如电压调节器和电机驱动器）在使用过程中可能会变热。****吸走热量的一种简单方法是将铜填充物放置在芯片下方，在热芯片测试中，铜芯片可以减少热量并提高性能。****

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqkWadiaKYTCzNCHiaB9DaqGxb47v06ajNmP5PCHrHuOGVwLYHvNwicXR1QQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

电机驱动IC PCB布局

不过，有时候需要芯片下方的区域来走线，因为没有办法添加铜平面。相反，如果芯片的电源使用足够厚的走线，并将这些走线连接到附近甚至很小的铜区域。

# 

# **8、测试点设计**

测量直流电压时，必须将接地探头与电路连接到同一地，首先要测量的电压之一是稳压电源。

你可以在 PCB 上找电阻或具有裸露位置的连接器来连接万用表探头，但是，将探针连接到这些位置可能比较困难，或者 PCB 的该区域可能太拥挤而无法接触到引脚，

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqkBmMBFUYm6ZHRVnxlVRk3wz4bYga1k4g8Be8O9EIRyXNhcEXibAtccfA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

接地探头与电路连接到同一地

**将测试点放置在 PCB的边缘，避免电线悬挂在工作电路上。**

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqk0miaRhuZ45A5otCibVAF9vAtw3zmaDyFkeFicASiciaQdbYx237NLniak9rA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

环线测试点 PCB布局

对于环路本身，更倾向于使用从组件引脚上切下的电线，使用稍大的孔（直径 0.035 英寸），以便可以使用较粗的金属丝来制作钩环，太细的话，一下就掰弯了。

如果将正电压孔（+V）之一放置在距离其中一个接地孔0.1英寸的范围内，并且使用较大直径的孔（ 0.035 英寸），则可以安装接口或者连接器作为备用电源连接器。

测试点可以连接备用电源孔以纠正电路中的错误或者在板边缘附近放置一个大过孔。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqkylGuqhUMjlX5nbLsWuFaUutJRjvCATxQEvlmzicu9N69yTMgVhvsyiaA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

PCB 侧面附近的大电镀孔作为测试钩的测试点

# 

# **9、接地线和电源线设计**

****接地线和电源线要比信号线更粗。****较粗的走线不仅会承载更多的电流，而且尺寸差异，可以很快识别出哪些走线用于电源，哪些走线用于信号。****降低了将电源走线错误地连接到信号引脚****，或者将信号走线错误地连接到电容的可能性。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics6FzJ4muOibDVqM0CoVw8sqkTwXU3rY0R2y9du3hSDyMbredPFacqGCZTtbo6HO5lXeCUOYq4eAgQw/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1)

走线宽度的差异减少了连接错误

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761&tp=wxpic)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052&tp=wxpic) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437&tp=wxpic)

## 

**声明：**

  

声明：本文来源头条百芯EMA。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。