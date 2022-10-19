const express=require('express');
const app=express();

// set up the route for api
app.get("/api", (req, res)=>{
    // send a json array of users
    // this is our backend api
    // upon starting just the backend, the get will print the api that is the json therefore we have to render the api contents in the jsx of App.js
    res.json({"users":["userOne", "userTwo", "userThree"]})
    // basically this is going to fetch the users array and display all the users
})

// In order to start up our backend
// when the app listens to the port 500 then we need some sort of message to tell us that its listening on port 5000
app.listen(5000, ()=>{
    console.log("Server started on port 5000");
})