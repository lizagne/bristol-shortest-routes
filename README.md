# My Bristol
The shortest routes around my favourite places in Bristol.

This is a coding challenge to create a react app to find the shortest routes between two points.

PLEASE NOTE: This is definitely still very much WIP, I have loved the challenge, but have realised that I have a lot more learning to do in getting up to scratch with React. But I'm determined to do it and will continue on this project to try to complete it as a study tool.

## To run the project:
* git clone this repo
* run npm i
* run npm start or yarn start to view on localhost:3000

## Technologies used
React, JSX, Javascript, HTML, CSS, Git 

## Screenshots of app (so far!)

![Screen Shot 2019-09-15 at 22 11 00](https://user-images.githubusercontent.com/26763021/64928068-e2ed8400-d80a-11e9-97d2-137541e64db5.png)

![Screen Shot 2019-09-15 at 22 10 51](https://user-images.githubusercontent.com/26763021/64928069-e3861a80-d80a-11e9-990d-0cc70a7ba4fd.png)

### Research

When researching about how to find the shortest routes, I read about 2 main theories. [Firstly Dijkstra’s algorithm,](https://www.pearsonschoolsandfecolleges.co.uk/secondary/Mathematics/16plus/AdvancingMathsForAQA2ndEdition/Samples/SampleMaterial/Chp-02%20023-043.pdf)which is used when there is one start point and one finish point.

I then came across the [Floyd-Warshall algorithm](https://www.youtube.com/watch?v=oNI0rf2P9gE")after watching this explanation of it.</a> The video seemed to be saying that it was more thorough. When invesitagting further, I found out that the main difference is:  

"Dijkstra algorithm is used only when you have a single source and you want to know the smallest path from one node to another, ... Floyd-Warshall algorithm is used when any of all the nodes can be a source, so you want the shortest distance to reach any destination node from any source node." - Stack Exchange user.

I decided that as my plan was to make a simple map of a few of my favourite places in Bristol. It would maybe make more sense to attempt to use this algorithm.

## Planning and Wireframes:

I had read this article, which is implementing [Dijkstra's Algorithm in Javascript](https://medium.com/@adriennetjohnson/a-walkthrough-of-dijkstras-algorithm-in-javascript-e94b74192026). And liked the idea that instead of just using nodes of numbers or letters, I would use places personal to me.

So I wanted to keep it simple because I knew this would be a very hard challenge for me, as I've only recently gone back to learning React again. 

I made some quick drawings of what I wanted the app to show. Keeping it to 6 places made me feel that it was doable.

![WhatsApp Image 2019-09-15 at 22 31 25 (2)](https://user-images.githubusercontent.com/26763021/64927901-cb150080-d808-11e9-9aca-3267fbb8bb8c.jpeg)

![WhatsApp Image 2019-09-15 at 22 31 25 (1)](https://user-images.githubusercontent.com/26763021/64927902-cb150080-d808-11e9-94e8-3c8f04b73157.jpeg)

![WhatsApp Image 2019-09-15 at 22 31 25](https://user-images.githubusercontent.com/26763021/64927903-cb150080-d808-11e9-9ed5-f09c315dd9c9.jpeg)

I think my problem was that I was spending a lot of time during the week, planning it, and then reading lots of articles about the Floyd-Warshall theory. Looking at other attempts at creating apps or Javascript attempts. 

I am also aware that I haven't used Typescript, as I'd never used this language before, even though it's a subset of Javascript I thought it would also slow me down. [I have watched this video about Typescript however](https://channel9.msdn.com/Events/Build/2017/B8088/), and read a few [articles about using Typescript with React](https://blog.logrocket.com/how-why-a-guide-to-using-typescript-with-react-fffb76c61614/#targetText=It%20is%20a%20strict%20superset,in%20the%20form%20of%20interfaces). And there's a lot of positivity around it, I would like to learn more when I have more time.

## The Algorithm/The theory:

The aim of the app was to create a graph of some of my favourite places around bristol, then using the Floyd-Warshall algorithm, work out the shortest route between 2 of the points. I had made measurements of the distances between each place which would be the graph to run the algorithm on.

The next step would be to create a distance array between all the vertices in the graph, and write in their minimum distances. In my case, 6 vertices, from my quick sketch above where I had worked out the actual distances in miles between the connecting places.NB this doesn't show the actual distances from any place to any other place. I would like to change that for the future, as I'm sure it's doable. 

The array would be like a weighted graph table, where the distances between each pair of vertices are calculated. So 1 - 1, 1 - 2, 1 - 3 and so on. The distance between a number and itself is obviously zero so that is an easy one to write out. The table would look something like this:

![Screen Shot 2019-09-16 at 06 58 51](https://user-images.githubusercontent.com/26763021/64936783-7cd72000-d84f-11e9-9c12-decfaa083584.png)

I think looking at my table, I have perhaps missed something, as all the shortest distances would be the same on the opposite axis. I need to double check this. In the comments everyone is saying that they would work on something easier than 4 vertices, but I have six! I think I need to go back to the drawing board perhaps!

(https://www.youtube.com/watch?time_continue=92&v=4OQeCuLYj-4).

To be continued...

## The Result and Summary/thoughts:

Because I realised I was not going to be able to work with the algorithm. I thought I would get the frontend of the app to look as good as possible, whilst still trying to get some simple things like props and state to work.

I have ensured that the app looks good responsively, using media queries. Unfortunately I had to use vanilla css as I couldn't get my gulpfile to work to run SASS. I was spending too long trying to debug this, so instead concentrated on making sure I was using BEM classes, and I practiced used CSS Grid, which so far, I've not used with clients as the support isn't as well covered as flex but I wanted to use it for this.

I am excited to go back and work more on understanding the algorithm and following more tutorials about it. Practising more javascript and React and Redux it's been a great learning experience and I'm keen to get back to my Udemy course, Javascript on FreeCodeCamp and other learning materials.

In terms of unit tests I haven't managed to get any logic to work so far, but I intend to continue to work through this problem. I am determined to get better at React and thank you for this opportunity.


