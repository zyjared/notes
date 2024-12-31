class SeqList:
    def __init__(self, max_size=100):
        self.data = [None] * max_size
        self.length = 0
        self.max_size = max_size

    def insert(self, pos, value):
        if pos < 1 or pos > self.length + 1:
            return False
        if self.length >= self.max_size:
            return False

        for i in range(self.length - 1, pos - 2, -1):
            self.data[i + 1] = self.data[i]
        self.data[pos - 1] = value
        self.length += 1
        return True

    def print_list(self):
        print([self.data[i] for i in range(self.length)])
