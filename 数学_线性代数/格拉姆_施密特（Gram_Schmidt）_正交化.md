# 格拉姆-施密特（Gram-Schmidt） 正交化


> 原文地址: [https://mp.weixin.qq.com/s/8VQVhXXFm7IGCBuGzEzusw](https://mp.weixin.qq.com/s/8VQVhXXFm7IGCBuGzEzusw)

在上篇《[Gram-Schmidt 正交化过程简介](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247489146&idx=1&sn=67ae8f9599bfe9690770c3c87520cd2f&scene=21#wechat_redirect)》中，我们做了简单介绍，本篇中，我们继续深入学习。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocusVWpFw5amaicG472fTaE806MM1jt7ymt3pq8Gmq8hU6Aobsk1qrTHcZia6tgEHeyJhlpms2KLVwNYRBmFGWIic0F6FtGvib1qkyQ/640?wx_fmt=png&from=appmsg)

图1

图片中的内容是**线性代数中 Gram-Schmidt 正交化过程（Gram-Schmidt orthonormalization）的第 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tEB0iaEZqLtagDXokUyKic04xDN0hicHCxDhk51X3qlJ5X9JvAzvJdl1o8ex2kH4CiaxlQuBaJcsL1pHTlzYI2HUvaiajZoxP0ez0k6mMraaCcbw/640?wx_fmt=svg&from=appmsg) 步示意图**，用来从一组线性无关向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vf4O3sdIf7ruQ80a0GjDIXGlY69MOJvZbrKx5RWb2DLRKNkW0Q6WPaJTL11MERAwqkYuSyphdibfduJ008COJicCpgwcaHmNTGiboUVfxYibaFw/640?wx_fmt=svg&from=appmsg) 逐步构造出一组**标准正交基**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7lVoou4I3Zl3k83AfDmgPrgeyOds019jYibPOTpOIQbtPka9pAVbSyFCqiaLrv2JxPOGjFeJCKG1LdvUBQ7zMSfoK3XjoJB4sciaDnGJmpEuhlQ/640?wx_fmt=svg&from=appmsg)。

#### 几何意义（看图最直观的部分）

-   橘红色平面代表前 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM591GhHibmdp15b1QBMcXCWxJial2S2wajjoT070jvd5u2ib8YPPts8VwjjbRTPtFbbTmBDypBVzamvGth4YSKS3bodYwQ3P3ic47SMxY7qHtyqkA/640?wx_fmt=svg&from=appmsg) 个标准正交向量张成的子空间：  
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM62BMkibDIKfUD6fica83QM2lgdiacN1pWFsUS08y7dI1EiaYxmfhVDbhYOn48AuicyDsFh6UnIqUbiaJMtoK9aRRoJxUrXXSTyHJo23uJRpW1ENFXA/640?wx_fmt=svg&from=appmsg)
    
    意思是：前面已经构造好了 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM78QADxv2WDIjFYB8UicDd0uLTcgmaraQxb4Aia2kribn62aHgDCKXmdve6AxYLenjHibhliagW4ianV9Lb8l54UtJn9qu1uzThCNTG2yUZ9rGJ0Y1w/640?wx_fmt=svg&from=appmsg) 个单位正交向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5WDF26gRGMWfqevIdLWZvLmvBGibEptmricrFcMNH7pRhsyQAvfPkzcEdBDy3KgbK7xxjwJXcyyJQSEIjvbEX4zjwVajibFLk4wL9nI7QLc7szg/640?wx_fmt=svg&from=appmsg)。  
    它们张成了一个“旧平面/旧空间” ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4PWqk8VfXjTzNJ7EvBh8ArWxzKKxW1Ill70XsBknvlVoIhZia3YXtzccGKAFkJiarvEickOtiaFepicR6L4Bw3KuicU3a0F6Txuia8AdWt36Khmzibww/640?wx_fmt=svg&from=appmsg)（图里那块粉色平面）。
    
-   蓝色向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4rr9OMcCULYmpymVrHrpO8tWjpoXoLChxgQdxO43AhQTEhhZdIGH2jpXwRSJ74od4XqQqE2rJ8nOLwIXMwKXCVVFA2x8RR2l99WXMgFe2L1w/640?wx_fmt=svg&from=appmsg) 是第 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM62BMkibDIKfUCkejk157gsj9XTd5HCcwPx1g8ID09DCLfSUUg7aiagRbemYFNJrgeomRtlxm46RJiatvqjTIibiaomvNe1s838xUkWh2QIYqRA2Yg/640?wx_fmt=svg&from=appmsg) 个原始输入向量（可能不正交于前面的向量）。
    
-   绿色垂直箭头 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7wjVicC5B5hricgIKaLHY14I6glmcZSv3c7cfdIB3IZXibwibOnWdUlfKng3261pZngb7AmQzBY9TpjEQicaoKAQGkibUsj1UiajDMmM9ykCmMNYHeA/640?wx_fmt=svg&from=appmsg) 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Dq3yZNU9R14Ln2vZ5TVU9mWXITwsXDGM77qk1I4aFy4gdbPgQyvbfLR2ibgJibicjMYte01ibywsaTCsac5KJLsN5RAQqFbFwp90MfK4bAFVpxw/640?wx_fmt=svg&from=appmsg) 在垂直于平面的方向上的“剩余部分”（即与 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Im49yZyGFyZZDqnib0ylPMZbMUbIfsds27qtZRl5RpaLlKTuUAHUsWclicXIMezibicRkJ4FsYV4YXBzhQfk5EL4biaYlaTCic6fc9yrVNxa4l8icQ/640?wx_fmt=svg&from=appmsg) 正交的分量）。
    
-   通过减去 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MNhGOibicRKNYr8V1FSt8vSDpcnxibOoMcIhpfRRbFnsibrUwF5o0r8IXSJsBjo9LvdnXFjWOOmT36TqTmlYZ67qqqiaNJ7iat0Bttt4euakymb2w/640?wx_fmt=svg&from=appmsg) 在平面上的所有投影，就得到了这个垂直分量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VlCeKUtqicPbUnKpfberQrh4n0oy2TFuSq2tI3dZhMqlV7uMuF3EHwlRnHU8KyzzticNYwMyFeWyE3Runas3mgSRicI3xRyaAH5scSVRfkYmhQ/640?wx_fmt=svg&from=appmsg)，再把它归一化（单位化）就得到新的标准正交向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6Sy2nicUar67OPse9CibKSCRbzGMXBaMibaGQOqCoArMxpXXyodJKQp32Rp33L9y3gLUefplAHrJicMOz8dksgibw0n7LLB6naoKtnGA/640?wx_fmt=svg&from=appmsg)（绿色向上箭头）。
    

图中还用虚线方框和小箭头直观展示了“从 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4iaYOrBvlSznstejUgiaPCoUDXjTbcddIR6KzdGicicECUTzuicD0WkCUCCV0JfiaJG9fMBgc23YaTvIrgMQYCz9c9wblGcP1G3icFSS3QkzCe0icV9w/640?wx_fmt=svg&from=appmsg) 扣掉平面投影”的过程。

#### 公式详细解释

图1里一共有两个核心公式，对应 Gram-Schmidt 算法的标准第 n 步：

1.  **求正交分量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4oziczO8UCThospH75JjdNd22QsDGvMSicc9PibHibHvM1Ia7t56gFicDWHcJ8zNI4TNWy3yrWibvDx1vU3YJbnGtibSwvT3XfTfC7sicaQlzMibV3bNw/640?wx_fmt=svg&from=appmsg)（绿色框 + 蓝色框部分）：**

