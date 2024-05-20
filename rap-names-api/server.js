const express = require('express')
const app = express()
const PORT = 3000

const Rappers = {

'21 savage':{
    'age': 29,
    'birthName': ' Sheyaa Bin John',
    'birthLocation': 'London, England',
    },

 'chance the rapper':{
    'age': 29,
    'birthName': ' Chancelor Johnathan Bennet',
    'birthLocation': 'Chicago, Illinois',
    },

 'dylan':{
    'age': 34,
    'birthName': 'Dylan',
    'birthLocation': 'Chicago, Illinois',
    },
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (req, res) => { 
    const nameOfRapper = req.params.rapperName.toLowerCase()
    if (Rappers[nameOfRapper]) {
        res.json(Rappers[nameOfRapper])
    }

    else {
        res.json(Rappers['dylan'])
    }
    console.log(nameOfRapper)
    // res.json(Rappers)
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}!`)
})

