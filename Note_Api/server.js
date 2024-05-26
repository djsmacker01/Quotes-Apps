const express = require('express')
const app = express()
const PORT = 3000

let notes = [
    
]

app.get('/', (req, res) => {
    res.send('<h1> Hello, Welcome to Note Application: </br> Where you take note of all languages</h1>')
})

app.get('/api/notes', (req, res) => { 
res.json(notes)
})

app.listen(PORT,() => {
 console.log(`Server is running on Port:  ${PORT}`)
})