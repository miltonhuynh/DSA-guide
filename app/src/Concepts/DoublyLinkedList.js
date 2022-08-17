import React from 'react'

export default function DoublyLinkedList() {

  const Implementation = 
  `class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    } 
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
}`

  return (
    <div class="Concept_page">
      <div class="Concept_title">Doubly Linked List</div>
      <div class="Container">
        <ul>
          <div class="font-m">
            <li>Almost identical to Singly Linked Lists, except every node has another pointer to the previous node</li><br/>
            <li>Can be traversed in both forward and backward directions, can quickly remove or add a new node before a given node</li><br/>
            <li>Every node of requires extra space for a previous pointer</li><br/>
            <li>
              Big O of Doubly Linked Lists
              <div class="font-sm">
                <ul>
                  <li>Insertion: O(1)</li>
                  <li>Removal: O(1)</li>
                  <li>Searching: O(n) *Technically O(n/2) but still in general O(n)</li>
                  <li>Access: O(n)</li>
                </ul>
              </div>
            </li><br/>

            <li>Implementation Steps:</li>

            <ul><li>Node</li></ul>
            <div class="indent-extra font-sm">1) Create a node that contains a variable that holds a value and a pointer to the next and previous node.</div>
            
            <ul><li>Push (Adding a node to the beginning of list)</li></ul>
            <div class="indent-extra font-sm">
              <div>2) Create a new node with the value passed to the function</div>
              <div>3) If the head property is null (list is empty), set the head and tail to be the newly created node</div>
              <div>4) If not, set the next property on the tail to be that node</div>
              <div>5) Set the previous property of the newly created node to be the old tail</div>
              <div>6) Set the tail to be the newly created node</div>
              <div>7) Increment the length</div>
              <div>8) Return the Doubly Linked List</div>
            </div>

            <ul><li>Pop (Removing a node from the end of the Doubly Linked List)</li></ul>
            <div class="indent-extra font-sm">
              <div>9) If there is no head, return undefined</div>
              <div>10) Store the current tail in a variable to return later</div>
              <div>11) If the length is 1, set the head and tail to be null</div>
              <div>12) Update the list's tail to be the previous node</div>
              <div>13) Set the newTail's next to null</div>
              <div>14) Decrement the length</div>
              <div>15) Return the value removed</div>
            </div>

            <ul><li>Shift (Removing a node from the beginning of the Doubly Linked List)</li></ul>
            <div class="indent-extra font-sm">
              <div>16) If the length is 0, return undefined</div>
              <div>17) Store the current head in a variable, return at end</div>
              <div>18) If length is 1, set head and tail to null</div>
              <div>19) Update the head to be the next of the old head</div>
              <div>20) Set the head's prev property to null</div>
              <div>21) Set the old head's next to null</div>
              <div>22) Decrement the length</div>
              <div>23) Return the removed node</div>
            </div>

            <ul><li>Unshift (Adding a node to the beginning of the Doubly Linked List)</li></ul>
            <div class="indent-extra font-sm">
              <div>24) Create a new node with the value passed to function</div>
              <div>25) If lenght is 0, set the head and tail to new node</div>
              <div>26) Otherwise, set the prev property of current head to be new node, set the next property on the new node to be the head property and update the head to be the new node</div>
              <div>27) Increment the length</div>
              <div>28) Return the list</div>
            </div>

            <ul><li>Get (Accessing a node in a Doubly Linked List by its position)</li></ul>
            <div class="indent-extra font-sm">
              <div>29) If the index is less than 0 or greater or equal to the length, return null</div>
              <div>30) If the index is less than or equal to half the length of the list, loop through the list starting from head towards the middle, return the found node</div>
              <div>31) If the index is greater than half the length of the list, loop backwards through the list starting from the tail towards the middle, return the found node</div>
            </div>

            <ul><li>Set (Replacing the value of a specified node in a list)</li></ul>
            <div class="indent-extra font-sm">
              <div>32) Create a variable which is the result of the get method at the index passed to the function</div>
              <div>33) If the get method returns a valid node, set the value of that node to be the value passed to the function</div>
              <div>34) Return true if node is valid, otherwise return false</div>
            </div>

            <ul><li>Insert (Adding a node in a list by a specific position</li></ul>
            <div class="indent-extra font-sm">
              <div>35) If the index is less than zero or greater than the length, return false</div>
              <div>36) If the index is 0, unshift</div>
              <div>37) If the index is equal to the length, push</div>
              <div>38) Use the get method to access the index - 1</div>
              <div>39) Set the next and prev properties on the correct nodes to link everything together</div>
              <div>40) Increment the length</div>
              <div>41) Return true</div>
            </div>

            <ul><li>Remove (Removing a node from a list given a certain position)</li></ul>
            <div class="indent-extra font-sm">
              <div>42) If the index is less than zero or greater than or equal to the length return undefined</div>
              <div>43) If the index is 0, shift</div>
              <div>44) If the index is equal to the length - 1, pop</div>
              <div>45) Use the get method to retrieve the item to be removed</div>
              <div>46) Update the next and prev properties to remove the found node from the list</div>
              <div>47) Set the next and prev to null on the found node</div>
              <div>48) Decrement the length</div>
              <div>49) Return the removed node</div>
            </div>
            <div class="font-l">Implementation</div>
            <div class="Code">
              <pre>
                <code>
                  {Implementation}
                </code>
              </pre>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}
