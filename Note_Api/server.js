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
    const id = Number(req.params.id) 
    console.log(id)
    const note = notes.find(note => note.id === id)
    // const note = notes.find(note => {
    //     console.log(note.id, typeof note.id, id, typeof id, note.id === id)
    //    return note.id === id 
    // } )
    if (note) {
         res.json(note)
    } else {
        res.status(404).end()
    }
    console.log(note)
   
})

app.delete('/api/notes/:id', (req, res) => { 
    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)
    res.status(200).end()
})

app.listen(PORT,() => {
 console.log(`Server is running on Port:  ${PORT}`)
})