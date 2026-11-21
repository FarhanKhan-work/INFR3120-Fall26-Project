# GigLink

INFR3120 Fall26 Project - Part 1

GigLink is a gig board where people can post small local jobs (moving help, web stuff, cleaning, tutoring, etc.) and others can browse them. You can add a gig, see all of them, open one, edit it, or delete it. Basically full CRUD on gigs.

## Built with
- Node.js + Express (made with express-generator)
- EJS for the views
- MongoDB (Atlas) with Mongoose
- method-override so the forms can do PUT and DELETE
- dotenv for the db connection

## How to run
1. npm install
2. make a .env file (copy .env.example) and put your MongoDB connection string in MONGODB_URI
3. npm start
4. go to http://localhost:3000

## Note
The real .env with the db password is not pushed to github, its in .gitignore. Only .env.example is here.

See the project doc in the repo for the project idea and who did what.

Musawer: project idea and documentation
