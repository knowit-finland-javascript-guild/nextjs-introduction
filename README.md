# Introduction to Next.js
This repository includes base setup of a Next.js project with an added local database. <br>
You can choose to code in JavaScript or TypeScript. 
<br> ```/js``` folder for JavaScript template and 
<br> ```/ts``` for TypeScript template <br>
Respectively, to find the solutions go to
<br> ```/js-solution``` folder for JavaScript solution and 
<br> ```/ts-solution``` for TypeScript one <br>

To get started, make sure you have Node.js installed. 
<br>Then clone this repository, go to js/ts folder and,
run:

```npm install``` to install packages &

```npm run dev``` to start the development server on [localhost](http://localhost:3000)

Through these tasks you will learn the basics of Next.js. 
Next.js is full of features <br> so I tried to pick the ones that are straightforward and can be implemented during the worskhop.

🥳 This party icon is used at the end of every task as a checkpoint so you can check if you got the task right.

Helpful resources
* /docs folder contains exported presentation slides
* Next.js [documentation](https://nextjs.org/docs)

Tasks overview
* Create pages
* Create navigation links
* Use the Image component and assets folder
* Get more out of Server-side rendering
* use Static-site generation on a page
* Bonus tasks


## Pretask:
Clone the repository, install the packages, and start the development server

##### 🥳 You should see next.js introduction page at [localhost:3000](http://localhost:3000)

## Task 1: Creating pages
1.1 Create a page that is displayed at route [/favoritecat](localhost:3000/favoritecat) and shows the ```favoriteCat``` Component.

1.2 Create a page that gets displayed at route [/cats/list](localhost:3000/cats/list) and shows the ```catsList``` Component.

[Routing documentation](https://nextjs.org/docs/routing/introduction)

##### 🥳 You now have pages that show components that can be visited by url

## Task 2: Add navigation links to navbar
Inside ``` navbar ``` Component, create navigation links for the following routes: 
* [/](localhost:3000/)
* [/favoritecat](localhost:3000/favoritecat)
* [/cats/list](localhost:3000/cats/list)
 

Use Next.js'  ```<Link>``` Component: [Link documentation](https://nextjs.org/docs/api-reference/next/link)

##### 🥳 Links are now shown on site and they redirect you to correct pages

## Task 3: Use image from assets
In ``` favoriteCat ``` Component, display ```cat.jpeg``` image that is located in ```/public``` folder.

Use Next.js' ```<Image>``` Component: [Image documentation](https://nextjs.org/docs/basic-features/static-file-serving)

##### 🥳 Someone's favorite cat is now being represented in style


## Task 4: Take more advantage of Server Side Rendering
Create a page ``` /cats/list-ssr-props ``` that uses getServerSideProps function to fetch cats data. Pass this data to the page as props. Import and use Component ``` catsListWithProps ``` to show cats in this page.

[getServerSideProps documentation](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)
##### 🥳 /cats/list-ssr-props now uses pre-rendered props. No fetch is done client-side

## Task 5: Take advantage of Static Site Generation
Create a page ``` /cats/list-ssg ``` that uses getStaticProps function to fetch cats data. Import and use Component ``` catsListWithProps ``` to show cats in this page.
##### 🥳 /cats/list-ssg now uses pre-rendered props. The page is pre-rendered at build-time and served as static html file. No rendering is done in runtime

[getStaticProps documentation](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)


&nbsp;
## 📝 Bonus tasks/material:
* Try out dynamic routing and create page to show an individual cat
* Try the new app directory
[Upgrade guide](https://beta.nextjs.org/docs/upgrade-guide#migrating-from-pages-to-app)
* Deploy your Next.js app to Vercel
[Vercel](https://vercel.com/)
#### 🦺Towards a typesafe stack🎉
* Configure Next.js to use tRPC
[tRPC + Next.js](https://trpc.io/docs/nextjs)
* Integrate Prisma ORM with some db solution
[Prisma](https://www.prisma.io/nextjs)
