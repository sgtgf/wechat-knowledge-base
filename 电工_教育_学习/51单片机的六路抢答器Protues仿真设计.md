# 51单片机的六路抢答器Protues仿真设计

原创 电路一点通 2025-02-07 14:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/ykWN7eI4CGpTpIRZ1zxeuQ](https://mp.weixin.qq.com/s/ykWN7eI4CGpTpIRZ1zxeuQ)

**目录**

一、设计背景

二、实现功能

三、仿真演示

四、源程序（部分）  
  

* * *

## **一、设计背景**

![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_000_678abc58c5d8.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_001_8a5f1d581bee.png)

**👇👇👇更多技术资料👇👇👇**![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_002_974df1cceac9.png)

##         近年来随着科技的飞速发展，单片机的应用正在不断的走向深入。本文阐述了基于51单片机的六路抢答器设计。本设计中，51单片机充当了核心控制器的角色，通过IO口与各个功能模块相连接。按键模块负责检测参与者的抢答动作，当有人按下抢答按钮时，会通过IO口电平的变化通知单片机，单片机会记录按键的次序，并通过数码管显示当前的抢答结果。

        为了保证抢答过程的准确性和公平性，设计中还需要考虑到以下因素。首先，按键模块需要具备快速响应和高可靠性，以确保抢答者的动作能够被准确地捕捉到。其次，显示屏模块需要能够实时更新抢答结果，并显示相应的信息，比如参与者的编号和抢答时间。最后，在电路连接方面，需要注意各个模块之间的线路布局，以避免信号干扰和电气问题。

       软件系统采用C语言编写程序，包括显示程序，定时中断服务，延时程序等，并在KEIL5中调试运行，硬件系统利用PROTEUS8.13强大的功能来实现，简单切易于观察，在仿真中就可以观察到实际的工作状态。  

## **二、实现功能**

##         以51单片机为控制核心，设计一种六路抢答器。整个系统包括MCU、晶振电路、时钟电路、蜂鸣器控制电路、指示灯控制电路、译码电路、独立按键电路、矩阵键盘以及数码管显示电路等。可具体实现以下功能：

     （1）设定矩阵键盘的6个键作为6位选手的抢答按键,键的编号即选手编号，为1~6号;设定1个独立按键作为抢答开始键;选择四位数码管作为倒计时、选手编号显示;选择蜂鸣器作为正常抢答和犯规抢答的提示。  
     （2）只有当裁判按下开始键时才可以进入正常抢答，否则属于犯规抢答。抢答完毕，或计时时间到，停止抢答。当裁判按下抢答开始键时，开始抢答，计时器开始倒计时，10秒倒计期间，若有抢答，则停止计时，数码管显示选手号;若倒计时结束时无人抢答，则停止抢答。  
     （3）正常抢答时，有效抢答指示灯亮起，蜂鸣器播放音乐1，低位数码管数码管显示抢答选手的编号，高位数码管开始60s倒计时，60s时间到，数码管显示0-00。违规抢答时，无效抢答指示灯亮起，蜂鸣器播放音乐2，低位数码管显示违规抢答选手编号，高位数码管显示抢答倒计时时间10s。  
  

## **三、仿真演示**

## 未运行仿真时，数码管不显示。

![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_003_d0a81f8b9b9c.png)

运行仿真后，进入准备界面，数码管显示0-10。

![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_004_b4fc1726f594.png)

按下启动按键，进入抢答界面，开始10秒抢答倒计时。

![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_005_cf6c918bfd7e.other)

在抢答倒计时范围内，按下序号为1~6的选手抢答按键，抢答有效指示灯亮起，蜂鸣器播放《两只老虎》的旋律，低位数码管上显示抢答选手序号，高位数码管开始60s倒计时。

![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_006_1d3d8925dde9.png)

当裁判未按下开始键时，若有选手抢答视为犯规抢答，抢答无效指示灯亮起，蜂鸣器播放《粉刷匠》的旋律，低位数码管显示犯规选手的编号,高位数码管显示10。

![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_007_052b11548084.png)

正常抢答还是犯规抢答结束后，按下复位按钮恢复到准备界面，以便进行下一次抢答。

![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_008_4f03321d8b93.png)

  

## **四、源程序（部分）**

  

`#include "reg52.h"   #include "delay.h"   #include "smg.h"   #include "timer.h"      sbit Beep = P1^5;	//六位选手   sbit key1 = P1^1;	   sbit key2 = P1^2;   sbit key3 = P1^3;   sbit key4 = P1^4;   sbit key5 = P1^5;	   sbit key6 = P1^6;   sbit EffectLED = P2^6;  //抢答有效指示灯   sbit UeffectLED = P2^7; //抢答无效指示灯   sbit start_stop = P3^1;	//抢答按钮      sbit L1 = P1^7;   sbit L2 = P1^6;       sbit R1 = P1^3;   sbit R2 = P1^2;   sbit R3 = P1^1;   sbit R4 = P1^0;      //**《两只老虎》   uint8 code  x0[]={1+7,2+7,3+7,1+7,1+7,2+7,3+7,1+7,3+7,4+7,5+7,3+7,4+7,5+7,5+7,6+7,5+7,4+7,3+7,1+7,5+7,6+7,5+7,4+7,3+7,1+7,1+7,5,1+7,1+7,5,1+7};   uint8 code  y0[]={4,4,4,4,4,4,4,4,4,4,8,4,4,8,3,1,3,1,4,4,3,1,3,1,4,4,4,4,8,4,4,8};   //**《粉刷匠》   uint8 code  x1[]={5+7,3+7,5+7,3+7,5+7,3+7,1+7,2+7,4+7,3+7,2+7,5+7,5+7,3+7,5+7,3+7,5+7,3+7,1+7,2+7,4+7,3+7,2+7,1+7,2+7,   					2+7,4+7,4+7,3+7,1+7,5+7,2+7,4+7,3+7,2+7,5+7,5+7,3+7,5+7,3+7,5+7,3+7,1+7,2+7,4+7,3+7,2+7,1+7};   uint8 code  y1[]={4,4,4,4,4,4,8,4,4,4,4,16,4,4,4,4,4,4,8,4,4,4,4,16,4,4,4,4,4,4,8,4,4,4,4,16,4,4,4,4,4,4,8,4,4,4,4,16};      	//以下定义低中高共21个音阶的定时参数,通过定时器来实现不同音频的输出   uint8 code ti[21][2]={   	{0xf8,0x8c},{0xf9,0x5c},{0xfa,0x14},{0xfa,0x67},{0xfb,0x04},{0xfb,0x90},{0xfc,0x0c},  //低音   	{0xfc,0x44},{0xfc,0xb6},{0xfd,0x09},{0xfd,0x34},{0xfd,0x82},{0xfd,0xc8},{0xfe,0x06},  //中音   	{0xfe,0x22},{0xfe,0x56},{0xfe,0x8c},{0xfe,0x9a},{0xfe,0xc1},{0xfe,0xe4},{0xff,0x03}}; //高音      uint8 th,tl,i;   _bool action = 0;   _bool key1_flag = 0;   _bool key2_flag = 0;   _bool key3_flag = 0;   _bool key4_flag = 0;   _bool key5_flag = 0;   _bool key6_flag = 0;   _bool start_stop_flag = 0; //抢答标志位   _bool cntflag=0;   uint8 second = 10;	//时间   uint8 timer0_count = 0;	//定时器1计数值   uint8 number = 0; //队号   uint8 number_display = 0;	//队号显示   uint8 a = 0xff;	//按键值   	   uint8 key_scan8(void);   void start_stop_keyscan(void);   void music1(void);//演奏《两只老虎》   void music2(void);//演奏《粉刷匠》   void keycheckdown(void);				/* 反转法键盘扫描 */   /*-----------------------------------------------------------   主函数   ------------------------------------------------------------*/   void SMG_delay(uint8 t)   {   	while(t--)   	{   	   display(number_display,second);	   	}   }      void main()   {   	ConfigTimer();//定时器初始化   	while(1)   	{   		start_stop_keyscan();//开始按键   		keycheckdown();       if(key_scan8()&&action==0&&cntflag==0)   		{         			UeffectLED=0;	   			EffectLED=1;   			music2();   			cntflag=1;   		}   		while(action)//按下开始键为1，抢答结束为0   		{   			keycheckdown();   			if(cntflag==1)   			{   			  number_display=0;   				cntflag=0;   			}   			while(!key_scan8())	//无队抢答   			{   				keycheckdown();   				display(number_display,second);   				if(second == 0)   				{   					break;   				}   			}   			if(number_display)//有队抢答   			{   				EffectLED=0;           UeffectLED=1;	   				second=60;           music1();   			}   			while(number_display)   			{   				display(number_display,second);   				TR0 = 1;   				if(second == 0)   				{   					break;   				}   			}   			TR0 = 0;//时间到   			display(number_display,second);   			action = 0;//抢答结束   			break;   		}   		display(number_display,second);	   	}   }      void music1(void)//演奏《两只老虎》   {   	for(i=0;i<14;i++)   	{   		th=ti[x0[i]-1][0];   		tl=ti[x0[i]-1][1];   		TH1=th;   		TL1=tl;   		TR1=1;       SMG_delay(y0[i]*10);   		TR1=0;   	}   }      void music2(void)//演奏《粉刷匠》   {   	for(i=0;i<12;i++)   	{   		th=ti[x1[i]-1][0];   		tl=ti[x1[i]-1][1];   		TH1=th;   		TL1=tl;   		TR1=1;   		SMG_delay(y1[i]*9);   		TR1=0;   	}   }   /*-----------------------------------------------------------   中断服务函数   ------------------------------------------------------------*/   void timer0() interrupt 1   {   	TH0 = (65536-50000)/256; //50ms   	TL0 = (65536-50000)%256;	   	timer0_count ++;   	if(timer0_count == 20)//1s   	{   		timer0_count = 0;   		second--;	//10s倒计时   		if(second == 0)//计时结束   		{   			TR0 = 0;   			number_display = 0;   			action = 0;   		}   	}	   }      /*-----------------------------------------------------------   开始键扫描函数   ------------------------------------------------------------*/   void start_stop_keyscan(void)   {   	if(start_stop == 0)   	{   		SMG_delay(8);   		if((start_stop == 0)&&(!start_stop_flag))   		{   			start_stop_flag = 1;   			action = 1;   			TR0 = 1;   		}   		while(start_stop == 0){display(number_display,second);}		   		   	}   	else   	{   		start_stop_flag = 0;	   	}   }      void keycheckdown()		   {   	L1=0;L2=1;   	R1=R2=R3=R4=1;   	if(R1==0)   	{   		while(R1==0)   		{         display(number_display,second);		   		}       a=1;   	}   	else if(R2==0)   	{   		while(R2==0)   		{   		   display(number_display,second);		   		}       a=2;   	}	   	else if(R3==0)   	{   		while(R3==0)   		{          display(number_display,second);		   		}   		a=3;   	}   	else if(R4==0)   	{   		while(R4==0)   		{          display(number_display,second);		   		}       a=0x4;   	}   	   	L2=0;L1=1;   	R1=R2=R3=R4=1;   	if(R1==0)   	{   		while(R1==0)   		{          display(number_display,second);		   		}       a=0x5;   	}   	else if(R2==0)   	{   		while(R2==0)   		{          display(number_display,second);			   		}       a=0x6;   	}	   	else if(R3==0)   	{   		while(R3==0)   		{          display(number_display,second);			   		}   		a=0x7;   	}   	else if(R4==0)   	{   		while(R4==0)   		{          display(number_display,second);		   		}       a=0x8;   	}   }      /*-----------------------------------------------------------   六位抢答键扫描函数   ------------------------------------------------------------*/   uint8 key_scan8(void)   {   	if((a == 1)&&(!key1_flag))   	{   		key1_flag = 1;   		number  = 1;   		number_display = number;   	}   	else   	{   		key1_flag = 0;   		number  = 0;	   	}   	if((a == 2)&&(!key2_flag))   	{   		key2_flag = 1;   		number  = 2;   		number_display = number;   	}   	else   	{   		key2_flag = 0;   		number  = 0;	   	}   	if((a == 3)&&(!key3_flag))   	{   		key3_flag = 1;   		number  = 3;   		number_display = number;   	}   	else   	{   		key3_flag = 0;   		number  = 0;	   	}   	   	if((a == 0x4)&&(!key4_flag))   	{   		key4_flag = 1;   		number  = 4;   		number_display = number;   	}   	else   	{   		key4_flag = 0;   		number  = 0;	   	}   	   	if((a == 0x5)&&(!key5_flag))   	{   		key5_flag = 1;   		number  = 5;   		number_display = number;   	}   	else   	{   		key5_flag = 0;   		number  = 0;	   	}		   	if((a == 0x6)&&(!key6_flag))   	{   		key6_flag = 1;   		number  = 6;   		number_display = number;   	}   	else   	{   		key6_flag = 0;   		number  = 0;	   	}	   	   	if(number_display != 0)	   	{   		return 1;   	}   	else   	{   		return 0;   	}	   }      void Timer1Service() interrupt 3 /* T0中断服务程序 */    {    	 Beep=~Beep;   	 TH1=th;   	 TL1=tl;   }`

****推荐**  ![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_011_ead434f24ea4.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_009_ead434f24ea4.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_010_ead434f24ea4.png)**![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_012_ead434f24ea4.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\51单片机的六路抢答器Protues仿真设计_images\img_013_ead434f24ea4.png)****  

-   **电路**[**资料汇集**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU3MDU1Mzg2OQ==&action=getalbum&album_id=3582275503874211841&scene=173&subscene=&sessionid=svr_63a28018173&enterid=1736762019&from_msgid=2247537926&from_itemidx=2&count=3&nolastread=1#wechat_redirect)
    
-   **[👉](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[汽车资料汇](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)[总](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0MjY5ODk2Mw==&action=getalbum&album_id=3556392431779315715&scene=173&subscene=&sessionid=svr_83b4bc79643&enterid=1730344064&from_msgid=2247488626&from_itemidx=2&count=3&nolastread=1#wechat_redirect)**
    
-   [**电气电工、工控自动化（PLC）、单片机等资料**](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzA5NDE1NjcxMw==&action=getalbum&album_id=3419859078954909700&scene=173&subscene=&sessionid=svr_62d547d002a&enterid=1736927110&from_msgid=2456253708&from_itemidx=1&count=3&nolastread=1#wechat_redirect)