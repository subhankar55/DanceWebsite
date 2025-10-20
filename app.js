const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const port = 80;
// To serve the static files
app.use('/static',express.static('static'));
// To parse the data of a Form into the req.body portion
app.use(express.urlencoded());


// To set the view engine to pug
app.set('view engine', 'pug');
// To join the current directory with the folder 'Views' under 'views' built-in express setting
app.set('views',path.join(__dirname,'Views'));

app.get('/',(req,res)=>{
    const params = {message :'The best dance school in delhi'};
    res.status(200).render('Home',params);
});

app.get('/Contact',(req,res)=>{
    const params = {message :'The best dance school in delhi'};
    res.status(200).render('Contact',params);
});

app.post('/Contact',(req,res)=>{
    let name = req.body.name;
    let phone = req.body.phone;
    let email = req.body.email;
    let address = req.body.address;
    let desc = req.body.desc;
    let op = `Client details: \n Name : ${name} \n Phone Number : ${phone} \n Email id : ${email} \n Address : ${address} \n Concern : ${desc}`;
    fs.writeFileSync('output.txt',op);
    console.log(req.body);
    res.status(200).render('Home');
})

app.listen(port, ()=>{
    console.log(`The application have started successfully. on port ${port}`);
})