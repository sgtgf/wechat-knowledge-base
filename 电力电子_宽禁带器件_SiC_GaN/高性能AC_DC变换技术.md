# 高性能AC-DC变换技术


> 原文地址: [https://mp.weixin.qq.com/s/84FxrC3NHUArMFatG4UVbw](https://mp.weixin.qq.com/s/84FxrC3NHUArMFatG4UVbw)

文章来源：《电气技术》杂志社

作者：南京航空航天大学-吴红飞教授

引言：今天分享南京航空航天大学吴红飞教授关于“高性能AC-DC变换技术-高效变换与灵活电压调控”的一篇研究报告。报告分三部分：1.MHZ GaNSi混合型无桥PFC；2.两级式AC-DC变换器协同电压调节技术（隔离型两级式AC-DC变换器和非隔离型准单级式AC-DC变换器）；3.单级式AC-DC变换-宽电压调节技术。供电力电子工程师做参考学习。

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFoCJGD7dzbCDjb2OaYjTsnYiaPjPQboSNiaE5cKbW5iazXgwdJrR8arsdw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFVREYq7FeFu9DLksg6hbeibZS9GQ7pYd8NPmFEwKKGibqeZib8tP7cESPw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFGdibAGoRQn02sXsT7ZSbibI1shCLTVco4GveKtsNNConnhXQkeslYROQ/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFZzSyIOO3Vu2dFUg0FBtSKnibxAbtDDHmLzLArQF57EwZ2r9icGibIFwRw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFLnh2lKazCtL7KrRQUtkWg7wXRwmvpkhherMmULT1p1qDQMZO19wNQw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFmv49gnFvWtyVTUic28iauvc3bzbUxd8JWWd0Bb4icAxlIR3SOFGoMaXAw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFLsazOiaq1k6k13BiaPibpbQOQILurjBADmGVt4REkOicE8IL7yEbEvHeibw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibF0zS5YWliaBjGLLlicrzpeIKQJYGB0zlCu2a4FGp1hGsHKLr7W46eMPHw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFicnCdO6SE8wpUtfTVDiaHYjNlfknN4nfByFQsQ1iaBRymUiaAVIcdh66cQ/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFbOib0dFRXib4dYZzN5nk1sEpCgucHPFID8UNPNRphhs1NNqwWouIXs9g/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFKF40XGa7U3dzbkMxAKg5eCBt0GJ0mUc4KtUiafnThRejugFU7UkzMRQ/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFQiaqZHKIZ9AsibrVz03ogYnlBOyBVg6rXrTqsqeUshiaLTPX9WjWnvKhA/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFSAIyUiaTIcarPZ42WRniaxcGf9F7xibl81icLmpqzlGRapdDibzf4yYpscw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFmKniarb1ibK9Fjsd1exTQCgqOa90ZBOL1OQcia0DQBFBjxCwTZVTNVOEA/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFbPqnsJsp6Wg2S0vbXdhnDnjSl3iad05wBMJChOYGt7SAqia9XqPA5RfA/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFiaYyJTrIjfj0s7YoApp6SwMoCaIs919LADO3Xbz3kcg2IuLE16fjDcw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFJd9558zeUn81mD3Uxfwusd6VjOaPWEJbOyRibjiaRI79QwbhKrdzsiboQ/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibF5mGABtNiaUZGb02wfWUb4ibXwZdzqnGX74TibkxThT4f3hicUfNhdTpicdw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFgaDicxIsKLSMlMKibkLtibmpM0oeA1ib4liaEHmzCE8TjJmhUnqvmYWyyHg/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFjt3FLEL665q0vwZ0gVND80apGr2KpNcoIyMc76b2G6tCAFRQI1GIqg/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFMl3g5xVCyryNVFsJto4M4XLREXKcYDicwekqPWu8KcTx3m9JlhQRicdQ/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibF3sOsj54DdQqYic2GibVPxiaZHMibyghVyt53IibjgXlZk2hLd7MibE2UXh5w/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibF18eRArLh8gtRCxEXoz2ZqvLShF8KxdLokIWB2pJ9czZTHcNSNbn7Ug/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFIjaU3VITahobyOTuJLIU62UAI39LfaWkMeqDicByHPhPdzNHzc8dr5A/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFib6uzetcdYtVIZklY17U7iaB27FO3Nq4LJVb7yD3A64Tumh9nS8RYaXw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFlZ6miaEKy1gXhKPEvpic3yZMb37gcem7bQYOKBGpdTYUHAkxfgJVM59w/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFjRpRXSmsbZCArCECI562uWppYxcu8cw1GpXVHcrkpIJ07058Gdukrw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFuJY79OjxAmyrqWnPWyVgn6mSa3IibkG4gJlmzMpiapGRCH1UmD7VY18g/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFwfVyVM74zic9ibSKWwGaw5rakJiaRDQzl12J8hB9icnWqWib9ct9yy0r6gw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFd3qxRIRibA57ict3Lr49tHvic6RMkVqlXjmwILmrNEgGft09xYZEY4x9A/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFpDL3V48p6bxVAIdbtex12PNWQicS6iaQPhiaag13ay5MoicWeDjjibg39PA/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFFwrxvlDUiaibCve1Z7XgwBItK0zZGRuSx8FATz1ulthicroURtqphV9wA/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFYzmoReXbhiaEqK8QTibUf9sfqia16khuzOnMOsHse1picthZZ6QYB0SNaA/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibF9mGQ4Xf2Ry6Skd9G3ibAw1jXuqSWL7GsYricYTJyiaicW1icfQnKz1jqrxg/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFyFibYmxqbQ8BHPOFtDhQYZlhGqUicziao4qelk6khyzHmUzxJ0RwCKR7g/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibF0hb1JY54oj7njDwhlq4PuwN7P1XPt2uF48q2IKxepqckNeQI4Fbh3g/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibF3Hg4iby8R3DsAlnI12NsO8BFOUeSL5nCQx6u6YVTCHNxOnw87uniaiagA/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFVXLWJJtewDoxNicCsbpD7TdUNydVVicIF540LKRB3HSKdlEiaPtpS2Fibg/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFZov2Mb3bhJ2wRe6EkbGC288x0riaElOdbq6tJDXVDjYAmAMwgXkJ64w/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibF8IXJX8wemgRCb3wrLfMw6LCyUqFZT7ScNTvC0QLnr9CxF3vicH5JO9Q/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFOBibeZbyOE0dEtUwPyicQKHaAb0fXSGI3Micic7ibdyk1eyHLLxKVXG5gNw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibF8UmOQlxN9tRiaiaQbGDiauAhWVxsnLCGhc3JYZFfEWRA4Y2VGK8YmL4JQ/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFNSaspmgIQdN1UB2HU87PLRsNcNXRicXN1z7MGWzTC75vKjCkIvb1WBw/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFIpsjaJQXR669FujsPx3eiaWb7FXkdZvYHLdm1JOGmwiac0ZNLWVeo9Zg/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFc93nSbkQY8PVCphpr7JBjQl111CPt2jVC0Viae94BI3vjE8tUZguXrQ/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFS4CJcsuuT2y3sIkuPTCRibjiaHK2CCEJB8uDCNLloVb6R8QgeTlPNz4Q/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibF8BicDBLKLYD5FqkJ99s6O7YC6275MRCMle9zUh9IX6nbGpD075nMpkQ/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFep3ovBG94ghHgJ6OicLhtaXNNMRzpL9wTzA4DHSxxAxf1icZIKfN51xA/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFTsq5CGkyyGg9bJ8kPcqK46D8U7cKJfCZTyYmtQricNvyFRuDcTEp91Q/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFiaibdHV2gaVhAJV60ZvyYRVd2pLGDJO5IickHY3NmEbjTcRnEuHjsgvjQ/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFZ4AtKHgAJ55Om2fdBSUXmk0uiceuLtAv5g4ibwlkDK46pdnac7hzFgicQ/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFk8vAgJ8ym2a9YlACuuCm5In7gAiaXJemhA4fZxdU3Sfj5aZBLUxrW5A/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFfZeLywBy1LJjBN9EbtLAicRBKELlXglUaL4KLTTa8f6ib3emP81hJrtQ/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFjZU9md7uTa5Fm6lLxibH2TiaOKDKIyz4nVCQLXsvoAwNzgpx9dP0WQxg/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibF98R3iavetBHx1c6vJjiao0BicXVIVlhwPfiaFs83sV7OciaF6xAPDIussdQ/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibF8ln0ecEpc7edaIDJZlHIhjBstus0AHBMibT1X8jqUtIOYkNsO0UIIicQ/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFfia9SYwtplDWWictLcvwS6z525yH1QJDGqp2ic8xo7yoXbWTgicVWUnSug/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFLIMK1MbwTw1l8CKp5SOKAiaWhKDibSF63HOSzPWT73g7GTibGEbmGiaL6Q/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFOvhbVN4RDyb0Zj5fs8mnwbV4aC0PNkyPpmSuLf4dBHVVH25UmEa29Q/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFn0zHzhicE9iaibUJMa6TrkicfibFSHGs5S53iaH76fsIZQ7kPPuOfkyPvhEA/640?wx_fmt=jpeg&from=appmsg)

