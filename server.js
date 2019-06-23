var express = require('express')
var app = express()


var server = app.listen(3000, () => {
    console.log("server is starting")
})
var time = new Date().getHours()

app.get('/:target', (req, res) => {
    let target = req.params.target
    console.log(time)
    if ((time > 8) && (time < 17)) {
        console.log("this is wrong")
        switch (target) {
            case "home":
                res.sendFile(__dirname + '/public/home.html')
                break;
            case "contact":
                res.sendFile(__dirname + '/public/contact.html')
                break;
            case "services":
                res.sendFile(__dirname + '/public/services.html')
                break;
        }
      
    } else {
        console.log("true")
        res.send("<center><h1 style=\"color: lightblue; margin-top:200px\">This is the contact page</h1></center>")
    }

})