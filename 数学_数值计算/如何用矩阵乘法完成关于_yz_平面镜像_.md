# 如何用矩阵乘法完成关于 yz 平面镜像？


> 原文地址: [https://mp.weixin.qq.com/s/NJlVY4RmAdJEixKSThvZpQ](https://mp.weixin.qq.com/s/NJlVY4RmAdJEixKSThvZpQ)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocv6rEdO0yQsTdPCB3ttKlwhtrCspiaqPay4M8hrZ08IsISHxlvb1a8KLWSEMGqAahpPDyYKnjTAFw2Yely5lyDVx4lwWxcYS6zA/640?wx_fmt=png&from=appmsg)

图1

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocube1SOfXX7cfElFIb1g9N048KicarPgNF8wOxdHhBTCrLib8rOOzR1OZ4F51Dg5FMJxVL7QRM3lEz6lvAOKPzrSj0ZGOndVIXib4/640?wx_fmt=png&from=appmsg)

图2

从两张图可以直接读出：**关于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ueMzutJ1OF0ibOLtCYickn6qricwTOEoNYRMW6FHOiash9U0oqDxAINOp9SaE6qts4W2qUJ9j39wp7mEnJNucZbqibJP1FDTEPH7rJnSkWxbrFDA/640?wx_fmt=svg&from=appmsg) 平面镜像**（也就是以 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5CRUc9ZvGkAticEBPyL1877RlrqyyWhwornO7BNOhYnGjqoflXSUxcXjcg5t9vFsib7TibSEx8KIEek7ib6wYkPzy3LK9pUrRlxz7R91e0hbIf9A/640?wx_fmt=svg&from=appmsg) 平面 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5akIGuXt0smvyLvDgh9h99qwSlPmwoZszHico3H5fIQfJ92mvaavDIvpJib94z4hX3RxEg4xwRbjd293Fpt59qujSfLRHeiaGsI5cNaibfxfNFgg/640?wx_fmt=svg&from=appmsg) 为“镜子”翻过去），几何效果就是：

-   **y、z不变**
-   **x 取相反数**
    
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SO9KJxTN5ag6Amll7dcu7LaoWh2Sfsq90PUO5s5MefmDRF8uCXTh3KdpOMQ8CzVNsfe18CvtRb3Xm7vwN55gtf8LXaSMEQfmAXrUct45Aqg/640?wx_fmt=svg&from=appmsg)
    

也就是映射规则：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Stq745daCfggeuESzmIialTaB9a1XGYWd6wJDcIvz9hoFzrW5wK4OGtTwXjgt8H947hzqL8PtUJE9uTG92V72jgsb9b3Z6ibKNckGPA1deUuA/640?wx_fmt=svg&from=appmsg)

* * *

## 1) 用 3×3 矩阵一乘就完成镜像

把点写成列向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4HXksicFTXqWPqmPWfW07ibspp8ujZicW3gMsxib3tKl7bGtY126uTiazmsJQ7XLJVlxqzySTSYx2icsa8YJZ5KYj87zYhibabyL1sEXGYjibxibeDsDg/640?wx_fmt=svg&from=appmsg)，镜像矩阵就是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7A6DNtEtfJErsv4HwSnrt2cWrfl3qjERwuBcDPqDeibcw9MVNQjSWDicbQsWnJtbmHic5agbBicbyKgmaCxIu70oVXt4ZINiaapPRCa7yZmHsU3IQ/640?wx_fmt=svg&from=appmsg)

于是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SO9KJxTN5auPq5yhib33a6bibVWiaWelB8iaodvXmalEpftjiaiaZ8kibIichUy4ibZcltZALxZ2GALNbBc11ZN7SkFTKByCcZbwIP41JuCBUMPWv9sg/640?wx_fmt=svg&from=appmsg)

这就是“用矩阵乘法完成关于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eyHe2Z8OrA7Lcs5qjtpgIZibB1wRibdTADjDpVicQZjRtNRveT2RhRMImZLlXRURM5WhWUNENk4p1BpUJWb6oodTfagtPrMwiasdTxRbkP05pfg/640?wx_fmt=svg&from=appmsg) 平面镜像”。

这个镜像矩阵的“特征”可以用一句话概括：

> **它是一个对角矩阵，只有某些轴的符号被翻转；哪些轴被翻转，就说明镜像平面的法向量沿哪些轴。**

* * *

## 1.1) 一眼看出“关于哪个平面”：看[对角](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247490870&idx=1&sn=395519ec4ebb0f458a5268dbd042f704&scene=21#wechat_redirect)线上的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5akIGuXt0smpQb6OJibOVvVa2ZFFycHnVz2Fr2aqrTg8iapMtpsUScWo3tX9KzH9Qe8WsuodIFicXJ5tN8gs2fWmvHQI1Iof8EhLsyo2w42P2Cg/640?wx_fmt=svg&from=appmsg) 在哪里

对角矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5EanPsXVBWLdAfkzhmU5mO1ne9M2R6lYlIicxs4sibKUPWCGq7wPaTJD7hlrSthmDsgRWX3O9ArVAmIlaUaCJhdF7wqibrNHdoxuokf5icBSFpkQ/640?wx_fmt=svg&from=appmsg) 作用是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4rr9OMcCULYg0SdnRWraC1OuXQ7ZicTp8riapAAM0VZvyyhia4D91H5Cy6YYKB8EXVLNTtZrKVPgfCPoAf0BlSZAiaHqcYib9pcjU5RUXNA7t8cAQ/640?wx_fmt=svg&from=appmsg)

