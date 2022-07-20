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
          </div>
        </ul>
        <img src={require('../images/sll.png')} style={{width: "60vw"}} alt="Singly linked list illustration"></img>
      </div>
    </div>
  )
}
