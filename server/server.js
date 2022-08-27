import express from "express"

const server = express()
const PORT = process.env.PORT || 3000
var todoArray = []

server.use(express.static('./build'))

server.get('/', (req, res) => {
    res.sendFile('./index.html')
})

server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server started on http://localhost:${PORT}`)
})