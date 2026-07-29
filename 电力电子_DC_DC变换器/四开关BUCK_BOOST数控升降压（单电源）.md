# 四开关BUCK-BOOST数控升降压（单电源）

原创 电路一点通 2025-06-11 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/1Le4TGRqOi7G-OuLBpCD7g](https://mp.weixin.qq.com/s/1Le4TGRqOi7G-OuLBpCD7g)

> 详细介绍了使用TPS55165作为辅助电源的电路设计，包括四开关BUCK-BOOST拓扑、IR2104驱动电路、INA240电流和电压采样，以及STM32F407VET6主控的配置。还涵盖了PID控制用于Buck和Boost模式切换的应用。

## BUCK-BOOST四开关硬件部分

  

-   [![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_000_b7a267b63ce3.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

### 1.辅助电源

#### TPS55165升降压电路

        TPS5516x-Q1 系列器件是一款高电压同步降压/升压直流/直流转换器。该器件通过多种不同的输入电源（如汽车电池）提供稳定的电源输出。降压/升压重叠控制可确保以最佳的效率在降压和升压模式之间自动转换。TPS55165-Q1 输出电压可以设置为 5V 或 12V 固定电平。TPS55160-Q1 和 TPS55162-Q1 器件具有通过外部电阻分压器设置的 5.7V 至 9V 可配置输出电压。  
  

        本此使用TPS55165稳定输出5V和12V，这款芯片输出电流不大，正好用作辅助电源，输出功率较小（大多数集成的升压、降压、升降压芯片在低功率的时候效率较低），所以选择使用芯片的低功耗模式。电路图如下：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_001_5c1bf24981eb.png)  
        下面以5V电路为例讲解一下，芯片如何实现功能。

        使用半岛小芯打开TPS55165的芯片手册，找到引脚功能表。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_002_719208869054.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_003_432a6bc5cf70.png)

**引脚：**

1(PGND)：

连接功率地

11(VREG\_Q)：

紧连VREG，4.7uF去耦到地

2(L1)：

与L2之间连接电感

12(VREG)：

芯片升降压的栅极驱动电源

3(BST1)：

与L1之间连接100nF电容

13(GND)：

模拟地

4(VINP)：

电源

14(VOS\_FB)：

5V：接地；12V：接VREG

5(VINL)：

内部偏置供电输入

15(PG)：

高：工作正常

6(IGN)：

使能脚，高电平

16(VO\_SEN)：

输出电压检测，连接VOUT

7(PS)：

高：低功耗；低：正常

17(VOUT)：

OUT输出带载

8(IGN\_PWRL)：

高：使能脚锁存

18(GND)：

模拟地

9(SS\_EN)：

高：使能扩频特性

19(BST2)：

与L2之间连接100nF电容

10(PG\_DLY)：

PG延时，10k~100k下拉

20(L2)：

与L1之间连接电感

**21（EP/PowerPAD）：焊接到电源地，散热**

        以TPS55165为例，此辅助电源IGN\_PWRL悬空处理，大概功能如上所示。需要使用TPS55160、TPS55162的可自行查找芯片手册。

**注意：**使用过程中注意到TPS55165有个小小的bug，芯片手册中工作条件这里提到，VINP和VINL在芯片唤醒后的工作电压才是后面所给的范围。

  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_004_31ce851489e9.png)

  
        而下图提到的IGN唤醒电压是2.5V~3.7V，经典值3.1V。而我在使用过程中发现，大多数时候在5V以下，辅助电源输出12V的部分并没有正常启动。如果要在3V左右工作，要先将输入电压调节到5V及以上，再将输入电压调节到3V才可以正常使用。

  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_005_f87feec5b553.png)

  
        芯片手册提到有关欠压锁定的参数，输出电压设定为12V时，TPS55165的欠压锁定范围刚好是在4V以下，这或许在芯片使用时导致冲突，使得输出电压较低，输出为12V时不能正常工作。

  

### 2.BUCK-BOOST主拓扑

#### 四开关拓扑

        四开关BUCK\_BOOST，顾名思义就是四个MOS管（开关管）。其实就是将一个半桥BUCK电路和一个半桥BOOST电路连接在一起，通过对四个开关管进行控制，实现数控升降压。主拓扑电路如图所示：  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_006_dacb40f7d2eb.png)

