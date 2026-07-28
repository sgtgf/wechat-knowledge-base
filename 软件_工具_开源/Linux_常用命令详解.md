> **适用系统**：主流 Linux 发行版（Ubuntu/Debian, CentOS/RHEL, Fedora, Arch）  
> **Shell 环境**：Bash（默认）  
> **核心目标**：掌握最常用、最关键的 Linux 命令，提升系统操作与运维能力

* * *

# 一、命令基础概念

### 1\. 命令格式

```
命令名 [选项] [参数]
```

-   • **命令名**：如 `ls`, `cp`, `grep`
    
-   • **选项**：以 `-` 或 `--` 开头，控制命令行为（如 `-l`, `--long`）
    
-   • **参数**：命令操作的对象（文件、目录、文本等）
    

### 2\. 获取帮助

```
man ls           # 查看 ls 命令手册（最权威）ls --help        # 查看简短帮助help cd          # Bash 内置命令帮助
```

* * *

# 二、文件与目录操作

### 1. `ls` - 列出目录内容

```
ls                # 列出当前目录文件ls -l             # 详细列表（权限、大小、时间）ls -a             # 显示隐藏文件（以 . 开头）ls -lh            # 人类可读大小（K, M, G）ls -R             # 递归列出子目录ls /etc           # 列出指定目录
```

### 2. `cd` - 切换目录

```
cd /home          # 切换到 /homecd ..             # 返回上一级目录cd ~              # 返回用户主目录cd -              # 返回上一个工作目录pwd               # 显示当前路径
```

### 3. `pwd` - 显示当前工作目录

```
pwd# 输出：/home/user
```

### 4. `mkdir` - 创建目录

```
mkdir mydir                  # 创建单个目录mkdir -p dir1/dir2/dir3      # 递归创建多级目录mkdir -m 755 secure_dir      # 创建时设置权限
```

### 5. `rmdir` - 删除空目录

```
rmdir empty_dirrmdir dir1 dir2              # 删除多个空目录
```

### 6. `rm` - 删除文件或目录 ⚠️ **危险！**

```
rm file.txt                  # 删除文件rm -r dir/                   # 递归删除目录及内容rm -f file.txt               # 强制删除（不提示）rm -rf /tmp/old/             # 组合使用（极其危险，慎用！）
```

### 7. `cp` - 复制文件/目录

```
cp file1.txt file2.txt       # 复制文件cp -r dir1/ dir2/            # 递归复制目录cp -i file.txt /backup/      # 交互式（覆盖前提示）cp -a dir1/ dir2/            # 归档模式（保留权限、时间等）
```

### 8. `mv` - 移动/重命名

```
mv old.txt new.txt           # 重命名文件mv file.txt /home/user/      # 移动文件mv dir1/ dir2/               # 移动/重命名目录
```

### 9. `touch` - 创建空文件或更新时间戳

```
touch newfile.txt            # 创建空文件touch -d "2025-01-01" file   # 修改文件时间戳
```

### 10. `find` - 查找文件

```
find /home -name "*.log"           # 按名称查找find . -type f -size +100M         # 查找大于 100M 的文件find /var/log -mtime -7            # 查找 7 天内修改的文件find . -name "*.tmp" -delete       # 查找并删除
```

* * *

# 三、文件查看与编辑

### 1. `cat` - 连接并显示文件

```
cat file.txt                   # 显示文件内容cat file1.txt file2.txt        # 合并显示多个文件cat > new.txt                  # 创建文件（Ctrl+D 结束）
```

### 2. `less` / `more` - 分页查看

```
less longfile.log              # 分页查看（推荐，功能更强）# 操作：空格=下一页，b=上一页，/pattern=搜索，q=退出
```

### 3. `head` / `tail` - 查看文件头/尾

```
head file.txt                  # 显示前 10 行head -n 20 file.txt            # 显示前 20 行tail file.log                  # 显示最后 10 行tail -f file.log               # 实时追踪日志（监控！）tail -n 50 file.log            # 显示最后 50 行
```

