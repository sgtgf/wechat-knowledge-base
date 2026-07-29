# 利用Matlab计算示波器波形的谐波

原创 电路一点通 2024-03-22 18:58 广东

> 原文地址: [https://mp.weixin.qq.com/s/BN5I6BnOf0ZWln7tDylFMQ](https://mp.weixin.qq.com/s/BN5I6BnOf0ZWln7tDylFMQ)

![](D:\电脑文件\公众号知识库\电工_教育_学习\利用Matlab计算示波器波形的谐波_images\img_000_0b2a21d3f48e.other)进入圈子，回复 ：交流

示波器波形如下：

![](D:\电脑文件\公众号知识库\电工_教育_学习\利用Matlab计算示波器波形的谐波_images\img_001_b0f336b35e65.png)

  

将上述示波器电压波形数据保存为CSV格式。

1 打开MATLAB，点击“File”—“Import Data…”，然后选择要导入的CSV文件。

2 进入“Import Wizard”窗口，CSV文件可能会有头文件信息，如下图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\利用Matlab计算示波器波形的谐波_images\img_002_b46b8d62b896.jpg)

  

在“Number of text header lines”选项取 15，去掉头文件信息，变为下图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\利用Matlab计算示波器波形的谐波_images\img_003_17fd58e023f3.jpg)

  

3 点击“Next” and “Finish”

4 书写如下语句，将CSV转化得到的时间和电压值赋值给一个符合Matlab定义的结构体变量。a=2.09;

time=data(:,1)-a;

values=data(:,2);

scope.time=time;

scope.signals.values=values;

scope.signal.dimensions=1;

这样结构体scope可以被Matlab scope设置认可。  
  

5 建立一个简单Simulink模型，如下

![](D:\电脑文件\公众号知识库\电工_教育_学习\利用Matlab计算示波器波形的谐波_images\img_004_8b3a16017969.jpg)

  

在“工作空间中选择数据“ 模块中写入需显示的数据scope，点击Scope —> Data History Setting, 选择“Save data to workspace”,变量名可任意书写: aaaa, 数据类型选择带时间的数据: Structure with time。

![](D:\电脑文件\公众号知识库\电工_教育_学习\利用Matlab计算示波器波形的谐波_images\img_005_7b29eab50520.jpg)

  

6 设置Powergui模块的离散周期1us，点击开始仿真。

7 仿真结束后点击Powergui\\FFT Analysis，选择FFT周期为2个周期，计算谐波如下图：

![](D:\电脑文件\公众号知识库\电工_教育_学习\利用Matlab计算示波器波形的谐波_images\img_006_b328a24c2a30.jpg)