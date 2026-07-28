# ComfyUI教程：实时肖像和面部表情


> 原文地址: [https://mp.weixin.qq.com/s/Y8977H4a-9lkJ1Y6ANMPTQ](https://mp.weixin.qq.com/s/Y8977H4a-9lkJ1Y6ANMPTQ)

我们将探索 ComfyUI 中的实时肖像工具，将静态肖像图像转换为具有动态面部表情的动画视觉效果。了解如何安装和配置自定义节点、创建工作流程以及微调动画以获得逼真或风格化的效果。您将学到什么：

-   安装和设置高级实时肖像和视频辅助节点。
    
-   创建和连接节点，如加载图像、表达式编辑器和视频组合。
    
-   调整面部设置（眨眼、嘴部动作、俯仰、偏航等）。
    
-   使用预先录制的视频或手动运动设置来为静止图像制作动画。
    
-   管理诸如裁剪和分辨率之类的常见问题以获得更好的结果。
    
-   结合表情和构建工作流程来制作多种动作的动画。
    

\--- 转到管理器、自定义节点管理器 搜索高级实时肖像 安装 ComfyUI-AdvancedLivePortrait 搜索视频助手 安装 ComfyUI-VideoHelperSuite 重新启动 ComfyUI 有关节点的更多信息https://github.com/PowerHouseMan/ComfyUI-AdvancedLivePortrait对于示例视频，他们在这里有 driving\_video.mp4 https://github.com/PowerHouseMan/ComfyUI-AdvancedLivePortrait/tree/main/sample单击它，然后单击下载按钮（下载原始文件） 上传静态肖像：选择一张清晰、光线充足的脸部照片，直视相机。中性表情最适合更流畅的动画。上传参考视频：选择一个显示您想要转移到肖像的表情和动作的视频。为了获得最佳效果，请确保视频中的脸部清晰可见且光线充足。您可以在命令中输入 \[运动索引\] = \[更改帧长度\] : \[等待下一个运动的帧长度\] 示例：1 = 2:20