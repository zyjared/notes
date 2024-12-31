class TreeNode:
    def __init__(self, key):
        self.key = key
        self.height = 1
        self.left: TreeNode = None
        self.right: TreeNode = None


class AVLTree:
    def get_height(self, node: TreeNode):
        if not node:
            return 0
        return node.height

    def get_balance(self, node: TreeNode):
        if not node:
            return 0
        return self.get_height(node.left) - self.get_height(node.right)

    def right_rotate(self, node: TreeNode):
        left = node.left
        node.left = left.right # 遵循二叉搜索树的性质
        left.right = node
        node.height = 1 + max(self.get_height(node.left),
                              self.get_height(node.right))
        left.height = 1 + max(self.get_height(left.left),
                              self.get_height(left.right))
        return left

    def left_rotate(self, node: TreeNode):
        right = node.right
        node.right = right.left # 遵循二叉搜索树的性质
        right.left = node
        node.height = 1 + max(self.get_height(node.left),
                              self.get_height(node.right))
        right.height = 1 + max(self.get_height(right.left),
                               self.get_height(right.right))
        return right

    def insert(self, root: TreeNode, key):
        if not root:
            return TreeNode(key)
        if key < root.key:
            root.left = self.insert(root.left, key)
        elif key > root.key:
            root.right = self.insert(root.right, key)
        else:
            return root

        root.height = 1 + max(self.get_height(root.left),
                              self.get_height(root.right))
        balance = self.get_balance(root)
        # LL型：在结点的左子树的左节点插入新结点导致失衡
        if balance > 1 and key < root.left.key:
            return self.right_rotate(root)
        # RR型：在结点的右子树的右节点插入新结点导致失衡
        if balance < -1 and key > root.right.key:
            return self.left_rotate(root)
        # LR型：在结点的左子树的右节点插入新结点导致失衡
        if balance > 1 and key > root.left.key:
            root.left = self.left_rotate(root.left)
            return self.right_rotate(root)
        # RL型：在结点的右子树的左节点插入新结点导致失衡
        if balance < -1 and key < root.right.key:
            root.right = self.right_rotate(root.right)
            return self.left_rotate(root)
        return root

    def in_order(self, root):
        result = []

        def _in_order(node):
            if not node:
                return
            _in_order(node.left)
            result.append(node.key)
            _in_order(node.right)
        _in_order(root)
        return result
