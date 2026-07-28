# PFC电感计算


> 原文地址: [https://mp.weixin.qq.com/s/59aTicR0Xm46V7QVOKqWKQ](https://mp.weixin.qq.com/s/59aTicR0Xm46V7QVOKqWKQ)

作者：周洁敏（南京航空航天大学）

PFC电感是功率因数校正（Power Factor Correction）电路中的核心储能元件，用于强制输入电流波形跟踪电压波形，提升功率因数并减少电网谐波污染。‌‌

核心定义与作用

‌本质‌：PFC 电路中的关键电感器，分为‌无源 PFC 电感‌（工频大电感）和‌有源 PFC 升压电感‌（高频储能电感）两类 。

‌主要功能‌：利用电感“电流不能突变”的特性，平滑并整形输入电流，使其接近正弦波且与电压同相位，将功率因数从 0.7 左右提升至 0.99 以上 。

‌应用场景‌：广泛存在于开关电源（如电脑电源、充电器、LED 驱动、服务器电源）的整流桥之后、DC-DC 变换之前 。‌‌

两种主要类型对比

‌无源 PFC 电感‌

‌结构‌：由硅钢片叠压绕制的大型工频电感，体积大、重量重 。

‌原理‌：利用感抗补偿相位差，被动改善功率因数。

‌性能‌：功率因数仅约 0.7~0.8，无法消除高次谐波，不支持宽电压输入 。

‌适用‌：低功率（通常<300W）或对成本极度敏感的低端设备 。‌‌

‌有源 PFC 升压电感‌

结构‌：采用磁粉芯或铁氧体绕制的高频电感，体积小巧，配合MOSFET和控制IC工作 。

‌原理‌：在 Boost 等拓扑中作为储能元件，通过高频开关控制强制电流跟踪电压 。

‌性能‌：功率因数可达 0.98~0.999，支持 90V-264V 宽电压输入，显著减少电网干扰 。

‌适用‌：中高端电源、大功率设备及符合严格电磁兼容标准（如IEC61000-3-2）的产品 。‌‌

关键特性要求

有源 PFC 电感需同时满足‌大直流偏置下不饱和‌（承受基波电流）和‌高频低损耗‌（承受开关纹波）的双重严苛要求，常选用铁硅铝等磁粉芯材料 。其电感量设计需根据工作模式（连续 CCM、临界 CrM 或断续 DCM）、输入电压范围及输出功率精确计算，以防止磁饱和导致电路失效 。‌‌

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOVY0y44GrLqPT5bOrl6DNKiagu7XfT6briagUmNEPjKEPYpIH85G7iaRricpUtv4WJR1K5VvbfCuhKxY76cDfpeQgtShBkHhjUiaA20/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=0)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOVN3NSC0mqeffRmTvkTqQ9gy87LGNf5zktib7kPSRf4ngwsq98UWqEib4bZdhMUckxV6tOndB7U9VIdgWklqKYgibD4gKpQic1bP1k/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=1)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXVNP6SW6yXdTicicuDaA218icXflhiarPDJKiaIx4icjJXAahNHaEvwSnPSVh53AJxnqPzOBErA7SLoI5N7CdAOAIO8qq3f4FcNY6ibU/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=2)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOWibibZ2icToicXibb5PdvCdDDmLMP7W27xeo4DCX9qOiaBaDDI17iaOjLO1Apb841WprQ5uowa9cfXv3QZtV185wl19VqOSqJgWLKpgs/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=3)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXO0cJc3Bb6Luh4iakX8jQ1JezdMrC21Ckq2T24ibLeMnma4mJKXGr8Iicc9fOt9Vibsafm2n1sofoZk7dx8DNABcGwT6HYV3FWBbk/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=4)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOVlKia9HxJicTYwnZrupiaZtKp2NSREP6HquBX3KDJVh0uiadGSZcRZtuyqbhiaq0K95Y1Q9bMkicNibY3w9kgmrwPJpRVS5IfvIpmh6g/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=5)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXF6d8o28k9AVkYmRvWmNtqpcg6J42GicBvsbQqef2sf6KepojZkM0ib7fcXo5fmj0yvDrtcZT0dHycjYlgxibQibxLgLib26u1yVzw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=6)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOUgtoy7tJ70WuXQIFjQZOQv8Y3WuW16iclnCG1SsTBzGum8LZO6SN5a2kMLrYeiaYwjiatcU51zfK9A6yM4V1yszfWptpAnyPEKqA/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=7)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXU5yBku8EjX9NkJFx5icmd70IEWiaOKJ5micBibN6xV8nLV4vTqOYQuyRyWHAZGbgIbsJH8kHSo22Z66EdMxQkXAvWOXLXwaNRSLk/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=8)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOUvwdia1C0FiatzYQXgAUDJ4jPMpFeJuEX2cLk3kxUtQJgFNo4nvpj6aJFRpFffmWl3q80uPT7H0rPUyTEhaJc7Oxkw9nn7vcH6A/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=9)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOUG1S04XSiaQGZ0qvfIZZNNX30umVZB5uNW7xoTZIwZHs4Yjpu6jIkkmpS8pqQBRiaN2ic9VgwicFjho6AdyF12Rm53UTXke3oRs78/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=10)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXB72kzjzrEDwYlYF2uSRKfMkHdYCVqnDiajdvWX7PTtuDys0TfVpoId6zpjRaL3mQo98JCrgZC53wNcI0kSNhIw8ar9qibgudmU/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=11)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOVf7voZEw6wjpHZu29icIsniatic3ian2Jgk86icFXBevnge2arkUly3khx1JpyJhptCrDqgKiaaKGhLUIBDjqDNLK7dDKlxRAZOtBN4/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=12)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOVaAPV90tvUSGjlpdXWbABiaIqfyiaGohX7aqn6TgaSLG9dYvKAf1CRqXS6c33n9SUSIZQwccoROYgIVgzAAiaUwhGq7GhNSTBXVg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=13)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOWCiaQtYFowWlyRBsZ2l78rTMX6bib7JrwxAeN7DrvFkmAHu6pbqLNeKpcqyGG7nAfgBBIToickssIOXIhXOOFovh7KibD3Jr2nEx0/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=14)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXibXfdEk0UwESYdgIBMaAuCRs2RMM16tPR7H5TYWzETJZMWiaAuKibcWBtmgGHjzL5vGsjuzQnEM5gDf5cnRv4gxJ8UkwDodQKWI/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=15)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOVpjpVfwQSBu85N23xXewBOzKUUHQa1gykicyAOpCvcsibBSUhicibJZPWREficgcPwaSWMYjV0Rko1wdFmlGM0wfDJahSicibx7GCoFE/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=16)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXOPw88rMnsDI5D7whH0sLXvC1Jib4e96n5sPf1r7lynZSbaLy8m7WOrPMWElq08z1rC082JNUiaZZiaxBbq7olTsA7GAIYFtFJQ0/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=17)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOVKMZcichFJOYXOAjmnicaeAibgOzxiaCQRqlk78tMqCZw2MpFqH8M461l2dibVeCjm1GEPjDicHE8FoWliafqF7laB1e70coFh2icbUTQ/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=18)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXBNmlD7pVDB2Eonjk6afpP8lhxj7ZrhrlrgsAia1emJxa1vPBUotyogthVyQsehuQCUmFtXicBAXWzqypyKtwpB0loQv1xL8ZxI/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=19)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXhHxepVI30ywjQsichibVSaTXq6uPD5jRmribNIBpfDuGVAUn6ElticTW4sanKWrlH61tSpLl73QIFUAO7QibMvE1Mvke4EIIUWRas/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=20)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOXsLh6DMKuoCfpDF7Cm6MeKqHVNGd2wlTlbLdIDrSCZClCTy9u2bX5njzWKMW2zjoZXTNlibuzpLSLweic2UGfCnNZvZmicpXu4fo/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=21)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOV3Jbch3hyj6drjYYch0cGPdDaic6joMJOqByH8jSkn7s5uGHRt71LUhcoicyI5eSfDB5hymUDtwClHibdCnvxibOR5awYQkXXSr9E/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=22)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOULYvxPw0jrtvicKOUCTjeY7eFgNIa8ybGCxkMIraKLZoiaHjWTCMhhvHkaHK5EF5xTo0O50WQcrnCFnaGpNOQcmwXoRkHldozUc/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=23)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXe2WWMAS0eXLCbrJdIHdg65ibnViaUAzRIe7bmibiaPjAzNIPb3WMX9OEpCIibJRPyjf9bAdb57VmX0yXxJEuIbqBrImW99CNR6bJk/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=24)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOXc7UbS1CGuiaov8biciazyyaXuwYcia5AwSMCW8xRib11kAqjrZugBkkSLDXgaPRzcIUd5pp77zBpHrIibnPzJGaEk8TLCMDjlJa95M/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=25)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOWhSRPhgT6AV5Tlsns0qwGBqyviaaD4Ryme233ZbUZ7Q9SA3y8nribICmAV8sSRWcSibibsiaZGewo954pSP8cuNxlIaE2WcdjJ6ALc/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=26)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOWacyWQdAuAWwEn70xvc4XNuV6A6KpWEFb3lpf70tWqe0xjhtt8NA8lqgNhSKCBVAt7Yxsb4GlK89YDJVWakSZG5gqBiaW0iaI8o/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=27)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNV55qMnSKk7A02YXic132TpZbibISrV8ibMqT5ia05MELrMO2gC1lmHD4OFyAQXbuVPDA3pEpYicpXjSzCPZhcwdxicoleskHQCJ8dw/640?wx_fmt=png&from=appmsg)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXliaMn8lK6yoZ4MhUBoaQXeLuss81F4jo6WqXV0ArEYvKoH1mdstkRhrttvlkAYOOTWw2lWYYuoJBwxqMF3fJ4ichpoVrSatK2Y/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=29)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOVA0iaIrbW1V6nlRgh8ApvOGAzeZucTtkUoqzQO7OiaVuRb22bFPVOeUSfO8RUUDNdiapu3HribdYtUyicSGge5zAj4VcQL54RbzLPw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=30)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOVMOL9MMqs7nxMS06rgz7fzrL7aey4jWdfOQJlFcUKej9pqCuFtxiaAllXXCGSmzSIHEthSL5Njh1LAIxeVbnYvcstVrLZKPUqc/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=31)

