# STM32使用按键点亮LED灯

原创 电路一点通 2024-12-25 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/t8me2OA8HPr41IsswX8XxA](https://mp.weixin.qq.com/s/t8me2OA8HPr41IsswX8XxA)

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32使用按键点亮LED灯_images\img_000_77f2ff5c9912.png)  

1.按键下接：当K1按下时，PA0与GND之间联通，此时读取PA0的电压是低电平；当松开K1时，PA0被悬空，悬空状态，会导致引脚的电压不确定，此时STM32内部，应该设置上拉输入模式，否则就会引起引脚电压不确定的错误现象；如果PA0是上拉输入模式，上拉电阻连接VDD，保证引脚悬空时，PA0为高电平；所以此时按下按键为引脚为低电平，抬起按键引脚为高电平；

**👇👇👇更多技术资料👇👇👇**![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32使用按键点亮LED灯_images\img_001_79fcd6ae0e2c.png)

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32使用按键点亮LED灯_images\img_002_4f295a4c9069.other)

2.此时，PA0外接了一个上拉电阻。此时松开K1，引脚由于上拉作用，保持为高电平；按下按键K1，由于GND此时下部电阻无穷大，上拉电阻无法对抗下部电阻，此时引脚电压为低电平，这种状况不可能出现悬空状态，故此时PA可以配置为浮空输入或上拉输入。如果为上拉输入，由于有两个上拉电阻，且都联通电源电压，这两个上拉电阻为并联状态，此时高电平更强，更稳定。但引脚被强行拉低，损耗也更大

上述两种接法都是按下为低电平，松开为高电平；

下面分析LED电路：

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32使用按键点亮LED灯_images\img_003_2d376dd88a72.jpg)

此为低电平驱动电路：次数LED正极接在3.3V电压上，负极通过一个限流电阻接到PA0上，此时PA0输出低电平时，LED两端会产生电压差，就会形成正向导通电流，LED被点亮。

当PA0输出高电压时,LED两端电压均为3.3V，无电势差，不会产生电流故LED不会电流；

限流电阻的作用：1.防止LED因为电流过大被烧毁；2.可以调节LED的亮度

GPIO在推挽输出模式下，高低电平均有较强的驱动能力，但因为单片机，通常使用高电平弱驱动，低电平强驱动（可以避免高低电平打架）。

接线图

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32使用按键点亮LED灯_images\img_004_dce35e6e4003.png)

LED1接PA1，LED2接PA2；按键1接PB1，按键2接PB11

下面来编写代码程序，为了方便美观，采用模块化编程

LED驱动程序：

#include "stm32f10x.h"//头文件

void LED\_Init(void)//LED初始化函数

{

        RCC\_APB2PeriphClockCmd(RCC\_APB2Periph\_GPIOA,ENABLE);//开启时钟

        GPIO\_InitTypeDef GPIO\_InitStructure;//定义GPIO结构体，方便配置端口

        GPIO\_InitStructure.GPIO\_Mode = GPIO\_Mode\_Out\_PP;//将控制LED的引脚设置为推挽输出

        模式

        GPIO\_InitStructure.GPIO\_Pin = GPIO\_Pin\_1 | GPIO\_Pin\_2;//LED对应的引脚为PA1和PA2

        GPIO\_InitStructure.GPIO\_Speed = GPIO\_Speed\_50MHz;将端口速度设置为50MHz

        GPIO\_Init(GPIOA,&GPIO\_InitStructure);//初始化端口，指向结构体

        GPIO\_SetBits(GPIOA,GPIO\_Pin\_1 | GPIO\_Pin\_2);//将LED设置为默认关闭状态

}

配置LED开启或关闭的函数

        void LED1\_ON(void)  
        {  
            GPIO\_ResetBits(GPIOA,GPIO\_Pin\_1);  
        }

        void LED1\_OFF(void)  
        {  
            GPIO\_SetBits(GPIOA,GPIO\_Pin\_1);  
        }

        void LED2\_ON(void)  
        {  
            GPIO\_ResetBits(GPIOA,GPIO\_Pin\_2);  
        }

        void LED2\_OFF(void)  
        {  
            GPIO\_SetBits(GPIOA,GPIO\_Pin\_2);  
        }

* * *

2.按键驱动程序

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32使用按键点亮LED灯_images\img_005_624084ad8a98.png)

按键抖动：按键内部是机械机构使用的是机械式弹簧片来进行通断的，所以在按下或松手的一瞬间都会伴随一连串的抖动，持续时间约5-10ms

