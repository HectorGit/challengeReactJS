# challengeReactJS
ReactJS Challenge

The current application is very bare bones
and just has commented out sample code that
either I wrote, or thought would be useful.

I had confusion about how the
front end and the back end would communicate.
For example - I needed the front end (React)
to receive the 'clicks' on 'choose file''upload' or 'play'.
But React seems pretty self contained.

And then the back end to upload the file to mongoDB with GridFS or Multer.
This would require POST method to upload the parts to MongoDB,
and                GET  method to download the parts.

Posteriorly, the file would be retrieved, and played back.
Unfortunately I didn't find a resource indicating how to play back
a multi part file. 

------------------

I used 'create-react-app client' to initialize the application for react

-------------------

> react front end (ran with    npm start)

About react : I learned that there are Components, (which are composible)
              I learned that there are props, which are passed down from
              a parent component (and can even be functions)
              
              I learned that you can use Babel to translate html-like JSX
              into javascript. (which helps readability).
                     
              I learned about the DOM and how it renders components
              
              I learned that there is state, which can control how
              your components are rendered.

----------------

> node + express back end (run with    node server.js)

Outside of the 'client' folder I created a node app with 'npm init'
and created server js which would hold routes and specify dependencies.

I had used node and express before for my heroku site.
I did not set up a MongoDB for that site, but I did for other projects.

I am aware that you would declare CRUD operations here. (Your API)
I am aware that you can have 'controllers' for different pages,
but now, for this task, I would just probably have one (single page app)

Attempt: I was unsure how to make it so that the file was uploaded
         to a database - and how to stream it for playback on download.
         The method I found people were using was to upload it to MongoDB
         as a multi part file with 'multer' or GridFS. 
         
         I couldn't get it working, so I commented it out.

----------------

About Docker: (virtualization)
             I learned that you can create a Dockerfile with
             instructions that indicate what environment 
             your application needs to run properly
             
             That it helps in terms of having consistent behaviour from the app
             no matter where you run it from 
             
             I learned that you can create an image and have it 
             in a container 
             
             I learned that you can create a volume instead
             during development to see the changes made to your files
             be displayed
             
---------

About github : (version control)
             Note to self : update to latest version and 
             make the path point to the right git.exe for command line
             or push/pull wont work because git version is too old.

---------

Resources found that could potentially help me learn more in the future:

https://www.youtube.com/watch?v=rpJO0T08Bnc < MERN stack tutorial for beginners
https://www.fullstackreact.com/
https://www.udemy.com/node-with-react-fullstack-web-development/
             




