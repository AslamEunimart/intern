var studentr = require('.app/routes/studentr')

const express = require('express');
const app = express();
app.listen(1000, () => {
    console.log("Server listening @ 1000")
})
var bodyParser = require('body-parser')
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use('/student', studentr)




app.get('/', (req, res) => {
    res.send("Hi there")
})