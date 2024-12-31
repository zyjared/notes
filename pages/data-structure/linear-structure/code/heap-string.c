#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <wchar.h>
#include <locale.h>

typedef struct {
    int* data;
    size_t size;
    size_t capacity;
} DynamicArray;

void initArray(DynamicArray* array, size_t initial_capacity) {
    array->data = (int*)malloc(sizeof(int) * initial_capacity);
    if (array->data == NULL) {
        wprintf(L"内存分配失败\n");
        exit(1);
    }
    array->size = 0;
    array->capacity = initial_capacity;
    wprintf(L"初始化成功，容量：%zu\n", initial_capacity);
}

void append(DynamicArray* array, int value) {
    // 如果数组已满，扩展数组的容量
    if (array->size == array->capacity) {
        array->capacity *= 2; // 扩展为原来的两倍
        array->data = (int*)realloc(array->data, sizeof(int) * array->capacity);
        if (array->data == NULL) {
            wprintf(L"内存重新分配失败\n");
            exit(1);
        }
        wprintf(L"扩展容量到 %zu\n", array->capacity);
    }

    array->data[array->size++] = value;
}

void pop(DynamicArray* array) {
    if (array->size > 0) {
        array->size--;
    }
    else {
        wprintf(L"数组为空，无法删除元素\n");
    }
}

int get(DynamicArray* array, size_t index) {
    if (index < array->size) {
        return array->data[index];
    }
    else {
        wprintf(L"索引越界\n");
        exit(1);
    }
}

void printArray(DynamicArray* array) {
    wprintf(L"动态数组(大小 %zu, 容量 %zu):\n", array->size, array->capacity);
    for (size_t i = 0; i < array->size; i++) {
        printf("%d ", array->data[i]);
    }
    printf("\n");
}

void freeArray(DynamicArray* array) {
    free(array->data);
    array->data = NULL;
    array->size = 0;
    array->capacity = 0;
    wprintf(L"内存释放成功\n");
}

int main() {
    setlocale(LC_ALL, "");

    DynamicArray array;
    initArray(&array, 4);

    append(&array, 10);
    append(&array, 20);

    printArray(&array);

    pop(&array);
    wprintf(L"删除后：\n");
    printArray(&array);

    int value = get(&array, 2);
    wprintf(L"索引 2 处的元素是：%d\n", value);

    freeArray(&array);

    return 0;
}
