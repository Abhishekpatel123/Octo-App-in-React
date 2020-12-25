const express = require('express');
// const { v4 : uuidv4 } = require('uuid');


// App Config
const app = express();
const port = process.env.PORT || 5001;


// Middleware
app.use(express.json());
// app.use(express.urlencoded({extended : false}))
app.use(express.static('./public'))

// this is imp code for data transfer
app.use(function (req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials',true);
  
    next();
  })




// API endpoint 
app.get('/',(req,res)=>{

    // res.redirect(`V${uuidv4()}`);
    res.send("hello you got that");

});

const server = app.listen(port , ()=>{console.log(`server is litesning at port ${port}`)});

const io = require('socket.io')(server);



io.on('connection',(socket)=>{

    socket.on('message', data =>{
        socket.broadcast.emit('message', data);
        // io.emit('message', data);

    })
    
})
