import React from 'react'

export default function HashTables() {
  const hashfunction =
  `function hash(key, arrayLen) {
    let total = 0;
    let prime = 31;
    for (let char of key) {
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      let value = char.charCodeAt(0) - 96
      total = (total * prime + value) % arrayLen;
    }
    return total;
  }`

  const implementation =
  `class HashTable {
    constructor(size=53){
      this.keyMap = new Array(size);
    }
  
    _hash(key) {
      let total = 0;
      let WEIRD_PRIME = 31;
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
      }
      return total;
    }
    set(key,value){
      let index = this._hash(key);
      if(!this.keyMap[index]){
        this.keyMap[index] = [];
      }
      this.keyMap[index].push([key, value]);
    }
    get(key){
      let index = this._hash(key);
      if(this.keyMap[index]){
        for(let i = 0; i < this.keyMap[index].length; i++){
          if(this.keyMap[index][i][0] === key) {
            return this.keyMap[index][i][1]
          }
        }
      }
      return undefined;
    }
    keys(){
      let keysArr = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!keysArr.includes(this.keyMap[i][j][0])){
              keysArr.push(this.keyMap[i][j][0])
            }
          }
        }
      }
      return keysArr;
    }
    values(){
      let valuesArr = [];
      for(let i = 0; i < this.keyMap.length; i++){
        if(this.keyMap[i]){
          for(let j = 0; j < this.keyMap[i].length; j++){
            if(!valuesArr.includes(this.keyMap[i][j][1])){
              valuesArr.push(this.keyMap[i][j][1])
            }
          }
        }
      }
      return valuesArr;
    }
  }`
  
  return (
    <div class="Concept_page">
      <div class="Concept_title">Hash tables</div>
      <div class="Container font-m">
        <ul>
          <li>Used to store key-value pairs</li><br/>
          <li>Like arrays, but keys are not ordered</li><br/>
          <li>
            Fast for the following operations, unlike arrays:
            <ul class="font-sm">
              <li>Finding values</li>
              <li>Adding new values</li>
              <li>Removing values</li>
            </ul><br/>
          </li>
          <li>Nearly every programming language has some sort of hash table data structure</li><br/>
          <li>
            Because of their speed, hash tables are very commonly used
            <ul class="font-sm">
              <li>Python has Dictionaries</li>
              <li>JavaScript has Objects and Maps</li>
              <li>Java, Go and Scala have Maps</li>
              <li>Ruby has hashes</li>
            </ul><br/>
          </li>
          <li>
            Big O of Hash Tables
            <ul class="font-sm"> 
              <li>Insertion: O(1)</li>
              <li>Deletion: O(1)</li>
              <li>Access: O(1)</li>
            </ul>
          </li><br/>
          <li>
            An array can be used to implement a hash table: 
            <ul class="font-sm">
              <li>In order to look up values by key, we need a way to convert keys into valid array indices</li>
              <li>A function that performs this task is called a hash function</li>
              <li>Hash functions use prime numbers to reduce collisions and spread out keys more uniformly</li>
              <li>
                A good hash function has to be: 
                <ul class="font-xsm">
                  <li>Fast (constant time)</li>
                  <li>Doesn't cluster outputs at specific indices, but distributes uniformly</li>
                  <li>Deterministic (same input yields same output)</li>
                </ul><br/>
                <li>
                  Example of a hash function that takes in a string and returns a key:
                  <div class="Code-sm">
                    <pre>
                      <code>
                        {hashfunction}
                      </code>
                    </pre>
                  </div>
                </li>
                <li>Handling collisions: </li>
                <ul class="font-xsm">
                  <li>Even with a large array and good hash function, collisions are inevitable</li>
                  <li>
                    The two main strategies to deal with collisions are:
                    <ul class="font-xxsm">
                      <li>1) <u>Separate chaining</u>: store values using a more sophisticated data structure at each index in the array, this allows us to store multiple key-value pairs at the same index</li>
                      <li>2) <u>Linear probing</u>: when a collision is found, search through the array to find the next empty spot</li>
                    </ul><br/>
                  </li>
                </ul>
                <li>Implementation Steps:</li>
                <ul class="font-xsm">
                  <li>Set</li>
                  <ul class="font-xxsm">
                    <li>Accepts a key and a value</li>
                    <li>Hashes the key</li>
                    <li>Store the key-value pair in the hash table array via separate chaining</li>
                    <li>If the key isn't found, return underfined</li>
                  </ul>
                </ul>
                <ul class="font-xsm">
                  <li>Get</li>
                  <ul class="font-xxsm">
                    <li>Accepts a key</li>
                    <li>Hashes the key</li>
                    <li>Retrieves the key-value pair in the hash table</li>
                  </ul>
                </ul>
                <ul class="font-xsm">
                  <li>Keys</li>
                  <ul class="font-xxsm">
                    <li>Loops through the hash table array and returns an array of keys in the table</li>
                  </ul>
                </ul>
                <ul class="font-xsm">
                  <li>Values</li>
                  <ul class="font-xxsm">
                    <li>Loops through the hash table array and returns an array of values in the table</li>
                  </ul>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <div class="font-l">JavaScript Implementation</div>
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
