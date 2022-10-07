import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dijkstra() {

  let navigate = useNavigate();

  return (
    <div class="Concept_page">
      <div class="Concept_title">Dijkstra's algorithm</div>
      <div class="Container font-m">
        <ul>
          <li>Dijkstra's algorithm is used to traverse <ref class="Link" onClick={() => navigate("../Graphs")}><u>Graphs</u></ref> and uses a <ref class="Link" onClick={() => navigate("../PriorityQueue")}><u>Priority Queue</u></ref></li>
        </ul>
      </div>
    </div>
  )
}
