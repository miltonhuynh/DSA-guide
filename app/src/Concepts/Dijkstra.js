import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dijkstra() {

  let navigate = useNavigate();

  const implementation =
    `import heapq

class PriorityQueue:
    def __init__(self):
        self.values = []
    
    def enqueue(self, val, priority):
        heapq.heappush(self.values, (priority, val))
    
    def dequeue(self):
        return heapq.heappop(self.values)[1]

class WeightedGraph:
    def __init__(self):
        self.adjacency_list = {}
    
    def add_vertex(self, vertex):
        if vertex not in self.adjacency_list:
            self.adjacency_list[vertex] = []
    
    def add_edge(self, vertex1, vertex2, weight):
        self.adjacency_list[vertex1].append({'node': vertex2, 'weight': weight})
        self.adjacency_list[vertex2].append({'node': vertex1, 'weight': weight})
    
    def dijkstra(self, start, finish):
        nodes = PriorityQueue()
        distances = {vertex: float('inf') for vertex in self.adjacency_list}
        previous = {vertex: None for vertex in self.adjacency_list}
        path = []
        
        distances[start] = 0
        nodes.enqueue(start, 0)
        
        while len(nodes.values):
            smallest = nodes.dequeue()
            
            if smallest == finish:
                while previous[smallest]:
                    path.append(smallest)
                    smallest = previous[smallest]
                break
            
            if smallest is not None and distances[smallest] != float('inf'):
                for neighbor in self.adjacency_list[smallest]:
                    next_node = neighbor['node']
                    candidate = distances[smallest] + neighbor['weight']
                    
                    if candidate < distances[next_node]:
                        distances[next_node] = candidate
                        previous[next_node] = smallest
                        nodes.enqueue(next_node, candidate)
        
        path.append(start)
        return path[::-1]
  }`

  return (
    <div class="Concept_page">
      <h1>Dijkstra's algorithm</h1>
      <main>
        <ul>
          <section><li>Dijkstra's algorithm is used to traverse <ref class="Link" onClick={() => navigate("../Graphs")}><u>Graphs</u></ref> and uses a <ref class="Link" onClick={() => navigate("../PriorityQueue")}><u>Priority Queue</u></ref></li></section>
          <section><li>It is a single source shortest path algorithm for graphs with non-negative edge weights</li></section>
          <section><li>Finds the shortest path between two vertices on a graph</li></section>
          <section>
            <li>
              <u>Common uses</u>:
              <ul class="font-sm">
                <li>GPS: finding the fastest route</li>
                <li>Network routing: finds open shortest path for data</li>
                <li>Biology: used to model the spread of viruses among humans</li>
                <li>Airline tickets: finding cheapest route to your destination</li>
              </ul>
            </li>
          </section>
          <section>
            <li>
              <u>The approach</u>:
              <ul class="font-sm">
                <li>1) Every time we want to visit a new node, pick the node with the smallest known distance to visit first</li>
                <li>2) Once we moved to the node we're going to visit, we look at each of its neighbors</li>
                <li>3) For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node</li>
                <li>4) If the new total distance to a node is less than the previous total, we store the new shorter distance for that node (a.k.a. relaxation)</li>
              </ul>
            </li>
          </section>
          <section>
            <li>
              <u>Algorithm overview</u>:
              <ul class="font-sm">
                <li>1) Maintain a distance array where the distance to every node is positive infinity. Distance to start node is 0</li>
                <li>2) Maintain a Priority Queue of key-value pairs (index, distance) which tell you which node to visit next based on sorted minimum value</li>
                <li>3) Start by inserting the key-value pair (s,0) into the Priority Queue and loop while it is not empty pulling out the next most promising (index, distance) pair</li>
                <li>4) Interate over all edges outwards from the current node and relax each edge apprending a new (index, distance) key-value pair to the Priority Queue for every relaxation</li>
              </ul>
            </li>
          </section>
          <section>
            <li>
              <u>Implementation steps</u>:
              <ul class="font-sm">
                <li>Make sure your graph implementation has weighted edges</li>
                <li>Create a function that accepts a starting and ending vertex</li>
                <li>Create an object (for distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0</li>
                <li>After setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we began</li>
                <li>Create another object called previous and set each key to be every vertex in the adjacency list with a value of null</li>
                <li>
                  Start looping as long as there is anything in the priority queue
                  <ul class="font-xsm">
                    <li>Dequeue a vertex from the priority queue</li>
                    <li>If that vertex is the same as the ending vertex, we are done</li>
                    <li>Otherwise loop through each value in the adjacency list at that vertex</li>
                    <ul class="font-xxsm">
                      <li>Calculate the distance to that vertex from the starting vertex</li>
                      <li>If the distance is less than what is currently stored in our distances object, (1) Update the distances object with the new lower distance, (2) Update the previous object to contain that vertex and (3) Enqueue that vertex with the total distance from the start node</li>
                    </ul>
                  </ul>
                </li>
              </ul>
            </li>
          </section>
        </ul>
        <div class="font-l">Python Implementation</div>
        <section>
          <pre>
            <code>
              {implementation}
            </code>
          </pre>
        </section>
        <section>
          <div class="font-l">LeetCode examples</div>
            <div class="font-m indent">
              <li><a class="Link-yellow" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/path-with-minimum-effort/">Path With Minimum Effort [Medium]</a></li>
              <li><a class="Link-yellow" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/cheapest-flights-within-k-stops/">Cheapest Flights Within K Stops [Medium]</a></li>
              <li><a class="Link-yellow" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/network-delay-time/">Network Delay Time [Medium]</a></li>
              <li><a class="Link-red" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/">Reachable Nodes In Subdivided Graph [Medium]</a></li>
              <li><a class="Link-red" rel="noreferrer" target="_blank" href="https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/">Minimum Cost to Make at Least One Valid Path in a Grid [Hard]</a></li>
          </div>
        </section>
      </main>
    </div>
  )
}
