import React from 'react'

export default function BinaryHeap() {
  return (
    <div class="Concept_page">
      <div class="Concept_title">Binary Heap</div>
      <div class="Container font-m">
        <ul>
            <li>
              Very similar to a Binary Search Tree, but with some different rules
              <ul class="font-sm">
                <li>In a Max Binary Heap, parent nodes are always larger than child nodes</li>
                <li>In a Min Binary Heap, parent nodes are always smaller than child nodes</li>
              </ul>
            </li><br/>
            <li>
              Max Binary Heaps: 
              <ul class="font-sm">
                <li>Each parent has at most two nodes</li>
                <li>The value of each parent node is always greater than its child nodes</li>
                <li>As compact as possible, all children of each node are as full as they can be and left children are filled first</li>
              </ul><br/>
            </li>
            <li>Binary Heaps are used to implement Priority Queues, which are very commonly used data structures</li><br/>
            <li>Also used with graph traversal algorithms</li>
            <li>
              Binary Heaps can be stored in a list or an array: 
              <img src={require('../images/BinaryHeapArray.png')} style={{width: "5 0vw"}} alt="Binary Heap array illustration"></img><br/>
              <ul class="font-sm">
                <li>For any index of array n, the left child is stored at 2n + 1 and the right child is stored at 2n + 2</li>
                <li>For any child at index n, its parent is at index (n - 1) / 2, floored</li>
              </ul>
            </li>
            
        </ul>
      </div>
    </div>
  )
}
