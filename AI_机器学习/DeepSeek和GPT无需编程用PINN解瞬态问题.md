**【科普开篇】**

  **什么是物理信息神经网络（PINN）？**

**物理信息神经网络**（Physics-Informed Neural Networks, PINN）是一种将物理定律与深度学习结合的前沿技术。与传统数值方法不同，PINN通过在神经网络的**损失函数**中**嵌入微分方程**本身（如牛顿定律、热传导方程等），让模型在训练时同时满足数据规律和物理约束。

      例如，求解弹簧振子运动方程时，PINN不仅会利用位移、速度的**观测数据**，还会强制让神经网络的输出满足方程 mx′′+cx′+kx=0的物理关系。这种“**物理+数据**”双驱动的特性，使其在**缺少数据**或**复杂边界条件**的场景中（如流体力学、材料建模）表现卓越。

  

  

查看历史推送了解更多细节

  


**一句话让大模型生成PINN代码！**

  

**DeepSeek**

Prompt

      请使用pytorch生成利用PINN求解一维热传导方程的代码，一端为Dirichlet 边界条件，一端为Neumann 边界条件，且包含可视化结果。


  

**深度思考结果：**

 好的，我现在需要帮用户生成一个使用PyTorch实现的PINN求解一维热传导方程的代码，同时包含**Dirichlet和Neumann边界**条件，还要有可视化结果。首先，我得先回顾一下PINN的基本原理和热传导方程的设置。

      用户的需求很明确，但可能需要考虑一些细节。比如，一维热传导方程通常形式是**∂u/∂t = α ∂²u/∂x²**，其中α是热扩散系数。边界条件的话，一端是Dirichlet，比如u(0,t)=固定值，另一端是Neumann，比如∂u/∂x(L,t)=0，也就是绝热条件。初始条件可能需要用户指定，不过如果没有的话，可能需要假设一个简单的分布，比如高斯分布或者正弦函数。

      接下来，我需要用**PyTorch**搭建神经网络。PINN的关键在于损失函数的设计，包括PDE的残差、边界条件和初始条件的损失。对于Dirichlet边界，可以直接在边界点计算输出与目标值的MSE。Neumann边界则需要计算梯度，这里需要用到**autograd**来求导数。需要注意的是，计算二阶导数时，可能需要先计算一阶导数，再求导一次。

      然后是数据点的采样。通常PINN会在域内随机采样一些点，同时在边界和初始条件的时间点采样。这里可能需要生成内部点、边界点和初始点。内部点包括空间和时间的随机采样，边界点则分别在x=0和x=L处采样不同时间点，初始点则是t=0时的所有空间点。

      可视化部分需要绘制预测解和真实解（如果有的话）的对比，或者在不同时间步的温度分布。不过用户可能只需要预测结果的可视化，比如热图或者时间切片图。

      现在需要考虑代码的结构。首先定义神经网络，使用全连接层。然后定义损失函数，包括PDE残差、边界条件和初始条件。训练循环部分，使用优化器来最小化总损失。最后用matplotlib绘图。

      可能的难点在于正确计算Neumann边界条件的梯度。在PyTorch中，需要设置requires\_grad=True来跟踪梯度，然后使用autograd.grad来计算∂u/∂x。同时，二阶导数的计算可能需要多次求导，需要注意输入变量的设置，避免出错。

      另一个问题是训练的效率。可能需要合理选择采样点的数量，以及训练的次数，比如epochs的设置。此外，激活函数的选择也很重要，通常使用tanh可能更适合，因为它的输出范围适合物理问题。

      测试时，可能需要验证结果是否符合物理直觉。比如，Dirichlet端固定温度，Neumann端绝热，温度梯度应该趋近于零，温度分布随时间逐渐趋于稳定。

  

**现在开始逐步构建代码：**

1\. 导入必要的库：torch, numpy, matplotlib。

2\. 定义神经网络结构，比如3个隐藏层，每层20个神经元，使用tanh激活。

3\. 定义训练参数：epochs、优化器（Adam）、学习率。

4\. 生成训练数据：内部点、边界点（Dirichlet和Neumann）、初始点。

5\. 定义损失函数，计算各部分的MSE。

6\. 训练循环，反向传播优化。

7\. 可视化结果，绘制温度分布随时间的演变。

  

**需要注意的点：**

