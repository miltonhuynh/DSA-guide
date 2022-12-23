import React from 'react'

export default function Prim() {

  const Implementation = 
  `primsMST() {
    // Initialize graph that'll contain the MST
    const MST = new Graph();
    if (this.nodes.length === 0) {
       return MST;
    }
 
 
    // Select first node as starting node
    let s = this.nodes[0];
 
 
    // Create a Priority Queue and explored set
    let edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);
    let explored = new Set();
    explored.add(s);
    MST.addNode(s);
 
 
    // Add all edges from this starting node to the PQ taking weights as priority
    this.edges[s].forEach(edge => {
       edgeQueue.enqueue([s, edge.node], edge.weight);
    });
 
 
    // Take the smallest edge and add that to the new graph
    let currentMinEdge = edgeQueue.dequeue();
    while (!edgeQueue.isEmpty()) {
 
 
       // COntinue removing edges till we get an edge with an unexplored node
       while (!edgeQueue.isEmpty() && explored.has(currentMinEdge.data[1])) {
          currentMinEdge = edgeQueue.dequeue();
       }
       let nextNode = currentMinEdge.data[1];
 
 
       // Check again as queue might get empty without giving back unexplored element
       if (!explored.has(nextNode)) {
          MST.addNode(nextNode);
          MST.addEdge(currentMinEdge.data[0], nextNode, currentMinEdge.priority);
          // Again add all edges to the PQ
          this.edges[nextNode].forEach(edge => {
             edgeQueue.enqueue([nextNode, edge.node], edge.weight);
          });
 
 
          // Mark this node as explored explored.add(nextNode);
          s = nextNode;
       }
    }
    return MST;
 }`

  return (
    <div class="Concept_page">
      <div class="Concept_title">Prim's Algorithm</div>
      <div class="Container font-m">
        <ul>
          <div class="Section">
            <li>Solves the Minimal Cost Spanning Tree problem, which takes as input a connected, undirected Graph where each edge has a distance or weight measured attached, the Minimal Cost Spanning Tree is the graph containing the vertices of the Graph along with a subset of its edges that: </li>
            <ul class="font-sm">
              <li>1) Has minimum total cost as measured by summing the values for all of the edges in the subset</li>
              <li>2) Keeps the vertices connected</li>
              <li>3) Contains no cycles</li>
            </ul>
          </div>
          <br/>
          <div class="Section"><li>Prim's algorithm is a greedy algorithm which selects the best option at each step, it always starts with a single node and it moves through several adjacent nodes, in order to explore all of the connected edges along the way.</li></div>
          <div class="Section">
            <li>
              We start from one vertex and keep adding edges with the lowest weight until we reach our goal.
              <ul class="font-sm">
                <li>1) Initialize the minimum spanning tree with a vertex chosen at random.</li>
                <li>2) Find all the edges that connect the tree to new vertices, find the minimum and add it to the tree</li>
                <li>3) Keep repeating step 2 until we get a minimum spanning tree, if there are multiple choices, choose one at random</li>
              </ul>
            </li>
          </div>
        </ul>
        <div class="font-l">JavaScript Implementation</div>
        <div class="Code Section">
          <pre>
            <code>
              {Implementation}
            </code>
          </pre>
        </div>
        <div class="Section">
          <div class="font-l">LeetCode examples</div>
            <div class="font-m indent">
              <li><a class="Link-yellow" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/min-cost-to-connect-all-points/">Min Cost to Connect All Points [Medium]</a></li>
              <li><a class="Link-red" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/">Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree [Hard]</a></li>
          </div>
        </div>
      </div>
    </div>
  )
}
