# 用PWM点亮LED实现呼吸灯-【stm32实验】

原创 电路一点通 2026-01-02 18:59 广东

> 原文地址: [https://mp.weixin.qq.com/s/fM6Hx4fjqn5rqnGdDXCa5A](https://mp.weixin.qq.com/s/fM6Hx4fjqn5rqnGdDXCa5A)

> 介绍了如何在STM32F103C8T6微控制器上使用PWM技术控制LED灯实现呼吸灯效果，涉及基础知识、PWM工作原理、TIM4定时器配置、HAL库的使用以及编写实际的业务代码。

### 一：知识前置

### 1.1、LED灯怎么才能亮？

答：LED需要低电平才能亮，高电平是灯灭。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_000_3f4b048a6cc3.png)

### 1.2、LED灯为什么可以越来越亮，越来越暗？

答：这是用到不同占空比来实现的，控制LED实现呼吸灯，就是通过占空比的高低电平和其持续时间来实现。

[![图片](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_001_3edda18bc0ab.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&scene=21#wechat_redirect)

**👆查看更多目录👆**

  
  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_002_6aa7b128107a.png)

### 1.3、如何计算周期/频率？

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_003_ddc79db9da92.png)  
①例如，要定时500ms，则：PSC=7199，ARR=4999，Tclk=72Mhz。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_004_1d980bab4a7d.png)  
②假如频率为 2kHz ，则：PSC=71，ARR=499,  
频率和周期是描述波形的两个基本概念，它们之间存在着确定的数学关系。频率是指在单位时间内信号中所包含的周期个数，单位为赫兹（Hz），周期则是每个完整波形所用的时间，单位为秒（s）。

频率 = 1 ÷ 周期  
周期 = 1 ÷ 频率  
2khz=1/2000s  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_005_e7f259b5bf83.png)

### 1.4、PWM介绍

STM32F103C8T6 PWM资源  
高级定时器（TIM1）:7路  
通用定时器（TIM2-TIM4）:各4路  
pwm输出模式（硬件规定，这是游戏规则，记住就好）：  
横坐标是CNT  
**pwm模式1**：在向上计数时，一旦CNT<CCRx时输出为有效电平，否则为无效电平；  
在向下计数时，一旦CNT>CCRx时输出为无效电平，否则为有效电平。  
pwm模式2：在向上计数时，一旦CNT<CCRx时输出为无效电平，否则为有效电平；  
在向下计数时，一旦CNT>CCRx时输出为有效电平，否则为无效电平。  
这里CNT和CCRx比较的时间长度就是占空比的持续时间长度(横坐标的长度)。

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_006_c089f59af18c.png)  
所以上文总结下来一句话：_**PWM占空比是由TIMx\_CCRx寄存器决定。**_

### 1.5、那么CCRx寄存器是什么？

答：在嵌入式系统中，**PWM（脉冲宽度调制）**是一种常见的控制技术，用于产生模拟信号或控制电机、灯光等设备。CCR（Capture/Compare Register）寄存器是与PWM相关的一种寄存器，用于**设置比较值或捕获值**。

在PWM模块中，CCR寄存器通常用于存储用于比较的值。对于基于比较的PWM模式，CCR寄存器的值将与定时器计数器的值进行比较，以确定何时改变PWM输出的状态。另外，在输入捕获模式中，CCR寄存器可以用于存储捕获到的定时器计数器的值。

总之，CCR寄存器在PWM模块中扮演着关键的角色，用于控制PWM波形的生成和捕获。

### 二：实验-用PWM点亮LED实现呼吸灯（hal库）

### 2.1、需求：使用PWM点亮LED1实现呼吸灯效果。

```
	呼吸灯效果：呼吸灯效果的原理是通过改变光源的亮度来实现。	光源会在一个周期内逐渐从低亮度到高亮度再到低亮度的循环变化。这个周期可以根据具体需求进行调整，通常在几秒钟到几十秒之间。**简单来说就是灯从暗到亮，从亮到暗，只是两者持续的时间可以控制，这个时间就是由占空比也就是PWM控制。**
```

### 2.2、读芯片引脚原理图

找LED灯是哪个引脚控制，如图右侧PB8  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_007_17e427fff507.png)

### 2.3、学会看产品手册

LED1连接到哪个定时器的哪一路？

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_008_66ea117057c5.png)  
**由STM32F103xx产品手册可以知道引脚PB8是由定时器TIM4的第三个通道3决定的.**  
这是强大的hal库帮我们封装好的,我们会调用就行了  
温馨提示：STM近年来主推且不断更新HAI库和LL库，反而标准库已经好几年不更新了，这样子用stm板子开发速度很快，就是换国产芯片做产品时还是得用标准库

```
//修改比较值，修改占空比__HAL_TIM_SetCompare(&htim4, TIM_CHANNEL_3, pwmVal);
```