-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4dYjcUt4bVpPcubUQF0PvicOyZMRjicOCfF5FyLIuBBYXN8VY2ZF1NGtrbKsZsLklRns1g3fsiaxdXuu5eib3ZUjxxOdadhrVPbHQsKpfys9hL7w/640?wx_fmt=svg&from=appmsg) 是[内积](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247488845&idx=1&sn=9d5057c3d5e922959ac0e0769fc4808e&scene=21#wechat_redirect)（点积），因为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7lVoou4I3ZlibO0DpfzGibnqZBnCK3POfqz9EHiaPLEpRPvuHyVKf1YSHp866S996yPJATDicKhshwicQ1ic295vBf6Fd8ZPvvVu1BV3qaaE7qz9ow/640?wx_fmt=svg&from=appmsg) 已经是单位向量，所以这个内积就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7htzoNmMnVatuiaamvfVk8JbREVF8KM5wwia1ibF9H4samH1Dq3o9kAmAUUfk9k0selTcdQUysG6mcHxkaMZXSxCfFGvDQlI6d4y5htx4wIZRHg/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5kVRWP9RovvoprJd0UgdibjudL4XZCVRibHRyIMhfLUjslH2PB07HAAMX3D22TSbUj9lxpTkQ9yNJzbBmp2znSg54H1qGiaX9Y50emwQpmZiaTuQ/640?wx_fmt=svg&from=appmsg) 方向上的**投影长度**。
-   乘以 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7clbKDYmhrdXNmxFAHJCgC3K5jg9YZOsMlNFFVZgqRYrXuS6Ih14F3mIPr891USibYujnibhYCSTYticJx32jQm9BNoRO6SgHg5YmG8F3mMCiakQ/640?wx_fmt=svg&from=appmsg) 就得到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7s4wD43nQbbtAKVFMGmbLQxZtmMUqSm75AnsV9EmHM7ib3TKfQRvyQ8gkDV8icjMYMRiad1CT8u3fwB87V0cRVeNMRGBnYep61qnCO4LpTmMztA/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6S0Z6kx3DebeiaV87hh7u2L0TDt5PFWibIchqHRlzLIAc2V3icJIlqYZMAhiaico1MZfyAf1vtdgbOtU95Mc6X9POrIprTwL2grIjXRg/640?wx_fmt=svg&from=appmsg) 方向上的**投影向量**。
    
-   把所有 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qRjsKeuibb0BKAxoGP6y1F43avz8cKiat1kDXM79WD1Jo2fREzEPbq6P30lusGgS3YbDiakG9mTdibTZ413Xvt2hODMicNI9DhULuF9q8yiazicqag/640?wx_fmt=svg&from=appmsg) 到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5WDF26gRGMWSia58ib5ickMWh2MvERHGcGrBe0jyUX9rNsehu1fv4E52YD8ES0ILeA6AyjCn5dZUHWr6icp6UaePEf4RZ3kelsWJy6Evicg2LyltA/640?wx_fmt=svg&from=appmsg) 的投影向量全部加起来，就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76ycEIvIicxH2m3d3Wbt8UlmicI12cibia6iaV1icA0NysrYvnsZv8HYPw3O8hwXPmnaiceThlK9z3yq0SCTzUCpaxwC6UOC2hD6u0MOrsfrA7YicTxA/640?wx_fmt=svg&from=appmsg) 在整个平面 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM79Oz4ygqKsEDf13icaZmukTVoXx5auS0UicZHuiaNbVPEkelHUibpV7avopT1TYCwUKG36pcic0vwUfz3DT5S3icTJ07eduLNqFKcKAwqZRtORPW1w/640?wx_fmt=svg&from=appmsg) 上的投影。
    
-   减去这个投影，就得到与平面完全正交的剩余向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QP8RQXweCtMuCxYaLbdxoCbnDzoicBziciaCRKJsK9DUgBoSWicMuC9FvmkrC6OojT8PrT3GWsHGSg4ujjTlEbDxQvKw4ZWs48emoW0bicckUEew/640?wx_fmt=svg&from=appmsg)（绿色垂直箭头）。
    
-   结果：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4rr9OMcCULYjluH3KHhJH88Tt64B3XLE9FmaD3cdEqCpkyuFmhPRd96pUwpUzenGY3WR936UoQok1HkjoRcaBOLoJguph7tDAnia2P5ibov3oA/640?wx_fmt=svg&from=appmsg)（对所有 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6Gz5c5dV8Q7Fqibk4H83cVXHBRJia1sNQeian11FsMKSe2DicFT49a2VNbickjtAMz3wclflkHaVkeo85n4MRVREDkLxc0M1ef5oaBevAJZmT2ZVg/640?wx_fmt=svg&from=appmsg)），即 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5cw51Isia5ChjNJglnJWiafWysf8h0JicUlwpIMOH1qqliaN7BP3iayl4YL1Et7iaTicLMibCTiahicGhiaic9ne8UQpJYKsgQuribWbpUPSPFCcP84KxwYxw/640?wx_fmt=svg&from=appmsg) 垂直于整个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7wjVicC5B5hr9oJe9JqEia2MvwIqPajpVaaOlGL03JIKStNsvMI1A09ibnhiatmkf40ia79N1Sg5HJcyQCRe8rz14P2ib5U4wDcLt7da5HkWCE22CQ/640?wx_fmt=svg&from=appmsg)。
    

2.  **单位化得到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7dWqySs8wJNyibmDh0iaCDqnj0UlqQl1SKGFicMkxySbkWZZU2tCSIibyFGdmQ02woELkZEcs2lew7tFwR8wO06dUMcicdggCM3M0CdT8TDiafj4rQ/640?wx_fmt=svg&from=appmsg)（红色框）：
    
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qRjsKeuibb0JXQCXbPQOd38PfhAAdWUXk48uxI5YePxWyjJ4HaCslkYE2xahAwm55O2smziamKnib9nzEq3Fg0rJzF7mC7Nv0IpD2ib8Lqa36TA/640?wx_fmt=svg&from=appmsg)
    
    **

