class TreeNode:
    def __init__(self, data=None, left: 'TreeNode' = None, right: 'TreeNode' = None):
        self.data = data
        self.left = left
        self.right = right


class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, data):
        def _insert(node, data):
            if not node:
                return TreeNode(data)
            if data < node.data:
                node.left = _insert(node.left, data)
            else:
                node.right = _insert(node.right, data)
            return node

        self.root = _insert(self.root, data)

    @staticmethod
    def search(node, data):
        if not node:
            return None
        if data < node.data:
            return BinarySearchTree.search(node.left, data)
        elif data > node.data:
            return BinarySearchTree.search(node.right, data)
        else:
            return node

    @staticmethod
    def traverse_tree(node, callback=None):
        if not node:
            return
        BinarySearchTree.traverse_tree(node.left)
        if callback:
            callback(node.data)
        BinarySearchTree.traverse_tree(node.right)
