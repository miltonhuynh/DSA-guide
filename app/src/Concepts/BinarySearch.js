import React from 'react'

export default function BinarySearch() {

  const python_snipper = 
    `def binary_search(item_list,item):

  first = 0
  last = len(item_list)-1
  found = False

  while( first <= last and not found):

    mid = (first + last) // 2

    if item_list[mid] == item :
      found = True
    else:
      if item < item_list[mid]:
        last = mid - 1
      else:
        first = mid + 1	

  return found`
  return (
    <div class="Concept_page">
      <div class="Concept_title">Binary Search</div>
      <div class="Concept_description">Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. We used binary search in the guessing game in the introductory tutorial. One of the most common ways to use binary search is to find an item in an array. For example, the Tycho-2 star catalog contains information about the brightest 2,539,913 stars in our galaxy. Suppose that you want to search the catalog for a particular star, based on the star's name. If the program examined every star in the star catalog in order starting with the first, an algorithm called linear search, the computer might have to examine all 2,539,913 stars to find the star you were looking for, in the worst case. If the catalog were sorted alphabetically by star names, binary search would not have to examine more than 22 stars, even in the worst case.</div>
      <div class="Code">
        <pre><code>{python_snipper}</code></pre>
      </div>
    </div>
  )
}
