import React from 'react'

export default function BreadthFirstSearch() {

  const implementation =
    `def BreadthFirstSearch(self):
    if self.root is None:
        return []

    data = []
    queue = [self.root]

    while queue:
        node = queue.pop(0)
        data.append(node.value)

        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)

    return data
`

  return (
    <div class="Concept_page">
      <h1>Breadth First Search</h1>
      <main>
        <ul>
          <section><li>An algorithm for searching a tree data structure for a node that satisfies a given property</li></section>
          <section>
            <li>
              Goes through every node at the same level from the root before traversing down a level
            </li>
            <img src={require('../images/BFS.png')} style={{ width: "50vw" }} alt="Breadth First Search illustration"></img><br />
          </section>
          <section>
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
          </section>
        </ul>
        <div class="font-l">Python Implementation:</div>
        <section>
          <pre>
            <code>
              {implementation}
            </code>
          </pre>
        </section>
        <section>
          <div class="font-l">LeetCode examples</div>
          <div class="font-m indent">
            <li><a class="Link-green" rel="noreferrer" href="https://leetcode.com/problems/minimum-depth-of-binary-tree/">Minimum Depth of Binary Tree [Easy]</a></li>
            <li><a class="Link-yellow" rel="noreferrer" href="https://leetcode.com/problems/binary-tree-level-order-traversal/">Binary Tree Level Order Traversal [Medium]</a></li>
            <li><a class="Link-red" rel="noreferrer" href="https://leetcode.com/problems/word-ladder/">Word Ladder [Hard]</a></li>
          </div>
        </section>
      </main>
    </div>
  )
}
