---
title: "Strings"
---

# Strings

::: tip
- [Strings](https://dev.java/learn/numbers-strings/strings/)
- [Class String](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/lang/String.html#)
:::

::: warning
熟悉 api 文档后，删除以下内容，直接访问对应的 api 文档。
:::

## Strings

```java
String greeting = "Hello world!";
```

```java
char[] helloArray = {'H', 'e', 'l', 'l', 'o'};
String helloString = new String(helloArray);
System.out.println(helloString.length());
```

## 长度

```java
String palindrome = "Dot saw I was Tod";
int len = palindrome.length();
// 17
```

## 拼接

```java
String hello = "Hello";
String world = "World";

String helloWorld = hello + " " + world;
```

从 `SE 15` 开始，支持二维字符串文字：

```java
String html = """
              <html>
                  <body>
                      <p>Hello, world</p>
                  </body>
              </html>
              """;
```

```java
String fs;
fs = String.format("The value of the float " +
                   "variable is %f, while " +
                   "the value of the " +
                   "integer variable is %d, " +
                   " and the string is %s",
                   floatVar, intVar, stringVar);
System.out.println(fs);
```

## 数字

### 字符串转换位数字

```java
public class ValueOfDemo {
    public static void main(String[] args) {

        // this program requires two
        // arguments on the command line
        if (args.length == 2) {
            // convert strings to numbers
            float a = (Float.valueOf(args[0])).floatValue();
            float b = (Float.valueOf(args[1])).floatValue();

            // do some arithmetic
            System.out.println("a + b = " +
                               (a + b));
            System.out.println("a - b = " +
                               (a - b));
            System.out.println("a * b = " +
                               (a * b));
            System.out.println("a / b = " +
                               (a / b));
            System.out.println("a % b = " +
                               (a % b));
        } else {
            System.out.println("This program " +
                "requires two command-line arguments.");
        }
    }
}
```

```java
float a = Float.parseFloat(args[0]);
float b = Float.parseFloat(args[1]);
```

### 数字转换为字符串

```java
int i;
// Concatenate "i" with an empty string; conversion is handled for you.
String s1 = "" + i;

// The valueOf class method.
String s2 = String.valueOf(i);
```

每个 Number 的子类都有一个 `toString()` 方法。

```java
int i;
double d;
String s3 = Integer.toString(i);
String s4 = Double.toString(d);
```

## 索引获取字符和子字符串

- [chatAt](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/lang/String.html#charAt(int))
- [getChars](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/lang/String.html#getChars(int,int,char%5B%5D,int))

```java
String s = "Hello World";
char c = s.charAt(0);

char[] buf = new char[5];
s.getChars(0, 5, buf, 0);
```

## 搜索匹配

- [indexOf](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/lang/String.html#indexOf(int))
- [contains](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/lang/String.html#contains(java.lang.CharSequence))
