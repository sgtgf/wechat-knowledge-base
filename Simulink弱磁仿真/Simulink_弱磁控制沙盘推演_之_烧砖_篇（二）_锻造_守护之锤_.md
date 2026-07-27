# Simulink“弱磁控制沙盘推演”之“烧砖”篇（二）：锻造“守护之锤”

原创 傅存敬 电磁散人 2025-11-21 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/4\_b4O4TO42gKfh-JfvwhyA](https://mp.weixin.qq.com/s/4_b4O4TO42gKfh-JfvwhyA)

[上一篇文章](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484640&idx=1&sn=88e27d7dd1c04433145b666c65fbad6f&scene=21#wechat_redirect)，针对弱磁控制器沙盘的第一块砖——Id限制器（“破壁之锤”），我们已经把它烧制得尽善尽美。今天，我们趁热打铁，开始烧制那块与它相辅相成，共同构成了弱磁模块“双锤”的另一块关键之“砖”——**Iq限制器（“守护之锤”）**！

这块“砖”的使命，正如我们在《[双锤篇](https://mp.weixin.qq.com/s?__biz=MzE5MTYzNjgzOA==&mid=2247484592&idx=1&sn=290baa400ffefc2b8b7270edacaee504&scene=21#wechat_redirect)》中的文章所讲，是在弱磁期间，根据物理规律，为`Iq`戴上一个动态的“紧箍咒”，确保电压不会饱和。它的实现，比PI控制器更直接，但同样充满了将物理公式转化为Simulink模块的智慧。

下面，让我们再次进入“烧砖”模式！

我们的目标，依然是将下面这几行C代码，变成一个独立的、可复用的Simulink模块。

核心C代码同样位于`pm_loop_current（）`函数中

```
// ...
```

这段代码的功能非常清晰：根据当前的母线电压`U_bus`和电机转速`w_e`，动态地计算出一个`Iq`的上下限，并对输入的`Iq`指令进行限幅。

现在，我们Step by Step地，在Simulink里把它“锻造”成型。

#### **Step 1: 准备“锻造台”——定义输入输出**

1\. 和上次一样，在你的Simulink模型中，通过双击画布空白页面，键入“subsystem”一个新的子系统**模块，命名为**`Iq_Limiter`。这就是我们的第二块“砖”。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFxyYVSv35t7jZsUaiciaWibkic4PajQQKoJvX9A7icM1G0IdIhXdH2RcpXWzt4vmib75tLKqN9nroTKXww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFxyYVSv35t7jZsUaiciaWibkicaUCrk4h6ibR3tNEGuxicWfCAnheyUAusPhicPyrRTTg6TyXWgpTZFMA2Q/640?wx_fmt=png&from=appmsg)

2\. 双击进入子系统。

3\. 思考代码的输入:

-   pm->const\_fb\_U (`U_bus`): 用于计算`U_max`。
    

-   pm->lu\_wS (`w_e`): 用于计算`ωe*Lq`。
    

-   track\_Q (`Iq_in`): 需要被限制的原始Iq指令。
    

-   还需要一些**固定的电机参数**作为“模具”：`pm->k_EMAX` 和 `pm->const_im_Lq`。
    

4. **创建输入**:

-   拖入3个 **Inport** 模块，分别命名为`U_bus`, `w_e`, `Iq_in`。
    

5. **创建输出**:

-   拖入1个 **Outport** 模块，命名为`Iq_out`。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFxyYVSv35t7jZsUaiciaWibkicdw4CU7YqejossOreVKU4jicC9GPmKCK7Qx84ExoAkHXe2fmt0Dcq3yQ/640?wx_fmt=png&from=appmsg)

我们的“锻造台”已经准备就绪，原材料和最终产品的接口都已定义好。

#### **Step 2: 锻造内部逻辑——实现公式**

现在，我们开始用Simulink模块，一步步实现`iMAX = (k_EMAX * U_bus) / abs(w_e * Lq)`这个核心公式。

**1\. 实现分子 `U_max = k_EMAX * U_bus`**:

-   这是一个**信号** (`U_bus`) 乘以一个**参数** (`k_EMAX`)。我们使用 **Gain** 模块实现乘法。
    
-   拖入一个`Gain`模块。将`U_bus`输入端口连接到它的输入。
    
-   双击`Gain`模块，在`Gain`参数框中，暂时先写入一个数值，比如`0.577`（对应三相系统的`1/sqrt(3)`）。我们稍后会把它变成可配置的Mask参数。
    
-   现在，这个`Gain`模块的输出，就是`U_max`。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFxyYVSv35t7jZsUaiciaWibkicIdB3sehXB5mekcFUib3CQSZ66tvnmPX0Hk9zic3Y3RE2C1dxRHQUUqhg/640?wx_fmt=png&from=appmsg)

