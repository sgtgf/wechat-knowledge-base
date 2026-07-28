# PPT如何导出清晰的图片


> 原文地址: [https://mp.weixin.qq.com/s/CZqlSh-N1H5GwMDif\_VfWg](https://mp.weixin.qq.com/s/CZqlSh-N1H5GwMDif_VfWg)

PowerPoint 默认导出图片分辨率为 ‌96 dpi‌，通过修改注册表可提升至 ‌300 dpi‌ 或更高，适用于论文、印刷等高要求场景。

  

1.‌ 关闭所有 Office 程序‌。

  

2. 按 Win + R，输入 regedit，回车打开注册表编辑器。

  

3. 根据你的 PowerPoint 版本，导航到对应路径：

-   PowerPoint 2016 / 2019 / Microsoft 365‌：
    

HKEY\_CURRENT\_USER\\Software\\Microsoft\\Office\\16.0\\PowerPoint\\Options

-   ‌PowerPoint 2013‌：
    

HKEY\_CURRENT\_USER\\Software\\Microsoft\\Office\\15.0\\PowerPoint\\Options

-   其他版本依此类推（15.0 对应 2013，14.0 对应 2010 等）  
    
-     
    
    ‌
    

4. 在右侧空白处右键 → ‌新建 → DWORD (32 位) 值‌，命名为 ExportBitmapResolution。

  

5. 双击该值，设置：

‌基数‌：十进制

‌数值数据‌：输入目标 DPI（如 ‌300‌）‌

  

6. 重启 PowerPoint，另存为图片（如 PNG/JPG）即可获得高清输出。