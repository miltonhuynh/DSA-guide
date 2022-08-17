import React from 'react'

export default function SinglyLinkedList() {

  const implementation = 
  `class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.lenght) {
          return null;
        }
        var counter = 0;
        var current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    
    reverse() {
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for(var i = 0; i < this.length; i++) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
      return this;
    }
}`

  return (
    <div class="Concept_page">
      <div class="Concept_title">Singly Linked List</div>
      <div class="Container">
        <ul>
          <div class="font-m">
            <li>Each node points to the next item, unlike doubly linked list which points to the previous and next item.</li><br/>
            <li>Does not have indexes, connected via nodes with a next pointer, random access is not allowed.</li><br/>
            <li>Unlike arrays, insertion and deletion is not as time consuming, don't need to re-index every element.</li><br/>
            <li>
              Big O of Singly Linked Lists
              <div class="font-sm">
                <ul>
                  <li>Insertion: O(1)</li>
                  <li>Removal: O(1) or O(n)</li>
                  <li>Searching: O(n) *Technically O(n/2) but still in general O(n)</li>
                  <li>Access: O(n)</li>
                </ul>
              </div>
            </li><br/>

            <li>Implementation steps:</li>

            <ul><li>Node (Basic unit of data structure than can hold a value)</li></ul>
            <div class="indent-extra font-sm">1) Create a node that contains a variable that holds a value and a pointer to the next node.</div>
            
            <ul><li>Push (Adding a node to the beginning of list)</li></ul>
            <div class="indent-extra font-sm">
            <div>2) Let this function accept a value</div>
            <div>3) Create a new node using the value passed to the function</div>
            <div>4) If there is no head property (list is empty) on the list, set the head and tail to be the newly created node</div>
            <div>5) Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node</div>
            <div>6) Increment the length by 1</div>
            <div>7) Return the linked list</div>
            </div>
            
            <ul><li>Pop (Removing a node from the end of the list)</li></ul>
            <div class="indent-extra font-sm">
              <div>8) If there are no nodes in the list, return undefined</div>
              <div>9) Loop through the list until you reach the tail</div>
              <div>10) Set the next property of the 2nd to last node to be null</div>
              <div>11) Set the tail to be the 2nd to last node</div>
              <div>12) Decrement the length of the list by 1</div>
              <div>13) Return the value of the node removed</div>
            </div>
        
            <ul><li>Shift (Removing a node from the beginning of the linked list)</li></ul>
            <div class="indent-extra font-sm">
              <div> 14) If there are no nodes, return undefined</div>
              <div> 15) Store the current head property in a variable</div>
              <div> 16) Set the head property to be the current head's next property</div>
              <div> 17) Decrement the length by 1</div>
              <div> 18) Return the value of the node removed</div>
            </div>

            <ul><li>Unshift (Adding a new node to the beginning of a linked list)</li></ul>
            <div class="indent-extra font-sm">
              <div> 19) Create a new node using the value passed to the function</div>
              <div> 20) If there is no head property on the list, set the head and tail to be the newly created node</div>
              <div> 21) Otherwise set the newly created node's next property to be the current head property on the list</div>
              <div> 22) Set the head property on the list to be that newly created node</div>
              <div> 23) Increment the length of the list by 1</div>
              <div> 24) Return the linked list</div>
          </div>

            <ul><li>Get (Retrieving a node by it's position in the Linked List)</li></ul>
            <div class="indent-extra font-sm">
              <div> 25) Let the function accept an index</div>
              <div> 26) If the index is less than zero or greater than or equal to the length of the list, return null</div>
              <div> 27) Loop through the list until you reach the index and return the node at that specific index</div>
          </div>

            <ul><li>Set (Changing the value of a node based on it's position in the Linked List)</li></ul>
            <div class="indent-extra font-sm">
              <div> 28) This function should accept a value and an index</div>
              <div> 29) Use your get function to find the specific node</div>
              <div> 30) If the node is not found, return false, if the node is found, set the value of that node to be the value passed to the function and return true</div>
            </div>

            <ul><li>Insert (Adding a node to the Linked List at a specific position</li></ul>
            <div class="indent-extra font-sm">
              <div> 31) If the index is less than zero or greater than the length, return false</div>
              <div> 32) If the index is the same as the length, push a new node to the end of the list</div>
              <div> 33) If the index is zero, unshift a new node to the start of the list</div>
              <div> 34) Otherwise, using the get method, access the node at the index - 1.</div>
              <div> 35) Set the next property on that node to be the new node</div>
              <div> 36) Set the next property on the new node to be the previous next</div>
              <div> 37) Increment the length</div>
              <div> 38) Return true</div>
            </div>

            <ul><li>Remove (Removing a node from the Linked List at a specific position</li></ul>
            <div class="indent-extra font-sm">
              <div> 39) If the index is less than zero or greater than the length, return underfined</div>
              <div> 40) If the index is the same as the length - 1, pop</div>
              <div> 41) If the index is 0, shift</div>
              <div> 42) Otherwise, using the get method, access the node at the index - 1</div>
              <div> 43) Set the next property on that node to be the next of the next node</div>
              <div> 44) Decrement the length</div>
              <div> 45) Return the value of the node removed</div>
            </div>
            
            <ul><li>Reverse (Reversing the Linked List in place)</li></ul>
            <div class="indent-extra font-sm">
              <div> 46) Swap the head and the tail</div>
              <div> 47) Create a variable called next and a variable called prev</div>
              <div> 48) Create a variable called node and initialize it to the head property</div>
              <div> 49) Loop through the list</div>
              <div> 50) Set next to be the next property on whatever the current node is</div>
              <div> 51) Set the next property on the node to be whatever prev is</div>
              <div> 52) Set prev to be the value of the node variable</div>
              <div> 53) Set the node variable to be the value of the next variable</div>
            </div>
          </div>
        </ul>
        <img src={require('../images/sll.png')} style={{width: "60vw"}} alt="Singly linked list illustration"></img><br/><br/><br/>
        <div class="font-l">Implementation</div>
        <div class="Code">
              <pre>
                <code>
                  {implementation}
                </code>
              </pre>
            </div>
      </div>
    </div>
  )
}
