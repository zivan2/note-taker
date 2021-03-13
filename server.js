const express = require('express')
const path = require('path')
const port = 8000

let app = express()
let notes = [{
    title: 'My first note',
    body: 'This is the note body. Click here to edit.',
    id: 0
}]

app.get('/', (req, res) => res.sendFile(
    path.join(__dirname, 'index.html')
))

app.get('/notes/', (req, res) => {
    res.sendFile(
        path.join(__dirname, 'notes.html')
    )
})

app.get('/data/:param', (req, res) => {
    if (req.params) {
        if (parse
        let note = notes.find(note => note.id == req.params[0])
        if (note) {
            res.send(note)
        } else send(false)
    } else res.send(notes)
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))