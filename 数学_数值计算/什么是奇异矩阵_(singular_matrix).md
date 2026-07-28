# 什么是奇异矩阵 (singular matrix)


> 原文地址: [https://mp.weixin.qq.com/s/2bwHWick\_6JTx4kFEFZbfw](https://mp.weixin.qq.com/s/2bwHWick_6JTx4kFEFZbfw)

 嘿！别被“奇异”这个词吓到，它在数学里就是“特别异常、出了问题”的意思。或许换成“奇葩”一词，你就秒懂了！今天我们用生活比喻、简单例子和生动图片，一起搞懂它，看完你会说：“原来这么简单！”

**概述**

### 1\. 一句话定义（核心就这句）

**奇异矩阵 = 方阵（n×n正方形矩阵） + 行列式(det) = 0**结果：**它没有逆矩阵**，不能“反向还原”。

就像0不能当除数一样，奇异矩阵在矩阵世界里是“禁忌操作”。正常矩阵像一把万能钥匙，能锁也能开；奇异矩阵就是一把坏钥匙，打不开任何锁。

### 2\. 为什么叫“奇异”？看个最简单例子

拿2×2矩阵举例（最常见）：

**奇异矩阵 B：**

```
[ 2  4 ][ 1  2 ]
```

计算行列式：2×2 - 4×1 = **4 - 4 = 0** → 奇异！

为什么？因为第二列正好是第一列的2倍，**列向量完全重复**（线性相关），像说话时有人一直重复别人，信息冗余了。

简单来说，\*\*奇异矩阵（Singular Matrix）\*\*就是在线性代数世界里“生了病”或者“瘫痪了”的方阵。

如果把矩阵看作是一个**变换机器**，普通的矩阵能把空间拉伸、旋转，而奇异矩阵则会把空间“拍扁”，导致信息永久丢失。

* * *

### 3\. 直观理解：压缩与丢失

想象你手里有一个 3D 的橡皮泥球：

-   **非奇异矩阵（可逆矩阵）：**
    
     像是一双灵活的手。它可以把球捏成椭圆，或者转个圈。只要你愿意，你总能通过相反的操作（逆矩阵）把它变回原来的球。
    
-   **奇异矩阵：**
    
     像是一台**液压机**。它直接把 3D 的球拍成了一张 2D 的薄饼，甚至是一条 1D 的线。
    

**关键点： 一旦变成了薄饼，你就再也无法知道它原来在垂直方向上有多厚了。这种不可逆性，就是奇异矩阵的核心特征。**

* * *

### 4\. 奇异矩阵的“病症”表现

在数学上，如果一个方阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tCJvLBB965eZbcfVwvfdId22G56P4w5PV0917LMMBU1QoOiacibI2hnyntqu9w5WibJKMDMPMdia8HjicQnvcEnB87cnMqYQlrktvyIdzR81HR0g/640?wx_fmt=svg&from=appmsg) 是奇异矩阵，它通常伴随着以下几个特征：

#### ① 行列式等于零

这是最著名的判断标准。

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ZBVeyG33Entt1qZYXSCTce4kzam152PBBCiaAnncib5MNUuFx7E0x2L4B2Hdf97GhdQZXqoarTg0k2rLB6eyicX1aXtYZLspFo1vv06t0ZvYLw/640?wx_fmt=svg&from=appmsg)

行列式可以理解为变换后的“体积缩放比例”。如果比例是 0，说明原本有体积的东西被压没了。

#### ② 没有逆矩阵

普通的矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7KmCJnYycBiaLdJxvhDdibOEC9zFQuMV7LZ51lLIlRjmZibKuYYI0JNUiaRWPDscTJYicu2mHHmficza073xaSia7bpOS6ZeocTibjn0RrXz5fYhPeIg/640?wx_fmt=svg&from=appmsg) 都有一个“后悔药” ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Das6GQSAflskib9icibV4JwyLbUQUFVMjj3eqLN9l6NTQ2jWB8zVIEEz1tDHCC24n2aSFG3bricl5rib3iaj3xFJ8qBVubSnp7N8uzhKC8ygXszJA/640?wx_fmt=svg&from=appmsg)，使得 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM42L4cxvkOMFalQVG1R3TaS8Ac9iayeG7UtZs3iaNLtWdvwcRib5FrkARIS8hMYGBIZKXopWo1Df29Xjj5RRO1oUrvVwPxctqjXHtsjtOa0FqQuQ/640?wx_fmt=svg&from=appmsg)（单位矩阵）。但奇异矩阵没有逆矩阵，因为你没办法把一个“点”还原成一个“面”。

