# 做电源，不懂LLC就亏大了！

原创 王工 硬件笔记本 2025-06-05 07:55 四川

> 原文地址: [https://mp.weixin.qq.com/s/jZHQ00d3DPRMFw121t5KoQ](https://mp.weixin.qq.com/s/jZHQ00d3DPRMFw121t5KoQ)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

### 

### **大家好，我是王工。**

今天给大家分享一份**LLC谐振转换器的设计指南**，来自仙童半导体（Fairchild）的经典文档。  

如果你在搞电源设计，尤其是**高效率、高功率密度**的电源，**LLC谐振拓扑**绝对是绕不开的！为啥？因为它能实现**零电压开关（ZVS）**，大幅降低开关损耗，效率轻松做到**90%以上**，特别适合**大功率适配器、服务器电源、LED驱动**等场景。

这份PDF有38页，从**基本原理、设计流程到实际案例**，都有讲解！下面我挑重点给大家捋一捋，文末有完整PDF获取方式，记得看到最后！

  

### **1、LLC到底牛在哪？**

传统硬开关电源（比如反激、正激）在高频工作时，MOS管一开一关就会产生损耗（电压电流重叠导致的**开关损耗**），频率越高损耗越大，效率上不去。

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOiaiciaTSWOGrMW2RFj2hyZEdPauTswkVqtLiaQRIF3lPtQnHq4IH1g4ibicw/640?wx_fmt=png&from=appmsg)

而**LLC谐振变换器**的妙处在于：

-   **ZVS（零电压开关）**：MOS管导通时电压已经降到0，几乎没有开关损耗！
    
-   **宽输入/负载范围**：即使负载很轻，也能稳定工作，频率变化小。
    
-   **集成变压器设计**：把谐振电感和变压器集成在一起，省掉一个磁性元件，体积更小！
    

简单来说，**LLC就是高频高效电源的“黑科技”**，搞懂了它，你的电源设计水平直接上一个台阶！

  

### **2、串联谐振（SRC） vs. 并联谐振（PRC） vs. LLC**

文档里对比了三种谐振拓扑，咱们快速过一下：

#### **（1）串联谐振（SRC）**

-   **优点**：通过ZVS降低开关损耗EMI，降低高频磁性元件的尺寸。
    
-   **缺点**：**负载调节差**，空载时没法稳压，输出电流波动大。
    

#### **（2）并联谐振（PRC）**

-   **优点**：空载也能工作，输出电流平滑，适合大电流场景。
    
-   **缺点**：初级电流几乎与负载无关：有效电流在谐振网络内循环，即使在无负载情况下。循环电流随输入电压增加而增加：不适合于输入电压较宽的应用场合
    

#### **（3）LLC谐振（终极方案）**

**它结合了SRC和PRC的优点**：

-   通过ZVS降低开关功耗：提高效率；
    
-   宽负载范围下频率变化范围小；
    
-   零电压转换，即使在无负载的情况下。
    

**结论**：如果要搞高效电源，LLC绝对是首选！

### 

