#include <stdio.h>
#define MAX_SIZE 100

typedef struct {
    int data[MAX_SIZE];
    int length;
} SeqList;

void InitList(SeqList* L) {
    L->length = 0;
}

int Insert(SeqList* L, int pos, int value) {
    if (pos < 1 || pos > L->length + 1) return 0;
    if (L->length >= MAX_SIZE) return 0;

    for (int i = L->length - 1; i >= pos - 1; i--) {
        L->data[i + 1] = L->data[i];  // 后移元素
    }
    L->data[pos - 1] = value;  // 插入元素
    L->length++;               // 更新长度
    return 1;                  // 插入成功
}

void PrintList(SeqList L) {
    for (int i = 0; i < L.length; i++) {
        printf("%d ", L.data[i]);
    }
    printf("\n");
}

int main() {
    SeqList L;
    InitList(&L);

    Insert(&L, 1, 10);
    Insert(&L, 2, 20);
    Insert(&L, 2, 15);
    PrintList(L);

    return 0;
}
