---
order: 4
---

# Docker 命令行基础

> 通过掌握这些命令，你可以全面管理 Docker 环境，从镜像构建到容器运行，再到网络和数据卷管理，以及系统清理与故障调试。每个命令都有丰富的选项和参数，可以通过执行 `docker <command> --help` 获取详细的使用说明。

## Docker CLI 概览

Docker 命令行工具（CLI）用于与 Docker 守护进程通信，执行镜像管理、容器操作、网络配置、数据卷管理等各种任务。通过熟悉这些命令，你可以高效地管理和调试 Docker 环境。

## 常用命令

### 版本和系统信息

- **查看 Docker 版本**

  显示客户端和服务器的版本信息：

  ```bash
  docker version
  ```

- **获取详细系统信息**

  包括容器、镜像、网络和存储等数据：

  ```bash
  docker info
  ```

### 镜像管理

- **列出本地所有镜像**

  查看当前主机上存在的镜像：

  ```bash
  docker images
  ```

- **拉取镜像**

  从 Docker 仓库中下载指定镜像：

  ```bash
  docker pull <image_name>:<tag>
  ```

- **构建镜像**

  根据 Dockerfile 构建自定义镜像：

  ```bash
  docker build -t <image_name>:<tag> .
  ```

- **标记镜像**

  给镜像打上新标签：

  ```bash
  docker tag <source_image> <target_image>
  ```

- **推送镜像到仓库**

  上传本地镜像到远程仓库（如 Docker Hub）：

  ```bash
  docker push <image_name>:<tag>
  ```

- **删除镜像**

  移除不再需要的镜像：

  ```bash
  docker rmi <image_id_or_name>
  ```

### 容器操作

- **列出运行中的容器**

  查看当前正在运行的容器列表：

  ```bash
  docker ps
  ```

- **列出所有容器**

  包括已停止的容器：

  ```bash
  docker ps -a
  ```

- **运行一个容器**

  基于指定镜像启动一个新容器，常用于交互模式或后台运行：

  ```bash
  docker run -it --name <container_name> <image_name> <command>
  ```

- **启动已停止的容器**

  启动之前创建但已停止的容器：

  ```bash
  docker start <container_id_or_name>
  ```

- **停止运行中的容器**

  停止一个正在运行的容器：

  ```bash
  docker stop <container_id_or_name>
  ```

- **重启容器**

  快速重启容器（先停止再启动）：

  ```bash
  docker restart <container_id_or_name>
  ```

- **删除容器**

  移除一个已停止的容器：

  ```bash
  docker rm <container_id_or_name>
  ```

- **在容器内执行命令**

  进入正在运行的容器并执行指定命令：

  ```bash
  docker exec -it <container_id_or_name> <command>
  ```

- **查看容器日志**

  获取容器运行时的输出日志，便于调试：

  ```bash
  docker logs <container_id_or_name>
  ```

- **查看容器内运行的进程**

  显示容器中正在运行的进程列表：

  ```bash
  docker top <container_id_or_name>
  ```

- **复制文件或目录**

  在宿主机和容器之间复制文件或目录：

  ```bash
  docker cp <source_path> <container_id_or_name>:<destination_path>
  ```

- **提交容器更改为新镜像**

  将容器当前状态保存为新的镜像：

  ```bash
  docker commit <container_id_or_name> <new_image_name>:<tag>
  ```

- **附加到正在运行的容器**

  附加到容器的标准输入输出流：

  ```bash
  docker attach <container_id_or_name>
  ```

- **查看容器文件系统变更**

  列出容器文件系统相对于镜像的更改：

  ```bash
  docker diff <container_id_or_name>
  ```

- **暂停和恢复容器**

  暂停容器中的所有进程，或恢复暂停的容器：

  - 暂停容器：

    ```bash
    docker pause <container_id_or_name>
    ```

  - 恢复容器：

    ```bash
    docker unpause <container_id_or_name>
    ```

### 网络管理

- **列出所有网络**

  查看当前 Docker 环境中的所有网络：

  ```bash
  docker network ls
  ```

- **查看网络详情**

  获取指定网络的详细配置信息：

  ```bash
  docker network inspect <network_name_or_id>
  ```

- **创建自定义网络**

  为容器创建一个独立的网络：

  ```bash
  docker network create <network_name>
  ```

- **删除网络**

  移除不再使用的网络：

  ```bash
  docker network rm <network_name_or_id>
  ```

### 数据卷管理

- **列出所有数据卷**

  查看当前系统中存在的数据卷：

  ```bash
  docker volume ls
  ```

- **查看数据卷详情**

  获取指定数据卷的详细信息：

  ```bash
  docker volume inspect <volume_name>
  ```

- **创建数据卷**

  新建一个数据卷用于持久化存储：

  ```bash
  docker volume create <volume_name>
  ```

- **删除数据卷**

  移除不再需要的数据卷：

  ```bash
  docker volume rm <volume_name>
  ```

### 系统与清理

- **查看磁盘使用情况**

  显示 Docker 使用的磁盘空间信息：

  ```bash
  docker system df
  ```

- **清理未使用的资源**

  删除未使用的容器、镜像、网络和数据卷，释放空间：

  ```bash
  docker system prune
  ```
