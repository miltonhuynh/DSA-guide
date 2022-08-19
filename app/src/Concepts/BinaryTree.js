import React from 'react'

export default function BinaryTree() {
  return (
    <div class="Concept_page">
      <div class="Concept_title">Binary Trees</div>
      <div class="Container">
				<div class="font-m">
					<ul>
						<li>A tree is a data structure that consists of nodes in a parent/child relationship, nodes can only point to a child and cannot have more than one parent</li><br/>
						<li> Some uses of trees:</li>
							<div class="font-sm">
								<ul>
								<li>HTML DOM</li>
								<li>Network Routing</li>
								<li>Abstract Syntax Tree</li>
								<li>Artificial Intelligence</li>
								<li>Folders in Operating Systems</li>
								<li>Computer File Systems</li>
								</ul><br/>
							</div>
						<li>Common Definitions:</li>
							<div class="font-sm">
								<ul>
								<li>Root: the top node in a tree</li>
								<li>Child: a node directly connected to another node when moving away from the Root</li>
								<li>Sibling: a group of nodes with the same parent</li>
								<li>Leaf: a is node with no children</li>
								</ul><br/>
							</div>
						<li>A Binary Search tree is a special type of tree in which: </li>
						<div class="font-sm">
							<ul>
								<li>Every parent node has at most two children</li>
								<li>Every node to the left of a parent node is always less than the parent</li>
								<li>Every node to the right of a parent node is always greater than the parent</li><br/>
							</ul>
						</div>
						<img src={require('../images/binarytree.png')} style={{width: "30vw"}} alt="Singly linked list illustration"></img><br/><br/><br/>
					</ul>
				</div>
      </div>
    </div>
  )
}
