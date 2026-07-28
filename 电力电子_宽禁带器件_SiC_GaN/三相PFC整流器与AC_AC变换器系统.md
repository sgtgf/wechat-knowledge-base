# 三相PFC整流器与AC-AC变换器系统

原创 J. W. Kolar, SiC碳化硅MOS管及功率模块的应用 2026-03-12 10:28 广东

> 原文地址: [https://mp.weixin.qq.com/s/NWf\_49v9OfrHTsfvxyJRdA](https://mp.weixin.qq.com/s/NWf_49v9OfrHTsfvxyJRdA)

文章来源: 苏黎世联邦理工院

作者：J. W. Kolar, M. Hartmann, and T. Friedli

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPcia4IJicGXgQEaibwo4qhHO7LicgXncUaj9UO3Bstd1U7tJickQZabqz8rUVGO13VNWsVFfsZynOAtBibwibZWbgRxgna3rXJPe59b4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP3CQCWs0Foia0qsQNJNso6J3GibicMuC7iagAyU040OA2jQQejTTzsB3QKgiaSWu8ll3biagibdZkd7MtGNPpOTvJW34JnicicibTy8cT78/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNayBtYqo9DawahS2KuiaOLiaD8fmViczem1PU8vZEIcRqN03GQOYyXBgzJhyFo7zaoLI1ggxmdFw92aML6lVdwysDF7ibnqBQGSzE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMCEHwsWERYazeg17u3mN7uicprqfEO0m7tezaYJvRHprBTiaCCt1To7v36cflh9nCV99icEoXRqWaKtxHVauAW4zwdfyMTdicyhuk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMHOHiaBicicqmo0HV1tx6Hjf14YIDaxRdCGqaibCmibJon2HbNynfYyXHMhyBp9ZNryJq7icyhmiashZnl0FL2a8xf0Ae224ic2qOdhQk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPBAjmfhibI5U38lOXiaDVkWHibZ7Ficr6ia9WTXboxL1jaUibRfq8EccS1BjITomdPZWDOTKabOiaPoJ648rXA8DoOyQgzjIWtjTPeKY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMInCJIXZTAQ8a68MK32svkQGdwmXdcUe0luaCVH91uUZWNuNiaYibJDjgNiaCXRPESa7TJ5ICtdKbzicIICGDffalHpNX0auxFBcI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMlhq1jndRDjECzpiaKtDCCXXnZKAsh60ux6vUe9UxOmfKGa4dbLWlpzpWZKaFCib48Dib8M13EzP4b0q5jRq2y9ic2gRf0bC8JW3c/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN8sNJMia2P1rsyyY6Gyo1yuYbrRvSTdVUTqBbibhexMSMc5hG9dqLCyKWps8hOJSjEeQSoDA26ZrsNq8n6ckb3BqLseKUOwG3bU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPJD99JDe2O2jZ5nvSKq3ef7zWqLiaLEaWgzhBnJ1tpqCZvgys4AjqkADBUjGcGZh0wxNVVcEneibgxicqA7H9IMl7BstdjXzuKjU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMgHxiaVkpr2cShCibVZPV9WTwqcuP09lG8wibTVRlFqmMIyDVGkkZcdWC5Y5YAR9nyicepiaeicGqqvxKBZM2YyYgE2mWUsWSQzN99A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMdxCvtXDn99XshZVbZj2DqTnsLQ6FtRdh9qoENpl3zOQYCvbNE6p6iaSL8OG8JCmIfeFoicicmia2R9icWicdPHycyOg7UqtRYHPWxo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNbY5TezOFHtIgFhRIf5vZmJwkPbicictflKiawicGZpTTCiaOibz7OicicQefeibdBiagIGKzNmjLUd8Viach7JlrXUJ4TmupCmarOa22WxY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP5qbm2ia9sl5VVDzqZ8VfLhj8KksgnHgiaWYjy8ncP6JSfd25kPhribmu6BvcQ4efHYbpVp6RQO4fyc5gGOSUtU0ib2x296DSlSRY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMvDcV2Sc8AUulNy0icXgWyibc4kfR74K79te49PfHQyiaFbmEXTTfZlpfmoTx1UyHBrk4qTs5YicaRna5V0vRtFKtpAlDoG9njguI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO6v3MyajRPUWdcOnQ0kL4jCMh2uzzJNMrPV9JQmRILUyNt2uRSprgiajrVa5UTJ80IVQoRzwv6MO6IbHREH63HGhFRCZeDiax0M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMTicDLCib8gaUIsPyKpaMnvRaZpRwibsEa6ribjxOhN1icFZNTTDPvO8icvhbVShRVOnDVISiaaH60DnBD2rJH428YjaOQTJhFcCSibHM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPDmEia8qFg1aaMZDuh5OUdQc60rWamEgoGvdNbXGibrqs3AzryibgneLjBjI4XSDTKiaKHMDd1tz9rqb0ZOY9j5dOvaSMu0reNu0M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNK2vibQ2lNVkgjORUmP9rETpPcUwMGkmLjsRcRFKKvA11nPecTUaCbNoBZ0D3t1vbCBRPkzFFBVFtGv5bVDooRemf7X6R00w2E/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMwuiaIncia793VG4wl2BibrMUEyljPtibQtibxDY6rrqn1rsE4mDibWaiaeu6WYWAAXT99RqdHs8iaO7O9yYibZBswN75nyhEuT022WPlo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOV6hAhPvQxBtdeOq0W7kv28hetWw7QxrU0NUibnfp1YJHl5pc6uZSbBVdrsfyIHkojOVI7Qpjnpic3kxrW4L20MBfylVD0zicoRE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMTLyU6DmGDJn3s4O5XNIm58SVarRmd21lqsiayIHE6nS3MaHADXQHxmkly7s3CfqDMz0dnwSbNibAKD3rwJfzNjOCk4XjBCOYicI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN9KQcpFxtwiaLvVQ6FJe9VpDZMUVNnt8lOeAPzibCCGxbS8WIZO5pm6iataibngRM3Q3ibomm7Fahf55RSdQwMiaqkqBTwTTiavwNEHE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPtoIYhdk3LOYf8mfFIBP29o2m4LYibAd5ypCicL2arppdRibQ81vqdm9svznaT4QVnPuicice19UI3BOspIKxKZSsrh3ZadIbsiakZI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNfvdianoVhlpScl2JeDMsK1szG4GA1icxDNbSrdIClbyUv7PTVxb6qyLCaIKqQzRvtjn071GAj9VIhD85CiaZtBgdD79bJOywMpI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOuVHZwfBO969zGKNBUib5P4WgWgyFzKicZcLWXdVZPjBu3FvHR79xZBsqZsOPI0Mv7EEQRm17GS2S1cYvNWTHn3VU93XxkuGsBM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM5RocDica0nT4EV1GQVrVIQOB5n8td3edKzXU9FVdE2pn3gbZQCvV8fQwhWFoLenJOqAWmKMo9TS3VcfRZpIa5JpmyBaEt2fCM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNHsibzv3MPBDxtx0OprshxjLPyqRKbbXKvxvLiaeg4aHlwuunHbM9QM1FLms3z8HqggIyDJRXx4uY608A7sbd4uBHFyYBfAQq6Y/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP6qJnhVHlX0Z0PHl9G5TicC9AMiawZeqtCrskHw5TlwUKVb8FVcchxLDNM3CXYJFUUCmw6Jq9fr3BicCqK4mHmmv2p44yf0FEeyc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOXKOzMevfpcMjgvZfQpPmu1cB4ibKnseS5UhB5d6GoUoY5FZdRdfqNic0R0JvsWtxYqSP6qIpl4ay9jz2TuNcMVXFDvWHtIVu6w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO1FPGlt7UAMyr2Fib4SaEmvpFTnaMNGxxZ7c9hCicJUAC5OIiamBPTkHq3TzLS6PYjNa7xPlh41ZXnIMiadPZPQT0zLsshU3fpSww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPic72DMMDibwm2XtUKKEopzqRX3zjkQEtK7iaxp3jPLcvQANAAftHV4UfyR88tpod5LH1BibOCKfuic8CSyg0Yic4lm3nkYlSmUmAqk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNosa1ws0z10IukUXmPibTCgrFFOD6wgzFZVs0oiaAepORb0CVHIibvjGRKYJYVcu7SBnnicLJSjJxc6cylWX1yM1hke2T6YibUdpHY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOWSOy9SNqNtcxDia9sPkE1EJwU1NDKY1w8icjPTP5g0MUC8b09jNMiaAdeic3B1w6ViagiadvEEUspldJTT9aH4cp1nESa3f8xgiaic6M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPpNBMBDRMTPQiaqtc8cojTbg14INZL1Q6MwrcmQJficjsWvPP434A3TcicdxHnHkoqez59snAfBJnJLSw6PLIFyvibj7yG2j5WG8Y/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPJPu8vMvFw7ThuBpOMT2YEgPiaM7RjHxzw2pF0q54KQex0ULqQibO2JdluVwAjnLn8zR9Vj0ym7Vic0oLJV2XokMibia8wYFUia5hdA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOWNmdiancsicNn36mMiaF2LMgf0wJrAboErp5WvRfVbyxndiahFKdX4PzFcbyA9D4XDSIRbE7kkX4GYzuduDia5qPQ0B7TBlDFIuwo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM02GxibFTianRwdDfo0c6tAA3t6hNE24WzDkRia3trt2mrPl8zrkVStSVyfymfibxPS3tqibWsZbkH4FiaIq01DSCBDEUiaYPEIsnZ2g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPBibNa2wWoJ1KZyaBYibTibhbr6AZGna9c85WibN1RgSAS7icces5Ymng0RVZib3UJxwAffPfKeic2ej286VW78OnWG3HQaLemeQQtqg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP0ZxXJEDhtpNqXza40ic6U4WaRkeI8DRL70icxnbgibNzibwAwGUINPKPxuKJzNHeKkYsQDOfPq7gib8HUdL8r3qbCmBhibgozhQNQQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOWFwicxkZhxxIsbcm4X22fn9jeDyYdzJ2c5Ubj2libFGgybibbXib2I8gQa81Yft0ECmYAplu14pefIgIiahTrDMibfmqibsib2ROUHZ0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMklibbu2iaEWRD40dic63VAC9icqTuLJVQla8mCZqtMtGgu4s4CvKCrYpIibCMDDxQEspwSBV8hLf1g4sqGHSYLqme9VMP5AxtHvmY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOP7TuPo7Po0Jtc9YdcM0bKsXBiaoRtpA3c1fMv8syYAhHYkLdIUPac5tPEmy7DtAIoXHosOialiaFFbibGs4ibg44Q1pxcpzb1f7Ks/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO0IricKxSP2LzxmVulwpicCF9PWQuuQ51NURyAzTeHict7VEY1zfANzia7hTEr4tgt08N56sia4FpV4kI6CicYQSXYuR3cOjQW6NEEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOYCRv5REsib0QVxr3oB4pWrKPB9u9b0HbhKDqIfbuzwa3wswyJWxUEibAeEzCQ20T4YxqXzkPc1B3dg5iacnxSDtIianml8IKoeZM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMa7SIibSLRS4drlBXibC7Cia3LH2GPMHmibGP1lPGrN2NibB7icGpiabRqLrUGcTXNfibFExicW2Ee0nkOps4siciaIOlia8xl2jJicWeuSTSM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMicFcicyGScLMdZ9sspK6jW716sk93Oy45BktL1ZZsqicdmXM5BMXLMdGjVC0tjJLWwgCNRhndb8cPibkRHHvDdjcWqmXN4Bke5vs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOscy7SxtiaeicyO1CKfCI9zO1GmKNF79XB8c2icKrFVAiaF05AaemX2PoRKu44Xriax3MiaDJGnamnInib7Jo6XibkSUFzAg2us7akHiaM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMBREej9uUcSuU7EoSibCMcYSBvGrkMHW6xcV9ac3GFx7ZuZJRj1ibEYbGJtiaXZKicPM5ZhIib7Zys0MyRcvGuiag4JdCUiajpLgmQ6U/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPnDMd38vKmzAp42nDKFN1gecet9XPNRYQmPOVOZdUjAeiaPkzicnUT8v0TCn5qJCSXQQicT1cHEgNZicUr4G9QUMvUN81cxXibdmHM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOXdebmW7PZ7TQzzFN3Qz4DE1ZSYIxI4KjWwYaHuomu8pWXicViboVHarZlfakB0NL6N0pv34rRmnpbm6icrUSm638jAPqSbwbmgE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPbvD7cGw4iaVeZpia6IjcvlFohL3LQkVH1R5nJc9CwR9FrnGvDlrZYjW3QicdpmJpIMyYF0jg77mPFicoxIeCHXSFVwgu0LNicS30A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOf3SSdun3uJSbvRepJial8I8Ff4bwjiayvoiatM3pthibPR55DcFD8E2GSHibFTzjeL6sjrXOOORZTghLrVfGLCzjicnQnCPhJp0sfo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMgibA9PmB75gsCQMfibIdsXHfePxbzV18ZQwCSFS1D66jfsdldjLnRIXCdyNtO6TQhU4nhYJZKibUbfmNiaN9b1MYMX8o8cappwwg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOFWhjl4PdY9G2DLgVCclvKYtxYWBJvKKD2A3gWFL092v28rC0bPW8pmDV8CwSp4FEKjr9wVt9cphjDqoR7Frj17jAHo84akZo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOoYy5OdhzjBDOhDLao8QEGYec2vLobERjG9jBEmJHWQQ2sXAC4xAZg5cYLFbcCbeKOOFNmOjF1YjbkEB63eypKnRohoAScDd4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOLmVX8pSjhLeaNfnE1qvPN7QPntYfLwYgJYfdNS53Lx0ljlicJ1v16P0e4VXWF2zXguXEaBdmicPFR5psQrR1asAmINib6RsSrlg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPOUonqKHiaKU7edBcyCnkOuIqbdBgluAFXMdcgTXiaJcKCvXp5F59CDibIaLLq8JXbuEnLqe0ZQl52Gtdj9UR5LuicvJuSv0MILow/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNON3NSBFgHCuBUHCO71tW6GBVlicW1XZ9F9TjRu7TptTlNkl5MCicErib3ictXvZlaHhuCtkChlNJqXib1USyAlkmlbR3ImEYDydzw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNqqjsCyBcSQPwo0tuxVBqjHBCrQZG8richj5ywpO9ydkT4XkrfEhXTVF55ETRs6exgN7LvsiaNyf5e2bicibia46sowrqGFWjQzJDY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNQI0ODySsia8c66d9oicuia6dLxmHlQK9Ybxoib838SYlBU10ueIxSF1kSgkZtmJVAnFNlALPpWf2xFibiaZpfdG3IpibkPmAGtU5VtI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMfSdpRr9Qictps6O416Ibxd9D5afrMNxEzib8Q5qLaeWlW81xIOaeLb5R1VF38X8cxSW0uZBuOdrCv4icc2o6fK4197hlIkYMYQY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNxVEaX43icVcgKGb50q5Lz9Aq7z3f2jQDjK44Sk65OtktMwuAhcVhoQBqaOah838oqVZysIVTO2tJic1Dx6je55K6BwGDRlUO2g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMnWYR7pHGwEIz8z7GbFUl3cJvzM0LFn6CIaZVw7LLbmQ758qAqseyX4VR9gSsoKZy7evsMz0D2CgKVwIZNcZTp6txIvnaavKo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNF8tsq1TQdcD39rOdlr1pNc3z4yOTcY4gd4pDGJapUeaibPxOSBYr4ic7iaiaIzrrdnoLZzNSMU0VBvz3CAtw3MpZB8f4bwRxwr5U/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMbTibmBndCMxiaJ2iaCY1E5f9uzZnwAF5k9TWpZeyLS1lmVrWKlgFZDHibqCtrPrqF4hyhClYSvY8ULAK3IYWW2J4EYAYbHXNCeIY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMoJJXLvHK3z7sfXqibaY6vQgm78PjWJHgUX5dWDOuA5HRr439a6rJicpYQANduGstCDoLJO1XvicEJWFebKlDXUeQxdttCNsyj4o/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOtO1GyLkTdSXcU5icLy8TBtlKtD2EpYdOkzPXWtkI2UXUrdBP1rWeNCQzMrhXE9jOlnUic9gYG4aGLyMNYWibCiatoiabuacZe2M14/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPtBnibxEiacFnt0B1bpnFytlDl0B70hYicVhxCrXuAdoVwplqDCQiaa61HxuGca3nvocqdkk6FxW0mhWb4AkBOwsHEdzBuGLbbSkc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMOhUIF8t9pFuImzkYWspemqNaRz661iarEnSsDMv8wnOgRMDqzrx98AhicabicjzrByHiagBvc5mY9MGMEicxFeefD60U8X25VBvk8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNmeEjSwrXHOazBWZjIcRmu7HF8zIicGNhGgx6wIXibKV7qPR24EBubXNav2uXjbE1fGcfRZSZWRgT2dImiaqdUOcb84qedOzJjAU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNsQicgu8vdVcqjV80oibIwfP03ibge7ceNI1pkZbR30pUoA3aSYLL1YicfQbm26dHf82Q2A8OZLKEibJIwWR8u1IOXe60SibKFBJzm0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPXc80t6IKl2g3zB43pE55KzibDrjEVeCO1RURVuQbmRyNzAcUxTvTxHiaxCicycvF0cKIrias6nNyBtpS7aXuGP6axNy401niclpb4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMk0Uic66W2PZYEQpyibQ4NJC6czePicUiaQkabw61aIT39tdGElBa2ibkSJH0ibamGHfyeiciczdWyaOdo5GRx2a7uRb4b0Asb6ej5ticQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOzHkmibBHvukEvz5ibdyxd7CgeeYCgdq4ZEPNDt9eD6Irgia7ypWEU1rriawm6RBTFA1fOIQ8Otm4e6ALYrmjpFTiaWVuwWx8ehUc4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPzb2z215QHbDdKnmzSrtFEFibeNhEuqLz70H9GX5TuItrvGoNGy39rgYs3HI6KxCTKfNDEibhw8GPpHzxEUApkuRibpIWQ7Mibiajw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMCrT1qT5JpV40ib8CDH3tDK3ibuMxqSqO9ibMXiaeTTDukCu1U7y8FXPKRVju7yrEVtEqS0J4IlMiaFIbI2Xe49jlEAibZczo69aeR0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOJglQsficia91bc9TuwbUsRWJEFlxONJCGFZnAkPeNTiaCK9riclyg6RcqiaXQUAZOgTXc4AqicFPPAXwGoCVeR7Jib32ftN8f33kIrM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOibs3ibQQzDv03I1Y4aCCPpdxILuicLMFglLoYRaykl1pgmOKjg9h9RDxFBvT2U2BEKSv2ytmXK8MoXkVvqp24rsy2S3ribAEc9bk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMawWHq0qZ7jqS3TWng8FS5spVCgKQgfnbqDm8IXQpChOCuqib40pmrs69Gb7NIIDE7o3quDJ2vEibXG0VM4l8cjAiciaYrQLNic0qM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO8hWmfL2JT765E7YVHJyTDXzicGI8AVNHHzktmHdOshFJYZGTadu6CN2O1ib1wbf0SzzHM3PFickibDJibVBMicPQPRUWVtA8M0rpMA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOxILvhQGWeXBvU3cuwcmba2v1VEaAwD7o3XtiawmyleXhKpDmD7hsLCBYLFWKrLibb1jf2ib6rpgtZHLsOyUdXKvPfktSWKC0sj0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNYOicUKicIQPIsNxnOoicMYOibWJeEvyOqSNGErMsfNsc6NibJMpOYEpwyBibafAS0T0RMsvgqzl3gMEYucsm58AME3Fquic0pibWJYXQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM15s8kpODJtOE6iarQJHMiaXbvw4uxoslTuCB7x3oqzz0CxWqAwSA78hVfS4xewMibH9NqJYXb0oCEy2LI13ZtKcmvuCOqVNgU2Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPAicviaXgXOKMiacekLcVgiaCvu6c1CCa9IsshwnI4bYTCib9jUnO76bia1HzWbzKD54xYgluMrTthn4KFNF3YZcia4YKDOmD9ddiabrw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNDkm4ia9AGPYCZzUmQunfRJUFb1YlTaSXlXJQsUk63EqypB03heb9YjKu3dIeyJzgGaJCicCtFznUm5F72G1CZtHQF8Km5yCkAA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMLBMWtsXX0OLaFsmiaGaVkawhc0nSammibRuaWS0Rn56ZGSNe1cibcm4KNHXgeP42vNthQzodsIEzmNL3HmEdfibTCartDYSNibmdk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMNZGo3KlL4CEn8Vl4ic1icdKAruDhebLB3gFxQD50ia9fqqCMdRD2AGoQGPwuRq85jF2avzbKs1n2A0m1odgO6TiaejQoKypEb7Xg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOhxhb9VMDx12pZLbqq9tptWYtJPoNeulhIpxxzuaOa3I3tGZt1k4fmBMpUzPwoMtg6DzAwK3HSOluNwJjYEYxQGibkNpuvjkwU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPgQrRMAQ0SsL7lFVpVVZ7mmTUJerdHFjZFqxpPZr2iaVcGlrWia7ibTf1G8HYp7ZAKMVnD9dnCGQxWzzZwPa1ggmib2P9OVJlLYibU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpORAnL0ic6N4P7PgfT0qKDzF5OPfUkcecN3AfDMF2yLHJ4Xcb5SD346OXEpOafxGmAEHhVibVhjUClwPDtyhtjgqcX0c2MlmAxX4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMECiabbzicjbYzh4KiaVBibs4ib53FDeibRqKI3OicHvDKaJicLp1nB88rUpYtgyert8Du4jVM5zR2YUYXGP18Zq9mF8X0NfVruMt38JM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNrnbNmIVpLPG4lVibqibv27iaibiatzmtQNkgMbrALvfONKXrTyDsIicOLr0GcQRqUwC066G84eEicf8dJBuicI6QWTFztrye4e4OmmHk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPPg8DcxicAhicKibn7RpZhjdfeDkdicW0ERZIXWfV0O0vg1J87MXBIt8SBovgP0qkveS8EI0RI8YJIppYPtcdtK6zZzL2yG1iaQFCc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPXhSvQPiapZIC64Nz9UPvMxtD4ya9OicvcQA8m5iapx4KJFyK4ynghCEMzfvcHxuJ8hC31MhTyf3iaJMibib1AGibMrxJRBBmNl0ibNwk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOqzibENPpal8mvQKE3qqK5OWQCpZdAAXph7lXdgQF52XDJksXPfricqBkeM3SLOD9Bz7IHfhMApsiaicocEsp5p2SfoMRgHQiaVicI0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMON2F15mHic0bbicVDuwmPCic5da3XOyncPuiafhDdQ0ribnSnZMNU7nj7YpLVRGdeGACuYZx6OvgxBLv8oz1ib1iay1h7l8HWNffgY4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNjia1JXSz1qkUAKcKeOD1jBibC1tEklKwBnDzAyEUwKiax359WrqqVFBl4H8iaPXL2b8lrsyWyRPPr4UhG0vs0jV5dxsl4libonMAc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPR9sQd8XVOFGm86SC5hPsGEz240Ol0NpaCYyaUEPvVUfRBuTmIeS8HXzmnJInEh1kCWKUiaLYaTdHguNW4KFZUQQdpp35D7XyA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOsw2TGTAK6GCLsbMF4nInscliaHgF0ZsLrGJUwFEgeVekux879g2d3zaSufaQCb2sXzEqiavp2MskbrnnjnZRMaWrDK67HhhbxA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOfpgkkyhtl6zxf6IJpoBhDQIRks9WVz7e9dpNT8ojkTZ1c5ObpH6KzsFSm2PibecVDtnebbicER178HYYVicwMkLVYN0l4XSzhSY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOQ5p6iagWTJye44cC0ia9W4rbcWqMTHQicbRVhfFd1LA4xXAVTmOck5Sukzkfg9QytXWMpnM0Me60NLqIcnMtaqOXmbIfzeIzxEU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOqIzf8oWFZH8D1ia7DFrF1XG1iaQXluTecJvz4yFdRibbXqp0w6GOAm7lQrTib8njWkPu1NPGhYEhb72Gic8DxBnSqcUChyc5HxVRY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM7fr05KZmPf1X9DxPiaKsLKiaZ13qGwrd8eRmqfzOFHs48AzPS1G1gsSXP32GhvZwGlibbAiaRF91Nly2gLMMNIAictKibJlUNY3UaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPw85ibvINEAS3T7gSfE5v0ibQceWLAKA1hIGoZoANUNILnZUF4wp78aYgxL8Rp1BL0Fmq0xURJctWibBNCU6g7WEylrBlxUdqx7w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPb8zbUmIF8Yhft3xEZlvkdPC6FVVkqvIN5M4iaUVK0vry5IdEq6mugxancBdrveu1sGWoEtu956N5zY8gMlPxXTKPzFwk2Vibrc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPAXJbBBAwV3Nq50icxmahFqxHaGNGsKg4yEB9eyg9hm5uUzN15jvYeBfjMZoCx0Kcf5RnOicxm4ic8q87BkPq8DHyg4U6aF5hlak/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMGuEvDrRLfHYKVakx53koMDkdib4KS2HAcocKgCQRiaUb4SyLIbPq65p6TsIf5WTJ8TPwPOMyo4LQWpuTLlvogHicWEHRY4J6P6k/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOocxibd5vZvTfNJ1vC1H0Pfa2ibfcVZgnK1iaAAiaomfn2phKLuu5CC6MYpuGDJNedR1NpxPEibOmic09UpkwdJQ4FeSicHRacgRJcWM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP4z71bjX5eCVOibJdkSCgG9HLGD1qSdJMXUh51zFwxWl4lSibIZV9o4TTTKIIuicdXwMicVNSCjygNTUncPSEo2UcuJBYoVwf8NIc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP7Fic7KNQalerdyzFDBDYXlQkz4aiaXib6yeQxOAAhHxynJQxckeia30olBic90eVd4rIBoKcpcJso62v8eAmVKscKhQdPib2fX3n4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMSZylUqWHIzibiaGtRF1GicOm6bV9v30D47IKV4ttap7ruicvZyBxYONLlryAlB1rs7wu29M3j6ak4Et0ZtxC7ZHhu4egsgxicvBp8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOoIRBrS6Y7d5CZVbBiahpN0U3ZE34mYFhpev3sOsOrzoUGYfXsYqAoFJUE2C0BpyFw2Fqx5xK8daZScBqBmINXd1NPM8ZhBL1Y/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNEGEsh0CusXjX3wItkyjfz3vvjeekMalOSr0CzgtZpaoqNwNhiacz0oBcCTu960XgrEWtXuibmUliaibGD0YPR8tqNFGCI5hEPAP4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOX8fAqE9ErSEwexAUkQc7zcxOLEbslQfjghzVI2lKm8gmqs4DWiaG9O7bKfDqmlib4hibVgEcYNBoXiagkmucP7EBWoD2W2POrfh8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPROVEBZuhH3ia6DKvQJYiaYzQ0ulPQ9ogatgn4fUqt6IzpibVMQKzmYdTeSianI40B5Q3mHrWGmg9txfApwSQwCwHsW0wlqicrmu3Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMn62EccNktqPR7UbWloq6yyzaTLR6Ggum18sLOiahbdWPmlFol5RaOfWs7ic2aQpqDPiagRDA4SrqichiaMYiaIoJfC89Klo6VM0wjE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO32CxdmIVcwLea10NzaVxqXZOiaOJp2K9uxicITayCeNQgS1pMac07Ccz0M9s4tYY91s9yfTx8mC2nM37kiaibUtaicEsia9YFd4f4o/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOsH7EdgEoS5cP105m227cV8MdxlxYc8tOdWP0uLfjs9NgSyeqJZiauqXucMEedjMgogIDpR8JcNRNyic5UxnSeCWBF4IjENuK8k/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPOxJmFqfaA1Gtny2zX7AwmYJFsWr6d0saCgZUmGcgxhr1Rn1OSBFycwL2TnL0bwWibvhB8qJyXKHicjZSKic3vCibzBZ3FNiaaOAjg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNXNR6JL5aTpoicsjw1xicU6qA7VK3ycdR6eHyAPian65zPLo8pyic3HfEFftRBSnxgm1NzEdSwxE5YE05OREVASr5TlggkjkAzvH0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOa3UYqHDrE7KVpLn0LKKo9JiazQM29PiazGjf3Iy8QiaINvSZrAXGke2RVKqhGxhHq70ibWPQt5tNMFM2r07KGFYibicv98yyQImjmo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpODZiblibcdicZ5DXoLqfUibwyBsjHcHuOkVlMibbrxhn7hM7N0yxO5KtzOE9yiaia3Kn4gEhQ1bd3aBBrYib7Kl6LjlJTvHAibQXrekHCQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMGxGGc1JXYsVsg1lMwcPDiaBOU6aPib64nN9k6u87EdUFxHrysvOxYeRKUGoAS3jDdOPdjUutKglrIx2bOyib6YDA2UIick1RNfl0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOMTicjTEeugDoibnibHKic5TVJSib5fUUsibws3YKHWiahk70ib3XDlbudG9Mj4JSUL4K0eGSQZwQS9icjduicw4UBwCtXXSJXPVW7gbbibc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPWwcnlW2cyULwoOGSnTMrlx3PEoGDdqKEMhrnd5PmiaD8ao3vuq1eAkl8KOtIK3h9yP5ZMcrBoqjnPKX1SGhABvkWu9yr9lJBc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOnIdGgTPCuWfaTRHV6vBPjWLhdA7mC8CBEHdq6R8Lumw5QUQOv9JvUlTF4tiaJ1YbhGDSfVhZrfyNGnqMo7qkQ0CM7ziaeKxLEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNkDGODbiacf0G5iaVox1ykwaHHCCicUNXphIkbKv0jeC2vdlMWeHSVZgcOq6CWWboeqhO6m9GXiafibxJ8o1L0IqEYsCv7HG9YIftU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMo9PIib6UicKgiczExXvKJBvIovvtOvMGBaAHYwJlSL6cSc4dtVOQviaSUQ8Pvv0DzGfPsMytowBiafvqNhJw6kUI0NAIZGBJrRZjM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPMLw126Irq42lQALhkjCLT95Ta9QG9kC9KmmrRWy8HXCRN0aosKVdQRHYFAia0gwVKlyUPYQqlWzfucZ4QyewIRnmJQkiaLbguk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMx5lULicH2MebiaPy4uBLtuynzibddTxKibNQM6owFoicz2vvTW1mEG3ibWYzOcNLAzWXgg1HF1hX2QL1Fqc2If9w2G3qs4bRR8w7hY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPPAo7NHuvAGqPb6o1ZAInI8ecotT5zjNywOFeICm0dOEjfyzTZ0eib1Slzkaw4ThOUS66IiarohHvbVQ1xI1xJeH1JAzbLEJXz8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMhxcd4G29QXUNcBA3nREW8I2UnRL6g3y2UAibsqVqhlJicE6XnsAVEqwj6ZweBLellGNTsgyCictZVAY9wHRa5yWia746ic0iatBtEY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMjnjz4OatjNmbiarfeOLJV6FRA6mIibvJEralm6zXiaulUarc0pBqRHl06ua2CgpBUEJ5nUbiaFANSPxGxzHbGn2uraUg9O3Jh06M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOP7ZBl4dWMaByQaX2h1nUHsoq72eg9SSJz4RkolOWEt6EEAjQP9EvBfKnuuVbGuNjco1icRR42MvA9frSrujol8Dr0Dx8TJavU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPjkTSbmhCF7CibwFsfS74bgF5m9MGTXMFUeWQDEhicS96UDZWTN0brewfpdMWVGeWULsypm7msHIddMrA7X90N9MXgeAdPjVMP4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPdn4aT3LBTpycAm4IgQTHfaH18icMbgn1kePmGX3xDF5LAuaKXSwDtvbur274RqslETNeF1vTvFNBAick6dDmyIN4lkYX3j4BPc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO4a1VopiaOFqOfQ8gxLgoLoWcor5NstxtBDGgMggQKzM0GdbhFuHEiaz1ZQhgiaJEHejNF1PicsYziarPibH7Lj1INPJA5T0BBGcqUA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNic6rDc9WCjNFQoRPwl1NVARTj6XYQJbTib3dAiawvARg3LicWPhbIESja9GsL1W3WWM7bX4lkmWibW0LpKu9mF7DBzJJMFJ45zoDo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMiaJAwhDCMKw7RVmscicjiaErNg8pm8aibQXpDELaAlOAq3uDt0nyia4FHv14nz8WswhMiaiaAFZz3uPLpiaib54fmsPI7Bj4vrTXfT03w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNSgicuWFKjZrjYPlD29qs5IlZRmjVHXa5krM8eiaYzcjr92aps5r1FQZ5Kpib8sj4U1JxVH4NibbaojGXksKUmicl53LuqLlbLDMtA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNDhcAnJ4ML5mmz71LDp0kY5EWAP5jl5DZoGzjttpbtZ2UXpeiaQQiaaZArViaMKqF7s4J9obkSp68e1gicUcX1qnn7eroCxDldiaf4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPNlzniaAwXqGibkicQfubK1bgbvHjRrYPbzRueNqndMicG0XYIyAOw5zmO1YVdoxJE0ib56V9bd9IVMkwmy2W20n5zbiao4Q35BRg8M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPXWX32CX9vcdicR8hJTpka1ZUicbibtX3LRJFHGGQqy5bGYcNicFnP2t9BTHbfb9FI9kfZ4KLibeO5BSicfC6v5aic5A0kySquKJpZFc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMfhVCN6Cyqup55wiaSveZPwnjNvSya20ia30HNBsHYYhKZP8VEJkBkIXL4Z2w36FNgKX42ou4t9fmmY19EfocgCdNwr86v6nBxs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMqtwxeMThfx9s95oCSgoRJ7HEWicDEl8X36mcOtJTicDZzTwqdV1qMSLCibhM62m0HpibiaL6wGDPeibqOuo78I0ibeLguRnBupqeHRU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPKG5DCanEkR3kjrSwSsHTxdoMWJf6bpXiaVgYI8njDroTBEQvNmhhiaOhcx51kVyqKRicJGGquIiaCUnjXhFh1LLpKwvXCptV252s/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMia0Yn81eIGI2iaoAlngwLb3foaEMpP0jeg5sQISywicF0EFE51hOI6pzjFQmZfszOLHsPz9JSjib7rNancHODEhLib5uROrqHNkqM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNLU7Qq31BNT29gADOiceibic0EwnYSTuAyqqz4tJ8te9oIFNict3EOmcufAVmBeqNXanhiasJptibFb4JtlW8oSqk1hMBknwJTleCHo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNKyxDE2cGR6ibmMibZx9Yy8jsDEclic4zMbnYUiap8y5akmBMKqvAbibMuwdOsYCweGCJicEJtxOibAxoohG1TfD9mvUJchBdDQvf5fU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMD7HtphUuOeMlwCricibg2BY5ueZd1dIcvZvRNSxCR2aXj28xHlGzM9fQSZ6EvGCIYt6wDdUyPyyYl848Q2Nm55AFibod55rKrUc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOvTBZ4TPDMaXq8qUqG1GMPzYmVibWfKP8YJhhwnKSr0lYo2uDiavHicf32T4kx9jfqicQzrJNC0g2cxtxF5kDT3sM2j8ibUh1SRZLY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPCA7xGqGcUQFX08JkRnT4AHMvHQZN5hcicQX9sX5kuhIooPwdhsV24UZM4DbXSYsxk20I6v7IJuhCqQAae7zfQ5x4EOs4Qz4Sc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMwdFcfQTzvOpa1vq0mCep1iavPpQ12yDPp5RuwrZ7jRorg7stbMaDdUF2zqicVLAMCfcNvWJvFN7Zu8a1p0bqyd3c7ribK3cqvjI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOgAvWBrNOmVJt8UZSvicovwKyW5aiaibVSYmcT7xRXBFfZrDm4u0o4rYHQVF7ZqDnnZia8NOELL3ib2t7A3Bl0IfOt0GQVYeoJaNko/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOceDlicibTE3KqEDqT1YqSn6dovsjDzz9HibjAYFpsWAyytFcVwlxWFa6Wq2TsAwjLgMvmoRFBFCjUOKkSKuic26lAXZ9NCQRia2lk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNNVvdKahP2gGG9go2aKYPetGicuaUOwJDN26bkve1FRbsFKlR6XKUyIiaJSqe79FkTs4UXpDkNX9dwPWPicnz3at1RsUANxN18dM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPUib0Sxic7GuvzQmIrwyCy6IGAZ88dDH4ic55HJX8ugfO8tzYtfjNwe1zsqsMykAnuicibJ1MqGc8VL6LNQzNLOvPwIHyWtxlNJIicQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP3NHKbWniaiaZQ38PqwGYqQLibArasjhCJnU7gnvLECwkqo8Oq6nn8jL3mUPQPrVUFrBzGt66ibgGaibMKmH16oAEJjicLjqNYR5hGo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNgUKjuztchGI8olLRdjUE2e1TicaR9KNVj3sUJsVSPrxEtEFbCbzpT4nTia5LPLBn8LibbLQORBe6RNl648DbXBEFyKRvCmO6cX8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN24fISmRJWicGRica1cjib3Jicaib6qPSYKc5ib7JibtOibS4OHpFm1pMXSJUI4H8Ugj537lcp5oZGunVndjrAicgibKjwXaHJnsBjTOMUg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO93H7l1y9RVEt3ttAmlYMfe0TkF7ISC3NJQmtdUjRYQbNGxGIHlJYsicic17SGm4GdaqCbHXguSMH6rqicrNUboq6agVKz4D5h9c/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOf3IwWUj9NickVI4Ay8FMSyncjYvNLiaVVqLQl9kFGwAPBqFxzG21M7qVBciaxO7PTibzWo9bCd8FdsbGvErsO5SHq7FbycGcvtdc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPvozewiadFcibMDdVkt0X5nZs3ic88R7ZtibHoibw2pXvIsXk11GdqKstlFjzd32oHrVE6wSoKpmuibrxddBsiajtR1N4N39CZjYsksc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOhAl7WiaSQe1ZhATZr9MaZnLdscPxQERJRhVU6jiczA1CCotWTvqoYO7889ZF4ibBLNt3kB2q8108lKBQNRG2FgY2lpKSibGtwmlk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM2N5kicxPkEKAiaUjL2WH9qdjTX8EsibYh2BT0DTBKctksicJn2YoLnKUtXtYf8YTVARES3RaPicsicCfcC97E6LhAgbpKoEX6s8qJg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOOwJicy1rvHvzhmMw6ZjNeFJV6L624upR2cIeAPEHvqxcIA00l63vPHtLKkjznYWFQGsRNYyo8IK3cKx4iaiaGkOHg0UmuhJjyIU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMCzoibY14BtunduohyEzttJ4g4GzKBlmR8PfbqGAN1A8VcWPib9TgBEkR7dCR87NMwo2018DvobiavfS8ud0fbEqGrzNYAuvxOSg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM5z2iaF7abXoBFhO0RkwTo5emcwgZuMMgFcibvCLVmlArd8iczud4E5z1d5nm2KlZGPRYgLPY9J26JwKuojPJ4ZYTq6se111Cd9c/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM1msFOWGHRZFjEcicM7GQSoic9g36fbIsfJr9zPSFg1HhkY4jb01P1xL8eVFl3wbz9EHk1xqpnXpT3GbhKyicQnMYD1No4J4kJeU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNMYlp3ic0Xq0nl1vsjzmAUuobX9Itg7y9t06uxL0qbJVdnngTQoDbLeiccS2bc6OqxBCVm4gGzItOSGUlOrd2lgo5iasHILibUVGY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNluPVgq6AWSOl6yKD7sicS45vJT7q0kFtiabZ27dMANX0h1xBJOlIKK5JMs74rn3lkCAEqOVeDdYqCiazwwrICcMXanUlgXVFthM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNticpTDYTQAUwlSEKkKgW4jibVoGSUtEPibS7D3vibtVIzVmp1BaFxToDiceibHSsB2FIrkPJrI0jfu9aepWbYY6Yu0JzHA2ibZEAJUs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMHHqzT9y1LfvL03Waib5XibusiafEgTOqSxn7S3Blx6dciaAIaE6ZDhAgAjJAjxm6aJJFX0u3vS5E6qYwibxPlOaC1axTbY5TBMtcM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPapzXCdfJFDo9n2L61lks3ukJjTiczkMlIP2KvF8DWDJhZhb9ibMODJXOuB257W5XvASQPO7mlhicq4zWb8nX3TOwpvricmWob7jY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM94tlz8uqUHVp5AxIiaSLKvxItz2Txz397GV1SCEmDjYZREnZicqcnpbw91czLKIM5UslRbC13tZTxM2KwhrV91v2QXCuyPVI3M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNDiazmSzcZTWbOzzQrO0MadcuS3XCIIyWw81mJSJNNJQBM3BxSYxcOQjrR0Cx42wwRy2OibzlRmwm647Q2EiaTj9gaU5Ce02o6Qg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOibrxFp0dQM8tBzQ0R6XFgiaH1tX1rlPfNjpkjL5531DXTYicFnRyKed2nIxxe7bMTRnAw6Nle6HYWV5LK22rsVIictN434CHzibTQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO4ltCTpLrUxDcEukfksIJuDqibJtF58uSvaWM76vicx1G76gAIOxO3gesCuriaPLjqCicDJSlVvfjiaH48pIk9vzOmg0GJqLwvDqD4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMf1aNDibTQV3whq6b3UKlzia7OyiajUPb9ribI5jIETtOmGPGxebOLIgeE29nIorDaspcFI4WNBYH477kngTE18AOCGeuBrLzAKTM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPgpkhD7McdHozW9xNG9qegPdxhG7b2dPwZicEf53s7lWcOIjUlkxA0liaB88EgnanWp1sTicx6KYKz1t09JTsa8p1ckdCaRfShhE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMC3UBq1HOabTzxxq3b9AA4sJxBmTmbZqaR5B75iaXGzOrx3BaSUzK4TFS473ibf8T0rRL8HdVGibYHWnnroxUowMicLqo0Z1uTuRs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMu9sjSUswyLsWQMcfJvWKSxF609cmjORy8ziaqygicp1Iz3QrVQmrOUCG5WTD2vn1ZdhwVHict4GlqGogM8kZqQUaygq7NeCaGqU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPMolhl5XOMaeVxYWicbXS0F077Gx2iaOeP0IfWRVhY5knVkvPQIWnibW1exyeu36NWMicFQiaKZryufQNHUJiaMtE47zSzr5l1I4PicQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM2za5du3vxmfgGVjXdgL99COOjQzMgoVl6scZO9ScA2AlB6eN592l3hzb5ibWqS17U68dFC7fe0lnmoBibXZaY3wicibuzic0NSsTM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPq2Dg8llpW5m1UtNo6oCtPibKqJpdUWSKAZ0m2ChzKlCpEpoNRcWjv8p0Psib6FTzvv0BWmzA1yT7ibG3p9vL0fymaeCFmaWzcBM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOUHAK0zicrLDfn9ic1ic2JvibXuVj3CiagrtTZXagTeGtNxSFLGvgxa1xEURTvB5Va7YfcdZtrMaiaxNeRgCa2lLyxqlMBaRIic75Kts/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOy5AcR7tlU2oojNh9cEMdwsqhic6Of9nKBmZicia8CgFk5CEHt8Biamx3900m4TiaVx9Oibl2EUWCY3p6fJmeGqIbRRPiadhUxB6APkw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNUCf9QDCCDLia9JicOaXgCIMIQpcoNZxwefibDySnDhVTia3xFAH4iaPxcNkicLAN0uI7XPcMwZ9ezdR2ULffh3LvrZazCV2UnmgZPE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOKd2luheMczK2fDaYIGPIYYtlzMwcrKuWg2zsva5NVibABTyickIVc1VQHmX7OnZq4tUibflAqw5TWttTtqC7yaAokMqDhXs9HNM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPkH0d5wPwPH41vXe3mwFrWVOBYV4bypicWuEqpO6ufNw6H6xtlnpEoX15dDcwxvaVFzC0chDzNDhLlib3Jf8dYWapJE5PR1RCWA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN6kwlSiaINCeQ6vb5KWbO6Jnjb3j0vcuV12avXMHn9Go8u6jnIp7Lj6eFJ8nxXDssdHdwHsvap1MpoBAOYOIO3dbVibYCRicuUAY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO8oOo2NUrblvQh9sAaUaKm74diceYfluicDibeLCMTicMHK8otcUdPNzzRDDAZ0lRlfukN8Gba8zg9bt651BUX0WibUNpiaRZnPgVRI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOIlrzVV3GiamNKPaxZdxFPetkCGcGvMPQaxiaex128icIjjt2ubx8xhPrSEZRcjq8CDNpqZm6YCmG87NibmI5udp5ZcruhxxQJRPM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPwd1SxbWfaUr5VU9AV87SiaI9PI1R5A0rrvujicaqicbfRu5DF201QQZcUb9nuiabBCAI9cUKRsDkOEgX8kn7eHbbSh6RybicHOMps/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMU1D9b3iagJVicy7woYQ8kiaE9dcX6VAVQj02W9crxwuaAmfbicWl1NI9KqHc6Jy8W5UOgIeZwgYySfjkyyW2pw12ibdgsvVTCEwOs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM2qVibdSDQmlcl5SejzRQMwrGzCFeBATTSnFV4BnF1Oy7EYhwUG43PqWwruJX3JqaAaia0gpfhIm8TeJoxicy9lYwT0ia4u4vFtkY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNr9ZFFues1Gy8IVibe9CJBa8SfRhRXTAehkVLrtViaojMPDx1UwWb4pO5ia0cnBdB6eJFWILrhfFruj2vm6Zu9v144ZJiaPGIibud4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNnVTFSymhhIhnQX9g13TFftnMfI1D6f6wZHzcPuH82X3PxYEEznowWQlkfvibiao4lJ9LPtNJoLfGAz6tvGK49YDYUcYQVBWtic8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO0a3BmskS4EzCnEHp8hhe2ojRUBC94RYQWWRvxMnokgAzzpPky4PETukTsaMv4Z86EQqRrqQyJRuPSM8F0cHUtxicd9oFTeftk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOPcibEypiaPD3GmJicXN8o9icAEFqpGGnEoJfG9zUgLSOZglRbzbWiaDCeDxEDOiaw2ozUfkp5bozic8dhUXlZkibQpB9YibrZicxrz2Zcw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPJEib7VY4iavKaP7zh1BW9ogUGsmiaCo3aUsQvRf34icaZJ28pFibTI6VqWWyNYficx9pGmQjUaCgHWfFLXnOtx8CkPJIOEiay89SyLs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMibJQDAa73qb7Eic79AkONWJBK8UZ47SzibtNTHhXNh2tV0ic2R1NribRj6cAp16cO4kDYBtadsicZphPgEzMbleeLkibf12dFpJs3Wc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNAT0IBDt9Z43M21YDsXJaNIibzuh6SJJMlYcFgibq2CTmAQqExS2gicDoibJq0xjHsBunAuVXcjfcvxESRdkAUeC8rem43fCZzv3A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPylUzZEzNFoLFXPhicELKibh4TzTYzwGm9J1XAv5LkRBwj3EwaibeCwpJMT3ibsthLmkK5CR3Jf3DESCy3kb6icZGKombbYdz6guv4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOrL8nes9pF9zjsZLgSG0bo0Y7VXE4bGUeuicCsLOS2DRU3XbjCxYQlNIThRRg3x1QIgfazYsuW01G3Ou1wcqhDTXAH9hnVGAWw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpO2eJo4u6UH16F8wHPoJUiaRJaqR7Jhiap9UEslUibwSAEqAx8vT1O9j9t2IKfvQ2vKZq4f6fh5uqxLP2LdXhibxcvOyBot1lPeK1w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPdXBUYZqB7Q2GFOTia8eKgwX1lbCVwAQAztIglnHRXxWPn40pEZmLG47qPxp8zEulPic9jNuPthIyu2b8etINK8d42euIOlBX6Y/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNl0LnveX3gK7yyoaW6G77gvlhkpNDuNOha5jljCV9U34TJWSB3eeGW20ZWnPlgCZHzUXYCnY54JAibjibdtiboUsBf5hIVuBEcgY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNL6KEzrFHYYQZOHlojSsNpibxy8icpyUG9cIsyaa25VhYEiaFbohdcmspZichVKOBd7dYdf060XPjgHiazWmpAOITGcFy5EbcedQYA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNicibcYYflawYF1iaZyhUCwVic9cVmUFdbibhq4nicccicRdJIFzHM7nog9ibOicicxU5R0sj1LLNeeQhaLUpUGjiaBPKcaFTuS5GNRpZLEc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpORXCkQ3Zia7Z87drzy8lcOCfSWIibRf45GoO7ysheODkgMz30Jiak18hvoUKUqvKVCwGxBCctp6ba7552HNksRCYhoJiaf7wgGGibI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO5rIR6VDxeGMzwIfk37c9QguRcsBoafNgWL4sLEDlvUXMumH4RoNM8O5ZytKXbC8icX0zLBSXxSrNCZY9AvDXzq0tkEiaicynB34/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOhNJ5CmRGzVfJg4ib6hSCicMtIicIfcTVQTWAnZUBkOnx2BpSNtpwUfUwzz0nWSkcicTkz1bXw0icZassETWhBFL5jwia6EAOtia4Mjo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMJb9xlwq2wA1ZdwhvmeeSA1nfQbULtg58X94slibR3kSC7LwQym4acU2pOu67ohjnk5mbDGVEhlpzbjVuFrLpkVmdJib2aqbST8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPPGgvuXibQxlpicdIMuib3ATLozLuHhgXBsibsic1DDtSv2ftYGF0a4uXUrDdskTusoKDEsMNrAESFxHOFqA7ajXUseAeqibh8MquVo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOMJia8I8SXPwiaFrbclZwCdBHTAE6D7sia5j9HUDwfciaWyk5ibJT91qIaCFpcmtwNdsVw0Eo88gOFzoCdWSOtA79jX4MOzN3x4OLU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM1KIIBbmHVcib9WIvRtS2Bgdlw4PYLxNZRWFRzQ4r5C0hiblPGEy6icTkqt3uEAFSpGUpS00Zj3qmeDfeqQv3jWkBo2tu486OibaE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMYiaemtW9pmzycHEXoicp49s9UxoMDMZzLewFJJs0IuvG9ygZYuvHnjulbDGdcFOGicBsZYqxsXsUZgUCKLn4hWllJs5QExCU4W0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNVzpWzku22tZvuuzOy8HkjIJMEda2nDIfjyeeDUE1icWlZf5NicpDlM2ShQoxZiaeZfDlTyIqfaUibxDaSwCp6Um3ZDI1suDJPHq8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPDqYl1UYYjU5HesPSAWtA1PLGZF5eKSHcKyN9BxGZBW251hFaqHw0Sx3CNZBQJuuuJdsTibiaoN301yFpbQr1b7jzdoqZLOIoW0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPLfEI1DBdd60eP6XrichXPTIdmxtTIib2U77bD2c2IlJBuEH55NtbdibqxHZMtZsEEeic3h334GiaxjlZuFvdbrFymy6GR1MCPyQZc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNloVI6mtMookic4pLbu4MJtqZc3qXnQkicHAiaxWZlnFTsDnoI5T8ZsjIJ2bSBxlMGYgMveMQaIYCxGHu8ANmFCT6ImhpfH9QLmo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOUueOIYuKOuxk0rdxET0efzG5AVWFH0YTEecVqLwOlTJNqudN2OgaEOuzJA4sebTvfpRIhicl59Mpo0s5FKKcpM4owYqHPvHMc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNPOQ7GqfAXGbEunxDkyMiavYpcpP8X1LY3L8h4XrRnNQMdLicLxVrPcQFPgOdH0eN6yVQ36F8IbbRasBFwm2lbPgv3oIjmgLp2M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPiblD1cicY5xDxibiakibxnJ64IPVDQwEPMT1C7KxhUFwI8u5ibK2PdSIH0WkcibcCc5iaOTjLDkLwb3R1kLuLBO7JiaTWBjDBictTP173U/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOCIfibvctyNCOVwiaQUOiaJiaKjvB8kvUR09uessMhBPyxjcpJMLykwiazhjHX4HsXyGbo70pNrsUlpaWIHvXAGiak74SaDQLkt81d4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMnjCLibFYiaboX7gZic926IpON14x9AXOfNKnicLZyo7pwfAxDsQsg58XdZRzJG31xW26QWfexppeEXia7CHddB6rZc7Htf4BsHUUk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNV7r6V34xQ8PEibicgb5Bbiau9h31FHYDCUeZMMic1icZhdyQlvJgdJ78H1FOastnGpJWOqQFt6Q50YJQryfGPSFqPgia1ibLVzFaOjE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMOticKROGCJYRoebdJSB5Ndb5uTlgUMF3iaZtKVpRLIN9zse9n6xv4fLch3ryGZFwsVC58JjOEaBnAk4vy6Mgx5icrvUKHSO6SZM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPicibzn2QD4Sxw59HYpCREEobiaI5OX0CWYT9L6KAO5fMnIajdO60R4e6BictScfEkjicsYXwvp2p85mJgaxphgepKqq8m2eSuCxMs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPxEXe7Qk9IsCB827G6BX9BEBmP5tdZgCRyiaPDkLARic69JanYPA3cSEe18AOGFN8nXiaGG6u44ogR1dlzibamRk9icJwpuDs6HoPc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMbT9ayCjdWAjJYFpMXia681uR12njQAab7FEeE7V51aRRalJn2IwzLXusg04mswia9no46myxcQA6G0O5y1aHT1jBF0NiccEF1Q0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPzM946ObYCVJlLzkzibRVUmddetDibJMXUaBSZWMJ6KwbPia1UibqYXUq5sqJuRIm7V57yg819LI4dlWABwm4YFDhib4tH80X13yME/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpP7ia1QicwVkLZKjOjCP0A2KygBm9OdpYZxe5z6XZyr55vOTCzVkcQHkXyVYxuEjRMOTGwZbb5ibXZRdibb5fgJUhJdlAKFMOibwqnQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNZzicibjibBicl2L4uDUeOQEZ5Yhaxs7j98XbiaZichF7C7rUdDzK8m87SoI32T4Zs4x1ibFZh0ULhde0n9cD50j8g8s5HC7xia6GZAL0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMxibrl7jiaLmBD4zXM40gSRXtUT38HtPH3kvX9icJ3wwpRJ2RbojVW8S006oc0O0KJJibgZJ7KJEa0159YHgvw5KoDu5IPYjzlkibg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMU6YbtIPINicK3icM67icbbpBzJXhbhXiaPHDXM0xjJPCSyh9k9StTyicGV3bkV0jWIrqwTjbDqMxzDkXOXVnIXRKj7YriaNmvniauW0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMLryKSKMQB3xk6X2MYvricZoEyOob9Y93yk6DgM8EaLjnCXVpmEva2qTibwVC8HLmLkY6kicobHYsSFLFsynJToMb1OWtj2p5uBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMGibDibzKeJgsFPLp7u3f4WMjicmOAK0YkaWLFHBJmHHIYlLv7Iia2kT3ic5AeicGiaLaeLDWYTGicia0827icLaccFe2ZJs3rt2f2qL2lc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOBibicrHXz1WuibhmyW40F0B63VX6tgCxcA2emJ9NrkQWBHcJSrpNe03XHyabeat8FnYtgle9ic9iam7CrMGpMu0DRD1hb8biaJ7xds/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNM7oJE0KPia9BFnITeIRejCHTDa2TTKLX3ibJf7E63vhnkicichxbsf3c0MuucI5SzOUuMicv1gfZQ1dgaE7O5tVsggauTjBJsBfibI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOpfenKHkiboMbeAxx4OaYsbxzf8XE9gqLlibFiaxVSiaQhxne1InuqcYCkE34rjwksMeUWfhzViaIrToibRHIxmOoWltLaiahsEKQ4L8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMlh1PWu9ibhT89FjB5bag21MEiaYIQbVc0ibC4cUe03gjkwCEK4icYufiaibKmrrFBDo1SNdRh3Kia79xZ0Wb0PRdicW8avVK37PZgdJY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNuWicY4PKHibL2FFiaFsCZz1WyoNFkPAib4X3uZeECWVbKnJu5yh2gna33IwQOlPTibjC59G74uPLEwConSPurD0Mytm43GVCjUbTY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOO03rkQTFBhHtumFOODfeAhTcdhQ8icSQaYjPWMoJRPgPh3SsiaN1DzzSswpPG7M9iabOU1NwX2RJAyJOb2X9Rtf4ToszDzNJzeY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOsibMNjmuaOIR8ibcecciahPrN6jbicMicCG21DzLfLdMyC7tDJYBQmF2qqgGNVcr9GRASxxLacdrjBpH3a5ey7ZRpIuVgBAM6vs5o/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNCkSdGD70xiaWW7ia5gfIlM79qX3trZsqOHY6QE9MTwJrRgu7ib13lqv1z2qMvll82gS1CFbms8IHaZy94kz7uiaW4swpUKrjJawo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMp62Yba5Jna9icGNIDtlpkjtVib91pGkxNEZXQhibdzv6pYnhgkOxtYtLxdR7OE49tlBbXbV18FqrsgLUHFVSzUoDQXjicmK0l3qc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMOOX22oWONiahibVftf9WAdeC8o5WCBsMgnRhhUE7y33kicdN43QOeGYaf4VBIXytSNJX1gDjlian7iaOSQTs94slzhpjKeM7icAOVo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNaibeafQibyoic9ahlRJjEI97uhq5owiaN7hOibHicvlWtURamVDAWtHcaWs8cQel5It6LhHo7SONNlqNTq3V3J6eiah8xkAoUOy0tCA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM6yPbw2xGIn5FdsJRygiapkHOmnhHnS7O2GYdzuqfL0wxZPaa0afUqQXics5jXbrLGiaZmFcnGqAdZAuLtJjwO9sROHkIlgL3gBg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP8RaSco0CMF809TbkOyh89ewQSyj6icAiaSBo3mibdF8bAyavD72feCNPtc30KSxW1GtLebtDRqp9yA23icYr5EIpPnsfrnC3ia1ZA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPNibw5H1NVRPQvsDTW2ib1TB9iagPPrKBYMEq6tfiav9qHExtdyKXPjG5mQGfko0ZxUo7FZ5FL95sj1Ovic4sqFpQ5MJC622SdibQwc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNRWficNicPcOtoyWSDokyQAL5DjtibbhWkaf5bJKQ4moicgTHQdxf22FiaCQ8Kv3pXEv1ia4yf69ooGUS2Zdb4INuX9csUf58E5nQaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMwxfDHjMXMceYORbrkFDVABIicfTMvIicMIChKD3RKiaR2ibX8xp8RbZo2RPA4GRnhScu2BVEkdmBib55r47MwqpT3oZ3E65KQs9gg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPiaibSn4nPmzE6X7XeyYWecficEklBm7tymd84ialHuJ4stN5pRaUpbSd4mrNKX0SbvmexwLkZKcvoUxMEFPCeuOQgcC1sTDiboAlY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNwldUnh6tIuAPCcwicfcl7zxOxmicFHP5xqsibe3SHXppjxSg9TPuVpzfn5ia3MG5VIk0BFFtnBrVYM7Dicab84fM7YsHDdNgwzruA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpM359VfU0uwrVhKliaPZWiakhGaRkyuzO5Ir5S35FAKoghjDNxicDru1ttHpvlicXYKMFvFnea4mx5zX3c2n4Q1t2qZmgFvqGLlvx0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN927KgwHAZb3EOiaBA2d0vbYVRx8qian0fibicMibvDMohsMPibjYjB2ZWHUF89wrcj9t4RTib5y74MZIMXXrHZicQgEJLt63JEQoImGc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPAxyQUsmGicZ5lJFZeypY1w4pIBSVpPIvXB80nx2rKq7zM1j7W4m3Qdb1PsaJw4VG4tgqkHkFWBQVWN6UpYj95QyPL54BSvvO8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMqLBhED5eRLJYoRZYpaJ7zlcOX4oYLk0xmDujehic3smAxnBt5dw1pF6FwCxzDI6HgIfCCzxVtAQbHqHlVapWo4JtCDB5ibeMQ4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNfmZWklaqYibGtyjySTvicxUiagjFTmSX2rInp1hrTRVNXTmyGbfWF6qbn1wF7Nt4OhmF6kPcuJyfgF49MmbHCbPzicIKOBPj0eMs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOEHDGsicazaGDsAMBZXUtJQsl5OkgURgensryfnubbasRjFdPbQ5ETag0pC1EvsaJz6UxOiag720VmWujudkeoUekV40dEHWyTg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPTbt2KJRMEYicjxISkT8Ts9oQHuKKo4XibkQCnlaZuwqwYEriaXiaCfdO2cN9EV6FpBukWCUmIdAM7wibAxGA0Ztr8ytMx6pytiatng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMkGERB8u7w1cbAiakKRH6r65wx6vdrtwu8nvicPDA7eibMD1AG4SACRBn0gCTrhVkJ5jmKAmdX5Bk7tmonk0Y6UicQicmbhicfe5NRk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMiakFUrhzbsuu91xiajDMdWlIAJjGjwqicHtp6WSBveQtuSd8ZDscRd6LFZ5pEBa01RNcPSRBHFiaDico9QdMpuOjht64IV7oeibazk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMeM1o2M9SrDyPOQwiaEAJRHNtD7WQPr88tQsqOUu4ZuHaIjeI2FbFwIHY1mh4M0qxXrK9z7OZOAr102cC8Q28ibiajaqJuKNDFibU/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

三相 PFC 整流器与 AC-AC 变换器是电力电子领域实现高效电能变换的核心技术，前者聚焦**三相 AC-DC 高效整流与功率因数校正**，后者专注**AC-AC 直接 / 间接变频调压**，二者常组合构成 AC-DC-AC 系统，广泛应用于工业传动、新能源并网、轨道交通等场景。

* * *

##   

## 一、三相 PFC 整流器（Three-Phase PFC Rectifier）

###   

### 1\. 核心定义与目标

###   

三相 PFC 整流器是将三相交流电转换为直流电，同时**强制输入电流为正弦波、与电压同相位**，实现**单位功率因数（PF≈1）**、**低谐波畸变（THD<5%）**，解决传统二极管整流的谐波污染与低功率因数问题。

### 2\. 核心工作原理

###   

以Boost 型PFC为基础，通过**PWM 控制全控型开关（IGBT/SiC MOSFET）**，配合输入电感与直流侧电容，实现：

输入电流跟踪电压波形，消除无功与谐波；

升压输出稳定直流母线电压（如 400V/800V），适配后级逆变器 / DC-DC。

###   

### 3\. 主流拓扑结构

####   

#### （1）三相两电平六开关 PFC（电压源型 PWM 整流器）

#### 结构：三相全桥，每相 2 个 IGBT + 反并联二极管，配三相输入电感、直流侧电容。

####   

#### 优势：双向能量流动、控制成熟、效率高（98%+）、适合中大功率。

####   

#### 应用：风电变流器、光伏逆变器、大功率 UPS、工业伺服驱动。

####   

#### （2）维也纳（Vienna）整流器（三电平 PFC）

#### 结构：三电平、无源箝位，每相 1 个可控开关 + 二极管，直流侧双电容分压输出 ±400V。

####   

#### 优势：无工频桥臂、EMI 低、效率高、器件应力小，适合高压大功率（如 10kW–1MW）。

####   

#### 应用：车载充电机（OBC）、数据中心电源、储能变流器（PCS）。

####   

#### （3）其他拓扑

#### 单开关 Boost PFC：低成本、控制简单，仅适合小功率、THD 要求不高场景。

####   

#### NPC/T 型三电平 PFC：适合高压、高功率密度，降低开关损耗与谐波。

###   

### 4\. 关键控制策略

### 电压电流双闭环控制：外环稳直流母线电压，内环控输入电流正弦化。

###   

### 空间矢量调制（SVM）：优化开关序列，降低谐波、提升效率。

###   

### 模型预测控制（MPC）：动态响应快，适合复杂工况与宽负载范围。

###   

### 5\. 核心优势

### 高功率因数（PF>0.99）、低 THD（<3%），满足 IEC 61000-3-2 等标准。

###   

### 能量双向流动，支持整流 / 逆变双模式（如 V2G、储能回馈）。

  

直流母线电压稳定，适配后级宽范围变换。

* * *

##   

## 二、AC-AC 变换器（AC-AC Converter）

###   

### 1\. 核心定义与分类

###   

AC-AC 变换器直接将一种**频率 / 幅值 / 相位**的交流电转换为另一种交流电，分为**直接 AC-AC**（无直流环节）与**间接 AC-AC**（含直流环节，即 AC-DC-AC）两大类。

### 2\. 直接 AC-AC 变换器（无直流环节）

###   

#### （1）矩阵变换器（Matrix Converter）

#### 结构：3×3 双向开关矩阵（9 个全控型双向开关），无中间储能元件。

####   

#### 原理：SVM 控制开关时序，直接实现输入→输出的电压 / 频率变换，输入电流正弦化、单位 PF。

####   

#### 优势：体积小、重量轻、能量双向流动、寿命长（无电解电容）。

####   

#### 挑战：开关数量多、控制复杂、器件耐压要求高、换流难度大。

####   

#### 应用：高端伺服、风电变流器、航空电源、电动汽车驱动。

####   

#### （2）周波变换器（Cycloconverter）

#### 结构：晶闸管 / IGBT 构成，直接切分输入波形合成低频输出。

####   

#### 特点：输出频率低于输入频率（如 50Hz→0–25Hz），适合低速大功率传动（如轧机、矿机）。

####   

#### （3）交流调压器（AC Voltage Regulator）结构：晶闸管反并联，控制导通角调节输出电压有效值。

####   

#### 应用：灯光控制、电炉调压、异步电机软启动，不改变频率。

###   

### 3\. 间接 AC-AC 变换器（AC-DC-AC，最常用）

###   

#### （1）系统架构

#### 前级：三相 PFC 整流器（AC→DC，高 PF、低 THD、稳直流母线）。

####   

#### 中间：直流母线电容（储能、滤波、稳压）。

####   

#### 后级：三相逆变器（DC→AC，变频变压输出）。

####   

#### （2）典型应用：变频器（VFD）

#### 功能：将工频三相电（380V/50Hz）转换为可变频率、可变电压三相电，驱动异步 / 永磁同步电机调速。

####   

#### 优势：节能（30%–60%）、调速范围宽、动态响应快、保护完善。

####   

#### 拓扑：两电平 / 三电平逆变器，配合 SVPWM、矢量控制、直接转矩控制（DTC）。

####   

#### 4\. 核心控制技术

#### 空间矢量调制（SVM/SVPWM）：提升电压利用率、降低谐波、优化开关损耗。

####   

#### 矢量控制（FOC）：实现电机转矩与磁通解耦，高精度调速。

####   

#### 模型预测控制（MPC）：多目标优化（电流、电压、效率、共模电压）。

* * *

##   

## 三、三相 PFC+AC-AC 组合系统（AC-DC-AC）

##   

### 1\. 系统架构与工作流程

###   

### 三相电网 → 三相PFC整流器（AC→DC，高PF） → 直流母线 → 三相逆变器（DC→AC，变频） → 负载（电机/电网/储能）  

###   

### 整流级：实现**单位功率因数、低谐波、双向能量流动**。

###   

### 逆变级：实现输出电压 / 频率连续可调、高精度控制。

###   

### 2\. 典型应用场景

###   

#### （1）工业变频传动

####   

#### 场景：风机、水泵、压缩机、机床、传送带。

####   

#### 价值：大幅节能、精准调速、延长设备寿命、降低维护成本。

####   

#### （2）新能源并网（风电 / 光伏）

####   

#### 风电：风机输出变频交流电→PFC 整流→逆变器→工频并网，实现最大风能追踪（MPPT）、低谐波、电网友好。

####   

#### 光伏：光伏直流→前级 DC-DC→后级逆变器（含虚拟 PFC）→并网，高转换效率、低 THD、抗电网扰动。

####   

#### （3）储能与 V2G

####   

#### 储能变流器（PCS）：电网→PFC 整流→双向 DC-DC→电池；电池→逆变器→电网，实现削峰填谷、调频调压。

####   

#### 电动汽车 V2G：车载 OBC（PFC + 隔离 DC-DC）+ 双向逆变器，支持电网→车充电、车→电网放电，参与电网调度。

####   

#### （4）轨道交通与船舶

####   

#### 牵引变流器：电网→PFC 整流→逆变器→牵引电机，高效、低谐波、再生制动能量回馈电网。

###   

### 3\. 系统关键性能指标

### 功率因数：PF>0.99（全负载范围）。

###   

### 总谐波畸变：输入 THD<3%，输出 THD<5%（带 LC 滤波器）。

###   

### 效率：整机效率 96%–98.5%（Si 器件），98%–99.5%（SiC/GaN 宽禁带器件）。

###   

### 功率密度：>3kW/L（高频化 + 宽禁带 + 平面磁集成）。

###   

### 动态响应：电压 / 电流环带宽 > 1kHz，适应负载突变与电网扰动。

* * *

##   

## 四、技术趋势与挑战

##   

### 1\. 技术趋势

###   

### 宽禁带器件（SiC/GaN）：高频化、高效率、高功率密度、高温工作，减小无源元件体积。

###   

### 无电解电容化：用薄膜电容 + 高频控制替代电解电容，提升寿命与可靠性。

###   

### 数字化与智能化：数字控制（DSP/FPGA）+AI 算法（MPC、神经网络），优化效率、故障诊断、预测性维护。

###   

### 模块化与集成化：功率模块（IPM）+ 驱动 + 传感 + 控制单芯片集成，降低成本、提升一致性。

  

### 2\. 核心挑战

###   

### 高频 EMI 与散热：宽禁带高频开关带来强 EMI，需优化布局与滤波；高密度散热设计（液冷 / 相变冷却）。

###   

### 控制复杂度：多变量、强耦合、非线性，需高性能控制器与先进算法。

###   

### 可靠性与成本：大功率、高压、长寿命应用，平衡性能与 BOM 成本。

* * *

##   

## 五、总结

##   

三相 PFC 整流器解决了三相 AC-DC 变换的**谐波与功率因数**痛点，AC-AC 变换器实现了**灵活变频调压**，二者组合的 AC-DC-AC 系统是现代高效电能变换的主流方案。随着宽禁带器件与数字控制技术发展，该系统正朝着**更高效率、更高功率密度、更智能、更可靠**的方向演进，成为能源互联网、工业 4.0、新能源交通的核心支撑技术。

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMhaeiaZctAYl6HhRp0vRZjzHjMkKiaibV54C8WFicDia6kMY7aBjheQfxaXIk8bId2aKHxINYbOC0BKDW40uHrv5YibY2v3wfSibj2K4/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMMmlmtKSfxG46rOCZJQwhSESBHWCcY1nulAqfgr8UQJRog4RnbDheRzz5gnyJE0pjrdOsrrJkibFibA9w49DIB2zQ0qs23Crq3g/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOibbSOVbZkK3DCH35UBQftibrTXnLHNcGo1MoOpg6iay77kibhxPnm79Wm6XbScyTWbPoG6nSWDUPQHJVeRN6CDlVFiakDFWFuvq9s/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMZHCqLhpblAlEBhUOwFLnm7ba9J8KdDyVicBrY4Vg7ADVsSgOLOLSHI5bQlZVC8TcCfIRbRbM25iahlaK6N3h4JlK9czbrlyIK4/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)