\- 在计算PDE残差时，需要计算∂u/∂t和∂²u/∂x²，这需要正确使用autograd。

\- Neumann条件的计算在x=L处的∂u/∂x=0，所以需要在这个点采样，并计算梯度与零的MSE。

\- 初始条件可能需要设定一个初始温度分布，比如u(x,0)=sin(πx/L)之类的函数。

\- 确保所有输入数据转换为torch张量，并设置正确的requires\_grad属性。

  

**可能的错误点：**

\- 计算二阶导数时，输入的变量是否正确。例如，计算对x的二阶导数，可能需要先对x求一阶导，再求导。

\- 梯度清零的步骤是否在优化器步骤之前。

\- 数据点的采样是否覆盖了整个域和边界。

  

      现在，按照这些步骤编写代码，并测试是否能够运行，损失是否下降，结果是否合理。可视化部分可能需要将预测结果在多个时间步上绘制出来，比如选取**t=0.1, 0.2, 0.5**等时刻的温度分布。

      最后，检查代码是否符合用户的要求，是否有遗漏的部分，比如是否两端边界条件正确应用，是否包含可视化，以及代码是否有注释说明关键步骤。

**代码生成结果：**

`import torch   import torch.nn as nn   import numpy as np   import matplotlib.pyplot as plt      # 检测GPU可用性   device = torch.device('cuda'if torch.cuda.is_available() else'cpu')   print(f"Using device: {device}")      # 定义神经网络结构（自动部署到GPU）   class PINN(nn.Module):       def __init__(self):           super(PINN, self).__init__()           self.fc = nn.Sequential(               nn.Linear(2, 20),  # 输入(x, t)               nn.Tanh(),               nn.Linear(20, 20),               nn.Tanh(),               nn.Linear(20, 20),               nn.Tanh(),               nn.Linear(20, 1)   # 输出温度u           )              def forward(self, x, t):           inputs = torch.cat([x, t], dim=1)           return self.fc(inputs)      # 定义热传导参数   L = 1.0       # 空间域长度   T = 0.5       # 时间域长度   alpha = 0.01# 热扩散系数      # 生成训练数据（直接在GPU创建张量）   def generate_data(n_samples=1000):       # 内部点       x_inner = torch.rand(n_samples, 1, device=device) * L       t_inner = torch.rand(n_samples, 1, device=device) * T       # Dirichlet边界（x=0）       x_dirichlet = torch.zeros(n_samples//10, 1, device=device)       t_dirichlet = torch.rand(n_samples//10, 1, device=device) * T       # Neumann边界（x=L）       x_neumann = torch.full((n_samples//10, 1), L, device=device)       t_neumann = torch.rand(n_samples//10, 1, device=device) * T       # 初始条件（t=0）       x_initial = torch.rand(n_samples//10, 1, device=device) * L       t_initial = torch.zeros(n_samples//10, 1, device=device)              return (x_inner, t_inner), (x_dirichlet, t_dirichlet), (x_neumann, t_neumann), (x_initial, t_initial)      # 实例化模型并部署到GPU   model = PINN().to(device)   optimizer = torch.optim.Adam(model.parameters(), lr=0.001)      # 训练循环   for epoch in range(10000):       # 生成新数据（已在GPU）       (x_inner, t_inner), (x_dir, t_dir), (x_neu, t_neu), (x_ini, t_ini) = generate_data()              # 计算各部分的损失       losses = []              # PDE残差损失       x_pde = x_inner.requires_grad_(True)       t_pde = t_inner.requires_grad_(True)       u = model(x_pde, t_pde)              # 自动微分计算梯度（自动GPU加速）       u_t = torch.autograd.grad(u, t_pde, grad_outputs=torch.ones_like(u),                                create_graph=True)[0]       u_x = torch.autograd.grad(u, x_pde, grad_outputs=torch.ones_like(u),                                create_graph=True)[0]       u_xx = torch.autograd.grad(u_x, x_pde, grad_outputs=torch.ones_like(u_x),                                 create_graph=True)[0]              pde_res = u_t - alpha * u_xx       loss_pde = torch.mean(pde_res**2)              # Dirichlet边界损失       u_dir = model(x_dir, t_dir)       loss_dir = torch.mean(u_dir**2)              # Neumann边界损失       x_neu.requires_grad_(True)       t_neu.requires_grad_(True)       u_neu = model(x_neu, t_neu)       du_dx = torch.autograd.grad(u_neu, x_neu, grad_outputs=torch.ones_like(u_neu),                                 create_graph=True)[0]       loss_neu = torch.mean(du_dx**2)              # 初始条件损失       u_ini = model(x_ini, t_ini)       u_true = torch.sin(np.pi * x_ini / L)  # 自动继承设备       loss_ini = torch.mean((u_ini - u_true)**2)              # 总损失       total_loss = loss_pde + 10*loss_dir + 10*loss_neu + 10*loss_ini              # 反向传播       optimizer.zero_grad()       total_loss.backward()       optimizer.step()              if epoch % 1000 == 0:           print(f'Epoch {epoch}, Total Loss: {total_loss.item():.4e}')      # 可视化结果（需要转回CPU）   x_test = torch.linspace(0, L, 100, device=device).view(-1,1)   t_test = torch.linspace(0, T, 5, device=device).view(-1,1)      plt.figure(figsize=(10,6))   for t in t_test:       t_val = t.item()       with torch.no_grad():           u_pred = model(x_test, t.repeat(100,1))              plt.plot(x_test.cpu().numpy(), u_pred.cpu().numpy(),                 label=f't={t_val:.2f}')      plt.title('Temperature Distribution Evolution')   plt.xlabel('Position x')   plt.ylabel('Temperature u(x,t)')   plt.legend()   plt.grid(True)   plt.show()      # 误差分析可视化   xx, tt = torch.meshgrid(torch.linspace(0,L,50, device=device),                           torch.linspace(0,T,50, device=device))   u_pred = model(xx.reshape(-1,1), tt.reshape(-1,1)).reshape(50,50)      plt.figure(figsize=(10,6))   plt.contourf(tt.cpu().numpy(), xx.cpu().numpy(), u_pred.cpu().detach().numpy(),                levels=50, cmap='jet')   plt.colorbar(label='Temperature')   plt.title('PINN Solution Contour')   plt.xlabel('Time')   plt.ylabel('Position')   plt.show()`

