import React from 'react'

export default function BinaryTree() {
	
	const implementation =
	`class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }`

  return (
    <div class="Concept_page">
      <h1>Binary Trees</h1>
      <div class="Container font-m">
				<ul>
					<div class="Section"><li>A tree is a data structure that consists of nodes in a parent/child relationship, nodes can only point to a child and cannot have more than one parent</li></div>
					<div class="Section">
						<li> Some uses of trees:</li>
							<ul class="font-sm">
								<li>HTML DOM</li>
								<li>Network Routing</li>
								<li>Abstract Syntax Tree</li>
								<li>Artificial Intelligence</li>
								<li>Folders in Operating Systems</li>
								<li>Computer File Systems</li>
							</ul>
						</div>
					<div class="Section">
						<li>Common Definitions:</li>
						<ul class="font-sm">
							<li>Root: the top node in a tree</li>
							<li>Child: a node directly connected to another node when moving away from the Root</li>
							<li>Sibling: a group of nodes with the same parent</li>
							<li>Leaf: a is node with no children</li>
						</ul>
					</div>
					<div class="Section">
						<li>A Binary Search tree is a special type of tree in which: </li>
						<ul class="font-sm">
							<li>Every parent node has at most two children</li>
							<li>Every node to the left of a parent node is always less than the parent</li>
							<li>Every node to the right of a parent node is always greater than the parent</li>
						</ul>
					</div>
					<div class="Section"><li>The complexity of Insertion and Searching is O(log n) in the best case and O(n) in the worst case</li></div>
					<div class="Section">
						<li>Implementation Steps</li>
						<ul class="font-sm">
							<li>Create a Node class with a constructor to create properties value, left and right</li>
							<li>Create a Tree class with a constructor to create the root node</li>
							<li>
								Insert
								<ul class="font-sm">
									<li>Create a new node</li>
									<li>Check if there is a root, if not, the root becomes the new node</li>
									<li>If there is a root, check if the value of the new node is greater than or less than the value of the root</li>
									<li>
										If it is greater, check to see if there is a node to the right
										<ul class="font-xsm">
											<li>If there is, move to that node and repeat these steps</li>
											<li>If there is not, add that node as the right property</li>
										</ul>
									</li>
									<li>
										If it is less, check to see if there is a node to the left
										<ul class="font-xsm">
											<li>If there is, move to that node and repeat these steps</li>
											<li>If there is not, add that node as the left property</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								Find
								<ul class="font-sm">
									<li>Check if there is a root, if not, done searching</li>
									<li>If there is a root, check if value of the node is the value we are looking for, return if found</li>
									<li>If not, check if the value is greater than or less than the value of the root or current</li>
									<li>
										If it is greater, check to see if there is a node to the right
										<ul class="font-xsm">
											<li>If there is, move to that node and repeat these steps</li>
											<li>If there isn't, done searching</li>
										</ul>
									</li>
									<li>
										If it is less, check to see if there is a node to the left
										<ul class="font-xsm">
											<li>If there is, move to that node and repeat these steps</li>
											<li>If there isn't, done searching</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</ul>
				<div class="font-l">JavaScript Implementation</div>
				<div class="Code Section">
					<pre>
						<code>
							{implementation}
						</code>
					</pre>
				</div>
				<div class="Section">
					<div class="font-l">LeetCode examples</div>
					<div class="font-m indent">
							<li><a class="Link-green" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/binary-tree-inorder-traversal/">Binary Tree Inorder Traversal [Easy]</a></li>
							<li><a class="Link-green" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/binary-tree-preorder-traversal/">Binary Tree Preorder Traversal [Easy]</a></li>
							<li><a class="Link-green" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/binary-tree-postorder-traversal/">Binary Tree Postorder Traversal [Easy]</a></li>
							<li><a class="Link-green" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/binary-tree-level-order-traversal/">Binary Tree Level Order Traversal [Easy]</a></li>
							<li><a class="Link-green" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/maximum-depth-of-binary-tree/">Maximum Depth of Binary Tree [Easy]</a></li>
							<li><a class="Link-green" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/root-equals-sum-of-children/">Root Equals Sum of Children [Easy]</a></li>
							<li><a class="Link-yellow" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/unique-binary-search-trees/">Unique Binary Search Trees [Medium]</a></li>
							<li><a class="Link-yellow" rel="noreferrer" target="_blank" href="hhttps://leetcode.com/problems/sum-root-to-leaf-numbers/">Sum Root to Leaf Numbers [Medium]</a></li>
							<li><a class="Link-red" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/binary-tree-maximum-path-sum/">Binary Tree Maximum Path Sum [Hard]</a></li>
					</div>
				</div>
      </div>
    </div>
  )
}