#### ③ 行或列“不独立”

矩阵的某一行（或列）可以用其他行（或列）加加减减凑出来。

-   **例子：**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4hCAAOiarqIz9pBQhvgA3fNMCjtDz0yGqE5D1icJLBDDuuIN1KiaNHDUChaicZHYHwE3FddUTiceicc9icJA47RicfvJdzQn9GaG0ibxjebLRxrPqMoKw/640?wx_fmt=svg&from=appmsg)
    
    第二行正好是第一行的 2 倍。这就像两个向导给你指路，一个说“向东走 1步，向北走 2 步”，另一个说“向东走 2 步，向北走 4 步”。看似给了两个指令，其实只有**一个方向**的信息。
    

* * *

### 5\. 图像化演示 (2D 空间)

假设我们有两个向量 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7diaUuFibYgaMB4to521lRCcybg7iasH3YH3eBWJGWicxwPLic29RNUGdBFd5V519c6bDkMJllpxsSFyiaj7wWSC8qlpuAk4Uepo609PW3bBQeExiag/640?wx_fmt=svg&from=appmsg) 和 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4yaIzUv8Wic1ZUQ7c3qOUuDxbiaGY2J0uKBw4m6x9oEAVtADxVCfkJ6LJriabIpiccDSDg1JZmDbd8DMyKichianb59Ohic3JNiaPSwOpLKz8RlhJiccw/640?wx_fmt=svg&from=appmsg) 构成了二维平面。

矩阵类型

图像效果

空间结果

**非奇异矩阵**

两个向量指向不同方向

依然是一个**面**

**奇异矩阵**

两个向量重合或在一条线上

塌陷成了一条**线**

> **图示：**
> 
> \[ 正常的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4HXksicFTXqWFXpahVfgicdQJ2nclia3LKavjibtsdibtCicTAbsHLjmoknpw0hcXmh9aDp6qXrPCwLCK0nrxw3TEok2CyFRZNPGQDfplZe9MnumXA/640?wx_fmt=svg&from=appmsg) \] : (1,0) 和 (0,1) ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SLteL05jHE9IrsqC5ic7N2ufCsy27tj79MjgfSXu9TXJLynvibab4eBIKosGWVtHCiaXSLwYsToZofhwOpibX8aIYOibdn466R4mbkHB9p69crtg/640?wx_fmt=svg&from=appmsg) 撑起整个坐标系
> 
> \[ 奇异的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5g3Is0B3gxEKNsWbxMmRD2j6f2CRNL8n433V762346Xiccto0te0MFicxXUiaYeibXUEBJWvaSQohbyoORAGlnufiaLAe6tVJlW358ic2uB6edYrfw/640?wx_fmt=svg&from=appmsg) \] : (1,2) 和 (2,4) ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4BKSsfG1hiab5tbs5iaOibWb9KDUkVhEmkMkPUiabdL8dmAg56tcWtcghERV2GpQSM3Ze5vj6xPP6ibficTiawZsRohbfoer6rRq7fEyVKWsAkqhp3w/640?wx_fmt=svg&from=appmsg) 两个箭头重叠，只能在一条直线上移动

* * *

### 6\. 为什么叫“奇异”？

在中文里，“奇异”听起来很酷，其实在英文里 **Singular** 也有“单一、特殊”的意思。

你可以理解为：在浩如烟海的矩阵中，随机填入数字组成的矩阵通常都是“健康”的（可逆的）。只有当你刻意让某些行成比例，或者让某些参数恰好抵消时，才会出现行列式为 0 的极端情况。这种**极少数的、特殊的情况**，就被称为“奇异”。

* * *

### 总结

特性

非奇异矩阵 (Non-singular)

奇异矩阵 (Singular)

**行列式**

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7VjKJSqCLh62TNHIHvz88bPmpWo2gzlMziandR8xrVjZl7ywTdn8kFqoCSO7r8T38X2XIU36Esc15LxvuwvGwU4pmwxMcNcsLuHia7tNs5tKdg/640?wx_fmt=svg&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6oYNiciaY4f0fagZWXRdFohx4yLIPZFGX4rgdXxJRwrSFa38S3NficdEmyCf7EskbTo1SGPicu2DFVZMFucz33EZz4d2MhkM4xEia7EwuPMPl24WA/640?wx_fmt=svg&from=appmsg)

**逆矩阵**

有

无

**空间变换**

旋转、拉伸（保留维度）

塌陷、压缩（损失维度）

**方程组解**

唯一解

无解或无数解

