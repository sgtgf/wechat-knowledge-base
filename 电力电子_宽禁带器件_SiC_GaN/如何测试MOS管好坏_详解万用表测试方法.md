# 如何测试MOS管好坏？详解万用表测试方法


> 原文地址: [https://mp.weixin.qq.com/s/mVOjnICgsxmOx4QVMLd0aA](https://mp.weixin.qq.com/s/mVOjnICgsxmOx4QVMLd0aA)

# 1、为什么要对MOS管进行好坏测试？

#   

在将MOS管接入电路之前，对其进行全面的测试显得尤为重要。这是因为MOS管，作为电路中的关键组件，其性能直接影响着整个电路的稳定性和安全性。MOS管具有三个关键的引脚：漏极、源极和栅极。若使用存在故障的MOS管，可能会导致漏极与栅极之间的短路，这种短路不仅会损害电路，还可能引发一系列连锁反应。例如，漏极电压的反馈可能会影响到栅极端子，进而通过栅极电阻传递到驱动电路，最终可能导致驱动电路的进一步损坏。因此，通过在使用前对MOS管进行细致的测试，我们可以有效地预防这些潜在问题，从而确保电路的安全与稳定。  
  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskepQco9huegL3WgvuV1wKoCQyzwJhq42BicOZrEgY6EJajicnq3m7iaPQwx4bQkKzPkTc6iaDmgflwmg/640?wx_fmt=png)

#   

# 2、MOS管测量要点

#   

在测试MOS管时，必须谨慎行事并采取必要的预防措施。  
在测试MOS管时，需要遵循一系列的要点以确保测量的准确性和安全性。这些要点涵盖了多个方面，如电源电压的要求、电压限制、电阻的选择，以及测试电路的配置等。遵循这些要点，将有助于更好地评估MOS管的工作状态和性能。

首先，必须确保输入电源的电压大于或等于MOS管的阈值电压。这是MOS管能够正常工作的基本条件。同时，还需要注意MOS管的漏极电压和栅极电压不应超过其击穿电压，以防止器件损坏。

其次，在为LED供电时，应选择适当的限流电阻，以确保电流在安全范围内。此外，连接过程中始终使用栅极源电阻也是非常重要的，它不仅有助于减少栅极处的噪声，还能促进器件寄生电容的放电。

再者，为了确保测量的准确性，应在MOS管栅极处使用低范围的电阻。这将有助于提高电路的响应速度和稳定性。

最后，在通过测试电路进行测量时，务必采用低侧开关电路。否则，MOS管可能无法正常工作，从而影响测量结果。遵循这些要点进行测量，将有助于准确判断MOS管的好坏。

  

# 3、使用万用表来检测MOS管的质量

#   

首先，进行二极管测试。这是通过一个带有二极管模式的万用表来完成的。由于MOS管内部包含体二极管，因此在NMOS中，体二极管通常以源极到漏极的方向存在。这意味着在测试时，阳极应接源极，阴极接漏极。

接下来，进行电阻测试和连续性测试。电阻测试旨在测量MOS管的电阻值，而连续性测试则通过万用表的蜂鸣器功能来检查MOS管引脚之间的连接状态。

  

# 4、搭建一个电路来进一步测试MOS管

#   

在完成基本的万用表测试后，可以组装一个电路来对MOS管进行更全面的测试。这个电路将包括必要的元件，如电源、负载和测量仪器，以模拟实际工作条件并观察MOS管的表现。通过观察电路中的电压、电流和功率等参数，可以进一步评估MOS管的工作状态和性能。  
1、在测试NMOS管时，首先要确保万用表处于二极管模式。  
  

2、将万用表的红色探头与MOS管的源极相连，同时将黑色探头接到漏极。这样，体内的二极管便处于正向偏置状态。在此状态下，万用表应显示出0.4V至0.9V之间的电压读数。若读数为零或无读数，则表明该MOS管可能存在故障。  
  

3、当探头连接被颠倒时，万用表的读数应显示为“开路”或无读数，这是MOS管正常工作的表现。因为此时二极管处于反向偏置状态，任何非零读数都可能意味着设备存在问题。  
  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskepQco9huegL3WgvuV1wKoia2F92eia8iaGcMY5ScET8BaDON6S3B3rqTX5kpRUA4G0lp6u8clMmqbg/640?wx_fmt=png)  
用数字万用表测量NMOS管的质量情况  
  

对于PMOS管，测量方法与NMOS管类似，但需注意极性。确保万用表处于二极管模式后，将红色探头与PMOS管的源极相连，同时将黑色探头接到漏极。此时，体内的二极管同样处于正向偏置状态，万用表应显示出相应的电压读数。若读数异常或无读数，则可能表明该PMOS管存在问题。  
  

![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskepQco9huegL3WgvuV1wKoicPjsjYK2U751ELamhL9uZtOmUFxSBajicQNS7IXrcmR7pIeBTgC9oew/640?wx_fmt=png)  
用数字万用表测量PMOS管的质量情况

  