-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM77qt1APdzKXl3LowCa95hEtVFP61hUrX9SQchAl32w0mYIZAjI1a1tYg6mmDzyXgiavTvfRzhd8SX4YgibA3mbhiaSgVjOF2bCpp0VlyJSnwOHQ/640?wx_fmt=svg&from=appmsg) 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5c8icKuPZT0pZ3A47oz1jjKia5R7TQv1HIiaicPhBJkv6a9AyWKKajgH4gfk05Vt1t9OgUv9QOoVQ3EpCShia0sRibSU7Gzn0Zs9DrJYL9Fz4huZBA/640?wx_fmt=svg&from=appmsg) 的[欧几里得范数](https://mp.weixin.qq.com/s?__biz=MzkzODgwODczMw==&mid=2247488284&idx=1&sn=c06172b28f65385bc2299f87ce36ccb3&scene=21#wechat_redirect)（长度）。
-    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7W32jqLPNGIgNCZpZLibZ1yVnNpWspTc0ia4MMm871ichPYQJ5WyWQFwaHu7iah4Xr8cDoIXNNenLGRCuw1uSiat5XCKg5yiaFxM7EJxLrNknIkKOA/640?wx_fmt=svg&from=appmsg) 已经垂直于旧子空间了，但它长度不一定是 1。
-   用 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6BjQPJiaZ1WHRT4iaEetJ8gFWRX9fibF6F7MTU8icmvHRc02GKYicwsibkjKlibErs7B9u3pb1XEuEJQxFzdsZZtOVNGeoibqlD0JQyUXicRmfj6MeGNw/640?wx_fmt=svg&from=appmsg) 除以自己的长度，就是把它缩放成**单位长度，**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49COKKPVO0x9ZrWqJ3AEAvrQ8TvA1oak4snIKpscD0ibsjaNPXaXTShdcibPIvXSpSMKaeJYpD7ZhnyJbMV1K0Y9VpB69iaTKpIhjtrEbaawFEg/640?wx_fmt=svg&from=appmsg) 就变成了**单位向量**（长度为 1），同时仍然保持与前面所有 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BKSsfG1hiab8JzFJS6GpAndwqJnLLGmgTbWd99jvPMTicatacyvHfer21nnc4sZCsyvicicUDDXibbkukZPophkpSlMiaO4JbuiarLyDnMt0zryQ4w/640?wx_fmt=svg&from=appmsg) 正交。因此 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZbTW8mQ9Qkl43vtuk0JC9mYA5jGHRN2NcfLunqF9n0oo3fR4Q2x2Oia7Jnric83ydSkF4ok9icbh9ibHyEPOoxKa2NoDyadeGwBGQ5z0gz1tFww/640?wx_fmt=svg&from=appmsg) 是一个：
    
    -   长度为 1 的单位向量
        
    -   且与 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM72OIXwzXkPuTSakRth80SZ5ahxyOZJ5UCNgVicEgcgw9X1wCMlUcUlN9gS2R0ZVLauMwPeu3NS5IZrQ43f0jSFYnCFXCGRKwvDIAhHW7WoTGg/640?wx_fmt=svg&from=appmsg) 都正交的新方向
        
-   这样 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6OtISk4IlbiauQwdfWEqMRdgNp4hv8IuDicNDicO89y5ZEbRicY22bPZFdSSqL0pronlCfWG2wm6OXMyN8GQJkl4HEnTicnFuicrw55z3PQyEZgJQA/640?wx_fmt=svg&from=appmsg) 就构成了一个标准正交集（orthonormal set）。
    

##   

####   

#### 整个过程的意义

-   这是一个**迭代算法**：从 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6lKq7OgTLib618ApS8XRxqcDtj12T6ELV4UCcgZZR3oV6JCByoXwmH7cjKuyfcQQJj9mZ3ZRlSDt6pjyNQTjskSog0TVK7jcvYRaOypZwNPdA/640?wx_fmt=svg&from=appmsg) 开始（![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Stq745daCfoYCIg0qS6RsRrr9iahicwFsV8AhAcezPoYd2wQ2DdPOLExOWZV6uNHdQpibhiafNGXIGUdXIM2FS0kiaQMWKQiaW4lHsyFqI5Z8bajg/640?wx_fmt=svg&from=appmsg)），每一步都用前面的结果来“正交化”下一个向量。
    
-   最终得到的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UvWRSZEvpor1nSTkEiaDZKc0nm8ZsoNnt1Aj2WuicSeaT46BxvNofEUbQ9BuBzK1ODiaz8ooRUbqDNWfzy7lpqgt53NR04JR4KUAxKWibkDAzOA/640?wx_fmt=svg&from=appmsg) 既**正交**（两两内积为 0），又**单位化**（每个长度为 1），在数值计算、QR 分解、最小二乘、信号处理等领域极其重要。
    
-   如果 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1aFXeJQbU0QFKcFO148TLicx5yQwgEmdBmFqqPPPAcnLlxniaNTf7iazonUCpVeog4b9C9zZicEJsWDH7Pfu5I3M1vq23xWNVsXYeg/640?wx_fmt=svg&from=appmsg)（即 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4UvWRSZEvpou4BJwxWicVXJl87h64icG1UOiaFlcWM2SCQWJLn8UvlzWmansBLRibaBAArzcxo4oYCQmF3cicCvazxQV6jbMMicR9hjpTzBuVFpQbA/640?wx_fmt=svg&from=appmsg) 已经在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7xPFcRccicr2mYaO4t6eMQouYcTgPkibGIiafChGHTZ6Lia84HYTLNSfDyov0539D4weQlOvOZZZmqUhsHn2RCIaibcnj8KCv5qv5E1vymianl4kHQ/640?wx_fmt=svg&from=appmsg) 里），说明向量线性相关，算法会停止（说明原向量组不独立）。
    

  

## 一句话总结这两行公式

-   第一行：**“去掉旧方向”**（减去投影），得到垂直剩余 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6WSGmARPjx1iapofYglBnYPyDSt8hQVzOtDxsLC0kzH6gsI6LOXQH7TDMVweLgO9XiaDibI7OniaSLP2QvJVicml8n9ibTIH8Vg59xDzEuN9T82ibsQ/640?wx_fmt=svg&from=appmsg)
    
-   第二行：**“单位化”**（归一化），得到新的正交单位基向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5oz0auhIhNH5QKo9ZCk1IOZtlficVibN4gdicjIOSoOcicVd4yILUXibAdYBI2k2J2UQftialiaDwe04N7CXicqZOLRMJ84WrkZMnd6vAjuiaXmXVAL9g/640?wx_fmt=svg&from=appmsg)
    

  

一句话总结图片：  
**“把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4fL1MVt2SzHYwrXYzUWr2aQcJuLGUELpO9rsrM77Q9bcDbcA4QnWM4Wsd2ppTYnVMVBQJ9qG8TrSKtO7S0JicCGfBA9WwOFDgvs15ep7sdiakQ/640?wx_fmt=svg&from=appmsg) 里面跟前面向量重叠的部分全部扣掉，剩下垂直的部分，再把它缩放到长度 1，就得到新的正交基向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5kVRWP9RovviaU2zMXr8SogYkawDUaoKeUE4rBW1r9cc5oKIr1r7sMDGbS4EJibLhCOqDRr5RhBnxB3ZkicvDKnKz8pYtMNCib82CK0mhEFhOz3w/640?wx_fmt=svg&from=appmsg)。”**

**“前面向量”** 在这句话里**特指**：已经构造好的**标准正交向量**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM57Oiah5NXCFGbdLJZZDSpvibUXvNMm2Cp6ia9VibNTYGFTBBp28sYKZETAle8FfNpgsjyicl5mRs0PR9SemN3L6AVORlSSFPRPRtHia7W6VDib8sRbA/640?wx_fmt=svg&from=appmsg)，**而不是**原始输入向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7rlLBz6JOdgzaTnzoGrRxcScfgusRaldjrzVmuWbwQGgLqiaB0cdTVgyWb6raQIU5mpoFn7yNHSUylb6NYqWEwiczrlAWPcdPT2cKiaq3xCdOPg/640?wx_fmt=svg&from=appmsg)。

这是最容易混淆的一点，我来一步步说清楚：

### 1\. 通俗说法 vs 精确公式

