---
order: 8
---

# Docker 网络管理

Docker 网络是容器之间以及容器与外部系统之间通信的基础。理解 Docker 网络的配置和管理是容器化应用部署的关键。

掌握 Docker 网络管理，能帮助你灵活配置容器之间的通信和隔离。

## 创建 Docker 网络

### 创建桥接网络

桥接网络（Bridge）是默认的网络模式，用于同一主机上容器之间的通信。

```bash
docker network create --driver bridge my_bridge_network
```

### 创建主机网络

主机网络（Host）允许容器共享主机网络堆栈。

```bash
docker network create --driver host my_host_network
```

### 创建覆盖网络

覆盖网络（Overlay）跨主机通信，通常用于 Docker Swarm 集群。

```bash
docker network create --driver overlay my_overlay_network
```

### 创建无网络（None）模式

None 网络模式下，容器没有网络连接。

```bash
docker network create --driver none my_none_network
```

## 查看 Docker 网络

### 查看所有网络

```bash
docker network ls
```

### 查看网络详细信息

```bash
docker network inspect <network_name_or_id>
```

## Docker 容器网络连接

### 连接容器到网络

```bash
docker network connect <network_name> <container_name_or_id>
```

### 从网络断开容器

```bash
docker network disconnect <network_name> <container_name_or_id>
```

## Docker 网络管理

### 删除网络

删除未使用的网络：

```bash
docker network rm <network_name>
```

### 删除所有未使用的网络

```bash
docker network prune
```

## Docker 网络模式

### 桥接模式

桥接网络是 Docker 容器默认使用的网络模式。在桥接模式下，容器通过虚拟网桥与主机和其他容器通信。

### 主机模式

主机模式下，容器直接与主机共享网络堆栈。此模式下，容器不通过虚拟网桥，直接使用主机的 IP 地址。

### 覆盖模式

覆盖模式常用于 Docker Swarm 集群，它允许跨多个主机的容器相互通信。

### None 模式

None 模式下，容器没有网络连接，适用于不需要网络连接的容器。

## Docker 网络配置

### 配置自定义子网

创建一个自定义子网并指定网关：

```bash
docker network create --subnet=192.168.1.0/24 --gateway=192.168.1.1 my_custom_network
```

### 配置 DNS 服务器

```bash
docker network create --dns=8.8.8.8 my_custom_dns_network
```

## Docker 网络安全

### 网络隔离

通过使用自定义网络，可以将容器隔离开来，确保它们之间不能直接通信。例如，默认情况下，不同 Docker 网络上的容器无法相互通信。

### 使用防火墙规则

可以通过配置防火墙规则来限制网络访问，确保容器只能访问指定的网络资源。

## 高级 Docker 网络使用

### 使用 Docker Compose 配置多容器网络

在 Docker Compose 文件中配置服务的网络：

```yaml
version: '3'
services:
  web:
    image: nginx
    networks:
      - frontend
  api:
    image: myapi
    networks:
      - backend
      - frontend
networks:
  frontend:
  backend:
```

### 配置跨主机网络

通过 Docker Swarm 或 Kubernetes 设置跨主机网络，使得不同主机上的容器能够通过 Overlay 网络互联。

### 使用 Macvlan 网络

Macvlan 网络模式允许容器在物理网络上拥有自己的 MAC 地址。适用于需要容器与主机在网络层面分离的场景。

```bash
docker network create -d macvlan --subnet=192.168.1.0/24 --gateway=192.168.1.1 -o parent=eth0 my_macvlan_network
```
