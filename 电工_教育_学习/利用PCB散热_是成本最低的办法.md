# 利用PCB散热，是成本最低的办法

原创 硬件笔记本 2024-09-06 07:40 四川

> 原文地址: [https://mp.weixin.qq.com/s/bvDOWtNdjlcfhDzGfhukOw](https://mp.weixin.qq.com/s/bvDOWtNdjlcfhDzGfhukOw)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=13&wx_lazy=1&tp=wxpic "音符")  

  

![](https://mmbiz.qpic.cn/mmbiz/ewiaKibzhXCHP72XNETKVHIq5BQ54xuqt2O1tN1KibURVogDjwzUfAMXCEvwtsFxNg1vUtU79giaTezMH6hicpA693A/640?wx_fmt=jpeg&wxfrom=13&tp=wxpic)

对于电子设备来说，工作时都会产生一定的热量，从而使设备内部温度迅速上升，如果不及时将该热量散发出去，设备就会持续的升温，器件就会因过热而失效，电子设备的可靠性能就会下降。因此，对电路板进行很好的散热处理是非常重要的。

  

**1 、加散热铜箔和采用大面积电源地铜箔。**  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHP72XNETKVHIq5BQ54xuqt2nTRCvmOQDpnkePZzicIXwa30URT6ibsW3AXDFn8kT9WZoAWsNRUC3oIA/640?wx_fmt=jpeg&wxfrom=13&tp=wxpic)

  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHP72XNETKVHIq5BQ54xuqt2hlNFia5icc5UPOF7b6vvkIRncUMv5d6je4vayGS8W0RIQriceKpjlN13g/640?wx_fmt=jpeg&wxfrom=13&tp=wxpic)

根据上图可以看到：连接铜皮的面积越大，结温越低

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHP72XNETKVHIq5BQ54xuqt2Elxz5X3V1C4zzLWs6eAUZcV3Yja2pHZCXWScIjYjVxicao6FhT0Wfibw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

根据上图，可以看出，覆铜面积越大，结温越低。

  

**2、热过孔**

热过孔能有效的降低器件结温，提高单板厚度方向温度的均匀性，为在 PCB 背面采取其他散热方式提供了可能。通过仿真发现，与无热过孔相比，在器件热功耗为 2.5W 、间距 1mm 、中心设计 6x6 的热过孔能使结温降低 4.8°C 左右，而 PCB 的顶面与底面的温差由原来的 21°C 减低到 5°C 。热过孔阵列改为 4x4 后，器件的结温与 6x6 相比升高了 2.2°C ，值得关注。

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHP72XNETKVHIq5BQ54xuqt2ibKWWOGqyIAhMNLE8Af1G9312icjMGaoNU6cbpZ5MP67jnxwAsDSZ1xg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**3、IC背面露铜，减小铜皮与空气之间的热阻**  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHP72XNETKVHIq5BQ54xuqt20DbLuzibnCGOhDic86T5bBOt2xB4FQd9k72Y7tfZESScXNZpTMLBDXpA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

  

**4、PCB布局**

大功率、热敏器件的要求。

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHP72XNETKVHIq5BQ54xuqt2txbbibhoqpUZwBRQbCN47GBhEIRJGzhgAlqVauoSEvoWvRSGEtgjJ7Q/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

a、热敏感器件放置在冷风区。

b、温度检测器件放置在最热的位置。

c、同一块印制板上的器件应尽可能按其发热量大小及散热程度分区排列，发热量小或耐热性差的器件（如小信号晶体管、小规模集成电路、电解电容等）放在冷却气流的最上流（入口处），发热量大或耐热性好的器件（如功率晶体管、大规模集成电路等）放在冷却气流最下游。

d、在水平方向上，大功率器件尽量靠近印制板边沿布置，以便缩短传热路径；在垂直方向上，大功率器件尽量靠近印制板上方布置，以便减少这些器件工作时对其他器件温度的影响。

e、设备内印制板的散热主要依靠空气流动，所以在设计时要研究空气流动路径，合理配置器件或印制电路板。空气流动时总是趋向于阻力小的地方流动，所以在印制电路板上配置器件时，要避免在某个区域留有较大的空域。整机中多块印制电路板的配置也应注意同样的问题。

f、对温度比较敏感的器件最好安置在温度最低的区域（如设备的底部），千万不要将它放在发热器件的正上方，多个器件最好是在水平面上交错布局。

g、将功耗最高和发热最大的器件布置在散热最佳位置附近。不要将发热较高的器件放置在印制板的角落和四周边缘，除非在它的附近安排有散热装置。在设计功率电阻时尽可能选择大一些的器件，且在调整印制板布局时使之有足够的散热空间。

h、元器件间距建议：  

![](https://mmbiz.qpic.cn/mmbiz_png/ewiaKibzhXCHP72XNETKVHIq5BQ54xuqt2VIsFiclDR8ibTYrNN8yJbHNVqIdjMFvnBOWYuXE8A35hg8mM8VukOEQg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1&wx_co=1)

![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjiaSeo5AHcp5WPibobK2CJ3WqxQIeic9KCQjyuuAHria7zt3JpyqOE6XErw2ic5lOib9V91ia3t8Bwn1v6iaA/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)![](https://mmbiz.qpic.cn/mmbiz_jpg/2vmCEf4iaGjgRZ0H54epM5GAlv5LDiaMIChlibetxZnsYhWeGYuvoiaPqNFUa57LqCkNjJhoEjczSpDRmVkaLLLbsg/640?wx_fmt=jpeg&from=appmsg&wxfrom=5&wx_lazy=1&wx_co=1&tp=wxpic)

## 

**声明：**

  

声明：文章来源网络。本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传/技术咨询 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)  
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群。