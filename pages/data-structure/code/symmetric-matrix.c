#include <stdio.h>
#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];  // 存储对称矩阵的上三角元素
    int n;               // 矩阵的维度
} SymmetricMatrix;

void setElement(SymmetricMatrix* mat, int i, int j, int value) {
    if (i < j) { int temp = i; i = j; j = temp; }
    mat->data[i * (i - 1) / 2 + j] = value;
}

int getElement(SymmetricMatrix* mat, int i, int j) {
    if (i < j) { int temp = i; i = j; j = temp; }
    return mat->data[i * (i - 1) / 2 + j];
}
