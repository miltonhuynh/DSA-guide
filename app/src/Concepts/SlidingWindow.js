import React from 'react'

export default function SlidingWindow() {
  const naive = 
  `function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }`

  const refactored =
  `function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }`

  return (
    <div class="Concept_page">
    <div class="Concept_title">Sliding Window</div>
    <div class="Container">
    <ul><div class="font-m">
        <li>This pattern involves creating a window which can either be an array or number from one position to another.</li><br/>
        <li>Depending on a certain condition, the window either increases or closes and a new window is created.</li><br/>
        <li>Very useful for keeping track of a subset of data in an array/string etc.</li>
      </div></ul><br/>
      <div class="font-l">Naive solution</div>
      <div class="Code">
        <pre>
          <code>
            {naive}
          </code>
        </pre>
      </div>
      <div class="font-l">Refactored solution</div>
      <div class="Code">
        <pre>
          <code>
            {refactored}
          </code>
        </pre>
      </div>
    </div>
  </div>
  )
}