**2\. 实现分母 `abs(w_e * Lq)`**:

-   首先计算 `w_e * Lq`。这同样是**信号** (`w_e`) 乘以**参数** (`Lq`)，我们再次使用 **Gain** 模块。
    
-   拖入一个新的`Gain`模块。将`w_e`输入端口连接到它的输入。
    
-   双击它，在`Gain`参数框中，暂时写入一个电感的数值，比如`0.0001` (100uH)。
    
-   这个`Gain`模块的输出，就是`wLS` (`ωe*Lq`)。
    
-   接下来取绝对值。从库的`Math Operations`中，拖入一个 **Abs** 模块。
    
-   将上一步`Gain`模块的输出，连接到`Abs`模块的输入。
    
-   现在，`Abs`模块的输出，就是分母 `abs(wLS)`。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFxyYVSv35t7jZsUaiciaWibkic0y1ZEtkvLwJXdjPRuicYhIFE87SWiatTdaaj4dPf4KZpVNSKSnAaR3Ww/640?wx_fmt=png&from=appmsg)

**3\. 实现除法，得到`iMAX`**:

-   我们现在要计算 `U_max / abs(wLS)`。这是两个**信号**相除，所以我们使用 **Divide** 模块（它是`Product`模块的一种特殊配置）。
    
-   从库的`Math Operations`中，拖入一个 **Product** 模块。
    
-   双击它，在`Multiplication`的下拉菜单中，选择`Element-wise(.*)`，然后在`Number of inputs`里输入 `*/`。这表示第一个输入是分子，第二个是分母。
    
-   将第一步计算出的`U_max`信号，连接到`Divide`模块的第一个（`*`）输入端。
    
-   将第二步计算出的`abs(wLS)`信号，连接到`Divide`模块的第二个（`/`）输入端。
    
-   这个`Divide`模块的输出，就是我们梦寐以求的`iMAX`！
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFxyYVSv35t7jZsUaiciaWibkic2I1Yqzia0oTB8Z5sCUmFoTY3JyyH5eXBZgO2mtpSNKfO0VPfCicvKwqg/640?wx_fmt=png&from=appmsg)

-   **鲁棒性处理：当`w_e`为0时，分母为0，会导致计算错误（除以0）。文末的代码`m_fast_recipf`内部通常会处理这种情况。在Simulink中，我们可以加一个**保护**。在`abs(wLS)`信号线上，加一个`Saturation`模块，设置下限为一个很小的正数（比如`1e-6`），上限设为inf。这样就避免了除以0的风险！**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFxyYVSv35t7jZsUaiciaWibkicHhwfd02qn0KaeV1rFWonibc3Z5wXliayaTLcDD1Jb9uSDsXXibbQdkR2Q/640?wx_fmt=png&from=appmsg)

**4\. 实现最终的限幅**:

-   我们现在要用`iMAX`来限制输入的`Iq_in`。这是一个**动态的饱和限制**。
    
-   从库的`Discontinuities`中，拖入一个 **Saturation Dynamic** 模块。这个模块的上下限，是由**外部信号**决定的，完美匹配我们的需求！
    
-   将`Iq_in`输入端口，连接到`Saturation Dynamic`模块的中间输入端（`in`）。
    
