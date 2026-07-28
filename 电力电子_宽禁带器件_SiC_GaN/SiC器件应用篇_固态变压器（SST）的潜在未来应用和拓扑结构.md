# SiC器件应用篇：固态变压器（SST）的潜在未来应用和拓扑结构

原创 J. W. Kolar SiC碳化硅MOS管及功率模块的应用 2025-10-22 11:04 广东

> 原文地址: [https://mp.weixin.qq.com/s/eie8GMzKdgDfzp9tCLHq1Q](https://mp.weixin.qq.com/s/eie8GMzKdgDfzp9tCLHq1Q)

文章来源：ECPE

作者：J. W. Kolar & J. E. Huber（Swiss Federal Institute of Technology (ETH) Zurich Power Electronic Systems Laboratory）

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuhnsEJhr4XE7Zn1ucSCUpPiaNicHxwfWgOGYqLib75xD7w53ia5Q04aP5Vg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuxIFRTibPXsx4ZYngKQ9CribmiaPvVudJDjesM74IKtLd93Bib9PJLjMQ1Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuEib4ccziclicgkK2uPCHGiczXB6zgp1h8OasiaYcHPk9ftnRLrW5hAUtW5Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuAOm1dSpfhZQ6oPeAWo1DkgSHwKIrP2aGmibNfxhDfsh78gDbG2nYvmw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuibMYUxZiayHiagpjicYDEVgdvtIOUQH1tktRrZ25GbYqWfuL5Z39Azspug/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuSTsVRSuWibEy3xLxIaXiaNjOrUqdgBtffl1tibw7CkfGnx9Kic6bJQqEEA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbu0bYDFubuKUKOG3YJNWFibmsst4mAlxNDXzC8AgBaLXvUkEAABNysSiag/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuGSmGSB3CLxtTicmMRCmXb0AOyF2KotyKyfvMMWqrVEhY7UgPagyfibKA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuAFz6ahmG4Un0rSMg9WNx6d2xtGCaqnHw1JPFKL6R3MyQ5FC0DGGYmQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbupxCE8rCYe7fBzZNE6Bakdia16nmeWPEY4QrK8iasINyDvKhUQ1P7SreQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuQt2GavlmlVLzUQQws936EZfsJ1g3vTfl4h4rkibllyLqqcjPbyewsyg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbu9Yw8gdJEnBgGwiat3icGqhC0mcKMM85Yqs5E7IOVf6Ba6A72l8eXg25g/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuKYv9ywbBOo2Seh67RMklfxlLgmKPeMnROucDwpIPmUUmKtaYhicsEuw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuVBsoezE9UG5SCS1acQbjiajFUvqLgPIrOlaicyIwPy4bfySicTPnvib9ng/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbutGov0BWRxIp2SHPGO9T8FsQKymM1knKL5Gp94iaa79XN8NDsY63XTDA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuRdP731Miaj822QYtLy31S2gvic0mbeFvZJHVQGNnTia6qk0IE4lu0S0cw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuR50TFWgtyzZufpYKolwj4ySdCLNpwBdZdYSVLVjNW8AF4ibFvP3TvEw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuMAlUDWBCxX92t9GNlz90q8pyM2NUeXh7voO8L1HKadEeBHicZ6g9aHw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuDN3at4dkfPgcm3UrqjQ3N5gnoWZAhf8XbPztSBloKCUmCxXibaCibHdw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbujd9jbejBgrBRhsfAjMdxNU4BgwIIjEjXHonxXq4AotslaZgjto90kg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbu8wXPAk3GLMn1ice7rLRtrbdppWKdzlkcLJuBmh7XHHpTotibiaVBZRibNA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbujF70NNjOJ61ibFfHfmphXlTibvTksupjUqibBHpibP7rRxtog2aAVCOzRw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbucTsLsh9UIibRGCd5NheDpS0wrRLAXSSR76yXwYCtZyhaazSVK0TBKvw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbur8d7antCKANZbyGlXMvcjqYpUZWKic7nNzQAjbvYefpqal9NeV2mfGw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuVaJajWjMsFalWMEaN9wwyYGbvnD7LuGibwwzDxrhuorgdxCHHOWFAOA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbusTpuZ6F7xeg9WPbT0EQFrnBlg4zvcJVCCiceaHHydibjfjgtmVPdY0ww/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuPRdYtjPJdppFz7qHnoulb9zTnyRdmzzKIYpjjtpPBX6BaIFp1OFKvg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuWFqnKO3VXlvyvGL5d5iclwq9fyWdD9eMtlTsBxicncuscgxzfVKuUKMQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbutY6Qed0GuWaibiajyd4m85c1yqD3OTDgBf7gd7mQuagTt4LkWm8mMdsw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuqiaxrlgtXaiatGrAaNLk8zrl5fNYO37EmEZntBDMKK98ficS4JV35A3KQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbujqSTb5icwoN77icdQPBjxe1f4wIORWHYiaDLDpqBOGicE1CnLGqK3TrXLw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuciaZKxjZGic7TqpO1CTI9TBXqriaCSHB8CMUVgksvqvPMTuDAeuo6JxlA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuxwlTKVV6KAvOibTaICe2QpXiacDl6zNtHQJLRsFDhglz0SSNqD30YnFA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuPc0n7DDTU3M0MicNmRcAGD4THnMfPC8bAvArctz07K1AKtugx2l37Kg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuzwP0sa29NwJc1BEMxXR29xiaRicribmBY5Nkwria8eMEWJ97pVodTtU0DQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuAmf5Y7qniatV00icHgaYLryHOgHH7wVfeMJkRgnCI5VRwQRHolLHzQEg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuG7UjXrwbrGQ3fmV5V7C8Xia7Igob4JWXV9JkyxdPTuz4auCnQJ6WwAQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbu8dETbOeC9miccKo3G5MaCdiaq2hibia75EbQkbRUVOoUk9FAcCjicQbtyrQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuicV3WKJ4RUMUnA0QLSQyORviad4ttFKapxTKOpmH6h7WxeJbVd2tggHA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuCOZHd2cFQibyp0QaMxPwBfRxSOT3od4wTukuTmnSGtkp6qNm5zQNn2w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuGwwmNXcS2mdCPjHEib2pawJRXpFYMQj99W1ic11uGtTq2kMv9KMOPEXQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbulbTvQhovjzjAyTqNePZSCQQH4govCsABODKqlmwyEY6vsj3t8qHNuQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbu2a9Ifnorxa61570OiaHkjjtlgsRLhsibr8cicNKich1EIBL6qvlQtCwiajA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuU5CSqjus4tjJ7ia9iaxDsjO0AVuBYXDNNpxDwhcCUXkfFK7hb2vB9f9A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuicOzEaaYYAiaW8Hrs5S5k0ZevZCk2PtV81sxPj8XwP5ibLzohrtTuvaFg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuGPOicpBY3DQHwj4unXCFb4gNbKScVjuYDib7xIQowbDL9ibWFE5QoJSiaQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuqOYuxsvX8ZXF24gRjs5VAG6x7GHaAr9iapJTibic5SrjzOfkgLbrTftgQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuX0YNMXE4Fmic6zPPIvgDVic1P0Hpjrlb8wJDOBxGAfW2F3HJCicqvasVg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbugicYriaNKOpibCISdo99ll6icm9wKxlyNj3u9pkianibWdYzo8ibKibr0vvEEQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuyHkjcMT9nt3djc2l8YXDnD4f8swGardiaBTwPWvJ0BliafVNrricg0XIQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuYNpBcwfHj8Eadgu1xrCARTIkj0qZbCkz5pwT45zo2LPjrFJFNDSjBQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbudUkPPMBYnACLdGDQGN3fEjpAvjQRosHhNT0PllFNAD3XTU1XLhrASg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuNs0t0IUVe5WcxJcQJtYE8clUQhyvmu4oKiast003AJFJlCQZxRf59hQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbul57ossiatKfD5DwMJMdKiaicf4Br2MO818qOemM5SSGYGTibyjXnw90wXw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuSHfnS0elAZT2831XsnP6wTG3vkfvaCsw7I1PQYibiaa5P1MTrddFmW7Q/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbutd1RicFvYIBZYsMHeMx0Ne9fDXkGuxUkDmGqJLMRwcrZ3fhVPA3P4aA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbu0dNEd5C0oByxnWq8a0Ufr3o7bz4yo2mroiclcsJeUXZadQ5hUAldsCw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuvdCbC0pFicIdA1GpgzEP6o3IAJFdF7FezXln5WToOtCU2E132Oib0EWQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuQrQcqRIcicGNHu6gKXbmfqj4Fj4Su8lOKW4xs62wEWTFnaDibKYkxcxw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbue6ibsMV7ytEiaKGwTH41ibgOkAarKBFP5XJdR3ia0ic1HmJVtjTfvd4UovA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuPXdjOnXv45nYeyoQY013BPql5eHbpgNSaq7wHvbsC3HA4icubAe0exQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuuYMBWosOickGVqrkc7hZ0R0jvNA8BZzZfgPibtdic3v85pOYmT4q3dNQQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuULT5ss6fkia85mVVUntZ6iayy4ByweibtGTllvOwetW1srWyf193wyibPg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbukqjWrfcDd25XnGscmv1K9l3PQPCKIzqJ2rLjuSt4klVjf5NTgbDicpg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuMA7ibWru9TM8PSWNOPm62656DQWOsQ8HNjpUMibUUMTQtZC6IDcaew9w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbueorbx7RG8AW59z4NUqIOJxw1NQtQWsQws5SguUcibDlMBu4m406viavw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbufVj7ajjricbno9b31gKFdAzB4xznnMwTxo41XibCj2tL6icTcJ4WD6iaPQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuialxMXXVB1f3zic4kdFqEnL9dhH7ZgPTAyEA0juSNU5Yvu9vwKsgDZJw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuJhAxt6thEhBc3UBGj9dBKLaoP0JvSQaVqLLlapGib94PnFGb9W7ibs7w/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbujwGo4x6nkIdmgEvxK0xGb749mTGh1z6EgSwibs3UQFyDicn74TF4Z5pg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuhad8fcCicYY7cyZTnpJrdbyicddiaJ9LvAiaricicxVk7Htiblj6ariahmxmdg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbu2WOtlHFXygO8NeWy6McSnK5VxTCTFfoOP4PInn7np0MRSqLd1ptDOg/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbu15aib5syEjl3qo5CaXRKpkKYMWibdBIE5dTW4s0oKW12sP3cUiaNCbwFQ/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuAoOLp4PTib9pKLgYwatXsTuLLavTZMxBIicLic4SzxSXuLZSI7t7qp39A/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbu5ibIWFzCoaSyPP3FZEMGibC6bIHCriboMIj1FzEOibbM4RzWyjFMQsKDiaw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbudGbqHEZwOupzXzxhibtVG9zVEZNuXqxl34icsGjtIVFIwfibNtSjkfKvw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuwYtibBrxEVtBLWJkib33Scg1sd81UrHl44WOUtZ35iaqhew0Od8lWHqeA/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbufjmguRL8kXzt2CEt4sjcKoTLfZGZ9tCtHI0YiallRq1oUKrjHUD6EXw/640?wx_fmt=png)

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLsmdibYpn9d53ozzBwbVPHRbuf50csOOSVibV0xM6MoS3jAfw5uPgruemswbStbAMlRD7JAFLeiaicsukQ/640?wx_fmt=png)

