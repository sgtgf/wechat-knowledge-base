# 7个PCB走线注意点，避免“踩坑”（图文+案例）

原创 硬件笔记本 2024-04-24 07:44 四川

> 原文地址: [https://mp.weixin.qq.com/s/5OObSJmDUwWKkzWf8YCX-Q](https://mp.weixin.qq.com/s/5OObSJmDUwWKkzWf8YCX-Q)

![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")点击上方名片关注了解更多![](https://mmbiz.qpic.cn/mmbiz/cZV2hRpuAPiaJQXWGyC9wrUzIicibgXayrgibTYarT3A1yzttbtaO0JlV21wMqroGYT3QtPq2C7HMYsvicSB2p7dTBg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1 "音符")

  

今天给大家分享的是：PCB走线中需要注意的7个点。

  

**一、PCB 电源布线**

# 

  

数字电路很多时候需要的电流是不连续的，所以对一些高速器件就会产生浪涌电流。

  

如果电源走线很长，则由于浪涌电流的存在进而会导致高频噪声，而此高频噪声会引入到其他信号中去。

  

而在高速电路中必然会存在寄生电感和寄生电阻以及寄生电容，因此该高频噪声最终会耦合到其他电路当中，而由于寄生电感的存在也会导致走线可以承受的最大浪涌电流的能力下降，进而导致有部分压降，有可能会使电路失能。

  

所以在数字器件前面加上旁路电容就显得尤为重要。电容越大，其在传输能量上是受限于传输速率的，所以一般会结合一个大电容和一个小电容一起，来满足全频率范围内。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpGbUKRFJmW6vFY4bmlmMvKFawvolPLACOCYxA4kgU540MdMlZ20cdvibA/640?wx_fmt=jpeg)

将旁路电容靠近引脚放置

  

避免热点产生：信号过孔会在电源层和底层产生 voids。

  

所以不合理的放置过孔很有可能会使电源或者地平面某些区域的电流密度增加。而这些电流密度增加的地方我们称之为热点。

  

所以，我们在设置过孔的时候要极力避免这种情况发生，以免平面被割裂，最终导致 EMC 的问题产生。

  

通常最好的避免热点的办法就是网状式的放置过孔，如此电流密度均匀，同时平面不会隔离，回流路径就不会过长，也就不会产生 EMC 的问题。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3ibbhhytvylEiacKjwnmmkjddKV9RC23pkuLZDcjERmVmgGR1VlfILUibHiaq5F0jusZThQiaa48Zx8bG4JjSaBIorw/640?wx_fmt=jpeg)

避免平面热点

  

  

**二、PCB走线角度**

  

在布高速信号线时，信号线应尽量避免弯曲。如果不得不弯曲走线，则不要锐角或者直角走线，而是应该用钝角走线。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpGBYEPfZMrgrDop5Pkcyw5FicywkOTHop82EDkLpt1b7R2MfMwgdsnwdg/640?wx_fmt=jpeg)

用135°代替90°

  

在布高速信号线时，我们经常通过走蛇形线来实现等长，同样的蛇形线也其是一种走线的弯曲。

  

线宽，间距，以及弯曲方式都应该做合理的选择，间距应满足 4W/1.5W 规则的。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpGJ0rRFTyKib9TD2uxmOY9FKTZiciclJ640kCdOnRLDk0tVtWAhkeotopTw/640?wx_fmt=jpeg)

在弯曲出保持最小距离和线段长度

  

  

**三、PCB高速信号之间的距离**

  

高速信号线之间如果距离太近，很容易产生串扰。有些时候，因为布局、板框尺寸等原因，导致我们在布高速信号线之间的距离超过了我们的最低要求距离，那我们只能在靠近其瓶颈的地方尽量加大高速信号线之间的距离。其实如果空间足够容许，则尽量加大两高速信号线之间的距离。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3ibbhhytvylEiacKjwnmmkjddKV9RC23pk4jL6iaXib9kqDWWFUshWaeJWgQNCarGF9oGaHC5tQ8JibVpbVB8YoRw1w/640?wx_fmt=jpeg)

尽可能增加走线之间的间距

  

  

**四、PCB 走线 stubs**

  

长的 stub 线就相当于一个天线，处理不当会产生很严重的 EMC 的问题。同时 stub 线也会造成反射，降低信号的完整度。

  