-   若 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4XDrBibU5qzqiaIPrEFboFlr09btfLqJQqCQ2JOnMGOM3PC0icX4hxlIQPXpdxG1X6iam7Hic6deibpt6IuTQahwKswvVCvdqyMkUIRZkxRCszaEwg/640?wx_fmt=svg&from=appmsg)，说明 **x 分量反号**，而 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fUibIjZURvicEU0GSOTUztTrdZ3hXK7erialTz8wyfcnicMdibJoqIWqK9X1RPIJn6CF6iaMPb28RGKKLlXDzV7oKVJABvYfSwMxl0pdaGkWzldGA/640?wx_fmt=svg&from=appmsg) 不动  
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59Y0c1DY3KbPicqLUUFy8yesfE8Suic848fyQXicicjKesrmOfjc8KhF4cuicv9ugpkTgoxiaGkaz9AlkGO1EKj05bpM1HAfoXUe20DWiaBsyNj0K0w/640?wx_fmt=svg&from=appmsg) 点被翻到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6YibQB5EjqzQvs65r6zGpLFvSyUnowfgjJF085NdeXiaux2icyk5waWIuHGsxLDjicNqQ18JxLTY3c9YMsCEDH6eBfBJjN2W8jzYGQIhib0avfMJg/640?wx_fmt=svg&from=appmsg) 的另一侧  
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5SA0hYANqGic2DL6YgmiaAc8ZticRITVwhOZd6mgkyX6G6DMyVkMKKbgp0TiaOedEvEdr3wQDh2DKv4evjbMDkejdLHu44RzHetN9iakbEoiaF2byw/640?wx_fmt=svg&from=appmsg)**镜面是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48WVuMCVpKKRvZEF2IVicH3YeJhJK0mEoA4qAGp2LiaTpWDZkh4DEiaicsqwhibYfEpK5ib6XvrOE7G3Bic3uWurTnMzhlMD16Xs2Wb6aj3GAjibNUog/640?wx_fmt=svg&from=appmsg) 的平面**，也就是  **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6BjQPJiaZ1WHa1fyaiaAm5aWxPyb6wneud0p2HXEzgzZ1xrA3V4oqs36f1YVOxvbrDA8cLLn2ibUn9ecryibGA0QfozaHxpaQIn4nyWKULXOUscQ/640?wx_fmt=svg&from=appmsg) 平面**。
    

所以：  
**\-1 出现在第 1 个对角元素 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UBN1VlVGkHAx3tQD7aJC3rQj7pBria1PicYUG4nz6DVVSBiaViblUL3rhQLJHw0z9lBCNgMqJ0ENYibib9kFfltpUglrHzv0XEPNoMHjMsCcf8QMA/640?wx_fmt=svg&from=appmsg) 关于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM78QADxv2WDIj0xAn3Z7YWG5N07gxDfd4ibtaJ3CKmDNs2YianlwfRguibql1fA7C4WPVKo5sUKhtQMalKPJYgD1CeRAuYib09fFBguognuunlQlg/640?wx_fmt=svg&from=appmsg) 平面镜像。**

同理：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7TLc9ke2ibYmQQYRjBtgiaQ2NMuDjVxibo4bibQhUXgHP3ECibTeh65Lq6mfRk6fQ3ibAxjG2VyPBeZ39pkiceGfJy2ibuxWz4SCYiak5ylWa05PBqWrQ/640?wx_fmt=svg&from=appmsg)
    
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7pO7QxSCXKaWSrPmCaFAP2z5ibPRWvUZFR8hHk5bSTMuBYYXlIk3iaUuCoia6D0D600KiahbwEpfpvWWDgR4vGTwhk1ibOyZKDNJl7ptiaK436fSFg/640?wx_fmt=svg&from=appmsg) 反号 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM78QADxv2WDIv1ZoI7fYoMJXvichwtmwLx2r5iagRpZxWZnHTn4U8tOhMnaQt4WRicMaOIc2k8eYiaMjBP07k3jnLByVZn7IzPzjuIib5Nam2icDtjA/640?wx_fmt=svg&from=appmsg) 关于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXiau3Vgqh5VxrmdStVmzy1he1vic4xLZaiaQAXlf92TlUGNRSptgEibtuALTbSMP01Mia336CxKGVKlnrkO7ibPTBadRsAEb2fYOMIRg/640?wx_fmt=svg&from=appmsg) 平面镜像（![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM65miagKj3LRvYLA1ic3iabmusztuoSDeT93Bg6sQKY1eKcYCmKDuymdIRx7iaicic6GJyDGXibtGbJvaNBXmSFQ92GOEer57buWoVG7BPZncM9DujIA/640?wx_fmt=svg&from=appmsg)）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5c8icKuPZT0pXm0NNHvUYM9RJFgvA9TtWx6h8Wvant8tFFnWhrcYpErhjoJ9ficOfY94uoHEZu797f7sQ5ruI0HUaXicBd5RxavEbibqbopWcbhg/640?wx_fmt=svg&from=appmsg)
    
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM598fbtext8cEG7cq6REvsG8YupNym9EHAojUdV3lQYI4Fs7tglic62ToE2b03Y1uERIDHmoUGD6a5YjkPsuPRISNn7jVKVBUvpujUibTK3aBBA/640?wx_fmt=svg&from=appmsg) 反号 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7TLc9ke2ibYmd0WCs8SHlBDMGyxGyG4BkXUSbNsuCheS05UJjgbaFqNc38WCIfa2ib2jw0KCxLSMF07ncUkyHXYhA7bmSMNMkZiblkaEicGafmYw/640?wx_fmt=svg&from=appmsg) 关于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4tTIGJps5OtRsFP5GkoGQlmVzdkkl4g85liam3o7O9RLqULpX43ian2XnN11hwv3iaSgicFcapHlN4bgk0NQedU2kibyMBP3SUU5sMmg5tPPzqDwQ/640?wx_fmt=svg&from=appmsg) 平面镜像（![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM539s653260miaiajJ9Bqv0W1Z2a3DDzgWXcahF0FBVJiaTiaBTlz5jiaYKoVriasGK0RclMXgjatBZK2L5B8h75TEDkQepKM95iabNnF7mcldKo86HA/640?wx_fmt=svg&from=appmsg)）
    

* * *

## 1.2) 更本质的判别法：看“哪些向量保持不变”

镜像关于某个平面，有两个核心性质：

