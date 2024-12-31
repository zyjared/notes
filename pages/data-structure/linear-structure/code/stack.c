#include <stdio.h>
#include <stdbool.h>
#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];  // 数组存储栈元素
    int top;             // 栈顶指针
} Stack;

void InitStack(Stack* s) {
    s->top = -1;
}

bool IsEmpty(Stack* s) {
    return s->top == -1;
}

bool Push(Stack* s, int value) {
    if (s->top >= MAX_SIZE - 1) return false;
    s->data[++s->top] = value;
    return true;
}

bool Pop(Stack* s, int* value) {
    if (IsEmpty(s)) return false;
    *value = s->data[s->top--];
    return true;
}

bool Peek(Stack* s, int* value) {
    if (IsEmpty(s)) return false;
    *value = s->data[s->top];
    return true;
}

void PrintStack(Stack* s) {
    for (int i = 0; i <= s->top; i++) {
        printf("%d ", s->data[i]);
    }
    printf("\n");
}