采用电阻分压采样，3m![\Omega](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_007_ae90ba41e0dc.png)电流采样电阻。

         **电容：**电路中输入、输出端滤波电容较多，使用的是X5R、X7R电容，为的是提高系统整体的效率，四开关的控制模式会导致效率相较于BUCK、BOOST的较低。陶瓷电容相较于铝电解电容，阻抗、允许纹波电流、可靠性等功能较好，但价格较贵。使用陶瓷电容系统效率较高，图中多个小容值的电容并联，根据实际形况适当加大电容容值。  
        **改善：**原理图、PCB设计中加入了续流二极管（D3、D4、D7、D8），RC吸收电路（C1\\R3、C2\\R4、C14\\R12、C15\\R13），快速关断二极管（D1、D2、D5、D6）。

        一般先不焊接RC吸收和快速关断二极管，根据实际情况添加焊接，调试RC吸收元件参数。电路图中的二极管等元件要根据实际应用来调节型号。

这里不再对阻尼电阻、泄流电阻、快速关断二极管、续流二极管、RC吸收等进行讲解。

### 3.驱动电路

#### IR2104驱动电路

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_008_b23a89b84fb7.png)

        使用经典的给一出二互补波的单路PWM驱动芯片IR2104，将SD使能脚引出和PWM引脚一同由单片机控制。IR2104自带死区控制，死区时间不可通过代码设定。

**注意：**使用IR2104时，如果将SD引脚直接接到12V上，按理来说IR2104是可以正常工作的。但是当单片机没有给PWM波时，或者PWM波为全低电平时，HO输出低电平，LO输出高电平，此时会导致HO所接上管关闭，LO所接下管导通；这种情况会导致控制BOOST拓扑时，上管常关，下管常开，会将电源的正极通过下管直接短接到负极，电源就过流，存在很大的风险，所以选择将SD引脚引出，通过单片机同时控制PWM、SD引脚，避免电源短接。也可以使用EG3112双路PWM驱动芯片，可以直接避免这种情况。

### 4.采样电路

#### （1）INA240电流采样

        INA240 器件是一款电压输出、电流检测放大器，具有增强型 PWM 抑制功能，可在独立于电源电压的 –4V 至 80V 宽共模电压范围内检测分流器电阻上的压降。负共模电压允许器件的工作电压低于接地电压，从而适应典型螺线管应用 的反激周期低功耗是一个关键问题。增强型 PWM 抑制功能可为使用脉宽调制 (PWM) 信号的系统（例如，电机驱动和螺线管控制系统）中的较大共模瞬变 (ΔV/Δt) 提供高水平的抑制。凭借该功能，可精确测量电流，而不会使输出电压产生较大的瞬变及相应的恢复纹波。  
放大倍数：  
INA240A1：20倍  
INA240A2：50倍  
INA240A3：100倍  
INA240A4：200倍

INA240可以进行高、低端采样，还可以通过REF引脚为输出信号添加偏置电压。  
  

下图以VS作为偏置电压，芯片内部集成的REF1和REF2阻值相等。  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_009_53650738d07c.png)

下图通过拨码开关，使得芯片的REF2引脚接3.3V，REF1引脚接地，此时偏置电压为1.65V。  
  
![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_010_831e64866867.png)

#### （2）电压采样电路

1.可以直接使用电阻分压采样。

        注意：电阻分压采样电路的位置和电流采样电阻的位置是有讲究的。建议使用第二种接法。

        第一种接法如下图所示：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_011_7b4de36a9797.png)

        单片机的地连接图左下角的GND，电压采样点为20K滑变与1K电阻中间，例如将滑变调节到9K，空载时稳定输出电压为20V，此时电压采样点电压为2V；但当带载为10![\Omega](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_014_ae90ba41e0dc.png)时，假设仍然稳定输出20V，输出电流为2A，此时电压采样点的电压是（2-0.01\*2）/ 10  + 0.01\*2= 0.2V，采样电压仍然为0.2V，但此时输出电压（|OUT+|-|OUT-|）不再是20V，而是20-0.02=19.8V。而功率回路又必须经过电流采样电阻，换一个接法会将误差大大减小，第二种接法如下图所示：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_013_ed5fcbaa2428.png)

        此时将电流采样电阻的位置改变，再看输出电压，仍然是单片机的地连接图左下角的GND，电压采样点为20K滑变与1K电阻中间，将滑变调节到9K（图中的滑变建议换成固定电阻），空载时稳定输出电压为20V，此时电压采样点电压为2V；但当带载为10![\Omega](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_012_ae90ba41e0dc.png)时，假设仍然稳定输出20V，输出电流为2A，此时电压采样点电压仍然为2.0V，此时OUT-输出端电压为0.02V，最终输出电压（|OUT+|-|OUT-|）= 20 -0.02=19.98V，而不是19.8V，误差大大减小。

        而使用差分电路，可以完全解决此问题。

 2.使用差分电路，将电压值缩小一定倍数共给单片机采集。

        下图使用差分电路将电压缩小15倍，因为通过差分采集输出端电压，控制目标值就是输出端电压，所以输出端能稳定20.00V，上面介绍的使用分压电阻的方法是因为控制目标值一直是输出端正极对地的电压，而不是输出端两端的电压，所以差分放大采集更准确。

        注：要合理选择两种采集方式，需要改善整体效率的时候可以使用分压电阻的第二种接法，需要输出电压特别准确的时候可以使用差分采样。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_015_f149a3aef2b5.png)

