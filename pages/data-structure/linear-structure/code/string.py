class String:
    def __init__(self, value):
        self.chars = list(value)

    def __repr__(self):
        return "".join(self.chars)

    def length(self):
        return len(self.chars)

    def concat(self, other):
        return String(self.chars + other.chars)

    # ...
