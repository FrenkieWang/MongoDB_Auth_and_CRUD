This is a MongoDB with Auth.

I have deployed the project on the website
https://mern-stack-tutorial-frontend.vercel.app/user-home

This is the backend deployment:
https://mern-stack-tutorial-backend.vercel.app/

You should deploy backend (NodeJS + ExpressJS) on Vercel first,
then deploy frontend (ReactJs) on Vercel!


##STEP 1: [Deploy Backend]
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


##STEP 2: [Deploy Frontend]
1) Open www.vercel.com

2) Add New -> Project

3) Import Git Repository, select the Repository

4) Configure Project
Framework Preset, select **Create React App**.
Root Directory, select **frontend**.

5) You can see the frontend pages


You should deploy backend first, then deploy frontend.
That frontend pages is connect with backend server!.

##Reference:
https://www.youtube.com/watch?v=7CqJlxBYj-M

https://www.youtube.com/watch?v=adMD46G5BXU&list=LL&index=6&t=14s

https://blog.csdn.net/weixin_48165407/article/details/132668269

https://geek-docs.com/nodejs/nodejs-top-articles/1699307400_g_how-to-deploy-mern-application-on-vercel.html#:~:text=%E6%AD%A5%E9%AA%A41%EF%BC%9A%20%E9%83%A8%E7%BD%B2MERN%E5%BA%94%E7%94%A8%E7%9A%84%E5%89%8D%E7%AB%AF%EF%BC%9A%E8%BD%AC%E5%88%B0Vercel%E4%BB%AA%E8%A1%A8%E6%9D%BF%EF%BC%8C%E7%82%B9%E5%87%BB%E2%80%9C%E6%B7%BB%E5%8A%A0%E6%96%B0%E9%A1%B9%E7%9B%AE%E2%80%9D%E6%8C%89%E9%92%AE%EF%BC%8C%E9%80%89%E6%8B%A9%E2%80%9C%E9%A1%B9%E7%9B%AE%E2%80%9D%E7%B1%BB%E5%88%AB%E3%80%82%20%E6%AD%A5%E9%AA%A42%EF%BC%9A%20%E5%9C%A8%E5%B0%86Github%2F,Gitlab%20%2FBitBucket%E8%B4%A6%E5%8F%B7%E4%B8%8EVercel%E9%93%BE%E6%8E%A5%E4%B9%8B%E5%90%8E%EF%BC%8C%E5%AF%BC%E5%85%A5%E6%82%A8%E7%9A%84Git%E5%AD%98%E5%82%A8%E5%BA%93%EF%BC%9A%20%E6%AD%A5%E9%AA%A43%EF%BC%9A%20%E9%85%8D%E7%BD%AEMERN%E5%BA%94%E7%94%A8%E7%9A%84Node.js%E5%90%8E%E7%AB%AF%EF%BC%9A%20%E5%A1%AB%E5%86%99%E6%82%A8%E7%9A%84%E9%A1%B9%E7%9B%AE%E5%90%8D%E7%A7%B0%EF%BC%8C%E4%BE%8B%E5%A6%82my-project%E3%80%82