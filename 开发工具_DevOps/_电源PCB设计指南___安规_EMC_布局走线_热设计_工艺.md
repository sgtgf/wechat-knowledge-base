# ​电源PCB设计指南 | 安规、EMC、布局走线、热设计、工艺

原创 硬件笔记本 2023-10-12 07:37 四川

> 原文地址: [https://mp.weixin.qq.com/s/Hjz\_XTG28wcT7H23sifGCg](https://mp.weixin.qq.com/s/Hjz_XTG28wcT7H23sifGCg)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

摘要：  

安规距离要求部分

抗干扰、EMC部分

-   整体布局及走线部分  
    

-     
    
-   热设计部分
    

-     
    
-   工艺处理部分
    

  

  

Part 1

安规距离要求部分

包括电气间隙（空间距离），爬电距离（沿面距离）和绝缘穿透距离。

1、电气间隙：两相邻导体或一个导体与相邻电机壳表面的沿空气测量的最短距离。

2、爬电距离：两相邻导体或一个导体与相邻电机壳表面的沿绝绝缘表面测量的最短距离。

  

一、爬电距离和电气间隙距离要求： 

1、爬电距离：输入电压50V-250V时，保险丝前L—N≥2.5mm，输入电压250V-500V时，保险丝前L—N≥5.0mm；电气间隙：输入电压50V-250V时，保险丝前L—N≥1.7mm，输入电压250V-500V时，保险丝前L—N≥3.0mm；保险丝之后可不做要求，但尽量保持一定距离以避免短路损坏电源；

2、一次侧交流对直流部分≥2.0mm；

3、一次侧直流地对地≥4.0mm如一次侧地对大地；

4、一次侧对二次侧≥6.4mm，如光耦、Y电容等元器零件脚间距≤6.4mm要开槽；

5、变压器两级间≥6.4mm以上，≥8mm加强绝缘。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgo6ZH6GVjX5EeaeJmS0UQ9gLpACzsRuJPkOIrkxqibCPXF75fiaRaBVEP1FJtkSzVERrUcPJjicl84g/640?wx_fmt=png)

  

  

Part 2   

抗干扰、EMC部分

一、长线路抗干扰

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgo6ZH6GVjX5EeaeJmS0UQ9dJ2PTLJucGGZxhYyYsfBYNnPj5EQVJibzqiblqSh5mnkmibKY2yYr4UiaA/640?wx_fmt=png)

  

在图二中 ，PCB布局时，驱动电阻R3应靠近Q1（MOS管），电流取样电阻R4、C2应靠近IC1的第4Pin，如图一所说的R应尽量靠近运算放大器缩短高阻抗线路。因运算放大器输入端阻抗很高，易受干扰。输出端阻抗较低，不易受干扰。一条长线相当于一根接收天线，容易引入外界干扰。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgo6ZH6GVjX5EeaeJmS0UQ9N5HBB5ToHug6SQPGibFPhXIvDnrlicwrWQspQmsicacIjPbdd2RDTRTrw/640?wx_fmt=png)

  

在图三的A中排版时，R1、R2要靠近三极管Q1放置，因Q1的输入阻抗很高，基极线路过长，易受干扰，则R1、R2不能远离Q1。

在图三的B中排版时，C2要靠近D2，因为Q2三极管输入阻抗很高，如Q2至D2的线路太长，易受干扰，C2应移至D2附近。

  

二、小信号走线尽量远离大电流走线，忌平行，D>=2.0mm。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgo6ZH6GVjX5EeaeJmS0UQ9OV7hZric01BrPbVy8oO7xWefrnbc5uc0zLEfQZm4VjiaibruRgzaruIicg/640?wx_fmt=png)

  

三、小信号线处理：电路板布线尽量集中，减少布板面积提高抗干扰能力。

  

四、一个电流回路走线尽可能减少包围面积。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgo6ZH6GVjX5EeaeJmS0UQ9W3kL6Waspkvo597Gc5InUgF9wxRwjicGhZ8gRNajqDy7UJbSl9ee7dQ/640?wx_fmt=png)

如：电流取样信号线和来自光耦的信号线

  

五、光电耦合器件，易于干扰，应远离强电场、强磁场器件，如大电流走线、变压器、高电位脉动器件等。

  

