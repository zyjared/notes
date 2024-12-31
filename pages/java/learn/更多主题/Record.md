# Record

::: tip
- [Using Record to Model Immutable Data](https://dev.java/learn/records/)
:::

## Record

```java
public record Point(int x, int y) {}
```

这会有几个行为

- 编译器创建的类是 `final`（不能被子类覆盖）
- 有两个类型为 `int` 的字段：`x` 和 `y`
- 存在一个规范的构造函数初始化这两个字段
- 编译器会创建下列方法，可以修改这些方法
  - `toString()`
  - `equals()`
  - `hashCode()`
- 编译器会生成以下访问器
  - `x()`
  - `y()`
- 可以实现 `Serializable` 接口