![南京航空航天大学吴红飞教授：高性能AC-DC变换技术](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFQGycvPvH4u09RKsWnQSJ5TibEzbj2Kp8h3OaE3RLgxlbEMo7MSWB3Lw/640?wx_fmt=jpeg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLslFRhqw536UGz2SoqqEZWibFjjBibxZiaWhlV2ibyu37SznKIY9M435gHjzdYMkIDIiaqc33iaxE1icjboTg/640?wx_fmt=jpeg&from=appmsg)

吴红飞教授、博士生导师，南京航空航天大学。江苏省杰出青年基金、教育部霍英东青年教师基金获得者，入选江苏省“青蓝工程”中青年学术带头人、江苏省“六大人才高峰”高层次人才。IEEE Senior Member、中国电工技术学会高级会员、中国电源学会高级会员。中国电源学会交通电气化专委会常务委员、青年工作委员会常务委员，中国电工技术学会青年工作委员会委员。担任国际期刊Journal of Power Electronics、CPSS Transactions on Power Electronics Applications、Chinese Journal of Electrical Engineering等多个期刊副主编，曾获Best AE和Outstanding Reviewer荣誉。

主持国家自然科学基金、装备预研重点项目、航天基金以及国防/军工/企业委托研制项目20余项。出版专著1部，在IEEE Trans.等国际顶级期刊发表SCI论文近80篇，论文被引用近3500次，获授权中国发明专利40余项、美国发明专利1项，已转让专利2项。第一完成人获省部级二等奖2项、三等奖1项，获中国电源学会优秀青年奖。

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBnPw2HIxma0IfFibVUkxN6icyKvAwYyYJ19zlgAlrKQjE7OxtyuUSdXY7KkpnU5xIHeX0ziaNpFzlA/640?wx_fmt=jpeg&randomid=qf79m120&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskBnPw2HIxma0IfFibVUkxN6q3PIJ2Kkx7IOZFiatamsLyXyAgicDibibD5tcVVQ2XRhAnwpWiblSMjJicEw/640?wx_fmt=jpeg&randomid=7yy8vwtd&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskBnPw2HIxma0IfFibVUkxN63Aia0AzTL0HLoJUq6AHRCQ7pelRZdowqEFCpdr4dgU2LKm7zySgibXWw/640?wx_fmt=png&randomid=chyui3cv&watermark=1&tp=webp&wxfrom=5&wx_lazy=1)