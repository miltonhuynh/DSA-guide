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
          <li>Goes through every node at the same level from the root before traversing down a level</li><br/>
          <img src={require('../images/BFS.png')} style={{width: "50vw"}} alt="Breadth First Search illustration"></img><br/><br/>
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
              <li>Return the variable that stores the values</li><br/>
            </ul>
          </li>
          <li>
            JavaScript Implementation:
            <div class="Code">
              <pre>
                <code>
                  {implementation}
                </code>
              </pre>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
