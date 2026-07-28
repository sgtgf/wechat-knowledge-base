# 44页PDF，电机知识串一遍，从原理到上电不冒烟

原创 王工 硬件笔记本 2026-07-20 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/ZHy3wFgdzQ-D9vz9Ain42w](https://mp.weixin.qq.com/s/ZHy3wFgdzQ-D9vz9Ain42w)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

分享一篇咱们知识星球里的一份硬件基础内容。

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niac3eKg6IhBN3GDXMWU0kduKNuLUticO0esHvX9Khyib3JpbnhCFL6xOh2ryY4WnicqHI8WI6wDFfFp9UoFt1kd7O2mOqw4X9lgBII/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadypmDubMS59988iaF3yVbPlnvpcwicL9fhHWCn8vltKOiafu6aDArO1IdH3qgSxo410rTYdMpZAUaVfq1gVhwibGaHyfAagPWk58k/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafgcm3JAFQmOFNsBhUR53ZKiciaKZ926UHy3ZiaZiaMfVozLPUQ1QelM1a6QYukgVpe127dSaH7Fw5JCsmf1P7OnZO9M5BXSs6Eoa0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaf4mXbJmnNFibZ9brNkS3FlXuZJriaH0Ug88KeC3RibIPics58W3JBtvNnaRYoUaWXd52gw47S2ficyxJJ95YXWuSxkFunmGa9z1FnI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeP7mF6kzlckJn3icLAM3duxdjiaB1eRaZysO2icO4WEBzXCsOMkyBicYicwcW5Wia7oibXSrhwkvUu8JdpMoo3NKqRNffeA2KYPqhtZ4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeRyNXgNVWGGCO2ib2z4YicBGYBdRxuSRe7icVYQueR3d10I2VLnxy0ib9KkA8XH075dv8cRKjZJhBLOhQ8rgdtrIfenTzibg7o6jzs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeicZGvkqBX2ibnfPnu3NkiblnH0D30eh0PNfoicbKicicuXVrcibMxAYxoUSIFGibjL1jzYdCYZHeUvL0m68Y9vibT0eIpPvianrCqpo3k0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafrZhGLiaFdN12Myug1AAS3RwcHpAkjrGib208RLstRYMqxq19cXwrrlzYbovO6qF1bIXMVnG0a4PWXOPCFia7EEaPew1R1xOe6rA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadlUXtfsGMlBFYvBPrXjLV2N6CnD6QdFKgdzYxOpbXcg2vW6VETfQ1icgqIHZExLq2dgmdKprn5nzs0Kam0ia0xZ5WzWmUAuoddE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niael7oL44mLZnFkLfML67nP02SyxZ15l2uQVAWiamn4O6UWzILYGVFnK7cAqjH37MS0oSMxCmvr9K41W49Vl2fgpPKxmibmCMTL6s/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafHYUU07alDxNhiacE7svqZRib9Qia7bW1chmacNkeoHWRERyichMuOQiaeWxv3NhDCyTaGnvqvXU1ficib9icqXiaEoAKKKnu0EnxWjVkg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeBIUcicOopicFAUM4eKB8f2aWeIDxBAKAhW8Sn04dSpW0XYNk8jHd55mwdypAWiaibYwOr3STlWGbLXtO9ZSFZiaWmKBRVpzicI7XYY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaev0SRuocTyCcZR8zPlVDHDIOzULAUrwNEiaH1FnuIoTuuGrc72dbExraI1Al5iaRiamv5G90lTkia3JQRwIc9V7cIM9sRgcbxIKOU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacahbUeDF7IqxoPfaeqaSDYXhy6Yke2Klbt1ibWn6n8UnrZibld9QISwPS7IKPeVyzRCBbPiafFaJuRJsPYEcSictQFTVfiaohBxcOw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaf8q3gduEGqRAU9poAksplXK3Wlyy5InmhjA5L7kFtOyTKvpmHXTm5jSO6OicrE2HTFzHOPa5PYbZ4mfIPIkk8lhSnPVu2U0noI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niae9bMo3DScgbByDicZPVXhooLfpO3gyCxUtqibV0ImNYK9Y3ViblRFpHOC0nm3FsFNcicV18BwYPMwyyrIhia6ADluO6fc7RtJKzoxY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niac5rYzxteJMujmTVurLk6cIvEHglS3v9F02yX4PKTiaLib0YhWqgyJzicTz2AY586FfEjOPDS1he8q500YCUKqqngCx11PCibcTab8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacysu3mqcUhOHHKsfXn1N5k56cUUgJoiaKicQZVVugX2KTgG7MLsSyjvxaRNUd3VqLZOdReYbXyyMelM6ljCOeofDtuSgxF3OXrw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafft09lM1MCsI6HVaiaic0tdgUQEia7yBvMXHESXYTt8Uub8r3lRiaicN85AppGiamWLwibWOekMCzOibD1V57vat3s3oUIgsic6zxOWf1s/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaffqw337auibjRVIOh36Gmn6lbVObEp2aVu2cPFVoQ9Rg2np7L1SOBFyDdzgP77T29bicvAH4AIgyvbeZtRiaNvIz6MLtx6YFUG8M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafEPeXB8ydmRQaEiczbFUic1REl2n2qXquynnxBWutrVBxz0mMibicOibQibicWKR27lqgMpFIMNHQrHvWhgPeia8wQUDgW275WDMuVAuE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaefDlBlUQ9RsEhQ5QcicLqXDFaEXQ6ic5bS8AXvqhEZ2usKvzk4ua6nkVsZurR7o5sagWqfdtpFF1YbhTPic0O7tj8VdNBkSt0Ps0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafQRdIpTicicibuNciaA8VNbeCDMyjw05eUa9rKjAn5pdnO8aTJQDiaRYF7kGtWGpPECrD3cZwib0kibMPfpM3uiarBZHaHqd61wzCSofQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadRdT6k4Kj4uoJLZHJk4B4S9W5VcJb5iay1px87uFLoMKhh47JYGkWdib1eSanWmfkqzH46bURKvYqd96Dy5NibjibcHX1163TQQhw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadvcZANoAAyXFnpu6sH5pYYQYib94vO8RXkqmVGnEZSl8HxsuTsdTVN1Vqibqjl9QJIfyrVjmRWiaexREaVIKKgd30AeZOfePHUF0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadK8mzYxpWcnHLGyuJZV7rnaY9aWyy2X7AIfY83dHdD8jx0SAJNyNOBZQHgwZrncl8WWe6czI2NNKdnFCOMTJnKaIPicK3sRXQA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafAeaFUBkVrvO2Kn4xd3LibMbFiaciafTY9hE6vqXwwYUmUwxW4zbu2ofN61Wb6YPdIibXgA1bwWgDOa61SlhAgSOKSyGScBaPiaOGM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaclI90k9CE1X4B1wbo828S166eicWS7Dk9eSzZDRLiaiaFPSTRgSFVicYgX6jeUF6U73f1wIlZFFDKxb3jxUA8x3Taew4tfRvRHXNY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafyeeGgcBqOPF0pxQO9nfmKSqY3T7KbDYwO2ppGO91icGJnib3jeWxjo7JKf1PG46UfiariaxiaGDDxgKicg6ZekUK1hCH4tbhtobMug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeyYQAw1Q7I4BpiapoyoGlrVZ26ntMaE7pmKtwiaFmfT9MDX8J2K1K9NibDEueJxfLlXT9pZMfRChf70VvCibBaUIIpZ7khPTOEVk4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadia0CKoqnVPbvcURrVu6V14wo7j7UpqBaW5o4BJyfPVQ16FpHsphRNce4u1tBHDOctH2JiaKPMRA1eVohGyHibrcp2w3QtX1WPOo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeTHMUvuZxaLDexRQgC7kgY2fMhRSVTboNCg5y4FCoM6fkUePbWFD1vYxicWxAl0mrpIp7G7SRforbiaVSNCPJiaCxgtwgFFtuljE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaccawUVdrIxXenXjhFujQDbnZSFFt1hrYqAuONAgpocFxNfic5LVibia4GxIyx3gtHao8Kc1FpGiaqibZ62y5wW80pc1OAdUlKLlibLc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaevVGamIzzh8IEhpkEUMpECZElUfpPooYHSxW2qQDibIYcm9DiahqgvQNYOCQD6qs5145U8xRTKtZbEhetbEk3NmTqV0ibD5XE1IE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niac7a088yDFPHVID99zbqaCMWdxwU50OUoOQRTJ5JGso8T5Qvlr9QicZLXRZ9eDzNPvFwvGm7gf4f0uWE3I8icU92jehjjgBMibyNU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadqEMyoVmJdQHkOjVMiaibyH4983sJUPFQS3PibuSkNGjrej5aicO04S4gyUGFBLuD6075Q0dGuLS4IKcD0BlNXZ1VDQnicica1hC1Ik/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacZA1WPckcqic3l1uoL6AParhAyd8YibqcUkteACzNURYxktmaqYpialuHnQuEx4eehQOBDUyI9iaABf6LNibHX2De4Y08cYOETfOVI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafiblhsozDy2JOne4SJ1o2w708PQy6IXYpOhZzdcQ7xjwHMTtfuAOT0p7y07DaDjF45DqibuLfJh6u38AlnxJEO5Amlj89EmrhoI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaec2pfeM65py23nibERpGicVlcicaTfOyrwuo75NPk9iclCkUHVDgrET6wGNyLvEpH9EMBY3UsULGGYVibG5iaDjg0NPP0O8gWbeuBK0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacBr0PYqia6uawYeA662ibjcghTStFiaicN2EAc5lz2QEHt3HtjBiciccgY6M2cRsLKh1NPn9ib8BsPiafwcfka6GUsjibYOjMkY5sdrmuM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadmPJx6JSLaPgQoFSib6wXYxvoicDKp4Vkia6BELEUQQUa37xNfaDgTPcsH6E0DO6uuTns97xXOVpyrZyjDuTuMk8ib5bCNfiaPK7Ro/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacWcEGI2GHeJ3Y6lqdHN99OGce9ppytODD9StrSTtrxxAy0QFeotEKmCS0CoTyibibiaMO9FSYNENTgjtCy1KXoaryal97ia0xBj3s/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafvFbAkeXfO7gBo7KicEafxIeclefaopq4OiaUsa3z7cicU1tZ1hFJicF8mAxkDY2nB0X2DGMNAicyKrqcFzPN1lXSAvia8BrqdFneVw/640?wx_fmt=png&from=appmsg)

说明：

1、文档为V1.0版本，如果后续有更新，将会在此版本基础上进行优化升级；

2、加入硬学社“知识星球”，就可以下载这份PDF源文件；

3、知识星球至少每两周更新一版**硬件基础知识****高清PDF文档；**

4、星球内**硬件行业小伙伴可以一起交流，资源共享；**

5、不定期行业问题解答。