**一句话记住：奇异矩阵就是把高维空间“拍扁”成低维空间的“降维打击”工具。**

* * *

## 看图详述

![](https://mmbiz.qpic.cn/sz_mmbiz_png/sVzeakRoocsiaURXWX6PvzswdiapDPxV9QficpXJ03KnC9fYJ2Jpc17Qm8ibTNoQl1FSPzibFH2NeuOmDpnUhyo73kHIibUT82yLlu7XX76nVz6MY/640?wx_fmt=png&from=appmsg)

##   

\*\*奇异矩阵（singular matrix）\*\*指的是：一个 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyB2SDSEF8rQUPiaLyY6jI4AxaIzaLxkC1r5A5XIe1YK9MAvKVR8VibTPOBbxMrLM1CjndBxOTvrF7LZJUFwFvlmclbuIbm9GxWiaQ/640?wx_fmt=svg&from=appmsg) 方阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6BjQPJiaZ1WHZp5jAiaklzeSSMQf330ORBuJtT99PIDMcibqZDQ5P7e62YLg6y7GQXIPicR78dvAkTxvGJmXmPVCMdlM1FY5z4SxxeB9HxrMVAww/640?wx_fmt=svg&from=appmsg)**不可逆**。最常用的一句话定义是：

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7SxMowpq8WnUY9Cy4ZXKUeceaZQswwyr8Adtogdlmecn8A3JrrLBiarkuTckCv4bS5NJ0NKfKaX3Ibr8j8KlVPeTcUUp0GzEoshUib9A3bDxCg/640?wx_fmt=svg&from=appmsg)**奇异**![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6DNmFI0o2D7A3xC7TGMvvQqdicMYjy0vkmVQibhSsLCvz5Ew7VkJwDLLqjdHaPtC71g6Tmib7ficX0YwNycIURYeHqQJQXnrTwh4yj4ApycuicCew/640?wx_fmt=svg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6ApdIhFTtcLNXbl0BkghEmzs5iawYpOkYErVHiaBgVjhPQOEvA5NGgSfWEqibwzXmDYo3dxzSc3c5T0nQw8Taicmo4ruex68y4MANm3b95ib8lEZw/640?wx_fmt=svg&from=appmsg)

图里写的就是这个核心结论：2×2 时 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5lelJxu6icj6ibawreVdp7ELdZKE6zZPAImKeA781m0Ap4xia8ibHibgKUjpiblovc0mG9K9CPgjt6c5B5wAghHnQ74AWX5PKmp4UYoWkoV44qia26A/640?wx_fmt=svg&from=appmsg)，3×3 时是按展开式算出来的那个行列式值；只要结果为 0，就奇异。

* * *

### 1）“不可逆”是什么意思（最直观的定义）

不可逆 = **没有 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM59rxMzLgOibEibA9QicpS1SlaCCiaqX67aGm4eu0PU4Q2nqicbWvEuhu2LJNiaRHcLNIxOcrk7xicYMr49xedmVNbmDXGk4KvsDayiahVXS51mJ750Gg/640?wx_fmt=svg&from=appmsg)** ，也就是你无法用一个矩阵把 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5cw51Isia5ChrdFhXkicJ7Gk0sxibaB0fFLdcvBBGlVqLyJbXMDXpW3Ia68SmCEVGWOSTzMb1bXPTGbibSKZwOtg0K9kAxBNlLLIrNJBCoiaMot1A/640?wx_fmt=svg&from=appmsg) 里的 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM62BMkibDIKfUAYdM45kTjwzxUdu9m5LWBAEPbDpUKf66MoZZXy8vCz4aBhm0URArddEY5tNicMK7NCOQ4jaLClEPAibkicOn1icpicXGRXX5UWQNAw/640?wx_fmt=svg&from=appmsg) “唯一地解出来”。

-   **非奇异（可逆）**
    
    对任意 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6BjQPJiaZ1WHboCzHUy2oEpPR7oHnbarebQ9SK7GAwj2J6x921l4d2RoiaHVHibPV1bmicRjLaEibf8mAMHJUfibibBqhibibeVUWhjUV5uZx25xibpJNA/640?wx_fmt=svg&from=appmsg)，![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7ibLIuYVJkVV27k90OtibX0hMXrZ5NKN9O7Kj1oibAll5sHRia4V5mweImuJHHSFa1oleTztice4pQg45GvMUsXY6qF9tQPTXOYFtCcoZQZ7pUn1g/640?wx_fmt=svg&from=appmsg) 都有且只有一个解
    
-   **奇异（不可逆）会出现**

