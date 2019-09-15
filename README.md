# My Bristol
## The shortest routes around my favourite places in Bristol

This is a coding challenge to create a react app to find the shortest routes.

<hr>

### Research

When researching about how to find the shortest routes, I read about 2 main theories. Firstly Dijkstra’s algorithm, <a href ="https://www.pearsonschoolsandfecolleges.co.uk/secondary/Mathematics/16plus/AdvancingMathsForAQA2ndEdition/Samples/SampleMaterial/Chp-02%20023-043.pdf" </a> Which is used when there is one start point and one finish point. 

    I then came across <a href="https://www.youtube.com/watch?v=oNI0rf2P9gE">the Floyd-Warshall algorithm after watching this explanation of it.</a> The video seemed to be saying that it was more thorough. When invesitagting further, I found out that the main difference is: 

"Dijkstra algorithm is used only when you have a single source and you want to know the smallest path from one node to another, ... Floyd-Warshall algorithm is used when any of all the nodes can be a source, so you want the shortest distance to reach any destination node from any source node." - Stack Exchange user.

I decided that as my plan was to make a simple map of a few of my favourite places in Bristol. It would maybe make more sense to attempt to use this algorithm.

I had read this article, which is  <a href="https://medium.com/@adriennetjohnson/a-walkthrough-of-dijkstras-algorithm-in-javascript-e94b74192026"> implementing Dijkstra's Algorithm in Javascript </a>. And liked the idea that instead of just using nodes as numbers or letters, I would use places personal to me.



