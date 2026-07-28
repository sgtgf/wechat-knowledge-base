# 前馈电容是如何影响buck电路的输出特性的？

原创 硬件笔记本 2022-09-20 07:30 四川

> 原文地址: [https://mp.weixin.qq.com/s/pUAb1EOoH7XMrEQBDmbXqQ](https://mp.weixin.qq.com/s/pUAb1EOoH7XMrEQBDmbXqQ)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

如下图为典型的DCDC电路：芯片是台湾省立琦科技的。

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcnYMelagrapjTCdniczapumRa5zTGgniaK3fHibVygibuW6WeuULu0ahibbv5EIC2YpmJribdv4nRbyOw3Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  
上图为DCDC典型应用电路，CIN为输入滤波电容，CBOOT是上管驱动“自举”电容，L是储能电感，R1和R2是反馈电阻，CFF是前馈电容，COUT是输出滤波电容，RT是内部运放补偿器件。

  

#### **一、理论分析**

##### 没有前馈电容

如果没有前馈电容，内部补偿DC-DC转换器的反馈网络由两个反馈电阻组成，用于设置转换器的输出电压，如图1所示。  
![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcnYMelagrapjTCdniczapumRTQU38Wb13iaVRebkwe7xagKT6wI6kXb5xNUahicKRx91ibRDrbbkVTaLA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  
输出电压公式为：Vout=Vfb\*（1+R1/R2）

图2显示了相应的增益和相位图。  
![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcnYMelagrapjTCdniczapumRBJSj6k3dPqn9u6II2PjuNJI0I3aohCxk2olh4GAXmdGZeAt6ib22c8A/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

##### 有前馈电容

图3显示了在反馈网络中添加了前馈电容C1（Cff）。  
![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcnYMelagrapjTCdniczapumRxbpIjrVibeL5gcgemhac53ZGjlFzv1OdZ8d3G07YjyNBgkjplV40wTw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  
输出电压公式为：Vout=Vfb\*（1+R1/R2）。

但是因为有前馈电容，增益和相位已经受到影响，图4显示了相应的增益和相位图。  
![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcnYMelagrapjTCdniczapumRCsUzGdX9x4AKz9oM6ficM6UysKhoZpGCmsqkYzQjZMsYbYt4xUiat62Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  
因为加入了前馈电容，所以与反馈电阻形成新的零点和极点，虽然Cff在其零点频率之后引入了增益提升，但是环路相位变化（提升）在零点频率和极点频率之间达到最大值; 请参见以下等式1和等式2的计算。  
（1）RI和CFF形成了一个零点  
![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcnYMelagrapjTCdniczapumRn6HuxuapljUfBM4cSg1XzPb6wAU4VuMXOHw0RORw7hFzWj3fEvViaHw/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

（2）RI、R2和CFF形成了一个极点  
![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcnYMelagrapjTCdniczapumRb6hZcqUdKQNaCI4niadCYtoLdY83LxTUZ3QFL2VOficSlhh1ExDZiaxiaQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  
零点和极点的位置如Figure 4所示。（在上面）

#####   

##### **二、前馈电容的作用**

增加了前馈电容设计, 变换器可以更有效地响应输出电压上的高频干扰（交流阻抗小）。  
图2和图4中的 bode 图显示, 每个反馈网络在较低频率下的响应是相同的。在中到高频率下, 随着通过 C1（CFF） 的阻抗路径的减小, 输出电压到反馈端的扰动（变化）衰减较小, 并有效地提供增益和相位的提升。

在DCDC工作电源中, 增加的增益和相位与会使得转换器对负载瞬态响应速度更快, 因为在反馈节点检测到的电压偏差在较高频率下衰减较少。转换器的反应是调整占空比, 以更快地纠正输出电压偏差。

为了优化瞬态响应, 选择合适的Cff 值, 这样环路反馈的增益和相位提升将增加转换器的带宽, 同时仍保持可接受的相位裕度。

通常, Cff 的较大值可提供更大的带宽改进。但是, 如果 Cff 过大, 前馈电容会导致环路增益交叉频率过高, 并且 Cff 相位提升贡献不足, 导致不可接受的相位裕度或不稳定性。

##### 

##### **三、前馈电容的实际效果**

（1）无前馈电容  
如下图所示，无前馈电容设计时，当负载（绿色）由小增大时，输出电压（黄色）曲线出现震荡，且很久才趋于平稳。  
![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcnYMelagrapjTCdniczapumR1cu4JnNV2OCLIbTHaOvKfPp438OS5XTEgnLuyNPnfib5hiavKAW86g4g/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  
（2）有前馈电容时  
在同样的负载变化情况下，当有前馈电容设计时，输出电压很快输出平稳，且不会震荡多次。  
![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcnYMelagrapjTCdniczapumRnYtmOjh4o4icu62z4AUO70Rx4Ss9neHF8Vf4xPicFDwzkg7f351stjtA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

##### **四、前馈电容的选择**

在数据手册中我们一般会看到如下描述：  
![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQcnYMelagrapjTCdniczapumRQeTZhuaxcXj3O2wREquXJ6ODBIQGNm3psfjVs1y4w2C9aMluEIksFQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)  
上图中的VOUT就是DCDC的输出电压；R1和R2为反馈电阻；L为电感；COUT为输出滤波电容。

CFF就是前馈电容，22~68 pF就是建议取值大小，我们需要根据实际的负载情况来选取合适的前馈电容值。

###### **一般的方法：**

设定一个前馈电容值，测量DCDC输出端的纹波电压大小；减小或者增大前馈电容值，再次测量纹波大小，直到纹波电压小于自身产品要求的纹波电压时，当前前馈电容我们认为是合适的。

原文链接：https://blog.csdn.net/LUOHUATINGYUSHENG/article/details/89423314

  

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   [硬件精选文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2531417028063166464#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你入技术交流群。