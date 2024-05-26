const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

const requestLogger = (req,res, next) => {
    console.log('Method: ', req.method)
    console.log('Path: ', req.path)
    console.log('Body: ', req.body)
    console.log('------')
    next()

}

app.use(requestLogger)

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

const newId = () => {
    const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0
    return maxId + 1
}
app.post('/api/notes', (req, res) => { 
    const body = req.body

    if (!body.content) {
        return res.status(404).json({
            error:'content not found'
        })
    }

    const note = {
        content: body.content,
        important: Boolean(body.important) || false,
        id: newId()
    }
    // const note = req.body
    // note.id = maxId + 1

    notes = notes.concat(note)
    console.log(note)
    res.json(note)
})

const unknownEndpoint = (req,res) => {
    res.status(404).send({error: 'Not Found'})
}
app.use(unknownEndpoint)

app.listen(PORT,() => {
 console.log(`Server is running on Port:  ${PORT}`)
})