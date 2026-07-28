# EMC之静电整改

原创 硬件笔记本 2023-04-21 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/YpEA0N8yNK\_sMn9wUFQqtg](https://mp.weixin.qq.com/s/YpEA0N8yNK_sMn9wUFQqtg)

## ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

##   

> 电子产品如手机，智能手表，TWS耳机在认证时往往需要做静电测试，测试过程出现不可恢复的故障，或整机复位重启。

#   

# 问题详细描述

某智能手表在静电测试时，打充电输入端子的接触±4KV出现系统复位，甚至概率性卡死，长时间不能恢复。充电端子在bottom层，板子为四层一阶。

#   

# 问题具体分析

1、分析如下：

经过对PCB的研究发现，在充电弹片和正极充电路径下方的相邻层信号线过多，没有完整的地来释放静电，并有高速的flash信号经过。当静电打进来时，静电瞬间干扰到信号走线，静电管还来不及释放静电，导致系统异常。

第四层(bottom层)走线如下(充电接触弹片所在层)：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIkTmBON2OPcdlNvPae0lc17k8AAlj6KD1tDmEXMcy6fbicor8fYmlquNrM6DkaiczxbBPrmSnyP8w/640?wx_fmt=png)

  

第三层走线如下：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIkTmBON2OPcdlNvPae0lc89RojbicY5Ac6VFXqXDSxZJWIl7PktTe5jaicJMroImPoYufXOq14odw/640?wx_fmt=png)

  

2、根据上面的分析做实验

（1）在充电输入正极弹片就近并联一个静电管，让静电打正极接触弹片±6KV可以第一时间把静电从静电管处释放掉。

（2）正极弹片悬空起来（目的为了验证弹片所在的bottom层是否会影响到弹片下方相邻层的信号线），然后从充电输入正极弹片飞一根线到充电IC输入端电容处，电容之前的路径断开（确保充电通路正常），目的是为了避免原PCB上的充电路径走线有静电流过干扰到相邻的信号走线。经过这样的实验接触的±6KV稳过无异常通过。对比不处理±3KV都不行。

# 问题解决方案

整改思路：优化PCB布局走线(把静电路径下方信号走线移走)，缩短充电回路(目的是缩短静电通过的路径)，充电回路下面净空不走线，静电通过的路径邻层有完整的地。静电释放的径路是通过第三层的地进入到第二层主地层。

具体优化如下：

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjIkTmBON2OPcdlNvPae0lcJakBJAAFrCUbOURQ2ibcqEZYyWmt1ImibbAeZnicmic9Npiafak18ST5oog/640?wx_fmt=png)

# 总结和建议

静电是具有辐射干扰的，在PCB布局走线时尽可能是把静电管靠近静电进来的位置，同时要就近打孔，让静电快速进入主地层，以免干扰到其他敏感器件或走线。静电通过的路径相邻层尽可能有完整的地，避免有敏感信号经过。

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

  

**推荐阅读▼**

-   硬件精选文章
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

  

后台回复“加群”，管理员拉你加入同行技术交流群。