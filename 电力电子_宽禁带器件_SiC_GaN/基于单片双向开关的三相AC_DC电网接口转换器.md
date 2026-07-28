# 基于单片双向开关的三相AC/DC电网接口转换器

原创 Johann. W. Kolar SiC碳化硅MOS管及功率模块的应用 2026-04-07 06:09 广东

> 原文地址: [https://mp.weixin.qq.com/s/Vm\_\_2Id7ruOT9UoKzj3jWQ](https://mp.weixin.qq.com/s/Vm__2Id7ruOT9UoKzj3jWQ)

文章来源：苏黎世联邦理工院

作者：Johann. W. Kolar & Jonas Huber

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPibLoYt3D6kZz8VogoibuciaUp3ichbECibS6bQVibia6HfkxpMm6n5QXgMtgnJBmyJlc6PortKKk73y88AmZc7CGqPGfImYibTxSCC8U/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMoInV687FL7U34ugpIOL4icxx2rdu3O5GzmCxpbWPToShyersEKdMeOaEhA2LrChfS7q2ZeapcDrFbOAicyfD7wkIhOmrmFHK18/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNaQB5PoPGbClanuVqRvPkywMnXAZF4IXeP8XNjVbxheP77DcyT21MicCq4IqiaIqk7Cq9fa4981FNGibuTkTicAIULaySQoicWibUGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMtVibylg24FIWibbuQZXmexUp0FdyF03eUUsicXaQaCfFumicdPnJxBASl768ib5dpzTApBrv0fDzWbDmgq1S8ajl75OoSicicSb3VHA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMtVChL0rnMiaaYwC37TeiajQ1rvK5K2DFKsgRgZmrQrbC5oIHgCy5y1gj7oBXcGJcwFcibibX6CrCmaFBWjOMo8Xn44dzibEYSuC6k/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNFEgaTSCgSun5wDzVbIW3fPVSRbeFoibibHrImC62ElMGmGNw9bWgQ6Ck4CgSCdXNKXfxH6vdmEuGl07iaDAoHboXia1l1wanLEU0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNd8L2gt0ZheeDZHpaT6b4BhF1oNxbx9L3B02XyVlyhibXonBFBcQiaBS1nBtReNib8hibobgVD51PGYZYl4694glymDM5DHsE2Hz0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN5F8scEbXKDsysibGKyAndPRl8TaGiczp2AAJ7gTibt2CxQAibtqIjkPDmFpNMYQRibXtNawKic7HTm3AEdtmu5vc6hkvWaUBfQcricw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOfFHcfW81ujQXvL0RrKzyDhNyvYWWzLpmROsy1dn26mqMKaPSOtGKMBWNLb014GFicgv2RGjnrDMk3aPURclwStEZ5JmhUqdEY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOPPqHMTaib7UCucvU4JULFDWriaaprCz0Kph39spMXNm2cEE8SKWocBh4UTic2xZiak1ib5K6apKXB57rC8h2qA6zdSCmibE1pRez40/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPyibrHicK0IbQIfo6uxej4871LQyOWIqmC9b6x1ddSfbfNqDQZO5AmCXIFMJ003yOvHh0h7nCS7ETiaEETdxR2eo1fRzDfauiarGs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMmCrBKgPk0byzcNEhnvZZShjx2JrWro0PjNDJcNZB221sEKsena2sPXFuDdhMZe5ia22HNGB34ibgfllKypyXcWvMwZadTwwDes/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNnibRwv1FUQlsxWz9pyiaMfNbR4jPBoOUicxftibfU0K5xLgGXvqt4nmfuibbCcVfDrCamrDaT3a2BSaaroQxuicIL0VzZC9libjZDc4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPwtGcboGy3AIESsy9ibPibksLoIJkzs9okicDx65QzicialgHsmNriaSEfBHKsIuEpic2b5xoKZaCF0dO833C6aXhvxb4K9yLDVcxmag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMY2nCO2FhMiamTmrSEeQbDWcbXUVQJSlqbgxdnneRdLiaBCGMUR8ZibxHt4zAyibbXiaFkWNKgmdnyyFfw8mCHPYQBPnbmiaAT6t86g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNWmia9PghtpCibJonibpM8AMcVrKnZQs5fGKPmYaW104ob9Mc7WsJskJyZ8QHTiapt5ibg8I1SRPiciawhVYicVstU2tjtpggglGvt01Y/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPA34JpG9sm11nibuAYEoQSibMngx8oQkqeoKFxugbbcib6Fhy3Ij5GftFrSN9bXKQSstWvRHcwe6f5pr2RzKpq8ib5Q9TDNLAu56w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOXSGE0tMCGITOiaKNUJu6UqkXmkLFZ6uMthAFwOzPgMos7gkqlicH9dMqPutBg7FTrkP4ZtHWszt0ia1pKoMmAEfxmACyaVAhgKw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN7QyUa6sQmlyv8CBUOJqic53icbia45kfsp1ZYtle8mcz8LOZ4WsaImk7v8Uoicg7L4z6mPMgVb9XwPiaZqW1mgsL0PMHYpkYgRqTY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPyORibB2xhkw7hQN9ibCsRkZoiavQGHnxWRWdBJVPpKjYVMiaD518PIZaLeibIye9aibiaQmI7FXMrpvm37Cerp1osTHS23KVn0y5iaiaE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNtIian6S8jzF3WdnHp5StZWoiaZhtjRjMj5HcPyKSNiaO5HHE9uw3K7SrgUxibiaGFND8yZxEcHB6o16mh5iazB0Y5oB6c1c7DrsLyU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO6dzAML9icDOfIK2SKJh2bqrW7VLh7MyE9qGxuJMkdic7OrcMsu6UeLek2Y7Bia5t4VIxZW8CibcmDvuLJYcqIia0ElAWXoTfWpcAw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMnlyfiafTxcSwlpzAqmwL1HQeiaz6C9wLI8GHAnAVxibhysic1GWyPCQDEC4CMOjVFibxIuibibKNuzdz5gs8sTfMIjAF7wWjYc6ibUQY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOJ9DGcOhuEGfRSsKa9NwznQJ5VUCMFOcra4oqL11NP7RaSOUJgD3GJvuiaxj2H9ibnBiaDAsiaicVaiauxtrkowtVAD6qPO4qIraCQw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMjV3vzyVnZpwc86Y8kqCE56KxQ45tncETibgujlg7QQUKRux17gv182Cy5KNnOLLK4J4dA9vgmO7gWvCtXldtMjFefX0y0ukUU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPH7RWbnYHuMibn4ib6DLoriaBY6Mw2U5ibwDxn4WXvMwYpXbucPZYnzwSwfHcibkWqCLsXBMk3Zcz28rhzju1du110ogaGnfFsODOU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPuy5A4AdianVXphAm8vbGkWpNETOnfJMhVJ8MiaDEVtdmQxgJMy8LDpmte6s5DkGoQ9w64FtzKUePX2nF7QliaE49Ttt82CX5hk8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMpdLuVdBjzcXkVxpWBySkkcCoG4P0ibXwYicknI08mTxmFPoIkYNpLgOgxRCTicQbDHbhcK2nlibFQHtDIUcn1EEiacZ4e2qU0Y0XA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPFvc5JyE5mOibOTp9S2lfEacRrZGia8DK1SF1vbQW3n51HvteSNGkAtJUo8tfusfgB1YQRnfoCBFSibb9JdHG9icNxPKzfI3KU210/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMnXZDG1aaVKRqHt9lSdqYRLsJu2FicvYLUO7hJHpPy1U5F1Fib3VOTK6rze7kBPddxkibaofLyW6tPyE5ajPfORkrzya5N0Lpemo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN1mfBWBxhj1Fl9k5uvaOpBC0gPq4uJNicsZrefvVbibVMnSsvOKhugCwN184kdofgrxKR0fL7YZ61w93njG7SD8cncX2OhCUUJk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMA0aBGRMQM4Gf9yiaNIu5eybgnJM3gqXFzKSj0ujMnJCtBgzopFlBy4eItjyeaU9TuCW01w8T5tTjO7vAkyX7ibpIdvrsgWUCjY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMDl4rpnZSwUnt1xKUQJbbDBzb89G0n0BeGocU6vDL9ZDicmXCFkQruNhSwLT0IcPNj52S91UBNJLbtTVWAsYQWLPibfCGd9WicW0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNJuNz8TTH7uCXU7LA3TFurNiaPzcicsowHI1xSqiaocIDCSricUomb1gyn8VIa5VFqibic0FrBEo7QvBe5Go1IN7vNC0eDF2JANZ8U8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP3KM8USZv2Lya4cW9QnetqBGHOzPCuudKOpZdKfqVVlm0YdpfMNpbxvFcjp9hE5tjTcsjiaEOplR8rwVz5s2JqvcIh0CbDzicB4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPickNeRkNG6feksLd2Lg9h7VdgcTAv7LTgfEW37dwsoQI8uPcvty4dzx1MmW9LLib4J6DxIE8MIia0ez7tCS2gcphWTHExxxU2UY/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOVUJN8pQCdd1YuRFRBe6IvxRhvLBDDViaZFA7xeeUInqRPcvwojj7XFNyqxiabo5Rs1o8aIsiaMbBB3icYgRYVhn44PZq7HG5bDuM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOQrgjagSt1SMba6g0DJGSd6avaqdTeef7SOvqicraE5p30xNe1WwnxIAUyK4qv9zLIJjqqgCVuiagTlB8g5gaEGaM2UqQBsrKEs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMUZlibeia1BIQkmt8kg9aTcYvHiawgGEWqysKrIRLgnUL48nIkwaEFlJhX5owJBKpO2ENKfqvoaAeA8QXsDT8bPex2EzXVbiaHyEs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOCbe4fWBX2oKIu1IbuqNlwibyP53ic5dO42dLUVicbaH5bXTHhanq4g9jTVnZ5ZUgRHI5P8KFjyyw527icgxpiakpzUauokDpZHtQ8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPobkCZMDyReLo6TOficnFzxzAsMjs2JFfmZU7fToiaGQiasBkCb7S1Qd5EcYFQ8u0hFZ4j5ulSv0Aqm12U4GCKHVWHE9Riau7Hia2g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMTF1Kx5iaYonGlNcl9f94ibhvQyr2St8vQX0FGCF7oc5v8uiaHw4P6dWYIcuyRfFbhogoZk12ReFnGoNpXlGWmdcjTJhTtyqQyicw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPdMRQlVKyFWpQmcpKg8iaAEibcHic6Hsp6RPAKmEsKTWmGUbdbg5953GicQqSZJzXE10pSiaia6WRQo55FIp6KCUtgUDVJdSVPY6Om8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN15rkSWkumIUr5PENiajFvdWvlqRvCFXVbtBQULqcVblmLZozt2ic68ywibRO8eUMY5eAYyE7LiasqdAg2IPr75xhBcLRHRCucDYg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpO3ibjDxFwpzwxHA9zL1qWvxPJWUGkNUjcc50GJXSiaibYdjYia7dgREwF41AuTiaufCsnwrLDvicLcjd8nVjhwuJmuDF8QLZWMdkxqI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPYbEqjfRibgR2SDWzQEMKO5OhGb1bCMTSNa54p9CzA2qksgiaje7Xk88GMCibenjg8OTudPoxNjXvt5b1lM1arFs3mYWJHZmAevc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpN6TspvqKmuo35eNeWPx9ibz3wGwYwwzxNUx3nicaichw1sjoB5Mu2LgkPkEpZ4D652EiaTZZIYFERibmITfKibpibDfsuvASf23Chrtc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNHhBiaVgzz90MdUoOakKSTYX8TWdHQyh0ILN9kKBVbGS7pAzyhNjiaoyQdCTu7CBTUVdGDfHApoTrC9LlC8KQZxT0wNIyCmsras/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMZ6FjZGeNvxPeQmY9f2rJq10xsgmJVQDLraEibYTiatpJ730dm3YDfWAyYWernLmibaQicCp2GX9sGJjKHf3XGj1em4rzQCJ19L4Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpPx4wJYa6COJOA1lnfX08sXrqFtibT7iaM75B4zzrqy2RxPibPalAptFrzOKe7iaNNmd533WiatoiaerlSmVCQxgL5ialpUmzDI6kH0nQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNc28NsQIBBBxKnJiaZPM85XCN6xLZUjY0FRxfWetS76geZUJhJNxTagQwETtpygLKFicPwzUHTarxtLDg5QEVWibbUvfaSeR88Pc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPsYmfYUoS0dmesO4k5EkNmb9vdw9UwnR4VjcO3CfDfGQ7lKSUWcLQ26ZtwWY1PIXibxiaO2tPxaUReOcdEYVpicTSTnT1TXZkicZE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpOiaDibKs4jaQ0rV7NzAWKwyHrS6oicFKV4Cx6DBRr42GUrpLoRF26pLyO8XrNL2FDPQibXcmUM6LXTOSgtOLszd60SVvoCQFu9KDk/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOg2euYV25bMqHYQlY7WeBuibmMndq16ibS5v2WNnfqumgPDZ8RWhUDFrbxO7Zafw3ymhNTwUwFJvVy5iaqRoCUEnmbiahj8IG0xOQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpMyJ5sn8p7XtSlLcY4ZYUAwBtreU84u9ORqe5hnrdjYLNNJicQbMYqkE34osicMlndQIXprYv92oVlmJ4ThFHgQOndZA4xEsjT18/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpP0v46viadglfxR7WdiaVcbN6T4hv0TIPAYDSjwynryOBGOkTIoIgRsKCrDzJ7zANH1TCSYqkzw0icpggP1KH22QFLBTqQT1J4I64/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpM3qfNYeIib5vGRSpl2N9TJIs45GCczMIyKSM4AibHMb7AjLd1KEoeMfjj4sLeSg1icSsCdhOlohLOIiatJ05tRogFlDXPhRQboINs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpN4zeEAfhKEpIoBdYFCSyjzkwMSh3LYic9nzicibTE0EHLK7RPsPY6VWxL8MfVyvOVgzhE7aem5woy52dXSasXAuobQ4ZWS9CLjks/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpNEBWMTgm2QKbhOwmFyrpylia74UBhgWndxFnQVvsgRXf0hNcQ2yicopKKVBqcn3xG020cmBEtcQTCyLtXL7HlUOjy6icfzUxG87c/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPZVZKicK4DSO3AiaMw5kFJFyNFfviaYU8jLwiblJWV6K4RZL0sQar1nTtz8seI1J7ibhhd4n4MnyS20ics8zphaVhcXp4Jtwx50PShw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/w7mE225tvpPIib2zk3OM6w6JCrDt5vSPZquRQ5ONgyVZxTVibqScSG7pDtuo50xgibq52d7G17mMibEiblbrz40dJSpYWLSAicID1pdibZFGZQ6yvE/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

这份报告《Monolithic Bidirectional Switch-Based Three-Phase AC/DC Mains Interface Converters》由ETH Zurich的Johann W. Kolar和Jonas Huber撰写，系统总结了基于单片双向开关（MBDS）的三相AC/DC变换器拓扑、技术进展与应用前景。

### 一、报告总结

#### 1. **技术背景与核心元件**

**单片双向开关（MBDS）** 是报告的核心元件，具备**双极性电压阻断能力**和**双向电流导通/控制能力**。

  

随着**横向GaN功率晶体管**技术的成熟，MBDS实现了**功能集成**，与分立方案相比，**芯片面积可减小约4倍**。

  

报告展示了**600V / 140mΩ GaN MBDS**的早期样片，支持**四象限运行**。

#### 2. **非隔离型三相PFC整流器**

**VSR（电压源整流器）与CSR（电流源整流器）** 是两类基本拓扑，分别基于并联或串联二极管的换流结构。

**Vienna整流器** 是典型应用，广泛用于数据中心、UPS、EV充电等。

**MBDS在CSR中可实现自反向阻断功能**，简化驱动与换流控制。

#### 3. **隔离型三相AC/DC变换器**

**两级结构与单级结构**均有探讨：

**单级结构**如“Y-Rectifier”和矩阵式变换器，集成了AC/DC整流与DC/DC隔离功能，减少元件数量。

**矩阵式变换器**可实现双向功率流动，但需复杂换流策略。

**DAB（双有源桥）与SRC（串联谐振变换器）** 被用于实现软开关和高频隔离。

#### 4. **工业应用场景**

**电机驱动**：SiC/GaN技术带来更高开关速度，但需应对EMI与电机绝缘问题。

**电动汽车车载充电器（OBC）**：要求高功率密度、双向流动、单相/三相兼容、无降额运行。

**数据中心供电**：向中压AC/800V DC演进，固态变压器（SST）有望替代传统工频变压器，功率密度与效率显著提升。

#### 5. **系统集成与未来方向**

**3D集成与驱动技术**（如“Drive-By-Microwave”）可大幅降低系统复杂度。

**15kV MBDS**等高压器件已在实验中验证，为更高电压等级的系统奠定基础。

### 二、技术方向展望

#### 1. **更高集成度与功率密度**

MBDS的**功能集成**将持续推进，未来将实现**多开关单元、驱动、保护、隔离一体化封装**，大幅减少系统体积与设计复杂度。

  

3D集成与高频隔离技术将推动**固态变压器（SST）** 进入实用阶段，功率密度有望突破**1 MW/m³**。

#### 2. **宽禁带半导体主导的拓扑创新**

GaN与SiC将分别在中低压（<1kV）与高压（>1kV）领域发挥优势。

  

新型拓扑如**集成有源滤波（IAF）整流器、Swiss整流器、X-Rectifier**等将进一步提升效率（>99%）与THD性能。

#### 3. **系统级功能融合**

下一阶段不仅追求高功率密度，更强调**功能融合**：如**双向流动、无功支撑、孤岛运行、多端口能量管理**等。

  

在EV与数据中心场景中，变换器将逐步**从“电源模块”演变为“能量路由器”**，参与电网互动与负载调度。

#### 4. **高压、大容量系统的工程化**

随着**中压MBDS器件**（如15kV级）的成熟，**MVAC/HVDC固态变压器**将进入实际工程验证阶段。

  

未来需解决**模块化冗余、故障保护、电磁兼容、热管理**等系统级问题，推动标准制定与规模化应用。

  

总结

本报告系统展示了**单片双向开关（MBDS）** 在三相AC/DC变换器中的核心地位，覆盖了从器件集成、拓扑创新到工业应用的完整链条。未来，随着宽禁带半导体、集成封装与系统架构的持续演进，MBDS将成为实现**高效、紧凑、多功能电力电子接口**的关键使能技术，在**电动化、数据中心、智能电网**等领域发挥越来越重要的作用。

  

注明：  

【版权声明】：本公众号平台注明来源或转载的文章，版权归原作者及原出处所有，仅供大家学习参考之用，若来源标注错误或侵犯到您的权利，烦请告知，我们将立即改正或删除。

【免责声明】：本公众号平台对转载、分享的内容、陈述、观点判断保持中立，不对所包含内容的准确性、可靠性或完善性提供任何明示或暗示的保证，仅供读者参考。  

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/w7mE225tvpMHxflAf2TpIEqbDFMGoXQbnxp78feibh61JRypr2Is9p0AZicHxia9ygVkRyicP59TfCzGVr129RAutMO8H87Ggian3ywt2f3HWDGo/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=16)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  加交流微信群，请加微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpNlRGBr5micPQcGrILaFicaHvSCHMEMZoIwZic374rARoIUAJXBOmRb24FQ2SIvBz2Jmz9XV52k3NtXG5ntJ1xMMAgkPxUjRCA9Ak/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=32)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpOKZlrXxC7cnb9YPkOS3bWQUNT8OCJ8ibTdalv8yUGOApphoyQIiaeOHiaJZpTbMhYRcuib8Y1T2R5MdveBdICQuEU8t639btMqARQ/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=33)

![图片](https://mmbiz.qpic.cn/sz_mmbiz_png/w7mE225tvpMd3UFuL2FkCTN2kZheiaiceCFBTbAia9MZMDaoEADvf3WmqUS9NWBkf4lR47FX7j3pibnLTonQJtxMzepPopkQbibrr2rsD3Z8Ndwc/640?wx_fmt=other&from=appmsg&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=34)