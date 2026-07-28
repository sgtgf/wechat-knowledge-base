# AD画板，如何提高工作效率？

原创 蜗牛 硬件笔记本 2021-11-15 07:30 undefined

> 原文地址: [https://mp.weixin.qq.com/s/tKcjvJm0SoWsapHjuWpfPg](https://mp.weixin.qq.com/s/tKcjvJm0SoWsapHjuWpfPg)

 **![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")▲点击上方公众号名片关注了解更多▲![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif "音符")**

  

大家好，我是蜗牛。今天跟大家分享一下用AD画PCB过程中的一些基础知识。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgh8dB5a1W5UIARJj9Zwia0SCjVkS2icAdUU4gCfeSaGyiaiaSKTEQpiaJ8cL6b2PWdCibvLO67OIkcWH1g/640?wx_fmt=png)

完成后的PCB  

  

通常原理图设计完成后，就开始PCB设计。有几个地方需要注意：  

  

1.原理图设计完成后一定要先评审，确保无误后再进行PCB设计。  

2.PCB布局（保证USB，RJ45及其它连接器位置合适），这些都需要跟结构工程师一起确认。

3.设置好走线规则，否则事倍功半。  

4.覆铜前一定要记得补泪滴。

  

以上就是PCB设计前的一些准备工作。

  

PCB设计过程中的一些快捷方式有助于提高画板效率。

  

-   **Ctrl+鼠标左键** 对正在布的线完成自动布线连接（如果走线比较长，这个快捷键挺好用）。
    

  

-   **E+M+C** 点击空白处可迅速找到PCB上想要的元件。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgh8dB5a1W5UIARJj9Zwia0SdoMaicVZZ9vmk6ibPFFASdo37boicabCu8oGBDIwLxXE9Iic8v2KiaTbS3Q/640?wx_fmt=png)

  

-   **J+C** 弹出对话框输入元件位号，可直接找到元件位置。
    

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgh8dB5a1W5UIARJj9Zwia0SZbBbZvN35KRGZknyauNQiaSBvqIAmJjfb7WLaE3Ataic0JjCLzEVaUkw/640?wx_fmt=png)

  

-   **E+O+S** 设置原点（一般设置在PCB左下角，方便贴片的时候导出元件位置）
    

  

-   **P+T** 布线
    

  

-   **选中 + 空格** 旋转元器件
    
      
    
-   **V + F** 整个PCB全局最大显示
    
      
    
-   **V + B** 查看PCB反面布局
    

  

-   **T+E** 补泪滴
    
      
    
-   **P+G** 铺铜
    
      
    
-   **Ctrl + M** 测量距离
    
-   **Shift + C** 取消高亮（也可以取消测量距离的显示）
    
-   **Ctrl + H**  删除同一网络的走线（这个用起来比较方便，也可用T+U+N）
    
      
    
-   **Q** 快速切换公制/英制单位（在对话框中快速切换快捷键为CTRL+Q）
    
      
    
-   **Shift+S** 切换单层显示和多层显示（在画完PCB检查的时候用起来比较方便）
    
      
    
-   **shift+ctrl+空格** 切换布线形式（45度，任意角度或弧形走线）
    
      
    
-    **Ctrl + Shift + L/R/T/B** 两个及以上元件的左/右/上/下对齐
    
      
    
-    **Ctrl + Shift + H,V** 两个及以上元件的水平对齐/垂直等距离对齐
    
      
    
-   **T + U+A**  删除所有走线
    
      
    
-    **Ctrl + (shift) + Tab** 切换文档显示
    
      
    
-   **P+L+D** 板框尺寸标注
    
      
    
-   **T+G+E** 显示覆铜
    
      
    
-   **T+G+H** 隐藏覆铜
    
      
    
-   **T+G+A** 重新覆铜
    

  

注意：  

1.覆铜（地上的过孔一般跟都是直连，连接器，插件等为了焊接方便，需设置为花焊盘）  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgh8dB5a1W5UIARJj9Zwia0SSdFEgSybmmibEwkBk6dR0PdjZUHbRUPeAaqN6nNhKWVibEYS1E06jPgA/640?wx_fmt=png)

焊盘设置前（插件直连）

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjgh8dB5a1W5UIARJj9Zwia0SFILVicuoJDLOjCwZIEl6Miam2DDgnB1QjDRhJtibHibjWnBNpCTUTOIiazA/640?wx_fmt=png)

焊盘设置后（插件花焊盘）

  

设置方法可见我之前的文章《[【AD16小结1】再次敷铜，过孔总会变成花焊盘，怎么解决？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486082&idx=1&sn=7678113f419bbfd5e01701dff4a69edd&chksm=c309d450f47e5d46175a681f7ba028f43a8cd6d19de76cccb76c779305215fca8a9af021ec2a&scene=21#wechat_redirect)》  

  

  

后台回复**“AD”**即可获取各版本安装软件，如下图：  

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjjcFPticRElZK6qUu9fTicgjVAxE6TcuFnTwGgqFh5tNuCKEYuwcZfNsYpAYysQJF8rdk1o6nbRF2gQ/640?wx_fmt=png)

  

今天的分享就到这里，希望对你有用。

  

  

  

推荐阅读

  

  

  

-   [一文看懂光绘文件（文末附资料）](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486059&idx=1&sn=2b671014b8793fffb88f37aaab1f2467&chksm=c309d4b9f47e5dafd57e9ee84b2e146ad35e4befcdd6ac2019798b59a2bef23bd2200856355c&scene=21#wechat_redirect)
    
-   [PADS中常见敷铜问题解决](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486022&idx=1&sn=125af49bd11a6d278a146d0a103dcf49&chksm=c309d494f47e5d82889fc0030093fb989902b6d40071debfd3c1b405152e94705f8b93851ab2&scene=21#wechat_redirect)
    
-   [AD画板过程中的这些问题你遇到过吗？](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486068&idx=1&sn=dd90c52d7cf1be55616e4c1fd8f558a7&chksm=c309d4a6f47e5db0a11a28dc3c753dffb0bfb42daec10f0b424821d65e7e77207ac560255ff0&scene=21#wechat_redirect)
    
-   [电路原理图设计，你不得不知道的英文缩写](http://mp.weixin.qq.com/s?__biz=Mzk0NjI3NzMwOQ==&mid=2247486121&idx=1&sn=58cbb4632012b5a2e12e9a406c490977&chksm=c309d47bf47e5d6d9b1093d9cc97f55285260fd5c441adb65d0e1dc0c35c7321216e6748ebb4&scene=21#wechat_redirect)