import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Kruskal() {

  let navigate = useNavigate();

  const Implementation =
  `kruskalsMST() {
    const MST = new Graph();
    this.nodes.forEach(node => MST.addNode(node));
    if (this.nodes.length === 0) {
       return MST;
    }
 
    edgeQueue = new PriorityQueue(this.nodes.length * this.nodes.length);
 
    for (let node in this.edges) {
       this.edges[node].forEach(edge => {
          edgeQueue.enqueue([node, edge.node], edge.weight);
       });
    }
 
    let uf = new UnionFind(this.nodes);
 
    while (!edgeQueue.isEmpty()) {
       let nextEdge = edgeQueue.dequeue();
       let nodes = nextEdge.data;
       let weight = nextEdge.priority;
 
       if (!uf.connected(nodes[0], nodes[1])) {
          MST.addEdge(nodes[0], nodes[1], weight);
          uf.union(nodes[0], nodes[1]);
       }
    }
    return MST;
 }`

  return (
    <div class="Concept_page">
      <div class="Concept_title">Kruskal's Algorithm</div>
      <div class="Container font-m">
        <br /><li>
          Prerequisites:
          <ref class="Link" onClick={() => navigate("../Prim")}> <u>Prim's Algorithm</u></ref>
        </li>
        <ul>
          <div class="Section">
            <li>Solves the Minimal Cost Spanning Tree problem, which takes as input a connected, undirected Graph where each edge has a distance or weight measured attached, the Minimal Cost Spanning Tree is the graph containing the vertices of the Graph along with a subset of its edges that: </li>
            <ul class="font-sm">
              <li>1) Has minimum total cost as measured by summing the values for all of the edges in the subset</li>
              <li>2) Keeps the vertices connected</li>
              <li>3) Contains no cycles</li>
            </ul>
          </div>
          <div class="Section"><li>Prim's algorithm is a greedy algorithm which selects the best option at each step</li></div>
          <div class="Section">
            <li>
              How Kruskal's algorithm works: 
              <ul class="font-sm">
                <li>1) Sort all the edges from low weight to high</li>
                <li>2) Take the edge with the lowest weight and add it to the spanning tree. If adding the edge created a cycle, then reject this edge</li>
                <li>3) Keep adding edges until we reach all vertices</li>
              </ul>
            </li>
          </div>
          <div class="Section"><li>The time complexity Of Kruskal's Algorithm is: O(E log E).</li></div>
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
