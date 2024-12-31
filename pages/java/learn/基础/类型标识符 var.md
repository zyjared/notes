---
title: "类型标识符 var"
---

# 类型标识符 var

::: tip
- [Using the Var Type Identifier](https://dev.java/learn/language-basics/using-var/)
:::

<br />

- 编译器会自动推断类型
- 只能声明局部变量
- 声明时必须初始化
- 创建后类型不能更改

<br />

```java
var msg = "Hello World!";

var list = List.of("one", "two", "three", "four");
for (var element: list) {
    System.out.println(element);
}
```
