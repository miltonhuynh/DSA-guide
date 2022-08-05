import React from 'react'

export default function DoublyLinkedList() {
  return (
    <div class="Concept_page">
      <div class="Concept_title">Doubly Linked List</div>
      <div class="Container">
        <ul>
          <div class="font-m">
            <li>Almost identical to Singly Linked Lists, except every node has another pointer to the previous node</li><br/>
            <li>Can be traversed in both forward and backward directions, can quickly remove or add a new node before a given node</li><br/>
            <li>Every node of requires extra space for a previous pointer</li><br/>

            <li>Implementation Steps:</li>

            <ul><li>Node</li></ul>
            <div class="indent-extra font-sm">1) Create a node that contains a variable that holds a value and a pointer to the next and previous node.</div>
            
            <ul><li>Push (Adding a node to the beginning of list)</li></ul>
            <div class="indent-extra font-sm">
            <div>2) Create a new node with the value passed to the function</div>
            <div>3) If the head property is null (list is empty), set the head and tail to be the newly created node</div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}