到这里，硬件电路的介绍就结束了。

## BUCK-BOOST四开关软件部分

### 1.STM32F407VET6主控CubeMX配置

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_016_373847771205.png)

#### （1）时钟树配置

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_017_8cdb216b1284.png)

开启定时器TIM2：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_018_2c254b8a2e90.png)

使能中断：

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_019_b74b7928b442.png)

#### （2）PWM输出

使用高级定时器TIM1，PWM频率设置为20K。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_020_862eabad05d7.png)![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_021_c809f80e9599.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_022_fd0271805689.png)

#### （3）ADC+DMA

开启四个通道+DMA传输采集各个信号。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_023_22c4b33a1453.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_024_bd37b5a554c7.png)

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_025_75ab03665e38.png)

### 2.软件代码部分

**Buck-Boost控制部分的重心在系统在Buck模式和Boost模式间自动平滑切换。**

#### （1）定时器TIM2中断回调

`   void HAL_TIM_PeriodElapsedCallback(TIM_HandleTypeDef *htim)  {  	if (htim->Instance == htim2.Instance) //TIM2中断  10K  	{      		ADC_Value_Get();  		ADC_Value_Filt();      		VOUT = ADC_Filt_Value[0]*0.016156f; //输出  		AOUT = ADC_Filt_Value[1]*0.005090f;      		VIN = ADC_Filt_Value[2]*0.010486f; //输入  		AIN = (ADC_Filt_Value[3])*0.000815f;      		if (action == 1)  		{  			PWM_SETA = Incremental_PID(&PID_DC_I,AIN,SETA);      			if (mode==1)//恒流模式  			{			  				BUCK_BOOST();                       //BUCK-BOOST模式  			}  			if (mode==2)//恒阻模式  			{	  				SETA = VIN / SETR;  				BUCK_BOOST();                       //BUCK-BOOST模式  			}  			if (mode==3)//恒功率模式  			{  				SETA = SETW / VIN;			  				BUCK_BOOST();                       //BUCK-BOOST模式  			}  		}		  	}  }        `

#### （2）ADC采集、滤波

void ADC\_Value\_Get(void) //初始ADC值获取函数 

{

uint8\_t i = 0;

uint8\_t j = 0;

  

HAL\_ADC\_Start\_DMA(&hadc1,(uint32\_t \*)ADC\_Get\_Value,ADC\_Sample\_Point);

// flag2++;

for(i = 0; i < ADC\_Filt\_Point; i++)

{

for(j = 0; j < CHANNEL; j++)

{

ADC\_Sample\[j\]\[i\] = ADC\_Get\_Value\[j + CHANNEL\*i\];

}

} 

}

  

void ADC\_Value\_Filt(void) //滤波之后拟合函数，得到当前中断时的AC采样信号真实值 

{

uint8\_t i = 0;

uint8\_t j = 0;

  

// flag3++;

for(i = 0; i < CHANNEL; i++)

{

// for(j = 0; j < ADC\_Filt\_Point; j++)

// {

// ADC\_Filt\_Value\[i\] = KalmanFilter(&KFStruct, ADC\_Sample\[i\]\[j\])\*3.3/4095;

// }

ADC\_Filt\_Value\[i\] = ADC\_Filter(ADC\_Sample\[i\]); //\*AC\_RMS.Ratio\[i\]\*3.3/4096当采集DC信号时数组ADC\_Filt\_Value即为采样值 

}

}

####   

#### （3）PID闭环控制

        pid.c

增量式PID。

####   

#include "pid.h"

  

PID\_TypeDef  PID\_DC\_V\_BO;

PID\_TypeDef  PID\_DC\_V\_BU;

PID\_TypeDef  PID\_DC\_I\_BO;

PID\_TypeDef  PID\_DC\_I\_BU;

PID\_TypeDef  PID\_DC\_V;

PID\_TypeDef  PID\_DC\_I;

  

void PID\_Init(void)    //PID参数初始化

{

PID\_DC\_V.Kp = 0.5f;

    PID\_DC\_V.Ki = 0.2f;

    PID\_DC\_V.Kd = 0;

PID\_DC\_V.Result\_max = 8399;

PID\_DC\_V.Result\_min = 1;

  

PID\_DC\_I.Kp=0.01f;                

    PID\_DC\_I.Ki=10;

PID\_DC\_I.Kd=0;      

PID\_DC\_I.Result\_max=8399;

PID\_DC\_I.Result\_min=1;

}

  

