# 几个预防和整改EMI的小妙招

原创 硬件笔记本 2024-06-05 07:38 四川

> 原文地址: [https://mp.weixin.qq.com/s/To9XsflbcUQJEjbQZhyr5A](https://mp.weixin.qq.com/s/To9XsflbcUQJEjbQZhyr5A)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")  

  

这里分享几个带开关电源产品的EMI预防和整改的小妙招。

  

![](https://mmbiz.qpic.cn/mmbiz_png/2vmCEf4iaGjj7Tp8rAkEIDByNF8jOHodo8GMJxiakicO9F0xicvFajia1BKyLgBpn9IMBJkND9nWMp2rahpUgReVhfg/640?wx_fmt=png&from=appmsg)

****a****1MHz以内

以差模干扰为主，增大X电容就可解决。

****b****1MHz～5MHz

差模共模混合，采用输入端并一系列X电容来滤除差摸干扰并分析出是哪种干扰超标并解决。

****c****5MHz～10MHz

以共摸干扰为主，采用抑制共摸的方法。

****d****10MHz～25MHz

对于外壳接地的，在地线上用一个磁环绕2圈会对10MHz以上干扰有较大的衰减。

****e****25～30MHz

可以采用加大对地Y电容、在变压器外面包铜皮、改变 PCBLAYOUT、输出线前面接一个双线并绕的小磁环，最少绕10圈，在输出整流管两端并RC滤波器。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjj7Tp8rAkEIDByNF8jOHodogCicXTZQvs9nNicceFfYU8nMotQZNeIJGbExssHbo6uOnVsuW6y74W4g/640?wx_fmt=jpeg&from=appmsg)

****f****30MHz～50MHz

普遍是MOS管高速开通关断引起，可以用增大MOS驱动电阻，RCD缓冲电路采用1N4007 慢管，VCC供电电压用1N4007慢管来解决。

****g****100～200MHz

普遍是输出整流管反向恢复电流引起，可以在整流管上串磁珠。

****h****100MHz～200MHz

大部分出于PFCMOSFET及PFC二极管，现在MOSFET及PFC二极管串磁珠有效果，水平方向基本可以解决问题，但垂直方向就很无奈了。

开关电源的辐射一般只会影响到100MHz以下的频段。也可以在MOS二极管上加相应吸收回路，但效率会有所降低。

  

**设计开关电源时防止EMI的措施：**

****1****把噪音电路节点的PCB铜箔面积最大限度地减小；如开关管的漏极、集电极、初次级绕组的节点等。

****2****使输入和输出端远离噪音元件，如变压器线包、变压器磁芯、开关管的散热片等。

****3****使噪音元件(如未遮蔽的变压器线包、未遮蔽的变压器磁芯、开关管等)远离外壳边缘，因为在正常操作下外壳边缘很可能靠近外面的接地线。

****4****如果变压器没有使用电场屏蔽，要保持屏蔽体和散热片远离变压器。

****5****尽量减小以下电流环的面积：次级(输出)整流器、初级开关功率器件、栅极(基极)驱动线路、辅助整流器等。

****6****不要将门极(基极)的驱动返馈环路和初级开关电路或辅助整流电路混在一起。

****7****调整优化阻尼电阻值，使它在开关的死区时间里不产生振铃响声。

****8****防止EMI滤波电感饱和。

****9****使拐弯节点和次级电路的元件远离初级电路的屏蔽体或者开关管的散热片。

****10****保持初级电路的摆动的节点和元件本体远离屏蔽或者散热片。

****11****使高频输入的 EMI 滤波器靠近输入电缆或者连接器端。

****12****保持高频输出的 EMI 滤波器靠近输出电线端子。

****13****使EMI滤波器对面的PCB板的铜箔和元件本体之间保持一定距离。

****14****在辅助线圈的整流器的线路上放一些电阻。

****15****在磁棒线圈上并联阻尼电阻。

****16****在输出RF滤波器两端并联阻尼电阻。

****17****在PCB设计时允许放1nF/500V陶瓷电容器或者还可以是一串电阻，跨接在变压器的初级的静端和辅助绕组之间。

****18****保持EMI滤波器远离功率变压器，尤其是避免定位在绕包的端部。

****19****在PCB面积足够的情况下，可在PCB上留下放屏蔽绕组用的脚位和放RC阻尼器的位置，RC阻尼器可跨接在屏蔽绕组两端。

****20****空间允许的话在开关功率场效应管的漏极和门极之间放一个小径向引线电容器(米勒电容，10皮法/1千伏电容)。

****21****空间允许的话放一个小的RC阻尼器在直流输出端。

****22****不要把AC插座与初级开关管的散热片靠在一起。

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。