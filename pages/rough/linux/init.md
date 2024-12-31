# 初始化

```bash
sudo apt update
```

## [git](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)

```bash
sudo apt install git-all
```

## node

### [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
source ~/.bashrc

nvm install node

node -v
```

如果要保持最新版本：

```bash
(
  cd "$NVM_DIR"
  git fetch --tags origin
  git checkout `git describe --abbrev=0 --tags --match "v[0-9]*" $(git rev-list --tags --max-count=1)`
) && \. "$NVM_DIR/nvm.sh"
```

### [pnpm](https://pnpm.io/zh/installation#%E5%9C%A8-posix-%E7%B3%BB%E7%BB%9F%E4%B8%8A)

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

### [ni](https://github.com/antfu-collective/ni#ni)

```bash
npm i -g @antfu/ni
```
