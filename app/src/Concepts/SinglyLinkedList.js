import React from 'react'

export default function SinglyLinkedList() {

  const implementation =
    `class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class SinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    def push(self, val):
        new_node = Node(val)
        if not self.head:
            self.head = new_node
            self.tail = self.head
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1
        return self

    def pop(self):
        if not self.head:
            return None
        current = self.head
        new_tail = current
        while current.next:
            new_tail = current
            current = current.next
        self.tail = new_tail
        self.tail.next = None
        self.length -= 1
        if self.length == 0:
            self.head = None
            self.tail = None
        return current

    def shift(self):
        if not self.head:
            return None
        current_head = self.head
        self.head = current_head.next
        self.length -= 1
        if self.length == 0:
            self.tail = None
        return current_head

    def unshift(self, val):
        new_node = Node(val)
        if not self.head:
            self.head = new_node
            self.tail = self.head
        new_node.next = self.head
        self.head = new_node
        self.length += 1
        return self

    def get(self, index):
        if index < 0 or index >= self.length:
            return None
        counter = 0
        current = self.head
        while counter != index:
            current = current.next
            counter += 1
        return current

    def set(self, index, val):
        found_node = self.get(index)
        if found_node:
            found_node.val = val
            return True
        return False

    def insert(self, index, val):
        if index < 0 or index > self.length:
            return False
        if index == self.length:
            return bool(self.push(val))
        if index == 0:
            return bool(self.unshift(val))

        new_node = Node(val)
        prev = self.get(index - 1)
        temp = prev.next
        prev.next = new_node
        new_node.next = temp
        self.length += 1
        return True

    def remove(self, index):
        if index < 0 or index >= self.length:
            return None
        if index == 0:
            return self.shift()
        if index == self.length - 1:
            return self.pop()
        previous_node = self.get(index - 1)
        removed = previous_node.next
        previous_node.next = removed.next
        self.length -= 1
        return removed

    def reverse(self):
        node = self.head
        self.head = self.tail
        self.tail = node
        prev = None
        for _ in range(self.length):
            next_node = node.next
            node.next = prev
            prev = node
            node = next_node
        return self
`

  return (
    <div class="Concept_page">
      <div class="Concept_title">Singly Linked List</div>
      <div class="Container font-m">
        <ul>
          <div class="Section"><li>Each node points to the next item, unlike doubly linked list which points to the previous and next item.</li></div>
          <div class="Section"><li>Does not have indexes, connected via nodes with a next pointer, random access is not allowed.</li></div>
          <div class="Section"><li>Unlike arrays, insertion and deletion is not as time consuming, don't need to re-index every element.</li></div>
          <div class="Section">
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
            </li>
          </div>
          <div class="Section">
            <li>Implementation steps:</li>
            <ul class="font-sm">
              <li>Create a node that contains a variable that holds a value and a pointer to the next node.</li>

              <li>Push (Adding a node to the beginning of list)</li>
              <ul class="font-xsm">
                <li>Let this function accept a value</li>
                <li>Create a new node using the value passed to the function</li>
                <li>If there is no head property (list is empty) on the list, set the head and tail to be the newly created node</li>
                <li>Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node</li>
                <li>Increment the length by 1</li>
                <li>Return the linked list</li>
              </ul>

              <li>Pop (Removing a node from the end of the list)</li>
              <ul class="font-xsm">
                <li>If there are no nodes in the list, return undefined</li>
                <li>Loop through the list until you reach the tail</li>
                <li>Set the next property of the 2nd to last node to be null</li>
                <li>Set the tail to be the 2nd to last node</li>
                <li>Decrement the length of the list by 1</li>
                <li>Return the value of the node removed</li>
              </ul>

              <li>Shift (Removing a node from the beginning of the linked list)</li>
              <ul class="font-xsm">
                <li>If there are no nodes, return undefined</li>
                <li>Store the current head property in a variable</li>
                <li>Set the head property to be the current head's next property</li>
                <li>Decrement the length by 1</li>
                <li>Return the value of the node removed</li>
              </ul>

              <li>Unshift (Adding a new node to the beginning of a linked list)</li>
              <ul class="font-xsm">
                <li>Create a new node using the value passed to the function</li>
                <li>If there is no head property on the list, set the head and tail to be the newly created node</li>
                <li>Otherwise set the newly created node's next property to be the current head property on the list</li>
                <li>Set the head property on the list to be that newly created node</li>
                <li>Increment the length of the list by 1</li>
                <li>Return the linked list</li>
              </ul>

              <li>Get (Retrieving a node by it's position in the Linked List)</li>
              <ul class="font-xsm">
                <li>Let the function accept an index</li>
                <li>If the index is less than zero or greater than or equal to the length of the list, return null</li>
                <li>Loop through the list until you reach the index and return the node at that specific index</li>
              </ul>

              <li>Set (Changing the value of a node based on it's position in the Linked List)</li>
              <ul class="font-xsm">
                <li>This function should accept a value and an index</li>
                <li>Use your get function to find the specific node</li>
                <li>If the node is not found, return false, if the node is found, set the value of that node to be the value passed to the function and return true</li>
              </ul>

              <li>Insert (Adding a node to the Linked List at a specific position</li>
              <ul class="font-xsm">
                <li>If the index is less than zero or greater than the length, return false</li>
                <li>If the index is the same as the length, push a new node to the end of the list</li>
                <li>If the index is zero, unshift a new node to the start of the list</li>
                <li>Otherwise, using the get method, access the node at the index - 1.</li>
                <li>Set the next property on that node to be the new node</li>
                <li>Set the next property on the new node to be the previous next</li>
                <li>Increment the length</li>
                <li>Return true</li>
              </ul>

              <li>Remove (Removing a node from the Linked List at a specific position</li>
              <ul class="font-xsm">
                <li>If the index is less than zero or greater than the length, return underfined</li>
                <li>If the index is the same as the length - 1, pop</li>
                <li>If the index is 0, shift</li>
                <li>Otherwise, using the get method, access the node at the index - 1</li>
                <li>Set the next property on that node to be the next of the next node</li>
                <li>Decrement the length</li>
                <li>Return the value of the node removed</li>
              </ul>

              <li>Reverse (Reversing the Linked List in place)</li>
              <ul class="font-xsm">
                <li>Swap the head and the tail</li>
                <li>Create a variable called next and a variable called prev</li>
                <li>Create a variable called node and initialize it to the head property</li>
                <li>Loop through the list</li>
                <li>Set next to be the next property on whatever the current node is</li>
                <li>Set the next property on the node to be whatever prev is</li>
                <li>Set prev to be the value of the node variable</li>
                <li>Set the node variable to be the value of the next variable</li>
              </ul>
            </ul>
          </div>
        </ul>
        <img src={require('../images/sll.png')} style={{ width: "60vw" }} alt="Singly linked list illustration"></img><br /><br /><br />
        <div class="font-l">Python Implementation</div>
        <div class="Code Section">
          <pre>
            <code>
              {implementation}
            </code>
          </pre>
        </div>
        <div class="Section">
          <div class="font-l">LeetCode examples</div>
          <div class="font-m indent">
            <li><a class="Link-green" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/merge-two-sorted-lists/">Merge Two Sorted Lists [Easy]</a></li>
            <li><a class="Link-yellow" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/add-two-numbers/">Add Two Numbers [Medium]</a></li>
            <li><a class="Link-red" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/merge-k-sorted-lists/">Merge k sorted lists [Hard]</a></li>
          </div>
        </div>
      </div>
    </div>
  )
}