1.  **平面内的所有向量不变**
    
    （特征值 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6wE1vvAKZRkia10Yzy7miaNNzicUFuRdicFxPBvAIsHOAwV8MsFkG0lxYM3BaFMhMiarOzpGxdIfcHibAFs2eDGXFWl5sYIlwYHLK0sqdOF4ldDDyA/640?wx_fmt=svg&from=appmsg)）
    
2.  **垂直于平面的方向反号**
    
    （特征值 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57Oiah5NXCFGX0uUHTpCYKDSoiaL9iaqpvSqAhLycWSFB7w1CniaoCF5ZkNU7c1QGcD19YbHj2Hs5F9osLJENicnlVZAgV7E6aG3pjaUNBHxSHkUQ/640?wx_fmt=svg&from=appmsg)）
    

对 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaIuk5rGzV3DD7qic53dBvKffTDpaxk4j4xGhBAH381bhHl1yibICfcnbZN1FULqNTW2Nff3AEowRLr9HPn9BIwPA59Q1PbSVP994cCNXiafwaQ/640?wx_fmt=svg&from=appmsg) 来说：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznrxso0ic1OpbuYicTYSokTYtvrIzgTbicqsBZTclnobgic55iazqRcibVhtibZibm8NU8GXHEz1Wsib8qdRIljLoaBNu1E2XudBm4S7w3Ag/640?wx_fmt=svg&from=appmsg)
    
     和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5OrKCf3UjnETlMpwia5fuRtOEonqQiarogqfvBy0aNHNR75LWFZHs51Wdyedcc57MkaWPsdiaQQOMiaKWxLHqPCJe88U3hUYgcVGmiagW9ib85Dzlg/640?wx_fmt=svg&from=appmsg) 乘上去都不变  
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7yDwToTs9uKzK86kl8iaqEKdOXMXYwsWGaItHZ7EXFNhv5pkGo95RMz01furMSR6UP713GrqqrgyAeLbPPMugnaJtKSDcRzHAzr8EO8JrlnAQ/640?wx_fmt=svg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SO9KJxTN5ahGJAjdo1Jibmcpwibq8Umj58ylyEWG01ajO9Z8DGsib8BoibuGicct3kXS48oB3cTj3rB3OXuiayTKXc2QbPmibeAQLiapMO67hJdAJuw/640?wx_fmt=svg&from=appmsg) 轴、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0ngcxonBibRmuC0qKj3RYjTRfV9uGnA1RRy1nz0TefktLwT3BuIUoibD1p8V4MzzIqAV0ksCJJl0mt1mz00C1IIPib2KBl2gKpSsg/640?wx_fmt=svg&from=appmsg) 轴方向都在“镜面内”
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dMveerODZ2r8kO8VbnAeSWH667eyz03C6eSgpEt0B3WNgbSWaGzGE7zYiciaDeZXI7Z1TelwncSh2V9EUGqadSDhicc5VwvXGJh6w/640?wx_fmt=svg&from=appmsg)
    
     乘上去变成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ceQCHhpYR1MicfC4uJZuq3GdV4hhqQAleXbibzQD4xVHfggNLz2735xesMADpRfhad9jULK6oUt7sQfncFjT2ohbXG5YWwDaNwqgiaf2kr2ichA/640?wx_fmt=svg&from=appmsg)  
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eQpfTjKyQSc2lN8eqqzRibLficoWgMPywSGrz80gYNNdbetXB2AgdS3ibrAlGHRGFOibwHxUNj7hCZFjuyZJCRXLRic4pp0UKBjZuOO4SUG3aLZw/640?wx_fmt=svg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4avg0oPAfnf4GCiclEEybNESibicIxKg3pqkfIPPMwkB03UNcuPcXZsTjpzOO8d5ssSxywibrZjxsqicxPJRJUhztTQkhpJQYzOicHDdcCZ0OsfFdg/640?wx_fmt=svg&from=appmsg) 轴是“[法向方向](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247493909&idx=1&sn=40f984626deab78f6a8cdef12d031c8e&scene=21#wechat_redirect)”（垂直镜面）
    

所以镜面就是由 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49COKKPVO0x3hIlicL7lmw3y0icIuKRib83YcJTm1Yvb0hQviak9UmEicABHw6uYd3N0IWsBlykBf7kogsa9TLXum7nsl2CibbKXiaibMOicQTaW8bibKw/640?wx_fmt=svg&from=appmsg) 与 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xa2kiaT7BL1aMY2IoGNXw9XebnRibhLKMTZO1N3oTPouvHKI8Cl2aFzMO18fuTueFG8b3b9oSKPKWfNaibibEw2kcKnGcOJ4hS1aBiaP47mAm3YQ/640?wx_fmt=svg&from=appmsg) 张成的平面： **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6S7HFnny4pzuZCOfMJy4a6Yor51l37tlBYOictAWuyZicGHJX9IcwGzCm0JQfvIXj6MbWypCaJlzUwbdckINXpcicPnSZFWZZ4EoCA/640?wx_fmt=svg&from=appmsg) 平面**。

* * *

## 1.3) 镜像矩阵的典型“指纹”（你看到就该想到镜像）

### (a) 对称：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79Oz4ygqKsEDn9kB5prsAPrnqxBJZy4UBuFUNnj5M2t88o3hbeFDZYaicjLmrEF6abmia5pZA2IpN48ItrfibHoWzlquyicPKER10YbNGkck52iaA/640?wx_fmt=svg&from=appmsg)

镜像是“正交反射”，这类矩阵通常是对称的（关于某个子空间的正交投影结构）。

### (b) 正交：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6R2UQuTP2oGDdxSZ8HcLlRfdxMhicRC3xT1cwEFtfuwiaufqkTs01cyrwsnP2mFf3s2DBo2B1sYeXS4FkicKKqSj3jlK1Z9mnbmFZIicloEEX5kA/640?wx_fmt=svg&from=appmsg)

