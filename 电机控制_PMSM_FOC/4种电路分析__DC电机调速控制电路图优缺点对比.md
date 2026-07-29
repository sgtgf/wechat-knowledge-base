# 4种电路分析 -DC电机调速控制电路图优缺点对比

原创 披武 电路一点通 2024-06-03 18:31 广东

> 原文地址: [https://mp.weixin.qq.com/s/pceTtoDpdHUX4\_kQ5MNm3Q](https://mp.weixin.qq.com/s/pceTtoDpdHUX4_kQ5MNm3Q)

了解广泛用于各种应用的不同直流电机速度控制电路图，每种电路图都有自己的优点和缺点。

-   **本期内容：**  
    
-   直流电机的速度控制原理
    
-   一些直流电机调速电路图
    

-   1\. 使用MOSFET进行电机控制
    
-   2\. 带IC 555的直流电机调速电路图
    
-   3.用arduino控制直流电机
    
-   4.用H桥电路控制直流电机速度
    

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\4种电路分析__DC电机调速控制电路图优缺点对比_images\img_000_7a4018ea75ec.other)

## 直流电机的速度控制原理

当施加到直流电机的电压发生变化时，直流电机的速度也会发生变化。可以通过施加线性电压或使用脉宽调制来改变电压。

控制直流电机的一种常用方法是脉宽调制 （PWM） 方法。在这种方法中，电机的速度取决于调制电压。电压越高，电动机旋转得越快。PWM是一种通过微控制器的数字输出来控制电机模拟电路的优秀技术。

电机的速度可以通过改变控制脉冲的宽度来控制。当占空比为0%时，电机将完全停止，因为没有电压差。当占空比为 50% 时，电机将以最大速度的一半速度旋转，因为电压是全电压的一半。当PWM处于100%状态时，由于PWM的连续输出，电机以最大速度旋转。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\4种电路分析__DC电机调速控制电路图优缺点对比_images\img_001_78e572087728.png)

## 一些直流电机调速电路图：

### 1\. 使用MOSFET进行电机控制

我们提出了一种最简单的电路，可以通过修改施加在电机两端的线性电压来调节直流电机的速度。

当我们调整可变电阻时，它会改变提供给 MOSFET Q1 的 G 引脚的电压。随着引脚G上的电压增加，MOSFET两端的压降减小，导致向电机两端提供更高的电压，从而导致电机速度增加。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\4种电路分析__DC电机调速控制电路图优缺点对比_images\img_002_8c00a3a30958.png)

只有几个组件的基本电路可以调节低功率容量的小型直流电机的电压。该电路有其局限性，因为MOSFET两端的压降很高，从而限制了容量。如果电机太大，MOSFET会过热并最终失效。

### 2\. 带IC 555的直流电机调速电路图

555 定时器 IC 是一种多功能集成电路，用于定时、延迟、脉冲产生和振荡器应用。它因其成本效益而广受欢迎。

在需要电机速度控制的应用中，IC555 负责发射具有不同脉冲宽度和频率的控制脉冲。要改变脉冲宽度，可以调整设置为IC引脚6（TH）的电压。下面的电路利用一个可变电阻器来控制控制脉冲的宽度。

PC817 是一种隔离式光耦合器，有助于防止电源电路影响控制电路。控制脉冲通过光耦合器，然后由两个晶体管Q1和Q2缓冲，以匹配Mosfet Q3的高频开闭速度。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\4种电路分析__DC电机调速控制电路图优缺点对比_images\img_003_2d10b9a642ca.png)

将使用示波器测量来自 IC 的脉冲波形（以黄色显示）和 Mosfet Q3 G 端的电压（以蓝色显示）。NE555发出的脉冲幅度为5V，而端子G处的脉冲幅度为12V。我们知道，MOSFET传导饱和所需的激励电压为10-20V，因此激励满足必要的要求。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\4种电路分析__DC电机调速控制电路图优缺点对比_images\img_004_a83e5f0d98e0.png)

### 3.用arduino控制直流电机

我们在此电路中没有使用 NE555，而是使用包含 AVR 系列微处理器的 Arduino 微芯片。编程和将代码加载到Arduino板上既简单又容易，即使对于那些不知道如何编程的人来说也是如此。您需要做的就是安装IDE应用程序，复制下面提供的程序，然后将其下载到Arduino板上。

