import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  let navigate = useNavigate();

  return (
    <div id="Navigator">
      <div class="Concept_Links" onClick={() => navigate("BinarySearch")}>Binary Search</div>
      <div class="Concept_Links"  onClick={() => navigate("BubbleSort")}>Bubble Sort</div>
      <div class="Concept_Links"  onClick={() => navigate("QuickSort")}>Quick Sort</div>
      <div class="Concept_Links"  onClick={() => navigate("MergeSort")}>Merge Sort</div>
      <div class="Concept_Links"  onClick={() => navigate("HashTables")}>Hash Tables</div>
      <div class="Concept_Links"  onClick={() => navigate("BreadthFirstSearch")}>Breadth First Search</div>
      <div class="Concept_Links"  onClick={() => navigate("DepthFirstSearch")}>Depth First Search</div>
    </div>
  )
}
