class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None


class LinkedQueue:
    def __init__(self):
        self.front = None
        self.rear = None
        self.size = 0

    def enqueue(self, data):
        new_node = Node(data)
        if self.is_empty():
            self.front = self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node
        self.size += 1

    def dequeue(self):
        if self.is_empty():
            return None
        data = self.front.data
        self.front = self.front.next
        if self.front is None:
            self.rear = None
        self.size -= 1
        return data

    def front_element(self):
        if self.is_empty():
            return None
        return self.front.data

    def is_empty(self):
        return self.size == 0

    def size(self):
        return self.size