你看到的那句“把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5fH5dgNzAQgvHIgvtghF9ZFMSKc2d4qv6f5Op8BunDc6ulNUplWMrkR8cCj9MLMic1NOicEC5YQFOeV0x6S3iaTaia0yuuibYDeME4QFIy7R0OSng/640?wx_fmt=svg&from=appmsg) 里面跟前面向量重叠的部分全部扣掉”，其实是**通俗概括**。 真正“扣掉”的东西，是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4dYjcUt4bVpAwldI4j95zPRvNB0DQZs71I0qFVpicuuU4tkAEmvnHMvaWcOIHQQgKaWuzcU1bHP0GDVg8qtmoXNlg51rR0vrUBnwpulibVRabQ/640?wx_fmt=svg&from=appmsg) 在**前面已正交化好的向量**上的投影。

精确公式（图1里的蓝色框）：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM44Udt4fPk2ZLJv4RaggeOLQpHKDxKJMntbnyPuVXY1Fg5S58wnVcdkGrzLQvbaPncZ3dRjGe1LdIvBFkLIQ2B6sWg4SwSoJpicibKeSh4uhAfQ/640?wx_fmt=svg&from=appmsg)

-   这里求和里出现的**只有 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4uhpvNumRuwgLQnf2nPHRQnlCEhPnicPXxocm6M5AJN0s2sFQJmic4hgyZgO3Kwjw0AGxIcEwODOB9BXpdLsaIHqs4qicBdtTeYS63KPHaEcIOQ/640?wx_fmt=svg&from=appmsg)** （不是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MNhGOibicRKNffgdf07tf8icHVzy6kq06iahWVDr0mMj8joQRSsGnrumAwxKEDz5891pnF0muE9etSWbiazlv8BicbPQYTdA91jFumW4QDLMyNibVQ/640?wx_fmt=svg&from=appmsg)！）
    
-   所以“前面向量” = ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6SyVDuzQicUjhF4CjvPJPWqk7xSVRStyjKicn9pbicicysOkzpjMbucIKxBGyTMtsTehwWDvia18WIl3JsGYqCQeOE2eGc4ibnEM58v3A/640?wx_fmt=svg&from=appmsg)
    
      
    

2.  为什么必须用 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4qfYABKdicCd9VtYh9Gt8zF7gl4jg8OPVuVgdYrmibZ9Fphhqaa9wuvkiadEy1vn8owgjV1mKSSh7guoSJHxvvibhxuX87AYic3WdZVk9QFS86ibmQ/640?wx_fmt=svg&from=appmsg)，而不是原始 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7htzoNmMnVajuEru6cObDgU528KFtPk7ciaslKibT7eoz1IjmmUOj2t0LhZYrT5gk2hhsQHvOxyurhicTvNFjf7knicFgUu7zE6PdLwAwLf3icYHg/640?wx_fmt=svg&from=appmsg)?
    

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ApdIhFTtcLGyRoIJBwhkicLHyCic2C0D1YYmkVBWttdlY9EylDs7mYfR5XTWDMFGZt9oK5pgaaGewKhiatlrAK6C7nId3e0cjvvvBFa1qUYQWw/640?wx_fmt=svg&from=appmsg) 到![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4jHiclRic54lPkjmWs03pIy9xb8RfkEIKIic6awgIIZnvU7vYKcK5w6E5UNLHiaibJPy29Sej2eLeYPE2Rm0vIwnia982ReBdHIlnwqRJWNatic7tNw/640?wx_fmt=svg&from=appmsg)可能互相不正交（有夹角），直接投影到它们上面会出错。 而 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7CYibrv2aiaaoApbhnDwzYvNuJXleW1Bkk1TdkFUibFtrSvibEia2rJFcfKeEibwiczYbrMQe18iaEuGqawo08x20fYtUTiaguge1cCEpicichZ9yXzLfeQ/640?wx_fmt=svg&from=appmsg) 到![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76zynp09iage1yRk8U3fAlTcNBq7JnLojicicnibonEibHxDFIgGX732aAEZtauE35reYlwZUE20Dqs1ibmresY7joUDUy33EHY34aOCBWK5KPRd5g/640?wx_fmt=svg&from=appmsg) 已经是标准正交的（两两垂直 + 长度1），所以： 内积 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5g3Is0B3gxEG4KicJqTmsphmsS2VBOq10MwpEJsUqq8jVWdiaDN15n7raLFxKgjn72DqyWydyiaF3QMDibVyrnia4aVOqOC7k5TqOGxiad6hXGjibiaw/640?wx_fmt=svg&from=appmsg) 直接就是投影长度 减去后 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4rr9OMcCULYlibyc8jWwtMU6YCUp5vybG6YJsJZicKiaZ5TvPyicN3QU9XcVnXZswIgLGPM1ibVS23CCfaYfMHJgnyVtSF8LfKrJTlaGBty637qAg/640?wx_fmt=svg&from=appmsg) _自动与整个前面的平面_ ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xQGuEfqhe1UO0B4fDEcibrgViaYiceBs7oxZ3tEC2Zgic8JWwVCtU9u8DKrjGp7eopSzEEqJ0gIlmpwXcyJJLfeibuRbKXBcMhBIw69WP1531OZw/640?wx_fmt=svg&from=appmsg) 垂直

如果你错误地用原始 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59Y0c1DY3KbCPDcfib6SHcv4Kr8icBiaABYnmj5dwonPzJxB6cJKI1jhQJF2ppr8NLgsyr3PtSXGqxv1Dzv5HrPNGEDFmIVGBlicNMNjO6qRR1Bg/640?wx_fmt=svg&from=appmsg) 去减（古典版早期误区），结果就不正交了。

这就是 Gram-Schmidt 过程的核心几何与代数含义！

**三维 Gram-Schmidt 正交化例子**（完美对应图片）

我们用一个\*\*3 维（x,y,z）\*\*的具体数值例子，把图里的两条公式完整跑一遍（Gram–Schmidt 第 1、2、3 步）。

我选 3 个“原始向量”（它们一般不正交）：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7wjVicC5B5hrib63R2uZVEwhgtyLBpRzIga8hZavWbAJEEvicTq6eunfqp4jBSH498z8tOTKHgyv4gb97BViag0fda6CA67qXfw80icQNKgGQN9Eg/640?wx_fmt=svg&from=appmsg)

* * *

### 第 1 步：先做 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ueMzutJ1OF59pU3pJuZmrNh7NaF1yavvriaERC0xib58kU0DgsAl4NgJD6ErHic29Eu67rn7tbdA70FRKlh48rE263yoVJFmzyk3peTfLlFCnA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BlDic3gnt2ZVqUDviaJHdBOnFB22ooFibsbzubp9Q3j2OG0bdEgcbeEvs4k0dEMuvpSMxKg6N4wGJOxg5mxiaTQ6trENyzekmbl5wUv4z6pEicIA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5tkN8KKOqt9eddvbFA78OX72xA5PpPZLurmjcB0QKpRhWucK3lAPKgkjb3P5niasD9AFj9M6G6CqFJWpVWCqBFpictiaZMGg5h4I1kh8xAH1aFg/640?wx_fmt=svg&from=appmsg)

* * *

### 第 2 步：用图中公式算 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MPibbZWhOZuNC19gX125xiagBgckKU4yEhX6Hic0bJRlbficwBM1WPa6qpaYU9gZbNvSe7HIPanWT7nNQEKR8QKnCPaLj4zYQCflKB7h6Sc2xHg/640?wx_fmt=svg&from=appmsg)，再归一化成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Asvuw3hPEXe55ny1hEGwPuXyosz7nicEJPunfu464eeyRNz5eiaicaUvIbUfUEFVZUeBu7HtyMBscq45oKpCU2HlIey8UcNLc8poeQzzP1bGUA/640?wx_fmt=svg&from=appmsg)

