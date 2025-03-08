---
order: 6
---

# Docker 镜像管理

Docker 镜像（Image）是容器的基础，包含应用程序和运行环境。理解镜像的构造、管理和优化对于高效使用 Docker 至关重要。

## 获取 Docker 镜像

### 从 Docker Hub 拉取镜像

```bash
docker pull <image_name>
```

示例：

```bash
docker pull ubuntu
```

拉取特定版本（Tag）的镜像：

```bash
docker pull ubuntu:20.04
```

## 查看与管理镜像

### 查看本地已有镜像

```bash
docker images
```

仅列出镜像 ID：

```bash
docker images -q
```

### 查看某个镜像的详细信息

```bash
docker inspect <image_name_or_id>
```

### 查看镜像历史

```bash
docker history <image_name_or_id>
```

## 删除 Docker 镜像

### 删除单个镜像

```bash
docker rmi <image_name_or_id>
```

### 删除所有未使用的镜像（Dangling Images）

```bash
docker image prune
```

### 删除所有镜像（谨慎操作）

```bash
docker rmi $(docker images -q)
```

## 构建自定义 Docker 镜像

### 使用 Dockerfile 构建镜像

Dockerfile 示例：

```Dockerfile
# 选择基础镜像
FROM ubuntu:20.04

# 设置工作目录
WORKDIR /app

# 复制文件到容器
COPY . /app

# 安装依赖
RUN apt update && apt install -y curl

# 运行命令
CMD ["bash"]
```

使用 Dockerfile 构建镜像：

```bash
docker build -t my_custom_image .
```

### 指定 Dockerfile 位置

```bash
docker build -t my_custom_image -f /path/to/Dockerfile .
```

### 通过 `--no-cache` 选项强制重新构建

```bash
docker build --no-cache -t my_custom_image .
```

## 给镜像打标签

给已有镜像打标签：

```bash
docker tag <image_id> myrepo/myimage:1.0
```

## 镜像的导入与导出

### 导出镜像为 tar 文件

```bash
docker save -o my_image.tar my_custom_image
```

### 导入 tar 文件为镜像

```bash
docker load -i my_image.tar
```

## 上传镜像到 Docker Hub 或私有仓库

### 登录 Docker Hub

```bash
docker login
```

### 推送镜像到 Docker Hub

```bash
docker push myrepo/myimage:1.0
```

### 推送镜像到私有仓库

```bash
docker tag myimage myregistry.com/myimage:latest
docker push myregistry.com/myimage:latest
```

## 压缩与优化 Docker 镜像

### 使用轻量级基础镜像

推荐使用 `alpine`、`debian-slim` 等轻量镜像：

```Dockerfile
FROM alpine
```

### 清理构建中的临时文件

```Dockerfile
RUN apt update && apt install -y curl \
    && rm -rf /var/lib/apt/lists/*
```

### 多阶段构建减少镜像体积

```Dockerfile
# 第一阶段：编译
FROM golang:1.19 AS builder
WORKDIR /app
COPY . .
RUN go build -o myapp

# 第二阶段：运行
FROM alpine
COPY --from=builder /app/myapp /usr/local/bin/myapp
CMD ["myapp"]
```

## 查看和清理镜像空间

### 查看镜像占用的空间

```bash
docker system df
```

### 清理所有未使用的镜像、容器、网络和数据卷

```bash
docker system prune -a
```

---

## 其他镜像管理命令

### 重新标记镜像

```bash
docker tag old_image new_image
```

### 运行时删除容器后保留镜像

```bash
docker run --rm myimage
```
