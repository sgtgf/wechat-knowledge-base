# 用Python分析数据


> 原文地址: [https://mp.weixin.qq.com/s/y\_UAWklZNyuacc4w7MY-1g](https://mp.weixin.qq.com/s/y_UAWklZNyuacc4w7MY-1g)

![](用Python分析数据_images/img_000_c6739c38789a.gif)

你知道吗？Python代码也能跑得贼快！虽然大家都说Python是”慢语言”，但掌握一些性能优化的小技巧，就能让代码提速好几倍。今天咱们就一起来探索几个Python性能优化的黑科技，让你的代码也能像装了氮气一样飞起来~

  

**1.**

**列表生成式：优雅又高效的选择**

  

  

说实话，要处理一堆数据时，用循环确实能搞定，但列表生成式简直就是个完美替代品。它不光写起来简单，还能让代码跑得贼快。

  

\# 这样写太老土了

numbers = \[\]

for i in range(1000000):

    if i % 2 == 0:

        numbers.append(i \* 2)

\# 这样写就很潮

numbers = \[i \* 2 for i in range(1000000) if i % 2 == 0\]

测了一下，用列表生成式比普通循环能快将近40%。原因可不简单，这玩意直接用C语言层面的操作，省去了重复调用append的开销。

  

温馨提示：列表生成式虽好，但别往里面塞太复杂的运算，不然反而会拖慢速度。

  

**2.**

**生成器：内存管理小能手**

  

  

要是数据量特别大，用列表生成式可能会把内存撑爆。这时候生成器就派上用场了：

  

\# 这样写会占用大量内存

big\_list = \[i \* i for i in range(10000000)\]

\# 这样写就很省内存

big\_gen = (i \* i for i in range(10000000))

生成器最厉害的地方是它不会一次性把所有数据都塞进内存，而是现用现算。打个比方，就像点外卖，你不用一次性把一周的饭都订了，啥时候饿了点啥时候的。

  

**3.**

**字典和集合：查找效率王者**

  

  

有时候需要经常查找某个值是否存在，用字典和集合比列表不知道高到哪里去了：

  

\# 慢成狗

data\_list = list(range(10000000))

value = 9999999

value in data\_list  # 这得找半天

\# 贼快

data\_set = set(range(10000000))

value in data\_set  # 秒出结果

为啥会这样？字典和集合用的是哈希表，就像查字典一样，知道第一个字直接翻到那一页，不用从头翻到尾。

  

**4.**

**本地字典访问优化**

  

  

**PyDictObject**是Python字典的内部实现，了解它的一些特性能帮我们写出更快的代码：

  

def slow\_func():

    d = {'x': 1, 'y': 2}

    total = 0

    for i in range(1000000):

        total += d\['x'\]

    return total

def fast\_func():

    d = {'x': 1, 'y': 2}

    x = d\['x'\]  # 局部变量缓存字典值

    total = 0

    for i in range(1000000):

        total += x

    return total

把字典里常用的值先存到局部变量里，能省下不少查字典的时间。这招在循环里特别好使。

  

**5.**

**使用内置函数代替自己造轮子**

  

  

Python内置函数都是用C语言写的，速度杠杠的：

  

numbers = list(range(1000000))

\# 这样写太费劲了

def my\_sum(lst):

    total = 0

    for num in lst:

        total += num

    return total

\# 内置函数就是快

result = sum(numbers)

map、filter这些内置函数也是性能小能手，用它们处理大量数据比循环快多了。

  

温馨提示：itertools模块里藏着不少性能优化的宝贝，值得好好研究。

  

**6.**

**选对数据结构很重要**

  

  

处理数据时，选对数据结构能让代码提速好几倍：

  

-   需要频繁查找？用集合或字典
    
-   要处理大量数字？用numpy数组
    
-   队列操作？collections.deque吊打list
    
-   频繁修改？用数组
    
-   只是存储？用元组
    

  

核心就是：用对工具事半功倍。

  

写代码就像开车，知道这些加速技巧，让你的Python代码也能像超跑一样飞驰。不过记住，可读性和维护性才是第一位的，性能优化要恰到好处。

  

![](用Python分析数据_images/img_001_417757d09258.gif)