它不改变长度与角度（只是翻过去），所以是[正交](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247489540&idx=1&sn=90593d2b79425be1b6b01e1ec3fce6e6&scene=21#wechat_redirect)变换。

### (c) 自反：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KPv7wdmAfzOAFibicgicmSpJh1PGWT8TXFOeE2XThiafBTPX3QrCnhv2bIGqgenRFz4KfowLnnRNkjRN216jIxicfdKKZSSLlL6SSDQoAukGExEQ/640?wx_fmt=svg&from=appmsg)

镜像两次回到原处：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Im49yZyGFyeAlbTHNpRV0Os1micCK1dF6YzE8vKzW0x7KSvvT2au5jAlqb3qhUgSSGIedic1uDXgwXWrmqoCEHLE91VYgmecCjlbeSYicqY8sQ/640?wx_fmt=svg&from=appmsg)

### (d) 行列式为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5jJ9QdfEibgUtks9ibbwuLFEdgrLbCdjTar4NuEle9DnXbpmhKYO8iczy6UoJG4wyXouxkby9qiaiaY3iaLicHdCnTnyOJbFGRDnRGF98EmgspqoAeQ/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9uGLbK3aqAI01icaRAOq08FnlNtgIJXIicJgSESLLfsC8lY0t2rxRVWrhtVBSLYCc3dibMco4WaNdcgia3HpKpd876l0RMMbn41zxg/640?wx_fmt=svg&from=appmsg)

意味着它会翻转手性（右手系变左手系），这也是镜像的强特征。

### (e) 特征值结构：一个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7n6Ln7cXbs1NXpeIMJpYnRLU8TxZOS1CKW6y11fy5g7d2G5G79WTMNcvkK3ic7fuUwbkaZPA3easbkpMKvLp22PmUPtvlLfK4FH8ibibozFtr4Q/640?wx_fmt=svg&from=appmsg)，两个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4LrbSGAyNks4TrPT4kb5iadLBMxr8dkiahgYibRgYuYWG7PDCUgR0iaqdsgicdtZ1su0ia4cqiapFAjfUlHTBrs5aZ0ic3iaricfOsSuRWLGXw6MS6o74g/640?wx_fmt=svg&from=appmsg)

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaIuk5rGzV3O7hLxWsVJB54RFVfxdXqEOPdXfIywHr62OSHzl37Z8ibeRLF8GFhkxd3zDCzkOWT9omSlJtfe2Sh4ibc8IygvKiczBssIcM7KvpQ/640?wx_fmt=svg&from=appmsg)
    
     的特征空间：镜面内（二维）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4PWqk8VfXjT2mMOotF6EwrenjicyGKf00eGHdt6rBibqVfJnlWTtiaiaG4cXJt449U7OSTH7pawFoXL3R4iaYXm6UVCWvqbPibA3PgeRShNJGKx52Q/640?wx_fmt=svg&from=appmsg)
    
     的特征向量：镜面法向（一维）
    

对 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7WJgMpaXp6Jg3PpooXZyUCoRylfpPHUmjdjCTNianJWibNDRRIaibURQ99VT3JKcV4VDRhKZlMnAosD4icsHojj6ocLCJEWFRKbHDZCiaHJ18RkQw/640?wx_fmt=svg&from=appmsg)，特征值就是：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59Y0c1DY3KbPTeaiadQNKfhSzQiabtXqlqO8TiaiaVsf9GctyF9loibcsLQhZaoR9lMrwMgcoThA3Zh2T1ibCetjdqVJ33Whe2HxIzHhmmEfiaWKqfQ/640?wx_fmt=svg&from=appmsg)
    
     对应方向 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6EoXJIuKFsAUY4no9um1kk0gx8UQVvRBUyRnWwUvnGewrTwdBcib90b8L6Kr4ZiaatFjdZibvkcpEqic02h6JcSh0qnl2WIT6V3GgEbiacaobaO7g/640?wx_fmt=svg&from=appmsg)（x 轴）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eQpfTjKyQSXnewTj5r0A8Gn1xeZYiaW3uFD531KyohdY1kicON7XPbFTJx5e4BZia6Fic5MkpAVVPdfayibxeaAZgicvlPSZQfr2JdMfvZ0eJIASQ/640?wx_fmt=svg&from=appmsg)
    
     对应平面内所有 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6rU6pFYYpZAPvvCicuZuQdsgfOoibILBthN1e5QFRgiaHDdibEq0iaFnric9A1csh3n8kNkKFQyvOz0ErpMe818tibiaH8Y5AYrmhZUcwXx1V1B8gkYA/640?wx_fmt=svg&from=appmsg)
    

* * *

## 1.4) 口诀：看“谁不动”与“谁翻转”

-   **不动的坐标轴 ⇒ 在镜面里**
-   **翻转的坐标轴 ⇒ 垂直镜面**

这里 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Pzgx5Znm20x2MTZZLMqXQ6ViaETUTbCNf0jhde2Oe8uT4Wjj28srb6hoLg6utCZLibd4ibriabOjZTNCZO6PYO5ttCx1iak4f248Ko6sEwOygKbA/640?wx_fmt=svg&from=appmsg) 不动、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM539s653260mvQXIK9CUHd0XaLicKtFRZpA81aSdORHic0YufrVclqPbMXL4STuvkqq0hAyVhnrAFiaxm5n1WqamQS19INzQCNex1qEiclsIjSw7Q/640?wx_fmt=svg&from=appmsg) 翻转 ⇒ 镜面是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4WJN4xKBxQibIg7M3OGsOnBKP3p0VJW7nO2WQrztLU3m5kqFp4SRN1UJicsKCuFHKmvHT1c5uujuVjj9a5YRUzkgibk3z3Xic3LH08wBzOZzkhyQ/640?wx_fmt=svg&from=appmsg)。

## 2) 对照图1的立方体顶点：为什么图2的 x 变成负的

