// console.log('Running')
const express = require('express')
const app = express()
const figlet = require('figlet')

figlet('404', (err, data) => {
    if (err) {
        console.log('something went wrong....')
        console.dir(err)
        return;
    }
    console.log(data)
})

app.get('/', (req, res)=> { 
    res.send(_dirname + 'index.html')
})

app.listen(3000,  ()=> {
    console.log('listening on port 3000')
})

