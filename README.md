This is a MongoDB with Auth.

I have deployed the project on the website
https://mern-stack-tutorial-frontend.vercel.app/user-home

This is the backend deployment:
https://mern-stack-tutorial-backend.vercel.app/

You should deploy backend (NodeJS + ExpressJS) on Vercel first,
then deploy frontend (ReactJs) on Vercel!

**STEP 1: [Deploy Backend]**
In backend, the main file is **server.js**

Go to **package.json**,   change **"main"** into **"server.js"**,
  add  **"dev" : "node server.js"** into **"scripts"**

1) Open www.vercel.com

2) Add New -> Project

3) Import Git Repository, select the Repository

4) Configure Project
Framework Preset, select **other**
Root Directory, select **backend**
Copy all the data of **".env"** file, and paste them into **Environment Variables**

5) Click "Deploy"

6) You can see "You succeeded to deploy backend to Vercel!".

**STEP 2: [Deploy Frontend]**
1) Open www.vercel.com

2) Add New -> Project

3) Import Git Repository, select the Repository

4) Configure Project
Framework Preset, select **Create React App**
Root Directory, select **frontend**

5）You can see the frontend pages

You should deploy backend first, then deploy frontend.
That frontend pages is connect with backend server!.