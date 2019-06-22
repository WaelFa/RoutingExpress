var express = require('express')
var app = express()


var server = app.listen(3000,()=> {
    console.log("server is starting")
})

app.get('/home/:name', (req, res) => {
    var data = req.params
    var x = Number(data.name)
    var str =""
    for (let i = 0; i < x; i++){
        str = str + "this is cool \n\n"
    }
    res.send(str)
})