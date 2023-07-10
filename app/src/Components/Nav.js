import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom";

export default function Nav() {
  let navigate = useNavigate();

  return (
    <nav id="Navigator">
      <NavLink to="Definitions" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Common Terms</NavLink>
      <NavLink to="BinaryHeap" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Binary Heap</NavLink>
      <NavLink to="BinarySearch" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Binary Search</NavLink>
      <NavLink to="BinaryTree" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Binary Tree</NavLink>
      <NavLink to="BreadthFirstSearch" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Breadth First Search</NavLink>
      <NavLink to="BubbleSort" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Bubble Sort</NavLink>
      <NavLink to="DepthFirstSearch" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Depth First Search</NavLink>
      <NavLink to="Dijkstra" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Dijkstra's Algorithm</NavLink>
      <NavLink to="DoublyLinkedList" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Doubly Linked List</NavLink>
      <NavLink to="DynamicProgramming" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Dynamic Programming</NavLink>
      <NavLink to="FrequencyCounter" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Frequency Counter</NavLink>
      <NavLink to="Graphs" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Graphs</NavLink>
      <NavLink to="HashTables" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Hash Tables</NavLink>
      <NavLink to="Kruskal" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Kruskal's Algorithm</NavLink>
      <NavLink to="MergeSort" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Merge Sort</NavLink>
      <NavLink to="InsertionSort" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Insertion Sort</NavLink>
      <NavLink to="Prim" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Prim's Algorithm</NavLink>
      <NavLink to="PriorityQueue" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Priority Queue</NavLink>
      <NavLink to="Queue" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Queue</NavLink>
      <NavLink to="QuickSort" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Quick Sort</NavLink>
      <NavLink to="RadixSort" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Radix Sort</NavLink>
      <NavLink to="Recursion" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Recursion</NavLink>
      <NavLink to="SelectionSort" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Selection Sort</NavLink>
      <NavLink to="SinglyLinkedList" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Singly Linked List</NavLink>
      <NavLink to="SlidingWindow" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Sliding Window</NavLink>
      <NavLink to="SpaceComplexity" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Space Complexity</NavLink>
      <NavLink to="Stack" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Stack</NavLink>
      <NavLink to="StringSearch" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>String Search</NavLink>
      <NavLink to="TimeComplexity" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Time Complexity</NavLink>
      <NavLink to="UnionFind" className={({ isActive }) => isActive ? 'Active_Link' : 'Inactive_Link'}>Union Find</NavLink>
    </nav>
  )
}
