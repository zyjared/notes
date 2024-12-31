# Autoboxing and Unboxing

::: tip
- [Autoboxing and Unboxing](https://dev.java/learn/numbers-strings/autoboxing/)
:::

<br>

- Autoboxing：类似 `int` 转换为 Integer 类型，`double` 转换为 Double 类型等行为。
- Unboxing：和 Autoboxing 的转换方向相反。

::: code-group

```java [Autoboxing]
Character ch = 'a'; // Autoboxing

int num = 3
List<Integer> list = new ArrayList<>();
list.add(num);

public void test(Integer v) {
    // ...
}
test(num);
```

```java [Unboxing]
Integer boxNum = 3;

int num = boxNum; // Unboxing

int retrieveNum = list.get(0);

public void test(int v) {
    // ...
}

test(boxNum);
```

:::
