# 三相AC-AC PWM变换器系统的综合评估

原创 J. W. Kolar SiC碳化硅MOS管及功率模块的应用 2026-03-05 07:04 广东

> 原文地址: [https://mp.weixin.qq.com/s/50\_cYy649jyleJyHCL3Yhg](https://mp.weixin.qq.com/s/50_cYy649jyleJyHCL3Yhg)

文章来源: 苏黎世联邦理工院

作者：J. W. Kolar and T. Friedli

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPvibqPmkfiawMAs9YknONt61HnYdWdPeSKCxSZwguxe4BQ7xKjlJFDhOHiawBOAauwY5pMVK2TjWSmRGXgXbrlKXScmJrzyGE01Y/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMnAgdcmNDfQTAdtIP9J3k1a64KicdKxYCbBMVCdpzChDV3jicQ42KMLAbmogHKPVQUBDBO69WO2teX3xZkhmCht09OJE4nJuYNU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPSKrL30gOwpiayER3c8otvnic1yDJk48g8OmZ8ydh9Y3vLeHDLHmpUicibw5CYib5M2N9ohQ9yCaD1fpYOJMb3nBCwxliaiafjvorFzM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPfWSiaIJ1Qk6gZkTSgC3ibOY3P2QUt12gXJ04qEAtaU6ne26e3CJYavS6OYIQEClaOtbMEVMiaVMxZO1eibDIVa8USblUVsMtds5k/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOo2He1lzibicKg2pRlURA4qZFSjBdZfibicrDKYdiaicp0e77tRMtuCvCwibvr7yGDVYbHAHDjWSCjDeJllIeFBKQ3icGcSeF8SjtTNdI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNjEWy0831kJhDOwYbTAYZBhmD2ZFxYVRmiaIDztVVAEPRde2iboyAbjlHSaibmTXIxCRywQlG7HNTI4xZXWvlEeLru7AtHnTXyzk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNyHj7ETFo3HtTaQ9L0KXXpFDdibQajjU30JtIK5vMJHRGWcVMkjEh0e45iaBib0f37HhDnjPJ9ciavu9bhBBK1a9NQLAMkib20UrhM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOzRmfnHCG3511ksJBriadgEdAE9lH6QsSONvp2kvqKylics1f5UHz9fzJialxkcONDQofDog4WTCEn8vW7vRAIj0ex08dgRT8vNo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOSyPHzUVSveCQFyoMhNdpz813mAxFnZIOoiaS4fRKEKsnjXQRYlKYIQr3OyV2ST3iae0ibIrBC9R3rOkZFQiclC1c79POQRTdTdn4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOw23SAkzs37m8V0ibKUShqIBO6FQWYdRlJbEHnLfG7BeN40mtaZl9nLqpOJibPJTIZA2qj2RkMdOOoQrfXia1OcfUa06BW3rym6E/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOAwlQvkuwk1jia46dkLba4AyLCAG9JJxRyJRZ78BfcAOOScicDpMHChzQPFicPrRBWhDjPeRhFrXZ9bUibauTtPW3ayxKKNVUyDdM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOt5R7lDvbWW7SVtKT6htnewAwWlWd5zTIGwO5NTe3wUIOOmc72IjNQZicerfEhuXXtIOHSPicrxibkJ9Rgnb9Husk9DPzh39rNm4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNeMRLicS9ArvoukGZkKzqXRh2iaC84LMLD0LGEh9TOb9y8SiccOX6C32Iv0CdX7de3wo1KIaVHFGib2ocwOOUntzCBwQGCtKaKl5Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNWTl9qjDCfhwrPlEx4VLkCzjj5Pn0hLv8fWP8koO3DWbpDC3nPswXwJsYyzXt6UR82U2FOQ05DX9twhV2mrzByG1OE827zPCs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNia860BHjAJULuQyjyK9oFmujAz8H3sA32H1GLXAX0Rv5sjAgz2YSHlrOZQYZOcYQib7epWyz0ZyPwgGpxOI5pwZ6SKFkJ8Rytc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNBSAaibDicKrdXuUFZwjZcOVFibEsjHbb6CJlkFsVLhiaLfVXwlcpebX1fWoBsEYHesFJhQyV76UKxLKoYZ1K0iawb8TZlSEemNpgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNg4BxYcYBb1Tw0a8Wicwcbf7SCrFoJMau0bEcRrzAvbkHB9icbs0ziaica3dadPrKo0w7IQzOrtphicObl7nq8IetHIMb0zIjPct6w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMUtfnFPwxZ0e9jA6b9OKLvQuTYhDItHgBz2AFhhjialKQdTOUhYyD5pN5P8f43Yel3b6AQNWcKGCQoRTAVUqiaSHYnvsnRrIT3w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO4U41RQr1QRslED4eicTSxwjvR6ibaosm9e5yseicnHd9cQmiaPc9waRDjYQ2HmkCBZDG62CuiaGc4xTxUZCAcWFe0BLlTdMXBmW3k/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOf2t5OUmKfAyFXOXzAkAqWGZqZO2vJ2jIGS9wTzOmhqOTEcuLMQJ0zP80SojJzGDp3pkeVAJmlBqEeex5IR6eV2lPacWW29TM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPLTFVws4PVM0naM9ym0EBibIykaodmnS2CKWD5GiaicibZ1wNx6iaYLjWO6icEaxEibsialicw234VaAyxdJ6JJxwc5oMSiblNgCKMAemn4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM50bs3mw8CPXNicrPmcoGfhE16LbYbGqVJwicNSPAqicW7icOVa92gicQUcqtJEA6wgmWibCwPJ5Ue9qgmhBibLJVqFYicTzmLicFVDqXs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOgibBK1nSSxWAicSRJml5X1rL4aRggHYibXoL4PncAib1QibF9yiarqUZStOs1z37hKMpOdSAVibWh6oxVquFkQPTym69jSnrfAfica2E/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPgR5GHjwDEuCMDlFEFO1WVmgeBfIr5wzzOcWe73EDEF6zJe7ICA0882qwYKaciagn2QjUhFaUWXIhFmR4Cib9BRgbp7WTHFy3NQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMcPic6dzuJRbHRPxhGSy0kbIVnxWD8F3ibHziboZiceLsuUxT2BpFTnMLbeZ0Dppr4tVmLgoyfJ1Hk5fsOyXZDSDZ41ywD0ndqpr4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP49BW1eRZYRKcBcG6FBvhVPia8AwIyYJHyia4uGGauVEwsR17RkS4bicm2MucEecJalH81YCe9OUjaLjncwjR5TrlkcT6Oqic2hUs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNpladibrJ5jic2uJx2277xCWN9DaffjhX93mopkhGRZfrt2Y9Y50xVPWYXAM0iaiamlnJzelsmysomGictkt6yL8dsMG50iaM5iczsiao/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPNxwQv5J2WeANQG5XGLKjStylwOEXPZXJFia5V1kCDKuxl6wUArHpx8EuxjeCTpsFdEXiaycuW4NticMgRvpb5yoG7J4aykhz6Tc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO7ib3tAyrwibickvF0iacB6kzVaUIjHykaSSQ40y9iacB0TqSkzDYSEyMYdWgLCyU3hZejz577SZnYTaovdhNfLVBMgB1kialDaKDMg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPAJ3t8etDjQWiab2s88HtrQ73gGesugqU8szvXuiaqgZ73aS1GAqeznzl0ZibwjyicXNPljicmyDgibicdiaYpicjVbRdQ5UOiatZ1YUE7o/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM7g9w8FlFKgPoY3jq2Fq9fruibSv8gJkpDia1sTEDLzibiaBfDUzVkicdqpeiazGADSQr1c4UqRd3ackiaoribtkq08ibyVyMcokMl2bnA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPOs5Z1ibSt4qBTAibJhRa4zQlUHUWJw56jibpLc7ic3ktibLqyrDTDoS74G16yx1WWyccuMicLqDaiaia9eC3ndy0avmqAU6Oy5pgepw8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNibmhBSmJ1BeTPhnpicUTrnD8tZln4phTrK1KjA0hxLkILm5iatJLTepVurv7zt4ufyHA0xejmHAjJKIbc1r1btdhLmzVblFKKZ8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP9ibiaKI1EuDlg28m7e38GwvPtbSQsQEfic3TVXWYVQ3ia24YvEwxtzO5IdRXLtQW6VBUPc0RARLibIRSX99t38whvf5y4ZOBjwQibk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP8W3dvRkHuEtDczEr9Hgu0TltGtgSZ6EvfOibg24RIYlZQjmmDEmwjicpONW0ESib35Ld5bvb8aFQlhlF7DRnm7nkHvvdccMqbtQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOJ0r3xG3krl8iag4kLb20tyfTBIuGNzgKK8XBE7FAxbPg4XFVencFNx3jrokyp7ibMhN3PblZZTHnR1icgpnrwgvhDZxGbIp4iaM8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOswBKPRm95ZiaSCp4maLfwadDX78tWn41kOrkpqc2lkquERK9ByVPeQy5icQW25yv3J2z0ibrGicL585UdQAzebfFfcCI6MsryPfs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNH8jwAqx5eMcRT6ghaCKfCxicMczDhUgxhgQGHZxrk5ia7b51iaLec7EHbYjs0u7pcKuBLgQyiab6se9bSJeamiatyWc7sap8rWXUI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOgcymm3HzrCGRiarJ7RjrIdbfM3djLhaJG5Skpia3fHDssONjYlU0JWe6OLdHia8v64UpbGLe9DSs6gF8Pz4wR0Fk2yJ6SInUgy0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpODDHyfhpZQlicOCWiauQT5nNdLgpzqHT9bzNZlwjLbZg8VB3NA7q0QHxNoPKiayzCsWyISQjBZibicCapR6E66glLGwH6SQ9wH2Txw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNbODUYyUEg0dibZ719XeWJIakA8U2hA6pbno9oT1ibvvaeuDibf9bwUkcuEuEg4qwLCSBsf5PcuM2gicNChdicVnOvE4laXRnYKoQo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOllQxibgZCHJpuOIZz2PF1wHexWmzTcp6MjROAFrI9eficvMOZKkPUicFfV7cxGff1QglNuhSGebMAZl2WXqOVOVQpmtvWofX5ico/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMjWNIDfnVtX0YvsibaTRfmUF4Z5h4YOoREsciaMLJM3YvzxAzJgJvHDmXv0Wco6OT8giaJrSNbG6wvJ1gVpS686dnIvPeu4JmP5U/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMBSvibEV8O1hyySNgz18j3OKENibdDbpeHzicvHWaSdpNztdocmT7bFrkNFyJMFPCWtbYbcvA3vtaJTYCTGCfkYaEJ4Y2qHLJmias/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPRIy9YiawGKoIY5l0TiaqO5Rsok2V4RJ3RIxKwfoG4ZX45UkoicYAuZK7Fdb0uPMF3vyGlGKCN5DO10iaPQrOxWvWhaiaKaSQRjqmo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPOcs76sZm0X0z9fXdD2O1gWthOlibV5tvrLt6KKB1grJMN7ia3ENDsssq3VpfibicHFL5bGqZ8Bk6oeYR8K1azYV1aIxeE6ndHPs4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMOVDyGznxGz6lclicEp1ewEsSuhxn9LxlLdHV9SSHTuu3SRr92GETrfa6ZoXlHknmoYWpgibPYYXGQWnLVibZhkH69FqpgUWwbnE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOwjUxqBfnNU84qzZgN8NMr2Fh69ibYVcl29wx43hQtxnc3ThxmiaMkJoSQiaA0nu64Jo5icfH6kEmL9CdVh2la2voPNUzSyWcA0l8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMf9WktaCRPhaYJ2WED5IOzjAfZJB5dbt5FYXq309SUGyt6FgNhW2g26PQ1T6icrM7lXFM8HTzd68ZFMhiap606AKh0ntGmEzEQY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpObav2H0QWtzmdjXLMBPHqbQXFZog5p4hTlAko6KELibyCRaEacSic6mlLFWDOib1DegoEEZRbwT9cbWUTtbD2Uicy90KYxJGSBYAU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPaQpO6oaWZxt3tj8hZbuAAHqcWc0vCWPAIuL6ytwU2ed1Cp6n9KVSYpghk4SnIAx5hKzo2XhKJIZyMEZnjiayENZSAqNJk2f5M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPXZzU4hkHEMkJOGVfyoeaqJibJzDFgPGXBET0ZrCmQfWoFjsTUnhlsepdmjyMA2IiadP5ibVm4PEP55XnibTLSHuhqo7Ykt7FVORk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMpzPj3yDlaHDsFOZXHzy58ibiby3PXFhfb5dD85ovWXRzibwRs0ocrwuZusicZ9yJqgLgm9TA9vKZKh7CQ0jD0ZiccxvDFib3VegoibY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNPhficCdkPdwoFRzqXavmyA9tD3v79iaUkMXmEr1snKdicreKjfIyS97xXlPSMaowH2XAm8mv6w10sjz7ahGcWcxucGOfM77WoKI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPaYBWVkyG3LqwXoxUhS01nicuyh3fYibnyRian8O4OWj0bAWKbMwibSmHnESkpahuox33XmqSibcrI3DMn2QeHA9kiaHicfHqVnCYSrQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPnPOzcKb5Z6ZHQZBDcHOLPribhNBUnSqwbPAnqRHMQ2WxzbSHPqXGJicBHJWtzGcBc4wZ68EzMv6VET63a6UFKcuZNic4I4k7kuQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOmhiayP9CT9EaUGyGeN8fe99Rbic7hicrXFzFhVQ9DTHwud0ibmpMSJYP3p0u1wBgibmPibF0fJub0PlfhErOcWONuaE3ekibXTuGgfI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP8uiaezrn5gLB9k7ksrpfTND2m0InOFfCSVVbU7odQTqwe03ibj79q0eWf4blG7OnMo2a9GiapsL0SstAr8YHSwxSfepXMmK4XnU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPv5pkWvFLwCuZoLYkWDL8VwyjTXFbkFsuV47IIUAcR0iacGWiaQ2Qua6vaWB1QC26Fibc7jmuibmwoNRbd8lwOlNtjooBDcMjAibcE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNEFPibEJvKTI2XN9voLGZicMjmVubs55yj9lXuOiaLplC4yZGzN3p6j7IYbHZFIhbd9m8f8bqqmwGy16U9ybH3trR0k1yVDqA5GA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM59uicCyMy3RBZhUyV8hSIcI1eFl4cYHoyqNlkddyNcvwUqvnLHGByX4of1iau6dUYRCIrsiclibSJDy8V4ERibrUZwIK4tKXTib7XM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN6wbUDtwc0AMTALZpBbKkgJvI3SBCIIMyHbJqrBc8ibP2CRLlxFWibA9G8gLqzMnXianud8wKnzYQxuXhrrI1pgHAU2mia7R1TzQ0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMnpUwRS4BRCugFS9XMJJSQOgOJy5UbG1Tl67R7ohe6TVyrbPGBuDBFZm3aIonQDFBib5aia7ZugB9uBNwJv67mHIPwuXyEQFibvE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM6HfIv3UtA97U5z6ThDicibEBHyK1xznTzmib9xmdeLPiaArj319aUzAOQpWLkteTelbRRWZLNjXz5nZdK3ZR8htwBa1USuoF8pk0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMINLj2nDFiaBicuanq7EjCT7wPYxEuPFxoSsfhDGISXsicKdDyFdR6pPheQrERc4lk8Z1bZEzwsVJ5saKm2OgtkYap9n9dzIT3Lk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPJQicxHicdN4NFDBHYBcF3sonAMQB8JvPD0FTB8rtXb7BKAW8hqcPNK7q9GfrLibfia8RCJzsjjY6c8LkjW6SkiaicN5OkPtiaiaECkhw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO0BnOOTxZ6iaRK5jicGllEJSl0RibBCJFdtJSOOQWDrwqHLM1iaw6iaX6wzjZBzo9B2vXg5DPDBiaLLYdLhPc8Ax9wGF9A2gqXS9XE4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOibLPibCyVQmuERYZoicDxpdMRhYgj1iaNykZXL0fGkqzalXu9EETbHYkkmmtGMOgF3XI68C2tuQncJvlhPaaCicsTJ0tNeLWURtjU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMHlvmQefbRoUicYQkYKkwtz6iaibib4BiatI37kGyawY2AWFY9qB487PEic2GxWDq3KS5C0G5L43j55ufudq0AxYNaHSciaE33mlkgHY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPOwkCAXIuicucibj6WG8kJAtj1J5T3eReDibvgPSvHaZtnS4Gote0MiaNe8xG2MwJ4ibH1DzIrdkjMSshRmPLfMXF6UzrjG8grDEao/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNGu3g0uyx4RFAKfGQunI3jWBDghZxF3z19wXRQcl0URv8hAcI17bW5vicZP57qV1ibHg1CcAUr4g1CyoK1rbw66Fibo08ZJ2HbvI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP96Ie58YUubjxPqvYibsP64w68Bwc5J5ZbAlSSH7kHJnzZCg0Kp0RkwhScZ4bBhRnQbCl6TRgYzMp3p0OGdibAwFXmics2ib0z2c8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPpaZZWMUJPvhKvrWmZLPQffKpl47iaKhGsDREo8GzCcvLbjtKEjWcMWhqB8JiahPLVlF1A0BicVfX4Mp66iaMqXdEriaxbPe0rX8Xs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOroHQ6IF8sb0QribdywNibLcChAic3yxVINBKHQ9hzlCWAIYAFhNwp5tbfB6t8yIYpwWZ3ejsia32L6jdtXsiaQ4vchm4a9OTHvMUM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNyMU5hU0prh8WaotkrDZG2iaLUG1vgowicVUwZTvogbFW3rlHq1z2TdKxqBI7xcaNQHeNNCwUqicyoIXP6hibbR4VeSMoSmz9lzV8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNZE1SMQABpIrDL83JFibSGdRuicfTAAS2OHmEIQHEJN70reY2TLyjfjWdEX7tUq8cnqP58G1IHibGedPDALP9fFE3xf9yL1RvIKI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOJgRR9wSRnT1pfPtHJesJD0oBQD8PfWgNE8AazKdwS3qhHQ5rdISD4iaibXicFianFm25s5u81w1TADd6vcHhex6oebq93R53hA8o/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMwrJPnCmVict0ZvZtzMHVrlqWr7Rmic9RdliaskOPiaI3IeXjZ5ffeDZ4ibYTibrAOcAcE8by3o5bCyWUW86iaefGibd4ejFI1nd9VoYw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOLS6RpTFia0mI35KBz0MVyVicXu5Pvr14DFQkeZanJ2w6cI1tJlv5vgYXG5ZsA3ibWQI5IicibkfBaTIrGicG6tRCARuocicLpaSauPc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPBQuNeibMRIGDxUMN2rgc4d6FqYhAuiaB4ty93MHkJY4f6UU88lNz6k3z427y0JoRFHIgcpyFqxDXoelbDmBqAY2lM9pTDaUkBQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNHN2j8KTFOTk87nf0qXO7QotiblCDe02Fjh7a4lPTrMPqc4zuS1Uz7OR4qxQFre6eI13iaSzric79glLo6TEDZgDyrwGNKMSLciaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPH3qBOOEVXH7haVPnQ7uNUX9dg1SKvdbIQkILCD788CeqzYqIn7RhHibtzq8qdBq6W2d5vOibntCXWTXibiaCNTEsSVEGRSiaVibrGo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMDvkhWnoicUp1Mr8Ek30utOXewAiaW53aw3CG2xy5Kq0nnBG2lqaP2SbL0FiapFEOff8GLQyEO3dIYK6fhVeNJSoTGkMUSGpRTEY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNMibKNS3iaPHuDAHSRSWsCL4oHDoQwcO4yYEXtTyom7jFGfuzwzURiczia5SvVMHMT2qPhr7YAmHCxsdBfSIdtht164bF6R7n4yek/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOLAqX90WTNpqgWppLBVd1AUEtbRicqvCtRZTbKmrrLWDF2Ctp8HSVBib1BAtHoju3NPOf9zWS8z9z0BLRmL9nwszg9U5uic83fh0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNu9zOqWE4wevOMexoWIkNMWxMEJj8SGfEoQ3X0zkhOelFNNrtPm9JQmRH2UQJ7EKXoI6F7Z05UJqBETOm3HvbAwOKibB0PwoSQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMd1iagwWcuEAFwylCE2ERqBYOb7cD44JrzGMUibsqfG2u5Q69iaOoHJsbzoAGEGUuIx5MO0ZIhVqk4a3z9rw4PUciblICmac7swaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOGek4iau3aOSyTC9icDibQiblQ1Svf8BcTT7818GXKticNriaPjsYv8NGoJlCBAibC7Y8fbPJRibUyh1WemOw0ZGM0yPT9V0MCNibzePuw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN55qmTzveVR7V2HN9rDYsp5PG4bMPNpQib1ndN5beL8xtXQPHZVBvETknKC1gIHEOaAmZPdlbhX0fazXaWfibjKDYLrLSoVVDMY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPQ6LSIRzribuTKnrEje6DWr5VA5iatS2C4EAZFHeibsmdGc7UOiaqXRc2eITFrnSrM6bLnlBDicohibpzqMj0tAqAxic9MOchntvNiaZ4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMnCn3avwAzURcX8nULx5LuhVrKS9yTV4nrbAC5sVqrDPFfWYIlTFyx0Rq7OYLLibCYo3JFkkRaa0ONbLHhvm6Qqf0IUMroGStU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPZqSa3x3xrIj83RX5rkp1PhLuAp8ib4OmAibf64tky6Mw7NEPKUXc4HOV6IBV7TqaDwDp8Ul7ZbKufa9HE8qUT0NK5iay9g1gwZc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOkEyXkicfzuLdx0kOMzwvvMsvsHOzVdiaOMnOoXyjNEPic0a9kEthuiaveFHJnXBVk0pCWh5N7gnURu9bFoKPetD1cXvVTfoY1ntw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOksv2gRnE4AYQg71LjGXS4Ta5bf5Q1cNOPiatVRHkWZ9b4Ujp7vW2ZDvYNIp4Lr3rueqY29H6lznbFibt8HRAnLzdOHEZtuajqE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP4U3QN1G8E6UiaiarfXiayicxMATJyw2hiaq6Acm6eMjhgowOeHnX57EPtgybtTKjgoN3AiaCGknTd8qZS6g2UANXW5G5Do9tWnIdXA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMkpibLKw9lBAeysp5Rl1oLz9o5uIZ4JPX2yh5Ky1OYAPMDF6agYbDrpP69mHlrdk7fibnLrRNrZuZTblmVGuXmvdIt6fPib7lCTA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOdNC525eslyOGVergZibwywpmJhWOM0MvMdictM0kH0yf9mhmMqVAz0Onun2SRQkL7TQia7xiasTIyCenficIO52ydojb5cwILunnU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP5VnhygdsSxf0BpQ3lh3swqHn1ntPV2H8mo8fKPNNRAVLGN2iagOfZSALTj9Ic1IXz9Y7LG8qoMIhiauicZ2iaTaW8cRmtnbp49ck/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPG3lFst3nJlEQrYJChwWtSyOnIticH17kRb4xY5Qmvk1LOa9ibOKfkYVCzXk7lqKvbwl8qajQarESgYbtpzXb5jgKcMLQFY16l4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMF2QStV1GAY9qZrwooibszlBicuW0XjtRzuGhUmNDzSCEicJWXBoPiavSe8l5wzqxln8qn4WWlcfRz3tJ0fSRicNFLt0GEt3iav68qw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMgDT6mDxTLL69cYEmfZWkM1sgUvB5d9UmFYrhYErYYOEcWvqzsJiajggRQgCGq1dKVnaFPykeAysKVhSM3tbRexLQazxAkgDicU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMicY1aacVVygCiaNmKLLDClnIBbqNgSt6CJiaYSrWmvhW83GnECoa2r99QzuwJnmTBBO0HaTU6LpJQckaEzXWTV2Bswtd8TBUzys/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO1f13FS2mVC7ibQjqrNtKHicywCH3hnicdMjbF2lwBR2Sn2cHyre5BGJODmX6guD42aVgVdzVQCPeBBHOwyjibnVEA2RX7WQwCx1A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNErahGIYGfWtex3FWhSlCqfKYLBvBC8coy33QuZVawUeheiaKqhROYxygPe4WzfLmM9nTCXrD9ibhItSkiaNnAoQcYfsicoIbW8Lw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOLBAMNHdm5yJYszQBRWe1HJO3vMcibn1kTIodPF3H2ZWk6iayHolTRqtkyW4lNA8gic1s9UJ6uykDy1V4xUhDbUXVEaicQKHyKXlU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNouOibutjoGjbgzNTbHe43Q8oKEcHth5EHc3deDiaSUdwyghCVGhLTHoSZckv1kkzxV5eQLIlsdDl4II6Picz3n1jEjwHsX8jqp0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPsp83IzibDvhFzFDc2Qx1xgkGzGgjthibwgHlR7ylXvkPNX8ZF4gxmY69fB5RxD08NUaQiavWYpASWbSCLLjgicgm3GEpsarRU78k/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMGNgtrGKsdKgX9pKDgKDYdal4bWjJwJ14vicSxAatHPPSoF7XG8FJzqDbfWdqQcoK3QCOChOcicsNCIdXFLCZ7IBToXUbf7A8qw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNOCGWsJUKY2qJFsZvvWs88zm1eUMBBCSC0n1rPr5Ia5cKWNveaTjQwk0c10pt1wlcIPP5eufT56mvj13Lm7nmqHW0zkYiccktk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPwosiaJfE0aQIX2CJCInkNo5icpwODqibonFoIZILmiaf4icJZuAtPgd1qCT7yz6HIwNrFKJnMTNiao443SIh54fIWBHkOqxrNbc8RQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNOpM9ncL1VibY9RZaQibwpMialic2NWuogkgOnSuqj7Zic2zMahNRlicbPhQGOWF8vNwlveEPevSvOlY44PRiacg1JAroo7piagUHeicnw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMUsJCczhE9TbcxfS6tLYduphibCZ2UTjETg7Y5xNHxuMO0Y1YcpufucoyUibrEtG48BUZoHmRogf3D2W43icrYAlGtxTxmCISclQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPxcUCNC59AQiaAqB9JxMKS0brdC5yp19LGnibntU9iavgMgWPvOFQX7c9uEJdibbKBCKAc79ibAFiajEVd7Kq75vVpJcupBFSjZGtlg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOgRdyR3nJRsxxYq1AnmaoWgbH36vbUibSECTosqupW1vI7xsIJXAia2ZWEXD3gvZRCxcqr0zCdjmibvPLFO4s798pKCicY35htjHU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOeIVfcgYqgK97oUzAnGsBwLsywQkmIZqC0fsNqXVUice8HoiaF4RWARPY0pgdmpxVQ7ibK9OibD6zznvtjIBLRQpLehGtem1icotps/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPTyGcicCtaibiahNicJon9tCnB8YsNOPAUzV0SW5aNGF7gmiamx8scWZROUJ81XMfvFEwxUN0jSWwcmJCVNEA50Q0APTtMw2HWL8Ic/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMp9ny6YiaGOsxOROruASMmBcQcVgDQaqwFd8SHhGuIYH2MIHicFbuOrw0KiaiaoXhaIgULfTCeQEaBnDicXa3eLJIInpPqJt8TOpck/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOeOdAa33Pk44CVDUfv1hJW9Gw4bG6IucCqSht6xFW8VmLojSY8bgRlWoaPdygGSNl2y5WpDsdOueTotboSCJ8LYwnqfqLe4T4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMNaeGYCic89JIICic7AfTCsbJHyWGQdkgz3m6Sz3ibccRcrLHGicCe3OTmibPLMNFRaHs1EHvvg3IrqSc5icR9MmYCpnTxibreOQuicrQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM4dfsxRSJBtux8ibpSS3GQuxqm0jZFPG6ndibx216xibOApWic5l1000IcIk698JVTTAQ1kvCf0llcJGe6OBNdoImyYfcY40XatibI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOgzsfz2h3SECzjmzJ7BY4nFdqWAV01ME6cMlJf6QV4ZwlpR3MUAN43GkXHlRmX3ZMMYVKF99HncvP4xTPwvvTjjmD5FSZwiab8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN4YkjeB96YZqXXevzsMArvj7tP7bTbUKNKBp5hLPXMMeN7anrU4hDV7S3xuiab0kOWibIWXIsib3ks6f3JsPf9h8YE9OVKLF7Vow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN2kpJqfsbCl1ruO2qia3p0xJCu2yq7rwJGOFS45cMV4A8yqRexwlxgl4HrD996ngefq6BjtYB2GIKxDvFKKafowEB5yAsjYZNA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOjgaTGnmYCICxYQdY1Xf3Cacz1GIHEQIzwXoVBVDLX4VjL7mY2geWfrP8DIzjz8AYcapoxyAqffj53AoYN0rRKr0gyOg23utM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOlsavkVZQM6hzubaPBXGb2F1rZicgY9ReuicJZ7RKjEq6iblqdcnbKsdQ6mdRpw4YDhvhn7w8lIoWCHt82Ugqav93lIJgWWVZZHA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPjicVU2ofiaZaubHnOGGsfhlcm1YTOkicZdVsP5XPF76p1KNtzDtODVyG1TYuibXcFwuNOwCoOslcmmvzDQ3lMvX1D0nAjFLJ8z4s/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPgxDd8czHY9NeW6scYAsm9pZohkRibtibtk60zjO6FJ8N5yNWP0NjKhXgU5toXjv6EqhSG9rlTeNY16lWCUicfTZ9KMJuZDxmRGs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOyMpO86qFkSSkSJgNOwHS11K8hC8rCFyLHiaXCJK1zan9aKicvtAQBrcwVt2ics50cVic1d7fLfMa2zCfGXnAM2qzMLzmyMY6FZhY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOf5fgYnfaDvO543qcib82mEkXAADM6KmIh6C3kcpGlnsJUAGN5LqEISD9yUjGfl5CshvOVAaKVqibJ6FYNiboLYTJ9MKf1lAbJuU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMKoTnK1rFiadtP60aTXEQDG1jSIicYp1zlgRheu22iaXwiaBYlI9caKyz4ZiaPXbnyRm1xHgmNxObeXYmbDhgxvMhaFQrtvN7znH0g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO2QdqXJflgO1eib91Vzmy318O5VSFEZBFhPx4MkVUL0lkPvbaIJOXXCicIFkcNqp90HTyG8ZIbicher8gkX9wXic3whiawNVKCpsBw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN728p1Wy2DDSibZSPHqVORnZB7gZac2KvGklqpdpHl9YIFhKFSf2jFQrY6m3CicCtkXEzfjsibPw7YfKNyzf8iaMv2LlRb64RibeM4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOfaQ8Am1m6lLa1RLdSDmsFkxPEz1zyUvmR8LlA3DibNSOc06AyLbR8eB0ibibRHUBIWAE6Kt7cmIpVAnJLW5tT2utZlmf2NIjLEw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOZuicU9Ok7D0aZicibIlGsXewjj7bvp5zUQJSfsQSbD3wAvvw6MzoeEpciaYfoAnWa8FtmUmeA6CZWVAM7I0HIPy5icEYdmSL29aKM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNJeceCWgVWrWgTf3Pe2wIlU8gjlHeFyyAaAS5gGacxEy2m88xPvfmkN2iakqJsFeCiajqRNN5D3P0giaWbsyd8eLQQMUKXLu6HMQ/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

## 一. 系统定义与分类

##   

三相 AC‑AC PWM 变换器 = 直接 / 间接实现**三相交流电 → 三相交流电**，并通过 PWM 实现**电压 / 频率 / 幅值 / 相位**可控。

主流分为三类：

1.间接 AC‑AC（AC‑DC‑AC）

前级：三相 PWM 整流器（PFC）

中间：直流母线电容

后级：三相 PWM 逆变器

2.直接 AC‑AC：矩阵变换器（Matrix Converter, MC）

无直流环节，9 个双向开关直接变换

3.间接矩阵变换器（IMC）

分为整流级 + 逆变级，但无储能电容

* * *

#   

# 二. 核心性能维度综合评估

##   

## 1\. 拓扑结构复杂度

## AC‑DC‑AC

## 结构成熟、模块化强、器件易选型，工程友好。

##   

## 矩阵变换器 MC

## 9 个双向开关，驱动与保护复杂，换流难度大。

##   

## 间接矩阵变换器 IMC

## 复杂度介于两者之间，比 MC 易实现。

**排名：AC‑DC‑AC < IMC < MC**

* * *

##   

## 2.功率密度与体积

## MC / IMC：无直流母线大电容，功率密度最高。

##   

## AC‑DC‑AC：需要电解电容 / 薄膜电容，体积更大。

  

排名：MC ≈ IMC > AC‑DC‑AC

* * *

##   

## 3\. 输入输出性能

## 输入功率因数：三者均可实现单位功率因数、正弦电流。

##   

## 输出波形质量：均可通过 PWM/SVM 获得低 THD。

##   

## 频率范围：AC‑DC‑AC：0～几百 HzMC / IMC：输出频率不受限，理论任意。

* * *

##   

## 4\. 效率对比

## MC：无母线电容损耗，理论效率最高。

##   

## IMC：略低于 MC。

##   

## AC‑DC‑AC：两级变换，损耗略大，但SiC 化后差距极小。

  

实际工程中：SiC‑AC‑DC‑AC ≈ SiC‑MC > 硅器件 MC

* * *

##   

## 5\. 可靠性与寿命

## MC / IMC：无电解电容，寿命极长，适合航空、车载、军工。

##   

## AC‑DC‑AC：受电容寿命限制。

  

排名：MC ≈ IMC >> AC‑DC‑AC

* * *

##   

## 6\. 控制难度

## AC‑DC‑AC：双环控制成熟，资料多，易调试。

##   

## MC：必须安全换流，控制复杂。

##   

## IMC：比 MC 简单，但仍比传统两级难。

##   

## 排名：AC‑DC‑AC < IMC < MC

* * *

##   

## 7\. 成本与工程化

## AC‑DC‑AC：器件标准化、供应链成熟、成本最低。

##   

## MC / IMC：双向开关、特殊驱动，成本高。

##   

## 排名：AC‑DC‑AC < IMC < MC

* * *

##   

## 8\. 故障与保护能力

## AC‑DC‑AC：母线电容可缓冲扰动，抗扰动强。

##   

## MC / IMC：无缓冲，对扰动敏感，保护难度大。

* * *

#   

# 三. 综合优劣总结（最精炼版）

###   

### ✅ 间接 AC‑AC（AC‑DC‑AC + PWM 整流）

优点：

**最成熟、最易工程化**

**控制简单、保护完善**

器件便宜、供应链完整

可自然实现 PFC，适合电网接入

**缺点：**

-   两级变换，效率略低
    
-     
    
-   有直流电容，寿命与功率密度受限
    

**适用：**工业变频、UPS、新能源并网、电机驱动、通用电源

* * *

###   

### ✅ 矩阵变换器 MC

优点：

-   无电容、高功率密度、长寿命
    
-     
    
-   单级变换、高效率
    
-     
    
-   能量双向流动、四象限运行
    

**缺点：**

-   控制与换流极复杂
    
-     
    
-   电压传输比低（最大 0.866）
    
-     
    
-   成本高
    

**适用：**航空、航天、车载、高端伺服、长寿命设备

* * *

###   

### ✅ 间接矩阵变换器 IMC

优点：

-   比 MC 简单，比 AC‑DC‑AC 密度高
    
-     
    
-   无大电容
    
-     
    
-   电压传输比更高
    

**缺点：**

-   仍比两级复杂
    
-     
    
-   应用较少，资料少
    

**定位：未来潜力拓扑**

* * *

#   

# 四. 最终综合评分（10 分制）

#   

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNO5CadnoKsBvQZ2piaD8kd1OjvcPZQfBNEnWq7SZ0sjprd3pZMPib5xfz2VskFiaBUicaiby7Bp4GaSPwrt5XQnOjtXoMxsBdsKkzY/640?wx_fmt=png&from=appmsg)