图中核心公式（这里 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7jHWm6rIm47NLasuxOcYsNicSfxtFr4TpHbR79pO69dyQDrfdTL6zxibsI4bOYIO5kS5aDEIBmKFO1Ba3YEt3Zqd9slVpZ6R9KBXMmmjONRrOw/640?wx_fmt=svg&from=appmsg)）：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6x9iaXQMpUXWvBiaicS6v2GuvmP3rLt9th4lJiaDRIueAc3zA82ZpLaknViavdjQSqGnStsZdAwI7FJiajtsul0vTHt4RdhRPgVbZIwMZuU6tK3sxA/640?wx_fmt=svg&from=appmsg)

先算内积：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iblhNyfsNwBds4pAwxMgbbdzQJbWu8nDHiaibXsYo7uqicTVemZibKJNNxtPriaDfNHFyVb0Rr4D00AsTyGP9DBmgqtIPnib2MIG9ejDkVbLLEm8Dw/640?wx_fmt=svg&from=appmsg)

投影项：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5LbPL8icKNxbloAJkTxr1lfmG6lFTMnO03N8AnR3uRZBROD3d5NY6kznpRbruR3YaZmwZmRZdWRDXC8ej74pXndxS87BKOkORz0eZZ9xwmSYA/640?wx_fmt=svg&from=appmsg)

所以

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5dLqf0dvXVaBTVXhlmyGs2q20hDKBVyfNpEfF5w0nTicsVeE5cficADcyJPdT8fQYiaC6Eu5TMw8sFpEtK1wykC20biaegrLSia6xp60uXBESurjw/640?wx_fmt=svg&from=appmsg)

归一化得到

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6swia6Hxbp7dMVqMpmoPjAykUYLHTFrXCiaBjvYgE4eFI2DjN9Oy1S7HmleqAFTSibcuVLjjDH32K2icU50qicG6IuKoxeNuicGDKfblP1uU6u9JUw/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lelJxu6icj6ycA87UdwEoOf3vrCoEmkBBBpSibNiahlh8ibS5X5Xh1ORwHeEicLbbOWoZpIWLIKZKgBB4wkHEpt6qeBc31ty9l9DatVFKicNibR0pA/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6EoXJIuKFsAaVWzU52RLe93LO2BOuuCvoUPJYOYK3DCaicyIucZzJHVzqib9micMP4rHukRVTaCriashaPahiacqAKvJT3ohVQ0DUVUEn9rNQq4GA/640?wx_fmt=svg&from=appmsg)

此时旧子空间就是图里的

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4LrbSGAyNks1yn4vOiaqfbpSkVSWicSq7d5CfLydScHicTrBmLHfsq5vLT1ybl7yZ1IJGtAEozNUASIMkuwrstxl72dywFMtm7yibgSG0icDN5kOw/640?wx_fmt=svg&from=appmsg)

* * *

### 第 3 步：用图中公式算 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM70Rdb4ngSBia57tpU5oRbf03Oia1GyvqNiawbf7uj7GBGMkLGzYp9hKFS3Zp81MNhdicFI5gcibdFLButC1RRZrn6ewBl47Ctgae4f7Gw1gnwvFrg/640?wx_fmt=svg&from=appmsg)，再归一化成 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4WJN4xKBxQibEiahgvoF20IQ8YgACwgxgf7xV8Q6H8UUk5ogPbnEeicSfcjHSrzgGLmGxT5UyX5yiagys2z0PvPticbgzsdDKZx6Kzhicickb6j3r7A/640?wx_fmt=svg&from=appmsg)

图中公式（这里 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6bx0mGtWFw0fOl58I4G0q1NGug7lxbZf0Wib59T2mbZDOxraJSvf01Riad7NWelbPDIAGS4VxOBhTUICkCZMl3x2q8klalhoicFvcicwvLSqe2Lw/640?wx_fmt=svg&from=appmsg)）：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7SxMowpq8WnRXJN50ZX3EeGAh7vFUyzbwibRYUgdR6h84exGUvuibBfr1Dh6F79WfHIqamKcOWXOIcDjGib29OJfZodf243El3lrQlpuw9YSiaNg/640?wx_fmt=svg&from=appmsg)

先算 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6QqL4jGFNMAHdMNgEy2xTeLmMLAyNkicicYpWkJBw7cQDJ3sObBXpLMxMDxCVL7qxAeKPdRd2KNSVBWNlf1NVDZHVjjFcqATyeBX2BL0WERBPw/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76ycEIvIicxHib3dp8ojF2tRDUsRxQegjCw4WvgVBBstTwH557tJHEaXpZrwzTicxT5ryhKaRLSgynJRN7Thtib9YvZlWQP1pAsHVKuL4xhraMCg/640?wx_fmt=svg&from=appmsg)

再算 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7yDwToTs9uK98oUHpCmBlt4lQ2KebYccs7FSdZqyM0nWibEJoUu95LibicD3Bbcbwv1AIj5jmcI8C3RhnDAxn5wfFNclIhmTFARVmZVicdWO81YQ/640?wx_fmt=svg&from=appmsg)：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1RLPplo0ibqSKgVf3T152utVDDUS5DH75dLoEtI2AiciaX5L2OagAWticDDGXBHIPQkxx8OIiaCyB6YalEDYx3G2N3j9lUNe6MVGpRg/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7s4wD43nQbbnmDmEniaB9y0IuicKObAytJx1IdIKpibX8CKtDdfZWzo4yD5GiarfwnWW7K6FpcibPWTR0AD1UWacShJThLkMSMswTP0O9GdjlEBCQ/640?wx_fmt=svg&from=appmsg)

于是

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ZCQiaR43Tnbn4HdYOpccggu4Ra9ic4HHB30sWkgVZy4ic4OUnjgN9Yhu8fcIH7h1Gh3vTymUsNRAibdTe1X8pyWPTkdsx9QDCLB8S8JwvAibefkw/640?wx_fmt=svg&from=appmsg)

归一化：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5qRjsKeuibb0EVejtS45IdmIMQsgnR2k04eibkuwvdPOcHbJGib2g92zDz2lIwGn35LAic0WB4JiaGd9L8MB8oYJMxfxBUl4pQpKPibRQapiaXGJ7Cw/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4JoaxyME8bLUQbqxljiauTdts8q2IkcG7GPibsFXYqRUw2ULxiaY2R9iapCghoJO1ymlBNTbj9ycyZM8lzLwGkl6ibxCbxgic710NibJXickSicGERMXA/640?wx_fmt=svg&from=appmsg)

* * *

