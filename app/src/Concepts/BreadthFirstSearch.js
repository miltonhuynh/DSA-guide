import React from 'react'

export default function BreadthFirstSearch() {

  const implementation =
    `BFS(){
    var node = this.root,
        data = [],
        queue = [];
    queue.push(node);

    while(queue.length){
       node = queue.shift();
       data.push(node.value);
       if(node.left) queue.push(node.left);
       if(node.right) queue.push(node.right);
    }
    return data;
}`

  return (
    <div class="Concept_page">
      <div class="Concept_title">Breadth First Search</div>
      <div class="Container font-m">
        <ul>
          <div class="Section"><li>An algorithm for searching a tree data structure for a node that satisfies a given property</li></div>
          <div class="Section">
            <li>
              Goes through every node at the same level from the root before traversing down a level
            </li>
            <img src={require('../images/BFS.png')} style={{ width: "50vw" }} alt="Breadth First Search illustration"></img><br />
          </div>
          <div class="Section">
            <li>
              Implementation Steps
              <ul class="font-sm">
                <li>Create a queue (a FIFO structure) and a variable to store the values of nodes visited</li>
                <li>Place the root node in the queue</li>
                <li>
                  Loop as long as there is anything in the queue:
                  <ul class="font-xsm">
                    <li>Dequeue a node from the queue and push the value of the node into into the variable that stores the nodes</li>
                    <li>If there is a left property on the node dequeued, add it to the queue</li>
                    <li>If there is a right property on the node dequeued, add it to the queue</li>
                  </ul>
                </li>
                <li>Return the variable that stores the values</li>
              </ul>
            </li>
          </div>
        </ul>
        <div class="font-l">JavaScript Implementation:</div>
        <div class="Code Section">
          <pre>
            <code>
              {implementation}
            </code>
          </pre>
        </div>
        <div class="Section">
          <div class="font-l">LeetCode examples</div>
          <div class="font-m indent">
            <li><a class="Link-green" rel="noreferrer" href="https://leetcode.com/problems/minimum-depth-of-binary-tree/">Minimum Depth of Binary Tree [Easy]</a></li>
            <li><a class="Link-yellow" rel="noreferrer" href="https://leetcode.com/problems/binary-tree-level-order-traversal/">Binary Tree Level Order Traversal [Medium]</a></li>
            <li><a class="Link-red" rel="noreferrer" href="https://leetcode.com/problems/word-ladder/">Word Ladder [Hard]</a></li>
          </div>
        </div>
      </div>
    </div>
  )
}
