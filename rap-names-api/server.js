const express = require('express')
const app = express()
const PORT = 3000

const savage = {
    'age': 29,
    'birthName': ' Sheyaa Bin John',
    'birthLocation': 'London, UK',
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => { 
    res.json()
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}!`)
})