图1里（可读出的几个关键点）例如：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5c8icKuPZT0pTwy1RicqqiaxgaZboeDNB1qA4g9Z0flqro4sgia3aicgXXyT1HEribUpicK40ucNVpwKSQS1gXzFI5icnZFswAFESDJmOMjmnet7c3hA/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6KE8NpdD3rc7mMWjyQCrx17aqTcepGoiccHwRBMR3OkicBJmkvDCtCNxbA8V6MvOVMtL0ZNOTkM4ArL9Jt7KicuTzThKnNqS7zNOYU9hhOSykGA/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwj3q1sSvkphqU2dnOetG4sYfZvuh5jaa6uMofm3rMLhDniaJDodSEQpG8T2B5fFUQNVnqPpo0Jgsv9Uo9VZDBiaYSL9S28aXe74Q/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BKSsfG1hiab4iaQjEiaZ0miafKtqbZtpJxP24IbAdQBnxJNxO5TN4FUuictJC40z0WQNb8P7Ppib0qdk6Rrrw6VEAjnLOfibwWWgwm5ABAic1yr1FnQ/640?wx_fmt=svg&from=appmsg)

关于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fL1MVt2SzHaVkYGQc8JVbIBr781Nic8xrD7y95l6c0jx6hFgF9tNfsyib4eq3bL9omM1U9qq5ohThf8fzlEzjVgCeDATQCC0PeHqI5JMU3YhA/640?wx_fmt=svg&from=appmsg) 平面镜像后，按规则 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5gju16GXSGEC5fJDpicvLMk5w4icg3geNeMOaDmibtSBbpokmK7AmjIHib0BDsOyqIkqE6mr4xVLauJKlrr6PAJQnm2TXXw74Lic2DlAMmLDeLzaA/640?wx_fmt=svg&from=appmsg)：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Tbia0AiaILx9sO9XLJ3I0Iia7ZGmU9e17CUNxDMIiasP4LLiaiaLqfBLZMia1EP5icpOQzic09icxkAldtG0ibnr7xDichMBjUjia8Uv5dOddDkRxtz9KMRw/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4WJN4xKBxQibERHr029NFdAIgg6d1aKngfBmNlQsHxBDUUFPHurgQyJfzgF3GibH6tgZn0hib5C8Af3icia69iaGjIVhZ5cgLlSDwEQH0gWEniazGmQ/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6A2dX2kRILmWHehica1lovrZon29DuVBOKMfFGS9XWaCJTmwM14hmKlaic67wPWX9eFMv9OKFr1WwwIEcwdqYlzv5icqjPkKnImoGjdMp8nDPbw/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM69NBmOkOibGnKHvpIYumPiaxtUtSEcqI5MxtBlgLaSLsfjl5GGLWFUAJStr6VPedKUVq6Uz5ZdxRWLNKBia3wV2uK1kmfEXLceRYBt5ibVy5X2ZA/640?wx_fmt=svg&from=appmsg)

而像 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM73fhc04sUsn7eRdS4FWcj4hTSOuLsiaJdQ5KLbp2LacqmSWibfJ7NByibBAibLRzWLt8YsJyFl0fYXvcqslBfNQlfaaCbJEm0yxbibRibUMX6bgsXA/640?wx_fmt=svg&from=appmsg)、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7DJf0Hzc3RfMDOoKoBEO0G5JMHOPJJ37BRzxPkCJC7WXsW0kMOwhSHhcm3PGLwWiavahrYrJpn1bT6OPcibeLchP56W0z2XdEMav0vyCpaJNTg/640?wx_fmt=svg&from=appmsg)、![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5VfxQjjBdmYCKK4eDp2azM745Xgia5CQjHBudKX0fkRPicuHVVIWzSUw1Irt8sNxs13gfiaw12m3jwGBxAI8fXo74ibN3nmWROWKBfQJfVR3G1Hw/640?wx_fmt=svg&from=appmsg) 这类 **本来就在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZcVzOQiaibrlOvXjiauSd8WweVtbeEyPeT8LsjdfiaRY9EIlvpRXmJ2dDCCULCC5BudArF0VRYBl4YvQfRyskoNGT8TiaD1FE5cSFKxKHIjPvrg/640?wx_fmt=svg&from=appmsg) 平面上（![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6XqSJ2qS6rCQSjUFzqT51UoH0dbc16iaCC7R41RA43ickNF0GrNVE0zWgDJok9gKZvJEbOPkGLXhhrg31vV4W7FFe7sJkBAHdsEVIRRhibjXpoA/640?wx_fmt=svg&from=appmsg)）** 的点，镜像后还是自己：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4qfYABKdicCdxhxCWA2adg0ZBlt2FzzaRtqYamoIDf2RwGOrHVu7TtTovZNNrFicMMeKS36AxHlqQGQKW6d58CV4ic5L2Waje6dVWFqjKhcbicwQ/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7TLc9ke2ibYmT9NhCg4TWbXCxf9oEVGY7usG3KzUdyPpqgXZIOpMmo6ZVPEsp3QYCVfxxZTTPBUkYAdNGfibtkKyKb6slAEwX8G1JbLQKD0ibKA/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6wE1vvAKZRkh3ia80UiaFC9ic0aYgtOTnCbxzP98GXa930OIFPbIUA0iaiaY2Z0BcnicVibZmhxnA9b7yiajicEawu9FFlwSYBFKuDvJ55SqkdJcbNOdg/640?wx_fmt=svg&from=appmsg)

这正对应图2：右侧那一面（![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Das6GQSAflnI8fPvmz5VtPbIdRflmhzzJjt1qzxnGiaWiaxL6xlAkf3GHescxe5gD3YMETiblFwBAIib0TQlAHReSe0t6qCU0oq0H25z3iaY6DZQ/640?wx_fmt=svg&from=appmsg)）没动，另一面从 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4rr9OMcCULYgxRhBBjKrAKYbh6Xk34rvvJO0ibTqfPbMefu9oUicq7dicLtcHUzDy553xwZ57YRUmdAwSloggmibFL6yrwmqFAJEo42ZKwcKEoHw/640?wx_fmt=svg&from=appmsg) 翻到了 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79uP4ncW83F1p57DznD89gVTSsnvqwCiaWtJ1Bjo9nAWdlD7ppU3UowjXE75tQlYcozSHjmvB9Fj9wJVHTfkgMgX14vkxXYS5l3UwN4uVSwkw/640?wx_fmt=svg&from=appmsg)。