### **还有一些计算公式和举例，大家就自己看了，以下是PDF文档内容：**

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOpreVI17cIWoRcevASKupMp5dbs3vGAAN58FneoxweRmot1Bakgj62Q/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOxkTOvice5TlxbUFWAKBOxcg7iaI07zXQDp0KhTrN12b22uPGqHeZHS9A/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsO7JSg0CUg0ARrjZEUGvlMmwLehjcpGTH5c9gkxiaPJcOFjDr5sddkaAA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOXG0GaU2LQdYIy1alQQ4UtugQQUGAzL4j1QD4nBJza86TPmTqribuzcQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOvN8oImWqrmXCvsowqPC0NthZ8O3qExth8D1vR00zxRzHsSxicOWdwqw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOM5rS9mOzGX90e6iaoOFBkh9pMzRFkbYEyibOA8bXvKWPmbXia86FCqdQA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsObUdWUQ1QibOdDlBJ5K3XOZDyKc7nc0tm0pQiaoLViaJGYjVr8aufEf83A/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOFhrHvq9BlEWibJXpia2fibaAoMG4VQDWiarXWwanVVmYRBUEQP33e5ApLg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOM8SszZ8icxlr3KEHykaoJ0bsibtpEhPe3An4lXyv58rOtceuqQj0lEXw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOiczkPR0QRdtnuxt3bzqbSLPJrmAaRao3p5tYpkEH778r7pH9vJhlERA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsO6G3ibOH58k9tYwCCiawLxav7tkfgjhGqC1ZicNnXIMibicMeBEAibYMsJ5CA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsO9UhSich021HzFgQ0Kr5bTwQNnLJknmvRjPW29wl7or4qxxE1viaFsKPg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOAJtiaiafyrqfkxohcz9aiaJdpQplm6XHRUaWneJQsibe7Zs1XF4GNjOC4w/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsO44ZxP2icribwgujhWl1Z6rL3ia84pibCPzFgJ4A5aMVhCzLgTDOjadDK7g/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOxNUSPTdjX0p3hutWXicssa1xW4yfcEGSmWznvknpKEk8YJ3JENJmbxw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsO7hryUK5vk8M1CV5eGd4JB2y7FMtj66lh74sfAIhAuicb0IZAM4yN5ibQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOYIzdkECPdG5Nrpa5ZLDnTyicribGVBwpesj9ibQW4XQZiczySn6aeyNNiaQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsO6cFPgCHEfEC6Dzjib3gw1S2xVxF5nVFxXWgeTH4sQbq4GZ0LiaNouibsw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOPeOhdUALQ8WGC1GROric430ExS2TDxdfMWN1iaEAeic6hXWCsKzrR0g7A/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOz2o1mmLUOlcEdblPgHB6KibGbiaaen3XqGyiaWTniapKfhTjeD0iaicYFlicA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOzPcBKTEn4dLiaibMQI3zxbiaTuDTIMN5sbJ4axA20RzwZ2s7gyicmRcUoA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOgF6H24Js9Tnna5BnXgMWcBdhXnRbRDLYvVeajVTx7IoEzicLJzncVYg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOMCDyYU063plWTCjMRHQYxAtfzHyWonOUYoxvtCLIgRcd7iaZxSic9ia0Q/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOyqPk0F9T67uqce03oo85Lvxp5srnanFcNY0caUxKqtXQsHccyb5VMA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOrOLtqutKZWA9BxRklZ026gBCzLurSaPKq43yxWz05qvTSrcrX5Ke0A/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOYia8ict0jIPLKOYuXaMlwobtQibucjgDfVQsnNdQWep31mHMKm9ce1T7g/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOSeiaArFke7jgC8z3fnic23RNricjaicib48PRChKf3jh0HLiaEmKf2zNovKQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOCHfGdUZhNxBL1DTWbViahicqP8yRMObPiaiaukuicTsB3StsON2qk0r2gXQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOce67xRaNPhH5dJZcibZsxtkXtY0dLD9nznDHqlClnWw8jwrSdQS71tw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOPia5WKSkeE2ho9iasBGiag4cLjfFCsGhTic2eVRAwiaibgQvAicZzNiap6lYIA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOQWv0Kdpx0PTY9iaCaLscUA9FUPSYib2ia8qNjjhiaciatN4tobWK1XXFnZQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOwJ1MgNHX1azcAol4gc8GSPtoCS5dPegIcwVk0KZichMMYZLnNUD2eqA/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOJ01uy5JyIicTiaFPxhrWL2XdmfhfEvFNR4lr7eibgLndBxV8T1px5e1lw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOAjua014kzvU80buLooJ8wuicBULrvWzZu9rwtn44u3vkh0sOPWMlx6w/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOBUQj7cWE7JkFTWcDC9qqYnCz5VkgCS7jVlu4tZms6E7RClia2FETVgg/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOsxBIaME92sJSmXZF7Fg8tHqsTF7nulnEUPBKwv1Bub86bugteNeYNQ/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOYfQL7WViaENo5y0mTtAIohykbaPkPnfekgAsjH5E4hK0y3ToYpzEesw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjjqicEW3GymFXXDxQ3m81PsOkRiaYiadUazDaSVruMfDgcfoHLUH1ia9Jhrc8yDyc1XTgEN4iafo6ibtia8Q/640?wx_fmt=jpeg&from=appmsg)

在微信公众号硬件笔记本，后台回复LLC谐振转换器的设计，即可获取PDF文档。

  

**写在最后**

都说硬件工程师越老越吃香，这句话也告诉我们硬件也是需要积累的，王工从事硬件多年，也会不定期分享技术好文，感兴趣的同学可以加微信，或后台回复“**加群**”，管理员拉你加入同行技术交流群。

  

  

推荐阅读（点击图片直接进入）

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgzfuoN0611riacBaXWMz1bf4VhibuwTs50lL1Ciblge3EhmVfonwqsN2GezDxt6zkrUfQ910APuKiaxA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247500681&idx=1&sn=117bdaa8c04eecdda16fb1d0c0e9fa37&scene=21#wechat_redirect)

[![图片](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjiaj1a1Ebg5vIlfWGTLM1ztXHUzapW5aF3DvQtjsqASs1fQibnMCpibwjbR1O0aiaqYPSbHvzhiclDkSMQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)](https://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247505291&idx=1&sn=2a9d3e27af00369a4b4abec91356fb55&scene=21#wechat_redirect)

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![图片](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文字原创，PDF来自仙童。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)