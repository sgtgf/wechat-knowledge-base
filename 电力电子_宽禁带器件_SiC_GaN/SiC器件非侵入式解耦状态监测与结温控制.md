# SiC器件非侵入式解耦状态监测与结温控制


> 原文地址: [https://mp.weixin.qq.com/s/OARAtMCoa5E3u3vM-K1lQA](https://mp.weixin.qq.com/s/OARAtMCoa5E3u3vM-K1lQA)

文章来源：电气传动杂志

作者：张擎昊(清华大学）

简报：SiC MOSFET具有开关速度快、导通损耗低、适用于高频高功率密度变换器等特点，已在新能源发电、电动汽车、储能变流器和工业驱动等领域得到应用。与此同时，器件结温波动、热应力累积和服役老化会影响其电气特性和可靠性，结温监测与结温控制因此成为SiC器件应用中的重要技术问题。

**清华大学博士后张擎昊****围绕SiC MOSFET结温监控中的关键问题，建立考虑老化影响的SiC MOSFET特征参数温变模型，分析结温与退化状态之间的耦合关系；提出结温与老化程度的解耦评估方法，提高在线结温监测的准确性；进一步通过混合调制和导通延时调节等方法，实现多器件结温均衡和单器件结温波动抑制，降低结温控制对变换器正常运行的影响。**此报告适合从事SiC功率器件、电力电子变换器、器件可靠性、结温监测与热管理控制等方向的科研人员和工程技术人员阅读，也可为新能源汽车电驱、光伏逆变、储能变流器等应用领域的技术研发提供参考。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6h6TS1CsADerWmywiazUbQgQ4ILosZVo5OgjXicQt1Jaj4l42AGn7o1bRSuCgtEI34nnEH6WVODYlNNPbiabZ0KyKIZGmQx12XrGU/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=4)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/P5p9k8Esn6hlficcOaPT67xf2E2ibFt40pficSibBZlrIfvHb2IP6Xwf7ElT2EQJ6VvsdEV8jgUQCHzmRtRiayYy0ZGV5BlVMZDsG3Smsl9YrpdM/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=5)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/P5p9k8Esn6gGj4Ac1HUgKD86vwYPIh3ciccjlRwJP7kQ1fGgaxXsewaykb91gzMMtVJQXMyS5fmaAYxHTnGgUhWBj5wy9hoQL4IvkC2AqVico/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=6)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/P5p9k8Esn6g5icX8PFu5FWCaNzaNicZfskdBfKicTMyvxNbax9TYftvRuF4gunJxONsIqEzfvp7tQGReFmkGDOhMLk23wuaSvkxsWCWClH1UkE/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=7)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6hkuPY5SUDvKVKwE3FJ0kkB6JwMQI1gdlwEQfLYVgaKPgDqoDHVBTYOTNxkr24SgWY6gnj55Qm6qm9HVz3saibWvKkMbQ1Fibib2w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=8)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/P5p9k8Esn6ialDbKib6kgXtLpu6R09234VPpicQacXV94gzDLRWcIKODBdSpFpQvB5fiazLKpHPIZVnY8fgpm1Q5czSdKhWnnESatmR28T0EfKk/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=9)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/P5p9k8Esn6iagXGNd8R5YAYUviaC08iad7SMIe32yEBmxI4py5wtnAf97TSjB7O5f0v2j1zIibETTcEhCgVUr03icodbmmcrbEsTicUr9UCia9QnXs/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=10)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6hFib0icO2KVH90JF29LPZicLbiabj9qx2lSjDKtFqNicjl1xe2OXdL8LDLfNFCWiathYYksMb5Bdxic64jicIkydRb68uU3nAl6Mjy8TE/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=11)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6gpt12EyBkEvsCMaYicaABuXAcK3ibGPp8Mx5nkQAPib3ZzJf9o9Q1JicicXeVJPM6OEAPnlbY6sfHoJXJDP6Mo63liagW7fvIVFFgo8/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=12)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6gHBuDdSsUUW9FNib5SKkgKwia4z0NvaaibcSI7w7WXO23YCJINTnBE0lAr0r05GsysJ6IOBPzCticuxYibz2erib7RwqmwIXo2JFyqk/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=13)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/P5p9k8Esn6iaamfFqNjjoicUnL41icACnUrS5mTphQxXBHlhykblh29vdGkekw0ELZk7GnjTYgialdSIfsplB4zsGvVNMh2NGhRic1kMMsBic6SV4/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=14)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6ia8adVHDvpEzHg9hZFfXW4FSg6RgLEJnJWLx02sXj4icr8UbBS2dBb8YIa2Ue8OOXFmyCDdT42KgPNEolcWqicOEdt9W7a8ahu3s/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=15)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6iavJKEe5Ux1Twiasugp2FDnHarvTB2icBvOXVqHQGHaHxZZykYJnJ5MJPOaMy9bibmTx6Lib9iaiag8ofgh4e18MUnvY6IAsk9AeCgqo/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=16)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6juZl1vMURZ1ywAcH2wKHYS7ybwNjZoyOkwLgqapyMEChYojFW7jXwetFzpBtNCSrxEvRysPsySd9rDtDkPicjcEWRRYJeWYibzc/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=17)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/P5p9k8Esn6hLtaWRDEicSyMaVjL2XC0EHqdsS6ucWgHyJR118SjQBsyb06214xAicfDwe6TibFrM2icvp1xsohEqyVWswJexwPyW21DpPAbFEcY/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=18)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6hAPOM0nt8KN9ZvGnNriaoqW6w3SyTV9YNJdqgdv2amYBGpUpX31ibjgEZ6ZNedbQTO57egHwsNGCvVCBYM4NVGawIYCeLp0ZG1w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=19)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/P5p9k8Esn6gqh6tX9uj0TBFtHKMBOxwkBH6F4yfzJmO52IBQibUpicBrVaDfFB8eb4KkYtMyXVdPzdMBW4WL1VknoaVEeicicsLgf85FURL4EBk/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=20)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6he4ltsDKYichwwnib7sy0B1QY5ecph9bpzEy2tWcqE3N6SxTEX1rtXgiaQ6bbEVJBTqWPe6YuNnjvrjARiaEj2PMJfmGZOgnSyQ8M/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=21)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6gnjTcXhd2JkvekDpa4w7sCas2qv8MfNd00OCibhS56q5cZhfqh4pCZ22AP8UicyRuMG7Dw401NAicXZrjianzoC8p30WTCeiaPkcRg/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=22)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/P5p9k8Esn6hC2aXhIICj0upvtEdIybhpzuL2Tdw5JSc5Tn5AlgwYloSticI9waAUMaDyibyhUYvRuJ0AJ8SgLqXxB3kJSUTXDcClVFibjFvq5E/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=23)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/P5p9k8Esn6jE9MLviaBt2Z44A0fibaYFibibJVnibCjskgUPeczzAFsOlxaDj5Op1BeK7453X2QkvINIVR1sIkI00zY3qSFv39RWJMTqjRXLuHMk/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=24)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6h0VVY9mUkJZD7KQibADM6vUfIe5NSTqoQuR5ag1raTKOZU6sqtv8KGRnYRwibAleZkSdFGVzaG7bHX2AlWUWHeFMO7Sz4EAuj0g/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=25)

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6ia588h0kVicZWZV5RODSSqicGS7yt8mwIDd019j3dGWmRfIDmxBw0G6JNQW1sqYw1Apebe1iaFjOVIYqHPDX5xJWNOIXwSARiaNaRM/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=26)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_jpg/P5p9k8Esn6iaN1XS0Btz5pQmQ2Bz3zETicfG2JXu7G628ozWTbMqCeBS6UHiaNicCOgXbY4vl8C4LK1coYqB7vGNibCJtKqA71YWX2fFl2XCBW8w/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=27)

