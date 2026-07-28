# SiC器件转换器系统的高级建模和多目标优化/评估

原创 Ralph M. Burkart SiC碳化硅MOS管及功率模块的应用 2025-10-28 08:05 广东

> 原文地址: [https://mp.weixin.qq.com/s/jVndsrQuDXhtQmbHorgjxw](https://mp.weixin.qq.com/s/jVndsrQuDXhtQmbHorgjxw)

文章来源：苏黎世联邦理工院

作者：Ralph M. Burkart & Johann W. Kolar

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaRNwkagM1bicp5zbAa2Txu0J4Y2yFOorZfpk9X4AqKyWjoH2XibibsguuA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia1sxI891yKRUwaM0yyUJYmtbsQSiciaYUfuiaGkB1luufiaMR0cAP9gUgzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaET86uTI3SGicBo3ZC0ibaajRiarOvQfIIKfibzvkia9pWYagt0p9c7OuH6A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaZSBvAAYLAEgiaWJqR1XRLxnjrKrf23zzGHxpCAIZJMBUL96RVMWaLUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaDMhJ2uq9LzwiajSNv9qML6ibREOxCVKjmGk5Z7mwrFsXDIqFHlibBWic4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaEVC0ndHibynTp4IXXnhkv3czkSv9E1BvBaesOC7tznXW1SbQeBtDnzQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iabQP4t455gdf59GibAsBsBZo4EwYVhbfRsjx8icJxjA37tOm9yPJtLfyg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iamyI4KY84HIf3E0e3jSlPibhHDhAiaqWhoWJzm3D2h1ftibEqN6EibibL86g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaxhW0yPTEWVicgQAILXvtCiaibFribt8UkAVyRLy8icNDibuLMMAqDTFWia3og/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iauRsUH48mPO1icLnUUEOmQZw4pYdrcK9hkfE3bwf4r4WaTrtoxiaHAevg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaYBWtNS7N0lOfic5Xgu7uQ4qTdYAu1IbibY6mISB4U4FH1Qibxu9ic1azcw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ianBOicIvib4P7SymP9OWuDOrh1xEnD2FmicMM8J8NTRmVN6KnvOicricHd9w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaREUBFUicKaRicHTdef1trShJtUDJm0Mnmd0UO5BavxlGN8Tu9eW4r6TA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iarBoZ44fp7ciawtWpMvYkQknicG8W99icDT8ibsmPvvMzUeHvJqgPQBg94g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaP29dTkhK6AhrRM265HicwAM9Mibr8fiaBhHHgZwOAb48fEXFSPsHd26KQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaOjoMVsQVpTmePBuO50IPtYNPXXYQplRrKpU5uqKNoVRBvpeKtDR72g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iavibgnc00vCcib6YHvq0emdWYSVsLygWmt1c2k9C0ibicwehicXRcR1OL65g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaysx002HUUCp1bOUC0SmVMyXPadKq43JdSezFwpPtdCViaSUJLkEYA4Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iamEjaUVbQ3XV8LObibQVuLialRDeDlOhm8ic3iaDZkrYIHUTNGqjf57pgKg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia6sCJwKT4RdmRHgAvpDnnUk6yeLPes6dwPCALvvGycRypkrgGibpDHRQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaAyAiaTUluRNibZTibWfbd9Ryqe7Xib6VbxVSBarXQCVTJ82Zec44w2XuUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaXGo999xZGqP4f97gdEicVp8gFHib1ozsPINMJMT4kpvqrKiaAuWfobIiaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaDTBbGcJUdd7beTMLYV4M5FfSm6u2nl8zC9hvibXAlEPH76Bng3xYSqw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaAEIic2yqiczdwhMq9y0jtFTxMrG92pYDCIlXic0GZia5Z4T8pObR8247eA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iayw6JPngOibA7GTmFpjswaxWnoP040ibUQeNWdvkzv2Yur6D8o1siahcWA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaSQR0NwbuyT0mMzdnbiaZB6zkgIZ1ZXpcjfXdDOM9tteU5YYqkBeNycA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaOqd5WwdjS6KCBj7QIgyUAayicApDHniax8GEA7WzicjOhSFyOVuQSyOicQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iakbKXdnzibu0flhAugLWtXY83XfuIInhy7wmCulsOmqQImXiawXocobmw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iabjPgc4HjOribNuebsNicdCd1M933Aok5ovLxzlkn7s25LUDY57VdSBhQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia5cBlXqHy0dtjFdqvGUcWogGmOfAFkIosyBth3Xqfg2qudSl5SY5m3g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaDEJfQbljwM7LPKhNV52ZfhjANxttjkyXNdSZaKxxIQhYCqgrFLNklw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaejDdBKlX09hNUZPLsj8gfE9DpzXMuGyAYYicM6ibxfn8FbtcXuKP5gpw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia3icRESK99UHM7PEK3tkzNXzGn62MnHj7Jn4ZQh5ouRG5Sb7IpIoOdyw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaZDa362GZ6L2BNSjJyjFQYheUBXHRete7vptlX1l1arFnmVXR0e6L2w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iakI51rkO2ehhTE2otxq4pgLibLiag2qS66EZKUrHyDOxibFdx3hCXIrkibw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iam9jtdZMte8nGpWeia14J6nQr7SCdwJKptt3V3Ubz2RiaNvKJcyKgoyaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaVClHzKIFGgxeMCtCF0pPQ6tlgHMoyO0FqF8DExCdccQpaxdntacoBQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaiazWxqHzIPaPYIs8HEr7jBYO0l00ceeibcgCVZO3sWOdibiaia8RibiaiaSU0w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaAWObn6PtSUuK9uQ9yjkhN6pqqheb0toopSd6AhMSO1OicdJzXhvgByw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaoMH1HcvGF64ZUBaPgh1mM6qv3b4djS0Gxx7NQ5ibNeMK0lC9rTTp2pQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iau2VtTQGUd9yQft9ptG7wjfohNuQm1mj1usBjl6FTHxqL6ptgYs9JTw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaGkVcygsWWvjicWMib5v4W8siarhxibeUHaeT1bfmBUSmjDXGnIG67EfObQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaaqV6licOriaNRZR4eWqGW239j1rb8ssEBXmqV25dh9EJNAoYYKHEQsEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaNibcKNHos15CmpHuc4p1ZvGVReQGMGmwLngicxXdfUhZCFuRD73Y5iaEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaZFHUduRbzoaTO5icUpnOJSW6qo5PFT7jqkibUs8WkiaasiaYwhg5Tm7rwA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaS7ZKbnngUkh3vZUPhdduUAuSgbXrtLuRNqX7xhzTsyYGUVAIFGnsUA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia0L4xveFNSfoRczdS5b60qTxdLPGN4AyeVwBEOBACUVE7E50VzxMxicQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia3yU6icDIhO81zh1hXxEYol1O9QcibfG2ST383670DePqeDqt2vo8zBeg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iauqNEAiaskt8KJia7eLYrL7jI7ZoF9GuMOER31aGAuBbVxmcR2icAp1fJQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia7foibXT89vcfjWv4aNqK9sXnKt6SDKaicOClTkS4YvkdnicKh2UxWmdxw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iapk09ZpjFMhqiarNtARyGJxVFstNgP1ok2zVMNNMvb2sAhpZrFXQj7Dg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaTZZOS8AAFBdFbRzEMntllIxq9lQax7zLGM8H0eqhicTDOqiaTkDLWxuw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iau6rIHJhSicdzB0ocfFeFfjicG69E2ibMdE3ZLeSNNBBdSZaFZicngkkWJA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaibJEVwITyH1T8oMSDrZp13Z61UApCLSm7K87Z9EFG673KBcrykHyQsg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaO13zWIulTz7icHs1kdIsGxpgYQ1kaUdBIhdn3fbmTyIN01nrqu7eV4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iauMiaC9aPJg0J4gJBMvvpjQPXrXTDmiazXcc5VCjXuPzvm9MicFOGfjUiaw/640?wx_fmt=png&from=appmsg)

