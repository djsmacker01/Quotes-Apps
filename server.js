// console.log('Running')
const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
// const figlet = require('figlet')
// const connectionString =  'mongodb+sr://djsmacker01:Fabulous01@cluster0.pxo3cst.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' 
MongoClient.connect(connectionString, (err, client) => {
    
    if (err) return console.log(err)
    console.log('connected to database')

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

})
//Make sure you place body-parser before CRUD handler



// MongoClient.connect(
//   connectionString,
//   {
//     useUnifiedTopology: true,
//   },
//   (err, client) => {
//     if (err) return console.error(err)
//     console.log('Connected to Database')
//   }
// )
// Outputs: 'GET'
