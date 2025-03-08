---
order: 5
---

# Docker 容器

Docker 容器（Container）是镜像的运行实例，提供了一个独立的环境，使应用程序可以跨平台运行，而不受宿主机系统的影响。容器是 Docker 的核心概念之一，掌握容器的管理和操作是使用 Docker 的关键。

掌握 Docker 容器的管理、调试、网络、存储、日志和资源控制，能够让你高效地使用 Docker 进行应用容器化和运维管理。

## 容器的基本操作

### 运行容器

运行一个容器：

```bash
docker run <image_name>
```

示例：

```bash
docker run ubuntu
```

默认情况下，容器会运行 `CMD` 指定的命令，然后退出。要启动交互式终端：

```bash
docker run -it ubuntu bash
```

### 后台运行容器

使用 `-d` 选项让容器在后台运行：

```bash
docker run -d nginx
```

## 容器的生命周期管理

### 查看运行中的容器

```bash
docker ps
```

查看所有容器（包括已停止的）：

```bash
docker ps -a
```

### 停止容器

```bash
docker stop <container_id>
```

### 重新启动容器

```bash
docker restart <container_id>
```

### 暂停与恢复容器

暂停容器：

```bash
docker pause <container_id>
```

恢复容器：

```bash
docker unpause <container_id>
```

### 终止容器（强制停止）

```bash
docker kill <container_id>
```

### 删除容器

```bash
docker rm <container_id>
```

删除所有已停止的容器：

```bash
docker container prune
```

---

## 进入运行中的容器

### 使用 `exec` 进入容器

```bash
docker exec -it <container_id> bash
```

### 使用 `attach` 进入容器

```bash
docker attach <container_id>
```

::: warning
`attach` 方式连接后，如果按 `Ctrl + C`，会停止容器，而 `exec` 不会。
:::

### 使用 `nsenter` 进入容器（Linux 专用）

```bash
nsenter --target $(docker inspect --format {{.State.Pid}} <container_id>) --mount --uts --ipc --net --pid
```

### 使用 `docker run --rm` 方式创建一次性容器

```bash
docker run --rm -it ubuntu bash
```

## 容器日志与监控

### 查看容器日志

```bash
docker logs <container_id>
```

实时查看日志：

```bash
docker logs -f <container_id>
```

### 查看容器内部进程

```bash
docker top <container_id>
```

### 查看容器资源使用情况

```bash
docker stats <container_id>
```

### 查看容器详细信息

```bash
docker inspect <container_id>
```

## 端口映射

容器默认无法直接访问宿主机网络。可以使用 `-p` 选项映射端口：

```bash
docker run -d -p 8080:80 nginx
```

示例中，宿主机 `8080` 端口映射到容器的 `80` 端口。

查看容器的端口映射：

```bash
docker port <container_id>
```

---

## 文件与数据管理

### 在容器和宿主机之间拷贝文件

从宿主机拷贝文件到容器：

```bash
docker cp local_file <container_id>:/container_path
```

从容器拷贝文件到宿主机：

```bash
docker cp <container_id>:/container_path local_path
```

### 挂载数据卷

数据卷（Volume）用于持久化存储。可以在容器中挂载本地目录：

```bash
docker run -v /local/path:/container/path <image_name>
```

示例：

```bash
docker run -d -v /home/user/data:/data ubuntu
```

### 绑定挂载（Bind Mount）

```bash
docker run -d --mount type=bind,source=/local/path,target=/container/path <image_name>
```

## 网络管理

### 查看 Docker 网络

```bash
docker network ls
```

### 创建自定义网络

```bash
docker network create my_network
```

### 连接容器到网络

```bash
docker network connect my_network <container_id>
```

### 断开容器与网络的连接

```bash
docker network disconnect my_network <container_id>
```

## 资源限制与性能优化

### 限制 CPU 使用

限制容器只能使用 1 核 CPU：

```bash
docker run --cpus="1" ubuntu
```

### 限制内存使用

限制容器内存使用为 512MB：

```bash
docker run -m 512m ubuntu
```

### 限制 I/O 读写速率

```bash
docker run --device-read-bps /dev/sda:1mb --device-write-bps /dev/sda:1mb ubuntu
```

## 创建守护式容器

使用 `--restart` 选项让容器在 Docker 重启后自动启动：

```bash
docker run -d --restart always nginx
```

`--restart` 选项支持：

- `no`：默认值，容器不会自动重启
- `always`：容器始终自动重启
- `unless-stopped`：除非手动停止，否则自动重启
- `on-failure`：仅在容器非正常退出时自动重启

## 其他容器管理命令

### 重命名容器

```bash
docker rename old_name new_name
```

### 更改容器的启动命令

```bash
docker update --restart=always <container_id>
```

### 运行容器时修改环境变量

```bash
docker run -e "MY_ENV_VAR=value" ubuntu
```

### 以特定用户身份运行容器

```bash
docker run -u 1000:1000 ubuntu
```

## 导出与导入容器

### 导出容器为 `tar` 文件

```bash
docker export -o my_container.tar <container_id>
```

### 从 `tar` 文件导入容器

```bash
docker import my_container.tar my_new_image
```
