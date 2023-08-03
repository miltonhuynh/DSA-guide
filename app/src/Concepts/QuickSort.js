import React from 'react'

export default function QuickSort() {

  const Implementation =
    `function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
  
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right)
          quickSort(arr, left, pivotIndex - 1);
  
          quickSort(arr, pivotIndex + 1,right);
        }
       return arr;
  }`

  const n_squared =
    `\u00B2`

  return (
    <div class="Concept_page">
      <h1>Quick sort</h1>
      <main>
        <ul>
          <section><li>Works by selecting one element (the pivot) and finding the index where the pivot should end up in the sorted array.</li></section>
          <section><li>Counts the number of elements on each side of the pivot.</li></section>
          <section><li>Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.</li></section>
          <section><li>The time complexity of this sorting algorithm is on average O(n log(n)) and worst case O(n{n_squared}) and is in-place.</li></section>
          <section>
            <li>Implementation Steps:</li>
            <div class="indent font-sm">
              <div>1) Choose an element in the array to be the pivot.</div>
              <div>2) Iterate through the array and find the index where the pivot should be, swap so all numbers less than pivot is on the left side of the array and greater than to the right.</div>
              <div>3) Swap the pivot element with the element in its correct index.</div>
              <div>4) Recursively repeat process until the array is sorted.</div>
            </div>
          </section>
          <div class="font-l">JavaScript Implementation</div>
          <section>
            <pre>
              <code>
                {Implementation}
              </code>
            </pre>
          </section>
        </ul>
      </main>
    </div>
  )
}
