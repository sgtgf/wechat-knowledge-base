关注【桔子code】↓   干货多多。

  

  

大家好，我是桔子菌，继续为你安利Python轮子，今天的主角是matplotlib模块。

  

matplotlib是Python的2D绘图库，支持生成出版级图表，提供丰富的可视化类型和高度定制化接口，适用于数据分析、科研论文、商业报告等场景。

### 应用场景

-   数据趋势分析可视化
    
-   实验结果图表绘制
    
-   实时数据监控仪表盘
    
-   地理信息热力图生成
    
-   多维数据关系展示
    
-   学术论文插图制作
    

### 安装与导入

```
# juzicode.com/VX公众号:juzicodepip install matplotlibimport matplotlib.pyplot as plt
```

### 使用方法

#### 1）折线图绘制

折线图可以用于展示数据变化趋势的基础方法。下面的例子x为季度，y为销售额，为了显示中文需要 先用 rcParams 设置样式。

```
# juzicode.com/VX公众号:juzicodeimport matplotlib.pyplot as pltplt.rcParams['font.family']=['YouYuan']plt.rcParams['axes.unicode_minus']=Falsex =[1,2,3,4,5]y =[2,4,6,8,10]plt.plot(x, y,'r--')plt.title('销售增长趋势')plt.xlabel('季度')plt.ylabel('销售额（百万）')plt.savefig('line_chart.png')
```


#### 2）柱状图比较

柱状图可以用于对比不同类别的数值差异。

```
# juzicode.com/VX公众号:juzicodeimport matplotlib.pyplot as pltplt.rcParams['font.family']=['YouYuan']plt.rcParams['axes.unicode_minus']=Falsecategories =['A','B','C','D']values =[23,45,56,37]plt.bar(categories, values, color=['#4CAF50','#2196F3','#FF9800','#E91E63'])plt.grid(axis='y', alpha=0.5)plt.savefig('bar_chart.png')
```


#### 3）散点图分析

展示变量间相关性。

```
# juzicode.com/VX公众号:juzicodeimport matplotlib.pyplot as pltplt.rcParams['font.family']=['YouYuan']plt.rcParams['axes.unicode_minus']=Falseimport numpy as npx = np.random.randn(100)y = x *2+ np.random.randn(100)*0.5plt.scatter(x, y, alpha=0.6, c=np.arctan2(y, x))plt.colorbar(label='角度值')plt.savefig('scatter_plot.png')
```


#### 4）多子图布局

创建复合图表进行对比分析。

```
# juzicode.com/VX公众号:juzicodeimport matplotlib.pyplot as pltplt.rcParams['font.family']=['YouYuan']plt.rcParams['axes.unicode_minus']=Falseimport numpy as npx = np.random.randn(100)y = x *2+ np.random.randn(100)*0.5categories =['A','B','C','D']values =[23,45,56,37]fig, axs = plt.subplots(2,2, figsize=(10,8))axs[0,0].plot(x, y,'tab:blue')axs[0,1].scatter(x, y, c='tab:orange')axs[1,0].bar(categories, values, color='tab:green')axs[1,1].pie(values, labels=categories, autopct='%1.1f%%')plt.savefig('subplots.png')
```


#### 5）3D曲面图

可视化三维数学函数。

```
# juzicode.com/VX公众号:juzicodeimport matplotlib.pyplot as pltplt.rcParams['font.family']=['YouYuan']plt.rcParams['axes.unicode_minus']=Falsefrom mpl_toolkits.mplot3d import Axes3Dimport numpy as npX = np.arange(-5,5,0.25)Y = np.arange(-5,5,0.25)X, Y = np.meshgrid(X, Y)R = np.sqrt(X**2+ Y**2)Z = np.sin(R)fig = plt.figure()ax = fig.add_subplot(111, projection='3d')ax.plot_surface(X, Y, Z, cmap='viridis')plt.savefig('3d_surface.png')
```


#### 6）动态实时绘图

实现数据实时可视化更新。

```
# juzicode.com/VX公众号:juzicodeimport matplotlib.pyplot as pltplt.rcParams['font.family']=['YouYuan']plt.rcParams['axes.unicode_minus']=Falseplt.ion()# 开启交互模式fig, ax = plt.subplots()x = np.linspace(0,4*np.pi,200)for phase in np.linspace(0,10*np.pi,100):    ax.clear()    y = np.sin(x + phase)    ax.plot(x, y,'b-')    ax.set_ylim(-1.5,1.5)    plt.pause(0.1)plt.ioff()
```


#### 7）绘制阶梯图

用step()方法绘制阶梯图：

```
# juzicode.com/VX公众号:juzicodeimport matplotlib.pyplot as pltplt.rcParams['font.family']=['YouYuan']plt.rcParams['axes.unicode_minus']=Falseimport numpy as npx = np.arange(20)y = np.sin(x /2)plt.step(x, y +2, label='pre')#默认where='pre'     #step画图方式plt.plot(x, y +2,'o--', color='green', alpha=0.3)#plot 画图方式plt.step(x, y +1, where='mid', label='mid')plt.plot(x, y +1,'*--', color='red', alpha=0.3)plt.step(x, y, where='post', label='post')plt.plot(x, y,'<--', color='blue', alpha=0.3)plt.grid(axis='both', color='0.8')#axis可以为'x','y','both'三种plt.legend(title='参数where:')plt.title('step画图 By 桔子code')plt.show()
```


### 总结

Matplotlib核心优势：

-   支持30+种基础图表类型
    
-   高度可定制的绘图参数
    
-   完善的文档和社区支持
    
-   与NumPy/Pandas无缝集成
    

注意事项：

-   中文字体需额外配置
    
-   保存图像时注意dpi设置（推荐300+）
    
-   大数据集建议使用rasterized=True优化性能
    
-   交互式绘图后及时关闭交互模式
    

\-----动动手指，bug敲起来\-----  


  

* * *

关注微信公众号"桔子code"，不错过更多精彩。