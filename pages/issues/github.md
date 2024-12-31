## Connection timed out

```sh
> git push origin main

ssh: connect to host github.com port 22: Connection timed out
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

**解决方法：**

将远程仓库更换为 HTTPS 协议

```sh
> git remote set-url origin https://github.com/username/repo.git
```