注：文字与图片报告无关

* * *

### **一、固态变压器的定义**

**固态变压器**，也称为**电力电子变压器**，是一种利用先进的电力电子变换技术和高频磁性技术来实现传统工频变压器基本功能（电压变换、电气隔离、能量传递）的新型电力变换装置。

**核心工作原理：**  
与传统变压器依靠电磁感应（50/60Hz）不同，SST的基本工作流程如下：

**1.AC/DC整流级：** 首先将输入的工频交流电（如10kV/50Hz）通过电力电子开关器件（如IGBT， SiC MOSFET）转换为直流电。

  

**2.DC/DC隔离级：** 这是SST的核心。将得到的直流电通过高频逆变电路转换成高频交流电（例如10kHz-100kHz），然后通过一个**高频变压器**进行电压变换和电气隔离。由于频率极高，变压器的体积和重量可以大幅减小（变压器的体积与工作频率成反比）。

  

**3.DC/AC逆变级：** 最后，根据负载需求，将隔离后的直流电再次逆变成工频或变频的交流电，或者直接以直流形式输出。

**SST vs. 传统变压器：**

特性

传统工频变压器

固态变压器

**工作原理**

电磁感应（工频）

电力电子高频变换

**体积/重量**

大、重

**显著减小、轻量化**

