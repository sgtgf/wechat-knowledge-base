# PCB设计checklist

原创 硬件笔记本 2023-11-23 07:48 四川

> 原文地址: [https://mp.weixin.qq.com/s/7gDxZH2g\_ZAYRcG\_vbqQDw](https://mp.weixin.qq.com/s/7gDxZH2g_ZAYRcG_vbqQDw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

**No.1：资料输入阶段**

  

-   在流程上接收到的资料是否齐全（包括：原理图、\*.brd文件、料单、PCB设计说明以及PCB设计或更改要求、标准化要求说明、工艺设计说明等文件）。
    
-   确认PCB模板是最新的。
    
-   时钟器件布局是否合理。
    
-   确认模板的定位器件位置无误。
    
-   PCB设计说明以及PCB设计或更改要求、标准化是否明确。
    
-   确认外形图上的禁止布放器件和布线区已在PCB模板上体现。
    
-   比较外形图，确认PCB所标注尺寸及公差无误，金属化孔和非金属化孔定义准确。
    
-   确认PCB模板准确无误后最好锁定该结构文件，以免误操作被移动位置。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhIvQadrAUNfNuvzRBLBicCefnuUuicKrXHYR7f7C4AlgtlOj91PyBZwjIgLRfrGcAkXkNEmxD3ej4Q/640?wx_fmt=png&from=appmsg)

  

  

**No.2：布局后检查阶段**

  

**01**

**器件检查**

-   确认所有器件封装是否与公司统一库一致，是否已更新封装库（用viewlog检查运行结果）如果不一致，一定要更新Symbols。
    
-   母板与子板，单板与背板，确认信号对应，位置对应，连接器方向及丝印标识正确，且子板有防误插措施，子板与母板上的器件不应产生干涉。
    
-   元器件是否100%放置。
    
-   打开器件TOP和BOTTOM层的place-bound， 查看重叠引起的DRC是否允许。
    
-   Mark点是否足够且必要。
    
-   较重的元器件，应该布放在靠近PCB支撑点或支撑边的地方，以减少PCB的翘曲。
    
-   与结构相关的器件布好局后最好锁住，防止误操作移动位置。
    
-   压接插座周围5mm范围内，正面不允许有高度超过压接插座高度的元件，背面不允许有元件或焊点。
    
-   确认器件布局是否满足工艺性要求（重点关注BGA、PLCC、贴片插座）。
    
-   金属壳体的元器件，特别注意不要与其它元器件相碰，要留有足够的空间位置。
    
-   接口相关的器件尽量靠近接口放置，背板总线驱动器尽量靠近背板连接器放置。
    
-   波峰焊面的CHIP器件是否已经转换成波峰焊封装。
    
-   手工焊点是否超过50个。
    
-   在PCB上轴向插装较高的元件，应该考虑卧式安装。留出卧放空间。并且考虑固定方式，如晶振的固定焊盘。
    
-   需要使用散热片的器件，确认与其它器件有足够间距，并且注意散热片范围内主要器件的高度。
    

**02**

**功能检查**

-   数模混合板的数字电路和模拟电路器件布局时是否已经分开，信号流是否合理。
    
-   A/D转换器跨模数分区放置。
    
-   时钟器件布局是否合理。
    
-   高速信号器件布局是否合理。
    
-   端接器件是否已合理放置（源端匹配串阻应放在信号的驱动端；中间匹配的串阻放在中间位置；终端匹配串阻应放在信号的接收端）
    
-   信号线以不同电平的平面作为参考平面，当跨越平面分割区域时，参考平面间的连接电容是否靠近信号的走线区域。
    
-   保护电路的布局是否合理，是否利于分割。单板电源的保险丝是否放置在连接器附近，且前面没有任何电路元件。
    
-   确认强信号与弱信号（功率相差30dB）电路分开布设。
    
-   IC器件的去耦电容数量及位置是否合理。
    
-   是否按照设计指南或参考成功经验放置可能影响EMC实验的器件。如：面板的复位电路要稍靠近复位按钮。
    

**03**

**发热**

-   对热敏感的元件（含液态介质电容、晶振）尽量远离大功率的元器件、散热器等热源。
    
-   布局是否满足热设计要求，散热通道（根据工艺设计文件来执行）。
    

**04**

**电源**

-   是否IC电源距离IC过远。
    
-   LDO及周围电路布局是否合理。
    
-   模块电源等周围电路布局是否合理。
    
