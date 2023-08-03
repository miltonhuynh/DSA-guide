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
      <h1>String Search</h1>
      <main>
        <ul>
          <section><li>This is a method to count a number of times a smaller string appears in a larger string.</li></section>
          <section>
            <li>Implementation steps:
              <ul>
                <li>1. Loop over the longer string.</li>
                <li>2. Loop over the shorter string.</li>
                <li>3. If the characters don't match, break out of the inner loop.</li>
                <li>4. If the characters do match, keep going.</li>
                <li>5. If you complete the inner loop and find a match, increment the count of matches.</li>
                <li>6. Return the count.</li>
              </ul>
            </li>
          </section>
          <div class="font-l">JavaScript Implementation: </div>
          <section>
            <pre>
              <code>
                {implementation}
              </code>
            </pre>
          </section>
        </ul>
      </main>
    </div>
  )
}
