import React from 'react'

export default function DepthFirstSearch() {

  const preorder =
  `DFSPreOrder(){
    var data = [];
    function traverse(node){
        data.push(node.value);
        if(node.left) traverse(node.left);
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
          <li>Starts at the root node and explores as far as possible along each branch before backtracking</li><br/>
          <li>Time Complexity is the same as BFS, but takes up less space in trees with less depth</li><br/>
          <li>There are three variations of Depth First Search: </li>
          <ul class="font-sm">
            <li>Pre-order</li>
            <li>Post-order</li>
            <li>In-order</li>
          </ul><br/>
          <li>1) <u>Pre-order</u></li>
          <ul class="font-sm">
            <li>Visits the root first</li>
            <li>Traverses the left subtree and then the right subtree</li>
            <li>Commonly used to create a copy of the tree</li>
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
        </ul>
      </div>
    </div>
  )
}
