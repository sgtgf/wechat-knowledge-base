# 44页PDF，电荷泵：一种最经济简单的电压变换电路

原创 王工 硬件笔记本 2026-05-20 08:00 四川

> 原文地址: [https://mp.weixin.qq.com/s/4AhIFczinDFzbkRkHQXtAg](https://mp.weixin.qq.com/s/4AhIFczinDFzbkRkHQXtAg)

![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=0 "音符")点击上方名片关注了解更多![图片](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=wxpic#imgIndex=1 "音符")

分享一篇咱们知识星球里的一份硬件基础内容。如需转载，请保留全部内容，谢谢！

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafPMFibtfetHBeic3U1tITBWtljaNqWib37kYgorbEEnJ1psysph4Uh0ia0QwfP7ruxlRKCicnQTwiba9Y6qUOibTdgCwrfiayEv65waXU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadVrs621rLe2kSEs9oADicib6Hp6UUqpFbABLwC6RWgROJwN08JWVE5DIbicXJIMvvG8cpD08iarg2E2HOdfM6XWHhAicJiby5hibVwYs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacY1OGvNUvVWI9AGfslo59lQ8VZUKDlb7dj7B5DVPIozsS7DKW0UvGW62AUyvcf8ibG9O6t7MhibM5af2rn7ib4udMqt0pyGRFP68/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacqkXrqlGSa3bI60HciaDhicCT6hp38UdSjfVicB16julftMbt0mMJpslf5VHiaQsluRpNRXoMA4WibhLFvvuAo4BeDetbUktA9pQyA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafgwnia1yqCJ9m4RTw681fWLhJR2jEicMu4YOPJWe3YVgm3WkdAW9vODdttENPUcianBhzG76LIicODTKRI20zmVjGicqSYsYvftykM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafNUwjrliar3GzADzOv0Pu5HeZZ42ibKT3Rgup8ibLaOBhEDYWEkiaM13gxfAtn3sbm2S5dkoyBDjLN3ibibdGFcDJ3bzRsFILbjTkMo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaed4LRrlLDfp9oqWibPiafXG1v2fjVBTuPibgUrtoprORsFWicv49fViaF0M8h4oNQQONqLnCmxic7fmgM3TVEjBQbicdIqU2TjlKCKYU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacVqLnYXufjKEvOhEIk1wWJEdKibFT3UYJd0UR19ibvd0pfpic1Ks6odByrHEww3dbtNm8CasfqMhntlbuw6Hab6AKXI5aaOib1em4/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaeLhpiaFiaO1kQrZ5ClWFOlQnKr719qTUekFzpibqmTrKjP4IjIZOZcIZGumxMoH3yTlXLK4tI8H4yF4gTqNZHvsVAeqGPOddQ18M/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaeqGJYgehsWJQ0hhDJEHu07xzwYQpEteN99jLx9asxGIy0SianuIDJ4jsicIEIGPpSHickibiaLUZA86tFtRfgt5xRW9CJ5BySrtTcc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafW2NFJBcmsqOmRr3NRQicFhgYeKLicYoehJkRofsYibqaZUYsOfkFgbD1jgwezHWGEFrxaEbKpohwnTibh6rTZ8GAHOBRmHHjU0dU/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadrYNSs4teDzgPkzyR1evIUjvSwemtyPwdlloghMEHPXQrI3WWu0f55eFl2yhRXW7hXGDvLEhhEeMiazC1H5icB3zsqLPeMEibcKA/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niae7zUqeE0xNaOnsKPfQqboP5SeSI9SRZibIyy3CPhZFKr1Y2F0bfLcmaVuFjlGuKFrnyaBvEbb2rmxVxjrpce58U34n3VpAt9EM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafYN6mz6ibdwbXbEFmS71CmEuo5ic5cGTCB4nt4oRQlGTQBgG5TIg5uylEW0dtqLibyRVMTrZpLJVUBtmic1CDBhQrbeJLaN0H0lcs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niadm9lt5DYHfESwVCqsKLk7xL7AuEmN8aUDYIUXyf3iakDGEJjOXx88EcFGibjOVTCAA0NJ5K7QCpkvDBbf2jVfmqs9aHHXdGq7pE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niacWz5g4iaNQG8t5jBbsRuVw8lghOulSAwicyZiaicYF4icuVQ8mHB6gVXbbOjs3bdscrNBHPNDQ52k7gNRYB2msIRPZFIS0kRfRMblw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niac620Z4x3FW4HHX1aG9TthRfWy3RPtgoAKVUcng8BvjCAggfEyt0Tdc3eSrT4QeZyiaFhiclZWzbOkAHaa10BCX9GS6WZnINnxgQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafibBrp9ntnWnFQkeczGEdS5ITOQbrz1G6oHpzGoV9YYZ6G69gWck2k3ecFuAt1QFn5ojgbjxR7TC5SZl3iaCugaqaicnaEnxAqgg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niac46A2TRKbpvuKqXNnILDtFqUo3mozkZ7EUEpRzMBICJ01icpeDvDefwcXYiaXmOZq6j0HHe3iaCAic3hahCiclG5wwldiboy4WpmZSc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafnYmWkkCLTvJLhibV9hLym2bnpnYSdYRDKVxgvNl9GvmdIIbHdcRkicHdWzVB6XEcZqKFbhouWwOT20Cib6Lia1fOGDgOw3dbYES0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafiaWSFMseTbod2hAN0g9ORTsdx6qdquVrTTDGNzQekibB3cXlCzYw4UPICFTjgKhxiaSMXnq2cqrCJxP1FMiaLsAia41z2rhHZiahBI/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadeqicJysd0SrXE66hAGqBSFrrwEtO2JibnuZO0Ow44nvlsjZeYud9BjBL9pKSJO2ibdcJCVXVyK9EVqoMCjBDn2034R9ibnJiaoug8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacibRXW63U2CYWu6n7ktpFsL8mibFpOU0qYlc3eL3AYkdUSjup5ibFphCjeuib9TjMG241WF8YbBEEArwwQvZCgHZLyq13Nw6YribicE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaf2Sib2iaGwlBMO6Xqu4PPj6uQXaYPtwIglyRrMo3E4uDAV80U6v7JIcCiboX3bwBX9dicbfaKquiaicosfSkHNzSvJmpYcuu3SEMaUw/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaeT3MydA2Niauib3iabR9FE3NZhOxrms5yASCEbBTluVHhqfuSUYWcic7Bgxva6Q6KeWZUfbRDZHTPUWeP32XeGRZyKZqjNLqFpKxc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaeHWueVh3NMFo2ibc8Cvow9ouO8CKsOlfnB4pPnJyZcOibWh3jhhgaBViaAK9m5VPr9YmcUly8bCZJ7ticzMon5XBuWaGVmfWaJ1zM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niac0VAiaRkV4z9lKxwgB0YoPLiaeaNpGKnwEZoZRt3Wq5ylg52RNmXsL4nPYB3KaNTKys63lNluXicVVPUzKk5h2C3K2HjNaDYafQQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaePHkAxeKCAHNibJricrwDd2JRMwXYlrbAmDNlASpTjsooxS4Q1hGXKLKhz2YSho3tgKj9YLrRbakS1KcD10o3yCWfZlphw2B1Hc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacg7tPibBFWzOJHjWCAmF4fRUZic4UHiacj2cKDWl83uZL07ibOXadPt03uXL9ibwCibzESWLNREkTQU9T0odX8tqYbibrhtOtwlsXuvs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacWkS5R0fYSDwAxNTbEw3AU2lWAicux6ycocseSkK3YlicL5gakkWmX6K0w38Y5QGJwcI4G9AFHMkftc04Tc2ia00HqNTLZPzXDhE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niaejGeicRpSCibzjBuItQGrOse4DVxdiaQ964HSne8X9EibopVoxmYhib4FpDatfzZJkiavZnaLiaXQibbAG8OUvqI3osJGlOGdMjItyCok/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadg6hAuHKTSfk7yW2Vw9icpOQWvwIHRSgcrBOpVRxcZz7y1ljL54QyZ3aKffMEDwhMBFsI0Wv2U1FvJsLUgoIy4thPaGezwJRVQ/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niafuGpzALZVicSYQDxibUfLZjoIJgjJnTNg9SWiaZdg5PIzoYQQOppicGddye8oWxqWwdmIMicZTW6XyOcnxxO6RicJn9NWWOaXriaGRL0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadwXEiaMgichdobZIH3JFt88AYkc9E4WOYBphMj1W66tLoU7R5rezBdS7FYf9J6urE2NCib9c8qYcjACwemoEeCicXwwjzseYTA8Vo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafZXM3TOqr6OzDVPIS4uXURRXEsCb1WePgS9dn3icFicdEO4WNHjfoF3aSttJGthm978gzI8K9wnXW6ptc0eJALEke9EcmVZGmxM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niacgCkvPa32JGSH9GSb5fAaPnASq96aNVlcQtiaTdGUmgC1kwSianvAQicZzxhLiceicX1qD9gczglLRTibBIbibTGVFqt5GVUsPKn9kVo/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niadskJT2YibXD24q9ZYTQYLkyhkcW7R740G2dE4FpR7Ffib91QfPjHcOfnqJsiagpkhj6oJd8Yj4tEvk2UibmyNibvQiaI4PWHufMaF3Q/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niae3QS3rEZibjL7IVSzYbNHGoFpdhZ4ncAxmtEpKVNVDw9578iaezIKUoxr7jF1KaexkSIMmHcRjfECm7cNVp0IEL1Px03ev5PXLE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niac1J62tVv17HqyZsC7ksa2hnxNS18t5XWicQXxFkbKLFrxJh83VyTYwOMIgicUw5fqfCcjn0WibMAoibmulELuks2cw3z9QmK3ianoE/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafP86EsCUAA6zKC1wcRlXxvyTVwxkVTicXXqsAyuWx4dsNsGCna4yvgicXUuhSQY63RAVUqNABFOVwmRHhTTEzP4Bpqdp3VjGIoc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaeWFtBqd7cujVl9PNSqV766pEodibNYPAE0e2bbsValkzaqaT1LjR2qnI7gyDJQmq05aJDFIk2fdznW9rz40SB5sHdbHiaIfcaI8/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/0o3ohHN0niaff6Pp7ZP9hHka0RJWibTiciaHryuGjSsibr4aquOtETwTUwoDicsfAYAmPdVrjktUrAOCicTWuMAGYgxIFPMv5j5ZzJic3XHHrIRrFKM/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/0o3ohHN0niafLUF2etQhl05ArjjDIx5BuOicrelZ5uqKCTPr6feqSxib8C4uo2ShtAwKgrVz9DViaz9elWicjqPybJAx2TEsuXYpDdd0ueTBexdo/640?wx_fmt=png&from=appmsg)

说明：

1、文档为V1.0版本，如果后续有更新，将会在此版本基础上进行优化升级；

2、加入硬学社“知识星球”，就可以下载这份PDF源文件；

3、知识星球至少每两周更新一版**硬件基础知识****高清PDF文档；**

4、星球内**硬件行业小伙伴可以一起交流，资源共享；**

5、不定期行业问题解答。