* * *

## 3) 一个很重要的“手感”：镜像会翻转朝向（det = -1）

这个矩阵

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57fichicXWqmlOjUy4hQWIh1P8bZ7EHOqz614JAWMNG8sy4gl6eCeibleNPoiar7KWDEEicaq3APfHFtVBZW2HmUS7yc2dY6Doic6ibpa5A5uqtcEoQ/640?wx_fmt=svg&from=appmsg)

表示它不是“纯旋转”（旋转的 det 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Asvuw3hPEXZaRwu6Q2IUicNnzg4Q8ezficazibNkg0Iv1n6ydFibspUSOdiaISAe6jicicpNVqNDwPlgHyKibuAxM7KKPkpkXho4cerwRNMP2rqlhOA/640?wx_fmt=svg&from=appmsg)），而是**会把[右手系](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247494783&idx=1&sn=1105ed4623eadcde3f05bb4bbc31b4f4&scene=21#wechat_redirect)翻成左手系**：立方体的“左右”被翻转，所以看起来像从镜子里看到的物体。

* * *

## 4) 如果用[齐次坐标](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247493117&idx=1&sn=70a84f2bb24ddb4fde7436eb50967afa&scene=21#wechat_redirect)（4×4）也一样简单

在实际的 3D 引擎（如 OpenGL 或 DirectX）中，通常使用 4×4 矩阵。

做图形学/三维变换常用齐次坐标 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiaVuBy0bAEXHvq04DBDJMNWg4AeCzrguJ16nU04ic8twGsHRnP9z8OQWG8nA2hWsicogW1cRc0xUpZWibx9Z0jlarTPsN7rsyhpsrQ/640?wx_fmt=svg&from=appmsg)，则

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7rlLBz6JOdg1sG5n3LPCQZetmdHPic8louk8DunkUxGjIe70xyWh2Qt54yHFYYuSniasvxIC2RcTnDxtv7kA2hRKK0zwRT7xfp83ef1v2Woeeg/640?wx_fmt=svg&from=appmsg)

总结

-   **xy：让 z 分量乘 -1。**
-   **xz：让 y 分量乘 -1。**
-   **yz：让 x 分量乘 -1（即图2所展示的变换逻辑）。**

  

把两张图里的 **A–H 八个顶点**（以及“哪些点不动、哪些点翻到 x<0”）系统地讲清楚，再补上在 3D 渲染里一定会遇到的 **[法线](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247493909&idx=1&sn=40f984626deab78f6a8cdef12d031c8e&scene=21#wechat_redirect)/背面剔除/三角形绕序**问题。

5) 先把“关于 yz 平面镜像”写成一句话规则

**镜像平面：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xa2kiaT7BL1eetX7nLNDLViahr0XJGHvZqBnl8OFoxPQQ6bZthSRFqcLbibiaOWXO7ztq8LuBIhH5uWcfaG8sWp7JnTNqvStjk9X1WZJHkduaNQ/640?wx_fmt=svg&from=appmsg) 平面 = ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mfF2dEW7G1LMBhpc8NtjwwD1db6IlaV1ib4thqUpVjEdn7XFrTjPpp4QalLYxLgEAhk3fWCRqbeaR6bCzhl2Qh9JE667G6E8EJjw8NMGwtKA/640?wx_fmt=svg&from=appmsg)**   
因此：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM70Rdb4ngSBia1l422EzpTIvWorX5j6cjYeDShjOU5zYYd0C8MBlAHTfIpWfo3EXvQtkVsmtibRE92ozQMCvecJL6pMiaZicppicdxOFeguS9OYXRg/640?wx_fmt=svg&from=appmsg)

也就是：**只改 x 的符号，y、z 原封不动。**

* * *

## 6) 套到立方体的 8 个顶点（完整表）

从图1能读出，这个立方体可以理解为：

-   一张面在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4c47kfCmDgBoibaJCl4HadpGIPjgRBScOc8oV8htmENeH1Zpnzhfx06tuOuYhxu8icNibek9WHxrlqFL1mMK4G9iblBic984wTGckbtlic8mGJCRIQ/640?wx_fmt=svg&from=appmsg)（靠近 y 轴那侧）
    
-   另一张面在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qvGJ1SlLHtqgKpKibQaDMBqWD39rxibRasKqDsAQnialib0sWoV6oibueWQK0XMINLGsyGx3g2Lfkb9oBW7Fq4ytljIPcqJWdUPibgtbJ5ofNHP4g/640?wx_fmt=svg&from=appmsg)（右侧那面）
    

顶点坐标（按图上的标注）可以整理成：

### 原始（图1）

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4tTIGJps5OtVdicDEFYTDUiaibIwWic3iczb0fFwAstTvp1iczlGKowgeh7CXwLqb1fYA685WmAc8iaf0RrruRz4AsNiaXibufsHUdQ6VosxaWGdF5H0Q/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ibLIuYVJkVVygDro7Eiaxa29TvTM45Ps4eZ0bt0IoR85ebznHaUVrouUuEPMegTGj7lq5tekdhy4icPZB0NrG6bt1u6pcNOOh0iaOw1N7NpSX0g/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6wE1vvAKZRkj2iaFibChBcVOib5UX6I8FaZIYdibEQHiaRXRNokzvqBozJx9zSTkXUUpAzlbETuc8Z1gFd31Rk71sn7eTLb3iaRmUQzPEtaYe6uQeA/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM73fhc04sUsn0CG8lCOj5tP9Ffzj275kxDNibb2dWPQyiaR1TQPHERsibJIicE9yourkPq0dZ3fnfdRG2pK9nqmlEgGP2Ewt9FrY8jV6CdAwy7nibQ/640?wx_fmt=svg&from=appmsg)
    
    （图里用 O 标原点附近那点）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ex43d9b0GibItib1LGz491NsFWZib1LcPcDwgr0KE62tMPzap0htZcsYCM2ic4ZIdalic2ydbYzbvrRZC1QSVhM5ibJldSG05QhkBVhJptkibG0fyw/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iblhNyfsNwBWh1s0fGb7oCPOibZu7bI284sGVEKD5xdu1mRVdS9UtbOyFZKKRTzIb86UIqeZWod1TIlV8AgGAZWwh4wgpDBzdzoicf6HmP6uKg/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6zjVXlygFetwhkqpN33I2uh5qvczsj8U1Kh8EAReBvbtL26ia7PUgeTFJ4rjSL6rgibZk5fHzgNzyJ8rC5GoEGtnHjZzicl22YdrVccPwTrL8YA/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7htzoNmMnVapo6iaGEibEr0IIXg6yOXoRJd4Vib5DZyIbL2BezfqDRBsgGeITxpYZicjnGvYveb9Sjib99eexEfq12ibk0GUen91xrBwBcrXbgKXHw/640?wx_fmt=svg&from=appmsg)

