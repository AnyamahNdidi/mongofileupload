const express = require('express')
const port =2903
const multer = require('multer')
const app  = express()


app.get('/', function(req, res){
    res.send("hello world")
    
})

const storageEngine = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb (null, './file')
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage:storageEngine
})



app.post('/upload', upload.single("avatar") ,function(req, res){
   

    res.status(200).send("your file has been uploaded ")

})
app.post('/uploadmult', upload.array('avater', 4) ,function(req, res){
    
    res.status(200).send("your file has been uploaded ")

})

app.listen(port, function(){
    console.log("this is the port im using ")
})