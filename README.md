# żywieniepokolenie.pl

### `Introduction`

The idea of this project was born while one of the classes i attended as a Dietetics student. The task given to the students was to make a facebook/instagram profile as a part of bigger nutritional education project we have been doing throughout whole semester. I decided to create a simple website for my project. After i finished a simple landing page and already passed the task, I decided to give it some more time and expand the project with some new, more advanced features as a form of learning programming.

### `General info`

The purpose of this project is to introduce a healthy lifestyle campaign aimed for parents of young children. It also has an informative/edducational function. The website has been made on shape of a blog. Admin can create and share articles by using an admin panel. 

### `Functionality`
The main feature of this web application is the posibility to create an article by the admin in an admin panel. To reach an admin panel user has to add "/admin" to the main route. It is not secured by any login panel as it normally should be.
Every posts data, including pictures is stored in a firestore cloud where it's fetched from.
There are some missing features that could be included in this project in the future, like more advanced admin panel, login wall, statistics for articles, ability to edit or delete articles without the use of firestore, working tags system.


### `Reflection`

In the process of making this project i learnd how to work a Back-End as a Service services. I learned how to store the data and fetch it without a need of storing them inside the project files. One of the most difficult things to menage was to create my own post inside of an Admin Panel and interact with back-end side to push it there. I also delved deeper into the capabilities of React Library. This has been so far the most complex project of mine and that made me aware of how important a well planned file structure is.


### `Used technologies`

├── react@17.0.2

├── styled-components@5.3.3

├── firebase@9.6.1 - firestore database & storage

├── react-intersection-observer@8.33.1

├── react-router-dom@6.0.2

### `Installation and Setup Instructions`

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/ideas`  