**可视化结果：**

**1\. Loss发展趋势**


  

**2\. 热传导计算结果**


  


  

  

除此之外，在DeepSeek的回答中还贴心地提供了撰写代码时一些常见问题的解决方案，如下：


  

  

**Chatgpt-4o**

  

Prompt

      请使用pytorch生成利用PINN求解一维热传导方程的代码，一端为Dirichlet 边界条件，一端为Neumann 边界条件，且包含可视化结果。

  

**思考结果：**


**代码生成结果：**

`import torch   import torch.nn as nn   import numpy as np   import matplotlib.pyplot as plt      # 检查 GPU 是否可用   device = torch.device("cuda"if torch.cuda.is_available() else"cpu")   print(f"Using device: {device}")         # 神经网络模型   class PINN(nn.Module):       def __init__(self):           super(PINN, self).__init__()           self.net = nn.Sequential(               nn.Linear(2, 64),               nn.Tanh(),               nn.Linear(64, 64),               nn.Tanh(),               nn.Linear(64, 64),               nn.Tanh(),               nn.Linear(64, 1)           )          def forward(self, x, t):           inputs = torch.cat((x, t), dim=1)           return self.net(inputs)         # 热传导方程的物理损失   def physics_loss(model, x, t, alpha):       x.requires_grad_(True)       t.requires_grad_(True)          u = model(x, t)       u_x = torch.autograd.grad(u, x, grad_outputs=torch.ones_like(u), retain_graph=True, create_graph=True)[0]       u_xx = torch.autograd.grad(u_x, x, grad_outputs=torch.ones_like(u_x), retain_graph=True, create_graph=True)[0]       u_t = torch.autograd.grad(u, t, grad_outputs=torch.ones_like(u), retain_graph=True, create_graph=True)[0]          # 热传导方程: u_t = alpha * u_xx       return torch.mean((u_t - alpha * u_xx) ** 2)         # 边界条件损失   def boundary_loss(model, x_left, x_right, t):       # Dirichlet: u(0, t) = 0       loss_left = torch.mean(model(x_left, t) ** 2)          # Neumann: u_x(L, t) = 0       x_right.requires_grad_(True)       u_right = model(x_right, t)       u_x_right = \       torch.autograd.grad(u_right, x_right, grad_outputs=torch.ones_like(u_right), retain_graph=True, create_graph=True)[           0]       loss_right = torch.mean(u_x_right ** 2)          return loss_left + loss_right         # 初始条件损失   def initial_loss(model, x, t_init, u_init):       u_pred = model(x, t_init)       return torch.mean((u_pred - u_init) ** 2)         # 训练 PINN   def train_pinn(model, optimizer, x, t, x_left, x_right, t_init, u_init, alpha, epochs=10000):       for epoch in range(epochs):           optimizer.zero_grad()              # 计算损失           p_loss = physics_loss(model, x, t, alpha)           b_loss = boundary_loss(model, x_left, x_right, t)           i_loss = initial_loss(model, x, t_init, u_init)           loss = p_loss + b_loss + i_loss              # 反向传播和优化           loss.backward()           optimizer.step()              if epoch % 1000 == 0:               print(                   f"Epoch {epoch}, Loss: {loss.item():.6f}, Physics Loss: {p_loss.item():.6f}, Boundary Loss: {b_loss.item():.6f}, Initial Loss: {i_loss.item():.6f}")         # 可视化结果   def plot_results(model, x, t, alpha):       model.eval()       x = x.cpu().detach().numpy()       t = t.cpu().detach().numpy()       X, T = np.meshgrid(x, t)          u_pred = np.zeros_like(X)       for i in range(len(t)):           x_tensor = torch.tensor(x, dtype=torch.float32, device=device).reshape(-1, 1)           t_tensor = torch.tensor(np.full_like(x, t[i]), dtype=torch.float32, device=device).reshape(-1, 1)           u_pred[i, :] = model(x_tensor, t_tensor).cpu().detach().numpy().flatten()          plt.figure(figsize=(8, 6))       plt.contourf(X, T, u_pred, levels=50, cmap='viridis')       plt.colorbar(label='u(x, t)')       plt.xlabel('x')       plt.ylabel('t')       plt.title('Temperature Distribution u(x, t)')       plt.show()         # 设置参数   L = 1.0# 空间长度   alpha = 0.01# 热扩散系数   x = torch.linspace(0, L, 100, device=device).reshape(-1, 1)   t = torch.linspace(0, 1, 100, device=device).reshape(-1, 1)   x_left = torch.zeros((100, 1), device=device)  # Dirichlet 边界   x_right = torch.full((100, 1), L, device=device)  # Neumann 边界   t_init = torch.zeros_like(x, device=device)  # 初始时间 t=0   u_init = torch.sin(np.pi * x.cpu()).to(device)  # 初始条件 u(x, 0) = sin(pi * x)      # 初始化模型和优化器   model = PINN().to(device)   optimizer = torch.optim.Adam(model.parameters(), lr=0.001)      # 训练模型   train_pinn(model, optimizer, x, t, x_left, x_right, t_init, u_init, alpha, epochs=10000)      # 可视化结果   plot_results(model, x.cpu().flatten(), t.cpu().flatten(), alpha)`