### 4. `grep` - 文本搜索 ✅ **神器！**

```
grep "error" logfile.txt       # 搜索包含 "error" 的行grep -i "Error" logfile.txt    # 忽略大小写grep -r "TODO" /home/user/     # 递归搜索目录grep -v "success" log.txt      # 反向搜索（不包含）grep -n "port" config.conf     # 显示行号
```

### 5. `wc` - 统计字数

```
wc file.txt                    # 行数、单词数、字符数wc -l file.txt                 # 只统计行数wc -w file.txt                 # 只统计单词数
```

### 6. `diff` - 比较文件差异

```
diff file1.txt file2.txtdiff -u file1.txt file2.txt    # 显示统一格式差异（常用于 patch）
```

### 7\. 文本编辑器

```
nano file.txt                  # 简单易用的编辑器（推荐新手）vim file.txt                   # 强大但学习曲线陡峭
```

* * *

# 四、系统信息与进程管理

### 1. `uname` - 显示系统信息

```
uname -a                       # 显示所有信息uname -r                       # 内核版本uname -m                       # 机器架构（x86_64, aarch64）
```

### 2. `df` - 磁盘空间

```
df -h                          # 人类可读格式（G, M）df -h /home                    # 查看指定挂载点
```

### 3. `du` - 目录空间使用

```
du -sh /home                   # 显示目录总大小du -h --max-depth=1 /var       # 显示 /var 下一级目录大小
```

### 4. `free` - 内存使用

```
free -h                        # 人类可读格式
```

### 5. `ps` - 查看进程

```
ps                             # 当前 shell 的进程ps aux                         # 所有进程（BSD 风格）ps -ef                         # 所有进程（标准风格）ps aux | grep nginx            # 查找 nginx 进程
```

### 6. `top` / `htop` - 实时进程监控

```
top                            # 动态查看进程（q 退出）htop                           # 更美观的 top（需安装）
```

### 7. `kill` / `killall` - 终止进程

```
kill 1234                      # 终止 PID 为 1234 的进程kill -9 1234                   # 强制终止（SIGKILL）killall nginx                  # 终止所有名为 nginx 的进程pkill firefox                  # 按名称终止进程
```

### 8. `systemctl` - 服务管理（Systemd）

```
sudo systemctl start nginx          # 启动服务sudo systemctl stop nginx           # 停止服务sudo systemctl restart nginx        # 重启服务sudo systemctl status nginx         # 查看服务状态sudo systemctl enable nginx         # 开机自启sudo systemctl disable nginx        # 取消开机自启sudo systemctl list-units --type=service  # 列出所有服务sudo systemctl list-unit-files --type=service # 列出所有单元文件及其状态
```

* * *

# 五、网络操作

### 1. `ip` - 网络配置（替代 `ifconfig`）

```
ip addr show                   # 显示 IP 地址（简写 `ip a`）ip route show                  # 显示路由表（简写 `ip r`）ip link set eth0 up            # 启用网卡
```

### 2. `ping` - 测试网络连通性

```
ping google.comping -c 4 8.8.8.8             # 发送 4 次后停止
```

### 3. `ss` - 查看网络连接（替代 `netstat`）

```
ss -tuln                       # 显示所有监听端口ss -tulnp                      # 显示端口和进程
```

### 4. `curl` / `wget` - 下载文件

```
curl -O https://example.com/file.zipcurl http://localhost:8080     # 请求网页wget https://example.com/file.zip
```

### 5. `scp` - 安全拷贝（跨主机）

```
scp file.txt user@192.168.1.100:/home/user/scp user@remote:/path/file.txt ./
```

### 6. `ssh` - 安全登录

```
ssh user@hostnamessh -p 2222 user@server        # 指定端口
```

* * *

# 六、权限与用户管理

### 1. `chmod` - 修改文件权限