**功能**

变压、隔离、能量传递

**除基本功能外，还具有无功补偿、谐波抑制、故障隔离、能量双向流动、智能控制等**

**响应速度**

慢（秒级）

**极快（微秒-毫秒级）**

**可控性**

被动设备，基本不可控

**完全可控的主动设备**

**效率**

高（98%-99.5%）

目前略低（97%-98.5%），但随着技术发展在提升

### **二、固态变压器的应用领域**

得益于其卓越的可控性和多功能性，SST在多个现代电力系统领域具有广阔的应用前景：

**1.智能电网：**

**能量路由器：** 作为未来配电网的核心节点，实现不同电压等级、交直流混合网络的柔性互联和能量智能调度。

  

**电能质量治理：** 实时补偿无功功率、抑制电压暂降和谐波，提升供电质量。

  

**可再生能源接入：** 平滑风电、光伏等间歇性新能源的并网，解决电压波动问题。  

  

2.轨道交通：

牵引传动系统： 用于高速列车、地铁等，替代庞大的工频变压器，减轻车体重量，节省空间。同时能实现再生制动能量的高效回收。  

  

3.数据中心：

**中压直流供电系统：** 将10kV中压交流电直接高效地转换为服务器机柜所需的直流电（如48V或12V），减少多次变换的损耗，提高供电效率和可靠性。  

  

