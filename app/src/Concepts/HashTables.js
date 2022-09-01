import React from 'react'

export default function HashTables() {
  const hashfunction =
  `function hash(key, arrayLen) {
    let total = 0;
    for (let char of key) {
      // map "a" to 1, "b" to 2, "c" to 3, etc.
      let value = char.charCodeAt(0) - 96
      total = (total + value) % arrayLen;
    }
    return total;
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
            An array can be used to implement a hash table: 
            <ul class="font-sm">
              <li>In order to look up values by key, we need a way to convert keys into valid array indices</li>
              <li>A function that performs this task is called a hash function</li>
              <li>
                A good hash function has to be: 
                <ul class="font-xsm">
                  <li>1) Fast (constant time)</li>
                  <li>2) Doesn't cluster outputs at specific indices, but distributes uniformly</li>
                  <li>3) Deterministic (same input yields same output)</li>
                </ul>
              <li>
                  Example of a hash function that takes in a string and returns a key:
                  <div class="Code">
                    <pre>
                      <code>
                        {hashfunction}
                      </code>
                    </pre>
                  </div>
                </li>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
