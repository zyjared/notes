---
title: "Numbers"
---

# Numbers

::: tip
- [Numbers](https://dev.java/learn/numbers-strings/numbers/)
:::

## Numbers

如果想要使用一些特定方法，可以使用一些对应的 [Number](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/lang/Number.html) 类型代替一些基本类型：

 `Number` 的部分子类
  - `Byte`
  - `Integer`
  - `Long`
  - `Double`
  - `Short`
  - `Float`
  - `...`

## 格式化输出

```java

public class Main {

    public static void main(String[] args) {
        int x = 10;
        System.out.format("x = %d%n", x);

        // %n 根据操作系统替换为对应的换行符，不应该使用 \n
    }
}
```

| Converter    | Flag   | Explanation                                                 |
| ------------ | ------ | ----------------------------------------------------------- |
| `%d`         |        | int    十进制数                                             |
| `%f`         |        | float  浮点数                                               |
| `%n`         |        | 根据操作系统替换为对应的换行符，具有比 `\n` 更好的可移植性。 |
| `%tB`        |        | 日期和时间，month   月份，特定区域的月份全称。               |
| `%td`, `%te` |        | 日期和时间，month   月份，`td` 有前导 0，`te` 无前导 0。     |
| `%ty`, `%tY` |        | 日期和时间，year    年份，`ty` 有前导零 0，`tY` 无前导 0。   |
| `%tl`        |        | 日期和时间，hour    12 小时制。                              |
| `%tM`        |        | 日期和时间，minute  分钟，有前导 0。                         |
| `%tp`        |        | 日期和时间，an/pm                                            |
| `%tm`        |        | 日期和时间，month   月份，有前导 0。                         |
| `%tD`        |        | 日期和时间，date    `%tm%td%ty`                              |
|              | `08`   | 宽度为 8，有前导 0。                                         |
|              | `+`    | 包括符号，无论正负。                                         |
|              | `,`    | 包括特定区域分组字符。                                       |
|              | `-`    | 左对齐。                                                     |
|              | `.3`   | 保留小数点后 3 位。                                          |
|              | `10.3` | 宽度为 10，右对齐，保留小数点后 3 位。                        |

## 随机数

- [random](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/lang/Math.html#random())
