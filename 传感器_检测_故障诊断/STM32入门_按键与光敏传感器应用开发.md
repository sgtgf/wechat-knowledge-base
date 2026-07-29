# STM32入门：按键与光敏传感器应用开发

原创 电路一点通 2025-12-19 11:31 广东

> 原文地址: [https://mp.weixin.qq.com/s/kx3LxfrnIdAPhAVLV4ioVg](https://mp.weixin.qq.com/s/kx3LxfrnIdAPhAVLV4ioVg)

## 目录

一、硬件接线与模块化编程概述

二、LED 驱动模块开发

三、按键驱动模块开发

四、主函数调用与功能实现

五、开发要点总结

* * *

[![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\STM32入门_按键与光敏传感器应用开发_images\img_000_fe8342348f8b.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  

## 一、硬件接线与模块化编程概述

1.  **硬件接线示例**

-   **按键与 LED 连接**
    
    ：按键接 PB1、PB11（一端接 GPIO，一端接地），LED 接 PA1、PA2（一端接 GPIO，一端接 VCC，低电平点亮）。![](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\STM32入门_按键与光敏传感器应用开发_images\img_001_8cf5a9645e13.jpg)
    
-   **模块化优势**
    
    ：将驱动代码（如 LED、按键）分装到独立的`.c`和`.h`文件中，避免主函数混乱，便于管理和移植。
    

## 二、LED 驱动模块开发

1.  ### **初始化配置**
    

-   开启 GPIOA 时钟，配置 PA1、PA2 为推挽输出模式（50MHz 速度）。
    
-   代码示例：
    

1.  void LED\_Init(void) {
    
2.  RCC\_APB2PeriphClockCmd(RCC\_APB2Periph\_GPIOA, ENABLE);
    
3.  GPIO\_InitTypeDef GPIO\_InitStructure;
    
4.  GPIO\_InitStructure.GPIO\_Mode\= GPIO\_Mode\_Out\_PP;
    
5.  GPIO\_InitStructure.GPIO\_Pin \= GPIO\_Pin\_1 | GPIO\_Pin\_2;
    
6.  GPIO\_InitStructure.GPIO\_Speed \= GPIO\_Speed\_50MHz;
    
7.  GPIO\_Init(GPIOA, &GPIO\_InitStructure);
    
8.  }
    

4.  ### **功能函数封装**
    

-   提供点亮、熄灭、翻转等函数（如`LED1_On()`、`LED1_Turn()`），通过操作 GPIO 寄存器实现状态控制。
    
-   在`.h`文件中声明函数，供主程序调用。
    

## 三、按键驱动模块开发

1.  ### **初始化配置**
    

-   开启 GPIOB 时钟，配置 PB1、PB11 为上拉输入模式。
    
-   代码示例：
    

1.  void KEY\_Init(void) {
    
2.  RCC\_APB2PeriphClockCmd(RCC\_APB2Periph\_GPIOB, ENABLE);
    
3.  GPIO\_InitTypeDef GPIO\_InitStructure;
    
4.  GPIO\_InitStructure.GPIO\_Mode\= GPIO\_Mode\_IPU;
    
5.  GPIO\_InitStructure.GPIO\_Pin \= GPIO\_Pin\_1 | GPIO\_Pin\_11;
    
6.  GPIO\_Init(GPIOB, &GPIO\_InitStructure);
    
7.  }
    

4.  ### **按键检测逻辑**
    

-   读取端口值并消抖（20ms 延时），区分按下与松手状态，返回键码（如按键 1 返回 1，按键 2 返回 2）。
    
-   使用`GPIO_ReadInputDataBit()`函数获取按键状态。
    

## 四、主函数调用与功能实现

1.  ### **模块化调用流程**
    

-   初始化 LED 和按键模块。
    
-   在主循环中读取按键值，根据键码执行对应操作（如按键 1 控制 LED1 翻转，按键 2 控制 LED2 翻转）。
    
-   代码示例：
    
    ```
    
    ```
    

1.  int main() {
    
2.  LED\_Init();
    
3.  KEY\_Init();
    
4.  while(1) {
    
5.  uint8\_t key\=KEY\_GetNum();
    
6.  if(key\=\=1) LED1\_Turn();
    
7.  elseif(key\=\=2) LED2\_Turn();
    
8.  }
    
9.  }
    

4.  ### **扩展应用：光敏传感器与蜂鸣器**
    

-   类似模块化方法，分装光敏传感器（读取 PB13 电平）和蜂鸣器（控制 PB12 输出）驱动。
    
-   根据光敏状态触发蜂鸣器报警，实现环境感知功能。
    

## 五、开发要点总结

1.  ### **GPIO 操作步骤**
    

-   开启时钟 → 配置 GPIO 结构体（模式、引脚、速度） → 调用`GPIO_Init()`初始化。
    
-   输入模式用`GPIO_ReadInputDataBit()`，输出模式用`GPIO_SetBits()`/`GPIO_ResetBits()`。
    

3.  ### **模块化编程规范**
    

-   每个硬件模块对应独立的`.c`（实现驱动逻辑）和`.h`（声明函数接口）。
    
-   添加注释说明函数功能、参数及返回值，提升代码可读性。
    

5.  ### **调试与优化**
    

-   编译前确保头文件路径正确，通过编译错误定位语法问题。
    
-   使用状态翻转（如`LED_Turn()`）替代直接赋值，简化主函数逻辑。
    

![图片](D:\电脑文件\公众号知识库\传感器_检测_故障诊断\STM32入门_按键与光敏传感器应用开发_images\img_002_abced6523e52.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️