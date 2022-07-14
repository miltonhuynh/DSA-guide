import React from 'react'

export default function RadixSort() {

  const implementation =
  `  function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
  }
  
  function radixSort(nums){
      let maxDigitCount = mostDigits(nums);
      for(let k = 0; k < maxDigitCount; k++){
          let digitBuckets = Array.from({length: 10}, () => []);
          for(let i = 0; i < nums.length; i++){
              let digit = getDigit(nums[i],k);
              digitBuckets[digit].push(nums[i]);
          }
          nums = [].concat(...digitBuckets);
      }
      return nums;
  }`

  return (
    <div class="Concept_page">
      <div class="Concept_title">Radix Sort</div>
      <div class="Container">
        <div class="font-m">
            <ul>
                <li>Radix sort is a special sorting algorithm that works on lists of numbers</li><br/>
                <li>Never makes comparisons between elements</li><br/>
                <li>It exploits the fact that information about the size of the number is in the number of digits</li><br/>
                <li>The time complexity of this sorting algorithm is O(nk), k being the number of digits</li><br/>
                <li>Implementation steps:</li>
                <div class="indent font-sm">
                  <div>1) Define a function that accepts a list of numbers</div>
                  <div>2) Figure out how many digits the largest number has</div>
                  <div>3) Loop from k=0 up to this largest number of digits</div>
                  <div>4) For each iteration of the loop, create buckets for each digit and place each number in its corresponding bucket based on its kth digit</div>
                  <div>5) Replace our existing array with values from the buckets, starting with 0 and going up to 9</div>
                  <div>6) Return list at the end</div>
                </div>
            </ul>
        </div>
        <div class="font-l">Implementation:</div>
        <div class="Code">
          <pre>
            <code>
              {implementation}
            </code>
          </pre>
        </div>
        </div>
    </div>
  )
}
