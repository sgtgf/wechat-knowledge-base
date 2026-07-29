# MOS管驱动电路以及阻值选取

原创 电路一点通 2025-05-03 18:58 广西

> 原文地址: [https://mp.weixin.qq.com/s/OKrB\_UyclzKq\_IZAqpuFfw](https://mp.weixin.qq.com/s/OKrB_UyclzKq_IZAqpuFfw)

驱动电路需要驱动芯片

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路以及阻值选取_images\img_000_a1e1aa68bc16.png)

驱动电路需要慢开快关，MOS管开通电流波形是红色，MOS管关断电流波形是黑色

R17是开MOS，R16是用来管MOS

电路工作时，上下两MOS管是互补导通，中间为死区时间，但实际上MOS管驱动波形是

![](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路以及阻值选取_images\img_001_fb51f7e31419.png)

R17是驱动阻值，需要调试得出

阻值太大，MOS管开通时间慢，MOS管损耗高，效率低，但对EMI是有利的

阻值小，MOS管开通时间快，损耗低，但EMI不利，dv/dt、di/dt大谐波含量高

R16是下拉电阻，一般选用10K，为了防止MOS管在某些干扰下给Cgs电容充电，导致MOS管误导通出现炸管现象。

-   [![图片](D:\电脑文件\公众号知识库\电力电子_IGBT_功率器件\MOS管驱动电路以及阻值选取_images\img_002_7ff1eee99ac2.png)](https://mp.weixin.qq.com/s?__biz=MzU3MDU1Mzg2OQ==&mid=2247537957&idx=2&sn=6074857c7c862f7626b6ab35f157c9ff&token=591937914&lang=zh_CN&scene=21#wechat_redirect)
    
    **👆查看更多目录👆**
    

     注：本文仅代表作者观点，请读者仅作参考并自行核实其真实性及合法性。如您发现图文视频内容来源标注有误或侵犯了您的权益请联系（微信haizililiang），本公众号将及时予以修改或删除。

******进大家庭⭕圈探讨回复:************交流******

  

分享💬点赞👍在看❤️