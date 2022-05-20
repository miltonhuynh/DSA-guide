import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav() {
  let navigate = useNavigate();

  return (
    <div id="Navigator">
      <div onClick={() => navigate("BinarySearch")}>Binary Search</div>
      <div onClick={() => navigate("BubbleSort")}>Bubble Sort</div>
      <div onClick={() => navigate("QuickSort")}>Quick Sort</div>
      <div onClick={() => navigate("HashTables")}>Hash Tables</div>
    </div>
  )
}