```
在这段代码中，`pwmVal`代表着PWM信号的占空比（Duty Cycle）。占空比是指高电平时间与周期之比，通常以百分比表示。在使用脉冲宽度调制（PWM）技术控制光源亮度或执行其他需要精确控制的任务时，可以通过修改占空比来调整输出信号的特性。`__HAL_TIM_SetCompare()`函数是针对STM32系列微控制器的HAL库函数，用于设置定时器的比较值，从而改变PWM信号的占空比。具体而言，`&htim4`表示对定时器4进行操作，`TIM_CHANNEL_3`表示选择第3个通道（channel），而`pwmVal`则是要设置的占空比值。通过修改`pwmVal`的数值，可以调整PWM信号的占空比，进而控制光源的亮度或其他相关功能。通常，当`pwmVal`为0时，输出信号的占空比为0%，即完全低电平；当`pwmVal`为最大值时，输出信号的占空比为100%，即完全高电平；在中间取值，则可以实现不同亮度或特定需求下的占空比控制。
```

### 3.1、打开Stm32CubeMX,界面如图

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_009_42f5e3db13f8.png)

### 3.2、选芯片：stm32f103c8t6

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_010_37b344c8678d.png)

### 3.3、读芯片引脚原理图

找LED灯是哪个引脚控制，如图右侧PB8  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_011_17e427fff507.png)  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_012_3f4b048a6cc3.png)

### 3.4、先把LED灯设置为高电平模式

这样子上电之后，灯默认就是关的，这时候代码控制外设翻转高低电平，就可以点灯了（这步以第二张为准，3.7有写）  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_013_3db393288313.png)

这里需要注意的是当在TIM4里面设置之后PB8就变了  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_014_73cab4608a35.png)

### 3.5、设置时钟

配置时钟频率  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_015_a7045cfb89b9.png)

### 3.6、RCC配置

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_016_a20416d059f4.png)

### 3.7、定时器

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_017_f2973d9b53c4.png)记得把极性设置为Low，因为LED灯是低电平才亮。  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_018_73cab4608a35.png)

### 3.8、代码自动设置生成的文件

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_019_07605d191c11.png)

### 3.9、图形化最后一步

项目名称：pwm\_study

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_020_4e67cc7c9b8a.png)

### 四：编写业务代码

### 4.1、在初始化完成的代码之后添加业务代码

下面是所有需要添加的代码，主要看添加的位置，全文只增加了三处代码，其余都没变

```
uint16_t pwmVal=0; //调整PWM占空比uint8_t dir=1; //设置改变方向。1：占空比越来越大；0：占空比越来越小// ②使能 Timer4 第3通道 PWM 输出HAL_TIM_PWM_Start(&htim4,TIM_CHANNEL_3);// ③while循环实现呼吸灯效果while (1){HAL_Delay(1);	if (dir)	pwmVal++;	else	pwmVal--;	if (pwmVal > 500)	dir = 0;	if (pwmVal == 0)	dir =1;	//修改比较值，修改占空比	__HAL_TIM_SetCompare(&htim4, TIM_CHANNEL_3, pwmVal);}
```

### 4.2 、定义变量

在main.c函数中添加定义变量代码pwmVal和dir

```
/* USER CODE BEGIN 1 */uint16_t pwmVal =0;//调整占空比uint8_t dir =1;//设置改变方向，等于1越来越亮（占空比越来越大），//	等于0就是越来越暗（占空比越来越小）/* USER CODE END 1 */
```

### 4.3、初始化完成后打开PWM

在main中，当GPIO和TIM4初始化之后，才打开PWM

```
/* USER CODE BEGIN 2 */HAL_TIM_PWM_Start(&htim4,TIM_CHANNEL_3);//打开pwm要在初始化之后打开/* USER CODE END 2 */
```

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_021_5311e0c1198d.png)

### 4.4、在while(1)循环中添加pwmVal占空比代码

用if语句判断灯亮灯灭，在pwm模式1中，看counter和CCRx比较

```
/* USER CODE END WHILE */HAL_Delay(1);if(dir)			pwmVal++;else			pwmVal--;if(pwmVal >500)				dir =0;if(pwmVal ==0)				dir =1;//修改比较值，修改占空比__HAL_TIM_SetCompare(&htim4, TIM_CHANNEL_3, pwmVal);
```

![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_022_4862565dd177.png)

### 4.5、main.c总代码，直接复制可用

