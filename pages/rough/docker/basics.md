---
order: 3
---

# Docker 基础概念

## 核心术语

### 镜像

镜像 (Image) 是一个包含应用程序及其运行环境的只读模板。通过镜像可以创建一个或多个容器，镜像定义了容器启动时所需的软件、依赖和配置。

### 容器

容器 (Container) 是镜像的一个运行实例。它提供了一个独立的运行环境，包含应用及其依赖，但共享宿主机的操作系统内核，从而实现轻量化和快速启动。

### Dockerfile

Dockerfile 是用于构建 Docker 镜像的文本文件，其中包含一系列指令。通过编写 Dockerfile，开发者可以自动化地构建和更新镜像。

### 数据卷

数据卷 (Volume) 用于持久化和共享容器中的数据。数据卷与容器的生命周期相独立，可以确保数据在容器删除后仍然存在。

### 网络

Docker 网络 (Network) 为容器之间以及容器与宿主机之间的通信提供了灵活的配置方式。常见的网络模式包括 Bridge、Host、Overlay 等。

### 仓库

仓库 (Registry) 用于存储和分发 Docker 镜像。Docker Hub 是官方提供的公共仓库，也可以搭建私有 Registry 来满足特定需求。

## 容器与虚拟机的对比

- **架构层面**

  - **虚拟机**：每个虚拟机运行一个完整的操作系统实例，具有独立的内核和系统资源，依赖硬件虚拟化技术进行隔离。
  - **容器**：容器共享宿主机的操作系统内核，但提供独立的运行环境（包括文件系统、网络、进程等），实现轻量级隔离。

- **性能和资源利用**

  - **虚拟机**：由于每个虚拟机包含完整操作系统，其启动时间较长且资源消耗较高。
  - **容器**：启动速度快（通常在秒级），可以在同一宿主机上运行大量容器，从而更高效地利用系统资源。

- **隔离性与安全性**
  - **虚拟机**：提供较强的隔离性，每个虚拟机之间完全独立，安全边界清晰。
  - **容器**：隔离性较弱，因为容器共享宿主机的内核，但现代容器技术和安全机制（如命名空间和控制组）能在大多数场景下提供足够的安全性。

## Docker 架构

- **Docker Engine**

  Docker Engine 是 Docker 的核心组件，包括：

  - **守护进程 (`dockerd`)**：负责处理镜像构建、容器运行、网络和存储管理等任务。
  - **命令行工具 (`docker` CLI)**：提供用户与 Docker Engine 交互的接口，通过命令行发送请求。

- **客户端与 API**

  用户可以通过 Docker CLI 或 REST API 与 Docker Engine 通信，执行各种操作（如创建、启动、停止容器），实现对 Docker 环境的全面管理。

- **镜像仓库 (Registry)**

  镜像仓库用于存储和分发 Docker 镜像。常见的仓库有：

  - **Docker Hub**：官方的公共镜像仓库，提供大量的预构建镜像。
  - **私有仓库**：企业或个人可以搭建自己的镜像仓库，以满足特定的安全和管理需求。

- **插件与扩展机制**

  Docker 支持通过插件扩展网络、存储和日志等功能，允许用户根据实际需求定制和扩展 Docker 的功能。

这种模块化的架构设计，使 Docker 能够高效地管理和运行容器，并且具备良好的扩展性，适应各种规模和场景下的容器化应用需求。
