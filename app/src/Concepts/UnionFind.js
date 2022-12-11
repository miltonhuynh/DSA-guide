import React from 'react'

export default function StringSearch() {

  const Implementation =
    `function UnionFind(n) {
      this.parent = new Array(n);
      for (let i = 0; i < n; i++) {
        this.parent[i] = i;
      }
    
      this.find = function(x) {
        if (this.parent[x] === x) {
          return x;
        }
        return this.find(this.parent[x]);
      }
    
      this.union = function(x, y) {
        let xset = this.find(x);
        let yset = this.find(y);
        if (xset !== yset) {
          this.parent[xset] = yset;
        }
      }
    }
    `


  return (
    <div class="Concept_page">
      <div class="Concept_title">Union Find</div>
      <div class="Container font-m">
        <ul>
          <div class="Section"><li>Also known as the disjoint-set data structure</li></div>
          <div class="Section"><li>A data structure that tracks a set of elements partitioned into a number of disjoint (non-overlapping) subsets</li></div>
          <div class="Section"><li>Allows for efficient operations to find the subset a particular element belongs to, to determine whether two elements are in the same subset, and to merge two subsets into a single subset.</li></div>
        </ul>
        <div class="font-l">JavaScript Implementation</div>
        <div class="Code Section">
          <pre>
            <code>
              {Implementation}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}