```
chmod 755 script.sh            # rwxr-xr-xchmod +x script.sh             # 添加执行权限chmod -R 755 mydir/            # 递归修改
```

**权限数字**：

-   • `4` = read (r)
    
-   • `2` = write (w)
    
-   • `1` = execute (x)
    
-   • `7` = 4+2+1 = rwx
    

### 2. `chown` - 修改文件所有者

```
chown user:group file.txtchown -R user:group dir/       # 递归修改
```

### 3. `passwd` - 修改密码

```
passwd                         # 修改当前用户密码
```

### 4. `sudo` - 以超级用户身份执行

```
sudo apt update                # 临时获取 root 权限sudo -i                        # 切换到 root 用户
```

### 5. `useradd` / `userdel` - 管理用户

```
sudo useradd -m newuser        # 创建用户并创建家目录sudo passwd newuser            # 设置密码sudo userdel -r olduser        # 删除用户及家目录
```

* * *

# 七、压缩与归档

### 1. `tar` - 打包/解包

```
tar -cvf archive.tar /path     # 打包tar -xvf archive.tar           # 解包tar -czvf backup.tar.gz /path  # 打包并 gzip 压缩tar -xzvf backup.tar.gz        # 解压 gzip 包tar -cjvf backup.tar.bz2 /path # 打包并 bzip2 压缩
```

**选项记忆**：

-   • `c` = create 创建一个新的归档文件。
    
-   • `x` = extract 从归档文件中提取文件。
    
-   • `v` = verbose 显示详细的处理信息，通常用于调试或查看进度。
    
-   • `f` = file 指定归档文件的名称。
    
-   • `z` = gzip 使用 gzip 压缩或解压缩归档文件。
    
-   • `j` = bzip2 使用 bzip2 压缩或解压缩归档文件。
    

### 2. `gzip` / `gunzip`

```
gzip file.txt                  # 压缩为 file.txt.gzgunzip file.txt.gz             # 解压
```

* * *

# 八、管道与重定向

### 1\. 管道 `|`

将前一个命令的输出作为后一个命令的输入。

```
ps aux | grep nginx            # 查找 nginx 进程cat /etc/passwd | wc -l        # 统计用户数ls -l | less                   # 分页查看长列表
```

### 2\. 重定向

```
command > file.txt             # 覆盖写入command >> file.txt            # 追加写入command < input.txt            # 从文件读取输入command 2> error.log           # 将错误输出重定向command &> all.log             # 将 stdout 和 stderr 都重定向
```

* * *

# 九、实用技巧与组合

### 1\. 命令历史

```
history                        # 查看历史命令!5                             # 执行第 5 条历史命令!!                             # 重新执行上一条命令
```

### 2\. 别名 `alias`

```
alias ll='ls -alF'alias ..='cd ..'# 永久生效：写入 ~/.bashrc
```

### 3\. 查找命令位置

```
which ls                       # 显示命令路径whereis ls                     # 显示命令及其手册位置
```

### 4\. 组合示例

```
# 查找 /var/log 中最近 1 天的 .log 文件，并统计包含 "error" 的行数find /var/log -name "*.log" -mtime -1 | xargs grep -c "error"# 查看占用 80 端口的进程ss -tulnp | grep :80# 监控系统负载最高的进程top -o %CPU
```

* * *

# 十、结语

掌握这些 Linux 命令，你就拥有了强大的系统操作能力。记住：

> ✅ **核心原则**：
> 
> 1.  1. **先看 `man`，再动手**
>     
> 2.  2. **`rm -rf` 是核武器，慎用！**
>     
> 3.  3. **善用 `|` 管道组合命令**
>     
> 4.  4. **`grep` + `find` + `sed` + `awk` 是文本处理四大金刚**
>     

> 🔗 推荐学习：
> 
> -   • https://linuxjourney.com（免费交互式教程）
>     
> -   • 《鸟哥的 Linux 私房菜》
>     

持续练习，你将成为 Linux 高手！