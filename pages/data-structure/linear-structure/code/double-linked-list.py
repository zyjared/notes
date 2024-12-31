class Node:
    def __init__(self, data=None, *, prev=None, next=None):
        self.data = data
        self.prev = prev
        self.next = next


class DoubleLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None  # 增加尾节点指针

    def append(self, data):
        node = Node(data)
        if self.tail is None:
            self.head = self.tail = node #  None <- node -> None
        else:
            self.tail.next = node
            node.prev = self.tail
            self.tail = node