### 结果在“图像语言”里的意思

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5akIGuXt0smn7HzQibBibY9zxdF9T8l40dqozW11In95zSgPia03HsqxBlibx2cs0hL4ZDhCutVl8cDmWof87HD095Z1gsspTXeDYMUmPL86McJA/640?wx_fmt=svg&from=appmsg)
    
     是把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6PqIkrgdIQ4lPypL7ss7TWLRUUfwsabOsuIOzGCK1nZGxicPf5lzYnUzojVuXEG6MyG8sluwF4Zy8MXmZCibhTVibf8nYymPZRLa1RODVIicbudA/640?wx_fmt=svg&from=appmsg) 在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5kVRWP9Rovvt2aBFpz4YDXhtuSPueUTAez4pibwWneHkwejwQMmicok4mlOdfwhRHvXtqiaw0Xn0K06DdYDHHs9XJcv487QkfXqwKydqCYiaPibVw/640?wx_fmt=svg&from=appmsg)（旧方向）上的投影扣掉后的“垂直剩余”，所以 **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7bC9qNz3FCQI2o5vwkcB5KltTPKib3ZFFVPTibR6kP22jgIaS3phT67y7HskWKLQNPuia7Ucm48ohuKnicic0AWDufcdCOZrTGxpN5upKuLukOViaQ/640?wx_fmt=svg&from=appmsg)**
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4r34Xgnpic4og4sVTZGfgghPjk9s2CfHrxhtaeu6RHp9SmwLcDGiaSu6FNf8ria9taO89R4j2QejAZRBpDw7plfGG3UrgRwfoB4UBxjZUnzg9Ew/640?wx_fmt=svg&from=appmsg)
    
     是把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SHd8EOSDKHz12406660yv4C0Kksppo7tatLJMecNaIGp2O9PF7eNlTrDx3Y3a6D89JcOvkK1teaA1bmZ2UCnvRH0r9WG0lfw30NOibHz9v1w/640?wx_fmt=svg&from=appmsg) 在旧平面 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6QqL4jGFNMAHghZkcq8qnLTPeHDiakPb5Yhwkcib6IMYLbaO2b4pT0sqzoyEM2ZRFRsrZQ5T6HHxlgtYfvmKv8ibzrRwGUxzcVVDP4DthmOCIMA/640?wx_fmt=svg&from=appmsg) 里的投影全扣掉后的“垂直剩余”，所以  **![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ZBo5DU4FNRX7Xa1rXKKU7aV1iawSBhwS0GY9okG55N4qvGOIkI0SEBbHPFGTnghO94o9jYmiasicWrU4hZcp9vXJVfJMf4xzGVSzQicPhdMnbZA/640?wx_fmt=svg&from=appmsg) 且 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ApdIhFTtcLN9ZzxK1KsjO0SD84Zy3nWC5FrD47ztwuPGFmP1MUj1zCU8AKxaVvn4hXaQLZTd4T1UPL4r8ynlMkg4S7VMgkXh6uIAGPtOW2A/640?wx_fmt=svg&from=appmsg)** 
    
-   再把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4vTia2nxLicRY87cic5IicJiaIeMXorezsHVwiaMgRKsQzujpZzc5mZrJBMzIlUiapgAyhK594iamsLxEbAZTV1dQnjOaKjSvKGIibu96wBYp6iaLI7bmA/640?wx_fmt=svg&from=appmsg) 除以长度，就得到单位向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7Dq3yZNU9R19y1OsI3c5Oht4Ac4qRyicfjFTs5Driamyr79AH29xm5RFvdvDNbibOdJ8yiaS2zTsS71DpXc9RsGgicDzmXNtic2eLj7s1hOJGkh7rg/640?wx_fmt=svg&from=appmsg)
    

  

下面是一个gif直观图：包含

-   原始向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SLteL05jHE3ia1SibhaQeZiczr7SZ7L4fvP131BnvHbuVXiajliagQVZrHgeIVrrEERzhiabrzarKkQh6zicdvJRvlwtbjrpTqr80M01h5vZYAJbxQ/640?wx_fmt=svg&from=appmsg)
    
-   正交单位向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM44Udt4fPk2ZGibzxnmHM2EEWvZqWTCQQxfkzR3XqTp5ibFkiciaHAWGlCX3a6LkaJuIFaeffz5ctp4Ac6dwic2QTHP5LokuZVsKJCicRvN5MdMRk1Q/640?wx_fmt=svg&from=appmsg)
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ic0wPoofj6S5ichgIwtHXuLyHvqDQOVOiaF5fuhhBcseYSUJtc4G7sVCibwHG7SGAecJqUicsXESRD7QgIYJuiaXnRyXeUrSOibQvYUsIaOXKnffRw/640?wx_fmt=svg&from=appmsg)
    
     在旧子空间 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6xQGuEfqhe1ZuFRhcK51vQWqZc0ThQiatNqaIZArFQgqqTWCSicTIQwG5bcWC2WfOgAEMvqCC3Jlvs7eoozFr4g9d37T4JPnYqfhaLGPdv16og/640?wx_fmt=svg&from=appmsg) 上的投影 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5MPibbZWhOZuPFh5iamZadWtlH3RSwdWwibHT8rGazkibVonlrkjBPX93OYVZeF3gLpCY1rHr4viab1w3ucPpqksmrx2D20HicHQYz1j3aYIJQrq2g/640?wx_fmt=svg&from=appmsg)
    
-   正交“剩余” ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZWvUDD9ambXq2HnSlcUWBKnstJiat3kPab9B1jZlf9WqicY4MxkLJQ7dKDEX7osj4mysTk9X03u5aoycVia8iao2OYkytLb3sobtY2LHX1GfcQ/640?wx_fmt=svg&from=appmsg)
    
-   以及平面 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SdW9smE0CocVV7Obf0ejeE6geqxJBPaRx74p5PL27RboNITPI8RrIymXDVuiboK5OasoBJntes5Z4HJ7jxQbX8sHKPuKlZ4B0k4eWqpVDqbw/640?wx_fmt=svg&from=appmsg)（半透明）
    
-   每类箭头用**不同颜色**（原始向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IZWvUDD9amU2I0J0ulTQdaicV3heP673ARh3oejibVWo6o9e33gWJwjkNKacW6woIpib0QRTwicDWdiccyqd5qjfD0Tpupibq2fle31x8ZG0O74Qg/640?wx_fmt=svg&from=appmsg)、正交基 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM55V7C7hCRTTnJ6LlcPJJWsl2r41vHLPiazLuHdeRpNfWMdrFHaRFRiaFmiaiaedQlJLTOWuPicRQ9dBON7u7blZqYnY1maFFgHiaC3rjPXBdC1XgkA/640?wx_fmt=svg&from=appmsg)、投影 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4I4Awoic9CauyibBN7I0Lp3Wj2AvnmpOGCbr32uKJgh1kWqFiayGCyNYtVSbffeoNjpbvrFkQcuPjJwrmkiaFeced6PUkGBbXZCYpckB5jVqI6xg/640?wx_fmt=svg&from=appmsg)、剩余 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7htzoNmMnVauniaVMkOF7YCiaUp05zcWbU4JiaoK3MRRcicBCNXArN1T0wgRX1Rf7mFlfKOjIXGGpeaV6CSPicmSUNnONibDgglW6iaVJwib1K0Bhsiaw/640?wx_fmt=svg&from=appmsg)）
    
-   做一个**旋转视角**（更直观）
    

* * *

