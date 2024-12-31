class CircularQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.queue = [None] * capacity # 不再动态分配内存
        self.front = 0
        self.rear = 0
        self.size = 0

    def enqueue(self, data):
        if self.is_full():
            raise OverflowError("队列已满")
        self.queue[self.rear] = data
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1

    def dequeue(self):
        if self.is_empty():
            return None
        data = self.queue[self.front]
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return data

    def front_element(self):
        if self.is_empty():
            return None
        return self.queue[self.front]

    def is_empty(self):
        return self.size == 0

    def is_full(self):
        return self.size == self.capacity

    def current_size(self):
        return self.size

    def capacity(self):
        return self.capacity