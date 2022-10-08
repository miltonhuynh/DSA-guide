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
          <li>Finds the shortest path between two vertices on a graph</li><br/>
          <li>
            Uses:
            <ul class="font-sm">
              <li>GPS: finding the fastest route</li>
              <li>Network routing: finds open shortest path for data</li>
              <li>Biology: used to model the spread of viruses among humans</li>
              <li>Airline tickets: finding cheapest route to your destination</li>
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