4.电动汽车充电站：

**快速/超快速充电桩：** SST可以直接从中压电网取电，高效转换为适合电动汽车电池的直流电，满足大功率、快速充电的需求，同时减小站内体积。  

  

5.舰船综合电力系统：

在舰船平台中，SST可以实现交流/直流混合供电系统的灵活互联，为推进系统、雷达、武器系统等不同负载提供高质量、高可靠性的电能。

### **三、SiC器件在固态变压器中的应用优势**

SiC（碳化硅）功率半导体器件（如SiC MOSFET和SiC二极管）是推动SST性能提升和商业化落地的关键使能技术。相较于传统的硅基器件（如IGBT），其优势体现在：

**1.更高的工作频率：**

-   **优势：** SiC器件的开关速度极快，开关损耗远低于硅基IGBT。这使得SST的DC/DC隔离级可以在**高得多的频率**（例如50kHz以上 vs. 硅基的20kHz以下）下工作。
    
-   **对SST的影响：** 工作频率越高，所需的高频变压器和滤波器的**体积和重量就越小**，从而使得整个SST系统更加紧凑、功率密度更高。这是SST的核心优势之一。  
    

2.更高的效率：

-   **优势：** SiC器件不仅开关损耗低，其通态电阻也很小，导通损耗低。同时，SiC二极管几乎没有反向恢复问题，进一步降低了开关损耗。
    
-   **对SST的影响：** 直接提升了SST的整体运行效率，尤其是在部分负载条件下，效率提升更为明显。这对于降低系统运行成本、减少散热需求至关重要。  
    

3.更高的工作温度：

-   **优势：** SiC材料的禁带宽度大，允许器件在**更高的结温**（200°C以上，硅基通常低于150°C）下工作。
    
-   **对SST的影响：** 这意味着散热系统可以设计得更简单、更小型化，或者在同等散热条件下可以承受更大的功率，提升了系统的可靠性和功率密度。  
    

4.降低系统成本和体积：

-   高频化 → 磁性元件（变压器、电感）体积重量减小 → 材料成本降低。
    
-   高效率 → 散热器要求降低 → 散热系统成本和体积减小。
    
-   高功率密度 → 机箱、结构件等更小 → 总系统体积和成本下降。
    

-   虽然SiC器件本身的成本目前高于硅器件，但其带来的**链式反应**能显著降低系统总成本：  
    

5.提升系统可靠性：

-   更低的运行温度和更简单的散热设计，意味着元器件承受的热应力更小，系统整体**寿命和可靠性**得到提升。
    

### **总结**

**固态变压器**是未来电力系统的革命性设备，它超越了传统变压器的单一功能，成为一个智能化、多功能的电力控制枢纽。而**SiC功率器件**凭借其高频、高效、耐高温的卓越特性，完美地解决了SST在实现高频化、小型化和高效化道路上的核心瓶颈。二者的结合，正如“好马配好鞍”，将共同推动智能电网、轨道交通、数据中心等众多领域向更高效、更紧凑、更智能的方向飞速发展。

  

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskNjrBeSs608zd6UCWlxdGVNriafDR8nc0fg4I0WaOQbmwQKVqu1wiczIw8uskP9YE2el6OGvZr3ickA/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskNjrBeSs608zd6UCWlxdGV22Tj4aPModAmQXHtbew4PUfhYjH60e0fogF7I9hYlutFWbDMx88yOw/640?wx_fmt=jpeg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskNjrBeSs608zd6UCWlxdGVFVxzQhs4hXvFCI4vlUEIyHV5icR3ocxlfpazaGuwjCFAEVcTrQI39Qw/640?wx_fmt=png)