v

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaHiaS2MicaJGon7wUdXtaicAibReks9asPaD7ZBMMnsUIgQibO8zamoic2DLw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iayXIbviaCmCAD4VBoibISm6gob8t9fKcI97smVViaeGZicggAvb7usuJlww/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaxCcDBIuEhGibMohiaHRqBU1hUK7WtzbXDGfswOKib1AKEwO6j00b9Qscw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iazCHsSsyEMMfvByJDEXF6BfSCMZszXE4S4gTnZbiblMGhfvF3mtM6lMw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaBrm9fPE0dSkcmIrYmZYYHlg1ibHDfnxQZMmhrYzicLf0YLyjCZu1n85A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iakp1apWvhLhXopcoYibT37Mr4M9pUM6aGALlfjGzKzwhqiblmMySUtVeg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaTNAE2zypEXllSdussvdhnUvvd5Ja64D4iaZlopyLjZOhqnJRhPK6OAA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia5kwibD929ZESprYH4Pa0uxQNBt4j4QI3ficeicuGQvdkd5d0yiba4557iag/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaBgaAU259HHK5LlnCOiaKOcOKev2Fs8osyrHFySYvv4riaIdl4shGyicibA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iatlKYa0xHiciaw4ZeubckkibHFgEiagMibEH7iamcyXNNJgPuUKguXeXE8vWQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia9ibCxAFuA0CGOPbQrbTZ4o7UxPDPbHQwJFLtyia7n4410JLnJwhf3Ogw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaKyLFgcsnSPiatkqWTNUxzicMQiadkOZfetIJvYtL7oHPLw0EGzpicqvDcA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iakf43HLIvwX9hfcBmLJdIgPcxOG5ZnsLjDU0OST6NghP61fiaV70AIsQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaIX9JOJInUtfGLibJib0vhsSL8Qe6zUg9YjfKQA72MDCEJbNGZS0yRuyQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iawaBJcM194EiciaRWKBrIUfsTLvG98O3DRMmcOI6g7MZQ8JxuiaeBghtFg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia9hdoGUX6Yfpo10ZMBibyv3voXH57uNVzHLiajWXsic9V38zWksl3ftorg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaNEEDSN1IKWkk0cUKDuhMPicWSn32RpuVnkwh4Lv95BianW4Cqv7UEeEw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaLblhRxfrQVmTzBbumUsN8Z5QK8TdUzpSXfSO3KNaxrHArWnTEaKHnA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaj3Z44dOUO4rMTHKqASHrhevs4rr27nr0LfS68Ym5RDJQcibEfbz48jA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaiceuRMUgaQrqiavMMq1ZsVITCKKdsBMGWt0p2WdoHudiaMgs4Iia82FB8g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaPP47BNsYZmicnkz9gKCibRPk2TQlpKkUZyFtSZaWrrCTAmEB4bhVhn2Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaq49wmZicrFKklJ7AdniaoBAhZlJ2KYdhszD3WI7M99WF2o3TFnqAxic4A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iajicwNLfwNaIiaf88tVoY179Dppd3avZmZzGWbibdt1p5kH0a4FEJZwm5w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia8Utiagc7hPglwlHia8vRmtG32YDHVQDwuibdgicvFq5z3zGGh0GCr8fT2A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia9BSQ2Ujdzibx1Dv58A2CDJuhoz8WX9zpKoWiaSf4BX0XFQiarj1LsKmgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaFtkGC7zUcgbgwQYiajdh3uIVdNpicNtVvXSE5oE1Y8U13mXHg8ssBNibg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia1WDtLsOicuSubvvvmbK4fVJ2bHAppgordsDpJDnZIvz0qCDfXORXibaQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia8GFsDDplgA1Zia2S2I5oPhlE9w8QCbfcMh8s63jgqFDibIjbDGv5cOew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaToEnGHdmT2fU8EH4olDuP3LNpqlGTaibkHfiaXFhBqHD0AGLNY7lymdA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaWrCnfQbwk4cMyBPcbibNtVicM0CrET0pxyn3BeAaiaXCHf7ibJ9o54s4icA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaesxFYnNVXnia3PtCN3BtVXc5BVO3Ktu0SQ30VLoib2m7T3OWcBOq4Bibw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iahuoYzsdhiaWNRjlnl8NKKZLj3eoB8WnXXia4NMvvncnx5pPADD1sEn4w/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaGw4bC9dXd4ibxF6yRUkBDzzEnLCKmxibicTMFuPUG45ZhcFwpbwhkplGw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iabGzMUtegVfVnWaKHiaD12jz7zhmJedUPhukptKtMnWSDS4HffWticLLg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaUlJSFmC3KMcuNb6EaJZRrnKGnosXdGZXQCPTgtWeImFv5Qnwre2DlQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaLw3EDhMA789M0plr9kKBDjzA0bp7sSmfhZFKfJ44pOnaRrFd3LmQhQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia6iaw8xvRmAZqUKRunxaqfKncLPEr10v109D7XSpIKheXquF1HRZX8PQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaZdMCLicmhJK6Nt7WH8OK5cgZjcz1tjCSiacrE94JGXr61g0IJKfPrHjA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaQHcUqiakOYF2Z08p4AsShUfrrExmwjrqfHd5oP1YkQIVKicrM6iagN1Rw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaKlia3fGTdmMHIrRu0bUCoFoiayW007DHhIOsqTyroall0nbablbLxkgg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaDRNW4bd1ibnUtiaEpcGm0dwWQKbKLsSlToZSYPseCmKeTicwQsAe1Zjwg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia2a4hKKjjgeOlr6lNFsTmnKvibRRcu7ZAYbPKKrw8A7RMvicPZUgQf3QQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iazo3CB9S8m42oFTQa3VJBIwzZbDKmvZINEWxe4uJwYAGiakvyKGicIIvg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaGmhzjGxRTc9lHVztamO0lAa7xF6tNKvCGia4bTkbqf08SE3HKNuLcfw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaXE5qvfCRqFbDgozbzDHSOeTEBia4xSPuTeRt71NibKPrcPcyh0VAdcpg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia4zycJdT9wpGfK41zbp0Kicn40VibrdL3u4nJQqmN8ciaDtWlyzWfFVZ0A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia0Fsthicic07pmwQ198havQKP3shNMhBBiaaCQv45Ut6Ziaq12NKACDLAbA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaeG4HLp6uIVFCpq7OWDnl2U0OTYMEoksK3iaLEDzWa8db92b7BficIaKQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia5VJPxVr68FHG18UJm5ldel61lL53q2fhBbRsicqy9f2jbDtsKslwACQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iafZZRQDXmsTf9qeDiaPCicfz2fzelxq7icVb03EzmbicUU92pYupN5oKUvQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaAW8wva5SP8YM5kzicdiaiagiau6fDA4CAtXJ1tmy7KHaxwnvXbDC94N1gQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia6sgEsA1IAicO6X00Pa5gPaSLTxxVic09XnH5EOfoAIPzaofX1u9VFGew/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3ia2RZ76RhJlvZeLdDaSbkSLFQ7pTVbVX80nuNatOX1yfjll36RXMHACA/640?wx_fmt=png&from=appmsg)