![](https://mmbiz.qpic.cn/mmbiz_gif/sVzeakRoocsZHhojjQQWbIV0Hre0LkvmkYYTSjqgILXib5H34wO81dTiasdzp7nNIG4tCuRD38UQb8X0ouBjS0gBV2cHVhVibduQhSN3fSnMVU/640?wx_fmt=gif&from=appmsg)

**图2**

**Gram-Schmidt 正交化过程的数学原理（严谨版）**

Gram-Schmidt 算法的**核心目标**：  
给定内积空间（通常是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7icLwbuCKDhmX5ibhCNHrgTjSyCpeE8qmGtyqJbPkJvJEDtEf2d1xd8cibSYvyI7PbWRUrtIpx9JlJ0ibrsCkI9sGaBwmic0KzxxCOWqOnf5iaXtTw/640?wx_fmt=svg&from=appmsg)）中一组**线性无关**向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QHFfbpJaMPURMwIAsyEZTamSearluKlCpEVhamkGkJoibPP6pGV9RibNrmRSOAeDCLKefV9WzwW3PAOrwK27aQT6I9vlkVPuF12g6X4rB592Q/640?wx_fmt=svg&from=appmsg)，构造一组**标准正交基**（orthonormal basis）![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4QP8RQXweCtGxXJMDsYqmTtsmWJycSA4mp8e6TBFH0GiaVgQ2JWibJNs5IS9VOlSnVTs4APLFg8niaQgmEIcBic4O1yzHbcYN0fic1KDPSsDRxgzw/640?wx_fmt=svg&from=appmsg)，满足：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4d05bFrYWZMNia2KqbraXvHf2ELF8viaRzYg83TZIezSJJBbkaztleyTsEffuwEINwtvNjJVywxGRo3iahZcEXLOxnFdNk8swRZlM9ISDDnQQUw/640?wx_fmt=svg&from=appmsg)
    
    （单位向量）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXg4BbAjvtXOnQibCictiaK7tU6LfPAgTPNLiczR4Nv0UILTCNYW0ias1ohqQx1ZWMoUiaY4IDSiaud6QKM9PQQMwjyo8KRTAQYJ3rt4uw/640?wx_fmt=svg&from=appmsg)
    
    （![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM78QADxv2WDIqVM068tN0YyFQ2VdGzm4Dben3ZqzARoggtzdauJ2SRSEYYU8icTCmKozQvdtvHUh2xPwLLbwawLYd6mworDUdwr4YCibSA92sAA/640?wx_fmt=svg&from=appmsg) 时正交）
    
      
    

#### 1\. 算法递推公式（对应图1的核心）

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7wjVicC5B5hrxNdtkQhPNFPHwrT5Z2Bybn8qoQB8O3MQ6LIlq6Oicv28cZRHv4HXrLg3sbLxLaR4ZMEMYvLuLEibBIYClrBONbc8iaQzy3DiajJHQ/640?wx_fmt=svg&from=appmsg)

#### 2\. 为什么这个公式能“扣掉所有投影”？

关键在于**正交投影定理**（Projection Theorem）：

对于任意向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e55iasTgibFvQumsV13ibgxQsMxBWkyZdRianZiag9RTq6RpvycuibkGUutQQAb7NGCqKQdGSwq6H5sWSDpgfqZBuylBmRt6SRAzVVXDOEFJ5mrrw/640?wx_fmt=svg&from=appmsg) 和子空间 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ZBVeyG33EntoB7sQEzoCrKPiaBNbHSzichE5QtqyZ3PKrLHuagsA3ZGAlaZxodW6HLG8eIlp47q4OsdGTyjRlKvGIrwYF2sldkHXjd4Wta84g/640?wx_fmt=svg&from=appmsg)（前 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6x9iaXQMpUXWsUrAicjDiaqZqQa6qgO9hHicgWgxE2KoF7TibIABt966qCR4v2lUxO8znsaCRtEtkFV9hACTic7cxDM2S8TNGThJoCs6aJpFgqvRYg/640?wx_fmt=svg&from=appmsg) 个标准正交向量张成的空间），![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7e0Nrdvf4JL7YDHicD8mueibhLuJUZN5lqtvvSicjo9BOAcX8rsiaRZHKIjUhibAfgOvLlR90vuDAlmlfcoZuBFkhbTd8SUgQjXzGVCa5FmubbgmQ/640?wx_fmt=svg&from=appmsg) 可以唯一分解为：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BwoGShe7pL5ib2fY0f5PicD3DIDhFy7tiahWjKW5N4t7zyn29s7J7ibxQpWtGDKuu5A4RvqYJOEsUhiaeIcVDUrvVL6IaHn4b2fIRg2sEOl0U2UQ/640?wx_fmt=svg&from=appmsg)

其中正交投影的公式正是：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM68dL51q5Bqicff13H6a8omSXBhGkwCBfT2KmM5U9bA2C5UjAPicKGrt9gmSOZQxu1K5fGfIy0kvicgfOQ9QyQaia1yOJuhPCCxIzA1dOy5vYicIxQ/640?wx_fmt=svg&from=appmsg)

（因为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7yDwToTs9uK2Dxq7vkP5QjDyXcjLZG2bWe9qQsbAXC4eqgVaYlRhEqVdbyjYUw1GeibFgu4bQOH3mrCJE23fSEZKBRpLx5QyooJB0El2tTuRQ/640?wx_fmt=svg&from=appmsg) 已经是标准正交的，所以系数直接就是内积）

因此：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7TLc9ke2ibYmSZU6NKmumRl4y1fI5pibGE9rd1Jjibicebicja7WlwE6ibycpQjY6lGibyy7ShnIH4J2BIJ4DhnkdYmtYxFIFrTBuGY8zqsLnO6uZ3w/640?wx_fmt=svg&from=appmsg)

即 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6tg6EdJofI6SC9E69Hb5gV3rSvcaKCA9iaQlQiad77Ru4UU8OfjZHiaM03hV3lDwchn1icibiczD5pickia8ia0Hvhdx5bvYc5Gx29iczKZHUHUFbfYBoQ/640?wx_fmt=svg&from=appmsg) 与前面所有 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM73fhc04sUsn9QSy0iaehnGLJ1ey9DToQtHHApibVQlO0EUcQSF14xaz3fmfAVfWIxLlkppIbnSYMo7Lh1TDLQ0xv2cWxXrBwI8BeeLibL7tNl7A/640?wx_fmt=svg&from=appmsg)（![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7wjVicC5B5hrwqjw8JYLWdE0VDvTwUchPkHicTbZMSyn2eK1UZsTkQOVKFuLu3lpOIQ5QjiaZZ9yDwib6vRhMRSCf1plaJ2uCW1Mvicb3ibKdZyedQ/640?wx_fmt=svg&from=appmsg)）都正交。

再归一化就得到 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BKSsfG1hiab9JNuOVS5ejfEbnrzNKCuLvoHjKOhIM158ye4EEqVl3SDylcJsZUSlsZicuVjTHqYrkxFMh69TmRz9lJoO4MRiaFoLeBUK1kjgwg/640?wx_fmt=svg&from=appmsg)，整个集合保持正交性。

#### 3\. 数学证明（归纳法）

**命题**：算法输出的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5ceQCHhpYR1M0a9ZVefGrkyKmWToqtklzX8xiaCpMEaBxwo0UKq1ocgsFYt4rCGrZVWLFKeKicia4Xicf5xroz66bM10T2luHqT8THjPFR2QemGQ/640?wx_fmt=svg&from=appmsg) 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5eyHe2Z8OrA2SPY72bABhO9r694iaQvB5Ir4dIvSsdunr0lmOYHy3lEsSYBr0ia74mdzM24tOiaiaBBLJFdrico6HKoN3ndwdtORMzUZvnIRA9BgA/640?wx_fmt=svg&from=appmsg) 的标准正交基。

**基情（k=1）**：显然成立。

