# 全网最完整、准确的MPC推导


> 原文地址: [https://mp.weixin.qq.com/s/V\_Zh1iI7vKoAttIIAundvg](https://mp.weixin.qq.com/s/V_Zh1iI7vKoAttIIAundvg)

只要模型比较准确，算力够，车辆控制中，MPC方案就是较优选择，原因很简单，它的上限极高，下限也还可以，工程实践中后续处理坡地、曲线、扰动观测等都非常方便。  
  
它在原理推导上没什么特别，甚至比LQR更容易理解，难点主要在矩阵应用上，因此它的推导也可以作为熟练矩阵使用的练手机会。  
  
上面的两张图，其实是非常完整、准确的，符号的错误应该都没有，发现了可以私信我或是评论区留言。只要基于c++的Eigen库做矩阵运算，再引入一个包含c++接口的二次规划库，比如osqp，对照公式直接编码就可以工作的，或是借助AI，那就更加方便了。  
  
此外，控制理论，包括强化学习理论，其背后蕴含着非常耐人寻味的人生哲理，比如MPC就是一个计划7天、执行1天、每天滚动循环的项目/人生管理过程。

![图1](https://mmbiz.qpic.cn/mmbiz_png/wEtL48Vqsa81jroTpEvNmch720xEpVyfBEPHByzcCpZuwMccPzlKUDYIxNGv3w6JRcEVg7SkeYaGn3ewAiaeAb4hMrCvovqfGO5URvC5AbTU/0?wx_fmt=png)

图1

![图2](https://mmbiz.qpic.cn/mmbiz_jpg/wEtL48Vqsa99SLggKyMYj1vqFWdm4aJH2iaMGBEsaicMLXib8MibiaRLkajKXibmtDBVCuwoV4KJZOE2RTwLm7Eo4fPgArO8ScXI7ROfRLG0Dpzibg/0?wx_fmt=jpeg)

图2