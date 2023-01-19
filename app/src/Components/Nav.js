import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Nav() {
  let navigate = useNavigate();

  return (
    <nav id="Navigator">
      <div class="Concept_Links" onClick={() => navigate("Definitions")}>Common Terms</div>
      <div class="Concept_Links" onClick={() => navigate("BinaryHeap")}>Binary Heap</div>
      <div class="Concept_Links" onClick={() => navigate("BinarySearch")}>Binary Search</div>
      <div class="Concept_Links" onClick={() => navigate("BinaryTree")}>Binary Tree</div>
      <div class="Concept_Links" onClick={() => navigate("BreadthFirstSearch")}>Breadth First Search</div>
      <div class="Concept_Links" onClick={() => navigate("BubbleSort")}>Bubble Sort</div>
      <div class="Concept_Links" onClick={() => navigate("DepthFirstSearch")}>Depth First Search</div>
      <div class="Concept_Links" onClick={() => navigate("Dijkstra")}>Dijkstra's Algorithm</div>
      <div class="Concept_Links" onClick={() => navigate("DoublyLinkedList")}>Doubly Linked List</div>
      <div class="Concept_Links" onClick={() => navigate("DynamicProgramming")}>Dynamic Programming</div>
      <div class="Concept_Links" onClick={() => navigate("FrequencyCounter")}>Frequency Counter</div>
      <div class="Concept_Links" onClick={() => navigate("Graphs")}>Graphs</div>
      <div class="Concept_Links" onClick={() => navigate("HashTables")}>Hash Tables</div>
      <div class="Concept_Links" onClick={() => navigate("Kruskal")}>Kruskal's Algorithm</div>
      <div class="Concept_Links" onClick={() => navigate("MergeSort")}>Merge Sort</div>
      <div class="Concept_Links" onClick={() => navigate("InsertionSort")}>Insertion Sort</div>
      <div class="Concept_Links" onClick={() => navigate("Prim")}>Prim's Algorithm</div>
      <div class="Concept_Links" onClick={() => navigate("PriorityQueue")}>Priority Queue</div>
      <div class="Concept_Links" onClick={() => navigate("Queue")}>Queue</div>
      <div class="Concept_Links" onClick={() => navigate("QuickSort")}>Quick Sort</div>
      <div class="Concept_Links" onClick={() => navigate("RadixSort")}>Radix Sort</div>
      <div class="Concept_Links" onClick={() => navigate("Recursion")}>Recursion</div>
      <div class="Concept_Links" onClick={() => navigate("SelectionSort")}>Selection Sort</div>
      <div class="Concept_Links" onClick={() => navigate("SinglyLinkedList")}>Singly Linked List</div>
      <div class="Concept_Links" onClick={() => navigate("SlidingWindow")}>Sliding Window</div>
      <div class="Concept_Links" onClick={() => navigate("SpaceComplexity")}>Space Complexity</div>
      <div class="Concept_Links" onClick={() => navigate("Stack")}>Stack</div>
      <div class="Concept_Links" onClick={() => navigate("StringSearch")}>String Search</div>
      <div class="Concept_Links" onClick={() => navigate("TimeComplexity")}>Time Complexity</div>
      <div class="Concept_Links" onClick={() => navigate("UnionFind")}>Union Find</div>
    </nav>
  )
}