为了捕获用户在电位计中所做的电压变化，我们使用引脚 A0。然后，Arduino产生一个控制脉冲，其脉冲宽度与引脚A0上记录的值成正比。驱动电路和电源电路的功能与使用IC555的电路类似。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\4种电路分析__DC电机调速控制电路图优缺点对比_images\img_005_f4ba47a205f6.png)

代码：

// potentiometer connected to analog pin 9  
int pwmPin = 9;   
// variable to store the read value  
  int pot = 0;  
// the setup routine runs once when you press reset:  
void setup() {  
    
}  
// the loop routine runs over and over again forever:  
void loop() {  
// read the input voltage (0 - 1023) on analog pin A0  
  pot = analogRead(A0);  
// analogWrite values from 0 to 255  
  analogWrite(9,pot/4);  
}

### 4.用H桥电路控制直流电机速度

模块 L298N 是一种常用的 H 桥模块，可以很容易能购买。它可以同时控制一个步进电机或两个直流电机。

下面的电路利用H桥电路模块来管理两个直流电机的方向和速度。Arduino 使用引脚 6 和 7 来监控两个开关 SW1 和 SW2 的状态，以控制旋转方向。此外，Arduino 使用引脚 A0 和 A1 读取两个电位器的值，从而控制电机的速度。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\4种电路分析__DC电机调速控制电路图优缺点对比_images\img_006_8efac838b547.png)

Arduino控制两个直流电机的代码：

#define IN1 9  
#define IN2 10  
#define IN3 11  
#define IN4 12  
int speed1=0;  
int speed2=0;  
int direction1=0;  
int direction2=0;  
void setup()  
{  
// Set all the motor control pins to outputs  
  pinMode(IN1, OUTPUT);   
  pinMode(IN2, OUTPUT);  
  pinMode(IN3, OUTPUT);  
  pinMode(IN4, OUTPUT);  
//configure pin 6, 7 as an input and enable the internal pull-up resistor  
  pinMode(6, INPUT\_PULLUP);   
  pinMode(7, INPUT\_PULLUP);  
}  
void loop()  
{  
// Read the values from the potentiometers (0 - 1023)  
  speed1=analogRead(A0);   
  speed2=analogRead(A1);  
// Convert to range of 0-255 (duty cycle)  
  speed1=speed1/4;  
  speed2=speed2/4;  
//\*\*\*\*\*\*\*\*Controlling the dicrection and speed of DC Motor1 \*\*\*\*\*\*\*\*\*//  
  if( digitalRead(6)==0){ //Read the value of the direction switch  
    if( direction1 != digitalRead(6) ){  
    // Now turn off motors 500ms before reversing  
      digitalWrite(IN1, LOW);  
      digitalWrite(IN2, LOW);  
      delay(500);  
      direction1=0;  
    }  
    // Control speed and reverse direction  
    digitalWrite(IN2, LOW);  
    analogWrite(IN1,speed1);  
  }  
  if( digitalRead(6)==1){  
    if( direction1 != digitalRead(6) ){  
     // Now turn off motors 500ms before reversing  
       digitalWrite(IN1, LOW);  
       digitalWrite(IN2, LOW);  
       delay(500);  
       direction1=1;  
    }  
   // Control speed and forward direction  
    digitalWrite(IN2, HIGH);  
    analogWrite(IN1,speed1);  
  }  
//\*\*\*\*\*\*\*\*Controlling the dicrection and speed of DC Motor2 \*\*\*\*\*\*\*\*\*//  
  if( digitalRead(7)==0){ //Read the value of the direction switch  
    if( direction2 != digitalRead(7) ){  
    // Now turn off motors 500ms before reversing  
      digitalWrite(IN3, LOW);  
      digitalWrite(IN4, LOW);  
      delay(500);  
      direction2=0;  
    }  
    // Control speed and reverse direction  
    digitalWrite(IN4, LOW);  
    analogWrite(IN3,speed2);  
    }  
  if( digitalRead(7)==1){ //chạy nghịch  
    if( direction2 != digitalRead(7) ){  
    // Now turn off motors 500ms before reversing  
       digitalWrite(IN3, LOW);  
       digitalWrite(IN4, LOW);  
       delay(500);        
       direction2=1;  
    }  
    // Control speed and forward direction  
    digitalWrite(IN4, HIGH);  
    analogWrite(IN3,speed2);  
  }  
}

H桥模块价格实惠且用户友好，但其容量限制为25W，可以控制最大电流为2A的电机。

![](D:\电脑文件\公众号知识库\电机控制_PMSM_FOC\4种电路分析__DC电机调速控制电路图优缺点对比_images\img_007_e7d48d20de05.other)