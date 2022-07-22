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
              <div>Node (Basic unit of data structure than can hold a value)</div>
              <div class="indent font-sm">1) Create a node that contains a variable that holds a value and a pointer to the next node.</div>
            </div>
            <div class="indent">
              <div>Push (Adding a node to the beginning of list)</div>
                <div class="indent font-sm">
                <div>2) Let this function accept a value</div>
                <div>3) Create a new node using the value passed to the function</div>
                <div>4) If there is no head property on the list, set the head and tail to be the newly created node</div>
                <div>5) Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node</div>
                <div>6) Increment the length by 1</div>
                <div>7) Return the linked list</div>
              </div>
            </div>
            <div class="indent">
              <div>Pop (Removing a node from the end of the list)</div>
                <div class="indent font-sm">
                  <div>8) If there are no nodes in the list, return undefined</div>
                  <div>9) Loop through the list until you reach the tail</div>
                  <div>10) Set the next property of the 2nd to last node to be null</div>
                  <div>11) Set the tail to be the 2nd to last node</div>
                  <div>12) Decrement the length of the list by 1</div>
                  <div>13) Return the value of the node removed</div>
                </div>
            </div>
            <div class="indent">
              <div>Shift (Removing a node from the beginning of the linked list)</div>
              <div class="indent font-sm">
                <div> 14) If there are no nodes, return undefined</div>
                <div> 15) Store the current head property in a variable</div>
                <div> 16) Set the head property to be the current head's next property</div>
                <div> 17) Decrement the length by 1</div>
                <div> 18) Return the value of the node removed</div>
              </div>
            </div>
            <div class="indent">
              <div>Unshift (Adding a new node to the beginning of a linked list)</div>
              <div class="indent font-sm">
                <div> 19)</div>
              </div>
            </div>
          </div>
        </ul>
        <img src={require('../images/sll.png')} style={{width: "60vw"}} alt="Singly linked list illustration"></img>
      </div>
    </div>
  )
}
