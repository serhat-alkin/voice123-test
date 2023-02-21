# voice123-test


# Setup
Execute these commands below on project root folder to install all dependencies <br />
`cd server && npm install` <br />
`cd ..`<br />
`cd client && npm install`<br />

Execute this command below on project root folder to run project<br />
`cd server && npm run dev`<br />

To run backend tests<br />
`cd server && npm run test` 

# Working Log

* 20/02/2023 16:00 PM - Started reading requirements. 
* 20/02/2023 16:30 PM - Started testing the sample endpoint using postman and examined response body and headers.
* 20/02/2023 17:30 - 18:30 - I asked my questions regarding requirements and also started thinking about how i can design the solution.
* I didn't code anything on first day.
* 21/02/2023  2:07 PM - Created node and react project template and pushed to the github
* 21/02/2023  2-07 PM - 5:07 PM - Started writing backend tests and then search api logic. Committed backend logic to github, tested it using postman
* 21/02/2023  5-07 PM - 8:42 PM - Implemented frontend logic using react and comitted my code to github. Tested implementation using UI
* 21/02/2023  8:42 PM - 8:57 PM - Updated project setup to run both backend and frontend with one command. 
 


# Technical notes and future work
* I had issues on getting 4 custom headers (x-list-page-size, x-list-total-rows, x-list-current-page, x-list-total-pages).I was able to see them on postman, node-server and browser but couldn't get them in react. To be able to get them in react, i returned a custom response from node server to front-end.
* Some constants like url etc.. can be moved to environment variable or constants.
* Backend tests can be improved with mock data.
* I would explore a better pagination system like react-paginate.  
* API keeps returning data for only &page=1. I would review the API to figure out why it works this way.
* I would explore and implement caching techniques in React.
* Note that during my three years at BunnyStudio, I shipped a few front-end features to production. Primarily worked with Camunda workflows, created backend APIs, and performed some DevOps tasks. Although I had a basic knowledge of React and Angular at the time, this experience provided me with the opportunity to further improve my front-end development skills.
