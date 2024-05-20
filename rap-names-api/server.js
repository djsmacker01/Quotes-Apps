const express = require('express')
const app = express()
const PORT = 3000

const Rapper = {

'21 savage':{
    'age': 29,
    'birthName': ' Sheyaa Bin John',
    'birthLocation': 'London, England',
    },

 'Chance the Rapper':{
    'age': 29,
    'birthName': ' Chancelor Johnathan Bennet',
    'birthLocation': 'Chicago, Illinois',
    },

 'Dylan':{
    'age': 34,
    'birthName': 'Dylan',
    'birthLocation': 'Chicago, Illinois',
    },
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => { 
    res.json(Rapper)
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})