-   没有解（矛盾），或
    
-   有无穷多解（不唯一）
    

* * *

### 2）行列式为 0 的几何含义：体积被“压扁”

把矩阵 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6gjYBbn6Uh4DFmictmqlUNuke01kzp2KKnbOpiaBWUvXa06jRKROqgF0QMqHib9a11WYwicAxcicIIBzfSLxwUwv4Pqhwu6CeNtoVYFcib3U4YWBQw/640?wx_fmt=svg&from=appmsg) 看成一个线性变换：把空间里的图形“拉伸/旋转/剪切”。

-   ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5c8icKuPZT0pVp6gTIYiaKM5DIneHvfKATicll9gIia1UkaekVibF5WbPQkKoxhTNia7QrDgzjOfd3Q9eusALtHKE7icquvQ7yV12YFKS8wfZcPDauQ/640?wx_fmt=svg&from=appmsg)
    
     表示 **体积缩放倍数**（2D 是面积倍数，3D 是体积倍数）
    
-   表示：**体积缩放为 0**  
    ⇒ 原本有面积/体积的东西，被压到更低维：
    

-   2D：整个平面被压到一条线（或一个点）
    
-   3D：整个空间被压到一个平面/一条线/一个点
    

这就是“奇异”的几何直觉：**信息丢失了**，所以不可能有唯一逆变换把它还原。

* * *

### 3）线性代数视角：列（或行）线性相关

另一个等价判断（非常好用）：

-   A 奇异  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6iaibHaDIxDTXkQSGaRbvQsLUEqlsqkX6iak6ria3gU16CDy2GWrXg0UDnjibLFgdGWLrgSMAey3FDiaFJpicDxkCff1TPcmYWXOhgWCicyDOqvibH5mQ/640?wx_fmt=svg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM49UGeW1q7sCCJcntpymMmwxZTI53URp7q7WEa3Go7DaYYJOnsGz77YIrxnszlyw3xzY9JhYXVOlNQKVwmb1GlVkIaTTSTsdsuI1fU8U1XKaQ/640?wx_fmt=svg&from=appmsg) 的列向量（或行向量）**线性相关**
-   等价地：![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7xPFcRccicr2vAZXiayNzRIA1gp73g0ibYL6HgdUW6RDP76v4Ryic9ymRWwKDuzNk7tf0kLsibiczePR52zSI9GfSWzicZqqMEWdyo7BafRuKp1P54A/640?wx_fmt=svg&from=appmsg)
    

2×2 情况最直观：两列共线（一个是另一个的倍数），面积就变 0。

举个 2×2 例子：

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM76ycEIvIicxHibw91MTMxQBfRUGfcW2v3KZbia8AwD1kehIHZLgYoYWLbRibplkLkXIQAJaCWfbE6PduGmjvyyTYfgYJp2SMPxicGia06NIk2Y7UoQ/640?wx_fmt=svg&from=appmsg)

第二列 = 2×第一列 ⇒ 线性相关  
![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5Im49yZyGFyeaPKfIszVlkKeGo2BGaL4Z1Y3fuNNZJSjZJv1ibq5xiaibUWUIvnI6tkhL0XxWqA2PXiczAQwFjbF4kMicAWfsaVx162p6libevfZDg/640?wx_fmt=svg&from=appmsg) ⇒ 奇异。

* * *

### 4）方程视角：存在非零向量被映射成 0

这是判断奇异性的“杀手级”等价式：

-   A 奇异  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4Asvuw3hPEXRicoicibPJJrNnEhjaT4FL9iaic3rfK71BIKttUFeicmgPHdB9Dp6vng3UonAg8lsMvxJiao7cBhzBHrjicv76vkK1hPAC7b6JJUdp6OA/640?wx_fmt=svg&from=appmsg) 存在 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mfF2dEW7G1MSUlfuECfFYTrOUYibu9NXb9FDfnML8bWKskzGdmPUoxysINeKs8mZO5t6rxCm7PG4ps77FI4sVdASOsK0c7j9tXNYicEibg5zEw/640?wx_fmt=svg&from=appmsg) 使得 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6yNPvnkDDhRwJY5w7g5Y3NEoTibqNyGaKs83tStxMbMDmbvb6A8uCByVxFGxqLI4mXVu5QjCOZj2rV2ic1uBM9xHgc6kpGBFQcWgTXs73L7H4w/640?wx_fmt=svg&from=appmsg) 

