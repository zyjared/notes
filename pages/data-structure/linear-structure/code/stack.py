class Stack:
    def __init__(self, max_size=100):
        self.data = [None] * max_size  # 顺序存储的栈
        self.top = -1                  # 栈顶指针
        self.max_size = max_size       # 栈最大容量

    def is_empty(self):
        return self.top == -1

    def push(self, value):
        if self.top >= self.max_size - 1:
            raise OverflowError("栈已满")
        self.top += 1
        self.data[self.top] = value

    def pop(self):
        if self.is_empty():
            raise IndexError("Stack underflow")
        value = self.data[self.top]
        self.top -= 1
        return value

    def peek(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.data[self.top]

    def print_stack(self):
        print(self.data[:self.top + 1])