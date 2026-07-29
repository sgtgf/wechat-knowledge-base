# STM32入门：GPIO输入教程

原创 电路一点通 2025-12-11 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/OOYgp9RnPEheLfoKtLsqxQ](https://mp.weixin.qq.com/s/OOYgp9RnPEheLfoKtLsqxQ)

**目录**

一、程序现象与硬件功能

二、硬件电路与关键问题

三、C 语言关键知识点

四、总结与工程应用

* * *

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\STM32入门_GPIO输入教程_images\img_000_3edda18bc0ab.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

## 一、程序现象与硬件功能

1.  ### **按键控制 LED**
    

-   连接两个按键与两个 LED，按下左侧按键时对应 LED 点亮，再次按下则熄灭，右侧按键同理，两者操作互不干扰，实现独立控制。
    

3.  ### **光敏传感器控制蜂鸣器**
    

-   光敏电阻传感器模块与蜂鸣器连接，遮挡光线时（光敏电阻阻值增大），蜂鸣器启动；光线充足时（阻值减小），蜂鸣器停止，体现模拟信号与数字信号的转换逻辑。
    

## 二、硬件电路与关键问题

1.  ### **按键电路与抖动处理**
    

-   **按键原理**
    
    ：按下导通、松手断开，常见接法为下拉电阻式（默认高电平，按下接地变低）或上拉电阻式（默认低电平，按下接电源变高）。
    
-   **抖动问题**
    
    ：按下 / 松手瞬间因机械触点振动产生高频抖动（5-10ms），需通过程序延时（软件消抖）过滤，避免单片机误判。![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32入门_GPIO输入教程_images\img_001_83e75fbc9de4.png)
    

3.  ### **传感器模块工作原理**
    

-   **分压电路**
    
    ：传感器元件（如光敏电阻）与定值电阻串联分压，通过检测电压变化获取模拟量（如光线强度）。
    
-   **二值化处理**
    
    ：利用电压比较器（如 LM393）将模拟电压转换为数字信号，阈值可通过电位器调节，输出端 DO 用于单片机读取通断状态。![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32入门_GPIO输入教程_images\img_002_bb2d1cb638b2.png)
    

## 三、C 语言关键知识点

1.  ### **数据类型与重命名**
    

-   **基本类型**
    
    ：char、int 等在不同平台位数差异（如 51 单片机 int 为 16 位，STM32 中为 32 位），需通过`stdint.h`头文件使用确定位数的类型（如`uint8_t`）。![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32入门_GPIO输入教程_images\img_003_476ce4be9963.png)
    
-   **typedef 与宏定义**
    
    ：`typedef`为变量类型重命名（如`typedef unsigned char uint8_t`），宏定义（`#define`）用于常量替换（如`#define HIGH 1`），增强代码可读性。![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32入门_GPIO输入教程_images\img_004_30b574ea2ee4.png)![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32入门_GPIO输入教程_images\img_005_fd6f3f135c41.png)
    

3.  ### **结构体（Struct）**
    

-   **用途**
    
    ：组合不同数据类型（如`struct GPIO {uint8_t pin; uint8_t mode;}`），方便函数间传递复杂参数。
    
-   **引用方式**
    
    ：结构体变量名`.成员名`或结构体指针`->成员名`（如`gpio.pin = 12;`或`gpio_ptr->mode = INPUT`）。![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32入门_GPIO输入教程_images\img_006_3f7ace740f4b.png)
    

5.  ### **枚举（Enum）**
    

-   **作用**
    
    ：定义取值受限的整型变量，避免非法赋值（如`enum Week {MON=1, TUE, WED}`，默认递增赋值）。
    
-   **优势**
    
    ：枚举值可作为宏定义使用，增强代码健壮性（如`if (state == ENABLE)`比`if (state == 1)`更易理解）。![](D:\电脑文件\公众号知识库\电工_教育_学习\STM32入门_GPIO输入教程_images\img_007_915757b541c5.png)
    

## 四、总结与工程应用

-   **核心目标**
    
    ：理解外设硬件原理（按键消抖、传感器信号转换）与 C 语言高级特性（结构体、枚举），为 STM32 编程奠定基础。
    
-   **实践建议**
    
    ：通过实际电路调试掌握硬件特性，结合库函数源码学习结构体与枚举的具体应用，逐步理解底层驱动逻辑。
    

## **一点通推荐**

-   [200例电路，专治实操卡壳困境--“常用直流稳压电源电路应用”](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247561117&idx=1&sn=52cb24eca5cd8807dc2b6ce7ceb02fab&scene=21#wechat_redirect)
    
-   [光耦器件电路与参数计算](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247561100&idx=2&sn=9fef3d417063deb66c316080587c5bd3&token=1695444499&lang=zh_CN&scene=21#wechat_redirect)
    
-   [电机驱动器辐射骚扰整改方案](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247560928&idx=2&sn=e5d51f1a122d027aa8dd0e79d26dfad8&token=1695444499&lang=zh_CN&scene=21#wechat_redirect)
    
-   [【从零起步学电子】-数学、直交流电、元器件知识](https://mp.weixin.qq.com/s?__biz=MzA5NDE1NjcxMw==&mid=2456265220&idx=1&sn=84803dad5f80f84de4004e22c52016a1&scene=21#wechat_redirect)
    
-   [小米YU7 Pro成本结构深度拆解](https://mp.weixin.qq.com/s?__biz=Mzk0MjY5ODk2Mw==&mid=2247533304&idx=1&sn=a861d1cfdeb2523151f31e8214144d42&token=434522251&lang=zh_CN&scene=21#wechat_redirect)
    
      
    

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\STM32入门_GPIO输入教程_images\img_008_683ddd70c3d9.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️