六、多个IC等供电，Vcc、地线注意。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgo6ZH6GVjX5EeaeJmS0UQ9jRTjiaMKWYvOeFNAtIyibeto9LdsSpkXxlur8x9wk5Hfics9SomsPp2Hw/640?wx_fmt=png)

串联多点接地，相互干扰

  

七、噪声要求

1、尽量缩小由高频脉冲电流所包围的面积，如下（图一、图二）

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icDibhhZ2ciad7iajpFdNQXYHM49KMAbM7zJZ7rhQqfOF3Lf9LTpJa1EHGA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

一般的布板方式：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2ic8NxbdgrfGia2yzuvicW2WWD2Ftj53FiaFvB91TZDq8eMYfAEN0ptn8Xcg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

2、滤波电容尽量贴近开关管或整流二极管如上图二，C1尽量靠近Q1，C3靠近D1等。

  

3、脉冲电流流过的区域远离输入、输出端子，使噪声源和输入、输出口分离 。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icSgb1WjGIaaQ7K8TPibpibysx3PbCptsWZp42M37KjLoPBiaLYLzV2gWeg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

图三：MOS管、变压器离入口太近，电磁的辐射能量直接作用于输入端，因此，EMI测试不通过。

图四：MOS管、变压器远离入口，电与磁的辐射能量距输入端距离加大，不能直接作用于输入端，因此EMI传导能通过。

  

4、控制回路与功率回路分开，采用单点接地方式，如图五。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgo6ZH6GVjX5EeaeJmS0UQ946B3D8mlSGMvGD5XicFvEO6lSwxlW900tiaVN1oPkslUY6hFBfyuj3iag/640?wx_fmt=png)

  

控制IC周围的元件接地接至IC的地脚 ；再从地脚引出至大电容地线 。光耦第3脚地接到IC的第1 脚，第4脚接至IC的2脚上 。如图六。

  

5、 必要时可以将输出滤波电感安置在地回路上。

6、 用多只ESR低的电容并联滤波。

7、 用铜箔进行低感、低阻配线，相邻之间不应有过长的平行线，走线尽量避免平行、交叉用垂直方式，线宽不要突变，走线不要突然拐角（即：≤直角）。（同一电流回路平行走线，可增强抗干扰能力）

  

八、抗干扰要求：

1、尽可能缩短高频元器件之间连线，设法减少它们的分布参数和相互间电磁干扰，易受干扰的元器件不能和强干扰器件相互挨得太近，输入输出元件尽量远离。

2、某些元器件或导线之间可能有较高电位差，应加大它们之间的距离，以免放电引出意外短路。

  

  

Part 3

整体布局及走线原则

一、整体布局

1、散热片分布均匀，风路通风良好。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icJ1t84feHsO20amegQmavuGicRFicODfyYic3kBbYa8FuibLkv19F0ATghA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

图一： 散热片挡风路，不利于散热；图二：通风良好，利于散热

2、电容、IC等与热元件（散热器、整流桥、续流电感、功率电阻）要保持距离以避免受热而受到影响。

3、电流环：为了穿线方便，引线孔距不能太远或太近。

4、输入/输出、AC/插座要满足两线长短一致，留有一定空间裕量，注意插头线扣所占的位置、插拔方便，输出线孔整齐，好焊线。

5、元件之间不能相碰、MOS管、整流管的螺钉位置、压条不能与其它元相碰，以便装配工艺尽量简化电容和电阻与压条或螺钉相碰，在布板时可以先考虑好螺钉和压条的位置。如下图三：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icYbRsXdzibq9Yz983vBE3iaDpmw1DicdZ9ajWyedgYeGiasSY1D5U3g5JNQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

6、除温度开关、热敏电阻…外，对温度敏感的关键元器件（如IC）应远离发热元件，发热较大的器件应与电容等影响整机寿命的器件有一定的距离。

7、对于电位器，可调电感、可变电容器，微动开关等可调元件的布局，应考虑整机结构要求，若是机内调节，应放在PCB板上方便于调节的地方，若是机外调节，其位置要与调节旋钮在机箱面板上的位置相适应。

8、应留出印制PCB板定位孔支架所占用的位置。

9、位于电路板边缘的元器件，离电路板边缘一般不少于2mm。

