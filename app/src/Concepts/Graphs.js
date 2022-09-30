import React from 'react'

export default function Graphs() {
  const implementation =
  `class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1
        );
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);

        return result;
    }
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }
    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
           

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}`

  return (
		<div class="Concept_page">
			<div class="Concept_title">Graphs</div>
			<div class="Container font-m">
				<ul>
					<li>A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph</li><br/>
					<li>
						<u>Uses for graphs:</u>
						<ul class="font-sm">
							<li>Social Networks</li>
							<li>Location / Mapping</li>
							<li>Routing Algorithms</li>
							<li>Visual Hierachy</li>
							<li>File System Optimizations</li>
						</ul>
					</li><br/>
					<li>
						<u>Some definitions:</u>
						<ul class="font-sm">
							<li><u>Vertex</u>: a node</li>
							<li><u>Edge</u>: connection between nodes</li>
							<li><u>Weighted/Unweighted</u>: values assigned to distances between vertices</li>
							<li><u>Directed/Undirected</u>: directions assigned to distances between vertices</li>
						</ul>
					</li><br/>
					<li>
						There are two main ways to store a graph:<br/>
						<ul class="font-sm">
							<li>
								1) <u>Adjacency Matrix</u>
								<ul class="font-xsm">
								<li>Stores a graph of N nodes with a two dimensional N x N array</li><br/>
								<img src={require('../images/adj_matrix.png')} style={{width: "45vw"}} alt="Adjacency matrix illustration"></img><br/><br/>
								</ul>
							</li>
							<li>
								2) <u>Adjacency Graph</u>
								<ul class="font-xsm">
									<li>Represents a graph as an array of linked lists</li>
									<li>The index of the array represents a vertex and each element in its linked list represents the other vertices that form an edge with the vertex</li>
									<li>Efficient in terms of storage because we only need to store the values for the edges</li><br/>
									<img src={require('../images/adj_list.png')} style={{width: "45vw"}} alt="Adjacency list illustration"></img>
								</ul>
							</li><br/>
              <li>Differences between Adjacency Matrices and Adjacency Lists</li>
              <ul class="font-xsm">
                <li>
                  Big O<br/><br/>
                  <img src={require('../images/adj_compare.png')} style={{width: "40vw"}} alt="Adjacency comparison illustration"></img>
                </li>
                <li>Adjacency lists take up less space in sparse graphs in comparison to matrices</li>
                <li>Adjacency lists are also faster to iterate over all edges</li>
                <li>Adjacency matrices are faster to lookup a specific edge though</li>
                <li>Adjacency lists tend to be better for the real world since in most situations, there are more vertices and less connections</li>
              </ul>
						</ul>
					</li><br/>
					<li>
						Graph Traversal
						<ul class="font-sm">
							<li>Visiting, updating or checking each vertex in a graph</li>
							<li>
								Uses:
								<ul class="font-xsm">
									<li>Peer to peer networking</li>
									<li>Web crawlers</li>
									<li>Finding closest matches or recommendations</li>
									<li>Shortest path problems (GPS, solving mazes)</li>
								</ul>
							</li>
							<li>
								<u>Depth First Traversal:</u>
								<ul class="font-xsm">
									<li>Explore as far down as possible down one branch before backtracking</li>
								</ul>
							</li>
						</ul>
					</li><br/>
					<li>Implementation steps:</li>
					<ul class="font-sm">
						<li>
							<u>Add vertex (data point)</u>
							<ul class="font-xsm">
								<li>Write a method that accepts the name of a vertex</li>
								<li>It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array</li>
								<img src={require('../images/addvertex.png')} style={{width: "20vw"}} alt="Adding a vertex illustration"></img>
							</ul>
						</li>
						<li>
							<u>Add edge (connection between 2 vertices)</u>
							<ul class="font-xsm">
								<li>The function should accept two vertices, you can call them vertex1 and vertex2</li>
								<li>The function should find in the adjacency list the key of vertex1 and push vertex2 to the array</li>
								<li>The function should find in the adjacency list the key of vertex2 and push vertex1 to the array</li>
								<img src={require('../images/addedge.png')} style={{width: "25vw"}} alt="Adding a edge illustration"></img>
							</ul>
						</li>
						<li>
							<u>Remove edge</u>
							<ul class="font-xsm">
								<li>The function should accept two vertices, you can call them vertex1 and vertex2</li>
								<li>The function should reassign the key of vertex1 to be an array that does not contain vertex2</li>
								<li>The function should reassign the key of vertex2 to be an array that does not contain vertex1</li>
								<img src={require('../images/removeedge.png')} style={{width: "25vw"}} alt="Remove a edge illustration"></img>
							</ul>
						</li>
						<li>
							<u>Remove vertex</u>
							<ul class="font-xsm">
								<li>The function should accept a vertex to remove</li>
								<li>The function should loop as long as there are any other vertices in the adjacency list for that vortex</li>
								<li>Inside of the loop, call the Remove Edge function with the vertex you are removing and any values in the adjacency list for that vertex</li>
								<li>Delete the key in the adjacency list for that vertex</li>
								<img src={require('../images/removevertex.png')} style={{width: "30vw"}} alt="Remove a vertex illustration"></img>
							</ul>
						</li><br/>
						<li>
							<u>DFS</u>
							<ul class="font-xsm">
								<li>The function should accept a vertex to remove</li>
								<img src={require('../images/removevertex.png')} style={{width: "30vw"}} alt="Remove a vertex illustration"></img>
							</ul>
						</li><br/>
						<li>Depth First Search (recursive method)</li>
						<ul class="font-xsm">
							<li>The function should accept a starting node</li>
							<li>Create a list to store the end result to be returned at the very end</li>
							<li>Create an object to store visited vertices</li>
							<li>
								Create a helper function which accepts a vertex
								<ul class="font-xxsm">
									<li>The helper function should return early if the vertex is empty</li>
									<li>The helper function should place the vertex it accepts into the visited object and push that vertex into the result array</li>
									<li></li>
								</ul>
							</li>
						</ul>
					</ul>
				</ul>
        <div>JavaScript Implementation (includes how to create Graph and BFS/DFS traversal)</div>
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
