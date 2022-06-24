import React from 'react'

export default function SelectionSort() {
  const selection = 
  `function sselectionSort(arr){
    for(var i = 0; i < arr.length; i++){
        var lowest = i;
        for(var j = i+1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}
`
  
  return (
  <div class="Concept_page">
    <div class="Concept_title">Selection sort</div>
    <div class="Container">
      <ul><div class="font-m">
        <li>Selection sort works by repeatedly finding the smallest element in the array and putting it at the beginning.</li><br/>
        <li>The algorithm mains two subarrays in any given array.</li><br/>
        <li>This method of sorting has a time complexity of n^2.</li>
        <div class="indent font-sm">1) The subarray that is already sorted.</div>
        <div class="indent font-sm">2) The remaining subarray which is unsorted.</div><br/>
        <li>In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. </li>
      </div></ul>
      <div class="font-l">Implementation</div>
      <div class="Code">
        <pre>
          <code>
            {selection}
          </code>
        </pre>
      </div>
    </div>
  </div>
  )
}
