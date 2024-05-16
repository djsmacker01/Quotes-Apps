// console.log('Running')
const express = require('express')
const app = express()
// const figlet = require('figlet')


app.get('/', (req, res)=> { 
    res.sendFile(__dirname + '/index.html')
    // console.log(req.headers); 
})

app.listen(3000,  ()=> {
    console.log('listening on port 3000')
})


// Outputs: 'GET'
