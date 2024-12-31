# 队列

## 队列的定义

> Queue

队列是一种先进先出的线性表。

- 队头（Head）：元素出队;
- 队尾（Rear）：元素入队;
- 先进先出（First In First Out, FIFO）：先插入的元素先被删除。

::: details 点击查看代码
::: code-group

<<< ./code/queue.py{py} [python]

:::

## 存储结构

- 顺序存储结构
- 链式存储结构

## 链队列

基于链表实现的队列，可以动态分配内存。

::: details 点击查看代码
::: code-group

<<< ./code/linked-queue.py{py} [python]

:::

## 循环队列

如果一个队列的内存是固定的，普通的顺序存储结构中的队列可能会遇到**假满**的现象（队头移除，队头指针往队尾移动，头部空间无法重用）。

::: details 点击查看代码
::: code-group

<<< ./code/circular-queue.py{py} [python]

:::

## 双端队列

两端都能进行插入和删除操作的队列。

python 内置了高效的双端队列实现。

```python
from collections import deque
```
