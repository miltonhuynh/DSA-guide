import React from 'react'

export default function Prim() {

  return (
    <div class="Concept_page">
      <div class="Concept_title">Prim's Algorithm</div>
      <div class="Container font-m">
        <ul>
          <li>Solves the Minimal Cost Spanning Tree problem, which takes as input a connected, undirected Graph where each edge has a distance or weight measured attached, the Minimal Cost Spanning Tree is the graph containing the vertices of the Graph along with a subset of its edges that: </li>
          <ul class="font-sm">
            <li>1) Has minimum total cost as measured by summing the values for all of the edges in the subset</li>
            <li>2) Keeps the vertices connected</li>
          </ul>
          <br/>
          <li>The MCST contains no cycles. If a proposed MCST did have a cycle, a cheaper MCST could be had by removing any one of the edges in the cycle. Thus, the MCST is a free tree with |V|−1 edges. The name “minimum-cost spanning tree” comes from the fact that the required set of edges forms a tree, it spans the vertices (i.e., it connects them together), and it has minimum cost</li><br/>
          <li>Prim's algorithm is a greedy algorithm which selects the best option at each step, it always starts with a single node and it moves through several adjacent nodes, in order to explore all of the connected edges along the way.</li>
        </ul>
      </div>
    </div>
  )
}
