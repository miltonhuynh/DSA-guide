import React from 'react'

export default function SinglyLinkedList() {
  return (
    <div class="Concept_page">
      <div class="Concept_title">Singly Linked List</div>
      <div class="Container">
        <ul>
          <div class="font-m">
            <li>Each node points to the next item, unlike doubly linked list which points to the previous and next item.</li><br/>
            <li>Does not have indexes, connected via nodes with a next pointer, random access is not allowed.</li><br/>
            <li>Unlike arrays, insertion and deletion is not as time consuming, don't need to re-index every element.</li><br/>
            <li>Implementation steps:</li>
            <div class="indent">
              <div>Node</div>
              <div class="indent font-sm">1) Create a node that contains a variable that holds a value and a pointer to the next node.</div>
            </div>
            <div class="indent">
              <div>Push</div>
              <div class="indent font-sm">2) Let this function accept a value</div>
              <div class="indent font-sm">3) Create a new node using the value passed to the function</div>
              <div class="indent font-sm">4) If there is no head property on the list, set the head and tail to be the newly created node</div>
              <div class="indent font-sm">5) Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node</div>
              <div class="indent font-sm">6) Increment the length by 1</div>
              <div class="indent font-sm">7) Return the linked list</div>
            </div>
            <div class="indent">
              <div>Pop</div>
              <div class="indent font-sm">1)</div>
            </div>
          </div>
        </ul>
        <img src={require('../images/sll.png')} style={{width: "60vw"}} alt="Singly linked list illustration"></img>
      </div>
    </div>
  )
}
