import React from 'react'

export default function BinarySearch() {
const javascript_snippet = 
  `function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle;
        } else {
            start = middle;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}`

  return (
  <div class="Concept_page">
    <div class="Concept_title">Binary Search</div>
    <div class="Container">
      <ul class="font-m">
        <div class="Section"><li>Binary search is a much faster form of search than linear search</li></div>
        <div class="Section"><li>Rather than eliminating one element at a time, you can elimate half of the remaining elements at at time</li></div>
        <div class="Section"><li>Binary search only works on sorted arrays</li></div>
        <div class="Section"><li>Binary search works by repeatedly dividing the search interval in half, depending on whether the guess was lower or higher than the correct value</li></div>
        <div class="Section"> 
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
        </div>
      </ul>
      <div class="font-l">JavaScript Implementation:</div>
        <div class="Code Section">
            <pre>
              <code>
                {javascript_snippet}
              </code>
            </pre>
        </div>
    </div>
  </div>
  )
}
