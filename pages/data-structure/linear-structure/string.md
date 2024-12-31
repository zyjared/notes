# 串

## 串的定义

> String

也称为字符串，是由零个或多个字符组成的有限序列。

- 长度：串中的字符数；
- 空串：串中的字符数为 0；
- 子串：传中任意个连续的字符组成的子序列；
- 相等：称两个串相等，当且仅当它们的长度和各个对应位置的字符相等。

::: code-group

```c
// 在 c 中，字符和字符串的类型是不同的

char ch = 'H'; // 字符
char str[] = "Hello, World!"; // 字符串
```

```python
# 在 python 中，不区分字符和字符串，都表示为 str

char: str = "H"
string: str = "Hello, World!"
```
:::

## 定长顺序存储表示

::: details 点击查看代码
::: code-group

<<< ./code/string.py{py} [python]

:::

## 串的块链存储表示

采用链式结构（类似于链表）来存储数据块的一种方式。

## 堆分配存储表示

堆分配存储是一种通过操作系统的堆内存动态分配存储空间的方式。

C 通过使用函数 `malloc()` 和 `free()` 来分配和释放内存，python 不需要手动管理内存。

::: details 点击查看代码
<<< ./code/heap-string.c [c]
:::
