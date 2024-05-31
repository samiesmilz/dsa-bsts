class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let node = this.root;
    while (node !== null) {
      if (val < node.val) {
        if (node.left === null) {
          node.left = new Node(val);
          return this; // Return the current tree
        } else {
          node = node.left;
        }
      } else if (val > node.val) {
        if (node.right === null) {
          node.right = new Node(val);
          return this; // Return the current tree
        } else {
          node = node.right;
        }
      } else {
        return this;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    // If the tree is empty and this is the root insertion
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    if (!node) {
      return new Node(val);
    }
    if (val < node.val) {
      node.left = this.insertRecursively(val, node.left);
    } else if (val > node.val) {
      node.right = this.insertRecursively(val, node.right);
    }
    // Return the node so that the parent node can link to it
    return node;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let node = this.root;
    while (node !== null) {
      if (val === node.val) {
        return node;
      } else if (val < node.val) {
        node = node.left;
      } else if (val > node.val) {
        node = node.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!node) {
      return undefined;
    }
    if (node.val === val) {
      return node;
    }
    if (val < node.val) {
      return this.findRecursively(val, node.left);
    } else {
      return this.findRecursively(val, node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node) {
        // Visit the current node
        visited.push(node.val);
        traverse(node.left);
        traverse(node.right);
      }
    };
    // Start the traversal from the root
    traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        visited.push(node.val);
        traverse(node.right);
      }
    };
    // Start the traversal from the root
    traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        visited.push(node.val);
      }
    };
    // Start the traversal from the root
    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visited = [];
    const queue = [this.root];

    while (queue.length !== 0) {
      let node = queue.shift(); // Dequeue the first node from the queue
      visited.push(node.val); // Push the visited node to the array
      // Enqueue the left and right children of the visited node, if they exist
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    this.root = this._removeNode(this.root, val);
  }

  _removeNode(node, val) {
    if (!node) {
      return null; // Value not found in the tree
    }

    if (val < node.val) {
      node.left = this._removeNode(node.left, val);
    } else if (val > node.val) {
      node.right = this._removeNode(node.right, val);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        // Node has two children
        const successor = this._removeMin(node.right);
        node.val = successor.val;
        node.right = this._removeNode(node.right, successor.val);
      }
    }

    return node;
  }

  _removeMin(node) {
    if (!node.left) {
      return node;
    }
    return this._removeMin(node.left);
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {
    return this._checkBalanced(this.root);
  }

  _checkBalanced(node) {
    if (!node) {
      return true; // An empty subtree is considered balanced
    }

    // Calculate the height of the left and right subtrees
    const leftHeight = this._getHeight(node.left);
    const rightHeight = this._getHeight(node.right);

    // Check if the absolute difference in heights is at most one
    if (Math.abs(leftHeight - rightHeight) > 1) {
      return false; // Tree is not balanced
    }

    // Recursively check if both left and right subtrees are balanced
    return this._checkBalanced(node.left) && this._checkBalanced(node.right);
  }

  _getHeight(node) {
    if (!node) {
      return 0; // Height of an empty subtree is 0
    }

    // Calculate the height of the subtree recursively
    const leftHeight = this._getHeight(node.left);
    const rightHeight = this._getHeight(node.right);

    // Height of the subtree is one more than the maximum height of its children
    return Math.max(leftHeight, rightHeight) + 1;
  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    // Check if the BST is empty
    if (!this.root) {
      return undefined;
    }

    let current = this.root;
    let previous = null;

    // Traverse the tree in a right-root-left order
    while (current.right) {
      previous = current;
      current = current.right;
    }

    // If the largest node has a left child, its parent is the second largest
    if (current.left) {
      current = current.left;
      while (current.right) {
        current = current.right;
      }
      return current.val;
    }

    // If the largest node has no left child, return the value of its parent
    if (previous) {
      return previous.val;
    }

    // If the root is the only node in the tree, return undefined
    return undefined;
  }
}

module.exports = BinarySearchTree;
