import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const slow_snippet = 
`function addUpToFirst(n) { 
  var total = 0;
  for (var i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}`

const fast_snippet = 
`
function addUpToSecond(n) {
  return n * (n + 1) / 2;
}
`

export default function BigO() {
  return (
    <div class="Concept_page">
      <div class="Concept_title">Time Complexity</div>
      <div class="Concept_description">
        Time complexity describes how long it takes a computer to run an algorithm. There are many ways to 
        solve a problem but some methods will take less time than others. It is important to consider
        run time as the amount of data grows so will how long it will take the function to return an answer.
        <br /><br />
        For example, consider a function that adds all the numbers from 1 to some number n.
        <br /><br />
        Method 1:
        <br />
        <pre><div class="Code_box Code">
          {slow_snippet}
        </div></pre>
        <h2>Big O Notation</h2>
      </div>

    </div>
  )
}
