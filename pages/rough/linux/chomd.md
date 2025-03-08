```bash
chmod [who][operator][permissions] 文件或目录
```


## who

- `u` 用户
- `g` 组
- `o` 其他
- `a` 所有（默认）


## operator

- `+` 添加权限
- `-` 删除权限
- `=` 设置权限


## permissions

- `r` 读
- `w` 写
- `x` 执行

## 数字模式

### 权限值

- 读( r ): 4
- 写( w ): 2
- 执行( x ): 1

将这些数字相加即可得到权限值。

- `rwx`: 7
- `rw`: 6
- `rx`: 5
- `r`: 4
- `wx`: 3
- `w`: 2
- `x`: 1