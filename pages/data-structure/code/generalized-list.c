#include <stdio.h>
#include <stdlib.h>

typedef enum { ATOM, LIST } ElementType;

typedef struct GList {
    ElementType tag;        // ATOM 或 LIST
    union {
        int atom;           // 原子元素（整数）
        struct GList* sub;  // 子表
    } value;
    struct GList* next;     // 下一个元素
} GList;

GList* createAtom(int value) {
    GList* newNode = (GList*)malloc(sizeof(GList));
    newNode->tag = ATOM;
    newNode->value.atom = value;
    newNode->next = NULL;
    return newNode;
}

GList* createList(GList* head) {
    GList* newNode = (GList*)malloc(sizeof(GList));
    newNode->tag = LIST;
    newNode->value.sub = head;
    newNode->next = NULL;
    return newNode;
}

// 递归遍历
void traverseGList(GList* glist) {
    if (glist == NULL) return;

    if (glist->tag == ATOM) {
        printf("%d ", glist->value.atom);
    }
    else {
        printf("(");
        traverseGList(glist->value.sub); // 递归遍历子表
        printf(")");
    }

    if (glist->next) {
        printf(", ");
        traverseGList(glist->next);
    }
}

// 递归查找
int searchElement(GList* glist, int target) {
    if (glist == NULL) return 0;

    if (glist->tag == ATOM) {
        return glist->value.atom == target;  // 如果是原子元素，检查是否匹配
    }
    else {
        return searchElement(glist->value.sub, target);  // 如果是子表，递归查找
    }
}

// 计算深度
int depth(GList* glist) {
    if (glist == NULL) return 0;

    if (glist->tag == ATOM) {
        return 1;
    }
    else {
        int subDepth = depth(glist->value.sub);
        return 1 + subDepth;
    }
}