-   电源的整体布局是否合理。
    
-   ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhIvQadrAUNfNuvzRBLBicCe7IwrGrbrvBqOojhUz0EQSxFTuB2d1srKwHryEWjKDte9ICiajWhwLTg/640?wx_fmt=png&from=appmsg)
    

**05**

**规则设置**

-   是否所有仿真约束都已经正确加到Constraint Manager中。
    
-   是否正确设置物理和电气规则（注意电源网络和地网络的约束设置）。
    
-   Test Via、Test Pin的间距设置是否足够。
    
-   叠层的厚度和方案是否满足设计和加工要求。
    
-   所有有特性阻抗要求的差分线阻抗是否已经经过计算，并用规则控制。
    

  

**No.3：布线后检查阶段**

  

**01**

**数模**

-   数字电路和模拟电路的走线是否已分开，信号流是否合理。
    
-   A/D、D/A以及类似的电路如果分割了地，那么电路之间的信号线是否从两地之间的桥接点上走（差分线例外）。
    
-   必须跨越分割电源之间间隙的信号线应参考完整的地平面。
    
-   如果采用地层设计分区不分割方式，要确保数字信号和模拟信号分区布线。
    

**02**

**时钟和高速部分**

-   高速信号线的阻抗各层是否保持一致。
    
-   高速差分信号线和类似信号线，是否等长、对称、就近平行地走线。
    

-   确认时钟线尽量走在内层。
    
-   确认时钟线、高速线、复位线及其它强辐射或敏感线路是否已尽量按3W原则布线。
    
-   时钟、中断、复位信号、百兆/千兆以太网、高速信号上是否没有分叉的测试点。
    
-   LVDS等低电平信号与TTL/CMOS信号之间是否尽量满足了10H（H为信号线距参考平面的高度）。
    
-   时钟线以及高速信号线是否避免穿越密集通孔过孔区域或器件引脚间走线。
    
-   时钟线是否已满足（SI约束）要求（时钟信号走线是否做到少打过孔、走线短、参考平面连续，主要参考平面尽量是GND；若换层时变换了GND主参考平面层，在离过孔200mil范围之内是GND过孔；若换层时变换不同电平的主参考平面，在离过孔200mil范围之内是否有去耦电容）。
    
-   差分对、高速信号线、各类BUS是否已满足（SI约束）要求。
    
-   ![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjhIvQadrAUNfNuvzRBLBicCeGxnSB5vHqRohFHum6Lw0K2Dt8mXPVJEw1gXYgrkkyv009fNNpZnEuw/640?wx_fmt=png&from=appmsg)
    

**03**

**EMC与可靠性**

-   对于晶振，是否在其下布一层地；是否避免了信号线从器件管脚间穿越；对高速敏感器件，是否避免了信号线从器件管脚间穿越。
    
-   单板信号走线上不能有锐角和直角（一般成 135 度角连续转弯，射频信号线最好采用圆弧形或经过计算以后的切角铜箔）。
    
-   对于双面板，检查高速信号线是否与其回流地线紧挨在一起布线；对于多层板，检查高速信号线是否尽量紧靠地平面走线。
    
-   对于相邻的两层信号走线，尽量垂直走线。
    
-   避免信号线从电源模块、共模电感、变压器、滤波器下穿越。
    
-   尽量避免高速信号在同一层上的长距离平行走线。
    
-   板边缘还有数字地、模拟地、保护地的分割边缘是否有加屏蔽过孔；多个地平面是否用过孔相连；过孔距离是否小于最高频率信号波长的1/20。
    
-   浪涌抑制器件对应的信号走线是否在表层短且粗。
    
-   确认电源、地层无孤岛、无过大开槽、无由于通孔隔离盘过大或密集过孔所造成的较长的地平面裂缝、无细长条和通道狭窄现象。
    
-   是否在信号线跨层比较多的地方，放置了地过孔（至少需要两个地平面）。
    

**04**

**电源和地**

-   如果电源/地平面有分割，尽量避免分割开的参考平面上有高速信号的跨越。
    
-   确认电源、地能承载足够的电流。过孔数量是否满足承载要求（估算方法：外层铜厚1oz时1A/mm线宽，内层0.5A/mm线宽，短线电流加倍）。
    
-   对于有特殊要求的电源，是否满足了压降的要求。
    
-   为降低平面的边缘辐射效应，在电源层与地层间要尽量满足20H原则（条件允许的话，电源层的缩进得越多越好）。
    
