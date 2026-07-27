# MTPA三维查表代码从0到1生成及测试操作指南

原创 傅存敬 电磁散人 2025-10-31 07:06 广东

> 原文地址: [https://mp.weixin.qq.com/s/jtsKqrLdBOLnNCnYhTh3mA](https://mp.weixin.qq.com/s/jtsKqrLdBOLnNCnYhTh3mA)

本周用了四天四篇文章的节奏，基于Matlab的官网Help文档，介绍了PMSM的MTPA控制从理论到实践的过程。

但有同仁讲，不是所有人都用得起matlab2025b的，能不能介绍个低配版本的？哈哈哈，这个懂得都懂。我尝试着使用一篇文章的长度，用一个低版本（2020b）的matlab，通过simulink从0到1逐步地实现一下MTPA的3DLUT代码的实现过程，测试数据就使用一个36V电动工具的标定数据，想要模型和数据处理脚本的可以直接拉到文末，对基于模型生成代码的过程感兴趣的同仁，可以跟着本文的介绍一步步操作，也可以得到属于自己的模型和代码。

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JtPP8Y7GpphUKKEgFUpxOat3BSCPUBniaP3kooCFyL0dbO2HiaPz0HArw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JhYTURNLvIKZJnIERohcJRhhkF3XicVK8ic2gWUzXRWPsGlqvqtRqy5CA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8J9iaeBksUibq0r4YSnmWZIXEStahq2crqc7ypASnAH9fibyuxVPy0p12Eg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JvR5LEB1ln4v0oibiazaic70jy5gE324COUpj0VBbva0H5ibN7h9nP5xib3A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8Jia5LEWkqGxEdcrsMu6LKiazqSmPwrbKWd1icRJgibxebIwtrpfkjasnf9Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JAKJQo6XK2M9HrD9JMoaegH6mrKXSkc6xNeziaicRfsAFXIzOIvVtd3Uw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JCCsTNcjmrOrakh2DO3b9ckhA7npwpnd1sqgJHMjpLc9GwEgDwYkGdQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JQEV3K8DboicHPrcPSYShZJ6DExp1ufj378lRzgu03pmpLPfibfrfJ9CQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JkzPKYw3xbBsRHgervJWLicdSHJ0iaQ2Vw1Xy0FaEbhHAvb31ZnrxDSDw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JEabyQEzKz1DNFambpqD52QjdgubsOQOroW7mHIRLgMQIKOotQNCiboQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JZhLWFuboGGqdWsLfe35bEbLlfnWRuSTvVsPCARgF8P3KicM9fU8hwcQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8Jd8RA8xrxxU38eC4gI0l4Ou5z54vcNu30x8xC6YnTRAzt9nBHJicdlDg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JkIyztZfvfP9BYt19fiarCCpj2LQcvy1KqEoSsfA69VAlAkeaqHsqLgw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JVgwhHZicCY7MEVpTibXHE4BAnMFJxv1oKDXlPnSHrziaGQ2PIBBqrlibyg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8Jd1aQWMww3a2VqaAylSETFh6gDEm51ey9S2qKLqtReL5yBLtibuxEkwQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JJ78SYUJXqxFFXwramTBPDeUuFqYyzXsfS9y9mPWfJ69rxcGxuLvSicA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8Jnib9QOOcYpu2xVboNiclyPuKnbZ7DkfwMs33QsgzqCRnFBlnzYzzKGGQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8Jbx31y4AHBDtFQhld0mga8JqNPuASEUcMKOzgMG6o1Uhq9yH2jr0miaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8Jdv1beBMVxaZ2dviaBuTDgxM9pdjOPZm8YI9iacOS8FnR9PKDaSnGRBlQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JVp47KfDr5lx0xq7FBEQJ711D7nZRg7YWia2GPldPMTibriaUeTnyZGCFA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8Jr1gLicGKob6yQX3CwE1XEt4zAIKKibeRlWVePMsV0TiaNHant4SIv1LEA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JnUoqrZyxFs8KEg3ibRibXASgpPdhyicOicETib0P8kEz4dew8uS9bOCILEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JNNBoibXUBfZC9NjhhPFpEUGImKEicNJnCSPPq2R2QIeeEkdW2lzvUjvg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JALUwWCTjeOpypfQdM5ibeTKRYvXfslgmsrXF8XHAE09REcv2CuFPBGA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JI3z8ZOlJk7sHutiaEr2QEhUw79ByOXjSmbmqSCMJ59bDg840cyzx02A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JpIFF4nAhicIpibOJIPqTjk4ugxuvhu8CVf45ib41iaibMiaFnMju2SxCoqWw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JE0NScHVWGsquuZTHHSlgJQSYYe6rpicHa9QnufZibNhvlONmPicxziasHQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JxYHg9vPYjdCVqNxgG056BIjtMGGZ0PPZOHAZzmCuMKGMmxI0OOTx2Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JDroWgezVIXk8iby7LxibWOerTp428cM4CYrmc3wL8iaw9eNkeoSMcbbMQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8J6xzxxkArAfzuLO5Aar4dx7hJqfKdgIyc1xcmx0WdicoeSH7JjvLGS3A/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JqZvRq7FJtueqdeCTOdpdZSn2na3we6iajI2azDR1EwM8LAPJKTdrysA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JlOW0PgudEE0l1MgSeF6Vj7TUEsr9V6QKt5b6C9Pl3qWiarvm8JpDqvw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JhVDfLQTdf5Zfm8P0AUPCXQF88YjXSLbf8zicdZ1AE1kzkdiapX1lQriaw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JHjOn8BicAUlON1Nbo7iaQqZpmn5RPyFCs4MNa90dVxgAzVYNWSUDmPEg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JlN6pY6aKz3UgRV1kwuaiccTlTPRxef0ibQuMcJTjstRNwXVYDP4hA2Mw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8J6XPNTyNKSk6QULLNpmY3CsK21xM9IWOThgTz2D2F56l8G5V3hSoZYw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JmKbYg7wOl5lbJbmggtSUdPCupQSORgvxvjw8CHjHoIJMu5qYkZFgJw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JjqbP9o5XeX01s5aEXnA3mhKQebJWJUaUpvgDvuqlf4iaQYlIkeyh7uA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8J85R59snp7FU81QcHTCVTWr1jGWaViaE9QvVu2DF14ia0sUqiavjG9XpsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JRx04l39ibu8pK4OqZlJxEYLiajkwt5ibqGR7KCpiaZzTXG5WBOMnPUPVng/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8J9z4PpeV3gnk3SJ9E4nUWic1vQvKkr3FASztzbH6pAC7RicibshFsxlgPw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JiccJdx9HWDDrPjndFvQjs0Fb8wCfY8ZkwKtL91S5QSRRAFNPmsNFlBQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8J55umUxqy6l4YnadVbCj0CQErQfEevRQWOL0GNSQLxicEGVqtYI2pqxg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JDibIJrm54WRE49rSbYIfuicmIrb8hAic46qDLvA3zglySeBqkhjygGpEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JSU6xT8X25jABmWpWib52icJwEc8S65Cp2ibtylvCjrtdib6AXxrPM1Oudg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JjScKuzUAoK3wW1qP5xAkqTPyyiaibaBGV1gIe1STOcZkDS2qBJbNg5JA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JDXGFDY0dFfMHpFaLic2Nu9lvVNHvM1icIU4aQZaLWKeqSQZrLBhw0hwQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JAu7qNSHpT2gjyseUDpvVSWQwpRkmDFvrbouu29aVhxSQ7y4KrcaGEQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8Jttj5icM3LicbZsl3vcibmg4BJzGeKLXcTsbY6lOPsRFTNg6EiaqwEXTNwA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8J8R0sPtqLUon1YiauzcSFyYZxibU2TD5OycjWpIpZrn0boXEAzgP55WEw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8Jvz17jeAO6wrlw2Oaq2HFq7dG2lfukDJJfHYiaI8OPQicAiadt18fTABQA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8J7R9xiafXdFMqezsYJslyOIvElksBAgmVW9WEBmKy3DLYGuPib7ibTiaf3Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JicNKibRib2LU80QP2LceBaUMqBfmpABaxGFG955v9JFmyIW2TJuYhbRaA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JzarWKSPwRMT3ClX5aKYneE4CicNljttXzUknYJNQyp2O8JZ7iaOj54xg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JMe1JemohEUIeLXBzuz2YAu9nZ5RiaLxxiaVKoKwtcPSqSPPzMrC9Z6DA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JZHvpicv5ctHX0guMChpW6WwSbLia84VzKSFQIic5GY5VEFo16ZX7N0oZw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JUt1keZFLeIR6FLG7s3ro3Ca4wDhORQgr60MqtYowMLJghf1fhOKCsQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JLcr2S9DWyDjgmmacpRQ7Fw4Xp9Y7tS44sib4hgmYvCE5VNFdxKTLNcA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JJFuY9OZDuiayO1c87GiaOO4GZfUQxIyqG5LU19SX7R2qWWuJ8WKKWraA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JRdgS8zic8IOQg1npfBB1UxPWYicicySlIWWsx2gguvfKkN67K3Ym3IB0g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JbBxzjPNrj6f82AyNE8ZYFHzOcjeDzvQYVfAIoAUSqU2t4niceGJFQOA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JDyWrd8Q4dHIHwmU7zVkxjr1qImzSIBSSRIqmBMd8AgH8P8GY3xeLUA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JfCBngmdv9zu5pBQhXSfjjFEic2QQGEg92BZmlZNBFskWwrQ8dwdC62Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JicJzO4zkRg3dtFDVm3Mr02KXTMP8x0DHKyJXickrBFvPgGSONCrHUib6Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8J7E0WIJHwGZLEAmRXMCgU2MlqeLXxGASGWljquxwL4HxicRmuPUMv9QQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8J9URXtzvxicUkRruvjkUibtoIgaX9AapNrJazyoza0mSlP88a1123NnkA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JeMbeXu8IZicbIFUQYxblNmbxpbdqRbEtcYZfo2DChK9omH5r3wqTp3g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JMiajhibqLyKXfbvtuNLUicbiafuXvNnvKLSS9YicZqXvS46vibQWOWiaoPbvg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JqKibwCwH3JJyIDWxAIbqiczrDGeZ0tgEbI1yQ1Ex7Pn7HKCk1TV7WC2g/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JPxB9WcmejVgVWFJIZ0NSWIdicgCibKNpaHQrtYgdPk0ys8JJdUCMqmqw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JGM414MVniaFF0JVzr0qdkciccDdIgEKxljqbkhrCAmlcODj6Sb0UqpsA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/Z8Iha3NiaCRGO3npVJ9r1VaCrUkm8bt8JkiabA7NvH79PrgdFEzDOibibrMiaIoGArNZfldUanthWgpJ4LqXEoz0x4A/640?wx_fmt=png&from=appmsg)

  

模型链接：https://pan.baidu.com/s/1v6n4Wuu\_WZmbz40i\_Iod2w?pwd=y8ek 提取码: y8ek