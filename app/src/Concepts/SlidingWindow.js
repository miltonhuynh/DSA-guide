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
      <h1>Sliding Window</h1>
      <main>
        <ul>
          <section><li>This pattern involves creating a window which can either be an array or number from one position to another.</li></section>
          <section><li>Depending on a certain condition, the window either increases or closes and a new window is created.</li></section>
          <section><li>Very useful for keeping track of a subset of data in an array/string etc.</li></section>
        </ul>
        <div class="font-l">Naive solution</div>
        <section>
          <code>
            <pre>
              <code>
                {naive}
              </code>
            </pre>
          </code>
        </section>
        <div class="font-l">Refactored solution</div>
        <section>
          <code>
            <pre>
              <code>
                {refactored}
              </code>
            </pre>
          </code>
        </section>
        <section>
          <div class="font-l">LeetCode examples</div>
          <div class="font-m indent">
            <li><a class="Link-green" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/longest-nice-substring/">Longest Nice Substring [Easy]</a></li>
            <li><a class="Link-yellow" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/longest-substring-without-repeating-characters/">Longest Substring Without Repeating Characters [Medium]</a></li>
            <li><a class="Link-red" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/longest-duplicate-substring/">Longest Duplicate Substring [Hard]</a></li>
          </div>
        </section>
      </main>
    </div>
  )
}
