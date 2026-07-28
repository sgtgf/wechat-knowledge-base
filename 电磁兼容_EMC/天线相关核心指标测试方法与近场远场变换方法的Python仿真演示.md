# 天线相关核心指标测试方法与近场远场变换方法的Python仿真演示


> 原文地址: [https://mp.weixin.qq.com/s/VZzw8QVfInHK\_\_omvGj8Cg](https://mp.weixin.qq.com/s/VZzw8QVfInHK__omvGj8Cg)

## 一、天线测试背景

继上一篇关于天线的基本介绍后，本文主要从天线测试的角度出发，全面掌握天线测试的核心指标与测试方法，厘清近场、远场、紧缩场的核心差异及变换算法原理，并通过Python脚本实现对应的场变换算法。

## 二、天线测试核心指标及测试方法

天线测试的核心目标是验证天线的辐射性能、匹配性能和极化性能，以下是关键指标及对应的主流测试方法：

### 1\. 核心测试指标（定义+物理意义）

指标名称

定义与物理意义

辐射方向图

描述天线在空间不同方向的辐射/接收场强分布，包含主瓣宽度、副瓣电平、前后比等子指标

增益（Gain）

天线将输入功率集中辐射的能力，相对理想点源（dBi）或半波偶极子（dBd）的功率比值

电压驻波比（VSWR）

反映天线与馈线的阻抗匹配程度，VSWR=1为完全匹配，越大匹配越差

回波损耗（Return Loss）

量化天线的反射功率，值越大（如>15dB）表示反射越少、匹配越好

天线效率

辐射功率与输入功率的比值，反映天线电能转电磁能的能力

极化特性

辐射电磁波的电场方向（线/圆/椭圆极化），核心子指标为轴比、极化纯度

输入阻抗

天线端口的阻抗值（典型50Ω），决定与馈线的匹配效果

相位中心

天线辐射电磁波相位为常数的中心点，影响定位/测向精度

### 2\. 对应测试方法

#### （1）辐射方向图

-   **远场测试法**（最直观）： 满足远场条件 （ 为天线最大尺寸， 为工作波长），将被测天线（DUT）置于转台，旋转并记录不同角度的场强，直接绘制方向图； 适用场景：低频/中小尺寸天线，有开阔测试场地。
    
-   **近场测试法**： 在近场区（）进行平面/柱面/球面扫描，采集近场幅值+相位数据，通过变换算法推导远场方向图； 适用场景：高频（微波/毫米波）、大尺寸天线，场地受限。
    

#### （2）增益

-   **比较法**（工程首选）： 将被测天线与已知增益的标准天线（如标准增益喇叭）在相同条件下测试，通过公式计算：
    
-   **绝对法**：通过方向图积分计算，精度高但操作复杂。
    

#### （3）VSWR/回波损耗

-   **矢量网络分析仪（VNA）法**： 连接VNA与天线端口，测量反射系数 ，推导：，回波损耗。
    

#### （4）其他指标测试

-   天线效率：辐射计法（测辐射/耗散功率）、阻抗法（测辐射电阻/损耗电阻）；
    
-   极化特性：旋转极化法（旋转被测/接收天线，测功率变化计算轴比）；
    
-   输入阻抗：VNA测反射系数，通过  计算（）；
    
-   相位中心：相位拟合/方向图法（通过不同角度的相位分布确定）。
    

## 三、近场、远场、紧缩场的差异及变换算法原理

### 1\. 三者核心差异

特性

近场（Near Field）

远场（Far Field）

紧缩场（Compact Range）

距离条件

（分感应/辐射近场）

（近场距离）

波前形态

球面波（幅值/相位随距离剧烈变化）

平面波（幅值均匀、相位线性）

模拟平面波（反射面矫正球面波）

测试场地

小（室内暗室即可）

大（开阔场/大型暗室）

中等（室内暗室+反射面）

核心优势

场地要求低、精度高

测试简单、物理意义明确

紧凑、高频大天线适配性好

核心劣势

需变换算法、计算复杂

场地受限、易受干扰

反射面加工精度要求极高

### 2\. 场变换算法原理（核心：近场→远场变换，NF-FF）

NF-FF变换的本质是利用**惠更斯-菲涅尔原理**，将近场扫描的幅值/相位数据通过数学变换外推到远场，主流类型如下：

#### （1）平面近场→远场变换（最常用）

数学核心是**二维傅里叶变换**，原理公式：

-   符号说明：（波数），（俯仰角）、（方位角）， 为近场扫描面电场， 为远场距离；
    
-   物理意义：将近场的球面波分解为不同方向的平面波分量，叠加得到远场平面波。
    

#### （2）柱面/球面近场变换

-   柱面变换：通过柱面波展开+傅里叶级数推导远场；
    
-   球面变换：通过球谐函数展开，将近场球面波分解为各阶球谐分量，外推远场。
    

#### （3）紧缩场无“变换算法”

紧缩场通过**高精度反射面（抛物面/双曲面）** 将馈源发出的球面波反射为平面波，直接模拟远场环境，无需数学变换，核心是“硬件模拟”而非“软件计算”。

## 四、Python实现平面近场→远场变换算法

### 1\. 完整代码实现

`import numpy as np   import matplotlib.pyplot as plt   from mpl_toolkits.mplot3d import Axes3D      # ===================== 1. 定义基础参数 =====================   lambda_ = 0.03# 工作波长（10GHz，λ=3cm），单位m   k = 2 * np.pi / lambda_  # 波数   D = 0.5# 天线最大尺寸，单位m   scan_range = 0.6# 近场扫描面范围（-0.6~0.6m），需覆盖天线   N = 512# 扫描点数（二维），点数越多精度越高   # 远场角度范围   theta_range = np.linspace(-np.pi/4, np.pi/4, N)  # 俯仰角范围（-45°~45°）   phi_range = np.linspace(0, 2*np.pi, N)           # 方位角范围（0°~360°）   phi_2d = 0# 二维远场对比时的固定方位角      # ===================== 2. 模拟近场扫描数据 =====================   x = np.linspace(-scan_range, scan_range, N)   y = np.linspace(-scan_range, scan_range, N)   X, Y = np.meshgrid(x, y)   # 模拟天线近场电场（高斯分布幅值 + 线性相位，更贴近实际天线特性）   E_near_amp = np.exp(-((X**2 + Y**2)/(0.2**2)))  # 幅值高斯分布   E_near_phase = np.exp(1j * k * (X * 0.1 + Y * 0.1))  # 线性相位分布   E_near = E_near_amp * E_near_phase  # 复电场      # 计算近场归一化方向图（dB），限制最小值避免log(0)   near_pattern = 20 * np.log10(np.maximum(np.abs(E_near) / np.max(np.abs(E_near)), 1e-3))      # ===================== 3. 场变换核心算法 =====================   def near2far_2d(E_near, x, y, lambda_, theta_range, phi):       """二维远场变换（固定方位角，仅俯仰角变化）"""       k = 2 * np.pi / lambda_       E_far = np.zeros_like(theta_range, dtype=np.complex128)       dx = x[1] - x[0]  # 扫描步长       dy = y[1] - y[0]              for i, theta in enumerate(theta_range):           # 傅里叶变换核           kernel = np.exp(1j * k * (X * np.sin(theta) * np.cos(phi) + Y * np.sin(theta) * np.sin(phi)))           # 二维数值积分（求和代替积分）           integral = np.sum(E_near * kernel) * dx * dy           # 远场电场计算（R取1000m，远场距离）           E_far[i] = (1j / lambda_) * np.exp(-1j * k * 1000) / 1000 * integral              return E_far      def near2far_3d(E_near, x, y, lambda_, theta_range, phi_range):       """三维远场变换（俯仰角+方位角全范围）"""       k = 2 * np.pi / lambda_       E_far_3d = np.zeros((len(theta_range), len(phi_range)), dtype=np.complex128)       dx = x[1] - x[0]       dy = y[1] - y[0]              for i, theta in enumerate(theta_range):           for j, phi in enumerate(phi_range):               kernel = np.exp(1j * k * (X * np.sin(theta) * np.cos(phi) + Y * np.sin(theta) * np.sin(phi)))               integral = np.sum(E_near * kernel) * dx * dy               E_far_3d[i, j] = (1j / lambda_) * np.exp(-1j * k * 1000) / 1000 * integral              return E_far_3d      # 执行变换   E_far_2d = near2far_2d(E_near, x, y, lambda_, theta_range, phi_2d)   E_far_3d = near2far_3d(E_near, x, y, lambda_, theta_range, phi_range)      # 计算归一化方向图（dB），限制最小值避免log(0)   far_pattern_2d = 20 * np.log10(np.maximum(np.abs(E_far_2d) / np.max(np.abs(E_far_2d)), 1e-3))   far_pattern_3d = 20 * np.log10(np.maximum(np.abs(E_far_3d) / np.max(np.abs(E_far_3d)), 1e-3))      # ===================== 4. 绘图：近场、远场（二维+三维） =====================   plt.rcParams['font.sans-serif'] = ['SimHei']  # 解决中文显示   plt.rcParams['axes.unicode_minus'] = False      # ========== 近场方向图（二维热力图 + 三维曲面图）==========   fig1 = plt.figure(figsize=(16, 8))   fig1.suptitle('天线近场方向图', fontsize=16, fontweight='bold')      # 子图4-1：近场二维热力图   ax1_1 = plt.subplot(2, 2, 1)   im1 = ax1_1.imshow(near_pattern, extent=[-scan_range, scan_range, -scan_range, scan_range],                       cmap='jet', vmin=-30, vmax=0)   ax1_1.set_xlabel('X 坐标 (m)')   ax1_1.set_ylabel('Y 坐标 (m)')   ax1_1.set_title('近场二维热力图（归一化 dB）')   plt.colorbar(im1, ax=ax1_1, label='幅值 (dB)')      # 子图4-2：近场三维曲面图（X-Y平面，幅值为Z轴）   ax1_2 = fig1.add_subplot(2, 2, 2, projection='3d')   surf1 = ax1_2.plot_surface(X, Y, near_pattern, cmap='jet', linewidth=0, antialiased=True,                               vmin=-30, vmax=0)   ax1_2.set_xlabel('X 坐标 (m)')   ax1_2.set_ylabel('Y 坐标 (m)')   ax1_2.set_zlabel('归一化幅值 (dB)')   ax1_2.set_title('近场三维曲面图')   ax1_2.set_zlim(-30, 0)   plt.colorbar(surf1, ax=ax1_2, label='幅值 (dB)', shrink=0.6)      # 子图4-3：远场二维折线图（固定方位角）   ax2_1 = plt.subplot(2, 2, 3)   ax2_1.plot(theta_range * 180/np.pi, far_pattern_2d, 'b-', linewidth=2)   ax2_1.set_xlabel('俯仰角 (°)')   ax2_1.set_ylabel('归一化增益 (dB)')   ax2_1.set_title(f'远场二维方向图（方位角 φ={phi_2d*180/np.pi:.0f}°）')   ax2_1.grid(True)   ax2_1.set_ylim(-30, 0)      # 子图4-4：远场三维球坐标方向图   ax2_2 = fig1.add_subplot(2, 2, 4, projection='3d')   THETA, PHI = np.meshgrid(theta_range, phi_range)   # 球坐标转笛卡尔坐标（归一化半径用于绘图）   R = np.clip((far_pattern_3d + 30)/30, 0, 1)  # 把-30~0dB映射到0~1   X_far = R * np.sin(THETA) * np.cos(PHI)   Y_far = R * np.sin(THETA) * np.sin(PHI)   Z_far = R * np.cos(THETA)      # 绘制三维曲面   surf2 = ax2_2.plot_surface(X_far, Y_far, Z_far, cmap='jet', linewidth=0, antialiased=True,                              facecolors=plt.cm.jet(R))   ax2_2.set_xlabel('X 方向')   ax2_2.set_ylabel('Y 方向')   ax2_2.set_zlabel('Z 方向')   ax2_2.set_title('远场三维球坐标方向图')   # 添加颜色条   m = plt.cm.ScalarMappable(cmap='jet')   m.set_array(far_pattern_3d)   plt.colorbar(m, ax=ax2_2, label='归一化增益 (dB)', shrink=0.6)      plt.tight_layout()   plt.show()      # ===================== 6. 输出关键参数 =====================   print("="*60)   print("近场→远场变换关键结果对比：")   print(f"近场最大幅值（归一化）：{np.max(near_pattern):.2f} dB")   print(f"远场最大增益（归一化）：{np.max(far_pattern_2d):.2f} dB")   # 计算-3dB主瓣宽度   theta_deg = theta_range * 180/np.pi   main_lobe_idx = np.where(far_pattern_2d > -3)[0]   if len(main_lobe_idx) > 1:       main_lobe_width = theta_deg[main_lobe_idx[-1]] - theta_deg[main_lobe_idx[0]]       print(f"远场主瓣宽度（-3dB）：{main_lobe_width:.2f} °")   else:       print("远场主瓣宽度（-3dB）：计算失败（数据点数不足）")   print("="*60)   `

![图片描述1](https://mmbiz.qpic.cn/mmbiz_png/T1DibIaiclU40RIicaC9f39GxVqSPIEqGCvEDFoKRialNcdjQ6IrJuMdE66gY4iczVc8wSUkW0Q49oJe8XHIu3bEVgBQlRh9UbqHZAguric1VQtUo/640?wx_fmt=png&from=appmsg)

图1 平面近场->远场转换结果

![图片描述1](https://mmbiz.qpic.cn/sz_mmbiz_png/T1DibIaiclU434vxDDrTU4OSV1wSCNhw428ZGmuffRfnuhF9PIA6nTLgV4jtxiaRUFQfHmyoU15CpUUMTKAjyAJlgibibpxqIvu7Bzv5vxTsgWwQ/640?wx_fmt=png&from=appmsg)

图2 近场与变换后远场对比

### 2\. 代码关键解释

-   **参数定义**：模拟10GHz天线的近场数据，扫描范围覆盖天线尺寸；
    
-   **近场数据模拟**：用高斯分布模拟天线近场幅值，复指数项模拟相位分布；
    
-   **核心变换函数**：
    

1.  遍历远场俯仰角，计算每个角度的傅里叶变换核；
    
2.  用数值积分（求和）代替连续积分，实现二维傅里叶变换；
    
3.  代入NF-FF公式计算远场电场；
    

-   **可视化**：绘制归一化远场方向图，输出主瓣宽度等关键参数。
    

## 五、总结

### 关键点回顾

1.  **天线测试核心**：辐射方向图（远场直接测/近场变换测）、增益（比较法最常用）、VSWR（VNA测反射系数）是最核心的测试指标；
    
2.  **场域差异**：近场为球面波（需变换）、远场为平面波（直接测）、紧缩场用反射面模拟平面波（场地紧凑）；
    
3.  **变换算法**：平面NF-FF变换的核心是二维傅里叶变换，Python可通过numpy实现数值积分版的变换，关键是傅里叶核的计算和积分近似。
    

### 扩展说明

-   实际工程中，近场扫描数据为离散点，需考虑采样率、窗函数（减少频谱泄露）；
    
-   柱面/球面NF-FF变换可基于本代码扩展（替换积分核为柱面/球面波核）；
    
-   紧缩场无需变换算法，但需校准反射面精度和暗室吸波性能。
    

  

如果你对发布的文章感兴趣，欢迎评论区留言参与评论，合作事宜请关注🍩微信朋友圈。应粉丝朋友要求，精选了一些专业类书籍，需要的朋友请前往🏪阿斌的橱窗。

![图片描述1](https://mmbiz.qpic.cn/mmbiz_png/T1DibIaiclU41QMUpVEOSbM9F3VFC2gGzreyrp5fLNnKSeu72AXU2kShb8uFd9DhHsiaFGq1c3JRYkWicddFjRHMuoib12t8uIcUnfVADlCVfrzU/640?wx_fmt=png&from=appmsg)

![阿斌的橱窗](https://mmbiz.qpic.cn/sz_mmbiz_png/T1DibIaiclU40t2e9HYSXTQo7lfRicAA76koKQ9sJ3KAAvK7Wwa6icb9Aee6SNrlwszdAcSubcia6ceCxTc5QFYKaZurqQN9OicSZbNAwOckYXPCE/640?wx_fmt=png&from=appmsg)

![图片描述1](https://mmbiz.qpic.cn/sz_mmbiz_gif/T1DibIaiclU40KCeEW382HSbUgLHLWpCN9kIibnTFc7ltZu5VDeUXpfm8oQ5AKKV7y5KDEGraTyKdHjuPGcCoH4vqgYbsxgc8p1lN7MaiaaEoWg/640?wx_fmt=gif&from=appmsg)

**$热爱生活\\cdot分享技术\\cdot心向远山$**