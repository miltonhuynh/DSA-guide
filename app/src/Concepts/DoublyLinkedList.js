import React from 'react'

export default function DoublyLinkedList() {
  return (
    <div class="Concept_page">
      <div class="Concept_title">Doubly Linked List</div>
      <div class="Container">
        <ul>
          <div class="font-m">
            <li>Almost identical to Singly Linked Lists, except every node has another pointer to the previous node</li>
            <li>Can be traversed in both forward and backward directions, can quickly remove or add a new node before a given node</li>
            <li>Every node of requires extra space for a previous pointer.</li>
          </div>
        </ul>
      </div>
    </div>
  )
}