/\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

函数功能：增量PID控制器

入口参数:PID名称，测量值，目标值

返回  值：计算结果

根据增量式离散PID公式 dac+=Kp\[e（k）-e(k-1)\]+Ki\*e(k)+Kd\[e(k)-2e(k-1)+e(k-2)\]

e(k)代表本次偏差 

e(k-1)代表上一次的偏差  以此类推 

Result代表增量输出

Dac+=Kp\[e（k）-e(k-1)\]+Ki\*e(k)

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*/

float Incremental\_PID(PID\_TypeDef \*PID,float Measured,float Target)

{

PID->Err = Target - Measured;                                                          //计算偏差

PID->Result += PID->Kp \* (PID->Err - PID->Now\_Err)

\+ PID->Ki \* PID->Err;

  

PID->Previous\_Err=PID->Now\_Err;                                                       //保存上次偏差

PID->Now\_Err=PID->Err;                                                             //保存本次偏差 

  

if( PID->Result> PID->Result\_max)       PID->Result= PID->Result\_max;                   //输出限幅

else if( PID->Result< PID->Result\_min)  PID->Result = PID->Result\_min;

  

return PID->Result;  

}

#### （4）BUCK-BOOST模式切换

`   1.              void BUCK_BOOST(void)                           //BUCK-BOOST自动切换      2.              {      3.              if (Work_flag ==0)      4.              	{      5.              		BUCK_mode();      6.              	}      7.              else      8.              	{      9.              		BOOST_mode();      10.                	}       11.                }       12.                         13.                void BUCK_mode(void)                            //BUCK模式       14.                {       15.                	TIM1->CCR1= (uint32_t)PWM_SETA;	        //TIM120K CH1闭环控制       16.                	TIM1->CCR2=8399;       17.           18.                if ((TIM1->CCR1) ==8399)       19.                	{       20.                		Work_flag =1;       21.                	}       22.                }       23.                         24.                void BOOST_mode(void)                          //BOOST模式       25.                {       26.                	TIM1->CCR1=8399;       27.                	TIM1->CCR2=8399-((uint32_t)PWM_SETA);	    //TIM120K CH2闭环控制       28.           29.                if ((TIM1->CCR2) ==8300)       30.                	{       31.                		Work_flag =0;       32.                	}       33.                }         `

        这里平滑切换模式的思路：TIM1通道一输出的PWM波控制Buck两管，通道二输出的PWM波控制Boost两管，初始默认BUCK模式，也就是将下图中Q3管常开、Q4管常关BOOST部分不工作，PID调节左边Q1、Q2两管的占空比，当PID不能将系统调节到目标值时，会将TIM1的通道一输出的PWM占空比拉满也就是将TIM1的CCR1的值拉到8399，判断到TIM1->CCR1的值拉满，切换到Boost模式；同理，当判断到TIM1->CCR2的值拉满，切换到Buck模式。

        **注：**当我通过判断 TIM1->CCR1 ==  8399 和 TIM1->CCR2 ==  8399 来切换模式时，发现当从BUCK切换到BOOST是没有问题的，但是不能从BOOST模式切换到BUCK模式，考虑到可能是PID的问题，我将 TIM1->CCR2 ==  8399 改为 TIM1->CCR2 ==  8300 就可以实现平滑切换了。

![](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_026_6a37c8b3de06.png)

## 这篇记录了个大概，大家有什么问题和意见都可以提出来，后续会进行补充。

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

-   **电路****[资料汇集](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   **[电气电工、工控自动化（PLC）、单片机等资料](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)**
    
-   **[DC/DC变换电路（非隔离6大DC/DC电路）](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247547392&idx=2&sn=629be8026bec49f01abd1f3a8e64517e&scene=21#wechat_redirect)**
    
-   **[开关电源开关管(MOS管)驱动电路？你都知道哪一种？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247547385&idx=1&sn=4b8c56022c47fa497cd8554a6a1a9542&scene=21#wechat_redirect)**
    
-   **[设计多种PMOS防倒灌电路，防止电流逆向流动](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247547373&idx=1&sn=019c651169793917c23d635991e0b3f1&scene=21#wechat_redirect)**
    
-   **2025保姆车MPV汽车销量TOP10车型，选购指南**
    
-   **[汽车无级变速器CVT结构与原理示意图](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247521604&idx=2&sn=7ba003c7f6d207a9a4942c1b6d70cf66&scene=21#wechat_redirect)**
    

![图片](D:\电脑文件\公众号知识库\电力电子_DC_DC变换器\四开关BUCK_BOOST数控升降压（单电源）_images\img_027_e00e0e593c66.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️