10、输出线、灯仔线、风扇线尽量一排，极性一致与面板对应。

11、一般布局：小板上不接入高压，将高压元件放在大板上，如有特殊情况，则安规一定要求考虑好。如图四将R1、R2放在大板，引入一低压线即可。

12、初级散热片与外壳要保持5mm以上距离（包麦拉片除外）。

13、布板时要注意反面元件的高度 。如图五：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icD0pDfhFuvibpsdNOiaNzHcdicrq0IRkZicGwmt4Mib2xJBdqoqYckTNDLrw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

14、初次级Y电容与变压器磁芯要注意安规。

  

二、单元电路的布局要求

1、要按照电路的流程安排各个功能电路单元的位置，使布局便于信号流通，并使信号尽可能保持一致的方向 。

2、以每个功能电路的核心元件为中心，围绕它来进行布局，元器件应均匀整齐，紧凑地排列在PCB上，尽量减小和缩短各元件之间的连接引线。

3、在高频下工作要考虑元器件的分布参数，一般电路应尽可能使元器件平行排列，这样不仅美观，而且装焊容易，易于批量生产。

  

三、布线原则

1、输入输出端用的导线应尽量避免相邻平行，最好加线间地线，以免发生反馈藕合。

2、走线的宽度主要由导线与绝缘基板间的粘附强度和流过它们的电流值决定。当铜箔厚度为50μm，宽度为1mm时，流过1A的电流，温升不会高于3℃，以此推算2盎司（70μm）厚的铜箔，1mm宽可流通1.5A电流，温升不会高于3℃（注：自然冷却）。

3、输入控制回路部分和输出电流及控制部分（即走小电流走线之间和输出走线之间各自的距离）电气间隙宽度为：0.75mm--1.0mm(Min0.3mm)。原因是铜箔与焊盘如果太近易造成短路，也易造成电性干扰的不良反应。

4、ROUTE线拐弯处一般取圆弧形，而直角、锐角在高频电路中会影响电气性能。

5、电源线根据线路电流的大小，尽量加粗电源线宽度，减少环路阻抗，同时使电源线，地线的走向和数据传递方向一致，缩小包围面积，有助于增强抗噪声能力。

A：散热器接地多数也采用单点接地，提高噪声抑制能力如下图：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icmxE4SvFhga59N4hCDF8cjBdC74d3Nic6JEQufdS48h8UCFdBWPn3B8A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

更改前：多点接地形成磁场回路，EMI测试不合格。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icROTmS4QkvJO6g8jU6A3q87WMxgjkLBhzOkibme4sXmS4Oa8haJCDH4w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

更改后：单点接地无磁场回路，EMI测试OK。

  

7、滤波电容走线

A：噪音、纹波经过滤波电容被完全滤掉。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icoWuiaOtic5VQhkTwfSx2dxQCNTgsBcPjYhPQdt32wpiacibqsdHr52s3yg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

B：当纹波电流太大时，多个电容并联，纹波电流经过第一个电容当纹波电流太大时，多个电容并联，纹波电流经过第一个电容产生的热量也比第二个、第三个多，很容易损坏，走线时，尽量让纹波电流均分给每个电容，走线如下图A、B如空间许可，也可用图B方式走线。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgo6ZH6GVjX5EeaeJmS0UQ9a0ERLyTYbZia0wKibUicwQWaF7BcBadHBRk7GcTfuq48hrzMA3Db9vwqw/640?wx_fmt=png)

  

8、高压高频电解电容的引脚有一个铆钉，如下图所示，它应与顶层走线铜箔保持距离，并要符合安规。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icPPIbSwZP0n2pxkwy0fOxr4FibC3PwB4EibiaiahIW3VZNHzeuT0uiafhb3w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

9、弱信号走线，不要在电感、电流环等器件下走线。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icP9DBLITqALRrLch7icMnoSHPW1biczugUC5yIDtjgCcdnaicw9GPbia4WA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

电流取样线在批量生产时发生磁芯与线路铜箔相碰，造成故障。

  

10、金属膜电阻下不能走高压线、低压线尽量走在电阻中间，电阻如果破皮容易和下面铜线短路。

11、加锡：

A：功率线铜箔较窄处加锡；

