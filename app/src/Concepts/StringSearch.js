import React from 'react'

export default function StringSearch() {
    const implementation =
    `function counter(sequence, whole_string) {
        let count = 0;
      
        for(let x = 0; x < whole_string.length; x++) {
      
          for(let y = 0; y < sequence.length; y++) {
      
            if(sequence[y] !== whole_string[x]) {
              break;
            }
          count++;
          }
        }
        return count;
      }
      `


  return (
    <div class="Concept_page">
      <div class="Concept_title">String Search</div>
      <div class="Container">
        <ul>
            <li><div class="font-m">This is a method to count a number of times a smaller string appears in a larger string.</div></li><br/>
            <li><div class="font-m">Implementation steps:</div></li>
            <div class="font-sm indent">1. Loop over the longer string.</div>
            <div class="font-sm indent">2. Loop over the shorter string.</div>
            <div class="font-sm indent">3. If the characters don't match, break out of the inner loop.</div>
            <div class="font-sm indent">4. If the characters do match, keep going.</div>
            <div class="font-sm indent">5. If you complete the inner loop and find a match, increment the count of matches.</div>
            <div class="font-sm indent">6. Return the count.</div><br/>
            <div class="font-l">Implementation: </div>
            <div class="Code">
                <pre>
                    <code>
                        {implementation}
                    </code>
                </pre>
            </div>
        </ul>
      </div>
    </div>
  )
}
