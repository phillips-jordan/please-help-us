var express = require('express')
var multer = require('multer')
var bodyParser = require('body-parser')

var app = express()
app.use(express.static('./public/'))

// app.use(bodyParser.raw({ type: "*/*", limit: "50mb" }));

// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(
//   bodyParser.urlencoded({
//     limit: "50mb",
//     extended: true,
//     parameterLimit: 50000
//   })
// );


app.use(multer({dest: 'uploads/'}).single('file'))



app.post('/upload',  function (req, res, next) {
    console.log('test', req.file)
    // upload(req,res,err=>{
    //     if (err) throw err;
    //     console.log(req)
    // })
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.send('ok')
})

app.listen(6000,()=>{
    console.log('nice')
})