注：文字与图片报告无关

### 核心理念

传统的设计方法通常依赖于经验、简化的模型和单目标优化（如效率最大化），这往往无法在SiC系统所特有的**高频、高速、多物理场耦合**的复杂权衡中找到全局最优解。

**高级建模与多目标优化**的目标是：通过精确的、多物理场的模型，结合自动化算法，在**效率、功率密度、成本、可靠性**和**电磁兼容性**等多个相互冲突的目标之间找到最佳平衡点，从而实现系统级的性能最大化。

### 第一部分：高级建模

高级建模旨在创建能够精确反映SiC器件和系统在实际工作中行为的模型，它超越了简单的数据手册模型。

#### 1.器件级建模

**物理模型**

**原理**： 基于半导体物理方程（如漂移-扩散模型）描述载流子输运过程。

**优点**： 精度最高，能揭示内部物理机制。

**缺点**： 计算极其复杂、耗时，主要用于器件设计和机理研究，而非系统级仿真。  

  

行为模型 / 宏模型

**原理**： 基于测量数据或物理模型结果，构建一个等效电路或数学方程来重现器件的端口特性。

常用方法：

**双脉冲测试校准模型**： 通过实验数据（如双脉冲测试平台）提取关键的动态参数（如米勒电容 `Cgd`、导通电阻 `Rds(on)`、开关能量 `Esw`），用于修正或构建仿真模型。这是目前工程上最实用和准确的方法。

  