###   

### 镜像后（关于 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM62BMkibDIKfUGG9I3GrAG8wO6HcorKMnmYVTHibZK5GU2ib0a2u0Ft6m1E0IJic4OiawggicaRwjXG9ckKxJ3pThsXPpsvRUlfzia84VpUh0ib7QLG0w/640?wx_fmt=svg&from=appmsg) 平面）

对每个点做 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5RibxHMNOCra1k9YdgwuzK2h0dMhak0jibuTWEkD8icARfFS9bTMricvQAq3nq59RqOZjPaOvntOxvibSo4b6I03t3BX3aRkXgaqQVSX7dEUiafR7Q/640?wx_fmt=svg&from=appmsg)：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5wvbVCY4iaHyeYAnCuyZy7gpFxnAQhYVPB7JW0MUBHiajrv4iaha5PZJveTC3BD11qM832xrfbda4iaMXVnntMEu0YwssMbujDeIZiajFFAAQnRNw/640?wx_fmt=svg&from=appmsg)
    
    （不动）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Pzgx5Znm207ia3hAzQkiahE1YiakhicfxKae44EmXWyfiaJZP04h3icXIcPEdKWJ2f1TfSicl0DRwwQfqZ0V6VeohfhLicjd7gC1ekZqRR63ibKc25cg/640?wx_fmt=svg&from=appmsg)
    
    （不动）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM77qt1APdzKXh7HhZc6jqdicpa5VkgKeibN9D86AU6TP9m2NoEpZRFw0J0juEM3j22ibj2t9HkttJLgiaK25HJvR6C268aibMFxoNt8uPYxIFAX3dA/640?wx_fmt=svg&from=appmsg)
    
    （不动）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwghPkKWbf93WiawftS5V2BtGIO1BhCcnLNKonVNnDCxCibcoFEBUbHictXFiafSqTRVC5DUIiciaIoWZxLSG2Hj5zlq2ILnEQZccsMYw/640?wx_fmt=svg&from=appmsg)
    
    （不动）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7clbKDYmhrddSib8ZHVxPxJj2TbQXibIrdxvsyTZ4nlyhSGnZBLoerkMbib5BeUF2DfoH42awCRm97lOtSqQlVFDvNYua0ld0zomaHUwzQv7Fug/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6S266kVF4ia9WSM7fTh2Bjnia8orwevqApiccmbQHvvpgsv48Rx24BIbsgPjjl8HetKU36ibIzuiatNo7ETRONtzGjHaUBRrJvJ1bRFw/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Fdd4051PScEr8A3xnt8PgQGyHwbiatl2m8Am8X3OSfXX1NtaVny9XqxnUwPU85qTVic6gLKlYG4NXXKKic0lKSHwSg8q1orwMRKQ6FWhvt7NxA/640?wx_fmt=svg&from=appmsg)
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7xPFcRccicr2sx8uibt6NgAWfIuHsRPn14pYabibCaDQa3Zu0ncccNrFnBsN73OuoQjzlZPRwicDBdfPt2ZXtOLnA6yN4lnDVJkkY3ytGROxDVxA/640?wx_fmt=svg&from=appmsg)

图2正是这个效果：**原来在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ApdIhFTtcLB0HZtkgqeVBM1YxRCj0yAt9bxmUKHum9TUA7uu89ZKn3ahfwncsbxpQgKbOZxzKtKQc6MrMeDK3MHfRftf4CY06zcL9JngQnA/640?wx_fmt=svg&from=appmsg) 的那一整面，被翻到了 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM48sMtRc63pfdib9wb3I0FgbuUBGNPPSWriacDKSn8gJsuWyYAAGsIqcG8HD8T5vgNLib2ib7jbE5klic0H0KtHMwDDsiaiaA3xfmbq7riaXIfTWyMKVg/640?wx_fmt=svg&from=appmsg)** ；而 **在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76zynp09iageyicSZhjb4UiaZsYJQxSKVdjenoncwjUfpwL9Sk3ZESH8gllbWCzuJYzTqg5SKa2ojm4TcjSxbBKUO3odzDrP0TVkHszr7wuQK7w/640?wx_fmt=svg&from=appmsg) 的那一面** 因为就在镜面上，所以完全不动。

* * *

## 7) “哪些边/面发生了什么”——用一个面举例

举一个最直观的面：右侧那面（原来 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59Y0c1DY3KbANiaq9jlyY7TA219qYXzXtKVtPxYGoPnU0Ze7hXaCNicuk3Lbae6z8HqEafCY5KAhicxIqCaZicibBD8xhox5AmDcTroA18g7F6s0A/640?wx_fmt=svg&from=appmsg)）

