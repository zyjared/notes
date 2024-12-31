## Tcl wasn't installed properly

**问题复现：**

- 创建虚拟环境
- 使用 `matplotlib` 时报错

```bash
This probably means that Tcl wasn't installed properly.
```

**解决方式：**

直接复制全局环境下的 `tcl` 文件夹到虚拟环境下。

得到 python 的可执行文件路径：

```bash
python -c "import sys; print(sys.executable)"
```

找到 tcl 文件夹，直接复制到虚拟环境中。
