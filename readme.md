# Binary Search Tree (BST) Methods

A Binary Search Tree (BST) is a data structure that allows for efficient search, insertion, and removal operations while maintaining the order of its elements.

## Methods Overview

### 1. `insert(val)`

Inserts a new node with the specified value into the BST. This method iteratively traverses the tree to find the appropriate position for insertion and maintains the binary search tree property.

### 2. `insertRecursively(val)`

Inserts a new node with the specified value into the BST using recursion. This method recursively traverses the tree to find the appropriate position for insertion and maintains the binary search tree property.

### 3. `find(val)`

Searches the BST for a node with the specified value. If found, returns the node; otherwise, returns `undefined`. This method uses iteration to traverse the tree and efficiently search for the value.

### 4. `findRecursively(val)`

Searches the BST for a node with the specified value using recursion. If found, returns the node; otherwise, returns `undefined`. This method recursively traverses the tree and efficiently searches for the value.

### 5. `dfsPreOrder()`

Traverses the BST using pre-order Depth-First Search (DFS) and returns an array of visited nodes. In pre-order DFS, nodes are visited in the order: root, left subtree, right subtree.

### 6. `dfsInOrder()`

Traverses the BST using in-order Depth-First Search (DFS) and returns an array of visited nodes. In in-order DFS, nodes are visited in the order: left subtree, root, right subtree.

### 7. `dfsPostOrder()`

Traverses the BST using post-order Depth-First Search (DFS) and returns an array of visited nodes. In post-order DFS, nodes are visited in the order: left subtree, right subtree, root.

### 8. `bfs()`

Traverses the BST using Breadth-First Search (BFS) and returns an array of visited nodes. BFS visits nodes level by level, starting from the root.

### 9. `remove(val)`

Removes a node from the BST with the specified value. Returns the removed node if found; otherwise, returns `undefined`. This method handles various cases, including nodes with zero, one, or two children.

### 10. `isBalanced()`

Checks if the BST is balanced, i.e., if the heights of the left and right subtrees of every node differ by at most one. Returns `true` if balanced; otherwise, returns `false`.

### 11. `findSecondHighest()`

Finds the second highest value in the BST, if it exists. Otherwise, returns `undefined`. This method iteratively traverses the BST to find the second largest element by traversing in a right-root-left order.

### By - Samuel Abinsinguza
