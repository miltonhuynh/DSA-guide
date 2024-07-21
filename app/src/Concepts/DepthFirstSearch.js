import React from 'react'

export default function DepthFirstSearch() {

  const preorder =
  `class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def DFSPreOrder(self):
        data = []

        def traverse(node):
            if not node:
                return
            data.append(node.value)
            if node.left:
                traverse(node.left)
            if node.right:
                traverse(node.right)

        traverse(self.root)
        return data
}`

  const postorder =
  `class BinaryTree:
    def DFSPostOrder(self):
        data = []

        def traverse(node):
            if not node:
                return
            if node.left:
                traverse(node.left)
            if node.right:
                traverse(node.right)
            data.append(node.value)

        traverse(self.root)
        return data
}`

  const inorder =
  `class BinaryTree:
    def DFSInOrder(self):
        data = []

        def traverse(node):
            if not node:
                return
            if node.left:
                traverse(node.left)
            data.append(node.value)
            if node.right:
                traverse(node.right)

        traverse(self.root)
        return data
}`

  return (
    <div class="Concept_page">
      <h1>Depth First Search</h1>
      <main>
        <ul>
          <section><li>Starts at the root node and explores as far as possible along each branch before backtracking</li></section>
          <section><li>Time Complexity is the same as BFS, but takes up less space in trees with less depth</li></section>
          <section>
            <li>There are three variations of Depth First Search: </li>
            <ul class="font-sm">
              <li>Pre-order</li>
              <li>Post-order</li>
              <li>In-order</li>
            </ul>
          </section>
          <section>
            <li>1) <u>Pre-order</u></li>
            <ul class="font-sm">
              <li>Visits the root first</li>
              <li>Traverses the left subtree and then the right subtree</li>
              <li>Useful for searching for an element within a tree</li><br/>
              <img src={require('../images/DFSpreorder.png')} style={{width: "30vw"}} alt="DFS pre-order illustration"></img><br/>
              <li>
                Implementation steps:
                <ul class="font-xsm">
                  <li>Create a variable to store the values of nodes visited</li>
                  <li>Store the root of the BST in a variable to store the current</li>
                  <li>
                    Write a helper function which accepts a node
                    <ul class="font-xxsm">
                      <li>Push the value of the node to the variable that stores the values</li>
                      <li>If the node has a left property, call the helper function with the left property on the node</li>
                      <li>If the node has a right property, call the helper function with the right property on the node</li>
                    </ul>
                  <li>Invoke the helper function with the current variable</li>
                  <li>Return the array of values</li>
                  </li>
                </ul><br/>
                JavaScript Implementation:
                <div class="Code">
                  <pre>
                    <code>
                      {preorder}
                    </code>
                  </pre>
                </div>
              </li>
            </ul>
          </section>
          <section>
            <li>2) <u>Post-order</u></li>
            <ul class="font-sm">
              <li>Traverses the left subtree and then the right subtree, and lastly the root</li>
              <li>Useful for deleting trees since we need to visit children nodes first before the parent</li><br/>
              <img src={require('../images/DFSpostorder.png')} style={{width: "30vw"}} alt="DFS post-order illustration"></img><br/>
              <li>
                Implementation steps:
                <ul class="font-xsm">
                  <li>Create a variable to store the values of nodes visited</li>
                  <li>Store the root of the BST in a variable to store the current</li>
                  <li>
                    Write a helper function which accepts a node
                    <ul class="font-xxsm">
                      <li>If the node has a left property, call the helper function with the left property on the node</li>
                      <li>If the node has a right property, call the helper function with the right property on the node</li>
                      <li>Push the value of the node to the variable that stores the values</li> 
                    </ul>
                  <li>Invoke the helper function with the current variable</li>
                  <li>Return the array of values</li>
                  </li>
                </ul><br/>
                Python Implementation:
                <div class="Code">
                  <pre>
                    <code>
                      {postorder}
                    </code>
                  </pre>
                </div>
              </li>
            </ul>
          </section>
          <section>
            <li>3) <u>In-order</u></li>
            <ul class="font-sm">
              <li>Traverses the left subtree and then the root and lastly the right subtree</li>
              <li>Useful for retrieving the sorted contents of a Binary Search Tree in ascending order</li><br/>
              <img src={require('../images/DFSinorder.png')} style={{width: "30vw"}} alt="DFS in-order illustration"></img><br/>
              <li>
                Implementation steps:
                <ul class="font-xsm">
                  <li>Create a variable to store the values of nodes visited</li>
                  <li>Store the root of the BST in a variable to store the current</li>
                  <li>
                    Write a helper function which accepts a node
                    <ul class="font-xxsm">
                      <li>If the node has a left property, call the helper function with the left property on the node</li>
                      <li>Push the value of the node to the variable that stores the values</li> 
                      <li>If the node has a right property, call the helper function with the right property on the node</li>                           
                    </ul>
                  <li>Invoke the helper function with the current variable</li>
                  <li>Return the array of values</li>
                  </li>
                </ul><br/>
              </li>
            </ul>
          </section></ul>
        <div class="font-l">Python Implementation (In-order):</div>
        <section>
          <pre>
            <code>
              {inorder}
            </code>
          </pre>
        </section>
        <div class="font-l">Python Implementation (Pre-order):</div>
        <section>
          <pre>
            <code>
              {preorder}
            </code>
          </pre>
        </section>
        <div class="font-l">Python Implementation (Post-order):</div>
        <section>
          <pre>
            <code>
              {postorder}
            </code>
          </pre>
        </section>
        <div class="font-l">LeetCode examples</div>
          <section>
            <li><a class="Link-green" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/invert-binary-tree/">Invert Binary Tree [Easy]</a></li>
            <li><a class="Link-yellow" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/balance-a-binary-search-tree/">Balance a Binary Search Tree [Medium]</a></li>
            <li><a class="Link-red" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/sum-of-distances-in-tree/">Sum of Distances in Tree [Hard]</a></li>
        </section><br/>
      </main>
    </div>
  )
}
