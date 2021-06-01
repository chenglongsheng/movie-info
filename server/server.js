const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()
app.use(bodyParser.json())
app.use(morgan("combined"))

app.get('/api', (req, res) => {
    res.send({
        msg: "Hello Wprld"
    })
})

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send({
        data: "res.body"
    })
})

app.listen(3000, () => console.log(`Server has been started on port 3000`))