也就是说：有某个非零方向被 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7tTO2tSibLsqfUWHmuo4mQLkDnAG8yLbg5BQx9xNnIrDkFnzxOe3NQHrQyhTg2KcibZcLg0sl7hKoozVVSf2bgxsgm4bzTN2b8JFp3iaHZtX0tg/640?wx_fmt=svg&from=appmsg)**压到原点**（被“抹掉”了）。  
这也意味着 0 是 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5fH5dgNzAQghwzg58faYuiccmxU4icPmqYCicJE4QGZq0JG48aEvicLJbIo1uHpfhprHNhRSqt1OV3xHxhtsas49ziaehKh0F9b7Qrq0eBddibnZcw/640?wx_fmt=svg&from=appmsg) 的一个特征值：

-   A 奇异  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM546VXGcOXMyAbQsMicQsOL4PKT2ibBNfIZNEWCJA1aMkG6Lm2s4BoYpxicBzx05YHoibEXcKdZwLjE4OicXbWHIHMTeU0E7QBS1HtOu3UPBabsbicw/640?wx_fmt=svg&from=appmsg) 0 是特征值  ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4HXksicFTXqWBCxSbfO0SDlGXkwRLJbOaiaEfg4XHicy5JqWbjEYxeRMHcOXdSDaMMl1IOz23SXCKxXP28dIqA2ibVvgMBHV3JkUOgShLcb2R7Sg/640?wx_fmt=svg&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6mc3nYz7ILiaQocnriaiaDy6MDCuW1MpqNibkfo0aIm0aOeb2iaFv7MsxxdwYwFpwb545A4Qia5ibHVXobc6Eg8cwwPvJqahZJdJXQOqETazcQOe8aQ/640?wx_fmt=svg&from=appmsg)  

* * *

### 5）怎么“快速识别”奇异矩阵

不靠展开 3×3 行列式也能很快看出来：

-   **看行/列有没有成比例**
    
    （明显线性相关）
    
-   **看有没有重复行/列**
    
    （必然 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM5micWD1ibhr6Ge6gX4ia5cF3ZuPLlMNB1msO0mbo3J4JwbWywZtrfzJtCbmK4rZ8cD0OXsBW3CQZrGBoezNo8cQ8NHFdraYPsqsD92bMJqsC5zg/640?wx_fmt=svg&from=appmsg)）
    
-   **做初等行变换化到阶梯形**
    
    出现全 0 行 ⇒ rank < n ⇒ 奇异
    
-   **数值计算里**
    
    看条件数很大、或最小奇异值接近 0（SVD 视角）
    

* * *

下面给一套**可直接跑**的 Python（matplotlib）代码：用一个**3×3 奇异矩阵（rank=2）把单位立方体压到一个平面**，并输出 GIF 动画。

这个例子选用

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM6Gz5c5dV8Q7FRgqotmoCZF58NV5q00KCGeO6T6FQgQ1gia1icbudt8hJwqdESGq7wjkWyQKibLSsWZpa0kyZMxGXMxm6yqHCrWTgvrbIT8X4tJg/640?wx_fmt=svg&from=appmsg)

它的第 3 列全是 0，所以 ![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM4SdW9smE0CoR9ZlzKmq3ZSHKaHCwDHks75mWtN1HcPia74lAnB1nMIzjgWKPUahHcyreico80OXVuOplGibSh0z4Z5E17l06ynhbu7qbd9afuHA/640?wx_fmt=svg&from=appmsg)，并且输出点满足

![](https://mmbiz.qpic.cn/mmbiz_svg/Q3auHgzwzM7dWqySs8wJN1JAW55Foia5BWoLxGvdxwqK3ziaZTDNpwT7jZ7vc5G4n9FCSC7RY0n2VYmibWUwySKNKPLAibHULIbCqmvmxEW6V42E7iaW6wjxktQ/640?wx_fmt=svg&from=appmsg)

直观上：**原来的“厚度（z 方向）”被抹掉了**，立方体逐渐塌成一个平面上的平行四边形区域。

* * *

```
import numpy as np
```

![](https://mmbiz.qpic.cn/mmbiz_gif/sVzeakRoocteI0qmVX34dZIZCHvS0VWiaDOeROaj8Y6gDXic8x2B4ejGuZUNtfweWx4HdX1rWoQptNFqOZur7EurmVSvEljmNPdhibkcVHThgg/640?wx_fmt=gif&from=appmsg)

**小结口诀**（背下来）：

 “行列式为零，矩阵就奇异； 行列线性相关，无法求逆阵； 变换压扁维度，信息丢一边。”

奇异矩阵不是坏东西，而是大自然的提醒：你的数据或变换“退化”了，需要检查独立性！