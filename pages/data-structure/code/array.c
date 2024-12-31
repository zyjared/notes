#include <stdio.h>
#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];  // 存储数组元素
    int length;          // 数组当前长度
} Array;

void initArray(Array* arr) {
    arr->length = 0;
}

void insertElement(Array* arr, int pos, int value) {
    if (pos < 0 || pos > arr->length || arr->length >= MAX_SIZE) {
        printf("插入位置非法或数组已满\n");
        return;
    }
    for (int i = arr->length; i > pos; i--) {
        arr->data[i] = arr->data[i - 1];
    }
    arr->data[pos] = value;
    arr->length++;
}

void deleteElement(Array* arr, int pos) {
    if (pos < 0 || pos >= arr->length) {
        printf("删除位置非法\n");
        return;
    }
    for (int i = pos; i < arr->length - 1; i++) {
        arr->data[i] = arr->data[i + 1];
    }
    arr->length--;
}

void traverseArray(Array* arr) {
    for (int i = 0; i < arr->length; i++) {
        printf("%d ", arr->data[i]);
    }
    printf("\n");
}
