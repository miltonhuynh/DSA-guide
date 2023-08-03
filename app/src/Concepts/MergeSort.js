import React from 'react'

export default function MergeSort() {

  const Implementation =
  `function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}`

  return (
    <div class="Concept_page">
      <h1>Merge sort</h1>
      <main>
        <ul class="font-m">
            <section><li>This sorting algorithm uses a divide and conquer strategy.</li></section>
            <section><li>Splits an array in half until it can no longer be divided.</li></section>
            <section><li>During merging, iterates through both arrays and adds the smaller value, when one array is exhausted, adds the remaining elements in the other array.</li></section>
            <section><li>Exploits the fact that arrays of 0 or 1 elements are always sorted.</li></section>
            <section><li>Merge operation is applied once array is fully split.</li></section>
            <section><li>The time complexity of this sorting algorithm is O(n log(n)) and takes n space.</li></section>
            <section>
              <img src={require('../images/merge.jpg')} style={{width: "40vw"}} alt="Merge sort illustration"></img>
            </section>
        </ul>
        <div class="font-l">JavaScript Implementation</div>
        <section>
          <pre>
            <code>
              {Implementation}
            </code>
          </pre>
        </section>
        <section>
          <div class="font-l">LeetCode examples</div>
          <div class="font-m indent">
              <li><a class="Link-yellow" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/sort-list/ ">Sort List [Medium]</a></li>
              <li><a class="Link-yellow" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/sort-an-array/">Sort an Array [Medium]</a></li>
              <li><a class="Link-red" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/reverse-pairs/">Reverse Pairs [Hard]</a></li>
          </div>
        </section>
      </main>
    </div>
  )
}