通常在高速信号线上面添加上拉或者下拉电阻的时候，会最容易产生 stub 线，而一般处理 stub 线的将走线可以菊花走线。

  

根据经验可知，如果 stub 线的长度大于 1/10 波长就可以当做一个天线了，此时就会成为一个问题。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpGW7bFF0D6hu1g6baMImbIU6dEO44ORJ3icMEIgt2Uv859IybGGTzX5wg/640?wx_fmt=jpeg)

通过菊花链路由避免存根痕迹

  

  

**五、PCB走线 阻抗不连续**

  

走线的阻抗值一般取决于其线宽以及该走线与参考平面之间的距离。走线越宽，其阻抗越小。而在一些接口端子也器件的焊盘，其原理同样适用。

  

当一个接口端子的焊盘和一根高速信号线连接时，如果此时焊盘特别大，而高速信号线特别窄，大焊盘则阻抗小，而窄的走线必然是大阻抗，在这种情况下就会出现阻抗不连续，阻抗不连续就会产生信号反射。

  

所以一般为了解决这个问题，都是在接口端子或者器件的大焊盘下面放置一个禁布铜皮,同时在另外一层放置该焊盘的参考平面，进而加大阻抗，使阻抗连续。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpGl2KXAvLs7GpkZxzUvlPA1beSCk2AMSdSs2sp0eoyqjtCEdlAjGlLCg/640?wx_fmt=jpeg)

移除大焊盘下的地平面

  

过孔是另外一种会产生阻抗不连续的源头。为了最小化这种效应，在内层和过孔连接的不需要的铜皮应该去除。而这样的操作其实可以在设计的时候通过 CAD 工具来消除或者联系沟通 PCB 加工产假来消除不需要的铜皮，保证阻抗的连续性。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3ibbhhytvylEiacKjwnmmkjddKV9RC23pkCPwQ9y6HdWGe0ia6zqfFaysPBgpQpw6TqfnJFeibLEYniac7GIAromGZA/640?wx_fmt=jpeg)

移除未使用的过孔焊盘

  

  

**六、PCB高速差分信号**

  

高速差分信号线我们必须保证等宽、等间距来实现特定的差分阻抗值。所以在布差分信号线的时候尽量保证对称。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3ibbhhytvylEiacKjwnmmkjddKV9RC23pkJrJP6XJ3BOYYjzywN9GZILlm0xVBDgK9sf5DfD5pobiasYzWGKoTpKw/640?wx_fmt=jpeg)

对称布线差分对并保持信号始终平行

  

在差分线对内禁止布置过孔或者元器件，如果在差分线对内放置了过孔或者器件会产生 EMC 问题同时也会导致阻抗不连续。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpGgJNt3Ly0xhWfHsycC4VwW1ic4e4NpBE9MSnerjV8f0uOayh6HO3hf7g/640?wx_fmt=jpeg)

不要在不同对之间放置任何组件或过孔

  

有时候，一些高速差分信号线需要串接耦合电容。该耦合电容同样需要对称布置，同时该耦合电容的封装不能过大，推荐使用 0402,0603 也可以接受，0805 以上的电容或者并排电容最好不要使用。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3ibbhhytvylEiacKjwnmmkjddKV9RC23pkicpL7cSBQU8qw8RSh43g4IIyuz57tiaYH0nHtqeJkRdzOJkxNwyEt4og/640?wx_fmt=jpeg)

对称放置耦合电容

  

通常，过孔会产生巨大的阻抗不连续，所以对于高速差分信号线对则尽量减少过孔，如果要使用过孔则对称布置。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpGc3VG2dFTcGMD2hKMXGGenwOHYTV7nbJ6yqdANlvrkLNAWVZIjfoMog/640?wx_fmt=jpeg)

对称放置过孔

  

  

**七、PCB信号线等长**

  

在一些高速信号接口，一般如总线等需要考虑其个信号线之间的到达时间以及时滞误差。

  

例如，在一组高速平行总线中的所以数据信号线其到达时间，必须保证在一定的时滞误差以内，从来来保证其建立时间和保持时间的一致性。为了满足这一需求，我们必须要考虑等长。

  

而高速差分信号线对两信号线必须保证严格的时滞，否则很有可能通讯失败。故为了满足这一要求，可以通过蛇形线来实现等长，进而满足时滞要求。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpGJZicIiajh65nEJ7WEuOuHictBID5DuziazByO5rJyJ5zWeZOI4WK8dgT8g/640?wx_fmt=jpeg)

