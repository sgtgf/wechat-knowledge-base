# 硬件工程师如何防止PCB设计被别人抄板？

原创 硬件笔记本 2024-06-27 07:39 四川

> 原文地址: [https://mp.weixin.qq.com/s/GZCMqJ06yf9HHsvB2sgFNg](https://mp.weixin.qq.com/s/GZCMqJ06yf9HHsvB2sgFNg)

# ![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")

  

时不时看到群里的小伙伴咨询抄板的事情，今天简单聊一聊如何防止自己的设计被人抄袭？

  

PCB设计中，在通过重重关卡完成PCB设计后，最重要的就是版权问题，抄袭现象是屡见不鲜了。那么，PCB设计如何防止别人抄板？  

  

1、磨片，用细砂纸将芯片上的型号磨掉；对于偏门的芯片比较管用。

  

2、封胶，如粘钢材等，将PCB及其上的元件全部覆盖；里面还可故意搞五六根飞线拧在一起。要注意的是胶不能有腐蚀性，大多用黑胶，一般也叫牛屎芯片、封闭区域发热不太大。

![](https://mmbiz.qpic.cn/mmbiz_png/onNTjQVjQclLvyhGeHQPerCibrM6fwfAKqBUQUfI9mOyXaYx1ic4zXfbKyrwWhEP4HeFZCve1F3e6NretSP8dcqg/640?wx_fmt=png&from=appmsg&wxfrom=13&tp=wxpic)

  

3、使用专用加密芯片，如ATMEL的AT88SC153等。

  

4、使用不可破解的芯片，如EPLD的EPM7128以上、ACTEL的CPLD等。

  

5、使用MASK IC，这需要很大的批量。

![](https://mmbiz.qpic.cn/mmbiz_jpg/onNTjQVjQcndTYonHoXBRTspkXibuVn8ftehXuYNuiaqLicibm1TTSgpyia8KnHq5Et4LJduytGgOuc1wO5Lk3kUW6g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

6、使用裸片，抄袭者们看不出型号也不知道接线。但芯片的功能不要太容易猜。

  

7、在电流不大的信号线上串联60欧姆以上的电阻。(哈哈，有点坏，前提不能影响信号质量)

  

8、多用一些无字(或只有些代号)的小元件参与信号的处理，如小贴片电容、TO-XX的二极管等。

  

9、PCB采用埋孔和盲孔技术，使过孔藏在板内。(代价有点高)

  

10、使用其它专用配套件，如定做的LCD屏、定做的变压器等等。

  

11、申请专利。鉴于知识产权保护的环境太差，国外最优选的方法在咱们这只能放在最后一条。

  

以上就是PCB设计如何防止别人抄板的方法了，希望能对大家有所帮助。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。