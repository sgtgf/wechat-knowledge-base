# Simulink“弱磁控制沙盘推演”之“砌墙”篇（二）：构筑“最终裁决”之墙

原创 傅存敬 电磁散人 2025-11-24 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/o\_\_zt1Oksvh1axqojpAOBg](https://mp.weixin.qq.com/s/o__zt1Oksvh1axqojpAOBg)

经过前几期文章中对C代码的仿真模型搭建，此刻我们脚下的“弱磁防线”已经坚不可摧。但正如我们在理论系列的文章中所知，弱磁并非万能。当战况恶化到“飞车”失控，母线电压告急时，仅仅依靠弱磁部队的“阵地战”已经不够了。

此刻，我们需要构筑整个防御体系的最后一道，也是最坚固的一道屏障——**“最终裁决”之墙**！

这面墙，将是我们的“战争指挥中心”。它不仅要处理正常的功率限制，更要在危急时刻，聆听来自“[雷霆守护神](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484623&idx=1&sn=57c5aff5cb4609da11a5aad469b26ce2&scene=21#wechat_redirect)”（过压保护PI）的神谕，并以“军法官”的身份，对`Id`和`Iq`这两位即将出征的“将军”，下达最终的、不可违抗的裁决！

今天这篇文章，将和各位同仁第一次在我们的弱磁控制沙盘里，搭建一个完整的**反馈控制回路**，这将是我们Simulink技能的一次质的飞跃！

下面，让我们开始一起建造这座指挥中心！

我们的目标，是搭建一个完整的`Power_Limit_Module`。这个模块的职责，是接收来自弱磁模块的`Id, Iq`指令，然后根据功率和母线电压情况，进行最终的限幅，输出真正会被送往电流环的`Id, Iq`指令。

#### **Step 1: 规划“指挥中心”的蓝图——定义输入、输出与反馈**

1\. 在昨日的Simulink模型中，拖入一个新的 **Subsystem** 模块，命名为`Power_Limit_Module`

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFhpxRPwqDhJEuNaQkPeDhomiaHzDE75ePicLefrGmiabo2eCnLpqjmb4jez1icMnqp0K91bzocibehW7Q/640?wx_fmt=png&from=appmsg)

2\. 双击进入子系统。

**3\. 思考“指挥中心”的输入（Inputs）:**

-   Id\_in, `Iq_in`: 来自弱磁模块的，已经过弱磁修正的d, q轴电流指令。
    
-   Ud\_fb, `Uq_fb`: d, q轴的**反馈电压**。这是计算预测功率 `wP` 所必需的！
    
-   U\_bus: 母线电压，过压保护PI控制器需要。
    

**4\. 创建输入:**

-   拖入5个 **Inport** 模块，分别命名为`Id_in`, `Iq_in`, `Ud_fb`, `Uq_fb`, `U_bus`。
    

**5\. 思考“指挥中心”的输出（Outputs）:**

-   Id\_out, `Iq_out`: 经过最终裁决后的d, q轴电流指令。
    

**6\. 创建输出:**

-   拖入2个 **Outport** 模块，分别命名为`Id_out`, `Iq_out`。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFhpxRPwqDhJEuNaQkPeDhoCuuY4PDicWsjBiblK79RyiaUtOBftCK7DXWfuibe3Q9UFtjUupWkSQYGaA/640?wx_fmt=png&from=appmsg)

蓝图已定！这个“指挥中心”比之前的“墙”要复杂，因为它不仅要处理电流，还要分析电压。

这是我们今天最核心、最精彩的部分！我们将搭建一个监听母线电压，并动态输出“最大允许再生功率`wREV`”的反馈回路。

**(A) 搭建“过压PI控制器”这块新“砖”**

1\. 在`Power_Limit_Module`内部，再拖入一个**Subsystem**，命名为`Overvoltage_PI_Controller`。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFhpxRPwqDhJEuNaQkPeDhof2yvfaN6ApibviatZjhabiaDicr9Pl7192Lg3Vrfhb4fibCeSqFN7sQSpTA/640?wx_fmt=png&from=appmsg)

