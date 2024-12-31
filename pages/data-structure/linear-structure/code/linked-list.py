class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next


class LinkedList:
    def __init__(self):
        self.head = None

    def unshift(self, data):
        r'''将 data 插入到链表头部'''
        node = Node(data, self.head)
        self.head = node

    def shift(self):
        r'''删除并返回链表头部的数据'''
        if self.head is None:
            return None

        data = self.head.data
        self.head = self.head.next
        return data

    def append(self, data):
        r'''将 data 插入到链表尾部'''
        node = Node(data)
        if self.head is None:
            self.head = node
        else:
            p = self.head
            while p.next is not None:
                p = p.next
            p.next = node

    def pop(self):
        r'''删除并返回链表尾部的数据'''
        if self.head is None:
            return None

        p = self.head
        if p.next is None:
            data = p.data
            self.head = None
        else:
            while p.next.next:
                p = p.next
            data = p.next.data
            p.next = None

        return data

    def print(self):
        r'''打印链表'''
        p = self.head
        while p is not None:
            print(p.data, end=' ')
            p = p.next
        print()