![](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpPkJf5zycCzxMONFPK8XJxF2p8K6khp3Pu63IlkTrPWRI7v2zKZC83vmY6pcIQ0X6DEMx9d88HxfXK4xdCna5qYgGiaCHEUmUxA/640?wx_fmt=jpeg&from=appmsg)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOUbiawfb249ZoyM7aC5EgTl4hNOrmq6Z8a5AicjEAcoG5jkeFzLIJ3tVX7zN5jbAOCZX3iaI27GT3MrJKtbZ6XuYz7EUHic6pkBLoo/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOX7iaibpT6LAzwvjIRKF8Yf15ibtM6zhxbZgGiauAOX4LBdd0h4TPeHJwwuA8gu2UvYmKicbQXuvBYwYX00sRSWSaQSUmSpT6rgeHB4/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=34)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOXfCTibg5MGpulRAKdBKn8GM5VbzeOF6HnWHHKrMGIVjS1AOVoAV7D7ic71RKIGrMhxDOZ5vqQfYMaWzCvCe08RB2PicscmjASSmE/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=35)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOXcwjSVpptP4VyxJNiaZ5ASkAvOvIeuZDK8pBIzTBiclyDPgIY5TMlfFhL27ovSpONmMibpnicDPsCgoETsWclgyicuVl4YW0aML50E/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=36)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOU7yKlFCWb2aQibzG6ibASPmrqsXBlNFB7B1sBVqh62kwHG0R3YdtIDNmcalPVBQBjb0mviasicOORwzRPrLxUbuyicmPYGYhicR5ibAI/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=37)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOXiaNtnQgwhMHatDeVGoPBX56w46vWf92mLjdkX2gECDaqhSq6f33ZdzDv1J4ksZdJaDZKLmPZDDSSjY146iaNyWjCC1J4laejLI/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=38)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOXMibuaouDW8bycg1QFzNEWPzPnmg9QVDCgev5pia6YAaicGhWDyQjJrDOsEI6L0XicURkgjalGo5agJXw83QQORNRO1GJJicYibmwGA/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=39)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOUID2OnkZO5MpfvjospoicjyDiarib9HgXKlx1bdSEknXdjmicZn7T1zXPpl32LatE7pbupqP5CRIxQdL1abesbHb1yjRalZMzkOYA/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=40)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOU31StGKMlkgicSaqpQVCico7e6mjLwEzlK552JyZ5qXBKABdjvvT6KBFkHFc7ibMHSvBvUPTGicCicaAIicgbbNL7S97wkegMaFE7icA/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=41)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOXjeKrAhLhiaoeV7ZrGMc4GuDib2f2HWIlvGfibhNgCI8DYUO5FMiaOhExn1XLFqibWS1aK7LDMBBZoM8xsAzcZPKdHicxU1E8QfXicRw/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=42)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOW0XrRFOeIVz3yJVDAdb4mAegibCic4IwcKsdju7l8P9Jx8wKg8kfNjFeAictDdGsoiaoLZHx6ia5lgQNkA7tztSPBd977KwYnFtiaWo/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=43)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOUVQEINZSeaKunS4nmTtjqHDhvNEGCgEgfxfmYODAXzuUo8b58m59IvdBotjSNWo7VSo2rFkrsHUbLCuZV0RBTrjGMzQpZnWLc/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=44)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOUg6CTZNaEmO8icv92GXmeia2ZRon1fwkM8gu0J7X3x04fk2u93ANcqibiakfAZbJ1OsSCY9XvnkDCEhO0akaADrzibu2meQS4E6BqQ/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=45)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOVqQ9hWia6Vu03nwbOUVTp603BkA4UnxhlKgfOicr4n4II6rgadj0hdJ3g0iciaL8jFzYcztooRQ3miapbsGx4LpkxmUzTm6s8U4icLA/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=46)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOVJhcMNVdAvzcCNB9GmX0y2Ngke0yrutQWh8vChLHQPtdDx8gibRicSmlcKLfpOaheUd0t4MBD09ibDEtTxoMkfq7BK8fg7q0Rq0o/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=47)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOWBp5C0GmqVgd6EQ0TiaNJo7rQ1aGT9dW2RHnRLdXibTiaS0uRzcsibBLzykNYgI44UjZpHSI65LKabtsbsYWPjrl1q58Eb245HOcg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=48)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXtdp1gsbH0c9Z1zeOFtvCjIFmpmwmabwRc135qoRH9gkjRXEgMRDSjBxYahwUpvB0jia0nTq3NzVDYMoz386ImHaqhib4snGLCQ/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=49)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXwuU25KdJO5vFgaCaBEU07SpjF9kTdgicA82gxLTGGlcmay9d8tWousQ7zJKhBWsiczlM8K4RGmsUVwWqialPX2mXJ8wN8bk1qUE/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=50)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOV4SaoYgfqpjKia6397Z6bVsRPXwlnZuA1AMkyHQMtgbT95lrkbTYGZ69kw3UibAZb4iawcibpABCmj6K1icN4Vetdugaq2QRwvRsX4/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=51)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOXTScpiaIfVamA3KXpURWamzaAYYYz8UicJSZVc91qRXozibmflmiaB9ibQMKgKUVcE0CHrDPj9SsjOYMG9hQJ9ZMHUtcJcxq8geyao/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=52)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/9viaj5bIsfOXu0hPoiafeibfmEmy37ReKubQqmEBvicrriaiceyKDt03Th4TZibticebLvKvHXNibicBGueVejaI0m0a3gAN5ljUWcVbib3YpiaWFnLHMBo/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=53)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/9viaj5bIsfOUkRFXGJnbUBCxxrVsk6SfN21fVGNqVvVvpBGZjia0lVLOfFPQxjvg4eRyY8ABtXKXiagLG3DUoaN6y9POZ8BnLcxwu8ejjZ47hg/640?wx_fmt=jpeg&from=appmsg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=54)

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpOZNFkzDFctW2L8FHEVrHI8YxBNVicyI9Ey0jia5M4eyaTmFMUnMGDudkFz1k4cDf4yNjqW6iboVkR2XqIhqyJichDOibt35k39bUAo/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNv5tm7ll0CPYA5nJIdVpwiaWQeetBbQd7rZ0WZn8lcpHlw7GSiaws3RpWRRudibbicgbPSM11J4R3QJdyPC6BGuSzkMe4mKkY9O5Q/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOcS50kUDGSRuH3y7SoyxgA7wibtElaqr7dN2CZs0RuYUu3ibJ1J4soo8n7zqKLoVf3h9ic6Hdd67WjQLtoeuxpNK1iab6ACnT1fKM/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOjbibyVpTIP0FMmLQUcWjTqz9Hiaic2tudEjprTchlwYrV8RKWeAkCwFcj03qMfTHicUkALAiallJANJKVyD3ibVPjMeygNq1ruH6oA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)