-   原面顶点：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4qfYABKdicCdzJR4kqczffKPVhr8wulNBUooYIib8xSJxibiciaeQqQnxrkX6R8nT8PDZ1jDcRXRico2E3VqJfM0fv4O1sUJIEOqJpo0CicabbbPOKw/640?wx_fmt=svg&from=appmsg), ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4TmTcibK7r4ooGOV2hCN6sywWrZTm2uic1tkXcBafWy0prd7Yg1lkqX2fyOf24elhvM4SyvfFlrSGw9MzGacYk6XUZUalL6cvq7fqTn1D5Ydxg/640?wx_fmt=svg&from=appmsg), ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7clbKDYmhrdQsOtAAFibM5Res2MLU6PZtVkaHNLoANs1K4w2THpiaib9VNoNSOGVdefUTGAf7fBicuQCiaA2CBUWhkZZJ4yILvnYNvJ5FvpfPEldQ/640?wx_fmt=svg&from=appmsg), ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mfF2dEW7G1K7ic6E0HV0a1pP8tkicMyrEkUesVxqYnPicghoHic34PnXQdn9uu5DpEpOVficicWro975RYBAL5RZ6Z835qiarZKTHGvPo6TnPR1zqw/640?wx_fmt=svg&from=appmsg)
    
-   镜像后：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6QqL4jGFNMAH3CoeCYj5XQicTXZibbdISzRJQhtDpbB2ereCTb5dxIkZgibnOSB12OS5mibdEgBplVEmesGMygc1vY6VOLpVy80gjCzUHS5jrDjw/640?wx_fmt=svg&from=appmsg), ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6pHamCPY4Rvk484T1rfeZEMPrSyHzgFGeicED703CgomQz8pdsFu7KNzkj3xGianvkG3xnN5GFibic3OOAkUxIBIqJlXF3UtWGfEcVqsyLnia40NA/640?wx_fmt=svg&from=appmsg), ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6zjVXlygFet2aXC0r174hL1Qia6KdEBvPeFWDJVmfMYFY42PMD24Fian3q4en16g9cakhPwJkJE905me7tE8A4lyyg4oS7bIvTBvvOFhskwY5A/640?wx_fmt=svg&from=appmsg), ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57nAgJzRzdv2ps5NwxOSq1icy8dqvKyLFVYnloMRTboMdR0pOtQyh0dwpjibXKbj8EIpIhIjUr3gGv6fGxegCNtE9yOsF7OAluibw7OXNQDibwhA/640?wx_fmt=svg&from=appmsg)
    

可以看到它整体平移到了左边（其实不是“平移”，是绕镜面翻过去），形状大小完全没变，只是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6zjVXlygFetibxFSmPtU1U9NwhazwjCWMzicEI6zkJiaINibpctDWn0JTkCe9E7Wl518tp3Ifppqb6jBKQdjmibMibTI7FOAo9bAmfgiaeQf4thHwIQ/640?wx_fmt=svg&from=appmsg) 变负。

* * *

## 8) 关键点：镜像会把“朝向”翻过来（det = -1）

镜像矩阵（3×3）：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM55V7C7hCRTTgvbk5PLScPM4GTmt37ughFaAr9GsLKRsgGK3UnibUmwoL1KiaibrLZ5OVq3JqrTbop6Fp3IPOSdovdib31LrOicZKdo22x3bGYFsGA/640?wx_fmt=svg&from=appmsg)

它的行列式：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6x9iaXQMpUXWpGvcfmlNQxoqv4Tqwl1XQ7R3ueUL6tSlK54pk8KiblyQcgD6dmhoNsI4XSgs5YovZr1EVNINKXvxiaFtib3HTBmtfXs8miatArZLw/640?wx_fmt=svg&from=appmsg)

这意味着：

-   它会把**右手坐标系**翻成**左手坐标系**
    
-   在图形学里最直接的后果：  
    **三角形顶点绕序（CW/CCW）会反过来**  
    **[法线](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247493909&idx=1&sn=40f984626deab78f6a8cdef12d031c8e&scene=21#wechat_redirect)方向也会翻转**
    

* * *

## 9) 渲染里最常见的坑：背面剔除突然“全反了”

假设你原来一个三角形按逆时针（CCW）定义为正面。镜像后会发生：

-   原来 CCW 的三角形变成 CW
    
-   如果你还用同样的剔除规则（比如剔除背面），你会发现模型像“消失了一半”或“正反面颠倒”。
    

### 解决办法（任选其一）

1.  **镜像后把每个三角形的两个顶点交换一下**
    
    （相当于把绕序翻回来）
    
2.  或者在渲染状态里把 front-face 从 CCW 改成 CW（看你用的 API）
    

* * *

## 10) 法线怎么变？一句话：法线也要翻 x

如果你的法线是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoE6vpicnibfy7ubPRtc7C1hjF9Dx8cibhYF4nFSzqbAGPicvNVAUf1zjfqS3TUWWZjzscUBic4u0V9ubC3LXjedDOsVU6C6KOYYib5Kg/640?wx_fmt=svg&from=appmsg)，在这种“轴向镜像”下，直观上也是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4icrM9uoutNSQ7Q5GHhlAkkDAk1jTvLdeBY5X4w9hW7QUHq4OcD4t9jtb50XW1LrauwyHkSz6UAcC9ev0dVotHiaHIO3g8O1vQJOVic4SyQFZlQ/640?wx_fmt=svg&from=appmsg)

（更严格的做法是用“逆转置矩阵”处理法线；但对这种纯对角镜像矩阵来说，结果就是把 x 分量取反。）

下面这段代码会定义一个立方体的顶点，应用镜像变换矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xQGuEfqhe1erxsmGMuGYckjCTYRNhicGOapqVC2s6osF6bzLVXfLPZjOTgWiceAZXX3NR8fTQeaQbrJDtXN9pqKqrnUsb0T2UtN6Cnulic7YMQ/640?wx_fmt=svg&from=appmsg)，并生成一个展示变换过程的 GIF。

### Python 代码实现

```
import numpy as np
```

![](https://mmbiz.qpic.cn/sz_mmbiz_gif/sVzeakRoocvErGO84KjXZ0QrN3Yv5cVxMFCFT5vqC2t8UUEdgarjk5mibDz2icJMWlDm6R9MBBJGWL8BLmEEQr3tFTic9ib5QZER5icn2laVNbxA/640?wx_fmt=gif&from=appmsg)