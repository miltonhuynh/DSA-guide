import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default function BinarySearch() {

  const python_snippet = 
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

  const java_snippet = 
  `class BinarySearch {

    int binarySearch(int arr[], int l, int r, int x)
    {
        if (r >= l) {
            int mid = l + (r - l) / 2;
            if (arr[mid] == x)
                return mid;
            if (arr[mid] > x)
                return binarySearch(arr, l, mid - 1, x);
 
            return binarySearch(arr, mid + 1, r, x);
        }
        return -1;
    }
 
    public static void main(String args[])
    {
        BinarySearch ob = new BinarySearch();
        int arr[] = { 2, 3, 4, 10, 40 };
        int n = arr.length;
        int x = 10;
        int result = ob.binarySearch(arr, 0, n - 1, x);
        if (result == -1)
            System.out.println("Element not present");
        else
            System.out.println("Element found at index "
                               + result);
    }
}`

const cpp_snippet =
`#include <bits/stdc++.h>
using namespace std;

int binarySearch(int arr[], int l, int r, int x)
{
	if (r >= l) {
		int mid = l + (r - l) / 2;

		if (arr[mid] == x)
			return mid;

		if (arr[mid] > x)
			return binarySearch(arr, l, mid - 1, x);

		return binarySearch(arr, mid + 1, r, x);
	}

	return -1;
}

int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int n = sizeof(arr) / sizeof(arr[0]);
	int result = binarySearch(arr, 0, n - 1, x);
	(result == -1)
		? cout << "Element is not present in array"
		: cout << "Element is present at index " << result;
	return 0;
}
`

const javascript_snippet = 
  `<script>

  function binarySearch(arr, l, r, x){
    if (r >= l) {
      let mid = l + Math.floor((r - l) / 2);
  
      if (arr[mid] == x)
        return mid;

      if (arr[mid] > x)
        return binarySearch(arr, l, mid - 1, x);

      return binarySearch(arr, mid + 1, r, x);
    }
  

    return -1;
  }
  
  let arr = [ 2, 3, 4, 10, 40 ];
  let x = 10;
  let n = arr.length
  let result = binarySearch(arr, 0, n - 1, x);
  (result == -1) ? document.write( "Element is not present in array")
          : document.write("Element is present at index " +result);
  </script>
  `



  return (
    <div class="Concept_page">
      <div class="Concept_title">Binary Search</div>
      <div class="Concept_description">Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. We used binary search in the guessing game in the introductory tutorial. One of the most common ways to use binary search is to find an item in an array. For example, the Tycho-2 star catalog contains information about the brightest 2,539,913 stars in our galaxy. Suppose that you want to search the catalog for a particular star, based on the star's name. If the program examined every star in the star catalog in order starting with the first, an algorithm called linear search, the computer might have to examine all 2,539,913 stars to find the star you were looking for, in the worst case. If the catalog were sorted alphabetically by star names, binary search would not have to examine more than 22 stars, even in the worst case.</div>
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
                <pre><code>{python_snippet}</code></pre>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="Code">
                <pre><code>{cpp_snippet}</code></pre>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="Code">
                <pre><code>{java_snippet}</code></pre>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="Code">
                <pre><code>{javascript_snippet}</code></pre>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}
