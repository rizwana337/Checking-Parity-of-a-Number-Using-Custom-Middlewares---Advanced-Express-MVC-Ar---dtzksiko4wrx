const express = require('express');
const app = express();

app.use(express.json());


//middleWare Function to check whether it is odd or Even

function CheckisOdd(req, res, next) {
    // console.log(req.query);
    var value = parseInt(req.query.num);
    if( value%2 == 0 ){
        req.query.isOdd = false;
    }else{
        req.query.isOdd = true;
    }
    next();
}

//sample Route for Test
// GET Reqest of API  '/?num=18' --> The router should return {"num":"18","isOdd":false}

app.get('/', CheckisOdd, (req, res) => {
    const data = {
        "num" : req.query.num,
        "isOdd" : req.query.isOdd
    };
    res.send(JSON.stringify(data));
});


module.exports = app;

// const express = require('express');
// const app = express();

// app.use(express.json());

 
// //Complete below given Middleware function which check whether number provided in api as params is odd or Even . Example is shown below

// //Example: 
// // GET Reqest of API  '/?num=18' --> The router should return {"num":"18","isOdd":false}

// function CheckisOdd(req, res, next) {

//     //Write Your Code here

// }


// app.get('/', CheckisOdd, (req, res) => {
    
//     //num in data should be replaced by num from the get request route
//     //isOdd in data should be replaced by whether num is odd or even if it odd make it true else false 
//     const data = {
//         "num" : 5,
//         "isOdd": true
//     };

//     res.send(JSON.stringify(data));
// });


// module.exports = app;

