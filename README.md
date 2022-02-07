# LoudCloud
## Live Site
LoudCloud was inspired from popular music streaming platform SoundCloud.

## Features
### New account creation, login, log out, and guest/demo login.
* Users can sign up, log in, and logout.
* Guests can log in as a demo user to try out all features.

### Songs
* Logged in users can listen and view songs.
* Logged in users can upload songs.
* Logged in users can edit songs they uploaded.
* Logged in users can delete songs they uploaded.

### User Profile Page
* Logged in users can edit their profile.
* Logged in users can view their own profile and other user's profile page.


## Get started
1. Clone this repo `git clone git@github.com:Breadsandwich/loudcloud.git`

2. Install dependencies from the frontend and backend
* cd /backend `npm install`
* cd /frontend `npm install`

3. Create Postgresql user with a password in PSQL.
* `CREATE USER <name> WITH PASSWORD <'password'> CREATEDB;`

4. Create a .env file in /backend directory based on the .env.example file.

5. Enter your username and password information into your .env file along with your desired database name, a secured combination of characters for your JWT_SECRET, and your PORT (preferably 5000).

6. Add the following proxy to your package.json file in /frontend directory, replacing or keeping the 5000 port to match your PORT configuration found in your .env file.
* `"proxy": "http://localhost:5000"`

7. Create Database, Migrate, and Seed models.
* `npx dotenv sequelize db:create`
* `npx dotenv sequelize db:migrate`
* `npx dotenv sequelize db:seed:all`

8. Start the server in /backend and /frontend directories in two seperate terminals (backend first, then frontend second).
* `cd /backend then: npm start`
* `cd /frontend then: npm start`


## Technologies Used
* PostgreSQL
* Express
* React
* Redux
* Node.js
* Sequelize
* HTML
* CSS
