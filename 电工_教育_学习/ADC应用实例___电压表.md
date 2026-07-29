# ADC应用实例---电压表

原创 电路一点通 2024-05-01 18:58 广西

> 原文地址: [https://mp.weixin.qq.com/s/zAGiEM1HDV-uVBw9D91sfg](https://mp.weixin.qq.com/s/zAGiEM1HDV-uVBw9D91sfg)

关于ADC的知识，今天来看一个实例，尽管这次用的芯片已经基本上没人用了，但是这不影响我们学习!话不多说了 ，直接上代码。

进大家庭圈子回复：交流

# 主函数

#include <reg52.h>

#include "ADC0832.h"

#include "LCD1602.h"

unsigned char code tab1\[\] = "CurrentVoltage:";

unsigned char code tab2\[\] = " 0.00 V";

void main()

{

unsigned char i;

int v = 0;

init1602();

write1602\_com(0x80);

for(i = 0; tab1\[i\]; ++i)

write1602\_dat(tab1\[i\]);

write1602\_com(0x80 + 0x40);

for(i = 0; tab2\[i\]; ++i)

write1602\_dat(tab2\[i\]);

while(1) {

v = 5.0 \* read0832() / 256 \* 100;

write1602\_com(0x80 + 0x40 + 3);

write1602\_dat('0' + v/100 );

write1602\_dat('.');

write1602\_dat('0' + v/10%10 );

write1602\_dat('0' + v%10 );

}

}

# ADC0832驱动函数

sbit CS\_0832 = P1^0;

sbit CLK\_0832 = P1^1;

sbit DO\_0832 = P1^2;// DI、DO不同时有效，可共用一个接口

sbit DI\_0832 = P1^2;

extern void \_nop\_ ( void );

#define pulse0832() \_nop\_();\_nop\_();CLK\_0832=1;\_nop\_();\_nop\_();CLK\_0832=0

//把模拟电压值转换成8位二进制数并返回

unsigned char read0832()

{

unsigned char i, ch = 0, ch1 = 0;

CS\_0832=0;// 片选，DO为高阻态

DI\_0832=1;

// 此处暂停T-SetUp: 250ns (由pulse0832完成)

pulse0832();// 第一个脉冲，起始位，DI置高

DI\_0832=1;

pulse0832();// 第二个脉冲，DI=1表示双通道单极性输入

DI\_0832=1;

pulse0832();// 第三个脉冲，DI=1表示选择通道1（CH2）

// 51单片机为准双向IO口：应先写入1再读取

DI\_0832=1;

// MSB FIRST DATA

for(i = 0; i < 8; ++i) {

pulse0832();

ch <<= 1;

if(DO\_0832==1)

ch |= 0x01;

}

// MSB FIRST输出的最后一位与LSB FIRST输出的第一位是在

// 同一个时钟下降沿之后，故此处先执行读取，后执行pulse

// LSB FIRST DATA

for(i = 0; i < 8; ++i) {

ch1 >>= 1;

if(DO\_0832==1)

ch1 |= 0x80;

pulse0832();

}

CS\_0832=1;// 取消片选，一个转换周期结束

return (ch==ch1) ? ch : 0;// 返回转换结果

}

# LCD1602液晶驱动函数

#define LCD1602 P0

sbit LCD\_RS = P3^5;

sbit LCD\_RW = P3^6;

sbit LCD\_EN = P3^4;

#define LCD\_RS\_0 LCD\_RS=0

#define LCD\_RS\_1 LCD\_RS=1

#define LCD\_RW\_0 LCD\_RW=0

#define LCD\_RW\_1 LCD\_RW=1

#define LCD\_EN\_0 LCD\_EN=0

#define LCD\_EN\_1 LCD\_EN=1

#include "delay.h"

#define DELAY\_1602 delayms(5)

void write1602\_com(unsigned char com)

{

LCD\_RS\_0;

LCD1602 = com;

DELAY\_1602;

LCD\_EN\_1;

DELAY\_1602;

LCD\_EN\_0;

}

void write1602\_dat(unsigned char dat)

{

LCD\_RS\_1;

LCD1602 = dat;

DELAY\_1602;

LCD\_EN\_1;

DELAY\_1602;

LCD\_EN\_0;

}

void init1602( void )

{

LCD\_RW\_0;

write1602\_com(0x38);

write1602\_com(0x0C);

write1602\_com(0x06);

write1602\_com(0x01);

# 最后再来一张图

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC应用实例___电压表_images\img_000_a6d8d29d14b3.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\ADC应用实例___电压表_images\img_001_c8bb6fb59546.png)