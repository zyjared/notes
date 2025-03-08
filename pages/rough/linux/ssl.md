# SSL (Apache)

## 获取免费证书

```bash
sudo apt update
sudo apt install certbot python3-certbot-apache
```

```bash
sudo certbot --apache
```

之后可以通过查看状态得到证书信息：

```bash
sudo certbot certificates
```

## .conf

```bash
sudo nano /etc/apache2/sites-available/zyjared.com.conf
```

```apache
<VirtualHost *:80>
    ServerAdmin zyjared@outlook.com
    ServerName zyjared.com
    DocumentRoot /home/lighthouse/site

    # 将所有 HTTP 流量重定向到 HTTPS
    Redirect permanent / https://zyjared.com/

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

<VirtualHost *:443>
    ServerAdmin zyjared@outlook.com
    DocumentRoot /home/lighthouse/site
    ServerName zyjared.com

    SSLEngine on
    SSLCertificateFile /etc/letsencrypt/live/zyjared.com/fullchain.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/zyjared.com/privkey.pem

    <Directory /home/lighthouse/site>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

启用 SSL:

```bash
sudo a2enmod ssl
sudo a2ensite zyjared.com.conf

sudo systemctl restart apache2
```

验证:

```bash
curl -I https://zyjared.com

# 响应头
# HTTP/2 200
```

## 常用命令

### 检查证书状态

```bash
sudo certbot certificates
```

### 自动续期配置

```bash
sudo certbot renew --dry-run
```
