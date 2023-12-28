const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

PORT = 3001

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    port: 3305,
    database: 'test'
})

db.connect((err) =>{
    if (err)console.log("Error connecting to database")
    else{console.log("Connected to database")}
})
app.post('/register', async(req, res) => {
    username = req.body.username;
    password = req.body.password;

    query = `SELECT * FROM user WHERE user_name = "${username}" `;
    db.query(query, function(error, data){
        if(data.length > 0)res.send("Username is taken, please use another one");
        else {
            query = "INSERT INTO user (user_id, user_name, password) values (?, ?, ?)" 
            db.query(query, [Math.floor(Math.random() * ( 90000 -  10000 + 1) + 10000) + 10000, username, password]) 
            console.log("Registered Successfully");
            res.redirect('/')
        }
    });
})

app.post('/login', async(req, res) => {
    username = req.body.username;
    password = req.body.password;

    query = `SELECT * FROM user WHERE user_name = "${username}" and password = "${password}"`;
    
	//console.log("USERNAME: ", username);
	//console.log("PASSWORD: ", password);
    
    db.query(query, function(error, data){
        if(data && data.length > 0)
        {  
          const user = data[0];
          res.json({ user }); 
        }
        else  
        {console.log("Incorrect username or password");}
    });

});

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})