-   如果存在地分割，分割的地是否不构成环路。
    
-   相邻层不同的电源平面是否避免了交叠放置。
    
-   保护地、-48V地及GND的隔离是否大于2mm。
    
-   \-48V地是否只是-48V的信号回流，没有汇接到其他地；如果做不到请在备注栏说明原因。
    
-   靠近带连接器面板处是否布10~20mm的保护地，并用双排交错孔将各层相连。
    
-   电源线与其他信号线间距是否距离满足安规要求。
    

**05**

**禁布区**

-   金属壳体器件和散热器件下，不应有可能引起短路的走线、铜皮和过孔。
    
-   安装螺钉或垫圈的周围不应有可能引起短路的走线、铜皮和过孔。
    
-   设计要求中预留位置是否有走线。
    
-   非金属化孔内层离线路及铜箔间距应大于0.5mm(20mil)，外层0.3mm(12mil)，单板起拔扳手轴孔内层离线路及铜箔间距应大于2mm(80mil)。
    
-   铜皮和线到板边 推荐为大于2mm 最小为0.5mm。
    
-   内层地层铜皮到板边 1 ~ 2 mm， 最小为0.5mm。
    

**06**

**焊盘出线**

-   对于两个焊盘安装的CHIP元件（0805及其以下封装），如电阻、电容，与其焊盘连接的印制线最好从焊盘中心位置对称引出，且与焊盘连接的印制线必须具有一样的宽度，对于线宽小于0.3mm(12mil)的引出线可以不考虑此条规定。
    
-   与较宽印制线连接的焊盘，中间最好通过一段窄的印制线过渡（0805及其以下封装）。
    
-   线路应尽量从SOIC、PLCC、QFP、SOT等器件的焊盘的两端引出。
    

**07**

**丝印**

-   器件位号是否遗漏，位置是否能正确标识器件。
    
-   器件位号是否符合公司标准要求。
    
-   确认器件的管脚排列顺序、第1脚标志、器件的极性标志、连接器的方向标识的正确性。
    
-   母板与子板的插板方向标识是否对应。
    
-   背板是否正确标识了槽位名、槽位号、端口名称、护套方向。
    
-   确认设计要求的丝印添加是否正确。
    
-   确认已经放置有防静电和射频板标识（射频板使用）。
    

**08**

**编码/条码**

-   确认PCB编码正确且符合公司规范。
    
-   确认单板的PCB编码位置和层面正确（应该在A面左上方,丝印层）。
    
-   确认背板的PCB编码位置和层面正确（应该在B右上方,外层铜箔面）。
    
-   确认有条码激光打印白色丝印标示区。
    
-   确认条码框下面没有连线和大于0.5mm导通孔。
    
-   确认条码白色丝印区外20mm范围内不能有高度超过25mm的元器件。
    

**09**

**过孔**

-   在回流焊面，过孔不能设计在焊盘上（常开窗的过孔与焊盘的间距应大于0.5mm (20mil)，绿油覆盖的过孔与焊盘的间距应大于0.1 mm (4mil)，方法：将Same Net DRC打开，查DRC，然后关闭Same Net DRC）。
    
-   过孔的排列不宜太密，避免引起电源、地平面大范围断裂。
    
-   钻孔的过孔孔径最好不小于板厚的1/10。
    

**10**

**工艺**

-   器件布放率是否100%，布通率是否100%（没有达到100%的需要在备注中说明）。
    
-   Dangling线是否已经调整到最少，对于保留的Dangling线已做到一一确认。
    
-   工艺科反馈的工艺问题是否已仔细查对。
    

**11**

**大面积铜箔**

-   对于Top、bottom上的大面积铜箔，如无特殊的需要，应用网格铜（单板用斜网，背板用正交网，线宽0.3mm (12 mil)、间距0.5mm (20mil)）。
    
-   大面积铜箔区的元件焊盘，应设计成花焊盘，以免虚焊；有电流要求时，则先考虑加宽花焊盘的筋，再考虑全连接。
    
-   大面积布铜时，应该尽量避免出现没有网络连接的死铜（孤岛）。
    
-   大面积铜箔还需注意是否有非法连线，未报告的DRC。
    

**12**

**测试点**

-   各种电源、地的测试点是否足够（每2A电流至少有一个测试点）。
    
-   确认没有加测试点的网络都是经确认可以进行精简的。
    
-   确认没有在生产时不安装的插件上设置测试点。
    