2\. 进入这个新子系统，定义它的**输入**：`U_bus_in`和`current_power_in`（用于积分项初始化）。定义它的**输出**：`wattage_limit_out`。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFhpxRPwqDhJEuNaQkPeDhoYibInKABO6LkqicOoguvAgUUOCRUjicU92CLsYiblqnz62Y5XibICS5uILA/640?wx_fmt=png&from=appmsg)

**3\. 内部逻辑（参考[本文](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484618&idx=1&sn=4ffa6ceb2737dcc0084d9bef7db51184&scene=21#wechat_redirect)讲解）**:

-   用一个`Relational Operator`模块（设置为`>`）比较`U_bus_in`和一个代表`uMAX`的`Constant`模块。其输出是一个布尔信号（0或1）。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFhpxRPwqDhJEuNaQkPeDhoo8SbJ8zhZpMp3qJOL4icP8Mrc3ZKJgBw4F90oG8QCE4XOlguaeq1yKw/640?wx_fmt=png&from=appmsg)
    
-   用这个布尔信号，去控制一个`Switch`模块。
    

-   当`U_bus > uMAX`时（Switch的中间输入为1），执行过压保护逻辑。
    
-   否则，输出一个默认的、非常大的负数（比如`-1e6`），表示不限制再生功率。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGSM5OiaZcAdJYic5QOU6z9T6SWPboiaytgbEcByFm7GvuYTjY0Ys4qPEl8gFRHibsmeMndTDMlmp9KfA/640?wx_fmt=png&from=appmsg)
    

-   **过压保护逻辑：**

-   用`Sum`模块计算`eDC = U_bus_in - uMAX`。
    
-   将`eDC`送入一个**带状态复位功能的PI控制器**！这里可以用一个带外部复位端口的Discrete-Time Integrator模块，双击这个模块，打开它的参数配置，这里面别有洞天！
    
-   Integrator method: `Forward Euler` (默认即可，模拟`+=`)
    
-   Gain value: 写入`1.0` (或者把增益放在外面乘好再输入)
    
-   **`External reset`: 在下拉菜单中选择`level`。模块上会出现一个`'Rst'`端口。**
-   **`Reset condition`**: `Non-zero`。这表示只要复位端口的信号不是0，就执行复位。
    
-   **`Initial condition source`**: 在下拉菜单中选择`external`。模块上会出现一个`'x0'`端口。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGSM5OiaZcAdJYic5QOU6z9T6YTPUPWW5tlkic3uZEuAPiboPicOuLgdlDfXvd5rd0bUv6r5Tdc1zEcqUg/640?wx_fmt=png&from=appmsg)
    
-   将输入`in` (`eDC * Ki`) 连接到`Discrete-Time Integrator`的主输入端。
    
-   将输入`reset_trigger` 连接到`'Rst'`端口。
    
-   将输入`current_power_in` 连接到`'x0'`端口
    
-   将`Discrete-Time Integrator`的输出，连接到另一个双端`sum`输入端口，Sum模块的另一个输入口接入eDC的比例项。Sum的输出即为最终的`bSP`！
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGSM5OiaZcAdJYic5QOU6z9T6RhIKqBL1IsyicMzJu9advUDDnCOHPK1CRtECxdpze8sPXbyJgRIcbsg/640?wx_fmt=png&from=appmsg)
    

-   用`Saturation`模块将其限制在`[无穷小的负数, 0]`之间。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGSM5OiaZcAdJYic5QOU6z9T6QjgiaicTDm6qJkHBdqbibhNyHrCGicOx2mAy1kVD5Xt9jbW1wmyzarJHng/640?wx_fmt=png&from=appmsg)
    

