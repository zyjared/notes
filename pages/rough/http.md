# HTTP 学习文档

## HTTP 基础

### HTTP 请求与响应概述

HTTP 是客户端和服务器之间交换信息的协议，客户端发送请求，服务器返回响应。它是 Web 开发的基础。

- **请求**：从客户端（浏览器）发送到服务器的 HTTP 请求。
- **响应**：服务器处理请求后返回给客户端的数据。

### 请求与响应的结构

#### 请求示例：

```javascript
fetch('/api/user', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))
```

- 请求使用了 `fetch`，其中 `method` 为 `GET`，请求头包含 `Content-Type` 和 `Accept`，表明我们希望发送和接收 JSON 数据。

#### 响应示例：

```javascript
fetch('/api/user')
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
    else {
      throw new Error('Network response was not ok')
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))
```

- 响应处理通过检查 `response.ok` 来确定请求是否成功，并将数据解析为 JSON。

## HTTP 状态码

### 常见状态码

- **2xx**：成功

  - `200 OK`：请求成功。
  - `201 Created`：资源创建成功。

- **3xx**：重定向

  - `301 Moved Permanently`：资源已被永久移动。
  - `302 Found`：资源临时移动。

- **4xx**：客户端错误

  - `400 Bad Request`：请求无效。
  - `404 Not Found`：资源未找到。

- **5xx**：服务器错误
  - `500 Internal Server Error`：服务器遇到错误。
  - `502 Bad Gateway`：网关错误。

## HTTP 请求方法

### 常见请求方法

- **GET**：请求数据。一般用于获取资源。

  ```javascript
  fetch('/api/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
  ```

- **POST**：提交数据，用于创建或修改资源。

  ```javascript
  fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'John Doe',
      age: 30
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
  ```

- **PUT**：更新资源。

  ```javascript
  fetch('/api/user/123', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: 'Jane Doe',
      age: 31
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
  ```

- **DELETE**：删除资源。
  ```javascript
  fetch('/api/user/123', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
  ```

## HTTP 请求头

### 常见请求头

- **Content-Type**：请求体的类型。

  - 例如：`Content-Type: application/json`

- **Accept**：客户端能接受的响应内容类型。

  - 例如：`Accept: application/json`

- **Authorization**：用于携带身份验证信息。

  - 例如：`Authorization: Bearer <token>`

- **User-Agent**：客户端信息，如浏览器和操作系统。
  - 例如：`User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124`

### 请求头示例

```javascript
fetch('/index.html', {
  method: 'GET',
  headers: {
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate',
    'Connection': 'keep-alive'
  }
})
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))
```

## CORS（跨源资源共享）

CORS 是浏览器的一种安全机制，允许浏览器向不同域的服务器发出请求。

### 常见 CORS 错误

- **No 'Access-Control-Allow-Origin' header is present on the requested resource.**

这是因为没有正确设置服务器端的 CORS 头信息。

### 服务器设置 CORS

```javascript
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('CORS error:', error))
```

## HTTP 缓存

缓存可以提高页面加载速度，减少网络请求。

### Cache-Control

`Cache-Control` 头用于定义缓存策略。例如：

- `Cache-Control: no-cache`：不使用缓存。
- `Cache-Control: max-age=3600`：缓存 1 小时。

### ETag 和 Last-Modified

- **ETag**：服务器提供的资源版本标识。
- **Last-Modified**：资源的最后修改时间。

### 示例：使用 ETag 进行条件请求

```javascript
fetch('/api/user', {
  method: 'GET',
  headers: {
    'If-None-Match': '"abc123"'
  }
})
  .then((response) => {
    if (response.status === 304) {
      console.log('Data not modified, using cached version')
    }
    else {
      return response.json()
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))
```

## Cookies 与 Session

- **Cookies**：浏览器存储的键值对，用于保存状态信息。

  - 设置 Cookie：
    ```javascript
    document.cookie = 'session_id=abc123; Max-Age=3600; HttpOnly; Secure'
    ```

- **Session**：服务器端存储的数据，通过 Cookie 唯一标识。

## HTTPS 和 SSL/TLS

HTTPS 是通过 SSL/TLS 加密的 HTTP 协议，用于保证数据安全。

### SSL/TLS 握手过程

1. 客户端发起请求，发送支持的加密算法。
2. 服务器选择加密算法并发送证书。
3. 客户端验证证书，并生成一个随机密钥。
4. 服务器使用密钥加密并发送回客户端。

## 现代 HTTP 协议：HTTP/2 和 HTTP/3

### HTTP/2

- 通过多路复用允许同时发送多个请求和响应。
- 支持头压缩，减少冗余数据。

### HTTP/3

- 基于 QUIC 协议，进一步优化延迟和连接速度。
- 提供更强的抗丢包能力和更快的连接恢复。

## WebSockets

WebSocket 是一种允许客户端与服务器进行双向通信的协议，非常适合实时应用。

### 创建 WebSocket 连接

```javascript
const socket = new WebSocket('ws://example.com/socket')
socket.onmessage = (event) => {
  console.log('Message from server:', event.data)
}
socket.send('Hello, server!')
```

服务器（Node.js 示例）：

```javascript
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message)
  })
  ws.send('Hello, client!')
})
```

## 调试工具与最佳实践

- **浏览器开发者工具**：使用 `Network` 标签查看 HTTP 请求和响应。
- **Postman**：用于测试 API 请求和调试。
- **curl**：命令行工具，常用于快速发送 HTTP 请求。