**归纳假设**：假设前 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6pHamCPY4Rvm07mEGsHoyNWXLpEj0TBBeKobu3MaJhmtb9iaj8f6vMafuYpiaMRwsBetASkGIYPZvoLNSYy1pvIItCmKWBWo1ibTXl9LCPZ0HFg/640?wx_fmt=svg&from=appmsg) 步成立，即 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5cw51Isia5Chpy2AtWc4zzic9CNB8InYZKdOaA7ZQRwbpuOkoVtL6YAQNHibdSvWa7GyKEFpDQvJbwtBopmfbOpNwTvT6wpx74aWpXxYGe3zQHg/640?wx_fmt=svg&from=appmsg) 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0sUzrZibdP0xiavViawrbXXcDEE0qng3ZOYcRe6xqewCGyACwicbgZ7Qcyw8TsF5MzXdwJvjz92myn2cnvabgpVyBdLKm6bqL7DazQ/640?wx_fmt=svg&from=appmsg) 的标准正交基，且 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6SUCiamBy4micrdQBaMicRUAricjR1zQowLmp4LzbibgChxnCicx5ufpxicLXhWbCUchDGibOrLWt158z7IVJkbaZ0Fpb8jv0pMRbiaaCCralbCu5icbwQ/640?wx_fmt=svg&from=appmsg).

**归纳步骤（k步）**：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1dA0jmP0fYJ0yIHv09fMsGjz5YkZbmIPicJSUreyMfd19ULJ832aTGNhOwZcYIMdOCIPnMlUcJiaMyLXJmUI7ddU90MU1XlzRYCQ/640?wx_fmt=svg&from=appmsg)
    
    （![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyGib69DiajyNgM0Jrem274eWqURckb4plRLn0AbkicW3XwxxN0Nnu2EEenRAeau2nuc1wP5JAjhdzEAymtibKaP0VEBuHFHBibEpiarQ/640?wx_fmt=svg&from=appmsg)）由投影公式直接得到。
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7bC9qNz3FCQGeo80ricMT7N00uCUYViaOYT9HJmzfZ17icA9cBN9eU2HQWcEeLgicHxxicWicjff2GwxUOTgG7ldWibaJE10NTSCUaK9rq1nictn3Pfw/640?wx_fmt=svg&from=appmsg)
    
    （因为 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5fH5dgNzAQgpLhUtibFmaicriasQzpEiadwQ7icLyWeRUmbrA54Dnhye5FXdicInCiaV8KBJGFKTNnB4CAibR0uowSHsE7MuNWmpyXRS4lnNV3mEaZdw/640?wx_fmt=svg&from=appmsg)，原向量组线性无关）。
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6MeUhVoicjgoqQDDJWTrDQGlGqvDVXfumgPAqhNPJC64avxBkuoWjvzzBzKSrJsvoNCV0e6jhm7gxNLU7gjibjxsO8Y5wfX6q4icU6aicVfWBYTA/640?wx_fmt=svg&from=appmsg)
    
     单位化后仍与前面正交。
    
-   线性张成：  
    
    ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7IficYiciaibWZCnFX7F3vU3iagrg3p4xOgXSia6BcPNCszTiasCw6LrvklKRgVVEic8cHMbVlEgBnzymuVXEdrXhLfEOZSyrlWqH0IVJOxUg4HyETfg/640?wx_fmt=svg&from=appmsg)，
    
    所以
    

   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7vaKfsG2a9ZbMsynib1LzBPyMN4NuRw6XPeB18NfSO4du3p9dUnrRpXv2ObjT9ps7TqvgQticwKRFia91YDSYRABAHyzPkiaJhEmdicwZ9ic56S4ZA/640?wx_fmt=svg&from=appmsg).

归纳完成。

#### 4\. 几何直观（对应你看过的 3D 动画）

-   半透明平面 = ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXoYBxRH24dU0NTl7dhwVyZFAicDxiaicGX2yh0CHXeYfcC0zDSpFicrJqyHdN4RMYbkxiaAKuyXAYHBxVGNnN8RLdYS6OIZjMfCBCFg/640?wx_fmt=svg&from=appmsg)
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM72OIXwzXkPuZcjMtAgRl1m5HtlI1CuYDk6qUs4LjialZ1ZqppFbJydHdeqzrdEtRm92JibEaq6EVQQhwhetIiaZUxv8qFHqZAVSLQczhcyryHbA/640?wx_fmt=svg&from=appmsg)
    
     落在平面上的“影子” = 绿色投影向量
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4qfYABKdicCdibtsUmmbsOE1AHHGvRfXDibJk6SLZW1Yv3Jia4w5GFc0cibZWrib8WDnY4gj9zhIGCIBtpylJiaPgwSkJhEpiblNSiczsSA8jGib0ZIMlQ/640?wx_fmt=svg&from=appmsg)
    
     = 红色垂直箭头（与平面正交）
    
-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5kVRWP9Rovvocf2vy4IccpgEjeKderNuPq1KNfFMgCLphUKFIlNTt1r1OWibdGbbLDs5iawqDl0F1vLXCw7nkg4ASHq865icpS52J0iafUbgxniaw/640?wx_fmt=svg&from=appmsg)
    
     = 红色单位向量（沿着 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6p4oXZAbdt0iaRHO2PH3Rotwn8DDDeQOoibP40z7iadibAr0kiakwg1GWrGI54kd2ERia6P5dm45tYMBG2ZSjVqichCibdxXgYbGQ7kSw1Np76LicWhRA/640?wx_fmt=svg&from=appmsg) 方向）
    

这就是你 GIF 里“逐步出现”的过程：先有原始向量 → 显示投影 → 出现垂直分量 → 最终归一化。

#### 5\. 重要性质与推广

-   **QR 分解**
    
    Gram-Schmidt 本质就是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4dYjcUt4bVpNfObhYwcnOnyGTkDNw7JfA7VcOp7p817Kj6MEgKKRqKWMtAOASXo7kqe8CCcRib0opekUiabq5t1CUUO0xALpFu3vATxUVicneQw/640?wx_fmt=svg&from=appmsg)（![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM539s653260mgV1iaNcKcICJWp5QJhXuJibian3Kjylj7gKrSiaVDQ3otgMCvTCPibhUDE3A5f9OtWtoIJ7VB1G5tdqKsF5OicliclsVwkOSyxZuGhCg/640?wx_fmt=svg&from=appmsg) 的列是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5oz0auhIhNHwXDeLkjrsTWJ4ic26viaR2aicVwdtygiaJqyOEQwGiaEN5VJCRZHNU4arybedhygqUBVOA4hNGKSsgpicnicTVjamDSKZEWmFdtCUoLg/640?wx_fmt=svg&from=appmsg)，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4bR9Sxf41Tib3R6jicb1dseg8DJkwqzY5TYDAI8lFzrwj9LbXchibYqHUNzElnOG9mvxhtpZeVAAd4OjIHssAXst4v7JiaRxfHcAwFNBkkFtTO5Q/640?wx_fmt=svg&from=appmsg) 是上三角矩阵，记录投影系数）。
    
-   **数值稳定性**
    
    经典版有舍入误差积累 → 改进版（Modified Gram-Schmidt）更稳定。
    
-   **推广**
    
    适用于任意内积空间（希尔伯特空间、函数空间、傅里叶级数等）。
    

  

一句话总结数学原理：  
**“通过逐次减去在已有正交基张成子空间上的正交投影，得到与子空间正交的新方向，再归一化”** —— 这正是线性代数中最优美的“正交化”构造方法。