from enum import Enum


class Flag(Enum):
    RED = 'red'
    BLACK = 'black'


class Node:
    left: 'Node'
    right: 'Node'
    parent: 'Node'

    def __init__(self, key, color: Flag = Flag.RED):
        self.key = key
        self.color = color
        self.left = None
        self.right = None
        self.parent = None


class RedBlackTree:
    def __init__(self):
        self.NIL = Node(None, Flag.BLACK)
        self.root = self.NIL

    def right_rotate(self, node: Node):
        left = node.left
        node.left = left.right
        if left.right != self.NIL:
            left.right.parent = node
        left.parent = node.parent

        # 更改原 node.parent 相关指向
        if node.parent is None:
            self.root = left
        elif node == node.parent.right:
            node.parent.right = left
        else:
            node.parent.left = left

        left.right = node
        node.parent = left

    def left_rotate(self, node: Node):
        right = node.right
        node.right = right.left
        if right.left != self.NIL:
            right.left.parent = node
        right.parent = node.parent

        # 更改原 node.parent 相关指向
        if node.parent is None:
            self.root = right
        elif node == node.parent.left:
            node.parent.left = right
        else:
            node.parent.right = right

        right.left = node
        node.parent = right

    def insert(self, key):
        node = Node(key)
        node.left = self.NIL
        node.right = self.NIL
        node.parent = None

        parent: Node = None
        cur = self.root
        while cur != self.NIL:
            parent = cur
            if key < cur.key:
                cur = cur.left
            else:
                cur = cur.right

        node.parent = parent
        if parent is None:
            node.color = Flag.BLACK
            self.root = node
        elif key < parent.key:
            parent.left = node
        else:
            parent.right = node

        self.insert_fixup(node)

    def insert_fixup(self, node: Node):
        while node.parent and node.parent.color == Flag.RED:
            if node.parent == node.parent.parent.left:
                uncle = node.parent.parent.right
                if uncle.color == Flag.RED:
                    node.parent.color = Flag.BLACK
                    uncle.color = Flag.BLACK
                    node.parent.parent.color = Flag.RED
                    node = node.parent.parent
                else:
                    if node == node.parent.right:
                        node = node.parent
                        self.left_rotate(node)

                    node.parent.color = Flag.BLACK
                    node.parent.parent.color = Flag.RED
                    self.right_rotate(node.parent.parent)
            else:
                uncle = node.parent.parent.left
                if uncle.color == Flag.RED:
                    node.parent.color = Flag.BLACK
                    uncle.color = Flag.BLACK
                    node.parent.parent.color = Flag.RED
                    node = node.parent.parent
                else:
                    if node == node.parent.left:
                        node = node.parent
                        self.right_rotate(node)

                    node.parent.color = Flag.BLACK
                    node.parent.parent.color = Flag.RED
                    self.left_rotate(node.parent.parent)

        self.root.color = Flag.BLACK