B：RC吸收回路，不但电流较大需加锡，而且利于散热；

C：热元件下加锡，用于散热，加锡不能压焊盘。

12、信号线不能从变压器、散热片、MOS管脚中穿过。

13、如输出是叠加的，差模电感前电容接前端地，差模电感后电容接输出地。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2ick1a9W3w5gtHBiaJ771a9TwztjSThnjUOhpxZicrp0KhSibmxY8jvn52zQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

14、高频脉冲电流流径的区域：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icOlIqEFKxFJ5NooliaQsYgOXNhWhdfZM9WvJOg0ve2mHhXdlGCNKFFlA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

A：尽量缩小由高频脉冲电流包围的面积上图所标示的5个环路包围的面积尽量小。

B：电源线、地线尽量靠近，以减小所包围的面积，从而减小外界磁场环路切割产生的电磁干扰，同时减少环路对外的电磁辐射。

C：大电容尽量离MOS管近，输出RC吸收回路离整流管尽量近。

D：电源线、地线的布线尽量加粗缩短，以减小环路电阻，转角要圆滑，线宽不要突变如下图：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2ic3xxsml7zV1mYzAhgcEtKUT5uhHHDk9WdIXicIU4EJibzLxxs6ABVicEibA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

E：脉冲电流流过的区域远离输入输出端子，使噪声源和出口分离。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icTOBx5kCMcsVshc9exNic9r7Vr5UcrfbUxesAiap4ZJyuicEpbiaEUQV3WA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

F：振荡滤波去耦电容靠近IC地，地线要求短。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icQv7hwJvOuueqBKic71b5QUWTYJhANFBqTwI2mPQUt9FDIUA4g0f3KOQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

15、锰铜丝立式变压器磁芯工字电感功率电阻散热片磁环下不能走第一层线。

16、开槽与走线铜箔要有10MIL以上的距离，注意上下层金属部分的安规。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2ickVEUb3iaV7T5fSTYiaBxJH0sDru41SSMgoUazN8srfZ8ic4JsSmTsjBqw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

17、驱动变压器，电感，电流环同名端要一致。

18、双面板一般在大电流走线处多加一些过孔，过孔要加锡，增加载流能力。

19、在单面板中，跳线与其它元件不能相碰，如跳线接高压元件，则应与低压元件保持一定安规距离。同时应与散热片要保持1mm以上的距离。

  

  

四、案例分析

开关电源的体积越来越小，它的工作频率也越来越高，内部器件的密集度也越来高，这对PCB布线的抗干扰要求也越来越严，针对一些案例的布线，发现的问题与解决方法如下：

  

1、整体布局

案例1是一款六层板，最先布局是元件面放控制部份，焊锡面放功率部份，在调试时发现干扰很大，原因是PWM  IC与光耦位置摆放不合理，如：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icValYljoLovLst3qichwkkJDYxZefW9OY7FyFGPVbLKfgwZsL7xhbUow/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

如上图，PWM IC与光耦放在MOS管底下，它们之间只有一层2.0mm的PCB隔开，MOS管直接干扰PWM IC，后改进为：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2ictqQsXdXgbiakSX9rW1nnZ8tMRLy6pIDVm6EsfNgvKuT9OLImzHhohxA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

将PWM IC与光耦移开，且其上方无流过脉动成份的器件。

  

2、走线问题

功率走线尽量实现最短化，以减少环路所包围的面积，避免干扰。小信号线包围面积小，如电流环：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgo6ZH6GVjX5EeaeJmS0UQ9unI9hsnoewsdDpria4EsE2LLN9hpOiaBIYbEMuaDE27LFV6vzBsztia7w/640?wx_fmt=png)

A线与B线所包面积越大，它所接收的干扰越多。因为它是反馈电A线与B线所包面积越大，它所接收的干扰越多。因为它是反馈电耦反馈线要短，且不能有脉动信号与其交叉或平行。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icjs8ptJicvMw3I0o0x3lUMwR6Avibx4AaRiaKr9H9q9af2Rzib0le4cPX2g/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

PWM IC芯片电流采样线与驱动线，以及同步信号线，走线时应尽量远离，不能平行走线，否则相互干扰。电流波形为：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icH5hYdTbxSvCTuugzjAlDHVianZhlDfBXicictcoxSdVMEasCd0IblHqlA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