-   Saturation的输出接入Switch上端，将`Switch`的最终输出连接到`wattage_limit_out`。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGSM5OiaZcAdJYic5QOU6z9T6uH7sHBHnE1icYlAyAKKx2V0ntYsWnB2srosblxlLZW8uTQ6QqArd3tg/640?wx_fmt=png&from=appmsg)

**这块“砖”非常复杂，是带状态、带反馈的“智能砖”！** 我们暂时可以先简化它，用一个简单的`Switch`来模拟：当`U_bus_in`超限时，输出一个固定的较小负数`wREV`，否则输出一个很大的负数。  

我们在这块“砖”上花费的时间是完全值得的，因为它彻底让我们彻底掌握了如何在Simulink中构建一个带**条件复位**、**外部初始值**和**多模态输出**的复杂反馈控制器。这个技能，是你未来搭建任何高级控制系统都不可或缺的核心能力。

**(B) 在“指挥中心”里使用“过压PI”**

1\. 返回到Power\_Limit\_Module主模型画布，把这块我们刚刚搭建的Overvoltage\_PI\_Controller的“砖”放在画布的**左侧**区域。因为在我们的数据流中，它代表着“规则的制定者”，处于逻辑的上游。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGSM5OiaZcAdJYic5QOU6z9T6G6tzZaXib6wcnFQKPmZbbLOWlXkDuDrDJib68N1jIFh2MUtAAeIibQIhQ/640?wx_fmt=png&from=appmsg)

现在，我们的“指挥中心”里，已经有了一个核心部件！它就像一个待命的“雷霆守护神”，静静地等待着被激活。

**2\. 连接`U_bus`**:从`U_bus`端口拉出一条信号线，连接到`Overvoltage_PI_Controller`模块的 **`U_bus_in`** 输入端口。！

 完成！“守护神”现在已经能实时“看到”母线电压了。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGSM5OiaZcAdJYic5QOU6z9T69icfYXoBLZrnWMeQVmtkibXJoOhMrb4G6jg0ZXzsQoDiblPZ6VibqdABgQ/640?wx_fmt=png&from=appmsg)

**3\. 连接`current_power_in` 【重点！】**:

-   **思考: `current_power_in` 这个端口，需要的是“当前的功率值”，用于在复位时初始化积分器。这个“当前的功率值” (`wP`) 是在哪里计算的呢？是在模块的“下游”，也就是我们即将搭建的“军法官”部分。**
-   **我们遇到了一个经典的“鸡生蛋还是蛋生鸡”的问题！左边的模块需要右边模块的计算结果。这在图形化界面上怎么连线？**
-   **答案就是 `From` 模块！我们在这里“预定”一个信号！**
-   从Simulink库中，拖入一个 **`From`** 模块。
    
-   将这个`From`模块，连接到`Overvoltage_PI_Controller`的 **`current_power_in`** 输入端口。
    
-   双击这个`From`模块，在`Goto tag`处，手动输入一个我们约定的“信号标签”，就叫 **`wP`**。
    
-   **这意味着: “守护神”说：“我需要一个叫做`wP`的信号，谁都可以，只要你有名叫`wP`的信号，就请传送给我！” 稍后，我们会在计算出实际功率的地方，用一个`Goto`模块，以`wP`为标签，把信号“广播”出去。这就形成了一个完美的反馈！**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGSM5OiaZcAdJYic5QOU6z9T63IRtQGjYqEtCy4kP04F2VDaQyiczFDeg33E0DiatGSLxSQTNXQoOZpxg/640?wx_fmt=png&from=appmsg)

现在，“守护神”的所有输入都已经接好，虽然其中一条线（`wP`）暂时还悬而未决，但我们已经为它预留了接口。

#### **4\. 广播“最高指令”——发出`wREV`神谕**

“守护神”经过内部复杂的计算，会从它的`wattage_limit_out`端口输出一个结果。这个结果，就是我们梦寐以求的“最大允许再生功率”，我们称之为 **`wREV`**。这个`wREV`信号，就是“军法官”执行裁决的唯一法律依据！

