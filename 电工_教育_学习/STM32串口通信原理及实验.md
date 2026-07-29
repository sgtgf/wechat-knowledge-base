# STM32串口通信原理及实验

原创 电路一点通 2025-06-01 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/2SHwl2VO3MPRc5eEfpTVsQ](https://mp.weixin.qq.com/s/2SHwl2VO3MPRc5eEfpTVsQ)

## 串口通信基本原理  

### 串口

　　串口，顾名思义，即为串行接口，是处理器与外部设备进行串行通信的接口。串行通信是指数据按位进行顺序传输，这种方法占用引脚资源少，但速度相对较慢。串行通信按数据传输方向可分为三种：单工、半双工、全双工；按通信方式可分为同步通信和异步通信。

-   [![图片](D:\电脑文件\公众号知识库\电工_教育_学习\STM32串口通信原理及实验_images\img_000_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

  

_单工：只允许一个方向传输数据_

_半双工：允许两个方向，但不能同时两个方向传输_

_全双工：允许两个方向且同时传输_

_同步：传输时，带时钟同步信号--SPI、IIC_

_异步：传输时，不带时钟同步信号（异步传输前，波特率\[即传输速度\]要约定好）-UART_

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32串口通信原理及实验_images\img_001_53e20e9866a6.png)

### UART （通用异步收发器）

STM32F10x系列的芯片包括3个USART和2个UART。

引脚：RXD－数据接收；TXD－数据发送

特点：全双工异步通信、分数波特率发生系统、．．．![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32串口通信原理及实验_images\img_002_eb582e6f1efa.jpg)

传输速度由波特率决定。

## 串口通信常用寄存器和库函数

#### 常用串口相关寄存器

_USART\_SR状态寄存器_

_USART\_DR数据寄存器_

_USART\_BRR波特率寄存器_

#### 波特率的计算方法

波特率控制异步通信串口接收和发送数据的速度。

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32串口通信原理及实验_images\img_003_ba6fe35d16ab.jpg)

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32串口通信原理及实验_images\img_004_6671b458ad35.jpg)

波特率＝115200，PCLK2的时钟为72M，则USARTDIV＝72000000/(115200\*16)=39.0625。在波特率寄存器中，整数部分DIV\_Mantissa=39=0X27；DIV\_Fraction=0.0625\*16=1=0X01;故USART1->BRR值为0X0271，只要设置串口1的BRR寄存器值为0X0271就可得到115200的波特率。

#### 串口操作的相关库函数

 ![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32串口通信原理及实验_images\img_005_38c96a953ed0.jpg)

查看串口实验FWLIB文件下的stm32f10x\_usart.c中的头文件stm32f10x\_usart.h

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32串口通信原理及实验_images\img_006_5b1a3276024a.jpg)

 下面是写串口实验主函数的思路以及代码：

void My\_USART\_Init(void)//初始化函数

{

GPIO\_InitTypeDef GPIO\_InitStructure;

USART\_InitTypeDef USART\_InitStructure;

NVIC\_InitTypeDef NVIC\_InitStructure;

  

RCC\_APB2PeriphClockCmd(RCC\_APB2Periph\_GPIOA,ENABLE);//GPIO时钟使能  1

RCC\_APB2PeriphClockCmd(RCC\_APB2Periph\_USART1,ENABLE);//GPIO串口使能

  

GPIO\_InitStructure.GPIO\_Mode=GPIO\_Mode\_AF\_PP;//推挽复用输出

GPIO\_InitStructure.GPIO\_Pin=GPIO\_Pin\_9;

GPIO\_InitStructure.GPIO\_Speed=GPIO\_Speed\_10MHz;

GPIO\_Init(GPIOA,&GPIO\_InitStructure);//GPIO端口初始化

  

GPIO\_InitStructure.GPIO\_Mode=GPIO\_Mode\_IN\_FLOATING;//浮空输入

GPIO\_InitStructure.GPIO\_Pin=GPIO\_Pin\_10;

GPIO\_InitStructure.GPIO\_Speed=GPIO\_Speed\_10MHz;

GPIO\_Init(GPIOA,&GPIO\_InitStructure);//GPIO端口初始化            2

  

  

USART\_InitStructure.USART\_BaudRate=115200;//波特率

USART\_InitStructure.USART\_HardwareFlowControl=USART\_HardwareFlowControl\_None;//不使用硬件流

USART\_InitStructure.USART\_Mode=USART\_Mode\_Rx|USART\_Mode\_Tx;//发送接收均使能，使用或|符号

USART\_InitStructure.USART\_Parity=USART\_Parity\_No;//不使用奇偶校验

USART\_InitStructure.USART\_StopBits=USART\_StopBits\_1;//设置一个停止位

USART\_InitStructure.USART\_WordLength=USART\_WordLength\_8b;//字长

  

USART\_Init(USART1,&USART\_InitStructure);//串口参数初始化    3

  

USART\_Cmd(USART1,ENABLE);//串口使能        4

  

USART\_ITConfig(USART1,USART\_IT\_RXNE,ENABLE);//开启接收中断      5

  

NVIC\_InitStructure.NVIC\_IRQChannel= USART1\_IRQn ;//在stm32f10x.h文件种215行

NVIC\_InitStructure.NVIC\_IRQChannelCmd=ENABLE;

NVIC\_InitStructure.NVIC\_IRQChannelPreemptionPriority=1;//抢占优先级

NVIC\_InitStructure.NVIC\_IRQChannelSubPriority=1;//响应优先级

  

NVIC\_Init(&NVIC\_InitStructure);//初始化NVIC     6

}

  

  

void USART1\_IRQHandler(void)//中断处理函数

{

if(USART\_GetITStatus(USART1,USART\_IT\_RXNE ))//判断现在发生的中断是否是接收到的数据产生的中断

{

u8 res;

res= USART\_ReceiveData(USART1);//接收到的数据

USART\_SendData(USART1,res);//发送数据

}

  

}

  

 int main(void)

 {

   //\*\*\*设置中断

NVIC\_PriorityGroupConfig(NVIC\_PriorityGroup\_2);//系统中断分组设置为2

My\_USART\_Init();

while(1);//死循环

  

 }

 //移除system中的usart.c文件

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\STM32串口通信原理及实验_images\img_007_b46e8bcc08e0.jpg)

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️