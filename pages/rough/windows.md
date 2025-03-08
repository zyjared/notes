# Windows 初始化

## [WinGet](https://learn.microsoft.com/zh-cn/windows/package-manager/winget/)

应该默认安装了。

## [Scoop](https://scoop.sh/)

命令行安装工具，考虑以下特点来考虑是否使用，或哪些工具用其管理：

- 无权限弹窗
- 隐藏安装向导
- 避免安装大量软件带来的环境变量污染
- 方便卸载
- 自动查找和安装依赖

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
```

## [VSCode](https://code.visualstudio.com/)

- [Download](https://code.visualstudio.com/Download)

## [Git](https://git-scm.com)

- [Download](https://git-scm.com/downloads/win)

## [nvm-windows](https://github.com/coreybutler/nvm-windows)

node.js 版本管理工具。

- [Releases](https://github.com/coreybutler/nvm-windows/releases)

## [PowerShell](https://github.com/PowerShell/PowerShell)

文档注意时效，选择最新的文档。

- [优化 shell 体验](https://learn.microsoft.com/zh-cn/powershell/scripting/learn/shell/optimize-shell?view=powershell-7.6)

### 创建 profile

确保 `$PROFILE` 变量存在，如果不存在则创建。

```bash
if (!(Test-Path -Path $PROFILE)) {
  New-Item -ItemType File -Path $PROFILE -Force
}
```

### 配置 profile

```bash
code $PROFILE
```

```psl
Set-Alias -Name touch -Value New-Item
```

## [PSReadLine](https://github.com/PowerShell/PSReadLine)

```bash
# Prerelease
Install-Module PSReadLine -Repository PSGallery -Scope CurrentUser -AllowPrerelease -Force

# 稳定版本
# Install-Module PSReadLine -Repository PSGallery -Scope CurrentUser -Force
```

```bash
# 如果使用 Emacs 键
# Set-PSReadLineOption -EditMode Emacs

# 查看快捷键：
Get-PSReadLineKeyHandler
```

## [curl](https://curl.se/)

```bash
scoop install main/curl
```

## [starship](https://starship.rs/zh-CN/)

轻量、迅速、客制化的高颜值终端！

```bash
scoop install starship

Invoke-Expression (&starship init powershell)
```

## [lsd](https://github.com/lsd-rs/lsd)

同 `ls` 命令，但是做了更多的美化。

```bash
scoop install lsd
```

```bash
code $PROFILE
```

```psl
Set-Alias -Name ls -Value lsd
```

## [gsudo](https://github.com/gerardog/gsudo)

```bash
scoop install gsudo
```