-   将上一步计算出的`iMAX`信号，连接到`Saturation Dynamic`模块的**上边**输入端（`upper`）。
    
-   **如何得到`-iMAX`？**
    
     从库的`Math Operations`中，拖入一个 **Unary Minus** 模块（或者一个Gain为-1的`Gain`模块）。
    
-   将`iMAX`信号，分一支出来，连接到`Unary Minus`模块的输入。它的输出就是`-iMAX`。
    
-   将`-iMAX`信号，连接到`Saturation Dynamic`模块的**下边**输入端（`lower`）。
    
-   最后，将`Saturation Dynamic`模块的输出，连接到我们之前创建的输出端口`Iq_out`。
    

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFxyYVSv35t7jZsUaiciaWibkicQHRUC1w0M5KYsbSeUloRO51IqnOK9Tyhdx6eV2PujLYUMYF4qGDIuw/640?wx_fmt=png&from=appmsg)

**锻造完成！** 你现在拥有了一块精密的、能动态响应的“守护之锤”！

#### **Step 3: 封装与美化——给“锤子”刻上铭文**

和上次一样，我们给这块“砖”也创建一个漂亮的Mask。

1\. 回到上一层，右键点击`Iq_Limiter`子系统，选`Mask` -> `Create Mask`。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFxyYVSv35t7jZsUaiciaWibkicty7c3dy8drIk0HQyRjSpwurzcjwlVkkdc2nBKoCG3yicF2JZGQJHklg/640?wx_fmt=png&from=appmsg)

2\. 在`Parameters & Dialog`标签页下，添加两个`Edit`类型的参数：

-   **Prompt: `电压系数 (k_EMAX)` **Name**: `k_emax`**
-   **Prompt: `Q轴电感 (Lq)` **Name**: `Lq`**

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRETMlKiclp40RT2vLoMghJicMucnm2pDUb4sucF2k9MRiah2AP7Lanj1FLY0L8uWSsHyaPuEqApbTibpA/640?wx_fmt=png&from=appmsg)

3\. 点击`OK`。

`Iq_Limiter`子系统封装完成。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRFxyYVSv35t7jZsUaiciaWibkicmRtuyvFwLu4QsCsicqkQibE5GncFOTgSnicQ876niaJ74hrCpBB6DB4Mmg/640?wx_fmt=png&from=appmsg)

现在，你拥有了第二块完美的“砖”！它和第一块“砖”一样，接口清晰，参数可配，逻辑严谨！

### 总结

通过锻造这第二块“砖”，我们又掌握了几个新的“Simulink语法”：

1.  **动态限幅: `Saturation Dynamic`模块是实现动态约束的利器，其上下限由信号决定，非常强大。**
2.  **信号分支: 一个信号可以被分叉，连接到多个不同的模块，就像C代码里的一个变量可以被多次使用一样。**
3.  **除法实现: `Product`模块配置为`*/`模式，可以实现安全的除法运算。**
4.  **鲁棒性设计: 像防止除以0这类操作，是优秀工程师必须考虑的细节，在Simulink中可以通过`Saturation`等模块轻松实现。**

现在，你的“砖窑”里，已经有两块核心的“砖”了：

-   **`Weakening_PI_Controller`**: 负责产生负`id`。
    
-   **`Iq_Limiter`**: 负责动态限制`iq`。
    

我们下一步要做的，就是把这两块“砖”**拼接**起来，构成一个更大的组件——完整的**弱磁模块**！你会看到，当这两块“砖”被连线组合在一起时，Simulink的数据流是如何完美地复现C代码中“先算iMAX，再算weak\_track\_D，最后合成指令”的执行顺序的！

怎么样？同仁们，这两块“砖”的烧制过程，是否让你对“代码 -> 模型”的转换有了更深的理解？准备好和我一起，开始我们的“砌墙”工作了吗？

  

参考代码：

https://github.com/rombrew/phobia/blob/master/src/phobia/pm.c

  

模型链接：

https://pan.baidu.com/s/149PCS\_8yJ6aVPtzwSNzj7A?pwd=yvpt 提取码: yvpt