# 时间复杂度

## 大 O 表示法

大 O 表示法描述的是渐进复杂度（Asymptotic Complexity），即当输入规模 $n$ 变得非常大时，算法的运行时间或空间需求如何变化。它关注的是最坏情况（或上界）下的增长速度，忽略常数项和低次项，只关注主导项。

::: tip

- [大O符号](https://zh.wikipedia.org/wiki/大O符号)

:::

### 常数时间

> Constant Time

$O(1)$

**定义：**

- $O(1)$ 表示算法的执行时间与输入规模无关，始终保持固定。
- 这种复杂度表示算法每次执行的时间相同，无论输入数据的规模大小。

**常见场景：**

- 查找数组中的某个元素（如果已知索引）。
- 对变量进行简单的赋值操作。

**示例：数组元素访问**

```python
arr = [1, 2, 3, 4, 5]
x = arr[2]  # 访问第3个元素
```

::: tip
此操作的时间复杂度是 O(1)，因为不管数组有多大，访问一个特定位置的元素始终是固定的。
:::

### 对数时间

> Logarithmic Time

$O(\log n)$

**定义：**

- $O(\log n)$ 表示算法的执行时间随着输入规模的增大按对数级别增长。通常见于通过折半等方式减少问题规模的算法。

**常见场景**:

- 二分查找：在已排序的数组中查找元素。
- 分治算法的递归解法。

**示例：二分查找**

```python
def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1
```

::: tip
对于每次比较，二分查找将搜索范围减半，因此时间复杂度为 $O(\log n)$。
:::

### 线性时间

> Linear Time

$O(n)$

**定义：**

- $O(n)$ 表示算法的执行时间与输入规模成正比，随着数据规模的增加，算法的执行时间也线性增长。

**常见场景：**

- 遍历整个数组或链表。
- 查找数组中的最大或最小元素。

**示例：遍历数组**

```python
def find_max(arr):
    max_value = arr[0]
    for num in arr:
        if num > max_value:
            max_value = num
    return max_value
```

::: tip
遍历整个数组一次，时间复杂度为 $O(n)$。
:::

### 线性对数时间

> Linearithmic Time

$O(n log n)$

**定义：**

- $O(n \log n)$ 表示算法的执行时间在随着数据规模增大时，同时也受到对数增长的影响。通常出现在高效排序算法中。

**常见场景：**

- 快速排序：一种高效的排序算法。
- 归并排序：另一种高效的排序算法。

**示例：归并排序**

```python
def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    while left and right:
        if left[0] < right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))
    result.extend(left)
    result.extend(right)
    return result
```

::: tip
归并排序将数组分成两个部分，每次合并两部分，时间复杂度为 $O(n \log n)$。
:::

### 二次时间

> Quadratic Time

$O(n^2)$

**定义：**

- $O(n^2)$ 表示算法的执行时间随着输入规模的增大按平方级增长，通常出现在嵌套循环中。

**常见场景：**

- 冒泡排序：通过反复交换相邻元素来排序。
- 插入排序：将元素插入到已经排序好的部分。

**示例：冒泡排序**

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
```

::: tip
冒泡排序的时间复杂度为 $O(n^2)$，因为它使用了两个嵌套循环。
:::

### 指数时间

> Exponential Time

$O(2^n)$

**定义：**

- $O(2^n)$ 表示算法的执行时间随着输入规模的增大呈指数级增长，通常出现在暴力破解算法或递归中，且没有有效的剪枝优化。

**常见场景：**

- 递归算法，特别是在没有记忆化或动态规划优化的情况下。
- 在解决某些组合优化问题时。

**示例：斐波那契数列递归**

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

::: tip
这个递归实现的时间复杂度为 O(2^n)，因为它重复计算了大量相同的子问题。
:::

### 阶乘时间

> Factorial Time

$O(n!)$

**定义：**

- $O(n!)$ 表示算法的执行时间随着输入规模的增大呈阶乘级增长。阶乘时间复杂度通常出现在生成所有可能排列或组合的情况下，尤其是在涉及全排列问题时。
- 这种复杂度增长非常迅速，通常只有在问题非常小或通过优化的算法解决时才会使用。

**常见场景：**

- 全排列问题：生成一个集合中所有元素的排列会导致阶乘级别的复杂度。
- 旅行商问题 (TSP)：需要探索所有可能的路径，计算最短路径的时间复杂度为阶乘级。

**示例：全排列问题**

全排列问题要求给定一个集合，生成其所有元素的排列组合。例如，对于集合 $\{1, 2, 3\}$，所有排列为：

```
[1, 2, 3]
[1, 3, 2]
[2, 1, 3]
[2, 3, 1]
[3, 1, 2]
[3, 2, 1]
```

可以使用递归方法生成这些排列。由于有 n! 个不同的排列组合，因此时间复杂度为 O(n!)。

```python
def permute(nums):
    def backtrack(start):
        if start == len(nums):
            result.append(nums[:])
            return
        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start]  # Swap
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start]  # Backtrack

    result = []
    backtrack(0)
    return result
```

::: tip
全排列的时间复杂度为 O(n!)，因为有 n! 种可能的排列组合。
:::