我们同样需要把它“广播”出去。

-   从Simulink库中，拖入一个 **`Goto`** 模块。
    
-   将`Overvoltage_PI_Controller`模块的输出端口 **`wattage_limit_out`**，连接到这个`Goto`模块的输入。
    
-   双击这个`Goto`模块，在`Goto tag`处，手动输入我们约定的另一个“信号标签”，就叫 **`wREV`**。
    
-   **这意味着: “守护神”大声宣布：“我的裁决结果`wREV`已经出来了！所有需要参考它的人，都可以来收听！”**

**至此，我们已经完成了“指挥中心”左半部分的所有工作！**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGSM5OiaZcAdJYic5QOU6z9T634O025E9EiaLiaXCHzg9c2nThCk4JOQp4acwbjbeicZIywMq2evJnLcvg/640?wx_fmt=png&from=appmsg)

### **5\. 搭建“军法官”——执行最终裁决**

从此开始，我们将在这块画布的**右侧**，搭建“军法官”的逻辑。

#### **5.1 计算预测功率`wP`** 

“军法官”在裁决前，首先要掌握“证据”，也就是当前的预测功率`wP`。

**C代码中使用的公式为**: `wP = 1.5f * (pm->track_D * pm->lu_vD + pm->track_Q * pm->lu_vQ);`

**Simulink中的实现过程**:

1.  从`Power_Limit_Module`的输入端口中，找到`Id_in`、`Iq_in`、`Ud_fb`、`Uq_fb`这四个信号。
    
2.  拖入两个 **`Product`** 模块。
    

-   第一个`Product`：将`Id_in`和`Ud_fb`连接到它的输入。其输出为`Id*Ud`。
    
-   第二个`Product`：将`Iq_in`和`Uq_fb`连接到它的输入。其输出为`Iq*Uq`。
    

4.  拖入一个 **`Sum`** 模块。
    

-   将上述两个`Product`的输出，连接到`Sum`模块的输入。其输出为`(Id*Ud + Iq*Uq)`。
    

6.  拖入一个 **`Gain`** 模块。
    

-   将`Sum`模块的输出连接到`Gain`模块的输入。
    
-   双击`Gain`模块，将其增益值设为`1.5`（或者一个可配置的Mask参数，如`k_KWAT`）。
    

8.  **完成！**
    
     这个`Gain`模块的输出，就是我们需要的**预测功率`wP`**！
    

#### **5.2 合拢信号：广播`wP`，响应“守护神”的呼唤！**

激动人心的合拢瞬间来了！我们刚刚计算出的`wP`，正是“雷霆守护神”苦苦等待的那个反馈信号！

1.  从库里拖入一个 **`Goto`** 模块。
    
2.  将上一步计算出的`wP`信号，连接到这个`Goto`模块的输入。
    
3.  **【关键！】双击这个`Goto`模块，将其`Goto tag`设置为我们之前在左边`From`模块里约定的名字：**`wP`**。**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGSM5OiaZcAdJYic5QOU6z9T6pgCDskQrUAZc5kBagq5HaoLGg8TjCwx5YL92gkVyotHQsOjhLgrmKQ/640?wx_fmt=png&from=appmsg)

#### **5.3 执行最终裁决——缩放或放行**

“军法官”手握“证据”(`wP`)和“天条”(`wREV`)，开始执行裁决。

**C代码中执行的逻辑为**: `if (wP < wREV) { scale = wREV / wP; Id *= scale; Iq *= scale; }`

**Simulink实现**:

1.  **判断条件**:
    

-   拖入一个`Relational Operator`模块，将其操作设置为`<` (小于)。
    
-   将`wP`信号（来自步骤1）连接到它的上输入。
    
-   将`wREV`信号（来自步骤3）连接到它的下输入。
    
-   这个`<`模块的输出是一个布尔信号（0或1），它将作为我们最终`Switch`的控制信号。
    

