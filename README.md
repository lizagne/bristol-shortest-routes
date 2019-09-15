# My Bristol
The shortest routes around my favourite places in Bristol

This is a coding challenge to create a react app to find the shortest routes.

PLEASE NOTE: This is definitely still very much WIP, I have loved the challenge, but have realised that I have a lot more learning to do in getting up to scratch with React. But I'm determined to do it and will continue on this project to try to complete it as a study tool.

## To run the project:
* NPM and a command line tool is needed
* git clone this repo
* run npm i
* run npm start or yarn start to view on localhost:3000

## Technologies used
React, JSX, Javascript, HTML, CSS, Git 


### Research

When researching about how to find the shortest routes, I read about 2 main theories. [Firstly Dijkstra’s algorithm,](https://www.pearsonschoolsandfecolleges.co.uk/secondary/Mathematics/16plus/AdvancingMathsForAQA2ndEdition/Samples/SampleMaterial/Chp-02%20023-043.pdf)which is used when there is one start point and one finish point.

I then came across the [Floyd-Warshall algorithm](https://www.youtube.com/watch?v=oNI0rf2P9gE")after watching this explanation of it.</a> The video seemed to be saying that it was more thorough. When invesitagting further, I found out that the main difference is:  

"Dijkstra algorithm is used only when you have a single source and you want to know the smallest path from one node to another, ... Floyd-Warshall algorithm is used when any of all the nodes can be a source, so you want the shortest distance to reach any destination node from any source node." - Stack Exchange user.

I decided that as my plan was to make a simple map of a few of my favourite places in Bristol. It would maybe make more sense to attempt to use this algorithm.


## Planning and Wireframes:

I had read this article, which is implementing [Dijkstra's Algorithm in Javascript](https://medium.com/@adriennetjohnson/a-walkthrough-of-dijkstras-algorithm-in-javascript-e94b74192026). And liked the idea that instead of just using nodes as numbers or letters, I would use places personal to me.

So I wanted to keep it simple because I knew this would be a very hard challenge for me, as I've only recently gone back to learning React again.






