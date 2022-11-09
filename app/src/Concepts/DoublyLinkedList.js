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
      <div class="Container font-m">
        <ul>
          <li>Almost identical to Singly Linked Lists, except every node has another pointer to the previous node</li><br/>
          <li>Can be traversed in both forward and backward directions, can quickly remove or add a new node before a given node</li><br/>
          <li>Every node of requires extra space for a previous pointer</li><br/>
          <li>
            Big O of Doubly Linked Lists
            <ul class="font-sm"> 
              <li>Insertion: O(1)</li>
              <li>Removal: O(1)</li>
              <li>Searching: O(n) *Technically O(n/2) but still in general O(n)</li>
              <li>Access: O(n)</li>
            </ul>
          </li><br/>

          <li>Implementation Steps:</li>
          <ul class="font-sm">
            <li>Create a node that contains a variable that holds a value and a pointer to the next and previous node.</li>
            
            <li>Push (Adding a node to the beginning of list)</li>
            <ul class="font-xsm">
              <li>Create a new node with the value passed to the function</li>
              <li>If the head property is null (list is empty), set the head and tail to be the newly created node</li>
              <li>If not, set the next property on the tail to be that node</li>
              <li>Set the previous property of the newly created node to be the old tail</li>
              <li>Set the tail to be the newly created node</li>
              <li>Increment the length</li>
              <li>Return the Doubly Linked List</li>
            </ul>

            <li>Pop (Removing a node from the end of the Doubly Linked List)</li>
            <ul class="font-xsm">
              <li>If there is no head, return undefined</li>
              <li>Store the current tail in a variable to return later</li>
              <li>If the length is 1, set the head and tail to be null</li>
              <li>Update the list's tail to be the previous node</li>
              <li>Set the newTail's next to null</li>
              <li>Decrement the length</li>
              <li>Return the value removed</li>
            </ul>

            <li>Shift (Removing a node from the beginning of the Doubly Linked List)</li>
            <ul class="font-xsm">
              <li>If the length is 0, return undefined</li>
              <li>Store the current head in a variable, return at end</li>
              <li>If length is 1, set head and tail to null</li>
              <li>Update the head to be the next of the old head</li>
              <li>Set the head's prev property to null</li>
              <li>Set the old head's next to null</li>
              <li>Decrement the length</li>
              <li>Return the removed node</li>
            </ul>

            <li>Unshift (Adding a node to the beginning of the Doubly Linked List)</li>
            <ul class="font-xsm">
              <li>Create a new node with the value passed to function</li>
              <li>If length is 0, set the head and tail to new node</li>
              <li>Otherwise, set the prev property of current head to be new node, set the next property on the new node to be the head property and update the head to be the new node</li>
              <li>Increment the length</li>
              <li>Return the list</li>
            </ul>

            <li>Get (Accessing a node in a Doubly Linked List by its position)</li>
            <ul class="font-xsm">
              <li>If the index is less than 0 or greater or equal to the length, return null</li>
              <li>If the index is less than or equal to half the length of the list, loop through the list starting from head towards the middle, return the found node</li>
              <li>If the index is greater than half the length of the list, loop backwards through the list starting from the tail towards the middle, return the found node</li>
            </ul>

            <li>Set (Replacing the value of a specified node in a list)</li>
            <ul class="font-xsm">
              <li>Create a variable which is the result of the get method at the index passed to the function</li>
              <li>If the get method returns a valid node, set the value of that node to be the value passed to the function</li>
              <li>Return true if node is valid, otherwise return false</li>
            </ul>

            <li>Insert (Adding a node in a list by a specific position</li>
            <ul class="font-xsm">
              <li>If the index is less than zero or greater than the length, return false</li>
              <li>If the index is 0, unshift</li>
              <li>If the index is equal to the length, push</li>
              <li>Use the get method to access the index - 1</li>
              <li>Set the next and prev properties on the correct nodes to link everything together</li>
              <li>Increment the length</li>
              <li>Return true</li>
            </ul>

            <li>Remove (Removing a node from a list given a certain position)</li>
            <ul class="font-xsm">
              <li>If the index is less than zero or greater than or equal to the length return undefined</li>
              <li>If the index is 0, shift</li>
              <li>If the index is equal to the length - 1, pop</li>
              <li>Use the get method to retrieve the item to be removed</li>
              <li>Update the next and prev properties to remove the found node from the list</li>
              <li>Set the next and prev to null on the found node</li>
              <li>Decrement the length</li>
              <li>Return the removed node</li><br/>
            </ul>
          </ul>
          <div class="font-l">JavaScript Implementation</div>
          <div class="Code">
            <pre>
              <code>
                {Implementation}
              </code>
            </pre>
          </div>
          <div class="font-l">
          LeetCode examples
          <div class="font-m indent">
              <li><a class="Link-yellow" href="https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/">Flatten a Multilevel Doubly Linked List [Medium]</a></li>
              <li><a class="Link-red" href="https://leetcode.com/problems/design-a-text-editor/">Design a Text Editor [Hard]</a></li>
          </div>
        </div><br/>
          </ul>
      </div>
    </div>
  )
}
