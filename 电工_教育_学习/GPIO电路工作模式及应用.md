# GPIO电路工作模式及应用

原创 电路一点通 2024-11-02 11:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/r1FHaU9ywnxQzweMaR8DyA](https://mp.weixin.qq.com/s/r1FHaU9ywnxQzweMaR8DyA)

#### **文章目录**

-   1 GPIO介绍
    
-   2 GPIO的工作模式
    

-   2.1 浮空输入
    
-   2.2 上拉输入
    
-   2.3 下拉输入
    
-   2.4 模拟输入
    
-   2.5 开漏输出
    
-   2.6 推挽输出
    
-   2.7 复用开漏输出
    
-   2.8 复用推挽输出
    
-   2.9 其他
    
      
    
-   3 应用方式
    
-   4 常用库函数
    

![](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO电路工作模式及应用_images\img_000_629528518098.other)

**👇👇👇更多技术****资料👇👇👇**

![](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO电路工作模式及应用_images\img_001_e0cbcaf82b73.other)

#### 1 GPIO介绍

![](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO电路工作模式及应用_images\img_002_2ac946df5fd8.png)  
  

-   保护二极管：保护引脚，让引脚的电压位于正常的范围
    
-   施密特触发器：将外部的模拟信号转换为数字信号
    
-   上/下拉电阻：通过控制开关，可以设置输入引脚的默认电平状态
    
-   输入数据寄存器：外部引脚电平转换为数字信号后保存到输入数据寄存器，然后由内部处理器读取
    
-   输出数据寄存器：内部处理器将数据写入输出数据寄存器，然后通过输出控制电路输出到外部引脚
    
-   位设置/清除寄存器：该寄存器用于修改输出数据寄存器中的某一位的值
    

#### 2 GPIO的工作模式

##### 2.1 浮空输入

![](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO电路工作模式及应用_images\img_003_098d9a856928.png)

数据流向：电压直接由GPIO引脚通过施密特触发器转化为高低电平后，将数据存储到输入数据寄存器中，微处理器就可以读取输入寄存器的数据。

特点：处于该模式的GPIO口未接外设，处于悬空状态时，引脚的电平是不确定的，此时读取输入寄存器的值是不确定的。  
  

##### 2.2 上拉输入

![](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO电路工作模式及应用_images\img_004_5a9c81de2bb0.png)

与浮空输入的区别在于，上拉输入模式下，上拉电阻上方的开关会闭合，I/O端口的电压就会Vdd小一点，也就是说，当引脚属于悬空状态时，引脚默认是高电平。

数据流向：与浮空输入相同。

特点：当输入引脚悬空时，输入是高电平。  
  

##### 2.3 下拉输入

![](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO电路工作模式及应用_images\img_005_f5dede595a00.png)

与浮空输入的区别在于，上拉输入模式下，上拉电阻上方的开关会闭合，I/O端口的电压就会Vss大一点，也就是说，当引脚属于悬空状态时，引脚默认是低电平。

数据流向：与浮空输入相同。

特点：当输入引脚悬空时，输入是低电平。  
  

##### 2.4 模拟输入

![](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO电路工作模式及应用_images\img_006_35f113a7fbba.png)

浮空输入、上拉输入、下拉输入模式下，输入的都是数字信号，而模拟输入是直接将外部的模拟信号输入，因此，上拉电阻、下拉电阻、施密特触发器的开关都会断开，输入引脚的电平直接到内部。

数据流量：外部端口引脚直接连接到内部进行模拟输入。

特点：用于模拟信号的输入。

注意：只有ADC和DAC需要将IO端口配置为模拟通道，其他外设功能需要将IO配置为复用功能模式。  
  

##### 2.5 开漏输出

![](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO电路工作模式及应用_images\img_007_0d7f981e56c5.other)

  
数据流向：处理器将数据写入输出数据寄存器，写入过程中可以通过位设置/清除寄存器(`BSRR`)修改单个位的数据，输出数据寄存器中的数据通过输出控制电路，然后通过N-MOS管到达外部输出引脚。同时，外部引脚的电平还可以通过浮空输入模式读取。

特点：当输出数据0时，N-MOS管导通，输出低电平；当输出数据1时，N-MOS管截止，输出引脚为`高阻态`(如果需要输出高电平，需要外接上拉电阻)。  
  

##### 2.6 推挽输出

![](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO电路工作模式及应用_images\img_008_48afcab01cb7.png)

特点：当输出数据0时，输出低电平；当输出1时，输出高电平。开关速度快，负载能力强，是最常使用的输出模式。

##### 2.7 复用开漏输出

![](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO电路工作模式及应用_images\img_009_86266fa5b27f.png)

特点：与开漏输出的区别是，复用开漏输出是从片上外设输出。

##### 2.8 复用推挽输出

![](D:\电脑文件\公众号知识库\电工_教育_学习\GPIO电路工作模式及应用_images\img_010_6aabed17f081.png)

特点：与推挽输出的区别是，复用推挽输出是从片上外设输出，串口通信中经常使用复用推挽输出。

##### 2.9 其他

上电复位后，GPIO引脚默认为浮空状态，部分特殊引脚为特定状态。  
  

#### **3 应用方式**

-   普通GPIO输入：配置引脚为浮空输入、上拉输入、下拉输入，不使能该引脚的复用功能模块。
    
-   普通GPIO输出：配置引脚为推挽输出、开漏输出，不使能该引脚的复用功能模块。
    
-   模拟输入：配置引脚为模拟输入，不使能该引脚的复用功能模块。
    
-   内置外设的输入：配置该引脚为浮空输入、上拉输入、下拉输入，使能该引脚的复用功能模块。
    
-   内置外设的输出：配置该引脚为复用推挽输出、复用开漏输出，使能该引脚的复用功能模块。
    

注：常规使用GPIO时，输出通常使用推挽输出，输入则使用上拉输入或者下拉输入，具体需要根据外部器件的电路确定。

#### **4 常用库函数**

-   GPIO\_Init：初始化
    
-   GPIO\_ReadInputDataBit/GPIO\_ReadInputData：读取某个口的输入电平，实际读取的就是输入数据寄存器的值
    
-   GPIO\_ReadOutputDataBit/GPIO\_ReadOutputData：读取某个口的输出电平，实际读取的就是输出数据寄存器的值
    
-   GPIO\_SetBits：设置某个口输出高电平，实际操作的是位设置寄存器
    
-   GPIO\_ResetBits：设置某个口输出低电平，实际操作菜单是位清除寄存器
    

作者：luofengmacheng

     注：本文推仅代表作者观点，但对内容不作任何保证或承诺。请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请告知，本公众号将及时予以修改或删除。

******进大家庭⭕圈探讨回复:****** ******交流******

## **一点通推荐**

  

-   [电路识图从入门到精通-PDF（312页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522049&idx=2&sn=61ddbf252640a60df68aeb96f02b39d8&chksm=fcef7463cb98fd751177fed22f9aae659c6deb5fc910d111e38eb21d36bcee10d9f478fff6b7&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)
    
-   [反激开关电源基本原理和电路拓扑](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247522155&idx=2&sn=ba8591c7bcfbedc40c2ac20a96c85df5&chksm=fcef7409cb98fd1fcd259c87089e4ff72d5524f2f8de9d1f021d42a4786581ae6a9950bdb738&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)
    
-   [电子工程师必备-九大系统电路识图宝典.pdf(702页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523195&idx=2&sn=5a5ab2b435c0a79f288da935def82fb0&chksm=fcef7819cb98f10ffb664f1a2962d3513ba7c68024e70395289a9ef80e5250d178d0b3babfaa&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)
    
-   [【技能图谱】硬件工程师必知-元器件篇，看完瞬间思路清晰有方向](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247523504&idx=1&sn=d363487083884443708041309c70ea90&chksm=fcef7fd2cb98f6c4c9cc453aada393f73ceebb7bf657c206a27b6e2c0ad7a1cdd591a469d0f3&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)
    
-   [看图学集成电路选用检测与查用100问(pdf 302页）](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524523&idx=2&sn=c13a2a72e4881684aa99d4c0bff9a673&chksm=fcef83c9cb980adf5590ab1521a12462517c21a2d0ca966916e56aa6c00d32ed653fdb8eb535&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)
    
-   [实 用 电 路 手 册（pdf-661页）-设计参考、维修学习](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524734&idx=2&sn=b9ef5b9108c0131f5961f4587fb17c3f&chksm=fcef821ccb980b0a564ef4a85e92bc86920e2cf4060e6a710efa3b1eb0b52253ef8cdfc53a0a&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)
    
-   [9天练会电子电路识图.pdf资料（302页），跟着学、跟着练增长经验](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247524867&idx=2&sn=14f67fca00e54378582aecad92f786c0&chksm=fcef8161cb980877d5f841d16f1e29225994c44d938dc9ce240c955264be9448063ad9a1bbfc&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)
    
-   [常用电子元器件识别与检测（166页）.ppt资料](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247526889&idx=2&sn=98fad620a1328d7aec7cc95d3151327c&chksm=fcef8a8bcb98039dcd9b2a17e28ab8ae2709adefd36f3eaf0f044b64869347e7547973b7b1c8&scene=21#wechat_redirect)  
    [](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)
    
-   [PCB设计参考:《PADS电路板设计超级手册》.pdf](http://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247527967&idx=4&sn=d37320ff2f2a56c2259166932b48585c&chksm=fcef8d7dcb98046bc2bf3bc6d4c7ce0345f97f1328884ea9eb7c3e3725a86bcca65274ef82db&scene=21#wechat_redirect)