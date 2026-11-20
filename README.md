# GigLink — INFR3120 Fall26 Project

A local gig board web application built with the MEAN-style stack (Express + EJS + MongoDB) for INFR3120 Web and Scripting Programming, Project Part 1 (First Release).

GigLink lets people post short-term gigs (moving help, web work, cleaning, tutoring, and more) and browse, edit, or remove them. Full CRUD on the Gig object.

## Tech stack

- **Node.js + Express** (scaffolded with `express-generator`)
- **EJS** view engine
- **MongoDB** (MongoDB Atlas) with **Mongoose**
- **method-override** for PUT/DELETE from HTML forms
- **dotenv** for config/secrets

## Features (First Release)

- Landing page with branding and the latest gigs
- Post a Gig (hero action) with validation
- Browse all gigs
- View a single gig
- Edit a gig
- Delete a gig

## Running locally

1. Install dependencies:
   ```
   npm install
   ```
2. Create a `.env` file from the example and add your MongoDB Atlas connection string:
   ```
   cp .env.example .env
   ```
   Then edit `.env` and set `MONGODB_URI`.
3. Start the app:
   ```
   npm start
   ```
4. Open `http://localhost:3000`.

## Important

The real `.env` file (with the MongoDB password) is **not** committed. It is listed in `.gitignore`. Only `.env.example` is in the repo.

## Project plan

See the project document in this repository (`INFR3120 Fall26 Project - Part 1.docx`) for the project idea and the team task breakdown.