专家介绍

![](https://mmbiz.qpic.cn/mmbiz_jpg/P5p9k8Esn6iaZR6483fOFBsZC2a4OngFsV9BZswndCILCjoNic2f5kvV73DiaaXrQfH3YdhxALwU5tu8Oicmibelb1oUoV9PiamkiaszOP3E50u9LM/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=3)

**张擎昊**，清华大学电机系“水木学者”博士后，清华大学电机系博士后校友联谊会理事。研究方向为电气设备可靠性、监测及健康管理方法，新型传感器与无线传输，人工智能在变换器故障诊断的应用等。以第一作者发表IEEE 顶级期刊 12 篇，发表国内顶级期刊 3 篇。近五年引用 550 次，H 指数为 14。授权、受理国家发明专利 9项。曾获 IEEE 工业电子协会电机技术委员会最佳论文奖，两次获ICEMS 最佳会议论文奖。担任 IEEE Trans. Power Electron.、IEEE Trans. Ind. Electron.、IEEE JESTPE 等顶级期刊审稿人。获评2024 年清华大学优秀博士论文奖，入选 2024 年电工技术学会博士论文激励计划，获 2024 年中国电工技术学会科技进步一等奖（排名 2）、2024 年中国自动化学会科技进步一等奖（排名 2），入选国家资助博士后研究人员计划。

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpOZNFkzDFctW2L8FHEVrHI8YxBNVicyI9Ey0jia5M4eyaTmFMUnMGDudkFz1k4cDf4yNjqW6iboVkR2XqIhqyJichDOibt35k39bUAo/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNv5tm7ll0CPYA5nJIdVpwiaWQeetBbQd7rZ0WZn8lcpHlw7GSiaws3RpWRRudibbicgbPSM11J4R3QJdyPC6BGuSzkMe4mKkY9O5Q/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOcS50kUDGSRuH3y7SoyxgA7wibtElaqr7dN2CZs0RuYUu3ibJ1J4soo8n7zqKLoVf3h9ic6Hdd67WjQLtoeuxpNK1iab6ACnT1fKM/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOjbibyVpTIP0FMmLQUcWjTqz9Hiaic2tudEjprTchlwYrV8RKWeAkCwFcj03qMfTHicUkALAiallJANJKVyD3ibVPjMeygNq1ruH6oA/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)