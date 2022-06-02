import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const slow_python_snippet = 
`function addUpTo(n) {
  let total = 0;
}`

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
        <div class="Code_box">
          <Tabs>
            <TabList>
              <Tab class="Tab_title">Python</Tab>
              <Tab class="Tab_title">C++</Tab>
              <Tab class="Tab_title">Java</Tab>
              <Tab class="Tab_title">JavaScript</Tab>
            </TabList>

            <TabPanel>
              <div class="Code">
                  <pre><code>{slow_python_snippet}</code></pre>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="Code">
                  <pre><code>{slow_python_snippet}</code></pre>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="Code">
                  <pre><code>{slow_python_snippet}</code></pre>
              </div>
            </TabPanel>
            <TabPanel>
              <div class="Code">
                  <pre><code>{slow_python_snippet}</code></pre>
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <h2>Big O Notation</h2>
      </div>

    </div>
  )
}
