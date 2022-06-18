import React from 'react'

export default function BinarySearch() {

  

const javascript_snippet = 
  `function binarySearch(arr, l, r, x) {
    if (r >= l) {
      let mid = l + Math.floor((r - l) / 2);
  
      if (arr[mid] == x)
        return mid;

      if (arr[mid] > x)
        return binarySearch(arr, l, mid - 1, x);

      return binarySearch(arr, mid + 1, r, x);
    }
  

    return -1;
  }
  
  let arr = [ 2, 3, 4, 10, 40 ];
  let x = 10;
  let n = arr.length
  let result = binarySearch(arr, 0, n - 1, x);
  (result == -1) ? document.write( "Element is not present in array")
          : document.write("Element is present at index " +result);`



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