假设没按下为高电平，按下为低电平；当按下的一瞬间，高电平变为低电平，会来回抖动几下，但对于运行中的单片机5-10ms还是很漫长，所以需要对抖动进行过滤，否则会出现按下按键单片机反应了很多次，所以需要设置按键延时函数

void Key\_Init(void)//初始化所接GPIO端口配置函数

{

        RCC\_APB2PeriphClockCmd(RCC\_APB2Periph\_GPIOB,ENABLE);//打开时钟

        GPIO\_InitTypeDef GPiO\_Initstructure;//定义结构体变量

        GPiO\_Initstructure.GPIO\_Mode = GPIO\_Mode\_IPU;//将GPIO端口设置为上拉输入模式

        因为根据上述电路分析，都是上拉输入高电平，下拉输入低电平

        GPiO\_Initstructure.GPIO\_Pin = GPIO\_Pin\_1 | GPIO\_Pin\_11;//选择引脚1和11

        GPiO\_Initstructure.GPIO\_Speed = GPIO\_Speed\_50MHz;//设置端口速度为50MHz

        GPIO\_Init(GPIOB,&GPiO\_Initstructure);//初始化结构体变量

}

uint8\_t Key\_Getnum(void)//调用此函数，就会返回按下按键的键码，返回值为uint8\_t

{  
    uint8\_t Key\_num = 0;将此变量作为返回值

        /\*

        uint8\_t GPIO\_ReadInputDataBit(GPIO\_TypeDef\* GPIOx, uint16\_t GPIO\_Pin);

        此函数是读取输入数据寄存器某一端口的输入值，参数是GPIOx，GPIO\_Pin用于指定

        端口，返回值uint8\_t代表端口的高低电平  
        uint16\_t GPIO\_ReadInputData(GPIO\_TypeDef\* GPIOx);

        对比上面函数少了Bit，所以是用来读取整个输入寄存器的输入值  
        uint8\_t GPIO\_ReadOutputDataBit(GPIO\_TypeDef\* GPIOx, uint16\_t GPIO\_Pin);

        此函数用于读取输出寄存器某一端口的输出值  
        uint16\_t GPIO\_ReadOutputData(GPIO\_TypeDef\* GPIOx);

        此函数用于读取输出寄存器所有端口的输出值

        \*/  
    if(GPIO\_ReadInputDataBit(GPIOB,GPIO\_Pin\_1) == 0)//此函数的返回值是输入寄存器PB1的值

        0代表低电平，1代表高电平；若返回值等于0则代表按下按键；上述电路描述也是按下按键为

        电平，松开为高电平  
    {  
        Delay\_ms(20);//因为按下后有抖动所以要延时  
        while((GPIO\_ReadInputDataBit(GPIOB,GPIO\_Pin\_1) == 0))//用于判断是否结束按压  
        {      
            Delay\_ms(20);  
        }  
        Key\_num = 1;//将此变量将按键1的值传递出去  
    }  
    if(GPIO\_ReadInputDataBit(GPIOB,GPIO\_Pin\_1) == 0)同理为PB11的的配置  
    {  
        Delay\_ms(20);  
        while((GPIO\_ReadInputDataBit(GPIOB,GPIO\_Pin\_1) == 0))  
        {      
            Delay\_ms(20);  
        }  
        Key\_num = 2;//将此变量将按键2的值传递出去  
    }  
    return Key\_num;  
}

3.配置主函数

int main(void)  
{  
    LED\_Init();//初始化LED端口  
    Key\_Init();//初始化KEY端口  
    while(1)  
    {  
        KeyNum = Key\_Getnum();  
        if(KeyNum == 1)//如果按键1按下LED1亮  
        {  
            LED1\_ON();  
        }  
        if(KeyNum == 2)//如果按键2按下LED1灭  
        {  
            LED1\_OFF();  
        }  
    }  
}

  

作者：Aronbattle

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

## **一点通推荐**

    
-   [简单的硬件电路， Led为什么用低电平点亮？](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534560&idx=3&sn=49efad4ec6126b274b7b3c2d6a4acdde&scene=21#wechat_redirect)
    
-   [【电路设计】优化降压（ 12V -3.3V ）电源硬件方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247534378&idx=2&sn=9be1a2b0b96558dc7fc2a7e9f326ab95&scene=21#wechat_redirect)
    
-   [初级工程师PCB设计技巧.ppt课件](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247536316&idx=2&sn=9213902cb820d9b143f943826ba6cab5&scene=21#wechat_redirect)
    
      
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32使用按键点亮LED灯_images\img_006_63b23025e969.jpg)

******进大家庭⭕圈探讨回复:****** ******交流******

分享💬点赞👍在看❤️ 

以“三点”行动支持！每天中午11点28