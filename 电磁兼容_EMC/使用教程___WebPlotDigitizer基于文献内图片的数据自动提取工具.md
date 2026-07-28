# 使用教程 | WebPlotDigitizer基于文献内图片的数据自动提取工具


> 原文地址: [https://mp.weixin.qq.com/s/vAYjHzll73eDImQirHekiA](https://mp.weixin.qq.com/s/vAYjHzll73eDImQirHekiA)

在获取文献中的物种分布数据时，我们常常面临这样的无奈：文献中的坐标地图清晰可见，却如同镜中花、水中月，无法直接获取具体的分布点坐标数据。然而，曙光已现！一款名为 【WebPlotDigitizer】 的宝藏软件横空出世。  

【WebPlotDigitizer】是基于图像的数字半自动化工具，如其名它可以将图片的坐标轴数据化，这样就可以提取数据啦。

优点

1) 易上手，有中文版，还有详细教程；  

2) 功能多：适用于各种图表，包括二维XY图，条形图，极坐标图，三元图，地图等图形，自动提取算法可以轻松提取大量数据点；  

3) 开源的（V4前版本），可以免费使用。

版本号

1) 桌面版：4.7版：https://automeris.io/v4/（开源，个人觉得桌面版没有必要）

2) 网页版：

-   5.2英文版（最新）：https://automeris.io/wpd/（需要科学上网，添加了AI识别功能，无需手动设置坐标轴等，但有次数限制）
    

参考文献：Burda,B. U., O'Connor, E. A., Webber, E. M., Redmond, N., and Perdue, L. A. (2017).Estimating data from figures with a Web-based program: Considerations for asystematic review. RESEARCH SYNTHESIS METHODS, 8(3):258-262.  

-   4.8中文版：https://apps.automeris.io/wpd4/index.zh\_CN.html（完全够用，但不提供中文教程）
    
-   用户手册（英文教程）：https://automeris.io/docs/
    

操作演示（以4.8中文版为例）

打开网页界面如下：

![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLvxYdkEaC5hFQJBAJeYBWWyUgbG4x5W3IVmJXondsWDRquyCVBt6ebw/640?wx_fmt=png&from=appmsg)

  

二维XY图

1）导入图片

-   可以直接拖动，一般图片格式都可以。
    
-   这里以网站给的示例图为例，因为没有导入这一步，所以直接选择左上角的“坐标轴”。
    

2）标定坐标轴

-   选择二维（X-Y）图，对齐轴。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLEtrjHAvpkBBjuOpkh4F4IcNlGDKNkPibk4pIRsxL5GibH2U0yJLVYSOw/640?wx_fmt=png&from=appmsg)
    
-   开始标定坐标轴，选取如下图所示4个点（X1，X2，Y1，Y2），首次选取可以不要求精度，选完4个点后，点击想要微调的点，就会由红色变为绿色，此时可以任意移动键盘方向键调整。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLvDMcMQsWOuO3iaX4GGZ7iaMXslpmFjkczUh3ZrHowIojcqPdrpXO9iaVQ/640?wx_fmt=png&from=appmsg)![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLKGjwBFdia9ebYNuV2TrbzMNH6MJ7dL8U9CTJealhA5zoWhgwkLrLhwQ/640?wx_fmt=png&from=appmsg)
    
-   点击完成，选择标定的坐标轴范围。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLiacibLUBv5XXnXhovBKPiaEMo48tbqGChfHljlM5qlI9tL3zHuZhtz1Ow/640?wx_fmt=png&from=appmsg)
    

3）选择想要的数据

-   确认后可以在“自动提取”区域选择想要的线条打点，如黄色，则点击前景色旁的色块后选择黄色，完成。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLIQhpeO6rJhwHkraCfbgkwT1hhAn5OYZcFQD1O9ALIoB2icclibgyjPdg/640?wx_fmt=png&from=appmsg)
    
-   运行后发现有很多红色的点被选上（下图所示），此时可选择“方块”、“画笔”选出想要的区域，或调整距离。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzL216gicicySVzRicq77bq0Uqt4icEEibS8gglBlQ2QfG3GuT7heyGevxtnrA/640?wx_fmt=png&from=appmsg)
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLMOr7zBTXk3pqCAvHpicSCib9AEEeffpg4ofw2LKy4mnHjDpcYpguNY7A/640?wx_fmt=png&from=appmsg)
    
