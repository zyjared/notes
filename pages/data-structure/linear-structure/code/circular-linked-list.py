class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next


class CircularLinkedList:
    def __init__(self):
        self.head = None

    def is_last_node(self, node):
        r'''判断 node 是不是最后一个结点'''
        return node.next is self.head

    def append(self, data):
        node = Node(data)
        if self.head is None:
            self.head = node
        else:
            p = self.head
            while not self.is_last_node(p):
                p = p.next
            p.next = node

        # 将尾节点指向头节点
        node.next = self.head

    def print(self):
        if self.head is None:
            return None

        p = self.head
        while p.next is not self.head:
            print(p.data, end=' ')
            p = p.next
        print(p.data)
