const express = require('express')
const app = express()
const PORT = 3000

let notes = [
    {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get('/', (req, res) => {
    res.send('<h1> Hello, Welcome to Note Application: </br> Where you take note of all languages</h1>')
})

app.get('/api/notes', (req, res) => { 
res.json(notes)
})

app.get('/api/notes/:id', (req, res) => { 
    const id = req.params.id 
    console.log(id)
    const note = notes.find(note => note.id === id)
    console.log(note)
    res.json(note)
})

app.listen(PORT,() => {
 console.log(`Server is running on Port:  ${PORT}`)
})