总分：

-   AC‑DC‑AC：58
    
-     
    
-   矩阵 MC：43
    
-     
    
-   间接矩阵 IMC：51.5
    

**结论：工程首选 AC‑DC‑AC；高端场景 MC/IMC 更优。**

* * *

#   

# 五. 总结

#   

**三相 AC‑AC PWM 变换器里，AC‑DC‑AC 是当下最实用、最稳定、成本最低的工业主力；矩阵变换器是理论最优、密度最高、寿命最长的未来方向，但控制与成本仍是门槛。**

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsltFHz7g7PGjeV98Ypnx4TRIayibpPxI0yicoFnZBLgTB9u9gY0l4FXIHzdyqGTLE2T8o27XX3Pfjpg/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsltFHz7g7PGjeV98Ypnx4TReIo9utCsAic5F9G1ZjUzpbHBspCkR4YEJSVYo7gxzqUibjNmqEw2hRGg/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=44)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsltFHz7g7PGjeV98Ypnx4TRqAapULZs1RhnG5cLJYEG8j4Cxt6vpicnAeJAVGIsXIIz7bz388Ddc4g/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=45)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsltFHz7g7PGjeV98Ypnx4TRKOBaz5ESLhYQkXf9lX21KGK4jxs1EH7zEicoO5gUcWYqPh08hdohAkA/640?wx_fmt=other&from=appmsg&watermark=1&tp=webp&wxfrom=5&wx_lazy=1#imgIndex=46)