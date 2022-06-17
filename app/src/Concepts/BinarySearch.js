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
    <div class="Container font-m">
      <div>Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. We used binary search in the guessing game in the introductory tutorial. One of the most common ways to use binary search is to find an item in an array. For example, the Tycho-2 star catalog contains information about the brightest 2,539,913 stars in our galaxy. Suppose that you want to search the catalog for a particular star, based on the star's name. If the program examined every star in the star catalog in order starting with the first, an algorithm called linear search, the computer might have to examine all 2,539,913 stars to find the star you were looking for, in the worst case. If the catalog were sorted alphabetically by star names, binary search would not have to examine more than 22 stars, even in the worst case.</div>
        <div class="Code">
            <pre><code>{javascript_snippet}</code></pre>
        </div>
      </div>
    </div>
  )
}