-   初步调整后结果如下
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLoCmIO9w8H9OfVS7dLWV0QhyeITeEA7ibic0BLWDXhyudtELiaoHlHXfcg/640?wx_fmt=png&from=appmsg)
    
-   若“自动提取”的方法点数量或精度不能满足我们的需求，则可以通过“手动提取”，增加点（直接在图上点击）、调整点（先选中点变绿后操控键盘方向键）和删除点（直接在图上点击）。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLpjFTg9AaxkyBymXOLLv2CXMdXoVRVZf13wnnicAUR7JtJ1RkJN0nOsw/640?wx_fmt=png&from=appmsg)
    

4）查看和保存数据

-   调整完毕直接点击左边的查看数据。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLeHyAwuTiaDaiagFoOyLqnS7aibCLjEkLxCMyl3oicdsqr23oUw8EDGbgcQ/640?wx_fmt=png&from=appmsg)
    
-   通过设置位数可以修改小数点位数。点击Format，然后下载.csv文件。也可以点击左上角的文件，选择保存项目，后续可以通过加载项目继续操作。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzL773ovMPwvIoxzll6VpsbeBm6gf3aTlc3PQfiaDvX26OaicnV9becjtBQ/640?wx_fmt=png&from=appmsg)
    
-   提醒：可以查看输出的.csv文件，通过插入散点图，看数据是否正常。
    
    ![](https://mmbiz.qpic.cn/mmbiz_jpg/cUYZic48ZLjxoHQlicamAdIict5oORM6rzL9zQ43ia80aIxiaM2F5wx2NeibiaibIrH50M2SBkzjwJUufJQfH6IjQ6cBhA/640?wx_fmt=jpeg)
    

条形图

1）导入图片

![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLbAWQZYk52MmMPATXNl4H84GOOdQInLE44LXwz5Pzm0IWRicbhA2XxlQ/640?wx_fmt=png&from=appmsg)

2）标定坐标轴

-   选择二维条形图，条形图只需要选择两个点（P1，P2），但注意轴的方向。
    

3）选择想要的数据并保存

-   通过“手动提取”，柱状图的最高点增加点，并可以编辑标签。
    
-   通过设置位数改为0，Format后下载.csv文件。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLBKeH2ibOI5peDnjDASN9EWLJe0jJyMCBQyvlERQFazYeepE7Xs2UgsA/640?wx_fmt=png&from=appmsg)
    

坐标地形图

1）导入图片

![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLzFePYsfzwKd1AVpclWJhicfcAzILzGnkIohojoJMX6CVXb3DUCznjwA/640?wx_fmt=png&from=appmsg)

（参考文献：赵浩翔, 冼晓青, 郭建洋, 张桂芬, 王瑞, 刘万学, and 万方浩. (2022). 基于优化的MaxEnt模型预测海灰翅夜蛾潜在地理分布区. 植物保护, 48(06):16-22+48. https://doi.org/10.16688/j.zwbh.2022337）

2）标定坐标轴

-   若想要具体点的坐标，则选取二维（X-Y）图；若想要点与点之间的距离，则选取地图（含比例尺）。
    
-   这里想举例用来筛选坐标点，所以选取的坐标轴是二维（X-Y）图，个人认为这是该软件最主要的用途，若想要两地距离，image J也可以做。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzL6MdfSM00x7OuO5P6QwN3ewCnjMenu1iaVnXEA9njA6PqJSeLJEswe9Q/640?wx_fmt=png&from=appmsg)
    

3）选择想要的数据

-   在此图中，通过选取红色点“自动提取”，对于有精度选择的情况，可通过“手动提取”：修改点的位置和删去左下角的图标。
    
    ![](https://mmbiz.qpic.cn/mmbiz_png/cUYZic48ZLjxoHQlicamAdIict5oORM6rzLPkvxYVnSibMf4TvkOCu6kZU5UibFhgVzPOOGOKvu0w8COf0PibphNrKmA/640?wx_fmt=png&from=appmsg)
    
    4）查看和保存数据（与二维XY图一样）
    

结语

-   该网站还在持续优化中，目前仍有用起来不便之处：
    
    1）数据集名称修改后无法正常显示，解决办法只能下载数据后再改；2）无法同时操作两张图片，解决办法是双开网页，以及保存项目。
    
-   推送得来终觉浅，绝知此事要躬行。
    
-   希望本次分享对你有帮助。