// console.log('Running')
const express = require('express')
const app = express()

app.get('/', (req, res)=> { 
    res.send(_dirname + 'index.html')
})

app.listen(3000,  ()=> {
    console.log('listening on port 3000')
})

