---
order: 2
---

# Docker 安装与环境配置

> 根据实际系统环境，部分步骤可能略有不同，建议参考 Docker 官方文档进行进一步确认。

## 在 Linux 上安装 Docker

在 Linux 上安装 Docker 主要包括以下步骤（以 Ubuntu 为例）：

1. **更新包索引并安装依赖包**
   使用以下命令更新 apt 包索引，并安装必要的依赖包：

   ```bash
   sudo apt-get update
   sudo apt-get install ca-certificates curl gnupg lsb-release
   ```

2. **添加 Docker 的官方 GPG 密钥**
   为了验证下载的软件包，需添加 Docker 官方的 GPG 密钥：

   ```bash
   sudo mkdir -p /etc/apt/keyrings
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
   ```

3. **设置 Docker 仓库**
   将 Docker 仓库添加到 apt 源中：

   ```bash
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

4. **安装 Docker Engine**
   更新包索引后，安装 Docker Engine 及其相关组件：

   ```bash
   sudo apt-get update
   sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
   ```

5. **验证安装**
   运行 hello-world 镜像验证 Docker 是否安装成功：

   ```bash
   sudo docker run hello-world
   ```

## 在 Windows 与 macOS 上安装 Docker

对于 Windows 和 macOS 用户，推荐使用 Docker Desktop，其安装步骤如下：

1. **下载 Docker Desktop**

   - [Get Docker Desktop](https://docs.docker.com/get-started/introduction/get-docker-desktop/)

2. **安装 Docker Desktop**

   根据安装向导的提示完成安装。在安装过程中可能需要：

   - Windows 用户启用 Hyper-V 或配置 WSL 2；
   - macOS 用户确认系统兼容性。

3. **启动与验证**

   启动 Docker Desktop 后，确保 Docker daemon 正常运行。可在终端中执行以下命令验证安装是否成功：

   ```bash
   docker version
   ```

   如果看到客户端与服务器的版本信息，说明 Docker Desktop 安装成功。

## 环境配置与常见问题

- **Docker Daemon 未启动**

  - 在 Linux 上，确保 Docker 服务已启动并设置为开机自启：

    ```bash
    sudo systemctl start docker
    sudo systemctl enable docker
    ```

  - 在 Windows 和 macOS 上，请确认 Docker Desktop 已启动且状态为“运行中”。

- **镜像加速配置**

  由于网络原因，从 Docker Hub 拉取镜像可能较慢。可在 Docker Desktop 设置中配置镜像加速器，例如使用国内提供的加速服务，改善镜像下载速度。

- **权限问题**

  在 Linux 上，执行 Docker 命令时可能需要使用 `sudo`。为避免每次输入 sudo，可以将当前用户加入 Docker 组：

  ```bash
  sudo usermod -aG docker $USER
  ```

  添加用户组后，请重新登录系统以使更改生效。
