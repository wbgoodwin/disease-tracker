# disease-tracker

Getting Started:
I recommend visual studio code, but any editor will work.

1. Clone this repository
2. Download nodejs https://nodejs.org/en/ . The most recent LTS version is fine.
3. (For the backend, not entirely necessary rn) Download docker desktop https://www.docker.com/products/docker-desktop . Docker is a way to containerize applications. I use this for storing my database instances. It makes it more managable. Docker also makes it easier to deploy and set up CI/CD pipleines.


Running the Project:
1. Navigate to /disease-tracker/frontend in the terminal
2. Enter `npm i`. This installs all of the dependencies for the project located in the package.json file
3. Enter `npm start` to run the project
4. The frontend should be running on http://localhost:3000

backend to come later when we know what db we are using...


Frameworks:
* React (specifically react hooks) https://reactjs.org/docs/hooks-intro.html
* Apollo Graphql. This is a schema for writing queries and returning data. It makes the process much cleaner. https://www.apollographql.com
* Nodejs. Normally javascript only runs in the browser, however,the chrome javascript engine was put in a c++ application. This allows for javascript to run in the backend as a server. It is a popular option for web servers and is relatively easy to get started with.
* Typescript. This is similar to javascript. The difference is that Typescript is strongly types, while javascript is loosly typed. Using Typescript helps to prevent issues from the lack of having stongly types variables. Typescript compiles down to javascript and then the javascript code is what runs in the browser/ on the server. https://www.typescriptlang.org
* react-bootstrap. This is a frontend framework that has prebuilt components that can be used in the application (navbar, forms, buttons, etc.) https://react-bootstrap.github.io
