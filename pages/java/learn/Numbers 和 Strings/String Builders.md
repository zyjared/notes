---
title: "String Builders"
---

# String Builders

::: tip
- [String Builders](https://dev.java/learn/numbers-strings/string-builders/)
- [Class StringBuilder](https://docs.oracle.com/en/java/javase/23/docs/api/java.base/java/lang/StringBuilder.html)
:::

## StringBuilder

- 可以被修改
- 字符序列是可变长数组
- 除非有更好的性能优势，否则不推荐
- 大量字符串连接
  - StringBuilder 在 SE 9 之前可能是有效的
  - 字符串连接在 SE 9 中得到优化，比 StringBuilder 更加高效

## 示例

此处使用 StringBuilder 会更高效。

::: code-group

```java [String]
public class StringDemo {
    public static void main(String[] args) {
        String palindrome = "Dot saw I was Tod";
        int len = palindrome.length();
        char[] tempCharArray = new char[len];
        char[] charArray = new char[len];

        // put original string in an
        // array of chars
        for (int i = 0; i < len; i++) {
            tempCharArray[i] =
                palindrome.charAt(i);
        }

        // reverse array of chars
        for (int j = 0; j < len; j++) {
            charArray[j] =
                tempCharArray[len - 1 - j];
        }

        String reversePalindrome =
            new String(charArray);
        System.out.println(reversePalindrome);
    }
}

```

```java [StringBuilder]
public class StringBuilderDemo {
    public static void main(String[] args) {
        String palindrome = "Dot saw I was Tod";

        StringBuilder sb = new StringBuilder(palindrome);

        sb.reverse();  // reverse it

        System.out.println(sb);
    }
}
```

:::