PWM IC驱动波形及同步信号电压波形是：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2ic3UOWibOVwuibMed8ELFrv1wOuxSgP2kTjw30HlUhdzxdsdVyzOaMdiabQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

  

Part 4

热设计部分

注：小板离变压器不能太近

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icfz0KkDSMQ1S6CdhOYlonWjO4KDicmb9bicla3zib6OqTsaFttYV2c1sog/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

小板离变压器太近，会导致小板上的半导体元件容易受热而影响。

  

  

Part 5

工艺处理部分

每一块PCB上都必须用箭头标出过锡炉的方向：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icnxHA9BwGvEeuaBmONVc506Tb1VnNVsBZfupzlO1h2aeGF5tWkMuA1Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

布局时，DIP封装的IC摆放的方向必须与过锡炉的方向成垂直，不可平行，如下图；如果布局上有困难，可允许水平放置IC（SOP封装的IC摆放方向与DIP相反）。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2ic54lpP4fgDN0NzBicKfjdGIxrnkj5amqkIeQMicTFYXteniaNxy3k2y1ag/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

布线方向为水平或垂直，由垂直转入水平要走45度进入。 若铜箔入圆焊盘的宽度较圆焊盘的直径小时，则需加泪滴。 布线尽可能短，特别注意时钟线、低电平信号线及所有高频回路布线要更短。

  

模拟电路及数字电路的地线及供电系统要完全分开。 如果印制板上有大面积地线和电源线区（面积超过500平方毫米），应局部开窗口。如下图：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icibRHvg1icahhXAg5fyiaqAWZIWa3t5xIdnT7UUp1qr4CwUtEC7jBEzNeg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

横插元件（电阻、二极管等）脚间中心，相距必须是300mil，400mil及500mil。（如非必要，240mil亦可利用，但使用于IN4148型之二极管或1/16W电阻上。1/4W电阻由10.0mm开始）跳线脚间中心相距必须是200mil，300mil，500mil，600mil，700mil，800mil，900mil，1000mil。PCB板上的散热孔，直径不可大于140mil。

  

PCB上如果有Φ12或方形12MM以上的孔，必须做一个防止焊锡流出的孔盖，如下图（孔隙为1.0MM）

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icGtZPKYMnEdWSnmoiaj6oF7nzMrK8kGL68iaszXZGj3X8OPC5cgsd8yWg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

在用贴片元件的PCB板上，为了提高贴片元件的贴装准确性，PCB板上必须设有校正标记（MARKS），且每一块板最少要两个标记，分别设于PCB的一组对角上，如下图：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icyQZOdpBHKM8I4ib6es2bR0Sp6N77QGLFDJNoFOHyoxX4v86GofiaOmSQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

  

贴片元件的间距：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2iciaYdalO3s4ial7qctic6LdfkLesOGOPOWr7XfDdo453FqicgB8GPo7yUQw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

贴片元件与电插元件脚之间的距离。如下面两图：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icgGhwgOfy3CjMt9d5Tibj5lXDLwdByX5O8XFiavz83Q6HVTibbH7OHDu6A/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icYJHsfXWgNAr6I2C6RPRT1IH9fO3VbuYFKqZYrYLPuFnSHzk9oalBbw/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

  

SMD器件的引脚与大面积铜箔连接时，要进行热隔离处理，如下图：

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icYuIKqricdcdf1vsx1YSQCsEDwAUWGlgpkPq4nkmcyo1B0o08PicxQUzA/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

元件焊盘中心孔要比器件引线直径稍大一些，焊盘太大易形成虚焊，焊盘外径D一般不少于（d+1.2）mm，d为引线孔径，对高密度的数字电路，焊盘最小直径可取（d+1.0）mm，孔径大于2.5mm的焊盘适当加大。元件摆放整齐、方向尽量一致。

对于PCB板上的贴片元件长轴心线尽量与PCB板长轴心线垂直的方向排列、不易折断。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eRqwF0iavqQpBqcAGibxRzoEQcPKI75e2icJHYz9nDpXug9qS0YfYt3aBG5jkdicaCVCfFF46LUmn6RbFBzZvy609w/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1)

硬件工程师都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：文章来源电子工程师笔记。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群