**非线性电容模型**： SiC MOSFET的结电容（Ciss, Coss, Crss）是电压的非线性函数，精确建模这些电容对预测开关瞬态过程（如振荡、过冲）至关重要。

  

**温度依赖模型**： 关键参数（如 `Rds(on)`、阈值电压 `Vth`、开关速度）都需要建模为结温 `Tj` 的函数。

#### 2\. 系统级与多物理场建模

这是“高级”建模的核心，旨在捕获不同物理域之间的相互作用。

**电热耦合模型**

**目标**： 同时求解电气回路和热网络，实现损耗与温升的迭代计算。

**方法**：Foster/Cauer 热网络模型： 将器件的封装（芯片、焊料、基板、外壳等）用RC网络来表示，其热阻和热容从数据手册或实验中获得。

**流程**： 电气仿真计算功率损耗 → 损耗作为热源注入热网络 → 热网络计算结温 `Tj` → `Tj` 反馈回电气模型，更新与温度相关的参数。

  

**工具**： PLECS、Simscape Electrical 等专门擅长电热协同仿真。

**电磁-热-机械应力耦合模型**

**目标**： 分析在功率循环和温度循环下的可靠性。

  

**原理**： 电热模型产生随时间变化的结温剖面 `Tj(t)`。由于不同材料的热膨胀系数不同，温度变化会引起机械应力，导致键合线脱落、焊层疲劳等失效。

  

**方法**： 使用有限元分析软件（如ANSYS, COMSOL）进行多物理场仿真，预测由于热循环引起的应力和应变分布，并基于Coffin-Manson等模型估算寿命。

