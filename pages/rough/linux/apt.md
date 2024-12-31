# apt

```bash
apt -h
```

```bash
man apt
```

## 配置文件

### APT 配置文件

- `/etc/apt/apt.conf`：主配置文件
- `/etc/apt/apt.conf.d/`：配置片段目录。

### 软件源列表

- `/etc/apt/sources.list`：主要的仓库列表。
- `/etc/apt/sources.list.d/`：额外的仓库列表。

## 更新

### upgrade

```bash
sudo apt upgrade
```

- 升级已安装的软件包
- 但不会升级已安装的依赖包

### full upgrade

```bash
sudo apt full-upgrade
```

- 升级已安装的软件包
- 允许删除已安装的依赖包
- 大版本升级时使用

### update

```bash
sudo apt update
```

- 从配置的仓库更新软件包列表
- 不会升级已安装的软件包，只更新索引信息

## 安装

### install

```bash
sudo apt install <package-name>
```

- 从配置的仓库安装软件包及其依赖项

```bash
sudo apt install -y <package-name>
```

- 自动确认安装过程

```bash
sudo apt install --only-upgrade <package-name>
```

- 只升级已安装的软件包，不会安装新的依赖项

## 移除

### remove

```bash
sudo apt remove <package-name>
```

- 删除已安装的软件包
- 保留其配置
- 若需要完全删除，见 [purge](#purge)

### purge

```bash
sudo apt purge <package-name>
```

- 删除已安装的软件包
- 不保留其配置

### autoremove

```bash
sudo apt autoremove
```

- 删除不再需要的依赖

### clean

```bash
sudo apt clean
```

- 清除已下载的 `.deb` 文件缓存

### autoclean

```bash
sudo apt autoclean
```

- 清除旧版本的 `.deb` 文件
- 保留最新版本

## 信息

### search

```bash
sudo apt search <package-name>
```

- 在配置的仓库中搜索软件包

### list

```bash
sudo apt list --installed
```

- 列出已安装的软件包

### show

```bash
sudo apt show <package-name>
```

## 修复依赖关系

```bash
sudo apt --fix-broken install
```

- 修复损坏的依赖关系