-   Test Via、Test Pin是否已Fix（适用于测试针床不变的改板）。
    

**13**

**DRC**

-   Test via 和Test pin 的Spacing Rule应先设置成推荐的距离，检查DRC，若仍有DRC存在，再用最小距离设置检查DRC。
    
-   打开约束设置为打开状态，更新DRC，查看DRC中是否有不允许的错误。
    
-   确认DRC已经调整到最少，对于不能消除DRC要一一确认。
    

**14**

**光学定位点**

-   确认有贴装元件的PCB面已有光学定位符号。
    
-   确认光学定位符号未压线（丝印和铜箔走线）。
    
-   光学定位点背景需相同，确认整板使用光学点其中心离边≥5mm。
    
-   确认整板的光学定位基准符号已赋予坐标值（建议将光学定位基准符号以器件的形式放置），且是以毫米为单位的整数值。
    
-   管脚中心距<0.5mm的IC，以及中心距小于0.8 mm(31 mil)的BGA器件，应在元件对角线附近位置设置光学定位点
    

**15**

**阻焊检查**

-   确认是否有特殊需求类型的焊盘都正确开窗（尤其注意硬件的设计要求）。
    
-   BGA下的过孔是否处理成盖油塞孔。
    
-   除测试过孔外的过孔是否已做开小窗或盖油塞孔。
    
-   光学定位点的开窗是否避免了露铜和露线。
    
-   电源芯片、晶振等需铜皮散热或接地屏蔽的器件，是否有铜皮并正确开窗。由焊锡固定的器件应有绿油阻断焊锡的大面积扩散。
    

**16**

**钻孔图**

-   Notes的PCB板厚、层数、丝印的颜色、翘曲度，以及其他技术说明是否正确。
    
    叠板图的层名、叠板顺序、介质厚度、铜箔厚度是否正确；是否要求作阻抗控制，描述是否准确；叠板图的层名与其光绘文件名是否一致。
    
-   将设置表中的Repeat code 关掉，钻孔精度应设置为2-5。
    
-   孔表和钻孔文件是否最新（改动孔时，必须重新生成）。
    
-   孔表中是否有异常的孔径，压接件的孔径是否正确;孔径公差是否标注正确。
    
-   要塞孔的过孔是否单独列出，并标注“filled vias”。
    

**17**

**光绘**

-   光绘文件输出尽量采用RS274X格式，且精度应设置为5:5。
    
-   art\_aper.txt 是否已最新（274X可以不需要）。
    
-   输出光绘文件的log文件中是否有异常报告。
    
-   负片层的边缘及孤岛确认。
    
-   使用光绘检查工具检查光绘文件是否与PCB 相符（改板要使用比对工具进行比对）。
    

**18**

**文件齐套**

-   PCB文件：产品型号\_规格\_单板代号\_版本号.brd。
    
-   背板的衬板设计文件：产品型号\_规格\_单板代号\_版本号-CB\[-T/B\].brd。
    
-   PCB加工文件：PCB编码.zip（含各层的光绘文件、光圈表、钻孔文件及ncdrill.log;拼板还需要有工艺提供的拼板文件\*.dxf），背板还要附加衬板文件：PCB编码-CB\[-T/B\].zip（含drill.art、\*.drl、ncdrill.log）。
    
-   工艺设计文件：产品型号\_规格\_单板代号\_版本号-GY.doc。
    

-   SMT坐标文件：产品型号\_规格\_单板代号\_版本号-SMT.txt（输出坐标文件时，确认选择 Body center，只有在确认所有SMD器件库的原点是器件中心时，才可选Symbol origin）。
    
-   PCB板结构文件：产品型号\_规格\_单板代号\_版本号-MCAD.zip（包含结构工程师提供的.DXF与.EMN文件）。
    
-   测试文件：产品型号\_规格\_单板代号\_版本号-TEST.ZIP（包含testprep.log 和 untest.lst或者\*.drl测试点的坐标文件）。
    
-   归档图纸文件：产品型号规格-单板名称-版本号.pdf（包括：封面、首页、各层丝印、各层线路、钻孔图、背板含有衬板图）。
    

**19**

**标准化**

-   确认封面、首页信息正确。
    
-   确认图纸序号（对应PCB各层顺序分配）正确的。
    
-   确认图纸框上PCB编码是正确的。 
    

