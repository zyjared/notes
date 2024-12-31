#include <stdio.h>
#define MAX_SIZE 100

typedef struct {
    int row, col, value;  // 行号，列号，值
} Triple;

typedef struct {
    Triple data[MAX_SIZE];  // 存储非零元素
    int rows, cols, nums;   // 矩阵行数，列数，非零元素个数
} SparseMatrix;

void printSparseMatrix(SparseMatrix* mat) {
    printf("行 列 值\n");
    for (int i = 0; i < mat->nums; i++) {
        printf("%d  %d  %d\n", mat->data[i].row, mat->data[i].col, mat->data[i].value);
    }
}