**高频寄生参数模型**

**目标**： 精确预测开关过程中的电压过冲、振荡和EMI。

**关键寄生参数**：

功率回路寄生电感（Lloop）： 包括直流链路电容、器件封装和PCB走线的寄生电感。它是导致电压过冲和开关损耗增加的主因。

**栅极回路寄生电感（Lg）**： 影响驱动速度，可能引起栅极振荡和误导通。

**建模方法**： 使用Q3D Extractor等工具进行电磁场仿真提取寄生参数，并将其集成到电路仿真模型中。

### 第二部分：多目标优化与评估

在精确模型的基础上，我们使用系统化的方法进行设计优化。

#### 1\. 优化变量

优化算法需要调整的设计参数，例如：

**电气参数**： 开关频率 `fsw`、栅极电阻 `Rg`、直流母线电压 `Vdc`。

**控制参数**： PWM调制策略（如SVPWM、DPWM）、死区时间。  

物理参数： 散热器尺寸、直流链路电容值和类型、磁元件设计（如电感值、磁芯材料）。

#### 2.优化目标

这些目标通常是相互冲突的：

**效率**： 最大化（或总损耗最小化）。

**功率密度**： 最大化（体积/重量最小化）。

**成本**： 最小化。

**可靠性**： 最大化（如结温波动ΔTj最小化，以提高寿命）。

**EMI性能**： 最小化电磁干扰（如降低dv/dt，或优化滤波器尺寸）。

#### 3\. 优化方法与流程

**参数化仿真与自动化**

使用脚本（如Python、MATLAB）控制仿真软件（如SPICE、PLECS、Simulink），自动调整优化变量、运行仿真并提取结果。

**优化算法**

**多目标遗传算法**： 是最常用的方法，例如**NSGA-II**。它能有效地在多个目标之间搜索，并产生一组**帕累托最优解集**。

**帕累托最优**： 在解集中，任何一个目标的改进都必然导致至少一个其他目标的恶化。

  

**帕累托前沿**： 这些最优解在目标空间形成的曲面/曲线。它为设计者清晰地展示了所有可能的最佳权衡方案。

**优化流程**

**定义问题**： 确定优化变量、约束条件和目标函数。

**运行优化算法**： 算法生成一系列候选设计，通过自动化仿真平台进行评估。

**生成帕累托前沿**： 优化结束后，获得一组非支配解。

**决策**： 设计者根据最终应用的侧重点（例如，对效率极致追求，或对成本极度敏感），从帕累托前沿中选择一个最终的、最合适的设计方案。

#### 4\. 系统级评估框架

优化后的设计需要一个全面的评估体系，通常包括：

**电气性能评估**： 效率曲线、波形质量（THD）、动态响应。

**热性能评估**： 在最恶劣工况下的结温和壳温。

**可靠性评估**： 基于电热模型和寿命模型（如LESIT模型）预测功率循环和温度循环寿命。

**EMI评估**： 通过仿真预测传导EMI频谱，确保满足标准（如CISPR 25）。

**体积与成本评估**： 基于所有选定的元件，计算总功率密度和BOM成本。

### 总结：闭环设计流程

先进的SiC转换器系统设计是一个**“建模-优化-评估”**的闭环迭代过程：

1.  **建立高保真模型**： 包含电、热、寄生等关键效应。
    
2.  **定义多目标优化问题**： 明确要权衡的性能指标。
    
3.  **运行自动化优化**： 利用智能算法探索巨大的设计空间。
    
4.  **获得帕累托前沿**： 理解不同设计选择带来的权衡关系。
    
5.  **做出最终决策并验证**： 选择符合要求的设计，并通过原型实验进行最终验证。
    

这种方法将电力电子设计从一门“艺术”转变为一门可预测、可量化、系统化的“科学”，能够最大限度地挖掘SiC等先进半导体技术的潜力，用于电动汽车、可再生能源、数据中心等尖端应用领域。

  

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iayTyJCdwUJLUqpluSia06tuYcVnQIO2hHvUKdj7AMoJ98lwh7Zbqry9g/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=79)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iaC82Z4hz4icAa3ntibyE5BakK7XXq7vzqZect7UOqiad3zKfhpoD8lia2Sw/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=80)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmChK4ibzBN1ZqDPLdgOrv3iagHUgv9blIHEEWy7cbELqSoZlBknKQXqkRNcEkg2hAd3x3vWfJLxL5g/640?wx_fmt=other&watermark=1&wxfrom=5&wx_lazy=1&tp=webp#imgIndex=81)