硬件工程师及从业者都在关注我们

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibv0jw5viaBYm5nD5TdLGkxJ7chbkrvv8w6Z2kZ2c1DyEzpdMibNDBHTicQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5054496377466782&random=0.5133948505097592&random=0.7769476948866769&random=0.6468124489998228&random=0.06667202688917673) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibftdyHGriaP8kZBib744qBp5uw6InGEhRzImvabUhoiab90dPsWmxicQ8icw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.904452114270103&random=0.9160747576157886&random=0.648690737236044&random=0.35236404612537364&random=0.7237151732939693) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibia0CVNol5icAKhrugad81mQkcScvoUgqkLib7CeqaLKM67CYlpnEuByDQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.38981271029841835&random=0.1605435912341453&random=0.3886610286024954&random=0.14231024487351296&random=0.84335213885373) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtqSHzpEw5UxfkKibNLooMbR8OkAJST2ysfic4qZJLA4FHESOULSqe8hg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.7322134073819782&random=0.9765188965971499&random=0.4768783745730849&random=0.7034455287790187&random=0.20096127587485246) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibmT7GSMXo7pibcqg5qoxQbNXm5guFIgAYofq0fNGy1p2icicFO6IrkHvdA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.21103238255962142&random=0.4819954240231532&random=0.9493330616615481&random=0.30080924810850385&random=0.14814862677802054) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibKMFicAKxMETWjpP3KD0ribaicicqcc21VtOh9yof80kpLGm75CFOoaPibxA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.11665064872242814&random=0.24650296453132392&random=0.09450394713146593&random=0.5427719894354532&random=0.4485686292360689) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibEXk4adO3MMV21FV1vPZFsAmSUR87W82W45pnJ7pTcxwjQtx5epKQxw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5061542588694028&random=0.7195812446453251&random=0.14580903127691824&random=0.10960684530002984&random=0.729464641551083) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib2juaHkRNwUWYn4AaQLK3zWichymELV11lPafwXFGB8zUezZa7M8QgLA/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.8890979885256949&random=0.5618908447013322&random=0.8320467362132846&random=0.03610058117467263&random=0.590024396487761)

![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVib9KD1YnYQnDL40p4frXm7Znlnve1InQuDrTeaxd4j1Ixhv61pFBmHUw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.44832742996567765&random=0.7246591515962928&random=0.43812030576078564&random=0.3431586338772843&random=0.5236152018157212) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibDNHnFoE8BibGpDq8O2yS1Pw3kKXZDKsicubAtJtKUzJEwb9ntve07ibxg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.4188635323163339&random=0.8591335926528374&random=0.634229425088352&random=0.6374058713153454&random=0.36623278854146557) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibpXQDyg5Y0PtAG10IwRhNnrSdGicQlTgB9uoPM2o57IJ9Ewq0wceyMeQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.16111233120603652&random=0.22716502488063006&random=0.061382635385311524&random=0.3150403072690464&random=0.22462879228240218) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibtoibkSWEuCrqOp2CDzH4WPicB02eUeiazpdUvgGMyHicHlqxic4mysClB6w/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3002982208935414&random=0.4051465421808764&random=0.8580815150661867&random=0.01942252714771464&random=0.9782769224552956) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibhaqj5IIhqg2ia8cEBJn3l3cXcMicnVsrn0PN24yxica3H1U0iaqR7PhUew/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3084112606789575&random=0.35073840820589464&random=0.1784751385805421&random=0.6162656292383069&random=0.931359908363258) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibJH5dxjiaNQ0ePAHaJsDKfsYC7SIqbAMbCoodImJ2ejKcHhH03Hq7Wtw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.3906515119996328&random=0.6215738809573381&random=0.9612535238547657&random=0.5542414285478323&random=0.7860076265242306) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibcYhExJhZI1aicmyDMAZt4icbnQuOW7IicSAdq6wrofgSNNQgIibweMNWEQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.5436065950715283&random=0.4242095548217244&random=0.4158422582858312&random=0.2788540531248822&random=0.644775451296052) ![](https://mmbiz.qpic.cn/mmbiz_gif/C8CLmfneqjHATQI6gMPO3oP1yOSG0pVibNVsExqHPfmQILYOcu4ibAKGXHMht5PPnx0RkNCYRv1sPmTr2n0aSIsw/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&random=0.6207533412411326&random=0.1846190526935092&random=0.6100512744379307&random=0.7171869860499893&random=0.47058666701129437)

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。