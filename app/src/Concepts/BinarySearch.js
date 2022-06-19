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
      <ul>
        <li><div class="font-m">Binary search is a much faster form of search than linear search.</div></li><br/>
        <li><div class="font-m">Rather than eliminating one element at a time, you can elimate half of the remaining elements at at time.</div></li><br/>
        <li><div class="font-m">Binary search only works on sorted arrays.</div></li><br/><br/>
      </ul>
      <div class="font-l">Implementation:</div>
      <div class="Code">
          <pre><code>{javascript_snippet}</code></pre>
      </div>
    </div>
  </div>
  )
}
