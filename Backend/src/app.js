const express = require('express')
const noteModel = require('./models/note.model')
const cors = require('cors')
const path = require('path')

const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(express.static('./public'))

// create notes API 
app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(200).json({
        message: 'Note created successfully',
        note
    })
})

//fetching notes api
app.get('/api/notes', async (req, res) => {
    const note = await noteModel.find()

    res.status(201).json({
        message: "Notes fetched successfully",
        note 
    })

})

// delete notes
app.delete('/api/notes/:id',async (req,res)=>{
    const id = req.params.id

    const note = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "Note deleted successfully",
        note
    })
})

app.use("*name",(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})



module.exports = app