3.  **准备一个`Switch`模块**:
    

-   这个`Switch`将决定是输出“被缩放的电流”还是“原始电流”。
    
-   将`<`模块的输出，连接到`Switch`的中间控制端口。
    
-   `Switch`的上面的控制端口，连接Id\_in和Iq\_in（高级技巧：为了让模型更整洁，我们可以用Mux模块将`Id_in`和`Iq_in`打包成一个向量，让`Switch`直接处理向量信号，最后再用`Demux`拆包。）
    

5.  **计算“缩放”分支 (对应Switch的上输入，当`wP < wREV`时)**:
    

-   第一个：输入为`Id_in`和`scale`，输出为被缩放的Id。
    
-   第二个：输入为`Iq_in`和`scale`，输出为被缩放的Iq。
    

-   分子：`wREV`信号。
    
-   分母：`wP`信号。
    
-   其输出就是缩放比例`scale`。
    

-   拖入一个`Product`模块，双击它，在`Number of inputs`里输入`*/`，实现除法。
    
-   拖入两个`Product`模块。
    
-   将这两个被缩放的电流，连接到`Switch`的上输入端（需要一个`Mux`打包）。
    

9.  **连接“放行”分支 (对应Switch的下输入，当`wP >= wREV`时)**:
    

-   直接将原始的`Id_in`和`Iq_in`信号，连接到`Switch`的下输入端。
    

11.  **连接最终输出**:
     

-   Switch的输出，就是经过“最终裁决”的电流！
    
-   将`Switch`的输出信号（需要用`Demux`拆包），分别连接到`Power_Limit_Module`的输出端口 **`Id_out`** 和 **`Iq_out`**。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGSM5OiaZcAdJYic5QOU6z9T6k6CoFH3aM4u6dUHwUh8w4BibnicibF9FSLVYibUnSH3IicSwIicWPfiaDrEaw/640?wx_fmt=png&from=appmsg)

### **至此，我们终于成功了！**

总结

看看我们一起搭建的`Power_Limit_Module`画布吧！它现在是一幅完整的、充满动态美的画卷：

-   **左边，“雷霆守护神”时刻监控着`U_bus`，并参考着由右边反馈回来的`wP`，发布着它的`wREV`神谕。**
-   **右边，“军法官”获取着最新的电流电压“证据”来计算`wP`，然后用`wREV`作为标尺，对电流进行着最终的、公正的裁决。**
-   **`Goto`和`From`模块，就像两条穿越时空的虫洞，构成了这个系统的神经网络，让信息实现了完美的闭环流动！**

我们终于，将整个`pm.c`代码中最复杂、最核心的控制逻辑，在Simulink的沙盘上，完美复现了！

我们完成了最复杂，也是最有价值的一面“墙”。通过它，我们实现了Simulink技能的巨大升级：

1.  **反馈回路的搭建: 我们学会了如何搭建一个真正的PI控制回路，并用`Goto/From`模块传递反馈信号，这是从“开环计算”到“闭环控制”的巨大进步！**
2.  **动态规则的实现: 我们不再是处理静态的限幅，而是根据一个动态计算出的`wREV`，去动态地约束另一组信号。这是高级控制算法的常见模式。**
3.  **复杂逻辑的图形化: C代码中嵌套的`if-else`和复杂的变量依赖关系，在Simulink中被`Switch`、`Product`和清晰的信号流所取代，逻辑一目了然。**

各位同仁，当我们一起把这几面“墙”按照数据流的顺序，从左到右连接起来时，你有没有发现，你已经不知不觉地，把代码`pm.c`的灵魂——那套“优雅降级”的控制策略，在你的“战争沙盘”上，已经完美地复现了出来了？！

  

参考代码：

https://github.com/rombrew/phobia/blob/master/src/phobia/pm.c

  

模型链接：

 https://pan.baidu.com/s/1qRYyUVfTRoh\_W-hk-9XTeg?pwd=ag69 提取码: ag69