```
/* USER CODE BEGIN Header *//**  ******************************************************************************  * @file           : main.c  * @brief          : Main program body  ******************************************************************************  * @attention  *  * Copyright (c) 2023 STMicroelectronics.  * All rights reserved.  *  * This software is licensed under terms that can be found in the LICENSE file  * in the root directory of this software component.  * If no LICENSE file comes with this software, it is provided AS-IS.  *  ******************************************************************************  *//* USER CODE END Header *//* Includes ------------------------------------------------------------------*/#include"main.h"#include"tim.h"#include"gpio.h"/* Private includes ----------------------------------------------------------*//* USER CODE BEGIN Includes *//* USER CODE END Includes *//* Private typedef -----------------------------------------------------------*//* USER CODE BEGIN PTD *//* USER CODE END PTD *//* Private define ------------------------------------------------------------*//* USER CODE BEGIN PD *//* USER CODE END PD *//* Private macro -------------------------------------------------------------*//* USER CODE BEGIN PM *//* USER CODE END PM *//* Private variables ---------------------------------------------------------*//* USER CODE BEGIN PV *//* USER CODE END PV *//* Private function prototypes -----------------------------------------------*/voidSystemClock_Config(void);/* USER CODE BEGIN PFP *//* USER CODE END PFP *//* Private user code ---------------------------------------------------------*//* USER CODE BEGIN 0 *//* USER CODE END 0 *//**  * @brief  The application entry point.  * @retval int  */intmain(void){/* USER CODE BEGIN 1 */uint16_t pwmVal =0;//调整占空比uint8_t dir =1;//设置改变方向，等于1越来越亮（占空比越来越大），//	等于0就是越来越暗（占空比越来越小）/* USER CODE END 1 *//* MCU Configuration--------------------------------------------------------*//* Reset of all peripherals, Initializes the Flash interface and the Systick. */HAL_Init();/* USER CODE BEGIN Init *//* USER CODE END Init *//* Configure the system clock */SystemClock_Config();/* USER CODE BEGIN SysInit *//* USER CODE END SysInit *//* Initialize all configured peripherals */MX_GPIO_Init();MX_TIM4_Init();/* USER CODE BEGIN 2 */HAL_TIM_PWM_Start(&htim4,TIM_CHANNEL_3);//打开pwm要在初始化之后打开/* USER CODE END 2 *//* Infinite loop *//* USER CODE BEGIN WHILE */while(1){/* USER CODE END WHILE */HAL_Delay(1);if(dir)			pwmVal++;else			pwmVal--;if(pwmVal >500)				dir =0;if(pwmVal ==0)				dir =1;//修改比较值，修改占空比__HAL_TIM_SetCompare(&htim4, TIM_CHANNEL_3, pwmVal);/* USER CODE BEGIN 3 */}/* USER CODE END 3 */}/**  * @brief System Clock Configuration  * @retval None  */voidSystemClock_Config(void){  RCC_OscInitTypeDef RCC_OscInitStruct ={0};  RCC_ClkInitTypeDef RCC_ClkInitStruct ={0};/** Initializes the RCC Oscillators according to the specified parameters  * in the RCC_OscInitTypeDef structure.  */  RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSE;  RCC_OscInitStruct.HSEState = RCC_HSE_ON;  RCC_OscInitStruct.HSEPredivValue = RCC_HSE_PREDIV_DIV1;  RCC_OscInitStruct.HSIState = RCC_HSI_ON;  RCC_OscInitStruct.PLL.PLLState = RCC_PLL_ON;  RCC_OscInitStruct.PLL.PLLSource = RCC_PLLSOURCE_HSE;  RCC_OscInitStruct.PLL.PLLMUL = RCC_PLL_MUL9;if(HAL_RCC_OscConfig(&RCC_OscInitStruct)!= HAL_OK){Error_Handler();}/** Initializes the CPU, AHB and APB buses clocks  */  RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK|RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;  RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_PLLCLK;  RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;  RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV2;  RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV1;if(HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_2)!= HAL_OK){Error_Handler();}}/* USER CODE BEGIN 4 *//* USER CODE END 4 *//**  * @brief  This function is executed in case of error occurrence.  * @retval None  */voidError_Handler(void){/* USER CODE BEGIN Error_Handler_Debug *//* User can add his own implementation to report the HAL error return state */__disable_irq();while(1){}/* USER CODE END Error_Handler_Debug */}#ifdefUSE_FULL_ASSERT/**  * @brief  Reports the name of the source file and the source line number  *         where the assert_param error has occurred.  * @param  file: pointer to the source file name  * @param  line: assert_param error line source number  * @retval None  */voidassert_failed(uint8_t*file,uint32_t line){/* USER CODE BEGIN 6 *//* User can add his own implementation to report the file name and line number,     ex: printf("Wrong parameters value: file %s on line %d\r\n", file, line) *//* USER CODE END 6 */}#endif/* USE_FULL_ASSERT */
```

### 4.6、呼吸灯效果

1.代码编译，烧录之后  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_023_fd57ee73713c.png)

2.LED灯在500ms内慢慢从亮到灭，从灭到亮  
![在这里插入图片描述](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_024_315c351e2888.jpg)

**以上，完**

![图片](D:\电脑文件\公众号知识库\电工_教育_学习\用PWM点亮LED实现呼吸灯__stm32实验__images\img_025_683ddd70c3d9.png)

👆进大家庭⭕圈探讨回复: 交流 

> 这里有深入浅出的电路知识讲解，从基础原理到复杂电路分析，还有趣味十足的电路实验分享，助你紧跟电子硬件领域发展步伐，轻松学电路，就来#电路一点通（7万+粉丝）。
> 
> 分享💬点赞👍在看❤️