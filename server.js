// console.log('Running')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const figlet = require('figlet')

//Make sure you place body-parser before CRUD handler
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res)=> { 
    res.sendFile(__dirname + '/index.html') // console.log(req.headers); 
})

app.post('/quotes', (req, res)=> {
    console.log(req.body)
})

app.listen(3000,  ()=> {
    console.log('listening on port 3000')
})


// Outputs: 'GET'