首选蛇形几何形状

  

蛇形线一般应该布置在失长的源头处，而不是远端。在源头处才能保证差分线的正负端的信号在大部分时间内都是同步传输的。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpGSx13W1Ta42sjickIBB9JNXV8WFXdicEvo35JhXGZ83HwGuDAT9vEHWUA/640?wx_fmt=jpeg)

对不匹配店家长度校正

  

走线弯曲处是产生失长的源头之一。对于走线弯曲处，其实现等长的应靠近弯曲处(<=15mm)。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpGj3DshSgFiblTFp8OicialW9RHXJ8kkd1NVFcXOfUlyFre87T4pSiaZdhSg/640?wx_fmt=jpeg)

靠近弯曲出放置长度补偿

  

如果有两个走线弯曲，且两者之间的距离<15mm，故此时两者的失长会互相补偿，故此时不用再做等长处理。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3ibbhhytvylEiacKjwnmmkjddKV9RC23pkDsRXXSU18RVkXgeTEUca3icwYEA4vrbibJBB6RfvficFgEXVyTr1vNKvg/640?wx_fmt=jpeg)

弯曲可以相互补偿

  

对于不同部分的高速差分信号线，应分别独立等长。过孔，串接耦合电容以及接口端子都会是高速差分信号线分成两部分，所以这个时候要特别注意。一定要分别等长。因为很多 EDA 软件在 DRC 的时候都只关注整个走线是否失长。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpGIVZgibXeXxo46UWAUPNmsPX4DnW2Lh3UGhYPlrXZaKP1YBxy01ibbmyw/640?wx_fmt=jpeg)

需要在每个段中补偿长度差异

  

对于如 LVDS 显示器件等接口，会同时存在数对差分对，且差分对之间的时序要求一般都会特别严格，时滞要求特别小，所以，对于此类差分信号对我们要求一般在同一平面内进行补偿。因为不同层的信号传输速度是不同的。

  

![](https://mmbiz.qpic.cn/mmbiz_jpg/3ibbhhytvylEiacKjwnmmkjddKV9RC23pk1RvVNKzbr3lWOyeH52Kiakb2puvOxdUWfp7dgD9Iqq8LNxXMeVObaOg/640?wx_fmt=jpeg)

同一接口内的对应该在同一层上优先路由

  

有些 EDA 软件在计算走线长度时，会将焊盘内部的走线也会计算在长度之内，如果此时进行长度补偿，最终实际结果会失长。所以此时要特别注意，在使用一些 EDA 的软件的时候。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpG8g8gLpx2dWCASR3uYbib4z55Eugx17UKMMKaLec70gm78dg9cibR6SzQ/640?wx_fmt=jpeg)

CAD工具长度计算问题

  

在任何时候，如果可以就一定选择对称出线进而避免需要最终为了等长而进行蛇形走线。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpG8pFmBdPrWINj9iaNSwA7D6djoVc6PQ4G1P9Iz02ISz28Z0zJ0XST92w/640?wx_fmt=jpeg)

首选对称突破

  

如果空间允许，尽量在短的差分线源头处加一个小的回环来实现补偿，而不是通过蛇形线来补偿。

  

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/iayzTbicUDics5yZkLDzm4zz79KnDlbxhpGeDXkxQlRDeGaG560icJ4lbHUzhxWefKJUxmZrXkw0u8syM7vaWXn5Cw/640?wx_fmt=jpeg)

差分对的首选突破

  

  

  

直接转载来源：今日头条百芯EMA说DFM。

原文链接：https://www.toutiao.com/article/7213208830396809763/

## 

**声明：**

  

声明：本号对所有原创、转载文章的陈述与观点均保持中立，推送文章仅供读者学习和交流。文章、图片等版权归原作者享有，如有侵权，联系删除。

投稿/招聘/推广/宣传 请加微信：woniu26a

**推荐阅读▼**

-   [电路设计-电路分析](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2811359150088683521#wechat_redirect)
    
-   [EMC相关文章](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035870297278545920#wechat_redirect)
    
-   [电子元器件](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzk0NjI3NzMwOQ==&action=getalbum&album_id=2035859110969114626#wechat_redirect)
    

后台回复“加群”，管理员拉你加入同行技术交流群