**可视化结果：**

**1\. Loss发展趋势**


  

**2\. 热传导计算结果**  


  

**结语**

       在使用相同的Prompt，无其他任何调整的情况下，**DeepSeek**和**Chatgpt-4o**都能一次性生成用PINN解决一维热传导问题的代码，且无任何bug。

  

      但是**DeepSeek**的深度思考结果提供了非常详细且完整的问题分析与建模的过程，并且可视化的结果也比**Chatgpt-4o**提供的更加细致与美观。

  

      下次小编将尝试对比这两个大模型利用PINN求解更复杂的偏微分方程的功能。

  

关注公众号了解更多资讯：

**查看历史推送了解更多细节**

**[求解正向/逆向偏微分方程的强大武器--PINN(含基础算例和代码复现)](https://mp.weixin.qq.com/s?__biz=Mzg3MTczOTkxNg==&mid=2247484726&idx=1&sn=eeb99d268124829cefc9a301d28c723b&scene=21#wechat_redirect)**

**[Nature综述 | 物理信息神经网络 (PINN)【5千引用】](https://mp.weixin.qq.com/s?__biz=Mzg3MTczOTkxNg==&mid=2247484683&idx=1&sn=da9179cb6009e525da3d99695d9d20b9&scene=21#wechat_redirect)**