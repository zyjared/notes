# UFW

- [UFW](https://help.ubuntu.com/community/UFW)

## 启用

```bash
sudo ufw enable
```

## 禁用

```bash
sudo ufw disable
```

## 查看日志

```bash
sudo less /var/log/ufw.log
```

## 查看状态

```bash
sudo ufw status
```

详细信息

```bash
sudo ufw status verbose
```

## 允许端口访问

```bash
sudo ufw allow <port>
```

```bash
sudo ufw allow <rule>
```

- `http`
- `https`

## 拒绝端口访问

```bash
sudo ufw deny <port>
```

## 删除规则

```bash
sudo ufw delete allow <port>
```

## 默认策略

### 拒绝所有入站流量

```bash
sudo ufw default deny incoming
```

### 允许所有出站流量

```bash
sudo ufw default allow outgoing
```
