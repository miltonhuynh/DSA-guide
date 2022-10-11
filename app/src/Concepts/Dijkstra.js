import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dijkstra() {

  let navigate = useNavigate();

  return (
    <div class="Concept_page">
      <div class="Concept_title">Dijkstra's algorithm</div>
      <div class="Container font-m">
        <ul>
          <li>Dijkstra's algorithm is used to traverse <ref class="Link" onClick={() => navigate("../Graphs")}><u>Graphs</u></ref> and uses a <ref class="Link" onClick={() => navigate("../PriorityQueue")}><u>Priority Queue</u></ref></li><br/>
          <li>It is a single source shortest path algorithm for graphs with non-negative edge weights</li><br/>
          <li>Finds the shortest path between two vertices on a graph</li><br/>
          <li>
            Common uses:
            <ul class="font-sm">
              <li>GPS: finding the fastest route</li>
              <li>Network routing: finds open shortest path for data</li>
              <li>Biology: used to model the spread of viruses among humans</li>
              <li>Airline tickets: finding cheapest route to your destination</li>
            </ul>
          </li><br/>
          <li>
            The approach:
            <ul class="font-sm">
              <li>1) Every time we want to visit a new node, pick the node with the smallest known distance to visit first</li>
              <li>2) Once we moved to the node we're going to visit, we look at each of its neighbors</li>
              <li>3) For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node</li>
              <li>4) If the new total distance to a node is less than the previous total, we store the new shorter distance for that node</li>
            </ul>
          </li><br/>
          <li>
            Algorithm overview:
            <ul class="font-sm">
              <li>1) Maintain a distance array where the distance to every node is positive infinity. Distance to start node is 0</li>
              <li>2) Maintain a Priority Queue of key-value pairs (index, distance) which tell you which node to visit next based on sorted minimum value</li>\
              <li>3) Start by inserting the key-value pair (s,0) into the Priority Queue and loop while it is not empty pulling out the next most promising (index, distance) pair</li>
              <li>4) Interate over all edges outwards from the current node and relax each edge apprending a new (index, distance) key-value pair to the Priority Queue for every relaxation</li>
            </ul>
          </li><br/>
          <li>
            Implementation steps:
            <ul class="font-sm">
              <li>Make sure your graph implementation has weighted edges</li>
            </ul>
          </li>
        </ul>
        <div class="font-l">JavaScript Implementation</div>
      </div>
    </div>
  )
}
