# windows下GetMessage和PeekMessage函数区别


> 原文地址: [https://mp.weixin.qq.com/s/hHJ1PcwxKTbd1clVtE9OLg](https://mp.weixin.qq.com/s/hHJ1PcwxKTbd1clVtE9OLg)

![](https://mmbiz.qpic.cn/mmbiz_png/jlXjovro0trSIaNZK3Nibfxf94JCuJImDLREy6b7KhaaaHLJKYzIrU6bADricF55eq4AOlQEfPSNXC6qomk2xlKg/640?wx_fmt=png&from=appmsg)

  

GetMessage 和 PeekMessage 是 Windows API 中用于处理消息队列的函数，主要用于应用程序的消息循环。它们的主要区别在于处理消息队列为空时的行为、返回值以及可选的移除选项。下面详细说明：

### 主要区别：

-   阻塞行为：
    

-   GetMessage：如果消息队列为空，它会阻塞当前线程（即挂起等待），直到有新消息进入队列才会返回。这适合标准的消息驱动应用程序，确保线程在无消息时不消耗 CPU。
    
-   PeekMessage：如果消息队列为空，它会立即返回，而不会阻塞线程。这允许应用程序在无消息时执行其他任务，如游戏中的实时渲染或动画。
    
      
    

-   **消息移除：**

-   GetMessage：总是从队列中移除检索到的消息。
    
-   PeekMessage：默认移除消息（使用 PM\_REMOVE 标志），但可以通过 PM\_NOREMOVE 标志选择不移除消息，让消息留在队列中供后续处理。
    
      
    

-   **返回值：**

-   GetMessage：如果检索到的消息不是 WM\_QUIT，则返回 TRUE；如果是 WM\_QUIT，则返回 FALSE（通常用于退出消息循环）。如果发生错误，返回 -1。
    
-   PeekMessage：如果成功检索到消息，返回 TRUE；如果队列为空，返回 FALSE。
    
      
    

-   使用场景：
    

-   GetMessage 常用于标准的阻塞式消息循环（如 WinMain 中的 while 循环），确保高效的资源使用。
    
-   PeekMessage 常用于需要非阻塞处理的场景，如需要周期性更新 UI 或处理实时事件的应用程序。
    
      
    

### 示例代码（伪代码）：

标准 GetMessage 循环：

```
while (GetMessage(&msg, NULL, 0, 0)) {TranslateMessage(&msg);DispatchMessage(&msg);}
```

  

非阻塞 PeekMessage 循环：

```
while (running) {if (PeekMessage(&msg, NULL, 0, 0, PM_REMOVE)) {if (msg.message == WM_QUIT) break;TranslateMessage(&msg);DispatchMessage(&msg);    } else {// 执行其他任务，如渲染或计算    }}
```

  

### 消息过滤参数详解

在 Windows 消息处理中，GetMessage 和 PeekMessage 函数共享类似的消息过滤参数，主要包括 wMsgFilterMin 和 wMsgFilterMax，用于指定要检索的消息 ID 范围。这些参数允许开发者精确控制从消息队列中获取哪些类型的消息（如键盘、鼠标或特定系统消息）。此外，PeekMessage 还有额外的 wRemoveMsg 参数，用于控制是否移除消息。下面基于官方文档进行详细解释。

#### 1\. 共同参数：wMsgFilterMin 和 wMsgFilterMax

这两个参数定义了消息过滤的范围，只检索消息 ID（即 WM\_ 常量）在 \[wMsgFilterMin, wMsgFilterMax\] 范围内的消息（包含边界值）。消息 ID 的低字（low word）用于比较，高字保留给系统使用。

-   wMsgFilterMin (UINT 类型)：
    

-   指定要检索的最低消息值。
    
-   如果设置为特定常量，如 WM\_KEYFIRST (0x0100)，则只考虑键盘消息及以上的消息。
    
-   对于特定消息如 WM\_INPUT（原始输入），可以将它设置为 WM\_INPUT 以隔离该类型消息。
    
-   默认行为：如果 wMsgFilterMin 和 wMsgFilterMax 都为 0，则不应用范围过滤，检索所有可用消息。
    
-   注意：如果 wMsgFilterMin > wMsgFilterMax，函数可能失败或不返回任何消息。
    
      
    

-   wMsgFilterMax (UINT 类型)：
    

-   指定要检索的最高消息值。
    
-   常与 wMsgFilterMin 配对使用，如 WM\_KEYLAST 用于键盘消息的上限，或 WM\_MOUSELAST 用于鼠标消息。
    
-   默认行为：同上，当两者均为 0 时，无过滤。
    
-   示例：设置为 WM\_INPUT 时，可隔离原始输入消息。
    
      
    

**关键注意事项**：

-   这些参数不影响 WM\_QUIT 消息的检索——无论过滤范围如何，WM\_QUIT 总是会被获取，以确保应用程序能正常退出。
    
-   消息检索顺序通常为：发送消息、投递消息、输入消息（如果在过滤范围内）、WM\_PAINT、WM\_TIMER 等。
    
-   使用这些参数可以优先处理特定输入类型，避免处理无关消息，提高效率。
    

#### 2\. PeekMessage 独有参数：wRemoveMsg

PeekMessage 函数除了消息过滤外，还通过 wRemoveMsg 控制消息的移除行为。这使得它更适合非阻塞场景。

-   wRemoveMsg (UINT 类型)：
    

-   PM\_REMOVE：如果找到匹配消息，则移除它（类似于 GetMessage 的行为）。常用于立即处理并消费消息。
    
-   PM\_NOREMOVE：仅检查消息是否存在，但不移除它。消息留在队列中，供后续调用处理。这是 PeekMessage 的典型“窥视”行为。
    
-   控制是否从队列中移除匹配的消息。
    
-   可选值：
    
-   默认行为：无明确默认，但示例中常使用 PM\_NOREMOVE 以实现非阻塞检查。
    
      
    

#### 使用示例

以下是 C/C++ 伪代码示例，展示如何应用这些参数。

1.无过滤，检索所有消息（适用于 GetMessage）：

```
MSG msg;GetMessage(&msg, NULL, 0, 0);  // wMsgFilterMin=0, wMsgFilterMax=0，无范围过滤
```

  

  

**2.过滤键盘消息（适用于两者）：

  

// GetMessage 示例`   GetMessage(&msg, hWnd, WM_KEYFIRST, WM_KEYLAST);  // 只检索键盘相关消息（如按键按下/抬起）      // PeekMessage 示例（移除消息）   if (PeekMessage(&msg, NULL, WM_KEYFIRST, WM_KEYLAST, PM_REMOVE)) {       TranslateMessage(&msg);       DispatchMessage(&msg);   }`

  


**

3.过滤鼠标消息，不移除（仅 PeekMessage）：

if (PeekMessage(&msg, hWnd, WM\_MOUSEFIRST, WM\_MOUSELAST, PM\_NOREMOVE)) {    `// 消息存在但不移除，可用于检查鼠标事件而不立即处理   }`

  

4.隔离特定消息，如 WM\_PAINT（适用于两者）：

GetMessage(&msg, hWnd, WM\_PAINT, WM\_PAINT);  // 只检索 WM\_PAINT 消息`      // PeekMessage 版本，不移除   PeekMessage(&msg, hWnd, WM_PAINT, WM_PAINT, PM_NOREMOVE);`

  

5.隔离 WM\_INPUT 消息（ raw input ）：

GetMessage(&msg, NULL, WM\_INPUT, WM\_INPUT);  // 只检索原始输入消息

  

这些参数在标准消息循环中（如游戏或实时应用）非常有用，能帮助优化性能。

### 常见消息 ID 常量详解

Windows 消息 ID 常量（通常以 WM\_ 开头）是 Windows API 中用于窗口管理和事件处理的标识符，每个常量对应一个唯一的 16 位整数值（十六进制表示）。这些消息通过消息队列发送给窗口过程函数（WindowProc），允许应用程序响应用户输入、系统事件等。以下基于官方文档和相关资源，详解一些最常见的 WM\_ 消息常量，包括其十六进制值和用途描述。我重点选择了在 GUI 编程中频繁出现的消息，并按类别粗略分组（如窗口生命周期、输入事件等）。完整列表可能超过数百个，但这里精选实用性高的。

#### 1\. 窗口生命周期相关消息

这些消息处理窗口的创建、销毁、移动和大小调整等核心事件。

消息常量

十六进制值

描述

WM\_CREATE

0x0001

当窗口被创建时发送（在窗口显示前）。用于初始化窗口资源，如分配内存或设置控件。

WM\_DESTROY

0x0002

当窗口被销毁时发送。用于清理资源，如释放内存或关闭文件句柄。子窗口也会收到此消息。

WM\_MOVE

0x0003

窗口移动后发送。wParam 和 lParam 包含新位置的 x/y 坐标。

WM\_SIZE

0x0005

窗口大小改变后发送。lParam 的低字和高字分别表示新宽度和高度，常用于调整子控件布局。

WM\_CLOSE

0x0010

请求关闭窗口时发送（如用户点击关闭按钮）。可在此消息中确认是否真正关闭，或保存数据。

WM\_QUIT

0x0012

指示线程退出，通常用于结束消息循环。wParam 表示退出代码。

#### 2\. 焦点和激活相关消息

这些消息管理窗口的激活状态和键盘焦点。

消息常量

十六进制值

描述

WM\_ACTIVATE

0x0006

窗口激活或停用时发送。wParam 的低字表示激活状态（WA\_ACTIVE、WA\_INACTIVE 等）。

WM\_SETFOCUS

0x0007

窗口获得键盘焦点时发送。常用于突出显示控件或开始输入处理。

WM\_KILLFOCUS

0x0008

窗口失去键盘焦点时发送。用于验证输入或保存临时数据。

#### 3\. 绘制和显示相关消息

这些消息处理窗口的视觉更新。

消息常量

十六进制值

描述

WM\_PAINT

0x000F

当窗口需要重绘时发送（如窗口被覆盖后露出）。应用程序应在处理函数中调用 BeginPaint/EndPaint 来绘制内容。

WM\_ERASEBKGND

0x0014

需要擦除背景时发送。lParam 是设备上下文 (HDC)，可自定义背景填充。

WM\_SETCURSOR

0x0020

鼠标进入窗口客户端区时发送（未捕获鼠标）。用于动态改变鼠标光标形状。

#### 4\. 键盘输入相关消息

这些消息处理按键事件，常用于游戏或编辑器。

消息常量

十六进制值

描述

WM\_KEYDOWN

0x0100

非系统键按下时发送到焦点窗口。wParam 是虚拟键码 (VK\_)，lParam 包含重复计数和扫描码。

WM\_KEYUP

0x0101

非系统键释放时发送。类似 WM\_KEYDOWN，但表示键抬起。

WM\_CHAR

0x0102

键转换为字符时发送（如 TranslateMessage 处理后）。wParam 是字符的 Unicode 值，常用于文本输入。

#### 5\. 鼠标输入相关消息

这些消息处理鼠标移动和点击事件。

消息常量

十六进制值

描述

WM\_MOUSEMOVE

0x0200

鼠标在客户端区移动时发送。lParam 的低字和高字是 x/y 坐标。

WM\_LBUTTONDOWN

0x0201

左键按下时发送。wParam 表示按键状态 (MK\_CONTROL 等)，lParam 是坐标。

WM\_LBUTTONUP

0x0202

左键释放时发送。常用于拖拽结束或点击处理。

WM\_LBUTTONDBLCLK

0x0203

左键双击时发送。

WM\_RBUTTONDOWN

0x0204

右键按下时发送，常用于上下文菜单。

WM\_MOUSEWHEEL

0x020A

鼠标滚轮滚动时发送。wParam 的高字表示滚轮增量。

#### 6\. 菜单和命令相关消息

这些消息处理用户交互，如菜单选择。

消息常量

十六进制值

描述

WM\_COMMAND

0x0111

用户选择菜单项、控件通知或加速键时发送。wParam 的高字是通知码，低字是控件 ID。

WM\_SYSCOMMAND

0x0112

系统菜单命令或系统任务（如最大化窗口）时发送。wParam 表示命令类型 (SC\_CLOSE 等)。

WM\_MENUSELECT

0x011F

用户选择菜单项时发送，用于更新状态栏或帮助文本。

#### 7\. 其他实用消息

消息常量

十六进制值

描述

WM\_TIMER

0x0113

定时器到期时发送。wParam 是定时器 ID，用于周期性任务如动画。

WM\_NOTIFY

0x004E

控件（如列表视图）发送通知时使用。lParam 指向 NMHDR 结构，包含详细事件信息。

WM\_HSCROLL

0x0114

水平滚动条事件时发送。

WM\_VSCROLL

0x0115

垂直滚动条事件时发送。

WM\_COPYDATA

0x004A

用于进程间数据传输。lParam 指向 COPYDATASTRUCT 结构。

WM\_HELP

0x0053

用户按 F1 或帮助按钮时发送，用于显示上下文帮助。

**注意事项**：

-   消息 ID 的范围：系统消息从 0x0000 到 0x03FF，用户自定义消息从 WM\_USER (0x0400) 开始，应用程序私有消息从 WM\_APP (0x8000) 开始。
    
-   处理消息时，通常在 WindowProc 函数中使用 switch 语句匹配这些常量。
    
-   某些消息有特定参数（wParam 和 lParam），需参考官方文档获取详情。
    
-   如果需要所有消息的完整列表，可参考 Microsoft 的 WinUser.h 头文件或扩展资源。