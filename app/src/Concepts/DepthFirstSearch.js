import React from 'react'

export default function DepthFirstSearch() {

  const preorder =
  `DFSPreOrder() {
    var data = [];
    function traverse(node) {
        data.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
}`

  const postorder =
  `DFSPostOrder(){
    var data = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
        data.push(node.value);
    }
    traverse(this.root);
    return data;
}`

  const inorder =
  `DFSInOrder(){
    var data = [];
    function traverse(node){
        if(node.left) traverse(node.left);
        data.push(node.value);
        if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
}`

  return (
    <div class="Concept_page">
      <div class="Concept_title">Depth First Search</div>
      <div class="Container font-m">
        <ul>
          <div class="Section"><li>Starts at the root node and explores as far as possible along each branch before backtracking</li></div>
          <div class="Section"><li>Time Complexity is the same as BFS, but takes up less space in trees with less depth</li></div>
          <div class="Section">
            <li>There are three variations of Depth First Search: </li>
            <ul class="font-sm">
              <li>Pre-order</li>
              <li>Post-order</li>
              <li>In-order</li>
            </ul>
          </div>
          <div class="Section">
            <li>1) <u>Pre-order</u></li>
            <ul class="font-sm">
              <li>Visits the root first</li>
              <li>Traverses the left subtree and then the right subtree</li>
              <li>Useful for searching for an element within a tree</li><br/>
              <img src={require('../images/DFSpreorder.png')} style={{width: "30vw"}} alt="DFS pre-order illustration"></img><br/>
              <li><br/>
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
          </div>
          <div class="Section">
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
                JavaScript Implementation:
                <div class="Code">
                  <pre>
                    <code>
                      {postorder}
                    </code>
                  </pre>
                </div>
              </li>
            </ul>
          </div>
          <div class="Section">
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
          </div></ul>
        <div class="font-l">JavaScript Implementation:</div>
        <div class="Code Section">
          <pre>
            <code>
              {inorder}
            </code>
          </pre>
        </div>
        <div class="font-l">LeetCode examples</div>
          <div class="font-m indent">
            <li><a class="Link-green" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/invert-binary-tree/">Invert Binary Tree [Easy]</a></li>
            <li><a class="Link-yellow" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/balance-a-binary-search-tree/">Balance a Binary Search Tree [Medium]</a></li>
            <li><a class="Link-red" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/sum-of-distances-in-tree/">Sum of Distances in Tree [Hard]</a></li>
        </div><br/>
      </div>
    </div>
  )
}
