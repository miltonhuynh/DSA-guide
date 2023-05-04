import React from 'react'

export default function BinarySearch() {
const py_snippet = 
  `def binary_search(list, item):
  low = 0
  high = len(list) - 1
  
  while low <= high:
      mid = (low + high)
      guess = list[mid]
      if guess == item:
          return mid
      if guess > item:
          high = mid - 1
      else:
          low = mid + 1
  
  return None
`

  return (
  <div class="Concept_page">
    <h1>Binary Search</h1>
    <main>
      <ul class="font-m">
        <section><li>Binary search is a much faster form of search than linear search</li></section>
        <section><li>Rather than eliminating one element at a time, you can elimate half of the remaining elements at at time</li></section>
        <section><li>Binary search only works on sorted arrays</li></section>
        <section><li>Binary search works by repeatedly dividing the search interval in half, depending on whether the guess was lower or higher than the correct value</li></section>
        <section> 
          <li>
            Implementation steps:
            <ul class="font-m">
              <li>Begin with the mid element of the whole array as a search key</li>
              <li>If the value of the search key is equal to the item then return an index of the search key</li>
              <li>Or if the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half</li>
              <li>Otherwise, narrow it to the upper half</li>
              <li>Repeatedly check from the second point until the value is found or the interval is empty</li>
            </ul>
          </li>
        </section>
      </ul>
      <div class="font-l">Python Implementation:</div>
        <div class="Code Section">
            <pre>
              <code>
                {py_snippet}
              </code>
            </pre>
        </div>
    </main>
  </div>
  )
}
