# 高耐压，高频率， 驱动大功率？建议选用超结MOS

原创 硬件笔记本 2020-08-09 12:55 undefined

> 原文地址: [https://mp.weixin.qq.com/s/qX6VXewGPZuVbMEVtXdYTg](https://mp.weixin.qq.com/s/qX6VXewGPZuVbMEVtXdYTg)

超结MOS也叫COOlMOS，是在普通MOS基础上使用新型超结结构设计的MOS管。超结MOS管主要在500V、600V、650V及以上高电压场合使用。

  

一、内部结构对比

超结MOS具有更小的导通电阻

  

传统平面式MOS管通常有相对更高的漏源电阻。使用高单元密度和大管芯尺寸可实现较低的RDS(on)值。但大单元密度和管芯尺寸还伴随高栅极和输出电荷，这会增加开关损耗和成本。另外还存在对于总硅片电阻能够达到多低的限制。器件的总RDS(on)可表示为通道、epi和衬底三个分量之和，如下图:

RDS(on) = Rch + Repi + Rsub

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIiaAtH21ibayLF9Ru8HRb9NtnwxvWbb3bGib2sAS4Gsib6Le7338U0nySLds8T1DFg8anMDKhJSibk3uA/640?wx_fmt=jpeg)

  

对于低压MOS管，三个分量是相似的。但随着额定电压增加，外延层需要更厚和更轻掺杂，以阻断高压。额定电压每增加一倍，维持相同的RDS(on)所需的面积就增加为原来的五倍以上。对于额定电压为600 V的MOS管，超过95%的电阻来自外延层。显然，要想显著减小RDS(on)的值，就需要找到一种对漂移区进行重掺杂的方法，并大幅减小epi电阻，如下图:

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIiaAtH21ibayLF9Ru8HRb9NthqrqhXsxhUDe8s4HoaVIqqsSzicNYKC3VKWibfjCpAFOzJ8dIbX5ia7sg/640?wx_fmt=jpeg)

  

如下图，显示了基于电荷平衡概念的超级结MOS管物理结构。漂移区现在有多个P柱，用于消除处于反向偏压下的周围N区中的电荷。因此，Nepi现在可更薄和重掺杂，因为其组合结构可对施加反向电压提供高很多的电阻。由于N区变得更加重掺杂，所以其单位面积导通电阻减小。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIiaAtH21ibayLF9Ru8HRb9NthvAmhwvFUDIM2YAl1G6LBcLSJ4dfzWJK9WkYW2PNwwT3A7bE1zs3Qw/640?wx_fmt=jpeg)

  

两种技术的漂移区电场与epi厚度的关系。在传统平面式MOS管中，阻断电压由epi厚度和掺杂(ND+)定义，或由掺杂线的斜率定义。如果需要额外阻断电压，不仅epi需要更厚，而且epi掺杂线也需要改变。这导致较高电压MOS管的RDS(on)不成比例增加。额定电压每增加一倍，在保持相同管芯尺寸条件下，RDS(on)可能增至原来的三至五倍。

  

对于给定的阻断电压，超级结MOS管可使用比传统平面式器件(A1 + A3)更薄的epi(A1 + A2)。N区(ND+)的掺杂被P柱(NA-)的掺杂抵消，导致没有斜率。换言之，因为电荷平衡机制，定义阻断电压的只有epi厚度。因此，超级结结构的导通电阻和击穿电压之间存在线性关系。导通电阻随着击穿电压的增加而线性增加。对于相同的击穿电压和管芯尺寸，超级结MOSFET的导通电阻远小于传统平面式器件。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIiaAtH21ibayLF9Ru8HRb9NtPz6GW7cJSgaa5a3WeLnpwficdCibpBhcia0wu3O8XoThBrdFzp4icibkCzg/640?wx_fmt=jpeg)

  

二、结电容

超级结具有更小的结电容

  

对超级结器件而言，电阻的减小会带来明显的好处，例如在相同RDS(on)下的更低导通损耗或更小管芯。另外，芯片面积的减小会导致更低的结电容以及栅极和输出电荷，这可减小动态损耗。在低压沟槽式或平面式MOS管中，通常需要考虑以更高结电容为让步条件来降低RDS(on)。在超级结技术情况下，让步程度是最小的。电荷平衡机制可同时减小RDS(on)和器件结电容，使之成为一种双赢解决方案。

  

　　如下图，比较了具有接近RDS(on)值的两种器件的特征。除Eas和Ias外，超级结器件的每个参数均实现15 % - 25 %的改善。这是因为超级结器件虽然RDS(on)只减小了20%，但其管芯尺寸只有平面式器件的三分之一。更小的尺寸会影响额定电流和功率。大管芯尺寸具有更低的电流密度和更好的散热能力。因此，对于给定的导通电阻，传统平面式MOS管天生比超级结器件更坚固。但在通常用于高压电源转换器的电流和开关频率下，超级结器件始终具有更低的损耗和更高的效率。

![](https://mmbiz.qpic.cn/mmbiz_jpg/bsiaOicpwT9tIiaAtH21ibayLF9Ru8HRb9NtaXnlS9LoTPoddons9OIB27jicpCoUuojXvF9qR6k9jkhsxQ7EHKc92A/640?wx_fmt=jpeg)

  

栅极电荷考虑事项  

在任何开关电路中，栅极驱动设计都要考虑开关速度与噪声这一对矛盾。超级结器件在高压下提供高开关速度，这也需要特别注意驱动设计。设计不佳可能造成电压尖峰、开关不稳定和更高的EMI。与超低结电容有关的另一个重要考虑是对耦合和噪声的灵敏性增加，表现为栅源振荡。设计工程师因此不得不通过引入高栅极电阻或低驱动电流来减慢开关速度，最终使系统效率降低。

  

与平面式器件相比，超级结MOS管的一个特征是其容值(VDS的函数)的宽变化范围。在超级结MOS管中，由于Crss在0 - 600 V范围内的100:1下降，所以观察到的开关持续时间远小于从产品数据表Qgd值估计得到的数据。虽然没有分析方法可用来预测实际过渡时间(这取决于应用条件)，但设计工程师应当知道可使用更低栅极驱动电流来实现优异的开关性能。与平面式MOSFET器件相比，这使超级结器件可使用尺寸更小、成本更低的栅极驱动。

  

声明：以上文章内容整理于网络，如涉及到版权问题，请第一时间与我们联系。同时欢迎大家留言评论一起交流~