数字万用表是测量PMOS管质量的重要工具。在测量时，我们主要利用PMOS管的特定属性来进行电阻测试。当PMOS管的栅极端未受到触发脉冲时，其漏源电阻会呈现高阻状态。通过检测这一特性，我们可以判断PMOS管是否存在故障。

进行电阻测试时，只需将数字万用表的一个探头连接到PMOS管的漏极，另一个探头连接到源极，然后观察万用表的读数即可。一个工作正常的PMOS管在漏源之间应呈现出高电阻状态。如果读数异常或无法测得电阻，那么可能表明该PMOS管存在问题。  
1、功能完好的PMOS管在测试时应显示出高漏源电阻，且这一结果不受欧姆表探头连接方式的影响。  
  

2、同样，我们可以用数字万用表来测量漏源电阻。在电阻模式下启动测试，万用表显示的电阻读数应该非常高，通常以兆欧为单位。  
  

3、最后，将万用表测得的读数与PMOS管的数据表进行对比。若电阻读数小于数据表中的数值或为零，则表明PMOS管可能存在故障。正常情况下，仪表或万用表应显示数据表中的标准电阻值。  
![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskepQco9huegL3WgvuV1wKoNmYtWlEz932s6ftqffhdz7BWjwgT7tZPOlLslUalib1slxgFKRiahZiag/640?wx_fmt=png)  
  

用万用表测量MOS管的好坏时，需要注意端子间电阻的影响。在测量栅极与源极之间的电阻时，你实际读取的是R1的值，而非高电阻。移除R1电阻后，电阻读数会相应升高。

此外，还可以进行连续性测试来辅助判断MOS管的好坏。首先，打开数字万用表并选择连续性模式，将测试引线连接到MOS管的端子。保持几秒钟的连接，并观察万用表的反应。如果蜂鸣器响起，那么这可能意味着MOS管处于不良或损坏的状态。  
![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskepQco9huegL3WgvuV1wKo4mhMB3RiacZX82GqVNx7BAQxLp8SZLyFnV46FkEnsLUicKiayXogibXQyw/640?wx_fmt=png)  
将测试引线按照电路图所示连接到MOS管的各个端子，并保持几秒钟的连接。观察万用表的反应，若蜂鸣器保持关闭状态，则说明MOS管状态良好。  
![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskepQco9huegL3WgvuV1wKoVJUKsFiav50ibV9kmHq2wMKvGh6olXdjn2rzjjvE5ODZicd9Qao6G9StQ/640?wx_fmt=png)  
组装一个电路来测试MOS管的好坏，我们首先需要了解MOS管好坏检测电路图。

对于N沟道MOS管，完成连接后，按下开关，若LED灯亮起，则表明MOS管状态良好；若LED灯不亮，则说明MOS管可能已损坏。同样地，当你按下开关时，若LED灯熄灭，则MOS管状态正常；若LED灯保持亮起，则可能表示MOS管存在问题。  
![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskepQco9huegL3WgvuV1wKontE0Yyv4fcOhrY1aibAeDvqaiaLWm1LibOqCk8RIZpjic4E3wXicAkSiaBcA/640?wx_fmt=png)  
P沟道MOS管的好坏检测电路图与N沟道MOS管类似。在完成连接后，若按下开关导致LED灯熄灭，那么MOS管状态良好；若LED灯亮起，则可能表示MOS管已损坏。同样，按下开关时，LED灯亮起意味着MOS管状态正常，而LED灯不亮则可能预示着MOS管存在问题。  
![](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskepQco9huegL3WgvuV1wKopNuyWfH8XNHSzM1ONl7cgtV2QbnzpurB6eLgPgnn3ictcria6Cqdp9Rw/640?wx_fmt=png)

资料来源:网络

  

注明：此文来源网络，是出于传递更多信息之目的，文中观点仅供分享交流，不代表本公众号立场。转载请注明出处，若有来源标注错误或如涉及版权等问题，请与我们联系，我们将及时更正、删除，谢谢。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskepQco9huegL3WgvuV1wKoPGHwte9rYeXr262O1T0K0eydqWhxYjvneqLBEUgSRzyHMIk0mEiasRg/640?wx_fmt=jpeg)

    专注碳化硅器件的研发与应用。分享碳化硅器件的设计@研发@应用等行业资料。

  
加交流微信群，请添加个人微信：18126115420，并备注单位+姓名+研发方向。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/aJG5QWxqLskepQco9huegL3WgvuV1wKoXlsVXnIteGC8rDibWdMLqUjoIncf5Nlc1R1PBLiacEHkqNcuJgVeU1tw/640?wx_fmt=jpeg)

![图片](https://mmbiz.qpic.cn/mmbiz_png/aJG5QWxqLskepQco9huegL3WgvuV1wKoGgFhDkA0k43nibOJVPpKCWGnZqKicXGNwlKRP2maJkB951PvK9xibmy5g/640?wx_fmt=png)

#