# 固态变压器(SST)：关键设计挑战、适用性及未来构想

原创 Johann W. Kolar SiC碳化硅MOS管及功率模块的应用 2026-01-04 11:45 广东

> 原文地址: [https://mp.weixin.qq.com/s/88J-ttVMQv0yFl\_uGYBS3g](https://mp.weixin.qq.com/s/88J-ttVMQv0yFl_uGYBS3g)

文章来源：苏黎世联邦理工院 

作者：Johann W. Kolar, Jonas E. Huber

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrfAClbqcPEnv9jaVwlmiaJj0v7Fx1jYQeib0VdYRnicQHnTSs7oUXVysrw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrql9s06LalNHDUGjUeibSaorGaUWialKicK5zGQk1TCEx4KPPLH95Nia9tw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr94BnWfq0e3XT57hgKG66gCkxdYq1hCRbzkRuBk72nXL3yzMmqzYkDQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrRgTSJGfNpDNpmMNmcewh6JhdkQYNRwhIAZhdzw2jmN5OdQdaohgysA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrBHzISQ5BDuvym6GVKdZ03TXlrWsuNBknUkSONKlBKzGyMu6xQY1zOA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrjSBPrVsDibyia6h2rE4tibtiauNKppCTicL6fic9tZEXVG2GrQvgXibVLKjKw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrmaW4b33zvwxZs1yZjq5QDLMCkKLTMzhNF2XKsUUk13VuY8DfuC61QQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr7qndd9Vqp25nrN73sYFmdZuq2n36aCcV8olPWNMUS34JsMiaGxC82mA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrdn2TK1qvpm2Fz3q2icKzRQ9t6mxE5mRMTvDlvv7miaNsSfFYVchjianRQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrubfQlhibH5lBVtYRY78PQMY6lMEo87mUEibkbOzucrtzIyFBjOVPEnIw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrdianFBJ1K0ZV92icUVb2ibKf06hCiccibibicgLyicGkyL7SicYNXBwQclcvfGg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrGkmKh8NCHno0fRu5KcSPCulo7oibH6EFlibAmHBZz77FKuviaqvQIfJkQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrcorwAPKeiaA414LKcjIjmPyX57wI5jLuTFKzT5UbHbict9ic7UNbvKLKg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr8Sedribcj0Cn2GrKodU2ibT0Cu56olPoJ3ib6wSGyHE9DEEQeV5IwZq9w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrlrfMexcKFGcjMiaianOnFMHkcdGO8U4SoOmdLDDFdAOkibmicibliamLmUXw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrwiahSccLF4vpnicEicynrialnP6unGtZtFtmNTQItmFKNLsbgibESSLM05A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrKqEY88ar2W3zYHcmibjCuDmrYfKZ0tSicQfGQvkjTp0q09cCVA0dgzug/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrhUCaTWen1KPCL8a5qMicqGZBMILbKPgwEIzc1L3icPqjPVCeq55jYupw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrQe1RMo1CibOYStgo6kiak4b1zr3M44gouHEWUPZax7UteickcYJic8ctAg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrBZ1SnpibZ8WFqvHSGs4LvO9y9icBLah0UB5zpVyXo8n1QcP7CpeoALVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrlKGbRxSibqr1QQEHic2Eq8MXDqyshcicGb7lI4p4ckvV5G3f2KM5CDlaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrGk2gVFZvPwNr7DHMkbrxyjdoC4gKH3icp8NkLaxLIkgic1rkOuMmTibnQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrYXKSMblTdadgI2Puiaf6kvEr2ooZcZIMq2DL4GgBfBwrC78uBJicf9yQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrpg8cKhyThVuZwzxUiabdrvbCrAlskLUCV2Pv08xkiaMjb37ia9qn1CxYw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr2Tib1uedgPLhfXGib3O2uc3cYZsgZk0ZcmtuFsr6vFwQrmAfxAStW77A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr2q8JtjU6TvKY5IAJVf0PRtnaIw7IcQXkSn2Buia6iaiaVenfsbqlwT8VQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrvlDaheAuiaTdIXg5iaLNaQ1zxudyAExaib3h7jMvPd1wbvlTuHHSiaTIlA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGryicOjpkeJj1etsnyjDp1whD7rxXoJTusGjay6ofKI9FicEg6kbD9XVDg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrwNp6aX6dB6IFQBcgtTiad4TTSgDwCRrmvibPARmbhhJp3umtLfHxFDuw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrdBPYezd2YC7l7NMm8LjRWhEhmgzlmxnoyjwRZnVE1jxgXN63wYseng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrKePHfibnedQAbLbQ7T1yNxQRQXZ12NRzEWvd81icN5uFFQ21nL457AQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrF0q3csZYUgDPLuUblT8KnNs616a16mb6OKEicgOaJrfRI6jhDGZhSHA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrTOjYRTswp1ia4uth7U0hQMCb3t2j6G5H2FeVOX8u0nfmJPeqYx4nCjA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGraRST7a7sa2tT4081sx32DTPcvZyKlyrmsYFsZicpX5XK9TFbpDA9sXw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrhGsEV1UTmnxdKyYqv6Uo0oIxOHRzhpAuTnto66F56iaByO41Uv2lEqQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrLnVDqBQ4aZwfZxVzzGuUscMHk55nK5IBhzx1o88fIjGMdKo0ssHEaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGraNnjA2f05kBYAyicV3WvMjIZpZ92aYvicn6399gzIcdIuZdOdOtg2Tmw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrUlVRyVAv9mVH6HZqVfAQ87tWUCiaO4PloclJjamjyYjgqRqFdNdJzbA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrIoM1DviceCk7XQbYkGAtIvln5xFY98DWlibRb2wOOWqY6Xh0jQK2devg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGribBSJUYQeZVqdlFmZ9FiclFDhwMzKkibpDoiaKicv0p0RicO5gpRZZO0H0ow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrAR8tfwNqzk6hcaNWlafupCbvFsNCH6aZ2z9IZ32w9iaca2TdCFsMuLg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr0wS4arlfH1JrdACEYel9947HiaqksGcYP3deiaMQEtd1RAAiaqDL9oib6w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrMULYPagticapHicXGf4cV6ATicytiaceEG9KOdduWflUSVPDOh07s4SIEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr5CCPcIsDFaLNLojuW7rOujBRibRQLkySAZGDFSNS0GAeC3nF679zicvA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr3yyNWSsSm2P2XXicB2e6GPvZUpUwlYglKNxEDHOEZHkAckcrt8wZDog/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrvOgcNMQPQNOLEDV8d7jKTO37IibJd9IggUibtCXI8icXuwhVSYO0WZFjw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrLmZ5Dk5gPwVZtibQUDSn81eia1k8czaUGFNayUia4CM72lhtzDagNIkGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrAKNRKrs4v8hU3811IUy8gYmTxcoJDy69HARAfPQl59qtWRkUKJiakUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGricGSiafKiay44yAEqciaHOK05R2s5K0MMHcXqNSicB5dM9CfkfPZ4mY3jzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGricJT4h7uXtibwa1hC4N0bPT4fL6Oia8ibLnXJkJdffh4Aq6PFqxIBibErrw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrIINvRlBwic2Kpduhr7yiblQZMmBPE1txnkxkwtZTqy8bUFrvKIISscAA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrVbDiaVqhXUGw5W7hJrYc7cW7vLpRcLsAEZ1Hw9vgKFHlX44Id608Y1A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrMia6mAx1ia6ug3sH4vgn7Fe7T4txKvFicQ93MgFSD3PdrLgPV09ggeYWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr6s5KL1btsibF8Iiahvs1UUia2sMwLENicgtoFaibd1OBibfChaxxOoq2JNRQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrBVD1zDicbSxeCqLodomOzAz2JMHnxb3LoY6ICjQAww4SpjVe76qV41Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrcWldEEibrEIl6d1618Iz5OfpaeC6vdoUw0poERGuLaTg1oPfXSNc0eA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrFU0dZ89ZQMWKLSfoxf5S87HlfF8f2TFfV87cEfw8qIpP7KguhNib0dQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrggKia8VbUcbWxLh0GRy1T7Qgnn8n73MJSWZicvDssW7sBqQD1aiacrCrg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrecVALciaEx4ibmBiaiaicxDicqunJsGBufnureq9icwbh6zJFWRkGIXfOgiauA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGria7erhLRHh3hDGKx95iaTcyX3bD5BJB37ZyIvk6EYccb37yzPiclHfO6w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrJ8iajZDEXhhQjYNicg3l8RHkiaichPMvIAdfxHzNF4wGA8g8BiazvdUicaWg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrQfVC9yamwUvoicWIzqz0SNcQMJoIsCB1UocqI3t0mImOD3iax2Oee9PA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrEia2pWWd3rGMxoTfjS54PGHQfxxWLrvZNeVRWQnouGlW8eauCnVmCFw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr21ic2icJeibAZ8toGicrOzrsjU23X9t0VymJjnJ6yXBNpeAOWA2YqsF1dA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrGSUnGmpUH3gLpSUCButEWZqWVOaNicA3Q9GcjE77ia3Nia0MeFf8uZCqw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrn2XsclpvS5fialc9e4mG8Qomvkthfje3bXaV0omEGvPE0vONEwLoOww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGraaC9PutAv4eVjbYamvV9cLv5CM0XRhktJ1mcw4vRMVrSdwFvJNIMWA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrF51y9WgR29hfTocezQhUicezTOQX8TvMYyO2cRhQpMFDN0czaicUn5Ag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrMco7exo8OJbwfHxBSQusLQCGlSfklNqjS2RAicNJbd4fRl7JEamGDSg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrfqYjfHvCBn2p0S9Maa9SdSD47qTFPA0VkZeGXns3x6QKI22WuiaaBFw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrSY4Z8uRMSnfrfia4MX24E8H7DhfeqyTP9njYx9a15FlZibLo5ATVsqCw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrtQPkqzO3iaT43JozBiaQn2J2qaDpHOYm339pDXptibONTsm7o4PBzXibbg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrv55aC9MvQWxyibQ4axAyOxLyaBZSiacJyeF9o96Louwiaef0mJQIaNVPg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrTFIAhiaVKicRaJ7lpofAgtaXibjPNz7JNXCliaDrsN1W5hSlqINmYBh2Fw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrkvYLzsJwdowHVs99uPJaOiahzGvxhjMXIehFTMcUh7Kcx8yvImvLvrw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrEiclUzMRFO1IBPEXEpNTs7RJj4g1iaUxv9NJpSibtc25pbxWJaKdnJnJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrHCM0bU2WavD48ibocwtHBvS8BfNQicibvdSdY8TgGeylNicyziaMaHoOcqQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrISTYyxVNxwuWY1yPW12gzLjbECzdEl0S8bduQ5S7StMFZ33tia0nDVQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrHzzuGWr0bP4bR7EicW11t150iafAicrpAibP1Av2m5JOljw6G2qwRzWarw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrQC7ia2MsvI3b6YTrDwxoC5PicY74CsBNId1W9icW8QorTWtDxpO2dJvVg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrnuJR9iaVOzI9xtiasWCSyGkoXuY64b8mxlwicPxxI4Ypzfxdz8bovfZBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrPRJeF0eKo7oQPtSnZOFo1kIF0dZQO930U7CEdp65jjVo33Syoef45Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrmBDiaIBLw4F7UeYet1rmCv9ib2e6tceQvpZOQR6zt60gkA9mV3tRzRWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrhMAe3NW6poQgxAnTgb4OibTIHXCVBy96xibQ0z9TNpjaRU0SVhhUcE1A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrRRKaaJUaTOXp368AyNymH49wTEXic1wZ81HgHibDicYY2hO75lagqvIvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGru7D5e66rfIf6l4vunXVfDF2dRmUFGnP2pqyz6ufibT134Bwvfq9Cx1g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrsCEH7plWDiakGpUoqVOzwiaFmOkCygrUm1GQnzmYUAicRhASmxhm1icYvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrItyREQBouOQibdAD1MMEp688NWedj5aJFTqZUjPNB6neM8iaiavlDEoVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrBFvqQvB1zFn8HiajiblSEr5zHdAXkY3r0n2F7OtVeLLLJF53PgA7Szbg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGruToFwgH2RKM82hH8R26hVqguLPia4Ux0buHdh2F1DHBtPoAp6h8605w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrjUg7Q0aDxXbeOfib5B61e4lwLDQKOuZElJahPt1xxhf1dPIgKNw7qmg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrV4XHygzwfbUL3gYqQqyziaSxOsJ6pib4tf2t64TpCsFOxwrUBDWzNe6A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrQYiaznKIV2mMyW0rx8AKDvGJ9cQZymIwMAmSgqw0f8TPXCFIickpef3Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrEOLicXt3Jx9PNkiapJjE0VrD5qeFPTBbsbslichgVqibQCEd8KjlVhm43g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr7FNbnogMaaDvwVtQrT6A3FLWPoPTj9Hwlbf3fKpQW2oNPt9lmdmNRw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrutQOibH1ZK7h2r6q4Z0lASmOMjkFuTLgdxRuEBrw6JTOSJ3TU3A8CJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrRlHtg2QukXCh3poAhvkUFOMyrmeLOibQGw5BVicDYGeibyQDQJf9XVTHg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr5lb8YicCCuQrYTSyTaZI4dXiasHrMW2tQn0EmKZS3MibvwORQrXpcjDxw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrtCzIEEkqZ9z23yuHvicJJciawT2cDNtic1F12KMic8Slyzib7h1KichesibMQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr3dDtrJiaOVN5R2ALEr3a2R4kyJrXdHAiaHfSVa6fRKvDg4HvWYOsySLQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr9ribSAOGibOG42BTbFmcwt2AibSs8Hy955nCSVTia0Z2vzlDgIDlDztQSA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrgvmEOY4N3hotDDicWWvNW2QF4wCiaibG7doPvfnHZoUM3LWBWB2Iqladg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr6n3LZNKYuYvbU7aDm5U8ek6EQIWaVOKMyBUlkXzPYxYtia86ic7t0lyg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrmpTAFeLj7dfqZcNPiaFZib4oLRenRHyiazO2CJNFjIAUhCJO5S8LjJtcg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrOt9l2YeOLzgeegRgHYQYXbl2Irico2Uh0BbOJvG5lKl1tKflAiat6lzA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr22j2TqNONmf5Cic5LqkT6OEXOEeGlic5VUIe4icbkuFTmEQg3NbXa2x3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr9DIYCibjG9bXgatVFIxwbm29XnZ4EwN6UCu2Rbx5ASCDDuVcZmHk0Jg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr4YVtAjxcMiboFrPh0N1Ulho5xrePyTiaePcO53veEyGN2mMLm9h7qv5Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrLlRH3GswpwKjbfXn3bmgZcZ31icUpdqxLhiaFoYfsm6tl541LMaia0Licw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrAqOLWnNq9ZibkTyjrGsNLIgFAFZENxickrAssg9Fw2BJyJibsdFDz4deQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrAvP9ZMkPJwtM5oiczv56EwgRficGlaxjFAy5F28Nd7pjpsnkJiaUPAjbw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrJMw3fsdENrpZJf96Q7w8tQ6I7UHUK7urOFuqWFicMGrGKZsWFH5qhCg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGroAp0g6vWyCTWQW4CkfLGFTeVxg6icPL4JEox5BP35NA3a9UTmz0ic9Jg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrWsKIUVV4cXUCyLDolm9NsDkaORWUC00KaDJXKty11DNmFTxc0FQQCg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrMFAt4icVjZNldvhEPyM4iacNrKBy0DOQGXoVs6pJa6GgLUgbWdRvZsDw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrKicF35GKZLiakuUw34kd1u6nl2bB3EdrLMUyaSl3sBRticJwfsojsDbYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrfRZ9KibQ3utmoZQoic78fQYicbQGOTXIuoqNNTBtvfIcicrvDUn56f6jgg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrGf4Y4MxRdrhhIKvsCiaIKZJKl8cD0TuOlOqlV3RDN82LzKksa80A3ibQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrkg7K8G6XQDeblC4aa0Q7GYmBsfJAAo3aKZ88GmKATBxR6iamASJgl8Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrYo3IPGx6zJHAwJGHW1ba9TqGEyjtCc9ichmbxRt8ldwqcAV9EJt8bFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr93yjE8KbzZwckfwic7KoDrxibgyxMDy9jGL6g96bFJtkWLoolo3bNeAQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrY1jBb9bXicWbmpgzW2eiaht0YWNRTVweL74HwanPg2RDSKRH9OkosLWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrGunS8Zbuvg0iaMYHQob1re7vAbtSyib7SAFgEGqnPMsEjAhzPlI694zw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr0ByU7dPXQqL1O4GjWnvOahDD7lTRSNBTnCr7OmEWzv9HkOJiapOn4tA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr4LY6v1qyb9mc9uxWibkLJLQEpc3kWicrtNibKibG85EqyUdmArgtL5ibeHQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGroBTyOvMIDTQOjUj6zFnLo6RRSHvvxyDu5VMM4q6CqEoYWR6MJdzv4Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrTUUwE3MgpnBfhFq6iaT2sMBOWknMXufDMK5hHyWZQT8uTIVhich3rEBQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrbJTW1eicrwMzDzru4iaJfg7pt4QmK2t9sEknCScVMSJYrOdHdNIyMhIg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrSf0Rmh2gaJkubWEicwFELick74ibojcGpkXq1xKwFl92qibibciaUHNOntyg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrrHTaicdialKm5N75F0JEvjia5jiamnYqaM0YEialDmzyb2mG7ubXFL24ljA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrCvXh1hVDkhJrH65amAEcreL4KuN0VNFCmxG6EbHuQiaoI0Ef9f7tDog/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGroibWJW04L1mGGAN51IZPFsLGSQWIhj9VRc8nAvmq8U8BPUlKFSAjIKw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrOdSDRCtpYKUlk7KsVAM8xliapffytJ0ickGibbicrFn9sXFCkUA8sKfSVg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrLa6kfF1OtdSv4MZZThXCWkWUqmdH8X551hnYjib7vw30a0RtQH9qYVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr4Z3TDicUFjK1NRkHJmMSA9S5wep3ynlo8AFZ8ELdrW6oB0QJFVlIVNw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrLMBkJxB7Hn493tMFmG6hg2eJMib9RHHs2t11ChP0TicibgxHcsMYiaibEfg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrhUgpcmiaY0dKkSicLibibhWibADRqFVON1Yr5U8nhMs1DTNpAjrhP5IxVYg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrDicKrYSTLOuicDL3iaoibpZibO1Ql288TMQfckEdsMNN5em9tDMjeXUvGzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrcUIy1dTwgUQI6LicCXUf4MpBpEjj4uScFJWmLibibjev5sUUS5B92tBrQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrO3cPwC0zFOW41Y8jeqTKx1ocWYyhcAt2uIN5gVV0WxwTQumXOhJibHQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrDSgGXwc0KPo8DqibRcMnXHV2fpJxSv63B39s870h7GkUdSnXg8ia03hg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrtP3rgR2aRF5WQ0HEJTREp6lia60WVNSaiaok6CBt8GKwyGgRP9XsGiaDg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr1AABkn05Sk7zxzyexqxc4UwznzI0LUicMhJe5eicDUdAH174dKxnySrg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrJCSQibtzOtQU7mjHsN7QwdvOf79Jl2ymM4Ypghacu0gtsFDHpKlePKQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrcLTjFs3XUT6uAtuVOYgKwrzyu30B7Xm4AshsGE3lUqM4o2qGAsb8Kw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrnmL0kLTOerWuuhQNWmaeZs5N81wRGkZkjHFibu101X6MibtZ7ltWwWXw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrRjdmvkUwtd7dPmcicEhDUFC1ISLn8YMHmTPZ4x2evNGjK8pdPj7YhJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrGSMiaJ8PiaEAJm1wY8kXZSMCiajBAqDCRaFw5alFJVczHSTzvZrrkVOOA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr4HfvrVqDNUWFhKM35iaS5yEy1SZPlRRTpOp95r81GrhOUNHmnWRVsDg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrIgY1k3EAOgNibf1cBJ7ZSz6yAKSzNicdUrcvuib8mJ7Dz2OvfoAibiaB4kQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr7Q7yicgknrP3XibYaYEZwr6Wcc5WL4QV5Nmy8jA1RQnqVMJmJHyeOPzA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr8GuNpG7iakqd5WqHlniaLibzSJCtar00QRHFfPfUib21T26JPcwoKmIfXQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrCGzgAiciaaCSj0DRTm6iaXEnTvsD44K6ywvEzUJEvX9D7EMbbAwo9cJKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrYDG2j40cAFzF7Ptiad3qxQeLa9MaNLAUgtsibGRicX45Mv71ESAYliatDg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrqMZrzzbJfEukq9zxNkwGDkVbgxIx08v6HAlecicU72RZEOy7OGaBqicA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrnHGKRzcXibhxO6AkxA8BATbT4LwiaqWzPAOoCWicqAvTo1bjqSf6ymHDA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrZ6folytUOHkMQTX2xO4e0LlUHgQxGWljsDl7JfVNgk1XPoDibfbdgXA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrWjDicYFck86MPpjiarBddx5ljibOW4LlYSicdHeF7RKicNjFDnrF0LZNREQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrzOMpghqE2c6A6PISkg42zv24HMKMs0R4mFmf9YdeYLIAE5fV1R0WYQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGribta9XHSImjmTb5M8GnjHajGVLgwralK5bJvMP3KgMDIqiauBVgiabaxQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrZvSoNBaAORXgicmjl3fQhAEjBSwGk8uVOdx6Q3XQLp10WxwkkSnBgXw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGryaCZ5W675fiaK1Xc2yuicvYoRAib5lKtyichia8TqsQOj7dicrz9nLvklcZg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrLvYyw6HlVESh1R4wN5OFK6VLGoEqusHMKbvGhneeZB6phMb0kmVKQg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrIE3nwR8pIdCbcTbYNGibyrvxIq7t6hNkOYsq6RUn8vCOJIpJccFPKqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrqDPrPN1k3s4hpnqGmWXicCBWj2R2qxHibgv9iam1AFN38SOlUdLAavn3A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr4YG5Ayyt2kqgtwM87rCWUEg6lk0vkdJIziby6ibwVFayvmNFJKsNqBgg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrUCG7RNvZ2ceIlDY3tF5TYfZJTNQyqORH5ss6XCVj61RzyKN7icyakGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr1PeIrSQOMHVJJHlvM4fLCriakv9wfKjvs8xicuq8qALKXID6FeJlyeXQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrBBgtQYJGt9IOfxY20lcoMia8uJiaWtbAogpNibV4niaHialTAbN2HyLRYnQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrh0ZhYkYALgPmQFibFhBDRz6F5C2BmiabCLEWEUZIhXn69GtcJra3HkWw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrBFFMLIwNwibKR3rzIvUxiaFBkvTrZnicHAJDkBnO1jCxX4Fo5icOZib2lhQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrfUgSfiat9O6xiaaCLVVxbyic1X3vkrva5nN7Ba258icj4dW22Kwicmoagww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrn87aI5dEwVXdpoiaLctIH1xN7sny7mQ1GbyRYNgVOx9BxSO9ibQSxhkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrarDBTWBOFOp2iay8FKd2mTBNkMSVzeXX8y31TBRchibedes3YYQJxtPA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrvPbmKnBg0A5j1CklcNS5CRmm20xHWnHcm3Vom317Xicw74d7oSKLuvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrGVD0VfGrKiaicWUiaEEPqovaWMJxKZ19gRQeGJqs05jCfXgnFJgWcurAg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr3bZV8Kc0AVCyQYMicgzwFBwcytTMyUyCImwdhB4x7ibPibwjic9cicWbFww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr3YYfVaFicHayE28XmiaF7b3GG8Jl5zc4KicvHB8oKQgoKN2qXZ7ibZic3iaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrrOrIdxzEiaV1mFHG3jGs40Gjiald7VSG6RCukm2nialpvs7BF7mQyqr7A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrb7ia1aNGWQjR7P6254oW0v2SHIIHn5e4gu3qfSfhI4uZPyjc5u4dOVg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGraJ5q8z6WOK4R82CHnYicjrFMiaHIz9QjBwX1haUmn3kOlwtiaiafRK4iaeQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrpv7YqdVIcvd62GQ70Co7QSibWVRLS9uBsWBumWFZRwxr7gcG3rcNpVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr89CzhHCfmMxibgOfzkcDUDTGTqZ4ywshjk5r8VM0RoUiaORUiayDHkb1Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr4Ahu92odOWVPcf9PBrzLVVibx55Ls1dRWp3gGTdmqvCBpvIvWtUGgSg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrpU7YibTwIKkSV3NrAuSZrndFCfnkibBrcdFEcXxIOssFrenXaLQI3Mdg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrtN9lcVRGeV2fdnf190yLnKib7gDfkmoiauicb09NXrtBnUjqOzVZLd6Hw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrqTZReXDcYFk5LPUejENW7nAsUSAucNibTJGdk0ibfYv4pJeckNzIZFCQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrQInYKtNSqOX5ic66ljnOwRr51FPdv9wJ6QiaUrFNIIY1pUtxXI462kfw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrkIaibwSBoUGVjfjfYaen1WwG3ODvN2IQiajsL4DgkFm2Tbd9b4rRqp0g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrg2VsWOM0k4jiakbicxgMH5JyPkibTwc2UulASAEX64QqqribJI2TZYa3Gg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrkTQIOf7DI4ia7kjDmVO7FiaUmBribsvPeD0p0BkicN4zKVqJqHjMiaIuzCQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrIhOPTJSW50mP7Ezg3Sc8f9U8DicQX5LZkk7KQpJOqrXu5X8vy1AmySA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrWR8XHM4TychwJiaDphdMfTrgETIoXbG19CccNHOD9OjWU5VIss2IicDQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrZhicl0PeQ3Kfh8aNXOt7aZ9QNdhjdWvQTgPM8FKiaxzUJOxWKgFAWOTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrrMJ8GvYktrQnZCyiboCFEykgSMUf5aibOiawuEkPYHflUTD9UnA3REaCQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr4uVLOmqiaGTic0nvTygEjUwhUYgXMQQhhqZkIeFw21T8VXTLA1expgbg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrJicGboRxFc8ltghUSRP7f5OjWib1icaib2diaDlOZMWmyfY8shLlvXfbtfg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrKgg591g0LupRNA6WT7CLiaDsfkFicnDhgnOuVswp4o87IT1fTPicQeeIg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrqru5icPeHT3zgE8oapsCBzkwIAo7ibzCgsV7RiaKnmyKvQ3pHjfrnBbmA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrWbOsAj3fiaEiaBaFycQOFuzMYuibUG7rcHKzZqKnTicH6OdLRlL40ibXZeQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrbg1aH7ZCmibxnyqfo9jveYnwOQ8pAKa2TFUDvoticPU4l5icpMC2aAQyQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrFsR9bYn5FPTC4jDe97icMT5ic6DGOyBCYp3gZMnjz65nibO7iaVZxkRl1w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrbiblHkGHoI4aknP4vbHWG1e09pwm1ezMcqZRnm9ibKGWiacHX5euhric2g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrlKaeKRjhogXAnUCNNw7lyj6DSGiayicG6KTIqkU1AF9UtZUj43p6MQxw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr9LbVBNXlOhcP000aay4H2IK6rA7BDcnJC8WGjLre4dGBX0oHy8aCvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrYlk3KnvtJuL2JVSVfmnXRJ7nMlNWUGTVebGRiblzW1icX1Ulia9AGYZTQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrFZa7BRaLENvAk1T7uU9YCIh12062X5jiaT0Y0piaicyVVG0j4Aw5Z4Rzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrC26jn6l4lSjNShMhzoqvQZAcia4LxfyUSLp3abGVuKIbnrWBXa1cY4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrTJ0z9ibB6iaSmfg5h6eK5icXlqlOTLm9vpRKgaKHlIrxEbgDyBDOW1y8Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrcrUqQUt1TxYAUGrLMgsIySk16akbY6jKqBaTpGbGTaicjMFk5kvAJeA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGribodErnIqVzbKEfDrdL1RmPTvIC304wXW87n8bG28SaHFr5xAj0nDSA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrK8duNt5UtqY2dCttf2zBQJAtjszyOsRc2dVfxCHL1gsNJYJjTntYqA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrA4r9OqZgTrOaepg2Zec3icXDm8umZmDoQThFVMsRXMwSmwl3O9zxXpQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGryE6y5FEoYTvz77aoTrZ41A88YGKyhglpLqQynAKpIhrnMfPPG4GWUQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrLdzDQeV4b2MicRLC1Ovtib1hPjfQphia0GwD1ZxiceLfaFIiagFia2dI4cJQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr9iaMPJe2C3z4PicwYYkZyZc8F1q83bvD03xn5j84Lz71gQwBhFxDIxjg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrhSGPXzEkEvyt0aichvic1HfB0deibkTGnr4fx6rUvuxqEQCDQibKaVRdFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrdjPQd3rWBkF692uhupibllbOykhxIPaSXZsZKBLGf44yU5bSlruVOPA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrUe9aicVel9J76gEgGC4orTUUrL3PTv1gUROsCjQDn8eux6eF4G5eZkg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrP7uficEu6LOReydSexxoJSj0w0QruSa58nicUP6pUVYTllpoN74gnqnw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrRCR2UVltnXdiaanCuJgkUC2W3ibsGGlicEDvPZ95y6CBZcBI2l8RsUPKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrFib561RoicicHIh1AcZYKzuiatwHjmGfTIfFM94DpoxiatCiarHYgicWiatRnA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrFgXnA4Oe0kAlGpPhib3lWqozTeFzKgRbnXdD4R9qFFfCibTibTQpkK3Nw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrlIzJ3rgKFXRNAibbywcKqkNWnOyibSPrw1StgyfXYexFN4kJW1esnGoQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGra9aZ1gxP1pVQbyS7jwRlZ7NCWJEs96y4NxX7hS9q05jFYfEAl9Ticxw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrKnj0XcHxHVCqh8ttcgfLEaf91XvoHcj34icmM7UGTAqnMYmX1gvuDicQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrsibkZlmMcVRrThpJYUQR966n4Bgdw3BKd7z9v9SB0sbicZWelFmO7hAQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr147K7icgYKGPHapY6jhbWOyiccu6xibca6CRjEg9Izgf6dF2tPT4YdZnQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrIQPdZGrViavcm8JpfiaRiakr6UlnZDYgX2wICmaTn1yjRS4eIicZ9WRyYw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGroT0BCw3SibQXr6dkMd3vlgcicaWqcgk30fErH0gwrfic4yThpgcBg71Fg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrKWlVvKVfFNMPt7lGdWibibRqSH8mKq6Lxf5lXYFybk01RicHf1FP3JlAQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrVmlKejB4iatJCjEUZLlmSlgIOFqDIsSRqn4fU271tTVKqiawXqARrYibA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGraTHeCAjmEVpFEvKKLKlCYwvQiabTD3PjSd88rgBrbk9y1W4Gd1qhXNA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrMI4bOAMHmupiblMJKkcXlAxcoAibNg3KbAoYAshB7MmU11ibkszznz9KA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrRP4ccuCOicyHbUOqyNVMR2O9VXwFbW7uRyRU3mKNcJ9YETFzs2OhP9A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrw9OXCsG8oLj3BsEVPpOcM7ic6C9XXchdBbzr1PBBTkJyh6rn6g4RQHg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrUOIDWibnPRRtFl5wDS4mVyAsogBqhcw8QKmXAoc5BoElDdG5B9DafEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrqv5uib3TumAOcf0GjFIKo4arJde3LcBJp4ibSvBBymUuKj3jaykdgwVw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr5Jy7Mibb93tWqpibqE3iaZhH6iakicnIatG8MFG8jLVw9yFdJn2AeibgHRYg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGroqaXlcH8gPNia9d07hDH0bv2CExpKxFvkzpa73QdRIJianRAKnEecj9g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrAm4a702KTZgWbicKficczQsdEAJ1ia5pooEZXPpWdDWSwaFFUuiamOgpzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrpibYialOmicu0cw2DzK8iaOFRBwtN0bNzkibjibMNwPGxgbTWc7j8PJ8aXHw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrEHUb4evGFyZr2DewXuHXoTjASH6Eia2D8bd9F46gymiadQicZQ9rKTqrw/640?wx_fmt=other&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGr87CzySeIs47vaydyNXj0zuXiawaRfY94DicdyCARpwQC2RJnbwwuqxnQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGreL81WbiaqfmoZCrB2Pr0xhO25BxUSS0fZic5HBxlGMgPFD54JDhvBJLA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmBchFsMp2szgqoHR62ppGrqrMMTicArZzYrQzicYqibh5YEqSv2XRvZmb3mPpicqbxc5AcdylL6GjKHA/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

固态变压器，作为传统工频变压器的革命性替代方案，其核心是通过电力电子变换和高频隔离来实现电压变换与能量控制。下面我将系统地阐述其**关键设计挑战**、**适用性**以及**未来构想**。

### **一、关键设计挑战**

固态变压器的设计挑战是多维度、跨学科的，主要可归纳为以下方面：

**1.高频功率磁性元件设计**

-   **核心材料与损耗**：工作频率（通常为kHz至MHz级）远高于工频，这对磁性材料（如铁氧体、非晶、纳米晶）提出了极高要求。需要低损耗、高饱和磁通密度、高居里温度的材料。高频下的涡流损耗、磁滞损耗急剧增加，散热设计困难。
    
-   **绕组设计与寄生参数**：高频导致集肤效应和邻近效应显著，需采用利兹线、箔带等特殊绕组技术。漏感和分布电容会引发电压尖峰和振荡，影响效率和电磁兼容，精确建模和优化至关重要。  
    

2.功率半导体器件与拓扑

-   **器件应力与选择**：SST通常采用多级结构（AC/DC， DC/高频DC， DC/AC），需要大量功率开关器件（如SiC MOSFET， GaN HEMT）。器件需承受高电压、高频开关应力，对器件的动态特性、可靠性和成本要求高。
    
-   **拓扑复杂性**：主流拓扑如双有源桥、模块化多电平等，虽能实现软开关和模块化，但控制策略复杂，子模块数量多，增加了系统的复杂性和潜在故障点。
    
-   **效率优化**：高频开关损耗、磁性元件损耗、半导体导通损耗共同决定了整机效率。如何在宽电压、宽负载范围内保持高效率（尤其在于轻载时）是一大挑战。  
    

3.控制与保护

-   **多级、多变量协同控制**：SST需要同时实现电压变换、功率因数校正、谐波治理、故障隔离、双向功率流控制等多种功能。各级之间的控制器需高度协同，算法复杂（如模型预测控制、虚拟同步机控制等）。
    
-   **故障穿越与保护速度**：电力电子器件过载能力极差，要求在微秒级内检测并隔离电网侧或负载侧的短路、浪涌等故障。设计快速可靠的硬件保护电路和软件保护算法是保障设备安全的核心。  
    

4.可靠性、热管理与成本

-   **可靠性**：元器件数量远多于传统变压器，根据可靠性理论，系统整体MTBF会下降。电容（尤其是DC-Link电容）和功率器件的寿命是系统可靠性的瓶颈。
    
-   **热管理**：高功率密度导致单位体积发热量大，需要紧凑高效的散热系统（如液冷、相变冷却），这增加了机械设计和维护的复杂性。
    
-   **成本**：目前，高性能磁性材料、SiC/GaN器件、多层PCB及复杂控制系统的成本高昂，是SST商业化推广的最大障碍之一。
    

### **二、适用性（当前与近中期应用场景）**

尽管面临挑战，SST的独特优势使其在特定场景下具有不可替代性：

**1.未来智能配电网与微电网**

-   **柔性互联节点**：在分布式电源（光伏、风电）、储能系统、直流负载高度渗透的配电网中，SST可作为“能源路由器”，实现不同电压等级、交直流混合网络的智能、柔性互联，动态调节潮流，提升电网韧性和可再生能源消纳能力。
    
-   **电能质量综合治理**：天生具备无功补偿、谐波隔离、电压暂降治理功能，可替代多个传统设备，简化系统结构。  
    

2.先进交通电气化

-   **电动汽车超快充/充放电站**：SST是构建直流母线式超快充电站的核心，能直接从中压配电网取电，提供高效、快速、双向的功率转换，支持V2G功能。
    
-   **轨道交通/船舰综合电力系统**：在全电化列车、舰艇的中压直流或交流系统中，SST用于实现不同子系统（推进、辅助、武器）间的隔离和高效供电。  
    

3.数据中心与高端工业供电

-   **数据中心**：SST可直接从10kV中压接入，提供高效率、高功率密度的交直流转换，减少中间环节，节省空间和能耗，并提升供电可靠性。
    
-   **高端制造**：为半导体制造、精密加工等对电能质量极其敏感的行业提供“纯净”、可编程的电源。  
    

4.可再生能源大规模集成

-   **中压直挂式光伏/储能系统**：SST可替代传统工频升压变压器和逆变器组合，实现更高效率、更紧凑的发电单元，特别适用于大型光伏电站和储能电站。
    

### **三、未来构想**

随着材料、器件和数字技术的突破，SST的未来发展将呈现以下趋势：

**1.器件与材料的革命**

-   **宽禁带半导体普及**：SiC和GaN器件的成本下降、电压/电流等级提升，将极大提高SST的开关频率（迈向MHz），从而**大幅减小磁性元件体积和重量**，提升功率密度和效率。
    
-   **新型磁性材料**：更高性能的软磁复合材料、低温共烧陶瓷磁性材料等，将实现磁性元件的进一步集成化和平面化。  
    

2.系统架构的演进

-   **高度模块化与标准化**：通过子模块的标准化设计（如“电力电子积木”），实现SST的“乐高式”灵活组合，满足不同电压、功率等级的需求，降低设计、制造和维护成本。
    
-   **全直流能源系统**：在从发电到用电的各个环节，SST将成为构建**全直流电网**的关键使能技术，彻底消除AC/DC转换环节，带来系统级的效率提升和结构简化。  
    

3.与数字技术的深度融合

-   **“数字孪生”与AI赋能**：基于实时数据的数字孪生体，可用于预测性维护、健康状态管理和性能优化。AI算法将用于实现**自适应、自学习的最优控制**，使SST能自主应对复杂多变的电网工况。
    
-   **作为网格边缘的智能体**：SST将不仅仅是能量转换设备，更是具备强大通信和计算能力的**边缘智能节点**，深度参与电网的调度、市场交易和自治运行。  
    

4.应用场景的拓展

-   **太空能源互联网**：在空间站、月球/火星基地等场景，SST将用于管理来自太阳能板、核电源的不同电压等级的直流电，为各载荷设备供电。
    
-   **动态无线充电**：集成高频变压器的磁耦合机构，实现电动汽车在行驶过程中的高效、大功率无线充电。
    

总结

固态变压器代表了电能转换技术的未来方向，是构建新型电力系统的关键基础设施。当前，**它正从实验室走向示范工程，核心驱动力是解决传统变压器无法应对的、以高比例可再生能源和电力电子化为特征的现代电网难题**。尽管短期内受制于**成本**和**可靠性验证**，在普通配电场合难以全面替代传统变压器，但在对**功率密度、可控性、多功能集成有苛刻要求的高附加值领域**，其应用已逐步展开。

长远来看，随着技术成熟和规模化效应显现，SST有望从“特种设备”转变为“通用设备”，最终引发一场从发电、输配到用电的**全链条电力技术革命**，其形态也将从“变压器”演变为真正意义上的**“综合能源智能枢纽”**。

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskEEFxG77Go8L03Jzol7D0Lg0ic7Wmab19oibVpuaia1mQAiaNAgNUWYxUzl8pBcVApUBhPXE26ksVnCA/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0L8E5icdNByzq2nNuCVcPDiazdiaGQfA3ALoWMsqiasxlxpeQsdZzrueM3NA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0L1ARyzQpibNUVjIFsYtsrSvy5wNyvIGtmWAGVyrOwltbkbibAROaO1FyQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskEEFxG77Go8L03Jzol7D0LgBPFSluc8rlZ1V92tCR1DaBHNXvAjVVQ3rQGiaFIfv8cuib5Leh0MxUg/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)